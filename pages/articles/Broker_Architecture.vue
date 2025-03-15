<template>
  <ArticleLayout>
    <article>
      <h2>When complexity calls</h2>
      <p>
        There comes a certain point in an ecosystem, when further expanding and later operating and
        maintaining interoperability becomes a nightmare of complexity for each system involved in
        the communication. All of this is due to complexity of not only the specific business domain
        which dictates functional requirements for each of those systems but also due to the
        communication overhead, that forces the systems to manage connections, various API
        contracts, data access logic, or credentials. All of this builds up to a hefty load of work,
        shifting the balance of time consumed on operations and development, especially if the
        system is developed and maintained by the same team. This can further lead to bottlenecks in
        project development or complete stop in further growth as the team will be busy with solving
        production issues. This is where we can find help by understanding a law postulated in the
        mid-1980s.
      </p>
      <p>
        “<span class="italic">Every application must have an inherent amount of irreducible complexity. The only
          question is who will have to deal with it.</span>”
      </p>
      <ul class="text-right">
        <span>-&emsp;Law of conversion of complexity (Tesler’s law)</span>
      </ul>
      <p class="mt-4">
        While Larry Tesler was mostly concerned over the interactions between the software and its
        users and that is why his law is mostly known in the UX discipline, there is a very
        important lesson we can learn from it in terms of interoperability as a form of interaction
        between two different systems.
      </p>
      <p>
        We can move most of the communication complexity away from the domain systems. It will not
        be reduced, but managed elsewhere.
      </p>

      <p class="italic">
        “Complexity is not bad. It’s confusion that’s bad. Forget about simplicity; long live
        well-managed complexity.”
      </p>
      <ul class="text-right">
        <span>-&emsp;Don Norman, author of The Design of Everyday Things.</span>
      </ul>
      <h3>Complexity managed by mediation</h3>
      <p>
        If we assume that complexity can only be moved, not reduced, then we can certainly move the
        complexity of communication and reduce it to the bare minimum for all participants. The
        easiest way to do so is to introduce a Broker (a.k.a. a Mediator).
      </p>
      <div class="italic my-4">
        <div>Broker</div>
        <div class="flex-col">
          <div class="flex">
            <div>
              <div class="mr-3">
                1
              </div>
            </div>
            <div>
              <div class="flex">
                <div class="inline-block">
                  <div class="pr-2 font-bold inline-block" />
                  <div class="inline-block font-bold">
                    :&nbsp;
                  </div>
                </div>
                someone who acts as an intermediary [...]
              </div>
            </div>
          </div>
          <div class="flex">
            <div>
              <div class="mr-3">
                2
              </div>
            </div>
            <div>
              <div class="flex">
                <div class="inline-block">
                  <div class="pr-2 font-bold inline-block" />
                  <div class="inline-block font-bold">
                    :&nbsp;
                  </div>
                </div>
                someone who sells or distributes something
              </div>
            </div>
          </div>
        </div>

        <div class="italic my-4">
          <div>Mediator</div>
          <div class="flex">
            <div>
              <div class="mr-3">
                1
              </div>
              <div class="border-l-2 h-[2.5rem] dark:border-gray-400" />
            </div>
            <div>
              <div class="flex">
                <div class="inline-block">
                  <div class="pr-2 font-bold inline-block">
                    a
                  </div>
                  <div class="inline-block font-bold">
                    :&nbsp;
                  </div>
                </div>
                one that mediates
              </div>
              <div>
                <div class="inline-block">
                  <div class="pr-2 font-bold inline-block">
                    especially
                  </div>
                  <div class="inline-block font-bold">
                    :&nbsp;
                  </div>
                </div>
                one that mediates between parties at variance
              </div>
              <div>[...]</div>
            </div>
          </div>
        </div>
      </div>

      <p>
        If we look at those definitions from a perspective of IT ecosystems, an integration broker
        in a Broker Architecture acts as an intermediary between two parties that have differing
        requirements. The key word here is ‘<span class="italic">differing</span>’, as this is where
        the complexity hides. Communication is fairly simple if everyone speaks the same language
        and has the exact same definition of every single word. This translates to applications
        being developed in the same coding languages, having data models, represented by data in a
        specific format like JSON or XML and lastly managing the semantic coupling on the level of
        data. Unfortunately this kind of situation is rarely the case in the modern IT landscape,
        and this is where an integration broker and broker architecture come into play.
      </p>
      <h2>What is Broker Architecture</h2>
      <p>
        Broker Architecture is an ecosystem architectural style that introduces an infrastructural
        component, the integration broker, into the IT ecosystem, that is responsible for handling
        communication complexity, that is:
      </p>
      <ul>
        <li>systems using different communication protocols,</li>
        <li>various contract data models,</li>
        <li>mismatched data formats,</li>
        <li>orchestration, observability, abstraction or extensibility capabilities.</li>
      </ul>
      <p>
        It inherits certain qualities from the previous architectural styles and builds new ones on
        top of those already existing. The use of point-to-point communication now shifts from
        system calling each other to invoking services exposed by the integration broker that
        orchestrates communication. On top of that we gain new capabilities, such as the ability to
        initiate the communication completely externally of the business systems by means of
        schedulers or change data capture mechanisms. Lastly the integration flows in an integration
        broker have a workflow nature that is usually tailored to the business process requirements
        which it needs to support.
      </p>
      <h2>Qualitative Analysis</h2>
      <p>
        As we did with
        <NuxtLink
          to="/articles/From_Point-to-point_to_Spaghetti_Architecture"
          aria-current="page"
        >
          Point-to-point
        </NuxtLink>
        and
        <NuxtLink
          to="/articles/Event-Driven_Architecture_for_IT_ecosystems"
          aria-current="page"
        >
          Event-Driven Architecture
        </NuxtLink>, let’s explore the qualities of Broker Architecture and look into a few pitfalls that can
        be crucial to consider when trying to apply this architectural style. For that we will be
        using a comparison table that was produced through a qualitative analysis of architectural
        styles taking several architectural characteristics into account. If you would like to learn
        more about this analysis or read how we define those characteristics, you can do so by
        reading this
        <NuxtLink
          to="/articles/Qualitative_Analysis_of_Ecosystem_Architectural_Styles"
          aria-current="page"
        >
          article
        </NuxtLink>, where we explain how this comparison was created.
      </p>

      <table class="sm:table hidden my-5">
        <thead>
          <tr>
            <th
              scope="col"
              class="w-20 px-1"
            >
              Architectural Characteristic
            </th>
            <template
              v-for="(key, characteristic) in table"
              :key="`${key}_${characteristic}`"
            >
              <th
                scope="col"
                class="px-1"
              >
                {{ characteristic }}
              </th>
            </template>
          </tr>
        </thead>
        <tbody>
          <template
            v-for="(key, characteristic, i) in table[Object.keys(table)[0]]"
            :key="characteristic"
          >
            <tr>
              <td class="px-1">
                {{ characteristic }}
              </td>
              <td
                v-for="(index, indexName, keyIndex) in table"
                :key="index"
              >
                <div
                  tabindex="0"
                  :aria-label="
                    i < 3 ? `${index[characteristic]} dollars` : `${index[characteristic]} stars`
                  "
                  role="img"
                >
                  <SvgIcon
                    v-for="j of index[characteristic]"
                    :key="j"
                    class="w-3.5 m-0 inline-block"
                    :class="
                      keyIndex === 1 || keyIndex === 3
                        ? 'text-neutral-500 dark:text-neutral-200'
                        : 'text-neutral-300 dark:text-neutral-400'
                    "
                    type="mdi"
                    :path="`${i < 3 ? mdiCurrencyUsd : mdiStar}`"
                  />
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>

      <div class="sm:hidden block my-5">
        <div
          v-for="(_count, characteristicName, index) in table['Point-to-point']"
          :key="characteristicName"
          class="border rounded-md mb-5 mt-1 dark:border-neutral-600"
        >
          <div
            class="border-b font-bold p-1 pl-2 bg-neutral-200 dark:bg-neutral-600 dark:border-neutral-600"
          >
            {{ characteristicName }}
          </div>
          <div>
            <div
              v-for="(key, name, i) in table"
              :key="name"
              class="grid grid-cols-2"
              :class="
                i === 1 || i === 3
                  ? 'text-neutral-600 dark:text-neutral-200'
                  : 'text-neutral-300 dark:text-neutral-600'
              "
            >
              <div class="p-1 pl-2">
                {{ name }}
              </div>
              <div>
                <SvgIcon
                  v-for="j of key[characteristicName]"
                  :key="j"
                  class="w-4 m-0 inline-block"
                  type="mdi"
                  :path="`${index < 3 ? mdiCurrencyUsd : mdiStar}`"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>Cost analysis</h3>
      <p>
        Considering how Broker Architecture changes the landscape in comparison to Point-to-point or
        Event-Driven Architecture, it is clear that the cost overall will be higher in comparison.
        As we stated at the beginning of this article, we are moving complexity away from the domain
        systems, which means, we are moving development and operational cost to an integration
        broker. This comes with a need to hire or retrain developers to have the right skill
        onboard. Next to that, the business systems development team can work protocol agnostic, as
        the integration broker is capable of providing a protocol that is best suited to the
        business system needs and technology used to build it. This limits the sprawl of development
        costs to an extent and lands Broker Architecture at 2<SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        />.
      </p>
      <p>
        Operational costs in Broker Architecture are similar to EDA (3<SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        />), mostly due to the effect of moved complexity. There is the cost of licensing, which can
        influence the overall cost as it will vary between different technology providers and their
        licensing models that depend on several factors (e.g. usage, deployment mode). The
        operational effort on environments and operating the integration broker itself can be
        partially compensated within the technology licenses if an IPaaS technology is chosen.
      </p>
      <p>
        Architectural Change Cost is a bit higher for the Broker Architecture (3<SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        />) due to the fact that it is a completely separate system with a distinct workflow nature.
        All integration flows are dedicated, which means they are more coupled to the business
        systems and do not provide as much abstraction as is possible. This means that while changes
        might be entirely contained within the integration broker, they will impact the whole
        integration flow. The changed business system needs to be deployed with it as a single
        deployment unit.
      </p>
      <h3>Architectural and design time analysis</h3>
      <p>
        Moving on to architectural and design time qualities of Broker Architecture, we can see from
        the qualitative analysis that it is a well-rounded architecture having average scores in all
        characteristics in this category. Let’s start with the one that scores the lowest -
        composability. The reason why it is scored with only 2<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        is because of the integration broker workflow nature. The reusability in each integration
        flow is mostly limited to code, e.g. reusable wrappers, connectors, perhaps some
        standardized mapping functions or transformations, but it is rarely feasible to create
        reusable services, hence it is harder to use business systems and integration flows as
        composable building blocks of the ecosystem. Removability, as part of composability, is a
        bit easier to achieve, given that all changes are encapsulated in the integration platform,
        but it has an operational impact on all integration flows and systems related to the system
        that is replaced, triggering full regression tests with each change. It is the downside of
        moving the communication complexity from those systems into the integration broker.
      </p>
      <p>
        Moving on to simplicity (3<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />), it is quite obvious that the landscape overall became a bit more complex, giving Broker
        Architecture a one point lower score than it was with EDA. It is worth noting that this
        complexity is only superficial, as introducing a new system does not have to translate
        directly to higher complexity, as it is usually the number of interactions (operational
        coupling) that is the better measure. The key is the scale as Broker architecture will be
        used in more complex environments than EDA and Point-to-point, so it aligns with the growth
        of the business complexity partially moved to the integration broker. The simplicity of this
        architectural style supports time to market very well, as usually the integration flows are
        easier to develop with the right technology and a dedicated team of developers that
        specialize in such tasks.
      </p>
      <p>
        The element that sets this architectural style apart from the previous styles is the
        capability to provide abstraction (3<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />) of business systems contracts, data models, data access logic, credentials, etc., which,
        if used properly, can help lessen the workload on development teams, so they can focus on
        functional requirements and not try to solve communication riddles. This is directly tied to
        contract resilience (3<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />) that is a lot easier to achieve as a lot of the changes to contracts with downstream
        systems can be encapsulated within the broker and will not impact the upstream applications.
        Lastly, with the integration brokers enabling protocol agnostic communication, there is more
        support for extensibility (3<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />), as it is a lot easier to add new services and systems to the ecosystem if there is less
        adjustment needed from them to be integrated.
      </p>
      <h3>Operational analysis</h3>
      <p>
        Let’s now take a look at the operational characteristics of the Broker architecture, where
        things are a little more varied. Starting with testability (3<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />), we can see that it is lower proportionally to simplicity. Introducing a new system that
        facilitates communication makes testing a bit more difficult. Yet, due to the fact that all
        orchestration, transformation and data access logic is contained within a single integration
        flow per use case, the effort increase needed to test communication end-to-end is not that
        significant, which means that there is a fairly low impact on time to market.
      </p>
      <p>
        Moving on to characteristics describing how this architectural style operates under load of
        messages it will be less performant than Point-to-point or EDA, due to the fact that we are
        introducing latency in a form of an integration broker, which has its logic to execute, the
        overall performance (3<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />) of the ecosystem will be impacted, which is a trade-off compared to the previous
        architectural styles. How severe this impact will differ between implementations is based on
        a number of factors, like, but not limited to:
      </p>
      <ul>
        <li>Deployment mode - cloud vs on premise,</li>
        <li>Runtime operations - self-hosted runtime vs managed services,</li>
        <li>
          Chosen technology - is it chosen to facilitate the right needs, like on-demand, event
          communication or batch transfers,
        </li>
        <li>
          Integration flow complexity - simple p2p flows, simple orchestration or complex BPM like
          orchestrations (which we do not advise),
        </li>
      </ul>
      <p>
        The end result might noticeably differ from a qualitative analysis result as some of the
        factors may be improved in various ways. Which leads us to a very similar situation with
        scalability (4<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />), as it will also be dependent on similar factors. Luckily since most modern integration
        brokers are built in a microservices architecture or as serverless functions, they have
        robust scalability features, including automatic horizontal scaling if needed. This,
        combined with good load balancing capabilities, enables the integration flows to be
        separately scalable, providing availability that easily matches requirements of all systems
        involved in the communication.
      </p>
      <p>
        Looking further into operational characteristics we find observability (3<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />) which does not really differ from EDA in regards to score, but with Broker Architecture
        it will provide a completely different set of observable data and metadata. Since nearly all
        data is supposed to pass through the integration broker it is a great place to gather
        intelligence as to where data is used, as well as how often it is requested or distributed,
        and what is the performance of business systems in terms of interoperability. The only
        downside is that since each integration flow is a dedicated workflow, that metadata per
        system will be distributed among many flows and needs to be aggregated and classified before
        it can be used. Tying it to auditability (4<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />), when observability is properly managed, the integration broker becomes a valuable
        source of information about the ecosystem and often a source of truth on general IT
        operations and the consumption of data. These are very important aspects when there is a
        need for proof for root cause analysis (RCA) or audits. If combined with managed
        observability from business systems, aggregated to a single logging and monitoring, or an
        analytics platform, it can give a very wide overview of all processes.
      </p>
      <p>
        Lastly we have security (4<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />), which is scored considerably higher in the qualitative analysis. The sole fact that a
        mediator is used, limiting the access to other systems from any business application, is a
        big step towards securing the ecosystem. If a system and its data are compromised, that
        limits the access to that particular system, without giving any footholds to other systems
        that are bound with the breached one by communications. Combined with observability and
        real-time traffic and metadata analytics, Broker Architecture can enable anomaly detection,
        helping to automate and boost the speed of reaction to potential security breaches. If a
        breach is identified, the compromised system can be isolated swiftly by stopping specific
        integration flows that are inbound or outbound to that system, further limiting the damage.
      </p>
      <h2>Conclusions</h2>
      <p>
        Tesler's Law highlights the inevitable presence of complexity in any software system. Broker
        Architecture offers a pragmatic approach to managing this complexity by strategically
        shifting it away from individual applications and towards a dedicated integration layer. By
        centralizing communication logic, data transformation, and protocol handling within the
        broker, this approach reduces the cognitive load on application developers and simplifies
        the development and maintenance of individual systems. This not only enhances developer
        productivity but also improves business systems maintainability, reduces the risk of errors,
        and ultimately enables organizations to adapt more effectively to the ever-changing demands
        of the modern business landscape. While the introduction of a broker introduces a new layer
        of complexity, it is a managed complexity, allowing for better control, observability, and
        scalability of the overall system.
      </p>
    </article>
  </ArticleLayout>
</template>

<script setup lang="ts">
import { mdiCurrencyUsd, mdiStar } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'

const table = {
  'Point-to-point': {
    'Development Cost': 1,
    'Operational Cost': 1,
    'Architectural Changes Cost': 1,
    Abstraction: 1,
    'Contract Resilience': 1,
    Simplicity: 5,
    Composability: 1,
    Extensibility: 1,
    Testability: 5,
    Scalability: 2,
    Performance: 4,
    Security: 3,
    Observability: 2,
    Auditability: 2
  },
  'Spaghetti Architecture': {
    'Development Cost': 1,
    'Operational Cost': 5,
    'Architectural Changes Cost': 4,
    Abstraction: 1,
    'Contract Resilience': 1,
    Simplicity: 1,
    Composability: 1,
    Extensibility: 1,
    Testability: 1,
    Scalability: 2,
    Performance: 3,
    Security: 1,
    Observability: 1,
    Auditability: 1
  },
  'Event-Driven Architecture': {
    'Development Cost': 2,
    'Operational Cost': 3,
    'Architectural Changes Cost': 2,
    Abstraction: 2,
    'Contract Resilience': 2,
    Simplicity: 4,
    Composability: 3,
    Extensibility: 2,
    Testability: 4,
    Scalability: 4,
    Performance: 5,
    Security: 2,
    Observability: 3,
    Auditability: 2
  },
  'Broker (Mediator topology)': {
    'Development Cost': 2,
    'Operational Cost': 3,
    'Architectural Changes Cost': 3,
    Abstraction: 3,
    'Contract Resilience': 3,
    Simplicity: 3,
    Composability: 2,
    Extensibility: 3,
    Testability: 3,
    Scalability: 4,
    Performance: 3,
    Security: 4,
    Observability: 3,
    Auditability: 4
  },
  'API-led Architecture': {
    'Development Cost': 3,
    'Operational Cost': 4,
    'Architectural Changes Cost': 2,
    Abstraction: 5,
    'Contract Resilience': 4,
    Simplicity: 3,
    Composability: 5,
    Extensibility: 4,
    Testability: 2,
    Scalability: 5,
    Performance: 2,
    Security: 5,
    Observability: 5,
    Auditability: 5
  }
}
</script>

<style scoped>
table {
  @apply bg-transparent;

  font-size: 0.7rem;

  thead {
    tr {
      th:nth-child(1),
      th:nth-child(2),
      th:nth-child(4),
      th:nth-child(6) {
        @apply bg-neutral-50 dark:bg-neutral-950;
      }
    }
  }

  tbody {
    tr {
      td:nth-child(3) {
        @apply bg-neutral-100 dark:bg-neutral-900;
      }

      td:nth-child(5) {
        @apply bg-neutral-100 dark:bg-neutral-900;
      }
    }
  }

  tr:nth-child(3) {
    @apply dark:border-neutral-500;
    border-bottom: 2px solid;
  }

  tr:first-child {
    @apply dark:border-neutral-500;
    border-top: 2px solid;
  }

  tr {
    @apply border-b dark:border-neutral-500;

    th {
      @apply py-2 text-left border-t-2 border-black dark:border-neutral-500 bg-neutral-200 dark:bg-neutral-700;
      vertical-align: top;
    }

    td {
      @apply sm:text-nowrap text-wrap py-1;

      min-width: 5.4rem;
    }

    td:nth-child(n + 2) {
      white-space: nowrap;

      svg {
        vertical-align: middle;
      }
    }
  }
}
</style>
