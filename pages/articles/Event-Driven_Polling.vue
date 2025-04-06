<template>
  <ArticleLayout>
    <article>
      <h2>Not enough context</h2>
      <p>
        There are many controversial patterns in the world of IT architecture, some are even
        considered antipatterns, which by most people are flagged as “avoid at all cost”, or “always
        bad”. So like with any other architectural style, Event-Driven Architecture (EDA) also has a
        pattern that brings controversy to the table. While initially this article was supposed to
        be named an antipattern, we decided not to name it so, due to the fact that this is still a
        valid pattern, but one that is difficult to place in the right context where it should be
        used. To cover that problem area we wrote a separate article that provides a bit more
        explanation on the matter. Instead of discussing how problematic this pattern might be we
        decided to present it to you as any pattern and provide the right context to understand it
        and be able to use it with success.
      </p>
      <h2>Pattern nameplate</h2>
      <p class="m-0">
        Name: <b>Polling / Anemic Events</b>
      </p>
      <p class="m-0">
        Communication mode: <b>Hybrid</b>
      </p>
      <p class="m-0">
        Architectural style: <b>Event-Driven Architecture</b>
      </p>
      <p class="m-0">
        Common use cases:
      </p>
      <ul>
        <li>
          Distribution of data object events (create, update, delete) to a large number of
          subscribers with a varied scope of payload of the same object (e.g. regulatory variations
          per territory),
        </li>
        <li>Strict, centrally governed security control of access to data,</li>
      </ul>
      <p>Architectural coupling:</p>
      <ul>
        <li>
          Contract coupling - the event producer and the event consumers are not only coupled
          contractually by the definition and granularity of the event, but are also coupled by the
          contract of the API used for polling the payload for each event,
        </li>
        <li>
          Data type and format coupling - the provider and consumer must have the same understanding
          of the data model types and format (e.g. JSON, XML, CSV)
        </li>
        <li>
          Conversation coupling - depending on the broker implementation, the consumer and provider
          may be locked by the protocol of the event broker,
        </li>
        <li>Semantic coupling - unavoidable with any data exchange,</li>
      </ul>
      <p>Operational coupling:</p>
      <ul>
        <li>
          Temporal coupling - for the data to be actually transferred over a point-to-point API
          call, an event providing a record identifier must occur first and be successfully
          delivered to the consumer system.
        </li>
      </ul>
      <h3>Diagram(s)</h3>
      <h4>Pattern diagrams</h4>
      <div class="flex justify-center">
        <event-driven-polling-key-based-contract-distribution />
      </div>
      <p class="text-center font-bold mt-4">
        Base distribution of an anemic event
      </p>
      <div class="flex justify-center">
        <event-driven_-polling-key-based-contract_details />
      </div>
      <p class="text-center font-bold mt-4">
        Payload polling
      </p>
      <h4>Behavioral diagram</h4>
      <div class="flex justify-center">
        <EDAPolling />
      </div>
      <p class="text-center font-bold mt-4">
        Polling behaviour
      </p>
      <h2>Pattern analysis</h2>
      <p>
        The Event-Driven Polling pattern, also known as the "anemic events" pattern, presents a
        unique approach to data distribution within an EDA. Unlike a typical broadcast or multicast
        pattern, this method employs a two-step process. First, an event is published using a
        broadcast pattern, containing only an identifier, and sometimes minimal metadata (e.g.
        schema identifier for parts of larger data objects). Second, consumers must make an
        explicit, on-demand API call to retrieve the full data payload. This characteristic defines
        the core behavior of the pattern and significantly impacts its applicability.
      </p>
      <p>
        This two-step nature leads to potential inefficiencies. Scheduled polling is noted to be 98%
        ineffective (returning no results), and while event-driven polling reduces this
        significantly, there are still cases where consumers retrieve data that is irrelevant to
        them. This occurs when changes are trivial or when a consumer does not require the specific
        data that has been updated. Despite these inefficiencies, the pattern offers valuable
        benefits, particularly in scenarios where security and controlled access to data are
        paramount.
      </p>
      <h4>Architectural considerations</h4>
      <p>
        When considering the Event-Driven Polling pattern it is important to note that it is more
        complex compared to other EDA patterns due to the required two-step interaction. This comes
        with certain trade-offs. Moving the payload delivery mechanism to an on-demand API call,
        introduces a level of abstraction, that is the key benefit of using this pattern. The
        abstraction aspect enhances the control over accessing data, where depending on the needs,
        each consumer can have a varied response to the anemic event. This in turn enhances
        security, as each API call can be authenticated and authorized. For example, using GraphQL
        or a REST API with credential-based data access allows for granular control over which
        systems can access specific data attributes. This pattern, like the related broadcast and
        multicast patterns, is quite extensible, as new consumers can be added relatively easily,
        with the overhead of an on-demand API call.
      </p>
      <p>
        However, this introduces a complexity shift, where it is the responsibility of the consumers
        to implement data access logic needed to retrieve and process the payloads. This means that
        we are multiplying the number of implementations of said logic over several systems.
        Furthermore, if we introduce control mechanisms on the producer side, that narrow the scope
        of data, we introduce a tighter coupling between the producer and the consumers, as the
        producer now needs more knowledge about each of the consuming systems (configurable by
        design or acquired in runtime). The potential extensibility of this pattern adds to the
        complexity equation, as each new consumer will introduce that repeated implementation as
        well as at least new configuration on the provider side.
      </p>
      <p>
        Considering data models and contracts, while the anemic event contract itself is resilient,
        the on-demand API contract is more brittle, as changes to the API will most likely affect
        all consumers. Adding a new consumer might introduce a requirement to change the API to
        accommodate business needs, that in turn might impact all other consumers.
      </p>
      <h4>Operational Considerations</h4>
      <p>
        Operationally, the Event-Driven Polling pattern introduces some challenges as a consequence
        of adopting this pattern.
      </p>
      <p>
        Testability is complicated by the two-step process, requiring an extended test coverage for
        event production, delivery, payload retrieval, and end-to-end integration. Taking into
        account the possibility of adjusting the payload scope per customer, that makes the scope of
        test cases quite large and complex, with many variants, while the test cases for a broadcast
        or multicast are a lot simpler.
      </p>
      <p>
        Performance is also affected due to the introduction of additional latency between event
        publication and the actual payload retrieval. This two-step process inherently limits
        performance compared to simpler event-driven patterns. Furthermore, whenever communication
        requires more steps to finalize the transfer of data, that introduces additional choke
        points or points of failure that can have a severe negative impact. It is in the
        responsibility of the Event consumers to properly and timely handle processing of the anemic
        event, so in essence, react without delays. Additionally, content filtering per consumer
        will also impact the performance of the provider, as querying data and applying filtration,
        that is based on custom logic, will increase the time needed to produce the response. With
        many queries done concurrently, this may have a noticeable impact on the producer system and
        the API behavior.
      </p>
      <p>
        Another thing to consider from an operational point of view is the aspect of temporal
        coupling that may influence processing, especially if it is required for the events to be
        processed in a sequential manner. This kind of scenario will need to be carefully addressed
        through design per case as to what would be the behaviour if the data changes before the
        previous event was polled.
      </p>
      <p>
        Lastly, when it comes to downsides of Event-Driven Polling, observability and auditability
        become more challenging due to the added complexity, but with a centralized data master
        issuing events and managing payload access, these can be somewhat mitigated. The key aspect
        is to implement sufficient observability over the consumer side, to ensure proper processing
        of events and later their payload, which is especially important when dealing with sensitive
        or restricted data.
      </p>
      <p>
        On the other hand, security, especially the safety of data, is improved through controlled
        access to payload data, which can be crucial for regulatory compliance, such as GDPR. It is
        especially beneficial when the sheer number of varying consumers completely disables the
        capability to provide usable and safe payload over a broadcast or multicast.
      </p>
      <h2>Conclusions</h2>
      <p>
        The Event-Driven Polling pattern, while complex, is a valid and useful pattern for niche
        applications. Its primary strengths lie in enhanced security and controlled data
        distribution, making it suitable for scenarios where different consumers require varying
        attributes from the same data object. In such cases, the benefits of controlled access and
        simplified producer logic outweigh the increased complexity for consumers and potential
        inefficiencies. While it can be misused or applied without good reason, leading to various
        challenges, it is not an anti-pattern in itself. When used appropriately, it is a valuable
        tool for architects and developers in specific contexts.
      </p>
    </article>
  </ArticleLayout>
</template>

<script setup lang="ts">
import EventDrivenPollingKeyBasedContractDistribution from '~/components/articles/Event-Driven_Polling/Event-Driven_Polling-key-based-contract_distribution.vue'
import EventDriven_PollingKeyBasedContract_details from '~/components/articles/Event-Driven_Polling/Event-Driven_Polling-key-based-contract_details.vue'
import EDAPolling from '~/components/articles/Event-Driven_Polling/EDA-Polling.vue'
</script>

<style scoped></style>
