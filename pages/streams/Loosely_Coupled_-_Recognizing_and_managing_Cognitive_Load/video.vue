<template>
  <div class="w-full">
    <StreamLayout
      :transcript="transcript"
      name="Loosely Coupled - Recognizing and managing Cognitive Load"
      video-id="esFSrNG9GAI"
    />
  </div>
</template>

<script lang="ts" setup>
const transcript = ref([
  { startTime: 28.76, person: 'Karol', text: ' Hello, welcome to my lecture.' },
  {
    startTime: 94.01,
    person: 'Karol',
    text: ' Good afternoon and good evening for all of you tuning in to loosely coupled a live stream by bridging the gap.'
  },
  { startTime: 101.67, person: 'Karol', text: " I'm your host Karol Skrzymowski." },
  {
    startTime: 104.29,
    person: 'Karol',
    text: " And today we're tackling another loosely coupled topic."
  },
  {
    startTime: 108.97,
    person: 'Karol',
    text: " Well topic loosely coupled to tech because it's a I think a very important topic in in tech in the industry specifically cognitive load and cognitive load."
  },
  { startTime: 122.05, person: 'Karol', text: " I don't have a lot of knowledge about that." },
  { startTime: 124.87, person: 'Karol', text: ' I know it affects me.' },
  { startTime: 126.53, person: 'Karol', text: ' I know I have some problems with cognitive load.' },
  { startTime: 128.87, person: 'Karol', text: ' I mean, I suppose everybody has.' },
  {
    startTime: 132.43,
    person: 'Karol',
    text: " I know that is a troublesome topic when I'm managed."
  },
  {
    startTime: 135.49,
    person: 'Karol',
    text: ' And today joining me on the stage is Radek Oroszewski, a accredited Kanban coach and professional trainer and also a team topologies advocate who provides training and consulting across Europe to teach team topologies and implement all of that with customers.'
  },
  {
    startTime: 163.83,
    person: 'Karol',
    text: ' And Radek today is going to be talking with us here about cognitive load and the implications that it has on our work.'
  },
  { startTime: 173.83, person: 'Radek', text: ' Hi Radek.' },
  { startTime: 174.59, person: 'Radek', text: ' Hello.' },
  { startTime: 175.29, person: 'Radek', text: ' Hello.' },
  { startTime: 175.77, person: 'Radek', text: ' I got all good to be here.' },
  { startTime: 177.33, person: 'Radek', text: ' Thank you for for having me here today.' },
  { startTime: 180.95, person: 'Karol', text: ' All right.' },
  {
    startTime: 183.07,
    person: 'Karol',
    text: ' Radek, tell us a little bit about yourself and a little bit about your work as a trainer and team topologies advocate because Kanban here is a little bit less important in the context of our chat.'
  },
  {
    startTime: 196.57,
    person: 'Radek',
    text: " Yeah, but they are interconnected because we're going to talk about limiting cognitive load and Kanban is very much about limiting work in progress, which in the end maybe is the same."
  },
  {
    startTime: 205.79,
    person: 'Radek',
    text: ' But yeah, you introduced me as a person who works with team topologies.'
  },
  { startTime: 213.07, person: 'Radek', text: " That's true." },
  {
    startTime: 214.91,
    person: 'Radek',
    text: ' Well, looking at my professional career for close to two decades, what I try to do is I try to help people, organisations to work in a more pleasant and effective way.'
  },
  {
    startTime: 230.61,
    person: 'Radek',
    text: ' And yeah, I discovered two years back, the topologies.'
  },
  { startTime: 235.19, person: 'Radek', text: ' Many of us have read the book probably.' },
  {
    startTime: 238.35,
    person: 'Radek',
    text: ' And for me, this was really interesting that it looks at IT industry, looks at knowledge based work from this socio-technical perspective.'
  },
  { startTime: 250.15, person: 'Radek', text: ' So on one hand, we have this human factor.' },
  {
    startTime: 253.11,
    person: 'Radek',
    text: ' On the other side, we have, yeah, increasing and increasing everyday complexity of solutions that we develop, that we build.'
  },
  {
    startTime: 263.99,
    person: 'Radek',
    text: " And yeah, I'm happy to say that the team topologies community was very open to welcome me."
  },
  {
    startTime: 272.89,
    person: 'Radek',
    text: ' So I first became an advocate, as you said, to someone who promotes and educates about this approach.'
  },
  {
    startTime: 281.21,
    person: 'Radek',
    text: ' But in my everyday life as a consultant and trainer, I provide classes under my brand lineage.'
  },
  {
    startTime: 289.69,
    person: 'Radek',
    text: ' We are authorised to provide the team topologies classes.'
  },
  { startTime: 293.45, person: 'Radek', text: ' And yeah, I work with people like yourself.' },
  {
    startTime: 297.89,
    person: 'Radek',
    text: ' I mean, like, you know, people who are architects, people who are managers and leaders, and they try to somehow balance how we approach everyday complexity.'
  },
  {
    startTime: 316.09,
    person: 'Radek',
    text: ' And we try to find something in between, I believe, two ends of the spectrum where we say, yeah, we would like to be specialised.'
  },
  {
    startTime: 324.59,
    person: 'Radek',
    text: ' We like to do what we do well because we are recognised for doing that.'
  },
  {
    startTime: 331.41,
    person: 'Radek',
    text: ' And on the other hand, we would like to have some flexibility and go beyond our existing roles or responsibilities.'
  },
  {
    startTime: 344.23,
    person: 'Radek',
    text: " That's when we discover that cognitive load is a thing."
  },
  { startTime: 349.63, person: 'Radek', text: ' Like you said, you feel affected by it.' },
  { startTime: 351.73, person: 'Radek', text: ' I feel affected by it every day.' },
  {
    startTime: 354.27,
    person: 'Radek',
    text: ' And this is really interesting topic that the industry is not, I would say, unified how to look at the cognitive loads.'
  },
  {
    startTime: 365.35,
    person: 'Radek',
    text: " Maybe that's also a topic for us to discuss today."
  },
  {
    startTime: 369.85,
    person: 'Karol',
    text: " I'm sorry, I'm a bit distracted because it seems that we have a bit of a technical issue today."
  },
  {
    startTime: 376.77,
    person: 'Karol',
    text: " Mainly that, unfortunately, we're not streaming on LinkedIn for some reason."
  },
  { startTime: 381.89, person: 'Karol', text: " It didn't start." },
  {
    startTime: 386.75,
    person: 'Karol',
    text: " So I'll just pop in a message on LinkedIn to say we're sorry that there's a technical issue and invite everybody to join us on YouTube."
  },
  { startTime: 397.07, person: 'Karol', text: ' But all right.' },
  {
    startTime: 398.89,
    person: 'Karol',
    text: ' So it affects cognitive load affects every one of us.'
  },
  { startTime: 404.19, person: 'Karol', text: ' Right.' },
  {
    startTime: 404.49,
    person: 'Karol',
    text: ' So perhaps for those who have no idea what cognitive load is.'
  },
  { startTime: 411.57, person: 'Karol', text: " Well, I wouldn't say I have an idea." },
  {
    startTime: 413.73,
    person: 'Karol',
    text: ' I have a very basic understanding, probably a little bit misguided.'
  },
  { startTime: 421.21, person: 'Karol', text: ' Yeah, perfect.' },
  { startTime: 424.05, person: 'Karol', text: ' Sim, thank you for info.' },
  { startTime: 425.75, person: 'Radek', text: " Yeah, we know it's working on YouTube." },
  { startTime: 427.59, person: 'Karol', text: " It's it's only the LinkedIn." },
  { startTime: 430.39, person: 'Karol', text: " That's the problem." },
  { startTime: 434.45, person: 'Karol', text: " So if we're talking cognitive load." },
  { startTime: 437.93, person: 'Karol', text: ' All right.' },
  {
    startTime: 438.91,
    person: 'Karol',
    text: " And we're going to probably jump into the more detailed explanation of our types and etcétera."
  },
  {
    startTime: 445.53,
    person: 'Karol',
    text: " So what would you say is the like the core elements that we need to watch for when we're talking about cognitive load?"
  },
  { startTime: 456.22, person: 'Karol', text: ' How would we observe cognitive load as well?' },
  { startTime: 459.86, person: 'Karol', text: ' Specialists, human beings, whatever that is.' },
  { startTime: 462.78, person: 'Radek', text: ' Right, right.' },
  {
    startTime: 463.78,
    person: 'Radek',
    text: ' So I believe it makes sense to maybe take a few steps back in the history because the term cognitive load comes from psychology of education.'
  },
  {
    startTime: 475.42,
    person: 'Radek',
    text: ' Australian scientist, researcher John Sweller coined the term in 1980s where basically he proposed the approach or the idea that it really depends how we expose people to new knowledge.'
  },
  {
    startTime: 497.04,
    person: 'Radek',
    text: ' I mean, students at school like primary school kids or students or professionals learning something new.'
  },
  {
    startTime: 505.72,
    person: 'Radek',
    text: " And that if we if we basically expose them to too complex content, if we don't deliver the content in the right way, if we don't provide instructions in the right way, we can lead really quickly to a situation of this cognitive overload, even that we say I cannot consume."
  },
  {
    startTime: 529.74,
    person: 'Radek',
    text: " I cannot digest, let's just say, the knowledge that the content that you expose me to because it's it's too much for me."
  },
  { startTime: 538.38, person: 'Radek', text: " It's maybe too intense for me." },
  {
    startTime: 539.82,
    person: 'Radek',
    text: " And I believe this, let's just say education and psychology track goes on until nowadays you can if you type in cognitive load, you can find materials for professional educators like like teachers at schools."
  },
  {
    startTime: 560.69,
    person: 'Radek',
    text: " But the term was, I don't want to say stolen, but maybe hijacked by professionals working in industry like IT, where we say, well, a part of our work is also learning something new, right?"
  },
  {
    startTime: 578.42,
    person: 'Radek',
    text: ' Every day, many of us are facing challenges of doing something for the first time, doing something the only time because we produce something unique, right?'
  },
  { startTime: 589.58, person: 'Radek', text: ' We are exposed to new technologies.' },
  { startTime: 591.76, person: 'Radek', text: " Hey, there's a new language." },
  { startTime: 593.06, person: 'Radek', text: " Hey, there's a UI, AI." },
  {
    startTime: 594.82,
    person: 'Radek',
    text: " Hey, there's a new framework or there's a new business context."
  },
  {
    startTime: 598.46,
    person: 'Radek',
    text: ' And because we are lifetime learners, I believe I can I can speak not only for myself, but for many of us, right?'
  },
  {
    startTime: 608.42,
    person: 'Radek',
    text: " It happened that, well, the rate that we are exposed to new challenges or new knowledge can also trigger some, let's just say, behaviours, some symptoms of too high cognitive load."
  },
  {
    startTime: 628.82,
    person: 'Radek',
    text: " And of course, there's maybe this, you know, academic discussion or debate if that's the correct tool to hijack and use the term cognitive load in this domain and apply not only to individuals but also to the teams or organisations."
  },
  { startTime: 644.68, person: 'Radek', text: " I don't want to go into it today." },
  {
    startTime: 646.5,
    person: 'Radek',
    text: " And I believe like many of our viewers are not interested in it because I don't find it really practical."
  },
  {
    startTime: 653.62,
    person: 'Radek',
    text: ' I would say the cognitive load is like a bad smelling air.'
  },
  { startTime: 658.94, person: 'Radek', text: ' Yeah.' },
  {
    startTime: 659.04,
    person: 'Radek',
    text: ' Coming back to your question, what would be the, you know, the how would I recognise it?'
  },
  { startTime: 663.62, person: 'Radek', text: ' Right.' },
  {
    startTime: 663.88,
    person: 'Radek',
    text: ' So you say, well, if you enter a room and you feel like bad smelling air, you say, oh, something smells bad here.'
  },
  {
    startTime: 671.5,
    person: 'Radek',
    text: " But after you stay in this environment in this room for quite some time, you know, our sensors in nostrils like becoming immune to it, we don't feel it anymore."
  },
  { startTime: 684.6, person: 'Radek', text: ' It becomes like, oh, we just work slowly here.' },
  {
    startTime: 688.76,
    person: 'Radek',
    text: " I'm now translating this to other symptoms, right?"
  },
  { startTime: 692.56, person: 'Karol', text: ' Our brains adapt, basically.' },
  { startTime: 694.12, person: 'Radek', text: ' Exactly.' },
  { startTime: 695.26, person: 'Radek', text: " Yeah, we don't deliver." },
  { startTime: 697.14, person: 'Radek', text: ' Right.' },
  {
    startTime: 697.8,
    person: 'Radek',
    text: ' And and this is this is really interesting that we we say we enter our professional environment with certain capacity, with certain memory that we have available.'
  },
  { startTime: 713.14, person: 'Radek', text: ' Right.' },
  {
    startTime: 714.06,
    person: 'Radek',
    text: " And if we see some symptoms, we're going to go deeper into it."
  },
  {
    startTime: 720.58,
    person: 'Radek',
    text: " Individuals and teens exposed to to certain, let's just say, factors start showing the results symptoms that, you know, we cannot focus, we cannot deliver."
  },
  { startTime: 737.54, person: 'Radek', text: ' We juggle too many topics.' },
  { startTime: 741.42, person: 'Radek', text: ' We do not meet the deadlines.' },
  {
    startTime: 744.26,
    person: 'Radek',
    text: ' And it has, I would say, again, social technical consequences.'
  },
  {
    startTime: 749.74,
    person: 'Radek',
    text: ' So on one hand, people are like, you know, completely checked out.'
  },
  { startTime: 752.92, person: 'Radek', text: ' They are overburdened.' },
  {
    startTime: 754.34,
    person: 'Radek',
    text: ' They feel like, oh, this is the professional burnout in the end, maybe that I that I suffer.'
  },
  {
    startTime: 760.36,
    person: 'Radek',
    text: ' And we also see it reflected in the outside technical results of our work.'
  },
  { startTime: 765.26, person: 'Radek', text: ' Right.' },
  {
    startTime: 765.96,
    person: 'Radek',
    text: ' So so the work is far from something that we would be proud of.'
  },
  {
    startTime: 770.2,
    person: 'Radek',
    text: ' The solutions that we choose are, well, far from perfect.'
  },
  { startTime: 775.82, person: 'Radek', text: ' Right.' },
  {
    startTime: 776.08,
    person: 'Radek',
    text: " And yeah, it's it's it's good to say, are we not designing?"
  },
  {
    startTime: 781.88,
    person: 'Radek',
    text: " Unfortunately, I'm not saying that we designed it."
  },
  {
    startTime: 784.6,
    person: 'Radek',
    text: " But like as the whole industry, don't we design the environment to even increase this cognitive load and and to make people."
  },
  { startTime: 792.6, person: 'Radek', text: ' Yeah, in the end, suffering.' },
  {
    startTime: 794.68,
    person: 'Radek',
    text: " I know it's a strong word in the environment because, well, A, we don't know it's there."
  },
  {
    startTime: 802.6,
    person: 'Radek',
    text: " That's the topic of today's meeting, like identifying, recognising, acknowledging that it's there."
  },
  {
    startTime: 810.64,
    person: 'Radek',
    text: ' And the second step is like doing something about it.'
  },
  { startTime: 814.04, person: 'Radek', text: ' So so managing it right.' },
  {
    startTime: 815.34,
    person: 'Radek',
    text: " And there's no one silver bullet solution because we need to first identify what type of cognitive load do we deal with and and then decide, OK, what kind of strategy, what kind of solution?"
  },
  {
    startTime: 829.2,
    person: 'Radek',
    text: " Probably we're going to come to it today is like maybe applicable best in this context."
  },
  { startTime: 836.1, person: 'Karol', text: ' That was a hefty explanation.' },
  { startTime: 840.16, person: 'Radek', text: ' Heavy, heavy. Yeah, I know.' },
  { startTime: 843.24, person: 'Karol', text: " So let's maybe play around with some analogues." },
  {
    startTime: 848.26,
    person: 'Karol',
    text: " One of the analogues that came to my mind where we were discussing this topic before the stream was a very known law in IT, which was which is Conway's law."
  },
  {
    startTime: 858.75,
    person: 'Karol',
    text: " So Conway's law is a design law so that we're reflecting analogues in our life in terms of how we design things in organisations in a specific ecosystem."
  },
  {
    startTime: 873.66,
    person: 'Karol',
    text: " So we're reflecting that it's either we're going to be blindly reflecting that or we're going to change something to do things better."
  },
  { startTime: 881.64, person: 'Karol', text: ' Right.' },
  {
    startTime: 882.86,
    person: 'Karol',
    text: " And as far as I remember, Martin Fowler was describing that in one of his blog posts, the one on Conway's law."
  },
  {
    startTime: 892.7,
    person: 'Karol',
    text: ' You can either ignore it or not be aware of it and then you will suffer the consequences very dearly.'
  },
  {
    startTime: 900.8,
    person: 'Karol',
    text: " You can accept that it's there and just give up and follow, fall into that and just do with that."
  },
  { startTime: 910.58, person: 'Karol', text: ' Right.' },
  {
    startTime: 911.5,
    person: 'Karol',
    text: " So deal with that with in the case of cognitive load, that would be accept that it's going to be slower, accept that it's going to be there's going to be frustration and whatnot."
  },
  {
    startTime: 921.32,
    person: 'Karol',
    text: " And then you can in Conway's law, you'd have the reverse Conway manoeuvres to change your organisation so that you can change the way Conway's law is applied within the organisation."
  },
  {
    startTime: 932.96,
    person: 'Karol',
    text: " And I think it's a little bit similar with cognitive load."
  },
  {
    startTime: 935.86,
    person: 'Karol',
    text: " If we start changing the way we work, we will still have cognitive load, but it will be probably applied differently because it's not going to go away."
  },
  { startTime: 946.7, person: 'Karol', text: ' Right.' },
  { startTime: 947.52, person: 'Radek', text: ' Yeah.' },
  {
    startTime: 947.92,
    person: 'Radek',
    text: " And this is really interesting to start talking about the details of cognitive load, because not every time I even revert this sentence, cognitive load doesn't need to be a bad thing."
  },
  {
    startTime: 961.06,
    person: 'Radek',
    text: " And there are certain types of cognitive load that you would like to, let's just say, experience, not suffer from."
  },
  { startTime: 968.22, person: 'Radek', text: ' Right.' },
  {
    startTime: 968.9,
    person: 'Radek',
    text: " So maybe this is this is the moment to go deeper into, let's just say, practical exercises."
  },
  {
    startTime: 976.28,
    person: 'Radek',
    text: ' So you asked me, how would we recognise that we suffer from the cognitive load?'
  },
  {
    startTime: 982.9,
    person: 'Radek',
    text: ' As a consultant, as a trainer, I meet people from tens of organisations here.'
  },
  {
    startTime: 987.4,
    person: 'Radek',
    text: ' And sometimes I just stay with one organisation a little bit longer.'
  },
  {
    startTime: 992.82,
    person: 'Radek',
    text: " And I keep hearing from management or agile coaches or scrum masters assisting teams, for example, that all they don't deliver, they continuously take something from one sprint to another, etc."
  },
  {
    startTime: 1005.16,
    person: 'Radek',
    text: " And we say, okay, let's try to discover why is it like this?"
  },
  {
    startTime: 1009.92,
    person: 'Radek',
    text: " And of course, we can stay at the surface and say, well, the team didn't manage to complete everything."
  },
  { startTime: 1018.46, person: 'Radek', text: " Okay, that's the surface, but why?" },
  {
    startTime: 1020.96,
    person: 'Radek',
    text: ' And now we can go deeper and try to understand that maybe we have at least, I want to say, three different types of reasons connected to cognitive load that we can observe.'
  },
  {
    startTime: 1036.7,
    person: 'Radek',
    text: " So the first thing is like, just like with the education, we want to understand if our people are actually skilled with the right knowledge, techniques, frameworks, programming languages, whatever it is, to actually do the work that it's supposed to be done."
  },
  { startTime: 1059.6, person: 'Radek', text: ' Right?' },
  {
    startTime: 1060.08,
    person: 'Radek',
    text: " So if you're like a software engineer, like, can you actually proficiently develop in a given language or given a given framework, right?"
  },
  {
    startTime: 1069.36,
    person: 'Radek',
    text: ' And if we observe that we have a problem with it, then it means that what we actually see is the first type of cognitive load.'
  },
  {
    startTime: 1079.64,
    person: 'Radek',
    text: " And now I'm going to start sharing the screen card or probably you can do the magic."
  },
  {
    startTime: 1086.48,
    person: 'Radek',
    text: " So we don't overload our viewers and they can focus on the content, right?"
  },
  {
    startTime: 1091.92,
    person: 'Radek',
    text: ' And then we say, this is something what we call intrinsic cognitive load.'
  },
  {
    startTime: 1097.2,
    person: 'Radek',
    text: " So this is really connected to what I'm supposed to do, right?"
  },
  {
    startTime: 1102.66,
    person: 'Radek',
    text: " So if I'm a Python programmer, am I proficient in Python?"
  },
  {
    startTime: 1106.34,
    person: 'Radek',
    text: ' So I have my skills, I have my mental tools to actually do the work, right?'
  },
  {
    startTime: 1112.2,
    person: 'Radek',
    text: ' And this is basically a basic thing which is, I would say, very often neglected because we have this halo effect.'
  },
  {
    startTime: 1124.36,
    person: 'Radek',
    text: " So we're going to say, oh, Carl, you're the smart guy, we're going to put you in this team and we want you to start doing X or Y, right?"
  },
  {
    startTime: 1132.7,
    person: 'Radek',
    text: " And we don't know if you're skilled with the tools or programming languages or whatever is necessary in this team."
  },
  {
    startTime: 1139.34,
    person: 'Radek',
    text: " Because you're the smart guy, we have this halo effect around you."
  },
  { startTime: 1143.06, person: 'Radek', text: " So we'll assume that you will do it." },
  {
    startTime: 1145.76,
    person: 'Karol',
    text: ' And I think there is a general assumption that people over a specific IQ, and I found that in some YouTube videos, people over a certain IQ are capable to pick up any topic.'
  },
  {
    startTime: 1160.76,
    person: 'Karol',
    text: " Yeah, yeah, that's, that's an assumption, right?"
  },
  { startTime: 1164.3, person: 'Karol', text: " That's an assumption, right?" },
  { startTime: 1167.08, person: 'Radek', text: ' Yeah.' },
  {
    startTime: 1167.8,
    person: 'Radek',
    text: " And, or we hire someone completely new, and maybe during the, I don't know, recruitment process, this person was showing, let's just say, some skill set."
  },
  {
    startTime: 1181.38,
    person: 'Radek',
    text: ' And yeah, we believe that he or she is capable of doing that, right?'
  },
  {
    startTime: 1185.4,
    person: 'Radek',
    text: " And very often we discover in really professional organisations that this is assumption, and especially if the organisation is under heavy, I don't know, wave of changes like newly formed teams or some migration of people between the teams."
  },
  {
    startTime: 1205.74,
    person: 'Radek',
    text: ' We cannot be sure that people are actually skilled with this, you know, really basic things to do, right?'
  },
  {
    startTime: 1215.98,
    person: 'Radek',
    text: " And if we see it, then of course, we're going to talk about it, we need to address it correctly."
  },
  {
    startTime: 1221.42,
    person: 'Radek',
    text: ' And the second type of cognitive load is something that we called extraneous.'
  },
  {
    startTime: 1229.42,
    person: 'Radek',
    text: " And I like to explain it that you hire smart people, but unfortunately, they are told to operate in an environment in which doing the things that they can and won't do is not easy."
  },
  { startTime: 1244.88, person: 'Radek', text: ' Right?' },
  {
    startTime: 1245.84,
    person: 'Radek',
    text: " So, yeah, so what I'm going to edit here is word environment, right?"
  },
  {
    startTime: 1252.6,
    person: 'Radek',
    text: " And this is interesting how we waste skills of our people, of our teams by, you know, telling them you need to figure it out by yourself, or you need to do it in this way, or no, you cannot do it because it's not allowed in this organisation."
  },
  {
    startTime: 1272.98,
    person: 'Radek',
    text: ' And the different levels of, you know, bureaucracy or politics, or sometimes we see, yeah, super strange things like, okay, you cannot work with the system, you cannot talk to these people because yes, they are the part of the same organisation, but a different entity.'
  },
  {
    startTime: 1292.28,
    person: 'Radek',
    text: " You're an employee German and you're an employee in Switzerland, so you cannot cooperate, whatever."
  },
  { startTime: 1298.38, person: 'Radek', text: ' So, you know, different things.' },
  {
    startTime: 1302.1,
    person: 'Radek',
    text: ' But, yeah, very often it is also about the technical things, right?'
  },
  {
    startTime: 1306.96,
    person: 'Radek',
    text: ' So, you hire a person who is skilled with all the things that you wanted from here or her, yeah, all check marks here, right?'
  },
  {
    startTime: 1316.66,
    person: 'Radek',
    text: ' And then this person starts thinking, okay, how do I do it here?'
  },
  { startTime: 1320.66, person: 'Radek', text: ' I can give you the example.' },
  {
    startTime: 1325.62,
    person: 'Radek',
    text: " I often see people moving from, there's maybe this trend, smaller companies to bigger companies, and in bigger companies, they are struggling how to do it because in the previous job environment, they had more autonomy, more freedom, more independence."
  },
  {
    startTime: 1341.9,
    person: 'Radek',
    text: " And here we have processes, and I don't want to criticise processes, but for example, these processes are even hard to unhide them, hard to discover them, right?"
  },
  {
    startTime: 1355.92,
    person: 'Radek',
    text: " So, okay, I'm supposed to deploy my application."
  },
  { startTime: 1359.72, person: 'Radek', text: ' How do I do it here?' },
  { startTime: 1361.58, person: 'Radek', text: " Yeah, I'm supposed to apply for a training." },
  { startTime: 1365.2, person: 'Radek', text: ' How do I do it here, right?' },
  {
    startTime: 1366.74,
    person: 'Radek',
    text: ' And we create, you know, platforms, Wiki, SharePoint, intranets, video tutorials, whatever, right?'
  },
  {
    startTime: 1379.38,
    person: 'Radek',
    text: ' And people are still struggling how to find the very basic information.'
  },
  {
    startTime: 1383.78,
    person: 'Radek',
    text: " And I'm not surprised that few years ago, I've seen like a, you know, a research result saying that an employee in a bigger company becomes really helpful after 13 to 14 months."
  },
  { startTime: 1398.96, person: 'Radek', text: ' Why?' },
  {
    startTime: 1400.28,
    person: 'Radek',
    text: ' Because only after a year, this person builds like a social network.'
  },
  {
    startTime: 1405.64,
    person: 'Radek',
    text: " So, if I spend enough time in the organisation, I will learn that if I need something from IT, I will write to Karl directly because he's the nice guy, he will reply me, he will explain me how to do it."
  },
  { startTime: 1420.28, person: 'Karol', text: ' There go procedures out of the window, right?' },
  { startTime: 1424.08, person: 'Radek', text: ' Exactly, yeah.' },
  {
    startTime: 1425.14,
    person: 'Radek',
    text: " And there's a really extreme case, maybe, I remember during one of the fast flow conferences, so the event hosted in London, one of the presenters, she was telling about the history of a bank, I guess in the UK, and they had an IT, inside the IT department, they had a cloud team."
  },
  {
    startTime: 1448.18,
    person: 'Radek',
    text: ' And this cloud team was offering such great services that one part of the bank decided to establish their own cloud.'
  },
  {
    startTime: 1457.86,
    person: 'Radek',
    text: ' Because like, you know, utilising whatever was provided by the experts, right?'
  },
  {
    startTime: 1465.72,
    person: 'Radek',
    text: ' Was so inadequate, was so not matching the needs, right?'
  },
  {
    startTime: 1470.48,
    person: 'Radek',
    text: ' So hard to, you know, configure or whatever, right?'
  },
  {
    startTime: 1473.66,
    person: 'Radek',
    text: ' That they established their own cloud entity, which of course was a risk in case of security, additional costs, additional mess, right?'
  },
  { startTime: 1484.42, person: 'Radek', text: ' So we say...' },
  { startTime: 1488.4, person: 'Karol', text: ' But this is not a seldom occurrence.' },
  {
    startTime: 1494.08,
    person: 'Karol',
    text: ' I worked as an enterprise in a large networked environment with multiple entities in one country being connected by one brand, and then that also connected globally to other entities in other territories.'
  },
  {
    startTime: 1512.62,
    person: 'Karol',
    text: ' Within one territory, I believe we had four or five different IT units that were operating on their own, because the one that was provided by the unit that was supposed to take care of the inside, the central unit, was so slow and so red taped that it was impossible to...'
  },
  { startTime: 1543.68, person: 'Karol', text: ' work with that.' },
  {
    startTime: 1545.26,
    person: 'Karol',
    text: ' Because any change needed, and any approval needed to build anything for a customer or prepare a project even for internal users required four or five months just of bureaucracy.'
  },
  { startTime: 1559.54, person: 'Radek', text: ' Yeah, I see a comment in the chat.' },
  {
    startTime: 1563.32,
    person: 'Radek',
    text: " Yeah, of course, it's a learning opportunity, how to do it right, right?"
  },
  { startTime: 1568.48, person: 'Radek', text: ' But on the end...' },
  { startTime: 1572.62, person: 'Radek', text: " And I don't want to lose track of our audience." },
  {
    startTime: 1575.88,
    person: 'Radek',
    text: ' I want to say there is this good type of cognitive load, because I started with this sentence, right?'
  },
  {
    startTime: 1582.62,
    person: 'Radek',
    text: " That cognitive load as such doesn't need to be something really bad."
  },
  {
    startTime: 1587.66,
    person: 'Radek',
    text: " We have this third type that we called germane, and this is something that it's actually about delivering value, building whatever we are supposed to build."
  },
  {
    startTime: 1605.84,
    person: 'Radek',
    text: ' And now if we will understand that, you know, yeah, again, there was this comment talking about the bucket, right?'
  },
  {
    startTime: 1614.96,
    person: 'Radek',
    text: ' So like, I have my brain or we as the team have the bucket and this is our mental capacity.'
  },
  {
    startTime: 1621.58,
    person: 'Radek',
    text: ' And if we say we spent a lot of this mental capacity on, you know, dealing with our maybe deficits, unspoken lack of skills in what we are supposed to do.'
  },
  {
    startTime: 1635.54,
    person: 'Radek',
    text: ' Unfortunately, I would say there is a big pile, big volume of this extraneous, how do we do it here?'
  },
  { startTime: 1642.68, person: 'Radek', text: ' We would like to do it.' },
  {
    startTime: 1644.08,
    person: 'Radek',
    text: " If only we could, yeah, I don't know, whatever comes to your mind."
  },
  {
    startTime: 1648.24,
    person: 'Radek',
    text: ' Then there is a very little space for this germane cognitive load, right?'
  },
  {
    startTime: 1655.18,
    person: 'Radek',
    text: ' And I would say if we look at the ratio, naturally, we would like to see it differently.'
  },
  {
    startTime: 1662.6,
    person: 'Radek',
    text: " So there will be always some kind of intrinsic cognitive load, because if we are lifetime learners, there's always something new that we discover that we learn, right?"
  },
  {
    startTime: 1673.78,
    person: 'Radek',
    text: ' If we build the environment around us, then, of course, we can hopefully reduce the orange colour here, so the extraneous connected to environment.'
  },
  {
    startTime: 1684.32,
    person: 'Radek',
    text: ' And then if we have this finite volume, then, yes, we spend the time, we spend the effort, we use our brain power to basically think about the things that we were hired to do, right?'
  },
  { startTime: 1700.16, person: 'Radek', text: ' That we are supposed to deliver, right?' },
  { startTime: 1702.7, person: 'Radek', text: " Like, what's the best solution for our business?" },
  {
    startTime: 1704.96,
    person: 'Radek',
    text: " What's the best solution for our customers, internal, external, whatever?"
  },
  {
    startTime: 1709.87,
    person: 'Karol',
    text: ' So this actually kind of sprung into my mind the original thought behind scrum teams, where the scrum master is supposed to at least guard against the extraneous cognitive load so that the team can progress.'
  },
  {
    startTime: 1730.16,
    person: 'Karol',
    text: " With the tasks and the scrum master is the one guarding them so they don't be disturbed by the environment."
  },
  {
    startTime: 1737.2,
    person: 'Karol',
    text: ' I think that would land in one of the responsibilities of said scrum master in that sense.'
  },
  {
    startTime: 1742.5,
    person: 'Radek',
    text: ' Yeah, I would agree to certain point, because, well, the good scrum master is someone who should have this knowledge about the context, about the network.'
  },
  {
    startTime: 1753.3,
    person: 'Radek',
    text: " He or she should be the one that will say, you know, I'm not going to do it for you."
  },
  { startTime: 1757.7, person: 'Radek', text: ' I will tell you how to do it.' },
  { startTime: 1759.62, person: 'Radek', text: " Let's go together to find a solution." },
  {
    startTime: 1763.18,
    person: 'Radek',
    text: ' And definitely, that should be someone who should know what kind of cognitive load are we struggling in a given team.'
  },
  {
    startTime: 1773.18,
    person: 'Radek',
    text: ' And I need to say that because of my profession, because of what I do, I need lots of scrum masters and agile coaches.'
  },
  {
    startTime: 1783.08,
    person: 'Radek',
    text: " And when we talk about cognitive load, I hear very open statements for which I'm happy and thankful when they say, you know, Radek, I never looked at it from this perspective."
  },
  { startTime: 1796.14, person: 'Radek', text: ' I facilitate retrospectives.' },
  { startTime: 1799.72, person: 'Radek', text: ' I participate in reviews.' },
  {
    startTime: 1802.08,
    person: 'Radek',
    text: " But I'm not sure if I can say what kind of cognitive load do I deal with with with my team or teams."
  },
  {
    startTime: 1810,
    person: 'Radek',
    text: " And if you don't know, then you cannot help these teams, right?"
  },
  {
    startTime: 1813.94,
    person: 'Radek',
    text: " Because you don't know if there's like one or two team members who are missing certain skill set, right?"
  },
  {
    startTime: 1819.04,
    person: 'Radek',
    text: ' And they should be somehow educated, supported, learning it.'
  },
  {
    startTime: 1823.38,
    person: 'Radek',
    text: ' Or maybe that the team is like, you know, perfectly optimistically forecasting sprint to deliver some kind of scope.'
  },
  {
    startTime: 1834.64,
    person: 'Radek',
    text: ' And they figure it out only later that, yes, they all have the skills that we need.'
  },
  {
    startTime: 1841.86,
    person: 'Radek',
    text: " But unfortunately, because of environment, let's just say, boundaries or something, invisible walls or whatever, right?"
  },
  {
    startTime: 1851.42,
    person: 'Radek',
    text: " They, yeah, it's beyond their capacity to really deliver it."
  },
  { startTime: 1856.44, person: 'Karol', text: ' Yeah.' },
  { startTime: 1856.54, person: 'Karol', text: ' Mm hmm.' },
  {
    startTime: 1861.64,
    person: 'Karol',
    text: " That's that's very difficult to say which is which and what we're actually handling."
  },
  {
    startTime: 1869.02,
    person: 'Karol',
    text: ' I think that would that would require some some really hard reflection.'
  },
  {
    startTime: 1875.38,
    person: 'Radek',
    text: " Yeah, to understand that, to make it even more complex, there's always content context and context is the king, right?"
  },
  { startTime: 1884.34, person: 'Radek', text: ' So.' },
  { startTime: 1884.44, person: 'Radek', text: ' Right.' },
  {
    startTime: 1885.52,
    person: 'Radek',
    text: ' So asking simple questions can actually lead to, yeah, interesting conversations.'
  },
  {
    startTime: 1893.18,
    person: 'Radek',
    text: ' If something that is easy for you is easy for me, is it a matter of my skill?'
  },
  {
    startTime: 1897.84,
    person: 'Radek',
    text: ' Is it a matter of how long do I work in this organisation?'
  },
  { startTime: 1901.24, person: 'Radek', text: ' So I know how to do it, right?' },
  {
    startTime: 1904.9,
    person: 'Radek',
    text: " It's different for organisations who work on well-established, long-running products."
  },
  {
    startTime: 1911.94,
    person: 'Radek',
    text: " It's different in organisations which are building products from scratch, right?"
  },
  {
    startTime: 1916.26,
    person: 'Radek',
    text: " And we have maybe not well-established processes, but again, that's an opportunity to build them the right way."
  },
  {
    startTime: 1925.98,
    person: 'Radek',
    text: " You know, to build them that we don't design them to generate a lot of extraneous cognitive load for our teams or employees."
  },
  {
    startTime: 1937.18,
    person: 'Karol',
    text: ' So a few examples that come to mind in terms of also handling this.'
  },
  {
    startTime: 1944.1,
    person: 'Karol',
    text: ' If you worked in large organisations, they have certain procedures of, for example, onboarding professionals.'
  },
  {
    startTime: 1950.44,
    person: 'Karol',
    text: ' I found this, I think, several times in many different companies, that, for example, to limit the extraneous load, there is something called the buddy system.'
  },
  {
    startTime: 1964.68,
    person: 'Karol',
    text: ' So on onboarding, you get a colleague of yours assigned to you as a buddy who is supposed to answer all manners of questions that are not management level questions.'
  },
  {
    startTime: 1975.66,
    person: 'Karol',
    text: " Would that be considered basically tackling a part of the extraneous cognitive load for somebody who's a new employee?"
  },
  { startTime: 1985.3, person: 'Radek', text: ' Yeah, I believe it does.' },
  {
    startTime: 1986.88,
    person: 'Radek',
    text: " I mean, first of all, it's such a setup that we have a body that we can refer to with our questions."
  },
  {
    startTime: 1996.16,
    person: 'Radek',
    text: ' I would say, again, a symptom that we recognise the fact that new people will have questions, right?'
  },
  {
    startTime: 2004.84,
    person: 'Radek',
    text: " They may feel, I don't know, too shy to ask them to go to your manager, like you said, right?"
  },
  { startTime: 2010.96, person: 'Radek', text: " Or maybe it's hard to find this information." },
  { startTime: 2016.48, person: 'Radek', text: " Yeah, so that's probably one strategy." },
  {
    startTime: 2019.02,
    person: 'Radek',
    text: " What comes to my mind also from this perspective is that, yeah, I know everyone's talking about AI now, but I think it's a good case."
  },
  { startTime: 2030.08, person: 'Radek', text: ' This is no joke, right?' },
  {
    startTime: 2031.7,
    person: 'Radek',
    text: ' That I know teams who are basically building their own models or agents, and they feed them with curated information about the context of their product, technological solutions, whatever.'
  },
  {
    startTime: 2046.08,
    person: 'Radek',
    text: ' So you may have this kind of virtual body, right?'
  },
  {
    startTime: 2050.199,
    person: 'Radek',
    text: ' So you can ask a chatbot or a solution like this to say, you know, tell me, how did you do it before?'
  },
  { startTime: 2061.34, person: 'Radek', text: ' Where can I find the solution?' },
  {
    startTime: 2064.4,
    person: 'Radek',
    text: ' So we are not talking about the AI agent here working, like doing the work of a developer, for example, right?'
  },
  {
    startTime: 2072.3,
    person: 'Radek',
    text: ' But being this virtual team member, which provides the context-based knowledge, right?'
  },
  {
    startTime: 2079.76,
    person: 'Radek',
    text: ' So we can have our own, whatever, cloud, chat, GPT, or whatever instance, right?'
  },
  {
    startTime: 2084.62,
    person: 'Radek',
    text: ' And say, this is fed with our data, curated one.'
  },
  {
    startTime: 2089.8,
    person: 'Radek',
    text: ' So maybe it will reduce the chances of hallucinating, right?'
  },
  {
    startTime: 2093.9,
    person: 'Radek',
    text: ' And this is our 24 hours never-sleeping body that will help us, right?'
  },
  {
    startTime: 2102.3,
    person: 'Radek',
    text: " And one more sentence, thinking about Team Topology's approach, if we say good platforms are self-service platforms, right?"
  },
  { startTime: 2112.6, person: 'Radek', text: ' So this kind of solution, right?' },
  {
    startTime: 2115.68,
    person: 'Radek',
    text: ' Could also be used company-wide, if I want to know how to do whatever X apply for holidays or what to do with the beers from my business trip or whatever, right?'
  },
  {
    startTime: 2133.42,
    person: 'Radek',
    text: ' Then, of course, I can first try to find it on a Wiki or SharePoint.'
  },
  {
    startTime: 2140.4,
    person: 'Radek',
    text: ' I can try to read the static PDF explaining it, right?'
  },
  {
    startTime: 2145.22,
    person: 'Radek',
    text: ' Or I could have the AI agent who will just, you know, tell me how to do it, right?'
  },
  { startTime: 2149.78, person: 'Radek', text: ' And it will lower my extraneous cognitive load.' },
  { startTime: 2154.56, person: 'Radek', text: ' It will be more friendly.' },
  {
    startTime: 2156.5,
    person: 'Radek',
    text: " It will reduce the time that I'm supposed to spend on something else better than digging the company internet."
  },
  {
    startTime: 2165.98,
    person: 'Karol',
    text: ' That brings me to a very interesting realisation now that I actually have been lowering my intrinsic cognitive load heavily by using specialised AI.'
  },
  {
    startTime: 2180.84,
    person: 'Karol',
    text: ' Because since I do own a licenced Google workspace environment, and since January, Gemini is included in every licence, and basically that the plugin for an AI is available in every single tool.'
  },
  {
    startTime: 2200.22,
    person: 'Karol',
    text: " On top of that, you can specialise your Gemini chat with a specific persona that has a detailed plan what it's supposed to talk about and do."
  },
  { startTime: 2211.66, person: 'Karol', text: " So I'm not a specialist in many things." },
  {
    startTime: 2214.52,
    person: 'Karol',
    text: ' I am a specialist in enterprise application integration.'
  },
  {
    startTime: 2217.94,
    person: 'Karol',
    text: " So basically, while I have, let's say, an interest in educational psychology, or I do enjoy beekeeping, because my stepfather was a beekeeper."
  },
  {
    startTime: 2229.18,
    person: 'Karol',
    text: ' I have limited knowledge about other areas of life, because, well, never going to be a specialist in those.'
  },
  {
    startTime: 2235.86,
    person: 'Karol',
    text: ' And, well, I could read up on them on those topics, but the day only has 24 hours.'
  },
  { startTime: 2243.18, person: 'Karol', text: ' I still need to sleep.' },
  {
    startTime: 2244.82,
    person: 'Karol',
    text: ' And I have two kids and a wife, so that kind of limits the possibility for me to gain new skills.'
  },
  {
    startTime: 2252.8,
    person: 'Karol',
    text: " So for example, if we're talking about marketing or business planning for trainings that I do, or planning even these live streams, I'm not first with the LinkedIn algorithm and doing social media."
  },
  {
    startTime: 2271.14,
    person: 'Karol',
    text: ' So basically, instead of that, I did what I do best.'
  },
  {
    startTime: 2274.7,
    person: 'Karol',
    text: ' I solved the problem by doing something IT related, which I actually know and understand.'
  },
  {
    startTime: 2279.7,
    person: 'Karol',
    text: " So I built myself a specialised chatbot to figure out for me, based on whatever is in the internet, how to deal with social media posts, and how to approach writing those or strategise content creation so that I don't burn out just from doing content."
  },
  {
    startTime: 2297.86,
    person: 'Karol',
    text: " And I just now realised that actually I've been very heavily influencing the intrinsic cognitive load on my shoulders, so I can then deal with actually having the germane cognitive load."
  },
  { startTime: 2314.02, person: 'Radek', text: ' Yeah, okay.' },
  { startTime: 2314.96, person: 'Radek', text: ' So shifting this way.' },
  {
    startTime: 2316.56,
    person: 'Karol',
    text: " That's an interesting observation, because I completely did not realise I've been doing that."
  },
  { startTime: 2322.18, person: 'Karol', text: ' But it helped a lot.' },
  {
    startTime: 2324.74,
    person: 'Radek',
    text: ' Yeah, I mean, we started the conversation talking about the cognitive load, something that is present in our lives every day.'
  },
  {
    startTime: 2333.94,
    person: 'Radek',
    text: " It's present in our non-professional or private lives as well."
  },
  {
    startTime: 2338.66,
    person: 'Radek',
    text: ' How do I shift it to increase cognitive load or increase my mental capacity that I can spend on doing these things and reduce whatever is here on the left hand side, be it the red one or the orange one, sticking to the colours.'
  },
  {
    startTime: 2362.72,
    person: 'Radek',
    text: ' If we say the volume, the capacity is finite, right?'
  },
  {
    startTime: 2367.42,
    person: 'Radek',
    text: " It's not like our brains are stretchable endlessly."
  },
  {
    startTime: 2373.44,
    person: 'Radek',
    text: " But I want to say here that it doesn't mean that we cannot grow in terms of our skills, right?"
  },
  {
    startTime: 2384.72,
    person: 'Radek',
    text: " Because if we identify this high intrinsic cognitive load, then it's a signal that we are asked in our professional environments to do something that we are not skilled enough to do or maybe to do in a proficient way."
  },
  {
    startTime: 2404.34,
    person: 'Radek',
    text: " And that's a signal that should, I would say, radiate in the organisation and organisation should support us, right?"
  },
  {
    startTime: 2413.74,
    person: 'Radek',
    text: " And if we look at the org chart, it's even more complicated."
  },
  { startTime: 2420.36, person: 'Radek', text: ' Why?' },
  {
    startTime: 2422.2,
    person: 'Radek',
    text: ' Because not only the cognitive load has its all flavours that we just discussed, but they also change in time in different parts of organisation, right?'
  },
  {
    startTime: 2435.3,
    person: 'Radek',
    text: " So we started with Conway's law when we say that often the product of organisation reflects the structure or reflects the communication pathways, right?"
  },
  {
    startTime: 2448.04,
    person: 'Radek',
    text: ' Who is speaking to whom and who is not speaking to whom.'
  },
  {
    startTime: 2450.98,
    person: 'Radek',
    text: ' We can see it every day as users of commercial products like, oh, this clearly was done by two departments, right?'
  },
  {
    startTime: 2459.9,
    person: 'Radek',
    text: ' This is so incompatible or so broken, UX is in it.'
  },
  {
    startTime: 2465.66,
    person: 'Karol',
    text: " And I see it every day as an integrator because I'm in the middle of everybody and seeing how they are."
  },
  { startTime: 2470.84, person: 'Karol', text: ' I bet you do, right?' },
  {
    startTime: 2472.48,
    person: 'Karol',
    text: ' Two systems are completely siloed and never exchange a single word between them.'
  },
  { startTime: 2477.28, person: 'Radek', text: ' And they need to exchange data.' },
  {
    startTime: 2478.7,
    person: 'Radek',
    text: ' Those people probably not even attended the same integration part, right?'
  },
  { startTime: 2484.72, person: 'Radek', text: " That's another topic." },
  {
    startTime: 2485.84,
    person: 'Radek',
    text: ' So if we look at the organisation, we could say, oh, I have a picture of organisation.'
  },
  { startTime: 2496.44, person: 'Radek', text: " I'm copying it." },
  { startTime: 2497.64, person: 'Radek', text: ' I will explain in a moment why.' },
  {
    startTime: 2499.54,
    person: 'Radek',
    text: ' And I could say, oh, I have a team and this team is relatively new.'
  },
  {
    startTime: 2504.68,
    person: 'Radek',
    text: " It's composed of, I don't want junior people or something like this."
  },
  { startTime: 2512.04, person: 'Radek', text: ' And yeah, we see a lot of red signals.' },
  {
    startTime: 2517.44,
    person: 'Radek',
    text: ' So sticking to the colour code intrinsic cognitive load because these people are maybe not not skilled with what they are given the task of now.'
  },
  {
    startTime: 2531.54,
    person: 'Radek',
    text: ' At the same time, we may have a team who is, for example, given challenging task, requiring communication or support or services from teams which on the org chart look relatively close.'
  },
  {
    startTime: 2549.1,
    person: 'Radek',
    text: ' But we see that they belong to a different department, right?'
  },
  {
    startTime: 2552.86,
    person: 'Radek',
    text: " So maybe there is a high extraneous cognitive load because they're trying to get someone's help, get someone's engagement, maybe access to applications, whatever else in here."
  },
  {
    startTime: 2568.86,
    person: 'Radek',
    text: ' And of course, this is basically reducing the space that they have for the germane work because I would like to do it.'
  },
  {
    startTime: 2578.74,
    person: 'Radek',
    text: ' But how do we how do we spend more time on the blue if we have the orange here?'
  },
  {
    startTime: 2589.34,
    person: 'Radek',
    text: " And we're going to talk about maybe certain strategies or techniques in the moment, but think of it this way."
  },
  {
    startTime: 2597.38,
    person: 'Radek',
    text: ' Orchards are usually static and orchards change when we see a big shift like transformation, acquisition, merger, whatever, right?'
  },
  { startTime: 2611.58, person: 'Radek', text: ' That the changes changes it.' },
  {
    startTime: 2613.32,
    person: 'Radek',
    text: " But we we cannot forget that, you know, organisations are living beings and we may have, let's just say, maybe I will add some comment here visually, you know, even like six months later, right?"
  },
  {
    startTime: 2630.24,
    person: 'Radek',
    text: " Six months later, we may have the same the same org chart, but we see that, oh, maybe now the situation in this team is really better because they sorted out something, some communication patterns with the other teams and they don't suffer."
  },
  {
    startTime: 2653.88,
    person: 'Radek',
    text: ' They rather spend their time with the right type of cognitive load.'
  },
  {
    startTime: 2660.6,
    person: 'Radek',
    text: ' But, yeah, in the other team, we may have even more of red.'
  },
  { startTime: 2664.98, person: 'Radek', text: ' Why?' },
  {
    startTime: 2665.74,
    person: 'Radek',
    text: " Because this this box looks static, but it's not stable because, let's just say here we had, I don't know, four people who are staying with the organisation for quite some time."
  },
  {
    startTime: 2678.56,
    person: 'Radek',
    text: " We had three new people and six months later, unfortunately, we have six new people in total and just one single member of the team who knows what's being done before."
  },
  { startTime: 2692.66, person: 'Radek', text: ' He cannot be the body for all of them, right?' },
  {
    startTime: 2696.8,
    person: 'Radek',
    text: ' So the situation is unfortunately worse, I would say, because the more red, the more of intrinsic cognitive load.'
  },
  {
    startTime: 2704.54,
    person: 'Radek',
    text: " I don't see too many scenarios when that would be a happy scenario, right?"
  },
  {
    startTime: 2711.14,
    person: 'Radek',
    text: " So this is not only different team by team, but it's also not static in organisations, even though the org chart may fool us a little bit, right?"
  },
  {
    startTime: 2725.32,
    person: 'Radek',
    text: ' I think that the team is more mature because it exists for six more months, right?'
  },
  { startTime: 2732.2, person: 'Radek', text: ' Well, may be true, but may not.' },
  {
    startTime: 2735.14,
    person: 'Karol',
    text: " So we're having problems like employee retention affecting the cognitive load."
  },
  {
    startTime: 2742.84,
    person: 'Karol',
    text: " We're having problems like completely different responsibilities and lack of common understanding and language, which will be affecting the extraneous load and also intrinsic in certain situations."
  },
  {
    startTime: 2761.76,
    person: 'Karol',
    text: ' Then just simply by having different lines of reporting would be already something that is quite problematic at times with the extraneous cognitive load in that sense.'
  },
  { startTime: 2777.06, person: 'Karol', text: " There's so much to that." },
  {
    startTime: 2778.92,
    person: 'Karol',
    text: " And then I'm looking at it from a perspective because I worked most of my life as an IT consultant, and it's a difficult topic."
  },
  {
    startTime: 2788.3,
    person: 'Karol',
    text: " Like I'm looking at it from a perspective of an architect consultant that joins a company to help that company solve a specific problem."
  },
  {
    startTime: 2795.16,
    person: 'Karol',
    text: ' For me to join the company and be effective in that company and gain sufficient context, that is a minimum of two months engagement to just gather context.'
  },
  {
    startTime: 2805.02,
    person: 'Karol',
    text: " And a lot of consulting companies do it the way that you have so-called parachute architects, that you just drop them in a client and then grab them away after two, three weeks because that's the budget."
  },
  { startTime: 2819, person: 'Karol', text: ' There we go.' },
  { startTime: 2821.82, person: 'Karol', text: ' Wow, there are so many variations.' },
  { startTime: 2823.92, person: 'Karol', text: ' First word problems.' },
  { startTime: 2824.9, person: 'Karol', text: ' Yeah, first word problems.' },
  {
    startTime: 2827.3,
    person: 'Karol',
    text: " The thing that comes to mind here, also looking at the comment coming from Dominique, who's mentioning..."
  },
  { startTime: 2837.54, person: 'Radek', text: ' Yeah, fully agree.' },
  { startTime: 2839.08, person: 'Radek', text: ' I was going to comment on it.' },
  {
    startTime: 2840.56,
    person: 'Karol',
    text: ' The thing that comes to mind with this particular comment, and I saw the model of flow, and I absolutely had no idea who this psychologist is.'
  },
  {
    startTime: 2851.36,
    person: 'Karol',
    text: ' The name was unfamiliar, but Jim and I helped really quickly resolve that one.'
  },
  {
    startTime: 2857.01,
    person: 'Karol',
    text: ' And the concept of flow to be the immersion of in an activity.'
  },
  {
    startTime: 2862.3,
    person: 'Karol',
    text: ' This, apart from the comment itself, this brings me into also the topic of neurodiversity and having the cognitive load affecting people that are neurodiverse probably differently than people who are neurotypical.'
  },
  { startTime: 2881.12, person: 'Karol', text: ' And that is another interesting topic.' },
  {
    startTime: 2884.9,
    person: 'Karol',
    text: ' Me, myself, I have ADHD with a slight pinch of autistic traits.'
  },
  {
    startTime: 2890.8,
    person: 'Karol',
    text: " And I know that when I'm in a flow state or a hyper-focused state, as it's called within the ADHD community, nothing else can exist."
  },
  {
    startTime: 2901.8,
    person: 'Karol',
    text: ' And their main cognitive load is just skyrocketing, but then it comes at a cost.'
  },
  { startTime: 2913.16, person: 'Karol', text: " So it's interesting to..." },
  {
    startTime: 2914.8,
    person: 'Karol',
    text: " Let's go back to that comment, and then we've been into the model of flow."
  },
  { startTime: 2920.04, person: 'Karol', text: " What's your point on that here?" },
  {
    startTime: 2923.52,
    person: 'Radek',
    text: ' Yeah, so Dominique, thank you very much for the comment.'
  },
  { startTime: 2926.68, person: 'Radek', text: ' I fully agree.' },
  {
    startTime: 2928.48,
    person: 'Radek',
    text: ' Yeah, this is maybe something that we will talk in a moment, talking about strategies, especially for the intrinsic cognitive load.'
  },
  { startTime: 2937.4, person: 'Radek', text: " So how do we build people's skills?" },
  {
    startTime: 2940.02,
    person: 'Radek',
    text: " How do we increase team's proficiency in using certain technology or even techniques?"
  },
  {
    startTime: 2947.26,
    person: 'Radek',
    text: " I don't know, interviewing customers, whatever, doesn't need to be a hard technology-related skill."
  },
  {
    startTime: 2954.98,
    person: 'Radek',
    text: " I want to say not to overwhelm all of us, but you're right, Karl, the fact that if a person is somewhere on the spectrum of certain challenges with focus, with whatever else, is one aspect."
  },
  {
    startTime: 2978.34,
    person: 'Radek',
    text: ' I want to refer to the off-the-stage conversation about different nationalities.'
  },
  { startTime: 2985.62, person: 'Radek', text: ' These days, even different generations, right?' },
  { startTime: 2988.1, person: 'Radek', text: " Like, I'm 40 plus, right?" },
  {
    startTime: 2991.38,
    person: 'Radek',
    text: " And one could say, oh, he's going to perform differently than the Gen Z people."
  },
  { startTime: 2997.16, person: 'Radek', text: ' Yeah, but are Gen Z people also all the same?' },
  { startTime: 3001, person: 'Radek', text: ' Not, right?' },
  {
    startTime: 3002.02,
    person: 'Radek',
    text: ' So I would say this is a role of a leader or maybe someone assisting the team as a scrum master, someone else, to understand.'
  },
  { startTime: 3012.76, person: 'Radek', text: ' Yeah, who do we have on this team, right?' },
  {
    startTime: 3014.74,
    person: 'Radek',
    text: ' Are they really looking at it from the same perspective?'
  },
  {
    startTime: 3019.12,
    person: 'Radek',
    text: " And following Dominic's comment, I want to say, yeah, going into practise."
  },
  {
    startTime: 3026.4,
    person: 'Radek',
    text: ' So, yeah, we recognise, we acknowledge cognitive load, different types of cognitive load, the fact that the cognitive load in the teams can change over time and will change over time in teams, in organisations.'
  },
  {
    startTime: 3039.92,
    person: 'Radek',
    text: ' Maybe start, or start talking about, okay, what do we do it, right?'
  },
  {
    startTime: 3045.12,
    person: 'Radek',
    text: ' And if we imagine, yeah, organisation, and if we imagine that, you know, there is a team, and we wish from the team topology perspective, that that should be the stream-aligned team, though.'
  },
  {
    startTime: 3062.86,
    person: 'Radek',
    text: ' So they should take a problem and they should deliver the solution, right?'
  },
  {
    startTime: 3066.74,
    person: 'Radek',
    text: " If it's a scrum team, if it's product team, it doesn't really matter."
  },
  { startTime: 3071.58, person: 'Radek', text: ' You can use different vocabulary here.' },
  {
    startTime: 3075.38,
    person: 'Radek',
    text: ' And we say, we see in this team that there are some, you know, symptoms of this intrinsic cognitive load.'
  },
  {
    startTime: 3084.48,
    person: 'Radek',
    text: ' Following the flow, or Trixie Nihali, the concept, yeah, how do we approach it, right?'
  },
  {
    startTime: 3093.78,
    person: 'Radek',
    text: ' And now I see many anti-patterns in organisations.'
  },
  {
    startTime: 3097.52,
    person: 'Radek',
    text: " So we say, if we are missing, let's just say, skill, which is red, what we are supposed to do, well, let's hire the red expert and let's insert him into the team, problem solved, right?"
  },
  {
    startTime: 3111.78,
    person: 'Radek',
    text: " No, we have a bottleneck, we have one, a mass factor one, and if we don't basically propose any solutions, it won't be that naturally by osmosis, this red skill will spread across everyone else, right?"
  },
  { startTime: 3130.24, person: 'Radek', text: " That's not it, right?" },
  { startTime: 3132.62, person: 'Radek', text: ' So what do we try instead?' },
  {
    startTime: 3134.6,
    person: 'Radek',
    text: ' Well, maybe we will find people inside our organisation or outside of our organisations.'
  },
  {
    startTime: 3141.08,
    person: 'Radek',
    text: " Let's create the red team, and red team knows that they are actually revaluable to the organisation because they are this redness centre of excellence."
  },
  { startTime: 3156.16, person: 'Radek', text: " So let's build the ticketing system." },
  {
    startTime: 3160.62,
    person: 'Radek',
    text: ' So every time the yellow team wants something from the red people, please create us a ticket.'
  },
  {
    startTime: 3165.4,
    person: 'Radek',
    text: ' This ticket will wait in a long queue of other tickets, right?'
  },
  {
    startTime: 3169.86,
    person: 'Radek',
    text: " And maybe in a few months, we'll come back to you and do, right?"
  },
  { startTime: 3174.26, person: 'Radek', text: ' Okay, again, something really stupid.' },
  { startTime: 3180.52, person: 'Radek', text: ' And sometimes managers...' },
  {
    startTime: 3183.04,
    person: 'Karol',
    text: ' So we basically solve the lack of scale by introducing extraneous cognitive load.'
  },
  { startTime: 3190.92, person: 'Radek', text: ' Yeah, exactly, right?' },
  {
    startTime: 3193.04,
    person: 'Radek',
    text: ' Because we need to figure it out how the heck to create a ticket for this team.'
  },
  { startTime: 3197.22, person: 'Radek', text: " So that's..." },
  {
    startTime: 3199.14,
    person: 'Karol',
    text: ' And then all the frustration by waiting for that team to actually deliver something, okay?'
  },
  { startTime: 3205.72, person: 'Radek', text: ' Yeah, yeah, yeah.' },
  {
    startTime: 3207.94,
    person: 'Radek',
    text: " But I see, again, I'm not judging that these are bad intentions, right?"
  },
  {
    startTime: 3212.9,
    person: 'Radek',
    text: ' But I see the team and they are missing this certain skill.'
  },
  {
    startTime: 3217.76,
    person: 'Radek',
    text: ' And I see that the manager leader says, like, go and figure it out.'
  },
  {
    startTime: 3224.36,
    person: 'Radek',
    text: ' I want you from, as of next Monday, be expert in red, be expert in this missing skill, right?'
  },
  {
    startTime: 3232.62,
    person: 'Radek',
    text: ' And this is something what very often frustrates people naturally, because, well, how am I supposed to be an expert in it?'
  },
  { startTime: 3241.48, person: 'Radek', text: ' How about even be proficient in it?' },
  {
    startTime: 3247.1,
    person: 'Radek',
    text: ' We are surrounded by people also because of neurodiversity who want to be very proud of what they do, right?'
  },
  {
    startTime: 3256.7,
    person: 'Radek',
    text: " They don't accept some inferior solutions, right?"
  },
  {
    startTime: 3260.58,
    person: 'Radek',
    text: ' They would like to be really not ashamed of what they see.'
  },
  { startTime: 3264.28, person: 'Karol', text: ' Plenty of perfectionists in IT.' },
  { startTime: 3266.78, person: 'Radek', text: ' Exactly, right?' },
  { startTime: 3269.24, person: 'Radek', text: ' So what do we do, right?' },
  { startTime: 3271.16, person: 'Radek', text: ' And I give here a simple analogy.' },
  { startTime: 3274.48, person: 'Radek', text: " So it's still the summertime." },
  {
    startTime: 3278.24,
    person: 'Radek',
    text: " So let's just say you want to learn how to say it."
  },
  { startTime: 3283.38, person: 'Radek', text: ' What do you do, right?' },
  {
    startTime: 3285.04,
    person: 'Radek',
    text: ' I mean, you can go and say, I want to watch many YouTube videos about saying it.'
  },
  { startTime: 3290.97, person: 'Radek', text: ' Okay.' },
  {
    startTime: 3292.18,
    person: 'Radek',
    text: " Probably you're going to learn a lot of language, a lot of theory."
  },
  {
    startTime: 3296.18,
    person: 'Radek',
    text: " You don't know if actually theory applicable to your needs, because you may be watching videos about ocean sailing while you're going to be the lake sailor in the air, right?"
  },
  { startTime: 3314.98, person: 'Radek', text: " That's quite a difference." },
  {
    startTime: 3317.94,
    person: 'Radek',
    text: " I'm going to hire a skipper with a pipe, like every sailor, right?"
  },
  { startTime: 3324.12, person: 'Radek', text: ' And stripes.' },
  { startTime: 3326.74, person: 'Radek', text: ' And the crew.' },
  {
    startTime: 3330.12,
    person: 'Radek',
    text: " And I'm going to sit on the boat, and I'll tell them to operate the boat for me."
  },
  { startTime: 3335.18, person: 'Radek', text: ' I will learn by watching.' },
  {
    startTime: 3337.82,
    person: 'Radek',
    text: " So for me, this is, of course, silly strategy, just like I would say, because I have flown this year already more than 20 times a commercial aeroplane, then I'll become a pilot."
  },
  { startTime: 3350.48, person: 'Radek', text: " No, I'm just a passenger, right?" },
  {
    startTime: 3352.62,
    person: 'Karol',
    text: " It doesn't make me any closer to be in terms of sailing that would actually this approach would actually be probably closer than the YouTube tutorial."
  },
  { startTime: 3361.89, person: 'Radek', text: ' Yeah, exactly.' },
  { startTime: 3363.41, person: 'Radek', text: " Yeah, yeah, yeah, you're right." },
  {
    startTime: 3365.13,
    person: 'Radek',
    text: " Yeah, because in the commercial aeroplane, I'm not even allowed to be in the pilot's cabin, right?"
  },
  {
    startTime: 3370.41,
    person: 'Radek',
    text: " So I don't know what they press or what they pull, right?"
  },
  { startTime: 3373.51, person: 'Radek', text: ' Here, I could watch it, right?' },
  {
    startTime: 3375.93,
    person: 'Radek',
    text: ' And naturally, when I ask people, so, okay, if you say, this is not the way, and this is not the way, what would you do?'
  },
  {
    startTime: 3382.87,
    person: 'Radek',
    text: ' And they say, oh, I would hire an instructor, or I will sign up for a sailing camp.'
  },
  { startTime: 3388.87, person: 'Radek', text: ' So I meet other people like them.' },
  { startTime: 3391.13, person: 'Radek', text: ' And as a group, right?' },
  {
    startTime: 3393.21,
    person: 'Radek',
    text: " And I say, okay, then why don't we do it at work?"
  },
  {
    startTime: 3397.25,
    person: 'Radek',
    text: " If you believe this is a good way to acquire a skill, right, to build, increase the skill, like, why don't we do it at work this way, right?"
  },
  { startTime: 3406.77, person: 'Radek', text: ' And what would it mean at work, right?' },
  {
    startTime: 3408.99,
    person: 'Radek',
    text: " So at work, it would mean that we introduce this concept, as you can see, I have a lot of icons with team topologies, I'm going to find one that we call enabling, right?"
  },
  {
    startTime: 3421.57,
    person: 'Radek',
    text: " And enabling team is not the team that's supposed to do something for you."
  },
  {
    startTime: 3426.71,
    person: 'Radek',
    text: " But they, okay, enabling team, enabling team comes to you just like the sailing instructor, and they ask you, okay, at what level of profession, professions, professions, you're supposed to be, do you want to be, you know, an ocean sailor, who's gonna go for the, like, you know, around the world race, or you just want to feel secure going with your friends on a small sailing boat, right?"
  },
  { startTime: 3455.71, person: 'Radek', text: " So what's the goal, right?" },
  { startTime: 3457.47, person: 'Radek', text: ' What do we want to accomplish, right?' },
  {
    startTime: 3459.67,
    person: 'Radek',
    text: ' Now, okay, how fast do you want to accomplish that?'
  },
  {
    startTime: 3462.91,
    person: 'Radek',
    text: ' Well, I have only two weeks, then my summer holiday is gone, so I would like to do it in two weeks, okay?'
  },
  { startTime: 3469.05, person: 'Radek', text: ' So we have a time box, right?' },
  {
    startTime: 3470.69,
    person: 'Radek',
    text: ' We know that this is going to be two weeks, right?'
  },
  { startTime: 3473.31, person: 'Radek', text: " So let's start, right?" },
  {
    startTime: 3475.05,
    person: 'Radek',
    text: ' And maybe the very first time, you are actually just an observer, and someone else is at the helm, right, of the boat.'
  },
  {
    startTime: 3483.17,
    person: 'Radek',
    text: ' But every day, every time you are during your sailing course, the instructor basically enables you, empowers you to do more, right?'
  },
  {
    startTime: 3494.05,
    person: 'Radek',
    text: " You can start operating the sails, you can start operating maybe the engine, or I don't know the radio if it's on board, and then, of course, steering the boat, etc."
  },
  { startTime: 3507.09, person: 'Radek', text: ' And he gives you the feedback, right?' },
  {
    startTime: 3509.81,
    person: 'Radek',
    text: ' He gives you the feedback, like, are you on track at all?'
  },
  {
    startTime: 3512.17,
    person: 'Radek',
    text: " Yeah, maybe you don't need to really perfectly polish this kind of skill, but maybe work on something else, right?"
  },
  {
    startTime: 3518.93,
    person: 'Radek',
    text: ' And if we have good teachers, and if we have people who are skilled at what they are supposed to teach the others, then we can say, we can add this skill to everyone, maybe differently, but across the whole team, right?'
  },
  {
    startTime: 3539.01,
    person: 'Radek',
    text: " And if you see techniques like mob programming, or per programming, if you see people who come and say, I'm not going to do it for you, I may do it with you, right?"
  },
  {
    startTime: 3553.39,
    person: 'Radek',
    text: " I may help you with it, and I will give you feedback, I will tell you what you're already good at, and whatnot, right?"
  },
  {
    startTime: 3560.75,
    person: 'Radek',
    text: " But what is really important is that we have this time box and this goal, so it's not building another dependency, another extraneous cognitive load."
  },
  {
    startTime: 3578.75,
    person: 'Radek',
    text: " Okay, now my instructor is gone, what I'm supposed to do, right?"
  },
  { startTime: 3582.55, person: 'Radek', text: " What's his phone number, right?" },
  { startTime: 3584.61, person: 'Radek', text: ' Because I cannot do anything without it.' },
  { startTime: 3586.91, person: 'Karol', text: ' This brings to mind two specific things.' },
  {
    startTime: 3591.07,
    person: 'Karol',
    text: ' One, that this enabling team or enablement team in large corporate environments, that probably would be usually or should be usually the L&D.'
  },
  {
    startTime: 3602.75,
    person: 'Radek',
    text: ' So the learning and development unit should be, but I would say the enabling team should not be a concept which is absolutely unknown to learning and development.'
  },
  { startTime: 3615.73, person: 'Radek', text: ' It should be something fairly new.' },
  {
    startTime: 3618.27,
    person: 'Karol',
    text: " The problem I'm seeing already with this popping into my mind is that people in learning and development are often, especially in the tech environment, in technical companies, technological companies, they're not techies themselves."
  },
  {
    startTime: 3638.91,
    person: 'Karol',
    text: ' So that means they lack the context to properly understand the problem space of the lacking skills to enable the team with proper skills that they actually can learn.'
  },
  {
    startTime: 3652.01,
    person: 'Karol',
    text: ' And a very similar situation, and again, context is king, is with recruitment, right?'
  },
  {
    startTime: 3662.41,
    person: 'Karol',
    text: ' So we have a company that requires a specialist, we have specialists on the job market looking for a job, and in the middle of that we have a recruiter.'
  },
  {
    startTime: 3674.39,
    person: 'Karol',
    text: ' And the recruiter, in my opinion, has a very high extraneous cognitive load all the time.'
  },
  {
    startTime: 3684.81,
    person: 'Karol',
    text: " I would say at times, at least those that don't care enough about their job, they have very low domain cognitive load."
  },
  {
    startTime: 3693.69,
    person: 'Karol',
    text: " And if they want to learn and actually be proficient in the field that they're recruiting in, they would probably have a very high intrinsic cognitive load."
  },
  {
    startTime: 3704.31,
    person: 'Karol',
    text: " Because I've seen time and time again where recruiters were posting job postings, especially in recruiting tech, where those job postings have made no sense."
  },
  {
    startTime: 3717.61,
    person: 'Karol',
    text: ' Yeah, or if you disseminate that job posting into actual skills and usual roles in a healthy environment, that would be a whole department, not a single person, right?'
  },
  { startTime: 3732.25, person: 'Karol', text: ' So these kind of things.' },
  {
    startTime: 3733.47,
    person: 'Karol',
    text: " And if a recruiter already has the skills, soft skills and technical skills related to his job, so understanding of that field, they would basically challenge their client, hey, you're looking for a unicorn, that is not a job posting that you'll get candidates for, because it describes half of a department."
  },
  { startTime: 3758.11, person: 'Karol', text: " It's impossible, right?" },
  {
    startTime: 3760.87,
    person: 'Karol',
    text: ' And then that builds again, more extraneous load on the candidates, because if you have a vague job posting, well, it is what it is.'
  },
  {
    startTime: 3773.47,
    person: 'Radek',
    text: " Yeah, it's a tough topic, I would say, because you are right if someone is not familiar with the, let's just say, hard skills that the candidates are supposed to have."
  },
  { startTime: 3788.13, person: 'Karol', text: " Or the teams that we're enabling." },
  { startTime: 3790.47, person: 'Radek', text: ' It raises the risk.' },
  {
    startTime: 3793.21,
    person: 'Radek',
    text: " On the other hand, when you said it, I heard in my head, my colleague, who's a psychologist, and she said many years ago, remember Radek, we hire for skillset and we fire for mindset, right?"
  },
  {
    startTime: 3808.17,
    person: 'Radek',
    text: " So, you know, maybe it's also, what I want to say is like, I believe in such case, of course, there should be some kind of partnership, right?"
  },
  { startTime: 3819.53, person: 'Radek', text: ' So you are right.' },
  {
    startTime: 3821.49,
    person: 'Radek',
    text: ' People from learning and development may not have the skills or knowledge to say how to find the right expert to teach on X or Y.'
  },
  {
    startTime: 3832.55,
    person: 'Radek',
    text: " But they should, again, have, I'm going to go back to this, go back to this picture, they should have maybe a tech lead and a scrum master or whoever else, as partners, right?"
  },
  {
    startTime: 3845.95,
    person: 'Radek',
    text: " So I'm the HR person or learning and development person, and we all together communicate to understand what is needed, what's the best approach to positively attack this high intrinsic cognitive load in this team."
  },
  {
    startTime: 3867.09,
    person: 'Radek',
    text: " I don't know what's the expectation of our viewers, but we said how to recognise and how to manage cognitive load."
  },
  {
    startTime: 3875.87,
    person: 'Radek',
    text: " So if you don't mind, I would like to move along because we also need to talk about this orange, so extraneous."
  },
  { startTime: 3883.13, person: 'Radek', text: ' Okay, yeah, right.' },
  {
    startTime: 3885.49,
    person: 'Radek',
    text: ' So what to do when we figure it out that this is the situation right here, that we are like really suffering from smart people having very little time or definitely too little time spent on the right things because they try to identify, yeah, how to do certain things in this organisation.'
  },
  {
    startTime: 3907.81,
    person: 'Radek',
    text: " And I'm looking again at our chat, I don't know if Sim is with us, but there was a statement, shadow ID is both threat and the learning opportunity."
  },
  {
    startTime: 3916.53,
    person: 'Radek',
    text: ' I will look at this learning opportunity as a good thing.'
  },
  { startTime: 3921.43, person: 'Radek', text: ' Why?' },
  {
    startTime: 3922.57,
    person: 'Radek',
    text: ' Because if we really observed that, you know, people moved from one solution provider to another, then we can identify what was the pain point using the initial solution and what was better with, hopefully better with the with the latter solution, right?'
  },
  { startTime: 3938.93, person: 'Radek', text: ' Like what was better then.' },
  {
    startTime: 3942.21,
    person: 'Radek',
    text: " And if we look at the team topologies, from team topologies perspective, if we have a team which is not independent completely in delivering because let's just say they are supposed to deliver something."
  },
  {
    startTime: 3960.07,
    person: 'Radek',
    text: " But again, it would really overload them to learn quickly something that they don't want to have pH yet."
  },
  { startTime: 3972.21, person: 'Radek', text: ' Like I want to use cloud, right?' },
  {
    startTime: 3975.91,
    person: 'Radek',
    text: ' But but do I need to be all certified AWS and expert or whatever?'
  },
  { startTime: 3983.17, person: 'Radek', text: ' Probably not, right?' },
  {
    startTime: 3984.37,
    person: 'Karol',
    text: " If you're like me, then yes, I would like to be the expert in everything."
  },
  { startTime: 3988.55, person: 'Radek', text: ' Yeah, depending on the role, right?' },
  {
    startTime: 3991.01,
    person: 'Radek',
    text: " If I work in the financial sector, maybe there is a central anti money laundry system in our bank, and I don't need to, I don't want to write it from scratch, right?"
  },
  { startTime: 4002.33, person: 'Radek', text: ' I would like to use it.' },
  { startTime: 4003.81, person: 'Radek', text: ' Yeah, just just use it in a safe way.' },
  {
    startTime: 4005.95,
    person: 'Radek',
    text: " And now what we say, if we start looking at these, let's just say services as platforms, as internal platforms."
  },
  {
    startTime: 4016.69,
    person: 'Radek',
    text: ' So on purpose, I give it the blue colour because in this colour coding, we show platform teams or platform groupings in there.'
  },
  { startTime: 4024.67, person: 'Radek', text: ' So we say, okay, what is really the need?' },
  { startTime: 4031.17, person: 'Radek', text: ' What kind of services are needed?' },
  {
    startTime: 4034.51,
    person: 'Radek',
    text: ' So the yellow team would be speeding up because they use this cloud in the right way.'
  },
  {
    startTime: 4042.07,
    person: 'Radek',
    text: ' And the problem is that we very often see that the cloud team is building something completely overscaled, completely inadequate for the needs of the engineer.'
  },
  { startTime: 4055.65, person: 'Radek', text: " They don't just take me as I am." },
  { startTime: 4058.11, person: 'Radek', text: " This is what we've built, right?" },
  { startTime: 4059.45, person: 'Radek', text: " You don't like it?" },
  { startTime: 4060.57, person: 'Radek', text: ' Go away.' },
  { startTime: 4062.07, person: 'Radek', text: ' And sometimes they go away, right?' },
  { startTime: 4065.29, person: 'Radek', text: ' Like this example that you raised, yeah?' },
  { startTime: 4067.29, person: 'Radek', text: ' But it is really important.' },
  {
    startTime: 4070.21,
    person: 'Radek',
    text: ' And I believe you can find lots of statements from Matthew Skelton, the co-author of Team Topology, saying that, you know, if you leave building this platform to technical people, they will very often build something too complicated, too big, first of all.'
  },
  {
    startTime: 4086.13,
    person: 'Radek',
    text: ' So we have this concept of minimum viable platform, right?'
  },
  {
    startTime: 4090.61,
    person: 'Radek',
    text: " So, like, you know, what would be the minimum set of services that it's enough?"
  },
  {
    startTime: 4096.09,
    person: 'Radek',
    text: " And believe me or not, a few weeks ago, I heard a story from one of the students in the Team Topology class who's very deep into platform engineering perspective."
  },
  {
    startTime: 4108.49,
    person: 'Radek',
    text: " And he said, well, yeah, I've seen that, you know, the platform that we've built was so complicated, so sophisticated, that even people inside this platform team were not exactly sure what some of the services are for, yeah?"
  },
  { startTime: 4126.47, person: 'Radek', text: ' And, you know, this is slowing us down.' },
  { startTime: 4129.29, person: 'Radek', text: ' This costs a lot of money, right?' },
  {
    startTime: 4131.569,
    person: 'Radek',
    text: " And it's slowing down the people who like to use it, right?"
  },
  {
    startTime: 4135.85,
    person: 'Radek',
    text: ' So we say the good platform is the self-service platform.'
  },
  {
    startTime: 4140.31,
    person: 'Radek',
    text: ' The good platform is the platform that understands the needs of their customer, their internal client.'
  },
  { startTime: 4147.63, person: 'Radek', text: ' And it tries to solve these problems.' },
  {
    startTime: 4151.55,
    person: 'Radek',
    text: ' It provides the services which are, like, really here matching the expectations.'
  },
  {
    startTime: 4158.41,
    person: 'Radek',
    text: ' And, yeah, the smaller it is, the simpler it is, the better, right?'
  },
  {
    startTime: 4162.59,
    person: 'Radek',
    text: " We don't need the whole, you know, big machinery behind maybe our use cases."
  },
  { startTime: 4168.95, person: 'Radek', text: ' So just give us the use cases.' },
  { startTime: 4172.09, person: 'Radek', text: ' Provide us, you know, good documentation.' },
  { startTime: 4176.13, person: 'Radek', text: " I don't know, video, tutorial, whatever." },
  { startTime: 4178.25, person: 'Radek', text: ' So we will be independent, right?' },
  {
    startTime: 4181.029,
    person: 'Radek',
    text: ' And a lot of this extraneous cognitive load can be solved this way, right?'
  },
  { startTime: 4188.729, person: 'Radek', text: ' By simple things, right?' },
  { startTime: 4192.21, person: 'Radek', text: ' I also provide trainings.' },
  {
    startTime: 4194.33,
    person: 'Radek',
    text: ' And sometimes I provide these trainings, like, in person, for example, in Warsaw.'
  },
  {
    startTime: 4198.19,
    person: 'Radek',
    text: ' And we, after every class, we look at the questions, what people were asking about.'
  },
  {
    startTime: 4204.33,
    person: 'Radek',
    text: " And we know that one of the training spaces is really too hard to find, despite it's like city centre in Warsaw."
  },
  {
    startTime: 4212.39,
    person: 'Radek',
    text: ' So what we did is, like, we recorded a video, how to enter the building, right?'
  },
  { startTime: 4219.05, person: 'Radek', text: " And everyone said, whoa, that's a game changer." },
  { startTime: 4222.63, person: 'Radek', text: ' Like, how did you figure it out?' },
  {
    startTime: 4224.29,
    person: 'Radek',
    text: " Yeah, it's like, well, because I come here, and every time I need to answer five phone calls, how to enter the building, right?"
  },
  { startTime: 4233.59, person: 'Radek', text: ' So I understand my customers, right?' },
  {
    startTime: 4236.43,
    person: 'Radek',
    text: ' And I want to provide them something self-service, like, okay, we are having training here.'
  },
  { startTime: 4242.17, person: 'Radek', text: " Here's the video in case you cannot find it." },
  {
    startTime: 4244.87,
    person: 'Karol',
    text: ' I want to go back to the platform example for a second.'
  },
  {
    startTime: 4249.25,
    person: 'Karol',
    text: " I've been this year to the main trip in Design Europe, which is a very lovely conference, now hosted in Antwerp in Belgium."
  },
  {
    startTime: 4257.93,
    person: 'Karol',
    text: ' And so happens to be that this year around, we had Gregor Hohpe visiting the conference and giving a talk on the first day.'
  },
  {
    startTime: 4267.65,
    person: 'Karol',
    text: " And well, he's now very famous for the Architects Elevator topic."
  },
  {
    startTime: 4274.27,
    person: 'Karol',
    text: " And basically, he's dealing now with platform engineering."
  },
  { startTime: 4280.09, person: 'Karol', text: ' And he showed it.' },
  {
    startTime: 4283.89,
    person: 'Karol',
    text: ' He described it over triangles, like a normal triangle and flipped with the top upside down, right?'
  },
  { startTime: 4295.93, person: 'Karol', text: ' So like this, yeah.' },
  {
    startTime: 4300.89,
    person: 'Karol',
    text: ' So basically, this situation where if we put infrastructure, structure and the platform engineering team from the bottom and the users on the top, this is a very unstable situation where we are under engineering and providing not enough support for our users.'
  },
  {
    startTime: 4316.55,
    person: 'Karol',
    text: " So our platform is too simplistic, and we'll have a problem."
  },
  {
    startTime: 4321.33,
    person: 'Karol',
    text: ' In the other way around, then we over engineer, like you already said, that even some users, some platform team members absolutely do not have a problem.'
  },
  {
    startTime: 4333.65,
    person: 'Karol',
    text: ' You do not know what the platform does, but it is somewhat stable.'
  },
  {
    startTime: 4338.93,
    person: 'Karol',
    text: ' Now, Gregor postulated a very, very interesting thing that the ideal situation for a platform in terms of being a platform is enablement.'
  },
  {
    startTime: 4354.46,
    person: 'Karol',
    text: ' So provide enough germane cognitive load for the capability to provide to get that germane load with basically then low intrinsic and low extraneous load, so that you could actually merge those two triangles creating something like a hourglass, right?'
  },
  { startTime: 4384.36, person: 'Karol', text: ' Well, yeah, something like that.' },
  {
    startTime: 4386.72,
    person: 'Karol',
    text: ' So basically, well, more of a like, literally, one on top of one on the other.'
  },
  { startTime: 4394.32, person: 'Karol', text: ' Yeah.' },
  { startTime: 4395.1, person: 'Karol', text: ' So basically, yes, like this.' },
  {
    startTime: 4397.04,
    person: 'Karol',
    text: ' So basically, you create a platform where you have a stable infrastructure, and then you are surprised as a platform team by your users.'
  },
  {
    startTime: 4409.12,
    person: 'Karol',
    text: ' What they can achieve because you gave them the tools to build something.'
  },
  {
    startTime: 4414.8,
    person: 'Karol',
    text: " So instead of giving them capabilities with which they're frustrated due to intrinsic cognitive load or extraneous cognitive load, because they now need to suffer this platform environment, find information in a in something being a bad documentation or something."
  },
  {
    startTime: 4435.66,
    person: 'Karol',
    text: ' Now they have an environment that is an enabler, so they can create new things with this platform.'
  },
  {
    startTime: 4446.32,
    person: 'Karol',
    text: ' And if your platform team is surprised by what users do, that would constitute a good platform.'
  },
  { startTime: 4456.62, person: 'Radek', text: ' Yeah.' },
  {
    startTime: 4460.06,
    person: 'Radek',
    text: " Yeah, I'm not going to say I'm the expert on platform engineering."
  },
  {
    startTime: 4463.86,
    person: 'Radek',
    text: ' I realise now that I used the wrong term because we call it like finished viable platform.'
  },
  {
    startTime: 4470.42,
    person: 'Radek',
    text: " But yeah, I think it's still close to what you just said, right?"
  },
  {
    startTime: 4476.6,
    person: 'Radek',
    text: ' Like, I understand that, again, from a team member perspective, who is, you know, asking for a service from this yellow team.'
  },
  { startTime: 4488.84, person: 'Radek', text: ' I may want to just one simple service.' },
  {
    startTime: 4493.3,
    person: 'Radek',
    text: ' But of course, it could be a simplistic, superficial view, and maybe the platform should have a more stable basis, right, for security reasons, scaling reasons, whatever else, right?'
  },
  {
    startTime: 4508.04,
    person: 'Radek',
    text: " So I'm not saying it's only this that, you know, that the smallest possible solution will be, yeah, making all requirements."
  },
  {
    startTime: 4517.76,
    person: 'Karol',
    text: " But a solution that's an enablement would limit those loads."
  },
  {
    startTime: 4525.28,
    person: 'Radek',
    text: " Yeah, still what's really critical is understanding the needs and having conversation here, right?"
  },
  {
    startTime: 4533.06,
    person: 'Radek',
    text: ' Not presenting services, take me as I am, but understanding that, you know, okay, for this team, we need this service.'
  },
  { startTime: 4541.54, person: 'Radek', text: ' And maybe the service is like, really okay.' },
  {
    startTime: 4546.06,
    person: 'Radek',
    text: ' But there might be a different team in our organisation, and they may have a different need.'
  },
  {
    startTime: 4551.92,
    person: 'Radek',
    text: " And we shouldn't say just no, because we already provide service A, and we are not going to have a premium or B."
  },
  {
    startTime: 4559.14,
    person: 'Radek',
    text: ' But really understand that we are, as a platform, this kind of servant role in your organisation, right?'
  },
  {
    startTime: 4570.36,
    person: 'Radek',
    text: ' Okay, we are necessary, but we are not here to, you know, force some policies, rules on others.'
  },
  {
    startTime: 4581.84,
    person: 'Radek',
    text: " There's a very good statement that the good platform is the platform that, you know, the customer are, customers are like, you know, willing to use, not because they must, but because they choose, right?"
  },
  {
    startTime: 4594.84,
    person: 'Radek',
    text: ' So if I could have my own IT department and the shadow IT department, then I go to the first one because, well, they provide the right set of quality, whatever.'
  },
  {
    startTime: 4610.48,
    person: 'Radek',
    text: " It's defining that, you know, my happiness factor of using it."
  },
  {
    startTime: 4615.14,
    person: 'Karol',
    text: ' But to touch upon a quite important topic, that is, I think a very live one, especially this year in the DDD community, is because DDD usually stands for ubiquitous language as one of the basis of the whole movement and the whole field of the main driven design.'
  },
  {
    startTime: 4637.96,
    person: 'Karol',
    text: ' So building that common understanding of things and the commonality in language so that everybody understands within the same bounded context, the thing in the same way.'
  },
  {
    startTime: 4649,
    person: 'Karol',
    text: " And I've seen that time and time again, that while we may be applying that on the level of solutions or business problems or business products, processes, this ubiquitous language often is not something that happens on the level of an organisation."
  },
  {
    startTime: 4672.02,
    person: 'Karol',
    text: " And this is also where these, this extraneous cognitive load kicks in heavily, because we can be talking about exactly the same thing, but because we're using different terms for the exact same thing, we create a complete disconnect and we're not able to communicate with one another."
  },
  {
    startTime: 4691,
    person: 'Karol',
    text: ' And that leads to frustration, burnout and whatever else is there in a sense of those different problems, cognitive problems, cognitive load problems.'
  },
  { startTime: 4705.58, person: 'Radek', text: " Yes, you're right." },
  {
    startTime: 4707.34,
    person: 'Radek',
    text: ' And I see also the other end of spectrum when we use the same vocabulary, but we understand completely different things under the same names, right?'
  },
  {
    startTime: 4717.54,
    person: 'Radek',
    text: ' And I could say the examples that we just shown here are like very good examples, because when we say a platform, what people imagine is like software platform, like SAP, Jira, AWS.'
  },
  {
    startTime: 4732.26,
    person: 'Radek',
    text: ' No, we are talking about the service platform, like what do we provide you?'
  },
  { startTime: 4736.8, person: 'Radek', text: ' How do we enable you to do something, right?' },
  { startTime: 4739.58, person: 'Radek', text: ' How do we speed up your work, right?' },
  {
    startTime: 4743.02,
    person: 'Radek',
    text: " If I had a case of working with, yeah, in a training with a group of people who are safe consultants or trainers, I'm not an expert on the latest revision of safe, but there's also concept of enabling things in safe, but the concept is really, really different under the same name, right?"
  },
  { startTime: 4766.5, person: 'Radek', text: ' Because here we say, I come to enable you.' },
  { startTime: 4770.16, person: 'Radek', text: " You know that I'm going to go away." },
  { startTime: 4772.1, person: 'Radek', text: " I don't want to take hostages." },
  {
    startTime: 4774.1,
    person: 'Radek',
    text: " I'm not going to make you dependent on me, right?"
  },
  {
    startTime: 4778.68,
    person: 'Radek',
    text: " And very often in the safe environment, I hear enabling things are actually things like infrastructure or DevOps or whatever, which are actually operating in this, give me a ticket, I'll come back to you once."
  },
  { startTime: 4796.22, person: 'Radek', text: ' Somewhere in the future, yeah.' },
  {
    startTime: 4798.62,
    person: 'Karol',
    text: ' So instead of being enablement, they become bottleneck teams, right?'
  },
  {
    startTime: 4805.02,
    person: 'Radek',
    text: " I'll put another, and if you don't catch that early, right?"
  },
  {
    startTime: 4809.3,
    person: 'Karol',
    text: " I'll put you another example from a perspective of learning languages."
  },
  { startTime: 4815.34, person: 'Karol', text: " And you're absolutely right." },
  {
    startTime: 4816.7,
    person: 'Karol',
    text: " It's not only about using the same terms and words, because it's also about the semantic understanding of things."
  },
  { startTime: 4822.94, person: 'Karol', text: ' Those words.' },
  {
    startTime: 4823.58,
    person: 'Karol',
    text: ' So we need to build a semantic dictionary of what we are actually talking about.'
  },
  {
    startTime: 4831.26,
    person: 'Karol',
    text: ' So that common dictionary, and that will limit the extraneous cognitive load.'
  },
  {
    startTime: 4836.14,
    person: 'Karol',
    text: ' But that takes a lot of intrinsic cognitive load than to do.'
  },
  { startTime: 4841, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 4841.68,
    person: 'Karol',
    text: ' But just to give you an example, I was just before our stream, I went to the shop just to do groceries.'
  },
  {
    startTime: 4848.62,
    person: 'Karol',
    text: ' And while exiting, I met a language partner that used to be assigned from a nonprofit here in the Netherlands to my wife for her to train in Dutch language.'
  },
  {
    startTime: 4867.48,
    person: 'Karol',
    text: " And we dive into a little bit of a conversation, and I told her what's going on in our lives, and she was very happy to see me, and I told her I'm beginning a new job."
  },
  {
    startTime: 4881.76,
    person: 'Karol',
    text: " And she said that in Dutch that there is this phrase, I didn't exactly catch the meaning, but it was like a very positive phrase, not maybe congratulating, but like hoping for the best of something like this."
  },
  { startTime: 4895.96, person: 'Karol', text: ' And the phrase was toy, toy, toy.' },
  {
    startTime: 4901.56,
    person: 'Karol',
    text: " And in my Polish brain, when I hear toy, toy, it's like, yeah, I already do not retain the meaning of that phrase because in my brain, it opens up a little bit of a box with portable toilets, right?"
  },
  { startTime: 4919.96, person: 'Karol', text: ' So yeah, toy, toy, portable toilet.' },
  {
    startTime: 4924.22,
    person: 'Karol',
    text: " Same phonetics, same word, maybe different spelling, perhaps, but already the semantic meaning of the term made it completely impossible for me to comprehend what's going on in the conversation at this point."
  },
  {
    startTime: 4942.66,
    person: 'Karol',
    text: ' And that happens a lot of times with companies using abbreviations all the time.'
  },
  { startTime: 4949.94, person: 'Karol', text: ' Like, what is MVP?' },
  { startTime: 4951.94, person: 'Karol', text: ' MVP?' },
  {
    startTime: 4952.94,
    person: 'Karol',
    text: " MVP has so many meanings that when somebody says MVP to me, I'm like, I have no idea what you're talking about, because I know so many definitions of what an MVP is that you have to be more specific."
  },
  { startTime: 4968.72, person: 'Karol', text: ' Sorry.' },
  { startTime: 4970.5, person: 'Radek', text: ' Right?' },
  { startTime: 4971.08, person: 'Radek', text: ' Yeah, yeah.' },
  { startTime: 4972.6, person: 'Radek', text: ' So, Karol, I will now do the segue to my Kanban.' },
  { startTime: 4976.28, person: 'Karol', text: ' Right?' },
  {
    startTime: 4978.12,
    person: 'Radek',
    text: ' So what I try to teach people is that if people come to more like more advanced Kanban classes, they are like coaches, consultants, whatever.'
  },
  {
    startTime: 4989.3,
    person: 'Radek',
    text: ' I say, remember, every time you hear we do Kanban, we want to do Kanban, we are moving into Kanban.'
  },
  { startTime: 4997.02, person: 'Radek', text: ' First thing, ask, what do you mean by Kanban?' },
  { startTime: 5000.84, person: 'Radek', text: ' What do you mean?' },
  { startTime: 5002.08, person: 'Radek', text: ' Is it just a board?' },
  { startTime: 5003.16, person: 'Radek', text: ' Is it a pull system?' },
  { startTime: 5004.34, person: 'Radek', text: ' Is it a method?' },
  { startTime: 5005.38, person: 'Radek', text: ' What do you want to accomplish?' },
  { startTime: 5007.2, person: 'Radek', text: ' How would you say that we reach this Kanban?' },
  { startTime: 5010.66, person: 'Karol', text: " What's the success criteria?" },
  { startTime: 5013.16, person: 'Radek', text: ' Exactly.' },
  { startTime: 5013.92, person: 'Radek', text: ' Yeah, exactly.' },
  {
    startTime: 5014.56,
    person: 'Radek',
    text: ' And it applies to language, to enabling other things.'
  },
  { startTime: 5021.7, person: 'Radek', text: ' How would we recognise that we enabled them?' },
  { startTime: 5023.98, person: 'Radek', text: ' Right?' },
  {
    startTime: 5024.32,
    person: 'Radek',
    text: ' How would we recognise that we really did our job well?'
  },
  { startTime: 5028.6, person: 'Radek', text: ' Yeah.' },
  {
    startTime: 5029.1,
    person: 'Radek',
    text: ' How would we say that if we are the only cloud to use us, but if there would be another cloud, they would stay with us?'
  },
  {
    startTime: 5038.74,
    person: 'Radek',
    text: ' So, how would we really fulfil their needs because we really understand what our customers want?'
  },
  { startTime: 5048.46, person: 'Karol', text: " That's a difficult one." },
  {
    startTime: 5049.64,
    person: 'Radek',
    text: ' Yeah, and this is a good segue to this germane cognitive load, right?'
  },
  { startTime: 5058.98, person: 'Radek', text: ' Because take a look at this.' },
  {
    startTime: 5060.28,
    person: 'Radek',
    text: ' We somehow naturally moved into this area because if you are a tech leader, if you are an owner driver of a platform, then of course you basically repeat the same lesson inside your team.'
  },
  {
    startTime: 5077.44,
    person: 'Radek',
    text: ' Are my people skilled to build the platform, right?'
  },
  {
    startTime: 5081.94,
    person: 'Radek',
    text: ' So, do I have intrinsic cognitive load in my team, right?'
  },
  {
    startTime: 5088.48,
    person: 'Radek',
    text: ' Are my people facing some kind of extraneous cognitive load?'
  },
  {
    startTime: 5093.76,
    person: 'Radek',
    text: ' Because, for example, procurement and purchasing and licencing is a pain in the back in my organisation, right?'
  },
  { startTime: 5102.24, person: 'Radek', text: " So, I know what I'm supposed to do." },
  {
    startTime: 5104.26,
    person: 'Radek',
    text: ' I know what I should buy for my internal customers to speed them up or how do I do it in this company, right?'
  },
  {
    startTime: 5111.2,
    person: 'Radek',
    text: ' But we cannot forget and we want to focus on this germane cognitive load.'
  },
  { startTime: 5116.88, person: 'Radek', text: ' So, who are our customers, right?' },
  { startTime: 5119.66, person: 'Radek', text: ' What are their needs?' },
  {
    startTime: 5121.52,
    person: 'Radek',
    text: ' Do we have any signals that their needs will change in a quarter of a year, right?'
  },
  { startTime: 5128.6, person: 'Radek', text: ' So, continuously probing, right?' },
  { startTime: 5131.48, person: 'Radek', text: ' Okay, you ask for A.' },
  { startTime: 5133.94, person: 'Radek', text: ' You got A.' },
  { startTime: 5134.96, person: 'Radek', text: " You're happy." },
  { startTime: 5135.78, person: 'Radek', text: ' We see that you consume service A.' },
  {
    startTime: 5139.16,
    person: 'Radek',
    text: " But, yeah, we shouldn't say A is like forever like this, frozen, you know, in carbonite and never going to change."
  },
  { startTime: 5148.74, person: 'Radek', text: ' No.' },
  { startTime: 5151.16, person: 'Radek', text: " What's next, right?" },
  { startTime: 5152.66, person: 'Radek', text: " So, it's endless story." },
  {
    startTime: 5155.34,
    person: 'Radek',
    text: ' And, again, just like we showed that, you know, it could be different in this team.'
  },
  {
    startTime: 5159.82,
    person: 'Radek',
    text: ' It could be different in this team if this is the end, this platform team, right, which provides something to our product team or streamline team or something like this.'
  },
  {
    startTime: 5171.86,
    person: 'Karol',
    text: " I know while you were describing that, I was like in my brain analysing my situation, let's say, with bridging the gap and my team would have been bridging the gap because there's five of us now."
  },
  { startTime: 5186.02, person: 'Karol', text: " I'm looking at this this way." },
  {
    startTime: 5188.44,
    person: 'Karol',
    text: " Well, okay, we're doing a lot of research in the field of enterprise application integration because that's the mission statement within bridging the gap to enable our readers with tech agnostic, proper training and information about the field."
  },
  {
    startTime: 5204.42,
    person: 'Karol',
    text: " It's like, okay, this is this is a huge intrinsic cognitive load because we're getting a lot of information."
  },
  {
    startTime: 5213.42,
    person: 'Karol',
    text: " We're trying to classify that information properly, learning new things about the field that we haven't considered anyhow, and then turning that into the domain where we actually describe that as articles and do video elements and prepare training."
  },
  {
    startTime: 5232.6,
    person: 'Karol',
    text: ' But at the same time, because we are working as an open source and after hours, this is more of a project of a passion than actual work.'
  },
  {
    startTime: 5244,
    person: 'Karol',
    text: ' We have a lot of extraneous cognitive load because all of us are working full time.'
  },
  {
    startTime: 5252.04,
    person: 'Karol',
    text: " Most of us have families and I think only two of us don't have kids, but we have our families."
  },
  {
    startTime: 5264.1,
    person: 'Karol',
    text: " We have our own specific problems with, let's say, health, dealing with psychological health or trying to stay on top of things that the number of topics we have to handle."
  },
  {
    startTime: 5279.68,
    person: 'Karol',
    text: " So if I'm looking at this from a perspective of bridging the gap, we have a bucket full with extraneous cognitive load, a little bit of intrinsic and a thin layer of germane on top of that."
  },
  {
    startTime: 5294.04,
    person: 'Karol',
    text: " But because we're not doing this for profit and we're not earning anything from it, we cannot really do anything about the extraneous load."
  },
  {
    startTime: 5303.08,
    person: 'Karol',
    text: ' The only thing we can actually work with is intrinsic.'
  },
  {
    startTime: 5307.26,
    person: 'Karol',
    text: ' And since this is mostly research, again, we cannot do anything about that at this point other than bring other people in.'
  },
  {
    startTime: 5317.34,
    person: 'Karol',
    text: " And then on top of that, if we're doing initiatives like exactly this livestream, before doing this, I never streamed anything in my life."
  },
  {
    startTime: 5326.32,
    person: 'Karol',
    text: ' So being a perfectionist and having ADHD, imagine how much intrinsic load I had just researching which streaming platform to choose for the purpose.'
  },
  {
    startTime: 5339.02,
    person: 'Karol',
    text: " It's interesting to look at everything I do from this perspective because it's a completely different way of looking at things in terms of cognitive load and how big of a cost that is."
  },
  {
    startTime: 5359.46,
    person: 'Radek',
    text: ' Yeah, listening to you, I naturally started drawing like a wordly map, so the hope for you and your initiative is that you say a few weeks ago, months ago, the video stream was completely new to me.'
  },
  {
    startTime: 5379.42,
    person: 'Radek',
    text: " And as you can see, this is also visible for our users, so it's also relatively high on the other axis."
  },
  {
    startTime: 5388.78,
    person: 'Radek',
    text: " It's going to stay here, but it's going to move to the right, almost to commodity because you are now more proficient with it."
  },
  {
    startTime: 5398.48,
    person: 'Radek',
    text: " And I want to say that I often mix both Kanban and Team Topologies because for me, it is very compatible that we say, well, another factor that we haven't spoken about yet today, and maybe that's a good segue to your next guest because I know that you're going to speak to Aleix Morgadas soon."
  },
  {
    startTime: 5420.72,
    person: 'Radek',
    text: " It's also like a different perspective at cognitive load."
  },
  {
    startTime: 5425.72,
    person: 'Radek',
    text: " Don't throw too many things at the team at once."
  },
  {
    startTime: 5429.6,
    person: 'Radek',
    text: " So you cannot say you are supposed to take care of project A, project B, products, whatever, because naturally you're going to have a pick in everything that's related to skills, for example, necessary in all the projects."
  },
  {
    startTime: 5445.58,
    person: 'Radek',
    text: ' So stop starting, start finishing, like Kanban says.'
  },
  { startTime: 5449.44, person: 'Radek', text: ' Take one thing and move it to the right.' },
  {
    startTime: 5452.54,
    person: 'Radek',
    text: ' And if you publish something, then naturally you start with this intrinsic extraneous germane, which is like this article, video, whatever you produce in the end.'
  },
  {
    startTime: 5466.74,
    person: 'Radek',
    text: " And then we take another path from left to right, also from this perspective, and then we free up, let's just say, our capacity to, well, I don't know, automate whatever."
  },
  {
    startTime: 5483.38,
    person: 'Radek',
    text: " So we have more for this because we hopefully have under control what's red and orange."
  },
  {
    startTime: 5492.42,
    person: 'Radek',
    text: " And it's okay that the ratio of the colour changes, right?"
  },
  {
    startTime: 5497.24,
    person: 'Radek',
    text: ' Because like we said, if we are lifetime learners, then naturally, sometimes we are craving for red.'
  },
  { startTime: 5504.68, person: 'Radek', text: ' I can here give my personal life scenario.' },
  {
    startTime: 5509.6,
    person: 'Radek',
    text: ' I have this podcast, the audio podcast in Polish, Kanban Przy Kawie.'
  },
  {
    startTime: 5512.68,
    person: 'Radek',
    text: ' I started it as a passion project and I loved discovering, you know, all audio production software, right?'
  },
  {
    startTime: 5523.54,
    person: 'Radek',
    text: ' But is it really the best time investment from my side?'
  },
  { startTime: 5528.16, person: 'Radek', text: ' Probably not.' },
  {
    startTime: 5529.32,
    person: 'Radek',
    text: " So after some time, it's been automated, it's been, let's just say, externalised to someone."
  },
  {
    startTime: 5535.52,
    person: 'Radek',
    text: ' So I have time to work on, you know, inviting interviews for guests for the interviews, right?'
  },
  { startTime: 5543.6, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 5544.06,
    person: 'Karol',
    text: ' So I had the same, pretty much the same workload around that.'
  },
  { startTime: 5551.48, person: 'Karol', text: ' I had no idea how to do proper invites.' },
  { startTime: 5554.24, person: 'Karol', text: ' So I was like experimenting.' },
  { startTime: 5556.9, person: 'Karol', text: ' I had no idea how to deal with video.' },
  { startTime: 5560.98, person: 'Karol', text: ' I had to start experimenting.' },
  {
    startTime: 5563.14,
    person: 'Karol',
    text: ' So that experiment, which was very, that very high intrinsic cognitive load turned into a very nice germane cognitive load, because now I have a template for all invites to the live stream with a nice graphics and a nice backstory.'
  },
  {
    startTime: 5579.98,
    person: 'Karol',
    text: ' And I just then change just a few, tweak a few things so that they just go correctly, right?'
  },
  { startTime: 5586.52, person: 'Karol', text: ' Same with video.' },
  {
    startTime: 5588.12,
    person: 'Karol',
    text: " If I would do YouTube shorts, which I'm going to do from this live stream as well."
  },
  {
    startTime: 5593.88,
    person: 'Karol',
    text: ' Now I have a template ready in Google Vids, so I can just paste in the specific piece of video.'
  },
  {
    startTime: 5602.94,
    person: 'Karol',
    text: ' And then I already have transitions in, I already have some graphics in, I just need to cut it, paste it, see if it works, add a commentary and publish.'
  },
  {
    startTime: 5616.26,
    person: 'Karol',
    text: ' And it became more of an automated process, because it requires a lot less attention from me than it used to.'
  },
  {
    startTime: 5624.86,
    person: 'Karol',
    text: " I don't have to relearn it because that's already a skilled game."
  },
  {
    startTime: 5628.64,
    person: 'Karol',
    text: " So it's in that sense, it's a journey of discovery."
  },
  {
    startTime: 5633.94,
    person: 'Karol',
    text: " But for that part, I didn't have that much of extraneous load because I just did the research and it's good."
  },
  {
    startTime: 5642.58,
    person: 'Karol',
    text: " But in general, if we're looking at the whole picture of bridging the gap, for example, the extraneous cognitive load is humongous in our work."
  },
  {
    startTime: 5656.94,
    person: 'Karol',
    text: ' Yeah, so again, contextualising, for example, certain processes is something interesting then.'
  },
  {
    startTime: 5663.96,
    person: 'Radek',
    text: ' And I thought about it like, okay, how to wrap it up, right?'
  },
  {
    startTime: 5667.48,
    person: 'Radek',
    text: ' Because we covered these types of cognitive loads.'
  },
  {
    startTime: 5671.78,
    person: 'Radek',
    text: " We covered some strategies about approaching the intrinsic, approaching the extraneous yet not being happy that we don't have to remain cognitive load, because we should have it."
  },
  {
    startTime: 5688.48,
    person: 'Radek',
    text: " And I think it's good to wrap it up that we started with cognitive load as a definition and how to recognise that it's there."
  },
  {
    startTime: 5699.04,
    person: 'Radek',
    text: " I know that there's this academic argument, if it's there or not, if it's applicable to teams or not."
  },
  {
    startTime: 5706.86,
    person: 'Radek',
    text: ' Now what comes to my mind is like a quote from my favourite writer, Philip K.'
  },
  {
    startTime: 5715.82,
    person: 'Radek',
    text: ' Dick, who I believe wrote in one of his books that reality is something that still exists even if you stop believing in it.'
  },
  {
    startTime: 5723.36,
    person: 'Radek',
    text: ' And I believe this is with cognitive load as well, right?'
  },
  { startTime: 5726.36, person: 'Radek', text: ' You may not believe in it.' },
  { startTime: 5727.74, person: 'Radek', text: " You may pretend that it's not there." },
  {
    startTime: 5730.14,
    person: 'Radek',
    text: " You may argue, right, if it's the right name for the phenomena."
  },
  { startTime: 5737.24, person: 'Karol', text: " I'll argue as a big fan of quantum physics." },
  { startTime: 5744.28, person: 'Radek', text: " Okay, it's there, right?" },
  {
    startTime: 5747.2,
    person: 'Radek',
    text: " If you call it this way, if you name it differently, that's your choice."
  },
  {
    startTime: 5751.6,
    person: 'Radek',
    text: " Just don't have it in your blind spot because it's going to hit you."
  },
  {
    startTime: 5755.64,
    person: 'Radek',
    text: ' You as an individual, you as the team, you as the manager or leader of organisation.'
  },
  {
    startTime: 5761.88,
    person: 'Radek',
    text: " So it's good to be aware of it and understand it."
  },
  { startTime: 5765.84, person: 'Radek', text: ' Where are we with it, right?' },
  {
    startTime: 5767.16,
    person: 'Radek',
    text: ' And creating this kind of simple visual like we just did here.'
  },
  {
    startTime: 5771.3,
    person: 'Radek',
    text: ' Okay, what kind of problem now we have in this team, what kind of deficits, what kind of challenges we have in the other.'
  },
  {
    startTime: 5778.48,
    person: 'Radek',
    text: ' This is the first step to define some action, some strategies against it.'
  },
  {
    startTime: 5787.3,
    person: 'Radek',
    text: " And yeah, it's always also going to be there, the good type of cognitive load."
  },
  { startTime: 5792.2, person: 'Radek', text: ' We are not going to get rid of it.' },
  {
    startTime: 5795,
    person: 'Radek',
    text: " But yeah, if we're not going to do anything about it, then it's going to be this kind of anchor, be this kind of hiccups."
  },
  { startTime: 5803.36, person: 'Karol', text: ' You could get rid of it.' },
  { startTime: 5805.96, person: 'Radek', text: ' Just do nothing.' },
  { startTime: 5808.92, person: 'Radek', text: ' Yeah.' },
  { startTime: 5813.48, person: 'Radek', text: ' Okay, joking.' },
  {
    startTime: 5816.98,
    person: 'Radek',
    text: " No, like seriously, what would it mean that we don't have it, right?"
  },
  {
    startTime: 5820.06,
    person: 'Radek',
    text: ' It means like, you know, our company, our professional growth, our even existence as a human being is gone.'
  },
  { startTime: 5830.32, person: 'Radek', text: " It's done, right?" },
  {
    startTime: 5831.08,
    person: 'Radek',
    text: " Like, okay, if the company goes into bankruptcy, yeah, you don't have cognitive load."
  },
  {
    startTime: 5835.92,
    person: 'Radek',
    text: ' But still, maybe some lawyers have cognitive load.'
  },
  {
    startTime: 5839.8,
    person: 'Karol',
    text: ' We will not get rid of cognitive load because we still need to think about things and produce things as human beings, because you would have to be in a vegetative state not to have cognitive load, basically, in that sense.'
  },
  {
    startTime: 5853.4,
    person: 'Karol',
    text: " And even then, some people might argue that the brain is still functioning because you still think, or you still dream, at least, let's say, which would mean that you still exhibit some sort of a cognitive or, let's say, subconscious, maybe, but that also could be considered."
  },
  {
    startTime: 5874.96,
    person: 'Karol',
    text: " So as far as that there's a joke, I mean, yeah, it's a joke."
  },
  {
    startTime: 5880.16,
    person: 'Karol',
    text: " But yes, cognitive load would be then always, it's a matter of balancing which type we experience more."
  },
  { startTime: 5889.1, person: 'Karol', text: ' Exactly.' },
  {
    startTime: 5891.76,
    person: 'Karol',
    text: " I think that's a very, very good takeaway for the end of this particular stream."
  },
  {
    startTime: 5898.5,
    person: 'Karol',
    text: " Now, to be fair, we'll be coming back to cognitive load in a, in September, because we're having this live stream with Aleš soon enough, that's not going to be that far away, just a month away."
  },
  {
    startTime: 5915.66,
    person: 'Karol',
    text: " So we're going to be then talking more about measuring that and diving a little bit deeper into the science of cognitive load, which is going to be probably something also very, very interesting to see."
  },
  {
    startTime: 5932.22,
    person: 'Karol',
    text: " Because right now, if we're looking at companies that are mostly measuring performance, I'm a huge fan in that sense of measurements, I'm a huge fan of what Simon Sinek says about performance, that we should also start measuring trust."
  },
  {
    startTime: 5949.82,
    person: 'Karol',
    text: " But looking at cognitive load, we should also start measuring this more actively, because while trust is basically important, this is a very important thing to be able to recognise and manage the cognitive load we're doing, because that might be actually a destructive force in our work."
  },
  { startTime: 5976.36, person: 'Karol', text: ' Right.' },
  {
    startTime: 5978.16,
    person: 'Karol',
    text: ' So, last chance for the audience to pop in with comments, questions, anything, we have a, it looks like Sim was still watching us.'
  },
  { startTime: 5991.18, person: 'Radek', text: ' Great.' },
  { startTime: 5993.32, person: 'Karol', text: ' And yes, redundancy hits hard.' },
  { startTime: 5995.86, person: 'Karol', text: " That's true." },
  {
    startTime: 5997.9,
    person: 'Karol',
    text: ' And yeah, if we put value in the things we know, instead of the value of our capabilities, then yes, well, we should start shifting the value a little bit else.'
  },
  {
    startTime: 6011.12,
    person: 'Karol',
    text: ' So so that that is a very, very, very valuable comment there.'
  },
  {
    startTime: 6016.62,
    person: 'Karol',
    text: " All right, just the last few words, then, and I'm going to move to a to a slide here before we say our goodbyes."
  },
  {
    startTime: 6025.22,
    person: 'Karol',
    text: " So, next up, in pretty much a week, we'll be talking about publish subscribe, that's even from an architecture."
  },
  {
    startTime: 6034.82,
    person: 'Karol',
    text: " So we're shifting the topics back to tech and architecture."
  },
  {
    startTime: 6040.64,
    person: 'Karol',
    text: " This time around, I'll be joined by Adam Lee from Solace."
  },
  {
    startTime: 6045.14,
    person: 'Karol',
    text: " He's a former developer advocate, and now he went back to being a solutions engineer."
  },
  {
    startTime: 6051.38,
    person: 'Karol',
    text: " That's going to be quite an interactive session as well with some really fun examples."
  },
  {
    startTime: 6059.24,
    person: 'Karol',
    text: ' And, and I think Adam has a bit of a game for us if we will have people in the audience willing to play, all based on publish subscribe.'
  },
  {
    startTime: 6070.7,
    person: 'Karol',
    text: " So that's going to be a probably fun thing to do."
  },
  {
    startTime: 6075.62,
    person: 'Karol',
    text: " And lastly, if you're still with us, and still listening and watching, hit the QR codes."
  },
  {
    startTime: 6084.3,
    person: 'Karol',
    text: " You can read about enterprise application integration, which was not the topic of today's stream."
  },
  {
    startTime: 6090.74,
    person: 'Karol',
    text: ' Bridging the gap, we have some articles touching upon various aspects of working in it in integration, you can subscribe to sub stock where those articles will also be based on an RSS feed or a subscription based newsletter, and also subscribe to the YouTube channel.'
  },
  {
    startTime: 6112.18,
    person: 'Karol',
    text: " So you can get notifications about new streams, new topics that we'll be handling."
  },
  {
    startTime: 6118.7,
    person: 'Karol',
    text: ' All of our live sessions are on YouTube as well as LinkedIn.'
  },
  {
    startTime: 6123.96,
    person: 'Karol',
    text: " Well, today, luckily for us due to a technical glitch, we're actually not on LinkedIn."
  },
  { startTime: 6130.28, person: 'Karol', text: ' Sorry, LinkedIn.' },
  { startTime: 6132.68, person: 'Karol', text: ' That happens from time to time.' },
  {
    startTime: 6134.32,
    person: 'Karol',
    text: " I'll investigate later what actually happened because restream is saying we're streaming on LinkedIn, but LinkedIn says, ah, so subscribe on YouTube."
  },
  {
    startTime: 6145.44,
    person: 'Karol',
    text: " That's a seems like a more stable platform for watching."
  },
  {
    startTime: 6149.92,
    person: 'Karol',
    text: " And if you're watching us on the recording, well, tune into another live stream so that you can actually participate."
  },
  { startTime: 6158.84, person: 'Karol', text: ' Ask questions, comment on the topics.' },
  { startTime: 6162.18, person: 'Karol', text: ' And going back to our video feeds.' },
  {
    startTime: 6165.38,
    person: 'Karol',
    text: ' Radek, thank you so much for explaining cognitive load.'
  },
  {
    startTime: 6169.34,
    person: 'Karol',
    text: ' I think the examples you gave really gonna hit a well and land with some understanding.'
  },
  {
    startTime: 6177.08,
    person: 'Karol',
    text: " At least I know I'm educated better on the cognitive load and the different types of cognitive load right now."
  },
  {
    startTime: 6182.2,
    person: 'Karol',
    text: ' And I know how to I know better how to apply this knowledge on my daily struggles as a specialist or a father or husband.'
  },
  {
    startTime: 6196.16,
    person: 'Karol',
    text: ' Definitely going to be something something useful there to watch for and manage that better.'
  },
  { startTime: 6202.02, person: 'Karol', text: ' Yeah.' },
  { startTime: 6203.62, person: 'Karol', text: ' So hope everybody enjoyed the stream.' },
  { startTime: 6207.98, person: 'Karol', text: ' And Radek, any parting words?' },
  { startTime: 6210.24, person: 'Karol', text: ' Last piece of advice?' },
  { startTime: 6211.34, person: 'Radek', text: ' Thank you very much for having me.' },
  {
    startTime: 6213.4,
    person: 'Radek',
    text: " Yeah, it's great that some stayed with us and we see comments until the very end."
  },
  { startTime: 6218.06, person: 'Radek', text: " So hope it wasn't boring." },
  {
    startTime: 6219.74,
    person: 'Radek',
    text: " If you're more into this topic, definitely I recommend watching next stream with Aleix on cognitive load because I had the privilege of watching him with his co-speaker at the Fast Flow conference in London."
  },
  {
    startTime: 6234.22,
    person: 'Radek',
    text: " So I know that he's really practically into topic of measuring cognitive load."
  },
  {
    startTime: 6240.12,
    person: 'Radek',
    text: ' If any of the topics that I presented today are interesting, you know, just type in Radek, get in touch, leave some feedback.'
  },
  { startTime: 6250.22, person: 'Radek', text: " I'll be happy to hear." },
  { startTime: 6252.44, person: 'Radek', text: ' Thank you very much.' },
  {
    startTime: 6252.96,
    person: 'Karol',
    text: " Just to just to give context, the stream you're mentioning with Aleix is on the 10th of September."
  },
  { startTime: 6260.98, person: 'Karol', text: ' So near a little bit more than a month.' },
  {
    startTime: 6264,
    person: 'Karol',
    text: ' So at this point, I invite you all to join that stream.'
  },
  { startTime: 6268.68, person: 'Karol', text: ' And thank you all for being with us.' },
  { startTime: 6272.32, person: 'Karol', text: ' Thank you for joining and see.' }
])
</script>

<style scoped></style>
