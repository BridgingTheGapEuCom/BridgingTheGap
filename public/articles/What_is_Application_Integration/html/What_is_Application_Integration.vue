<template>
  <article class="hyphens-auto">
    <h2>This seems to be a very easy question, ain't it?</h2>
    <p>
      But if you go to Google and search the phrase "Application Integration", you will get a
      multitude of vendor-specific sites that try to define application integration to align with
      their marketing philosophy, not entirely saying what it is. Some focus on heavy integration
      platforms, others around message brokers, while some also speak of API Management solutions.
      All of those are elements that compose application integration and can be used or not,
      depending on what the requirements are and what the architecture of a particular application,
      system or IT ecosystem is.
    </p>

    <h2>Why do we pose this question?</h2>
    <p class="mb-4">
      After spending years in the field of Application Integration, we found that this is one of the
      most misunderstood and neglected areas of IT. At the same time it can be one of the most
      complex and interesting challenges to solve within a modern IT landscape.
    </p>

    <p class="mb-4">
      We currently find that Application Integration is not taught anywhere else than with the
      technology vendors. And as it is, all their curricula are usually limited by what they are
      actually selling, so some problems are either not addressed or solved in a vendor-specific
      way, which blurs the understanding of certain application integration patterns. They do not
      show trade-offs between different solutions and architectural approaches, leaving them to be
      done by the customer himself.
    </p>

    <p>
      We realized that there is an educational gap that needs to be bridged, so we decided to build
      an Application Integration compendium by providing perspective on different architectural
      styles, their trade-offs and integration patterns.
    </p>

    <h2>A bit of history</h2>
    <p class="mb-4">
      We believe that to understand any topic is foremost to understand the “why” behind it. In the
      case of Application Integration the “why” is hidden in its history and how communication
      developed over the years. <b>Why do we need to communicate?</b> Information has always been
      the key to everything humankind has done. The more information we had, the more power we could
      amass. Nowadays it is estimated that on average we consume about 34GB of media daily (not
      accounting for other information, not screen-related!). Most people do not do much with that
      information, as most of it is forgotten in the next few days. But just understanding the
      capacity of our brains to process and store data, kind of shows the "why". We are information
      hungry! We strive to exchange information all the time, because this is basically what we
      consume, whether it’s gossip, a TV drama, or actually useful knowledge!
    </p>

    <p>
      But going back to Application Integration. The most basic form of data exchange is a point to
      point (P2P) connection between two separate instances of some sort of software. In layman's
      terms this is a form of communication resembling a conversation in person between two people.
      This kind of communication was the first of its kind recognised in computer science, starting
      with the creation of
      <a target="_blank" href="https://en.wikipedia.org/wiki/ARPANET">ARPANet</a>
      and the first connection between computers in 1969 made with the
      <a target="_blank" href="https://en.wikipedia.org/wiki/Network_Control_Protocol_(ARPANET)"
        >NCP</a
      >
      and later on in 1974 implementing the use of TCP. This is the protocol we rely on to this day,
      last updated in August 2022 as RFC
      <a target="_blank" href="https://datatracker.ietf.org/doc/html/rfc9293">RFC 9293</a>.
    </p>

    <h2>So what is Application Integration?</h2>
    <p class="mb-4">
      Application Integration is the strive to connect different applications into a larger
      ecosystem that functions as one. But what does that mean to function as one? In essence it is
      the capability to provide the <i>right data</i> to the <i>right place</i> at the
      <i>right time</i>, where Application Integration defines how that data transfer should happen
      within those given parameters.
    </p>

    <p>
      As with everything that is done in IT, this can be done in a multitude of different ways, some
      better, some worse. This is the responsibility of Application Integration Architecture to
      answer how to build integrations between applications that are coherent with the overall
      architecture of the application or the entire IT landscape.
    </p>

    <h3>The development of Application Integration over the years.</h3>
    <p>
      Since 1969 the field of Application Integration has changed a lot, and while we still use
      point-to-point communication, each year brings technological advancements, with which we are
      able to distinguish a few application integration architectural styles that are common in the
      industry. We see it as important to highlight them as they roughly define what might be the
      focus of an application integration engineer.
    </p>

    <h4>Request - Reply</h4>
    <p>
      As mentioned above, with the creation of ARPANet, Request-Reply is the most basic form of
      interoperation, commonly used to this day and utilized by all applications that want to
      exchange data. It is a simple, decentralized approach, which usually comes down to a single
      HTTP call to an interface. This approach is commonly found in small applications or
      microservices environments (e.g. microservices chaining). This is the building block of all
      communication onwards, as all applications, even with middleware in place, rely on a
      Request-Reply relationship.
    </p>

    <What_is_application_integrationClientServer :dark="isDark" />

    <div class="mb-4">
      Benefits:
      <ul>
        <li>Fast and fairly easy to build, quick to deploy</li>
        <li>Cost effective in a small scale or short perspective</li>
      </ul>
    </div>
    <div>
      Problems:
      <ul>
        <li>Complexity grows exponentially with each integration</li>
        <li>
          Heavy impact on application code and configuration with a medium or larger scale
          environment
        </li>
        <li>Tight coupling of applications (spaghetti architecture/big ball of mud)</li>
        <li>No reusability</li>
        <li>Low or no maintainability at a larger scale</li>
        <li>Low or no proper logging and monitoring</li>
        <li>Close to no capability to refactor or introduce change fast</li>
        <li>Difficult or unavailable to work in a high available mode</li>
        <li>Zero Trust Architecture is hard to implement</li>
      </ul>
    </div>

    <h4>File Transfer</h4>
    <p>
      As of the creation of ARPANet, further software development followed with the creation of File
      Transfer Protocol in 1971. This is a direct result of the creation of TELNET and NETRJS as
      described in the
      <a href="https://datatracker.ietf.org/doc/html/rfc114" target="_blank">RFC114</a>. This
      protocol is among the first to provide indirect access to other systems. What that means is
      that it was the first protocol enabling abstracting of interfaces as well as decoupling of
      systems. While it enabled applications to exchange larger sets of data early on and is used
      until this day, it is usually not the best choice for interoperability.
    </p>
    <What_is_application_integrationFile_Transfer :dark="isDark" />
    <div>
      Benefits:
      <ul>
        <li>Fast and fairly easy to build, quick to deploy</li>
        <li>Cost effective in a small scale or short term perspective</li>
        <li>Provides partial loose coupling between applications</li>
      </ul>
    </div>
    <div>
      Problems:
      <ul>
        <li>Complexity grows exponentially with each integration</li>
        <li>
          Heavy impact on application code and configuration with a medium or larger scale
          environment
        </li>
        <li>May lose the benefit of decoupling alongside growing complexity,</li>
        <li>Very limited reusability</li>
        <li>Low maintainability at larger scale</li>
        <li>Little or no proper logging and monitoring</li>
        <li>Low capability to refactor or introduce changes fast</li>
        <li>Difficult or incapable to work in a high available mode</li>
        <li>Zero Trust Architecture is hard to implement</li>
      </ul>
    </div>

    <h4>Broker Application Integration</h4>
    <p>
      Broker type architecture solves some key problems of the Request-Reply by introducing a
      centralized application that facilitates the integration needs in a more organized manner.
      This is done by managing connections and communication orchestration between different
      applications for them. Unfortunately in certain cases this might not be enough to solve all
      problems, depending on what we're trying to achieve. This type of architecture is commonly
      used in small and medium enterprises, where the number of integrated systems is low (we
      usually say under twenty, but it is completely arbitrary). Furthermore this approach can be
      divided into two distinct patterns:
    </p>

    <ul>
      <li>
        Messaging Service (e.g., JMS, AMQP, MQTT) - where an application message broker is
        introduced to facilitate all communication between systems on an asynchronous basis. This
        approach is common for Event-Driven Architectures or some Microservice System Architectures,
        where individual containers communicate with each other on a publish-subscribe basis.
      </li>
      <li>
        Integration Broker - broker type integration platforms with dedicated tooling that provide
        single-purpose services tailored to the needs of each individual system. The services
        themselves have very limited reusability, but code reusability is enabled through code
        libraries and common processes.
      </li>
    </ul>
    <What_is_application_integrationBroker :dark="isDark" />
    Benefits:
    <ul>
      <li>Provides partial loose coupling of applications</li>
      <li>Code reusability possible</li>
      <li>Lower impact on application code and configuration with larger scale</li>
      <li>Maintainable, but may be challenging at a larger scale</li>
      <li>Enables Zero Trust Architecture to a limited extent</li>
    </ul>
    <br />
    Problems:
    <ul>
      <li>Single point of failure (partially mitigated by multi node HA)</li>
      <li>None or very limited services reusability</li>
      <li>Dedicated single purpose flows</li>
      <li>Limited capability to refactor or introduce change fast</li>
      <li>Requires effort and resources to build</li>
    </ul>
    <h4>Orchestration-Driven Service Oriented Architecture (ODSOA) Application Integration</h4>
    <p>
      SOA is an architectural concept that emerged in the late 1990s. While it had its ups and
      downs, it evolved over the years. The original approach focused heavily on exposing business
      services first, with underlying layers of services to support them. ODSOA focuses around
      process and data services, where the logic of a process service is responsible for
      orchestrating the flow of data. Data services expose data in a standardized manner to enable
      the creation of services providing different data objects or functions related to said objects
      (e.g. <a href="https://en.wikipedia.org/wiki/CRUD" target="_blank">CRUD</a>). Although it was
      originally built around SOAP services and XML, it embraced RESTful Services as easily. Before
      the emergence of cloud-native technologies, this approach struggled with similar problems as
      the broker architectures in terms of availability and performance. So far this is the most
      successful approach for supporting large scale enterprise application integration, especially
      in organizations that are not technology driven.
    </p>
    <What_is_application_integrationODSOA :dark="isDark" />
    <div class="mb-4">
      Benefits:
      <ul class="list-disc list-inside pl-7 mb-4">
        <li>Provides loose coupling</li>
        <li>Major reusability (code, APIs, services)</li>
        <li>Supports Zero Trust Architecture</li>
        <li>Inline with Microservice System Architecture</li>
        <li>Highly scalable, both horizontally and vertically</li>
        <li>Very low impact on application code and configuration</li>
        <li>High capability to react to changes</li>
        <li>Mitigates IT landscape complexity</li>
      </ul>
    </div>
    <div>
      Problems:
      <ul>
        <li>Requires effort and resources to build</li>
        <li>Requires an investment in technology, licenses, additional tooling</li>
        <li>
          With first integrations it may seem to increase complexity and cost (lowers with each
          reuse) - Requires highly trained Integration Architects to be successful
        </li>
      </ul>
    </div>

    <h2>So what is Application Integration?</h2>
    <p>
      In short, this is a quite complex field that addresses the aspects of technical implementation
      of the ways we, and all technology we create, consume information.
    </p>
    <p>
      With this short article we would like to invite you to explore the topic of Application
      Integration with us and dive into the complex details of different styles, approaches and
      architectural trade-offs that come with modern day challenges of an IT landscape.
    </p>
  </article>
</template>

<script setup>
import What_is_application_integrationBroker from '../img/www/What_is_application_integration-Broker.vue'
import { computed } from 'vue'
import What_is_application_integrationClientServer from '../img/www/What_is_application_integration-Client-Server.vue'
import What_is_application_integrationFile_Transfer from '../img/www/What_is_application_integration-File_Transfer.vue'
import What_is_application_integrationODSOA from '../img/www/What_is_application_integration-ODSOA.vue'

const props = defineProps(['dark'])

const isDark = computed(() => {
  return props.dark
})
</script>

<style scoped></style>
