<template>
  <ArticleLayout>
    <article>
      <h2>Where do we begin?</h2>
      <p>
        As we were preparing to write some of the articles and outlined our
        collective knowledge about Enterprise Application Integration (EAI), we
        identified many gaps in our understanding of the field we work in. Some
        were assumptions made over time, others simply lack of working
        experience in certain areas, simply by a lack of customers that wanted
        to do something in a specific way. Usually those gaps were easy to fill
        in, by discussion, a bit of research or reaching out to other
        specialists for an architectural sparring.
      </p>
      <p>
        One of the things we did not consider earlier was a proper division of
        architectural styles that could describe the various approaches EAI
        specialists have towards solving interoperability issues within
        organizations. We tried to name those, but the names were always
        associated with some kind of technology and, to an unhealthy extent,
        their marketing practices and the jargon created by them. And that makes
        sense especially that no one is teaching EAI in a technology agnostic
        way.
      </p>
      <p>
        So when we sat down to describe the architecture, it was in constant
        flux, with each new aspect of it creating doubt, attempts to find a
        better name or questioning if perhaps there is another architectural
        style that we’re missing. Those struggles in the end lead us to create a
        first version of a comparison between architectural styles for IT
        Ecosystems.
      </p>
      <h2>The bumpy way</h2>
      <p>
        To set the tone we will not write here about the comparison itself, but
        rather about the process leading up to it. It was not an easy one to
        deal with.
      </p>
      <h3>Context switch</h3>
      <p>
        When we usually think about architecture we mostly focus on system
        architecture (or design). That means we’re usually dealing with a single
        business domain and its subdomains. While when working on
        interoperability topics on the scale of an IT ecosystem, the focus is a
        lot wider and cross-domain. If we consider this as a main factor when
        describing the architectural styles, this means that we need to figure
        out how we understand architectural characteristics that describe them.
      </p>
      <h3>Redefining Architectural Characteristics</h3>
      <p>
        We took a moment to decide which architectural characteristics might be
        relevant for an IT ecosystem wide. The key problem here is that there
        are numerous architectural characteristics and most people have their
        own definition of all of them. Sometimes they do not match, not without
        a reason! To make them usable it is very hard to apply a generic
        definition, as a lot of them will be context specific, so applying
        something like ISO25010 is not exactly doable. This itself was a process
        that required quite a few sessions to discuss the problem, with time in
        between to rethink what this all means. That said, let’s have a look at
        the definitions we have came up with for architectural characteristics
        that we have chosen for the ecosystem abstraction layer:
      </p>
      <h4>Cost related</h4>
      <p>
        Cost is an important factor in all IT endeavors, as it often sets a
        specific direction as to what is feasible. At first we considered a
        single characteristic of cost to show in a simple way what implementing
        a specific architectural style would mean in terms of finance. While
        discussing it, we decided to split the cost into three distinct
        categories as that reflects better what might be the consequences of
        choosing a particular architectural style.
      </p>
      <h5>Development Cost</h5>
      <p>
        Is understood as the cost of developing new integrations in the
        ecosystem, including the cost of changes needed to be made within
        business applications. This also includes the cost of testing new
        integrations and potential later changes.
      </p>
      <h5>Operational Cost</h5>
      <p>
        Is understood as the cost of maintaining the interoperability between
        business systems within a specific architectural style. This includes
        the cost of maintaining, operating and monitoring the chosen EAI tooling
        (integration platform, API management, event broker, devOps tools, etc.)
        as well as the cost of providing a Root Cause Analysis (RCA) and bug
        fixing.
      </p>
      <h5>Architectural Changes Cost</h5>
      <p>
        Is understood as the cost of making significant changes to the ecosystem
        like replacing a whole application (e.g. moving from Salesforce to M365
        CRM) or changing the data model of a communication and its impact. In
        essence it is about the degree of coupling between the EAI tools and
        business systems connected through it.
      </p>
      <h4>Architectural and design time</h4>
      <p>
        When discussing architectural characteristics around the ecosystem
        abstraction layer we divided them into two groups. Starting with the
        architectural and design time considerations which relate to more static
        aspects of an IT ecosystem and catering to interoperability, which
        relate to architecture and later design of specific solutions.
      </p>
      <h5>Abstraction</h5>
      <p>
        Is understood as the capability to hide complexity, logic and
        implementation details behind a well-defined interface, where high
        abstraction promotes loose coupling, that is mostly low level data
        coupling with protocol agnostic interoperability. This makes it easier
        to build systems in different technologies and makes it possible to
        evolve or even replace them independently.
      </p>
      <h5>Contract Resilience</h5>
      <p>
        Is understood as the capability of a system (here mostly an integration
        platform) to adapt to changes in interface definitions, data models and
        data formats of the systems it interacts with. High contract resilience
        means that changes, even considered to be breaking in a point to point
        communication, might not impact the end consumer system. Breaking
        changes are hidden and mitigated in the abstraction layers, e.g. a
        change adding mandatory fields in a response with a system, while
        reflected in API-Led architecture in an adapter and service layers,
        might remain unmapped in the channel layer, not to change the customers
        contract). This is often critical to manage for ensuring continued
        interoperability in the face of system upgrades or changes in business
        requirements.
      </p>
      <h5>Simplicity</h5>
      <p>
        Is understood as the strive to minimize the number of components and/or
        interactions between them within an ecosystem, which in turn reduces the
        cognitive load of understanding its dependencies. By focusing on
        simplicity it is possible to better support maintainability and keep the
        ecosystem's architecture easier to understand and change.
      </p>
      <h5>Composability</h5>
      <p>
        Is understood as the capability of an architectural style to facilitate
        reuse, combining and recombining of data, code, libraries up to whole
        services or applications to provide more business value and new
        functionality, as well as the degree to which it is easy to do. Focusing
        on composability makes the creation of flexible solutions easier by
        leveraging the existing functionalities across the ecosystem.
      </p>
      <h5>Extensibility</h5>
      <p>
        Is understood as the capability to add new features, systems,
        integrations without impacting or with limited impact when extending the
        existing functionality. This is not only understood as architectural
        extensibility where structures like messaging topics enable to add new
        consumers easily, but also the ease at which new systems can be
        integrated into the ecosystem (e.g. being protocol agnostic, providing
        API abstraction). It is the measure of the ecosystem's ability to grow
        while maintaining interoperability between business systems, domains.
      </p>
      <h4>Operational</h4>
      <p>
        The second group of architectural characteristics that we have
        considered within our research into ecosystem architectural styles is
        tackling the dynamic aspects of what happens between IT systems, so in
        essence topics surrounding the implementation and use of IT systems and
        the interaction with integration platforms.
      </p>
      <h5>Testability</h5>
      <p>
        Is understood as the capability to easily and sufficiently test the
        business processes that rely on interoperability to complete
        successfully. This involves a wide range of tests, including regression
        testing of existing features and testing of new functionalities,
        starting with unit testing the integrated systems and integration flows,
        through end-to-end connectivity testing, user acceptance testing and up
        to performance and load testing.
      </p>
      <h5>Scalability</h5>
      <p>
        Is understood as the capability of the ecosystem to support business
        systems and handle increased load or volume of traffic without a
        significant performance degradation. This is critical for ensuring that
        the ecosystem can accommodate further growth and increased use of shared
        services.
      </p>
      <h5>Performance</h5>
      <p>
        Is understood as the ecosystem's capacity to handle high-volume data
        exchange with minimal latency. This is essential for ensuring that
        integrated systems can respond promptly and effectively, thereby
        supporting efficient business processes and a positive user experience.
      </p>
      <h5>Security</h5>
      <p>
        Is understood as the ecosystem's capability to prevent unauthorized
        access and data breaches by providing sufficient countermeasures. This
        can be done by addressing Least Privileged Access, proper encryption,
        adhering to Zero Trust, etc.. It is essential for maintaining data
        integrity and confidentiality as data flows across system boundaries.
      </p>
      <h5>Observability</h5>
      <p>
        Is understood as the ecosystem’s capability to provide logging and
        monitoring that enables the operations team to understand and observe
        the ecosystem’s behavior in real-time to support troubleshooting,
        operational and security anomaly detection and identifying performance
        bottlenecks.
      </p>
      <h5>Auditability</h5>
      <p>
        Is understood as the capability of the ecosystem to provide evidence,
        track and audit the ecosystem's activity for compliance and security
        purposes, by creating visibility into data flows and interactions
        between various domain systems.
      </p>
      <h3>The next step</h3>
      <p>
        With the context based definitions of architectural characteristics we
        were able to have proper discussions about the qualities of specific
        architectural styles for ecosystems.
      </p>
      <p>
        But first we need to define those architectural styles to be able to
        compare them. At first we defined this simply as:
      </p>
      <ul>
        <li>
          Point to point - a simple architectural style for interoperability,
          where there is no need for mediators between systems. While some of
          you might question whether it is even an architectural style, we
          categorized this as an implicit style, where the architecture is
          assumed as it is developed.
        </li>
        <li>
          Event-Driven Architecture - an ecosystem representation of a common
          system design architecture, governed mostly by the same rules.
        </li>
        <li>
          Orchestration Driven Service-Oriented Architecture - an architectural
          style that is known to many integration architects and developers that
          spent years in the industry, as many practices of modern integration
          platforms derived from SOA.
        </li>
      </ul>
      <p>
        As we discussed these architectural styles and their implementations we
        have encountered over the years, we realized that this list was somewhat
        wrong and did not match correctly with our experience and what we see
        happening in the industry today. We were missing at least one style in
        the comparison. Digging further into the topic, we realized that what we
        consider Service-Oriented Architecture, has evolved quite much over the
        years and can no longer be called that. As a result we have created a
        new list:
      </p>
      <ul>
        <li>Point to point - as defined above,</li>
        <li>Broker architectures:</li>
        <ul>
          <li>
            Event-Driven Architecture - an architectural style that supports
            asynchronous communication by providing a technical broker to
            facilitate communication between systems,
          </li>
          <li>
            Integration Broker Architecture - an architectural style that
            provides workflow like capabilities for application integration
            flows, enabling easily both synchronous and asynchronous
            communication (when paired with a message or event broker),
          </li>
        </ul>
        <li>
          API-Led Architecture - a somewhat distant relative to Service-Oriented
          Architecture that provides capabilities to compose and reuse services
          built in three different abstraction layers of an integration
          platform. It enables both synchronous and asynchronous capabilities
          (when paired with a message or event broker),
        </li>
      </ul>
      <p>
        Additionally we decided to add “Spaghetti Architecture” to the
        comparison, just to show how neglecting interoperability issues and
        architectural governance on an ecosystem abstraction level can change
        architectural characteristics of the ecosystem.
      </p>
      <p>
        This part was a long thought exercise that started with drafting an
        initial proposal of a comparison and then submitting it to several
        reviews with multiple independent experts in the field of EAI or System
        Architecture that we reached out to via LinkedIn, conference networking
        or previous work engagements. Each review was followed by a sparring
        session, where the understanding of those architectural characteristics
        was further refined, a common dictionary established and the qualitative
        scoring on each characteristic for each architectural style was
        discussed, challenged and reassigned based on arguments provided by each
        side of the discussion. The changes made to the comparison were then
        communicated to other reviewers, further discussed and acknowledged.
      </p>
      <h2>Conclusion</h2>
      <p>
        As a result of this long process of discussions, arguments and
        rethinking what architecture is on a level of an ecosystem abstraction
        we have finally completed a first version of the architectural styles
        qualitative analysis.
      </p>
    </article>
  </ArticleLayout>
</template>

<script setup>
const dark = useState("dark", () => false);
</script>

<style scoped></style>
