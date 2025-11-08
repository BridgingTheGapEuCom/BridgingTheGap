<template>
  <div class="w-full">
    <StreamLayout
      :transcript="transcript"
      name="Loosely Coupled - Exploring Publish-Subscribe (EDA)"
      video-id="-MOfx55GRcc"
    />
  </div>
</template>

<script lang="ts" setup>
const transcript = ref([
  {
    startTime: 178.91,
    person: 'Karol',
    text: ' Good morning, good afternoon, good evening, everybody.'
  },
  {
    startTime: 182.83,
    person: 'Karol',
    text: ' Hope you all have a time of day appropriate beverage.'
  },
  { startTime: 187.97, person: 'Karol', text: " And I'm very sorry for today's delay." },
  {
    startTime: 190.55,
    person: 'Karol',
    text: ' We were supposed to start at 7 p.m. Central European summertime.'
  },
  {
    startTime: 194.59,
    person: 'Karol',
    text: " But, due to unforeseen consequences of various weather problems in North America where Aaron is currently residing, and, well, his flight from Chicago to Ottawa was cancelled, so he was, what, delayed, I think, over, definitely over 15 hours in his arrival to Ottawa, so we're a little bit late."
  },
  {
    startTime: 221.91,
    person: 'Karol',
    text: " Luckily, Aaron is with us today, and, today, we're diving into a very lovely topic being event-driven architecture, one of my favourites in terms of interoperability, and, with Aaron, we will be diving into publish, subscribe."
  },
  {
    startTime: 238.61,
    person: 'Karol',
    text: " For those who don't know, Aaron is a solutions engineer with Solace, a very, very, very good event broker, I think one of the best on the market at the moment."
  },
  {
    startTime: 249.83,
    person: 'Karol',
    text: " He used to be a developer advocate for Solace, so a lot of talking with a lot of people, and also, Aaron is running office hours, Solace office hours with, well, with Aaron, obviously, and if you haven't seen those, they're available on the Solace channel on YouTube, and, without further ado, hello!"
  },
  { startTime: 280.73, person: 'Aaron', text: " Hey, everybody, hey, Carol, how's it going, man?" },
  { startTime: 284.37, person: 'Aaron', text: " I was quite surprised that you wouldn't make it!" },
  { startTime: 286.99, person: 'Aaron', text: ' I, it was touch and go there for a while.' },
  {
    startTime: 289.23,
    person: 'Aaron',
    text: " The last 24 hours has been, you know, planes, trains, and automobiles kind of excitement, so I'm glad I literally just landed at the airport about half an hour ago, and I just drove up home, and I jumped out of the car, I ran upstairs, and I booted up my laptop, and that's it, so I'm, I'm fresh off the plane."
  },
  {
    startTime: 306.55,
    person: 'Aaron',
    text: ' Yeah, there was a bunch of, I was in Chicago for Monday and Tuesday for some training with one of our prospects, and then, yeah, a bunch of storms came through, so all these flights got cancelled and messed up Tuesday evening.'
  },
  {
    startTime: 320.45,
    person: 'Aaron',
    text: " I'm sure that was probably quite a few places across the eastern part of the Canada and US."
  },
  {
    startTime: 325.61,
    person: 'Aaron',
    text: " Anyway, rebooked this morning via Montreal, so anyway, I'm warm and happy to be here, so yeah, thanks for having me."
  },
  {
    startTime: 336.71,
    person: 'Karol',
    text: " So, if you mind me asking, what's the weather like now in Ottawa, in North America in general?"
  },
  { startTime: 342.59, person: 'Aaron', text: ' The car said it was 31 degrees on the way home.' },
  { startTime: 345.47, person: 'Aaron', text: " It's quite warm, quite humid out there." },
  {
    startTime: 348.01,
    person: 'Aaron',
    text: " That's typical summer, kind of August weather, usually anywhere from kind of like upper 20s to low 30s, and yeah, humid, humid is quite standard for this part of the world, so yeah, summer times."
  },
  {
    startTime: 358.75,
    person: 'Karol',
    text: ' So, pretty much like right here in the Netherlands, humid and warm.'
  },
  { startTime: 363.93, person: 'Karol', text: " I've been sweating all day." },
  {
    startTime: 366.09,
    person: 'Karol',
    text: " It's been just a sunny all day and horrendously hot, so with this humidity, it's, oof."
  },
  { startTime: 374.57, person: 'Aaron', text: ' Yeah, yeah.' },
  { startTime: 375.67, person: 'Aaron', text: ' Do you have aircon in your house there?' },
  { startTime: 379.61, person: 'Aaron', text: ' Okay, yeah, yeah, yeah.' },
  {
    startTime: 381.59,
    person: 'Aaron',
    text: " I'm on the top floor, and it doesn't really reach up here, so I got a fan I can put on if I need to."
  },
  { startTime: 386.21, person: 'Karol', text: ' Yeah, I have a fan as well.' },
  {
    startTime: 388.03,
    person: 'Karol',
    text: " I just put it in the window, and it's just venting air all the time, and it kind of works, but otherwise, oof."
  },
  {
    startTime: 395.85,
    person: 'Karol',
    text: " It's difficult to work at times because of the temperature, but global warming."
  },
  { startTime: 401.63, person: 'Karol', text: " We'll do what we can." },
  { startTime: 402.39, person: 'Karol', text: " That's all right." },
  { startTime: 402.99, person: 'Karol', text: ' We do what we can.' },
  {
    startTime: 404.43,
    person: 'Karol',
    text: ' All right, so we have a lovely evening today with Event Driven Architecture, but first maybe, because some of the audience might not know you, so tell us something about what you do.'
  },
  {
    startTime: 419.05,
    person: 'Karol',
    text: ' I see you already have the appropriate t-shirt on.'
  },
  { startTime: 422.53, person: 'Aaron', text: ' I changed.' },
  { startTime: 423.13, person: 'Aaron', text: ' I changed.' },
  { startTime: 423.83, person: 'Aaron', text: ' I have to do a little bit of branding for this.' },
  { startTime: 427.23, person: 'Aaron', text: ' Obviously.' },
  { startTime: 428.17, person: 'Aaron', text: ' There we go.' },
  { startTime: 428.69, person: 'Aaron', text: ' Nicely done, yeah.' },
  {
    startTime: 430.83,
    person: 'Aaron',
    text: " So, Carol's written this whole implementation agnostic course, and I guess I'm on the other end of that, right?"
  },
  {
    startTime: 438.77,
    person: 'Aaron',
    text: " I'm very biassed about how we think implementations should go, within reason."
  },
  { startTime: 443.61, person: 'Aaron', text: " Yeah, so I'm Aaron." },
  { startTime: 445.07, person: 'Aaron', text: ' Aaron Lee.' },
  { startTime: 445.71, person: 'Aaron', text: ' I work for a company called Solace.' },
  {
    startTime: 447.49,
    person: 'Aaron',
    text: " We're based in Ottawa, Canada, headquartered here."
  },
  {
    startTime: 450.71,
    person: 'Aaron',
    text: " That's where I'm from, but yeah, for the last eight years, I've been living in Singapore."
  },
  {
    startTime: 456.69,
    person: 'Aaron',
    text: ' I was doing a role of a developer advocate, where we kind of do a lot of developer events, workshops, tutorial samples, hackathons.'
  },
  { startTime: 466.23, person: 'Aaron', text: ' I make a lot of YouTube videos.' },
  {
    startTime: 467.65,
    person: 'Aaron',
    text: " Perhaps if you've ever seen the Solace YouTube channel, I have a few on there."
  },
  {
    startTime: 471.17,
    person: 'Aaron',
    text: ' I do a monthly office hours, most months, not every month.'
  },
  {
    startTime: 474.61,
    person: 'Aaron',
    text: " And I have another, my one in two weeks is going to be all about our event portal and all the new features that we've been building on that."
  },
  {
    startTime: 481.85,
    person: 'Aaron',
    text: " So, we're overdue for an update on Solace event portal."
  },
  {
    startTime: 485.57,
    person: 'Aaron',
    text: " And yeah, so as of now, I'm a solutions engineer, pre-sales role, where as part of the sales team, I'm the technical person who might go in and do a proof of concept, kind of do the hardcore technical presentations that sales people don't want to do."
  },
  { startTime: 501.27, person: 'Aaron', text: " So, that's my current role." },
  { startTime: 503.51, person: 'Aaron', text: ' And yeah, been at Solace 14 years.' },
  { startTime: 505.29, person: 'Aaron', text: ' Check us out, Solace.com.' },
  {
    startTime: 506.89,
    person: 'Aaron',
    text: ' We are a publish, subscribe, event-driven broker.'
  },
  {
    startTime: 510.81,
    person: 'Aaron',
    text: " And that's why I guess why I'm here today, to talk a little bit about how we do things and maybe contrast it to some other viewpoints."
  },
  {
    startTime: 520.21,
    person: 'Aaron',
    text: ' I mean, Carol, from our very first time we had a conversation, I think it was via the talk to your dev advocate kind of like feedback link there.'
  },
  {
    startTime: 527.68,
    person: 'Aaron',
    text: " We've had like hour, hour and a half, two hour long conversations that were like, this could easily just be a podcast."
  },
  {
    startTime: 533.1,
    person: 'Aaron',
    text: ' Like our conversations just turn into this anyway.'
  },
  { startTime: 535.78, person: 'Aaron', text: " So, now we're making it official, I guess." },
  { startTime: 538.7, person: 'Karol', text: " Yeah, that's very true." },
  { startTime: 539.96, person: 'Karol', text: ' That was the idea in one of our conversations.' },
  {
    startTime: 542.1,
    person: 'Karol',
    text: " We've been chatting on and off, what, over a year now."
  },
  { startTime: 548, person: 'Karol', text: ' Every once in a while, just popped on a call.' },
  {
    startTime: 550.66,
    person: 'Karol',
    text: ' You eating your late night dinner in the office in Singapore.'
  },
  {
    startTime: 558.66,
    person: 'Karol',
    text: ' And yeah, me just sitting midday or late afternoon, just having a conversation about event-driven architecture, different patterns, use cases for different architectural styles or well, ecosystem architectural styles to be precise.'
  },
  {
    startTime: 582.12,
    person: 'Aaron',
    text: " Let's hope other people find it as interesting as we do talking about this stuff."
  },
  {
    startTime: 587,
    person: 'Karol',
    text: ' I mean, there are nerdy people on LinkedIn and YouTube that enjoy these kinds of conversations.'
  },
  { startTime: 593.28, person: 'Karol', text: ' So, I hope they do.' },
  {
    startTime: 595.14,
    person: 'Karol',
    text: " But speaking about architectural styles, one thing that I really find interesting in terms of, and that's not only marketing-wise, but positioning-wise in terms of Solace."
  },
  {
    startTime: 611.34,
    person: 'Karol',
    text: ' Solace at this point, I think is the only event broker on the market that actually positions itself as a product.'
  },
  {
    startTime: 623.3,
    person: 'Karol',
    text: ' The company positions the product as a piece of technology that can solve ecosystem problems.'
  },
  {
    startTime: 634.01,
    person: 'Karol',
    text: " Because if people think message broker, event broker, a lot of people think that it's in a context of a singular system."
  },
  { startTime: 644.41, person: 'Karol', text: ' So, internal messaging within a system.' },
  {
    startTime: 647.59,
    person: 'Karol',
    text: ' Sometimes they think about it, maybe hooked up to a integration platform like Boomi, MuleSoft, Tibco BusinessWorks, something like that, to facilitate that asynchronous communication or a little bit of a fake load balancing through queues.'
  },
  {
    startTime: 670.03,
    person: 'Karol',
    text: " Whereas those message brokers typically use with those, they do not have that kind of philosophy there that they're actually solving ecosystem-wide problems."
  },
  {
    startTime: 681.79,
    person: 'Karol',
    text: " Whereas time and time again, when I see any presentation from Solace, that's a large distinction there that anybody who I watch from Solace, especially from the CTO office or field CTO office, they always talk about ecosystem problems."
  },
  {
    startTime: 702.19,
    person: 'Karol',
    text: ' They always talk about the scale that is way beyond the singular system, addressing different'
  },
  {
    startTime: 709.69,
    person: 'Karol',
    text: ' domains, addressing different business processes, addressing organisational issues to a certain'
  },
  {
    startTime: 716.47,
    person: 'Karol',
    text: ' extent, and addressing the way of thinking in terms of thinking about your business in'
  },
  {
    startTime: 725.15,
    person: 'Karol',
    text: " a manner that it's not just request reply processes and we're just going to put that"
  },
  {
    startTime: 729.87,
    person: 'Karol',
    text: " in a system, put that in an ERP, and we're going to be great."
  },
  { startTime: 733.21, person: 'Karol', text: ' Or CRM, right?' },
  {
    startTime: 734.51,
    person: 'Karol',
    text: " No, it's addressing that way of thinking about the business itself."
  },
  {
    startTime: 741.55,
    person: 'Karol',
    text: " And that's the differentiator there, for me, at least."
  },
  { startTime: 744.11, person: 'Aaron', text: " It's a paradigm shift." },
  {
    startTime: 747.85,
    person: 'Aaron',
    text: ' Solace came from capital markets, trading platforms.'
  },
  {
    startTime: 751.49,
    person: 'Aaron',
    text: " They've been dealing with this on-demand, publish-subscribe, event-driven style of data movement because you have to be as real-time as possible."
  },
  {
    startTime: 761.75,
    person: 'Aaron',
    text: ' When a price changes, that tick needs to get sent right to my trading platform or my trader or my dashboard or whatever.'
  },
  { startTime: 768.11, person: 'Aaron', text: ' I want to see that real-time.' },
  { startTime: 769.25, person: 'Aaron', text: " You're not pulling these things." },
  { startTime: 770.33, person: 'Aaron', text: " And so they've kind of come from that." },
  { startTime: 773.05, person: 'Aaron', text: " They've existed in this world for a long time." },
  {
    startTime: 775.19,
    person: 'Aaron',
    text: " And now, as all these other industries are kind of slowly becoming IT companies, like I mean car manufacturers and manufacturing, and everybody's an IT shop now."
  },
  {
    startTime: 785.09,
    person: 'Aaron',
    text: ' And their kind of legacy way of integration, database at the centre of everything, kind of everything goes into a database, everything comes out, it has to modernise.'
  },
  {
    startTime: 795.75,
    person: 'Aaron',
    text: ' We need more real-time data access to our inventory.'
  },
  {
    startTime: 799.89,
    person: 'Aaron',
    text: ' Customers want more real-time access to their information.'
  },
  {
    startTime: 803.93,
    person: 'Aaron',
    text: " And I guess, again, I'm a bit biassed, but Solace views itself as just an extension of your network."
  },
  {
    startTime: 810.65,
    person: 'Aaron',
    text: ' So whenever you have to send anything over the network, you could make it better by going on Solace in some way or another.'
  },
  {
    startTime: 816.95,
    person: 'Aaron',
    text: " Maybe not every single thing, but that's the way I do think about it."
  },
  {
    startTime: 820.35,
    person: 'Aaron',
    text: ' We enhance your TCP communication with more stateful connections, broadcast, unicast.'
  },
  { startTime: 827.05, person: 'Aaron', text: ' You can do fan out.' },
  {
    startTime: 828.31,
    person: 'Aaron',
    text: ' I mean, anytime you want to send a file from one server to another, you could send it over a Solace event broker or a message broker event process.'
  },
  { startTime: 836.17, person: 'Aaron', text: ' It could go to other places, right?' },
  {
    startTime: 837.65,
    person: 'Aaron',
    text: ' It could be, if your downstream system is not there, we could persist it temporarily until that downstream system comes online.'
  },
  {
    startTime: 844.61,
    person: 'Aaron',
    text: " It's unlocking a lot of patterns and interesting things that are fundamental to how a business operates."
  },
  {
    startTime: 853.65,
    person: 'Aaron',
    text: " And so it's not just one little piece of integration or one little message bus between apps."
  },
  {
    startTime: 860.13,
    person: 'Aaron',
    text: " It needs to be, I think, a shift in how you think about your business operating and the data that's flowing around, getting out of these silos, moving data everywhere with guardrails, of course, ACLs, things like that."
  },
  { startTime: 872.77, person: 'Aaron', text: " So people can't subscribe to anything." },
  { startTime: 874.81, person: 'Aaron', text: " Anyway, that's..." },
  {
    startTime: 876.11,
    person: 'Karol',
    text: " Remind me, because I'm not sure if I remember this correctly."
  },
  {
    startTime: 880.49,
    person: 'Karol',
    text: ' Did Solace actually originate from more of a hardware broker?'
  },
  { startTime: 885.07, person: 'Aaron', text: ' Yeah.' },
  { startTime: 885.65, person: 'Aaron', text: ' Yeah.' },
  { startTime: 886.13, person: 'Aaron', text: ' So a bit of history.' },
  { startTime: 887.49, person: 'Aaron', text: ' I mean, yeah.' },
  {
    startTime: 887.91,
    person: 'Aaron',
    text: ' So Solace was a hardware company for many, many years.'
  },
  {
    startTime: 892.55,
    person: 'Aaron',
    text: ' We built a purpose-built appliance, FPGAs, network processors.'
  },
  {
    startTime: 897.89,
    person: 'Aaron',
    text: ' There was a Linux OS on there, but only to run the control plane with our monitoring and watchdogs.'
  },
  { startTime: 904.43, person: 'Aaron', text: ' And the entire data path was all hardware.' },
  { startTime: 908.91, person: 'Aaron', text: ' So we got very high-performance numbers.' },
  {
    startTime: 911.95,
    person: 'Aaron',
    text: " And this is, I think, why the investment banks like this so much, because we do microseconds of latency from your API, say, send a message to go through the network into the router, the Solace broker, get routed to who it's going to go to, and back into the subscriber to the API receive."
  },
  { startTime: 932.05, person: 'Aaron', text: ' That we do in about 18 to 20 microseconds.' },
  { startTime: 937.51, person: 'Aaron', text: " So that's fast, right?" },
  { startTime: 939.41, person: 'Aaron', text: ' Not everybody needs that level of performance.' },
  { startTime: 942.11, person: 'Aaron', text: ' Investment banks like it.' },
  {
    startTime: 943.67,
    person: 'Aaron',
    text: ' You know, the average person, a millisecond is probably real time, right?'
  },
  { startTime: 947.63, person: 'Aaron', text: ' So for them...' },
  {
    startTime: 948.49,
    person: 'Karol',
    text: " I think that's the core aspect of that background, the trading markets, the financial world."
  },
  { startTime: 957.97, person: 'Aaron', text: " That's half of it." },
  { startTime: 958.77, person: 'Aaron', text: " That's half of it." },
  {
    startTime: 959.71,
    person: 'Aaron',
    text: ' A lot of the founders of Solace came from IP networking backgrounds.'
  },
  {
    startTime: 963.23,
    person: 'Aaron',
    text: ' So they viewed this as a kind of a network-level-up solution rather than an application-to-application integration.'
  },
  {
    startTime: 970.73,
    person: 'Aaron',
    text: " You know, they didn't view messaging or brokered communication as an application thing."
  },
  { startTime: 975.37, person: 'Aaron', text: ' They viewed it as a networking thing.' },
  {
    startTime: 976.55,
    person: 'Aaron',
    text: ' So our DNA, a lot of our original founders and people that worked early on came from IP switching, quite a few patents around TCP and stuff like that.'
  },
  { startTime: 985.77, person: 'Aaron', text: " So yeah, it's in the DNA of Solace, I guess." },
  { startTime: 989.45, person: 'Karol', text: ' And now it clicks for me.' },
  {
    startTime: 991.27,
    person: 'Karol',
    text: " Now I understand why certain aspects of the rhetoric and certain terms used in different presentations from Solace do not exactly match my understanding of interoperability from a perspective of application integration, because if you take that from a perspective of networking, yeah, that's completely different."
  },
  {
    startTime: 1012.63,
    person: 'Karol',
    text: " But that's a very narrow aspect of what we do in IT."
  },
  {
    startTime: 1015.79,
    person: 'Karol',
    text: " The network infrastructure, it's a very, very, very narrow element, whereas..."
  },
  { startTime: 1020.77, person: 'Aaron', text: ' It is.' },
  { startTime: 1021.41, person: 'Karol', text: ' But everybody uses it, right?' },
  {
    startTime: 1025.01,
    person: 'Karol',
    text: " Obviously, but it's the one thing that I always say when discussing that narrative."
  },
  { startTime: 1033.45, person: 'Karol', text: ' The misuse of the word decoupled.' },
  { startTime: 1038.67, person: 'Aaron', text: ' I was thinking about this on the plane.' },
  {
    startTime: 1040.75,
    person: 'Aaron',
    text: ' I was like, what are we going to talk about today?'
  },
  { startTime: 1042.43, person: 'Aaron', text: ' And I hope we do.' },
  {
    startTime: 1043.21,
    person: 'Aaron',
    text: " I'm sure we're going to get around to talking about decoupling, because you and I have somewhat similar and somewhat different ideas on this word."
  },
  {
    startTime: 1050.31,
    person: 'Aaron',
    text: ' So yeah, I do want to jump into that in a little bit.'
  },
  { startTime: 1054.61, person: 'Karol', text: " Let's jump straight into that." },
  {
    startTime: 1056.21,
    person: 'Karol',
    text: ' So I had a lot of discussions about coupling and decoupling.'
  },
  {
    startTime: 1059.71,
    person: 'Aaron',
    text: " Can I just say that we're not a hardware company only, by the way."
  },
  {
    startTime: 1063.85,
    person: 'Aaron',
    text: " Some people, some of our old customers don't actually know we have a software product."
  },
  {
    startTime: 1067.63,
    person: 'Aaron',
    text: ' So when cloud finally started to become a real thing, we virtualized our appliance into a software broker.'
  },
  { startTime: 1074.53, person: 'Aaron', text: " So it's a Docker container." },
  { startTime: 1076.39, person: 'Aaron', text: ' You can run it on prem.' },
  { startTime: 1078.31, person: 'Aaron', text: ' You can run it on your laptop.' },
  { startTime: 1079.33, person: 'Aaron', text: ' I got one right here.' },
  { startTime: 1080.37, person: 'Aaron', text: ' You can run it in whatever cloud you want.' },
  {
    startTime: 1082.33,
    person: 'Aaron',
    text: ' We have Kubernetes, Helm charts, and all sorts of stuff.'
  },
  {
    startTime: 1084.95,
    person: 'Aaron',
    text: ' And we have a fully managed SaaS offering as well, where basically, rather than having to run our software broker yourself, you can just go into Solace Cloud and say deploy.'
  },
  {
    startTime: 1093.85,
    person: 'Aaron',
    text: ' So we have three different kind of flavours, I guess, of running a Solace broker, right?'
  },
  {
    startTime: 1099.53,
    person: 'Aaron',
    text: " So we're not only hardware, just for the record."
  },
  {
    startTime: 1103.39,
    person: 'Karol',
    text: " See, I wouldn't ever know about that hardware part, because I know Solace only from the actual application part, the software part."
  },
  { startTime: 1113.99, person: 'Karol', text: ' Hi, Stefan.' },
  { startTime: 1115.03, person: 'Karol', text: ' Nice to see you again.' },
  { startTime: 1116.11, person: 'Karol', text: ' Hello.' },
  { startTime: 1116.55, person: 'Karol', text: ' Hello.' },
  {
    startTime: 1117.79,
    person: 'Karol',
    text: " So yeah, let's jump straight into that coupling, because when I was researching for the architecture course that I was designing back a year ago, a very important topic was how to cover coupling in such a complex environment as application integration and integration platforms."
  },
  { startTime: 1142.05, person: 'Karol', text: " Because that's difficult." },
  {
    startTime: 1145.31,
    person: 'Karol',
    text: ' And the biggest struggle was how to actually define coupling properly.'
  },
  {
    startTime: 1151.93,
    person: 'Karol',
    text: " And at one hand, I had the narrative of something coupled-decoupled, which was very common, to which I didn't really subscribe."
  },
  {
    startTime: 1163.23,
    person: 'Karol',
    text: " And I still don't like the word decoupled, if we're talking about two systems that are communicating."
  },
  {
    startTime: 1168.15,
    person: 'Karol',
    text: ' And on the other hand, I have read the book from Vlad.'
  },
  {
    startTime: 1176.05,
    person: 'Karol',
    text: " Now, I'm going to blank out and forget what was Vlad's last name."
  },
  { startTime: 1182.27, person: 'Karol', text: " I'll look it up in a moment." },
  { startTime: 1184.55, person: 'Karol', text: ' Sure.' },
  {
    startTime: 1186.37,
    person: 'Karol',
    text: " He's known for DVD books and balancing coupling in software design, I believe."
  },
  { startTime: 1193.67, person: 'Karol', text: ' Kononov?' },
  { startTime: 1198.17, person: 'Karol', text: ' Quick check.' },
  { startTime: 1199.11, person: 'Karol', text: ' Yes, Kononov.' },
  { startTime: 1200.43, person: 'Karol', text: ' So he wrote the book on coupling.' },
  {
    startTime: 1204.21,
    person: 'Karol',
    text: ' That took him about five years to do research and write that book.'
  },
  { startTime: 1207.89, person: 'Karol', text: ' All right.' },
  {
    startTime: 1209.11,
    person: 'Karol',
    text: ' And I get it, because coupling is such a complex topic.'
  },
  { startTime: 1216.05, person: 'Karol', text: ' Extremely complex.' },
  {
    startTime: 1217.27,
    person: 'Karol',
    text: ' And on various levels, in a singular piece of software, on an ecosystem level, in communication, in terms of understanding network and beyond the network, etc.'
  },
  { startTime: 1232.57, person: 'Karol', text: " So it's very complex." },
  {
    startTime: 1234.79,
    person: 'Karol',
    text: " But yet, there is this notion in a lot of architects that they say, well, we're decoupling things."
  },
  { startTime: 1245.25, person: 'Karol', text: ' Sure.' },
  { startTime: 1246.41, person: 'Karol', text: " And that's problematic for me." },
  {
    startTime: 1249.39,
    person: 'Karol',
    text: ' And I know that Solace uses this rhetoric extensively.'
  },
  { startTime: 1252.87, person: 'Karol', text: ' And I talk to a lot of architects from Solace.' },
  { startTime: 1256.25, person: 'Karol', text: ' And we agree and disagree at the same time.' },
  {
    startTime: 1259.89,
    person: 'Karol',
    text: " And here's the thing that I figured about coupling."
  },
  { startTime: 1263.41, person: 'Karol', text: ' It has a dual nature, just like light.' },
  { startTime: 1267.97, person: 'Karol', text: ' OK.' },
  {
    startTime: 1268.97,
    person: 'Karol',
    text: ' Did you ever hear me talk about this analogue there?'
  },
  { startTime: 1273.89, person: 'Karol', text: ' This one specifically?' },
  { startTime: 1275.37, person: 'Karol', text: " I don't think so." },
  { startTime: 1276.09, person: 'Aaron', text: " I don't think." },
  { startTime: 1276.57, person: 'Karol', text: ' OK.' },
  { startTime: 1277.47, person: 'Karol', text: ' Yeah.' },
  { startTime: 1278.53, person: 'Karol', text: " So let's see if you agree." },
  { startTime: 1279.83, person: 'Karol', text: ' OK.' },
  { startTime: 1280.55, person: 'Karol', text: ' My take on coupling, it can be binary.' },
  {
    startTime: 1285.41,
    person: 'Karol',
    text: ' So something being either coupled or decoupled, which basically means two pieces of software either communicate or not.'
  },
  { startTime: 1293.89, person: 'Karol', text: ' OK.' },
  {
    startTime: 1294.59,
    person: 'Karol',
    text: " And then it's on a spectrum, can be tightly coupled or loosely coupled if they communicate."
  },
  { startTime: 1303.23, person: 'Karol', text: ' OK.' },
  {
    startTime: 1304.09,
    person: 'Karol',
    text: " And if I look at an event broker, for me, it's a tool as an architect to provide a loosening of a coupling in communication."
  },
  { startTime: 1316.81, person: 'Aaron', text: ' OK.' },
  { startTime: 1318.35, person: 'Karol', text: " What's your take then?" },
  { startTime: 1320.01, person: 'Aaron', text: ' So in general, I agree.' },
  { startTime: 1323.73, person: 'Aaron', text: " But I think you're going to like this." },
  {
    startTime: 1325.43,
    person: 'Aaron',
    text: " I've kind of come to the realisation that the term coupling, it doesn't refer to just a singular variable or dimension."
  },
  { startTime: 1333.63, person: 'Aaron', text: " It's multidimensional." },
  { startTime: 1335.71, person: 'Aaron', text: " It's in terms of direct communication." },
  { startTime: 1338.49, person: 'Aaron', text: " It's in terms of time." },
  { startTime: 1339.63, person: 'Aaron', text: " It's in terms of data formats." },
  {
    startTime: 1341.63,
    person: 'Aaron',
    text: " It's in terms of knock-on effects that maybe you actually uncouple something, which produces more coupling somewhere else."
  },
  {
    startTime: 1348.33,
    person: 'Aaron',
    text: " So it's all about, if we're talking patterns, there's always balances and constraints and things that trade off."
  },
  {
    startTime: 1354.55,
    person: 'Aaron',
    text: ' So yeah, I have two slides I want to flash up real quick.'
  },
  { startTime: 1360.91, person: 'Aaron', text: ' Can I do that?' },
  { startTime: 1361.67, person: 'Aaron', text: ' Is that allowed?' },
  { startTime: 1362.57, person: 'Karol', text: ' Absolutely.' },
  {
    startTime: 1364.23,
    person: 'Aaron',
    text: " If people are only listening, I just I'll have to talk to them."
  },
  { startTime: 1368.51, person: 'Aaron', text: ' But let me click share my screen here.' },
  { startTime: 1371.37, person: 'Aaron', text: ' And hopefully this will come up there.' },
  { startTime: 1377.03, person: 'Aaron', text: ' Let me know if you can.' },
  { startTime: 1378.89, person: 'Aaron', text: ' Yes.' },
  {
    startTime: 1379.75,
    person: 'Aaron',
    text: " Because I'm going to talk briefly about the publish subscribe pattern."
  },
  {
    startTime: 1385.45,
    person: 'Aaron',
    text: ' But before I do, I just want to mention this one here, the observer pattern.'
  },
  {
    startTime: 1389.23,
    person: 'Aaron',
    text: ' I learned this in second year university when I was doing a C++ course.'
  },
  { startTime: 1394.01, person: 'Aaron', text: ' And I got some nice UML.' },
  { startTime: 1395.97, person: 'Aaron', text: ' Who does UML anymore?' },
  { startTime: 1397.25, person: 'Aaron', text: " I don't know." },
  { startTime: 1398.13, person: 'Aaron', text: " But that's, oh, really?" },
  { startTime: 1399.85, person: 'Aaron', text: ' Sequence diagrams, maybe.' },
  { startTime: 1401.53, person: 'Karol', text: ' Sequence diagrams all the way.' },
  {
    startTime: 1403.05,
    person: 'Karol',
    text: " I wouldn't be able to describe what I do without sequence diagrams."
  },
  { startTime: 1407.45, person: 'Karol', text: " That's a must." },
  { startTime: 1408.81, person: 'Aaron', text: ' All right.' },
  {
    startTime: 1409.21,
    person: 'Aaron',
    text: ' So the observer pattern is basically you have a subject and an observer, right?'
  },
  { startTime: 1414.05, person: 'Aaron', text: ' The subject is the thing you want to watch.' },
  { startTime: 1416.07, person: 'Aaron', text: ' Think of a button on a GUI, right?' },
  { startTime: 1418.09, person: 'Aaron', text: ' Typical example.' },
  {
    startTime: 1418.89,
    person: 'Aaron',
    text: ' And you want to know when that thing has changed state, right?'
  },
  { startTime: 1422.21, person: 'Aaron', text: " You want an event when it's changed state." },
  {
    startTime: 1424.31,
    person: 'Aaron',
    text: ' So you will register yourself as an observer to that subject.'
  },
  { startTime: 1427.93, person: 'Aaron', text: ' So I go to the button.' },
  { startTime: 1429.25, person: 'Aaron', text: ' I say add me as an event handler.' },
  {
    startTime: 1431.37,
    person: 'Aaron',
    text: ' Run this method whenever you change state, right?'
  },
  { startTime: 1433.91, person: 'Aaron', text: " So that's what this register unregister is." },
  {
    startTime: 1436.43,
    person: 'Aaron',
    text: ' And then when the subject changes state, he looks through his collection of observers and notifies them that something has changed.'
  },
  {
    startTime: 1442.41,
    person: 'Aaron',
    text: ' So, you know, your callback gets fired saying, hey, the button has been clicked.'
  },
  {
    startTime: 1445.67,
    person: 'Aaron',
    text: " Because imagine designing a GUI where you have to pull every single element in that GUI to find out if it's changed state."
  },
  {
    startTime: 1453.65,
    person: 'Aaron',
    text: ' Like in a huge loop, you have hundreds of elements.'
  },
  { startTime: 1455.87, person: 'Aaron', text: " That's an insane way to design a GUI, right?" },
  {
    startTime: 1457.87,
    person: 'Aaron',
    text: ' So GUIs are by nature event driven in the sense that they notify you when you scroll it, when you move the window, when you click something, right?'
  },
  { startTime: 1466.97, person: 'Aaron', text: " That's all being event driven." },
  { startTime: 1468.47, person: 'Karol', text: ' Yeah.' },
  { startTime: 1468.69, person: 'Karol', text: ' A lot of the functions are on something.' },
  { startTime: 1472.21, person: 'Karol', text: ' On click, on hover, on...' },
  { startTime: 1474.57, person: 'Aaron', text: ' Yeah.' },
  { startTime: 1474.71, person: 'Karol', text: " So that's your event, right?" },
  { startTime: 1476.61, person: 'Aaron', text: ' So that the button has been clicked.' },
  {
    startTime: 1478.39,
    person: 'Aaron',
    text: ' So publish subscribe is a kind of a decoupled version of this.'
  },
  { startTime: 1483.71, person: 'Aaron', text: ' So if I just go forward two slides, like we...' },
  {
    startTime: 1489.83,
    person: 'Aaron',
    text: ' So think of publish subscribe very similar to the observer pattern in the sense that I need to notify when something has changed, right?'
  },
  { startTime: 1496.45, person: 'Aaron', text: ' So the observer is the subscriber of this data.' },
  { startTime: 1500.97, person: 'Aaron', text: " You're the consumer of the event." },
  {
    startTime: 1502.49,
    person: 'Aaron',
    text: " The subject, the thing that's notifying people downstream is that it's going to be..."
  },
  { startTime: 1508.29, person: 'Aaron', text: " It's the producer." },
  { startTime: 1508.99, person: 'Aaron', text: " It's the publisher of this data." },
  {
    startTime: 1510.81,
    person: 'Aaron',
    text: ' One, in terms of coupling, like if you look at the observer pattern, the subject has this collection of observers, right?'
  },
  {
    startTime: 1518.39,
    person: 'Aaron',
    text: " So it's the responsibility of the subject to have to go and tell all these observers."
  },
  { startTime: 1525.95, person: 'Aaron', text: ' It needs to keep a list of them.' },
  { startTime: 1527.57, person: 'Aaron', text: ' It needs to maintain that.' },
  {
    startTime: 1529.09,
    person: 'Aaron',
    text: " It's the one that's doing the calling of this method, this update method."
  },
  { startTime: 1533.21, person: 'Aaron', text: " So there's a coupling there, right?" },
  {
    startTime: 1534.33,
    person: 'Aaron',
    text: ' Because the subject now has to keep track of these guys.'
  },
  {
    startTime: 1537.51,
    person: 'Karol',
    text: " So if I'm a pitch, that would be the equivalent of an application that needs to notify something without having it with some sort of an async communication."
  },
  {
    startTime: 1551.65,
    person: 'Karol',
    text: ' Basically, the subject would be doing a request reply to each one of them.'
  },
  { startTime: 1556.23, person: 'Karol', text: ' Something like that.' },
  { startTime: 1556.89, person: 'Aaron', text: ' Yeah.' },
  { startTime: 1557.05, person: 'Aaron', text: ' It could be a UDP.' },
  { startTime: 1560.21, person: 'Aaron', text: " It doesn't have to be a request reply." },
  {
    startTime: 1561.73,
    person: 'Aaron',
    text: " I mean, maybe if you don't get the update, it's not the end of the world, right?"
  },
  {
    startTime: 1565.27,
    person: 'Aaron',
    text: ' But if you want to make sure that everybody got it, it would have to be some kind of acknowledgement coming back.'
  },
  {
    startTime: 1569.89,
    person: 'Aaron',
    text: ' And so as this scales out, what if this is like a thousand things?'
  },
  {
    startTime: 1575.35,
    person: 'Aaron',
    text: ' Now the subject has to do all this work every time it clicks its button to notify everybody.'
  },
  {
    startTime: 1580.03,
    person: 'Aaron',
    text: ' So there is this coupling there in that sense of responsibility.'
  },
  {
    startTime: 1584.01,
    person: 'Aaron',
    text: ' Whereas with the brokered, the published subscribe pattern, as implemented with a broker, an event broker like Solace, is that they are decoupled in the sense that they all connect into this broker and the broker is doing the responsibility of messaging, of notification to the different people, right?'
  },
  {
    startTime: 1605.37,
    person: 'Aaron',
    text: " And the individual producers don't have to know how many subscribers there are out there."
  },
  { startTime: 1611.01, person: 'Aaron', text: ' It just sends one message into the broker.' },
  { startTime: 1612.51, person: 'Aaron', text: ' The broker is keeping track of all that.' },
  {
    startTime: 1614.59,
    person: 'Aaron',
    text: " And the consumers don't have to know where is this producer?"
  },
  { startTime: 1618.69, person: 'Aaron', text: " Where is this button that's being clicked?" },
  {
    startTime: 1620.83,
    person: 'Aaron',
    text: " As long as I get the event, that's all that I care about."
  },
  { startTime: 1623.95, person: 'Aaron', text: " And so that's a decoupling, right?" },
  {
    startTime: 1626.55,
    person: 'Aaron',
    text: " That my consumers and producers don't have to know about each other."
  },
  {
    startTime: 1629.39,
    person: 'Aaron',
    text: " They can be lots of them or very few of them and it doesn't really change anything."
  },
  { startTime: 1634.47, person: 'Aaron', text: " So that's one." },
  {
    startTime: 1635.71,
    person: 'Aaron',
    text: ' And the second one that I have there you can see is temporally.'
  },
  {
    startTime: 1638.05,
    person: 'Aaron',
    text: " If your broker has persistent storage, obviously, if one of your consumers is offline, maybe it's a database and it's getting rebooted because you did an upgrade."
  },
  {
    startTime: 1646.89,
    person: 'Aaron',
    text: ' Your broker can store that stuff and the producer does not get impacted.'
  },
  {
    startTime: 1650.93,
    person: 'Aaron',
    text: " Like if I'm trying to write to this database and it goes away, now I'm stuck trying to write to this database."
  },
  {
    startTime: 1655.77,
    person: 'Aaron',
    text: " But if you put it into an event broker in the middle and the database goes away, the broker is like, all right, I'll just buffer this temporarily."
  },
  { startTime: 1663.23, person: 'Aaron', text: ' Bless you.' },
  { startTime: 1664.49, person: 'Aaron', text: " And then it'll go out." },
  {
    startTime: 1666.05,
    person: 'Aaron',
    text: ' So in this specific way, not talking about data, not talking about schemas, event brokers can decouple quite architecturally and temporally.'
  },
  {
    startTime: 1678.23,
    person: 'Karol',
    text: ' On the two characteristics of the spectrum, basically.'
  },
  { startTime: 1683.51, person: 'Karol', text: " Yeah, but there's more to that." },
  {
    startTime: 1688.33,
    person: 'Karol',
    text: ' So I took the learnings from Vlad Kononov that I found.'
  },
  {
    startTime: 1695.03,
    person: 'Karol',
    text: " By the way, if you would want to read the book, here's the QR for the book at O'Reilly right there."
  },
  { startTime: 1703.07, person: 'Karol', text: ' So check it out.' },
  { startTime: 1704.29, person: 'Karol', text: " That's a really, really good book on coupling." },
  {
    startTime: 1706.41,
    person: 'Karol',
    text: " If you want to understand coupling, I think that's the easiest explanation ever in a context of software design and development."
  },
  {
    startTime: 1714.81,
    person: 'Aaron',
    text: ' Does it talk about decoupling as well, or is it only about coupling?'
  },
  {
    startTime: 1718.89,
    person: 'Karol',
    text: ' It talks about loosening the coupling, not decoupling.'
  },
  { startTime: 1722.23, person: 'Aaron', text: ' Okay, all right, all right, cool.' },
  { startTime: 1722.97, person: 'Aaron', text: ' We can take a slide down there, Carol.' },
  { startTime: 1725.57, person: 'Aaron', text: ' I just wanted to flash those two.' },
  { startTime: 1727.13, person: 'Karol', text: ' All right, all right, all right.' },
  { startTime: 1731.29, person: 'Karol', text: ' Oh, nope, not this one.' },
  { startTime: 1733.31, person: 'Karol', text: ' Other way, other way.' },
  { startTime: 1734.23, person: 'Karol', text: ' Nope, nope.' },
  { startTime: 1735.93, person: 'Karol', text: ' See, this is my- Too many buttons, there we go.' },
  {
    startTime: 1739.05,
    person: 'Karol',
    text: ' Too many buttons and not yet that familiar with the studio.'
  },
  {
    startTime: 1743.03,
    person: 'Karol',
    text: " But I just had to turn off your screen, and that's fine."
  },
  {
    startTime: 1747.37,
    person: 'Karol',
    text: " So if we're considering coupling on the spectrum, and I absolutely agree that if we're looking at message brokers in general, or Solace as an event broker, message broker, yes."
  },
  {
    startTime: 1760.57,
    person: 'Karol',
    text: ' If we add to that guaranteed delivery and the temporary persistence of in JMS, this would be queues, or in topics, it would be the durable subscriber.'
  },
  {
    startTime: 1773.53,
    person: 'Karol',
    text: ' Yeah, and then also the same kind of configuration for AMQP and other relevant.'
  },
  {
    startTime: 1781.53,
    person: 'Karol',
    text: " We're working here on the level of temporal coupling due to that persistence."
  },
  { startTime: 1788.33, person: 'Karol', text: " And then that's a good question." },
  {
    startTime: 1792.09,
    person: 'Karol',
    text: " I think that would be the interaction coupling in terms of who's interacting with who."
  },
  {
    startTime: 1797.19,
    person: 'Karol',
    text: ' Because now we enable, because we have that temporary persistence in middle and that mediator in terms of communication.'
  },
  {
    startTime: 1805.81,
    person: 'Karol',
    text: ' Now we can have one-to-one, one-to-many, many-to-one, and many-to-many.'
  },
  {
    startTime: 1811.95,
    person: 'Karol',
    text: " And those systems on both sides, they have no idea who's talking to who."
  },
  { startTime: 1816.79, person: 'Karol', text: " That's right." },
  {
    startTime: 1817.25,
    person: 'Karol',
    text: " We're obfuscating that knowledge through that mediation over a message or event broker."
  },
  { startTime: 1823.73, person: 'Karol', text: " That's right." },
  { startTime: 1824.43, person: 'Karol', text: ' But there are other types of coupling.' },
  {
    startTime: 1828.57,
    person: 'Karol',
    text: ' And for the purpose of ecosystem architecture, we divided them into architectural or operational.'
  },
  { startTime: 1837.13, person: 'Karol', text: " So there's many." },
  {
    startTime: 1839.37,
    person: 'Karol',
    text: ' And some of them are solvable on the level of an event broker.'
  },
  {
    startTime: 1843.29,
    person: 'Karol',
    text: ' Some of them are completely not solvable on the level of an event broker.'
  },
  {
    startTime: 1848.39,
    person: 'Karol',
    text: " So if we're talking, for example, a pure JMS broker, like let's say Tibco EMS, a very old-school message broker, it implemented only JMS. Right?"
  },
  {
    startTime: 1864.63,
    person: 'Karol',
    text: ' So at this point, we already had this kind of a, not conversation coupling, but that was more of a technology coupling, protocol coupling, right?'
  },
  {
    startTime: 1875.23,
    person: 'Karol',
    text: " Because both systems communicating, let's say, only two are communicating through that broker at this time, both are forced to be protocol-specific."
  },
  {
    startTime: 1885.59,
    person: 'Karol',
    text: " So they're already coupled by technology and by the protocol."
  },
  { startTime: 1888.49, person: 'Karol', text: ' Okay.' },
  {
    startTime: 1889.77,
    person: 'Karol',
    text: " In comparison, that's not a problem for the Solace event broker, because Solace implements multiple different protocols."
  },
  {
    startTime: 1897.77,
    person: 'Karol',
    text: ' So JMS, AMQP, you can access the topics via REST, etcétera.'
  },
  { startTime: 1904.71, person: 'Karol', text: ' MQTT, yeah.' },
  {
    startTime: 1906.01,
    person: 'Karol',
    text: " Yeah, MQTT, that makes it another degree of coupling that's dismantled by the way the broker is implemented, right?"
  },
  { startTime: 1915.81, person: 'Karol', text: ' This makes it easier.' },
  {
    startTime: 1916.65,
    person: 'Karol',
    text: ' But we still have the problem, and this is a typical event-driven problem, that we have contract coupling in the terms of what is the scope of data.'
  },
  {
    startTime: 1930.21,
    person: 'Karol',
    text: ' And we still have a data model and data format coupling, well, data type and data format coupling, because contract coupling covers model.'
  },
  {
    startTime: 1940.01,
    person: 'Karol',
    text: " Which is basically, if we take just an event broker, it's unsolvable by an event broker, because event broker would have to parse the payload to be able to resolve that coupling."
  },
  { startTime: 1953.25, person: 'Aaron', text: " Yeah, it's outside of our scope." },
  { startTime: 1954.79, person: 'Aaron', text: " It's above our layer." },
  { startTime: 1956.11, person: 'Aaron', text: ' So it might be.' },
  { startTime: 1957.63, person: 'Aaron', text: ' Coming from this networking thing, right?' },
  {
    startTime: 1959.69,
    person: 'Aaron',
    text: " Like we don't want to be messing around with payloads."
  },
  {
    startTime: 1962.47,
    person: 'Aaron',
    text: " The hot path, we're just the transport among applications."
  },
  { startTime: 1967.21, person: 'Karol', text: ' Absolutely.' },
  {
    startTime: 1968.83,
    person: 'Karol',
    text: ' And then last of all, you always have semantic coupling, which is something we want.'
  },
  { startTime: 1976.57, person: 'Karol', text: ' This is the type of coupling we need to have.' },
  {
    startTime: 1978.79,
    person: 'Karol',
    text: " If we don't have semantic coupling, that means we're doing something very wrong, because that means we don't understand what data we're moving from point A to point B."
  },
  { startTime: 1989.61, person: 'Aaron', text: ' Define what you mean by semantic coupling.' },
  {
    startTime: 1993.99,
    person: 'Karol',
    text: ' The generalised understanding and meaning of transfer data, both business and metadata, on the level of users, business process, purpose of use, etc.'
  },
  {
    startTime: 2005.77,
    person: 'Karol',
    text: " That's the semantic understanding of the instantiated piece of a payload."
  },
  { startTime: 2013.71, person: 'Aaron', text: ' We all agree what this thing is about, right?' },
  { startTime: 2016.79, person: 'Karol', text: ' Exactly.' },
  {
    startTime: 2017.43,
    person: 'Karol',
    text: " We want to understand what it's for and what it's about."
  },
  {
    startTime: 2020.61,
    person: 'Karol',
    text: " Otherwise, we're doing something very wrong in our IT ecosystems, that we're moving data, but we're using it outside of the scope of what it means."
  },
  {
    startTime: 2030.09,
    person: 'Karol',
    text: " This happens quite a lot, actually, and it's a horrendous thing to resolve, because that leads to a lot of problems, and not in IT, but in business in general."
  },
  {
    startTime: 2041.97,
    person: 'Karol',
    text: ' But this is the type of coupling we actually want to have, and the rest we need to either mitigate or handle.'
  },
  { startTime: 2050.65, person: 'Aaron', text: ' Be aware of, at least, at the very least.' },
  { startTime: 2054.01, person: 'Aaron', text: " It's about choices." },
  {
    startTime: 2055.09,
    person: 'Aaron',
    text: " And thinking about from the data perspective, I don't have as many strong opinions as you do."
  },
  {
    startTime: 2064.83,
    person: 'Aaron',
    text: ' I know some installers have considered this more.'
  },
  {
    startTime: 2067.55,
    person: 'Aaron',
    text: " As we've slowly started to move up the stack, we released our micro-integrations."
  },
  {
    startTime: 2074.79,
    person: 'Aaron',
    text: ' We do not want to be a full-blown integration platform.'
  },
  {
    startTime: 2077.87,
    person: 'Aaron',
    text: " We have partners, and there's really good products out there that we don't want to do that."
  },
  {
    startTime: 2083.429,
    person: 'Aaron',
    text: " But for tiny, little, simple flows, maybe you don't need a whole-blown platform."
  },
  {
    startTime: 2088.65,
    person: 'Aaron',
    text: ' We have these micro-integrations just to do a little bit of...'
  },
  {
    startTime: 2090.81,
    person: 'Aaron',
    text: " It's like a connector that has some transform capabilities."
  },
  {
    startTime: 2094.15,
    person: 'Aaron',
    text: ' So people that have been working on that might have more things to say about data, data formats.'
  },
  {
    startTime: 2101.59,
    person: 'Aaron',
    text: ' I just always thought it should be like Star Wars, where you can speak whatever...'
  },
  {
    startTime: 2106.23,
    person: 'Aaron',
    text: ' As long as you can understand, you can speak your own language.'
  },
  {
    startTime: 2109.05,
    person: 'Aaron',
    text: " You don't have to all speak one common language."
  },
  { startTime: 2111.35, person: 'Aaron', text: " So it's more about the..." },
  { startTime: 2113.19, person: 'Aaron', text: ' Would that be Star Wars or more like Star Trek?' },
  { startTime: 2116.69, person: 'Aaron', text: ' No, Star Wars, man.' },
  {
    startTime: 2117.87,
    person: 'Aaron',
    text: ' So Han Solo is speaking English, and Greedo is speaking whatever language.'
  },
  { startTime: 2121.79, person: 'Aaron', text: ' But they can each understand each other, right?' },
  { startTime: 2123.83, person: 'Aaron', text: ' So everybody else is speaking...' },
  { startTime: 2127.91, person: 'Aaron', text: ' Yeah, everybody speaks their own language.' },
  {
    startTime: 2129.67,
    person: 'Aaron',
    text: ' And as long as you can understand, if everybody can understand every language, nobody needs to speak more than one.'
  },
  {
    startTime: 2135.67,
    person: 'Karol',
    text: ' All right, but you mentioned a very interesting feature provided by Solus being the micro-integrations.'
  },
  {
    startTime: 2143.25,
    person: 'Karol',
    text: ' Because we talked about micro-integrations quite a bit in our sessions and also where we met some time ago.'
  },
  {
    startTime: 2156.28,
    person: 'Karol',
    text: " I'll put them a little bit in the context because that's an interesting..."
  },
  {
    startTime: 2159.44,
    person: 'Karol',
    text: ' In general, an interesting feature in solving some very important problems in terms of EDA problems, which are, well, not native to EDA.'
  },
  { startTime: 2170.22, person: 'Karol', text: ' So if you ever consider publish-subscribe' },
  { startTime: 2175.18, person: 'Karol', text: ' in a context of one-to-many,' },
  { startTime: 2178.34, person: 'Karol', text: ' and this is something I, at first,' },
  { startTime: 2179.96, person: 'Karol', text: ' I have had troubles absolutely understanding' },
  {
    startTime: 2183.82,
    person: 'Karol',
    text: ' because me coming from service-orientated world,'
  },
  { startTime: 2187.28, person: 'Karol', text: ' where you have three layers of abstractions,' },
  { startTime: 2191.44, person: 'Karol', text: ' you have an integration platform,' },
  { startTime: 2192.76, person: 'Karol', text: ' you have the message broker in there,' },
  { startTime: 2194.56, person: 'Karol', text: ' and you have those abstraction layers' },
  { startTime: 2196.08, person: 'Karol', text: ' that are responsible for things,' },
  {
    startTime: 2197.98,
    person: 'Karol',
    text: ' and I did not realise that they actually mitigate'
  },
  { startTime: 2201.66, person: 'Karol', text: ' the EDA problem of publish-subscribe,' },
  { startTime: 2203.96, person: 'Karol', text: ' the problem being security.' },
  { startTime: 2206.6, person: 'Karol', text: ' Okay.' },
  {
    startTime: 2207.24,
    person: 'Karol',
    text: " If we do broadcasts, publish-subscribe, one-to-many, the mechanism itself, it's secure because every message broker, Solus included, has ACLs, only those that are on the access list, only those can access the structures and actually read the messages from topics."
  },
  { startTime: 2228.22, person: 'Karol', text: ' Perfectly fine.' },
  { startTime: 2229.58, person: 'Karol', text: ' Sure, yeah.' },
  {
    startTime: 2230.18,
    person: 'Karol',
    text: " The problem with using this pattern, publish-subscribe in general, the security problem doesn't come from the transport mechanism itself, it comes from what is the result of that."
  },
  {
    startTime: 2242.48,
    person: 'Karol',
    text: ' And the typical even driven architecture result of that is that every subscriber receives exactly the same payload.'
  },
  { startTime: 2252.64, person: 'Karol', text: ' Sure, yeah.' },
  {
    startTime: 2253.4,
    person: 'Karol',
    text: " Now, imagine you're sending GDPR-restricted data or whatever is the equivalent in North America, I don't really know the names for those privacy laws."
  },
  { startTime: 2267.1, person: 'Aaron', text: " Privacy stuff, yeah, I don't know." },
  { startTime: 2269.28, person: 'Karol', text: ' Privacy-restricted data.' },
  {
    startTime: 2270.8,
    person: 'Karol',
    text: " So let's say employee data, healthcare-related data, etcétera."
  },
  { startTime: 2277.78, person: 'Karol', text: ' Sure.' },
  { startTime: 2278.6, person: 'Karol', text: " And you're doing this via publish-subscribe." },
  { startTime: 2281.56, person: 'Karol', text: ' Yep.' },
  {
    startTime: 2281.76,
    person: 'Karol',
    text: ' So that means that every subscriber gets exactly the same set of data.'
  },
  { startTime: 2286.76, person: 'Karol', text: ' Yep.' },
  {
    startTime: 2287.38,
    person: 'Karol',
    text: ' Where they actually probably, for their business purposes, they actually probably need a subset.'
  },
  {
    startTime: 2293.36,
    person: 'Karol',
    text: " So while they, let's say, persist and save in their databases that subset, well, that data still arrived there."
  },
  {
    startTime: 2301,
    person: 'Karol',
    text: ' Arrived, meaning that it was probably at least logged somewhere in the log.'
  },
  { startTime: 2305.22, person: 'Aaron', text: ' It could have been looked at, yeah.' },
  {
    startTime: 2307,
    person: 'Aaron',
    text: ' If you send something, it could have been looked at, right?'
  },
  { startTime: 2309.14, person: 'Aaron', text: ' By any kind of, yeah.' },
  {
    startTime: 2310.66,
    person: 'Karol',
    text: ' Exactly, and now imagine one of those systems is compromised by whatever means.'
  },
  {
    startTime: 2316.56,
    person: 'Karol',
    text: ' For example, a disgruntled employee just copied all the logs from that system and that system never was sufficiently updated to anonymise logs.'
  },
  { startTime: 2326.6, person: 'Aaron', text: ' Yep.' },
  {
    startTime: 2327.06,
    person: 'Karol',
    text: ' And now we have a humongous leak of personal or healthcare-related data somewhere.'
  },
  {
    startTime: 2334.66,
    person: 'Karol',
    text: ' And this is the problem that is a consequence of using publish-subscribe.'
  },
  {
    startTime: 2341.36,
    person: 'Karol',
    text: ' Now, the interesting part to put the micro-integrations into context is that while all the message brokers will have that problem with publish-subscribe, Solace is actually actively solving that problem by introducing micro-integrations.'
  },
  {
    startTime: 2356.72,
    person: 'Karol',
    text: ' Because if you have micro-integrations, you can trim down that scope to the exact need to know.'
  },
  {
    startTime: 2365.22,
    person: 'Karol',
    text: ' Now, the absolutely funny thing, and analogous in my head from the perspective of service-orientated architecture, that is exactly the responsibility of the adapter layer in API-led architecture.'
  },
  {
    startTime: 2378.74,
    person: 'Karol',
    text: ' This is what adapters do in front of systems when those adapters subscribe to topics and then translate that to those particular systems.'
  },
  {
    startTime: 2387.18,
    person: 'Karol',
    text: ' So if you put micro-integrations in the context of an integration platform in API-led architecture, micro-integrations serve as the channel or adapter layer.'
  },
  { startTime: 2397.06, person: 'Karol', text: ' In this architecture, right?' },
  { startTime: 2402.22, person: 'Karol', text: ' Sure.' },
  {
    startTime: 2402.96,
    person: 'Karol',
    text: ' So contextually, they take that responsibility and they resolve certain pain points of pure event-driven architecture.'
  },
  {
    startTime: 2410.62,
    person: 'Karol',
    text: " And that's the very interesting part which none of the event and message brokers address at all, because they never look at it from a perspective of an ecosystem and the ecosystem problems."
  },
  {
    startTime: 2423.3,
    person: 'Karol',
    text: ' They look at it from a perspective of communication and protocol or transport.'
  },
  { startTime: 2429.58, person: 'Aaron', text: " Yeah, well, that's what I was thinking." },
  {
    startTime: 2431.68,
    person: 'Aaron',
    text: " Like, I've never thought of it as from a security perspective, but you're absolutely right, where if you are sending something, the full payload, maybe some of these consumers don't need that full payload."
  },
  {
    startTime: 2442.24,
    person: 'Aaron',
    text: ' The typical way to do that would have been like a kind of a double publish, right?'
  },
  {
    startTime: 2445.38,
    person: 'Aaron',
    text: ' You kind of read that message coming in, you might format the payload.'
  },
  {
    startTime: 2448.46,
    person: 'Aaron',
    text: ' But again, this is outside the scope of the broker itself, right?'
  },
  { startTime: 2451.32, person: 'Aaron', text: ' You need to kind of go, yeah.' },
  {
    startTime: 2452.78,
    person: 'Aaron',
    text: " But I will say, unlike some other brokers that are out there that people use, we do have a very, I wouldn't say complex."
  },
  {
    startTime: 2464.28,
    person: 'Aaron',
    text: ' We have a very smart topic system design for doing routing and filtering in the broker itself, right?'
  },
  {
    startTime: 2470.08,
    person: 'Aaron',
    text: ' Going back to your comment on ACLs, we have topics that are very granular.'
  },
  {
    startTime: 2474.92,
    person: 'Aaron',
    text: " They're multi-level, they're hierarchical, you know, with a slash between each level where you can specify on a level-by-level basis, certain identifiers, certain keywords to describe what's actually inside the payload of the message."
  },
  {
    startTime: 2488.36,
    person: 'Aaron',
    text: ' And so as a subscriber, you can be very specific or very coarse-grained or fine-grained.'
  },
  { startTime: 2494.08, person: 'Aaron', text: ' You can use wildcards on a particular level.' },
  {
    startTime: 2495.92,
    person: 'Aaron',
    text: ' I want all data from all regions or I only want UK data, right?'
  },
  {
    startTime: 2500.22,
    person: 'Aaron',
    text: " I'm subscribing to slash UK slash da-da-da-da-da or this particular company or this particular person."
  },
  {
    startTime: 2506.46,
    person: 'Aaron',
    text: " I mean, depending on how you've built your topic structure using your ACLs and you're subscribing to your topics, you can be very selective about what data you want."
  },
  { startTime: 2514.9, person: 'Aaron', text: ' And the broker does that filtering for you.' },
  {
    startTime: 2516.84,
    person: 'Aaron',
    text: " It's not a big, fat, coarse-grained topic, which is like a log file of some other brokers that are out there where you actually have to read the whole topic in and throw away stuff that you don't want, right?"
  },
  {
    startTime: 2528.72,
    person: 'Aaron',
    text: " That's how they do filtering, is in client space."
  },
  {
    startTime: 2530.86,
    person: 'Karol',
    text: " Now I see you're very, very, very careful about mentioning specific names."
  },
  { startTime: 2536.18, person: 'Aaron', text: ' No names, no names, of course, no.' },
  {
    startTime: 2537.24,
    person: 'Aaron',
    text: " But it's just a different way of doing things, right?"
  },
  {
    startTime: 2539.16,
    person: 'Aaron',
    text: ' So for certain use cases, you want that full feed most of the time.'
  },
  { startTime: 2543.34, person: 'Aaron', text: " So that's probably great." },
  {
    startTime: 2545.16,
    person: 'Karol',
    text: ' And this is a very EDA way of doing it, very operational way of doing it.'
  },
  {
    startTime: 2549.86,
    person: 'Karol',
    text: ' And most message brokers are operational message brokers.'
  },
  {
    startTime: 2553.86,
    person: 'Karol',
    text: ' Yes, there are those log brokers, which shall not be named.'
  },
  {
    startTime: 2560.02,
    person: 'Karol',
    text: ' But yeah, but see, this is a very good distinction there in terms of security.'
  },
  {
    startTime: 2566.44,
    person: 'Karol',
    text: ' In JMS, you could also apply that kind of filtering.'
  },
  {
    startTime: 2570.92,
    person: 'Karol',
    text: ' In AMQP as well, you can apply that kind of filtering.'
  },
  { startTime: 2574.4, person: 'Karol', text: " I'm not familiar with AMQP-1." },
  { startTime: 2576.48, person: 'Karol', text: " AMQP doesn't, yeah." },
  {
    startTime: 2577.8,
    person: 'Aaron',
    text: ' Well, so Rabbit, Rabbit, AMQP-091, which is Rabbit.'
  },
  { startTime: 2581.88, person: 'Aaron', text: ' Rabbit MQ.' },
  { startTime: 2582.64, person: 'Aaron', text: ' Only, Rabbit only.' },
  { startTime: 2583.7, person: 'Aaron', text: ' Yeah, yeah.' },
  { startTime: 2584.14, person: 'Aaron', text: ' So you can use a key exchange and...' },
  { startTime: 2587.44, person: 'Aaron', text: ' Routing key.' },
  { startTime: 2588.48, person: 'Aaron', text: " Routing key, that's it, yeah." },
  {
    startTime: 2590.36,
    person: 'Karol',
    text: ' Yeah, and in JMS, you could have used selectors on subscribing to a topic or on bridging, bridges between topics and topics, topics and queues, whatever that may be.'
  },
  { startTime: 2603.3, person: 'Karol', text: ' EMS has hierarchical topics as well.' },
  { startTime: 2605.36, person: 'Aaron', text: " It's just people don't use it quite..." },
  {
    startTime: 2607.28,
    person: 'Aaron',
    text: " The way they've implemented it is a little bit different than Solace, but you can do similar."
  },
  {
    startTime: 2611.24,
    person: 'Aaron',
    text: " Just the closest analogue, if people know MQTT, it's very similar to that, right?"
  },
  {
    startTime: 2616.86,
    person: 'Aaron',
    text: ' In terms of the hierarchical topic structure, very dynamic topics.'
  },
  {
    startTime: 2620.54,
    person: 'Aaron',
    text: ' You know, publishers specify on each message what that topic for that message is going to be.'
  },
  { startTime: 2625.04, person: 'Aaron', text: " It's metadata." },
  { startTime: 2625.94, person: 'Aaron', text: " It's not a thing." },
  {
    startTime: 2626.84,
    person: 'Aaron',
    text: " It's not an object that I've created on the broker."
  },
  {
    startTime: 2629.72,
    person: 'Karol',
    text: " But the problem with that kind of URI approach is that, of course, we're tending a little bit to security because now the subscriber does not get the full funnel of all the data published into that format, whatever the variables may be in that format."
  },
  {
    startTime: 2649.92,
    person: 'Karol',
    text: " It's securing the subscriber on a level of volume of that data, not on the level of payload."
  },
  { startTime: 2657.22, person: 'Aaron', text: ' Well, yeah, yeah.' },
  { startTime: 2658.56, person: 'Aaron', text: " I mean, the broker can't know payload, right?" },
  { startTime: 2660.94, person: 'Karol', text: ' Exactly.' },
  {
    startTime: 2661.72,
    person: 'Aaron',
    text: ' It would have to be governed some other way that like, yeah, you should not be publishing secure payloads on these topics over here or something like that.'
  },
  {
    startTime: 2669.1,
    person: 'Karol',
    text: " Yeah, and that's exactly why either we need an integration platform in place or we need the micro integrations."
  },
  {
    startTime: 2676.18,
    person: 'Karol',
    text: " If somebody doesn't want to invest in an integration platform because that's not a sufficient use case, then micro integrations are the answer there."
  },
  { startTime: 2687.32, person: 'Karol', text: ' And this resembles the very old style.' },
  {
    startTime: 2689.86,
    person: 'Karol',
    text: ' There is a transitional architectural style between broker architecture and API led architecture, where basically you had those brokers that were handling that orchestration and everything.'
  },
  { startTime: 2701.06, person: 'Karol', text: ' But that was all centralised.' },
  {
    startTime: 2703.62,
    person: 'Karol',
    text: " And somebody figured at a certain point, okay, let's add adapters that are deployed with those systems to do that small translation from a unified data model within the broker integration platform to the data model of that specific system and abstract the logic of that system in terms of data access."
  },
  {
    startTime: 2727.04,
    person: 'Karol',
    text: ' And this very much resembles what now Solace is doing with micro integrations in that sense.'
  },
  {
    startTime: 2733.78,
    person: 'Karol',
    text: ' So there are plenty of very old school analogues to that approach.'
  },
  {
    startTime: 2737.88,
    person: 'Karol',
    text: ' And these are all well proven analogues so the approach here with micro integrations solving that problem is also a very well proven approach for that smaller kind of uses where that kind of huge deployment of all those interoperability tools is required.'
  },
  {
    startTime: 2762.9,
    person: 'Karol',
    text: ' And another analogous way to do it, and Solace is a very good broker to do that due to the implementation of REST, but also possible with other message brokers is to, instead of doing micro integrations, use an API gateway.'
  },
  { startTime: 2778.14, person: 'Karol', text: ' Some API gateways enable a protocol mediation.' },
  {
    startTime: 2783.1,
    person: 'Karol',
    text: ' Protocol mediation being that the gateway is the subscriber to a topic, pulling the data and then turning that communication into a REST call to a system on the other side.'
  },
  { startTime: 2794.46, person: 'Karol', text: ' And this is exactly the same pattern.' },
  {
    startTime: 2796.58,
    person: 'Karol',
    text: ' And now we have a race between different product vendors.'
  },
  { startTime: 2801.84, person: 'Karol', text: ' Who can deliver that better?' },
  {
    startTime: 2804.4,
    person: 'Karol',
    text: ' So we have the API management vendors that, oh, we can do protocol mediation.'
  },
  {
    startTime: 2810.14,
    person: 'Karol',
    text: " You can use any message broker and that's going to be fine."
  },
  { startTime: 2812.36, person: 'Karol', text: ' We have Solace with micro integrations.' },
  { startTime: 2813.92, person: 'Karol', text: ' Hey, we delivered the same thing.' },
  { startTime: 2815.98, person: 'Karol', text: ' Go with us.' },
  {
    startTime: 2816.98,
    person: 'Karol',
    text: ' We have integration platforms and they say, yeah, use any message broker you want.'
  },
  { startTime: 2821.46, person: 'Karol', text: " We're going to be great with that." },
  {
    startTime: 2822.76,
    person: 'Karol',
    text: " It's all a matter of balancing what are the fine grained requirements for interoperability."
  },
  {
    startTime: 2829.36,
    person: 'Aaron',
    text: " And that's what maybe someone like a solutions engineer like myself might work with a customer to help identify those requirements and kind of figure out the best path forward."
  },
  {
    startTime: 2838.92,
    person: 'Aaron',
    text: ' There are times when Solace is not the best fit, you know, and I try to be honest.'
  },
  {
    startTime: 2845.78,
    person: 'Aaron',
    text: " I know the sales guys always want to sell lots of things, but I'll try to be like, all right, you might not need this particular thing or feature."
  },
  {
    startTime: 2853.18,
    person: 'Aaron',
    text: ' I do want to say micro integrations, people are like, why do you call them that?'
  },
  { startTime: 2857.1, person: 'Aaron', text: ' It came from like microservices, right?' },
  {
    startTime: 2858.88,
    person: 'Aaron',
    text: ' Like kind of a couple, like little small pieces of functionality.'
  },
  {
    startTime: 2862.68,
    person: 'Aaron',
    text: ' We wanted to build some kind of way and more than just a connector, a lot of people still call them connectors.'
  },
  {
    startTime: 2867.14,
    person: 'Aaron',
    text: " It's the fact that there are connectors plus a transform in there, like you can configure within there."
  },
  {
    startTime: 2871.84,
    person: 'Aaron',
    text: " You don't have to, it could just be a straight through connector, but you know, you want to, you know, our brokers, if you stick enough of them together, we call, you know, we call it an event mesh where data can just kind of flow around between different brokers on-prem or different clouds."
  },
  {
    startTime: 2886.86,
    person: 'Aaron',
    text: ' And we want to move that integration to the edge.'
  },
  { startTime: 2888.42, person: 'Aaron', text: " And that's why we're at it." },
  {
    startTime: 2889.82,
    person: 'Aaron',
    text: " So micro integrations, just a little, it's a connector plus a little bit more smarts."
  },
  {
    startTime: 2894.7,
    person: 'Aaron',
    text: " And yeah, that's microservice, micro integration."
  },
  { startTime: 2898.58, person: 'Aaron', text: ' It kind of makes sense.' },
  { startTime: 2899.96, person: 'Aaron', text: " I don't know." },
  {
    startTime: 2900.76,
    person: 'Aaron',
    text: ' I tried to get our PLM to call them Mintz, like M-I-N-T-Z, Mintz.'
  },
  {
    startTime: 2905.46,
    person: 'Aaron',
    text: " And then we could have like Mentos as like, you know, as our swag at conferences and stuff, but he didn't go for it."
  },
  { startTime: 2911.1, person: 'Aaron', text: ' I thought it was a great name.' },
  {
    startTime: 2912.26,
    person: 'Aaron',
    text: ' So we call them M-I, we call them M-I-N-T-Z internally.'
  },
  {
    startTime: 2914.78,
    person: 'Aaron',
    text: ' But Andrew, Mintz, I think Mintz is a great name.'
  },
  { startTime: 2917.34, person: 'Aaron', text: ' So micro integration.' },
  { startTime: 2918.82, person: 'Aaron', text: ' Oh man.' },
  { startTime: 2920.24, person: 'Aaron', text: ' We got some questions popping up there.' },
  { startTime: 2922.26, person: 'Karol', text: ' Oh yeah, this is a good one.' },
  {
    startTime: 2924.5,
    person: 'Karol',
    text: " I think this is very relatable to micro integrations, but I think that's a very different aspect."
  },
  { startTime: 2931.22, person: 'Aaron', text: ' Micro gateway.' },
  { startTime: 2932.18, person: 'Aaron', text: ' Yes, yes we do.' },
  { startTime: 2934.36, person: 'Aaron', text: ' Except nobody uses that, I think.' },
  {
    startTime: 2936.14,
    person: 'Aaron',
    text: ' We built it for a customer for a use case that went away.'
  },
  { startTime: 2940.14, person: 'Aaron', text: ' And so Solace, yeah.' },
  { startTime: 2941.72, person: 'Aaron', text: ' So Solace is a multi-protocol broker.' },
  {
    startTime: 2943.62,
    person: 'Aaron',
    text: ' It has our native protocol, which is the fully featured SMF.'
  },
  {
    startTime: 2948.22,
    person: 'Aaron',
    text: " You know, that's what we had for many, many, many years."
  },
  { startTime: 2950.78, person: 'Aaron', text: ' As AMQP and MQTT, these standards.' },
  { startTime: 2954.36, person: 'Aaron', text: ' MQTT coming from IoT is made by guys at IBM.' },
  { startTime: 2959.32, person: 'Aaron', text: ' MQTT, AMQP as well.' },
  {
    startTime: 2960.66,
    person: 'Aaron',
    text: ' These standards got made and we implemented them in our broker.'
  },
  {
    startTime: 2963.94,
    person: 'Aaron',
    text: " But we also have, our broker can talk REST. Now we typically, I don't wanna say bash REST, but REST is not the most performant of protocols, right?"
  },
  {
    startTime: 2974.86,
    person: 'Aaron',
    text: " It's asynchronous, quite, it's not very compact."
  },
  {
    startTime: 2981.68,
    person: 'Aaron',
    text: " It's point to point, it's a blocking call on the network."
  },
  { startTime: 2985.08, person: 'Aaron', text: " So it's easy." },
  { startTime: 2986.7, person: 'Aaron', text: " It's easy and simple." },
  {
    startTime: 2987.86,
    person: 'Aaron',
    text: ' Everything understands REST. And sometimes you just wanna like post somewhere, post one thing.'
  },
  {
    startTime: 2992.42,
    person: 'Aaron',
    text: " You know, you're not streaming hundreds of thousands of messages."
  },
  {
    startTime: 2995.38,
    person: 'Karol',
    text: " So we have this ability to- I'll only argue on one thing."
  },
  { startTime: 3000.38, person: 'Karol', text: " What's that?" },
  { startTime: 3001.92, person: 'Karol', text: ' It still can be very performant.' },
  { startTime: 3004.2, person: 'Karol', text: " It's not very responsive." },
  { startTime: 3009.52, person: 'Aaron', text: ' Responsiveness is the characteristic.' },
  {
    startTime: 3012.5,
    person: 'Karol',
    text: ' And this is coming from hours of discussions with Mark Richards and listening also to his partner in crime, Neil Ford, rant about it on different trainings.'
  },
  {
    startTime: 3022.54,
    person: 'Karol',
    text: ' There is a distinction between performance and responsiveness.'
  },
  {
    startTime: 3027.18,
    person: 'Karol',
    text: ' The distinction is, again, exactly about blocking and non-blocking communication, which you mentioned then.'
  },
  {
    startTime: 3034.52,
    person: 'Karol',
    text: ' The communication can be still very performant and very low latency with a blocking communication.'
  },
  { startTime: 3041.18, person: 'Karol', text: ' Sure, yep.' },
  { startTime: 3041.94, person: 'Karol', text: " But it's gonna be a lot better." },
  {
    startTime: 3044.12,
    person: 'Karol',
    text: " The system is gonna be a lot better responsive when the communication is not blocking, which means that if we use asynchronous, the communication is, let's say, 25 milliseconds and we're done."
  },
  {
    startTime: 3057.04,
    person: 'Karol',
    text: " If we use sync, we're always dependent on the response time of the system or the API in the back, right?"
  },
  {
    startTime: 3065.24,
    person: 'Karol',
    text: ' So that accounts to, well, getting the call out, waiting for the response, and then processing that response, which is the whole thing can amount to various times, right?'
  },
  {
    startTime: 3076.82,
    person: 'Karol',
    text: ' Not just 25 milliseconds needed to send out that message, but also the wait time and then to process the response.'
  },
  {
    startTime: 3086.76,
    person: 'Karol',
    text: " So we're literally blocking a thread in our programme to wait for that response."
  },
  {
    startTime: 3092.82,
    person: 'Karol',
    text: ' So the programme, if we would consider that programme having a single thread, becomes unresponsive.'
  },
  { startTime: 3099.2, person: 'Aaron', text: ' Yes.' },
  {
    startTime: 3099.84,
    person: 'Karol',
    text: " So we're now, if we're doing async, now we're boosting the responsiveness because we're freeing up the resources."
  },
  { startTime: 3106.8, person: 'Karol', text: " So it's not performance-wise." },
  {
    startTime: 3108.88,
    person: 'Karol',
    text: " It's very close to performance because obviously it will somewhat impact that performance, but it's the characteristic is responsiveness, which is a very fun distinction."
  },
  {
    startTime: 3118.08,
    person: 'Karol',
    text: ' Not a lot of people actually go about to look at.'
  },
  { startTime: 3123.24, person: 'Aaron', text: " That's an interesting way of phrasing it." },
  {
    startTime: 3124.76,
    person: 'Aaron',
    text: " But this is why some of these kind of micro-architecture, the microservice architectures that are built on REST, when they get into scale, they have to scale out their web server because every single call is a blocking, it's a socket that's being held open, right?"
  },
  {
    startTime: 3137.34,
    person: 'Aaron',
    text: ' And if you have a chain of these things bouncing around between different microservices, you have all these web servers basically sitting around holding all these sockets open while the communication is kind of chained through a bunch of systems.'
  },
  {
    startTime: 3148.88,
    person: 'Aaron',
    text: " So if you can, I mean, there's also blocking at a programming level, right?"
  },
  {
    startTime: 3153.72,
    person: 'Aaron',
    text: " Like in my thread, blocking programming is often easier because if there's an exception or an error, I can deal with it right there because my thread stops and it either succeeds or I throw an exception and there's an error."
  },
  {
    startTime: 3167.44,
    person: 'Aaron',
    text: ' Asynchronous programming is more complicated because your error response might come on a different thread over there later, and now you have to somehow correlate it, right?'
  },
  {
    startTime: 3177.28,
    person: 'Aaron',
    text: ' To build good high performance, high throughput systems is probably much more complicated than just writing simple rest posts here and there, right?'
  },
  { startTime: 3187.16, person: 'Karol', text: " Let's not get into the error handling in EDA." },
  {
    startTime: 3190.06,
    person: 'Karol',
    text: " That's a topic we can talk more than one evening about because that's a very, very complex problem with the correlation aspect, error handling aspect, handling metadata to get all that to work."
  },
  { startTime: 3206.84, person: 'Aaron', text: ' It is.' },
  {
    startTime: 3208.06,
    person: 'Aaron',
    text: " I'll just say that at least log if you get an exception anywhere in your code, please."
  },
  { startTime: 3213.38, person: 'Aaron', text: " Because I've done a lot of developer workshops." },
  {
    startTime: 3215.02,
    person: 'Aaron',
    text: " I've done code reviews and people just code the happy path and here's some error handlers that you have to implement so at least you know if the broker or the API complains and some people just don't have any commented out."
  },
  {
    startTime: 3228.24,
    person: 'Aaron',
    text: " So if you're a developer out there, just please log exceptions even if you're not acting on them just so you can debug them later, please."
  },
  {
    startTime: 3235.06,
    person: 'Karol',
    text: " And if you wanna go better in terms of what you're building in terms of communication, always use some sort of a metadata use a message ID, correlation ID for your messages whether or not they are rest or asynchronous or asynchronous, it doesn't matter."
  },
  {
    startTime: 3254.22,
    person: 'Karol',
    text: " Use the metadata because that's gonna help you then later with traceability, root cause analysis, finding that error, understanding what the hell happened in my system or my ecosystem."
  },
  {
    startTime: 3267.2,
    person: 'Karol',
    text: " That's a very important thing that a lot of people forget about."
  },
  {
    startTime: 3270.08,
    person: 'Aaron',
    text: " Well, there's standards for this stuff now, right?"
  },
  { startTime: 3271.78, person: 'Aaron', text: " There's open telemetry." },
  {
    startTime: 3272.96,
    person: 'Aaron',
    text: " You know, it's I think the second biggest CNCF project after Kubernetes."
  },
  {
    startTime: 3280.02,
    person: 'Aaron',
    text: " Like they've standardised with Zipkin and a bunch of other kind of like ways to do tracing and obviously in a restful architecture."
  },
  {
    startTime: 3289.38,
    person: 'Aaron',
    text: ' The nice thing about having a broker like an event broker like Solace is that all your communication goes through there, right?'
  },
  {
    startTime: 3294.78,
    person: 'Aaron',
    text: " So it's easy to monitor it, to like log things, to like watch communication as it goes."
  },
  {
    startTime: 3300.46,
    person: 'Aaron',
    text: " When you have a bunch of distributed non-brokered communication like a restful architecture where everybody's just doing individual calls to unless you have something like Istio like a service mesh that can kind of monitoring and managing that."
  },
  {
    startTime: 3312.26,
    person: 'Aaron',
    text: ' How do you track data flying around between your architect, like your apps?'
  },
  { startTime: 3316.32, person: 'Aaron', text: " There's, it's very difficult, right?" },
  {
    startTime: 3317.82,
    person: 'Aaron',
    text: ' So open telemetry allows you to insert these trace IDs, these span IDs, so that you can watch the hops of messages going around.'
  },
  {
    startTime: 3328.32,
    person: 'Karol',
    text: " And this is a very interesting use case going back to the original question that's micro gateways."
  },
  {
    startTime: 3338.24,
    person: 'Karol',
    text: " And I'm now trying to see if I have this book somewhere."
  },
  {
    startTime: 3342.2,
    person: 'Karol',
    text: ' Yeah, I actually have it somewhere in my bookshelf here.'
  },
  { startTime: 3345.78, person: 'Karol', text: ' There we go.' },
  {
    startTime: 3346.48,
    person: 'Karol',
    text: ' This is very, very old book called Enterprise Integration Patterns.'
  },
  { startTime: 3354.04, person: 'Aaron', text: ' Oh, classic, yeah.' },
  { startTime: 3354.9, person: 'Karol', text: ' Classic from what?' },
  { startTime: 3356.6, person: 'Karol', text: ' 2006 written by Gregor Hohpe.' },
  { startTime: 3360.5, person: 'Karol', text: " That's a classic." },
  {
    startTime: 3362.2,
    person: 'Karol',
    text: " If you're an integrator, that's a must have just to understand even driven architecture well."
  },
  {
    startTime: 3369.94,
    person: 'Aaron',
    text: " And I'm trying to find- All sorts of integration patterns, yeah."
  },
  {
    startTime: 3372.24,
    person: 'Karol',
    text: ' Yeah, all sorts of, well, most of them are related to even driven design on a- Messaging, yeah.'
  },
  {
    startTime: 3378.24,
    person: 'Karol',
    text: ' Yeah, messaging and even driven design on a system level.'
  },
  {
    startTime: 3384.24,
    person: 'Karol',
    text: ' Since the creation of this book, a lot of things have happened in the industry that changed interoperability drastically.'
  },
  {
    startTime: 3391.92,
    person: 'Karol',
    text: " So that book doesn't cover a lot of the topics, which is somewhat of a problem."
  },
  {
    startTime: 3397.72,
    person: 'Karol',
    text: " It's 20 years old, so- 20 years old, yeah, exactly."
  },
  {
    startTime: 3400.62,
    person: 'Karol',
    text: ' So the aforementioned micro gateways relate to this lovely chapter, which nobody can see in the camera.'
  },
  { startTime: 3408.96, person: 'Karol', text: " So I'll just say it's a wiretap pattern." },
  { startTime: 3411.88, person: 'Karol', text: ' Yeah, wiretapping, all right.' },
  {
    startTime: 3413.34,
    person: 'Karol',
    text: ' Wiretapping, this is a very lovely pattern from this book.'
  },
  {
    startTime: 3416.4,
    person: 'Karol',
    text: ' I never heard of it before I read this book, to be honest, because again, my background service-orientated architecture integration platforms.'
  },
  {
    startTime: 3425.78,
    person: 'Karol',
    text: " So if we're doing integration platforms, we don't really care about wiretapping because we're already parsing the goddamn payload."
  },
  {
    startTime: 3432.52,
    person: 'Karol',
    text: ' But wiretapping in event-driven architecture is something absolutely brilliant for use cases other than just transferring that data somewhere.'
  },
  {
    startTime: 3442.88,
    person: 'Karol',
    text: ' And micro gateways is equivalent of a wiretap on a synchronous communication to turn the request and the response into an event for whatever use you have.'
  },
  {
    startTime: 3457.04,
    person: 'Karol',
    text: ' And I found that the micro gateway is absolutely brilliant if you want to have proper observability on your RESTful communication, on the medium of the communication, on the protocol level, not on the system level.'
  },
  {
    startTime: 3473.66,
    person: 'Aaron',
    text: " Yeah, if I could just explain it for 30 seconds so people actually know what we're talking about."
  },
  {
    startTime: 3477.72,
    person: 'Aaron',
    text: " So Solace, as a multi-protocol broker, we have a REST API, an HTTP, it's not REST, it's an HTTP API where you can post into the broker as a publisher, and that message can then, you know, that becomes a message and you can listen to it with a JMS subscriber or a MQTT connection."
  },
  { startTime: 3495.66, person: 'Aaron', text: ' And the broker can also webhook out.' },
  {
    startTime: 3497.66,
    person: 'Aaron',
    text: ' Like if you put a message on a queue, we can say, send this, post this message to somewhere else.'
  },
  { startTime: 3502.02, person: 'Aaron', text: " So that's our messaging mode." },
  {
    startTime: 3503.26,
    person: 'Aaron',
    text: ' Then our gateway mode, the broker acts as a proxy.'
  },
  {
    startTime: 3506.86,
    person: 'Aaron',
    text: ' And it basically, you publish into the broker and then it just goes straight through the broker and out the other side to your designated endpoint.'
  },
  { startTime: 3513.68, person: 'Aaron', text: ' And it sits in the middle.' },
  {
    startTime: 3514.74,
    person: 'Aaron',
    text: ' And you might say, well, that sounds like extra hops and a waste of time, why would I want to do that?'
  },
  {
    startTime: 3520.5,
    person: 'Aaron',
    text: ' And for this one, one of these is exactly the right use cases.'
  },
  { startTime: 3523.58, person: 'Aaron', text: ' I want to wiretap.' },
  {
    startTime: 3524.84,
    person: 'Aaron',
    text: ' Publish subscribe by default gives you a wiretapping ability.'
  },
  {
    startTime: 3528.4,
    person: 'Aaron',
    text: " It's like, if your communication is over publish subscribe and you want to listen, you want to tap into that flow of information, you just add another subscriber."
  },
  {
    startTime: 3536.3,
    person: 'Aaron',
    text: " It's called subscribing to that topic or topics, right?"
  },
  { startTime: 3538.86, person: 'Aaron', text: " It's nothing much." },
  {
    startTime: 3540,
    person: 'Aaron',
    text: ' And so when that REST post or REST get or REST whatever it is comes into the broker, it gets translated into a message and then shot out the other end.'
  },
  {
    startTime: 3547.76,
    person: 'Aaron',
    text: " But while it's in the broker, it's a message and you can subscribe to it."
  },
  {
    startTime: 3550.42,
    person: 'Aaron',
    text: ' And you can listen to the response as it comes back through.'
  },
  {
    startTime: 3553.06,
    person: 'Aaron',
    text: ' And you could use that to do triggers or logs or all sorts of other stuff.'
  },
  {
    startTime: 3558.04,
    person: 'Aaron',
    text: ' I actually recently used the micro gateway mode.'
  },
  { startTime: 3560.96, person: 'Aaron', text: " I pointed it back to the broker's admin port." },
  {
    startTime: 3564.64,
    person: 'Aaron',
    text: ' And so I logged into the PubSubPlus manager GUI via the micro gateway port.'
  },
  {
    startTime: 3570.32,
    person: 'Aaron',
    text: ' And then I could listen to all of the HTML and GUI and all the calls going back and forth via messages.'
  },
  { startTime: 3579.68, person: 'Aaron', text: " It's kind of nerdy, but yeah, I enjoyed it." },
  {
    startTime: 3583.44,
    person: 'Aaron',
    text: " You can wiretap, point it to like amazon.com, point your Solace broker's backend to amazon.com."
  },
  {
    startTime: 3590.1,
    person: 'Aaron',
    text: ' And then when you point your browser to Solace, it will actually, all of the responses, all that webpage will fly through the broker as messages.'
  },
  {
    startTime: 3598.96,
    person: 'Aaron',
    text: " I don't know what that's useful for, but it's kind of neat."
  },
  {
    startTime: 3601.62,
    person: 'Karol',
    text: " So yeah, but the reason why we make a distinction between a PubSub and wiretap is primarily that PubSub, if we think about integration patterns, we're thinking about moving the business data."
  },
  {
    startTime: 3617.38,
    person: 'Karol',
    text: " While if we're thinking about wiretapping, we're not thinking about the business use case."
  },
  {
    startTime: 3622.5,
    person: 'Karol',
    text: " We're thinking about more of a metadata operational use case."
  },
  {
    startTime: 3625.84,
    person: 'Karol',
    text: " So if we're thinking, okay, we have some sort of a communication, let's say, Salesforce and NetSuite, they're related systems."
  },
  {
    startTime: 3639.18,
    person: 'Karol',
    text: ' They often cooperate and they need to communicate.'
  },
  {
    startTime: 3642.8,
    person: 'Karol',
    text: " So now we're trying to figure out in terms of temporary analytics, what's going on."
  },
  {
    startTime: 3650.88,
    person: 'Karol',
    text: " So if we proxy all that communication through a micro gateway and wiretap it, we can source that even for, let's say, temporarily for the purposes of our analysis."
  },
  {
    startTime: 3661.72,
    person: 'Karol',
    text: " Let's say we're trying to analyse anomalies in traffic."
  },
  {
    startTime: 3667.62,
    person: 'Karol',
    text: ' Anomalies being the traffic originating from somewhere else in the actual Salesforce system.'
  },
  {
    startTime: 3673.86,
    person: 'Karol',
    text: " Somebody is representing themselves as Salesforce, but they're actually a malicious party that's trying to do something in our network, trying to communicate with NetSuite to, let's say, source some information from NetSuite."
  },
  {
    startTime: 3688.34,
    person: 'Karol',
    text: " And if we are wiretapping that, and that's a temporary situation, we could source a sample of data over, let's say, next two hours, the next day, and then analyse that in terms of the metadata of the communication."
  },
  {
    startTime: 3703.36,
    person: 'Karol',
    text: " Because if we're wiretapping, all the HTTP headers will be available."
  },
  {
    startTime: 3708.1,
    person: 'Karol',
    text: " All that metadata that we've put into that will be available."
  },
  { startTime: 3710.98, person: 'Karol', text: ' So we can see IPs.' },
  { startTime: 3713.98, person: 'Karol', text: ' We can see how the headers are composed.' },
  {
    startTime: 3717.3,
    person: 'Karol',
    text: ' If there are discrepancies in the build of the headers, we know that Salesforce is, for example, sending a very standardised set of HTTP headers because we define those headers and the calls that these have to pay.'
  },
  { startTime: 3729.14, person: 'Karol', text: ' Okay.' },
  {
    startTime: 3729.88,
    person: 'Karol',
    text: " And if we see that there are discrepancies and there is communication towards NetSuite that doesn't have all the headers or has excessive headers or has headers with, let's say, correlation IDs formatted in a different way."
  },
  { startTime: 3745.1, person: 'Karol', text: ' Say we use, in Salesforce, we use UUID or GUID.' },
  {
    startTime: 3752.7,
    person: 'Karol',
    text: " And this one is, for example, sending just some sort of a string that, let's say, a millisecond timestamp."
  },
  {
    startTime: 3758.38,
    person: 'Karol',
    text: ' Now we can weed those out in analysis thanks to the micro gateway and figure out, oh, we have our anomaly.'
  },
  { startTime: 3767.98, person: 'Karol', text: ' This is the source of our anomaly.' },
  {
    startTime: 3769.36,
    person: 'Karol',
    text: ' This is the source of our discrepancies in data.'
  },
  { startTime: 3773.52, person: 'Karol', text: ' Okay.' },
  { startTime: 3773.78, person: 'Karol', text: " Let's analyse further where that comes from." },
  { startTime: 3775.64, person: 'Karol', text: " Let's track it down." },
  { startTime: 3776.92, person: 'Karol', text: ' And this kind of behaviour enables us to do so.' },
  {
    startTime: 3781.1,
    person: 'Aaron',
    text: ' If all of your REST communication was going through an API gateway, like none of these things are making direct service calls to each other, then you could probably do it there as well, right?'
  },
  { startTime: 3788.94, person: 'Aaron', text: " It's essentially, you want to have a broker." },
  {
    startTime: 3790.44,
    person: 'Aaron',
    text: ' You want to have something in the middle that you can kind of observe the traffic going through it.'
  },
  {
    startTime: 3794.92,
    person: 'Aaron',
    text: ' But yeah, like any kind of audit type of use case or any kind of analytics type of use case, you can easily just tune in, wiretap to that feed that you want.'
  },
  { startTime: 3804.62, person: 'Aaron', text: " And it's a great..." },
  { startTime: 3805.98, person: 'Aaron', text: ' And it makes it a lot more...' },
  {
    startTime: 3807.86,
    person: 'Aaron',
    text: " The thing I try to impress upon people when I'm doing these workshops, you know, around Publish, Subscribe, is that it kind of future-proofs you to some degree."
  },
  {
    startTime: 3815.94,
    person: 'Aaron',
    text: " It allows you to be flexible in the future with your architecture in a sense that you're not locked into a point-to-point style of communication where you might say, all right, now I want to send some of this data over there, or some other consumer is interested in the same data."
  },
  {
    startTime: 3829.54,
    person: 'Aaron',
    text: " If I'm locked into a point-to-point architecture, now I have to do extra work to like double publish or put it somewhere else."
  },
  { startTime: 3836.56, person: 'Aaron', text: ' And so I had a...' },
  {
    startTime: 3837.68,
    person: 'Aaron',
    text: ' Just as an analogy, I had a demo written where you could interact with it.'
  },
  {
    startTime: 3843.14,
    person: 'Aaron',
    text: ' Cars were driving around and like, you know, you could break down and you could fix your tyre.'
  },
  { startTime: 3847.42, person: 'Aaron', text: ' And we wanted to gamify it.' },
  {
    startTime: 3851.42,
    person: 'Aaron',
    text: ' My boss at the time wanted to gamify it for user group.'
  },
  { startTime: 3854.1, person: 'Aaron', text: " And I couldn't find the source code." },
  {
    startTime: 3855.4,
    person: 'Aaron',
    text: " I didn't know where it was, but all of the communication was going over Solace."
  },
  {
    startTime: 3860.22,
    person: 'Aaron',
    text: ' And I just thought, you know, I could just subscribe to these topics that people are like interacting with, like when you break down or when you fix your flat tyre.'
  },
  {
    startTime: 3867.98,
    person: 'Aaron',
    text: ' And I just wrote a little subscriber that listened to people playing with the game.'
  },
  {
    startTime: 3873.98,
    person: 'Aaron',
    text: ' And then I just built a dashboard off that data without having to like touch the original code.'
  },
  {
    startTime: 3879.58,
    person: 'Aaron',
    text: ' The publishers, the producers, the game just kept working the way it was, but I could now subscribe to it and build additional value, my little, you know, leaderboard without actually touching it.'
  },
  {
    startTime: 3889.4,
    person: 'Aaron',
    text: " So it's great in the sense that, yeah, you can like wire tap that data for other use cases without having to touch your original producers and subscribers."
  },
  { startTime: 3897.44, person: 'Aaron', text: ' So yeah.' },
  { startTime: 3900.36, person: 'Aaron', text: " Well, we got to, let's see." },
  { startTime: 3902.02, person: 'Aaron', text: ' What does Stefan say?' },
  { startTime: 3903.12, person: 'Aaron', text: ' Is there a person setting this up?' },
  { startTime: 3906.3, person: 'Aaron', text: ' Hey, yeah, I guess so.' },
  { startTime: 3910.64, person: 'Karol', text: ' Yes, yes, they can.' },
  { startTime: 3912.26, person: 'Karol', text: ' Gotta be very careful about that.' },
  {
    startTime: 3915.88,
    person: 'Karol',
    text: ' All software needs to be a subject to audit and reviews and checking the configs secured from a network perspective and all that.'
  },
  {
    startTime: 3928.1,
    person: 'Karol',
    text: " There's so many layers to that what needs to be checked to secure your IT ecosystem."
  },
  { startTime: 3933.92, person: 'Karol', text: ' Absolutely.' },
  {
    startTime: 3934.74,
    person: 'Karol',
    text: " But you can set this kind of wire tap anywhere and that's kind of backdoor."
  },
  {
    startTime: 3939.12,
    person: 'Karol',
    text: " You're using an API management in your API management policies and security policies."
  },
  { startTime: 3944.62, person: 'Karol', text: ' You can create a wire tap.' },
  { startTime: 3946.26, person: 'Karol', text: ' You can create a backdoor then there, right?' },
  {
    startTime: 3949.8,
    person: 'Karol',
    text: ' A lot of the API gateways right now are SaaS solutions.'
  },
  { startTime: 3955.08, person: 'Karol', text: " So they're all still accessible." },
  {
    startTime: 3957.46,
    person: 'Karol',
    text: ' You can still figure out how to access them, right?'
  },
  {
    startTime: 3961.98,
    person: 'Karol',
    text: " If you're using micro integrations and you can still have network access to some of the systems that are not properly secured or somebody didn't deactivate your VPN access, there you go."
  },
  { startTime: 3974.86, person: 'Aaron', text: ' You have a backdoor.' },
  { startTime: 3976.08, person: 'Karol', text: " There's always a way." },
  {
    startTime: 3977.1,
    person: 'Karol',
    text: " There's always this human error element that will be that problematic aspect where we're actually having problems because of that, right?"
  },
  { startTime: 3990.48, person: 'Karol', text: ' Yeah, yeah, yeah.' },
  {
    startTime: 3992.06,
    person: 'Aaron',
    text: ' You gotta watch out for those bad apples but you can hopefully detect them.'
  },
  {
    startTime: 3996.54,
    person: 'Karol',
    text: ' So I mean, I still remember use cases from back in the day when I was working for T-Mobile and we had to secure the SMS gateway because SMSs have to be tested, right?'
  },
  {
    startTime: 4015.22,
    person: 'Karol',
    text: " All the notifications that we have around specific products and then integrations into the SMS gateway, it has to be tested in low level environments because that's part of the functionality that was introduced with certain releases of software."
  },
  {
    startTime: 4030.3,
    person: 'Karol',
    text: " And people realised, testers realised and integration specialists realised, especially from our dev vendors, that it's actually the production SMS gateway hooked up to all the non-prod environments because otherwise people wouldn't get those test SMS on their phones to test them."
  },
  {
    startTime: 4049.42,
    person: 'Karol',
    text: ' Yeah, and those enabled to actually put something else than your number.'
  },
  {
    startTime: 4057,
    person: 'Karol',
    text: " So whatever string you wanted, so you could put whoever's number in and people started playing around that."
  },
  {
    startTime: 4064.4,
    person: 'Karol',
    text: " It's just a matter of where you sit, where you are in the ecosystem to spot these kinds of opportunities either to enhance your security or to use the whole to your advantage, whatever that advantage may be."
  },
  {
    startTime: 4078.6,
    person: 'Karol',
    text: ' Maybe some harmless fun, maybe something a little bit more cringey or straight up illegal, right?'
  },
  { startTime: 4089.7, person: 'Karol', text: ' Yep, yep.' },
  { startTime: 4092.24, person: 'Aaron', text: " Where there's always a whole." },
  { startTime: 4094.7, person: 'Aaron', text: ' So yeah, exactly.' },
  { startTime: 4095.68, person: 'Aaron', text: ' Humans are fallible, right?' },
  {
    startTime: 4096.8,
    person: 'Aaron',
    text: ' I mean, you just got to make sure we kind of watch out for these guys, girls, guys and girls.'
  },
  { startTime: 4102.58, person: 'Aaron', text: ' Any gender can be duplicitous.' },
  {
    startTime: 4105.359,
    person: 'Aaron',
    text: ' So I was just going to say that in Solace world, we do have a kind of a separation between the control plane and the data plane.'
  },
  {
    startTime: 4112.62,
    person: 'Aaron',
    text: " And that as an administrator of the broker, I can't actually connect to listen to the messages on the broker."
  },
  {
    startTime: 4117.54,
    person: 'Aaron',
    text: " I can't look at the queues and see what's in there."
  },
  { startTime: 4119.479, person: 'Aaron', text: ' You actually have to have client credentials.' },
  {
    startTime: 4121.979,
    person: 'Aaron',
    text: " So there's a bit of separation of church and state in that."
  },
  {
    startTime: 4124.76,
    person: 'Aaron',
    text: ' Now, obviously as an admin, you can go and create yourself a client username to use for your nefarious purposes.'
  },
  {
    startTime: 4131.12,
    person: 'Aaron',
    text: ' But obviously the logging would see you doing that.'
  },
  {
    startTime: 4135.26,
    person: 'Aaron',
    text: " So there's ways around it that basically on our side, yeah, we try to make sure that people administrating the brokers can actually look at the payload of the data so that, yeah, it's sensitive or secure."
  },
  {
    startTime: 4146.56,
    person: 'Karol',
    text: ' And we have a lovely comment from YouTube here from Shin, I guess.'
  },
  {
    startTime: 4156.54,
    person: 'Karol',
    text: ' Yes, we could encrypt everything, but then we jump into the problem of trade-offs again.'
  },
  {
    startTime: 4163.54,
    person: 'Karol',
    text: ' So the common contradicting pair in trade-offs is performance versus security.'
  },
  {
    startTime: 4171.34,
    person: 'Karol',
    text: ' If we want something to be highly performant, security will definitely hinder that performance.'
  },
  {
    startTime: 4179.5,
    person: 'Karol',
    text: " If we want something to be highly secure, it's not going to be highly performant."
  },
  { startTime: 4183.38, person: 'Karol', text: " These two don't go well together." },
  { startTime: 4185.899, person: 'Karol', text: " So if we're dealing with..." },
  { startTime: 4187.74, person: 'Aaron', text: " Now we're having a lot of money." },
  {
    startTime: 4189.64,
    person: 'Karol',
    text: " If we're dealing with somebody who's got a lot of money, like the trade markets or financial institutions, yes, we could try and do both, but it will still be contradicting each other to a certain way."
  },
  { startTime: 4201.24, person: 'Karol', text: " So there's a matter of having that discussion." },
  { startTime: 4204.94, person: 'Karol', text: ' What is more important and to what degree?' },
  {
    startTime: 4208.36,
    person: 'Karol',
    text: " And that's always going to be the same problem, right?"
  },
  { startTime: 4211.36, person: 'Karol', text: ' We either want it very fast or very secure.' },
  {
    startTime: 4214.24,
    person: 'Karol',
    text: " There is a middle ground, but it's neither going to be fast nor entirely secure."
  },
  {
    startTime: 4218.18,
    person: 'Karol',
    text: ' So you have to ship that security aspect somewhere else to mitigate that security risk in a different area of your ecosystem so that that transport layer is not impacted.'
  },
  { startTime: 4232.6, person: 'Aaron', text: " It's all trade-offs, man." },
  { startTime: 4233.84, person: 'Aaron', text: " It's always all trade-offs." },
  {
    startTime: 4235.48,
    person: 'Aaron',
    text: " It's either money or effort or time or security or loss."
  },
  {
    startTime: 4241.96,
    person: 'Aaron',
    text: ' This training that I was doing in Chicago there, we were talking about...'
  },
  {
    startTime: 4245.02,
    person: 'Aaron',
    text: ' We talked about coupling for a little while and I invoked you in my head, actually.'
  },
  { startTime: 4248.4, person: 'Aaron', text: ' It was kind of funny.' },
  {
    startTime: 4249.98,
    person: 'Aaron',
    text: ' But we were talking about DR. And in Solace world, DR is when we go between data centres.'
  },
  {
    startTime: 4255.12,
    person: 'Aaron',
    text: ' So not like HA, high availability within one data centre.'
  },
  { startTime: 4258.24, person: 'Aaron', text: ' You have two data centres.' },
  {
    startTime: 4259.9,
    person: 'Aaron',
    text: ' In case you lose a whole data centre, you can switch to a different one.'
  },
  { startTime: 4262.6, person: 'Aaron', text: ' And we have...' },
  { startTime: 4263.28, person: 'Aaron', text: ' You can do it either sync or async, right?' },
  {
    startTime: 4266.64,
    person: 'Aaron',
    text: " Sync means it's going to be in both data centres before the publisher is acknowledged his message is guaranteed."
  },
  {
    startTime: 4273.16,
    person: 'Aaron',
    text: ' But obviously throughput is going to be a problem because if the distance between data centres is quite far, now you have...'
  },
  { startTime: 4279.7, person: 'Aaron', text: ' Your overall throughput is going to be less.' },
  {
    startTime: 4282.1,
    person: 'Aaron',
    text: " Versus asynchronous, we'll just enqueue it to be delivered to the other data centre before when the publisher gets an act, much more performant."
  },
  {
    startTime: 4289.46,
    person: 'Aaron',
    text: " But if that data centre crashes right when that buffer hasn't gone out the door, then you might lose some data, right?"
  },
  { startTime: 4296.28, person: 'Aaron', text: ' So everything is about...' },
  { startTime: 4298.54, person: 'Karol', text: ' Trade-offs.' },
  { startTime: 4299.08, person: 'Aaron', text: ' Well, trade-offs.' },
  { startTime: 4300.32, person: 'Aaron', text: " It's all..." },
  { startTime: 4301.46, person: 'Aaron', text: " And that's what patterns is all about, right?" },
  { startTime: 4303.7, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 4303.98,
    person: 'Karol',
    text: " And understanding the context in which we're doing those trade-offs because we're doing those trade-offs either way."
  },
  {
    startTime: 4308.82,
    person: 'Karol',
    text: " But if we don't get that context right, we might misjudge the trade-offs."
  },
  { startTime: 4313.74, person: 'Karol', text: ' Yeah, yeah, yeah, yeah.' },
  { startTime: 4316.06, person: 'Karol', text: " And that's problematic." },
  { startTime: 4318.56, person: 'Aaron', text: ' Yeah.' },
  { startTime: 4319.54, person: 'Aaron', text: ' What Stefan said there is pretty...' },
  { startTime: 4321.4, person: 'Aaron', text: " That's pretty accurate there." },
  { startTime: 4323.04, person: 'Aaron', text: ' IT and business.' },
  { startTime: 4324.38, person: 'Aaron', text: ' Yeah.' },
  { startTime: 4325.32, person: 'Aaron', text: ' Yeah.' },
  { startTime: 4325.96, person: 'Aaron', text: ' Trade-offs.' },
  { startTime: 4327.28, person: 'Aaron', text: ' Trade-offs.' },
  { startTime: 4328.24, person: 'Aaron', text: ' Yeah.' },
  { startTime: 4328.78, person: 'Karol', text: ' Fast or secure?' },
  { startTime: 4329.84, person: 'Karol', text: ' Fast or secure?' },
  { startTime: 4331.5, person: 'Karol', text: ' No way around it.' },
  { startTime: 4332.64, person: 'Karol', text: " That's always going to be a discussion." },
  { startTime: 4334.06, person: 'Karol', text: " It's a very difficult topic." },
  {
    startTime: 4336.96,
    person: 'Karol',
    text: " I find it that one of the best explanations I've seen so far how to work with trade-offs is doing the trade-off analysis at the way that Mark Richards and Neil Ford portray it with a discussion around which characteristic is actually the driving characteristic for the business."
  },
  { startTime: 4352.5, person: 'Karol', text: ' Okay.' },
  {
    startTime: 4352.76,
    person: 'Karol',
    text: " So you're putting priority on those characteristics."
  },
  {
    startTime: 4356.2,
    person: 'Karol',
    text: " So we prioritise them in a way that, well, okay, if we're talking about that, what is the most important?"
  },
  { startTime: 4364.9, person: 'Karol', text: ' What is now the thing that is mandatory?' },
  {
    startTime: 4368.44,
    person: 'Karol',
    text: ' Because if we ask a business, do you want performance, security, availability?'
  },
  { startTime: 4373.92, person: 'Karol', text: ' We want it all.' },
  { startTime: 4375.2, person: 'Karol', text: ' Always.' },
  { startTime: 4377.84, person: 'Karol', text: " There's no way around it." },
  {
    startTime: 4379.14,
    person: 'Karol',
    text: " They're always going to say, yes, we want everything."
  },
  {
    startTime: 4381.8,
    person: 'Karol',
    text: " But it's impossible because as architects, we cannot ever design the best solution."
  },
  { startTime: 4388.52, person: 'Karol', text: ' We always design the least worst.' },
  {
    startTime: 4391.28,
    person: 'Aaron',
    text: ' Ultimately, the technology should enable you to do what the business wants to do.'
  },
  {
    startTime: 4397.06,
    person: 'Aaron',
    text: " At the end of it, it's almost always a business decision to some degree."
  },
  {
    startTime: 4400.88,
    person: 'Aaron',
    text: ' And our synchronous replication, we built for a specific customer that they do horse racing.'
  },
  {
    startTime: 4408.3,
    person: 'Aaron',
    text: " And they were like, it has to be like, it's mandated that this, they can never lose a ticket, right?"
  },
  {
    startTime: 4413.38,
    person: 'Aaron',
    text: " Every time you purchase a ticket, we send it to both data centres and it's perfectly guaranteed."
  },
  { startTime: 4418.8, person: 'Aaron', text: " It won't get lost." },
  {
    startTime: 4420.1,
    person: 'Aaron',
    text: ' And this was all fine and great until they had a network outage between their two data centres.'
  },
  {
    startTime: 4424.82,
    person: 'Aaron',
    text: ' Everything was fine, but this one link that they used to communicate between them was down.'
  },
  {
    startTime: 4429.36,
    person: 'Aaron',
    text: " And basically that meant all of their ticket purchasing had to stop because they couldn't replicate it to both sides."
  },
  { startTime: 4435.58, person: 'Aaron', text: ' And it was like that for about half an hour.' },
  {
    startTime: 4437.84,
    person: 'Aaron',
    text: ' And then the business came along and said, all right, you know what?'
  },
  {
    startTime: 4440.1,
    person: 'Aaron',
    text: " We're going to take the risk that we're not going to lose this data on the primary side."
  },
  {
    startTime: 4443.64,
    person: 'Aaron',
    text: " We're going to allow it to these tickets to be purchased, even though we can't replicate it and have."
  },
  {
    startTime: 4448.86,
    person: 'Aaron',
    text: ' So sometimes you think, you know, all best intentions and everything.'
  },
  {
    startTime: 4452.14,
    person: 'Aaron',
    text: " And then when actually things hit the fan, you're like, I guess we don't know."
  },
  {
    startTime: 4456.54,
    person: 'Aaron',
    text: " We don't need fully asynchronous in the worst case scenario."
  },
  {
    startTime: 4460.54,
    person: 'Aaron',
    text: " So yeah, it's always, you never know how things are going to go sometimes."
  },
  { startTime: 4464.38, person: 'Aaron', text: " And yeah, it's a business." },
  { startTime: 4465.86, person: 'Karol', text: ' All right.' },
  {
    startTime: 4466.2,
    person: 'Karol',
    text: ' I see we have a question popping about Gen AI and the agents.'
  },
  {
    startTime: 4469.78,
    person: 'Karol',
    text: " We'll dive into that somewhere around the end of the stream."
  },
  { startTime: 4473.44, person: 'Karol', text: " Let's dive back into publish, subscribe." },
  {
    startTime: 4476.08,
    person: 'Karol',
    text: " So sadly, we're going to go off the hook on Gen AI and agents by the end."
  },
  {
    startTime: 4484.24,
    person: 'Karol',
    text: " Hope you stick with us and we'll touch upon that later."
  },
  { startTime: 4488.94, person: 'Karol', text: ' But publish, subscribe.' },
  { startTime: 4491.34, person: 'Karol', text: ' Adam, you have a game for us.' },
  { startTime: 4493.6, person: 'Aaron', text: ' Oh, I was going to show the demo.' },
  { startTime: 4496.44, person: 'Aaron', text: ' I can do it.' },
  { startTime: 4496.76, person: 'Aaron', text: ' We can do the game.' },
  { startTime: 4497.58, person: 'Karol', text: ' Okay.' },
  {
    startTime: 4498.62,
    person: 'Aaron',
    text: " Do the demo first and then we're going to do the game."
  },
  { startTime: 4501.2, person: 'Aaron', text: ' You ready with the demo?' },
  { startTime: 4502.62, person: 'Aaron', text: ' No, no.' },
  { startTime: 4503.12, person: 'Aaron', text: ' Give me a second here.' },
  { startTime: 4505.86, person: 'Aaron', text: ' So this is, yeah, just let it load.' },
  { startTime: 4510.66, person: 'Aaron', text: ' This is, I like to write demos.' },
  { startTime: 4512.1, person: 'Aaron', text: ' I write a lot of demos.' },
  {
    startTime: 4513.04,
    person: 'Aaron',
    text: " I'm a Java programmer, but I dabble in JavaScript because why not?"
  },
  { startTime: 4519.2, person: 'Aaron', text: ' All right.' },
  { startTime: 4519.48, person: 'Aaron', text: ' Go ahead and share it there.' },
  { startTime: 4520.7, person: 'Aaron', text: ' I hope this is big enough.' },
  { startTime: 4522.4, person: 'Aaron', text: ' So there we go.' },
  {
    startTime: 4523.06,
    person: 'Aaron',
    text: " So this is actually, I mean, this is not real data, but this is representative of Solace's very first IoT use case."
  },
  { startTime: 4529.8, person: 'Aaron', text: ' This is Singapore.' },
  {
    startTime: 4530.86,
    person: 'Aaron',
    text: ' This is the island of Singapore, pretty much a hundred miles north of the equator, right down at the Malaysian Peninsula at the tip.'
  },
  { startTime: 4538.28, person: 'Aaron', text: ' And these are buses.' },
  { startTime: 4540.02, person: 'Aaron', text: ' These are buses driving around.' },
  {
    startTime: 4541.82,
    person: 'Aaron',
    text: ' If you zoom in here, you can actually see their buses.'
  },
  {
    startTime: 4544.66,
    person: 'Aaron',
    text: ' If you keep zooming in, I got a nice satellite map.'
  },
  { startTime: 4547.04, person: 'Aaron', text: " These aren't, again, this is simulated data." },
  {
    startTime: 4548.58,
    person: 'Aaron',
    text: ' This is not real, but this is meant to kind of show and visualise what publish-subscribe is.'
  },
  {
    startTime: 4555.22,
    person: 'Aaron',
    text: ' So this is a bit of a, just a kind of a learning kind of tool.'
  },
  {
    startTime: 4558.3,
    person: 'Aaron',
    text: " Down at the bottom, you can, so every time one of these buses moves, what we're looking at here is a Google Maps API, JavaScript, and the Solace JavaScript API."
  },
  { startTime: 4568.54, person: 'Aaron', text: " So it's kind of a mashup." },
  {
    startTime: 4569.42,
    person: 'Aaron',
    text: " And my browser here is a client connecting into Solace Broker that's running in Singapore and is subscribed to a bunch of bus topics, all right?"
  },
  {
    startTime: 4580.7,
    person: 'Aaron',
    text: " And so as these buses move, again, they're not real buses."
  },
  {
    startTime: 4585.14,
    person: 'Aaron',
    text: " It's a Java publisher just simulating this data."
  },
  {
    startTime: 4588.3,
    person: 'Aaron',
    text: ' Every time a bus moves, it publishes a message to say, hey, my GPS position has been updated.'
  },
  { startTime: 4592.72, person: 'Aaron', text: " Here's my new position." },
  {
    startTime: 4593.88,
    person: 'Aaron',
    text: ' And my map here is subscribed to these bus topics.'
  },
  {
    startTime: 4597.16,
    person: 'Aaron',
    text: ' So as these buses move, the map gets this message data and I just move the icon, right?'
  },
  { startTime: 4602.66, person: 'Aaron', text: " That's essentially all I'm doing here." },
  { startTime: 4603.76, person: 'Aaron', text: ' So this is exactly publish, subscribe visually.' },
  { startTime: 4607.3, person: 'Aaron', text: ' So buses are updating.' },
  {
    startTime: 4609.62,
    person: 'Aaron',
    text: ' My map is not polling for these locations, right?'
  },
  {
    startTime: 4612.52,
    person: 'Aaron',
    text: " I'm not querying some database saying, where are you now?"
  },
  {
    startTime: 4615.38,
    person: 'Aaron',
    text: " It's basically getting jammed into me through an event handler."
  },
  { startTime: 4618.92, person: 'Aaron', text: " Like here's your message." },
  { startTime: 4620.08, person: 'Aaron', text: ' All right, what is the message?' },
  { startTime: 4620.98, person: 'Aaron', text: ' Which bus is this?' },
  { startTime: 4621.72, person: 'Aaron', text: ' Okay, what are the coordinates?' },
  {
    startTime: 4623.06,
    person: 'Aaron',
    text: " You can see at the very, very, very, very bottom, this is the subscription that I'm actually listening on right now."
  },
  {
    startTime: 4629.04,
    person: 'Aaron',
    text: ' So as I mentioned earlier, Solace has wildcards on different levels.'
  },
  { startTime: 4632.34, person: 'Aaron', text: ' So you can be very coarse grained.' },
  { startTime: 4634.02, person: 'Aaron', text: " In this case, I'm subscribed to the whole feed." },
  { startTime: 4636.6, person: 'Aaron', text: ' Stars everywhere, right?' },
  { startTime: 4637.6, person: 'Aaron', text: ' All stars.' },
  {
    startTime: 4638.6,
    person: 'Aaron',
    text: ' But you can see the, what we call the topic hierarchy just on the top of it there.'
  },
  { startTime: 4644.34, person: 'Aaron', text: ' Route number is level four.' },
  { startTime: 4646.66, person: 'Aaron', text: ' Then a bus ID, level five.' },
  {
    startTime: 4649.1,
    person: 'Aaron',
    text: ' Latitude and longitude I actually have is level six and seven.'
  },
  { startTime: 4652.12, person: 'Aaron', text: ' A direction indicator of some sort.' },
  { startTime: 4654.42, person: 'Aaron', text: ' And then a status is the last level.' },
  {
    startTime: 4656.16,
    person: 'Aaron',
    text: " So I've built this rather complex, fairly complex, I don't know, topic hierarchy, multi-level."
  },
  {
    startTime: 4661.94,
    person: 'Aaron',
    text: ' But what that allows me to do is I can now subscribe to parts of this feed, right?'
  },
  {
    startTime: 4666.18,
    person: 'Aaron',
    text: ' As we talked earlier about the different kind of filtering and capabilities that are built in.'
  },
  {
    startTime: 4670.46,
    person: 'Aaron',
    text: ' If I wanted to listen to say, just route number seven, I could go up here.'
  },
  { startTime: 4675.34, person: 'Aaron', text: ' I could update my subscription.' },
  {
    startTime: 4676.84,
    person: 'Aaron',
    text: ' You see my subscription here at the very bottom is now changed to 007 with a star because we support prefixes for our star.'
  },
  {
    startTime: 4684.36,
    person: 'Aaron',
    text: " So 07A, B, C, all the other buses go away because I'm not getting them anymore."
  },
  {
    startTime: 4690.32,
    person: 'Aaron',
    text: " I'm not getting updates for these things anymore."
  },
  { startTime: 4692.06, person: 'Aaron', text: ' The broker is doing the filtering.' },
  { startTime: 4693.96, person: 'Aaron', text: ' Notice the message rate here.' },
  {
    startTime: 4695.62,
    person: 'Aaron',
    text: " The rate that I'm receiving messages from my broker is dropped way, way down."
  },
  { startTime: 4700.9, person: 'Aaron', text: ' So the broker is filtering this stuff, right?' },
  {
    startTime: 4702.72,
    person: 'Aaron',
    text: " I'm not listening to the full thousand buses or 500 buses and throwing away all this stuff I don't want."
  },
  { startTime: 4708.82, person: 'Aaron', text: ' The broker is doing it.' },
  { startTime: 4709.62, person: 'Aaron', text: ' So it saves me network bandwidth, CPU.' },
  { startTime: 4712.2, person: 'Aaron', text: " It's secure." },
  {
    startTime: 4712.86,
    person: 'Aaron',
    text: " There's a lot of good reasons why you want to do filtering."
  },
  {
    startTime: 4716.88,
    person: 'Karol',
    text: ' Let me put a bit of a context because you showed the topic taxonomy.'
  },
  {
    startTime: 4723.3,
    person: 'Karol',
    text: " It's easy for people using REST to understand because that basically resembles a REST URI path, which is absolutely brilliant for people to learn because it makes life a lot easier for them."
  },
  {
    startTime: 4736.5,
    person: 'Karol',
    text: " But basically if we're contextualised to that to other protocols, this data that we have as variables in the topic name, so route, bus ID, latitude, longitude, direction, and status, this would be the equivalent of, let's say, JMS headers in JMS as metadata."
  },
  {
    startTime: 4758.42,
    person: 'Karol',
    text: ' This would be the equivalent of routing keys in RabbitMQ implementation of AMQP, etcétera, etcétera.'
  },
  { startTime: 4765.94, person: 'Karol', text: ' So this is your metadata.' },
  {
    startTime: 4767.96,
    person: 'Karol',
    text: ' Of course, you can have also that, the same information in your payload.'
  },
  { startTime: 4773.38, person: 'Karol', text: ' It would be.' },
  {
    startTime: 4774,
    person: 'Karol',
    text: ' It would be in your payload because you want to read that payload.'
  },
  {
    startTime: 4777.22,
    person: 'Karol',
    text: " And well, if you zoom in a little because it's a little bit small."
  },
  { startTime: 4781.14, person: 'Karol', text: " So you see that's already there somewhere." },
  {
    startTime: 4784.44,
    person: 'Karol',
    text: " But basically when you're publishing that message from a perspective of the producer of the event, you duplicate that data."
  },
  { startTime: 4792.7, person: 'Karol', text: ' Part of it goes into all of this.' },
  { startTime: 4795.56, person: 'Karol', text: ' It goes into the payload.' },
  {
    startTime: 4796.56,
    person: 'Karol',
    text: ' And then some of it goes as, is treated as metadata and goes into the topic name, which creates that lovely taxonomy that we can filter by.'
  },
  {
    startTime: 4806.08,
    person: 'Karol',
    text: ' The same would be with JMS. You would have to then publish that with the message as JMS headers properly describing that data.'
  },
  {
    startTime: 4813.56,
    person: 'Karol',
    text: ' Then we could do the same level of filtering by JMS headers and select this.'
  },
  {
    startTime: 4819.1,
    person: 'Karol',
    text: " But it would be a lot more difficult to do because it's just tricky."
  },
  {
    startTime: 4824.76,
    person: 'Karol',
    text: ' Of course, JMS also enabled us to do dynamic queues, etcétera, which would also enable that kind of wildcard subscription.'
  },
  {
    startTime: 4835.04,
    person: 'Karol',
    text: ' Again, a little bit harder to achieve than as it is implemented in Solace.'
  },
  { startTime: 4841.06, person: 'Karol', text: " But it's not the same capability there." },
  {
    startTime: 4843.74,
    person: 'Karol',
    text: " It's just that people didn't use that that often."
  },
  { startTime: 4846.7, person: 'Aaron', text: ' Yep.' },
  {
    startTime: 4847.44,
    person: 'Aaron',
    text: ' I mean, you can do that with, I mean, Solace is a full-blown JMS broker as well, right?'
  },
  { startTime: 4852.66, person: 'Aaron', text: ' So, I mean, you can do that kind of stuff.' },
  {
    startTime: 4855.46,
    person: 'Aaron',
    text: " It's just our topic matching is infinitely faster than using selectors."
  },
  {
    startTime: 4860.22,
    person: 'Aaron',
    text: ' Selectors are because you have to go into the message.'
  },
  { startTime: 4863.46, person: 'Aaron', text: " I mean, it's part of the message." },
  {
    startTime: 4866.02,
    person: 'Aaron',
    text: " It's not maybe it's metadata, but you don't have to look at the whole payload."
  },
  {
    startTime: 4870.08,
    person: 'Aaron',
    text: ' But yeah, you have to go and look at this key value pair and analyse it and stuff.'
  },
  { startTime: 4873.46, person: 'Aaron', text: ' Whereas this is just if you can build...' },
  {
    startTime: 4876.64,
    person: 'Aaron',
    text: ' Selectors also, you know, it supports SQL 92 type syntax.'
  },
  { startTime: 4879.52, person: 'Aaron', text: ' So you can do more complicated.' },
  {
    startTime: 4880.98,
    person: 'Aaron',
    text: ' You can do greater than, you can do less than, you know, you can do ranges.'
  },
  { startTime: 4884.92, person: 'Aaron', text: ' You know, this is just basic string matching.' },
  {
    startTime: 4887.58,
    person: 'Aaron',
    text: " Topics are simple, fast, maybe not exactly what you, you know, maybe if you need something more complicated, like if you do XPath stuff, then no, that's not..."
  },
  { startTime: 4896.32, person: 'Aaron', text: " Topics aren't going to work, right?" },
  {
    startTime: 4897.84,
    person: 'Aaron',
    text: ' But I do want to say, like people might look at this and say, why is the latitude longitude in the topic string?'
  },
  { startTime: 4905.28, person: 'Aaron', text: ' That seems unnecessary, right?' },
  { startTime: 4907.66, person: 'Aaron', text: ' I might want to search by route.' },
  {
    startTime: 4909.66,
    person: 'Aaron',
    text: ' I might want to filter for a specific bus or maybe the buses that are broken down.'
  },
  {
    startTime: 4913.9,
    person: 'Aaron',
    text: ' You know, some of them are, you can see they have little red Xs on them down here.'
  },
  { startTime: 4917.6, person: 'Aaron', text: ' So like those are like, this guy has a fault.' },
  { startTime: 4921.02, person: 'Aaron', text: ' Nope, not that one, this guy.' },
  { startTime: 4922.68, person: 'Aaron', text: ' Yeah, anyway.' },
  {
    startTime: 4923.86,
    person: 'Aaron',
    text: ' But yeah, I came up with this idea of like, can we use topics to do kind of geo filtering or numerical filtering?'
  },
  {
    startTime: 4930.52,
    person: 'Aaron',
    text: " And if I watch this, if I add a square here, add a polygon, you'll notice that the bottom, my subscriptions now change to like 1.3 star, 103.8 star."
  },
  {
    startTime: 4944.26,
    person: 'Aaron',
    text: ' All the buses that match that means that their latitude and longitude are in this area.'
  },
  {
    startTime: 4951.38,
    person: 'Aaron',
    text: " And so, I mean, obviously it'll match ABC as well, right?"
  },
  {
    startTime: 4954.26,
    person: 'Aaron',
    text: " I mean, you have to kind of make sure that you're publishing actual floats and they look nice like numbers, but I can now filter by location just with the topic."
  },
  {
    startTime: 4963.68,
    person: 'Aaron',
    text: " I wrote this as a paper, I presented it at a conference and I don't think any of our customers ever use this."
  },
  { startTime: 4968.82, person: 'Aaron', text: " I mean, it's just the topic, right?" },
  { startTime: 4970.82, person: 'Aaron', text: " It's a topic." },
  {
    startTime: 4972.34,
    person: 'Aaron',
    text: " I was hoping UPS or someone would be like, hey, that's cool."
  },
  { startTime: 4976.3, person: 'Aaron', text: ' I can now filter based on area.' },
  {
    startTime: 4978.78,
    person: 'Aaron',
    text: ' Every one of these little orange rectangles, squares is a topic in Solace.'
  },
  { startTime: 4983.82, person: 'Karol', text: " It's a separate subscription." },
  { startTime: 4985.58, person: 'Aaron', text: " It's a separate subscription." },
  {
    startTime: 4986.5,
    person: 'Aaron',
    text: " So yeah, so right now there you can see I have there's 300, I capped it at 300."
  },
  {
    startTime: 4990.58,
    person: 'Aaron',
    text: ' So to approximate this shape, I can use topics and subscriptions to approximately filter to this area.'
  },
  {
    startTime: 4997.04,
    person: 'Aaron',
    text: ' So if you just want to know when a boat comes into a particular part of the harbour, you could do that with topics, right?'
  },
  {
    startTime: 5003.34,
    person: 'Aaron',
    text: " You don't have to use ArcGIS or something from Esri."
  },
  {
    startTime: 5006.82,
    person: 'Karol',
    text: ' Yeah, so basically this kind of level of filtering on an operational basis, real time basis, enables you to really build robust observability, really specific observability tools for whatever.'
  },
  {
    startTime: 5023.88,
    person: 'Karol',
    text: " It doesn't have to be observability in the sense of IT ecosystems and what's happening in your systems."
  },
  {
    startTime: 5029.62,
    person: 'Karol',
    text: " But for example, for logistics, for traffic, yeah, it's amazing."
  },
  {
    startTime: 5035.06,
    person: 'Karol',
    text: " If I look at the apps I ever used on my phone, this kind of filtering would be something that, let's say Uber or any other taxi app to just find taxis in my area."
  },
  { startTime: 5050.72, person: 'Karol', text: ' Tell them to call me.' },
  { startTime: 5051.44, person: 'Karol', text: " I'll give it to, I'll tell them how to do it." },
  {
    startTime: 5053.5,
    person: 'Karol',
    text: " But also if you look at, for example, dating apps, a lot of them have, like in what range from your current location you're looking for potential dates, right?"
  },
  { startTime: 5065.18, person: 'Karol', text: ' Yeah.' },
  { startTime: 5065.46, person: 'Karol', text: ' Tinder had that definitely.' },
  {
    startTime: 5066.96,
    person: 'Karol',
    text: ' I remember that kind of setting somewhere back in the day when I was using Tinder.'
  },
  {
    startTime: 5070.7,
    person: 'Karol',
    text: ' There was that, in the range of 10 kilometres from me.'
  },
  {
    startTime: 5073.76,
    person: 'Karol',
    text: " So that's basically, that would basically be a subscription to that kind of a topic."
  },
  {
    startTime: 5079,
    person: 'Aaron',
    text: " Kind of, but the one thing I'll make it just like this is streaming data, right?"
  },
  { startTime: 5083.48, person: 'Aaron', text: ' These buses are continually moving.' },
  {
    startTime: 5085.14,
    person: 'Aaron',
    text: " So they're continually publishing their location."
  },
  { startTime: 5086.96, person: 'Aaron', text: " And so I'm just doing it with this topic." },
  {
    startTime: 5089.42,
    person: 'Aaron',
    text: " If you are not constantly publishing your location, you're going to need a database to store that so that we can come along and query for that area later, right?"
  },
  {
    startTime: 5098,
    person: 'Aaron',
    text: " So for this particular use case, it works fine because they're constantly publishing where they are."
  },
  {
    startTime: 5103.22,
    person: 'Aaron',
    text: " But for something like Tinder, you're probably like, I'm in this area now and then tomorrow I might update it."
  },
  { startTime: 5109.6, person: 'Aaron', text: " But you know, it's, you're going to want it." },
  { startTime: 5111.16, person: 'Karol', text: " It's not that fast changing data." },
  {
    startTime: 5114.1,
    person: 'Karol',
    text: " It's more of the use case that Stefan is commenting here on."
  },
  {
    startTime: 5117.86,
    person: 'Karol',
    text: ' So for example, live tracking of our phones, our service providers for mobile phones, they basically can track SIM and email because those are registered metadata in the network.'
  },
  { startTime: 5135.42, person: 'Aaron', text: ' Or Bluetooth.' },
  { startTime: 5135.68, person: 'Aaron', text: ' Or Bluetooth.' },
  { startTime: 5136.24, person: 'Karol', text: ' Or your Wi-Fi, MAC address.' },
  { startTime: 5138, person: 'Karol', text: " I mean, that's, that's happening." },
  { startTime: 5139.58, person: 'Karol', text: ' Yes.' },
  {
    startTime: 5140.16,
    person: 'Karol',
    text: " But basically if we're looking at our phones, they have to register with a base transmission station, right?"
  },
  {
    startTime: 5147.9,
    person: 'Karol',
    text: ' So old school wise, you had triangulation, which means that you had those triangulate your position versus the strength of the signal between three different transmission stations.'
  },
  {
    startTime: 5160.66,
    person: 'Karol',
    text: ' While this would be like tracking real time because you subscribe to the data from the transmission stations and you can really triangulate that position of that phone in real time.'
  },
  {
    startTime: 5173.48,
    person: 'Karol',
    text: " So that's actually another really great use case for leveraging that data in telco and real time leveraging, which could be, for example, used by police."
  },
  {
    startTime: 5189.16,
    person: 'Aaron',
    text: " So one of my colleagues, one of my colleagues in Italy actually just did a POC with the Rome airport and it was around trying to like track people how they move through the airport, like in case there's any bottlenecks and they were using their Wi-Fi, they're using their Wi-Fi as they went from base station to base station to get an idea."
  },
  {
    startTime: 5207.18,
    person: 'Aaron',
    text: " Like it's not perfect, you know, it's like, but you know, plus or minus, you get an idea of where people are and like the flows and they observe how people flow through the airport in order to do efficiency stuff."
  },
  {
    startTime: 5216.72,
    person: 'Aaron',
    text: " That could be useful for retail people, maybe, you know, like it could be there's, yeah, I've heard of retail stores that will like mine this location data to lay out their store in a particular way that causes people to spend the most money, right?"
  },
  {
    startTime: 5230.7,
    person: 'Aaron',
    text: " Like they set it up so that when you browse around, I don't know, I'm not a retail person, but there's all sorts of tracky."
  },
  {
    startTime: 5238.14,
    person: 'Karol',
    text: ' Yeah, but using that location data, Google Maps, the most basic use case of real-time location data.'
  },
  {
    startTime: 5245.6,
    person: 'Karol',
    text: " There was a, even a episode in Germany, I'm not going to find it right now because I don't even know the keywords for that, but there was a artist, like an event artist in Germany that just put on 10, 100 active phones in a basket and moved around the street with them on foot."
  },
  {
    startTime: 5269.82,
    person: 'Karol',
    text: ' Basically what happened, he was simulating traffic walking with 100 phones at a pace of a pedestrian.'
  },
  { startTime: 5279.86, person: 'Karol', text: ' So the streets were...' },
  {
    startTime: 5281.6,
    person: 'Aaron',
    text: ' So Google Maps is like showing this red block wherever he was.'
  },
  {
    startTime: 5284.66,
    person: 'Karol',
    text: " Yeah, so the streets around him were literally empty, devoid of traffic because he emulated the nav system that there's actually heavy traffic there and there's a traffic jam."
  },
  { startTime: 5296.54, person: 'Karol', text: ' So everybody routed around it.' },
  {
    startTime: 5299.72,
    person: 'Karol',
    text: " And that's basically real-time use case of such data and filtering of such data."
  },
  {
    startTime: 5303.44,
    person: 'Karol',
    text: ' But then again, if you provide proper anomaly detection to such data, you would then discover that this is not distinct data, but then it depends on the triangulation, the actual distinction of where that phone is.'
  },
  {
    startTime: 5319.32,
    person: 'Karol',
    text: " If we don't have that distinction in place, then obviously this kind of tricks like the one here I told you here is possible."
  },
  {
    startTime: 5327.56,
    person: 'Karol',
    text: " But it's again, security of our data and the misuse of the software in essence."
  },
  { startTime: 5339.68, person: 'Aaron', text: " Anyway, so that's my bus demo." },
  {
    startTime: 5341.88,
    person: 'Aaron',
    text: " If people want to check it out, that's the URL at the top there."
  },
  { startTime: 5344.72, person: 'Aaron', text: " It's running all the time." },
  { startTime: 5345.52, person: 'Karol', text: ' You can send it to me.' },
  { startTime: 5350.3, person: 'Karol', text: " I'll put it in a QR in a second." },
  { startTime: 5353.1, person: 'Karol', text: ' Just drop it in the private chat.' },
  { startTime: 5355.54, person: 'Karol', text: " I'll drop it in." },
  {
    startTime: 5358.4,
    person: 'Aaron',
    text: ' Do we want to talk about something else or should we do the interactive one now?'
  },
  { startTime: 5362.74, person: 'Karol', text: " Oh yeah, let's do the interactive one." },
  { startTime: 5367.78, person: 'Karol', text: " So I'm putting the bus demo in a QR." },
  {
    startTime: 5373.48,
    person: 'Karol',
    text: ' So for those of you who want to look at the bus demo done by Adam just now, you can play around with it.'
  },
  { startTime: 5380.86, person: 'Karol', text: " It's available online." },
  { startTime: 5382.34, person: 'Karol', text: ' There you go.' },
  { startTime: 5382.8, person: 'Karol', text: " There's a QR for that." },
  { startTime: 5384.2, person: 'Karol', text: ' So scan it, play around, have fun.' },
  { startTime: 5388.74, person: 'Karol', text: " That's a very fun demo." },
  { startTime: 5390.56, person: 'Karol', text: ' I played around with it myself.' },
  { startTime: 5393.32, person: 'Karol', text: " It's a very interesting use case." },
  { startTime: 5394.82, person: 'Aaron', text: " It's visual." },
  { startTime: 5395.48, person: 'Aaron', text: ' I mean, people like maps, right?' },
  {
    startTime: 5396.92,
    person: 'Aaron',
    text: ' I mean, explaining a networking technology like Solace, like a backend thing is not the most easy.'
  },
  {
    startTime: 5402.96,
    person: 'Aaron',
    text: " Hey, look, it's a message and a payload going across the network."
  },
  { startTime: 5406.86, person: 'Aaron', text: ' How do you visualise that?' },
  { startTime: 5408, person: 'Aaron', text: ' But people like maps.' },
  { startTime: 5409, person: 'Aaron', text: " And so I thought, yeah, let's make a cool..." },
  { startTime: 5411, person: 'Aaron', text: ' These were originally taxis.' },
  {
    startTime: 5412.36,
    person: 'Aaron',
    text: " This started off as the London taxi demo because that's where I first came up with this geo algorithm."
  },
  { startTime: 5417.98, person: 'Aaron', text: " And now it's the Singapore bus demo." },
  { startTime: 5420.52, person: 'Aaron', text: ' So quite cool.' },
  { startTime: 5422.74, person: 'Aaron', text: ' All right.' },
  { startTime: 5423.14, person: 'Aaron', text: ' So let me boot this up here.' },
  { startTime: 5426.44, person: 'Aaron', text: " Let's see." },
  { startTime: 5428.94, person: 'Aaron', text: ' All right.' },
  { startTime: 5429.44, person: 'Aaron', text: ' Nobody look for a second.' },
  { startTime: 5430.42, person: 'Aaron', text: ' A loosely coupled race.' },
  { startTime: 5436.58, person: 'Aaron', text: ' There we go.' },
  { startTime: 5439.18, person: 'Aaron', text: " That's all right." },
  { startTime: 5440.02, person: 'Aaron', text: " I'm just like, is there an..." },
  { startTime: 5441.22, person: 'Aaron', text: " I can't..." },
  { startTime: 5441.9, person: 'Aaron', text: ' Loosely.' },
  { startTime: 5442.94, person: 'Aaron', text: ' Is there an E in loosely?' },
  { startTime: 5444.26, person: 'Aaron', text: ' How do you spell it?' },
  { startTime: 5446.02, person: 'Aaron', text: ' L-O-O-S-E-L-Y.' },
  { startTime: 5449.02, person: 'Aaron', text: ' There we go.' },
  { startTime: 5449.54, person: 'Aaron', text: ' All right.' },
  { startTime: 5449.94, person: 'Aaron', text: ' So run that.' },
  { startTime: 5451.6, person: 'Aaron', text: ' There we go.' },
  { startTime: 5452.42, person: 'Karol', text: ' All right.' },
  {
    startTime: 5453.26,
    person: 'Karol',
    text: " Let's turn it into a little bit of a bigger screen."
  },
  {
    startTime: 5456.8,
    person: 'Karol',
    text: " So for all of you watching, let's say grab a phone."
  },
  { startTime: 5461.5, person: 'Karol', text: " I'm grabbing mine right now." },
  { startTime: 5462.82, person: 'Aaron', text: " I'll grab mine too." },
  { startTime: 5463.88, person: 'Aaron', text: ' Sure, why not?' },
  { startTime: 5465.14, person: 'Karol', text: ' Go into...' },
  { startTime: 5467.06, person: 'Aaron', text: ' Big prizes to be won.' },
  { startTime: 5470.6, person: 'Karol', text: ' So whatever scanning app you have for QR codes.' },
  { startTime: 5474.52, person: 'Karol', text: ' There we go.' },
  {
    startTime: 5477.76,
    person: 'Karol',
    text: ' This is another lovely example of doing a PubSub or public subscribe.'
  },
  { startTime: 5484.04, person: 'Karol', text: ' Little PubSub, yeah.' },
  { startTime: 5485.4, person: 'Karol', text: ' Yep.' },
  { startTime: 5486.54, person: 'Karol', text: ' Okay.' },
  { startTime: 5486.9, person: 'Karol', text: " I'm on the pink team." },
  {
    startTime: 5488.04,
    person: 'Aaron',
    text: " I wonder if it's just going to be the two of us or if we'll have some other..."
  },
  { startTime: 5492, person: 'Aaron', text: " We'll see." },
  {
    startTime: 5494.04,
    person: 'Karol',
    text: " Maybe at least Stefan is still watching and maybe he'll scan it."
  },
  { startTime: 5500.58, person: 'Karol', text: ' Yeah.' },
  { startTime: 5501.2, person: 'Karol', text: " So we'll give it a second." },
  { startTime: 5503.38, person: 'Karol', text: ' So...' },
  { startTime: 5503.66, person: 'Karol', text: ' Oh, we have a yellow team.' },
  { startTime: 5504.84, person: 'Karol', text: " Yeah, there's somebody else." },
  { startTime: 5506.06, person: 'Karol', text: " I'm on the green." },
  { startTime: 5506.9, person: 'Karol', text: ' Oh, we got four.' },
  { startTime: 5507.62, person: 'Aaron', text: ' Oh, nice.' },
  { startTime: 5508.46, person: 'Aaron', text: ' All right.' },
  { startTime: 5508.82, person: 'Aaron', text: ' Woo.' },
  { startTime: 5510, person: 'Aaron', text: ' Okay.' },
  { startTime: 5510.34, person: 'Aaron', text: ' We need at least four.' },
  {
    startTime: 5511.4,
    person: 'Aaron',
    text: ' We need at least four because there are four teams.'
  },
  { startTime: 5513.4, person: 'Aaron', text: ' So this is good.' },
  { startTime: 5514.8, person: 'Aaron', text: " We'll see if a few..." },
  { startTime: 5516.38, person: 'Aaron', text: " We'll give it a few more seconds." },
  {
    startTime: 5517.32,
    person: 'Aaron',
    text: " I'll explain what you're going to see here in a second."
  },
  {
    startTime: 5520.58,
    person: 'Aaron',
    text: " Basically, there's going to be a little countdown."
  },
  { startTime: 5522.36, person: 'Aaron', text: " I'm going to start the race." },
  { startTime: 5523.92, person: 'Aaron', text: " There's going to be a little countdown." },
  { startTime: 5525.56, person: 'Aaron', text: ' When it says go, just tap your phone.' },
  {
    startTime: 5527.84,
    person: 'Aaron',
    text: ' Just tap anywhere on the background, like anywhere on the screen.'
  },
  {
    startTime: 5532.18,
    person: 'Aaron',
    text: ' And every time you tap, you row your boat, right?'
  },
  { startTime: 5535.4, person: 'Aaron', text: ' Publishing messages.' },
  {
    startTime: 5536.7,
    person: 'Aaron',
    text: ' And the winner is going to win a big prize from Carol.'
  },
  { startTime: 5540.92, person: 'Karol', text: ' Yeah, right.' },
  { startTime: 5541.8, person: 'Karol', text: ' Like I have the budget.' },
  { startTime: 5546.78, person: 'Karol', text: ' We can agree on a private sparring session.' },
  { startTime: 5552.6, person: 'Karol', text: ' Sure.' },
  { startTime: 5553.66, person: 'Aaron', text: ' All right.' },
  {
    startTime: 5553.98,
    person: 'Aaron',
    text: " Well, if there's more people out there that are not participating, at least you can watch this amazing race."
  },
  {
    startTime: 5559.4,
    person: 'Aaron',
    text: ' Again, this is one of my very first JavaScript demos.'
  },
  { startTime: 5561.66, person: 'Aaron', text: " And so it's not that good." },
  { startTime: 5562.72, person: 'Aaron', text: ' I should probably tidy it up a bit.' },
  { startTime: 5565.04, person: 'Aaron', text: ' All right.' },
  { startTime: 5565.26, person: 'Karol', text: ' Are we ready?' },
  { startTime: 5565.78, person: 'Aaron', text: " We're going to do this race." },
  { startTime: 5567.02, person: 'Aaron', text: ' Some event-driven racing.' },
  { startTime: 5569.5, person: 'Aaron', text: ' All right.' },
  { startTime: 5569.78, person: 'Aaron', text: " Here, let's do this thing." },
  { startTime: 5573, person: 'Aaron', text: ' Ooh.' },
  { startTime: 5576.6, person: 'Aaron', text: ' All right.' },
  { startTime: 5577.74, person: 'Aaron', text: ' Ready, set, go.' },
  { startTime: 5579.5, person: 'Aaron', text: ' Go, go, go, go, go.' },
  { startTime: 5582.3, person: 'Aaron', text: ' Holy hell.' },
  { startTime: 5583.32, person: 'Aaron', text: ' Carol.' },
  { startTime: 5586.96, person: 'Aaron', text: ' What the heck?' },
  { startTime: 5587.78, person: 'Aaron', text: ' Oh, six fingers.' },
  { startTime: 5590.08, person: 'Aaron', text: ' Six fingers.' },
  { startTime: 5593.42, person: 'Aaron', text: " I think you've done this before." },
  { startTime: 5594.78, person: 'Aaron', text: ' Have we done this?' },
  { startTime: 5595.28, person: 'Aaron', text: ' We must have done this before.' },
  { startTime: 5596.22, person: 'Karol', text: " Yeah, yeah, we've done." },
  { startTime: 5597.24, person: 'Aaron', text: ' Yeah, see.' },
  {
    startTime: 5599.24,
    person: 'Aaron',
    text: " You have to play like someone who doesn't know all the tricks."
  },
  { startTime: 5602.74, person: 'Aaron', text: ' Anyway, thanks.' },
  { startTime: 5604.1, person: 'Karol', text: ' Should we restart?' },
  { startTime: 5605.9, person: 'Aaron', text: " I'll give you a chance." },
  { startTime: 5608.72, person: 'Aaron', text: " That's right." },
  {
    startTime: 5609.58,
    person: 'Aaron',
    text: ' So this is a silly little demo that we use in some of our user groups to get people.'
  },
  {
    startTime: 5614.46,
    person: 'Aaron',
    text: ' I use it in my training, actually, to kind of get people excited a little bit.'
  },
  { startTime: 5618.82, person: 'Aaron', text: ' It actually uses Solace messaging underneath.' },
  { startTime: 5621, person: 'Aaron', text: " Actually, it's not." },
  { startTime: 5621.6, person: 'Aaron', text: " It's MQTT." },
  { startTime: 5622.6, person: 'Aaron', text: " It's connecting to a Solace broker." },
  {
    startTime: 5625.04,
    person: 'Aaron',
    text: " But every time you tap, it's publishing a message, right?"
  },
  { startTime: 5627.34, person: 'Aaron', text: " It's a row message." },
  {
    startTime: 5628.86,
    person: 'Aaron',
    text: " And because this is a bidirectional WebSocket communication, it's very asynchronous."
  },
  { startTime: 5633.3, person: 'Aaron', text: " It's very fast." },
  {
    startTime: 5634.36,
    person: 'Aaron',
    text: ' You can stream lots and lots, lots of clicks, lots of rows, you know, without having to, unlike REST, the whole point of this demo is to kind of say, how would you implement this using REST?'
  },
  {
    startTime: 5647.92,
    person: 'Aaron',
    text: ' And if you had any amount of latency, you can see down in the bottom left corner there.'
  },
  {
    startTime: 5652.02,
    person: 'Aaron',
    text: " Actually, you can't because my name's in the way."
  },
  { startTime: 5655.48, person: 'Aaron', text: " There's a latency counter." },
  {
    startTime: 5657.16,
    person: 'Aaron',
    text: ' You know, if you had a hundred, if you have 50 milliseconds of latency between you and your broker or your server, you could at most do 20, you know, events or round trips per second.'
  },
  { startTime: 5665.74, person: 'Aaron', text: ' So you have to use something streaming there.' },
  { startTime: 5668.1, person: 'Aaron', text: ' So do you want to do one more?' },
  { startTime: 5669.46, person: 'Aaron', text: " I don't know." },
  {
    startTime: 5669.94,
    person: 'Aaron',
    text: ' People might be bummed out and they got beat so bad.'
  },
  { startTime: 5673.46, person: 'Aaron', text: " But I promise I'll use one hand this time." },
  { startTime: 5676.18, person: 'Aaron', text: ' All right.' },
  { startTime: 5676.52, person: 'Aaron', text: ' All right.' },
  { startTime: 5676.9, person: 'Aaron', text: ' All right.' },
  { startTime: 5677.42, person: 'Aaron', text: " I'll just hit refresh here then." },
  { startTime: 5680.06, person: 'Aaron', text: " We'll do it one more time." },
  { startTime: 5682.48, person: 'Aaron', text: ' There we go.' },
  { startTime: 5683.2, person: 'Aaron', text: " Now it's going to be a dev jam." },
  { startTime: 5684.7, person: 'Aaron', text: ' All right.' },
  { startTime: 5685.42, person: 'Aaron', text: ' There we go.' },
  { startTime: 5685.94, person: 'Aaron', text: ' You have to reload.' },
  { startTime: 5686.64, person: 'Aaron', text: ' You have to refresh your app.' },
  { startTime: 5689.32, person: 'Aaron', text: " The URL hasn't changed." },
  { startTime: 5691.56, person: 'Karol', text: ' Yeah, I already closed the browser.' },
  { startTime: 5694.5, person: 'Karol', text: ' So I just need to go.' },
  { startTime: 5697.16, person: 'Karol', text: " OK, I'm on the pink team again." },
  { startTime: 5699.06, person: 'Aaron', text: ' Again, the pink.' },
  { startTime: 5699.88, person: 'Aaron', text: " I'm on the green team one more time." },
  { startTime: 5701.54, person: 'Aaron', text: ' So, yeah.' },
  { startTime: 5702.26, person: 'Aaron', text: ' All right.' },
  { startTime: 5702.86, person: 'Aaron', text: ' All right.' },
  {
    startTime: 5703.18,
    person: 'Aaron',
    text: " We'll see if our other two competitors are still out there."
  },
  { startTime: 5706.36, person: 'Aaron', text: " Or if they're chicken now." },
  { startTime: 5711.58, person: 'Aaron', text: " So I'll give it a second while they join." },
  {
    startTime: 5713.58,
    person: 'Aaron',
    text: " But yeah, so using, because it's bidirectional, you know, I mean, the server, me, the racer, the controller can send the start message to all the players."
  },
  {
    startTime: 5723.68,
    person: 'Aaron',
    text: " The players, when they want to join the race, you know, they can send, I'm listening on a well, what's called a well-known topic, you know, just a topic that says, hey, I'm offering races and you publish on race on that topic and I can hear it."
  },
  {
    startTime: 5735.3,
    person: 'Aaron',
    text: ' So even if there are lots of other races playing right now, you publish one message, like as a service discovery message, say, who are the races out there?'
  },
  {
    startTime: 5742.5,
    person: 'Aaron',
    text: ' All of the races that are listening on that can then reply.'
  },
  {
    startTime: 5744.86,
    person: 'Aaron',
    text: " It's like, it's like request reply, but multi request reply."
  },
  { startTime: 5747.64, person: 'Aaron', text: ' You know what I mean?' },
  {
    startTime: 5748.64,
    person: 'Aaron',
    text: ' So using public subscribe, you can really build these complex kind of cool.'
  },
  {
    startTime: 5753.46,
    person: 'Karol',
    text: " It's basically request reply built over a asynchronous protocol."
  },
  { startTime: 5759.64, person: 'Aaron', text: ' Yeah, but also one to many.' },
  { startTime: 5761.14, person: 'Aaron', text: " It's also one to many, right?" },
  {
    startTime: 5762.38,
    person: 'Aaron',
    text: " It's like, it's like I publish one message saying who's out there."
  },
  { startTime: 5765.6, person: 'Aaron', text: ' That goes to like five different races.' },
  { startTime: 5767.62, person: 'Aaron', text: ' They all respond saying here I am.' },
  {
    startTime: 5769.26,
    person: 'Aaron',
    text: ' And then you can then choose which one you want to actually join.'
  },
  { startTime: 5771.74, person: 'Aaron', text: " And now we're joining this one." },
  { startTime: 5772.88, person: 'Aaron', text: ' Wow, we got six players.' },
  {
    startTime: 5774.3,
    person: 'Aaron',
    text: " Unless someone's refreshing their screen because it doesn't."
  },
  {
    startTime: 5777.74,
    person: 'Aaron',
    text: " It's not smart enough to do that, but when the race starts, I do get rid of."
  },
  { startTime: 5782.82, person: 'Karol', text: " I promise I'm going to be using one hand only." },
  { startTime: 5785.52, person: 'Aaron', text: ' My everybody remain in the air.' },
  { startTime: 5787.34, person: 'Aaron', text: ' As many fingers, as many taps as you can.' },
  { startTime: 5789.44, person: 'Aaron', text: ' Are you ready?' },
  { startTime: 5790.4, person: 'Aaron', text: ' Seven, seven.' },
  { startTime: 5791.72, person: 'Karol', text: " Let's go." },
  { startTime: 5792.58, person: 'Aaron', text: ' All right.' },
  { startTime: 5792.98, person: 'Aaron', text: ' All right.' },
  { startTime: 5793.28, person: 'Aaron', text: " Let's see if there's going to be eight." },
  { startTime: 5794.32, person: 'Aaron', text: " Let's see if there's going to be eight." },
  {
    startTime: 5796.38,
    person: 'Aaron',
    text: ' And I do count like if one team has two people, you have to do twice as many clicks.'
  },
  { startTime: 5800.56, person: 'Aaron', text: ' So it is fair.' },
  { startTime: 5803.36, person: 'Aaron', text: ' All right, here we go.' },
  { startTime: 5804.76, person: 'Aaron', text: ' Are you ready?' },
  { startTime: 5807.36, person: 'Aaron', text: " It's the only force that they're ready." },
  { startTime: 5812.33, person: 'Aaron', text: ' All right.' },
  { startTime: 5812.93, person: 'Aaron', text: " I'm going to go full speed this time." },
  { startTime: 5814.37, person: 'Aaron', text: ' Go, go, go, go, go.' },
  { startTime: 5819, person: 'Aaron', text: ' Oh, yes.' },
  { startTime: 5821.96, person: 'Aaron', text: " That's pretty close." },
  { startTime: 5822.9, person: 'Aaron', text: ' I thought orange was whoever orange is.' },
  { startTime: 5825.8, person: 'Aaron', text: ' All right.' },
  {
    startTime: 5826.3,
    person: 'Aaron',
    text: " Orange, I think, should actually win that prize because it's my game."
  },
  {
    startTime: 5833.04,
    person: 'Aaron',
    text: " Let's give the prize to orange, whoever orange is out there."
  },
  { startTime: 5836.36, person: 'Aaron', text: " Anyway, that's my silly demo." },
  {
    startTime: 5837.9,
    person: 'Aaron',
    text: " But yeah, this is like, it's meant to show when you start thinking about the patterns, right?"
  },
  { startTime: 5841.98, person: 'Aaron', text: ' Like, I want to join a race.' },
  { startTime: 5842.96, person: 'Aaron', text: ' I want to subscribe to a race.' },
  { startTime: 5844.58, person: 'Aaron', text: ' All right.' },
  { startTime: 5844.76, person: 'Aaron', text: ' Get ready.' },
  { startTime: 5845.12, person: 'Aaron', text: ' The race is starting.' },
  {
    startTime: 5846.28,
    person: 'Aaron',
    text: " You know, if this was using REST, which is client server, it's not server to client."
  },
  {
    startTime: 5850.48,
    person: 'Aaron',
    text: ' Like when the race is ready to start, how does the server tell all the clients that the race is starting?'
  },
  { startTime: 5855.32, person: 'Aaron', text: " You can't." },
  { startTime: 5855.76, person: 'Aaron', text: ' You have to pull.' },
  {
    startTime: 5856.5,
    person: 'Aaron',
    text: ' Like the clients are just constantly pulling, saying, hey, has it started?'
  },
  { startTime: 5860.74, person: 'Aaron', text: ' Not very efficient.' },
  { startTime: 5862.32, person: 'Karol', text: ' So yeah.' },
  { startTime: 5863.02, person: 'Karol', text: ' And that is actually, that has been studied.' },
  { startTime: 5867.42, person: 'Karol', text: ' I believe, who was it?' },
  {
    startTime: 5869.82,
    person: 'Karol',
    text: ' I think Zapier studied that back in 2013 or something.'
  },
  { startTime: 5874.74, person: 'Karol', text: " That's quite an old study." },
  {
    startTime: 5876.52,
    person: 'Karol',
    text: ' They studied polling mechanisms and the results of polling.'
  },
  {
    startTime: 5880.42,
    person: 'Karol',
    text: ' And they discovered that over 98% of polling results in no data.'
  },
  { startTime: 5885.62, person: 'Aaron', text: ' I heard a similar metric.' },
  { startTime: 5886.96, person: 'Aaron', text: ' I heard it.' },
  { startTime: 5887.54, person: 'Aaron', text: ' I heard somewhere.' },
  { startTime: 5888.84, person: 'Karol', text: ' Yeah.' },
  { startTime: 5889.48, person: 'Karol', text: " It's in your, in Solace Dex." },
  {
    startTime: 5891.8,
    person: 'Karol',
    text: ' I seen Sean McAllister actually present that, exactly that metric and that study on a Solace user group.'
  },
  { startTime: 5903.62, person: 'Karol', text: " But it's a study." },
  { startTime: 5904.48, person: 'Aaron', text: ' Okay.' },
  { startTime: 5904.74, person: 'Aaron', text: ' So, okay.' },
  { startTime: 5905.34, person: 'Aaron', text: ' All right.' },
  {
    startTime: 5905.62,
    person: 'Aaron',
    text: " That's, if it's something referenceable, then I'm down with it."
  },
  { startTime: 5908.88, person: 'Aaron', text: " You know, anecdotal, I don't know." },
  {
    startTime: 5912.34,
    person: 'Karol',
    text: " I believe that as far as I did my research in that, that's a study done in 2013."
  },
  {
    startTime: 5917.56,
    person: 'Karol',
    text: ' So this is a fairly old one, but they studied that.'
  },
  {
    startTime: 5922.96,
    person: 'Karol',
    text: " I don't think anybody did these kinds of studies anywhere later, which is a shame."
  },
  {
    startTime: 5929.02,
    person: 'Karol',
    text: ' I think this would be a topic worth studying, but it is what it is.'
  },
  {
    startTime: 5935.26,
    person: 'Aaron',
    text: ' Put this on, put this on the screen for a second.'
  },
  { startTime: 5937.3, person: 'Aaron', text: ' This is, this is the Simpsons equivalent of it.' },
  { startTime: 5940.68, person: 'Aaron', text: " It's just like, are we there yet?" },
  { startTime: 5943.66, person: 'Aaron', text: ' Has something changed?' },
  { startTime: 5944.42, person: 'Aaron', text: ' Has something changed?' },
  { startTime: 5945.14, person: 'Aaron', text: ' No.' },
  { startTime: 5945.4, person: 'Aaron', text: ' Has something changed?' },
  { startTime: 5946.12, person: 'Aaron', text: ' No.' },
  { startTime: 5946.52, person: 'Aaron', text: ' Has something changed?' },
  { startTime: 5947.16, person: 'Aaron', text: ' No.' },
  { startTime: 5947.58, person: 'Aaron', text: ' No.' },
  {
    startTime: 5947.82,
    person: 'Aaron',
    text: ' How about I just tell you when something has changed?'
  },
  { startTime: 5950.04, person: 'Aaron', text: ' You know, like this is polling.' },
  {
    startTime: 5952.26,
    person: 'Aaron',
    text: ' This is polling when, you know, if you want it to be responsive, you have to pull fast, right?'
  },
  {
    startTime: 5956,
    person: 'Aaron',
    text: " You could pull every hour and then there's probably going to be some change, but now you're an hour out of date."
  },
  {
    startTime: 5961.24,
    person: 'Aaron',
    text: " So you pull really fast and now you're just burning your network and just backend database saying, nothing, nothing, nothing, nothing's changed."
  },
  { startTime: 5967.5, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 5967.94,
    person: 'Karol',
    text: ' And see, that was, that could probably be a feasible mechanism 20 years ago.'
  },
  { startTime: 5973.8, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 5974.44,
    person: 'Karol',
    text: " If we're considering our data centres where companies have their own data centres at 20 years back, they didn't have cloud available."
  },
  { startTime: 5986.98, person: 'Karol', text: ' They were hosting everything on premise.' },
  {
    startTime: 5990.42,
    person: 'Karol',
    text: ' That was a scenario where storing data was horrendously expensive.'
  },
  { startTime: 5997.44, person: 'Karol', text: ' Yeah.' },
  { startTime: 5997.72, person: 'Karol', text: " But moving data was absolutely, they're cheap." },
  { startTime: 6000.74, person: 'Karol', text: ' Well, now we have the other way around.' },
  { startTime: 6002.3, person: 'Aaron', text: ' Networks were slow.' },
  { startTime: 6003.38, person: 'Aaron', text: ' Disc was faster, right?' },
  {
    startTime: 6004.76,
    person: 'Aaron',
    text: ' And so, yeah, the database as essential of your IT as the storage is the golden source.'
  },
  {
    startTime: 6010.04,
    person: 'Aaron',
    text: ' That was the way almost all of these things were architected.'
  },
  { startTime: 6013.96, person: 'Aaron', text: ' And now the network is fast.' },
  { startTime: 6015.24, person: 'Aaron', text: ' Now the network goes like faster.' },
  {
    startTime: 6016.82,
    person: 'Aaron',
    text: ' Like now the state is in the network and the database is just a hang.'
  },
  { startTime: 6021.52, person: 'Aaron', text: ' It hangs off the side and it keeps that.' },
  {
    startTime: 6023.78,
    person: 'Aaron',
    text: ' But the real truth is the network, not the database anymore.'
  },
  { startTime: 6028.16, person: 'Karol', text: ' Yeah.' },
  { startTime: 6028.34, person: 'Aaron', text: ' So you want to tap into that.' },
  {
    startTime: 6030.18,
    person: 'Karol',
    text: ' But see now, if you consider cost-wise from a perspective of infrastructure, where most companies are now investing into that infrastructure being in cloud, they drop their own on-premise in favour of cloud.'
  },
  { startTime: 6045.02, person: 'Karol', text: ' Now storing data in cloud is dirt cheap.' },
  { startTime: 6049.66, person: 'Karol', text: ' Moving data in cloud is horrendously expensive.' },
  {
    startTime: 6053.88,
    person: 'Aaron',
    text: ' Well, some of them make it cheaper than others, but yeah.'
  },
  {
    startTime: 6057.92,
    person: 'Karol',
    text: ' But in comparison, 20 years ago and now, moving data became a lot more expensive and storing data became a lot cheaper.'
  },
  {
    startTime: 6067.18,
    person: 'Karol',
    text: " So if we're considering a polling mechanism and we want that polling to be near real time."
  },
  {
    startTime: 6074.38,
    person: 'Karol',
    text: ' So we set the polling intervals, for example, every one minute.'
  },
  { startTime: 6078.68, person: 'Aaron', text: ' And we poll every one minute.' },
  { startTime: 6080.56, person: 'Aaron', text: ' Real time.' },
  { startTime: 6080.72, person: 'Karol', text: " No, it's not real time." },
  { startTime: 6082.36, person: 'Karol', text: " That's near real time." },
  { startTime: 6084.72, person: 'Karol', text: ' Real time is never achievable with polling.' },
  { startTime: 6088.2, person: 'Karol', text: ' Sure.' },
  { startTime: 6088.84, person: 'Karol', text: ' Ever.' },
  {
    startTime: 6091.1,
    person: 'Karol',
    text: ' And so if we want to be near real time, we set that polling interval to one minute and then we start polling.'
  },
  {
    startTime: 6098.16,
    person: 'Karol',
    text: " But then we result in a lot of calls that are completely unnecessary that burn our budget because we're making those calls."
  },
  { startTime: 6106.02, person: 'Karol', text: " We're getting a response." },
  {
    startTime: 6107.04,
    person: 'Karol',
    text: " That response is empty, but we're already burning the money on getting that call in response, which means it's a problem."
  },
  { startTime: 6114.46, person: 'Karol', text: " It's a problem from infrastructure perspective." },
  { startTime: 6116.6, person: 'Karol', text: " It's a problem from a budgeting perspective." },
  {
    startTime: 6118.98,
    person: 'Karol',
    text: " It's just not feasible to do polling mechanisms anymore."
  },
  {
    startTime: 6123.3,
    person: 'Karol',
    text: ' Polling mechanisms right now should be treated basically as a last resort mechanisms where we have them for legacy systems that cannot release events.'
  },
  {
    startTime: 6138.88,
    person: 'Karol',
    text: " Otherwise, it's just a bad idea in cloud environments."
  },
  {
    startTime: 6143.6,
    person: 'Aaron',
    text: " I'm going to flip that around just a little bit to say, also, you're now up to a minute late for whatever action you're trying to action on."
  },
  {
    startTime: 6152.34,
    person: 'Aaron',
    text: " If you're polling every minute, even if a lot of things change that minute, maybe it's fine to pull every minute."
  },
  {
    startTime: 6158.46,
    person: 'Aaron',
    text: " You want to pull at a rate that you're not getting no ops all the time because that's dumb."
  },
  {
    startTime: 6165.92,
    person: 'Aaron',
    text: " Even if you're down to five seconds, now you're still five seconds possibly late."
  },
  {
    startTime: 6171.26,
    person: 'Aaron',
    text: ' The start of my race, there was only a five-second countdown, so you have to pull at least every two or three seconds to actually make sure you start the race on time.'
  },
  {
    startTime: 6179.18,
    person: 'Aaron',
    text: ' So speaking of polling, what would you consider the best method to implement event-driven PubSub on relational DB containing the source data?'
  },
  { startTime: 6186.16, person: 'Aaron', text: ' What implementations do you use?' },
  {
    startTime: 6187.8,
    person: 'Karol',
    text: ' And this is exactly the problem we just put in, the near real-time polling, which is like, why would we do that?'
  },
  {
    startTime: 6197.6,
    person: 'Karol',
    text: " If we're having relational databases, that must be a very old relational database that we have to resort to polling."
  },
  {
    startTime: 6205.98,
    person: 'Karol',
    text: ' As far as I remember, in telco environment, we resorted to polling with databases.'
  },
  { startTime: 6213.28, person: 'Karol', text: ' At that time, we used Oracle.' },
  { startTime: 6214.5, person: 'Karol', text: ' Yeah.' },
  { startTime: 6215.44, person: 'Karol', text: ' With Oracle in a version lower than 10.' },
  { startTime: 6219.34, person: 'Karol', text: ' Okay.' },
  {
    startTime: 6219.84,
    person: 'Aaron',
    text: " I don't know Oracle stuff, so yeah, that doesn't mean anything to me, but all right."
  },
  {
    startTime: 6223.66,
    person: 'Karol',
    text: " They didn't have the mechanisms for the database to make a proper call."
  },
  { startTime: 6230.38, person: 'Karol', text: ' Yeah.' },
  { startTime: 6231.38, person: 'Karol', text: ' Right?' },
  {
    startTime: 6231.92,
    person: 'Karol',
    text: ' So if you had database-based systems and we communicated directly with those databases, fair enough that they were built properly so there was a proper segmentation of the database.'
  },
  {
    startTime: 6244.22,
    person: 'Karol',
    text: " From the integration perspective, we didn't actually touch the production tables and whatnot."
  },
  {
    startTime: 6248.6,
    person: 'Karol',
    text: ' There was always somewhere in staging before that data was actually released to the live production tables.'
  },
  {
    startTime: 6258.86,
    person: 'Karol',
    text: ' But basically, those systems, those very old school systems, before they were modernised to higher versions of Oracle databases, like 11, 12, they were incapacitated in their capability to communicate, to initiate communication.'
  },
  { startTime: 6277.06, person: 'Karol', text: ' So we had to resort to polling mechanisms.' },
  {
    startTime: 6279.86,
    person: 'Karol',
    text: ' But the moment that those databases gained proper libraries to actually initiate communication, we had database triggers that resulted emulated events based on whatever the data type was in the table or the procedure.'
  },
  {
    startTime: 6299.7,
    person: 'Karol',
    text: " And basically, if we're talking about polling and turning into PubSub, well, replace your polling mechanism by using triggers in a database."
  },
  {
    startTime: 6309.6,
    person: 'Aaron',
    text: " The answer, like if you're an Oracle user, the answer is GoldenGate, right?"
  },
  {
    startTime: 6313.18,
    person: 'Aaron',
    text: " Or some other kind of, it's change data capture."
  },
  { startTime: 6315.74, person: 'Aaron', text: ' If your database supports' },
  { startTime: 6317.6, person: 'Aaron', text: ' change data capture,' },
  { startTime: 6319.24, person: 'Aaron', text: " there's like," },
  { startTime: 6320.78, person: 'Aaron', text: ' MSSQL does,' },
  { startTime: 6321.86, person: 'Aaron', text: ' I mean, a number of them do,' },
  { startTime: 6323.48, person: 'Aaron', text: ' where, and even if not that,' },
  { startTime: 6325.72, person: 'Aaron', text: ' the log, logging database logs' },
  { startTime: 6327.72, person: 'Aaron', text: ' as events are,' },
  { startTime: 6329.34, person: 'Aaron', text: ' as rows are updated,' },
  { startTime: 6330.16, person: 'Aaron', text: ' as tables are updated,' },
  { startTime: 6331.14, person: 'Aaron', text: ' these are emitted as change data,' },
  { startTime: 6333.16, person: 'Aaron', text: " like they're emitted as events," },
  { startTime: 6334.68, person: 'Aaron', text: ' triggers,' },
  { startTime: 6335.32, person: 'Aaron', text: " I don't know the proper terminology," },
  { startTime: 6336.84, person: 'Aaron', text: ' but Oracle GoldenGate' },
  { startTime: 6339.16, person: 'Aaron', text: ' was meant to allow you' },
  { startTime: 6341.02, person: 'Aaron', text: ' to keep multiple databases in sync' },
  { startTime: 6343.3, person: 'Aaron', text: ' by as changes are made over here,' },
  { startTime: 6345.32, person: 'Aaron', text: ' these are emitted as events,' },
  { startTime: 6346.92, person: 'Aaron', text: ' as triggers, as updates' },
  { startTime: 6348.42, person: 'Aaron', text: ' to another database,' },
  { startTime: 6350.34, person: 'Aaron', text: ' which can run over GMS.' },
  { startTime: 6352.02, person: 'Aaron', text: " I mean, that's actually" },
  { startTime: 6352.64, person: 'Aaron', text: ' a really old use case' },
  { startTime: 6353.76, person: 'Aaron', text: ' that saw us like 12 years ago.' },
  {
    startTime: 6355.6,
    person: 'Aaron',
    text: ' When I first got hired, it was a GoldenGate replication use case using a Solace event broker to replicate customer data to like five different data centres, right?'
  },
  {
    startTime: 6364.34,
    person: 'Aaron',
    text: ' So it was like, again, PubSub, one change in, and it went to five, four other data centres.'
  },
  {
    startTime: 6370.4,
    person: 'Karol',
    text: " So yeah, change data capture, checkout, I mean, yeah, this kind of replication, on that, yeah, that kind of replication to multiple data centres to have that copy in all data centres wouldn't be possible by DB links."
  },
  {
    startTime: 6383.28,
    person: 'Aaron',
    text: " It's not even, yeah, it's not even replication, but there's just, if you want to be event driven with your data and your database is your golden source, you want to initiate some kind of change to the capture mechanism to emit those as events that you can now tap into."
  },
  {
    startTime: 6395.62,
    person: 'Aaron',
    text: ' You can listen to say, hey, this has been updated.'
  },
  { startTime: 6397.96, person: 'Aaron', text: ' Boom.' },
  { startTime: 6398.28, person: 'Aaron', text: ' And you get that message right away.' },
  { startTime: 6400.1, person: 'Aaron', text: ' Yeah.' },
  {
    startTime: 6400.64,
    person: 'Aaron',
    text: ' So either database logging or changing the capture would be my answer on that.'
  },
  { startTime: 6404.38, person: 'Karol', text: ' So absolutely.' },
  { startTime: 6406.22, person: 'Aaron', text: ' And Solace has some things around this.' },
  {
    startTime: 6408.46,
    person: 'Aaron',
    text: ' We have a Debezium, like as part of our integration, micro integrations, we do integrate with Debezium.'
  },
  { startTime: 6412.74, person: 'Aaron', text: ' So some databases are supported through that.' },
  { startTime: 6415.12, person: 'Aaron', text: " I don't know." },
  {
    startTime: 6415.8,
    person: 'Aaron',
    text: " I'm not a micro integration expert, but if you're looking for a Solace answer, maybe check out our integration hub."
  },
  {
    startTime: 6420.94,
    person: 'Aaron',
    text: " But I'm sure there's lots of other stuff out there to do."
  },
  {
    startTime: 6423.5,
    person: 'Karol',
    text: " There's plenty, plenty of solutions for change data capture and plenty of databases now they support these mechanisms."
  },
  { startTime: 6433.68, person: 'Karol', text: ' Anyway, Kafka has all this stuff as well.' },
  { startTime: 6435.54, person: 'Aaron', text: " You know, I mean, it's not uncommon." },
  { startTime: 6440.66, person: 'Aaron', text: " So I'm sure you'll find some." },
  {
    startTime: 6442.12,
    person: 'Karol',
    text: " It's just a matter of understanding the use case is that actually an operational event or is that something you need for like analytics?"
  },
  { startTime: 6453.34, person: 'Karol', text: ' Yeah, right.' },
  {
    startTime: 6453.84,
    person: 'Karol',
    text: ' Because these are operational events are very different than events for analytics or for audit security, etcétera.'
  },
  {
    startTime: 6461.76,
    person: 'Karol',
    text: ' And you have to consider the temporal coupling aspect of that.'
  },
  { startTime: 6466.26, person: 'Karol', text: ' How is that data going to be utilised in time?' },
  {
    startTime: 6469.58,
    person: 'Karol',
    text: " And then you can figure out which kind of mechanism you need to actually liberate that data from the database, because sometimes that would be actually putting that in a log broker and just being able to replay that from that log instead of using operational broker with or without persistence doesn't matter, but with that robust filtering capability like Solace provides, right?"
  },
  {
    startTime: 6497.6,
    person: 'Karol',
    text: " So it's all about understanding the context and then doing proper trade-off analysis."
  },
  { startTime: 6502.08, person: 'Karol', text: ' What would be the least worst fit?' },
  {
    startTime: 6506.3,
    person: 'Aaron',
    text: " Yeah, I've been looped into, I don't know why me, but looped into a potential POC proof of concept with the customer of ours that they're doing some mainframe stuff."
  },
  {
    startTime: 6518,
    person: 'Aaron',
    text: ' They have mainframe databases that they want to get data out of these.'
  },
  { startTime: 6522.18, person: 'Aaron', text: ' And so their existing solution is JDBC.' },
  { startTime: 6525.26, person: 'Aaron', text: ' They pull their database.' },
  { startTime: 6527.44, person: 'Aaron', text: " I don't know if it's a rational database." },
  {
    startTime: 6529.44,
    person: 'Aaron',
    text: " I don't know anything about mainframe, but it's some type of database and they have JDBC apps that are pulling this database to get change and stuff out of it."
  },
  {
    startTime: 6537.62,
    person: 'Aaron',
    text: " And they're trying to figure out a better way to do it, right?"
  },
  {
    startTime: 6540.2,
    person: 'Aaron',
    text: ' And so change data capture is not really an option, but they can enable database logging for some of these tables as they get updated.'
  },
  { startTime: 6548.9, person: 'Aaron', text: " However, the logs don't contain all of the data." },
  {
    startTime: 6551.74,
    person: 'Aaron',
    text: " So we're thinking maybe we can use the logs as a trigger to then kick off some polling, right?"
  },
  {
    startTime: 6558.04,
    person: 'Aaron',
    text: " So you don't, you pull only when something happens rather than pulling by time."
  },
  {
    startTime: 6564.42,
    person: 'Aaron',
    text: " There's maybe an interesting hybrid type of solution."
  },
  { startTime: 6568.04, person: 'Karol', text: " That's actually an EDA pattern." },
  { startTime: 6570.88, person: 'Aaron', text: ' Oh, good.' },
  {
    startTime: 6571.66,
    person: 'Karol',
    text: ' That would basically land within the pattern of anaemic events.'
  },
  { startTime: 6578.76, person: 'Aaron', text: ' Oh yeah, thin events.' },
  { startTime: 6579.52, person: 'Aaron', text: ' Sure.' },
  { startTime: 6579.84, person: 'Aaron', text: ' Yeah, yeah, yeah.' },
  { startTime: 6580.62, person: 'Aaron', text: " Something's happened." },
  {
    startTime: 6581.52,
    person: 'Aaron',
    text: " I'm not going to tell you exactly what's happened."
  },
  { startTime: 6583.38, person: 'Aaron', text: ' Yeah, yeah, yeah.' },
  { startTime: 6583.8, person: 'Aaron', text: " Of course you're right." },
  { startTime: 6584.54, person: 'Aaron', text: ' Yeah, yeah, yeah.' },
  { startTime: 6585.26, person: 'Aaron', text: " That's anaemic events versus thin events." },
  { startTime: 6587.88, person: 'Aaron', text: ' Yeah, yeah, exactly.' },
  {
    startTime: 6588.68,
    person: 'Karol',
    text: " So you don't have the context of all the data that happened within whatever happened, but it's a notification."
  },
  {
    startTime: 6599.06,
    person: 'Karol',
    text: ' So if you have that anaemic event that at least points you to the right data, then you can make that smart polling of data to pull that exact record instead of having to pull all records or by flag or whatever every whatever the interval might be.'
  },
  {
    startTime: 6618.68,
    person: 'Karol',
    text: " And that's another viable solution for these kind of legacy systems that if you can find a trigger, some sort of a data like a log that could be utilised as an event beginning the communication, then you can utilise a polling mechanism that is based on those anaemic events."
  },
  { startTime: 6639.08, person: 'Karol', text: ' That is a fair use of that pattern.' },
  {
    startTime: 6643.38,
    person: 'Karol',
    text: " While a lot of people consider anaemic events to be an anti-pattern, it's a very, very useful pattern in these kind of niche situations."
  },
  { startTime: 6654.08, person: 'Aaron', text: ' Things are always applicable somewhere, right?' },
  {
    startTime: 6656.6,
    person: 'Aaron',
    text: " I mean, in general, anti-pattern, sure, but you can always find one thing where it's like, actually, that's a good idea to do it like that."
  },
  {
    startTime: 6664.72,
    person: 'Karol',
    text: " It's a difficult, in general, the discussion around patterns and anti-patterns is quite a difficult topic on its own."
  },
  {
    startTime: 6675.64,
    person: 'Karol',
    text: " Don't have time for that today, that's for sure."
  },
  {
    startTime: 6680.26,
    person: 'Karol',
    text: " But if you're not going to jump into the distinctions between patterns and anti-patterns, but..."
  },
  { startTime: 6688.56, person: 'Karol', text: ' I thought we were going to talk about AI.' },
  { startTime: 6691.48, person: 'Karol', text: ' We will, we will.' },
  {
    startTime: 6693.26,
    person: 'Karol',
    text: ' But if anybody is interested in looking into patterns and anti-patterns, I actually wrote an article about the distinguishing and trying to define what is actually a pattern or an anti-pattern.'
  },
  {
    startTime: 6706.2,
    person: 'Karol',
    text: ' Because in my research, I scoured through several books that mentioned anti-patterns and there was no cohesive definition of what an anti-pattern is.'
  },
  {
    startTime: 6718.86,
    person: 'Karol',
    text: " So if somebody's interested in my take on what an anti-pattern is or how to address..."
  },
  { startTime: 6725.54, person: 'Aaron', text: " It's your article." },
  { startTime: 6727.1, person: 'Aaron', text: " It's my article, exactly." },
  { startTime: 6729, person: 'Karol', text: ' Yes, I wrote it.' },
  {
    startTime: 6730.68,
    person: 'Karol',
    text: ' So this is a piece I wrote some time ago while defining EDA patterns for the research I was doing, because I stumbled into, okay, how do I work with anaemic events or with content-based routing in EDA where people would consider that anti-patterns not to do ever.'
  },
  {
    startTime: 6756.6,
    person: 'Karol',
    text: " But that problem is not that kind of a binary problem, which means that there's a lot more to it."
  },
  {
    startTime: 6763.52,
    person: 'Karol',
    text: " So it's always worth to jump into it, figure it out, try to understand the context."
  },
  {
    startTime: 6771.4,
    person: 'Karol',
    text: ' And the context is always the most difficult aspect there is.'
  },
  {
    startTime: 6776.72,
    person: 'Karol',
    text: ' So if that helps, jump in, read it, ping me on LinkedIn later.'
  },
  { startTime: 6783.5, person: 'Karol', text: ' What do you guys think about that article?' },
  {
    startTime: 6785.94,
    person: 'Karol',
    text: ' Do you agree with my definition of an anti-pattern or a pattern in general?'
  },
  {
    startTime: 6790.68,
    person: 'Karol',
    text: " Let's have a discussion about that because that's always an interesting topic to spar on."
  },
  {
    startTime: 6795.72,
    person: 'Karol',
    text: " I'm happy to jump into that outside of this live stream."
  },
  {
    startTime: 6799.6,
    person: 'Aaron',
    text: ' How does it know that someone has scanned the QR code?'
  },
  { startTime: 6801.7, person: 'Aaron', text: " I don't see any tags or anything." },
  {
    startTime: 6803.9,
    person: 'Karol',
    text: " It knows because the streaming service we're using to chat today is proxying the QR code."
  },
  { startTime: 6814.68, person: 'Karol', text: " So they're actually wiretapping on the QR code." },
  {
    startTime: 6820.86,
    person: 'Karol',
    text: " So they're actually gathering metadata that somebody accessed and then redirecting to the right place."
  },
  { startTime: 6827.34, person: 'Karol', text: ' So we know you scan.' },
  { startTime: 6829.94, person: 'Karol', text: ' I will read that later.' },
  {
    startTime: 6831.98,
    person: 'Karol',
    text: " So yeah, let's jump into, hopefully Sadi is still with us."
  },
  {
    startTime: 6841.46,
    person: 'Karol',
    text: " If not, I hope you'll watch the recording and the answer to his question."
  },
  {
    startTime: 6848.62,
    person: 'Karol',
    text: ' So exception handling and identifying patterns, fantastic.'
  },
  {
    startTime: 6853.36,
    person: 'Karol',
    text: " What, oh, the whole comment doesn't really fit into..."
  },
  {
    startTime: 6860.76,
    person: 'Karol',
    text: " But luckily that's not a, it's just one word that's been cut out."
  },
  {
    startTime: 6866.72,
    person: 'Karol',
    text: ' So thoughts about AI and generative agentic in the world of integration.'
  },
  {
    startTime: 6873.56,
    person: 'Karol',
    text: ' I have my own thoughts and I know you from the perspective of Solace, you have your own thoughts because you actually productize that to the open source project.'
  },
  {
    startTime: 6883.42,
    person: 'Karol',
    text: " So shoot, let's have the EDA perspective and Solace perspective on..."
  },
  { startTime: 6887.66, person: 'Aaron', text: ' Solace perspective, yeah.' },
  { startTime: 6890.64, person: 'Aaron', text: ' Shoot, man.' },
  {
    startTime: 6891.82,
    person: 'Aaron',
    text: " So I guess I'll just, I could summarise it in two kind of phrases is, one, agentic AI, agentic AI just means you have a bunch of specialist agents, right?"
  },
  {
    startTime: 6904.1,
    person: 'Aaron',
    text: ' Like not one agent is going to be the Uber agent that does everything, like building graphs and talking to the weather and looking at files and doing all this stuff, right?'
  },
  {
    startTime: 6912.24,
    person: 'Aaron',
    text: ' So you have specialist agents, they need to talk to each other.'
  },
  {
    startTime: 6915.98,
    person: 'Aaron',
    text: ' And so like probably in these types of systems, 20% of it is actually the AI, maybe the LLMs and all that stuff.'
  },
  { startTime: 6924.56, person: 'Aaron', text: ' 80% of it is the integration.' },
  { startTime: 6926.88, person: 'Aaron', text: " It's the plumbing." },
  {
    startTime: 6927.6,
    person: 'Aaron',
    text: " It's the plumbing between these things and how to make them work together."
  },
  {
    startTime: 6930.32,
    person: 'Aaron',
    text: " And we've had a number of calls of with various people in this space and they all kind of agree."
  },
  {
    startTime: 6936.9,
    person: 'Aaron',
    text: " That's some say 90%, 10%, and 90% Solace's answer is 20 and 80."
  },
  {
    startTime: 6942.44,
    person: 'Aaron',
    text: ' But you know, integration in these agentic systems is significant and important.'
  },
  {
    startTime: 6950.06,
    person: 'Aaron',
    text: " And the way that some of these companies are building these things, it's so reminiscent of kind of microservice distributed architectures where you have a bunch of specialist microservices that are doing their one little thing and they're doing point to point communications to all their other little guys."
  },
  {
    startTime: 6965.06,
    person: 'Aaron',
    text: " And as a Solace person or as a Solace as a company, we've seen this before and we've been trying to fix this with publish, subscribe, event driven, asynchronous communication and it's the exact same thing."
  },
  { startTime: 6977.32, person: 'Aaron', text: ' So yeah.' },
  {
    startTime: 6977.8,
    person: 'Karol',
    text: " So that would resemble in that sense if we're talking about that microservice, pure microservice communication in agentic world that would be using the A2A protocol."
  },
  { startTime: 6991.16, person: 'Aaron', text: " We've wrapped A2A with messaging." },
  {
    startTime: 6994.22,
    person: 'Aaron',
    text: " So it's still at the payload is A2A but we're now using Solace and Topics to move this data around between various agents very like orchestrators and like you can now you can wiretap it."
  },
  {
    startTime: 7005.76,
    person: 'Aaron',
    text: " We have all sorts of observability tools now because it's going through the broker."
  },
  {
    startTime: 7009.38,
    person: 'Aaron',
    text: " You just subscribe to those A2A messages as they're flying through the broker and you can have a real time display."
  },
  {
    startTime: 7015.68,
    person: 'Aaron',
    text: " Like we have demos of this stuff where you can see the different agents talking to each other and what they're doing and like where your query is."
  },
  { startTime: 7021.88, person: 'Aaron', text: " It's anyway." },
  {
    startTime: 7022.68,
    person: 'Aaron',
    text: " So Solace is building an agentic AI framework that you can plug in any MCP server to it and it's, you know, using Solace as its communication framework because we feel that that's where things are going."
  },
  { startTime: 7035.3, person: 'Aaron', text: ' It is you need to be scalable.' },
  { startTime: 7039.24, person: 'Aaron', text: ' Oh, thank you.' },
  {
    startTime: 7039.92,
    person: 'Karol',
    text: " To the liberty of popping the main page for that that's called the Solace Agent Bash."
  },
  {
    startTime: 7045.26,
    person: 'Karol',
    text: " So if you're interested in the topic how that works, it's exactly that and it's an open source."
  },
  { startTime: 7054.26, person: 'Karol', text: " It's not a product." },
  {
    startTime: 7055.44,
    person: 'Aaron',
    text: " I don't think we're open sourcing the whole thing."
  },
  {
    startTime: 7058.28,
    person: 'Aaron',
    text: ' There is some like secret sauces in there, but it is significant.'
  },
  { startTime: 7062.36, person: 'Aaron', text: " It's all on GitHub." },
  {
    startTime: 7063.82,
    person: 'Karol',
    text: " So if you want to look it up, that's the QR code for the GitHub."
  },
  { startTime: 7068.2, person: 'Karol', text: ' Play around with it.' },
  { startTime: 7070.18, person: 'Karol', text: ' See if you can use it.' },
  {
    startTime: 7071.66,
    person: 'Karol',
    text: " That's definitely something to use for agentic environments, but that doesn't really fully answer the question."
  },
  { startTime: 7081.42, person: 'Karol', text: " No, no, that's not, yeah." },
  { startTime: 7083.58, person: 'Karol', text: ' Pose there.' },
  {
    startTime: 7084.2,
    person: 'Karol',
    text: ' And I need to look it up in my Google Drive, but because I was actually interviewing with Solace a little bit ago, I had to prepare.'
  },
  { startTime: 7096.52, person: 'Aaron', text: " Didn't take it, you know." },
  { startTime: 7097.58, person: 'Karol', text: " Didn't take it." },
  { startTime: 7098.6, person: 'Karol', text: " Didn't take it." },
  {
    startTime: 7099.62,
    person: 'Karol',
    text: " It was a very, very fine offer and I would definitely, if I was 10 years younger and didn't have kids, that would be definitely something amazing to do."
  },
  { startTime: 7114.54, person: 'Karol', text: ' I just need to find the right deck.' },
  {
    startTime: 7116.26,
    person: 'Karol',
    text: ' I actually had to prepare the deck on that because I was asked to present a Solace agent badge and what would that be.'
  },
  {
    startTime: 7125.08,
    person: 'Karol',
    text: ' So I tried to approach that from a perspective a little bit more agnostic.'
  },
  {
    startTime: 7133.56,
    person: 'Aaron',
    text: " While you're digging up your presentation there, I will give a shout out to my colleague, Tamimi, who actually made a nice little video series on our Solace YouTube channel, kind of explaining the, and they're nice little five minute videos, little bite size."
  },
  {
    startTime: 7146.68,
    person: 'Aaron',
    text: ' And he explains the kind of the Solace agent mesh, the different components of it and why we feel that kind of agentic AI needs to look at, you know, EDA and publish subscribe as a- Yeah, so actually, I actually used those to prepare this deck.'
  },
  { startTime: 7164.24, person: 'Karol', text: " They're great videos." },
  { startTime: 7165.74, person: 'Karol', text: ' I watched them all.' },
  {
    startTime: 7166.56,
    person: 'Karol',
    text: ' They really explain the Solace agent mesh and the principles about meshing agents great.'
  },
  { startTime: 7172.1, person: 'Karol', text: ' So watch them.' },
  {
    startTime: 7172.74,
    person: 'Karol',
    text: ' And now in terms of the shift in terms of interoperability and integration, so we have our traditional IT ecosystem set up.'
  },
  { startTime: 7182.08, person: 'Karol', text: ' We have our systems, our data and databases.' },
  {
    startTime: 7185.18,
    person: 'Karol',
    text: ' We have integration platforms and message brokers aligned with those.'
  },
  { startTime: 7190.94, person: 'Karol', text: ' We have API management.' },
  { startTime: 7193.12, person: 'Karol', text: " That's the traditional IT setup, right?" },
  { startTime: 7195.5, person: 'Karol', text: ' In terms of interoperability.' },
  { startTime: 7198.72, person: 'Karol', text: " That's that box, right?" },
  { startTime: 7200.64, person: 'Karol', text: ' So traditional IT ecosystem.' },
  {
    startTime: 7202.74,
    person: 'Karol',
    text: ' And the way I basically see it, then on top of that, we have all sorts of LLMs, generative AI.'
  },
  {
    startTime: 7208.6,
    person: 'Karol',
    text: ' We have all sorts of agents doing various things with or without the access to those LLMs. And this is basically where we come into this agentic ecosystem.'
  },
  {
    startTime: 7223.76,
    person: 'Karol',
    text: ' Now, these ecosystems are next to each other, but one relies on the other one.'
  },
  {
    startTime: 7230.34,
    person: 'Karol',
    text: ' The agentic ecosystem is basically useless without, right?'
  },
  { startTime: 7236.6, person: 'Karol', text: " I don't really remember what's there." },
  { startTime: 7239.56, person: 'Karol', text: ' So we have model context protocol and A2I.' },
  { startTime: 7243.26, person: 'Karol', text: ' A2I is between agents.' },
  {
    startTime: 7245.54,
    person: 'Karol',
    text: ' MCP is the boundary between the traditional IT ecosystem and the agents.'
  },
  {
    startTime: 7252.9,
    person: 'Karol',
    text: " So if we're looking at the traditional integration or a traditional application integration, we still very much need it because that's our lifeline to actual data."
  },
  { startTime: 7264.74, person: 'Karol', text: " That's our lifeline to actual functions." },
  {
    startTime: 7266.84,
    person: 'Karol',
    text: " That's our lifeline to actual governance over what that agent can do in our IT ecosystems and in our systems."
  },
  {
    startTime: 7276.24,
    person: 'Karol',
    text: ' And this is where the MCP really comes to play, where now a lot of integration platforms enabled to just add MCP on top of their APIs.'
  },
  {
    startTime: 7289.44,
    person: 'Karol',
    text: ' So instead of exposing a REST endpoint, we expose an MCP endpoint, MCP server as an endpoint.'
  },
  { startTime: 7299, person: 'Karol', text: ' And this is the shift.' },
  {
    startTime: 7300.96,
    person: 'Karol',
    text: " It's still the same integration, just a different protocol."
  },
  {
    startTime: 7304.8,
    person: 'Karol',
    text: ' And the MCP server then basically becomes that different of a protocol in the sense that it actually requires that state.'
  },
  { startTime: 7317.06, person: 'Karol', text: " So that's the differentiator." },
  {
    startTime: 7321.24,
    person: 'Karol',
    text: " So we're still gonna have plenty of work as integrators."
  },
  {
    startTime: 7327.68,
    person: 'Karol',
    text: " That's exactly that 80% is that plumbing, thought through, understood so that we know which agent has access to what data."
  },
  {
    startTime: 7338.36,
    person: 'Karol',
    text: ' While we can set up- Authorisation, authentication.'
  },
  {
    startTime: 7342.65,
    person: 'Karol',
    text: " We can set up this as MCP servers solely because if you look at MCP server, what it is, it's a micro integration platform, a broker type integration platform."
  },
  {
    startTime: 7353.26,
    person: 'Karol',
    text: " But it's something that I'm working on in terms of properly describing."
  },
  {
    startTime: 7359.36,
    person: 'Karol',
    text: ' But basically the analogue is, if you look at MCP from a perspective of the API led architecture, so that layered architecture where you have the channel layer that is the representation of what that system or what that agent has access to, then basically the MCP server becomes one application and channel layer.'
  },
  {
    startTime: 7383.12,
    person: 'Karol',
    text: ' And this is interesting because then you can apply a lot of governance over the mains, over the access to proper services and data within your ecosystem by governing what that one channel has access to.'
  },
  {
    startTime: 7395.82,
    person: 'Karol',
    text: ' And then you can host however much MCP servers you want, which with all of them having precisely fine tuned access to services that you already have.'
  },
  {
    startTime: 7407.94,
    person: 'Karol',
    text: ' So if a company already has a API led architecture platform in place, easy peasy.'
  },
  {
    startTime: 7414.88,
    person: 'Karol',
    text: " That's just exposing that as another endpoint as an MCP."
  },
  {
    startTime: 7419.14,
    person: 'Karol',
    text: ' And already those technologies are catching up and starting exposing, adding MCP as just another protocol in the portfolio of protocols you can expose from their applications.'
  },
  {
    startTime: 7430.92,
    person: 'Karol',
    text: " And that makes it all interesting, very interesting, because that's a very large impact on the architecture of integration platforms."
  },
  {
    startTime: 7441.76,
    person: 'Karol',
    text: ' And on top of that, if you add the communication, the agentic communication, which is A2A or A2A wrapped with async, like done by Solace.'
  },
  {
    startTime: 7456.78,
    person: 'Aaron',
    text: " Well, the most of the use cases we're seeing these days from customers that are interested is kind of like this talk to your data type use cases, right?"
  },
  {
    startTime: 7465.28,
    person: 'Aaron',
    text: ' Where you might have agents for Salesforce for your problem, your JIRAs, maybe your trouble ticket, your orders.'
  },
  {
    startTime: 7473.4,
    person: 'Aaron',
    text: " And so like if you're a customer facing person, you like get a support call."
  },
  {
    startTime: 7477.42,
    person: 'Aaron',
    text: ' You could talk to your, you could basically say, hey, chatbot, tell me all the, tell me all the things that you need to know and give me an update on this particular customer.'
  },
  {
    startTime: 7483.74,
    person: 'Aaron',
    text: " And it'll pull all this data from disparate places and then format it into a nice HTML report or some PowerPoint slides and present it to you."
  },
  { startTime: 7489.52, person: 'Aaron', text: " Here's boom, just like that." },
  {
    startTime: 7491.88,
    person: 'Aaron',
    text: " Having that kind of, I mean, that's from the usability perspective, like in terms of how do you actually go and architect that and like kind of build all this."
  },
  { startTime: 7499.94, person: 'Aaron', text: " There's a lot of integration." },
  { startTime: 7501.14, person: 'Aaron', text: " There's, I mean, it's, yeah." },
  {
    startTime: 7505.38,
    person: 'Karol',
    text: ' Yes, the agent basically has to access a lot of sources of data to compose, but this access needs to be use case specific.'
  },
  {
    startTime: 7514.64,
    person: 'Karol',
    text: " Otherwise it's going to be just hallucination on top of hallucination because it's already been, Antropic already tested that in terms of the extent of MCP and how you can build MCP is that the more sources you add to the MCP server, the more the agent will hallucinate, the more the model will hallucinate because there's too many sources in that."
  },
  {
    startTime: 7537.76,
    person: 'Aaron',
    text: ' I think some of our AI, so Solace kind of made a dedicated AI team about two years ago to kind of start down this path.'
  },
  {
    startTime: 7543.94,
    person: 'Aaron',
    text: " So we've been thinking about this for a while, even though we're a message broker, event-driven kind of company, we do have people that were very keen to get on this and had been dabbling in AI for probably like five years, our chief AI guy."
  },
  {
    startTime: 7556.92,
    person: 'Aaron',
    text: " However, the one thing I was going to say that you just key me to, they, I remember some of our slides talk about in order to prevent hallucinations, it's about providing the right amount of context to certain servers."
  },
  {
    startTime: 7568.54,
    person: 'Aaron',
    text: " Like you don't want to overload them and you have to give them enough."
  },
  {
    startTime: 7572.08,
    person: 'Aaron',
    text: ' And so as part of that, I think a lot of stuff has gone into, in our implementation, we have this orchestrator kind of mega agent that basically you can scale it out.'
  },
  {
    startTime: 7582.96,
    person: 'Aaron',
    text: " So it's not really a bottleneck, but it is the one who is taking down your complex human query and figuring out how to break that down for the different agents based on their capabilities, which are advertised by these agent cards, you know, and providing that agent with the right amount of context to not hallucinate."
  },
  {
    startTime: 7599.88,
    person: 'Aaron',
    text: " So I'm guessing they've probably gone down this path of, I want access."
  },
  { startTime: 7603.26, person: 'Aaron', text: ' Yeah, yeah.' },
  { startTime: 7604.34, person: 'Aaron', text: " Sometimes it's pretty, pretty funny." },
  {
    startTime: 7606.82,
    person: 'Aaron',
    text: " Not when you're trying to get like, you know, writing documentation and it's like just making up crazy stuff."
  },
  { startTime: 7611.62, person: 'Aaron', text: " You're like, I almost can't do that." },
  { startTime: 7613.66, person: 'Aaron', text: " Like you're crazy chatbot, but." },
  {
    startTime: 7616.08,
    person: 'Karol',
    text: ' And the same applies to just using generative AI.'
  },
  { startTime: 7619.48, person: 'Karol', text: ' I have a licence for Google workspace.' },
  {
    startTime: 7622.42,
    person: 'Karol',
    text: ' So I work on a daily basis with Gemini within my workspace.'
  },
  {
    startTime: 7628.12,
    person: 'Karol',
    text: ' So I often test the extent how those hallucinations occur.'
  },
  {
    startTime: 7633.44,
    person: 'Karol',
    text: " So I figured one day I'm going to experiment with a Gemini based agent and just hook up all the data I downloaded from LinkedIn."
  },
  {
    startTime: 7642.88,
    person: 'Karol',
    text: " That's available as my data for my activity, my profile, etcétera."
  },
  {
    startTime: 7647.74,
    person: 'Karol',
    text: ' And I just hooked up willy nilly all the data to that chatbot agent.'
  },
  {
    startTime: 7654.26,
    person: 'Karol',
    text: ' And I also hooked up my CD that I made myself and started asking that agent questions about me.'
  },
  { startTime: 7661.94, person: 'Karol', text: ' The results were astounding.' },
  {
    startTime: 7665.12,
    person: 'Karol',
    text: ' I was like, where do you get that information from?'
  },
  {
    startTime: 7668.24,
    person: 'Karol',
    text: " There's nothing that would indicate that I studied marketing."
  },
  { startTime: 7672.52, person: 'Aaron', text: ' All right.' },
  { startTime: 7673.8, person: 'Aaron', text: ' So work in progress, eh?' },
  {
    startTime: 7676.78,
    person: 'Karol',
    text: " Yeah, it's probably going to be changing over the years."
  },
  {
    startTime: 7679.6,
    person: 'Karol',
    text: ' Those models will be handling multiple data sources better.'
  },
  {
    startTime: 7684.4,
    person: 'Karol',
    text: " But the more you hook up now, it's the more hallucinations."
  },
  {
    startTime: 7688.5,
    person: 'Karol',
    text: " So if we're talking integration, those integrations will have to be very much fine grained integrations with a very specific purpose per agent."
  },
  {
    startTime: 7699.08,
    person: 'Karol',
    text: ' So the agents will also have to be very purpose related.'
  },
  {
    startTime: 7702.98,
    person: 'Karol',
    text: ' So they cannot work as very generalistic software.'
  },
  {
    startTime: 7708.85,
    person: 'Karol',
    text: ' So yeah, customer support agents, absolutely fine for somebody in customer support to use and pull that data and understand that data in that small specific context of a use case.'
  },
  {
    startTime: 7721.08,
    person: 'Karol',
    text: ' For example, reconciling problems with an order in a retail environment or something like that.'
  },
  {
    startTime: 7727.64,
    person: 'Karol',
    text: ' Or understanding the account of a customer in telco.'
  },
  { startTime: 7733.44, person: 'Karol', text: ' So what kind of services they have?' },
  { startTime: 7735.28, person: 'Karol', text: " What's the usage of those services?" },
  { startTime: 7737.14, person: 'Karol', text: ' What are the boundaries or whatever else?' },
  {
    startTime: 7740.04,
    person: 'Karol',
    text: " Or what are what incidents they have posted over the last half a year to see if that's maybe a reoccurring problem?"
  },
  { startTime: 7749.1, person: 'Karol', text: ' We are yet to see.' },
  {
    startTime: 7752.06,
    person: 'Karol',
    text: ' We already seen some companies backing out of AI, probably due to poor implementation.'
  },
  { startTime: 7760.82, person: 'Karol', text: ' So there were...' },
  {
    startTime: 7761.5,
    person: 'Karol',
    text: ' I recently read a case study of a company that replaced their call centres with AI.'
  },
  {
    startTime: 7770.62,
    person: 'Karol',
    text: ' And the number of complaints over very poor quality of service skyrocketed.'
  },
  {
    startTime: 7778.22,
    person: 'Karol',
    text: ' So after half a year, they basically rehired the majority of the call centre and switched back to humans handling the calls.'
  },
  {
    startTime: 7789.3,
    person: 'Karol',
    text: ' The speed of processing the calls was great with AI.'
  },
  {
    startTime: 7794.86,
    person: 'Karol',
    text: ' The quality of the processing, everybody hated it.'
  },
  { startTime: 7798.62, person: 'Karol', text: ' It was horrendous.' },
  { startTime: 7801.16, person: 'Karol', text: ' So yeah.' },
  { startTime: 7803.3, person: 'Karol', text: ' Hallucinogens, yes.' },
  { startTime: 7805.08, person: 'Karol', text: " I'm happy to get those that AI is doing." },
  { startTime: 7808.2, person: 'Karol', text: ' Looking at the...' },
  { startTime: 7809.04, person: 'Karol', text: ' Very creative.' },
  { startTime: 7810.08, person: 'Karol', text: ' Very creative.' },
  {
    startTime: 7811.08,
    person: 'Karol',
    text: ' Looking at the image processing with generative AI back like five years done by Google, the test where you have those wonky images of cats like merged into together.'
  },
  { startTime: 7821.16, person: 'Karol', text: ' Yeah, yeah, yeah.' },
  { startTime: 7824.68, person: 'Karol', text: ' Some hardcore drugs there for AI.' },
  { startTime: 7827.74, person: 'Karol', text: " But now it's better." },
  {
    startTime: 7828.88,
    person: 'Karol',
    text: " But obviously it's still not to the level that it's going to be good."
  },
  {
    startTime: 7833.26,
    person: 'Karol',
    text: ' So proper handling of data, proper handling of integrations is now ever more so crucial.'
  },
  { startTime: 7840.1, person: 'Aaron', text: ' In my opinion, at least.' },
  { startTime: 7841.68, person: 'Aaron', text: ' Agreed.' },
  { startTime: 7842.32, person: 'Aaron', text: ' Yeah.' },
  {
    startTime: 7843.98,
    person: 'Aaron',
    text: " It's embarrassing, but I actually haven't started playing with this stuff yet because I just got my new laptop sorted out."
  },
  {
    startTime: 7849.3,
    person: 'Aaron',
    text: " My old laptop couldn't run the agent mesh because my..."
  },
  { startTime: 7853.5, person: 'Aaron', text: " Whatever, it doesn't matter." },
  { startTime: 7854.42, person: 'Aaron', text: ' My WSL was too old.' },
  { startTime: 7855.9, person: 'Aaron', text: ' I got a new laptop.' },
  { startTime: 7857.1, person: 'Aaron', text: ' I got all modern.' },
  {
    startTime: 7858.18,
    person: 'Aaron',
    text: " Anyway, and so I'm going to start playing with this."
  },
  { startTime: 7860.32, person: 'Aaron', text: " So I don't have a..." },
  {
    startTime: 7861.34,
    person: 'Aaron',
    text: " I don't like to talk and have an opinion about something that I haven't really used and touched myself, you know?"
  },
  { startTime: 7866.24, person: 'Aaron', text: ' Like I could not tell you much about...' },
  { startTime: 7869.38, person: 'Aaron', text: " I don't know, Boomi." },
  { startTime: 7870.42, person: 'Aaron', text: " Because I've never really played with Boomi." },
  { startTime: 7871.54, person: 'Aaron', text: ' I kind of know a few high level things.' },
  {
    startTime: 7873.56,
    person: 'Aaron',
    text: ' But if you ask me about Solace APIs, I can go...'
  },
  {
    startTime: 7876.88,
    person: 'Aaron',
    text: " I can talk to you for hours about because I played with them I don't like to talk about things that I haven't..."
  },
  {
    startTime: 7883.36,
    person: 'Aaron',
    text: " Otherwise, you just sound like a marketing person who's just reading the slides and, you know, whatever, right?"
  },
  { startTime: 7887.22, person: 'Karol', text: " So yeah, I don't want to say too much about..." },
  {
    startTime: 7889.76,
    person: 'Karol',
    text: " But then again, you're very much a hands-on kind of person, hands-on specialist."
  },
  {
    startTime: 7895.48,
    person: 'Karol',
    text: " Well, I'm more of an architect and I deal with qualitative analysis all the time and contextualising that to business."
  },
  { startTime: 7903.82, person: 'Karol', text: ' So a completely different scope.' },
  { startTime: 7905.66, person: 'Karol', text: " So we're looking from different perspectives." },
  {
    startTime: 7907.58,
    person: 'Karol',
    text: " For you, it's important to experience that so you can have an opinion."
  },
  {
    startTime: 7910.46,
    person: 'Karol',
    text: " For me, it's important to ponder upon the topic to have an opinion, to actually think it through."
  },
  { startTime: 7916.44, person: 'Karol', text: ' Two different perspectives on the same thing.' },
  {
    startTime: 7918.62,
    person: 'Aaron',
    text: ' And well, I gave them our business opinion, right?'
  },
  { startTime: 7920.5, person: 'Aaron', text: ' Really?' },
  {
    startTime: 7920.92,
    person: 'Aaron',
    text: " So yeah, it's like we see agentic AI systems as distributed architectures and that they are made better by something like us."
  },
  { startTime: 7929.16, person: 'Aaron', text: " So that's..." },
  { startTime: 7930.4, person: 'Aaron', text: " We're not going to build LLMs, that's for sure." },
  {
    startTime: 7932.5,
    person: 'Aaron',
    text: " We're just trying to make them talk better, that's all."
  },
  { startTime: 7935.16, person: 'Aaron', text: ' So yeah.' },
  {
    startTime: 7936.6,
    person: 'Karol',
    text: " And that's absolutely going to be extremely important in proper adoption of Generative AI and later models to make them talk properly with proper boundaries and proper context of semantic understanding, semantic coupling of what they're doing."
  },
  {
    startTime: 7955.94,
    person: 'Karol',
    text: " Because otherwise, that's going to be just hallucination after hallucination after hallucination."
  },
  { startTime: 7960.68, person: 'Karol', text: " And it's not going to be pretty." },
  { startTime: 7962.38, person: 'Aaron', text: ' Yeah.' },
  {
    startTime: 7962.64,
    person: 'Aaron',
    text: " And it's like, obviously, proper authorisation from agent to agent is also super important, right?"
  },
  {
    startTime: 7966.96,
    person: 'Aaron',
    text: " If I'm querying, if I'm talking about my HR system, I should not be able to look up other people's information on HR, right?"
  },
  {
    startTime: 7974.12,
    person: 'Aaron',
    text: " Like, I mean, it'd be very locked down to that versus a weather system."
  },
  { startTime: 7977.92, person: 'Aaron', text: ' Who cares?' },
  { startTime: 7978.56, person: 'Aaron', text: ' I mean, there are very customer details.' },
  {
    startTime: 7981.06,
    person: 'Aaron',
    text: " They're like, yeah, these kind of things need to be part of it."
  },
  {
    startTime: 7984.48,
    person: 'Aaron',
    text: ' Passing along tokens, however, authorisation authentication is done.'
  },
  {
    startTime: 7988.32,
    person: 'Aaron',
    text: " But we're getting into this now because this is actually useful stuff."
  },
  {
    startTime: 7992.78,
    person: 'Aaron',
    text: " And it's like, now the guardrails have to go up because it's a little bit wild out there."
  },
  { startTime: 7997.9, person: 'Aaron', text: ' So yeah.' },
  { startTime: 8001.76, person: 'Karol', text: ' Yeah.' },
  { startTime: 8003.42, person: 'Karol', text: " We're biased as well, though." },
  { startTime: 8004.6, person: 'Karol', text: " We're all biased here." },
  {
    startTime: 8005.86,
    person: 'Karol',
    text: ' So and AI and generative AI LLMs only amplify our biases, basically.'
  },
  {
    startTime: 8014.18,
    person: 'Karol',
    text: " And that's been already established all over the place that if we have use cases that can produce bias, that bias will definitely be amplified because the training data, especially if we're using large language models that were trained by a different company."
  },
  {
    startTime: 8034.71,
    person: 'Karol',
    text: " So whoever is training them, like Anthropic, Google, doesn't really matter."
  },
  {
    startTime: 8040.85,
    person: 'Karol',
    text: " They're training the models and we're contextualising them to our use cases."
  },
  {
    startTime: 8044.65,
    person: 'Karol',
    text: ' We have no idea on what data those models were trained, which means that we have no idea what kind of biases will be surfacing through those models in our use cases.'
  },
  {
    startTime: 8057.05,
    person: 'Aaron',
    text: " We know there will be some, but we don't know what they..."
  },
  {
    startTime: 8060.07,
    person: 'Karol',
    text: " Yeah, that's something that needs to be accounted for."
  },
  {
    startTime: 8064.05,
    person: 'Karol',
    text: ' So any use cases that are prone to bias already should be disqualified from use because you would have to actually sit down in your company, take a vetted data set, check it for biases, train the model yourself, build the model yourself and then utilise it for your use cases.'
  },
  { startTime: 8084.37, person: 'Karol', text: ' That is a multi-million dollar endeavour.' },
  { startTime: 8088.83, person: 'Karol', text: ' Easily.' },
  { startTime: 8089.25, person: 'Karol', text: ' Not a lot of companies can afford that.' },
  {
    startTime: 8091.59,
    person: 'Karol',
    text: " So we're kind of forced to use those models, but that comes with that risk of those kind of cognitive biases presented in the data sets."
  },
  {
    startTime: 8103.03,
    person: 'Karol',
    text: " And we've already seen that in different ATS systems."
  },
  { startTime: 8108.47, person: 'Karol', text: ' Workday was recently sued for their ATS system.' },
  { startTime: 8114.37, person: 'Karol', text: " What's ATS?" },
  {
    startTime: 8115.55,
    person: 'Karol',
    text: " ATS, I don't really remember what the abbreviation stands for, but that's basically a system that's vetting candidates."
  },
  { startTime: 8124.37, person: 'Karol', text: ' Okay, okay.' },
  { startTime: 8125.65, person: 'Karol', text: ' Analysing CVs, vetting candidates.' },
  {
    startTime: 8128.57,
    person: 'Karol',
    text: ' And it turns out that their ATS, presumably, was already biased towards, for example, people over 50.'
  },
  { startTime: 8139.25, person: 'Karol', text: ' Okay.' },
  { startTime: 8140.67, person: 'Karol', text: ' Right?' },
  {
    startTime: 8141.27,
    person: 'Karol',
    text: ' And they got rejection emails just automated rejection emails within minutes after applying or at hours that are not operating hours of said company.'
  },
  { startTime: 8153.35, person: 'Karol', text: ' These kinds of things.' },
  {
    startTime: 8154.65,
    person: 'Karol',
    text: ' So those biases based on the data sets already went amplified and made actually companies lose talent because of that.'
  },
  {
    startTime: 8164.45,
    person: 'Karol',
    text: ' So there are many, many other examples where that funnel of data and providing proper data for agents is very, very crucial.'
  },
  { startTime: 8174.51, person: 'Aaron', text: ' Over 50 is not that old, by the way.' },
  {
    startTime: 8176.51,
    person: 'Aaron',
    text: " I just want to point that out there because that's creeping up pretty soon."
  },
  { startTime: 8181.47, person: 'Karol', text: ' Yeah, yeah, yeah, yeah.' },
  {
    startTime: 8183.19,
    person: 'Karol',
    text: " That's, yeah, mine is the 40 mark and that's also creeping on me."
  },
  { startTime: 8188.71, person: 'Karol', text: " It's, ooh, that's going to be..." },
  { startTime: 8192.389, person: 'Karol', text: " I don't care." },
  { startTime: 8193.67, person: 'Karol', text: " I'm young at heart." },
  { startTime: 8195.33, person: 'Karol', text: ' And so are you.' },
  { startTime: 8196.389, person: 'Karol', text: ' So yeah.' },
  { startTime: 8198.33, person: 'Karol', text: " There's plenty of problems with that." },
  { startTime: 8200.629, person: 'Karol', text: " We don't know." },
  { startTime: 8201.87, person: 'Karol', text: " We'll see." },
  { startTime: 8203.75, person: 'Karol', text: " We're trying to make it work with what we have." },
  {
    startTime: 8207.29,
    person: 'Karol',
    text: ' And integration is going to be only, only more important in general.'
  },
  {
    startTime: 8212.25,
    person: 'Karol',
    text: " Whether or not it's going to be agent to agent or it's going to be our IT ecosystem to those agents to exchange proper data for them to work with that data or utilise services."
  },
  { startTime: 8224.45, person: 'Karol', text: " We'll see." },
  { startTime: 8226.049, person: 'Karol', text: ' So, yeah.' },
  { startTime: 8227.969, person: 'Aaron', text: ' Yep, yep.' },
  {
    startTime: 8229.61,
    person: 'Aaron',
    text: " And hopefully within a year or so, I'll have a much stronger opinion on all this stuff because I've been kind of..."
  },
  { startTime: 8234.93, person: 'Karol', text: ' Hopefully.' },
  {
    startTime: 8235.49,
    person: 'Aaron',
    text: " I've been using AI, but I haven't been doing AI."
  },
  { startTime: 8238.35, person: 'Aaron', text: ' You know what I mean?' },
  {
    startTime: 8240.17,
    person: 'Karol',
    text: " I'm still waiting for a lovely project somewhere of a client that actually wants to utilise MCP so I can jump into domain-driven design and actually building that..."
  },
  { startTime: 8249.91, person: 'Aaron', text: ' Get a project.' },
  {
    startTime: 8251.03,
    person: 'Karol',
    text: ' Yeah, MCP-related integrations and actually design that properly so that we can work that.'
  },
  {
    startTime: 8257.629,
    person: 'Karol',
    text: " Right now for me, it's a theoretical work, but I see that there is a strong connection to domain-driven design that the domain-driven design field will grow due to agent AI and the utilisation of data by agents."
  },
  {
    startTime: 8269.57,
    person: 'Karol',
    text: " That's definitely going to be a mandatory thing to handle that data in that specific way."
  },
  { startTime: 8275.33, person: 'Karol', text: ' Yep.' },
  { startTime: 8276.95, person: 'Karol', text: ' That said, we are way over two hours.' },
  { startTime: 8280.549, person: 'Aaron', text: ' Yeah, we are actually.' },
  { startTime: 8281.59, person: 'Aaron', text: " Yeah, I'm like, I got to go pee soon." },
  { startTime: 8285.43, person: 'Aaron', text: ' it was such a rush to get here.' },
  {
    startTime: 8287.07,
    person: 'Aaron',
    text: " Honestly, I'm glad our planes were late this morning because there was more thunderstorms rolling around Ottawa."
  },
  { startTime: 8293.809, person: 'Aaron', text: ' So my plane into Ottawa was a bit late.' },
  {
    startTime: 8295.95,
    person: 'Aaron',
    text: " So I'm very happy, even though we're two hours past when we said we were going to do this, that you were flexible enough to allow me to get home."
  },
  {
    startTime: 8305.09,
    person: 'Aaron',
    text: ' Otherwise, well, I could have just hung out at the airport like in the corner.'
  },
  {
    startTime: 8311.45,
    person: 'Karol',
    text: ' That would have been a little bit cringy to talk about these things with such excitement at an airport.'
  },
  { startTime: 8317.33, person: 'Karol', text: ' That would be a little bit difficult.' },
  {
    startTime: 8319.43,
    person: 'Aaron',
    text: ' Thank you for being flexible and allowing me to get home.'
  },
  {
    startTime: 8322.69,
    person: 'Aaron',
    text: ' And thank you for hosting me on your cool podcast.'
  },
  {
    startTime: 8327.73,
    person: 'Aaron',
    text: ' Maybe you should come on to my podcast at some point.'
  },
  { startTime: 8331.03, person: 'Karol', text: ' Oh, definitely.' },
  { startTime: 8332.53, person: 'Karol', text: ' Office hours for the win.' },
  { startTime: 8333.77, person: 'Karol', text: ' Office hours.' },
  { startTime: 8334.37, person: 'Karol', text: ' All those office hours.' },
  {
    startTime: 8336.11,
    person: 'Karol',
    text: " And for those, I'm going to switch for a moment."
  },
  { startTime: 8339.23, person: 'Karol', text: ' Take us, well, okay.' },
  { startTime: 8343.52, person: 'Aaron', text: ' Take us off screen.' },
  { startTime: 8345.209, person: 'Karol', text: ' Coming up next week.' },
  { startTime: 8347.45, person: 'Karol', text: ' Exactly next week.' },
  { startTime: 8348.51, person: 'Karol', text: " We're going to be having a bit of a discussion." },
  {
    startTime: 8351.049,
    person: 'Karol',
    text: " Topic that's very related to our now discussion about AI."
  },
  {
    startTime: 8355.45,
    person: 'Karol',
    text: " So we're talking data mesh versus application integration."
  },
  { startTime: 8360.389, person: 'Karol', text: " I'm having two lovely guests." },
  {
    startTime: 8363.45,
    person: 'Karol',
    text: ' Rachel Barton, who is a principal data and domain architect.'
  },
  {
    startTime: 8367.45,
    person: 'Karol',
    text: " And Andrew Jones, who's a principal engineer and author specialising in data contracts."
  },
  {
    startTime: 8373.93,
    person: 'Karol',
    text: " That's going to be a very interesting conversation to be had."
  },
  {
    startTime: 8377.889,
    person: 'Karol',
    text: " Because we're going to be looking at what are differences in the field between data mesh and application integration."
  },
  { startTime: 8384.29, person: 'Karol', text: ' What the hell is going on?' },
  {
    startTime: 8385.53,
    person: 'Karol',
    text: " Because I've had some really interesting comments on the topic after a workshop that I ran at DDD Europe this year."
  },
  {
    startTime: 8394.51,
    person: 'Karol',
    text: " And I think there's a lot of misconceptions and basically differences in language."
  },
  {
    startTime: 8402.39,
    person: 'Karol',
    text: ' How people describe the data architecture and data mesh versus how we talk about application integration.'
  },
  {
    startTime: 8409.51,
    person: 'Karol',
    text: " And this is something we're going to be exploring in the next stream, which is going to be exactly in a week."
  },
  {
    startTime: 8416.85,
    person: 'Karol',
    text: " And if you're still with us, if you're still watching, and if you want to catch all the interesting topics on live streams, but also articles, you can read more on application integration, enterprise application integration, event-driven architecture, API-led architecture at bridgingthegap.eu.com."
  },
  {
    startTime: 8436.15,
    person: 'Karol',
    text: ' You can subscribe to our sub stack where we release all those live streams as posts also release their articles with a little bit of a delay and sometimes have some conversations.'
  },
  {
    startTime: 8451.25,
    person: 'Karol',
    text: " And if you're still with us, subscribe to the YouTube channel."
  },
  { startTime: 8454.81, person: 'Karol', text: " You'll get a ping about new streams coming up." },
  {
    startTime: 8458.23,
    person: 'Karol',
    text: " I'm also planning a few video series, well, still in planning, but materials pending to be built up and recorded."
  },
  {
    startTime: 8470.05,
    person: 'Karol',
    text: ' So hopefully a little bit more content will be there alongside these live streams.'
  },
  { startTime: 8477.33, person: 'Karol', text: " So yeah, that said, we're going to be ending." },
  { startTime: 8485.35, person: 'Karol', text: ' What time is it in Ottawa right now?' },
  { startTime: 8488.43, person: 'Aaron', text: " It's coming up on 5.30 PM." },
  { startTime: 8491.13, person: 'Aaron', text: ' 5.30, oof.' },
  { startTime: 8492.61, person: 'Aaron', text: ' Yeah, time for dinner, lunch.' },
  { startTime: 8494.21, person: 'Karol', text: ' Time for dinner.' },
  { startTime: 8494.95, person: 'Aaron', text: ' Actually, so yeah.' },
  { startTime: 8496.35, person: 'Karol', text: ' For you, time for dinner.' },
  {
    startTime: 8497.73,
    person: 'Karol',
    text: " For me, it's time to go to bed and get some sleep before I go to the office tomorrow."
  },
  { startTime: 8504.65, person: 'Karol', text: ' Thank you all for joining.' },
  {
    startTime: 8507.53,
    person: 'Karol',
    text: " And Aaron, it's not the last time that we're going to be seeing you."
  },
  { startTime: 8511.21, person: 'Karol', text: " It's definitely the first of many." },
  {
    startTime: 8516.89,
    person: 'Karol',
    text: " Yeah, we'll be chatting about more event-driven topics later on."
  },
  { startTime: 8523.79, person: 'Karol', text: " I'll ping you offline to chat about those." },
  { startTime: 8526.83, person: 'Karol', text: " We'll figure something out." },
  { startTime: 8528.19, person: 'Aaron', text: " I didn't show my sunburst." },
  {
    startTime: 8529.37,
    person: 'Aaron',
    text: ' I have to come back and show the sunburst diagram at some point.'
  },
  { startTime: 8532.63, person: 'Karol', text: ' So we already have a new topic to talk about.' },
  { startTime: 8536.31, person: 'Karol', text: " So we'll jump into that." },
  {
    startTime: 8538.85,
    person: 'Karol',
    text: ' So observability, analytics, these kinds of things, these are also EDA related, very important.'
  },
  { startTime: 8543.33, person: 'Karol', text: ' Welcome back to EDA.' },
  {
    startTime: 8545.71,
    person: 'Karol',
    text: ' There are also more specialists in the field of EDA that we could talk together about EDA.'
  },
  { startTime: 8553.07, person: 'Karol', text: " That's going to be probably interesting." },
  { startTime: 8554.71, person: 'Karol', text: ' So first occurrence, not the last one.' },
  {
    startTime: 8557.51,
    person: 'Karol',
    text: " So we'll see each other on the stream somewhere later."
  },
  { startTime: 8562.95, person: 'Karol', text: ' And yeah, thank you for watching.' },
  { startTime: 8565.09, person: 'Aaron', text: ' Thank you, everybody.' },
  {
    startTime: 8565.97,
    person: 'Karol',
    text: " Have a lovely afternoon, evening, night, whatever it is in your time zone where you're watching this."
  }
])
</script>

<style scoped></style>
