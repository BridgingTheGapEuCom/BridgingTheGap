<template>
  <ArticleLayout>
    <article>
      <h2>Integration Patterns</h2>
      <p>
        As we describe the architectural styles for ecosystems, for some of them we can identify
        distinct and repeatable architectural patterns that we can leverage to build better
        interoperability. As we dive into Event-Driven Architecture, let’s take a look at the first
        of the integration patterns deriving from this architectural style.
      </p>
      <h2>Pattern nameplate</h2>
      <p>
        Let’s start with a small summary, we dubbed the “pattern nameplate” (an analog to a device
        nameplate that you can find on any electrical device, that describes its basic
        characteristics).
      </p>

      <p style="margin: 0">Name: <b>One-way p2p</b></p>
      <p style="margin: 0">Communication mode: <b>Asynchronous</b></p>
      <p style="margin: 0">Architectural style: <b>Event-Driven Architecture</b></p>
      <p>Common use cases:</p>
      <ul>
        <li>
          Decoupling from long running or unpredictable time processes - preventing blocking
          communication and therefore increasing responsiveness by decoupling time-consuming
          processes or processes that have unstable response time of backend systems from their
          consumers,
        </li>
        <li>
          Competing consumers pattern, load balancing - distributing workload efficiently across
          multiple consumers for improved throughput and scalability,
        </li>
        <li>
          Sequence processing (FIFO) - ensuring messages are processed in the order they were
          received, which is crucial in certain scenarios. This requires a broker that has a FIFO
          capability,
        </li>
        <li>
          Queue based load leveling - providing the capability to smooth out the spikes in demand by
          temporarily storing excess events.
        </li>
      </ul>
      <p>Architectural coupling:</p>
      <ul>
        <li>
          Contract coupling - the provider and consumer of the event are locked by an agreed
          contract, it is wanted within the bounds of a p2p communication, might turn to a form of
          model coupling, if it is extended into a broadcast or multicast pattern with additional
          consumers that only use a subset of the data model,
        </li>
        <li>
          Conversation coupling - depending on the broker implementation, the consumer and provider
          may be locked by the protocol of the event broker,
        </li>
      </ul>
      <p>Operational coupling:</p>
      <ul>
        <li>Semantic coupling - unavoidable with any data exchange,</li>
        <li>
          There are distinct architectural quanta, one for the event producer, the other for event
          consumer, both overlapping on the event broker structure used (topic or queue).
        </li>
      </ul>
      <h3>Diagram(s)</h3>
      <div class="flex justify-center">
        <P2P_Queue :dark="dark" />
      </div>
      <p class="text-center font-bold mt-4">One-way p2p using a queue</p>
      <div
        class="flex-1 h-[1px] mx-auto max-w-screen-sm mt-10 mb-3 dark:bg-neutral-700 bg-neutral-300 self-center"
      />
      <div class="flex justify-center">
        <p2-p_-topic :dark="dark" />
      </div>
      <p class="text-center font-bold mt-4">Alternative: One-way p2p using a topic</p>
      <div
        class="flex-1 h-[1px] mx-auto max-w-screen-sm mt-10 dark:bg-neutral-700 bg-neutral-300 self-center"
      />
      <div class="flex justify-center">
        <p2-p_-topic2-queue :dark="dark" />
      </div>
      <p class="text-center font-bold mt-4">
        Alternative: One-way p2p using a topic bridged to a queue
      </p>
      <h2>Pattern analysis</h2>
      <p>
        One-way point-to-point, while fairly common, is not the most used pattern from the EDA
        toolbox. It can be implemented in three ways, where each of those has distinct trade-offs.
      </p>
      <h3>One-way p2p using a queue</h3>
      <p>
        The simplest and most obvious form of point-to-point communication, where a queue (JMS) or a
        direct exchange (AMQP), both with persistence, is being used to facilitate communication and
        decouple the consumer from a provider. This essentially means that the consumer does not
        have to operate in the exact same window as the provider of the event.
      </p>
      <h4>Architectural considerations</h4>
      <p>
        Using this kind of structure enables the competing consumers pattern, enabling easy scaling
        of the consuming application, without the need for any special configuration. Furthermore,
        the persistence of the queue enables load leveling and decoupling long running processes.
      </p>
      <p>
        The trade-off of using a queue is that the extensibility on the consumer side is hindered,
        as only one-to-one and many-to-one communication is available.
      </p>
      <h4>Operational Considerations</h4>
      <p>
        This approach, in most event brokers, is easy to monitor and manage. They provide a lot of
        insight into the performance of the consuming system, which may prove beneficial in
        detecting anomalies, peaks or operational incidents, before they impact business.
      </p>
      <h3>One-way p2p using a topic</h3>
      <p>
        An uncommon practice for actual point-to-point communication is to facilitate it over a
        topic (JMS) or a fanout exchange to a single subscriber (AMQP). It is truly only applicable
        if the communication is to be extended by additional consumers. It is similar to using a
        queue, but only if the producer and consumer operate in the same time window, otherwise
        things get a little bit more complicated.
      </p>
      <h4>Architectural considerations</h4>
      <p>
        Using a topic is perfect to support extensibility, especially when considering a broadcast
        (fanout exchange) or multicast (topic exchange in AMQP), so one-to-many communication. It
        provides the same level of extensibility as a queue towards multiple providers, so there is
        no issue in building many-to-one or many-to-many relationships by extending this pattern
        later on.
      </p>
      <p>
        The trade-offs for using a topic are quite different. Topics by default are not persistent,
        as they are the true fire-and-forget mechanisms. Persistence in the form of a durable topic
        subscription or durable message (if such is available in a message broker), needs to be
        deliberately configured per consumer, which means that load leveling is not done by default.
        Furthermore, using topics does not allow the competing consumers pattern by default and
        again it needs to be deliberately configured using consumer groups (again, if such option is
        available in the chosen message broker). This brings more complexity to this communication.
      </p>
      <h4>Operational considerations</h4>
      <p>
        Not all message brokers support monitoring a topic per subscriber, so while using a topic
        for a p2p communication is not an issue in terms of monitoring, it may be problematic if the
        communication is extended. If a durable subscription is enabled, then insight into the
        consumer performance, communication anomalies and detecting peaks is also available, as the
        number of messages awaiting pickup will be easily trackable.
      </p>
      <h3>One-way p2p using a topic bridged to a queue</h3>
      <p>
        A third and more common option is to do p2p communication with a topic that is bridged
        (routed) to a queue. This option is a default operational option with message brokers
        implementing AMQP (fanout or topic exchange routed to a queue) as their native protocol,
        although it is also possible with JMS implementations, it requires additional configuration.
      </p>
      <h4>Architectural considerations</h4>
      <p>
        Using a topic bridged to a queue enables the benefits of using both structures. Publishing
        the events to the topic enables extensibility for future uses as it is fairly easy to add
        additional queues to which data can be routed in a broadcast or multicast. Additionally,
        consumers listening on a dedicated queue can utilize the competing consumers pattern by that
        scale easier.
      </p>
      <p>
        The key trade-off here is that the communication becomes quite a bit more complex, and
        requires more attention to details in setup.
      </p>
      <h4>Operational Considerations</h4>
      <p>
        Due to the routing there is less emphasis on monitoring the topic, because most information
        about consumption will be available over the dedicated queues. The downside is that it
        requires more attention to set up and maintain as more broker structures are involved in the
        communication.
      </p>
      <h2>Additional Considerations</h2>
      <p>
        Using a message broker as a mediator in communication means that the application producing
        the event does not have (or at least should not have) any knowledge of who the consumer of
        that event is. This also means that there is no mechanism within this communication for the
        producer to know if the event was delivered to the consuming party. While this communication
        may seem very simple, this implicitly means that the error handling in such communication
        needs to be handled by a third party that does not participate in it. This ranges from
        manual handling to automated workflows managing data cleanup and compensating updates, all
        of which depend on the business process and its requirements.
      </p>
      <h2>Conclusions</h2>
      <p>
        The one-way p2p patterns are a useful thing to have in the integration toolbox that, in
        combination with other EDA patterns as well as Broker or API-Led Architecture, provides an
        easy and quick way to provide meaningful, real-time data.
      </p>
    </article>
  </ArticleLayout>
</template>

<script setup lang="ts">
import P2P_Queue from '~/components/articles/Event-Driven_One-way_point-to-point/P2P_Queue.vue'
import P2P_Topic from '~/components/articles/Event-Driven_One-way_point-to-point/P2P_Topic.vue'
import P2P_Topic2Queue from '~/components/articles/Event-Driven_One-way_point-to-point/P2P_Topic2Queue.vue'

const dark = useState('dark', () => false)
</script>

<style scoped></style>
