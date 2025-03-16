<template>
  <ArticleLayout>
    <article>
      <h2>In the sea of patterns</h2>
      <p>
        Working in IT we hear a lot of jargon, phrases that have a specific meaning often only in
        this industry. While those terms are fairly common, and we hear them a lot, everyone has
        their own definitions as to what they actually mean. A large part of the role of an IT
        specialist, an architect especially, is to clarify those definitions and foster ubiquitous
        language in conversations within IT and when talking with any stakeholders.
      </p>
      <p>
        One of such words that constantly escapes a proper definition in common use is an
        antipattern. We hear it all the time in meetings, discussions over code and changes made to
        systems. Most commonly it is used as a description of something that should not be done that
        particular way, meaning it’s been done badly.
      </p>
      <h3>An uncharted island</h3>
      <p>
        The word antipattern in all of its various spellings is not found in common language as it
        is limited to software engineering, project management, or business processes.
      </p>
      <p>
        Andrew Koenig, who coined the term ‘antipattern’ back in 1995 in the “Journal of
        Object-Oriented Programming, Vol 8”, defined the the term as:
      </p>
      <p class="italic ml-7">
        An antipattern is just like a pattern, except that instead of a solution it gives something
        that looks superficially like a solution but isn’t one.
      </p>
      <p>A lot has changed since 1995, so the definition also shifted a bit here and there:</p>
      <p class="italic ml-7">
        An antipattern is a technique that is intended to solve a problem but that often leads to
        other problems. An antipattern is practiced widely in different ways, but with a thread of
        commonality.
      </p>
      <ul class="text-right">
        <div>-&emsp;SQL Antipatterns Volume 1</div>
        Bill Karwin
      </ul>
      <p class="mt-4 italic ml-7">
        AntiPatterns are common approaches to recurring problems that ultimately prove to be
        ineffective.
      </p>
      <ul class="text-right">
        <div>
          -&emsp;Rails AntiPatterns: Best Practice Ruby on Rails Refactoring
        </div>
        Chad Pytel, Tammer Saleh
      </ul>
      <p class="mt-4 italic ml-7">
        An antipattern is a repeatable process that produces negative results.
      </p>
      <ul class="text-right">
        <div>-&emsp;Fundamentals of Software Architecture, 2nd Edition</div>
        Neal Ford, Mark Richards
      </ul>
      <h3>The quest for the treasure</h3>
      <p>
        All of those definitions above, despite being slightly different, have a common theme: the
        antipattern is not the solution to the problem or might lead to additional problems that
        greatly outweigh the benefits of the solution. Someone might generalize, and we believe many
        do, that antipatterns are simply bad and you should avoid them.
      </p>
      <p>
        Like all things that began to have a life of its own, antipatterns have a grain of truth in
        them, as they must have been used somewhere and worked benefiting the overall solution at a
        certain point. Otherwise they would not have the characteristics of commonality attached to
        them in all of the definitions. To understand the nature of antipatterns it is crucial to
        understand their context and how they came to be and there might be several various
        scenarios for their origins:
      </p>
      <ul>
        <li>
          <b>Outdated gold</b> - a common solution or pattern from a different time, as there are still a
          lot of solutions or ideas circulating in the industry that were born and implemented a
          long time before the first microservices and large scale distributed systems. Trying to
          apply some of those solutions, e.g. trying to create a file cache, might prove highly
          ineffective in distributed solutions, while it worked perfectly fine with monolithic
          systems hosted on bare metal. There might be different and better ways to do things or the
          business drivers that created them already shifted too far for the original idea, for them
          to support the business in a meaningful way,
        </li>
        <li>
          <b>It worked so it must be universal</b> (<a
            href="https://en.wikipedia.org/wiki/False_equivalence"
            target="_blank"
          >false equivalence fallacy</a>) - there are cases where a
          specific solution worked for a specific use case and it was known to be of great benefit
          to the business. There are bound to be some that will try to replicate the exact or very
          similar solution in the context of their own company without first building an
          understanding of why that solution worked in the first place and what was the context of
          the original solution's use and creation. This can lead to completely mismatched
          solutions, implemented just because someone mistakenly thought that they’re solving the
          same problem,
        </li>
        <li>
          <b>We have always done it this way</b> (<a
            href="https://en.wikipedia.org/wiki/Status_quo_bias"
            target="_blank"
          >status quo bias</a>) - a tendency to preserve the ways of
          working, used patterns, if not from fear of change and loss, then from rigidness of the
          change process and the overwhelming effort needed to produce a stable change (e.g.
          acceptance processes, board reviews, sign-offs, security assessments). As deviating from
          the norm is risky, this often results in inaction, leaving us with patterns that may be
          outdated and inadequate. Additionally, there is the aspect of feeling overwhelmed by the
          number or complexity of available options, opting towards the status quo helps to avoid
          the stress of decision making.
        </li>
        <li>
          <b>Others are already doing it!</b> (<a
            href="https://en.wikipedia.org/wiki/Bandwagon_effect"
            target="_blank"
          >Bandwagon effect</a>) - a phenomenon where a certain approach,
          behavior, technology is adopted simply because others are doing so. It is even greater if
          the solution is presented by a well known company that is considered to be some sort of an
          industry leader (e.g. Netflix, Google, Salesforce), where the presentation often has no
          goal of an actual knowledge transfer, but more of a marketing aspect. By that all
          trade-offs, operational and organizational problems, costs are hidden behind the story
          tailored to bring attention and revenue to the company.
        </li>
      </ul>
      <p>
        All of these villain origin stories have one single action that was missing - a trade-off
        analysis, that would check if those solutions actually match the requirements and context of
        the ecosystem they are to be implemented in. But that also leads to another important
        conclusion showing the nature of an antipattern - it is still a pattern and it will surely
        be applicable in a specific, probably niche, scenario! The assumption that it is always bad
        is simply false. As with everything: it depends.
      </p>
      <h3>‘X’ that marks the spot</h3>
      <p>
        If we consider all of the above we can actually refine the definition of an antipattern.
        From our perspective it should look something like this:
      </p>
      <p class="italic ml-7">
        An Antipattern is a common solution to a problem that is not the right fit in a specified
        context or a solution that might lead to additional problems that greatly outweigh its
        benefits.
      </p>
      <p>
        Let's delve deeper into this definition and explore all the clues on the map of patterns,
        exploring the implications:
      </p>
      <ul>
        <li>
          Common Solution: Antipatterns aren't difficult to comprehend or unusual; they're often
          widely recognized and readily adopted solutions. This popularity can stem from their
          initial effectiveness in certain scenarios, their simplicity, or their promotion by
          influential figures or companies.
        </li>
        <li>
          Problem-Solution Mismatch: The core issue with antipatterns lies in their incorrect use. A
          solution that works well in one context can be disastrous in another. This mismatch can
          arise from differing requirements, constraints, or unforeseen circumstances.
        </li>
        <li>
          Contextual Sensitivity: The effectiveness of a solution is highly dependent on the context
          in which it's applied. Factors such as the problem domain, the available resources, the
          organizational culture, and the time constraints can all influence the suitability of the
          solution.
        </li>
        <li>
          Hidden Costs: Antipatterns often come with hidden costs that aren't immediately apparent.
          These costs can include increased complexity, reduced maintainability, performance
          degradation, or unintended consequences that ripple through the ecosystem.
        </li>
        <li>
          Benefit-Cost Imbalance: Even when a solution provides some benefits, it can still be
          considered an antipattern if the associated various costs significantly outweigh those
          benefits. This highlights the importance of considering the long-term implications of a
          solution.
        </li>
      </ul>
      <h2>Conclusions</h2>
      <p>
        The concept of antipatterns, while often misunderstood, plays a crucial role in the
        ever-evolving landscape of software engineering and IT architecture. By recognizing the
        common origins of antipatterns and understanding their contextual nature, we can navigate
        the complexities of solution design and implementation more effectively. The key lies in
        striking a balance between leveraging established patterns and adapting them to the specific
        requirements and constraints of each unique scenario. Ultimately, by fostering a culture of
        critical thinking and informed decision-making, where solutions are not blindly adopted but
        thoughtfully evaluated and tailored to achieve optimal outcomes, we can avoid costly and
        problematic patterns which we would later name antipatterns.
      </p>
    </article>
  </ArticleLayout>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
