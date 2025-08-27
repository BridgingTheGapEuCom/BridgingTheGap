<template>
  <ArticleLayout>
    <article>
      <h2>Something old, something new</h2>
      <p>
        As we dive deeper into API-Led Architecture, we can notice that some patterns resemble those
        found in a different Ecosystem Architectural Style - specifically Event-Driven Architecture
        (EDA). This similarity exists because API-Led Architecture inherits qualities, so also
        patterns, from EDA. As API-Led introduces new capabilities, it also addresses challenges
        that were difficult or impossible to solve in the architectural styles it draws from. In
        this article, we will discuss the key differences that API-Led Architecture brings to the
        one-way point-to-point pattern.
      </p>
      <h2>Pattern nameplate</h2>
      <p class="m-0">Name: <b>One-way point-to-point</b></p>
      <p class="m-0">Communication mode: <b>asynchronous</b></p>
      <p class="m-0">Architectural style: <b>API-Led Architecture</b></p>
      <p>Common use cases:</p>
      <ul>
        <li>
          Decoupling from processes with long or unpredictable execution times - promoting
          non-blocking communication and therefore increasing responsiveness of client systems. This
          is done by separating processes that are time-consuming or have an unstable response time
          from their consumers,
        </li>
        <li>
          Ability to consume notifications - certain systems, due to their blackbox nature, do not
          have a capability to consume messages directly from an event broker, providing them with
          the additional layer of abstraction in form of an adapter enables that,
        </li>
        <li>
          Competing consumers pattern - distributing workload efficiently across multiple consumers
          for improved throughput and scalability. This can be considered as a very simplistic way
          of load balancing,
        </li>
        <li>
          Sequenced processing - ensuring messages are processed in the order they were received,
          which is crucial in certain scenarios. This requires a broker that has a First-In -
          First-Out (FIFO) capability, alongside the same capabilities in the producing system.
        </li>
        <li>
          Queue based load leveling - providing the capability to smooth out the spikes in service
          demand by temporarily storing excess events.
        </li>
      </ul>
      <p>Architectural coupling:</p>
      <ul>
        <li>
          Contract coupling - both, the service consumer and the data provider are bound by contract
          coupling with the integration platform, but not directly with each other,
        </li>
        <li>Semantic coupling - unavoidable with any data exchange,</li>
      </ul>
      <p>Operational coupling:</p>
      <ul>
        <li>
          There are distinct architectural quanta, one for the event producer, the other for event
          consumer, both overlapping on the event broker structure used (topic or queue).
        </li>
      </ul>
      <h3>Diagram(s)</h3>
      <API_led_architecture_API_led_Asynchronous_P2P_Queue />
      <p class="text-center font-bold mt-4">One-way p2p using a queue</p>
      <API_led_architecture_API_led_Asynchronous_P2P_Topic />
      <p class="text-center font-bold mt-4">Alternative: One-way p2p using a topic</p>
      <API_led_architecture_API_led_Asynchronous_P2P_Topic2Queue />
      <p class="text-center font-bold mt-4">
        Alternative: One-way p2p using a topic bridged to a queue
      </p>
      <h2>Pattern analysis</h2>
      <p>
        This pattern derives from the one-way point-to-point pattern found in EDA. As we are
        describing this pattern within the context of API-Led Architecture, it is important to
        consider the qualities of using specific event broker structures, as well as different
        asynchronous protocols, to facilitate this communication. As we depict them in the diagrams,
        with the addition of channel and adapter layers, the core function remains the same as
        described in
        <NuxtLink
          class="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-nowrap link overflow-hidden"
          to="/articles/Event-Driven_One-way_point-to-point"
          >Event-Driven One-way point-to-point</NuxtLink
        >
      </p>
      <h3>General pattern analysis</h3>
      <p>
        This pattern builds on the one-way point-to-point pattern from EDA, but adds new layers as
        part of API-Led Architecture. The main differentiator is the introduction of two abstraction
        layers: a channel layer and an adapter layer. In EDA alone, systems interact directly with
        the event broker and its protocols. In API-Led Architecture, domain systems are not directly
        exposed to event broker structures. Instead, the interaction with the event broker is
        handled by the respective channel and adapter applications, being the direct providers and
        consumers. This alone solves a few key coupling problems at a trade-off of moving and adding
        complexity.
      </p>
      <h4>Architectural considerations</h4>
      <p>
        The addition of channel and adapter layers provides several significant architectural
        benefits. Primarily, they loosen architectural coupling beyond what asynchronous
        communication alone offers. Specifically, they change how conversation coupling, data type
        and format coupling, and contract coupling are applied.
      </p>
      <p>
        The introduction of additional abstraction layers allows for a protocol-agnostic approach,
        where the channel and adapter layers provide protocol mediation. Domain systems can use
        their preferred protocols (e.g., SOAP, REST, JDBC) without needing to conform to the event
        broker's native protocol. This significantly reduces the work required by domain systems for
        communication, limiting the number of dependencies within their codebase.
      </p>
      <p>
        With these abstraction layers in place, it is now possible to parse the payload, and by that
        handling various transformations to adjust the payload towards the data model and format
        required by the consumer system. This means producing systems can send data in formats like
        XML, and consuming systems can receive it in CSV, JSON, or directly placed in a database
        structure. The translation is managed and handled by the integration platform. This further
        supports reducing the implementation costs of the domain systems, contributing to a lighter
        system footprint. Furthermore, while this was already possible in the Broker Architecture,
        the key difference is that now it can be done per domain system, adding to the potential
        extensibility of this pattern.
      </p>
      <p>
        Another set of architectural characteristics that is significantly augmented by the
        application of these abstraction layers is observability and auditability. By funneling the
        communication flows through channels and adapters, it becomes easier to track what and when
        communication happens. This is particularly beneficial when dealing with varied ecosystems
        that contain legacy systems that are difficult to refactor for externalized observability.
        With channel applications being the dedicated endpoints for such systems, metadata can be
        created for each message produced by such a system, providing proper traceability through
        the ecosystem. Similarly, for consumer systems, the adapter application consumes the
        provided metadata, creating a digital footprint of data consumption. While these
        capabilities do not substitute for proper business process observability within those
        systems, they are a significant step towards a better view on how data is processed and used
        within an ecosystem with hard to change legacy applications.
      </p>
      <h4>Operational Considerations</h4>
      <p>
        Moving on to the benefits for the operational aspects of using this pattern, the channel and
        adapter layers enable significant improvements concerning data quality and error handling.
        The channel application, as the abstraction layer can mediate protocols, meaning it does not
        have to expose asynchronous interfaces towards the producing systems. Building on the
        protocol agnostic approach, this allows for instantaneous and actionable data validation and
        error feedback. As a result we are lowering the complexity of error handling compared to
        purely asynchronous communication. Errors, especially those in payload, can be identified
        and communicated back to the producer in real-time with specific error statements. This
        bypasses the potentially time-consuming processes associated with analyzing messages that
        landed in Dead Letter Queues (DLQs) in pure EDA scenarios, which do not read payload’s
        content. In API-Led if the event is rejected due to poor data quality on the channel layer,
        the feedback can be instantaneous to the producer. This benefit is not easily achievable
        using the EDA counterpart. This responsibility for handling such functions lies with the
        domain systems itself, so it is specifically dependent on the maturity and capabilities of
        the development team handling that particular system. When moved to the integration
        platform, most of the time, it lands within the responsibility of the integration team that
        specialises in handling communication error handling.
      </p>
      <p>
        Additionally, the adapter layer can provide a secondary layer of validation, especially in
        scenarios with multiple producers sending messages to a single consumer. This allows for the
        identification of out-of-sync producers. For example, if one of the producer's channel
        applications was not updated properly (e.g. CI/CD error in deployment), and sends out
        messages in the wrong data model, a validation error will flag that problem. Metadata can be
        easily used to pinpoint which channel is the culprit. Such insights are crucial for
        maintaining operational consistency and pinpointing issues during production deployments and
        later operations.
      </p>
      <p>
        Lastly, as the additional abstraction layers are leveraged to process and augment metadata,
        this becomes a significant operational enabler. For legacy systems that may not natively
        produce correlation IDs, timestamps, or other identifiers, the channel and adapter layers
        can inject this essential metadata. This enhances traceability across the entire ecosystem,
        providing valuable insights into communication flows. This is an essential aid in
        operational understanding, as well as root cause analysis, even if the metadata only reaches
        the adapter layer for some legacy consumers. This way operations teams can handle production
        incidents a lot faster, armed with the right tools and data to quickly analyze the problems
        and introduce workarounds and fixes.
      </p>
      <h2>Conclusions</h2>
      <p>
        As mentioned before in the analogous pattern article for One-way point-to-point in EDA, this
        is a good pattern to have in an integration architects toolbelt. It is especially useful in
        API-Led Architecture, where it can provide a very wanted looser coupling between various
        domain systems, with a protocol agnostic approach on top of that, providing real-time
        communication, as well as real-time feedback to the right systems.
      </p>
    </article>
  </ArticleLayout>
</template>

<script lang="ts" setup>
import API_led_architecture_API_led_Asynchronous_P2P_Queue from '~/components/articles/API-Led_One-way_point-to-point/API_led_architecture_API_led_Asynchronous_P2P_Queue.vue'
import API_led_architecture_API_led_Asynchronous_P2P_Topic from '~/components/articles/API-Led_One-way_point-to-point/API_led_architecture_API_led_Asynchronous_P2P_Topic.vue'
import API_led_architecture_API_led_Asynchronous_P2P_Topic2Queue from '~/components/articles/API-Led_One-way_point-to-point/API_led_architecture_API_led_Asynchronous_P2P_Topic2Queue.vue'
</script>

<style scoped></style>
