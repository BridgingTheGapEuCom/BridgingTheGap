<template>
  <ArticleLayout>
    <article>
      <h2>Starting with some basics</h2>
      <p>
        While we’d like to discuss Enterprise Application Integration it is important to start with
        the most basic approach to data exchange and why is it crucial to understand it fully before
        jumping into more complex architectural styles that support ecosystem interoperability.
        Point-to-point as an architectural approach is exactly that. This is the most commonly known
        approach used by all developers and architects. So let’s take the time to explore the
        benefits and pitfalls of this architectural style.
      </p>
      <h2>What is Point-to-point (P2P)?</h2>
      <p>
        To put this simply, Point-to-point should be understood as a system or an application
        directly calling a different systems or applications API understood broadly. It can be a
        JDBC procedure call, an invocation of a REST or SOAP API, etc.. Commonly found in every kind
        of environment, it is impossible to avoid, as it serves as a basis for all communication.
        The lack of a mediator forces all of the aspects of communication upon the business systems.
        Those become responsible for the technical implementation of the communication, its
        security, governance over data and data models, etc..
      </p>
      <h3>Implicit architecture</h3>
      <p>
        Since Point-to-point, as a dominant form of interoperability in an ecosystem
        interoperability focus is mostly common within young, small or not tech driven organizations
        (one could say those with low IT maturity), it is often created as a side effect of lack of
        architectural governance. In essence, it happens by accident, a sheer need to integrate
        applications that were introduced into the ecosystem without interoperability in mind, for
        example: “Ok, so we have this custom application which we built that helps us manage
        assigning staff to specific client projects, but it would be so much easier if we would not
        have to input employee details by hand but get them from our Workday instance!”. That way a
        P2P connection is created with every similar need and the interoperability is not governed
        but driven by at-the-time business needs.
      </p>
      <h3>The road to chaos</h3>
      <p>
        Point-to-point, among other things, has a big pitfall that often, when unmanaged, as
        described above, leads to severe complexity that can even cripple business. This is often
        referred to as Spaghetti Architecture, because of the large quantity of tangled up
        interactions that, when charted out, often look more like a dish of spaghetti, rather than a
        diagram showing actual communication. We take this specific “architecture” as a reference
        point of what we do not want in our ecosystem and to be able to explain how this complexity
        can be resolved by various approaches, architectural styles and patterns.
      </p>
      <img
        src="/articles/From_Point-to-point_to_Spaghetti_Architecture/Spaghetti.webp"
        alt="Abstract 3D rendering of a complex network of interconnected lines and nodes"
      />
      <h2>Qualitative analysis</h2>
      <p>
        Before Point-to-point leads us to complexity that could kill the business, it is worthwhile
        to explore what may be its cause and what other pitfalls may be awaiting us when
        implementing this architectural style. We can avoid some of the pitfalls by understanding
        what are the key architectural characteristics and how they are relevant in this setting.
        For that we will be using a comparison table that was produced through a qualitative
        analysis of architectural styles taking several architectural characteristics into account.
        If you would like to learn more about this analysis or read how we define those
        characteristics, you can do so by reading this article, where we explain how this comparison
        was created.
      </p>

      <table class="sm:table hidden my-5">
        <thead>
          <tr>
            <th scope="col" class="w-20 px-1">Architectural Characteristic</th>
            <template v-for="(key, characteristic) in table" :key="`${key}_${characteristic}`">
              <th scope="col" class="px-1">{{ characteristic }}</th>
            </template>
          </tr>
        </thead>
        <tbody>
          <template
            v-for="(key, characteristic, i) in table[Object.keys(table)[0]]"
            :key="characteristic"
          >
            <tr>
              <td class="px-1">{{ characteristic }}</td>
              <td v-for="(index, indexName, keyIndex) in table" :key="index">
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
                      keyIndex < 2
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
                i < 2
                  ? 'text-neutral-600 dark:text-neutral-200'
                  : 'text-neutral-300 dark:text-neutral-600'
              "
            >
              <div class="p-1 pl-2">{{ name }}</div>
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
        Let’s start with the costs of Point-to-point architectural style. There is no middleware
        used in this architectural style and it relies on direct communication between two
        applications, which means that development cost as well as operational cost are pushed onto
        the specific systems that wish to exchange data. What that means is that in this scenario we
        do not have any additional licensing costs, no specialized development or support team
        responsible for application integration. This lands P2P with a score of a single
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        />
        in the development and operational costs.
      </p>
      <p>
        Architectural change cost is the cost that will vary the most depending on the size of the
        ecosystem and the number of interactions within it. The higher the number of systems and
        applications and the dynamic dependencies between them, the higher the architectural change
        cost will be. But if we assume a positive scenario that there actually is some governance
        (e.g. use of standardized, industry-specific protocols) over the ecosystem and its
        interoperability, that will limit the number of interactions between systems and as needed
        switch to a different architectural style, then it will not be allowed to grow to become a
        Spaghetti Architecture. In that case it will be feasible to introduce architectural changes
        with ease. This in turn gives P2P a single
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        />
        score in this category.
      </p>
      <h3>Architectural and design time analysis</h3>
      <p>
        The first group of architectural characteristics that we can take a look at when analyzing
        architectural styles describes the qualities of the blueprint of the architecture. If we’d
        take a closer look at what makes Point-to-point really good, we’d find that it is first of
        all its simplicity (5<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />) . This means that when implementing this architectural style, it will be quite simple to
        understand and test, as there is no added complexity of a mediator between the business
        systems. This comes with a specific corollary that this architectural style becomes more
        complex the bigger it grows, which means that if left ungoverned it will become the
        Spaghetti Architecture.
      </p>
      <p>
        The architectural downsides of this architectural style come from the same source as the
        benefits. Having systems or applications interacting directly with each other means that we
        face tight coupling between them. The level of coupling that we’d usually like is “data
        coupling”, where at this point we’re facing not only “stamp coupling”, as in being bound by
        a specific data model, but also “external coupling” that forces the calling application into
        using a specific communication protocol. This in turn means that architectural
        characteristics such as abstraction (<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />) and contract resilience (<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />) will suffer greatly. This in turn impacts extensibility (<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />), because it is very hard to add new features, functionality and systems, when each time
        an integration is needed, the system engineers need to learn a substantial piece of a
        different system and the way it’s implemented. Lastly, due to all of the previous downsides,
        composability (<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />) as an architectural characteristic also suffers, because as far as it is doable to reuse
        an API exposed by a specific business application, composing new functionality from existing
        components is pushed into the responsibility of the calling systems, which means that all
        those ned functionalities are encapsulated within those systems and not reusable by other
        applications.
      </p>
      <h3>Operational analysis</h3>
      <p>
        The second group of architectural characteristics we can take a look at focuses around
        operational aspects of the ecosystem. The first and biggest benefit of a Point-to-point
        architectural style is its testability (5<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />). Due to the high simplicity of the ecosystem and the fact that the responsibility of
        testing lies solely with the business applications, testing the communication, analyzing the
        results and being able to report outcomes is fairly quick. Unfortunately this ties in again
        to the aforementioned corollary, where with the growth of this architectural style, the
        complexity heavily impacts testability, which again is reflected over the Spaghetti
        Architecture qualitative analysis.
      </p>
      <p>
        The second operational aspect of this style that works well is performance (4<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />). This again relates to the lack of mediators, so as the communication is simpler, the
        latencies for communication are dependent only on the response time of the called systems.
        This can be managed and optimized, so the performance of the ecosystem is overall high. The
        reason that this is not the highest score is that this style usually does not enable
        efficient asynchronous communication..
      </p>
      <p>
        The operational architectural characteristics that fall behind in the trade-off in this
        architectural style are observability (2<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />) and auditability (2<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />). These heavily rely on how the business systems are implemented and what metadata they
        allow to be extracted out of them. In essence if we’re dealing with legacy custom systems,
        they might be very hard to refactor to provide sufficient amounts of metadata (logs,
        correlation ids, etc.). A similar situation might happen with Software as a Service (SaaS)
        solutions, where customizing those to provide the needed information might be a costly
        endeavor, severely impacting those characteristics.
      </p>
      <p>
        Furthermore scalability (2<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />) as an architectural characteristic is also low, because communication done over a
        synchronous protocol, that is the cornerstone of Point-to-point, does not support horizontal
        scalability sufficiently, especially due to the fact that it requires additional tools to be
        introduced to support features such as load-balancing. That hinders the capability of the
        ecosystem to have automated scaling, which is also done differently with each business
        system.
      </p>
      <p>
        Lastly, security (3<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />) in this architectural style is scored as average due to the fact that usually there is
        little to no overarching governance. This means that implementing least privileged access or
        following Zero Trust guidelines might be hard to achieve if not impossible.
      </p>
      <h2>Conclusions</h2>
      <p>
        Point-to-point is and will remain a valid architectural style for the ecosystem level. When
        implementing this, one should remember that it is not an architecture defined for extensive
        growth. It is valid for start-ups, small projects or data processing pipelines, where 2 or
        more systems can be treated as one from the perspective of the "rest of the world" in
        context of a given process. Without proper governance it might quickly turn into a Spaghetti
        architecture, leading to unwanted complexity and negative impact on business processes and
        their execution.
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
      th:nth-child(1) {
        @apply bg-neutral-50 dark:bg-neutral-950;
      }
      th:nth-child(n + 4) {
        @apply bg-neutral-50 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400;
      }
    }
  }

  tbody {
    tr {
      td:nth-child(2) {
        @apply bg-neutral-100 dark:bg-neutral-900;
      }

      td:nth-child(3) {
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
