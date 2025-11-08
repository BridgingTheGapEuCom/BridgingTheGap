<template>
  <div class="w-full">
    <StreamLayout
      :transcript="transcript"
      name="Loosely Coupled - Federated API Management"
      video-id="Uoidbs9oXPM"
    />
  </div>
</template>

<script lang="ts" setup>
const transcript = ref([
  { startTime: 183.43, person: 'Karol', text: ' Hello, hello.' },
  {
    startTime: 185.67,
    person: 'Karol',
    text: ' Good morning, good afternoon, and good evening, everybody.'
  },
  {
    startTime: 188.69,
    person: 'Karol',
    text: ' Welcome to another edition of Loosely Coupled, brought to you by Bridging the Gap.'
  },
  {
    startTime: 193.11,
    person: 'Karol',
    text: " My name is Karol Skrzymowski, and I'll be your host today."
  },
  {
    startTime: 196.59,
    person: 'Karol',
    text: " And today, today we're hanging around APIs, but we're not diving into the problems of APIs themselves."
  },
  {
    startTime: 204.47,
    person: 'Karol',
    text: " Today, we're diving into a bit of a different problem managing those APIs and making them lovely, secure, and then discoverable, and then understood by the organisations."
  },
  { startTime: 218.55, person: 'Karol', text: ' And what happens if we have too many of them?' },
  { startTime: 221.87, person: 'Karol', text: ' What happens if we have too many API gateways?' },
  {
    startTime: 226.07,
    person: 'Karol',
    text: ' What happens if we have distributed systems, and more, and more, and more, and SaaS solutions everywhere, and custom implementations?'
  },
  { startTime: 233.21, person: 'Karol', text: ' What then?' },
  { startTime: 235.11, person: 'Karol', text: " So, that's going to be today's topic." },
  {
    startTime: 238.89,
    person: 'Karol',
    text: ' So, I hope everybody has a nice beverage at hand.'
  },
  { startTime: 242.57, person: 'Karol', text: ' You have a nice jug of coffee and my trusty mug.' },
  { startTime: 249.05, person: 'Karol', text: ' And joining me today is Adeeb Tahir from APIWiz.' },
  { startTime: 256.07, person: 'Rachel', text: ' Hey, Karol.' },
  { startTime: 256.75, person: 'Karol', text: ' Field CTO.' },
  { startTime: 257.67, person: 'Karol', text: ' Hello, Adeeb.' },
  { startTime: 258.829, person: 'Karol', text: ' How are you doing this evening?' },
  { startTime: 260.23, person: 'Rachel', text: ' Doing well.' },
  { startTime: 260.93, person: 'Rachel', text: ' How about you?' },
  { startTime: 263.21, person: 'Karol', text: ' As best as I can with a cup of coffee.' },
  { startTime: 265.57, person: 'Karol', text: ' Nothing can go wrong now.' },
  { startTime: 268.07, person: 'Rachel', text: ' No, coffee is always great.' },
  { startTime: 271.09, person: 'Karol', text: ' All right.' },
  {
    startTime: 272.45,
    person: 'Karol',
    text: ' So, to start us off, because our audience knows me already quite a bit, tell us a bit about yourself.'
  },
  { startTime: 280.13, person: 'Karol', text: ' Who you are?' },
  { startTime: 280.77, person: 'Karol', text: ' What do you do?' },
  { startTime: 282.39, person: 'Karol', text: " What's going on?" },
  { startTime: 283.17, person: 'Karol', text: ' Why are you even here?' },
  { startTime: 285.69, person: 'Rachel', text: ' Sure.' },
  { startTime: 286.65, person: 'Rachel', text: ' Yeah.' },
  {
    startTime: 286.99,
    person: 'Rachel',
    text: " So, my name's Adeeb Tahir, and I'm the Field CTO at APIWiz, but if I had to tell a bit more about me, I would call myself a hardcore engineer."
  },
  {
    startTime: 295.57,
    person: 'Rachel',
    text: " So, my whole career, I've been in software engineering, starting out in the fintech space with Citipank and Citigroup, based out of Chennai in India."
  },
  {
    startTime: 305.21,
    person: 'Rachel',
    text: ' And then I worked there for a couple of years, and post that, I got an opportunity to work with APIWiz.'
  },
  {
    startTime: 311.39,
    person: 'Rachel',
    text: ' Initially, it was all fintech systems back in city, but now with APIWiz, I get an opportunity to work on the API strategy and the API management aspect side of it across industry verticals.'
  },
  {
    startTime: 324.55,
    person: 'Rachel',
    text: " So, that's one of the most interesting aspects of my current role here."
  },
  { startTime: 332.01, person: 'Karol', text: ' Right.' },
  {
    startTime: 332.41,
    person: 'Karol',
    text: ' But basically, from big companies to, what, a startup?'
  },
  { startTime: 337.85, person: 'Rachel', text: ' You could say that.' },
  { startTime: 339.37, person: 'Rachel', text: ' Yes.' },
  { startTime: 340.17, person: 'Rachel', text: ' Yeah.' },
  { startTime: 342.87, person: 'Karol', text: ' What drove you to go for a startup?' },
  { startTime: 346.19, person: 'Karol', text: " I mean, it's a change, definitely, right?" },
  { startTime: 349.35, person: 'Rachel', text: ' Yeah.' },
  { startTime: 350.03, person: 'Rachel', text: " No, that's for sure." },
  {
    startTime: 351.05,
    person: 'Rachel',
    text: " Within an MNC, there's a different set of challenges in an operating model."
  },
  {
    startTime: 355.13,
    person: 'Rachel',
    text: ' And what I wanted to also experience is the thrill of working in a startup, where you have a bit more control, you have more after changes.'
  },
  {
    startTime: 364.47,
    person: 'Rachel',
    text: " Usually, within an MNC, there's a structured process where it takes a couple of months to implement pretty much any change."
  },
  {
    startTime: 370.25,
    person: 'Rachel',
    text: ' But within a startup, I have a bit more freedom to explore, a bit more freedom to innovate, fail fast, and come back to base.'
  },
  {
    startTime: 377.89,
    person: 'Rachel',
    text: " So, I think that thrilling aspect, as well as travel, picking on new challenging aspects of software, that's something you can only get in a startup, I would say."
  },
  { startTime: 389.29, person: 'Karol', text: ' All right.' },
  {
    startTime: 390.69,
    person: 'Karol',
    text: ' Looking at it from a perspective, do you enjoy the startup more or the structured, slow pace of corporate world?'
  },
  { startTime: 399.87, person: 'Rachel', text: ' No.' },
  { startTime: 400.49, person: 'Rachel', text: " No, I'm fully into a startup." },
  {
    startTime: 404.81,
    person: 'Rachel',
    text: ' I prefer a very high-paced, challenging environment.'
  },
  { startTime: 409.43, person: 'Karol', text: ' Okay.' },
  {
    startTime: 410.45,
    person: 'Karol',
    text: ' Yeah, because the difference for everybody is a little bit different in that sense.'
  },
  {
    startTime: 414.81,
    person: 'Karol',
    text: ' And I remember my switches between working in-house and working as a consultant, and that always was a bit of a trade-off there in terms of figuring out what do I want to do in my life and where do I want to be.'
  },
  {
    startTime: 430.53,
    person: 'Karol',
    text: ' And working in a big company for a longer time, it feels like, oh, I do have actually some accountability over things that I deliver.'
  },
  {
    startTime: 440.37,
    person: 'Karol',
    text: " Whereas when I'm working as a consultant, it's like, yeah, I'm here."
  },
  { startTime: 444.17, person: 'Karol', text: " Two weeks, I'm somewhere else." },
  { startTime: 446.11, person: 'Karol', text: " And where's my accountability?" },
  { startTime: 447.97, person: 'Karol', text: " I don't see the fruition of my labour, right?" },
  {
    startTime: 451.39,
    person: 'Karol',
    text: ' So, I suppose there are these kind of trade-offs between working in a big corporate environment versus a startup.'
  },
  {
    startTime: 458.07,
    person: 'Karol',
    text: ' I never worked for a startup myself, but I assume that there are such.'
  },
  { startTime: 465.65, person: 'Karol', text: ' All right.' },
  {
    startTime: 466.97,
    person: 'Karol',
    text: " So, jumping into the topic at hand, and we're talking today about, well, managing APIs."
  },
  {
    startTime: 476.21,
    person: 'Karol',
    text: " Perhaps for those who are less accustomed with certain terms, let's start by defining what is an API management, because that's the base of our conversation, right?"
  },
  { startTime: 489.19, person: 'Rachel', text: ' Yeah.' },
  {
    startTime: 490.51,
    person: 'Rachel',
    text: " So, it's a really heavy and interesting topic today."
  },
  {
    startTime: 494.87,
    person: 'Rachel',
    text: ' So, just to start out with, API management essentially is the entire set of system of practises and operations and pretty much the strategy we use to build, operate and govern APIs, which are nothing but application programming interfaces that pretty much connect every application that we can think of today.'
  },
  { startTime: 513.75, person: 'Rachel', text: ' They power all the digital experiences.' },
  {
    startTime: 515.85,
    person: 'Rachel',
    text: " So, it's very important that we design, build, test and govern and get them right."
  },
  { startTime: 521.63, person: 'Karol', text: ' Right.' },
  {
    startTime: 523.049,
    person: 'Karol',
    text: " So, if I'm looking at this, because you're looking at it from a productized perspective, but if I'm looking at it from a purely technical perspective of an integration architect, for me, an API management is three distinct things."
  },
  {
    startTime: 537.61,
    person: 'Karol',
    text: " First of all, that's API gateway, which is the implementation of the proxies themselves."
  },
  {
    startTime: 543.99,
    person: 'Karol',
    text: " Then on top of that, or next to it, it's an API portal where I have the definitions of those APIs and some little bit of a governance over access and testing and mocking those APIs to play around with them."
  },
  {
    startTime: 556.57,
    person: 'Karol',
    text: ' And then third is the actual API management part where we have security policies or any other policies surrounding those APIs around access to them, who can use them based on what credentials, et cetera, et cetera.'
  },
  {
    startTime: 574.29,
    person: 'Karol',
    text: ' And that basically constitutes a piece of software that I would call an API management.'
  },
  { startTime: 580.41, person: 'Rachel', text: ' Yes.' },
  {
    startTime: 581.27,
    person: 'Rachel',
    text: " It's about solving for those several components and processes across the design time, the build time, as well as the runtime."
  },
  { startTime: 590.21, person: 'Karol', text: ' Right.' },
  { startTime: 591.27, person: 'Karol', text: ' Okay.' },
  {
    startTime: 591.87,
    person: 'Karol',
    text: " So, let's place that API management somewhere, right?"
  },
  { startTime: 595.91, person: 'Karol', text: ' So, where do we find API managements?' },
  { startTime: 600.39, person: 'Rachel', text: ' Yeah.' },
  {
    startTime: 601.03,
    person: 'Rachel',
    text: " So, if you think about API management today, at least let's take the lens of an enterprise, let's say one of the large enterprises, whether it's healthcare or telco or tech or automotive, pretty much whenever they take the concept of API management, they talk about how am I building my APIs today?"
  },
  {
    startTime: 619.27,
    person: 'Rachel',
    text: " So, they'll always say that have an existing API gateway, I'm creating proxies, I'm managing the APIs around those."
  },
  {
    startTime: 627.89,
    person: 'Rachel',
    text: ' But some of the other questions that come into API management is how do I design them or how do I build them today?'
  },
  { startTime: 634.47, person: 'Rachel', text: ' Or how do I enforce a governance aspect of it?' },
  { startTime: 637.25, person: 'Rachel', text: ' Who approves these APIs?' },
  {
    startTime: 639.01,
    person: 'Rachel',
    text: " Who has a final say in saying this is the last approved change and no one can make a change or edit this API once it's approved and locked in?"
  },
  {
    startTime: 647.25,
    person: 'Karol',
    text: ' So, you jumped straight into the management part there.'
  },
  { startTime: 651.47, person: 'Karol', text: " But let's step a little bit back." },
  {
    startTime: 654.67,
    person: 'Karol',
    text: " If I'm thinking where do we find API managements?"
  },
  {
    startTime: 658.49,
    person: 'Karol',
    text: ' Basically now, if you look at any SaaS offering, any API on the SaaS offering is basically fronted with an API management, pretty much.'
  },
  {
    startTime: 669.55,
    person: 'Karol',
    text: " We find API managements within companies' fronting systems."
  },
  {
    startTime: 674.95,
    person: 'Karol',
    text: ' There are very popular API management solutions fronting entire microservice ecosystems, like the swarm of microservices just being fronted by one piece of software, of course, instantiated just to unify the layer of APIs that those microservices expose.'
  },
  {
    startTime: 694.83,
    person: 'Karol',
    text: ' And then we have also APIs somewhat on the perimeter of companies, giving them some sense of management and security over their connection to the outside world, the outside services, partners, whatever that may be.'
  },
  { startTime: 712.23, person: 'Karol', text: ' So, we have different flavours in that sense.' },
  { startTime: 716.67, person: 'Rachel', text: " Yes, that's true." },
  { startTime: 717.87, person: 'Karol', text: ' And then we have scale to it.' },
  { startTime: 721.93, person: 'Rachel', text: ' Yes.' },
  {
    startTime: 722.87,
    person: 'Rachel',
    text: ' In fact, just speaking about the variety of offerings out there, one interesting stat that I keep seeing from a time-to-time basis is if you take a look at the API landscape today, we have individual more than 2,500 plus these offerings scattered across the different stages of your API management.'
  },
  {
    startTime: 743.73,
    person: 'Rachel',
    text: ' So, you can see a lot of different individual point solutions as well as players trying to aggregate themselves into a platform.'
  },
  {
    startTime: 751.57,
    person: 'Rachel',
    text: " And that gets really crazy over time because a number of platforms and number of point solution offerings out there, it's quite growing."
  },
  { startTime: 761.95, person: 'Karol', text: ' Hold on.' },
  {
    startTime: 763.01,
    person: 'Karol',
    text: " Give me the number one one more time because I'm not believing what I'm hearing."
  },
  { startTime: 767.09, person: 'Rachel', text: ' No, you can quickly look it up.' },
  {
    startTime: 769.53,
    person: 'Rachel',
    text: " It's well over about 2,000 plus vendors out there."
  },
  {
    startTime: 773.71,
    person: 'Rachel',
    text: " And in fact, there's a pretty neat, I think there's a website API landscape.io where you can see a clear breakup of, let's say, vendors at the design, vendors at the test, vendors at the, let's say, observability."
  },
  {
    startTime: 787.05,
    person: 'Rachel',
    text: ' And you can see exactly how that vendors are broken up.'
  },
  { startTime: 795.32, person: 'Karol', text: ' Okay.' },
  { startTime: 795.76, person: 'Karol', text: ' What I see is like, yeah, okay.' },
  { startTime: 798.62, person: 'Karol', text: ' I just Googled.' },
  { startTime: 800.82, person: 'Karol', text: " I'm shocked." },
  { startTime: 802.62, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 803.16,
    person: 'Karol',
    text: " But they're probably, like you said, they're fragmented between different problems of the API space, right?"
  },
  {
    startTime: 808.22,
    person: 'Karol',
    text: ' So, I remember somebody once telling me that Postman is an API management, right?'
  },
  {
    startTime: 815.48,
    person: 'Karol',
    text: " It's like, I'm sitting there and it's like, no, wait, Postman is a testing tool."
  },
  { startTime: 819.82, person: 'Karol', text: ' How is that an API management?' },
  {
    startTime: 821.78,
    person: 'Karol',
    text: ' But then if you look at it from a perspective of managing definitions of APIs and mock services and tests of APIs, well, oh yeah, kind of is.'
  },
  {
    startTime: 832.96,
    person: 'Karol',
    text: " And they're kind of going that direction to become a full-blown API management at this point."
  },
  {
    startTime: 836.98,
    person: 'Karol',
    text: " But it's quite shocking at times, which companies actually take a turn and go in a different product area."
  },
  {
    startTime: 848.8,
    person: 'Karol',
    text: ' And that sometimes is quite a surprise when doing market research.'
  },
  {
    startTime: 852.92,
    person: 'Karol',
    text: " But that number you said, that's quite a number of different solutions."
  },
  { startTime: 860.22, person: 'Karol', text: ' All right.' },
  {
    startTime: 860.52,
    person: 'Karol',
    text: " So, if we're looking at an enterprise, let's say whatever, telco, automotive, okay."
  },
  {
    startTime: 866.1,
    person: 'Karol',
    text: ' Usually those big corporate environments, they have somewhere between 20, 50 systems, however you define a system, completely independent applications that are governed by some sort of a business unit or used by some sort of a business unit to achieve some sort of a business goal, right?'
  },
  {
    startTime: 885.84,
    person: 'Karol',
    text: ' Most of them really need to communicate with something else.'
  },
  {
    startTime: 889.5,
    person: 'Karol',
    text: ' So basically they utilise some sort of integration quite possibly via APIs, right?'
  },
  {
    startTime: 896.12,
    person: 'Karol',
    text: " Some still use files with SFTP or managed file transfer, but let's leave them at that."
  },
  { startTime: 901.98, person: 'Karol', text: ' Okay.' },
  { startTime: 902.36, person: 'Karol', text: ' Some of them are using APIs.' },
  {
    startTime: 904.52,
    person: 'Karol',
    text: " So if we're looking at an enterprise level, we have, let's say that 50 systems, let's say that's a large telco environment that's very feasible to have 50 different systems."
  },
  {
    startTime: 917.14,
    person: 'Karol',
    text: ' And nowadays, every one of those systems, custom or not, SaaS, custom, on-premise, in cloud has an API management, right?'
  },
  {
    startTime: 927.08,
    person: 'Karol',
    text: " So we're already somewhere here on a problem of scale, right?"
  },
  {
    startTime: 932.4,
    person: 'Karol',
    text: ' So what problems of scale do you see at your perspective from this kind of setup?'
  },
  { startTime: 939.42, person: 'Rachel', text: ' Yeah.' },
  {
    startTime: 940.66,
    person: 'Rachel',
    text: ' So definitely, one of my go-to phrases is every sort of API management is a problem of visibility and governance, right?'
  },
  {
    startTime: 951.72,
    person: 'Rachel',
    text: ' So more number of APIs, I would call it as API sprawl,'
  },
  {
    startTime: 955.5,
    person: 'Rachel',
    text: ' because teams today, if you take a look at how teams operate within larger enterprises,'
  },
  {
    startTime: 960.64,
    person: 'Rachel',
    text: " I'm sure that you've also experienced the same, that the teams work in, I would call it as silos,"
  },
  {
    startTime: 966.3,
    person: 'Rachel',
    text: ' or we pretty much see that they work on one particular functionality, this team is responsible'
  },
  {
    startTime: 971.76,
    person: 'Rachel',
    text: ' for a particular domain of APIs, and you might have 15 or 20 or even hundreds of other teams'
  },
  { startTime: 978.14, person: 'Rachel', text: ' working on different set of functionalities.' },
  {
    startTime: 980.44,
    person: 'Rachel',
    text: " So, but do these teams actually, let's say, collaborate on certain integrations or applications and other functionality?"
  },
  {
    startTime: 989.32,
    person: 'Rachel',
    text: " The answer is, it's very rare that the teams have that sort of central view of what the other team is building on, or what I already built to have a central catalogue of all my APIs that I've exposed, is it up to date?"
  },
  {
    startTime: 1002.92,
    person: 'Rachel',
    text: " One of the trending, or one of the most common things that I see is developers hate to document, that is universally accepted, that's the truth."
  },
  {
    startTime: 1012.58,
    person: 'Rachel',
    text: ' If you ask a developer, hey, can you write the documentation for this?'
  },
  {
    startTime: 1015.88,
    person: 'Rachel',
    text: " It's always at the back of the mind, we don't have an automated way of doing this."
  },
  {
    startTime: 1022.06,
    person: 'Rachel',
    text: " Nine out of 10 chance I'm not going to do it, it's always an afterthought."
  },
  {
    startTime: 1026.24,
    person: 'Rachel',
    text: " But these sort of challenges start when it works within a single team, yeah, everything's fine, right?"
  },
  {
    startTime: 1032.78,
    person: 'Rachel',
    text: ' Everyone knows, hey, this is a set of four or five APIs, everyone knows what it does, how to access it, and some examples of how to use it.'
  },
  {
    startTime: 1041.2,
    person: 'Rachel',
    text: ' But the moment you start exposing an API, right?'
  },
  {
    startTime: 1044.119,
    person: 'Rachel',
    text: " Let's say one team has to work with the auto management team, so that's when there's a central system of record, then you have to expose your data models, you have to expose your data to the other team."
  },
  {
    startTime: 1055.56,
    person: 'Rachel',
    text: " And that's where it's challenging, because a lot of the systems within banks, let's say banks, telcos, they were built more than eight to 10, or 15 plus years ago."
  },
  {
    startTime: 1063.68,
    person: 'Rachel',
    text: " So the people who built them are long gone, but who are the current team that's maintaining it?"
  },
  {
    startTime: 1068.72,
    person: 'Rachel',
    text: " Do they have a clue of what's the exact functionality of what they do?"
  },
  {
    startTime: 1072.6,
    person: 'Rachel',
    text: ' But these are just some of the challenges that come in.'
  },
  {
    startTime: 1076.82,
    person: 'Rachel',
    text: " But I would say there's a massive, not just a skill gap, but also sort of like an organisational structure gap within a lot of the enterprises."
  },
  {
    startTime: 1084.94,
    person: 'Rachel',
    text: " They don't know exactly how their API is, where they are, where they are running."
  },
  {
    startTime: 1089.2,
    person: 'Rachel',
    text: " I think we see in the news today, there's a lot of shadow IT, or there's shadow APIs."
  },
  {
    startTime: 1094.3,
    person: 'Rachel',
    text: " APIs that are running in a server that I don't have a clue about, but they're still consuming resources, adding to your cloud costs."
  },
  {
    startTime: 1100.64,
    person: 'Rachel',
    text: " And that's exactly what escalates the problem at scale."
  },
  { startTime: 1103.94, person: 'Karol', text: ' Right.' },
  {
    startTime: 1104.86,
    person: 'Karol',
    text: ' I remember situations working in large corporate environments, especially in corporate environments that are network of companies, rather than a single large company in a territory.'
  },
  {
    startTime: 1117.98,
    person: 'Karol',
    text: ' So there are lots of those that are spawned across the globe in a single territory.'
  },
  { startTime: 1123.34, person: 'Karol', text: " It's not a single company." },
  { startTime: 1124.64, person: 'Karol', text: " It's just a few companies under one brand." },
  {
    startTime: 1127.7,
    person: 'Karol',
    text: ' And then obviously those companies do not have proper cohesion over their IT.'
  },
  {
    startTime: 1134.22,
    person: 'Karol',
    text: ' So it happens to be that one part of the company is developing exactly the same functionality as the other part of the company.'
  },
  {
    startTime: 1142.1,
    person: 'Karol',
    text: " They don't talk to each other because they're logically in two different, completely different branches of the company."
  },
  {
    startTime: 1148.92,
    person: 'Karol',
    text: " They're doing the same thing, exposing the same APIs, doing exactly the same logic because they need it."
  },
  { startTime: 1156.72, person: 'Karol', text: " They don't know about each other." },
  {
    startTime: 1159.98,
    person: 'Karol',
    text: ' And then we have duplicates, and then we have all sorts of wonky stuff, even using the same data from the same source at times, but basically exposing two separate functionalities.'
  },
  {
    startTime: 1170.8,
    person: 'Karol',
    text: " And it's amazing that these things happen, but these are not issues that are technical issues, basically."
  },
  { startTime: 1179.48, person: 'Karol', text: " This is Conway's law, pretty much." },
  {
    startTime: 1182.3,
    person: 'Karol',
    text: ' So this is more of an organisational issue, which then drives a problem, which is driven by the lack of knowledge, lack of governance, lack of cohesion, lack of conversation at most times.'
  },
  {
    startTime: 1195.14,
    person: 'Karol',
    text: " So basically like Conway's law says, the structure of the company, the structure of systems, and how many of them are there, is governed by how the communication happens in an organisation."
  },
  {
    startTime: 1210.18,
    person: 'Karol',
    text: " If it doesn't happen, it's going to be chaos, right?"
  },
  {
    startTime: 1213.36,
    person: 'Karol',
    text: " So, okay, we're having this kind of a distributed mess of various systems, even duplicates in functionality, duplicates in some sort of duplicates in APIs."
  },
  { startTime: 1226.84, person: 'Karol', text: ' We slap API management on top of that, right?' },
  {
    startTime: 1231.46,
    person: 'Karol',
    text: " Well, on top of each part, let's say, because the scale problem is not that we have one API management, because then we wouldn't have a scale problem, but we slap multiple API management, because each of those teams is also responsible for their infrastructure under their app, and they're basically adding everything to it, right?"
  },
  { startTime: 1253.94, person: 'Karol', text: ' What then?' },
  { startTime: 1255.9, person: 'Rachel', text: ' Yeah.' },
  {
    startTime: 1257.58,
    person: 'Rachel',
    text: " Most of the teams, they're not even located at the same geolocation."
  },
  { startTime: 1261.94, person: 'Rachel', text: " They're distributed across the globe." },
  {
    startTime: 1264.4,
    person: 'Rachel',
    text: ' There are teams working in Manila, teams working in Dubai, teams working in India, and that adds to the challenge, right?'
  },
  {
    startTime: 1271.22,
    person: 'Rachel',
    text: ' The teams have to collaborate on the same set of APIs, or most of the times, internal teams have their own wikis, their own sort of internal phrases or terms they use to refer to a certain process.'
  },
  {
    startTime: 1282.5,
    person: 'Rachel',
    text: ' For example, fund transfer, they might call as InstaPay or FirePay, but in India, a team in the Middle East might refer to it as just fund transfer, just transactions.'
  },
  { startTime: 1294.74, person: 'Rachel', text: " So there's also a gap in context, right?" },
  {
    startTime: 1298.06,
    person: 'Rachel',
    text: ' How you sort of refer to the same artefacts or the same processes in an organisation.'
  },
  {
    startTime: 1303.86,
    person: 'Rachel',
    text: ' So I think that adds to the sort of ambiguity across the organisation.'
  },
  {
    startTime: 1308.44,
    person: 'Rachel',
    text: " So I would say that one of the biggest problems, or I would say the gaps that's missing today, is that central sort of like a dashboard control plane that tells you this is your entire API inventory, or this is your central API catalogue."
  },
  {
    startTime: 1323,
    person: 'Rachel',
    text: " All the times where you're located can access it and find out this is exactly what my team builds."
  },
  { startTime: 1329.04, person: 'Rachel', text: ' This API is located here.' },
  {
    startTime: 1330.78,
    person: 'Rachel',
    text: " It takes a set of these parameters, it's connected to a certain system, and these are the set of access points, how to access and integrate with this API."
  },
  { startTime: 1340.74, person: 'Karol', text: " So I we're at the point of a knowledge problem." },
  {
    startTime: 1353.78,
    person: 'Karol',
    text: " We're lacking the visibility to have proper knowledge about what we actually have in our organisation."
  },
  {
    startTime: 1359.72,
    person: 'Karol',
    text: " So we're having our shadow ITs running per unit, whatever the unit may be."
  },
  {
    startTime: 1366.6,
    person: 'Karol',
    text: " We're having our shadow APIs running, duplicating efforts, duplicating functionality, because people don't know that that functionality already exists."
  },
  {
    startTime: 1376.16,
    person: 'Karol',
    text: " And then we have slapped onto them API managements, and we're creating a knowledge divide, because knowledge is still siloed, hence Conway's law."
  },
  { startTime: 1389.04, person: 'Karol', text: ' Okay.' },
  {
    startTime: 1389.98,
    person: 'Karol',
    text: " So apart from fixing Conway's law, which is called the reverse Conway's manoeuvre, so fixing how the organisation communicates, how can we properly support that visibility?"
  },
  {
    startTime: 1404.32,
    person: 'Karol',
    text: " And I think now we're touching onto that governance aspect of API managements."
  },
  { startTime: 1410.4, person: 'Rachel', text: ' Correct.' },
  { startTime: 1411.02, person: 'Rachel', text: " That's right." },
  {
    startTime: 1412.02,
    person: 'Rachel',
    text: " Yeah, that's when we sort of approach any type of governance, right?"
  },
  {
    startTime: 1415.68,
    person: 'Rachel',
    text: ' Whether if you want to enforce a governance, or you want to enforce security, or you want to enforce any type of sort of checks and balances across your system, you first need to, irrespective of which vendor you sort of select, or whoever you consult, they always say, do you have a central inventory?'
  },
  { startTime: 1433.42, person: 'Rachel', text: ' If not, let us first start with API discovery.' },
  {
    startTime: 1436.26,
    person: 'Rachel',
    text: " So discovery is something that can be done in so many different ways today, because that's a problem we've created ourselves."
  },
  {
    startTime: 1443.02,
    person: 'Rachel',
    text: " Earlier back in the days of PIPCO, there was a fixed sort of way in which you could define a service flow, but now because of microservices, it's sort of become a mess, right?"
  },
  {
    startTime: 1451.56,
    person: 'Rachel',
    text: " So I could build a microservice in Java, Python, it doesn't really matter."
  },
  {
    startTime: 1456.64,
    person: 'Karol',
    text: ' I still remember, that was somewhere in 2018, colleagues of mine were building, they called it the TIBCO radar, which was basically a repository crawler that went through the repositories and went through config files and identified and mapped all connection points.'
  },
  {
    startTime: 1483.06,
    person: 'Karol',
    text: ' So then we have a very large graph map through which we could just hop from point to point to different applications to see where the flow leads.'
  },
  {
    startTime: 1493.1,
    person: 'Karol',
    text: ' So we could map that, and that was an automated effort by then already, right?'
  },
  {
    startTime: 1498.16,
    person: 'Karol',
    text: ' But now given that we have all those systems that are way more distributed than, well, 2018, we already had a very distributed world, but people were still heavily in their own data centres, not that heavily in cloud yet.'
  },
  { startTime: 1516.62, person: 'Karol', text: ' Now we have everything everywhere.' },
  {
    startTime: 1518.82,
    person: 'Karol',
    text: ' Some companies have multi-cloud strategies to go anywhere, AWS, Google, Oracle Cloud and whatnot.'
  },
  { startTime: 1532, person: 'Karol', text: ' So what about that, right?' },
  {
    startTime: 1534.74,
    person: 'Karol',
    text: " It's like, where's that governance now going with this?"
  },
  { startTime: 1539.78, person: 'Karol', text: ' And you say we should bring up the slide now.' },
  { startTime: 1542, person: 'Karol', text: " All right, let's have it." },
  { startTime: 1544.54, person: 'Karol', text: ' Slide time.' },
  { startTime: 1546.98, person: 'Karol', text: ' Tell me.' },
  { startTime: 1548.56, person: 'Rachel', text: ' Yeah.' },
  {
    startTime: 1549.02,
    person: 'Rachel',
    text: " No, it's something through several conversations I've had, my team's had, and something that we generally just observe in the market, irrespective of what type of industry it is, right?"
  },
  {
    startTime: 1560.86,
    person: 'Rachel',
    text: " Whether it's healthcare, banking, or any industry, if you take a look at their actual sort of applications they're building, this is the most common pattern that we see."
  },
  { startTime: 1571.3, person: 'Rachel', text: " It's always almost like an NTR model, right?" },
  {
    startTime: 1573.56,
    person: 'Rachel',
    text: ' Where you have your final mobile app or your application access via a firewall, and you have an experience layer of APIs.'
  },
  {
    startTime: 1581.16,
    person: 'Rachel',
    text: ' So you have that outer shell of all your comms or your Apigee or your AWS or your WS02, your gateway proxies, and then it connects back to your layer of system APIs, and of course, back to your core systems.'
  },
  {
    startTime: 1595.58,
    person: 'Rachel',
    text: ' Now, one of the most challenging aspects here is if you take a look at any hop from your mobile app all the way to the core system, each layer is owned by a different team.'
  },
  {
    startTime: 1607.12,
    person: 'Rachel',
    text: ' A separate operational team manages the gate proxies at Apigee or Kong, a separate team manages the backend system APIs, a separate team manages the integrations to the core system.'
  },
  {
    startTime: 1616.78,
    person: 'Rachel',
    text: " So that's something that we have seen commonly observed across several of the enterprises."
  },
  { startTime: 1622.66, person: 'Rachel', text: ' And that herein lies the challenge, right?' },
  {
    startTime: 1626.4,
    person: 'Rachel',
    text: ' How do you actually get the teams working together?'
  },
  {
    startTime: 1630.14,
    person: 'Rachel',
    text: ' The core system integration team understands a particular process in a different way.'
  },
  {
    startTime: 1634.5,
    person: 'Rachel',
    text: " The operational team that's managing the proxies on Apigee or Kong or the other gateways, they understand the process in a different way."
  },
  {
    startTime: 1641.4,
    person: 'Rachel',
    text: " So they don't have that sort of cross-team visibility."
  },
  {
    startTime: 1644.58,
    person: 'Rachel',
    text: " And that's where there's a big disconnect in terms of the architecture, dependencies, ownership, and how that whole integration exists today."
  },
  {
    startTime: 1654.46,
    person: 'Karol',
    text: ' Again, back to the organisational issue of communication within an organisation.'
  },
  {
    startTime: 1661.48,
    person: 'Karol',
    text: " By the way, I'm looking at this and it just hit me that you're actually using MuleSoft nomenclature for some names, but completely different than MuleSoft, does it?"
  },
  { startTime: 1670.82, person: 'Karol', text: ' Yeah.' },
  { startTime: 1671.42, person: 'Karol', text: ' Okay.' },
  { startTime: 1671.82, person: 'Karol', text: ' So let me try to digest.' },
  { startTime: 1675.42, person: 'Karol', text: ' Okay.' },
  {
    startTime: 1675.72,
    person: 'Karol',
    text: ' So yes, NTA definitely, if we add on top of that integration platform into the mix, then we have definitely more tiers than you have here on this diagram.'
  },
  {
    startTime: 1690,
    person: 'Karol',
    text: ' And that becomes, yes, this becomes very troublesome at times, depending, of course, what you want to address, but yeah.'
  },
  {
    startTime: 1696.88,
    person: 'Karol',
    text: ' And then we have multiple gateways, multiple various APIs addressing something.'
  },
  {
    startTime: 1702.02,
    person: 'Karol',
    text: " Now you have them here very nicely divided by domains in the diagram, but most common scenario is that you don't really have that domain division on your APIs."
  },
  { startTime: 1713.82, person: 'Karol', text: " In a lot of organisations, they're just APIs." },
  {
    startTime: 1716.36,
    person: 'Karol',
    text: " They're not properly divided, addressed what they are, what they're supposed to represent."
  },
  { startTime: 1723.14, person: 'Karol', text: " And that's another level of problem itself." },
  { startTime: 1727.26, person: 'Karol', text: ' Okay.' },
  {
    startTime: 1728.04,
    person: 'Karol',
    text: ' So we have our app, we have those NTAs, we have our APIs.'
  },
  {
    startTime: 1733.98,
    person: 'Karol',
    text: " With API management, we're not going to change the APIs."
  },
  { startTime: 1736.8, person: 'Karol', text: " That's a completely different problem." },
  {
    startTime: 1738.5,
    person: 'Karol',
    text: " And we're not going to change the aspect of silos."
  },
  { startTime: 1742.46, person: 'Karol', text: ' Okay.' },
  { startTime: 1743.12, person: 'Karol', text: ' So what now?' },
  { startTime: 1744.7, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 1746.42,
    person: 'Rachel',
    text: ' So given that sort of structure that we just now saw, Carol, so I think some of the most common observations that we see is because of that complex architecture and because of the lack of that central visibility documentation, we see that pretty much almost 30% plus of the APIs are misconfigured, right?'
  },
  { startTime: 1765.3, person: 'Rachel', text: " People don't know these APIs exist." },
  {
    startTime: 1767.36,
    person: 'Rachel',
    text: ' They might be using some outdated auth mechanism.'
  },
  {
    startTime: 1770.54,
    person: 'Rachel',
    text: " And we see that enterprises, because they don't see the visibility of that API, they end up spending 20% or more in terms of op-ecs."
  },
  {
    startTime: 1777.62,
    person: 'Rachel',
    text: " Because even if an API is not being accessed, it's still, it's running, it's consuming resources on your, let's say your VM and your cloud, and it's adding to your overall cloud bill."
  },
  {
    startTime: 1787.7,
    person: 'Karol',
    text: ' And heating up the server room, basically, somewhere in the world, right?'
  },
  {
    startTime: 1791.78,
    person: 'Karol',
    text: " And on top of that, it's not being used, but it creates a security vulnerability."
  },
  { startTime: 1797.22, person: 'Karol', text: ' Yes.' },
  { startTime: 1797.94, person: 'Rachel', text: ' Yes.' },
  {
    startTime: 1798.86,
    person: 'Rachel',
    text: ' The shadow ID is one of the most, I would say the most scariest, I would say, backdoor to your internal infrastructure.'
  },
  { startTime: 1805.86, person: 'Rachel', text: " That's always a nightmare to solve." },
  { startTime: 1809.02, person: 'Rachel', text: ' Yeah.' },
  {
    startTime: 1809.48,
    person: 'Rachel',
    text: " And one of the things that I found interesting is also, you know, there's a common disconnect between, I would say, the business and the IT divisions, right?"
  },
  {
    startTime: 1819.44,
    person: 'Rachel',
    text: " Because whenever we think about a new functionality that has to be delivered, the IT takes it up as a, I would call it as a project, let's say."
  },
  { startTime: 1828.02, person: 'Rachel', text: ' They start implementing the features for that.' },
  {
    startTime: 1830,
    person: 'Rachel',
    text: ' You start pushing it in terms of, say, they take sprints, they release the functionality out to their environments, dev, test, 380, production.'
  },
  {
    startTime: 1837.3,
    person: 'Rachel',
    text: " But what happens is, let's say there's a bug found in production, right?"
  },
  { startTime: 1840.8, person: 'Rachel', text: ' And this is a very common scenario.' },
  { startTime: 1842.92, person: 'Rachel', text: ' So they roll it back, right?' },
  { startTime: 1844.18, person: 'Rachel', text: ' They roll back to it.' },
  {
    startTime: 1845.46,
    person: 'Rachel',
    text: ' But to the ID side of things, is there a cost associated to this?'
  },
  { startTime: 1850.2, person: 'Rachel', text: ' No.' },
  {
    startTime: 1851.22,
    person: 'Rachel',
    text: ' I just have to spend a bit more time, fix the bug, and again, push it to production.'
  },
  {
    startTime: 1855.46,
    person: 'Rachel',
    text: ' But on the business side of things, they always take it as, hey, there is an inherent cost here, right?'
  },
  {
    startTime: 1860.58,
    person: 'Rachel',
    text: ' I lost two weeks or three weeks of, you know, an effort.'
  },
  {
    startTime: 1863.76,
    person: 'Rachel',
    text: ' Maybe I promised integration to a downstream consumer or a customer, or maybe now this leaves my integration effort in a bit of a peril because I need to sort of coordinate with other stakeholders.'
  },
  {
    startTime: 1875.2,
    person: 'Rachel',
    text: " So we see that there's a, because of this lack of the central or structured process of releasing your APIs or managing these APIs, well over 74% of your ID cycle is wasted, right?"
  },
  {
    startTime: 1887.18,
    person: 'Rachel',
    text: " There's always repetitions, creating duplicate, you know, efforts."
  },
  {
    startTime: 1891.22,
    person: 'Rachel',
    text: " You might have already had this API, but because you didn't know about it, you created the API again."
  },
  {
    startTime: 1897.5,
    person: 'Rachel',
    text: " So we see these type of patterns a lot, and it's a lot more common than we feel it is."
  },
  { startTime: 1904.64, person: 'Karol', text: " That's interesting." },
  {
    startTime: 1906.66,
    person: 'Karol',
    text: ' Side note, please do send me sources for that later.'
  },
  { startTime: 1911.36, person: 'Karol', text: ' I love these kinds of numbers.' },
  { startTime: 1913.12, person: 'Karol', text: ' I always look for sources for these numbers.' },
  {
    startTime: 1915.38,
    person: 'Karol',
    text: ' I always love to share these sources because these are interesting studies.'
  },
  {
    startTime: 1919.8,
    person: 'Karol',
    text: ' I saw a very analogous study, and not analogous numbers for polling.'
  },
  {
    startTime: 1927.94,
    person: 'Karol',
    text: ' Standard approach for old systems where they cannot release events.'
  },
  {
    startTime: 1934.08,
    person: 'Karol',
    text: ' You pull data from those systems on an interval basis.'
  },
  {
    startTime: 1937.7,
    person: 'Karol',
    text: ' And somebody claimed over a presentation without giving a source that over 90%, 98% of polling attempts results in absolutely no data.'
  },
  { startTime: 1948.4, person: 'Karol', text: ' And that was a presentation given in 2024.' },
  { startTime: 1951.66, person: 'Karol', text: ' Turns out the study done for that was in 2013.' },
  { startTime: 1956.14, person: 'Karol', text: ' So it was quite old.' },
  { startTime: 1958.4, person: 'Karol', text: ' So it already was somewhat outdated.' },
  {
    startTime: 1961.56,
    person: 'Karol',
    text: ' Of course, you can quote, still quote it, but then what is the actual situation now?'
  },
  { startTime: 1966.68, person: 'Karol', text: " That's a good question." },
  {
    startTime: 1967.66,
    person: 'Karol',
    text: ' If I see these kinds of numbers, I always please ask for sources for those, because that might be actually a very interesting read to put that in context.'
  },
  {
    startTime: 1977.62,
    person: 'Karol',
    text: " But let's say, I'll believe you on the word for the moment."
  },
  { startTime: 1982.12, person: 'Karol', text: " I'll read into it later." },
  {
    startTime: 1983.36,
    person: 'Karol',
    text: " We'll have a chat offline about sources, and I'll attach them to the stream, to the description later."
  },
  {
    startTime: 1990.36,
    person: 'Karol',
    text: " But basically, if we have a number of percent of repetition being, well, percent of waste through repetition being 74%, I mean, if somebody is watching this who's a CTO, or an IT director, or a manager in a IT unit, release management unit, that makes you think, how much do we actually waste in our context of our own organisations?"
  },
  {
    startTime: 2024.38,
    person: 'Karol',
    text: ' And this is a very interesting number, because then it seems that we could actually save quite a bit of money if we start governing that properly.'
  },
  { startTime: 2035.6, person: 'Rachel', text: ' Yes.' },
  { startTime: 2036.68, person: 'Rachel', text: " That's right." },
  {
    startTime: 2037.88,
    person: 'Rachel',
    text: ' In fact, these cycles are not just attributed to pieces of code, but they could be, like you mentioned, you mentioned a good phrase, knowledge gaps.'
  },
  {
    startTime: 2045.78,
    person: 'Rachel',
    text: " So because of knowledge gaps, we take our release to the next environment, and it didn't satisfy the business or the functional requirement."
  },
  {
    startTime: 2054.679,
    person: 'Rachel',
    text: " Because we didn't go through the process of stakeholder sort of iteration and feedback in the earlier stages, now we have to sort of bring it back and do it all over again."
  },
  {
    startTime: 2063.08,
    person: 'Karol',
    text: " So in order to miss that, sort of just make sure that we pass through those checks, it's always- If we try to map it to a cycle, the cycle that comes to mind in terms of governance is a ToGov cycle, right?"
  },
  {
    startTime: 2077.94,
    person: 'Karol',
    text: " If you look at the ToGov cycle or any other governance of producing software cycle, a lot of the elements are not actually implementation, they're analysis, discovery, understanding the business, planning, design, operations, testing, deployments in various environments and so on."
  },
  {
    startTime: 2102.48,
    person: 'Karol',
    text: " So there's plenty to that cycle, more than just implementation."
  },
  { startTime: 2106.08, person: 'Karol', text: " That's for sure." },
  { startTime: 2107.52, person: 'Rachel', text: ' Correct.' },
  { startTime: 2108.08, person: 'Karol', text: ' Oh, there we go.' },
  { startTime: 2108.84, person: 'Karol', text: ' Yeah.' },
  { startTime: 2109.52, person: 'Rachel', text: ' Yeah.' },
  {
    startTime: 2109.94,
    person: 'Rachel',
    text: " There's so many stages involved in the cycle, right?"
  },
  {
    startTime: 2112.18,
    person: 'Rachel',
    text: " If you have to, let's say, build or release a API that's reliable or that's compliant or functional or performant, you have to go through this entire sort of cycle with not just the tech, but also the business stakeholders."
  },
  {
    startTime: 2125.24,
    person: 'Rachel',
    text: ' And this is something that we see frequently within the enterprise.'
  },
  {
    startTime: 2131.69,
    person: 'Rachel',
    text: " And that's why I've sort of split this into two lenses here, right?"
  },
  {
    startTime: 2136.05,
    person: 'Rachel',
    text: " You have an API publisher who's building it out and exposing it as an API or a functionality to their clients or consumers, or it could also be internal groups."
  },
  {
    startTime: 2145.97,
    person: 'Rachel',
    text: " And you have the consumer over there who's responsible for accessing the API, building the integration, or maybe even sharing it as your third-party integrator."
  },
  {
    startTime: 2156.11,
    person: 'Rachel',
    text: " That's also something that we see a lot commonly used nowadays."
  },
  {
    startTime: 2159.57,
    person: 'Rachel',
    text: ' So pretty much the size of the API coin over here.'
  },
  { startTime: 2164.03, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 2164.61,
    person: 'Karol',
    text: " If we put this at this level of details, there's plenty to do around both sides."
  },
  {
    startTime: 2169.79,
    person: 'Karol',
    text: " And yeah, it's good that you put it this way because people tend not to think about this as a dependency."
  },
  { startTime: 2177.37, person: 'Karol', text: ' Okay.' },
  { startTime: 2177.57, person: 'Karol', text: ' We publish an API.' },
  { startTime: 2178.71, person: 'Karol', text: ' Perfect.' },
  { startTime: 2179.09, person: 'Karol', text: ' Fantastic.' },
  { startTime: 2179.67, person: 'Karol', text: " And we're done." },
  { startTime: 2180.79, person: 'Karol', text: ' No, no, no.' },
  {
    startTime: 2181.31,
    person: 'Karol',
    text: " There's also the consumer side, which is dependent on the API."
  },
  {
    startTime: 2184.51,
    person: 'Karol',
    text: " If that's a preexisting API and you're modifying it, there's so much to it, right?"
  },
  {
    startTime: 2190.19,
    person: 'Karol',
    text: ' Because we have consumers and the more consumers you have, the more dependencies you need to manage and it becomes a whole thing.'
  },
  {
    startTime: 2198.13,
    person: 'Karol',
    text: ' So then decommissioning of APIs, the whole life cycle is then humongous in terms of effort.'
  },
  { startTime: 2207.77, person: 'Rachel', text: ' Yes.' },
  {
    startTime: 2208.57,
    person: 'Rachel',
    text: " And here's where an interesting terminology or concept comes into play."
  },
  {
    startTime: 2214.23,
    person: 'Rachel',
    text: ' We always ask consumer enterprise, how mature are your APIs or how mature is your API programme?'
  },
  { startTime: 2222.17, person: 'Rachel', text: ' So ask us back saying, what is API maturity?' },
  {
    startTime: 2226.71,
    person: 'Rachel',
    text: ' Does it mean that my consumers are accessing my API?'
  },
  {
    startTime: 2229.47,
    person: 'Rachel',
    text: ' So my API is mature or my API is published in a portal.'
  },
  {
    startTime: 2232.21,
    person: 'Rachel',
    text: " That means it's a first class API sitting on a portal."
  },
  { startTime: 2235.61, person: 'Rachel', text: ' The consumer is accessing it.' },
  {
    startTime: 2237.27,
    person: 'Rachel',
    text: " But when we talk about maturity, it's a lot more than just is your API functional right?"
  },
  { startTime: 2243.63, person: 'Rachel', text: ' Was it designed in the right way?' },
  { startTime: 2245.19, person: 'Rachel', text: ' Is it extensible?' },
  {
    startTime: 2245.89,
    person: 'Rachel',
    text: ' Can other teams access it, extend it, integrate with it?'
  },
  {
    startTime: 2252.11,
    person: 'Rachel',
    text: ' Does it require a manual process to integrate with your API?'
  },
  {
    startTime: 2255.87,
    person: 'Rachel',
    text: " Because even in a lot of the conversations I have, existing in pre-sales and other integrating conversations, we always come across, even though you have a developer portal, it's a process of manually integrating the API, right?"
  },
  {
    startTime: 2268.63,
    person: 'Rachel',
    text: ' The consumer sends an email, hey, I want to connect to this API.'
  },
  { startTime: 2271.41, person: 'Rachel', text: ' Can you show me how to use it?' },
  {
    startTime: 2272.73,
    person: 'Rachel',
    text: ' And then the provider has to manually insert some record in the database or generate the credential.'
  },
  {
    startTime: 2277.87,
    person: 'Rachel',
    text: " And that's a week or a two week process until the consumer can actually access the fourth version of the API."
  },
  {
    startTime: 2285.65,
    person: 'Rachel',
    text: " So we see there's a lot of steps that need to go before we even say an API is mature, or it's ready for consumption, or it's a self-serve on its own."
  },
  {
    startTime: 2295.99,
    person: 'Rachel',
    text: " So that's where we see that a lot of these aspects have to be taken care of in API management."
  },
  { startTime: 2301.79, person: 'Karol', text: ' Yes, true.' },
  {
    startTime: 2302.65,
    person: 'Karol',
    text: " But some of those APIs will require that process, because depending on the type of data you're dealing with and the, let's say, secrecy levels in certain organisations, like public entities, especially related to, let's say, police, border control, et cetera, the processes are there also for a reason."
  },
  {
    startTime: 2325.61,
    person: 'Karol',
    text: ' Some of them are over-bureaucratised and then take the time with manual approvals, lots of red tape, which is unnecessary, but some of them are for good reason and could measure that they require approval to get to that API.'
  },
  {
    startTime: 2338.19,
    person: 'Karol',
    text: ' And this will probably differ from organisation to organisation, so that in that sense, if we look at it, then one might say that we need to redefine maturity per organisation.'
  },
  { startTime: 2352.99, person: 'Rachel', text: ' Yeah.' },
  {
    startTime: 2354.83,
    person: 'Rachel',
    text: " But in the overall aspect of things, I would say, just to, I don't want to be too general here, but say when an API programme is mature or an API is mature, it means it's passed through the right guardrails, right?"
  },
  {
    startTime: 2369.07,
    person: 'Rachel',
    text: ' While designing it, a centralised, sort of a standardised governance model, there were a couple of linting rules applied on that API.'
  },
  {
    startTime: 2376.29,
    person: 'Rachel',
    text: " I centralised my data models, accessed them from a, let's say, a data dictionary or a schema repository, and then I'm reusing them across the APIs."
  },
  {
    startTime: 2384.41,
    person: 'Rachel',
    text: " I'm testing those APIs as well as integrating them in the right way, performing a scenario-driven test cases."
  },
  {
    startTime: 2390.81,
    person: 'Rachel',
    text: " So if we were able to list down all these governance sort of practises or checks that have to be embedded, it's something that goes a long way into increasing or elevating the maturity of the API."
  },
  {
    startTime: 2403.63,
    person: 'Rachel',
    text: " That's something that platform teams actively work on, right?"
  },
  {
    startTime: 2407.65,
    person: 'Rachel',
    text: ' They want to make sure that instil that platform engineering within the organisation, or they want to make sure I have not just have a self-serve, but also implement that sort of like an ops.'
  },
  {
    startTime: 2418.03,
    person: 'Rachel',
    text: ' Yes, we see API ops being used a lot these days.'
  },
  {
    startTime: 2421.31,
    person: 'Rachel',
    text: ' So they want to establish that API ops framework within the organisation.'
  },
  {
    startTime: 2426.09,
    person: 'Karol',
    text: ' It usually all comes down to the actual adoption and utilisation of those, and we all want our software to be used in the end of the day.'
  },
  {
    startTime: 2438.05,
    person: 'Karol',
    text: ' And this will differ, again, from organisation to organisation, from piece of software to piece of software.'
  },
  {
    startTime: 2445.93,
    person: 'Karol',
    text: ' The question is then, can we actually have sort of a generic framework to actually measure the maturity of API?'
  },
  { startTime: 2455.41, person: 'Karol', text: " Because that's a very compound problem, right?" },
  {
    startTime: 2458.85,
    person: 'Karol',
    text: ' If we look at this from the perspective of the previous stream, which was about data mesh, we were talking about data products.'
  },
  {
    startTime: 2467.71,
    person: 'Karol',
    text: " Now, data products, that's something very specific."
  },
  {
    startTime: 2470.65,
    person: 'Karol',
    text: ' If we define a data product, what is a piece of data, and then we serve it to a customer, then we serve it usually through APIs, right?'
  },
  {
    startTime: 2478.93,
    person: 'Karol',
    text: " So is our API then mature because it's serving data products?"
  },
  {
    startTime: 2483.49,
    person: 'Karol',
    text: ' Well, then it would depend on the maturity of the data product itself in that sense, right?'
  },
  {
    startTime: 2489.35,
    person: 'Karol',
    text: " So it's a matter of really putting guardrails also on the definition of that maturity first, and understanding what do we mean by mature?"
  },
  { startTime: 2501.87, person: 'Karol', text: ' Where is the target state of our maturity?' },
  {
    startTime: 2504.57,
    person: 'Karol',
    text: ' And can we define levels of maturity that we want to achieve?'
  },
  {
    startTime: 2509.05,
    person: 'Karol',
    text: " And let's say now we're immature because we're having our APIs that resemble right now our relational database underneath."
  },
  {
    startTime: 2517.33,
    person: 'Karol',
    text: ' So we have basically an API method per table, which is horrendous.'
  },
  { startTime: 2522.25, person: 'Karol', text: " It's just a nightmare to use." },
  { startTime: 2524.49, person: 'Karol', text: " So let's say that's our maturity zero." },
  {
    startTime: 2527.45,
    person: 'Karol',
    text: " But then what drives us to maturity level one, two, three, four, five, let's say five is the maximum here."
  },
  {
    startTime: 2533.93,
    person: 'Karol',
    text: " And I'm curious to ask, when working on governance topics about APIs, do you have any sort of a framework or any sort of a classification method to classify maturity?"
  },
  { startTime: 2554.23, person: 'Rachel', text: ' Yeah.' },
  {
    startTime: 2555.09,
    person: 'Rachel',
    text: " Maybe in the broader terms, Karol, I would say when it comes to assessing, let's say, the maturity of any enterprise's API programme, we start by examining first, do you have a central sort of API inventory?"
  },
  { startTime: 2567.41, person: 'Rachel', text: ' How are APIs being accessed today, right?' },
  {
    startTime: 2569.65,
    person: 'Rachel',
    text: ' Are APIs being sort of built bespoke or an ad hoc sort of development?'
  },
  {
    startTime: 2574.31,
    person: 'Rachel',
    text: ' Or do your teams actually refer a common data model or a data dictionary or a repository and say that these are my existing models?'
  },
  {
    startTime: 2582.81,
    person: 'Rachel',
    text: ' Can I sort of work these into a new functionality or extend my existing logic to expose new functionality?'
  },
  {
    startTime: 2591.17,
    person: 'Rachel',
    text: " So without having to, let's say, redo effort, or do I have a common or reusable artefact?"
  },
  {
    startTime: 2597.15,
    person: 'Rachel',
    text: ' You know, a lot of times people say that in order to sort of promote or make your APIs more mature, you have to create that reusable artefact piece of it, right?'
  },
  {
    startTime: 2606.49,
    person: 'Rachel',
    text: ' So that means rebuilding or redefining my data model.'
  },
  {
    startTime: 2609.49,
    person: 'Rachel',
    text: ' And you mentioned earlier that, you know, you came across an example where the same API was duplicated.'
  },
  {
    startTime: 2615.85,
    person: 'Rachel',
    text: " So in a similar sense, you know, one of the examples that I've heard a lot of times is, let's say, within the telco space, you have a store locator API."
  },
  {
    startTime: 2625.27,
    person: 'Rachel',
    text: " If you have seven versions of the store locator API that's created by, let's say, different teams within the organisation, how do you know which one to access?"
  },
  { startTime: 2632.37, person: 'Rachel', text: ' Or which one is even actively being used?' },
  {
    startTime: 2635.01,
    person: 'Rachel',
    text: ' Or if I have to go deprecated, which one do I deprecate?'
  },
  {
    startTime: 2638.23,
    person: 'Rachel',
    text: ' Or which is the API in which I have to update the, you know, the parameter or the model?'
  },
  {
    startTime: 2644.29,
    person: 'Rachel',
    text: " I think that makes the first level of maturity such that you're just building functionality."
  },
  {
    startTime: 2651.05,
    person: 'Rachel',
    text: ' And then you start sort of going to higher levels of maturity saying that now I can standardise my API consistency.'
  },
  {
    startTime: 2658.45,
    person: 'Rachel',
    text: " I'm referring my data models from a common store or a repository."
  },
  {
    startTime: 2662.39,
    person: 'Rachel',
    text: " So that means that I've sort of jumped from level one to level two."
  },
  {
    startTime: 2666.53,
    person: 'Rachel',
    text: ' And then level three means, do I have an automated design plan governance?'
  },
  {
    startTime: 2670.71,
    person: 'Rachel',
    text: ' Whenever I push a change into my API, is it being automatically scanned against my organisational rule sets?'
  },
  {
    startTime: 2677.87,
    person: 'Rachel',
    text: " And that's going to differ from one enterprise to the other, right?"
  },
  { startTime: 2681.47, person: 'Rachel', text: ' Even across industries.' },
  {
    startTime: 2683.05,
    person: 'Rachel',
    text: ' For example, one good thing that I do see now is every industry or vertical has its own sort of like an organisational rule set, right?'
  },
  {
    startTime: 2691.59,
    person: 'Rachel',
    text: " You have, let's say for airlines, you have the IATA."
  },
  {
    startTime: 2695.39,
    person: 'Rachel',
    text: ' Then for banking, I think you have the sort of like the PSP regulations.'
  },
  {
    startTime: 2701.31,
    person: 'Rachel',
    text: ' Similar like that, you have a lot of these standard operating models across the industries.'
  },
  {
    startTime: 2707.13,
    person: 'Karol',
    text: ' In Telco in Europe, at least in Europe, we have the TM forum standards, which are quite robust, extensive.'
  },
  { startTime: 2715.81, person: 'Rachel', text: ' Yeah.' },
  {
    startTime: 2716.29,
    person: 'Rachel',
    text: ' And also the sort of the Kamara Alliance, where I see a lot of these Telco operators coming together to build, you know, standards for networks, network APIs.'
  },
  {
    startTime: 2724.73,
    person: 'Rachel',
    text: " That's something that's really, you know, picking up pace."
  },
  {
    startTime: 2729.07,
    person: 'Rachel',
    text: " That's something that really adds to the overall maturity."
  },
  {
    startTime: 2732.39,
    person: 'Rachel',
    text: ' And I would also say is, you know, people like to forget documentation, or they say, think of it as an afterthought.'
  },
  {
    startTime: 2739.43,
    person: 'Rachel',
    text: ' But I would say a well, a well documented API also means that the API is a lot more ahead in terms of maturity.'
  },
  {
    startTime: 2747.73,
    person: 'Rachel',
    text: " That means your consumers are able to, you know, access it, understand it, they're able to integrate this API into their workflows and work streams."
  },
  {
    startTime: 2755.15,
    person: 'Rachel',
    text: " So that's something that also adds to the maturity of the API, as well as your API is well secured."
  },
  {
    startTime: 2762.37,
    person: 'Rachel',
    text: ' Are they following the right set of updated or, you know, mechanisms?'
  },
  {
    startTime: 2766.63,
    person: 'Rachel',
    text: ' Does it follow a systematic security, you know, protocols in place that your organisation enforces?'
  },
  {
    startTime: 2772.25,
    person: 'Rachel',
    text: " And this is something that I've seen differs across enterprise to enterprise, they might have their own set of, you know, security policies or practises."
  },
  {
    startTime: 2780.55,
    person: 'Rachel',
    text: " But that's something that has to be enforced at each enterprise."
  },
  { startTime: 2784.49, person: 'Rachel', text: ' Right.' },
  {
    startTime: 2785.01,
    person: 'Rachel',
    text: ' And then finally, the pinnacle of, you know, API maturity, not every, not every enterprise wants to monetise their APIs, but eventually, they want to move in that direction, right?'
  },
  {
    startTime: 2795.49,
    person: 'Rachel',
    text: ' The end of the day, the values with the data you hold and control.'
  },
  {
    startTime: 2799.27,
    person: 'Rachel',
    text: " So can you unlock or sort of expose that API, you know, let's say, you know, monetizable model?"
  },
  { startTime: 2806.63, person: 'Rachel', text: ' Am I okay to export APIs to monetise?' },
  {
    startTime: 2810.03,
    person: 'Rachel',
    text: " And that's something I see that question gets asked a lot."
  },
  { startTime: 2813.17, person: 'Rachel', text: ' I want to enable monetization.' },
  {
    startTime: 2814.91,
    person: 'Rachel',
    text: ' But the real question is, is your API even in a state to monetise?'
  },
  { startTime: 2818.87, person: 'Rachel', text: ' Right?' },
  { startTime: 2819.47, person: 'Rachel', text: ' Right.' },
  {
    startTime: 2820.51,
    person: 'Rachel',
    text: " Yeah, that's something that's something worth questioning."
  },
  { startTime: 2824.77, person: 'Karol', text: ' Okay, I was taking notes.' },
  {
    startTime: 2828.67,
    person: 'Karol',
    text: ' For the sake, for the sake of the conversation, let me rehash what you just said in a summary.'
  },
  {
    startTime: 2836.23,
    person: 'Karol',
    text: ' So if we would be looking at maturity of an API programme of API management of our APIs within an organisation, I noted down several different qualities that we would look like, we will look at.'
  },
  {
    startTime: 2853.29,
    person: 'Karol',
    text: ' So starting with the way we access those APIs going through, do we have actual an inventory of those APIs and the proper documentation that comes with that inventory?'
  },
  {
    startTime: 2864.81,
    person: 'Karol',
    text: ' Then do we have a some sort of a data dictionary?'
  },
  {
    startTime: 2868.63,
    person: 'Karol',
    text: " Do we actually have a semantic understanding of set data that we're exposing through APIs?"
  },
  {
    startTime: 2873.23,
    person: 'Karol',
    text: ' And then on top of that, this would be a model dictionary.'
  },
  {
    startTime: 2876.39,
    person: 'Karol',
    text: " So basically, do we have a proper modelling of those APIs, not just exposing raw tables of a relational database, but actually exposing, let's say, that data product we were talking about a little bit earlier."
  },
  {
    startTime: 2890.39,
    person: 'Karol',
    text: ' Then extensibility as a characteristic, can we extend it easily?'
  },
  { startTime: 2895.23, person: 'Karol', text: ' Can we actually add to it?' },
  { startTime: 2896.49, person: 'Karol', text: ' Can we build new functionality with it?' },
  {
    startTime: 2899.22,
    person: 'Karol',
    text: ' Then with that comes reusability, can we reuse that API in other contexts to create new business, whatever business that may be.'
  },
  {
    startTime: 2910.69,
    person: 'Karol',
    text: ' Then deduplication, so the actual effort to reduce sprawl of the same functionality, same data being delivered in a similar way or identical way, but just from different places in the organisation.'
  },
  {
    startTime: 2925.71,
    person: 'Karol',
    text: ' And then the actual usability, so how easy it is to use that API, how intuitive it is to be used, because some of those are really not intuitive.'
  },
  { startTime: 2934.47, person: 'Karol', text: " I've seen many of those like that." },
  {
    startTime: 2936.75,
    person: 'Karol',
    text: ' And then on top of that, security of set APIs, and then the review cycles, and how often do we come back to actually check on those APIs?'
  },
  { startTime: 2947.03, person: 'Karol', text: ' Are they still useful?' },
  { startTime: 2949.65, person: 'Karol', text: ' Are they still consumed?' },
  { startTime: 2951.03, person: 'Karol', text: ' Are they still secure?' },
  { startTime: 2953.01, person: 'Karol', text: ' Do they still have value?' },
  {
    startTime: 2955.29,
    person: 'Karol',
    text: " And then that constitutes to, let's say, five levels of maturity."
  },
  {
    startTime: 2960.49,
    person: 'Karol',
    text: ' So first level being functional maturity, well, it works.'
  },
  {
    startTime: 2964.81,
    person: 'Karol',
    text: ' Second level being internal standardisation, so we have it according to our internal standards.'
  },
  {
    startTime: 2971.61,
    person: 'Karol',
    text: " We started standardising our APIs so they're actually readable for the majority of the company, let's say."
  },
  {
    startTime: 2979.11,
    person: 'Karol',
    text: ' Then we apply automated governance as third level.'
  },
  {
    startTime: 2982.93,
    person: 'Karol',
    text: ' Then we could go to fourth level being the industry standardisation.'
  },
  {
    startTime: 2987.89,
    person: 'Karol',
    text: " So we're actually looking at what the industry is doing, either through PSD, TM forum, healthcare standards, whatever the industry may be."
  },
  {
    startTime: 2998.57,
    person: 'Karol',
    text: ' And lastly, which is a level not everybody will want to go to, would be the monetization of your APIs and monetization of the data products.'
  },
  { startTime: 3007.33, person: 'Karol', text: ' Is that a good summary?' },
  { startTime: 3009.81, person: 'Karol', text: ' Yeah, you nailed it, Carol.' },
  { startTime: 3013.05, person: 'Rachel', text: ' Nice.' },
  {
    startTime: 3013.99,
    person: 'Rachel',
    text: ' What I would also include is the data compliance aspect.'
  },
  { startTime: 3017.35, person: 'Karol', text: ' Data compliance.' },
  { startTime: 3018.33, person: 'Karol', text: ' Yeah.' },
  { startTime: 3018.59, person: 'Karol', text: ' All right.' },
  { startTime: 3019.03, person: 'Karol', text: ' Yeah, sure.' },
  { startTime: 3023.9, person: 'Karol', text: ' Notice.' },
  {
    startTime: 3025.86,
    person: 'Karol',
    text: ' But you see, now having this, we have the terms in which the access in which we could define what means access, what means inventory, what means a data dictionary in a context of a specific company, what means reusability, what means extensibility.'
  },
  {
    startTime: 3045.52,
    person: 'Karol',
    text: ' And now we have more of a frame in which we can have a conversation within companies.'
  },
  {
    startTime: 3051.48,
    person: 'Karol',
    text: ' What is our maturity and what do we understand of our maturity based on those qualities that we here have?'
  },
  {
    startTime: 3058.02,
    person: 'Karol',
    text: ' And that might be then a very nice and structured conversation to be had.'
  },
  {
    startTime: 3062.84,
    person: 'Karol',
    text: ' And even if somebody would just go in and have a chat with a company offering an API management solution, well, we can take those qualities and discuss how they can help us achieve these kinds of qualities, how the tool will help the organisation build on those qualities.'
  },
  {
    startTime: 3081.58,
    person: 'Karol',
    text: ' And of course, the tool will not solve all the problems because most of those are organisational problems, not technology problems.'
  },
  {
    startTime: 3089.68,
    person: 'Karol',
    text: ' But this is at least from that perspective, we can actually have the conversation and see where we can align and help each other, right?'
  },
  { startTime: 3098.78, person: 'Karol', text: ' Which is a good thing.' },
  { startTime: 3101.26, person: 'Karol', text: ' All right.' },
  { startTime: 3102.84, person: 'Karol', text: ' Continuing on.' },
  { startTime: 3105.24, person: 'Rachel', text: ' Yeah.' },
  {
    startTime: 3105.68,
    person: 'Rachel',
    text: ' And yeah, this is a really important topic, right?'
  },
  {
    startTime: 3109.44,
    person: 'Rachel',
    text: ' When we talk to API management, an enterprise, the first thought that an enterprise always has is, yeah, we have an API management, we have an API gateway in place.'
  },
  {
    startTime: 3119.76,
    person: 'Rachel',
    text: " So it's always a common sort of a, I would say a convention by now to sort of correlate API management and an API gateway."
  },
  { startTime: 3127.68, person: 'Rachel', text: ' And is it the fault of an enterprise?' },
  {
    startTime: 3129.76,
    person: 'Rachel',
    text: " Not really, because gateways have, I would call them the old, they've been around for quite a few years now, right?"
  },
  { startTime: 3136.52, person: 'Rachel', text: ' Like 10 plus years.' },
  {
    startTime: 3138.36,
    person: 'Rachel',
    text: " And it's no sense that no reason why enterprises can't sort of call that as their API management strategy."
  },
  {
    startTime: 3145.58,
    person: 'Rachel',
    text: " But what I've seen is enterprises are increasingly becoming more aware of the problems within their governance gaps."
  },
  {
    startTime: 3155,
    person: 'Rachel',
    text: " They're saying that, hey, now that I've realised that a gateway is excellent at the runtime, but as soon as I start imposing expectations of what a gateway should help me to solve, let's say, why can't my gateway secure my APIs?"
  },
  {
    startTime: 3169.68,
    person: 'Rachel',
    text: " Why can't my gateways help me design and build them in a consistent way?"
  },
  {
    startTime: 3173.84,
    person: 'Rachel',
    text: " So that's when I've seen the limitations, right?"
  },
  {
    startTime: 3176.66,
    person: 'Rachel',
    text: ' Gateways were never built for sort of an, I would say, lifecycle management.'
  },
  {
    startTime: 3180.94,
    person: 'Rachel',
    text: ' Rather, gateways were primarily designed and built for traffic management.'
  },
  { startTime: 3184.7, person: 'Rachel', text: " They're great at the runtime." },
  {
    startTime: 3186.38,
    person: 'Rachel',
    text: " And that's where we see it as a sort of a mismatch in terms of expectations of what a gateway does and what an API strategy should be within an enterprise."
  },
  {
    startTime: 3197.08,
    person: 'Rachel',
    text: ' A gateway cannot be sufficient in order for you to manage your APIs.'
  },
  {
    startTime: 3201.9,
    person: 'Rachel',
    text: " And that's exactly why we see many enterprises, they adopt an API gateway, and then they start running into challenges, right?"
  },
  {
    startTime: 3208.56,
    person: 'Rachel',
    text: ' Now, in order to solve for the sort of lifecycle, I need to bring in that aspect to solve for my design, for my testing, for my observability.'
  },
  {
    startTime: 3218.04,
    person: 'Rachel',
    text: ' So this is something that we see a lot across the enterprises.'
  },
  { startTime: 3222.32, person: 'Karol', text: ' Adeeb, can I ask you one thing?' },
  {
    startTime: 3224.5,
    person: 'Karol',
    text: ' Can you put that phone on do not disturb or a flight mode?'
  },
  {
    startTime: 3229.84,
    person: 'Karol',
    text: ' Because I do hear it buzzing in our audience as well.'
  },
  {
    startTime: 3232.92,
    person: 'Karol',
    text: ' So that would be nice to just get it out of the way so we can continue.'
  },
  { startTime: 3236.8, person: 'Karol', text: ' All right.' },
  { startTime: 3238.44, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 3238.8,
    person: 'Karol',
    text: " So yes, you're definitely right that API gateways, as they were, API gateways is basically a pretty old concept."
  },
  { startTime: 3247.8, person: 'Karol', text: " It's definitely over 10 years old." },
  {
    startTime: 3250.98,
    person: 'Karol',
    text: " I don't remember when I had the first encounter with an API gateway."
  },
  { startTime: 3258.22, person: 'Karol', text: ' I was already an architect.' },
  {
    startTime: 3259.14,
    person: 'Karol',
    text: " So let's say that would be somewhere between 2014 and 2018, right?"
  },
  { startTime: 3266.2, person: 'Karol', text: " So that's a pretty old concept." },
  {
    startTime: 3269.5,
    person: 'Karol',
    text: " And you're absolutely right that gateways, from that perspective, at least back in the day, they were primarily traffic management or security, in essence."
  },
  {
    startTime: 3280.14,
    person: 'Karol',
    text: " And the difference is, looking at it now and then, we didn't have such a distributed environment."
  },
  {
    startTime: 3288.34,
    person: 'Karol',
    text: " We didn't have so many clouds and apps living all over the place, which basically gateways at that time were your perimeter defence."
  },
  {
    startTime: 3299.14,
    person: 'Karol',
    text: ' They were placed in DMZs of companies on the edge between the internet and the internal network of a company.'
  },
  {
    startTime: 3309.48,
    person: 'Karol',
    text: " It's changed quite a lot because nobody now uses a DMZ term ever in terms of security of their network because the DMZ no longer exists because we're distributed among several different networks."
  },
  {
    startTime: 3324.58,
    person: 'Karol',
    text: " If you deploy in several clouds, you're basically managing the connections and secure VPNs between several different networks and you have your applications living pretty much everywhere around the world in that sense."
  },
  {
    startTime: 3338.34,
    person: 'Karol',
    text: ' So that changes the expectations of our gateway in a sense.'
  },
  {
    startTime: 3343.64,
    person: 'Karol',
    text: " Of course, we're dropping that to several other things, but that would be it."
  },
  { startTime: 3351.52, person: 'Rachel', text: " Yeah, that's right, Carol." },
  {
    startTime: 3353.84,
    person: 'Rachel',
    text: ' And we always ask ourself, with the current sort of limitations or my current setup in place, can we actually do better?'
  },
  {
    startTime: 3362.26,
    person: 'Rachel',
    text: ' How do I sort of optimise my current setup or how do I sort of get into that federated API management or managing my APIs in a more better, more governed, more secure way?'
  },
  {
    startTime: 3372.88,
    person: 'Rachel',
    text: " And that's where we come in with, you know, if you have to view our management as a sort of like a systematic practise, you need to be sort of like a product-centric approach, right?"
  },
  { startTime: 3383.14, person: 'Rachel', text: ' That means you have that cross visibility.' },
  {
    startTime: 3385.86,
    person: 'Rachel',
    text: " Everyone has to be on the same page of what is it that you're trying to solve?"
  },
  {
    startTime: 3389.52,
    person: 'Rachel',
    text: ' What are you building or where are you getting the data from?'
  },
  { startTime: 3393.52, person: 'Rachel', text: ' Is it from a common repository?' },
  {
    startTime: 3395.5,
    person: 'Rachel',
    text: " And one thing that's always, I feel a bit bad this many times within enterprises, the developer, no one takes into account the experience of the developer, right?"
  },
  {
    startTime: 3405.5,
    person: 'Rachel',
    text: " Because even if it's an API that you expose in your portal, your consumer consuming it is going to be the development team from the other sort of company or your customer."
  },
  {
    startTime: 3415.18,
    person: 'Rachel',
    text: ' So people always sort of put an afterthought to developer experience or rather developer enablement and experience.'
  },
  {
    startTime: 3422.76,
    person: 'Rachel',
    text: ' So how can you actually improve the lives of your developers?'
  },
  {
    startTime: 3425.58,
    person: 'Rachel',
    text: " Is it a process that can make it more streamlined or tell the developers, hey, no matter what you design in your API, I'll make sure that your documentation is automatically updated for you."
  },
  {
    startTime: 3435.9,
    person: 'Rachel',
    text: " So you don't need to sort of manually go and update the portal again."
  },
  {
    startTime: 3439.38,
    person: 'Rachel',
    text: ' So can you give some level of automation, some level of sort of help towards the developer side of things?'
  },
  {
    startTime: 3447.08,
    person: 'Rachel',
    text: " So that's something that I really feel needs to take a bit more importance than what it is today."
  },
  { startTime: 3454.24, person: 'Rachel', text: ' Yeah.' },
  {
    startTime: 3454.94,
    person: 'Rachel',
    text: ' And also in terms of the overall application architecture, I see that we see that teams are sort of geo-distributed working in silos.'
  },
  { startTime: 3463.18, person: 'Rachel', text: ' So that has to slightly change or shift.' },
  {
    startTime: 3466.24,
    person: 'Rachel',
    text: ' People need to start collaborating more, maybe accessing a central repository or a catalogue of your APIs and the data models.'
  },
  {
    startTime: 3474.26,
    person: 'Rachel',
    text: ' And then even when it comes to sort of like a lifecycle management type of things, right?'
  },
  {
    startTime: 3479.3,
    person: 'Rachel',
    text: " Do you have a sort of a predetermined flow of how your API needs to be taken from, let's say, design to deprecation?"
  },
  { startTime: 3486.52, person: 'Rachel', text: ' Is it a well-defined process?' },
  {
    startTime: 3489.68,
    person: 'Rachel',
    text: " Or are teams just sort of going crazy and creating their own rules, which sometimes doesn't work, particularly when you're working on larger organisations, it has to be some type of structure."
  },
  {
    startTime: 3501.14,
    person: 'Rachel',
    text: " And finally, on the compliance side of things, it's good to say that you're, let's say you're compliant."
  },
  {
    startTime: 3507.52,
    person: 'Rachel',
    text: " Hey, all my data is, you know, I'm HIPAA compliant, I'm PCI DSS compliant."
  },
  { startTime: 3512.04, person: 'Rachel', text: ' I encrypt my data, I store it.' },
  {
    startTime: 3514.18,
    person: 'Rachel',
    text: " But end of the day, what I see is, let's say you're a third party is using your data or your functionality."
  },
  {
    startTime: 3521.58,
    person: 'Rachel',
    text: " It's sufficient for the third party to get hacked, for your data to get compromised, right?"
  },
  {
    startTime: 3526,
    person: 'Rachel',
    text: ' Because even the third party using your data, your reputation lies on even the third party integrators.'
  },
  {
    startTime: 3533.1,
    person: 'Rachel',
    text: " So that's something that I see needs to be taken on priority as well."
  },
  {
    startTime: 3538.68,
    person: 'Rachel',
    text: " And also about the data compliance, because it's not just enough that I have a WAF running or I have a couple of security rules that I enforce to my APIs."
  },
  {
    startTime: 3547.1,
    person: 'Rachel',
    text: " But in the last thousand calls, let's say for getTransaction, was it actually compliant against my schema?"
  },
  {
    startTime: 3554.06,
    person: 'Rachel',
    text: " Did my consumers call it with an extra header or a payload that doesn't match my approved schema?"
  },
  {
    startTime: 3560.14,
    person: 'Rachel',
    text: ' Those type of behavioural analytics, as we call it, is that something that enterprises have access to today?'
  },
  { startTime: 3566.48, person: 'Rachel', text: ' The answer is no.' },
  { startTime: 3567.88, person: 'Rachel', text: ' But can they get access to that?' },
  { startTime: 3569.56, person: 'Rachel', text: " It's pretty complicated, right?" },
  {
    startTime: 3571.26,
    person: 'Rachel',
    text: " The data scattered across, I've seen enterprises have DataDog and Splunk and Elastic and Kibana, New Relic."
  },
  {
    startTime: 3580.58,
    person: 'Rachel',
    text: " So in order to stitch that data together, it's going to be a nightmare of a process."
  },
  {
    startTime: 3585.6,
    person: 'Rachel',
    text: ' Even to debug any issue in production, I see teams logging to DataDog, getting the span ID, then going to Grafana, getting the application logs.'
  },
  {
    startTime: 3594.98,
    person: 'Rachel',
    text: " And then there's a whole debate for six to seven hours trying to figure out, hey, which application team built this?"
  },
  { startTime: 3600.38, person: 'Rachel', text: ' This log belongs to which application?' },
  {
    startTime: 3602.76,
    person: 'Rachel',
    text: " And finally, by the time you decide whether it's an application issue or a system issue or a network issue, you've already breached the SLA."
  },
  {
    startTime: 3608.96,
    person: 'Rachel',
    text: " You're entitled to pay, you're liable to pay a fee."
  },
  {
    startTime: 3612.18,
    person: 'Karol',
    text: ' But this is not a problem that we can fix with API managements and federation itself.'
  },
  {
    startTime: 3618.5,
    person: 'Karol',
    text: " It's a problem of observability in addressing proper metadata in communication, which is where API management or API management federation can help because then we can manage the metadata of communication and standardise it."
  },
  {
    startTime: 3635.34,
    person: 'Karol',
    text: " So if our users are using the wrong metadata and sending the wrong, let's say HTTP headers, we can catch that and fix that."
  },
  {
    startTime: 3644.74,
    person: 'Karol',
    text: ' So if a user is not sending, consumer is not sending correlation ID on a layer of an API management, we can generate that correlation ID and push it forward to whoever is having that API behind the proxy so that we can still have that observability, at least from our perspective, our end.'
  },
  { startTime: 3664.54, person: 'Rachel', text: ' Yep.' },
  {
    startTime: 3665.52,
    person: 'Rachel',
    text: ' It has to be centrally accessible, managed, and all the teams have to be in the same page.'
  },
  {
    startTime: 3671.28,
    person: 'Rachel',
    text: " Let's just imagine if you tell an SRE, because one of the biggest problem with SRE teams today is they don't have enough context."
  },
  { startTime: 3679.06, person: 'Rachel', text: ' They have enough tools.' },
  { startTime: 3681.3, person: 'Rachel', text: " There's a surplus of tools." },
  {
    startTime: 3682.6,
    person: 'Rachel',
    text: " They have different ways in which they can access application logs, but they don't have that context that correlates, hey, this log belongs to this application."
  },
  {
    startTime: 3690.84,
    person: 'Rachel',
    text: " The last change that went into this application was this, and it's a conflict change that brought your API down."
  },
  {
    startTime: 3697.16,
    person: 'Rachel',
    text: " So they don't have enough data to correlate which owner owns this particular piece of information or which application generated this log."
  },
  { startTime: 3707.24, person: 'Rachel', text: " That's something that's missing." },
  {
    startTime: 3708.82,
    person: 'Rachel',
    text: ' Just imagine if an SRE could have that initial context information available to him.'
  },
  {
    startTime: 3714.22,
    person: 'Rachel',
    text: " That means we're talking about bringing down sort of like mean time to resolutions from, let's say, a couple of hours all the way down to one or two hours, all the way down from eight hours to two hours."
  },
  {
    startTime: 3726.78,
    person: 'Rachel',
    text: ' That makes a massive difference, even if you shave off a couple of hours.'
  },
  {
    startTime: 3730.9,
    person: 'Rachel',
    text: " So that's something that can only be bought through a systematic change."
  },
  { startTime: 3734.44, person: 'Rachel', text: " That's something that teams have to work on." },
  { startTime: 3737.46, person: 'Karol', text: ' All right.' },
  {
    startTime: 3737.88,
    person: 'Karol',
    text: ' But one thing we missed so far, which is exactly addressing the definition of the topic at hand.'
  },
  {
    startTime: 3745.92,
    person: 'Karol',
    text: ' So then in that case, with all those problems, what then is federated API management?'
  },
  { startTime: 3753.8, person: 'Rachel', text: ' Yes.' },
  {
    startTime: 3754.8,
    person: 'Rachel',
    text: " So federated API management is having that central sort of author who sort of creates those standards, rules, regulations, but you're able to enforce it in a distributed fashion, right?"
  },
  {
    startTime: 3766.26,
    person: 'Rachel',
    text: ' You have different hybrid clouds, as you mentioned.'
  },
  {
    startTime: 3770,
    person: 'Rachel',
    text: " Today, it's pretty common to have a mix of GCP, AWS, and Azure across multiple clouds, multiple environments."
  },
  {
    startTime: 3778.02,
    person: 'Rachel',
    text: " I've seen a lot of banks, they try to keep their core operations as an on-prem within their on-prem set of servers, but something maybe not so critical, like just like a, let's say a record maintenance or a public record display, that's something that they expose on the cloud."
  },
  { startTime: 3795.8, person: 'Rachel', text: " That's fine." },
  {
    startTime: 3796.54,
    person: 'Rachel',
    text: ' But the core fund transfer transactions, processing, those are all held on-prem.'
  },
  {
    startTime: 3802.24,
    person: 'Rachel',
    text: ' So can I manage the rules that govern how I design, build, test, deploy those APIs?'
  },
  {
    startTime: 3807.7,
    person: 'Rachel',
    text: ' Can I centrally sort of disseminate that information to have a central sort of catalogue of visibility?'
  },
  {
    startTime: 3813.62,
    person: 'Rachel',
    text: " At the same time to have the systems sort of standards and protocols that will govern how my teams, no matter where they're located, are able to build, operate, and govern that API."
  },
  {
    startTime: 3824.7,
    person: 'Rachel',
    text: ' So federation deals with the entire process of delegation, decentralised management, at the same time centralised standards and operating procedures.'
  },
  { startTime: 3835.64, person: 'Karol', text: ' Okay.' },
  {
    startTime: 3836.06,
    person: 'Karol',
    text: ' So now contextualising this to tech and looking at your own product, which is API Wiz.'
  },
  {
    startTime: 3843.22,
    person: 'Karol',
    text: " So if we're talking about federated API management, in that case, if we place API Wiz, correct me if I don't understand it correctly, but let me try and contextualise this."
  },
  {
    startTime: 3856.98,
    person: 'Karol',
    text: ' So in that sense, API Wiz serves as the management layer without the gateway itself to manage,'
  },
  {
    startTime: 3864.8,
    person: 'Karol',
    text: ' to connect and manage other API gateways and be able to reconfigure them and manage them'
  },
  {
    startTime: 3873.18,
    person: 'Karol',
    text: ' centrally so that we can, for example, move away one API definition and API proxy from one gateway'
  },
  {
    startTime: 3880.32,
    person: 'Karol',
    text: ' and move it to another, or to set up policies from a single plane of control rather than having'
  },
  {
    startTime: 3889.74,
    person: 'Karol',
    text: ' to go to each separate gateway in our organisation.'
  },
  { startTime: 3893.38, person: 'Karol', text: ' Do I catch it correctly then?' },
  { startTime: 3895.44, person: 'Rachel', text: ' Yeah.' },
  {
    startTime: 3896.08,
    person: 'Rachel',
    text: ' So API Wiz has connectors and integrations to every data plane you can imagine, like all your Apigee, Kong, or any other gateway.'
  },
  {
    startTime: 3904.28,
    person: 'Rachel',
    text: ' But at the same time, we make sure that you can keep your data plane fluid.'
  },
  {
    startTime: 3908.66,
    person: 'Rachel',
    text: " So whether you're using Apigee today or Kong tomorrow, it doesn't matter to us."
  },
  {
    startTime: 3912.08,
    person: 'Rachel',
    text: " The way in which you design, the way in which you build, test, deploy, observe, monetise, that stays consistent irrespective of which data plane you're using today."
  },
  {
    startTime: 3921.38,
    person: 'Rachel',
    text: ' Because pretty much these have become a commodity today, right?'
  },
  {
    startTime: 3924.2,
    person: 'Rachel',
    text: " Due to cost or performance reasons, it's not uncommon for an enterprise to say, hey, Apigee is too expensive, let's move to Kong."
  },
  {
    startTime: 3932.58,
    person: 'Rachel',
    text: " Or let's say, Kong's not working out, let's take up Tyke."
  },
  {
    startTime: 3935.66,
    person: 'Rachel',
    text: ' So these decisions happen on the fly, pretty common within enterprises, right?'
  },
  {
    startTime: 3940.02,
    person: 'Rachel',
    text: ' But what happens to all the effort that developers did?'
  },
  {
    startTime: 3942.2,
    person: 'Rachel',
    text: ' They spent several hours, several months, sort of configuring Apigee.'
  },
  {
    startTime: 3945.96,
    person: 'Rachel',
    text: " They tied down their API management practises to a data plane, which is, we feel that it's wrong, right?"
  },
  {
    startTime: 3952.24,
    person: 'Rachel',
    text: ' Need to sort of, I would say, decouple your API strategy from your gateway, right?'
  },
  { startTime: 3957.62, person: 'Rachel', text: ' The gateway is purely a runtime component.' },
  {
    startTime: 3960.02,
    person: 'Rachel',
    text: " So it's great testing your APIs and running your proxies, but never tightly couple your API strategy to the gateway, right?"
  },
  {
    startTime: 3967.36,
    person: 'Rachel',
    text: ' Never couple your business logic, never couple your API strategy on the data plane.'
  },
  {
    startTime: 3971.88,
    person: 'Rachel',
    text: " That can change anytime, and it's going to harm you in the long run."
  },
  { startTime: 3975.62, person: 'Rachel', text: " So that's what I would summarise." },
  { startTime: 3978.36, person: 'Karol', text: ' Okay.' },
  {
    startTime: 3979.02,
    person: 'Karol',
    text: ' So basically, if somebody would want to start federating API management, they basically would need to create a centralised control plane from which they could actually govern all those various API gateways and be able to move their definitions of proxies throughout their ecosystem of those products.'
  },
  {
    startTime: 4003.46,
    person: 'Karol',
    text: ' And then decommission whole data planes at hand from a specific vendor in favour of another, et cetera, et cetera, et cetera.'
  },
  {
    startTime: 4011.96,
    person: 'Karol',
    text: ' So be able to reconfigure on the fly with all the definitions held centrally, managed centrally, and then deployed as implementations for specific gateways in a standardised manner.'
  },
  { startTime: 4025.76, person: 'Rachel', text: ' Correct.' },
  {
    startTime: 4026.16,
    person: 'Rachel',
    text: " You don't need to reconfigure your APIs every time it's changing from one data plane to another, because the artefacts are already centrally stored on the control plane."
  },
  { startTime: 4034.58, person: 'Rachel', text: " So you don't need to change the process." },
  {
    startTime: 4036.64,
    person: 'Rachel',
    text: ' You just need to change a connector to your API gateway.'
  },
  { startTime: 4039.66, person: 'Rachel', text: " That's it." },
  {
    startTime: 4040.76,
    person: 'Karol',
    text: ' Which is not a very common thing with API management tools, that they have that.'
  },
  {
    startTime: 4045.1,
    person: 'Karol',
    text: ' Of course, they have that within the scope of their own tools, so that if you have multiple gateways of a single vendor, you do have that control plane to those gateways, but not every time to other gateways.'
  },
  {
    startTime: 4059.02,
    person: 'Karol',
    text: " I've seen already some API managements that have API gateways actually do that federation so that they connect to other API gateways to manage them as well."
  },
  {
    startTime: 4068.8,
    person: 'Karol',
    text: " But I've never seen that on a scale of every possible solution ever, only of just a few, the most common ones, but that's just an add-on functionality to that product rather than the product itself."
  },
  { startTime: 4082.22, person: 'Rachel', text: ' Correct.' },
  { startTime: 4083.76, person: 'Karol', text: ' All right.' },
  { startTime: 4084.5, person: 'Karol', text: ' All right.' },
  { startTime: 4086.38, person: 'Karol', text: " That's interesting." },
  {
    startTime: 4090,
    person: 'Karol',
    text: ' I think for a lot of people, that would be a new topic to look at it this way, to decouple, well, not decouple, but loosen the coupling between the control plane and the actual implementation of a gateway.'
  },
  {
    startTime: 4104.899,
    person: 'Karol',
    text: " I don't think that's common yet, but given the distribution of our"
  },
  {
    startTime: 4111.2,
    person: 'Karol',
    text: ' systems, applications, and how we deploy everywhere based on what is the expertise of a team or what'
  },
  {
    startTime: 4119.38,
    person: 'Karol',
    text: " is the current need, I think that's going to be more and more of a common use case in the"
  },
  {
    startTime: 4125.22,
    person: 'Karol',
    text: ' coming years, especially now with further sprawl of APIs around agentic AI, et cetera,'
  },
  {
    startTime: 4133.68,
    person: 'Karol',
    text: " that's going to create even more chaos that would have to be centrally managed."
  },
  { startTime: 4139.12, person: 'Karol', text: " That's right." },
  {
    startTime: 4140.3,
    person: 'Rachel',
    text: " There's going to be a lot more burst in the number of not just the volume of data, but also today I see pretty much startups being created overnight, right?"
  },
  { startTime: 4149.7, person: 'Rachel', text: ' On the fly.' },
  {
    startTime: 4150.74,
    person: 'Rachel',
    text: ' The new AI has made it possible to generate a website in seconds, build functionality in a matter of seconds.'
  },
  {
    startTime: 4157.859,
    person: 'Rachel',
    text: " So that's something that I see it's going to propagate a lot more in the coming years."
  },
  { startTime: 4162.56, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 4163.16,
    person: 'Karol',
    text: " That's definitely a game changer in terms of speed of creation and then also dying of these kinds of companies and SaaS solutions that they just pop up, several of them, then they die off and they pop up again."
  },
  {
    startTime: 4178.52,
    person: 'Karol',
    text: " And it's just an ongoing cycle that's sped up drastically."
  },
  {
    startTime: 4184.3,
    person: 'Karol',
    text: " Normally it took a few years for one company to establish and then to vanish if it doesn't come to fruition."
  },
  {
    startTime: 4192.46,
    person: 'Karol',
    text: " But now it's just like they pop up and they just die, right?"
  },
  {
    startTime: 4197.08,
    person: 'Karol',
    text: " So it's a lot faster feedback loop in that sense, but that requires better tools to control those APIs."
  },
  {
    startTime: 4206.9,
    person: 'Karol',
    text: " All right, Adeeb, I know in that sense you're quite busy, so we're going to have to cut short."
  },
  {
    startTime: 4214.56,
    person: 'Karol',
    text: " I know you have other things planned for tonight and that's what it is."
  },
  {
    startTime: 4219.58,
    person: 'Karol',
    text: " That's a life of a CTO, I suppose, being busy, busy, busy."
  },
  {
    startTime: 4224.24,
    person: 'Karol',
    text: " So summing up, we've talked about what an API management is."
  },
  {
    startTime: 4230.74,
    person: 'Karol',
    text: ' We talked about what are the different components and what are different governance issues, the knowledge divide, governance divide, and the sprawl.'
  },
  {
    startTime: 4240.1,
    person: 'Karol',
    text: ' Most of this being the organisational issues rather than technical issues, but we can actually use pieces of technology like API Waze to help us at least try and govern things and standardise them and bring our API maturity to a manageable level.'
  },
  {
    startTime: 4260.54,
    person: 'Karol',
    text: ' But that comes always with an organisational change.'
  },
  {
    startTime: 4263.64,
    person: 'Karol',
    text: ' Without that organisational change, no tool will help in that sense.'
  },
  {
    startTime: 4268.38,
    person: 'Karol',
    text: " All right, given that, I'll switch for a second to a different slide set."
  },
  {
    startTime: 4273.5,
    person: 'Karol',
    text: " So if you're new here, please go read more about what we're doing at Bridging the Gap and the articles we do on application integration topics at Bridging the Gap."
  },
  {
    startTime: 4284.68,
    person: 'Karol',
    text: " You can follow us on Substack as well and subscribe to the YouTube channel if you haven't done so before."
  },
  {
    startTime: 4296.54,
    person: 'Karol',
    text: ' And the next live stream over is understanding cognitive flow.'
  },
  {
    startTime: 4301.28,
    person: 'Karol',
    text: " So we're jumping back to psychology a little bit and psychology within different IT teams and whatnot."
  },
  {
    startTime: 4311.96,
    person: 'Karol',
    text: " This is going to be quite a challenging and interesting topic because not a lot of us actually understand psychology in IT and that's going to be a fun conversation."
  },
  {
    startTime: 4324.98,
    person: 'Karol',
    text: ' We already talked about this some time ago on the live stream.'
  },
  {
    startTime: 4327.78,
    person: 'Karol',
    text: " We're now diving deeper into more of an indicator understanding that cognitive load."
  },
  { startTime: 4334.2, person: 'Karol', text: " So that's next week, next Wednesday." },
  {
    startTime: 4336.72,
    person: 'Karol',
    text: ' Feel free to join on that call, that live stream.'
  },
  { startTime: 4341.62, person: 'Karol', text: " And that said, we'll be closing our stream." },
  {
    startTime: 4345.08,
    person: 'Karol',
    text: ' So Adeep, thank you so much for joining today and explaining the lovely topic of federated API management.'
  },
  {
    startTime: 4352.94,
    person: 'Karol',
    text: ' I think that was a very, very condescending pill of knowledge there.'
  },
  {
    startTime: 4359.96,
    person: 'Karol',
    text: ' Because, well, we could probably talk for an hour more, but time is time.'
  },
  { startTime: 4365.5, person: 'Karol', text: ' So thank you for joining.' },
  { startTime: 4367.06, person: 'Rachel', text: ' Thank you for having me.' },
  { startTime: 4368.68, person: 'Karol', text: ' It was really cool to have you here.' },
  {
    startTime: 4371.26,
    person: 'Karol',
    text: " And hopefully we'll pop on another live stream someday, talk some more about federation of API management and how we can do that in a little bit more detail and showcase some more live examples of API federation and different cases that you might have stumbled upon with customers."
  },
  {
    startTime: 4391.66,
    person: 'Karol',
    text: ' That would be also a very cool thing to see someday.'
  },
  { startTime: 4395.68, person: 'Rachel', text: ' Sure.' },
  { startTime: 4396.12, person: 'Rachel', text: ' Look forward to that.' },
  { startTime: 4397.3, person: 'Karol', text: ' All right.' },
  { startTime: 4397.9, person: 'Karol', text: ' That said, thank you all for your attention.' },
  { startTime: 4400.14, person: 'Karol', text: ' Thank you all for being with us.' },
  {
    startTime: 4401.7,
    person: 'Karol',
    text: " For those who haven't been with us live, I hope you liked the recording and see you some other time."
  }
])
</script>

<style scoped></style>
