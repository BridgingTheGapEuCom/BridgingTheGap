<template>
  <ArticleLayout>
    <article>
      <h2>Sorting through the messages</h2>
      <p>
        When working with Event-Driven Architecture on an ecosystem level, efficient message routing
        is an essential feature. Typically, routing decisions are based on metadata included with
        the message, so a structure like a JMS Header, routing key in AMQP0.9 or variables in topic
        name in AMQP1.0. But what if the producer does not provide these metadata? The common sense
        is to go to that particular system and make changes to it so that it supplements the
        communication with additional information. Well then, what if that is not possible? This
        might lead to a number of communication inefficiencies and consumers processing data they
        don’t need to process.
      </p>
      <p>
        To address this, content-based routing could be used, where a dedicated application parses
        the message payload to determine sufficient metadata for routing. While this approach can
        solve immediate problems, it often introduces significant complexities and potential
        pitfalls.
      </p>
      <h2>Pattern nameplate</h2>
      <p class="m-0">
        Name: <b>Content-based routing</b>
      </p>
      <p class="m-0">
        Communication mode: <b>Asynchronous</b>
      </p>
      <p class="m-0">
        Architectural style: <b>Event-Driven Architecture</b>
      </p>
      <p>Common use cases:</p>
      <ul>
        <li>Providing routing metadata, when an event producer is incapable of producing them,</li>
        <li>
          Refinement of coarse grained event for redistribution (create, update, delete), for
          example new product configuration, or an update done on a customer profile,
        </li>
      </ul>
      <p>Architectural coupling:</p>
      <ul>
        <li>
          Contract coupling - the provider, router and the consumers of the event are locked by an
          agreed contract, while it is wanted within the bounds of a p2p communication, might prove
          problematic with a broadcast or multicast pattern and multiple consumers that only use a
          subset of the payload described by the contract. This, if left unmanaged, may lead to
          potential data security problems and cause contract brittleness,
        </li>
        <li>
          Data type and format coupling - the provider and the router, as well as the router and the
          consumer must have the same understanding of the data model types and format (e.g. JSON,
          XML, CSV).
        </li>
        <li>
          Conversation coupling - depending on the broker implementation, the consumer and provider
          may be locked by the protocol of the event broker. Furthermore, the router creates
          additional coupling in this regard as all consumers will now be dependent on the metadata
          provided by the router to the data exchange,
        </li>
        <li>Semantic coupling - unavoidable with any data exchange,</li>
      </ul>
      <p>Operational coupling:</p>
      <ul>
        <li>
          Semantic coupling - each payload is parsed by the router to determine routing metadata as
          needed, so each instance of the payload will influence how the communication will proceed.
        </li>
        <li>
          Temporal coupling - depending on how the router is built and if it supports parallel
          processing, this may introduce additional problems, like race conditions between events of
          the same type, but also consumers will now depend on the validity of the routing logic
          introduced in this component,
        </li>
      </ul>
      <h3>Diagram(s)</h3>
      <ContentBasedFiltering />
      <p class="text-center font-bold mt-0">
        Content-based routing pattern
      </p>
      <h2>Pattern analysis</h2>
      <p>
        Content-based routing is a solution that is most likely classified as a workaround, rather
        than a permanent fix, and might be highly influenced by business needs, which drive to solve
        problems quickly, often without considering implications. Let’s take a closer look at the
        situation and what it means to implement this pattern.
      </p>
      <p>
        Initially the producer exposes data over a topic, to which there are several subscribers and
        all of them receive the same set of data, as described by the
        <NuxtLink
          to="/articles/EDA_Broadcast_and_Multicast"
          aria-current="page"
        >
          broadcast pattern
        </NuxtLink>
        . A new need is introduced to change how data is distributed to be more selective.
        Unfortunately, in this case, there is no metadata available for routing. This makes the task
        at hand impossible within the existing setup, as native message broker capabilities cannot
        be used to provide routing. There might be a number of reasons why there is no metadata,
        e.g. a legacy system that is not modifiable anymore due to lack of knowledge or skills in
        the organization, a third party application that we have no control over or simply the cost
        and effort needed to do so is too high.
      </p>
      <p>
        This results in a situation where messages are broadcast to all subscribers, regardless of
        their actual interest in the content. Introducing a content-based router addresses this
        need. This application intercepts messages, analyzes their payload, produces metadata based
        on that payload to finally republish the message to another topic for redistribution. The
        message broker routes them to the appropriate destinations based on the metadata created
        from the message content, hence the name: content-based router.
      </p>
      <p>
        While this approach may seem straightforward, it introduces several challenges. The routing
        application, often treated as mere infrastructure, tends to be neglected. This in turn leads
        to poor maintenance, insufficient resource allocation, and the potential for it to become a
        performance bottleneck. Additionally, business logic is often introduced into this
        application, further complicating its operation and increasing the risk of errors and
        failures blocking the communication. While by default the router is stateless, and metadata
        is created only from the current payload contents. If business logic is introduced, that
        often brings some sort of state to this application (e.g. dictionary reference table for
        translating values, payload cache), that complicates the process and makes maintenance even
        harder as well as the application itself becomes a higher risk factor in communication.
      </p>
      <h3>Architectural considerations</h3>
      <p>
        The content-based routing pattern may have a significant impact on the structure of the
        solution. Here are some key considerations:
      </p>
      <p>
        We are introducing a new component with a high degree of coupling. The router becomes a
        central point of dependency, tightly coupled to the producer. This can lead to a brittle
        system, where changes in the producer system might lead to a communication stop. The content
        router must understand the message content to route effectively. Let’s consider a scenario
        where finally the legacy system is being replaced, but we’re aiming at a quick win, so all
        communication channels remain the same. Small adjustments are made to the data model of the
        payload on the consumer sides for the communication to work. And it does not, because the
        content-based router was most likely forgotten and the data models it uses were not updated.
        Hopefully that happened only in a test environment.
      </p>
      <p>
        It’s not all bad though, as Content-based routing enhances extensibility by enabling more
        refined subscriptions. The additional plus of this situation, which is especially relevant
        for cloud environments, is that we limit the number of calls, as that is what is generating
        costs. However, this comes at a damage to simplicity. The additional routing application
        adds complexity to the system, making it harder to understand, test, maintain, and
        troubleshoot.
      </p>
      <h3>Operational Considerations</h3>
      <p>
        From an operational perspective, content-based routing introduces several challenges that
        cannot be ignored when introducing this pattern into the communication flow.
      </p>
      <p>
        First of all, this pattern introduces additional latency. The fact that we place an
        additional component in between the event producer and event consumers, which is responsible
        for parsing the payload, extracting relevant information, repackaging the payload and
        redistributing it with additional metadata attached. All of these are additional steps that
        take time, which means it will have an impact on performance.
      </p>
      <p>
        Secondly, we have to deal with the maintenance overhead! Dedicated application responsible
        for producing routing metadata requires ongoing maintenance and operational support. This
        includes ensuring it has sufficient resources, monitoring its performance. This means that
        we need to be aware of any issues that may arise, before they become a problem! Neglecting
        this can lead to performance bottlenecks and communication failures, which can be pretty
        costly for a business.
      </p>
      <p>
        As mentioned above, introducing an additional application increases the complexity of the
        overall solution. This makes it more challenging to test and debug, as there are more moving
        parts and potential points of failure. Observability is also impacted, as it becomes harder
        to track the flow of messages. If the router is a workaround, that was created to solve an
        immediate problem, it will likely have no proper monitoring, so quite soon after, no one
        will know what is happening to it. This leads to another aspect of this pattern that needs
        to be addressed - it may become a single point of failure! And that is not for a single
        integration flow, but as it redistributes the events, especially those that came as coarse
        grained, to more than one topic with added metadata, it impacts multiple business processes.
        If it goes down, message routing is disrupted, potentially bringing a broad spectrum of
        communication to a halt.
      </p>
      <p>
        Lastly, if the message payload contains sensitive information it may have been previously
        encrypted by the producer. For the routing to work, the router would need to decrypt the
        payload for analysis. We may end up in a situation, where the communication that was
        previously considered secure, now leaks data through logs that were not properly masked and
        persist payload in an unparsed, yet human-readable form. This introduces a potential
        security risk, especially if the application is not properly maintained, updated, monitored,
        or secured.
      </p>
      <h2>Conclusions</h2>
      <p>
        Content-based routing in event-driven architectures is generally considered an anti-pattern.
        While it can provide a temporary solution for routing messages when producers lack metadata,
        it introduces significant risks and complexities. The dedicated routing application often
        becomes a maintenance burden, a performance bottleneck, and a single point of failure.
      </p>
      <p>
        Whenever possible, the long-term solution is to refactor legacy producers to include the
        necessary metadata for routing. This eliminates the need for a dedicated routing application
        and simplifies the overall architecture. So while content-based routing might seem like a
        perfect quick fix, its drawbacks often outweigh its benefits, making it a good practice to
        avoid or remove as quickly as possible in most scenarios.
      </p>
    </article>
  </ArticleLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContentBasedFiltering from '~/components/articles/EDA_Content-based_filtering/ContentBasedFiltering.vue'

export default defineComponent({
  components: { ContentBasedFiltering }
})
</script>

<style scoped></style>
