<template>
  <div class="w-full">
    <StreamLayout
      :transcript="transcript"
      name="Loosely Coupled - Adopting Event-Driven Architecture"
      video-id="DqBJnNKcL44"
    />
  </div>
</template>

<script lang="ts" setup>
const transcript = ref([
  {
    startTime: 176.058,
    person: 'Karol',
    text: ' Hello, hello, good evening, good afternoon, good morning, or well, maybe good night for some people watching in India, if anybody is in India.'
  },
  {
    startTime: 186.018,
    person: 'Karol',
    text: ' Welcome to loosely coupled, our first live stream from Bridging The Gap.'
  },
  {
    startTime: 191.938,
    person: 'Karol',
    text: " I'm your host Karol Skrzymowski, I'm the co-founder of Bridging The Gap, an open source project aiming at educating about enterprise application integration."
  },
  {
    startTime: 204.438,
    person: 'Karol',
    text: ' And with this stream, I want to bring some interesting topics loosely coupled with the field of application integration, and very loosely coupled with technical topics.'
  },
  {
    startTime: 222.228,
    person: 'Karol',
    text: " Now I made a mistake of having too many windows open, so I'm actually hearing myself all over the place."
  },
  { startTime: 229.648, person: 'Karol', text: ' All right.' },
  { startTime: 231.548, person: 'Karol', text: ' A little bit of housekeeping.' },
  { startTime: 233.288, person: 'Karol', text: " We're live on YouTube." },
  { startTime: 234.248, person: 'Karol', text: " We're live on LinkedIn." },
  {
    startTime: 236.748,
    person: 'Karol',
    text: ' Please keep the comments and questions and everything coming.'
  },
  {
    startTime: 240.588,
    person: 'Karol',
    text: " If something will be relevant for the topic, we'll be showing that on stream and asking that directly."
  },
  {
    startTime: 247.728,
    person: 'Karol',
    text: ' If not, we will still have some time at the end for a Q&A.'
  },
  {
    startTime: 252.568,
    person: 'Karol',
    text: ' And with that, let me welcome our first guest to this lovely live stream.'
  },
  { startTime: 257.888, person: 'Karol', text: ' First edition, Fran Mendez.' },
  { startTime: 263.858, person: 'Karol', text: ' Hello, Fran.' },
  { startTime: 265.558, person: 'Fran', text: ' Hello.' },
  { startTime: 268.968, person: 'Karol', text: ' Well, how is your evening so far in Spain?' },
  { startTime: 273.388, person: 'Fran', text: ' Packed and hot.' },
  {
    startTime: 276.908,
    person: 'Fran',
    text: " As you can imagine, I'm in the south, I'm in Balakot next to Portugal."
  },
  {
    startTime: 281.448,
    person: 'Fran',
    text: ' And, you know, we have a saying here that 35 degrees Celsius is getting cold, you know.'
  },
  { startTime: 291.528, person: 'Fran', text: " So, yeah, it's not getting cold." },
  { startTime: 299.368, person: 'Karol', text: " It's quite toasty in the Netherlands as well." },
  {
    startTime: 302.048,
    person: 'Karol',
    text: ' The morning was cloudy and a little bit chilly, but the afternoon is quite, quite, quite warm.'
  },
  { startTime: 309.668, person: 'Karol', text: ' So, very nice indeed.' },
  { startTime: 312.208, person: 'Karol', text: ' All right.' },
  {
    startTime: 313.108,
    person: 'Karol',
    text: " We're having a lovely topic today related to enterprise application integration and software architecture as it is."
  },
  { startTime: 320.548, person: 'Karol', text: " We're talking about event-driven architecture." },
  {
    startTime: 322.988,
    person: 'Karol',
    text: ' And who better to talk about event-driven architecture than the creator of AsyncAPI himself?'
  },
  {
    startTime: 330.688,
    person: 'Karol',
    text: ' So, Fran, tell us a little bit first about AsyncAPI and your context and your background here.'
  },
  {
    startTime: 338.368,
    person: 'Karol',
    text: " So, for the people who don't know you, who only heard about AsyncAPI from, let's say, when they used MuleSoft or Solace or any other technology, so they have the proper context of who you are and what the hell is AsyncAPI and why did you even create that?"
  },
  { startTime: 357.748, person: 'Fran', text: " Oh, that's a lot." },
  { startTime: 359.168, person: 'Fran', text: ' Yeah.' },
  { startTime: 359.608, person: 'Fran', text: ' I can own the whole live stream just with that.' },
  { startTime: 363.668, person: 'Fran', text: " Let's keep that part brief." },
  { startTime: 365.908, person: 'Fran', text: ' So, yeah, my name is Fran Mendez.' },
  { startTime: 368.548, person: 'Fran', text: ' I live in Spain, as mentioned.' },
  { startTime: 374.768, person: 'Fran', text: " I don't even know how to categorise myself." },
  {
    startTime: 377.368,
    person: 'Fran',
    text: " Like, I've been a director of engineering in my last position, but before I was a manager, but before I was an architect, but before I was a CTO."
  },
  { startTime: 387.768, person: 'Fran', text: " So, I've been, like, jumping from role to role." },
  {
    startTime: 394.228,
    person: 'Fran',
    text: " And I keep saying that I'm just an engineer, and I do whatever it's needed to do, and I'm always adapting to whatever it's needed in each situation."
  },
  {
    startTime: 407.648,
    person: 'Fran',
    text: " So, I don't like to label myself as one thing, for the good, for the bad."
  },
  {
    startTime: 415.808,
    person: 'Fran',
    text: ' And, yeah, so, I created AsyncAPI, as Carole mentioned.'
  },
  { startTime: 420.728, person: 'Fran', text: ' So, this was almost nine years ago.' },
  {
    startTime: 426.268,
    person: 'Fran',
    text: ' And the reason I created AsyncAPI, it was just for me.'
  },
  {
    startTime: 431.828,
    person: 'Fran',
    text: ' It might sound egocentric looking back or explaining it like this.'
  },
  {
    startTime: 437.828,
    person: 'Fran',
    text: " But the reality is that I wasn't expecting this kind of success."
  },
  { startTime: 441.928, person: 'Fran', text: ' I was just building it for me for two reasons.' },
  { startTime: 447.968, person: 'Fran', text: ' One of them is I wanted to learn OpenAPI well.' },
  { startTime: 453.328, person: 'Fran', text: ' So, I had to create AsyncAPI.' },
  {
    startTime: 455.948,
    person: 'Fran',
    text: " I had to go from top to bottom of OpenAPI specification and read it and change whatever didn't make sense to me."
  },
  { startTime: 464.368, person: 'Fran', text: " Didn't make sense for my use case." },
  { startTime: 467.108, person: 'Fran', text: ' And what was my use case?' },
  { startTime: 468.388, person: 'Fran', text: " That's the second reason." },
  {
    startTime: 469.188,
    person: 'Fran',
    text: ' My use case was I was using RabbitMQ to coordinate some microservices and, you know, and communicate between them and so on.'
  },
  { startTime: 479.808, person: 'Fran', text: ' I was building an event-driven architecture.' },
  { startTime: 483.288, person: 'Fran', text: ' And there was nothing like OpenAPI for that.' },
  { startTime: 487.008, person: 'Fran', text: ' So, I decided to go ahead and modify OpenAPI.' },
  { startTime: 490.668, person: 'Fran', text: ' In the beginning, it was mostly me.' },
  {
    startTime: 493.408,
    person: 'Fran',
    text: ' Like, okay, maybe when it says GET, the documentation generator can say SUBSCRIBE.'
  },
  {
    startTime: 500.848,
    person: 'speaker 1',
    text: ' And when it says POST or something else, it can say PUBLISH.'
  },
  { startTime: 505.188, person: 'Fran', text: ' And that might do the trick.' },
  {
    startTime: 508.108,
    person: 'Fran',
    text: ' Well, for documentation, it kind of did the trick.'
  },
  { startTime: 511.047, person: 'Fran', text: ' For code generation, not so much.' },
  { startTime: 512.948, person: 'Fran', text: ' It felt a lot like a hack.' },
  { startTime: 514.427, person: 'Fran', text: ' It was a hack.' },
  { startTime: 517.307, person: 'Fran', text: ' So, yeah.' },
  {
    startTime: 517.807,
    person: 'Fran',
    text: " And then that's when I realised I had to go through the whole thing and change it."
  },
  {
    startTime: 524.508,
    person: 'Fran',
    text: " And it was all done in open source because that's always my default."
  },
  { startTime: 530.508, person: 'Fran', text: ' So, I was not...' },
  {
    startTime: 532.388,
    person: 'Fran',
    text: ' I already had, like, a bunch of other open source projects, but they never took off.'
  },
  {
    startTime: 538.628,
    person: 'Fran',
    text: ' And this one started taking off because, you know, I started talking about it in conferences.'
  },
  { startTime: 544.788, person: 'Fran', text: ' And I saw some interest from people and so on.' },
  { startTime: 549.428, person: 'Fran', text: " And it started to show some traction, let's say." },
  { startTime: 554.448, person: 'Fran', text: ' So, I created Slack and so on.' },
  { startTime: 557.408, person: 'Fran', text: ' And started inviting people there.' },
  {
    startTime: 559.568,
    person: 'Fran',
    text: ' In the beginning, it was me mainly talking to the wall, as we say in Spanish.'
  },
  { startTime: 563.708, person: 'Fran', text: ' So, I was just like, hey, so today I did this.' },
  { startTime: 566.068, person: 'Fran', text: ' And today I added that.' },
  {
    startTime: 567.608,
    person: 'Fran',
    text: ' And the funny thing is that the other people on the Slack was the people from my own company, from the company I was working on.'
  },
  { startTime: 575.088, person: 'Fran', text: ' And they already knew that.' },
  { startTime: 576.868, person: 'Fran', text: " And they were like, hey, we don't care, Fran." },
  { startTime: 579.268, person: 'Fran', text: ' We already know.' },
  { startTime: 580.308, person: 'Fran', text: ' So, they were not interacting with me.' },
  {
    startTime: 583.108,
    person: 'Fran',
    text: ' And that was funny and desparating at the same time.'
  },
  {
    startTime: 585.968,
    person: 'Fran',
    text: ' But eventually people start getting in and asking and so on.'
  },
  { startTime: 591.948, person: 'Fran', text: ' So, yeah.' },
  { startTime: 593.048, person: 'Fran', text: ' So, that was...' },
  { startTime: 593.968, person: 'Fran', text: ' And here we are.' },
  { startTime: 595.428, person: 'Karol', text: ' Here we are.' },
  {
    startTime: 596.148,
    person: 'Karol',
    text: ' And now I had a look through the AsyncAPI Slack.'
  },
  { startTime: 602.428, person: 'Karol', text: " Wow, that's a busy place." },
  { startTime: 605.528, person: 'Karol', text: ' I get so many messages.' },
  {
    startTime: 607.788,
    person: 'Karol',
    text: ' There are so many pull requests going through the channel.'
  },
  {
    startTime: 613.628,
    person: 'Karol',
    text: ' So many conversations happening around various topics.'
  },
  { startTime: 618.648, person: 'Karol', text: " It's crazy." },
  {
    startTime: 620.768,
    person: 'Karol',
    text: ' And so many people participating also with the AsyncAPI conf and all that.'
  },
  {
    startTime: 627.188,
    person: 'Karol',
    text: ' And I already saw a few streams online of the community.'
  },
  { startTime: 632.168, person: 'Karol', text: " It's interesting how that can grow." },
  {
    startTime: 634.488,
    person: 'Fran',
    text: ' Yeah, this is something I would love to highlight is we do everything in the open.'
  },
  { startTime: 641.388, person: 'Fran', text: ' So, we aim for total transparency.' },
  { startTime: 643.848, person: 'Fran', text: ' Not as a way to...' },
  { startTime: 647.848, person: 'Fran', text: ' Not as a way to show off or something like that.' },
  {
    startTime: 652.148,
    person: 'Fran',
    text: ' Or to justify our behaviour or something like that.'
  },
  {
    startTime: 658.248,
    person: 'Fran',
    text: ' Because we believe in transparency, in radical transparency.'
  },
  { startTime: 662.228, person: 'Fran', text: ' So, we try to do everything in the open.' },
  { startTime: 667.568, person: 'Fran', text: ' We are conscious.' },
  {
    startTime: 668.968,
    person: 'Fran',
    text: " We are aware that just because you make everything in the open, it's not necessarily transparent."
  },
  { startTime: 675.008, person: 'Fran', text: ' You need to publicise it.' },
  {
    startTime: 677.668,
    person: 'Fran',
    text: ' You need to advertise it so people know where this information is and how to consume it and so on.'
  },
  {
    startTime: 683.628,
    person: 'Fran',
    text: ' We try to do it, but as you said, we generate a lot of content that is almost impossible for us to promote all the content we create.'
  },
  {
    startTime: 691.888,
    person: 'Fran',
    text: ' All these live streams, all these meetings and so on.'
  },
  { startTime: 696.528, person: 'Fran', text: ' So, meetings are not recorded.' },
  { startTime: 700.568, person: 'Fran', text: ' They are live streamed.' },
  { startTime: 701.988, person: 'Fran', text: ' Always.' },
  { startTime: 702.688, person: 'Fran', text: ' All the meetings.' },
  {
    startTime: 703.988,
    person: 'Fran',
    text: " Unless there's something like code of contact stuff that is obviously handled separately for privacy reasons."
  },
  { startTime: 712.368, person: 'Fran', text: ' But other than that, everything is open.' },
  { startTime: 715.148, person: 'Fran', text: ' Everything is live streamed.' },
  {
    startTime: 717.508,
    person: 'Fran',
    text: " And that's really cool because when someone wants to land on the community, the only thing they have to do, the only thing, is to start watching these live streams."
  },
  { startTime: 729.108, person: 'Fran', text: ' Start joining these meetings if they can.' },
  { startTime: 731.068, person: 'Fran', text: ' If not, they can watch the recording.' },
  {
    startTime: 733.288,
    person: 'Fran',
    text: ' Following these certain issues on their favourite repo and so on.'
  },
  { startTime: 737.028, person: 'Fran', text: " And it's really..." },
  { startTime: 739.208, person: 'Fran', text: " And it's easier, I would say, to get on board." },
  { startTime: 743.108, person: 'Fran', text: " It's not easy." },
  { startTime: 744.628, person: 'Fran', text: " It's easier." },
  { startTime: 745.628, person: 'Fran', text: " It's not easy, though." },
  { startTime: 747.228, person: 'Fran', text: " Because, as you said, it's huge." },
  { startTime: 749.508, person: 'Fran', text: ' It became a huge project with lots of people.' },
  { startTime: 752.428, person: 'Fran', text: ' So, filtering in the noise is always difficult.' },
  { startTime: 756.748, person: 'Karol', text: ' Okay.' },
  {
    startTime: 757.588,
    person: 'Karol',
    text: ' But we met today to talk about even-driven architecture.'
  },
  { startTime: 762.448, person: 'Karol', text: ' An adoption of said even-driven architecture.' },
  {
    startTime: 765.588,
    person: 'Karol',
    text: ' Now, the key question I have is, how would you define even-driven architecture?'
  },
  {
    startTime: 772.448,
    person: 'Karol',
    text: " Because I'm pretty certain that from your perspective, the definition's a little bit different than from my perspective."
  },
  { startTime: 780.108, person: 'Fran', text: ' Okay.' },
  {
    startTime: 780.788,
    person: 'Fran',
    text: ' So, I mean, in general terms, I would say, I want to make a...'
  },
  { startTime: 790.808, person: 'Fran', text: ' I want to clarify something here.' },
  {
    startTime: 792.468,
    person: 'Fran',
    text: ' So, we often talk about even-driven architecture.'
  },
  {
    startTime: 797.068,
    person: 'Fran',
    text: ' All of us, including myself, when we mean message-driven architecture, right?'
  },
  { startTime: 804.328, person: 'Fran', text: " What's the difference?" },
  {
    startTime: 805.428,
    person: 'Fran',
    text: " So, to me, I don't think it's only to me, but the difference is in the meaning of the message, right?"
  },
  { startTime: 814.168, person: 'Fran', text: ' So, message is like the broad concept.' },
  {
    startTime: 820.668,
    person: 'Fran',
    text: " There's a piece of data flowing, usually through a broker, from producers to consumers, and so on, right?"
  },
  {
    startTime: 827.128,
    person: 'Fran',
    text: ' But to me, even-driven architecture is when you work with events, with facts that happened, right?'
  },
  { startTime: 833.828, person: 'Fran', text: " That's it." },
  {
    startTime: 834.508,
    person: 'Fran',
    text: ' Like, you send events to a broker and consume them from other consumers, and so on.'
  },
  { startTime: 841.288, person: 'Fran', text: ' For which purpose?' },
  { startTime: 844.008, person: 'Fran', text: " That's not defining the term to me." },
  { startTime: 845.988, person: 'Fran', text: " That's something that's kept open, right?" },
  { startTime: 849.488, person: 'Fran', text: ' So, I just live there.' },
  { startTime: 851.948, person: 'Fran', text: ' Even-driven architecture is something that is...' },
  {
    startTime: 855.788,
    person: 'Fran',
    text: " It's a kind of architecture that usually relies on a broker and where you exchange events as facts, let's say, right?"
  },
  {
    startTime: 863.948,
    person: 'Fran',
    text: " But some people, as I said, like, some people also, including myself sometimes, because it's useful to talk about EBA all the time, if you send an action, a command, and expect a response over a broker, which is also possible, we sometimes also talk about these things as even-driven architecture."
  },
  { startTime: 888.268, person: 'Fran', text: " When it's not, it's not an event, right?" },
  { startTime: 890.568, person: 'Fran', text: " It's a command." },
  { startTime: 891.168, person: 'Fran', text: " But that's a different discussion, let's say." },
  { startTime: 894.988, person: 'Fran', text: " So, that's what I live at usually." },
  {
    startTime: 897.288,
    person: 'Fran',
    text: ' This can be just to communicate microservices in your team, your domain, or something, or it can be as a means to integrate, to build integrations inside your company, or with partners, or with public, you know, with the public audience.'
  },
  { startTime: 913.608, person: 'Fran', text: ' That depends on your business.' },
  { startTime: 915.708, person: 'Fran', text: ' For instance, robotics.' },
  { startTime: 916.948, person: 'Fran', text: ' We see a lot of this in robotics with MQTT.' },
  {
    startTime: 920.368,
    person: 'Fran',
    text: ' They offer their OpenAPI as an I think you pay file defining an MQTT API, right?'
  },
  { startTime: 931.388, person: 'Fran', text: ' So, and anyone can consume it, right?' },
  { startTime: 933.968, person: 'Fran', text: ' Anyone, you only have to apply for a token.' },
  {
    startTime: 937.648,
    person: 'Fran',
    text: " And that's it as a token that it's going to be prepared to your MQTT topics and so on."
  },
  {
    startTime: 944.848,
    person: 'Fran',
    text: " So, it's effectively like the counterpart, or let's say the sister of a public REST API, but using MQTT in this case, right?"
  },
  {
    startTime: 958.328,
    person: 'Fran',
    text: ' So, yeah, there are many usages of event-driven architecture.'
  },
  {
    startTime: 963.188,
    person: 'Fran',
    text: ' There is a talk that we have it on the Cinque Bay website on the documentation.'
  },
  { startTime: 971.388, person: 'Fran', text: " It's linked there from Martin Fowler." },
  {
    startTime: 976.068,
    person: 'Fran',
    text: ' And the talk is titled, the many meanings of event-driven architecture.'
  },
  {
    startTime: 982.528,
    person: 'Fran',
    text: ' And I think that perfectly illustrates what I mean, this talk.'
  },
  {
    startTime: 990.408,
    person: 'Fran',
    text: " So, if you go to the website, and you go to the documentation, if not the first page, one of the first pages, I'm sorry because I don't follow closely the docs anymore."
  },
  { startTime: 1005.628, person: 'Fran', text: " It's too much." },
  { startTime: 1007.148, person: 'Fran', text: " It's fine." },
  {
    startTime: 1010.428,
    person: 'Karol',
    text: " But I'm sure we can find it later and put it in the description of the recordings for people to find."
  },
  { startTime: 1017.508, person: 'Karol', text: " That's going to be fine." },
  {
    startTime: 1020.288,
    person: 'Karol',
    text: ' See, one of the highlights I have in terms of event-driven architecture, I have two perspectives on that.'
  },
  {
    startTime: 1028.468,
    person: 'Karol',
    text: ' First one is the interoperability and the way we design communication within the system, which, for example, like microservices, microservices go well with event-driven and choreography and all that, right?'
  },
  {
    startTime: 1043.367,
    person: 'Karol',
    text: " Which is usually not of my concern because I don't design domain systems."
  },
  {
    startTime: 1049.228,
    person: 'Karol',
    text: ' I look always on an ecosystem level, so the communication and interactions between various systems.'
  },
  {
    startTime: 1055.908,
    person: 'Karol',
    text: ' And there, event-driven architecture has a lot to do, but it differs slightly in certain areas, like, for example, do we use data-based contracts or key-based contracts?'
  },
  {
    startTime: 1074.868,
    person: 'Karol',
    text: " So like anaemic events, usually in business systems, key-based contracts would be quite normal, while in ecosystems, they're actually more of a considered as an anti-pattern."
  },
  {
    startTime: 1091.308,
    person: 'Karol',
    text: ' So there are these kind of small discrepancies of what would be acceptable on the level of a system using EDA and what would be acceptable on the level of an ecosystem using EDA.'
  },
  {
    startTime: 1102.368,
    person: 'Karol',
    text: ' Then also the differences are like the sets of patterns sometimes differ or what is the database topology.'
  },
  {
    startTime: 1114.118,
    person: 'Karol',
    text: ' So we usually work with completely distributed separate databases, separate sets of models, data, everything separated.'
  },
  { startTime: 1126.618, person: 'Karol', text: " So that's my kind of take on EDA." },
  {
    startTime: 1129.838,
    person: 'Karol',
    text: ' For me, these are just two types which drive my conversations in enterprise application integration at least.'
  },
  { startTime: 1141.118, person: 'Fran', text: ' I would say even more than two types.' },
  {
    startTime: 1143.898,
    person: 'Fran',
    text: " It's like inside a certain domain, a domain understood as a domain-driven design."
  },
  {
    startTime: 1150.838,
    person: 'Fran',
    text: " It's inside a single domain to coordinate stuff in between a domain."
  },
  {
    startTime: 1157.858,
    person: 'Fran',
    text: ' Sometimes you have services or microservices inside the same domain and they need to coordinate for whatever reason.'
  },
  {
    startTime: 1163.798,
    person: 'Fran',
    text: ' Usually these events are not useful for anyone other than these people in this domain.'
  },
  {
    startTime: 1170.098,
    person: 'Fran',
    text: " But then you have cross-domain that starts behaving as integration as well, but inside the company, inside the organisation, doesn't have to be a company."
  },
  { startTime: 1186.858, person: 'Fran', text: ' But then you have cross-organisation.' },
  {
    startTime: 1188.718,
    person: 'Fran',
    text: ' Cross-organisations in plural, and you have partners, integrations, and so on, or public.'
  },
  { startTime: 1196.058, person: 'Fran', text: ' So the scope can go well beyond my truth.' },
  {
    startTime: 1198.718,
    person: 'Karol',
    text: " The funny thing is, because I've been sitting recently with a lot of domain-driven design people and discussing the overlaps of domain-driven design and interoperability topics, and the most amazing thing is that actually if you look at it from the perspective of domains, a domain can span across several systems."
  },
  {
    startTime: 1219.478,
    person: 'Karol',
    text: ' And a specific system may represent within itself several domains.'
  },
  {
    startTime: 1224.838,
    person: 'Karol',
    text: ' So those overlays we can draw over those system boundaries and different block diagrams are quite elaborate at times, depending on how the company was built, how much design went up front into those systems.'
  },
  {
    startTime: 1246.658,
    person: 'Karol',
    text: ' And then the world of cloud comes in and with SaaS solutions, everything is wrecked all over again because obviously SaaS solutions have a completely different philosophy and they again represent multiple domains.'
  },
  {
    startTime: 1262.388,
    person: 'Karol',
    text: " And it's over a layer, on a layer, on a layer, depending how we want to approach those layers, but there's so much to it to walk around."
  },
  {
    startTime: 1273.368,
    person: 'Karol',
    text: " And with that so much, I think there's a level of hidden chaos in all ecosystems."
  },
  {
    startTime: 1285.948,
    person: 'Karol',
    text: ' I mean, entropy creeps in everywhere, so I would guess sooner or later everybody will experience chaos somewhere.'
  },
  {
    startTime: 1293.448,
    person: 'Karol',
    text: ' But in terms of even-driven architecture, I think one of the biggest challenges of a hidden chaos might be the overall lack of standards in a lot of companies or a lot of organisations.'
  },
  {
    startTime: 1308.328,
    person: 'Karol',
    text: ' While we have very robust standards for synchronous communication, I think not a lot of companies actually know how to standardise async.'
  },
  { startTime: 1320.308, person: 'Fran', text: ' Yep.' },
  { startTime: 1321.328, person: 'Karol', text: " What's your take on that?" },
  { startTime: 1323.988, person: 'Fran', text: " That's a good point, actually." },
  {
    startTime: 1325.708,
    person: 'Fran',
    text: " You're touching on the point of governance, right?"
  },
  { startTime: 1328.108, person: 'Fran', text: ' So there are standards.' },
  { startTime: 1331.188, person: 'Fran', text: " There's AsyncAPI." },
  {
    startTime: 1332.528,
    person: 'Fran',
    text: " There's cloud events that Aleksandr has mentioned on the LinkedIn comment."
  },
  {
    startTime: 1338.728,
    person: 'Fran',
    text: ' There are a lot of different standards for messaging.'
  },
  { startTime: 1342.688, person: 'Fran', text: ' Then you have Avra.' },
  { startTime: 1343.848, person: 'Fran', text: ' Then you have for schema definition, right?' },
  { startTime: 1347.648, person: 'Fran', text: " It's the schema itself." },
  { startTime: 1350.248, person: 'Fran', text: ' Then you have this protobuf and so on.' },
  {
    startTime: 1352.948,
    person: 'Fran',
    text: ' So there are many different layers, different levels, but there are different standards for that.'
  },
  { startTime: 1359.088, person: 'Fran', text: " Now, the thing is that it's funny." },
  {
    startTime: 1362.628,
    person: 'Fran',
    text: " Something that I'm seeing lately is that maybe I'm biassed."
  },
  { startTime: 1368.668, person: 'Fran', text: ' So bear with me.' },
  {
    startTime: 1369.848,
    person: 'Fran',
    text: ' But way more companies now are starting to adopt an API-first mindset.'
  },
  { startTime: 1377.288, person: 'Fran', text: " And I'm talking about synchronous, right?" },
  { startTime: 1380.648, person: 'Fran', text: ' So now they are starting now.' },
  {
    startTime: 1382.668,
    person: 'Fran',
    text: " It's like the bulk of it, the bulk of the companies like everywhere you look around or almost everywhere you look around in tech companies or in companies with a mature, let's say, technical team."
  },
  {
    startTime: 1400.128,
    person: 'Fran',
    text: " You'll see more and more people adopting OpenAPI, adopting API-first mindset and so on, right?"
  },
  { startTime: 1407.588, person: 'Fran', text: " So that's cool." },
  { startTime: 1408.628, person: 'Fran', text: " That's really good." },
  {
    startTime: 1409.708,
    person: 'Fran',
    text: " But that's just, to me, as I see it, that's just starting to happen now."
  },
  { startTime: 1414.848, person: 'Fran', text: ' It started to happen many years ago.' },
  {
    startTime: 1418.128,
    person: 'Fran',
    text: " But now is when I'm seeing it like, oh, it's starting to be everywhere."
  },
  { startTime: 1423.308, person: 'Fran', text: ' Cool.' },
  { startTime: 1424.008, person: 'Fran', text: " That's good." },
  { startTime: 1425.608, person: 'Fran', text: ' Finally.' },
  { startTime: 1426.868, person: 'Fran', text: ' It only took us 20 years now, not 20.' },
  {
    startTime: 1428.908,
    person: 'Fran',
    text: ' But yeah, like when I was working, when I created AsyncAPI, we were already building a product to work with OpenAPI.'
  },
  {
    startTime: 1439.008,
    person: 'Fran',
    text: ' So OpenAPI was already around, not Swagger, OpenAPI.'
  },
  {
    startTime: 1443.448,
    person: 'Fran',
    text: ' So OpenAPI was already like, Swagger was already renamed by then.'
  },
  {
    startTime: 1448.128,
    person: 'Fran',
    text: ' So it means that it was there for a while already.'
  },
  {
    startTime: 1453.648,
    person: 'Fran',
    text: ' What I mean with this, and this reminds me to a panel I got invited in Silicon Valley, I think 2018, or something like that.'
  },
  { startTime: 1466.468, person: 'Fran', text: ' And I was there.' },
  {
    startTime: 1467.548,
    person: 'Fran',
    text: ' I remember my phone sitting there in the panel and listening to everyone, not speaking at all, and thinking, everyone was saying that how cool OpenAPI was, how cool, how everyone was using standards, how beautiful everything was, right?'
  },
  {
    startTime: 1486.328,
    person: 'Fran',
    text: " And I was just sitting there and it's like, that's not what I'm seeing."
  },
  { startTime: 1491.848, person: 'Fran', text: " Like, what's wrong with this?" },
  {
    startTime: 1494.808,
    person: 'Fran',
    text: " Like, is it just me that I'm not seeing enough or what's happening?"
  },
  {
    startTime: 1501.188,
    person: 'Fran',
    text: " And I recall someone from the event, I don't recall the name of the guy, sorry for that, but someone from the event said, like, mentioned my comment in Twitter, I think."
  },
  {
    startTime: 1514.148,
    person: 'Fran',
    text: ' And he was like, the point, the whole point of the day was this take by Fran Mendez saying, hey, get down to earth, like, this is pretty cool.'
  },
  { startTime: 1523.328, person: 'Fran', text: " But we're just a bunch of us using it, right?" },
  {
    startTime: 1526.488,
    person: 'Fran',
    text: " Like, we're those nerds that love APIs and OpenAPI and so on and API first and sign first and we're thinking about these things, but nobody cares, nobody out there cares, right?"
  },
  {
    startTime: 1539.328,
    person: 'Fran',
    text: " Many people are building microservices and they don't even know what OpenAPI or Swagger is."
  },
  {
    startTime: 1544.908,
    person: 'Fran',
    text: " And it's not that they care about or not, it's that they don't even know what it is."
  },
  { startTime: 1548.908, person: 'Fran', text: " They don't even know it exists." },
  { startTime: 1551.528, person: 'Fran', text: " I'm talking about 2018, right?" },
  {
    startTime: 1554.348,
    person: 'Fran',
    text: " And I was like, I don't want to disappoint people here, but my feeling is that this is still very niche, looking as API nerds, right?"
  },
  {
    startTime: 1565.928,
    person: 'Fran',
    text: " Then now I'm seeing this with this in KPI as well, or with even driven architecture, driven in this case by this in KPI and or cloud events."
  },
  {
    startTime: 1582.868,
    person: 'Fran',
    text: " I'm seeing that more and more companies are adopting it."
  },
  {
    startTime: 1587.088,
    person: 'Fran',
    text: " But it's still very early in the days for these companies to even, some of them, they don't even know if these standards exist, right?"
  },
  {
    startTime: 1598.488,
    person: 'Fran',
    text: ' And I could even, I could see it from the Postman surveys.'
  },
  {
    startTime: 1606.648,
    person: 'Fran',
    text: ' So Postman was organising a survey every year and I think it was around 1% of people knew what API was.'
  },
  {
    startTime: 1615.508,
    person: 'Fran',
    text: " And I was like, I know it's a very specific target audience, APIs, but precisely, it's very related."
  },
  {
    startTime: 1625.328,
    person: 'Fran',
    text: " It's actually coming from that same world when I created this in API, I created it from OpenAPI."
  },
  {
    startTime: 1632.408,
    person: 'Fran',
    text: ' And I was always advocating for it on API days conferences and in API related conferences because that was when I was feeling comfortable, not for any other reason.'
  },
  {
    startTime: 1647.408,
    person: 'Karol',
    text: " But you know what, I was like, when you're talking about the standards and the old nerds like hyping about those standards, I'm like looking back at my career, when I started doing application integration, REST was nowhere to be found."
  },
  {
    startTime: 1665.268,
    person: 'Karol',
    text: ' Nobody was using JSON because it was non-existent.'
  },
  { startTime: 1667.388, person: 'Karol', text: ' We were using XML.' },
  { startTime: 1668.388, person: 'Fran', text: " It's still nowhere to be found yet." },
  { startTime: 1671.17, person: 'Karol', text: " I'm going to get to that one in a moment." },
  {
    startTime: 1675.048,
    person: 'Karol',
    text: ' So looking back 14 years ago when I started as a junior developer, we were building SOAP services over HTTP or SOAP services over JMS. And that was already a very robust standard and was already a very established standard.'
  },
  {
    startTime: 1693.768,
    person: 'Karol',
    text: ' Very rigid, had to be very precise, so it was very prone to errors.'
  },
  {
    startTime: 1697.828,
    person: 'Karol',
    text: ' You could do a lot of errors and everything will be just returning you a 500 HTTP error, right?'
  },
  {
    startTime: 1706.508,
    person: 'Karol',
    text: ' Which is fine because where I worked, we actually needed very high rigid standardisation of the APIs so that we can have that quality of data.'
  },
  {
    startTime: 1717.308,
    person: 'Karol',
    text: ' But even though that was a very established standard at the time, we still stumbled into people who had no idea what they were doing, even if they were senior, right?'
  },
  {
    startTime: 1731.628,
    person: 'Karol',
    text: ' So I remember this lovely conversation some time ago where somebody was debugging a SOAP service and the guy had no idea why it was not working.'
  },
  { startTime: 1747.168, person: 'Karol', text: ' The message was sent according to specs.' },
  {
    startTime: 1749.188,
    person: 'Karol',
    text: ' The specs said that the specific element could be empty.'
  },
  { startTime: 1754.918, person: 'Karol', text: ' Like no string at all, right?' },
  {
    startTime: 1758.808,
    person: 'Karol',
    text: ' So basically in the XML, they got an empty tag.'
  },
  {
    startTime: 1763.248,
    person: 'Karol',
    text: " So a tag that doesn't have two elements has one element so it's already closed."
  },
  { startTime: 1768.428, person: 'Karol', text: ' Self-contained, yeah.' },
  {
    startTime: 1771.248,
    person: 'Karol',
    text: ' And I remember the lovely comment from that developer debugging that communication because it was wrongly interpreted.'
  },
  { startTime: 1778.428, person: 'Karol', text: " It's like, I'm getting a very weird tag here." },
  { startTime: 1781.368, person: 'Karol', text: " It's neither open nor closed." },
  { startTime: 1783.128, person: 'Karol', text: " I don't know what that is." },
  {
    startTime: 1785.368,
    person: 'Karol',
    text: " And I'm like sitting there and it's like, after a few years later, I mean, when I started doing proper research into interoperability and why we're doing certain things the way we are doing things and I started reading the specification of the XML, I was like, that self-contained tag is in the first version of the specification."
  },
  { startTime: 1810.368, person: 'Karol', text: " It's old as hell." },
  { startTime: 1814.248, person: 'Karol', text: ' It was there for a reason.' },
  { startTime: 1816.008, person: 'Fran', text: " It's pretty common in HTML as well, yeah." },
  { startTime: 1818.208, person: 'Karol', text: ' Yeah, exactly.' },
  {
    startTime: 1819.528,
    person: 'Karol',
    text: " The new line tag, that's basically what it is, right?"
  },
  { startTime: 1823.448, person: 'Fran', text: ' Line, link, all this stuff, yeah.' },
  { startTime: 1826.308, person: 'Karol', text: ' Yeah, plenty of those.' },
  { startTime: 1828.488, person: 'Karol', text: ' And I was like, right, perfect.' },
  {
    startTime: 1831.128,
    person: 'Karol',
    text: ' So we have standards but nobody actually even reads them.'
  },
  { startTime: 1835.608, person: 'Karol', text: ' They apply to the use case.' },
  { startTime: 1840.108, person: 'Karol', text: ' Sometimes good, sometimes bad.' },
  {
    startTime: 1841.528,
    person: 'Karol',
    text: ' And now looking at the REST standard, I would say that over 95% of REST services are not aligned with the REST standard.'
  },
  {
    startTime: 1853.508,
    person: 'Karol',
    text: " We call them REST services, but they're not actually up to par."
  },
  { startTime: 1857.468, person: 'Karol', text: " They don't have the next page." },
  {
    startTime: 1858.768,
    person: 'Karol',
    text: " They don't have the related objects, nothing like that."
  },
  {
    startTime: 1862.188,
    person: 'Karol',
    text: ' We just use this to convey messages based on CRUD, create, read, update, delete.'
  },
  { startTime: 1872.068, person: 'Karol', text: ' And we have standards.' },
  { startTime: 1874.908, person: 'Karol', text: ' But who read the REST API standard?' },
  {
    startTime: 1877.908,
    person: 'Karol',
    text: ' I mean, hands up, probably nobody, other than the two of us, I would guess.'
  },
  { startTime: 1882.848, person: 'Fran', text: " No, no, no, I haven't." },
  {
    startTime: 1885.008,
    person: 'Fran',
    text: " I just went through it like a little bit, but couldn't finish it."
  },
  { startTime: 1890.188, person: 'Fran', text: " I mean, it's an interesting one, probably." },
  {
    startTime: 1892.728,
    person: 'Fran',
    text: " I just didn't have the time or energy to do it, or even the need to do it."
  },
  {
    startTime: 1896.728,
    person: 'Fran',
    text: " So if I have had the need, probably I will have done it, and that's fine."
  },
  { startTime: 1902.308, person: 'Karol', text: ' Yeah, the need is also quite important.' },
  {
    startTime: 1904.768,
    person: 'Fran',
    text: " So I never had the need to have, let's say, a proper REST API."
  },
  {
    startTime: 1911.088,
    person: 'Fran',
    text: ' Because what you said, even consuming this kind of APIs will become more difficult for teams that are already like being pressured to deliver quickly, quickly, quickly.'
  },
  { startTime: 1927.508, person: 'Fran', text: ' Right?' },
  {
    startTime: 1928.328,
    person: 'Fran',
    text: " So yeah, this sort of SCRAM methodology that we have been applying for the last decade, it's a little bit of a culprit there as well for telling people that you should be rushing out and delivering things quickly in the next two weeks without looking farther than just two weeks."
  },
  {
    startTime: 1951.188,
    person: 'Fran',
    text: " So I know it's not exactly what SCRAM says, but that's how it was usually applied."
  },
  {
    startTime: 1957.968,
    person: 'Fran',
    text: " So in the end, we'll get back to the same thing."
  },
  {
    startTime: 1962.888,
    person: 'Karol',
    text: " So basically we could say that, yes, we have standards, but nobody's adopting those standards."
  },
  { startTime: 1968.288, person: 'Karol', text: ' So we basically live without standards.' },
  { startTime: 1970.648, person: 'Karol', text: " And that's one of the usual problems." },
  {
    startTime: 1975.428,
    person: 'Fran',
    text: " Now, I would love to give, let's say, a vote here to these people who never reach standards and try to build things and so on."
  },
  { startTime: 1988.068, person: 'Fran', text: " I'm one of them as well." },
  {
    startTime: 1992.088,
    person: 'Fran',
    text: ' And I think everyone is, everyone, like we all do it with certain things, not with all of the things, right?'
  },
  {
    startTime: 2000.348,
    person: 'Fran',
    text: ' But the thing is that if you are under pressure to deliver, deliver, deliver, you could not be reading MSN.'
  },
  {
    startTime: 2011.568,
    person: 'Fran',
    text: " All the standards that are out there and so on, sometimes it's faster and easier for you to deliver something that is, meh, it works, right?"
  },
  {
    startTime: 2024.368,
    person: 'Fran',
    text: " And you're not going to be fired because you deliver."
  },
  {
    startTime: 2029.228,
    person: 'Fran',
    text: " Then to say, you know what, let me properly read this and let's build this in eight weeks instead of two."
  },
  {
    startTime: 2038.548,
    person: 'Fran',
    text: ' But the cool thing is that next time we have to build something like that.'
  },
  {
    startTime: 2042.328,
    person: 'Fran',
    text: " Actually, next time we have to build a feature on the API, we don't have to change the API."
  },
  { startTime: 2047.548, person: 'Fran', text: ' Like the whole API will adapt itself, right?' },
  { startTime: 2051.828, person: 'Fran', text: ' Like the web is doing with HTML, for instance.' },
  {
    startTime: 2054.528,
    person: 'Fran',
    text: " You don't have to encode each website in the world, like everybody got a language, which is HTML, and then you can create the content."
  },
  {
    startTime: 2064.768,
    person: 'Fran',
    text: ' And then you have link tags and so on, script tags, and all this kind of references to other webs, the A tag, the anchor tag, and all this stuff, which are hyperlinks.'
  },
  { startTime: 2078.987, person: 'Fran', text: " So there's a system there, right?" },
  {
    startTime: 2082.768,
    person: 'Fran',
    text: ' The thing is that for some reason, at some point, we decided to say that XML or HTML is not good enough.'
  },
  {
    startTime: 2091.868,
    person: 'Fran',
    text: " Let's just jump to JSON because it's more readable."
  },
  { startTime: 2097.508, person: 'Fran', text: ' I can relate to this, like I failed myself.' },
  { startTime: 2100.648, person: 'Fran', text: ' I prefer to read JSON than to read XML.' },
  {
    startTime: 2104.128,
    person: 'Fran',
    text: " But it's true that it's not compatible, so we're losing features when we jump from XML to JSON."
  },
  {
    startTime: 2111.688,
    person: 'Karol',
    text: ' I mean, I know a few people who would argue that nowadays JSON already has those features that XML has.'
  },
  {
    startTime: 2120.408,
    person: 'Fran',
    text: " That was like a kind of patches and so on, but at the time, it's already late, let's say, because people have too invested in using plain JSON with no structure and so on."
  },
  {
    startTime: 2131.348,
    person: 'Fran',
    text: " So it's a bit of a mess, but I will not point to those who are using the standards without reading the standards."
  },
  {
    startTime: 2138.428,
    person: 'Fran',
    text: " I will instead point to these organisations who don't give enough space to these engineers to iterate and to experiment and to build better systems, right?"
  },
  {
    startTime: 2151.148,
    person: 'Fran',
    text: " And instead, it's like ship, ship, ship, ship quickly because we need to go to another feature and another one more feature, one more feature."
  },
  { startTime: 2159.108, person: 'Fran', text: " We don't care." },
  { startTime: 2160.208, person: 'Fran', text: " It's like technical debt." },
  { startTime: 2162.628, person: 'Fran', text: ' Who cares, right?' },
  { startTime: 2163.468, person: 'Fran', text: ' This is not going to give us money, right?' },
  { startTime: 2166.348, person: 'Fran', text: ' So I will point to these people instead.' },
  {
    startTime: 2169.808,
    person: 'Fran',
    text: " Like there's company cultures, organisation cultures that don't enable for engineers to experiment and fail and develop things in a calm way while you're reading things and develop things properly."
  },
  {
    startTime: 2188.288,
    person: 'Fran',
    text: ' In the automotive industry or in the aerospace industry.'
  },
  {
    startTime: 2201.488,
    person: 'Fran',
    text: " I'm pretty sure it happens to some degree, but it doesn't happen as much as with software, right?"
  },
  { startTime: 2207.288, person: 'Fran', text: ' Why?' },
  {
    startTime: 2207.888,
    person: 'Fran',
    text: ' Because she cannot just ship a half-baked plane into the air with people, right?'
  },
  {
    startTime: 2214.908,
    person: 'Fran',
    text: ' Because if it fails, it will kill people, right?'
  },
  {
    startTime: 2217.468,
    person: 'Fran',
    text: " So that's why it takes so long time to build something that is, okay, this is now properly tested."
  },
  { startTime: 2223.948, person: 'Fran', text: " It's not going to kill anyone." },
  {
    startTime: 2225.708,
    person: 'Fran',
    text: " And if at some point there's an accident because of a failure of an aeroplane or something, that will become the rare news of a plane accident."
  },
  { startTime: 2236.868, person: 'Fran', text: " That's really rare." },
  { startTime: 2238.828, person: 'Fran', text: ' But bugs, software bags, we see them daily.' },
  { startTime: 2242.508, person: 'Fran', text: ' Because who cares?' },
  { startTime: 2243.188, person: 'Fran', text: " Who's going to die for this?" },
  {
    startTime: 2244.808,
    person: 'Fran',
    text: ' I mean, yeah, one could argue that there are certain systems where people could die of software bags.'
  },
  { startTime: 2249.988, person: 'Fran', text: ' But in general, who cares?' },
  { startTime: 2252.268, person: 'Fran', text: " Like, well, what's going to happen?" },
  { startTime: 2253.888, person: 'Fran', text: " Like, someone's not going to be satisfied." },
  { startTime: 2256.568, person: 'Fran', text: " I don't care." },
  { startTime: 2257.808, person: 'Fran', text: " Let's just keep rolling." },
  {
    startTime: 2259.588,
    person: 'Karol',
    text: " That's why we say that if we're testing software, we're never 100% sure that there are no bugs."
  },
  {
    startTime: 2268.508,
    person: 'Karol',
    text: " There are always bugs, and software we just haven't found them yet because we just found that the right deterministic situation is everywhere."
  },
  { startTime: 2276.888, person: 'Fran', text: " That's the situation." },
  { startTime: 2277.928, person: 'Fran', text: ' Hardware as well.' },
  { startTime: 2278.968, person: 'Fran', text: ' It happens as well.' },
  {
    startTime: 2279.888,
    person: 'Fran',
    text: " So the thing is that if you are serious enough about it, if you have that need, like in the aerospace industry, you don't want to be in the news constantly because you killed a lot of people, you want to make sure that you reduce this probability to the very minimum you can, right?"
  },
  { startTime: 2301.468, person: 'Fran', text: ' And you do a lot of tests.' },
  {
    startTime: 2303.188,
    person: 'Fran',
    text: ' And so before you even launch something, right, before you even launch a beta version, right?'
  },
  { startTime: 2308.928, person: 'Karol', text: ' Yeah.' },
  { startTime: 2309.168, person: 'Fran', text: " That's something they do at all." },
  { startTime: 2311.328, person: 'Fran', text: " So that's my point." },
  {
    startTime: 2313.528,
    person: 'Fran',
    text: " So I will not point to these people who don't understand the standards and so on, but instead point to our shitty organisation, organisation cultures, and that don't provide psychological safety to engineers to experiment and to fail."
  },
  { startTime: 2329.448, person: 'Fran', text: ' That is my take.' },
  { startTime: 2330.348, person: 'Karol', text: ' And learn from those failures.' },
  { startTime: 2332.248, person: 'Fran', text: ' Yeah, exactly.' },
  {
    startTime: 2332.768,
    person: 'Karol',
    text: ' And this is a very nice segue to the next topic at hand, which is the non-technical barriers, but also the mindset shift that is required for proper governance and proper placement of even driven architecture within organisations.'
  },
  {
    startTime: 2354.678,
    person: 'Karol',
    text: " Because from my perspective, it's extremely easy to jump into doing point to point."
  },
  {
    startTime: 2362.678,
    person: 'Karol',
    text: " That's amazingly easy with OpenAPI spec, with just all the libraries that enable you to put in just a REST API in seconds, with LLMs that just give you a definition of a REST endpoint in matters of seconds, and with a spec that you can send to somebody and they will use it."
  },
  { startTime: 2389.218, person: 'Karol', text: " I mean, it's extremely easy." },
  {
    startTime: 2391.618,
    person: 'Karol',
    text: " But to properly govern asynchronous communication, I think that's something completely different in that sense."
  },
  { startTime: 2402.618, person: 'Fran', text: " That's really happening by the way." },
  { startTime: 2404.318, person: 'Fran', text: ' So you can really do that.' },
  {
    startTime: 2406.338,
    person: 'Fran',
    text: ' And with LLMs as well, like you can generate AsyncAPI and you got pretty much, I will not say the same coverage as with OpenAPI, but this is not yet as mature as OpenAPI.'
  },
  {
    startTime: 2419.378,
    person: 'Fran',
    text: ' I like to remember that OpenAPI has been around for probably around 10 more years, or a little bit less probably.'
  },
  {
    startTime: 2427.578,
    person: 'Karol',
    text: " Yes, while you can generate, that doesn't really change anything in terms of governance or the non-technical obstacles."
  },
  { startTime: 2435.598, person: 'Fran', text: " That's my point." },
  { startTime: 2436.318, person: 'Fran', text: " That's my point." },
  {
    startTime: 2437.058,
    person: 'Fran',
    text: " So you can generate even mocks or stops for like people can use postman, for instance, for OpenAPI, but people can use also microx to generate mocks for, you know, for, I was going to say a Kafka topic, but I have to learn myself to stop saying Kafka for everything that it's even doing architecture because it seems like it's the same."
  },
  {
    startTime: 2465.218,
    person: 'Fran',
    text: " So let's say for an AMQP topic or an AMQP queue, depending on your configuration, or an MQTT topic or whatever, right?"
  },
  {
    startTime: 2476.798,
    person: 'Fran',
    text: ' So you can mock this already with microx as well and with AMQP contracts.'
  },
  {
    startTime: 2482.178,
    person: 'Fran',
    text: " And you can have people who are, let's say not very technical, like product managers who understand a little bit about the topic, but not so much."
  },
  {
    startTime: 2491.678,
    person: 'Fran',
    text: ' And they can already create some mocks, some fake data that will be published to a broker and things like that, right?'
  },
  {
    startTime: 2501.858,
    person: 'Fran',
    text: " So it enables, let's say, non-technical people to go one step, let's say one step ahead, one step beyond without having to wait for the engineering teams to apply these things."
  },
  {
    startTime: 2521.718,
    person: 'Fran',
    text: " And you have similar technologies like Spectral that it's used to create, to link OpenAPIs, to link this into API as well, right?"
  },
  { startTime: 2541.138, person: 'Fran', text: ' So you can use both, right?' },
  { startTime: 2546.858, person: 'Karol', text: ' All right, but going to the mindset shift.' },
  { startTime: 2551.398, person: 'Fran', text: ' Yeah.' },
  {
    startTime: 2551.518,
    person: 'Karol',
    text: " And that's actually a very nice, also a point where we could pop this lovely QR in."
  },
  {
    startTime: 2559.358,
    person: 'Karol',
    text: ' Fran is actually writing a lovely book about, what is that about, more human challenges of adoption of?'
  },
  {
    startTime: 2570.338,
    person: 'Fran',
    text: " No, no, no, actually, lately I'm talking about a lot about these things, the human challenges of adopting engineering architecture, because that is the most overseen aspect of it that I found out, right?"
  },
  {
    startTime: 2585.698,
    person: 'Fran',
    text: ' So I know, like I can write a book about the technology needed to build an event-driven architecture and apply some governance to it and so on.'
  },
  { startTime: 2596.898, person: 'Fran', text: " That's fine." },
  {
    startTime: 2598.038,
    person: 'Fran',
    text: " That's what I've been doing for the last 10 years or so."
  },
  {
    startTime: 2603.138,
    person: 'Fran',
    text: ' The problem usually relies on a more human side of things, right?'
  },
  { startTime: 2611.578, person: 'Fran', text: " So like, I'll give you an example." },
  {
    startTime: 2613.638,
    person: 'Fran',
    text: " So for context, in the last four or five months, I've been interviewing more than 20 people from different companies at different stages, but they all were doing event-driven architecture for the sake of the book, right?"
  },
  {
    startTime: 2632.118,
    person: 'Fran',
    text: ' I want to understand how people are doing, what are their challenges and so on.'
  },
  {
    startTime: 2635.518,
    person: 'Fran',
    text: " So I wanted to make sure that it's not, this book is not just based on my experience or in my opinion, but also on facts, let's say, right?"
  },
  {
    startTime: 2644.218,
    person: 'Fran',
    text: " And I'm glad I did because I was not going to even mention anything about the human side of things, right?"
  },
  {
    startTime: 2652.698,
    person: 'Fran',
    text: ' And what I found out is that every single company out there, their major challenge is about communicating, you know, like convincing their thoughts.'
  },
  { startTime: 2666.738, person: 'Fran', text: " I'll put you an example." },
  {
    startTime: 2667.638,
    person: 'Fran',
    text: " If you're an engineer, if you're an architect that you want to introduce event-driven architecture or certain practises related to event-driven architecture, and you are in a well-established company, old company and so on, the rest of the teams, the rest of the engineers are super comfortable doing what they used to do, right?"
  },
  { startTime: 2690.778, person: 'Fran', text: " They don't want to change, right?" },
  {
    startTime: 2692.958,
    person: 'Fran',
    text: ' So how do you convince them to adopt this new mindset?'
  },
  {
    startTime: 2698.858,
    person: 'Fran',
    text: " Likely if you are a, if you're a leader in the company, like let's say head of engineering, CTO, whatever, how do you convince the rest of the teams, the rest of the engineers that EDA is what they should be doing and there should be a mindset shift in this case."
  },
  { startTime: 2720.298, person: 'Fran', text: " That's why it's called shift, right?" },
  { startTime: 2723.138, person: 'Fran', text: ' So why, how do you do it and why?' },
  {
    startTime: 2728.458,
    person: 'Fran',
    text: ' Because what I found out is that people were sure that EDA is what they needed and what they should be doing, but they struggled to convince their thoughts, their peers on the why.'
  },
  { startTime: 2743.078, person: 'Fran', text: ' Like why is it what we need?' },
  {
    startTime: 2744.898,
    person: 'Fran',
    text: " Like we've been working with without it for years."
  },
  { startTime: 2748.218, person: 'Fran', text: ' Why is it needed now?' },
  {
    startTime: 2749.318,
    person: 'Fran',
    text: " And what I found out is that most companies don't even know where to start."
  },
  {
    startTime: 2755.258,
    person: 'Fran',
    text: " I only found one, by the way, one company that I think in my opinion, either they were lying to me or they're doing it pretty well."
  },
  { startTime: 2765.018, person: 'Fran', text: ' So it was like a combined effort.' },
  { startTime: 2767.518, person: 'Fran', text: ' Like it was a bottom up and top down approach.' },
  { startTime: 2770.238, person: 'Fran', text: ' It was a combination of both.' },
  {
    startTime: 2772.598,
    person: 'Fran',
    text: " That was alignment from, let's say architects, but also senior engineers, staff engineers, all the stuff, stuff plus in here with the leadership."
  },
  {
    startTime: 2785.118,
    person: 'Fran',
    text: " So everything was coming from, let's say from the bottom of the organisation, not right and sideways as well as much as possible."
  },
  {
    startTime: 2796.518,
    person: 'Fran',
    text: ' But when someone was not buying the idea, then you have leadership saying, no, this is what you have to do.'
  },
  { startTime: 2804.318, person: 'Fran', text: " I'm not asking for your opinion." },
  { startTime: 2805.578, person: 'Fran', text: ' Like we want to convince you, right?' },
  {
    startTime: 2808.118,
    person: 'Fran',
    text: ' We give you the option to be convinced by faults and so on, right?'
  },
  {
    startTime: 2813.118,
    person: 'Fran',
    text: ' And everyone is pretty much in, but sometimes you have the black sheep around, right?'
  },
  { startTime: 2818.038, person: 'Fran', text: " That said, I don't care about that." },
  { startTime: 2819.938, person: 'Fran', text: " I'm disobeying whatever they tell me." },
  { startTime: 2821.738, person: 'Fran', text: " I don't buy it." },
  {
    startTime: 2822.958,
    person: 'Fran',
    text: " Well, in this case, it's useful to have someone from above, right?"
  },
  { startTime: 2825.598, person: 'Fran', text: ' And say, no, no, you have to do it.' },
  {
    startTime: 2828.118,
    person: 'Fran',
    text: " Like there's no chance I'd say that this or you leave basically."
  },
  {
    startTime: 2833.018,
    person: 'Fran',
    text: " I mean, they should never be using that card if possible, but it's useful to have it, right?"
  },
  { startTime: 2841.458, person: 'Karol', text: " I'll put a opposite example of not adoption." },
  {
    startTime: 2851.258,
    person: 'Karol',
    text: " I've seen many companies adopting new practises in terms of interoperability."
  },
  {
    startTime: 2859.078,
    person: 'Karol',
    text: " And I've seen some really bad examples of those adoptions, one of which was to create a whole integration team from scratch from former database developers and database administrators."
  },
  {
    startTime: 2875.518,
    person: 'Karol',
    text: " And if we put people that don't have the right mindset into these kinds of roles where they need to do interoperability, I mean, some really wonky stuff happens."
  },
  {
    startTime: 2889.958,
    person: 'Karol',
    text: ' The wonky stuff that happened there was that they, with their database mindset, they persisted everything.'
  },
  {
    startTime: 2898.978,
    person: 'Karol',
    text: ' Imagine just purely persisted communication, like everything has to be written down, persisted in the database, then redistributed by usually point to point.'
  },
  { startTime: 2911.098, person: 'Karol', text: ' It was magical.' },
  {
    startTime: 2912.848,
    person: 'Karol',
    text: ' And one of the reasons I observed why they did that is because that company, in terms of how they communicated between teams or how they communicated between departments, between each other, was mostly on meetings and with robust documents.'
  },
  { startTime: 2936.798, person: 'Karol', text: ' Like they just made humongous paper trails.' },
  {
    startTime: 2941.958,
    person: 'Karol',
    text: ' And from my observation over the years in application integration is that if we look at the way that a company communicates internally, that translates directly to how systems communicate in that company.'
  },
  {
    startTime: 2960.298,
    person: 'Karol',
    text: " So if we have lots of meetings, we're going to have..."
  },
  { startTime: 2963.938, person: 'Karol', text: " Yeah, Conway's law, pretty much, yeah." },
  {
    startTime: 2966.158,
    person: 'Karol',
    text: " If we have meetings there's going to be a lot of request reply."
  },
  { startTime: 2974.398, person: 'Fran', text: ' Yeah.' },
  { startTime: 2974.518, person: 'Karol', text: ' If those people are accustomed to using...' },
  { startTime: 2977.638, person: 'Fran', text: ' And synchronous.' },
  { startTime: 2979.038, person: 'Karol', text: ' Yes, definitely synchronous, yes.' },
  {
    startTime: 2982.258,
    person: 'Karol',
    text: " If that company is accustomed to using chats and they're accustomed to not rely on instant reply, well, we'll probably have some even driven in the systems, a decent amount."
  },
  {
    startTime: 2996.538,
    person: 'Karol',
    text: " And then if a company is relying on documents, that's going to be batch, batch, batch and file-based transfer, file-based transfer and file-based transfer all the way."
  },
  {
    startTime: 3009.118,
    person: 'Karol',
    text: " I mean, it's fine if it's proper ETL, ELT or batch, but if file-based transfer, I mean, come on, are we like in the 70s?"
  },
  { startTime: 3018.258, person: 'Fran', text: " That's still useful sometimes." },
  { startTime: 3019.938, person: 'Karol', text: ' It is.' },
  { startTime: 3021.118, person: 'Fran', text: ' I mean, think about it.' },
  { startTime: 3022.378, person: 'Fran', text: ' Like if your system is not...' },
  {
    startTime: 3024.638,
    person: 'Fran',
    text: " I mean, if it's not relevant for your system or for your company, to have this information right straight away, like in real time, as much as real time, you want to define it."
  },
  {
    startTime: 3040.178,
    person: 'Fran',
    text: " File transfer, like a batch overnight, it's completely fine."
  },
  { startTime: 3044.438, person: 'Fran', text: " Like if it works, if it's not, let's say..." },
  {
    startTime: 3049.558,
    person: 'Fran',
    text: " If it's not a problem, if it's something that can be done secondarily, it's not critical for your system and so on."
  },
  { startTime: 3058.498, person: 'Fran', text: " That's another technology." },
  { startTime: 3059.718, person: 'Fran', text: " Like I said, it's a technology." },
  { startTime: 3061.438, person: 'Fran', text: ' Use it whenever it makes sense.' },
  { startTime: 3063.638, person: 'Karol', text: ' Exactly.' },
  { startTime: 3063.858, person: 'Karol', text: ' And I agree on that.' },
  { startTime: 3064.978, person: 'Karol', text: ' Whenever it makes sense, but then...' },
  { startTime: 3066.698, person: 'Fran', text: ' Exactly.' },
  { startTime: 3066.938, person: 'Fran', text: " Don't use it for everything." },
  {
    startTime: 3068.118,
    person: 'Karol',
    text: " If you have 90% of your communication being robust operational communication because batch is great for analytics, batch is great for long-running processes, it's fine."
  },
  {
    startTime: 3078.998,
    person: 'Karol',
    text: " But if you're doing your operational communication with file transfers, there's something definitely very wrong in the way people do not communicate with each other."
  },
  {
    startTime: 3092.558,
    person: 'Karol',
    text: " Because if I'm looking, if most operational work is done over sending a document..."
  },
  {
    startTime: 3102.298,
    person: 'Fran',
    text: ' Honestly, I think, again, like every time I dig down into this topic, I find out that it has nothing to do with technology.'
  },
  {
    startTime: 3109.978,
    person: 'Fran',
    text: ' So every time I found that, and I scratched a little bit of surface and asked, why do you keep doing these file-based transfers, these batches overnight and so on?'
  },
  {
    startTime: 3123.318,
    person: 'Fran',
    text: ' Every time I kept scratching, I instantly found that...'
  },
  {
    startTime: 3130.198,
    person: 'Fran',
    text: ' Instantly, sometimes even in the same meeting, like one question away or two questions away, I was just not even asking directly, just asking around.'
  },
  {
    startTime: 3144.638,
    person: 'Fran',
    text: " And instantly what popped up is it's a psychological safety in the organisations."
  },
  { startTime: 3152.418, person: 'Fran', text: ' So picture this.' },
  {
    startTime: 3153.878,
    person: 'Fran',
    text: " If you are an engineer that's been in a bank for 20 years working there, you know the system inside-out, right?"
  },
  {
    startTime: 3164.118,
    person: 'Fran',
    text: ' Now someone comes to you and say, we now have this Kafka broker, right?'
  },
  { startTime: 3171.238, person: 'Fran', text: ' And we are doing...' },
  { startTime: 3173.718, person: 'Fran', text: " We're now doing everything over Kafka." },
  { startTime: 3176.918, person: 'Fran', text: ' But you still have to deliver stuff, right?' },
  {
    startTime: 3179.278,
    person: 'Fran',
    text: " So what you will probably do is either say, no, I'm not going to do this because I don't need it."
  },
  {
    startTime: 3189.378,
    person: 'Fran',
    text: " If you have the psychological safety to do that, and meaning that you know that you're not going to be fired for disobeying, or you say yes, but you don't do it, right?"
  },
  { startTime: 3203.998, person: 'Fran', text: ' Which is even worse, right?' },
  { startTime: 3205.418, person: 'Fran', text: " That's even worse because everything..." },
  {
    startTime: 3207.278,
    person: 'Fran',
    text: ' What happens in this case is that everything seems to be working.'
  },
  { startTime: 3211.338, person: 'Fran', text: ' Everybody is buying the argument.' },
  { startTime: 3213.098, person: 'Fran', text: " Let's use Kafka." },
  {
    startTime: 3214.098,
    person: 'Fran',
    text: " Let's react on real time or, yeah, as it happens, to all the events and everything."
  },
  { startTime: 3222.558, person: 'Fran', text: ' We process them and so on.' },
  {
    startTime: 3224.398,
    person: 'Fran',
    text: ' And we do the calculations in the very moment as we get the event, right?'
  },
  {
    startTime: 3231.538,
    person: 'Fran',
    text: ' Instead of just relying on overnight batches, right?'
  },
  {
    startTime: 3237.958,
    person: 'Fran',
    text: ' It seems that everybody is buying your argument.'
  },
  {
    startTime: 3240.898,
    person: 'Fran',
    text: ' But then you find out that adoption is like, this is not happening as fast as it should.'
  },
  { startTime: 3246.718, person: 'Fran', text: " What's happening here?" },
  {
    startTime: 3247.658,
    person: 'Fran',
    text: ' They keep putting excuses here and there, like we have some deadline that we have to match, whatever, which might be true as well.'
  },
  {
    startTime: 3257.878,
    person: 'Fran',
    text: " And then it's almost impossible to migrate to this new kind of system, right?"
  },
  {
    startTime: 3265.518,
    person: 'Fran',
    text: " Let's say in an acceptable time because these people are boycotting you, right?"
  },
  { startTime: 3272.078, person: 'Fran', text: ' Even if you are their boss, right?' },
  {
    startTime: 3274.198,
    person: 'Fran',
    text: ' Because for different reasons, it can be because their manager is not aligned with the leadership making this change.'
  },
  {
    startTime: 3283.038,
    person: 'Fran',
    text: ' So their manager is still like putting them pressure, like you need to deliver this, this, this, this, this, more feature, more things, more blah, blah, blah, whatever.'
  },
  {
    startTime: 3290.998,
    person: 'Fran',
    text: " So we don't have time to change our mindset here or to study or to start experimenting because it's a new technology."
  },
  {
    startTime: 3297.778,
    person: 'Fran',
    text: " You have to experiment because you don't know how it works."
  },
  { startTime: 3300.538, person: 'Fran', text: " So you've got to experiment, right?" },
  { startTime: 3302.458, person: 'Fran', text: ' So the manager is not letting them experiment.' },
  { startTime: 3304.498, person: 'Fran', text: ' So they never have time to experiment.' },
  {
    startTime: 3307.478,
    person: 'Fran',
    text: " So since they don't have time to experiment, someone, some colleagues, some peer come to them, maybe an architect, usually an architect comes to them and say, hey, why are you not already publishing this information to Kafka or consuming from Kafka or whatever, or from, I mean, why to bother, right?"
  },
  { startTime: 3323.578, person: 'Fran', text: " Why aren't you doing this already?" },
  { startTime: 3326.658, person: 'Fran', text: " Like it's been two months or whatever." },
  {
    startTime: 3329.598,
    person: 'Fran',
    text: ' Then you have this problem that they need to keep shipping because the manager is putting them deadlines.'
  },
  {
    startTime: 3336.138,
    person: 'Fran',
    text: " Now, the other thing that I've seen is this is if the whole technology changes, I may become redundant in this company."
  },
  {
    startTime: 3350.518,
    person: 'Fran',
    text: ' I may lose what makes me special and what makes this company not fire me, right?'
  },
  {
    startTime: 3359.418,
    person: 'Fran',
    text: " And so I will lose this job and I don't want to lose this job because as opposed to us who are passionate about software, many people are working in companies just in exchange of a salary just because of debt, which is perfectly fine."
  },
  {
    startTime: 3377.998,
    person: 'Fran',
    text: " You don't have to have a passion for software or for your job."
  },
  { startTime: 3380.818, person: 'Fran', text: " That's completely fine." },
  { startTime: 3382.258, person: 'Fran', text: " And it's totally acceptable, right?" },
  {
    startTime: 3384.778,
    person: 'Fran',
    text: " The thing is that if these people fear for their job and they know they've been doing this for 20 years, so they know that if they go out, they're going to struggle to find a new job because that world is not there anymore, right?"
  },
  { startTime: 3401.038, person: 'Fran', text: " It's only in a few companies here and there." },
  { startTime: 3403.398, person: 'Karol', text: ' Very true.' },
  { startTime: 3404.418, person: 'Fran', text: " And they're not hiring for these roles anymore." },
  {
    startTime: 3406.718,
    person: 'Fran',
    text: ' So that is creating a lot of stress and their instant reaction is saying...'
  },
  { startTime: 3414.898, person: 'Fran', text: ' Resist, exactly.' },
  { startTime: 3416.418, person: 'Fran', text: ' Resist here.' },
  {
    startTime: 3416.978,
    person: 'Fran',
    text: " I'm going to boycott this initiative because that doesn't make sense."
  },
  {
    startTime: 3422.398,
    person: 'Fran',
    text: " Sometimes, I will even argue, most of the times, if not all of the time, they don't do it on purpose."
  },
  { startTime: 3428.718, person: 'Karol', text: ' No.' },
  { startTime: 3428.938, person: 'Fran', text: " It's just unconsciously." },
  {
    startTime: 3430.758,
    person: 'Fran',
    text: ' And it happens to all of us in every aspect of our lives.'
  },
  {
    startTime: 3435.278,
    person: 'Fran',
    text: " So what I'm researching a lot for the book, for writing the book, is precisely on the organisational psychology."
  },
  { startTime: 3445.998, person: 'Fran', text: ' I mentioned the safety.' },
  { startTime: 3453.718, person: 'Fran', text: ' I mentioned also the resistance and so on.' },
  {
    startTime: 3457.978,
    person: 'Fran',
    text: " Aleksandr is in chat, he's mentioning the architectural comfort zone."
  },
  { startTime: 3463.518, person: 'Fran', text: ' Totally agree with that.' },
  { startTime: 3464.558, person: 'Fran', text: " It's the comfort zone." },
  {
    startTime: 3466.658,
    person: 'Fran',
    text: ' And nobody wants to leave the comfort zone because the comfort zone is comfortable.'
  },
  { startTime: 3473.298, person: 'Fran', text: " That's why it's called comfort zone." },
  { startTime: 3474.478, person: 'Fran', text: ' Nobody wants to leave that.' },
  {
    startTime: 3476.538,
    person: 'Karol',
    text: ' It takes a lot of effort to leave your comfort zone.'
  },
  { startTime: 3480.258, person: 'Karol', text: " It's very annoying to leave the comfort zone." },
  {
    startTime: 3484.658,
    person: 'Karol',
    text: ' It takes a lot of courage and a lot of energy to get used to pushing that comfort zone further and further.'
  },
  {
    startTime: 3492.738,
    person: 'Karol',
    text: " But it's a fallacy in its own if you don't do that."
  },
  {
    startTime: 3496.298,
    person: 'Karol',
    text: ' Because those people will, sooner or later, will end up without the job and they will realise how...'
  },
  {
    startTime: 3501.738,
    person: 'Fran',
    text: " Maybe these people are already 55 years old and they're aiming for less retirement without any complications."
  },
  { startTime: 3512.718, person: 'Fran', text: " So that's also valid." },
  {
    startTime: 3514.558,
    person: 'Fran',
    text: " The software industry is already becoming so old but it's already common to see people over 50 years old in teams."
  },
  { startTime: 3523.398, person: 'Fran', text: " So we're getting there." },
  {
    startTime: 3526.058,
    person: 'Karol',
    text: ' Just last week I spoke to Mark Riches on a live stream with Utrecht Mulesoft Meetup.'
  },
  { startTime: 3532.838, person: 'Karol', text: ' And Mark has...' },
  { startTime: 3535.918, person: 'Karol', text: ' Let me not get that wrong.' },
  {
    startTime: 3537.858,
    person: 'Karol',
    text: ' 42 years of experience in IT, 31 years of experience as an architect.'
  },
  { startTime: 3544.218, person: 'Karol', text: " I mean, he's a dinosaur in the field." },
  {
    startTime: 3548.158,
    person: 'Karol',
    text: " An absolutely amazing guy and an absolutely amazing architect and he's very comfortable with moving his comfort zone and stepping out of his comfort zone which is an amazing thing to watch."
  },
  {
    startTime: 3560.478,
    person: 'Karol',
    text: " But he's one of the rare people there that actually is still capable to do this with his years of experience."
  },
  {
    startTime: 3570.698,
    person: 'Karol',
    text: " That's amazing but that's such a rare thing to observe."
  },
  { startTime: 3573.838, person: 'Karol', text: " That's passion." },
  { startTime: 3574.658, person: 'Fran', text: " That's passion." },
  { startTime: 3575.278, person: 'Fran', text: " That's only possible because of passion." },
  { startTime: 3577.418, person: 'Karol', text: ' And there is...' },
  {
    startTime: 3578.338,
    person: 'Karol',
    text: ' If we look at our organisations, I mean, those people are there to make a buck.'
  },
  {
    startTime: 3585.718,
    person: 'Karol',
    text: ' They want to make a living and move on with their lives.'
  },
  { startTime: 3588.838, person: 'Karol', text: " They don't have to have that passion." },
  { startTime: 3591.438, person: 'Karol', text: " It's fantastic if they do." },
  { startTime: 3593.338, person: 'Karol', text: " That's awesome." },
  {
    startTime: 3596.278,
    person: 'Karol',
    text: ' But it requires really strong leadership and actual leadership that leads to spark the minimum of passion for those people to be able to step out of those comfort zones without fear with that psychological safety somewhere there.'
  },
  { startTime: 3618.458, person: 'Karol', text: " And that's difficult." },
  { startTime: 3620.238, person: 'Karol', text: " That's extremely difficult." },
  { startTime: 3621.938, person: 'Fran', text: ' It is because we all have a boss, right?' },
  { startTime: 3625.658, person: 'Fran', text: " So that's the thing." },
  { startTime: 3627.298, person: 'Fran', text: ' We all have a boss.' },
  { startTime: 3628.558, person: 'Fran', text: ' Even your boss has a boss, right?' },
  {
    startTime: 3631.298,
    person: 'Fran',
    text: ' Nobody wants to be the guy that is like, why are you so weak with your team?'
  },
  {
    startTime: 3637.318,
    person: 'Fran',
    text: " Like why don't you tell them what they have to do and if not, fire them, right?"
  },
  {
    startTime: 3642.418,
    person: 'Fran',
    text: " There's still this mentality, especially in these old industries like banking."
  },
  {
    startTime: 3647.038,
    person: 'Karol',
    text: " It's the mentality, the very specific mentality called the Peter Principle."
  },
  { startTime: 3654.358, person: 'Karol', text: ' You heard probably about that.' },
  {
    startTime: 3656.918,
    person: 'Karol',
    text: " So for those who don't know Peter Principle, it's a concept described in 1969 by Dr. Lawrence J. Peter"
  },
  {
    startTime: 3666.678,
    person: 'Karol',
    text: ' It basically means that, especially in larger environments, the smaller the company, the less it happens.'
  },
  {
    startTime: 3672.038,
    person: 'Karol',
    text: ' But in large corporate environments, people tend to be promoted to higher positions based on their time with the company, not based on the competence for that next position.'
  },
  { startTime: 3686.778, person: 'Karol', text: " So they're great at their role." },
  {
    startTime: 3688.298,
    person: 'Karol',
    text: " They're like, let's say, you're a great junior developer."
  },
  {
    startTime: 3690.898,
    person: 'Karol',
    text: ' Okay, you get a promotion to a mid developer role, right?'
  },
  { startTime: 3694.078, person: 'Karol', text: " You're a great mid." },
  { startTime: 3695.058, person: 'Karol', text: ' You get promoted to senior.' },
  {
    startTime: 3696.998,
    person: 'Karol',
    text: ' And then all of a sudden, you get promoted to a team lead, right?'
  },
  {
    startTime: 3702.458,
    person: 'Karol',
    text: ' And then you become incompetent because being a team lead is something completely different in terms of skill sets than being a senior developer.'
  },
  {
    startTime: 3713.038,
    person: 'Karol',
    text: ' Because being a team lead requires a different set of skills in terms of soft skills.'
  },
  {
    startTime: 3717.878,
    person: 'Karol',
    text: " Being a senior developer, you just need to communicate clearly about the code you're writing and the technology, maybe a little bit of a coaching of juniors, etcétera, your colleagues in the team."
  },
  {
    startTime: 3728.878,
    person: 'Karol',
    text: " But as a team lead, that's something different."
  },
  {
    startTime: 3732.318,
    person: 'Karol',
    text: ' So if you never have any interest in psychology or any interest in building your soft skills as a developer, and you get promoted on the basis of a Peter principle, then all of a sudden, you become completely incompetent in your job.'
  },
  { startTime: 3749.338, person: 'Karol', text: " And that's horrendous." },
  {
    startTime: 3750.358,
    person: 'Karol',
    text: " And I've seen managers and directors being promoted that way."
  },
  {
    startTime: 3756.838,
    person: 'Karol',
    text: " Where they're completely incompetent to lead the whole departments and they destroy the company from within."
  },
  {
    startTime: 3765.198,
    person: 'Karol',
    text: ' And then you have a large turn of employees and it all becomes very costly and difficult for everybody.'
  },
  { startTime: 3776.898, person: 'Fran', text: ' I must say, I face that myself.' },
  {
    startTime: 3780.078,
    person: 'Fran',
    text: ' In my last job at Cosmo, I was a director of engineering.'
  },
  {
    startTime: 3783.938,
    person: 'Fran',
    text: " I don't know how to be a director of engineering."
  },
  {
    startTime: 3787.798,
    person: 'Fran',
    text: ' I still, I mean, I more or less know now after four years being in that position.'
  },
  {
    startTime: 3792.758,
    person: 'Fran',
    text: ' But when I landed there, I was like, I mean, can you imagine the imposter syndrome on me?'
  },
  { startTime: 3801.918, person: 'Karol', text: " Let's not get started on my imposter syndrome." },
  {
    startTime: 3804.638,
    person: 'Fran',
    text: ' Can you imagine that like, yeah, I created this AsyncAPI, cool, whatever.'
  },
  {
    startTime: 3808.558,
    person: 'Fran',
    text: ' But when I quit my job to work 100% of my time, full-time, on AsyncAPI, I was just recently promoted as to manager position at New Relic.'
  },
  { startTime: 3823.378, person: 'Fran', text: ' But I think I was in the manager position.' },
  { startTime: 3826.318, person: 'Fran', text: ' I was just one month and then I quit.' },
  { startTime: 3828.938, person: 'Fran', text: " So I didn't quit because of the company." },
  {
    startTime: 3832.138,
    person: 'Fran',
    text: ' I quit because I had the opportunity to dedicate full-time to AsyncAPI and I took this opportunity and not looking back, right?'
  },
  { startTime: 3839.158, person: 'Fran', text: ' So it was a different reason.' },
  {
    startTime: 3843.038,
    person: 'Fran',
    text: " So I jumped straight from lead engineer, let's say that I was usually playing that role in different companies."
  },
  { startTime: 3853.658, person: 'Fran', text: ' Sometimes architect but of smaller companies.' },
  { startTime: 3857.478, person: 'Fran', text: " So it's effectively it's like lead engineer." },
  {
    startTime: 3861.618,
    person: 'Fran',
    text: ' I was instantly promoted to director of engineering, managing other managers managing people, managing the project, the budget, the strategy, you know, all these kind of things.'
  },
  { startTime: 3881.338, person: 'Fran', text: ' Aleksandr says I figured that we make it.' },
  { startTime: 3884.138, person: 'Fran', text: " That's what I did usually is I kept going." },
  {
    startTime: 3888.258,
    person: 'Fran',
    text: " I kept going because also I was like, there's another point by Kubilay saying that is it really being an imposter?"
  },
  {
    startTime: 3896.998,
    person: 'Fran',
    text: " Well, if you hide it, and you don't try, you're imposter."
  },
  { startTime: 3904.098, person: 'Fran', text: ' In my case, I was trying hard.' },
  {
    startTime: 3905.958,
    person: 'Fran',
    text: ' I was trying to learn as much as possible, learning from peers within books, taking courses and so on.'
  },
  { startTime: 3914.218, person: 'Fran', text: ' I was trying hard.' },
  { startTime: 3915.858, person: 'Fran', text: ' It was just not made for me.' },
  { startTime: 3917.518, person: 'Fran', text: " It's not what I should be." },
  { startTime: 3920.038, person: 'Fran', text: " It's not what I like." },
  { startTime: 3920.858, person: 'Fran', text: " It's not what I enjoy." },
  { startTime: 3922.998, person: 'Fran', text: " And it's not what I'm good at, at managing." },
  { startTime: 3927.258, person: 'Fran', text: ' I can be decently good.' },
  { startTime: 3928.758, person: 'Fran', text: " At least I'm not." },
  {
    startTime: 3929.638,
    person: 'Fran',
    text: " I'm really good at the human level in the sense of like something that I'm proud of is that I acted as a as an umbrella for my team."
  },
  { startTime: 3941.718, person: 'Fran', text: ' kind of like a two way, two ways umbrella.' },
  {
    startTime: 3944.958,
    person: 'Fran',
    text: " So I was filtering all the shit from the organisation so they don't have to worry about things happening at the higher level."
  },
  {
    startTime: 3953.358,
    person: 'Fran',
    text: ' But letting them shine to the rest of the organisation and promoting their work and their achievements and so on.'
  },
  { startTime: 3958.118, person: 'Fran', text: " So I'm happy with that work that I usually did." },
  {
    startTime: 3961.558,
    person: 'Fran',
    text: ' And even when I quit and when they all were fired one month after I quit, the whole team, right, at Postman was led off.'
  },
  {
    startTime: 3973.358,
    person: 'Fran',
    text: ' Even after that, I was on holiday time and I was trying to find them a job and so on and talking to people so they could find a job.'
  },
  { startTime: 3980.398, person: 'Fran', text: " So I'm happy." },
  { startTime: 3981.538, person: 'Fran', text: " I'm proud of myself at the human level." },
  { startTime: 3984.318, person: 'Fran', text: " But I don't know how to do that." },
  {
    startTime: 3987.038,
    person: 'Fran',
    text: " I don't know how to properly do that and I don't and even more important I don't enjoy it."
  },
  { startTime: 3993.178, person: 'Fran', text: ' So yeah.' },
  {
    startTime: 3995.978,
    person: 'Karol',
    text: ' I mean, I must compliment you because this kind of behaviour absolute leadership.'
  },
  {
    startTime: 4004.978,
    person: 'Fran',
    text: " Well, and I must say as well, I appreciate that but I must also mention something that I don't want to miss."
  },
  {
    startTime: 4012.258,
    person: 'Fran',
    text: ' I want to make sure that everybody understands this point.'
  },
  { startTime: 4014.498, person: 'Fran', text: ' So and this took me a few sessions of therapy.' },
  { startTime: 4018.238, person: 'Fran', text: " I'm not joking about that." },
  { startTime: 4019.678, person: 'Fran', text: " It's true." },
  { startTime: 4020.698, person: 'Fran', text: ' It took me a few sessions of therapy.' },
  {
    startTime: 4023.218,
    person: 'Fran',
    text: ' So it was really painful for me to see my team being led off this way.'
  },
  {
    startTime: 4031.978,
    person: 'Fran',
    text: " it's really like it takes true leadership as you said and as many people say that this is what you should be doing and so on."
  },
  {
    startTime: 4041.018,
    person: 'Fran',
    text: " But if you ever if you are ever in this position my piece of advice is don't do it."
  },
  { startTime: 4047.778, person: 'Fran', text: " Don't do it to that extreme." },
  {
    startTime: 4049.718,
    person: 'Fran',
    text: " So I've spent more than a year at Postman being burned out just to protect my team because I knew or I felt it that if I quit they all will be fired."
  },
  {
    startTime: 4067.038,
    person: 'Fran',
    text: ' Because our hire basically was a marketing hire.'
  },
  {
    startTime: 4070.518,
    person: 'Fran',
    text: " It was not a technical hire or product hire it was a marketing hire so if they don't have the founder of AsyncAPI why keep investing it in this ship right?"
  },
  { startTime: 4079.918, person: 'Fran', text: " Or they don't care." },
  {
    startTime: 4080.898,
    person: 'Fran',
    text: ' And I felt that because of their comments and so on.'
  },
  { startTime: 4084.158, person: 'Fran', text: " I don't agree." },
  {
    startTime: 4084.818,
    person: 'Fran',
    text: ' I would have left the whole team there because also Lucas was still the director of the initiative so the director of AsyncAPI was still there.'
  },
  {
    startTime: 4095.918,
    person: 'Fran',
    text: ' So it could have continued even as a marketing hire or as a marketing investment.'
  },
  {
    startTime: 4101.918,
    person: 'Fran',
    text: ' Now the thing is that my biggest mistake there was allowing myself to stay there to protect the rest of my team.'
  },
  {
    startTime: 4113.277,
    person: 'Fran',
    text: " Don't ever do that because you can get to a point where recovering from the burnout is not recovering from the burnout anymore and it's recovering from the depression."
  },
  {
    startTime: 4125.238,
    person: 'Fran',
    text: ' So because you are trying to you are trying to protect people that first of all they never asked you to protect them.'
  },
  { startTime: 4136.518, person: 'Fran', text: " That's the first thing." },
  {
    startTime: 4137.498,
    person: 'Fran',
    text: " You're doing it just because you want to and you feel that you should be good."
  },
  {
    startTime: 4142.558,
    person: 'Fran',
    text: " That's like the saviour role like you want to save everyone from the pain and so on."
  },
  {
    startTime: 4150.678,
    person: 'Fran',
    text: ' And secondly, they are very good professionals and adults and so on.'
  },
  {
    startTime: 4155.658,
    person: 'Fran',
    text: " So when they were laid off nobody was like or almost none of them was like hey, let's rush out to find another job."
  },
  { startTime: 4165.998, person: 'Fran', text: ' Most of them were like who cares?' },
  { startTime: 4169.498, person: 'Fran', text: ' Cool.' },
  {
    startTime: 4170.018,
    person: 'Fran',
    text: " I've got holidays now and they were fired in June by the way."
  },
  {
    startTime: 4173.078,
    person: 'Fran',
    text: " So in the beginning of summer like it's been a year now."
  },
  {
    startTime: 4177.638,
    person: 'Fran',
    text: " So most of them thought like cool, let's just have holidays and proper holidays and so on and now slowly find another job at the end of the summer."
  },
  { startTime: 4189.838, person: 'Fran', text: " That was like I've been worried." },
  {
    startTime: 4192.958,
    person: 'Fran',
    text: " I've been worried for all these people when and yeah, they are sad that they've been laid off but they're not worried for their financial situation or anything like that."
  },
  {
    startTime: 4204.758,
    person: 'Fran',
    text: " So don't overload yourself with things that are not your problem."
  },
  { startTime: 4210.178, person: 'Fran', text: ' Right.' },
  { startTime: 4210.598, person: 'Fran', text: " If your team loses a job it's not your problem." },
  {
    startTime: 4213.718,
    person: 'Fran',
    text: " I know it's hard to say but it's not your problem."
  },
  { startTime: 4216.738, person: 'Fran', text: ' Yeah.' },
  { startTime: 4217.258, person: 'Fran', text: " It's their problem." },
  { startTime: 4219.178, person: 'Fran', text: " So it's something they have to solve, not you." },
  {
    startTime: 4221.578,
    person: 'Fran',
    text: ' You can try to make it harder to happen but not at the expense of your own health.'
  },
  { startTime: 4228.558, person: 'Fran', text: " That's what I would say." },
  { startTime: 4230.358, person: 'Fran', text: ' Never at the expense of your own health.' },
  {
    startTime: 4231.998,
    person: 'Karol',
    text: " And you're touching a very, very important topic which I didn't really expect to land in this stream which is mental health."
  },
  {
    startTime: 4243.818,
    person: 'Karol',
    text: ' We discussed that offline that the industry is just a perfect hiding spot for a lot of people with a lot of different disabilities as in ADHD or being on the spectrum of autism.'
  },
  {
    startTime: 4261.478,
    person: 'Karol',
    text: " A lot of the issues we're having we are having in our works especially also burnout and like the comment from you to Bright Hair will burn out middle name, right?"
  },
  { startTime: 4276.058, person: 'Karol', text: ' Is that common?' },
  { startTime: 4276.998, person: 'Karol', text: " Yes, that's very common in the industry." },
  {
    startTime: 4279.438,
    person: 'Karol',
    text: " But it's common also not because the industry is burning us out or the bad leadership or bad management more likely is burning us out."
  },
  {
    startTime: 4291.898,
    person: 'Karol',
    text: " It's because we also suffer from ailments that we are not even aware because our industry and our jobs are great at hiding those."
  },
  {
    startTime: 4301.938,
    person: 'Karol',
    text: ' So, for example, there are actual studies that certain industries like IT, events, etcétera are absolutely great at hiding ADHD.'
  },
  { startTime: 4313.158, person: 'Karol', text: ' People with ADHD can hide there indefinitely.' },
  {
    startTime: 4318.178,
    person: 'Karol',
    text: " But that also means that they will suffer because they don't even know that their ADHD is causing them a lot of problems including that burnout."
  },
  {
    startTime: 4327.258,
    person: 'Karol',
    text: " So, as we're talking about mental health and as a person that I've been diagnosed this year with ADHD, right?"
  },
  {
    startTime: 4340.518,
    person: 'Karol',
    text: " Go seek professional health help and dig into the topic because if you're having depressive thoughts if you're having a burnout that might be just the symptom."
  },
  {
    startTime: 4353.938,
    person: 'Karol',
    text: " That might be just the symptom of the fact that you have ADHD and it's wrecking up your life because you left it unmanaged for too long and you're overburdened with certain things and it starts kicking you in the butt."
  },
  {
    startTime: 4368.798,
    person: 'Karol',
    text: " If you're overstimulated constantly if you're constantly feeling overburdened if you're constantly feeling tired there might be something more to that."
  },
  {
    startTime: 4380.438,
    person: 'Karol',
    text: " It's not only your imposter syndrome kicking you down it's not some sort of a depressive thought or something."
  },
  {
    startTime: 4386.498,
    person: 'Karol',
    text: ' It actually might be something that was hidden because you work in IT because the amount of changes you need to go through oh man ADHD people love changes.'
  },
  {
    startTime: 4400.358,
    person: 'Karol',
    text: " If the environment changes around them in the fast-paced yes I'm really great at that right because I have ADHD we love those changes but then you don't realise that you actually have that."
  },
  {
    startTime: 4412.298,
    person: 'Karol',
    text: " You don't realise that your brain works a little bit different you kind of think that oh everybody has that everybody everybody's brain works the same way."
  },
  {
    startTime: 4420.918,
    person: 'Karol',
    text: " no it doesn't that's not normative that's neuroatypical so for those finding themselves in what Fran just said about burnout about depression about having that kind of a a little bit of a saviour syndrome because what you described in protecting your team was kind of that saviour syndrome there."
  },
  { startTime: 4448.21, person: 'Karol', text: ' Take a look at that.' },
  { startTime: 4450.01, person: 'Karol', text: ' Dig into the topic.' },
  {
    startTime: 4451.49,
    person: 'Karol',
    text: " If you're feeling burnt out, if you're feeling depressive and you feel like it's because of your work, it might not have nothing to do with your work."
  },
  {
    startTime: 4459.31,
    person: 'Karol',
    text: ' Your work might be contributing to the state you are in, but you might be just neuroatypical.'
  },
  {
    startTime: 4465.65,
    person: 'Karol',
    text: " And that's also perfectly fine, but go to a specialist."
  },
  { startTime: 4469.63, person: 'Fran', text: ' Yep, exactly.' },
  { startTime: 4471.97, person: 'Fran', text: ' I agree with that.' },
  {
    startTime: 4473.53,
    person: 'Fran',
    text: " And that links back to what I was saying that this psychological safety and organisations, like it's not just for experimenting."
  },
  {
    startTime: 4485.43,
    person: 'Fran',
    text: " It's not just for, you know, for adopting a new technology and so on."
  },
  {
    startTime: 4488.49,
    person: 'Fran',
    text: " It's also for feeling this burnout, which by the way, I would like to clarify, burnout is not a clinical term, right?"
  },
  {
    startTime: 4499.05,
    person: 'Fran',
    text: ' This is a beautiful name we invented to describe depression.'
  },
  { startTime: 4505.17, person: 'Fran', text: ' So that is depression, right?' },
  {
    startTime: 4506.99,
    person: 'Fran',
    text: ' So when you feel burnout, depending on the stage of it, you might be in the beginning of a depression, you might be like straight into a depression.'
  },
  { startTime: 4517.63, person: 'Fran', text: " So let's call it for what it is." },
  {
    startTime: 4520.31,
    person: 'Fran',
    text: " It's cool to call it burnout because most people are searching for this word, but let's call it also for what it is."
  },
  { startTime: 4527.15, person: 'Fran', text: ' The clinical term is depression, right?' },
  { startTime: 4530.47, person: 'Fran', text: ' So search for help.' },
  { startTime: 4531.77, person: 'Fran', text: " That's what I would say." },
  {
    startTime: 4533.95,
    person: 'Fran',
    text: " And yeah, and if you are a manager, if you are a team lead or something, or you're managing people, I'm not gonna say that you should be acting as a psychologist, because that's probably not your problem, again, but at least give them space for expressing their thoughts openly."
  },
  {
    startTime: 4563.03,
    person: 'Fran',
    text: ' And if they need help and the company supports it, like for instance, paying for the treatment, paying for the therapy sessions.'
  },
  { startTime: 4571.79, person: 'Karol', text: ' Paying for coaching, ADHD coaching sessions.' },
  { startTime: 4576.67, person: 'Fran', text: ' Paying for holidays.' },
  {
    startTime: 4578.01,
    person: 'Fran',
    text: ' Like for instance, I remember a friend of mine, like he was in my team.'
  },
  {
    startTime: 4583.39,
    person: 'Fran',
    text: ' He was, I immediately detected him to be like, like super, like about to collapse, you know?'
  },
  {
    startTime: 4591.61,
    person: 'Fran',
    text: ' And he was not taking holidays because in his own words, I have to finish this.'
  },
  {
    startTime: 4598.51,
    person: 'Fran',
    text: " I have to, and I said, no, no, you don't have to."
  },
  { startTime: 4601.71, person: 'Fran', text: " It's good if you do it." },
  { startTime: 4603.41, person: 'Fran', text: " It's good if it happens, but you don't have to." },
  { startTime: 4606.63, person: 'Fran', text: " You don't have to finish this." },
  { startTime: 4607.97, person: 'Fran', text: " We're an open source project." },
  {
    startTime: 4609.53,
    person: 'Fran',
    text: " It's okay if you need this for the community to complete it, to contribute and so on."
  },
  {
    startTime: 4614.53,
    person: 'Fran',
    text: " And if it doesn't happen this summer and it has to happen next summer, that's completely fine."
  },
  { startTime: 4620.03, person: 'Fran', text: " We're not a product company." },
  { startTime: 4621.21, person: 'Fran', text: " We're not trying to sell anything." },
  { startTime: 4622.47, person: 'Fran', text: " We're building an open source project." },
  {
    startTime: 4624.99,
    person: 'Fran',
    text: ' So if something is not developed as fast as you like, then maybe we should focus in inviting more people to join our community and contribute more, not you doubling down the hours and the effort you put in, right?'
  },
  {
    startTime: 4639.59,
    person: 'Fran',
    text: ' So, and I sent him like four weeks straight into holidays, like finish whatever you have a time today.'
  },
  { startTime: 4648.71, person: 'Fran', text: " Tomorrow you're on holidays already." },
  {
    startTime: 4650.13,
    person: 'Fran',
    text: " And I don't want to see you connecting for weeks, right?"
  },
  {
    startTime: 4652.55,
    person: 'Fran',
    text: ' He came back recovered and with a mind clear like shit, I was like so deep into this that I was even like believing that this was all my responsibility.'
  },
  { startTime: 4664.83, person: 'Fran', text: ' Yeah, down the rabbit hole you go.' },
  { startTime: 4666.23, person: 'Fran', text: ' Down the rabbit hole exactly.' },
  {
    startTime: 4668.33,
    person: 'Fran',
    text: " And so this is something that I also ask managers whenever they detect this kind of things, protect your team, don't protect the company."
  },
  { startTime: 4676.55, person: 'Karol', text: ' Right.' },
  {
    startTime: 4677.19,
    person: 'Fran',
    text: " I mean, if you protect your team, you're going to protect the company anyway."
  },
  {
    startTime: 4680.63,
    person: 'Fran',
    text: " So, but don't look up, look down, look to your team, protect them, right?"
  },
  {
    startTime: 4686.83,
    person: 'Fran',
    text: ' Because in the end, the company is going to fire you someday, right?'
  },
  { startTime: 4693.87, person: 'Karol', text: " You're just an asset that is easily removable." },
  {
    startTime: 4697.47,
    person: 'Fran',
    text: " Whatever company you work for, they're going to either you're going to quit or they're going to remove you."
  },
  {
    startTime: 4703.27,
    person: 'Fran',
    text: " So protect your team because they're probably their colleagues as well."
  },
  {
    startTime: 4706.81,
    person: 'Fran',
    text: " And also for humanitarian reasons, don't let people suffer for the sake of just a few millionaires, right?"
  },
  {
    startTime: 4716.97,
    person: 'Fran',
    text: " I don't care about that, but I'm a little bit punk here, I will say."
  },
  {
    startTime: 4720.81,
    person: 'Karol',
    text: ' But you know what, from my own experience, when I learned that I have ADHD and I started sharing and talking about that with people, and I told that over a team meeting with my previous employer.'
  },
  {
    startTime: 4737.23,
    person: 'Karol',
    text: " And that was very interesting that all of a sudden I had pings on Slack from people I didn't even know at the time in the company."
  },
  { startTime: 4749.66, person: 'Karol', text: ' They were like, hey, I heard you have ADHD.' },
  {
    startTime: 4752.82,
    person: 'Karol',
    text: " I also have ADHD, but I haven't come out of the closet."
  },
  {
    startTime: 4760.31,
    person: 'Karol',
    text: " Nobody knows, but I want you to know because you have ADHD so you'll understand."
  },
  {
    startTime: 4766.73,
    person: 'Karol',
    text: " And there was so many people that didn't feel psychologically safe in the company to be themselves and to be open about themselves."
  },
  {
    startTime: 4780.15,
    person: 'Karol',
    text: ' So instead of being open about themselves, we just basically created an internal community of people with ADHD.'
  },
  {
    startTime: 4790.03,
    person: 'Karol',
    text: ' And that worked to an extent because we started doing body doubling sessions, etcétera, to just help us work through certain blocks, right?'
  },
  { startTime: 4800.07, person: 'Fran', text: " You don't feel alone as well." },
  {
    startTime: 4801.77,
    person: 'Karol',
    text: ' And then you feel that you belong to somewhere, right?'
  },
  { startTime: 4805.77, person: 'Karol', text: " But it's very difficult." },
  {
    startTime: 4808.07,
    person: 'Karol',
    text: ' The psychological safety topic is a very broad topic.'
  },
  {
    startTime: 4813.21,
    person: 'Karol',
    text: ' And there are so many reasons why somebody might not feel safe psychologically in a company and then act out based on that lack of safety and create even more troubles in the core topic that we were talking about, for example, so adoption of event-driven.'
  },
  { startTime: 4834.49, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 4834.65,
    person: 'Fran',
    text: ' Yeah, so let me get back because I was reading the comments.'
  },
  { startTime: 4842.97, person: 'Fran', text: ' And we have some questions.' },
  { startTime: 4846.29, person: 'Karol', text: ' We have some really good technical questions.' },
  {
    startTime: 4848.51,
    person: 'Karol',
    text: ' And I think we can jump to another point of a discussion, meaning the evolution of AsyncAPI, which some of those questions would be very fitting.'
  },
  {
    startTime: 4862.01,
    person: 'Karol',
    text: ' So let me quickly scroll that up because I found one that was somewhere at the beginning of.'
  },
  { startTime: 4869.41, person: 'Fran', text: ' Yeah, Aleksandr, I have first question.' },
  { startTime: 4871.71, person: 'Karol', text: ' Yes, there we go.' },
  { startTime: 4875.67, person: 'Karol', text: ' Yes, cloud event specification.' },
  { startTime: 4880.45, person: 'Fran', text: " If it's, you want to reply?" },
  { startTime: 4885.09, person: 'Karol', text: ' Go ahead.' },
  {
    startTime: 4885.83,
    person: 'Karol',
    text: " I mean, it's about included as a recommendation to AsyncAPI."
  },
  {
    startTime: 4891.09,
    person: 'Karol',
    text: ' I have nothing to do with AsyncAPI at this point.'
  },
  { startTime: 4895.23, person: 'Fran', text: " I'll say it's mature enough, yes." },
  {
    startTime: 4899.93,
    person: 'Fran',
    text: " I'm not sure how widely adopted it is right now, but I think I see it more and more, which is good."
  },
  {
    startTime: 4908.93,
    person: 'Fran',
    text: ' So everything that, whatever it is sticking to standard is always good.'
  },
  { startTime: 4915.91, person: 'Fran', text: ' So I always celebrate that.' },
  { startTime: 4919.49, person: 'Fran', text: ' Now I must clarify something.' },
  {
    startTime: 4921.55,
    person: 'Fran',
    text: " Some people think it's either cloud events or AsyncAPI, and they are complimentary."
  },
  { startTime: 4926.39, person: 'Fran', text: ' We actually tackle different problems, right?' },
  {
    startTime: 4930.11,
    person: 'Fran',
    text: ' So I wrote a blog post about it in the AsyncAPI blog, because I found out at some point people were like, even like throwing fire at us, right?'
  },
  {
    startTime: 4940.53,
    person: 'Fran',
    text: ' Like, hey, come on, say something bad about cloud events.'
  },
  { startTime: 4944.29, person: 'Fran', text: ' And some hot take about it.' },
  {
    startTime: 4947.61,
    person: 'Fran',
    text: " And it's like, no, I'm not gonna say something bad because I always recommended myself."
  },
  {
    startTime: 4951.05,
    person: 'Fran',
    text: ' I was, when I was consulting with Adidas, I was helping them to adopt AsyncAPI.'
  },
  {
    startTime: 4960.53,
    person: 'Fran',
    text: ' They were using Kafka as well, and they were already using cloud events.'
  },
  {
    startTime: 4965.45,
    person: 'Fran',
    text: " And I saw it in action, and I think it's pretty cool."
  },
  { startTime: 4969.37, person: 'Fran', text: ' So let me clarify.' },
  {
    startTime: 4970.59,
    person: 'Fran',
    text: " So cloud events, it's defining a, what's it called, like the envelope?"
  },
  { startTime: 4978.01, person: 'Fran', text: ' The envelope of the data, right?' },
  {
    startTime: 4980.11,
    person: 'Fran',
    text: " Pretty much, it's not exactly that, but it's pretty much the envelope of the data."
  },
  {
    startTime: 4985.07,
    person: 'Fran',
    text: ' I think about it like enveloped in the post system, in the postal system, right?'
  },
  { startTime: 4990.59, person: 'Fran', text: " You don't send your letter straight away, right?" },
  {
    startTime: 4995.79,
    person: 'Fran',
    text: ' You put it inside a letter, right, an envelope, sorry.'
  },
  {
    startTime: 5000.29,
    person: 'Fran',
    text: ' And then you send the envelope with the letter inside, right?'
  },
  { startTime: 5005.25, person: 'Fran', text: " So that's pretty much it." },
  { startTime: 5006.61, person: 'Fran', text: " It's like, it's a common envelope." },
  {
    startTime: 5009.89,
    person: 'Fran',
    text: " It's a format so that all your messages across your system, they all follow the same structure when it comes to metadata."
  },
  {
    startTime: 5019.75,
    person: 'Fran',
    text: ' When it comes to specific data, then each one is different, right?'
  },
  { startTime: 5025.83, person: 'Fran', text: ' And not even cloud event patches in that point.' },
  {
    startTime: 5029.17,
    person: 'Fran',
    text: " Cloud events has a field that it's called data, and this is free form."
  },
  { startTime: 5032.99, person: 'Fran', text: ' You can put there whatever you want.' },
  {
    startTime: 5035.61,
    person: 'Fran',
    text: " Now, the funny thing about this is that AsyncAPI helps you define, helps you define the communication, not the communication, the messages that your application, let's think about microservices, for instance."
  },
  {
    startTime: 5052.99,
    person: 'Fran',
    text: ' Your service is sending and or receiving from a topic, from a broker, from so on, right?'
  },
  { startTime: 5059.25, person: 'Fran', text: ' You define this communication.' },
  {
    startTime: 5060.75,
    person: 'Fran',
    text: ' But when it comes to defining the message itself, the message piece, there is a field called payload, right?'
  },
  { startTime: 5067.13, person: 'Fran', text: ' And this one is free form.' },
  {
    startTime: 5069.53,
    person: 'Fran',
    text: " So we don't dictate how the payload of a message should look like, right?"
  },
  { startTime: 5074.41, person: 'Fran', text: ' This is free form.' },
  { startTime: 5075.35, person: 'Fran', text: ' You can put there whatever you want.' },
  {
    startTime: 5076.71,
    person: 'Fran',
    text: ' Actually, in the JSON schema definition, this is, the value is true, because we always want to pass the validation.'
  },
  { startTime: 5082.87, person: 'Fran', text: " Like, we don't validate it." },
  {
    startTime: 5084.17,
    person: 'Fran',
    text: " It's always, whatever you put there is valid, right?"
  },
  { startTime: 5086.59, person: 'Fran', text: " We don't want to get there." },
  {
    startTime: 5088.35,
    person: 'Fran',
    text: ' So there in the payload is where, payload and also headers as well, is where cloud events belong, right?'
  },
  { startTime: 5097.35, person: 'Fran', text: ' The envelope and as the envelope of the data.' },
  {
    startTime: 5100.81,
    person: 'Fran',
    text: " So actually, I think there's a pull request or an issue discussion right now in AsyncAPI."
  },
  {
    startTime: 5108.15,
    person: 'Fran',
    text: ' If I recall correctly, something I started at some point, I want to integrate the two standards in a better way.'
  },
  {
    startTime: 5114.35,
    person: 'Fran',
    text: " Like if you're using cloud events, you should be able to somehow natively say it in AsyncAPI."
  },
  { startTime: 5122.65, person: 'Fran', text: " I'm using cloud events." },
  {
    startTime: 5123.61,
    person: 'Fran',
    text: ' The format of the message is cloud events because the cloud events format itself is then going to tell you which format your data is in.'
  },
  { startTime: 5131.51, person: 'Fran', text: ' Is it XML?' },
  { startTime: 5132.21, person: 'Fran', text: ' Is it JSON?' },
  { startTime: 5132.87, person: 'Fran', text: ' Is it following certain schema definition?' },
  {
    startTime: 5136.11,
    person: 'Fran',
    text: ' So it will be cool if they could, you can already use both together, but it will be cool if it could be blended even better, right?'
  },
  { startTime: 5144.95, person: 'Karol', text: ' Right.' },
  { startTime: 5145.61, person: 'Fran', text: ' So, so yeah, so that is' },
  {
    startTime: 5148.49,
    person: 'Karol',
    text: ' Just to be clear on the article, because I did some quick Google searching, would that be somewhere around May 2019?'
  },
  {
    startTime: 5156.51,
    person: 'Fran',
    text: ' Yes, but the thing, I have to update this article at some point.'
  },
  { startTime: 5160.93, person: 'Fran', text: " It's not exactly how it's done anymore." },
  {
    startTime: 5164.93,
    person: 'Fran',
    text: ' But you see, like six years now, and I was already recommending this.'
  },
  { startTime: 5170.59, person: 'Karol', text: ' Yeah.' },
  { startTime: 5171.19, person: 'Karol', text: " So that's the original article to be updated." },
  {
    startTime: 5175.79,
    person: 'Karol',
    text: ' I see the differentiators in the description is there, as you just said it.'
  },
  {
    startTime: 5181.51,
    person: 'Karol',
    text: " Maybe there would be probably some discrepancies over the past six years because things have changed, but that's pretty much it."
  },
  {
    startTime: 5191.15,
    person: 'Fran',
    text: ' At this point, I was exploring and telling people the different ways you could use both, different ways to use both.'
  },
  {
    startTime: 5198.23,
    person: 'Fran',
    text: " Now there are, let's say, best practises for using both that are not described in this article, because now in version three of the spec, things have changed a little bit, so now it's easier."
  },
  { startTime: 5210.09, person: 'Fran', text: ' We have traits.' },
  {
    startTime: 5211.65,
    person: 'Fran',
    text: ' I think we had traits at that point, but there are other ways to do it.'
  },
  {
    startTime: 5216.09,
    person: 'Fran',
    text: " Honestly, on the top of my mind, I don't recall how people are doing it right now, but there are, let's say, best practises."
  },
  { startTime: 5223.65, person: 'Fran', text: ' So, yes.' },
  { startTime: 5227.34, person: 'Karol', text: ' All right.' },
  {
    startTime: 5227.9,
    person: 'Fran',
    text: " It's not like that, like I described in this article."
  },
  { startTime: 5232.64, person: 'Karol', text: ' Yeah, but, you know, things change.' },
  { startTime: 5234.7, person: 'Karol', text: ' Article has six years.' },
  {
    startTime: 5236.56,
    person: 'Karol',
    text: " That's only obvious that this will no longer be fully up to date, so, yeah."
  },
  {
    startTime: 5242.98,
    person: 'Karol',
    text: ' It will require a little bit of a fixing up in that sense.'
  },
  { startTime: 5250.74, person: 'Karol', text: ' All right.' },
  { startTime: 5252.12, person: 'Karol', text: " Let's see." },
  {
    startTime: 5252.72,
    person: 'Karol',
    text: ' There were some, I think, oh, quite long questions from Maksim.'
  },
  { startTime: 5258.86, person: 'Karol', text: ' Really a packed one.' },
  {
    startTime: 5261.86,
    person: 'Karol',
    text: ' Best practises for designing data models for messages.'
  },
  { startTime: 5266.74, person: 'Karol', text: " Ooh, that's a, ooh, la, la, la." },
  { startTime: 5268.96, person: 'Fran', text: ' Canonical data model.' },
  { startTime: 5270.26, person: 'Karol', text: " That's packed." },
  {
    startTime: 5273.04,
    person: 'Karol',
    text: " My personal take is I'm not a fan of canonical data models."
  },
  { startTime: 5278.38, person: 'Karol', text: ' Never will be.' },
  { startTime: 5279.54, person: 'Karol', text: " I've seen that happen." },
  {
    startTime: 5282.22,
    person: 'Karol',
    text: ' The larger the org, the worse it gets in canonical data models.'
  },
  { startTime: 5287.32, person: 'Fran', text: ' Or if you do it, you do it as an afterthought.' },
  {
    startTime: 5290.02,
    person: 'Fran',
    text: " So, after you've been having, let's say, probably hundreds or thousands of message types, and you notice a pattern, maybe you standardise it."
  },
  {
    startTime: 5306.04,
    person: 'Fran',
    text: " Because you make it a pattern, because it's already a pattern anyways."
  },
  { startTime: 5309.72, person: 'Fran', text: ' So, cool.' },
  { startTime: 5310.5, person: 'Fran', text: ' In that case, cool.' },
  {
    startTime: 5311.66,
    person: 'Fran',
    text: " But if you do it up front, you're probably gonna be restricting yourself."
  },
  { startTime: 5317.16, person: 'Fran', text: ' And unnecessarily.' },
  {
    startTime: 5319.92,
    person: 'Karol',
    text: " That's where I am a fan of domain-driven design and bounded contexts within interoperability topics."
  },
  { startTime: 5326.46, person: 'Fran', text: ' Exactly.' },
  {
    startTime: 5327.24,
    person: 'Karol',
    text: ' Because then we can define each object several times for each bounded context or each domain separately.'
  },
  {
    startTime: 5335.34,
    person: 'Karol',
    text: ' So, a definition of a customer in terms of a customer domain will be a different customer defined in the order domain.'
  },
  { startTime: 5342.38, person: 'Fran', text: ' Yeah, correct.' },
  {
    startTime: 5343,
    person: 'Karol',
    text: " Different attributes, even that's still the same core object, core data."
  },
  { startTime: 5349.18, person: 'Fran', text: " It's still the customer, yeah." },
  {
    startTime: 5350.78,
    person: 'Fran',
    text: " But it's a different representation of the data, yeah."
  },
  {
    startTime: 5354.22,
    person: 'Karol',
    text: ' Different context of usage, which makes it better.'
  },
  {
    startTime: 5358,
    person: 'Fran',
    text: ' I will link it to the previous question about cloud events.'
  },
  { startTime: 5361.08, person: 'Fran', text: " It's needed." },
  {
    startTime: 5361.88,
    person: 'Fran',
    text: " So, I'm seeing many people defining their canonical data models using cloud events as well."
  },
  { startTime: 5370.52, person: 'Fran', text: ' Because cloud events is extensible.' },
  {
    startTime: 5372.66,
    person: 'Fran',
    text: ' So, you can add your fields, your own fields, whatever you want.'
  },
  {
    startTime: 5376.08,
    person: 'Fran',
    text: ' So, you just have to respect certain fields that are mandatory, I think.'
  },
  {
    startTime: 5380.08,
    person: 'Fran',
    text: ' Maybe one or two are mandatory, if I recall correctly.'
  },
  {
    startTime: 5383.28,
    person: 'Fran',
    text: ' The rest are just optional and you can add more of your own.'
  },
  { startTime: 5388.08, person: 'Fran', text: ' So, some people are opting for that.' },
  {
    startTime: 5392.48,
    person: 'Fran',
    text: " It's not exactly a canonical data model, but it gets close."
  },
  { startTime: 5397.04, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 5398.8,
    person: 'Karol',
    text: ' And a twist, which is a lot shorter of a question.'
  },
  {
    startTime: 5403.3,
    person: 'Karol',
    text: ' Sharing resources data models between OpenAPI spec and AsyncAPI.'
  },
  { startTime: 5409.33, person: 'Karol', text: ' Ooh.' },
  { startTime: 5410.3, person: 'Fran', text: ' Many people do that, yeah.' },
  {
    startTime: 5412.24,
    person: 'Karol',
    text: " I think that's, in general, that's not a bad idea."
  },
  {
    startTime: 5415.44,
    person: 'Karol',
    text: " Especially if you're having a integration platform, and especially in API-led architecture where you can actually do the domain partitioning."
  },
  {
    startTime: 5426.92,
    person: 'Karol',
    text: ' And some of your services are, at the same time, synchronous and asynchronous, because you have a lot of orchestration and different things are happening within the composition layer.'
  },
  { startTime: 5441.84, person: 'Fran', text: ' Yeah.' },
  {
    startTime: 5442.08,
    person: 'Karol',
    text: ' That means that that sharing would be actually a very good thing.'
  },
  {
    startTime: 5446.48,
    person: 'Fran',
    text: " I actually recommend it because, and actually, the reason why AsyncAPI is so similar, it's still so similar to OpenAPI, is because we want to be, both of them, as interoperable as possible."
  },
  {
    startTime: 5459.48,
    person: 'Fran',
    text: " To be, as a fun fact, while we were designing version three of the spec, that is, it's the current version of AsyncAPI, we were even considering if there could be a way to make it not the same as OpenAPI, because we were already convinced that we had to change certain things in the spec, but to, in coordination with OpenAPI, which we are always in constant touch, the two communities, right?"
  },
  {
    startTime: 5497.27,
    person: 'Fran',
    text: " So to tell them that, hey, we're going in this direction because of this, this, and that, we're putting operations on the root level of the spec instead of inside the channels, or like, for instance, if you're familiar with OpenAPI, they have the operations, get, put, post, and so on, inside the path, right?"
  },
  { startTime: 5516.29, person: 'Karol', text: ' Yeah.' },
  { startTime: 5516.91, person: 'Fran', text: ' Instead of at the root level.' },
  {
    startTime: 5518.15,
    person: 'Fran',
    text: ' But there were some, already some people in the OpenAPI community saying, we should move the operations to the root level and then link them with $REF and so on, right?'
  },
  {
    startTime: 5527.63,
    person: 'Fran',
    text: ' So instead of having them nested inside paths and so on.'
  },
  { startTime: 5533.79, person: 'Fran', text: " That's the direction we took for AsyncAPI." },
  {
    startTime: 5535.83,
    person: 'Fran',
    text: ' So operations are now in the root level as a first-class citizen, as people call it, right?'
  },
  {
    startTime: 5543.83,
    person: 'Fran',
    text: ' And we were thinking, if we managed to convince the OpenAPI folks to do the same thing, at some point, we could even, if not converge into a single spec, we could build really close, really, really close, right?'
  },
  { startTime: 5559.73, person: 'Karol', text: ' Right.' },
  {
    startTime: 5561.89,
    person: 'Karol',
    text: ' But this is a philosophical problem because if you look at the days of SOA and SOAP services, SOAP had a very different philosophy because SOAP was primarily used to build business services.'
  },
  {
    startTime: 5582.73,
    person: 'Karol',
    text: " So they didn't represent an object, they represent a function."
  },
  {
    startTime: 5587.63,
    person: 'Karol',
    text: " While if we're looking at REST, REST by nature is supposed to represent an object and functions on that specific object."
  },
  {
    startTime: 5597.45,
    person: 'Karol',
    text: ' So moving the operations down to that level would shift back to, kind of shift back to business services rather than representing objects.'
  },
  {
    startTime: 5612.67,
    person: 'Karol',
    text: " And that philosophically might rub people the wrong way when we're looking at these kinds of services."
  },
  {
    startTime: 5622.87,
    person: 'Karol',
    text: ' Of course, this would be against REST principles, right?'
  },
  { startTime: 5626.77, person: 'Fran', text: " That's my point." },
  { startTime: 5627.47, person: 'Fran', text: ' So OpenAPI is not a spec for REST APIs.' },
  { startTime: 5633.25, person: 'Fran', text: ' It is not.' },
  { startTime: 5634.17, person: 'Karol', text: ' Very true.' },
  {
    startTime: 5634.67,
    person: 'Karol',
    text: ' But the underlying philosophy is coming from the REST specification.'
  },
  { startTime: 5640.19, person: 'Fran', text: ' Yes.' },
  {
    startTime: 5640.77,
    person: 'Fran',
    text: " The thing is that it's, I will call it like it's for HTTP APIs."
  },
  { startTime: 5644.31, person: 'Fran', text: " That's it." },
  { startTime: 5644.89, person: 'Karol', text: ' Sure, yeah.' },
  {
    startTime: 5646.01,
    person: 'Fran',
    text: " In most cases, I would say it's just a resource-based HTTP APIs."
  },
  { startTime: 5651.85, person: 'Fran', text: " And in some cases, it's RPC APIs." },
  {
    startTime: 5655.73,
    person: 'Fran',
    text: ' Like you will do with GraphQL, but instead of GraphQL, you use your own syntax with endpoints containing the action and so on, which is pretty common as well.'
  },
  {
    startTime: 5666.95,
    person: 'Karol',
    text: ' But that would be a very interesting evolution to actually see that shift back to that.'
  },
  {
    startTime: 5672.85,
    person: 'Fran',
    text: " My point with this here is that we are, we've been trying."
  },
  {
    startTime: 5676.03,
    person: 'Fran',
    text: " We're not trying right now, but we've been trying."
  },
  {
    startTime: 5678.77,
    person: 'Fran',
    text: ' The thing is that this is a little bit like forcing the things to match together when they are not the same thing, right?'
  },
  {
    startTime: 5686.99,
    person: 'Fran',
    text: " And it's not even representing the same kind of world."
  },
  { startTime: 5690.33, person: 'Fran', text: " So it's a different thing altogether." },
  {
    startTime: 5692.73,
    person: 'Fran',
    text: " Now, whatever can be reused, like schema definitions and so on, they're still the same, mostly the same."
  },
  { startTime: 5700.97, person: 'Fran', text: ' Actually, not the same.' },
  {
    startTime: 5702.57,
    person: 'Fran',
    text: ' You can use, so OpenAPI uses the latest JSON schema draft.'
  },
  {
    startTime: 5710.17,
    person: 'Fran',
    text: " But the most used OpenAPI version, which is 2.something or the three, I think it's still 2.something. It's still swagger."
  },
  { startTime: 5719.93, person: 'Fran', text: ' The most used.' },
  { startTime: 5723.07, person: 'Fran', text: " It's on JSON schema draft four." },
  {
    startTime: 5726.53,
    person: 'Fran',
    text: ' You can use any of these schemas versions with JSON KPI for that very reason.'
  },
  { startTime: 5732.01, person: 'Fran', text: ' So they were interoperable, right?' },
  { startTime: 5736.79, person: 'Fran', text: ' So yeah.' },
  {
    startTime: 5737.67,
    person: 'Fran',
    text: " So we actually recommend it because it's a really good idea because think about it like, or picture this example."
  },
  {
    startTime: 5745.49,
    person: 'Fran',
    text: ' You have a REST API or an HTTP API, you receive a request, and as a result, you publish a message to a broker, right?'
  },
  {
    startTime: 5753.03,
    person: 'Fran',
    text: ' As a result, as a side effect of this request, you publish a message to the broker containing some information that was in the request body, right?'
  },
  {
    startTime: 5762.87,
    person: 'Fran',
    text: ' Say, for instance, you are signing up a user or something like that.'
  },
  {
    startTime: 5765.67,
    person: 'Karol',
    text: " I mean, that's a very common use case in API led architecture where you have the channel layer, the first layer, or as in MuleSoft, they call it the experience layer."
  },
  {
    startTime: 5776.89,
    person: 'Karol',
    text: ' You basically call a REST service, and then that translates into a synchronous call forwarding that event.'
  },
  {
    startTime: 5784.77,
    person: 'Karol',
    text: " The request is actually a disguised event, and the only reason why it's done over a synchronous call is because we want to give back the information that it was accepted for processing to that system so that system can move on."
  },
  {
    startTime: 5805.35,
    person: 'Karol',
    text: " And it's easier to consume a HTTP API than to figure out how do we connect directly to the broker from each separate team to learn that broker."
  },
  {
    startTime: 5819.27,
    person: 'Karol',
    text: ' And then you move that complexity to the integration platform to learn how to use the broker and facilitate that use.'
  },
  { startTime: 5825.33, person: 'Karol', text: " So that's a very common use case." },
  {
    startTime: 5826.95,
    person: 'Karol',
    text: ' And also a common use case is right now popping up in API managements where they offer protocol mediation to mediate from a REST call to an event or from an event to a REST call, like a webhook.'
  },
  {
    startTime: 5844.21,
    person: 'Fran',
    text: " In fact, if you are building with a mindset of microservices, you might have an API that is a REST API or an HTTP API that receives a POST call, let's say, slash sign up, whatever, sign user up or whatever."
  },
  {
    startTime: 5864.11,
    person: 'Fran',
    text: ' This microservice might have its own database where it stores the user that just have signed up right now, right?'
  },
  {
    startTime: 5875.77,
    person: 'Fran',
    text: ' And as a result, either the microservice or the database triggers a change data capture event, right?'
  },
  {
    startTime: 5884.19,
    person: 'Fran',
    text: " To the broker saying, hey, there's a new user in the database for whoever is interested in this, right?"
  },
  { startTime: 5891.31, person: 'Fran', text: ' So this is very useful.' },
  { startTime: 5893.29, person: 'Fran', text: " And it's constrained to this." },
  {
    startTime: 5898.11,
    person: 'Fran',
    text: " It wouldn't even make sense for people to connect to the broker to consume this kind of events from a browser or something like that because why would you?"
  },
  { startTime: 5907.47, person: 'Fran', text: ' You want to have immediate feedback, right?' },
  {
    startTime: 5909.61,
    person: 'Fran',
    text: ' You want to have immediate feedback if the operation succeeded or not.'
  },
  {
    startTime: 5916.05,
    person: 'Fran',
    text: " And you have the database there, you don't have to send the message to some other system that will process this message at some point and will come back with a response."
  },
  { startTime: 5925.35, person: 'Fran', text: " No, no, no, it's just here now." },
  { startTime: 5928.03, person: 'Fran', text: " It's either saving it into the database or not." },
  { startTime: 5930.97, person: 'Fran', text: ' Cool, give me the response immediately.' },
  { startTime: 5932.75, person: 'Fran', text: ' So that makes sense.' },
  {
    startTime: 5934.13,
    person: 'Fran',
    text: " And then post this event for whoever else, let's say, welcome email, analytics, whatever."
  },
  {
    startTime: 5942.39,
    person: 'Fran',
    text: ' Any other reason you might want to know that a user, when a user has signed up, right?'
  },
  {
    startTime: 5948.85,
    person: 'Karol',
    text: " Yeah, that's an issue of system responsiveness as an architectural characteristic."
  },
  {
    startTime: 5954.93,
    person: 'Karol',
    text: " So it doesn't really matter if you put that in a database for sourcing later or you put that on a topic with a persistence."
  },
  {
    startTime: 5962.63,
    person: 'Karol',
    text: ' You go on with your day, but the system goes on because it gets a response or an acknowledgement that something was published.'
  },
  {
    startTime: 5972.07,
    person: 'Karol',
    text: " It doesn't matter then how it's later processed."
  },
  {
    startTime: 5975.17,
    person: 'Karol',
    text: " And that's the lovely quality of putting the event broker as a transition between two systems to decouple them on that."
  },
  { startTime: 5987.89, person: 'Karol', text: ' Oh my God, time coupling, temporal coupling.' },
  { startTime: 5993.89, person: 'Karol', text: " So in that sense, it's very lovely." },
  { startTime: 5996.99, person: 'Karol', text: " It's very useful." },
  {
    startTime: 5999.43,
    person: 'Karol',
    text: " All right, Fran, we've been talking for the last one and a half hour, well, nearly 1:40."
  },
  {
    startTime: 6005.97,
    person: 'Fran',
    text: ' And if we stay here for two more hours, we can keep talking.'
  },
  { startTime: 6008.71, person: 'Karol', text: ' Oh, we could go on and on and on and on and on.' },
  {
    startTime: 6013.77,
    person: 'Karol',
    text: ' So dear audience, I see we still have an audience.'
  },
  { startTime: 6017.55, person: 'Karol', text: " That's awesome." },
  { startTime: 6018.51, person: 'Fran', text: " That's awesome, yeah." },
  { startTime: 6019.45, person: 'Karol', text: " That's awesome." },
  { startTime: 6020.11, person: 'Fran', text: ' Some people stay with us years.' },
  { startTime: 6021.25, person: 'Karol', text: ' Yeah, I love it, I love it.' },
  {
    startTime: 6024.49,
    person: 'Karol',
    text: ' So kudos to all of you who are staying still with us and still watching us.'
  },
  { startTime: 6029.97, person: 'Karol', text: ' If not, you can always watch the recording.' },
  {
    startTime: 6032.77,
    person: 'Karol',
    text: ' Before we jump into the QA, I would like to have some announcements.'
  },
  {
    startTime: 6038.17,
    person: 'Karol',
    text: ' And one of the announcements is that we already have a second live stream planned.'
  },
  {
    startTime: 6042.59,
    person: 'Karol',
    text: ' And the second live stream is not gonna be about tech.'
  },
  {
    startTime: 6045.67,
    person: 'Karol',
    text: " It's gonna be about recruitment, which I think it's gonna be very, very interesting."
  },
  {
    startTime: 6051.57,
    person: 'Karol',
    text: " We're gonna be talking with Gabby Preston-Pfeiffer and Philip Poynton."
  },
  {
    startTime: 6055.53,
    person: 'Karol',
    text: " They're really well-versed people calling out the bullshit in IT recruitment."
  },
  {
    startTime: 6062.79,
    person: 'Karol',
    text: ' So, you know, jump in on the 22nd of July to hear them out.'
  },
  { startTime: 6070.75, person: 'Karol', text: " And also, I'll reiterate some things." },
  {
    startTime: 6074.83,
    person: 'Karol',
    text: ' So if you wanna read some articles about enterprise application integration and EDA included, visit bridgingthegap.eu.com or just subscribe to our substack for the sake of it.'
  },
  {
    startTime: 6087.39,
    person: 'Karol',
    text: ' And then if you wanna learn more about AsyncAPI, visit the initiative site.'
  },
  {
    startTime: 6095.69,
    person: 'Karol',
    text: " And if you got hooked on our conversation about the organisational problems or the psychological safety of people and you wanna be a better leader and you wanna actually start addressing those topics, here's a QR code for Fran's book."
  },
  {
    startTime: 6115.65,
    person: 'Karol',
    text: " It's still in the making, but Fran is giving the early bird available so you can take a look and read it, comment it."
  },
  {
    startTime: 6126.35,
    person: 'Karol',
    text: ' I think, Fran, you would welcome all feedback, right?'
  },
  { startTime: 6129.15, person: 'Fran', text: " Yeah, actually, it's already happening." },
  {
    startTime: 6130.65,
    person: 'Fran',
    text: " We're having discussions in Notion about, not a lot, I must say, which is normal, like reading a book and leaving feedback on a book might feel intimidating to some people, not just because of technical knowledge, but also like this guy might think that I'm here, I'm bothering him or something."
  },
  {
    startTime: 6151.75,
    person: 'Fran',
    text: " No, no, no, like I'm used to having, to getting feedback, respectful feedback obviously can construct it."
  },
  {
    startTime: 6157.97,
    person: 'Fran',
    text: " And we're already having some discussions there in Notion with the early readers and it's cool."
  },
  { startTime: 6165.13, person: 'Fran', text: " I've only written three chapters so far." },
  {
    startTime: 6169.61,
    person: 'Fran',
    text: ' If everything goes well, I think there will be 23.'
  },
  { startTime: 6173.65, person: 'Fran', text: ' So yeah, I only have to write 20 more.' },
  { startTime: 6179.73, person: 'Fran', text: ' No pressure.' },
  { startTime: 6181.09, person: 'Karol', text: ' No pressure.' },
  { startTime: 6182.31, person: 'Karol', text: " You're gonna lean pop the hell out of that." },
  { startTime: 6186.31, person: 'Fran', text: " I'm gonna be like lean pop, but a notion, right?" },
  {
    startTime: 6190.21,
    person: 'Karol',
    text: ' Pretty much the same thing, only different medium.'
  },
  { startTime: 6192.03, person: 'Fran', text: ' Exactly.' },
  { startTime: 6195.09, person: 'Fran', text: " But yeah, I'll take off." },
  {
    startTime: 6196.71,
    person: 'Fran',
    text: " I'm taking August off, like from the rest of the work, just to focus on the book and most likely September as well because I want to have it ready by October this year."
  },
  { startTime: 6210.95, person: 'Fran', text: " I hope these words don't bite me in the future." },
  { startTime: 6216.39, person: 'Fran', text: ' Like you said that last year.' },
  {
    startTime: 6220.31,
    person: 'Fran',
    text: " I mean, if I don't publish it by October, bear with me, please."
  },
  { startTime: 6225.55, person: 'Fran', text: " It's my first time writing a book." },
  {
    startTime: 6227.89,
    person: 'Fran',
    text: " So I don't know how to estimate this kind of work because I've never done it."
  },
  { startTime: 6233.01, person: 'Karol', text: " It's difficult." },
  { startTime: 6233.33, person: 'Fran', text: " It's difficult." },
  { startTime: 6234.61, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 6235.15,
    person: 'Fran',
    text: " But yeah, and especially because I'm finding things that I never expected, like having to read papers, you know, about psychology and psychology books and interviewing psychologists and so on."
  },
  { startTime: 6248.35, person: 'Karol', text: " That's difficult." },
  { startTime: 6250.01, person: 'Fran', text: " It's going completely unexpected route." },
  {
    startTime: 6255.19,
    person: 'Karol',
    text: " Which is exciting because you're learning a lot while doing that, so."
  },
  { startTime: 6259.49, person: 'Fran', text: " That's why I'm writing the book." },
  {
    startTime: 6260.89,
    person: 'Fran',
    text: " Like I'm writing the book for me, like I did with this in AsyncAPI."
  },
  {
    startTime: 6264.71,
    person: 'Fran',
    text: ' It was like, so I can learn properly about this by writing it down, right?'
  },
  {
    startTime: 6269.63,
    person: 'Fran',
    text: ' And by interviewing people and by listening to their stories and so on and then sharing with people.'
  },
  {
    startTime: 6276.01,
    person: 'Fran',
    text: " So who knows, maybe in a year or so, I'll have to write a second edition because I made a lot of mistakes."
  },
  { startTime: 6283.09, person: 'Fran', text: ' Who knows?' },
  {
    startTime: 6285.93,
    person: 'Karol',
    text: ' I mean, I just looked through the lovely Fundamentals of Software Architecture by Mark Richards and Neil Ford.'
  },
  { startTime: 6294.19, person: 'Karol', text: ' They just released a second edition.' },
  { startTime: 6296.79, person: 'Karol', text: ' Completely different read.' },
  { startTime: 6298.51, person: 'Karol', text: ' I have the first edition somewhere.' },
  { startTime: 6300.45, person: 'Karol', text: ' Oh yeah, like right here next to me.' },
  { startTime: 6303.33, person: 'Karol', text: ' I stole it.' },
  { startTime: 6303.79, person: 'Fran', text: ' It was still useful there.' },
  {
    startTime: 6305.05,
    person: 'Fran',
    text: ' The first edition was still useful, but now with experience, then you get to make a better book.'
  },
  {
    startTime: 6311.71,
    person: 'Fran',
    text: " It doesn't mean that the first edition is gonna be wrong."
  },
  {
    startTime: 6314.75,
    person: 'Fran',
    text: " It's just that it's probably not gonna be exactly how I want it."
  },
  {
    startTime: 6318.49,
    person: 'Karol',
    text: ' Yeah, they learned a lot and they were like, yep, definitely.'
  },
  { startTime: 6327.41, person: 'Fran', text: ' Cool, man.' },
  { startTime: 6328.79, person: 'Karol', text: ' Yeah, all right.' },
  {
    startTime: 6329.87,
    person: 'Karol',
    text: ' So that said, oh yes, the QR code for the early reader to get access to the book.'
  },
  { startTime: 6338.95, person: 'Karol', text: ' So yes.' },
  {
    startTime: 6341.31,
    person: 'Karol',
    text: ' How that one, sorry, should have deleted the original shipped one from the list.'
  },
  { startTime: 6347.71, person: 'Karol', text: ' It would have been easier.' },
  {
    startTime: 6348.95,
    person: 'Karol',
    text: ' So if you wanna be the early reader and leave friends and comments, just scan the QR, go ahead.'
  },
  {
    startTime: 6356.51,
    person: 'Karol',
    text: " Yeah, it's not a large cost to just join on the process of building that book from scratch."
  },
  { startTime: 6364.47, person: 'Karol', text: " It's interesting to watch, believe me." },
  {
    startTime: 6368.71,
    person: 'Karol',
    text: " That said, we're gonna be closing the session in a moment, but that leaves us open to any questions."
  },
  {
    startTime: 6381.05,
    person: 'Karol',
    text: ' Any QA questions out of the box, out of the blue.'
  },
  { startTime: 6385.15, person: 'Karol', text: ' I mean, we do have one from Aleksandr.' },
  { startTime: 6388.95, person: 'Karol', text: ' End-to-end traceability, batch message splits.' },
  { startTime: 6397.81, person: 'Karol', text: " I can take that one because I've seen that one." },
  {
    startTime: 6400.29,
    person: 'Fran',
    text: " I'm not an expert in traceability, but I know some, I mean, you can take it because."
  },
  {
    startTime: 6404.85,
    person: 'Karol',
    text: " Yeah, it's actually not that complicated as long as you have proper logging, monitoring and observability within your systems."
  },
  {
    startTime: 6412.77,
    person: 'Karol',
    text: ' So basically if you wanna trace your events and you have this kind of a batch scenario where you split it up, you need to just make up a specific pattern, which means that you have some sort of a correlation ID.'
  },
  {
    startTime: 6427.75,
    person: 'Karol',
    text: ' And then when you split it up, just append that correlation ID with additional identifiers of those individual child elements.'
  },
  { startTime: 6437.77, person: 'Karol', text: ' And that makes that traceability really pop.' },
  {
    startTime: 6442.39,
    person: 'Karol',
    text: ' So you can still search all of those elements by using the original batch identifier, the correlation ID there, and then you can search individual child elements by the appended identifier.'
  },
  {
    startTime: 6462.03,
    person: 'Karol',
    text: ' So that will be sufficiently unique because if you use UL ID, that will be very unique, very nice with a timestamp.'
  },
  {
    startTime: 6472.67,
    person: 'Karol',
    text: " And then if you append, you just append, that's not a big problem there, right?"
  },
  { startTime: 6478.95, person: 'Karol', text: " So that's a good one for that." },
  {
    startTime: 6481.17,
    person: 'Fran',
    text: ' And you can define it on AsyncAPI using the correlation ID field on AsyncAPI.'
  },
  { startTime: 6487.37, person: 'Fran', text: " So it's covered." },
  { startTime: 6489.77, person: 'Karol', text: ' Yeah, exactly.' },
  { startTime: 6490.87, person: 'Karol', text: " That's a good thing." },
  {
    startTime: 6492.39,
    person: 'Karol',
    text: " And that's also a very standard thing to do in the OpenAPI spec as well to define those metadata and correlators."
  },
  {
    startTime: 6501.69,
    person: 'Karol',
    text: " Usually for OpenAPI, that's within the HTTP headers, right?"
  },
  { startTime: 6510.93, person: 'Karol', text: " So it's workable." },
  {
    startTime: 6512.47,
    person: 'Karol',
    text: " It's just a matter of figuring out what the mapping is between those, right?"
  },
  { startTime: 6518.87, person: 'Karol', text: ' All right.' },
  {
    startTime: 6520.65,
    person: 'Karol',
    text: ' I know we do have a little bit of a delay between what we see in the stream studio and what is out on LinkedIn and YouTube, but I think we already passed through.'
  },
  {
    startTime: 6536.19,
    person: 'Fran',
    text: ' Yeah, and if not, people leave some questions after.'
  },
  { startTime: 6540.73, person: 'Fran', text: ' Maybe people are watching the recording.' },
  {
    startTime: 6543.07,
    person: 'Fran',
    text: ' If they want to leave some questions, ping me or ping Karol.'
  },
  { startTime: 6549.01, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 6550.25,
    person: 'Fran',
    text: " And if I don't get the notification, please Karol, let me know."
  },
  { startTime: 6552.97, person: 'Fran', text: ' And I will reply after that.' },
  { startTime: 6554.43, person: 'Fran', text: " So it doesn't have to be." },
  { startTime: 6555.63, person: 'Fran', text: ' We can make it asynchronous.' },
  { startTime: 6557.85, person: 'Karol', text: ' Yeah, we can make it asynchronous, exactly.' },
  {
    startTime: 6560.15,
    person: 'Karol',
    text: ' So for all of you wondering and willing to share the stream, or if you found it captivating, the stream will be saved in a raw form on LinkedIn.'
  },
  {
    startTime: 6571.69,
    person: 'Karol',
    text: ' It will be also available on Bridging the Gap YouTube channel.'
  },
  {
    startTime: 6575.93,
    person: 'Karol',
    text: ' I do plan to do a little bit of touch-ups here and there over the stream and release it as a normal video.'
  },
  {
    startTime: 6583.05,
    person: 'Karol',
    text: ' But for the moment, it will be available as a live stream recording on YouTube.'
  },
  {
    startTime: 6591.05,
    person: 'Karol',
    text: ' So you can always come back, re-watch it, figure out what you want to hear, and ask additional questions.'
  },
  {
    startTime: 6599.69,
    person: 'Karol',
    text: " If I find those in the comments somewhere, I'll make sure to relay those to Fran if you don't tag him, and then we'll draft an asynchronous answer to those."
  },
  { startTime: 6616.69, person: 'Karol', text: ' All right.' },
  {
    startTime: 6618.67,
    person: 'Karol',
    text: " That said, because I don't see any more questions popping in in chat."
  },
  { startTime: 6623.53, person: 'Karol', text: ' Thank you all for attending.' },
  {
    startTime: 6625.07,
    person: 'Karol',
    text: ' Thank you, Fran, for coming to the first edition of Loosely Coupled.'
  },
  { startTime: 6629.61, person: 'Karol', text: ' Absolutely amazing having you here.' },
  { startTime: 6634.01, person: 'Karol', text: ' And.' },
  { startTime: 6634.91, person: 'Fran', text: ' Thank you for inviting me.' },
  { startTime: 6636.99, person: 'Karol', text: " You're welcome." },
  { startTime: 6638.47, person: 'Fran', text: ' My pleasure.' },
  {
    startTime: 6640.09,
    person: 'Karol',
    text: ' And everybody, have a lovely evening, rest of the night, wherever you are, maybe rest of the day.'
  },
  { startTime: 6649.03, person: 'Karol', text: ' And till next time.' }
])
</script>

<style scoped></style>
