<template>
  <ArticleLayout>
    <article>
      <h2>Introduction</h2>
      <p>
        There are many various approaches to application integration, as we may see by looking at
        least at the ecosystem architectural styles. Today we’ll have a closer look at one such
        approach rooted in the broker architectural style, where we encounter two distinct behaviors
        in integration platforms and integration flows built within them: the active and passive
        participant. These behaviors define how communication is initiated and managed,
        significantly impacting the overall architecture, operational efficiency, and reusability of
        the integration flows. Understanding the nuances of these behaviors is crucial for designing
        robust and scalable integration solutions.
      </p>
      <h2>Two Variants of Broker Behavior</h2>
      <p>
        In broker architecture, we observe two primary approaches to how integration flows would
        behave: active and passive. An active participant integration flow (or active broker for
        short) initiates and controls all communication within the integration flow. It is triggered
        either manually or by a scheduler (e.g., a cron job). In contrast, a passive participant
        integration flow (or passive broker) waits for external triggers from other systems,
        responding to requests and facilitating communication only when invoked. These two behaviors
        represent fundamentally different approaches to managing integration flows, each with its
        own set of advantages and disadvantages.
      </p>
      <h2>Active Broker</h2>
      <p>
        In an active broker scenario, the integration platform takes the initiative in driving
        communication. It actively triggers and controls all interactions within the integration
        flow. This means that the broker, either manually or through a scheduled mechanism like a
        cron job, initiates calls to various business systems. These systems simply expose their
        APIs (e.g. SOAP, REST, GraphQL, messaging protocols) or other data transfer methods (e.g.
        direct database access, file transfer), while the active broker manages the entire process,
        including communication metadata, state, error handling, and any necessary compensation
        updates or rollback procedures. Essentially, the active broker is the orchestrator,
        dictating when and how data is exchanged between systems. This also means that the broker
        has no knowledge if the data in the source system has actually changed.
      </p>
      <understanding_-active_and_-passive_-broker_-active_-broker />
      <p class="text-center font-bold mt-4">
        Example active participant integration flow processing sequence diagram
      </p>
      <h3>Architectural Considerations</h3>
      <p>
        While at first, it may seem like this is a flow like any other, it does have some specific
        considerations that might be important to note out. To start with: cost. Since all the
        business systems are only exposing data, the overall cost of architectural change, to and
        from this approach is fairly low for most systems. All of the exposed services, APIs,
        structures could be easily reused if the broker integration platform would be changed to a
        different architectural style. The development effort concentrates on the integration
        platform, especially if the integrated systems have standardized APIs (e.g. SaaS solutions).
      </p>
      <p>
        Looking at the integration flow logic, it is not reusable as it is tightly coupled to the
        system that it is facilitating the communication for and often directly implements business
        processes activities. The only condition where the whole flow would be reusable is if there
        would be distributed identical systems (e.g. target system) and the data would be
        dynamically routed to endpoints with the right credentials, URIs and metadata within the
        integration logic. The approach is fairly simple, as it moves most of the communication
        complexity to the integration platform. This allows the business systems to have minimal and
        simplified integration logic. It also gives centralized control over the whole integration
        process, which needs to be carefully considered from a design perspective.
      </p>
      <h3>Operational Considerations</h3>
      <p>
        From an operational perspective, alongside the qualities of the broker architectural style,
        there are a few more specific considerations that can be noted. Starting with data
        freshness, which in this scenario would be a potential operational issue to watch for. Since
        the integration flow is triggered manually or on a scheduler, this means that we are
        processing data that is ranging in freshness from as old as the interval time to very fresh.
        This means that using the active participant integration flow bears the risk of bringing
        data too late to the target systems. This can be somewhat mitigated by setting the scheduler
        to run very often (e.g. every 5 minutes).
      </p>
      <p>
        This brings us to another issue that needs to be addressed within this behaviour which is
        resource utilization. Frequent polling by the active broker, especially in near-real-time
        setups, often results in a high percentage of empty calls (over 95% in some studies). This
        wastes resources on both the integration platform and the business systems, as they are
        repeatedly invoked even when no data is available. While short polling intervals are great
        to facilitate user experience and to have data somewhat fast in a target system. This may
        come at a significant cost, especially if the participants of the communication subscribe to
        a “pay-as-you-go” model with a cloud or SaaS provider. There is another side to this,
        especially with systems that produce a large number of records during the day, e.g. in
        bursts of user activity. The integration flow might serve in these cases as a rate-limiter,
        with strict control over how many records are pulled in one execution and when the next
        execution can start (usually they are not allowed to run parallel to avoid record
        duplication). This in turn may have a very positive impact on the target systems
        performance, as they will not be flooded with new records to process. They will receive new
        data in a rate-limited way, until all data is properly processed.
      </p>
      <p>
        Lastly, on a more positive note, active broker behaviour offers more simplicity in
        monitoring of execution. The predictable nature of scheduled triggers makes it easy to spot
        anomalies and errors, as logs should appear at expected intervals. This is not limited to
        the integration platform itself, but also the systems that are the source of data, as they
        will be queried instantly after execution starts.
      </p>
      <h3>Use recommendations</h3>
      <p>
        The active broker behavior is a valid approach, but it is not universal. It is worth
        considering for use cases where data is created or needs to be processed in batches and with
        longer intervals in between (e.g. 24h, week, every Friday, month). This also implies that it
        should not be used for operational needs that would require real-time data, but rather for
        recurring, time bound actions, e.g. analytical or data integration purposes.
      </p>
      <h2>Passive Broker</h2>
      <p>
        In contrast to an active broker, a passive broker operates reactively. It doesn't initiate
        the integration flow (no manual or schedule-based triggers), but rather waits for external
        triggers from consumer systems. The passive broker exposes APIs (such as REST, SOAP) or
        messaging endpoints (e.g. JMS, or AMQP) and listens for incoming traffic. When another
        business system actively makes a request, the passive broker then processes the data,
        invoking other systems orchestrating, enriching and broadcasting data as needed. This
        behaviour positions the passive broker as a service provider, responding to requests and
        facilitating communication only when prompted by an external trigger.
      </p>
      <understanding_-active_and_-passive_-broker_-passive_-broker />
      <p class="text-center font-bold mt-4">
        Example passive participant integration flow processing sequence diagram
      </p>
      <h3>Architectural Considerations</h3>
      <p>
        Facilitating the communication through an active broker will be overall a bit more complex,
        than it is with the active counterpart. This is due to the fact that now there is a service
        exposed on the integration platform. A service that will be consumed by one or more systems.
        This means that the consumers need to build more logic on their side to consume the service,
        which involves understanding communication metadata, handling state to a limited extent, and
        supporting sufficient error handling, including errors returned from the integration
        platform. This requires a better and more precise governance over design, development and
        operations of such integration flow.
      </p>
      <p>
        The fact that the integration exposes the integration flow as a service to be consumed means
        that we introduce more reusability. Exposing APIs allows multiple business systems to
        consume the same integration flow if it meets their needs. However, the degree of
        reusability depends on how tightly tailored the flow is to specific business processes. This
        comes with a small warning, that all consumers will be coupled to this integration service
        by its contract. The trade-off to having the potential reusability is that all consumers
        will lose contract resilience, as any changes in the integration service contract that
        introduce mandatory fields need to be reflected on the consumer side. Furthermore, the
        coupling on a contract level also may pose a security risk in terms of receiving excess
        amounts of data in the response from the service. This potentially may limit the reusability
        of the integration flow when dealing with sensitive data, e.g. personal data, which is
        restricted by privacy laws.
      </p>
      <p>
        If designed well, reusability can lower the development cost, as certain services wouldn’t
        have to be developed per consumer. Unfortunately due to the introduced coupling, and
        depending on the volatility of changes in the IT landscape it may be a problem later on, and
        increase development costs for all service consumers. So it needs to be carefully considered
        or properly mitigated by adding an abstraction layer per consumer further increasing
        complexity of the integration flows. From the perspective of architectural change cost, this
        approach is a little bit more expensive as replacing a system or the integration platform
        may require more effort.
      </p>
      <h3>Operational Considerations</h3>
      <p>
        Looking at the operational perspective we can see that the passive broker behaviour is a lot
        better suited for real-time or on-demand processing, as the integration flows will be only
        executed as they are triggered by the consumer system. In that sense the data freshness will
        be very good for all real-time flows, working with events and commands, and on-demand data
        will be delivered as it is needed, not in intervals, minutes or hours after it is actually
        useful.
      </p>
      <p>
        The passive broker behaviour is also more resource efficient, as there are no empty runs
        based on a predefined scheduler. That ensures lower operational costs if the licensing model
        for the systems and/or the integration platform is pay-as-you-go.
      </p>
      <p>
        Unfortunately this approach brings in a little bit of complexity to monitoring. As there are
        no fixed intervals that derive from a scheduler, the behaviour is less predictable, so are
        the logs. The importance in monitoring shifts towards communication metadata like HTTP
        Headers, where are the key information on the usage, as well as the consumer of the service.
      </p>
      <h3>Use recommendations</h3>
      <p>
        The passive broker behavior, like its counterpart, has its limitations. The typical use
        cases for this approach would be for real-time or on-demand communication. It brings the
        additional value if it is possible to design services with looser coupling to the business
        process, turning them into standardized, reusable integration services that abstract the
        complexity of communication with a well defined API.
      </p>
      <h2>Conclusions</h2>
      <p>
        Both active and passive broker behaviors have their place in integration architecture.
        Active brokers are preferred for batch processing and handling large volumes of data with
        specifically tailored integration flows. They offer simplicity in design and monitoring but
        lack real-time capabilities and reusability. Passive brokers are more suitable for real-time
        or on-demand communication and offer the potential for reusable services. They are
        resource-efficient but introduce complexity in error handling and monitoring. The choice
        between active and passive brokers depends on the specific requirements of the integration
        scenario and the organization context.
      </p>
    </article>
  </ArticleLayout>
</template>

<script setup lang="ts">
import Understanding_Active_and_Passive_Broker_Active_Broker from '~/components/articles/Understanding_Active_and_Passive_Broker/Understanding_Active_and_Passive_Broker_Active_Broker.vue'
import Understanding_Active_and_Passive_Broker_Passive_Broker from '~/components/articles/Understanding_Active_and_Passive_Broker/Understanding_Active_and_Passive_Broker_Passive_Broker.vue'
</script>

<style scoped></style>
