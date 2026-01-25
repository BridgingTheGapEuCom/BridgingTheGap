<template>
  <div class="w-full">
    <StreamLayout
      :transcript="transcript"
      name="Loosely Coupled - Interoperability in Micro-frontends"
      video-id="PBW9Ls-VCoY"
    />
  </div>
</template>

<script lang="ts" setup>
const transcript = ref([
  {
    startTime: 71.62,
    person: 'Karol',
    text: ' Good morning, good afternoon, and good evening, everybody, and welcome to another episode of Loosely Coupled by Bridging the Gap.'
  },
  {
    startTime: 78.48,
    person: 'Karol',
    text: " My name is Karol Skrzymowski, and I'll be your host tonight."
  },
  {
    startTime: 82.3,
    person: 'Karol',
    text: ' Hopefully, all of you have a lovely cup of something to drink for this session.'
  },
  {
    startTime: 88.68,
    person: 'Karol',
    text: " I don't know if you noticed, if you're coming back to the stream, maybe you have, but we actually have a jingle today."
  },
  {
    startTime: 95.44,
    person: 'Karol',
    text: " That's made by my co-researcher at Bridging the Gap, Filip Kostyra."
  },
  { startTime: 101.16, person: 'Karol', text: ' Thank you, Filip, for that.' },
  {
    startTime: 102.32,
    person: 'Karol',
    text: " It's a work in progress, but it's already pretty nice."
  },
  {
    startTime: 105.1,
    person: 'Karol',
    text: " Filip doesn't want to say that this is a ready thing."
  },
  {
    startTime: 107.98,
    person: 'Karol',
    text: " He said he'll work on it in January, so maybe there will be a different version, maybe a longer one."
  },
  { startTime: 114.4, person: 'Karol', text: " But that's not the topic for today." },
  {
    startTime: 116.34,
    person: 'Karol',
    text: ' This is actually the last stream this year, and here today, we have a lovely topic of interoperability, so actually something we do at Bridging the Gap, and today, a different angle.'
  },
  {
    startTime: 127.8,
    person: 'Karol',
    text: " We're going to be talking about interoperability in front-ends, and specifically micro front-ends."
  },
  {
    startTime: 133.1,
    person: 'Karol',
    text: ' Who better to talk about interoperability in micro front-ends than the author of the book Building Micro Front-ends, Luca Mezzalira.'
  },
  { startTime: 144.36, person: 'Karol', text: ' Luca, welcome to the show.' },
  { startTime: 145.82, person: 'Luca', text: ' Hi, everyone.' },
  { startTime: 146.78, person: 'Luca', text: ' Thank you for the invite, Karol.' },
  { startTime: 148.92, person: 'Karol', text: ' Happy to have you.' },
  {
    startTime: 150.76,
    person: 'Karol',
    text: " Luca, you've been at it for the last, what, 21 years?"
  },
  { startTime: 156.34, person: 'Luca', text: ' Yeah.' },
  { startTime: 156.82, person: 'Karol', text: ' Doing IT stuff, architecture, and whatnot?' },
  { startTime: 160.54, person: 'Luca', text: ' Yes, more or less, I think 24 in January.' },
  { startTime: 164.88, person: 'Karol', text: ' 24?' },
  { startTime: 165.88, person: 'Karol', text: ' Whoa, okay.' },
  { startTime: 167.12, person: 'Karol', text: ' 24 in January.' },
  { startTime: 168.32, person: 'Karol', text: ' Wow.' },
  {
    startTime: 168.78,
    person: 'Karol',
    text: " You wrote me in the bio since 2004, so I'm like, 21 years since I've been here."
  },
  { startTime: 174.4, person: 'Luca', text: ' No, I did also something before that.' },
  { startTime: 177.72, person: 'Luca', text: " Ah, so that's in architecture." },
  { startTime: 179.84, person: 'Luca', text: ' If we want to start on the very beginning, yes.' },
  {
    startTime: 183.4,
    person: 'Luca',
    text: ' 2004 was the first line of code, if you want, but I did also some stuff before that.'
  },
  { startTime: 189.86, person: 'Karol', text: ' Fair enough, fair enough.' },
  { startTime: 191.92, person: 'Karol', text: ' Luca, micro front-ends, how old is this topic?' },
  { startTime: 195.9, person: 'Karol', text: " Because you've been at it for a while already." },
  {
    startTime: 197.74,
    person: 'Luca',
    text: " Yeah, I'm ranting about micro front-ends for almost 10 years."
  },
  { startTime: 203.74, person: 'Luca', text: ' So next year, if I remember well, is in May.' },
  {
    startTime: 207.34,
    person: 'Luca',
    text: ' That will be the first decade of the term micro front-ends that was coined by ThoughtWorks.'
  },
  {
    startTime: 216.56,
    person: 'Luca',
    text: ' One of the developers in ThoughtWorks came up with this idea, Mr. Jackson, if I remember correctly.'
  },
  {
    startTime: 224.4,
    person: 'Luca',
    text: ' And then it was advertised inside the tech radar that they usually do twice per year.'
  },
  {
    startTime: 231.94,
    person: 'Luca',
    text: ' It was the first half of the year, if I remember correctly.'
  },
  {
    startTime: 235.82,
    person: 'Luca',
    text: ' Therefore, I started before this term was coined in 2015, thinking about micro front-ends and how I can apply the principle behind microservices in a way that makes sense for front-ends.'
  },
  {
    startTime: 250.36,
    person: 'Luca',
    text: ' And then suddenly in 2016, we started the development.'
  },
  {
    startTime: 255.42,
    person: 'Luca',
    text: ' It took me a good amount of time having the buy-in inside the company.'
  },
  {
    startTime: 261.36,
    person: 'Luca',
    text: ' Because as you can imagine, if you go to a CTO and you say, OK, we are going to do this in this architecture.'
  },
  {
    startTime: 267.44,
    person: 'Luca',
    text: ' And the question, how many companies are doing that?'
  },
  {
    startTime: 270.72,
    person: 'Luca',
    text: ' And the answer was probably one or two in the world.'
  },
  {
    startTime: 273.98,
    person: 'Luca',
    text: " It wasn't, let's say, the most sustainable things that you can say to a CTO."
  },
  { startTime: 278.66, person: 'Luca', text: ' So we need to prove that.' },
  {
    startTime: 280.62,
    person: 'Luca',
    text: ' So I had a team of a few engineers that work with me in order to create a POC that would show how we solve the challenges we were facing in our monolith.'
  },
  {
    startTime: 292.54,
    person: 'Luca',
    text: ' And that basically was the beginning of the story of micro front-ends.'
  },
  {
    startTime: 298.71,
    person: 'Karol',
    text: ' I mean, 2015 in Poland at that time, I think people barely heard about virtualisation.'
  },
  { startTime: 307.43, person: 'Karol', text: ' They started hearing.' },
  {
    startTime: 309.27,
    person: 'Karol',
    text: ' I remember going to a session with Microsoft somewhere in Warsaw.'
  },
  { startTime: 315.37, person: 'Karol', text: ' They were showing off their Hyper-V servers.' },
  {
    startTime: 319.65,
    person: 'Karol',
    text: ' That was the pinnacle of virtualisation back then.'
  },
  {
    startTime: 323.77,
    person: 'Karol',
    text: ' In T-Mobile, we were still running some servers on bare metal.'
  },
  {
    startTime: 330.39,
    person: 'Karol',
    text: ' But these were just huge monolithic servers in that sense.'
  },
  {
    startTime: 334.31,
    person: 'Karol',
    text: ' So we had like separate servers to have higher availability.'
  },
  { startTime: 337.75, person: 'Karol', text: " So that's quite a long run already." },
  { startTime: 340.69, person: 'Luca', text: ' Yes.' },
  { startTime: 341.63, person: 'Karol', text: ' Ten years.' },
  { startTime: 342.59, person: 'Karol', text: ' Yeah, you started early, basically.' },
  { startTime: 345.05, person: 'Luca', text: ' I started for a necessity.' },
  {
    startTime: 347.33,
    person: 'Luca',
    text: ' The problem that I had to solve back in the days was being part of a startup that turned out to be a unicorn based in London.'
  },
  {
    startTime: 356.63,
    person: 'Luca',
    text: ' And we moved from 50 people to 3,500 in something like a couple of years.'
  },
  {
    startTime: 362.07,
    person: 'Luca',
    text: ' Because the challenge was we worked with a lot of partners.'
  },
  { startTime: 367.55, person: 'Luca', text: ' The first iteration was working with partners.' },
  { startTime: 369.29, person: 'Luca', text: ' I was working for one of the partners.' },
  {
    startTime: 371.69,
    person: 'Luca',
    text: ' And I followed basically the integration with different tools that we were using.'
  },
  {
    startTime: 376.79,
    person: 'Luca',
    text: ' Because we were the company responsible for the front-end as well as the middleware that was aggregating all the data and generating also other data.'
  },
  {
    startTime: 386.07,
    person: 'Luca',
    text: " And then after that, after the first release, I've been asked if I would be interested to join this company that I was working for."
  },
  {
    startTime: 395.01,
    person: 'Luca',
    text: ' And the answer for me was like, yes, without any doubt.'
  },
  {
    startTime: 398.35,
    person: 'Luca',
    text: ' Because the idea was scaling the way how we were doing the first release of the software.'
  },
  {
    startTime: 405.61,
    person: 'Luca',
    text: ' But most importantly, revolutionised the way how people were consuming the sport.'
  },
  {
    startTime: 410.55,
    person: 'Luca',
    text: ' And at the time, Netflix was starting to boom properly.'
  },
  {
    startTime: 417.27,
    person: 'Luca',
    text: " And if you think about that, it was like a perfect storm where you have like sport that you don't have to explain to anyone what sport means."
  },
  {
    startTime: 426.35,
    person: 'Luca',
    text: ' And you have like streaming, on-demand streaming that was starting to grow.'
  },
  {
    startTime: 430.37,
    person: 'Luca',
    text: ' And I found myself in a situation where I was the second tech person hired in that company.'
  },
  {
    startTime: 435.51,
    person: 'Luca',
    text: ' And they told me, okay, now we need to internalise all the things that we have done with partners.'
  },
  {
    startTime: 439.73,
    person: 'Luca',
    text: ' So we need to create all the hiring process, all the architecture, all the team structure, all the engineering practises and so on.'
  },
  {
    startTime: 449.39,
    person: 'Luca',
    text: ' And I was basically the second person that had a lot of say on all these topics and looking holistically on the social technical system that we were building.'
  },
  {
    startTime: 459.03,
    person: 'Luca',
    text: ' And we started to introduce things way before certain things came out.'
  },
  {
    startTime: 463.35,
    person: 'Luca',
    text: ' Like the idea of team topologies, for instance, was something that the book came out in 2019.'
  },
  { startTime: 468.59, person: 'Luca', text: ' We were doing that in 2017 internally.' },
  { startTime: 471.97, person: 'Luca', text: " We didn't have a name." },
  {
    startTime: 473.03,
    person: 'Luca',
    text: " We were just, let's say, leveraging domain-driven design for splitting up, let's say, our application, find the boundaries and subdomains."
  },
  {
    startTime: 481.33,
    person: 'Luca',
    text: ' And then co-locating, because it was pre-pandemic, co-locating the people working on the same subdomain in the same hub.'
  },
  { startTime: 489.35, person: 'Luca', text: ' Because we have four different hubs.' },
  {
    startTime: 491.35,
    person: 'Luca',
    text: " There's one in Poland, in Katowice, one in Amsterdam, one in Leeds, and one in London."
  },
  {
    startTime: 498.13,
    person: 'Luca',
    text: ' And basically aggregated these subdomains in a way that the worst-case scenario, you solve the problem with a person that is like 10 feet from your desk and not on a one-hour difference or in another city or even in another country.'
  },
  {
    startTime: 512.73,
    person: 'Luca',
    text: ' So therefore, that idea accelerated basically the storming and forming of the teams.'
  },
  {
    startTime: 519.59,
    person: 'Luca',
    text: " And also, we know upfront that in order to solve the problem of, let's say, communication across different hubs, it was just working properly with the API contract first and having, let's say, strong governance around, I need to change an API, perfect, write an RFC and start working to that."
  },
  {
    startTime: 537.89,
    person: 'Luca',
    text: " So we started to create a lot of practises that I recognise nowadays that I'm in AWS, that many companies currently are still at the beginning of the journey that they did, let's say, almost 10 years ago."
  },
  {
    startTime: 551.61,
    person: 'Luca',
    text: " So it's very interesting because it seems that we were extremely futuristic to a certain extent."
  },
  {
    startTime: 558.27,
    person: 'Luca',
    text: " I'm pretty sure other companies have done what we have done at the time."
  },
  {
    startTime: 562.15,
    person: 'Luca',
    text: " But for many enterprises I'm dealing with right now, a lot of learnings that I have went through over the past decade are definitely helpful for them to, let's say, embrace this new world of modernised software, modernised architecture."
  },
  { startTime: 580.15, person: 'Karol', text: " Now, okay, that's a handful." },
  {
    startTime: 583.55,
    person: 'Karol',
    text: " I'm like sitting there, it's like the light bulbs switching on in my head."
  },
  {
    startTime: 587.85,
    person: 'Karol',
    text: " Okay, Conway's Law, team topologies, cognitive load, so many of those topics."
  },
  { startTime: 600.13, person: 'Karol', text: " There's so much to unpack here." },
  {
    startTime: 602.27,
    person: 'Karol',
    text: ' So basically you were at the forefront of developing new approaches in tech and then actually have practical experience when they already were named and went out with specific names.'
  },
  {
    startTime: 616.31,
    person: 'Karol',
    text: ' So you already have experience in dealing with that in practise.'
  },
  { startTime: 620.69, person: 'Luca', text: ' Yeah.' },
  { startTime: 620.97, person: 'Karol', text: " That's a rare thing." },
  {
    startTime: 622.27,
    person: 'Luca',
    text: " It was because it was, you know, the cool thing for me was I was, let's say, a person that loves to work in bleeding edge context, where things you don't know if they are going to work or not."
  },
  {
    startTime: 637.53,
    person: 'Luca',
    text: " Because we need to bear in mind that in 2015, when we launched the first release of the zone, there wasn't this idea of live sports streaming."
  },
  {
    startTime: 649.39,
    person: 'Luca',
    text: ' Many people were telling us there is no way you can succeed.'
  },
  { startTime: 652.97, person: 'Luca', text: ' No one did that before.' },
  { startTime: 654.47, person: 'Luca', text: ' There is the cable providers.' },
  {
    startTime: 656.09,
    person: 'Luca',
    text: ' That is the normal way how to consume sport back in the days from Sky and many others where the way how people were consuming, they were working perfectly fine.'
  },
  {
    startTime: 666.17,
    person: 'Luca',
    text: ' We believe that we can democratise even further sport and reduce the cost.'
  },
  {
    startTime: 671.95,
    person: 'Luca',
    text: ' And in fact, the first few years, the cost of our subscription was less than 10 euros per month.'
  },
  {
    startTime: 680.65,
    person: 'Luca',
    text: ' And you can consume everything that was available in your country.'
  },
  { startTime: 683.53, person: 'Luca', text: ' Obviously, we started with four countries.' },
  {
    startTime: 686.51,
    person: 'Luca',
    text: ' The first release was Japan and DAC, that basically is Germany, Austria and Switzerland.'
  },
  {
    startTime: 692.91,
    person: 'Luca',
    text: ' And in Japan, for instance, we acquired for 10 years exclusive rights for the J-League, that is the football or soccer for our friends in America.'
  },
  {
    startTime: 705.17,
    person: 'Luca',
    text: ' That leagues for what we put like the first one, second one and the third one.'
  },
  {
    startTime: 710.47,
    person: 'Luca',
    text: ' And after that, in 18 months, we became almost the only sport broadcaster.'
  },
  { startTime: 714.71, person: 'Luca', text: " The only thing we didn't have was sumo." },
  { startTime: 716.75, person: 'Luca', text: ' But we had everything else.' },
  {
    startTime: 718.01,
    person: 'Luca',
    text: " We brought, let's say, all the other sports from U.S., a lot of sports from Europe, the Champions League and all the other things."
  },
  { startTime: 726.55, person: 'Luca', text: ' So it became extremely popular in Japan.' },
  {
    startTime: 728.61,
    person: 'Luca',
    text: " And I remember when I was working there, because obviously I was used, let's say, more or less in every single launch, staying in the war rooms and seeing how the things were panning out from our first Datadog and the New Relic dashboards."
  },
  { startTime: 745.99, person: 'Luca', text: ' Quite fun.' },
  {
    startTime: 746.83,
    person: 'Luca',
    text: " But I've seen, let's say, the power of these things."
  },
  {
    startTime: 750.43,
    person: 'Luca',
    text: " If you were, let's say, walking through Shibuya, that was one of the key areas of Tokyo."
  },
  {
    startTime: 756.15,
    person: 'Luca',
    text: ' In the Shibuya station, the station was completely packed with our advertising.'
  },
  { startTime: 760.91, person: 'Luca', text: " You can see, let's say, our brand everywhere." },
  {
    startTime: 763.51,
    person: 'Luca',
    text: ' When we launched in Italy, in Milan, we have near the San Siro stadium, that is the AC Milan stadium.'
  },
  {
    startTime: 770.65,
    person: 'Luca',
    text: ' That was like, the stadium was called the Zone Stop.'
  },
  { startTime: 773.53, person: 'Luca', text: ' So it was like, we started to grow like crazy.' },
  {
    startTime: 778.79,
    person: 'Luca',
    text: ' And obviously the way how we were designing things and implementing things at the piece that we were doing everything was quite monumental.'
  },
  {
    startTime: 787.53,
    person: 'Luca',
    text: ' At the end of the day, after a couple of years, we reached like 550 techies across the tech department spreading for dev centres.'
  },
  { startTime: 799.54, person: 'Karol', text: " That's a lot." },
  {
    startTime: 801.24,
    person: 'Karol',
    text: " That's a lot of stuff in a very short period of time then."
  },
  {
    startTime: 806.94,
    person: 'Karol',
    text: ' So not only were you at the forefront of developing new approaches, you also had the organisational challenges of extremely fast growing company.'
  },
  {
    startTime: 820.76,
    person: 'Karol',
    text: ' Which I can imagine that was for some people, not all of them, but for some people that must have been extremely stressful to get through that.'
  },
  {
    startTime: 828.98,
    person: 'Karol',
    text: " The growing pains of a company growing that fast, this can be really great or can be really, really tragic for certain companies if they don't adapt and adopt in a very fast manner."
  },
  {
    startTime: 845.72,
    person: 'Luca',
    text: " I think our strength was, let's say, trying different things, analyse what we were doing and see where we were failing and adapt as soon as fast as possible."
  },
  {
    startTime: 859.1,
    person: 'Luca',
    text: " And I found myself having, let's say, every other week a brand new team of beginning contractors then replaced with internals to onboard these teams every other week, explaining the architecture, explaining what we were trying to do and all the other things."
  },
  {
    startTime: 873.98,
    person: 'Luca',
    text: " And that's why back in the days, because we had to support, the idea was supporting roughly 40 different targets on the front end."
  },
  {
    startTime: 882.88,
    person: 'Luca',
    text: ' So set-top boxes and living room devices or console, web, mobile.'
  },
  {
    startTime: 888.76,
    person: 'Luca',
    text: ' So if you start to put everything together across the world, you have devices that were as powerful as a Nokia phone back in the days that were set-top boxes.'
  },
  {
    startTime: 898.18,
    person: 'Luca',
    text: ' But the penetration of a set-top box or a smart TV is by far larger than the newest one.'
  },
  {
    startTime: 906.7,
    person: 'Luca',
    text: " Because if you think about how often we change the TV or set-top box, it's not happening very often."
  },
  {
    startTime: 913.08,
    person: 'Luca',
    text: " So there were devices that were quite obsolete technologically speaking, but in order to make them cheap, they didn't have an amazing chipset or crazy codec or whatever."
  },
  {
    startTime: 923.18,
    person: 'Luca',
    text: ' You need to adapt yourself in the way that the things that you want to, you need to develop.'
  },
  {
    startTime: 928.68,
    person: 'Luca',
    text: ' Therefore, also one of the ideas behind Micron Tenths was, that was also one of the key aspects, is trying to reduce and optimise the memory management in JavaScript.'
  },
  {
    startTime: 940.14,
    person: 'Luca',
    text: ' Not loading everything in one go like you could do with a single page application.'
  },
  {
    startTime: 945.2,
    person: 'Luca',
    text: ' And therefore, lazy loading, what is needed, when was needed.'
  },
  {
    startTime: 948.86,
    person: 'Luca',
    text: ' And I think we did a pretty good job overall on doing that.'
  },
  {
    startTime: 953.88,
    person: 'Luca',
    text: ' And that basically not only enabled the performance, but enables us to have teams that were working independently.'
  },
  {
    startTime: 959.52,
    person: 'Luca',
    text: ' Because now with the good segregation of concern and division about domains, we were capable to say, okay, so this team is responsible for this part and that team is responsible for that part.'
  },
  {
    startTime: 971.64,
    person: 'Luca',
    text: ' We had to iterate for more or less a year and a half to figure out the right split.'
  },
  {
    startTime: 977.4,
    person: 'Luca',
    text: ' And understanding and fixing all the different problems.'
  },
  {
    startTime: 980.82,
    person: 'Luca',
    text: " Because obviously, as you can imagine, because it was so novel, this approach, there wasn't documentation."
  },
  {
    startTime: 986.38,
    person: 'Luca',
    text: " There weren't, let's say, any book that could tell you, oh, this is the way you should do."
  },
  {
    startTime: 991.48,
    person: 'Luca',
    text: " Or someone that you can say, oh, let's call a consultant to help us to do this."
  },
  { startTime: 995.52, person: 'Luca', text: ' Completely.' },
  {
    startTime: 997.78,
    person: 'Luca',
    text: " So all the meetings that they organised with 10, 15 developers for trying to analyse the problem, trying to see the patterns we can apply, trying to see what fit, what didn't."
  },
  {
    startTime: 1011.68,
    person: 'Luca',
    text: " After, let's say, a couple of years when we started to launch on the web first, I thought that we were sitting in something extremely interesting."
  },
  {
    startTime: 1019.48,
    person: 'Luca',
    text: ' Because it was a journey of two years gathering feedback from different developers, from junior to senior and principal, etc.'
  },
  {
    startTime: 1028.2,
    person: 'Luca',
    text: ' And then I remember the first talk very vividly that I did in Dublin, where I went on purpose and the conference was not too big, but was big enough with hundreds of people.'
  },
  {
    startTime: 1039.839,
    person: 'Luca',
    text: ' They gave me like 35 minutes for delivering the talk.'
  },
  {
    startTime: 1043.26,
    person: 'Luca',
    text: ' And I spent roughly four hours answering questions after.'
  },
  {
    startTime: 1046.98,
    person: 'Luca',
    text: " It was like I couldn't have lunch because people literally assault me on asking, OK, how do you manage the design system?"
  },
  { startTime: 1057.46, person: 'Luca', text: ' How do you do this?' },
  { startTime: 1058.36, person: 'Luca', text: ' How do you do that?' },
  {
    startTime: 1059.32,
    person: 'Luca',
    text: ' And it was extremely funny on one side and extremely rewarding on the other side.'
  },
  {
    startTime: 1065.58,
    person: 'Luca',
    text: ' Because, you know, we work for something that probably no one has explored at that depth like we did.'
  },
  {
    startTime: 1073.46,
    person: 'Luca',
    text: ' And then suddenly there is an interest that is out, but all companies that were huge compared to what we were at back in the days.'
  },
  {
    startTime: 1080.28,
    person: 'Luca',
    text: ' And so for me, it was a great reward and great moment overall, despite there were other lows later on during the journey.'
  },
  { startTime: 1087.76, person: 'Luca', text: ' But, you know, here we are.' },
  {
    startTime: 1089.36,
    person: 'Luca',
    text: ' We have the same microphone that is used everywhere from all the enterprise, largest enterprise in the world probably are using some shape or form of microphone.'
  },
  {
    startTime: 1098.86,
    person: 'Karol',
    text: ' Well, now, luckily, we have people that actually specialise in microfrontends.'
  },
  { startTime: 1104.96, person: 'Karol', text: ' There is some reference to go with.' },
  {
    startTime: 1108.24,
    person: 'Karol',
    text: " So one of the reference here on screen, that's Lucas' book, Building Microfrontends, second edition."
  },
  { startTime: 1114.86, person: 'Karol', text: " That's very fresh, right?" },
  { startTime: 1116.22, person: 'Karol', text: ' That was this year?' },
  { startTime: 1118.36, person: 'Luca', text: ' Yes.' },
  { startTime: 1118.64, person: 'Luca', text: ' So it was released in early November 2025.' },
  {
    startTime: 1123.82,
    person: 'Luca',
    text: ' And the cool thing is that basically it was a complete rewrite.'
  },
  {
    startTime: 1132.62,
    person: 'Luca',
    text: ' I kept like half of the book and update every single chapter with the latest and greatest.'
  },
  {
    startTime: 1137.62,
    person: 'Luca',
    text: ' But then I basically gather all the feedback from the first edition where they were asking, can you share more code?'
  },
  { startTime: 1144.24, person: 'Luca', text: ' Can you do more of this?' },
  { startTime: 1145.62, person: 'Luca', text: ' Can you do more of that?' },
  {
    startTime: 1146.54,
    person: 'Luca',
    text: ' And then gathering the thing that shift basically the gear between the first and second edition is that I joined AWS right after I publish almost the first edition.'
  },
  { startTime: 1158.42, person: 'Luca', text: ' I was about to publish.' },
  {
    startTime: 1159.34,
    person: 'Luca',
    text: ' I wait a few months more for gathering more information.'
  },
  {
    startTime: 1162.44,
    person: 'Luca',
    text: ' But since then, basically the last five years in AWS, I work with hundreds of teams, internal teams from Amazon, AWS, etc.'
  },
  {
    startTime: 1168.74,
    person: 'Luca',
    text: ' And customers from Silicon Valley to New Zealand in different industries, finance, entertainment, retailers, etc., healthcare.'
  },
  {
    startTime: 1180.42,
    person: 'Luca',
    text: ' And we started to, I started to collect all the patterns that I was seeing and mistakes that were happening in the trenches.'
  },
  {
    startTime: 1188.66,
    person: 'Luca',
    text: " But I think that was, let's say, a great effort for the community because what I was thinking is, okay, let's validate what we wrote in the first edition."
  },
  {
    startTime: 1199.04,
    person: 'Luca',
    text: " And let's add other new approaches that were surfacing there and generating the vocabulary like I did in the first edition."
  },
  {
    startTime: 1206.76,
    person: 'Luca',
    text: ' Because the vocabulary, as you know, naming convention and ideas that you need to convey require a certain type of language.'
  },
  {
    startTime: 1214.06,
    person: 'Luca',
    text: " So for me, you know, now I'm working certain engagement with customers where they are talking the language that I created back in the days."
  },
  {
    startTime: 1222.22,
    person: 'Luca',
    text: " That is insane on one side, but it's extremely helpful because everyone is on the same page."
  },
  {
    startTime: 1227.86,
    person: 'Luca',
    text: " And that doesn't matter if they are in the UK, in the US or in New Zealand."
  },
  { startTime: 1235.7, person: 'Luca', text: ' We will talk exactly the same thing.' },
  { startTime: 1237.76, person: 'Luca', text: ' So we are on the same page.' },
  {
    startTime: 1238.9,
    person: 'Luca',
    text: ' We start to discuss what kind of challenges they have.'
  },
  { startTime: 1241.38, person: 'Luca', text: " It's a completely different way." },
  {
    startTime: 1243.28,
    person: 'Luca',
    text: ' And I have to say, one day I will document properly how to create a vocabulary for an architecture.'
  },
  {
    startTime: 1249.76,
    person: 'Luca',
    text: ' Because I realised that there is a lot of thought process behind that and why certain things were described and designed in a certain way.'
  },
  {
    startTime: 1257.82,
    person: 'Luca',
    text: ' And, you know, after 10 years, I have a lot of data points that I can say, okay, I can identify what are anti-patterns and what are patterns that you should embrace.'
  },
  {
    startTime: 1267.14,
    person: 'Luca',
    text: ' And how the influence of other architectures helped me to reach the maturity level that we have currently.'
  },
  { startTime: 1276.24, person: 'Karol', text: ' You said a word that triggers me into asking.' },
  {
    startTime: 1282.06,
    person: 'Karol',
    text: ' Because I did plenty of research in terms of patterns and anti-patterns.'
  },
  {
    startTime: 1287.8,
    person: 'Karol',
    text: ' When I was designing a course on integration architecture some time ago, I struggled with finding a decent definition of an anti-pattern.'
  },
  { startTime: 1297.84, person: 'Karol', text: " What's your definition of an anti-pattern?" },
  { startTime: 1300.3, person: 'Luca', text: " So it's the opposite of a pattern." },
  {
    startTime: 1304.44,
    person: 'Luca',
    text: ' What I would define is an approach that when taken, it will generate more friction than benefit for a company.'
  },
  {
    startTime: 1314.08,
    person: 'Luca',
    text: " It doesn't mean that it will always generate that friction, but it's likely to generate friction."
  },
  {
    startTime: 1321.6,
    person: 'Luca',
    text: ' There is this concept that I truly believe in where a pattern is a solution for a common problem.'
  },
  {
    startTime: 1330.08,
    person: 'Luca',
    text: ' But not always you want to embrace best practises or patterns or you want to embrace anti-patterns sometimes.'
  },
  {
    startTime: 1339.22,
    person: 'Luca',
    text: ' Because the reality is, and that is me becoming more mature and having more experience and more years under my belt.'
  },
  {
    startTime: 1347.82,
    person: 'Luca',
    text: ' The fact that in the past as a developer, you are dogmatic.'
  },
  { startTime: 1352.72, person: 'Luca', text: ' You say, okay, this is MVC.' },
  { startTime: 1354.36, person: 'Luca', text: ' You implement MVC by the book.' },
  { startTime: 1356.44, person: 'Luca', text: ' You implemented the pattern by the book.' },
  {
    startTime: 1358.26,
    person: 'Luca',
    text: " And if someone is trying to convince you that this is a bad way to implement a specific part, you say, oh, no, no, but you don't understand."
  },
  {
    startTime: 1365.54,
    person: 'Luca',
    text: ' Because in reality, this is a part that is documented here, the Gang of Four, so see it.'
  },
  {
    startTime: 1372.22,
    person: 'Luca',
    text: " And now instead, I'm more into the trade-off analysis like Neil Ford and Mark Richard recommends."
  },
  {
    startTime: 1379.54,
    person: 'Luca',
    text: " Okay, so let's try first to analyse what we need to express inside the system or inside the future."
  },
  {
    startTime: 1387.04,
    person: 'Luca',
    text: ' And then after that, when I have like the business capabilities crystal and clear in my head, I have the architecture characteristics.'
  },
  {
    startTime: 1394.64,
    person: 'Luca',
    text: " I hate non-functional requirements, so don't ask me to say that."
  },
  { startTime: 1398.8, person: 'Karol', text: ' I subscribe to that.' },
  {
    startTime: 1402.56,
    person: 'Luca',
    text: ' Architecture characteristics that I need to express inside the system because some of them I need to apply across the entire system.'
  },
  {
    startTime: 1408.66,
    person: 'Luca',
    text: ' Some of them I need to apply maybe in a specific domain, generic or core or supporting.'
  },
  {
    startTime: 1416.94,
    person: 'Luca',
    text: " And therefore, if you start to work in this way, you start to have, let's say, clarity of what you can and what you cannot do at least."
  },
  {
    startTime: 1424.86,
    person: 'Luca',
    text: " And then you can challenge, obviously, this specific implementation because maybe it's a snowflake or maybe you discover that it's not."
  },
  {
    startTime: 1434.34,
    person: 'Luca',
    text: " But unless you start to have, let's say, a conversation that you first understand these two layers, basically as business and what architecture would like to see."
  },
  {
    startTime: 1442.2,
    person: 'Luca',
    text: " For obvious reasons, sometimes you're working in regulated environment or industry."
  },
  {
    startTime: 1447.44,
    person: 'Luca',
    text: " Sometimes it's, let's say, something that is a decision made by the company or by the CTO for maintaining high availability."
  },
  {
    startTime: 1456.44,
    person: 'Luca',
    text: ' So these kind of things matters and affect your design.'
  },
  {
    startTime: 1459.94,
    person: 'Luca',
    text: ' And therefore, for me, when I have those, I can start to drill down into, okay, now that we know this and we know the specs, we know what we need to aim, we should for, okay, how we design this thing.'
  },
  {
    startTime: 1468.88,
    person: 'Luca',
    text: " This is one thing that I believe now we are losing because we are rushing towards the implementation phase due to time commitments that are not, let's say, managed by us."
  },
  {
    startTime: 1482.24,
    person: 'Luca',
    text: " But I believe that the architects that are still useful should enable teams to, let's say, reframe these things in a way that they will enable to quickly have this information, key business characteristics, key architecture characteristics in a digestible way."
  },
  {
    startTime: 1499.9,
    person: 'Luca',
    text: " And they can, let's say, incorporate in their design when time comes."
  },
  {
    startTime: 1505.46,
    person: 'Karol',
    text: " So for those not having the frame of reference for all the terms that Luca just used, which are the terms we've been using on this live stream for quite a while already, because I do subscribe to all the terms described by Mark Richards and Neil Ford."
  },
  {
    startTime: 1521.32,
    person: 'Karol',
    text: ' I absolutely love their rhetoric around building architecture and doing trade-off analysis.'
  },
  {
    startTime: 1526.9,
    person: 'Karol',
    text: " But while you were describing this, I took the liberty of grabbing some links from O'Reilly."
  },
  {
    startTime: 1533.6,
    person: 'Karol',
    text: ' So if you need a reference to all those lovely terms that Luca just mentioned, Head First Software Architecture is a great book to start with.'
  },
  {
    startTime: 1541.66,
    person: 'Karol',
    text: ' Very light read with exercises, with lots of fun for the brain.'
  },
  {
    startTime: 1546.1,
    person: 'Karol',
    text: ' And if you need more of a concrete read than Fundamentals of Software Architecture, the second edition was also published this year, earlier in the year, as far as I remember.'
  },
  { startTime: 1558.28, person: 'Karol', text: " O'Reilly says March 2025." },
  {
    startTime: 1561.3,
    person: 'Karol',
    text: ' So these are really great books to find all the definitions of the terms around architectural characteristics, doing trade-off analysis, looking at all the different factors that come into the design of your architecture so that it actually is fit for purpose rather than art.'
  },
  { startTime: 1580.12, person: 'Luca', text: ' Exactly.' },
  { startTime: 1581.56, person: 'Karol', text: " So that's the biggest value." },
  { startTime: 1584.42, person: 'Karol', text: ' Being dogmatic, I was dogmatic as well.' },
  { startTime: 1586.94, person: 'Karol', text: ' I used to have that approach a few years back.' },
  {
    startTime: 1590.46,
    person: 'Karol',
    text: " Learned the hard way that being dogmatic is not exactly the best approach because at a certain point with one of my clients, I actually looked at it and it's like, oh, this will completely not fit the case."
  },
  { startTime: 1605.74, person: 'Karol', text: " And I've been proposing that." },
  {
    startTime: 1607.02,
    person: 'Karol',
    text: " It's like, no, that's just going to be a huge failure."
  },
  {
    startTime: 1610.94,
    person: 'Karol',
    text: ' Luckily, realised on the design phase, not in implementation.'
  },
  {
    startTime: 1614.14,
    person: 'Karol',
    text: ' But basically, after that, I started looking more into trade-off analysis and actually analysing the context and spending more time in the problem space, analysing what the main problem is, and then diving into details of design and picking the right tools for the job.'
  },
  {
    startTime: 1632.94,
    person: 'Karol',
    text: ' And while your short answer for the anti-pattern, I was instantly like, oh, no.'
  },
  { startTime: 1640.82, person: 'Karol', text: ' And then you elaborated on that.' },
  { startTime: 1643.28, person: 'Karol', text: ' And I was like, oh, yes, exactly.' },
  { startTime: 1647.58, person: 'Karol', text: " I'm joking with Mark a bit." },
  {
    startTime: 1650.18,
    person: 'Karol',
    text: ' Mark actually introduced a third term to the mix.'
  },
  { startTime: 1656.08, person: 'Karol', text: ' Pattern, anti-pattern, and a pitfall.' },
  {
    startTime: 1657.96,
    person: 'Karol',
    text: ' So now we have pattern, which is a common solution for a common problem.'
  },
  {
    startTime: 1663.4,
    person: 'Karol',
    text: ' Anti-pattern, which is something that usually leads to problems when misused.'
  },
  { startTime: 1668.08, person: 'Karol', text: " But it's also a pattern." },
  {
    startTime: 1669.36,
    person: 'Karol',
    text: ' So it also solves some problems in a very specific context, niche context, usually.'
  },
  {
    startTime: 1675.08,
    person: 'Karol',
    text: ' And then pitfall is something that is definitely not wise to do.'
  },
  {
    startTime: 1680.98,
    person: 'Karol',
    text: " So that's their classification of different aspects."
  },
  { startTime: 1685.04, person: 'Karol', text: ' And that goes on all levels of abstraction.' },
  {
    startTime: 1686.96,
    person: 'Karol',
    text: ' There are patterns and anti-patterns everywhere.'
  },
  {
    startTime: 1690.08,
    person: 'Karol',
    text: ' I have my own specific integration patterns and anti-patterns and pitfalls.'
  },
  { startTime: 1694.94, person: 'Karol', text: ' Always a fun discussion.' },
  { startTime: 1697.32, person: 'Karol', text: ' But not today.' },
  {
    startTime: 1698.96,
    person: 'Karol',
    text: " So having all that amazing background, because that's been quite an interesting story."
  },
  { startTime: 1705.52, person: 'Karol', text: ' Maybe we should dive into those frontends.' },
  { startTime: 1708.84, person: 'Karol', text: ' So starting with what are micro frontends?' },
  {
    startTime: 1713.42,
    person: 'Karol',
    text: " Because that's the interesting definition then, after 10 years of working with them."
  },
  {
    startTime: 1718.12,
    person: 'Luca',
    text: ' Let me more than just sharing the core definition.'
  },
  {
    startTime: 1722.7,
    person: 'Luca',
    text: " Let's say walking through my reasoning when back in the days I started to think about that."
  },
  { startTime: 1728.54, person: 'Luca', text: ' So the idea was very simple.' },
  { startTime: 1731.98, person: 'Luca', text: ' On the backend, we knew exactly what to do.' },
  { startTime: 1734.58, person: 'Luca', text: ' So we knew that we needed a distributed system.' },
  {
    startTime: 1737.04,
    person: 'Luca',
    text: ' At the time, cell-based architecture was still fuzzy, very far, far away.'
  },
  { startTime: 1743.6, person: 'Luca', text: ' And we were just starting.' },
  {
    startTime: 1745.14,
    person: 'Luca',
    text: " It didn't make any sense using a cell-based architecture."
  },
  { startTime: 1748.18, person: 'Luca', text: ' But a microservice one definitely made sense.' },
  {
    startTime: 1752.42,
    person: 'Luca',
    text: ' Because we were moving from a monolith to this distributed system with a lot of engineers.'
  },
  {
    startTime: 1760.14,
    person: 'Luca',
    text: " So when I started to think about what characteristics should I apply on the frontend, the majority of the time and all the different implementations I've done in the past were in a monolithic space where literally you start with all the good intentions."
  },
  {
    startTime: 1774.54,
    person: 'Luca',
    text: ' You start to scale the teams, because usually you start with one team, start to build a small POC, then start to grow.'
  },
  {
    startTime: 1781.54,
    person: 'Luca',
    text: ' And slowly but steadily you have five teams, six teams, whatever.'
  },
  {
    startTime: 1784.72,
    person: 'Luca',
    text: ' When we were working on this specific project, we were roughly 40, 50 people end-to-end in my previous company.'
  },
  {
    startTime: 1793.12,
    person: 'Luca',
    text: ' And we were working with a monolith in the front and a monolith on the back.'
  },
  {
    startTime: 1797.28,
    person: 'Luca',
    text: " At some point, the problem we were facing is, A, and that's something I've seen in other companies when I was working as tech lead, A, we started to slow down with new features implementation, because now the code is larger and more complicated."
  },
  { startTime: 1815.44, person: 'Luca', text: ' People were stretched a lot.' },
  {
    startTime: 1818.08,
    person: 'Luca',
    text: " When you were on call, you needed to take care about, I don't know, sign-in, as well as payment, as well as catalogue, as well as any other part of the application."
  },
  {
    startTime: 1826.68,
    person: 'Luca',
    text: ' And you cannot squeeze everything inside your head.'
  },
  {
    startTime: 1829.56,
    person: 'Luca',
    text: ' So the cognitive load that we were discussing at the beginning.'
  },
  {
    startTime: 1832.36,
    person: 'Luca',
    text: " The other challenge is that because there were some features that were easy to implement, we couldn't deploy them quickly because we need to retest due to, let's say, issues that happen or bugs that were happening when we started to build stuff and deploy stuff."
  },
  {
    startTime: 1850.84,
    person: 'Luca',
    text: ' We were more careful on what we wanted to deploy.'
  },
  {
    startTime: 1854.48,
    person: 'Luca',
    text: ' So there were more tests, either automation or with manual QAs.'
  },
  {
    startTime: 1858.88,
    person: 'Luca',
    text: ' And so if you start to put everything together, you see that there is an inherited complexity when you reach a certain point, not on the code side that I would say in every company I work for, there are some times that you have spaghetti code.'
  },
  {
    startTime: 1875.26,
    person: 'Luca',
    text: " But majority of the time, you have, let's say, people that really care about their craft and they want to do the best, and that's why it takes longer, but also helps to optimise certain things that could be refactoring on performance and that stuff."
  },
  {
    startTime: 1888.26,
    person: 'Luca',
    text: ' But the problem we had is now we have a completely different ballpark.'
  },
  { startTime: 1891.46, person: 'Luca', text: ' We know up front that we are going to scale.' },
  {
    startTime: 1893.26,
    person: 'Luca',
    text: ' We know up front that we need some teams that are going to take into account different domains.'
  },
  {
    startTime: 1898.1,
    person: 'Luca',
    text: " Therefore, it was stupid for me starting with saying, let's use the same approach, because otherwise we arrive to a bottleneck where the back end starts to have microservices."
  },
  { startTime: 1906.98, person: 'Luca', text: ' The front end has a monolith.' },
  {
    startTime: 1908.74,
    person: 'Luca',
    text: ' They start to have bazillion of feature flags spread across the code base, and we are not going to have time for fixing that.'
  },
  {
    startTime: 1915.06,
    person: 'Luca',
    text: ' So we need to think about a different approach and looking into the characteristics of microservices.'
  },
  {
    startTime: 1921.16,
    person: 'Luca',
    text: ' So you know that there are defined units that have strong boundaries, not only on the code level, but also on the infrastructure level, and that is one key aspect of micro frontends.'
  },
  {
    startTime: 1932.82,
    person: 'Luca',
    text: ' Therefore, we need to have an artefact, in the case of microservices, was a container back in the days, or a VM, that is strong enough that I deploy this chunk independently from the rest.'
  },
  {
    startTime: 1945.3,
    person: 'Luca',
    text: " That is not only code that they build at compile time, but it's something that they do at run time in the case of the front end."
  },
  {
    startTime: 1953.04,
    person: 'Luca',
    text: ' So I load a chunk of the system, and I lazy load a chunk of JavaScript.'
  },
  { startTime: 1960.78, person: 'Luca', text: ' And that was the first assumption.' },
  {
    startTime: 1963.18,
    person: 'Luca',
    text: ' The second one is, I want to have the team independence.'
  },
  { startTime: 1967.48, person: 'Luca', text: ' Therefore, shareability, we need to be careful.' },
  {
    startTime: 1969.56,
    person: 'Luca',
    text: ' We need to rewrite the game where in front end, when you have three lines of code that repeats twice, immediately you create a library.'
  },
  {
    startTime: 1976.74,
    person: 'Luca',
    text: " And that is evil, because when you have, let's say, a lot of external dependency, we need to reduce them."
  },
  {
    startTime: 1982.54,
    person: 'Luca',
    text: " So we need to try to be extremely careful on what we want to, let's say, reuse, and how, and having a strong governance into that."
  },
  {
    startTime: 1991.86,
    person: 'Luca',
    text: ' And governance is not easy, because it involves people.'
  },
  {
    startTime: 1994.56,
    person: 'Luca',
    text: " And therefore, we were thinking of something that it didn't involve people, but maintain the boundaries of a team."
  },
  {
    startTime: 2000.34,
    person: 'Luca',
    text: " And the idea is, let's start with duplication, because definitely duplicating is far cheaper than the wrong abstraction."
  },
  { startTime: 2006.52, person: 'Luca', text: ' So, like Sandy Metz said several times.' },
  {
    startTime: 2011.02,
    person: 'Luca',
    text: ' And the idea is, okay, so if we start to do that, we need to be intentional what is available and shareable between teams.'
  },
  {
    startTime: 2018.3,
    person: 'Luca',
    text: ' And the other thing is, we need to create an artefact that makes my team independent.'
  },
  {
    startTime: 2023.02,
    person: 'Luca',
    text: " Because the reality is the distributed system is not designed only for technology, where, yes, you have, let's say, the possibility to, let's say, deploy something, there is a bug in an area, and only that chunk is affected, the rest of the application works perfectly, but it's mainly designed for your organisation, for your people."
  },
  {
    startTime: 2040.74,
    person: 'Luca',
    text: ' Therefore, when you are designing this, you need to think about, okay, so if I have a team that is responsible for the catalogue, I think about the catalogue of Netflix, where you have, like, a lot of rails with all the different shows and different things.'
  },
  {
    startTime: 2054.239,
    person: 'Luca',
    text: " Then you select one, you have the details, and when you're happy, you click play, and the video player starts."
  },
  {
    startTime: 2059.44,
    person: 'Luca',
    text: " Think about that, that could be a nicely encapsulated chunk of the system for an authenticated user that enables the people to, let's say, consume and can assign to the team because it's not too complex, it can be incorporated very well, and that basically, for me, was the first microphone that we built."
  },
  {
    startTime: 2078.92,
    person: 'Luca',
    text: ' But then suddenly, when we look into the video player, we saw a lot of complexity.'
  },
  {
    startTime: 2083.02,
    person: 'Luca',
    text: ' We had two teams only dedicated on video players, where these teams were responsible for creating the heuristics and tweaking the heuristics on existing video players.'
  },
  {
    startTime: 2091.42,
    person: 'Luca',
    text: ' For live content, it was completely different from on-demand, and every browser has its own codec, and therefore, we had to change the way how we were working.'
  },
  {
    startTime: 2100.94,
    person: 'Luca',
    text: ' So now we had a microphone tag that lives inside another one, so the catalogue basically was one microphone tag that was loaded, and the other one was a video player.'
  },
  {
    startTime: 2111.06,
    person: 'Luca',
    text: ' So in order to communicate, we need to think about how we are going to define this contract in an API contract first.'
  },
  {
    startTime: 2117.96,
    person: 'Luca',
    text: ' So you start to see a lot of similarities on microservices.'
  },
  {
    startTime: 2120.78,
    person: 'Luca',
    text: " What I'm describing basically is the application of the practises that we are used to doing in a distributed system into front-end that before, it didn't happen, and today, people are still struggling because you need to have the experience on the other side in order to understand what fits on this side."
  },
  {
    startTime: 2140.32,
    person: 'Luca',
    text: ' So you need to understand deeply both in order to see, okay, this practise, I can use it.'
  },
  {
    startTime: 2144.9,
    person: 'Luca',
    text: ' This one, it will never work because there is no constraint and no need on front-end to do certain things.'
  },
  {
    startTime: 2152.24,
    person: 'Luca',
    text: " And therefore, it's super fascinating for me that period of my life where I started to bring, let's say, patterns and mechanisms that were applying software engineering and see how I could shape them for front-end, if it makes sense."
  },
  {
    startTime: 2172.04,
    person: 'Karol',
    text: ' Unpacking that in my brain will take a moment, but basically, to put a little summary on top of this.'
  },
  {
    startTime: 2180.86,
    person: 'Karol',
    text: ' So the problem space is basically the difference between we do IT now and do IT 20 years ago is the scale and the speed, right?'
  },
  {
    startTime: 2190.88,
    person: 'Karol',
    text: ' So if you look at this, this is no longer a technical problem.'
  },
  { startTime: 2196.44, person: 'Karol', text: " It's a socio-technical problem." },
  { startTime: 2198.44, person: 'Karol', text: ' And this is not a problem of writing good code.' },
  {
    startTime: 2201.84,
    person: 'Karol',
    text: " It's a problem of writing good code in cohesion of responsibility and accountability for said code distributed among several teams."
  },
  {
    startTime: 2210.54,
    person: 'Karol',
    text: " So we're basically definitely hitting Conway's Law as a problem, right?"
  },
  {
    startTime: 2215.48,
    person: 'Karol',
    text: " So we need to design in a reverse Conway manoeuvre so that we change our organisation towards the functionalities that we're building, split in domains, subdomains, and pieces of code being microservices assigned specifically."
  },
  {
    startTime: 2229.96,
    person: 'Karol',
    text: ' So the distribution of that system is a socio-technical distribution rather than purely technical.'
  },
  {
    startTime: 2237.64,
    person: 'Karol',
    text: ' And of course, if we do it purely technical, yeah, we have a chunk of code.'
  },
  { startTime: 2241, person: 'Karol', text: " It's easier to change, easier to isolate." },
  {
    startTime: 2243.38,
    person: 'Karol',
    text: ' Only that part is, and the closest dependents are impacted by a bug.'
  },
  { startTime: 2248.74, person: 'Karol', text: ' Fine.' },
  {
    startTime: 2250,
    person: 'Karol',
    text: " But in a software lifecycle, that's a lot more to tackle in that sense."
  },
  { startTime: 2259.26, person: 'Karol', text: " Yeah, there's plenty more." },
  {
    startTime: 2262.28,
    person: 'Karol',
    text: ' If we were doing this on a monolith, then we would have not only the whole system impacted by a bug, we would have also plenty of other teams impacted by the same bug.'
  },
  {
    startTime: 2272.78,
    person: 'Karol',
    text: ' Where if we distribute that, we have less teams impacted, but that requires more organisational work and governance between those teams.'
  },
  {
    startTime: 2282.04,
    person: 'Karol',
    text: ' And this is also where coupling kicks in, in communication between modules, microservices, and communication between teams.'
  },
  {
    startTime: 2291.68,
    person: 'Karol',
    text: ' We have different types of coupling between them now.'
  },
  {
    startTime: 2295.02,
    person: 'Karol',
    text: " And now the question is, what's going on in that coupling?"
  },
  {
    startTime: 2300.04,
    person: 'Karol',
    text: " Because that's interoperability on two different scales, one being technical interoperability and the other one being the human-to-human interoperability."
  },
  {
    startTime: 2308.5,
    person: 'Karol',
    text: ' Because I just finished a course from Vlad Kolonov this Monday.'
  },
  {
    startTime: 2314.24,
    person: 'Karol',
    text: " The course was on Friday, but I watched the recording because I couldn't join."
  },
  {
    startTime: 2317.9,
    person: 'Karol',
    text: " I'll pop one interesting slide, if I can find it."
  },
  { startTime: 2324.12, person: 'Karol', text: ' I think this is, yeah, this is the one.' },
  { startTime: 2327.06, person: 'Karol', text: " I'll pop it on screen." },
  { startTime: 2329.3, person: 'Karol', text: ' There we go.' },
  { startTime: 2331.04, person: 'Karol', text: ' So I had quite some fun looking at this table.' },
  {
    startTime: 2336.16,
    person: 'Karol',
    text: ' Vlad describes three distinct axes of qualities of coupling, two of them being distance and knowledge.'
  },
  {
    startTime: 2346.26,
    person: 'Karol',
    text: ' And the interesting part in this is that I have never really considered looking, without looking at this table, is that low distance and low knowledge is actually something of a problem.'
  },
  { startTime: 2360.6, person: 'Karol', text: " It's problematic." },
  {
    startTime: 2361.66,
    person: 'Karol',
    text: " I think this is something that you probably did tackle in the early days of microfrontends as well, that you had low distance between the specific microfrontends, but the teams didn't understand and know what those specific microfrontends did, which created lots of extraneous cognitive load in trying to figure out what the hell is going on."
  },
  { startTime: 2385.64, person: 'Luca', text: ' Correct.' },
  {
    startTime: 2386.84,
    person: 'Karol',
    text: " And then, of course, if we look at it from my perspective of an integration architect, I'm usually in high distance, high knowledge being the problem, because that's the tight coupling between various domain systems, which is something you probably do not experience that much in microfrontends per se."
  },
  {
    startTime: 2406.4,
    person: 'Karol',
    text: " But if you communicate microfrontends with the rest of the ecosystem, that's probably something that also may happen at times."
  },
  { startTime: 2413.08, person: 'Luca', text: ' Yeah.' },
  {
    startTime: 2413.5,
    person: 'Luca',
    text: " The challenge I face multiple times is shifting the way how people were thinking about this, let's say, interoperability between microfrontends, because there is a different dimension when you think about that."
  },
  {
    startTime: 2426.64,
    person: 'Luca',
    text: ' You can have multiple microfrontends in the same view, and that basically means that at some point they need to communicate.'
  },
  {
    startTime: 2433.04,
    person: 'Luca',
    text: " 99% of the time, because since 2015, frontend was, let's say, working with the state management system, people were creating this thing called global state management that everyone can get access, write, read, whatever."
  },
  {
    startTime: 2448.72,
    person: 'Luca',
    text: " But it's more or less like having a single database for multiple microservices."
  },
  { startTime: 2453.84, person: 'Luca', text: ' What happens if I change the schema?' },
  {
    startTime: 2456.24,
    person: 'Luca',
    text: " Everything will have a ripple apart effect, and I need to retest everything, and I need to redeploy everything together, and it's going to be a colossal problem where people then point the finger towards, oh, microservices sucks."
  },
  { startTime: 2470.3, person: 'Luca', text: ' That is not true.' },
  { startTime: 2471.4, person: 'Luca', text: ' They are just a specific challenge.' },
  {
    startTime: 2475.34,
    person: 'Karol',
    text: " And that's also similar if you apply orchestration."
  },
  {
    startTime: 2479.32,
    person: 'Karol',
    text: " That's also a single point of tighter coupling in microservices in that sense, because the orchestrator needs to know a lot more about state."
  },
  {
    startTime: 2491.4,
    person: 'Karol',
    text: ' By the way, the next slide from this deck is this, which is basically showing what these lead to.'
  },
  {
    startTime: 2499.88,
    person: 'Karol',
    text: ' We have complexity and complexity, which is the things we tackle at different areas.'
  },
  { startTime: 2505.76, person: 'Karol', text: ' You tackle that in frontend.' },
  {
    startTime: 2506.98,
    person: 'Karol',
    text: ' I tackle that in system-to-system interoperability.'
  },
  {
    startTime: 2511.1,
    person: 'Karol',
    text: ' The anecdote here that Vlad shared over his course is that when he asked this over a conference where people would like to be, would they want to be in the green or the red zone or the orange zone, actually quite a number of people pointed that they would rather be in the orange zone.'
  },
  {
    startTime: 2530.42,
    person: 'Karol',
    text: " And we're going back to sociotechnical problems."
  },
  {
    startTime: 2534.02,
    person: 'Karol',
    text: " Job stability, job safety being the answer, why would they remain in the orange zone, which is interesting, because if they overcomplicate and make complexity, then they are secure for a job because nobody can figure out what's going on."
  },
  {
    startTime: 2548,
    person: 'Karol',
    text: " And that's not the aim of neither proper integration architecture nor building microfrontends in that sense, because we want these things to be, let's say, somewhat simpler so that we actually can figure out what's going on and not have that additional cognitive load that makes us just horrendously tired over figuring out what's going on in our systems, right?"
  },
  {
    startTime: 2572.14,
    person: 'Karol',
    text: ' So looking at microservices, okay, microservices being, sorry, microfrontends being a specific, very specific specialised version of microservices that expose frontends.'
  },
  { startTime: 2584.42, person: 'Karol', text: ' They expose frontends in various ways.' },
  { startTime: 2586.38, person: 'Karol', text: " We'll probably dig into that in a minute." },
  {
    startTime: 2590.54,
    person: 'Karol',
    text: ' Now, if you could outline, what are the key differences of microfrontends to the traditional approach to frontends, the monolithic approach?'
  },
  { startTime: 2600.28, person: 'Luca', text: " You can share the screen that I'm sharing." },
  {
    startTime: 2604.74,
    person: 'Luca',
    text: ' I can show you and walk you through something concrete.'
  },
  { startTime: 2607.54, person: 'Luca', text: ' Yeah, perfect.' },
  { startTime: 2607.88, person: 'Karol', text: " Let's do this, of course." },
  { startTime: 2610.1, person: 'Luca', text: ' Okay, this one is an example.' },
  { startTime: 2612.94, person: 'Luca', text: ' I imagine that this is an e-commerce.' },
  {
    startTime: 2614.26,
    person: 'Luca',
    text: " I'm not a designer, so don't expect great things from this e-commerce."
  },
  { startTime: 2617.96, person: 'Luca', text: " I'm sorry about that, but I prefer to code." },
  { startTime: 2621.92, person: 'Luca', text: ' But the idea is very simple.' },
  {
    startTime: 2623.9,
    person: 'Luca',
    text: ' So usually microfrontends, in some shape or form, you have what is called an application shell.'
  },
  { startTime: 2629.32, person: 'Luca', text: ' This is as simple as a container.' },
  {
    startTime: 2631.66,
    person: 'Luca',
    text: ' So if you type www.mysite.com, first thing that you are going to have as responses is an application shell.'
  },
  {
    startTime: 2639.58,
    person: 'Luca',
    text: ' That generates something that lives for the entire user session.'
  },
  {
    startTime: 2643.66,
    person: 'Luca',
    text: ' So it would be there for the entire time and takes care about common things that you need to do with microfrontends.'
  },
  { startTime: 2649.34, person: 'Luca', text: ' So routing, composing microfrontends.' },
  {
    startTime: 2653.12,
    person: 'Luca',
    text: " It takes care about retrieving the first, let's say, configuration that is read-only for microfrontends."
  },
  { startTime: 2659.94, person: 'Luca', text: " That's another thing that's important." },
  { startTime: 2661.38, person: 'Luca', text: ' So you cannot tamper it.' },
  {
    startTime: 2662.96,
    person: 'Luca',
    text: ' There are techniques in JavaScript, like if you use object.freeze as a method, basically makes that object readable, but not writable.'
  },
  { startTime: 2672.76, person: 'Luca', text: " And that's one technique that you can use." },
  {
    startTime: 2674.6,
    person: 'Luca',
    text: ' I used it for almost 20 years when I was working on this stuff.'
  },
  {
    startTime: 2679.36,
    person: 'Luca',
    text: " And it's a good technique for saying, OK, I have this object."
  },
  { startTime: 2682.44, person: 'Luca', text: ' I created and manipulated it in a certain way.' },
  { startTime: 2685.32, person: 'Luca', text: ' You bound to the contract.' },
  {
    startTime: 2686.5,
    person: 'Luca',
    text: ' You cannot change the contract, because in JavaScript, that is dynamic language.'
  },
  {
    startTime: 2689.94,
    person: 'Luca',
    text: ' You can change whatever you want in the way that you want.'
  },
  {
    startTime: 2692.24,
    person: 'Luca',
    text: " And that's why you have often errors that are bubbling up here and there."
  },
  {
    startTime: 2696.12,
    person: 'Luca',
    text: " And then in this part, usually what you want to have, it's the most stable part of the application that change context by context."
  },
  { startTime: 2704.74, person: 'Luca', text: " I'll give you an example." },
  {
    startTime: 2705.56,
    person: 'Luca',
    text: ' This header, for instance, is as a navigation with another.'
  },
  { startTime: 2709.54, person: 'Luca', text: " And that doesn't change in this example." },
  {
    startTime: 2711.9,
    person: 'Luca',
    text: ' There are companies instead that requires to have a team dedicated to a header because of the size of the complexity of that specific header when they work globally.'
  },
  {
    startTime: 2723.78,
    person: 'Luca',
    text: ' Think about the large e-commerce that they use to buy stuff.'
  },
  {
    startTime: 2729.42,
    person: 'Luca',
    text: ' And that is so complex because different services in different countries with different languages, all the permutation is making that very, very complicated.'
  },
  { startTime: 2738.46, person: 'Luca', text: ' So that could be a microphone tent.' },
  {
    startTime: 2740.3,
    person: 'Luca',
    text: " But the reality, majority of the time, 99% of the time, I would say it's not one of them."
  },
  { startTime: 2745.92, person: 'Luca', text: " It's the simple components, OK?" },
  {
    startTime: 2747.96,
    person: 'Luca',
    text: " So it's just an element that you want to have, reuse, have the same look and feel, because components compared to microphone tents, one is microphone tents, as we said before, they are aiming for independence between teams."
  },
  { startTime: 2760.7, person: 'Luca', text: ' The other one is aiming for reusability.' },
  {
    startTime: 2763.28,
    person: 'Luca',
    text: ' And as Neil Ford says, reusability is a form of coupling.'
  },
  {
    startTime: 2766.84,
    person: 'Luca',
    text: " Therefore, we don't want to have components, but we want to have distinction between these two elements."
  },
  {
    startTime: 2772.7,
    person: 'Luca',
    text: " So this one is basically baked into, it's a component baked into the application shell."
  },
  {
    startTime: 2777,
    person: 'Luca',
    text: " At that point, when I'm basically going to these localhost 2000, I'm loading the first microphone tent, this home page."
  },
  {
    startTime: 2785.64,
    person: 'Luca',
    text: " As you can see here, I also, let's say, highlighted, which is the version of the microphone tent, this is React 17, because I want to show you one thing in a second."
  },
  { startTime: 2793.36, person: 'Luca', text: ' This one is composed by a bunch of things.' },
  { startTime: 2795.58, person: 'Luca', text: ' Marketing hero, banner, bunch of products.' },
  { startTime: 2800.5, person: 'Luca', text: ' When I select one product, click the product.' },
  { startTime: 2803.94, person: 'Luca', text: ' At this stage, for you, it was instantaneous.' },
  {
    startTime: 2806.4,
    person: 'Luca',
    text: " You didn't feel it, not because it's localhost, it would be instantaneous also on the web."
  },
  {
    startTime: 2810.34,
    person: 'Luca',
    text: ' What happens is basically loading a new microphone tent and possibly sharing certain dependencies.'
  },
  { startTime: 2818.18, person: 'Luca', text: ' That is completely transparent for you.' },
  {
    startTime: 2820.88,
    person: 'Luca',
    text: ' There are frameworks that enables you to download a React version once and reuse across all the microphone tents or only the microphone tents that acquire that version.'
  },
  {
    startTime: 2829.72,
    person: 'Luca',
    text: ' In this case, we have React 18, so we downloaded a new version of microphone tents, but they are living exactly in the same application.'
  },
  {
    startTime: 2837.42,
    person: 'Luca',
    text: " For you, the look and feel looks the same because you're using the same design system."
  },
  {
    startTime: 2841.38,
    person: 'Luca',
    text: ' You have exactly the same thing that you have in the past.'
  },
  {
    startTime: 2843.86,
    person: 'Luca',
    text: " But the cool thing is that here we have two levels of, let's say, navigation."
  },
  {
    startTime: 2849.24,
    person: 'Luca',
    text: " The first one is between first level URL, as it's called, so hard navigation between home to catalogue."
  },
  {
    startTime: 2855.22,
    person: 'Luca',
    text: ' We are changing domain, so therefore we are loading a new microphone tent.'
  },
  {
    startTime: 2860.82,
    person: 'Luca',
    text: ' Inside the catalogue, the team responsible for that will be responsible for having the full view of the product that are available and the specific view on a specific product.'
  },
  {
    startTime: 2873.5,
    person: 'Luca',
    text: ' It could be that they have also the review that is owned by a different, if you are a large team, you can have the customer reviews that are coming from a different team.'
  },
  { startTime: 2881.72, person: 'Luca', text: ' Therefore, it could be microphone tents.' },
  {
    startTime: 2883.36,
    person: 'Luca',
    text: " If you have a simple e-commerce, it's more than enough having a component."
  },
  {
    startTime: 2887.24,
    person: 'Luca',
    text: " Those are just components that you can reuse in multiple parts of your system, but it's reused inside the same team, the same, let's say, area of the application."
  },
  {
    startTime: 2898.72,
    person: 'Luca',
    text: ' That, I believe, is one of the power of these things.'
  },
  { startTime: 2902.26, person: 'Luca', text: ' I can evolve this stuff in the way that I want.' },
  {
    startTime: 2905.6,
    person: 'Luca',
    text: ' I can drill down and expand the capabilities of my catalogue, adding more second, third, fourth layer of URL, and drilling down with a complex routing mechanism while the application shell takes care about the global navigation, that is basically the first level URL.'
  },
  {
    startTime: 2926.1,
    person: 'Luca',
    text: " Now, when I move, for instance, in my accounts now, the cool thing is that I have React 17 and React 18 that are already loaded because I loaded them before, but they can't even live together."
  },
  {
    startTime: 2937.76,
    person: 'Luca',
    text: ' This is a classic example when you are migrating or when you are working with different teams.'
  },
  {
    startTime: 2942.18,
    person: 'Luca',
    text: " In a distributed system, the coordination is the part that you suffer the most between teams because it's very difficult that you can say, okay, so now stop everything."
  },
  {
    startTime: 2951.38,
    person: 'Luca',
    text: " Don't deliver that feature because we need to update a version of React, Angular, whatever."
  },
  {
    startTime: 2955.78,
    person: 'Luca',
    text: " Therefore, what you can do, though, is isolating, doing scope creep with multiple approaches, but this one is the one that I choose for this application and say, okay, these both will work together because they are not sharing specific data, but just, let's say, an object that is read-only and is vanilla JavaScript."
  },
  { startTime: 2978.94, person: 'Luca', text: " It doesn't matter the framework." },
  {
    startTime: 2980.46,
    person: 'Luca',
    text: ' Now, if I want to communicate between the two microcontents, like in this case, when I click make default, you have this toast element that is at the bottom.'
  },
  {
    startTime: 2988.76,
    person: 'Luca',
    text: " This is a component that is living inside the application shell because it's generic."
  },
  { startTime: 2993.48, person: 'Luca', text: " It doesn't have to be lazy load." },
  {
    startTime: 2995.7,
    person: 'Luca',
    text: ' It has to be there because multiple elements can use this.'
  },
  {
    startTime: 2999.76,
    person: 'Luca',
    text: " The thing that happens is what would you do in a microservice application if you want to, let's say, avoid point-to-point communication?"
  },
  {
    startTime: 3007.63,
    person: 'Luca',
    text: ' You start to think about having a PubSub because a PubSub enables you to publish an event and one or multiple subscriber will react to that.'
  },
  { startTime: 3018.27, person: 'Luca', text: ' Same thing with microcontents.' },
  {
    startTime: 3019.65,
    person: 'Luca',
    text: " Instead of having, let's say, a global state that maintains the state for everyone and where everyone can write and change potentially certain things, you just send an event that has a body."
  },
  {
    startTime: 3035.29,
    person: 'Luca',
    text: " If you think we are getting closer to a certain extent of messaging architecture, you start to look into that part there, where in JavaScript it becomes extremely simple because now I have this element that is easy to test because I know that these, let's say, subscribe to certain events, so I can generate these events and see how it behaves."
  },
  {
    startTime: 3055.09,
    person: 'Luca',
    text: ' As long as when I push for production, the other microcontents are doing the same thing, then suddenly everything will start to work very nicely because everything is independent in the testing phase, in the design phase.'
  },
  {
    startTime: 3066.85,
    person: 'Luca',
    text: ' There is a little bit of coordination, obviously, because maybe there is a new design system that changed, some breaking changes, whatever it is, and they require these things.'
  },
  { startTime: 3075.51, person: 'Luca', text: ' But if you start to think about the effort' },
  { startTime: 3077.87, person: 'Luca', text: ' where you design carefully' },
  { startTime: 3079.45, person: 'Luca', text: ' what are the touching points for the company' },
  { startTime: 3082.15, person: 'Luca', text: ' and when there are touching points,' },
  { startTime: 3083.47, person: 'Luca', text: ' you create mechanisms, request for comments,' },
  {
    startTime: 3086.25,
    person: 'Luca',
    text: ' architecture decision record, events that are typed'
  },
  { startTime: 3090.23, person: 'Luca', text: ' and are capable to be shared across the system,' },
  { startTime: 3092.93, person: 'Luca', text: ' you start to see that this area of design,' },
  { startTime: 3096.09, person: 'Luca', text: ' the social technical system,' },
  { startTime: 3099.41, person: 'Luca', text: ' generates a very simple architecture' },
  {
    startTime: 3101.73,
    person: 'Luca',
    text: " because now if I'm responsible for payments as a team,"
  },
  { startTime: 3104.79, person: 'Luca', text: ' I will be responsible for the API of payments,' },
  { startTime: 3107.29, person: 'Luca', text: ' I will be responsible for the integration,' },
  { startTime: 3109.65, person: 'Luca', text: " probably when I'm subscribing" },
  { startTime: 3111.09, person: 'Luca', text: ' or the checkout phase for payment,' },
  { startTime: 3113.59, person: 'Luca', text: ' I will be responsible for this view' },
  { startTime: 3115.15, person: 'Luca', text: ' that basically enables me to change the thing.' },
  {
    startTime: 3117.51,
    person: 'Luca',
    text: " So now my team responsible for payments, we know inside out that domain, we'll be domain expert with that, they can contribute with the products people to create a better user experience and a better UI with the designer."
  },
  {
    startTime: 3131.83,
    person: 'Luca',
    text: " And moreover, they can take the right decision for the job where very often we try to operate in economy of scale because we don't have enough bandwidth or people to cover the extent of a specific complex system."
  },
  {
    startTime: 3146.43,
    person: 'Luca',
    text: " Now, if we start to look into this approach, now you see that your role as architect or platform engineering, et cetera, is supporting all these teams in a way with, let's say, common practises that will enable them to work together closely, but without being coupled."
  },
  {
    startTime: 3166.07,
    person: 'Luca',
    text: " Because if sending an event is easy to test, as long as everyone respects that event, I don't have to coordinate with others."
  },
  {
    startTime: 3171.73,
    person: 'Luca',
    text: ' If I need to add a new microphone tent because there is complexity arise or a new domain that we need to squeeze inside this view, but then become easy because if I know what are the events that are bubbling around this view and the events that are available in the application shell, I just add new stuff.'
  },
  {
    startTime: 3187.31,
    person: 'Luca',
    text: ' Even if I add the new events, I can add the new events, start to send it.'
  },
  { startTime: 3193.31, person: 'Luca', text: ' The worst case scenario is no one is listening.' },
  {
    startTime: 3195.33,
    person: 'Luca',
    text: ' There is no error happening inside the JavaScript.'
  },
  { startTime: 3198.87, person: 'Luca', text: " It won't block your application at all." },
  {
    startTime: 3201.75,
    person: 'Luca',
    text: " And you can also have a lot of nice logic on, okay, I'm interested in that event."
  },
  {
    startTime: 3206.11,
    person: 'Luca',
    text: ' And then you can start to have, okay, can I have also this information with this other team?'
  },
  {
    startTime: 3210.21,
    person: 'Luca',
    text: ' So you create a request for comment, you express what you need to have, and the other team can validate your request.'
  },
  {
    startTime: 3215.55,
    person: 'Luca',
    text: ' And you see that now we start to look into holistically on the system.'
  },
  {
    startTime: 3219.83,
    person: 'Luca',
    text: " It's not anymore I implement React and I use this stuff."
  },
  {
    startTime: 3223.33,
    person: 'Luca',
    text: ' Now we want to encapsulate, and the terms encapsulation includes data and methods.'
  },
  { startTime: 3228.51, person: 'Luca', text: " It's not just UI." },
  {
    startTime: 3230.93,
    person: 'Luca',
    text: ' So if you start to think about that, my payment methods is encapsulating all the knowledge about payment of that specific user.'
  },
  { startTime: 3238.41, person: 'Luca', text: ' In this case, there is no leaks.' },
  {
    startTime: 3240.75,
    person: 'Luca',
    text: ' And if it needs to communicate on something that happens, can communicate passing the title and the description of what happened with this specific action.'
  },
  {
    startTime: 3249.77,
    person: 'Luca',
    text: " But the action itself can be reused by other place because you design in a way that is agnostic from the domain because it's living inside application shell."
  },
  {
    startTime: 3258.85,
    person: 'Luca',
    text: " A lot of these thoughts that I described, that I'm showing you here, are basically the process that enables you to create independent teams that reduce the extent of dependency, don't eliminate the extent of dependencies, but just reduce them."
  },
  {
    startTime: 3274.41,
    person: 'Luca',
    text: ' And they have more control and power on making change without interfering with other massive release that could happen.'
  },
  {
    startTime: 3281.77,
    person: 'Luca',
    text: " Then in my experience, once or twice a year, sometimes four times, of course, if you have a very fast pace place, you are required to have something that's spanning across a new feature that's spanning across multiple domains."
  },
  {
    startTime: 3294.29,
    person: 'Luca',
    text: ' So in this situation like that, there is the requirement of coordinating multiple teams, trying to understand how these things will pan out in terms of contracts.'
  },
  {
    startTime: 3305.57,
    person: 'Luca',
    text: ' And in this case, what kind of teams will be affected into that.'
  },
  { startTime: 3310.53, person: 'Luca', text: ' I was in that scenario very often.' },
  {
    startTime: 3312.11,
    person: 'Luca',
    text: " But if you play very well your role as, I don't know, staff engineer or group of the virtual team that is working on the design or architects, whatever is available inside your company, then you start to see some interesting pattern that if you design properly that chunk, the implementation will become a breeze because it will be part of the patterns that you have already created."
  },
  {
    startTime: 3334.35,
    person: 'Luca',
    text: ' And if you have a new pattern to integrate, you will have the possibility to test with a chunk of the system without affecting all the rest.'
  },
  {
    startTime: 3342.25,
    person: 'Luca',
    text: ' So the complexity is there because you need to think holistically on the system.'
  },
  {
    startTime: 3348.63,
    person: 'Luca',
    text: " But at the same time, the reward is there as well because I have, let's say, my previous company, what I was working for, for this company called The Zone, a staff engineer that I met last year told me it's eight years that we are working with this architecture."
  },
  { startTime: 3360.29, person: 'Luca', text: ' It never went through our way.' },
  {
    startTime: 3362.65,
    person: 'Luca',
    text: " We were able to, let's say, change the things accordingly for what the business wanted because of your principles and, let's say, design that enables us to be flexible where it was needed to be flexible and then force boundaries and generate friction where it was needed."
  },
  {
    startTime: 3379.31,
    person: 'Luca',
    text: ' And I think that was the testimony that design is still an extremely important part of software.'
  },
  { startTime: 3386.25, person: 'Karol', text: ' Okay, Luca,' },
  { startTime: 3386.85, person: 'Karol', text: ' so to recap a little bit here,' },
  { startTime: 3390.25, person: 'Karol', text: ' so the approach is' },
  { startTime: 3393.05, person: 'Karol', text: ' as if with a microservice system,' },
  { startTime: 3395.89, person: 'Karol', text: ' any microservice system,' },
  { startTime: 3397.17, person: 'Karol', text: " we're looking at having high cohesion" },
  { startTime: 3399.71, person: 'Karol', text: ' within a microservice' },
  { startTime: 3402.33, person: 'Karol', text: ' or a group of microservices' },
  { startTime: 3403.67, person: 'Karol', text: ' that are bound to a specific domain' },
  { startTime: 3406.11, person: 'Karol', text: ' or subdomain,' },
  { startTime: 3407.49, person: 'Karol', text: ' however you want to name it' },
  { startTime: 3408.71, person: 'Karol', text: ' using domain-driven design' },
  { startTime: 3410.03, person: 'Karol', text: ' or just plain language,' },
  { startTime: 3412.43, person: 'Karol', text: ' so that within that cohesion,' },
  { startTime: 3415.89, person: 'Karol', text: ' you have a full understanding' },
  { startTime: 3417.51, person: 'Karol', text: ' of the problem space' },
  { startTime: 3418.63, person: 'Karol', text: ' like payments or like catalogue' },
  { startTime: 3420.61, person: 'Karol', text: ' or like if needed,' },
  { startTime: 3422.27, person: 'Karol', text: ' the top bar of the website.' },
  { startTime: 3424.39, person: 'Karol', text: " And that's the high cohesion." },
  { startTime: 3427.89, person: 'Karol', text: ' And then looking at the distance' },
  { startTime: 3430.01, person: 'Karol', text: ' between different domains,' },
  { startTime: 3431.57, person: 'Karol', text: ' so either groups of microservices' },
  { startTime: 3433.51, person: 'Karol', text: ' or a singular microservice' },
  { startTime: 3435.01, person: 'Karol', text: ' and the teams governing them,' },
  { startTime: 3437.29, person: 'Karol', text: ' then we have a higher distance' },
  { startTime: 3438.87, person: 'Karol', text: ' between those two,' },
  { startTime: 3439.89, person: 'Karol', text: " so we don't need that shared knowledge" },
  { startTime: 3441.91, person: 'Karol', text: ' as long as we describe the contracts well,' },
  { startTime: 3445.29, person: 'Karol', text: ' whatever those contracts may be,' },
  { startTime: 3447.49, person: 'Karol', text: ' here being like with microservices,' },
  { startTime: 3450.83, person: 'Karol', text: ' either API calls or events,' },
  { startTime: 3455.35, person: 'Karol', text: ' if we do PubSub event-driven architecture' },
  { startTime: 3459.23, person: 'Karol', text: ' exactly like with a microservice system' },
  { startTime: 3461.61, person: 'Karol', text: " because it's very nice" },
  { startTime: 3463.17, person: 'Karol', text: ' to combine microservice systems' },
  { startTime: 3464.71, person: 'Karol', text: ' with event-driven architecture.' },
  {
    startTime: 3467.05,
    person: 'Karol',
    text: " That's a very common thing that happens architecturally."
  },
  {
    startTime: 3471.53,
    person: 'Karol',
    text: " I'm curious because I've never been a front-end guy."
  },
  {
    startTime: 3476.33,
    person: 'Karol',
    text: " I mean, I do write a little bit of HTML, but that's the extent of my front-end knowledge because I mostly write it for all sorts of plugins that I do in my Google workspace."
  },
  { startTime: 3486.09, person: 'Karol', text: ' So front-end is completely not my thing.' },
  {
    startTime: 3488.23,
    person: 'Karol',
    text: " I'm more of a, well, middleware engineer, not even a back-end engineer in that sense."
  },
  {
    startTime: 3493.71,
    person: 'Karol',
    text: ' So I only utilise front-ends rather than build them.'
  },
  {
    startTime: 3498.31,
    person: 'Karol',
    text: " I'm curious, could we dismantle this in a diagram to show lines and boxes and where does that communication and what type of communication does happen here?"
  },
  {
    startTime: 3513.09,
    person: 'Karol',
    text: " If you even take the example of Fred's Tales, which is this demo site that you have, perhaps we can use that and you can then reiterate on this using some diagrams."
  },
  { startTime: 3531.01, person: 'Karol', text: ' Would that be a good idea right now?' },
  { startTime: 3532.89, person: 'Karol', text: " Yeah, that's fine." },
  {
    startTime: 3534.35,
    person: 'Luca',
    text: ' Do you share the screen or should I share the screen?'
  },
  { startTime: 3535.93, person: 'Karol', text: " Yes, I'll pop in." },
  {
    startTime: 3537.85,
    person: 'Karol',
    text: " So if any of you watching, we're currently live on Miro."
  },
  {
    startTime: 3542.29,
    person: 'Karol',
    text: " I'll post the, I'll copy the board link and put this in chat on YouTube."
  },
  { startTime: 3551.69, person: 'Karol', text: ' There we go.' },
  {
    startTime: 3552.71,
    person: 'Karol',
    text: " And also we'll do this on LinkedIn if you want to follow us on the board."
  },
  { startTime: 3560.29, person: 'Karol', text: " Otherwise, I'll just follow Luca." },
  { startTime: 3564.56, person: 'Luca', text: " Yeah, so let's try to, let's try, oops." },
  { startTime: 3576.08, person: 'Karol', text: ' Diagramming in Miro, yes.' },
  { startTime: 3578.58, person: 'Luca', text: ' Yes, exactly.' },
  { startTime: 3579.76, person: 'Luca', text: " So let's try to do one thing." },
  { startTime: 3583.2, person: 'Luca', text: ' So this one was user details.' },
  {
    startTime: 3590.93,
    person: 'Luca',
    text: ' Let me increase a bit because otherwise everyone will hate me and we are near Christmas.'
  },
  { startTime: 3596.63, person: 'Luca', text: ' So at least we can say that we did good.' },
  { startTime: 3601.43, person: 'Luca', text: ' And this one was payment.' },
  {
    startTime: 3604.33,
    person: 'Karol',
    text: ' Just for the sake of Santa not putting us on the list, right?'
  },
  { startTime: 3608.81, person: 'Luca', text: ' Yeah, exactly.' },
  {
    startTime: 3609.89,
    person: 'Luca',
    text: " I don't want to be the naughty boy, the naughty architect."
  },
  {
    startTime: 3614.53,
    person: 'Luca',
    text: ' Could be the next title that I could use, the naughty architect.'
  },
  { startTime: 3618.37, person: 'Luca', text: ' And then we have here the application shell.' },
  { startTime: 3623.41, person: 'Luca', text: ' Sorry.' },
  { startTime: 3625.57, person: 'Karol', text: ' Question, what do you get in Italy?' },
  { startTime: 3628.65, person: 'Karol', text: " What do you get from Santa if you're naughty?" },
  { startTime: 3634.55, person: 'Luca', text: ' Nothing.' },
  { startTime: 3634.99, person: 'Karol', text: ' In England, that would be a lump of coal.' },
  { startTime: 3639.91, person: 'Luca', text: ' Yeah, that could be that.' },
  {
    startTime: 3641.49,
    person: 'Luca',
    text: " But usually it's for us, the 6th of January, there is the befana that I know is very specific for us."
  },
  {
    startTime: 3648.33,
    person: 'Luca',
    text: ' And it brings usually, if you are a naughty boy, you have the coal.'
  },
  { startTime: 3654.83, person: 'Karol', text: ' Okay.' },
  { startTime: 3656.47, person: 'Karol', text: ' In Poland, this is a stick.' },
  { startTime: 3659.43, person: 'Karol', text: ' A stick to whip.' },
  { startTime: 3662.97, person: 'Karol', text: " A flexible stick that we get if we're naughty." },
  { startTime: 3667.15, person: 'Karol', text: ' All right, so this is the shell.' },
  { startTime: 3669.13, person: 'Luca', text: ' This is our situation, right?' },
  {
    startTime: 3671.87,
    person: 'Luca',
    text: ' Then we will discuss about the interoperability with the services because also there are interesting discussions.'
  },
  {
    startTime: 3679.13,
    person: 'Luca',
    text: " So the first thing is, I don't know how to draw that."
  },
  { startTime: 3683.91, person: 'Luca', text: " Let's assume that we can do in this way." },
  {
    startTime: 3686.51,
    person: 'Luca',
    text: ' So you have like our object that could contain some configuration, okay?'
  },
  { startTime: 3696.63, person: 'Luca', text: ' That is owned by the application shell.' },
  { startTime: 3700.91, person: 'Luca', text: " This is, let's say, the first element." },
  { startTime: 3703.69, person: 'Luca', text: " Ideally, it's not always the case." },
  {
    startTime: 3705.87,
    person: 'Luca',
    text: ' Not everyone is implementing that way, but ideally, this should be read-only and is a property like it tells you.'
  },
  {
    startTime: 3713.33,
    person: 'Luca',
    text: " Majority of the time, you have like, I don't know, feature flags."
  },
  {
    startTime: 3716.23,
    person: 'Luca',
    text: ' You have maybe some URLs that you need to provide dynamically.'
  },
  {
    startTime: 3721.15,
    person: 'Luca',
    text: " Sometimes, for instance, I've seen some companies passing the user data into either the HTML or exposed as an object inside the page."
  },
  {
    startTime: 3731.01,
    person: 'Luca',
    text: ' I remember when I did the request engineering 10 years ago on Netflix, they were basically adding the user data inside the JSON object inside HTML in order to avoid to make another code.'
  },
  {
    startTime: 3743.87,
    person: 'Luca',
    text: ' That was a smart way for optimisation, but there are plenty of ways that you can do it.'
  },
  {
    startTime: 3748.77,
    person: 'Luca',
    text: ' But usually, you have a configuration of some sort.'
  },
  {
    startTime: 3751.65,
    person: 'Luca',
    text: ' The other thing is, at this stage, I can retrieve some stuff.'
  },
  {
    startTime: 3755.59,
    person: 'Luca',
    text: " You will have, majority of the time, let's see if there is more shapes."
  },
  { startTime: 3760.65, person: 'Luca', text: ' There is the document shape.' },
  { startTime: 3764.81, person: 'Luca', text: " My shape, I don't know." },
  { startTime: 3766.25, person: 'Luca', text: ' Yeah, there is AWS stuff, obviously.' },
  { startTime: 3770.65, person: 'Luca', text: " Okay, let's assume." },
  { startTime: 3771.51, person: 'Luca', text: " Let's take this." },
  { startTime: 3773.19, person: 'Luca', text: ' This one?' },
  { startTime: 3774.55, person: 'Luca', text: ' Can I take this?' },
  { startTime: 3775.51, person: 'Luca', text: ' No, I need to upgrade, so I cannot.' },
  { startTime: 3778.39, person: 'Luca', text: " Let's take this." },
  { startTime: 3780.37, person: 'Luca', text: ' Okay, perfect.' },
  {
    startTime: 3781.39,
    person: 'Luca',
    text: ' So then you have, majority of the time, a cookie that is your session.'
  },
  { startTime: 3789.01, person: 'Luca', text: ' This is available to everyone, right?' },
  {
    startTime: 3792.03,
    person: 'Luca',
    text: ' So the cookie is something that is, as long you configure it properly, because the security model of the cookie is that you can set up different subdomains there.'
  },
  {
    startTime: 3801.47,
    person: 'Luca',
    text: ' You can say www.payment.mysite.com will have this cookie, so the cookie will be accessible by every single domain.'
  },
  {
    startTime: 3810.91,
    person: 'Luca',
    text: ' There are a bunch of other, sometimes you have a database that you can have on local storage, session storage, or even a web database that is available inside your browser that you can use.'
  },
  {
    startTime: 3823.21,
    person: 'Luca',
    text: " Those two things are accessible globally in JavaScript, so you don't have to do creating any fancy stuff unless you want to, but these are usually the things that are accessible."
  },
  {
    startTime: 3834.23,
    person: 'Luca',
    text: ' So basically, every micro-frontend will have access to the configuration.'
  },
  { startTime: 3838.37, person: 'Luca', text: ' 99% of them will need that.' },
  {
    startTime: 3841.01,
    person: 'Luca',
    text: ' Cookie, if you are in an authenticated situation and or local storage, session storage, web storage, whatever it is that you want.'
  },
  {
    startTime: 3851.39,
    person: 'Luca',
    text: ' Those are the things that everyone has available.'
  },
  {
    startTime: 3853.71,
    person: 'Luca',
    text: ' Now, if I want to communicate with the application shell or with the payment, what you usually do is having this emitter.'
  },
  { startTime: 3867.38, person: 'Luca', text: " This one is, let's see if I can increase this." },
  { startTime: 3870.34, person: 'Luca', text: ' Boom.' },
  { startTime: 3871.86, person: 'Luca', text: ' Okay.' },
  {
    startTime: 3872.94,
    person: 'Luca',
    text: " You have this emitter that is a singleton, so you have just once in your instance, just once, and then you inject inside every micro-frontend, but the idea is that now my micro-frontend can, my direction probably is better, can send an event to or receive an event from an emitter and say, okay, I send an event that, I don't know, the user detail changed."
  },
  {
    startTime: 3899.04,
    person: 'Luca',
    text: ' I need to show a pop-up, and therefore the application shell in this case will have a component that subscribe to the, let me see if I can do this, that subscribes to, how do I do a pop-up here?'
  },
  { startTime: 3915.26, person: 'Luca', text: ' I could build this one.' },
  { startTime: 3917.86, person: 'Luca', text: ' Okay.' },
  {
    startTime: 3922.84,
    person: 'Luca',
    text: " That subscribe to the specific event that is, let's create the event."
  },
  { startTime: 3930.53, person: 'Luca', text: " It's called, let's see, onUserChanged." },
  { startTime: 3940.73, person: 'Luca', text: " Something better maybe, but let's use it." },
  { startTime: 3944.63, person: 'Karol', text: " That's a listener more." },
  { startTime: 3948.13, person: 'Luca', text: ' Yeah, sorry.' },
  {
    startTime: 3950.35,
    person: 'Karol',
    text: ' Yeah, userChanged, I suppose the event would be then.'
  },
  {
    startTime: 3954.49,
    person: 'Luca',
    text: ' UserChanged, then what happens is, you send these events, then the pop-up will have that onUserChanged.'
  },
  {
    startTime: 3966.45,
    person: 'Luca',
    text: " Basically, we receive these events and we'll behave in certain ways of showing the pop-up and then allowing certain things."
  },
  {
    startTime: 3974.81,
    person: 'Luca',
    text: ' The userChanged obviously can have an object with some details that it can use and that are useful for the pop-up, either for retrieving certain information and other things.'
  },
  {
    startTime: 3983.15,
    person: 'Karol',
    text: " That's basically miniaturised, event-driven approach."
  },
  { startTime: 3988.87, person: 'Luca', text: ' Correct.' },
  { startTime: 3989.51, person: 'Luca', text: " It's literally a pop-up system." },
  {
    startTime: 3991.79,
    person: 'Luca',
    text: ' If you think about that, JavaScript is already event-based.'
  },
  { startTime: 3995.33, person: 'Luca', text: ' I click a button, a dispatching event.' },
  {
    startTime: 3997.59,
    person: 'Luca',
    text: ' The problem you have with JavaScript events, that is a problem I sorted out a long time ago with a technology called Flex that was part of the Flash platform and that shows how old I am.'
  },
  { startTime: 4012.87, person: 'Karol', text: ' I still remember Flash.' },
  { startTime: 4015.37, person: 'Luca', text: ' Missed it dearly.' },
  {
    startTime: 4017.41,
    person: 'Luca',
    text: ' The problem there is that even in JavaScript, you have a DOM structure that is basically a tree.'
  },
  { startTime: 4023.87, person: 'Luca', text: ' I can have different branches.' },
  { startTime: 4027.05, person: 'Luca', text: " Let's assume that we have two branches." },
  {
    startTime: 4030.01,
    person: 'Luca',
    text: ' This one is living inside a branch and this one is living in another branch.'
  },
  {
    startTime: 4034.85,
    person: 'Luca',
    text: " If I use dispatch event in JavaScript, in order for me to listen to payment without referring to payment, because otherwise I create coupling, I know that today there is payment, tomorrow there isn't, so I need to change twice, so you don't want to do that."
  },
  { startTime: 4049.49, person: 'Luca', text: ' But during that time, what you do is doing this.' },
  {
    startTime: 4053.93,
    person: 'Luca',
    text: ' So you do window.addEventListener. So registering the listeners to somewhere.'
  },
  { startTime: 4065.76, person: 'Luca', text: ' Why that?' },
  {
    startTime: 4066.58,
    person: 'Luca',
    text: " Because this one is the top object that's composed of the browser, so for sure we'll arrive there."
  },
  {
    startTime: 4073.02,
    person: 'Luca',
    text: ' The problem is the for sure part, because in JavaScript, I can also have inside my payment an object that what it does is, or a component, that is a higher level component that has, what is it?'
  },
  { startTime: 4092.08, person: 'Luca', text: ' Searching.' },
  { startTime: 4092.36, person: 'Karol', text: " But it's further in the tree." },
  {
    startTime: 4096.06,
    person: 'Luca',
    text: " It's in between the payment or the component that dispatch that event and the window, and basically we'll do, these are the user change, you will have my function, my function, and inside my function, you can have a nice event, so preventEventDefault, if I remember well the method, and this will basically stop the propagation, and therefore it will never arrive to Windows."
  },
  { startTime: 4135.899, person: 'Luca', text: ' Edge case.' },
  { startTime: 4137.18, person: 'Luca', text: ' When happens, good luck debugging.' },
  {
    startTime: 4140.72,
    person: 'Luca',
    text: ' So instead, this is a way that is completely abstracted to any framework.'
  },
  { startTime: 4147.819, person: 'Luca', text: " That works, it's like pure vanilla JavaScript." },
  {
    startTime: 4149.74,
    person: 'Luca',
    text: " This is usually an emitter, it's an observer, not an observable, an observer pattern."
  },
  {
    startTime: 4155.18,
    person: 'Luca',
    text: ' So I have an array of objects that are subscribing to a certain event.'
  },
  {
    startTime: 4159.46,
    person: 'Luca',
    text: " When I emit an event, it's just taking the array part, going through the entire array, and say, on method, and then dispatching this specific event."
  },
  {
    startTime: 4169.72,
    person: 'Luca',
    text: " The beauty of this approach is completely agnostic from the position, so if tomorrow I nest payment in a different way or as part of another microcontent, whatever it is, it doesn't really matter, as long as it has the instance of emitter."
  },
  {
    startTime: 4184.02,
    person: 'Luca',
    text: " So this approach simplifies drastically the way how you deal with not having to think about, oh, now I have, let's say, a potential issue that could happen."
  },
  {
    startTime: 4195.6,
    person: 'Luca',
    text: " I don't know when it happens, because obviously at the beginning we all know we are extremely, let's say, pumped on applying all the best practises, but then when we have the first thing that you need to deploy for tomorrow because otherwise there's a problem, then you start to implement and cut corners everywhere."
  },
  {
    startTime: 4213.8,
    person: 'Luca',
    text: " And usually, even if you cut corner, you don't crash."
  },
  { startTime: 4217.96, person: 'Luca', text: " That's basically the idea." },
  {
    startTime: 4219.16,
    person: 'Karol',
    text: ' Yeah, because the tree structure makes it difficult.'
  },
  {
    startTime: 4223.1,
    person: 'Karol',
    text: " I don't really get to experience that because I don't get that level of events in anything I write in JavaScript, but if I can make an analogue in my head in what I do, it's basically where I put the variable in my code matters in the tree structure."
  },
  { startTime: 4241.84, person: 'Karol', text: ' So this is exactly the same aspect.' },
  {
    startTime: 4244.56,
    person: 'Karol',
    text: " If I put the definition of the variable very low in the tree, close to the root of it, then it's accessible to a lot of things in the code."
  },
  {
    startTime: 4255.72,
    person: 'Karol',
    text: ' But if I define it somewhere further in a loop or in an if statement or anywhere else, then I will have a problem because it will not be visible to the other parts, and then I need to rethink all of this.'
  },
  {
    startTime: 4268.58,
    person: 'Karol',
    text: ' And this is exactly the same issue, but at a different scale.'
  },
  { startTime: 4272.4, person: 'Luca', text: ' Correct.' },
  { startTime: 4274.16, person: 'Luca', text: " That's the challenge." },
  { startTime: 4275, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 4276.58,
    person: 'Luca',
    text: " And this one is the communication that's happening inside the browser, basically, majority of the time."
  },
  { startTime: 4281.72, person: 'Luca', text: ' Right.' },
  {
    startTime: 4281.9,
    person: 'Luca',
    text: ' Now, there is a communication towards the backend.'
  },
  { startTime: 4285.12, person: 'Luca', text: ' And here we have a variety of possibilities.' },
  { startTime: 4290.16, person: 'Luca', text: ' We can have GraphQL as an approach.' },
  { startTime: 4296.64, person: 'Luca', text: ' So I expose, like, GraphQL.' },
  { startTime: 4298.58, person: 'Luca', text: ' Why GraphQL for frontend makes a lot of sense?' },
  { startTime: 4300.84, person: 'Luca', text: ' Because if you have a majority of the,' },
  { startTime: 4302.8, person: 'Luca', text: " let's say, application nowadays" },
  { startTime: 4304.1, person: 'Luca', text: ' are on mobile, are on web,' },
  { startTime: 4306.56, person: 'Luca', text: ' sometimes in other devices,' },
  { startTime: 4308.6, person: 'Luca', text: ' and the thing that I can query,' },
  { startTime: 4311, person: 'Luca', text: " let's say, GraphQL," },
  { startTime: 4311.86, person: 'Luca', text: ' with information that I need' },
  { startTime: 4313.28, person: 'Luca', text: ' only for that specific screen,' },
  { startTime: 4315.1, person: 'Luca', text: ' reduce the chattiness,' },
  { startTime: 4316.28, person: 'Luca', text: ' I can design the things in a better way,' },
  { startTime: 4319, person: 'Luca', text: ' I download way less code' },
  { startTime: 4321.18, person: 'Luca', text: ' that is not needed,' },
  { startTime: 4322.04, person: 'Luca', text: ' especially the mobile teams' },
  { startTime: 4323.86, person: 'Luca', text: ' are extremely happy' },
  { startTime: 4324.66, person: 'Luca', text: ' when there is GraphQL on that.' },
  {
    startTime: 4326.96,
    person: 'Luca',
    text: ' And there is a caveat, but we will discuss in a second.'
  },
  {
    startTime: 4331.02,
    person: 'Luca',
    text: " And in general, you know, it's a great way, very, I would say, quite democratised nowadays."
  },
  { startTime: 4336.44, person: 'Luca', text: " It's not that you need to get crazy on that." },
  {
    startTime: 4339.24,
    person: 'Luca',
    text: ' There is a very nice level of sophistication now in certain implementation where you can even have security on what you see based on the token or based on the role of the user.'
  },
  { startTime: 4350.62, person: 'Luca', text: " So there is, let's say, quite a lot nowadays." },
  {
    startTime: 4353.52,
    person: 'Luca',
    text: ' The beauty of this approach now, especially in the last few years, is that you have this idea of, what do I use?'
  },
  { startTime: 4363.02, person: 'Luca', text: ' This one probably.' },
  { startTime: 4365.84, person: 'Luca', text: ' Schema federation.' },
  {
    startTime: 4369.32,
    person: 'Luca',
    text: ' Where, if you think about that, I have multiple teams that are working on an application.'
  },
  {
    startTime: 4377.92,
    person: 'Luca',
    text: ' We decide that we slice in a certain way our front-end and our back-end.'
  },
  {
    startTime: 4381.76,
    person: 'Luca',
    text: ' Now, suddenly you are introducing a single point where every single request is passing through.'
  },
  { startTime: 4389.42, person: 'Luca', text: ' How can I maintain the independence of teams?' },
  {
    startTime: 4392.42,
    person: 'Luca',
    text: ' And GraphQL come up with this idea of schema federation.'
  },
  {
    startTime: 4396.06,
    person: 'Luca',
    text: ' This idea where I create my own schema for describing my own domain.'
  },
  {
    startTime: 4399.76,
    person: 'Luca',
    text: ' And then GraphQL is creating a super graph that is bundling everything together.'
  },
  {
    startTime: 4404.98,
    person: 'Luca',
    text: " So I have it for front-end, it's a unique layer that I get access to."
  },
  {
    startTime: 4409.78,
    person: 'Luca',
    text: ' But for the back-end, I can evolve things in a way that are completely independent.'
  },
  { startTime: 4414.26, person: 'Luca', text: ' Okay.' },
  {
    startTime: 4416.24,
    person: 'Karol',
    text: " So for those who are versed in domain-driven design, for me, this sounds like GraphQL created an open host service with published languages based on whatever is the domain you're trying to work."
  },
  {
    startTime: 4434.12,
    person: 'Karol',
    text: ' And that schema federation works as the repository of those published languages.'
  },
  { startTime: 4439.88, person: 'Luca', text: ' Correct.' },
  {
    startTime: 4440.34,
    person: 'Luca',
    text: ' So the cool thing of the schema is that you think about, you create a schema, and I need to consume that.'
  },
  {
    startTime: 4447.76,
    person: 'Luca',
    text: ' You create one, and then another person will create another one.'
  },
  {
    startTime: 4452.04,
    person: 'Luca',
    text: ' And somehow I need to find myself that they can combine different domains because the domain on front-end might not be the domain on back-end.'
  },
  {
    startTime: 4459.3,
    person: 'Luca',
    text: ' In the previous example, for instance, you probably have a user domain and you have a payment domain.'
  },
  {
    startTime: 4465.16,
    person: 'Luca',
    text: ' That would be some foreign tables, some communication between these things, depends from the complexity that you have.'
  },
  {
    startTime: 4470.42,
    person: 'Luca',
    text: ' But the reality is these two things will be distinctive.'
  },
  { startTime: 4473.68, person: 'Luca', text: ' But in the front-end, we want to show both.' },
  {
    startTime: 4476.16,
    person: 'Luca',
    text: ' And therefore, as you can see now, you are in a situation where you create something ad hoc.'
  },
  {
    startTime: 4480.68,
    person: 'Luca',
    text: " For instance, GraphQL won't require that because you have the availability of multiple domains available for you, and that could be okay for certain companies."
  },
  {
    startTime: 4490.5,
    person: 'Luca',
    text: " In certain scenarios, though, there are, let's say, if you start with REST APIs, you want to keep REST APIs because the problem is not that GraphQL will create technical challenges, but will introduce philosophical issues inside your system because the way how GraphQL, let's say, democratise the information is maybe something that you want to do on a certain part of the system."
  },
  {
    startTime: 4517.06,
    person: 'Luca',
    text: ' At the moment that you introduce something like that, in six-month time, I can guarantee you that happens more than once, someone will say, but that team is using GraphQL.'
  },
  {
    startTime: 4525.66,
    person: 'Luca',
    text: ' Why cannot we use the same because we have a similar problem?'
  },
  {
    startTime: 4528.78,
    person: 'Luca',
    text: ' And that opens up a door of different philosophies, different way to update APIs, different ways to consume APIs, different way to scale infrastructure, and that can go ahead forever.'
  },
  {
    startTime: 4541.52,
    person: 'Luca',
    text: " So for me, it's very, very important that when we, at the beginning of the discussion, we were saying, guys, let's try to think and design things in a certain way."
  },
  {
    startTime: 4550.8,
    person: 'Luca',
    text: " You look into this problem and understand, okay, GraphQL, it's something that we want to embrace."
  },
  {
    startTime: 4556.04,
    person: 'Luca',
    text: ' We know the trade-off, what they are, so we democratise the information.'
  },
  { startTime: 4559.72, person: 'Luca', text: ' Is it fine for what you need to do?' },
  {
    startTime: 4561.66,
    person: 'Luca',
    text: " Because then if you have high volumetric and it requires, let's say, I don't know, you have a million requests every second, then you need to scale horizontally."
  },
  {
    startTime: 4572.96,
    person: 'Luca',
    text: " It's totally doable, obviously, but one thing is, let's say, handling, let's say, one service that has to scale, I don't know, 200,000 requests per second."
  },
  {
    startTime: 4583.56,
    person: 'Luca',
    text: " One thing is scaling one that is a million, and if it's down, basically the whole system is down, right?"
  },
  {
    startTime: 4589.24,
    person: 'Luca',
    text: ' So you need to be careful on how you design these things.'
  },
  {
    startTime: 4592.62,
    person: 'Luca',
    text: " You can potentially think about a back-end for front-end approach that is domain, let's say, divided by domain."
  },
  {
    startTime: 4599.5,
    person: 'Luca',
    text: ' That could be another approach that you can think about where you just basically have the possibility to not having a schema federation.'
  },
  {
    startTime: 4611.39,
    person: 'Luca',
    text: ' You just have a REST API that aggregates a bunch of APIs from different domains, potentially, or the same, up to you.'
  },
  {
    startTime: 4619.51,
    person: 'Luca',
    text: ' But then it means that I will have a proliferation of those, so one per domain, and a BFF.'
  },
  {
    startTime: 4627.29,
    person: 'Karol',
    text: " If you are actually partitioning per domain, because I would argue that depending on the maturity of the organisation, the maturity of the teams, you may just have a single BFF that will handle all sorts of domains because you haven't even thought about the main partitioning at this point just yet."
  },
  {
    startTime: 4646.37,
    person: 'Karol',
    text: ' You have more of a functional partitioning and technical partitioning rather than actual domain partitioning.'
  },
  {
    startTime: 4655.27,
    person: 'Luca',
    text: ' For me, you know, because in my experience, there are, I can tell you, in my previous job, for instance, we used one BFF for one domain that was my account for not having to deal with exactly this problem here.'
  },
  {
    startTime: 4670.73,
    person: 'Luca',
    text: ' Because when you have one microcontents, you need to create governance into that.'
  },
  { startTime: 4673.47, person: 'Luca', text: ' Who is responsible for end-to-end testing?' },
  { startTime: 4675.31, person: 'Luca', text: ' Who is responsible for integration?' },
  {
    startTime: 4677.73,
    person: 'Luca',
    text: ' Who is responsible for making sure that we need to define these API, these events, and therefore everything will work?'
  },
  {
    startTime: 4684.67,
    person: 'Luca',
    text: ' Who is creating the, so there are a lot of who is creating, so the ownership part becomes complicated.'
  },
  {
    startTime: 4690.01,
    person: 'Luca',
    text: " So how I solve that is say, okay, I can have two teams responsible for that or I can have a BFF for my account, let's call my account here, that includes payments and user details and whatever else we had in the past."
  },
  {
    startTime: 4706.47,
    person: 'Luca',
    text: ' So now that this team is responsible for one microcontent, okay?'
  },
  {
    startTime: 4711.33,
    person: 'Karol',
    text: ' That services two, yeah, that services different things.'
  },
  { startTime: 4717.15, person: 'Luca', text: ' It is super simple.' },
  {
    startTime: 4718.65,
    person: 'Luca',
    text: ' The domain aggregation is done at the backend and still the same team is responsible for these things.'
  },
  {
    startTime: 4724.03,
    person: 'Luca',
    text: ' And they remove all the complexity on governance.'
  },
  { startTime: 4726.55, person: 'Luca', text: ' Right.' },
  {
    startTime: 4727.15,
    person: 'Luca',
    text: " So I was the only domain that needed this specific treatment, introducing GraphQL like it was asked from developers or let's say handling microcontents differently, but then having all the complexity on updating and all the other stuff, I resolved in a very simple way."
  },
  { startTime: 4744.35, person: 'Luca', text: ' I created a backup from front of my account.' },
  {
    startTime: 4746.71,
    person: 'Luca',
    text: " The API weren't changing very often because I check the code volatility of these API."
  },
  { startTime: 4751.95, person: 'Luca', text: ' So the contract remained fairly stable.' },
  {
    startTime: 4754.33,
    person: 'Luca',
    text: " Also because we have, let's say, payment APIs are delicate in general and user are the same."
  },
  {
    startTime: 4759.95,
    person: 'Luca',
    text: ' When you define user, usually you augment the API.'
  },
  {
    startTime: 4762.71,
    person: 'Luca',
    text: " You don't do too many breaking changes in a year."
  },
  { startTime: 4765.43, person: 'Luca', text: ' So code volatility wise, we were fine.' },
  {
    startTime: 4767.37,
    person: 'Luca',
    text: " And that enabled me to have, let's say, a single point where I aggregate all the information."
  },
  {
    startTime: 4772.91,
    person: 'Luca',
    text: ' The team was responsible to switch when needed the right version of the API to consume.'
  },
  {
    startTime: 4779.47,
    person: 'Luca',
    text: " And the microcontent, it will have always the same, let's say, contract."
  },
  {
    startTime: 4783.63,
    person: 'Luca',
    text: ' So it will be a team, very easy to maintain that microcontent.'
  },
  {
    startTime: 4787.57,
    person: 'Luca',
    text: ' The only thing that needs to take more into account is the backend for frontend.'
  },
  {
    startTime: 4792.65,
    person: 'Luca',
    text: " So as you can see now here, the decision, it wasn't, oh, let's play with GraphQL."
  },
  {
    startTime: 4798.37,
    person: 'Luca',
    text: " It's trying to figure out what means for me in terms of trade-offs if I have multiple microcontents in the same view and analyse what is the benefit of instead introducing a middleware and disaggregating the data, because in reality, they're not changing very often."
  },
  {
    startTime: 4817.35,
    person: 'Luca',
    text: " And the traffic on that specific area, my account, if you think how often you go to my account in Netflix, it's probably once a year when your credit card expire, when you want to change your email, stuff like that."
  },
  {
    startTime: 4827.13,
    person: 'Luca',
    text: " So it wasn't, let's say, the complexity wasn't worth it for the domain that I was designing at the time."
  },
  { startTime: 4833.77, person: 'Luca', text: " That's another key takeaway, in my opinion." },
  {
    startTime: 4836.03,
    person: 'Luca',
    text: " Very often, again, we're not playing with best practises or amazing tools or bleeding edge tools, but we reason around what is the trade-off that really makes shine that specific context, because context is king."
  },
  {
    startTime: 4849.41,
    person: 'Luca',
    text: " They can provide the best effort without, let's say, create too much complexity."
  },
  {
    startTime: 4855.85,
    person: 'Karol',
    text: ' So basically here, we not only have a trade-off analysis'
  },
  { startTime: 4861.73, person: 'Karol', text: " over, let's say, the functional aspect of this," },
  {
    startTime: 4864.75,
    person: 'Karol',
    text: ' because we have the scope of usage, the volatility,'
  },
  { startTime: 4868.77, person: 'Karol', text: ' which is one of the degrees of coupling,' },
  { startTime: 4870.31, person: 'Karol', text: ' as described by Vlad Kononov,' },
  {
    startTime: 4874.47,
    person: 'Karol',
    text: " but also we're looking at the socio-technical aspect"
  },
  { startTime: 4878.37, person: 'Karol', text: ' of what is the trade-off then,' },
  { startTime: 4881.43, person: 'Karol', text: ' from a socio-technical perspective,' },
  { startTime: 4883.03, person: 'Karol', text: ' over responsibility, accountability,' },
  { startTime: 4885.75, person: 'Karol', text: ' of different tasks around the whole lifecycle' },
  { startTime: 4889.19, person: 'Karol', text: ' of these components.' },
  {
    startTime: 4891.85,
    person: 'Karol',
    text: ' So development, making changes, maintaining this, testing this end-to-end, and all other aspects of communication between teams.'
  },
  {
    startTime: 4902.95,
    person: 'Luca',
    text: ' As I was saying at the beginning, the whole point that I started with, the principles behind a micro-frontend, and one of them is being dependent, that was my north star to follow.'
  },
  { startTime: 4915.49, person: 'Luca', text: ' Therefore, if I design things without thinking' },
  { startTime: 4919.15, person: 'Luca', text: ' what is the impact of my developers' },
  {
    startTime: 4923.13,
    person: 'Luca',
    text: ' holistically, in terms not only on cognitive load,'
  },
  {
    startTime: 4925.47,
    person: 'Luca',
    text: ' but also what is the effort, what is the governance'
  },
  {
    startTime: 4927.99,
    person: 'Luca',
    text: ' I need to create, what the platform teams need to do,'
  },
  {
    startTime: 4931.47,
    person: 'Luca',
    text: ' there are extra new things that we need to think about,'
  },
  { startTime: 4934.21, person: 'Luca', text: ' think about ownership and stuff like that,' },
  { startTime: 4936.77, person: 'Luca', text: " I'm making a disservice to the company," },
  {
    startTime: 4938.73,
    person: 'Luca',
    text: " because, again, it's not architecture that is failing,"
  },
  {
    startTime: 4941.93,
    person: 'Luca',
    text: " it's you that you are, let's say, simplifying too much"
  },
  { startTime: 4944.55, person: 'Luca', text: ' the complexity of building software' },
  { startTime: 4946.53, person: 'Luca', text: ' in a distributed system,' },
  { startTime: 4948.51, person: 'Luca', text: ' because a distributed system has a complexity' },
  { startTime: 4950.65, person: 'Luca', text: ' that is in three dimensions always for me,' },
  { startTime: 4952.89, person: 'Luca', text: ' architecture, engineering, culture,' },
  { startTime: 4954.33, person: 'Luca', text: ' and team topology, so organisation structure.' },
  {
    startTime: 4959.93,
    person: 'Luca',
    text: " If you're not seeing these three dimensions holistically"
  },
  { startTime: 4962.45, person: 'Luca', text: ' when you do trade-off analysis,' },
  { startTime: 4964.23, person: 'Luca', text: ' then you are basically taking a guess' },
  { startTime: 4968.73, person: 'Luca', text: ' that you might have the right decision or not,' },
  { startTime: 4971.27, person: 'Luca', text: ' and then blaming architecture' },
  { startTime: 4972.55, person: 'Luca', text: ' because there is friction inside the system' },
  { startTime: 4974.95, person: 'Luca', text: ' without understanding that this friction' },
  { startTime: 4976.59, person: 'Luca', text: ' is the way that architecture' },
  { startTime: 4978.67, person: 'Luca', text: ' or a social technical system has' },
  { startTime: 4980.69, person: 'Luca', text: ' to tell you, by the way,' },
  { startTime: 4982.93, person: 'Luca', text: " you didn't think about the other dimensions." },
  {
    startTime: 4987.11,
    person: 'Karol',
    text: " I like to refer these kind of points to Tesla's law."
  },
  {
    startTime: 4992.53,
    person: 'Karol',
    text: " You probably know Tesla's law because this is a very common law used in user experience."
  },
  {
    startTime: 4998.31,
    person: 'Karol',
    text: " I personally use this for system-to-system interoperability because it's still very much applicable, and Tesla stated that there is an inherent amount of complexity in the problem domain that is irreducible."
  },
  {
    startTime: 5014.23,
    person: 'Karol',
    text: ' We can add accidental or additional complexity to it by over-engineering, by over-complicating, or over-simplifying a problem.'
  },
  {
    startTime: 5026.35,
    person: 'Karol',
    text: ' That complexity, the question is who is going to handle that complexity?'
  },
  {
    startTime: 5030.43,
    person: 'Karol',
    text: " Basically, what you're saying is it adds degrees to where that complexity can go or derive from because it can derive from architecture itself, it can derive from the engineering culture and the team topologies to the organisation itself or go to those places if it's poorly addressed in any of those categories that you mentioned."
  },
  {
    startTime: 5059.17,
    person: 'Luca',
    text: ' Completely, because if you see this example that I made on purpose, this approach is technically sounded.'
  },
  {
    startTime: 5068.73,
    person: 'Luca',
    text: " And similarly, the approach technically works because I'm maintaining the separation of concern between the elements."
  },
  { startTime: 5075.23, person: 'Luca', text: ' Now, the problem is in a vacuum.' },
  { startTime: 5078.01, person: 'Luca', text: ' Both will work and will be well-designed.' },
  { startTime: 5082.39, person: 'Luca', text: ' But if you start to add a new layer' },
  { startTime: 5084.41, person: 'Luca', text: ' that is the context,' },
  { startTime: 5085.73, person: 'Luca', text: ' so the business requirements' },
  { startTime: 5086.91, person: 'Luca', text: ' and the architectural characteristics' },
  { startTime: 5088.03, person: 'Luca', text: ' and the engineering culture' },
  { startTime: 5090.23, person: 'Luca', text: ' and the organisation structure,' },
  { startTime: 5092.97, person: 'Luca', text: ' now you start to say,' },
  { startTime: 5094.67, person: 'Luca', text: ' but probably this makes more sense' },
  { startTime: 5096.61, person: 'Luca', text: ' because looking at the vacuum' },
  { startTime: 5098.95, person: 'Luca', text: ' on the technical solution nowadays,' },
  { startTime: 5100.99, person: 'Luca', text: ' especially in distributed systems,' },
  { startTime: 5103.89, person: 'Luca', text: " is, let's say," },
  { startTime: 5106.01, person: 'Luca', text: ' being a bit blind' },
  { startTime: 5107.41, person: 'Luca', text: ' on the reality of the case' },
  { startTime: 5109.07, person: 'Luca', text: ' because if you are not capable' },
  { startTime: 5110.91, person: 'Luca', text: ' to have a full understanding' },
  { startTime: 5113.65, person: 'Luca', text: ' of the system,' },
  { startTime: 5115.11, person: 'Luca', text: " it's very difficult," },
  { startTime: 5116.23, person: 'Luca', text: ' and the context is very difficult' },
  { startTime: 5117.41, person: 'Luca', text: ' to say this is the direction of travel.' },
  {
    startTime: 5120.09,
    person: 'Luca',
    text: " As an AWS specialist, what I'm doing is jumping in a customer that I maybe never speak with and that half of my discussions is around organisation structure and what you're trying to achieve, what are the goals that you have, what is your volumetrics, what is your availability goals, stuff like that, that they know will impact whatever I'm going to say after that."
  },
  {
    startTime: 5143.15,
    person: 'Luca',
    text: " And usually after 40 minutes that I'm talking about all of this, in 20 minutes I can solve the problem because now I have all the context of the world and I can tell you, listen, you are doing this, but the problem you have is that if you're telling me that your teams are doing this, that probably what you are implementing doesn't work."
  },
  {
    startTime: 5161.05,
    person: 'Luca',
    text: ' Either you change the way how you structure the team or you change the way how you implement these things because otherwise friction will arise anyway.'
  },
  {
    startTime: 5167.25,
    person: 'Luca',
    text: " So it's not a problem of technology, it's a problem of that you didn't think holistically on a specific part."
  },
  { startTime: 5172.09, person: 'Luca', text: " And that's why, let's say," },
  { startTime: 5174.67, person: 'Luca', text: ' in the last 10 years' },
  { startTime: 5176.03, person: 'Luca', text: ' I mastered a lot' },
  { startTime: 5177.53, person: 'Luca', text: ' of this kind of multidimensional vision' },
  { startTime: 5181.53, person: 'Luca', text: ' as architect' },
  { startTime: 5182.29, person: 'Luca', text: ' because it enables me' },
  { startTime: 5183.83, person: 'Luca', text: ' to look at things differently' },
  { startTime: 5185.77, person: 'Luca', text: ' from a developer' },
  { startTime: 5187.21, person: 'Luca', text: ' that unfortunately' },
  { startTime: 5188.37, person: 'Luca', text: ' they are forced to look' },
  { startTime: 5190.89, person: 'Luca', text: ' into their chunk of the system' },
  { startTime: 5192.59, person: 'Luca', text: ' and therefore they master that part,' },
  { startTime: 5195.03, person: 'Luca', text: ' they are extremely proud of their craft,' },
  { startTime: 5197.27, person: 'Luca', text: " but they don't, let's say," },
  { startTime: 5198.53, person: 'Luca', text: ' take a step back' },
  { startTime: 5199.45, person: 'Luca', text: ' and look, okay,' },
  { startTime: 5200.03, person: 'Luca', text: ' what are we trying to achieve here?' },
  {
    startTime: 5202.07,
    person: 'Luca',
    text: " And that's where I believe more senior people like staff engineers or architects or engineer manager, whatever, should provide that information to feed inside the teams for taking better decisions."
  },
  {
    startTime: 5215.39,
    person: 'Karol',
    text: ' There is a quote attributed to Einstein that Einstein, when asked, at least supposedly, if he had one hour to save the world, what would he do in that one hour?'
  },
  {
    startTime: 5233.87,
    person: 'Karol',
    text: ' And the quote is that he would spend 55 minutes understanding the problem and five minutes actually saving the world and fixing whatever is wrong.'
  },
  {
    startTime: 5244.57,
    person: 'Karol',
    text: ' And I found this, I believe this exact attribution to the quote was somewhere in the book I was recently reading, a very nice one, domain-driven refactoring.'
  },
  {
    startTime: 5256.67,
    person: 'Karol',
    text: ' And basically, in the book, they touched, because refactoring is also a psychological problem, they touched upon what you already hinted at for the perspective of developers.'
  },
  {
    startTime: 5272.35,
    person: 'Karol',
    text: ' Developers, or engineers in general, they hate to be in the problem space.'
  },
  { startTime: 5279.39, person: 'Karol', text: ' They like to be in the solution space.' },
  { startTime: 5282.41, person: 'Karol', text: ' Oh, we see a problem, we jump to solutioning.' },
  { startTime: 5284.93, person: 'Luca', text: ' Exactly.' },
  {
    startTime: 5285.87,
    person: 'Karol',
    text: " And that's from a perspective of business or from perspective of architecture, that's pretty much the worst thing you can do."
  },
  {
    startTime: 5294.77,
    person: 'Karol',
    text: " Because then you have a solution that doesn't really fit the problem and it doesn't really solve the problem because it didn't take enough time to understand what the problem is and potentially the solution should have been a lot simpler."
  },
  { startTime: 5310.25, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 5310.43,
    person: 'Karol',
    text: ' So already by solutioning instead of architecting, we jump into making assumptions.'
  },
  {
    startTime: 5317.07,
    person: 'Karol',
    text: " And that's always going to be painful to a certain extent."
  },
  {
    startTime: 5321.23,
    person: 'Karol',
    text: " And this is why this kind of trade-off analysis and also looking at the other axes of the problem like engineering culture or the organisation or team topologies, the dynamics between teams, it's crucial to build a proper architecture."
  },
  { startTime: 5339.67, person: 'Luca', text: ' Absolutely.' },
  {
    startTime: 5341.43,
    person: 'Luca',
    text: " And that's why, honestly, what I'm trying to do is democratising this approach and trying to provide a distilled version of all the things that I discussed so far in my book in order that they don't have to do what I have done and they can, let's say, apply these things properly."
  },
  {
    startTime: 5359.73,
    person: 'Luca',
    text: " In my book, I spent plenty of time to describe migration, the status of the specific context that I was doing and stuff like that mainly because I want to, let's say, start to make them sensible on these topics because it doesn't come for free."
  },
  {
    startTime: 5376.17,
    person: 'Luca',
    text: " Very often, I have seen that teams blame me from time and when they maybe try in the field and then they start to speak with me and I start to dig deeper into the topic and I explain to them, oh, yeah, but your friction was generated by that from what you're telling me."
  },
  { startTime: 5393.83, person: 'Luca', text: " I say, oh, yeah, you're right." },
  { startTime: 5395.27, person: 'Luca', text: ' And then they give a second chance.' },
  {
    startTime: 5396.87,
    person: 'Luca',
    text: " The second chance usually is successful because if the mindset is not because I'm ingenious or I'm better than others, I'm definitely not."
  },
  { startTime: 5404.85, person: 'Luca', text: " I'm definitely an average person." },
  {
    startTime: 5406.91,
    person: 'Luca',
    text: ' But the thing is, what differentiates me is that I start to look holistically on these things.'
  },
  {
    startTime: 5412.83,
    person: 'Luca',
    text: ' And everyone can do that if I was able to do this.'
  },
  {
    startTime: 5416.03,
    person: 'Luca',
    text: ' But the thing is, you need to understand that the problem space is bigger than what you expect.'
  },
  { startTime: 5422.21, person: 'Karol', text: ' Mm-hmm.' },
  { startTime: 5423.41, person: 'Karol', text: ' That is definitely true.' },
  {
    startTime: 5425.09,
    person: 'Karol',
    text: ' Usually, in general, the majority of the problems we have in IT are not technical problems.'
  },
  { startTime: 5432.47, person: 'Luca', text: ' Yeah.' },
  {
    startTime: 5432.79,
    person: 'Karol',
    text: ' We need to solve them on the level of a conversation with our stakeholders, conversation with our business to understand what is the actual business need.'
  },
  {
    startTime: 5444.93,
    person: 'Karol',
    text: ' Not the business wants, to be precise, because the business will say what they want, which is not precisely what they need.'
  },
  {
    startTime: 5451.51,
    person: 'Karol',
    text: ' And for us as architects, this is the part where we can step in to actually translate what they want from us into what they actually need to be built and developed and then we need to figure it out how it is supposed to be done.'
  },
  {
    startTime: 5467.55,
    person: 'Karol',
    text: " And this is the difficult part because this is where we as architects really don't need that technical knowledge."
  },
  { startTime: 5476.59, person: 'Karol', text: ' We really need a lot softer skills, right?' },
  {
    startTime: 5480.73,
    person: 'Karol',
    text: ' Conversation, capturing nuances, discovering things, being pretty much business analysts.'
  },
  {
    startTime: 5488.15,
    person: 'Karol',
    text: " And that's for a lot of people, it's very difficult, especially if they're just beginning their journey into architecture."
  },
  { startTime: 5494.31, person: 'Luca', text: ' Oh, yeah.' },
  {
    startTime: 5495.09,
    person: 'Luca',
    text: " Yeah, it's a role that you grow in more than you're ready and you just, let's say, start to do that."
  },
  {
    startTime: 5501.35,
    person: 'Luca',
    text: " You need to push outside your comfort zone very often and definitely technical background helps because you have, let's say, already one part of the problem in your head."
  },
  {
    startTime: 5511.11,
    person: 'Luca',
    text: " You don't have to be, let's say, the best developer in the world, but definitely having a bit of background, in my opinion, helps because you have, let's say, a portion of the system there."
  },
  {
    startTime: 5520.83,
    person: 'Luca',
    text: ' Then I was lucky enough to be in a situation where we needed to move fast and I have the possibility to look into the other two dimensions.'
  },
  {
    startTime: 5529.93,
    person: 'Luca',
    text: " And that's where probably, let's say, nowadays, I'm more confident to say this is going to happen or this is the right solution because I was able to see them firsthand."
  },
  {
    startTime: 5543.51,
    person: 'Karol',
    text: ' Yeah, I think that experience you had over this fast really quickly growing company, I think that really shapes.'
  },
  {
    startTime: 5557.61,
    person: 'Karol',
    text: " Like me, if you work in consulting and you're exposed through projects just to a small snippet of the problem space, it's a lot harder to grow into the role of an architect that way because you don't have to tackle all those aspects."
  },
  {
    startTime: 5575.65,
    person: 'Karol',
    text: " You just tackle what you're served in terms of tasks in Jira or whatever other system that you agree on the scope of work."
  },
  {
    startTime: 5587.85,
    person: 'Karol',
    text: " And that's very problematic for people to grow out of that mindset and to look at the broader picture, to have that holistic view of what's going on."
  },
  { startTime: 5598.89, person: 'Karol', text: ' And this is something that is really needed.' },
  {
    startTime: 5603.59,
    person: 'Karol',
    text: ' And I learned that kind of the hard way, but I also had, through reading the works of Mark Richards and Neil Ford, that really helped me further develop that view into architectural thinking instead of being narrow-minded into that technical thinking because it created more friction for me than it needed, really.'
  },
  { startTime: 5629.35, person: 'Luca', text: ' Yeah, totally.' },
  {
    startTime: 5629.97,
    person: 'Luca',
    text: ' I think when I had the possibility to jump from product to consulting, I always said no for a certain period of time because the challenge you have usually is if you work in product, you take some shots and some decisions.'
  },
  {
    startTime: 5646.77,
    person: 'Luca',
    text: " But before you see the impact of your decision, it would take probably between six to 18 months from when it's in production."
  },
  {
    startTime: 5655.77,
    person: 'Luca',
    text: ' Before that, it can be as good as it could be, but the reality is you learn, you need to play the long-term, long game in architecture because the more you see things that, okay, I decided this, this was the context, this was the situation, these are the outcomes.'
  },
  { startTime: 5673.21, person: 'Luca', text: ' These are all baggage that you usually have.' },
  {
    startTime: 5675.47,
    person: 'Luca',
    text: ' In consulting, the vast majority of the time you arrive to deployment of a solution, you see a chunk of the system.'
  },
  {
    startTime: 5682.65,
    person: 'Luca',
    text: " If you are lucky, you have a contract that is long enough to see these things, but it's not given for granted, while if you are internally in the product, you evolve the product over and over again and that you see all your decisions right or wrong or right for the context that has to be changed, but you have the context of why you take that decision at that time."
  },
  {
    startTime: 5702.05,
    person: 'Luca',
    text: ' Luckily, maybe you also documented in your architectural decision record, but then you have the possibility to iterate into that based on the involvement of the social technical system.'
  },
  { startTime: 5712.03, person: 'Luca', text: ' And that, for me,' },
  { startTime: 5712.55, person: 'Luca', text: ' is where really you learn' },
  { startTime: 5714.51, person: 'Luca', text: ' how to do architecture,' },
  { startTime: 5716.39, person: 'Luca', text: " let's say, properly" },
  { startTime: 5717.97, person: 'Luca', text: ' because very often,' },
  { startTime: 5719.53, person: 'Luca', text: " if you just, let's say," },
  { startTime: 5720.83, person: 'Luca', text: ' move from one project to another one,' },
  { startTime: 5722.47, person: 'Luca', text: ' you will have a lot of breadth' },
  { startTime: 5723.83, person: 'Luca', text: ' of use cases,' },
  { startTime: 5725.25, person: 'Luca', text: ' but you are not going to see' },
  { startTime: 5726.53, person: 'Luca', text: ' if your decision will have' },
  { startTime: 5728.63, person: 'Luca', text: ' right or wrong impact' },
  { startTime: 5729.75, person: 'Luca', text: ' because of a variation' },
  { startTime: 5730.87, person: 'Luca', text: ' with consultants' },
  { startTime: 5732.57, person: 'Luca', text: ' that are telling me,' },
  { startTime: 5733.65, person: 'Luca', text: ' oh, I was doing that' },
  { startTime: 5734.51, person: 'Luca', text: ' and then it turns out' },
  { startTime: 5736.45, person: 'Luca', text: ' that some of them' },
  { startTime: 5737.29, person: 'Luca', text: ' was one of my customers' },
  { startTime: 5738.71, person: 'Luca', text: ' in AWS.' },
  {
    startTime: 5740.05,
    person: 'Luca',
    text: ' And when I spoke with them, we were saying, oh yeah, this consultant did that, but basically after they left, they left a mess because they were incapable to scale at the level that we needed and then basically they call other people to fix that and they validate with us.'
  },
  { startTime: 5755.41, person: 'Luca', text: ' So this situation happens over and over again.' },
  {
    startTime: 5758.09,
    person: 'Luca',
    text: " So I think it depends in which, let's say, part of your career you are at."
  },
  {
    startTime: 5766.27,
    person: 'Karol',
    text: ' I was lucky to move back and forth between consulting and being in-house, so I have the two perspectives.'
  },
  {
    startTime: 5774.65,
    person: 'Karol',
    text: ' And it really depends on what you need right now in your career.'
  },
  {
    startTime: 5779.23,
    person: 'Karol',
    text: ' Sometimes you need the breadth of knowledge to experience different technologies, experience different projects, different types of projects, because you got bored by your in-house project, which is constantly in the same scope of business problems.'
  },
  { startTime: 5796.25, person: 'Karol', text: " So that's no longer interesting." },
  {
    startTime: 5798.33,
    person: 'Karol',
    text: " Other times, it's really, really nice to see over time how your work actually impacts the organisation."
  },
  {
    startTime: 5805.47,
    person: 'Karol',
    text: ' And I remember this lovely part where I was still a junior developer working in consulting and then I moved to my client to have an internal role later as an architect.'
  },
  {
    startTime: 5820.19,
    person: 'Karol',
    text: ' And I opened, that was back when subversion was still a thing, not Git.'
  },
  {
    startTime: 5826.61,
    person: 'Karol',
    text: ' And I opened subversion, like, who the hell screwed this up so royally?'
  },
  {
    startTime: 5832.67,
    person: 'Karol',
    text: ' And I saw four years earlier my name under those comments screwing it up so royally.'
  },
  {
    startTime: 5839.53,
    person: 'Karol',
    text: ' And I was like, oh, okay, this is a growth moment, right?'
  },
  {
    startTime: 5843.25,
    person: 'Karol',
    text: " This is where the perspective comes in, kicks in, and now I have a proper understanding of what's going on."
  },
  { startTime: 5853.45, person: 'Karol', text: ' And this is important to put that context in.' },
  { startTime: 5857.37, person: 'Luca', text: ' Completely.' },
  { startTime: 5858.05, person: 'Luca', text: " I think it's just a learning thing." },
  {
    startTime: 5860.01,
    person: 'Luca',
    text: " So in order to become an architect, you need to design a lot of stuff, see the impact of your design, and it's easier to a certain extent if you spend a few years in the same place because you will have a better perspective because you understand the context."
  },
  {
    startTime: 5874.85,
    person: 'Luca',
    text: ' And moving between context, you can take away between context in terms of industries, potentially.'
  },
  {
    startTime: 5880.47,
    person: 'Luca',
    text: ' You can take away a lot of your learnings and apply in different industries.'
  },
  { startTime: 5885.45, person: 'Luca', text: ' But I did something similar like you.' },
  {
    startTime: 5888.27,
    person: 'Luca',
    text: " When I was living in Italy, I had my own agency, so I've seen a lot of, let's say, breadth at the beginning of my career."
  },
  {
    startTime: 5895.43,
    person: 'Luca',
    text: ' And when I moved to UK, instead I started to work more on product because I needed to go deeper.'
  },
  {
    startTime: 5901.97,
    person: 'Luca',
    text: ' I needed to see the impact of my things either as a developer or architect, wherever it was.'
  },
  { startTime: 5907.37, person: 'Luca', text: ' And that worked out' },
  { startTime: 5908.27, person: 'Luca', text: ' until a few years back' },
  { startTime: 5909.91, person: 'Luca', text: ' that I decided to go back' },
  { startTime: 5911.05, person: 'Luca', text: ' in a certain way' },
  { startTime: 5911.61, person: 'Luca', text: ' consulting in AWS' },
  { startTime: 5914.11, person: 'Luca', text: ' because there I wanted' },
  { startTime: 5915.59, person: 'Luca', text: ' to see where my depth' },
  { startTime: 5917.47, person: 'Luca', text: ' and breadth was reaching' },
  { startTime: 5919.05, person: 'Luca', text: ' the tipping points' },
  { startTime: 5920.55, person: 'Luca', text: " and see what I'm missing," },
  { startTime: 5923.13, person: 'Luca', text: " what I didn't see" },
  { startTime: 5923.99, person: 'Luca', text: " or I didn't discover yet," },
  { startTime: 5926.17, person: 'Luca', text: ' and the possibility' },
  { startTime: 5926.81, person: 'Luca', text: ' to work with large companies' },
  { startTime: 5928.13, person: 'Luca', text: ' and large customers,' },
  { startTime: 5928.55, person: 'Luca', text: ' obviously,' },
  { startTime: 5929.79, person: 'Luca', text: ' was for me' },
  { startTime: 5931.87, person: 'Luca', text: ' extremely important' },
  { startTime: 5932.83, person: 'Luca', text: ' for my career' },
  { startTime: 5933.67, person: 'Luca', text: ' and validate, basically,' },
  { startTime: 5935.27, person: 'Luca', text: ' my learnings' },
  { startTime: 5935.87, person: 'Luca', text: ' and learn new things' },
  { startTime: 5936.85, person: 'Luca', text: ' that obviously' },
  { startTime: 5937.75, person: 'Luca', text: ' was one of the key aspects' },
  { startTime: 5939.27, person: 'Luca', text: ' for me to join' },
  { startTime: 5940.49, person: 'Luca', text: ' a company like this.' },
  { startTime: 5946.64, person: 'Karol', text: ' Yeah, these paths are crucial.' },
  { startTime: 5950.88, person: 'Karol', text: " It's crucial" },
  { startTime: 5951.24, person: 'Karol', text: ' to have a little bit' },
  { startTime: 5952.26, person: 'Karol', text: ' of a reflection' },
  { startTime: 5952.86, person: 'Karol', text: ' over time' },
  { startTime: 5953.52, person: 'Karol', text: ' where you want to go next' },
  { startTime: 5954.82, person: 'Karol', text: ' and what you want to do' },
  { startTime: 5955.64, person: 'Karol', text: ' and why,' },
  { startTime: 5956.8, person: 'Karol', text: ' not just do random moves' },
  { startTime: 5958.3, person: 'Karol', text: ' in your career' },
  { startTime: 5958.94, person: 'Karol', text: ' because these moves' },
  { startTime: 5960.96, person: 'Karol', text: ' will definitely shape' },
  { startTime: 5962.1, person: 'Karol', text: ' your thinking' },
  { startTime: 5962.64, person: 'Karol', text: ' and the way you do things' },
  { startTime: 5965.28, person: 'Karol', text: " and it's always" },
  { startTime: 5967.88, person: 'Karol', text: ' a difficult choice' },
  { startTime: 5968.9, person: 'Karol', text: ' in that sense' },
  { startTime: 5970.04, person: 'Karol', text: ' because there are' },
  { startTime: 5972.28, person: 'Karol', text: ' so many factors' },
  { startTime: 5973.08, person: 'Karol', text: ' that go into that decision' },
  { startTime: 5975.08, person: 'Karol', text: ' and your opportunities' },
  { startTime: 5977.02, person: 'Karol', text: ' for growth' },
  { startTime: 5977.7, person: 'Karol', text: ' from that perspective.' },
  {
    startTime: 5981.02,
    person: 'Karol',
    text: ' So, yeah, and this later translates to these kind of lovely designs like microfrontends which is amazing.'
  },
  {
    startTime: 5988.36,
    person: 'Karol',
    text: ' Okay, so if we had our microfrontends, we had the Shell app, we had different microfrontends embedded into that Shell app, we discussed GraphQL as a means of reading data.'
  },
  { startTime: 6003.56, person: 'Karol', text: ' Do you use GraphQL at all for writing data?' },
  { startTime: 6006.62, person: 'Karol', text: " I don't think it's a thing." },
  { startTime: 6008.84, person: 'Luca', text: ' Yeah, potentially you can do also that.' },
  {
    startTime: 6011.02,
    person: 'Luca',
    text: " It's bi-directional completely so it's not a big deal."
  },
  {
    startTime: 6013.82,
    person: 'Luca',
    text: ' You can even have subscription that basically enables you to have a web socket under the hood and when one thing changes, on the back end, it will be displayed inside the UI.'
  },
  { startTime: 6025.82, person: 'Luca', text: " It's extremely powerful to be honest." },
  {
    startTime: 6028.96,
    person: 'Luca',
    text: " I've seen a lot of the capabilities offered by GraphQL used with microfrontends or with monolithic applications but majority of the time I've seen successful implementation on multi-device approaches due to the nature that they can query whatever they want and now with schema federation was a big plus."
  },
  { startTime: 6048.34, person: 'Luca', text: ' Now microfrontends,' },
  { startTime: 6049.8, person: 'Luca', text: ' we borrow the idea' },
  { startTime: 6051.46, person: 'Luca', text: ' of schema federation' },
  { startTime: 6052.66, person: 'Luca', text: ' where you compose things' },
  { startTime: 6054.18, person: 'Luca', text: ' in a single schema' },
  { startTime: 6055.22, person: 'Luca', text: ' creating a super schema' },
  { startTime: 6056.88, person: 'Luca', text: " and that's where" },
  { startTime: 6057.82, person: 'Luca', text: ' you lazy load stuff' },
  { startTime: 6059.2, person: 'Luca', text: ' and since I would say' },
  { startTime: 6062.96, person: 'Luca', text: ' seven, eight years ago,' },
  { startTime: 6064.48, person: 'Luca', text: ' we started to see' },
  { startTime: 6065.1, person: 'Luca', text: ' a proliferation of frameworks' },
  { startTime: 6067.22, person: 'Luca', text: ' that came out' },
  { startTime: 6069.74, person: 'Luca', text: ' on microfrontends' },
  { startTime: 6070.94, person: 'Luca', text: ' but now also' },
  { startTime: 6071.76, person: 'Luca', text: ' the new frameworks,' },
  { startTime: 6073.06, person: 'Luca', text: ' the server-side rendering one,' },
  { startTime: 6074.44, person: 'Luca', text: ' the one that is usually used' },
  { startTime: 6075.66, person: 'Luca', text: ' for e-commerce,' },
  { startTime: 6076.94, person: 'Luca', text: ' the most famous one' },
  { startTime: 6078.54, person: 'Luca', text: ' like Next.js, Astro.js, etc.' },
  {
    startTime: 6081.86,
    person: 'Luca',
    text: ' They have microfrontends as first-class citizen inside their system because you can use what they call React Server Components or Astro Server Island that are basically implementation microfrontends.'
  },
  { startTime: 6094.64, person: 'Luca', text: ' They have similar principles.' },
  {
    startTime: 6096.02,
    person: 'Luca',
    text: " They don't call microfrontends but you can build microfrontends with those."
  },
  { startTime: 6099.52, person: 'Luca', text: ' I have several examples' },
  { startTime: 6100.5, person: 'Luca', text: ' in my GitHub repository' },
  { startTime: 6102.82, person: 'Luca', text: ' with Next or with Astro' },
  { startTime: 6105.1, person: 'Luca', text: ' just to show' },
  { startTime: 6105.82, person: 'Luca', text: ' how you should think about it' },
  { startTime: 6108.9, person: 'Luca', text: ' because the reality is' },
  { startTime: 6110.3, person: 'Luca', text: ' when you understand architecture,' },
  { startTime: 6113.4, person: 'Luca', text: ' you are in a position' },
  { startTime: 6114.64, person: 'Luca', text: " where it doesn't matter anymore" },
  { startTime: 6115.88, person: 'Luca', text: " if it's edge rendering," },
  { startTime: 6118.22, person: 'Luca', text: ' server-side rendering,' },
  { startTime: 6119.14, person: 'Luca', text: ' client-side rendering,' },
  { startTime: 6120.78, person: 'Luca', text: ' a desktop application,' },
  { startTime: 6122.08, person: 'Luca', text: ' a mobile application, whatever' },
  { startTime: 6123.78, person: 'Luca', text: ' because the logic is always the same' },
  { startTime: 6125.46, person: 'Luca', text: ' as architecture at the end.' },
  { startTime: 6126.86, person: 'Luca', text: " It's not a framework." },
  { startTime: 6127.56, person: 'Luca', text: ' You are not bounded to a framework.' },
  { startTime: 6128.78, person: 'Luca', text: " You are bounded to, let's say, an approach." },
  {
    startTime: 6131.98,
    person: 'Luca',
    text: ' So for me, in the book I describe what I call the decision framework that basically are four decisions you need to make in every single architecture.'
  },
  {
    startTime: 6141.4,
    person: 'Luca',
    text: ' Every time you design with microfrontends, I encounter this decision every single time.'
  },
  { startTime: 6145.5, person: 'Luca', text: ' So how to slice a microfrontend?' },
  {
    startTime: 6147.3,
    person: 'Luca',
    text: ' You want one microfrontend loaded per time, multiple of them.'
  },
  {
    startTime: 6150.44,
    person: 'Luca',
    text: ' Obviously, they are non-mutual exclusive so you can choose certain domains you will have multiple microfrontends like the one that we show in the diagram.'
  },
  {
    startTime: 6157.26,
    person: 'Luca',
    text: ' Some others, you might have a single microfrontend like the catalogue that I was showing in the demo.'
  },
  { startTime: 6163.06, person: 'Luca', text: " And it's fine." },
  {
    startTime: 6164.4,
    person: 'Luca',
    text: ' But then you need to think about how you route and how you compose.'
  },
  {
    startTime: 6169.76,
    person: 'Luca',
    text: ' So you do on the client, you do on the server, you do on the edge because, for instance, I applied strangler pattern on the edge for migrating from a monolith towards the microfrontends in a very nice way because that enables me to pass through the CDN no matter what I do.'
  },
  { startTime: 6187.22, person: 'Luca', text: ' Therefore, I can start to have some smart logic.' },
  {
    startTime: 6189.5,
    person: 'Luca',
    text: " I started to have kind of releases at the edge where I say, every time that you call this microfrontend and I have a new version, I want that 5% of the traffic goes with the new version only if they are in, I don't know, Germany and they are in Google Chrome."
  },
  {
    startTime: 6208.34,
    person: 'Luca',
    text: ' So in this situation, I can shape the deployment that basically the idea of introducing this was creating a safe net for developers to reach production more often because as the book Accelerate taught us several years back, we were looking into dollar metrics so we want to go as fast as possible in production because that is one of the characteristics that enables a successful company to succeed.'
  },
  {
    startTime: 6232.68,
    person: 'Luca',
    text: ' And if you create a safe net for developers, they are capable to, for instance, this approach moved the needle from two free deployments per month to 25 per day per team.'
  },
  {
    startTime: 6244.22,
    person: 'Luca',
    text: ' So we end up with more microservices and microfrontends at the end of the month when we started to have certain maturity that we had thousands of deployments per month across different layers.'
  },
  {
    startTime: 6255.84,
    person: 'Luca',
    text: ' But that tells you how fast you can go, how safe you can be, and stuff like that.'
  },
  { startTime: 6261.62, person: 'Luca', text: ' And did we screw up?' },
  { startTime: 6262.72, person: 'Luca', text: ' Of course.' },
  {
    startTime: 6263.68,
    person: 'Luca',
    text: ' Because naturally we have human beings in the mix.'
  },
  {
    startTime: 6268.16,
    person: 'Luca',
    text: ' So sometimes you forget about a specific configuration.'
  },
  { startTime: 6271.12, person: 'Luca', text: ' You forget to put behind the feature flags.' },
  { startTime: 6272.94, person: 'Luca', text: ' You forget about these things.' },
  {
    startTime: 6274.32,
    person: 'Luca',
    text: " But that doesn't, nevertheless, doesn't mean that we screw up the proposal."
  },
  { startTime: 6278.44, person: 'Luca', text: " It's just, OK, we found a blind spot." },
  {
    startTime: 6281.44,
    person: 'Luca',
    text: " We need to understand how we can mitigate this blind spot that doesn't happen again."
  },
  {
    startTime: 6285.94,
    person: 'Luca',
    text: " This is the mindset that, in my opinion, people should have more than, first thing is, OK, let's create a gate that basically is preventing people to deploy."
  },
  {
    startTime: 6294.92,
    person: 'Luca',
    text: ' And we hide behind this change advisory board that should know everything about everything that is happening inside the company.'
  },
  {
    startTime: 6304.44,
    person: 'Luca',
    text: ' Usually even if you have the smartest people in the company, the cognitive load is finite.'
  },
  {
    startTime: 6309.22,
    person: 'Luca',
    text: ' So they will never be able to tell you this specific service will not clash with the change on this other specific service.'
  },
  {
    startTime: 6316.92,
    person: 'Luca',
    text: ' So you are basically creating friction that is a safe net for the management, not for developers.'
  },
  {
    startTime: 6321.86,
    person: 'Luca',
    text: " So let's invest more in automation and we create something that makes more sense for developers because those are the ones that need to speed up and be safe when they deploy."
  },
  { startTime: 6331.96, person: 'Karol', text: ' Right.' },
  { startTime: 6332.72, person: 'Karol', text: ' Did you mean Accelerate?' },
  {
    startTime: 6333.64,
    person: 'Karol',
    text: ' Accelerate, did you mean the book by Nicole Forrest-Grant, Jess Hubble, and Gene Keem?'
  },
  { startTime: 6340.36, person: 'Karol', text: ' Yes.' },
  {
    startTime: 6340.5,
    person: 'Karol',
    text: " So if anybody would like to dig in, here's a QR code."
  },
  {
    startTime: 6344.82,
    person: 'Luca',
    text: ' of 200 companies worldwide where basically in the first part of the book they describe what are the traits of successful companies.'
  },
  {
    startTime: 6353.28,
    person: 'Luca',
    text: ' And the second part, they describe how they tested or better, how they conducted the research for retrieving this information.'
  },
  {
    startTime: 6362.6,
    person: 'Luca',
    text: ' What they discover is that there are some traits that make companies successful.'
  },
  {
    startTime: 6367.72,
    person: 'Luca',
    text: ' One is how fast you can deploy, how fast you roll back if there is an issue, how fast it takes from ideation to production, and that basically is the base of the foundation of Dora Metrics.'
  },
  {
    startTime: 6381.12,
    person: 'Luca',
    text: ' And that was one thing that nowadays in the industry is quite well known.'
  },
  {
    startTime: 6386.1,
    person: 'Luca',
    text: " And now there is a new book from Nicole called Frictionless that I think came out last month, I can't remember well."
  },
  { startTime: 6396.9, person: 'Luca', text: " And it's basically moving to the next step." },
  {
    startTime: 6400.46,
    person: 'Luca',
    text: " I didn't read it yet, but it's definitely my reading list."
  },
  { startTime: 6406.72, person: 'Karol', text: " Okay, I don't see it." },
  {
    startTime: 6408,
    person: 'Karol',
    text: ' Otto Reilly would have to dig deeper to find it, but yeah.'
  },
  { startTime: 6411.84, person: 'Luca', text: ' Let me see if I can find it.' },
  {
    startTime: 6419.17,
    person: 'Karol',
    text: " Okay, now if I just still took a look at the diagram we drafted on Miro, and I'm looking like, okay, so we have interoperability between the microfrontends being through the emitter, so we have even driven-like aspects that are avoiding the JavaScript problem of events and listeners."
  },
  {
    startTime: 6444.35,
    person: 'Karol',
    text: ' Then we have interoperability between the microfrontends and the backend, as in GraphQL or backend for frontend.'
  },
  {
    startTime: 6452.95,
    person: 'Karol',
    text: ' And then basically, if we have that layer of a backend for frontend, whatever version that may be, then basically that is our abstraction layer that we then go into communicating with the rest of the ecosystem.'
  },
  {
    startTime: 6467.49,
    person: 'Karol',
    text: ' So this is where my job begins, how to get that data moving between that particular backend of that frontend into the rest of the ecosystem.'
  },
  {
    startTime: 6477.51,
    person: 'Karol',
    text: " And this is pretty already standardised in comparison to what we have in microfrontends, where that, for me, is something that is very much abstract, because I don't do it simply."
  },
  { startTime: 6495.57, person: 'Karol', text: ' Of course.' },
  { startTime: 6496.17, person: 'Karol', text: " Because it's that abstract." },
  {
    startTime: 6498.23,
    person: 'Karol',
    text: " It's just something that, as an architect, I do not really touch upon, and that's the interesting part here."
  },
  { startTime: 6506.71, person: 'Karol', text: " So, okay, so that's..." },
  {
    startTime: 6508.19,
    person: 'Karol',
    text: ' Any things that happen specifically if we talk about external communication as available from the internet?'
  },
  { startTime: 6516.87, person: 'Karol', text: ' Because if we look at...' },
  {
    startTime: 6518.35,
    person: 'Karol',
    text: " Well, the frontend isn't available from the internet usually, right?"
  },
  {
    startTime: 6522.03,
    person: 'Karol',
    text: ' If we have a product site or whatever, but then what is...'
  },
  { startTime: 6528.15, person: 'Luca', text: ' You can share again the Miro board.' },
  { startTime: 6530.81, person: 'Luca', text: ' I would like to show you one example.' },
  { startTime: 6534.07, person: 'Karol', text: ' There we go.' },
  { startTime: 6534.61, person: 'Karol', text: ' Back to the Miro board.' },
  { startTime: 6535.89, person: 'Karol', text: ' Amazing.' },
  { startTime: 6536.23, person: 'Luca', text: ' So, let me zoom in here.' },
  {
    startTime: 6541.95,
    person: 'Luca',
    text: " So, imagine that this one is your, I don't know, server-side rendering..."
  },
  { startTime: 6547.35, person: 'Luca', text: ' Oh, sorry.' },
  {
    startTime: 6551.8,
    person: 'Luca',
    text: ' Server-side rendering catalogue page, and you have classic example...'
  },
  { startTime: 6557.5, person: 'Luca', text: ' Sorry, catalogue.' },
  {
    startTime: 6559.6,
    person: 'Luca',
    text: ' And you have a classic example, an external advertising server.'
  },
  { startTime: 6568.02, person: 'Luca', text: " Let's do it this way." },
  { startTime: 6571.1, person: 'Luca', text: ' So, you have ADS server.' },
  {
    startTime: 6577.03,
    person: 'Karol',
    text: ' In the meanwhile while drafting, I put the QR code for frictionless on the screen.'
  },
  {
    startTime: 6582.71,
    person: 'Karol',
    text: " So, if somebody's interested in looking into that, that's also there."
  },
  {
    startTime: 6586.99,
    person: 'Luca',
    text: ' So, in this case, for instance, I want to do server-side rendering of my catalogue, but the ADS server is an endpoint that they basically provide personalised advertising based on the user, and they show basically a specific element inside the page.'
  },
  {
    startTime: 6602.71,
    person: 'Luca',
    text: ' So, that cannot be cached, has to be retrieved dynamically from advertising servers, etc.'
  },
  {
    startTime: 6609.61,
    person: 'Luca',
    text: ' So, what you do usually is that this has to communicate with whatever system you have from mobile to whatever.'
  },
  {
    startTime: 6615.75,
    person: 'Luca',
    text: ' So, you go with the common denominator, the HTML, basically.'
  },
  {
    startTime: 6620.53,
    person: 'Luca',
    text: " What you have here, sorry, when you are fetching this information from here to here, you are going to have back, let me reverse that, you're going to have back what is called an HTML fragment."
  },
  { startTime: 6646.13, person: 'Luca', text: ' Where is the text?' },
  {
    startTime: 6651.84,
    person: 'Luca',
    text: ' That is nothing more than an HTML element that is self-contained, that contains all the graphics, text, whatever it is, based on a bunch of parameters.'
  },
  {
    startTime: 6661.72,
    person: 'Luca',
    text: ' So, now at this stage is to a certain extent potentially malicious code.'
  },
  {
    startTime: 6665.48,
    person: 'Luca',
    text: ' If I intercept that, it could happen wherever it happens.'
  },
  {
    startTime: 6669.14,
    person: 'Luca',
    text: ' So, the tendency of what you do is sanitising this code and HTML.'
  },
  {
    startTime: 6676.22,
    person: 'Luca',
    text: " HTML usually is not malicious because they don't provide, let's say, a lot of JavaScript."
  },
  {
    startTime: 6680.92,
    person: 'Luca',
    text: " There is probably a non-click thing if someone is clicking, is attributing that thing to the advertising or whatever it is, but it shouldn't be, let's say, too much logic."
  },
  {
    startTime: 6691.12,
    person: 'Luca',
    text: ' So, this one is usually sanitised, is injected inside the page that is rendered and shipped to the user.'
  },
  {
    startTime: 6700.16,
    person: 'Luca',
    text: ' Now, the other approach that now is not there yet, but it will come very soon, I would say, is when you have an AI workload.'
  },
  {
    startTime: 6711.32,
    person: 'Luca',
    text: " Now, the AI workload, what it's going to generate is JavaScript."
  },
  { startTime: 6717.46, person: 'Luca', text: ' So, I have a chatbot,' },
  { startTime: 6719.3, person: 'Luca', text: ' and imagine that at some point' },
  { startTime: 6720.58, person: 'Luca', text: ' I want to do a trip to Florence,' },
  { startTime: 6724.3, person: 'Luca', text: ' and instead of providing you' },
  { startTime: 6726.38, person: 'Luca', text: ' a text-based approach,' },
  { startTime: 6728.18, person: 'Luca', text: " it's going to generate UI" },
  { startTime: 6729.54, person: 'Luca', text: ' where you have a video of,' },
  { startTime: 6731.22, person: 'Luca', text: " let's say, what people were seeing" },
  { startTime: 6733.6, person: 'Luca', text: ' in one place,' },
  { startTime: 6734.46, person: 'Luca', text: ' and maybe they have,' },
  { startTime: 6735.44, person: 'Luca', text: " I don't know," },
  { startTime: 6736.4, person: 'Luca', text: ' some other ideas of what could,' },
  { startTime: 6740.52, person: 'Luca', text: " I don't know," },
  { startTime: 6741.06, person: 'Luca', text: ' a common itinerary' },
  { startTime: 6742.34, person: 'Luca', text: ' or the most hotel' },
  { startTime: 6745.6, person: 'Luca', text: ' from the people' },
  { startTime: 6746.4, person: 'Luca', text: ' that are coming from your country,' },
  { startTime: 6747.46, person: 'Luca', text: ' wherever it is, right?' },
  {
    startTime: 6748.68,
    person: 'Luca',
    text: ' These are a basic example of microphone temps if you think about this, because instead of providing you contextual text that is explaining one thing, you can have instead graphic things that are generating in an encapsulated way with a set of elements and then pumped with data that God knows how they are generated, right?'
  },
  {
    startTime: 6768.18,
    person: 'Luca',
    text: ' So, in a situation like that, now you have a bunch of full microphone temps potentially.'
  },
  {
    startTime: 6775.1,
    person: 'Luca',
    text: " Okay, we are in the realm of if, when, and it's going to happen, but you are going to have JavaScript here."
  },
  {
    startTime: 6781.96,
    person: 'Luca',
    text: " There are already some examples that I've seen on mobile, for instance."
  },
  {
    startTime: 6786.96,
    person: 'Luca',
    text: " It's very interesting, this approach, but imagine that you have like here JavaScript, a microphone temp JavaScript that is fully JavaScript."
  },
  { startTime: 6794.18, person: 'Luca', text: ' Now here it can be wherever, right?' },
  {
    startTime: 6796.04,
    person: 'Luca',
    text: " And it can be also that the implementation screwed up because it's using a specific version of a library that doesn't work."
  },
  { startTime: 6803.9, person: 'Luca', text: ' It has a bug, it has a security issue, wherever.' },
  {
    startTime: 6806.52,
    person: 'Luca',
    text: ' So the idea here is, okay, how do we sanitise in a situation like that?'
  },
  {
    startTime: 6810.92,
    person: 'Luca',
    text: " And probably we're going to need something new or let's put this one here that sanitise this, that is a code sandbox that takes the code, parse it, run wherever scan you need to run in this code sandbox and then finally reaches the part that you need for communicating with your system."
  },
  { startTime: 6837.97, person: 'Luca', text: ' And that is becoming very interesting, right?' },
  {
    startTime: 6840.35,
    person: 'Luca',
    text: ' Because now suddenly you can generate code on the fly, you can apply your UI and your design system because LLMs will enable us to do that.'
  },
  {
    startTime: 6849.65,
    person: 'Luca',
    text: ' And now we have, although for security reason, you cannot trust whatever is coming because we know when we play with the system that the precision of the code is generated, is probabilistic.'
  },
  {
    startTime: 6860.77,
    person: 'Luca',
    text: ' We are dealing with the probabilistic system is non-deterministic, therefore that you like it or not is going to screw up.'
  },
  {
    startTime: 6865.85,
    person: 'Luca',
    text: " So the code sandbox will become a sort of, if you want, a safe net for us to have this feedback loop that is communicating between the LLM and the agents to understand does it, let's say, work in the way that it is."
  },
  {
    startTime: 6884.93,
    person: 'Luca',
    text: ' But if you start to think about this, now you became to add a lot of security stuff here, a lot of logic and deterministic thing, security, style, et cetera, whatever it is.'
  },
  {
    startTime: 6899.27,
    person: 'Luca',
    text: " Now think how powerful it could be in transforming what today is a non-deterministic system that generates, rightly so, non-deterministic or probabilistic, let's say, responses because if you ask the same thing, it could provide the same answer or not."
  },
  {
    startTime: 6916.03,
    person: 'Luca',
    text: ' But now we start to add a bunch of layers of determinism in this probabilistic system.'
  },
  {
    startTime: 6922.57,
    person: 'Luca',
    text: ' And what if we are not going to have the perfect deterministic system?'
  },
  {
    startTime: 6927.53,
    person: 'Luca',
    text: " There is no way that a probabilistic system can turn into a deterministic system unless you change the architecture or, let's say, mathematical implementation behind that."
  },
  {
    startTime: 6937.33,
    person: 'Luca',
    text: " But in this case, we start to create, let's say, a safe net that will reduce drastically the way how we could screw up."
  },
  { startTime: 6946.95, person: 'Luca', text: ' And if you are' },
  { startTime: 6948.23, person: 'Luca', text: ' in a situation like this' },
  { startTime: 6950.13, person: 'Luca', text: ' where things are small enough,' },
  { startTime: 6952.15, person: 'Luca', text: ' we are not asking to build' },
  { startTime: 6953.29, person: 'Luca', text: ' an application,' },
  { startTime: 6953.85, person: 'Luca', text: ' we are asking to design' },
  { startTime: 6955.39, person: 'Luca', text: ' a thing with a certain constraint,' },
  { startTime: 6958.01, person: 'Luca', text: ' then I think it will become' },
  { startTime: 6960.17, person: 'Luca', text: ' quite likely' },
  { startTime: 6961.09, person: 'Luca', text: ' that we are going to have' },
  { startTime: 6962.29, person: 'Luca', text: ' something that is kind of interesting' },
  { startTime: 6964.19, person: 'Luca', text: ' and could scale very nicely' },
  { startTime: 6965.83, person: 'Luca', text: ' because with all the' },
  { startTime: 6966.91, person: 'Luca', text: ' microservices approaches' },
  { startTime: 6968.27, person: 'Luca', text: ' that we have learned overall,' },
  { startTime: 6969.77, person: 'Luca', text: ' we start to have, like,' },
  { startTime: 6971.33, person: 'Luca', text: " I don't know," },
  { startTime: 6972.09, person: 'Luca', text: ' imagine a dashboard,' },
  { startTime: 6973.17, person: 'Luca', text: ' one microfrontend' },
  { startTime: 6974.05, person: 'Luca', text: ' that is generated from LLM' },
  { startTime: 6975.75, person: 'Luca', text: ' that have a bunch of safe nets' },
  { startTime: 6977.65, person: 'Luca', text: ' that will be served' },
  { startTime: 6979.09, person: 'Luca', text: ' by a single endpoint' },
  { startTime: 6980.07, person: 'Luca', text: ' that is integrated' },
  { startTime: 6981.57, person: 'Luca', text: ' through microfrontend' },
  { startTime: 6982.45, person: 'Luca', text: ' inside the same UI.' },
  { startTime: 6984.01, person: 'Luca', text: ' Now the thing starts to become' },
  { startTime: 6985.27, person: 'Luca', text: ' very, very cool' },
  { startTime: 6986.39, person: 'Luca', text: ' because with this approach,' },
  { startTime: 6988.65, person: 'Luca', text: ' you have a mix, potentially,' },
  { startTime: 6990.99, person: 'Luca', text: ' of deterministic,' },
  { startTime: 6991.69, person: 'Luca', text: ' non-deterministic systems' },
  { startTime: 6992.93, person: 'Luca', text: ' or semi-deterministic systems,' },
  { startTime: 6994.67, person: 'Luca', text: " I don't know if there is a term" },
  { startTime: 6995.59, person: 'Luca', text: ' in English to define that,' },
  { startTime: 6997.67, person: 'Luca', text: ' that although you still control' },
  { startTime: 6999.37, person: 'Luca', text: ' to a certain extent' },
  { startTime: 7000.23, person: 'Luca', text: " and it's just, let's say," },
  { startTime: 7001.81, person: 'Luca', text: ' being good on defining these,' },
  { startTime: 7003.69, person: 'Luca', text: " let's say, rules" },
  { startTime: 7004.45, person: 'Luca', text: ' or deterministic nature' },
  { startTime: 7006.39, person: 'Luca', text: ' for reducing or eliminating' },
  { startTime: 7008.43, person: 'Luca', text: ' the possibility' },
  { startTime: 7009.87, person: 'Luca', text: ' to have some outcomes' },
  { startTime: 7011.99, person: 'Luca', text: " that are not, let's say," },
  { startTime: 7014.33, person: 'Luca', text: " I don't want to say correct" },
  { startTime: 7015.91, person: 'Luca', text: ' because this is the wrong word,' },
  { startTime: 7017.53, person: 'Luca', text: ' but as expected.' },
  {
    startTime: 7022.83,
    person: 'Karol',
    text: ' And this is probably where a number of externalised APIs will come to play to be able to facilitate that.'
  },
  {
    startTime: 7031.25,
    person: 'Luca',
    text: ' And the frameworks already have them because the React server component is nothing more than an endpoint where you basically render a chunk of the UI and is embedded inside a static part.'
  },
  {
    startTime: 7045.57,
    person: 'Luca',
    text: ' So it started to become extremely interesting, this new world.'
  },
  {
    startTime: 7049.87,
    person: 'Luca',
    text: " This is an area of research that I'm currently looking into to see how far we can push these things."
  },
  {
    startTime: 7057.05,
    person: 'Luca',
    text: ' There are some missing parts, but we are getting there.'
  },
  {
    startTime: 7063.11,
    person: 'Karol',
    text: " Okay, that's probably going to be a very interesting feature and also touching upon interoperability to how to properly govern that and make those AI workloads hallucinate less and work to our advantage because working with non-deterministic systems is already a difficult aspect."
  },
  { startTime: 7086.53, person: 'Karol', text: " That's only always." },
  { startTime: 7088.75, person: 'Luca', text: ' And I think this is...' },
  {
    startTime: 7090.39,
    person: 'Luca',
    text: ' We need to take for what they are and not trying to make them doing something that they are not designed for.'
  },
  {
    startTime: 7098.99,
    person: 'Karol',
    text: ' Or design specifically to train LLM models to be in a specific use case of micro front-ends and serving content.'
  },
  {
    startTime: 7110.63,
    person: 'Karol',
    text: ' This is a different topic where we have training and then fine-tuning where training is towards working as a micro front-end and fine-tuning would be then training the model in the aspect of that business or that site or whatever the purpose is.'
  },
  {
    startTime: 7130.57,
    person: 'Karol',
    text: ' That will be definitely an interesting avenue of research in the next years to how to properly make it a tangible use case.'
  },
  { startTime: 7141.13, person: 'Luca', text: ' Completely.' },
  {
    startTime: 7141.85,
    person: 'Luca',
    text: " I think it's just that this idea itself could literally lead to a very interesting approach overall where it doesn't have to be let's say developed fully by developers but you need to create the governance around certain things that are developed as raw elements and then augmented through AI on the fly and then composed with all the distributed system nature that we have learned overall."
  },
  {
    startTime: 7176.39,
    person: 'Luca',
    text: ' Because now we are designing a UI and now generating certain type of code so there are a lot of nuances there and with all the checks that I was mentioning to making the output not harmful for the system it started to become a very interesting thing.'
  },
  {
    startTime: 7193.11,
    person: 'Luca',
    text: ' So we need to understand how much we can push the boundaries.'
  },
  { startTime: 7199.21, person: 'Karol', text: " And let's leave it at pushing the boundaries." },
  {
    startTime: 7202.21,
    person: 'Karol',
    text: ' Hopefully, somebody will pick it up and try to push that boundary alongside you and others who are already doing this.'
  },
  { startTime: 7211.41, person: 'Karol', text: " And that's it." },
  {
    startTime: 7212.81,
    person: 'Karol',
    text: ' Luca, thank you so much for your time and for your explanation into interoperability of microfrontends.'
  },
  { startTime: 7220.53, person: 'Karol', text: " That's been enlightening." },
  { startTime: 7222.29, person: 'Karol', text: ' Now I know how they work at least.' },
  {
    startTime: 7224.39,
    person: 'Karol',
    text: " For me, as an integration architect it's easier to comprehend the nuances and I see analogues to my work just on a completely different level."
  },
  {
    startTime: 7232.39,
    person: 'Karol',
    text: " Before we go offline this is the last stream we are doing this year but next year I already have a pipeline of loosely coupled till the end of February so there's some interesting talks coming up."
  },
  { startTime: 7245.99, person: 'Karol', text: ' First one on the docket is with Chris Simon.' },
  {
    startTime: 7250.11,
    person: 'Karol',
    text: " We're going to be talking about the living language."
  },
  {
    startTime: 7252.65,
    person: 'Karol',
    text: " So we're going to be talking about how to maintain and how to work with a living language or a ubiquitous language from domain-driven design how to make it maintainable and how to keep using it without sprawl and deviations that would be harmful to our organisations."
  },
  {
    startTime: 7270.93,
    person: 'Karol',
    text: ' I think this is going to be quite a challenging and interesting conversation to be had.'
  },
  {
    startTime: 7275.55,
    person: 'Karol',
    text: " And that's on the 14th of January so we're taking a little bit of a break over the holidays and New Year to reset and do some other things than live streaming here."
  },
  {
    startTime: 7289.55,
    person: 'Karol',
    text: ' And that said, again Luca, thank you for your time.'
  },
  {
    startTime: 7293.17,
    person: 'Karol',
    text: ' Thank you for joining us in this lovely last session of the year.'
  },
  { startTime: 7299.47, person: 'Karol', text: ' Happy holidays.' },
  {
    startTime: 7300.53,
    person: 'Luca',
    text: ' Happy holidays to everyone that is listening to us and they are listening also to the recording.'
  },
  { startTime: 7305.59, person: 'Luca', text: ' So happy holidays to you and your family.' },
  {
    startTime: 7307.73,
    person: 'Luca',
    text: ' I hope that you have a good one and a relaxing one.'
  },
  { startTime: 7310.35, person: 'Luca', text: ' So yeah, thank you again for having me.' },
  {
    startTime: 7313.35,
    person: 'Karol',
    text: " It's been wonderful to have you and everybody happy holidays and happy New Year."
  },
  { startTime: 7318.43, person: 'Karol', text: ' See you next year.' }
])
</script>

<style scoped></style>
