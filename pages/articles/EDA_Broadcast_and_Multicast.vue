<template>
  <ArticleLayout>
    <article>
      <h2>A common pattern</h2>
      <p>
        When you dive into the world of Event-Driven Architecture, the phrase you hear most often is
        “pub-sub” or “publish-subscribe”, which seems to be the most commonly used data distribution
        pattern in this architecture. And for a lot of cases this will be very true, especially when
        we'd take a look at MQTT, where the only available structure on the broker is a topic. In
        essence, this pattern could cover all possible cases for the number of communication
        participants: one-to-one, one-to-many, many-to-one, and many-to-many.
      </p>
      <h2>Pattern nameplate</h2>
      <p style="margin: 0">Name: <b>Broadcast and Multicast</b></p>
      <p style="margin: 0">Communication mode: <b>Asynchronous</b></p>
      <p style="margin: 0">Architectural style: <b>Event-Driven Architecture</b></p>
      <p>Common use cases:</p>
      <ul>
        <li>
          Distribution of data object events (create, update, delete), for example new product
          configuration, or an update done on a customer profile,
        </li>
      </ul>
      <p>Architectural coupling:</p>
      <ul>
        <li>
          Contract coupling - the provider and consumers of the event are locked by an agreed
          contract schema, while it is wanted within the bounds of a p2p communication, might prove
          problematic with a broadcast or multicast pattern and multiple consumers that only use a
          subset of the payload described by the contract. This, if left unmanaged, may lead to
          potential data security problems and cause contract brittleness,
        </li>
        <li>
          Conversation coupling - depending on the broker implementation, the consumer and provider
          may be locked by the protocol of the event broker
        </li>
      </ul>
      <p>Operational coupling:</p>
      <ul>
        <li>Semantic coupling - unavoidable with any data exchange,</li>
        <li>
          There are two or more distinct architectural quanta, one for each event producer, and one
          for each event consumer, both overlapping on the event broker structure used (topic or
          queue).
        </li>
      </ul>
      <h3>Diagram(s)</h3>
      <div class="flex justify-center">
        <EDA_Asynchronous_Broadcast_Multicast />
      </div>
      <p class="text-center font-bold mt-4">Asynchronous Broadcast/Multicast using a topic</p>
      <div class="flex justify-center">
        <EDA_Asynchronous_Broadcast_Multicast_Bridged />
      </div>
      <p class="text-center font-bold mt-4">
        Alternative: Asynchronous Broadcast/Multicast using a topic bridged to queues
      </p>
      <h2>Pattern analysis</h2>
      <p>
        Asynchronous broadcast and multicast are very common patterns, known also as
        publish-subscribe or PubSub. They are the most used pattern in the EDA toolbox and not
        without a reason.
      </p>
      <h3>Asynchronous broadcast/multicast using a topic</h3>
      <p>
        Using topics for broadcasting events is a very old pattern originating from JMS1.0 (dated
        5th of October 1988). While new protocols and analogous structures like exchanges in AMQP
        emerged over time, and the standards developed further, the core idea for this type of
        asynchronous communication remains unchanged. The main use case for this pattern is to
        distribute data to many consumers at the same time decoupling them from the producer(s). It
        can be used like a queue for one-to-one communication, but by default it lacks persistence,
        which means that the producer(s) and consumers need to operate in the same time frame for
        the communication to be successful. That can be mitigated by setting up a durable
        subscription.
      </p>
      <h4>Architectural considerations</h4>
      <p>
        Using a topic (in JMS) or a Fanout Exchange (in AMQP) is a good way to support extensibility
        for data distribution, as it supports the topology of one-to-many and many-to-many
        communication. Topics provide an additional benefit of having a selective subscription,
        meaning that the communication does not always have to be to all of the subscribers. This
        can be achieved by utilizing the <i>selector</i> in JMS, or
        <i>topic exchange routing key</i> in AMQP with a Topic Exchange (or other mechanisms like
        Header/System Exchanges) for each subscriber based on metadata passed through the message
        headers.
      </p>
      <p>
        The trade-offs for using a topic are quite different than with a queue. Topics by default do
        not support persistence, as they are the true fire-and-forget mechanisms. Persistence in the
        form of a durable topic subscription (if such is available in a message broker), needs to be
        deliberately configured per consumer, which means that load leveling is not done by default.
        Furthermore, using topics does not allow the competing consumers pattern by default and
        again it needs to be deliberately configured using consumer groups (again, if such option is
        available in the chosen message broker). This brings more complexity to this communication
        in the form of configuration that needs to be managed and maintained.
      </p>
      <h4>Operational considerations</h4>
      <p>
        Not all message brokers support monitoring a topic per subscriber, so while using a topic
        for a p2p communication is not an issue in terms of monitoring, it may be problematic if the
        communication is extended. If a durable subscription is enabled, then insight into the
        consumer performance, communication anomalies, and detecting peaks is also available to the
        extent of the implementation, as the number of messages awaiting pickup will be more easily
        trackable.
      </p>
      <h3>Asynchronous broadcast/multicast using a topic bridged to a queue</h3>
      <p>
        A second, less common option in JMS, option for broadcast and multicast is using topics
        bridged (routed) to queues. This option is a default operational option with message brokers
        implementing AMQP as their native protocol, although it is also possible with JMS
        implementations, it requires additional configuration.
      </p>
      <h4>Architectural considerations</h4>
      <p>
        Using a topic bridged to a queue enables the benefits of using both queues and topics.
        Publishing the events to the topic enables extensibility as it is fairly easy to add
        additional queues to which data can be routed in a broadcast or multicast. Consumers
        listening on a dedicated queue can utilize the competing consumers pattern and with that
        enhance scalability and performance of consuming systems. If we wish to utilize the
        filtering within the subscription, this is done either by configuring a selector over the
        bridge per queue (JMS) or using routing keys with Topic Exchanges (AMQP). Some broker
        technologies enable naming of structures that resembles a REST URI path, enabling filtering
        based on variables in the names and using wildcards.
      </p>
      <p>
        The key trade-off here is that the communication becomes quite a bit more complex, and
        requires more attention to details in setup. Luckily most of that can be automated to a
        degree.
      </p>
      <h4>Operational Considerations</h4>
      <p>
        Due to the routing there is less emphasis on monitoring the topic, because most information
        about consumption will be available over the dedicated queues. The downside might be that it
        requires more attention to set up and maintain as more broker structures are involved in the
        communication. A crucial element that might be beneficial with JMS servers is that in this
        scenario topic durables are not needed, so that reinforces maintainability as well as
        simplicity.
      </p>
      <h2>Additional considerations</h2>
      <p>
        Using a message broker as a mediator in communication means that the application producing
        the event does not have (or at least should not have) any knowledge of who the consumers of
        the broadcast event are . This also means that there is no mechanism within this
        communication for the producer to know if the event was delivered to the consuming parties.
        This implicitly means that the error handling in such communication needs to be handled by a
        third party that does not participate in it. This ranges from manual handling to automated
        workflows managing data cleanup and compensating updates, all of which depend on the
        business process and its requirements. While this pattern is immensely useful it needs to be
        thought out with this consideration in mind.
      </p>
      <p>
        Using the broadcast / multicast pattern may damage the security of your ecosystem. It is not
        due to the fact that topics or exchanges are insecure, but rather as a consequence of using
        them. While the producer and consumer are contract-coupled, when distributing events over a
        topic to multiple consumers, they all consume exactly the same message in terms of data
        scope, format and data model. There is no in transit adaptation (that is part of a different
        architectural style), so even if the consumer uses only a small subset of the data provided
        in the event, the full scope is delivered. This means that all consumers need to pay
        attention to what happens to that data in their system (logging, writing to storage, etc.),
        because if left unchecked and the security of the application is compromised, then that
        additional data, that came from the event, may be leaked.
      </p>
      <h2>Conclusions</h2>
      <p>
        In conclusion, the Broadcast and Multicast pattern is a fundamental component of
        Event-Driven Architecture, offering a flexible and scalable approach to data distribution.
        By leveraging topics or topic-to-queue bridges or proper exchanges, systems can effectively
        disseminate events to multiple consumers, creating looser coupling between components and
        enhancing system resilience. However it is worthwhile exploring all of the considerations,
        as some variants, depending on the implementation of applications or the chosen message
        broker, might be worse in terms of maintainability or operability of solutions. It is also
        important to consider the security implications of broadcasting sensitive data. This is
        something that would require additional careful considerations. By understanding the
        trade-offs and best practices associated with this pattern, architects can effectively
        design and implement event-driven systems that are both efficient and secure. And lastly it
        is crucial to understand that while we’re writing here about topics and exchanges, these are
        common names used outside of the field of Application Integration, and are also common in
        closely related Data Integration, where they have a bit different behavior and use cases.
      </p>
    </article>
  </ArticleLayout>
</template>

<script setup lang="ts">
import EDA_Asynchronous_Broadcast_Multicast from '~/components/articles/EDA_Broadcast_and_Multicast/EDA_Asynchronous_Broadcast_Multicast.vue'
import EDA_Asynchronous_Broadcast_Multicast_Bridged from '~/components/articles/EDA_Broadcast_and_Multicast/EDA_Asynchronous_Broadcast_Multicast_Bridged.vue'

const dark = useState('dark', () => false)
</script>

<style scoped></style>
