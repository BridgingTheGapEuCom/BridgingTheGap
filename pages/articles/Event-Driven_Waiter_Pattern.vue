<template>
  <ArticleLayout>
    <article>
      <p>
        As we dive deeper into Event-Driven Architecture (EDA), there is a specific scenario that
        deserves attention on its own. As we already established that EDA patterns can be used to
        loosen the coupling between different applications and systems so they can operate in a more
        independent manner. The waiter pattern builds on top of that capability allowing the
        applications that produce data over a long span of time to deliver them in an organized and
        standardized way.
      </p>
      <h2>Pattern nameplate</h2>
      <p style="margin: 0">
        Name: <b>Waiter pattern</b>
      </p>
      <p style="margin: 0">
        Communication mode: <b>Asynchronous</b>
      </p>
      <p style="margin: 0">
        Architectural style: <b>Event-Driven Architecture</b>
      </p>
      <p>Common use cases:</p>
      <ul>
        <li>
          Real-time requested data delivery in chunks as they are produced as a result of an earlier
          command or event,
        </li>
        <li>Delivery of larger amount of data in parts,</li>
        <li>Parallel complex processing chunked based on a single event/command.</li>
      </ul>
      <p>Architectural coupling:</p>
      <ul>
        <li>
          Contract coupling - the provider and consumer of the event are locked by an agreed data
          model, it is tolerable within the bounds of a p2p communication, might not be, if it is
          extended into a broadcast or multicast pattern with additional consumers that only use a
          subset of the data model. Furthermore, there are at least two contract couplings present
          in this pattern, depending on the number of callback producers
        </li>
        <li>
          Data type and format coupling - the provider and consumer must have the same understanding
          of the data model types and format (e.g. JSON, XML, CSV)
        </li>
        <li>
          Conversation coupling - depending on the broker implementation, the consumer and provider
          may be locked by the protocol of the event broker
        </li>
      </ul>
      <p>Operational coupling:</p>
      <ul>
        <li>Semantic coupling - unavoidable with any data exchange</li>
        <li>
          There are two or more distinct architectural quanta, one for each event producer, one for
          each event consumer, both overlapping on the event broker structure used (topic or queue)
        </li>
        <li>
          Temporal coupling - for a subscription callback to occur successfully, there must be first
          a successful event/command/message that results in said callback
        </li>
      </ul>
      <h3>Diagram(s)</h3>
      <h4>Behavioral Diagrams</h4>
      <div class="flex justify-center">
        <EDA_Waiter_Pattern />
      </div>
      <p class="text-center font-bold mt-4">
        Waiter pattern behaviour
      </p>
      <h2>Pattern analysis</h2>
      <p>
        The core function of the waiter pattern is to provide value with produced data as soon as
        possible. Depending on the business scenario, and in this case quite a specific one, this
        data will be delivered at least once, meaning that this pattern behaves like a callback in
        its simplest form. The real value of it is in the more advanced scenario, where the callback
        producer’s processing time is very long - minutes, up to hours, but the callback data can be
        partitioned into usable chunks and sent as separate callbacks. This might seem like a
        subscription to events like webhooks, but there is one key difference - the processing and
        publication of callbacks is temporally coupled to the requesting party. Without the initial
        trigger message (command or event), no data will be produced.
      </p>
      <p>
        An example of such a mechanism would be a callback function for a web crawler, which is
        charged with crawling through news sites in search of specific keywords, like news about
        companies. Usually these news are copied from site to site with very little addition, so the
        job of such crawlers is to identify a theme of an article and aggregate all news on the same
        theme, then deliver a summary and sources. If you span that across a time frame of for
        example two years, that is a lot of data to cover and it will take a lot of time. Packaging
        each theme into a single deliverable callback brings value faster to the business as their
        actions are not blocked entirely by waiting for the processing to finish. And sometimes
        partial results might be sufficient to finish work, such as risk assessment.
      </p>
      <h3>Architectural considerations</h3>
      <p>
        Given the scope of use cases for the Waiter pattern, essentially all callback patterns are
        viable, as they largely depend on the number of event processors producing callbacks and
        whether or not they all produce data in the same data model. In that sense architectural
        considerations are the same as described for
        <NuxtLink
          class="link text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
          to="/articles/Event-Driven_Callbacks"
        >
          callbacks
        </NuxtLink>.
      </p>
      <p>
        What can be an additional consideration to be had, is that since the number of callbacks
        will be usually more than one per event triggering the processing, this requires mindful
        handling of persistence and errors, especially when running parallel jobs. As there might be
        a connectivity problem (as per the
        <a
          href="https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing"
          target="_blank"
        >first fallacy of distributed computing</a>), the number of messages pending being sent from the callback producer or delivered and
        temporarily stored on the message broker, will gradually increase. This in turn might pose a
        risk of overwhelming the message broker and disabling the event based communication for all
        involved, making it important to be managed on an architectural level first.
      </p>
      <h3>Operational Considerations</h3>
      <p>
        Turning to operational aspects of the Waiter pattern, other than the aforementioned
        inheritance from callbacks, communication metadata might play a more important role.
        Correlation identifiers may be especially useful, not only to track and correlate log data
        between various instances of callbacks from a single processing job, but also to provide
        robust statistics and reporting on services and data usage. This is especially crucial if
        the callbacks are turned into broadcasts enabling other consumers, than the original
        requestor, to subscribe to that data, as this may provide an easy way to track all
        consumption.
      </p>
      <h2>Conclusions</h2>
      <p>
        Waiter pattern as a specific case of a callback pattern is a very useful tool in an
        integration architects toolbelt as it provides additional capabilities to balance long
        processing times clashing with low time to market, that seems to be a very common business
        driver of the information age. It enhances the agility of data consumers to provide value to
        the end user in a timely manner.
      </p>
      <p>
        However it is important to consider the error handling, persistence and operational aspects
        of this pattern, especially in high volume scenarios, as, if not addressed, they may lead to
        critical failures, severely impacting communication. This needs to be defined and
        implemented in cohesion with the business process, as these things will be case specific.
        Luckily if managed properly, this pattern can provide significant value to any organization.
      </p>
    </article>
  </ArticleLayout>
</template>

<script setup lang="ts">
import EDA_Waiter_Pattern from '~/components/articles/Event-Driven_Waiter_Pattern/EDA_Waiter_Pattern.vue'
</script>

<style scoped></style>
