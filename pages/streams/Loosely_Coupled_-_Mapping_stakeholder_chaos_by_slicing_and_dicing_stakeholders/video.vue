<template>
  <div class="w-full">
    <StreamLayout
      :transcript="transcript"
      name="Loosely Coupled - Mapping stakeholder chaos by slicing and dicing stakeholders"
      video-id="Cd7y2zU9A4k"
    />
  </div>
</template>

<script lang="ts" setup>
const transcript = ref([
  {
    startTime: 74.25,
    person: 'Karol',
    text: ' Good morning, good afternoon, and good evening, everybody, and welcome to another episode of Loosely Coupled by Bridging the Gap.'
  },
  {
    startTime: 81.99,
    person: 'Karol',
    text: " My name is Karol Skrzymowski, and I just brewed myself a fresh cup of coffee for this lovely evening just to survive to the end of the day because it's been a long day today."
  },
  {
    startTime: 93.49,
    person: 'Karol',
    text: " But we do have a very, very interesting topic at hand, one that I don't really know that much about because I'm not a business analyst, although sometimes I have to be, and this is one of my biggest challenges and problems as an integration architect that I do actually have to do business analysis, and sometimes I have no idea what I'm doing."
  },
  {
    startTime: 115.31,
    person: 'Karol',
    text: ' So today, to shine some light on business analysis and especially stakeholder management and understanding your stakeholders, we have a lovely guest hailing to us from Canada, Pamela Patterson, and Pamela is a senior tech consultant with a very, very deep expertise in business analysis and project management.'
  },
  {
    startTime: 138.83,
    person: 'Karol',
    text: ' Pamela works for a lot of organisations, wrote, I believe, two international bestsellers as books on the topic or relevant, and well, has been teaching stakeholder management and interviewing stakeholders for quite a while.'
  },
  {
    startTime: 155.43,
    person: 'Karol',
    text: ' And I met Pamela a year ago before DDD Europe 25.'
  },
  {
    startTime: 160.87,
    person: 'Karol',
    text: ' I was in an amazing conversation before and during a conference, so I want you guys to meet Pamela as well.'
  },
  { startTime: 168.11, person: 'Karol', text: ' So, Pamela, welcome to the show.' },
  { startTime: 170.39, person: 'Pamela', text: ' Thank you very much for having me.' },
  { startTime: 172.09, person: 'Karol', text: ' Ah, wonderful to have you.' },
  {
    startTime: 174.05,
    person: 'Karol',
    text: ' I always enjoyed our conversation, so why not have a conversation on the show about business analysis, and more specifically, stakeholders at this point.'
  },
  { startTime: 184.81, person: 'Karol', text: ' So, please do tell.' },
  {
    startTime: 187.35,
    person: 'Karol',
    text: ' First of all, why are you even doing business analysis?'
  },
  { startTime: 194.73, person: 'Karol', text: ' Why the drive in that field?' },
  {
    startTime: 197.29,
    person: 'Karol',
    text: " Because you're not only doing it as a consultant, you're also teaching, and you're a speaker at conferences, you wrote books, and this is all a lot of work."
  },
  { startTime: 206.65, person: 'Karol', text: " So, what's the drive there?" },
  {
    startTime: 209.35,
    person: 'Pamela',
    text: ' Well, I think I love people, and I love doing solutions, and I love troubleshooting, and I love visioning, and I love the front-end work, working with the business and bringing in a new product or service.'
  },
  {
    startTime: 223.27,
    person: 'Pamela',
    text: " And I also have a master's in IT and systems engineering, so I'm technically a systems engineer as well, but I really love the business analysis part of things, just because I think it's interesting."
  },
  {
    startTime: 236.65,
    person: 'Pamela',
    text: " I think working with people who are excited about getting a new product or service is exciting as well, and yeah, it's just a whole bunch of fun."
  },
  { startTime: 245.19, person: 'Karol', text: ' A whole bunch of fun.' },
  { startTime: 247.25, person: 'Karol', text: ' Okay.' },
  {
    startTime: 248.15,
    person: 'Karol',
    text: " So, just a disclaimer, because I already see the comments, which unfortunately didn't land in our studio for some reason, but Annegret, our colleague from DDD Europe, really hopes that the stakeholders are not literally sliced and diced during the stream, so just to do this disclaimer, no stakeholders were harmed in the preparation for this session."
  },
  { startTime: 273.73, person: 'Karol', text: ' Just to be fair.' },
  { startTime: 275.71, person: 'Karol', text: ' All are still alive and well.' },
  { startTime: 277.77, person: 'Pamela', text: " It's a good disclaimer." },
  { startTime: 279.03, person: 'Pamela', text: " It's good to clarify that." },
  { startTime: 282.35, person: 'Karol', text: ' All right.' },
  {
    startTime: 283.31,
    person: 'Karol',
    text: " So, slicing and dicing stakeholders, so we're mapping the chaos."
  },
  {
    startTime: 290.19,
    person: 'Karol',
    text: " So, what's the core problem with stakeholder management, and what's the chaos?"
  },
  {
    startTime: 297.03,
    person: 'Karol',
    text: " Can we just try to define the problem space where we're at?"
  },
  { startTime: 302.83, person: 'Pamela', text: ' Sure.' },
  {
    startTime: 303.41,
    person: 'Pamela',
    text: " I think that it's the tools that most people have access to are very linear."
  },
  {
    startTime: 309.17,
    person: 'Pamela',
    text: " So, they'll list the stakeholder, like the stakeholder register, or they'll list the stakeholder roles and responsibilities, the area in a box, what they're responsible for and what they'll talk about, and in fact, it doesn't really work like that."
  },
  { startTime: 325.83, person: 'Pamela', text: ' Stakeholders are not linear.' },
  { startTime: 327.71, person: 'Pamela', text: " Stakeholders can't be put in boxes." },
  { startTime: 330.01, person: 'Pamela', text: " There's a lot of dynamics between stakeholders." },
  {
    startTime: 333.73,
    person: 'Pamela',
    text: " There's very few books or courses that will tell you what you need to know about stakeholders before you get into the room with them."
  },
  {
    startTime: 344.55,
    person: 'Pamela',
    text: ' Sometimes we are just literally thrown into a room.'
  },
  {
    startTime: 348.85,
    person: 'Pamela',
    text: " There's 20 stakeholders there we need to talk to, and somehow we need to figure our way through it, but nobody really tells us how."
  },
  {
    startTime: 357.71,
    person: 'Pamela',
    text: " So, I think of stakeholders as more of a web than a linear box on an org chart, and that's where it becomes difficult because where do we get this information from to think about stakeholders in a different way?"
  },
  { startTime: 375.09, person: 'Karol', text: ' Right.' },
  {
    startTime: 376.55,
    person: 'Karol',
    text: ' So, the way I always seen stakeholders through mostly from documentation, really, project documentation or something derivative of a contract, the biggest piece of information I got from these kind of documents was the RACI, Responsible, Accountable, yeah.'
  },
  { startTime: 403.81, person: 'Pamela', text: ' Consulting and Informed.' },
  {
    startTime: 405.75,
    person: 'Karol',
    text: ' Consulting and Informed, yes, precisely, and other variations of that table because that table has variations to it with other roles in there.'
  },
  {
    startTime: 416.99,
    person: 'Karol',
    text: " So, mostly, it is from more of a legal perspective than actual usable stakeholder management perspective just to outline who is responsible for what, who is accountable for what, and who's going to be consulted, and that's it, and then I have a list of people that gives me absolutely zero meaning towards how I'm going to, how am I supposed to work with those people, right?"
  },
  {
    startTime: 443.49,
    person: 'Karol',
    text: " I only know that they're either accountable or responsible."
  },
  {
    startTime: 446.77,
    person: 'Karol',
    text: ' The difference is that they either oversee or do, right?'
  },
  { startTime: 450.15, person: 'Karol', text: ' Okay, fantastic, but what are their goals?' },
  {
    startTime: 453.73,
    person: 'Karol',
    text: ' What are their interests in this particular project?'
  },
  { startTime: 457.01, person: 'Karol', text: ' What stakes they got going?' },
  {
    startTime: 459.31,
    person: 'Karol',
    text: ' Is this a life-and-death situation for their career, or is this just another project in the company that nobody cares about?'
  },
  {
    startTime: 470.17,
    person: 'Karol',
    text: " This always was a problem for me, and I didn't even realise that this is a problem for me until I, well, started chatting with you last year and understanding more, a little bit more, digging into the business analysis side and then actually starting learning something, and that was like, oh, that actually makes sense."
  },
  { startTime: 490.39, person: 'Karol', text: ' Business analysis hat on.' },
  { startTime: 491.89, person: 'Karol', text: " Let's do this, right?" },
  {
    startTime: 495.27,
    person: 'Pamela',
    text: " Yeah, people don't show up well on just a box, and what you're kind of alluding to is how well do I know the people that I'm working with?"
  },
  {
    startTime: 505.35,
    person: 'Pamela',
    text: ' Do I understand what their objections are to, you know, is it to be part of the project?'
  },
  {
    startTime: 512.71,
    person: 'Pamela',
    text: " You know, are people, when they're apathetic or they're not that engaged, what's the root cause of that?"
  },
  {
    startTime: 519.83,
    person: 'Pamela',
    text: " I mean, are they just, they're out of time, they're out of gas, they don't function well in the morning?"
  },
  {
    startTime: 527.67,
    person: 'Pamela',
    text: ' I mean, it could be something as simple as that.'
  },
  {
    startTime: 530.43,
    person: 'Pamela',
    text: ' They have a small baby at home, they have had bad experiences with that particular group of developers.'
  },
  {
    startTime: 538.83,
    person: 'Pamela',
    text: ' I mean, you need to really look at that person and all sides of that person and even how they absorb information.'
  },
  {
    startTime: 547.05,
    person: 'Pamela',
    text: ' I mean, most people are visual thinkers and visual learners, especially in IT and tech, and if our meetings are always verbal, I mean, I tell people when I do these workshops and conferences, I think, what if this entire conference was verbal?'
  },
  {
    startTime: 566.81,
    person: 'Pamela',
    text: ' No PowerPoints, no nothing, no handouts, nothing before, nothing after, how much would you absorb as an attendee?'
  },
  {
    startTime: 576.45,
    person: 'Pamela',
    text: " And they say, well, probably not much, and I'm like, that's your stakeholder experience."
  },
  { startTime: 582.85, person: 'Pamela', text: ' So, are your meetings entirely verbal?' },
  {
    startTime: 586.09,
    person: 'Pamela',
    text: " You know, you could have the best stakeholder, the most willing stakeholder, you could have done so much research, you could be the best person ever in what you do, but they're not absorbing it."
  },
  {
    startTime: 597.39,
    person: 'Pamela',
    text: " So, it's stakeholder chaos and stakeholder mapping, it's part of the solution, you know, to map out your stakeholders, their roles and responsibilities on the RACI chart or, you know, whatever."
  },
  {
    startTime: 612.05,
    person: 'Pamela',
    text: ' I mean, these are all good tools, but keep going, you know, keep going with getting to know your stakeholders.'
  },
  {
    startTime: 617.67,
    person: 'Karol',
    text: " Yeah, because when projects do this RACI tool, that's pretty much it, there's no iteration over it, unless somebody explicitly changes a role or leaves the company or leaves the project, right?"
  },
  {
    startTime: 632.45,
    person: 'Karol',
    text: ' So, then nobody looks at it, nobody updates that, nobody touches that ever, and this is just a dead piece of data somewhere sitting in a work dock on the server.'
  },
  {
    startTime: 646.31,
    person: 'Karol',
    text: " So, it just doesn't contribute to anything other than, yeah, legal, maybe, aspects."
  },
  { startTime: 653.25, person: 'Pamela', text: ' Legal.' },
  { startTime: 654.31, person: 'Pamela', text: ' Yeah, legal.' },
  { startTime: 654.93, person: 'Pamela', text: ' I mean, you have' },
  {
    startTime: 655.53,
    person: 'Pamela',
    text: ' this official RACI or your official stakeholder register, and then you have reality, you know,'
  },
  {
    startTime: 661.91,
    person: 'Pamela',
    text: ' you have the water cooler conversations, you have the best friends who go to lunch,'
  },
  {
    startTime: 668.33,
    person: 'Pamela',
    text: " you know, you have the power differentials, you have one boss who's trying to, you know,"
  },
  {
    startTime: 674.69,
    person: 'Pamela',
    text: " just trying to find their way, if it's a new position, trying to find their way, find their"
  },
  {
    startTime: 679.61,
    person: 'Pamela',
    text: ' feet, and maybe wants to talk too much in the meeting, and so his or her people are not talking'
  },
  {
    startTime: 686.97,
    person: 'Pamela',
    text: " as much, like, there's so many different elements of stakeholder chaos to look at and consider,"
  },
  {
    startTime: 694.03,
    person: 'Pamela',
    text: " and I mean, it's, the way that we start is we just start, you know, we just start"
  },
  {
    startTime: 700.49,
    person: 'Pamela',
    text: ' getting to know our stakeholders more than just a box on a chart.'
  },
  {
    startTime: 706.67,
    person: 'Karol',
    text: " Okay, so, let's make an assumption that a large number of our audience at Lucy coupled are actually consultants."
  },
  {
    startTime: 716.67,
    person: 'Karol',
    text: " They're not in-house developers, architects, business analysts, they work as consultants, and they just hop into a company, help them for some time, and they move on to the next project."
  },
  {
    startTime: 730.85,
    person: 'Karol',
    text: " So, they don't stay very long, and usually learning all that context takes quite a long time."
  },
  {
    startTime: 740.03,
    person: 'Karol',
    text: ' So, if I would be going to a new client as a consultant, how can I start with that stakeholder chaos to turn it into something actually usable?'
  },
  {
    startTime: 750.55,
    person: 'Pamela',
    text: " Okay, this is a great question, because they're at a real disadvantage, the consultants, when they're going into a new environment, and that's been my life for 20 years."
  },
  { startTime: 761.05, person: 'Pamela', text: " I've been at a disadvantage." },
  {
    startTime: 763.97,
    person: 'Karol',
    text: ' So, you have plenty of experience to share about how to deal with that disadvantage.'
  },
  { startTime: 768.49, person: 'Karol', text: " Ah, yes, let's go." },
  {
    startTime: 770.95,
    person: 'Pamela',
    text: " So, the first thing that I do is I find out, I mean, you have a contact person who's inside who, before you start the project, and I start asking questions about the people who are going to be involved, and this might be kind of the beginning of that box on the chart."
  },
  {
    startTime: 789.13,
    person: 'Pamela',
    text: " So, for example, and I find out where they work, what department they work for, I go look them up on LinkedIn, because if you can see somebody's career progression, you know, if they can see that maybe they are a junior person that has just joined the team, just joined the company."
  },
  {
    startTime: 808.55,
    person: 'Pamela',
    text: " So, then if you have somebody else who's been with the company for 20 years, and they haven't moved, or they haven't switched departments from developer or sales engineer to accounting or whatever, people's jobs and people's education background and where they've been tells you a little bit about them."
  },
  {
    startTime: 831.57,
    person: 'Pamela',
    text: ' You know, like if the person is in sales versus accounting, I mean, which one do we think is going to be more sticking to the rules?'
  },
  {
    startTime: 843.47,
    person: 'Pamela',
    text: ' You know, is it going to be sales or accounting?'
  },
  {
    startTime: 847.57,
    person: 'Pamela',
    text: " We know the auditing people, they're really sticking to the rules."
  },
  {
    startTime: 852.07,
    person: 'Pamela',
    text: " And so, sales might kind of, you know, because you have to understand their realities as well, and their objections, which is that they don't earn commissions when they're in a room with you, right?"
  },
  {
    startTime: 864.43,
    person: 'Pamela',
    text: ' So, they might try and kind of get this over done quickly, you know.'
  },
  {
    startTime: 869.77,
    person: 'Pamela',
    text: " So, it's about before you get into the room, before you take a step into that company's boardroom, find out as much as you can about these people."
  },
  {
    startTime: 881.33,
    person: 'Pamela',
    text: " And you know, your contact inside, and this is what I do, is I ask my contact inside, once I develop a good rapport with them and there's trust, is to say, okay, well, thank you for all of these names."
  },
  { startTime: 895.67, person: 'Pamela', text: ' This is terrific.' },
  { startTime: 897.09, person: 'Pamela', text: ' Now, tell me about these people.' },
  { startTime: 899.65, person: 'Pamela', text: ' Are they supportive of this project?' },
  { startTime: 902.27, person: 'Pamela', text: ' Are they not?' },
  {
    startTime: 904.01,
    person: 'Pamela',
    text: ' How much experience do they have on tech projects?'
  },
  { startTime: 908.39, person: 'Pamela', text: ' Are they, do they have time for this project?' },
  {
    startTime: 912.29,
    person: 'Pamela',
    text: " Or do they feel they don't have time for this project?"
  },
  {
    startTime: 915.39,
    person: 'Pamela',
    text: ' And I find out their strengths, their weaknesses, their objections from the perspective of one person.'
  },
  {
    startTime: 923.51,
    person: 'Pamela',
    text: ' You know, and one of the projects I worked on maybe a couple of years ago, I was told by my contact that this one person is really difficult.'
  },
  { startTime: 933.61, person: 'Pamela', text: " She's very, very difficult." },
  { startTime: 935.65, person: 'Pamela', text: ' And I was going to have problems with her.' },
  { startTime: 937.99, person: 'Pamela', text: ' And I just park that.' },
  { startTime: 940.07, person: 'Pamela', text: " I don't believe that." },
  { startTime: 941.73, person: 'Pamela', text: ' I just park it.' },
  {
    startTime: 943.03,
    person: 'Pamela',
    text: ' And then I might spend a little bit more time getting to know that person and developing that relationship and that trust than somebody else who was not labelled difficult.'
  },
  { startTime: 956.19, person: 'Pamela', text: ' Right?' },
  { startTime: 956.55, person: 'Pamela', text: " So, and in fact, she wasn't difficult." },
  {
    startTime: 960.21,
    person: 'Pamela',
    text: ' She was just feeling not heard and not appreciated by management.'
  },
  {
    startTime: 965.83,
    person: 'Pamela',
    text: " So, that's a good starting point is I mentioned a lot of different things."
  },
  {
    startTime: 971.91,
    person: 'Pamela',
    text: ' I mentioned going on to LinkedIn, Google their name, see what their career progression is, and talk to your internal contact and get their perception about those different people and also the dynamics.'
  },
  {
    startTime: 986.97,
    person: 'Pamela',
    text: " Because, you know, we have, we start at the individual, you know, which is kind of like a dot, a free-floating dot, but then we're surrounded by people, which is the team that force constraints on people, right?"
  },
  { startTime: 1001.37, person: 'Pamela', text: ' Impact them.' },
  { startTime: 1002.79, person: 'Pamela', text: ' So, also ask at the team level.' },
  {
    startTime: 1005.79,
    person: 'Pamela',
    text: ' So, ask at the individual level about this person and ask at the team level.'
  },
  {
    startTime: 1011.51,
    person: 'Pamela',
    text: " And that'll give you a really good starting point in, you know, you always want to know, have this information before you get into that room."
  },
  {
    startTime: 1020.41,
    person: 'Pamela',
    text: ' Those kinds of things will give you a good starting point.'
  },
  {
    startTime: 1024.41,
    person: 'Karol',
    text: ' I remember you told, first of all, the people labelled difficult and then ask the team and kind of triggered a memory of me watching one of the talks from Simon Sinek.'
  },
  {
    startTime: 1040.27,
    person: 'Karol',
    text: ' And he was talking about how Navy SEALs chose people to the team.'
  },
  {
    startTime: 1046.79,
    person: 'Karol',
    text: ' They were not basing that on KPIs, but on trust indicators.'
  },
  { startTime: 1051.71, person: 'Karol', text: ' So, performance versus trust, right?' },
  {
    startTime: 1054.47,
    person: 'Karol',
    text: ' And then they, if somebody was high performance, low trust, that was definitely not a go for that person to join the Navy SEALs team.'
  },
  {
    startTime: 1063.37,
    person: 'Karol',
    text: " And it's like, well, this is normally where we, when we work in corporate environments, we're mostly looking at, unfortunately, performance, which is not something that we actually can indicate if somebody's good or not, because it's also about being trustworthy and being available to solve problems, helping solve problems, et cetera."
  },
  {
    startTime: 1091.76,
    person: 'Karol',
    text: " And then being labelled difficult, you mentioned that the person wasn't difficult."
  },
  { startTime: 1098.04, person: 'Karol', text: ' That person was just frustrated.' },
  {
    startTime: 1101.64,
    person: 'Karol',
    text: ' Unheard, was voicing concerns, and the concerns probably were never addressed, which then means that most likely, they became problems for that person.'
  },
  {
    startTime: 1116.44,
    person: 'Karol',
    text: " And then if I look at it, it's like, in the talk from Simon Sinek, he said, like, if you go to a team and ask who's the arsehole, every team has this kind of high performing, low trust person, they basically would dub an ale in the team."
  },
  {
    startTime: 1136.78,
    person: 'Karol',
    text: " And that's already some sort of an indication from perspectives of what to watch for."
  },
  {
    startTime: 1146.64,
    person: 'Karol',
    text: " And it not mean label that person, like you said, that it didn't label that person difficult."
  },
  {
    startTime: 1152.18,
    person: 'Karol',
    text: ' But then that might be an indicator that there is a story behind that.'
  },
  {
    startTime: 1157.8,
    person: 'Karol',
    text: ' That there might be an indicator that there is something actually to dig into.'
  },
  {
    startTime: 1163.44,
    person: 'Karol',
    text: ' And not only relationship wise, human wise, but actually business wise.'
  },
  {
    startTime: 1168.22,
    person: 'Karol',
    text: " At least that's my understanding of these kind of labels."
  },
  {
    startTime: 1170.98,
    person: 'Karol',
    text: " But then again, I'm a little bit educated on psychology, thanks to my wife, who's a business coach, that she's constantly saying to me, if somebody is acting out with emotions at you, it's not about you, it's about them."
  },
  {
    startTime: 1189.76,
    person: 'Karol',
    text: " Be gentle and ask yourself, what's the story behind that person?"
  },
  { startTime: 1193.44, person: 'Karol', text: ' Why are they acting out with those emotions?' },
  {
    startTime: 1196.2,
    person: 'Karol',
    text: ' So somebody being difficult is actually somebody who could probably show us a lot about the problems of the company.'
  },
  {
    startTime: 1203.44,
    person: 'Karol',
    text: " If we're talking about the corporate setting or company setting, right?"
  },
  {
    startTime: 1208.1,
    person: 'Pamela',
    text: ' Yeah, performance is a very interesting concept, because you can have a very underperforming team and change the coach.'
  },
  {
    startTime: 1219.54,
    person: 'Pamela',
    text: ' And then the next year, they win the medal, right?'
  },
  {
    startTime: 1222.58,
    person: 'Pamela',
    text: " I mean, it's about systems thinking about that person, and that team and that organisation and all those levels that are piled on top of that person."
  },
  { startTime: 1235.6, person: 'Pamela', text: ' But trust is a deal breaker.' },
  {
    startTime: 1240.4,
    person: 'Pamela',
    text: " If you can't trust the person that you work with, you need to put up some protective barriers or keep email trails or whatever."
  },
  {
    startTime: 1249.26,
    person: 'Pamela',
    text: " I mean, we're all told as consultants, you need to have accountants and lawyers that you trust."
  },
  {
    startTime: 1256.16,
    person: 'Pamela',
    text: " That's the most important thing about the people that you surround yourself with."
  },
  {
    startTime: 1262.48,
    person: 'Pamela',
    text: ' I mean, I have seen some situations where you could turn around trust.'
  },
  {
    startTime: 1266.78,
    person: 'Pamela',
    text: ' So there was maybe some situations that it looked like trust was the issue.'
  },
  {
    startTime: 1272.44,
    person: 'Pamela',
    text: " But it was, like you say, the story behind that, you know, what's going on underneath that?"
  },
  { startTime: 1278.94, person: 'Pamela', text: ' How long has it been going on?' },
  { startTime: 1280.44, person: 'Pamela', text: " And what's the root cause of that?" },
  {
    startTime: 1282.92,
    person: 'Pamela',
    text: ' And then you can have some hope of turning things around.'
  },
  {
    startTime: 1287.98,
    person: 'Karol',
    text: " But that said, it's not only about the stakeholder chaos."
  },
  {
    startTime: 1294.51,
    person: 'Karol',
    text: " It's not only about hierarchy charts in a company, team compositions."
  },
  {
    startTime: 1301.63,
    person: 'Karol',
    text: " It's, like you said, a web, because it's about those interpersonal dynamics between all those various stakeholders, also those that are unseen, because they might not be on the org chart."
  },
  { startTime: 1316.38, person: 'Karol', text: ' Right?' },
  { startTime: 1318.88, person: 'Karol', text: " So let's dig into this a little bit." },
  {
    startTime: 1321.8,
    person: 'Karol',
    text: " What kind of stakeholders you might not see on an org chart, or not see as a dependency, because they're not visible through the org chart as a dependency in stakeholder mapping and stakeholder management?"
  },
  { startTime: 1335.26, person: 'Pamela', text: ' Sure.' },
  {
    startTime: 1336.5,
    person: 'Pamela',
    text: ' The ones with influence, and maybe the ones who are impacted, but have been left out of the game.'
  },
  {
    startTime: 1345.58,
    person: 'Pamela',
    text: " You know, they've been left out of the project."
  },
  {
    startTime: 1348.86,
    person: 'Pamela',
    text: " So people with influence might be, they've been with the company for 20 years."
  },
  {
    startTime: 1355.9,
    person: 'Pamela',
    text: ' And they have a very good relationship with the executives.'
  },
  {
    startTime: 1360.96,
    person: 'Pamela',
    text: ' And so you can have some backdoor influence on a project, or on decisions through that person.'
  },
  {
    startTime: 1369.58,
    person: 'Pamela',
    text: " Because there are people who are named to be on a project, but they're not necessarily the best people for that particular project at that particular time."
  },
  { startTime: 1380.72, person: 'Pamela', text: ' Maybe they are the ones who are available.' },
  {
    startTime: 1383.48,
    person: 'Pamela',
    text: " Maybe they're the ones who are not as busy as somebody else."
  },
  {
    startTime: 1388,
    person: 'Pamela',
    text: " So they're not that available, but they're not as busy as somebody else."
  },
  {
    startTime: 1391.5,
    person: 'Pamela',
    text: " Or maybe they're the ones who, well, we want to put this person on this project because they need experience."
  },
  {
    startTime: 1398.92,
    person: 'Pamela',
    text: " And so they're kind of learning experience underneath you, which is fine."
  },
  { startTime: 1404.5, person: 'Pamela', text: ' I mean, we all need to learn and grow.' },
  {
    startTime: 1406.48,
    person: 'Pamela',
    text: " But as long as you're aware of that, that you might not get what you need from that person, but that your role with that person is more of a training role and a mentoring role, that kind of thing."
  },
  {
    startTime: 1420.14,
    person: 'Pamela',
    text: ' So it really does come back to, do you know your stakeholders?'
  },
  {
    startTime: 1425.08,
    person: 'Pamela',
    text: ' Do you understand kind of the hidden dynamics and forces in the team and the company?'
  },
  { startTime: 1432.16, person: 'Pamela', text: ' Do you know their background?' },
  {
    startTime: 1434.46,
    person: 'Pamela',
    text: " Do you know if they're supportive of this project?"
  },
  { startTime: 1436.68, person: 'Pamela', text: ' And if not, why not?' },
  {
    startTime: 1438.84,
    person: 'Pamela',
    text: ' What sort of constraints are they dealing with every day?'
  },
  { startTime: 1443.64, person: 'Karol', text: ' Okay.' },
  { startTime: 1447.51, person: 'Karol', text: " So let's say we have dug into the background." },
  {
    startTime: 1454.97,
    person: 'Karol',
    text: " Let's say we asked that contact person at the company."
  },
  {
    startTime: 1458.81,
    person: 'Karol',
    text: ' We started sourcing information, got a view of who are the key figures.'
  },
  {
    startTime: 1462.97,
    person: 'Karol',
    text: " We did some background digging, let's say open source intelligence in my case, because I really like digging into things just to see what I can find, which sometimes bears very interesting results."
  },
  { startTime: 1477.67, person: 'Karol', text: " We're starting." },
  {
    startTime: 1479.55,
    person: 'Karol',
    text: " We're setting up in a completely new environment."
  },
  {
    startTime: 1481.89,
    person: 'Karol',
    text: " We just got the laptop because they mandate us to get the company laptop so we don't use our consulting equipment."
  },
  { startTime: 1489.41, person: 'Karol', text: ' Okay.' },
  { startTime: 1491.03, person: 'Karol', text: " We're there." },
  { startTime: 1492.57, person: 'Karol', text: " We're in the office." },
  {
    startTime: 1494.17,
    person: 'Karol',
    text: " We're saying hellos to all those people that we were noted out."
  },
  { startTime: 1500.17, person: 'Karol', text: ' What now?' },
  { startTime: 1501.07, person: 'Karol', text: ' What then?' },
  {
    startTime: 1501.91,
    person: 'Karol',
    text: " We're basically, okay, we have a bunch of information."
  },
  {
    startTime: 1506.25,
    person: 'Karol',
    text: " We have a, let's say cloud, word cloud chaos of info, some loosely attached strings to certain names because we did our research."
  },
  {
    startTime: 1516.62,
    person: 'Karol',
    text: " And we just walked into the office and we're actually meeting those people."
  },
  {
    startTime: 1522.46,
    person: 'Karol',
    text: ' How are we now supposed to, well, on top of all the cognitive overwhelm of meeting people, what should we put our attention to stakeholder management wise?'
  },
  { startTime: 1536.88, person: 'Pamela', text: ' Okay.' },
  { startTime: 1537.58, person: 'Pamela', text: ' So I want to back it up a little bit.' },
  { startTime: 1540.1, person: 'Karol', text: ' Okay.' },
  {
    startTime: 1540.62,
    person: 'Pamela',
    text: " So you mentioned you're in the office, you're meeting people."
  },
  { startTime: 1544.88, person: 'Pamela', text: ' I want to back it up.' },
  { startTime: 1546.26, person: 'Karol', text: ' Okay.' },
  {
    startTime: 1546.82,
    person: 'Pamela',
    text: ' I want to back it up to your personal planning process.'
  },
  {
    startTime: 1552.68,
    person: 'Pamela',
    text: " Um, so figuring out what artefacts you need to deliver and who's going to contribute to them and setting up those meetings."
  },
  {
    startTime: 1562.58,
    person: 'Pamela',
    text: ' And that comes with working with your contact internally in the company.'
  },
  {
    startTime: 1567.12,
    person: 'Pamela',
    text: ' So I do a lot of process maps and I do a lot of requirements and user stories.'
  },
  {
    startTime: 1572.7,
    person: 'Pamela',
    text: ' So I would want to be talking to my contact about who are the best people to provide input into these deliverables so I can set up, start setting up those meetings.'
  },
  { startTime: 1584.92, person: 'Karol', text: ' Right.' },
  {
    startTime: 1585.54,
    person: 'Pamela',
    text: ' And I would also ask, what is their level of experience in doing this, in doing requirements and process maps?'
  },
  {
    startTime: 1594.22,
    person: 'Pamela',
    text: " And they might tell me, well, you know, they're, they've been with a company for a long time, but they've never been on a process project before."
  },
  { startTime: 1601.94, person: 'Pamela', text: ' So I say, okay.' },
  {
    startTime: 1603.64,
    person: 'Pamela',
    text: ' So now the dynamic that I have is that some people in the room might not understand the deliverable.'
  },
  {
    startTime: 1614.52,
    person: 'Pamela',
    text: ' They might not understand the process that happens with the deliverable when other people will.'
  },
  {
    startTime: 1620.08,
    person: 'Pamela',
    text: " And when you have that kind of a dynamic and you understand that, and remember, we're not even in the room yet."
  },
  { startTime: 1625.82, person: 'Pamela', text: ' Okay.' },
  { startTime: 1626.04, person: 'Pamela', text: " We're still figuring out who we've got." },
  {
    startTime: 1629.3,
    person: 'Pamela',
    text: ' And when we have that kind of dynamic, what I tend to do is take those less experienced people aside and have a pre-meeting and say, you know what, I understand this is your first time in creating process maps.'
  },
  { startTime: 1646.16, person: 'Pamela', text: ' So I want to go through process mapping.' },
  {
    startTime: 1649.22,
    person: 'Pamela',
    text: " And so you have a good foundation and a good understanding of what we're going to do in the meeting so that you, it's going to be easier on you."
  },
  {
    startTime: 1658.06,
    person: 'Pamela',
    text: " And coincidentally, it's also going to be easier on me because I'm going to now have an equal contributor in the meeting."
  },
  {
    startTime: 1666.34,
    person: 'Pamela',
    text: ' So this is that slicing and dicing of stakeholders that came into the title of this live stream.'
  },
  { startTime: 1674.56, person: 'Pamela', text: ' How can you slice and dice them?' },
  {
    startTime: 1677.28,
    person: 'Pamela',
    text: ' Which people are you going to put into the same room?'
  },
  {
    startTime: 1681.52,
    person: 'Pamela',
    text: " And which ones are like a cat and a mouse, and you should never have them in the same room because there's different dynamics."
  },
  {
    startTime: 1689.44,
    person: 'Pamela',
    text: " Maybe people are struggling for resources, whatever it is, there's a history, whatever it is."
  },
  {
    startTime: 1696.42,
    person: 'Karol',
    text: ' Would that pre-meeting, given their level of experience, would that be a good place to source further information about the dynamics between people?'
  },
  {
    startTime: 1709.5,
    person: 'Pamela',
    text: " When it comes to dynamics between people, as a consultant, I'm a little careful and I step a little lightly around asking questions like that."
  },
  {
    startTime: 1718.54,
    person: 'Pamela',
    text: ' I would ask my trusted contact for their perspective.'
  },
  {
    startTime: 1724.2,
    person: 'Pamela',
    text: ' And I say perspective because other people have different ideas of what the dynamics are.'
  },
  { startTime: 1730.14, person: 'Pamela', text: ' But I might ask a question sideways.' },
  {
    startTime: 1733.96,
    person: 'Pamela',
    text: " I might not ask a direct question, I'll say, what are the dynamics between these two teams?"
  },
  {
    startTime: 1742.36,
    person: 'Pamela',
    text: " But I might ask a question that's sideways of that person."
  },
  {
    startTime: 1747.02,
    person: 'Pamela',
    text: ' That maybe, have you worked with this team before?'
  },
  { startTime: 1749.92, person: 'Pamela', text: ' How did that go?' },
  {
    startTime: 1751.44,
    person: 'Pamela',
    text: ' Even if I have other information that tells me otherwise, I want to keep being objective.'
  },
  { startTime: 1758.2, person: 'Pamela', text: " I don't want to influence their answer." },
  { startTime: 1762.38, person: 'Pamela', text: " So it's a good point that you raise." },
  { startTime: 1765.74, person: 'Pamela', text: ' Who can you ask for information?' },
  {
    startTime: 1769.34,
    person: 'Pamela',
    text: ' And I ask the same question to multiple people without them even knowing about it.'
  },
  { startTime: 1775.68, person: 'Pamela', text: " And I'm still mapping out my stakeholders." },
  {
    startTime: 1778.38,
    person: 'Pamela',
    text: ' I might say, well, how did these two groups get along?'
  },
  { startTime: 1781.72, person: 'Pamela', text: ' And somebody will say, great.' },
  {
    startTime: 1783.72,
    person: 'Pamela',
    text: " Somebody else will say, oh, there's been a long-standing problem between those two."
  },
  {
    startTime: 1789.32,
    person: 'Pamela',
    text: ' And my old journalism professor would be happy to hear that I ask one person, I ask another person, and then the third person is the tiebreaker, where I come to my, form my own reality about what is true.'
  },
  { startTime: 1805.92, person: 'Pamela', text: ' True is always in quotes, of course.' },
  { startTime: 1808.06, person: 'Karol', text: ' Subjective, yes.' },
  {
    startTime: 1809.94,
    person: 'Karol',
    text: ' Because you still have just a partial view on the situation.'
  },
  {
    startTime: 1814.56,
    person: 'Karol',
    text: ' And there is, in relationships or in companies, there is very, very little to objective truth.'
  },
  {
    startTime: 1822.88,
    person: 'Karol',
    text: " Most of the truth there is subjective anyways, unless it's written down and signed by all parties involved, then it becomes somewhat objective, somewhat given that they still might understand the things they signed differently, right?"
  },
  { startTime: 1840.48, person: 'Pamela', text: " Isn't that the case?" },
  {
    startTime: 1841.74,
    person: 'Pamela',
    text: ' Do you know what they told us in journalism school?'
  },
  {
    startTime: 1843.94,
    person: 'Pamela',
    text: ' And this was, I was in journalism and communications before I went into tech.'
  },
  {
    startTime: 1849.02,
    person: 'Pamela',
    text: " They said, you stop being objective the day that you're born."
  },
  { startTime: 1854.32, person: 'Karol', text: " It's pretty much true." },
  {
    startTime: 1856.2,
    person: 'Pamela',
    text: ' I thought it was the greatest quote, you know, what neighbourhood, what culture, what country, you know, you stop being objective the day that you are born.'
  },
  {
    startTime: 1869.04,
    person: 'Karol',
    text: " Well, that's a fair point, because we all have our perspectives, we all have our backgrounds, we all have our problems that influence the way we work and interact with reality."
  },
  {
    startTime: 1878.4,
    person: 'Karol',
    text: ' And that gives us different lenses on reality just by being.'
  },
  {
    startTime: 1884.4,
    person: 'Karol',
    text: " I might have a headache, I didn't get enough sleep because my kids woke me up in the middle of the night, that already shifts my perspective."
  },
  { startTime: 1892, person: 'Karol', text: ' Same for everybody else.' },
  {
    startTime: 1893.88,
    person: 'Karol',
    text: " In that sense, they didn't get their morning coffee."
  },
  { startTime: 1897.82, person: 'Karol', text: " That's troublesome for some people." },
  {
    startTime: 1901.52,
    person: 'Karol',
    text: " Some people even should wear the shirt, don't talk to me before I have my coffee, right?"
  },
  { startTime: 1906.96, person: 'Karol', text: " So that's the truth." },
  { startTime: 1911.94, person: 'Karol', text: " There's no objective truth in that sense." },
  {
    startTime: 1914.22,
    person: 'Karol',
    text: " It's relationships, it's messy, it's a messy chaos."
  },
  {
    startTime: 1917.54,
    person: 'Karol',
    text: ' And this is even messier in companies, because there are layers of that chaos, I suppose.'
  },
  { startTime: 1924.66, person: 'Karol', text: ' Different layers.' },
  { startTime: 1926.26, person: 'Karol', text: ' Hierarchy is just one layer to it.' },
  {
    startTime: 1929.4,
    person: 'Pamela',
    text: " You know, what you're really looking for is a pattern, when it comes to interacting with somebody else."
  },
  {
    startTime: 1936.3,
    person: 'Pamela',
    text: " And there's a trust ladder that I came across, which I really like."
  },
  { startTime: 1941.26, person: 'Pamela', text: ' I should have brought a slide for it.' },
  {
    startTime: 1943.02,
    person: 'Pamela',
    text: " But it's consistency leads to believability, which leads to credibility, which leads to trust, and then true collaboration."
  },
  {
    startTime: 1955.42,
    person: 'Pamela',
    text: ' And this is true, you know, so not the one-offs, but what kind of pattern are we seeing in somebody else?'
  },
  {
    startTime: 1962.04,
    person: 'Pamela',
    text: " And I don't even mean it from a blame perspective, you know, if they are not contributing, or they don't provide meaningful contributions, digging into the root cause of that pattern."
  },
  { startTime: 1977.32, person: 'Pamela', text: ' So is it because they are not a verbal person?' },
  {
    startTime: 1981.28,
    person: 'Pamela',
    text: " Is it because they're extremely introverted, and are anxious around people?"
  },
  {
    startTime: 1987.36,
    person: 'Pamela',
    text: ' I mean, what are the root causes around that dynamic?'
  },
  { startTime: 1990.92, person: 'Pamela', text: ' You know, where you see those patterns?' },
  {
    startTime: 1994.28,
    person: 'Karol',
    text: " And there's plenty of patterns to look for, basically, in that sense."
  },
  {
    startTime: 1999.48,
    person: 'Karol',
    text: ' But that to be able to spot patterns, you either have to be autistic to get that really quick, or really well trained in that sense, right?'
  },
  { startTime: 2010.12, person: 'Karol', text: " Because it's patterns are not easy." },
  { startTime: 2012.24, person: 'Karol', text: ' These patterns are not easy to spot.' },
  {
    startTime: 2014.78,
    person: 'Karol',
    text: " Basically, they're usually very, very well hidden between the lines between conversations between meetings between reactions, sometimes very subtle."
  },
  {
    startTime: 2026.62,
    person: 'Karol',
    text: ' Or sometimes somebody walks in the room and the vibe completely changes, right?'
  },
  { startTime: 2030.12, person: 'Karol', text: " That's not very subtle at all." },
  { startTime: 2031.92, person: 'Karol', text: ' But it is a pattern.' },
  { startTime: 2037.19, person: 'Pamela', text: ' Yes.' },
  {
    startTime: 2037.37,
    person: 'Pamela',
    text: " And if you are a new consultant to an organisation, then you won't have the benefit of seeing patterns."
  },
  {
    startTime: 2045.17,
    person: 'Karol',
    text: " Yeah, that's I think that's one of the key problems of being a consultant in that sense, right?"
  },
  { startTime: 2052.17, person: 'Karol', text: ' That takes a while.' },
  {
    startTime: 2054.889,
    person: 'Karol',
    text: " Okay, so let's say we made our observations, we maybe spotted a few patterns, because we already interacted with a bunch of people."
  },
  { startTime: 2064.59, person: 'Karol', text: ' What can we do?' },
  {
    startTime: 2066.429,
    person: 'Karol',
    text: " Well, we planned our meetings, and now we're going into interviewing, right?"
  },
  {
    startTime: 2070.889,
    person: 'Karol',
    text: ' So we already maybe done one or interview or two.'
  },
  {
    startTime: 2076.42,
    person: 'Karol',
    text: ' If we have those interviews, and we ask relevant questions, usually on the subject matter of the project at hand, not exactly about relationships and stakeholders, to be fair, right?'
  },
  {
    startTime: 2088.9,
    person: 'Karol',
    text: ' So how should we build upon all the information we gather when working with our stakeholders for the next interviews, sessions, workshops, requirements, gatherings, all those things, because, of course, people are rushing towards those, but this is like, like you already explained, we need to first understand the stakeholders to be able to do those things.'
  },
  {
    startTime: 2116.98,
    person: 'Karol',
    text: ' But my hint is here that during those sessions, also things happen that we can pick up on and actually make them usable, actionable information for our stakeholder management and further slicing and dicing.'
  },
  {
    startTime: 2133.5,
    person: 'Karol',
    text: ' So what would we need to watch for when interviewing when doing workshops when gathering requirements?'
  },
  {
    startTime: 2141.22,
    person: 'Karol',
    text: " Well, that's again, depending on the role we might have, but these kind of aspects."
  },
  {
    startTime: 2148.94,
    person: 'Pamela',
    text: ' So you mentioned something very fundamental that all of us do really, which is interviews.'
  },
  {
    startTime: 2155.78,
    person: 'Pamela',
    text: " In one shape or another, we are doing interviews, we are, you know, kind of the definition of that is getting information, you know, it's a conversation with a purpose, kind of like now."
  },
  {
    startTime: 2168.68,
    person: 'Pamela',
    text: " And so when you're putting together your questions, you know, a lot of people might just pull up a list of questions that they used before, and walk into that room, and ignore and not understand how to capitalise on all of that stakeholder information that you got in your interview."
  },
  {
    startTime: 2191.66,
    person: 'Pamela',
    text: ' And so, you know, some of the information you can get from that stakeholder directly, you know, you can ask, is this is does this time work for you?'
  },
  { startTime: 2204.48, person: 'Pamela', text: ' Does this format work for you?' },
  { startTime: 2206.38, person: 'Pamela', text: ' Is there a better way to get information?' },
  {
    startTime: 2208.62,
    person: 'Pamela',
    text: " If you need to think about an answer, and then give it to me later by email, that's okay, too."
  },
  { startTime: 2215.54, person: 'Pamela', text: " So you're giving them options for input." },
  {
    startTime: 2218.96,
    person: 'Pamela',
    text: " But here's where knowing about your stakeholder is really going to help you in your interview."
  },
  {
    startTime: 2224.38,
    person: 'Pamela',
    text: " So let's say, for example, we have, we need to ask, I mean, this is a very simple example."
  },
  {
    startTime: 2231.84,
    person: 'Pamela',
    text: ' But we need to ask where they want the button on the screen.'
  },
  { startTime: 2236.28, person: 'Pamela', text: ' Okay.' },
  {
    startTime: 2237.6,
    person: 'Pamela',
    text: ' And you might, if we had two people, we had two stakeholders, one was a call centre agent, who uses the system, and needs to have that button there.'
  },
  {
    startTime: 2248.26,
    person: 'Pamela',
    text: ' And, you know, for ease of use and accessibility and everything else usability.'
  },
  {
    startTime: 2252.56,
    person: 'Pamela',
    text: ' Or so we have a call centre agent, or we have the CEO of the company.'
  },
  {
    startTime: 2258.16,
    person: 'Pamela',
    text: " And the gut reaction might be, well, of course, it's the call centre agent."
  },
  {
    startTime: 2264.7,
    person: 'Pamela',
    text: " That's who you're going to ask where to put the button."
  },
  { startTime: 2267.34, person: 'Pamela', text: ' Like, of course.' },
  {
    startTime: 2270.02,
    person: 'Pamela',
    text: ' But what if you knew a lot about your stakeholders?'
  },
  {
    startTime: 2273.22,
    person: 'Pamela',
    text: ' What if you knew that the CEO was the CEO of this company that was only eight people big.'
  },
  { startTime: 2281.66, person: 'Pamela', text: ' And the CEO is also the founder.' },
  {
    startTime: 2284.72,
    person: 'Pamela',
    text: " And the CEO is really involved in the usability of the system, because that's what he or she likes."
  },
  {
    startTime: 2292.14,
    person: 'Pamela',
    text: " And so if you have information about stakeholders, you're going to it's going to inform the questions that you ask, even."
  },
  {
    startTime: 2302.14,
    person: 'Pamela',
    text: " And so it's a very interesting, you know, it takes some practise, and it takes but the first place is to put your toe in the water and try and get this information about the stakeholders and understand the dynamics."
  },
  {
    startTime: 2316.14,
    person: 'Pamela',
    text: " And then when it comes to the interview, and that's a whole different live stream that we can do together."
  },
  { startTime: 2321.98, person: 'Pamela', text: " But it's about knowing which questions to ask." },
  {
    startTime: 2325.52,
    person: 'Pamela',
    text: ' Even the order of the questions can influence your stakeholder and make them more engaged or not.'
  },
  {
    startTime: 2334.42,
    person: 'Pamela',
    text: ' And once you get all of this information, if you know about your stakeholders preferences for reviewing the content and the accuracy, and again, that comes back to knowing your stakeholder again, and, and working with them and who they are.'
  },
  {
    startTime: 2351.6,
    person: 'Karol',
    text: " Right, I do recall your workshops at DDD Europe last year, I've been taking notes that I literally took notes about stakeholder interviewing and put them in."
  },
  {
    startTime: 2365.14,
    person: 'Karol',
    text: ' Because again, not a business analyst, not an expert.'
  },
  { startTime: 2367.88, person: 'Karol', text: ' So I need to spar with something.' },
  {
    startTime: 2370.3,
    person: 'Karol',
    text: ' So someone, I literally created a chat agent in Gemini called Pamela.'
  },
  {
    startTime: 2377.08,
    person: 'Karol',
    text: ' And Pamela, the business analyst that wrote those, all those notes into that chat agent just to spar on preparing for interviews, just to be able to figure out what to do in a more dynamic sparring way.'
  },
  {
    startTime: 2393.12,
    person: 'Karol',
    text: " And also so that I don't butter a bunch of business analysts asking questions, because they would be so annoyed by my questions."
  },
  { startTime: 2401.08, person: 'Karol', text: ' Too many of them.' },
  {
    startTime: 2402.74,
    person: 'Karol',
    text: ' And I find myself right now actually taking notes again, which is extremely funny from from my perspective.'
  },
  { startTime: 2409.8, person: 'Karol', text: ' But yeah, this is just using that knowledge.' },
  {
    startTime: 2413.74,
    person: 'Karol',
    text: ' Because of course, we have a tendency at times, especially in bigger companies, because you mentioned a small one where the CEO is actually very involved, that happens, of course.'
  },
  {
    startTime: 2424.16,
    person: 'Karol',
    text: " But then if you have a company the size of, let's say, the big four of consulting, or accounting more like, right?"
  },
  {
    startTime: 2433.94,
    person: 'Karol',
    text: ' Then the CEO is not really involved in the day to day of the employees, the line employees.'
  },
  {
    startTime: 2439.98,
    person: 'Karol',
    text: ' So asking him these kind of questions makes absolutely ridiculously no sense.'
  },
  {
    startTime: 2445.02,
    person: 'Karol',
    text: ' But then, on the other hand, we have people who actually ask his opinion, his or hers opinion.'
  },
  {
    startTime: 2451.34,
    person: 'Karol',
    text: " And then we end up with something called CEO driven development, which is we're driving the product or the solution by the vision of the CEO, which has literally zero usability for the people that are supposed to use it."
  },
  { startTime: 2468.98, person: 'Karol', text: ' And that becomes a problem.' },
  {
    startTime: 2471.34,
    person: 'Karol',
    text: ' From what I see already at the level of business analysis, not on the level of architecture or development or testing or training people, but as far as business analysis and actually defining the problem space in that idea.'
  },
  {
    startTime: 2488.78,
    person: 'Pamela',
    text: ' So in that case, you have a problem stakeholder, and the problem stakeholder is the CEO, who is too over involved in decisions that other people should have purview over, right?'
  },
  {
    startTime: 2503.97,
    person: 'Karol',
    text: ' So like micromanaging, not delegating, these kind of things, the cardinal sense of management, so to speak.'
  },
  { startTime: 2512.86, person: 'Pamela', text: ' Yes.' },
  { startTime: 2513.46, person: 'Pamela', text: " And it's difficult, isn't it?" },
  {
    startTime: 2515.06,
    person: 'Pamela',
    text: " Because if it's the CEO, then how do you have that conversation?"
  },
  {
    startTime: 2520.1,
    person: 'Pamela',
    text: " Sometimes I find the best way is to say things in a positive light and say things like, I know you're really, really busy."
  },
  {
    startTime: 2529.2,
    person: 'Pamela',
    text: " So I'm going to do a lot of upfront work for you."
  },
  {
    startTime: 2532.54,
    person: 'Pamela',
    text: " And I'm going to keep you informed if that's okay."
  },
  {
    startTime: 2535.9,
    person: 'Pamela',
    text: " And getting their permission to, especially when there's that authority kind of element to work with, right?"
  },
  {
    startTime: 2545.88,
    person: 'Karol',
    text: " This sums here to a question that actually Maxim asked quite a while ago in chat, but didn't flow into the conversation yet."
  },
  { startTime: 2558.79, person: 'Karol', text: ' You mentioned problem stakeholders.' },
  {
    startTime: 2560.55,
    person: 'Karol',
    text: ' So basically, you already applied a bit of a category or a label there, right?'
  },
  {
    startTime: 2566.57,
    person: 'Karol',
    text: " So Maxim's question is how to categorise which kind of stakeholder is..."
  },
  {
    startTime: 2576.93,
    person: 'Karol',
    text: ' I would ask it a little bit differently, how to categorise stakeholders in general, because from categorisation, we also can surface, my educated guess based on the books I read, that we can surface who is relevant and not relevant.'
  },
  {
    startTime: 2591.11,
    person: 'Karol',
    text: ' To, of course, to a certain extent, because if you have shadow stakeholders, hidden stakeholders, then of course, this is not going to surface through those tools.'
  },
  {
    startTime: 2598.99,
    person: 'Karol',
    text: ' But how to approach that kind of mapping and categorisation to try to make sense, organised sense of relevance of those stakeholders to our project.'
  },
  {
    startTime: 2610.79,
    person: 'Karol',
    text: " And in case of Maxim, because Maxim is also an integration architect like I am, working for an iPaaS solution company, well, the example is integration, but let's, whichever works for you, just to get the point across."
  },
  {
    startTime: 2627.43,
    person: 'Pamela',
    text: " Yeah, it's a difficult dance, you know, because you have your in-house project tools that you use, and you can, so you have the official understanding that is documented and distributed and reviewed and approved about the stakeholders that you're using in there."
  },
  {
    startTime: 2646.77,
    person: 'Pamela',
    text: " Maybe you're using an interest influence grid or an interest impact grid, so mapping their level of interest or their level of perceived interest versus their influence on the project."
  },
  {
    startTime: 2661.33,
    person: 'Pamela',
    text: " If they're not interested, and they don't have any influence on the project, then they're not engaged very much."
  },
  {
    startTime: 2669.07,
    person: 'Pamela',
    text: " So you have these kinds of tools that you can use, but I always, especially as a consultant, I always have my unofficial version of stakeholder grid and dynamics and the web that I know that I'm going to be walking into, and that I keep in the back of my mind."
  },
  {
    startTime: 2690.01,
    person: 'Pamela',
    text: " And it does inform how I interact with stakeholders, having my unofficial version that I keep to myself, versus the official one that, you know, everybody puts their stamp on it and says, oh yeah, it looks good, we've got our stakeholders."
  },
  {
    startTime: 2708.13,
    person: 'Karol',
    text: " Right, so just to, I'm going to throw some images on screen."
  },
  {
    startTime: 2715.67,
    person: 'Karol',
    text: " So if we're talking about, let me bring you back to the, oh, there we go."
  },
  {
    startTime: 2721.17,
    person: 'Karol',
    text: " So if we're talking about power interest, that's one of the grids, right?"
  },
  { startTime: 2727.99, person: 'Karol', text: ' Right.' },
  { startTime: 2728.35, person: 'Karol', text: ' This is one of the ideas.' },
  {
    startTime: 2730.11,
    person: 'Karol',
    text: " So we have to manage closely, so high power, high interest, high power, low interest to keep satisfied, or well, yeah, so they don't become high power, high interest, right?"
  },
  { startTime: 2746.73, person: 'Karol', text: ' High interest, but low power.' },
  {
    startTime: 2748.75,
    person: 'Karol',
    text: " These are usually, for example, line employees, a group like a call centre employees, which we're doing a project for the call centre, right?"
  },
  {
    startTime: 2756.15,
    person: 'Karol',
    text: ' That would be somewhere like that to keep informed, and then monitor those that are low power, low interest.'
  },
  {
    startTime: 2765.59,
    person: 'Karol',
    text: ' Is there, because this is a very static representation of stakeholders.'
  },
  {
    startTime: 2770.15,
    person: 'Karol',
    text: ' As far as I remember from the BCS course that I did two months ago, this is actually, while this is a static representation, there are actually some dynamics to these grids that suddenly you can have a shift.'
  },
  {
    startTime: 2787.09,
    person: 'Karol',
    text: " So basically doing these grids, it's not a one-off exercise, it's a continuous exercise to keep looking at the stakeholders and see have they moved from one place in the grid to the other."
  },
  {
    startTime: 2799.75,
    person: 'Karol',
    text: " And also, it's not binary, it's left or right and top, bottom, it's also scale in that sense, right?"
  },
  {
    startTime: 2809.55,
    person: 'Karol',
    text: " So what are, if we're looking at these kind of things, and just to drop a different example, this might be a little bit too small."
  },
  { startTime: 2823.65, person: 'Karol', text: " There we go, that's bigger." },
  {
    startTime: 2826.25,
    person: 'Karol',
    text: ' So this is a three-by-three grid of the same power interest, a little bit different of an organisation, right?'
  },
  {
    startTime: 2837.65,
    person: 'Karol',
    text: ' And here, I think deliberately, on the left top corner, we have high power, little interest in red.'
  },
  {
    startTime: 2846.95,
    person: 'Karol',
    text: ' Because as far as I recall from the general discussions we had about these grids, this is a very dangerous place to be in as a stakeholder for us doing the project.'
  },
  {
    startTime: 2858.13,
    person: 'Karol',
    text: " So if we have a stakeholder there, there's a lot of dynamic that could happen if we categorise somebody there."
  },
  {
    startTime: 2865.03,
    person: 'Karol',
    text: ' And now, can you walk us through a little, why is that the danger zone, so to speak?'
  },
  { startTime: 2872.91, person: 'Pamela', text: ' Sure.' },
  {
    startTime: 2873.85,
    person: 'Pamela',
    text: " So high power, little interest, what comes to mind is maybe a sponsor of the project who knows in their mind that they are leaving the company, and so they're just doing as little as possible before they get out the door."
  },
  {
    startTime: 2891.87,
    person: 'Pamela',
    text: ' They have very little interest in this project.'
  },
  {
    startTime: 2894.61,
    person: 'Pamela',
    text: " So here's a person who has all the power to make all the decisions, makes the budgetary decisions, decides ultimately if people are coming on and off the project, the future of all of these people underneath them, and they're not interested at all."
  },
  {
    startTime: 2911.99,
    person: 'Pamela',
    text: " So that's a really dangerous situation, because everybody kind of reports to this person in a dotted line, and the project manager is needing to deal with this person who doesn't open up their calendar, perhaps, who has 10-minute meetings instead of an hour."
  },
  {
    startTime: 2932.09,
    person: 'Pamela',
    text: " So it's a really, really difficult dynamic to deal with."
  },
  {
    startTime: 2936.99,
    person: 'Karol',
    text: ' And what about if, in terms of moving between the specific elements of the grid?'
  },
  {
    startTime: 2944.43,
    person: 'Karol',
    text: ' Because as far as I recall, being high power, little interest is dangerous, because that person can suddenly become high power, high interest.'
  },
  {
    startTime: 2953.63,
    person: 'Karol',
    text: " And that's a different dynamic, because then if we, of course, if we do the exercise iteratively and see that somebody is moving to the right side of the grid, how is that a danger?"
  },
  {
    startTime: 2967.99,
    person: 'Karol',
    text: ' Because that can be a significant danger to a project, or a significant boon, on the other hand, depending on the, I assume, depending on the attitude of the stakeholder towards the project, or towards the consultant, or towards the consulting company as a whole.'
  },
  { startTime: 2984.21, person: 'Pamela', text: ' Sure.' },
  { startTime: 2985.39, person: 'Pamela', text: ' What are they interested in?' },
  {
    startTime: 2986.89,
    person: 'Pamela',
    text: " If it's high interest, what are they interested in?"
  },
  { startTime: 2990.41, person: 'Pamela', text: " It's a really good point." },
  {
    startTime: 2992.19,
    person: 'Pamela',
    text: ' Are they interested in, and I mean, these grids, they tend to assume that people are interested in the project.'
  },
  {
    startTime: 2999.91,
    person: 'Pamela',
    text: " But I think you also need to look at a person's self interest, right?"
  },
  {
    startTime: 3005.07,
    person: 'Pamela',
    text: " So interest, it's your public interest in the project or not, but your own self interest."
  },
  {
    startTime: 3012.29,
    person: 'Pamela',
    text: ' And that comes into playing into, do you understand what people are motivated by?'
  },
  { startTime: 3018.33, person: 'Pamela', text: ' Do you understand their objections?' },
  { startTime: 3019.77, person: 'Pamela', text: ' You understand the barriers that they have?' },
  { startTime: 3022.03, person: 'Pamela', text: ' What is their self interest in the project?' },
  { startTime: 3026.09, person: 'Pamela', text: " There's a lot going on." },
  { startTime: 3028.77, person: 'Karol', text: ' So what about timing?' },
  { startTime: 3031.91, person: 'Karol', text: ' Oh, yeah, I mean, yeah.' },
  {
    startTime: 3033.11,
    person: 'Pamela',
    text: ' So timing, they might have a high power, little interest, but the project just started.'
  },
  {
    startTime: 3040.09,
    person: 'Pamela',
    text: ' But in a week, they have a high power, high interest.'
  },
  { startTime: 3043.49, person: 'Pamela', text: " So now it's good." },
  { startTime: 3045.29, person: 'Pamela', text: ' So timing, right?' },
  {
    startTime: 3047.95,
    person: 'Karol',
    text: " Yeah, but also, if we have a long running project, for example, from timing perspective, I would, for example, imagine the situation that somebody is high power, little interest, they're aware of the project, and they don't really care."
  },
  {
    startTime: 3062.09,
    person: 'Karol',
    text: ' But suddenly, from somewhere from the top, they get a executive command, you need to take care of this project.'
  },
  {
    startTime: 3069.97,
    person: 'Karol',
    text: ' And all of a sudden, we have a shift of that person that who had high power, very little interest.'
  },
  {
    startTime: 3074.51,
    person: 'Karol',
    text: ' Now, all of a sudden, they say high power, high interest.'
  },
  {
    startTime: 3077.67,
    person: 'Karol',
    text: ' And that person is completely changing the rules of the game on the project.'
  },
  { startTime: 3085.27, person: 'Karol', text: ' Usually, I see that kind of dynamics.' },
  {
    startTime: 3087.31,
    person: 'Karol',
    text: ' And this is, again, timing wise, because somebody had their, for example, year evaluation with the higher ups.'
  },
  { startTime: 3094.71, person: 'Karol', text: ' And suddenly, they get highly motivated.' },
  {
    startTime: 3097.87,
    person: 'Karol',
    text: " Because otherwise, they'll, for example, lose their job."
  },
  { startTime: 3102.82, person: 'Karol', text: ' Again, different motivations, right?' },
  { startTime: 3105.12, person: 'Karol', text: " Because that's the that's the key issue." },
  {
    startTime: 3108.4,
    person: 'Karol',
    text: ' Because they might have an interest in the project.'
  },
  {
    startTime: 3110.4,
    person: 'Karol',
    text: " But it's not the interest to the project that's driving them to interact and engage."
  },
  {
    startTime: 3118.95,
    person: 'Karol',
    text: " And if we're looking at interest in the project, what is, I think that's a very good topic, because I think everybody would have a different interest in the project."
  },
  {
    startTime: 3129.25,
    person: 'Karol',
    text: " Some people are in the project because they're just trying to earn their pay cheque."
  },
  {
    startTime: 3134.57,
    person: 'Karol',
    text: ' Others, because they want to actually want to make an impact and help the company or help a specific group in the company.'
  },
  {
    startTime: 3141.99,
    person: 'Karol',
    text: " Others, because it's it's related to their bonuses."
  },
  {
    startTime: 3145.53,
    person: 'Karol',
    text: ' Others, because they just want to annoy the hell out of their another director in the company.'
  },
  {
    startTime: 3152.63,
    person: 'Karol',
    text: ' I think that there are the reasons for the interest, there are probably as many as people or more.'
  },
  {
    startTime: 3161.03,
    person: 'Karol',
    text: " I tend to joke about if you take four architects in the room and ask them about their opinion, you'll get five different opinions."
  },
  {
    startTime: 3167.95,
    person: 'Karol',
    text: ' I think in terms of interest and sourcing interest, why that person is suddenly having interest in the project, I think that would be pretty much the same.'
  },
  {
    startTime: 3180.57,
    person: 'Karol',
    text: " So, if we find ourselves with this dynamic shifting, and suddenly we have a stakeholder moving to, let's say, high interest or low interest from higher interest, for example, how do we approach understanding what happened?"
  },
  {
    startTime: 3194.75,
    person: 'Karol',
    text: " Because we're a consultant, we're not internal, we're somewhat barred from the gossip at the water cooler."
  },
  {
    startTime: 3203.09,
    person: 'Karol',
    text: " We can have some, but my guess is, oh, you're external."
  },
  {
    startTime: 3207.45,
    person: 'Karol',
    text: " So, we're going to shut up about our things and talk about the weekend instead."
  },
  {
    startTime: 3215.61,
    person: 'Karol',
    text: " So, if you're already in, you did some interviews, you're working on defining processes, you have that kind of shift of stakeholders."
  },
  {
    startTime: 3226.19,
    person: 'Karol',
    text: ' How do you approach understanding the motivation of those stakeholders?'
  },
  {
    startTime: 3231.67,
    person: 'Karol',
    text: ' How do you slice and dice then when that kind of shift happens or all of a sudden?'
  },
  { startTime: 3238, person: 'Pamela', text: " So, sometimes you don't need to." },
  {
    startTime: 3240.24,
    person: 'Pamela',
    text: " You don't need to understand that they've had a performance review and now they're suddenly motivated to be part of the project."
  },
  {
    startTime: 3247.7,
    person: 'Pamela',
    text: ' What you really care about is inputs and contributions from the right people at the right time.'
  },
  {
    startTime: 3255.54,
    person: 'Pamela',
    text: " I mean, if they have done nothing for almost the whole project and then they're stepping in at the end, changing everything, well, because of their high interest now, then that's a problem."
  },
  {
    startTime: 3267.08,
    person: 'Pamela',
    text: " And that's something that can be handled in a mitigation kind of a way at the beginning of your project or before you've started your project is because now this is a problem stakeholder, even though on paper they're highly interested."
  },
  { startTime: 3281.72, person: 'Pamela', text: ' The problem is in the process.' },
  {
    startTime: 3283.7,
    person: 'Pamela',
    text: ' The problem is in coming on board late and wanting to change everything.'
  },
  {
    startTime: 3288.18,
    person: 'Pamela',
    text: ' And so, how are we going to deal with those kinds of scenarios?'
  },
  {
    startTime: 3293,
    person: 'Pamela',
    text: " Well, you know, at the beginning when you're identifying your stakeholders, you have the list of people."
  },
  {
    startTime: 3299.9,
    person: 'Pamela',
    text: " And if they're not performing, then we wouldn't wait until the end of the project to do something about it."
  },
  {
    startTime: 3307.34,
    person: 'Pamela',
    text: " That would happen much earlier and we would have those discussions about what are we going to do in this scenario if I don't get the review back or the review is substandard or if somebody's not showing up to meetings."
  },
  {
    startTime: 3321.86,
    person: 'Pamela',
    text: " And usually we have a backup stakeholder that comes into play, but that's identified at the very beginning."
  },
  {
    startTime: 3332.62,
    person: 'Karol',
    text: " But what if in that case, let's say we have, going back to the big four and how network companies, because the big four, that's not a single corporate environment, that's network of companies."
  },
  {
    startTime: 3349.98,
    person: 'Karol',
    text: " And these network of companies usually have partners, not directors, not explicitly, well, there is a C level, but in general, they're run by partners, which are kind of like directors of specific units, sometimes with very high independence."
  },
  {
    startTime: 3368.92,
    person: 'Karol',
    text: " What if we get ourselves in this situation where we did all that work on stakeholder mapping and understanding the stakeholders and at a certain point in the project, not necessarily by the end, all of a sudden surface, a completely new stakeholder that normally would have been in, let's say, high power, little interest."
  },
  {
    startTime: 3390.82,
    person: 'Karol',
    text: " And we might've disregarded that person because not relevant, not showing up on hierarchy, never mentioned in the conversations with the trusted contact for whatever reasons."
  },
  {
    startTime: 3405.38,
    person: 'Karol',
    text: ' Where that person should have been high power, little interest on the grid mapped out for us and we should be watching that person, we did it.'
  },
  {
    startTime: 3413.38,
    person: 'Karol',
    text: ' And suddenly that person pops up and is high power, high interest for whatever reason, but has the impact and influence and is suddenly interested in making that impact and influence.'
  },
  {
    startTime: 3428.37,
    person: 'Karol',
    text: " So how do we manage that stakeholder then where we're already in the middle of things, because we are, it's been already, let's say four months into the project and we've been dealing with things, we already mapped things, we already started doing things and things are happening."
  },
  { startTime: 3446.85, person: 'Karol', text: ' What then?' },
  {
    startTime: 3448.33,
    person: 'Pamela',
    text: " So in any project I've been involved in where a new stakeholder pops up in the middle of the project, it's been because there's been some kind of a problem."
  },
  {
    startTime: 3460.87,
    person: 'Pamela',
    text: " And if that problem is internal, I don't have any visibility to, or maybe it's because part of the project is sagging a little bit and they're not delivering or they're behind deadlines."
  },
  {
    startTime: 3473.35,
    person: 'Pamela',
    text: " There's been some reason why that new stakeholder has popped up."
  },
  {
    startTime: 3479.05,
    person: 'Pamela',
    text: " And so, and sometimes it's for a good reason and sometimes it might not be."
  },
  {
    startTime: 3485.37,
    person: 'Pamela',
    text: ' But I would, first of all, kind of put some lens on that, some personal lens and think to myself, why is that person popping up now?'
  },
  {
    startTime: 3494.97,
    person: 'Pamela',
    text: ' And see if I can find out some more intel around that.'
  },
  {
    startTime: 3499.97,
    person: 'Pamela',
    text: " And even starting with asking the person themselves, so you're new to the project, I want to help you get up to speed on it and so I can get your contributions in the best way."
  },
  {
    startTime: 3514.15,
    person: 'Pamela',
    text: " I'm just wondering how you came to be a new stakeholder on the project and see what their perspective is."
  },
  {
    startTime: 3521.71,
    person: 'Pamela',
    text: ' And then I would ask probably a couple other people and see if the perspectives line up.'
  },
  {
    startTime: 3528.97,
    person: 'Pamela',
    text: ' Is everybody aligned in why this new person, and who put the new person there?'
  },
  { startTime: 3534.19, person: 'Pamela', text: ' That might be telling.' },
  { startTime: 3537.73, person: 'Karol', text: " And what if it doesn't line up then?" },
  {
    startTime: 3540.89,
    person: 'Pamela',
    text: " If it doesn't line up, then I dig a little deeper and I ask more questions because it might be a perception, an incorrect perception that there's a problem on the project or part of the project is, or part of the people, they're not performing in the way that we want, we're not getting the results that we want."
  },
  {
    startTime: 3561.05,
    person: 'Pamela',
    text: ' And so you need to kind of back that up and reverse engineer, where is that perception coming from?'
  },
  {
    startTime: 3566.57,
    person: 'Pamela',
    text: " It might come, and I've seen this, it might come from the steering committee are sitting around a table talking about the progress of the project and you're not there to correct any misperceptions or the real progress of the project is not being communicated upward."
  },
  {
    startTime: 3587.23,
    person: 'Pamela',
    text: " And so therefore the CEOs, they think they need to do damage control and let's put in a real shooting star who's going to bring the project back online."
  },
  {
    startTime: 3598.29,
    person: 'Pamela',
    text: " So that's what I recommend is that when there's a new person who suddenly is parachuted onto the project, who has a high level of interest and influence, I start asking why."
  },
  {
    startTime: 3613.43,
    person: 'Karol',
    text: ' And then of course also projects are not linear.'
  },
  {
    startTime: 3618.19,
    person: 'Karol',
    text: ' So deliverables or outcomes of a project, they do not show it proportionally to time.'
  },
  {
    startTime: 3625.95,
    person: 'Karol',
    text: " Sometimes the outcome of a project and the deliverables show by the end of the project very, very, very rapidly, but during the project, it's nothing."
  },
  {
    startTime: 3636.15,
    person: 'Karol',
    text: ' We literally joked about this, I think today or yesterday that sometimes project management or management in general has this perspective of throwing resources or just people at problems, thinking that in this kind of twisted thinking, like thinking about a pregnant woman.'
  },
  {
    startTime: 3658.85,
    person: 'Karol',
    text: ' So it takes nine months for a woman to birth a baby.'
  },
  {
    startTime: 3665.75,
    person: 'Karol',
    text: ' So if you have nine women, that will take one month.'
  },
  { startTime: 3668.91, person: 'Karol', text: " It's this twisted logic kind of thing, right?" },
  {
    startTime: 3672.47,
    person: 'Karol',
    text: ' That there is a proportion relationship between adding people to the outcomes.'
  },
  {
    startTime: 3681.65,
    person: 'Karol',
    text: " And that's usually not that simple, hence perspective."
  },
  { startTime: 3687.39, person: 'Karol', text: ' Okay.' },
  { startTime: 3687.89, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 3688.07,
    person: 'Karol',
    text: " That's interesting because they might be actually, you're right."
  },
  {
    startTime: 3690.57,
    person: 'Karol',
    text: ' That might be very related to just miscommunication.'
  },
  {
    startTime: 3696.41,
    person: 'Karol',
    text: ' And now that I think of it, I actually seen that happen quite a few times, that there was a complete lack of communication or miscommunication.'
  },
  {
    startTime: 3704.15,
    person: 'Karol',
    text: ' And it goes both in problems and in successes of actual progress of the project.'
  },
  {
    startTime: 3712.21,
    person: 'Karol',
    text: " Mostly, unfortunately, I've seen a lack of communication about the problems, resulting in later an explosion in the project because nobody communicated upwards sufficiently that there are certain problems that already need addressing."
  },
  {
    startTime: 3725.83,
    person: 'Karol',
    text: ' And then they just accumulated to the extent that they become a nuke on the project rather than solvable, mitigatable risks, right?'
  },
  {
    startTime: 3737.39,
    person: 'Karol',
    text: " But that's a completely different problem space that is not really solvable from consulting perspective than at times."
  },
  {
    startTime: 3748.07,
    person: 'Karol',
    text: " It's again, who has the influence over those stakeholders?"
  },
  {
    startTime: 3753.65,
    person: 'Karol',
    text: ' But that brings me to a good question because there are tools.'
  },
  {
    startTime: 3761.11,
    person: 'Karol',
    text: ' We already touched on the power interest or power impact grids.'
  },
  {
    startTime: 3767.73,
    person: 'Karol',
    text: " But I think before jumping into tools, and we hinted at that so many times already, but I think it's very important to maybe properly acknowledge that stakeholders are a living system and touch upon that."
  },
  { startTime: 3786.55, person: 'Karol', text: ' What is that living system?' },
  { startTime: 3788.57, person: 'Karol', text: ' What does that precisely entail?' },
  {
    startTime: 3791.07,
    person: 'Karol',
    text: ' Because we already touched upon that here and there.'
  },
  { startTime: 3795.25, person: 'Karol', text: ' But just like to list out and condense that.' },
  { startTime: 3800.93, person: 'Pamela', text: ' Sure.' },
  { startTime: 3801.83, person: 'Pamela', text: ' So yeah, stakeholders as a living system.' },
  {
    startTime: 3805.63,
    person: 'Pamela',
    text: " So when we look at a system, and if you look at systems thinking about having inputs and outputs and looking for patterns and the changes in the system and the emergent behaviour in a system, new behaviour that wasn't seen before by its individual parts and components, which are really the people, you really do see that people are not islands by themselves."
  },
  {
    startTime: 3835.69,
    person: 'Pamela',
    text: ' You see that they are impacted by so many things.'
  },
  { startTime: 3840.49, person: 'Pamela', text: ' We talk about system boundaries.' },
  { startTime: 3843.53, person: 'Pamela', text: ' What are the boundaries of a system?' },
  { startTime: 3845.55, person: 'Pamela', text: " Well, it's not the individual." },
  {
    startTime: 3847.75,
    person: 'Pamela',
    text: " I mean, if they are doing work and there's always at the top of this system, at the top of anybody working is this information lifecycle."
  },
  {
    startTime: 3857.99,
    person: 'Pamela',
    text: ' And so we can both pull down information from this information lifecycle and contribute to it or be bypassed from it.'
  },
  {
    startTime: 3867.67,
    person: 'Pamela',
    text: " So when somebody is working on a task, like let's get out of the conceptual and go down to the ground."
  },
  {
    startTime: 3874.43,
    person: 'Pamela',
    text: " So if somebody is working on a task, and the deliverable doesn't go well, I mean, a linear thinker would say, oh, that person did a really bad job, right?"
  },
  { startTime: 3887.99, person: 'Pamela', text: " That's linear thinking." },
  {
    startTime: 3889.63,
    person: 'Pamela',
    text: " But a system thinker would say, hmm, let's dig into this."
  },
  { startTime: 3895.23, person: 'Pamela', text: ' Where did they get the information from?' },
  { startTime: 3897.39, person: 'Pamela', text: ' Was it a reliable source of information?' },
  { startTime: 3900.17, person: 'Pamela', text: ' Was it timely?' },
  { startTime: 3901.61, person: 'Pamela', text: ' Did they get it from enough people?' },
  { startTime: 3904.57, person: 'Pamela', text: ' Are they new at the job?' },
  {
    startTime: 3907.11,
    person: 'Pamela',
    text: ' Are they experienced as a developer, an architect, but not in this company?'
  },
  {
    startTime: 3915.53,
    person: 'Pamela',
    text: ' Or this is a new flavour of a project where they needed some more mentoring.'
  },
  { startTime: 3921.69, person: 'Pamela', text: ' What are the communication channels like?' },
  { startTime: 3924.53, person: 'Pamela', text: ' Are people giving them information?' },
  { startTime: 3927.47, person: 'Pamela', text: ' And are they able to use the tools?' },
  { startTime: 3931.17, person: 'Pamela', text: ' Are they new at using the tools?' },
  {
    startTime: 3933.75,
    person: 'Pamela',
    text: ' You know, there was one, I worked for Red Cross for a little while in a few different contracts.'
  },
  {
    startTime: 3941.15,
    person: 'Pamela',
    text: " And the tools that if we were to impose Miro, which is a simple tool, I mean, people in tech know, I mean, it's just like writing, it's just, you know, but somebody who's out in the field, saving lives, doesn't know Miro."
  },
  {
    startTime: 3957.49,
    person: 'Pamela',
    text: " And if we're going to impose a tool on somebody who doesn't understand it, or is not very, you know, very tech, then they're taking away headspace, and overloading them cognitively to learn this tool, and then to give information, and it's live, and how's that going to go?"
  },
  {
    startTime: 3979.21,
    person: 'Pamela',
    text: " You know, so it's systems thinking, when you talk about a person is talking about so many different ways that person is impacted and influenced by processes, people, technology, tools, timing, the way that they learn, you know, it's, there's a lot going on the interconnections among people, among the team."
  },
  {
    startTime: 4004.91,
    person: 'Pamela',
    text: " I mean, that's why team building is so important, right?"
  },
  {
    startTime: 4008.07,
    person: 'Pamela',
    text: " Because we're this big web of interconnections."
  },
  {
    startTime: 4012.01,
    person: 'Pamela',
    text: ' And we need to get information, we need to know when somebody says A, do they really mean A?'
  },
  { startTime: 4017.37, person: 'Pamela', text: ' Or do they mean B?' },
  {
    startTime: 4018.81,
    person: 'Pamela',
    text: ' Oh, you know what, I know this person, they actually meant C, right?'
  },
  {
    startTime: 4024.37,
    person: 'Karol',
    text: " Or just so basically, from systems thinking, we're looking at this as a first of all, nonlinear, second of all, with a multitude of variables, and analysing which variables are actually the key dependencies on whatever the action is done."
  },
  {
    startTime: 4046.69,
    person: 'Karol',
    text: ' So somebody delivering a deliverable, or making analysis, or doing whatever, and what influences their day-to-day in that sense, including the lovely cognitive load, which we already talked about, I think, three different times on this stream.'
  },
  {
    startTime: 4067.01,
    person: 'Karol',
    text: " So that's a heavy analytical load already, just to be able to consider those aspects and figure out, oh, maybe we should consider that somebody is overloaded, maybe somebody is new, maybe somebody didn't receive proper training."
  },
  {
    startTime: 4085.45,
    person: 'Karol',
    text: " Maybe somebody's constantly waiting on another team or person to deliver that input, because they're tightly dependent on that person."
  },
  {
    startTime: 4095.37,
    person: 'Karol',
    text: " Otherwise, they cannot do their job, which in my world of integration happens all the time, because we're always dependent on everybody around us."
  },
  {
    startTime: 4103.83,
    person: 'Karol',
    text: " Let's say the life of an integration architect, we need every system to align so that we can do our job."
  },
  { startTime: 4112.79, person: 'Karol', text: " So yeah, that's heavy." },
  {
    startTime: 4115.609,
    person: 'Karol',
    text: ' And then how to, as a business analyst, or as an architect on the project, how to, what is the right question here?'
  },
  { startTime: 4126.71, person: 'Karol', text: ' How to communicate that?' },
  { startTime: 4127.91, person: 'Karol', text: ' How to surface that?' },
  {
    startTime: 4129.85,
    person: 'Karol',
    text: ' Or how to maybe also, on top of all that, help others communicate that?'
  },
  {
    startTime: 4136.29,
    person: 'Karol',
    text: " Because I think that's, as an analyst or as an architect, there will be probably more value to help others communicate those dependencies than trying to surface them yourselves, because I would say I wouldn't be quite capable of doing that, because I don't have the right perspective."
  },
  { startTime: 4159.229, person: 'Pamela', text: ' Mm hmm.' },
  {
    startTime: 4160.569,
    person: 'Pamela',
    text: ' So it can be a lot, like in a conceptual kind of discussion, it can be a lot to figure out.'
  },
  { startTime: 4169.39, person: 'Pamela', text: ' And so I want to give some shortcuts here.' },
  {
    startTime: 4172.069,
    person: 'Pamela',
    text: " So I have a grid, which I'm happy to share with your audience."
  },
  {
    startTime: 4178.01,
    person: 'Pamela',
    text: ' I have a grid of about 16 different criteria that I just keep kind of off to the side, you know.'
  },
  {
    startTime: 4187.17,
    person: 'Pamela',
    text: " And when it comes to systems thinking, and you don't have to initially, out of the gate, know everything about it, and all the impacts on people and all that."
  },
  {
    startTime: 4198.39,
    person: 'Pamela',
    text: " But if you're coming across a problem on the project, that's the shortcut."
  },
  {
    startTime: 4203.89,
    person: 'Pamela',
    text: " So if you're coming across somebody who is not delivering, or somebody who is delivering substandard information, or who is not communicating to somebody else, that's your cue to kick off your systems thinking."
  },
  {
    startTime: 4221.05,
    person: 'Pamela',
    text: ' And the first point where I would probably look is to that person themselves.'
  },
  {
    startTime: 4226.95,
    person: 'Pamela',
    text: " And I would say, you know what, I noticed that you're late a lot on your deliverables."
  },
  { startTime: 4233.51, person: 'Pamela', text: ' And of course, I would say it in a nicer way.' },
  {
    startTime: 4235.35,
    person: 'Pamela',
    text: ' But is there anything that we can do here to help you?'
  },
  { startTime: 4240.09, person: 'Pamela', text: ' And they would say, no, no, nothing at all.' },
  { startTime: 4243.63, person: 'Pamela', text: ' I say, okay.' },
  {
    startTime: 4245.69,
    person: 'Pamela',
    text: " Well, it is really important that we get those deliverables on time, because it affects somebody else and help them to understand the system's thinking about there, if you're affecting somebody else, and they get late information, and then they're late."
  },
  { startTime: 4259.89, person: 'Pamela', text: ' So what can we do to help you deliver on time?' },
  {
    startTime: 4264.35,
    person: 'Pamela',
    text: ' Like, tell me, from your perspective, what do you think might need to happen?'
  },
  {
    startTime: 4269.37,
    person: 'Pamela',
    text: ' And it could be the simplest thing, it could be the hardest thing.'
  },
  {
    startTime: 4273.33,
    person: 'Pamela',
    text: " But you start with what's going wrong on the project."
  },
  {
    startTime: 4277.47,
    person: 'Pamela',
    text: " And you can have this systems thinking off to the side and in your back pocket about the kinds of questions you're going to ask to help them through what might be the problem from their perspective."
  },
  {
    startTime: 4291.83,
    person: 'Pamela',
    text: " And I think perspective is a really key word here, because reality versus perspective, reality of somebody's reality versus somebody else's reality is based on perspective, which is based on a lot of things."
  },
  {
    startTime: 4307.47,
    person: 'Pamela',
    text: " It's based on experience, it's based on how they woke up that day, it's based on so many things, right?"
  },
  {
    startTime: 4314.45,
    person: 'Pamela',
    text: ' I mean, the truth is a tapestry, woven together of so many different things.'
  },
  {
    startTime: 4322.55,
    person: 'Pamela',
    text: " So that's probably where I would start is, you know, you don't need to necessarily pick up a textbook on systems thinking."
  },
  {
    startTime: 4329.13,
    person: 'Pamela',
    text: " But just think about where are the problems in your project and start some root cause analysis techniques, like the five why's."
  },
  { startTime: 4340.77, person: 'Pamela', text: ' You read my mind, right?' },
  {
    startTime: 4342.89,
    person: 'Pamela',
    text: " Or the or the fish diagram, you know, it's, it's very fish, fish, whatever."
  },
  { startTime: 4353.35, person: 'Pamela', text: " Yeah, it's very, it's those are simple tools." },
  {
    startTime: 4358.01,
    person: 'Pamela',
    text: ' One of the I gave a workshop about these kinds of topics.'
  },
  {
    startTime: 4363.73,
    person: 'Pamela',
    text: " And, and I was using the five why's as an example to get to the root cause of what the problem is with the stakeholder and, and somebody kind of shot up their hand and said, doesn't that sound aggressive?"
  },
  { startTime: 4375.57, person: 'Pamela', text: ' You know, why?' },
  { startTime: 4377.11, person: 'Pamela', text: ' Why did that happen?' },
  { startTime: 4378.07, person: 'Pamela', text: ' Why did that happen?' },
  { startTime: 4378.89, person: 'Pamela', text: ' Why did that happen?' },
  { startTime: 4379.99, person: 'Pamela', text: ' Why did that happen?' },
  {
    startTime: 4380.89,
    person: 'Pamela',
    text: ' You know, like going down to the five, you know, and it does when it sounds like that.'
  },
  { startTime: 4386.05, person: 'Pamela', text: ' But you can also do it with the person, right?' },
  {
    startTime: 4389.27,
    person: 'Pamela',
    text: ' So you can say, you know what, Carol, I noticed that your deliverable was late the last few times.'
  },
  { startTime: 4395.11, person: 'Pamela', text: ' And I, I want to do an exercise with you.' },
  {
    startTime: 4398.03,
    person: 'Pamela',
    text: " If, if you're okay with that, it's called the five why's."
  },
  { startTime: 4402.55, person: 'Pamela', text: ' Would you like to participate in that with me?' },
  {
    startTime: 4405.37,
    person: 'Pamela',
    text: " And so you're getting their permission, and you're doing it together."
  },
  { startTime: 4409.23, person: 'Pamela', text: " So it's not why, why, why, why, why?" },
  {
    startTime: 4412.97,
    person: 'Karol',
    text: ' That that the way we phrase things really matters to get that engagement.'
  },
  {
    startTime: 4419.17,
    person: 'Karol',
    text: " Even if we're using tools, not tools, maybe sound, but if we use it wrong, with the wrong intonation and energy, this will not work, even though the tool is great."
  },
  { startTime: 4432.25, person: 'Pamela', text: " Yeah, isn't that the case?" },
  {
    startTime: 4433.67,
    person: 'Pamela',
    text: ' I mean, the difference between, you know, good morning, and good morning.'
  },
  { startTime: 4439.67, person: 'Pamela', text: ' It changes the whole room.' },
  { startTime: 4442.65, person: 'Karol', text: ' Yeah, it does.' },
  { startTime: 4443.49, person: 'Karol', text: " That's, that's very true." },
  {
    startTime: 4445.27,
    person: 'Karol',
    text: " From architectural perspective, I do enjoy the five why's, because it's, it's really a problem solving technique for architects."
  },
  {
    startTime: 4457.79,
    person: 'Karol',
    text: " Because quite often in companies, we encounter, you know, arguments like, because we've always done it this way."
  },
  {
    startTime: 4467.91,
    person: 'Karol',
    text: " That's the worst kind of argument to make for a specific decision in architecture."
  },
  {
    startTime: 4473.31,
    person: 'Karol',
    text: " So then if you start applying with curiosity, five why's, then you dig into the actual root cause of why things are done this way."
  },
  {
    startTime: 4483.43,
    person: 'Karol',
    text: ' And then either you start understanding why this is relevant, and why it should remain that way, because it actually is relevant.'
  },
  {
    startTime: 4491.65,
    person: 'Karol',
    text: ' Or you surface that the reason for doing it this way is no longer relevant, and you should actually start adjusting.'
  },
  {
    startTime: 4499.25,
    person: 'Karol',
    text: " So that's, that's, that's a great, different use of that."
  },
  { startTime: 4505.41, person: 'Karol', text: ' And' },
  {
    startTime: 4505.57,
    person: 'Karol',
    text: " I find myself when I'm reading, especially reading this, this book, because that's 123"
  },
  {
    startTime: 4512.77,
    person: 'Karol',
    text: ' techniques for business analysis, different aspects of it, I find that I can really translate'
  },
  {
    startTime: 4519.73,
    person: 'Karol',
    text: ' those techniques quite often to architecture problems, not stakeholder management, not'
  },
  {
    startTime: 4524.39,
    person: 'Karol',
    text: ' business analysis per se, but just understanding architecture and surfacing technical aspects of'
  },
  {
    startTime: 4532.49,
    person: 'Karol',
    text: " architecture, because they're just analogous in the ways of working."
  },
  { startTime: 4539.49, person: 'Karol', text: ' And that makes my life also easier.' },
  {
    startTime: 4541.57,
    person: 'Karol',
    text: " So but it's not only about learning to work with stakeholders is learning also to"
  },
  {
    startTime: 4545.73,
    person: 'Karol',
    text: ' work with, within a group within architecture within development teams, because, quite frankly,'
  },
  {
    startTime: 4553.57,
    person: 'Karol',
    text: " if I'm looking at it from the perspective of an architect, my dev team are my state stakeholders,"
  },
  {
    startTime: 4560.65,
    person: 'Karol',
    text: ' different kinds of stakeholders, different category, probably those with a low power,'
  },
  {
    startTime: 4567.13,
    person: 'Karol',
    text: ' high interest at times, but still stakeholders, right?'
  },
  { startTime: 4571.89, person: 'Karol', text: " That's a that kind of balance there." },
  {
    startTime: 4575.95,
    person: 'Pamela',
    text: " Well, it's interesting that you found business analysis, because a lot of people have not found business analysis, if they're an architect or developer, or, or they or if you ask them, do you do business analysis?"
  },
  { startTime: 4589.01, person: 'Pamela', text: ' They say, yeah, of course.' },
  {
    startTime: 4591.21,
    person: 'Pamela',
    text: " But it's, it's something that I've always felt that business analysis has a PR problem."
  },
  {
    startTime: 4598.33,
    person: 'Pamela',
    text: " And not a lot of people can define it, or say what it is and say what it isn't."
  },
  { startTime: 4604.51, person: 'Pamela', text: " Because it's so many different things." },
  {
    startTime: 4606.39,
    person: 'Pamela',
    text: ' I mean, it goes into change management, and it goes into, you know, requirements and systems engineering, and it travels a lot of different areas.'
  },
  {
    startTime: 4616.51,
    person: 'Pamela',
    text: " But I've always found that if people do find out more about business analysis, I've always found that they find that it really benefits them, you know, in the way that you're talking about, like getting to know your stakeholders and how to capitalise on, on the dynamics and understand that and the right questions to ask."
  },
  {
    startTime: 4637.23,
    person: 'Pamela',
    text: " And, you know, like, what do you feel is the biggest benefit that that you've got from learning about business analysis?"
  },
  {
    startTime: 4647.41,
    person: 'Karol',
    text: ' Yeah, my, my interest in business analysis stems really from trying to understand business processes and process thinking.'
  },
  {
    startTime: 4664.59,
    person: 'Karol',
    text: " Because I quite often as an integration architect, I find myself in the area where I need to actually step into the shoes of a business analyst and define a business process, or help others define a business process, because there is no business analyst, there is nobody who's able to outline that business process clearly."
  },
  {
    startTime: 4686.13,
    person: 'Karol',
    text: " And usually it's up to the integration architect that is, you know, connecting all those systems end to end, to surface that those dependencies time wise, what happens in sequence, where we can parallelise things, where things are completely forked off, etc."
  },
  {
    startTime: 4704.41,
    person: 'Karol',
    text: ' So from that perspective, just purely process perspective, just learning BPMN, and those tools around modelling processes, that was the starting point of learning business analysis and getting the benefit, because that helped me define integrations better.'
  },
  { startTime: 4727.51, person: 'Karol', text: " But then I'm a curious person." },
  { startTime: 4731.05, person: 'Karol', text: ' So I love to dig deeper.' },
  {
    startTime: 4733.03,
    person: 'Karol',
    text: " So instead of just learning about my field and staying within the confines of integration architecture, software architecture, I love to dig into, oh, let's learn about scrum, let's learn about testing, let's learn about business analysis."
  },
  {
    startTime: 4746.85,
    person: 'Karol',
    text: " So I'm like, okay, tabula rasa, I don't really know that much, let's just see what that is and figure out for myself, how can I use it."
  },
  {
    startTime: 4755.13,
    person: 'Karol',
    text: ' And that translates to, oh, now I have this lovely book that I understand half of the techniques from, the others I can read about and just figure out, are they relevant to my current situation, or maybe I could use them later.'
  },
  { startTime: 4768.07, person: 'Karol', text: " And let's just try and experiment." },
  {
    startTime: 4771.89,
    person: 'Karol',
    text: " And this is the kind of learning where I just, and then again, integration architecture doesn't really have much of a books written about."
  },
  {
    startTime: 4784.25,
    person: 'Karol',
    text: ' You can find a lot of books about microservices, about software architecture in general, we feature lots of these books on loosely coupled as well.'
  },
  {
    startTime: 4793.35,
    person: 'Karol',
    text: " But for integration architecture, that's usually closed source materials with tech vendors."
  },
  {
    startTime: 4799.11,
    person: 'Karol',
    text: ' So if I want to introduce certain concepts into integration architecture, I use, I need to create analogues from other books like about software architecture.'
  },
  {
    startTime: 4809.53,
    person: 'Karol',
    text: ' And we did that in bridging the gap for ecosystem architectural styles, we took the work of Mark Richards and Neil Ford and fundamentals of software architecture, and their classification of system architectural styles, and we made an analogue to ecosystem architectural styles for integration.'
  },
  { startTime: 4829.59, person: 'Karol', text: ' Right?' },
  {
    startTime: 4830.29,
    person: 'Karol',
    text: ' So I read, I find, can I make an analogue to my field from that?'
  },
  { startTime: 4835.53, person: 'Karol', text: ' Can I use it?' },
  {
    startTime: 4836.49,
    person: 'Karol',
    text: " And kind of is the same with business analysis that, can I have this and use it as an analogue to whatever problems I'm solving in my field."
  },
  {
    startTime: 4848.19,
    person: 'Karol',
    text: " So happens to be that since I need to wear the business analyst hat at times, I don't even have to create analogues at times, because I directly use business analysis and stakeholder analysis and stakeholder management turns out to be a really, really a speed up for me to get onto projects as a consultant way quicker, because then I understand who to talk to."
  },
  {
    startTime: 4876.57,
    person: 'Karol',
    text: " But that's my autistic way of learning things, right?"
  },
  {
    startTime: 4883.57,
    person: 'Pamela',
    text: ' So I want to, yeah, I want to touch on a couple of things that you say.'
  },
  { startTime: 4888.37, person: 'Pamela', text: " So what you're doing is innovation, right?" },
  {
    startTime: 4891.77,
    person: 'Pamela',
    text: " When you're taking from one area and bringing it into another and reshaping it."
  },
  { startTime: 4896.83, person: 'Pamela', text: " I mean, that's innovation." },
  { startTime: 4897.99, person: 'Pamela', text: " That's the fusion of, which is awesome." },
  {
    startTime: 4901.91,
    person: 'Pamela',
    text: ' And the other thing to go slightly off track, you mentioned about processes, and I want to give the biggest tip ever to do process maps, okay?'
  },
  {
    startTime: 4913.33,
    person: 'Pamela',
    text: " If that's okay with your audience and with you, I want to give the biggest tip ever."
  },
  {
    startTime: 4918.13,
    person: 'Pamela',
    text: " So often what I see with process maps is one square contains a paragraph or one square contains like a bunch of different stuff, and it's not linear with the other."
  },
  {
    startTime: 4932.09,
    person: 'Pamela',
    text: ' The biggest tip ever is to have a verb and a noun structure.'
  },
  { startTime: 4938.89, person: 'Pamela', text: ' Okay?' },
  { startTime: 4939.89, person: 'Pamela', text: " That's the biggest, easiest tip ever." },
  {
    startTime: 4942.73,
    person: 'Pamela',
    text: " So one box should not say invoice management, because we don't know what that is."
  },
  { startTime: 4949.47, person: 'Pamela', text: " We don't know if it's creating invoices." },
  {
    startTime: 4951.89,
    person: 'Pamela',
    text: " We don't know if it's submitting them, approving them, reviewing them."
  },
  { startTime: 4956.25, person: 'Pamela', text: " We don't know what it is, deleting them." },
  {
    startTime: 4958.65,
    person: 'Pamela',
    text: " If we don't want to pay people, we don't know what it is."
  },
  {
    startTime: 4961.89,
    person: 'Pamela',
    text: ' So verb and a noun structure in your process maps will make your life so much easier and the lives of your stakeholders.'
  },
  {
    startTime: 4973.03,
    person: 'Karol',
    text: " So that's process mapping, or you could translate that to BPMN to an extent, right, and draft it as a diagram."
  },
  {
    startTime: 4981.13,
    person: 'Karol',
    text: " Because I've been working with Philip over creation of a course for the last more than half a year, and I had to dive into his world of domain-driven design, and he had to dive into my world of integration."
  },
  {
    startTime: 4996.83,
    person: 'Karol',
    text: ' I really started learning event-storming, which you probably know from DDD, and event-storming is very colour-coded, and exactly what you said is part of event-storming.'
  },
  { startTime: 5014.93, person: 'Karol', text: ' You have events, order placed, noun, verb.' },
  { startTime: 5018.81, person: 'Karol', text: ' You have commands, confirm order.' },
  { startTime: 5022.03, person: 'Karol', text: " That's pretty much it." },
  {
    startTime: 5023.25,
    person: 'Karol',
    text: " And the rest of it are colour-coded additions to that, like green is always a query, a read from somewhere, so you don't have to say read order, you just say order, because you're reading it."
  },
  {
    startTime: 5036.57,
    person: 'Karol',
    text: " That's always self-explanatory, but the verb is implicit in the colour of the post-it."
  },
  {
    startTime: 5044.05,
    person: 'Karol',
    text: ' And then there are questions, as in to check reactions, policies, so is order complete and acceptable?'
  },
  { startTime: 5054.49, person: 'Karol', text: " That's a logic gate there." },
  {
    startTime: 5058.05,
    person: 'Karol',
    text: ' And then actors, so who is working on that specific aspect, command, or policy?'
  },
  { startTime: 5065.93, person: 'Karol', text: ' Who is executing that?' },
  {
    startTime: 5068.15,
    person: 'Karol',
    text: ' And, of course, there are also commands leading to external systems or specific aggregates, and that pretty much very well maps into what you said with noun, verb, and a little bit of extra info on top.'
  },
  {
    startTime: 5081.99,
    person: 'Karol',
    text: " Just a different visualisation tool just to outline the process, because it's not going to be a proper process map with a BPMN attached to it."
  },
  {
    startTime: 5091.05,
    person: 'Karol',
    text: " It's going to be messy, it's going to be probably missing a few pieces here and there, but it's going to be a start of building a process, or defining a process, or discovering a process, in that sense."
  },
  { startTime: 5107.57, person: 'Pamela', text: ' The start of a common understanding.' },
  {
    startTime: 5110.25,
    person: 'Karol',
    text: ' Common understanding, which is one of the biggest goals of domain-driven design on its own.'
  },
  {
    startTime: 5115.61,
    person: 'Karol',
    text: " We weren't supposed to go into domain-driven design this session, but hello, here we go!"
  },
  { startTime: 5120.21, person: 'Karol', text: ' There we go.' },
  {
    startTime: 5122.35,
    person: 'Karol',
    text: " Now, I think there is a very good question there, again by Maxim, that we didn't answer, but we moved past that topic to a certain extent, which is, what will happen if we don't map stakeholders?"
  },
  {
    startTime: 5137.51,
    person: 'Karol',
    text: ' What will happen if we completely ignore the topic and just let it be?'
  },
  { startTime: 5143.17, person: 'Pamela', text: ' Chaos.' },
  { startTime: 5146.09, person: 'Pamela', text: ' Chaos.' },
  {
    startTime: 5147.31,
    person: 'Pamela',
    text: " You won't know who to get information from, and when, who has strong points and weak points, you won't know who has a vested interest, a personal interest, who has a self-interest, whose job it is for you to get the information from."
  },
  {
    startTime: 5169.81,
    person: 'Pamela',
    text: " You won't know who has impact, or interest, or influence in the project."
  },
  {
    startTime: 5176.93,
    person: 'Pamela',
    text: " It's chaos, and this directly impacts the quality of any deliverable that you do."
  },
  { startTime: 5183.77, person: 'Pamela', text: ' Any deliverable.' },
  { startTime: 5184.85, person: 'Pamela', text: ' You can name it.' },
  {
    startTime: 5186.23,
    person: 'Pamela',
    text: ' Requirements, process maps, architectural deliverables, everything.'
  },
  {
    startTime: 5192.81,
    person: 'Pamela',
    text: ' Absolutely everything, because you might get the right information from the wrong people.'
  },
  {
    startTime: 5198.03,
    person: 'Pamela',
    text: ' You might get the wrong information from the right people.'
  },
  { startTime: 5202.21, person: 'Pamela', text: " It's chaos." },
  { startTime: 5203.57, person: 'Pamela', text: " It's absolute chaos." },
  {
    startTime: 5206.23,
    person: 'Karol',
    text: ' I would argue one thing, because looking at psychology, our brains are wired to build models, right?'
  },
  {
    startTime: 5217.01,
    person: 'Karol',
    text: " Because we need the simplification of reality, because we're not capable of coping with the full extent of what reality is, so we simplify it into models."
  },
  {
    startTime: 5226.99,
    person: 'Karol',
    text: ' Would you say that an individual is doing stakeholder mapping whether they want it or not?'
  },
  {
    startTime: 5235.75,
    person: 'Karol',
    text: ' Implicitly, by experiencing those stakeholders, by talking to them, by building relationships?'
  },
  {
    startTime: 5244.97,
    person: 'Pamela',
    text: ' I love that question, Carol, and let me tell you why I love it.'
  },
  {
    startTime: 5250.91,
    person: 'Pamela',
    text: " Who hasn't organised a dinner, or attended a family dinner, and the person organising the dinner is like, oh, grandma and grandpa are coming."
  },
  { startTime: 5263.03, person: 'Pamela', text: ' Grandpa drinks too much.' },
  { startTime: 5264.53, person: 'Pamela', text: ' Hide the beer.' },
  { startTime: 5266.09, person: 'Pamela', text: " Grandma doesn't want to sit beside her aunt." },
  { startTime: 5269.59, person: 'Pamela', text: " They're fighting right now." },
  {
    startTime: 5271.57,
    person: 'Pamela',
    text: ' Put the children, set up another table in the room.'
  },
  { startTime: 5274.47, person: 'Pamela', text: " They're too noisy." },
  { startTime: 5276.05, person: 'Pamela', text: " Who hasn't mapped stakeholders?" },
  {
    startTime: 5281.53,
    person: 'Pamela',
    text: " Whether you like it or not, we've mapped stakeholders, and it's to our benefit to do it."
  },
  {
    startTime: 5291.11,
    person: 'Karol',
    text: ' But I think the key of stakeholder mapping on the project is that the map is available and'
  },
  {
    startTime: 5297.57,
    person: 'Karol',
    text: ' accessible to the team rather than the individual, because we still, on top of the stakeholder'
  },
  {
    startTime: 5303.67,
    person: 'Karol',
    text: ' mapping that we do on the project, we will still have our own individual stakeholder maps that are'
  },
  {
    startTime: 5310.05,
    person: 'Karol',
    text: ' not one-to-one to the map that we actually show and build that is available for the team, for the'
  },
  {
    startTime: 5315.69,
    person: 'Karol',
    text: ' project, for whoever, because of our personal perspectives, biases, and relationships within'
  },
  {
    startTime: 5322.27,
    person: 'Karol',
    text: ' the team, or within the project, or within the company.'
  },
  {
    startTime: 5326.73,
    person: 'Karol',
    text: ' But that stakeholder map and doing it is for the benefit of a team as a lowest unit rather than an individual as a lowest unit, or the project as a lowest unit even, so a bigger scope of people in that sense.'
  },
  {
    startTime: 5345.23,
    person: 'Karol',
    text: " I think that's the key here to understand the scope, and then apply chaos to that level if"
  },
  {
    startTime: 5352.77,
    person: 'Karol',
    text: " we don't do that stakeholder mapping, because then we actually show impact of the lack of a"
  },
  {
    startTime: 5359.49,
    person: 'Karol',
    text: ' stakeholder map, because that impacts the entire team project, specific deliverables,'
  },
  {
    startTime: 5366.23,
    person: 'Karol',
    text: ' specific dependencies, and the quality of those specific deliverables, while if we just put it'
  },
  { startTime: 5374.85, person: 'Karol', text: " down to an individual, well, what's the impact?" },
  {
    startTime: 5378.01,
    person: 'Karol',
    text: " That I will not be able to do my work for a week because I'll be waiting, because I got the wrong info?"
  },
  {
    startTime: 5385.03,
    person: 'Karol',
    text: " That's little of an impact in the grand scheme of things, company-wise, let's say."
  },
  { startTime: 5393.87, person: 'Pamela', text: ' Oh yeah, sure.' },
  { startTime: 5394.87, person: 'Pamela', text: " I mean, it's like a snowball going downhill." },
  {
    startTime: 5397.39,
    person: 'Pamela',
    text: " It picks up more speed the bigger it gets, and so if you have stakeholder mapping at the individual level versus having it communicated at the team level or the organisation level, I mean, it's to develop a common understanding, and it's kind of leaping into roles and responsibilities as well, if somebody has a high interest and high influence and a high impact."
  },
  {
    startTime: 5424.87,
    person: 'Pamela',
    text: " And I think it's important to underscore as well that we have our official stakeholder maps, and we have our unofficial ones, because, you know, I do a lot of work in government, and we know that we can't say if a certain team is underperforming, and we can't rely on them, even though they have a high interest and a high influence."
  },
  {
    startTime: 5448.37,
    person: 'Pamela',
    text: ' So we have our official stakeholder maps, and then we have our personal unofficial ones.'
  },
  {
    startTime: 5454.77,
    person: 'Karol',
    text: ' And we cannot really voice them that loud, because that might be considered very inappropriate and at times dangerous for our being in that organisation at times, just to acknowledge voice that there is that dependency, right?'
  },
  { startTime: 5469.73, person: 'Karol', text: ' That might be thin ice.' },
  { startTime: 5475.69, person: 'Karol', text: ' All right.' },
  {
    startTime: 5476.77,
    person: 'Karol',
    text: ' So we touched upon dependencies, which touched upon lack of stakeholder maps, and what does that do to individuals and projects.'
  },
  {
    startTime: 5488.03,
    person: 'Karol',
    text: ' Should we dive into some tools to actually provide some help for people to what tools they can use to actually start mapping stakeholders, start analysing stakeholders?'
  },
  { startTime: 5502.51, person: 'Pamela', text: ' Yeah, sure.' },
  { startTime: 5503.29, person: 'Pamela', text: ' Sure.' },
  { startTime: 5503.55, person: 'Pamela', text: " Let's dive into that." },
  { startTime: 5505.09, person: 'Karol', text: ' All right.' },
  {
    startTime: 5505.45,
    person: 'Karol',
    text: ' So we already covered the grid influence impact power.'
  },
  {
    startTime: 5512.55,
    person: 'Karol',
    text: " Which one would you, because you didn't write down a few for me here."
  },
  { startTime: 5516.57, person: 'Karol', text: ' So which one would you want to start with?' },
  {
    startTime: 5520.01,
    person: 'Pamela',
    text: " I think, you know, I think that's probably the one that people would want to start with, even though we've already covered it and talked about it."
  },
  {
    startTime: 5528.21,
    person: 'Pamela',
    text: ' That would be my suggestion is for people to start with that one.'
  },
  {
    startTime: 5532.97,
    person: 'Pamela',
    text: " I also think that there's some there's some other ones that, you know, and the main issue that I have with the tools that are commonly used is that they are just so linear, you know, they're missing out so much."
  },
  {
    startTime: 5547.65,
    person: 'Pamela',
    text: " And I think that but it's a good place to start, definitely."
  },
  {
    startTime: 5553.37,
    person: 'Karol',
    text: ' And impact power grid is a good place to start them.'
  },
  { startTime: 5557.47, person: 'Pamela', text: " It's a good place to start." },
  { startTime: 5559.03, person: 'Pamela', text: ' Yeah.' },
  { startTime: 5560.03, person: 'Pamela', text: ' And a lot of people use the onion diagram.' },
  { startTime: 5564.45, person: 'Pamela', text: " I don't know if you have a picture of that." },
  { startTime: 5567.03, person: 'Karol', text: " Oh, I'll find it." },
  { startTime: 5574.91, person: 'Karol', text: ' All right.' },
  { startTime: 5575.65, person: 'Karol', text: ' I do.' },
  {
    startTime: 5576.03,
    person: 'Karol',
    text: ' I do have a few, just let me find one that might be somewhat good to visualise things.'
  },
  { startTime: 5584.02, person: 'Karol', text: ' I think this one would be it wise.' },
  { startTime: 5590.09, person: 'Karol', text: ' Decent enough.' },
  { startTime: 5593.21, person: 'Karol', text: ' Let me let me put that on.' },
  { startTime: 5599.25, person: 'Karol', text: ' Oh, yeah, something like this.' },
  { startTime: 5601.89, person: 'Karol', text: ' Sure.' },
  { startTime: 5602.41, person: 'Karol', text: ' Is that the right onion?' },
  { startTime: 5604.39, person: 'Pamela', text: " That's as good as any." },
  { startTime: 5606.39, person: 'Karol', text: " Okay, so we're touching up to Shrek." },
  { startTime: 5609.11, person: 'Karol', text: " And that's, we have layers." },
  { startTime: 5612.29, person: 'Pamela', text: " That's right." },
  {
    startTime: 5613.67,
    person: 'Pamela',
    text: ' So in the middle, this one says product, but it could also say, say you like me as an individual.'
  },
  {
    startTime: 5621.53,
    person: 'Pamela',
    text: ' And it shows the people who are shows the inner circles, the outer circles, and maybe the inner ones are the people who are closest to you in developing that product.'
  },
  {
    startTime: 5634.77,
    person: 'Pamela',
    text: " Maybe it's your subject matter experts or your domain experts."
  },
  {
    startTime: 5638.69,
    person: 'Pamela',
    text: ' Maybe the outer layer is the regulatory agencies.'
  },
  {
    startTime: 5642.41,
    person: 'Pamela',
    text: ' And I actually see in this image, there is the regulators and financial beneficiaries, maybe people owning the stock or the clients or the public.'
  },
  {
    startTime: 5654.09,
    person: 'Pamela',
    text: ' So this actually is a nice representation of and what it shows is that these are the people I need to think about.'
  },
  {
    startTime: 5661.83,
    person: 'Pamela',
    text: ' And this is the distance, the proximity from me.'
  },
  {
    startTime: 5665.87,
    person: 'Pamela',
    text: ' And so if people are closer to my inner circle, what are the ways in which I need to engage them and get to know them and what their needs are, and their requirements, right?'
  },
  { startTime: 5678.65, person: 'Karol', text: ' I have a different one.' },
  {
    startTime: 5680.99,
    person: 'Pamela',
    text: " Yes, there's so many different varieties of the onion, more of a public sector, I suppose."
  },
  { startTime: 5686.89, person: 'Pamela', text: ' Okay.' },
  {
    startTime: 5688.67,
    person: 'Karol',
    text: ' I think this is healthcare in this, in this, in the US, I suppose, I guess, looking at Secretary of State and such things that Right.'
  },
  {
    startTime: 5700.65,
    person: 'Karol',
    text: ' Yeah, so we have public and patients as the focus point of the onion, the core.'
  },
  {
    startTime: 5707.97,
    person: 'Karol',
    text: " And then we have, oh, that's probably UK, then GP, general practitioner services, dentists, home care, care homes, hospitals, mental health, community services, public health services."
  },
  {
    startTime: 5719.89,
    person: 'Karol',
    text: ' So the actual actual closest thing to a patient or an individual being part of the public then.'
  },
  {
    startTime: 5729.49,
    person: 'Karol',
    text: " And then on top of that, local organisations, so mapped variously with dots, those that are and then it's also colour coded, I see them empowering patients, improving public health, providing care, a commissioning care, supporting providers of care."
  },
  {
    startTime: 5755.15,
    person: 'Karol',
    text: ' So yeah, these are and then grouped within the layers by by different groups.'
  },
  {
    startTime: 5760.05,
    person: 'Karol',
    text: ' So the outer layer has as actually groups like regular regulations, and education outcomes framework and Parliament being one.'
  },
  {
    startTime: 5772.17,
    person: 'Karol',
    text: " So that's a very, very high level, I suppose, more of a dissecting a very large group of stakeholders."
  },
  { startTime: 5780.93, person: 'Karol', text: ' And there are dependencies.' },
  {
    startTime: 5782.69,
    person: 'Karol',
    text: ' So looking at the dependencies of the public as a beneficiaries of a health system in this in this case.'
  },
  { startTime: 5790.09, person: 'Karol', text: ' So not that individual as as the previous one.' },
  { startTime: 5794.73, person: 'Karol', text: " Let's see if I can find another one." },
  { startTime: 5798.47, person: 'Karol', text: ' Very quickly.' },
  { startTime: 5802.01, person: 'Karol', text: ' There are some of them are very messy.' },
  { startTime: 5803.51, person: 'Karol', text: " If I look at them, they're there." },
  {
    startTime: 5805.95,
    person: 'Karol',
    text: ' Jackie Reed would have a comment about diagramming and showing information on those specific diagrams.'
  },
  {
    startTime: 5814.25,
    person: 'Karol',
    text: ' We need to invite Jackie Reed to the show sometime just to talk about communicating information over diagrams.'
  },
  { startTime: 5821.71, person: 'Pamela', text: ' Jackie is the master in visual communication.' },
  {
    startTime: 5824.85,
    person: 'Pamela',
    text: " And even I mean, you know, if we were to save this diagram as a black and white image, we wouldn't be able to understand it, right?"
  },
  {
    startTime: 5834.59,
    person: 'Karol',
    text: " There's only that would be probably quite problematic."
  },
  { startTime: 5840.49, person: 'Karol', text: ' Yeah, either way.' },
  { startTime: 5841.63, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 5841.85,
    person: 'Karol',
    text: ' So here, faculty, staff, advisors, students and administrators as they probably beneficiary and then internal, but indirect stakeholders as the middle layer, enrolment management, institutional assessment and research.'
  },
  {
    startTime: 5860.49,
    person: 'Karol',
    text: " It's very hard to dissect those when they're out of context, and we don't know what the context of the diagram is specifically."
  },
  {
    startTime: 5866.73,
    person: 'Karol',
    text: " So maybe not the best examples, but that kind of conveys the idea of putting where they are in distance of, of the problem space that we're dealing with problem domain."
  },
  { startTime: 5882.09, person: 'Karol', text: ' So to speak.' },
  { startTime: 5883.91, person: 'Pamela', text: " That's right." },
  {
    startTime: 5884.83,
    person: 'Pamela',
    text: " It's a good place to, to start as well, having the onion diagrams and the real power I find of these tools is when you share them with your team and you develop them with your team, because then you're going to find out, oh, you know, what is another person I need to add on to the onion, you know, because when we do things in isolation and by ourself, we're not going to get the best result."
  },
  {
    startTime: 5911.55,
    person: 'Pamela',
    text: " And what it does as well as it's, it's team building, but it's also consensus, and it's building a common understanding about who are the people that we need to map out."
  },
  {
    startTime: 5924.15,
    person: 'Pamela',
    text: " That's where I find is the powerful because, you know, onion diagrams are, of themselves, they're very simple."
  },
  { startTime: 5929.97, person: 'Pamela', text: " They're very simple to do." },
  { startTime: 5931.37, person: 'Pamela', text: " They're simple to look at." },
  {
    startTime: 5933.65,
    person: 'Pamela',
    text: ' But when we start sharing them, and we build that common understanding of who our stakeholders are, and what are they going to do?'
  },
  { startTime: 5941.39, person: 'Pamela', text: " That's the power." },
  {
    startTime: 5943.69,
    person: 'Karol',
    text: ' Because the power is basically in clashing that those perspectives, right?'
  },
  {
    startTime: 5950.47,
    person: 'Karol',
    text: ' Because we can use even the same terms and still have different semantic meaning to them, which means that we still are completely elsewhere.'
  },
  {
    startTime: 5960.61,
    person: 'Karol',
    text: " And then when we clash them and talk about them and try to define them, that's that's bringing the actual value because it's building that shared understanding, which is, I think, one of the most challenging things in any field."
  },
  {
    startTime: 5974.45,
    person: 'Karol',
    text: " And not only it that's life in general is that because we have those different perspectives, and we think and we have different mental models."
  },
  { startTime: 5983.41, person: 'Karol', text: " It's very hard to align." },
  { startTime: 5986.51, person: 'Pamela', text: ' Oh, 100%.' },
  { startTime: 5987.79, person: 'Pamela', text: ' And then it diverges from there, right?' },
  { startTime: 5991.55, person: 'Pamela', text: " It doesn't converge, it diverges from there." },
  {
    startTime: 5995.03,
    person: 'Pamela',
    text: ' I started a new project in the federal government.'
  },
  {
    startTime: 6000.39,
    person: 'Pamela',
    text: ' And one of the first things that I did is say, okay, well, what are our artefacts going to be?'
  },
  {
    startTime: 6006.81,
    person: 'Pamela',
    text: ' And I established that glossary was going to be the first one of the first ones that I did.'
  },
  { startTime: 6012.97, person: 'Pamela', text: ' And then we do it on an ongoing basis.' },
  {
    startTime: 6015.25,
    person: 'Pamela',
    text: ' Because, you know, you can, first of all, to understand the term, to have a common understanding over the term, and many legal terms are so technical.'
  },
  {
    startTime: 6024.23,
    person: 'Pamela',
    text: " But it's also to leverage that information into other artefacts, so that it's, it's accurate."
  },
  {
    startTime: 6030.69,
    person: 'Pamela',
    text: ' And I mean, whether that turns into the beginning of a data dictionary or not, or turns into something else.'
  },
  {
    startTime: 6036.65,
    person: 'Pamela',
    text: " But is the Are you speaking the same language, you know, let's start there."
  },
  {
    startTime: 6042.61,
    person: 'Karol',
    text: ' We literally had a live stream on living language and maintaining ubiquitous language at the beginning of January with Chris Simon.'
  },
  {
    startTime: 6052.03,
    person: 'Karol',
    text: ' And we highlighted that there are even tools for that, that we can leverage as plugins in the browser is just a matter of preparing that glossary.'
  },
  {
    startTime: 6061.63,
    person: 'Karol',
    text: ' And then using that plugin, and all of a sudden, all of a sudden, the dictionary is right available as you browse through Confluence or whatever other page.'
  },
  {
    startTime: 6069.73,
    person: 'Karol',
    text: ' And it just highlights the terms and you can see the meaning of very easily.'
  },
  {
    startTime: 6074.83,
    person: 'Karol',
    text: ' So it that establishing the glossary is one thing, but then actually treating this as a living language and evolving language and having that iterative approach.'
  },
  {
    startTime: 6085.55,
    person: 'Karol',
    text: " That's one of the biggest challenges there that that any field has."
  },
  {
    startTime: 6090.75,
    person: 'Karol',
    text: " And in it with all those various specialisations and different fields of architecture, that's already been challenging."
  },
  {
    startTime: 6099.95,
    person: 'Karol',
    text: " I know I have troubles talking to data architects, because our languages just differ so crazily that it's very hard to establish common terms."
  },
  {
    startTime: 6111.83,
    person: 'Karol',
    text: ' Right, I have a glossary in my head that trans well glossary dictionary that translates from data architecture terms to integration architecture terms.'
  },
  {
    startTime: 6118.83,
    person: 'Karol',
    text: ' And I start using when talking to data architects, I start using their data, their terms to make my life easier.'
  },
  {
    startTime: 6125.57,
    person: 'Karol',
    text: ' But to get to that dictionary that took a lot of effort, and a lot of arguments, and a lot of misinformation passing through and misconceptions going by.'
  },
  { startTime: 6139.67, person: 'Karol', text: " So that's a difficult one." },
  {
    startTime: 6142.33,
    person: 'Karol',
    text: ' Okay, what about stakeholder map in terms of coverage?'
  },
  {
    startTime: 6146.55,
    person: 'Karol',
    text: " How can we leverage coverage tools to see if we're missing some voices or have invisible contributors or overlooking problematic or risky stakeholders?"
  },
  { startTime: 6161.85, person: 'Karol', text: ' How can we do that tool wise?' },
  {
    startTime: 6165.15,
    person: 'Pamela',
    text: ' I would say it starts with your contact, your main contact, whoever that is the project manager, the sponsor, whoever your main contact is, start there and get their perspective about the stakeholders that we need the coverage.'
  },
  { startTime: 6183.25, person: 'Pamela', text: ' And, you know, we can.' },
  {
    startTime: 6186.01,
    person: 'Pamela',
    text: ' And then I would actually talk to those stakeholders and say, Well, this is my list.'
  },
  { startTime: 6192.15, person: 'Pamela', text: " Is there anybody who's missing?" },
  {
    startTime: 6194.19,
    person: 'Pamela',
    text: " Is there anybody who, you know, maybe it's not even their official role, but they'd be very valuable for me to talk to."
  },
  {
    startTime: 6202.41,
    person: 'Pamela',
    text: " So it's kind of like asking a lot of people a lot of questions."
  },
  {
    startTime: 6207.99,
    person: 'Pamela',
    text: " And I think there's a tendency for people to go with the list that they're given, talk to these people, and that's it."
  },
  {
    startTime: 6218.27,
    person: 'Pamela',
    text: ' And I think that I rally against that a lot, or at least I try to.'
  },
  { startTime: 6224.05, person: 'Pamela', text: ' And I say, Okay, well, this is my list.' },
  {
    startTime: 6226.61,
    person: 'Pamela',
    text: ' But is there anybody who was on this project before, who might be able to give me some background information?'
  },
  { startTime: 6234.75, person: 'Pamela', text: ' Oh, yes, yes, yes, yes.' },
  { startTime: 6236.49, person: 'Pamela', text: ' Fred was on the project.' },
  { startTime: 6238.21, person: 'Pamela', text: ' 10 years ago.' },
  { startTime: 6239.63, person: 'Pamela', text: " He's still with us." },
  {
    startTime: 6240.69,
    person: 'Pamela',
    text: ' He knows everything in the company might be worth it to spend an hour with him.'
  },
  { startTime: 6246.83, person: 'Karol', text: " That's an invisible stakeholder." },
  { startTime: 6249.49, person: 'Pamela', text: ' Invisible.' },
  {
    startTime: 6250.83,
    person: 'Karol',
    text: " If you don't ask the question, you will not get that on the list that person, right?"
  },
  {
    startTime: 6256.41,
    person: 'Karol',
    text: ' So how can we how can we other than creating a list?'
  },
  { startTime: 6260.25, person: 'Karol', text: ' How can we visualise that?' },
  {
    startTime: 6265.88,
    person: 'Karol',
    text: ' Because you said yourself, people are visual beings.'
  },
  { startTime: 6269.08, person: 'Karol', text: ' We learn visually.' },
  {
    startTime: 6270.68,
    person: 'Karol',
    text: ' So how can we make that more tangible other than just a list?'
  },
  {
    startTime: 6275.68,
    person: 'Karol',
    text: ' Because these are not linear dependencies between those stakeholders or those topics and stakeholders.'
  },
  {
    startTime: 6282.96,
    person: 'Pamela',
    text: ' I would start the stakeholder mapping, like the interest or influence grid, the onion diagram.'
  },
  { startTime: 6292.28, person: 'Pamela', text: ' I would use those and replace a list.' },
  {
    startTime: 6297.08,
    person: 'Pamela',
    text: ' Because for the reason that you pointed out, I mean, a list is, is very linear thinking.'
  },
  {
    startTime: 6301.84,
    person: 'Pamela',
    text: " It's, it doesn't show dynamics, it doesn't show a web."
  },
  {
    startTime: 6305.9,
    person: 'Pamela',
    text: ' It has a limited utility, other than do we have all the right names.'
  },
  {
    startTime: 6311,
    person: 'Pamela',
    text: ' But you need to know the relationships, you need to know, you know, who am I going to interview versus who am I going to ask to review the material, right, that I that I gather that I elicit.'
  },
  {
    startTime: 6324.5,
    person: 'Pamela',
    text: ' So yeah, I would definitely once you get this list of stakeholders, put them into a different tool and try to show those dynamics and get to know what those dynamics look like.'
  },
  { startTime: 6336.2, person: 'Karol', text: ' What about something like this?' },
  { startTime: 6338.94, person: 'Karol', text: ' So a bit of a type of a mind map.' },
  {
    startTime: 6343.52,
    person: 'Karol',
    text: ' I was trying to find stakeholder map in Google Images.'
  },
  {
    startTime: 6348.96,
    person: 'Karol',
    text: ' And most of these were impact power grid, or onion, literally.'
  },
  { startTime: 6355.46, person: 'Karol', text: ' And then I stumbled into this beauty.' },
  {
    startTime: 6359.7,
    person: 'Karol',
    text: ' Beauty, colourful, meaning is, again, out of context.'
  },
  { startTime: 6364.26, person: 'Karol', text: ' So basically, not exactly understandable.' },
  {
    startTime: 6366.78,
    person: 'Karol',
    text: " But basically, what I see it maps different companies for in different sectors that may be potentially, let's say, impacted in this case, I'm guessing."
  },
  {
    startTime: 6379.28,
    person: 'Karol',
    text: ' So the question is, would that kind of mind mapping be a relevant tool for stakeholder mapping?'
  },
  {
    startTime: 6389.02,
    person: 'Pamela',
    text: " You know, I haven't used mind mapping for stakeholder mapping, but I can see how it might be useful in some situations."
  },
  { startTime: 6398.06, person: 'Pamela', text: ' Definitely to show the connections.' },
  {
    startTime: 6400.86,
    person: 'Pamela',
    text: " I mean, if you think inversely, if you think, well, what if we just put this image here into a list, a list wouldn't show all of these connections."
  },
  {
    startTime: 6410.62,
    person: 'Pamela',
    text: ' You know, some of these bubbles are connected to some, but not to others.'
  },
  { startTime: 6414.88, person: 'Pamela', text: ' Right?' },
  { startTime: 6415.24, person: 'Pamela', text: ' So I think that it could have a role.' },
  {
    startTime: 6419.14,
    person: 'Pamela',
    text: " I haven't actually used it myself, a mind map for stakeholders, because I have those other tools that I use."
  },
  {
    startTime: 6427.72,
    person: 'Pamela',
    text: ' But I could see somebody having some, getting some value out of this.'
  },
  {
    startTime: 6432.82,
    person: 'Karol',
    text: " I'm guessing probably depending on the complexity of the project at hand, and the level, the number of levels of dependencies between the different stakeholders."
  },
  {
    startTime: 6445.24,
    person: 'Karol',
    text: ' So I think this could potentially be an extension of the hierarchical diagram of a company or a project.'
  },
  {
    startTime: 6458.91,
    person: 'Karol',
    text: " I'm guessing that if we use a mind map, we start with that hierarchy, and then start mapping interdependencies, and basically creating that kind of web, instead of a tree like structure."
  },
  {
    startTime: 6473.23,
    person: 'Pamela',
    text: ' Well, especially if you also add in what their role would be or what artefact they would be involved in.'
  },
  {
    startTime: 6482.63,
    person: 'Pamela',
    text: ' So if you, for example, this on this diagram here, I see the yellow is about construction.'
  },
  {
    startTime: 6490.57,
    person: 'Pamela',
    text: " So if it is, and it's a bit small for me, but if you were to attach the deliverables, the artefacts that would be related to this, you might have construction doing a lot of them, but then there's some dotted lines from some other stakeholders, stakeholder groups, right?"
  },
  {
    startTime: 6515.07,
    person: 'Pamela',
    text: " I mean, then you're increasing the utility of this diagram."
  },
  {
    startTime: 6522.51,
    person: 'Karol',
    text: ' That would definitely make sense to have it as a kind of a stakeholder map in that sense.'
  },
  {
    startTime: 6530.78,
    person: 'Karol',
    text: ' What about, again, for mapping and mapping those different perspectives, I learned some time ago'
  },
  {
    startTime: 6537.2,
    person: 'Karol',
    text: ' about a tool called stakeholder wheel, which is basically something that Maxim also asked about'
  },
  {
    startTime: 6545.36,
    person: 'Karol',
    text: ' earlier about categorising the stakeholders, and the stakeholder wheels cuts the stakeholders into,'
  },
  {
    startTime: 6556.74,
    person: 'Karol',
    text: " well, that's the proposed in the book, because, of course, you can add different categories,"
  },
  {
    startTime: 6561.74,
    person: 'Karol',
    text: ' but eight categories, and as I learned it, it was, first of all, it cuts into external, internal,'
  },
  {
    startTime: 6569.18,
    person: 'Karol',
    text: " and then let's say you have owners, managers, employees, regulators, suppliers, partners,"
  },
  {
    startTime: 6580.76,
    person: 'Karol',
    text: " customers, competitors, let's say this kind of list, so eight categories of different stakeholders,"
  },
  {
    startTime: 6589.02,
    person: 'Karol',
    text: " and I tried it on a project, and we, because we're in consulting, I made two stakeholder wheel"
  },
  {
    startTime: 6597.4,
    person: 'Karol',
    text: " diagrams, one looking at my key beneficiaries of the project, who's ordering my direct work,"
  },
  {
    startTime: 6606.7,
    person: 'Karol',
    text: ' and what is their stakeholder wheel, who are their owners of the work, managers, employees, regulators'
  },
  {
    startTime: 6614.52,
    person: 'Karol',
    text: ' for that work, etc., and then at the same time, I did that same exercise, but from consulting'
  },
  {
    startTime: 6621.36,
    person: 'Karol',
    text: ' perspective, from me as a consultant, or the company, consulting company, what are our stakeholders'
  },
  {
    startTime: 6627.78,
    person: 'Karol',
    text: ' on this project, and these are two different perspectives, and the lists were very, very'
  },
  {
    startTime: 6634.06,
    person: 'Karol',
    text: ' different from if, when looked at that angle, so then who I need to look out for from perspective'
  },
  {
    startTime: 6640.7,
    person: 'Karol',
    text: ' of me being a consultant, but then who am I supposed to look out for when working on that'
  },
  { startTime: 6647.46, person: 'Karol', text: ' specific project?' },
  { startTime: 6650.9, person: 'Pamela', text: ' And was it useful tool for you?' },
  {
    startTime: 6654.38,
    person: 'Karol',
    text: ' To get a grip on reality when onboarding to that project, very useful, and to my amazement, nobody did any stakeholder management at that point, where the project was already running for two years.'
  },
  { startTime: 6667.88, person: 'Pamela', text: ' Oh, wow.' },
  { startTime: 6669.76, person: 'Karol', text: ' So all the stakeholders were' },
  {
    startTime: 6672.7,
    person: 'Karol',
    text: " managed in people's heads with their mental models, with their small mental stakeholder maps,"
  },
  {
    startTime: 6681.94,
    person: 'Karol',
    text: ' and some of the people I asked, the so-called trusted contacts, that I asked about'
  },
  {
    startTime: 6689.16,
    person: 'Karol',
    text: ' these things, who are the stakeholders, some of them really had problems naming those stakeholders,'
  },
  {
    startTime: 6695.89,
    person: 'Karol',
    text: ' and I had to ask so many people just to get a decent map that actually had overlaps of those'
  },
  {
    startTime: 6701.67,
    person: 'Karol',
    text: " stakeholders named and described who are they, what are their roles, what's their impact,"
  },
  {
    startTime: 6713.55,
    person: 'Karol',
    text: " where they land in the project, what's their interest in the projects, what's their motivation"
  },
  {
    startTime: 6718.17,
    person: 'Karol',
    text: ' for the project, are they very involved in the project, etc.'
  },
  {
    startTime: 6722.85,
    person: 'Karol',
    text: ' That took me at least two weeks to go through the people that I could reach directly very quickly and just ask them and get that information to get a grip on reality.'
  },
  {
    startTime: 6736.69,
    person: 'Karol',
    text: ' And then I still was surprised by certain stakeholders popping up on meetings just unannounced, and I have no idea who they are.'
  },
  {
    startTime: 6743.51,
    person: 'Karol',
    text: " So I didn't know how to play the game against them, because suddenly somebody comes and the whole energy in the room shifts, they suck in all the energy, and it's like, what just happened?"
  },
  { startTime: 6756.09, person: 'Karol', text: ' Who is that person?' },
  { startTime: 6757.65, person: 'Karol', text: ' Why are they here speaking at this point?' },
  { startTime: 6760.83, person: 'Karol', text: ' And why everybody is listening?' },
  { startTime: 6763.41, person: 'Karol', text: " What's going on?" },
  { startTime: 6766.19, person: 'Pamela', text: " What's going on?" },
  {
    startTime: 6767.55,
    person: 'Pamela',
    text: ' So you discovered after two years that there was no stakeholder mapping done initially.'
  },
  { startTime: 6772.73, person: 'Pamela', text: ' And I have a question for you.' },
  { startTime: 6774.53, person: 'Pamela', text: ' How was that project going?' },
  { startTime: 6779.11, person: 'Karol', text: ' I would rather not comment.' },
  {
    startTime: 6786.61,
    person: 'Pamela',
    text: " Yeah, it's hard on the project team when there's no stakeholder mapping."
  },
  { startTime: 6792.33, person: 'Pamela', text: " It's really difficult on the team." },
  {
    startTime: 6797.17,
    person: 'Karol',
    text: " To that extent, again, we still don't really know, because of the lack of stakeholder management, we still really don't know who actually calls the shots, who actually makes those decisions, decisions are just communicated, if even."
  },
  {
    startTime: 6813.23,
    person: 'Karol',
    text: " And it's very difficult to navigate, especially to have sensible and noted down requirements, like nailed down just to execute them."
  },
  {
    startTime: 6825.91,
    person: 'Karol',
    text: ' They shift, and the shifts are at times drastic, because of that.'
  },
  { startTime: 6834.02, person: 'Pamela', text: " Yeah, it's big impact stuff." },
  { startTime: 6837.3, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 6839.18,
    person: 'Karol',
    text: " And project went for over two years now, and it's still undelivered."
  },
  {
    startTime: 6848.98,
    person: 'Karol',
    text: ' I mean, nothing hit production, and then still somewhat problematic.'
  },
  {
    startTime: 6858.46,
    person: 'Karol',
    text: " And it's hard to say what the direction is, because, again, very hard to pinpoint who's making the decisions and who to ask about what the direction should be."
  },
  { startTime: 6870.65, person: 'Pamela', text: " Yeah, it's not clear." },
  { startTime: 6871.95, person: 'Karol', text: ' No, not clear at all.' },
  {
    startTime: 6873.71,
    person: 'Karol',
    text: ' And I think that one of the problems is that exactly was the lack of stakeholder management and addressing the right stakeholders, and building those relationships with them, or at least managing those relationships, because I believe that all of them want to have a relationship with the consulting firm at this point.'
  },
  {
    startTime: 6896.51,
    person: 'Karol',
    text: " Because that's another issue about the willingness to work with external consultants."
  },
  {
    startTime: 6904.49,
    person: 'Karol',
    text: " That's a completely different ballpark of a problem."
  },
  { startTime: 6908.33, person: 'Pamela', text: ' It is.' },
  { startTime: 6909.67, person: 'Pamela', text: " Yeah, that's a whole new show." },
  { startTime: 6911.47, person: 'Karol', text: " That's a whole new show." },
  {
    startTime: 6912.89,
    person: 'Karol',
    text: " That's also part of stakeholder management, I suppose."
  },
  {
    startTime: 6915.59,
    person: 'Karol',
    text: ' But solving that one is way, way beyond anything business analysis-wise, right?'
  },
  { startTime: 6921.97, person: 'Karol', text: ' Yeah.' },
  { startTime: 6923.91, person: 'Pamela', text: " It's a big monster problem." },
  { startTime: 6927.13, person: 'Pamela', text: ' Yeah.' },
  { startTime: 6928.51, person: 'Karol', text: ' Okay.' },
  {
    startTime: 6929.13,
    person: 'Karol',
    text: " So I think we touched upon a lot of these things, but let's just sum up a few."
  },
  {
    startTime: 6942.51,
    person: 'Karol',
    text: ' So when all the slices that we make, and all the cuts, and all the looking around the pieces come together, what do we get from actually glueing all that back together when we sliced it, diced it, analysed, looked under a microscope, a magnifying glass, and whatever else?'
  },
  {
    startTime: 6960.67,
    person: 'Karol',
    text: " What's the outcome that we should get if we do it right?"
  },
  { startTime: 6966.97, person: 'Pamela', text: ' We should get a well-run project.' },
  { startTime: 6969.53, person: 'Pamela', text: ' We should get a project.' },
  { startTime: 6971.05, person: 'Pamela', text: ' Yeah, seriously.' },
  { startTime: 6972.47, person: 'Pamela', text: ' A project where people are happy to be on.' },
  { startTime: 6976.43, person: 'Pamela', text: ' Things run smoothly.' },
  {
    startTime: 6977.67,
    person: 'Pamela',
    text: ' Deliverables get done to the quality that people are expecting.'
  },
  { startTime: 6983.21, person: 'Pamela', text: " There's not a lot of issues." },
  { startTime: 6985.85, person: 'Pamela', text: ' And yeah, we should get a well-run project.' },
  {
    startTime: 6991.23,
    person: 'Karol',
    text: ' And this is through the tools also by exposing proximity, right?'
  },
  { startTime: 6997.59, person: 'Karol', text: ' So how far...' },
  {
    startTime: 6999.59,
    person: 'Karol',
    text: " What's the interest level of those stakeholders as well as presence of those?"
  },
  { startTime: 7005.31, person: 'Karol', text: ' So do they contribute or not contribute?' },
  {
    startTime: 7007.89,
    person: 'Karol',
    text: " And then whether it's the power of them, how much of a decision-making power they have, how much of an impact they can bring with that power to the project, right?"
  },
  {
    startTime: 7019.95,
    person: 'Karol',
    text: ' We get those dynamics in and understand those dynamics.'
  },
  { startTime: 7025.09, person: 'Pamela', text: ' Yeah.' },
  {
    startTime: 7026.23,
    person: 'Pamela',
    text: ' You get the right people at the table at the right time for the right thing.'
  },
  { startTime: 7031.07, person: 'Pamela', text: " That's what you get." },
  { startTime: 7032.97, person: 'Karol', text: ' Fair enough.' },
  {
    startTime: 7034.57,
    person: 'Karol',
    text: ' So the outcome of stakeholder slicing and dicing would be the surfacing of the true dynamics between stakeholders to be able to benefit from those true dynamics to surface requirements, understanding of the scope, understanding of the problem space.'
  },
  {
    startTime: 7052.07,
    person: 'Karol',
    text: ' And all that is just that groundwork of establishing stakeholders and mapping them out.'
  },
  { startTime: 7058.93, person: 'Pamela', text: ' Yeah.' },
  { startTime: 7059.57, person: 'Pamela', text: " It's powerful stuff." },
  { startTime: 7061.17, person: 'Pamela', text: ' You got it.' },
  {
    startTime: 7063.17,
    person: 'Karol',
    text: ' Well, at least I understand stakeholder mapping now.'
  },
  {
    startTime: 7066.97,
    person: 'Karol',
    text: ' So the importance of it, because it really does help.'
  },
  {
    startTime: 7071.79,
    person: 'Karol',
    text: ' I noticed that some time ago that it really does help.'
  },
  {
    startTime: 7074.63,
    person: 'Karol',
    text: ' And now we have it condensed into the live stream.'
  },
  { startTime: 7081.19, person: 'Karol', text: ' Just looking at the notes.' },
  { startTime: 7084.03, person: 'Karol', text: " Oh, one thing we didn't touch upon, Pamela." },
  { startTime: 7090.46, person: 'Karol', text: ' Resistance.' },
  {
    startTime: 7093.58,
    person: 'Karol',
    text: ' What to do if we have those stakeholders that are resisting, that we have resistance or we were predicting resistance?'
  },
  {
    startTime: 7102.1,
    person: 'Karol',
    text: ' What should we anticipate when we are actually dealing with stakeholders in interviews and meetings and workshops, requirements gathering, all of these processes?'
  },
  {
    startTime: 7116.52,
    person: 'Pamela',
    text: ' So my go-to is root cause analysis and to figure out, well, first of all, what kind of resistance, right?'
  },
  { startTime: 7124.9, person: 'Pamela', text: ' Okay.' },
  { startTime: 7125.58, person: 'Pamela', text: ' What kind of resistance is it?' },
  { startTime: 7128.06, person: 'Pamela', text: ' When did it start?' },
  { startTime: 7129.96, person: 'Pamela', text: ' Is it still going on?' },
  { startTime: 7131.42, person: 'Pamela', text: ' Is it a pattern?' },
  {
    startTime: 7132.56,
    person: 'Pamela',
    text: ' Is this person always resisting or just on this project or just on this artefact?'
  },
  {
    startTime: 7139.08,
    person: 'Pamela',
    text: ' Find all those different elements of resistance and identify them.'
  },
  { startTime: 7145.2, person: 'Pamela', text: ' These are cues, right?' },
  {
    startTime: 7147.28,
    person: 'Pamela',
    text: ' And then start asking questions from that person where there is resistance.'
  },
  {
    startTime: 7153.98,
    person: 'Pamela',
    text: " You know, I find a lot of resistance is people, it's miscommunication."
  },
  { startTime: 7159.42, person: 'Pamela', text: " It's not feeling appreciated." },
  { startTime: 7160.82, person: 'Pamela', text: " It's not being heard." },
  { startTime: 7162.4, person: 'Pamela', text: " It's not being listened to." },
  { startTime: 7163.6, person: 'Pamela', text: " It's not being understood." },
  {
    startTime: 7165.3,
    person: 'Pamela',
    text: " That's where I found most of the root cause of resistance coming from, an apathy, right?"
  },
  { startTime: 7171.24, person: 'Pamela', text: ' Well, they never listened to us anyway.' },
  { startTime: 7173.3, person: 'Pamela', text: ' So why would I do anything now?' },
  {
    startTime: 7177.04,
    person: 'Pamela',
    text: ' So resistance is a cue to bigger things, to other things.'
  },
  {
    startTime: 7182.92,
    person: 'Pamela',
    text: " And it's kind of up to us to figure out what that might be."
  },
  {
    startTime: 7187.46,
    person: 'Pamela',
    text: " You know, I always think that apathy is one of the worst things that could ever happen on a project when it comes to a stakeholder because apathy is, well, I just don't care."
  },
  {
    startTime: 7198.02,
    person: 'Pamela',
    text: " You know, like you've reached the point where you just don't care."
  },
  { startTime: 7201.38, person: 'Pamela', text: ' So what happened that preceded that apathy?' },
  {
    startTime: 7204.6,
    person: 'Pamela',
    text: ' How long has that been going on and what happened and what was the triggers?'
  },
  { startTime: 7208.86, person: 'Pamela', text: " And, you know, it's, yeah, start digging." },
  { startTime: 7212.28, person: 'Pamela', text: " That's what I would do." },
  {
    startTime: 7214.1,
    person: 'Karol',
    text: ' So anticipate pushback and then dig into it and why, why, why, why?'
  },
  { startTime: 7219.46, person: 'Pamela', text: ' Why, why, why.' },
  { startTime: 7220.56, person: 'Karol', text: ' Why, why, why.' },
  {
    startTime: 7222.22,
    person: 'Karol',
    text: ' So alongside the why, that does also mean that we need to be flexible and adjust.'
  },
  {
    startTime: 7229.4,
    person: 'Karol',
    text: ' So adjust our communication, adjust our angle of questioning.'
  },
  {
    startTime: 7234.24,
    person: 'Karol',
    text: ' So rigid forms to gather information are not going to work in that case.'
  },
  {
    startTime: 7241.46,
    person: 'Karol',
    text: ' We need to be, we need to be creative on the spot in that sense.'
  },
  { startTime: 7248.19, person: 'Pamela', text: ' Yeah.' },
  {
    startTime: 7248.81,
    person: 'Pamela',
    text: " I think, you know, as a consultant, I'm a chameleon and I change for every company, every client, every project."
  },
  {
    startTime: 7260.19,
    person: 'Pamela',
    text: " So if you put your feelers out and you understand what you're walking into, you understand the stakeholders, the dynamics and you change."
  },
  {
    startTime: 7268.79,
    person: 'Pamela',
    text: ' And as you say, you know, be flexible and adaptable.'
  },
  { startTime: 7272.41, person: 'Pamela', text: " That's the mark of survival, right?" },
  { startTime: 7274.53, person: 'Pamela', text: ' Like, can you adapt?' },
  {
    startTime: 7276.25,
    person: 'Pamela',
    text: " Seen it in species and that's where we have to go as an external consultant and as an internal consultant, you know, as a worker for a company, it's to be adaptable and be a chameleon."
  },
  { startTime: 7290.97, person: 'Karol', text: ' Yeah.' },
  { startTime: 7291.61, person: 'Karol', text: ' Chameleon.' },
  {
    startTime: 7292.41,
    person: 'Karol',
    text: " And now the key question from Maxim is, who's actually going to be doing this work?"
  },
  {
    startTime: 7299.59,
    person: 'Karol',
    text: ' Who should be doing this work and solving those challenges?'
  },
  {
    startTime: 7304.39,
    person: 'Karol',
    text: " And I think that's a, that's a bit of a question without an explicit answer, because I would guess the only right answer here is it depends."
  },
  { startTime: 7315.55, person: 'Karol', text: ' Sure.' },
  { startTime: 7316.23, person: 'Karol', text: " But let's, let's dismantle the it depends." },
  {
    startTime: 7319.61,
    person: 'Karol',
    text: ' So it depends on what and how we can approach that and divide and conquer, because I suppose that would be the approach in general.'
  },
  { startTime: 7328.09, person: 'Pamela', text: ' Sure.' },
  {
    startTime: 7328.65,
    person: 'Pamela',
    text: ' So as a business analyst, I would be solving challenges related to business analysis, but not the budget of the project, right?'
  },
  { startTime: 7337.99, person: 'Pamela', text: " That's somebody else's." },
  {
    startTime: 7339.15,
    person: 'Pamela',
    text: ' So what is your role and responsibility on the project?'
  },
  { startTime: 7342.19, person: 'Pamela', text: ' It can start there.' },
  {
    startTime: 7344.05,
    person: 'Pamela',
    text: " I think that even if it isn't your official job to map out stakeholders, and, you know, as we've talked about, the typical tools are so limited and so linear, that even if the project manager does it, it might not have a lot of real utility for us."
  },
  { startTime: 7361.63, person: 'Pamela', text: " Because they're so linear and so limited." },
  {
    startTime: 7364.17,
    person: 'Pamela',
    text: " And we've talked about so many different ways how to map out stakeholders."
  },
  {
    startTime: 7367.61,
    person: 'Pamela',
    text: " So it's really not about, you know, who should do it."
  },
  { startTime: 7371.21, person: 'Pamela', text: " But it's about do we want to benefit from it." },
  {
    startTime: 7374.65,
    person: 'Pamela',
    text: " And in that case, I'm the one doing it from my purview around business analysis."
  },
  {
    startTime: 7382.27,
    person: 'Karol',
    text: ' But that would mean also that everyone else should actually do it from their perspective of their role and their responsibilities.'
  },
  { startTime: 7391.11, person: 'Pamela', text: ' They should if they want to benefit from it.' },
  { startTime: 7396.67, person: 'Karol', text: ' Well, yeah, fair enough.' },
  {
    startTime: 7399.59,
    person: 'Karol',
    text: " Because if they don't, they're just not going to reap the benefits."
  },
  {
    startTime: 7402.89,
    person: 'Karol',
    text: ' Is there a scenario where there, it makes no sense to map it?'
  },
  { startTime: 7409.07, person: 'Pamela', text: " I can't think of one." },
  { startTime: 7410.45, person: 'Pamela', text: " In over 20 years, I can't think of one." },
  {
    startTime: 7414.85,
    person: 'Karol',
    text: ' Because I just, I just, in my head just opened up and, you know, a storm of different roles in different companies.'
  },
  {
    startTime: 7424.53,
    person: 'Karol',
    text: " And for a moment there popped a McDonald's restaurant."
  },
  {
    startTime: 7427.97,
    person: 'Karol',
    text: " And would there be sense for a McDonald's employee working at the cashier booth to map their stakeholders?"
  },
  { startTime: 7438.97, person: 'Karol', text: ' And at first I was like, yeah, not really.' },
  {
    startTime: 7443.35,
    person: 'Karol',
    text: " But then I'm thinking like career-wise or progression-wise, and it's like, actually, that might actually make sense."
  },
  {
    startTime: 7455.19,
    person: 'Karol',
    text: ' A lot of sense to map out stakeholders, even working as a cashier, if you want to progress in that company.'
  },
  {
    startTime: 7463.67,
    person: 'Karol',
    text: " Of course, if it's a temporary student job, not really."
  },
  {
    startTime: 7471.37,
    person: 'Karol',
    text: ' But for progression sake and just understanding the dependencies and how to move forward, or just how to network to know the right people to move forward, for example.'
  },
  { startTime: 7486.81, person: 'Pamela', text: ' Sure.' },
  {
    startTime: 7487.97,
    person: 'Pamela',
    text: " I mean, that was one of my first jobs, working at McDonald's as a cashier."
  },
  {
    startTime: 7493.15,
    person: 'Pamela',
    text: ' And I knew some managers were motivated and interested.'
  },
  { startTime: 7498.83, person: 'Pamela', text: " I had other managers who didn't care." },
  {
    startTime: 7501.41,
    person: 'Pamela',
    text: " Some managers you could learn from, some you couldn't."
  },
  { startTime: 7504.83, person: 'Pamela', text: ' I mean, I had everybody mapped out.' },
  {
    startTime: 7507.05,
    person: 'Pamela',
    text: ' Even the team leads and my co-workers, I had them all mapped out, even without knowing what stakeholder mapping is.'
  },
  {
    startTime: 7514.83,
    person: 'Pamela',
    text: ' Because it was to my benefit to know how do people show up on the chessboard, you know?'
  },
  {
    startTime: 7523.63,
    person: 'Karol',
    text: " But then I'm guessing you did that subconsciously because that's the unique quality of how your brain works at this point."
  },
  {
    startTime: 7532.07,
    person: 'Karol',
    text: " I don't think that a regular, normal person, neurotypical person would actually do that, you know?"
  },
  { startTime: 7539.55, person: 'Karol', text: " That's my educated guess." },
  { startTime: 7541.23, person: 'Karol', text: " That wouldn't probably happen." },
  { startTime: 7543.65, person: 'Pamela', text: " That's interesting." },
  {
    startTime: 7544.95,
    person: 'Pamela',
    text: " I hope people comment on that observation that you had, because I'd be interested in knowing, do other people do this subconsciously?"
  },
  { startTime: 7554.05, person: 'Pamela', text: ' Or am I just the odd one here?' },
  {
    startTime: 7557.05,
    person: 'Karol',
    text: ' Because, I mean, subconsciously, probably to an extent, yes.'
  },
  { startTime: 7561.39, person: 'Karol', text: ' But to a very detailed level, probably no.' },
  {
    startTime: 7566.77,
    person: 'Karol',
    text: ' Just looking at my, I remember myself as a student, in my brain, very analytical, autistic brain in that case, literally exiting the apartment and going to the university, which was, say, about 10, 15-minute walk to my faculty from home.'
  },
  {
    startTime: 7590.31,
    person: 'Karol',
    text: ' My brain had an algorithm of different scenarios in the morning, where I need to go, how I need to go, which way to go, just optimise my route each morning.'
  },
  {
    startTime: 7605.75,
    person: 'Karol',
    text: ' Each morning, a fresh algorithm outlining what I need to do, what I need to get through the day.'
  },
  {
    startTime: 7611.85,
    person: 'Karol',
    text: ' Do I need to buy myself a sandwich at the shop before classes, et cetera?'
  },
  {
    startTime: 7617.69,
    person: 'Karol',
    text: ' When I compared that to my colleagues, most of them never did kind of thing.'
  },
  { startTime: 7622.85, person: 'Karol', text: " They just went on, oh, I'm hungry." },
  {
    startTime: 7624.73,
    person: 'Karol',
    text: " Okay, I'm going to step into the shop just to buy something."
  },
  { startTime: 7628.55, person: 'Karol', text: ' My brain had an algorithm.' },
  {
    startTime: 7630.63,
    person: 'Karol',
    text: " So that might, you know, this is always an interesting thing, because being neuroatypical, you don't really know how other brains work and what other people think."
  },
  {
    startTime: 7642.75,
    person: 'Karol',
    text: " You assume you know, you assume that they do the same, until you learn that they don't."
  },
  {
    startTime: 7649.07,
    person: 'Karol',
    text: " And that's always funny, because we don't even understand which aspects were actually different than the majority of people."
  },
  {
    startTime: 7657.87,
    person: 'Karol',
    text: " That's, that's a completely different conversation."
  },
  {
    startTime: 7660.33,
    person: 'Karol',
    text: ' I think this is, this is something to just have a few conversations with colleagues and figure out, do you actually do the same?'
  },
  {
    startTime: 7668.25,
    person: 'Karol',
    text: " But then again, if we work in IT, and the majority of IT is actually neuroatypical, and they don't even know it, we might get that answer, yes, and that becomes the new norm."
  },
  { startTime: 7678.83, person: 'Karol', text: ' Which is biassed at best, right?' },
  {
    startTime: 7681.81,
    person: 'Karol',
    text: " So yeah, that's a different problem states, right?"
  },
  { startTime: 7691.21, person: 'Pamela', text: ' Computer brain.' },
  { startTime: 7692.59, person: 'Karol', text: ' Computer brain.' },
  { startTime: 7693.43, person: 'Karol', text: ' Yeah.' },
  { startTime: 7695.33, person: 'Karol', text: ' Maxim, I have no idea what the BFS or a DFS is.' },
  { startTime: 7701.01, person: 'Karol', text: ' So you would have to explain.' },
  {
    startTime: 7702.87,
    person: 'Karol',
    text: ' I really, I really hate acronyms for that, because they mean so many things, and the same means so little.'
  },
  { startTime: 7710.33, person: 'Karol', text: ' Sorry, not acronyms, abbreviations.' },
  {
    startTime: 7712.07,
    person: 'Karol',
    text: " I have no idea what you mean here, but if that was a BLT, then I would know that's a subway sandwich."
  },
  { startTime: 7724.47, person: 'Karol', text: ' Still, still remember that one.' },
  { startTime: 7726.37, person: 'Karol', text: ' But otherwise, no idea.' },
  { startTime: 7731.33, person: 'Karol', text: ' All right.' },
  {
    startTime: 7733.01,
    person: 'Karol',
    text: " So, stakeholder chaos, just to sum it up, because we're already over two hours in, I think it's a good, good moment to just put a bit of a summary."
  },
  {
    startTime: 7744.25,
    person: 'Karol',
    text: ' So we talked about all the chaos, and that this chaos actually has a hidden structure to it.'
  },
  {
    startTime: 7751.01,
    person: 'Karol',
    text: " We don't really know that structure from looking at the hierarchy of a company, or just reading what people tell us."
  },
  {
    startTime: 7759.85,
    person: 'Karol',
    text: ' We need to discover it to an extent, but the structure is there, and the structure is, can be very dynamic.'
  },
  {
    startTime: 7766.25,
    person: 'Karol',
    text: ' In this structure, we have patterns, and those patterns vary in degrees and complexity and types.'
  },
  {
    startTime: 7775.17,
    person: 'Karol',
    text: " Some of them are relationships, other are emotional, other are history, whatever that may be, those patterns are there, and it's a matter of training ourselves to spot them, and find out what is an actually recurring pattern in behaviour, in relationships, etc."
  },
  {
    startTime: 7794.25,
    person: 'Karol',
    text: ' All of this can be mapped, and we do it somewhat subconsciously, and then all of this can be influenced, if you know how, and if you dig into the root cause.'
  },
  { startTime: 7809.39, person: 'Karol', text: ' Does that sum it up about right?' },
  {
    startTime: 7813.43,
    person: 'Pamela',
    text: ' It does, and the only thing that I would add is that we have our official version of stakeholder mapping, and then we have our own personal one.'
  },
  { startTime: 7824.04, person: 'Karol', text: ' Okay, yes, fair enough.' },
  {
    startTime: 7825.52,
    person: 'Karol',
    text: ' Yes, and not always worth sharing the personal one.'
  },
  {
    startTime: 7829.1,
    person: 'Karol',
    text: ' Be very mindful about sharing your personal stakeholder mapping, because that might be a dangerous game that would actually influence other relationships, and possibly create more problems than solutions.'
  },
  { startTime: 7840.8, person: 'Karol', text: ' Could be.' },
  { startTime: 7842.68, person: 'Karol', text: ' Oh, there we go.' },
  { startTime: 7845.56, person: 'Karol', text: ' Maxime elaborated.' },
  { startTime: 7847.48, person: 'Karol', text: ' Breadth-first search, depth-first search graph.' },
  {
    startTime: 7852.18,
    person: 'Karol',
    text: " See, I didn't study algorithms at university, because I was studying electrical engineering, so my basis is doing signal processing rather than graph algorithms."
  },
  { startTime: 7863.64, person: 'Karol', text: " That's why I didn't know those." },
  {
    startTime: 7868.46,
    person: 'Karol',
    text: ' I think that was, in my case, when I was going out of the home, that was more of a breadth-first in scoping the options, and then outlining the depth of sequence of things that need to happen.'
  },
  {
    startTime: 7890.5,
    person: 'Karol',
    text: " Not sure, but that's my educated guess of what was happening in my brain at that time."
  },
  { startTime: 7896.82, person: 'Karol', text: ' So, yes, pathfinding algorithms.' },
  {
    startTime: 7900.98,
    person: 'Karol',
    text: ' Yes, so breadth-first algorithm for breakfast and getting to the university.'
  },
  { startTime: 7908, person: 'Karol', text: ' Brains are fascinating.' },
  { startTime: 7909.52, person: 'Karol', text: ' Yes, they are.' },
  { startTime: 7912.66, person: 'Karol', text: ' All right, everybody.' },
  { startTime: 7914.24, person: 'Karol', text: " It's been a very informative session." },
  { startTime: 7918.22, person: 'Karol', text: ' So, before we go offline, a few announcements.' },
  {
    startTime: 7925.48,
    person: 'Karol',
    text: " So, we're not going to be having any more loosely coupled streams this month, because February is just so packed with all various things, and presentations, and trainings, and too much."
  },
  {
    startTime: 7940.06,
    person: 'Karol',
    text: " So, the next stream is actually on the 4th of March, and we're going to be talking to Hien Verschatsche, a consultant from Ardling, and we're going to be talking about decision-making."
  },
  {
    startTime: 7953.52,
    person: 'Karol',
    text: " That kind of sounds like something we can put into an algorithm, to an extent, and that this skill of decision-making is actually a little bit of a loss in all the tasks that we're doing."
  },
  {
    startTime: 7967.12,
    person: 'Karol',
    text: " I think the premise is that we're all running with wheelbarrows, and those wheelbarrows are quite empty at times, and statements like, we've always done it this way."
  },
  {
    startTime: 7977.94,
    person: 'Karol',
    text: ' So, that will be probably a very, very, very, very interesting conversation.'
  },
  {
    startTime: 7983.3,
    person: 'Karol',
    text: " Now, if you're new to Bridging the Gap, or new to the YouTube channel, well, QR codes on the sides."
  },
  { startTime: 7992.8, person: 'Karol', text: ' Go and see upcoming events of Bridging the Gap.' },
  {
    startTime: 7996.32,
    person: 'Karol',
    text: ' Go and look at what we have on the YouTube channel.'
  },
  { startTime: 7998.74, person: 'Karol', text: " There's plenty of live stream recordings there." },
  {
    startTime: 8001.42,
    person: 'Karol',
    text: " And also, with Philip Costera, we're now running an integration-specific training, strategic integration design with DDD at DDD Academy, and we're teaching how to design interoperability at an ecosystem scale."
  },
  {
    startTime: 8016.04,
    person: 'Karol',
    text: " So, it's a challenging piece of content, and we're trying our best to outline it as easy as possible."
  },
  { startTime: 8026.34, person: 'Karol', text: ' Not always possible.' },
  {
    startTime: 8028.46,
    person: 'Karol',
    text: " But if you're interested, again, and see what that's all about."
  },
  { startTime: 8034.08, person: 'Karol', text: " That's it." },
  { startTime: 8035.06, person: 'Karol', text: ' Pamela, thank you for a lovely conversation.' },
  { startTime: 8038.54, person: 'Karol', text: ' Thank you for tonight.' },
  {
    startTime: 8040.2,
    person: 'Karol',
    text: ' And everybody, thank you for all the comments and questions.'
  }
])
</script>

<style scoped></style>
