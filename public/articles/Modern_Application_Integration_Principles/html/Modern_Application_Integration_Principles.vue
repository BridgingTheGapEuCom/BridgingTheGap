<template>
  <article>
    <h2>Improving the Maturity</h2>
    <p>
      Working in corporate environments often entails dealing with technical debt that arose over
      the years of the company building up its IT, merging with other companies, acquiring software,
      SaaS solutions, etc.. Technical systems are often at the very end of this list, as they have
      lower priority in the eyes of the business, as they do not provide direct business value, at
      least not one that will be easily understood. Application Integration is unfortunately one of
      those technical systems that are often neglected, especially if the business is not technology
      driven (so not e.g. telecommunications, technology vendors, SaaS solution vendors).
    </p>
    <p>
      To improve maturity is to strive to improve applications, infrastructure, and networking, so
      in general a lot more than just front-end applications that the business uses. While improving
      IT maturity is essentially a very broad topic, here we wish to focus on one of the first steps
      in improving the maturity of the Application Integration field.
    </p>
    <h2>Establishing Application Integration Principles</h2>
    <p>
      If we were to take a dive into architecture or strategy documents in different companies, we
      would probably find that the way principles are defined varies not only between companies, but
      also between these documents.
    </p>
    <p>
      To make our approach here a bit cleaner, let’s first try to define what a principle is.
      According to the Merriam-Webster Dictionary it is:
    </p>
    <div class="italic my-4">
      <div>Principle</div>
      <div class="flex">
        <div>
          <div class="mr-3">1</div>
          <div class="border-l-2 h-[5rem] dark:border-gray-400"></div>
        </div>
        <div>
          <div class="flex">
            <div class="inline-block">
              <div class="pr-2 font-bold inline-block">a</div>
              <div class="inline-block font-bold">:&nbsp;</div>
            </div>
            a comprehensive and fundamental law, doctrine, or assumption
          </div>
          <div>
            <div class="inline-block">
              <div class="inline-block pr-2 font-bold">b</div>
              <div class="inline-block text-sm font-bold pr-2">(1)</div>
              <div class="inline-block font-bold">:&nbsp;</div>
            </div>
            a rule or code of conduct
          </div>
          <div>
            <div class="inline-block">
              <div class="inline-block pr-4 font-bold"></div>
              <div class="inline-block text-sm font-bold pr-1.5">(2)</div>
              <div class="inline-block font-bold">:&nbsp;</div>
            </div>
            habitual devotion to right principles
          </div>
          <div class="ml-10 border-l-2 dark:border-gray-400">
            <div class="pl-2 text-gray-500 dark:text-gray-400">a man of principle</div>
          </div>
          <div class="flex">
            <div class="inline-block">
              <div class="pr-2 font-bold inline-block">c</div>
              <div class="inline-block font-bold">:&nbsp;</div>
            </div>
            the laws or facts of nature underlying the working of an artificial device
          </div>
        </div>
      </div>
    </div>
    <p>
      Taking the first definition, we wish to propose to you some fundamental guidelines as
      principles to follow on your Application Integration journey for improvement. Let’s dive in!
    </p>
    <h2>Business Alignment Principles</h2>
    <h3>Focus on Business Value</h3>
    <p>
      While Application Integration Platforms are technical systems, the focus of their use should
      be on solving real business problems and contributing to the overall company goals. The key
      element here is to ask “Why?”, so that making integrations for the integration's sake can be
      avoided. There needs to be a clearly defined goal to achieve with outlined benefits that the
      integration will deliver. Alongside that, there is a need to measure the success of the
      integrations, which can be achieved by adding the right performance indicators (KPIs) to track
      it. For example if the goal is to improve order processing, average order processing time
      might be a good statistic to track. With all this outlined before implementation, it is easier
      to properly prioritize integrations that will support the organization's growth and later on
      demonstrate the return on investment (ROI).
    </p>
    <h4>Questions to consider:</h4>
    <ul>
      <li>Why are we applying application integration here?</li>
      <li>What problem are we solving?</li>
      <li>What can we measure to see the problem clearly and later measure the success?</li>
      <li>What is the business priority of this integration for now and the future?</li>
      <li>How does that translate to ROI?</li>
    </ul>
    <h3>Alignment with Business Processes</h3>
    <p>
      For Application Integration Platforms to succeed, it is crucial for the specialists working on
      them to have a high-level overview of what the business process is, as that defines how
      different parts of the company interact with each other. This in turn enables us to identify
      data exchange points between business applications that support those processes. This approach
      can help with augmenting existing workflows, further automating manual tasks and data
      exchanges where it is applicable. On top of that it can also help identify and break down
      information silos within departments to additionally enhance collaboration. Business process
      alignment helps build meaningful integrations that are more likely to be adopted by other
      departments that require the same or similar data sets.
    </p>
    <h4>Questions to consider:</h4>
    <ul>
      <li>What business process are we supporting?</li>
      <li>What are the data exchange points (both manual and automated)?</li>
      <li>What manual tasks can be automated?</li>
      <li>What are the data sources?</li>
      <li>How can these integrations be reused?</li>
    </ul>
    <h2>Technical Principles</h2>
    <h3>Standardization</h3>
    <p>
      Standardization is a strive to limit the amount of work needed to create, deploy and operate
      IT solutions. It can be applied on many levels, from architectural patterns, through the
      application of specific solutions, down to the code level. It saves time over development,
      reduces errors and makes troubleshooting easier. Within the field of application integration
      this can be done by:
    </p>
    <ul>
      <li>
        Applying proper integration patterns - to apply standard development practices, identify
        components that need to be built or extended, assess workload,
      </li>
      <li>
        Using industry standard protocols - using common and well known protocols such as SOAP,
        REST, JMS, AMQP, gRPC, etc.,
      </li>
      <li>
        Agreeing on data formats - to ensure seamless data exchange between applications, regardless
        of their internal data structures,
      </li>
      <li>
        Using common code libraries - Using code wrappers dramatically shortens development time,
        especially for connectivity, logging, monitoring, error handling and security,
      </li>
      <li>
        Considering Integration Tools - Having a chosen integration tool (e.g. middleware, messaging
        service) can streamline the development process and reduce the learning curve for
        developers.
      </li>
    </ul>
    <h3>Loose Coupling</h3>
    <p>
      Introducing and facilitating loose coupling enables the applications to have minimal (or
      minimized) dependencies on each other. This in turn allows them to be developed, deployed and
      scaled independently without impacting the entire ecosystem. This improves fault tolerance and
      makes maintenance easier. Loose coupling can be supported by:
    </p>
    <ul>
      <li>
        Facilitating asynchronous communication (event or message-driven) using queues or pubsub
        mechanisms,
      </li>
      <li>
        Using API Gateways as a means of single point of entry, separating the consumer applications
        from API providers
      </li>
      <li>
        Using abstraction layers that hide the complexity of accessing data, or provide, tailored on
        a need-to-know basis, service APIs to consumers,
      </li>
    </ul>
    <h3>Reusability</h3>
    <p>
      Reusability focuses on creating application integration components and services in a way that
      their functionality can be reused. This reduces the development time and cost of future
      integrations as well as promotes consistency across your IT landscape. This can be supported
      by:
    </p>
    <ul>
      <li>
        Microservices Architecture - functionality broken down into small and independent services
        makes them easily reusable, but requires governance over microservice chaining, as that
        might as well be a pitfall,
      </li>
      <li>
        Orchestration Driven Service Oriented Architecture - for larger landscapes, where a large
        variety of applications and systems are found and microservices architecture is not
        applicable to all, it is worth considering abstracting those applications with tailored
        services,
      </li>
      <li>
        Integration Patterns - use well-established integration patterns alongside proven
        technological components like API Gateways, Event Brokers,
      </li>
      <li>
        API or Developers Portal - where deployed APIs are discoverable and can be reviewed, so that
        developers can first look for an existing API to reuse instead of building a new one.
      </li>
    </ul>
    <h3>Plan to scale and perform</h3>
    <p>
      Application Integration services are prone to handle growing volumes of data and user demands.
      This means that they need special care in terms of performance as they facilitate
      communication between multiple applications. This is especially true for any e-commerce (or
      any other) businesses that experience peak sales periods, leading to heightened traffic and
      surges that need to be handled without compromising performance. This can be supported by:
    </p>
    <ul>
      <li>
        Choosing the right integration pattern - it is worth considering if the communication should
        be decoupled by using asynchronous communication or streaming protocols for high-volume data
        exchanges,
      </li>
      <li>
        Designing for horizontal scaling - alongside vertical scaling, designing for horizontal
        scaling is crucial, to create a fault-tolerant environment quickly adapting to peak traffic
        by utilizing automation. This also requires applications to be designed as compact as
        possible, possibly in a microservice architecture, to provide additional outscaling
        capabilities,
      </li>
      <li>
        Optimizing performance - gathering and analyzing performance data to identify bottlenecks or
        other crucial points that can be improved in order to ensure smooth data flow.
      </li>
    </ul>
    <h3>Security</h3>
    <p>
      Security is a crucial aspect of all communication and data exchange, so implementing tailored
      and robust security measures is essential. Sensitive information needs to be protected from
      unauthorized access, breaches, and manipulation. This can be supported by:
    </p>
    <ul>
      <li>
        Authentication and authorization - implementing mechanisms to verify calling system identity
        and control access to data,
      </li>
      <li>
        Data encryption - encrypting data in transit and at rest to shield it from unauthorized
        access and use,
      </li>
      <li>
        Enabling “<a
          target="_blank"
          href="https://en.wikipedia.org/wiki/Principle_of_least_privilege"
          >Least Privilege Access</a
        >” - this can be done by abstracting services and providing data need-to-know tailored APIs,
      </li>
      <li>
        Enabling centralized logging and monitoring - this supports anomaly detection and provides
        data for regular security audits that can tighten the security.
      </li>
    </ul>
    <h2>Operational Principles</h2>
    <h3>Logging and monitoring</h3>
    <p>
      Logging and monitoring of all events occurring over application integration components
      (integration platform, as well as clients and providers) are crucial to have a comprehensive
      overview of what is happening in the IT landscape. Early detection of errors and anomalies can
      prevent data inconsistencies. This can be supported by:
    </p>
    <ul>
      <li>
        Metadata - provide proper metadata for each communication, such as various unique
        identifiers, timestamp, data origin, selected HTTP headers, etc., as this provides crucial
        information to analyze any errors or anomalies,
      </li>
      <li>
        Log aggregation tools - all logs, payloads (anonymised as needed) and metadata need to meet
        in a single aggregation tool to process it and make it available to be searched and viewed
        on demand,
      </li>
      <li>
        Monitoring Tools - use industry standard monitoring tools and dashboards to visualize log
        data and create custom dashboards with specific alert triggers to enable proactive
        operations.
      </li>
    </ul>
    <h3>Governance and ownership</h3>
    <p>
      Defining clear governance to oversee the entire API and integration life cycle, starting with
      planning and development, up to deployment and ongoing production maintenance. This ensures
      consistent practices between projects, promotes collaboration between different teams and
      avoids the uncontrolled sprawl of integrations between applications. Adding clear ownership of
      each integration business and technical-wise to specific teams or individuals further ensures
      accountability for performance and maintenance. This can be further supported by:
    </p>
    <ul>
      <li>
        API Contracts - adopting API first approach to application integration development.
        Establishing a contract helps ensure that APIs have consistency and are made to be reusable,
        alongside allowing parallel development, fast mock creation and testing,
      </li>
      <li>
        Design guidelines - standardizing API design will ensure that APIs built within the
        organization will be consistent,
      </li>
      <li>
        Versioning and API lifecycle management - is enabling to constantly improve services offered
        both internally and externally in an organized manner, at the same time improving the
        stability of the IT ecosystem,
      </li>
      <li>
        API Discovery - allowing the APIs to be discoverable in the ecosystem is crucial with the
        ever growing number of interfaces deployed. Providing additional tooling to track
        dependencies of API consumption will be invaluable to analyze future impact,
      </li>
    </ul>
    <h3>Testing</h3>
    <p>
      Proactive testing throughout the integration lifecycle helps identify and rectify issues early
      on, preventing problems from cascading into production environments where they can disrupt
      business operations. Often omitted or not adequately supported, it is a crucial part of the
      development lifecycle that improves the reliability not only of the integration solutions, but
      also of the applications used by business. This can be supported by:
    </p>
    <ul>
      <li>
        API testing - while in design, using the API-first approach, a mock service API can be
        provided to test with interface consumers to ensure the definitions, scope of data, or
        formatting are correct.
      </li>
      <li>
        Unit Testing - individual integration components and services can be unit tested to ensure
        they function as expected in isolation.
      </li>
      <li>
        System Integration Testing - focuses on verifying how different components of the solution
        interact and exchange data. This ensures a smooth flow of information across the entire
        integration.
      </li>
      <li>
        (End to End) User Acceptance Testing - tests the overall functionality of the business
        solution from a business perspective. This validates if the integration delivers the
        intended business value.
      </li>
      <li>
        Other Non-Functional Testing - that evaluates solution characteristics such as performance
        (stress testing, load testing), scalability, and security (pen-testing).
      </li>
    </ul>
    <p>
      Furthermore, testing is strongly supported by Standardization, as standardized components and
      interfaces are easier to test, and Logging and Monitoring, as gathering statistics and
      observing data flows during testing provides valuable insights. This can be further improved
      by:
    </p>
    <ul>
      <li>
        Defining a Testing Strategy - plan your testing approach based on the complexity of the
        overall solution and the potential risks involved.
      </li>
      <li>
        Automating Testing - repetitive tests can be automated to save time and ensure consistency.
        This is especially useful for regression testing. However, manual testing remains essential
        for exploratory testing and validating business scenarios.
      </li>
      <li>
        Continuous Integration/Continuous Delivery (CI/CD) - integrating testing into your CI/CD
        pipeline to provide continuous feedback on the health of your integrations.
      </li>
    </ul>
    <h3>Documentation</h3>
    <p>
      Hardly any IT specialists enjoy writing documentation. Keeping a clear and up-to-date
      documentation for all integration flows is something crucial to an Application Integration
      Platform success. This documentation should involve:
    </p>
    <ul>
      <li>
        Technical specifications - these should involve use cases, edge cases, validation rules,
        volumetric data or predictions, orchestration logic, API definitions, or any custom made
        logic
      </li>
      <li>Solution and data flow diagrams - these should show:</li>
      <ul>
        <li>Logical views for solution components,</li>
        <li>BPMN defining the business processes,</li>
        <li>Sequence diagrams defining the flow of information,</li>
        <li>Low level design pattern diagrams for reference architecture,</li>
      </ul>
      <li>Operational procedures for day to day operations and emergency:</li>
      <ul>
        <li>Build and deploy procedures,</li>
        <li>Logging and monitoring,</li>
        <li>Root cause analysis,</li>
        <li>Disaster recovery,</li>
        <li>Service-Level Agreement (SLA)</li>
      </ul>
    </ul>
    <p>
      Proper documentation facilitates good knowledge transfer, simplifies onboarding for new team
      members, and ensures that there are smooth handovers between development and operations. When
      the integrations are well documented, they enable others to better understand, troubleshoot
      and scale not only the Application Integration layer, but also the rest of the IT landscape.
    </p>
    <h2>Wrapping up the principles</h2>
    <p>
      While the list we present above may seem a bit generic, it is important to start somewhere.
      These principles might not be specific enough for each company, but we believe that they cover
      a broad basis and provide guidelines for what should be followed to achieve a success with
      Application Integration.
    </p>
  </article>
</template>

<script setup>
defineProps(['dark'])
</script>

<style scoped></style>
