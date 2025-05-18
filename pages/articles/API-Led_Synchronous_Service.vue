<template>
  <ArticleLayout>
    <article>
      <h2>Moving complexity</h2>
      <p>
        In the world of application integration, managing complexity is an unending challenge. As we
        navigate the labyrinth of data flows and system interactions, we must acknowledge that
        complexity, especially that of communication, is inherent and unavoidable. The core issue
        lies not in eliminating it altogether, but rather in strategically assigning the
        responsibility of handling it. This is perfectly captured by Tesler’s Law:
      </p>
      <p />
      <p class="italic ml-7">
        “Every application must have an inherent amount of irreducible complexity. The only question
        is who will have to deal with it.”
      </p>
      <ul class="text-right">
        <div>- Law of conservation of complexity</div>
        Larry Tesler
      </ul>
      <p class="mt-4">
        As we dive into Synchronous Services in API-Led Architecture we can see that this pattern is
        a crucial strategy for addressing communication complexity and moving it away from business
        systems through orchestrating complex data flows in distributed environments. Unlike direct
        point-to-point integrations, this pattern leverages the qualities of an API-Led Integration
        Platform to manage and orchestrate data traffic and transformation between multiple business
        systems. This approach simplifies the communication logic required on the consumer side to a
        minimum. At the same time it promotes reusability of composed and data services. In
        environments where data sources are fragmented and fulfilling a specific use case requires
        orchestrating multiple calls, the Synchronous Service pattern proves invaluable.
      </p>
      <h2>Pattern nameplate</h2>
      <p class="m-0">
        Name: <b>Synchronous Service</b>
      </p>
      <p class="m-0">
        Communication mode: <b>synchronous</b>
      </p>
      <p class="m-0">
        Architectural style: <b>API-Led Architecture</b>
      </p>
      <p>Common use cases:</p>
      <ul>
        <li>Data quality assurance based on API contracts</li>
        <li>
          Data on demand - Data enrichment to make a data retrieval, where the caller does not have
          sufficient data to make a P2P call
        </li>
        <li>
          Hiding core systems behind integration layers, validating input data to mitigate security
          issues and potential breaches
        </li>
        <li>Potential reuse of composed services for other cases</li>
      </ul>
      <p>Architectural coupling:</p>
      <ul>
        <li>
          Contract coupling - both, the service consumer and the data provider are bound by contract
          coupling with the integration platform, but not bound by said coupling to each other,
        </li>
        <li>Semantic coupling - unavoidable with any data exchange</li>
      </ul>
      <p>Operational coupling:</p>
      <ul>
        <li>
          Temporal - the fact that this pattern utilizes a composed service, which is responsible
          for orchestration of various calls, means that we are deliberately introducing temporal
          dependency, where the execution of each subsequent orchestrated call usually depends on
          the successful completion of the previous call. This coupling is there by design, and is
          usually unavoidable as it derives from business logic and communication complexity moved
          from the service consumer system to the integration platform
        </li>
        <li>
          All communication happens within a single architectural quantum that includes all involved
          systems (service consumer and providers - can be more than 2), and the integration
          platform
        </li>
      </ul>
      <h3>Diagrams</h3>
      <h4>Pattern diagram</h4>
      <APILed_Synchronous_Service_pattern />
      <p class="text-center font-bold mt-4">
        Synchronous Service
      </p>
      <h4>Behavioral diagram</h4>
      <APILed_Synchronous_Service_sequence_diagram />
      <p class="text-center font-bold mt-4">
        Example sequence diagram for Synchronous Service
      </p>
      <h2>Pattern analysis</h2>
      <p>
        The Synchronous Service pattern is an extension of the Synchronous point-to-point pattern,
        characterized by its use of a composed service residing within the integration platform's
        composition layer. This service is responsible for orchestrating calls to multiple data
        services, enriching data, and transforming it to meet the needs of the consumer. By
        centralizing orchestration within a composition layer, this pattern abstracts away the
        complexities of individual system interactions, allowing consumer systems to focus on their
        core business logic. This method contrasts sharply with traditional point-to-point
        integrations, where each consumer system would need to manage its own complex communication
        logic, including orchestrating calls, managing data transformations, and handling diverse
        data models.
      </p>
      <p>
        Orchestration typically occurs in sequence, though parallel calls may be possible for data
        gathering scenarios. Unlike simple pass-through services, the composed service adds
        significant value by managing complexity, service state, and providing a standardized
        service API to consumers. The fact that the logic is centralized also helps solving error
        handling issues, especially if the communication needs to be transactional between all
        provider systems. The composed service, since it holds all communication state, is where
        transaction error handling, rollback or compensating updates logic can be placed.
      </p>
      <h3>Architectural considerations</h3>
      <p>
        Architecturally, the Synchronous Service pattern leverages the abstraction capabilities of
        API-Led Architecture to a great extent. Data services abstract the logic of accessing data
        in provider systems, providing standardized access points. Composed services then abstract
        the need for multiple calls to these data services, offering a single, standardized API to
        consumers. The composability of this pattern is a significant advantage, as composed
        services and data services can be reused as building blocks for various integration needs.
        This reusability reduces development effort and time, as new services can be created by
        leveraging existing components.
      </p>
      <p>
        This multi-layered abstraction builds robust contract resilience, as changes in provider
        systems can be mitigated within the integration platform without impacting consumers.
        Additionally, the use of dedicated services in channel applications allows for tailoring
        responses to specific consumer needs, further enhancing flexibility and security.
      </p>
      <p>
        Extensibility and removability are also significant benefits, as services, as well as
        consumer and provider systems, can be easily added, removed, or replaced without affecting
        the entire ecosystem. While the pattern itself is not inherently simple, the technical
        partitioning of the integration flow enhances readability, making it easier to understand
        and troubleshoot compared to alternatives in other architectural styles.
      </p>
      <h3>Operational Considerations</h3>
      <p>
        Operationally, the Synchronous Service pattern presents both challenges and benefits.
        Performance can be a concern due to the sequential invocation of data services, which can
        introduce latency. If the underlying data services are not invoked in parallel, then the
        service latency becomes the sum of latency over all integration services (which luckily is
        usually fairly low), as well as the provider systems. If the providers are not performant,
        this can lead to communication bottlenecks and further down the line to timeouts.
      </p>
      <p>
        On the other hand, the overall scalability and high availability of the pattern are
        significant advantages. Each application on the integration platform can be scaled
        individually, making them performant even if they are significantly reused.
      </p>
      <p>
        Testability is more challenging compared to other architectural styles due to the complexity
        of orchestrating multiple services. However, the structured approach of technical
        partitioning aids in root cause analysis, making it easier to identify and resolve issues.
        This further enhances maintainability as we can easily pin point the problematic areas.
      </p>
      <p>
        Security, observability, and auditability are enhanced due to the technical partitioning.
        The distributed nature of the platform means that proper tooling is essential for effective
        monitoring and root cause analysis. Robust logging and metadata tracking provide valuable
        insights into data consumption and system behavior, supporting auditability. Granular
        monitoring and control of data flow are possible, and the ability to isolate communication
        for specific systems further enhances security.
      </p>
      <p>
        Lastly, composability, and the modular approach that comes with it, simplifies and enhances
        maintainability. However, that can be severely impacted by transactionality which can be a
        challenge, when multiple provider systems require transactional behavior. In such cases, the
        composed service must manage transactionality and rollback mechanisms, adding complexity to
        error handling.
      </p>
      <h2>Conclusions</h2>
      <p>
        The Synchronous Service pattern is a valuable tool in the API-Led Architecture toolkit,
        particularly in complex, distributed environments. It provides a structured approach to
        orchestrating data flows, simplifying consumer logic, and enhancing overall system
        maintainability. While it introduces some complexity and potential performance overhead, the
        benefits in terms of contract resilience, composability, and extensibility outweigh these
        drawbacks. The pattern’s ability to abstract away complexities, provide reusable building
        blocks, and enhance security and observability make it a robust choice for modern
        integration needs. As organizations continue to evolve their IT ecosystems, the Synchronous
        Service pattern offers a flexible and scalable solution for managing intricate data
        interactions, ensuring that data is delivered efficiently and securely to all consumers.
      </p>
    </article>
  </ArticleLayout>
</template>

<script setup lang="ts">
import APILed_Synchronous_Service_sequence_diagram from '~/components/articles/API-Led_Synchronous_Service/API-Led_Synchronous_Service_sequence_diagram.vue'
import APILed_Synchronous_Service_pattern from '~/components/articles/API-Led_Synchronous_Service/API-Led_Synchronous_Service_pattern.vue'
</script>

<style scoped></style>
