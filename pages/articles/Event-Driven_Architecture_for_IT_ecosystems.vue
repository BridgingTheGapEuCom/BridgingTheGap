<template>
  <ArticleLayout>
    <article>
      <h2>Trying to avoid the italian cuisine problems</h2>
      <p>
        Modern businesses rely on a diverse ecosystem of applications, including custom-built
        systems and cloud-based services. Integrating these disparate systems can be challenging,
        often leading to tightly coupled (<NuxtLink
          to="/articles/From_Point-to-point_to_Spaghetti_Architecture"
          aria-current="page"
          >spaghetti</NuxtLink
        >) integrations that are difficult to maintain and scale. Event-Driven Architecture (EDA)
        offers a more flexible approach to interoperability. By leveraging events as the foundation
        for communication, EDA enables systems to exchange data more loosely, improving
        maintainability and facilitating easier adaptation to changing business requirements.
      </p>
      <h2>At the beginning there was messaging</h2>
      <p>
        There are various types of objects and information that pass through message brokers. To
        understand Event-Driven Architecture (EDA) it is crucial to be able to navigate easily
        between them:
      </p>
      <p>
        <b>Message</b> - is the core object of communication, which can be literally anything.
        Following the examples given by
        <a href="https://www.linkedin.com/in/jacquelineread/" target="_blank">Jacqui Read</a> at DDD
        Europe 2024 in the talk “<a
          href="https://jacquiread.com/files/2024-05-29-Every-event-everywhere-all-at-once-dddeu.pdf"
          target="_blank"
          >Every event everywhere all at once</a
        >”, this might as well be “High five! Well done!”. A message can have more narrowly refined
        subtypes that serve specific interoperability function:
      </p>
      <ul>
        <li>
          <b>Command</b> - is a subtype of a message where we tell the other side of the
          communication to do something, like “Create customer”, this literally means that the data
          set transferred between the systems is sent with the intent to invoke an action on the
          receiving end,
        </li>
        <li>
          <b>State</b> - is another subtype, with a passive message, transferring a state of
          something, telling us for example “ticket 123qwe is in progress”, this is often reflected
          by a very light payload, sent periodically, most commonly containing an identifier,
          described state and some metadata,
        </li>
        <li>
          <b>Event</b> - is another subtype of message that states a fact that occurred. This means
          that the message sent between the systems contains metadata and a payload (or identifier
          of one) that describe something that happened business or operations wise. But since we’ll
          be focusing on it a little bit more, we’ll get back to it in a moment,
        </li>
      </ul>
      <p>
        Given the above, we can notice that a very common mistake happens, that there is a tendency
        to name something EDA, where it is not actually event-driven, so it uses message types that
        are not events. To make this clear and before we take a deep dive into EDA, we need to
        define what is an event and further explore the other types of “objects” that can go through
        a message broker.
      </p>
      <h3>Events vs the world</h3>
      <p>
        Let’s start with a generic definition. As we already established, the root of all things
        going through a message broker is a message. It is the most simple option and it has the
        least boundaries of what it can be. Simply put a string as payload and that is your message!
      </p>
      <p>
        But events are not just some random messages. They are specialized in terms of the contents
        and meaning, so let’s look at a few definitions:
      </p>

      <p class="flex flex-row italic">
        <span>Event<br /><span class="font-bold">1</span></span>

        <span class="">
          <br />
          <span>a : something that happens : occurrence</span>
          <br />
          <span>b : a noteworthy happening</span>
          <br />
          [...]
        </span>
      </p>
      <p>
        Essentially in programming an event is the fact that something happened. Which means it
        would be associated with verbs in the past tense like: created, started, completed, updated,
        failed, etc.. This is reflected in the messages metadata and payload. For example, if you
        use topic hierarchy the metadata would be hidden in the name of the topic, e.g.:
        /eshop/order/<b>created</b>/v1/{orderId}, and the payload would be the details of that
        order, even if it is just an ID of a record for later polling.
      </p>
      <p>
        As mentioned earlier, there are other types of messages that are common to IT ecosystems.
        For comparison, the implementation philosophy of SOAP was commands and responses to them.
        The messages were sent to an API that was focused around command operations based on
        imperative verbs, like get, set, update, which resulted in names like e.g. getCustomer,
        updateOrder, setStatus. Similarly in REST, while the API represents the resource, the
        imperative verbs of HTTP Methods (GET, POST, PUT, PATCH, DELETE) represent the command
        nature of the invoked operation. Commands imply that the calling system is in control of the
        transactional behavior of the API provider.
      </p>
      <p>
        Another option is to use messages to transfer state, where it can be described as statuses
        like those found on a common kanban board (e.g. to do, in progress, done). And lastly
        messages can transfer whole binaries of documents, which is a nice feature, but lands more
        in the spectrum of mass transfer topics, rather than real-time application integration.
      </p>
      <h2>What is Event-Driven Architecture?</h2>
      <p>
        As we now know what an event is, we can define what Event-Driven Architecture is. The most
        basic understanding would be that it is an architecture that detects, reacts to and
        processes events. It is a distributed architecture that is composed of event producers and
        event consumers, which are the components (applications, systems, modules of applications)
        that contain business logic. The communication between them, as mentioned, happens usually
        via a message broker, so a dedicated technical application that facilitates asynchronous
        message exchange.
      </p>
      <h3>Context: Integration vs. Distributed systems</h3>
      <p>
        As we have defined roughly what EDA is, there is one more distinction to make. Context
        matters! When using EDA as an architectural style, there are different considerations an
        architect must take into account when designing a distributed system and when designing
        application integration. While with a single system this is usually a single team that has a
        high level of control over development and the domain, for integration that would turn into
        dealing with cross-domain connections, coordinating between several different development
        teams and system architects. This brings additional complexity and certainly will influence
        several aspects of implementation. Furthermore it is worth noting that in distributed
        systems asynchronous communication may happen without the use of a specialized message
        broker, by using e.g. in memory queues.
      </p>
      <h2>Qualitative Analysis</h2>
      <p>
        As we did with
        <NuxtLink to="/articles/From_Point-to-point_to_Spaghetti_Architecture" aria-current="page"
          >Point-to-point</NuxtLink
        >, let’s explore the qualities of Event-Driven Architecture and look into a few pitfalls
        that can be crucial to consider when trying to apply this architectural style. For that we
        will be using a comparison table that was produced through a qualitative analysis of
        architectural styles taking several architectural characteristics into account. If you would
        like to learn more about this analysis or read how we define those characteristics, you can
        do so by reading this
        <NuxtLink
          to="/articles/Qualitative_Analysis_of_Ecosystem_Architectural_Styles"
          aria-current="page"
          >article</NuxtLink
        >, where we explain how this comparison was created.
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
                      keyIndex === 1 || keyIndex === 2
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
                i > 0 && i < 3
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
        Let’s start with cost considerations of Event-Driven Architecture as an architectural style.
        With this approach to ecosystem interoperability a message or event broker is used as a
        mediator between different domain systems. This brings an implication of development and
        operational costs being higher than with Point-to-point. The use of a technical broker
        brings additional complexity. Depending on the choice of a broker, this means that all
        domain systems that wish to communicate need to learn the brokers protocol as well as learn
        to properly produce and consume events. This increases the cognitive strain on development
        teams. On the other side message brokers are incapable of building sophisticated processing
        logic as they only facilitate communication, so using them does not require a dedicated
        development team that would implement changes. This brings the development cost to be higher
        than Point-to-point, resulting in
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        /><SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        />
        for EDA in this category. Operational cost is higher as well, as there is another component
        in the ecosystem, which often requires a license to run as well as a team to maintain and
        operate it. This also increases overall operational effort in all environments to provide
        analysis and fixes for any issues that might occur, as there are more components that need
        to be looked into. This gives the operational costs a score of
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        /><SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        /><SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        />.
      </p>
      <p>
        Architectural change cost, even if it is an unpredictable variable, is fairly low (<SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        /><SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        />). This is due to the fact that a message broker is providing a separation layer between
        domain systems, splitting a dynamic quantum, that would be common for a point-to-point
        connection, into two or more quanta, depending on the architectural pattern used. This makes
        the domain systems loosely coupled between each other, so in turn easier to modify or
        entirely replaced.
      </p>
      <h3>Architectural and design time analysis</h3>
      <p>
        Let’s first take a look at the design time qualities of EDA. Like with Point-to-point, the
        superpower of EDA, in this area, is its simplicity (4<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />). Implementing this architectural style is fairly simple in terms of architectural
        components. It is very clear and easy to understand. The reason the score is only 4<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        is that this style forces all the domain systems to learn how to work with events alongside
        making additional p2p calls while processing them. Secondly, the use of message brokers,
        especially patterns related to the use of topics as a communication medium, enables
        composability and by that also a certain level of reusability of events and related data
        models. However the downsides of EDA as an ecosystem architectural style, listed below,
        bring the composability score to 3<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />. While overall the scores are higher than with P2P, there are aspects that should be
        looked into. If we explore the capability of EDA to provide abstraction (2<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />), we can see that, like with P2P, we are bound by several types of coupling:
      </p>
      <ul>
        <li>semantic coupling being the most basic and unavoidable,</li>
        <li>contract coupling, which means being bound by the same data exchange contract</li>
        <ul>
          <li>afferent, as in for producers, when using queues to communicate many to one,</li>
          <li>
            efferent, as in for consumers, when using topics to communicate one to many or many to
            many,
          </li>
        </ul>
        <li>
          conversation coupling, if the chosen message broker does not allow to be protocol
          agnostic,
        </li>
      </ul>
      <p>
        This means there are many things to consider when putting this architectural style in a
        context of a specific implementation and choosing the right broker for a job. These would be
        the skills available in the organization or on the market, the protocol capabilities of
        systems that are to be integrated, etc.. Then the various degrees of coupling influence the
        contract resilience (2<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />). If the communication is other than one to one, there is a design consideration that
        each change in the data model (contract) may be a breaking change, depending on how
        producers and consumers parse payloads and what is the data format used. This impact needs
        to be assessed early on, because it will influence every integration.
      </p>
      <p>
        Lastly we should take a look into extensibility (2<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />), and here’s where the context of integration vs. distributed systems comes into play
        leading to a lower score than often expected from EDA. This quality seems to be a lot
        stronger when designing a single domain distributed system, because it is a lot easier to
        extend the system with new modules or components that work within the same bounded context.
        When we’re dealing with ecosystem interoperability, while the same extensibility mechanisms
        apply (patterns to do many to one, one to many and many to many), they work cross-domain,
        with the cost of using various technologies, different bounded contexts or effort to adapt
        specific protocols. These cannot be disregarded just as implementation details and need to
        be considered beforehand.
      </p>
      <h3>Operational analysis</h3>
      <p>
        Moving on to the second group architectural characteristics, that describe the operational
        qualities of the architectural style. The foremost benefit of EDA in this area is its
        performance (5<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />). Some people might wonder why we scored it higher than P2P. There is one key difference
        here that is worth noting - responsiveness. Synchronous communication that is the key
        element of P2P is always a blocking communication, which means that it impacts
        responsiveness, because it creates a dynamic coupling between the caller and the provider of
        the API. As mentioned before, using a message broker splits this quantum into two quanta,
        which means that the event producer does not rely on the performance of the consuming
        system(s) and can provide data to a group of consumers in parallel instead of calling them
        in sequence. This provides a performance boost, freeing up resources as soon as the
        communication with the broker is done.
      </p>
      <p>
        Looking into further characteristics we can see that scalability (4<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />) is the next characteristic that is scored high in the comparison. This architectural
        style makes it a lot easier architecturally to scale-out your systems, because it does not
        require additional components for load balancing! Using message broker queues enables the
        use of a competing consumers operational pattern, that by itself provides load balancing
        capabilities based on resource availability of consumers. Depending on the message broker
        chosen, this may be also available with topics and configuring consumer groups. It is also
        possible to provide auto-scaling capabilities in the ecosystem based on monitoring of queues
        or topics of the message broker and the load on those communication structures.
      </p>
      <p>
        Another superpower of EDA that derives from its simplicity is testability (4<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />). The overall setup is fairly straightforward, as the only added component is a broker
        that technically facilitates communication and sometimes routing based on metadata, so it
        does not provide any additional logic (e.g. validation rules, content based routing, that
        needs to be specifically tested.
      </p>
      <p>
        Looking further into operational characteristics, observability (3<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />) and auditability (2<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />) change slightly compared to P2P. While we can observe more within the ecosystem if
        proper monitoring is implemented to account for the message broker and its communication
        structures, it does not influence auditability. This is due to the fact that those
        characteristics still heavily depend on what can be extracted from business systems. The
        composition of the ecosystems and types of applications within it will have a great impact
        on what kind of data and metadata describing its operations can be extracted.
      </p>
      <p>
        Lastly, what requires additional attention with EDA as an architectural style is security
        (2<SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />). While all of the components can be separately secured, the concern is not with those
        components, but rather the implications of using message brokers. If we want to leverage the
        use of topics, it is important to understand the consequences of “contract coupling”
        mentioned before. The consideration is not only around the brittleness of the contract, but
        also the fact that if we are broadcasting data via topics to several consumers, it means
        that all of them receive the same scope of data, without consideration of the actual scope
        used by a particular system. This means that while the usage might be proper and as
        designed, full scope of data will be most likely at least logged somewhere. This means that
        the data can be accessed by someone who is not supposed to do so, resulting in a security
        breach.
      </p>
      <h2>Conclusions</h2>
      <p>
        Event-Driven Architecture is a very useful architectural style, especially for ecosystems
        that are required to be highly performant and at the same time remain simple, testable and
        scalable. While it has its downsides, if properly governed and mitigated, it is a viable
        architectural option for small to medium companies that rely on real-time interactions
        within their business processes.
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
      th:nth-child(2) {
        @apply bg-neutral-50 dark:bg-neutral-950;
      }
      th:nth-child(n + 5) {
        @apply bg-neutral-50 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400;
      }
    }
  }

  tbody {
    tr {
      td:nth-child(3) {
        @apply bg-neutral-100 dark:bg-neutral-900;
      }

      td:nth-child(4) {
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
