<template>
  <ArticleLayout>
    <article>
      <h2>Lifeblood of modern communication</h2>
      <p>
        While communication was always the key to success for humankind, since 1969 and the creation
        of <a
          href="https://en.wikipedia.org/wiki/ARPANET"
          target="_blank"
        >ARPANet</a>,
        communication has become something very different, quicker and more robust with every single
        decade, ever speeding up. The forecasts for 2025 are that we will produce 147 ZB of data
        over the year, this means about 407200000 TB a day. To put that in perspective, YouTube
        alone currently uses approximately 440000 TB daily, and your message on Whatsapp is under
        the size of 5KB = 5120 characters (1 TB = 1073741824 KB, so around 214.7 million messages).
      </p>
      <p>
        We rely on data being moved around between systems and users. We consume more and more of
        it, and for most users this is just viewing things in a browser window on the screen. But
        deeper in the depths of the IT systems, Architects and Developers need to make the decisions
        on how to move the relevant data between applications, for those users to see.
      </p>
      <h2>Communication mode</h2>
      <p>
        While there are many ways to communicate between systems, using APIs, integration platforms,
        message brokers, file transfers, etc., in the implementation details it comes down to a
        choice between two modes of communication: Synchronous and Asynchronous.
      </p>
      <p>Let’s try to define those in simple terms, starting with a proper definition:</p>
      <p>
        <span class="italic">Synchronous</span>
        <br>
        <span class="font-bold">1&emsp;: </span>
        <span class="italic">happening, existing, or arising at precisely the same time</span>
        <br>
        <span class="font-bold">2&emsp;: </span>
        <span class="italic">recurring or operating at exactly the same periods [...] </span>
      </p>
      <p>
        Looking at those two definitions, if we try to find a real-life analog to a communication
        that is synchronous, the thing that comes to mind is a dialog. A situation where there are
        at least two parties involved in an exchange of information, where saying something usually
        is followed by waiting and actively listening to a response.
      </p>
      <p>
        <span class="italic">Asynchronous</span>
        <br>
        <span class="font-bold">1&emsp;: </span>
        <span class="italic">not simultaneous or concurrent in time : not synchronous [...]</span>
      </p>
      <p>
        If this communication is defined as “not concurrent in time”, this means that the two
        participants do not communicate at the same time, so while one transmits, this is where the
        communication ends for the producer, and then the consumer becomes active. If the message is
        not picked up immediately, it is either lost or stored somewhere. A real-life analog to an
        asynchronous communication would be listening to a radio broadcast or exchanging messages
        over mail.
      </p>
      <h2>Blocking vs Non-Blocking communication</h2>
      <p>
        One of the key concepts to understand when dealing with communication modes and at the same
        time the key differentiator between Synchronous and Asynchronous communication is
        understanding whether the communication is blocking or non-blocking.
      </p>
      <h3>Synchronous is blocking</h3>
      <p>
        What does it mean that a communication is “blocking”? As defined above about synchronous
        communication, it is happening for all participants at the same time, where we have a
        sequence of requests and responses. The key aspect is that the party requesting is waiting
        for the response, so the resources used to make the call (RAM, thread, etc.) are locked and
        the process will not move on until it gets a response or times out.
      </p>
      <div class="flex justify-center mb-3">
        <Synchronous />
      </div>
      <p>
        The key consideration here is that the blocking time is directly dependent on the called
        application and the time that it needs to process the request to produce a response. This
        can be also applied to a chain dependency of multiple services calling each other (e.g.
        microservice chaining), so the time needed is a sum of processing times of those services or
        applications. While processing times may differ between implementations, the important
        consideration is how long the calling system can wait for the response (license limitations,
        process execution time, user experience, etc.)
      </p>
      <p>Blocking communication is beneficial when feedback is needed as fast as possible.</p>
      <h3>Asynchronous is non-blocking</h3>
      <p>
        On the other hand we have the “non-blocking” communication, which, by elimination, is
        asynchronous. Based on what we already know about asynchronous communication, the
        participants are not usually active in the data exchange at the same time. They are often
        separated by a Message Broker, file server or other persistence, which provides a separation
        between the provider and the consumer making it possible for them to behave this way.
      </p>
      <Asynchronous />
      <p>
        While sending a message to a message broker is also a synchronous operation as the message
        broker responds with an acknowledgement of getting the message, the application sending that
        message does not wait for the consuming application to process the message. Meaning that
        with asynchronous messaging the time to send out a message and get an acknowledgement is
        reduced, so this may lead to a significant improvement in processing speed, but the
        trade-off is the lack of immediate response.
      </p>
      <h2>Data volume</h2>
      <p>
        When choosing the communication mode it is important to consider payload sizes and hope they
        might impact communication performance as well as application responsiveness.
      </p>
      <h3>Synchronous mode</h3>
      <p>
        When considering a synchronous communication mode it is important to note that by making a
        synchronous call we are creating coupling, resulting in a dependency impacting performance
        and responsiveness. The larger the payload or processing time needed to produce it the
        bigger the impact on latency, that might be resulting in timeouts if not handled properly.
        Looking at the ranges of data volume the impact will be as follows:
      </p>
      <ul>
        <li>
          Messages below 10 KB or simple data retrieval will usually have a negligible impact on
          performance
        </li>
        <li>
          Messages between 10 KB and 100 KB or minor processing, like simple search, might cause
          problems if timeouts are not managed properly
        </li>
        <li>
          Messages above 100 KB or complex processing, e.g. patterns matching, while it will still
          work when communication parameters on both sides are properly managed, the latency might
          not be acceptable for most use cases, causing various responsiveness and performance
          issues
        </li>
      </ul>
      <h3>Asynchronous mode</h3>
      <p>
        Asynchronous communication allows a lot more flexibility in handling payload sizes or
        processing time. Because it provides decoupling, there is no direct dependency, which
        mitigates all impact on latency, performance and responsiveness that comes with synchronous
        communication. Each system communicating will be able to fine tune this separately. Larger
        payloads (files, batch transfers) will also benefit from asynchronous communication as the
        decoupling will allow longer processing times by creating a buffer for the consumer.
      </p>
      <h2>Use cases</h2>
      <p>
        Both synchronous and asynchronous communication has lots of applicable uses. It is
        impossible to mention all of them, as every single piece of equipment nowadays communicates,
        but we can group them into specific categories:
      </p>
      <ul>
        <li>Sync List common use cases:</li>
        <ul>
          <li>Real-time interactions</li>
          <li>
            Transactional communication (related to
            <a
              href="https://en.wikipedia.org/wiki/ACID"
              target="_blank"
            >ACID</a>)
          </li>
          <li>
            Situations where immediate feedback is essential, like data retrieval if data has to be
            presented to the user
          </li>
        </ul>
        <li>Async List common use cases:</li>
        <ul>
          <li>Sending notifications or alerts</li>
          <li>Background processing of tasks</li>
          <li>
            Data synchronization between systems (<a
              href="https://en.wikipedia.org/wiki/Eventual_consistency"
              target="_blank"
            >Eventual Consistency</a>)
          </li>
          <li>Situations where decoupling and scalability are important</li>
          <li>Handling long processing times in one of the systems</li>
        </ul>
      </ul>
      <h2>So which communication mode should you choose?</h2>
      <p>
        Well, to be honest we cannot really tell out. The key is to do a proper analysis of what the
        requirements are and choose based on those findings. Synchronous and asynchronous
        communications differ and have different trade-offs to consider. The key aspects to analyze
        should be:
      </p>
      <ul>
        <li>Is an immediate response needed?</li>
        <li>What is the payload size?</li>
        <li>What is the required responsiveness and tolerated latency?</li>
      </ul>
      <p>
        Keep in mind that there are many more aspects related to choosing a communication mode, but
        they are also tied to specific architectural styles and patterns (e.g. there will be
        different issues between synchronous and asynchronous call within an API-Led architecture
        than Event-Driven Architecture) and we will be touching upon those as we explore those
        topics!
      </p>
    </article>
  </ArticleLayout>
</template>

<script setup lang="ts">
import Synchronous from '~/components/articles/Synchronous_vs_Asynchronous/Synchronous.vue'
import Asynchronous from '~/components/articles/Synchronous_vs_Asynchronous/Asynchronous.vue'

const dark = useState('dark', () => false)
</script>

<style scoped></style>
