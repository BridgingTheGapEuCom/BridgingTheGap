<template>
  <div class="w-full">
    <StreamLayout
      :transcript="transcript"
      name="Loosely Coupled - Beyond the symptoms, A deeper dive into identifying problems"
      video-id="ylWXcx2j2vc"
    />
  </div>
</template>

<script lang="ts" setup>
const transcript = ref([
  {
    startTime: 111.53,
    person: 'Karol',
    text: ' Good morning, good afternoon, and good evening, everybody.'
  },
  {
    startTime: 114.87,
    person: 'Karol',
    text: ' Welcome back to Loosely Coupled, brought to you by Bridging the Gap.'
  },
  {
    startTime: 120.37,
    person: 'Karol',
    text: ' My name is Karol Skrzymowski, and I hope everybody has something nice to drink.'
  },
  { startTime: 125.33, person: 'Karol', text: " Today, for me, it's not coffee for a change." },
  {
    startTime: 127.59,
    person: 'Karol',
    text: " It's a, well, black tea with ginger, honey, and all sorts of spices because I'm a little bit under the weather."
  },
  {
    startTime: 137.32,
    person: 'Karol',
    text: " And speaking of all those lovely seasonal symptoms, we'll be talking today about symptoms and problems, and looking deeper into what are actually problems that we're experiencing, what are the actual, or maybe these are just symptoms that we're experiencing, not problems."
  },
  {
    startTime: 157.96,
    person: 'Karol',
    text: ' And to guide us through the process of the problem space of problems, we have Woody Zuill, a lean and agile software development guide, who, well, has been coding and cracking on with IT topics for over 40 years now.'
  },
  {
    startTime: 174.94,
    person: 'Karol',
    text: " And, well, I'm not going to go with lengthy descriptions from the bio."
  },
  { startTime: 179.56, person: 'Karol', text: " I'll let Woody tell us something about himself." },
  { startTime: 185.42, person: 'Karol', text: ' So, Woody, welcome to the stream.' },
  { startTime: 187.68, person: 'Woody', text: ' Karol, thanks for inviting me.' },
  { startTime: 189.22, person: 'Woody', text: " I'm really looking forward to this." },
  { startTime: 190.96, person: 'Karol', text: ' And, well, good morning.' },
  { startTime: 192.74, person: 'Woody', text: ' Yeah, good morning for me.' },
  {
    startTime: 194.16,
    person: 'Woody',
    text: " It's morning where I'm at in the Pacific coast of the US."
  },
  { startTime: 199, person: 'Woody', text: " So, we're in the morning time here." },
  {
    startTime: 200.8,
    person: 'Woody',
    text: " And I guess you're probably in the mid-afternoon or something like that, a little later, almost evening."
  },
  { startTime: 205.72, person: 'Karol', text: ' No, it is evening.' },
  { startTime: 206.96, person: 'Karol', text: " It's seven o'clock in the Netherlands." },
  { startTime: 210, person: 'Karol', text: " So, it's already evening time." },
  { startTime: 212.98, person: 'Karol', text: ' Hopefully, my kids will go to sleep as soon.' },
  { startTime: 214.74, person: 'Karol', text: ' So, no unexpected noises on the live stream.' },
  { startTime: 218.1, person: 'Karol', text: ' But it is what it is.' },
  { startTime: 220.7, person: 'Karol', text: ' All right.' },
  {
    startTime: 221.18,
    person: 'Karol',
    text: ' Woody, tell us something about yourself before we dive into the problem space of problems.'
  },
  {
    startTime: 227.76,
    person: 'Woody',
    text: ' Well, when I started programming, I needed to have some software for myself.'
  },
  { startTime: 233.54, person: 'Woody', text: " And I couldn't afford to buy good software." },
  {
    startTime: 237.36,
    person: 'Woody',
    text: " And most of the software I could afford didn't work very well."
  },
  {
    startTime: 240.3,
    person: 'Woody',
    text: ' So, I thought, well, maybe I need to learn to write software.'
  },
  { startTime: 244.44, person: 'Woody', text: ' And I started learning to write software.' },
  { startTime: 246.52, person: 'Woody', text: " So, that's somewhere around 1983." },
  { startTime: 250.04, person: 'Woody', text: " So, it's over 40 years ago." },
  { startTime: 252.34, person: 'Woody', text: ' And I did not have anyone to learn from, really.' },
  { startTime: 254.8, person: 'Woody', text: ' So, I mostly learned it out of a couple of books.' },
  {
    startTime: 257.839,
    person: 'Woody',
    text: " As a matter of fact, I'm going to turn around right now."
  },
  { startTime: 260.04, person: 'Woody', text: ' I found this the other day.' },
  { startTime: 261.56, person: 'Woody', text: " I think it's the first book I ever bought." },
  {
    startTime: 264.16,
    person: 'Woody',
    text: " I don't know if everybody can see that on programming topics."
  },
  {
    startTime: 267.46,
    person: 'Woody',
    text: " And it's called Basic Advanced Topics, which I thought is really a great title to say, this is basic, but it's advanced."
  },
  { startTime: 276.4, person: 'Woody', text: ' So, anyways.' },
  {
    startTime: 277.14,
    person: 'Woody',
    text: " You know, it's got a lot of explanations, but it's also got code that you can type in and copy into your stuff."
  },
  { startTime: 284.42, person: 'Woody', text: ' So, anyway.' },
  { startTime: 284.86, person: 'Woody', text: " So, that's when I started." },
  { startTime: 285.74, person: 'Woody', text: ' I started learning in basic back in 1982 or 3.' },
  { startTime: 289.62, person: 'Woody', text: ' And it really was helpful to me.' },
  {
    startTime: 291.94,
    person: 'Woody',
    text: ' And I worked solo as a programmer for about 15 or so years, just writing software for myself in a business that I owned.'
  },
  { startTime: 300.38, person: 'Woody', text: " So, that's my programming start." },
  {
    startTime: 303.58,
    person: 'Woody',
    text: ' And then I decided to switch my career to just programming and went to work at places that, you know, I could work as a programmer.'
  },
  {
    startTime: 310.72,
    person: 'Woody',
    text: ' But in the 1990s, the end of the 1990s, it was almost impossible to not get a job.'
  },
  {
    startTime: 317.62,
    person: 'Woody',
    text: ' If you wanted to be a programmer, you just needed to know how to spell VB and you could get a job programming, right?'
  },
  {
    startTime: 325.5,
    person: 'Woody',
    text: ' And so, if you could spell VB or ASP, there was so much work, they did not scrutinise whether you could actually do it or not.'
  },
  {
    startTime: 333.98,
    person: 'Woody',
    text: ' And so, I started working, by the late 90s, I started working full time as a software developer.'
  },
  {
    startTime: 338.98,
    person: 'Woody',
    text: ' And what I found was, as much as I loved software development, I hated working at places where they were doing software development.'
  },
  {
    startTime: 347.4,
    person: 'Woody',
    text: ' So, this is an issue for probably a lot of people besides me, is that we like doing the thing that we like doing, but finding a way to make a living at it, working at a place, you know, it can be really bad.'
  },
  { startTime: 360, person: 'Woody', text: " I've actually worked at places that were horrific." },
  {
    startTime: 362.92,
    person: 'Woody',
    text: ' Now, I got a lot of experience being a boss myself.'
  },
  { startTime: 366.62, person: 'Woody', text: " I've owned a number of little companies." },
  { startTime: 369.16, person: 'Woody', text: " And I don't think I was a very good boss." },
  {
    startTime: 371.14,
    person: 'Woody',
    text: ' But when I started working for other people, and I started learning how bad a boss could be, I started realising maybe I need to learn more about this.'
  },
  {
    startTime: 379.52,
    person: 'Woody',
    text: " So, that's where the topic of today is coming to."
  },
  {
    startTime: 383.24,
    person: 'Woody',
    text: " The things that we would see, if you want to get to there yet, well, you know, I'm just free flowing here, you can guide me."
  },
  {
    startTime: 391.14,
    person: 'Woody',
    text: ' Okay, so the thing is, is I would work at these places.'
  },
  {
    startTime: 395.06,
    person: 'Woody',
    text: " And I was going, you know, I don't like this place."
  },
  { startTime: 397.58, person: 'Woody', text: ' I worked at one place I really liked.' },
  { startTime: 399.68, person: 'Woody', text: ' And then it was a three month contract.' },
  {
    startTime: 401.56,
    person: 'Woody',
    text: ' When that work was done, I went off to other places.'
  },
  {
    startTime: 405.06,
    person: 'Woody',
    text: ' And so I would say this, that every place I worked had these symptoms of underlying problems.'
  },
  {
    startTime: 412.64,
    person: 'Woody',
    text: " And I didn't know yet that these were just symptoms."
  },
  { startTime: 416.08, person: 'Woody', text: ' I thought they were the problems themselves.' },
  {
    startTime: 418.22,
    person: 'Woody',
    text: ' And so I start trying to figure out how to deal with that.'
  },
  {
    startTime: 420.72,
    person: 'Woody',
    text: ' And one of the biggest problems I think that I had was, was to be put on a team.'
  },
  { startTime: 429.44, person: 'Woody', text: ' But then we never worked as a team.' },
  { startTime: 432.86, person: 'Woody', text: ' So in other words, why did you put me on a team?' },
  { startTime: 435.72, person: 'Woody', text: ' Why do we call this group a team?' },
  {
    startTime: 438.12,
    person: 'Woody',
    text: " But we're all sitting, you know, we're sitting in separate cubicles wearing earphones to listen to radio or listen to music while we're working."
  },
  {
    startTime: 445.92,
    person: 'Woody',
    text: " And we're never really doing anything like a team."
  },
  {
    startTime: 448.9,
    person: 'Woody',
    text: ' And I would think of a team, many of the things I did when I was younger, were very much teamwork.'
  },
  {
    startTime: 453.98,
    person: 'Woody',
    text: ' Like I played, when I was really young, I played music in little rock and roll bands and later folk music bands.'
  },
  {
    startTime: 460.64,
    person: 'Woody',
    text: " And that, you know, you don't all get on the stage and then put on, hear earphones, listening to different music, and then play whatever it is you want to play."
  },
  {
    startTime: 468.46,
    person: 'Woody',
    text: " You know, it's like, that's not going to be a performance."
  },
  { startTime: 471.42, person: 'Woody', text: " That's just going to be a bunch of noise." },
  {
    startTime: 473.24,
    person: 'Woody',
    text: " And noise could be a performance too, don't get me wrong."
  },
  { startTime: 475.74, person: 'Woody', text: ' But yeah, so this is the thing.' },
  {
    startTime: 478.64,
    person: 'Woody',
    text: ' As I start working for other people, one of the things I noticed is we were often put on teams, but we never actually worked as a team.'
  },
  {
    startTime: 486.32,
    person: 'Woody',
    text: " So that's one of those, I would call this kind of a potential problem, but I think it's more of a symptom."
  },
  { startTime: 493.38, person: 'Woody', text: ' Like this is something I could notice.' },
  {
    startTime: 495.14,
    person: 'Woody',
    text: ' If they put me on a team, then I could take that as a symptom.'
  },
  {
    startTime: 499.2,
    person: 'Woody',
    text: " Like there's some, there's going to be some underlying problems here."
  },
  { startTime: 502.22, person: 'Woody', text: " Let's see if we can figure out what that is." },
  {
    startTime: 503.8,
    person: 'Woody',
    text: ' If we really truly working as a team, and I only got that a few times, well, somewhere around that time, I was also exposed to pair programming in 1998 or 1999.'
  },
  { startTime: 514.96, person: 'Woody', text: ' And that was like real true teamwork.' },
  {
    startTime: 517.26,
    person: 'Woody',
    text: " Two people sitting together in front of the same computer, talking about the code they're writing, discussing what they're going to do and doing it."
  },
  { startTime: 524.98, person: 'Woody', text: " And there's a lot of advantages to that." },
  {
    startTime: 528.2,
    person: 'Woody',
    text: ' So as I was identifying the problems that I felt I found in my work, I was also finding things that made my work easier.'
  },
  {
    startTime: 536.9,
    person: 'Woody',
    text: " And the two big ones, you know, people will recognise these if you're in this space, for me were pair programming and test-driven development."
  },
  {
    startTime: 547.68,
    person: 'Woody',
    text: ' If I got good, if I followed rigorously the ideas of test-driven development, my work would be easier to do and less problems in the code and so on.'
  },
  {
    startTime: 561.32,
    person: 'Woody',
    text: ' So I started looking for places that were already bought into some of these ideas, and that never worked for me.'
  },
  { startTime: 567.44, person: 'Woody', text: ' It was rare to find someplace.' },
  {
    startTime: 570.44,
    person: 'Woody',
    text: " So there are two sides to this, looking for a place to work that's really great."
  },
  {
    startTime: 575.2,
    person: 'Woody',
    text: " And then wherever you're at, trying to help make things better."
  },
  {
    startTime: 580.22,
    person: 'Woody',
    text: " So that's, I was not good at either of those things."
  },
  { startTime: 584.52, person: 'Woody', text: " I couldn't find a great place to work." },
  {
    startTime: 586.92,
    person: 'Woody',
    text: ' And I found that I could not convince anybody that we should try to make things better.'
  },
  {
    startTime: 592.86,
    person: 'Karol',
    text: ' Sounds like a lot of my stories, where I see that there are problems, I try to pinpoint them and identify.'
  },
  {
    startTime: 601.1,
    person: 'Karol',
    text: ' The organisation ends up putting a huge band-aid over a gaping wound.'
  },
  { startTime: 605.2, person: 'Karol', text: ' Yes.' },
  {
    startTime: 605.56,
    person: 'Karol',
    text: ' And not solving the underlying problem at all, not even listening to any reason over what could be the actual problem, but just looking at the surface of things, right?'
  },
  {
    startTime: 616.8,
    person: 'Woody',
    text: " So that's a really, that's exactly what we're talking about here."
  },
  {
    startTime: 620.58,
    person: 'Woody',
    text: ' And I would take this maybe into this direction, that to believe that what I think the problem is, or I think the solution is, often it was not a good path.'
  },
  {
    startTime: 633.08,
    person: 'Woody',
    text: " In other words, it's not about what I think, it's about how can I help others start thinking about the problems?"
  },
  {
    startTime: 641.68,
    person: 'Woody',
    text: " So in other words, it's not about having a solution, it's about being able to experiment and being open-minded."
  },
  { startTime: 649.08, person: 'Woody', text: " So how can I help this place I'm working?" },
  { startTime: 652.12, person: 'Woody', text: " I'm not a consultant or anything." },
  {
    startTime: 654.02,
    person: 'Woody',
    text: " I'm what they would probably have called a contract programmer."
  },
  {
    startTime: 657.38,
    person: 'Woody',
    text: " How can I help them see that, like we have too much queuing, or the people that can answer our questions aren't available to us right now, or that we are not doing test-driven development and therefore we've gotten to the point in our work where it's mostly about fixing bugs."
  },
  {
    startTime: 676.04,
    person: 'Woody',
    text: " I've worked on projects that the first few months, it's mostly about writing new features, but after that it turns into a whole lot of work fixing bugs."
  },
  {
    startTime: 684.48,
    person: 'Woody',
    text: " Now, I'm not saying that whatever we used to do is still worthwhile thinking about."
  },
  {
    startTime: 689.18,
    person: 'Woody',
    text: " I really do believe that times will change and what used to work, there's a saying, what got us here won't get us there."
  },
  {
    startTime: 699.46,
    person: 'Woody',
    text: ' The old stuff like Deming would say, most managers are taught how to manage in a way that is no longer considered useful.'
  },
  {
    startTime: 709.24,
    person: 'Woody',
    text: " Whatever we are teaching in universities has already outdated itself, and so that's problematic."
  },
  { startTime: 715.48, person: 'Karol', text: ' To a very large extent.' },
  {
    startTime: 718.7,
    person: 'Karol',
    text: " I'm looking at this, for advertising the stream I quoted from Andrew Harmel Law, the situation that was over his talk at DDD Europe this year."
  },
  {
    startTime: 732.24,
    person: 'Karol',
    text: ' Andrew delivered a splendid talk about the second hardest problem in software architecture being variability.'
  },
  { startTime: 740.1, person: 'Karol', text: ' It was a really great talk.' },
  {
    startTime: 744.1,
    person: 'Karol',
    text: ' It was a really great topic, very well outlined and explained and in a snackable way presented that it was not distracting for my brain, so I could actually follow it because it was storytelling.'
  },
  {
    startTime: 756.7,
    person: 'Karol',
    text: ' What was very key in that particular talk, Andrew, and I think he did that also deliberately, wrote that this is a second hardest problem.'
  },
  {
    startTime: 768.72,
    person: 'Karol',
    text: " For the whole talk, he absolutely forgot to mention what's the first hardest problem."
  },
  {
    startTime: 773.26,
    person: 'Karol',
    text: ' The first question he got from the audience at the end of the session was, okay, Andrew, but you talked about the second hardest problem.'
  },
  {
    startTime: 780.76,
    person: 'Karol',
    text: " What's the first hardest problem in software architecture?"
  },
  {
    startTime: 784.38,
    person: 'Karol',
    text: " Andrew stopped for a second there and said, oh, you're right, I haven't said anything about that."
  },
  { startTime: 789.42, person: 'Karol', text: ' All of you!' },
  { startTime: 790.9, person: 'Karol', text: ' Pointing to the audience.' },
  {
    startTime: 792.98,
    person: 'Karol',
    text: ' Of course, that met with a roar of laughter over the whole auditorium, but it is a very true statement that I heard oh so many times over oh so many topics, even on the stream.'
  },
  { startTime: 814.98, person: 'Karol', text: ' Technology is never the problem.' },
  { startTime: 816.82, person: 'Karol', text: " It's us humans that are the problem, in essence." },
  {
    startTime: 820.18,
    person: 'Karol',
    text: ' This is, of course, a very drastic simplification and generalisation, but what that means is that the root of all problems is just human nature.'
  },
  { startTime: 833.7, person: 'Woody', text: " I'll buy that." },
  { startTime: 834.72, person: 'Karol', text: " You'll buy that." },
  { startTime: 835.54, person: 'Karol', text: ' Good.' },
  { startTime: 835.94, person: 'Karol', text: ' All right.' },
  {
    startTime: 837.14,
    person: 'Karol',
    text: " Another thing that I read recently in this, because I'm reading this lovely book, Domain-Driven Refactoring, by Alessandro Colla and Alberto, and I'm going to butcher this name, probably Akeravis, given that it's Italian."
  },
  { startTime: 856.32, person: 'Karol', text: " I suppose that's the right pronunciation." },
  { startTime: 858.52, person: 'Karol', text: ' Not entirely sure.' },
  { startTime: 859.9, person: 'Karol', text: ' Sorry, Alberto.' },
  {
    startTime: 862.5,
    person: 'Karol',
    text: ' I shared this quote with you earlier over LinkedIn.'
  },
  {
    startTime: 867.06,
    person: 'Karol',
    text: " I think this is a very true statement for all engineers, all developers, that we have this tendency to find solutions and fix things as quickly as possible, because it's extremely uncomfortable to stay in the problem space where the problem is unsolved and just look at the problem from all perspectives and look what it actually is."
  },
  {
    startTime: 894.8,
    person: 'Karol',
    text: " I think this is very much the essence of what we're talking about today."
  },
  { startTime: 901, person: 'Karol', text: ' Okay.' },
  { startTime: 901.62, person: 'Karol', text: " Let's get to that." },
  {
    startTime: 903.04,
    person: 'Karol',
    text: " We're solving symptoms, not problems then, right?"
  },
  { startTime: 906.02, person: 'Woody', text: ' Yeah.' },
  {
    startTime: 906.56,
    person: 'Woody',
    text: " If we think we have gotten into the problem space, then I would say, normally, we're in the symptom space."
  },
  {
    startTime: 914.54,
    person: 'Woody',
    text: " We think we've gotten into the problem space, but we haven't."
  },
  { startTime: 918.84, person: 'Woody', text: ' This is an issue.' },
  { startTime: 922.24, person: 'Woody', text: ' Symptoms mask problems.' },
  {
    startTime: 926.3,
    person: 'Woody',
    text: " There's a famous systems thinker, his name's Russell Acuff, and he used to talk about these four different ways of addressing a problem."
  },
  {
    startTime: 936.96,
    person: 'Woody',
    text: ' The first one, he says, they all have solve and absolve, resolve, solve, and dissolve.'
  },
  { startTime: 946.7, person: 'Woody', text: ' He has his own descriptions for this.' },
  {
    startTime: 949.4,
    person: 'Woody',
    text: " I think that the absolve is merely just ignoring things and hoping they'll go away."
  },
  { startTime: 954.24, person: 'Woody', text: ' Sometimes, they do.' },
  {
    startTime: 957.12,
    person: 'Woody',
    text: ' I was once contacted, I was working in a company, and we would help this other company in getting their code into better shape.'
  },
  { startTime: 964.3, person: 'Woody', text: " I'm talking about in the late 90s." },
  {
    startTime: 966.3,
    person: 'Woody',
    text: ' They sent us over a batch of code that was about one method that was something like 5,000 lines long.'
  },
  { startTime: 972.04, person: 'Woody', text: " They said, oh, we're getting this bug in here." },
  { startTime: 974.44, person: 'Woody', text: ' We started analysing it.' },
  {
    startTime: 975.94,
    person: 'Woody',
    text: ' Then about a day later, they sent a note to us saying, oh, wait, stop.'
  },
  { startTime: 981.2, person: 'Woody', text: ' We solved it.' },
  { startTime: 982.44, person: 'Woody', text: ' We said, well, what did you do?' },
  { startTime: 983.44, person: 'Woody', text: " Well, we don't know." },
  { startTime: 984.04, person: 'Woody', text: ' It just started working again.' },
  { startTime: 985.74, person: 'Woody', text: " It's like, okay." },
  { startTime: 986.9, person: 'Woody', text: " You didn't solve anything." },
  {
    startTime: 988.7,
    person: 'Woody',
    text: " You're just ignoring that underneath there, there's a problem."
  },
  { startTime: 991.66, person: 'Woody', text: ' This is not an uncommon thing.' },
  {
    startTime: 993.94,
    person: 'Woody',
    text: " If we get a problem, but it's not very frequent, we don't pay much attention to it."
  },
  {
    startTime: 999.3,
    person: 'Woody',
    text: " If you get a little bit of a toothache, and then the next day you feel fine, you don't think you've got a problem."
  },
  {
    startTime: 1005.88,
    person: 'Woody',
    text: ' Anyways, the resolve is kind of like you resolve it.'
  },
  {
    startTime: 1011.2,
    person: 'Woody',
    text: " You take enough action to make it feel like the problem's been solved."
  },
  { startTime: 1016, person: 'Woody', text: " I believe that's dealing with the symptoms." },
  { startTime: 1018.12, person: 'Woody', text: " I think that's what he brings up." },
  {
    startTime: 1020.04,
    person: 'Woody',
    text: ' Solving it is you actually get to the root problem, and you fix it, whatever that is.'
  },
  {
    startTime: 1027.98,
    person: 'Woody',
    text: ' We could give many examples, but we do a root cause analysis.'
  },
  {
    startTime: 1032.94,
    person: 'Woody',
    text: " We find the problem, and we fix whatever's causing that problem."
  },
  { startTime: 1036.06, person: 'Karol', text: ' Then the question is, what is the solve then?' },
  { startTime: 1039.26, person: 'Woody', text: ' The solve is taking it to a system level.' },
  {
    startTime: 1043.72,
    person: 'Woody',
    text: ' What in our system is allowing problems like this to occur?'
  },
  {
    startTime: 1048.46,
    person: 'Woody',
    text: ' You adjust the system instead of just solving the problem, because problems will recur.'
  },
  {
    startTime: 1056.58,
    person: 'Woody',
    text: ' I believe we can match this up a little bit to the Kinevan.'
  },
  {
    startTime: 1061.06,
    person: 'Woody',
    text: " If your listeners are familiar with Kinevan, if they're not, they can be looking that up."
  },
  {
    startTime: 1065.9,
    person: 'Woody',
    text: ' We could put it on that mural board or somewhere.'
  },
  {
    startTime: 1068.38,
    person: 'Woody',
    text: " The idea here is you've got four main domains, and one, all fifth domain is considered, he puts in the centre of his diagram."
  },
  {
    startTime: 1078.38,
    person: 'Woody',
    text: " You've got the clear domain, the complicated domain, the complex domain, and chaos domain, or chaotic."
  },
  { startTime: 1084.84, person: 'Woody', text: ' Or confusion, right?' },
  { startTime: 1086.92, person: 'Woody', text: ' The middle one.' },
  { startTime: 1087.52, person: 'Woody', text: " I think the middle one's sort of confusion." },
  {
    startTime: 1089.36,
    person: 'Woody',
    text: " We don't know what our problem is, or we don't know what kind of a problem we have."
  },
  { startTime: 1094.1, person: 'Woody', text: " It's very obvious." },
  {
    startTime: 1095.34,
    person: 'Woody',
    text: " When we're in the clear space, to me, that's a space where A plus B is the problem, and the solution is always C, and we don't need to even think about it."
  },
  { startTime: 1105.8, person: 'Woody', text: ' I like to use an example.' },
  {
    startTime: 1107.02,
    person: 'Woody',
    text: ' If you walk into a store to buy some milk, you just go to where the, in the US anyways, you go to where the milk is, you pick it up, put it in your cart, and when you get to the place to pay for it, you pay for it.'
  },
  { startTime: 1118.58, person: 'Woody', text: " There's no unknowns here." },
  { startTime: 1122.56, person: 'Woody', text: " That's a very clear space." },
  {
    startTime: 1124.62,
    person: 'Woody',
    text: ' A complicated space is where you need to do some analysis.'
  },
  {
    startTime: 1128.24,
    person: 'Woody',
    text: ' I would say, in a lot of ways, you have a checklist of things that you need to do to determine.'
  },
  {
    startTime: 1135.12,
    person: 'Woody',
    text: " For example, putting a new roof on an old house, you can't just call them up and ask for the, how much will a new roof cost?"
  },
  {
    startTime: 1144.04,
    person: 'Woody',
    text: " Well, they have to know what's the size of the roof, what's the condition of the existing roof, what materials do you want to use for this new roof, and do you want the 10-year guarantee or the 25-year guarantee?"
  },
  {
    startTime: 1156.48,
    person: 'Woody',
    text: " There's a lot of things, but once they've filled in all the blanks and they've taken all the measurements, they can calculate a pretty accurate price."
  },
  {
    startTime: 1163.46,
    person: 'Woody',
    text: " Now still, they might, there's Kenevan, they might come up, so that's got confusion in the middle, and each time I look at these charts, they change something on them, but the complicated space is really about relatively well-known domains with a number of variables."
  },
  { startTime: 1183.42, person: 'Woody', text: ' So I can give a real good example from my past.' },
  {
    startTime: 1186.14,
    person: 'Woody',
    text: ' I used to own a shop where we made signage and advertising graphics, and one of the things we did was screen printing.'
  },
  {
    startTime: 1193.14,
    person: 'Woody',
    text: ' So in screen printing, you have a fabric stretched across a wooden frame, use a squeegee to essentially draw ink across it, and this leaves an image.'
  },
  {
    startTime: 1205.14,
    person: 'Woody',
    text: " So this is, everybody knows about silk screening or screen printing, and we'd identify 37 variables."
  },
  {
    startTime: 1211.6,
    person: 'Woody',
    text: " So if there is a problem with our image, like it's a little smeared or it's the layer of ink is almost transparent, it's not thick enough, we could look at those and then we could go to our chart and see, well, what are the variables that could cause this problem?"
  },
  {
    startTime: 1227.14,
    person: 'Woody',
    text: ' So I could document all the variables and therefore make it the troubleshooting mechanism really fast.'
  },
  { startTime: 1235.32, person: 'Woody', text: " And in the end, that's a complicated domain." },
  {
    startTime: 1240,
    person: 'Woody',
    text: " You need to have expertise, you need to have knowledge, you need to be able to do some simple experiments maybe, but most of it's, you just need to fill in the blank, you answer the questions."
  },
  {
    startTime: 1251.3,
    person: 'Woody',
    text: " So in that space, we don't know that A plus B is the problem."
  },
  {
    startTime: 1254.74,
    person: 'Woody',
    text: ' We need to discover the problem and then we can solve for it.'
  },
  {
    startTime: 1258.12,
    person: 'Karol',
    text: " So for those who actually work with software and read the manuals of whatever technologies they're buying, I remember back in the day when we were working with Typko BusinessWorks 5, Typko had very standardised error codes everywhere."
  },
  {
    startTime: 1278.24,
    person: 'Karol',
    text: " So if anything in the framework went wrong, which was a standard problem, standard error, it was a named code with the description and you could look it up in the documentation and see what's the resolution for that, where potentially can you find, what potentially you can do to solve it quickly, right?"
  },
  { startTime: 1298.98, person: 'Karol', text: ' So this would be that space.' },
  {
    startTime: 1300.64,
    person: 'Karol',
    text: ' So if you would have identified a list of variables, and in that sense, your list of variables is done down to error codes or known error codes, you already have a kind of procedural approach to solving your problem because you know where to look, you have the knowledge, you have the PDF booklet or whatever in front of you with the manual, done.'
  },
  { startTime: 1327.62, person: 'Karol', text: ' Pretty much 90% of the times, yes.' },
  { startTime: 1331.42, person: 'Woody', text: ' Yeah.' },
  { startTime: 1331.74, person: 'Woody', text: ' So you have the expertise.' },
  {
    startTime: 1333.68,
    person: 'Woody',
    text: ' So you yourself know how to identify these things and know where to go for the answer and stuff like that.'
  },
  {
    startTime: 1339.31,
    person: 'Woody',
    text: " Now, when we move into complex space, which is where I really put software development, because what you're really talking about there was using software, but in the creating of that software, we're moving into the complex space."
  },
  {
    startTime: 1351.8,
    person: 'Woody',
    text: " In the complex space, we don't really know, you know, sometimes they talk about wicked problems as being a problem where we won't start discovering the problem until we start trying to solve it."
  },
  { startTime: 1368.24, person: 'Woody', text: " So that's one definition of a wicked problem." },
  {
    startTime: 1371.44,
    person: 'Woody',
    text: ' And so this is kind of the space of software development.'
  },
  {
    startTime: 1374.44,
    person: 'Woody',
    text: " If we are in software development, if we are not having these kinds of problems to solve, I don't think we're really doing development."
  },
  { startTime: 1386.56, person: 'Woody', text: ' So this is the issue.' },
  {
    startTime: 1388.42,
    person: 'Woody',
    text: " We can say, to me, if we're doing software development, we need to discover things that we don't yet know, and the process of discovering exposes what's missing for us."
  },
  {
    startTime: 1401.94,
    person: 'Woody',
    text: ' So in this space, we operate with theories, and then we do experiments.'
  },
  {
    startTime: 1407.48,
    person: 'Woody',
    text: ' And even if we know exactly what we want to write in our code, we end up discovering we were wrong.'
  },
  {
    startTime: 1415.36,
    person: 'Woody',
    text: " And once we start trying to use the thing, oh, wait, that's not going to work kind of thing we'll hear."
  },
  { startTime: 1419.88, person: 'Woody', text: " So anyways, that's the complex space." },
  {
    startTime: 1421.78,
    person: 'Karol',
    text: ' So this is where the iterative approach comes into play.'
  },
  {
    startTime: 1426.42,
    person: 'Karol',
    text: ' This is where Agile comes to play with iterations, scrum as value that we discover as we go.'
  },
  {
    startTime: 1434.48,
    person: 'Karol',
    text: ' This is where we jump into domain-driven design, right?'
  },
  {
    startTime: 1437.5,
    person: 'Karol',
    text: ' We can constantly upgrade our model of understanding of the problem domain or some sort of business domain.'
  },
  { startTime: 1446.72, person: 'Woody', text: " That's right." },
  {
    startTime: 1446.9,
    person: 'Woody',
    text: ' So a lot of times, so this goes like planning of what software we want in the first place.'
  },
  {
    startTime: 1453.3,
    person: 'Woody',
    text: ' My experience with this has been whatever we thought we wanted up front, we were going to find out we were wrong later.'
  },
  {
    startTime: 1459.2,
    person: 'Woody',
    text: ' So why do we spend so much time figuring out what we want?'
  },
  { startTime: 1463, person: 'Woody', text: ' I think I would say it this way.' },
  {
    startTime: 1465.2,
    person: 'Woody',
    text: " It's in the writing of the code and creating the software that we discover what we want, and that if we attempt to do it beforehand, we're doing it in a crippled fashion."
  },
  {
    startTime: 1475.7,
    person: 'Woody',
    text: ' This is really kind of, in a way, the scientific process.'
  },
  {
    startTime: 1479.36,
    person: 'Woody',
    text: ' We need to have theories and do experiments and discover.'
  },
  {
    startTime: 1482.88,
    person: 'Woody',
    text: " And I have often found, so I would almost put it this drastically, that if we document, so let's give the example of creating the architecture."
  },
  {
    startTime: 1491.76,
    person: 'Woody',
    text: " So we can't really create the architecture until we know everything we want this software to do and some of the mechanisms we want it to use."
  },
  {
    startTime: 1499.96,
    person: 'Woody',
    text: " And we start designing, like in the old days, we're going to do a client server or an end tier."
  },
  {
    startTime: 1505.08,
    person: 'Woody',
    text: ' And nowadays, we have all the cloud stuff and all these other things.'
  },
  {
    startTime: 1510.16,
    person: 'Woody',
    text: ' The architecture allows us to make the big up front decisions, or we believe we need to make the big up front decisions that are going to be very difficult to change later on.'
  },
  {
    startTime: 1520.24,
    person: 'Woody',
    text: " And what's going to end up happening is we're crippling ourselves because every programmer who works on this code, after we start working on it, is going to be complaining about the architecture that isn't flexible enough to handle the problems that we're trying to solve."
  },
  {
    startTime: 1535.52,
    person: 'Woody',
    text: " So we should take, that's a symptom, and we should get down to the root of that and try to figure out what we should do instead."
  },
  {
    startTime: 1541.12,
    person: 'Woody',
    text: " And that's why I really believe the iterative pattern of working is so useful."
  },
  {
    startTime: 1546.04,
    person: 'Woody',
    text: ' Back in the 80s, which I never really worked outside of my own little envelope, own little environment of writing software.'
  },
  {
    startTime: 1553.52,
    person: 'Woody',
    text: ' But back in the 80s, they were discovering that on bigger projects, they needed a way to try to figure out everything they need up front.'
  },
  {
    startTime: 1561.76,
    person: 'Woody',
    text: ' So the heavy duty documentation and heavy duty planning really became a solid thing in a lot of companies.'
  },
  {
    startTime: 1569.44,
    person: 'Woody',
    text: " In the 90s, they started discovering, hey, this isn't working."
  },
  {
    startTime: 1573.2,
    person: 'Woody',
    text: ' And Standish Group or whoever that did the chaos report was discovering, sharing data about this.'
  },
  {
    startTime: 1580.3,
    person: 'Karol',
    text: ' So- And this also, just to pitch in here, this also stopped working because also the velocity at which the environment changes, this just sped up drastically over the years.'
  },
  {
    startTime: 1594.5,
    person: 'Karol',
    text: " And now the, let's say again, variability is way, way higher than in the 80s."
  },
  {
    startTime: 1601.58,
    person: 'Karol',
    text: ' So obviously if our water drift goes faster, then obviously having very long iterations, waterfall-like approaches where we plan up front for a year and then execute for the next four, these will never run out because this will just not relate to any reality.'
  },
  { startTime: 1624.14, person: 'Woody', text: ' Yes.' },
  {
    startTime: 1624.74,
    person: 'Woody',
    text: ' Well, that often grinds to a halt after a while because we kind of, like the old saying, paint yourself into a corner.'
  },
  { startTime: 1631.04, person: 'Woody', text: " It's like you're painting the floor." },
  { startTime: 1632.9, person: 'Woody', text: ' This is like the old example.' },
  {
    startTime: 1634.98,
    person: 'Woody',
    text: ' You painted from the door over this corner instead of from the corner over to the door, no way out.'
  },
  {
    startTime: 1641.34,
    person: 'Woody',
    text: " And I've seen projects that get two or three years into them and everybody's saying, we're dead in the water now."
  },
  { startTime: 1649, person: 'Woody', text: ' This is never going to get us anywhere.' },
  {
    startTime: 1651.14,
    person: 'Woody',
    text: " So this is, I'm sure everybody's experienced something like that."
  },
  {
    startTime: 1654.24,
    person: 'Woody',
    text: " My overall experience in software development has been that the things that we discover along the way, we're not really allowed to use them because we're trying to finish the thing that we promised we would finish."
  },
  { startTime: 1669.34, person: 'Woody', text: ' And a lot of software happens this way.' },
  { startTime: 1672.44, person: 'Woody', text: ' So back to the symptoms.' },
  {
    startTime: 1674.2,
    person: 'Woody',
    text: " So in the clear space, the symptoms aren't much, everything's clear."
  },
  { startTime: 1681.72, person: 'Woody', text: " It's a well-known space." },
  {
    startTime: 1683.26,
    person: 'Woody',
    text: " In the complicated space, that's where the symptoms are often indicators to us of something we need to be paying attention to."
  },
  { startTime: 1692.32, person: 'Woody', text: ' That is accentuated in the complex space.' },
  {
    startTime: 1695.94,
    person: 'Woody',
    text: ' Now in the chaotic space, we could give an example.'
  },
  {
    startTime: 1698.34,
    person: 'Woody',
    text: ' For example, the smoke alarm is going off in the kitchen.'
  },
  {
    startTime: 1702.04,
    person: 'Woody',
    text: " And I can say, oh man, I got to go take the battery out of that thing because that's just so annoying."
  },
  { startTime: 1707.2, person: 'Woody', text: " Well, we're dealing with the symptom." },
  {
    startTime: 1709.72,
    person: 'Woody',
    text: " I'm annoyed by the buzzing sound instead of the symptom."
  },
  {
    startTime: 1713.66,
    person: 'Woody',
    text: " You have the pot on the stove, the water has all been boiled out of it and stuff's getting hot enough to start burning."
  },
  { startTime: 1720.68, person: 'Woody', text: " And pretty soon we're going to have a fire." },
  {
    startTime: 1722.22,
    person: 'Woody',
    text: " And if we're not paying attention to the actual problem, just one of the symptoms such as I'm annoyed by the buzzing, we got it."
  },
  {
    startTime: 1732.3,
    person: 'Woody',
    text: " In the chaotic space, we act on what we know what's in front of us and we take action immediately."
  },
  {
    startTime: 1738.14,
    person: 'Woody',
    text: " And in the case of a fire, I don't know if you've ever been at a place where they actually had a fire."
  },
  {
    startTime: 1743.18,
    person: 'Woody',
    text: ' But everybody gets out of the building and only people who know how to safely deal with the fire are allowed to do anything beyond that.'
  },
  {
    startTime: 1750.94,
    person: 'Woody',
    text: ' So I worked for seven years or six years with a fire department on the board of directors.'
  },
  {
    startTime: 1756.7,
    person: 'Woody',
    text: " And a big chunk of what we focused on was having our firefighters extremely well trained so that they're not going to get killed when they're going into a building by making foolish decisions."
  },
  {
    startTime: 1769.68,
    person: 'Woody',
    text: ' There are lots of symptoms in that space that are hiding problems that could kill you.'
  },
  { startTime: 1775.34, person: 'Woody', text: ' So you got to be really careful.' },
  { startTime: 1777.22, person: 'Woody', text: " So that's a good example." },
  {
    startTime: 1778.26,
    person: 'Woody',
    text: " I didn't think of using here, but I'm glad it came up."
  },
  {
    startTime: 1781.86,
    person: 'Karol',
    text: " And then lastly, if we're in the confusion space, we just don't know anything yet and we need to do discovery about what the hell's going on, what we know, what we don't know and what we know."
  },
  {
    startTime: 1792.9,
    person: 'Karol',
    text: " We will not discover what we don't know, we don't know, but basically at least."
  },
  {
    startTime: 1798.78,
    person: 'Woody',
    text: " But there are a lot of people that I've worked with in managing these things."
  },
  {
    startTime: 1803.16,
    person: 'Woody',
    text: ' And like I gave my example, when I first started working, looking for a place that I would have enjoyed working at, I had a lot of trouble finding that.'
  },
  {
    startTime: 1811.72,
    person: 'Woody',
    text: " And then when you're inside a place where you're working, a lot of the people don't do it."
  },
  {
    startTime: 1816.62,
    person: 'Woody',
    text: " I don't think Canevan came out as a public thing you could learn about until 2007, 2010, somewhere in there."
  },
  { startTime: 1825.76, person: 'Woody', text: " So in the earlier years, I didn't know that." },
  {
    startTime: 1827.44,
    person: 'Woody',
    text: ' Matter of fact, this really helped me understand how to explain this stuff.'
  },
  {
    startTime: 1830.62,
    person: 'Woody',
    text: ' There was a thing before this called the Stacy model, which is very much the same thing, uses the same kind of similar terminology.'
  },
  {
    startTime: 1838.26,
    person: 'Woody',
    text: " So I was starting to learn that stuff back then, but I didn't have a complete understanding of it."
  },
  {
    startTime: 1842.76,
    person: 'Woody',
    text: " But to get to the point, I think most managers want to work with things as if they're in the complicated or clear space."
  },
  { startTime: 1849.6, person: 'Woody', text: ' And they actually make decisions based on that.' },
  {
    startTime: 1854.32,
    person: 'Woody',
    text: " And that really means we're often dealing with the symptom rather than the problem."
  },
  {
    startTime: 1858.74,
    person: 'Woody',
    text: ' If you ever had a manager or some of you, I always warn people, I usually end up insulting managers somewhere along the way.'
  },
  {
    startTime: 1866.12,
    person: 'Woody',
    text: " But I've been a manager much of my life in different ways, in companies I've owned, in companies I've worked in."
  },
  { startTime: 1872.12, person: 'Woody', text: ' So I have some right to make fun of myself.' },
  {
    startTime: 1875.34,
    person: 'Woody',
    text: " But what I noticed a lot of times a manager will say something similar to this, don't bring me problems, bring me solutions."
  },
  {
    startTime: 1883.34,
    person: 'Karol',
    text: ' Oh my, I just literally saw a graphic with this quote on LinkedIn just before the stream.'
  },
  { startTime: 1891.02, person: 'Woody', text: ' Oh really?' },
  {
    startTime: 1891.98,
    person: 'Woody',
    text: " So that's a good point because it's still around."
  },
  { startTime: 1895.76, person: 'Woody', text: " So I'm not completely out of date." },
  {
    startTime: 1897.4,
    person: 'Woody',
    text: " But the issue here is that we cannot, solutions are not the space that, I'm going to be really bold about this."
  },
  {
    startTime: 1908.36,
    person: 'Woody',
    text: ' So being in the solution space of trying to solve a problem usually means we are trying to solve symptoms.'
  },
  { startTime: 1915.04, person: 'Woody', text: ' So this is very problematic to me.' },
  {
    startTime: 1917.96,
    person: 'Woody',
    text: ' So to give a good example, in software development, I have an exercise that I do.'
  },
  {
    startTime: 1925.68,
    person: 'Woody',
    text: " So if I'm called into a company to do a consulting, I'll do often do this exercise."
  },
  {
    startTime: 1930.1,
    person: 'Woody',
    text: " But even in some of my trainings, I do a lot of workshops on mob programming or software teaming or workshops on something I call beyond estimates, which is mostly about why I think estimates aren't helpful to us in software development."
  },
  {
    startTime: 1944.8,
    person: 'Woody',
    text: ' Anyways, I do an exercise that kind of goes like this.'
  },
  {
    startTime: 1949.22,
    person: 'Woody',
    text: ' What are the things that are making it difficult for you to be effective in your work right now?'
  },
  {
    startTime: 1955.96,
    person: 'Woody',
    text: ' What are the things that are making it difficult for you to be effective?'
  },
  {
    startTime: 1959.44,
    person: 'Woody',
    text: " And I will get a list and I will, I'm going to go ahead and open up something so I can, go ahead."
  },
  {
    startTime: 1966.26,
    person: 'Karol',
    text: " For all those watching, you can answer Woody's question in the comments on YouTube and LinkedIn."
  },
  {
    startTime: 1972.46,
    person: 'Karol',
    text: " We'll see if this matches anything that Woody has prepared."
  },
  { startTime: 1975.76, person: 'Karol', text: " Let's do that exercise." },
  { startTime: 1977.3, person: 'Karol', text: " Let's do that." },
  { startTime: 1978.3, person: 'Woody', text: " Let's do that." },
  {
    startTime: 1979.32,
    person: 'Karol',
    text: ' Restating the question, what things get in the way of you getting your work done effectively?'
  },
  { startTime: 1987.24, person: 'Woody', text: " That's right." },
  { startTime: 1987.92, person: 'Woody', text: ' Right now, currently.' },
  { startTime: 1989.52, person: 'Woody', text: ' I always like to put that on.' },
  {
    startTime: 1990.66,
    person: 'Woody',
    text: " It's not, what are the things that will make it difficult or can make it difficult, or that maybe you've seen, but what are the things you're currently experiencing that are making it difficult for you to be effective in your work?"
  },
  {
    startTime: 2002.4,
    person: 'Woody',
    text: ' Now we can just let people, are we seeing things coming in?'
  },
  {
    startTime: 2007.52,
    person: 'Karol',
    text: ' Well, we do have a slight delay between the studio and the actual stream on LinkedIn and YouTube.'
  },
  {
    startTime: 2013.3,
    person: 'Karol',
    text: ' So this may take a moment for people to actually get there.'
  },
  {
    startTime: 2018.14,
    person: 'Karol',
    text: ' But the question is in on the screen visible, not yet visible on YouTube nor LinkedIn.'
  },
  { startTime: 2024.58, person: 'Karol', text: " So we'll give them a moment." },
  { startTime: 2026.42, person: 'Karol', text: " In the meantime, let's, let's dig into this." },
  {
    startTime: 2029.08,
    person: 'Karol',
    text: " So maybe I'll shoot some, well, I cannot really say that I can answer this question for the position of my current employment, because I actually finally managed to find a good employer."
  },
  {
    startTime: 2041.82,
    person: 'Karol',
    text: " And I'm happy about my, my, my, my place right now."
  },
  {
    startTime: 2046.02,
    person: 'Karol',
    text: ' The only thing that really gets in the way of doing my getting my work done effectively is the lack of time.'
  },
  { startTime: 2054.719, person: 'Woody', text: ' Oh, yeah, there you go.' },
  { startTime: 2055.42, person: 'Woody', text: " So that's a, that's a really good example." },
  { startTime: 2057.659, person: 'Karol', text: " No, I don't have enough time." },
  { startTime: 2060.219, person: 'Karol', text: ' Yeah, let me elaborate.' },
  {
    startTime: 2062.08,
    person: 'Karol',
    text: ' Because I want to do so many things and get into so many initiatives, that I need to decline certain aspects, not to do them and delegate them elsewhere.'
  },
  {
    startTime: 2072.179,
    person: 'Karol',
    text: " Because there's not enough time in the day for me to cover all the topics I would want to cover."
  },
  { startTime: 2078.02, person: 'Woody', text: ' Yes.' },
  {
    startTime: 2079.04,
    person: 'Woody',
    text: " So this is a, this is something that I've read about."
  },
  {
    startTime: 2083.1,
    person: 'Woody',
    text: ' For a long time now, a lot of psychologists will identify this, this issue.'
  },
  { startTime: 2088.4, person: 'Woody', text: ' And part of it can be, fear of missing out.' },
  {
    startTime: 2091.28,
    person: 'Woody',
    text: " Part of it can be, I'm interested in a lot of things."
  },
  {
    startTime: 2094.04,
    person: 'Woody',
    text: " Now, personally, I'm interested in a lot of things."
  },
  {
    startTime: 2097.3,
    person: 'Woody',
    text: " And I'm usually allowing whatever seems most interesting at the moment, to be the thing I'm going to focus on."
  },
  {
    startTime: 2105.56,
    person: 'Woody',
    text: ' And I have owned about 20 businesses in my life.'
  },
  {
    startTime: 2109.34,
    person: 'Woody',
    text: ' And usually what would happen is, I would either start up or buy a small business.'
  },
  { startTime: 2113.84, person: 'Woody', text: " And it's something I'm really interested in." },
  { startTime: 2117.3, person: 'Woody', text: ' And in about a year, I get bored with it.' },
  {
    startTime: 2120.24,
    person: 'Woody',
    text: " And so now I've start looking at the next thing that I might get interested in and get bored at."
  },
  {
    startTime: 2126.1,
    person: 'Woody',
    text: " And I want to get rid of the thing I'm already in, you know, was interested in."
  },
  {
    startTime: 2130.2,
    person: 'Woody',
    text: " But now I know enough about it, I'm no longer interested in it."
  },
  {
    startTime: 2133.22,
    person: 'Karol',
    text: ' Woody, you do realise that you sound right now like a typical person with ADHD.'
  },
  {
    startTime: 2138.5,
    person: 'Woody',
    text: " Yeah, now, I've got a book here somewhere that is called Oh, I don't remember that."
  },
  { startTime: 2145.08, person: 'Woody', text: " I'll look it up later." },
  {
    startTime: 2146.26,
    person: 'Woody',
    text: ' But when I first heard of ADD, that was probably in the 80s.'
  },
  { startTime: 2151.5, person: 'Woody', text: ' So I got this book on the topic.' },
  {
    startTime: 2153.5,
    person: 'Woody',
    text: ' And it had a test of like 100 qualities, but symptoms of someone who might have ADD.'
  },
  { startTime: 2163.9, person: 'Woody', text: ' And dang, I hit like 96 of them or something.' },
  { startTime: 2168.12, person: 'Karol', text: ' Sounds all right.' },
  {
    startTime: 2169.68,
    person: 'Woody',
    text: " So I'm, I'm at best self diagnosed with ADD or ADHD, because I believe there's a superpower that comes with it."
  },
  { startTime: 2177.24, person: 'Woody', text: " And that's the ability to hyper focus." },
  {
    startTime: 2179.78,
    person: 'Woody',
    text: ' So you know, I would find I could get really focused on something to the distraction of everything else, and be hyper focused on something.'
  },
  { startTime: 2187.36, person: 'Woody', text: " So I'm not saying it's good or bad." },
  { startTime: 2189.1, person: 'Woody', text: " I'm just pointing something out." },
  {
    startTime: 2190.38,
    person: 'Woody',
    text: " Yeah, so I might have, but that's, so I've done this, I've owned a number of different kinds of businesses."
  },
  { startTime: 2195.88, person: 'Woody', text: ' And so, but this is part of the issue.' },
  { startTime: 2199.4, person: 'Woody', text: " We don't have enough time." },
  {
    startTime: 2201.1,
    person: 'Karol',
    text: ' So see, my not enough time is exactly stemming from that ADHD part, because I do have ADHD.'
  },
  {
    startTime: 2209.38,
    person: 'Karol',
    text: ' But me declining to work on certain topics and just delegating certain topics away from me is part of my autistic part, which my ADHD is pure chaos.'
  },
  {
    startTime: 2221.94,
    person: 'Karol',
    text: ' And then my autism just puts a structure on top of that and forces that into a submission.'
  },
  {
    startTime: 2227.86,
    person: 'Woody',
    text: ' So although I have no advice about this, whatever.'
  },
  {
    startTime: 2231.26,
    person: 'Woody',
    text: " One thing that I've noticed, whenever I started a business, by the time I get to about 10 employees, I was spending more of my time delegating work to other people managing the other people than doing the thing I was interested in, in the first place."
  },
  { startTime: 2246.04, person: 'Woody', text: " So that's just an observation about myself." },
  { startTime: 2248.36, person: 'Woody', text: ' That often would be the point.' },
  {
    startTime: 2250.38,
    person: 'Woody',
    text: " If I had six or eight or 10 employees, it was getting to the point where I'm not interested in this part of this thing."
  },
  { startTime: 2256.9, person: 'Woody', text: ' Let me do something else.' },
  {
    startTime: 2258.24,
    person: 'Woody',
    text: " And that's a part of why I got into software development."
  },
  { startTime: 2261.56, person: 'Woody', text: ' Matter of fact, we got something coming in.' },
  { startTime: 2264.02, person: 'Karol', text: ' Yes, we have something from Carolina.' },
  {
    startTime: 2266.46,
    person: 'Karol',
    text: ' So too often, everything has to be done quickly.'
  },
  { startTime: 2269.38, person: 'Karol', text: ' So the deadline was tomorrow.' },
  { startTime: 2271.62, person: 'Karol', text: " That's one of the things, yes." },
  {
    startTime: 2274.46,
    person: 'Karol',
    text: " Supervisors aren't interested in solving the problem."
  },
  { startTime: 2278, person: 'Karol', text: ' Typical managerial issue, right?' },
  {
    startTime: 2281.28,
    person: 'Karol',
    text: ' But rather in putting out the fire as fast as possible, and then waiting for the next fire to happen, basically.'
  },
  {
    startTime: 2288.12,
    person: 'Karol',
    text: ' In consulting, there was a colleague in the CRM spice that just told us one day, and that landed as a meme on our desktops, as our actual background of the desktop, that we are all consultants.'
  },
  { startTime: 2308.78, person: 'Karol', text: ' We all love a good dumpster fire.' },
  { startTime: 2311.64, person: 'Woody', text: ' Yes.' },
  {
    startTime: 2312.6,
    person: 'Karol',
    text: " So that's basically a dumpster fire situation there."
  },
  {
    startTime: 2316.2,
    person: 'Woody',
    text: " This is really, there's a quote that is often attributed to Peter Drucker, and I'm going to paraphrase it."
  },
  {
    startTime: 2327.26,
    person: 'Woody',
    text: ' He says, much of what we consider to be management is simply making it hard for people to work.'
  },
  { startTime: 2334.22, person: 'Woody', text: " And that's a big part of this right here." },
  { startTime: 2336.44, person: 'Woody', text: " Now, I don't know if he actually said that." },
  {
    startTime: 2338.06,
    person: 'Woody',
    text: " I've never found an original source for that quote, but I have found the earliest version of it."
  },
  {
    startTime: 2344.78,
    person: 'Woody',
    text: " I found, and he's supposedly quoting Peter Drucker, but he doesn't say where he gets it from."
  },
  {
    startTime: 2349.6,
    person: 'Woody',
    text: " So I don't know if it's really from Peter Drucker, but I love that quote."
  },
  {
    startTime: 2353.84,
    person: 'Woody',
    text: " The issue is as managers, our job is to make it look like we're managing things."
  },
  { startTime: 2360.3, person: 'Woody', text: ' So we need to, we want charts.' },
  { startTime: 2363.26, person: 'Woody', text: ' We want things to measure.' },
  {
    startTime: 2364.9,
    person: 'Woody',
    text: " Well, there's another good quote I'll share from, I think it's from Russell Acuff, which I usually paraphrase a little bit, but I'm going to try and do it exactly as he says, when a manager can't measure what they want, they start wanting what they can measure."
  },
  { startTime: 2380.7, person: 'Woody', text: ' This is really problematic.' },
  { startTime: 2384.26, person: 'Woody', text: ' So this is a big part of the issue right here.' },
  {
    startTime: 2386.9,
    person: 'Woody',
    text: " We're using proxy measurements that make it look like we're doing something, but are actually meaningless to be doing."
  },
  {
    startTime: 2394.56,
    person: 'Woody',
    text: " And we're not just, are they proxy measurements?"
  },
  {
    startTime: 2397.82,
    person: 'Woody',
    text: " They're usually some kind of a lagging indicator, which means the usefulness of them has passed by the time we get the information that we need."
  },
  {
    startTime: 2405.7,
    person: 'Woody',
    text: ' An example of that, that I often see in software is people measuring a cycle time, which I would say cycle time is meaningful only when you have highly repetitive processes, like in manufacturing.'
  },
  { startTime: 2419.92, person: 'Woody', text: " And we don't get that when we're working." },
  { startTime: 2422.14, person: 'Woody', text: ' Oh, you got a quote to do.' },
  {
    startTime: 2423.42,
    person: 'Woody',
    text: " Managers who don't know how to measure what they want."
  },
  { startTime: 2426.58, person: 'Woody', text: ' Yes.' },
  { startTime: 2427.34, person: 'Karol', text: ' This is from Russell Acuff.' },
  { startTime: 2431.96, person: 'Woody', text: ' And I said it pretty much hit it.' },
  { startTime: 2434.78, person: 'Woody', text: ' Yeah.' },
  { startTime: 2435.14, person: 'Karol', text: " That's a great book." },
  { startTime: 2437.02, person: 'Woody', text: " So that's this little book right here." },
  { startTime: 2444.98, person: 'Woody', text: ' A little book of F-laws.' },
  { startTime: 2446.38, person: 'Woody', text: ' Yes.' },
  {
    startTime: 2447.58,
    person: 'Karol',
    text: " And it's actually easily findable online if somebody wants to read it."
  },
  { startTime: 2452.66, person: 'Karol', text: ' This is quite an interesting read.' },
  { startTime: 2456.36, person: 'Karol', text: " It's not that hard." },
  { startTime: 2457.26, person: 'Woody', text: " And he's got a bigger version of that book too." },
  { startTime: 2459.6, person: 'Karol', text: ' Yes.' },
  {
    startTime: 2460.56,
    person: 'Woody',
    text: " But that's a perfect, that's a, so I've been using that for years and I got to, you know, let's make fun of myself, you know, as a manager through the years, I found myself having to do those things."
  },
  {
    startTime: 2471.5,
    person: 'Woody',
    text: ' And this is why when I started doing software development, I would, the highest I would allow myself to work was at a team lead level.'
  },
  {
    startTime: 2480.02,
    person: 'Woody',
    text: " I kept turning down becoming, you know, a development manager or whatever manager, because when you get into that space, you have to use these pretend proxy measurements to show that you're doing your work."
  },
  { startTime: 2492.8, person: 'Woody', text: " And I'm not willing to do those things." },
  {
    startTime: 2494.96,
    person: 'Woody',
    text: ' I have ended up managing projects and managing large groups of people.'
  },
  {
    startTime: 2498.82,
    person: 'Woody',
    text: ' I think the most ever was maybe 80 or so people, but yeah, dang it.'
  },
  {
    startTime: 2506.14,
    person: 'Woody',
    text: " So let's get back to symptoms if you don't mind."
  },
  { startTime: 2508.84, person: 'Woody', text: ' Do we have anybody else sharing?' },
  { startTime: 2511.28, person: 'Karol', text: ' Yes.' },
  {
    startTime: 2511.38,
    person: 'Karol',
    text: ' We have Maxim here sharing on YouTube, not knowing expectations.'
  },
  { startTime: 2517.66, person: 'Karol', text: ' Yes.' },
  {
    startTime: 2518.54,
    person: 'Karol',
    text: ' Expectations and then follow up or if they change without one, knowing it, which is something I find very often in IT, the expectations change or requirements change without any notice, notification to the team, to the project programme whatsoever.'
  },
  {
    startTime: 2539.16,
    person: 'Woody',
    text: ' So I can relate to, so I can be very narcissistic or whatever here and relate to my own experiences, every one of these things.'
  },
  {
    startTime: 2547.4,
    person: 'Woody',
    text: ' I worked on a project once where there was a team that was supposed to be creating the requirements for some work, which I think is a harmful process, but they never really got anything.'
  },
  {
    startTime: 2561.96,
    person: 'Woody',
    text: ' So we, as the developers had to start creating this software without having any requirements whatsoever.'
  },
  {
    startTime: 2568.2,
    person: 'Woody',
    text: " We only knew the bigger umbrella, which I'd rather just know the bigger umbrella rather than a well-written requirements document."
  },
  { startTime: 2579.42, person: 'Woody', text: " Everybody's had this." },
  {
    startTime: 2580.4,
    person: 'Woody',
    text: " I've worked with requirements documents that maybe have descriptions for 60, 70, 80 features or parts of features."
  },
  {
    startTime: 2588.32,
    person: 'Woody',
    text: " And then we get into them and we start finding out we can't write it from this list of requirements."
  },
  {
    startTime: 2597.9,
    person: 'Woody',
    text: ' We need to go talk with the people who are asking for these things.'
  },
  {
    startTime: 2603.3,
    person: 'Woody',
    text: ' And so the work that was done to create the documents was done before the knowledge was full enough to do a good job with writing that.'
  },
  {
    startTime: 2612.38,
    person: 'Woody',
    text: " That's something that I see happen over and over again."
  },
  {
    startTime: 2615.38,
    person: 'Karol',
    text: ' Yeah, because there are different levels of abstractions of requirements, right?'
  },
  { startTime: 2619.54, person: 'Karol', text: ' You have a very high level requirements.' },
  {
    startTime: 2622.24,
    person: 'Karol',
    text: ' Well, I would say business expectations, which not necessarily mean business needs, where needs are at the actual something that is actually translatable to requirements, not expectations.'
  },
  {
    startTime: 2637.92,
    person: 'Karol',
    text: ' And then those need to be translated to something that an architect can understand, and then later translated to something that developer can understand, et cetera, et cetera.'
  },
  { startTime: 2647.82, person: 'Karol', text: ' So there are levels of abstractions.' },
  {
    startTime: 2650.48,
    person: 'Karol',
    text: " It's very rare that companies can pierce through those levels and build a shared understanding."
  },
  {
    startTime: 2655.56,
    person: 'Woody',
    text: ' So you just hit the key phrase of shared understanding.'
  },
  {
    startTime: 2659.06,
    person: 'Woody',
    text: ' And I believe that is very difficult to have unless we are working very closely together.'
  },
  {
    startTime: 2665.74,
    person: 'Woody',
    text: ' So yeah, welcome to the big enterprise IT and relatively small enterprise IT.'
  },
  {
    startTime: 2672.14,
    person: 'Woody',
    text: ' I mean, I worked in one of my early contracts in 2001, I think, or 2000.'
  },
  { startTime: 2681.1, person: 'Woody', text: ' Yeah, 2001, maybe.' },
  {
    startTime: 2683.24,
    person: 'Woody',
    text: ' I worked at a place that really only had two or three developers, and yet they had all these things where they had the complex requirements documents.'
  },
  {
    startTime: 2693.38,
    person: 'Woody',
    text: ' They had designed their architecture and their architectures was intended to be N tier, which was really popular at that time.'
  },
  {
    startTime: 2700.76,
    person: 'Woody',
    text: ' But what they were really writing was a client server application, which is a different version of starting to have layers.'
  },
  {
    startTime: 2708.98,
    person: 'Woody',
    text: " And so you couldn't even tell the boss that, hey, this isn't N tier, this is a client server app."
  },
  { startTime: 2715.74, person: 'Woody', text: " And they didn't want to hear that." },
  {
    startTime: 2718.44,
    person: 'Woody',
    text: ' So anyways, and there are ways to do that in almost every language.'
  },
  {
    startTime: 2721.16,
    person: 'Woody',
    text: " And whether they were good or not, I don't know."
  },
  {
    startTime: 2722.86,
    person: 'Woody',
    text: ' For those kinds of apps in those days, it was probably good.'
  },
  { startTime: 2725.6, person: 'Woody', text: ' Okay.' },
  { startTime: 2725.94, person: 'Karol', text: " But let's dig into those symptoms." },
  { startTime: 2727.76, person: 'Karol', text: " Maybe- Let's get back to the..." },
  { startTime: 2729.34, person: 'Karol', text: ' Go ahead.' },
  {
    startTime: 2729.56,
    person: 'Karol',
    text: " Let's have your list, and then also get back to Carolina here, and let's try to dismantle this as symptoms and ponder a little bit here."
  },
  { startTime: 2740.2, person: 'Woody', text: ' So the list...' },
  {
    startTime: 2741.04,
    person: 'Woody',
    text: ' So I have an example that I give that lists out...'
  },
  { startTime: 2745.4, person: 'Woody', text: ' I did this as an exercise with 20 people.' },
  {
    startTime: 2748.16,
    person: 'Woody',
    text: " And I've done this over and over with groups, because that's about the size I like to do my workshops."
  },
  { startTime: 2752.08, person: 'Woody', text: ' I asked them exactly this question.' },
  { startTime: 2754.24, person: 'Woody', text: ' They came up with 50 items.' },
  { startTime: 2756.88, person: 'Woody', text: ' Some of them are pretty similar to each other.' },
  { startTime: 2759.2, person: 'Woody', text: ' But let me share a few.' },
  {
    startTime: 2760.92,
    person: 'Woody',
    text: ' The most common one I will see has the word meetings in it.'
  },
  {
    startTime: 2764.6,
    person: 'Woody',
    text: ' And in this group, they had one which was needless meetings.'
  },
  { startTime: 2768.02, person: 'Karol', text: ' Needless meetings.' },
  { startTime: 2768.98, person: 'Karol', text: ' Okay.' },
  { startTime: 2769.34, person: 'Karol', text: ' Brilliant.' },
  { startTime: 2770.34, person: 'Woody', text: ' Anything.' },
  {
    startTime: 2771.02,
    person: 'Woody',
    text: ' So they will say frequent meetings or poorly run meetings.'
  },
  {
    startTime: 2775.5,
    person: 'Woody',
    text: ' But I would just say meetings are a potential symptom.'
  },
  { startTime: 2779.44, person: 'Woody', text: ' So meetings themselves are not the problem.' },
  {
    startTime: 2782.82,
    person: 'Woody',
    text: " So if we say, well, our meetings aren't helping us like we would like them to, so we need to get better at having meetings."
  },
  { startTime: 2790.38, person: 'Woody', text: " Well, we're dealing with the symptom." },
  {
    startTime: 2792.28,
    person: 'Woody',
    text: " That's a way of resolving the problem instead of actually solving it."
  },
  {
    startTime: 2796.32,
    person: 'Woody',
    text: " And again, I don't agree with the idea that solving it is where we need to be."
  },
  {
    startTime: 2799.92,
    person: 'Woody',
    text: " I think either dissolving or an idea that I use, which I call pre-solving, which means let's stop worrying about our problems, and let's just work on the stuff that's actually..."
  },
  {
    startTime: 2810.3,
    person: 'Woody',
    text: " Let's make the things that are working well, even working better for us."
  },
  { startTime: 2815.86, person: 'Woody', text: " So that's one of my typical approaches." },
  { startTime: 2819.96, person: 'Woody', text: ' Rather than focus on...' },
  {
    startTime: 2821.2,
    person: 'Woody',
    text: " Rather than saying, let's get to the root cause of this problem, let's figure out how to make everything that's already working work better."
  },
  {
    startTime: 2829.62,
    person: 'Woody',
    text: ' We can talk about that later if we have the time.'
  },
  { startTime: 2831.52, person: 'Woody', text: " I'm going to read off a couple of these things." },
  { startTime: 2833.1, person: 'Woody', text: " Here's four that really go together." },
  {
    startTime: 2834.84,
    person: 'Woody',
    text: ' Context switching, distractions, multitasking, and workflow interruptions.'
  },
  { startTime: 2841.78, person: 'Woody', text: ' Those things go closely together.' },
  { startTime: 2844.34, person: 'Woody', text: ' Yes.' },
  { startTime: 2845.82, person: 'Karol', text: ' Were those people from IT?' },
  { startTime: 2847.94, person: 'Woody', text: ' These are all software developers.' },
  { startTime: 2849.84, person: 'Woody', text: ' All software developers.' },
  {
    startTime: 2851.16,
    person: 'Woody',
    text: ' Probably at this particular workshop, it was all software developers.'
  },
  {
    startTime: 2855.16,
    person: 'Woody',
    text: ' Sometimes I have managers, and sometimes I will have people from finance or people from HR or whatever in my workshops, or only managers or whatever.'
  },
  { startTime: 2866.16, person: 'Woody', text: ' So yeah.' },
  { startTime: 2866.7, person: 'Woody', text: ' Okay.' },
  {
    startTime: 2867.08,
    person: 'Woody',
    text: ' So that grouping right there, those are things that I think of as symptoms, and I would like to have a signal.'
  },
  {
    startTime: 2874.84,
    person: 'Woody',
    text: ' If we see we are multitasking, I want that to be an alert.'
  },
  { startTime: 2878.98, person: 'Woody', text: " There's something we need to deal with." },
  {
    startTime: 2880.54,
    person: 'Woody',
    text: " Let me go to some that really introduces to me what's the big problem, and it is the symptoms of it."
  },
  {
    startTime: 2886.46,
    person: 'Woody',
    text: ' Dependency on other teams, waiting on a dependency, external dependencies, which means outside of our team or outside of our company.'
  },
  {
    startTime: 2897.38,
    person: 'Woody',
    text: ' And related to this is unclear expectations, which I think somebody here already noted, unrealistic expectations.'
  },
  { startTime: 2905.92, person: 'Woody', text: ' So this is a priority.' },
  { startTime: 2907.44, person: 'Woody', text: ' Stop working on that.' },
  { startTime: 2908.42, person: 'Woody', text: ' Work on this priority.' },
  {
    startTime: 2909.5,
    person: 'Woody',
    text: " Two days later, while you're in the middle of working on that new priority, they come in, wait, wait, we have an emergency fire to put out, and we're going to work on this."
  },
  { startTime: 2915.88, person: 'Woody', text: ' And we have a stack of unfinished work.' },
  { startTime: 2919.54, person: 'Woody', text: ' This is introduced.' },
  { startTime: 2920.48, person: 'Karol', text: ' These are related.' },
  { startTime: 2921.38, person: 'Karol', text: ' Go ahead.' },
  {
    startTime: 2921.54,
    person: 'Karol',
    text: ' Or even worse, somebody sets the priority, start working on that new priority, and then has problem with you not finishing the previous task because the priority was switched, but they still expected you to finish that task in the same period of time.'
  },
  {
    startTime: 2936.7,
    person: 'Woody',
    text: " So this is often a problem that is put on the person doing the work, but it's really on the part of the person."
  },
  { startTime: 2945, person: 'Woody', text: ' But let me say it differently.' },
  {
    startTime: 2946.44,
    person: 'Woody',
    text: " It's not even on the part of the person who's telling people to get the work done."
  },
  { startTime: 2950.6, person: 'Woody', text: ' I think this is a system problem.' },
  { startTime: 2954.08, person: 'Woody', text: ' This is a system level problem.' },
  { startTime: 2955.76, person: 'Woody', text: ' This is not those individuals.' },
  {
    startTime: 2958.26,
    person: 'Woody',
    text: " The managers are just doing what's expected of a manager."
  },
  {
    startTime: 2962.28,
    person: 'Woody',
    text: " So a manager, in a lot of ways, they're kind of squeezed in the middle between the actually getting the work done and those unrealistic expectations."
  },
  { startTime: 2972.86, person: 'Woody', text: " And they'll lose their job." },
  {
    startTime: 2975.18,
    person: 'Woody',
    text: " They have a chance, depending on what country you're in, they have a chance of losing their job if they don't live up to the expectations."
  },
  {
    startTime: 2982.86,
    person: 'Woody',
    text: ' So often what will happen in those kinds of situations is we get good at putting the blame on someone else.'
  },
  { startTime: 2989.24, person: 'Woody', text: " That's one problem that we can see from it." },
  {
    startTime: 2991.44,
    person: 'Woody',
    text: ' Another one is we have this, what I would consider massaging the numbers.'
  },
  {
    startTime: 2998.3,
    person: 'Woody',
    text: " We can prove we got it done on time, but it's because we cut some things that we didn't actually, or we didn't, well, I'm going to tell an awful story."
  },
  {
    startTime: 3008.3,
    person: 'Woody',
    text: ' I was working in a place that had a bunch of code that needed to be delivered for the new version of this thing.'
  },
  {
    startTime: 3013.64,
    person: 'Woody',
    text: ' It had millions, more than a million lines of code in it.'
  },
  {
    startTime: 3016.66,
    person: 'Woody',
    text: ' And they had an agreement that it would be with the customers, that there would be no major bugs or no critical bugs, no more than five major bugs, no more than, you know, they had these different level of bugs.'
  },
  {
    startTime: 3029.72,
    person: 'Woody',
    text: ' They just moved each bug category down one level to meet their requirement of not having so many critical bugs.'
  },
  { startTime: 3039.24, person: 'Woody', text: ' Critical bugs became major bugs.' },
  {
    startTime: 3041.28,
    person: 'Woody',
    text: ' The major bugs, which switched into being, you know, level three bugs and then so on, or level one bugs and so on.'
  },
  {
    startTime: 3048.26,
    person: 'Woody',
    text: ' So they just recategorised the bugs and they were able to meet their deadline.'
  },
  { startTime: 3052.6, person: 'Woody', text: ' This is fake.' },
  { startTime: 3053.94, person: 'Karol', text: ' Go ahead.' },
  {
    startTime: 3054.56,
    person: 'Karol',
    text: " In Poland, we would call this painting the grass green, which is something that actually happened in Poland in terms when we had still communism or well, at least the Europeanised version of communism, because that wasn't that communism as defined."
  },
  {
    startTime: 3075.88,
    person: 'Karol',
    text: " When a delegate from the party was arriving at a certain city and the grass wasn't green enough, they really went on the grass and painted it green to make it green enough."
  },
  {
    startTime: 3086.2,
    person: 'Karol',
    text: ' These were literally things that happened, right?'
  },
  { startTime: 3090.64, person: 'Woody', text: ' This is a system thing.' },
  {
    startTime: 3093.72,
    person: 'Woody',
    text: ' And in a related thing for this, for me is I worked in televised sporting events for a while, making advertising and graphics and signage for them.'
  },
  { startTime: 3101.86, person: 'Woody', text: ' But I would attend them sometimes.' },
  {
    startTime: 3103.96,
    person: 'Woody',
    text: ' And sometimes to make something look good on television, they spray the grass to make it look green.'
  },
  {
    startTime: 3109.72,
    person: 'Woody',
    text: ' So it already is kind of green, but now it looks green.'
  },
  { startTime: 3113.26, person: 'Woody', text: ' This is something we need to understand.' },
  {
    startTime: 3117.76,
    person: 'Woody',
    text: ' In the idea of television, what a natural colour looks like is not the same as what the televised colour will look like.'
  },
  {
    startTime: 3127.18,
    person: 'Woody',
    text: ' So they may need to modify the colour so that it looks appropriate on a TV screen or whatever, a broadcast screen.'
  },
  { startTime: 3133.96, person: 'Woody', text: ' And in real life, it looks kind of funky.' },
  { startTime: 3136.04, person: 'Woody', text: ' So anyways, this is exactly an example of that.' },
  { startTime: 3139.48, person: 'Woody', text: " I'm going to give you a couple more." },
  {
    startTime: 3141.7,
    person: 'Woody',
    text: ' So waiting on clarification is just the outside dependency, lack of knowledge, lack of skills, communication barriers, poor working conditions.'
  },
  {
    startTime: 3151.96,
    person: 'Woody',
    text: " I've worked at places where we are so cramped that developers really had, you know, you can't be so cramped with other people that all you're hearing is the noise of the salespeople doing sales calls all day long and you can't get your focus."
  },
  {
    startTime: 3167.02,
    person: 'Woody',
    text: " So I see having to wear and listen to music to cut out the rest of the noise, that's a symptom of something."
  },
  { startTime: 3175.36, person: 'Woody', text: " Okay, I'll give a couple more here." },
  {
    startTime: 3177.1,
    person: 'Woody',
    text: " Onboarding, something that makes it difficult for me to be effective is I'm spending a lot of time onboarding other people."
  },
  { startTime: 3183.32, person: 'Woody', text: " Let's give a couple more." },
  {
    startTime: 3184.34,
    person: 'Woody',
    text: " Technical debt, that's a very big one in a lot of places."
  },
  { startTime: 3189.04, person: 'Woody', text: " Let's see, not everyone being on the same page." },
  { startTime: 3191.06, person: 'Woody', text: ' I think somebody kind of brought that up.' },
  {
    startTime: 3192.32,
    person: 'Woody',
    text: " We don't know what the priority is right now, so we're working on something that's not the priority."
  },
  { startTime: 3199.2, person: 'Woody', text: ' Obviously.' },
  {
    startTime: 3199.64,
    person: 'Woody',
    text: " So I often hear some of them, here's one, not taking enough time the first time."
  },
  {
    startTime: 3205.84,
    person: 'Woody',
    text: " So part of that one is it's not necessarily taking enough time doing the analysis."
  },
  {
    startTime: 3212.04,
    person: 'Woody',
    text: " I would say it's not taking enough time doing the experiments that we need to be doing, but we think we need to do it right the first time."
  },
  {
    startTime: 3219.64,
    person: 'Woody',
    text: ' And so what we do is we work on our current understanding.'
  },
  { startTime: 3223.46, person: 'Woody', text: ' So these are all symptoms.' },
  {
    startTime: 3224.5,
    person: 'Woody',
    text: ' I believe these are all symptoms, and I have a list of 50 of them in front of me, but I have collected about 200 of these symptoms.'
  },
  { startTime: 3232.78, person: 'Woody', text: ' Yes, go ahead.' },
  {
    startTime: 3234.7,
    person: 'Karol',
    text: ' To sum it up with a decent, more of a generic phrase, how would you define a symptom?'
  },
  { startTime: 3242.46, person: 'Woody', text: ' So, yeah, let me get it.' },
  {
    startTime: 3244.36,
    person: 'Woody',
    text: ' So to me, a symptom is a noticeable outward manifestation of a problem, a potential problem.'
  },
  {
    startTime: 3255.48,
    person: 'Woody',
    text: " So let me go ahead, if you don't mind, I'm going to get, I have in front of me a slight description that will make it easier for me to state this."
  },
  { startTime: 3263.56, person: 'Woody', text: ' Okay.' },
  {
    startTime: 3263.76,
    person: 'Woody',
    text: ' So a symptom is an outward indication that something is wrong.'
  },
  {
    startTime: 3268.02,
    person: 'Woody',
    text: " It is what we can see or feel, even if we don't yet know the cause."
  },
  {
    startTime: 3272.98,
    person: 'Woody',
    text: ' So this is the way I usually give an example of it.'
  },
  {
    startTime: 3275.5,
    person: 'Woody',
    text: " If I'm sneezing, congested, have a sore throat and a headache, those are symptoms."
  },
  {
    startTime: 3280.6,
    person: 'Woody',
    text: ' And they may suggest that I have a cold or a virus of some kind.'
  },
  {
    startTime: 3283.94,
    person: 'Woody',
    text: " The symptoms are pointing to the underlying problem, but being uncomfortable because of these things is what we're going to try to deal with."
  },
  {
    startTime: 3294.97,
    person: 'Woody',
    text: ' And so instead of dealing with the problem, we might deal with the symptoms.'
  },
  {
    startTime: 3299.65,
    person: 'Woody',
    text: " We take a decongestant, a pain reducer, a cough suppressant, maybe we'll take something to reduce our temperature if we have a fever."
  },
  { startTime: 3309.37, person: 'Woody', text: " So we're dealing with the symptoms." },
  {
    startTime: 3311.51,
    person: 'Woody',
    text: ' And in medical terms, some of these things are signals or signs, and some of them are symptoms.'
  },
  {
    startTime: 3317.21,
    person: 'Woody',
    text: " A sign is something that can be measured like taking someone's temperature."
  },
  {
    startTime: 3321.37,
    person: 'Woody',
    text: " And a symptom is something I can feel like I've got a sore throat."
  },
  { startTime: 3324.61, person: 'Woody', text: ' So these symptoms are what we often deal with.' },
  {
    startTime: 3329.27,
    person: 'Woody',
    text: ' Is there a medication you can take that eliminates a cold?'
  },
  { startTime: 3332.69, person: 'Woody', text: ' Maybe not.' },
  {
    startTime: 3333.69,
    person: 'Woody',
    text: " I've seen people claim that there are things they can do, but we just need to rest, drink plenty of fluids."
  },
  {
    startTime: 3340.51,
    person: 'Woody',
    text: ' But the problem comes in is if we deal with the symptoms, we might feel better.'
  },
  {
    startTime: 3346.15,
    person: 'Woody',
    text: " So if I feel better today, I no longer have my headache, I'm not congested, I'm not sneezing all the time, I don't have a sore throat, then I might think, well, it's okay if I go to work."
  },
  {
    startTime: 3355.45,
    person: 'Woody',
    text: " Now I go to work, I'm still contagious, and I'm spreading the disease to everyone else."
  },
  {
    startTime: 3359.61,
    person: 'Woody',
    text: " So I haven't dealt with the problem, I dealt with the symptoms."
  },
  { startTime: 3363.47, person: 'Woody', text: ' So this started for me a long time ago.' },
  {
    startTime: 3367.69,
    person: 'Woody',
    text: " I believe that often we're dealing with the symptoms and not the underlying problem."
  },
  {
    startTime: 3375.13,
    person: 'Woody',
    text: " And I sort of learned over the years that the, that we can't necessarily solve the underlying problem."
  },
  {
    startTime: 3385.08,
    person: 'Woody',
    text: " And when we try to do that, it's sort of like we're just moving the problem to a different space."
  },
  {
    startTime: 3391.14,
    person: 'Woody',
    text: " So often when we solve a problem, that solution becomes tomorrow's problem."
  },
  {
    startTime: 3397.12,
    person: 'Woody',
    text: ' So even when we know, so this is kind of the connevant thing.'
  },
  {
    startTime: 3400.48,
    person: 'Woody',
    text: ' In the clear space and probably the complicated space, I think we can easily be solving problems.'
  },
  {
    startTime: 3405.66,
    person: 'Woody',
    text: ' You know, example for me, I can, I worked at a place once when I was kind of young, and it was raining too much.'
  },
  {
    startTime: 3410.8,
    person: 'Woody',
    text: ' And it started washing out some of their roads and some of their fields.'
  },
  {
    startTime: 3415.26,
    person: 'Woody',
    text: ' And we needed to go and dig some ditches to divert the water that was being destructive.'
  },
  { startTime: 3420.78, person: 'Woody', text: " Well, yeah, that's pretty easy to solve." },
  {
    startTime: 3423.8,
    person: 'Woody',
    text: ' Once we got those ditches dug, the problem went away.'
  },
  {
    startTime: 3427.28,
    person: 'Woody',
    text: " Maybe it caused other problems, but you're getting the picture here."
  },
  {
    startTime: 3430.94,
    person: 'Woody',
    text: " In some spaces, yeah, it's obvious and you take care of it."
  },
  {
    startTime: 3433.6,
    person: 'Woody',
    text: " But in the space, in the complex space, and I will make this argument, all software development, real true software development, if that's a usable term, that's in the complex space."
  },
  {
    startTime: 3445.28,
    person: 'Woody',
    text: " We're going to find out what our problems are as we try to solve them."
  },
  {
    startTime: 3448.98,
    person: 'Woody',
    text: ' When a customer comes to you and says, this is what we need, they may not know it.'
  },
  {
    startTime: 3454.14,
    person: 'Woody',
    text: " There may be a solution that they haven't even considered yet."
  },
  {
    startTime: 3457.24,
    person: 'Woody',
    text: ' And the one that they, the solution they think they have may not solve their actual problem.'
  },
  {
    startTime: 3461.4,
    person: 'Woody',
    text: ' So we need to do this iterative discovery type thing of development.'
  },
  { startTime: 3467.2, person: 'Woody', text: ' But well, I like this.' },
  { startTime: 3468.66, person: 'Woody', text: " Let's be honest." },
  {
    startTime: 3469.22,
    person: 'Woody',
    text: ' Sometimes it takes treating the symptom before everyone is ready to think about the underlying cause.'
  },
  { startTime: 3473.76, person: 'Woody', text: ' Exactly.' },
  { startTime: 3475.32, person: 'Woody', text: ' You should just be here giving this.' },
  {
    startTime: 3476.98,
    person: 'Woody',
    text: ' We should be interviewing Maxim Kogan because this is the point.'
  },
  {
    startTime: 3484.02,
    person: 'Woody',
    text: ' Sometimes the discovery process includes attempting to solve a symptom, but we have to do this with a spirit, I think, of open-mindedness and discovery, which means we have to set up a theory for ourselves.'
  },
  { startTime: 3498.46, person: 'Woody', text: " It's kind of taking a scientific approach." },
  {
    startTime: 3501.8,
    person: 'Woody',
    text: ' Set up a theory, act on the theory, and then be willing to see that we failed.'
  },
  {
    startTime: 3507.7,
    person: 'Karol',
    text: " Of course, sometimes we need to treat the symptom first, because if it's causing us harm, problems, it's painful, whatever the problematic result of that symptom is, because there's causality."
  },
  { startTime: 3519.62, person: 'Karol', text: " There's the root cause, the problem." },
  {
    startTime: 3521.9,
    person: 'Karol',
    text: ' It has symptoms, and the symptoms also are causes for us to whatever, right?'
  },
  { startTime: 3528.24, person: 'Karol', text: ' Suffer.' },
  {
    startTime: 3529.32,
    person: 'Karol',
    text: ' And that would mean that, of course, we will need to treat the symptoms first at times to be able to get to the root cause.'
  },
  {
    startTime: 3537.18,
    person: 'Karol',
    text: " But also, sometimes, without getting to the root cause, we'll not be able to treat the symptoms."
  },
  {
    startTime: 3543.62,
    person: 'Karol',
    text: ' So, for example, a very common symptom I find in my line of work as an integration architect is that a lot of people state that, oh, integration platforms are useless.'
  },
  { startTime: 3557.1, person: 'Karol', text: " They're only bottlenecks." },
  {
    startTime: 3558.72,
    person: 'Karol',
    text: " They're centralised bottlenecks and only problems."
  },
  { startTime: 3561.06, person: 'Karol', text: " And I say, well, no, that's not a problem." },
  { startTime: 3564.38, person: 'Karol', text: " That's a symptom." },
  {
    startTime: 3566.34,
    person: 'Karol',
    text: " Because if you stuff that system with people who are, for example, former DBAs, and I literally saw that kind of thing, where they're not trained to be integration experts, but to persist everything, they'll build so much complexity in that system that it will not be operable, because then they will be shifting most of their workload toward operations, not developing new integrations, right?"
  },
  {
    startTime: 3595.12,
    person: 'Karol',
    text: ' And this is, again, a systemic problem, not a problem that is of their own volition, so to speak.'
  },
  { startTime: 3605.26, person: 'Karol', text: ' But you know what?' },
  { startTime: 3606.26, person: 'Karol', text: " All this kind of brought me to Tesla's law." },
  { startTime: 3610.8, person: 'Karol', text: " You know Tesla's law?" },
  { startTime: 3612.56, person: 'Woody', text: ' No, no.' },
  { startTime: 3613.04, person: 'Woody', text: ' Tell me.' },
  {
    startTime: 3614,
    person: 'Karol',
    text: " Tesla's law is the law of conversion of complexity."
  },
  {
    startTime: 3617.58,
    person: 'Karol',
    text: " It's very common in user experience, and it's, well, it's from the 80s, so it's quite old already."
  },
  { startTime: 3624.88, person: 'Karol', text: " And it's from Larry Tesla." },
  {
    startTime: 3626.82,
    person: 'Karol',
    text: " And the most basic form of Tesla's law is that every application must have an inherent amount of irreducible complexity."
  },
  {
    startTime: 3635.48,
    person: 'Karol',
    text: ' The only question is, who will have to deal with it?'
  },
  {
    startTime: 3639.42,
    person: 'Karol',
    text: " And what we're talking right now about problem solving and symptoms and moving the problems somewhere else is, I would say, the dark side of Tesla's law, because we're moving that complexity, which is the problem space, away from us, somewhere else, for it to burn somebody else."
  },
  { startTime: 3658.9, person: 'Karol', text: ' But basically, what would happen?' },
  {
    startTime: 3659.48,
    person: 'Woody',
    text: " So this is, you know the book by Donald Norman, I think it's now called The Design of Everyday Things?"
  },
  { startTime: 3670.7, person: 'Woody', text: ' Yes, a very good book.' },
  {
    startTime: 3672.3,
    person: 'Woody',
    text: ' So I think originally it was The Psychology of Everyday Things, although I may have that, I may be wrong.'
  },
  { startTime: 3678.28, person: 'Woody', text: ' I might be confusing that.' },
  {
    startTime: 3679.82,
    person: 'Woody',
    text: " So to get to the point though, that, you know, the user, the complexity should be, or whatever we're going to call it, should be shifted from the user."
  },
  {
    startTime: 3693.52,
    person: 'Woody',
    text: ' So the user should not need to be trained to use something.'
  },
  {
    startTime: 3696.74,
    person: 'Woody',
    text: ' And this is something I learned quite a bit about in wayfinding.'
  },
  {
    startTime: 3700.22,
    person: 'Woody',
    text: ' So wayfinding is something I was involved in a long time ago.'
  },
  {
    startTime: 3702.98,
    person: 'Woody',
    text: " That's like, if you go to the hospital, and you need to get to the emergency room, you want to go directly to the emergency area."
  },
  {
    startTime: 3709.56,
    person: 'Woody',
    text: " You don't want to have to figure out and talk to people and, you know, you want to get right there immediately."
  },
  { startTime: 3714.5, person: 'Woody', text: ' So this is wayfinding in a hospital.' },
  {
    startTime: 3716.98,
    person: 'Woody',
    text: " You know, that's a complex problem because they have little departments spread out all over the place."
  },
  {
    startTime: 3721.16,
    person: 'Woody',
    text: " If you need to get somebody to, you know, the place where they can start stitching them up, you don't want to be wasting seconds."
  },
  {
    startTime: 3729.86,
    person: 'Karol',
    text: " Yeah, you don't want the bleeding all over the place to get to that."
  },
  { startTime: 3733.14, person: 'Woody', text: ' Yeah, yeah.' },
  { startTime: 3733.74, person: 'Woody', text: ' We have a cleanup problem.' },
  { startTime: 3735.14, person: 'Woody', text: ' Okay.' },
  { startTime: 3735.38, person: 'Karol', text: " That's a lot of problems." },
  {
    startTime: 3736.54,
    person: 'Woody',
    text: ' Not to make too light of it, but you get the picture.'
  },
  {
    startTime: 3738.92,
    person: 'Woody',
    text: " So here's the thing though, is that often when we do the Russell Acuff thing, where he says the resolve, which I think is solving for the symptom, we end up hiding the problem and not really revealing the problem."
  },
  {
    startTime: 3752.8,
    person: 'Woody',
    text: ' So I think that we need to be very careful in that space.'
  },
  {
    startTime: 3755.88,
    person: 'Woody',
    text: ' So this is where my theme for today, symptoms and signals is, not every symptom warrants having a signal.'
  },
  {
    startTime: 3764.56,
    person: 'Woody',
    text: " So an example that I came up with is, you know, I once had a truck and the temperature gauge wasn't working well on it."
  },
  { startTime: 3771.42, person: 'Woody', text: " And so I didn't know it was overheating." },
  {
    startTime: 3773.88,
    person: 'Woody',
    text: ' And the only symptom I could notice is, do you smell something like hot, you know?'
  },
  {
    startTime: 3779.9,
    person: 'Woody',
    text: ' And by the time I pulled my truck over, the engine had enough damage that I needed to...'
  },
  { startTime: 3787.1, person: 'Woody', text: ' So I needed to refill the radiator.' },
  {
    startTime: 3789.06,
    person: 'Woody',
    text: ' So something was leaking and be able to get it to a repair shop and it had a warped head on it.'
  },
  {
    startTime: 3795,
    person: 'Woody',
    text: " So now I had to get the head remachined, where as if I had caught this earlier, I wouldn't have had this problem."
  },
  {
    startTime: 3801.42,
    person: 'Woody',
    text: ' So the point is the symptom was not being revealed to me through the temperature gauge, which was broken.'
  },
  { startTime: 3808.76, person: 'Woody', text: ' Okay.' },
  { startTime: 3809.46, person: 'Woody', text: " So that's been put..." },
  {
    startTime: 3811.6,
    person: 'Woody',
    text: " I'm sure they didn't have those in the first cars."
  },
  {
    startTime: 3814.26,
    person: 'Woody',
    text: ' The first people who drove cars, if the engine was overheating, they were paying attention.'
  },
  {
    startTime: 3819.06,
    person: 'Woody',
    text: ' They could see steam coming out of the radiator because they could see the radiator.'
  },
  {
    startTime: 3822.36,
    person: 'Woody',
    text: " It probably wasn't even under a hood if it had a radiator."
  },
  {
    startTime: 3825.72,
    person: 'Woody',
    text: " Anyways, the point I'm making is that these were very sophisticated, mechanically minded people."
  },
  {
    startTime: 3831.34,
    person: 'Woody',
    text: ' And most people driving cars nowadays, you know, maybe they know how to change a tyre.'
  },
  {
    startTime: 3836.68,
    person: 'Woody',
    text: " Much of the stuff that's in the car, we don't work on ourselves anymore."
  },
  { startTime: 3840.36, person: 'Woody', text: ' To get to the point, I want an indicator.' },
  {
    startTime: 3844.94,
    person: 'Woody',
    text: " So the indicator in most cars is like a little gauge and sometimes there's a flashing red light."
  },
  { startTime: 3850.92, person: 'Woody', text: ' But those are indicators you need to look at.' },
  {
    startTime: 3852.96,
    person: 'Woody',
    text: ' What if you could have also an audible indicator?'
  },
  { startTime: 3855.62, person: 'Woody', text: ' And these are available.' },
  { startTime: 3856.5, person: 'Woody', text: ' You can buy them from companies.' },
  { startTime: 3857.92, person: 'Woody', text: ' I looked it up online.' },
  {
    startTime: 3859.18,
    person: 'Woody',
    text: ' You can buy a thing, you attach it to your system.'
  },
  {
    startTime: 3861.4,
    person: 'Woody',
    text: ' If the car is starting to get out of the range that you feel is appropriate, it will start making a loud buzzing sound.'
  },
  { startTime: 3868.42, person: 'Woody', text: " That's a signal." },
  {
    startTime: 3869.82,
    person: 'Woody',
    text: " So all I'm saying is all these things we talked about so far that are symptoms, I'd like to kind of evaluate, would I like to have a signal that alerts me to this?"
  },
  { startTime: 3880.78, person: 'Woody', text: ' That I have a problem I better investigate.' },
  { startTime: 3883.58, person: 'Woody', text: " It doesn't mean I have something to solve." },
  { startTime: 3885.8, person: 'Woody', text: ' Like smelling, going, boy, that smells hot.' },
  { startTime: 3888.2, person: 'Woody', text: ' It may just be as a symptom of a car.' },
  {
    startTime: 3891.68,
    person: 'Woody',
    text: " It may just be that, just an example, a bird started building a nest inside your engine compartment and they're long gone."
  },
  {
    startTime: 3899.76,
    person: 'Woody',
    text: ' And now the nest is starting to heat up and smell.'
  },
  { startTime: 3902.7, person: 'Woody', text: ' So yeah, okay, I can go out there, dig it out.' },
  { startTime: 3905.3, person: 'Woody', text: " The car isn't being damaged." },
  { startTime: 3907.46, person: 'Woody', text: ' I actually had that happen once.' },
  {
    startTime: 3909.5,
    person: 'Woody',
    text: " So the car isn't being damaged and we've gotten rid of the problem."
  },
  {
    startTime: 3913.06,
    person: 'Woody',
    text: " I would never, if it was a live bird in there, I'd be really concerned."
  },
  { startTime: 3916.48, person: 'Woody', text: ' But anyways, you get the point.' },
  {
    startTime: 3918.6,
    person: 'Woody',
    text: " So I would kind of say that we need to be able to differentiate which of these symptoms are something that's necessary for us to pay attention to right now."
  },
  {
    startTime: 3927.96,
    person: 'Woody',
    text: ' And one of those things that I started taking as symptoms years ago is what Ken Beck and maybe Martin Fowler had talked about in their refactoring book or one of those books about code smells.'
  },
  { startTime: 3941.08, person: 'Woody', text: ' So I take code smells as a symptom.' },
  {
    startTime: 3944.66,
    person: 'Woody',
    text: " If you don't know what a code smell is, a code smell is something we can look at our code and see an indication that we might have a problem."
  },
  { startTime: 3952.06, person: 'Woody', text: ' An example of a code smell is a long method.' },
  {
    startTime: 3955.08,
    person: 'Woody',
    text: ' Another example of a code smell is, let me think of a really easy one, is a lot of ifs in the code.'
  },
  {
    startTime: 3963,
    person: 'Woody',
    text: ' So convoluted, deeply nested loops and if statements and so on.'
  },
  { startTime: 3969.38, person: 'Woody', text: " So if we have nested ifs, that's a code smell." },
  {
    startTime: 3972.6,
    person: 'Woody',
    text: ' Now, some people will take it to extreme, which I happen to do that.'
  },
  {
    startTime: 3976.32,
    person: 'Woody',
    text: " And if we have more than one or two ifs in a method, we're probably trying to do too much work."
  },
  { startTime: 3981.04, person: 'Woody', text: ' So what is it a smell of?' },
  {
    startTime: 3982.54,
    person: 'Woody',
    text: " It's a smell that maybe we're not paying attention to the single responsibility principle or having our code nicely divided up."
  },
  { startTime: 3991.6, person: 'Woody', text: " There's lots of ways we could." },
  {
    startTime: 3993.28,
    person: 'Woody',
    text: ' This might be an indication of a problem and it might not be.'
  },
  { startTime: 3997.06, person: 'Woody', text: ' So code smells.' },
  {
    startTime: 3998.44,
    person: 'Woody',
    text: ' And then I would say now we also could think of process smells.'
  },
  {
    startTime: 4001.88,
    person: 'Woody',
    text: ' So a lot of these things that we have here could be process smells.'
  },
  {
    startTime: 4005.32,
    person: 'Woody',
    text: " For example, if we find we're context switching quite a bit, what's the underlying problem that's causing?"
  },
  {
    startTime: 4012.04,
    person: 'Woody',
    text: " I'm really looking to go into the underlying problems here right now."
  },
  {
    startTime: 4015.6,
    person: 'Woody',
    text: " I'm just saying, well, if we're getting a lot of context switching throughout the day, how can we make that a signal?"
  },
  {
    startTime: 4022.26,
    person: 'Woody',
    text: ' If we see that as being underlying, there might be a problem to this that we want to be alerted to.'
  },
  {
    startTime: 4029.2,
    person: 'Woody',
    text: ' I did a study once at a company where we were noticing what we came to call in the industry thrashing.'
  },
  {
    startTime: 4037.34,
    person: 'Woody',
    text: " So thrashing on a hard drive that's fragmented, you can hear the hard drive moving a lot."
  },
  { startTime: 4042.9, person: 'Woody', text: ' Nobody has hard drives anymore.' },
  { startTime: 4044.82, person: 'Woody', text: ' But you hear that hard drive that moved.' },
  { startTime: 4048.08, person: 'Woody', text: " What's that?" },
  { startTime: 4048.94, person: 'Karol', text: ' Not that kind of drives.' },
  { startTime: 4050.54, person: 'Woody', text: ' Yeah.' },
  {
    startTime: 4050.92,
    person: 'Woody',
    text: " So a hard drive that had a little physical head that would move across a disc, if it was thrashing, it meant it was trying to get the information it needs because it'd been fragmented all across this hard drive."
  },
  {
    startTime: 4064.22,
    person: 'Woody',
    text: ' So we would want to get rid of that fragment, defrag our hard drive.'
  },
  {
    startTime: 4070.34,
    person: 'Woody',
    text: ' And so this thing we were using in the industry for people as well.'
  },
  {
    startTime: 4074.92,
    person: 'Woody',
    text: " So if we notice that people are working on five different things and they're switching between them, they're multitasking, they're getting context switching."
  },
  {
    startTime: 4083.3,
    person: 'Woody',
    text: ' The context switching often happens when another teammate comes over and says, hey, I was assigned to work on this.'
  },
  { startTime: 4088.56, person: 'Woody', text: " I don't know anything about it." },
  { startTime: 4089.56, person: 'Woody', text: ' Can you help me?' },
  {
    startTime: 4090.52,
    person: 'Woody',
    text: " Well, now I can't get my work done because I've got to help you get your work done."
  },
  {
    startTime: 4094.42,
    person: 'Woody',
    text: " And now that's causing a conflict in a way because I know I'm going to be, my performance going to be judged."
  },
  { startTime: 4100.8, person: 'Woody', text: ' Did I get my work done today?' },
  {
    startTime: 4102.8,
    person: 'Woody',
    text: " And so we are, it's kind of distracting us from doing teamwork."
  },
  {
    startTime: 4106.1,
    person: 'Woody',
    text: " But the point I'm making is if we believe that the multitasking and the context switching are indications of a problem, I want to be alerted to that."
  },
  {
    startTime: 4118.06,
    person: 'Woody',
    text: " So if we have a system, let's just say daily, we have a meeting like in Scrum, they used to have a daily meeting."
  },
  {
    startTime: 4124.359,
    person: 'Woody',
    text: ' And one of the questions maybe the manager or the Scrum Master would ask is, is anybody blocked on anything?'
  },
  {
    startTime: 4129.899,
    person: 'Woody',
    text: " Well, that's an indication that we're not paying attention to stuff in real time."
  },
  {
    startTime: 4134.8,
    person: 'Woody',
    text: " So I would say that's a smell or that's a process smell or a symptom of an underlying problem."
  },
  {
    startTime: 4140.42,
    person: 'Woody',
    text: ' The underlying problem is probably has to do with communication on all of these things.'
  },
  {
    startTime: 4145.84,
    person: 'Woody',
    text: ' So when I see these things, I want to get an alert.'
  },
  {
    startTime: 4148.68,
    person: 'Woody',
    text: " So what I used to do as a consultant, I still do this, is if I hear a word more than a few times come up in the conversations I'm having in the meetings or gatherings I'm having with the people I'm supposed to be helping, I will make a note of it and start keeping tick marks to notice how often does that word come up."
  },
  {
    startTime: 4167.76,
    person: 'Woody',
    text: " So if it comes up five times, maybe it's not important."
  },
  {
    startTime: 4171.18,
    person: 'Woody',
    text: " If it comes up 10 times, maybe it's getting important."
  },
  {
    startTime: 4174.319,
    person: 'Woody',
    text: ' If I see it a hundred times during the day in my different conversations, I want that to really be a bold indication.'
  },
  {
    startTime: 4180.8,
    person: 'Woody',
    text: " So if I've got my little piece of paper and I've got these words and a couple of them have a hundred tick marks, that's telling me I want to, that's an alert."
  },
  { startTime: 4188.42, person: 'Woody', text: " That's a signal." },
  { startTime: 4189.52, person: 'Woody', text: " That's what I'm looking for here." },
  {
    startTime: 4190.979,
    person: 'Woody',
    text: " So that's why I call this symptoms and signals."
  },
  {
    startTime: 4193.22,
    person: 'Woody',
    text: " Some of these symptoms, maybe there's an underlying problem, but it's not critical."
  },
  {
    startTime: 4199.38,
    person: 'Woody',
    text: ' But boy, if we have, if I hear meetings, I have one place that I did this and I had a couple of hundred software developers that were involved in the whole thing we were doing and I heard meetings come up over and over.'
  },
  {
    startTime: 4210.5,
    person: 'Woody',
    text: ' So then we had a bit of a retrospective to talk about meetings and it turned out most of the developers and some of these were highly trained, very highly paid, you know, PhD level people that owned patents and stuff.'
  },
  {
    startTime: 4223.02,
    person: 'Woody',
    text: " You know, these aren't people that are just, you know, like my level, just writing code all day long."
  },
  { startTime: 4228.36, person: 'Woody', text: " They're inventing important things." },
  {
    startTime: 4231.16,
    person: 'Woody',
    text: ' Some of them were in meetings up to six hours a day, four to six hours was typical.'
  },
  {
    startTime: 4236.54,
    person: 'Woody',
    text: ' And so my question is going to be, when do you get time to actually write code?'
  },
  {
    startTime: 4241.32,
    person: 'Woody',
    text: " If that's what your job is and they just say, well, yeah, that's a big problem."
  },
  {
    startTime: 4244.8,
    person: 'Woody',
    text: " So the issue here isn't how good the meetings are."
  },
  { startTime: 4249.42, person: 'Woody', text: ' The issue is why are we having the meetings?' },
  { startTime: 4252.68, person: 'Woody', text: ' What is the use?' },
  { startTime: 4253.52, person: 'Woody', text: ' So we need to know the purpose of the meetings.' },
  {
    startTime: 4255.64,
    person: 'Woody',
    text: " And it really, in this case, a lot of times these people were needed in meetings because the people who were needing to make decisions didn't have the knowledge that was needed to make those decisions."
  },
  {
    startTime: 4266.74,
    person: 'Woody',
    text: ' So they would call, there was actually one guy on one team that his direct manager and the vice president above him would come in throughout the day and say, oh, we just need to borrow him for a few minutes.'
  },
  {
    startTime: 4279.86,
    person: 'Woody',
    text: ' Well, a few minutes usually meant one or two hours.'
  },
  {
    startTime: 4283.96,
    person: 'Woody',
    text: " And by the time they come back, here's another symptom."
  },
  {
    startTime: 4287.1,
    person: 'Woody',
    text: " The person that I need to ask a question to isn't available."
  },
  { startTime: 4291.08, person: 'Woody', text: " So that's the dependency." },
  {
    startTime: 4293.5,
    person: 'Woody',
    text: " So when we're waiting for dependency, that's a symptom that we don't have a communication method that allows us to not have to have that waiting."
  },
  { startTime: 4302.72, person: 'Woody', text: ' So this is all this is really about.' },
  {
    startTime: 4305.5,
    person: 'Woody',
    text: ' It started for me when I was trying to write a guideline for myself on how to make it clear to some management folks, and this was just in the last year, that some management folks that the things they are seeing are things we need to be dealing with.'
  },
  {
    startTime: 4320.62,
    person: 'Woody',
    text: " And they're trying to solve for the symptoms instead of underlying problems."
  },
  {
    startTime: 4325.44,
    person: 'Woody',
    text: " And I was using chat GPT to look through all the materials I've been collecting."
  },
  { startTime: 4330.02, person: 'Woody', text: " And it came up with, it's about queuing." },
  { startTime: 4332.16, person: 'Woody', text: ' It said, well, the waiting is a signal.' },
  {
    startTime: 4334.16,
    person: 'Woody',
    text: ' The waiting is a signal that we need to deal with whatever it was.'
  },
  { startTime: 4337.3, person: 'Woody', text: " I thought, oh, that's the terminology I want." },
  { startTime: 4339.76, person: 'Woody', text: " I don't want just to have the waiting." },
  {
    startTime: 4341.6,
    person: 'Woody',
    text: ' And then we deal with, instead of dealing with the, one of the symptoms of waiting.'
  },
  {
    startTime: 4346.38,
    person: 'Woody',
    text: " And one of those is, I can't work on this because I'm waiting to get an answer back from someone else."
  },
  { startTime: 4352.72, person: 'Woody', text: ' So what do I do in the meantime?' },
  { startTime: 4354.58, person: 'Woody', text: " That's a symptom." },
  {
    startTime: 4356.1,
    person: 'Woody',
    text: ' Money managers will say, always have some other less important thing to work on.'
  },
  { startTime: 4360.68, person: 'Woody', text: " So when you're waiting, you work on that." },
  {
    startTime: 4362.56,
    person: 'Woody',
    text: " This is, we introduce inventory to deal with the waiting, the busy, the queuing, because we're not busy enough."
  },
  {
    startTime: 4371.72,
    person: 'Woody',
    text: " So we've dealt with the symptom rather than the problem."
  },
  {
    startTime: 4375.58,
    person: 'Woody',
    text: " The problem is we're not getting answers to questions in a timely manner."
  },
  {
    startTime: 4379.38,
    person: 'Woody',
    text: ' Now that could go with other things than waiting with questions.'
  },
  {
    startTime: 4382.14,
    person: 'Woody',
    text: ' It could be, I finished my work and now I, you know, I put in a poll request, right?'
  },
  {
    startTime: 4387.38,
    person: 'Woody',
    text: " And so now I'm waiting for someone to review the code before I can either send it to the testers or work on it more myself."
  },
  { startTime: 4395.34, person: 'Woody', text: ' Well, these are symptoms.' },
  {
    startTime: 4396.7,
    person: 'Woody',
    text: " I think any company that's using PRs is that's a symptom I automatically will look for."
  },
  {
    startTime: 4402.76,
    person: 'Woody',
    text: ' Why do we think you, why do we think PRs are useful?'
  },
  {
    startTime: 4406.14,
    person: 'Woody',
    text: ' And usually because managers believe that dividing the work up and having people work solo is useful.'
  },
  { startTime: 4412.5, person: 'Woody', text: ' Why do they believe that?' },
  {
    startTime: 4413.86,
    person: 'Woody',
    text: " I don't know why they believe that, but that's an extremely common belief that we need to separate the people doing the work so they can get their work done."
  },
  {
    startTime: 4421.24,
    person: 'Woody',
    text: " I would suggest there's, this is a systemic problem."
  },
  { startTime: 4425.14, person: 'Woody', text: " It's a system problem." },
  { startTime: 4427.44, person: 'Woody', text: " Anyways, I've been rambling on forever." },
  {
    startTime: 4429.04,
    person: 'Woody',
    text: " I hope that my, our listeners aren't getting too bored, but so this is really the topic."
  },
  { startTime: 4435.3, person: 'Woody', text: " I'm not talking about what are the solutions." },
  {
    startTime: 4437.98,
    person: 'Woody',
    text: " I'm talking about, are we, do we have a way to really alert ourselves that we have a problem instead of just, you know, that the symptoms are not the problem and that we need to pay attention."
  },
  {
    startTime: 4447.84,
    person: 'Woody',
    text: ' When we see the combination of symptoms, such as I brought up the first one, context switching, workflow interruptions, distractions and multitasking, those kind of group together.'
  },
  {
    startTime: 4459.32,
    person: 'Woody',
    text: " And when we see those coming up in these kinds of exercises, I'm going, yeah, we, this should be a signal to us that we have a serious problem."
  },
  {
    startTime: 4468.76,
    person: 'Karol',
    text: " And then those people that experienced those symptoms get in trouble because they're not delivering."
  },
  { startTime: 4476.64, person: 'Karol', text: " That's right." },
  {
    startTime: 4477.06,
    person: 'Karol',
    text: " Even though they're raising that these things happen and nobody's digging into the problem and they, the problem is not resolved."
  },
  {
    startTime: 4483.8,
    person: 'Woody',
    text: " So this, in our space, I've seen advertisements, we need a developer who's good at multitasking."
  },
  {
    startTime: 4491.82,
    person: 'Woody',
    text: " So we're actually advertising to have somebody to fulfil the role of working in the most ineffective way possible that we can multitask."
  },
  { startTime: 4500.8, person: 'Woody', text: ' We cannot multitask.' },
  { startTime: 4502.3, person: 'Woody', text: " This is a, there's enough research." },
  {
    startTime: 4504.92,
    person: 'Woody',
    text: " I said that pretty boldly, but, you know, read Kahneman and all these people, you can find references to research that shows, no, we can't actually multitask."
  },
  {
    startTime: 4513.82,
    person: 'Woody',
    text: " So there's a Zygarnik effect and other things like this."
  },
  {
    startTime: 4517.42,
    person: 'Woody',
    text: ' Our brains work on stuff in a way different than we wish it would.'
  },
  { startTime: 4523.8, person: 'Woody', text: ' We are single threaded.' },
  { startTime: 4526.08, person: 'Woody', text: ' We are single threaded.' },
  {
    startTime: 4527.58,
    person: 'Woody',
    text: " So if a boss comes in and says, here's a priority, got to stop working on that and get this other thing done first."
  },
  {
    startTime: 4534.62,
    person: 'Woody',
    text: " We can set that thing aside, but our brain won't stop working on it."
  },
  {
    startTime: 4538.9,
    person: 'Woody',
    text: " We're now increasing the cognitive load that we have individually."
  },
  {
    startTime: 4544.16,
    person: 'Woody',
    text: ' And this is back to that supposed Drucker quote.'
  },
  {
    startTime: 4548.16,
    person: 'Woody',
    text: ' Much of what we consider to be management is just making it hard for people to work.'
  },
  {
    startTime: 4554.42,
    person: 'Woody',
    text: ' And so I know for myself, my dad used to say this and he was an engineer and he was quite good troubleshooter and he worked in the phone company in the US, you know, in those days that a lot of brilliant people, you know, were in that space.'
  },
  {
    startTime: 4567.88,
    person: 'Woody',
    text: " That's where a lot of things came from in our world, like the C programming language and stuff."
  },
  { startTime: 4572.46, person: 'Woody', text: " So he wasn't a programmer." },
  {
    startTime: 4573.7,
    person: 'Woody',
    text: ' He was an electronics and electrical engineer, but he would say something effective.'
  },
  {
    startTime: 4579.98,
    person: 'Woody',
    text: ' Let me see if I can form the way he would say it.'
  },
  {
    startTime: 4582.46,
    person: 'Woody',
    text: " First of all, there's a thousand right ways to do anything."
  },
  { startTime: 4586.08, person: 'Woody', text: " That's one of the things he would say." },
  { startTime: 4587.34, person: 'Woody', text: " That's true." },
  {
    startTime: 4587.54,
    person: 'Woody',
    text: ' And so if you could bring me back to our topic and maybe the exact quote I wanted to use was there.'
  },
  {
    startTime: 4596.38,
    person: 'Woody',
    text: " When we're multitasking, we are overloading our brain."
  },
  { startTime: 4602.28, person: 'Woody', text: ' And my father would say this sometimes.' },
  {
    startTime: 4604.34,
    person: 'Woody',
    text: " So we're deep in something, we're not coming up with the solution."
  },
  { startTime: 4608.26, person: 'Woody', text: ' He would say, we need to sleep on this.' },
  {
    startTime: 4611.4,
    person: 'Woody',
    text: " And that's an observation that probably goes back way, you know, probably goes back thousands of years, is that tomorrow the solution will come to us."
  },
  { startTime: 4620.62, person: 'Woody', text: " Today, we're done." },
  {
    startTime: 4622.8,
    person: 'Woody',
    text: ' So, you know, our brain is not going to come up with a solution.'
  },
  { startTime: 4626.2, person: 'Woody', text: " There's too much overloading us." },
  {
    startTime: 4629.6,
    person: 'Woody',
    text: " And I've watched teams try to come up with a solution for hours when we go take a break, take a walk, maybe go get lunch."
  },
  {
    startTime: 4638.76,
    person: 'Woody',
    text: ' We come back and somebody goes, wait, I know what to do.'
  },
  {
    startTime: 4640.86,
    person: 'Woody',
    text: ' So there was a guy who wrote a book called The Art of Thought 100 years ago.'
  },
  { startTime: 4646.94, person: 'Woody', text: ' I think it was almost exactly 100 years ago.' },
  { startTime: 4649.66, person: 'Woody', text: " The guy's name was Graham Wallace." },
  { startTime: 4651.82, person: 'Woody', text: ' Graham Wallace, W-A-L-L-A-C-E.' },
  {
    startTime: 4654.92,
    person: 'Woody',
    text: " And he said there's like four phases to thinking."
  },
  {
    startTime: 4657.7,
    person: 'Woody',
    text: " One is the first phase is, I think it's investigation."
  },
  { startTime: 4663.88, person: 'Woody', text: ' I might get these wrong.' },
  { startTime: 4664.92, person: 'Woody', text: " You've got the investigation." },
  {
    startTime: 4666.16,
    person: 'Woody',
    text: ' You get deep in the problem space and you start thinking about it.'
  },
  { startTime: 4668.82, person: 'Woody', text: ' You do some research.' },
  { startTime: 4670.4, person: 'Woody', text: ' You look some things up.' },
  { startTime: 4671.3, person: 'Woody', text: ' The next one is incubation.' },
  { startTime: 4673.5, person: 'Woody', text: ' You leave it alone.' },
  { startTime: 4675.22, person: 'Woody', text: ' And you let your, you go to the opera.' },
  {
    startTime: 4676.96,
    person: 'Woody',
    text: " It's one of the, I think the examples he gave, but who goes to the opera anymore."
  },
  { startTime: 4680.1, person: 'Woody', text: ' But, you know, you go and do something else.' },
  { startTime: 4681.92, person: 'Karol', text: ' I know one person.' },
  { startTime: 4683.32, person: 'Woody', text: ' Okay, there you go.' },
  {
    startTime: 4684,
    person: 'Woody',
    text: " And I love going to, I haven't been to an opera in years, but when I was a kid, you know, in school and stuff, I'm not putting it down."
  },
  {
    startTime: 4689.66,
    person: 'Woody',
    text: " I think it's great stuff, but you don't see as much of this anymore."
  },
  { startTime: 4693.1, person: 'Woody', text: ' Anyways, so you have incubation.' },
  { startTime: 4694.9, person: 'Woody', text: ' We leave it alone and go do something else.' },
  { startTime: 4696.8, person: 'Woody', text: ' I like to go walking.' },
  { startTime: 4698, person: 'Woody', text: ' I like to go walking.' },
  {
    startTime: 4699.84,
    person: 'Woody',
    text: ' And the most common thing I hear is take a shower.'
  },
  { startTime: 4703.26, person: 'Woody', text: ' Your best ideas come to you in a shower.' },
  {
    startTime: 4705.42,
    person: 'Woody',
    text: " And another one that I often hear is as I'm falling asleep, my brain activates."
  },
  { startTime: 4710.04, person: 'Woody', text: ' It goes, oh, wait a second.' },
  { startTime: 4710.88, person: 'Woody', text: ' I know what.' },
  {
    startTime: 4711.58,
    person: 'Woody',
    text: " And I've had it for myself, both that and I wake up in the middle of the night and go, oh, I know what to do."
  },
  {
    startTime: 4717,
    person: 'Woody',
    text: ' And now I got to where I would keep a notepad by my bed.'
  },
  {
    startTime: 4720.8,
    person: 'Woody',
    text: ' And nowadays I just keep my phone and I could speak into it.'
  },
  { startTime: 4723.64, person: 'Woody', text: ' Oh, wait, I think this might be the solution.' },
  {
    startTime: 4725.4,
    person: 'Woody',
    text: ' And the next morning I kind of find out maybe I was in a dream state and it was wrong.'
  },
  { startTime: 4730.26, person: 'Woody', text: " But that's another time." },
  { startTime: 4731.98, person: 'Woody', text: ' So those are common things.' },
  {
    startTime: 4733.86,
    person: 'Karol',
    text: " You know, these are common switches to switch the context we're in so that we can reroute our way of thinking."
  },
  {
    startTime: 4743.5,
    person: 'Karol',
    text: ' And I had that conversation, oh, so long ago with Mark Richards over exactly this topic of just not being able to solve a problem.'
  },
  { startTime: 4753.96, person: 'Karol', text: " And there's just switching your context." },
  { startTime: 4755.96, person: 'Karol', text: ' So it comes to you.' },
  {
    startTime: 4757.3,
    person: 'Karol',
    text: " I remember Mark saying that at times he doesn't take a shower in the morning just to take it later in the day when he stumbles into a problem, just to switch that context for himself for a minute, go to a shower."
  },
  {
    startTime: 4769.8,
    person: 'Karol',
    text: " And then it comes to him to figure out, oh, this is how it's supposed to be done."
  },
  { startTime: 4774.74, person: 'Karol', text: " Because we're taking a break from that focus." },
  { startTime: 4779.74, person: 'Karol', text: " That's right." },
  {
    startTime: 4780.34,
    person: 'Karol',
    text: " And in terms of multitasking, I know that my wife would say I'm often multitasking."
  },
  { startTime: 4788.86, person: 'Karol', text: ' And she obviously knows that this is not true.' },
  {
    startTime: 4792.2,
    person: 'Karol',
    text: ' But what I do with my ADHD is that I often play games and watch a series, TV series at the same time.'
  },
  { startTime: 4801.06, person: 'Karol', text: ' Yes, yes.' },
  { startTime: 4801.56, person: 'Karol', text: " That's not multitasking." },
  { startTime: 4802.74, person: 'Karol', text: " That's my brain just going numb." },
  {
    startTime: 4805.08,
    person: 'Woody',
    text: ' Well, so you bring up a really good point here, though.'
  },
  {
    startTime: 4807.46,
    person: 'Woody',
    text: " Now, there's techniques for staying awake during a meeting."
  },
  {
    startTime: 4811.4,
    person: 'Woody',
    text: " So I have to learn some of these techniques because, you know, I'm getting bored to death and I'm thinking about other stuff."
  },
  {
    startTime: 4817.56,
    person: 'Woody',
    text: " And one common one is to be doodling, doodling while you're doing."
  },
  { startTime: 4821.46, person: 'Woody', text: ' I had my own mechanism.' },
  {
    startTime: 4822.54,
    person: 'Woody',
    text: ' I had long lists of things I was trying to memorise.'
  },
  {
    startTime: 4825.14,
    person: 'Woody',
    text: ' And I would write them out and I would just copy them out during the meeting.'
  },
  {
    startTime: 4828.58,
    person: 'Woody',
    text: ' OK, it looked like I was participating by taking notes or something.'
  },
  {
    startTime: 4831.88,
    person: 'Woody',
    text: ' But in reality, I was just trying to keep myself alert.'
  },
  { startTime: 4835.22, person: 'Woody', text: ' And there are other ways to do this, too.' },
  {
    startTime: 4838.56,
    person: 'Karol',
    text: ' One of mine is, for example, just playing a game on the phone, literally.'
  },
  {
    startTime: 4846.72,
    person: 'Karol',
    text: " To stay awake during the meeting where I had to be, let's say, attentive, not exactly paying that attention to because the topic right now is not the topic I'm supposed to be even thinking about because it doesn't relate to me anyhow."
  },
  {
    startTime: 4861.64,
    person: 'Karol',
    text: " But I need to pay attention enough to be able to switch to the meeting when there's that topic that I'm interested in and participate in it."
  },
  { startTime: 4870.58, person: 'Karol', text: " So I'm basically to keep still sharp." },
  {
    startTime: 4872.88,
    person: 'Karol',
    text: " I'm literally playing games on my phone quite often."
  },
  { startTime: 4876.06, person: 'Karol', text: ' And that happens a lot in different meetings.' },
  {
    startTime: 4879.92,
    person: 'Karol',
    text: " In consulting, that's a regular thing that those meetings I get invited to, they span for two hours and I'm literally needed for 15 minutes."
  },
  {
    startTime: 4888.98,
    person: 'Woody',
    text: ' So we can keep our our brains can be kept active in dialogue.'
  },
  { startTime: 4895.02, person: 'Woody', text: ' This is maybe another topic for another day.' },
  {
    startTime: 4897.5,
    person: 'Woody',
    text: ' I was reading a book from David Graber called The Dawn of Everything.'
  },
  {
    startTime: 4902.84,
    person: 'Woody',
    text: ' And there was one little chunk in there where he talks about the window of consciousness.'
  },
  {
    startTime: 4907.4,
    person: 'Woody',
    text: " And he's saying the window of consciousness is seven seconds."
  },
  { startTime: 4910, person: 'Woody', text: " I'm going, how do we know that?" },
  {
    startTime: 4912.06,
    person: 'Woody',
    text: ' And so then he says, and this means the time we were aware of ourselves and focussing on something at the same time.'
  },
  {
    startTime: 4918.2,
    person: 'Woody',
    text: " I think that's sort of what it is aware, but I'd have to look it up."
  },
  {
    startTime: 4921.8,
    person: 'Woody',
    text: ' OK, so the window of consciousness, but it can be extended in dialogue.'
  },
  {
    startTime: 4927.52,
    person: 'Woody',
    text: ' It can be extended in conversation for even more than several hours.'
  },
  { startTime: 4932.52, person: 'Woody', text: ' Well, I wanted to find the research on that.' },
  {
    startTime: 4934.28,
    person: 'Woody',
    text: " And I've actually tracked some of that research down."
  },
  {
    startTime: 4936.78,
    person: 'Woody',
    text: ' I can quickly try to let me let me quickly try to find that just so I can mention those things, because I believe that if we look down here, I think is useful maybe for people.'
  },
  {
    startTime: 4950.86,
    person: 'Woody',
    text: " So I'm opening up a different screen here and let's see."
  },
  { startTime: 4956.84, person: 'Woody', text: ' Give me just a moment.' },
  { startTime: 4958.32, person: 'Woody', text: ' Window of consciousness.' },
  { startTime: 4959.28, person: 'Woody', text: ' Yeah.' },
  { startTime: 4959.76, person: 'Woody', text: " So I've got some notes that I took on this." },
  {
    startTime: 4961.54,
    person: 'Woody',
    text: ' So the essential thing that he says is something to the order of this.'
  },
  {
    startTime: 4968.22,
    person: 'Woody',
    text: " He states the following when we are capable of self-awareness, it's usually for very brief periods of time."
  },
  {
    startTime: 4974.46,
    person: 'Woody',
    text: ' The window of consciousness during which we can hold a thought or work out a problem.'
  },
  {
    startTime: 4978.56,
    person: 'Woody',
    text: ' It tends to be on average open on average for roughly seven seconds.'
  },
  { startTime: 4984.2, person: 'Woody', text: ' Well, man, is there research that shows us that?' },
  { startTime: 4986.8, person: 'Woody', text: " That's what I wanted to know." },
  {
    startTime: 4988.04,
    person: 'Woody',
    text: " So what neuroscientists and it must be said, most contemporary philosophers almost never noticed, however, is that the great exception to this is when we're talking to someone else in conversation."
  },
  {
    startTime: 4998.32,
    person: 'Woody',
    text: ' We can hold thoughts and reflect on problems sometimes for hours on end.'
  },
  { startTime: 5003.2, person: 'Woody', text: " Now, I do not know if that's true." },
  {
    startTime: 5006.72,
    person: 'Woody',
    text: ' All I know with these kinds of things, these kinds of facts.'
  },
  {
    startTime: 5009.92,
    person: 'Woody',
    text: ' So I actually looked into find research for this and I found at least three or four different researchers that support this.'
  },
  {
    startTime: 5016.76,
    person: 'Woody',
    text: " And so that's I'm just stating that to get to the point."
  },
  {
    startTime: 5020.8,
    person: 'Woody',
    text: ' I use these kinds of things to ask myself questions like this.'
  },
  { startTime: 5024.06, person: 'Woody', text: " What if that's true?" },
  { startTime: 5026.32, person: 'Woody', text: ' So this went down.' },
  {
    startTime: 5027.32,
    person: 'Woody',
    text: " This caused me to go down a path where I've now read three or four books."
  },
  { startTime: 5030.28, person: 'Woody', text: ' One is called that I read in 2022.' },
  {
    startTime: 5032.66,
    person: 'Woody',
    text: ' One that I read is called Dialogue and the Art of Thinking Together.'
  },
  { startTime: 5037.3, person: 'Woody', text: ' Well, that was a really powerful connection.' },
  { startTime: 5040.7, person: 'Woody', text: " I knew I'd read the book." },
  {
    startTime: 5041.94,
    person: 'Woody',
    text: ' And so as I read this other book from David Graeber, it was like, oh, wait a second.'
  },
  { startTime: 5045.64, person: 'Woody', text: ' That reminds me of this other book I read.' },
  {
    startTime: 5047.28,
    person: 'Woody',
    text: " And now I'm doing a deep dive into this book on dialogue."
  },
  {
    startTime: 5051.38,
    person: 'Woody',
    text: ' Connected with that is also the idea of dialogue mapping, which comes from a guy named Jeff Conkle, I think, that I learned like 20 years ago.'
  },
  { startTime: 5059.08, person: 'Woody', text: ' How do we capture these things?' },
  {
    startTime: 5061.36,
    person: 'Woody',
    text: ' And another thing is from Nancy Klein, who has a book called something like this.'
  },
  {
    startTime: 5071.62,
    person: 'Woody',
    text: ' The Most Important Promise I Will Not Interrupt.'
  },
  {
    startTime: 5076.42,
    person: 'Woody',
    text: ' And so what she seems to think is that we can help people think better by being really good listeners.'
  },
  { startTime: 5084.2, person: 'Karol', text: " Oh, that's very good." },
  { startTime: 5085.34, person: 'Woody', text: ' She gave me an exercise I started doing.' },
  {
    startTime: 5088.52,
    person: 'Woody',
    text: ' I think I learned about this 20 years ago from her first book called Time to Think.'
  },
  {
    startTime: 5094.88,
    person: 'Woody',
    text: " And in that book, I think she suggests practise listening to someone else as if the very next thing they say will be the most important thing you'll ever hear."
  },
  { startTime: 5105.54, person: 'Woody', text: ' Well, that takes a lot of effort.' },
  { startTime: 5107.86, person: 'Karol', text: ' It does.' },
  { startTime: 5108.46, person: 'Karol', text: ' But on the other side of this coin.' },
  { startTime: 5112.04, person: 'Karol', text: ' Is the rubber ducky.' },
  { startTime: 5113.42, person: 'Karol', text: ' Sure.' },
  { startTime: 5114.38, person: 'Karol', text: ' The rubber ducky debugging method.' },
  { startTime: 5116, person: 'Karol', text: ' Brilliant.' },
  {
    startTime: 5117.08,
    person: 'Karol',
    text: ' Because this is exactly the art of listening or objectifying, anthropomorphising the duck as your listener.'
  },
  { startTime: 5124.56, person: 'Karol', text: " And you're just thinking." },
  { startTime: 5126.54, person: 'Woody', text: ' So you could play the role of the rubber ducky.' },
  { startTime: 5129.24, person: 'Woody', text: ' Yeah.' },
  {
    startTime: 5130.42,
    person: 'Woody',
    text: " But in a slightly more helpful way, the rubber ducky itself doesn't give us anything back."
  },
  {
    startTime: 5139.46,
    person: 'Woody',
    text: ' Now, in the book, The Most Important Promise I Will Not Interrupt.'
  },
  {
    startTime: 5145.26,
    person: 'Woody',
    text: " She says we shouldn't be spending our time thinking about what we're going to say when we're listening."
  },
  { startTime: 5153.1, person: 'Woody', text: ' So she gives an example here.' },
  {
    startTime: 5155.02,
    person: 'Woody',
    text: " Well, in the book, The Dialogue, The Art of Thinking Together, he quotes someone else saying, we're not listening."
  },
  { startTime: 5161.38, person: 'Woody', text: " We're reloading." },
  { startTime: 5163.76, person: 'Woody', text: " And I thought, well, that's a pretty good." },
  {
    startTime: 5166.02,
    person: 'Woody',
    text: " That's because we want to defend our position and we want to counter their position."
  },
  {
    startTime: 5170.78,
    person: 'Woody',
    text: " And the book that I'm talking about here, he's basically saying there's got to be this time where we're free to share ideas without count people countering them and shared it be open minded enough to hear every idea."
  },
  {
    startTime: 5184.3,
    person: 'Woody',
    text: " So in Nancy Klein's book, she's saying you can eventually you can ask a question like this."
  },
  { startTime: 5190.16, person: 'Woody', text: ' What more do you want to say about this?' },
  { startTime: 5194.46, person: 'Woody', text: " Or is there anything more you'd like to cover?" },
  { startTime: 5197.9, person: 'Karol', text: " That's that's very coaching like." },
  { startTime: 5200.36, person: 'Woody', text: " That's probably very coaching like." },
  {
    startTime: 5201.7,
    person: 'Woody',
    text: ' And I think her background is maybe I think she might be a Quaker.'
  },
  {
    startTime: 5205.8,
    person: 'Woody',
    text: ' So in the Quaker religion, you have this thing where each person gets to have their say.'
  },
  { startTime: 5210.14, person: 'Woody', text: " And I'm not real." },
  {
    startTime: 5211.62,
    person: 'Woody',
    text: " You know, I don't have a lot of knowledge about this."
  },
  { startTime: 5213.66, person: 'Woody', text: ' I could be getting it wrong.' },
  {
    startTime: 5214.98,
    person: 'Woody',
    text: ' Please, those of you out there know better maybe can let us know in the comments.'
  },
  {
    startTime: 5219.04,
    person: 'Woody',
    text: " But the basic idea is we're willing to hear what each person say."
  },
  {
    startTime: 5222.94,
    person: 'Woody',
    text: ' And what this comes down to is most ideas cannot be shared in a matter of a sentence.'
  },
  {
    startTime: 5228.8,
    person: 'Woody',
    text: " But what I've noticed in a lot of conversations, the sentence gets when when we finish the sentence, someone else pops in and wants to talk when I just I have another sentence to give into the conversation."
  },
  {
    startTime: 5241.7,
    person: 'Woody',
    text: ' I could I remember being on a panel once one of these, you know, discussion panels at a conference.'
  },
  {
    startTime: 5249.04,
    person: 'Woody',
    text: ' And I proposed a what I would call a rhetorical question.'
  },
  {
    startTime: 5253.46,
    person: 'Woody',
    text: ' And somebody else wanted to answer someone else.'
  },
  {
    startTime: 5255.86,
    person: 'Woody',
    text: " And I said, wait, wait, no, I'm saying this is something to contemplate."
  },
  { startTime: 5260.16, person: 'Woody', text: " I'm not asking this to get an answer." },
  { startTime: 5262.26, person: 'Woody', text: ' I want us to contemplate this.' },
  {
    startTime: 5264.98,
    person: 'Woody',
    text: ' So I do have someone I think is like a genius level person that will call me up sometimes.'
  },
  { startTime: 5270.68, person: 'Woody', text: ' And they will say this.' },
  {
    startTime: 5272.08,
    person: 'Woody',
    text: " I have something I want to talk to you about, but you don't need to listen."
  },
  { startTime: 5279.38, person: 'Woody', text: " And so I'm being their human rubber ducky." },
  { startTime: 5282.52, person: 'Woody', text: " That's exactly right." },
  {
    startTime: 5283.2,
    person: 'Woody',
    text: " And so I do listen, but I take it as my job is to keep making it easy for them to open the doors they're trying to open in their own path."
  },
  {
    startTime: 5293.96,
    person: 'Karol',
    text: ' I do the same with people and then enable other people to do exactly the same with me so that they come and treat me as a rubber ducky.'
  },
  {
    startTime: 5301.98,
    person: 'Karol',
    text: ' And I just go, yeah, OK, and what more, et cetera.'
  },
  {
    startTime: 5306.38,
    person: 'Karol',
    text: " And it is like, whew, that's really valuable in that sense, because that's just like really going to the root of the problem at times through that kind of, let's say, active listening."
  },
  {
    startTime: 5318.96,
    person: 'Karol',
    text: ' But before we jump in, since you mentioned dialogue and the art of thinking.'
  },
  { startTime: 5324.86, person: 'Woody', text: ' Yes.' },
  { startTime: 5325.68, person: 'Karol', text: ' Boom.' },
  { startTime: 5327, person: 'Woody', text: ' Yeah, yeah.' },
  { startTime: 5327.96, person: 'Karol', text: " There's a workshop tomorrow." },
  { startTime: 5329.58, person: 'Woody', text: ' Tomorrow on this.' },
  { startTime: 5330.56, person: 'Woody', text: " That's right." },
  { startTime: 5331.44, person: 'Woody', text: ' Now, I better check how many people.' },
  { startTime: 5333.74, person: 'Woody', text: ' I have only opened it up to 50 people.' },
  { startTime: 5335.96, person: 'Woody', text: " There's seven spots left or eight." },
  { startTime: 5338.62, person: 'Woody', text: ' I will open it out to more spots right now.' },
  { startTime: 5341.28, person: 'Karol', text: " No, there's still a few spots left." },
  { startTime: 5343.2, person: 'Karol', text: " Don't worry, Woody." },
  { startTime: 5344.44, person: 'Woody', text: ' I do have a waiting list on it.' },
  {
    startTime: 5350.74,
    person: 'Woody',
    text: " So if you get onto the waiting list, I'll open up more spots for you."
  },
  { startTime: 5354.76, person: 'Woody', text: " So I'm going to argue this." },
  {
    startTime: 5356.4,
    person: 'Woody',
    text: ' These sessions are not for me to teach other people stuff.'
  },
  { startTime: 5361.38, person: 'Woody', text: ' These sessions are for me to learn myself.' },
  {
    startTime: 5365.98,
    person: 'Woody',
    text: " And if others learn something out of it, too, that's great."
  },
  { startTime: 5370.16, person: 'Woody', text: ' So my goal is...' },
  {
    startTime: 5371.3,
    person: 'Karol',
    text: ' And a little bit of a teaching from the back of the room.'
  },
  { startTime: 5373.36, person: 'Woody', text: " Yeah, I'm here to learn." },
  { startTime: 5375.26, person: 'Woody', text: " I'm not here to teach." },
  {
    startTime: 5378.56,
    person: 'Woody',
    text: " And, you know, if I take, you know, Feynman, Richard Feynman used to say, if you can't explain it to a five-year-old, it's not exactly what you say to a beginner."
  },
  {
    startTime: 5386.96,
    person: 'Woody',
    text: " You probably don't understand the thing yourself."
  },
  {
    startTime: 5389.28,
    person: 'Woody',
    text: " And so that's just part of it with what we're talking about here today."
  },
  {
    startTime: 5393.32,
    person: 'Woody',
    text: " I'm still in infancy in this space, the symptoms and signals."
  },
  {
    startTime: 5397.84,
    person: 'Woody',
    text: ' I think the signals are something I want to get better mechanisms.'
  },
  {
    startTime: 5402.36,
    person: 'Woody',
    text: ' One mechanism I mentioned was I would take the tick notes and write down, write down, you know, how many times I hear a word.'
  },
  { startTime: 5409.94, person: 'Woody', text: ' And meetings was a good example for that.' },
  { startTime: 5411.7, person: 'Woody', text: ' But I want other ways.' },
  {
    startTime: 5414.28,
    person: 'Woody',
    text: " And one way that I've been using lately is I have a short list of things that I'm going to be looking for."
  },
  {
    startTime: 5421.32,
    person: 'Woody',
    text: " So if I'm consulting with a team and they have a backlog, I want to know how many items are in the backlog."
  },
  {
    startTime: 5427.32,
    person: 'Woody',
    text: " And then if we have more than a few items, I want to have their tool they're using, put up an alert for anything that's been on the backlog for more than a week or two."
  },
  { startTime: 5436.6, person: 'Woody', text: ' I want to see the ageing.' },
  {
    startTime: 5438.64,
    person: 'Woody',
    text: ' So that we can actually see an alert then come up in some systems.'
  },
  {
    startTime: 5441.86,
    person: 'Woody',
    text: " Systems like here's an alert that this has been this has been here for, you know, two weeks or three weeks or four weeks."
  },
  {
    startTime: 5450.06,
    person: 'Woody',
    text: " I've worked with teams with backlogs of 150 items."
  },
  {
    startTime: 5453.26,
    person: 'Woody',
    text: ' I would say, you know, 95% of those items have been on there more than two weeks.'
  },
  {
    startTime: 5458.42,
    person: 'Woody',
    text: ' And some of them have been there for a year or more.'
  },
  { startTime: 5461.04, person: 'Woody', text: ' This is very problematic.' },
  {
    startTime: 5464.1,
    person: 'Woody',
    text: " So those of you who take offence to these things, I'm sorry about that."
  },
  { startTime: 5469.38, person: 'Woody', text: ' Backlogs are generally not a good thing.' },
  { startTime: 5472.22, person: 'Woody', text: ' We need to limit our WIP to one item.' },
  { startTime: 5474.88, person: 'Woody', text: ' So our work in progress limits.' },
  {
    startTime: 5477.12,
    person: 'Karol',
    text: ' Within bridging the gap, we try to use backlogs and try to use Kanban for the purposes of the project and start outlining these things.'
  },
  { startTime: 5488.84, person: 'Karol', text: " This just didn't work." },
  { startTime: 5490.82, person: 'Karol', text: " At this point, there's five of us." },
  {
    startTime: 5493.44,
    person: 'Karol',
    text: ' We were trying to set up tasks and assign them and try executing them.'
  },
  {
    startTime: 5500.46,
    person: 'Karol',
    text: ' First of all, nobody could update the board sufficiently enough.'
  },
  {
    startTime: 5505.08,
    person: 'Karol',
    text: ' Second of all, some of those tasks were just pushed back for weeks.'
  },
  { startTime: 5509.8, person: 'Karol', text: ' And we ended up, no, we just do what we do best.' },
  { startTime: 5513.7, person: 'Karol', text: ' And everybody has a space that they are doing.' },
  {
    startTime: 5516.56,
    person: 'Karol',
    text: " And they're just doing their job instead of like, oh, we should assign this to this one and this to this."
  },
  { startTime: 5521.7, person: 'Karol', text: " It doesn't really go anywhere in that sense." },
  { startTime: 5526.74, person: 'Karol', text: ' But you know what?' },
  {
    startTime: 5529,
    person: 'Karol',
    text: " Another sign that this is what I learned from body doubling, which is a method for people with ADHD to get focus and some sort of a psychological pressure on accountability of completion of tasks, is when they try to declare for a two-hour-long body doubling session, what they're going to be doing over the next two hours."
  },
  {
    startTime: 5555.06,
    person: 'Karol',
    text: " So it's not an estimation over like a workload estimation spanning over days, et cetera, it's the next two hours, right?"
  },
  { startTime: 5565.04, person: 'Karol', text: ' People either do it very unrealistic.' },
  {
    startTime: 5571.16,
    person: 'Karol',
    text: ' So they have unrealistic expectations and they get confronted with that by the end of the body doubling session where you do a checkout.'
  },
  {
    startTime: 5578.48,
    person: 'Karol',
    text: " And then they learn to estimate better because they learn how well they work in a specific state of mind, et cetera, because part of the check-in is how are you feeling today and what's on your mind."
  },
  {
    startTime: 5591.66,
    person: 'Karol',
    text: ' Or they start declaring tasks that are too vague, right?'
  },
  {
    startTime: 5598.38,
    person: 'Karol',
    text: " And if I see these kinds of tasks on a backlog that are very vaguely described or these kinds of tasks that somebody declaring on the body doubling session that I'm facilitating, that's for me an instant signal that I need to react to and actually prompt and ask, hey, hey, hey, hold on, not specific enough."
  },
  {
    startTime: 5622.78,
    person: 'Karol',
    text: " I know we're doing body doubling, everybody's going from a different department."
  },
  { startTime: 5626.54, person: 'Karol', text: ' I have no idea what you guys do professionally.' },
  { startTime: 5629.48, person: 'Karol', text: " That's perfectly fine." },
  {
    startTime: 5631.24,
    person: 'Karol',
    text: " But this sounds very vague and very general, which means you can just swirl around and declare you did it, but you didn't do it, but you did it, but it wasn't sufficient, et cetera."
  },
  { startTime: 5644.56, person: 'Karol', text: ' So the outcome is far not deterministic.' },
  {
    startTime: 5650.74,
    person: 'Karol',
    text: " And that's another kind of like a symptom that I personally pick up on."
  },
  {
    startTime: 5657.72,
    person: 'Woody',
    text: ' So the symptom, if we relate it back to that, the symptom here is what?'
  },
  { startTime: 5665.04, person: 'Woody', text: ' The symptom is...' },
  {
    startTime: 5669.5,
    person: 'Karol',
    text: " The symptom here would be that, well, going back to the quote, if you cannot explain it to a five-year-old, so that you declare that you're going to do something and you don't even understand what you're going to be doing because you cannot even express it properly."
  },
  {
    startTime: 5687.34,
    person: 'Karol',
    text: ' So that means maybe you should not be doing this.'
  },
  {
    startTime: 5689.82,
    person: 'Karol',
    text: ' Maybe you should be first focussing a little bit on what is the actual scope of work that you need to be doing.'
  },
  {
    startTime: 5696.86,
    person: 'Karol',
    text: " Because for example, you didn't do your planning and you don't know what are you supposed to do."
  },
  {
    startTime: 5702.02,
    person: 'Karol',
    text: " You're just grabbing at random stuff because you're just joining the body doubling session and you forgot to prepare, like really think through what you need to do."
  },
  {
    startTime: 5710.96,
    person: 'Woody',
    text: " So you're making me think of an experience I had many, many years ago, probably up to 20 years ago."
  },
  {
    startTime: 5718.02,
    person: 'Woody',
    text: ' I was hired to work for a company that had this well-known, extremely capable programmer who needed someone to sit with him.'
  },
  { startTime: 5729.58, person: 'Woody', text: ' And my main job was to say things like that.' },
  { startTime: 5731.62, person: 'Woody', text: " That's a really good idea." },
  {
    startTime: 5733.2,
    person: 'Woody',
    text: " Let's finish this other one first and then we'll take a look at that."
  },
  { startTime: 5736.32, person: 'Woody', text: ' That was my main job.' },
  {
    startTime: 5737.84,
    person: 'Woody',
    text: " So that sounds like an early version of what you're talking about here."
  },
  { startTime: 5740.96, person: 'Woody', text: ' Not exactly.' },
  {
    startTime: 5741.74,
    person: 'Woody',
    text: ' But my job was to help them stay because they would do the yak shaving kind of a model or that kind of a thing where they would go down a rabbit hole that would lead to another rabbit hole that would lead to, oh, and we got to change these foreign keys.'
  },
  {
    startTime: 5755.5,
    person: 'Woody',
    text: " And then we got to, it's like all these other things come to mind."
  },
  {
    startTime: 5759.16,
    person: 'Woody',
    text: " This is a problem in a way with a large backlog is we think that that's where we can put all these things that we should be doing otherwise, but they will come up naturally anyway."
  },
  { startTime: 5769.36, person: 'Woody', text: " So we usually don't need to do that." },
  { startTime: 5771.26, person: 'Woody', text: ' Well, I can go on and on on these things.' },
  { startTime: 5773, person: 'Woody', text: " I'm not sure how much time we have." },
  { startTime: 5775.42, person: 'Karol', text: ' Plenty, Woody, plenty.' },
  { startTime: 5776.76, person: 'Karol', text: ' We can go on and on.' },
  { startTime: 5779.5, person: 'Karol', text: ' Okay, but all right.' },
  { startTime: 5780.76, person: 'Karol', text: ' So we got symptoms covered.' },
  { startTime: 5784.2, person: 'Karol', text: ' We know that problems are problems.' },
  { startTime: 5785.72, person: 'Karol', text: ' Problems are not that really hard to define.' },
  { startTime: 5788.34, person: 'Karol', text: " They're problems, right?" },
  {
    startTime: 5789.86,
    person: 'Karol',
    text: ' Should we define what the problem is though then?'
  },
  {
    startTime: 5793.4,
    person: 'Woody',
    text: ' So what I see is that with something like meetings ties into dependencies on other people, ties into the queuing.'
  },
  {
    startTime: 5806.64,
    person: 'Woody',
    text: ' So most meetings, the purpose of most meetings is to discuss something so that we can plan or schedule or document and so on.'
  },
  { startTime: 5819.14, person: 'Woody', text: " We're not actually doing the work." },
  { startTime: 5821.68, person: 'Woody', text: ' We are doing the work around the work.' },
  {
    startTime: 5824.7,
    person: 'Woody',
    text: ' And so this is like in lean terms, we might be doing non-value added work.'
  },
  { startTime: 5831.06, person: 'Woody', text: " That's still necessary." },
  {
    startTime: 5832.2,
    person: 'Woody',
    text: ' In lean terms, you have necessary non-value added work and unnecessary non-value added work.'
  },
  {
    startTime: 5838.56,
    person: 'Karol',
    text: ' Like in software architecture, you have functional requirements and non-functional requirements.'
  },
  {
    startTime: 5843.26,
    person: 'Woody',
    text: ' So in most of the work that we do, there is going to be some amount of non-value added, but necessary things to do.'
  },
  {
    startTime: 5854.98,
    person: 'Woody',
    text: " Value added means adding value to the end product that we're creating."
  },
  {
    startTime: 5859.56,
    person: 'Woody',
    text: " So a good example would be if we're writing software, our discovery process is part of the value added work."
  },
  {
    startTime: 5867.64,
    person: 'Woody',
    text: " The person who's scheduling people is not part of that value added work."
  },
  { startTime: 5873.14, person: 'Woody', text: " But that's necessary in a lot of organisations." },
  {
    startTime: 5876.46,
    person: 'Woody',
    text: " I believe that stuff that we don't, that people can self-organise."
  },
  {
    startTime: 5880.1,
    person: 'Woody',
    text: ' We can self-form teams, self-organise, self-direct, self-manage.'
  },
  {
    startTime: 5884.88,
    person: 'Woody',
    text: " There's four or five of these or more self things that we could be doing that eliminates a lot of what managers do for people."
  },
  { startTime: 5891.9, person: 'Woody', text: ' So how do we get to the problems?' },
  {
    startTime: 5895.02,
    person: 'Woody',
    text: ' I want to skip to a slightly different point here.'
  },
  {
    startTime: 5898.4,
    person: 'Woody',
    text: ' When we started learning to work well as a team and adopted what we then were calling mob programming, which came from some people that worked at ThoughtWorks and had written a paper about it 10 years earlier.'
  },
  {
    startTime: 5912.06,
    person: 'Woody',
    text: " The idea that everybody's sitting at the same computer discussing what we're doing and doing it together."
  },
  { startTime: 5917.08, person: 'Woody', text: " We're actually doing the work together." },
  {
    startTime: 5919.2,
    person: 'Woody',
    text: ' When we started working that way, which kind of happened accidentally, what we found was that a lot of those symptoms disappeared.'
  },
  { startTime: 5931.62, person: 'Woody', text: ' For example, the queuing that happens' },
  { startTime: 5934.98, person: 'Woody', text: " when we're waiting on dependency," },
  { startTime: 5936.82, person: 'Woody', text: " that's where we're being put into a queue," },
  { startTime: 5939.7, person: 'Woody', text: ' stopped happening for us' },
  { startTime: 5940.92, person: 'Woody', text: ' as long as the people on our team' },
  { startTime: 5943.92, person: 'Woody', text: ' could answer their own questions,' },
  { startTime: 5945.94, person: 'Woody', text: ' which elevated the problem to a different level' },
  { startTime: 5948.32, person: 'Woody', text: ' because it was the external dependencies,' },
  { startTime: 5951.22, person: 'Woody', text: ' the people we were dependent on' },
  {
    startTime: 5952.3,
    person: 'Woody',
    text: ' that were on other teams or in other departments,'
  },
  { startTime: 5955.3, person: 'Woody', text: ' that it really became obvious quickly' },
  { startTime: 5957.04, person: 'Woody', text: ' that was a huge bottleneck.' },
  {
    startTime: 5959.54,
    person: 'Woody',
    text: ' But when the local bottleneck is the way we normally deal with this when we are working alone, we just pick up other work to do.'
  },
  {
    startTime: 5966.26,
    person: 'Woody',
    text: " And I've had bosses say, well, while you're waiting for that thing, do this."
  },
  { startTime: 5969.46, person: 'Woody', text: " So the pain of the waiting isn't made apparent." },
  { startTime: 5972.46, person: 'Woody', text: ' So the symptom is masking the problem.' },
  { startTime: 5975.82, person: 'Woody', text: " The problem is not that we aren't busy." },
  {
    startTime: 5978.22,
    person: 'Woody',
    text: " The problem is that we are queuing, that we can't get answers to the questions immediately."
  },
  {
    startTime: 5983.88,
    person: 'Woody',
    text: ' What we notice when we start working as a group that the big blockages outside of our team was product owners, which I think...'
  },
  { startTime: 5992.5, person: 'Woody', text: ' So roles are always a problem with this.' },
  {
    startTime: 5994.62,
    person: 'Woody',
    text: " Roles are a symptom that we haven't found how to manage our work well."
  },
  { startTime: 5998.44, person: 'Woody', text: " And that'll offend most managers." },
  {
    startTime: 6000.04,
    person: 'Woody',
    text: ' But anyways, the idea that product owners would not often get back to us when we had a question for them in a timely manner.'
  },
  {
    startTime: 6012.92,
    person: 'Woody',
    text: ' So if we have a question, they answer it right now, we could keep working on this thing.'
  },
  {
    startTime: 6016.7,
    person: 'Woody',
    text: " But if we have to wait, we're now queuing and we're waiting for them to get back."
  },
  {
    startTime: 6020.68,
    person: 'Woody',
    text: ' And it may take them an hour or two before they even respond and say, oh, you have a question?'
  },
  { startTime: 6024.86, person: 'Woody', text: " I read it here, I don't understand it." },
  {
    startTime: 6026.82,
    person: 'Woody',
    text: " Well, now we're starting the real process of the communication."
  },
  {
    startTime: 6028.76,
    person: 'Woody',
    text: " But if we try to explain it to them through an email, there's more queuing and more queuing."
  },
  {
    startTime: 6033.76,
    person: 'Woody',
    text: " So because they weren't on our team, we were just building the queues."
  },
  { startTime: 6037.88, person: 'Woody', text: ' Another one was the testers.' },
  {
    startTime: 6039.3,
    person: 'Woody',
    text: ' We finished something, it needs to get tested before it can be pushed to production.'
  },
  { startTime: 6043.5, person: 'Woody', text: " So it's gotta get through that." },
  {
    startTime: 6044.9,
    person: 'Woody',
    text: ' We were not doing pull requests, but that could have been one there.'
  },
  { startTime: 6048.6, person: 'Woody', text: ' This was 15 years ago.' },
  { startTime: 6051.3, person: 'Woody', text: ' Another thing was the database people.' },
  { startTime: 6053.32, person: 'Woody', text: ' They were working in a different department.' },
  {
    startTime: 6055.32,
    person: 'Woody',
    text: ' So if we had database work to do, we need to put in a request for that work.'
  },
  {
    startTime: 6059.6,
    person: 'Woody',
    text: ' And the last one was what you might now call the DevOps people, but this would be the people who would do our deployments.'
  },
  {
    startTime: 6068.1,
    person: 'Woody',
    text: ' Almost all the work that we had had to be deployed by somebody else.'
  },
  {
    startTime: 6071.86,
    person: 'Woody',
    text: ' So we noticed those four areas would cause deep queuing problems.'
  },
  {
    startTime: 6077.98,
    person: 'Woody',
    text: ' If we measure queuing well, and I have lots of slides on this, we will see that we spend most of our time waiting.'
  },
  {
    startTime: 6084.24,
    person: 'Woody',
    text: ' And Ryerson with another book, I can turn around and pull off my shelf.'
  },
  { startTime: 6089.14, person: 'Woody', text: ' This is not a picture of a bookshelf.' },
  { startTime: 6091.14, person: 'Woody', text: " That's a real bookshelf." },
  {
    startTime: 6092.5,
    person: 'Woody',
    text: ' So the principles of product development flow, he talks about queuing in this book.'
  },
  {
    startTime: 6098.38,
    person: 'Woody',
    text: ' And what he says is queues are the root cause of the majority of waste in product development.'
  },
  {
    startTime: 6104.48,
    person: 'Woody',
    text: ' And what we do is product development for developing software.'
  },
  {
    startTime: 6107.86,
    person: 'Woody',
    text: ' Mostly we could think of it as product development.'
  },
  { startTime: 6110.04, person: 'Woody', text: ' Is that true?' },
  {
    startTime: 6111.2,
    person: 'Woody',
    text: " Well, I don't need to know whether it's true or not, but I can ask myself the question."
  },
  { startTime: 6115.38, person: 'Woody', text: ' What if that is true?' },
  {
    startTime: 6117.78,
    person: 'Woody',
    text: ' I have talked to many executives now, and I have a pretty good sense that this is true.'
  },
  {
    startTime: 6123.22,
    person: 'Woody',
    text: " So I've talked to executives and companies, and when we get to the root cause of a lot of problems, it's the queuing."
  },
  {
    startTime: 6130.56,
    person: 'Woody',
    text: " So if I cannot talk to a product manager, and I have this at one company, except every Monday during a specific meeting, then that's a queue of a week."
  },
  {
    startTime: 6141.44,
    person: 'Woody',
    text: " If I have a question for them after that meeting, I'm in a queue for a week before I can get an answer."
  },
  {
    startTime: 6147.12,
    person: 'Woody',
    text: " And you can see that's going to drag out our work."
  },
  {
    startTime: 6149.2,
    person: 'Woody',
    text: ' At that particular place, I used a value stream map, a very rudimentary value stream map showing time actually working and time of non-value added, which would be like queuing.'
  },
  {
    startTime: 6159.6,
    person: 'Woody',
    text: ' And what we found in his six-month project, we only really worked on the code about three weeks.'
  },
  {
    startTime: 6166.1,
    person: 'Woody',
    text: ' Three weeks of total time actually working on the code.'
  },
  { startTime: 6169.68, person: 'Woody', text: ' So what do we do in the meantime?' },
  {
    startTime: 6171.56,
    person: 'Woody',
    text: ' Well, my boss had told me, and I was kind of a team lead of this effort.'
  },
  {
    startTime: 6175.52,
    person: 'Woody',
    text: " And then above me was a boss, and that boss said, we'll just find something else to work on."
  },
  { startTime: 6180.82, person: 'Woody', text: ' And I said, well, what do you mean?' },
  { startTime: 6182.9, person: 'Woody', text: ' Well, just save up your questions.' },
  { startTime: 6184.78, person: 'Woody', text: ' What do you mean?' },
  {
    startTime: 6185.72,
    person: 'Woody',
    text: " Because we can't continue working on this till we get that question answered."
  },
  { startTime: 6189.78, person: 'Woody', text: " So there's nothing to save up." },
  {
    startTime: 6191.5,
    person: 'Woody',
    text: ' And so what we ended up doing was we actually scouted, we walked out into the company, it was a huge financial firm, and we just asked other people, is there anything you need help with?'
  },
  { startTime: 6201.48, person: 'Woody', text: " And that's what we did to fill our time." },
  { startTime: 6203.72, person: 'Woody', text: " And my boss actually said, that's okay." },
  {
    startTime: 6207.08,
    person: 'Woody',
    text: ' This product expert, their time is very valuable.'
  },
  { startTime: 6210.2, person: 'Woody', text: ' So we only get access to a couple hours a week.' },
  {
    startTime: 6212.7,
    person: 'Woody',
    text: ' All right, if they want this work done in three weeks, we could do it in three weeks, but we need to get our answers immediately.'
  },
  {
    startTime: 6218.66,
    person: 'Woody',
    text: ' If you want your work done whenever it gets done, then we can keep working this way.'
  },
  { startTime: 6223.2, person: 'Woody', text: " And that's what we did." },
  {
    startTime: 6224.4,
    person: 'Woody',
    text: ' And I actually learned a great deal on that about queuing.'
  },
  {
    startTime: 6226.98,
    person: 'Woody',
    text: " That's where I really first started, and that would have been 2001 or so."
  },
  {
    startTime: 6231.52,
    person: 'Karol',
    text: " Well, what I'm sharing right now is not the original comic because that was instead of chat GPT, that was compiling."
  },
  { startTime: 6240.8, person: 'Karol', text: ' Yes.' },
  {
    startTime: 6241.66,
    person: 'Karol',
    text: ' That was one of the queuing people just fighting swords on chairs and whatnot.'
  },
  { startTime: 6245.42, person: 'Karol', text: " It's a very old XKCD issue." },
  { startTime: 6248.86, person: 'Woody', text: " And it's that old?" },
  { startTime: 6250.5, person: 'Woody', text: ' How old is it?' },
  { startTime: 6252.68, person: 'Karol', text: " 303, let's have a look." },
  { startTime: 6257.54, person: 'Karol', text: ' XKCD, probably.' },
  {
    startTime: 6258.86,
    person: 'Woody',
    text: ' I started messing with chat GPT about three years ago, but.'
  },
  { startTime: 6263.38, person: 'Karol', text: ' Yeah, but XKCD is now, what, 3000 something.' },
  { startTime: 6267.26, person: 'Karol', text: ' So that was issue 303.' },
  {
    startTime: 6269.76,
    person: 'Karol',
    text: " I don't know if these are dated, probably not dated."
  },
  { startTime: 6274.04, person: 'Karol', text: " No, they're not dated, unfortunately, anywhere." },
  {
    startTime: 6277.1,
    person: 'Karol',
    text: ' But if the current number is 3168, then this is 303.'
  },
  {
    startTime: 6285.38,
    person: 'Woody',
    text: ' Well, the chat GPT here, it says the initial release date was 2022.'
  },
  {
    startTime: 6292.68,
    person: 'Karol',
    text: ' Yeah, but that was the comic I found this one here.'
  },
  { startTime: 6297.88, person: 'Woody', text: " Oh, it's Mark, it's pirated." },
  { startTime: 6301.24, person: 'Karol', text: " It's pirated, it's a redo." },
  { startTime: 6303.88, person: 'Woody', text: " Okay, I'm sorry, I misunderstood." },
  { startTime: 6305.68, person: 'Woody', text: ' I misunderstood.' },
  { startTime: 6306.48, person: 'Karol', text: ' The original was compiling, right?' },
  { startTime: 6308.32, person: 'Karol', text: ' Get back to work, my code is compiling.' },
  { startTime: 6310.28, person: 'Karol', text: " Sorry, I can't, queuing." },
  { startTime: 6311.86, person: 'Woody', text: ' This is a really good point.' },
  {
    startTime: 6314.46,
    person: 'Woody',
    text: ' So I worked at a place where to do the build took three days.'
  },
  {
    startTime: 6320.64,
    person: 'Woody',
    text: ' So this is because of circular references and stuff like that.'
  },
  {
    startTime: 6324.28,
    person: 'Woody',
    text: ' So what do you do during this build period just before a release?'
  },
  {
    startTime: 6327.94,
    person: 'Woody',
    text: ' And so what the team did was automate that process.'
  },
  {
    startTime: 6332.26,
    person: 'Woody',
    text: ' And it turned out eventually they got it down to 45 minutes, which I think nowadays would be considered a monstrously long time.'
  },
  {
    startTime: 6339.2,
    person: 'Woody',
    text: ' But no individual could run a build in their debugging process.'
  },
  {
    startTime: 6346,
    person: 'Woody',
    text: ' So they could only work really with very refined small parts, tiny batches, tiny iterations, and are tiny bits of work and try to work only with having to rebuild your own component.'
  },
  { startTime: 6358.74, person: 'Woody', text: ' So this is a great topic.' },
  {
    startTime: 6361.5,
    person: 'Woody',
    text: ' So, okay, so that was a modification of one from decades ago.'
  },
  { startTime: 6367.06, person: 'Karol', text: ' Yeah, quite a long time ago.' },
  {
    startTime: 6369,
    person: 'Woody',
    text: ' Seeing that guy speaking at a conference that had to be like 2015.'
  },
  { startTime: 6373.16, person: 'Woody', text: ' He was already extremely famous by then.' },
  { startTime: 6375.94, person: 'Woody', text: ' So that 303 would be, yeah, compiling.' },
  { startTime: 6378.5, person: 'Woody', text: " But so this goes with, that's queuing." },
  { startTime: 6380.54, person: 'Woody', text: " That's called queuing, that waiting is queuing." },
  {
    startTime: 6382.72,
    person: 'Woody',
    text: " So what we mostly do is we find other things to do, which could be, and actually I'm doing a session next week, one of my public sessions on mob programming or ensemble programming and AI."
  },
  { startTime: 6399, person: 'Woody', text: ' How are we going to deal?' },
  {
    startTime: 6399.9,
    person: 'Woody',
    text: ' And this is one of the big problems is the queuing.'
  },
  {
    startTime: 6402.74,
    person: 'Woody',
    text: " I would argue that what we normally do to deal with queuing is dealing with the symptom, that we have to have something to do while we're waiting."
  },
  {
    startTime: 6412.46,
    person: 'Woody',
    text: ' In my earliest days of programming, I had no compiling because it was written in an interpreted language.'
  },
  { startTime: 6419.2, person: 'Woody', text: " So you didn't ever have that compiling problem." },
  { startTime: 6421.66, person: 'Woody', text: " That didn't happen for me until much later." },
  {
    startTime: 6423.68,
    person: 'Woody',
    text: ' I think I wrote all my first five or six years of programming was done in BASIC.'
  },
  {
    startTime: 6430.66,
    person: 'Woody',
    text: ' And somewhere along the way, I learned C, which is a different thing altogether.'
  },
  {
    startTime: 6435.28,
    person: 'Woody',
    text: ' And then I learned, and then things like, you know, in the nineties, a visual BASIC came out and other tools.'
  },
  {
    startTime: 6444.16,
    person: 'Woody',
    text: " But yeah, when you're in a non-compiled language, you don't have that exact same thing."
  },
  { startTime: 6453.53, person: 'Woody', text: ' Yeah, but you know, anyways, I love this topic.' },
  { startTime: 6456.93, person: 'Woody', text: ' Yeah, go ahead.' },
  { startTime: 6458.03, person: 'Karol', text: ' Just to top the topic off.' },
  { startTime: 6460.67, person: 'Karol', text: " Yes, let's do that." },
  { startTime: 6461.59, person: 'Karol', text: ' How can we dig into what is the problem?' },
  {
    startTime: 6465.09,
    person: 'Karol',
    text: ' Other than realising that we deal with symptoms, not the problems, other than finding signals.'
  },
  { startTime: 6471.81, person: 'Karol', text: ' But if we already found the signal, right?' },
  { startTime: 6474.79, person: 'Karol', text: ' We have a signal.' },
  { startTime: 6475.75, person: 'Karol', text: ' That means we have a problem somewhere.' },
  {
    startTime: 6479.21,
    person: 'Karol',
    text: " That's basically, I'm basically asking how to do RCA."
  },
  { startTime: 6482.49, person: 'Woody', text: " So when we get to the, what's RCA?" },
  { startTime: 6485.17, person: 'Woody', text: ' What is that?' },
  { startTime: 6485.35, person: 'Karol', text: ' Root cause analysis.' },
  { startTime: 6486.17, person: 'Woody', text: ' Okay, yeah.' },
  {
    startTime: 6487.21,
    person: 'Woody',
    text: " Root cause analysis is an area that's really problematic."
  },
  {
    startTime: 6491.63,
    person: 'Woody',
    text: ' Is we believe we need to get to the root of the problem before we can start trying to solve it.'
  },
  { startTime: 6496.81, person: 'Woody', text: ' And I think that this does misdirect us.' },
  {
    startTime: 6499.71,
    person: 'Woody',
    text: " So the pre-solve idea that I've been working with, that I kind of mentioned was, a lot of those symptoms went away for us."
  },
  {
    startTime: 6507.09,
    person: 'Woody',
    text: ' So the queuing problem, we never worked on the queuing problem.'
  },
  { startTime: 6510.17, person: 'Woody', text: ' We never worked on the dependency problem.' },
  { startTime: 6512.61, person: 'Woody', text: ' We never worked on the multitasking problem.' },
  {
    startTime: 6515.41,
    person: 'Woody',
    text: ' Rather than trying to find out what was the underlying problem, we were merely trying to work on turning up the good on a few things, which I already knew from my experience are useful.'
  },
  {
    startTime: 6525.79,
    person: 'Woody',
    text: ' And one of those things is getting better at collaboration.'
  },
  {
    startTime: 6529.31,
    person: 'Woody',
    text: ' So we were studying and practising getting better at collaboration.'
  },
  { startTime: 6533.35, person: 'Woody', text: ' And what happens when you do that?' },
  {
    startTime: 6536.41,
    person: 'Woody',
    text: ' In my opinion, when we work on getting better at collaboration, we are not focussing on the problem.'
  },
  {
    startTime: 6544.15,
    person: 'Woody',
    text: " We are focussing on turning up the good on something that's already, we know is good for us."
  },
  { startTime: 6550.01, person: 'Woody', text: ' Making things visible is another one.' },
  {
    startTime: 6552.73,
    person: 'Woody',
    text: " So one of the problems of not having things, not knowing what's been prioritised and or the priorities constantly changing is finding a way to make all work visible."
  },
  {
    startTime: 6563.59,
    person: 'Woody',
    text: ' And my initial way of doing that was to use something like a Kanban.'
  },
  {
    startTime: 6567.87,
    person: 'Woody',
    text: " But it's just a big workboard where if you're working on something and it's not represented on the board, your one main job is to get it up on the board just so we can start seeing the load that we're under."
  },
  {
    startTime: 6580.63,
    person: 'Woody',
    text: ' Because a lot of the work being done at that particular job was that we were working on stuff that nobody else was aware of.'
  },
  { startTime: 6591.15, person: 'Woody', text: ' Things were hidden.' },
  { startTime: 6592.21, person: 'Woody', text: ' We need to make everything apparent.' },
  { startTime: 6594.39, person: 'Woody', text: " Now, it's one thing on a construction site." },
  { startTime: 6596.43, person: 'Woody', text: " I had a contractor's licence for a while." },
  {
    startTime: 6598.41,
    person: 'Woody',
    text: " On a construction site, you can see everything that's being done even better than most factories."
  },
  {
    startTime: 6605.01,
    person: 'Woody',
    text: " If a guy's carrying wood from here to over there and you know that's not the right place to do it, you can see the thing happening and you know what's happening."
  },
  {
    startTime: 6613.55,
    person: 'Woody',
    text: " In a factory, I can walk into any factory and I've been asked to come into some factories and look for the problems they might have."
  },
  {
    startTime: 6621.53,
    person: 'Woody',
    text: " A symptom that we're not, what we have figured out flow is we've got boxes of parts."
  },
  {
    startTime: 6627.97,
    person: 'Woody',
    text: " If a machine has boxes of parts before the machine and boxes of parts after the machine, after their operation, that's an indication that we have not paid attention to flow."
  },
  {
    startTime: 6639.21,
    person: 'Woody',
    text: " Because the minute something goes into a box, it's entering a queue."
  },
  {
    startTime: 6644.61,
    person: 'Woody',
    text: ' So we can measure queuing by just measuring the number of boxes.'
  },
  {
    startTime: 6648.51,
    person: 'Woody',
    text: " We don't need to measure cycle time to see that."
  },
  { startTime: 6651.17, person: 'Woody', text: " It's an instant indicator." },
  { startTime: 6652.95, person: 'Woody', text: ' This is an issue with a lot of things we use.' },
  {
    startTime: 6655.79,
    person: 'Woody',
    text: " So if we're trying to identify problems, we can start educating ourselves."
  },
  {
    startTime: 6660.47,
    person: 'Woody',
    text: ' In software development, I have literally asked dozens, maybe hundreds of companies, how much inventory do you have?'
  },
  {
    startTime: 6668.01,
    person: 'Woody',
    text: ' And only two or three companies said, oh yeah, I can show you that.'
  },
  {
    startTime: 6671.85,
    person: 'Woody',
    text: ' And only one I think was doing a good job with it.'
  },
  {
    startTime: 6673.93,
    person: 'Woody',
    text: ' Most of them asked this question back, what do you mean inventory?'
  },
  {
    startTime: 6677.95,
    person: 'Woody',
    text: " So that we don't even understand that we have inventory and that inventory described as anything we've worked on that a customer isn't using yet, that's inventory."
  },
  {
    startTime: 6688.49,
    person: 'Woody',
    text: " So if I've worked on this feature and others have worked on it, and over the last six months, we've been working on it, but it's not deployed to someone actually using it, that means it has to be more than just behind a feature flag."
  },
  { startTime: 6699.83, person: 'Woody', text: ' It has to mean people are actually using it.' },
  { startTime: 6702.93, person: 'Woody', text: ' We have inventory.' },
  {
    startTime: 6704.17,
    person: 'Woody',
    text: ' So just knowing these kinds of things is useful.'
  },
  { startTime: 6707.23, person: 'Woody', text: ' So how do we get to solving problems?' },
  {
    startTime: 6709.15,
    person: 'Woody',
    text: " I think in the clear and complicated space, it's pretty straightforward."
  },
  {
    startTime: 6714.07,
    person: 'Woody',
    text: ' So in the clear space, we automatically solve it.'
  },
  {
    startTime: 6717.59,
    person: 'Woody',
    text: ' Right now, if I nicked my finger and got a little bit of bleeding going, I can go wash it, put some antiseptic on it, put a Band-Aid on it, done.'
  },
  { startTime: 6728.01, person: 'Woody', text: " That's the clear space." },
  {
    startTime: 6729.71,
    person: 'Woody',
    text: " But if I feel like I got a pain in my stomach, then I can't put a Band-Aid on that."
  },
  { startTime: 6734.53, person: 'Woody', text: ' And so that might be in the complicated space.' },
  { startTime: 6738.11, person: 'Woody', text: ' That could easily turn into the complex space.' },
  { startTime: 6740.83, person: 'Woody', text: ' So there are no easy answers to these things.' },
  {
    startTime: 6744.01,
    person: 'Woody',
    text: ' I would say usually root cause analysis is going to lead us to solving a problem that will become our...'
  },
  {
    startTime: 6752.23,
    person: 'Woody',
    text: ' The solution of that problem will become our next problem.'
  },
  {
    startTime: 6756.11,
    person: 'Woody',
    text: " We just don't realise that we're merely rearranging our problems most of the time."
  },
  { startTime: 6765.25, person: 'Karol', text: ' 99 bugs in the code.' },
  { startTime: 6767.51, person: 'Karol', text: ' 99 bugs in the code.' },
  { startTime: 6769.45, person: 'Karol', text: ' I take one down, fix it around.' },
  { startTime: 6771.59, person: 'Karol', text: ' Now I have 128 bugs in the code.' },
  {
    startTime: 6774.57,
    person: 'Woody',
    text: ' There was a study I once read, I wish I could find it again from IBM, that said that 70% of one-line code changes introduced a bug.'
  },
  { startTime: 6788.29, person: 'Woody', text: ' One-line code.' },
  {
    startTime: 6789.53,
    person: 'Woody',
    text: ' So somebody has got to have a lot of documentation, a lot of repositories.'
  },
  { startTime: 6796.91, person: 'Woody', text: ' This was something I read 20 years ago.' },
  { startTime: 6799.15, person: 'Woody', text: " If that was true, that's really problematic." },
  { startTime: 6802.45, person: 'Woody', text: ' And this is what they call failure demand.' },
  {
    startTime: 6804.55,
    person: 'Woody',
    text: " Somebody's going to need to work on that eventually because we failed to catch that we had a problem."
  },
  {
    startTime: 6810.21,
    person: 'Woody',
    text: " Yeah, so to put a cap on it, I'm not sure that actually..."
  },
  { startTime: 6813.15, person: 'Woody', text: " So this was back to Akof's thing." },
  { startTime: 6816.13, person: 'Woody', text: " It's not necessarily the solve." },
  { startTime: 6818.75, person: 'Woody', text: " It's going to be the dissolve." },
  {
    startTime: 6821.77,
    person: 'Woody',
    text: ' So that means we got to go to the systems level.'
  },
  { startTime: 6824.33, person: 'Woody', text: ' The system level.' },
  {
    startTime: 6826.09,
    person: 'Woody',
    text: ' This means several layers up above where the work is done.'
  },
  {
    startTime: 6829.75,
    person: 'Woody',
    text: ' Often the solutions that are down where the work is done are working on symptoms.'
  },
  {
    startTime: 6834.13,
    person: 'Woody',
    text: ' If we move up slightly above that, maybe in a system like with bug fixes where we actually do identify the bug and fix it.'
  },
  { startTime: 6843.17, person: 'Woody', text: " That's the complicated space." },
  { startTime: 6845.39, person: 'Woody', text: " I don't think that's really the complex space." },
  { startTime: 6848.09, person: 'Woody', text: " We're talking about people." },
  { startTime: 6849.79, person: 'Woody', text: " We're talking about working with each other." },
  { startTime: 6851.77, person: 'Woody', text: " We're talking..." },
  {
    startTime: 6852.97,
    person: 'Woody',
    text: ' My big solution really is we have to recognise that most of what we think we believe is wrong and stop believing in that.'
  },
  {
    startTime: 6860.59,
    person: 'Woody',
    text: ' Go to some kind of the Deming thinking that we need a constancy of purpose.'
  },
  {
    startTime: 6866.27,
    person: 'Woody',
    text: ' And that means five years commitment, 10 years commitment.'
  },
  {
    startTime: 6869.53,
    person: 'Woody',
    text: " Not we're going to try something for a little bit."
  },
  {
    startTime: 6872.25,
    person: 'Woody',
    text: " I've had people who'd say to me like, oh yeah, we tried TDD."
  },
  { startTime: 6875.73, person: 'Woody', text: " That didn't work." },
  { startTime: 6876.51, person: 'Woody', text: ' Oh, show me what you did.' },
  { startTime: 6877.69, person: 'Woody', text: ' Yeah, we tried it for two days.' },
  { startTime: 6879.45, person: 'Woody', text: ' And it just was slowing us down.' },
  {
    startTime: 6881.15,
    person: 'Woody',
    text: ' Okay, you have to get good at something before you can make that decision.'
  },
  {
    startTime: 6885.09,
    person: 'Woody',
    text: " You can't make a decision that TDD, test-driven development won't work for us in a matter of moments."
  },
  {
    startTime: 6890.57,
    person: 'Karol',
    text: ' Everything is slowing you down when you just begin with it.'
  },
  {
    startTime: 6894.13,
    person: 'Karol',
    text: ' Because you introduce a lot of cognitive load to actually be able to cope with it.'
  },
  {
    startTime: 6898.79,
    person: 'Karol',
    text: " So basically anytime you're beginning in something completely new, you will be very slow at it."
  },
  { startTime: 6904.47, person: 'Karol', text: " It's just normal." },
  { startTime: 6906.13, person: 'Karol', text: ' When you use proficiency, you get speed.' },
  {
    startTime: 6908.23,
    person: 'Karol',
    text: ' But you need to get that proficiency somehow first.'
  },
  {
    startTime: 6912.01,
    person: 'Woody',
    text: ' Yeah, this is back to my childhood days of playing music.'
  },
  {
    startTime: 6916.65,
    person: 'Woody',
    text: ' I learned some piano lessons and stuff as a kid.'
  },
  {
    startTime: 6919.91,
    person: 'Woody',
    text: ' And my brothers had a rock and roll band, a little rock and roll band.'
  },
  {
    startTime: 6924.19,
    person: 'Woody',
    text: ' And their bass player quit, which is the kind of thing that happens in rock and roll bands.'
  },
  { startTime: 6928.09, person: 'Woody', text: " And somebody just, ah, I'm getting out of here." },
  {
    startTime: 6930.17,
    person: 'Woody',
    text: " And so they came into the room and said, hey, you're our bass player now."
  },
  {
    startTime: 6934.27,
    person: 'Woody',
    text: ' And they just taught me thump, thump, thump, thump, thump, thump, thump, thump, thump, thump.'
  },
  { startTime: 6940.49, person: 'Woody', text: " You know, it's like, that's what you got to do." },
  { startTime: 6942.39, person: 'Woody', text: ' Do this over and over.' },
  {
    startTime: 6944.29,
    person: 'Woody',
    text: " You know, so the issue, I guess the point I'm making is we can take a step forward."
  },
  { startTime: 6952.11, person: 'Woody', text: " I didn't become a musician by doing that." },
  { startTime: 6954.55, person: 'Woody', text: ' I became a musician by now practising that.' },
  {
    startTime: 6957.63,
    person: 'Woody',
    text: ' And as a matter of fact, I would argue that I used to teach music lessons, you know, when I was a teenager and into my early 20s and stuff.'
  },
  {
    startTime: 6965.25,
    person: 'Woody',
    text: " And the students that would practise a half hour a day, within a few weeks, they're starting to get good."
  },
  {
    startTime: 6970.91,
    person: 'Woody',
    text: " And they're getting more and more excited about it."
  },
  { startTime: 6972.77, person: 'Woody', text: " And they're willing to, you know, extend it." },
  { startTime: 6974.75, person: 'Woody', text: " Let's practise 45 minutes a day." },
  {
    startTime: 6976.93,
    person: 'Woody',
    text: " The ones who go to practising an hour a day on their own, yeah, I've gone, yeah, they're probably going to turn into musicians."
  },
  {
    startTime: 6983.17,
    person: 'Woody',
    text: " The ones who come in the next week and didn't practise, they're never going to learn it."
  },
  { startTime: 6988.73, person: 'Woody', text: ' So this is true.' },
  {
    startTime: 6990.13,
    person: 'Woody',
    text: " Maybe we need some kind of a way to get the skills we need that we don't yet have."
  },
  {
    startTime: 6996.79,
    person: 'Woody',
    text: ' And that often has to be by working on examples.'
  },
  {
    startTime: 7001.31,
    person: 'Woody',
    text: " You don't learn to become a concert violinist by playing concerts, right?"
  },
  { startTime: 7006.49, person: 'Woody', text: ' That comes later.' },
  { startTime: 7008.05, person: 'Woody', text: ' We need to get the skills earlier on.' },
  {
    startTime: 7010.09,
    person: 'Woody',
    text: ' I was watching a video the other day about Fosbury.'
  },
  {
    startTime: 7012.75,
    person: 'Woody',
    text: ' The guy who did the Fosbury flop, which is a way of jumping over in the high jump.'
  },
  { startTime: 7018.25, person: 'Woody', text: ' Jumping over the bar backwards.' },
  { startTime: 7020.89, person: 'Woody', text: ' They used to do a thing called the roll.' },
  { startTime: 7022.93, person: 'Woody', text: ' And other things was a scissor.' },
  { startTime: 7024.49, person: 'Woody', text: ' These were the ways of jumping over a bar.' },
  { startTime: 7027.17, person: 'Woody', text: ' He studied the physics of it, I guess.' },
  {
    startTime: 7030.11,
    person: 'Woody',
    text: ' And he came up with this thing where we leap over backwards.'
  },
  {
    startTime: 7032.65,
    person: 'Woody',
    text: ' And now probably every, I think every world-class high jumper uses his method called the Fosbury flop.'
  },
  {
    startTime: 7042.15,
    person: 'Woody',
    text: " Well, we don't solve these problems by getting better at the way we used to do things."
  },
  { startTime: 7047.55, person: 'Woody', text: ' It takes some new ways of thinking.' },
  { startTime: 7049.75, person: 'Woody', text: ' I learned to do that when I was in high school.' },
  {
    startTime: 7051.77,
    person: 'Woody',
    text: ' Very uncomfortable for me to leap backwards over something.'
  },
  { startTime: 7056.91, person: 'Woody', text: ' Yeah, so anyways, you get the picture.' },
  {
    startTime: 7060.25,
    person: 'Woody',
    text: ' I did learn that maybe this was a closing thought to share.'
  },
  {
    startTime: 7064.31,
    person: 'Woody',
    text: " When I was about 45 years old and started working with other people in software development, I had already learned that if I say that won't work, somebody's gonna prove I'm wrong."
  },
  {
    startTime: 7076.15,
    person: 'Woody',
    text: " So I stopped, by that time in my life, I stopped saying that won't work."
  },
  {
    startTime: 7081.21,
    person: 'Woody',
    text: " So when I heard about pair programming, I didn't say that won't work."
  },
  { startTime: 7084.73, person: 'Woody', text: " I said, I'd like to learn how to do that." },
  {
    startTime: 7087.27,
    person: 'Woody',
    text: ' Same thing with test-driven development and so many other things.'
  },
  {
    startTime: 7091.05,
    person: 'Karol',
    text: " Because it's a lot about patterns and anti-patterns."
  },
  { startTime: 7095.83, person: 'Karol', text: " And I'm always debating." },
  {
    startTime: 7097.15,
    person: 'Karol',
    text: ' We had the debate with Mark some time ago about what is the pattern?'
  },
  { startTime: 7103.71, person: 'Karol', text: " What's an anti-pattern?" },
  { startTime: 7104.89, person: 'Karol', text: ' Yes.' },
  {
    startTime: 7108.13,
    person: 'Karol',
    text: ' And this debate was interesting in a sense that basically we established that there is no such thing as anti-pattern.'
  },
  {
    startTime: 7116.57,
    person: 'Karol',
    text: " It's just a pattern that was used in the wrong context."
  },
  { startTime: 7120.59, person: 'Karol', text: " Well, that's powerful." },
  { startTime: 7121.75, person: 'Woody', text: " I'd never thought of that, but I like that." },
  { startTime: 7124.25, person: 'Woody', text: ' So I have found this for myself, yeah.' },
  {
    startTime: 7127.05,
    person: 'Karol',
    text: " Yeah, we basically discussed this problem because I was trying to establish what is the definition of an anti-pattern and I couldn't find the proper definition of said anti-pattern in the literature anywhere."
  },
  { startTime: 7140.79, person: 'Karol', text: ' It was very difficult.' },
  {
    startTime: 7141.95,
    person: 'Karol',
    text: ' There were some attempts, but they were not definitive enough for me to work.'
  },
  { startTime: 7150.13, person: 'Karol', text: ' Oh, I seem to have connection problems.' },
  { startTime: 7153.57, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 7154.91,
    person: 'Karol',
    text: " You did freeze up for a moment, but you're still there."
  },
  { startTime: 7158.21, person: 'Karol', text: " I'm still here." },
  { startTime: 7159.19, person: 'Karol', text: " I'm seeing that my browser is also crashing." },
  {
    startTime: 7161.89,
    person: 'Karol',
    text: ' The screen behind me just crashed also a little bit with connection loss.'
  },
  { startTime: 7165.65, person: 'Karol', text: " Well, that's what you get." },
  {
    startTime: 7168.11,
    person: 'Karol',
    text: ' So in that sense, we were looking at patterns and anti-patterns, and there is no such thing as an anti-pattern.'
  },
  {
    startTime: 7173.77,
    person: 'Karol',
    text: " If you call something an anti-pattern, first of all, you probably don't understand it well enough and you probably used it in the wrong context."
  },
  {
    startTime: 7181.81,
    person: 'Karol',
    text: ' So you basically did some sort of a cognitive bias, for example, like jumping on the bandwagon.'
  },
  { startTime: 7188.95, person: 'Karol', text: ' And this is just it.' },
  {
    startTime: 7190.67,
    person: 'Karol',
    text: ' And there are certain patterns that are very much usable in a very specific niche scenario, in a very specific context.'
  },
  {
    startTime: 7197.85,
    person: 'Karol',
    text: ' And outside that context, they will not be usable at all, and they will be more damaging than helpful.'
  },
  {
    startTime: 7203.29,
    person: 'Karol',
    text: ' And understanding that context and building that context for yourself, so building that knowledge is crucial.'
  },
  {
    startTime: 7210.05,
    person: 'Woody',
    text: ' So this brings up a really important point, and that is that we need to stay open-minded.'
  },
  {
    startTime: 7216.33,
    person: 'Woody',
    text: ' So I heard that described as maintaining curiosity.'
  },
  {
    startTime: 7220.91,
    person: 'Woody',
    text: " So I can be very, you know, I could say, no, this is the way we're going to do it."
  },
  { startTime: 7225.49, person: 'Woody', text: ' And as a boss, I often used to do that.' },
  {
    startTime: 7228.25,
    person: 'Woody',
    text: " But somewhere in the 90s, we had gotten, probably in the 80s, we'd gotten in the business that I owned, that we would say, here's the way we are currently doing it."
  },
  { startTime: 7237.47, person: 'Woody', text: ' You will probably come upon a better idea.' },
  {
    startTime: 7240.13,
    person: 'Woody',
    text: " Please share that with us and we'll experiment with it."
  },
  {
    startTime: 7243.55,
    person: 'Woody',
    text: ' So where in my earlier years, I would say, look, this is how we do things.'
  },
  {
    startTime: 7247.85,
    person: 'Woody',
    text: " I'd learned, you know, in my 30s, I suppose, that other people have better ideas than me."
  },
  { startTime: 7253.81, person: 'Woody', text: ' I got to take advantage of that.' },
  {
    startTime: 7255.55,
    person: 'Woody',
    text: ' And instead of, you know, insisting this way is working for us, taking the attitude that there is no best practise, because there are always better practises.'
  },
  { startTime: 7266.85, person: 'Woody', text: " That's related to this." },
  {
    startTime: 7268.17,
    person: 'Woody',
    text: " It's not exactly the same thing, but that's related."
  },
  {
    startTime: 7270.71,
    person: 'Karol',
    text: ' And then to flip it a little bit to the problem space, when I was a bit more junior in my role as an architect, I had answers for everything.'
  },
  {
    startTime: 7280.81,
    person: 'Karol',
    text: ' So I basically was in the Dunning-Kruger effect peak of stupidity at times.'
  },
  { startTime: 7284.77, person: 'Woody', text: ' Sure, sure.' },
  { startTime: 7285.39, person: 'Woody', text: " I'm sure I had that too." },
  { startTime: 7286.79, person: 'Karol', text: ' Everybody goes through the peaks of stupidity.' },
  {
    startTime: 7289.29,
    person: 'Karol',
    text: " And it's a shameful process, especially if you go to the valley of despair and start actually understanding the things that went wrong."
  },
  {
    startTime: 7297.85,
    person: 'Karol',
    text: ' So probably in different areas of life and my expertise, I had that several times over different areas that I worked on.'
  },
  {
    startTime: 7306.21,
    person: 'Karol',
    text: ' But basically what that humbling experience of being on the peak of stupidity and falling into the valley of despair teaches is that you need to dive into the problem space.'
  },
  { startTime: 7320.49, person: 'Karol', text: ' You cannot reside in the solution space.' },
  { startTime: 7325.21, person: 'Karol', text: ' So, oh, I see a symptom.' },
  {
    startTime: 7327.35,
    person: 'Karol',
    text: " I'm going to solution the hell out of it and go my way."
  },
  { startTime: 7330.59, person: 'Woody', text: " No, it doesn't work that way." },
  { startTime: 7332.19, person: 'Woody', text: ' That is really the point of this whole session.' },
  { startTime: 7335.55, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 7336.13,
    person: 'Karol',
    text: ' So the point is, which is also taught through domain-driven design or very much learning domain-driven design at this point very actively, is to remain in the problem space and analyse the problem space, acquire knowledge about the problem space.'
  },
  {
    startTime: 7353.07,
    person: 'Karol',
    text: " And then you're able to approximate what the problem is that you're actually solutioning for."
  },
  {
    startTime: 7359.77,
    person: 'Karol',
    text: " And that's why you can then deliver a solution to the problem, not to the symptoms of said problem."
  },
  { startTime: 7366.15, person: 'Woody', text: ' So this...' },
  { startTime: 7367.11, person: 'Woody', text: " That's difficult." },
  { startTime: 7367.71, person: 'Woody', text: ' Go ahead.' },
  { startTime: 7368.17, person: 'Woody', text: ' Go ahead.' },
  { startTime: 7368.79, person: 'Woody', text: ' Yeah.' },
  { startTime: 7369.55, person: 'Woody', text: ' This to me is critical.' },
  { startTime: 7371.09, person: 'Woody', text: ' Yeah.' },
  { startTime: 7371.71, person: 'Woody', text: ' And we will never leave that.' },
  {
    startTime: 7374.13,
    person: 'Woody',
    text: " That's why, you know, Alan Kelly used to talk about, we shouldn't be doing projects."
  },
  { startTime: 7379.97, person: 'Woody', text: " We're working on products." },
  {
    startTime: 7381.25,
    person: 'Woody',
    text: " When we think that we're on a project, we're envisioning an end."
  },
  {
    startTime: 7386.69,
    person: 'Woody',
    text: ' And he made the argument that the end comes when nobody wants to use your software anymore.'
  },
  {
    startTime: 7392.45,
    person: 'Woody',
    text: " And that will come sooner if you think you've finished your project."
  },
  { startTime: 7397.25, person: 'Woody', text: ' You have to...' },
  {
    startTime: 7397.89,
    person: 'Woody',
    text: ' It has to continuously be improving and answering the need of the users.'
  },
  {
    startTime: 7402.75,
    person: 'Woody',
    text: ' They will discover what they really want to use.'
  },
  {
    startTime: 7405.47,
    person: 'Woody',
    text: " That's like the idea of measuring how good a platform is."
  },
  {
    startTime: 7410.05,
    person: 'Woody',
    text: ' If they start doing things with it you never intended, you probably have a good platform.'
  },
  { startTime: 7414.85, person: 'Karol', text: ' Yeah.' },
  { startTime: 7415.59, person: 'Woody', text: ' Because...' },
  {
    startTime: 7415.99,
    person: 'Woody',
    text: " And if they don't, you know, then maybe it's too constraining."
  },
  { startTime: 7418.97, person: 'Woody', text: " Whether that's the truth." },
  { startTime: 7419.95, person: 'Woody', text: " I'm not sharing any of these things as truths." },
  { startTime: 7422.19, person: 'Woody', text: " They're just good things to think about." },
  { startTime: 7424.31, person: 'Karol', text: " Yeah, that's true." },
  {
    startTime: 7425.39,
    person: 'Karol',
    text: ' And then touching on the different types of problems.'
  },
  { startTime: 7428.61, person: 'Karol', text: ' Okay.' },
  { startTime: 7428.83, person: 'Karol', text: ' Knowledge problems, one thing.' },
  { startTime: 7430.61, person: 'Karol', text: ' You need to learn the problem space.' },
  { startTime: 7432.19, person: 'Karol', text: ' You need to learn the problem domain.' },
  { startTime: 7435.71, person: 'Karol', text: ' But you said collaboration.' },
  { startTime: 7437.67, person: 'Karol', text: ' And it like...' },
  {
    startTime: 7440.25,
    person: 'Karol',
    text: ' Especially that we talked a lot about queuing today.'
  },
  { startTime: 7446.63, person: 'Karol', text: ' It already went into my brain.' },
  { startTime: 7448.61, person: 'Karol', text: ' EDA, EDA, EDA.' },
  { startTime: 7450.01, person: 'Karol', text: ' Even Driven Architecture.' },
  {
    startTime: 7451.55,
    person: 'Karol',
    text: ' And if I look at it from the perspective of communication, time to collaboration as well.'
  },
  {
    startTime: 7460.53,
    person: 'Karol',
    text: " If I'm using queues, yeah, that's always going to be a bit of a problem bottleneck."
  },
  {
    startTime: 7467.31,
    person: 'Karol',
    text: ' This serves as a load balancer at times in system design.'
  },
  { startTime: 7470.95, person: 'Karol', text: ' Perfect.' },
  {
    startTime: 7472.61,
    person: 'Karol',
    text: " But if I'm using a topic, I'm actually doing a broadcast, right?"
  },
  {
    startTime: 7478.29,
    person: 'Karol',
    text: " So I'm actually telling everybody, hey, this happened."
  },
  { startTime: 7482.49, person: 'Karol', text: " This is something I'm doing." },
  { startTime: 7483.97, person: 'Karol', text: " This is something I'm working on." },
  { startTime: 7485.19, person: 'Karol', text: ' This is something...' },
  {
    startTime: 7486.79,
    person: 'Karol',
    text: " So it's actually creating that visibility of things that are happening."
  },
  {
    startTime: 7490.83,
    person: 'Karol',
    text: ' And so this also works on that level of architecture, software design, ecosystem architecture, or system architecture.'
  },
  {
    startTime: 7500.27,
    person: 'Karol',
    text: " If we're shifting our communication patterns towards real time, we can really solve a lot of problems."
  },
  {
    startTime: 7510.03,
    person: 'Karol',
    text: ' But because that creates that collaborative aspect.'
  },
  { startTime: 7513.25, person: 'Woody', text: ' Yes.' },
  {
    startTime: 7514.05,
    person: 'Karol',
    text: " It brings other problems, but that's a completely different story."
  },
  {
    startTime: 7517.87,
    person: 'Woody',
    text: ' There was a kind of scale that was called the richness of...'
  },
  {
    startTime: 7524.87,
    person: 'Woody',
    text: ' I think it was the richness of communication by Alistair Colburn.'
  },
  { startTime: 7529.71, person: 'Woody', text: ' And this scale showed...' },
  { startTime: 7532.11, person: 'Woody', text: " I'm going to see if I can find it here." },
  { startTime: 7534.33, person: 'Woody', text: ' The scale showed the value of collaborating.' },
  {
    startTime: 7540.53,
    person: 'Woody',
    text: ' So if we have a richer communication, we have a higher level of effectiveness.'
  },
  { startTime: 7547.81, person: 'Woody', text: ' And I liked what I learned from that.' },
  { startTime: 7551.59, person: 'Woody', text: ' And I believe that...' },
  {
    startTime: 7554.45,
    person: 'Karol',
    text: ' Was that by chance effectiveness of communication?'
  },
  { startTime: 7557.63, person: 'Woody', text: ' It could be effectiveness of communication.' },
  { startTime: 7560.33, person: 'Woody', text: " I'm going to see if I can find the diagram." },
  { startTime: 7562.53, person: 'Woody', text: " I've got some of it." },
  {
    startTime: 7563.59,
    person: 'Woody',
    text: ' So the effectiveness versus the richness of communication.'
  },
  {
    startTime: 7569.53,
    person: 'Woody',
    text: ' So I think it was on the richness of communication.'
  },
  { startTime: 7573.21, person: 'Woody', text: ' And so this was...' },
  { startTime: 7574.65, person: 'Woody', text: ' I can find a link or something.' },
  { startTime: 7576.67, person: 'Woody', text: " But that's it there." },
  { startTime: 7578.67, person: 'Woody', text: ' So what did he call this?' },
  { startTime: 7580.51, person: 'Karol', text: ' Yeah.' },
  { startTime: 7580.79, person: 'Woody', text: ' This is somebody else.' },
  { startTime: 7581.85, person: 'Woody', text: " But that's Alistair's." },
  { startTime: 7583.59, person: 'Karol', text: ' This is a remade by somebody else.' },
  { startTime: 7585.53, person: 'Woody', text: " That's based on Alistair's thing." },
  {
    startTime: 7587.11,
    person: 'Woody',
    text: " So he's kind of showing the first level there, the lower level is written documents, recordings, diagrams, and so on, which are all very good."
  },
  {
    startTime: 7599.13,
    person: 'Woody',
    text: ' But the next batch is bringing us all the way up to face-to-face communication or at a whiteboard.'
  },
  {
    startTime: 7604.97,
    person: 'Woody',
    text: ' So I think either Alistair or a few others at that time used to say the power of two developers standing at a whiteboard.'
  },
  { startTime: 7613.21, person: 'Woody', text: ' Well, I would take this a bit further now.' },
  {
    startTime: 7615.15,
    person: 'Woody',
    text: ' I believe, first of all, that this is much more of an exponential kind of a chart.'
  },
  { startTime: 7620.39, person: 'Woody', text: ' It can be shown as an exponential...' },
  {
    startTime: 7626.8,
    person: 'Woody',
    text: " You know, where at the low end, it doesn't just move up kind of..."
  },
  { startTime: 7631.54, person: 'Woody', text: " This is sort of linear the way it's shown." },
  {
    startTime: 7633.1,
    person: 'Woody',
    text: " It moves up like when we get past where we're cooperating with each other, then it really starts going up."
  },
  { startTime: 7641.46, person: 'Woody', text: " Before that, we're coordinating." },
  { startTime: 7643.2, person: 'Woody', text: ' We coexist.' },
  { startTime: 7645.12, person: 'Woody', text: ' Then we have communication.' },
  { startTime: 7647.3, person: 'Woody', text: ' We have coordination.' },
  {
    startTime: 7648.62,
    person: 'Woody',
    text: " Those are all ways of working together, but they're very low richness."
  },
  {
    startTime: 7654.7,
    person: 'Woody',
    text: " When we start working into cooperation, that means we're helping each other."
  },
  {
    startTime: 7657.6,
    person: 'Woody',
    text: ' We can go up further than that into true collaboration and eventually at a space I would call co-creation.'
  },
  {
    startTime: 7664.98,
    person: 'Woody',
    text: ' And I believe the book Dialogue and the Art of Thinking Together also addresses these things.'
  },
  { startTime: 7670.66, person: 'Woody', text: ' So this is...' },
  {
    startTime: 7671.74,
    person: 'Woody',
    text: " It's not unique to me, but it's a gathering of all the things I've learned over time."
  },
  {
    startTime: 7677.28,
    person: 'Woody',
    text: ' The idea that if we are sitting together, then we are in a space where all of these things come together.'
  },
  { startTime: 7688.4, person: 'Woody', text: ' So it means in some ways our work is easier.' },
  { startTime: 7692.96, person: 'Woody', text: " We don't feel as pressured." },
  {
    startTime: 7694.96,
    person: 'Woody',
    text: ' So there is this psychological thing that happens to us.'
  },
  {
    startTime: 7698.22,
    person: 'Woody',
    text: " If we're not under pressure and feeling really busy, we feel like we're not being effective."
  },
  { startTime: 7704.7, person: 'Woody', text: " We're not being productive." },
  { startTime: 7705.82, person: 'Woody', text: ' This is something that happens to humans.' },
  { startTime: 7707.48, person: 'Woody', text: " It's an actual thing." },
  {
    startTime: 7710.52,
    person: 'Woody',
    text: " And so when we're sitting and really working well with each other, we may not be contributing very much individually, but it's the old saying, I think from maybe Russell Aikoff, where he said that the..."
  },
  {
    startTime: 7722.3,
    person: 'Woody',
    text: ' And it may have been somebody else who said that the value of a system is not the sum of its parts.'
  },
  { startTime: 7730.74, person: 'Woody', text: " It's the product of the interactions." },
  {
    startTime: 7733.64,
    person: 'Woody',
    text: ' So whoever said that, and it could have been Russell Aikoff.'
  },
  { startTime: 7736.92, person: 'Woody', text: ' You can easily look that up.' },
  { startTime: 7739.32, person: 'Woody', text: " It's not..." },
  {
    startTime: 7739.8,
    person: 'Woody',
    text: " And I'm sure that that probably came in Roman times or Greek days."
  },
  { startTime: 7744.56, person: 'Woody', text: ' Somebody thought that up.' },
  { startTime: 7745.76, person: 'Woody', text: ' We just massage it over time.' },
  {
    startTime: 7748.64,
    person: 'Woody',
    text: " But it sounds like the kind of thing that Russell Aikoff might've said."
  },
  { startTime: 7752.98, person: 'Karol', text: ' But this ties very much into...' },
  {
    startTime: 7757.62,
    person: 'Karol',
    text: " I never know the Alistair Cockburn's richness of communication, but this very much ties into my experiences as a trainer."
  },
  {
    startTime: 7769.45,
    person: 'Karol',
    text: " And because I learned better when I'm designing trainings and teaching people."
  },
  { startTime: 7776.62, person: 'Karol', text: ' Yes.' },
  {
    startTime: 7777.6,
    person: 'Karol',
    text: ' Because that classroom interaction, where we are in one room and we start to dialogue.'
  },
  {
    startTime: 7783.34,
    person: 'Karol',
    text: ' And most of my trainings are designed in a way that, of course, I convey some knowledge through slides, presentation.'
  },
  {
    startTime: 7791.04,
    person: 'Karol',
    text: ' But a lot of elements there are interactive elements where we spark into discussion and ask...'
  },
  {
    startTime: 7797.69,
    person: 'Karol',
    text: ' I ask questions and I want to hear different opinions, not even answers to those questions, because there are no correct answers to the set of questions.'
  },
  { startTime: 7806.21, person: 'Karol', text: ' Just any answers, really.' },
  { startTime: 7808.75, person: 'Karol', text: ' Yes.' },
  {
    startTime: 7808.91,
    person: 'Karol',
    text: ' And this brings a lot more learning to the table than anything else.'
  },
  {
    startTime: 7816.23,
    person: 'Karol',
    text: ' So that richness is through that dialogue, through that shared work, shared understanding, shared collaboration there.'
  },
  {
    startTime: 7826.31,
    person: 'Karol',
    text: ' And for me, that became the default way of learning.'
  },
  {
    startTime: 7831.77,
    person: 'Karol',
    text: " And the default way of learning in the sense that this is why we're having this stream as well, because this is my opportunity to learn through conversation."
  },
  {
    startTime: 7843.77,
    person: 'Karol',
    text: ' And this is why I also last year started just reaching out to people over LinkedIn and asking, hey, do you want to do an architectural sparring and just chat about architecture?'
  },
  {
    startTime: 7853.55,
    person: 'Karol',
    text: ' And the majority of people just said, yeah, sure.'
  },
  { startTime: 7855.93, person: 'Karol', text: " Let's do that." },
  { startTime: 7857.19, person: 'Woody', text: " That's great." },
  {
    startTime: 7857.99,
    person: 'Karol',
    text: ' And these were so many great conversations over architecture and just looking at different viewpoints on architecture that I could have never stumbled into by just doing the work.'
  },
  {
    startTime: 7871.97,
    person: 'Woody',
    text: ' So the strength of this, I think, is probably based in how humans operate.'
  },
  {
    startTime: 7880.27,
    person: 'Woody',
    text: " We would not exist if this wasn't something we were already good at."
  },
  {
    startTime: 7885.47,
    person: 'Woody',
    text: ' So that means our ancestors, if evolution is a thing, which I kind of guess it is, our ancestors had to get good at this so that we could exist today.'
  },
  {
    startTime: 7896.65,
    person: 'Woody',
    text: " There was a point in time, probably, where our long-ago ancestors, pre-human things, didn't need a group to survive."
  },
  {
    startTime: 7907.45,
    person: 'Woody',
    text: ' Maybe they were just like amoeba-sized things that could split up in cells and they could just keep going.'
  },
  { startTime: 7915.07, person: 'Woody', text: ' And they never helped each other do anything.' },
  {
    startTime: 7916.89,
    person: 'Woody',
    text: ' At some point, we started getting four legs and they started using some of our legs to hang into trees.'
  },
  {
    startTime: 7925.75,
    person: 'Woody',
    text: " So that's why they think, some anthropologists, that our hands are the way they are because we lived in trees and we need to be able to grab onto things."
  },
  { startTime: 7933.43, person: 'Woody', text: ' And there are some animals that...' },
  {
    startTime: 7934.87,
    person: 'Woody',
    text: " So all I'm saying is, eventually, we got to the point where children are born needing care for an extended period of time."
  },
  {
    startTime: 7944.15,
    person: 'Woody',
    text: " They need somebody to take care of them until they're old enough to take care of themselves."
  },
  { startTime: 7947.63, person: 'Woody', text: ' Usually happens around age 30.' },
  { startTime: 7949.99, person: 'Woody', text: ' But anyways, or something like that.' },
  {
    startTime: 7954.03,
    person: 'Woody',
    text: ' Anyways, to get to the point here is that to be able to do this working well together stuff, and this was stuff we needed to learn how to do.'
  },
  {
    startTime: 7963.69,
    person: 'Woody',
    text: " I'm pretty sure we have common ancestors, that their main thing to communicate to another group of people was we're pretty good at defending ourselves, so don't even try to fight us."
  },
  { startTime: 7974.07, person: 'Woody', text: ' Stuff like that, right?' },
  {
    startTime: 7975.69,
    person: 'Woody',
    text: " So that once we could communicate that, then we could say, okay, well, let's get together."
  },
  { startTime: 7979.77, person: 'Woody', text: ' Maybe we can trade some stuff.' },
  {
    startTime: 7981.27,
    person: 'Woody',
    text: " Because there's plenty of evidence that shows that there were people living deep in the interior of countries, of continents, that had artefacts you could only get at the ocean."
  },
  {
    startTime: 7991.43,
    person: 'Woody',
    text: ' Or people at the ocean who only got stuff that you could get from this one region.'
  },
  {
    startTime: 7995.19,
    person: 'Woody',
    text: " They didn't walk to that region and get that stuff and bring it back."
  },
  { startTime: 7998.07, person: 'Woody', text: ' We learned how to interact with each other.' },
  {
    startTime: 8000.65,
    person: 'Woody',
    text: " And although I don't think we've ever become perfect at it, we're actually right now, I think as a whole across the world, we're learning how to be less good at that in a lot of ways."
  },
  { startTime: 8011.73, person: 'Woody', text: ' And so this is a de-evolution maybe.' },
  {
    startTime: 8014.57,
    person: 'Woody',
    text: ' But to some degree, we have to learn how to work well with others.'
  },
  {
    startTime: 8019.11,
    person: 'Woody',
    text: " And that's my argument most of the time is mob programming or software teaming isn't about necessarily eliminating solo work."
  },
  {
    startTime: 8028.41,
    person: 'Woody',
    text: " It's just about getting better at working collaboratively."
  },
  { startTime: 8032.39, person: 'Woody', text: ' So we have that choice.' },
  { startTime: 8034.57, person: 'Woody', text: ' And something happened in our industry.' },
  {
    startTime: 8036.07,
    person: 'Woody',
    text: ' This is what I noticed early on when I started working for a living is that we thought this work had to be done alone.'
  },
  {
    startTime: 8043.21,
    person: 'Woody',
    text: ' And we would only have meetings and documents to communicate.'
  },
  {
    startTime: 8046.83,
    person: 'Woody',
    text: ' And I think that learning to be more effective here includes learning how to work to actually do the work together, rather just talk about the work.'
  },
  { startTime: 8057.07, person: 'Woody', text: ' I have found this for myself.' },
  {
    startTime: 8058.47,
    person: 'Woody',
    text: " If I'm going to do something, like I was putting on a conference for a few years, if we did the work rather than having a team talk about what needs to get done, and then people say, well, I'll do that and I'll do that."
  },
  { startTime: 8070.43, person: 'Woody', text: ' We just sat and did the work together.' },
  { startTime: 8072.23, person: 'Woody', text: ' We got a lot more done.' },
  { startTime: 8073.83, person: 'Woody', text: ' It was better done.' },
  { startTime: 8075.05, person: 'Woody', text: ' It was better thought through.' },
  {
    startTime: 8076.65,
    person: 'Woody',
    text: " It's in the doing of the work that we actually discover what we need to do."
  },
  {
    startTime: 8081.29,
    person: 'Woody',
    text: ' And if we do that well, as a group, we speed through the work.'
  },
  {
    startTime: 8087.03,
    person: 'Woody',
    text: ' We no longer have the queuing and other problems that happen when we divide the work up.'
  },
  { startTime: 8091.83, person: 'Woody', text: " We've naturally started dividing work." },
  { startTime: 8094.15, person: 'Woody', text: " And I think there's a lot of reasons." },
  { startTime: 8095.29, person: 'Woody', text: ' Maybe we could do another session sometime.' },
  { startTime: 8097.23, person: 'Woody', text: ' Why is it that we think working this way?' },
  {
    startTime: 8098.99,
    person: 'Woody',
    text: ' I go into companies and they have a testing department and a coding department and a deployment department and a database department, or at least managers in those areas.'
  },
  { startTime: 8109.49, person: 'Woody', text: ' Why did we let that happen?' },
  {
    startTime: 8111.41,
    person: 'Woody',
    text: ' Well, it makes it harder for us to work together in an environment where I have to put in a request to get someone else to work on something.'
  },
  {
    startTime: 8119.25,
    person: 'Woody',
    text: " And then we're going to decide what it is in a meeting instead of decide it together working on the thing."
  },
  { startTime: 8125.23, person: 'Woody', text: ' These are ways to make things harder.' },
  { startTime: 8128.37, person: 'Woody', text: " Back to Drucker's quote." },
  { startTime: 8130.71, person: 'Woody', text: " I'm afraid we're getting to where I need to go." },
  { startTime: 8134.35, person: 'Woody', text: ' So I have another meeting.' },
  { startTime: 8135.97, person: 'Woody', text: ' I have another meeting coming up.' },
  { startTime: 8137.75, person: 'Karol', text: ' All right, Woody.' },
  { startTime: 8139.39, person: 'Karol', text: ' Thank you for the wonderful conversation.' },
  { startTime: 8141.87, person: 'Karol', text: " It's been splendid." },
  {
    startTime: 8143.37,
    person: 'Karol',
    text: " I'll probably see you tomorrow then on the other session in that sense."
  },
  {
    startTime: 8148.79,
    person: 'Karol',
    text: ' Because I might have enough time to join the dialogue in Art of Thinking.'
  },
  { startTime: 8157.11, person: 'Woody', text: ' Yes.' },
  {
    startTime: 8158.59,
    person: 'Karol',
    text: " And if anybody is still with us, I encourage you to also join that because these are always interesting workshops, interesting exploratory topics to just go through and figure out maybe there's something of value."
  },
  {
    startTime: 8171.29,
    person: 'Karol',
    text: ' And exploring is always of value, whether or not the outcome is actually useful.'
  },
  {
    startTime: 8176.33,
    person: 'Karol',
    text: ' But just the act of exploration journey is always extremely useful.'
  },
  {
    startTime: 8181.71,
    person: 'Karol',
    text: ' So I implore everybody to hop onto that tomorrow and see what comes out of it.'
  },
  {
    startTime: 8188.45,
    person: 'Karol',
    text: " And before we go away, in two weeks time, because next week we don't have a live session, but in two weeks time, we're actually talking about neurotypicality in IT."
  },
  {
    startTime: 8201.709,
    person: 'Karol',
    text: ' And joining me for that session will be Joanna Gruszczyńska, a job and ADHD coach.'
  },
  { startTime: 8208.91, person: 'Karol', text: ' And Joanna works with a lot of people from IT.' },
  {
    startTime: 8214.049,
    person: 'Karol',
    text: ' As she told me, 9 out of 10 of her clients are actually IT people.'
  },
  {
    startTime: 8219.629,
    person: 'Karol',
    text: ' So that might be quite an interesting conversation to see how the way our brain works actually influences the way we work.'
  },
  {
    startTime: 8227.11,
    person: 'Karol',
    text: ' So tying it in also to our conversation here of symptoms and problems, this might be an exploration of a very specific type of a problem.'
  },
  { startTime: 8236.83, person: 'Karol', text: ' I love it.' },
  { startTime: 8237.59, person: 'Karol', text: " That we'll be having." },
  {
    startTime: 8239.41,
    person: 'Karol',
    text: ' So that said, Woody, thank you again for joining us today.'
  },
  { startTime: 8245.87, person: 'Karol', text: ' Thank you.' },
  {
    startTime: 8246.17,
    person: 'Karol',
    text: ' And everybody have a lovely, whatever that is, morning, afternoon, evening, or night.'
  },
  { startTime: 8253.45, person: 'Woody', text: " That's right." }
])
</script>

<style scoped></style>
