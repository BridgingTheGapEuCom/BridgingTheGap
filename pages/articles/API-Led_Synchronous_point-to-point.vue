<template>
  <ArticleLayout>
    <article>
      <h2>Fixated on the grain of sand</h2>
      <p>
        In the landscape of API-Led Architecture, the Synchronous point-to-point pattern might
        initially appear as a roundabout route for a simple exchange. One could question the need
        for mediating applications within an integration platform when a direct system-to-system
        call seems more straightforward. However, to view it this way is to miss the fundamental
        purpose of this pattern. It isn't just about connecting two points; it's about constructing
        a robust, adaptable, and reusable infrastructure that transcends individual interactions.
        With this article we will explore this pattern shifting the perspective from the grain of
        sand to a wider picture.
      </p>
      <h2>Pattern nameplate</h2>
      <p class="m-0">
        Name: <b>Synchronous point-to-point</b>
      </p>
      <p class="m-0">
        Communication mode: <b>synchronous</b>
      </p>
      <p class="m-0">
        Architectural style: <b>API-Led Architecture</b>
      </p>
      <p>Common use cases:</p>
      <ul>
        <li>
          Interactive data retrieval - e.g. partial match for forms on a frontend app. For better
          understanding of usage, for monetization or utilization of a paid service (one funnel to
          keep track of all usage),
        </li>
        <li>
          Data on demand - retrieving data that already "exists" within a system, for operational
          use, enrichment etc.,
        </li>
        <li>
          Hiding core systems behind integration layers, validating input data to mitigate security
          issues and potential breaches,
        </li>
        <li>Data model and format translation between not aligned systems,</li>
        <li>Potential reuse of adapter data services for other cases,</li>
        <li>Data quality assurance based on API contracts,</li>
      </ul>
      <p>Architectural coupling:</p>
      <ul>
        <li>
          Contract coupling - both, the service consumer and the data provider are bound by contract
          coupling with the integration platform, but not bound by said coupling to each other,
        </li>
        <li>Semantic coupling - unavoidable with any data exchange,</li>
      </ul>
      <p>Operational coupling:</p>
      <ul>
        <li>
          All communication happens within a single architectural quantum that envelops both systems
          and the integration platform,
        </li>
      </ul>
      <h3>Diagram(s)</h3>
      <a-p-i-led_-synchronous_-p2-p />
      <p>Synchronous point-to-point</p>
      <a-p-i-led_-p2-p_reuse />
      <p>Synchronous point-to-point, Data Service reuse</p>
      <h2>Pattern analysis</h2>
      <p>
        Synchronous point-to-point is the most common integration pattern in API-Led Architecture,
        making up the majority of the communication within the platform. At first glance, this might
        seem excessive for such a simple communication, and this would probably be true if we look
        at this pattern from a perspective of a single instance of such communication. However, the
        true value of this pattern becomes apparent when we analyze the implications of its use from
        a wider perspective, considering its reusability and the broader context of API-Led
        architecture. Unlike traditional point-to-point, this pattern introduces two intermediary
        layers: the Channel Layer and the Adapter Layer. These layers, while adding complexity,
        provide benefits that may not be obvious. The channel application tailors the API to the
        consumer's specific needs, while the adapter layer standardizes access to the provider
        system. This setup, though initially appearing as overengineered, becomes highly beneficial
        when the Data Service is reused by multiple consumers or for building Composed Services.
      </p>
      <h3>Architectural considerations</h3>
      <p>
        When discussing the point-to-point pattern in API-Led Architecture, it is crucial to look
        beyond the immediate communication at hand and consider the platform as a whole. When using
        this architectural style, we're not only solving an immediate communication problem. We're
        also addressing several other problems that were not addressed in the earlier ecosystem
        architectural styles.
      </p>
      <p>
        In terms of architectural qualities let's start a deeper dive with the capability to create
        abstractions. The Channel and Adapter Layers serve this function in this architectural
        style, to an extent shielding the communication participants from contract changes in the
        consumed APIs and ensuring better contract resilience. This means that changes on the
        provider side have a minimized impact on the overall ecosystem. Furthermore, as a result of
        having abstraction layers, it is possible to make the communication protocol and data format
        agnostic for all applications invoking the platform, meaning that the integration platform
        can expose all sorts of protocols and format, and does not force any of those systems to use
        anything specific, leaving the business developer teams to decide what they are comfortable
        with.
      </p>
      <p>
        Another key aspect from an architectural perspective is that the technical partitioning of
        the integration flow creates the capability to treat the adapter applications and their
        services as reusable and composable building blocks that enable easier data access and
        developing new integrations and services as needed at a lower cost of time and effort. This
        further contributes to a reduction in redundancy, as adding a new consumer requires only to
        create their dedicated service in the respective channel application. This partitioning also
        contributes to the security by architectural design, as each channel enables to trim down
        the response scope to exactly the data needed by each API consumer.
      </p>
      <p>
        Another added value of this pattern is that if needed it is easily extensible. If for any
        reason, the set of data available in the provider system would not be sufficient anymore to
        facilitate business needs, this pattern can be adjusted and extended to by a Composed
        Service, where additional data is introduced through orchestration and enrichment.
      </p>
      <h3>Operational Considerations</h3>
      <p>
        Looking at the operational qualities of this pattern, there is one aspect that will
        influence other characteristics quite significantly. That is increased complexity, which is
        introduced by the structure of the integration platform. Integration applications may be
        considered as potential points of failure that need to be properly covered by operations and
        maintenance. All communication passing through them also extends the length of root cause
        analysis, when trying to track errors. Additionally, testability of the integration is also
        impacted, as there are more parts to it that require testing. The number of tests that have
        to be performed increases, which also influences time to market. However, the technical
        partitioning of the integration platform and the readability of its structure makes this
        aspect navigable.
      </p>
      <p>
        Another operational characteristic that is influenced by the complexity is performance.
        While this might not be a significant impact, as most integration platforms are optimized
        for high performance, the additional components will introduce additional latency, which may
        be a risk factor if the applications are not properly maintained or will have excessive
        logic.
      </p>
      <p>
        Luckily this pattern brings a lot of operational benefits as well. One of the key aspects
        that influences the performance and availability of the integration services is the robust
        capability to scale each integration application and its services, both vertically and
        horizontally. Scaling can be done separately for the channel applications and for the
        adapter applications, which supports the reusability and composability aspect greatly. As
        the data service in an adapter can be reused by other consumers and used as a building block
        for composed services, it will experience a different level of traffic, hence it needs to be
        sufficiently scaled with the underlying it connects to.
      </p>
      <p>
        Furthermore, this pattern structure supports security, as all service consumers can be
        easily cut off from data sources if compromised. Same goes for any data provider, if the
        data becomes corrupted or the system compromised it can be easily excluded from the
        communication. This means that only the services provided by that specific system will be
        unavailable, not the entire integration platform or ecosystem. Other integration
        applications will function normally.
      </p>
      <p>
        Lastly, a very important operational quality is that this pattern enables a lot better
        observability, which can provide significant information on how data is consumed in the
        ecosystem. Having a clear separation of APIs designated for consumption by various systems,
        we can easily track which system consumes what and when. This in turn gives a very robust
        set of data to support auditability.
      </p>
      <h2>Conclusions</h2>
      <p>
        At first glance, this pattern might be criticized for its seemingly excessive use of
        resources to facilitate simple communication. However, when viewed within the broader
        context of API-Led architecture and the reusability of specific services and abstraction
        layers, the benefits become clear. This pattern is highly viable and provides significant
        value in complex environments. The abstraction layers enhance contract resilience and
        protocol agnosticism, while the reusability and composability lead to enhanced scalability
        and security. Although it might introduce a slight performance overhead and increased
        complexity, the advantages in terms of ecosystem stability and extensibility make it a
        valuable approach.
      </p>
    </article>
  </ArticleLayout>
</template>

<script setup lang="ts">
import APILed_Synchronous_P2P from '~/components/articles/API-Led_Synchronous_point-to-point/API-led_Synchronous_P2P.vue'
import APILed_P2P_reuse from '~/components/articles/API-Led_Synchronous_point-to-point/API-Led_P2P_reuse.vue'
</script>

<style scoped></style>
