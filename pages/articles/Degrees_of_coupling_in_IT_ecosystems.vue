<template>
  <ArticleLayout>
    <article>
      <h2>EAI and coupling</h2>
      <p>
        One of the key problems Enterprise Application Integration (EAI) is addressing in various
        ways is coupling. While we explore how we can address it by applying specific architectural
        styles and patterns in other articles, we’d like to explore what is coupling and define,
        from a variety of types, which coupling types are relevant in ecosystem interoperability
        topics.
      </p>
      <h2>What is coupling?</h2>
      <p>To take a closer look at coupling, let’s start by looking at a few definitions:</p>
      <p>
        <span class="italic">
          In software engineering, coupling is the degree of interdependence between software
          modules; a measure of how closely connected two routines or modules are; the strength of
          the relationships between modules. Coupling is not binary but it is multi-dimensional.
        </span>
        <br />
        <a href="https://en.wikipedia.org/wiki/Coupling_(computer_programming)" target="_blank"
          >Wikipedia</a
        >
      </p>
      <p>
        <span class="italic">
          Coupling describes the independent variability of connected systems, i.e., whether a
          change in System A affects System B. If it does, A and B are coupled.
        </span>
        <br />
        <a
          href="https://www.enterpriseintegrationpatterns.com/ramblings/coupling_facets.html"
          target="_blank"
          >Gregor Hohpe</a
        >
      </p>

      <p>
        <span class="italic">
          If a change in one system, service or component, defined broadly, might facilitate a
          change in another system, service or component, they are coupled.
        </span>
        <br />
        <a href="https://www.developertoarchitect.com/" target="_blank">Mark Richards</a>
      </p>

      <p>
        If we consider the above definitions, there are two specific statements we can derive from
        them, showing the dual nature of coupling:
      </p>
      <ul>
        <li>
          No system is free from coupling, as there is always some sort of a dependency, e.g. to the
          operating system, infrastructure or other components, modules or applications. It is a
          matter of understanding the strength, distance and volatility of coupling.
        </li>
        <p>- Therefore a system, on its own, cannot be decoupled from its environment.</p>
        <li>
          Coupling is binary by design, meaning it is either intentional or implicit. Components and
          applications are either coupled to each other or not, meaning they either have or do not
          have a dependency to one another (e.g. two systems exchanging data with each other have a
          dependency, whereas a mobile game on your phone and your HR system at your workplace most
          likely have no dependencies between each other). In most cases, those dependencies can be
          derived from architectural blueprints, architectural decision records, documentation, or
          other knowledge sources. However, the challenge arises when those dependencies are hidden
          or indirect, so we cannot rule out their existence, especially if we have limited
          knowledge of the (eco)system at hand.
        </li>
        <p>- Therefore the system can be coupled or decoupled with another system.</p>
      </ul>
      <p>
        In essence coupling cannot be treated as an on-off switch, it has multiple dimensions and
        degrees along those. Furthermore coupling is contextual, which means that as always
        <span class="italic">it depends</span> on several factors whether or not a specific type or
        degree of coupling is wanted. So in essence any time you see a line between two boxes in a
        diagram depicting something about architecture or system design, that is some sort of a
        coupling that can be described.
      </p>
      <h2>Different types and characteristics of coupling</h2>
      <p>
        There are various types of coupling, those have their dimensions and strength. Discussing
        all of the coupling possibilities would be a very long and difficult process worthy of a
        book. Fortunately that work is already done by Vlad Khononov in
        <a
          href="https://learning.oreilly.com/library/view/balancing-coupling-in/9780137353514/"
          target="_blank"
          >Balancing Coupling in Software Design</a
        >. As we are going to dive into the topic we will be focusing only on those that bear
        significant relevance for interoperability on an ecosystem abstraction level.
      </p>
      <p>
        As we are diving into architectural styles and patterns in EAI we can witness all types and
        forms of coupling available, some being very much wanted, others implicit and manageable and
        some that might be considered undesirable, deriving from antipatterns. Let’s take a moment
        here to classify them:
      </p>
      <h3>Types of coupling</h3>
      <p>
        While there are various types of coupling, we discuss them on different abstraction levels.
        Some may be seen in the fine details of designs, others on a much broader scale. We can
        clearly differentiate between two distinct groups of coupling types based on where they
        derive from:
      </p>
      <ul>
        <li>
          Architectural (static) coupling - describes dependencies that are directly deriving from
          the design in place.
        </li>
        <ul>
          <li>
            Data format and type - deriving from contracts between modules and applications where
            data models are described in conjunction with respective formats,
          </li>
          <li>
            Semantic - the generalized understanding and meaning of transferred data, both business
            and metadata, on the level of users, business processes, purpose and usage,
          </li>
          <li>
            Interaction - is the communication done in the synchronous or asynchronous fashion,
          </li>
          <li>
            Conversation - the specifics of how the communication happens (e.g. pagination, caching,
            retry policies, technical and business error handling),
          </li>
        </ul>
        <li>
          Operational (dynamic) coupling - describes dependencies that result from operating the
          systems and applications, and the behavior patterns that come with how the users use them.
        </li>
        <ul>
          <li>
            Temporal - the sequence of events, how the logic is executed, whether or not there are
            race conditions, what is the processing time, are there other processes dependent on
            another process being finished (might lead to pathological coupling),
          </li>
          <li>
            Interaction - extending the static coupling, this relates to the implementation of the
            interaction using, or being forced to use a specific protocol and how the system is
            dependent on it,
          </li>
          <li>
            Technology - the inner workings of a specific technology used to implement the system,
            the way it works, how it interacts with the underlying operating system and
            infrastructure,
          </li>
          <li>
            Location - the geographic location of where the systems are deployed, where are they
            available, what is the network configuration between them,
          </li>
        </ul>
      </ul>
      <h3>Coupling direction</h3>
      <p>
        While discussing coupling it is important to also understand the direction of coupling,
        meaning which component is the one providing a dependency, and which one is consuming it.
        This can be later used to provide two specific measures:
      </p>
      <ul>
        <li>
          Efferent coupling - a measure of how many components the analyzed component is dependent
          on,
        </li>
        <li>
          Afferent - a measure of how many components are dependent on the analyzed component,
        </li>
      </ul>
      <p>
        Measuring efferent and afferent coupling in the ecosystem is a useful tool to spot potential
        bottlenecks, components that might need to be split functionally or operated with more care,
        e.g. by applying automated scaling.
      </p>
      <h3>Coupling Strength</h3>
      <p>
        One of the three main characteristics of coupling is its strength. Over the years we were
        accustomed to having somewhat meaningless terms like “decoupled” or “loosely coupled”, which
        could have been interpreted in various ways depending on the context of the conversation or
        the individual interpreting them. That’s why a more precise classification is required.
        Strength in this case would be classified as one of the following ordered from weakest to
        strongest:
      </p>
      <ul>
        <li>
          Contract - Components are contract-coupled if they rely on communicating through a data
          model that is integration specific. The contract outlines the terms and conditions of
          collaboration and is usually defined as a communication protocol between two systems.
        </li>
        <li>
          Model - Happens when the data model related to a business domain and its data model is
          shared by multiple applications/systems, e.g. internal data model either used for
          communication or reused in the processes of more than one system.
        </li>
        <li>
          Functional - Two modules are functionally coupled if their functionalities are
          interrelated, which means that if the business requirements change and so does
          functionality in an application, the coupled application will most likely be affected,
        </li>
        <ul>
          <li>
            temporal (sequential) coupling - when logic needs to be executed in a specific order
            (may be also known as pathological coupling),
          </li>
          <li>
            transactional coupling - when several operations have to be carried out as a single unit
            of work, thus a transaction,
          </li>
          <li>
            symmetric coupling - happens when two or more applications implement the same
            functionality independently, giving the same goal by means of different implementations.
            When the requirements for the shared behaviour change, all applications need to
            reimplement the logic at the same time at risk of introducing bugs (e.g. mismatch in
            data cohesion),
          </li>
        </ul>
        <li>
          Intrusive - Instead of communicating through public interfaces, the client communicates
          through, and thus depends on, the implementation details of the provider,
        </li>
      </ul>
      <p>
        When it comes to EAI, the usual and wanted coupling strength is contract coupling which is
        supported by the capability of integration tools and platforms to provide abstraction. Model
        coupling may at times occur if the data models are not managed properly and leak through the
        abstraction layers to contracts. Moving on to functional coupling, none of those types occur
        solely in the integration layers, as they derive from the business process logic, usually
        (hopefully) outside of the integration platform, which in turn only facilitates these
        coupling forms.
      </p>
      <h3>Coupling distance</h3>
      <p>
        While it is possible to create monolithic software that is just a single block of statements
        with a lot of ifs, that is not the reality we are currently facing. Over time various types
        of encapsulation were introduced to provide boundaries. In essence, coupling distance is
        bound to how closely related are the dependencies. We can distinguish distance levels
        against which we can measure coupling:
      </p>
      <ul>
        <li>Statements,</li>
        <li>Methods,</li>
        <li>Objects,</li>
        <li>Namespace or package,</li>
        <li>Libraries,</li>
        <li>Services,</li>
        <li>Systems or applications,</li>
      </ul>
      <p>There are two key, linear qualities we should track related to this:</p>
      <ul>
        <li>
          Cost of change over distance - the greater the distance between components that have to
          change together, the higher the effort, and with that the cost of the shared change, e.g.
          changing a small statement in a method is far less costly than changing two systems that
          are coupled with each other with a contract coupling influenced by new requirements and
          changes to the data models. The cost is usually proportionate to the distance,
        </li>
        <li>
          Lifecycle coupling - all software is involved in some sort of a lifecycle that may have
          multiple stages, ranging from requirements gathering, through design, implementation,
          testing, deployment and finally maintenance and updates. The lifecycle coupling is usually
          inversely proportional to the distance,
        </li>
      </ul>
      <h3>Coupling volatility</h3>
      <p>
        The last characteristic that is crucial in understanding coupling, and especially the risks
        involved with certain tighter coupling instances, is volatility. This is a bit of a compound
        characteristic of two particular qualities:
      </p>
      <ul>
        <li>
          Frequency of changes - how often a coupled component changes within the software
          development lifecycle due to new features, floating requirements, bugs and fixes,
          customization, etc.,
        </li>
        <li>
          Impact - how much of a ripple effect a change is going to cause, and by that any cascading
          additional changes that will influence other components and teams working on them whether
          by chance or deliberately,
        </li>
      </ul>
      <p>
        Volatility reshapes the focus of investigating coupling to discuss its influence on the
        software in time, as well as how this software may and will evolve over time. Focusing on
        volatility invokes a discussion about whether or not certain instances of very tight
        coupling are acceptable, or can we allow ourselves to cut-corners and simplify design
        (introducing more coupling), where for example a solution might be only temporary.
      </p>
      <h2>Conclusions</h2>
      <p>
        Coupling is a multifaceted concept that is quite difficult to grasp fully, and it is an
        intrinsic part of any IT system. While it is impossible to completely eliminate coupling,
        understanding its various types and degrees is crucial for designing and maintaining
        efficient, adaptable, and maintainable systems. By carefully considering factors such as
        architectural characteristics, data models and contracts, interaction between components,
        operational considerations, business logic, as well as coupling strength, distance, and
        volatility, architects and developers can make informed decisions to minimize unnecessary
        dependencies and promote system resilience.
      </p>
    </article>
  </ArticleLayout>
</template>

<script setup lang="ts"></script>

<style scoped></style>
