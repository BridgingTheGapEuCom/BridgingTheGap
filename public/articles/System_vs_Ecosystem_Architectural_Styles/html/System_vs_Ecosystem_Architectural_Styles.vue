<template>
  <article>
    <h2>Many flavors of architecture</h2>
    <p>
      When we think about architecture, we usually think of building a system. There are no right
      answers to how to build, most of the time we use our experience and expertise, or we look
      towards more advanced techniques like trade-off analysis to choose “the least worst” solution.
      Luckily there are shortcuts that can help make decisions over what type of architectural style
      (or mix of those) you could use to build your system based on the architectural capabilities
      rather than functional behavior.
    </p>
    <img
      src="/articles/System_vs_Ecosystem_Architectural_Styles/img/www/system_vs_ecosystem-Generic Architectural Styles.drawio.png"
      alt=""
    />
    <p>
      IP: Neal Ford,
      <a
        href="https://nealford.com/downloads/Architecture_Foundations_Styles_and_Patterns_by_Neal_Ford.pdf"
        target="_blank"
        >Architecture Foundations - Styles and Patterns</a
      >
    </p>
    <p>
      While it is beneficial to understand and know how to properly use and mix those architectural
      styles, when working with their capabilities and architectural characteristics, they focus
      mostly on a single domain system, monolithic or distributed alike. When we are working on
      Enterprise Application Integration, the focus is usually on cross-domain functionality and
      enabling the data to be used in different contexts, often outside of their domain of origin
      (e.g. customer data from a customer domain may be needed by the order domain to fulfill orders
      or an anonymised version would be very useful to the marketing domain for creating campaigns).
    </p>
    <h2>Ecosystem abstraction layer</h2>
    <p>
      Cross-domain interoperability, while can be supported on a system level by exposing APIs,
      encapsulating logic, must be addressed on a different abstraction level - ecosystem (or
      landscape) level. This in itself brings different architectural styles that can be leveraged
      to ease the burdens of interoperability, amongst many other troubles.
    </p>
    <img
      src="/articles/System_vs_Ecosystem_Architectural_Styles/img/www/system_vs_ecosystem-Ecosystem%20Architecural%20Styles.drawio.png"
      alt=""
    />
    <p>
      Looking from a perspective of an Integration Architect, that knows a few integration
      technologies, we can identify four distinct architectural styles, that can be used in various
      scenarios:
    </p>
    <ul>
      <li>Point-to-point</li>
      <li>Event-Driven Architecture</li>
      <li>Integration Broker</li>
      <li>API-Led Architecture</li>
    </ul>
    <h3>Point-to-point</h3>
    <p>
      An implicit architecture, where it is taken by without proper consideration simply by creating
      code. It is very common with small ecosystems of startups and is a very useful approach for
      quick wins. Unfortunately with each new connection the complexity grows, adding to the number
      items on the maintenance list (e.g. credentials for each system, firewall rules, duplicate
      system access logic) and creating more and more coupling within the ecosystem as all of the
      logic is contained within the domain systems themselves. If the communication is standardized
      (which is rare) and proxied via an API Management solution, this could be still valid for
      medium sized organizations.
    </p>
    <p>
      The biggest pitfall of a Point-to-point approach is that often it is not governed properly,
      leading to something called the Spaghetti Architecture, which is a state where most
      organizations struggle with their interoperability capabilities and seek help to resolve their
      maintenance issues, development bottlenecks or lack of data visibility.
    </p>
    <h3>Event-Driven Architecture</h3>
    <p>
      Event-Driven Architecture is a broker architecture, where an event-broker (or a message
      broker) is utilized to facilitate communication between domain systems, usually in an
      asynchronous fashion. In essence it is used similarly on a system level to the extent that
      some of the architectural patterns can be used exactly the same way.
    </p>
    <p>
      The key to Event-Driven is to utilize events that are defined as facts that have occurred in
      the domain systems (e.g. a customer created an account, a new product bundle configuration was
      created, order was processed and sent). Those events are transmitted through queues and/or
      topics, which are the transport layer that facilitates the communication. This architecture
      relies on business, error handling and orchestration or choreography logic to be contained
      within the domain systems and the event broker remains as an infrastructural system.
    </p>
    <h3>Integration Broker</h3>
    <p>
      Integration Brokers in comparison to Point-to-point and Event-Driven Architecture have an
      additional key value - the capability to create communication logic outside of the domain
      systems. This in turn gives this architectural style the capability to create an abstraction
      layer between domain systems and provide additional decoupling capabilities both with
      synchronous and asynchronous communication modes. This makes it a viable option for medium to
      large organizations. The fact that in this architecture we use a central mediator that
      facilitates transport logic and orchestration enables it also to provide more visibility and
      auditability within the ecosystem itself.
    </p>
    <p>
      The key downside of this architecture is that while you can create many development standards,
      patterns and reuse, it does not have any architectural patterns as each integration flow is a
      custom workflow that supports a business process. While it is really hard to create flows that
      are entirely reusable, it is still possible in a specific set of circumstances (e.g. identical
      systems, with identical APIs within different territories).
    </p>
    <h3>API-Led Architecture</h3>
    <p>
      API-Led Architecture, being a cousin to Orchestration-Driven Service Oriented Architecture
      (ODSOA), is the most mature and robust approach to Enterprise Application Integration,
      enabling it to provide a great insight into the IT landscape as well as individual systems and
      the data they provide or consume. The super power of this architecture is the capability to
      provide abstraction layers, that decouple the systems to an extent that in a mature IT
      environment you can replace a whole domain system without impacting other systems in that IT
      landscape.
    </p>
    <p>
      The major pitfall of this architecture is that it is a lot more complex than its counterparts
      and requires a lot more effort and resources to implement at first. That said, the cost lowers
      over time as more and more data and services are exposed within the ecosystem creating
      reusability on a functional level, rather than only code. To be able to work with such an
      architecture DevOps capabilities are essential as with its complexity it will become hard to
      manage over time without proper automation to make the development, testing and deployment
      processes streamlined.
    </p>
    <h2>Architecture Comparison</h2>
    <p>
      It is very hard to compare those architectures between various implementations of many
      companies, as switching between them would require reimplementing a multitude of business
      systems to communicate differently based on the underlying business processes corresponding to
      the architectural style. That is why, while not impossible, it is not realistic to compare
      these architectural styles implementations within a standardized set of boundaries (a.k.a.
      quantitative analysis). It is however possible to provide a qualitative analysis, based on an
      overview of architectural characteristics of those architectural styles, which can be derived
      from professional experience, facilitating subject matter discussions, hosting focus groups
      and long analysis of those topics. That said, we would like to introduce such a comparison,
      which we created based on our experience and independent research. A more detailed description
      of the characteristics and the score for each architectural style will be provided in separate
      articles!
    </p>
    <p>
      Before you jump into analyzing this table please note that while these are a result of our
      research, the actual outcomes in implementation may vary depending on several factors (e.g.
      organization and IT maturity, used technology, ecosystem composition, business processes).
      This table should not be treated as a source of definitive truth, but rather as generalized
      guidelines by which you may choose an architectural style for ecosystem wide interoperability.
    </p>

    <table>
      <tr>
        <th>Architectural Characteristic Name</th>
        <th>Point-to-point</th>
        <th>Spaghetti Architecture</th>
        <th>Event-Driven Architecture</th>
        <th>Broker (Mediator topology)</th>
        <th>API-led Architecture</th>
      </tr>
      <tr>
        <td>Development Cost</td>
        <td>💲</td>
        <td>💲</td>
        <td>💲💲</td>
        <td>💲💲</td>
        <td>💲💲💲</td>
      </tr>
      <tr>
        <td>Operational Cost</td>
        <td>💲</td>
        <td>💲💲💲💲💲</td>
        <td>💲💲💲</td>
        <td>💲💲💲</td>
        <td>💲💲💲💲</td>
      </tr>
      <tr>
        <td>Architectural Changes Cost</td>
        <td>💲</td>
        <td>💲💲💲💲</td>
        <td>💲💲</td>
        <td>💲💲💲</td>
        <td>💲💲</td>
      </tr>
      <tr>
        <td>Abstraction</td>
        <td>⭐</td>
        <td>⭐</td>
        <td>⭐⭐</td>
        <td>⭐⭐⭐</td>
        <td>⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td>Contract Resilience</td>
        <td>⭐</td>
        <td>⭐</td>
        <td>⭐⭐</td>
        <td>⭐⭐⭐</td>
        <td>⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td>Simplicity</td>
        <td>⭐⭐⭐⭐⭐</td>
        <td>⭐</td>
        <td>⭐⭐⭐⭐</td>
        <td>⭐⭐⭐</td>
        <td>⭐⭐⭐</td>
      </tr>
      <tr>
        <td>Composability</td>
        <td>⭐</td>
        <td>⭐</td>
        <td>⭐⭐⭐</td>
        <td>⭐⭐</td>
        <td>⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td>Extensibility</td>
        <td>⭐</td>
        <td>⭐</td>
        <td>⭐⭐</td>
        <td>⭐⭐⭐</td>
        <td>⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td>Testability</td>
        <td>⭐⭐⭐⭐⭐</td>
        <td>⭐</td>
        <td>⭐⭐⭐⭐</td>
        <td>⭐⭐⭐</td>
        <td>⭐⭐</td>
      </tr>
      <tr>
        <td>Scalability</td>
        <td>⭐⭐</td>
        <td>⭐⭐</td>
        <td>⭐⭐⭐⭐</td>
        <td>⭐⭐⭐⭐</td>
        <td>⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td>Performance</td>
        <td>⭐⭐⭐⭐</td>
        <td>⭐⭐⭐</td>
        <td>⭐⭐⭐⭐⭐</td>
        <td>⭐⭐⭐</td>
        <td>⭐⭐</td>
      </tr>
      <tr>
        <td>Security</td>
        <td>⭐⭐⭐</td>
        <td>⭐</td>
        <td>⭐⭐</td>
        <td>⭐⭐⭐⭐</td>
        <td>⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td>Observability</td>
        <td>⭐⭐</td>
        <td>⭐</td>
        <td>⭐⭐⭐</td>
        <td>⭐⭐⭐</td>
        <td>⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td>Auditability</td>
        <td>⭐⭐</td>
        <td>⭐</td>
        <td>⭐⭐</td>
        <td>⭐⭐⭐⭐</td>
        <td>⭐⭐⭐⭐⭐</td>
      </tr>
    </table>

    <p>
      If you wish to learn more about architectural styles for system architecture, you can do so by
      reading
      <a
        href="https://www.oreilly.com/library/view/fundamentals-of-software/9781663728357/"
        target="_blank"
        >this book</a
      >
      or attending a training/webinar run by Mark Richards and Neal Ford.
    </p>
  </article>
</template>

<script setup>
defineProps(['dark'])
</script>

<style scoped></style>
