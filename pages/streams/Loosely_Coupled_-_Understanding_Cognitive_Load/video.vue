<template>
  <div class="w-full">
    <StreamLayout
      :transcript="transcript"
      name="Loosely Coupled - Understanding Cognitive Load"
      video-id="GWESP6WGRAU"
    />
  </div>
</template>

<script lang="ts" setup>
const transcript = ref([
  {
    startTime: 79.82,
    person: 'Karol',
    text: ' Good morning, good afternoon, and good evening, everybody.'
  },
  {
    startTime: 83.56,
    person: 'Karol',
    text: " My name is Karol Skrzymowski, and I'm your host today for another episode of Loosely Coupled livestream by Bridging the Gap."
  },
  {
    startTime: 91.04,
    person: 'Karol',
    text: " Today, I hope you have some nice beverage and a little bit of a clear mind after days of work, or if you're watching this midday, hope you have a slow day today so we can dive into the topic of cognitive load, and we're going to be having a conversation about how cognitive load influences our work as IT teams."
  },
  { startTime: 116.6, person: 'Karol', text: " I think that's something worth exploring." },
  {
    startTime: 120.14,
    person: 'Karol',
    text: " Joining me today is Aleix Morgadas, who is an engineering strategy consultant and ex-CPTO at Temperature, and Aleix has more than ten years of experience in tech and specialises in engineering strategy with domain-driven design, team topologies, and worldly mapping, which I have no idea what that is, but I'm certainly going to ask Aleix later about that."
  },
  {
    startTime: 145.68,
    person: 'Karol',
    text: " So, he's been sharing his real-world experiences on his personal blog on Substack, and at conferences, and now he's joining us today to chat about cognitive load."
  },
  { startTime: 159.62, person: 'Karol', text: ' Hello, Aleix.' },
  { startTime: 160.86, person: 'Karol', text: ' Hey there.' },
  { startTime: 161.8, person: 'Karol', text: ' Thank you for inviting me.' },
  { startTime: 163.76, person: 'Karol', text: ' Happy to have you here.' },
  {
    startTime: 165.74,
    person: 'Karol',
    text: " So, cognitive load, that's a broad topic, I suppose?"
  },
  { startTime: 171.06, person: 'Aleix', text: ' Yes, it is.' },
  {
    startTime: 172.64,
    person: 'Aleix',
    text: ' Depending to who you ask, it will be very different responses, so looking forward to debate about this.'
  },
  {
    startTime: 179.2,
    person: 'Karol',
    text: " All right, Aleix, let's start off with you telling us something about where you're coming from, what you're doing, and why cognitive load?"
  },
  { startTime: 189.84, person: 'Karol', text: ' Why team topologies and all those things?' },
  {
    startTime: 194.02,
    person: 'Aleix',
    text: ' So, what I do or have been doing for the last years is, of course, I started as a software engineer.'
  },
  {
    startTime: 198.94,
    person: 'Aleix',
    text: ' I have a computer science degree or a background, so I have been developing for a lot of years, and at some point, I decided to start in management because of two reasons.'
  },
  {
    startTime: 209.22,
    person: 'Aleix',
    text: " One is, in order to influence how the organisation works, usually, you need to be in the room where decisions happen, and often, that's a room that was at least on the company I was in for managers."
  },
  {
    startTime: 221.96,
    person: 'Aleix',
    text: ' So, I was interested in more like, okay, how things happen and how we can influence where ideas originate instead of being buried in the end of the delivery process.'
  },
  { startTime: 231.6, person: 'Aleix', text: ' So, that is kind' },
  {
    startTime: 232.58,
    person: 'Aleix',
    text: ' of my intrinsic motivation, and that decision about being more involved in the beginning,'
  },
  {
    startTime: 239.62,
    person: 'Aleix',
    text: ' it meant that I had to learn about product, about business, about a lot of disciplines that were not'
  },
  {
    startTime: 244.8,
    person: 'Aleix',
    text: ' mine, and one of them was strategy, about how we can make better decisions with the limited'
  },
  {
    startTime: 250.5,
    person: 'Aleix',
    text: " information, and that's kind of how everything started, and at some point, I just had to start"
  },
  {
    startTime: 256.38,
    person: 'Aleix',
    text: " sharing my learnings because I thought that, okay, maybe it's only me, so I started sharing some of"
  },
  {
    startTime: 260.7,
    person: 'Aleix',
    text: ' those, and some people got interested, so that kept me motivated to keep sharing, and I guess by'
  },
  {
    startTime: 267.74,
    person: 'Aleix',
    text: ' sharing, I learned way more than by doing because usually, you have to think about, oh, I understand'
  },
  { startTime: 272.48, person: 'Aleix', text: ' this.' },
  {
    startTime: 273.26,
    person: 'Aleix',
    text: " You try to put that on a post, and you're like, okay, I don't understand this completely, so you need to push yourself to learn more and more about things, and, yes, that's a little about myself."
  },
  {
    startTime: 285.02,
    person: 'Karol',
    text: ' I mean, I definitely shared the teaching-learning mindset.'
  },
  {
    startTime: 290.14,
    person: 'Karol',
    text: ' I found myself that I learn a lot more by teaching others in my specific field of application integration, especially with my ADHD chaos in my brain.'
  },
  {
    startTime: 301.84,
    person: 'Karol',
    text: " I know I have the knowledge, and I can use it, but the moment I need to teach it, it basically is brought to structure, and then I realise, like, oh, I don't know this."
  },
  { startTime: 314.28, person: 'Karol', text: ' I need to fill the gap.' },
  { startTime: 316.08, person: 'Karol', text: ' I need to find the answers.' },
  {
    startTime: 317.68,
    person: 'Karol',
    text: " I need to put more into there, so do research, because I cannot teach that because I don't know this aspect of my work."
  },
  { startTime: 324.9, person: 'Karol', text: " Oh, that's interesting." },
  {
    startTime: 326.5,
    person: 'Karol',
    text: " And that's because we're, through experience, we're basically exposed to a limited number of factors, not the whole thing that is a field that we work in, and that's also very interesting that, in IT, we stumble into other fields like psychology, which is exactly where cognitive load originates from, right?"
  },
  {
    startTime: 347.92,
    person: 'Aleix',
    text: " That's correct, and, indeed, we sometimes use those concepts."
  },
  {
    startTime: 353.14,
    person: 'Aleix',
    text: " It's true that we are not psychologists, and sometimes we overuse those, and we shouldn't in some cases, but at the same time, we found them useful for driving actions or driving improvements, right?"
  },
  {
    startTime: 365.28,
    person: 'Aleix',
    text: " So, at the end, it's like, hey, maybe we're not 100 per cent accurate based on the"
  },
  {
    startTime: 368.88,
    person: 'Aleix',
    text: " psychology theory, but at the same time, we're like, okay, we're understanding where it comes"
  },
  {
    startTime: 373.46,
    person: 'Aleix',
    text: " from, and then putting in a way that is actionable, that's really where it can help us"
  },
  {
    startTime: 380.52,
    person: 'Aleix',
    text: ' to make this happen, and you mentioned where this everything comes from, and you mentioned'
  },
  {
    startTime: 384.82,
    person: 'Aleix',
    text: " team topologies, and it's true that team topologies influenced me a lot."
  },
  {
    startTime: 389.1,
    person: 'Aleix',
    text: ' Indeed, I have been sharing a lot about team topologies and how it helped, not only in cognitive load.'
  },
  { startTime: 394.2, person: 'Aleix', text: ' I think cognitive load played a role.' },
  {
    startTime: 396.2,
    person: 'Aleix',
    text: ' Today, we will talk about it, but I guess that what it helped me,'
  },
  {
    startTime: 399.98,
    person: 'Aleix',
    text: ' what I liked back then in 2020 when I started reading and trying to apply some of the concepts'
  },
  {
    startTime: 405.2,
    person: 'Aleix',
    text: ' is that this is your main approach, but also that it was very different to other books I read'
  },
  {
    startTime: 410.46,
    person: 'Aleix',
    text: ' before trying to apply which is very US-centric, and I found a book which is more European value'
  },
  {
    startTime: 416.9,
    person: 'Aleix',
    text: ' centric, and I like because the authors are from the UK, from Portugal, so the good thing is that,'
  },
  {
    startTime: 421.9,
    person: 'Aleix',
    text: ' okay, this is another kind of vision I felt more related to the approach that they were describing,'
  },
  {
    startTime: 426.42,
    person: 'Aleix',
    text: ' and one of them were how you apply cognitive load to understand that if the team is exceeding'
  },
  {
    startTime: 433.46,
    person: 'Aleix',
    text: ' their capacity, and how you can use that as a data or information to make your decision making more'
  },
  {
    startTime: 441.58,
    person: 'Aleix',
    text: " taking the humans into account, but sometimes, we forget that we are all like it's about people,"
  },
  { startTime: 446.08, person: 'Aleix', text: ' right?' },
  {
    startTime: 446.78,
    person: 'Aleix',
    text: " So, that's the moment when I realised, okay, this is interesting."
  },
  {
    startTime: 452.18,
    person: 'Aleix',
    text: ' Let me bring this because we focus way too much on systems, and it was missing the human point in the equation about socio-technical system at the end, right?'
  },
  {
    startTime: 461.32,
    person: 'Aleix',
    text: ' So, a lot of things together that are connected on how you add more points of view, or it helps you to shape better your decision making at the end.'
  },
  { startTime: 473.42, person: 'Karol', text: ' Yes, that is very true.' },
  {
    startTime: 475.56,
    person: 'Karol',
    text: " I find it that we as humans, we have a tendency to oversimplify things, and that's the modelling tendency of model everything."
  },
  {
    startTime: 485.94,
    person: 'Karol',
    text: ' We do it subconsciously, basically, because we need a simplistic version of life to exist and cope with it.'
  },
  {
    startTime: 496.06,
    person: 'Karol',
    text: ' If you would understand everything, that would be definitely too much of a load on our brains to comprehend and be able to work with, so we simplify things, and then we have biases, and then we have problems of all sorts of manners, including also understanding how people actually work in different environments, which is, again, something we will be touching upon today.'
  },
  {
    startTime: 521.86,
    person: 'Karol',
    text: ' And I find it also baffling at times that in this lovely day and age of generative AI, and all those lovely co-pilot improvements, generative code, architecture as code, etcétera, a lot of companies are striving for speeding up, like drastically speeding up delivery and processes, and I think they forget often about that human component.'
  },
  {
    startTime: 550.84,
    person: 'Karol',
    text: " I often saw posts online on various media about the 10x developer, and that doesn't mean what it originally meant."
  },
  {
    startTime: 559.98,
    person: 'Karol',
    text: " It meant, like, we're going to limit the number of people in our organisation because now we have AI, so our developers can actually deliver ten times faster, which is probably measurably not true, in essence, but that also ties into the velocity of a team and the capacity to deliver, capacity to process information, etcétera, right?"
  },
  {
    startTime: 586.1,
    person: 'Aleix',
    text: " There is, you mentioned already, we went already on AI thing, and I will be honest, I don't have enough data to make claims on anything."
  },
  {
    startTime: 596,
    person: 'Aleix',
    text: " At the end, it's like, since we see things, tendencies, or other claims or expectations on how this will work."
  },
  {
    startTime: 603.16,
    person: 'Aleix',
    text: " So, based on my limited exposure to this, because I'm not having all the data for all the companies, I'm sure that big companies trade different to small companies, but seeing things like, if you are a smaller company, you do more things, therefore, you have a lot of context switching that is adding new content."
  },
  {
    startTime: 620.8,
    person: 'Aleix',
    text: " It's true that maybe the AI helps you to have more nuances in something, but before, maybe take you two hours to do something, maybe now take you one hour, but the context switching between topics, for example, I'm doing a web page on this, meanwhile, I'm doing a blog post, meanwhile, I'm doing a, preparing a talk, right?"
  },
  {
    startTime: 640.58,
    person: 'Aleix',
    text: ' So, it is like, now you have three contexts, maybe the AI is helping you a little on each of them, but now you have more content in your mind.'
  },
  {
    startTime: 648.26,
    person: 'Aleix',
    text: ' So, in terms of cognitive load, you have way more because of the context switching.'
  },
  {
    startTime: 655.16,
    person: 'Aleix',
    text: ' But now we just imagine that we only focus on, you are only a developer, you need to do more things.'
  },
  {
    startTime: 660.56,
    person: 'Aleix',
    text: " Before, we were, all the industry were moving from big PRs to smaller steps to small increments, and sometimes I see a backward step, because now it's easier to create more code with less time, now I see way more bigger PRs, I'm like, are we repeating the same mistakes again?"
  },
  { startTime: 682.14, person: 'Aleix', text: " And then it's like, how do you review this?" },
  {
    startTime: 684.82,
    person: 'Aleix',
    text: ' It will be an AI reviewing it, or it will be a human now, instead of reading 20 lines of code to understand the change, now it needs to read 200 or 1,000 lines of code for the change.'
  },
  {
    startTime: 695.16,
    person: 'Aleix',
    text: " And that's now, again, more cognitive load, because now you need to understand the change."
  },
  {
    startTime: 699.04,
    person: 'Aleix',
    text: " And the problem is, when you ask the person about, why is this, because the person didn't write it, it is like we're missing communication, because now we have three parties, at least, it's like me and you, and us and the AI."
  },
  {
    startTime: 715.36,
    person: 'Aleix',
    text: " And in terms of, I don't remember right now this image that this is about the connections, if you have two people, now you have one line of communication, you have three, you have the explosive communication."
  },
  {
    startTime: 727.24,
    person: 'Aleix',
    text: " So just imagine a team of five, that each of us is using AI, so now it's like, it's not five of us, it's 10 of us."
  },
  {
    startTime: 734.94,
    person: 'Aleix',
    text: " There's 10 people, 10 agents, all of us following information and not sharing all the information."
  },
  {
    startTime: 740.78,
    person: 'Aleix',
    text: ' It is even worse in terms of the explosion of things that are happening on each team.'
  },
  {
    startTime: 745.98,
    person: 'Aleix',
    text: " So I'm not sure, or at least my intuition says, we will go slower, because as humans, we cannot process this amount of information."
  },
  {
    startTime: 755.96,
    person: 'Aleix',
    text: ' If we need to, you can believe the code, but at the end, the system will tell if it works or not.'
  },
  {
    startTime: 761.72,
    person: 'Aleix',
    text: " And usually, we're still working in a deterministic world."
  },
  {
    startTime: 766.36,
    person: 'Aleix',
    text: ' And that deterministic, it means test, it means specific things.'
  },
  {
    startTime: 771.94,
    person: 'Aleix',
    text: " And I'm still to see, the more code you have, the more variables you will have in the prompt or in the tokens or whatever it's in the input, and the more context window, the more variability on the output, and so on and so forth."
  },
  { startTime: 788.26, person: 'Aleix', text: ' And I will close here, which is the models.' },
  {
    startTime: 794.18,
    person: 'Aleix',
    text: ' So the people, we pay per input token and per output token.'
  },
  {
    startTime: 798.68,
    person: 'Aleix',
    text: " So sometimes I'm thinking, these people have the intention or the incentive to give you more code, because the more code they produce, the more they charge you."
  },
  {
    startTime: 810.54,
    person: 'Aleix',
    text: " So sometimes I'm like, hey, they want to give you duplication of code, or not having the right distractions, because they will be able to charge you more per prompt."
  },
  {
    startTime: 821.54,
    person: 'Aleix',
    text: " So at some point, I'm like, I don't know if we have the right incentives."
  },
  { startTime: 824.94, person: 'Karol', text: " Yeah, that's evil." },
  { startTime: 825.94, person: 'Karol', text: " That's kind of evil." },
  {
    startTime: 827.26,
    person: 'Aleix',
    text: " I'm not saying they do this, but the incentive is there, right?"
  },
  { startTime: 831.86, person: 'Karol', text: ' True.' },
  {
    startTime: 833.06,
    person: 'Karol',
    text: " It's like with certifications with different companies, right?"
  },
  {
    startTime: 839.46,
    person: 'Karol',
    text: " I've seen somebody post some time ago that we were passing, the person was passing some sort of AWS certification."
  },
  {
    startTime: 850.04,
    person: 'Karol',
    text: ' And that person actually had robust experience with AWS and cloud computing.'
  },
  {
    startTime: 855.64,
    person: 'Karol',
    text: ' And they were asking about a specific use case, what components would that person use to build it?'
  },
  {
    startTime: 865.84,
    person: 'Karol',
    text: ' And he, because I was a guy, he answered truthfully to his experience, because he knew which components would be the easiest to implement and least cost and the most manageable for this particular use case.'
  },
  {
    startTime: 881.42,
    person: 'Karol',
    text: ' Of course, the answer was wrong, because the test was not testing the knowledge about cloud computing, but it was testing how you conform to the marketing of the particular cloud platform, right?'
  },
  {
    startTime: 896.6,
    person: 'Karol',
    text: " So there's always this risk that we're not only introducing more context and more load onto us and teams, but it's also risk of introducing a lot more bias in the process."
  },
  { startTime: 911.38, person: 'Karol', text: " That's true." },
  {
    startTime: 912.58,
    person: 'Aleix',
    text: " Bias that is you don't know where it comes from, and it can change, because if the model changed tomorrow, maybe it comes with another assumptions about topics."
  },
  {
    startTime: 923.2,
    person: 'Aleix',
    text: ' And I mean, I come with an automated design background as well.'
  },
  {
    startTime: 927.84,
    person: 'Aleix',
    text: ' And what happens is like, hey, the language is super important.'
  },
  {
    startTime: 932.16,
    person: 'Aleix',
    text: " And delegating the language to the LLM is like, be careful, because you're delegating the ubiquitous language to be defined by the external."
  },
  {
    startTime: 939.54,
    person: 'Aleix',
    text: ' And there is one thing about human design, which is the core domain is unknown.'
  },
  { startTime: 944.04, person: 'Aleix', text: ' You need to discover, you need to define it.' },
  {
    startTime: 946.12,
    person: 'Aleix',
    text: " And LLMs are trained on known data, which by definition means supportive or generic subdomain, which means you don't get money on this, because it's already done."
  },
  {
    startTime: 956.18,
    person: 'Aleix',
    text: " So what it can produce the LLM, it's known area, which therefore cannot be core."
  },
  {
    startTime: 962.16,
    person: 'Aleix',
    text: ' So we are using LLMs to create core domains, using...'
  },
  {
    startTime: 967.08,
    person: 'Aleix',
    text: ' And it will produce known subdomains, it will not be able to give you the space.'
  },
  {
    startTime: 972.24,
    person: 'Aleix',
    text: ' And that is still how you can collaborate with domain experts, and how you deal with users.'
  },
  {
    startTime: 978.44,
    person: 'Aleix',
    text: ' And of course, you can use AI to summarise some calls.'
  },
  {
    startTime: 983.52,
    person: 'Aleix',
    text: ' Yes, you can use it, but be careful on delegating thinking and critical thinking to LLM, because it will give you, it will move from how you need to trade uncertainty and learn and feel and iterate into, hey, this sense of, oh, clarity, because it will tell you what you need to know.'
  },
  { startTime: 1004.6, person: 'Aleix', text: ' So it is always, just be careful.' },
  {
    startTime: 1007.24,
    person: 'Karol',
    text: " Or tell you what you want to hear, because they're trained to be helpful and not critical, for example."
  },
  {
    startTime: 1014,
    person: 'Karol',
    text: " And that's another level of cognitive load that we're getting into, because we need to check the outputs all the time."
  },
  {
    startTime: 1021.84,
    person: 'Karol',
    text: ' If I use a generative AI for any number of purposes, without putting in my content, whatever that company may be, transcript or text, written text, whatever, and I try to work it in my specific field, most content in enterprise application integration is content that is paywalled.'
  },
  {
    startTime: 1046.9,
    person: 'Karol',
    text: ' AI has no access to sources that would be credible, which means that it hallucinates instantly, and I have to check every single output, which, again, increases the amount of work I have to have every single time.'
  },
  {
    startTime: 1064.3,
    person: 'Aleix',
    text: ' Let me do one step back, because I want to do some concepts, because cognitive load, we can get into the details about the difference between cognitive load that influences us.'
  },
  { startTime: 1079.94, person: 'Aleix', text: ' And I will give you now the argument,' },
  {
    startTime: 1081.8,
    person: 'Aleix',
    text: ' and now I will give the explanation, because one thing is true is that maybe you have cognitive'
  },
  {
    startTime: 1085.52,
    person: 'Aleix',
    text: " load about interactions with people, and you can heavily reduce that by, I don't want to"
  },
  {
    startTime: 1091.74,
    person: 'Aleix',
    text: " have a conflict with you, I don't want to make all the effort to talk with different departments,"
  },
  {
    startTime: 1096.98,
    person: 'Aleix',
    text: ' and that is sometimes unpleasant, like, oh, I need to go through the same topic three times.'
  },
  { startTime: 1102.02, person: 'Aleix', text: ' Okay, let me talk only to the LLM.' },
  {
    startTime: 1105.02,
    person: 'Aleix',
    text: ' Of course, here, there is a reduce of cognitive load.'
  },
  {
    startTime: 1107.94,
    person: 'Aleix',
    text: ' The question is, like, maybe that was needed, and now we are losing soft skills, because instead of having conflict, now I can avoid it and delegate that to LLM, and that can be a possibility.'
  },
  {
    startTime: 1121.48,
    person: 'Aleix',
    text: ' But I say that is because cognitive load, or at least how we learn it, was thanks, was thanks to team topologies, and what happens when you get into team topologies and cognitive load is that you rapidly find a wall, which is what is intrinsic, what is extrinsic, and what is germane.'
  },
  {
    startTime: 1141.08,
    person: 'Aleix',
    text: " And each of them, we can say that germane is about the domain complexity, the inner thing that you want to solve, and then you have extrinsic, which is about the environment you're in, the tooling, and, for example, how to make things work, like CI, CT, things like this, and intrinsic can be seen as a code."
  },
  {
    startTime: 1156.9,
    person: 'Aleix',
    text: " That's at least, if I remember correctly, how the code, the book says."
  },
  {
    startTime: 1161.66,
    person: 'Karol',
    text: ' And then each of those examples could be a different type of load for a different person in the organisation.'
  },
  { startTime: 1168.38, person: 'Aleix', text: " That's right." },
  {
    startTime: 1169.34,
    person: 'Aleix',
    text: " The thing is that then you move into, at least, I want to be specific, I move into this book, which is cognitive theory, you read it, and you say, like, ah, it's hard to apply in a real world."
  },
  { startTime: 1180.56, person: 'Aleix', text: " It's true." },
  { startTime: 1181.26, person: 'Aleix', text: " It's very hard." },
  { startTime: 1182.2, person: 'Aleix', text: ' And I am not able to fully analyse the impact.' },
  {
    startTime: 1186.92,
    person: 'Aleix',
    text: " So, usually, what it moves from is, like, I cannot use cognitive load per se, I use a proxy thing, which is developer's pain, or developer experience, which is a good kind of touching the same things, but not in the same way."
  },
  {
    startTime: 1201.58,
    person: 'Aleix',
    text: " And developer pain can be, okay, we don't understand the problem, we don't understand how to communicate with other teams, we don't know the responsibilities."
  },
  {
    startTime: 1210.68,
    person: 'Aleix',
    text: " So, there is a lot of things that can influence the cognitive load at the end, because when you ask a developer, how is your load, they can say, it's a lot."
  },
  {
    startTime: 1222.56,
    person: 'Aleix',
    text: ' They know it, they feel it, or it can be super low.'
  },
  {
    startTime: 1226.34,
    person: 'Aleix',
    text: " But then you realise one thing, which is, if you ask a person why it's high, it's like, oh, it's because I need to give five talks in one month."
  },
  {
    startTime: 1234.38,
    person: 'Aleix',
    text: ' Of course, let me help you reducing your cognitive load.'
  },
  {
    startTime: 1236.88,
    person: 'Aleix',
    text: ' Let me reduce the amount of talks you give per month to one.'
  },
  { startTime: 1240.22, person: 'Aleix', text: " It's like, no, no, no, because I like it." },
  {
    startTime: 1243.44,
    person: 'Aleix',
    text: " So, it is good cognitive load, because it's what they like to have."
  },
  {
    startTime: 1247.46,
    person: 'Aleix',
    text: " At the same time, it was talking to another developer, okay, what's your cognitive load?"
  },
  { startTime: 1250.72, person: 'Aleix', text: " Oh, it's very low." },
  { startTime: 1251.84, person: 'Aleix', text: " Then it's good." },
  {
    startTime: 1252.38,
    person: 'Aleix',
    text: " It's like, no, no, I'm thinking about changing job, because this is not challenging."
  },
  { startTime: 1256.32, person: 'Aleix', text: " It's like, okay." },
  {
    startTime: 1257.76,
    person: 'Aleix',
    text: ' So, the cognitive load is depending on the context.'
  },
  {
    startTime: 1261.38,
    person: 'Aleix',
    text: ' So, you cannot measure cognitive load and not have a conversation.'
  },
  { startTime: 1265.04, person: 'Aleix', text: ' You can have it, measure it.' },
  {
    startTime: 1266.7,
    person: 'Aleix',
    text: " You can assess it, or you cannot have, like, it's two or three."
  },
  {
    startTime: 1271.84,
    person: 'Aleix',
    text: " It's hard to put that kind of level of numbers to a person."
  },
  {
    startTime: 1276.72,
    person: 'Aleix',
    text: ' But you can give, like, okay, this is the area that we can talk about.'
  },
  { startTime: 1279.98, person: 'Aleix', text: ' This is causing cognitive load.' },
  {
    startTime: 1281.36,
    person: 'Aleix',
    text: " Then you need to talk to people to understand if it's good or bad."
  },
  { startTime: 1284.96, person: 'Aleix', text: ' Because the number is half of the picture.' },
  { startTime: 1288.22, person: 'Aleix', text: ' You need always the human conversation.' },
  {
    startTime: 1292.96,
    person: 'Karol',
    text: ' As far as I remember, an individual, in terms of team topologies, is not the lowest point of study.'
  },
  {
    startTime: 1302.6,
    person: 'Karol',
    text: " It's actually the team that's the smallest object of study."
  },
  {
    startTime: 1308.46,
    person: 'Aleix',
    text: " That's right, because at the end, you want to understand at the team level instead of individual."
  },
  {
    startTime: 1313.68,
    person: 'Aleix',
    text: " It's true that you need to talk to individuals, because as people, we will signal what is happening, and it will help us."
  },
  { startTime: 1320.44, person: 'Aleix', text: ' And then, let me show briefly the screen.' },
  { startTime: 1323.96, person: 'Aleix', text: ' Yeah, sure.' },
  { startTime: 1325.52, person: 'Aleix', text: ' On this.' },
  {
    startTime: 1327.5,
    person: 'Aleix',
    text: ' This is a product I was building with Manuel Pais.'
  },
  {
    startTime: 1331.36,
    person: 'Aleix',
    text: ' The thing is that, here, is that Laura, she designed a way to understand cognitive load into four clusters.'
  },
  {
    startTime: 1342.58,
    person: 'Aleix',
    text: " She has a PhD on this area, and she's very good."
  },
  {
    startTime: 1346.44,
    person: 'Aleix',
    text: ' I was super happy that someone was working on this in a way that is actionable.'
  },
  {
    startTime: 1352.4,
    person: 'Karol',
    text: ' So, for people watching or watching the recording, so you can follow on a different screen or open it up.'
  },
  {
    startTime: 1359.22,
    person: 'Karol',
    text: ' This is the link to this particular page with the four clusters of drivers that Alex just opened on a screen share.'
  },
  {
    startTime: 1367.94,
    person: 'Karol',
    text: " So, if you'd like to follow us on a different screen or visit this page later, you can just find it over this QR."
  },
  { startTime: 1375.36, person: 'Karol', text: ' All right, cool.' },
  { startTime: 1376.3, person: 'Aleix', text: ' Going back.' },
  { startTime: 1377.2, person: 'Aleix', text: ' Yes.' },
  {
    startTime: 1377.98,
    person: 'Aleix',
    text: ' So, the thing is that, at the end, is, hey, where are the cognitive load coming from?'
  },
  {
    startTime: 1384.76,
    person: 'Aleix',
    text: ' And it was the task characteristics, team characteristics, work process and practises, and then work environment and tools.'
  },
  {
    startTime: 1391.1,
    person: 'Aleix',
    text: ' And it was like, I feel very related because, of course, you can have cognitive load about the complexity of the task.'
  },
  {
    startTime: 1396.76,
    person: 'Aleix',
    text: " For example, I don't know much learning, but just if you ask me much learning, hey, you need to do a new algorithm on AI recognition or whatever."
  },
  {
    startTime: 1404.44,
    person: 'Aleix',
    text: " I'm like, okay, my cognitive load will go through the roof."
  },
  {
    startTime: 1407.04,
    person: 'Aleix',
    text: ' But at the same time, what happens in the team lab?'
  },
  {
    startTime: 1409.38,
    person: 'Aleix',
    text: ' What happens if you have way too many stakeholders?'
  },
  {
    startTime: 1411.78,
    person: 'Aleix',
    text: " What happens in the work and practises they've done are coherent and we miss them, right?"
  },
  {
    startTime: 1416.98,
    person: 'Aleix',
    text: ' So, a lot of the things that happens to us that influence our cognitive load.'
  },
  {
    startTime: 1424.06,
    person: 'Aleix',
    text: ' And she was able to get into a lot of them, like problem definition, solution alignment, and it was a task complexity, contextual complexity.'
  },
  { startTime: 1432.6, person: 'Aleix', text: ' And I was reading this.' },
  { startTime: 1435.56, person: 'Aleix', text: " It's like, oh, that's super true." },
  { startTime: 1437.12, person: 'Aleix', text: ' Like, we have too many team members.' },
  { startTime: 1439.7, person: 'Aleix', text: ' Maybe the teams are too big.' },
  {
    startTime: 1441.64,
    person: 'Aleix',
    text: " Maybe we don't have the right skills and we need to have handovers."
  },
  {
    startTime: 1445.66,
    person: 'Aleix',
    text: " Maybe we don't have clarity on what is our role, which is my responsibilities, right?"
  },
  { startTime: 1451.12, person: 'Aleix', text: ' I am in the right.' },
  {
    startTime: 1452.2,
    person: 'Aleix',
    text: " So, there's a lot of things on processes, consistency, maybe the piece, maybe the performance."
  },
  { startTime: 1458.24, person: 'Aleix', text: " It's not clear." },
  {
    startTime: 1459.76,
    person: 'Aleix',
    text: ' So, I wanted to briefly share this because at the end, when we talk about cognitive load, we have a lot of dimensions.'
  },
  {
    startTime: 1467.9,
    person: 'Aleix',
    text: " There we have several, but it's like, you need to talk to people to understand which is the area that we need to talk."
  },
  { startTime: 1476.24, person: 'Aleix', text: ' And AI impacts in some and helps others.' },
  {
    startTime: 1480.82,
    person: 'Aleix',
    text: ' And the thing is, like, we are moving the problem somewhere.'
  },
  { startTime: 1482.98, person: 'Aleix', text: ' We are not solving everything.' },
  { startTime: 1484.36, person: 'Aleix', text: ' We are moving the problem somewhere else.' },
  {
    startTime: 1487.1,
    person: 'Aleix',
    text: ' And maybe before, as a PM, you needed to talk to a developer to do a query to get some data.'
  },
  {
    startTime: 1495.08,
    person: 'Aleix',
    text: " And now with a cloud or open AI or whatever, now you're able, you're autonomous, and you don't need another person to generate a report."
  },
  { startTime: 1503.92, person: 'Aleix', text: ' Super.' },
  { startTime: 1504.82, person: 'Aleix', text: ' You improve your cognitive load.' },
  { startTime: 1506.16, person: 'Aleix', text: ' You reduce the interaction.' },
  { startTime: 1509.44, person: 'Aleix', text: ' It improved everything.' },
  {
    startTime: 1511.24,
    person: 'Aleix',
    text: " But then there's another part that they are not good enough, right?"
  },
  {
    startTime: 1514.62,
    person: 'Aleix',
    text: " So, AI, as I said, it's helping in some areas and making things worse in others."
  },
  {
    startTime: 1519.94,
    person: 'Aleix',
    text: ' And AI, sorry, cognitive load can help us to identify where we are going south.'
  },
  {
    startTime: 1527.5,
    person: 'Aleix',
    text: " And because it's lovely to see, like, if you see snapshots of the teams and you see a team that before AI, they have, it's not only AI."
  },
  {
    startTime: 1538.58,
    person: 'Aleix',
    text: " There's a lot of things that influences a team, right?"
  },
  {
    startTime: 1540.64,
    person: 'Aleix',
    text: " But let's assume that AI has enough impact to see a change."
  },
  {
    startTime: 1543.82,
    person: 'Aleix',
    text: ' You can see how it changes across the organisation.'
  },
  {
    startTime: 1546.52,
    person: 'Aleix',
    text: ' And then you can see patterns like, okay, we implemented AI, and now this cognitive load improved a lot, but this other went to the roof.'
  },
  { startTime: 1553.78, person: 'Aleix', text: " It's like, okay, how did this happen?" },
  {
    startTime: 1556.1,
    person: 'Aleix',
    text: ' And then you add things like another system metrics, like tickets or bugs in production or donor metrics.'
  },
  {
    startTime: 1563.52,
    person: 'Aleix',
    text: ' And through the conjunction of all of those metrics, you then have a hope, a picture of how your organisation evolves through time.'
  },
  { startTime: 1573.1, person: 'Karol', text: ' This reminds me of an interesting study.' },
  {
    startTime: 1577.12,
    person: 'Karol',
    text: " I don't really remember which company was that and when exactly that happened, but I read about that, I think a month ago or so."
  },
  {
    startTime: 1585.48,
    person: 'Karol',
    text: ' A company replaced their call centres with AI IVRs.'
  },
  {
    startTime: 1591.56,
    person: 'Karol',
    text: ' So basically, interactive voice response, right?'
  },
  { startTime: 1594.06, person: 'Karol', text: ' Mm-hmm.' },
  {
    startTime: 1595.34,
    person: 'Karol',
    text: ' And apparently, they moved all the complexity of that interaction, basically back to the users.'
  },
  {
    startTime: 1606.08,
    person: 'Karol',
    text: ' They have decent statistics over customer care and handling complaints, cases and whatnot.'
  },
  {
    startTime: 1613.38,
    person: 'Karol',
    text: ' The moment they implemented the replacement with AI-based IVR, complaints skyrocketed.'
  },
  {
    startTime: 1621.58,
    person: 'Karol',
    text: ' They quickly backed out of AI IVRs and went back to having a proper call centre because the complaints of the callers with not properly handled cases were just skyrocketing.'
  },
  {
    startTime: 1639.26,
    person: 'Karol',
    text: " I think that's a very nice example of where that load went into in that sense."
  },
  {
    startTime: 1644.42,
    person: 'Karol',
    text: ' They basically increased the cognitive load of their customers in that sense.'
  },
  { startTime: 1649.76, person: 'Aleix', text: " That's true." },
  {
    startTime: 1650.64,
    person: 'Aleix',
    text: " I don't remember the name, but sometimes I'm happy that someone else did the test."
  },
  {
    startTime: 1658.5,
    person: 'Aleix',
    text: ' Unlucky that it affected people because I believe that you can do the same test without firing people for a month because it took a month of data to understand the impact.'
  },
  {
    startTime: 1669.9,
    person: 'Aleix',
    text: " So it's like you can do the same thing, route the traffic to the half of your users, the other half of the current employees, and then you have a fallback in case this doesn't work."
  },
  { startTime: 1679.24, person: 'Aleix', text: " If it works, then it's a nice use case." },
  {
    startTime: 1682.48,
    person: 'Aleix',
    text: " But we are oversimplifying what is the work of customer success, or I don't know which was the part, right?"
  },
  { startTime: 1691.92, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 1695.82,
    person: 'Aleix',
    text: ' As I say, I like that other people do these kind of very crazy tests so we can learn from the outside without having the impact, which is a good thing.'
  },
  {
    startTime: 1705.06,
    person: 'Aleix',
    text: ' The other part is like, hey, we underestimate the complexity of a lot of things as leadership.'
  },
  { startTime: 1712.34, person: 'Aleix', text: ' Sometimes we think, oh, we understand better.' },
  {
    startTime: 1714.34,
    person: 'Aleix',
    text: " No, we have another vision, and that's the combination of multiple team members, multiple teams, and dimensions that we make a good product or good experience for our customers."
  },
  { startTime: 1726.36, person: 'Aleix', text: ' We understand way more.' },
  {
    startTime: 1729.34,
    person: 'Aleix',
    text: " I remember a lot of cases like people like able to detect in the tone of voice on the things, they're able to connect with other staff, and they're, oh, I understand."
  },
  {
    startTime: 1739.14,
    person: 'Aleix',
    text: ' Oh, I remember a conversation with another colleague.'
  },
  {
    startTime: 1741.56,
    person: 'Aleix',
    text: " I understand how he comes from, and then they're able to make the connection."
  },
  {
    startTime: 1746.1,
    person: 'Aleix',
    text: " That in AI, maybe in the future, but I still don't see that we are able to get into the point."
  },
  {
    startTime: 1752.76,
    person: 'Aleix',
    text: ' Based on the current context windows, because it will be, just imagine the context window size of our mind into a machine.'
  },
  { startTime: 1760.34, person: 'Aleix', text: ' We are still way more than the other.' },
  {
    startTime: 1762.94,
    person: 'Karol',
    text: " I think we'd have to invent things like arc reactors from Iron Man to be able to increase that context window sufficiently enough, or some other infinite source of energy, because currently it's already a cost of energy that is overwhelming at times, and it's difficult to increase that, scale that."
  },
  { startTime: 1784.46, person: 'Aleix', text: " That's true." },
  { startTime: 1785.76, person: 'Aleix', text: " Sometimes I'm like, try things." },
  { startTime: 1788.78, person: 'Aleix', text: " It's good." },
  { startTime: 1789.3, person: 'Aleix', text: ' We are experimenting.' },
  { startTime: 1790.94, person: 'Aleix', text: ' Okay.' },
  { startTime: 1791.84, person: 'Aleix', text: " I will say I'm a follower in some degrees." },
  {
    startTime: 1795.58,
    person: 'Aleix',
    text: " I'm like, hey, I'm using some stuff, and others are bets."
  },
  {
    startTime: 1799.6,
    person: 'Aleix',
    text: " I know that people need to do huge claims, because at the end, they need to raise money, and that's a game they are playing."
  },
  { startTime: 1806.38, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 1807.36,
    person: 'Aleix',
    text: " So we need to understand that they are doing this because they want to build a company, and maybe they don't do at the end, and maybe just get half, but that's already a product that can serve a million of users."
  },
  { startTime: 1819.1, person: 'Aleix', text: ' Happy about that.' },
  {
    startTime: 1821.36,
    person: 'Aleix',
    text: " But sometimes I'm like, had those crazy visions."
  },
  {
    startTime: 1824.92,
    person: 'Aleix',
    text: " I'm like, are you sure you're doing this for the product, or to get money to do something else?"
  },
  {
    startTime: 1830.72,
    person: 'Aleix',
    text: ' But at the end, I would say that if people can share the learnings, even though they fail, we can learn a lot more together on this space.'
  },
  {
    startTime: 1840.56,
    person: 'Karol',
    text: ' But going back to different interactions between people in work environments, it kind of sprang a thought to me, and I never considered that in this particular way.'
  },
  {
    startTime: 1852.3,
    person: 'Karol',
    text: " Some time ago, when I was preparing to give a class at O'Reilly, I stumbled upon, in my preparation and my research on integration architecture, I stumbled upon Tesla's law."
  },
  {
    startTime: 1866.44,
    person: 'Karol',
    text: " Tesla's law being mostly used within the user experience space, stating that's a law from somewhere in the 80s, stating that every problem domain has an inherent complexity that is irreducible."
  },
  {
    startTime: 1880.76,
    person: 'Karol',
    text: ' We can build more complexity on top of that, but the inherent problem domain complexity is irreducible, but we can move it around.'
  },
  {
    startTime: 1888.74,
    person: 'Karol',
    text: ' And the question is, who is going to handle that complexity?'
  },
  { startTime: 1893.44, person: 'Karol', text: ' So, in the case of Tesla,' },
  {
    startTime: 1896.48,
    person: 'Karol',
    text: ' that was an interaction between a human and a computer, or a piece of software on a computer,'
  },
  {
    startTime: 1901.66,
    person: 'Karol',
    text: ' which means, should we spend more time developing the software to handle the complexity of the'
  },
  {
    startTime: 1906.64,
    person: 'Karol',
    text: ' problem domain, for the user to spend one minute less on the problem themselves, or should we move'
  },
  {
    startTime: 1913.52,
    person: 'Karol',
    text: ' that complexity to the user, so that the user, every time they go into that software to use it,'
  },
  {
    startTime: 1919.6,
    person: 'Karol',
    text: ' they spend one minute more solving their problem, right?'
  },
  {
    startTime: 1923.14,
    person: 'Karol',
    text: " And I think this is somewhere also there in the human interactions that we're having, also with AI, also related to cognitive load, that law kind of rings true as well, especially delegation of tasks and delegation of the context."
  },
  {
    startTime: 1942.06,
    person: 'Aleix',
    text: ' I relate a lot, because I sometimes I can spend six hours in trying to automate a one-minute workflow.'
  },
  {
    startTime: 1952.92,
    person: 'Aleix',
    text: ' And you get, I mean, and sometimes you are that manager at the end, you say, oh, I will do a tool that is like, use Excel files, that does the job, and you handle the complexity yourself, and that does the job.'
  },
  {
    startTime: 1965.48,
    person: 'Aleix',
    text: " It's more load on you, but sometimes it's doing an application that only works in your domain, the applicability is that low, that the cost of doing it and the others doesn't pay off."
  },
  {
    startTime: 1979.24,
    person: 'Aleix',
    text: " And in terms of human resources or processes, sometimes it's only about replying emails."
  },
  { startTime: 1984.5, person: 'Aleix', text: ' I relate a lot with this.' },
  {
    startTime: 1987.62,
    person: 'Aleix',
    text: " And it's true that as, for me, I have a way to understand if I have too much cognitive load, which is, I think it's called in English, brain fog."
  },
  { startTime: 1997.52, person: 'Aleix', text: ' Brain fog, yeah.' },
  {
    startTime: 2000.22,
    person: 'Aleix',
    text: " You're like, and I detect this when I'm working, it's like, it's Wednesday."
  },
  { startTime: 2006.38, person: 'Aleix', text: ' I thought we were Tuesday.' },
  {
    startTime: 2008.44,
    person: 'Aleix',
    text: " I'm like, oh, I didn't remember that I lost a day."
  },
  {
    startTime: 2011.04,
    person: 'Aleix',
    text: ' Or I lose information, that before I was not losing it, because I have too many things on my head.'
  },
  {
    startTime: 2018.36,
    person: 'Aleix',
    text: ' And then I need to go back into writing things down, because otherwise I forget about stuff.'
  },
  {
    startTime: 2024.5,
    person: 'Karol',
    text: ' I get that when I work in different languages, because I constantly operate in three different languages, because I speak Polish at home, English at work and Dutch at work or outside of my home.'
  },
  {
    startTime: 2038.06,
    person: 'Karol',
    text: ' So basically, at a certain point in time, my brain goes completely foggy.'
  },
  {
    startTime: 2042.4,
    person: 'Karol',
    text: " And I don't even remember how the word I want to say is in any of those languages."
  },
  { startTime: 2047.32, person: 'Karol', text: " It's just like, oh, dictionary shut down." },
  { startTime: 2049.44, person: 'Karol', text: " It's like, what am I trying to say?" },
  { startTime: 2051.139, person: 'Karol', text: ' What is that word?' },
  {
    startTime: 2052.159,
    person: 'Karol',
    text: " I know that I feel the concept of that word in my brain, but I cannot express it at all, because I'm lacking the..."
  },
  { startTime: 2058.8, person: 'Aleix', text: ' The same thing, I would have the same thing.' },
  {
    startTime: 2061.08,
    person: 'Aleix',
    text: ' Sometime when I was working in the office some years ago, it happened to, at some time it was working.'
  },
  {
    startTime: 2068.139,
    person: 'Aleix',
    text: " And then I went into the metro station, and I don't remember going out from the building and going into the metro station."
  },
  {
    startTime: 2075.56,
    person: 'Aleix',
    text: ' And so maybe I replied to people in English, instead of Catalan.'
  },
  { startTime: 2078.84, person: 'Aleix', text: ' Like, I need to switch everything.' },
  {
    startTime: 2081.38,
    person: 'Aleix',
    text: " And that's for me, the level of cognitive load that I'm like, I start to be concerned."
  },
  {
    startTime: 2086.679,
    person: 'Aleix',
    text: ' Well, starting not, I will be like, okay, I need to slow down.'
  },
  {
    startTime: 2090.34,
    person: 'Aleix',
    text: ' Maybe my way is to go to vacations or this and that.'
  },
  {
    startTime: 2093.88,
    person: 'Aleix',
    text: ' But the important part is that when we use the term about cognitive load at work, what I try to use is a way to understand what is really causing cognitive load.'
  },
  {
    startTime: 2110.4,
    person: 'Aleix',
    text: ' I say this because people usually, we complain about one thing.'
  },
  {
    startTime: 2114.22,
    person: 'Aleix',
    text: ' And as that thing becomes a topic, I will, for example, say, we blame JIRA.'
  },
  {
    startTime: 2120.76,
    person: 'Aleix',
    text: ' And now everyone has been blaming JIRA for a while.'
  },
  { startTime: 2123.72, person: 'Aleix', text: " And now it's becoming a thing." },
  {
    startTime: 2125.98,
    person: 'Aleix',
    text: " And what is really happening is not JIRA, is that we have 10 stakeholders changing priorities, and JIRA isn't able to deal with the amount of that is happening."
  },
  {
    startTime: 2136.46,
    person: 'Aleix',
    text: ' But JIRA is where things are materialised, but the problem is somewhere else.'
  },
  { startTime: 2141.98, person: 'Karol', text: " It's symptomatic, basically." },
  { startTime: 2143.84, person: 'Karol', text: ' Sorry?' },
  { startTime: 2144.56, person: 'Karol', text: ' JIRA is the symptom, not the cause.' },
  { startTime: 2147.26, person: 'Karol', text: " Sometimes it's a cause." },
  { startTime: 2148.42, person: 'Karol', text: ' I would say no.' },
  {
    startTime: 2149.44,
    person: 'Aleix',
    text: " But it's true that the symptomatic is like, okay, what is this changing?"
  },
  {
    startTime: 2156.54,
    person: 'Aleix',
    text: ' And then you try to overuse a tool for the wrong purpose.'
  },
  {
    startTime: 2159.38,
    person: 'Aleix',
    text: ' And then you need to have these conversations which sometimes come with conflict.'
  },
  {
    startTime: 2163.58,
    person: 'Aleix',
    text: ' And what happens with cognitive load, or at least how we design it in temperature, is that people are missing what is causing them cognitive load.'
  },
  {
    startTime: 2174.84,
    person: 'Aleix',
    text: " Because we're trying to say, oh, my problem is the architecture."
  },
  {
    startTime: 2178.1,
    person: 'Aleix',
    text: ' My problem is that these API changes a lot of the time.'
  },
  {
    startTime: 2181.04,
    person: 'Aleix',
    text: ' So, I need a portion of the architecture with an anti-corruption layer.'
  },
  {
    startTime: 2186.42,
    person: 'Aleix',
    text: " It's like, okay, you're protecting yourself from what?"
  },
  {
    startTime: 2189.38,
    person: 'Aleix',
    text: ' From a human problem, and you need to try and solve it from a technical problem.'
  },
  { startTime: 2194.26, person: 'Aleix', text: ' And I think Fran will like this.' },
  {
    startTime: 2197.62,
    person: 'Aleix',
    text: " It's like, we try all the time, fix things through code, but the problem is human."
  },
  {
    startTime: 2203.26,
    person: 'Aleix',
    text: ' So, I found is that with cognitive load, in how the first book about topologies is trying to solve it, I think in the second edition, there is some more, they expanded the things on cognitive load.'
  },
  {
    startTime: 2217.64,
    person: 'Aleix',
    text: " I think the second edition is coming this month, or, so, it's coming this month, and then maybe you get it in October."
  },
  {
    startTime: 2225.96,
    person: 'Aleix',
    text: " And there's way more information on cognitive load as a thing."
  },
  { startTime: 2231.6, person: 'Aleix', text: ' So, I lost a little.' },
  {
    startTime: 2234.64,
    person: 'Aleix',
    text: " So, the thing is that, yeah, there's a lot of things in my brain."
  },
  { startTime: 2238.44, person: 'Aleix', text: ' Cognitive load, overload.' },
  { startTime: 2241.54, person: 'Karol', text: ' Cognitive load, overload.' },
  {
    startTime: 2243,
    person: 'Karol',
    text: " So, take a moment to think about the next sentence, and I'll just pitch in on the human problem."
  },
  {
    startTime: 2248.8,
    person: 'Karol',
    text: ' We just had, a little bit back, a live stream on data mesh versus application integration, which is not a thing.'
  },
  { startTime: 2258.34, person: 'Karol', text: " It's not versus." },
  { startTime: 2259.08, person: 'Karol', text: ' They are synergetic.' },
  {
    startTime: 2261.1,
    person: 'Karol',
    text: ' And there was a lovely statement there that, basically, tech is never the problem.'
  },
  { startTime: 2267.56, person: 'Karol', text: " It's always the humans." },
  {
    startTime: 2269.48,
    person: 'Karol',
    text: ' And that reminds me also of the lovely talk by Andrew Harmel-Law at DDD Europe 25, so, this year, where Andrew put in a talk stating the second hardest problem in system architecture, or software design.'
  },
  { startTime: 2288.56, person: 'Karol', text: " I don't really remember that." },
  { startTime: 2289.96, person: 'Karol', text: ' That was variability.' },
  {
    startTime: 2292.34,
    person: 'Karol',
    text: ' So, Andrew went through that talk for, like, 50 minutes.'
  },
  { startTime: 2295.84, person: 'Karol', text: ' Lovely content.' },
  { startTime: 2297.06, person: 'Karol', text: ' Absolutely great.' },
  { startTime: 2298.96, person: 'Karol', text: ' Great topic.' },
  {
    startTime: 2300.42,
    person: 'Karol',
    text: " And then somebody in the audience in the Q&A asks him, okay, Andrew, what's the first hardest problem in software design?"
  },
  {
    startTime: 2308.58,
    person: 'Karol',
    text: " And he was like, oh, yeah, I didn't mention that."
  },
  { startTime: 2310.72, person: 'Karol', text: ' All of you!' },
  {
    startTime: 2313.32,
    person: 'Karol',
    text: ' Humans are the hardest problem in software design.'
  },
  { startTime: 2316.52, person: 'Karol', text: " And it's always that." },
  { startTime: 2317.98, person: 'Karol', text: " We're actually facing organisational issues." },
  { startTime: 2320.84, person: 'Karol', text: " We're facing relationship issues." },
  { startTime: 2323.24, person: 'Karol', text: " We're facing just human problems." },
  { startTime: 2326.18, person: 'Karol', text: ' Communication problems.' },
  { startTime: 2327.5, person: 'Karol', text: " We're not facing tech problems." },
  {
    startTime: 2329.44,
    person: 'Karol',
    text: " Tech problems is, I think, in my personal opinion, a really small percentage of the problems we're actually trying to solve at work."
  },
  {
    startTime: 2337.66,
    person: 'Karol',
    text: ' Most of them relate to human problems, or problems created by humans.'
  },
  { startTime: 2344.26, person: 'Karol', text: ' Not tech, per se.' },
  { startTime: 2346.58, person: 'Aleix', text: ' I sometimes use tech to relax.' },
  {
    startTime: 2352.16,
    person: 'Aleix',
    text: " Like, okay, there's let me do a little TDD, and I solve a couple of use cases, and that relaxes me."
  },
  {
    startTime: 2359.14,
    person: 'Aleix',
    text: ' So, not me to reduce cognitive load, I just need to code.'
  },
  {
    startTime: 2362.6,
    person: 'Aleix',
    text: " But human problems, we say, like, understanding the customer, and there's a lot of other things."
  },
  {
    startTime: 2367.94,
    person: 'Aleix',
    text: " Because at the end, and we sometimes we don't like this, but customers, you cannot tell them, buy me."
  },
  { startTime: 2373.44, person: 'Aleix', text: ' Right?' },
  {
    startTime: 2373.98,
    person: 'Aleix',
    text: ' So, you have all the things about profit, that is things that you cannot control, and cost is everything you control.'
  },
  {
    startTime: 2379.84,
    person: 'Aleix',
    text: " So, that's people focus on what they can control, which is their employees."
  },
  { startTime: 2384.76, person: 'Aleix', text: " But that's the wrong place to focus." },
  {
    startTime: 2386.54,
    person: 'Aleix',
    text: ' Because what you need to do is help them to try to understand why these people are not buying, right?'
  },
  {
    startTime: 2391.9,
    person: 'Aleix',
    text: " And now I'm able to cycle back about cognitive load and human."
  },
  {
    startTime: 2395.58,
    person: 'Aleix',
    text: ' Which is, for me, cognitive load helped me in two ways.'
  },
  {
    startTime: 2399.4,
    person: 'Aleix',
    text: " One is, as a leader, I'm able to understand how my organisation is evolving."
  },
  {
    startTime: 2403.84,
    person: 'Aleix',
    text: ' Like, if I have multiple teams, each of them are different.'
  },
  { startTime: 2407.28, person: 'Aleix', text: ' So, you cannot compare team to team.' },
  { startTime: 2410.68, person: 'Aleix', text: ' Because all of them are unique.' },
  { startTime: 2412.16, person: 'Aleix', text: ' But the tendencies, you can compare them.' },
  {
    startTime: 2414.44,
    person: 'Aleix',
    text: " It's like, okay, these teams are improving, but this one is getting worse."
  },
  { startTime: 2416.98, person: 'Aleix', text: ' Like, what is happening here?' },
  { startTime: 2418.58, person: 'Aleix', text: ' Right?' },
  {
    startTime: 2418.76,
    person: 'Aleix',
    text: " So, tendencies, you can kind of inform you if you're doing a good work or bad work."
  },
  {
    startTime: 2425.28,
    person: 'Aleix',
    text: ' But the other thing is that by how you assess, you cannot measure, I will say assess a cognitive load.'
  },
  {
    startTime: 2432.02,
    person: 'Aleix',
    text: ' Is that you, by doing the questions, you help people to understand their problems better.'
  },
  { startTime: 2440.4, person: 'Aleix', text: " That's the thing about people blaming Jira." },
  {
    startTime: 2442.72,
    person: 'Aleix',
    text: ' And the problem is that they have ten stakeholders, right?'
  },
  {
    startTime: 2445.3,
    person: 'Aleix',
    text: ' So, what happens is that because each team is unique, they share, like, oh, my problem is this one and this is very specific.'
  },
  {
    startTime: 2451.74,
    person: 'Aleix',
    text: " And you, when you're head of engineering or you're in responsibility, and you hear each team being quite different to each other, there is no way you can invest to help them all."
  },
  {
    startTime: 2463.28,
    person: 'Aleix',
    text: " You need to put the responsibility back to the team because it's a team specific."
  },
  {
    startTime: 2468.46,
    person: 'Aleix',
    text: ' But when you start giving them the names or the patterns or the cognitive load areas, and you see, like, oh, most of them score high on team complexity or problem solution definition.'
  },
  {
    startTime: 2481.04,
    person: 'Aleix',
    text: ' Then, okay, here is an area that I can invest and do a cross functional investment to help multiple teams at the same time.'
  },
  {
    startTime: 2487.68,
    person: 'Aleix',
    text: " So, you move from unique and specific that you need to get, and probably you've happened this to you, which is it takes you three months to understand, oh, that's a problem."
  },
  {
    startTime: 2498.22,
    person: 'Aleix',
    text: ' Because you have, you need to talk to a lot of people, right?'
  },
  {
    startTime: 2501.64,
    person: 'Aleix',
    text: ' When you start, like, measuring cognitive, assessing cognitive load and you start seeing these patterns, instead of you going blindly to all the teams to having conversations to at least identify where is the problem coming from, because you need to create a relationship so people can talk to you about the hard problems.'
  },
  {
    startTime: 2520.1,
    person: 'Aleix',
    text: ' Nobody wants to talk about the hard problems with a person that they just met, you need to create a relationship.'
  },
  {
    startTime: 2525.36,
    person: 'Aleix',
    text: " So, what happens is that if you start creating this shared language about the cognitive load, people start to, oh, my problem is not this one, it's this one."
  },
  {
    startTime: 2534.02,
    person: 'Aleix',
    text: " And then from team to team, it's like, oh, we have the same problem."
  },
  {
    startTime: 2537.98,
    person: 'Aleix',
    text: " And then you start creating this shared language, shared awareness, then you're able to say, oh, we can improve on this area, and then we can assess if we are actually improving."
  },
  {
    startTime: 2549.6,
    person: 'Aleix',
    text: " And that's a use case, I think, that's a use case we did at Creditas, a company that was applying a lot of the concept about topologies."
  },
  {
    startTime: 2556.9,
    person: 'Aleix',
    text: " And we succeeded quite well, locally, in a tribe, because it's very hard to scale that manually."
  },
  {
    startTime: 2563.8,
    person: 'Aleix',
    text: " Indeed, temperature was borne out of the need assessing cognitive load at the scale, and it's doing it fine if you are more than 10 teams, because if you're less than 10 teams, you should know which are the team problems."
  },
  {
    startTime: 2575.24,
    person: 'Aleix',
    text: " But when you have like 500 developers, everyone with the same, their own thing, you need to create the shared language, and that's when it works."
  },
  {
    startTime: 2584.9,
    person: 'Karol',
    text: ' So, you basically went domain-driven design on human interactions.'
  },
  {
    startTime: 2589.84,
    person: 'Aleix',
    text: ' Kind of, because context patterns, I hope this is called context mapping, on domain-driven design, tells you a lot of information about systems.'
  },
  {
    startTime: 2605.24,
    person: 'Aleix',
    text: " Sometimes I'm missing the human part, and that's when team topologies was helping."
  },
  {
    startTime: 2609.64,
    person: 'Aleix',
    text: " It's like, okay, this team is interacting with five teams all the time for a year, and these systems having these things and trying to protect from what?"
  },
  { startTime: 2619.22, person: 'Aleix', text: ' Okay, the problem is human.' },
  { startTime: 2621.02, person: 'Aleix', text: ' Sometimes the problem is different.' },
  {
    startTime: 2622.44,
    person: 'Aleix',
    text: " It's tech, and then the human has the consequences."
  },
  {
    startTime: 2625.62,
    person: 'Aleix',
    text: " But you are able to pair the two views on the same problem, and then you're like, okay, I see how moving things here change things there."
  },
  {
    startTime: 2635.7,
    person: 'Aleix',
    text: " And we cannot be naive about being like, I do a change, and then there is a consequence, because this doesn't happen in complex systems."
  },
  {
    startTime: 2644.04,
    person: 'Aleix',
    text: ' You try to nature a change, and you hope for the best, that it will have the nice intent, and then you put some wire traps to understand if this is going in the wrong direction, and my wire traps are going to flow.'
  },
  {
    startTime: 2659.76,
    person: 'Aleix',
    text: " It's like, I want to try this change, and then instead of waiting three months to a person to come to me saying, hey, this is blow up, everything is on fire, you start noticing that this is not in the right direction, then it's when you take action."
  },
  {
    startTime: 2675.4,
    person: 'Aleix',
    text: " I say this because when you're head of engineering or director, maybe you are five people until the teams."
  },
  {
    startTime: 2682.54,
    person: 'Aleix',
    text: ' So I always say, like, the team members need to realise they have a problem.'
  },
  {
    startTime: 2686.88,
    person: 'Aleix',
    text: ' Then they will bring that into retrospective, if you have retrospectives.'
  },
  { startTime: 2690.58, person: 'Aleix', text: ' So imagine that you have every two weeks.' },
  { startTime: 2692.5, person: 'Aleix', text: " So let's assume you have the best case scenario." },
  {
    startTime: 2695.14,
    person: 'Aleix',
    text: ' In two weeks, you notice that the team level, they will report that to the tech lead or the DM.'
  },
  { startTime: 2701.6, person: 'Aleix', text: ' They will try to fix it first.' },
  { startTime: 2703.5, person: 'Aleix', text: ' They will not.' },
  {
    startTime: 2705.16,
    person: 'Aleix',
    text: " And then they will escalate that, and by the time the information reaches you, it's three months in."
  },
  {
    startTime: 2711.54,
    person: 'Aleix',
    text: ' So cognitive load can help you, like, if you created a bad decision, you want to see it as soon as possible.'
  },
  {
    startTime: 2718.38,
    person: 'Aleix',
    text: ' And of course, you need to have a good culture about psychological safety, people sharing the issues.'
  },
  {
    startTime: 2724.68,
    person: 'Aleix',
    text: " But it's true, like, people want to solve them first, and they don't want to escalate it next day."
  },
  {
    startTime: 2730.2,
    person: 'Aleix',
    text: ' But if you start seeing, like, multiple teams noticing this boost on cognitive load, you need to intervene.'
  },
  {
    startTime: 2736.68,
    person: 'Karol',
    text: " That's basically, you basically described something we joked about being the mushroom theory for directors."
  },
  { startTime: 2744.54, person: 'Karol', text: " I don't know if you ever heard the joke." },
  {
    startTime: 2746.04,
    person: 'Karol',
    text: ' This is a joke about, well, very bad management in that sense, being that a good director is like a mushroom, kept in a basement in the dark.'
  },
  {
    startTime: 2757.96,
    person: 'Karol',
    text: ' Yes, kept in the basement in the dark and fed with manure, right?'
  },
  {
    startTime: 2763.1,
    person: 'Karol',
    text: ' So the level of information that actually reaches the management, the top management, is very limited.'
  },
  {
    startTime: 2770.66,
    person: 'Karol',
    text: " Some studies say it's about 4% of actual problems that happen that get to that level of management, which means that you have not implemented a good feedback loop to actually measure what's happening in your organisation."
  },
  {
    startTime: 2785.18,
    person: 'Karol',
    text: " Sometimes it's impossible, sometimes you need to delegate, but then again, somebody needs to make those decisions."
  },
  {
    startTime: 2791.98,
    person: 'Aleix',
    text: " It's very hard, because if people are able to solve this by themselves, it means that they have the right tools, so they don't need to reach you."
  },
  {
    startTime: 2800.32,
    person: 'Aleix',
    text: " So it's a good point here, which is like, you delegate enough, and you empower, you delegate decision making and authority to lower level, and then you're able to solve that at that level, super."
  },
  { startTime: 2812.36, person: 'Aleix', text: " It's a good job." },
  {
    startTime: 2814.02,
    person: 'Aleix',
    text: " And the problem is that the things that are not solvable at that level, how things reaches the top, and of course, don't shoot the messenger when the information reaches you."
  },
  { startTime: 2825.64, person: 'Aleix', text: " So it's very hard." },
  {
    startTime: 2827.36,
    person: 'Aleix',
    text: ' So for me, as I said at the beginning, I was a developer.'
  },
  {
    startTime: 2831.06,
    person: 'Aleix',
    text: ' So I was having TDD, CICT, trunk-based development.'
  },
  {
    startTime: 2835.32,
    person: 'Aleix',
    text: ' So it means that my feedback loop moves from seconds to hours.'
  },
  { startTime: 2839.92, person: 'Aleix', text: ' As a manager, it moved to days to weeks.' },
  {
    startTime: 2843.3,
    person: 'Aleix',
    text: ' And then as a head of engineering, it went to months to quarters.'
  },
  {
    startTime: 2847.44,
    person: 'Aleix',
    text: " I can only imagine people like CEO or CTO is like, I'm sure that they are working quite blindly, to be honest, and hoping, like, providing information and sometimes hoping for the best."
  },
  {
    startTime: 2860.12,
    person: 'Aleix',
    text: " And also, that's why I went into strategies, like, I want to understand how people make a strategy."
  },
  { startTime: 2864.5, person: 'Aleix', text: ' I noticed that not much strategy.' },
  {
    startTime: 2869.84,
    person: 'Aleix',
    text: ' There is more like vision and hope, but not actual ways to communicate.'
  },
  {
    startTime: 2876.92,
    person: 'Aleix',
    text: " And having this feedback loop about, you have this intention, you have this bet, how you notice that you're going in a good direction."
  },
  { startTime: 2884.48, person: 'Aleix', text: " If you're lucky, you'll do this once a quarter." },
  { startTime: 2887.92, person: 'Aleix', text: ' I saw many companies doing this once a year.' },
  {
    startTime: 2890.3,
    person: 'Aleix',
    text: ' So everything I do is about how I can do faster feedback loops as a leader, regardless of the organisation size.'
  },
  { startTime: 2898.76, person: 'Aleix', text: ' And there is no one thing.' },
  { startTime: 2900, person: 'Aleix', text: ' There is multiple things you need to do together.' },
  {
    startTime: 2902.68,
    person: 'Aleix',
    text: " I saw people doing this programme manager, management thing, where they tried to create the standard reporting structures and having this kind of people in between teams that they're able to move information around."
  },
  { startTime: 2916.46, person: 'Aleix', text: " That's a way to try to solve it, to be honest." },
  {
    startTime: 2919.38,
    person: 'Aleix',
    text: " It's human-based, which we need that, because it's through the humans and connections that we are able to flow the information faster."
  },
  {
    startTime: 2927.4,
    person: 'Aleix',
    text: " And of course, when you are a developer, you're like, oh, my God, my tech lead all the time asking me for a report faster."
  },
  { startTime: 2933.64, person: 'Aleix', text: ' Let me code.' },
  {
    startTime: 2934.68,
    person: 'Aleix',
    text: " And when you become tech lead, you're like, come on, my developers, just please let me know what is going on, because otherwise you need to be talking to each of you to get information, to have this structure of reporting working."
  },
  { startTime: 2947.66, person: 'Aleix', text: " So there's a lot of tension between things." },
  {
    startTime: 2951.96,
    person: 'Aleix',
    text: " If you don't report, then there's going to be a lot of move to tech leads."
  },
  {
    startTime: 2956.22,
    person: 'Aleix',
    text: ' Indeed, I will tell you that in Temperature, the people that came to us were two kinds.'
  },
  {
    startTime: 2963.4,
    person: 'Aleix',
    text: ' C-level, that they want to understand what is going on in my organisation so they can invest on the teams.'
  },
  {
    startTime: 2968.22,
    person: 'Aleix',
    text: ' And the other is tech leads or agile coaches that they understand there is a problem, but they are missing data to prove that there is a problem.'
  },
  { startTime: 2977.32, person: 'Karol', text: ' Okay.' },
  { startTime: 2978.02, person: 'Karol', text: ' So both top-down and bottom-up, basically.' },
  { startTime: 2981.36, person: 'Aleix', text: ' Yes, both.' },
  {
    startTime: 2982.38,
    person: 'Aleix',
    text: ' And usually, the cognitive load ends at the tech lead.'
  },
  {
    startTime: 2987.16,
    person: 'Aleix',
    text: " Below, usually, they don't have that many, because the people that manages all the cows, they try to control and make it good, it's this person."
  },
  { startTime: 2996.04, person: 'Aleix', text: ' We are burning managers super fast.' },
  {
    startTime: 3000.06,
    person: 'Aleix',
    text: ' And with the AI thing, a lot of this burn is moving into the managers.'
  },
  {
    startTime: 3006.08,
    person: 'Aleix',
    text: ' And of course, as senior developers or developers, we have cognitive load and there is madness.'
  },
  {
    startTime: 3012.16,
    person: 'Aleix',
    text: ' But I saw a lot of people really pushing to protect the teams from the cows.'
  },
  {
    startTime: 3017.62,
    person: 'Aleix',
    text: " Sometimes I'm like, be careful, because you're burning yourself."
  },
  {
    startTime: 3020.02,
    person: 'Aleix',
    text: ' And when you end up burning and you need to leave, you will burn the team anyway.'
  },
  {
    startTime: 3024.52,
    person: 'Aleix',
    text: ' So try to find another way to make this sustainable.'
  },
  {
    startTime: 3029.5,
    person: 'Karol',
    text: " That's also kind of like scrum master role, right?"
  },
  {
    startTime: 3032.74,
    person: 'Karol',
    text: ' The scrum master is there to protect the team from influence from outside, taking on all the cognitive load of managing all those interactions.'
  },
  { startTime: 3042.14, person: 'Aleix', text: ' Yes.' },
  { startTime: 3042.62, person: 'Aleix', text: " Sometimes I'm changing opinions all the time." },
  {
    startTime: 3046.32,
    person: 'Aleix',
    text: ' Before, I thought, oh, good managers are able to shield the team from the cows.'
  },
  {
    startTime: 3051.54,
    person: 'Aleix',
    text: " But sometimes, hey, we don't need to protect the people, they are adults as well."
  },
  { startTime: 3057.04, person: 'Aleix', text: " So we don't need to babysit a team." },
  {
    startTime: 3060.94,
    person: 'Aleix',
    text: " Because then we're surprised that the team is not mature enough to deal with some news."
  },
  {
    startTime: 3065.64,
    person: 'Aleix',
    text: " It's like, you are 25 years old, 30 years old, you need to, come on, this is real life, right?"
  },
  { startTime: 3071.56, person: 'Aleix', text: ' So you need to be adult in certain situations.' },
  {
    startTime: 3074.12,
    person: 'Aleix',
    text: " So there is a level between, hey, you don't need to expose cows too early, so you need to do that."
  },
  { startTime: 3081.22, person: 'Aleix', text: ' But be careful about babysitting too much.' },
  {
    startTime: 3084.96,
    person: 'Aleix',
    text: " So I sometimes I'm like, in extremes are not good, just be okay."
  },
  {
    startTime: 3092.04,
    person: 'Aleix',
    text: " Because at the end, it's like you want to signal or create awareness within their condition that there is a problem."
  },
  {
    startTime: 3099.06,
    person: 'Aleix',
    text: ' And sometimes I learned that the best way to signal that there is a problem is let things burn.'
  },
  { startTime: 3108.1, person: 'Aleix', text: " And okay, now it's everyone's problem." },
  { startTime: 3113.86, person: 'Aleix', text: ' And then people get enough.' },
  {
    startTime: 3117.5,
    person: 'Aleix',
    text: " If it's important that they burn, sometimes you don't need to let things burn."
  },
  {
    startTime: 3121.74,
    person: 'Aleix',
    text: " But sometimes, hey, there's a lot of cognitive load."
  },
  {
    startTime: 3125.22,
    person: 'Aleix',
    text: ' Okay, and let it burn is, okay, let me go on vacation two weeks.'
  },
  { startTime: 3131.16, person: 'Aleix', text: ' And this will refer to things.' },
  {
    startTime: 3133.72,
    person: 'Aleix',
    text: ' If I come back and nothing happened, okay, it was everything on my mind.'
  },
  { startTime: 3137.28, person: 'Aleix', text: ' So I was wrong, which is good.' },
  { startTime: 3139.26, person: 'Aleix', text: ' The second is, okay, it was a problem.' },
  {
    startTime: 3142.68,
    person: 'Aleix',
    text: ' And now we need to signal that this needs to change, which is also good.'
  },
  { startTime: 3146.64, person: 'Aleix', text: ' Right?' },
  { startTime: 3147.1, person: 'Aleix', text: " So that's the way I had to signal." },
  {
    startTime: 3149.88,
    person: 'Aleix',
    text: " And that's good for me, because then I don't burn up."
  },
  {
    startTime: 3152.52,
    person: 'Aleix',
    text: ' So going on vacation is very important on vacation.'
  },
  { startTime: 3156.04, person: 'Aleix', text: " That's the use your PTO." },
  { startTime: 3159.16, person: 'Aleix', text: ' Yes.' },
  { startTime: 3160.48, person: 'Aleix', text: " So that's the thing." },
  { startTime: 3162.84, person: 'Aleix', text: " We're getting a lot from cognitive load." },
  { startTime: 3164.84, person: 'Aleix', text: " We're touching a lot of things." },
  { startTime: 3166.2, person: 'Karol', text: ' Yes, yes.' },
  {
    startTime: 3167.22,
    person: 'Karol',
    text: ' You know, I do love the aspect of letting things burn.'
  },
  {
    startTime: 3171.54,
    person: 'Karol',
    text: ' I used to have a colleague in consulting when I was working for PwC that said this lovely phrase that turned into a meme and a background in many laptops within the teams that worked with him.'
  },
  { startTime: 3188.08, person: 'Karol', text: ' We are all consultants.' },
  {
    startTime: 3189.92,
    person: 'Karol',
    text: " We all love a good dumpster fire, because that's where we as consultants come in to fix things."
  },
  { startTime: 3196.1, person: 'Karol', text: ' And this is where we do the work.' },
  {
    startTime: 3199.16,
    person: 'Karol',
    text: ' So basically, we ended the project with me sending him a miniature toy dumpster fire with a tea light in it, just sending to the London office for him to have it as a memorabilia after that project.'
  },
  {
    startTime: 3212.54,
    person: 'Karol',
    text: ' But basically, that turned out into a lovely meme with the fire starter girl, like with the exact quote with his name on several laptops.'
  },
  {
    startTime: 3221.38,
    person: 'Karol',
    text: ' And this burning is for consultants is amazing, because then we have a problem to solve.'
  },
  { startTime: 3227.16, person: 'Karol', text: ' This is our domain.' },
  { startTime: 3228.24, person: 'Karol', text: ' We are consultants.' },
  { startTime: 3229.18, person: 'Karol', text: ' We want to solve problems.' },
  { startTime: 3230.24, person: 'Karol', text: ' We want to help clients.' },
  { startTime: 3232.04, person: 'Karol', text: " But for a lot of people, that's the problem." },
  {
    startTime: 3235.52,
    person: 'Karol',
    text: " That's the cognitive load that they're suffering from."
  },
  {
    startTime: 3237.92,
    person: 'Karol',
    text: " That's the problem then with retention of employees."
  },
  {
    startTime: 3242.28,
    person: 'Karol',
    text: " That's the problem with retention of customers, etc."
  },
  { startTime: 3245.46, person: 'Aleix', text: ' Yeah.' },
  { startTime: 3246.2, person: 'Aleix', text: ' And this was quite interesting.' },
  {
    startTime: 3248.96,
    person: 'Aleix',
    text: ' We had in Temperature, we had one of the clients we worked with, which is we assessed eight teams.'
  },
  { startTime: 3259.46, person: 'Aleix', text: ' They shared some patterns.' },
  { startTime: 3263.5, person: 'Aleix', text: ' We understood that this was needs to be solved.' },
  {
    startTime: 3266.1,
    person: 'Aleix',
    text: ' Six months later, same kind of loads, no improvement.'
  },
  {
    startTime: 3270.48,
    person: 'Aleix',
    text: ' When you then you say, okay, what is going on here, because they know there is a problem, but then you realise that the problem is not solvable at the team level.'
  },
  {
    startTime: 3278.78,
    person: 'Aleix',
    text: ' It needs to be solved at a management level, because otherwise, they will already solve it.'
  },
  {
    startTime: 3283.68,
    person: 'Aleix',
    text: ' And then you analyse the cognitive of management.'
  },
  {
    startTime: 3287.02,
    person: 'Aleix',
    text: ' And we sometimes forget about management cognitive load.'
  },
  {
    startTime: 3290.32,
    person: 'Aleix',
    text: ' And then you realise that they were overloaded in many areas.'
  },
  {
    startTime: 3296.74,
    person: 'Aleix',
    text: " It's like, of course, they don't have able to improve, because if the people that have the tools or the authority to make the improvement, they are overloaded, the organisation cannot improve itself."
  },
  {
    startTime: 3308.14,
    person: 'Aleix',
    text: ' So it was quite interesting to say, we sometimes focus a lot on the team level, which we need to, but there is a lot of supporting structures that need to help them.'
  },
  {
    startTime: 3319.8,
    person: 'Aleix',
    text: ' At some point, the supporting structures are burning.'
  },
  {
    startTime: 3322.8,
    person: 'Aleix',
    text: ' And it can be the management, but it can be also platform teams.'
  },
  {
    startTime: 3326.88,
    person: 'Aleix',
    text: ' Platform teams that they need to help streamline teams to get less who thinks about their cognitive load.'
  },
  { startTime: 3334.02, person: 'Aleix', text: ' Then you create another platform team.' },
  {
    startTime: 3335.74,
    person: 'Aleix',
    text: " But the thing is that these people that are supporting, if they're burning, be careful, because if they burn, they are supporting a lot of the structures."
  },
  {
    startTime: 3348.12,
    person: 'Aleix',
    text: ' So be careful, because if they, for whatever reason, they break in whatever area that may happen, it will have a huge impact everywhere.'
  },
  {
    startTime: 3357.16,
    person: 'Aleix',
    text: " As the same way they improved everywhere, it doesn't work, it has a huge impact everywhere as well, right?"
  },
  {
    startTime: 3362.44,
    person: 'Aleix',
    text: ' So we found that assessing the quality of the platform teams, enabling teams, or agile coaches, people that have a supporting structure is key to understand if the organisation can improve.'
  },
  {
    startTime: 3374.56,
    person: 'Aleix',
    text: ' And the same thing about HR, you need to understand if HR is burning, or customer support, or recruitment, every area is like, hey, everyone is, maybe you have a huge attraction.'
  },
  { startTime: 3389.66, person: 'Aleix', text: " It's like, okay, we need to replace this." },
  {
    startTime: 3391.42,
    person: 'Aleix',
    text: ' But then you assess the cognitive load of the people, the people management team, and they are burned out, because they are trying to retain people, they are unable to, and then they also need to start sourcing, and fast, because you need to, before that person leaves, we need a replacement.'
  },
  {
    startTime: 3409.54,
    person: 'Aleix',
    text: ' And if that is not healthy, you will also have a problem, right?'
  },
  {
    startTime: 3414.26,
    person: 'Aleix',
    text: " So I see the cognitive load is helping you to, it's a healthy check about your organisation."
  },
  {
    startTime: 3420.78,
    person: 'Aleix',
    text: " And sometimes we are blind on some areas, until we just hit the problem, it's like, okay, why is it happening here?"
  },
  {
    startTime: 3426.76,
    person: 'Aleix',
    text: ' And then you change your focus as leadership from product development, about serving the customers, to sustain the company.'
  },
  { startTime: 3434.88, person: 'Aleix', text: " And I think that's one of the main problems." },
  {
    startTime: 3437.24,
    person: 'Aleix',
    text: ' You are sustaining the company structure, and not focussing on helping people to create value, or capture value.'
  },
  { startTime: 3446.98, person: 'Aleix', text: " You're already in a bad shape." },
  {
    startTime: 3450,
    person: 'Karol',
    text: " It's an interesting analogue there, that popped into my brain."
  },
  {
    startTime: 3453.68,
    person: 'Karol',
    text: " So basically, if we're looking at software, well, we're building software to support the main business goals, and the business of the company, right?"
  },
  {
    startTime: 3464.2,
    person: 'Karol',
    text: ' So this is like the core, using the domain driven design nomenclature, the core software.'
  },
  {
    startTime: 3470.96,
    person: 'Karol',
    text: " For that, we have the support software, and we have the generic domain, where core and support are important, because we're basically building that to drive the business."
  },
  { startTime: 3481.82, person: 'Karol', text: ' But then you have the generic domain.' },
  {
    startTime: 3484.28,
    person: 'Karol',
    text: " And if you don't have support, proper tools to build that software, if the generic domain would be your ID, your copilot LLMs, your HR software, your Slack, Teams, Office tools, whatever that may be, right?"
  },
  {
    startTime: 3501.72,
    person: 'Karol',
    text: " If that fails, and you're wasting time on figuring out how that works, because it's not intuitive, you're wasting your processing powers, right?"
  },
  {
    startTime: 3511.78,
    person: 'Karol',
    text: " And same would go into then the organisational structure, being an analogue, that you just mentioned, that of course, we have the teams, they're driving our business."
  },
  { startTime: 3520.52, person: 'Karol', text: ' But then you have all the support there.' },
  {
    startTime: 3523.06,
    person: 'Karol',
    text: ' So HR, your management teams, your L&D, your recruitment, whatever that may be.'
  },
  {
    startTime: 3531.48,
    person: 'Karol',
    text: " And if that's burning, then they will not be able to support your teams."
  },
  {
    startTime: 3536.6,
    person: 'Karol',
    text: ' They will not be able to give proper tools to those teams to deliver, which means that those teams will suffer as well, and they start burning as a consequence.'
  },
  {
    startTime: 3548.7,
    person: 'Karol',
    text: ' But their burning as a consequence is a symptom, not the cause.'
  },
  {
    startTime: 3553.32,
    person: 'Aleix',
    text: " That's the thing, that sometimes we need to understand that they are, when these people are burning, you need to understand, of course, and sometimes it will be the cause."
  },
  {
    startTime: 3565,
    person: 'Aleix',
    text: " But usually it's like, you need to understand how everything else is causing this."
  },
  {
    startTime: 3568.14,
    person: 'Aleix',
    text: " Sometimes that the CEO and the CPTO or the CPO or the whatever in the top, they don't get along for whatever reason, and that cascades."
  },
  {
    startTime: 3578.32,
    person: 'Aleix',
    text: " And it happened to me in big organisations like, why this request is coming from here and you didn't know?"
  },
  {
    startTime: 3583.28,
    person: 'Aleix',
    text: " It's like, oh, because it has a different report structure, people don't talk about it, and then it clashes at the end."
  },
  {
    startTime: 3589.82,
    person: 'Aleix',
    text: ' And then you need a lot of work at the bottom to resolve the conflict and mediate everything.'
  },
  {
    startTime: 3596.78,
    person: 'Aleix',
    text: " And the problem is somewhere in the end, it's like the symptom is here, the root cause is somewhere else."
  },
  {
    startTime: 3603.14,
    person: 'Aleix',
    text: " Sometimes we think that there is root causes, sometimes they don't exist."
  },
  {
    startTime: 3607.24,
    person: 'Aleix',
    text: " We sometimes are like, oh, there's a root cause, complex systems."
  },
  {
    startTime: 3610.38,
    person: 'Aleix',
    text: " You don't know what things causing what, you need to try multiple things until some of them work."
  },
  {
    startTime: 3617.48,
    person: 'Karol',
    text: " Sometimes it's just the combination between the different things that cause a problem."
  },
  {
    startTime: 3622.2,
    person: 'Karol',
    text: " They're not the problem themselves, but in combination, they become a problem."
  },
  {
    startTime: 3627.18,
    person: 'Aleix',
    text: ' And sometimes you need to, we are naive that we think, oh, there is this cause consequence, and then I can do this and do that.'
  },
  {
    startTime: 3633.12,
    person: 'Aleix',
    text: " It's like, no, you will try to do the best to intervene and then do multiple things at the same time, and some of it will work."
  },
  {
    startTime: 3642.2,
    person: 'Aleix',
    text: ' And I will cycle back this idea about generic and supporting things and AI and control and profit and expenses on the organisations.'
  },
  { startTime: 3654.12, person: 'Aleix', text: ' So companies, they cannot control profit.' },
  { startTime: 3657.8, person: 'Aleix', text: ' They can only control cost.' },
  { startTime: 3659.44, person: 'Aleix', text: ' True.' },
  {
    startTime: 3660.76,
    person: 'Aleix',
    text: ' And what happens with cost is like, oh, if you are in Europe, we have good labour rights.'
  },
  { startTime: 3668.46, person: 'Aleix', text: ' So you cannot fire people because you want.' },
  {
    startTime: 3671.32,
    person: 'Aleix',
    text: " But what you can do is like, okay, well, let's stop paying providers."
  },
  {
    startTime: 3675.44,
    person: 'Aleix',
    text: ' So the move is, instead of, I will stop paying this generic subdomain, and I will have my developers that because they cannot produce new features to create new revenue, they will create features to reduce the cost.'
  },
  {
    startTime: 3691.12,
    person: 'Aleix',
    text: ' So now instead of externalising feature flags or externalising this and that, now I will integrate it and try to reduce that.'
  },
  { startTime: 3700.9, person: 'Aleix', text: ' The same thing with moving outside the cloud.' },
  {
    startTime: 3704.06,
    person: 'Aleix',
    text: ' I will reduce my bill on the cloud and then I will pay to having an on-prem.'
  },
  {
    startTime: 3709.64,
    person: 'Aleix',
    text: " And I will not say that all of those are crazy decisions, but hey, now you are focussing on reducing costs, which usually on the long term, it doesn't pay off."
  },
  {
    startTime: 3724.26,
    person: 'Aleix',
    text: " Because if people start, instead of firing, I just imagine you have 50 developers and you say, oh, I don't need them or 100."
  },
  { startTime: 3733.86, person: 'Aleix', text: " I don't need them." },
  { startTime: 3734.54, person: 'Aleix', text: ' I only need 20.' },
  {
    startTime: 3735.78,
    person: 'Aleix',
    text: " What happens if the competition next to you don't fire them?"
  },
  {
    startTime: 3739.72,
    person: 'Aleix',
    text: ' It means that they will be able to produce five times more than you.'
  },
  {
    startTime: 3743.44,
    person: 'Aleix',
    text: ' And instead of focussing on one area, these people are experimenting way faster.'
  },
  {
    startTime: 3747.88,
    person: 'Aleix',
    text: " So sometimes you need more runway because you're a startup, you're losing, and then you need time to market to heal."
  },
  {
    startTime: 3755.5,
    person: 'Aleix',
    text: ' And then you need to make those drastic decisions.'
  },
  { startTime: 3758.48, person: 'Aleix', text: ' Fine.' },
  { startTime: 3759.58, person: 'Aleix', text: " You need to survive because you're a business." },
  {
    startTime: 3762.28,
    person: 'Aleix',
    text: " But sometimes I'm like, hey, where are you putting the focus?"
  },
  {
    startTime: 3765.42,
    person: 'Aleix',
    text: ' And sometimes we are seeing the focus in cost reduction and custom building generic subdomains or yourself.'
  },
  { startTime: 3774.5, person: 'Aleix', text: " I'm like, you don't need that." },
  { startTime: 3776.58, person: 'Aleix', text: " You don't know the cost of maintaining." },
  {
    startTime: 3780.24,
    person: 'Aleix',
    text: ' And then you start creating software that does two things.'
  },
  {
    startTime: 3785.56,
    person: 'Aleix',
    text: ' One is the cognitive load for the software that needs to create value.'
  },
  {
    startTime: 3791.4,
    person: 'Aleix',
    text: ' Now all the cognitive load and context for the software that needs to run the company, which is different users, completely different user sets.'
  },
  {
    startTime: 3800.74,
    person: 'Aleix',
    text: " You're creating another product internally that is available on the market."
  },
  { startTime: 3806.76, person: 'Aleix', text: ' So your context will explode.' },
  {
    startTime: 3810.48,
    person: 'Aleix',
    text: " And of course you can have the hopeful mindset or naive approach about thinking that, oh, it's a couple of lines of code."
  },
  { startTime: 3818.6, person: 'Aleix', text: " And don't get me wrong." },
  {
    startTime: 3819.68,
    person: 'Aleix',
    text: " LLMs are good and generic subdomains because that's what they are trained on."
  },
  {
    startTime: 3823.96,
    person: 'Aleix',
    text: " So I'm sure that they will be able to get into a workable solution fast."
  },
  {
    startTime: 3828.86,
    person: 'Aleix',
    text: ' But the problem is that the last 20%, that thing is not available.'
  },
  { startTime: 3836.06, person: 'Aleix', text: " It's not public." },
  { startTime: 3837.14, person: 'Aleix', text: ' So you will need to figure it out by yourself.' },
  { startTime: 3839.34, person: 'Aleix', text: " And that's where the cost resides." },
  { startTime: 3841.32, person: 'Aleix', text: ' So again, that moves.' },
  {
    startTime: 3843.52,
    person: 'Aleix',
    text: " It's the same thing about creating more cognitive load."
  },
  {
    startTime: 3846.14,
    person: 'Aleix',
    text: ' And then you need to maintain software on maybe hope.'
  },
  { startTime: 3851.96, person: 'Aleix', text: ' Sorry.' },
  { startTime: 3852.14, person: 'Karol', text: ' But you also go into moving that cost inside.' },
  { startTime: 3856.18, person: 'Karol', text: ' So you outsource that.' },
  {
    startTime: 3859.54,
    person: 'Karol',
    text: ' You have those tools outsourced to whoever is your supplier.'
  },
  {
    startTime: 3863.4,
    person: 'Karol',
    text: ' So basically the complexity and the cognitive load related to maintaining that or building that or providing support was outside.'
  },
  { startTime: 3873.5, person: 'Karol', text: ' And now you have a certain set of developers.' },
  {
    startTime: 3876.72,
    person: 'Karol',
    text: ' You maintain that because you want to reduce costs, but you want to maintain your staff.'
  },
  {
    startTime: 3881.3,
    person: 'Karol',
    text: " But basically you're moving that complexity back inside."
  },
  {
    startTime: 3885.7,
    person: 'Karol',
    text: " So you're dropping the cost on the supplier side, which is the monetary cost, which is your OPEX, CAPEX, whatever that may be."
  },
  { startTime: 3895.22, person: 'Karol', text: " But that's not the only cost." },
  { startTime: 3897.32, person: 'Karol', text: " That's just budget." },
  {
    startTime: 3898.52,
    person: 'Karol',
    text: ' The cost is also in the workload that you need to handle inside.'
  },
  {
    startTime: 3903.78,
    person: 'Karol',
    text: ' And this is where we create that cognitive load.'
  },
  {
    startTime: 3907.54,
    person: 'Karol',
    text: " And we are having that on those teams that we already have, which was your finite number of let's say 50 developers that were supporting your business."
  },
  {
    startTime: 3916.7,
    person: 'Karol',
    text: ' But now those developers are now supporting your core domains and your generic domains and your support domains, which means that you added a bunch of cognitive load onto them.'
  },
  {
    startTime: 3928.44,
    person: 'Karol',
    text: ' And not only in the way of, okay, we can wing it with AI copilot, which are trained on the generic domain, but we need to still figure out that 20% that you mentioned, right?'
  },
  {
    startTime: 3940.5,
    person: 'Karol',
    text: " So we're actually adding that load into that mix of already somewhat loaded with germane and extraneous and intrinsic cognitive load."
  },
  { startTime: 3952.46, person: 'Aleix', text: ' Yes, I totally agree.' },
  {
    startTime: 3954.26,
    person: 'Aleix',
    text: " The thing is that I, for me, I'm more like an externalizer than a buy it myself."
  },
  {
    startTime: 3961.4,
    person: 'Aleix',
    text: " I always try to, hey, if there's an option on the market, use that because it will, everything which is generic, it will give you speed."
  },
  { startTime: 3968.46, person: 'Aleix', text: ' So you can focus right off there, right?' },
  { startTime: 3970.18, person: 'Aleix', text: " But it's true." },
  { startTime: 3971.16, person: 'Aleix', text: ' This decision is happening.' },
  {
    startTime: 3972.72,
    person: 'Aleix',
    text: ' And from a finance perspective is having a stable cost, which is developers have these variable costs here.'
  },
  { startTime: 3981.28, person: 'Aleix', text: ' What if I move this 40,000 a month cost?' },
  { startTime: 3986.38, person: 'Aleix', text: ' I remove that and I move it inside.' },
  {
    startTime: 3989.48,
    person: 'Aleix',
    text: ' From that perspective, maybe it makes sense, right?'
  },
  {
    startTime: 3992.5,
    person: 'Aleix',
    text: " Because at the end, it's like, hey, we are unable to create more value."
  },
  { startTime: 3998.74, person: 'Aleix', text: ' We are not capturing users.' },
  {
    startTime: 4000.6,
    person: 'Aleix',
    text: " So we're focussing more on reducing that and you're using the developer team to focus on reducing that."
  },
  {
    startTime: 4007.24,
    person: 'Aleix',
    text: " So I could understand the reason, but for me it's a bad reason from a cognitive load perspective."
  },
  {
    startTime: 4016.58,
    person: 'Karol',
    text: " Yeah, because looking at, let's say you have those 50 developers and you devote part of them, let's say 10 developers to handle the generic domain."
  },
  {
    startTime: 4027.04,
    person: 'Karol',
    text: ' That is outside of the scope of their understanding.'
  },
  {
    startTime: 4029.76,
    person: 'Karol',
    text: ' They were handling your core domain, your support domain, which they understand because they understand your business or your problem domain.'
  },
  {
    startTime: 4037.44,
    person: 'Karol',
    text: " And now you're dropping them into a different problem domain, which is running the business, not the business itself."
  },
  {
    startTime: 4043.76,
    person: 'Karol',
    text: " And there's a lot of then for that, that will be what?"
  },
  {
    startTime: 4047.92,
    person: 'Karol',
    text: ' A lot of intrinsic and extraneous cognitive load basically, right?'
  },
  { startTime: 4052.32, person: 'Aleix', text: ' Before it turns into germane.' },
  { startTime: 4054.54, person: 'Aleix', text: ' Yeah.' },
  {
    startTime: 4054.78,
    person: 'Aleix',
    text: ' No, I mean, problem and solution space, you need to start over things.'
  },
  { startTime: 4058.66, person: 'Aleix', text: ' But how many times did you see this?' },
  {
    startTime: 4062.26,
    person: 'Aleix',
    text: ' How many times people created their own future flag system or their own?'
  },
  {
    startTime: 4067.22,
    person: 'Aleix',
    text: ' I mean, this is happening already in some organisations like, oh, I can do it myself.'
  },
  {
    startTime: 4074.06,
    person: 'Aleix',
    text: " Sometimes I hate dev tooling as a company because there is always some team in a company which when they're big enough, when I mean like a thousand or 2000 developers, that they will have enough resources to say, okay, I can build it myself instead of externalising."
  },
  {
    startTime: 4093.1,
    person: 'Aleix',
    text: " Because it's only a survey with a couple of things like try it."
  },
  { startTime: 4098.38, person: 'Aleix', text: ' So this happens more often than we think.' },
  {
    startTime: 4102.88,
    person: 'Karol',
    text: ' I mean, I see that in my field being enterprise application integration.'
  },
  {
    startTime: 4108.54,
    person: 'Karol',
    text: " We have a lot of vendors that already solved certain problems in that space by creating software that is reusable with building blocks, which is composed what we need to deploy it and it's running."
  },
  {
    startTime: 4122.14,
    person: 'Karol',
    text: ' But a lot of companies, because of the licencing costs of that software, the integration platforms, etcétera, they figure, oh no, no, no, no, hold on.'
  },
  { startTime: 4131.76, person: 'Karol', text: " We're not going to pay them for the licences." },
  {
    startTime: 4134.34,
    person: 'Karol',
    text: " We're not going to pay for that software, which is in my case, that's usually the supporting domain, not the core domain."
  },
  { startTime: 4142.88, person: 'Karol', text: " So we're not going to pay for that software." },
  {
    startTime: 4145.08,
    person: 'Karol',
    text: " We're going to build it in Azure, for example, or build it in AWS."
  },
  {
    startTime: 4149.7,
    person: 'Karol',
    text: " So basically what we're doing is now we're building an integration platform using either Azure Functions or AWS LabDOS."
  },
  {
    startTime: 4159.16,
    person: 'Karol',
    text: " So basically we're putting hard code skills into the mix to build them because Azure Functions and AWS LabDOS, they don't have the building blocks to support application integration."
  },
  {
    startTime: 4174.939,
    person: 'Karol',
    text: ' So we need to reinvent the wheel and build those blocks ourselves to support and build an integration platform from scratch.'
  },
  {
    startTime: 4184.74,
    person: 'Karol',
    text: ' The amount of work, the amount of cognitive load that goes into figuring out, okay, how did those integration platforms actually work?'
  },
  { startTime: 4193.78, person: 'Karol', text: ' What did they support?' },
  { startTime: 4194.7, person: 'Karol', text: ' What did they do?' },
  {
    startTime: 4195.38,
    person: 'Karol',
    text: ' What libraries do I need to build for the Azure Functions or AWS LabDOS to support that?'
  },
  { startTime: 4203.12, person: 'Karol', text: ' What language do I use?' },
  {
    startTime: 4204.82,
    person: 'Karol',
    text: ' Do I write it in JavaScript, Java, C++, C Sharp?'
  },
  { startTime: 4208.28, person: 'Karol', text: " What's going to happen?" },
  { startTime: 4209.66, person: 'Karol', text: ' How do I choose for that?' },
  {
    startTime: 4211.3,
    person: 'Karol',
    text: " How do I figure out what's supposed to happen there?"
  },
  { startTime: 4214.94, person: 'Aleix', text: " So there's a lot of things happening." },
  {
    startTime: 4217.7,
    person: 'Aleix',
    text: ' So things that can happen is the team thinks that they can do it faster and cheaper.'
  },
  { startTime: 4222.86, person: 'Aleix', text: " Sometimes it's like, hey, it's fair." },
  { startTime: 4225, person: 'Aleix', text: ' If you want to do it, you do it yourself.' },
  {
    startTime: 4227.38,
    person: 'Aleix',
    text: ' I found sometimes that people say like, oh, we will do it ourselves and we will create a protocol on top of it that we will sell.'
  },
  { startTime: 4233.74, person: 'Aleix', text: " It's like, what?" },
  {
    startTime: 4237.06,
    person: 'Aleix',
    text: " That's not reasonable, the consequences that go to market and things."
  },
  {
    startTime: 4242.6,
    person: 'Aleix',
    text: " So usually it's like why people like to do these things internally when they are supportive is that when you see more complexity, let me, you know, context mapping?"
  },
  { startTime: 4258.14, person: 'Aleix', text: ' Context.' },
  { startTime: 4259.86, person: 'Aleix', text: ' No, I give up.' },
  { startTime: 4262.28, person: 'Aleix', text: ' Let me, one second.' },
  { startTime: 4265.84, person: 'Aleix', text: ' Because it is easier to make it.' },
  { startTime: 4271.1, person: 'Aleix', text: ' It is the canvas, which is the canvas.' },
  { startTime: 4277.1, person: 'Aleix', text: ' Bundled context canvas, no.' },
  { startTime: 4282.72, person: 'Aleix', text: ' Core domain charts.' },
  { startTime: 4288.34, person: 'Aleix', text: ' There you go.' },
  { startTime: 4290.92, person: 'Aleix', text: ' Okay.' },
  { startTime: 4294.22, person: 'Aleix', text: ' And this happened to me in the past.' },
  {
    startTime: 4297.14,
    person: 'Aleix',
    text: ' So what happens when we are in the core is that the more complexity and business are high, at the same time, the uncertainty is quite high.'
  },
  { startTime: 4309.3, person: 'Aleix', text: " And we don't like uncertainty as developers." },
  { startTime: 4311.42, person: 'Aleix', text: ' We want things that are specific.' },
  {
    startTime: 4313.78,
    person: 'Aleix',
    text: ' And what are the things that are specific in supportive engineering?'
  },
  {
    startTime: 4317.98,
    person: 'Aleix',
    text: ' So we find some kind of, we can do a good job and a good architecture and a good testing on things that are known.'
  },
  {
    startTime: 4328.84,
    person: 'Aleix',
    text: ' So there is a kind of, so I saw a lot of companies, not, but some teams that are like, oh, I like to work on, so this happened in my company to me where we externalise the core domain and we did the supportive.'
  },
  { startTime: 4345.66, person: 'Aleix', text: ' Why?' },
  {
    startTime: 4346.56,
    person: 'Aleix',
    text: ' Because a supportive has one trait that is quite good, which is it is way more predictable than a core domain.'
  },
  {
    startTime: 4354.48,
    person: 'Aleix',
    text: ' Because you can get into the things, you know the things, the data is there and you have experts and you can define it and it will be done.'
  },
  {
    startTime: 4363.32,
    person: 'Aleix',
    text: ' Maybe they fail for one week, but it can be done.'
  },
  { startTime: 4366.14, person: 'Aleix', text: ' The core domain is not.' },
  { startTime: 4368.84, person: 'Aleix', text: ' It is uncertain.' },
  { startTime: 4370.36, person: 'Aleix', text: ' You will fail.' },
  { startTime: 4371.08, person: 'Aleix', text: ' You need a lot of things.' },
  {
    startTime: 4372.88,
    person: 'Aleix',
    text: ' And if you are in the wrong company and you have blame culture, the supportive is a safe bet.'
  },
  {
    startTime: 4381.52,
    person: 'Aleix',
    text: ' You can do a good job on time, good architecture, good looking code.'
  },
  { startTime: 4386.32, person: 'Aleix', text: ' It will be done.' },
  { startTime: 4388.18, person: 'Aleix', text: ' The core on the other side, it will be messy.' },
  { startTime: 4390.6, person: 'Aleix', text: ' It will be changing requirements.' },
  { startTime: 4392.02, person: 'Aleix', text: ' It will be the focus of the business.' },
  {
    startTime: 4394.02,
    person: 'Aleix',
    text: ' Therefore, we will have a lot of attention on a lot of opinions.'
  },
  {
    startTime: 4398.26,
    person: 'Aleix',
    text: " So in some degree, I understand why people maybe want to do that supportive because it gives that, hey, I'm doing a good job in terms of coding, not in terms of business."
  },
  { startTime: 4412.62, person: 'Aleix', text: ' But I can understand some of those.' },
  {
    startTime: 4415.42,
    person: 'Aleix',
    text: ' When you are in some tough organisations, maybe that makes sense.'
  },
  {
    startTime: 4418.94,
    person: 'Aleix',
    text: ' The good thing is that if you have a good organisation with a good learning culture, instead of seeing failure as a failure, but as a learning opportunity, you can learn a lot and enjoy doing a core domain and talk with people.'
  },
  { startTime: 4433.42, person: 'Aleix', text: ' At least I will give you this.' },
  {
    startTime: 4437.64,
    person: 'Aleix',
    text: ' At Creditas, for example, one thing that was happening is that the collaboration was very tough between people because everyone tried to do their best.'
  },
  { startTime: 4446.6, person: 'Aleix', text: ' We were in remote.' },
  {
    startTime: 4447.7,
    person: 'Aleix',
    text: " We didn't have a way to co-rate that we're using."
  },
  {
    startTime: 4450.38,
    person: 'Aleix',
    text: ' So what we did was doing a training on event storming to define problems.'
  },
  {
    startTime: 4456.08,
    person: 'Aleix',
    text: ' And the good thing is that it started from engineering, but we also trained PMs. And then the PM and the engineering team, they were collaborating on event storming instead of only talking.'
  },
  {
    startTime: 4468.02,
    person: 'Aleix',
    text: ' So we moved the collaboration from people talking and JR tickets into mapping the user flows, using event storming, instead of waiting for the designer to do the things on Figma.'
  },
  { startTime: 4481.16, person: 'Aleix', text: ' So we boosted a lot.' },
  {
    startTime: 4483.9,
    person: 'Aleix',
    text: ' And at some point, we joined some collaboration between teams and they all were using event storming as a shared language to communicate ideas.'
  },
  {
    startTime: 4492.42,
    person: 'Aleix',
    text: ' So it was a way to, okay, how people were starting to get along super fast, because we reduced the cognitive load on interaction because we created a shared tool, which in this case was event storming.'
  },
  { startTime: 4502.36, person: 'Aleix', text: ' Choose whatever you like.' },
  {
    startTime: 4503.8,
    person: 'Aleix',
    text: ' I mean, for me, it was great because we had some people that like it and got traction and it become like a thing on the company.'
  },
  {
    startTime: 4512.64,
    person: 'Aleix',
    text: " But the frustration about not understanding how a core domain evolves, because usually things like, oh, you decide this and maybe next week it changes, but then you don't communicate."
  },
  {
    startTime: 4522.96,
    person: 'Aleix',
    text: ' And then the other teams notice one month later and everything breaks.'
  },
  {
    startTime: 4526.46,
    person: 'Aleix',
    text: ' You solve that by having a shared mirror board with all the flow.'
  },
  {
    startTime: 4530.06,
    person: 'Aleix',
    text: " And then people are able to go inside and there's this nice view from mirror that says, things that you missed since last time you saw this mirror board."
  },
  { startTime: 4537.92, person: 'Aleix', text: " And you're like, oh, what is this flow?" },
  {
    startTime: 4539.98,
    person: 'Aleix',
    text: ' And then you realise like, okay, there is this command, this event, this risk, this node.'
  },
  {
    startTime: 4545.18,
    person: 'Aleix',
    text: " And they're like, okay, I understand everything."
  },
  {
    startTime: 4546.9,
    person: 'Aleix',
    text: ' And they become able to talk like, hey, I see you are mentioning this.'
  },
  {
    startTime: 4551,
    person: 'Aleix',
    text: ' And they chat in Slack like, hey, did you take this into account?'
  },
  { startTime: 4553.82, person: 'Aleix', text: ' Oh, no.' },
  { startTime: 4554.92, person: 'Aleix', text: ' Oh, yes.' },
  { startTime: 4555.56, person: 'Aleix', text: ' Okay, cool.' },
  {
    startTime: 4556.52,
    person: 'Aleix',
    text: ' And that is how we solved a lot of the pressure on cognitive load domains.'
  },
  { startTime: 4560.88, person: 'Aleix', text: " It's about communication." },
  {
    startTime: 4562.84,
    person: 'Karol',
    text: " And this is something I'm touching upon in terms of design of interactions between systems as an architect."
  },
  {
    startTime: 4571.36,
    person: 'Karol',
    text: ' This is also why I love event storming or domain driven design to bring all the people into one room and create that shared language.'
  },
  {
    startTime: 4578.44,
    person: 'Karol',
    text: ' But that does not happen as often as I would like to.'
  },
  {
    startTime: 4583.64,
    person: 'Karol',
    text: " So basically, if I look at it from this kind of a traditional perspective or waterfall perspective of design, it's like, okay, we have our business."
  },
  { startTime: 4594.16, person: 'Karol', text: ' Our business talks to the business analyst.' },
  {
    startTime: 4597.02,
    person: 'Karol',
    text: ' The best business analyst tries his best, her best, their best, basically, on understanding the business and translating that into requirements for the architect.'
  },
  {
    startTime: 4609.02,
    person: 'Karol',
    text: ' The architect then talks with that business analyst, tries to understand that and translate that the best way to design the technical requirements for the dev teams to implement.'
  },
  {
    startTime: 4620.64,
    person: 'Karol',
    text: ' The dev teams, they tried their best to understand the technical requirements and implement what the business wanted.'
  },
  {
    startTime: 4631.14,
    person: 'Karol',
    text: ' So on that alone, we already have one, two, three levels of assumptions being made.'
  },
  {
    startTime: 4641.7,
    person: 'Karol',
    text: " So we're already increasing the complexity by making assumptions because people rarely understand that they made an assumption and they rarely validate is that assumption actually true."
  },
  {
    startTime: 4657.06,
    person: 'Karol',
    text: " It takes actually a lot of self-awareness to see that I'm actually assuming things, not checking them."
  },
  {
    startTime: 4665.73,
    person: 'Karol',
    text: ' And then the load over time, the load over those levels.'
  },
  {
    startTime: 4670.61,
    person: 'Karol',
    text: " And then if you're in a blame culture, that's a problem."
  },
  {
    startTime: 4674.57,
    person: 'Karol',
    text: " The load over those levels, the sheer cognitive load between those levels that it's created on the end of the chain of the waterfall being the testers or the user acceptance tests."
  },
  { startTime: 4692.05, person: 'Karol', text: ' Why is it this way?' },
  { startTime: 4694.37, person: 'Karol', text: " It doesn't make sense." },
  {
    startTime: 4695.63,
    person: 'Karol',
    text: " It doesn't really correlate with what the business wanted, what we wanted as users, what's going on."
  },
  {
    startTime: 4702.09,
    person: 'Karol',
    text: ' And then of course, somebody gets blamed and usually the developers get blamed for not doing the job right.'
  },
  {
    startTime: 4708.03,
    person: 'Karol',
    text: ' But basically we have a level of assumptions where we created complexity.'
  },
  {
    startTime: 4712.61,
    person: 'Karol',
    text: " We created cognitive load that wasn't handled through the design."
  },
  { startTime: 4718.31, person: 'Karol', text: ' Wow.' },
  { startTime: 4719.01, person: 'Aleix', text: ' You open a lot of things at the same time.' },
  { startTime: 4720.63, person: 'Aleix', text: ' All right, go.' },
  {
    startTime: 4723.47,
    person: 'Aleix',
    text: " So the thing is that usually I haven't been in a company that has a huge blame culture."
  },
  {
    startTime: 4730.15,
    person: 'Aleix',
    text: " I think most of the companies have been, they're good."
  },
  {
    startTime: 4733.83,
    person: 'Aleix',
    text: " So there is sometimes lack of how to handle conflict that if you don't know, then you can interpret that as a blame culture."
  },
  {
    startTime: 4742.21,
    person: 'Aleix',
    text: ' But usually when you have good soft skills and then you understand conflict, you can turn those conversations into productive, improving things.'
  },
  {
    startTime: 4751.41,
    person: 'Aleix',
    text: ' And I will be honest, most of them, I feel quite safe to speak up.'
  },
  {
    startTime: 4757.21,
    person: 'Aleix',
    text: ' Or at least I have been quite lucky to be in these companies.'
  },
  {
    startTime: 4764.69,
    person: 'Aleix',
    text: " But usually it's that when you say most of the time it's developers, usually it's because we, or I found that sometimes we're lacking soft skills."
  },
  {
    startTime: 4772.67,
    person: 'Aleix',
    text: ' And usually people are very, that have these influencing skills, they know how to handle the stuff.'
  },
  {
    startTime: 4777.97,
    person: 'Aleix',
    text: " And it's not that we kind of get the blame because we don't know how to defend ourselves or how to put this conversation to a productive way."
  },
  {
    startTime: 4787.19,
    person: 'Aleix',
    text: " So, but as when you learn people, I've never been in a company that people don't want to make things right."
  },
  { startTime: 4793.65, person: 'Aleix', text: " It's about, okay, let's learn about this." },
  {
    startTime: 4795.13,
    person: 'Aleix',
    text: ' So I, people is always, I always had very kind people next to me on, and we were able to solve it.'
  },
  {
    startTime: 4802.17,
    person: 'Aleix',
    text: ' Of course, there are some very exceptions, but I would say there are a lot of very things.'
  },
  {
    startTime: 4808.05,
    person: 'Karol',
    text: ' People usually have good intentions and they want to actually solve problems.'
  },
  { startTime: 4812.47, person: 'Karol', text: ' A hundred percent.' },
  {
    startTime: 4813.25,
    person: 'Karol',
    text: " Sometimes people are- But they don't have the skills to communicate that and the language to communicate that often, because the language difference, the language barrier, if you don't do the ubiquitous language, then- And sometimes English is not our first language."
  },
  { startTime: 4826.69, person: 'Aleix', text: " So it's another addition into the problematic." },
  {
    startTime: 4830.37,
    person: 'Aleix',
    text: ' But the thing about you said about the business, the business started with an hypothesis.'
  },
  {
    startTime: 4835.05,
    person: 'Aleix',
    text: " If you're in a B2B, probably the business has quite understanding about user needs, because usually they are experts in the field."
  },
  {
    startTime: 4840.91,
    person: 'Aleix',
    text: " But if you're in a B2C, usually the domain experts are not the business per se, but this is how you try experiments."
  },
  {
    startTime: 4849.69,
    person: 'Aleix',
    text: " So usually the company you are in or the market you're in will shapely who's the domain expert and how you create value."
  },
  {
    startTime: 4856.59,
    person: 'Aleix',
    text: " But let's assume in our case, we had in a B2B setting, so therefore the business were quite domain experts."
  },
  {
    startTime: 4862.45,
    person: 'Aleix',
    text: ' And I will be honest, the VP of business, she was amazing.'
  },
  {
    startTime: 4867.13,
    person: 'Aleix',
    text: ' She had a huge vision on, she really made it and created a really great product.'
  },
  {
    startTime: 4872.19,
    person: 'Aleix',
    text: " But what happened is that instead of giving problems, because we were late, we had a lot of dynamics that sometimes we're making things slower."
  },
  {
    startTime: 4880.99,
    person: 'Aleix',
    text: ' They said, okay, how we can help them go faster.'
  },
  {
    startTime: 4884.53,
    person: 'Aleix',
    text: ' So with the good intentions, they give backlogs.'
  },
  {
    startTime: 4887.87,
    person: 'Aleix',
    text: " They try to make things as narrow as possible so we can implement things, which is good intention doesn't work in software because it's how we understand the problem."
  },
  {
    startTime: 4897.55,
    person: 'Aleix',
    text: ' It helped us to, because, hey, they assume a lot of things, how they work.'
  },
  {
    startTime: 4902.17,
    person: 'Aleix',
    text: ' And even though with a good intentions, maybe in software complexity means way more complex.'
  },
  {
    startTime: 4908.07,
    person: 'Aleix',
    text: " And this is often, it is true because there is no software and we don't know them."
  },
  { startTime: 4912.93, person: 'Aleix', text: ' So by the good intentions, we create a problem.' },
  {
    startTime: 4915.75,
    person: 'Aleix',
    text: " So how we turn this around, and it was not with Evan Storming, it was with Lean Inception from Pablo Caroli, it's a workshop this one week."
  },
  {
    startTime: 4924.67,
    person: 'Aleix',
    text: ' And we said, okay, how we can involve them into the definition instead of they telling us on the quarter what to do.'
  },
  {
    startTime: 4931.01,
    person: 'Aleix',
    text: ' So we ran a workshop and said, we need the business.'
  },
  {
    startTime: 4933.81,
    person: 'Aleix',
    text: ' So we need you and product on these two sessions on Monday.'
  },
  { startTime: 4938.41, person: 'Aleix', text: ' We only need you three hours.' },
  {
    startTime: 4940.49,
    person: 'Aleix',
    text: ' And the rest with your information, we will run it.'
  },
  { startTime: 4944.29, person: 'Aleix', text: ' We started during the workshop.' },
  { startTime: 4946.47, person: 'Aleix', text: ' They stayed for the rest of the week.' },
  { startTime: 4950.51, person: 'Aleix', text: " We're loving this." },
  {
    startTime: 4952.05,
    person: 'Aleix',
    text: " It's like, because the developers were like, oh, we don't understand this."
  },
  {
    startTime: 4955.29,
    person: 'Aleix',
    text: ' And they loved how people were interested in the business.'
  },
  {
    startTime: 4958.55,
    person: 'Aleix',
    text: ' And they had like, oh, we thought developers, they only wanted tech.'
  },
  {
    startTime: 4962.07,
    person: 'Aleix',
    text: ' But indeed, this team is asking us very interesting questions.'
  },
  { startTime: 4965.57, person: 'Aleix', text: ' And we are dealing with a lot of things.' },
  { startTime: 4967.37, person: 'Aleix', text: ' We are sharing them.' },
  { startTime: 4968.55, person: 'Aleix', text: ' People is super active on the conversation.' },
  {
    startTime: 4972.27,
    person: 'Aleix',
    text: ' And people is able to put all the unknowns or decisions into one place.'
  },
  {
    startTime: 4977.51,
    person: 'Aleix',
    text: ' And at the end, everyone felt that, okay, we know what we need to build.'
  },
  { startTime: 4980.95, person: 'Aleix', text: ' And we know what is risky.' },
  { startTime: 4982.57, person: 'Aleix', text: ' We know how we will release this.' },
  { startTime: 4984.35, person: 'Aleix', text: ' And everyone was happy.' },
  {
    startTime: 4986.29,
    person: 'Aleix',
    text: ' So we move into we being told by us changing the dynamic into very collaborative thing.'
  },
  {
    startTime: 4992.67,
    person: 'Aleix',
    text: ' And all the cognitive flow as understanding the problem, communication between people was reduced by putting everything in the same room and adapting the workshop to the business, not the business to EventStorming.'
  },
  { startTime: 5005.29, person: 'Aleix', text: ' So that was key.' },
  {
    startTime: 5006.69,
    person: 'Aleix',
    text: " It's like, EventStorming, sometimes we want to force EventStorming."
  },
  {
    startTime: 5009.21,
    person: 'Aleix',
    text: ' But people saying like, oh, you need to talk in the past events in sticky notes.'
  },
  { startTime: 5014.57, person: 'Aleix', text: " It's like, what the hell is this?" },
  { startTime: 5016.09, person: 'Aleix', text: " Sometimes it doesn't work." },
  {
    startTime: 5018.11,
    person: 'Aleix',
    text: ' So you need to put everything there for like, hey, tell me your business objectives, which is the features you want.'
  },
  { startTime: 5023.17, person: 'Aleix', text: ' Tell me the features.' },
  { startTime: 5024.07, person: 'Aleix', text: " Don't talk about that." },
  { startTime: 5025.63, person: 'Aleix', text: ' You can talk about this.' },
  { startTime: 5027.33, person: 'Aleix', text: ' The product needs to do this.' },
  { startTime: 5029.05, person: 'Aleix', text: ' Great.' },
  { startTime: 5030.37, person: 'Aleix', text: ' To which user?' },
  { startTime: 5031.67, person: 'Aleix', text: ' This user.' },
  { startTime: 5032.19, person: 'Aleix', text: ' Okay, which is this user?' },
  { startTime: 5033.93, person: 'Aleix', text: ' Oh, this user is the owner of the account.' },
  { startTime: 5036.25, person: 'Aleix', text: ' Okay, what do they need?' },
  { startTime: 5037.79, person: 'Aleix', text: ' Oh, well, they need this and that.' },
  { startTime: 5038.87, person: 'Aleix', text: ' Okay, great.' },
  { startTime: 5039.77, person: 'Aleix', text: ' How this helps the business?' },
  { startTime: 5041.55, person: 'Aleix', text: " Oh, they don't have the business." },
  {
    startTime: 5042.63,
    person: 'Aleix',
    text: " Okay, can we just park this because it's low impact on the business?"
  },
  { startTime: 5045.93, person: 'Aleix', text: ' Like, yes.' },
  { startTime: 5047.05, person: 'Aleix', text: " Okay, let's talk about the next thing." },
  {
    startTime: 5049.47,
    person: 'Aleix',
    text: ' And having everyone together talking about this, oh, it was enjoyable.'
  },
  { startTime: 5054.89, person: 'Aleix', text: ' And this thing become a norm.' },
  {
    startTime: 5056.59,
    person: 'Aleix',
    text: " And then on the next following, it was like, oh, it's happening in one month, we have the quarterly planning."
  },
  {
    startTime: 5063.47,
    person: 'Aleix',
    text: " Two weeks earlier, okay, let's have the conversations."
  },
  { startTime: 5066.05, person: 'Aleix', text: ' Everyone was involved.' },
  {
    startTime: 5067.31,
    person: 'Aleix',
    text: " And that's how you reduce again, by changing the environment."
  },
  { startTime: 5073.01, person: 'Aleix', text: ' And like, yes, that worked.' },
  { startTime: 5075.01, person: 'Aleix', text: ' Otherwise, I will try something else.' },
  {
    startTime: 5077.41,
    person: 'Aleix',
    text: ' So I would say that a lot of the conflict happens because of conversations or the lack of conversations.'
  },
  {
    startTime: 5083.03,
    person: 'Aleix',
    text: ' So focussing on that give way better results than trying to focus on what you mentioned about this person gives a hand over a hand over.'
  },
  { startTime: 5092.27, person: 'Aleix', text: " Yeah, it's like, don't do that." },
  { startTime: 5093.55, person: 'Aleix', text: ' Put a room, everyone together, talk.' },
  { startTime: 5096.59, person: 'Aleix', text: ' You need to know how to facilitate.' },
  { startTime: 5098.61, person: 'Aleix', text: " That's true." },
  { startTime: 5099.63, person: 'Karol', text: ' This opens a another drawer in my head.' },
  {
    startTime: 5103.51,
    person: 'Karol',
    text: " It's like, oh, are we actually talking about Conway's law here?"
  },
  {
    startTime: 5108.87,
    person: 'Karol',
    text: " Yeah, in essence, in a certain sense, this is Conway's law, the way that the way we structure our system, the way we build is a reflection of the organisation communication."
  },
  {
    startTime: 5121.05,
    person: 'Karol',
    text: " So if we're developing shitty software, it's a reflection of how we communicate in a sense, right?"
  },
  {
    startTime: 5128.47,
    person: 'Karol',
    text: ' Or how we divide and where we have frictions is also how we communicate and design.'
  },
  {
    startTime: 5135.69,
    person: 'Karol',
    text: " And if we ignore Conway's law and put two or three teams on the same repository, there's going to be friction."
  },
  {
    startTime: 5143.13,
    person: 'Karol',
    text: " If there's no proper communication, if there's no proper dismantling of the cognitive load that we create by putting three different teams on the same problem space or same code or same domain, and they do not cooperate properly, and we do not manage that their cooperation, or if we do not do the reverse Conway manoeuvre to adjust how we communicate to what we're trying to achieve."
  },
  {
    startTime: 5171.49,
    person: 'Aleix',
    text: " Yes, what I will, it's happened at way too many levels."
  },
  {
    startTime: 5177.03,
    person: 'Aleix',
    text: ' Because first, the people that were communicating was PMs between them.'
  },
  {
    startTime: 5184.87,
    person: 'Aleix',
    text: ' So by that already creates a bias about what will be done.'
  },
  {
    startTime: 5189.23,
    person: 'Aleix',
    text: " Of course, then what happens is that if people don't like to be part of the business conversations, then also creates a structure about how things will be done."
  },
  {
    startTime: 5198.39,
    person: 'Aleix',
    text: ' So in order to that, we need to do multiple things.'
  },
  { startTime: 5201.47, person: 'Aleix', text: ' One was changing the hiring process.' },
  {
    startTime: 5203.39,
    person: 'Aleix',
    text: " It's like we need people that are product-minded developers, people that like to talk."
  },
  {
    startTime: 5208.01,
    person: 'Aleix',
    text: ' So how we solve things is like, instead of the product manager talking to the business and then getting requirements and then talking to the tech lead and the tech lead assigning work, no, no, no, no.'
  },
  {
    startTime: 5221.11,
    person: 'Aleix',
    text: ' You senior or you meet developer or junior, we always say junior, you need to go with another person, but you need to be part of the conversation.'
  },
  { startTime: 5227.83, person: 'Aleix', text: ' You are the future lead of this.' },
  {
    startTime: 5229.71,
    person: 'Aleix',
    text: ' And you need to understand all the business requirements, understand the trade-offs and then communicate for the rest of the team.'
  },
  { startTime: 5235.03, person: 'Aleix', text: ' And this is the expectation.' },
  { startTime: 5236.31, person: 'Aleix', text: " It's like you need to communicate this part." },
  {
    startTime: 5239.27,
    person: 'Aleix',
    text: ' There is one bad consequences about working like this, which is not very friendly for people that are in the spectrum.'
  },
  { startTime: 5245.87, person: 'Karol', text: ' Oh, yeah.' },
  {
    startTime: 5246.65,
    person: 'Aleix',
    text: ' So be careful because not everyone needs to be safe.'
  },
  {
    startTime: 5250.65,
    person: 'Aleix',
    text: " There is people that don't feel comfortable on this."
  },
  { startTime: 5253.93, person: 'Aleix', text: " So don't force these things." },
  {
    startTime: 5257.59,
    person: 'Aleix',
    text: ' But if they are not in the spectrum, it works quite well.'
  },
  { startTime: 5262.55, person: 'Aleix', text: ' Or at least it worked quite well for us.' },
  {
    startTime: 5265.87,
    person: 'Aleix',
    text: " I'm sure that some people will say like, no, in this case, it didn't work."
  },
  { startTime: 5268.55, person: 'Aleix', text: ' Of course, you are right.' },
  { startTime: 5271.13, person: 'Karol', text: ' These are individual assessments, basically.' },
  {
    startTime: 5275.05,
    person: 'Karol',
    text: ' You need to always take into account that everybody is different and they have their own way that their brain works.'
  },
  { startTime: 5284.51, person: 'Aleix', text: ' Exactly.' },
  {
    startTime: 5284.79,
    person: 'Aleix',
    text: " So I'm sharing my experience and it will not apply in yours, but if it works for someone, I'm happy."
  },
  { startTime: 5289.35, person: 'Aleix', text: ' So these work quite well.' },
  { startTime: 5291.31, person: 'Aleix', text: ' And then we start talking between teams.' },
  {
    startTime: 5294.35,
    person: 'Aleix',
    text: ' Because before, sometimes change happens or whatever reason.'
  },
  { startTime: 5298.43, person: 'Aleix', text: ' Oh, I remember.' },
  {
    startTime: 5299.63,
    person: 'Aleix',
    text: ' Before, the things happened in DMs. So people are like, oh, why did this happen?'
  },
  {
    startTime: 5304.55,
    person: 'Aleix',
    text: " Oh, this person told me like, okay, stop this communication because we're we will concentrate everything to the PMs. So you try to solve a problem about information being missed from people to person or person to person by concentrating all the information into the PMs. And also because of reporting."
  },
  { startTime: 5322.15, person: 'Karol', text: ' Yeah.' },
  { startTime: 5322.45, person: 'Aleix', text: ' So the problem is how you solve that.' },
  {
    startTime: 5324.03,
    person: 'Aleix',
    text: " It's not forcing everyone to go through PMs. It's like talking in a shared channel so that you have all the information available for everyone else."
  },
  {
    startTime: 5335.43,
    person: 'Aleix',
    text: ' And again, good intentions, not good results, and not challenging the approach, and then you can improve it.'
  },
  {
    startTime: 5343.27,
    person: 'Aleix',
    text: ' So we solve this like, hey, we create open channels.'
  },
  {
    startTime: 5346.93,
    person: 'Aleix',
    text: ' Everyone else that is involved in our team can post things on Slack.'
  },
  {
    startTime: 5350.65,
    person: 'Aleix',
    text: " And that's how you have the information radiation."
  },
  { startTime: 5353.11, person: 'Aleix', text: ' Everyone is informed.' },
  { startTime: 5354.43, person: 'Aleix', text: ' And then again, you talk to the people.' },
  {
    startTime: 5356.61,
    person: 'Aleix',
    text: ' Please, if you go through PMs, you redirect people to the private thing, and then you reply things there.'
  },
  {
    startTime: 5362.67,
    person: 'Aleix',
    text: " Or if this doesn't happen for whatever reason, you'll copy paste or do a screenshot, and you post it publicly."
  },
  { startTime: 5368.95, person: 'Aleix', text: ' Right?' },
  {
    startTime: 5369.41,
    person: 'Aleix',
    text: " And that's how we also improve the cognitive load on people because the PMs, those teams, they were overloaded."
  },
  {
    startTime: 5376.91,
    person: 'Aleix',
    text: ' And of course, they cannot have time for the developers for explaining things, because the reporting it was that high.'
  },
  {
    startTime: 5384.81,
    person: 'Aleix',
    text: " And moving all the information around and coordination that it's when they were unable to do the actual work, which is explaining the domain and what needs to be done in conjunction with the developer."
  },
  {
    startTime: 5396.29,
    person: 'Karol',
    text: ' But then you land up with a different cognitive load problem.'
  },
  {
    startTime: 5400.89,
    person: 'Karol',
    text: ' If you share everything in open channels, perfectly fine.'
  },
  {
    startTime: 5404.75,
    person: 'Karol',
    text: ' You avoid all the DMs everywhere so that the information is out in the open.'
  },
  {
    startTime: 5410.97,
    person: 'Karol',
    text: ' But then basically you create an information overload on every single member in that channel.'
  },
  {
    startTime: 5417.41,
    person: 'Karol',
    text: ' And then if you have multiple channels that people are watching or added into because you need to have access to that information, then people start to go crazy about, why do I even need that?'
  },
  { startTime: 5432.03, person: 'Karol', text: ' Why do I need to be in there?' },
  {
    startTime: 5433.43,
    person: 'Karol',
    text: ' Why do I need to get those pings every single time?'
  },
  { startTime: 5435.99, person: 'Karol', text: ' Why can I just leave that channel?' },
  {
    startTime: 5438.91,
    person: 'Karol',
    text: ' And then you get people, instead of doing their work, they are looking at those channels because somebody pinged in that channel.'
  },
  { startTime: 5447.55, person: 'Karol', text: " It's like, what is this again?" },
  {
    startTime: 5449.63,
    person: 'Karol',
    text: ' And then you can go overboard the other direction.'
  },
  {
    startTime: 5454.53,
    person: 'Aleix',
    text: ' We solve that in another way, which is because we do pairing.'
  },
  { startTime: 5458.73, person: 'Aleix', text: ' We did pairing back then.' },
  {
    startTime: 5460.73,
    person: 'Aleix',
    text: ' So we did two things, which was quite interesting.'
  },
  {
    startTime: 5464.11,
    person: 'Aleix',
    text: ' This tool is not longer available, but it can be solved with another tool.'
  },
  {
    startTime: 5467.19,
    person: 'Aleix',
    text: ' But it was called Around and it was acquired by Miro.'
  },
  {
    startTime: 5471.45,
    person: 'Aleix',
    text: ' But you can be done that with Zoom as well, which is as leaders, we stay as available as possible in a Zoom channel with breaking rooms or whatever.'
  },
  {
    startTime: 5482.73,
    person: 'Aleix',
    text: ' And everyone is in that, in breaking rooms, working in pairs.'
  },
  {
    startTime: 5486.07,
    person: 'Aleix',
    text: ' And then for example, you have three pairs, meaning you have two developers in each pair.'
  },
  {
    startTime: 5491.39,
    person: 'Aleix',
    text: ' There is one pair assigning to add new things and one pair assigning to supporting.'
  },
  {
    startTime: 5499.15,
    person: 'Aleix',
    text: ' So the only people who need to look at the channel is the supporting pair because they are doing supporting work.'
  },
  {
    startTime: 5505.55,
    person: 'Aleix',
    text: ' It can mean things like doing refactorings, improving the system resiliency, supporting other teams.'
  },
  { startTime: 5511.07, person: 'Aleix', text: ' So the other two pairs can focus on delivery.' },
  { startTime: 5514.43, person: 'Aleix', text: ' Right?' },
  {
    startTime: 5515.31,
    person: 'Aleix',
    text: ' So they can just like, okay, we just do this feature.'
  },
  { startTime: 5518.45, person: 'Aleix', text: ' We share knowledge and we go.' },
  {
    startTime: 5520.93,
    person: 'Aleix',
    text: " And if it's not a huge incident, the supporting pair will do the job."
  },
  {
    startTime: 5526.89,
    person: 'Aleix',
    text: ' And because you have dailies and you have a rotation, all the information is shared quite approachable, I would say.'
  },
  { startTime: 5536.01, person: 'Aleix', text: " So that's how we solved that part." },
  {
    startTime: 5538.45,
    person: 'Aleix',
    text: ' Of course, this works because we have pairing and we have trunk-based development.'
  },
  {
    startTime: 5543.87,
    person: 'Aleix',
    text: ' And we followed a lot of accelerated practises and team topologies principles.'
  },
  {
    startTime: 5548.53,
    person: 'Aleix',
    text: " When you reach this level of engineering maturity, that's what happened."
  },
  {
    startTime: 5554.27,
    person: 'Aleix',
    text: " If you want to work with a Kanban maturity model, I am loving this because I'm a Kanban maturity model."
  },
  { startTime: 5566.69, person: 'Aleix', text: ' Do you know this model?' },
  { startTime: 5569.13, person: 'Karol', text: " I haven't worked in Kanban that much." },
  {
    startTime: 5574.61,
    person: 'Karol',
    text: " I'm usually forced into a twisted version of Scrum for whatever reasons."
  },
  { startTime: 5581.09, person: 'Karol', text: ' It never is Scrum.' },
  {
    startTime: 5582.81,
    person: 'Karol',
    text: " I'm a trained Scrum master and I haven't seen yet a proper use of Scrum in any organisation."
  },
  { startTime: 5589.28, person: 'Karol', text: " So it's very interesting." },
  {
    startTime: 5591.07,
    person: 'Karol',
    text: " We're having sprints, we're having all those ceremonies, but they're actually not related to anything."
  },
  {
    startTime: 5596.05,
    person: 'Karol',
    text: " So instead of people and people and people, it's processes, processes, processes."
  },
  { startTime: 5601.35, person: 'Karol', text: " So at times it's very weird having that load." },
  { startTime: 5606.61, person: 'Aleix', text: ' Yes, Kanban maturity model.' },
  { startTime: 5608.59, person: 'Aleix', text: ' Yes.' },
  {
    startTime: 5609.21,
    person: 'Aleix',
    text: " So this is part of, I always share this on my workshop on engineering strategy because I love this one, which is I use this one and say, hey, when you are in a team that is in a level zero, which means that they lack order, they're poor and stressed, they're unpredictable results and full of heroics, of course you have a lot of problems."
  },
  {
    startTime: 5632.91,
    person: 'Aleix',
    text: ' But as you make more, you start maturing and you move from lack of order to emerging processes into some point you manage demand, you have consistent end-to-end process, almost no heroics and short delivery times.'
  },
  {
    startTime: 5646.59,
    person: 'Aleix',
    text: ' When you reach this level of maturity, and this of course is through talking well with improving the processes, improving the architecture, trying best development, good engineering practises, reducing errors, or at least one error is acceptable.'
  },
  { startTime: 5663.27, person: 'Aleix', text: " The same error twice, it's a problem." },
  { startTime: 5665.57, person: 'Aleix', text: ' Three times we have a huge problem.' },
  {
    startTime: 5667.37,
    person: 'Aleix',
    text: " So you have this thing about, hey, we have this problem, let's improve the systems or how we work so it doesn't happen again."
  },
  {
    startTime: 5673.69,
    person: 'Aleix',
    text: ' And if you repeat this enough, after three months you are in a good shape.'
  },
  { startTime: 5678.91, person: 'Aleix', text: " So that's what we did." },
  {
    startTime: 5680.97,
    person: 'Aleix',
    text: ' Every time we found a problem, we see how we can solve this.'
  },
  {
    startTime: 5685.91,
    person: 'Aleix',
    text: " And a lot of this maturity was driven by team topologies principles, but a lot of them where we didn't start with team topologies principles, we started with Accelerate and all the DevOps principles about running it and drug-based development and pairing and testing and how this is called this product mindset."
  },
  {
    startTime: 5709.53,
    person: 'Aleix',
    text: " And that's how we reached this level of customer-driven."
  },
  {
    startTime: 5713.89,
    person: 'Aleix',
    text: ' And I say this level of customer-driven because moving from this to here, I was able to drive most of it.'
  },
  {
    startTime: 5723.39,
    person: 'Aleix',
    text: ' Because you are improving things as engineering and you can do a lot of things.'
  },
  {
    startTime: 5728.19,
    person: 'Aleix',
    text: ' But moving into customer-driven, you need product to be involved and design.'
  },
  { startTime: 5733.87, person: 'Aleix', text: ' You cannot do this.' },
  {
    startTime: 5734.73,
    person: 'Aleix',
    text: ' So you start having this collaborative collaboration with multiple, instead of having handovers, you start collaborating and you start seeing good things.'
  },
  { startTime: 5743.25, person: 'Aleix', text: ' And we ended up after, this took us a year.' },
  {
    startTime: 5746.89,
    person: 'Aleix',
    text: " Maybe it's not this, but we moved from here to here in four to six months and here to here in one year."
  },
  {
    startTime: 5755.23,
    person: 'Aleix',
    text: ' And we were moving into feed for purpose at some point, but this took a lot of us our time to get here.'
  },
  {
    startTime: 5763.81,
    person: 'Aleix',
    text: ' But again, it was a constant effort into how we can improve a culture about improvement on dedicated improvement.'
  },
  {
    startTime: 5773.43,
    person: 'Aleix',
    text: " And of course you're saying, hey, I have six developers in one team and I will dedicate two only on improving things."
  },
  { startTime: 5781.99, person: 'Aleix', text: ' Okay.' },
  {
    startTime: 5782.51,
    person: 'Aleix',
    text: ' Just saying like, just telling you that you have three schemes of improvement.'
  },
  { startTime: 5785.71, person: 'Aleix', text: ' You have three lines of work.' },
  {
    startTime: 5788.05,
    person: 'Aleix',
    text: " You're telling me that you are taking the 33% of it into improvement."
  },
  { startTime: 5792.47, person: 'Aleix', text: ' I say, yes.' },
  { startTime: 5794.37, person: 'Aleix', text: ' But then you see the results.' },
  {
    startTime: 5795.71,
    person: 'Aleix',
    text: " It's like, oh, we are getting results every day."
  },
  { startTime: 5798.15, person: 'Aleix', text: ' They are like, fine.' },
  {
    startTime: 5799.47,
    person: 'Aleix',
    text: ' Of course there is a section that then you meet everyone to do something, but all of that and say, hey, which is the cognitive load?'
  },
  { startTime: 5807.11, person: 'Aleix', text: ' What is causing cognitive load?' },
  {
    startTime: 5808.37,
    person: 'Aleix',
    text: ' Is this, okay, we need to dedicate things to make things happen.'
  },
  {
    startTime: 5811.89,
    person: 'Aleix',
    text: ' It cannot be about, or at least it will frustrate me a lot, which is we identify there is problems to be solved, but then you do nothing about them.'
  },
  { startTime: 5820.67, person: 'Aleix', text: ' I am an engineer.' },
  { startTime: 5822.25, person: 'Aleix', text: ' I cannot do that.' },
  { startTime: 5823.47, person: 'Aleix', text: " It's like, we need to do something." },
  {
    startTime: 5826.05,
    person: 'Aleix',
    text: " It doesn't mean that we need to stop everything."
  },
  {
    startTime: 5829.71,
    person: 'Aleix',
    text: " It means that we need to do a little improvement so next time it's less painful."
  },
  {
    startTime: 5833.85,
    person: 'Aleix',
    text: " And it was a combination of detecting the Dora metrics, some cognitive load, some team topologies, principles, things like, hey, you're collaborating with all the teams all the time."
  },
  { startTime: 5845.73, person: 'Aleix', text: ' This is not a good sign.' },
  { startTime: 5847.89, person: 'Aleix', text: ' We need to move to something else.' },
  { startTime: 5850.55, person: 'Aleix', text: ' So we need to, I like this a lot.' },
  { startTime: 5852.25, person: 'Aleix', text: ' We need to collaborate.' },
  { startTime: 5853.67, person: 'Aleix', text: ' So we stopped collaborating.' },
  { startTime: 5857.09, person: 'Aleix', text: " That doesn't sound intuitive." },
  {
    startTime: 5860.53,
    person: 'Aleix',
    text: ' Because usually you, at least 2020 was a year where collaboration was good.'
  },
  {
    startTime: 5866.95,
    person: 'Aleix',
    text: ' Like, oh, you need to collaborate because collaboration is good.'
  },
  {
    startTime: 5870.71,
    person: 'Aleix',
    text: ' And the more you collaborate, the better you do job.'
  },
  {
    startTime: 5872.77,
    person: 'Aleix',
    text: " It's like, no, you don't want to be collaborating with 12 people each day."
  },
  { startTime: 5876.95, person: 'Aleix', text: " At least I'm an introvert." },
  { startTime: 5878.15, person: 'Aleix', text: ' The less people I work, the better.' },
  {
    startTime: 5881.61,
    person: 'Aleix',
    text: ' So I need to work with the right people in the nice moment, but not with too many people because it will drain my energy.'
  },
  {
    startTime: 5887.17,
    person: 'Aleix',
    text: ' So it was also like kind of my introvert nature trying to pull like, okay, can we kind of reduce the amount of collaboration between people?'
  },
  { startTime: 5895.17, person: 'Aleix', text: ' Thank you.' },
  {
    startTime: 5897.05,
    person: 'Aleix',
    text: " So that instead of telling people how to use API, can you just send an open API schema and that's it?"
  },
  { startTime: 5902.69, person: 'Aleix', text: ' Yeah.' },
  { startTime: 5903.45, person: 'Karol', text: " I'm not, I'm an ambivert." },
  {
    startTime: 5905.45,
    person: 'Karol',
    text: " So basically I'm a bit chaotic in that sense, but 80% of the time my behaviour is introverted."
  },
  { startTime: 5911.03, person: 'Karol', text: ' So leave me the hell alone.' },
  {
    startTime: 5913.01,
    person: 'Karol',
    text: " Well, 20% of the time in mostly in social interactions, I'm perceived as an extrovert."
  },
  {
    startTime: 5920.33,
    person: 'Karol',
    text: ' So basically I stumbled into something like this recently.'
  },
  { startTime: 5923.81, person: 'Karol', text: ' This is my social battery.' },
  { startTime: 5925.55, person: 'Aleix', text: ' I love it.' },
  {
    startTime: 5926.35,
    person: 'Karol',
    text: " And I have these on my team's background at work."
  },
  {
    startTime: 5929.55,
    person: 'Karol',
    text: ' So I basically changed the background depending on how my social battery is.'
  },
  {
    startTime: 5933.13,
    person: 'Karol',
    text: " So if it's charging or depleting, and what is the state, and basically during conversations, I just go like, I'm going down here."
  },
  {
    startTime: 5941.49,
    person: 'Karol',
    text: ' I heard that the person that introduced me to the concept was, is the neurodiversity community leader at Capgemini where I work at, at the moment.'
  },
  {
    startTime: 5950.91,
    person: 'Karol',
    text: " And she was like, I was in a conversation with my manager and during that conversation, the slide, it's sliding the spin down to zero."
  },
  { startTime: 5959.95, person: 'Karol', text: " It's like, oh, you can do that?" },
  { startTime: 5962.89, person: 'Karol', text: ' Oh, okay.' },
  { startTime: 5963.37, person: 'Karol', text: ' That actually is great.' },
  { startTime: 5965.29, person: 'Karol', text: ' So yes, collaborating.' },
  { startTime: 5969.69, person: 'Karol', text: ' Okay.' },
  { startTime: 5970.39, person: 'Karol', text: ' You got me.' },
  { startTime: 5972.79, person: 'Karol', text: ' Good indicator there.' },
  { startTime: 5974.55, person: 'Karol', text: ' Yeah.' },
  { startTime: 5974.83, person: 'Karol', text: " That's another one." },
  { startTime: 5976.69, person: 'Karol', text: ' Amazing in that sense.' },
  {
    startTime: 5979.27,
    person: 'Karol',
    text: ' But this all, all of this basically over collaborating, under collaborating, it all contributes to some sort of cognitive load, good or bad.'
  },
  { startTime: 5992.25, person: 'Karol', text: " It's a matter of finding that balance, right?" },
  {
    startTime: 5999.05,
    person: 'Aleix',
    text: " It's knowing when you need to collaborate and when you're not."
  },
  {
    startTime: 6002.25,
    person: 'Aleix',
    text: ' When you are having a good collaboration, usually as a manager, you are in constant collaboration.'
  },
  {
    startTime: 6007.59,
    person: 'Aleix',
    text: ' The thing is that all the team is in constant collaboration, but you need them to focus.'
  },
  {
    startTime: 6011.65,
    person: 'Aleix',
    text: ' Sometimes you need them to be isolated so they can really focus on something.'
  },
  { startTime: 6017.61, person: 'Aleix', text: ' Maybe they need to be exposed.' },
  {
    startTime: 6018.73,
    person: 'Aleix',
    text: ' But I think how I see it is that things are changing or we need to adapt to each context and you need to constantly reassess, hey, I am doing the thing that is having the most impact in the organisation, whatever that means.'
  },
  {
    startTime: 6034.73,
    person: 'Aleix',
    text: ' It can be, because it can be focussing performance or it can be focussing on unlocking a huge critical project.'
  },
  {
    startTime: 6041.73,
    person: 'Aleix',
    text: ' So you will need to be constantly asking yourself, I am here and I should be here or I should be somewhere else.'
  },
  {
    startTime: 6049.63,
    person: 'Aleix',
    text: ' And sometimes it happens that I, as a head of engineering, there is a critical project and sometimes you need to go very down into one thing.'
  },
  {
    startTime: 6056.95,
    person: 'Aleix',
    text: ' And sometimes you need to be careful because like why this person is here, right?'
  },
  {
    startTime: 6060.85,
    person: 'Aleix',
    text: " So you need to be very communicative about why you need to be there and you shouldn't say, sometimes that can be perceived as micromanagement if you don't explain the reasons, but you still need to be there."
  },
  {
    startTime: 6074.99,
    person: 'Aleix',
    text: " It's like, even though you can say that this is critical, so I hope you understand that I'm trying to do my best on the situation that's there."
  },
  {
    startTime: 6081.93,
    person: 'Aleix',
    text: " Feel free to tell like, hey, Aleix, we understand, but we think it's not the best formula, but for what we want to achieve, let's change that and do it in another session."
  },
  {
    startTime: 6090.15,
    person: 'Aleix',
    text: " I would say I'm happy to do that as long as we are doing this because it is, I'm saying this critically, it's not like, it's not optional, but I'm happy to do it in another format or this is a good format."
  },
  { startTime: 6100.87, person: 'Aleix', text: " So I'm part of, I'm happy to do that." },
  {
    startTime: 6105.57,
    person: 'Aleix',
    text: " But I'm sure that also having big bosses in a room of a very low team that also creates cognitive load and stress on people."
  },
  { startTime: 6112.33, person: 'Aleix', text: ' So you cannot do that all the time, right?' },
  {
    startTime: 6114.49,
    person: 'Aleix',
    text: " Because, and you shouldn't be doing that while you are there at all."
  },
  { startTime: 6117.73, person: 'Aleix', text: ' No, it needs to be specific.' },
  {
    startTime: 6120.37,
    person: 'Aleix',
    text: " But I say that because it can be, it means that you are in a very deep thing, or maybe you're included in a very big meeting with a bigger leadership or high level leadership."
  },
  { startTime: 6129.67, person: 'Aleix', text: ' And you need to adapt.' },
  {
    startTime: 6132.05,
    person: 'Aleix',
    text: ' There is this book about the elevator or architect elevator.'
  },
  { startTime: 6135.75, person: 'Aleix', text: ' Oh yeah, Gregor Hall.' },
  {
    startTime: 6137.89,
    person: 'Aleix',
    text: " So it's like, hey, sometimes the same thing in leadership, like sometimes you're talking about one year strategy."
  },
  {
    startTime: 6144.17,
    person: 'Aleix',
    text: " And next thing you're talking about very specific thing in a complicated system that is key for, if that fails, everything else will fail, right?"
  },
  { startTime: 6153.37, person: 'Aleix', text: ' So you need to adapt yourself into it.' },
  {
    startTime: 6155.97,
    person: 'Aleix',
    text: ' And this is causing cognitive load because the context switching as leaders, it is constant.'
  },
  {
    startTime: 6162.23,
    person: 'Aleix',
    text: " You need to be, you need to get used to this because you don't have, or at least you don't have focused time."
  },
  {
    startTime: 6170.69,
    person: 'Aleix',
    text: ' I, or I said, the thing that they miss the most being a manager is not listening music.'
  },
  { startTime: 6178.67, person: 'Aleix', text: ' It is like, I need my music time.' },
  {
    startTime: 6180.89,
    person: 'Aleix',
    text: " And I need to be this on sometimes what it is like, oh, let's for anything."
  },
  { startTime: 6184.89, person: 'Aleix', text: ' Like, nope, I will go alone to eat alone.' },
  {
    startTime: 6187.95,
    person: 'Aleix',
    text: ' I mean, when I go to somewhere, I will just listen to music.'
  },
  { startTime: 6190.59, person: 'Aleix', text: ' Right.' },
  {
    startTime: 6191.19,
    person: 'Aleix',
    text: ' But as a developer, I was maybe listening to music four hours a day, right?'
  },
  { startTime: 6194.91, person: 'Aleix', text: ' And it gets you and gets long.' },
  {
    startTime: 6196.75,
    person: 'Aleix',
    text: " But as a manager, it's like, maybe you're getting meeting, meeting, meeting, meeting, meeting, you eat and then meeting, meeting."
  },
  { startTime: 6203.53, person: 'Karol', text: ' I get that.' },
  { startTime: 6204.75, person: 'Karol', text: ' I get that as well.' },
  { startTime: 6206.17, person: 'Karol', text: ' So to lower my cognitive load over the day.' },
  {
    startTime: 6209.95,
    person: 'Karol',
    text: " And again, my ADHD is sometimes acting up because of the load that I'm having, like meetings back to back or something."
  },
  {
    startTime: 6217.57,
    person: 'Karol',
    text: " Basically, I'm not a fan of time blocking in a calendar, because that's sometimes creates a very different understanding of what that person does."
  },
  {
    startTime: 6229.49,
    person: 'Karol',
    text: ' But basically, I often have body doubling sessions.'
  },
  {
    startTime: 6234.51,
    person: 'Karol',
    text: " And with body doubling is basically where I listen to music, because then I need I have my focus time, I have somebody on a team's call or a discord or whatever other tool where there's a body doubling community."
  },
  { startTime: 6246.97, person: 'Karol', text: " And we declare we're doing this thing." },
  {
    startTime: 6249.07,
    person: 'Karol',
    text: " And we're creating this kind of focus time with that kind of a psychological accountability of just declaring for one another what we're doing."
  },
  {
    startTime: 6259.75,
    person: 'Karol',
    text: ' And those tasks, they do not have to be related at all.'
  },
  { startTime: 6263.55, person: 'Karol', text: " We don't even do the same things." },
  {
    startTime: 6265.61,
    person: 'Karol',
    text: ' We are not even in the same units or whatever that may be.'
  },
  {
    startTime: 6269.01,
    person: 'Karol',
    text: ' But this is the time where we declare, focus, listen to music, go with the job done.'
  },
  {
    startTime: 6274.11,
    person: 'Karol',
    text: " And it's difficult to do that when you're higher up as a head of engineering, I don't know, CEO or something like that, because that's meetings, meetings, meetings, meetings."
  },
  { startTime: 6283.97, person: 'Aleix', text: " Yeah, I'm sure that's the context." },
  { startTime: 6286.11, person: 'Aleix', text: " I'm sure that the CEO, I've never been a CEO." },
  { startTime: 6289.35, person: 'Aleix', text: " So I'm sure that will be quite chaotic." },
  {
    startTime: 6291.99,
    person: 'Aleix',
    text: ' But as a head of engineering, what I was doing is with my peer when he had the product was like, Hey, I need to focus on this.'
  },
  {
    startTime: 6299.79,
    person: 'Aleix',
    text: ' Can we just be in the same meeting doing our work?'
  },
  {
    startTime: 6303.55,
    person: 'Aleix',
    text: ' And then we just chat when we need synchronisation on something.'
  },
  {
    startTime: 6306.81,
    person: 'Aleix',
    text: " And then it's like, maybe you're like typing and the other person is maybe listening music, but also typing, and then you are available."
  },
  {
    startTime: 6312.03,
    person: 'Aleix',
    text: " The other thing I also like a lot is like, you are in a Zoom meeting that nobody is in, and then you're just typing."
  },
  {
    startTime: 6317.33,
    person: 'Aleix',
    text: ' And then someone is like, Hey Alex, do you have a moment?'
  },
  { startTime: 6318.97, person: 'Aleix', text: ' Like, sure, tell me.' },
  {
    startTime: 6321.45,
    person: 'Aleix',
    text: " And that is for me, it's like team available time."
  },
  { startTime: 6324.11, person: 'Aleix', text: " I'm available for you." },
  { startTime: 6325.53, person: 'Aleix', text: ' You can jump in whenever you need.' },
  { startTime: 6327.31, person: 'Aleix', text: ' You can interrupt me.' },
  {
    startTime: 6328.41,
    person: 'Aleix',
    text: " It doesn't matter because I'm doing maybe something or researching something."
  },
  {
    startTime: 6332.83,
    person: 'Aleix',
    text: ' Then me being open, like during this time, you can interrupt me five times, 10 times.'
  },
  { startTime: 6338.63, person: 'Aleix', text: ' I will not complain.' },
  {
    startTime: 6339.87,
    person: 'Aleix',
    text: ' You can also bring me to another meeting and I will be joined there.'
  },
  {
    startTime: 6343.55,
    person: 'Aleix',
    text: " So having one hour a day for interruptions just so people know that they can bother you, it's very helpful."
  },
  { startTime: 6352.39, person: 'Aleix', text: ' The higher you are, the harder it is.' },
  {
    startTime: 6353.91,
    person: 'Aleix',
    text: ' But when I was in a team level with the PM, she was amazing.'
  },
  { startTime: 6359.57, person: 'Aleix', text: " One of the best PM I've worked with." },
  {
    startTime: 6361.79,
    person: 'Aleix',
    text: ' I love that we sometimes we were like in this shared room doing nothing.'
  },
  {
    startTime: 6366.43,
    person: 'Aleix',
    text: ' And then the team being in talking about something and the speed about resolving issues was like minutes.'
  },
  {
    startTime: 6374.17,
    person: 'Aleix',
    text: " I've never been in that environment like that fast."
  },
  {
    startTime: 6378.27,
    person: 'Aleix',
    text: " Well, if you're in an office, maybe you're in this fast."
  },
  {
    startTime: 6382.69,
    person: 'Aleix',
    text: ' But in remote, if you need to say people like, hey, can you jump into a call?'
  },
  { startTime: 6388.33, person: 'Aleix', text: " There's no, it's very hard." },
  {
    startTime: 6389.93,
    person: 'Aleix',
    text: " But if you're always available, that helps people a lot to do the same things."
  },
  { startTime: 6396.27, person: 'Karol', text: ' All right.' },
  { startTime: 6397.11, person: 'Karol', text: " Aleix, we're coming to two hours of the stream." },
  {
    startTime: 6399.87,
    person: 'Karol',
    text: " Let's do a little bit of backtracking and go back to the root topic being understanding the cognitive load that we're dealing with."
  },
  {
    startTime: 6409.77,
    person: 'Karol',
    text: " So, if we could place cognitive load and from the perspective of team topologies also, so the team being the lowest unit of understanding and give some advice to anybody who's watching us now or will be watching the recording as to how to start understanding the cognitive load that people are dealing with in their own environments that they're at."
  },
  { startTime: 6440.97, person: 'Karol', text: ' What to look for?' },
  {
    startTime: 6442.11,
    person: 'Karol',
    text: ' Are there like common things that you can watch for to find and understand that this is the cognitive load?'
  },
  {
    startTime: 6450.02,
    person: 'Aleix',
    text: ' The easiest way is delegating everything to a tool that is prepared for this.'
  },
  {
    startTime: 6454.4,
    person: 'Aleix',
    text: ' And I say this because being honest, the amount of complexity about assessing a cognitive load is huge.'
  },
  { startTime: 6462.5, person: 'Aleix', text: ' So, you can, I will share screen briefly.' },
  { startTime: 6465.68, person: 'Aleix', text: ' All right.' },
  { startTime: 6468.02, person: 'Aleix', text: ' There you go.' },
  { startTime: 6469.24, person: 'Aleix', text: ' So, this is the temperature.' },
  {
    startTime: 6472.78,
    person: 'Aleix',
    text: ' Being honest here, you can see all drivers and it is distilled and it gives you all information about all the drivers that you can find on a team with things that you can do to improve it.'
  },
  {
    startTime: 6484.42,
    person: 'Aleix',
    text: " You can go to the application, you can see a demo and it's fine."
  },
  { startTime: 6488.04, person: 'Aleix', text: ' I will not go in more deep.' },
  {
    startTime: 6489.76,
    person: 'Aleix',
    text: ' So, going from zero to one without you learning everything about cognitive load, temperature for me is the go-to tool.'
  },
  { startTime: 6498.7, person: 'Aleix', text: ' Right now, I think we did an amazing job.' },
  { startTime: 6502, person: 'Aleix', text: " And it's a standalone tool." },
  {
    startTime: 6503.5,
    person: 'Aleix',
    text: ' It works and you can get multiple teams to do this.'
  },
  {
    startTime: 6509.1,
    person: 'Aleix',
    text: ' If you, for example, you say, hey, for whatever reason in your company, you cannot externalise this to an external tool because of legal, for example.'
  },
  {
    startTime: 6516.94,
    person: 'Aleix',
    text: ' I can imagine multiple reasons why people choose, for example, to not.'
  },
  { startTime: 6522.6, person: 'Aleix', text: ' Then I go back to maybe read the drivers.' },
  {
    startTime: 6525.78,
    person: 'Aleix',
    text: ' But the important part is during the retrospectives, have a moment to explain what is cognitive load and somehow different cognitive loads about this.'
  },
  {
    startTime: 6536.53,
    person: 'Aleix',
    text: ' Cognitive load can drive people away from the conversation you need to have.'
  },
  {
    startTime: 6542.09,
    person: 'Aleix',
    text: " So, instead of using cognitive load, you can use developer's pain."
  },
  { startTime: 6545.45, person: 'Aleix', text: ' And you can ask them, which are your pains?' },
  { startTime: 6548.19, person: 'Aleix', text: ' Which is preventing you to do your job?' },
  {
    startTime: 6551.87,
    person: 'Aleix',
    text: ' What is things that and then you open an open question.'
  },
  { startTime: 6554.91, person: 'Aleix', text: ' You have a retrospective theme.' },
  { startTime: 6556.95, person: 'Aleix', text: ' So, use mirror, for example.' },
  { startTime: 6558.35, person: 'Aleix', text: ' And then you ask people to put the stickies.' },
  {
    startTime: 6561.09,
    person: 'Aleix',
    text: ' Then you have patterns and then you explore them.'
  },
  {
    startTime: 6564.39,
    person: 'Aleix',
    text: ' Based on your experience, usually people find their immediate pain, dig deeper about what is the thing.'
  },
  { startTime: 6573.73, person: 'Aleix', text: ' Oh, my problem is zero.' },
  { startTime: 6575.63, person: 'Aleix', text: ' Well, why is zero?' },
  {
    startTime: 6576.67,
    person: 'Aleix',
    text: ' Well, because things are happening and changing.'
  },
  {
    startTime: 6578.97,
    person: 'Aleix',
    text: ' Oh, because you have ten stakeholders with different opinions.'
  },
  {
    startTime: 6582.59,
    person: 'Aleix',
    text: ' And then you need to drive people into the insights.'
  },
  {
    startTime: 6586.07,
    person: 'Aleix',
    text: ' You need to do that in retrospectives or things that people have a high trust environment.'
  },
  { startTime: 6591.83, person: 'Aleix', text: ' Because you need people to talk.' },
  { startTime: 6593.63, person: 'Aleix', text: " Otherwise, it doesn't work." },
  {
    startTime: 6596.57,
    person: 'Aleix',
    text: " Temperature has this level of anonymity where people can share the things and they don't need you to be in retrospective settings."
  },
  { startTime: 6605.27, person: 'Aleix', text: ' But if you have high trust, do that model.' },
  {
    startTime: 6607.91,
    person: 'Aleix',
    text: ' The only thing is that then you need to run this for every team.'
  },
  {
    startTime: 6611.67,
    person: 'Aleix',
    text: ' The good thing is that you were able to understand more of the people and be exposed.'
  },
  {
    startTime: 6616.79,
    person: 'Aleix',
    text: " So, that for me is like if you don't want to introduce the concept of cognitive load, you can introduce the concept of pain."
  },
  {
    startTime: 6622.81,
    person: 'Aleix',
    text: ' And this is very related to the developer experience surveys and similar.'
  },
  { startTime: 6626.67, person: 'Aleix', text: ' You know your teams.' },
  {
    startTime: 6627.65,
    person: 'Aleix',
    text: ' You can also do specific questions and do Google Forms with one to five.'
  },
  {
    startTime: 6633.23,
    person: 'Aleix',
    text: ' And then you do the leaker thing survey and you can do it yourself.'
  },
  {
    startTime: 6636.91,
    person: 'Aleix',
    text: ' There are a lot of companies, big ones that do this, like Shopify does it their own.'
  },
  {
    startTime: 6642.75,
    person: 'Aleix',
    text: " I'm sure that there are a lot of companies that do this by themselves."
  },
  { startTime: 6647.07, person: 'Aleix', text: ' No problem.' },
  { startTime: 6647.79, person: 'Aleix', text: ' But if you want zero effort, temperature.' },
  { startTime: 6650.81, person: 'Aleix', text: ' You want to do this.' },
  {
    startTime: 6653.59,
    person: 'Aleix',
    text: ' I started exploring pains, the developer experience and drive the conversations.'
  },
  {
    startTime: 6658.53,
    person: 'Aleix',
    text: ' And it will be a long conversation, but it needs to happen this way.'
  },
  { startTime: 6662.27, person: 'Aleix', text: " So, that's my suggestion." },
  {
    startTime: 6664.11,
    person: 'Karol',
    text: ' So, basically ask questions and then dig deeper.'
  },
  { startTime: 6669.39, person: 'Aleix', text: ' Yes.' },
  { startTime: 6669.65, person: 'Aleix', text: " And don't get into the surface." },
  { startTime: 6670.91, person: 'Aleix', text: ' Also, be clear about the expectations.' },
  {
    startTime: 6673.61,
    person: 'Aleix',
    text: ' Because maybe you find issues that you cannot resolve.'
  },
  { startTime: 6677.37, person: 'Aleix', text: ' Maybe that frustrates people.' },
  {
    startTime: 6679.27,
    person: 'Aleix',
    text: ' The issue is like, hey, we will have a follow-up conversation.'
  },
  {
    startTime: 6682.57,
    person: 'Aleix',
    text: ' Because usually you have a problem about identifying the problem.'
  },
  { startTime: 6685.49, person: 'Aleix', text: ' Then another conversation about resolving it.' },
  {
    startTime: 6687.61,
    person: 'Aleix',
    text: " My suggestion is don't try to do the same thing on the same retrospective."
  },
  {
    startTime: 6691.07,
    person: 'Aleix',
    text: " Because it's way too intense to identify the problems."
  },
  {
    startTime: 6694.57,
    person: 'Aleix',
    text: ' You need to give people time to express the things and share.'
  },
  {
    startTime: 6697.55,
    person: 'Aleix',
    text: ' So, sometimes retrospectives want to end up with actions.'
  },
  { startTime: 6701.31, person: 'Aleix', text: ' I would say pause.' },
  { startTime: 6704.31, person: 'Aleix', text: ' Analyse things.' },
  { startTime: 6705.23, person: 'Aleix', text: ' Maybe do one or two teams.' },
  { startTime: 6706.65, person: 'Aleix', text: ' And then find themes to explore.' },
  {
    startTime: 6709.43,
    person: 'Aleix',
    text: ' And then you go into actions later on another session.'
  },
  { startTime: 6714.09, person: 'Aleix', text: ' So, people have time to reflect.' },
  {
    startTime: 6716.07,
    person: 'Aleix',
    text: ' Because people will start, oh, this person said the problem is this.'
  },
  { startTime: 6719.67, person: 'Aleix', text: " Oh, I didn't notice." },
  {
    startTime: 6720.53,
    person: 'Aleix',
    text: ' And now they find themselves in the problem in a meeting where that happens.'
  },
  {
    startTime: 6724.69,
    person: 'Aleix',
    text: " Like, oh, I start seeing things that before I wasn't able to see."
  },
  {
    startTime: 6728.69,
    person: 'Aleix',
    text: " And that's why you need to give time for people to move from understanding the problem to solution."
  },
  {
    startTime: 6734.87,
    person: 'Karol',
    text: ' And just naming the problem can be just emotionally draining and will not set the people in the problem solving space.'
  },
  { startTime: 6743.33, person: 'Karol', text: " Because they'll be annoyed, agitated." },
  { startTime: 6747.13, person: 'Karol', text: ' Yes.' },
  { startTime: 6747.81, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 6748.03,
    person: 'Karol',
    text: " Whatever the emotion will be that they go to when they're in that state, in problem state."
  },
  { startTime: 6755.77, person: 'Aleix', text: ' And that will be a problem.' },
  { startTime: 6757.83, person: 'Aleix', text: ' Exactly.' },
  { startTime: 6758.37, person: 'Aleix', text: ' So, you need to give these things out.' },
  {
    startTime: 6761.05,
    person: 'Aleix',
    text: ' And you need to as a facilitator, you need to control things.'
  },
  {
    startTime: 6763.69,
    person: 'Aleix',
    text: " Because you don't want people to be too much in range."
  },
  { startTime: 6766.49, person: 'Aleix', text: ' So, being angry is okay.' },
  { startTime: 6767.75, person: 'Aleix', text: ' Yelling is not okay.' },
  { startTime: 6769.19, person: 'Aleix', text: " So, that's the thing, right?" },
  { startTime: 6772.25, person: 'Aleix', text: ' So, you need to give this a space.' },
  { startTime: 6775.41, person: 'Aleix', text: ' Give people room for asking questions.' },
  {
    startTime: 6778.43,
    person: 'Aleix',
    text: " And hey, I don't expect to go into solution mode."
  },
  { startTime: 6782.23, person: 'Aleix', text: ' But I want to get things out.' },
  {
    startTime: 6784.01,
    person: 'Aleix',
    text: ' And I also will kind of promise you to solve everything.'
  },
  {
    startTime: 6787.13,
    person: 'Aleix',
    text: ' But I will do my best to bring these things into improvement.'
  },
  { startTime: 6791.33, person: 'Aleix', text: ' Some things will be staying on the team level.' },
  { startTime: 6793.21, person: 'Aleix', text: ' Some things can be done by management.' },
  { startTime: 6795.61, person: 'Aleix', text: " But the good thing is that it won't improve." },
  {
    startTime: 6797.75,
    person: 'Aleix',
    text: ' And then in the second one, you can go deeper and give time.'
  },
  {
    startTime: 6800.67,
    person: 'Aleix',
    text: ' Like, hey, we understood that this was a problem after two weeks or after a week.'
  },
  { startTime: 6805.61, person: 'Aleix', text: ' We still believe that this is the problem.' },
  { startTime: 6807.19, person: 'Aleix', text: ' Oh, well, yes.' },
  { startTime: 6808.65, person: 'Aleix', text: ' I think that...' },
  { startTime: 6809.49, person: 'Aleix', text: ' Okay.' },
  { startTime: 6809.87, person: 'Aleix', text: ' Great.' },
  {
    startTime: 6810.71,
    person: 'Aleix',
    text: ' How we can measure that we are doing the right direction?'
  },
  { startTime: 6815.83, person: 'Aleix', text: " There's an amount of rework." },
  { startTime: 6818.57, person: 'Aleix', text: " It's an amount of tickets." },
  {
    startTime: 6819.63,
    person: 'Aleix',
    text: " It's about messages in the Slack to get into conclusion."
  },
  { startTime: 6823.43, person: 'Aleix', text: ' Amount of meetings.' },
  {
    startTime: 6824.75,
    person: 'Aleix',
    text: " So, getting some KPIs to know that you're in the direction."
  },
  {
    startTime: 6827.55,
    person: 'Aleix',
    text: ' And then you set some reasonable actions to improve them on the short term.'
  },
  { startTime: 6831.65, person: 'Aleix', text: ' Short term, please.' },
  {
    startTime: 6832.97,
    person: 'Aleix',
    text: ' Because if it takes six months to improve something, people will be like, this never happens.'
  },
  { startTime: 6837.25, person: 'Aleix', text: ' We will not improve.' },
  {
    startTime: 6839.07,
    person: 'Aleix',
    text: ' And also, you need to have the support of the organisation to improve things.'
  },
  {
    startTime: 6842.61,
    person: 'Aleix',
    text: ' The worst scenario I saw in my life is like, we understood the problem.'
  },
  { startTime: 6845.77, person: 'Aleix', text: ' We did nothing.' },
  { startTime: 6846.53, person: 'Aleix', text: ' Now people are more frustrated than before.' },
  {
    startTime: 6848.43,
    person: 'Aleix',
    text: " So, if you cannot come in to improve things, don't try to understand the problems."
  },
  { startTime: 6853.21, person: 'Aleix', text: ' Ouch.' },
  { startTime: 6854.55, person: 'Aleix', text: " That's it." },
  { startTime: 6855.79, person: 'Karol', text: " That's painful." },
  { startTime: 6856.79, person: 'Karol', text: " That's a painful vision to me." },
  { startTime: 6858.61, person: 'Aleix', text: ' We understand the problem.' },
  { startTime: 6860.11, person: 'Aleix', text: " We're doing nothing." },
  { startTime: 6860.85, person: 'Aleix', text: ' Oh, my.' },
  { startTime: 6862.59, person: 'Aleix', text: " But that's when the management is overloaded." },
  { startTime: 6865.91, person: 'Aleix', text: ' Oh, yeah.' },
  { startTime: 6866.31, person: 'Karol', text: ' Okay.' },
  {
    startTime: 6866.49,
    person: 'Aleix',
    text: " It's not that they don't want to be in something."
  },
  {
    startTime: 6868.33,
    person: 'Aleix',
    text: " It's that they don't have the capability or the space to do something."
  },
  { startTime: 6871.63, person: 'Aleix', text: ' So, be reasonable about your commitment.' },
  {
    startTime: 6874.15,
    person: 'Aleix',
    text: " If you're the one that is responsible for improving something, but you will not let something fail and you focus on improving the organisation, that's that."
  },
  {
    startTime: 6884.59,
    person: 'Aleix',
    text: ' This happens a lot with managers that they need to be present so things happen and they then cannot delegate.'
  },
  {
    startTime: 6893.03,
    person: 'Aleix',
    text: ' Because they cannot delegate execution or they, for example, I had a person that said, hey, I cannot delegate things because nobody is doing DevOps but me.'
  },
  {
    startTime: 6902.33,
    person: 'Aleix',
    text: " So, I need to be all the time doing DevOps and otherwise things don't happen."
  },
  { startTime: 6905.73, person: 'Aleix', text: ' Like, of course, you cannot delegate.' },
  {
    startTime: 6907.67,
    person: 'Aleix',
    text: " So, why focussing on that other thing if you don't have the space to delegate on these skills?"
  },
  {
    startTime: 6913.03,
    person: 'Aleix',
    text: ' So, maybe you need to do an intermediate step, which is training people or giving people the responsibility.'
  },
  { startTime: 6919.07, person: 'Aleix', text: ' So, you can free yourself from groundwork.' },
  { startTime: 6922.27, person: 'Karol', text: ' Yeah.' },
  { startTime: 6922.71, person: 'Aleix', text: ' Right?' },
  {
    startTime: 6923.43,
    person: 'Aleix',
    text: ' So, understand the situation and then act on it.'
  },
  {
    startTime: 6929.99,
    person: 'Aleix',
    text: ' But, for example, how I can focus on improving the relationship with business if the team is failing all the time on rework or issues in production, no, I focus first on moving the team from zero to one or two because then that I can delegate everything and then I can focus on another thing.'
  },
  {
    startTime: 6948.57,
    person: 'Aleix',
    text: ' But it will not work to focus me on product collaboration if engineering is failing all the time.'
  },
  { startTime: 6954.01, person: 'Aleix', text: ' So, step by step.' },
  {
    startTime: 6956.63,
    person: 'Karol',
    text: ' If you have a complete overload on production back fixes and trying to maintain the software running and how can you even focus on developing new features?'
  },
  { startTime: 6969.41, person: 'Karol', text: " That's impossible, right?" },
  { startTime: 6970.43, person: 'Karol', text: " That's insane." },
  { startTime: 6971.61, person: 'Karol', text: ' But it quite often happens.' },
  {
    startTime: 6973.55,
    person: 'Karol',
    text: ' And then, again, we have different problems from expectations and managing those expectations and whatnot.'
  },
  { startTime: 6980.57, person: 'Karol', text: ' But, yeah, okay.' },
  {
    startTime: 6981.59,
    person: 'Karol',
    text: ' That is a sound advice to just go and understand and try to understand the problem, but also secure enough support that you can actually try and resolve the problem from an organisational standpoint.'
  },
  {
    startTime: 6996.87,
    person: 'Karol',
    text: ' Or if the problem is higher up than the team, then also try to address it higher and have that support as well.'
  },
  { startTime: 7006.07, person: 'Karol', text: ' So, look more globally outside of the team.' },
  {
    startTime: 7010.27,
    person: 'Aleix',
    text: ' Usually what happens on the upper level is that each of us is trying to fix the problem from different point of views.'
  },
  {
    startTime: 7017.29,
    person: 'Aleix',
    text: ' So, usually when you see a problem, someone else already saw the problem from another angle and is trying to do a fix from another angle already.'
  },
  {
    startTime: 7025.35,
    person: 'Aleix',
    text: " So, find these people and peer up like, hey, let's work together in this and what we can do together."
  },
  {
    startTime: 7032.35,
    person: 'Aleix',
    text: " Because I had a client that recently, they're like, oh, we see this problem, but we're working maybe a little in silos and we need to involve more business."
  },
  {
    startTime: 7040.17,
    person: 'Aleix',
    text: ' And they say like, oh, there is a meeting where this person was trying to do something to align.'
  },
  { startTime: 7044.09, person: 'Aleix', text: ' Okay, that person is trying to bring this up.' },
  {
    startTime: 7046.73,
    person: 'Aleix',
    text: ' Before, you were saying like, what is this person doing?'
  },
  { startTime: 7050.05, person: 'Aleix', text: ' Maybe that person was trying to solve that.' },
  {
    startTime: 7051.89,
    person: 'Aleix',
    text: ' So, from a language or from a perspective that you were able to relate, but now that you identified that person, okay, work together and drive this forward.'
  },
  {
    startTime: 7062.21,
    person: 'Aleix',
    text: " And I'm sure that this, you're not, it's very rare that you're the first to notice this."
  },
  { startTime: 7069.71, person: 'Aleix', text: ' And probably other people tried before.' },
  {
    startTime: 7073.69,
    person: 'Aleix',
    text: ' They maybe were not or just like, okay, I give up.'
  },
  { startTime: 7077.67, person: 'Aleix', text: ' Find them.' },
  {
    startTime: 7078.53,
    person: 'Aleix',
    text: ' Maybe they want to have a little more energy to try again.'
  },
  { startTime: 7081.47, person: 'Aleix', text: ' And then you try to do things.' },
  {
    startTime: 7084.91,
    person: 'Aleix',
    text: ' But usually a problem that was tried to be solved before somebody burned.'
  },
  {
    startTime: 7091.01,
    person: 'Aleix',
    text: ' So, rescue that person, maybe learn from that mistake.'
  },
  {
    startTime: 7094.17,
    person: 'Aleix',
    text: " And then, or if that person's like, don't do that, brave yourself, don't touch this."
  },
  {
    startTime: 7099.79,
    person: 'Aleix',
    text: " It's like, okay, you saved me from a burnout here."
  },
  { startTime: 7103.89, person: 'Aleix', text: ' So, yeah.' },
  { startTime: 7105.33, person: 'Karol', text: ' All right.' },
  { startTime: 7109.29, person: 'Karol', text: ' I deal with complexity every day.' },
  {
    startTime: 7113.79,
    person: 'Karol',
    text: " But looking at the aspect of psychology, ways of working and cognitive load and all that, that's, I think, way more complexity than I ever expect from any problem that I'm solving as an architect."
  },
  {
    startTime: 7129.05,
    person: 'Karol',
    text: ' I think this is essentially more complex than anyone would want to account for in that sense.'
  },
  {
    startTime: 7138.37,
    person: 'Karol',
    text: ' It really requires a lot of people to solve this kind of complexity at times.'
  },
  {
    startTime: 7143.29,
    person: 'Karol',
    text: ' And to first to create the awareness of said complexity and then to be able to delegate, distribute that complexity over people to actually be able to solve these problems.'
  },
  { startTime: 7157.15, person: 'Aleix', text: ' Yes.' },
  { startTime: 7157.91, person: 'Aleix', text: ' And patience.' },
  {
    startTime: 7158.95,
    person: 'Aleix',
    text: " Because I learned the hard way that even though you push hard, things don't happen."
  },
  {
    startTime: 7163.35,
    person: 'Aleix',
    text: ' And then maybe you put the seats and then eventually it happens.'
  },
  { startTime: 7165.95, person: 'Aleix', text: " And then you're like, why now it's happening?" },
  { startTime: 7168.67, person: 'Aleix', text: " I tried that for three months, didn't happen." },
  { startTime: 7170.57, person: 'Aleix', text: ' And now it happened alone.' },
  { startTime: 7171.67, person: 'Aleix', text: ' Like, okay.' },
  {
    startTime: 7172.79,
    person: 'Aleix',
    text: ' So, sometimes we are not the person to make that change.'
  },
  {
    startTime: 7175.65,
    person: 'Aleix',
    text: ' Maybe you put the seats, but maybe someone else needs to finish that on.'
  },
  { startTime: 7179.57, person: 'Aleix', text: " That's fine." },
  { startTime: 7180.25, person: 'Aleix', text: ' As long as it happens, fine for me.' },
  {
    startTime: 7184.97,
    person: 'Karol',
    text: ' So, a little bit about working with your own ego, right?'
  },
  { startTime: 7188.39, person: 'Karol', text: ' To put it down a little.' },
  { startTime: 7191.39, person: 'Karol', text: ' It may be challenging for some people also.' },
  {
    startTime: 7194.73,
    person: 'Karol',
    text: ' Because it is to think about it and to notice cognitive load, I think this is a little bit of a shift in the way of thinking.'
  },
  {
    startTime: 7205.59,
    person: 'Karol',
    text: ' And you have to put aside certain things that you would hold dearly and very egoistically.'
  },
  {
    startTime: 7213.65,
    person: 'Karol',
    text: ' And patience is one of those virtues that you need to put up front at times to have that change being possible.'
  },
  { startTime: 7222.43, person: 'Karol', text: ' And that may come difficult for some people.' },
  { startTime: 7225.63, person: 'Karol', text: ' It may come easier for others.' },
  { startTime: 7227.97, person: 'Karol', text: " And sometimes it's not you." },
  { startTime: 7229.73, person: 'Karol', text: " And sometimes it's not me." },
  { startTime: 7231.13, person: 'Karol', text: ' Or anybody.' },
  { startTime: 7232.09, person: 'Karol', text: ' Yeah.' },
  { startTime: 7232.43, person: 'Karol', text: ' It depends.' },
  {
    startTime: 7233.35,
    person: 'Karol',
    text: ' It really depends on the situation, the context, and what is the actual problem versus what is the symptom that we see and consider a problem.'
  },
  { startTime: 7244.37, person: 'Aleix', text: ' So, very interesting conversation.' },
  { startTime: 7247.13, person: 'Aleix', text: " I didn't know that we went already two hours." },
  { startTime: 7250.87, person: 'Aleix', text: ' All right.' },
  { startTime: 7252.11, person: 'Karol', text: ' I think we can wrap it up at this point.' },
  {
    startTime: 7255.17,
    person: 'Karol',
    text: " If any of you reached this point, and I see that we have still a lot of viewers alive, if you want to go a little bit deeper into the definition of cognitive load to learn about intrinsic, extraneous, and germane, there was a previous livestream that we did with Radek Orszewski, who's a team topologies advocate and a Kanban trainer."
  },
  {
    startTime: 7277.41,
    person: 'Karol',
    text: ' So, you can scan the QR code and watch this particular one.'
  },
  { startTime: 7281.93, person: 'Karol', text: ' Maybe not exactly at this point.' },
  { startTime: 7284.03, person: 'Karol', text: ' That would be a bit of an overkill.' },
  {
    startTime: 7286.23,
    person: 'Karol',
    text: ' But go ahead, save it up, subscribe to this channel, and watch through those.'
  },
  { startTime: 7293.53, person: 'Karol', text: " Now, I'll do a little bit of promoting." },
  {
    startTime: 7297.09,
    person: 'Karol',
    text: " So, we're continuing the loosely coupled livestream in two weeks."
  },
  { startTime: 7301.59, person: 'Karol', text: ' We are having a week of a break.' },
  { startTime: 7303.47, person: 'Karol', text: " So, I'm gonna just swoop into the slide here." },
  {
    startTime: 7306.81,
    person: 'Karol',
    text: " So, we're going back to the topic of recruitment in two weeks' time."
  },
  {
    startTime: 7312.67,
    person: 'Karol',
    text: " We're going back and we're gonna have Philip Poynton again on the stream."
  },
  {
    startTime: 7316.33,
    person: 'Karol',
    text: " And luckily, this time around, we're gonna have Gabby Preston Pfeiffer again from Tooltop Raccoons."
  },
  {
    startTime: 7323.51,
    person: 'Karol',
    text: ' Gabby is well and fine now, so no more health complications that bar her from speaking.'
  },
  {
    startTime: 7330.67,
    person: 'Karol',
    text: " So, luckily, we're gonna have them both in the stream, and we're gonna have another conversation about IT recruitment, which is another difficult topic and dealing a lot with also cognitive load, I would say."
  },
  {
    startTime: 7346.73,
    person: 'Karol',
    text: ' And that said, if you want more content, well, you can visit bridgingthegap.eu.com, which is where we write articles on enterprise application integration.'
  },
  {
    startTime: 7360.59,
    person: 'Karol',
    text: ' But you can also find a list of our upcoming events in the menu on the side.'
  },
  { startTime: 7365.69, person: 'Karol', text: ' You can subscribe to Substack.' },
  { startTime: 7367.17, person: 'Karol', text: " We're publishing articles and different..." },
  {
    startTime: 7370.45,
    person: 'Karol',
    text: " We're gonna get into more content there soon enough."
  },
  {
    startTime: 7373.49,
    person: 'Karol',
    text: ' And you can also subscribe to the YouTube channel to get notified about upcoming live streams.'
  },
  {
    startTime: 7380.37,
    person: 'Karol',
    text: ' There is some other content pending, which again, I need to have more space in terms of my cognitive load to build that content.'
  },
  {
    startTime: 7393.75,
    person: 'Karol',
    text: " So, that's gonna take some time, free up some space, not take too much on yourself."
  },
  {
    startTime: 7399.43,
    person: 'Karol',
    text: " So, there's plenty to do, plenty to watch, plenty to enjoy in the upcoming streams."
  },
  {
    startTime: 7406.43,
    person: 'Karol',
    text: ' And for today, thank you, Aleix, for joining us.'
  },
  {
    startTime: 7409.63,
    person: 'Karol',
    text: " It's been a pleasure talking about this, quite a complex topic."
  },
  {
    startTime: 7415.19,
    person: 'Karol',
    text: " My brain is buzzing, but I already feel that I'm a little bit overloaded after a whole day of meetings and then a live stream at the end of it."
  },
  { startTime: 7423.45, person: 'Karol', text: " So, we're gonna come to a close." },
  { startTime: 7425.33, person: 'Karol', text: ' Thank you, all of you who stayed with us.' },
  {
    startTime: 7427.65,
    person: 'Karol',
    text: ' Hopefully, you enjoyed the conversation and tune in for more.'
  }
])
</script>

<style scoped></style>
