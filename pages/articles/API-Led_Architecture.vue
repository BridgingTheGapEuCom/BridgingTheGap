<template>
  <ArticleLayout>
    <article>
      <h2>Something old, something new</h2>
      <p>
        As we take deeper dives into ecosystem architectural styles, we can see that we already
        solved some problems using Event-Driven Architecture and Broker Architecture, but more
        challenges come with scale. As we keep introducing new complexity and dependencies with new
        business systems, those architectures start to become over cumbersome, with a large number
        of repetitions. Now we are facing a challenge that could be named "Dedicated vs Composable
        integration flows” which would be an architectural equivalent of the “DRY code vs WET code”
        in development.
      </p>
      <p>Let’s apply some architectural thinking and analyze the trade-offs for each option:</p>
      <h3>Dedicated integration flow:</h3>
      <p>
        In dedicated integrations, the level of reusability is fairly limited, mostly to reusable
        libraries, specific snippets of code. The integration flows themselves are closely knitted
        to the business needs and are a reflection of the underlying business process. This means
        that quite often access logic to specific systems is duplicated, with small variations to
        the query parameters or scope of data. This brings a benefit of less abstract code and being
        able to precisely fit to the business requirements. This comes at the cost of having a
        bigger codebase to maintain and operate, which can lead to development bottlenecks as the
        focus will shift from development to operations and maintenance.
      </p>
      <h3>Composable integration flow:</h3>
      <p>
        In composable integrations, the integration flow is split into microservices, facilitating a
        specific part of the communication. In that case we’re not only reusing code libraries, but
        whole integration services. This means that while the logic does not get duplicated as much,
        it usually has to be designed either in a generic way, to cover a broader spectrum of
        possible needs or on an iterative basis to extend the services as needed to reach that broad
        spectrum. While this comes at the benefit of having a smaller code base, that is easier to
        scale and manage as separate services, the cost is that it becomes a bit more abstract and
        harder to understand. This requires proper governance and additional tools to govern all
        available services and make them discoverable and searchable, otherwise the duplication will
        not happen at code level, but rather on the level of whole services.
      </p>
      <h3>Ecosystem Architecture Styles Scope</h3>
      <p>
        How does that relate to Ecosystem Architectural Styles?? If we take a look at EDA and Broker
        Architecture, there is a large number of repetitions within those architectural styles. With
        EDA it is due to the effort on communication being distributed among various producers and
        consumers and encapsulated within those systems. With integration brokers, the balance
        shifts a little bit closer to removing duplication by providing a finite level of
        abstraction. This is due to the workflow-like nature of integration flows, where, while
        there is reusability on the code level, it makes the flows a bit repetitive as they might be
        required to be implemented over and over again for different systems with some variance.
        Both of those architectural styles can be placed on a spectrum between dedicated and
        composable approaches, yet closer to dedicated.
      </p>
      <h3>Something borrowed</h3>
      <p>
        Going into the direction of the composable approach we can find API-Led Architecture, which
        is an architectural style that is a descendant from Service-Oriented Architecture’s (SOA)
        Enterprise Service Bus (ESB). While there are many similarities, the core concept moved so
        far away from the original that it deserved a name of its own. This architectural approach
        provides a three-layered separation of concerns within an integration platform that was
        present in the industry at the beginning of 2010s. Mulesoft refined the concept further and
        coined the term “API-Led Connectivity” around 2016. A large part of what API-Led
        Architecture is, was refined and coined as a standard by that technology vendor, despite the
        fact that you can implement this architectural style in a number of different technologies.
      </p>
      <h2>What is API-Led Architecture?</h2>
      <p>
        API-Led Architecture is an ecosystem architectural style that builds atop the previous
        architectural styles expanding their capabilities and adding a more standardized and
        reusable approach to interoperability. The key aspects are:
      </p>
      <ul>
        <li>
          Separation of concerns - the communication between business systems is separated by three
          layers of integration applications, each with different responsibilities.
        </li>
        <li>
          Separation of access - each business system has a dedicated set of integration
          applications,
        </li>
        <ul>
          <li>
            adapter for traffic towards a system - exposing standardized data services (CRUD-based)
            to the rest of the ecosystem,
          </li>
          <li>channel for outbound traffic - exposing dedicated services to systems,</li>
        </ul>
      </ul>
      <p>
        Otherwise this architectural style reinforces the integration platform aspects inherited
        from Broker Architecture:
      </p>
      <ul>
        <li>Protocol agnostic approach to communication,</li>
        <li>Mediating between various contract data models and formats,</li>
        <li>Provide orchestration logic,</li>
        <li>Provide observability, abstraction and extensibility capabilities,</li>
      </ul>
      <h3>Three Abstraction layers</h3>
      <p>
        One of the most important aspects of API-Led Architecture is the capability to provide
        abstraction layers separating the business systems from each other. Those layers have
        distinct responsibilities that they deal with as they abstract different aspects of the
        communication:
      </p>
      <ul>
        <li>
          Channel Layer - an abstraction layer composed of integration apps and their APIs exposed
          directly to the consumers of the integration platform, with each one of them represented
          by its own channel application is responsible for:
        </li>
        <ul>
          <li>Exposing to the consumer dedicated services that they need,</li>
          <li>
            Translating from the integration contract to the internal platform service contract,
          </li>
          <li>
            Limiting the service response if the payload scope of data is too extensive, narrowing
            it down only to the needed set,
          </li>
          <li>
            Provide additional communication metadata, that could be based on the payload, to enable
            proper message routing in case of publishing events,
          </li>
          <li>Caching responses to frequent consumer requests (if applicable),</li>
          <li>
            Creating a secure dedicated channel, that will only be used by a single business system,
          </li>
          <li>Providing observability metadata on service usage of the consumer system,</li>
          <li>
            Abstract the service or data service contract to mitigate the impact of some service
            changes on the customer,
          </li>
        </ul>
        <li>
          Composition Layer - an abstraction layer composed of integration apps and their
          standardized APIs responsible for composing complex services usually grouped around a
          specific set of business processes or capabilities (e.g. customer, or order related),
        </li>
        <ul>
          <li>Exposing standardized reusable services to the Channel layer,</li>
          <li>
            Encapsulating the complexity of service and data orchestration between various data
            services,
          </li>
          <li>Caching responses to frequent service requests for all consumers (if applicable),</li>
          <li>Providing observability metadata on the integration platform service usage,</li>
        </ul>
        <li>
          Adapter Layer - an abstraction layer composed of integration apps and their standardized
          APIs exposed for the internal use of integration platform. Applications within this layer
          hold data services of all provider systems, with each one of them represented by its own
          adapter application, which is responsible for:
        </li>
        <ul>
          <li>
            Exposing a standardized reusable data services to the Channel and Composition layers,
          </li>
          <li>Encapsulating the complexity of data access logic,</li>
          <li>
            Translating between the integration platform internal service contract and the provider
            system contract model for the messages passing between the integration platform and the
            system,
          </li>
          <li>
            Limiting event-based communication payload scope if the data is too extensive, narrowing
            it down only to the needed set,
          </li>
          <li>
            Caching responses to frequent data service requests for all consumers (if applicable),
          </li>
          <li>Creating a secure dedicated adapter to funnel all traffic to the system,</li>
          <li>Providing observability metadata on data usage of the provider system,</li>
        </ul>
      </ul>
      <APILed_Architecture_example />
      <h2>Qualitative Analysis</h2>
      <p>
        As we did with previous architectural styles, let’s explore the qualities of API-Led
        Architecture and look into a few pitfalls that can be crucial to consider when trying to
        apply this architectural style. For that we will be using a comparison table that was
        produced through a qualitative analysis of architectural styles taking several architectural
        characteristics into account. If you would like to learn more about this analysis or read
        how we define those characteristics, you can do so by reading this article, where we explain
        how this comparison was created.
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
                      keyIndex === 1 || keyIndex === 4
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
                i == 1 || i == 4
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
      <p>
        API-Led Architecture is always a significant investment. At least this is the case in the
        first few years, when this new concept of a mediator will still be debated, challenged and
        its governance will be in a state of flux till it stabilizes. The development cost (
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        />
        ) at first encompasses the creation of all of the base infrastructure for each business
        system, that is: their respective integration apps, as well as those for processing,
        figuring out the logic on how to expose and standardize data, etc.. Over time this cost
        lowers as a lot of data services and composed services are already there, which means they
        can be leveraged to compose new services and expose them as needed to new business
        applications, gradually lowering the development effort, time to market and cost. The cost
        score here is an average of the initial cost and the later lowered value.
      </p>
      <p>
        Operational cost (
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        />
        ) in API-Led architecture is usually high. This is due to several factors:
      </p>
      <ul>
        <li>
          Licensing cost and model - technologies tailored to facilitate this architectural style
          are expensive and have various licensing models that monetize their use differently on
          premise and in cloud,
        </li>
        <li>
          Number of components - the number of deployable components and their size may be large in
          the later stages of the platform’s life, so that will be a factor increasing the cost with
          growing ecosystem complexity,
        </li>
        <li>
          Standardized logging, monitoring and analytics - API-Led based integration platforms can
          produce a significant amount of logs that need to be processed, stored and made
          searchable, this means additional costs, especially in cloud environments, where data
          transfer is the costly part,
        </li>
      </ul>
      <p>
        The distributed nature of the platform means that, while it is a lot more readable, without
        support from proper tooling it will likely take a lot of effort and knowledge to perform a
        proper Root Cause Analysis (RCA) for any incidents, so the initial operational investment
        into the right tools is crucial.
      </p>
      <p>
        The real value of API-Led Architecture lies in the architectural change cost (
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text-black dark:text-white"
          type="mdi"
          :path="mdiCurrencyUsd"
        />
        ) as it is one of the super powers of this architectural style. As a result of architecting
        for the right level of abstractions, whole systems can be replaced with limited impact on
        the ecosystem, as most of it will be encapsulated within the integration platform and never
        propagated to the business systems, unless there is a reason for that.
      </p>
      <h3>Architectural and design time analysis</h3>
      <p>
        From the perspective of the qualitative analysis it may seem like API-Led Architecture is
        always the best choice for an ecosystem architectural style. So before we jump into the
        great qualities of it, let’s discuss the less beneficial scores. Starting off with
        simplicity (
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        ), which is scored similarly to Broker Architecture, but for a completely different reason.
        If we look at integration brokers, this is a collection of easy workflow-like integration
        flows, usually highly custom and tightly knit with the business process, which gives it that
        particular score. With API-Led Architecture, we have a single integration flow distributed
        across several integration apps starting at at least two. The complexity of this style seems
        a lot higher by that alone. Fortunately due to the way abstraction layers are organized and
        the fact that integration applications are assigned in every layer, the overall architecture
        is fairly more readable, than a collection of integration flows built in a broker. Because
        of that the score cannot really be lower, and at the same time the sheer scale of this kind
        of platform does not allow for it to be higher.
      </p>
      <p>
        Moving on to qualities that were scored higher in the qualitative analysis, let’s start with
        the capability to provide abstraction (
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        ), as it is the key benefit of this platform that to an extent sets the score higher for
        other architectural characteristics as well. As mentioned above API-Led Architecture has
        three distinct abstraction layers, which enables encapsulation of logic and a clear division
        of responsibility within the code. This highly impacts contract resilience (
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        ) and composability (
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        ), as any impactful changes (e.g. a change of a contract with the system) can be contained
        as close to that system as possible, limiting the bubbling upstream and forcing changes on
        other business systems. With this encapsulation of data access logic and service
        orchestration, API-Led Architecture enables architects to mix and match, to create new
        services to facilitate business needs. Which fosters a reusable mindset. Lastly, the
        encapsulation of logic in abstraction layers enables a certain ease in adding new consumers
        to the platform, boosting its extensibility (
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        ), making each future change somewhat easier.
      </p>
      <h3>Operational analysis</h3>
      <p>
        Moving on to the operational qualities of this architectural style, we can see that the
        scores are a little bit more polarized. Looking at the superpowers of API-Led, we can see
        that it is a highly scalable approach with scalability scoring at
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        . This is another aspect deriving from the separation of concerns and the abstraction
        layers, where due to the microservice nature of the integration platform every single
        element is separately scalable. This enables a great degree of fine tuning flexibility,
        giving a lot of control over resource consumption, especially with high reuse of all
        services. However the fact that we have so many layers and applications composing the
        integration platform negatively impacts testability (
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        ) and performance (
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        ). There simply are too many moving parts, which bars us from performing tests really fast,
        especially if end-to-end testing reveals some bugs - analysis may take some time.
        Performance wise, the chaining of microservices introduces more latency than it was with the
        Broker Architecture, making this architectural style slightly slower than the competition.
      </p>
      <p>
        Looking at a different aspect of observability (
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        ), the abstraction layers and dedicated integration apps may provide a significant amount of
        data and metadata about the health and operations of the whole ecosystem, often leading to
        situations that the integration platform operations may spot problems in connected business
        systems, before their operations teams see them themselves. This level of granularity and
        fine details, combined with proper metadata, supports auditability (
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        ) in a fantastic way, enabling gathering of significant data that can be later used for
        audit trails, tracing or simply RCA.
      </p>
      <p>
        Lastly, as a result of the abstraction capabilities and integration apps granularity, the
        security (
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        <SvgIcon
          class="pb-1 w-4 m-0 inline-block text text-black dark:text-white"
          type="mdi"
          :path="mdiStar"
        />
        ) aspects of the whole ecosystem gain a great benefit, as not only metadata of all
        communication is available for anomaly analysis, there is more room for swift reactions as
        well. If a system is compromised for some reason, the abstraction layers halt the progress
        of the intrusion to a degree. If needed, all communications with that breached application
        can be cut by disabling the whole integration applications responsible for facilitating
        communication or if the danger is lesser only specific operations tied to the compromised
        parts.
      </p>
      <h2>Conclusions</h2>
      <p>
        The evolution of integration architectures mirrors the growing complexity of modern IT
        ecosystems. API-Led Architecture emerges as a pivotal advancement, addressing the
        shortcomings of earlier approaches like Event-Driven Architecture and Broker Architecture.
        By embracing a three-layered abstraction (Channel, Processing, and Adapter), this style not
        only enhances efficiency and agility within integration processes but also empowers
        organizations to gain deeper insights into data flows and system dependencies. This improved
        understanding can serve as a catalyst for strategic business decisions and drive innovation
        across the enterprise. While the initial investment in implementing API-Led Architecture is
        significant, the long-term benefits in terms of scalability, observability, and security,
        coupled with the potential to reduce architectural change costs, position it as a compelling
        option for organizations seeking to modernize their integration landscapes.
      </p>
    </article>
  </ArticleLayout>
</template>

<script setup lang="ts">
import APILed_Architecture_example from '~/components/articles/API-Led_Architecture/API-Led_Architecture_example.vue'
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
      th:nth-child(5) {
        @apply bg-neutral-50 dark:bg-neutral-950;
      }
    }
  }

  tbody {
    tr {
      td:nth-child(3) {
        @apply bg-neutral-100 dark:bg-neutral-900;
      }

      td:nth-child(6) {
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
