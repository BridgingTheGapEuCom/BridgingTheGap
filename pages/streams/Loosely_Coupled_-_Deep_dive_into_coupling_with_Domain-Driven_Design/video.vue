<template>
  <div class="w-full">
    <StreamLayout
      :transcript="transcript"
      name="Loosely Coupled - Deep dive into coupling with Domain-Driven Design"
      video-id="NGENigtNUck"
    />
  </div>
</template>

<script lang="ts" setup>
const transcript = ref([
  { startTime: 63.25, person: 'Karol', text: ' Good morning, good afternoon, and good evening.' },
  {
    startTime: 66.73,
    person: 'Karol',
    text: ' Welcome to another episode of Loosely Coupled by Bridging the Gap.'
  },
  {
    startTime: 70.73,
    person: 'Karol',
    text: " My name is Karol Skrzymowski, I'll be your host tonight, and today's episode is sponsored by the common cold."
  },
  {
    startTime: 76.49,
    person: 'Karol',
    text: ' So I have some nice citrus and ginger and some other herbs brewed in the pot for myself just to get through today.'
  },
  {
    startTime: 88.01,
    person: 'Karol',
    text: " And today, well, we are having a topic that is actually very much related to the name of the stream, so we're going to talk about coupling, and in context of domain-driven design, which I think is, for our guest, is one of the few occasions when he can talk about coupling and domain-driven design at the same time, because I've seen quite a few trainings that he restrained himself very, very much."
  },
  { startTime: 114.51, person: 'Karol', text: ' So, without further ado, welcome to the stream.' },
  { startTime: 117.97, person: 'Karol', text: ' Good evening, Vlad Khononov.' },
  { startTime: 120.77, person: 'Vlad', text: ' Hey, Karol, thank you so much for having me.' },
  { startTime: 124.13, person: 'Karol', text: ' Hello, hello.' },
  {
    startTime: 125.09,
    person: 'Karol',
    text: ' Amazing that you could join us, and we can talk about domain-driven design and coupling at the same time for a change, right?'
  },
  { startTime: 133.85, person: 'Vlad', text: ' Yeah, yeah.' },
  {
    startTime: 134.89,
    person: 'Vlad',
    text: " Two topics I cannot shut up about, so I don't know how long this stream is going to be."
  },
  {
    startTime: 140.91,
    person: 'Karol',
    text: " I mean, I just been through, what was that, a month ago, through your training at O'Reilly about balancing coupling and software design."
  },
  { startTime: 148.95, person: 'Karol', text: ' You really, really had to restrain yourself.' },
  { startTime: 151.49, person: 'Karol', text: ' I saw that in you.' },
  {
    startTime: 152.45,
    person: 'Karol',
    text: " You were like, oh, I'm not supposed to talk about domain-driven design, but I'm going to mention domain-driven design."
  },
  { startTime: 158.37, person: 'Karol', text: " Yeah, that's true." },
  {
    startTime: 160.59,
    person: 'Karol',
    text: ' Speaking about that training, before we jump into the topic, Vlad, please, please, give me an IT dad joke.'
  },
  {
    startTime: 168.99,
    person: 'Vlad',
    text: ' Oh, so you want me to embarrass myself from the get-go, right?'
  },
  { startTime: 174.87, person: 'Vlad', text: ' Okay.' },
  { startTime: 175.37, person: 'Karol', text: " Let's do this." },
  { startTime: 176.55, person: 'Karol', text: ' They were great.' },
  {
    startTime: 177.17,
    person: 'Karol',
    text: " I laughed my ass off during the training, so please, please enlighten what to do when you're waiting for people to answer and chat during the live training."
  },
  { startTime: 186.15, person: 'Vlad', text: ' I see.' },
  { startTime: 188.23, person: 'Vlad', text: ' Okay, so why did the programmer quit his job?' },
  { startTime: 192.35, person: 'Vlad', text: ' Why?' },
  { startTime: 193.89, person: 'Vlad', text: " He didn't get a raise." },
  { startTime: 196.99, person: 'Vlad', text: ' A raise?' },
  { startTime: 197.79, person: 'Vlad', text: ' A raise?' },
  { startTime: 198.29, person: 'Vlad', text: ' Yeah, smart, right?' },
  { startTime: 201.32, person: 'Vlad', text: " That's not something I'm proud about." },
  { startTime: 205.92, person: 'Karol', text: ' Fair enough.' },
  { startTime: 207.04, person: 'Karol', text: " That joke's a side." },
  {
    startTime: 209.82,
    person: 'Karol',
    text: ' Coupling and domain-driven design, these are the two main topics that you do, that you are about in literature, in variety trainings, talks with people.'
  },
  { startTime: 223.36, person: 'Karol', text: ' Why those two specifically?' },
  { startTime: 226.98, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 228.84,
    person: 'Vlad',
    text: ' Well, first of all, because I love domain-driven design, learning this methodology for me was truly, not exaggerating, a career-changing experience.'
  },
  {
    startTime: 241.7,
    person: 'Vlad',
    text: ' Now, eventually, that led me to coupling because during one of my DDD endeavours, I had like a complete disaster, like cosmic-level disaster of a microservices project, like something that was supposed to be this perfect microservices-based future of everything decoupled and everything that can evolve independently.'
  },
  {
    startTime: 268.9,
    person: 'Vlad',
    text: ' And it was like, buy the book, distribute monolith.'
  },
  {
    startTime: 273.72,
    person: 'Vlad',
    text: ' And the annoying thing was that I was doing what smart people were telling me to do.'
  },
  {
    startTime: 280.32,
    person: 'Vlad',
    text: ' So, whenever, when that project was completed, I said, okay, I have to understand what the hell went wrong.'
  },
  {
    startTime: 289,
    person: 'Vlad',
    text: ' Like, why this promise of everything uncoupled or decoupled or whatever turned out to be coupling a nightmare.'
  },
  {
    startTime: 299.54,
    person: 'Vlad',
    text: " So, I started researching coupling and yeah, I just couldn't stop."
  },
  {
    startTime: 304.78,
    person: 'Vlad',
    text: ' I was fascinated by this topic because it answers so many questions beyond that microservices failure.'
  },
  { startTime: 312.58, person: 'Karol', text: ' So, which was first, DDD or coupling?' },
  { startTime: 315.06, person: 'Vlad', text: ' DDD.' },
  { startTime: 316.2, person: 'Karol', text: ' DDD.' },
  { startTime: 317.4, person: 'Karol', text: ' Okay.' },
  {
    startTime: 318.74,
    person: 'Karol',
    text: ' And then, I remember you mentioning to me that it took you about five years to complete balancing coupling and software design, which was published in October 23.'
  },
  {
    startTime: 330.06,
    person: 'Karol',
    text: ' And then in the meantime, you wrote learning domain-driven design, which was published in October 21.'
  },
  { startTime: 338.4, person: 'Karol', text: ' So, it was like parallel, parallelly developed.' },
  { startTime: 343.16, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 343.9,
    person: 'Vlad',
    text: ' So, balancing coupling was published in October, end of September, I think, 24.'
  },
  {
    startTime: 352.22,
    person: 'Vlad',
    text: " Now, I started working on both of them because, let's say, reasons, not because of something I'm proud of."
  },
  {
    startTime: 360.4,
    person: 'Vlad',
    text: ' I did a mistake and I had to start writing two books at the same time in 2019.'
  },
  {
    startTime: 368.32,
    person: 'Vlad',
    text: ' Now, learning domain-driven design was smooth sailing for me.'
  },
  { startTime: 371.88, person: 'Vlad', text: ' Like, come on.' },
  { startTime: 373.02, person: 'Vlad', text: ' I did many trainings.' },
  {
    startTime: 374.54,
    person: 'Vlad',
    text: " I already had that what is domain-driven design report for O'Reilly."
  },
  { startTime: 378.74, person: 'Vlad', text: ' I just had to extend it.' },
  { startTime: 380.78, person: 'Vlad', text: ' And, yeah, that book was easy.' },
  {
    startTime: 384.36,
    person: 'Vlad',
    text: ' Now, the coupling book, it was like a real challenge.'
  },
  { startTime: 391.97, person: 'Vlad', text: ' It was either me or the book.' },
  {
    startTime: 397.48,
    person: 'Karol',
    text: ' And, of course, the writing balancing coupling and software design was basically during a very problematic geopolitical era where you are at, right?'
  },
  { startTime: 409.7, person: 'Karol', text: ' So, that was also quite a factor.' },
  { startTime: 412.02, person: 'Vlad', text: ' Oh, there were so many factors.' },
  {
    startTime: 414.46,
    person: 'Vlad',
    text: " Like, I don't want to get into it, to be honest, because everything that could go wrong went wrong during those five years."
  },
  { startTime: 422.52, person: 'Vlad', text: ' Like, everything.' },
  { startTime: 423.96, person: 'Vlad', text: ' We had COVID, by the way, 2020.' },
  { startTime: 427.28, person: 'Vlad', text: ' The whole world stopped.' },
  { startTime: 429.02, person: 'Vlad', text: ' I got stuck in a foreign country for four months.' },
  { startTime: 432.2, person: 'Vlad', text: " I couldn't get back home." },
  { startTime: 434.48, person: 'Vlad', text: ' Yeah.' },
  { startTime: 436.44, person: 'Vlad', text: ' So many crazy stories.' },
  {
    startTime: 438.94,
    person: 'Vlad',
    text: ' I can write a whole book about, you know, things going wrong during writing of balancing coupling and software design.'
  },
  { startTime: 446.56, person: 'Vlad', text: ' Yeah.' },
  { startTime: 447.62, person: 'Vlad', text: ' And, yeah, and eventually I missed the deadline.' },
  { startTime: 450.16, person: 'Vlad', text: ' Come on.' },
  { startTime: 450.88, person: 'Karol', text: ' What was the deadline?' },
  {
    startTime: 452.62,
    person: 'Vlad',
    text: ' So, the deadline, I had it back here on this wall, so now I removed it.'
  },
  {
    startTime: 457.52,
    person: 'Vlad',
    text: ' But it was, if I remember correctly, it was October 21.'
  },
  { startTime: 461.72, person: 'Vlad', text: ' October 21.' },
  { startTime: 464.58, person: 'Vlad', text: ' Yeah.' },
  { startTime: 464.92, person: 'Karol', text: ' Three years later.' },
  { startTime: 467.56, person: 'Karol', text: ' All right.' },
  { startTime: 468.38, person: 'Karol', text: " Just some technical issues that we're facing." },
  { startTime: 472.94, person: 'Karol', text: ' First technical issue.' },
  {
    startTime: 474.08,
    person: 'Karol',
    text: ' For some reason, comments from LinkedIn do not show up in our studio.'
  },
  { startTime: 478.44, person: 'Karol', text: ' So, I hope the comments from YouTube will.' },
  {
    startTime: 481.38,
    person: 'Karol',
    text: " Something went wrong technically and we don't have that integration handled for some reason."
  },
  { startTime: 488.08, person: 'Karol', text: ' Technology, right?' },
  {
    startTime: 489.56,
    person: 'Karol',
    text: ' And then the second public service announcement, because Vlad is currently experiencing a storm outside, and power tends to give out.'
  },
  {
    startTime: 499.04,
    person: 'Karol',
    text: " So, if Vlad suddenly disappears from the stream, he'll be back in a few minutes, and then I'll be forced to say dad jokes in the meantime."
  },
  {
    startTime: 508.06,
    person: 'Karol',
    text: " So, for all of you to be warned that if Vlad just disappears, he'll come back."
  },
  { startTime: 512.9, person: 'Karol', text: " He'll come back." },
  { startTime: 514.799, person: 'Karol', text: ' But it may take a minute to do so.' },
  {
    startTime: 518.76,
    person: 'Karol',
    text: " I'll be monitoring LinkedIn on one of my screens, just a feed of comments anyways, just to put those questions in as we go."
  },
  {
    startTime: 529.68,
    person: 'Karol',
    text: ' But unfortunately, for some reason, technology fails at times.'
  },
  { startTime: 534, person: 'Karol', text: " That's what it is." },
  {
    startTime: 535.5,
    person: 'Karol',
    text: " So, as a real software engineer, you miss deadlines, you failed at a project, you decided to learn from your failures, and that's why we have learning domain-driven design, and that's why we have balancing coupling in software design as the two books."
  },
  {
    startTime: 550.02,
    person: 'Karol',
    text: ' Both really great books, because I read both of them and enjoyed every second reading them, and they were quite influential.'
  },
  {
    startTime: 557.2,
    person: 'Karol',
    text: ' Especially for me, not knowing domain-driven design, I was way easier to digest than the blue book by Eric Evans.'
  },
  {
    startTime: 563.92,
    person: 'Karol',
    text: ' So, that was a big influence on my education, at least.'
  },
  { startTime: 568.14, person: 'Karol', text: ' I hope that others as well.' },
  {
    startTime: 569.68,
    person: 'Karol',
    text: ' I know quite a few people that read learning domain-driven design, and they really enjoyed it.'
  },
  {
    startTime: 574.8,
    person: 'Karol',
    text: ' So, now we can talk about domain-driven design in the context of coupling.'
  },
  { startTime: 579.1, person: 'Karol', text: ' Now, the question is, where do we begin?' },
  { startTime: 582.94, person: 'Vlad', text: ' Whenever.' },
  {
    startTime: 583.64,
    person: 'Vlad',
    text: " Just pick a point, and we'll make our way through."
  },
  { startTime: 588.5, person: 'Karol', text: ' Okay.' },
  {
    startTime: 589.06,
    person: 'Karol',
    text: " Since I'm an integration architect, let's limit ourselves to system-to-system integration for the moment."
  },
  {
    startTime: 594.7,
    person: 'Karol',
    text: " Maybe we'll dive deeper into nuances, but let's start there."
  },
  {
    startTime: 600.38,
    person: 'Karol',
    text: ' A lot of architects think that integration is simply exposing rest endpoint.'
  },
  {
    startTime: 608.68,
    person: 'Karol',
    text: " Now, if we integrate a system to a system, so let's assume we have a SaaS solution."
  },
  {
    startTime: 614.86,
    person: 'Karol',
    text: ' It exposes an array of APIs, and we call that API from another system to do something, whatever that may be.'
  },
  {
    startTime: 623.72,
    person: 'Karol',
    text: ' At this point already, what kind of coupling we can expect and should consider as architects?'
  },
  {
    startTime: 632.98,
    person: 'Vlad',
    text: " Yeah, so, at this point, we don't have all the answers, obviously, but we have some questions to ask."
  },
  {
    startTime: 640.14,
    person: 'Vlad',
    text: " So, first of all, that API is our integration contract, something that we're using for integration."
  },
  { startTime: 647.28, person: 'Vlad', text: " That's what we know about that upstream system." },
  {
    startTime: 650.62,
    person: 'Vlad',
    text: " That's how we are integrating so we know what is the integration contract."
  },
  {
    startTime: 655.84,
    person: 'Vlad',
    text: ' The question is, what is reflected by that integration contract?'
  },
  {
    startTime: 660.5,
    person: 'Vlad',
    text: " If that integration contract is based on the model of that business domain that is being used internally in that upstream system, and that model is exposed through the API by using the same semantic terms, then what's going to happen if they need to evolve the model?"
  },
  { startTime: 682.64, person: 'Vlad', text: " Well, it's going to affect the API." },
  { startTime: 685.84, person: 'Vlad', text: ' In that case, we have a breaking change.' },
  { startTime: 688.24, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 688.76,
    person: 'Vlad',
    text: " So, now we have in that case, we'll have not contract coupling, but model coupling, because we have the knowledge of that model."
  },
  {
    startTime: 699,
    person: 'Vlad',
    text: ' Now, what if in order to work with that API, I have to know something about how it functions internally?'
  },
  {
    startTime: 710.34,
    person: 'Vlad',
    text: " Maybe there is some functionality that I have to duplicate in my system as well, because otherwise that integration won't work."
  },
  {
    startTime: 718.22,
    person: 'Vlad',
    text: ' So, now we have two functionalities being implemented in that upstream system and me, the consumer, the downstream system.'
  },
  {
    startTime: 725.74,
    person: 'Vlad',
    text: ' Well, in that case, that functionality has to be changed simultaneously while we have a much higher level of knowledge that is being shared.'
  },
  { startTime: 734.96, person: 'Vlad', text: ' Now we have functional knowledge.' },
  {
    startTime: 738.06,
    person: 'Vlad',
    text: " And ultimately, what if that system wasn't intended to be used through that API?"
  },
  {
    startTime: 746.22,
    person: 'Vlad',
    text: " Maybe that's an internal API, and you just figured out that, hey, I have that system by other team."
  },
  {
    startTime: 753.54,
    person: 'Vlad',
    text: " They probably never intended other teams to integrate it with it, but I'll do it anyway."
  },
  {
    startTime: 759.52,
    person: 'Vlad',
    text: " In that case, we're intruding their encapsulation boundaries."
  },
  {
    startTime: 762.9,
    person: 'Vlad',
    text: " We're integrating with something that we shouldn't."
  },
  {
    startTime: 765.96,
    person: 'Vlad',
    text: " So, that's going to be intrusive coupling, including the encapsulation boundaries."
  },
  {
    startTime: 772.74,
    person: 'Vlad',
    text: ' So, these four examples are four kinds of knowledge that can be shared across component boundaries whenever we have coupling.'
  },
  {
    startTime: 782.44,
    person: 'Vlad',
    text: ' Like contract coupling is the lowest, all the way to intrusive, which is like the highest.'
  },
  {
    startTime: 788.04,
    person: 'Vlad',
    text: ' And the more knowledge we are sharing, the higher the likelihood that when there is a change in the upstream, it will require a corresponding change in the downstream as well.'
  },
  { startTime: 799.2, person: 'Vlad', text: " So, we'll have cascading changes." },
  {
    startTime: 801.22,
    person: 'Vlad',
    text: " We'll have a system that is a distributed monolith."
  },
  { startTime: 806.52, person: 'Vlad', text: ' Like my project.' },
  { startTime: 808.5, person: 'Vlad', text: ' My first microservices endeavour.' },
  { startTime: 811.62, person: 'Karol', text: ' Fair enough.' },
  { startTime: 812.58, person: 'Karol', text: ' All right.' },
  {
    startTime: 812.86,
    person: 'Karol',
    text: " I've been taking notes, but apparently my keyboard is louder than you speak, so I'm going to stop noting on my, well, clank keyboard."
  },
  { startTime: 825.26, person: 'Karol', text: ' Okay.' },
  {
    startTime: 825.72,
    person: 'Karol',
    text: ' So, contract coupling would be the lowest, then, right?'
  },
  {
    startTime: 829.48,
    person: 'Karol',
    text: ' So, contract coupling means that we define a contract.'
  },
  {
    startTime: 834.64,
    person: 'Karol',
    text: ' We define a data model for exchange of information.'
  },
  {
    startTime: 839.4,
    person: 'Karol',
    text: " And from a perspective of the one providing an API, that would be some sort of a, in the best case scenario, that would be some sort of a open host service in DDD nomenclature, where we have a published language, which published language is the specific definition of an object that we're exchanging or a service that we're invoking, whatever that may be, right?"
  },
  { startTime: 864.24, person: 'Vlad', text: ' Yeah, yeah, exactly.' },
  { startTime: 865.8, person: 'Vlad', text: " That's the beauty of domain driven design." },
  { startTime: 867.52, person: 'Vlad', text: ' It has answers for all the questions.' },
  {
    startTime: 869.98,
    person: 'Vlad',
    text: ' It just takes time to get familiar with all that terminology.'
  },
  { startTime: 874.82, person: 'Vlad', text: ' So, yeah.' },
  {
    startTime: 875.78,
    person: 'Vlad',
    text: ' Open host service, that means that we have a bounded context, like service system, that exposes an integration contract that is like a model of a model.'
  },
  {
    startTime: 890.3,
    person: 'Vlad',
    text: " It's a model of their implementation model, which means the implementation model can change without necessarily causing corresponding changes in the integration contract."
  },
  {
    startTime: 902.76,
    person: 'Vlad',
    text: ' And it also allows us to use multiple integration contracts, or in DDD terms, multiple published languages.'
  },
  {
    startTime: 910.86,
    person: 'Vlad',
    text: ' So, we can expose two versions of the API that will work with the same implementation model underneath.'
  },
  { startTime: 919.92, person: 'Vlad', text: ' So, yeah.' },
  { startTime: 920.56, person: 'Vlad', text: " That's contract coupling in domain driven design." },
  {
    startTime: 924.48,
    person: 'Karol',
    text: " And this, what we talked about in terms of domain driven design, that's the general term for these phrases is context mapping, just to put it in perspective."
  },
  { startTime: 936.44, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 937.18,
    person: 'Vlad',
    text: " So, in strategic domain driven design, we're dealing with coarse grain design decisions."
  },
  {
    startTime: 942.76,
    person: 'Vlad',
    text: " We're identifying business subdomains, identifying their types, so that we'll be able to make smarter design decisions later on."
  },
  {
    startTime: 952.56,
    person: 'Vlad',
    text: ' And we also design coarse grain components of our system.'
  },
  {
    startTime: 957.58,
    person: 'Vlad',
    text: " They can be microservices, but they don't have to be microservices."
  },
  { startTime: 961.34, person: 'Vlad', text: ' Bounded contexts can be wide.' },
  { startTime: 963.58, person: 'Vlad', text: ' Call them modular monoliths.' },
  { startTime: 966.2, person: 'Vlad', text: " It doesn't matter." },
  {
    startTime: 968.04,
    person: 'Vlad',
    text: ' Now, once you have those bounded contexts, they cannot be independent.'
  },
  {
    startTime: 973.66,
    person: 'Vlad',
    text: " If they will be fully independent, they won't work together, that's not going to be a system."
  },
  { startTime: 980, person: 'Vlad', text: ' They have to work together.' },
  { startTime: 981.84, person: 'Vlad', text: ' Now, how are we going to integrate them?' },
  { startTime: 984.48, person: 'Vlad', text: " That's not a trivial question." },
  {
    startTime: 987.24,
    person: 'Vlad',
    text: ' And to answer that question, domain driven design provides us with that notion of context mapping.'
  },
  {
    startTime: 992.86,
    person: 'Vlad',
    text: ' Like, how do we map the integration of different contexts?'
  },
  {
    startTime: 996.78,
    person: 'Vlad',
    text: ' And there is a number of patterns that fit different situations.'
  },
  {
    startTime: 1000.6,
    person: 'Vlad',
    text: " Some patterns are for cases when we have, let's say, well-established collaboration between teams in terms of those bounded contexts, and others when, you know, we have some organisational friction between the teams, and we have to address that in our software design."
  },
  {
    startTime: 1018.84,
    person: 'Vlad',
    text: " So, that's overall called context mapping in DDD."
  },
  {
    startTime: 1024.04,
    person: 'Karol',
    text: " For those who want a quick cheat on context mapping, there's a very nice repository on GitHub from DDD crew, and you can have, there's a very nice large picture with a cheat sheet of all those different types of context mapping patterns that we're talking about right now."
  },
  {
    startTime: 1045.68,
    person: 'Karol',
    text: ' So, feel free to scan the code and grab it, or just Google DDD crew context mapping right now, just to have that context for yourself.'
  },
  { startTime: 1058.68, person: 'Karol', text: ' All right.' },
  {
    startTime: 1059.32,
    person: 'Karol',
    text: " Now, if we're looking further, so we had contracts, we have open host service, that's the best case scenario, pretty much, that we can have."
  },
  {
    startTime: 1068.62,
    person: 'Karol',
    text: ' So, the lowest form of contract that we can have here.'
  },
  { startTime: 1072.7, person: 'Karol', text: ' And then, if we go down into the model.' },
  {
    startTime: 1076.08,
    person: 'Karol',
    text: ' So, if I recall my good old days when I was still working with XML, XSDs, and WSDL files, of course, now you can do the same in open API specification.'
  },
  { startTime: 1087.12, person: 'Karol', text: ' We use namespaces, a lot of them.' },
  {
    startTime: 1090.54,
    person: 'Karol',
    text: ' So, if I wanted to have the API definition separated from the actual model that it was underneath, at least the data model, because that data model only composes the part of the model, right?'
  },
  {
    startTime: 1105.46,
    person: 'Karol',
    text: ' Then I use two different namespaces, and I could completely separate them, and the internal data model could be different, could be bigger than the one that was exposed.'
  },
  {
    startTime: 1117.66,
    person: 'Karol',
    text: ' Now, a sin that I did back in the day as a, I believe, junior developer still, when I was still working on integrations very actively, one time I exposed the internal namespace in the API.'
  },
  { startTime: 1132.66, person: 'Karol', text: " And then, let's talk about what happens then." },
  { startTime: 1135.34, person: 'Karol', text: ' What are the consequences of such a exposition?' },
  {
    startTime: 1138.06,
    person: 'Karol',
    text: ' Because then we jump into the model coupling, literally, right?'
  },
  { startTime: 1143.2, person: 'Karol', text: ' So, what are the consequences of this?' },
  {
    startTime: 1146.36,
    person: 'Vlad',
    text: " So, first of all, you're saying you did it by mistake, which naturally puts you in a great position, because I know many people making that on purpose."
  },
  { startTime: 1156.48, person: 'Vlad', text: ' True.' },
  {
    startTime: 1157.9,
    person: 'Karol',
    text: " Now, I was very much aware that this was a mistake, and I managed to fix it four years later, but that's how long it took to fix it."
  },
  { startTime: 1164.9, person: 'Karol', text: ' I see.' },
  {
    startTime: 1165.64,
    person: 'Karol',
    text: ' To find the budget and to actually touch that part of the integration to make it happen, that required a lot of planning with other systems to actually refactor this.'
  },
  { startTime: 1177.2, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 1178.02,
    person: 'Vlad',
    text: " So, here, domain-driven design, first of all, domain-driven design says that once you're exposing your model with distant teams, distant consumers of your API, whenever you will want to change that model, well, you will have to negotiate that change with them, because they have that knowledge."
  },
  {
    startTime: 1201.44,
    person: 'Vlad',
    text: ' They do know what your model looks like, and now you want to change it.'
  },
  {
    startTime: 1205.84,
    person: 'Vlad',
    text: ' So, in order for them to understand the newer version, you have to coordinate that with the second team.'
  },
  {
    startTime: 1211.88,
    person: 'Vlad',
    text: " That's why domain-driven design puts emphasis on protecting that knowledge within bounded context."
  },
  {
    startTime: 1218.54,
    person: 'Vlad',
    text: ' We have open host service, we have anti-corruption layer, which is similar but from the other way around.'
  },
  {
    startTime: 1224.62,
    person: 'Vlad',
    text: " Now, at the same time, and that's the beauty of domain-driven design, this methodology says, but you don't have to be way too strict about that, because there are cases where you can round corners, and that's fine."
  },
  {
    startTime: 1241.3,
    person: 'Vlad',
    text: " For example, let's say that you're implementing like core functionality of the business, something that is the company's core competitive advantage."
  },
  {
    startTime: 1252.94,
    person: 'Vlad',
    text: ' That functionality is the reason why your customers are choosing your solution and not your competitors.'
  },
  {
    startTime: 1261.74,
    person: 'Vlad',
    text: ' Well, in that case, your business will want to optimise that solution to make it better all the time.'
  },
  { startTime: 1268.02, person: 'Vlad', text: ' Why?' },
  {
    startTime: 1268.28,
    person: 'Vlad',
    text: " Because those annoying competitors, they will try to copy whatever you're doing, and you want to stay ahead, so you will have to change frequently."
  },
  {
    startTime: 1275.96,
    person: 'Vlad',
    text: ' So, that model, you want to be able to evolve it as efficiently as possible.'
  },
  {
    startTime: 1282.06,
    person: 'Vlad',
    text: ' On the other hand, there are different business functionalities, which are not truly that interesting from the competitiveness standpoint.'
  },
  {
    startTime: 1290.74,
    person: 'Vlad',
    text: " In DDD lingo, they're called supporting, supporting subdomains."
  },
  { startTime: 1295.42, person: 'Vlad', text: ' This is the stuff that is boring.' },
  { startTime: 1299.52, person: 'Vlad', text: ' And every system has those functionalities.' },
  {
    startTime: 1303.34,
    person: 'Vlad',
    text: " You just have to implement, because you don't have any other choice."
  },
  {
    startTime: 1307.14,
    person: 'Vlad',
    text: ' If there would be an open source on GitHub, you would love to take it and put it in there.'
  },
  {
    startTime: 1312.3,
    person: 'Vlad',
    text: ' But there is no such solution, so you have to, you know, five years ago, I would say, you probably could just outsource that.'
  },
  { startTime: 1322.76, person: 'Vlad', text: " Today, well, cloud, here's what we need." },
  { startTime: 1327.36, person: 'Vlad', text: ' And that would work perfectly.' },
  { startTime: 1329.38, person: 'Vlad', text: ' Why?' },
  {
    startTime: 1329.8,
    person: 'Vlad',
    text: ' Because usually, these boring functionalities are also simple.'
  },
  {
    startTime: 1333.36,
    person: 'Vlad',
    text: ' There is no complexity in the business requirements here.'
  },
  { startTime: 1337.4, person: 'Vlad', text: ' So, cloud, do the job.' },
  { startTime: 1339.98, person: 'Vlad', text: " Let's deploy." },
  { startTime: 1341.02, person: 'Vlad', text: ' Now.' },
  {
    startTime: 1341.56,
    person: 'Karol',
    text: " And on top of being simple, they're quite repetitive most of the time."
  },
  {
    startTime: 1345.5,
    person: 'Karol',
    text: " So, basically, if they're repetitive, then all the lovely LLMs have plenty of source material to learn it."
  },
  {
    startTime: 1353.68,
    person: 'Karol',
    text: " Because they cannot learn core domain functionalities, because that's our business differentiator."
  },
  { startTime: 1359.66, person: 'Karol', text: " So, it's not going to be the same." },
  { startTime: 1361.46, person: 'Karol', text: ' Right?' },
  {
    startTime: 1362.5,
    person: 'Karol',
    text: " And in supporting generic domains, that's plenty of that."
  },
  { startTime: 1367.94, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 1368.88,
    person: 'Vlad',
    text: ' Supporting subdomains, there are usually data entry screens, like those tables that you have to populate, or upload materials, or ETL jobs, like take data from here, do some little manipulation, put it there.'
  },
  { startTime: 1382.7, person: 'Vlad', text: " That's it." },
  {
    startTime: 1383.78,
    person: 'Vlad',
    text: ' Not like a real business algorithm with some business complexity.'
  },
  {
    startTime: 1389.36,
    person: 'Vlad',
    text: ' Now, why is it important in the context of the question you asked previously?'
  },
  { startTime: 1394.8, person: 'Vlad', text: ' Well, this thing, nobody cares about it.' },
  { startTime: 1398.4, person: 'Vlad', text: " It's not going to change frequently." },
  { startTime: 1400.34, person: 'Vlad', text: " So, if you expose that model, that's fine." },
  {
    startTime: 1403.64,
    person: 'Vlad',
    text: ' You are not going to suffer that much compared to the core business functionality.'
  },
  {
    startTime: 1409.66,
    person: 'Vlad',
    text: ' Now, the important thing, however, is to draw the line, to identify the two cases.'
  },
  {
    startTime: 1415.62,
    person: 'Vlad',
    text: " Because again, I've seen companies running that corner, exploiting the models, and that works fine."
  },
  {
    startTime: 1422.7,
    person: 'Vlad',
    text: ' Nobody complains about it, because those are subdomains.'
  },
  { startTime: 1425.54, person: 'Vlad', text: ' So, hey, that works for supporting subdomains.' },
  { startTime: 1428.46, person: 'Vlad', text: " Let's do it for our core business functionality." },
  { startTime: 1430.72, person: 'Vlad', text: ' And guess what?' },
  { startTime: 1432.14, person: 'Vlad', text: ' Nope.' },
  { startTime: 1433.32, person: 'Vlad', text: ' Nope.' },
  { startTime: 1434.1, person: 'Vlad', text: ' Yes.' },
  { startTime: 1434.98, person: 'Karol', text: ' Let me guess.' },
  { startTime: 1436.74, person: 'Karol', text: ' The word would be volatility.' },
  { startTime: 1438.6, person: 'Karol', text: ' Yes.' },
  {
    startTime: 1440.8,
    person: 'Vlad',
    text: ' The volatility, the rate of changes in core subdomain is way higher than supporting subdomain.'
  },
  {
    startTime: 1454,
    person: 'Karol',
    text: ' Talking about subdomains, where would you place an integration platform?'
  },
  { startTime: 1459.16, person: 'Vlad', text: ' An integration platform?' },
  { startTime: 1461.26, person: 'Karol', text: ' Yes.' },
  { startTime: 1462.54, person: 'Karol', text: ' So, ah, okay.' },
  { startTime: 1466.06, person: 'Karol', text: " That's my favourite answer." },
  { startTime: 1467.54, person: 'Karol', text: ' Go on.' },
  { startTime: 1468.72, person: 'Vlad', text: " No, that's it." },
  { startTime: 1469.48, person: 'Vlad', text: " That's the answer." },
  { startTime: 1470.66, person: 'Vlad', text: ' It depends what kind of integration that is.' },
  { startTime: 1473.72, person: 'Vlad', text: ' Because there are integrations that are simple.' },
  {
    startTime: 1476.88,
    person: 'Vlad',
    text: " Like, there's nothing really interesting about it."
  },
  {
    startTime: 1479.92,
    person: 'Vlad',
    text: ' Like, in terms, you at most implement anti-corruption layer.'
  },
  {
    startTime: 1485.16,
    person: 'Vlad',
    text: ' You take the model that is exposed by the upstream, do some modification on top of it, and here you have your data.'
  },
  { startTime: 1492.08, person: 'Vlad', text: " That's it." },
  { startTime: 1493.1, person: 'Vlad', text: ' So, that would be like supporting flavour.' },
  {
    startTime: 1496,
    person: 'Vlad',
    text: " But I've also seen companies that didn't have any core subdomain, like, in its regular sense."
  },
  {
    startTime: 1506.5,
    person: 'Vlad',
    text: ' Like, there is no business algorithms, nothing really interesting.'
  },
  {
    startTime: 1510.14,
    person: 'Vlad',
    text: ' However, the integration magic they did about things that looked unintegratable, that was their competitive advantage.'
  },
  {
    startTime: 1519.46,
    person: 'Vlad',
    text: ' So, in those companies, the integration was their core subdomain.'
  },
  { startTime: 1525.42, person: 'Karol', text: ' Oh, interesting.' },
  {
    startTime: 1526.92,
    person: 'Karol',
    text: ' Because I always consider integration platforms and integration as a field being mostly the supporting subdomain.'
  },
  {
    startTime: 1534.86,
    person: 'Karol',
    text: ' The technology itself is generic, but what we do with that technology as a platform technology and how we build those integrations usually lands in my book in supporting.'
  },
  { startTime: 1546.06, person: 'Karol', text: " That's what I see most of the times." },
  { startTime: 1547.56, person: 'Karol', text: " But that's an interesting view on it." },
  { startTime: 1550.28, person: 'Vlad', text: ' I will give you an example.' },
  { startTime: 1552.22, person: 'Vlad', text: ' All right.' },
  {
    startTime: 1554.32,
    person: 'Vlad',
    text: " So, let's say you're implementing a system that is going to send receipts that you get in a shop as an SMS message."
  },
  {
    startTime: 1565.38,
    person: 'Vlad',
    text: " So, basically, that system does integration of that cashier's computer or cashier's printer and whatever system you're using for sending SMS messages."
  },
  { startTime: 1577.98, person: 'Vlad', text: ' Is it trivial?' },
  { startTime: 1578.96, person: 'Vlad', text: ' Hell no.' },
  { startTime: 1580.46, person: 'Vlad', text: " That's by far not a trivial system." },
  { startTime: 1583.7, person: 'Vlad', text: " That's, like, complexity on top of complexity." },
  { startTime: 1587, person: 'Vlad', text: " But in the heart of it, that's integration." },
  { startTime: 1591.86, person: 'Karol', text: ' Okay.' },
  { startTime: 1592.68, person: 'Karol', text: ' That makes a lot of sense.' },
  {
    startTime: 1594.66,
    person: 'Karol',
    text: ' Going back for a moment to AI, we have a nice question from David, or a colleague from SAP.'
  },
  { startTime: 1603.7, person: 'Karol', text: ' Hello, David from Palo Alto.' },
  { startTime: 1606.34, person: 'Karol', text: " It's nice that you could join us." },
  {
    startTime: 1609.9,
    person: 'Karol',
    text: ' So, to what degree we can teach AI agents about DDD and coupling?'
  },
  { startTime: 1617.64, person: 'Vlad', text: ' Yeah.' },
  { startTime: 1617.88, person: 'Vlad', text: ' Hello, David.' },
  { startTime: 1618.54, person: 'Vlad', text: ' Yeah.' },
  { startTime: 1618.8, person: 'Vlad', text: " That's a great question." },
  {
    startTime: 1620.66,
    person: 'Vlad',
    text: " And the thing is, we shouldn't, at least now, trust whatever those models know about domain driven design and coupling."
  },
  {
    startTime: 1631.15,
    person: 'Vlad',
    text: " Because that's, like, an average answer on Stack Overflow."
  },
  { startTime: 1635.25, person: 'Vlad', text: " That's the level of knowledge." },
  {
    startTime: 1637.49,
    person: 'Vlad',
    text: ' Not the best answer on Stack Overflow, the average one.'
  },
  {
    startTime: 1641.03,
    person: 'Vlad',
    text: ' Which is kind of, on Stack Overflow, you can see people saying domain driven design is about buying effective domain names.'
  },
  { startTime: 1650.4, person: 'Vlad', text: " Now, I'll tell you what works best for me." },
  {
    startTime: 1654.98,
    person: 'Vlad',
    text: ' And like with people, teaching the theory, but showing examples.'
  },
  { startTime: 1661.4, person: 'Vlad', text: ' Like, here is what I mean by an aggregate.' },
  {
    startTime: 1665.68,
    person: 'Vlad',
    text: " And sorry, I'm going towards lower levels of abstraction."
  },
  { startTime: 1669.68, person: 'Vlad', text: ' But I have to now.' },
  { startTime: 1672.26, person: 'Vlad', text: ' Yeah.' },
  { startTime: 1673.36, person: 'Vlad', text: ' So, an aggregate.' },
  {
    startTime: 1674.82,
    person: 'Vlad',
    text: ' If you ask it to implement an aggregate, it will do something.'
  },
  {
    startTime: 1680.62,
    person: 'Vlad',
    text: ' Is it going to be like a proper domain driven design aggregate?'
  },
  { startTime: 1683.52, person: 'Vlad', text: ' Who knows.' },
  { startTime: 1684.3, person: 'Vlad', text: ' So, give it examples.' },
  { startTime: 1685.88, person: 'Vlad', text: ' And that works.' },
  { startTime: 1687.26, person: 'Vlad', text: ' Coupling, same story.' },
  {
    startTime: 1689.26,
    person: 'Vlad',
    text: ' A friend of mine, Gregor, showed me as a repository with cloud skills.'
  },
  { startTime: 1698.42, person: 'Vlad', text: ' And one of them is about evaluating modularity.' },
  {
    startTime: 1702.96,
    person: 'Vlad',
    text: ' And for that, he uses the balanced coupling model.'
  },
  {
    startTime: 1705.08,
    person: 'Vlad',
    text: ' So, he teaches the model to reason in terms of balanced coupling.'
  },
  {
    startTime: 1712.5,
    person: 'Vlad',
    text: ' He says that what works for him is first iteration, first implementation of a codebase, do something that works.'
  },
  {
    startTime: 1721.68,
    person: 'Vlad',
    text: ' And then use my skills to evaluate the problems in the design and improve it over time.'
  },
  {
    startTime: 1728.24,
    person: 'Vlad',
    text: ' So, after, like, three or four iterations of improvement of refactoring, he says that the codebase looks almost as if he wrote it.'
  },
  { startTime: 1739.84, person: 'Vlad', text: ' So, yeah.' },
  { startTime: 1742.22, person: 'Vlad', text: ' I would say, David, yeah, you can teach them.' },
  {
    startTime: 1745.68,
    person: 'Karol',
    text: ' So, basically, fine tuning or context engineering with giving examples, as David here comments further on the matter.'
  },
  {
    startTime: 1756,
    person: 'Karol',
    text: ' When I use gen AI for a number of things, that usually is the approach to engineer the context and then provide examples, what I mean by specific terms.'
  },
  { startTime: 1768.94, person: 'Karol', text: ' And that really speeds up work at times.' },
  { startTime: 1772.62, person: 'Karol', text: ' Not always.' },
  { startTime: 1773.6, person: 'Karol', text: ' Because, like you said, average answer.' },
  {
    startTime: 1775.36,
    person: 'Karol',
    text: ' Not the best answer, but the average Stack Overflow answer.'
  },
  {
    startTime: 1778.7,
    person: 'Karol',
    text: " And in terms of the field of integration architecture, that's the average answer is way below the norm I would consider average, because AI just didn't have materials to learn from."
  },
  {
    startTime: 1791.88,
    person: 'Karol',
    text: " And that's a completely different problem in that space."
  },
  { startTime: 1796.14, person: 'Karol', text: ' All right.' },
  {
    startTime: 1796.42,
    person: 'Karol',
    text: ' Going back to our REST API that we started with.'
  },
  { startTime: 1801.36, person: 'Karol', text: ' So, okay.' },
  { startTime: 1801.74, person: 'Karol', text: ' We had model coupling.' },
  { startTime: 1803.3, person: 'Karol', text: ' So, we exposed the exact same model.' },
  {
    startTime: 1804.94,
    person: 'Karol',
    text: ' So, we create that brittleness that every time we change the model, we impact our consumers.'
  },
  { startTime: 1811.7, person: 'Karol', text: ' Which is a problem on its own.' },
  { startTime: 1814.58, person: 'Karol', text: ' Now, with an example of a functional coupling.' },
  {
    startTime: 1818.4,
    person: 'Karol',
    text: " And in my head, when I listen to you explaining functional coupling, I instantly it's popped into my head a API where there were optional elements."
  },
  {
    startTime: 1832.12,
    person: 'Karol',
    text: " But because the structure of the API is very poorly designed, for example, it's a flat structure with optional elements."
  },
  {
    startTime: 1840.85,
    person: 'Karol',
    text: " But there are dependencies between different elements that some elements need to exist, coexist with one another when you call, even though they're optional."
  },
  { startTime: 1849.79, person: 'Karol', text: " And it's nowhere described." },
  {
    startTime: 1851.67,
    person: 'Karol',
    text: ' So, would that constitute the level of knowledge about the system and the implementation of said API to be already functional coupling?'
  },
  {
    startTime: 1861.95,
    person: 'Karol',
    text: ' That I need to know how that system behaves underneath and what data does it really expect to work?'
  },
  {
    startTime: 1867.41,
    person: 'Karol',
    text: " Otherwise, it will return me an error that it's missing an element, even though all the elements were optional."
  },
  { startTime: 1874.61, person: 'Vlad', text: " Well, that's an interesting question." },
  { startTime: 1877.17, person: 'Vlad', text: " That's an interesting question." },
  {
    startTime: 1878.69,
    person: 'Vlad',
    text: " So, if you have an API that is not explicit, what you're describing is a very implicit API."
  },
  { startTime: 1885.13, person: 'Karol', text: ' True.' },
  { startTime: 1888.11, person: 'Vlad', text: ' Now...' },
  { startTime: 1888.63, person: 'Karol', text: " Many of these I've seen." },
  { startTime: 1892.01, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 1893.55,
    person: 'Vlad',
    text: ' What I like to use for evaluating the complexity of or implicitness or explicitness of a contract, integration contract, or a model coupling is the static model.'
  },
  {
    startTime: 1911.47,
    person: 'Vlad',
    text: ' So, Kinesans is a scale of evaluating components in object-orientated code.'
  },
  {
    startTime: 1919.11,
    person: 'Vlad',
    text: ' That was the main goal at the time that model was introduced in the 90s.'
  },
  {
    startTime: 1925.35,
    person: 'Vlad',
    text: ' And it has a number of levels, and all of them basically describe, okay, we have two components, one depends on the other, what the downstream needs to know about the upstream.'
  },
  {
    startTime: 1938.05,
    person: 'Vlad',
    text: " Does it have to know just the name, let's say, of a method or parameter?"
  },
  { startTime: 1942.19, person: 'Vlad', text: ' Does it have to know the type?' },
  {
    startTime: 1944.73,
    person: 'Vlad',
    text: " If, let's say, a number has like magic value attached to it, like you pass seven, and that seven means not number seven, but order of status completed."
  },
  { startTime: 1956.41, person: 'Vlad', text: ' So, specific meaning.' },
  { startTime: 1958.43, person: 'Vlad', text: ' That is also part of that model.' },
  {
    startTime: 1961.39,
    person: 'Vlad',
    text: ' And the next level is, it has a very misleading name.'
  },
  { startTime: 1965.47, person: 'Vlad', text: " It's called Kinesis of algorithm." },
  {
    startTime: 1968.71,
    person: 'Vlad',
    text: ' And this one is actually about those quirks that you have with implicit interfaces.'
  },
  {
    startTime: 1977.43,
    person: 'Vlad',
    text: ' And it kind of reminds me of that one, I would say.'
  },
  {
    startTime: 1981.67,
    person: 'Vlad',
    text: ' And that puts us either in integration contract, contract coupling, or model coupling, not functional coupling.'
  },
  {
    startTime: 1989.91,
    person: 'Vlad',
    text: " So, functional coupling, it's not about functional coupling, it's not about the data structures."
  },
  {
    startTime: 2001.01,
    person: 'Vlad',
    text: " It's about the behaviour of a system, something, the behaviour that it implements, and the knowledge about that is being shared with a downstream consumer."
  },
  {
    startTime: 2013.07,
    person: 'Vlad',
    text: " Now, when we're talking about this level of abstraction, luckily, luckily, examples of this level of coupling are not that common."
  },
  { startTime: 2022.91, person: 'Vlad', text: ' But, we still have them.' },
  {
    startTime: 2025.23,
    person: 'Karol',
    text: " So, I just pulled this out of O'Reilly straight from your book."
  },
  {
    startTime: 2031.05,
    person: 'Karol',
    text: ' So, these are the levels of coupling, and then the Kinesis of name, type, meaning, algorithm, and position.'
  },
  {
    startTime: 2040.93,
    person: 'Karol',
    text: " So, where algorithm is here in the contract coupling, then if we're talking about functional coupling, then it's a different set of Kinesis."
  },
  {
    startTime: 2052.469,
    person: 'Vlad',
    text: " Yeah, but pay attention that static Kinesis, it's used for degrees of contract coupling, but also of model coupling."
  },
  { startTime: 2060.75, person: 'Vlad', text: " So, it's all about the intent." },
  {
    startTime: 2063.11,
    person: 'Vlad',
    text: ' Kinesis on its own, it communicates, okay, what type of, from the technical perspective, what do I need to know?'
  },
  {
    startTime: 2071.15,
    person: 'Vlad',
    text: " Now, with that differentiation between contract and model coupling, we're saying not only technically, but business-wise, what that term or what that piece of knowledge means."
  },
  {
    startTime: 2081.909,
    person: 'Vlad',
    text: ' Does it belong to an integration model or the implementation model?'
  },
  {
    startTime: 2086.79,
    person: 'Karol',
    text: " Right, and this is why in contract coupling, we also have the Kinesis of meaning, because I think it's worthwhile to mention that, first of all, coupling is a spectrum, as we see here on the shown diagram, but also it's not that all coupling is bad."
  },
  {
    startTime: 2104.93,
    person: 'Karol',
    text: " There are types of coupling that are actually very much wanted, like contract coupling and the Kinesis of meaning in that contract coupling, because without it, we wouldn't be able to do any business over APIs."
  },
  {
    startTime: 2117.21,
    person: 'Vlad',
    text: ' Yeah, actually, I would even argue that there is no bad level of integration strength.'
  },
  { startTime: 2126.67, person: 'Vlad', text: ' So, this model, I call it integration strength.' },
  { startTime: 2129.11, person: 'Vlad', text: ' It describes different levels of knowledge.' },
  {
    startTime: 2131.75,
    person: 'Vlad',
    text: " Now, even when we're looking at that big one on the right-hand side, intrusive coupling, we can still find examples of scenarios in which that is going to be the effective design."
  },
  {
    startTime: 2147.09,
    person: 'Vlad',
    text: " So, I wouldn't, well, I hear people label like this is, this level of Kinesis is the bad one, you have to avoid it."
  },
  {
    startTime: 2156.19,
    person: 'Karol',
    text: " Yeah, it may be wanted or unwanted, but then it depends on the context we're in, right, because sometimes it will be very much wanted."
  },
  {
    startTime: 2166.77,
    person: 'Karol',
    text: ' In my world, when I do application integration between various domain systems, I usually want to limit myself to contract coupling.'
  },
  {
    startTime: 2176.97,
    person: 'Karol',
    text: " But this is on a very large distance, and I don't want to share that knowledge over large distances."
  },
  {
    startTime: 2182.93,
    person: 'Karol',
    text: " But if I would be doing, I don't know, a small application over my Google workspace, because I automate the hell out of my Google workspace, then intrusive coupling is perfectly fine in that case, from my perspective."
  },
  { startTime: 2198.73, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 2199.41,
    person: 'Vlad',
    text: ' So, as you said, it depends on the distance, the physical distance between coupled components.'
  },
  {
    startTime: 2204.95,
    person: 'Vlad',
    text: " If it's a big one, yes, like in your example of systems, you want to minimise the shared knowledge."
  },
  {
    startTime: 2211.81,
    person: 'Vlad',
    text: ' Unless, as we mentioned previously, the upstream, the source of knowledge, is not going to be volatile.'
  },
  { startTime: 2217.83, person: 'Vlad', text: ' It is not going to change.' },
  {
    startTime: 2220.09,
    person: 'Vlad',
    text: ' In that case, if that will free up time and effort that you can invest in core business, invest it there.'
  },
  {
    startTime: 2230.83,
    person: 'Vlad',
    text: ' Just the simplest thing here, where volatility is low.'
  },
  {
    startTime: 2236.05,
    person: 'Vlad',
    text: ' Now, I still have it on my stack, your question about functional coupling.'
  },
  { startTime: 2242.73, person: 'Karol', text: " Let's get back to it." },
  { startTime: 2244.01, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 2245.05,
    person: 'Vlad',
    text: " So, let's imagine you have, you're exposing an API."
  },
  { startTime: 2251.51, person: 'Vlad', text: ' And that API receives some field.' },
  {
    startTime: 2258.65,
    person: 'Vlad',
    text: ' And that field has some non-trivial validation rule.'
  },
  { startTime: 2270.65, person: 'Vlad', text: " Maybe it's, you know what?" },
  { startTime: 2279.77, person: 'Vlad', text: ' Email.' },
  { startTime: 2281.45, person: 'Vlad', text: ' Like, simple email.' },
  { startTime: 2282.83, person: 'Vlad', text: ' So, we have an email that should be passed.' },
  {
    startTime: 2285.33,
    person: 'Vlad',
    text: ' However, internally, only Google email addresses are supported.'
  },
  {
    startTime: 2291.13,
    person: 'Vlad',
    text: " So, maybe they're ending with Gmail, or maybe it's Google for domains."
  },
  { startTime: 2295.21, person: 'Vlad', text: " I don't know." },
  { startTime: 2296.05, person: 'Vlad', text: ' I encountered that.' },
  {
    startTime: 2297.49,
    person: 'Vlad',
    text: ' So, the API looks like, okay, I can pass any email, but only Gmail works.'
  },
  {
    startTime: 2303.85,
    person: 'Vlad',
    text: " Now, whenever that internal implementation will change, if they add support for, I don't know, Microsoft Live emails, that's going to affect the functionality that can be implemented by the consumer."
  },
  {
    startTime: 2317.07,
    person: 'Vlad',
    text: " So, that's kind of borderline example of functional coupling."
  },
  {
    startTime: 2320.41,
    person: 'Vlad',
    text: ' Now, we can take it, the same example, in different context, can be even contract coupling.'
  },
  {
    startTime: 2326.61,
    person: 'Vlad',
    text: " But the case that I'm basing it on, like, real life case, that was an example of because I'll explain."
  },
  {
    startTime: 2336.95,
    person: 'Vlad',
    text: ' The consumer had to support the same platforms implemented by the upstream.'
  },
  { startTime: 2343.89, person: 'Karol', text: ' That I actually seen that in practise.' },
  { startTime: 2349.75, person: 'Karol', text: ' Only the other way around.' },
  { startTime: 2351.45, person: 'Karol', text: " It's not about having a specific platform." },
  { startTime: 2354.07, person: 'Karol', text: " It's excluding a specific platform." },
  { startTime: 2356.47, person: 'Vlad', text: ' Oh, even worse.' },
  { startTime: 2357.57, person: 'Vlad', text: ' Okay.' },
  { startTime: 2357.93, person: 'Vlad', text: ' Even worse.' },
  {
    startTime: 2358.65,
    person: 'Karol',
    text: ' Because I remember registering for a trial account with one technology.'
  },
  {
    startTime: 2366.51,
    person: 'Karol',
    text: ' And to register, and that technology also, when you register to the academy, they offered certifications for free.'
  },
  { startTime: 2374.27, person: 'Karol', text: ' Which was very lucrative.' },
  {
    startTime: 2376.17,
    person: 'Karol',
    text: ' But because they had too many people registering, just to get the certifications for free, and they cheated the hell out of the certifications because they were not proctored, so they decided that they allow registration only with company emails.'
  },
  {
    startTime: 2393.03,
    person: 'Karol',
    text: " So, if you have the popular email, like Gmail, Hotmail, or any other this kind of an extension that is a common extension from a public email service, then you couldn't register."
  },
  {
    startTime: 2407.63,
    person: 'Karol',
    text: ' So, that you fill out the form, you call the API, and the API says, sorry, you cannot register.'
  },
  {
    startTime: 2414.39,
    person: 'Karol',
    text: " So, I think that's an example also of the functional coupling in that sense."
  },
  {
    startTime: 2421.71,
    person: 'Karol',
    text: ' Because then the form actually, the frontend had to implement specific error handling to handle that somebody sent in the data that are not validated.'
  },
  {
    startTime: 2430.39,
    person: 'Karol',
    text: " But they didn't implement any validation on the form itself."
  },
  { startTime: 2433.45, person: 'Karol', text: ' Which was interesting.' },
  { startTime: 2435.71, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 2436.39,
    person: 'Vlad',
    text: ' Again, examples of functional coupling on that level of abstraction are pretty rare.'
  },
  { startTime: 2442.01, person: 'Vlad', text: ' But again, they exist.' },
  {
    startTime: 2445.33,
    person: 'Vlad',
    text: ' If we get back to my second favourite topic, domain driven design, then we have, like, a pattern.'
  },
  { startTime: 2454.51, person: 'Vlad', text: ' Not an entire pattern.' },
  { startTime: 2455.71, person: 'Vlad', text: ' A pattern.' },
  {
    startTime: 2456.45,
    person: 'Vlad',
    text: ' In domain driven design, specifically, that teaches you how to do it.'
  },
  {
    startTime: 2461.01,
    person: 'Vlad',
    text: ' How to implement functional coupling on that level of abstraction.'
  },
  {
    startTime: 2465.55,
    person: 'Vlad',
    text: ' And people who are familiar with domain driven design may already figure that out.'
  },
  { startTime: 2470.99, person: 'Vlad', text: ' That separate waste pattern.' },
  {
    startTime: 2473.49,
    person: 'Vlad',
    text: " That's the case of you have two bounded contexts that are owned by different teams."
  },
  {
    startTime: 2479.39,
    person: 'Vlad',
    text: ' And people in these teams, maybe they hate each other.'
  },
  { startTime: 2484.65, person: 'Vlad', text: ' Maybe they locate it in different time zones.' },
  {
    startTime: 2488.49,
    person: 'Vlad',
    text: ' Or for any other reason, they cannot collaborate.'
  },
  {
    startTime: 2492.29,
    person: 'Vlad',
    text: " So, the idea says, okay, in some cases, don't force them to collaborate."
  },
  {
    startTime: 2497.57,
    person: 'Vlad',
    text: ' Instead, just let them duplicate their own functionality.'
  },
  {
    startTime: 2501.15,
    person: 'Vlad',
    text: " As long as that functionality doesn't block the core subdomain."
  },
  { startTime: 2505.65, person: 'Vlad', text: " In that case, that's going to be a pain." },
  {
    startTime: 2507.57,
    person: 'Vlad',
    text: " If it's generic, if that's supporting, let them do it."
  },
  { startTime: 2510.53, person: 'Vlad', text: " We'll have functional coupling." },
  {
    startTime: 2513.56,
    person: 'Karol',
    text: " And this is where Conway's law comes to play a lot."
  },
  {
    startTime: 2519.02,
    person: 'Karol',
    text: ' So, that we organise our architecture according to the team composition, not the other way around.'
  },
  {
    startTime: 2525.52,
    person: 'Karol',
    text: " That's where a lot of other things come to play where we actually, especially in large corporate environments, when there is a lack of communication between different departments, different lines of services."
  },
  { startTime: 2538.34, person: 'Karol', text: ' And we get shadow ITs.' },
  { startTime: 2540.32, person: 'Karol', text: ' And then we have those separate ways.' },
  {
    startTime: 2542.16,
    person: 'Karol',
    text: " Not only because people hate each other, but because they just don't know that they exist."
  },
  { startTime: 2548.64, person: 'Karol', text: ' And this is a lovely mess.' },
  { startTime: 2551.58, person: 'Vlad', text: " That's a dangerous mess." },
  {
    startTime: 2553.18,
    person: 'Vlad',
    text: ' In that case, they can end up duplicating core subdomains.'
  },
  {
    startTime: 2560.52,
    person: 'Karol',
    text: " I don't believe I've ever seen that, but you're absolutely right that this could be a non-trivial risk."
  },
  { startTime: 2569.16, person: 'Karol', text: ' That would be hellish to dismantle.' },
  { startTime: 2575.54, person: 'Karol', text: ' Now, okay.' },
  {
    startTime: 2576.44,
    person: 'Karol',
    text: " If we're looking at functional coupling or even intrusive coupling that is"
  },
  {
    startTime: 2581.9,
    person: 'Karol',
    text: ' unwanted, and if we mitigate by having separate ways, or we have that shadow IT,'
  },
  {
    startTime: 2590.48,
    person: 'Karol',
    text: ' looking at domain-driven design and looking at coupling problems, especially the invisible'
  },
  {
    startTime: 2597.92,
    person: 'Karol',
    text: ' coupling, because there is a kind of coupling that is not visible, especially if we have'
  },
  {
    startTime: 2601.9,
    person: 'Karol',
    text: ' two or three teams implementing the same functionalities,'
  },
  {
    startTime: 2608.32,
    person: 'Karol',
    text: ' maybe not knowing about each other, then how to even get into that and try to dismantle that?'
  },
  {
    startTime: 2615.82,
    person: 'Karol',
    text: " Especially that this kind of pathological coupling, it's very, very hard to identify."
  },
  { startTime: 2622.59, person: 'Vlad', text: ' Yeah.' },
  { startTime: 2623.03, person: 'Vlad', text: ' Yeah.' },
  { startTime: 2623.39, person: 'Vlad', text: ' It is very hard to identify.' },
  {
    startTime: 2627.4,
    person: 'Vlad',
    text: ' And as Eric Evans said years ago, not all of large systems are going to be well-designed.'
  },
  {
    startTime: 2635.88,
    person: 'Vlad',
    text: " That's something that we have to just understand, agree, and live with that."
  },
  { startTime: 2642.44, person: 'Vlad', text: " That's a rule of life." },
  {
    startTime: 2644.1,
    person: 'Vlad',
    text: " There will be entropy somewhere in the system, but with domain-driven design, what we can do is we can steer that entropy to parts of that system that don't really matter, like supporting subdomains or ex-subdomains."
  },
  { startTime: 2658.3, person: 'Vlad', text: " If we can do it, that's it." },
  {
    startTime: 2660.38,
    person: 'Vlad',
    text: ' We did our job as designers, as architects, whatever.'
  },
  {
    startTime: 2666.44,
    person: 'Vlad',
    text: ' So, going back to your question, how do we dismantle it?'
  },
  {
    startTime: 2670,
    person: 'Vlad',
    text: " I would say that that's my first answer when people ask me about domain-driven design."
  },
  { startTime: 2675.4, person: 'Vlad', text: ' How do I introduce it?' },
  {
    startTime: 2676.88,
    person: 'Vlad',
    text: " We have that system, its legacy, it's been implemented for X amount of years."
  },
  { startTime: 2683.3, person: 'Vlad', text: ' And we have turnover of engineers.' },
  { startTime: 2686.62, person: 'Vlad', text: ' What do we do now?' },
  {
    startTime: 2688.44,
    person: 'Vlad',
    text: ' Well, you are not going to tell Cloud to rewrite it and make it perfect.'
  },
  {
    startTime: 2694.02,
    person: 'Vlad',
    text: ' Like, hey, Cloud, I want this to be domain-driven design.'
  },
  { startTime: 2697.7, person: 'Vlad', text: ' Go ahead.' },
  { startTime: 2699.44, person: 'Vlad', text: " Or even Ralph, it's not going to work." },
  {
    startTime: 2703.16,
    person: 'Vlad',
    text: ' So, instead, what we need to do is to identify pain.'
  },
  {
    startTime: 2708.18,
    person: 'Vlad',
    text: ' Now, that can sound funny, like pain in the system.'
  },
  { startTime: 2712.06, person: 'Vlad', text: " Well, I'm that serious." },
  {
    startTime: 2714.66,
    person: 'Vlad',
    text: " And identifying pain is important and it can also be difficult, because in those types of companies, people get used to pain, so they don't feel it anymore."
  },
  {
    startTime: 2727.28,
    person: 'Vlad',
    text: " They're like, okay, yes, so I want to change the colour of a button and it's going to break something in that team."
  },
  { startTime: 2734, person: 'Vlad', text: ' And yeah, I have to do that first.' },
  {
    startTime: 2736.84,
    person: 'Vlad',
    text: " I've been doing it for years, yeah, and I'll do it for another year."
  },
  { startTime: 2741.06, person: 'Vlad', text: " So, that's integration pain." },
  { startTime: 2743.94, person: 'Vlad', text: ' But people are not noticing it.' },
  {
    startTime: 2747.52,
    person: 'Vlad',
    text: ' So, as an external consultant, I believe that our goal is to identify, help them identify those pain points to make them as explicit as possible.'
  },
  {
    startTime: 2759.58,
    person: 'Vlad',
    text: ' To get an agreement that, hey, you have a problem here.'
  },
  { startTime: 2762.62, person: 'Vlad', text: " That's something that makes you less effective." },
  {
    startTime: 2765.2,
    person: 'Vlad',
    text: ' And once you have that agreement on the problem, well, we can discuss an agreement on a solution, how to change it.'
  },
  { startTime: 2773.76, person: 'Vlad', text: ' Now, change that depends.' },
  { startTime: 2776.2, person: 'Vlad', text: ' Some people are scared of domain-driven design.' },
  { startTime: 2778.86, person: 'Vlad', text: ' Nothing you can do about it.' },
  {
    startTime: 2780.2,
    person: 'Vlad',
    text: ' People hear domain-driven design, they hear complexity, bound of context, aggregates.'
  },
  {
    startTime: 2790.32,
    person: 'Karol',
    text: ' I think a lot of people are scared of the word complexity or the word governance.'
  },
  {
    startTime: 2798.94,
    person: 'Karol',
    text: " And it's like, they hear governance, you start talking about, okay, we need to implement some sort of governance over this."
  },
  { startTime: 2805.84, person: 'Karol', text: ' And they go like, no, no, no, no, no.' },
  { startTime: 2808.84, person: 'Karol', text: " We don't need more governance." },
  {
    startTime: 2811.12,
    person: 'Karol',
    text: " And it's not that they don't need governance, they just didn't have good governance over things, they just had the management."
  },
  { startTime: 2818.84, person: 'Karol', text: ' Yeah.' },
  { startTime: 2819.78, person: 'Vlad', text: ' Yeah, so, people have different traumas.' },
  {
    startTime: 2823.1,
    person: 'Vlad',
    text: ' We have to adapt the solution we are proposing not to trigger their traumas, their PTSDs.'
  },
  {
    startTime: 2829.66,
    person: 'Vlad',
    text: " And if people are afraid of domain-driven design, well, that's fine."
  },
  { startTime: 2833.02, person: 'Vlad', text: ' I can talk to you in terms of coupling.' },
  {
    startTime: 2834.92,
    person: 'Vlad',
    text: ' So, we have here a model that travels long distance and its source is volatile.'
  },
  { startTime: 2840, person: 'Vlad', text: ' What can we do about it?' },
  { startTime: 2841.62, person: 'Vlad', text: ' Can we make the source less volatile?' },
  { startTime: 2843.34, person: 'Vlad', text: ' Yes or no?' },
  { startTime: 2844.24, person: 'Vlad', text: ' No?' },
  { startTime: 2844.68, person: 'Vlad', text: ' Okay.' },
  { startTime: 2845.16, person: 'Vlad', text: " So, let's shorten the distance." },
  { startTime: 2847.7, person: 'Vlad', text: ' Or maybe we can reduce the knowledge.' },
  { startTime: 2850.38, person: 'Vlad', text: ' If not, shorten the distance.' },
  { startTime: 2854, person: 'Vlad', text: " That's the coupling terminology." },
  { startTime: 2855.96, person: 'Vlad', text: ' I love it because of its effectiveness.' },
  {
    startTime: 2858.48,
    person: 'Vlad',
    text: " Now, domain-driven design, if they're not afraid of it, okay, let's talk about models."
  },
  { startTime: 2863.98, person: 'Vlad', text: " Like, what's going on?" },
  { startTime: 2865.62, person: 'Vlad', text: ' Why do we have those, maybe, cascading changes?' },
  { startTime: 2871.68, person: 'Vlad', text: ' Maybe we have coordination issues.' },
  { startTime: 2873.78, person: 'Vlad', text: ' Maybe we have constant friction between teams.' },
  {
    startTime: 2877.02,
    person: 'Vlad',
    text: ' All those issues can be addressed by picking the right DDD pattern.'
  },
  {
    startTime: 2882.3,
    person: 'Vlad',
    text: " And again, you don't have to refactor the whole thing."
  },
  {
    startTime: 2885.72,
    person: 'Vlad',
    text: ' Just identify strategic areas that really, really beg for improvement.'
  },
  { startTime: 2892.5, person: 'Vlad', text: ' Prove them.' },
  {
    startTime: 2893.7,
    person: 'Vlad',
    text: ' Like, do the 20% of work that will bring you 80% of the value.'
  },
  {
    startTime: 2899.68,
    person: 'Karol',
    text: ' But for that, you need to really identify them and model them out, right?'
  },
  {
    startTime: 2905.42,
    person: 'Karol',
    text: ' So, which of the tools available would you use to identify, to do that discovery?'
  },
  { startTime: 2915.92, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 2916.86,
    person: 'Vlad',
    text: " So, there is one tool and it's the hardest, at least for me, because I'm an introvert and that's talking to people."
  },
  {
    startTime: 2926.69,
    person: 'Vlad',
    text: ' Like, having those conversations, like really understanding what annoys you, what makes you less effective, what are the frictions.'
  },
  {
    startTime: 2934.33,
    person: 'Vlad',
    text: ' And sometimes people are afraid to tell you because politics.'
  },
  {
    startTime: 2939.91,
    person: 'Vlad',
    text: " They don't want to sound like the one who complains about everything."
  },
  { startTime: 2944.61, person: 'Vlad', text: ' So, yeah.' },
  { startTime: 2946.57, person: 'Vlad', text: ' I try to figure it out.' },
  { startTime: 2949.79, person: 'Vlad', text: ' Exactly.' },
  { startTime: 2951.79, person: 'Vlad', text: ' Yeah.' },
  { startTime: 2953.31, person: 'Karol', text: ' And then Philip continues.' },
  {
    startTime: 2956.83,
    person: 'Karol',
    text: " If you're here for the first time, you have to model."
  },
  { startTime: 2963.43, person: 'Karol', text: ' Fight for the win.' },
  {
    startTime: 2965.57,
    person: 'Karol',
    text: " Yeah, but Philip is my co-author of the DDD training and he's very versed in DDD and he's a DDD coach."
  },
  {
    startTime: 2974.25,
    person: 'Karol',
    text: ' So, he can be a smarty pants about it in comments because he went through all those dramas related to domain discovery, et cetera, going into event storming and using those tools on a lot of conversations.'
  },
  { startTime: 2990.95, person: 'Karol', text: " And you're right." },
  {
    startTime: 2991.47,
    person: 'Karol',
    text: " This is, yeah, for an introvert, that's definitely something that may be problematic."
  },
  {
    startTime: 2997.11,
    person: 'Karol',
    text: " And I'm not the one to enjoy these conversations always myself."
  },
  {
    startTime: 3003.08,
    person: 'Karol',
    text: ' I do instigate them often, but sometimes they can be very, very difficult.'
  },
  { startTime: 3010.74, person: 'Karol', text: " That's very true." },
  {
    startTime: 3012.64,
    person: 'Karol',
    text: " Because literally when we were doing that domain discovery, we're touching the really painful parts."
  },
  { startTime: 3021.18, person: 'Karol', text: " That's what I see at least." },
  {
    startTime: 3024.54,
    person: 'Karol',
    text: ' And speaking about the painful parts, can you tell us a little bit about the sociotechnical and social organisational aspects of coupling?'
  },
  {
    startTime: 3037.52,
    person: 'Karol',
    text: ' Because I think these are the parts of coupling that very few people talk about.'
  },
  {
    startTime: 3043.34,
    person: 'Karol',
    text: ' And I know that you have plenty of stories on that to explain that and tell us how this actually works because they are also, in my opinion, very relevant, not only for interoperability topics of integration architecture, but for running a company and actually using domain systems to run the company and do business.'
  },
  { startTime: 3066.56, person: 'Vlad', text: ' Yeah.' },
  { startTime: 3067.36, person: 'Vlad', text: ' Yeah.' },
  { startTime: 3067.62, person: 'Vlad', text: " That's a great question." },
  { startTime: 3068.76, person: 'Vlad', text: ' It takes us back to the notion of distance.' },
  { startTime: 3072.1, person: 'Vlad', text: ' Okay.' },
  {
    startTime: 3072.62,
    person: 'Vlad',
    text: ' So we have knowledge that travels from component A from the upstream to component B, the downstream.'
  },
  {
    startTime: 3079.36,
    person: 'Vlad',
    text: ' Now, what is the distance that is being travelled by that knowledge?'
  },
  {
    startTime: 3085.32,
    person: 'Vlad',
    text: ' If they are close to each other, maybe within the same module, maybe even within the same file, the distance is low.'
  },
  {
    startTime: 3092.18,
    person: 'Vlad',
    text: " If you have to change them simultaneously, that's going to be easy."
  },
  { startTime: 3095.08, person: 'Vlad', text: " Like they're close to each other." },
  { startTime: 3096.76, person: 'Vlad', text: " It's almost like modifying one thing." },
  {
    startTime: 3098.96,
    person: 'Vlad',
    text: " On the other hand, we have, let's say, the other extreme that you mentioned."
  },
  {
    startTime: 3103.22,
    person: 'Vlad',
    text: ' We have two systems or maybe two services in an enterprise company.'
  },
  {
    startTime: 3111.2,
    person: 'Vlad',
    text: ' Now, those two services are different code bases, different projects, different repositories probably.'
  },
  {
    startTime: 3120.56,
    person: 'Vlad',
    text: ' And if they have to change simultaneously, then, well, now you have some effort that you need to invest to make the change happen, because you have to coordinate that change across that distance, across those components.'
  },
  { startTime: 3138.24, person: 'Vlad', text: ' And of course, that also induces cognitive load.' },
  {
    startTime: 3142.9,
    person: 'Vlad',
    text: ' It makes it easy to forget that there is that distant part of the system that has to change as well.'
  },
  {
    startTime: 3147.68,
    person: 'Vlad',
    text: ' So you will just change what you remember of, deploy it, and see the fireworks when you deploy to production.'
  },
  { startTime: 3156.6, person: 'Vlad', text: " Now, that's the technical aspect of it." },
  {
    startTime: 3160.9,
    person: 'Vlad',
    text: ' And as with everything in our job, things become more complicated because of people.'
  },
  { startTime: 3167.3, person: 'Vlad', text: " Now, let's introduce people into that equation." },
  {
    startTime: 3171.7,
    person: 'Vlad',
    text: " So we have, let's say, two bounded contexts, being integrated, sharing knowledge, sharing lots of knowledge, and they have to co-evolve."
  },
  { startTime: 3182.22, person: 'Vlad', text: ' For reasons.' },
  {
    startTime: 3183.3,
    person: 'Vlad',
    text: " Let's say that they are sharing knowledge of model."
  },
  {
    startTime: 3187.04,
    person: 'Vlad',
    text: " Kind of no-no in DDD world, but let's say that that's our scenario."
  },
  {
    startTime: 3191.08,
    person: 'Vlad',
    text: ' We have two bounded contexts, model coupled to each other.'
  },
  {
    startTime: 3195.16,
    person: 'Vlad',
    text: ' The model changes one, the second one has to implement the corresponding change as well.'
  },
  { startTime: 3200.64, person: 'Vlad', text: ' Guess what?' },
  {
    startTime: 3202.12,
    person: 'Vlad',
    text: " Although that sounds like a no-no in domain driven design, in domain driven design, that's actually an integration pattern, part of context mapping."
  },
  { startTime: 3211.4, person: 'Vlad', text: " That's called partnership." },
  {
    startTime: 3213.78,
    person: 'Vlad',
    text: ' In partnership, two teams implement ad hoc integration.'
  },
  { startTime: 3219.86, person: 'Vlad', text: ' They just integrate somehow.' },
  {
    startTime: 3222.26,
    person: 'Vlad',
    text: " Whenever that integration doesn't work, they will resolve that integration issue through collaboration, through conversations, through helping each other."
  },
  { startTime: 3234.86, person: 'Vlad', text: ' Now, when that pattern is not going to work?' },
  {
    startTime: 3238.76,
    person: 'Vlad',
    text: " Well, when those two teams don't have that well-established collaboration."
  },
  { startTime: 3244.76, person: 'Vlad', text: ' In that case, that pattern is not going to work.' },
  {
    startTime: 3249.02,
    person: 'Vlad',
    text: " Now, let's talk, what is the difference between the two scenarios?"
  },
  {
    startTime: 3253.42,
    person: 'Vlad',
    text: ' Well, first one, those two bounded contexts could be implemented by one team.'
  },
  { startTime: 3259.5, person: 'Vlad', text: ' Can they collaborate with themselves?' },
  { startTime: 3262.04, person: 'Vlad', text: ' Probably, yeah.' },
  {
    startTime: 3263.52,
    person: 'Vlad',
    text: " So, in that case, the distance is kind of, let's say the distance between the people is short."
  },
  {
    startTime: 3271.9,
    person: 'Vlad',
    text: ' So, we have the technical distance plus the personal, interpersonal distance.'
  },
  { startTime: 3276.5, person: 'Vlad', text: ' That one is short.' },
  {
    startTime: 3279,
    person: 'Vlad',
    text: " Maybe these are two teams sitting in the same room because that's a small startup company, they're maybe working out of the garage, and they really try to help each other because that's their only chance to collaborate."
  },
  { startTime: 3294.44, person: 'Vlad', text: ' That pattern will work.' },
  { startTime: 3296.26, person: 'Vlad', text: ' Again, the social distance is low.' },
  {
    startTime: 3299.52,
    person: 'Vlad',
    text: ' And maybe they succeeded, and that company has grown into an enterprise.'
  },
  {
    startTime: 3303.86,
    person: 'Vlad',
    text: " And now, those two bounded contexts, same bounded context, belong to two teams that are maybe they're in different geographical locations."
  },
  {
    startTime: 3316.18,
    person: 'Vlad',
    text: " Maybe they're in the same building, but they just have different goals, and they don't want to collaborate."
  },
  {
    startTime: 3322.96,
    person: 'Vlad',
    text: " Well, in that case, domain-driven design says, hey, you have a problem, partnership won't work in that case."
  },
  {
    startTime: 3329.54,
    person: 'Vlad',
    text: ' You have to use a different kind of relationship, either open host service or anti-corruption layer, or in the worst case, separate ways.'
  },
  {
    startTime: 3340.68,
    person: 'Vlad',
    text: ' Now, what does it mean in the language of coupling?'
  },
  {
    startTime: 3343.34,
    person: 'Vlad',
    text: ' Well, if we have well-established collaboration, model coupling can work.'
  },
  {
    startTime: 3350.36,
    person: 'Vlad',
    text: ' If people are not willing to collaborate, then we have to reduce the knowledge.'
  },
  {
    startTime: 3356.26,
    person: 'Vlad',
    text: ' The distance is bigger, we have to reduce the knowledge.'
  },
  {
    startTime: 3358.34,
    person: 'Vlad',
    text: ' We have to go to contract coupling, open host service, anti-corruption layer in domain-driven design terminology.'
  },
  { startTime: 3366.52, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 3367.68,
    person: 'Karol',
    text: " So basically, you're saying if we can maintain a very short social distance that we can manage tight coupling."
  },
  {
    startTime: 3376.62,
    person: 'Karol',
    text: ' But if the social distance is high, we will not be able to effectively manage that kind of tight coupling between two different systems, modules, or whatever we have coupled.'
  },
  { startTime: 3390.9, person: 'Vlad', text: ' Look, again, you know the answer.' },
  { startTime: 3392.88, person: 'Vlad', text: ' It depends.' },
  {
    startTime: 3394.14,
    person: 'Vlad',
    text: " So I've been in a situation in which a team of three people implemented a huge, huge, like not monolith, like a huge big wall of mud."
  },
  {
    startTime: 3406.1,
    person: 'Vlad',
    text: " They were close to each other, but the technical distance was already way too big, so it induced too much cognitive load, and that close social distance didn't help."
  },
  {
    startTime: 3418.66,
    person: 'Vlad',
    text: ' Like, if you have infinity and you increase it by zero, well, guess what?'
  },
  { startTime: 3421.96, person: 'Vlad', text: ' You still have infinity.' },
  { startTime: 3423.7, person: 'Vlad', text: " So it didn't help." },
  {
    startTime: 3425.58,
    person: 'Vlad',
    text: ' Now, in my previous example, what I meant is you can make some pragmatic decisions to round some corners.'
  },
  {
    startTime: 3433.28,
    person: 'Vlad',
    text: " So bounded contexts, you probably don't want to share functional knowledge."
  },
  { startTime: 3438.88, person: 'Vlad', text: ' You can share model knowledge to a degree.' },
  {
    startTime: 3443.78,
    person: 'Vlad',
    text: ' Like sharing integration contract, that is a perfect case.'
  },
  { startTime: 3447.56, person: 'Vlad', text: ' Startup companies, guess what?' },
  { startTime: 3448.76, person: 'Vlad', text: ' Not always you have time.' },
  { startTime: 3449.76, person: 'Vlad', text: ' Sometimes you have to be pragmatic.' },
  {
    startTime: 3451.8,
    person: 'Vlad',
    text: " So in those cases, what I'm saying is if the social distance is managed, then yeah, it can work if you're around the corner."
  },
  {
    startTime: 3461.08,
    person: 'Vlad',
    text: " But you have to watch for organisational changes, because organisation grows, change, yeah, and it's going to make your design decisions that yesterday a disaster tomorrow."
  },
  {
    startTime: 3471.88,
    person: 'Karol',
    text: " I've been in a company once that was acting like a startup, and they assumed that the social distances were very low, and they required tactical decisions all the time."
  },
  {
    startTime: 3487.88,
    person: 'Karol',
    text: ' Speaking about architecture and proper patterns in engineering was frowned upon.'
  },
  {
    startTime: 3493.24,
    person: 'Karol',
    text: " And of course, they suffered through that horrendously, because they had so many tight dependencies between different teams that at a point, they couldn't even manage that."
  },
  {
    startTime: 3504.9,
    person: 'Karol',
    text: ' So that heavily influenced the code base of all the teams that work in a completely separate modules and completely different things functionally.'
  },
  {
    startTime: 3516.32,
    person: 'Karol',
    text: " And just to weigh in here, we have the user with a lovely name left toe, getting lost in our conversation, because we're flowing towards people management, I think it's worthwhile just to reiterate that software as it is, it's not just an art form that we just sit down and write software, that software usually has a purpose."
  },
  { startTime: 3536.58, person: 'Karol', text: ' And that is a business purpose.' },
  { startTime: 3537.76, person: 'Karol', text: ' And it comes from people.' },
  {
    startTime: 3539.62,
    person: 'Karol',
    text: " If people don't align on the purpose of the software and on the requirements on the dependencies, then we're going to have a problem that influences our architecture, and development and testing and the actual end result and usability of that software."
  },
  {
    startTime: 3555.8,
    person: 'Karol',
    text: " And even if at first it is usable, then because we have those dependencies that different types of coupling, then we'll have a problem later, because it's not going to be scalable, it's not going to be extensible, or whatever other characteristic we're diving into."
  },
  {
    startTime: 3576.66,
    person: 'Karol',
    text: " And I see the YouTube comments were started to go crazy to the extent that I'm not able to keep track because they started talking about the trolley problem and railroads all of a sudden."
  },
  {
    startTime: 3589.54,
    person: 'Karol',
    text: ' So, aligning teams as a railroad, and everybody has their own tracks.'
  },
  { startTime: 3596.24, person: 'Karol', text: ' So, YouTube is going crazy tonight.' },
  { startTime: 3598.96, person: 'Karol', text: " That's absolutely cool." },
  { startTime: 3600.64, person: 'Karol', text: ' So, we could have a laugh.' },
  {
    startTime: 3604.3,
    person: 'Karol',
    text: ' Instead of dad jokes, we have YouTube comments going in to have a laugh about.'
  },
  { startTime: 3611.28, person: 'Karol', text: ' Great comments, by the way.' },
  { startTime: 3613.22, person: 'Vlad', text: " Yeah, that's a cool way to model it." },
  {
    startTime: 3616.14,
    person: 'Karol',
    text: " And they're basically on point of the discussion."
  },
  { startTime: 3619.74, person: 'Karol', text: ' Absolutely.' },
  { startTime: 3621.12, person: 'Karol', text: ' And especially this one.' },
  {
    startTime: 3623.88,
    person: 'Karol',
    text: ' People management and organisational management and making organisational changes is an integral part of design.'
  },
  {
    startTime: 3632.8,
    person: 'Karol',
    text: " Without stakeholder management, we can't really do proper design, because if we don't identify those key stakeholders that we depend on for the success, we're probably going to fail."
  },
  {
    startTime: 3646.42,
    person: 'Karol',
    text: " But that's, again, a different part of it that is not exactly coupling coupling, but this part of DDD where you need to bring the right stakeholders, the right people with knowledge into the room to model out the behaviour, model out the business process, model out the bounded context domain and the dependencies between them."
  },
  { startTime: 3667.9, person: 'Vlad', text: ' I can take it towards coupling.' },
  { startTime: 3671.02, person: 'Vlad', text: ' No problem at all.' },
  { startTime: 3673.52, person: 'Vlad', text: ' Please do.' },
  { startTime: 3675.26, person: 'Vlad', text: ' So, what domain driven design tells us?' },
  {
    startTime: 3677.68,
    person: 'Vlad',
    text: ' It says at the core of strategic domain driven design, we have to cultivate ubiquitous language.'
  },
  {
    startTime: 3686.32,
    person: 'Vlad',
    text: ' We have to build a shared understanding with domain experts, and we should do it by that annoying way of speaking with them and building that shared language in the language that business people understand.'
  },
  { startTime: 3707.5, person: 'Vlad', text: " Now, in DDD, that's called ubiquitous language." },
  {
    startTime: 3711.16,
    person: 'Vlad',
    text: ' So, ubiquitous language basically reflects their mental model.'
  },
  {
    startTime: 3715.78,
    person: 'Vlad',
    text: " So, we're using the same model of the business domain to communicate with them."
  },
  {
    startTime: 3719.22,
    person: 'Vlad',
    text: " Now, if we're not going to do it, if, on the other hand, we'll try to build one canonical model of the business that's going to address all use cases of the system, no matter what business stakeholder it addresses, well, guess what?"
  },
  {
    startTime: 3737.62,
    person: 'Vlad',
    text: " When you will communicate with that domain expert, you will have to use different models, models that are not related to that stakeholder's perspective."
  },
  {
    startTime: 3750.18,
    person: 'Vlad',
    text: ' So, that knowledge will flow in that conversation.'
  },
  {
    startTime: 3757.41,
    person: 'Karol',
    text: " And given that we all have a slightly different model of reality anyways, because we all model whether we want it or not, it's always a matter of aligning those models."
  },
  {
    startTime: 3772.41,
    person: 'Karol',
    text: ' And without talking about those models, we will definitely have different models in our heads.'
  },
  {
    startTime: 3778.77,
    person: 'Karol',
    text: ' One of the exercises I always do with people at the beginning is, okay, but what do you mean by this term?'
  },
  {
    startTime: 3785.05,
    person: 'Karol',
    text: ' Please explain, because it may be a common term, but maybe also commonly misunderstood.'
  },
  {
    startTime: 3790.09,
    person: 'Karol',
    text: " And then I have an assumption that this is this and this, and my assumption may be wrong, but I'm making those assumptions because I have already a model in my head."
  },
  { startTime: 3799.84, person: 'Karol', text: " And that's, oh, what is integration?" },
  { startTime: 3805.68, person: 'Karol', text: " That's my favourite." },
  {
    startTime: 3807.4,
    person: 'Karol',
    text: " I've been in the company where the word integration meant at the same time, application integration and data integration."
  },
  {
    startTime: 3814.7,
    person: 'Karol',
    text: ' Imagine the confusion, because these are completely two different things.'
  },
  {
    startTime: 3820,
    person: 'Karol',
    text: ' People absolutely did not know what they were talking about.'
  },
  {
    startTime: 3824.44,
    person: 'Karol',
    text: ' And there were literally some people that thought that data integration and application integration is one and the same.'
  },
  { startTime: 3831.34, person: 'Vlad', text: " Yeah, that's the beauty of domain-driven design." },
  {
    startTime: 3833.66,
    person: 'Vlad',
    text: " Like, come on, talking to people, that's common sense."
  },
  {
    startTime: 3836.58,
    person: 'Vlad',
    text: " Speaking with people in their language, that's common sense."
  },
  {
    startTime: 3840.42,
    person: 'Vlad',
    text: " And that's like the main critique I hear about domain-driven design."
  },
  {
    startTime: 3842.98,
    person: 'Vlad',
    text: " That's just common sense with pencil labels on top of it."
  },
  { startTime: 3846.94, person: 'Vlad', text: " And I'm like, oh, really?" },
  {
    startTime: 3848.42,
    person: 'Vlad',
    text: ' So why the majority of people are not using that common sense?'
  },
  { startTime: 3852.36, person: 'Vlad', text: ' Why is that common sense not that common?' },
  { startTime: 3854.78, person: 'Vlad', text: ' Why are you not doing it?' },
  {
    startTime: 3860.21,
    person: 'Karol',
    text: " Yeah, and again, the joke I make on trainings myself, if you put four architects in the room, you'll have five different opinions, exactly like Toasty here says about six explanations from five different people."
  },
  { startTime: 3873.59, person: 'Karol', text: ' And that always happens.' },
  {
    startTime: 3876.99,
    person: 'Karol',
    text: " Just yesterday, I've been asking a group of architects, what is extensibility?"
  },
  {
    startTime: 3882.15,
    person: 'Karol',
    text: ' And I had literally a group of four people just sitting in that part of the room, I had five different opinions of what is extensibility as an architectural characteristic.'
  },
  { startTime: 3894.73, person: 'Karol', text: ' Nobody could give me a straight answer.' },
  {
    startTime: 3897.27,
    person: 'Karol',
    text: ' They started just talking about it and trying to figure out what is actually extensibility.'
  },
  { startTime: 3902.35, person: 'Karol', text: " And that's the usual case." },
  {
    startTime: 3903.77,
    person: 'Karol',
    text: ' And this is why ubiquitous language I find very important.'
  },
  { startTime: 3908.17, person: 'Karol', text: " But then again, it's context specific." },
  { startTime: 3911.55, person: 'Karol', text: ' So it always, it depends.' },
  {
    startTime: 3914.25,
    person: 'Karol',
    text: " Because you go to as a consultant, and you're a consultant yourself, in that sense, right?"
  },
  {
    startTime: 3918.09,
    person: 'Karol',
    text: ' You go to one company, the same terminology will mean something else.'
  },
  {
    startTime: 3922.59,
    person: 'Karol',
    text: ' And then the other one, the same terminology will mean something else.'
  },
  {
    startTime: 3925.21,
    person: 'Karol',
    text: ' You need to, as that consultant, you need to adapt to that terminology.'
  },
  { startTime: 3928.45, person: 'Karol', text: ' You cannot bring your own to an extent.' },
  { startTime: 3931.85, person: 'Karol', text: ' Yeah.' },
  { startTime: 3932.65, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 3933.79,
    person: 'Vlad',
    text: ' Like we discussed, you come to a company, okay, so what do you mean by a software architect?'
  },
  { startTime: 3943.26, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 3944.12,
    person: 'Karol',
    text: " And then the names for a software architect, there's so many, right?"
  },
  {
    startTime: 3950.12,
    person: 'Karol',
    text: ' And the roles and the responsibilities and the...'
  },
  { startTime: 3956.66, person: 'Karol', text: " Yeah, that's a whole different topic." },
  {
    startTime: 3958.94,
    person: 'Karol',
    text: ' We can refer to a video from Mark Richards, just on that single topic, where he just rants about different roles, and the maybe general understanding of what those roles mean.'
  },
  {
    startTime: 3973.04,
    person: 'Karol',
    text: " But that's a, this one actually we can put into coupling very easy."
  },
  { startTime: 3978.38, person: 'Karol', text: " Because that's basically semantic coupling." },
  { startTime: 3981.92, person: 'Vlad', text: ' Yeah.' },
  { startTime: 3982.86, person: 'Karol', text: ' So the connaissance of meaning.' },
  { startTime: 3986.26, person: 'Vlad', text: ' Yeah.' },
  { startTime: 3987, person: 'Vlad', text: ' So it depends.' },
  { startTime: 3988.02, person: 'Vlad', text: " If you're using the model." },
  { startTime: 3991.76, person: 'Vlad', text: ' Okay.' },
  {
    startTime: 3994.42,
    person: 'Vlad',
    text: " So if you're communicating in the same model, then yeah, that's model coupling."
  },
  {
    startTime: 4000.32,
    person: 'Vlad',
    text: " Now, if you're talking to someone else who is not familiar with that shared language, and you have to simplify it, but you still have to explain what happens in that business domain."
  },
  {
    startTime: 4011.06,
    person: 'Vlad',
    text: " Well, you simplify it, maybe you remember that episode of The Office with Michael Scott, when they had to explain the accountant, had to explain him what's going to happen if they're not going to spend all the money by the end of year, so next one will get less."
  },
  { startTime: 4031.46, person: 'Vlad', text: " And he said, like, I don't remember exactly." },
  {
    startTime: 4035.1,
    person: 'Vlad',
    text: ' But he explained like he was six years old or something like that.'
  },
  { startTime: 4037.46, person: 'Vlad', text: ' So that was like an integration contract.' },
  {
    startTime: 4041.84,
    person: 'Karol',
    text: ' A approximation of a model to be able to convey that message.'
  },
  { startTime: 4046.94, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 4051.25,
    person: 'Karol',
    text: " And now we're going to get independent joke in chat."
  },
  { startTime: 4054.43, person: 'Karol', text: ' Perfect.' },
  { startTime: 4054.85, person: 'Karol', text: " That's, that's what we're aiming for." },
  {
    startTime: 4057.07,
    person: 'Karol',
    text: ' I find it the most right answer in architecture anyways, it depends.'
  },
  { startTime: 4062.55, person: 'Karol', text: ' Then we can go cracking.' },
  {
    startTime: 4064.21,
    person: 'Vlad',
    text: " Oh, well, usually, if you explain what it depends on, then that's fine."
  },
  { startTime: 4071.47, person: 'Vlad', text: " If it's just it's annoying." },
  {
    startTime: 4074.85,
    person: 'Karol',
    text: ' Yeah, I, we tend to talk about the seniority level of different people.'
  },
  {
    startTime: 4080.59,
    person: 'Karol',
    text: " If you're a junior, you have an answer for a question."
  },
  { startTime: 4083.15, person: 'Karol', text: " If you're a meteor, then you'll say it depends." },
  { startTime: 4086.65, person: 'Karol', text: " If you're in senior, you'll say it depends." },
  { startTime: 4088.87, person: 'Karol', text: " And you'll start explaining on the walk." },
  {
    startTime: 4090.49,
    person: 'Karol',
    text: " And this is a show of, does somebody really understand the topic that they're talking about in that sense?"
  },
  { startTime: 4100.229, person: 'Karol', text: " But that's a completely different ballpark." },
  { startTime: 4105.95, person: 'Karol', text: ' Now, where were we in terms of coupling again?' },
  {
    startTime: 4111.71,
    person: 'Vlad',
    text: ' So the last question was about people, about social interactions.'
  },
  { startTime: 4117.609, person: 'Karol', text: ' Yes.' },
  {
    startTime: 4118.029,
    person: 'Karol',
    text: " So if you, if we put it in the context of Conway's law, can we explain coupling using Conway's law?"
  },
  {
    startTime: 4127.399,
    person: 'Karol',
    text: ' That, because that might be an interesting one.'
  },
  { startTime: 4130.779, person: 'Karol', text: " Yeah, that's interesting." },
  {
    startTime: 4132.52,
    person: 'Karol',
    text: " You recall Conway's law or should I just bring it up?"
  },
  { startTime: 4135.58, person: 'Vlad', text: ' Yeah, of course.' },
  { startTime: 4137.359, person: 'Vlad', text: " I'm not going to say it word by word." },
  { startTime: 4139.279, person: 'Vlad', text: " I don't remember it, but." },
  { startTime: 4141.62, person: 'Karol', text: " Don't worry." },
  { startTime: 4142.72, person: 'Karol', text: ' I have it handy.' },
  {
    startTime: 4144.38,
    person: 'Vlad',
    text: ' The architecture is going, one day is going to mimic the architecture of the company, their organisational structure.'
  },
  {
    startTime: 4154.479,
    person: 'Vlad',
    text: ' Yeah, again, organisational structure makes some people closer to each other.'
  },
  { startTime: 4158.3, person: 'Vlad', text: ' So the distance is reduced.' },
  { startTime: 4160.02, person: 'Vlad', text: ' Some are more distance from each other.' },
  { startTime: 4164.02, person: 'Vlad', text: " So they're not going to collaborate." },
  {
    startTime: 4167.76,
    person: 'Vlad',
    text: ' So as a result, the technical distance will be affected as well.'
  },
  {
    startTime: 4182.24,
    person: 'Karol',
    text: " So I always, when I'm asked about Conway's law and I heard this story about an architect designing a system."
  },
  { startTime: 4192.859, person: 'Karol', text: ' Okay.' },
  { startTime: 4193.14, person: 'Karol', text: " So I'm designing the system." },
  {
    startTime: 4194.48,
    person: 'Karol',
    text: " I don't know what it's going to do yet exactly, but I know it's going to have six modules because I have six teams in different geographical locations."
  },
  { startTime: 4204.1, person: 'Vlad', text: ' Okay.' },
  { startTime: 4204.46, person: 'Karol', text: " So it's definitely going to have six modules." },
  {
    startTime: 4206,
    person: 'Karol',
    text: " I don't know which module was going to do what yet, but it's going to be six modules."
  },
  {
    startTime: 4210.74,
    person: 'Karol',
    text: " So I think that puts that perspective on the social technical coupling here, social organisational coupling, because we basically looking at that, we're having that spread of teams all over the place."
  },
  {
    startTime: 4226.08,
    person: 'Karol',
    text: " That would then mean that we want to have them going separate ways or well at best separate ways, because we already anticipate the problem from Conway's law, but we might as well go consumer provider or something like that, or partnership at times if they are closer, right?"
  },
  { startTime: 4250.42, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 4251.1,
    person: 'Vlad',
    text: ' So in domain-driven design terms, if you have six teams, that means you will have at least six bounded contexts.'
  },
  { startTime: 4259.26, person: 'Vlad', text: ' Bounded context is boundary.' },
  {
    startTime: 4261.58,
    person: 'Vlad',
    text: ' You should never have the situation in which multiple teams work on the same bounded context because you want to maximise the effectiveness of sharing knowledge, of exchange of ideas, of people working on the same model.'
  },
  { startTime: 4275.32, person: 'Vlad', text: ' And model is encompassed by a bounded context.' },
  {
    startTime: 4279.86,
    person: 'Vlad',
    text: " So at least you're going to have six bounded contexts."
  },
  { startTime: 4284.5, person: 'Vlad', text: " Now, we don't know what they're implementing." },
  {
    startTime: 4288.8,
    person: 'Vlad',
    text: " So maybe some of the teams might require even more bounded context because they're driven not only by organisational structure, but also by models."
  },
  { startTime: 4299.1, person: 'Vlad', text: ' Maybe they will discover conflicting models.' },
  {
    startTime: 4302.68,
    person: 'Vlad',
    text: " Let's say that a team implements multiple subdomains and to implement those functionalities, they need two different ways to represent real world entities."
  },
  { startTime: 4313.96, person: 'Vlad', text: ' They need multiple models.' },
  {
    startTime: 4315.62,
    person: 'Vlad',
    text: ' Well, multiple models, according to domain-driven design, that means multiple bounded contexts.'
  },
  {
    startTime: 4325.73,
    person: 'Vlad',
    text: " And yeah, and of course you analyse the nature of those teams, how they are able to collaborate, whether they're willing to collaborate."
  },
  {
    startTime: 4337.61,
    person: 'Vlad',
    text: " I would say that separate ways, it's something that you want to avoid as much as possible unless you absolutely must, just as shared kernel."
  },
  {
    startTime: 4350.65,
    person: 'Vlad',
    text: " But yeah, it's, you know, everything new in our field was that we invented recently."
  },
  {
    startTime: 4362.41,
    person: 'Vlad',
    text: ' We just rediscovered it because people were talking about it decades ago.'
  },
  { startTime: 4368.69, person: 'Karol', text: " It's like hype cycles." },
  {
    startTime: 4371.15,
    person: 'Karol',
    text: ' Every time something pops up, we get to rediscover the same old things that were defined long time ago.'
  },
  {
    startTime: 4378.79,
    person: 'Karol',
    text: " I'm looking at certain aspects that pop up again and again."
  },
  {
    startTime: 4384.59,
    person: 'Karol',
    text: " We've had microservices and the popularity, raising popularity of REST and JSON."
  },
  {
    startTime: 4394.79,
    person: 'Karol',
    text: ' And with that, we have to rediscover all that there was already described through XML and SOAP.'
  },
  {
    startTime: 4401.47,
    person: 'Karol',
    text: " And now we have AI agents and agentic ecosystems, and we're discovering APIs again, because we need APIs to serve the purpose for AI agents."
  },
  {
    startTime: 4413.19,
    person: 'Karol',
    text: ' And we discovered the importance of interoperability.'
  },
  {
    startTime: 4416.03,
    person: 'Karol',
    text: " And it's every few years, it's the same story, I suppose."
  },
  {
    startTime: 4420.09,
    person: 'Karol',
    text: " I've been looking at it for 15 years now, and I already see the cycles go in and go in."
  },
  {
    startTime: 4424.79,
    person: 'Karol',
    text: " It's quite interesting in that sense to look at it."
  },
  { startTime: 4428.43, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 4429.61,
    person: 'Vlad',
    text: " I would say that now we're entering the golden age of something that was introduced in late 60s, modularity."
  },
  {
    startTime: 4437.97,
    person: 'Vlad',
    text: ' Now, since those early days, we had trouble identifying what modularity really is.'
  },
  { startTime: 4449.25, person: 'Vlad', text: ' How can you achieve it?' },
  {
    startTime: 4450.89,
    person: 'Vlad',
    text: ' But there was no disagreement that modularity is important.'
  },
  { startTime: 4455.17, person: 'Vlad', text: ' Now, modularity had different names.' },
  {
    startTime: 4457.09,
    person: 'Vlad',
    text: ' Originally, it was modularity, then it was object-orientated programming.'
  },
  {
    startTime: 4461.73,
    person: 'Vlad',
    text: ' The goal was modularity, but it was labelled as OOP.'
  },
  { startTime: 4466.89, person: 'Vlad', text: ' Microservices, guess what?' },
  { startTime: 4468.85, person: 'Karol', text: " That's modularity." },
  { startTime: 4470.75, person: 'Vlad', text: ' Modularity, yes.' },
  {
    startTime: 4472.53,
    person: 'Karol',
    text: ' But to be fair, on a different abstraction level.'
  },
  { startTime: 4476.81, person: 'Vlad', text: ' Yes.' },
  { startTime: 4477.81, person: 'Vlad', text: " Yeah, that's true." },
  {
    startTime: 4479.21,
    person: 'Vlad',
    text: ' Now, we have those things that write code for us.'
  },
  {
    startTime: 4486.17,
    person: 'Vlad',
    text: ' And those darn things are a bit stupid when they have to think about lots of things.'
  },
  { startTime: 4496.23, person: 'Vlad', text: ' So, how are we going to tackle that?' },
  { startTime: 4499.05, person: 'Karol', text: ' Modularity!' },
  { startTime: 4500.41, person: 'Karol', text: ' Yes.' },
  { startTime: 4503.87, person: 'Karol', text: ' Oh, my.' },
  { startTime: 4504.89, person: 'Karol', text: ' Yes.' },
  {
    startTime: 4505.33,
    person: 'Karol',
    text: " And we're already looking at, at least in my field, that organisations are not willing to change the way they govern data and govern interoperability."
  },
  {
    startTime: 4515.89,
    person: 'Karol',
    text: ' And that already stems a lot of problems in agentic AI implementations.'
  },
  {
    startTime: 4521.53,
    person: 'Karol',
    text: ' Because, of course, they want AI agents without the proper use case.'
  },
  {
    startTime: 4525.39,
    person: 'Karol',
    text: ' But they want, because the hype cycle continues, they go on the bandwagon and they need it.'
  },
  {
    startTime: 4530.57,
    person: 'Karol',
    text: ' And what it turns out, that we need domain partitioning.'
  },
  { startTime: 4534.59, person: 'Karol', text: ' So, what do we need?' },
  { startTime: 4536.17, person: 'Karol', text: ' Modularity.' },
  {
    startTime: 4537.21,
    person: 'Karol',
    text: " Again, it's quite interesting to observe that this is actually all the time the same thing."
  },
  {
    startTime: 4545.41,
    person: 'Karol',
    text: ' But then, again, if they apply modularity without reason, then we get lost again.'
  },
  { startTime: 4553.2, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 4553.78,
    person: 'Vlad',
    text: ' By the way, domain-driven design, I love domain-driven design.'
  },
  { startTime: 4556.7, person: 'Vlad', text: ' But what is it?' },
  { startTime: 4557.8, person: 'Vlad', text: " That's a way to achieve modularity." },
  { startTime: 4560.98, person: 'Karol', text: ' Pretty much, yes.' },
  {
    startTime: 4563.06,
    person: 'Karol',
    text: " Because we're basically dissecting everything into separate boxes."
  },
  { startTime: 4568.28, person: 'Karol', text: ' Into pieces.' },
  {
    startTime: 4570.12,
    person: 'Vlad',
    text: " That's the problem with modularity, with that concept."
  },
  { startTime: 4573.94, person: 'Vlad', text: ' And it was problematic from the get-go.' },
  {
    startTime: 4578.08,
    person: 'Vlad',
    text: ' Like, we need to divide a system into those components.'
  },
  { startTime: 4584.06, person: 'Vlad', text: ' But how on earth do we do it?' },
  { startTime: 4585.9, person: 'Vlad', text: ' Barbara Liskov said it many, many years ago.' },
  {
    startTime: 4589.62,
    person: 'Vlad',
    text: ' She said, if you take a system and decompose it into components, arbitrarily what you will get is not modularity.'
  },
  {
    startTime: 4595.48,
    person: 'Vlad',
    text: ' You will get a distributed monolith or a big ball of whatever.'
  },
  { startTime: 4601.26, person: 'Vlad', text: " You won't get good design." },
  {
    startTime: 4604.26,
    person: 'Vlad',
    text: " You need good reasoning when you're decomposing a system into components."
  },
  {
    startTime: 4609.96,
    person: 'Vlad',
    text: ' And that reasoning, for me, at least, it was elusive until it kind of clicked and then the coupling book came along.'
  },
  { startTime: 4619.46, person: 'Vlad', text: ' We have knowledge, we have distance.' },
  { startTime: 4622.5, person: 'Vlad', text: " That's it." },
  {
    startTime: 4623.2,
    person: 'Vlad',
    text: ' If we absolutely have to share knowledge, there is no way to avoid it.'
  },
  { startTime: 4627.16, person: 'Vlad', text: ' We have to share lots of knowledge.' },
  {
    startTime: 4629.16,
    person: 'Vlad',
    text: ' Things will change together, bring them close to each other.'
  },
  { startTime: 4632.6, person: 'Vlad', text: " That's what usually is called cohesion." },
  {
    startTime: 4635.02,
    person: 'Vlad',
    text: " If, on the other hand, the knowledge that is being shared across boundaries of components is low, like they're not really related to each other, increase the distance."
  },
  { startTime: 4646.14, person: 'Vlad', text: " They won't change together." },
  { startTime: 4647.7, person: 'Vlad', text: ' Put them in different components.' },
  {
    startTime: 4650.98,
    person: 'Vlad',
    text: ' And yeah, so modularity is that relationship between distance and knowledge.'
  },
  {
    startTime: 4657.42,
    person: 'Vlad',
    text: ' And its goal is to manage the cognitive load that you will have to experience when you will have to modify to change something in that system in the future.'
  },
  {
    startTime: 4667.74,
    person: 'Karol',
    text: " Now, I just wish right now that I had handy your deck from balancing coupling and software design the training on O'Reilly, because you have this absolutely wonderful slide about cohesion, coupling, and distance."
  },
  { startTime: 4681.84, person: 'Karol', text: ' You know, the four quadrants that you have?' },
  { startTime: 4685.52, person: 'Karol', text: ' I can describe it.' },
  { startTime: 4686.94, person: 'Karol', text: ' I remember it by heart.' },
  { startTime: 4688.54, person: 'Vlad', text: ' Yeah, I know.' },
  { startTime: 4689.74, person: 'Vlad', text: ' Go ahead.' },
  { startTime: 4690.28, person: 'Vlad', text: ' In the middle of the night, yeah.' },
  { startTime: 4693.24, person: 'Vlad', text: " Let's take knowledge and distance." },
  {
    startTime: 4696.1,
    person: 'Vlad',
    text: " And for the sake of this example, for the simplicity sake, let's say that we're treating them not as a spectrum, but as a binary value, high or low."
  },
  {
    startTime: 4705.12,
    person: 'Vlad',
    text: " So, let's say we have two components that share lots of knowledge, but the distance is low."
  },
  { startTime: 4712.82, person: 'Vlad', text: ' So, knowledge high, distance low.' },
  {
    startTime: 4715.7,
    person: 'Vlad',
    text: " In that case, we have to look why they're sharing lots of knowledge."
  },
  {
    startTime: 4719.8,
    person: 'Vlad',
    text: " If that's because of the business requirements, and there is no way to evaluate it, okay, that's fine."
  },
  { startTime: 4725.74, person: 'Vlad', text: " We'll leave it." },
  {
    startTime: 4726.84,
    person: 'Vlad',
    text: ' Now, that relationship is what we call high cohesion.'
  },
  {
    startTime: 4731.58,
    person: 'Vlad',
    text: ' Things that are related, close to each other, low distance.'
  },
  {
    startTime: 4735.44,
    person: 'Vlad',
    text: " On the other hand, let's say that the knowledge is low, and the distance is high."
  },
  {
    startTime: 4740.58,
    person: 'Vlad',
    text: ' Again, things that are not related, far apart from each other.'
  },
  { startTime: 4744.22, person: 'Vlad', text: " That's what we usually call loose coupling." },
  { startTime: 4747.22, person: 'Vlad', text: ' Now, the other two are all about complexity.' },
  { startTime: 4750.44, person: 'Vlad', text: ' These two were about modularity.' },
  { startTime: 4752.32, person: 'Vlad', text: ' The other two combinations are about complexity.' },
  {
    startTime: 4755.22,
    person: 'Vlad',
    text: ' So, the first one, and the trivial one is, what if we have two components sharing lots of knowledge over large distance?'
  },
  { startTime: 4763.48, person: 'Vlad', text: ' Guess what?' },
  { startTime: 4764.36, person: 'Vlad', text: ' There will be pain in your future in that case.' },
  { startTime: 4767.04, person: 'Vlad', text: ' You have to do something about it.' },
  {
    startTime: 4768.82,
    person: 'Vlad',
    text: " Either lower the knowledge, if that's possible, if not, the distance."
  },
  {
    startTime: 4772.96,
    person: 'Vlad',
    text: ' So, both are high, you get what we usually call tight coupling.'
  },
  { startTime: 4778.96, person: 'Vlad', text: " Now, the most, let's say, yes." },
  { startTime: 4784.77, person: 'Karol', text: ' Found it.' },
  { startTime: 4786.07, person: 'Vlad', text: ' Yeah.' },
  { startTime: 4787.13, person: 'Vlad', text: ' The trivial one is when both are low.' },
  {
    startTime: 4790.57,
    person: 'Vlad',
    text: ' When you are not sharing lots of knowledge, so things are not going to co-evolve.'
  },
  {
    startTime: 4796.29,
    person: 'Vlad',
    text: " But on the other hand, the distance is low as well, so they're close to each other."
  },
  {
    startTime: 4800.83,
    person: 'Vlad',
    text: ' Now, if there are only two such components, who cares?'
  },
  {
    startTime: 4804.03,
    person: 'Vlad',
    text: " Now, if you have like a bit more, like let's say 10 such components, well, you are on your way towards like good old-fashioned mouth lathe or big ball of mud, because you have unrelated things in the same basket, pretty much like my room here."
  },
  { startTime: 4820.15, person: 'Vlad', text: ' If I would show you the stuff I have here.' },
  {
    startTime: 4824.21,
    person: 'Vlad',
    text: ' So, you already have seen Terminator head and I have Formula One wheel over there.'
  },
  { startTime: 4829.73, person: 'Karol', text: ' The same here.' },
  { startTime: 4831.33, person: 'Karol', text: ' The view you have is the clean view.' },
  { startTime: 4833.65, person: 'Karol', text: ' The rest of it is just pure chaos.' },
  { startTime: 4836.65, person: 'Karol', text: ' Exactly.' },
  { startTime: 4837.61, person: 'Karol', text: " That's the one." },
  {
    startTime: 4838.85,
    person: 'Karol',
    text: ' I mean, rubber duckies all over the place or Lego blocks for modelling.'
  },
  { startTime: 4847.05, person: 'Karol', text: ' There you go.' },
  { startTime: 4848.49, person: 'Karol', text: ' You need to have a rubber ducky, right?' },
  { startTime: 4850.33, person: 'Vlad', text: ' Yeah.' },
  { startTime: 4852.71, person: 'Karol', text: ' Perfect.' },
  { startTime: 4853.89, person: 'Karol', text: ' So, yeah.' },
  {
    startTime: 4854.31,
    person: 'Karol',
    text: ' So, lots of modules close together with sharing of knowledge.'
  },
  { startTime: 4860.05, person: 'Karol', text: ' We have a big ball of mud.' },
  {
    startTime: 4861.27,
    person: 'Karol',
    text: " They're just unrelated, just occupying the same space and it's a problem."
  },
  { startTime: 4865.53, person: 'Karol', text: ' That leads to confusion.' },
  { startTime: 4868.23, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 4869.17,
    person: 'Vlad',
    text: ' They will eventually, those two relationships, the complexity ones, when both are low or both are high, when you will have to change the system, it will increase the cognitive load.'
  },
  {
    startTime: 4880.91,
    person: 'Vlad',
    text: ' You will have to look for things far apart that need to change or you will have to make your way through something like my room here, which is a hell of a cognitive load, if you ask me.'
  },
  { startTime: 4895.69, person: 'Vlad', text: " That's something that is not modular." },
  {
    startTime: 4900.26,
    person: 'Karol',
    text: ' And I believe the next slide is exactly on this.'
  },
  { startTime: 4905.82, person: 'Karol', text: ' Low knowledge, high distance is modularity.' },
  { startTime: 4909.3, person: 'Karol', text: ' Low distance, high knowledge is modularity.' },
  {
    startTime: 4912.66,
    person: 'Karol',
    text: " The rest of it is just pure complexity that doesn't serve anything."
  },
  {
    startTime: 4918.26,
    person: 'Karol',
    text: " By the way, thank you, Philip, for bringing up cohesion in the comments because that's what sparked me into finding these slides."
  },
  {
    startTime: 4926.76,
    person: 'Karol',
    text: " Definitely something worthwhile because this is what we're looking at in terms of coupling."
  },
  {
    startTime: 4932.24,
    person: 'Karol',
    text: " Do we have actually modularity, which is great, or is it just complexity and it's added complexity that we don't need in this place and should be refactored and moved away somewhere so that we manage that complexity properly?"
  },
  {
    startTime: 4950.7,
    person: 'Karol',
    text: " Because I do like to quote, and I literally quoted that yesterday from Don Norman, the designer of Everyday Things, it's not the problem that we have complexity."
  },
  {
    startTime: 4961.04,
    person: 'Karol',
    text: ' Simplicity is something that we should really look out for and not have because simplicity is not there in real life.'
  },
  {
    startTime: 4968.92,
    person: 'Karol',
    text: " All the problem domains that we're touching, they're never simple."
  },
  { startTime: 4973.2, person: 'Karol', text: " They're complexity." },
  {
    startTime: 4975.02,
    person: 'Karol',
    text: ' The problem is confusion, and we should look for managed complexity, and the managed complexity is something that we want.'
  },
  {
    startTime: 4984.42,
    person: 'Karol',
    text: ' Otherwise, we just have complexity, and it creates confusion, so big bowl of mud, spaghetti architecture, these kind of things.'
  },
  { startTime: 4992.42, person: 'Karol', text: ' All right.' },
  {
    startTime: 4993.2,
    person: 'Karol',
    text: " We're going to make a small pause in the topic right now."
  },
  {
    startTime: 4996.52,
    person: 'Karol',
    text: ' Vlad, did you have a moment to think about the question or what would we be doing right now in terms of the prompt that we had in our private chat?'
  },
  { startTime: 5009.02, person: 'Vlad', text: ' Yeah.' },
  { startTime: 5010.34, person: 'Vlad', text: ' I have no idea what question to ask.' },
  { startTime: 5012.9, person: 'Karol', text: ' All right.' },
  {
    startTime: 5015.12,
    person: 'Karol',
    text: ' Just to give you an idea, Vlad actually has vouchers for the digital version of balancing coupling in software design, and very generous, we have ten of them.'
  },
  { startTime: 5030.2, person: 'Karol', text: " So there's plenty to go around." },
  {
    startTime: 5032.44,
    person: 'Karol',
    text: ' Now, how should we distribute them amongst our viewers tonight?'
  },
  { startTime: 5036.98, person: 'Karol', text: ' What do you think?' },
  { startTime: 5039.02, person: 'Karol', text: ' Best dad joke?' },
  { startTime: 5041.18, person: 'Karol', text: ' Yes!' },
  { startTime: 5042.6, person: 'Karol', text: ' Yes!' },
  { startTime: 5044.16, person: 'Karol', text: ' All right.' },
  {
    startTime: 5045.14,
    person: 'Karol',
    text: ' So, dear audience, please, on YouTube, because YouTube we can actually showcase in the stream, because integration with LinkedIn comments failed today, ten best dad jokes we receive in the next 20 minutes, get a digital copy of balancing coupling in software design by Vlad Kononov.'
  },
  {
    startTime: 5073.74,
    person: 'Karol',
    text: ' Three, two, one, start, and I see Philip is already trying to figure out a dad joke, but Philip, I believe you do have a copy already, or am I mistaken?'
  },
  {
    startTime: 5084.66,
    person: 'Karol',
    text: " We have a shared library of books in Bridging the Gap, and Philip has access to all those books, so yes, there's plenty of books there already."
  },
  { startTime: 5096.24, person: 'Karol', text: " But let's give people a chance." },
  { startTime: 5099.74, person: 'Karol', text: ' All right.' },
  { startTime: 5101.7, person: 'Karol', text: ' Going back to coupling.' },
  {
    startTime: 5103.18,
    person: 'Karol',
    text: ' So, of course, we have, we talked about distance, we talked about the knowledge shared, which are two factors of coupling.'
  },
  {
    startTime: 5114.1,
    person: 'Karol',
    text: " Then we have a further access to the puzzle, right, because we're operating in coupling, at least in your model that you describe in the book, we have three axes, well, three characteristics that we need to look out in terms of coupling."
  },
  { startTime: 5129.1, person: 'Karol', text: ' So, the last one is volatility, right?' },
  { startTime: 5131.5, person: 'Vlad', text: " Yes, that's true." },
  {
    startTime: 5134.48,
    person: 'Vlad',
    text: ' So, the model that we discussed before the prizes section was kind of idealistic, like either something is modular or something is complex.'
  },
  {
    startTime: 5149.34,
    person: 'Vlad',
    text: ' Either something reduces cognitive load or it increases cognitive load.'
  },
  {
    startTime: 5154.04,
    person: 'Vlad',
    text: " And the question is, let's say we have something that does increase cognitive load, but do we necessarily care about that?"
  },
  {
    startTime: 5164.84,
    person: 'Vlad',
    text: " Because again, if you look at domain-driven design, sometimes domain-driven design tells us we don't care, separate ways, we don't care."
  },
  {
    startTime: 5173.56,
    person: 'Vlad',
    text: ' From technical standpoint, domain-driven design says use those advanced patterns like aggregates, event sourcing, where it matters most in core subdomains.'
  },
  {
    startTime: 5184.68,
    person: 'Vlad',
    text: ' Supporting subdomains, let cloud do its thing or outsource it or just some rapid application development framework, something quick and easy, something that will just work.'
  },
  {
    startTime: 5196.26,
    person: 'Vlad',
    text: ' So, we have to introduce that healthy pragmatism into our decision-making.'
  },
  {
    startTime: 5203.8,
    person: 'Vlad',
    text: ' And we can do it by looking at the source of shared knowledge.'
  },
  {
    startTime: 5209.19,
    person: 'Vlad',
    text: " Let's say that we have that relationship of both values are high, high strength, lots of knowledge and high distance travels across, let's say, systems or services."
  },
  {
    startTime: 5220.69,
    person: 'Vlad',
    text: ' Now, if we will have to change that upstream component, the source of knowledge, well, guess what?'
  },
  { startTime: 5229.15, person: 'Vlad', text: ' Probably the downstream will change as well.' },
  {
    startTime: 5231.51,
    person: 'Vlad',
    text: ' So, the question we can ask is, will it really change?'
  },
  {
    startTime: 5234.93,
    person: 'Vlad',
    text: " Because maybe that's a legacy system that nobody cares about."
  },
  {
    startTime: 5239.59,
    person: 'Vlad',
    text: " Let's say that many organisations have that old legacy system that does its thing, people are afraid to touch it, but sometimes you need to integrate with it."
  },
  {
    startTime: 5252.83,
    person: 'Vlad',
    text: " So, if it's not going to change, if it's not volatile, well, use some of its implementation details and use them for integration."
  },
  {
    startTime: 5259.49,
    person: 'Vlad',
    text: ' Go to its database directly and take whatever you can, because that schema is not going to change.'
  },
  {
    startTime: 5265.37,
    person: 'Vlad',
    text: " So, basically, that what we are doing right now is we're bending that ideal modularity thing and saying, okay, we don't need modularity in this place."
  },
  {
    startTime: 5278.43,
    person: 'Vlad',
    text: " And it's all about volatility, because that part of the system is not expected to be volatile."
  },
  {
    startTime: 5285.15,
    person: 'Vlad',
    text: ' Now, legacy system is probably an extreme example.'
  },
  {
    startTime: 5288.29,
    person: 'Vlad',
    text: ' If we go back to domain driven design, then we have those three subdomains, three types of subdomains.'
  },
  { startTime: 5295.25, person: 'Vlad', text: ' Core, they will change the most.' },
  {
    startTime: 5297.95,
    person: 'Vlad',
    text: ' You have to assume that high volatility there, and there is no other way around it.'
  },
  { startTime: 5303.61, person: 'Vlad', text: ' Supporting subdomains, nobody cares about them.' },
  { startTime: 5307.95, person: 'Vlad', text: ' They will change rarely.' },
  {
    startTime: 5310.51,
    person: 'Vlad',
    text: ' And if they change, those changes are going to be not that dramatic.'
  },
  {
    startTime: 5315.23,
    person: 'Vlad',
    text: " Unless, of course, there's a big change in the organisation, and supporting subdomain morphs into a core subdomain."
  },
  { startTime: 5322.53, person: 'Vlad', text: ' Then you have to redesign everything.' },
  { startTime: 5326.45, person: 'Karol', text: ' I have a caveat to that.' },
  { startTime: 5328.65, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 5329.89,
    person: 'Karol',
    text: " Actually, one of the systems that changes the most in large IT ecosystems is the integration platform, and it's in the supporting subdomain most of the times."
  },
  {
    startTime: 5342.53,
    person: 'Karol',
    text: ' And integration platform has the most volatility, or interacts with the most volatility.'
  },
  { startTime: 5351.05, person: 'Karol', text: " And it's a supporting..." },
  { startTime: 5352.37, person: 'Vlad', text: ' Can you give an example?' },
  { startTime: 5352.75, person: 'Vlad', text: " Yeah, that's an interesting case." },
  { startTime: 5354.83, person: 'Vlad', text: ' Okay.' },
  {
    startTime: 5355.51,
    person: 'Karol',
    text: ' So, when I work on the integration platforms, and what we do, especially if we do API led architecture, which is three layers of abstractions, those layers of abstractions are there to support composability of services.'
  },
  {
    startTime: 5371.65,
    person: 'Karol',
    text: ' So, we can compose new services, new business functions based on the exposed data in the adapter layer, and then the composition layer gives us that we can compose that data objects into services, whatever those services may be.'
  },
  {
    startTime: 5388.29,
    person: 'Karol',
    text: ' Now, if I have the providers of data just behind the domain systems, just behind the adapter layer, whenever they change anything, the impact hits the integration platform, but not always hits the consumers of those services, because we just mitigate that impact of changes on the consumers, because we hide that impact within the adapter layer, the composition layer, and the channel layer.'
  },
  {
    startTime: 5418.07,
    person: 'Karol',
    text: ' And different changes impact different layers of abstractions in the integration platform on its own, not necessarily impacting the end consumers.'
  },
  {
    startTime: 5426.61,
    person: 'Karol',
    text: " So, let's say we have five consumers consuming one service in the integration platform, and one of them needs more data in the response."
  },
  {
    startTime: 5438.15,
    person: 'Karol',
    text: ' So, we make changes on the provider systems, on the domain systems that are upstream.'
  },
  {
    startTime: 5444.77,
    person: 'Karol',
    text: " I'm never going to get used to the upstream downstream, but provider is upstream, right?"
  },
  { startTime: 5449.53, person: 'Vlad', text: ' Yes, yes.' },
  { startTime: 5450.33, person: 'Karol', text: ' Okay.' },
  {
    startTime: 5450.69,
    person: 'Karol',
    text: ' In the upstream, we make changes on the upstream, that changes trickles through the adapter layer of the integration platform, the composition layer of the integration platform, and then is exposed in the channel layer only to that specific consumer, while the rest remain untouched, because we have that ACL in the channel layer that bars them from being impacted.'
  },
  {
    startTime: 5473.91,
    person: 'Karol',
    text: " So, actually, all the volatility of all the upstream systems is then squished into the integration platform and mitigated so that it doesn't reach downstream."
  },
  {
    startTime: 5486.35,
    person: 'Karol',
    text: ' That, I think, is an exception to a supporting domain being less volatile.'
  },
  {
    startTime: 5493.27,
    person: 'Vlad',
    text: ' Thank you so much for saying that, because you naturally led me to the next topic I wanted to talk about.'
  },
  { startTime: 5500.99, person: 'Vlad', text: ' Perfect.' },
  { startTime: 5502.51, person: 'Vlad', text: ' Because volatility can be natural.' },
  { startTime: 5506.05, person: 'Vlad', text: ' Yes.' },
  {
    startTime: 5506.91,
    person: 'Vlad',
    text: " So, the volatility that is caused by the business domain, and it can also be, let's say, inferred or accidental."
  },
  {
    startTime: 5514.27,
    person: 'Vlad',
    text: " Now, let's say that you're a supporting subdomain, and you depend on a core subdomain, and that one, the source of the knowledge, is volatile, and its boundary is bad."
  },
  {
    startTime: 5533.77,
    person: 'Vlad',
    text: " So, all those changes propagate across the boundary to the downstream, and that makes your supporting subdomain volatile as well, but not because of the nature of the business, but because of the design, because of the way that upstream doesn't care about its knowledge spilling outside of its boundary."
  },
  {
    startTime: 5553.39,
    person: 'Vlad',
    text: ' It basically introduces that situation we discussed earlier.'
  },
  { startTime: 5558.09, person: 'Vlad', text: ' High knowledge, high distance.' },
  { startTime: 5559.63, person: 'Vlad', text: " That's exactly the case." },
  { startTime: 5561.65, person: 'Vlad', text: ' Yeah.' },
  { startTime: 5561.99, person: 'Karol', text: ' Precisely.' },
  { startTime: 5563.33, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 5564.37,
    person: 'Karol',
    text: " And at times, we take the integration platforms, and when that upstream system doesn't care about knowledge spilling, we put a barrier as the adapter layer, so that knowledge doesn't spill."
  },
  {
    startTime: 5577.25,
    person: 'Karol',
    text: ' So, we actually put all layers of the integration platform are essentially anti-corruption layers, and they have a different function in terms of anti-corruption that they serve.'
  },
  {
    startTime: 5591.21,
    person: 'Karol',
    text: ' The channel layer barring the consumer systems for the knowledge of the integration platform spilling out to the consumers, the composition layer barring the knowledge about individual upstream systems spilling into the channel layer, and then the adapter layer hiding that whatever is the logic, the access logic, the data, the data models of the actual upstream systems.'
  },
  {
    startTime: 5623.15,
    person: 'Karol',
    text: " And this is exactly that cascading spill that we're just blocking with dams of abstractions."
  },
  {
    startTime: 5629.45,
    person: 'Karol',
    text: ' And of course, different integration platforms, different number of'
  },
  {
    startTime: 5632.63,
    person: 'Karol',
    text: ' abstractions, because if we go to broker architecture, and there are integration platforms'
  },
  {
    startTime: 5636.97,
    person: 'Karol',
    text: " that are in that specific architectural style, they have a single layer of abstraction, and it's"
  },
  {
    startTime: 5642.61,
    person: 'Karol',
    text: ' very hard to give more, and then the problem of solving coupling and problem of solving volatility'
  },
  {
    startTime: 5649.67,
    person: 'Karol',
    text: ' becomes a little bit more trickier, still manageable.'
  },
  {
    startTime: 5654.41,
    person: 'Karol',
    text: ' But again, it depends on what the company needs.'
  },
  { startTime: 5659.49, person: 'Vlad', text: ' Yeah.' },
  { startTime: 5660.61, person: 'Vlad', text: ' Again, I love that.' },
  {
    startTime: 5663.33,
    person: 'Vlad',
    text: " First of all, that's an example of a great implementation of anti-corruption layer, the domain-driven design pattern."
  },
  {
    startTime: 5671.23,
    person: 'Vlad',
    text: " Second, it's a great illustration of the balanced coupling principles and what happens when they're broken."
  },
  {
    startTime: 5678.45,
    person: 'Vlad',
    text: ' It also explains how balanced coupling can help you to identify and guide you towards a solution, which is to introduce the integration contract, which is anti-corruption layer.'
  },
  { startTime: 5687.53, person: 'Vlad', text: ' Love that example.' },
  {
    startTime: 5689.33,
    person: 'Vlad',
    text: ' But I will just go back to the notion of subdomains.'
  },
  {
    startTime: 5693.21,
    person: 'Karol',
    text: " I'm not joking when I say that what you described in the book is like 50% of my work."
  },
  { startTime: 5699.61, person: 'Karol', text: " It's true." },
  {
    startTime: 5700.61,
    person: 'Karol',
    text: " It's just basically managing that coupling, managing that complexity, pure essence of it."
  },
  { startTime: 5709.41, person: 'Vlad', text: ' Yeah.' },
  { startTime: 5710.17, person: 'Karol', text: ' Okay.' },
  { startTime: 5710.73, person: 'Karol', text: ' Going back.' },
  { startTime: 5712.55, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 5713.13,
    person: 'Vlad',
    text: ' So what I meant by volatility of subdomains is the natural volatility, not the accidental one that can be caused by poor design.'
  },
  { startTime: 5720.57, person: 'Vlad', text: ' With poor design, yeah.' },
  {
    startTime: 5721.71,
    person: 'Vlad',
    text: " If you implement a big ball of mud, then yeah, it doesn't matter."
  },
  {
    startTime: 5725.89,
    person: 'Vlad',
    text: " If it's supporting generic core, it doesn't matter."
  },
  {
    startTime: 5728.31,
    person: 'Vlad',
    text: ' Everything will be volatile and everything will change together.'
  },
  { startTime: 5734.72, person: 'Karol', text: " That's very much true." },
  { startTime: 5736.54, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 5737.24,
    person: 'Karol',
    text: ' So if I look at system-to-system integrations, well, if we have point-to-point or even driven architecture, that usually is very hard to control that volatility.'
  },
  {
    startTime: 5747.96,
    person: 'Karol',
    text: " That's usually always high impact and a high degree of coupling."
  },
  {
    startTime: 5751.66,
    person: 'Karol',
    text: ' So we experience not only contract coupling, but also going into model coupling very often.'
  },
  {
    startTime: 5759.14,
    person: 'Karol',
    text: ' But if we introduce integration platforms in between, that we can have that more refined control over that volatility and how it influences, impacts the other systems, meaning domain systems, because the integration platform itself is not a, well, not a domain system from a business perspective, right?'
  },
  { startTime: 5778.54, person: 'Karol', text: " It's a supporting system." },
  { startTime: 5780.6, person: 'Karol', text: ' As we already agreed upon.' },
  { startTime: 5783.66, person: 'Vlad', text: ' Well, it depends.' },
  { startTime: 5786.82, person: 'Karol', text: ' In some cases it can be core.' },
  { startTime: 5790.14, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 5790.96,
    person: 'Karol',
    text: ' We already established that somewhere close to the beginning of the stream.'
  },
  {
    startTime: 5795.3,
    person: 'Karol',
    text: ' Now, Philip is asking, have I shared the riddle for Eric Evans?'
  },
  {
    startTime: 5800.46,
    person: 'Karol',
    text: ' And yes, we did talk about the riddle before the stream.'
  },
  {
    startTime: 5805.16,
    person: 'Karol',
    text: ' Quite a nice story on its own about exactly integration platforms and the purpose of integration platforms in a sense of domain-driven design.'
  },
  {
    startTime: 5816.4,
    person: 'Karol',
    text: " But I think I told this story too many times over the stream that I'm not going to repeat it again."
  },
  { startTime: 5823.24, person: 'Karol', text: " And we're still waiting for the dad jokes." },
  {
    startTime: 5825.24,
    person: 'Karol',
    text: ' There are still plenty of room in the comments for the dad jokes.'
  },
  { startTime: 5830.28, person: 'Karol', text: ' I think we have about four now.' },
  {
    startTime: 5833.32,
    person: 'Karol',
    text: ' So, if you do want to receive the book, then please do add the dad joke in.'
  },
  { startTime: 5840.38, person: 'Karol', text: ' Okay.' },
  { startTime: 5840.9, person: 'Karol', text: ' Where were we coupling-wise?' },
  { startTime: 5843.28, person: 'Karol', text: ' Volatility, for the degree.' },
  { startTime: 5846.98, person: 'Karol', text: ' What else can be?' },
  {
    startTime: 5849.06,
    person: 'Vlad',
    text: " Sorry, Carol, I'm just sharing here a quote that you reminded me about."
  },
  { startTime: 5856.86, person: 'Vlad', text: " I'm sharing here in the private chat." },
  { startTime: 5861.6, person: 'Vlad', text: ' Yes.' },
  { startTime: 5864.18, person: 'Karol', text: " I'm going to put it in captions." },
  { startTime: 5866.44, person: 'Karol', text: ' Give me a second.' },
  { startTime: 5867.72, person: 'Karol', text: ' There we go.' },
  { startTime: 5875.13, person: 'Karol', text: ' Yes.' },
  {
    startTime: 5875.51,
    person: 'Karol',
    text: ' So, any third-party system that I have to integrate with was written by a drunken monkey typing with his feet.'
  },
  { startTime: 5887.17, person: 'Karol', text: ' Oh, my.' },
  {
    startTime: 5888.53,
    person: 'Karol',
    text: " I think you're hitting the absolute sense of my work at this point."
  },
  {
    startTime: 5896.73,
    person: 'Karol',
    text: " The number of really badly composed APIs, definitions, behaviour of APIs that I've seen over the years really reflect this particular quote."
  },
  { startTime: 5911.19, person: 'Karol', text: ' Yes.' },
  { startTime: 5911.87, person: 'Karol', text: ' You hit the spot.' },
  { startTime: 5912.91, person: 'Karol', text: ' Nailed it on the head.' },
  { startTime: 5916.07, person: 'Karol', text: ' Oh, dear.' },
  { startTime: 5918.19, person: 'Karol', text: " That's very true." },
  {
    startTime: 5919.91,
    person: 'Karol',
    text: ' Now, since we have our colleagues from SAP, somewhere in the chat, they were quite active.'
  },
  {
    startTime: 5926.91,
    person: 'Karol',
    text: " I don't know if you have ever worked with SAP R3, because now the current standard is SAP for HANA, which is a very nice, rounded system."
  },
  {
    startTime: 5939.57,
    person: 'Karol',
    text: " But R3, the way older version of it, you couldn't integrate that without an SAP specialist present in the room."
  },
  {
    startTime: 5951.05,
    person: 'Karol',
    text: ' Because, yeah, that was definitely a job that secured you for life, in that sense.'
  },
  {
    startTime: 5960.07,
    person: 'Karol',
    text: ' Because the interfaces of SAP R3, all the attributes were named as abbreviations of German words.'
  },
  {
    startTime: 5973.74,
    person: 'Karol',
    text: ' They were not decipherable for anybody who was not in the SAP ecosystem.'
  },
  {
    startTime: 5979.57,
    person: 'Karol',
    text: ' So, this is exactly the essence of the drunken monkey typing.'
  },
  { startTime: 5985.23, person: 'Karol', text: ' Because you could not understand that.' },
  {
    startTime: 5989.15,
    person: 'Vlad',
    text: ' That reminds me of MicroTik routers and their interfaces.'
  },
  { startTime: 5995.39, person: 'Karol', text: ' MicroTik routers.' },
  { startTime: 5996.67, person: 'Karol', text: ' Please tell me.' },
  { startTime: 5997.47, person: 'Karol', text: ' I have no idea what that is.' },
  {
    startTime: 5999.21,
    person: 'Vlad',
    text: " Oh, so that's a router that some consider like a consumer device, but to configure it, you need a person that specialises in that thing, because its user interface is next level."
  },
  {
    startTime: 6015.97,
    person: 'Vlad',
    text: " It's like Windows 3.11, Battleship Grey, and it's full of, like you said, those three-letter acronyms."
  },
  {
    startTime: 6025.55,
    person: 'Vlad',
    text: " That thing works like, I don't know, like it's bulletproof."
  },
  { startTime: 6032.25, person: 'Vlad', text: ' You configure it once, and it will work forever.' },
  {
    startTime: 6035.09,
    person: 'Vlad',
    text: " It doesn't need no maintenance, but to configure it, wow."
  },
  { startTime: 6039.37, person: 'Karol', text: ' Yeah, that probably is quite an issue.' },
  {
    startTime: 6045.9,
    person: 'Karol',
    text: " And this is, again, literally, we're in the aspect of coupling, because that's the connaissance of meaning."
  },
  {
    startTime: 6060.52,
    person: 'Karol',
    text: ' We have the connaissance of name and type, where we already screwed up on the connaissance of name.'
  },
  {
    startTime: 6067.46,
    person: 'Karol',
    text: " We maybe not screwed up on the connaissance of type, because maybe the types are actually, let's say, well-defined in the contract."
  },
  {
    startTime: 6076.38,
    person: 'Karol',
    text: ' But then, if we screwed up on the connaissance of name, how can we even go into the connaissance of meaning, which is something that we actually very much need in the contract coupling, right?'
  },
  { startTime: 6088.9, person: 'Karol', text: ' Because we want that contract coupling.' },
  {
    startTime: 6090.72,
    person: 'Karol',
    text: ' This is something very much wanted, because we want to convey the contract that has a meaning, and we can use the shared meaning of data.'
  },
  { startTime: 6098.18, person: 'Karol', text: ' And then, how can we even convey that, right?' },
  { startTime: 6101.08, person: 'Karol', text: ' Again, landing in the coupling area.' },
  { startTime: 6104.8, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 6105.8,
    person: 'Vlad',
    text: ' Yeah, even with contract coupling, we can still make it hard to work with.'
  },
  {
    startTime: 6110.82,
    person: 'Vlad',
    text: " Again, from the modularity perspective, that interface won't reflect your implementation models, won't reflect your functionalities, implementation deals."
  },
  { startTime: 6122.36, person: 'Vlad', text: ' In fact, it can still be a very hard decipher.' },
  {
    startTime: 6126.44,
    person: 'Vlad',
    text: ' So, we have connaissance of meaning, where you can communicate by exchanging magic numbers, for example.'
  },
  {
    startTime: 6135.4,
    person: 'Vlad',
    text: " That's one way a connaissance of algorithm can make things a bit more complicated."
  },
  {
    startTime: 6142.16,
    person: 'Vlad',
    text: ' There is a famous example from the original book about connaissance, when it was introduced.'
  },
  {
    startTime: 6149.16,
    person: 'Vlad',
    text: ' Miller-Poe Jones used the example of a system that returned a sorted array of values and numbers for some endpoint, but because of the bug, the last two values were always in inverse order.'
  },
  {
    startTime: 6166.28,
    person: 'Vlad',
    text: ' So, the consumers, when they received that, they had to do the same behaviour, the same algorithm, to take the last two numbers and reverse the order, and now they have a sorted array.'
  },
  {
    startTime: 6178.88,
    person: 'Vlad',
    text: ' So, that algorithm was conveyed, and it could be conveyed across integration contract.'
  },
  { startTime: 6185.38, person: 'Vlad', text: ' It still could be possible.' },
  { startTime: 6188.24, person: 'Karol', text: " Yeah, but we're adding..." },
  {
    startTime: 6191.5,
    person: 'Karol',
    text: " Well, it is a connaissance of algorithm, but then if they didn't know it through the contract, then basically we're looking more into the functional coupling, right?"
  },
  { startTime: 6203.8, person: 'Vlad', text: ' Yes.' },
  { startTime: 6205, person: 'Vlad', text: ' Well, yeah.' },
  { startTime: 6205.88, person: 'Karol', text: ' Literally.' },
  { startTime: 6206.92, person: 'Vlad', text: ' They figure that out.' },
  {
    startTime: 6208.54,
    person: 'Vlad',
    text: " But, yeah, that's an interesting point, because once they fix that bug in the upstream, that functionality has to change in the downstream as well."
  },
  { startTime: 6217.14, person: 'Vlad', text: ' Otherwise, guess what?' },
  { startTime: 6218.68, person: 'Vlad', text: " The integration won't work." },
  { startTime: 6219.72, person: 'Vlad', text: " So, yeah, that's a very, very good point." },
  { startTime: 6222.8, person: 'Vlad', text: " That's borderline functional coupling here." },
  {
    startTime: 6225.66,
    person: 'Karol',
    text: ' And they fixed the functional coupling, and then we back to contract coupling, but by fixing it, we introduced impact, change impact, into all the consumers, which is, again, heavy.'
  },
  {
    startTime: 6239.3,
    person: 'Karol',
    text: ' And going back to my lovely example where I screwed up something by namespaces and exposing the model coupling to a consumer, and it took me four years to fix it.'
  },
  {
    startTime: 6253.56,
    person: 'Karol',
    text: ' Yeah, we fixed it, but it took real effort and a really big project to incorporate those small fixes of those namespaces.'
  },
  {
    startTime: 6262.94,
    person: 'Karol',
    text: ' The namespaces that was just one line in an XML.'
  },
  {
    startTime: 6268.22,
    person: 'Karol',
    text: ' Well, XSD, precisely, but one line in an XSD that needed fixing.'
  },
  {
    startTime: 6273.42,
    person: 'Karol',
    text: " But because of that, we introduced a lot of brittleness, and it cost us four years of that contract brittleness to be able to really fix it, because we couldn't develop those services independently."
  },
  {
    startTime: 6286.9,
    person: 'Karol',
    text: ' They always have to be developed with all the consumers in line consuming the same services.'
  },
  { startTime: 6296.12, person: 'Karol', text: " That's horrendous." },
  {
    startTime: 6297.86,
    person: 'Karol',
    text: ' And then here we have a great example of even deeper form of coupling, which is functional, because the switch of the sorting.'
  },
  { startTime: 6304.58, person: 'Karol', text: ' Oh, man.' },
  {
    startTime: 6306.22,
    person: 'Karol',
    text: " So now I hope everybody can now see how these really small things can really introduce very tight coupling, and that's why we do need those anti-corruption layers that really solve those problems."
  },
  { startTime: 6322.24, person: 'Karol', text: ' But what is an anti-corruption layer?' },
  { startTime: 6324.4, person: 'Karol', text: " It's just a layer of abstraction on top of that." },
  { startTime: 6328.3, person: 'Karol', text: ' What is the logic of that system, really?' },
  {
    startTime: 6331.76,
    person: 'Karol',
    text: ' Or the open host service being that layer of abstraction on top of that.'
  },
  {
    startTime: 6337.94,
    person: 'Karol',
    text: " And to quote, again, quote attributed to Neil Ford here, nothing solves an abstraction layer problem like another abstraction layer, in that sense, because that's basically what it is."
  },
  {
    startTime: 6353.46,
    person: 'Karol',
    text: ' We have an abstraction layer of the system where we screw up something functionally, model-wise, whatever, and nothing can solve it like adding another abstraction layer like that ACL or OHS on top of it to fix it.'
  },
  {
    startTime: 6369.2,
    person: 'Karol',
    text: " That's where domain-driven design helps us with context mapping to just try to find out how we can balance those relationships so that they can work."
  },
  {
    startTime: 6380.84,
    person: 'Karol',
    text: ' And, of course, somebody consuming the OHS can conform to it, right?'
  },
  { startTime: 6385.88, person: 'Karol', text: ' They can.' },
  {
    startTime: 6386.64,
    person: 'Karol',
    text: " Or they can have an ACL to mitigate those changes, because that's, again, we can couple tightly into that model of that published language and still have a problem, because we then have that coupling to that of that published language."
  },
  { startTime: 6406.98, person: 'Karol', text: ' And is that okay?' },
  { startTime: 6409.82, person: 'Karol', text: ' Again, it depends.' },
  {
    startTime: 6411.22,
    person: 'Karol',
    text: ' And we already explained that it depends on distance, volatility, and all those factors.'
  },
  {
    startTime: 6416.7,
    person: 'Karol',
    text: " And that's a difficult, I think that's, in general, a very difficult balancing act to be had, how to deal with that, right?"
  },
  { startTime: 6426.5, person: 'Vlad', text: " Yeah, that's why I think we are safe." },
  { startTime: 6429.44, person: 'Vlad', text: " Like, Claude, I'm not afraid." },
  { startTime: 6431.66, person: 'Vlad', text: " I'm still not afraid." },
  {
    startTime: 6433.12,
    person: 'Vlad',
    text: ' A few weeks ago, I had to look at a codebase that was written primarily by Claude, and we are safe.'
  },
  {
    startTime: 6444.06,
    person: 'Karol',
    text: " Yeah, and I've seen plenty of discussions on the topic, and why we're safe is because those models will return an average, or they will return a list of options."
  },
  {
    startTime: 6456.71,
    person: 'Karol',
    text: ' And who is going to decide which option is the good one?'
  },
  { startTime: 6460.46, person: 'Karol', text: ' Because not that model, definitely.' },
  {
    startTime: 6463.78,
    person: 'Karol',
    text: " You require a human being, so you require an architect, somebody that actually understands the dynamics and all those dependencies on all those different abstraction levels, because it's not one abstraction level, it's multiple abstraction levels that we need to factor into that decision."
  },
  {
    startTime: 6484.16,
    person: 'Vlad',
    text: " Yeah, and I like to define Majovari as design of a system that not only achieves the system's current goals, but also supports future goals."
  },
  {
    startTime: 6498.3,
    person: 'Vlad',
    text: ' Future goals that might be required from that system, like reasonable future changes.'
  },
  {
    startTime: 6503.64,
    person: 'Vlad',
    text: " The difference is, if you have a big ball of mud but it works, that works, but it's not modular."
  },
  {
    startTime: 6510.96,
    person: 'Vlad',
    text: ' Now, once you make it modular, then it not only works, it will serve the business in the future, serve the company, let it evolve in the future.'
  },
  { startTime: 6519.94, person: 'Vlad', text: ' Now, what are those future goals?' },
  { startTime: 6524.18, person: 'Vlad', text: ' Is it any kind of change?' },
  { startTime: 6526.4, person: 'Vlad', text: " No, that's not reasonable." },
  {
    startTime: 6528.14,
    person: 'Vlad',
    text: " We cannot do a system, design a system that will allow all possible changes, like even turn a CRM system into, I don't know, a game or something."
  },
  { startTime: 6537.32, person: 'Vlad', text: " We don't want to do it." },
  {
    startTime: 6538.3,
    person: 'Vlad',
    text: ' We want to focus on reasonable changes, like reasonable change vectors that are specific to that company, that period of time, that specific context.'
  },
  {
    startTime: 6549.78,
    person: 'Vlad',
    text: " And currently, the way I see it right now, that's something that we know."
  },
  {
    startTime: 6557.58,
    person: 'Vlad',
    text: ' And AI is, at the moment, too dangerous to trust with.'
  },
  {
    startTime: 6564.04,
    person: 'Vlad',
    text: " Then again, I don't know, five years ago, if you would tell me that I will have AI running, supporting subdomains for me, I wouldn't believe you."
  },
  {
    startTime: 6572.74,
    person: 'Vlad',
    text: " So who knows what's going to happen in five years?"
  },
  {
    startTime: 6576.24,
    person: 'Karol',
    text: " Yeah, that's probably very, very non-deterministic what's going to happen."
  },
  { startTime: 6585.1, person: 'Karol', text: ' The AI industry tells us one thing.' },
  {
    startTime: 6587.52,
    person: 'Karol',
    text: ' The reality tells us something completely different.'
  },
  {
    startTime: 6592,
    person: 'Karol',
    text: ' The hopes and dreams of CIOs, CTOs, CEOs tells us another thing.'
  },
  {
    startTime: 6598.48,
    person: 'Karol',
    text: " And the complexity of what we're dealing in terms of coupling and designing architecture, building the right software for the job tells us, again, completely different things."
  },
  {
    startTime: 6612.6,
    person: 'Karol',
    text: " And then we go to Barry O'Reilly, who will then tell us about residues, and that he's very happy that people are using AI, because that will give him a lot of work in the coming years as an architect, right?"
  },
  {
    startTime: 6625.06,
    person: 'Karol',
    text: ' So, yeah, I think all of these are, to an extent, true, that these things will happen.'
  },
  { startTime: 6635.14, person: 'Karol', text: ' But again, it depends.' },
  { startTime: 6636.54, person: 'Karol', text: ' It depends on so many factors.' },
  { startTime: 6638.44, person: 'Karol', text: ' Can they happen in these areas that we work in?' },
  {
    startTime: 6641.8,
    person: 'Karol',
    text: " It's ridiculous to even try to prognose that at this point, because it's just too little facts and too many hopes and dreams in that area."
  },
  {
    startTime: 6653.1,
    person: 'Karol',
    text: " And I don't think that in terms of the level of complexity that we're seeing and we're tackling with balancing coupling, with integration architecture, with all those decisions that we make at a large scale, I don't think that this is a reality that these things will come to play in the next few years."
  },
  {
    startTime: 6677.04,
    person: 'Karol',
    text: " I think this is still, they don't have the right sources to learn from."
  },
  {
    startTime: 6682.68,
    person: 'Karol',
    text: ' So, this is not even possible for them to even figure out, because that would mean they need reasoning capabilities.'
  },
  {
    startTime: 6691.74,
    person: 'Karol',
    text: ' And we know that there is no reasoning capabilities.'
  },
  {
    startTime: 6694.04,
    person: 'Karol',
    text: " That's just statistical relevance at this point."
  },
  {
    startTime: 6697.28,
    person: 'Karol',
    text: ' So, we literally talked about that last week, just to make it clear.'
  },
  {
    startTime: 6703.94,
    person: 'Karol',
    text: " So, if somebody's interested in the ponderings on relevance of AI in development, that's last week's stream."
  },
  { startTime: 6712.2, person: 'Karol', text: ' You can watch it on YouTube.' },
  {
    startTime: 6714.16,
    person: 'Karol',
    text: ' Just drop into that and rehash that, because that was the whole stream only about that.'
  },
  { startTime: 6723.54, person: 'Vlad', text: ' Look, just to put things in proportion.' },
  {
    startTime: 6726.38,
    person: 'Vlad',
    text: ' So, my hobby is making a laughing stack out of code written by AI.'
  },
  {
    startTime: 6731.02,
    person: 'Vlad',
    text: " At the same time, I'm not giving away my chatGPTN cloud licences, my subscription, sorry."
  },
  {
    startTime: 6737.72,
    person: 'Vlad',
    text: " I'm not giving that away, because that thing made my life so much easier."
  },
  { startTime: 6742.8, person: 'Karol', text: ' Very much true.' },
  { startTime: 6743.9, person: 'Karol', text: ' Same thing.' },
  {
    startTime: 6744.6,
    person: 'Karol',
    text: " I'm not giving away my Gemini subscriptions, because it just makes my life so much easier, if you know how to use it, right?"
  },
  { startTime: 6752.38, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 6753.02,
    person: 'Vlad',
    text: ' We just need to know what it depends on, where we can trust it will make the right call, or where we better work ourselves.'
  },
  { startTime: 6764.77, person: 'Karol', text: ' Only always, in that sense.' },
  {
    startTime: 6766.89,
    person: 'Karol',
    text: " That's the part of the common sense of the DDD that DDD promotes."
  },
  {
    startTime: 6775.83,
    person: 'Karol',
    text: " I think that's something that's quite important here, and this AI literacy at this point."
  },
  { startTime: 6783.87, person: 'Karol', text: ' But that is with everything.' },
  {
    startTime: 6786.83,
    person: 'Karol',
    text: ' Microservices, we do need that microservice literacy as well, when to use microservices, how to compose those microservices.'
  },
  { startTime: 6795.59, person: 'Karol', text: ' Should we do fine-grained or coarse-grained?' },
  {
    startTime: 6799.07,
    person: 'Karol',
    text: " That's that literacy that comes into play that is very much needed."
  },
  { startTime: 6805.33, person: 'Karol', text: ' Otherwise, we will not be able to do that.' },
  {
    startTime: 6808.69,
    person: 'Karol',
    text: " And AI will not help us in that kind of decision-making, because it doesn't have enough context."
  },
  { startTime: 6817, person: 'Karol', text: ' I hope not.' },
  {
    startTime: 6820.55,
    person: 'Karol',
    text: ' I try to ponder upon that, how much context you need to build up'
  },
  {
    startTime: 6828.03,
    person: 'Karol',
    text: " for Gen AI, and I looked at the context I'm gathering as an architect to make architectural"
  },
  {
    startTime: 6833.89,
    person: 'Karol',
    text: ' decisions, and just the sheer number of abstraction layers that I need to touch is overwhelming'
  },
  {
    startTime: 6840.63,
    person: 'Karol',
    text: " to put in an AI, because it's just those abstraction layers are so different,"
  },
  {
    startTime: 6848.67,
    person: 'Karol',
    text: " dependencies-wise, because we're looking at the business level of business requirements,"
  },
  {
    startTime: 6853.69,
    person: 'Karol',
    text: ' business needs, business wants, then we look at translating that to business processes,'
  },
  {
    startTime: 6859.39,
    person: 'Karol',
    text: " that's another abstraction layer, then we're talking about translating that into architecture,"
  },
  {
    startTime: 6864.93,
    person: 'Karol',
    text: " that's another abstraction layer, then we're talking about translating that to"
  },
  { startTime: 6869.89, person: 'Karol', text: ' development, to tests.' },
  {
    startTime: 6875.15,
    person: 'Karol',
    text: " We're just riding that elevator up and down all the time."
  },
  {
    startTime: 6879.57,
    person: 'Karol',
    text: " If you put all those abstraction layers into LLMs or one AI agent, that's hallucination waiting to happen, rather than it being able to produce something, because this is just too much."
  },
  {
    startTime: 6898.82,
    person: 'Vlad',
    text: " Today, what's going to happen in five years, in two years, I'm afraid to make predictions, to bet on something."
  },
  {
    startTime: 6910.8,
    person: 'Karol',
    text: " I'm only betting on sustainability, because right now, if you look at OpenAI, they're losing money because of sustainability of the solutions."
  },
  {
    startTime: 6923.54,
    person: 'Karol',
    text: ' If you look at companies burning through tokens, again, sustainability of those solutions.'
  },
  {
    startTime: 6934.52,
    person: 'Karol',
    text: " In that sense, I think our knowledge about understanding, coupling, understanding those dependencies, being able to answer it depends, that's the crucial part, because we're more sustainable than those solutions."
  },
  { startTime: 6950.34, person: 'Vlad', text: " Yeah, that's an interesting way to put it." },
  { startTime: 6954.6, person: 'Vlad', text: ' Yeah.' },
  {
    startTime: 6956.82,
    person: 'Karol',
    text: ' This is the one reason I think that AI will definitely not replace us.'
  },
  { startTime: 6962.52, person: 'Karol', text: ' All the other reasons are questionable.' },
  {
    startTime: 6966.04,
    person: 'Karol',
    text: " Unless we find an infinite power source, then we're good for the next few years."
  },
  {
    startTime: 6977.91,
    person: 'Karol',
    text: " Here, we have exactly to the point, because I'm building a new PC right now, and this is my nightmare, that Stefan mentions."
  },
  {
    startTime: 6989.25,
    person: 'Karol',
    text: ' The cost of DDR5, DDR5 now costs as much as a good chipset, a good graphical chipset.'
  },
  {
    startTime: 6998.15,
    person: 'Karol',
    text: " I never figured five years ago that RAM would be so expensive, and that's exactly the point, right?"
  },
  { startTime: 7007.65, person: 'Karol', text: " That's exactly the problem in that sense." },
  { startTime: 7010.83, person: 'Karol', text: ' All right.' },
  {
    startTime: 7011.61,
    person: 'Karol',
    text: " We're still waiting for a few more dad jokes, so if you want the book, please do post a dad joke in the comments, because I don't think we hit 10 yet."
  },
  {
    startTime: 7022.15,
    person: 'Karol',
    text: " Otherwise, we'll be, well, we've been at it for two hours."
  },
  {
    startTime: 7026.23,
    person: 'Karol',
    text: ' I believe we did not touch upon everything coupling-wise or everything DDD-wise.'
  },
  {
    startTime: 7034.97,
    person: 'Karol',
    text: " There's plenty more to talk about, but personally, my common cold is getting to me, so I'm dying here."
  },
  {
    startTime: 7046.21,
    person: 'Karol',
    text: " I drank the whole jug, but it didn't help that much yet, and two hours is a lot of time."
  },
  {
    startTime: 7053.69,
    person: 'Karol',
    text: " I know that you, Vlad, after four hours about talking about coupling, you're already dead yourself, so two hours is quite a lot, so last chance for anybody else to drop in a joke, and let's get into a few and unmark them with stars."
  },
  { startTime: 7076.27, person: 'Karol', text: " Let's see what we got." },
  { startTime: 7077.45, person: 'Karol', text: ' So, Stefan, we have Sodium.' },
  { startTime: 7083.27, person: 'Karol', text: ' Yeah, okay.' },
  { startTime: 7084.41, person: 'Karol', text: ' Okay, good one.' },
  {
    startTime: 7086.63,
    person: 'Karol',
    text: " Yes, well, that's a meta-joke of dad jokes, I suppose."
  },
  {
    startTime: 7091.87,
    person: 'Karol',
    text: ' We have a very nice one tied to the theme of the domain-driven design.'
  },
  { startTime: 7099.1, person: 'Karol', text: ' What do you think, Vlad?' },
  { startTime: 7100.96, person: 'Karol', text: ' Yeah, good one.' },
  {
    startTime: 7103.32,
    person: 'Karol',
    text: " And continued, that they finish each other's stand-ups."
  },
  { startTime: 7113.54, person: 'Karol', text: ' Oh, man.' },
  { startTime: 7114.12, person: 'Karol', text: ' Woo!' },
  { startTime: 7115.46, person: 'Karol', text: ' That hits good.' },
  { startTime: 7116.64, person: 'Karol', text: " I think that's a good dad joke." },
  { startTime: 7119, person: 'Karol', text: ' How about you?' },
  { startTime: 7120.6, person: 'Vlad', text: " Yeah, that's like two jokes in one." },
  { startTime: 7124.46, person: 'Karol', text: ' Two jokes in one, definitely, yeah.' },
  { startTime: 7126.58, person: 'Karol', text: ' That definitely deserves a book.' },
  {
    startTime: 7131.5,
    person: 'Karol',
    text: ' Taking the it-depends architectural spin on romance.'
  },
  { startTime: 7138.86, person: 'Karol', text: " Okay, let's see if we have anything else there." },
  {
    startTime: 7144.66,
    person: 'Karol',
    text: ' Well, Philip, despite having a copy, I think he wants to go again for another one.'
  },
  {
    startTime: 7150.74,
    person: 'Karol',
    text: ' I think Philip can gift the book to somebody in the SAP ecosystem for them to actually understand what coupling is.'
  },
  { startTime: 7158.54, person: 'Karol', text: ' They have plenty of coupling there.' },
  { startTime: 7161.68, person: 'Karol', text: " Don't tell anybody." },
  {
    startTime: 7164.58,
    person: 'Karol',
    text: " No, but we see when we use, that's the business model."
  },
  {
    startTime: 7167.48,
    person: 'Karol',
    text: ' When we use SAP systems, we understand how much coupling there is.'
  },
  {
    startTime: 7171.52,
    person: 'Karol',
    text: ' Not everybody who buys SAP products understands how much coupling there is, and then they leave it for the techies to figure it out.'
  },
  { startTime: 7180.1, person: 'Karol', text: ' And we do.' },
  {
    startTime: 7181.08,
    person: 'Vlad',
    text: ' I meant the old implementation, the one with German words.'
  },
  {
    startTime: 7185.66,
    person: 'Karol',
    text: " I think there's plenty of couplings without the German abbreviations of words in the data model of, in the published language."
  },
  { startTime: 7198.16, person: 'Karol', text: " There's plenty more to be had without that." },
  { startTime: 7201.06, person: 'Karol', text: " So, that's still fine." },
  { startTime: 7204.5, person: 'Karol', text: " Let's see." },
  { startTime: 7205.34, person: 'Karol', text: ' Do we have any other?' },
  { startTime: 7214.25, person: 'Karol', text: ' Now we have only people laughing at the jokes.' },
  { startTime: 7216.37, person: 'Karol', text: ' So, okay.' },
  {
    startTime: 7219.69,
    person: 'Vlad',
    text: " You know what, David, that asked the first question, let's add him to the list, because I love the question."
  },
  { startTime: 7225.73, person: 'Karol', text: ' Okay.' },
  { startTime: 7226.81, person: 'Karol', text: ' We get David into the list.' },
  { startTime: 7229.27, person: 'Karol', text: ' All right.' },
  { startTime: 7230.41, person: 'Karol', text: " We'll contact David as well." },
  { startTime: 7232.35, person: 'Karol', text: ' All right.' },
  { startTime: 7232.95, person: 'Karol', text: ' Okay.' },
  {
    startTime: 7235.11,
    person: 'Karol',
    text: ' Anything else that stands out that we can, anybody else that stands out that we can add to the list here?'
  },
  {
    startTime: 7243.03,
    person: 'Vlad',
    text: " Sorry, I couldn't keep track of all the messages."
  },
  {
    startTime: 7248.59,
    person: 'Vlad',
    text: " When I was busy talking, you know, I'm single threaded."
  },
  { startTime: 7256.11, person: 'Karol', text: ' Fair enough.' },
  {
    startTime: 7260.85,
    person: 'Karol',
    text: " I mean, if I look at this comment, yes, that's a dead joke right here."
  },
  {
    startTime: 7272.79,
    person: 'Karol',
    text: " That's the painful truth of our existence as architects and consultants, but at the same time, personally, I find it extremely funny."
  },
  {
    startTime: 7286.05,
    person: 'Karol',
    text: " Because at a certain point in terms of stakeholder management, all we can do is just have a laugh about it, because it's not even a healthy kind of laugh, it's that panicked, cringy kind of laugh where we are just faced with the reality of things, and we cannot do anything more."
  },
  { startTime: 7305.99, person: 'Karol', text: ' All right.' },
  { startTime: 7306.31, person: 'Karol', text: ' So, Toasty, you get a book.' },
  { startTime: 7310.11, person: 'Karol', text: " Let's see, you said David." },
  { startTime: 7311.31, person: 'Karol', text: ' All right.' },
  { startTime: 7311.73, person: 'Karol', text: " So, we're going to put David on the list." },
  { startTime: 7316.05, person: 'Karol', text: ' Do we have any more?' },
  { startTime: 7323.9, person: 'Karol', text: ' Ah, right.' },
  { startTime: 7326, person: 'Karol', text: ' We have a repost of a comment.' },
  {
    startTime: 7328.94,
    person: 'Karol',
    text: " I didn't realise that would be really a dead joke from my perspective."
  },
  { startTime: 7334.4, person: 'Karol', text: ' But maybe.' },
  {
    startTime: 7341.52,
    person: 'Karol',
    text: " Or maybe it just didn't hit me, but apparently it hits you very well."
  },
  { startTime: 7346.84, person: 'Karol', text: ' So, yes.' },
  { startTime: 7347.74, person: 'Karol', text: ' Okay.' },
  { startTime: 7348.22, person: 'Karol', text: ' Yeah, definitely.' },
  { startTime: 7349.02, person: 'Karol', text: ' I missed that one.' },
  { startTime: 7350.6, person: 'Karol', text: ' Thank you for reposting that.' },
  { startTime: 7353.74, person: 'Karol', text: " That's definitely something we need to put in." },
  { startTime: 7361.98, person: 'Karol', text: ' Fair enough.' },
  { startTime: 7364.54, person: 'Karol', text: " Let's see." },
  {
    startTime: 7365.46,
    person: 'Karol',
    text: ' So, all those people mentioned, you all get the book then.'
  },
  {
    startTime: 7371.14,
    person: 'Karol',
    text: ' You all get the copy of Balancing Coupling in Software Design.'
  },
  { startTime: 7377.7, person: 'Karol', text: ' Well, I think that some of them are really good.' },
  { startTime: 7381.5, person: 'Karol', text: ' Especially this one.' },
  {
    startTime: 7383.4,
    person: 'Karol',
    text: " This one, you say, okay, long knowledge and distance, that's how my team works."
  },
  { startTime: 7394.08, person: 'Karol', text: " That's not a bad joke per se." },
  { startTime: 7397.06, person: 'Karol', text: " That's just the reality of things." },
  { startTime: 7401.38, person: 'Vlad', text: " That's the best progressive level of champions." },
  { startTime: 7408, person: 'Karol', text: " That's a fast track to a bowl of mud." },
  { startTime: 7415.54, person: 'Karol', text: ' Oh, we could go on and on in those.' },
  {
    startTime: 7420.36,
    person: 'Karol',
    text: " I don't want to bring the video from O'Reilly into it, but there was a lot more of those that you did as well, right?"
  },
  { startTime: 7428.64, person: 'Karol', text: ' Oh, okay.' },
  {
    startTime: 7431.86,
    person: 'Karol',
    text: " Then Philip confirms that he'll send a voucher to somebody at the DDD community in SAP."
  },
  {
    startTime: 7441.28,
    person: 'Karol',
    text: ' I think that that will definitely help that community improve.'
  },
  {
    startTime: 7448.02,
    person: 'Karol',
    text: " And Philip is doing a great job at that, talking about DDD in the community, and it's getting a very, very nice traction in there, just to be fair."
  },
  { startTime: 7457.24, person: 'Karol', text: " They're trying." },
  { startTime: 7458.32, person: 'Karol', text: " They're building competencies." },
  {
    startTime: 7460.78,
    person: 'Karol',
    text: " There's 40,000 people trying to learn DDD within SAP, and I think they're doing a really good job at getting traction of domain-driven design and understanding coupling within that."
  },
  { startTime: 7477.76, person: 'Karol', text: " So, hopefully, we'll get better products." },
  { startTime: 7483.26, person: 'Vlad', text: ' Hi, Philip.' },
  { startTime: 7484.48, person: 'Vlad', text: ' By the way, I know Philip.' },
  { startTime: 7485.74, person: 'Vlad', text: ' I think- Yes, you do.' },
  {
    startTime: 7488.28,
    person: 'Vlad',
    text: ' Did Europe, at least, and I think we had a few chats online.'
  },
  { startTime: 7493.8, person: 'Karol', text: ' Well, precisely, DDD 22.' },
  { startTime: 7497.42, person: 'Karol', text: ' There we go.' },
  {
    startTime: 7499.44,
    person: 'Karol',
    text: ' And this is one of the reasons why Philip and I actually did a workshop at DDD 25, because you encouraged Philip to go out there.'
  },
  { startTime: 7511.02, person: 'Karol', text: ' So, yes.' },
  { startTime: 7513.46, person: 'Vlad', text: ' So happy to hear that.' },
  { startTime: 7516.08, person: 'Vlad', text: ' Thanks for sharing.' },
  {
    startTime: 7517.72,
    person: 'Karol',
    text: " We might not know, but actually what we talk about really, at times, inspires people and changes people's approach to reality and sharing and building competencies."
  },
  { startTime: 7532.38, person: 'Karol', text: ' So, the more, the better.' },
  { startTime: 7534.82, person: 'Vlad', text: ' Yeah, exactly.' },
  { startTime: 7535.74, person: 'Karol', text: ' All right.' },
  {
    startTime: 7539.1,
    person: 'Karol',
    text: " I know we can talk for hours on the subject, and there's more coupling to discover, especially if we dig deep down into code, into modules, into relationships between different aspects of systems that we do."
  },
  {
    startTime: 7559.22,
    person: 'Karol',
    text: ' But I think that may be a topic for a different day than today.'
  },
  {
    startTime: 7564.18,
    person: 'Karol',
    text: " So, dear audience, and there's plenty of people still watching us, which is after two hours is not always the case."
  },
  {
    startTime: 7574.34,
    person: 'Karol',
    text: " So, I'm really happy that there are so many people still watching."
  },
  {
    startTime: 7578.16,
    person: 'Karol',
    text: " Thank you for joining us tonight, and before we all go, in a week, we're really continuing the problem of coupling, because we're going to be talking about tackling complexity with semantic metadata, and Marty, potentially, and he's a very nerdy and geeky guy, and I absolutely love the guy for it."
  },
  {
    startTime: 7607.88,
    person: 'Karol',
    text: ' He is now trying to write a piece of software based on his current code base that could be actually used as an analytical tool, and I encouraged him to do that, and he went for it.'
  },
  {
    startTime: 7627.57,
    person: 'Karol',
    text: " So, hopefully, he'll manage, because he had about two weeks for that, and a week has passed."
  },
  {
    startTime: 7632.95,
    person: 'Karol',
    text: " So, that's going to be interesting if he manages."
  },
  {
    startTime: 7635.13,
    person: 'Karol',
    text: " If he doesn't, we're still going to have an absolutely amazing session about semantic metadata, because that's his bread and butter in the integration world, and he already has some interesting insights."
  },
  {
    startTime: 7647.67,
    person: 'Karol',
    text: ' Now, of course, if you want to learn more about what we do at Bridging the Gap, visit the site.'
  },
  {
    startTime: 7655.91,
    person: 'Karol',
    text: ' You can also see all the upcoming events by scanning the QR code visible to the left.'
  },
  {
    startTime: 7663.19,
    person: 'Karol',
    text: " Philip and I were running also a very nice training at DDD Academy this year, so we're talking about how to utilise DDD strategic and tactical patterns to design interoperability between systems, which is basically what we talked about today as well."
  },
  {
    startTime: 7682.91,
    person: 'Karol',
    text: ' Well, not the design part, but at least the understanding the dependencies part.'
  },
  {
    startTime: 7690.35,
    person: 'Karol',
    text: " And then, of course, if you're new to Bridging the Gap, and the loosely coupled live streams, please do subscribe to the live stream, to the channel on YouTube, and there's a QR for that."
  },
  {
    startTime: 7707.07,
    person: 'Karol',
    text: " So, Vlad, I suppose how we're going to do that, just to let people know, please, I think everybody ping me the emails on my LinkedIn, in a private message."
  },
  {
    startTime: 7722.95,
    person: 'Karol',
    text: " If you don't have me on LinkedIn, please add me on LinkedIn."
  },
  {
    startTime: 7726.39,
    person: 'Karol',
    text: " I'm really easily findable, and then I will relay all those email addresses of the winners to Vlad to distribute the codes for the book."
  },
  { startTime: 7739.79, person: 'Karol', text: ' Does that sound reasonable?' },
  { startTime: 7741.95, person: 'Karol', text: ' Yeah, perfect.' },
  { startTime: 7743.65, person: 'Karol', text: ' Fantastic.' },
  {
    startTime: 7745.21,
    person: 'Karol',
    text: ' That said, everybody, thank you for the amazing comment section tonight.'
  },
  { startTime: 7752.37, person: 'Karol', text: ' That was absolutely great.' },
  {
    startTime: 7754.51,
    person: 'Karol',
    text: ' Vlad, thank you for joining us for this session.'
  },
  { startTime: 7757.73, person: 'Karol', text: ' Absolutely wonderful to have you here.' },
  { startTime: 7761.23, person: 'Karol', text: ' Hopefully, not the last time.' },
  { startTime: 7763.43, person: 'Vlad', text: ' Thank you so much for having me.' },
  { startTime: 7765.61, person: 'Vlad', text: ' That was an amazing conversation.' },
  {
    startTime: 7767.67,
    person: 'Vlad',
    text: " I really loved it, and, yeah, I hope that's not the last time."
  },
  { startTime: 7772.45, person: 'Karol', text: ' Awesome.' },
  {
    startTime: 7772.97,
    person: 'Karol',
    text: " We'll find a more specific deep dive topic for the next time, just to have more fun in nuances."
  },
  { startTime: 7783.15, person: 'Karol', text: ' All right.' },
  { startTime: 7783.83, person: 'Karol', text: ' Fantastic.' },
  { startTime: 7785.17, person: 'Karol', text: ' So, thank you, everybody.' },
  {
    startTime: 7786.59,
    person: 'Karol',
    text: ' Have a great evening, afternoon, and, well, wherever you are, or maybe a morning.'
  },
  { startTime: 7792.19, person: 'Karol', text: " I don't know." }
])
</script>

<style scoped></style>
