<template>
  <ArticleLayout>
    <article>
      <h2>Complexity finds us again</h2>
      <p>
        In the intricate landscape of modern enterprise systems, the challenge of integrating
        diverse applications and data sources is a constant. Often, these systems evolve
        independently, leading to a complex web of interactions that can be difficult to manage and
        maintain. We can address the technical challenges of communication with proper integration
        patterns, good practices and architectural styles. Unfortunately there are aspects of
        communication, like understanding data, business behaviour and language in various contexts,
        or mapping out dependencies, that also need to be addressed. This is where the purely
        technical approach fails.
      </p>
      <h2>Bridging Bounded Contexts</h2>
      <p>
        To navigate this complexity effectively, we can turn to Domain-Driven Design (DDD), which
        offers a powerful concept: "Bounded Contexts". They represent distinct areas of a business
        domain, each with its own unique model and "ubiquitous language"

        <button
          class="inline-flex items-center navigation-button justify-end text-sm text-black hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:border-gray-600"
          aria-label="Annotation"
          type="button"
          @click="showAnnotation = true"
        >
          <SvgIcon
            class="text-neutral-950 dark:text-neutral-50 w-4 m-0 inline-block cursor-pointer"
            type="mdi"
            :path="mdiMessageAlert"
            @click="showAnnotation = true"
          />
        </button>
        . This means that the meaning of a particular term or concept can vary depending on the
        specific bounded context in which it's used. This in turn creates a need for maintaining
        clear boundaries between these contexts as a crucial part of managing complexity and
        ensuring that each part of the (eco)system remains coherent.
      </p>
      <p>
        However, the existence of these distinct bounded contexts naturally leads to a need for
        integration. Business processes often span multiple contexts, requiring data and services to
        be shared and coordinated. This is where Enterprise Application Integration (EAI) comes into
        play. Here, we’d like to dive in and explore how DDD and EAI intersect to facilitate
        communication between bounded contexts.
      </p>
      <div
        v-if="showAnnotation"
        class="relative z-10 mb-4"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="fixed inset-0 bg-gray-500/75 transition-opacity"
          aria-hidden="true"
        />

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <div
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    As we dive into this article, we’re clashing two different jargons, ubiquitous
                    languages of DDD and EAI. For a side by side comparison and definitions, see the
                    Glossary section at the end of this article.
                  </div>
                </div>
              </div>
              <div
                class="bg-neutral-50 dark:bg-neutral-900 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
              >
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-black px-3 py-2 text-sm font-semibold text-neutral-900 dark:text-neutral-50 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  @click="showAnnotation = false"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="text-neutral-600 dark:text-neutral-400 text-sm">
        <SvgIcon
          class="text-neutral-950 dark:text-neutral-50 w-4 m-0 inline-block"
          type="mdi"
          :path="mdiMessageAlert"
        />
        As we dive into this article, we’re clashing two different jargons, ubiquitous languages of
        DDD and EAI. For a side by side comparison and definitions, see the Glossary section at the
        end of this article.
      </p>
      <h2>Understanding Bounded Contexts</h2>
      <p>
        The importance of bounded contexts lies in their ability to manage complexity. By clearly
        defining boundaries, we prevent the mixing and confusion of concepts from different parts of
        the business.
      </p>
      <p>
        For example, a "customer" in the sales context might have different attributes and behaviors
        than a "customer" in the support context. Within the sales context, "customer" might refer
        to a potential buyer with information like lead source and purchase history, while in the
        support context, "customer" might refer to an existing user with details on service tickets
        and support interactions.
      </p>
      <h3>Clear boundaries</h3>
      <p>
        Maintaining these clear boundaries and distinct models within each context is crucial. It
        ensures that each part of the (eco)system remains coherent and focused on its specific
        purpose. The ubiquitous language within a bounded context is vital for effective
        communication among domain experts and developers. It fosters a shared understanding and
        reduces ambiguity. However, it's essential to recognize that the ubiquitous language can
        differ between contexts. What one term means in one context may have a different meaning or
        be entirely absent in another.
      </p>
      <p>
        While bounded contexts provide clarity and manage complexity, they also necessitate
        mechanisms for integration. As business processes often span multiple contexts, requiring
        data and services to be shared and coordinated. This leads us to the need for effective
        integration strategies. Essentially, bounded contexts are like specialized departments
        within a company; they each have their area of expertise, but they must collaborate to
        achieve the company's overall goals.
      </p>
      <h2>The Customer-Supplier Relationship in EAI</h2>
      <p>
        In the context of Enterprise Application Integration (EAI) and bridging bounded contexts,
        the "customer-supplier" relationship is a fundamental pattern. While there are other types
        of relationships, like partnership, or shared kernel, they do not really exist on the
        ecosystem layer, as they occur on a smaller scale. That means they usually are present in
        systems, something designed and developed in a closer knit environment (e.g. dev teams of
        the same company, or even the same development team). The situation we face on an ecosystem
        level is that the systems are built not only by completely different teams, but quite often
        also by different companies (e.g. SaaS solutions, custom software made by consulting
        companies). Most of the time they do not necessarily share the exact same purpose. Think of
        service providers, they usually aim for more generic service, and it is only our business
        process that provides context and defines which options/parameters are used. If we’d analyze
        the relationships between various applications in the ecosystem architecture, we’d see that
        the customer-supplier relationship is omnipresent.
      </p>
      <p>
        At the heart of this pattern lies the distinction between "upstream" (supplier) and
        "downstream" (customer) systems. The upstream system is the one that provides services,
        data, or functionality. Think of it as the source of truth or the system that owns a
        particular piece of information. That leaves the downstream system to be the one that
        consumes or utilizes these services or data. It relies on the upstream system to fulfill its
        needs.
      </p>
      <Bridging_Worlds_EAI_and_DDD_for_seamless_interoperability_Relationship />
      <p class="text-center font-bold mt-4">
        Consumer-Supplier relationship in DDD
      </p>
      <p>
        In EAI terminology, these concepts often translate to "provider" and "consumer." The
        provider system exposes an interface or API that other systems can use, while the consumer
        system integrates with that interface to obtain the necessary resources or use a specific
        service, so consumes the interface. This relationship isn't merely technical; it often
        reflects real-world business relationships and power dynamics. The upstream system, as the
        provider, may have more control over the data format and service availability. The
        downstream system, as the consumer, must adapt to the provider's offerings.
      </p>
      <p>
        For example, consider an e-commerce platform that exposes an API for new orders. A
        fulfillment system—responsible for processing and delivering those orders—integrates with
        this API to retrieve order data and initiate downstream logistics processes. In this case,
        the e-commerce platform acts as the upstream system (supplier), owning the order data and
        defining the integration contract. The fulfillment system is the downstream system
        (customer), consuming that contract.
      </p>
      <p>
        But is that all that can be said about the customer-supplier relationship? Certainly not!
        Within this there are distinct behaviours that have further implications on how systems
        interoperate.
      </p>
      <h3>The Conformist Relationship</h3>
      <p>
        In the case of integrating bounded contexts, the "Conformist" relationship represents a
        specific approach to how a downstream system interacts with an upstream system. In this
        pattern, the downstream system chooses to align its own internal model with that of the
        upstream system. Essentially, the downstream system conforms to the data structures, service
        interfaces, and behaviour provided by the upstream system without significant transformation
        or adaptation.
      </p>
      <Bridging_Worlds_EAI_and_DDD_for_seamless_interoperability_Conformist />
      <p class="text-center font-bold mt-4">
        Conformist relationship in DDD
      </p>
      <p>
        This means that the downstream system directly uses the data and services as they are
        offered by the upstream system. If the upstream system provides data in a specific format or
        through a particular API, the downstream system adopts that format and API without
        introducing an intermediary layer to translate or modify it. This approach can significantly
        reduce the development effort required for the downstream system, as it eliminates the need
        for complex mapping or transformation logic.
      </p>
      <p>
        However, the Conformist relationship comes with certain implications. By conforming to the
        upstream system's model, the downstream system becomes tightly coupled to it. Any changes to
        the upstream system's data structures or APIs may require corresponding changes in the
        downstream system. This introduces significant risks in highly volatile (eco)systems and, as
        the conformist approach offers close to non protective mechanisms, can lead additional
        problems:
      </p>
      <ul>
        <li>
          High maintenance overhead - Each change upstream cascades downstream, causing continuous
          integration and testing efforts.
        </li>
        <li>
          Reduced autonomy - Downstream teams lose control over their internal domain model and
          become reactive, forced into constant adjustment to upstream changes.
        </li>
        <li>
          Increased risk of misalignment - Frequent changes increase chances for integration issues,
          misunderstandings of changed data semantics, or misaligned business rules.
        </li>
      </ul>
      <p>
        Despite these potential drawbacks, the Conformist relationship can be a suitable choice in
        certain scenarios. For example, when integrating with a well-established industry standard
        API or a legacy system that is unlikely to change, conforming to its model may be the most
        practical and efficient approach. It can also be beneficial when the downstream system has
        limited resources or a tight deadline, as it allows for faster integration.
      </p>
      <h3>Open-Host Service (OHS)</h3>
      <p>
        As we mention an industry standard, this is a good chance to introduce the "Open-Host
        Service" (OHS) relationship, which is another crucial concept in integrating bounded
        contexts. In this relationship, the upstream system (provider) creates a stable,
        well-defined interface, often referred to as a "published language," that acts as a facade.
        This interface shields the internal implementation details of the upstream system, providing
        a consistent and predictable, so standardized, way for downstream systems to interact with
        it.
      </p>
      <Bridging_Worlds_EAI_and_DDD_for_seamless_interoperability_OHS />
      <p class="text-center font-bold mt-4">
        Open-Host Service relationship in DDD
      </p>
      <p>
        Essentially, an OHS acts as an abstraction layer, offering a standardized set of services
        and data formats, abstracting the internal structure and logic. This allows the upstream
        system to evolve without disrupting downstream systems that rely on the OHS interface. By
        loosening the coupling between the internal workings and the external interface, the OHS
        promotes a solution that is more resilient and extendable, making integrations more reusable
        and maintainable.
      </p>
      <p>
        In the context of application integration, the OHS provides a standardized interface,
        typically through clearly defined APIs representing publicly available data and services. By
        establishing a clear contract, OHS defines exactly which services are available and how to
        access them. This stability and predictability facilitate collaboration and integration
        across different teams and systems. Although it is worth noting that sometimes the OHS is
        enforced upon systems by compliance with specific standards well established in an industry,
        standardization like ISO (e.g. ISO 20022) or laws and regulations (e.g. OpenBanking or EU
        PSD2 regulation with its respective country implementations).
      </p>
      <p>
        The key benefit of OHS is that it allows the upstream system (provider) to evolve its
        internal model without breaking downstream integrations. As long as the OHS interface
        remains stable, downstream systems can continue to function even if the upstream system
        undergoes significant changes. This provides flexibility and agility, allowing the upstream
        system to adapt to changing business needs without causing disruption.
      </p>
      <h3>Anti-Corruption Layer (ACL)</h3>
      <p>
        Shifting the perspective to the consumer side, the "Anti-Corruption Layer" (ACL)
        relationship addresses the challenges that arise when a downstream system (consumer) needs
        to integrate with an upstream system whose model or data format is significantly different
        from its own. In this relationship, the downstream system creates an abstraction layer that
        is responsible for translating the upstream system's model into its own internal model.
      </p>
      <Bridging_Worlds_EAI_and_DDD_for_seamless_interoperability_ACL />
      <p class="text-center font-bold mt-4">
        Anti-corruption Layer in DDD
      </p>
      <p>
        The primary purpose of an ACL is to protect the downstream system from being "corrupted" by
        the upstream system's data or model. It acts as a buffer, insulating the downstream system
        from changes or inconsistencies in the upstream system. By creating a translation layer, the
        ACL ensures that the downstream system only deals with data and services that align with its
        own internal logic and structure.
      </p>
      <p>
        In the context of application integration, ACL enables looser coupling between the
        communication and the logic of the downstream system. It allows the downstream system to
        maintain its own domain model and business logic, even when integrating with external
        systems that use very different data models and formats. The downstream system becomes more
        resilient to changes in the upstream system. This means that the impact of frequent, often
        breaking, changes done to the upstream system, will be limited to the ACL.
      </p>
      <p>
        The benefits of ACL include increased autonomy, reduced coupling, and insulation from
        upstream changes. By creating a translation layer, the downstream system can protect its own
        integrity and maintain its own internal consistency. This further contributes to the
        downstream system evolvability. Additionally the ACL reduces the risk of unintended
        consequences when integrating with external systems.
      </p>
      <h2>Having OHS and ACL</h2>
      <p>
        In many complex integration scenarios, both Open-Host Service (OHS) and Anti-Corruption
        Layer (ACL) relationships are used in conjunction. The upstream system can provide an OHS,
        offering a stable and well-defined interface, while the downstream system can use an ACL to
        further adapt the data to its specific needs.
      </p>
      <p>
        This combination provides a flexible integration, balancing the needs of both providers and
        consumers. The OHS ensures that the upstream system can evolve without breaking downstream
        integrations, while the ACL ensures that the downstream system can maintain its own internal
        consistency and autonomy.
      </p>
      <p>
        For example, consider a legacy system that provides data through an OHS. A modern
        application that needs to integrate with this legacy system can use an ACL to translate the
        data from the OHS into its own domain model. This allows the modern application to work with
        the data in a way that makes sense for its own business logic, without being constrained by
        the legacy system's data structures.
      </p>
      <p>
        In complex integration scenarios, especially those involving integration platforms, using
        both, or even multiple, OHS and ACL can significantly improve the overall architecture and
        maintainability of the (eco)system. It allows for a clear separation of concerns, promotes
        loose coupling, and provides flexibility for both providers and consumers.
      </p>
      <h2>Glossary</h2>
      <p>
        As you have probably noticed by now, the language used in Domain-Driven Design differs from
        the one used by us to describe application integration. To make life a little easier here’s
        a cheat sheet of terms in both jargons, or at least their closest related terms:
      </p>
      <table class="sm:table hidden">
        <thead>
          <tr>
            <th>DDD Term</th>
            <th>EAI Term</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, i) of table"
            :key="i"
          >
            <td>{{ row.DDD }}</td>
            <td>{{ row.EAI }}</td>
            <td>{{ row.Description }}</td>
          </tr>
        </tbody>
      </table>
      <div class="sm:hidden block">
        <div
          v-for="(row, i) of table"
          :key="i"
          class="my-3"
        >
          <div><b>DDD Term: </b>{{ row.DDD }}</div>
          <div><b>EAI Term: </b>{{ row.EAI }}</div>
          <div><b>Description: </b>{{ row.Description }}</div>
        </div>
      </div>

      <h2>Conclusions</h2>
      <p>
        Facing complexities of modern integration between various applications like SaaS solutions,
        custom made software and legacy systems, it is important to build an understanding of the
        common pitfalls that we can encounter. The Open-Host Service (OHS) and Anti-Corruption Layer
        (ACL) can be crucial tools for building flexible and maintainable architectures.
      </p>
      <p>
        The combination of OHS and ACL is particularly powerful, especially in complex scenarios. By
        leveraging OHS, providers offer a clear and stable point of interaction, while ACL allows
        consumers to adapt and integrate data without compromising their own integrity. This
        approach promotes resilient ecosystem interactions, enabling systems to evolve independently
        while still effectively communicating and sharing data. In essence, OHS and ACL are not
        merely technical patterns but architectural strategies that facilitate collaboration, reduce
        dependencies, and ensure the long-term viability of integrated systems.
      </p>
    </article>
  </ArticleLayout>
</template>

<script setup lang="ts">
import Bridging_Worlds_EAI_and_DDD_for_seamless_interoperability_Relationship from '~/components/articles/Bridging_Worlds_EAI_and_DDD_for_seamless_interoperability/Bridging_Worlds_EAI_and_DDD_for_seamless_interoperability_Relationship.vue'
import Bridging_Worlds_EAI_and_DDD_for_seamless_interoperability_Conformist from '~/components/articles/Bridging_Worlds_EAI_and_DDD_for_seamless_interoperability/Bridging_Worlds_EAI_and_DDD_for_seamless_interoperability_Conformist.vue'
import Bridging_Worlds_EAI_and_DDD_for_seamless_interoperability_OHS from '~/components/articles/Bridging_Worlds_EAI_and_DDD_for_seamless_interoperability/Bridging_Worlds_EAI_and_DDD_for_seamless_interoperability_OHS.vue'
import Bridging_Worlds_EAI_and_DDD_for_seamless_interoperability_ACL from '~/components/articles/Bridging_Worlds_EAI_and_DDD_for_seamless_interoperability/Bridging_Worlds_EAI_and_DDD_for_seamless_interoperability_ACL.vue'
import { mdiMessageAlert } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'

const showAnnotation = ref(false)

const table = [
  {
    DDD: 'Bounded Context',
    EAI: 'System/Service',
    Description:
      'A distinct area of a business domain with its own unique model and ubiquitous language. In EAI, this often translates to a separate system or service that provides specific functionality or data.'
  },
  {
    DDD: 'Upstream System',
    EAI: 'Provider/producer',
    Description:
      'The system that provides services, data, or functionality to other systems. In EAI, this is the "provider" that exposes an interface or API or produces events.'
  },
  {
    DDD: 'Downstream System',
    EAI: 'Consumer',
    Description:
      'The system that consumes or utilizes services or data from another system. In EAI, this is the "consumer" that integrates with the provider\'s interface or subscribes to events provided by a producer.'
  },
  {
    DDD: 'Ubiquitous Language',
    EAI: 'API Contract',
    Description:
      'The shared understanding of terms and concepts within a bounded context. In EAI, this often translates to the API contract that defines the data structures that are exchanged between systems and the behaviour of the services.'
  },
  {
    DDD: 'Open-Host Service',
    EAI: 'Standardized interface, API, or Service',
    Description:
      'A stable, well-defined interface (published language) created by the upstream system to provide a consistent way for downstream systems to interact. In EAI, this is akin to a well-defined API or service that acts as a facade.'
  },
  {
    DDD: 'Anti-Corruption Layer',
    EAI: 'Abstraction, Transformation or Mapping Layer',
    Description:
      "A layer created by the downstream system to translate the upstream system's model into its own internal model. In EAI, this is a component that handles data transformation and mapping between different system models."
  },
  {
    DDD: 'Conformist',
    EAI: 'Direct Integration',
    Description:
      "A relationship where the downstream system aligns its internal model with the upstream system's model without significant transformation. In EAI, this often means direct integration without an intermediary layer, using the provider's API and data formats as is, e.g. integrating two databases via DB-links."
  },
  {
    DDD: 'Published Language',
    EAI: 'API Specification',
    Description:
      'The stable, well-defined interface that defines how downstream systems can interact with the upstream system in the OHS pattern. In EAI, this is equivalent to the API specification or documentation that outlines the available services, data formats, and protocols. There can be multiple published languages per OHS.'
  },
  {
    DDD: 'Model Translation',
    EAI: 'Data Mapping',
    Description:
      "The process of converting the upstream system's model into the downstream system's model, typically done in an ACL. In EAI, this involves data mapping and transformation between different data formats and structures."
  }
]
</script>

<style scoped>
table {
  @apply bg-transparent w-full mt-4;

  thead {
    tr {
      @apply bg-neutral-50 dark:bg-neutral-950 font-bold;
    }

    th {
      @apply pl-2;
    }
  }

  tr:first-child {
    @apply dark:border-neutral-500;
    border-top: 2px solid;
  }

  tr:nth-child(2n) {
    @apply bg-neutral-50 dark:bg-neutral-900;
  }

  tr {
    @apply border-b dark:border-neutral-500;

    th {
      @apply py-2 text-left border-t-2 border-black dark:border-neutral-500 bg-neutral-200 dark:bg-neutral-700;
      vertical-align: top;
    }

    td {
      @apply text-wrap py-1 pl-2;

      min-width: 5.4rem;
    }
  }
}
</style>
