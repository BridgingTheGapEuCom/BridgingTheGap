<template>
  <ArticleLayout>
    <article>
      <h2>Many flavors of architecture</h2>
      <p>
        When we think about architecture, we usually think of building a system.
        There are no right answers to how to build, most of the time we use our
        experience and expertise, or we look towards more advanced techniques
        like trade-off analysis to choose “the least worst” solution. Luckily
        there are shortcuts that can help make decisions over what type of
        architectural style (or mix of those) you could use to build your system
        based on the architectural capabilities rather than functional behavior.
      </p>
      <!--      <system_vs_ecosystem-generic_-architectural_-styles :dark="dark" />-->
      <generic_-architectural_-styles :dark="dark" />
      <p>
        IP: Neal Ford,
        <a
          href="https://nealford.com/downloads/Architecture_Foundations_Styles_and_Patterns_by_Neal_Ford.pdf"
          target="_blank"
          >Architecture Foundations - Styles and Patterns</a
        >
      </p>
      <p>
        While it is beneficial to understand and know how to properly use and
        mix those architectural styles, when working with their capabilities and
        architectural characteristics, they focus mostly on a single domain
        system, monolithic or distributed alike. When we are working on
        Enterprise Application Integration, the focus is usually on cross-domain
        functionality and enabling the data to be used in different contexts,
        often outside of their domain of origin (e.g. customer data from a
        customer domain may be needed by the order domain to fulfill orders or
        an anonymised version would be very useful to the marketing domain for
        creating campaigns).
      </p>
      <h2>Ecosystem abstraction layer</h2>
      <p>
        Cross-domain interoperability, while can be supported on a system level
        by exposing APIs, encapsulating logic, must be addressed on a different
        abstraction level - ecosystem (or landscape) level. This in itself
        brings different architectural styles that can be leveraged to ease the
        burdens of interoperability, amongst many other troubles.
      </p>
      <system_vs_ecosystem-ecosystem_-architectural_-styles :dark="dark" />
      <p>
        Looking from a perspective of an Integration Architect, that knows a few
        integration technologies, we can identify four distinct architectural
        styles, that can be used in various scenarios:
      </p>
      <ul>
        <li>Point-to-point</li>
        <li>Event-Driven Architecture</li>
        <li>Integration Broker</li>
        <li>API-Led Architecture</li>
      </ul>
      <h3>Point-to-point</h3>
      <p>
        An implicit architecture, where it is taken by without proper
        consideration simply by creating code. It is very common with small
        ecosystems of startups and is a very useful approach for quick wins.
        Unfortunately with each new connection the complexity grows, adding to
        the number items on the maintenance list (e.g. credentials for each
        system, firewall rules, duplicate system access logic) and creating more
        and more coupling within the ecosystem as all of the logic is contained
        within the domain systems themselves. If the communication is
        standardized (which is rare) and proxied via an API Management solution,
        this could be still valid for medium sized organizations.
      </p>
      <p>
        The biggest pitfall of a Point-to-point approach is that often it is not
        governed properly, leading to something called the Spaghetti
        Architecture, which is a state where most organizations struggle with
        their interoperability capabilities and seek help to resolve their
        maintenance issues, development bottlenecks or lack of data visibility.
      </p>
      <h3>Event-Driven Architecture</h3>
      <p>
        Event-Driven Architecture is a broker architecture, where an
        event-broker (or a message broker) is utilized to facilitate
        communication between domain systems, usually in an asynchronous
        fashion. In essence it is used similarly on a system level to the extent
        that some of the architectural patterns can be used exactly the same
        way.
      </p>
      <p>
        The key to Event-Driven is to utilize events that are defined as facts
        that have occurred in the domain systems (e.g. a customer created an
        account, a new product bundle configuration was created, order was
        processed and sent). Those events are transmitted through queues and/or
        topics, which are the transport layer that facilitates the
        communication. This architecture relies on business, error handling and
        orchestration or choreography logic to be contained within the domain
        systems and the event broker remains as an infrastructural system.
      </p>
      <h3>Integration Broker</h3>
      <p>
        Integration Brokers in comparison to Point-to-point and Event-Driven
        Architecture have an additional key value - the capability to create
        communication logic outside of the domain systems. This in turn gives
        this architectural style the capability to create an abstraction layer
        between domain systems and provide additional decoupling capabilities
        both with synchronous and asynchronous communication modes. This makes
        it a viable option for medium to large organizations. The fact that in
        this architecture we use a central mediator that facilitates transport
        logic and orchestration enables it also to provide more visibility and
        auditability within the ecosystem itself.
      </p>
      <p>
        The key downside of this architecture is that while you can create many
        development standards, patterns and reuse, it does not have any
        architectural patterns as each integration flow is a custom workflow
        that supports a business process. While it is really hard to create
        flows that are entirely reusable, it is still possible in a specific set
        of circumstances (e.g. identical systems, with identical APIs within
        different territories).
      </p>
      <h3>API-Led Architecture</h3>
      <p>
        API-Led Architecture, being a cousin to Orchestration-Driven Service
        Oriented Architecture (ODSOA), is the most mature and robust approach to
        Enterprise Application Integration, enabling it to provide a great
        insight into the IT landscape as well as individual systems and the data
        they provide or consume. The super power of this architecture is the
        capability to provide abstraction layers, that decouple the systems to
        an extent that in a mature IT environment you can replace a whole domain
        system without impacting other systems in that IT landscape.
      </p>
      <p>
        The major pitfall of this architecture is that it is a lot more complex
        than its counterparts and requires a lot more effort and resources to
        implement at first. That said, the cost lowers over time as more and
        more data and services are exposed within the ecosystem creating
        reusability on a functional level, rather than only code. To be able to
        work with such an architecture DevOps capabilities are essential as with
        its complexity it will become hard to manage over time without proper
        automation to make the development, testing and deployment processes
        streamlined.
      </p>
      <h2>Architecture Comparison</h2>
      <p>
        It is very hard to compare those architectures between various
        implementations of many companies, as switching between them would
        require reimplementing a multitude of business systems to communicate
        differently based on the underlying business processes corresponding to
        the architectural style. That is why, while not impossible, it is not
        realistic to compare these architectural styles implementations within a
        standardized set of boundaries (a.k.a. quantitative analysis). It is
        however possible to provide a qualitative analysis, based on an overview
        of architectural characteristics of those architectural styles, which
        can be derived from professional experience, facilitating subject matter
        discussions, hosting focus groups and long analysis of those topics.
        That said, we would like to introduce such a comparison, which we
        created based on our experience and independent research. A more
        detailed description of the characteristics and the score for each
        architectural style will be provided in separate articles!
      </p>
      <div class="mt-2">
        <div
          class="flex justify-between border-b border-neutral-500 dark:border-neutral-400 cursor-pointer"
          @click="extended = !extended"
        >
          <div class="text-neutral-500 dark:text-neutral-400">Disclaimer</div>
          <div :class="{ 'rotate-180': extended }" class="extendableChevron">
            <SvgIcon
              class="text-neutral-500 dark:text-neutral-400 w-4 m-0 inline-block"
              type="mdi"
              :path="mdiChevronDown"
            />
          </div>
        </div>
        <div
          class="extendable my-1 px-2"
          :class="{ extended: extended }"
          :aria-expanded="extended"
          role="button"
        >
          <div class="overflow-hidden">
            <p>
              Before you jump into analyzing this table please note that while
              these are a result of our research, the actual outcomes in
              implementation may vary depending on several factors (e.g.
              organization and IT maturity, used technology, ecosystem
              composition, business processes). This table should not be treated
              as a source of definitive truth, but rather as generalized
              guidelines by which you may choose an architectural style for
              ecosystem wide interoperability.
            </p>
          </div>
        </div>
      </div>

      <table class="sm:table hidden my-5">
        <thead>
          <tr>
            <th scope="col" class="w-20 px-1">Architectural Characteristic</th>
            <template
              v-for="(key, characteristic) in table"
              :key="characteristic"
            >
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
              <td v-for="index in table" :key="index">
                <div
                  tabindex="0"
                  :aria-label="
                    i < 3
                      ? `${index[characteristic]} dollars`
                      : `${index[characteristic]} stars`
                  "
                  role="img"
                >
                  <SvgIcon
                    v-for="j of index[characteristic]"
                    :key="j"
                    class="text-neutral-500 dark:text-neutral-200 w-3.5 m-0 inline-block"
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
          class="border rounded-md mb-5 mt-1 dark:border-neutral-600"
          v-for="(architecture, architectureName) in table"
          :key="architectureName"
        >
          <div
            class="border-b font-bold p-1 pl-2 bg-neutral-200 dark:bg-neutral-600 dark:border-neutral-600"
          >
            {{ architectureName }}
          </div>
          <div>
            <div
              class="grid grid-cols-2"
              v-for="(key, name, i) in architecture"
              :key="name"
              :class="
                i === 2 ? `border-b col-span-2 dark:border-neutral-600` : ''
              "
            >
              <div class="p-1 pl-2">{{ name }}</div>
              <div>
                <SvgIcon
                  v-for="j of key"
                  :key="j"
                  class="text-neutral-600 dark:text-neutral-200 w-4 m-0 inline-block"
                  type="mdi"
                  :path="`${i < 3 ? mdiCurrencyUsd : mdiStar}`"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p>
        If you wish to learn more about architectural styles for system
        architecture, you can do so by reading
        <a
          href="https://www.oreilly.com/library/view/fundamentals-of-software/9781663728357/"
          target="_blank"
          >this book</a
        >
        or attending a training/webinar run by Mark Richards and Neal Ford.
      </p>
    </article>
  </ArticleLayout>
</template>

<script setup>
import { mdiChevronDown, mdiCurrencyUsd, mdiStar } from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";
import { ref } from "vue";
import System_vs_ecosystemEcosystem_Architectural_Styles from "~/components/articles/System_vs_Ecosystem_Architectural_Styles/Ecosystem_Architectural_Styles.vue";
import Generic_Architectural_Styles from "~/components/articles/System_vs_Ecosystem_Architectural_Styles/Generic_Architectural_Styles.vue";

const dark = useState("dark", () => false);

const extended = ref(false);

const table = {
  "Point-to-point": {
    "Development Cost": 1,
    "Operational Cost": 1,
    "Architectural Changes Cost": 1,
    Abstraction: 1,
    "Contract Resilience": 1,
    Simplicity: 5,
    Composability: 1,
    Extensibility: 1,
    Testability: 5,
    Scalability: 2,
    Performance: 4,
    Security: 3,
    Observability: 2,
    Auditability: 2,
  },
  "Spaghetti Architecture": {
    "Development Cost": 1,
    "Operational Cost": 5,
    "Architectural Changes Cost": 4,
    Abstraction: 1,
    "Contract Resilience": 1,
    Simplicity: 1,
    Composability: 1,
    Extensibility: 1,
    Testability: 1,
    Scalability: 2,
    Performance: 3,
    Security: 1,
    Observability: 1,
    Auditability: 1,
  },
  "Event-Driven Architecture": {
    "Development Cost": 2,
    "Operational Cost": 3,
    "Architectural Changes Cost": 2,
    Abstraction: 2,
    "Contract Resilience": 2,
    Simplicity: 4,
    Composability: 3,
    Extensibility: 2,
    Testability: 4,
    Scalability: 4,
    Performance: 5,
    Security: 2,
    Observability: 3,
    Auditability: 2,
  },
  "Broker (Mediator topology)": {
    "Development Cost": 2,
    "Operational Cost": 3,
    "Architectural Changes Cost": 3,
    Abstraction: 3,
    "Contract Resilience": 3,
    Simplicity: 3,
    Composability: 2,
    Extensibility: 3,
    Testability: 3,
    Scalability: 4,
    Performance: 3,
    Security: 4,
    Observability: 3,
    Auditability: 4,
  },
  "API-led Architecture": {
    "Development Cost": 3,
    "Operational Cost": 4,
    "Architectural Changes Cost": 2,
    Abstraction: 5,
    "Contract Resilience": 4,
    Simplicity: 3,
    Composability: 5,
    Extensibility: 4,
    Testability: 2,
    Scalability: 5,
    Performance: 2,
    Security: 5,
    Observability: 5,
    Auditability: 5,
  },
};
</script>

<style scoped lang="scss">
table {
  @apply bg-transparent;

  font-size: 0.7rem;

  tr:nth-child(2n + 1) {
    @apply bg-neutral-100 dark:bg-neutral-900;
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

.extendable {
  display: grid;
  grid-template-rows: 0fr;
  transition: var(--mainTransition);
  overflow: hidden;
}

.extendable.extended {
  grid-template-rows: 1fr;
}

.extendableChevron {
  transition: var(--mainTransition);
}
</style>
