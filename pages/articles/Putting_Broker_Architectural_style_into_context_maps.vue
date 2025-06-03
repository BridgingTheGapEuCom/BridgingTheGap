<template>
  <ArticleLayout>
    <article>
      <h2>Lost between the APIs?</h2>
      <p>
        Ever felt like integrating with various systems is a bit like trying to deliver mail without
        any idea how postal codes work? One mistake and you're overrun by chaos, bombarded by
        complaints from unhappy customers. In our hyper-connected era, where applications must
        collaborate seamlessly, this integration battleground can swiftly become a nightmare. We're
        not merely transferring data; we're managing systems that speak different protocols, possess
        incompatible data structures, and occasionally exhibit unpredictable behaviors.
      </p>
      <p>
        Fear not! There is a path out of this chaos, an approach to integrations that are not just
        functional, but streamlined, and efficient! In this article we are going to explore the
        overlap of Broker Architectural Style and Domain-Driven Design (DDD). We’ll be looking
        closer at the inner workings of active and passive broker behaviours. With this, we’ll learn
        how to harness the potent concepts of Open Host Services (OHS) and Anti-Corruption Layers
        (ACL). So grab your metaphorical compass and let's navigate this scorched battleground,
        transforming it into a well-mapped, brightly lit expressway.
      </p>
      <h2>Yet another abstraction</h2>
      <p>
        Broker Architecture is an architectural style that introduces a logical abstraction layer by
        creating a new type of a system within an IT ecosystem: the integration platform. You can
        read more about this architectural style in this
        <NuxtLink
          to="/articles/Broker_Architecture"
          aria-current="page"
        >
          article
        </NuxtLink>.
      </p>
      <p class="italic ml-7">
        "Nothing can solve the problem of an abstraction like another abstraction."
      </p>
      <p class="text-right italic ml-10">
        – said Mark Richards and attributed this quote to Neal Ford in one of our conversations
        about solving application integration problems.
      </p>
      <p>This quote derives from a much older quote:</p>
      <p class="italic ml-7">
        "All problems in computer science can be solved by another level of indirection."
      </p>
      <p class="text-right italic ml-10">
        - attributed to David Wheeler by Butler Lampson in the 1993 Turing Award Lecture.
      </p>
      <p>
        These quotes postulate that certain problems are hard to resolve without adding a new level
        of indirection, also often described as an abstraction layer. To add to that, remember
        Tesler's Law? It states that every application has an inherent amount of irreducible
        complexity. The question is, who deals with it? This is exactly where abstraction layers
        come into play, to create a place to move that complexity. In the context of integration,
        this complexity often revolves around communication: different protocols, varying data
        formats, authentication, and so on. All of these, if unmanaged, create heavy degrees of
        coupling on many levels, contributing to a brittle spaghetti architecture. This is where
        Integration Platforms in a Broker architectural style shine. The integration flows within
        such platforms act as mediators, handling protocol mediation, orchestration and data
        transformations. They are absorbing communication complexity and freeing up individual
        systems from a number of dependencies, enabling them to focus on their core business logic.
      </p>
      <p>
        Instead of each system needing to know how to speak every other system's language, they
        simply talk to the broker. The broker then handles the messy details: protocol translation,
        data mapping, authentication, and orchestration. Think of it like having a multilingual
        interpreter at a global summit. Everyone can speak their own language, and the interpreter
        ensures everyone understands each other perfectly. This not only simplifies development but
        also makes the entire ecosystem more flexible and maintainable. By shifting the burden of
        managing connections, API contracts, data access, and credentials to the integration
        platform, we create a less coupled and resilient architecture.
      </p>
      <h2>Domain-Driven Design perspective</h2>
      <p>
        While Domain-Driven Design is not very common in the Enterprise Application Integration
        (EAI), both describe the same thing to an extent, complimenting each other. From this
        perspective we can look a different way at communication complexity and how introducing a
        new abstraction layer in the form of an Integration Platform changes the way business
        systems are used, and later (re)designed and built. Here we will be looking at the use of
        conformist relationships, anti-corruption layers and open-host services, which describe
        interoperability in DDD, with specific behaviour patterns that can be introduced with Broker
        Architecture. We dived into the architectural considerations of those behaviour patterns in
        a separate article and if you are not familiar with them we suggest reading it first.
      </p>
      <h3>Active Broker - The Conformist</h3>
      <p>
        Let’s start with the easiest - active broker behaviour. Imagine a diligent mail carrier who
        goes door-to-door every morning, rain or shine, checking if anyone has mail to send and
        delivering all as needed. That's essentially how an active broker works. It's initiated by a
        scheduler or manually, and diligently polls business systems to see if there's any data to
        process. This means the active broker controls the entire communication, invoking APIs,
        polling databases or FTPs, and managing the whole exchange and its state, including
        translations between the models of all business systems participating in it.
      </p>
      <Putting_Broker_Architectural_style_into_context_maps_Active_Broker_block_diagram />
      <p class="text-center font-bold mt-4">
        Active broker relationships with integrated systems
      </p>
      <Putting_Broker_Architectural_style_into_context_maps_Active_Broker />
      <p class="text-center font-bold mt-4">
        Active broker behavioral diagram
      </p>
      <p>
        In DDD terms, this often leads to what's called a conformist relationship. The business
        systems simply expose their data, and the broker conforms to the exposed interfaces and the
        underlying models. It's a little like the mail carrier accepting whatever letters people
        have, regardless of size, shape, or postage. From this perspective it does not really matter
        if the business systems utilize open-host services or not, as the integration flows are most
        of the times tightly coupled to specific use cases or business processes. From a design
        perspective it will accept any form of communication, which later needs to be implemented
        accordingly. The integration flow is then responsible for all the transformations and
        orchestration between every call it makes.
      </p>
      <p>
        While this simplifies things for the business systems, it has drawbacks. Data is not
        real-time; it's batch-oriented. There's resource inefficiency due to frequent polling and
        empty calls (like the mail carrier checking houses where no one has mail). Due to the tight
        alignment with business processes the integration flows are often not reusable. However,
        this approach can be quite suitable for batch processing.
      </p>
      <h3>Passive Broker - The Conformist Variant</h3>
      <p>
        Now, let's switch to a different scenario. Imagine a post office where people come to drop
        off their mail to be properly processed, tracked and sent out to the right places. That's
        closer to how a passive broker operates. It's triggered by external systems, responding to
        requests. In the "Conformist" variant, each of the passive broker's API is tailored to the
        needs of a specific client. It's like the post office having different windows, per
        customer, each with its own specific requirements.
      </p>
      <Putting_Broker_Architectural_style_into_context_maps_Passive_Broker_Conformist_block_diagram />
      <p class="text-center font-bold mt-4">
        Passive conformist broker relationships with integrated systems
      </p>
      <Putting_Broker_Architectural_style_into_context_maps_Passive_Broker />
      <p class="text-center font-bold mt-4">
        Passive broker behavioral diagram
      </p>
      <p>
        Consumer systems actively invoke the broker's APIs, initiating the communication. This
        allows for real-time (event-based) or on-demand communication and is more
        resource-efficient, as the broker only processes invoked calls. However, it increases
        complexity for consumer systems, which need to build logic to consume the API. There's also
        a potential for tight coupling between the broker and specific clients. With the broker
        conforming to the consumer system model this has a lower impact on the contract resilience,
        then it would have in a typical point-to-point communication (e.g. integrations between
        microservices within a SaaS application). Any changes to the consumer system model will
        result in changes in the integration flow API and internal logic. Looking on the provider
        side, the integration flow also conforms to the APIs of the provider systems and will be
        impacted by the changes in them. This makes the integration flow an anti-corruption layer
        for the consumer system, safeguarding it from impact of changes in the upstream systems.
        This makes it suitable for close knit ecosystems, with a limited number of business systems,
        where there is low reusability due to the specific nature of the business processes.
      </p>
      <h3>Passive Broker - Open-Host Service Variant</h3>
      <p>
        Now, let's take the post office analogy a step further. Imagine it's part of a larger postal
        network with standardized procedures and interfaces. That's where the Open-Host Service
        (OHS) variant comes in. An OHS is a stable, well-defined, standardized API that acts as a
        facade, shielding internal implementation details. It's like having standard postal forms
        and procedures, with an individual post office as the interface to the network. This
        standardization is common, repeatable and somewhat generalized. We’re no longer dealing with
        individual windows for each customer. We provide a single, standardized service for all of
        them and treat their mail identically within the boundaries for that specific group.
      </p>
      <Putting_Broker_Architectural_style_into_context_maps_Passive_Broker_OHS_block_diagram />
      <p>
        This promotes reusability, contract stability, and allows the upstream system to evolve
        without disrupting downstream systems. However, having an OHS comes with a risk that might
        become a benefit or a significant problem. Now all the downstream systems consume a
        standardized API, and the risk grows with the number of downstream systems. Since we now
        have a standardized API, this makes its contract more brittle, on the contrary to the
        conformist variant, where we have a contract per use case. This means that introducing a
        change on the OHS forces all downstream systems to adjust. Unless they have an ACL, instead
        of conforming to the provided interface.
      </p>
      <p>
        Speaking of ACLs, let’s take another look inside our post office. Let’s consider the
        following: what if the postal network internal procedures are still a bit messy, and we need
        to make sure that changes within those procedures will not affect the day-to-day operations
        of the post office? That's where the ACL within the integration platform comes in. The
        integration flow in this case serves as an abstraction layer that translates those internal
        procedures, services provided by upstream systems into local procedures and through that
        also to the OHS model. It protects the consumer of those services, here being the
        integration flow and downstream systems, from being "corrupted" by the volatility of
        provider systems, ensuring increased autonomy, reduced coupling, and insulation from
        changes. The synergy of using OHS and ACL together balances the needs of providers and
        consumers, making for more efficient and resilient integrations. This approach works best in
        larger ecosystems, with business processes that have overlapping parts, where reusability
        would be a driving factor.
      </p>
      <h2>Conclusions</h2>
      <p>
        Let's recap our journey through the maze of stacks of various letters and packages. We
        started by acknowledging the inherent complexity of integrating systems, as highlighted by
        Tesler's Law. With that we explored how Integration Platforms, being another abstraction
        layer, built in a Broker architectural style act as mediators, absorbing communication
        complexity and freeing up business systems. We explored through analyzing active and passive
        behaviour in brokers how understanding and proper use of abstraction layers in form of OHSs
        and ACLs, as well as Conformist relationships can influence interoperability and what
        potential problems it may bring on the way to bring efficiency to integration flows.
      </p>
      <p>
        By understanding and applying these concepts, you can transform your integration landscape
        from a chaotic jungle into a well-orchestrated flow of letters and packages, where systems
        communicate harmoniously and data flows seamlessly.
      </p>
    </article>
  </ArticleLayout>
</template>

<script setup lang="ts">
import Putting_Broker_Architectural_style_into_context_maps_Active_Broker_block_diagram from '~/components/articles/Putting_Broker_Architectural_style_into_context_maps/Putting_Broker_Architectural_style_into_context_maps_Active_Broker_block_diagram.vue'
import Putting_Broker_Architectural_style_into_context_maps_Passive_Broker from '~/components/articles/Putting_Broker_Architectural_style_into_context_maps/Putting_Broker_Architectural_style_into_context_maps_Passive_Broker.vue'
import Putting_Broker_Architectural_style_into_context_maps_Passive_Broker_Conformist_block_diagram from '~/components/articles/Putting_Broker_Architectural_style_into_context_maps/Putting_Broker_Architectural_style_into_context_maps_Passive_Broker_Conformist_block_diagram.vue'
import Putting_Broker_Architectural_style_into_context_maps_Active_Broker from '~/components/articles/Putting_Broker_Architectural_style_into_context_maps/Putting_Broker_Architectural_style_into_context_maps_Active_Broker.vue'
import Putting_Broker_Architectural_style_into_context_maps_Passive_Broker_OHS_block_diagram from '~/components/articles/Putting_Broker_Architectural_style_into_context_maps/Putting_Broker_Architectural_style_into_context_maps_Passive_Broker_OHS_block_diagram.vue'
</script>

<style scoped></style>
