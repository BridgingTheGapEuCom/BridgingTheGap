<template>
  <article class="hyphens-auto">
    <h2>The issue of “Integration”</h2>
    <p class="mb-4">
      Working in any industry brings all sorts of terms and abbreviations that are specific to that
      particular industry or even specific to a narrow field of it. During our work day we more
      often use job-specific jargon than we think, and that jargon when used outside of the industry
      context may be a cause of a lot of misunderstandings or even serious problems.
    </p>

    <p class="mb-4">
      That is exactly the case with Data Integration and Application Integration. Both of these
      terms use the word “integration”, which is commonly used by specialists in those two fields
      alone without the preceding word pointing to their respective terms. Why is that a problem?
      People outside of that field mostly hear the word “integration” instead of the full term and
      because of that they tend to think that this is one and the same thing. To be honest even
      specialists in those fields make that mistake when they are not aware of the existence of the
      other field in IT. An application integration specialist might think: “Oh, data integration,
      yes, we move data from place to place, hence we integrate it! That is the same thing!”.
    </p>

    <p>
      This way they create a little bit of chaos and misunderstanding, that may sometimes result in
      later organizational problems, like a lower budget, no willingness to invest in technology
      (because we already did invest so much in this area - the other area, because one was mistaken
      for the other), etc..
    </p>

    <h2>What is Data Integration?</h2>
    <p class="mb-4">
      So what actually is Data Integration and how does it differ from Application Integration?
      While researching the topic to give a complete answer, we stumbled upon a very descriptive
      analogy:
    </p>

    <p class="mb-4">
      “Consider a room where different puzzle pieces are scattered all around, each with a picture
      on it. Now, what do you do if you want to see the complete picture? You bring all those pieces
      together, connect them, and complete the puzzle, right?”
    </p>

    <p class="mb-4">
      Data integration is the process of combining and harmonizing data from multiple sources
      (multiple pieces from a puzzle) to provide a unified view (the complete puzzle). At least this
      is the short and simple definition. But what does that actually mean?
    </p>

    <p class="mb-4">
      The focus of data integration is to make data, which is scattered among various systems,
      accessible, transformed, and deliverable in a consistent and meaningful manner across the
      whole organization for Business Intelligence (BI), data analysis, or use by other applications
      and business processes. This typically involves data cleansing, transformation and
      synchronization. Data integration is a crucial component in both traditional Data Warehouses
      and modern cloud-native solutions like Lakehouses, facilitating seamless access and
      utilization of data across the organization.
    </p>

    <p>
      This means that the creators of data integration tools also provide certain capabilities to
      move data from sources and to consumers as this is often the requirement from customers who do
      not have their own application integration capabilities. This often involves setting up API
      connections, both hosting and calling, and directly accessing databases via ODBC or JDBC
      connections.
    </p>

    <h2>What is application integration then?</h2>

    <p class="mb-4">
      As we already defined in the article
      <RouterLink to="/articles/What_is_Application_Integration" aria-current="page"
        >“What is Application Integration?”
      </RouterLink>
      - it is the strive to connect different applications into a larger ecosystem that functions as
      one and by that we mean it is the capability to provide the <i>right data</i> to the
      <i>right place</i> at the <i>right time</i>, where Application Integration defines
      <i>how</i> that data transfer should happen within those given parameters.
    </p>

    <p>
      Application integration tools, despite the main focus on connecting systems, are also capable
      of doing sophisticated data integration other than formatting or structuring. While these
      capabilities are usually very handy in solving specific problems, our advice is simple -
      please do not do data integration in the application integration layer! Putting business logic
      over application integration platforms is usually not a good idea. Unless you are working
      closely with a good data architect and you are capable of documenting all of the
      transformations properly with the documentation being easily searchable and accessible, this
      is usually a problem as Application Integration Platforms are not considered to be business
      systems. Unfortunately, when data integration is done on the application integration tools, it
      is usually done as a workaround to a problem that needs to be fixed later. As our experience
      shows, it is almost never fixed and remains in place, causing all sorts of maintenance issues,
      additional operational costs, further development problems, and serious production failures,
      with new releases that did not take this additional logic as a dependency to be tested.
    </p>

    <h2>The trade-offs</h2>
    <p class="mb-4">
      Taking the above as it is, there is an overlap between data integration and application
      integration. To a certain extent it is true, as a lot of the data integration tools provide
      application integration capabilities that enable the access and delivery of data. On the other
      hand application integration technologies often also have specific data integration
      capabilities available. In that way they contribute to additional confusion as to what is the
      scope of this field.
    </p>

    <p>
      In the case of using data integration tools to facilitate application integration, as with all
      of the architecture questions, the answer to this problem would always be “<i>it depends</i>”.
      Several factors could be decisive in whether or not the tool should handle application
      integration:
    </p>

    <ul class="list-disc list-inside pl-7">
      <li>
        <b>Organization size</b> - if the organization is small, most of the time there is no budget
        to build a robust enterprise architecture with fancy features and proper division of
        responsibilities. In those cases “done is better than perfect”, as implementing a highly
        sophisticated architecture may not contribute to company growth and would be too costly at
        this point
      </li>
      <li>
        <b>IT maturity</b> - low maturity might contribute to additional complexity and make
        maintaining the IT landscape troublesome. In large environments, adding another component
        may seem harmless, but it will further contribute to overall complexity that is unstructured
        and hard to maintain, also called “<a
          href="https://en.wikipedia.org/wiki/Spaghetti_code"
          target="_blank"
          >spaghetti architecture</a
        >” or a “<a
          href="https://en.wikipedia.org/wiki/Anti-pattern#Software_engineering_anti-patterns"
          target="_blank"
          >big ball of mud</a
        >”, making it stiff and costly to maintain. In those cases, a clear division of
        responsibilities would be beneficial
      </li>
      <li>
        <b>Preexisting application integration platforms and capabilities</b> - if there are
        preexisting application integration tools available, this requires a validation, as too do
        they enable transport capabilities that are required by the data integration use cases
        (batch, on-demand, event-driven). If the capabilities are sufficient, they should be used,
        rather than the ones provided by the data integration tools
      </li>
      <li>
        <b>Use cases of the data integration tools</b> - depending on the use cases, whether it is
        an operational data hub, a business intelligence tool, or ad hoc usage by business
        applications and processes, the capabilities may differ with applied tools, as also some
        easy transformations, like formatting or structuring, may be done over the application
        integration and will be sufficient
      </li>
    </ul>

    <h2>Architectural Oversight</h2>
    <p>
      As far as it’s true that every company has a different structure, roles and especially the
      names for them, it doesn't really matter in terms of the scope of responsibilities. These can
      be divided into the responsibilities of application integration and data integration, which in
      a perfect world would fall under the respective responsibilities of an integration architect
      and a data architect. While, like with tools, a company may have both, none or one or the
      other of the architectural roles, there are a few helpful guidelines to establish proper
      oversight. These can be summarized by asking four key questions: what, where, when and how.
    </p>

    <h3>What?</h3>
    <p>
      There needs to be a common understanding of data objects and how they are supposed to be used,
      like what are the edge cases for specific data points and rules for filtering them into
      specific scopes.
    </p>

    <ul>
      <li>What data objects are we working with?</li>
      <li>What is the business meaning of those data objects?</li>
      <li>What is the context of their use in a business process?</li>
      <li>What is the common meaning of these data objects in a specific business domain?</li>
      <li>What is the scope of the data object actually consumed?</li>
    </ul>

    <h3>Where?</h3>
    <p>
      The data objects in a complex environment need to have a clear origin and there needs to be a
      clear understanding as to who (what system) is the consumer of these data objects.
    </p>
    <ul>
      <li>Where is the data created and stored?</li>
      <li>Where (what system) should the data be used?</li>
      <li>Is there a data multi-mastery conflict?</li>
      <li>Is the data split over several systems and needs to be merged?</li>
    </ul>

    <h3>When?</h3>
    <p>
      Knowing when along with what and where the data is used gives a full understanding of it in
      the business landscape, enabling the organization to provide proper data transports in a
      timely or even real-time manner based on actual needs.
    </p>
    <ul>
      <li>When is the data used by the business?</li>
      <li>Is the data freshness an important feature?</li>
      <li>When should the data be moved and what triggers transport?</li>
      <li>When does it add value to the respective business domain?</li>
    </ul>

    <h3>How?</h3>
    <p>
      This is the underlying technical process of transporting data between systems, which involves
      data transformation (simple formatting over the application integration layer, or heavy
      changes over a data integration tool), orchestration as well as enrichment. This is when
      tools, protocols and formats should be discussed.
    </p>
    <ul>
      <li>Can the data be classified as an event?</li>
      <li>Is it pulled on demand?</li>
      <li>Should it be a batch transfer?</li>
      <li>What is the orchestration and enrichment needed?</li>
    </ul>

    <h2>So what is the difference?</h2>
    <p>
      As stated, the difference between the fields of Data Integration and Application Integration
      can be easily distinguished at a logical level. The key problem lies in the fact that the
      tools used for both compensate in some way for the lack of capabilities of the other field.
      This makes it very difficult to clearly divide those capabilities in a live environment, as it
      requires a specific architectural skill set, as well as a high level of maturity. As the
      company and its IT landscape grows, it is worth understanding this logical division and
      onboarding proper tools for each field before the capability gap becomes a burden for the
      business.
    </p>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps(['dark'])
</script>

<style scoped></style>
