<template>
  <ArticleLayout>
    <article>
      <h2>A spark for discussion</h2>
      <p>
        Callbacks are the asynchronous analogs of the on-demand call. It is as simple and as complex
        as that. They are used when those synchronous capabilities to retrieve or process data
        cannot adhere to the requirements of responsiveness and performance. Structurally they are a
        sequential composition of two basic EDA patterns, e.g. broadcast and point-to-point or two
        point-to-point, etc.
      </p>
      <p>
        Callbacks are one of those patterns that might be a bit troublesome to form a philosophical
        point of view. They are fairly straightforward technically speaking, but it is debatable
        whether or not they fall under the category of event-driven. The key question to explore
        here is that if we are sending a message and we are
        <span class="italic underline">expecting a response</span>, perhaps not an instantaneous
        one, rather over time or in an undetermined time, is that still event-driven? If we consider
        the callback alone, without the triggering subscription or event, then it seems to always be
        an event of sorts, marking the completion of a processing task, an occurrence in a system,
        etc. Let us consider this when exploring this pattern.
      </p>
      <h2>Pattern nameplate</h2>
      <p style="margin: 0">Name: <b>Callback</b></p>
      <p style="margin: 0">Communication mode: <b>Asynchronous</b></p>
      <p style="margin: 0">Architectural style: <b>Event-Driven Architecture</b></p>
      <p>Common use cases:</p>
      <ul>
        <li>Data quality assurance based on API contracts,</li>
        <li>Real-time subscribed data delivery as a result of an earlier data subscription,</li>
        <li>Confirmation of event processing,</li>
        <li>Decoupling processing with long or non deterministic processing time,</li>
      </ul>
      <p>Architectural coupling:</p>
      <ul>
        <li>
          Contract coupling - the provider and consumer of the event are locked by an agreed data
          model, it is tolerable within the bounds of a p2p communication, might not be, if it is
          extended into a broadcast or multicast pattern with additional consumers that only use a
          subset of the data model,
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
          There are two or more distinct architectural quanta, one for each event producer, one for
          each event consumer, both overlapping on the event broker structure used (topic or queue),
        </li>
        <li>
          Temporal coupling - for a callback to occur successfully, there must be first a successful
          event/command/message that results in said callback,
        </li>
      </ul>
      <h3>Diagrams</h3>
      <h4>Pattern diagrams</h4>
      <div class="flex justify-center">
        <EDA_Asynchronous_Callbacks />
      </div>
      <p class="text-center font-bold mt-4">Simple callback</p>
      <div
        class="flex-1 h-[1px] mx-auto max-w-screen-sm mt-10 mb-3 dark:bg-neutral-700 bg-neutral-300 self-center"
      />
      <div class="flex justify-center">
        <EDA_Asynchronous_Callbacks_to_a_Broadcast_ACK />
      </div>
      <p class="text-center font-bold mt-4">Callback to a broadcast with a single contract queue</p>
      <div
        class="flex-1 h-[1px] mx-auto max-w-screen-sm mt-10 mb-3 dark:bg-neutral-700 bg-neutral-300 self-center"
      />
      <div class="flex justify-center">
        <EDA_Asynchronous_Callbacks_to_a_Broadcast_dedicated_schema />
      </div>
      <p class="text-center font-bold mt-4">Callback to a broadcast with dedicated queues</p>
      <h4>Behavioral diagram</h4>
      <div class="flex justify-center">
        <EDA_Callback_via_Queue />
      </div>
      <h2>Pattern analysis</h2>
      <p>
        Callback patterns at times seem like not the most common patterns in interoperability on the
        ecosystem level, and sometimes their limited or common use can be considered industry
        specific. In either case, they may prove extremely useful, both from the real-time data
        delivery and real-time operations points of view. They are the asynchronous equivalent of an
        on-demand call in some use cases, but can also serve several operational functions, e.g.
        delivery confirmation, statuses. It is also important to note that while using synchronous
        communication it is implied that there will be a response, issuing a callback is optional
        and left to the discretion of the callback producer and based on the business process.
      </p>
      <h3>Simple callback</h3>
      <p>
        The simplest form of a callback is an exchange between two systems, where the callback
        producer first receives a message, state, event or a command from the callback consumer that
        triggers processing and the creation of a callback event. This is a fairly easy way to
        decouple two systems, by providing a separation in the form of a message broker between
        them.
      </p>
      <h4>Architectural considerations</h4>
      <p>
        While any messaging structure can be used to implement this pattern, let’s consider
        implementing it over queues only. This will be a dedicated flow, tailored to the specific
        exchange need. It has limited extensibility as it may be turned into a service fronted with
        queues as its API implementation, changing the topology from one-to-one-to-one to
        many-to-one-to-one. This means that there may be several callback consumers that produced a
        trigger for the producer to create a callback. In that case additional configuration needs
        to happen over the callback queue to enable proper filtering based on metadata (e.g. message
        headers, correlators, topic/queue taxonomy) so that the right consumer receives the right
        response. It is similar to a one-way point-to-point over a queue, because this is this exact
        pattern used twice in sequence.
      </p>
      <h4>Operational Considerations</h4>
      <p>
        Utilizing this pattern will provide easy scalability if needed for each party consuming
        messages from them, especially if there might be multiple threads producing callbacks to
        various triggers coming in from the callback consumer. This pattern, while may have varied
        performance due to the communication characteristics, processing time of the callback
        producer, which involves domain complexity, it is useful for supporting responsiveness of
        the callback consumer as the process is not confined to a single thread that becomes blocked
        awaiting the callback.
      </p>
      <h3>Callback to a broadcast with a single contract queue</h3>
      <p>
        A different callback pattern, following one-to-many-to-one topology, that has more of an
        operational use, chaining a
        <NuxtLink
          class="link text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
          to="/articles/EDA_Broadcast_and_Multicast"
          >broadcast/multicast</NuxtLink
        >
        and an one-way point-to-point patterns in sequence. One of the key use cases for this
        pattern is mitigating the operational lack of delivery or processing confirmation, which
        makes error handling and IT operations a bit more difficult. This might at times be crucial
        for specific business areas, e.g. product configuration, where the business needs to be sure
        that all sales channels and order processing have the same product definitions (e.g.
        bundles, promotions). In that case a lack of callback to the data master confirming
        successful processing or a callback signalling processing errors will give more operational
        agility. This unfortunately comes at a trade-off that the data master must be aware of all
        consumers that need to send an operational callback. These callback messages could be
        considered to be events, but might as well be state.
      </p>
      <h4>Architectural considerations</h4>
      <p>
        Given the broadcast nature of a callback trigger, this pattern will support extensibility.
        With a callback originating from multiple producers to a single queue the key consideration
        is that all of those producers are bound to a single contract managed by the callback
        consumer. This needs to be considered when designing, as this contract coupling may be a
        problem with high volatility of requirements, as any change to the scope of data will impact
        all of the communication participants.
      </p>
      <h4>Operational Considerations</h4>
      <p>
        From an operational perspective this kind of callback using the queue topology of
        many-to-one might be troublesome to monitor, as there are many applications writing to a
        single queue. That would require more effort from the operations teams in terms of
        monitoring the message broker for which producers actually wrote to the queue.
      </p>
      <h3>Callback to a broadcast with dedicated queues</h3>
      <p>
        Callback to a broadcast with dedicated queues is probably the rarest of the callback
        patterns. Not only does it require the most effort to set up, but also facilitates more
        refined and deliberate processes. This key use case is that all the callback producers react
        to an event published and that triggers their processing resulting with a callback that is
        specific to what the functionality of each of those event processors is. If each processor
        delivers different data as a callback to a trigger in this scenario, this means that each
        one will have a different schema for said data, to properly separate objects and avoid
        contract brittleness. This also means that ownership of the schema and each callback queue
        lies within the scope of the respective callback producer as they are governing the data
        transferred.
      </p>
      <h4>Architectural considerations</h4>
      <p>
        First thing that comes to mind is that this setup is complex, and while it may seem simple
        for each callback producer, it is a lot more complicated for the consumer of all those
        callbacks as now that application needs to implement processing logic to consume multiple
        endpoints as well as various contracts. Additionally if we’d consider replacing the
        dedicated queue with a topic or topic bridged to a queue (changing the topology from
        one-to-many-to-one, to one-to-many-to-many), we can create extensibility and reusability of
        the callback produced. This later can be used in additional contexts for whichever
        application this data might bear relevance. This in turn contributes to even better
        real-time communication within the ecosystem.
      </p>
      <h4>Operational Considerations</h4>
      <p>
        Turning again to the operational perspective, this variation of the callback pattern will be
        easier to maintain and operate as there is a clear separation for each callback producer, so
        it will be easier to spot if for some reason there is a communication breakdown. Otherwise,
        operationally they do not differ from one-way point-to-point or broadcast/multicast
        patterns, which are the basis for this communication.
      </p>
      <h2>Conclusions</h2>
      <p>
        Callback is a useful pattern that enables the organization and the data transfers between
        applications to be more agile and run in real-time, with the business applications acting on
        events as they happen rather than over time polled with a delay. While it may present some
        additional complexity and operational challenges, the benefit outweighs the cost.
        Additionally, here we can see that it is not straightforward whether all messages we send
        are actual events. It is worth considering what is the process as a whole as in some
        specific cases we will be dealing with commands and states that will be triggering the
        event-driven behaviour.
      </p>
    </article>
  </ArticleLayout>
</template>

<script setup lang="ts">
import EDA_Asynchronous_Callbacks from '~/components/articles/EDA_Callbacks/EDA_Asynchronous_Callbacks.vue'
import EDA_Asynchronous_Callbacks_to_a_Broadcast_ACK from '~/components/articles/EDA_Callbacks/EDA_Asynchronous_Callbacks_to_a_Broadcast_ACK.vue'
import EDA_Asynchronous_Callbacks_to_a_Broadcast_dedicated_schema from '~/components/articles/EDA_Callbacks/EDA_Asynchronous_Callbacks_to_a_Broadcast_dedicated_schema.vue'
import EDA_Callback_via_Queue from '~/components/articles/EDA_Callbacks/EDA_Callback_via_Queue.vue'
</script>

<style scoped></style>
