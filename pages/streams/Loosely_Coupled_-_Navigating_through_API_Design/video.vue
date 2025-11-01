<template>
  <div class="w-full">
    <StreamLayout
      :transcript="transcript"
      name="Loosely Coupled - Navigating through API Design"
      video-id="ORUcj_0NhGA"
    />
  </div>
</template>

<script lang="ts" setup>
const transcript = ref([
  {
    startTime: 107.32,
    person: 'Karol',
    text: ' Good morning, good afternoon and good evening, everybody I hope everybody has a nice beverage to enjoy this wonderful time.'
  },
  {
    startTime: 128.66,
    person: 'Karol',
    text: " It's 7pm Central European Standard Time and I welcome you again to another episode of loosely coupled by bridging the gap."
  },
  {
    startTime: 137.76,
    person: 'Karol',
    text: " I'm your host, Karol Skrzymowski."
  },
  {
    startTime: 140.18,
    person: 'Karol',
    text: " And today we're having a, whew, that's an interesting topic and quite so in line of my work because, well, professionally I do design APIs."
  },
  {
    startTime: 152.36,
    person: 'Karol',
    text: " So we're gonna be navigating API design with two wonderful guests from CodeCentric from Germany, Dr. Miriam Greis and Daniel Kocot."
  },
  {
    startTime: 165.14,
    person: 'Karol',
    text: ' Yeah, I see Daniel already on the preview laughing that I made a small mistake in pronunciation.'
  },
  {
    startTime: 174.4,
    person: 'Karol',
    text: ' Difficult last names for me always, right?'
  },
  {
    startTime: 178.42,
    person: 'Karol',
    text: ' And today they will be talking with us here about designing APIs and also a lovely topic of data interface quadrants, which is something that they worked on together in CodeCentric.'
  },
  {
    startTime: 193.88,
    person: 'Karol',
    text: ' So without further ado, hello, hello.'
  },
  {
    startTime: 196.6,
    person: 'Karol',
    text: ' Welcome to the stream.'
  },
  {
    startTime: 197.68,
    person: 'Karol',
    text: ' Hello, Miriam.'
  },
  {
    startTime: 198.42,
    person: 'Karol',
    text: ' Hello, Daniel.'
  },
  {
    startTime: 201.12,
    person: 'Karol',
    text: ' All right.'
  },
  {
    startTime: 202.38,
    person: 'Karol',
    text: " So before we jump into the design topic, the dramas of designing a good API, it's about yourselves a little bit."
  },
  {
    startTime: 214.28,
    person: 'Miriam',
    text: ' Yeah, I just go ahead, maybe.'
  },
  {
    startTime: 216.48,
    person: 'Miriam',
    text: ' Yeah, sure.'
  },
  {
    startTime: 216.92,
    person: 'Miriam',
    text: ' So hi everyone.'
  },
  {
    startTime: 218.88,
    person: 'Miriam',
    text: ' Great to be here.'
  },
  {
    startTime: 219.66,
    person: 'Miriam',
    text: " I'm Miriam."
  },
  {
    startTime: 221.8,
    person: 'Miriam',
    text: " I'm actually working with CodeCentric for more than seven years now, seven and a half years."
  },
  {
    startTime: 228.58,
    person: 'Miriam',
    text: ' And when I started there, I mainly started as a front end and full stack developer pretty quickly.'
  },
  {
    startTime: 233.48,
    person: 'Miriam',
    text: ' But I always, from the beginning, I was in API related projects.'
  },
  {
    startTime: 237.08,
    person: 'Miriam',
    text: ' So my first project at CodeCentric was a project where we developed an API developer portal, right?'
  },
  {
    startTime: 244,
    person: 'Miriam',
    text: ' So very API specific.'
  },
  {
    startTime: 245.52,
    person: 'Miriam',
    text: " And that's how I got into the API topic."
  },
  {
    startTime: 248.14,
    person: 'Miriam',
    text: ' And when I looked for followup projects, I somehow landed in API consulting.'
  },
  {
    startTime: 252.28,
    person: 'Miriam',
    text: " So the last three and a half years, I mainly did API consulting, which means I'm working with teams, helping them to get the journey done from the day they need an API until it's on production, mainly like with enabling."
  },
  {
    startTime: 267.32,
    person: 'Miriam',
    text: ' So not really doing the work, but helping them like in a driving school to not take the wrong turn and land in a desert or wherever, but to always go to the right direction and to reach their goal at the end.'
  },
  {
    startTime: 279.24,
    person: 'Miriam',
    text: " So I saw a lot of API designs, many bad ones, I have to admit, but I think we'll get to that later as well."
  },
  {
    startTime: 287.1,
    person: 'Karol',
    text: ' Probably, yes.'
  },
  {
    startTime: 288.6,
    person: 'Karol',
    text: " So just to put that into perspective, because some of the audience are my fellow integration specialists, you're not working specifically with integration platforms, right?"
  },
  {
    startTime: 299.52,
    person: 'Karol',
    text: " You're working more with the main systems exposing their functionality as APIs."
  },
  {
    startTime: 303.92,
    person: 'Karol',
    text: ' Yes, yes.'
  },
  {
    startTime: 305.68,
    person: 'Miriam',
    text: " I mean, as well, of course, I mean, there's always some gateway or something, but it doesn't really matter for us what it is, let's say, or for me at least."
  },
  {
    startTime: 314.08,
    person: 'Miriam',
    text: " There is something, right, that we need to integrate with, but it's not a specific platform or a specific tool or a specific thing, right?"
  },
  {
    startTime: 323.02,
    person: 'Miriam',
    text: ' We also spend some time with customers designing and doing concepts for integration platforms recently and all these things.'
  },
  {
    startTime: 330.7,
    person: 'Miriam',
    text: " So we're also doing stuff like that."
  },
  {
    startTime: 332.26,
    person: 'Miriam',
    text: ' But my main focus really for me was enablement and also automation, like a lot of automation around APIs.'
  },
  {
    startTime: 340.6,
    person: 'Miriam',
    text: ' Okay.'
  },
  {
    startTime: 342,
    person: 'Karol',
    text: ' Daniel, how about you?'
  },
  {
    startTime: 343.38,
    person: 'Karol',
    text: ' What do you do in CodeCentric?'
  },
  {
    startTime: 345.16,
    person: 'Daniel',
    text: " So I'm nine years at CodeCentric right now."
  },
  {
    startTime: 348.32,
    person: 'Daniel',
    text: ' So October was the date for being nine years with CodeCentric, and I did several things there.'
  },
  {
    startTime: 355.24,
    person: 'Daniel',
    text: ' So I started as an Atlassian consultant.'
  },
  {
    startTime: 358.32,
    person: 'Daniel',
    text: ' As Atlassian is not always on the green field, you have to really integrate the stuff.'
  },
  {
    startTime: 364.98,
    person: 'Daniel',
    text: ' So there was a lot of prospectuses in going integration stuff.'
  },
  {
    startTime: 369.04,
    person: 'Daniel',
    text: ' And before CodeCentric, I also did a lot of in the integration space.'
  },
  {
    startTime: 373.08,
    person: 'Daniel',
    text: ' So building catalogues around data and so on and so on.'
  },
  {
    startTime: 377.26,
    person: 'Daniel',
    text: ' And over the time I got in contact with a MuleSoft project.'
  },
  {
    startTime: 384.08,
    person: 'Daniel',
    text: ' So everybody has some kind of dark sides in it.'
  },
  {
    startTime: 388.62,
    person: 'Daniel',
    text: ' And I saw not how to actually use this, but I understood, okay, there is more.'
  },
  {
    startTime: 396.12,
    person: 'Daniel',
    text: ' So I read the book from Yoko about API as a product and so on and so on.'
  },
  {
    startTime: 401.58,
    person: 'Daniel',
    text: ' And the economy stuff.'
  },
  {
    startTime: 402.94,
    person: 'Daniel',
    text: ' So really thinking about the things and I got deeper into it.'
  },
  {
    startTime: 407.12,
    person: 'Daniel',
    text: ' I did a lot of consultancy in regards of API management systems by just using a gateway.'
  },
  {
    startTime: 413.34,
    person: 'Daniel',
    text: ' So Kong was one of the first things we did at CodeCentric.'
  },
  {
    startTime: 416.84,
    person: 'Daniel',
    text: ' A lot of times.'
  },
  {
    startTime: 418.78,
    person: 'Daniel',
    text: " And over the time I really understood, okay, it's not about the tooling."
  },
  {
    startTime: 422.58,
    person: 'Daniel',
    text: " It's really about designing stuff, understanding things."
  },
  {
    startTime: 427.1,
    person: 'Daniel',
    text: ' And our CTO did a lot of stuff with me then in the background really to grow up a topic where we talked about experiences.'
  },
  {
    startTime: 436.16,
    person: 'Daniel',
    text: ' This is also what Miriam knows.'
  },
  {
    startTime: 437.66,
    person: 'Daniel',
    text: ' And we ended now in API consulting and talking about API thinking.'
  },
  {
    startTime: 442.12,
    person: 'Daniel',
    text: ' And now we are moving on because we see a lot of things when we design these kinds of integration platforms out there with the customers we have.'
  },
  {
    startTime: 453.6,
    person: 'Daniel',
    text: " And we really see, okay, there's an impact on enterprise architecture."
  },
  {
    startTime: 458.3,
    person: 'Daniel',
    text: ' There is another meaning now in how to interact actually with systems.'
  },
  {
    startTime: 463.24,
    person: 'Daniel',
    text: " And that's why we are actually here."
  },
  {
    startTime: 466.18,
    person: 'Daniel',
    text: " So that's why the data interface correlates came up."
  },
  {
    startTime: 470.44,
    person: 'Daniel',
    text: ' So, and this is really what we are looking at.'
  },
  {
    startTime: 472.54,
    person: 'Daniel',
    text: ' So not really just, as you mentioned, to focus on tools.'
  },
  {
    startTime: 476.3,
    person: 'Daniel',
    text: ' We need to focus on really what matters on how to integrate things and really think about the integration steps there.'
  },
  {
    startTime: 485.1,
    person: 'Karol',
    text: ' Right.'
  },
  {
    startTime: 485.82,
    person: 'Karol',
    text: " So I'm gonna name some things."
  },
  {
    startTime: 489.02,
    person: 'Karol',
    text: ' You guys point me which is the area that you actually look at.'
  },
  {
    startTime: 493.86,
    person: 'Karol',
    text: " So from my perspective as an integration architect, well, I mostly work with integration platforms, but that's not all the work that I do."
  },
  {
    startTime: 501.88,
    person: 'Karol',
    text: " There's a lot more to it, including API management, including event message brokers."
  },
  {
    startTime: 509.92,
    person: 'Karol',
    text: ' I usually, when I look at integration practises or APIs and API design, I look at it from a perspective.'
  },
  {
    startTime: 518.12,
    person: 'Karol',
    text: ' Okay.'
  },
  {
    startTime: 519.14,
    person: 'Karol',
    text: ' Is this internal communication or is it externalised?'
  },
  {
    startTime: 523.059,
    person: 'Karol',
    text: ' Is that externalised communication productized or is it partner?'
  },
  {
    startTime: 527.76,
    person: 'Karol',
    text: ' Because these are two different topics there.'
  },
  {
    startTime: 532.78,
    person: 'Karol',
    text: " Then internally, is it again productized service-based because sometimes it's data, sometimes it's services."
  },
  {
    startTime: 543,
    person: 'Karol',
    text: ' And depending how long ago somebody started in the world of application integration, some of us may still remember something called service-orientated architecture, which is basically defining APIs as a business services.'
  },
  {
    startTime: 557.12,
    person: 'Karol',
    text: ' So verbs, always a post, never get or put or anything else in terms of the HTTP verbs, but always a verb-based name of a service, get customer, set customer, whatever that is.'
  },
  {
    startTime: 571.96,
    person: 'Karol',
    text: ' Now the difference is nowadays we use rest or try to be restful.'
  },
  {
    startTime: 578.24,
    person: 'Karol',
    text: " And then we have access to resources and we're modifying those resources using the HTTP verbs, right?"
  },
  {
    startTime: 586.44,
    person: 'Karol',
    text: ' As actions to what we want to do.'
  },
  {
    startTime: 589.36,
    person: 'Karol',
    text: " And then additionally, all of this is usually covered by some sort of an API management from my perspective, whether or not it's a singular system in Azure, AWS, on-premise, microservice swarm, because hard to name them otherwise than swarms at times, also often prompted by an API management."
  },
  {
    startTime: 613.64,
    person: 'Karol',
    text: " And I'm usually, as a architect, I'm usually the consumer of all those APIs of different domain systems."
  },
  {
    startTime: 621.44,
    person: 'Karol',
    text: " That's my perspective on API."
  },
  {
    startTime: 623.88,
    person: 'Karol',
    text: " So I see the APIs, sometimes they're easy to use, sometimes horrendous to use."
  },
  {
    startTime: 629.68,
    person: 'Karol',
    text: ' And my job as an architect is to make them useful.'
  },
  {
    startTime: 633.36,
    person: 'Karol',
    text: ' So probably something similar but in a completely different way.'
  },
  {
    startTime: 640.55,
    person: 'Karol',
    text: ' Yeah, something, a little bit.'
  },
  {
    startTime: 645.27,
    person: 'Daniel',
    text: ' Would you like to start?'
  },
  {
    startTime: 647.61,
    person: 'Miriam',
    text: ' Yeah, I think, I mean, I mainly agree with most things you said.'
  },
  {
    startTime: 653.25,
    person: 'Miriam',
    text: ' I think I see it more from a provider perspective most of the time because I mostly work with people providing APIs right now, right?'
  },
  {
    startTime: 662.99,
    person: 'Karol',
    text: ' Okay.'
  },
  {
    startTime: 663.31,
    person: 'Miriam',
    text: ' So I more or less support them to actually get to an API that others can understand.'
  },
  {
    startTime: 667.89,
    person: 'Miriam',
    text: " And that's hopefully intuitive to use and not just something, right?"
  },
  {
    startTime: 674.03,
    person: 'Miriam',
    text: " So, but I also realised that lots of times it's really good if you have both sides, you actually need both sides to really understand like what does the other person on the other side really need, right?"
  },
  {
    startTime: 687.25,
    person: 'Miriam',
    text: " It's not enough to only know one side of the game, right?"
  },
  {
    startTime: 690.29,
    person: 'Miriam',
    text: " You always need to take in both sides, the consumer and the provider and not just one of them and think that's it, right?"
  },
  {
    startTime: 695.75,
    person: 'Miriam',
    text: " And I think that's also quite an interesting topic that most people underestimate actually."
  },
  {
    startTime: 704.57,
    person: 'Karol',
    text: ' Probably to a very big extent, they underestimate that.'
  },
  {
    startTime: 709.37,
    person: 'Karol',
    text: ' All right, so that said, what is the problem with designing APIs?'
  },
  {
    startTime: 716.05,
    person: 'Karol',
    text: ' Can we define that kind of a problem?'
  },
  {
    startTime: 718.23,
    person: 'Karol',
    text: ' What is that?'
  },
  {
    startTime: 720.01,
    person: 'Daniel',
    text: " You're missing actually the experience because this is really something where all the ideas started actually because a lot of people talk about UX actually, so really user experience and this is somehow lacking because we have this technical aspect still there because this is what Mira mentioned."
  },
  {
    startTime: 743.17,
    person: 'Daniel',
    text: " We don't really get into the conversation with people and really asking what is needed."
  },
  {
    startTime: 748.99,
    person: 'Daniel',
    text: ' We do this when we create UIs.'
  },
  {
    startTime: 752.71,
    person: 'Daniel',
    text: ' We ask people, we do tests and all about.'
  },
  {
    startTime: 756.01,
    person: 'Daniel',
    text: ' This was really at the point where I started to learn from Uwe actually what he did in the past was something that was really missing, this experience aspect.'
  },
  {
    startTime: 767.13,
    person: 'Daniel',
    text: " And so we started saying, okay, we call it API experience to make clear, okay, we don't talk about the technical behaviour behind all that because this is clear."
  },
  {
    startTime: 776.91,
    person: 'Daniel',
    text: ' This should be clear.'
  },
  {
    startTime: 778.29,
    person: 'Daniel',
    text: ' We learned over the time that still is not clear what technical to be done.'
  },
  {
    startTime: 782.99,
    person: 'Daniel',
    text: " That's the other aspect of it, but we have to stress this experience layer more and more because when you remember MuleSoft, what is the layer above?"
  },
  {
    startTime: 792.71,
    person: 'Daniel',
    text: ' The experience layer.'
  },
  {
    startTime: 794.71,
    person: 'Daniel',
    text: ' But normally when you look at integrations built by that, they are not really experiences they provide.'
  },
  {
    startTime: 802.59,
    person: 'Karol',
    text: ' Would that tie into thinking in terms of data products then?'
  },
  {
    startTime: 808.83,
    person: 'Daniel',
    text: " Yeah, that's the other point around because then it comes into the productisation type of thing really to stress this word."
  },
  {
    startTime: 816.41,
    person: 'Daniel',
    text: " For now, it's really buzz wording to say, hi, we do APIs as a product because nobody really has in mind that it's real product management."
  },
  {
    startTime: 825.27,
    person: 'Daniel',
    text: " It's real, the capabilities of providing a real product and not just to say, okay, this is a technical somehow thing."
  },
  {
    startTime: 833.01,
    person: 'Daniel',
    text: ' I just throw it over the fence and it would work.'
  },
  {
    startTime: 835.05,
    person: 'Daniel',
    text: " So it's really that I have to do the marketing aspects into that."
  },
  {
    startTime: 839.21,
    person: 'Daniel',
    text: " I have to build up a community inside an organisation to really make sure that everybody understands what I'm doing there."
  },
  {
    startTime: 845.69,
    person: 'Daniel',
    text: ' So many, many perspectives there that we actually know from this classical product type marketing fluff.'
  },
  {
    startTime: 853.89,
    person: 'Miriam',
    text: ' Yeah, to also add something to the user experience thing.'
  },
  {
    startTime: 858.27,
    person: 'Miriam',
    text: " I think, I mean, that's why I have on LinkedIn also my slogan, APIs are user interfaces too, because I think most people forget for them, they're a technical asset, right?"
  },
  {
    startTime: 867.49,
    person: 'Miriam',
    text: " So pretty easy, you do something technical, you're done, but that's not the issue most of the time."
  },
  {
    startTime: 872.23,
    person: 'Miriam',
    text: " There are lots of other things that you need to know to design a really good API and it's not only technical stuff."
  },
  {
    startTime: 878.49,
    person: 'Miriam',
    text: " And I think most people forget, especially for an API, that there's also a user on the other side."
  },
  {
    startTime: 885.75,
    person: 'Miriam',
    text: " I mean, it's easy."
  },
  {
    startTime: 886.95,
    person: 'Miriam',
    text: " We've all been developers, right?"
  },
  {
    startTime: 888.47,
    person: 'Miriam',
    text: ' We think, oh, I know what a developer needs, right?'
  },
  {
    startTime: 891.75,
    person: 'Karol',
    text: ' Right.'
  },
  {
    startTime: 892.07,
    person: 'Miriam',
    text: ' Do I really know?'
  },
  {
    startTime: 893.05,
    person: 'Miriam',
    text: ' I mean, I worked with teams that were SAP developers on the other side, you had a mobile developer.'
  },
  {
    startTime: 899.23,
    person: 'Miriam',
    text: ' They had nothing in common from how they work, right?'
  },
  {
    startTime: 901.91,
    person: 'Miriam',
    text: ' But they just think the other person will know what to do because hell, everyone knows this function module in SAP could possibly go wrong, right?'
  },
  {
    startTime: 909.83,
    person: 'Miriam',
    text: ' Everybody knows.'
  },
  {
    startTime: 910.89,
    person: 'Karol',
    text: ' You touched a very painful memory here because I used to integrate SAP R3 back in the day.'
  },
  {
    startTime: 919.21,
    person: 'Karol',
    text: ' And that used to be with very specialised adapters that were on JMS. The RFCs were horrendous to work with and the debugging of that was horrendous.'
  },
  {
    startTime: 933.39,
    person: 'Karol',
    text: ' And understanding the interface, I mean, I get it.'
  },
  {
    startTime: 939.73,
    person: 'Karol',
    text: ' Germans wrote it for use within Germany.'
  },
  {
    startTime: 943.49,
    person: 'Karol',
    text: ' That was obvious.'
  },
  {
    startTime: 945.85,
    person: 'Karol',
    text: " Well, that's the story I get from SAP people, all right?"
  },
  {
    startTime: 948.63,
    person: 'Karol',
    text: ' Just to be clear, I work with a colleague from SAP.'
  },
  {
    startTime: 951.21,
    person: 'Karol',
    text: " That's usually the kind of story that I said."
  },
  {
    startTime: 953.65,
    person: 'Karol',
    text: ' And then it sprawled all over the place, right?'
  },
  {
    startTime: 956.53,
    person: 'Karol',
    text: " So it sprawled, but then I'm sitting there in Poland trying to integrate R3 into the ecosystem."
  },
  {
    startTime: 963.45,
    person: 'Karol',
    text: " And I'm looking at this interface and all I see is gibberish because these are abbreviations of German words that I have no idea what they mean."
  },
  {
    startTime: 970.95,
    person: 'Karol',
    text: ' Only people from SAP actually knew what the hell that means.'
  },
  {
    startTime: 973.93,
    person: 'Miriam',
    text: " So I'm like- Believe me, it's not only a language issue."
  },
  {
    startTime: 977.87,
    person: 'Miriam',
    text: " It's not only a language issue."
  },
  {
    startTime: 979.49,
    person: 'Karol',
    text: ' Oh, no, absolutely.'
  },
  {
    startTime: 980.59,
    person: 'Karol',
    text: ' Not only a language issue, just using abbreviations.'
  },
  {
    startTime: 983.25,
    person: 'Karol',
    text: ' Who in their sane mind uses abbreviations in the data model of an API?'
  },
  {
    startTime: 988.57,
    person: 'Miriam',
    text: ' Yes.'
  },
  {
    startTime: 989.55,
    person: 'Karol',
    text: ' If they were, at least if they were full words in German, I would take a Google translator or something like that or a dictionary and translate them.'
  },
  {
    startTime: 996.49,
    person: 'Karol',
    text: ' That would be usable because I could actually decipher them.'
  },
  {
    startTime: 1000.81,
    person: 'Karol',
    text: " What was there, I had to just literally grab an SME and explain to me, please either give me a data set that works with this data model or explain to me what I'm doing because I have no idea."
  },
  {
    startTime: 1013.93,
    person: 'Miriam',
    text: " Yeah, that's what the team actually told me."
  },
  {
    startTime: 1015.93,
    person: 'Miriam',
    text: ' You know what they told me?'
  },
  {
    startTime: 1017.09,
    person: 'Miriam',
    text: ' If someone wants to use our API, they have to call us.'
  },
  {
    startTime: 1021.51,
    person: 'Miriam',
    text: " And I was like, well, we're trying to do intuitive APIs."
  },
  {
    startTime: 1024.67,
    person: 'Miriam',
    text: ' Please think a minute.'
  },
  {
    startTime: 1025.71,
    person: 'Miriam',
    text: " I don't think you want anyone to call you to use your API."
  },
  {
    startTime: 1030.43,
    person: 'Karol',
    text: ' That is basically the death of a product nowadays.'
  },
  {
    startTime: 1034.849,
    person: 'Karol',
    text: ' At least with smaller companies because SAP is too big to die off like that.'
  },
  {
    startTime: 1039.069,
    person: 'Karol',
    text: ' But I think that if a small digital product would do such a thing, they would not have any adoption.'
  },
  {
    startTime: 1049.88,
    person: 'Karol',
    text: ' You touched upon an interesting thing and I pondered upon user experience as well.'
  },
  {
    startTime: 1056.04,
    person: 'Karol',
    text: " There is a lovely UX law that is, I think it's completely underestimated in software design as it is and not meaning front-end only."
  },
  {
    startTime: 1066.48,
    person: 'Karol',
    text: " And I'm gonna just shoot a slide from my training deck on the screen for a moment."
  },
  {
    startTime: 1074.82,
    person: 'Karol',
    text: " So there is this lovely law called Tesla's law."
  },
  {
    startTime: 1080.62,
    person: 'Karol',
    text: ' And yeah, every application must have an inherent amount of irreducible complexity.'
  },
  {
    startTime: 1086.76,
    person: 'Karol',
    text: ' The only question is who will deal with that, right?'
  },
  {
    startTime: 1089.94,
    person: 'Karol',
    text: " So what happens there is if I look at it from an interoperability perspective, we're moving around complexity or adding complexity by doing bad API design."
  },
  {
    startTime: 1104.66,
    person: 'Karol',
    text: ' And if we talk about interoperability from my perspective as an integration architect, well, okay, if we talk APIs, yeah, sure.'
  },
  {
    startTime: 1112.08,
    person: 'Karol',
    text: " If I put an integration platform, I move a lot of inherent complexity of communication to the integration platform, which makes life easier for the domain system, but this still doesn't fix the quality of an API."
  },
  {
    startTime: 1123.66,
    person: 'Karol',
    text: ' So that moves the added complexity of a bad API towards the integration platform that has to consume that API and understand that API.'
  },
  {
    startTime: 1131.56,
    person: 'Miriam',
    text: " Yeah, yeah, I think if I talk to developers recently, it's always like, oh, we don't want to do that on the back end, that's so much work."
  },
  {
    startTime: 1140.62,
    person: 'Miriam',
    text: ' And I say, well, then who does it?'
  },
  {
    startTime: 1142.38,
    person: 'Miriam',
    text: ' Then someone else on the front end needs to do it or on the other side.'
  },
  {
    startTime: 1145.42,
    person: 'Miriam',
    text: " I mean, if you don't do it, someone else has to do it."
  },
  {
    startTime: 1147.86,
    person: 'Miriam',
    text: " You're just moving the work somewhere else."
  },
  {
    startTime: 1149.64,
    person: 'Miriam',
    text: " That's exactly that."
  },
  {
    startTime: 1151.06,
    person: 'Karol',
    text: " You're moving inherent complexity."
  },
  {
    startTime: 1153.36,
    person: 'Miriam',
    text: ' Yeah, exactly.'
  },
  {
    startTime: 1154.78,
    person: 'Miriam',
    text: " And I like that you cited UX law because I think we didn't talk about it before, but my PhD is actually in human-computer interaction."
  },
  {
    startTime: 1162.02,
    person: 'Miriam',
    text: " So that's very much why I like API design so much."
  },
  {
    startTime: 1165.88,
    person: 'Miriam',
    text: " And I like trying to do it in a good way because it's like in my DNA, right?"
  },
  {
    startTime: 1172.82,
    person: 'Karol',
    text: ' It is user experience.'
  },
  {
    startTime: 1174.96,
    person: 'Karol',
    text: " It doesn't translate to user experiences and clickable in the front end because that's called developer experience."
  },
  {
    startTime: 1180.92,
    person: 'Karol',
    text: ' So the experience of a developer trying to connect their system to whatever array of APIs we have.'
  },
  {
    startTime: 1187.22,
    person: 'Karol',
    text: ' And this is still somewhat of a user experience just from a technical perspective, not from a actual productized usage perspective as the end user, the consumer clicking on the app, right?'
  },
  {
    startTime: 1200.76,
    person: 'Karol',
    text: " That's the difference there, but it's still the same user experience in that sense."
  },
  {
    startTime: 1205.88,
    person: 'Karol',
    text: " And as I work with integration platforms in large environments where we have a variety of systems, SaaS solutions, legacy, on-premise, in-cloud, hybrid, well, it makes sense to put that complexity to the integration platform because there's too much to handle rather than solve it on the backend."
  },
  {
    startTime: 1228.98,
    person: 'Karol',
    text: ' And of course the backend quality matters.'
  },
  {
    startTime: 1231.78,
    person: 'Karol',
    text: " So if somebody is starting to expose to the integration platform a relational database table by table, well, that's not good API design, but it differs for a domain system or a productized system when we externalise our APIs."
  },
  {
    startTime: 1246.96,
    person: 'Karol',
    text: " Now, because I have no experience in externalising APIs to clients, that's not my scope of work, tell us perhaps how does that look like from that productized perspective?"
  },
  {
    startTime: 1261.82,
    person: 'Daniel',
    text: " Yeah, it's actually when we think about design because this is something we actually didn't spot on because what we do with API thinking is really look at the design perspectives."
  },
  {
    startTime: 1274.18,
    person: 'Daniel',
    text: " And to really say, to go into this productisation type of thing, I think it's mostly important that we reference to Dieter Rams in regards of design."
  },
  {
    startTime: 1285.9,
    person: 'Daniel',
    text: ' So somebody who was really deep into designing good things actually like a calculator from Brown and other things, a shaver.'
  },
  {
    startTime: 1296.88,
    person: 'Daniel',
    text: ' And also he has been acknowledged by Apple for the iPhone design and so on.'
  },
  {
    startTime: 1302.72,
    person: 'Daniel',
    text: " So it's really interesting that we actually had a look at it because you mentioned the UX and UI laws that are existing, there are even more."
  },
  {
    startTime: 1313.46,
    person: 'Daniel',
    text: ' So Nielsen and Muller are also there.'
  },
  {
    startTime: 1315.82,
    person: 'Daniel',
    text: ' And this is what really matters in the end to build these experience to the outside world.'
  },
  {
    startTime: 1322.68,
    person: 'Daniel',
    text: ' So even thinking in a productized way, because I worked or wanted to start to work with a payment company and they had a key value API and they thought it would be the best idea to productize that.'
  },
  {
    startTime: 1337.96,
    person: 'Daniel',
    text: ' And this was really something that felt quite hard because it was in the beginning.'
  },
  {
    startTime: 1343.18,
    person: 'Daniel',
    text: ' So it was around 2019 before Corona, I think also.'
  },
  {
    startTime: 1347.88,
    person: 'Daniel',
    text: ' And it was quite hard because we were just starting with the thing.'
  },
  {
    startTime: 1350.88,
    person: 'Daniel',
    text: ' So Mir was actually not onboarded into this topic.'
  },
  {
    startTime: 1355.1,
    person: 'Daniel',
    text: " And it was quite hard to make people understand that there are so many differences in there because there's no literature about it."
  },
  {
    startTime: 1362.56,
    person: 'Daniel',
    text: ' And people always reference into it.'
  },
  {
    startTime: 1364.7,
    person: 'Daniel',
    text: " So it's literature about API management systems, it's about RESTful APIs and so on and so on, but not all the things really in regards of good designing stuff."
  },
  {
    startTime: 1375.5,
    person: 'Daniel',
    text: " Because thinking about technical stuff, so having RESTful web APIs or whatever, it's totally different than thinking about, okay, what really needs the person outside of our some kind bounded context to really understand what we provide with our data actually."
  },
  {
    startTime: 1395.72,
    person: 'Daniel',
    text: " And this is something where I see there's still a lot of things around."
  },
  {
    startTime: 1401.46,
    person: 'Daniel',
    text: ' So you really have to go into the field and really ask the people.'
  },
  {
    startTime: 1408.58,
    person: 'Daniel',
    text: ' And then bring the stuff up there.'
  },
  {
    startTime: 1412.56,
    person: 'Daniel',
    text: ' So this is why we got really deep into this API thinking stuff there and really adopting things from that perspective.'
  },
  {
    startTime: 1424.38,
    person: 'Daniel',
    text: ' Okay.'
  },
  {
    startTime: 1425.46,
    person: 'Daniel',
    text: ' This is what I think because we strive design, but really to make it clear, because it was always the perspective on this integration platforms, you mentioned that.'
  },
  {
    startTime: 1438.68,
    person: 'Daniel',
    text: " And so we talked with a lot of people and when you go into real integrations, it's always this EDI topic."
  },
  {
    startTime: 1447.24,
    person: 'Daniel',
    text: " Yeah, and it's quite hard to make it visible to people."
  },
  {
    startTime: 1451.26,
    person: 'Daniel',
    text: ' And then some people say, oh yeah, we have to do EDI because people actually in retail use it a lot.'
  },
  {
    startTime: 1457.76,
    person: 'Daniel',
    text: ' And this is where it all goes there.'
  },
  {
    startTime: 1461.3,
    person: 'Daniel',
    text: ' And in the end, there is also the principle really, and this is the principle, good design is as little design as possible.'
  },
  {
    startTime: 1469.46,
    person: 'Daniel',
    text: " So I don't have to reinvent the wheel to get things to work."
  },
  {
    startTime: 1472.8,
    person: 'Daniel',
    text: " So I don't have to think in a new solution or build a bluster-full API when there is a need for real EDI exchange."
  },
  {
    startTime: 1481.92,
    person: 'Daniel',
    text: " So there are still products in the space that do this and you don't have to do the things and say, okay, let's build an API up on this and have it a shiny REST interface or something like that."
  },
  {
    startTime: 1495.98,
    person: 'Daniel',
    text: " So it's really about to really keep the focus on what the customer or the consumer on the other side really needs there."
  },
  {
    startTime: 1505.02,
    person: 'Karol',
    text: " Because in that sense, it's all about doing proper trade-offs, which basically means that if we want to design properly or architect properly for a business problem, we're not looking for the best solution because that's gonna be over-engineering things."
  },
  {
    startTime: 1520.2,
    person: 'Karol',
    text: " We're looking for the least worst solution."
  },
  {
    startTime: 1522.6,
    person: 'Karol',
    text: ' So the one that will be sufficient to solve the problem and nothing more.'
  },
  {
    startTime: 1528.7,
    person: 'Karol',
    text: " And if we need more, then we'll do more, but we don't know if we need more yet in that sense."
  },
  {
    startTime: 1534.68,
    person: 'Miriam',
    text: " But I think my experience with that is, especially with REST, people are so focused on it, they don't think of anything else, right?"
  },
  {
    startTime: 1544.82,
    person: 'Miriam',
    text: ' You will have people and talk to them and they say, we definitely need a REST API.'
  },
  {
    startTime: 1549.04,
    person: 'Miriam',
    text: ' This is what everyone is doing.'
  },
  {
    startTime: 1551.1,
    person: 'Miriam',
    text: ' We need to do it too.'
  },
  {
    startTime: 1552.66,
    person: 'Miriam',
    text: " And then if you're talking to them and you're saying, well, wait a second, what do you want to do?"
  },
  {
    startTime: 1556.6,
    person: 'Miriam',
    text: ' Why do you want to do REST?'
  },
  {
    startTime: 1558.04,
    person: 'Miriam',
    text: " Most people don't even know how old it is, where it comes from, why you need it."
  },
  {
    startTime: 1563.24,
    person: 'Miriam',
    text: ' They just heard it somewhere, they picked it up.'
  },
  {
    startTime: 1565.54,
    person: 'Miriam',
    text: " They say, everyone's doing that, we need to do it too."
  },
  {
    startTime: 1567.7,
    person: 'Miriam',
    text: " And I said, well, wait a minute, let's see what you want to do."
  },
  {
    startTime: 1570.76,
    person: 'Miriam',
    text: ' And then we can discuss whether you need REST or not, right?'
  },
  {
    startTime: 1574.72,
    person: 'Karol',
    text: ' I mean, the beginnings of REST. I remember the first occurrences because REST was designed for communication back and fronted, right?'
  },
  {
    startTime: 1584.94,
    person: 'Karol',
    text: " So it wasn't designed per se for system to system interoperability."
  },
  {
    startTime: 1591.1,
    person: 'Karol',
    text: " And when people started using REST for a system to system interoperability, it wasn't mature enough yet to do so."
  },
  {
    startTime: 1599.14,
    person: 'Karol',
    text: ' So no data validation, no support in libraries, no proper support for simple types.'
  },
  {
    startTime: 1606.16,
    person: 'Karol',
    text: ' Everything was a string.'
  },
  {
    startTime: 1607.7,
    person: 'Karol',
    text: ' And no support for a regular expressions, no support for enumeration, etc.'
  },
  {
    startTime: 1613.48,
    person: 'Karol',
    text: " Now it's a lot better."
  },
  {
    startTime: 1614.78,
    person: 'Karol',
    text: ' Now we can do all those things with a open API specification and RAML if somebody is using MuleSoft.'
  },
  {
    startTime: 1623.04,
    person: 'Karol',
    text: ' But a few years ago, that was a nightmare to do that over REST where I was looking at a XSD and a WSDL definition of a SOAP service.'
  },
  {
    startTime: 1633.68,
    person: 'Karol',
    text: " It's like, I can do so much better in terms of the quality of an API that will be better defined, properly defined and giving me a proper service."
  },
  {
    startTime: 1645.22,
    person: 'Karol',
    text: " And here I'm like, how am I supposed to even validate that where I don't have even the tools to do so?"
  },
  {
    startTime: 1650.46,
    person: 'Karol',
    text: " And still, okay, it's a lot better nowadays, but still in certain cases, XSD wins over anything REST related, well, JSON related per se because REST doesn't exactly mean JSON, it means verb use over HTTP with a specific data format, which also some people don't understand that REST doesn't mean JSON."
  },
  {
    startTime: 1674.54,
    person: 'Karol',
    text: ' It may mean as well, XML or well, you could put any other format for that sake.'
  },
  {
    startTime: 1682.38,
    person: 'Miriam',
    text: " I mean, most APIs that claim they are REST are not really REST because if you don't do hypermedia, you know."
  },
  {
    startTime: 1690.1,
    person: 'Karol',
    text: " And that's a conversation I had on LinkedIn recently."
  },
  {
    startTime: 1693.24,
    person: 'Miriam',
    text: ' Yeah.'
  },
  {
    startTime: 1693.56,
    person: 'Karol',
    text: " It's actually not a true statement because there's difference in doing a REST API and doing a RESTful API."
  },
  {
    startTime: 1703.4,
    person: 'Miriam',
    text: " That's correct."
  },
  {
    startTime: 1704.22,
    person: 'Karol',
    text: ' These are two different things.'
  },
  {
    startTime: 1705.44,
    person: 'Miriam',
    text: ' Yes.'
  },
  {
    startTime: 1705.92,
    person: 'Karol',
    text: " RESTful API is, and we touched upon this just before the stream, so I think I'm gonna just Google it, the Richardson maturity model, right?"
  },
  {
    startTime: 1715.54,
    person: 'Miriam',
    text: ' Yeah.'
  },
  {
    startTime: 1716.12,
    person: 'Karol',
    text: " So a RESTful API is the third level of the Richardson maturity model, but that doesn't mean that the second level or the first level are not REST. They are REST. They can be REST, but they're not RESTful."
  },
  {
    startTime: 1730.12,
    person: 'Karol',
    text: ' RESTful is hypermedia.'
  },
  {
    startTime: 1731.58,
    person: 'Karol',
    text: ' And a lot of people claim or dilute this, that REST means RESTful.'
  },
  {
    startTime: 1738.12,
    person: 'Karol',
    text: " No, it doesn't."
  },
  {
    startTime: 1741.04,
    person: 'Miriam',
    text: ' Yeah.'
  },
  {
    startTime: 1741.36,
    person: 'Miriam',
    text: ' I think I like most what one participant of one of our training said once.'
  },
  {
    startTime: 1749.1,
    person: 'Miriam',
    text: " And I think that's one thing we also quote in our trainings all the time."
  },
  {
    startTime: 1752.26,
    person: 'Miriam',
    text: ' And I liked it very much.'
  },
  {
    startTime: 1753.54,
    person: 'Miriam',
    text: " She said, if you're honest, we're all just doing JSON via HTTP."
  },
  {
    startTime: 1759.98,
    person: 'Miriam',
    text: ' I mean, right?'
  },
  {
    startTime: 1761.52,
    person: 'Miriam',
    text: " We're not doing REST. We're doing JSON-based HTTP APIs."
  },
  {
    startTime: 1766.32,
    person: 'Miriam',
    text: " And that's what we actually do, right?"
  },
  {
    startTime: 1768.28,
    person: 'Miriam',
    text: ' Most of the time.'
  },
  {
    startTime: 1770.86,
    person: 'Karol',
    text: " Well, again, that's REST. That's not RESTful."
  },
  {
    startTime: 1775.04,
    person: 'Karol',
    text: " So we're doing REST. We're not doing RESTful, definitely."
  },
  {
    startTime: 1778.24,
    person: 'Karol',
    text: " And that's the problem here."
  },
  {
    startTime: 1780.14,
    person: 'Karol',
    text: ' And people forget about that.'
  },
  {
    startTime: 1781.64,
    person: 'Karol',
    text: ' I already know people that when they hear XML or SOAP, they get, why?'
  },
  {
    startTime: 1790.92,
    person: 'Karol',
    text: " It's like, these are valid formats."
  },
  {
    startTime: 1793.54,
    person: 'Karol',
    text: ' We still use XML everywhere.'
  },
  {
    startTime: 1796.1,
    person: 'Karol',
    text: " Most of the low-code tools that I use or my colleagues use, they're XML-based."
  },
  {
    startTime: 1802.46,
    person: 'Karol',
    text: " They're defined with XMLs."
  },
  {
    startTime: 1804.24,
    person: 'Karol',
    text: ' A lot of configuration for a lot of things is defined in XMLs because it gives that rigidity that you need for those kind of definitions.'
  },
  {
    startTime: 1813.44,
    person: 'Karol',
    text: ' And especially that, not sure, but I think that still there is a lacking space in using parts of a OpenAPI specification outside of an API because XSD is very much usable outside of an API.'
  },
  {
    startTime: 1830.18,
    person: 'Karol',
    text: ' You can use that for data validation.'
  },
  {
    startTime: 1832.32,
    person: 'Karol',
    text: ' You can use that within your code, somewhere in Java, C-sharp, whatever that is, and use it with XPaths, XSLT to transform data.'
  },
  {
    startTime: 1841.56,
    person: 'Karol',
    text: ' Whereas using the same with OpenAPI spec or RAML is not exactly yet available, at least to my knowledge.'
  },
  {
    startTime: 1850.5,
    person: 'Karol',
    text: " Maybe I'm wrong because I haven't done research in that space for a longer time, but that's, again, the difference, right?"
  },
  {
    startTime: 1859.38,
    person: 'Daniel',
    text: " Yeah, this data thing, I think it's also on another part because for most people, it's not really clear what they actually share."
  },
  {
    startTime: 1869.12,
    person: 'Daniel',
    text: " So even if they would do SOAP or whatever, it's not really clear what they're actually sharing there in regards of data."
  },
  {
    startTime: 1877.18,
    person: 'Daniel',
    text: " That's another point."
  },
  {
    startTime: 1878.48,
    person: 'Daniel',
    text: " That's why we put it in the methodology with API thinking, what we prefer and bring to customers we have in this perspective, because it's really relevant because most people are not really aware what is being shared actually, or don't know who is the owner of this data set actually, or if is this data set somewhere defined."
  },
  {
    startTime: 1902.96,
    person: 'Daniel',
    text: " So when we talk about data catalogues and all the things there, so I'm not dropping this mesh thing because this opens another bottle there, but in the end it's really something that things we do are actually quite old, but it feels we are not mature enough to really use them, or we didn't understand them right."
  },
  {
    startTime: 1929.55,
    person: 'Daniel',
    text: ' So this is what we see when we go into the field.'
  },
  {
    startTime: 1933.79,
    person: 'Daniel',
    text: " There's always this tool clashing."
  },
  {
    startTime: 1936.85,
    person: 'Daniel',
    text: " So even when we go into the perspective of REST versus events, it's always that you have a RESTful integration platform versus the event broker or something like that."
  },
  {
    startTime: 1952.53,
    person: 'Daniel',
    text: ' And this is really, really interesting in a bad way on the other side.'
  },
  {
    startTime: 1958.51,
    person: 'Daniel',
    text: " And I think with this, even when we show up this maturity model, it's always confusing for some people that there is something, and we make fun out of it because we point the date on the slide deck which we use."
  },
  {
    startTime: 1975.73,
    person: 'Daniel',
    text: " So it's 2008."
  },
  {
    startTime: 1978.07,
    person: 'Daniel',
    text: " And I think for most people it's not clear that this model has this mature age actually."
  },
  {
    startTime: 1984.37,
    person: 'Karol',
    text: ' Yeah.'
  },
  {
    startTime: 1985.01,
    person: 'Karol',
    text: " So Richardson maturity model, I don't know the date on that, but basically it was on Martin Fowler's blog in 2010."
  },
  {
    startTime: 1992.43,
    person: 'Karol',
    text: ' That was the link, the QR code you saw on screen just a second ago.'
  },
  {
    startTime: 1996.81,
    person: 'Karol',
    text: ' The photo there, that was not Richardson, that was Martin Fowler nowadays, just to be clear.'
  },
  {
    startTime: 2003.51,
    person: 'Karol',
    text: " So it's very old."
  },
  {
    startTime: 2005.57,
    person: 'Karol',
    text: ' REST itself is very old.'
  },
  {
    startTime: 2008.55,
    person: 'Karol',
    text: ' When you got here, 25.'
  },
  {
    startTime: 2011.29,
    person: 'Karol',
    text: ' Yeah.'
  },
  {
    startTime: 2012.41,
    person: 'Karol',
    text: ' SOAP is quite older in that sense.'
  },
  {
    startTime: 2015.77,
    person: 'Karol',
    text: ' If we look at service-orientated architecture, the pinnacle of service-orientated architecture was 2000s, and SOAP is much older than that.'
  },
  {
    startTime: 2024.33,
    person: 'Karol',
    text: ' XML is extremely old already from our perspectives, right?'
  },
  {
    startTime: 2028.67,
    person: 'Karol',
    text: " So people don't understand that these standards are there, but we just didn't grow into them yet in that sense."
  },
  {
    startTime: 2037.97,
    person: 'Karol',
    text: " Just as a small segue, I literally saw a YouTube short today, just before the stream, where a girl was saying, I told a teenager today that I'm older than Google."
  },
  {
    startTime: 2048.63,
    person: 'Karol',
    text: " And the teenager was like, that's not possible."
  },
  {
    startTime: 2051.87,
    person: 'Karol',
    text: ' Yeah, if you were born before 1998, it is possible.'
  },
  {
    startTime: 2055.17,
    person: 'Karol',
    text: ' So all of us, I think are older than Google here.'
  },
  {
    startTime: 2059.73,
    person: 'Karol',
    text: ' Well, it is what it is.'
  },
  {
    startTime: 2061.429,
    person: 'Karol',
    text: " So people don't know."
  },
  {
    startTime: 2064.71,
    person: 'Miriam',
    text: ' My favourite story regarding this is always then, when I went to school, I had a card for the telephone outside the school because I had no mobile phone.'
  },
  {
    startTime: 2073.929,
    person: 'Miriam',
    text: ' So if the school would like, you know, I need to go home early because a teacher was ill or whatever happened, I would go to the phone box, put in my card and call my mom, you know?'
  },
  {
    startTime: 2085.429,
    person: 'Miriam',
    text: " And everyone's like, if you tell that to any young people today, they're like, what?"
  },
  {
    startTime: 2090.07,
    person: 'Miriam',
    text: " And I'm like, yeah, well, that's how it was, right?"
  },
  {
    startTime: 2093.31,
    person: 'Miriam',
    text: ' There was no mobile phone that you could just call anyone.'
  },
  {
    startTime: 2096.07,
    person: 'Miriam',
    text: " You would like need to check if someone's home or if you need a key, you would need a phone card and you would go out to this one phone box in front of the school, right?"
  },
  {
    startTime: 2105.51,
    person: 'Karol',
    text: " I'm still waiting."
  },
  {
    startTime: 2106.65,
    person: 'Karol',
    text: " I'm still waiting with my kids to show them a rotary phone, you know?"
  },
  {
    startTime: 2111.57,
    person: 'Karol',
    text: ' And properly connected somewhere.'
  },
  {
    startTime: 2114.25,
    person: 'Karol',
    text: " I don't know if I even have cables to connect the phone in my house nowadays."
  },
  {
    startTime: 2118.65,
    person: 'Karol',
    text: ' But to connect it and tell them to call somebody.'
  },
  {
    startTime: 2122.79,
    person: 'Karol',
    text: " I'm curious what will happen in the few years that they will be able actually to understand how to use a phone like that."
  },
  {
    startTime: 2129.13,
    person: 'Karol',
    text: " It's like, that's gonna be interesting."
  },
  {
    startTime: 2131.15,
    person: 'Karol',
    text: ' People have no idea.'
  },
  {
    startTime: 2132.39,
    person: 'Karol',
    text: " If we look at specification of XML, I don't know if this is, I would have to look at that W3C, but basically 1996."
  },
  {
    startTime: 2144.95,
    person: 'Daniel',
    text: ' Yeah, that was also on my mind.'
  },
  {
    startTime: 2146.99,
    person: 'Daniel',
    text: ' So there they are.'
  },
  {
    startTime: 2149.53,
    person: 'Karol',
    text: " So it's extremely old."
  },
  {
    startTime: 2152.45,
    person: 'Karol',
    text: " And if you dig in ever, try to dig into the original specification for XML one, there's plenty of things that were solved out of the box in the first specification."
  },
  {
    startTime: 2163.73,
    person: 'Karol',
    text: ' That if you look at the early stages of Jason and Swagger, not solved at all.'
  },
  {
    startTime: 2172.13,
    person: 'Karol',
    text: ' Nobody thought even about these problems at the beginning of those formats.'
  },
  {
    startTime: 2178.07,
    person: 'Karol',
    text: " So it's difficult in that sense."
  },
  {
    startTime: 2180.87,
    person: 'Karol',
    text: " We're trying to reinvent the wheel and I get bandwidth costs."
  },
  {
    startTime: 2184.09,
    person: 'Karol',
    text: " So that's why we have Jason because it's lighter than XML."
  },
  {
    startTime: 2188.63,
    person: 'Karol',
    text: " But it's the question of what we use that for."
  },
  {
    startTime: 2194.54,
    person: 'Karol',
    text: ' But going back to designing API.'
  },
  {
    startTime: 2197.68,
    person: 'Karol',
    text: ' So just put the perspective on things.'
  },
  {
    startTime: 2201.88,
    person: 'Karol',
    text: ' What would you consider a bad design of an API?'
  },
  {
    startTime: 2207.39,
    person: 'Karol',
    text: ' I know, Pandora box.'
  },
  {
    startTime: 2209.39,
    person: 'Karol',
    text: " Let's open it."
  },
  {
    startTime: 2213.87,
    person: 'Miriam',
    text: ' Bad in what sense?'
  },
  {
    startTime: 2215.67,
    person: 'Miriam',
    text: ' I mean.'
  },
  {
    startTime: 2220.23,
    person: 'Karol',
    text: " Okay, let's categorise what sense we can have."
  },
  {
    startTime: 2224.31,
    person: 'Miriam',
    text: ' Okay, so one bad thing.'
  },
  {
    startTime: 2226.33,
    person: 'Miriam',
    text: " I don't know whether anyone of the ones who's listening in ever tried to use the Azure DevOps API."
  },
  {
    startTime: 2231.07,
    person: 'Miriam',
    text: " That's my favourite API to use because all the examples are wrong."
  },
  {
    startTime: 2236.81,
    person: 'Miriam',
    text: " You don't have any example of a valid request body."
  },
  {
    startTime: 2239.43,
    person: 'Miriam',
    text: " So you're just doing trial and error until you guess the correct request body."
  },
  {
    startTime: 2243.53,
    person: 'Miriam',
    text: " So that's something I consider really bad quality because guessing request bodies is nothing I like to do actually."
  },
  {
    startTime: 2251.37,
    person: 'Miriam',
    text: ' I mean, it depends on the endpoints.'
  },
  {
    startTime: 2253.27,
    person: 'Miriam',
    text: ' There are some that are maybe used by lots of, but if you really want to automate stuff, you need to go to many endpoints and then it gets funny.'
  },
  {
    startTime: 2260.33,
    person: 'Miriam',
    text: " So that's one thing."
  },
  {
    startTime: 2262.17,
    person: 'Miriam',
    text: ' Another really bad thing I saw was from a, I think it was a pizza delivering API or something like that.'
  },
  {
    startTime: 2269.29,
    person: 'Miriam',
    text: ' And it was a real example from someone who showed it to me.'
  },
  {
    startTime: 2271.85,
    person: 'Miriam',
    text: ' So the API was used for ordering the pizza in a front end.'
  },
  {
    startTime: 2277.11,
    person: 'Miriam',
    text: ' And the IDs were integer, which means you could just take the next integer and then get the credit card details plus address from the person who ordered the pizza, where I say like, well, this is like, I mean, this is bad design on another level.'
  },
  {
    startTime: 2290.91,
    person: 'Miriam',
    text: " It's a security related fail, but that was interesting too."
  },
  {
    startTime: 2294.47,
    person: 'Miriam',
    text: ' So integer SIDs is usually always like bad.'
  },
  {
    startTime: 2299.11,
    person: 'Miriam',
    text: ' And what else?'
  },
  {
    startTime: 2300.45,
    person: 'Miriam',
    text: " All our three APIs, basically more or less, if people don't know how to convert a Boolean to a correct Boolean, and then you get an X or an empty string and you have to guess whether this is now a Boolean or not in SAP, for example."
  },
  {
    startTime: 2314.33,
    person: 'Karol',
    text: ' Okay, okay, fair enough.'
  },
  {
    startTime: 2316.57,
    person: 'Miriam',
    text: ' Microsoft date timestamps, also very nice with our three systems.'
  },
  {
    startTime: 2321.37,
    person: 'Miriam',
    text: ' Timestamps that nobody can convert because nobody knows how they work, right?'
  },
  {
    startTime: 2325.49,
    person: 'Miriam',
    text: ' Why are there standards for timestamps if we can invent our own, right?'
  },
  {
    startTime: 2329.87,
    person: 'Miriam',
    text: ' But these are all minor things, like Daniel, you want to add something?'
  },
  {
    startTime: 2334.07,
    person: 'Daniel',
    text: ' Quite interesting because it was all technical in terms of that.'
  },
  {
    startTime: 2340.17,
    person: 'Miriam',
    text: ' Yeah.'
  },
  {
    startTime: 2340.71,
    person: 'Daniel',
    text: ' Okay.'
  },
  {
    startTime: 2341.57,
    person: 'Daniel',
    text: ' For me, this wording of good and bad really depends on the scope and actually on the type of organisation of the structure, the people involved actually.'
  },
  {
    startTime: 2356.03,
    person: 'Daniel',
    text: ' So there can be a really bad design for somebody outside of the scope, but it can be the best and good design inside the scope.'
  },
  {
    startTime: 2366.35,
    person: 'Daniel',
    text: ' And now we are actually touching indirectly the DIQs somehow.'
  },
  {
    startTime: 2371.27,
    person: 'Daniel',
    text: ' Okay.'
  },
  {
    startTime: 2372.07,
    person: 'Daniel',
    text: " This is where it actually all came from somehow because we saw things about, okay, actually for this purpose, it's good, but it's not reusable."
  },
  {
    startTime: 2383.43,
    person: 'Daniel',
    text: " So we really have to think about, okay, for the scope, for the bounded context, it's a good design."
  },
  {
    startTime: 2390.35,
    person: 'Daniel',
    text: ' So no discussions about that.'
  },
  {
    startTime: 2392.55,
    person: 'Daniel',
    text: ' Because a lot of people are triggered by this good design.'
  },
  {
    startTime: 2396.59,
    person: 'Daniel',
    text: ' They think, okay, there is some kind of guideline book, somewhere somebody wrote this, everybody adds something to that.'
  },
  {
    startTime: 2406.15,
    person: 'Daniel',
    text: " And that's why a lot of people also look at guidelines from other companies to really get a glimpse what good API design can be."
  },
  {
    startTime: 2415.47,
    person: 'Daniel',
    text: ' And this is the perspective I have on this because moving away from the technology, because it depends.'
  },
  {
    startTime: 2423.57,
    person: 'Daniel',
    text: ' Yeah.'
  },
  {
    startTime: 2423.71,
    person: 'Daniel',
    text: ' If I understood things good, then my design will be correct.'
  },
  {
    startTime: 2427.25,
    person: 'Daniel',
    text: " If not, my design will be not so good, but it could be right for the purpose I'm using it."
  },
  {
    startTime: 2435.05,
    person: 'Daniel',
    text: ' So this is really to think about.'
  },
  {
    startTime: 2438.75,
    person: 'Daniel',
    text: ' So, and this is what we see in trainings.'
  },
  {
    startTime: 2440.95,
    person: 'Daniel',
    text: ' This is what we see in discussions with people.'
  },
  {
    startTime: 2443.75,
    person: 'Daniel',
    text: " It's always that they think that we have some kind of magic book with us presenting good API designs."
  },
  {
    startTime: 2452.17,
    person: 'Miriam',
    text: " And we're always asked for the, you know, the, how do you say in English?"
  },
  {
    startTime: 2456.87,
    person: 'Miriam',
    text: ' The like solution for a task.'
  },
  {
    startTime: 2459.13,
    person: 'Miriam',
    text: " And we're saying, well, there is not the one right solution."
  },
  {
    startTime: 2462.21,
    person: 'Miriam',
    text: " That's exactly the funny part about API design."
  },
  {
    startTime: 2464.99,
    person: 'Miriam',
    text: ' There is not the one solution is for everyone, right?'
  },
  {
    startTime: 2468.73,
    person: 'Miriam',
    text: ' It depends on who are you designing for?'
  },
  {
    startTime: 2471.21,
    person: 'Miriam',
    text: ' What use case?'
  },
  {
    startTime: 2472.59,
    person: 'Miriam',
    text: ' What do the people want to do with it?'
  },
  {
    startTime: 2474.23,
    person: 'Miriam',
    text: " Like what's the, what are the systems involved?"
  },
  {
    startTime: 2476.71,
    person: 'Miriam',
    text: " What can they even do if they don't, if they can't do JSON and only XML, then well, you don't do J, right?"
  },
  {
    startTime: 2483.17,
    person: 'Miriam',
    text: " I mean, there's so many things that you need to take care of."
  },
  {
    startTime: 2487.47,
    person: 'Miriam',
    text: " So people always expect that we have the one solution and we're always disappointing them saying, no, there is not the one best solution will never be, right?"
  },
  {
    startTime: 2496.67,
    person: 'Karol',
    text: ' And I concur here because it, from at least architecture perspective, when I deal with different architects of different levels and kinds, because there are so many abstraction levels of architecture.'
  },
  {
    startTime: 2510.37,
    person: 'Karol',
    text: ' It always is about context.'
  },
  {
    startTime: 2513.03,
    person: 'Karol',
    text: ' Context is king.'
  },
  {
    startTime: 2513.93,
    person: 'Karol',
    text: ' And if we just talk in an academic sense, the answer will always be, it depends.'
  },
  {
    startTime: 2521.99,
    person: 'Karol',
    text: " If we put that in a specific context of a specific problem we're solving, then we can put it in specific terms, what would be the guidelines for this kind of problem?"
  },
  {
    startTime: 2532.99,
    person: 'Karol',
    text: ' But there are no universal guidelines for APIs.'
  },
  {
    startTime: 2537.13,
    person: 'Karol',
    text: ' Well, maybe a few hints, few.'
  },
  {
    startTime: 2540.39,
    person: 'Miriam',
    text: " Something like don't use the wrong data type, like the basics that I just mentioned."
  },
  {
    startTime: 2544.61,
    person: 'Miriam',
    text: ' I mean, I think we agree with the basics, right?'
  },
  {
    startTime: 2547.47,
    person: 'Karol',
    text: ' Or use human readable names for attributes.'
  },
  {
    startTime: 2552.73,
    person: 'Daniel',
    text: ' Or free here.'
  },
  {
    startTime: 2554.01,
    person: 'Daniel',
    text: ' Defined something like that.'
  },
  {
    startTime: 2555.55,
    person: 'Daniel',
    text: ' So the easy parts, but what we see really is there must be one solution.'
  },
  {
    startTime: 2561.91,
    person: 'Daniel',
    text: ' There must be this golden record.'
  },
  {
    startTime: 2563.79,
    person: 'Daniel',
    text: ' Everybody ever thought about in data structures.'
  },
  {
    startTime: 2568.23,
    person: 'Daniel',
    text: ' And this is what we then have to reflect, even in the trainings we do.'
  },
  {
    startTime: 2573.21,
    person: 'Daniel',
    text: ' They always think there is this one solution.'
  },
  {
    startTime: 2576.87,
    person: 'Daniel',
    text: ' The both will present at the end the solution, how it should be to solve this specific problem.'
  },
  {
    startTime: 2584.69,
    person: 'Daniel',
    text: ' So we have some kind of example with us when we do this API thinking training.'
  },
  {
    startTime: 2591.33,
    person: 'Daniel',
    text: ' And there is really, from the beginning, the expectation that we will present the final solution at the end.'
  },
  {
    startTime: 2598.89,
    person: 'Miriam',
    text: " That's why we have a slide at the beginning saying, we're never going to do that."
  },
  {
    startTime: 2602.25,
    person: 'Miriam',
    text: " Don't expect that from us."
  },
  {
    startTime: 2604.49,
    person: 'Miriam',
    text: " And the fun part is that people always like, if you give them a task to design an API, at first they think it's very easy."
  },
  {
    startTime: 2611.07,
    person: 'Miriam',
    text: ' We do a room booking API.'
  },
  {
    startTime: 2612.89,
    person: 'Miriam',
    text: ' I mean, how difficult can it be, right?'
  },
  {
    startTime: 2614.83,
    person: 'Miriam',
    text: ' Pretty easy example.'
  },
  {
    startTime: 2616.07,
    person: 'Miriam',
    text: ' Everybody understands.'
  },
  {
    startTime: 2617.37,
    person: 'Miriam',
    text: " And when they start discussing, you know, and you're really going there, for example, it has some tasks like it should be a filter for the size, the amount of people that fit into the room."
  },
  {
    startTime: 2628.03,
    person: 'Miriam',
    text: ' And then people design a filter saying size.'
  },
  {
    startTime: 2630.21,
    person: 'Miriam',
    text: ' And I come there and the first thing I say, oh, in square metres, great.'
  },
  {
    startTime: 2634.41,
    person: 'Miriam',
    text: ' I need a very large room.'
  },
  {
    startTime: 2635.49,
    person: 'Miriam',
    text: " And then, no, no, no, that's a number of people."
  },
  {
    startTime: 2637.77,
    person: 'Miriam',
    text: " And so, well, I didn't read the documentation."
  },
  {
    startTime: 2639.51,
    person: 'Miriam',
    text: " It's the size."
  },
  {
    startTime: 2640.15,
    person: 'Miriam',
    text: " It's clearly square metres, right?"
  },
  {
    startTime: 2641.73,
    person: 'Miriam',
    text: ' Why should I read the documentation?'
  },
  {
    startTime: 2643.51,
    person: 'Miriam',
    text: ' Pretty easy.'
  },
  {
    startTime: 2644.23,
    person: 'Miriam',
    text: " And they're like, well, and it starts number of seats, capacity, and they're discussing several things, right?"
  },
  {
    startTime: 2649.97,
    person: 'Miriam',
    text: " It's not only about the technical things."
  },
  {
    startTime: 2652.21,
    person: 'Miriam',
    text: " It's also about the semantic."
  },
  {
    startTime: 2654.67,
    person: 'Miriam',
    text: ' What do you want to say with your words?'
  },
  {
    startTime: 2656.29,
    person: 'Miriam',
    text: " And it's very difficult to come up with something that you cannot trick, or you cannot come there and say, well, I agree."
  },
  {
    startTime: 2662.13,
    person: 'Miriam',
    text: ' Do you mean this?'
  },
  {
    startTime: 2662.83,
    person: 'Miriam',
    text: " And they're looking at you like, no."
  },
  {
    startTime: 2666.81,
    person: 'Karol',
    text: ' When we were researching coupling in interoperability between integration platforms and trying to define that, because we define all integration patterns with coupling definitions.'
  },
  {
    startTime: 2680.59,
    person: 'Karol',
    text: ' And there are different levels of coupling.'
  },
  {
    startTime: 2682.17,
    person: 'Karol',
    text: " So if somebody doesn't know about coupling, I recommend reading balancing coupling in a software designed by Vlad Kononov."
  },
  {
    startTime: 2690.07,
    person: 'Karol',
    text: ' Absolutely amazing book.'
  },
  {
    startTime: 2691.21,
    person: 'Karol',
    text: " I'll put the QR code in a moment."
  },
  {
    startTime: 2695.19,
    person: 'Karol',
    text: ' And people treat coupling, first of all, as it is binary.'
  },
  {
    startTime: 2700.61,
    person: 'Karol',
    text: " It's not."
  },
  {
    startTime: 2702.31,
    person: 'Karol',
    text: " Because if it were binary, we wouldn't be communicating."
  },
  {
    startTime: 2705.33,
    person: 'Karol',
    text: ' And our applications will be in the vacuum of space, which is a non-existent scenario.'
  },
  {
    startTime: 2713.25,
    person: 'Karol',
    text: ' But there are different levels.'
  },
  {
    startTime: 2715.31,
    person: 'Karol',
    text: " And people don't really realise that some types of coupling we actually want in our applications."
  },
  {
    startTime: 2721.07,
    person: 'Karol',
    text: ' And this, what you mentioned here is semantic coupling.'
  },
  {
    startTime: 2723.87,
    person: 'Karol',
    text: " The semantics of understanding of the data we're trying to convey through our APIs."
  },
  {
    startTime: 2730.75,
    person: 'Karol',
    text: " That's something that we actually need to discuss every single time, whether it's a productized API of a SaaS solution or an internal API used for a singular purpose."
  },
  {
    startTime: 2743.69,
    person: 'Karol',
    text: " And that's a very difficult conversation because people think that they can solve it with just a technical bubble without a conversation."
  },
  {
    startTime: 2751.91,
    person: 'Karol',
    text: " And it's not the case."
  },
  {
    startTime: 2755.43,
    person: 'Karol',
    text: ' To give you a very short example, I dug up just a moment ago, a very old WSDL file that I recreated, but I really sent this kind of WSDL file to a colleague of mine back in the day.'
  },
  {
    startTime: 2771.53,
    person: 'Karol',
    text: ' Let me just find the right window.'
  },
  {
    startTime: 2773.07,
    person: 'Karol',
    text: ' There we go.'
  },
  {
    startTime: 2775.63,
    person: 'Karol',
    text: " And that's obviously a joke."
  },
  {
    startTime: 2777.01,
    person: 'Karol',
    text: " I don't know if you can read it, but I can probably make it a little bit bigger."
  },
  {
    startTime: 2782.73,
    person: 'Karol',
    text: " So it's a very simple WSDL file."
  },
  {
    startTime: 2784.49,
    person: 'Karol',
    text: " It's a very short one."
  },
  {
    startTime: 2785.37,
    person: 'Karol',
    text: " It's only has 44 lines."
  },
  {
    startTime: 2791.28,
    person: 'Karol',
    text: ' Basically not a lot there.'
  },
  {
    startTime: 2794,
    person: 'Karol',
    text: ' The story behind it is that a colleague of mine, when I was working in T-Mobile asked me for a WSDL file and I was substituting for a different colleague who was an other integration architect and she went for a vacation, but I was taking over several projects from her.'
  },
  {
    startTime: 2811.5,
    person: 'Karol',
    text: ' And that particular person asking for a WSDL file covered several other systems, small domain systems.'
  },
  {
    startTime: 2817.8,
    person: 'Karol',
    text: " So he didn't tell me what kind of system he's representing in his ask."
  },
  {
    startTime: 2822.08,
    person: 'Karol',
    text: " He didn't tell me which project he's looking for."
  },
  {
    startTime: 2826.94,
    person: 'Karol',
    text: ' So I was feeling very whimsical at that day and I gave him exactly what he asked for, a WSDL file.'
  },
  {
    startTime: 2832.98,
    person: 'Karol',
    text: ' The worst part of it, there was no conversation.'
  },
  {
    startTime: 2836.38,
    person: 'Karol',
    text: " He didn't even open the WSDL file."
  },
  {
    startTime: 2838.1,
    person: 'Karol',
    text: ' He just forwarded that to the development team and they came back two weeks later asking, is that the final form of the WSDL?'
  },
  {
    startTime: 2845.88,
    person: 'Karol',
    text: " So while this is a, let's say sloppy recreation of that lovely WSDL file, it actually was something like this."
  },
  {
    startTime: 2854.84,
    person: 'Karol',
    text: ' And then again, for the purpose of defining an interface, was that a bad API for the purpose of making a joke and making a statement?'
  },
  {
    startTime: 2866.4,
    person: 'Karol',
    text: ' But again, context is king because this definition was for a joke, not for you.'
  },
  {
    startTime: 2872.02,
    person: 'Karol',
    text: ' So perfect.'
  },
  {
    startTime: 2873.28,
    person: 'Karol',
    text: ' If you would use that for an actual API to convey something, uh-uh, well, dummy, dummy, dummy, and any type everywhere.'
  },
  {
    startTime: 2881.38,
    person: 'Karol',
    text: " So that wouldn't work, right?"
  },
  {
    startTime: 2884.2,
    person: 'Miriam',
    text: " But maybe people are used to seeing such bad things so they think it's real, you know?"
  },
  {
    startTime: 2890.6,
    person: 'Karol',
    text: " Yeah, I've seen a share of APIs, SOAP APIs that were defined some fields and then any type."
  },
  {
    startTime: 2899.74,
    person: 'Karol',
    text: ' And you put CDATA in it, because why not?'
  },
  {
    startTime: 2903.5,
    person: 'Karol',
    text: ' And then you guess that CDATA.'
  },
  {
    startTime: 2904.92,
    person: 'Karol',
    text: " I've seen APIs that were interfaces written in, like REST APIs written with JSON, and then CDATA XML embedded in them because something underneath understood XML and somebody just exposed an easy JSON-based API to just get that XML inside."
  },
  {
    startTime: 2926.12,
    person: 'Miriam',
    text: ' Yeah, I also like these REST APIs that just return objects.'
  },
  {
    startTime: 2929.94,
    person: 'Miriam',
    text: ' And in the object, you have the key, the value, and the data type.'
  },
  {
    startTime: 2933.54,
    person: 'Miriam',
    text: ' I mean, easy in the backend.'
  },
  {
    startTime: 2935.2,
    person: 'Miriam',
    text: ' You just develop it once.'
  },
  {
    startTime: 2936.44,
    person: 'Miriam',
    text: ' You can easily document it, but nobody understands what this API is supposed to do, right, because you get a random number of objects with random values, with random names, and random data types.'
  },
  {
    startTime: 2947.32,
    person: 'Miriam',
    text: ' I mean, how, and then I asked the team, how do you want to document this API?'
  },
  {
    startTime: 2950.94,
    person: 'Miriam',
    text: ' And they were like, yeah, well, I was like, right, exactly.'
  },
  {
    startTime: 2956.12,
    person: 'Miriam',
    text: " That's the problem."
  },
  {
    startTime: 2957.32,
    person: 'Miriam',
    text: " You can easily document it, but nobody will understand what it's doing because you can return anything in your objects, right?"
  },
  {
    startTime: 2964.3,
    person: 'Karol',
    text: ' Another example of this kind of behaviour would be putting every field as optional.'
  },
  {
    startTime: 2970.97,
    person: 'Karol',
    text: ' You put a array of attributes in your API, even in a flat structure as a flat JSON with one level, and all of them are optional.'
  },
  {
    startTime: 2979.69,
    person: 'Karol',
    text: ' How the hell should I understand which fields do I need to actually put in or which fields should I expect for what scenario?'
  },
  {
    startTime: 2987.59,
    person: 'Karol',
    text: " It's unrealistic to use that in a timely fashion to consume."
  },
  {
    startTime: 2994.45,
    person: 'Karol',
    text: " It's a cognitive load that the consumer just takes on."
  },
  {
    startTime: 2998.77,
    person: 'Karol',
    text: " We're moving that complexity to the consumer."
  },
  {
    startTime: 3000.97,
    person: 'Miriam',
    text: " Yeah, again, that's what we said before."
  },
  {
    startTime: 3002.71,
    person: 'Miriam',
    text: " We're just moving the complexity somewhere else."
  },
  {
    startTime: 3004.77,
    person: 'Miriam',
    text: ' I had a real example with an API that had actually 120 fields in the body with nothing being required.'
  },
  {
    startTime: 3015.13,
    person: 'Miriam',
    text: ' And it was like- Wow.'
  },
  {
    startTime: 3016.65,
    person: 'Miriam',
    text: ' Exactly.'
  },
  {
    startTime: 3017.33,
    person: 'Miriam',
    text: ' The developer sat in front of it and said, how should I use it?'
  },
  {
    startTime: 3020.35,
    person: 'Miriam',
    text: ' I have a mobile application.'
  },
  {
    startTime: 3022.19,
    person: 'Miriam',
    text: ' So what do I do?'
  },
  {
    startTime: 3023.01,
    person: 'Miriam',
    text: " I don't even know which field is required."
  },
  {
    startTime: 3024.83,
    person: 'Miriam',
    text: ' I cannot show a form with 120 fields.'
  },
  {
    startTime: 3027.43,
    person: 'Miriam',
    text: " I don't even know what I need to actually make this work."
  },
  {
    startTime: 3030.83,
    person: 'Miriam',
    text: ' Yeah, so because you guess what?'
  },
  {
    startTime: 3034.67,
    person: 'Miriam',
    text: ' You can guess why it had 120 fields?'
  },
  {
    startTime: 3038.43,
    person: 'Karol',
    text: ' No.'
  },
  {
    startTime: 3039.51,
    person: 'Miriam',
    text: ' Someone took the database from my one, of course.'
  },
  {
    startTime: 3042.75,
    person: 'Miriam',
    text: ' From our three, because you can.'
  },
  {
    startTime: 3046.19,
    person: 'Miriam',
    text: ' Because nobody told the developer what the API was for, why it was needed, what was needed.'
  },
  {
    startTime: 3052.73,
    person: 'Miriam',
    text: ' She was told, create an API for this database table.'
  },
  {
    startTime: 3057.45,
    person: 'Miriam',
    text: ' Of course, I mean, you know?'
  },
  {
    startTime: 3060.39,
    person: 'Karol',
    text: ' Makes sense that the API is that way then.'
  },
  {
    startTime: 3062.75,
    person: 'Karol',
    text: ' Yes, exactly.'
  },
  {
    startTime: 3064.05,
    person: 'Karol',
    text: ' From a logical perspective, it makes sense.'
  },
  {
    startTime: 3066.71,
    person: 'Karol',
    text: " It's a classical joke."
  },
  {
    startTime: 3070.89,
    person: 'Karol',
    text: ' What was that?'
  },
  {
    startTime: 3075.27,
    person: 'Karol',
    text: ' Wife tells the programmer husband, go to the shop and buy milk.'
  },
  {
    startTime: 3081.27,
    person: 'Karol',
    text: ' If there are eggs, buy six.'
  },
  {
    startTime: 3083.63,
    person: 'Karol',
    text: ' And the husband comes back with six milks.'
  },
  {
    startTime: 3088.13,
    person: 'Karol',
    text: ' Logical.'
  },
  {
    startTime: 3090.13,
    person: 'Karol',
    text: ' That was a logical statement.'
  },
  {
    startTime: 3091.67,
    person: 'Karol',
    text: ' That was how, from a perspective of logic, you would understand it exactly that way, but.'
  },
  {
    startTime: 3100.19,
    person: 'Karol',
    text: " It's dramatic at that sense."
  },
  {
    startTime: 3102.93,
    person: 'Karol',
    text: ' Another example is that there are interdependencies between attributes, optional attributes, or some are required, some are optional, but optional attributes are required based on the existence or values of other attributes.'
  },
  {
    startTime: 3116.37,
    person: 'Karol',
    text: " That's another common problem with a lot of SaaS solutions products that expose APIs, and they try to solve something because they couldn't solve it otherwise, for whatever reason, or they didn't have the time and product capacity to solve it."
  },
  {
    startTime: 3135.65,
    person: 'Miriam',
    text: " It's a nightmare."
  },
  {
    startTime: 3136.67,
    person: 'Miriam',
    text: ' You either need to have this field, this field, or this field.'
  },
  {
    startTime: 3140.11,
    person: 'Miriam',
    text: ' These are also things that you cannot really document very well with the current tools, right?'
  },
  {
    startTime: 3144.45,
    person: 'Miriam',
    text: " So if people come and say, well, there's a combination of fields, and one of them is required, that's also always kind of difficult, right, to bring across from a design perspective."
  },
  {
    startTime: 3154.71,
    person: 'Miriam',
    text: ' Like, why is it like this, right?'
  },
  {
    startTime: 3156.95,
    person: 'Karol',
    text: " And then lastly, I think that a very common mistake that happens a lot of times, and I think this is a good segue to go to the AQs in a moment, is that people don't think about what they're exposing."
  },
  {
    startTime: 3171.63,
    person: 'Karol',
    text: ' And I saw several times that instead of exposing a more complex of a structure of an XML or a JSON tree-like structure, I have an array of functions that expose flat structures as literally as the database table, relational database table shows.'
  },
  {
    startTime: 3190.51,
    person: 'Karol',
    text: " So it's fun if it's a NoSQL database, because these are already complex structures, usually not flat JSONs."
  },
  {
    startTime: 3198.21,
    person: 'Karol',
    text: " But if it's a relational SQL database, and people start putting APIs on top of that, it's like, oh yeah, but you're gonna expose the tables directly."
  },
  {
    startTime: 3208.51,
    person: 'Karol',
    text: " And then the consumer needs to join the tables together by calling several APIs, and that brings another set of various problems, not only from the perspective of the cognitive load of understanding those, but if this is alive somewhere in the cloud, that's a realistic cost, because data at rest costs nothing, but movement of data in cloud costs quite a lot."
  },
  {
    startTime: 3236.53,
    person: 'Karol',
    text: " And we're now calling several APIs, so we're basically sprawling costs."
  },
  {
    startTime: 3241.47,
    person: 'Miriam',
    text: " I think that's also something that's really underestimated by lots of people."
  },
  {
    startTime: 3246.61,
    person: 'Miriam',
    text: ' I had discussions with developers saying, well, but data transfer costs us nothing.'
  },
  {
    startTime: 3251.09,
    person: 'Miriam',
    text: " And I was like, wait a second, that's not true."
  },
  {
    startTime: 3257.41,
    person: 'Miriam',
    text: " I think that's really underestimated by a lot of people."
  },
  {
    startTime: 3261.21,
    person: 'Miriam',
    text: " They think it's better to always, I mean, there was a discussion where we had a table as well in R3 that they wanted to expose via a REST API."
  },
  {
    startTime: 3269.53,
    person: 'Miriam',
    text: ' And one of my favourite questions is, how often does the table change?'
  },
  {
    startTime: 3273.73,
    person: 'Miriam',
    text: ' And they said twice or three times a year.'
  },
  {
    startTime: 3276.85,
    person: 'Miriam',
    text: ' And they wanted to call it every time the user does an interaction.'
  },
  {
    startTime: 3280.29,
    person: 'Miriam',
    text: " And I was like, no way you're loading it every time the user does an interaction."
  },
  {
    startTime: 3284.17,
    person: 'Miriam',
    text: ' If it only changes at maximum three times a year, right?'
  },
  {
    startTime: 3288.83,
    person: 'Miriam',
    text: " But that's then data transfer doesn't cost us anything."
  },
  {
    startTime: 3291.83,
    person: 'Miriam',
    text: ' And I was like, well, not you personally, but.'
  },
  {
    startTime: 3297.89,
    person: 'Karol',
    text: ' Yeah, if they own a data centre and they host that on premise, yeah, sure, do it.'
  },
  {
    startTime: 3305.09,
    person: 'Daniel',
    text: ' But this is the thing.'
  },
  {
    startTime: 3307.71,
    person: 'Daniel',
    text: ' People are still there.'
  },
  {
    startTime: 3309.93,
    person: 'Daniel',
    text: ' This is, these are the people we meet actually a lot when we do trainings.'
  },
  {
    startTime: 3315.83,
    person: 'Daniel',
    text: ' Okay.'
  },
  {
    startTime: 3316.33,
    person: 'Daniel',
    text: " They still have this perspective and they didn't get the shift into the cloud."
  },
  {
    startTime: 3321.55,
    person: 'Daniel',
    text: " And now they're shifted again to do things."
  },
  {
    startTime: 3324.63,
    person: 'Daniel',
    text: ' So we hear a lot of things then.'
  },
  {
    startTime: 3328.27,
    person: 'Daniel',
    text: ' Oh yeah, we are using MQ.'
  },
  {
    startTime: 3329.89,
    person: 'Daniel',
    text: ' We have to get rid of it because of costs, blah, blah, blah.'
  },
  {
    startTime: 3333.93,
    person: 'Daniel',
    text: ' Now we will do REST as an alternative.'
  },
  {
    startTime: 3337.01,
    person: 'Daniel',
    text: ' This is reality.'
  },
  {
    startTime: 3337.91,
    person: 'Daniel',
    text: ' This is what we see at customer side.'
  },
  {
    startTime: 3341.05,
    person: 'Daniel',
    text: ' Going from asynchronous messaging stuff to RESTful APIs.'
  },
  {
    startTime: 3346.33,
    person: 'Karol',
    text: " Oh my, oh, that's painful."
  },
  {
    startTime: 3349.99,
    person: 'Daniel',
    text: " Yeah, that's painful."
  },
  {
    startTime: 3351.05,
    person: 'Karol',
    text: " Yeah, that's absolutely."
  },
  {
    startTime: 3352.31,
    person: 'Daniel',
    text: ' This is what we see in the field.'
  },
  {
    startTime: 3355.59,
    person: 'Daniel',
    text: " And that's why we are actually in this space of the IQs because we hadn't, we did the training a lot of times and we were struggling in this context because we had to hit somehow the backend."
  },
  {
    startTime: 3376.71,
    person: 'Daniel',
    text: ' We had to hit somehow gateway structures, middleware, whatever.'
  },
  {
    startTime: 3381.41,
    person: 'Daniel',
    text: ' And it was quite hard really to illustrate what to choose actually, what data set will be transferred somewhere, how to call it actually.'
  },
  {
    startTime: 3393.45,
    person: 'Daniel',
    text: ' But we started with some kind of two-way thinking but this was not explicitly because we left out back at forefront and at that point and so on and so on.'
  },
  {
    startTime: 3404.95,
    person: 'Daniel',
    text: " And this is actually what happens there because people, and this is what we see in the field, are just replacing technology by technology but not doing the upskilling to really understand what's the real integration problem."
  },
  {
    startTime: 3421.55,
    person: 'Daniel',
    text: ' Another fun fact, I always ask this question in my talks when we do trainings and when we are on customer side doing negotiations and preset or whatever.'
  },
  {
    startTime: 3433.37,
    person: 'Daniel',
    text: " The question is always, did you have ever read the book from Gregor Hohpe, Enterprise Integration Patterns because we're talking about this and you can think about what the answer is."
  },
  {
    startTime: 3446.81,
    person: 'Karol',
    text: ' Now, I do have a little bit of a beef with that particular book for one good reason.'
  },
  {
    startTime: 3455.19,
    person: 'Karol',
    text: ' It was written way before we had cloud computing and integration platforms that were microservice systems which gives a completely different perspective on interoperability.'
  },
  {
    startTime: 3466.39,
    person: 'Karol',
    text: " But if we're talking system design and system interoperability, that is basically your guidebook on doing proper event-driven integrations within your system and why you need to do them."
  },
  {
    startTime: 3479.41,
    person: 'Karol',
    text: " So that's a very valid book from a system design perspective and system architecture perspective."
  },
  {
    startTime: 3484.39,
    person: 'Karol',
    text: " So that's something still very much applicable."
  },
  {
    startTime: 3487.23,
    person: 'Karol',
    text: " If you look at interoperability at scale of an ecosystem, it became less relevant over the years and this is still a huge gap to be filled and that's the problem there because that gap is not yet sufficiently filled."
  },
  {
    startTime: 3501.73,
    person: 'Karol',
    text: " And if we have materials on that, they're paywalled with specific vendors and that's a completely different problem."
  },
  {
    startTime: 3509.39,
    person: 'Karol',
    text: ' But yes, this is a very good book.'
  },
  {
    startTime: 3510.85,
    person: 'Daniel',
    text: ' This book is really the starting point.'
  },
  {
    startTime: 3512.65,
    person: 'Daniel',
    text: ' So when I would like to go into the integration space, this is the one I should read.'
  },
  {
    startTime: 3517.77,
    person: 'Daniel',
    text: " This was the one somebody at CodeCentric forced me to read when I got more into the integration space to really understand, to get the wording, to understand how there's things to actually present and really make it visible there."
  },
  {
    startTime: 3535.47,
    person: 'Daniel',
    text: ' And then you are totally right because the next thing is we have the Richardson book in regards of microservice patterns and so on.'
  },
  {
    startTime: 3543.85,
    person: 'Daniel',
    text: " That's the next thing."
  },
  {
    startTime: 3545.95,
    person: 'Daniel',
    text: ' Nobody, it looks like nobody is really reading these pattern books to understand the basic things around architecture.'
  },
  {
    startTime: 3553.49,
    person: 'Daniel',
    text: " As you mentioned, we have different roles, levels of architecture and it's always even for us a mess to then talk with people and hear what they're actually talking about."
  },
  {
    startTime: 3567.41,
    person: 'Daniel',
    text: " We have trainings and it's sometimes hard that we have to resist to really tell, okay, this is not true what you are telling here."
  },
  {
    startTime: 3576.71,
    person: 'Daniel',
    text: ' Yeah, and this is not what comes up.'
  },
  {
    startTime: 3579.85,
    person: 'Daniel',
    text: " And normally in these trainings, when you have these strong characters, I would call them, it's always, I didn't learn anything."
  },
  {
    startTime: 3589.01,
    person: 'Daniel',
    text: ' Right.'
  },
  {
    startTime: 3589.71,
    person: 'Daniel',
    text: " And it's like, okay, yeah, fine."
  },
  {
    startTime: 3592.67,
    person: 'Daniel',
    text: ' We make a check mark.'
  },
  {
    startTime: 3594.81,
    person: 'Karol',
    text: " Yeah, because they came already full so they didn't have capacity to learn anything because they were convinced they are right."
  },
  {
    startTime: 3600.61,
    person: 'Karol',
    text: " So obviously they didn't learn because they didn't listen."
  },
  {
    startTime: 3603.71,
    person: 'Daniel',
    text: " So that's a problem."
  },
  {
    startTime: 3605.03,
    person: 'Daniel',
    text: ' Boxes, okay, this is what I think.'
  },
  {
    startTime: 3607.01,
    person: 'Daniel',
    text: ' Oh yeah, they said it also, they said it also.'
  },
  {
    startTime: 3609.61,
    person: 'Daniel',
    text: " But in the end, it's more about, and this is what we're telling always in trainings about adapting things."
  },
  {
    startTime: 3615.85,
    person: 'Daniel',
    text: ' So we know when we talk about API thinking that nobody will fully adapt this way of structuring what we developed there.'
  },
  {
    startTime: 3625.83,
    person: 'Daniel',
    text: " It's really some kind of, I can take parts of it and make it work for the situation or the organisation I'm in."
  },
  {
    startTime: 3635.09,
    person: 'Daniel',
    text: ' And this is really funny that people think they have to go the whole way.'
  },
  {
    startTime: 3638.93,
    person: 'Daniel',
    text: " It's always, it's also the same with the API obstacles which we are also using."
  },
  {
    startTime: 3643.19,
    person: 'Daniel',
    text: " And it's always to really bring up the whole space."
  },
  {
    startTime: 3647.03,
    person: 'Daniel',
    text: " And it's sometimes just enough to go at some point, at some level and bring it into this."
  },
  {
    startTime: 3654.53,
    person: 'Daniel',
    text: " So Miriam's I think already pointing there to the obstacles."
  },
  {
    startTime: 3660.31,
    person: 'Daniel',
    text: " So I'm at first, Marjukka Niinioja developed 2017 or something like that."
  },
  {
    startTime: 3668.29,
    person: 'Daniel',
    text: " And it's really bring to bring more the business side into the game to really make it understandable what we are doing with, yeah, with building APIs even if there are synchronous or asynchronous."
  },
  {
    startTime: 3683.39,
    person: 'Daniel',
    text: ' This is one of the points there.'
  },
  {
    startTime: 3686.41,
    person: 'Daniel',
    text: " So it's really, I think it's something, what we also, I think Miriam can also agree on that is really the upscaling factor."
  },
  {
    startTime: 3696.97,
    person: 'Daniel',
    text: " Because there's this discontinuous learning we have to learn."
  },
  {
    startTime: 3700.91,
    person: 'Daniel',
    text: " So it's not set in stone that when somebody is at university and had some kind of development courses, they are ready to go into this integration game or can be sent to an training for doing this."
  },
  {
    startTime: 3716.49,
    person: 'Daniel',
    text: " It's really also understand and learn over time."
  },
  {
    startTime: 3719.39,
    person: 'Daniel',
    text: " So it's really about learning."
  },
  {
    startTime: 3721.67,
    person: 'Miriam',
    text: " But I think that's also something we didn't tackle yet when we talked about the topic, but you now touched it, Daniel, the knowledge thing."
  },
  {
    startTime: 3731.23,
    person: 'Miriam',
    text: " I think one thing that I'm always asked as well is, isn't this a problem that you tell people stuff about API design?"
  },
  {
    startTime: 3740.29,
    person: 'Miriam',
    text: " Won't they feel offended if you try to support them with enablement and say, well, no."
  },
  {
    startTime: 3745.23,
    person: 'Miriam',
    text: ' And the reason is none of the teams that I usually work with are API experts.'
  },
  {
    startTime: 3749.93,
    person: 'Miriam',
    text: ' They have no clue.'
  },
  {
    startTime: 3751.33,
    person: 'Miriam',
    text: " They're happy that there's someone who can guide them."
  },
  {
    startTime: 3753.85,
    person: 'Miriam',
    text: ' And I think this is what many people underestimate.'
  },
  {
    startTime: 3756.47,
    person: 'Miriam',
    text: " They put a lot of, whether it's whatever it is, they put a lot of integration pressure on teams that already have a backend, they already have a system, they already have a database and their job is something completely else, maintaining the system, making sure it runs, making sure the backend runs, making sure the database runs."
  },
  {
    startTime: 3773.85,
    person: 'Miriam',
    text: " And on top, someone's coming saying, hey, we need your data."
  },
  {
    startTime: 3777.43,
    person: 'Miriam',
    text: ' Give us something we can integrate against, right?'
  },
  {
    startTime: 3780.93,
    person: 'Karol',
    text: " So- And that's also a architecture problem because a lot of those systems were designed without interoperability in the design."
  },
  {
    startTime: 3788.77,
    person: 'Karol',
    text: ' The interoperability is slapped onto those systems.'
  },
  {
    startTime: 3791.81,
    person: 'Karol',
    text: " So it's not thought through from the beginning."
  },
  {
    startTime: 3793.93,
    person: 'Karol',
    text: ' What are we actually gonna do with that data?'
  },
  {
    startTime: 3795.89,
    person: 'Karol',
    text: " Where it's gonna go?"
  },
  {
    startTime: 3796.69,
    person: 'Karol',
    text: ' And nowadays, all systems are distributed.'
  },
  {
    startTime: 3799.57,
    person: 'Karol',
    text: ' There are very few systems that are actually isolated and work in isolation, which basically means that most systems nowadays require interoperability to be a first-class citizen, really, right?'
  },
  {
    startTime: 3813.47,
    person: 'Karol',
    text: " So it's difficult."
  },
  {
    startTime: 3815.09,
    person: 'Karol',
    text: ' And then it goes even worse in large-scale environments,'
  },
  {
    startTime: 3819.97,
    person: 'Karol',
    text: ' corporate environments,'
  },
  {
    startTime: 3820.87,
    person: 'Karol',
    text: ' because some people get the lovely notions'
  },
  {
    startTime: 3822.81,
    person: 'Karol',
    text: ' of the centre of enablement and citizen development,'
  },
  {
    startTime: 3829.23,
    person: 'Karol',
    text: ' and then they force those domain system teams'
  },
  {
    startTime: 3833.89,
    person: 'Karol',
    text: ' to also do application integration'
  },
  {
    startTime: 3837.04,
    person: 'Karol',
    text: ' as an integration platforms'
  },
  {
    startTime: 3838.91,
    person: 'Karol',
    text: ' and cater to the modules of the integration platforms'
  },
  {
    startTime: 3842.79,
    person: 'Karol',
    text: ' and take responsibility for that'
  },
  {
    startTime: 3845.65,
    person: 'Karol',
    text: ' without even knowing what that is'
  },
  {
    startTime: 3849.51,
    person: 'Karol',
    text: ' and how to deal with that,'
  },
  {
    startTime: 3850.65,
    person: 'Karol',
    text: " because they're database experts."
  },
  {
    startTime: 3852.15,
    person: 'Karol',
    text: " They're domain experts."
  },
  {
    startTime: 3853.51,
    person: 'Karol',
    text: " They're whatever else."
  },
  {
    startTime: 3854.81,
    person: 'Karol',
    text: " So it's the difficult part there."
  },
  {
    startTime: 3858.45,
    person: 'Karol',
    text: " All right, let's touch upon, because we know that Daniel has to go tend to his fatherly duties."
  },
  {
    startTime: 3865.39,
    person: 'Karol',
    text: " That's the downside of having kids at times."
  },
  {
    startTime: 3870.29,
    person: 'Karol',
    text: " It's fun, but there are responsibilities."
  },
  {
    startTime: 3874.05,
    person: 'Karol',
    text: ' Mine are covered by my wife, luckily, this time around.'
  },
  {
    startTime: 3877.47,
    person: 'Karol',
    text: " So let's dive into the AQs."
  },
  {
    startTime: 3880.07,
    person: 'Karol',
    text: ' And I already took the liberty of taking the diagram earlier from the side.'
  },
  {
    startTime: 3889.45,
    person: 'Karol',
    text: ' So let me just bring that up.'
  },
  {
    startTime: 3892.49,
    person: 'Karol',
    text: ' Where do I have this?'
  },
  {
    startTime: 3893.79,
    person: 'Karol',
    text: ' This is this one.'
  },
  {
    startTime: 3895.37,
    person: 'Karol',
    text: ' So I have this for my convenience in Draw.io, because I do have some drawings on this in different tabs.'
  },
  {
    startTime: 3903.99,
    person: 'Karol',
    text: ' So the AQs, data interface quadrants.'
  },
  {
    startTime: 3910.07,
    person: 'Karol',
    text: ' Tell us, what are we looking at here?'
  },
  {
    startTime: 3913.69,
    person: 'Karol',
    text: ' Because this is probably quite foreign to a large number of people.'
  },
  {
    startTime: 3918.29,
    person: 'Karol',
    text: ' I mean, for me, the concept was very foreign when I read the article.'
  },
  {
    startTime: 3921.49,
    person: 'Karol',
    text: " Now I'm quite a fan, because it's very useful."
  },
  {
    startTime: 3926.47,
    person: 'Karol',
    text: ' So walk us through, what are we looking at right now at this particular diagram?'
  },
  {
    startTime: 3933.51,
    person: 'Karol',
    text: ' And just for those who want to read the article, this is the lovely QR for said article on the code-centric side.'
  },
  {
    startTime: 3942.51,
    person: 'Miriam',
    text: ' Yeah, let me start.'
  },
  {
    startTime: 3944.17,
    person: 'Miriam',
    text: ' So basically, this came out of a bit of all the discussions that we had before, right?'
  },
  {
    startTime: 3949.11,
    person: 'Miriam',
    text: ' We have just discussions with people regarding what is good API design?'
  },
  {
    startTime: 3953.15,
    person: 'Miriam',
    text: ' What is actually a good API design?'
  },
  {
    startTime: 3955.11,
    person: 'Miriam',
    text: ' How do I know?'
  },
  {
    startTime: 3956.51,
    person: 'Miriam',
    text: " And we realised that most people don't know what they actually build their API for, right?"
  },
  {
    startTime: 3961.09,
    person: 'Miriam',
    text: " If you ask them, they don't really know, what are we actually building?"
  },
  {
    startTime: 3964.55,
    person: 'Miriam',
    text: ' Like, so we tried to put it in a picture to make people clear, where you are is not where everyone is, right?'
  },
  {
    startTime: 3972.49,
    person: 'Miriam',
    text: ' There are different people who are building different things.'
  },
  {
    startTime: 3974.87,
    person: 'Miriam',
    text: " And depending on what they're building, there might be different requirements for those things, right?"
  },
  {
    startTime: 3981.21,
    person: 'Miriam',
    text: ' So basically, on the horizontal axis, we put raw data and aggregated or transformed data.'
  },
  {
    startTime: 3988.43,
    person: 'Miriam',
    text: " So raw data doesn't really mean unreadable names, right?"
  },
  {
    startTime: 3992.39,
    person: 'Miriam',
    text: ' I think we agree to that.'
  },
  {
    startTime: 3993.57,
    person: 'Miriam',
    text: ' There are standards, I mean, because some people said, yeah, then I just use the database names and say, well, this is not what raw data means, right?'
  },
  {
    startTime: 3999.15,
    person: 'Miriam',
    text: ' Raw data means at least like, it has to be readable, right?'
  },
  {
    startTime: 4003.17,
    person: 'Miriam',
    text: ' But aggregated and transformed data means the data is nicely packaged and put together right in a good way, right?'
  },
  {
    startTime: 4010.81,
    person: 'Miriam',
    text: ' And then we have the vertical axis, which is product internal and use case specific and external and reusable on the top, right?'
  },
  {
    startTime: 4018.23,
    person: 'Miriam',
    text: " So the idea is not to say, left is bad and right is good or bottom is bad and top is good, because I think that's what most people think, but it's more about to say, where are we actually at a team, right?"
  },
  {
    startTime: 4031.35,
    person: 'Miriam',
    text: ' What type of interface are we building and what are we aiming for, right?'
  },
  {
    startTime: 4035.55,
    person: 'Miriam',
    text: ' And we mainly use this then in discussions with people like developers and architects, for example, to say, or also product owners to say, where are you and where do you need to be and why, right?'
  },
  {
    startTime: 4047.61,
    person: 'Miriam',
    text: " Because sometimes architects, product owners, business people have a very different understanding of what they want or what they're aiming for than the developers, for example."
  },
  {
    startTime: 4055.43,
    person: 'Miriam',
    text: " And it's easiest to put it in a picture and say, please position yourself."
  },
  {
    startTime: 4059.13,
    person: 'Miriam',
    text: ' Where do you think you are?'
  },
  {
    startTime: 4060.83,
    person: 'Miriam',
    text: ' What do you think where you should be?'
  },
  {
    startTime: 4062.93,
    person: 'Miriam',
    text: ' What does it need to get there, right?'
  },
  {
    startTime: 4066.29,
    person: 'Karol',
    text: ' Okay, so if we could define the quadrants.'
  },
  {
    startTime: 4069.45,
    person: 'Daniel',
    text: ' One thing maybe to think about is, Miri already mentioned, is this black and white thinking there.'
  },
  {
    startTime: 4074.91,
    person: 'Daniel',
    text: ' So people are really, oh yeah, where I have to be directly in the middle of the composition service.'
  },
  {
    startTime: 4082.33,
    person: 'Daniel',
    text: " So it's really hard to, or I want to be on the highest top."
  },
  {
    startTime: 4087.25,
    person: 'Daniel',
    text: " It's just put yourself somewhere."
  },
  {
    startTime: 4090.25,
    person: 'Daniel',
    text: " Maybe you're on the cross."
  },
  {
    startTime: 4092.23,
    person: 'Daniel',
    text: " It's totally fine, but it gives direction."
  },
  {
    startTime: 4095.75,
    person: 'Daniel',
    text: ' It makes clear where all the things are actually moving somehow and make it also clear for non-technical people what is actually happening.'
  },
  {
    startTime: 4106.109,
    person: 'Daniel',
    text: ' So when we look at back and forefront and stuff and everything involved there.'
  },
  {
    startTime: 4111.27,
    person: 'Miriam',
    text: " Yeah, let's go to the quadrants quickly, Daniel."
  },
  {
    startTime: 4113.529,
    person: 'Miriam',
    text: ' So I think you started with the top, no, bottom right now.'
  },
  {
    startTime: 4117.569,
    person: 'Miriam',
    text: ' Maybe go ahead.'
  },
  {
    startTime: 4119.87,
    person: 'Daniel',
    text: ' And that we can move it to a composition service, which is more fruitful than just having this technical back end for front end type of thing.'
  },
  {
    startTime: 4130.93,
    person: 'Daniel',
    text: " So it's really something to move on."
  },
  {
    startTime: 4133.59,
    person: 'Daniel',
    text: ' And to be honest, we started with the two things above.'
  },
  {
    startTime: 4137.229,
    person: 'Daniel',
    text: ' That was the starting point because we needed for a project because the idea of the project we did was to deliver core services.'
  },
  {
    startTime: 4146.83,
    person: 'Daniel',
    text: ' So platform data products somehow.'
  },
  {
    startTime: 4149.59,
    person: 'Daniel',
    text: ' The people were not at that time talking about data products.'
  },
  {
    startTime: 4152.77,
    person: 'Daniel',
    text: ' So it was called core services.'
  },
  {
    startTime: 4155.13,
    person: 'Daniel',
    text: ' What happened was over time, we built a lot of composition services and then somebody asked, did we actually reach the goal?'
  },
  {
    startTime: 4164.37,
    person: 'Daniel',
    text: ' So we had to find something and this was actually the start.'
  },
  {
    startTime: 4167.85,
    person: 'Daniel',
    text: ' And then Miri came and built this whole diagram or the quadrants out of it.'
  },
  {
    startTime: 4174.029,
    person: 'Daniel',
    text: ' This is really where it all came from.'
  },
  {
    startTime: 4176.529,
    person: 'Karol',
    text: ' Okay, so what would be the definitions for the quadrants then?'
  },
  {
    startTime: 4181.99,
    person: 'Miriam',
    text: " Okay, so let's start bottom right, back end for front end."
  },
  {
    startTime: 4187.029,
    person: 'Miriam',
    text: " I think most people know what it is, but basically we expect there's a team."
  },
  {
    startTime: 4191.29,
    person: 'Miriam',
    text: ' They have a front end and a back end.'
  },
  {
    startTime: 4192.93,
    person: 'Miriam',
    text: " Maybe it's in the same team."
  },
  {
    startTime: 4194.01,
    person: 'Miriam',
    text: " Maybe it's the neighbour team that we know very well."
  },
  {
    startTime: 4196.03,
    person: 'Miriam',
    text: ' We build our interface exactly for the front end.'
  },
  {
    startTime: 4199.15,
    person: 'Miriam',
    text: " We don't do raw data."
  },
  {
    startTime: 4200.35,
    person: 'Miriam',
    text: ' We transform the data exactly in the way the front end needs it.'
  },
  {
    startTime: 4203.33,
    person: 'Miriam',
    text: ' We design it very nicely so that the front end developers have it very easy.'
  },
  {
    startTime: 4207.03,
    person: 'Miriam',
    text: ' Nobody else will ever use our API, right?'
  },
  {
    startTime: 4209.23,
    person: 'Miriam',
    text: " We use it internally, that's it."
  },
  {
    startTime: 4211.39,
    person: 'Karol',
    text: ' So single purpose, very, very fine, strictly defined and not reusable at all.'
  },
  {
    startTime: 4220.15,
    person: 'Miriam',
    text: ' Exactly.'
  },
  {
    startTime: 4221.25,
    person: 'Miriam',
    text: ' And you can make, for example, you can make breaking changes anytime because the front end developer sits right next to it.'
  },
  {
    startTime: 4226.83,
    person: 'Miriam',
    text: " You say, hey, I'm making here a breaking change."
  },
  {
    startTime: 4228.95,
    person: 'Miriam',
    text: ' Please change.'
  },
  {
    startTime: 4230.25,
    person: 'Miriam',
    text: ' You may be changing even the front end in the same much request, right?'
  },
  {
    startTime: 4233.07,
    person: 'Miriam',
    text: ' No problem.'
  },
  {
    startTime: 4233.91,
    person: 'Miriam',
    text: ' You can do that, right?'
  },
  {
    startTime: 4235.41,
    person: 'Karol',
    text: ' Yeah.'
  },
  {
    startTime: 4236.57,
    person: 'Miriam',
    text: ' Then we have on top of that, the composition service.'
  },
  {
    startTime: 4239.17,
    person: 'Miriam',
    text: " So let's go that way."
  },
  {
    startTime: 4240.93,
    person: 'Miriam',
    text: ' The composition service is also with aggregated and transformed data.'
  },
  {
    startTime: 4246.53,
    person: 'Miriam',
    text: ' So very well-defined data, very curated data, but it is designed in a way to be external and reusable, right?'
  },
  {
    startTime: 4254.61,
    person: 'Miriam',
    text: ' So I need to pay more attention to who wants to use it.'
  },
  {
    startTime: 4258.15,
    person: 'Miriam',
    text: ' Why do they want to use it?'
  },
  {
    startTime: 4259.75,
    person: 'Miriam',
    text: ' What do I need to do to make it actually usable for them?'
  },
  {
    startTime: 4262.71,
    person: 'Miriam',
    text: ' And also I cannot do as much changes, right?'
  },
  {
    startTime: 4265.39,
    person: 'Miriam',
    text: ' I cannot change it tomorrow and say, well, all my lovely external users, now I have a version three of my API.'
  },
  {
    startTime: 4271.43,
    person: 'Miriam',
    text: " And if you don't migrate, version two will be not working anymore tomorrow, right?"
  },
  {
    startTime: 4275.35,
    person: 'Miriam',
    text: ' I cannot do that, right?'
  },
  {
    startTime: 4276.69,
    person: 'Miriam',
    text: " So I have lots of implications I have to take care of if I'm in that space, right?"
  },
  {
    startTime: 4280.93,
    person: 'Miriam',
    text: ' I cannot just say, well, I change it tomorrow.'
  },
  {
    startTime: 4283.17,
    person: 'Miriam',
    text: " I don't care, right?"
  },
  {
    startTime: 4284.43,
    person: 'Miriam',
    text: " And that's also something that many people don't get at the beginning, right?"
  },
  {
    startTime: 4288.15,
    person: 'Miriam',
    text: ' And I have a very funny story of a team that I talked to who actually had a backend for frontend.'
  },
  {
    startTime: 4294.23,
    person: 'Miriam',
    text: " That's what they thought, right?"
  },
  {
    startTime: 4295.93,
    person: 'Miriam',
    text: ' But the product owner decided to put their API in the internal API catalogue because it was there, right?'
  },
  {
    startTime: 4302.21,
    person: 'Miriam',
    text: ' It was a nice API.'
  },
  {
    startTime: 4303.71,
    person: 'Miriam',
    text: ' So what happened?'
  },
  {
    startTime: 4304.89,
    person: 'Miriam',
    text: " Other teams started using it and they didn't know."
  },
  {
    startTime: 4308.09,
    person: 'Miriam',
    text: ' And when they made a breaking change, suddenly three teams dropped them a message saying, hey, you broke your API, why?'
  },
  {
    startTime: 4314.63,
    person: 'Miriam',
    text: ' We use it.'
  },
  {
    startTime: 4315.23,
    person: 'Miriam',
    text: ' And they were like, wait, this is our API, you know?'
  },
  {
    startTime: 4318.67,
    person: 'Karol',
    text: ' That was actually- Why are you using it?'
  },
  {
    startTime: 4319.87,
    person: 'Miriam',
    text: " If you would have talked about it with the IQs, you would have known that someone thinks it's there and others think it's there, right?"
  },
  {
    startTime: 4325.47,
    person: 'Miriam',
    text: ' So there was a different perception in the team.'
  },
  {
    startTime: 4328.89,
    person: 'Miriam',
    text: ' And then the left side, maybe Daniel, you can go ahead.'
  },
  {
    startTime: 4332.49,
    person: 'Daniel',
    text: ' Yeah, and then we have actually on the left side when we start on the low ground, this data link type of thing.'
  },
  {
    startTime: 4339.53,
    person: 'Daniel',
    text: " It could be a database API, but it shouldn't."
  },
  {
    startTime: 4345.75,
    person: 'Daniel',
    text: " It's really bringing this raw data up to be used by composition services or even then by the platform data product."
  },
  {
    startTime: 4359.15,
    person: 'Daniel',
    text: ' And this platform data product is really meant in type of productisation to really think about in data products to really say, okay, this is what we deliver internally, somehow externally then also, and we make things reusable.'
  },
  {
    startTime: 4376.73,
    person: 'Daniel',
    text: " So we can build then composition service out of this platform data products because they provide the real value because this is what we actually want to share with people inside the organisation or even also external because this internal external thing is it's a quite complicated thing there."
  },
  {
    startTime: 4395.25,
    person: 'Karol',
    text: ' Okay, so I do have my take on this for integration platform.'
  },
  {
    startTime: 4404.23,
    person: 'Karol',
    text: " So we'll do that in a moment, but I'm looking at this also from a perspective of domain driven design."
  },
  {
    startTime: 4411.13,
    person: 'Karol',
    text: " And I'm just trying to find the right image in Vlad Kononov's book, Learning Domain Driven Design, and I think I got it."
  },
  {
    startTime: 4419.43,
    person: 'Karol',
    text: " So I'm just gonna paste it right here."
  },
  {
    startTime: 4422.73,
    person: 'Karol',
    text: ' So if I look at these layers, this is an overall picture of different types of context mapping within domain driven design, right?'
  },
  {
    startTime: 4432.41,
    person: 'Karol',
    text: ' So in context mapping, we have different relationships.'
  },
  {
    startTime: 4437.39,
    person: 'Karol',
    text: ' So if I would look at data link, that would be probably either shared kernel or partnership.'
  },
  {
    startTime: 4447.03,
    person: 'Karol',
    text: ' So very tight connection between them.'
  },
  {
    startTime: 4451.01,
    person: 'Karol',
    text: ' Then if we look at back and forefront, then that would be probably also partnership because there are separate pieces of code connected and non-reusable, etc.'
  },
  {
    startTime: 4462.65,
    person: 'Karol',
    text: ' Then composition service would be then probably open host service in that sense.'
  },
  {
    startTime: 4469.17,
    person: 'Daniel',
    text: ' I have to leave you now.'
  },
  {
    startTime: 4470.75,
    person: 'Daniel',
    text: ' Have fun and see you all, bye.'
  },
  {
    startTime: 4474.09,
    person: 'Karol',
    text: ' Thank you, Daniel.'
  },
  {
    startTime: 4475.03,
    person: 'Karol',
    text: ' Thank you for joining us.'
  },
  {
    startTime: 4475.59,
    person: 'Karol',
    text: " You're welcome, you're welcome, bye."
  },
  {
    startTime: 4478.77,
    person: 'Karol',
    text: ' All right.'
  },
  {
    startTime: 4480.01,
    person: 'Karol',
    text: " So correct me if I'm wrong, but I'm looking at this from this particular perspective, that this would be like composition services is our open host service with these published languages that we cater to that are specific use."
  },
  {
    startTime: 4498.09,
    person: 'Karol',
    text: ' And then they are basically conveying a specific functionality, right?'
  },
  {
    startTime: 4505.93,
    person: 'Karol',
    text: ' Yeah.'
  },
  {
    startTime: 4506.91,
    person: 'Karol',
    text: " Data products might also land in the part of being an open host service because we don't, in terms of ACLs, we don't really expose them, the ACLs as APIs."
  },
  {
    startTime: 4520.99,
    person: 'Karol',
    text: " The ACLs are within the software itself, whether we're consuming or providing an API."
  },
  {
    startTime: 4527.17,
    person: 'Karol',
    text: " So that's a different thing."
  },
  {
    startTime: 4530.43,
    person: 'Karol',
    text: " And then back and forefront, and it's also, it's a conformism pattern because the front end is conforming to the back end."
  },
  {
    startTime: 4538.95,
    person: 'Karol',
    text: ' Yeah.'
  },
  {
    startTime: 4539.39,
    person: 'Karol',
    text: ' Right?'
  },
  {
    startTime: 4540.11,
    person: 'Karol',
    text: ' Yeah.'
  },
  {
    startTime: 4540.43,
    person: 'Karol',
    text: ' So does that aligns with the thinking for the- Okay.'
  },
  {
    startTime: 4546.39,
    person: 'Karol',
    text: ' Totally, yeah.'
  },
  {
    startTime: 4548.43,
    person: 'Miriam',
    text: " All right, so- It's a good perspective to look at as well, yeah."
  },
  {
    startTime: 4553.39,
    person: 'Karol',
    text: ' Okay, fair.'
  },
  {
    startTime: 4555.87,
    person: 'Karol',
    text: ' All right, so if we can map these things to good, bad designs or example, real world, very real world examples of what we would use.'
  },
  {
    startTime: 4569.13,
    person: 'Karol',
    text: ' So let me see, let me have a go at it.'
  },
  {
    startTime: 4572.57,
    person: 'Karol',
    text: ' So if I would do a data link, that would be, literally could be a database link, DB link between two databases replicating data.'
  },
  {
    startTime: 4583.21,
    person: 'Karol',
    text: ' A data link could be also a batch or an ELT process running somewhere, right?'
  },
  {
    startTime: 4589.53,
    person: 'Karol',
    text: ' Because it just moves raw data.'
  },
  {
    startTime: 4591.71,
    person: 'Karol',
    text: ' Yes.'
  },
  {
    startTime: 4593.81,
    person: 'Karol',
    text: " ETL, somewhere probably in the data link space as well, but probably closer to the middle of the whole thing because it's acting a little bit as a composed service, a little bit in that direction, but still in the data link part."
  },
  {
    startTime: 4610.31,
    person: 'Karol',
    text: " Back and forefront, I think that's self-descriptive here."
  },
  {
    startTime: 4615.27,
    person: 'Karol',
    text: ' Composition service, any SaaS solution with an API array externalised, that would be pretty much it.'
  },
  {
    startTime: 4622.89,
    person: 'Karol',
    text: ' So any CLI of any tool would be in the composition service, I guess.'
  },
  {
    startTime: 4630.97,
    person: 'Karol',
    text: ' Any API of AWS, Azure as products.'
  },
  {
    startTime: 4637.55,
    person: 'Karol',
    text: ' Yeah, Salesforce API, Microsoft Dynamics API, these would be all composition services.'
  },
  {
    startTime: 4643.05,
    person: 'Karol',
    text: ' Then in that sense, what would be the data products?'
  },
  {
    startTime: 4648.97,
    person: 'Karol',
    text: ' Okay, so if we have Salesforce, for example, as in CRM, Salesforce as a platform gives us composition services, but if we implement it in a specific context of our own organisation and start exposing specific data in a productized way from Salesforce, from that organisation, that would be then in the direction of the data products.'
  },
  {
    startTime: 4677.69,
    person: 'Miriam',
    text: ' Yeah, I see it more in a way like how close is the data still to the raw data, right?'
  },
  {
    startTime: 4682.85,
    person: 'Miriam',
    text: " A platform data product would be more, let's say, less data from different sources."
  },
  {
    startTime: 4687.81,
    person: 'Miriam',
    text: ' A composition service can also have very different data, right?'
  },
  {
    startTime: 4691.55,
    person: 'Miriam',
    text: ' A composition service could also have data from Salesforce, but data also from a completely different source, theoretically, right?'
  },
  {
    startTime: 4698.51,
    person: 'Miriam',
    text: " So it's more like about where do you get your data from, like how close is the data to each other, right?"
  },
  {
    startTime: 4703.93,
    person: 'Miriam',
    text: " If it's a very, I would say, a very bounded context with very, like data is from the same place everywhere, like, right, it's more on the data product side for me, while if we have data that we aggregate, we transform, we take other data that we mix in, right, from somewhere else, that would be more on a composition side."
  },
  {
    startTime: 4721.73,
    person: 'Miriam',
    text: ' So it depends a bit on how, where do you get the data from, right?'
  },
  {
    startTime: 4725.35,
    person: 'Miriam',
    text: ' How restricted are you in the data you present, right?'
  },
  {
    startTime: 4730.09,
    person: 'Karol',
    text: " Okay, I'm gonna counter that because if I look at ecosystem architecture from perspective of domain-driven design, I mean, it's a holy grail of domain-driven design to have a bounded context and the functionalities of a specific subdomain containerised in a singular system."
  },
  {
    startTime: 4747.19,
    person: 'Karol',
    text: " That's like the holy grail."
  },
  {
    startTime: 4748.85,
    person: 'Karol',
    text: ' The reality of things is that usually a singular domain system implements several bounded contexts, not one, but a few.'
  },
  {
    startTime: 4762.65,
    person: 'Karol',
    text: " So if we look at, again, Salesforce, a CRM system as an example, okay, we have the customer domain, but the moment an opportunity is won, we're going into the order domain, right?"
  },
  {
    startTime: 4776.19,
    person: 'Karol',
    text: " So we're already from that perspective, functional perspective of a business, we're already having at least two bounded contexts in a CRM, right?"
  },
  {
    startTime: 4786.51,
    person: 'Karol',
    text: " So if I'm looking at the distribution of systems and bounded context in an ecosystem, also from a perspective of an integration platform, the data product can be on an API of an integration platform, but the data can originate from multiple systems, right?"
  },
  {
    startTime: 4807.97,
    person: 'Karol',
    text: ' Because if I have a order domain, okay, I have some sort of an ERP or order fulfilment system beneath, but part of that data originates from a CRM.'
  },
  {
    startTime: 4821.05,
    person: 'Karol',
    text: " So I combine the two as a singular purpose of a data product, which is not exactly transformed because I don't transform the data on an integration platform, I just merge it as a, join that into a singular, not data model, but a singular instance of a model, right?"
  },
  {
    startTime: 4846.55,
    person: 'Karol',
    text: ' So that is then, that could also, from my perspective, be raw data without transformation.'
  },
  {
    startTime: 4852.43,
    person: 'Miriam',
    text: ' Right, yes.'
  },
  {
    startTime: 4853.33,
    person: 'Miriam',
    text: ' Depending on how much you do with the data, right?'
  },
  {
    startTime: 4855.57,
    person: 'Miriam',
    text: ' It also depends a bit, what do you really do with it?'
  },
  {
    startTime: 4858.35,
    person: 'Miriam',
    text: ' How difficult is it to put it together?'
  },
  {
    startTime: 4860.51,
    person: 'Miriam',
    text: ' Do you just take the fields and throw them in one, right?'
  },
  {
    startTime: 4863.35,
    person: 'Miriam',
    text: ' Or do you really do more with it?'
  },
  {
    startTime: 4865.05,
    person: 'Miriam',
    text: " I think it's really a fine, it's not so, it's not black and white as well here, right?"
  },
  {
    startTime: 4869.83,
    person: 'Miriam',
    text: ' Most of the things will probably be somewhere in the middle, right?'
  },
  {
    startTime: 4872.75,
    person: 'Miriam',
    text: ' Some will be clearly left or right, but most will be somewhere more to the middle, right?'
  },
  {
    startTime: 4876.67,
    person: 'Miriam',
    text: " That's also what people always ask."
  },
  {
    startTime: 4878.89,
    person: 'Miriam',
    text: " Do I need to pick one of the quadrants and then I'm there?"
  },
  {
    startTime: 4881.17,
    person: 'Miriam',
    text: " And we said, no, you can say I'm more in the middle, I'm more to the edge."
  },
  {
    startTime: 4885.39,
    person: 'Miriam',
    text: ' I mean, if I have two consumers, where am I?'
  },
  {
    startTime: 4888.21,
    person: 'Miriam',
    text: ' Am I already, am I external or am I internal?'
  },
  {
    startTime: 4891.15,
    person: 'Miriam',
    text: " I said, well, you can still say we're internal because the second consumer is our neighbour team or whatever, right?"
  },
  {
    startTime: 4896.95,
    person: 'Miriam',
    text: " You can still draw your thought there and say, well, we technically have more than one, but it's still like internal, right?"
  },
  {
    startTime: 4903.35,
    person: 'Miriam',
    text: " So it's not really about the maximum or I always have to be on one clear end, right?"
  },
  {
    startTime: 4908.13,
    person: 'Miriam',
    text: ' I can be somewhere in the middle as well.'
  },
  {
    startTime: 4909.91,
    person: 'Miriam',
    text: ' This is more to keep the conversation going.'
  },
  {
    startTime: 4912.63,
    person: 'Miriam',
    text: ' And actually one of the reasons why we designed it as well was that we had the training with the customer where the architects were very keen on having the training with the developers because they said, well, they need to learn how to build reusable APIs, right?'
  },
  {
    startTime: 4929.09,
    person: 'Miriam',
    text: " And then we talked with the developers and they said, well, I have a back end for front end, I don't care about any reusable API, right?"
  },
  {
    startTime: 4935.33,
    person: 'Miriam',
    text: ' Very true because it depends on the use case.'
  },
  {
    startTime: 4938.13,
    person: 'Miriam',
    text: " And then it's good to pick up this picture and say, well, your architect wants you to build a red or blue thing."
  },
  {
    startTime: 4943.37,
    person: 'Miriam',
    text: " You're telling me you're only building green things."
  },
  {
    startTime: 4945.57,
    person: 'Miriam',
    text: ' So where are you really and why?'
  },
  {
    startTime: 4947.17,
    person: 'Miriam',
    text: ' And what do you need to go there?'
  },
  {
    startTime: 4948.79,
    person: 'Miriam',
    text: ' Or does it even make sense to go there, right?'
  },
  {
    startTime: 4950.93,
    person: 'Miriam',
    text: " It doesn't make sense for every interface to be a composition service or a platform data product, right?"
  },
  {
    startTime: 4955.85,
    person: 'Miriam',
    text: ' Every quadrant has their strength and their place to be in our opinion, right?'
  },
  {
    startTime: 4961.13,
    person: 'Miriam',
    text: ' So I really need to know where am I and where do I want to be and where do I have to be and why, right?'
  },
  {
    startTime: 4967.09,
    person: 'Karol',
    text: " It's always the only plausible and correct answer in all cases it depends because we first need to understand the context of things rather than jump into universal truths because those universal truths are not really universal in that sense."
  },
  {
    startTime: 4986.77,
    person: 'Karol',
    text: ' If we just look at the relationships of context mapping in domain-driven design, we can identify that these actually map to the data interface quadrants very nicely.'
  },
  {
    startTime: 5001.25,
    person: 'Karol',
    text: " By the way, if somebody wants to find this lovely diagram that I posted in Draw.io, this is the book I'm referencing it from, that's by Vlad Kononov, Learning Domain-Driven Design."
  },
  {
    startTime: 5012.67,
    person: 'Karol',
    text: " It's a book a lot easier to digest than the books of Eric Evans, not that they are bad, they're just written in a different language that might be a little bit harder to grasp."
  },
  {
    startTime: 5023.49,
    person: 'Karol',
    text: " So if you don't have experience with domain-driven design and you're just starting with that, I recommend reading this one first and then going to Eric's books would be a better basis to get the grasp on what Eric Evans is saying in his."
  },
  {
    startTime: 5039.39,
    person: 'Karol',
    text: ' So the relationships are there and if we look and map our relationships and understand those relationships between teams, between systems, we can then have that conversation over quadrants and then everybody will say, well, it depends, what are the use cases?'
  },
  {
    startTime: 5056.35,
    person: 'Karol',
    text: " And that is very helpful in my opinion to have these kinds of conversations because it's all about building those relationships and those relationships, according to Conway's law, trickle from between teams to systems anyway."
  },
  {
    startTime: 5069.45,
    person: 'Karol',
    text: " So it's always worth having that discussion in that sense of classification, right?"
  },
  {
    startTime: 5075.07,
    person: 'Miriam',
    text: " And I think it helps just to get everyone on the same page because mostly people don't talk about the topic."
  },
  {
    startTime: 5081.01,
    person: 'Miriam',
    text: ' So everyone has their thing in mind, but nobody pins it down and then it goes to the opposite directions.'
  },
  {
    startTime: 5087.43,
    person: 'Miriam',
    text: " And I think the hope, if you talk to companies who want to be, call it API first, call it whatever, API is a product, they hope that people only build the red and blue things, but then teams don't understand why and teams don't understand when this is needed and teams don't, you can't only say, now we're API first, so, right?"
  },
  {
    startTime: 5106.91,
    person: 'Miriam',
    text: " We do API as a product now, but then you also need to tell teams why this is necessary and why this makes sense for their case that they're building, right?"
  },
  {
    startTime: 5114.89,
    person: 'Miriam',
    text: " If the team says, no, we're building a backend for frontend, then someone has to go there and explain to them why they should write about the composition service or something else than a backend for frontend and why this is the right way to go, right?"
  },
  {
    startTime: 5125.91,
    person: 'Miriam',
    text: ' So these are the interesting discussions that happen then because people need to get into that and discuss really like, what are we building and why are we building it like that and what implications does it have if we suddenly build something else?'
  },
  {
    startTime: 5139.15,
    person: 'Miriam',
    text: " And it's also something we always say, if a team build a backend for frontend for years, they would not magically know how to build a composition service and what applies to that, right?"
  },
  {
    startTime: 5148.31,
    person: 'Karol',
    text: ' Absolutely.'
  },
  {
    startTime: 5149.13,
    person: 'Miriam',
    text: " Training and enablement and stuff, you cannot just expect them to jump there in every quadrant and know exactly what they're building, especially as we discussed, they're not expert for interfaces, APIs, integration, any of that, right?"
  },
  {
    startTime: 5161.53,
    person: 'Miriam',
    text: " They're just a team building a backend or maintaining their database or whatever, right?"
  },
  {
    startTime: 5166.03,
    person: 'Karol',
    text: ' So just putting that in a perspective of ecosystem interoperability, I literally was in a situation where a company composed their integration team based on former DBAs, former DBAs and database administrators, and they were expecting them to provide a decent integration platform.'
  },
  {
    startTime: 5196.19,
    person: 'Karol',
    text: " Now, if you look at mindsets of these people, well, no, that's not gonna happen because the mindset of interoperability is persist nothing."
  },
  {
    startTime: 5207.93,
    person: 'Karol',
    text: ' The mindset of a DBA is persist everything.'
  },
  {
    startTime: 5210.95,
    person: 'Karol',
    text: ' So what they did, they did basically an MDM solution covered around with Azure functions to feed the data into the MDM and then redistribute the data from the MDM.'
  },
  {
    startTime: 5222.21,
    person: 'Karol',
    text: ' That was their integration platform.'
  },
  {
    startTime: 5224.47,
    person: 'Karol',
    text: ' Was that anywhere near a composition service?'
  },
  {
    startTime: 5227.61,
    person: 'Karol',
    text: ' No, that was all data links, basically, right?'
  },
  {
    startTime: 5230.93,
    person: 'Karol',
    text: ' So it is a difficult topic to tackle in terms of skillset and mindset over the design and working on things.'
  },
  {
    startTime: 5242.27,
    person: 'Karol',
    text: ' So if, again, another topic that I discussed today'
  },
  {
    startTime: 5245.39,
    person: 'Karol',
    text: ' and scheduled for a later stream somewhere in November,'
  },
  {
    startTime: 5250.75,
    person: 'Karol',
    text: ' migrating, for example, from Mule platform'
  },
  {
    startTime: 5253.6,
    person: 'Karol',
    text: ' as a MuleSoft integration platform to just pure Java,'
  },
  {
    startTime: 5258.57,
    person: 'Karol',
    text: ' I mean, okay, the cost of licences are high,'
  },
  {
    startTime: 5262.71,
    person: 'Karol',
    text: " but companies still don't think about the cost of retraining"
  },
  {
    startTime: 5267.38,
    person: 'Karol',
    text: ' or rehiring the whole teams, the cost of lost knowledge,'
  },
  {
    startTime: 5271.1,
    person: 'Karol',
    text: ' because if they start-'
  },
  {
    startTime: 5271.91,
    person: 'Miriam',
    text: ' The migration cost.'
  },
  {
    startTime: 5272.91,
    person: 'Karol',
    text: " Oh, the migration cost, yeah, that's another thing."
  },
  {
    startTime: 5277.17,
    person: 'Karol',
    text: " But there are other implied costs other than the OPEX of licences, and that's the difficult part as well, because if they suddenly drop a low-code integration platform, their developers will go away to a different company to continue doing a low-code platform."
  },
  {
    startTime: 5294.81,
    person: 'Karol',
    text: ' So they will lose all knowledge.'
  },
  {
    startTime: 5296.45,
    person: 'Karol',
    text: ' They will have to rehire the whole team.'
  },
  {
    startTime: 5297.89,
    person: 'Karol',
    text: " They'll get probably Java developers or something like that, and they'll have to retrain them in thinking about interoperability, because those Java developers will be set to back-and-forth front-end or data link."
  },
  {
    startTime: 5311.57,
    person: 'Karol',
    text: " That's just not feasible in that sense."
  },
  {
    startTime: 5314.65,
    person: 'Karol',
    text: " So, yeah, so that's the difficulty there."
  },
  {
    startTime: 5318.81,
    person: 'Karol',
    text: ' Right, here we have Tom Donker referring other books about DDD.'
  },
  {
    startTime: 5324.45,
    person: 'Karol',
    text: " Yes, we have also Vernon with a red and green book, also a nice read if you're learning DDD."
  },
  {
    startTime: 5330.77,
    person: 'Karol',
    text: ' So, yeah, okay, you know what?'
  },
  {
    startTime: 5334.71,
    person: 'Karol',
    text: ' I do have also, somewhere here in the tab, I did some playing around thinking about the quadrants.'
  },
  {
    startTime: 5341.69,
    person: 'Karol',
    text: ' I think I showed you that when we chatted about the livestream earlier.'
  },
  {
    startTime: 5345.07,
    person: 'Karol',
    text: ' I actually tried to map even-driven architecture and different patterns from even-driven architecture into the quadrants.'
  },
  {
    startTime: 5354.57,
    person: 'Karol',
    text: ' I must say mapping async to this is quite a challenge.'
  },
  {
    startTime: 5360.31,
    person: 'Karol',
    text: " At least that's my take of how I would use those certain patterns in terms of various options."
  },
  {
    startTime: 5369.69,
    person: 'Karol',
    text: ' So this, again, depends on what you wanna achieve and why you wanna do it, and those patterns are various, and people understand them also differently.'
  },
  {
    startTime: 5379.75,
    person: 'Karol',
    text: ' But just looking at the data link, content-based routing went into the data link straight away, right?'
  },
  {
    startTime: 5386.73,
    person: 'Karol',
    text: " Because in pure EDA, you shouldn't do content-based routing because that introduces additional complexity."
  },
  {
    startTime: 5392.47,
    person: 'Karol',
    text: " And I was like, hmm, yeah, we're pulling, even sourcing from legacy systems that cannot do events."
  },
  {
    startTime: 5401.34,
    person: 'Karol',
    text: ' That feels like the data link.'
  },
  {
    startTime: 5404.18,
    person: 'Karol',
    text: ' I know that I asked Daniel about mapping EDA to the quadrants, and he said he never tried it.'
  },
  {
    startTime: 5412,
    person: 'Karol',
    text: " What's your perspective on that?"
  },
  {
    startTime: 5415.38,
    person: 'Miriam',
    text: " I think in general, I mean, I think it's great to also bring it more to the architecture and ecosystem perspective, right?"
  },
  {
    startTime: 5422.9,
    person: 'Miriam',
    text: " We never did that because we didn't require it, let's be honest."
  },
  {
    startTime: 5426.28,
    person: 'Miriam',
    text: ' We develop tools if we need them right now, right?'
  },
  {
    startTime: 5429.5,
    person: 'Miriam',
    text: ' Of course.'
  },
  {
    startTime: 5430.18,
    person: 'Miriam',
    text: ' With people, mainly.'
  },
  {
    startTime: 5432.06,
    person: 'Miriam',
    text: ' So this was really interesting what you brought up.'
  },
  {
    startTime: 5434.3,
    person: 'Miriam',
    text: ' I never traded myself media, but I think this is a really interesting thing that you came up with, and I really like it because I think it gives it another layer, right, on top of it.'
  },
  {
    startTime: 5443.48,
    person: 'Miriam',
    text: ' We also discussed other topics, like on an architectural ecosystem level that we never thought of when we designed it the first time, right?'
  },
  {
    startTime: 5450.94,
    person: 'Miriam',
    text: ' Because we just needed something to discuss with developers and architects.'
  },
  {
    startTime: 5454.22,
    person: 'Miriam',
    text: ' That was the need we had at the time where we came up with it, right?'
  },
  {
    startTime: 5458.02,
    person: 'Karol',
    text: " So I think- The key difference is that I'm a researcher and I do research, so I ponder on things that I'm not pragmatic in them because I just start thinking about them and then see if they apply to anything practical."
  },
  {
    startTime: 5472.26,
    person: 'Karol',
    text: " So that's the difference there."
  },
  {
    startTime: 5475.1,
    person: 'Miriam',
    text: ' I did a lot of research too, especially during my PhD.'
  },
  {
    startTime: 5479.38,
    person: 'Miriam',
    text: ' But I think, as I said, most of the times right now we develop things that we really need based on what we discuss with people, right?'
  },
  {
    startTime: 5487.36,
    person: 'Miriam',
    text: ' We come up with solutions for problems we already see just because this is interesting.'
  },
  {
    startTime: 5492.12,
    person: 'Miriam',
    text: ' But I think also, I mean, we work on different things, right?'
  },
  {
    startTime: 5496.84,
    person: 'Miriam',
    text: " That's also what you see here because I mainly work with teams, right?"
  },
  {
    startTime: 5499.8,
    person: 'Miriam',
    text: ' I have lots of different- If I would come with that, they would be completely overwhelmed, right?'
  },
  {
    startTime: 5505.72,
    person: 'Miriam',
    text: ' So just a whole different level of people to discuss, right?'
  },
  {
    startTime: 5509.66,
    person: 'Karol',
    text: " Yeah, this is basically taking Gregor Horst's book, Enterprise Integration Patterns and just throwing it on the quadrants."
  },
  {
    startTime: 5518.5,
    person: 'Karol',
    text: ' Some of those patterns are literally taken from that book.'
  },
  {
    startTime: 5521.9,
    person: 'Miriam',
    text: ' Yeah.'
  },
  {
    startTime: 5522.42,
    person: 'Karol',
    text: ' Others are redefined.'
  },
  {
    startTime: 5524.6,
    person: 'Karol',
    text: ' And it just pops up patterns and there are different flavours to pops up.'
  },
  {
    startTime: 5528.46,
    person: 'Karol',
    text: ' And we have them, the pops up we have as a broadcast with a rich event, with broadcast with anaemic, multicasts, and waiter pattern, which is a completely different way of broadcasting, right?'
  },
  {
    startTime: 5540.7,
    person: 'Karol',
    text: ' And these are all certain types of data movement and application integration that is completely different than traditional synchronous APIs, right?'
  },
  {
    startTime: 5553.46,
    person: 'Karol',
    text: ' So that makes quite a difference in thinking.'
  },
  {
    startTime: 5558.16,
    person: 'Karol',
    text: " And then I'll go back to the raw image here."
  },
  {
    startTime: 5564.2,
    person: 'Karol',
    text: ' Then I was pondering on this from a perspective of an enterprise application integration from that ecosystem perspective that I do research on.'
  },
  {
    startTime: 5574.18,
    person: 'Karol',
    text: " And basically, oh, well, maybe I'll shift here."
  },
  {
    startTime: 5577.34,
    person: 'Karol',
    text: ' Basically we have in the research, we have four different architectural styles for interoperability on an ecosystem level.'
  },
  {
    startTime: 5586.76,
    person: 'Karol',
    text: " Ignore the spaghetti architecture because it's just for reference."
  },
  {
    startTime: 5590.72,
    person: 'Karol',
    text: " That's not an architectural style."
  },
  {
    startTime: 5592.04,
    person: 'Karol',
    text: " That's a consequence of unmanaged point to point."
  },
  {
    startTime: 5596.34,
    person: 'Karol',
    text: " So if we're looking at DIQs from a perspective of a system, we're looking from a perspective of point to point in ecosystem styles."
  },
  {
    startTime: 5608.1,
    person: 'Karol',
    text: " That's basically just client server relationship, right?"
  },
  {
    startTime: 5612.88,
    person: 'Karol',
    text: ' But then I tried to map it as event driven.'
  },
  {
    startTime: 5618.06,
    person: 'Karol',
    text: ' Broker, yeah, you can do through broker, which is most parts is batch ETL, ELT, but you can do single record processing as well.'
  },
  {
    startTime: 5629.28,
    person: 'Karol',
    text: ' It depends how you build that integration flow.'
  },
  {
    startTime: 5631.84,
    person: 'Karol',
    text: ' The fun part is when you go into API led architecture, which is an offshoot of a service orientated architecture with three distinct layers.'
  },
  {
    startTime: 5641.71,
    person: 'Karol',
    text: " And this is where the fun part began for me because I looked at the diagram and basically I'm looking like, oh, okay."
  },
  {
    startTime: 5651.7,
    person: 'Karol',
    text: ' I would probably rename the quadrants a little bit for that perspective.'
  },
  {
    startTime: 5655.6,
    person: 'Karol',
    text: " But in API led architecture, I do not see data links at all because I'm on an ecosystem level."
  },
  {
    startTime: 5662.84,
    person: 'Karol',
    text: " So they're not relevant."
  },
  {
    startTime: 5664.82,
    person: 'Karol',
    text: " So if I'm looking at this from API led, so this here backend for frontend, this is the exposure of data in certain way."
  },
  {
    startTime: 5674.72,
    person: 'Karol',
    text: ' Okay, so that would be in MuleSoft nomenclature, my experience layer.'
  },
  {
    startTime: 5680.88,
    person: 'Karol',
    text: " In my nomenclature, that's the channel."
  },
  {
    startTime: 5682.56,
    person: 'Karol',
    text: ' So this is the layer that is consumed by the main systems.'
  },
  {
    startTime: 5687.68,
    person: 'Karol',
    text: ' Then the data product layer is the access to raw data, the raw services, unfiltered, generic.'
  },
  {
    startTime: 5695.4,
    person: 'Karol',
    text: " So that's my adapter layer or the system layer in MuleSoft, right?"
  },
  {
    startTime: 5700.72,
    person: 'Karol',
    text: ' And then the composition service, quite funny enough, is the exact same naming that I use for the middle layer, which is the composition layer.'
  },
  {
    startTime: 5708.6,
    person: 'Karol',
    text: ' And we have composition services in there, which is the layer where we take the data products and the raw data from different systems from the adapter layer and create services from them.'
  },
  {
    startTime: 5721.54,
    person: 'Karol',
    text: ' So create some sort of generic products that we can offer as reusable services.'
  },
  {
    startTime: 5730.34,
    person: 'Karol',
    text: ' And then we offer those reusable services to the channel layer.'
  },
  {
    startTime: 5736.18,
    person: 'Karol',
    text: ' And that channel layer is specialised towards a specific consumer.'
  },
  {
    startTime: 5739.94,
    person: 'Karol',
    text: ' There is a single API per consumer.'
  },
  {
    startTime: 5743.42,
    person: 'Karol',
    text: ' They do not reuse API between one another.'
  },
  {
    startTime: 5745.9,
    person: 'Karol',
    text: ' So if I have a Salesforce instance, that Salesforce will be consuming Salesforce channel API.'
  },
  {
    startTime: 5751.34,
    person: 'Karol',
    text: ' If I have a SAP, SAP will be consuming SAP channel, etcétera, etcétera, right?'
  },
  {
    startTime: 5757.66,
    person: 'Karol',
    text: ' So this is a tailored, specific, non-reusable API.'
  },
  {
    startTime: 5764.48,
    person: 'Karol',
    text: ' And that made it very interesting because this is very applicable and a very nice way to explain the layers of API-led architecture and their purpose when designing APIs for people that are not integrators.'
  },
  {
    startTime: 5780.68,
    person: 'Karol',
    text: " Because some people think that, oh, putting that iPaaS, that's an overkill."
  },
  {
    startTime: 5784.68,
    person: 'Karol',
    text: " That's too much."
  },
  {
    startTime: 5786.56,
    person: 'Karol',
    text: " I mean, yes, if you put an API-led architecture in a company that has five systems total, that's definitely an overkill."
  },
  {
    startTime: 5795.48,
    person: 'Karol',
    text: " They don't probably even need an iPaaS."
  },
  {
    startTime: 5797.46,
    person: 'Karol',
    text: " They could do well with even driven architecture and they'll be fine."
  },
  {
    startTime: 5801.22,
    person: 'Miriam',
    text: ' Yes.'
  },
  {
    startTime: 5802.44,
    person: 'Karol',
    text: ' But if you have a company, a corporate environment that has a hundred domain systems, good luck doing that point-to-point or EDA without any capacity for transformations and protocol mediation, etcétera, etcétera.'
  },
  {
    startTime: 5819.02,
    person: 'Karol',
    text: ' Not feasible at all.'
  },
  {
    startTime: 5821.6,
    person: 'Miriam',
    text: " I found it very interesting because I recently talked to some people that said, well, all these API-led, we decided we don't need it."
  },
  {
    startTime: 5830.98,
    person: 'Miriam',
    text: ' We go back to point-to-point.'
  },
  {
    startTime: 5832.86,
    person: 'Miriam',
    text: " That was something that I already heard, which was very interesting because I thought actually what was missing and that's what you touched before is the mindset shift, right?"
  },
  {
    startTime: 5844.44,
    person: 'Miriam',
    text: " That's what you're saying."
  },
  {
    startTime: 5845.48,
    person: 'Miriam',
    text: ' You need to shift the mindset.'
  },
  {
    startTime: 5847.54,
    person: 'Miriam',
    text: " Even if you want to do something like that, you need to completely understand that's a different mindset."
  },
  {
    startTime: 5852.66,
    person: 'Miriam',
    text: " And I think that some companies that don't really manage to do this mindset shift are actually going back because it costs them a lot of money and they don't see the benefits."
  },
  {
    startTime: 5863.2,
    person: 'Miriam',
    text: ' So did you already hear about something like that or can you imagine that as well?'
  },
  {
    startTime: 5868.72,
    person: 'Miriam',
    text: ' Because I heard that and I was really surprised that the mindset shift is so difficult for some people, right?'
  },
  {
    startTime: 5875.6,
    person: 'Karol',
    text: " I'm not surprised because that's literally the consequence of Conway's law."
  },
  {
    startTime: 5881.4,
    person: 'Miriam',
    text: ' Yeah.'
  },
  {
    startTime: 5881.78,
    person: 'Karol',
    text: ' Literally.'
  },
  {
    startTime: 5882.98,
    person: 'Miriam',
    text: ' Yeah, exactly.'
  },
  {
    startTime: 5884.24,
    person: 'Karol',
    text: " I'm not surprised by this to the extent that this was literally the problem of, in a lot of cases, of the early adoptions of ESBs."
  },
  {
    startTime: 5897.18,
    person: 'Miriam',
    text: ' Yes.'
  },
  {
    startTime: 5897.8,
    person: 'Karol',
    text: ' Because companies think they can solve their interoperability problems by throwing technology at them.'
  },
  {
    startTime: 5903.78,
    person: 'Miriam',
    text: ' Of course, always.'
  },
  {
    startTime: 5905.04,
    person: 'Miriam',
    text: ' Yeah.'
  },
  {
    startTime: 5905.46,
    person: 'Karol',
    text: " That's not the case."
  },
  {
    startTime: 5906.76,
    person: 'Karol',
    text: " Technology doesn't solve the problems."
  },
  {
    startTime: 5908.58,
    person: 'Karol',
    text: ' If you just throw technology at it without the underlying organisational change with it, the technology will fail.'
  },
  {
    startTime: 5915.64,
    person: 'Karol',
    text: ' No matter how good that technology is.'
  },
  {
    startTime: 5917.96,
    person: 'Karol',
    text: " And it's not the fault of the technology because the technology without proper implementation and governance will solve no problems."
  },
  {
    startTime: 5925.96,
    person: 'Karol',
    text: " That's just the case it is."
  },
  {
    startTime: 5928.18,
    person: 'Karol',
    text: " That's why we don't use the term ESB anymore in general conversation about interoperability because too many companies have burned on ESBs, burned a lot of money, a lot of effort with very little return on investment because they just did technology without changing the way they work, without changing the processes, without changing the governance."
  },
  {
    startTime: 5953.74,
    person: 'Karol',
    text: ' And they expected magical miracles.'
  },
  {
    startTime: 5956.36,
    person: 'Karol',
    text: ' This is one of the problems we face as integration architects that we need to go in and have a conversation about the organisation rather than technology.'
  },
  {
    startTime: 5968.54,
    person: 'Miriam',
    text: ' Yeah.'
  },
  {
    startTime: 5968.88,
    person: 'Miriam',
    text: " Daniel and me wrote actually an article on the code centric block, which is when your API platform lacks the desired impact, because that's exactly what we see, right?"
  },
  {
    startTime: 5978.16,
    person: 'Miriam',
    text: " When we talk to customers, they would say, well, we bought the tool, we're done."
  },
  {
    startTime: 5983.5,
    person: 'Miriam',
    text: " And then they realise, oh no, we're not."
  },
  {
    startTime: 5985.12,
    person: 'Miriam',
    text: " And it's not working as expected, but why, right?"
  },
  {
    startTime: 5987.98,
    person: 'Miriam',
    text: " And that's exactly what you're saying."
  },
  {
    startTime: 5989.52,
    person: 'Miriam',
    text: ' Most people think that technology is enough, but as you stated at the beginning, or we stated all at the beginning, the technical aspect is not the most important one.'
  },
  {
    startTime: 5997.74,
    person: 'Miriam',
    text: ' I mean, you can solve that clearly, but the other aspects, right?'
  },
  {
    startTime: 6002.46,
    person: 'Miriam',
    text: ' The aspects like how do we communicate?'
  },
  {
    startTime: 6005,
    person: 'Miriam',
    text: ' How do we build up our teams?'
  },
  {
    startTime: 6007.92,
    person: 'Miriam',
    text: ' How do we organise governance?'
  },
  {
    startTime: 6010.16,
    person: 'Miriam',
    text: ' All these things.'
  },
  {
    startTime: 6010.98,
    person: 'Miriam',
    text: " How do we shift people's mindset from we're just building our back end for front end and we don't care about anything else, right?"
  },
  {
    startTime: 6017.42,
    person: 'Miriam',
    text: " I had in a training, a guy who said, well, I don't care if anyone likes my APIs."
  },
  {
    startTime: 6023.08,
    person: 'Miriam',
    text: ' I built them the way I want them.'
  },
  {
    startTime: 6024.26,
    person: 'Miriam',
    text: " And if nobody likes them, that's it."
  },
  {
    startTime: 6026.36,
    person: 'Miriam',
    text: " They're like, yeah, well, you can think like that, but if your company wants to be like design APIs as a product and be API first, you need to change your mindset."
  },
  {
    startTime: 6038.72,
    person: 'Miriam',
    text: " And it's very difficult to reach these people and change their mindset, right?"
  },
  {
    startTime: 6042.24,
    person: 'Miriam',
    text: ' You need, it needs a lots of time.'
  },
  {
    startTime: 6044.4,
    person: 'Miriam',
    text: ' It needs special effort.'
  },
  {
    startTime: 6045.92,
    person: 'Miriam',
    text: " You can't just put a tool there and assume people will love it and know what to do with it and how it works and why they need it, right?"
  },
  {
    startTime: 6051.92,
    person: 'Karol',
    text: " It's about applying the value, showing the value of these tools and where they bring help and value to the conversation."
  },
  {
    startTime: 6061.82,
    person: 'Karol',
    text: " That's one of the biggest challenges there, because a lot of the times, if we look at companies that are not digital, right?"
  },
  {
    startTime: 6072.74,
    person: 'Karol',
    text: ' They see IT as just a syphon of cost.'
  },
  {
    startTime: 6078.04,
    person: 'Karol',
    text: " It's just draining money, right?"
  },
  {
    startTime: 6080.56,
    person: 'Karol',
    text: ' Explaining this in these kinds of companies is already a nightmarish challenge.'
  },
  {
    startTime: 6084.8,
    person: 'Karol',
    text: ' And then while you can still justify the ownership and the alignment here on the business around the main systems that have front-ends and people use directly, this is easy.'
  },
  {
    startTime: 6102.76,
    person: 'Karol',
    text: " But if you try to justify that for an integration platform where that integration platform does not have a direct impact on the business, well, doesn't, it does have a direct impact on the business."
  },
  {
    startTime: 6114.78,
    person: 'Karol',
    text: " But business does not see that because they don't see a front-end for an integration platform."
  },
  {
    startTime: 6120.4,
    person: 'Karol',
    text: " They don't use an integration platform."
  },
  {
    startTime: 6122.6,
    person: 'Karol',
    text: " They don't know they're using the integration platform."
  },
  {
    startTime: 6125.88,
    person: 'Karol',
    text: ' So for them, an integration platform is just a cost.'
  },
  {
    startTime: 6128.86,
    person: 'Karol',
    text: " It's just infrastructure."
  },
  {
    startTime: 6131.78,
    person: 'Karol',
    text: " And from that perspective, when we start treating interoperability as infrastructure, well, we don't design for it."
  },
  {
    startTime: 6139.68,
    person: 'Karol',
    text: " We don't think about it."
  },
  {
    startTime: 6140.86,
    person: 'Karol',
    text: " We don't care about it."
  },
  {
    startTime: 6141.88,
    person: 'Karol',
    text: " We don't design our domain systems for it."
  },
  {
    startTime: 6145.84,
    person: 'Karol',
    text: ' And it gives, oh, so many problems.'
  },
  {
    startTime: 6149.86,
    person: 'Karol',
    text: ' The moment we start thinking of an integration platform and our interoperability capabilities as the heart pumping the blood of the business, the shift becomes something real.'
  },
  {
    startTime: 6163.14,
    person: 'Karol',
    text: ' And then the understanding is brought in.'
  },
  {
    startTime: 6166.5,
    person: 'Karol',
    text: " But that's, to achieve that, that's very difficult."
  },
  {
    startTime: 6169.02,
    person: 'Karol',
    text: ' That maturity happens in organisations that are very technically driven because they have that understanding.'
  },
  {
    startTime: 6178.38,
    person: 'Karol',
    text: " So telco, that's one industry where this is just the golden standard."
  },
  {
    startTime: 6185.82,
    person: 'Karol',
    text: ' Sometimes happens in banking, not always.'
  },
  {
    startTime: 6189.22,
    person: 'Karol',
    text: ' I recently saw a implementation of a MuleSoft platform in a bank.'
  },
  {
    startTime: 6194.34,
    person: 'Karol',
    text: ' And I was surprised because they even thought about proper domain partitioning over each layer.'
  },
  {
    startTime: 6200.62,
    person: 'Karol',
    text: " I was like, I need to talk to the architect that figured this out because that's just the most mature implementation of an API-led architecture I have saw in my life."
  },
  {
    startTime: 6210.62,
    person: 'Karol',
    text: ' And I saw many, I saw really plenty of implementations of API-led.'
  },
  {
    startTime: 6215.24,
    person: 'Karol',
    text: ' None of them were this mature.'
  },
  {
    startTime: 6217.42,
    person: 'Karol',
    text: ' I was literally like, give me the person that designed this, that figured this out because I wanna know how he achieved that in an organisation.'
  },
  {
    startTime: 6226.52,
    person: 'Karol',
    text: " I don't care about the technical part because I know how to do this properly."
  },
  {
    startTime: 6230.84,
    person: 'Karol',
    text: " But to convince an organisation to follow that and go through with that, it's like, tell me how."
  },
  {
    startTime: 6238.22,
    person: 'Karol',
    text: ' I wanna know.'
  },
  {
    startTime: 6240.46,
    person: 'Karol',
    text: ' It differs from company to company.'
  },
  {
    startTime: 6242.6,
    person: 'Karol',
    text: " It's gonna be, yeah, we're gonna tell the same story over and over again and try to explain interoperability."
  },
  {
    startTime: 6249.5,
    person: 'Karol',
    text: ' It will land or will not land.'
  },
  {
    startTime: 6251.68,
    person: 'Karol',
    text: ' It depends on the, oh, on so many aspects.'
  },
  {
    startTime: 6255.6,
    person: 'Karol',
    text: ' The first live stream on Loosely Coupled we talked, I talked with Fran Mendes about adoption of EDA in organisations.'
  },
  {
    startTime: 6264.7,
    person: 'Karol',
    text: ' Like I said in our conversation just before the stream, the conversation shifted to mental health because mental health of your employees in your IT of the organisation impacts the adoption of architecture.'
  },
  {
    startTime: 6282.84,
    person: 'Karol',
    text: " If those people do not feel psychologically safe, they'll be resistant to change."
  },
  {
    startTime: 6288.24,
    person: 'Karol',
    text: ' So I think that translates very well to the people that come to your trainings.'
  },
  {
    startTime: 6292.68,
    person: 'Karol',
    text: " If they're not psychologically safe, they are not able to learn."
  },
  {
    startTime: 6296.66,
    person: 'Karol',
    text: " So they come out of the trainings being opinionated and saying that they didn't learn anything."
  },
  {
    startTime: 6301.62,
    person: 'Miriam',
    text: ' Yeah, I think you always have one or two of those.'
  },
  {
    startTime: 6304.02,
    person: 'Miriam',
    text: " Usually most people want to learn, that's my experience."
  },
  {
    startTime: 6307.26,
    person: 'Miriam',
    text: " But also I think sometimes it's also the underestimated pressure on people."
  },
  {
    startTime: 6312.7,
    person: 'Miriam',
    text: " What I also tell a lot of times, and that's also a real story, a developer that I work with who needed to do an API, she told me, if I don't finish this until tomorrow, I'm dead."
  },
  {
    startTime: 6324.74,
    person: 'Miriam',
    text: " That's a quote, you know?"
  },
  {
    startTime: 6326.48,
    person: 'Miriam',
    text: " And if you're in an enterprise context where people are so much under pressure that they need to finish something in no time, what type of good solutions do you expect, right?"
  },
  {
    startTime: 6335.7,
    person: 'Karol',
    text: ' I mean- Oh yeah.'
  },
  {
    startTime: 6337.86,
    person: 'Miriam',
    text: " That's always the problem because people are so much under pressure to finish stuff in no time with no experience for it."
  },
  {
    startTime: 6345.06,
    person: 'Miriam',
    text: " So they're trying to get it done fast."
  },
  {
    startTime: 6346.92,
    person: 'Miriam',
    text: " And the faster people work, the less time they have to shift their mindset or to learn something new because they're just trying to get it finished as quickly as possible."
  },
  {
    startTime: 6355.12,
    person: 'Miriam',
    text: " It's just lots of pressure on them."
  },
  {
    startTime: 6357.4,
    person: 'Miriam',
    text: ' So I think this is also an important aspect of that mindset.'
  },
  {
    startTime: 6360.4,
    person: 'Miriam',
    text: ' People need time to change their mindset.'
  },
  {
    startTime: 6362.44,
    person: 'Miriam',
    text: " They won't do it overnight."
  },
  {
    startTime: 6365.6,
    person: 'Karol',
    text: " That's a horrendous situation to be in."
  },
  {
    startTime: 6368.16,
    person: 'Karol',
    text: ' If I need to just finish things and output things, this will never be quality.'
  },
  {
    startTime: 6374.04,
    person: 'Karol',
    text: ' This will be just done just to be done.'
  },
  {
    startTime: 6377,
    person: 'Karol',
    text: " That's like, I find that this is quite often in certain organisations, especially in certain consulting organisations, that's quite often it's, we need to output."
  },
  {
    startTime: 6386.42,
    person: 'Karol',
    text: " It doesn't matter if it's shitty, as long as the client signs off, we're good."
  },
  {
    startTime: 6391.4,
    person: 'Karol',
    text: ' And that contradicts my standards.'
  },
  {
    startTime: 6396.24,
    person: 'Karol',
    text: ' And I literally had to refuse signing off on things and releasing them to the client because they were not up to par.'
  },
  {
    startTime: 6404.86,
    person: 'Karol',
    text: " And I didn't care that we're gonna lose money on that."
  },
  {
    startTime: 6408.02,
    person: 'Karol',
    text: ' Somebody screwed up along the way.'
  },
  {
    startTime: 6410.22,
    person: 'Karol',
    text: ' We cannot produce quality.'
  },
  {
    startTime: 6412.16,
    person: 'Karol',
    text: " I'm not gonna sign it with my name because that says something about me."
  },
  {
    startTime: 6417.92,
    person: 'Karol',
    text: " I have the moral integrity to say no, but a lot of people will just sign it because they're scared about their job, their position."
  },
  {
    startTime: 6426.64,
    person: 'Karol',
    text: ' They have mortgages.'
  },
  {
    startTime: 6427.98,
    person: 'Karol',
    text: ' They have families they need to feed.'
  },
  {
    startTime: 6430.1,
    person: 'Karol',
    text: ' Oh, so many things.'
  },
  {
    startTime: 6432.38,
    person: 'Karol',
    text: ' And these are all impacts on everything, right?'
  },
  {
    startTime: 6436.36,
    person: 'Karol',
    text: " And it's a difficult puzzle to see, especially if you're in certain places in an organisation, you don't see that at all."
  },
  {
    startTime: 6445.8,
    person: 'Karol',
    text: ' In the end, we are all human and we have our troubles and this will impact the business one way or another.'
  },
  {
    startTime: 6452.88,
    person: 'Miriam',
    text: ' Of course.'
  },
  {
    startTime: 6454.16,
    person: 'Miriam',
    text: ' In that way, it was good because I was as an external in a good position.'
  },
  {
    startTime: 6459.28,
    person: 'Miriam',
    text: ' So I said, well, I can talk to your product owner.'
  },
  {
    startTime: 6462,
    person: 'Miriam',
    text: ' I have nothing to do with him or your product manager.'
  },
  {
    startTime: 6464.38,
    person: 'Miriam',
    text: " I will never see this person again and I will tell them why you won't finish tomorrow."
  },
  {
    startTime: 6467.86,
    person: 'Miriam',
    text: ' No problem, right?'
  },
  {
    startTime: 6469.08,
    person: 'Miriam',
    text: ' Yeah.'
  },
  {
    startTime: 6469.4,
    person: 'Miriam',
    text: ' And if you have a certain knowledge, you can also argue, right?'
  },
  {
    startTime: 6472.88,
    person: 'Miriam',
    text: " But if you're a developer who never did that before, who doesn't know how long it takes, who doesn't know why it takes longer than expected, it's very difficult to explain yourself, right?"
  },
  {
    startTime: 6480.98,
    person: 'Miriam',
    text: " You just don't have the arguments."
  },
  {
    startTime: 6483.3,
    person: 'Miriam',
    text: " And that's what I think what's really great about like the enablement aspect, right?"
  },
  {
    startTime: 6491.1,
    person: 'Miriam',
    text: " If I'm in an enabling team, like according to team topologies, if anyone knows that I can easily step in and say, well, dear manager of this person, nice that you want to see tomorrow, but you know, we have to do all these steps and they are complicated because, and that's why it will need time, right?"
  },
  {
    startTime: 6510.18,
    person: 'Miriam',
    text: " No matter how, when your deadline is tomorrow, I'm sorry, but we won't do that, right?"
  },
  {
    startTime: 6516.1,
    person: 'Miriam',
    text: " So I think if you have that layer, you can at least support people in finding the right arguments and give them the arguments that they need to convince someone that they can't be done tomorrow, but alone they are lost, right?"
  },
  {
    startTime: 6527.48,
    person: 'Miriam',
    text: " That's my experience because- Absolutely, yes."
  },
  {
    startTime: 6531.86,
    person: 'Miriam',
    text: " Where do you get the arguments from if you don't know them or you never use them, right?"
  },
  {
    startTime: 6536.36,
    person: 'Miriam',
    text: " And you're not like an expert on these things, where do you get them from?"
  },
  {
    startTime: 6540.68,
    person: 'Karol',
    text: " Exactly, and then if you think of it from even the perspective of cognitive load, which is something team topologies touches upon very strongly, think about how little germane cognitive load those people have when they, what's that, intrinsic load?"
  },
  {
    startTime: 6562.74,
    person: 'Karol',
    text: ' Yeah, extraneous and intrinsic, right?'
  },
  {
    startTime: 6564.94,
    person: 'Karol',
    text: " They're the other two."
  },
  {
    startTime: 6565.5,
    person: 'Karol',
    text: " The intrinsic load is so high on them because their own emotions, their own psychological safety, the pressure that's put on them, the stress just completely blocks their capacity to think in that sense, right?"
  },
  {
    startTime: 6585.12,
    person: 'Karol',
    text: ' And if we put it in the way that often management sees that, management often sees this lovely triangle, right?'
  },
  {
    startTime: 6595.86,
    person: 'Karol',
    text: ' Which is a fake, this is not the actual thing.'
  },
  {
    startTime: 6600.02,
    person: 'Karol',
    text: " It's time, cost, quality."
  },
  {
    startTime: 6601.48,
    person: 'Karol',
    text: " No, that's not how it is."
  },
  {
    startTime: 6603.66,
    person: 'Miriam',
    text: ' You can only pick two of them, right?'
  },
  {
    startTime: 6606.18,
    person: 'Karol',
    text: " That's what they say, right?"
  },
  {
    startTime: 6607.58,
    person: 'Miriam',
    text: " Yeah, exactly, that's the story behind it if someone doesn't know, right?"
  },
  {
    startTime: 6610.92,
    person: 'Karol',
    text: ' But this is the actual thing.'
  },
  {
    startTime: 6613.82,
    person: 'Karol',
    text: " It's cost, time and scope, which impact quality."
  },
  {
    startTime: 6616.88,
    person: 'Karol',
    text: " If we don't have time, we close this up."
  },
  {
    startTime: 6619.78,
    person: 'Karol',
    text: ' We can do it also at low cost, but the scope will, well, be the same.'
  },
  {
    startTime: 6625.12,
    person: 'Karol',
    text: ' The quality will be squished, will be bad.'
  },
  {
    startTime: 6627.94,
    person: 'Karol',
    text: " So if that's the case, it's gonna be always a problem."
  },
  {
    startTime: 6633.46,
    person: 'Karol',
    text: ' We have to keep the quality the same.'
  },
  {
    startTime: 6635.74,
    person: 'Karol',
    text: ' We have to adjust, when we change one, we have to adjust some others, right?'
  },
  {
    startTime: 6639.92,
    person: 'Karol',
    text: ' To see if that keeps the quality.'
  },
  {
    startTime: 6642.84,
    person: 'Karol',
    text: ' The quality should be looking at maintaining the quality.'
  },
  {
    startTime: 6648.16,
    person: 'Karol',
    text: ' And if we squish the time to so little with remaining scope, and also try to compress the cost not to add to it, well, impossible to achieve the same quality.'
  },
  {
    startTime: 6663.62,
    person: 'Karol',
    text: ' Impossible to achieve something that is more than the exposition of a relational database.'
  },
  {
    startTime: 6670.4,
    person: 'Miriam',
    text: ' That works today and maybe not tomorrow, right?'
  },
  {
    startTime: 6673.28,
    person: 'Karol',
    text: " Exactly, it's not gonna be reusable."
  },
  {
    startTime: 6675.48,
    person: 'Karol',
    text: " It's not gonna be anything that will bring business, that will bring further development of the business, right?"
  },
  {
    startTime: 6684.44,
    person: 'Karol',
    text: ' It will just serve the purpose for now.'
  },
  {
    startTime: 6686.16,
    person: 'Karol',
    text: " It's a workaround, it's a tactical choice."
  },
  {
    startTime: 6687.9,
    person: 'Miriam',
    text: ' And next time someone needs it, they will do the same again, build it again, and again, and again.'
  },
  {
    startTime: 6693.94,
    person: 'Karol',
    text: " And then we go into the problem of API federation, API management federation, and repeated implementations of APIs that we have 10 APIs do exactly the same thing because they didn't even know that these things exist because they didn't have time to discover those."
  },
  {
    startTime: 6716.14,
    person: 'Karol',
    text: " They didn't have time to think about them."
  },
  {
    startTime: 6718.14,
    person: 'Karol',
    text: " They didn't have time to ask anybody."
  },
  {
    startTime: 6720.16,
    person: 'Karol',
    text: ' They were just like, you need to deliver.'
  },
  {
    startTime: 6722.28,
    person: 'Karol',
    text: ' Okay, boom.'
  },
  {
    startTime: 6723.64,
    person: 'Karol',
    text: ' API, a 10th API that does exactly the same thing that already the nine other teams figured out and did the same because they were pressured into.'
  },
  {
    startTime: 6732.32,
    person: 'Miriam',
    text: ' And two are maybe not used anymore, but nobody knows about them.'
  },
  {
    startTime: 6735.34,
    person: 'Miriam',
    text: " So they're still there, right?"
  },
  {
    startTime: 6736.74,
    person: 'Karol',
    text: " But they're still burning air in the server room and they still cost."
  },
  {
    startTime: 6740.8,
    person: 'Karol',
    text: ' Yeah.'
  },
  {
    startTime: 6741.32,
    person: 'Miriam',
    text: ' And they might still be a security risk, right?'
  },
  {
    startTime: 6744.72,
    person: 'Miriam',
    text: " Because nobody remembers that they're there."
  },
  {
    startTime: 6747.5,
    person: 'Karol',
    text: ' Oh yeah, yeah, definitely.'
  },
  {
    startTime: 6750.58,
    person: 'Karol',
    text: " That's 100%, that's already."
  },
  {
    startTime: 6753.56,
    person: 'Karol',
    text: " So this way we build technical depth, we build security risks, we build low IT maturity, we contribute to, what's that?"
  },
  {
    startTime: 6767.76,
    person: 'Karol',
    text: ' Not employee retention, the other way around, churn?'
  },
  {
    startTime: 6771.96,
    person: 'Karol',
    text: " No, that's client churn."
  },
  {
    startTime: 6774.7,
    person: 'Karol',
    text: " What's the word?"
  },
  {
    startTime: 6775.64,
    person: 'Karol',
    text: ' Just employees leaving the company, right?'
  },
  {
    startTime: 6777.76,
    person: 'Karol',
    text: ' So we lose valuable knowledge about our ecosystem.'
  },
  {
    startTime: 6781.92,
    person: 'Karol',
    text: " There's so many downsides to this kind of behaviour, but it's a normal behaviour in a lot of companies."
  },
  {
    startTime: 6788.52,
    person: 'Karol',
    text: ' Well, normal is a bad word.'
  },
  {
    startTime: 6791.44,
    person: 'Karol',
    text: ' Normalised behaviour in so many companies.'
  },
  {
    startTime: 6794.54,
    person: 'Karol',
    text: " And that's horrendous in that sense."
  },
  {
    startTime: 6797.2,
    person: 'Karol',
    text: " That's a huge problem."
  },
  {
    startTime: 6799.18,
    person: 'Miriam',
    text: ' And then, I mean, there are other things related to that that I just had to think of when we discussed it.'
  },
  {
    startTime: 6804.08,
    person: 'Miriam',
    text: " For example, the fact that people integrate an API and then their developer's leaving and after half a year it stops working and then they're complaining."
  },
  {
    startTime: 6815.52,
    person: 'Miriam',
    text: " And you're like, well, I mean, you need to maintain this."
  },
  {
    startTime: 6820.44,
    person: 'Miriam',
    text: " And if you don't have the credentials anymore or they run out, what should the provider do, right?"
  },
  {
    startTime: 6826.16,
    person: 'Miriam',
    text: ' I mean, you have to know how to use the API and how you integrated it.'
  },
  {
    startTime: 6829.86,
    person: 'Miriam',
    text: " If you don't have any developer anymore, and that's what I see also very often, all those things, APIs and also API consumption are handled as a project."
  },
  {
    startTime: 6838.82,
    person: 'Miriam',
    text: " When they're done, all developers leave and it will work forever."
  },
  {
    startTime: 6843.14,
    person: 'Miriam',
    text: ' We never touch it, it will work forever.'
  },
  {
    startTime: 6845.56,
    person: 'Miriam',
    text: " And half a year later, a year later, the credentials run out or a certificate runs out or you don't know what."
  },
  {
    startTime: 6854.32,
    person: 'Miriam',
    text: " And then there's a big disaster because nobody knows anymore, right?"
  },
  {
    startTime: 6858.8,
    person: 'Karol',
    text: " That's very true."
  },
  {
    startTime: 6861.04,
    person: 'Karol',
    text: " Like Eric here says, it's like a shower."
  },
  {
    startTime: 6864.4,
    person: 'Karol',
    text: " We expect nice warm water, but don't know or want to understand how it gets there."
  },
  {
    startTime: 6870.86,
    person: 'Karol',
    text: " It's a problem."
  },
  {
    startTime: 6873.52,
    person: 'Karol',
    text: ' I had a very clever thought on the APIs.'
  },
  {
    startTime: 6876.8,
    person: 'Karol',
    text: " Oh yeah, that's one of the lowest software architecture in general."
  },
  {
    startTime: 6882.96,
    person: 'Karol',
    text: " Software architecture and trade-off analysis is not something we do once, it's a iterative effort."
  },
  {
    startTime: 6890.66,
    person: 'Karol',
    text: ' And this goes to maintaining APIs, this goes to evaluating APIs.'
  },
  {
    startTime: 6896.16,
    person: 'Karol',
    text: ' Are they still bringing us value?'
  },
  {
    startTime: 6898.5,
    person: 'Karol',
    text: ' Are they still used?'
  },
  {
    startTime: 6899.76,
    person: 'Karol',
    text: ' Are they still secure?'
  },
  {
    startTime: 6901.16,
    person: 'Karol',
    text: ' Are they still providing what they should be providing or should they be replaced, changed, modified, whatever that may be.'
  },
  {
    startTime: 6909.2,
    person: 'Karol',
    text: " It's an iterative effort because everything we do is an iterative effort."
  },
  {
    startTime: 6914.22,
    person: 'Karol',
    text: " And if we look at IT that was 20 years ago, that wasn't changing that fast."
  },
  {
    startTime: 6921.42,
    person: 'Karol',
    text: ' Nowadays, everything is changing a lot faster.'
  },
  {
    startTime: 6926.76,
    person: 'Karol',
    text: " 20 years ago, we didn't live in a distributed world."
  },
  {
    startTime: 6929.82,
    person: 'Karol',
    text: " We had data centres for each company that had the tech, perfect, fantastic, everything is there, it's running."
  },
  {
    startTime: 6937.1,
    person: 'Karol',
    text: ' Now, everything is everywhere.'
  },
  {
    startTime: 6939.58,
    person: 'Karol',
    text: ' Now, everything is moving faster than we can catch it.'
  },
  {
    startTime: 6944.8,
    person: 'Karol',
    text: " If we look at the problems of architecture and applying architecture to specific topics, the moment I design something, it's already irrelevant."
  },
  {
    startTime: 6956.16,
    person: 'Karol',
    text: ' It will serve a purpose, but it will be not as good as the actual need is because the need already drifted away.'
  },
  {
    startTime: 6963.46,
    person: 'Karol',
    text: " It's called the model drift."
  },
  {
    startTime: 6965.82,
    person: 'Karol',
    text: " That's why concepts like residuality theory from Barry O'Reilly gained so much traction because they exactly address the problem of the model drift and exactly address the problem of this, that anything we model is already out of date."
  },
  {
    startTime: 6981.24,
    person: 'Karol',
    text: " And it's a huge problem in that sense."
  },
  {
    startTime: 6984.52,
    person: 'Miriam',
    text: ' I also listened to a very good keynote on actually complexity.'
  },
  {
    startTime: 6988.44,
    person: 'Miriam',
    text: ' That was what it was about in a conference last year.'
  },
  {
    startTime: 6991.88,
    person: 'Miriam',
    text: ' And the actual take was, or what I liked most that afterwards in a conference, everybody discussed the topic that how can we really reduce complexity?'
  },
  {
    startTime: 7001.4,
    person: 'Miriam',
    text: ' Because the theory was that everyone believes that now that there is AI, it will reduce the complexity.'
  },
  {
    startTime: 7007.16,
    person: 'Miriam',
    text: ' But in reality, if we look at all the last years, every new thing that came up to reduce complexity increased the speed, which again increased the complexity.'
  },
  {
    startTime: 7017.1,
    person: 'Miriam',
    text: ' So that was the theory.'
  },
  {
    startTime: 7018.64,
    person: 'Miriam',
    text: ' And I liked that a lot because if you talk to the people on a conference that was really resonating with a lot of people because they said, yeah, it got very complex and it even gets more complex.'
  },
  {
    startTime: 7027.84,
    person: 'Miriam',
    text: " And because it's getting faster, this means we're trying to reduce complexity by making things faster, which again introduces complexity."
  },
  {
    startTime: 7035.58,
    person: 'Karol',
    text: " It's horrendous."
  },
  {
    startTime: 7036.94,
    person: 'Miriam',
    text: " And that's what was troubling me because it was a good discussion on the conference as well."
  },
  {
    startTime: 7040.08,
    person: 'Karol',
    text: " But this again touches Tesla's law, right?"
  },
  {
    startTime: 7044.02,
    person: 'Karol',
    text: ' If we look at the problem domain, there is an inherent irreducible complexity.'
  },
  {
    startTime: 7050.24,
    person: 'Karol',
    text: ' We cannot go around it.'
  },
  {
    startTime: 7051.56,
    person: 'Karol',
    text: ' We need to address it.'
  },
  {
    startTime: 7052.96,
    person: 'Karol',
    text: ' And then we go to UX, fully blown.'
  },
  {
    startTime: 7056.68,
    person: 'Karol',
    text: ' And I love this book.'
  },
  {
    startTime: 7057.64,
    person: 'Karol',
    text: " So I'm just gonna throw in another lovely slide from my training deck."
  },
  {
    startTime: 7065.22,
    person: 'Karol',
    text: ' Complexity is not bad.'
  },
  {
    startTime: 7067.38,
    person: 'Karol',
    text: " It's confusion that's bad."
  },
  {
    startTime: 7068.84,
    person: 'Karol',
    text: ' So long live well-managed complexity.'
  },
  {
    startTime: 7071.18,
    person: 'Karol',
    text: ' And this is Don Norman, the designer of Everyday Things.'
  },
  {
    startTime: 7074.26,
    person: 'Karol',
    text: ' This has nothing to do with IT per se.'
  },
  {
    startTime: 7077.7,
    person: 'Karol',
    text: " It's about design principles."
  },
  {
    startTime: 7079.56,
    person: 'Miriam',
    text: ' Yes, I actually have that book.'
  },
  {
    startTime: 7081.66,
    person: 'Miriam',
    text: ' I mean, I did my PhD in human computing.'
  },
  {
    startTime: 7083.86,
    person: 'Karol',
    text: ' Obviously.'
  },
  {
    startTime: 7084.04,
    person: 'Miriam',
    text: ' Don Norman is a very important person you need to know, right?'
  },
  {
    startTime: 7087.54,
    person: 'Karol',
    text: " Especially if you're doing front-end and you're doing UX, absolutely mandatory read."
  },
  {
    startTime: 7094.74,
    person: 'Karol',
    text: ' But it trickles down to everything.'
  },
  {
    startTime: 7097.04,
    person: 'Karol',
    text: " It's not only relevant for user experience."
  },
  {
    startTime: 7100.86,
    person: 'Karol',
    text: " It's relevant for architecture."
  },
  {
    startTime: 7103.34,
    person: 'Karol',
    text: " It's relevant for interoperability."
  },
  {
    startTime: 7107.04,
    person: 'Karol',
    text: " We're here not to reduce complexity because the complexity is already, we know it's irreducible."
  },
  {
    startTime: 7114.04,
    person: 'Karol',
    text: " We're about to manage complexity."
  },
  {
    startTime: 7117.58,
    person: 'Karol',
    text: " So if we're looking at interoperability, if we do point to point at a scale of 100 domain systems in the corporate environment, that's adding complexity to the mix because that's not readable."
  },
  {
    startTime: 7129.28,
    person: 'Karol',
    text: " That's spaghetti architecture."
  },
  {
    startTime: 7130.42,
    person: 'Karol',
    text: " If we add an integration platform to the mix and streamline everything through an integration platform with proper abstraction layers, we're managing that complexity because we add monitoring and auditability to it and observability."
  },
  {
    startTime: 7145.18,
    person: 'Karol',
    text: ' We can actually understand what relates to what because we see those relationships through different elements that are in the platform.'
  },
  {
    startTime: 7153.02,
    person: 'Karol',
    text: ' And by adding the abstraction layers, we can actually manage the change and manage dependencies better.'
  },
  {
    startTime: 7157.88,
    person: 'Karol',
    text: " So it's a very hard problem to explain because people still live in the notion that we can reduce complexity forever."
  },
  {
    startTime: 7170.74,
    person: 'Karol',
    text: " It's a fairy tale."
  },
  {
    startTime: 7171.98,
    person: 'Karol',
    text: " It doesn't exist."
  },
  {
    startTime: 7175.24,
    person: 'Miriam',
    text: ' We should, we just shifted around in the end, right?'
  },
  {
    startTime: 7178.84,
    person: 'Miriam',
    text: " That's what"
  },
  {
    startTime: 7181.4,
    person: 'Karol',
    text: " Yeah. It's a matter of who's going to take that complexity and solve it."
  },
  {
    startTime: 7185.44,
    person: 'Miriam',
    text: " I also like Eric's statement."
  },
  {
    startTime: 7187.66,
    person: 'Miriam',
    text: ' He just wrote that maybe the problem is that application is still in the age of API.'
  },
  {
    startTime: 7194.96,
    person: 'Miriam',
    text: ' I think this is a whole another thing.'
  },
  {
    startTime: 7197.6,
    person: 'Miriam',
    text: ' Like, discuss with people the definition of what an API is and have fun, really.'
  },
  {
    startTime: 7203.38,
    person: 'Miriam',
    text: " I don't know if you did that already."
  },
  {
    startTime: 7206.04,
    person: 'Miriam',
    text: ' But- Several times.'
  },
  {
    startTime: 7207.66,
    person: 'Miriam',
    text: ' We did that with clients and even if you are there for a long time, believe me, not everybody is on the same page.'
  },
  {
    startTime: 7213.38,
    person: 'Miriam',
    text: " What an API is, even if you discussed it 100 times before, it's always a good discussion if you want to like, you know."
  },
  {
    startTime: 7220.6,
    person: 'Karol',
    text: " And companies that offer products around APIs, they don't help."
  },
  {
    startTime: 7225.56,
    person: 'Karol',
    text: " And I'm pointing towards MuleSoft right now and the bullshit that marketing from MuleSoft pressed onto us and it's stick with people."
  },
  {
    startTime: 7235.85,
    person: 'Karol',
    text: ' They started naming whole integration applications APIs.'
  },
  {
    startTime: 7240.77,
    person: 'Karol',
    text: " No, they're not APIs, they're applications."
  },
  {
    startTime: 7244.01,
    person: 'Karol',
    text: ' They have APIs.'
  },
  {
    startTime: 7247.62,
    person: 'Karol',
    text: ' It was just a nightmare every single time.'
  },
  {
    startTime: 7250.42,
    person: 'Karol',
    text: " It's like, no, it's not a system API."
  },
  {
    startTime: 7252.88,
    person: 'Karol',
    text: " It's a system application representing a specific system with a standardised API that is a REST API, blah, blah, blah."
  },
  {
    startTime: 7262.22,
    person: 'Karol',
    text: " And then people have the notion, oh, API is just a, it's REST. No."
  },
  {
    startTime: 7268.2,
    person: 'Miriam',
    text: ' No.'
  },
  {
    startTime: 7268.92,
    person: 'Miriam',
    text: " Exactly, that's one of the perceptions."
  },
  {
    startTime: 7271.32,
    person: 'Karol',
    text: ' Yeah, SOAP is an API.'
  },
  {
    startTime: 7272.76,
    person: 'Karol',
    text: ' You can have an API implemented with JMS, no problem.'
  },
  {
    startTime: 7277.26,
    person: 'Karol',
    text: ' You can have, JDBC is a protocol for an API of a database.'
  },
  {
    startTime: 7283.56,
    person: 'Karol',
    text: ' My tongue is, my ears are an API, if you want to talk to me.'
  },
  {
    startTime: 7290.04,
    person: 'Karol',
    text: ' If you consider me a programme, right?'
  },
  {
    startTime: 7292.26,
    person: 'Karol',
    text: ' Or an application.'
  },
  {
    startTime: 7294.76,
    person: 'Karol',
    text: " It's difficult for people to comprehend that just throwing around acronyms like API doesn't contribute to anything."
  },
  {
    startTime: 7303.12,
    person: 'Karol',
    text: " It's a very difficult aspect there."
  },
  {
    startTime: 7306.08,
    person: 'Miriam',
    text: ' Yeah, I have another good one, for example, SAP API management, the list where you can see the proxies, it says APIs.'
  },
  {
    startTime: 7317.75,
    person: 'Karol',
    text: ' What?'
  },
  {
    startTime: 7319.17,
    person: 'Miriam',
    text: ' Yeah.'
  },
  {
    startTime: 7320.69,
    person: 'Miriam',
    text: " Some people believe the proxy is the API, and I'm like, well, no, it's a proxy."
  },
  {
    startTime: 7328.81,
    person: 'Miriam',
    text: ' Because it really, it says APIs as the name of the top.'
  },
  {
    startTime: 7332.45,
    person: 'Miriam',
    text: ' So in the UI, so people see these are the APIs, I mean, clearly, right?'
  },
  {
    startTime: 7338.39,
    person: 'Miriam',
    text: ' No.'
  },
  {
    startTime: 7339.73,
    person: 'Miriam',
    text: " So, you know, you have to be careful what you name API because it's misused a lot, I agree, mainly in Python, but also by other people, so."
  },
  {
    startTime: 7348.13,
    person: 'Karol',
    text: ' If you put it this way, if we talk about API management, nothing on the API management layer, well, precisely API gateway layer, nearly nothing is an API.'
  },
  {
    startTime: 7362.59,
    person: 'Karol',
    text: ' All of these are proxies.'
  },
  {
    startTime: 7366.21,
    person: 'Karol',
    text: ' So, to be very, very rigid and specific, some of them may be APIs if there is actual logic involved and implementation over the API gateway.'
  },
  {
    startTime: 7376.87,
    person: 'Karol',
    text: ' So for example, if the API gateway offers protocol mediation, you can consider that being an API because it has a specific function.'
  },
  {
    startTime: 7386.75,
    person: 'Karol',
    text: ' But this is being very rigid.'
  },
  {
    startTime: 7388.63,
    person: 'Karol',
    text: " It's still a proxy."
  },
  {
    startTime: 7392.25,
    person: 'Karol',
    text: ' But this is where things get lost because we have so many different types of appliances, types of applications that do things technically, and everybody has their own marketing, nomenclature.'
  },
  {
    startTime: 7407.75,
    person: 'Karol',
    text: ' Every part of the industry has its own jargon.'
  },
  {
    startTime: 7413.53,
    person: 'Karol',
    text: ' Greatest example, a few streams back, we were talking about data mesh.'
  },
  {
    startTime: 7419.69,
    person: 'Karol',
    text: ' Here in the studio, there were two data architects, and we really got lost in the lingo from time to time, and that created hilarious misunderstandings.'
  },
  {
    startTime: 7433.49,
    person: 'Karol',
    text: ' We were talking about contracts, and I had a completely different notion of a contract than my guests in the live stream.'
  },
  {
    startTime: 7444.73,
    person: 'Karol',
    text: " It's completely different."
  },
  {
    startTime: 7445.93,
    person: 'Karol',
    text: " If I look at a feedback from DDD Europe when I ran a workshop this year, we had a feedback that, oh, this was a missed opportunity because you didn't talk about data mesh when you were talking about interoperability."
  },
  {
    startTime: 7458.29,
    person: 'Karol',
    text: " It's like, sorry, what?"
  },
  {
    startTime: 7461.31,
    person: 'Karol',
    text: ' We were talking about ETL batch and ELT.'
  },
  {
    startTime: 7464.49,
    person: 'Karol',
    text: " That's basically the key of a broker architecture."
  },
  {
    startTime: 7468.49,
    person: 'Karol',
    text: " That's the most common use case for a broker architecture."
  },
  {
    startTime: 7471.79,
    person: 'Karol',
    text: ' Again, lingo.'
  },
  {
    startTime: 7473.33,
    person: 'Karol',
    text: " It's not that we didn't talk about it."
  },
  {
    startTime: 7475.13,
    person: 'Karol',
    text: " We did, but somebody didn't know the terms and words that are used by integration architects."
  },
  {
    startTime: 7479.93,
    person: 'Karol',
    text: " They knew the words that were used by data architects, and if you say application integration to a data architect, they don't understand that this is data movement."
  },
  {
    startTime: 7489.51,
    person: 'Karol',
    text: " That's a different term."
  },
  {
    startTime: 7490.57,
    person: 'Miriam',
    text: ' And they knew that.'
  },
  {
    startTime: 7491.37,
    person: 'Miriam',
    text: ' Application integration and data integration, there we have the next topic on how to define it and what that means.'
  },
  {
    startTime: 7496.71,
    person: 'Miriam',
    text: " I think it's already too late to discuss this today."
  },
  {
    startTime: 7500.63,
    person: 'Karol',
    text: ' What I can do is drop an article because I literally wrote, one of my first articles is the differentiation between data integration and application integration.'
  },
  {
    startTime: 7509.45,
    person: 'Miriam',
    text: " But still, you need to explain it to a lot of people and still a lot of people don't get it, right?"
  },
  {
    startTime: 7514.07,
    person: 'Miriam',
    text: ' The same with what is an API.'
  },
  {
    startTime: 7515.63,
    person: 'Miriam',
    text: ' As I said, you can always start a discussion and see where it leads to, but you will see that if you usually start a discussion, people are not on the same page, no matter where you try it, right?'
  },
  {
    startTime: 7525.93,
    person: 'Miriam',
    text: ' In any company, you can usually try.'
  },
  {
    startTime: 7528.27,
    person: 'Miriam',
    text: ' And if you ask what is an API, people will disagree with each other.'
  },
  {
    startTime: 7531.29,
    person: 'Miriam',
    text: " If you're in a room with multiple people, it's pretty, you can be pretty sure."
  },
  {
    startTime: 7535.19,
    person: 'Miriam',
    text: " And it's really interesting to watch and see."
  },
  {
    startTime: 7537.79,
    person: 'Karol',
    text: ' Yes.'
  },
  {
    startTime: 7538.47,
    person: 'Karol',
    text: ' And from my perspective as an integration architect, this is the role of an architect, any architect, not only the integration architect, to sit down with those people and establish a common dictionary.'
  },
  {
    startTime: 7553.29,
    person: 'Miriam',
    text: ' Yes.'
  },
  {
    startTime: 7554.05,
    person: 'Karol',
    text: ' This is the most important part of the role when you come into a client and start working with clients.'
  },
  {
    startTime: 7559.79,
    person: 'Karol',
    text: ' To just, first of all, learn their lingo and then check if everybody understands it the same way.'
  },
  {
    startTime: 7567.87,
    person: 'Karol',
    text: " Because 99% of the times, they don't."
  },
  {
    startTime: 7570.85,
    person: 'Karol',
    text: " So it's a matter of going there, understanding, looking where the discrepancies are and start aligning people with one another, even using their own nomenclature, not using the actual proper terms."
  },
  {
    startTime: 7582.43,
    person: 'Karol',
    text: " I don't care about the proper terms when I'm in a client."
  },
  {
    startTime: 7585.17,
    person: 'Karol',
    text: ' They can use their terms.'
  },
  {
    startTime: 7586.23,
    person: 'Karol',
    text: " As long as everybody understands those terms the same way, I can make myself a translation table and I'll be fine."
  },
  {
    startTime: 7594.59,
    person: 'Miriam',
    text: ' Yeah, in our last project, the first thing we did was a glossary because everybody was talking about things and nobody was talking about the same thing.'
  },
  {
    startTime: 7601.69,
    person: 'Miriam',
    text: ' So it was like, well, we need a glossary.'
  },
  {
    startTime: 7604.03,
    person: 'Miriam',
    text: ' So, oh, depressing.'
  },
  {
    startTime: 7606.21,
    person: 'Miriam',
    text: " What's depressing?"
  },
  {
    startTime: 7607.91,
    person: 'Miriam',
    text: ' Hopefully not our conversation.'
  },
  {
    startTime: 7610.39,
    person: 'Karol',
    text: " Rather the problems we're discussing that people are facing or us as architects are facing."
  },
  {
    startTime: 7617.35,
    person: 'Miriam',
    text: " I guess to sum it up, I think that's also a good point to sum it up."
  },
  {
    startTime: 7621.19,
    person: 'Miriam',
    text: " I think my perception is most people think APIs are easy and in reality, they're not."
  },
  {
    startTime: 7630.33,
    person: 'Karol',
    text: " No, they're absolutely not."
  },
  {
    startTime: 7632.03,
    person: 'Karol',
    text: " There's a lot more to it."
  },
  {
    startTime: 7634.33,
    person: 'Karol',
    text: ' There are various angles we can take.'
  },
  {
    startTime: 7636.41,
    person: 'Karol',
    text: ' The answer is always, it depends.'
  },
  {
    startTime: 7639.01,
    person: 'Miriam',
    text: ' Yes, the consultant answer, the typical consultant answer, right?'
  },
  {
    startTime: 7642.65,
    person: 'Miriam',
    text: ' It depends.'
  },
  {
    startTime: 7644.47,
    person: 'Karol',
    text: " Yes, it depends, but it's about explaining, depends on what and what we want to achieve and having that honest conversation, cross layers from the business to implementation."
  },
  {
    startTime: 7656.45,
    person: 'Karol',
    text: ' What do we want to achieve?'
  },
  {
    startTime: 7658.15,
    person: 'Miriam',
    text: ' And then pick the- Why are we doing this?'
  },
  {
    startTime: 7660.63,
    person: 'Karol',
    text: ' Why?'
  },
  {
    startTime: 7661.19,
    person: 'Karol',
    text: ' Yes, to have the rationale, to have the why.'
  },
  {
    startTime: 7664.21,
    person: 'Karol',
    text: ' And then from that, we pick the tools that are suited for the job, not just implement an API.'
  },
  {
    startTime: 7669.97,
    person: 'Karol',
    text: ' We implement that with intent.'
  },
  {
    startTime: 7671.63,
    person: 'Miriam',
    text: ' Why, what, and who is involved?'
  },
  {
    startTime: 7673.97,
    person: 'Miriam',
    text: ' These are the most important things to figure out.'
  },
  {
    startTime: 7676.53,
    person: 'Karol',
    text: ' Pretty much.'
  },
  {
    startTime: 7678.21,
    person: 'Karol',
    text: ' All right, to end it off, a few announcements before we switch off completely.'
  },
  {
    startTime: 7685.23,
    person: 'Karol',
    text: " So for those who still are with us, hopefully a few people, this time around, it's very interesting that we have another live stream so close by because it's literally in two days and it's going to be a very special edition."
  },
  {
    startTime: 7702.75,
    person: 'Karol',
    text: " You'll learn why when you join on Saturday."
  },
  {
    startTime: 7707.07,
    person: 'Karol',
    text: " I'm going to be having Mark Richards on the live stream and we're going to be talking about the human condition, the problems, exactly what we're just ended on a note here, the different problems that architects need to navigate from the human perspective, not from the technical perspective, not from architecture."
  },
  {
    startTime: 7726.59,
    person: 'Karol',
    text: " We're not going to jump into microservice sagas."
  },
  {
    startTime: 7730.09,
    person: 'Karol',
    text: " We're going to talk about the human condition."
  },
  {
    startTime: 7732.67,
    person: 'Karol',
    text: " So on Saturday, 8 p.m. Central European summertime, Mark Richards and I, we're going to have a nice conversation."
  },
  {
    startTime: 7743.03,
    person: 'Karol',
    text: " And if you're new to the stream, you can scan any of those QR codes, go to bridgingthegap.com, which is the open source site where I, with my colleagues from Bridging the Gap, write articles about enterprise application integration and integration architecture."
  },
  {
    startTime: 7760.21,
    person: 'Karol',
    text: ' You can subscribe to Substack, although I neglected that one a little bit recently, so I need to get back to it.'
  },
  {
    startTime: 7766.51,
    person: 'Karol',
    text: ' And of course, subscribe to the YouTube channel to get notified about the upcoming streams.'
  },
  {
    startTime: 7772.45,
    person: 'Karol',
    text: ' All the streams are scheduled both on LinkedIn as events and on YouTube.'
  },
  {
    startTime: 7778.71,
    person: 'Karol',
    text: ' So if you want to be notified about these, just hit subscribe.'
  },
  {
    startTime: 7783.85,
    person: 'Karol',
    text: " And I think that's the bell icon somewhere there to get the notifications or something like that."
  },
  {
    startTime: 7788.69,
    person: 'Karol',
    text: ' Not really that well-versed in YouTube, to be honest.'
  },
  {
    startTime: 7793.93,
    person: 'Karol',
    text: " So that's it for the record."
  },
  {
    startTime: 7796.83,
    person: 'Karol',
    text: ' Thank you, Daniel, for joining.'
  },
  {
    startTime: 7798.21,
    person: 'Karol',
    text: " Hope you're having fun with your kids."
  },
  {
    startTime: 7801.85,
    person: 'Miriam',
    text: " And- I hope they're already sleeping."
  },
  {
    startTime: 7803.63,
    person: 'Karol',
    text: ' Hopefully, right?'
  },
  {
    startTime: 7804.53,
    person: 'Karol',
    text: ' Yeah.'
  },
  {
    startTime: 7806.57,
    person: 'Miriam',
    text: " Let's hope for it."
  },
  {
    startTime: 7807.87,
    person: 'Karol',
    text: " Let's hope for it."
  },
  {
    startTime: 7808.75,
    person: 'Karol',
    text: ' I guess sometimes it takes time.'
  },
  {
    startTime: 7810.51,
    person: 'Karol',
    text: " I mean, I spent often more than two hours trying to put them to sleep and- That's why you say, let's hope."
  },
  {
    startTime: 7817.91,
    person: 'Karol',
    text: " Let's hope, let's hope."
  },
  {
    startTime: 7819.07,
    person: 'Karol',
    text: " Let's hope that Daniel has a peaceful end of the day with the kids sleeping."
  },
  {
    startTime: 7823.03,
    person: 'Karol',
    text: ' And Mirjam, thank you so much for joining and having this discussion.'
  },
  {
    startTime: 7826.45,
    person: 'Karol',
    text: ' It was amazing to go through data interface quadrants.'
  },
  {
    startTime: 7832.47,
    person: 'Karol',
    text: " It's an interesting way of explaining APIs."
  },
  {
    startTime: 7836.29,
    person: 'Karol',
    text: ' And I think this would be very useful for every consultant to learn if they do any type of interoperability to be able to have that conversation with their clients just to align and put things into perspective so that we avoid those crazy wonky definitions of APIs that could be disastrous later on.'
  },
  {
    startTime: 7859.69,
    person: 'Karol',
    text: ' Thank you everybody for joining.'
  }
])
</script>

<style scoped></style>
