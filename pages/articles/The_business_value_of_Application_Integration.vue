<template>
  <ArticleLayout
    ><article>
      <h2>A no communication world joke</h2>
      <p>
        Have you seen or read “The Twelve Tasks of Asterix”? Do you recall “The Place That Sends You
        Mad" task? While this is most of all a joke on bureaucracy, you can also think of it as
        living in an environment without communication. Regardless of the mechanics behind – paper
        documents delivered to the offices by internal messenger, pneumatic tubes system, modern
        computer network, Telepathy data transfer – the problem is that data is not flowing from one
        involved party (office) to the other. As a result, no work is being done and finally the
        system collapses when disturbance is introduced (it is the purposeful action of Asterix in
        the movie/comic… but could be anything in the real world).
      </p>
      <p>
        The flow of the information between involved parties is what integration is about. It is not
        just connectivity (access to the data) – integration is also a level of common understanding
        of the information and ability to use it.
      </p>
      <h3>Or not…</h3>
      <p>
        Ancient Rome's absurd bureaucracy is not something you would like to see in the XXI century
        public administration or company providing services – but still encountered almost every
        day. Just think of any time, when you need to fill in any questionnaire, mostly with the
        data from some documents you possess. Or when you use your documents not to identify
        yourself, but to provide data recorded in these documents. Or when you need to wait until
        somebody manually does checks/searches or actions, which seem to be automatable.
      </p>
      <h2>Why not a monolith?</h2>
      <p>
        For now let’s assume, we agree, that we need interchange of data and some level of common
        understanding. One of the ways to achieve this is by using a single monolith system for all
        users (people, units, companies…). Such a system could act as a single place for all data,
        no data would have to be ever sent to any other system and all data processing and access
        control happens inside of this single system. Does this sound like a solution?
      </p>
      <p>
        Well, monolith systems have their own limitations, both technical and business. Some of the
        aspects we will discuss later in the article, and we will be focusing on those more
        important for integration than the structure of a given IT system.
      </p>
      <h3>Data sourcing</h3>
      <p>
        One of the main business reasons we need to integrate systems is that we are not in control
        of the source of the data we have to or want to use in the business process. It is highly
        unlikely for multiple business/government entities to use a single system due to separate
        areas of responsibility, financing and strategies. It is also unlikely for competitors to
        deliver their services using the same system - the tooling they use is often a core element
        of competitive edge.
      </p>
      <p>
        Here are a few examples of data published by government institutions or by private
        companies:
      </p>
      <ul>
        <li>
          Official average currency exchange rates - it changes daily and you have to use it to
          calculate invoice value in different currencies, e.g. for tax purposes, as taxes are paid
          in most of the cases in local currency.
        </li>
        <li>
          Reference interest levels - if your business is to provide interest products (savings,
          loans), you may be contractually or legally bound to keep interest in relation to
          reference level. While this information is usually not changed as often as currency
          exchange rates, you still may want to automate pulling it from the central bank system
          rather than risk errors or omissions with manual entries in your systems.
        </li>
        <li>
          Databases of sanction, fraud, Politically Exposed Person (PEP), etc. - this is information
          usually aggregated by private companies and provided via database access or data feed
          service. You may have to utilize it in your Know Your Customer (KYC) processes. While
          different approaches are possible, in most countries some record of KYC process outcome
          for clients or contractors must be preserved, which means data (or a subset of it) has to
          be copied into your systems.
        </li>
        <li>
          Weather forecast data - if your business relies heavily on logistics and transportation,
          automated updates of weather alerts may be crucial for the routes and delivery planning.
        </li>
      </ul>
      <h3>Sending results outside of your organization</h3>
      <p>
        Just as a mirror to the previous point: in many business processes it is you/your company
        that has to send some data to another organization. Even if data is not your core product,
        like in case of “Open-Source Intelligence” companies, you still may need to e.g. send
        invoices or other tax related reports to the Tax Office system. With regulations like
        Standard Audit File for Tax (SAF-T) or e-Invoicing this becomes an increasingly common
        approach all over the world, and systems to integrate with and range of data exchanges vary
        from country to country.
      </p>
      <h3>Using best solution for task to be performed</h3>
      <p>
        IT systems architecture can be tailored to a given task. By integrating systems built in
        different ways, a system best fit for purpose can be used rather than compromise to what
        allows us to perform all tasks well enough.
      </p>
      <p>
        It is an analogous approach to splitting huge systems into modules, which are easier to
        maintain, test, and teach users to use them. Integrating several systems however goes
        further than modularizing the system. With proper multiple systems integration “functional
        modules” do not have to be delivered by a single vendor or even use a single technology.
      </p>
      <p>
        Integration allows to select the best option for a given business capability from a
        cost/performance perspective. It does not even have to be the same type of contract or
        agreement, as it is possible to mix owned systems that are held on premise, run in the
        cloud, SaaS, pure pay-per-use services and all other variants.
      </p>
      <h3>Business process resilience</h3>
      <p>
        Integration promotes systems and data separation of concerns. While the integration layer
        itself needs careful design, so it doesn’t turn into a single point of failure, when done
        well it reduces overall business risk of failure compared to having all processes running in
        a single monolithic system.
      </p>
      <p>
        This separation should not only happen on a technical level, but has to be analyzed from a
        business process perspective too. It is a very rare case that “all data” is required for a
        single process or person, or that all data is required at the same time. If data input is
        reduced to what is really necessary, and provided only when it is needed, the impact of a
        single system going down may be reduced.
      </p>
      <p>
        If resilience is a major factor, with integration mechanisms it is possible to build a
        solution actively switching between multiple vendors providing the same capability. This
        topic will be investigated further in another article, but a small disclaimer here: systems
        integration is not the (sole) solution for ensuring the resilience of the core business
        system. While it may reduce the impact of this system going down, it cannot be treated as
        e.g. replacement for database backups policies, or keeping proper Service Level Agreement
        (SLA) for business systems.
      </p>
      <h3>Business flexibility – reducing vendor lock</h3>
      <p>
        Reducing coupling between business functions and processes by using separate integrated
        systems for each business area or set of capabilities makes moving to another vendor
        simpler. The reason is not everything has to be replaced at the same time. As long as the
        overall business process remains the same, switching to another vendor / system performing a
        given task is done by updating integration (may require one-time data migration if system
        replaced was system of record).
      </p>
      <h2>Why is Application Integration not seen as business value?</h2>
      <p>
        If integration lies in the core of business processes and often is inevitable, why is it not
        perceived as value and not always invested into? Here are some of the multiple reasons:
      </p>
      <p>
        Visibility – system integration happens in the background. It is not something directly seen
        by users – both customer and business users in a given organization. For them it is a
        “mobile app” or “web page” or GUI (Graphical User Interface) displaying data. How data was
        obtained is usually outside of their perception.
      </p>
      <p>
        Lack of understanding – often goes with lack of visibility or with an approach to allocate
        cost and incomes to single elements of landscape making it a purely accounting exercise.
        Integration components, while visible in diagrams and/or IT spend summaries, they seem not
        to deliver any particular business function “by themselves” and “just” connecting other
        systems, are perceived as cost/effort elements only. A closer look into business processes
        is required to understand that integration is necessary for other systems to deliver value.
      </p>
      <p>
        Wrongly addresses expectations – another common case is an expectation that integration will
        act as a kind of filler foam, providing functionalities – from running custom business logic
        to acting as backup data storage – which cannot be delivered by domain systems/services
        vendors or are expensive. When pushed back as violating integration layer good practices, it
        leads to questioning the need for an integration layer at all as only adding to technical
        complexity of the overall solution (more components to maintain).
      </p>
      <p>
        ERP paradigm – historically the first large-scale use of IT systems in companies was for
        internal planning and management, e.g. maintaining stocks and supporting supply chains.
        Simply at the beginning there was nothing external to connect to. This focus on internal use
        only, where (in theory at least) monolithic systems may suffice, still lives in many
        companies.
      </p>
      <p>
        While this internal processes excellence is important, customers rarely care for how work is
        organized in the backoffice. What is different with the “integrate first” approach is focus
        on customer data and experience, leveraging external services to enhance company offering -
        e.g. providing a wider range of products or delivering your products and services quicker.
      </p>
      <p>
        Feeling of losing control – system integration is inevitable when external services
        (delivered through IT systems) need to be used. Business context is often outsourcing of the
        business capabilities - switching from tasks performed “in-house” to what is provided by
        some Vendor as a service. While the need is usually well justified, by some of the
        stakeholders it may be perceived as losing control over the process and flexibility of
        performing tasks without being bound by external contact. The fact that systems integration
        is a tool, and not even a mandatory one in many cases, is secondary to this feeling.
      </p>
      <h2>
        What is the indirect value of Application Integration? Can you afford not to integrate?
      </h2>
      <p>
        At this stage we know why integration may be perceived as not adding business value. Now
        let’s see in detail why we need application integration and what are key ways it delivers
        business value.
      </p>
      <p>
        Some of the points were already discussed above when presenting limitations of the
        monolithic system approach, but the value of application integration is multifaceted. There
        are aspects which are hard to put in opposition to monolithic systems, as they touch
        capabilities not even available without integration.
      </p>
      <h3>Meeting obligations – regulatory or internal</h3>
      <p>
        As mentioned earlier, sometimes integration is imposed by law directly or by required speed
        of reaction, which makes any kind of manual entry of the data into your system not feasible.
        While in this case “if” is not a question, “how” still provides a huge area to investigate.
        Other Bridging The Gap articles provide a comprehensive resource on “how” to integrate. A
        good start will be Modern Application Integration Principles article.
      </p>
      <h3>New business capabilities and opportunities</h3>
      <p>
        Improved customer experience: integration allows service personalization thanks to accessing
        and utilizing integrated customer data across various touchpoints or by making use of other
        services easier to the customer – like e.g. interactive address search instead of manual
        entry. This results in better customer satisfaction and retention.
      </p>
      <p>
        Faster decision making: with real-time access to integrated information from multiple
        sources, decision-makers can make faster and more informed decisions based on a unified view
        of the customer and/or market. Example is providing a full view of KYC current and
        historical data in a single screen. This agility is essential in today's fast-paced business
        environment.
      </p>
      <p>
        Reduced time-to-market for products and services: by leveraging integration of 3rd party
        services businesses can enhance their offer without the need to create capabilities “in
        house”. This allows them to focus on core elements of the offer and truly new
        functionalities, services, products, and business models that drive differentiation and
        competitive advantage, rather than consuming available resources on recreating capabilities,
        which can be bought. An example could be leveraging an external decisioning platform
        utilizing no code/low-code configuration rather than building an in-house decision engine.
      </p>
      <h3>Efficiency and Productivity Improvement</h3>
      <p>
        Integration platforms streamline communication and data exchange between different
        applications, systems, and departments within an organization and between organizations.
        This eliminates manual data entry or the need to use multiple systems for a single business
        task, reduces errors, and enhances overall operational efficiency.
      </p>
      <p>
        Productivity is increased thanks to resource allocation to the less repetitive and more
        innovative tasks. An example could be automated identity documents verification service
        provided by the vendor, which in most cases can validate images/scans of documents
        automatically, allowing customer service agents to focus on cases requiring manual
        verification.
      </p>
      <p>
        Note, for every integration considered, potential of operational cost reduction thanks to
        automation and lower maintenance cost of disparate systems has to be weighted with the cost
        of maintenance of a given flow in the integration platform.
      </p>
      <h3>Enhanced Data Accuracy and Consistency</h3>
      <p>
        Data accuracy and validity: Integration platforms allow to read data from the system of
        record when it is needed or automate data synchronization. This eliminates data duplication
        and inconsistencies across various applications and systems, and leads to improved data
        accuracy and validity. This breaking down of silos between applications and domains is
        crucial for making informed business decisions and maintaining regulatory compliance.
      </p>
      <p>
        Controlling the access to the data: Only data that needs to be synchronized is synced or
        interchanged between systems, and data delivery is secured by applying appropriate measures
        like encryption and request authorization. This helps to reduce both the risk and the impact
        of data leakage.
      </p>
      <h3>Scalability and Flexibility</h3>
      <p>
        All the reasons for which larger systems are divided into semi-independent modules apply
        also to individual systems through application integration. If a large monolithic system can
        be split into smaller parts to support Availability, Scalability, Deployability, Testability
        or Maintainability, similar outcomes can be achieved by using separate integrated
        applications to deliver given functionality.
      </p>
      <p>
        Scalability: Integration platforms are designed to scale with the growing needs of the
        business. If a need for the amount of operations in a particular area increases, it may be
        easily adjusted in this single area only. It does not require scaling up the whole
        landscape.
      </p>
      <p>
        Flexibility: The approach of breaking down monolithic applications allows for integration of
        new applications or systems, and accommodates future expansion. Integration also helps to
        bridge the gap between legacy systems and modern cloud-based applications. This creates an
        IT environment that can support future growth and agility within the company, and lets
        enterprise architects focus on where data is created and where and when it should be
        delivered.
      </p>
      <h2>Summary</h2>
      <p>
        From a long term perspective, application integration brings tangible business value by
        improving efficiency, reducing costs, enhancing data accuracy, enabling faster
        decision-making, enhancing customer experience, automating processes, providing scalability
        and flexibility. This enables companies to have a competitive edge in the market.
      </p>
      <p>
        Leveraging an integration platform lays the foundation for a modern and future-proof IT
        infrastructure that can support your organization's growth objectives. It is a strategic
        decision to go this path, and depending on the organization needs and maturity different
        architecture styles may be suitable.
      </p>
      <p>
        For completeness we also have to make one disclaimer here: as with almost everything,
        application integration done in the wrong way can cause harm rather than help the business.
        In our other articles we aim to provide guidelines and best practices to make application
        integration an enabler and bring the best outcomes with it.
      </p>
    </article>
  </ArticleLayout>
</template>

<script lang="ts" setup></script>

<style scoped></style>
