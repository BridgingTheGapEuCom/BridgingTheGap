<template>
  <div class="w-full">
    <StreamLayout
      :transcript="transcript"
      name="Loosely Coupled - Can we get rid of developers? Is ‘Specification’ the new superskill?"
      video-id="oWH6dTCAQmE"
    />
  </div>
</template>

<script lang="ts" setup>
const transcript = ref([
  {
    startTime: 65.89,
    person: 'Karol',
    text: ' Good morning, good afternoon, and good evening, everybody, and welcome to another episode of Loosely Coupled, brought to you by Bridging the Gap.'
  },
  {
    startTime: 74.51,
    person: 'Karol',
    text: " My name is Karol Skrzymowski and I'll be your host tonight, and I hope everybody has something nice to drink."
  },
  {
    startTime: 79.33,
    person: 'Karol',
    text: ' Well, I got my beans finally, so now I have coffee, not like last week where I was kind of dry.'
  },
  {
    startTime: 87.93,
    person: 'Karol',
    text: " So today, today we're having a, let's say, slightly controversial topic, can we get rid of developers?"
  },
  {
    startTime: 95.95,
    person: 'Karol',
    text: " I think that's a question that a lot of people in the industry are asking or trying to answer, especially the business, whoever the business is, right?"
  },
  {
    startTime: 105.69,
    person: 'Karol',
    text: " So they're trying to figure out, can we get rid of developers?"
  },
  {
    startTime: 108.05,
    person: 'Karol',
    text: ' And to talk about this today, we actually have somebody from the audience this time around because Swen-Helge Huber is a silent viewer of our live stream.'
  },
  {
    startTime: 122.23,
    person: 'Karol',
    text: " He's been sitting there somewhere in the background cooking dinner nearly every Wednesday, just looking at the stream and listening into."
  },
  { startTime: 130.45, person: 'Karol', text: ' And Swen is an interesting person.' },
  {
    startTime: 133.69,
    person: 'Karol',
    text: " He's a senior director at Solace with the office of the CTO."
  },
  {
    startTime: 138.01,
    person: 'Karol',
    text: ' So yeah, technology-wise, quite a high position.'
  },
  {
    startTime: 142.37,
    person: 'Karol',
    text: " So probably, Swen, you're probably asking the same question."
  },
  { startTime: 145.65, person: 'Karol', text: ' Can we get rid of developers?' },
  {
    startTime: 147.29,
    person: 'Karol',
    text: " And I know your opinion on it on the matter, but before we jump into the matter, tell us a bit where you come from, why you're here, and why as a senior director at Solace, this is such a triggering and an emotional topic for you."
  },
  {
    startTime: 162.45,
    person: 'Swen',
    text: " Yeah, it was more, it's not super directly, it's kind of related."
  },
  {
    startTime: 166.57,
    person: 'Swen',
    text: " But not super directly related to what I'm doing."
  },
  {
    startTime: 168.83,
    person: 'Swen',
    text: " So thanks first for having me on today, that's cool."
  },
  { startTime: 172.35, person: 'Swen', text: ' So as you said, I work in Solace.' },
  {
    startTime: 175.11,
    person: 'Swen',
    text: " I've done a lot, I've been around the block a good few times in the middleware space and the integration space for various vendors."
  },
  {
    startTime: 183.65,
    person: 'Swen',
    text: " I've been through the whole emergence of SOA, APIs, ETL, big data, data integration, event distribution with Solace now, and so on, right?"
  },
  {
    startTime: 196.63,
    person: 'Swen',
    text: " So I've been, and I've ran development projects as well."
  },
  {
    startTime: 201.85,
    person: 'Swen',
    text: ' So I had a stint as a, within different, or multiple stints actually in consultancies as well.'
  },
  {
    startTime: 208.47,
    person: 'Swen',
    text: ' So building software, managing software projects, and so on.'
  },
  { startTime: 212.59, person: 'Swen', text: " So I've been around the block a little bit." },
  {
    startTime: 214.55,
    person: 'Swen',
    text: " And I'm still kind of a techie at heart, whatever I do."
  },
  { startTime: 219.83, person: 'Swen', text: " So I've done a lot of different things." },
  {
    startTime: 221.13,
    person: 'Swen',
    text: " But I'm still like, I still like to cut code and build stuff."
  },
  {
    startTime: 228.41,
    person: 'Swen',
    text: " And so what triggered me was like, we're going to talk about that, right?"
  },
  {
    startTime: 231.89,
    person: 'Swen',
    text: ' I saw a talk by someone from OpenAPI about, sorry, OpenAI.'
  },
  { startTime: 237.61, person: 'Swen', text: ' Very confusing.' },
  { startTime: 239.17, person: 'Swen', text: ' Like only one letter off.' },
  { startTime: 240.75, person: 'Swen', text: " So it's about- Yeah, too close, right?" },
  {
    startTime: 243.13,
    person: 'Swen',
    text: ' And I think, yeah, so we all probably make this mistake.'
  },
  {
    startTime: 246.91,
    person: 'Swen',
    text: ' So I got it out of the way pretty quickly today.'
  },
  { startTime: 249.57, person: 'Swen', text: " So that's good." },
  {
    startTime: 252.95,
    person: 'Swen',
    text: " Yeah, that kind of triggered me because like there's, throughout my, like actually when I started as a consultant working on development projects, there was like, I kind of was the code monkey, right?"
  },
  { startTime: 268.15, person: 'Swen', text: ' So to an extent.' },
  {
    startTime: 270.01,
    person: 'Swen',
    text: ' And that kind of like, when I watched that, it put me straight back into the early 2000s.'
  },
  {
    startTime: 275.35,
    person: 'Swen',
    text: ' In a different, like, there was a different context, but like it kind of gave me flashbacks to my early consulting days.'
  },
  {
    startTime: 284.95,
    person: 'Swen',
    text: ' And I was like, I thought, this is something we need to talk about.'
  },
  {
    startTime: 289.35,
    person: 'Swen',
    text: ' And who better to talk about it with than with you, Karol?'
  },
  {
    startTime: 293.85,
    person: 'Karol',
    text: ' We had our share of conversations and discussions.'
  },
  { startTime: 296.91, person: 'Karol', text: ' So yeah, sure.' },
  { startTime: 298.01, person: 'Karol', text: " Let's debate." },
  { startTime: 299.47, person: 'Karol', text: " So what's your stance on it?" },
  { startTime: 303.77, person: 'Karol', text: " Just plain, simple, let's answer the question." },
  { startTime: 305.95, person: 'Karol', text: ' Can we get rid of developers?' },
  { startTime: 307.47, person: 'Karol', text: " What's your stance on that?" },
  {
    startTime: 309.61,
    person: 'Swen',
    text: " I do have like other commitments tonight, but we don't have to close it down in the next minute."
  },
  { startTime: 315.05, person: 'Swen', text: " So we don't have to go straight to that." },
  { startTime: 317.79, person: 'Swen', text: " I'm unsure." },
  { startTime: 319.03, person: 'Swen', text: " Like it's, I don't think we can." },
  {
    startTime: 324.37,
    person: 'Swen',
    text: ' I think we can in certain, to a certain extent, and I still, like, I think we should be more thinking about productivity gains and ways where we can actually, like, this is actually awful because for the next generation, because like the first things to go will be the junior developer type stuff, right?'
  },
  {
    startTime: 346.83,
    person: 'Swen',
    text: " So they're kind of like, hey, can you build all these DAOs, like data access objects or these controllers, like this paint by number kind of stuff that developers, like junior developers would do, right?"
  },
  {
    startTime: 358.85,
    person: 'Swen',
    text: ' That kind of like, those are the things that will go or the less complex bits where you can actually kind of, we can automate a lot, right?'
  },
  {
    startTime: 366.89,
    person: 'Swen',
    text: " Like, I don't think it should, we should, I don't think it should happen because there is too much to being a good developer to automate, like to completely get rid of it."
  },
  {
    startTime: 381.97,
    person: 'Karol',
    text: ' OK, I think there are definitely several aspects to it.'
  },
  {
    startTime: 387.09,
    person: 'Karol',
    text: " It's not just getting rid of a developer or not, because looking at the just the use of AI and the right now, the divide between what people think AI can deliver and they slowly get disillusioned on that."
  },
  { startTime: 405.95, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 406.23,
    person: 'Karol',
    text: ' And what people have been telling from the start that is actually feasible and realistic for it to deliver.'
  },
  {
    startTime: 413.53,
    person: 'Karol',
    text: " Well, we're starting to get closer to somewhere where people start agreeing with each other."
  },
  {
    startTime: 418.85,
    person: 'Karol',
    text: ' Yeah, it will still take some time before they actually jump there.'
  },
  {
    startTime: 423.07,
    person: 'Karol',
    text: ' But I think the aspects are not only purely technical.'
  },
  {
    startTime: 427.91,
    person: 'Karol',
    text: ' From a technical perspective, yeah, certain parts of what we do as developers, as programmers can be easily automated.'
  },
  {
    startTime: 435.81,
    person: 'Karol',
    text: " We've been seeing that for the last 15 years, more."
  },
  {
    startTime: 441.01,
    person: 'Karol',
    text: ' CI, CD, a great example of automation that basically should have replaced developer.'
  },
  { startTime: 447.01, person: 'Karol', text: ' Now we have DevOps engineers.' },
  { startTime: 448.93, person: 'Swen', text: ' Yeah, we just have more of them.' },
  { startTime: 450.43, person: 'Swen', text: ' Yeah, more of them doing different things.' },
  {
    startTime: 453.05,
    person: 'Karol',
    text: ' Yeah, so doing different things, doing more abstract things than they were.'
  },
  {
    startTime: 457.13,
    person: 'Karol',
    text: ' I remember my beginnings as a developer at the time we were deploying on production.'
  },
  {
    startTime: 463.55,
    person: 'Karol',
    text: ' We were already using some sort of automation, which was basically a bunch of bash scripts that you have to invoke in sequence so that all the things deployed to production as they should.'
  },
  { startTime: 476.65, person: 'Karol', text: ' That was already a sort of automation.' },
  { startTime: 479.33, person: 'Karol', text: ' We had a repeatable task.' },
  { startTime: 480.57, person: 'Karol', text: ' We automated that.' },
  {
    startTime: 482.07,
    person: 'Karol',
    text: " Yeah, but these tasks are repeatable, so they're easy to automate."
  },
  {
    startTime: 489.15,
    person: 'Karol',
    text: ' Now, the question is, the things that developers do, is it as easy to automate through the use of AI or Gen AI?'
  },
  {
    startTime: 501.24,
    person: 'Swen',
    text: ' Yeah, and there are more, as you say, more implications than just, can we automate it?'
  },
  {
    startTime: 507.44,
    person: 'Swen',
    text: " But there's also questions of, should we automate it or what happens when we automate?"
  },
  {
    startTime: 513.98,
    person: 'Swen',
    text: " There are multiple implications around that, where you'd actually think, is it actually like, even if there's a lot of things we can do, is it a good idea to actually do them?"
  },
  { startTime: 522.679, person: 'Swen', text: " It's also a question to ask." },
  { startTime: 524.58, person: 'Swen', text: ' True.' },
  {
    startTime: 525.5,
    person: 'Karol',
    text: " So maybe let's try to, for the matter of this, let's try to figure out, maybe do a bit of a trade-off analysis, what we gain, what we lose when we replace, let's say, those junior roles or those coder roles with AI or, well, specialised agents or whatever tool would be."
  },
  { startTime: 550.52, person: 'Karol', text: ' So, okay.' },
  { startTime: 552.64, person: 'Karol', text: ' We potentially gain speed, potentially.' },
  {
    startTime: 556.96,
    person: 'Karol',
    text: ' Humans are not exactly reliable in terms of speed, right?'
  },
  {
    startTime: 560.16,
    person: 'Karol',
    text: " Because there are so many aspects that influence how fast, how performant we are, that a, let's say, semi-deterministic tool will be definitely quicker."
  },
  { startTime: 573.16, person: 'Karol', text: ' Yeah, in a lot of aspects.' },
  { startTime: 575.28, person: 'Karol', text: ' So we gain speed.' },
  { startTime: 576.2, person: 'Karol', text: ' Okay.' },
  { startTime: 577.58, person: 'Karol', text: ' What else would we gain?' },
  { startTime: 579.6, person: 'Karol', text: ' From this?' },
  {
    startTime: 582.72,
    person: 'Swen',
    text: " Well, so there's like, maybe it would be good to kind of like summarise where this, because this was quite like, I shared this with you, this talk by Sean Grove, right?"
  },
  { startTime: 593.12, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 594.74,
    person: 'Swen',
    text: ' And there were quite a lot of sweeping statements in there, which got me triggered.'
  },
  {
    startTime: 603.08,
    person: 'Swen',
    text: ' So like, there is kind of like a thing, because there are multiple levels where we actually think like, yeah, could this speed us up?'
  },
  {
    startTime: 609.76,
    person: 'Swen',
    text: ' Could this take the boring stuff out of our work?'
  },
  {
    startTime: 612.94,
    person: 'Swen',
    text: ' Could this help us to maybe concentrate on the aspects that some people would say are the real important stuff, like getting the requirements right and getting all the test cases right and so on, right?'
  },
  { startTime: 632.76, person: 'Karol', text: ' All right.' },
  { startTime: 633.3, person: 'Karol', text: ' So you want to go through those statements?' },
  { startTime: 636.56, person: 'Swen', text: " Maybe it'll make sense." },
  {
    startTime: 638.02,
    person: 'Swen',
    text: " I'm not sure if you think of it, if you agree, but I think maybe it makes sense to just quickly like zip through, like, I can do this like verbally, like, or we can bring up the slides, but I like the two minute summary of like, why I got so triggered."
  },
  {
    startTime: 651.16,
    person: 'Karol',
    text: " Let's go, I'll make notes and let's put that on screen."
  },
  { startTime: 656.32, person: 'Karol', text: ' Why not?' },
  { startTime: 659.34, person: 'Karol', text: ' There we go.' },
  { startTime: 661.12, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 661.48,
    person: 'Swen',
    text: " So the way this happened is like the presenter came in and said like, you know, you're all developers, but are you really coding all of the time?"
  },
  {
    startTime: 671.88,
    person: 'Swen',
    text: ' And, and he went like, and his conclusion was like, so a bit of audience engagement.'
  },
  { startTime: 675.94, person: 'Swen', text: ' And he went like, yeah, do you know what?' },
  {
    startTime: 678.1,
    person: 'Swen',
    text: " Like, you're actually like, you're not really coders."
  },
  { startTime: 681.04, person: 'Swen', text: ' You are actually people who do a bit of coding.' },
  {
    startTime: 683.36,
    person: 'Swen',
    text: ' And the real impact you have is by like communicating with people, right.'
  },
  { startTime: 688.24, person: 'Swen', text: ' And structured communication.' },
  {
    startTime: 691.88,
    person: 'Swen',
    text: ' And then he went like, what is, what does all that do?'
  },
  { startTime: 694.48, person: 'Swen', text: ' You have to talk to people.' },
  { startTime: 695.64, person: 'Swen', text: ' You have to understand people.' },
  { startTime: 696.8, person: 'Swen', text: ' You need to kind of summarise discussions.' },
  {
    startTime: 699.44,
    person: 'Swen',
    text: " You need to plan like all of the stuff he's highlighting."
  },
  {
    startTime: 701.84,
    person: 'Swen',
    text: ' There are so many activities going on that are not coding.'
  },
  { startTime: 705.2, person: 'Swen', text: ' Right.' },
  {
    startTime: 705.42,
    person: 'Swen',
    text: ' So that kind of went like, I was like, oh yeah, that, that all makes sense.'
  },
  {
    startTime: 709.22,
    person: 'Swen',
    text: ' And then he came to the point where he said that the people who communicate best will be the best programmers.'
  },
  {
    startTime: 714.9,
    person: 'Swen',
    text: ' And that kind of made me think like, like I know really good programmers who are awful communicators.'
  },
  { startTime: 720.28, person: 'Swen', text: " So that's where he lost me a little bit." },
  { startTime: 722.38, person: 'Swen', text: ' Right.' },
  {
    startTime: 723.96,
    person: 'Swen',
    text: " And then he came to the point where I said like, so actually, because we're"
  },
  {
    startTime: 728.04,
    person: 'Swen',
    text: " so good at communication and coding doesn't really matter, we just write"
  },
  {
    startTime: 731.18,
    person: 'Swen',
    text: ' a really good specification and then we can talk about this, flesh it out and'
  },
  {
    startTime: 737.16,
    person: 'Swen',
    text: ' make it better, and then we can throw it at AI and AI will write the software for'
  },
  {
    startTime: 742.34,
    person: 'Swen',
    text: " us, just like the analogy he makes, like, and like, if I write TypeScript, that's"
  },
  {
    startTime: 747.58,
    person: 'Swen',
    text: " being transformed into JavaScript and then it's being run in a just-in-time"
  },
  { startTime: 751.5, person: 'Swen', text: ' compiler, like putting AI in the middle.' },
  {
    startTime: 753.94,
    person: 'Swen',
    text: " It's just another sort of interpreter go from specification to code."
  },
  {
    startTime: 757.82,
    person: 'Swen',
    text: " And that's where I went like, is coding really just like, is there something more to coding like crafting?"
  },
  { startTime: 764.7, person: 'Swen', text: ' Is it a craft?' },
  { startTime: 765.6, person: 'Swen', text: ' Is there more to coding?' },
  {
    startTime: 766.54,
    person: 'Swen',
    text: ' Just kind of go like, oh, this is what we need to do.'
  },
  { startTime: 768.78, person: 'Swen', text: ' And you just kind of like hack the stuff down.' },
  { startTime: 771.62, person: 'Swen', text: ' Like, is that the process really?' },
  {
    startTime: 773.06,
    person: 'Swen',
    text: ' Is that the coding process that only to kind of take a specification, look left, code it up in TypeScript, check the whole thing in and build, or is there more to coding, right?'
  },
  {
    startTime: 784,
    person: 'Swen',
    text: " So that's, that's where I thought like, nah, this is a bit weird."
  },
  {
    startTime: 786.88,
    person: 'Swen',
    text: " And then the other aspect where I was a bit concerned about was because it said like, yeah, let's write these specifications."
  },
  {
    startTime: 793.16,
    person: 'Swen',
    text: ' And then all these examples of specifications were essentially like markdown files, right?'
  },
  { startTime: 798.48, person: 'Swen', text: ' And so you write your markdown files.' },
  {
    startTime: 800.68,
    person: 'Swen',
    text: " And then the other example he had is like, now you put in test cases, you may have them in different markdown files, but like they're all natural language test cases, kind of like, you know, like what do we need to suppress in our open AI model?"
  },
  {
    startTime: 813.24,
    person: 'Swen',
    text: " What do we not want them to like, we don't want to spread conspiracy theories."
  },
  { startTime: 816.98, person: 'Swen', text: " So let's write some rules around that, right?" },
  {
    startTime: 819.52,
    person: 'Swen',
    text: ' All of the edge cases that people could ask for.'
  },
  {
    startTime: 825.24,
    person: 'Swen',
    text: ' And then, and then he concludes essentially to say like software engineering has never been about code.'
  },
  {
    startTime: 830.24,
    person: 'Swen',
    text: " It's like, it's the, it's the, the getting explored the problem, figure out how to solve it, come up with a specification, come up with the requirements, come up with the specification, come up with some designs and then codifying it."
  },
  {
    startTime: 849.52,
    person: 'Swen',
    text: ' And what if we can make the take, take that kind of like the codifying aspect out of the whole thing.'
  },
  { startTime: 855.4, person: 'Swen', text: " And that's really like, that's a short summary." },
  {
    startTime: 857.34,
    person: 'Swen',
    text: ' And I felt like this raised so many questions in me and it also, yeah.'
  },
  {
    startTime: 862.78,
    person: 'Swen',
    text: " So that's just kind of like the quick rundown of like why there's so many interesting things in there."
  },
  {
    startTime: 868.78,
    person: 'Swen',
    text: " And there's most probably things that we can do that work in certain contexts, but they don't work in all of them, in every context."
  },
  { startTime: 878.8, person: 'Swen', text: ' Right.' },
  {
    startTime: 879,
    person: 'Swen',
    text: " So maybe he's right in some respects, but not in others."
  },
  { startTime: 881.74, person: 'Swen', text: " Maybe he's, we'd also think like, yeah." },
  { startTime: 886.06, person: 'Swen', text: ' Right.' },
  {
    startTime: 886.5,
    person: 'Swen',
    text: " So there's like this raised a lot of questions for me."
  },
  {
    startTime: 888.94,
    person: 'Swen',
    text: " So does that make sense as a quick kind of, do you think that makes sense as a quick recap of what, what, what he's getting at?"
  },
  { startTime: 895.42, person: 'Swen', text: ' I have notes from the recap.' },
  { startTime: 898.66, person: 'Karol', text: ' So, so yeah, that, that does make sense.' },
  {
    startTime: 901.18,
    person: 'Karol',
    text: ' You know, I think one thing that would be of value before we, we continue, I think'
  },
  {
    startTime: 907.6,
    person: 'Karol',
    text: " it's a very, I found yesterday, I think somebody was sharing on LinkedIn again"
  },
  {
    startTime: 915.28,
    person: 'Karol',
    text: ' around the topics of the definitions, because my first problem with the overall'
  },
  {
    startTime: 924.03,
    person: 'Karol',
    text: ' statement from business, not, not from techies, because techies are kind of most'
  },
  {
    startTime: 930.37,
    person: 'Karol',
    text: " of the part disillusioned, but from the business is that we've got to replace"
  },
  { startTime: 934.03, person: 'Karol', text: ' developers, right?' },
  {
    startTime: 935.13,
    person: 'Karol',
    text: " But the definition of the role developer oftentimes within one company, there's like 20 definitions of the role developer."
  },
  { startTime: 946.13, person: 'Karol', text: ' Who is a developer?' },
  { startTime: 947.55, person: 'Karol', text: " What's the profile?" },
  { startTime: 948.59, person: 'Karol', text: ' Who, what does that person do?' },
  {
    startTime: 950.47,
    person: 'Karol',
    text: " And of course, if we're looking at a startup or a small company, that may be one definition, but then if you go to larger environments, then there's so many of those definitions, right?"
  },
  {
    startTime: 964.01,
    person: 'Karol',
    text: ' And the larger the environment, the different, the organisational sociotechnical constraints, which means that the definitions change even more.'
  },
  {
    startTime: 972.73,
    person: 'Karol',
    text: ' And I think we, from a perspective of language, we tend to use the word coder,'
  },
  {
    startTime: 979.29,
    person: 'Karol',
    text: ' programmer, developer, software engineer interchangeably, but I think from'
  },
  {
    startTime: 984.79,
    person: 'Karol',
    text: ' perspective of semantics, they are actually different terms and that comes'
  },
  {
    startTime: 990.71,
    person: 'Karol',
    text: ' to psychology because we simplify things to make our lives comprehensible and'
  },
  {
    startTime: 995.39,
    person: 'Karol',
    text: " that's fine, but I think these, there is a difference and for that, I actually"
  },
  {
    startTime: 1000.89,
    person: 'Karol',
    text: ' have a snippet of a video from Dave Farley, am I correct?'
  },
  { startTime: 1007.43, person: 'Karol', text: ' Hold on.' },
  { startTime: 1007.77, person: 'Karol', text: ' Let me see it.' },
  { startTime: 1008.33, person: 'Karol', text: ' Just quick check my notes.' },
  { startTime: 1010.11, person: 'Karol', text: ' Yeah, Dave Farley.' },
  {
    startTime: 1012.53,
    person: 'Karol',
    text: " And I think we can just listen for a moment to what he's saying."
  },
  { startTime: 1016.27, person: 'Karol', text: ' I snapped a very short one out of that.' },
  { startTime: 1021.53, person: 'Karol', text: ' So let me put that one on.' },
  {
    startTime: 1024.99,
    person: 'Karol',
    text: ' My three different types of programmer are the coder, the software developer, and the software engineer.'
  },
  {
    startTime: 1031.39,
    person: 'Karol',
    text: " I don't think that these are necessarily about levels of experience, although that may play a part for some people."
  },
  {
    startTime: 1038.65,
    person: 'Karol',
    text: " I don't think that these categories are only arbitrary labels either."
  },
  { startTime: 1043.109, person: 'Karol', text: ' That all fundamentally mean the same thing.' },
  {
    startTime: 1045.89,
    person: 'Karol',
    text: " To my mind, what we're talking about are distinct groups that behave differently and get quite different results."
  },
  {
    startTime: 1053.31,
    person: 'Karol',
    text: ' And even though one programmer may play each of these roles at different times, these are not necessarily, but maybe partly about the ability and skill of the individual programmer.'
  },
  {
    startTime: 1065.91,
    person: 'Karol',
    text: " They're often much more likely to be a function of the environment that we find ourself working in."
  },
  {
    startTime: 1071.69,
    person: 'Karol',
    text: ' My three different types of programmer are the coder, the software developer, and the software engineer.'
  },
  { startTime: 1077.63, person: 'Karol', text: ' Yeah.' },
  { startTime: 1079.95, person: 'Karol', text: ' So that said, hold on.' },
  { startTime: 1084.29, person: 'Karol', text: ' Oh, why is it not going away?' },
  { startTime: 1087.95, person: 'Karol', text: ' Hello, studio.' },
  { startTime: 1091.19, person: 'Karol', text: ' Now we have a glitch in the software.' },
  { startTime: 1094.19, person: 'Karol', text: ' I turn it off and it pops back on.' },
  { startTime: 1096.71, person: 'Karol', text: ' Okay.' },
  { startTime: 1096.91, person: 'Swen', text: " Now we're good." },
  {
    startTime: 1099.87,
    person: 'Karol',
    text: ' So for those, now let me see if I actually included the link somewhere because I wanted to, and I think I forgot.'
  },
  { startTime: 1107.45, person: 'Karol', text: ' So give me a moment.' },
  {
    startTime: 1108.33,
    person: 'Karol',
    text: " I'll put the link in a QR in the moment for those who want to take a look and watch the full thing."
  },
  {
    startTime: 1115.07,
    person: 'Karol',
    text: ' But that basically says, well, we have different types of people working on different aspects and in different ways.'
  },
  {
    startTime: 1123.55,
    person: 'Karol',
    text: ' And this is, the problem is not a purely technical problem.'
  },
  {
    startTime: 1128.21,
    person: 'Karol',
    text: " It's a socio-technical problem to that extent."
  },
  {
    startTime: 1133.39,
    person: 'Karol',
    text: " And I think that's the biggest case here that a lot of people don't understand that this is actually a more complex aspect than just producing code because the aspect is as well, are we able to comprehend the code or are we just script kiddies, you know, code monkeys producing Shakespeare with a bit of luck, right?"
  },
  {
    startTime: 1162.71,
    person: 'Karol',
    text: " And then for those who want to watch the clip, well, this is the link to the clip, but there's, of course, you can watch the full thing by clicking on YouTube."
  },
  { startTime: 1171.71, person: 'Karol', text: ' So this is the source.' },
  { startTime: 1176.59, person: 'Karol', text: ' I think there are many aspects to it.' },
  {
    startTime: 1179.21,
    person: 'Karol',
    text: ' So just the role of the developer, some people will put it down to the lowest level of being a coder, meaning that this would be a person that just easily just step by step translates from specification to code.'
  },
  {
    startTime: 1197.27,
    person: 'Karol',
    text: ' No ingenuity, no inspired thinking, no ideas to go outside of the box or ask questions.'
  },
  { startTime: 1203.71, person: 'Karol', text: ' Just this is the spec.' },
  {
    startTime: 1205.19,
    person: 'Karol',
    text: " I'm going to just translate it, write it down."
  },
  { startTime: 1207.11, person: 'Karol', text: " That's it, right?" },
  {
    startTime: 1209.73,
    person: 'Karol',
    text: " Others will say that, well, the software developer is a role where you know what you're doing and you can propose certain changes to optimise what you're doing that are outside of the scope of the specification."
  },
  {
    startTime: 1222.49,
    person: 'Karol',
    text: ' And then you have the definition of a software engineer, which also is often called a software developer, which is a role which I would also name an architect.'
  },
  {
    startTime: 1237.51,
    person: 'Karol',
    text: ' So looking at the really big picture and being able to actually shape how this should look like.'
  },
  {
    startTime: 1244.43,
    person: 'Karol',
    text: " Now, the biggest problem I have with the statements that we could potentially replace developers is that I'm not convinced that any Gen AI model will be sustainable when it reaches the amount of data it can hold in a context window to not hallucinate over code."
  },
  {
    startTime: 1269.7,
    person: 'Swen',
    text: ' That goes back to, I think, what I mentioned earlier, like the context, right?'
  },
  {
    startTime: 1276.74,
    person: 'Swen',
    text: ' So how big is the problem and does it fit into...'
  },
  {
    startTime: 1280.66,
    person: 'Swen',
    text: " There's two aspects to that, but like, is it small enough so you can fit it into the attention span of an AI agent, right?"
  },
  {
    startTime: 1292.24,
    person: 'Swen',
    text: ' And the other, so that is really, that is one part.'
  },
  {
    startTime: 1295.56,
    person: 'Karol',
    text: " And if you compare that to, OK, we tend to say that a lot of people nowadays have the attention span of a goldfish, which we've been constantly distracted by social media, TikToks, Instagrams and whatever."
  },
  { startTime: 1309.38, person: 'Karol', text: ' Kind of true to an extent, right?' },
  {
    startTime: 1313.08,
    person: 'Karol',
    text: ' We see that through statistics of media consumption.'
  },
  { startTime: 1316.1, person: 'Karol', text: " People don't spend on videos minutes." },
  {
    startTime: 1319.24,
    person: 'Karol',
    text: ' They spend seconds and they just scroll past, right?'
  },
  { startTime: 1322.34, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 1322.62,
    person: 'Swen',
    text: " Just watch like a teenage, like your kids aren't teenagers yet, but like watch a teenager scroll through their phone, like it's..."
  },
  { startTime: 1330.48, person: 'Karol', text: " Yeah, it's do, do, do, do, done, right?" },
  { startTime: 1332.98, person: 'Karol', text: " And that's fair." },
  {
    startTime: 1334.28,
    person: 'Swen',
    text: ' But still, if we think like AI will have like a longer attention span.'
  },
  {
    startTime: 1338.38,
    person: 'Swen',
    text: ' We get to a point where like junior developers will not pay attention.'
  },
  { startTime: 1343.06, person: 'Swen', text: ' Well, potentially, but...' },
  {
    startTime: 1344.8,
    person: 'Swen',
    text: " And they'll not pay enough attention and we'd better off talk to an AI instead of a junior developer."
  },
  { startTime: 1349.48, person: 'Swen', text: " Is that what you're getting at?" },
  { startTime: 1351.96, person: 'Karol', text: " Maybe we'll reach that point, maybe not." },
  { startTime: 1354.06, person: 'Karol', text: " I don't know." },
  { startTime: 1355.58, person: 'Karol', text: ' But what I would be getting at is that.' },
  { startTime: 1360.36, person: 'Karol', text: ' People in general.' },
  { startTime: 1362.86, person: 'Karol', text: ' I think have a better.' },
  { startTime: 1365.92, person: 'Karol', text: " Context window, let's say." },
  {
    startTime: 1367.62,
    person: 'Karol',
    text: " It's not about the attention itself, but the persistence of context."
  },
  {
    startTime: 1374.7,
    person: 'Karol',
    text: " And if I if somebody would ask me what I was doing that, I don't know, 12 years."
  },
  {
    startTime: 1381.38,
    person: 'Karol',
    text: " I still with 12 years ago, I mean, I still with a lot of clarity can recall the projects I've been working on."
  },
  {
    startTime: 1390.12,
    person: 'Karol',
    text: ' I was at the time working for T-Mobile Poland.'
  },
  {
    startTime: 1393.62,
    person: 'Karol',
    text: " I still recall the integration projects I've been working on and I still recall the context of those projects."
  },
  {
    startTime: 1399.26,
    person: 'Karol',
    text: ' And for example, certain screw ups that I made as a developer, as a junior developer that I was later fixing as a integration architect.'
  },
  { startTime: 1407.98, person: 'Karol', text: ' Right.' },
  {
    startTime: 1408.46,
    person: 'Karol',
    text: ' So the context window that we have as humans is a lot larger and we can comprehend that more and on different abstraction layers.'
  },
  { startTime: 1417.08, person: 'Karol', text: ' Whereas.' },
  {
    startTime: 1419.24,
    person: 'Karol',
    text: " All the AI tools that I've seen so far and tested so far."
  },
  {
    startTime: 1424.5,
    person: 'Karol',
    text: ' They go hallucinating whenever you go more than one abstraction layer.'
  },
  {
    startTime: 1429.08,
    person: 'Karol',
    text: " If you're on a single abstraction layer, they're going to be fine."
  },
  { startTime: 1433.24, person: 'Karol', text: ' Yeah, because I do.' },
  {
    startTime: 1434.68,
    person: 'Karol',
    text: ' Just to be clear, I use AI all the time, every single day, basically.'
  },
  {
    startTime: 1439.64,
    person: 'Karol',
    text: ' I also use AI to, well, vibe code, not really vibe code.'
  },
  {
    startTime: 1444.18,
    person: 'Karol',
    text: " It's more a specification driven coding because I don't know all the languages."
  },
  { startTime: 1449.84, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 1449.94,
    person: 'Karol',
    text: ' And I never learned bash properly, but I often need bash.'
  },
  { startTime: 1453.6, person: 'Karol', text: ' So I need some witty one liners.' },
  {
    startTime: 1455.86,
    person: 'Karol',
    text: ' So I just ask Gen AI, in this case Gemini, give me a one liner for this and this.'
  },
  {
    startTime: 1461.18,
    person: 'Karol',
    text: " On that abstraction level and in that small context, it's just peachy."
  },
  { startTime: 1465.54, person: 'Karol', text: ' Yeah.' },
  { startTime: 1466.04, person: 'Swen', text: " But I fear that it's not going to go further." },
  {
    startTime: 1470.68,
    person: 'Swen',
    text: " Well, that's why I think it's absolutely valuable."
  },
  { startTime: 1474.52, person: 'Swen', text: " It's a sparing partner." },
  {
    startTime: 1478.88,
    person: 'Swen',
    text: " It's also did pair programming in some ways, but it still has an aspect of like a junior kind of like, you need to feed in the right things and you need to keep your coding assistants on the lead."
  },
  {
    startTime: 1494.9,
    person: 'Swen',
    text: ' And kind of also kind of tell it what is a good pattern that you want to replicate.'
  },
  { startTime: 1500.86, person: 'Swen', text: ' Right.' },
  {
    startTime: 1500.98,
    person: 'Swen',
    text: ' So in that case, and therefore, I can see productivity enhancements on that, of course.'
  },
  { startTime: 1506.68, person: 'Swen', text: " And I've done that as well." },
  { startTime: 1507.76, person: 'Swen', text: ' Right.' },
  {
    startTime: 1508.16,
    person: 'Swen',
    text: " But it's not something like where you go, I just tell you what to write and I take everything you've produced, you AI, and I'll put that in production and hope for the best."
  },
  {
    startTime: 1519.44,
    person: 'Swen',
    text: ' Or, well, then of course I could use AI to create all my test cases as well.'
  },
  {
    startTime: 1525.18,
    person: 'Swen',
    text: ' And I hope that all these test cases will, right.'
  },
  {
    startTime: 1527.56,
    person: 'Swen',
    text: " So it's not like the wild west, but there is a lot of trust I need to put into what is being precisely from me."
  },
  { startTime: 1535.34, person: 'Swen', text: ' Right.' },
  {
    startTime: 1535.46,
    person: 'Swen',
    text: ' And that also means like, I actually need to, well, I find kind of sometimes also frustrating is like, because you need to be very specific.'
  },
  {
    startTime: 1543.3,
    person: 'Swen',
    text: " And because as to your point, like if you don't ask a specific questions, you get some stuff back, whatever it hallucinates, whatever it thinks is the best answer."
  },
  { startTime: 1551.78, person: 'Karol', text: ' Oh my, this brings me to a great example.' },
  {
    startTime: 1554.1,
    person: 'Karol',
    text: " I've been commenting on several times on LinkedIn."
  },
  {
    startTime: 1557.22,
    person: 'Karol',
    text: " People posted this apart from the strawberry fiasco of recounting Rs in strawberry, which is, yeah, that's just how tokens work and it's not going to work simply."
  },
  {
    startTime: 1568.42,
    person: 'Karol',
    text: ' But people put a question, which value is higher 9.11 or 9.9. And then various models or with various users, it either answered that 9.11 is higher or 9.9. The biggest problem with that question to an LLM is that both answers are actually true.'
  },
  {
    startTime: 1590.7,
    person: 'Karol',
    text: ' And people cannot comprehend that both of those answers are actually true because they are in the context of math.'
  },
  {
    startTime: 1598.14,
    person: 'Karol',
    text: ' And they never conveyed that this is a mathematical comparison in the context for the LLM and LLM requires context to be able to comprehend that.'
  },
  { startTime: 1610.04, person: 'Karol', text: ' Right.' },
  {
    startTime: 1610.26,
    person: 'Karol',
    text: " So I'm like, start being AI literate instead of saying that AI is wrong in that aspect."
  },
  { startTime: 1619.42, person: 'Karol', text: " It wasn't wrong." },
  {
    startTime: 1620.16,
    person: 'Karol',
    text: " You were wrong because you didn't provide context."
  },
  {
    startTime: 1622.72,
    person: 'Karol',
    text: ' This is the biggest problem that we are so accustomed to not given context because we are in context.'
  },
  { startTime: 1630.64, person: 'Karol', text: ' Yeah.' },
  { startTime: 1630.9, person: 'Karol', text: ' We live in context.' },
  { startTime: 1632.26, person: 'Swen', text: ' Exactly.' },
  {
    startTime: 1632.64,
    person: 'Karol',
    text: " We assume that the other person also has context and is in the same context, which is sometimes a very wrong assumption, but that's usually easily catchable in a conversation when we converse."
  },
  { startTime: 1645.5, person: 'Karol', text: " We know we're in the wrong context." },
  {
    startTime: 1647.76,
    person: 'Karol',
    text: ' And the funny thing is that I pointed out that, well, okay, why is 9.11 higher than 9.9?'
  },
  {
    startTime: 1657.08,
    person: 'Karol',
    text: ' Well, if you look at versioning, for example, well, obviously 9.11 is a higher version than 9.9. We have no idea who asked that question and what was the history of prompts.'
  },
  {
    startTime: 1668.26,
    person: 'Karol',
    text: ' So if that was a developer asking about semantic versioning at any point in time and never asking about mathematical equations, well, duh, obviously the context assumed by the LLM that has access to prompting history will assume programmer will assume versioning.'
  },
  { startTime: 1684.28, person: 'Karol', text: ' Right.' },
  {
    startTime: 1684.82,
    person: 'Karol',
    text: " And there are several other examples how this can be interpreted differently by the LLM if we don't provide that context."
  },
  {
    startTime: 1693.82,
    person: 'Karol',
    text: ' We as human beings are bad at providing context.'
  },
  { startTime: 1697.22, person: 'Karol', text: ' So then how do we specify to an LLM?' },
  {
    startTime: 1702.22,
    person: 'Karol',
    text: ' And this is the second question here that is in my notes from that video you mentioned.'
  },
  { startTime: 1708.26, person: 'Karol', text: ' What is specification?' },
  { startTime: 1711.32, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 1712.22,
    person: 'Swen',
    text: ' And like what you just described is because what we just talked about is a specification because you need to write a specification, right?'
  },
  {
    startTime: 1719.24,
    person: 'Swen',
    text: " And to write a specification that an AI can understand is kind of, it's not simple because as you say, the context is missing, right?"
  },
  { startTime: 1728.74, person: 'Swen', text: ' So like, and there is something about that.' },
  {
    startTime: 1733.06,
    person: 'Swen',
    text: " There's a comment here about like expects an author at a specific time, but then, you know, teams kind of iterate over it."
  },
  { startTime: 1739.66, person: 'Swen', text: ' Right.' },
  {
    startTime: 1740.1,
    person: 'Swen',
    text: " And that's the kind of thing is like, it's similar as the AI comes back and says like with the wrong answer, but that's a very simplistic example."
  },
  { startTime: 1748.7, person: 'Swen', text: ' Right.' },
  {
    startTime: 1748.88,
    person: 'Swen',
    text: ' If you think about a big software project, you kind of like, you write your spec, you get your requirements, you write your spec.'
  },
  {
    startTime: 1755.1,
    person: 'Swen',
    text: " And then like you, like as a product owner slash like lead developer would kind of take that and say like, here, go off and let's build this to my team."
  },
  {
    startTime: 1766.16,
    person: 'Swen',
    text: ' Like, oh, like the project management has built, break it down into stories and so on.'
  },
  { startTime: 1775.9, person: 'Swen', text: ' And, but then the feedback loop starts.' },
  { startTime: 1778.78, person: 'Swen', text: ' Right.' },
  { startTime: 1779.4, person: 'Karol', text: ' Yeah, precisely.' },
  {
    startTime: 1780.62,
    person: 'Swen',
    text: " But that's when like, when a developer actually goes like, I tried to code this, but it doesn't make sense."
  },
  { startTime: 1785.04, person: 'Swen', text: ' Right.' },
  {
    startTime: 1785.88,
    person: 'Swen',
    text: " And that's where like multiple feedback loops and interaction and additional context they have come into play."
  },
  { startTime: 1793.86, person: 'Swen', text: ' Right.' },
  {
    startTime: 1794.18,
    person: 'Swen',
    text: " And that's something I think that is missing from, from AI to kind of get that, like we tried this five years ago, like in another project and we, we know it wouldn't work."
  },
  { startTime: 1806.68, person: 'Swen', text: ' Right.' },
  { startTime: 1807.02, person: 'Swen', text: ' Or true.' },
  { startTime: 1807.98, person: 'Swen', text: ' Right.' },
  {
    startTime: 1808.28,
    person: 'Swen',
    text: ' Or this is not the right database technology for it.'
  },
  { startTime: 1811.28, person: 'Swen', text: ' Because this is my head in, right.' },
  {
    startTime: 1814.04,
    person: 'Swen',
    text: " This is the kind of stuff that it's the experience, right."
  },
  {
    startTime: 1816.96,
    person: 'Swen',
    text: ' So that you want to tap into, you want to get that experience.'
  },
  { startTime: 1819.38, person: 'Swen', text: ' Right.' },
  { startTime: 1820, person: 'Karol', text: ' Exactly.' },
  {
    startTime: 1820.44,
    person: 'Karol',
    text: ' And GenAI is tapping into the statistical relevance of your prompt.'
  },
  {
    startTime: 1826.32,
    person: 'Karol',
    text: " So that basically may return options, but those options will not give you proper direction if you don't have that experience or if you don't just build and test."
  },
  { startTime: 1835.82, person: 'Swen', text: ' Yeah.' },
  { startTime: 1836.5, person: 'Swen', text: " And there's another aspect to it." },
  {
    startTime: 1838.1,
    person: 'Swen',
    text: " Like, if you think about this, like who's, like, if you're writing a specification, like you also, like, it's not simple, like, like how does this work as a, like, as a process?"
  },
  { startTime: 1849.24, person: 'Swen', text: ' Are you really only taking notes?' },
  {
    startTime: 1850.82,
    person: 'Swen',
    text: " Business users tell you what they want and you're taking notes."
  },
  { startTime: 1853.96, person: 'Swen', text: ' Like some people would do that.' },
  { startTime: 1855, person: 'Swen', text: ' And some developers would do that.' },
  {
    startTime: 1856.76,
    person: 'Swen',
    text: ' And then you jump, like the business user knows what the solution should be like from what they know.'
  },
  {
    startTime: 1861.76,
    person: 'Swen',
    text: ' The developer goes like, yeah, from what they know, what they know.'
  },
  {
    startTime: 1865.48,
    person: 'Swen',
    text: " It's like, if I write this down, I can build it like that."
  },
  { startTime: 1867.6, person: 'Swen', text: ' But is it really what we want to build?' },
  { startTime: 1869.38, person: 'Swen', text: ' Right.' },
  {
    startTime: 1869.54,
    person: 'Swen',
    text: " There's other aspects to that, which also caters."
  },
  {
    startTime: 1872.4,
    person: 'Swen',
    text: " If you're going back to your three developer types, there's, this is a continuum."
  },
  {
    startTime: 1878.7,
    person: 'Swen',
    text: ' And some people are actually quite good at kind of figuring out business requirements and pushing back on business to say like, Hey, does this, do you really want that?'
  },
  { startTime: 1886.68, person: 'Swen', text: " That's going to be the implication." },
  {
    startTime: 1888.04,
    person: 'Swen',
    text: ' Whereas other people go like, I want to code, I want to build a framework.'
  },
  { startTime: 1891.64, person: 'Swen', text: ' I want to build, I want to cut code.' },
  { startTime: 1893.96, person: 'Swen', text: ' I just want to get to the solution.' },
  {
    startTime: 1895.36,
    person: 'Swen',
    text: ' And then like, if you have the wrong combination of people and no iterative process, then this becomes a real big mess.'
  },
  { startTime: 1905.56, person: 'Swen', text: ' Right.' },
  {
    startTime: 1906.61,
    person: 'Karol',
    text: " And then I think it's a good thing from domain driven design."
  },
  {
    startTime: 1911.68,
    person: 'Karol',
    text: ' If you try to explain why ubiquitous language is important.'
  },
  {
    startTime: 1916.28,
    person: 'Karol',
    text: ' I tend to explain to people when chatting about domain driven design, look at it from perspective of waterfall projects and then more of a traditional approach, the old school approach to IT projects.'
  },
  { startTime: 1930.46, person: 'Karol', text: ' You have your business.' },
  {
    startTime: 1932.26,
    person: 'Karol',
    text: ' That business has talked to a business analyst.'
  },
  {
    startTime: 1937.26,
    person: 'Karol',
    text: ' That business analyst talked to the architect, the architect talked to a few other architects or solution designers, for example, or system analysts.'
  },
  { startTime: 1947.78, person: 'Karol', text: ' Those system analysts talked to the dev team.' },
  {
    startTime: 1951,
    person: 'Karol',
    text: ' The dev team produced something and gave it to the testers.'
  },
  {
    startTime: 1954.06,
    person: 'Karol',
    text: ' And then the end user comes in for acceptance testing.'
  },
  {
    startTime: 1957.92,
    person: 'Karol',
    text: " We have, let's see, business to business analyst, one level of abstraction, business analyst to architect, second level of abstraction, architect to system analyst, third level of abstraction, system analyst to dev teams, fourth level of abstraction."
  },
  {
    startTime: 1973.98,
    person: 'Karol',
    text: ' We punched through already four different layers of abstractions where we have completely different languages between them, completely different scopes of understanding.'
  },
  {
    startTime: 1984.46,
    person: 'Karol',
    text: " The semantics of what we're talking about are completely different."
  },
  {
    startTime: 1989.06,
    person: 'Karol',
    text: ' And then on top of that, actually, this is probably implemented by different teams.'
  },
  {
    startTime: 1993.94,
    person: 'Karol',
    text: ' And you have on top of that social technical dynamics of those teams, right?'
  },
  {
    startTime: 2000.2,
    person: 'Karol',
    text: ' So if we would replace the whole chain, starting from the business analyst, how precise would be the language of the business to be able to define what they actually need, where it took four levels of abstraction to translate this into code?'
  },
  { startTime: 2017.3, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 2017.7,
    person: 'Swen',
    text: ' So you can easily see why someone would go like, this sounds super wasteful.'
  },
  {
    startTime: 2021.98,
    person: 'Swen',
    text: ' If I can get someone to sit down with the business and write down the specification and then push a button, we can take all of that out.'
  },
  {
    startTime: 2030.9,
    person: 'Swen',
    text: ' But it really, you have these four levels of abstraction.'
  },
  {
    startTime: 2034.02,
    person: 'Swen',
    text: " If you pick the wrong person to write that specification, you're going to have a problem, right?"
  },
  { startTime: 2041.18, person: 'Swen', text: " Because there's like, in any case, right?" },
  {
    startTime: 2045.67,
    person: 'Karol',
    text: " And even in those layers of abstractions of this translation between the actual business needs, because there are also business wants, to the actual architecture and code, if you get the wrong person to do that abstraction layer, you're screwed anyways."
  },
  {
    startTime: 2063.65,
    person: 'Karol',
    text: " It doesn't matter where we apply the automation, it's still going to be something that will definitely go wrong."
  },
  { startTime: 2069.85, person: 'Karol', text: " It's Murphy's law, definitely, right?" },
  {
    startTime: 2072.83,
    person: 'Karol',
    text: " Because I've seen architects in my work that they came to the table in the specification where there were non-functional requirements for architectural characteristics, better name."
  },
  { startTime: 2083.53, person: 'Karol', text: ' And they were like, yeah, right, whatever.' },
  { startTime: 2086.25, person: 'Karol', text: ' Performance, yeah, right.' },
  { startTime: 2087.35, person: 'Karol', text: ' Give me just a random number.' },
  { startTime: 2090.13, person: 'Karol', text: ' Oh, availability.' },
  { startTime: 2091.889, person: 'Karol', text: ' Yeah, right.' },
  {
    startTime: 2095.13,
    person: 'Karol',
    text: " And I'm like, but this is important for design."
  },
  {
    startTime: 2100.03,
    person: 'Karol',
    text: ' You have to actually ask the business, see what the volume will be, define it based on some factual information.'
  },
  {
    startTime: 2108.65,
    person: 'Karol',
    text: " Or then if you don't have that information, then make an assumption, but note it as an assumption that you made that assumption, because this will be something influencing the end result and the design in the meantime, right?"
  },
  { startTime: 2121.93, person: 'Karol', text: " No, no, it's going to be fine." },
  {
    startTime: 2123.47,
    person: 'Karol',
    text: " And then what's the value of that specification?"
  },
  { startTime: 2126.99, person: 'Karol', text: ' And imagine a business trying to do this.' },
  {
    startTime: 2132.94,
    person: 'Swen',
    text: " Yeah, and I'm just jumping to another thing because you talked about different languages and what stood out to me as well is like the proposal is like you write that specification and again, it's all markdown files that they show in that presentation, but it's in English, right?"
  },
  {
    startTime: 2150.8,
    person: 'Swen',
    text: ' This is also one thing is like you have an English language specification.'
  },
  { startTime: 2155.14, person: 'Swen', text: ' Is that really what you want?' },
  {
    startTime: 2157.48,
    person: 'Swen',
    text: " If you're working with like, I don't know, an insurance in Poland or a public sector organisation in Germany, it's like, do you, what do you need?"
  },
  { startTime: 2168.54, person: 'Swen', text: ' And like, is that the right way to express it?' },
  { startTime: 2170.6, person: 'Swen', text: ' Right?' },
  {
    startTime: 2170.74,
    person: 'Swen',
    text: " Because that's like the, like write it down, markdown files is fine, but like, do we write it in English or in German?"
  },
  {
    startTime: 2175.6,
    person: 'Swen',
    text: ' And what are the implications we write or in Polish?'
  },
  { startTime: 2178.94, person: 'Swen', text: ' And what are the implications of that?' },
  { startTime: 2181.38, person: 'Swen', text: ' Exactly.' },
  { startTime: 2182.18, person: 'Karol', text: ' Because now what is the implication?' },
  {
    startTime: 2184.04,
    person: 'Karol',
    text: ' What language is the large language model trained on?'
  },
  {
    startTime: 2188.66,
    person: 'Swen',
    text: " That's also like, this will be translated into code and the code doesn't matter."
  },
  { startTime: 2193.32, person: 'Swen', text: ' And the code goes somewhere, right?' },
  {
    startTime: 2195.18,
    person: 'Swen',
    text: " Because code doesn't like code is like stuff that can be auto-generated, right?"
  },
  { startTime: 2199.54, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 2199.98,
    person: 'Swen',
    text: ' So you take that and you push it into production.'
  },
  {
    startTime: 2203.6,
    person: 'Swen',
    text: ' It totally ignores the fact that actually we call it a programming language.'
  },
  {
    startTime: 2207.52,
    person: 'Swen',
    text: " It's actually like the unifying factor is like, even like what I'm getting at is like, when you're a developer and you're being presented with like, this was like this big Polish, like this went through like a long process in Poland with subject matter experts who don't know much English."
  },
  {
    startTime: 2225.66,
    person: 'Swen',
    text: " So I'm pretty sure many Polish people know very well, speak English very well, but it's like, you see what I'm getting?"
  },
  { startTime: 2231.34, person: 'Swen', text: " It's not our native language." },
  {
    startTime: 2232.74,
    person: 'Karol',
    text: " But just to give you an example, I'm working for a public institution in the Netherlands."
  },
  {
    startTime: 2236.88,
    person: 'Karol',
    text: ' Most of the specification is actually written in Dutch.'
  },
  { startTime: 2240.3, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 2241.1,
    person: 'Karol',
    text: ' So how is an LLM, how is it supposed to interpret that correctly?'
  },
  {
    startTime: 2248.5,
    person: 'Karol',
    text: ' Where we know already that Google Translate has a problem translating from English to Dutch and from Dutch to English properly, because there are certain phrases that means semantically something completely different, but individual words mean something different.'
  },
  {
    startTime: 2262.7,
    person: 'Karol',
    text: " And then, you know, we're lost already in translation."
  },
  {
    startTime: 2268.08,
    person: 'Swen',
    text: " And then like, so like, I'm going to say a bad word."
  },
  {
    startTime: 2270.28,
    person: 'Swen',
    text: " Like, what if they're kind of like near shore or offshore development?"
  },
  {
    startTime: 2273.86,
    person: 'Swen',
    text: " Like you have a magic specification, but like send your Dutch specification to, I don't know, to Lithuania."
  },
  {
    startTime: 2283.06,
    person: 'Swen',
    text: " And what will you like, who is going to, who's going to maintain that?"
  },
  { startTime: 2287.22, person: 'Swen', text: ' Tell me.' },
  { startTime: 2289.28, person: 'Karol', text: " I'll give you one better." },
  {
    startTime: 2291.18,
    person: 'Karol',
    text: ' Back in the day, T-Mobile in Poland outsourced all IT, consolidated all the vendors into one huge vendor from India.'
  },
  { startTime: 2305.22, person: 'Karol', text: ' Was that a great idea?' },
  { startTime: 2306.62, person: 'Karol', text: " I'm not going to comment on that." },
  { startTime: 2308.06, person: 'Karol', text: ' You probably guessed my opinion on that.' },
  {
    startTime: 2310.12,
    person: 'Karol',
    text: " But the problem was that, well, the colleagues from India, of course, they don't know Polish."
  },
  {
    startTime: 2314.5,
    person: 'Karol',
    text: " Most of the documentation, high level designs, everything was in Polish, not in English, because back there we didn't really have near shore."
  },
  {
    startTime: 2323.06,
    person: 'Karol',
    text: ' And this was like the first attempt to offshore, a very rare attempt at that time.'
  },
  { startTime: 2328.92, person: 'Karol', text: ' So everything was in Polish.' },
  {
    startTime: 2331.24,
    person: 'Karol',
    text: ' So what they did was they just utilised some auto translate tool just to translate it into English.'
  },
  { startTime: 2339.74, person: 'Karol', text: ' Well, fantastic.' },
  {
    startTime: 2340.72,
    person: 'Karol',
    text: ' But then we had the names of the systems were completely different.'
  },
  {
    startTime: 2345.5,
    person: 'Karol',
    text: " So nobody knew what the hell is going on, what they're talking about, because the name of the system didn't match."
  },
  {
    startTime: 2351.32,
    person: 'Karol',
    text: ' The names of people were even translated automatically to something, some gibberish.'
  },
  {
    startTime: 2357.1,
    person: 'Karol',
    text: ' I remember a colleague called Kamiński was translated to his name of Wisła, of Wisła Bay, of something, you know, this title, you know, bubbled up something really crazy.'
  },
  { startTime: 2371.56, person: 'Karol', text: ' Yeah, that was over 10 years ago.' },
  {
    startTime: 2374.32,
    person: 'Karol',
    text: " But that's the risk we're having, where we're having a language that is semantically already different than the language that the LLM is trained on."
  },
  { startTime: 2389.02, person: 'Karol', text: " And it's tried to comprehend that language." },
  {
    startTime: 2391.4,
    person: 'Karol',
    text: " And there's already risk of misinterpretation, right?"
  },
  {
    startTime: 2395.88,
    person: 'Karol',
    text: ' So we can, of course, write the specification in any given language, and it should translate that.'
  },
  {
    startTime: 2400.16,
    person: 'Karol',
    text: ' But language itself is an abstraction barrier.'
  },
  {
    startTime: 2404.38,
    person: 'Karol',
    text: " Then the abstraction at which we're defining things is already a barrier, because if you define it as a business person, you will not be able to define it in IT structures."
  },
  { startTime: 2414.72, person: 'Karol', text: ' Yeah.' },
  { startTime: 2415.32, person: 'Karol', text: ' You have to have some understanding of that.' },
  {
    startTime: 2418.12,
    person: 'Swen',
    text: " And like, say, if you like, if you follow the reasoning there, it's like, actually, you need to write the specification and you need to write a lot of tests, right?"
  },
  {
    startTime: 2426.62,
    person: 'Swen',
    text: " But then it's like, you need to test for, like, as a developer, I test for different things than business users, right?"
  },
  {
    startTime: 2435.78,
    person: 'Swen',
    text: ' They think about their business edge cases, and how do you test for them?'
  },
  {
    startTime: 2438.94,
    person: 'Swen',
    text: ' We think about maybe SQL injection or like out of bounds, out of range value and stuff like that, right?'
  },
  { startTime: 2447.66, person: 'Swen', text: ' So...' },
  { startTime: 2448, person: 'Karol', text: " None's, yeah, not a number." },
  { startTime: 2450.06, person: 'Karol', text: ' So like...' },
  {
    startTime: 2451.6,
    person: 'Karol',
    text: ' And the testers think about even different things to test.'
  },
  { startTime: 2454.24, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 2454.34,
    person: 'Swen',
    text: " And then you, like, back to your non-functionals, then there's like, as an architect, I care about, like, what happens if I've architected this and I've put all my non-functionals, you had a better name for it, but like, I'm old school, I call them non-functionals."
  },
  {
    startTime: 2466.9,
    person: 'Swen',
    text: " Like, but you put them all in, you want to verify that you can sustain, like, I don't know, a hundred transactions per second, right?"
  },
  { startTime: 2472.52, person: 'Swen', text: ' Yeah.' },
  { startTime: 2473.04, person: 'Swen', text: " So there's like..." },
  {
    startTime: 2476.31,
    person: 'Karol',
    text: " Then how do you test if the implementation was actually implemented in the architecture you specified, because that's another level of testing."
  },
  {
    startTime: 2483.11,
    person: 'Swen',
    text: ' The developer write the specification and the business user tells you it, like, you write it down and you explore it and you iterate over it.'
  },
  { startTime: 2491.29, person: 'Swen', text: ' Fair enough.' },
  {
    startTime: 2491.79,
    person: 'Swen',
    text: " But it's like, where do, like, you have like a limited set of experience that goes into, like, making sure this stuff actually works in the end, right?"
  },
  { startTime: 2502.39, person: 'Karol', text: ' Yeah, that requires reasoning.' },
  {
    startTime: 2504.59,
    person: 'Karol',
    text: ' And then experience is one thing, but reasoning, and we know that most LLMs are faking it.'
  },
  {
    startTime: 2512.41,
    person: 'Karol',
    text: ' That they were just twice to show like, oh, the reasoning of the LLM, and it would spit out sequences of things.'
  },
  {
    startTime: 2518.75,
    person: 'Karol',
    text: " It's not reasoning, that's statistical analysis and just feeding a few lines of bull crap that there is reasoning."
  },
  {
    startTime: 2527.41,
    person: 'Karol',
    text: " But those LLMs are not capable of reasoning because they don't have intelligence."
  },
  {
    startTime: 2531.93,
    person: 'Karol',
    text: " Intelligence means also to have self-awareness, and they're not self-aware, hence very hard to do intelligence."
  },
  { startTime: 2538.07, person: 'Karol', text: " They're statistical machines." },
  {
    startTime: 2540.57,
    person: 'Karol',
    text: ' They reason as a machine learning, very complex, very sophisticated, matching algorithm.'
  },
  { startTime: 2549.29, person: 'Karol', text: ' So there is no reasoning.' },
  {
    startTime: 2550.91,
    person: 'Karol',
    text: ' And to be able to make a structural decision over code, over software, over modules, over a system, over an ecosystem, that requires reasoning and being able to do a trade of analysis on things and make a decision.'
  },
  {
    startTime: 2564.63,
    person: 'Karol',
    text: ' And LLMs will not be able to make the decisions, not that they even should, because that would be a huge liability.'
  },
  { startTime: 2570.99, person: 'Swen', text: " Yeah, that's what we see." },
  {
    startTime: 2572.19,
    person: 'Swen',
    text: " It's also like the fact is like, there is some learning like during like when you provide more context, right?"
  },
  {
    startTime: 2578.53,
    person: 'Swen',
    text: ' But there is like, when you start over, you start over, right?'
  },
  {
    startTime: 2582.59,
    person: 'Swen',
    text: " And then there's like, this is actually like, and so at Solace, we have a product called Agent Mesh, right?"
  },
  {
    startTime: 2589.63,
    person: 'Swen',
    text: " So it's about orchestrating how AI agents work together."
  },
  {
    startTime: 2594.09,
    person: 'Swen',
    text: ' And then they use tools like to read the database, which or access an API or whatnot, right?'
  },
  { startTime: 2600.61, person: 'Swen', text: ' An MCP server.' },
  {
    startTime: 2603.01,
    person: 'Swen',
    text: " And you see these agents trying stuff like this is something we can see, like you can see in our like visualisers kind of like, oh, the agent goes out and calls the rest API and it doesn't work."
  },
  { startTime: 2613.27, person: 'Swen', text: ' And it tries it differently.' },
  { startTime: 2614.15, person: 'Swen', text: ' And it tries it differently.' },
  {
    startTime: 2614.97,
    person: 'Swen',
    text: " And you kind of go and like, oh, it's all just trial and error."
  },
  {
    startTime: 2618.17,
    person: 'Swen',
    text: ' And then it learns within that loop and kind of maybe like for next time in your session, it remembers that.'
  },
  {
    startTime: 2624.49,
    person: 'Swen',
    text: " But you're actually starting, like there is a bit of learning process to it, statistical learning process and a bit of memory to it."
  },
  {
    startTime: 2631.21,
    person: 'Swen',
    text: " But you're always going like, it is essentially brute."
  },
  { startTime: 2633.71, person: 'Swen', text: ' A lot of stuff is brute forcing, right?' },
  { startTime: 2636.93, person: 'Swen', text: ' When they actually need to, right?' },
  {
    startTime: 2638.21,
    person: 'Swen',
    text: " They're just not, when they can't free form, associate and go like, kind of generate like text or amalgamate text."
  },
  {
    startTime: 2645.93,
    person: 'Swen',
    text: " But if they really need to interact with tools, like it's brute force, what many LLMs will attempt to do, right?"
  },
  { startTime: 2654.11, person: 'Karol', text: ' Yeah.' },
  { startTime: 2654.83, person: 'Karol', text: ' Pretty much.' },
  {
    startTime: 2656.07,
    person: 'Karol',
    text: " And I think that's not going to change anytime soon."
  },
  { startTime: 2658.79, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 2659.15,
    person: 'Karol',
    text: " And it's not because we cannot build anything better because we probably can."
  },
  {
    startTime: 2665.07,
    person: 'Karol',
    text: " But because of, again, engineering and sustainability, because right now the problem is that as far as I recall, OpenAI is constantly losing money on the chat GBT because it's not sustainable."
  },
  { startTime: 2682.65, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 2683.73,
    person: 'Karol',
    text: ' The cost of energy to run these systems is humongous.'
  },
  {
    startTime: 2686.99,
    person: 'Karol',
    text: ' The bill that companies get for running their own agentic solutions, over the roof.'
  },
  {
    startTime: 2694.77,
    person: 'Karol',
    text: ' Teams are happy that they built something and it works.'
  },
  { startTime: 2697.19, person: 'Karol', text: ' But the CFO, it looks at the invoice.' },
  {
    startTime: 2699.35,
    person: 'Karol',
    text: ' There was a flood of memes like that on LinkedIn recently.'
  },
  { startTime: 2703.79, person: 'Karol', text: ' That must be difficult.' },
  { startTime: 2706.19, person: 'Karol', text: ' So all of that creates quite a problem.' },
  {
    startTime: 2711.51,
    person: 'Karol',
    text: ' By the way, for those that are curious of what Swen said about, you can visit this QR with, this leads you to Solace Agent Mesh.'
  },
  {
    startTime: 2719.71,
    person: 'Karol',
    text: " As far as I remember, that's an open source project, isn't it?"
  },
  {
    startTime: 2722.43,
    person: 'Swen',
    text: ' There is a community edition and then like- Oh, you productized that.'
  },
  { startTime: 2726.73, person: 'Swen', text: ' Okay.' },
  { startTime: 2726.91, person: 'Swen', text: ' Yeah, of course.' },
  { startTime: 2727.87, person: 'Karol', text: ' Last time I checked it was open source only.' },
  { startTime: 2729.93, person: 'Swen', text: " Now it's a little- Yeah, there has been." },
  {
    startTime: 2732.01,
    person: 'Swen',
    text: " But I've played around with both and there's lots of stuff you can do with community edition."
  },
  { startTime: 2739.27, person: 'Swen', text: " So it's cool." },
  {
    startTime: 2740.39,
    person: 'Swen',
    text: " And I said, I'm just like, I didn't bring up the product because we said we're going to stay from product pitches."
  },
  { startTime: 2750.55, person: 'Swen', text: ' So for the record, you brought up that link.' },
  { startTime: 2753.95, person: 'Swen', text: ' Thank you.' },
  { startTime: 2754.43, person: 'Karol', text: ' Yes, yes, I did.' },
  {
    startTime: 2755.39,
    person: 'Karol',
    text: " But it's an interesting concept architecturally."
  },
  {
    startTime: 2759.73,
    person: 'Karol',
    text: " So I think it's worth just to take a look at the page and review because I had to explain to somebody Solace Agent Mesh."
  },
  {
    startTime: 2768.11,
    person: 'Karol',
    text: " It's actually conceptually really an interesting idea."
  },
  {
    startTime: 2772.13,
    person: 'Karol',
    text: ' So if somebody would wish to explore, at least they have a QR to just click and go for that and just go exploring.'
  },
  { startTime: 2780.53, person: 'Karol', text: ' Maybe it will be of use, maybe not.' },
  { startTime: 2782.65, person: 'Karol', text: " We'll see." },
  { startTime: 2784.01, person: 'Karol', text: ' Either way.' },
  {
    startTime: 2786.17,
    person: 'Karol',
    text: " So all of this is a very- The problem that we're basically tackling today is more complex than just getting rid of."
  },
  {
    startTime: 2795.51,
    person: 'Karol',
    text: ' And we touched upon that also some time ago on loosely coupled when we were talking about cognitive load and neuroatypicality.'
  },
  {
    startTime: 2806.53,
    person: 'Karol',
    text: ' And while we are great at retaining context for a very long period of time, which is what we call is our wisdom or experience.'
  },
  {
    startTime: 2815.73,
    person: 'Karol',
    text: ' The problem I see is that this is not something we can replicate easy, right?'
  },
  { startTime: 2826.43, person: 'Karol', text: " That's one of the aspects." },
  {
    startTime: 2828.35,
    person: 'Karol',
    text: ' But also the- And I lost my thought in my head.'
  },
  { startTime: 2835.33, person: 'Karol', text: ' Like that never happened, right?' },
  { startTime: 2841.52, person: 'Karol', text: ' Goddamn.' },
  { startTime: 2842.94, person: 'Karol', text: ' Thread lost.' },
  { startTime: 2843.68, person: 'Karol', text: ' Sorry.' },
  { startTime: 2844.08, person: 'Karol', text: ' Got a null pointer exception.' },
  { startTime: 2847.72, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 2849.24,
    person: 'Karol',
    text: ' And then if we go understanding of things and comprehension of things at the moment.'
  },
  { startTime: 2856.52, person: 'Karol', text: ' Got it back.' },
  {
    startTime: 2858.12,
    person: 'Karol',
    text: " It's we're incapable in cognitive load to comprehend more."
  },
  {
    startTime: 2863.48,
    person: 'Karol',
    text: ' So the notion of having 10x developers supported by AI or partially replaced by AI.'
  },
  {
    startTime: 2871.26,
    person: 'Karol',
    text: ' So moving those people to a higher level and just utilising AI agent for coding.'
  },
  {
    startTime: 2877.28,
    person: 'Karol',
    text: ' I mean, they would have to comprehend way more information they did do now daily.'
  },
  {
    startTime: 2882.64,
    person: 'Karol',
    text: " And we're already moving at really fast speeds, right?"
  },
  {
    startTime: 2886,
    person: 'Karol',
    text: " And that's not doable because that leads to an overload."
  },
  {
    startTime: 2893,
    person: 'Karol',
    text: ' And basically those people will go burn out instantly.'
  },
  { startTime: 2896.78, person: 'Karol', text: " That's one of the aspects, right?" },
  { startTime: 2899.16, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 2899.6,
    person: 'Karol',
    text: " That's another very difficult part because we tend to see only the aspect of performance, or at least some people, like I see on LinkedIn, we tend to, oh, this is a problem of performance."
  },
  {
    startTime: 2912.54,
    person: 'Karol',
    text: ' Now this is a problem of human nature in essence, a very difficult one at that.'
  },
  {
    startTime: 2918.62,
    person: 'Karol',
    text: " So we're not able to comprehend more and more."
  },
  {
    startTime: 2921.18,
    person: 'Karol',
    text: ' And you see that also, for example, now with Git, with how we do reviews, right?'
  },
  {
    startTime: 2932.16,
    person: 'Karol',
    text: " If somebody makes a pull request and it's a very short pull request that is comprehensible that we can actually read through, you get to a few lines, you get 20 comments."
  },
  { startTime: 2944.2, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 2944.6,
    person: 'Karol',
    text: " If that's a pull request that has 500 lines or more, it looks fine to me, push."
  },
  { startTime: 2952.08, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 2952.48,
    person: 'Swen',
    text: ' So you just need to commit more code to get your changes through.'
  },
  {
    startTime: 2956.34,
    person: 'Swen',
    text: " But that doesn't support quality at all, right?"
  },
  { startTime: 2959.16, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 2960.86,
    person: 'Swen',
    text: " Going back to what we've talked about, this long list of things that apparently every developer does that we brought up earlier from the talk, right?"
  },
  { startTime: 2975.78, person: 'Swen', text: " I can't remember." },
  { startTime: 2977.58, person: 'Swen', text: ' Maybe see if I can get back to that slide.' },
  {
    startTime: 2981.96,
    person: 'Karol',
    text: ' Talk, understand, distil, plan, share, translate, test, and verify.'
  },
  { startTime: 2987.7, person: 'Swen', text: " That's a lot of stuff to do." },
  { startTime: 2996.9, person: 'Swen', text: ' This is a lot of cognitive load.' },
  { startTime: 2999.76, person: 'Swen', text: " This will increase people's cognitive load." },
  {
    startTime: 3004.76,
    person: 'Swen',
    text: " If you're in the translate, test, verify, if you think about all these works, people are better at certain things than others, right?"
  },
  {
    startTime: 3015.16,
    person: 'Swen',
    text: " Some people are good about talking to users and understand what they're talking about."
  },
  {
    startTime: 3019.4,
    person: 'Swen',
    text: ' Other people are better at translating something that is already fleshed out enough into code, right?'
  },
  {
    startTime: 3028.1,
    person: 'Swen',
    text: " I'm good in these three works, but you're going to be good in 10 of these works tomorrow because you're going to write that specification because that's all we software developers will do."
  },
  {
    startTime: 3037.88,
    person: 'Swen',
    text: ' Like that will, the cognitive load on people will be just kind of, whoa, too much, right?'
  },
  {
    startTime: 3045.88,
    person: 'Karol',
    text: ' But then again, even if you delegate all the code writing to and testing and verifying to the LLM, you still need to go and verify that.'
  },
  {
    startTime: 3057.78,
    person: 'Karol',
    text: ' If you compare your LLM to a junior developer, well, fantastic.'
  },
  {
    startTime: 3066.4,
    person: 'Karol',
    text: " But when you work with a junior developer and you review what they produced as code, there's a level of development coaching that's happening that the person on mistakes, that you explain those mistakes and adjust and tell them why was that wrong and fix that and help them grow, whatever that may be."
  },
  {
    startTime: 3089.98,
    person: 'Karol',
    text: " But then you're in a team of, let's say, nine people and you have two junior developers."
  },
  {
    startTime: 3094.96,
    person: 'Karol',
    text: ' So you devote your time to two people like that.'
  },
  {
    startTime: 3097.52,
    person: 'Karol',
    text: ' Now, we want to speed this up by 10 times, but now all we have are junior developers in terms of the AI agents doing the coding.'
  },
  {
    startTime: 3110.28,
    person: 'Karol',
    text: " So if they're at the level of a junior developer, so they are basically code monkeys, like you said, that basically means that they're most likely statistically incapable of growth, which means that you'll be stuck in an endless loop of verifying their output all the time."
  },
  {
    startTime: 3128.42,
    person: 'Karol',
    text: ' And they produce output a lot quicker than the junior developer is.'
  },
  { startTime: 3132.6, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 3132.88,
    person: 'Swen',
    text: " So you've got a lot of code to review, a lot of big code, a lot of big pull requests."
  },
  {
    startTime: 3138.88,
    person: 'Karol',
    text: ' And that verification aspect alone is not sustainable.'
  },
  { startTime: 3143.98, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 3144.66,
    person: 'Swen',
    text: " And that's where this OpenAI talk goes, but that's also going to be automated."
  },
  { startTime: 3151.94, person: 'Swen', text: ' All of this is going to be automated.' },
  {
    startTime: 3153.52,
    person: 'Swen',
    text: " And that's where I'm thinking, how will that work?"
  },
  {
    startTime: 3157.5,
    person: 'Swen',
    text: " So it's kind of like we have this aspect already, but it's easy because if you generate a lot of code, you just generate a lot of test codes that verifies that whatever has been produced is correct."
  },
  {
    startTime: 3170.46,
    person: 'Swen',
    text: ' And now we go back to the specification because someone needs to write, tell them these are the test cases you need to write.'
  },
  {
    startTime: 3176.54,
    person: 'Swen',
    text: " And then it's all back to whoever needs to write that specification to think about every single aspect of what happens."
  },
  {
    startTime: 3184.18,
    person: 'Karol',
    text: ' And then the problem, again, in terms of models, all models that we use, unless you train them yourself, actually train, not fine tune, but train, all models have certain guardrails and certain ethical rails and whatever that we are not aware of.'
  },
  {
    startTime: 3205.1,
    person: 'Karol',
    text: " We don't know what their directives are, right?"
  },
  {
    startTime: 3208.8,
    person: 'Karol',
    text: " Most chat-based models that we use like Gemini, GPT, whatever, they have a number of guardrails that we cannot pass unless we go jailbreaking or adversarial prompting, not feasible, which means that basically if we, in reviews, if we do reviews of code and we test code, we're critical about the code."
  },
  { startTime: 3233.96, person: 'Karol', text: " We're doubting that this is correct." },
  { startTime: 3238.42, person: 'Karol', text: " That's why we improve things, right?" },
  {
    startTime: 3241.3,
    person: 'Karol',
    text: ' If a LLM as a model is trained to be always helpful and not critical, and we see that all the time that you want to spar ideas with an LLM?'
  },
  {
    startTime: 3253.12,
    person: 'Karol',
    text: " No, it's a great idea generator, but it will not comment critically on your ideas because they have guardrails to be helpful, not being critical, which means you cannot use it as a critical thinking sparring partner."
  },
  {
    startTime: 3266.98,
    person: 'Karol',
    text: " If you apply the same model to your code base, to your tests, to your PRs, to your whatever, now you're royally screwed because they will be helpful."
  },
  { startTime: 3280.96, person: 'Karol', text: " They will say, yeah, that's fine." },
  {
    startTime: 3282.38,
    person: 'Karol',
    text: " I was wrong that I thought it was wrong, so that's perfectly fine."
  },
  {
    startTime: 3286.84,
    person: 'Karol',
    text: " You say it's not fine, agent to agent talking, oh, this is definitely fine."
  },
  { startTime: 3290.92, person: 'Karol', text: " Oh, yeah, you're right." },
  { startTime: 3291.62, person: 'Karol', text: ' This is fine.' },
  { startTime: 3292.48, person: 'Karol', text: ' Well, fantastic.' },
  {
    startTime: 3293.28,
    person: 'Karol',
    text: ' Now we have intrinsic bias introduced through the training of the model.'
  },
  {
    startTime: 3300.74,
    person: 'Swen',
    text: ' Yeah, and again, that goes like, how do you prevent that by actually writing better specifications and just writing, no, no, no, you should not be a people pleaser.'
  },
  {
    startTime: 3309.04,
    person: 'Swen',
    text: " And that means in different test cases, you actually need to write, okay, you're running this test case and you may be happy with the results of that test case, but you should look closer or you should not take things at face value."
  },
  { startTime: 3324.1, person: 'Swen', text: ' You need to give that.' },
  {
    startTime: 3325.96,
    person: 'Swen',
    text: " That means there's so many things you need to put in."
  },
  {
    startTime: 3329.54,
    person: 'Swen',
    text: " If you want to automate all of the stuff, there's so many things that need to go into the specification because you need to give that."
  },
  {
    startTime: 3338.32,
    person: 'Swen',
    text: " It's not like you've got a junior QA tester and they're testing code committed by someone they know, right?"
  },
  { startTime: 3345.7, person: 'Swen', text: ' They know, they can sniff out.' },
  {
    startTime: 3348.48,
    person: 'Swen',
    text: ' Pretty easily, people will be able to sniff out the code smells, right?'
  },
  {
    startTime: 3351.94,
    person: 'Swen',
    text: " Where it's like, this guy usually doesn't write proper unit tests, so I need to review the unit test."
  },
  {
    startTime: 3357.88,
    person: 'Swen',
    text: " This guy kind of doesn't, or this girl actually, don't feel like there's..."
  },
  { startTime: 3364.36, person: 'Karol', text: " It's not like it's a male-dominated industry." },
  { startTime: 3366.82, person: 'Karol', text: ' No, no, no.' },
  {
    startTime: 3367.24,
    person: 'Swen',
    text: ' This girl kind of just tends to not initialise variables, right?'
  },
  { startTime: 3372.12, person: 'Swen', text: ' And you get weird edge cases, right?' },
  {
    startTime: 3377.32,
    person: 'Swen',
    text: ' That is something you need to write that in your specification.'
  },
  { startTime: 3380.14, person: 'Swen', text: ' Pay attention to this, pay attention to that.' },
  {
    startTime: 3382.62,
    person: 'Swen',
    text: " Don't let them fool you by saying they actually already generated enough unit tests or they've written enough tests because actually you should write a specification."
  },
  { startTime: 3393.74, person: 'Swen', text: ' Write your test cases first.' },
  {
    startTime: 3395.38,
    person: 'Swen',
    text: ' All right, so which is actually something like now to come to think of it, like nowhere in this...'
  },
  {
    startTime: 3403.2,
    person: 'Swen',
    text: " It actually says, well, again, because coding doesn't matter, this presentation doesn't talk about the fact that you actually maybe should think like when you have all these test cases defined in your specification, first thing is to write all these tests, right?"
  },
  {
    startTime: 3419.56,
    person: 'Swen',
    text: ' And that is an instruction you need to give to the elements.'
  },
  { startTime: 3422.66, person: 'Swen', text: " Here's a lot of stuff." },
  {
    startTime: 3424.54,
    person: 'Swen',
    text: " Write the test cases first, make sure they're bulletproof and then write the code and test it afterwards."
  },
  {
    startTime: 3430.06,
    person: 'Swen',
    text: " But this again is like there's so much that also depends on human interaction, right?"
  },
  {
    startTime: 3437.44,
    person: 'Swen',
    text: ' Because people go like, yeah, this is not how we do things around here.'
  },
  { startTime: 3440.86, person: 'Swen', text: ' Go back and look at your specification again.' },
  {
    startTime: 3443.7,
    person: 'Swen',
    text: " This is like you're committing code, but your test cases are crap, right?"
  },
  {
    startTime: 3449.88,
    person: 'Karol',
    text: ' But then looking at it from this perspective, now your specification bubbles out because not only you need to specify what is this bunch of agents that it needs to deliver, you also need to create a specification on how it should deliver.'
  },
  {
    startTime: 3471,
    person: 'Karol',
    text: " Because that's something that we keep in the context of us human beings."
  },
  {
    startTime: 3474.5,
    person: 'Karol',
    text: ' We learn through experience how we should deliver solutions on all those abstraction levels mentioned earlier, whereas to an LLM, you have to specify this every single time, how it should deliver.'
  },
  {
    startTime: 3488.36,
    person: 'Karol',
    text: ' How you should specify those adversarial prompts or jailbreaking that it should be critical, that it should behave in this way, in this aspect, which is another level of specifying that actually increases the complexity of the specification.'
  },
  {
    startTime: 3505.44,
    person: 'Karol',
    text: " Whereas if we just do specification-driven development, you write what it should do, you specify edge cases, you go deeper into specifying when you're going down the abstraction levels to code, you make design decisions, and then you go, done."
  },
  {
    startTime: 3523.28,
    person: 'Karol',
    text: " Whereas here, every level of abstraction, you have to add more specification to it so that it actually is executable, because LLMs, when you look at it, they're not deterministic machines."
  },
  {
    startTime: 3537.78,
    person: 'Karol',
    text: " They're not deterministic from the standpoint of what we perceive as deterministic output."
  },
  {
    startTime: 3543.22,
    person: 'Karol',
    text: " They're very deterministic, but they're deterministic statistically based on the training dataset."
  },
  {
    startTime: 3550.12,
    person: 'Karol',
    text: " We have no idea what the training dataset is, and from our perspective, they're non-deterministic."
  },
  {
    startTime: 3556.16,
    person: 'Swen',
    text: " Yeah, and this is actually the other point is if you treat this all like a black box, a specification in, software out, if we're good enough, if our specification is good enough, the software will be good enough."
  },
  {
    startTime: 3574.64,
    person: 'Swen',
    text: " If I iterate on my specification, what will guarantee that the next iteration of the software that's being generated actually is similar in terms of its internal structure?"
  },
  { startTime: 3588.8, person: 'Swen', text: ' Will it use the same design patterns?' },
  { startTime: 3592.28, person: 'Swen', text: ' Will it use this?' },
  {
    startTime: 3596.52,
    person: 'Swen',
    text: " Maybe I need to be more relaxed about this, but the way we actually, when we put stuff into production, we're actually really meticulous about it, right?"
  },
  {
    startTime: 3606.88,
    person: 'Swen',
    text: " Here's a patch version and it fixed these bugs, but we know everything else stayed exactly the same, but who's going to, because it's non-deterministic, who's going to guarantee that next time around it's going to be the same thing, but with some changes, right?"
  },
  {
    startTime: 3626.82,
    person: 'Karol',
    text: ' We already seen examples of this from people using coding assist in forms of LLM, whatever that model is that at times it ended up with the LLM, instead of fixing the error, it removed the whole code base, for example.'
  },
  {
    startTime: 3645.2,
    person: 'Karol',
    text: ' And there were already cases where an agent like that, instead of helping it remove the whole repository entirely, for example, because it had too much access.'
  },
  {
    startTime: 3656.14,
    person: 'Karol',
    text: ' And then of course, governance and who in the business will be able to put that governance and security in place so that the LLM has the right level of access to actually be helpful rather than harmful by, for example, deleting the code base, et cetera, et cetera.'
  },
  {
    startTime: 3674.12,
    person: 'Karol',
    text: " So it's a large number of aspects additionally."
  },
  {
    startTime: 3679.08,
    person: 'Karol',
    text: ' And then of course we have the lovely vibe coders.'
  },
  {
    startTime: 3683.22,
    person: 'Karol',
    text: " There was this lovely case of somebody stating, oh, I don't need a team."
  },
  {
    startTime: 3688.12,
    person: 'Karol',
    text: ' I just vibe coded a SaaS solution and it works.'
  },
  {
    startTime: 3692.1,
    person: 'Karol',
    text: ' And then the guy was posting updates, I think on Twitter about that.'
  },
  {
    startTime: 3697.82,
    person: 'Karol',
    text: " And then after a certain number of updates, he was like, no, I'm going to stop putting out the updates because people are bypassing my payments."
  },
  { startTime: 3706.52, person: 'Karol', text: " They're going straight into the database." },
  {
    startTime: 3708.8,
    person: 'Karol',
    text: " They're adding things that I have no control over."
  },
  {
    startTime: 3711.54,
    person: 'Karol',
    text: " Well, duh, obviously, because you have no idea what you're doing."
  },
  { startTime: 3714.24, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 3717.37,
    person: 'Karol',
    text: ' And then no level of specification will help because that person was not able to specify on the right level of abstraction what they were supposed to do.'
  },
  { startTime: 3728.39, person: 'Karol', text: ' Yeah.' },
  { startTime: 3729.55, person: 'Karol', text: ' And that requires experience and knowledge.' },
  {
    startTime: 3732.05,
    person: 'Karol',
    text: ' And then going back to the problem of experience and knowledge, if we start replacing our junior developers with coding agents, where do we in 10, 15 years, where do we get those senior developers?'
  },
  {
    startTime: 3745.11,
    person: 'Swen',
    text: ' Yeah, that is exactly like this career progression.'
  },
  { startTime: 3749.29, person: 'Swen', text: ' How would it work?' },
  { startTime: 3750.91, person: 'Swen', text: ' Would there be one?' },
  {
    startTime: 3752.57,
    person: 'Karol',
    text: " I used to be a code monkey and a coder that didn't understand anything and just did what they were told back in my first year as an IT specialist."
  },
  { startTime: 3761.51, person: 'Karol', text: ' Everybody was like that.' },
  {
    startTime: 3763.37,
    person: 'Karol',
    text: " That's just the natural progression of it, right?"
  },
  { startTime: 3765.57, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 3767.03,
    person: 'Karol',
    text: " I mean, when I joined my first team as a developer, they didn't trust me with code, obviously."
  },
  {
    startTime: 3773.87,
    person: 'Karol',
    text: ' They had to teach me everything from scratch because I knew how to programme assembler, logic gates, PLCs, a little bit of Java and C, but we were working on integration platforms, which was fifth generation code for the fifth generation language.'
  },
  { startTime: 3791.75, person: 'Karol', text: ' So no idea what that was at that time.' },
  { startTime: 3794.57, person: 'Karol', text: ' What was my first task in the team?' },
  { startTime: 3797.35, person: 'Karol', text: ' Oh, you know what?' },
  { startTime: 3797.97, person: 'Karol', text: ' We need custom icons for libraries.' },
  {
    startTime: 3800.39,
    person: 'Karol',
    text: ' Go make icons, 80 pixels by 80 pixels, so we can put them in typical business works.'
  },
  { startTime: 3806.25, person: 'Karol', text: ' Yeah.' },
  { startTime: 3806.85, person: 'Karol', text: ' Sure.' },
  { startTime: 3807.43, person: 'Karol', text: ' Sat down, started drafting icons.' },
  {
    startTime: 3809.69,
    person: 'Karol',
    text: ' And then I learned the code base because of that, because I had to understand what the icons were for.'
  },
  {
    startTime: 3813.93,
    person: 'Karol',
    text: ' So I had to ask questions what the code is doing so I can design the icons, make them reflect the functions.'
  },
  { startTime: 3821.57, person: 'Karol', text: ' Perfect learning experience.' },
  {
    startTime: 3823.19,
    person: 'Karol',
    text: ' I got to get to know the libraries we were using.'
  },
  {
    startTime: 3826.37,
    person: 'Karol',
    text: ' But if I would implement it myself, that would be probably nightmarish.'
  },
  {
    startTime: 3832.33,
    person: 'Swen',
    text: " Yeah, there's all these routes to gaining experience and so on."
  },
  { startTime: 3838.53, person: 'Swen', text: ' How do you...' },
  {
    startTime: 3839.81,
    person: 'Swen',
    text: " Because that's like, if you look at these, again, I've got this on my screen, all of these works, people start out somewhere, right?"
  },
  {
    startTime: 3849.13,
    person: 'Swen',
    text: " And this is like, no one started out and being the absolute master in structured communication in all aspects of, in all these abstraction layers, covering all these abstraction layers you're talking about."
  },
  { startTime: 3863.79, person: 'Swen', text: ' Nobody can start at that point.' },
  {
    startTime: 3865.53,
    person: 'Swen',
    text: ' People started being maybe business analysts and sliding more into technical roles, or people start, as you said, as junior developers, or SQA, right?'
  },
  { startTime: 3879.69, person: 'Swen', text: " And that's how you build up this kind of..." },
  {
    startTime: 3883.16,
    person: 'Swen',
    text: ' Also, the thing is, this seemed very much like the magical developer that was pitched to me in that session.'
  },
  {
    startTime: 3891.06,
    person: 'Swen',
    text: ' I was kind of just thinking, when I watched the videos, who do I know who does and know all these things?'
  },
  {
    startTime: 3895.94,
    person: 'Swen',
    text: ' Some people do a lot of these, but people have...'
  },
  {
    startTime: 3902.57,
    person: 'Swen',
    text: ' Yeah, they tend to gravitate towards certain things, right?'
  },
  {
    startTime: 3906.05,
    person: 'Swen',
    text: ' So back to your developer, there are coders who are just happy to code.'
  },
  {
    startTime: 3909.81,
    person: 'Swen',
    text: " And then they expand their repertoire, but from the starting point they're at, they're not going to be..."
  },
  { startTime: 3922.63, person: 'Swen', text: ' Many can be.' },
  {
    startTime: 3923.81,
    person: 'Swen',
    text: " I'm not saying this is not possible, but there is a logical progression as well."
  },
  {
    startTime: 3928.11,
    person: 'Swen',
    text: " And maybe some people will never want to be business analysts because it'll drive them nuts to sit down with someone who knows all the rules about pet insurance."
  },
  {
    startTime: 3938.17,
    person: 'Swen',
    text: ' If you need to sit down with a pet insurance expert who does nothing, then process claims all day, you need to be also certain.'
  },
  {
    startTime: 3948.01,
    person: 'Swen',
    text: ' You need to be a personality type who likes to talk to that.'
  },
  {
    startTime: 3953.47,
    person: 'Swen',
    text: " And because coders, if you're really good at cutting high-performing code for real-time use cases, not real-time in the sense that we're usually talking about in Solace, but in real-time, which is also quite real-time already, but car operating systems, medical equipment, and so on."
  },
  {
    startTime: 3980.73,
    person: 'Swen',
    text: ' These people, you need domain knowledge as well, but at the end of the day, you need to have a good number of people who know exactly how to build this stuff so it runs fast.'
  },
  {
    startTime: 3990.19,
    person: 'Swen',
    text: " They don't need to talk to all the medical personnel and understand the business case."
  },
  {
    startTime: 4000.01,
    person: 'Swen',
    text: ' They need to be able to just get everything out.'
  },
  {
    startTime: 4004.23,
    person: 'Swen',
    text: " So your defib machine that you're using in the back of an ambulance just goes when it needs to and not half a second later."
  },
  { startTime: 4012.87, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 4014.15,
    person: 'Karol',
    text: " But then on top of that, if we're talking about specification, and we already know that LLMs, they return statistical matches."
  },
  {
    startTime: 4025.75,
    person: 'Karol',
    text: " What that means in terms of statistical matches, and there was a great quote from a podcast on games where Chris Simon, my previous guest last week, was talking about LLMs and the use of them in games, and why an LLM will be a bad game master for, let's say, a D&D session."
  },
  {
    startTime: 4052.61,
    person: 'Karol',
    text: ' Because LLMs return something that is of statistical relevance, so they return the average.'
  },
  {
    startTime: 4059.01,
    person: 'Karol',
    text: ' They will not return the edges, the edge being bad or the edge being really great.'
  },
  {
    startTime: 4064.09,
    person: 'Karol',
    text: " They will return an average because average is statistically sound, which means that if you have those edge cases where you need something really exceptional, so for example, like the origins of Solace being trade markets where you need nanosecond data transfers as events, this is something that is not achievable for an LLM because the average is milliseconds that we're working in."
  },
  {
    startTime: 4091.45,
    person: 'Karol',
    text: " The average of an industry we're looking at, well, the communication should be under one second, right?"
  },
  {
    startTime: 4099.21,
    person: 'Karol',
    text: " So if we were aiming to build something that is nanosecond in latency, you're never going to achieve that through an LLM because it will add complexity that is completely unnecessary and not able to comprehend what you're talking about because that's not in a statistical relevance of the dataset it's been trained on."
  },
  {
    startTime: 4120.109,
    person: 'Karol',
    text: " And then going into more abstract things, the more specialised things, especially with closed ecosystems, like let's say things like, great examples from our fields, any tool like MuleSoft, TipCo, et cetera."
  },
  {
    startTime: 4138.91,
    person: 'Karol',
    text: ' A lot of knowledge about those tools is a closed book.'
  },
  { startTime: 4144.81, person: 'Karol', text: " They're not available without a login." },
  { startTime: 4147.41, person: 'Karol', text: " They're not readable for an LLM." },
  { startTime: 4149.99, person: 'Karol', text: " So they're not trained on that." },
  {
    startTime: 4152.069,
    person: 'Karol',
    text: ' I tried some time ago when I was trying to write articles with the help of an LLM to just try and prompt out an article, just for the fun of it.'
  },
  { startTime: 4162.29, person: 'Karol', text: ' Not in favour of that.' },
  {
    startTime: 4163.33,
    person: 'Karol',
    text: " I like to write my stuff alone and maybe with some help for editing, but just for the sake of an experiment, let's try and write an article."
  },
  { startTime: 4173.79, person: 'Karol', text: " And I'm embedded in a niche field in IT." },
  {
    startTime: 4177.35,
    person: 'Karol',
    text: ' Application integration is a niche field in fact, right?'
  },
  {
    startTime: 4181.63,
    person: 'Karol',
    text: " And I'm trying to write about an integration platform."
  },
  { startTime: 4184.99, person: 'Karol', text: ' Okay, perfect.' },
  { startTime: 4185.89, person: 'Karol', text: ' So I start prompting.' },
  {
    startTime: 4187.85,
    person: 'Karol',
    text: ' The deepest level I got was an understanding of what a REST endpoint is and how to compose an API.'
  },
  {
    startTime: 4196.31,
    person: 'Karol',
    text: ' None of the LLMs I tried was capable of comprehending what an iPaaS is and what is the complexity of an iPaaS.'
  },
  {
    startTime: 4203.47,
    person: 'Karol',
    text: ' They were at best having marketing level information about this field.'
  },
  {
    startTime: 4209.41,
    person: 'Karol',
    text: " So the deeper you go into the specifics of the problem domain, the less likely it is that an LLM will be able to solve that problem domain, unless it's a very common problem in a common problem domain that is well described and well written about."
  },
  {
    startTime: 4227.03,
    person: 'Karol',
    text: ' And this is another problem there in specification driven development, because even if you specify, you rely on the context that the LLM is able to comprehend that specification in the right context of the problem domain.'
  },
  { startTime: 4242.17, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 4243.55,
    person: 'Swen',
    text: " Of course there's ways to kind of get around that by giving tools and more information to feeding more information to the LLM."
  },
  {
    startTime: 4253.05,
    person: 'Swen',
    text: " But then again, then you're starting to engineer quite a lot more things, right?"
  },
  {
    startTime: 4257.47,
    person: 'Swen',
    text: " And needing to build a lot more complex infrastructure if you kind of need to make sure that you stay with what you're talking about."
  },
  {
    startTime: 4268.69,
    person: 'Swen',
    text: ' Like to make this useful in your context, like say to actually generate or let LLMs build new MuleSoft integration flows, you need to provide it like all of the specifications of things that you already have, data schemas.'
  },
  {
    startTime: 4286.63,
    person: 'Swen',
    text: " You need to provide it with the documentation for MuleSoft because it doesn't know anything about MuleSoft."
  },
  {
    startTime: 4291.05,
    person: 'Swen',
    text: ' And then a lot of infrastructure to actually enable the AI to do their job, right?'
  },
  {
    startTime: 4297.85,
    person: 'Swen',
    text: " And if they've been like, this works quite well, I guess, because obviously for really mainstream programming languages, because that's what they use as training set, right?"
  },
  {
    startTime: 4308.77,
    person: 'Swen',
    text: ' So I guess like in GitHub, especially like the GitHub repositories and whatever they can use, like open source repositories, right?'
  },
  {
    startTime: 4316.17,
    person: 'Karol',
    text: ' To an extent, because, okay, my niche field is going to be problematic either way, but because I need to feed the LLM.'
  },
  {
    startTime: 4322.59,
    person: 'Karol',
    text: ' And then the question is, am I context engineering?'
  },
  {
    startTime: 4325.77,
    person: 'Karol',
    text: ' So fine tuning, or am I teaching the LLMs and providing training data and training my own model?'
  },
  {
    startTime: 4332.11,
    person: 'Karol',
    text: ' Because this will be also a difference, right?'
  },
  {
    startTime: 4334.59,
    person: 'Karol',
    text: " But then now we're talking about, okay, well-defined languages and well-known languages."
  },
  { startTime: 4341.83, person: 'Karol', text: ' Perfect.' },
  { startTime: 4342.69, person: 'Karol', text: ' But we just killed Stack Overflow.' },
  {
    startTime: 4344.51,
    person: 'Karol',
    text: ' A lot of the content that the LLMs were trained on was Stack Overflow.'
  },
  {
    startTime: 4352.19,
    person: 'Karol',
    text: ' Now, some of them are training on public GitHub repositories, but GitHub repositories, they have code, not context of a specific problem that like it was described at Stack Overflow.'
  },
  {
    startTime: 4366.95,
    person: 'Karol',
    text: ' Stack Overflow had problems, resolutions of problems, right?'
  },
  {
    startTime: 4371.51,
    person: 'Karol',
    text: ' GitHub repositories or Git repositories that are public, they have just code without the context.'
  },
  {
    startTime: 4378.53,
    person: 'Karol',
    text: " So we're not going to be able to achieve the same level of familiarity with the language in training an LLM over those repositories that we did over Stack Overflow, right?"
  },
  { startTime: 4390.79, person: 'Karol', text: " And now we're inventing more and more." },
  {
    startTime: 4393.43,
    person: 'Karol',
    text: " So we're building new languages to describe things that we haven't described because we're going one abstraction layer higher again."
  },
  {
    startTime: 4399.19,
    person: 'Karol',
    text: ' And so we need to build a better language to describe that abstraction layer and start...'
  },
  {
    startTime: 4404.83,
    person: 'Karol',
    text: " It's like all over the place since the invention of electricity."
  },
  { startTime: 4409.57, person: 'Karol', text: ' We built abstraction layers.' },
  {
    startTime: 4411.87,
    person: 'Karol',
    text: ' Nobody now thinks about the logic gates that are in the processor.'
  },
  { startTime: 4415.99, person: 'Karol', text: ' Yeah.' },
  { startTime: 4416.43, person: 'Karol', text: " We just say, it's a processor, it works." },
  {
    startTime: 4419.77,
    person: 'Karol',
    text: ' Nobody thinks about the BCD code or assembler.'
  },
  { startTime: 4425.27, person: 'Karol', text: ' No, it just works.' },
  {
    startTime: 4427.17,
    person: 'Karol',
    text: " Nobody thinks about the C code that's running our hardware."
  },
  { startTime: 4432.37, person: 'Karol', text: ' No, it just works.' },
  {
    startTime: 4434.77,
    person: 'Karol',
    text: ' And then now a lot of people are not even thinking about the Java virtual machine.'
  },
  { startTime: 4440.01, person: 'Karol', text: ' It just works.' },
  {
    startTime: 4441.97,
    person: 'Karol',
    text: " And a lot of the software we're using right now to code is built on Java."
  },
  { startTime: 4446.33, person: 'Karol', text: " So we're depending on Java virtual machines." },
  {
    startTime: 4449.09,
    person: 'Karol',
    text: " And so we're adding another abstraction layer soon enough."
  },
  {
    startTime: 4452.43,
    person: 'Karol',
    text: " We will not have any LLM being capable to comprehend that abstraction layer because there's just no examples, no documentation."
  },
  {
    startTime: 4459.67,
    person: 'Karol',
    text: ' People will go back to Stack Overflow because LLMs will become useless.'
  },
  {
    startTime: 4463.55,
    person: 'Karol',
    text: " Because they don't have training data to train upon because we're talking about a different abstraction layer of code that is not documented."
  },
  {
    startTime: 4471.47,
    person: 'Karol',
    text: ' So no statistical relevance because that becomes a niche case in whatever training data that those models receive.'
  },
  {
    startTime: 4478.29,
    person: 'Karol',
    text: ' And now if we try to specify for that language, even if we specify good enough, the output will never be good enough.'
  },
  { startTime: 4489.85, person: 'Karol', text: " That's another level of a problem." },
  {
    startTime: 4492.57,
    person: 'Karol',
    text: " We're going to hit that wall soon enough, I assume."
  },
  {
    startTime: 4501.61,
    person: 'Swen',
    text: " There's one thing you just said earlier, where you said LLMs try to shoot for the average."
  },
  {
    startTime: 4510.19,
    person: 'Swen',
    text: ' This is also why when you ask them to write text, and again, this also depends on what they were trained on, but you kind of get really pleasing marketing speak back loads of the time.'
  },
  { startTime: 4522.15, person: 'Swen', text: ' If you want to write an article and so on.' },
  {
    startTime: 4524.19,
    person: 'Swen',
    text: " Because it's trained to zoom in and it's really slick, but it's rarely creative."
  },
  {
    startTime: 4531.41,
    person: 'Swen',
    text: ' Because creativity kind of goes, and this goes to your gaming scenarios, creativity means like, you know what?'
  },
  {
    startTime: 4537.17,
    person: 'Swen',
    text: ' This is completely like to make a game interesting.'
  },
  {
    startTime: 4540.91,
    person: 'Swen',
    text: " It's like you actually come up with these edge cases because you go off on different tensions, right?"
  },
  {
    startTime: 4546.51,
    person: 'Swen',
    text: ' So the creativity aspect of it is kind of like there is creativity in this whole process, right?'
  },
  {
    startTime: 4554.07,
    person: 'Swen',
    text: ' So designing a system, like breaking things down into components, where you kind of like, if you think outside of the box, you arrive at different solutions, right?'
  },
  {
    startTime: 4568.43,
    person: 'Swen',
    text: ' And that is also something like if you have people at different abstraction layers, having to deal with each other, going to and from, and questioning each other, right?'
  },
  {
    startTime: 4579.13,
    person: 'Swen',
    text: ' Then you get at these different abstraction layers, you get different types of creative solutions, right?'
  },
  {
    startTime: 4585.31,
    person: 'Swen',
    text: ' Like you can build, well, yeah, like you can either, yeah, you can build like software in thousand different ways, and you can pay attention to different aspects, and you can break it down in different aspects you could use, right?'
  },
  {
    startTime: 4599.97,
    person: 'Swen',
    text: " So all of these things, but they have like impact on its maintainability later on, impact on performance, impact on like, there's loads of implications on that, right?"
  },
  {
    startTime: 4611.41,
    person: 'Swen',
    text: ' And the creativity, like if you come up with a creative solution, it may be more cost'
  },
  {
    startTime: 4614.67,
    person: 'Swen',
    text: " efficient, because we're kind of like, we're not kind of just like, we're not, we decide"
  },
  {
    startTime: 4620.43,
    person: 'Swen',
    text: " not to build like a 10 layered, like I've worked with, like in my consulting days, like"
  },
  {
    startTime: 4626.81,
    person: 'Swen',
    text: " these insurance applications, where you had like, like you'd spend a day debugging, when"
  },
  {
    startTime: 4631.17,
    person: 'Swen',
    text: ' you click the button, like it took you like 10 days a day to navigate through the whole'
  },
  {
    startTime: 4636.11,
    person: 'Swen',
    text: ' code infrastructure with a debugger, to figure out like until the record was saved, like you'
  },
  { startTime: 4641.47, person: 'Swen', text: ' could sit there for hours just going from.' },
  { startTime: 4643.85, person: 'Swen', text: ' Like, sometimes this is the right approach.' },
  {
    startTime: 4646.21,
    person: 'Swen',
    text: " Sometimes you actually want someone goes like, yeah, but let's not do this today."
  },
  {
    startTime: 4650.15,
    person: 'Swen',
    text: " Like, let's just get rid of this and just do like a, because our problem doesn't need like a multi-layer architecture, right?"
  },
  {
    startTime: 4657.35,
    person: 'Swen',
    text: ' And then you say, we need to be creative, right?'
  },
  {
    startTime: 4662.79,
    person: 'Swen',
    text: " Like you look at like, people bring their experience, and then they also get to like points where you kind of like, it's not, it's not always a statistical sound."
  },
  {
    startTime: 4672.77,
    person: 'Swen',
    text: ' One of the, and this is like, LLM will not arrive at one thing, it will arrive at similar things at difference, if you ask it the same question, right?'
  },
  { startTime: 4682.17, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 4682.75,
    person: 'Swen',
    text: " So it's all going to be run off the run off the middle, middle stuff, middle of the road stuff that is never predictable, if it really is exactly the same, right?"
  },
  {
    startTime: 4691.75,
    person: 'Swen',
    text: " So that does not give you like these, like, you come up with a clever solution, you save a lot of money, you come up with, with a pushback on a business requirement, and just say, like, for MVP, we're just like, we make it simpler, right?"
  },
  {
    startTime: 4705.03,
    person: 'Swen',
    text: ' You save money, and maybe find out that the original business requirement was never needed, right?'
  },
  {
    startTime: 4710.51,
    person: 'Swen',
    text: " So there's, that's on the business requirement level on the like, how do I cut this?"
  },
  { startTime: 4714.51, person: 'Swen', text: ' Do I build a distributed system?' },
  {
    startTime: 4716.09,
    person: 'Swen',
    text: ' Or do I just mash it all into one big thing and hope for the best, which is actually a valid, for many use cases, a valid approach, right?'
  },
  {
    startTime: 4725.33,
    person: 'Swen',
    text: " Kind of like, you don't need like, services, and services built on top, like the whole SOA thing, like the, like, what we used to do in SOA was like the four level, four levels of SOA services from system services, business services, processes, blah, blah, blah."
  },
  {
    startTime: 4742.37,
    person: 'Swen',
    text: " Like, that is a good example, sometimes you just go me, and there's a lot of creativity and judgement calls that we do that you can't do when you're always striving to be like, when you're trained to look at like the most sensible and most statistically likely to work solution."
  },
  {
    startTime: 4762.81,
    person: 'Karol',
    text: ' But you know why people think that LLMs are creative?'
  },
  {
    startTime: 4766.93,
    person: 'Karol',
    text: " Because usually people utilise LLMs for the things they don't know and understand and don't have expertise in."
  },
  {
    startTime: 4773.64,
    person: 'Karol',
    text: " So they, when you sit down an expert and start, ask the expert to start prompting about their field, it turns out that it's just regurgitated stuff."
  },
  { startTime: 4784.07, person: 'Karol', text: " There's nothing creative about that." },
  {
    startTime: 4787.15,
    person: 'Karol',
    text: ' I saw a study recently that some LLMs were trained on actual books, stolen IP, so that the LLMs can recreate, for example, Harry Potter, to the accuracy of about 95%.'
  },
  {
    startTime: 4803.49,
    person: 'Karol',
    text: ' Small changes in text, but it just recreates the story.'
  },
  {
    startTime: 4808.15,
    person: 'Karol',
    text: " So if you are a game master in D&D, and you start prompting the LLM, you'll find things that are completely not creative, because you'll see that they're like standard stuff, like run of the mill things in D&D that you were playing in sessions, and they were not very creative, they were just like a beginner level stuff."
  },
  {
    startTime: 4829.29,
    person: 'Karol',
    text: " And I don't know if you ever tried to play a game with an LLM."
  },
  {
    startTime: 4833.23,
    person: 'Karol',
    text: " I spent about four hours prompting, just saying to the LLM, okay, you're a game master, create the whole context and whatever, and just define what is the game, genre, and let's play."
  },
  {
    startTime: 4846.43,
    person: 'Karol',
    text: ' It was so completely boring, because the LLM agreed with every action I did.'
  },
  {
    startTime: 4851.43,
    person: 'Karol',
    text: ' Whatever action I did, it was always a success.'
  },
  { startTime: 4853.65, person: 'Karol', text: " I'm like..." },
  { startTime: 4857.52, person: 'Swen', text: ' Easy mode.' },
  { startTime: 4858.7, person: 'Swen', text: ' This is live easy mode.' },
  { startTime: 4860.18, person: 'Swen', text: ' Yeah, cool.' },
  { startTime: 4860.88, person: 'Karol', text: ' It was an interesting world that it painted.' },
  {
    startTime: 4864.06,
    person: 'Karol',
    text: " I'm guessing it painted it from some source that I don't know, but otherwise, it was just boring, because every action I described, it just agreed with me."
  },
  { startTime: 4874.34, person: 'Karol', text: " Yeah, you're successful." },
  { startTime: 4875.28, person: 'Karol', text: ' You killed that.' },
  { startTime: 4876.14, person: 'Karol', text: ' You did that.' },
  { startTime: 4877.38, person: 'Karol', text: ' You solved this problem.' },
  { startTime: 4878.44, person: 'Karol', text: ' You solved this puzzle.' },
  {
    startTime: 4880.12,
    person: 'Karol',
    text: " I could literally, with my skills and prompting, I could easily modify the story, even if I didn't even try to modify the story."
  },
  { startTime: 4887.96, person: 'Karol', text: ' I tried to be a character in the game.' },
  {
    startTime: 4890.76,
    person: 'Karol',
    text: " No, I'd influence it either way by a proper description of my actions."
  },
  { startTime: 4896.86, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 4898.56,
    person: 'Karol',
    text: " And in that sense, it's always going to be difficult to utilise these things, because of that statistical probability and non-determinism from our side."
  },
  {
    startTime: 4909.78,
    person: 'Karol',
    text: " And it's, I think, still a very useful tool, but in very small cases."
  },
  {
    startTime: 4920.62,
    person: 'Karol',
    text: ' And then going into specification-driven or development methods.'
  },
  { startTime: 4926.72, person: 'Karol', text: " That's a very nice question from Maxim Kogan." },
  {
    startTime: 4932.62,
    person: 'Karol',
    text: ' As in, then if we do development, how should we specify it?'
  },
  { startTime: 4937.54, person: 'Karol', text: ' How should we go into developing?' },
  {
    startTime: 4940.52,
    person: 'Karol',
    text: " And this is, I think, more of a, Maxim, correct me if I'm wrong, but more of a general question rather than AI-specific question, how to specify."
  },
  {
    startTime: 4953.42,
    person: 'Karol',
    text: ' Because I think there are so many ways to specify things to make them work, and depending on where we work and what environment and with what people, different methods will work.'
  },
  { startTime: 4970.37, person: 'Karol', text: " What's your thoughts on that?" },
  {
    startTime: 4971.49,
    person: 'Swen',
    text: " Yeah, I'm not, it's been a while since I ran a development team, so I'm relatively ignorant of these development, in terms of development methods."
  },
  {
    startTime: 4986.89,
    person: 'Swen',
    text: " So I'm not, and I'm also usually trying to, my take is I need to find something that works for me, right?"
  },
  {
    startTime: 4999.27,
    person: 'Swen',
    text: " So it's kind of like, I'm not overly, back in the day also, I wasn't overly dogmatic how things should work, because you need to find out for different situations what the right approach is, right?"
  },
  { startTime: 5015.32, person: 'Karol', text: " That's another aspect, context, right?" },
  {
    startTime: 5018.34,
    person: 'Swen',
    text: " Yeah, it's the same, we're going back to the context, yeah."
  },
  { startTime: 5022.1, person: 'Swen', text: " But it's- Back and back." },
  { startTime: 5027.39, person: 'Swen', text: " No, it's- Ah, okay." },
  { startTime: 5032.19, person: 'Karol', text: ' Maxim is still listening to us, using agents.' },
  {
    startTime: 5039.35,
    person: 'Karol',
    text: " Ooh, I think it's not about the method itself, I think spec-driven development or test-driven"
  },
  {
    startTime: 5046.45,
    person: 'Karol',
    text: " development will probably work fine, but I don't think it's really about the method"
  },
  {
    startTime: 5051.71,
    person: 'Karol',
    text: " of specifying, as I find it, it's, from my perspective as I use LLMs for, let's say,"
  },
  {
    startTime: 5060.55,
    person: 'Karol',
    text: " vibe coding of JavaScript that I do for myself, it's more about cutting the context into small"
  },
  {
    startTime: 5069.69,
    person: 'Karol',
    text: ' pieces and feeding only the small pieces that I need, and not even in the context of a code'
  },
  {
    startTime: 5074.77,
    person: 'Karol',
    text: " base, but just a specific problem that I'm facing."
  },
  {
    startTime: 5078.13,
    person: 'Karol',
    text: " So I specify which language I'm using, I'm specifying which libraries, if, and then what kind of a coding problem I'm trying to solve, and what is the expected outcome, and then just take what it spits out and try to modify it until I get that outcome."
  },
  {
    startTime: 5097.01,
    person: 'Karol',
    text: " And this is pretty much specification-driven development in that case, but the problem is not the method, the problem is the chunk size, the context at which we're asking the questions."
  },
  { startTime: 5111.21, person: 'Karol', text: " Yeah, that's- At least in my opinion." },
  { startTime: 5112.55, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 5116.51,
    person: 'Swen',
    text: " It's also like, what you described is like, yeah, it goes back to how big is the chunk that you're working on, right?"
  },
  {
    startTime: 5126.14,
    person: 'Swen',
    text: " So because if you have a small problem and you may be able to specify it in a markdown file and describe it to a sufficient degree, and you can feed that into an agent and they do their stuff, that's fine."
  },
  {
    startTime: 5137.8,
    person: 'Swen',
    text: " It's like, say it's an integration process, you have a very narrow interface, you know exactly this is the data we get in, and this is the event we need to emit on the other side."
  },
  {
    startTime: 5147.86,
    person: 'Swen',
    text: " And something needs to happen in between, and we can describe what that is relatively simply, because there's an input, a format, an output format, and we can write a lot of test case around that easily, right?"
  },
  {
    startTime: 5163.18,
    person: 'Swen',
    text: ' So that is kind of like, then you provide the specification.'
  },
  { startTime: 5165.62, person: 'Swen', text: ' But when I think about what we...' },
  {
    startTime: 5167.74,
    person: 'Swen',
    text: ' So we did, essentially, we built, one project I worked on was building a service management solution for a retailer, or wider sense.'
  },
  {
    startTime: 5180.58,
    person: 'Swen',
    text: ' But the point is, we built, we started with a few use cases, we extended it, but we always had slices of, as you do, you build new slices, you build new UI, you need to build new APIs to power the UI, new interface APIs to interface with systems in your enterprise.'
  },
  {
    startTime: 5201.82,
    person: 'Swen',
    text: ' You need to build all the backend solution, the backend database, maybe, yeah, some data integration around it.'
  },
  { startTime: 5210.02, person: 'Swen', text: ' So there is a lot of stuff.' },
  { startTime: 5211.56, person: 'Swen', text: ' How do you specify that?' },
  { startTime: 5212.72, person: 'Swen', text: ' Do you specify that in markdown files?' },
  {
    startTime: 5214.6,
    person: 'Swen',
    text: ' So what we did was, like what I used to do was like loads of UI mockups for UI developers, working with the customer through that, working with developers through that, figure out like, but you have like, you have UI stuff, you may have, you need to define the data model.'
  },
  {
    startTime: 5231.16,
    person: 'Swen',
    text: ' So you need to have like some, maybe some UML diagrams to explain what needs to change.'
  },
  {
    startTime: 5236.9,
    person: 'Swen',
    text: ' You may need to have some class diagrams to figure and tell them like, this is like, we need this.'
  },
  {
    startTime: 5242.32,
    person: 'Swen',
    text: " And it's not the same pattern as we usually had to do."
  },
  {
    startTime: 5244.92,
    person: 'Swen',
    text: ' So we need to figure out like, oh, how will that work?'
  },
  {
    startTime: 5247.82,
    person: 'Swen',
    text: " We're adding a component, we're adding like more, like a third party component."
  },
  { startTime: 5252.04, person: 'Swen', text: " There's loads of things." },
  { startTime: 5252.98, person: 'Swen', text: ' How do you specify that?' },
  {
    startTime: 5254.14,
    person: 'Swen',
    text: " There's documents, there's loads of different artefacts, right?"
  },
  { startTime: 5257.5, person: 'Swen', text: ' So a markdown file is not everything.' },
  {
    startTime: 5259.62,
    person: 'Swen',
    text: " You'll have like, as I said, mockups, class diagrams, UML."
  },
  {
    startTime: 5263.4,
    person: 'Swen',
    text: " Like there's a reason why UML was invented, because like there's so many aspects of the system you need to describe."
  },
  {
    startTime: 5269.82,
    person: 'Swen',
    text: " And like, I can see this kind of working, like if it's so, such a small and well-defined problem domain that you can just say like, I write it all up in a text file and with some schema definitions here and there and written up test cases, I can test it."
  },
  {
    startTime: 5286.1,
    person: 'Swen',
    text: " But like a vertical slice of a business solution that you're building, there are so many artefacts you need to describe that, so you can cut code from it, right?"
  },
  {
    startTime: 5299.94,
    person: 'Swen',
    text: " That was the simplistic part that also kind of wound me up when I watched that video, because it's like, yes, you can write a text file, but like that is not, you can't, a text file in itself, like that's why we humans invented like drawing on and painting and all kinds of other things, right?"
  },
  {
    startTime: 5323.6,
    person: 'Swen',
    text: ' So engineers invented like all the blueprints and all of that, the schematics, all this kind of stuff.'
  },
  {
    startTime: 5332.68,
    person: 'Swen',
    text: " Like there's a reason why we're not write like everything in prose, right?"
  },
  {
    startTime: 5336.26,
    person: 'Karol',
    text: ' Because that conveys more information than prose.'
  },
  { startTime: 5341.12, person: 'Karol', text: ' This can convey a lot more information.' },
  {
    startTime: 5343.54,
    person: 'Karol',
    text: " And of course, now we have diagrams as code, which could be something that can be interpretable for whatever is trying to build code, because if we write the diagram as code in like in mermaid or plant UML, then of course, for us, it's a human readable picture."
  },
  { startTime: 5367.04, person: 'Karol', text: " For an LLM, it's a parsable picture." },
  {
    startTime: 5371.64,
    person: 'Karol',
    text: " It's understandable, because it understands, let's say I'm writing a sequence diagram, so it understands the sequence."
  },
  {
    startTime: 5378.1,
    person: 'Karol',
    text: ' But then again, do you like know a lot of people who actually know how to properly specify in UML according to UML specification?'
  },
  { startTime: 5390, person: 'Swen', text: " I'm not one of them." },
  { startTime: 5391.54, person: 'Swen', text: ' I know enough to convey what I want.' },
  {
    startTime: 5394.42,
    person: 'Swen',
    text: " But the formal, that's what you're getting at, because AI agents will interpret it in the formal context of what this UML diagram should mean."
  },
  { startTime: 5407.24, person: 'Swen', text: ' Exactly.' },
  {
    startTime: 5408.4,
    person: 'Swen',
    text: ' But I admit it, I use UML often, when I use it, often it is kind of like back of the cigarette pack type stuff.'
  },
  { startTime: 5418.42, person: 'Swen', text: " I just don't scribble it down." },
  {
    startTime: 5419.92,
    person: 'Swen',
    text: " I write, but it's like I use the tools, and I eventually like, and this is like, yeah, I use like a hammer as a screw, the other way around."
  },
  { startTime: 5430.12, person: 'Swen', text: ' I use a screwdriver as a hammer sometimes.' },
  { startTime: 5433.94, person: 'Swen', text: " But it's good enough." },
  {
    startTime: 5435.18,
    person: 'Swen',
    text: " If it gets the nail into the wall, it's fine, right?"
  },
  {
    startTime: 5437.72,
    person: 'Swen',
    text: " But that's what you're getting at, because then you need to be so formally correct."
  },
  {
    startTime: 5442.02,
    person: 'Swen',
    text: " If you're getting, extending it to kind of like, oh, we give you UI mock-ups, we give you UML diagrams, then you need to be absolutely clear."
  },
  {
    startTime: 5450.42,
    person: 'Swen',
    text: ' And this goes back to the kind of, you need to be absolutely clear and comprehensive in the instructions you give.'
  },
  {
    startTime: 5456.88,
    person: 'Karol',
    text: ' Otherwise, like- And then you give the mock-ups, but then you think, okay, we need a lot of performance, so we should do, for example, micro frontends, right?'
  },
  { startTime: 5467.96, person: 'Karol', text: " Okay, let's do micro frontends." },
  { startTime: 5469.56, person: 'Karol', text: ' Fantastic.' },
  {
    startTime: 5470,
    person: 'Karol',
    text: ' And then how are you going to show on the mock-up that this part of the mock-up is one micro frontend, and this part of the mock-up is a different micro frontend without actually compromising the mock-up, right?'
  },
  {
    startTime: 5486.12,
    person: 'Karol',
    text: " Because then if you start drawing on the mock-up, you're adding another semantic layer on the picture, and that may be completely misinterpreted if you don't specify it correctly, that this part of the UI, not a designation that this is a micro frontend."
  },
  {
    startTime: 5507.12,
    person: 'Karol',
    text: " And this is another level of abstraction where, okay, we're specifying, but the language we use, it's like with architecture, I heard many times from Mark Richards in Neo4j, we're not looking for the best solution, as humans, we're looking for the least worst solution."
  },
  {
    startTime: 5526.9,
    person: 'Karol',
    text: ' So the one that will get the job done, and the one that will convey the message.'
  },
  {
    startTime: 5532.8,
    person: 'Karol',
    text: ' And for the LLMs, we need to have the best solution, not the one that will convey the message.'
  },
  { startTime: 5539.5, person: 'Karol', text: ' Again, we live in context.' },
  {
    startTime: 5541.66,
    person: 'Swen',
    text: " Like your specification needs to be the best that it can be, otherwise you're not getting where you need to go, yeah."
  },
  { startTime: 5552.35, person: 'Karol', text: ' Precisely.' },
  { startTime: 5554.09, person: 'Swen', text: " There's..." },
  {
    startTime: 5555.53,
    person: 'Swen',
    text: " Yeah, this is exactly the point, because I certainly have heard of micro frontends, but the thing is, and I may have inadvertently built micro frontends, but I actually don't really know exactly what they are."
  },
  {
    startTime: 5570.53,
    person: 'Karol',
    text: ' Just to clarify, micro frontends are microservices that you build for frontend, that basically if you compose a frontend, different panels in the frontend are different microservices feeding this into some sort of a frame.'
  },
  {
    startTime: 5585.89,
    person: 'Karol',
    text: ' These are actually completely different modules that supply the visual, and then you can control whether or not these modules should be even invoked based on the context of the user.'
  },
  {
    startTime: 5597.09,
    person: 'Karol',
    text: " Lots of frontend stuff that I don't really understand well enough, because I'm not the frontend guy, but again, but that's the UI example that would fit into that example very precisely."
  },
  { startTime: 5607.67, person: 'Swen', text: ' The point is now, if someone can actually...' },
  { startTime: 5612.27, person: 'Swen', text: ' This goes to the good enough, right?' },
  { startTime: 5614.67, person: 'Swen', text: " So it's like someone..." },
  {
    startTime: 5617.83,
    person: 'Swen',
    text: ' And loads of people can definitely produce nice mock-ups, but the call to how this needs to translate technically into...'
  },
  {
    startTime: 5627.69,
    person: 'Swen',
    text: ' Depending also, like all the frameworks people use to develop this, right?'
  },
  { startTime: 5632.31, person: 'Swen', text: " And there's implications of that." },
  { startTime: 5634.69, person: 'Swen', text: " There's implications of..." },
  {
    startTime: 5637.15,
    person: 'Swen',
    text: ' Yeah, I can think of so many things that you need to think about it.'
  },
  {
    startTime: 5641.11,
    person: 'Swen',
    text: " I am at that point when I'm building the mock-up with my knowledge, which is frankly pretty outdated in terms of modern UI technologies."
  },
  {
    startTime: 5651.43,
    person: 'Swen',
    text: " I used to be much closer to this stuff, but I'm no longer, right?"
  },
  {
    startTime: 5654.17,
    person: 'Swen',
    text: ' And so that goes back to how is that interaction all going to work, right?'
  },
  {
    startTime: 5662.41,
    person: 'Swen',
    text: " And it's like, are we making things too complicated then?"
  },
  {
    startTime: 5665.43,
    person: 'Swen',
    text: " Because then we're all sitting there creating all these beautiful mock-ups, and then we're also breaking it down into technology stuff, breaking it down to components and the microservices that back them up."
  },
  {
    startTime: 5677.73,
    person: 'Swen',
    text: " And we're starting to specify a lot of these things."
  },
  {
    startTime: 5682.13,
    person: 'Swen',
    text: " Won't we be quicker by just chucking the one mock-up at a bunch of people who know what they're doing, and they come back with their questions, and they come up with a solution rather than me trying to figure out how this should work, right?"
  },
  {
    startTime: 5702.01,
    person: 'Swen',
    text: " Or a bunch of people in a complete abstract way, because that's also the thing that would wind me up."
  },
  {
    startTime: 5708.33,
    person: 'Swen',
    text: ' On the other hand, when I develop, I really want to know if stuff works.'
  },
  {
    startTime: 5713.45,
    person: 'Swen',
    text: " So I'm going to do a change, run a test, see if it still works."
  },
  { startTime: 5716.73, person: 'Swen', text: ' Does it do what I want it to do?' },
  {
    startTime: 5718.53,
    person: 'Swen',
    text: " This feedback loop, how do you build these feedback loops if you're only just specifying stuff?"
  },
  {
    startTime: 5725.19,
    person: 'Swen',
    text: " Because you're going, hey, I coded this, right?"
  },
  { startTime: 5730.11, person: 'Swen', text: ' So you learn so much by...' },
  {
    startTime: 5732.73,
    person: 'Swen',
    text: ' This goes also to learning styles, but some people just need to go through the pain of doing stuff to know how to make it better, or do it better, or do it differently that it actually solves the problem.'
  },
  {
    startTime: 5745.63,
    person: 'Swen',
    text: " So you iterate over, you need to try it, and then you go, meh, didn't work, right?"
  },
  {
    startTime: 5752.25,
    person: 'Karol',
    text: " Now that you say this, in terms of feedback loops, the thing that pops into my head, okay, when we're doing this in a human approach, yeah, we have feedback loops because somebody else has a different context and knowledge and will come back to us and give us feedback and ask questions and clarify."
  },
  {
    startTime: 5774.61,
    person: 'Karol',
    text: " And now going back to cognitive load, if you're surrounded by AI agents that do just what you tell them, and they do not provide you feedback because they're not there to provide you feedback, they're there to just do the job."
  },
  { startTime: 5789.63, person: 'Karol', text: " So they'll do what you ask them to." },
  {
    startTime: 5792.37,
    person: 'Karol',
    text: ' Now, the whole load of that feedback, of having a different perspective, of having a different context, looking at the problem from different angles goes into your brain.'
  },
  { startTime: 5804.37, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 5804.75,
    person: 'Karol',
    text: ' And now you have to be the wearer of multiple hats just to go around the problem space and actually analyse that from all those angles.'
  },
  {
    startTime: 5814.57,
    person: 'Karol',
    text: " And this is something I would say it's close to impossible."
  },
  { startTime: 5820.07, person: 'Karol', text: ' Yeah, yeah.' },
  {
    startTime: 5821.03,
    person: 'Karol',
    text: " Because we're very, as human beings, we're usually quite bad at looking things from different perspectives, unless that perspective is bluntly pointed out to us."
  },
  { startTime: 5830.73, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 5831.31,
    person: 'Karol',
    text: " And that's because of psychology, of the way we react, because we have emotions, et cetera, et cetera."
  },
  {
    startTime: 5836.99,
    person: 'Karol',
    text: ' So that means that from that perspective, a single person specifying to agents will be incapable of assessing from different aspects, the output, because just by lacking experience and lacking that perspective.'
  },
  { startTime: 5850.19, person: 'Swen', text: ' Yeah.' },
  { startTime: 5852.47, person: 'Karol', text: ' So then what?' },
  { startTime: 5853.83, person: 'Karol', text: ' Are we going to do assessment agents?' },
  { startTime: 5856.83, person: 'Karol', text: ' Again, that will be a flawed concept, right?' },
  {
    startTime: 5859.39,
    person: 'Karol',
    text: " Because it will, again, work on a non-deterministic aspect that we're not aware of, non-deterministic from our user perspective, right?"
  },
  {
    startTime: 5867.99,
    person: 'Karol',
    text: ' So that means this is a moot point to go there, at least at scale.'
  },
  {
    startTime: 5876.17,
    person: 'Karol',
    text: " At the micro scale, where you're containerised to the things that you understand and know, and you're looking at a very small problem, yeah, that's fairly doable."
  },
  {
    startTime: 5887.37,
    person: 'Karol',
    text: ' And people are doing this all the time right now.'
  },
  {
    startTime: 5890.17,
    person: 'Karol',
    text: ' I know plenty of engineers, plenty of developers that utilise LLMs to solve problems that they can comprehend, understand, and from different angles, assess the output.'
  },
  { startTime: 5900.43, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 5901.13,
    person: 'Karol',
    text: ' And if we do this with LLMs, with coding agents, beautiful.'
  },
  { startTime: 5907.65, person: 'Karol', text: ' Yes.' },
  {
    startTime: 5907.97,
    person: 'Karol',
    text: " We can really speed up, but that's containerised to a very small problem space."
  },
  {
    startTime: 5914.47,
    person: 'Karol',
    text: " But if we start throwing at them a problem space of a whole business domain, I don't know anybody who actually understands a whole business domain entirely."
  },
  {
    startTime: 5926.35,
    person: 'Karol',
    text: ' I know people that have either a high level comprehension of the business domain or partial low level comprehension of the business domain supported with some level of high level understanding, which means everybody has only a fragment of the puzzle.'
  },
  { startTime: 5945.85, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 5946.79,
    person: 'Karol',
    text: ' So a singular person will not be able to define the whole puzzle and feed it to the LLM.'
  },
  { startTime: 5952.27, person: 'Karol', text: " So it's a scale problem." },
  {
    startTime: 5953.75,
    person: 'Karol',
    text: " And I think if we're expecting to scale humans to the extent that they can specify, that's unrealistic expectation."
  },
  { startTime: 5962.11, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 5963.39,
    person: 'Swen',
    text: ' Like, see, even if we can make that work, right?'
  },
  {
    startTime: 5965.91,
    person: 'Swen',
    text: ' So you have all these people, like some have, like you have all these different people with different knowledge kind of iterating over a specification.'
  },
  {
    startTime: 5976.69,
    person: 'Swen',
    text: " Then there's a lot of legwork to do to actually define processes and methodologies to do that, which is exactly what is kind of like, what's coming up about this as well."
  },
  {
    startTime: 5986.55,
    person: 'Swen',
    text: " Like it's kind of like you can't just write a few text files and hope for the best."
  },
  {
    startTime: 5990.29,
    person: 'Swen',
    text: ' Like this is then, like this whole people process responsibility aspect is also completely missing from like completely ignored in the kind of like.'
  },
  { startTime: 6003.69, person: 'Swen', text: ' Accountability, responsibility.' },
  { startTime: 6005.37, person: 'Swen', text: ' Yes.' },
  { startTime: 6006.01, person: 'Swen', text: ' That was completely omitted.' },
  { startTime: 6008.17, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 6008.95,
    person: 'Swen',
    text: " So it's, and I can certainly like, as you said, I can certainly see this like working really well if you have a small problem that you can black box test and you can describe fully, right."
  },
  {
    startTime: 6022.93,
    person: 'Swen',
    text: " But it's like that, like how many in our domain, like in integration, I see some components that you could build that way, but like, then you'd still need to, you still need to iterate over them."
  },
  {
    startTime: 6039.79,
    person: 'Swen',
    text: ' Some sort of like, even if you kind of like create all these little black boxes, you need to figure out how they all work together.'
  },
  { startTime: 6045.17, person: 'Swen', text: ' Right.' },
  {
    startTime: 6045.37,
    person: 'Swen',
    text: " So there's also like, how do you roll it up into something bigger is still like an aspect that we need to."
  },
  { startTime: 6053.83, person: 'Swen', text: ' Absolutely.' },
  {
    startTime: 6054.45,
    person: 'Swen',
    text: ' That is kind of like still an architect and like a developer and software engineer.'
  },
  {
    startTime: 6060.25,
    person: 'Karol',
    text: " But just looking at our lovely integration domain, if I take a, let's say open API spec or async API spec and I, well, not take, I take an example of a payload and I want to create an async API or open API spec for this."
  },
  { startTime: 6082.49, person: 'Karol', text: ' No problem.' },
  {
    startTime: 6083.19,
    person: 'Karol',
    text: ' I just toss this into an LLM, build me a specification of that API based on this payload.'
  },
  {
    startTime: 6092.13,
    person: 'Karol',
    text: ' This is this and this, and I want to have it, these kinds of methods.'
  },
  {
    startTime: 6097.21,
    person: 'Karol',
    text: ' It will do a marvellous job with very few iterations, very few fixes.'
  },
  {
    startTime: 6103.19,
    person: 'Karol',
    text: ' I will have a working specification to put into an API portal or an event portal within a few minutes.'
  },
  { startTime: 6113.49, person: 'Karol', text: ' Not an issue.' },
  {
    startTime: 6114.97,
    person: 'Karol',
    text: " But then again, I'm an expert in integration and I know how to specify an open API spec or a RAML or a WSDL file or a async API spec to convey what I needed to convey."
  },
  {
    startTime: 6129.19,
    person: 'Karol',
    text: " So I will very quickly figure out what went wrong where, do a feedback loop with the LLM, ask it to fix these aspects and I'll get a really, really good spec in a very short time."
  },
  {
    startTime: 6141.69,
    person: 'Karol',
    text: ' Writing the same spec by hand would took me definitely way longer, but this is a very small problem domain, right?'
  },
  {
    startTime: 6150.01,
    person: 'Karol',
    text: ' And then writing the specification and tying back to the subtitle of our conversation is the specification, the new super skill.'
  },
  {
    startTime: 6160.37,
    person: 'Karol',
    text: " I think the specification part was always the super skill, but it's been always fragmented through different SMEs."
  },
  { startTime: 6169.61, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 6170.73,
    person: 'Karol',
    text: " And we have to train those skills to be able to specify things as precisely as possible with precise edge cases and be able to model what we're talking about."
  },
  {
    startTime: 6183.15,
    person: 'Karol',
    text: " But it's going to still be contained to specific abstraction layers and specific expertise, which is, I don't think it's going to be anytime replaceable by anything."
  },
  { startTime: 6196.41, person: 'Karol', text: ' I agree with that.' },
  { startTime: 6197.23, person: 'Karol', text: ' Absolutely.' },
  {
    startTime: 6198.79,
    person: 'Karol',
    text: ' So the super skill was there before AI, I think 20 years ago, 30 years ago, being able to specify things was still a super skill.'
  },
  { startTime: 6207.41, person: 'Karol', text: ' All the times is a super skill.' },
  {
    startTime: 6210.77,
    person: 'Karol',
    text: " I mean, looking at the, let's say Great Pyramids of Giza, somebody specified how to do that."
  },
  { startTime: 6217.89, person: 'Karol', text: ' That was a super skill.' },
  {
    startTime: 6219.27,
    person: 'Karol',
    text: ' We have an amazing monument, one of the wonders of the world, right?'
  },
  { startTime: 6223.77, person: 'Karol', text: ' Yeah.' },
  { startTime: 6224.63, person: 'Karol', text: ' Somebody had to specify how to build that.' },
  {
    startTime: 6226.35,
    person: 'Karol',
    text: " That's a super skill that somebody figured out how to build that very complex building."
  },
  { startTime: 6232.01, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 6232.25,
    person: 'Karol',
    text: ' And it was a long, long time ago before computers.'
  },
  { startTime: 6235.67, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 6236.15,
    person: 'Karol',
    text: " And now we're struggling with data, simple payload in JSON, and this is sometimes going over people's heads."
  },
  { startTime: 6245.89, person: 'Karol', text: ' Well, yeah, still superpower.' },
  {
    startTime: 6250.45,
    person: 'Karol',
    text: ' The question is, can we train people to actually be AI literate to expect something to have proper expectations from LLMs and Gen AI and agents, and to be able to specify more precisely and cut the problem domain into those small pieces that can be assessed properly within the bounds of their expertise.'
  },
  {
    startTime: 6277.79,
    person: 'Karol',
    text: ' And I think this is the problem that we should be looking at as an industry next to evolution of Gen AI.'
  },
  {
    startTime: 6286.73,
    person: 'Karol',
    text: ' Because I think the education needed to actually utilise this effectively is far, far behind than the actual development of any tools.'
  },
  { startTime: 6298.05, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 6299.09,
    person: 'Swen',
    text: " But the thing is, I'm still doubtful that it will be worth it, because that is a lot of effort."
  },
  {
    startTime: 6313.06,
    person: 'Karol',
    text: ' That may be, but the LLMs are not going anywhere.'
  },
  { startTime: 6316.5, person: 'Karol', text: " I think they're here to stay." },
  {
    startTime: 6317.94,
    person: 'Swen',
    text: " Yeah, the LLMs are there to stay, but it's the development process, like software development process."
  },
  {
    startTime: 6324.28,
    person: 'Swen',
    text: ' Is it going to be completely automated, like spec in, software out?'
  },
  {
    startTime: 6329.34,
    person: 'Swen',
    text: " Even if we can get to the point, it's like train everyone to work together as a unit to create specifications, which is essentially what you were getting at."
  },
  {
    startTime: 6338.94,
    person: 'Swen',
    text: ' You need to be very prescriptive with AI, so everyone needs to be trained to be prescriptive and contribute their domain knowledge into the bigger context to give the right instructions.'
  },
  { startTime: 6352.38, person: 'Karol', text: " No, I'm not saying that." },
  {
    startTime: 6356.7,
    person: 'Karol',
    text: " I'm saying that people should be AI literate, but not into the direction of, we need to work on them learning how to specify them to team up and build that specification together to build a very complex specification."
  },
  { startTime: 6371.66, person: 'Karol', text: " No, no, that's not what I'm saying." },
  {
    startTime: 6372.96,
    person: 'Karol',
    text: " I'm definitely not saying that should be the case."
  },
  {
    startTime: 6375.74,
    person: 'Karol',
    text: ' I think that we should educate people to be AI literate and to have proper expectations over the gen AI LLMs and agents with the fact to teach them to specify and clear cut very small problem domains that are actually accessible.'
  },
  {
    startTime: 6396.7,
    person: 'Karol',
    text: ' So they can specify as individuals to the agents, the problem domain, but the problem domain is comprehensible by a single person.'
  },
  {
    startTime: 6405.9,
    person: 'Karol',
    text: ' And then this kind of behaviour and this kind of method makes sense, but- Yeah, yeah, absolutely.'
  },
  { startTime: 6411.58, person: 'Swen', text: " Yeah, that's absolutely right." },
  { startTime: 6413.34, person: 'Swen', text: ' Yeah, I agree with that.' },
  { startTime: 6414.58, person: 'Swen', text: ' Sorry.' },
  {
    startTime: 6414.68,
    person: 'Karol',
    text: " Then we get agents that are specialised in specific small problem domains, and then we can actually gain that speed because it's feasible, it's comprehensible."
  },
  {
    startTime: 6424.06,
    person: 'Karol',
    text: ' A human being can assess that, and then we have that accountability and responsibility.'
  },
  {
    startTime: 6431.1,
    person: 'Karol',
    text: " Otherwise, if we start trying to define a really large specification for the LLM to handle, I think that's not feasible."
  },
  {
    startTime: 6438.78,
    person: 'Karol',
    text: " Even if it's a collaborative work over multiple experts specifying things into the same document."
  },
  {
    startTime: 6446.72,
    person: 'Karol',
    text: ' Not going to work just because we as human beings working on different problem domains will have semantic differences in how we express the problem domains.'
  },
  {
    startTime: 6459.2,
    person: 'Karol',
    text: ' And that put together in one document will already be in friction and not comprehensible from the perspective of that particular agent, whatever.'
  },
  { startTime: 6471.14, person: 'Swen', text: ' Yeah.' },
  {
    startTime: 6471.76,
    person: 'Karol',
    text: " To the extent, I just realised that I've been already doing this because I use Gemini."
  },
  {
    startTime: 6478.1,
    person: 'Karol',
    text: ' Gemini enables me to define gems, which are specialised chatbots.'
  },
  {
    startTime: 6484.46,
    person: 'Karol',
    text: " And I've been creating those micro chatbots with specific contexts to solve specific problems, like very, very specific problems, not even something big, not like write an article."
  },
  { startTime: 6497.28, person: 'Karol', text: ' No, no, no.' },
  { startTime: 6498.16, person: 'Karol', text: ' Write a part of something.' },
  { startTime: 6500.64, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 6501.46,
    person: 'Karol',
    text: " That is, for me, it's a repeatable process and I don't need it to be very refined."
  },
  { startTime: 6505.68, person: 'Karol', text: ' I just need a draft, for example.' },
  { startTime: 6508.7, person: 'Karol', text: ' Yeah, exactly.' },
  { startTime: 6509.32, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 6509.72,
    person: 'Karol',
    text: ' I have an agent, well, agent, an agentic, not agentic, there is no agency.'
  },
  {
    startTime: 6516.58,
    person: 'Karol',
    text: ' I have a chatbot, LLM chatbot to teach me Dutch, right?'
  },
  { startTime: 6519.74, person: 'Karol', text: ' To just spar on Dutch.' },
  { startTime: 6521, person: 'Karol', text: " And it's 80% of times correct." },
  {
    startTime: 6524.64,
    person: 'Karol',
    text: " I catch myself having A2 level of Dutch that it's wrong at times."
  },
  {
    startTime: 6529.42,
    person: 'Karol',
    text: " And I just Google it and it's, oh yeah, that makes sense that it's wrong."
  },
  { startTime: 6533.7, person: 'Karol', text: ' It misinterpreted something again, right?' },
  { startTime: 6536.36, person: 'Karol', text: " It's a semi-specialised agent." },
  {
    startTime: 6540.66,
    person: 'Karol',
    text: " I put definitely too big of a problem domain into it with too little context because I'm incapable of building that context myself because I don't know Dutch."
  },
  {
    startTime: 6550.88,
    person: 'Karol',
    text: ' So how am I supposed to build context for a chatbot to understand Dutch and teach me Dutch?'
  },
  {
    startTime: 6556.68,
    person: 'Karol',
    text: " That's a mute point, but it's a progressive learning because I supply that chatbot with information of what I know, and then it sources from whatever model it has and whatever the training data it has, and it builds up on top of what I know and gives me more and more and more."
  },
  {
    startTime: 6576.6,
    person: 'Karol',
    text: ' And this is like a natural kind of way of learning because we know something, we start understanding something next, and we start learning something next and next and next, and then we have comprehension of the topic.'
  },
  { startTime: 6587.1, person: 'Karol', text: ' And that works for me.' },
  {
    startTime: 6588.96,
    person: 'Karol',
    text: ' Will that work on a specific business problem domain?'
  },
  {
    startTime: 6592.1,
    person: 'Karol',
    text: " Most likely not, because that's a completely different way of working with it."
  },
  {
    startTime: 6596.92,
    person: 'Karol',
    text: ' You have to have all the information up front, as much information up front as possible to be able to specify anything.'
  },
  {
    startTime: 6604.76,
    person: 'Karol',
    text: " Otherwise, if we're using Kinefin, you're somewhere in the complex or chaos domain, and then it will be definitely problematic to do so, right?"
  },
  {
    startTime: 6621.3,
    person: 'Karol',
    text: " So, if we're looking at specification, specification being the superpower, yes, superpower in very small, narrow problem domains, if somebody is able to clear-cut the small problem domain and fix that agent into that small domain, I think this will work."
  },
  { startTime: 6639.12, person: 'Swen', text: ' Yeah, yeah.' },
  { startTime: 6641.74, person: 'Karol', text: ' But will it work for everybody?' },
  { startTime: 6644.46, person: 'Karol', text: ' No.' },
  { startTime: 6645.02, person: 'Karol', text: ' Will it work for coders?' },
  { startTime: 6647.62, person: 'Karol', text: ' Probably not.' },
  {
    startTime: 6648.46,
    person: 'Karol',
    text: ' But if a software engineer will be able to specify that problem domain and give that tool to coders or software developers, jumping an abstraction level higher, that probably might work, but still contain small problem domain.'
  },
  {
    startTime: 6664.1,
    person: 'Karol',
    text: ' Will that work for architecture, software architecture?'
  },
  { startTime: 6666.86, person: 'Karol', text: " I'm guessing not really." },
  { startTime: 6668.42, person: 'Swen', text: " Yeah, then that's a headache." },
  {
    startTime: 6671.58,
    person: 'Swen',
    text: " Yeah, where it's kind of like, that was a headache."
  },
  {
    startTime: 6675.76,
    person: 'Swen',
    text: " It's like, this is like, you need to look, you can't make sweeping assumptions there."
  },
  {
    startTime: 6683.57,
    person: 'Swen',
    text: ' Like, this is like, you really need to, and as an industry, I think this is also the right way to start doing this, right?'
  },
  {
    startTime: 6689.39,
    person: 'Swen',
    text: " Like, start with small bits and see how far this concept takes you, and then also see where it's starting to break when the bite, when it gets, you know, when the size of the problem becomes too big, we'll need to learn that."
  },
  {
    startTime: 6702.97,
    person: 'Swen',
    text: " Like when, where does, where does this, like, it's all like, it is an abstraction that we're building, right?"
  },
  { startTime: 6708.49, person: 'Swen', text: ' So abstractions at some stage break.' },
  { startTime: 6710.73, person: 'Swen', text: ' And where does this one break?' },
  { startTime: 6712.97, person: 'Swen', text: ' Is the question.' },
  {
    startTime: 6715.07,
    person: 'Karol',
    text: " And I think given the time, and I know you're tied up for time, I think we can end it with a quote of Gaal's Law."
  },
  { startTime: 6726.37, person: 'Karol', text: " You know Gaal's Law?" },
  {
    startTime: 6730.32,
    person: 'Swen',
    text: " You, this is like, like listening to the radio, I know the song, but I don't know who That's fine."
  },
  {
    startTime: 6736.16,
    person: 'Karol',
    text: ' Usually when I quote these laws, people are like, well, when I tell the name of the law, people are like oblivious.'
  },
  {
    startTime: 6742.06,
    person: 'Karol',
    text: " But then when I say it, they're like, oh yeah, all right, I know that."
  },
  {
    startTime: 6745.64,
    person: 'Karol',
    text: " So I think Gaal's Law is very, very adequate to the problem."
  },
  {
    startTime: 6751.86,
    person: 'Karol',
    text: " And it's, it states, complex systems that work, inevitably evolve from simpler systems that worked."
  },
  {
    startTime: 6760.86,
    person: 'Karol',
    text: ' While complex systems designed from scratch never work and must be rebuilt from simple functional core.'
  },
  { startTime: 6768.52, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 6768.74,
    person: 'Karol',
    text: ' And I think at this point in the industry, people are trying to jump and build really big complex systems without starting small with something that is actually working.'
  },
  {
    startTime: 6783.8,
    person: 'Karol',
    text: " And that's why this will not work in that way that people."
  },
  { startTime: 6789.1, person: 'Swen', text: ' Yeah, absolutely.' },
  {
    startTime: 6791.4,
    person: 'Swen',
    text: " And then it's like, yeah, you need just, yeah, that, that, that makes absolute sense."
  },
  { startTime: 6797.18, person: 'Swen', text: ' Yeah.' },
  { startTime: 6799.44, person: 'Karol', text: ' All right.' },
  { startTime: 6800.98, person: 'Karol', text: ' In that case, any parting words?' },
  {
    startTime: 6805.12,
    person: 'Swen',
    text: " I'm actually quite impressed because I thought we may like, we may like be cutting it close given how long these sessions usually go."
  },
  {
    startTime: 6813.7,
    person: 'Swen',
    text: " But I look at like what my notes are, like we've covered quite a good amount of like, there's good few things that we went through and it's been pretty thought provoking as well."
  },
  {
    startTime: 6827.82,
    person: 'Swen',
    text: " Like it's, I hope it was useful for watchers, listeners as well."
  },
  {
    startTime: 6831.82,
    person: 'Swen',
    text: ' Like it was very thought provoking and eye opening for me in certain aspects.'
  },
  { startTime: 6836.46, person: 'Swen', text: " So that's super cool." },
  { startTime: 6837.66, person: 'Karol', text: ' I do hope as well.' },
  {
    startTime: 6839.24,
    person: 'Karol',
    text: ' I mean, I kept track of your notes because you shared them with me.'
  },
  {
    startTime: 6842.62,
    person: 'Karol',
    text: ' So I went through them and tried to touch upon everything.'
  },
  {
    startTime: 6846.1,
    person: 'Karol',
    text: " So hopefully that's, I think we actually touched on everything."
  },
  { startTime: 6850.38, person: 'Karol', text: " So that's very nice." },
  {
    startTime: 6851.72,
    person: 'Karol',
    text: " It's been a pleasure talking to you and before we part some small advertisements."
  },
  {
    startTime: 6860.1,
    person: 'Karol',
    text: " So next week we're having an absolutely amazing session."
  },
  {
    startTime: 6866.04,
    person: 'Karol',
    text: " We're going to be diving deep into the topic of coupling and now combined with domain driven design."
  },
  {
    startTime: 6873.12,
    person: 'Karol',
    text: ' And the guest next week is no other than the author of balancing coupling in software design.'
  },
  { startTime: 6880.94, person: 'Karol', text: ' So Vlad Kononov.' },
  {
    startTime: 6883.26,
    person: 'Karol',
    text: " Now the interesting part is that Vlad in his trainings at O'Reilly, he usually either does the training on coupling or on domain driven design."
  },
  { startTime: 6891.46, person: 'Karol', text: ' And he refrains himself from mixing the two.' },
  {
    startTime: 6895.48,
    person: 'Karol',
    text: ' He always kind of goes there anyways, but he refrains from that.'
  },
  {
    startTime: 6900.44,
    person: 'Karol',
    text: " So I chatted with Vlad and I told him, hey, maybe let's do a session where we actually combine coupling and domain driven design."
  },
  { startTime: 6907.28, person: 'Karol', text: ' That should be probably quite fun.' },
  { startTime: 6909.2, person: 'Karol', text: ' And he said, yeah, sure.' },
  { startTime: 6910.68, person: 'Karol', text: " So next week we're having that." },
  {
    startTime: 6913.58,
    person: 'Karol',
    text: " And in the meantime, while we're here, if you want to know about the upcoming events, not only the live streams, but also workshops, conferences that we're going to be attending as in me and my colleagues from Breaching the Gap."
  },
  {
    startTime: 6931,
    person: 'Karol',
    text: ' Please go to the first QR code, which is the upcoming events from our project.'
  },
  {
    startTime: 6938.36,
    person: 'Karol',
    text: " Then we're actually having a training at DDD Academy as strategic integration design with DDD."
  },
  {
    startTime: 6945.2,
    person: 'Karol',
    text: " So we're going through the core topics of Breaching the Gap, which is integration architecture."
  },
  {
    startTime: 6950.42,
    person: 'Karol',
    text: " And we're applying DDD principles and patterns to it to create better designs."
  },
  {
    startTime: 6957.92,
    person: 'Karol',
    text: " And of course, if you're new to the stream, if you haven't done that yet, scan the QR code, the last one to the right and subscribe to the YouTube channel."
  },
  {
    startTime: 6966.68,
    person: 'Karol',
    text: " You'll get all the notifications about all the live streams and YouTube shorts that we're slowly getting into and potentially other video content that will be somewhere there in the near future."
  },
  { startTime: 6981.22, person: 'Karol', text: ' All right.' },
  { startTime: 6982.02, person: 'Karol', text: " That's enough in terms of advertisement." },
  { startTime: 6985.58, person: 'Karol', text: ' Swen, thank you so much for the stream.' },
  {
    startTime: 6989.1,
    person: 'Karol',
    text: ' That was a really interesting conversation, thought-provoking, definitely.'
  },
  { startTime: 6993.76, person: 'Karol', text: ' I enjoyed myself very much.' },
  {
    startTime: 6997.24,
    person: 'Karol',
    text: " Hopefully, it will be of use to the audience as well, and we'll see what happens."
  },
  { startTime: 7002.74, person: 'Swen', text: ' All right.' },
  { startTime: 7003.12, person: 'Swen', text: ' Thanks for having me.' },
  { startTime: 7003.92, person: 'Swen', text: ' Good stuff.' },
  { startTime: 7004.78, person: 'Swen', text: ' You have a great evening.' },
  { startTime: 7006.38, person: 'Karol', text: ' All right.' },
  { startTime: 7006.84, person: 'Karol', text: ' Good night, everybody.' }
])
</script>

<style scoped></style>
