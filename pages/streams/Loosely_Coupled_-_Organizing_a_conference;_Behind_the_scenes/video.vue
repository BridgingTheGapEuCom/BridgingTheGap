<template>
  <div class="w-full">
    <StreamLayout
      :transcript="transcript"
      name="Loosely Coupled - Organizing a conference Behind the scenes"
      video-id="c6U63Z1w3Yc"
    />
  </div>
</template>

<script lang="ts" setup>
const transcript = ref([
  {
    startTime: 92.17,
    person: 'Karol',
    text: ' Good morning, good afternoon and good evening everybody and welcome to another episode of Loosely Coupled by Bridging the Gap.'
  },
  {
    startTime: 99.31,
    person: 'Karol',
    text: " My name is Karol Skrzymowski and I'll be your host tonight."
  },
  {
    startTime: 102.45,
    person: 'Karol',
    text: " And today we're having a quite a peculiar topic, behind the scenes of conferences."
  },
  {
    startTime: 109.53,
    person: 'Karol',
    text: " So we're going to be having some fun learning about what's going on behind the scenes and how long does it take to organise a conference."
  },
  { startTime: 118.97, person: 'Karol', text: " I don't really know." },
  {
    startTime: 120.07,
    person: 'Karol',
    text: " I have a rough idea as a speaker what's going on, but that's just my limited point of view."
  },
  {
    startTime: 128.669,
    person: 'Karol',
    text: " So, not to be too blunt and to take too long, today with us, first of all, the reason why we're doing this on Tuesday, not on a Wednesday, is Annika Schonjans, coming to us from Ardling, being the event manager and the person behind Domain Driven Design Europe, Data Mesh Live, event-centric and as well as a little bit in terms of new crafts in Paris."
  },
  { startTime: 155.81, person: 'Karol', text: ' Welcome Annika.' },
  { startTime: 156.71, person: 'Anneke', text: ' Hi, Karol.' },
  {
    startTime: 158.95,
    person: 'Karol',
    text: " And on the side of call for speakers, call for papers, and evaluating submissions, we have Maxime, sorry, Maxime, I'm going to butcher your last name, Sanglam Charlier, an engineering manager from PayFit, and Maxime has been kind enough to join us here in capacity of programme manager for conferences, as this is one of the roles he plays around the topic."
  },
  { startTime: 192.29, person: 'Karol', text: ' Welcome, Maxime.' },
  { startTime: 193.43, person: 'Maxime', text: ' Thanks a lot.' },
  { startTime: 193.85, person: 'Karol', text: ' Did I butcher the name too much?' },
  { startTime: 195.65, person: 'Maxime', text: " No, that's okay." },
  { startTime: 197.33, person: 'Karol', text: ' Sanglam Charlier.' },
  { startTime: 199.23, person: 'Karol', text: ' Oh, that butchered quite heavily.' },
  {
    startTime: 203.13,
    person: 'Karol',
    text: " French names, I'm sorry, not able to pronounce anything French, really, pardon me."
  },
  {
    startTime: 209.99,
    person: 'Karol',
    text: ' So, I hope everybody has a nice cup of something to drink today.'
  },
  { startTime: 213.29, person: 'Karol', text: " I got some green tea and water, so that's nice." },
  { startTime: 217.65, person: 'Karol', text: ' Perfect, fantastic.' },
  {
    startTime: 220.43,
    person: 'Karol',
    text: " So, Annika, you're the reason why we are on Tuesday."
  },
  {
    startTime: 224.21,
    person: 'Karol',
    text: " Would you care to tell everybody what you're doing on Wednesdays and why we had to reschedule to Tuesday?"
  },
  {
    startTime: 230.75,
    person: 'Anneke',
    text: ' On Wednesday, I do skateboarding lessons for older ladies who start to skate.'
  },
  { startTime: 242.23, person: 'Karol', text: ' Adventurous, older ladies.' },
  { startTime: 243.85, person: 'Karol', text: " So, what's the average of age there?" },
  { startTime: 246.43, person: 'Anneke', text: " Well, I think I'm one of the older ones." },
  {
    startTime: 250.67,
    person: 'Anneke',
    text: " I think most are 30, 30 plus, but it's a different way of learning to skate when you're a bit older, another youngster."
  },
  { startTime: 261.75, person: 'Anneke', text: " So, it's a different way of going ahead." },
  {
    startTime: 266.19,
    person: 'Anneke',
    text: " So, it's fun that you're amongst peers that are all equally as scared as you are, but it is really weird to be taught by young kids who show off their tricks the whole time."
  },
  { startTime: 281.65, person: 'Anneke', text: " But yeah, it's something new to do." },
  { startTime: 284.43, person: 'Anneke', text: ' I like to do new stuff all the time.' },
  {
    startTime: 286.75,
    person: 'Anneke',
    text: " So, you're lucky I was available on Tuesday nights because then I actually take courses, but I was able to change those."
  },
  {
    startTime: 295.41,
    person: 'Karol',
    text: " You're doing a lot of things in your life outside of conferences, right?"
  },
  { startTime: 300.05, person: 'Karol', text: ' All right, should we dive into the topic?' },
  { startTime: 303.25, person: 'Karol', text: ' Please do.' },
  {
    startTime: 304.11,
    person: 'Karol',
    text: ' Or would you want to say something more about yourself, what you do on a regular basis outside of conference work before we dive in?'
  },
  {
    startTime: 311.73,
    person: 'Anneke',
    text: ' I could, but actually most of my day is actually organising conferences.'
  },
  {
    startTime: 319.95,
    person: 'Anneke',
    text: ' At Aertling, I do some other work for my colleagues and for the team, but main part of my job is helping out or organising DDD Europe and the other conferences we do.'
  },
  {
    startTime: 334.89,
    person: 'Anneke',
    text: " So, I'm going to talk enough about my days in the next hours, I think."
  },
  { startTime: 340.59, person: 'Anneke', text: " So, it's a bit different for you, Maxime." },
  { startTime: 344.75, person: 'Maxime', text: ' Yeah, yeah.' },
  { startTime: 346.49, person: 'Maxime', text: " I'm an engineering manager at PayFit." },
  {
    startTime: 349.91,
    person: 'Maxime',
    text: " It's a French company that helps people deal with PIPs."
  },
  {
    startTime: 355.55,
    person: 'Maxime',
    text: " We do have also HRIS softwares and I'm part of the permission and identity team."
  },
  {
    startTime: 363.99,
    person: 'Maxime',
    text: ' So, everything around authorisation, authentication and stuff.'
  },
  { startTime: 367.87, person: 'Maxime', text: " So, we're right in the middle of everything." },
  { startTime: 369.91, person: 'Maxime', text: " It's pretty challenging." },
  { startTime: 371.59, person: 'Maxime', text: " So, that's what I'm doing." },
  { startTime: 374.03, person: 'Maxime', text: ' Yeah.' },
  {
    startTime: 375.51,
    person: 'Maxime',
    text: ' Among other things like organising conferences, yes.'
  },
  {
    startTime: 379.35,
    person: 'Karol',
    text: " It's a regular job, a little bit different than doing events in that sense."
  },
  { startTime: 386.71, person: 'Karol', text: ' Alrighty.' },
  { startTime: 387.39, person: 'Karol', text: ' So, where do we begin with conferences?' },
  {
    startTime: 389.93,
    person: 'Karol',
    text: " Because obviously the day of the conference is a long, long way from the beginning, isn't it?"
  },
  { startTime: 397.29, person: 'Karol', text: ' So, yeah.' },
  {
    startTime: 402.5,
    person: 'Karol',
    text: ' Logistics, because I think that starting the conference is more on the logistics side than call for papers.'
  },
  { startTime: 410.52, person: 'Anneke', text: ' Well, yes and no.' },
  {
    startTime: 413.88,
    person: 'Anneke',
    text: ' As I mentioned quickly before is that it actually starts with an idea.'
  },
  { startTime: 421.08, person: 'Anneke', text: ' If you want to start a new conference.' },
  { startTime: 423.72, person: 'Anneke', text: " I'm now working for DDD Europe." },
  { startTime: 425.38, person: 'Anneke', text: ' The idea is already there.' },
  { startTime: 426.68, person: 'Anneke', text: ' The concept is already there.' },
  {
    startTime: 428.78,
    person: 'Anneke',
    text: ' But if you want to start out with something new, you first need to have an idea and a goal and a vision.'
  },
  {
    startTime: 437.8,
    person: 'Anneke',
    text: ' And that would not be my job because I have no insights in that.'
  },
  {
    startTime: 442.72,
    person: 'Anneke',
    text: ' That would be for Maxime and people who are actually, I would say, interested in these things.'
  },
  { startTime: 450.04, person: 'Anneke', text: " But it's their subject." },
  { startTime: 453.3, person: 'Anneke', text: " So, I don't know, Maxime." },
  { startTime: 455.38, person: 'Anneke', text: ' Actually, how did you start NewCrafts?' },
  {
    startTime: 458.38,
    person: 'Maxime',
    text: ' So, the conference is an idea from the founder, Rui Carvalho, who is a friend of mine who decided like we, he was also organising a meetup, the alternative.net meetup in Paris.'
  },
  {
    startTime: 479.66,
    person: 'Maxime',
    text: ' And I was a regular participant of this meetup and speaking there, also attending other talks.'
  },
  { startTime: 488.4, person: 'Maxime', text: ' It was a very, very cool crowd.' },
  {
    startTime: 492.06,
    person: 'Maxime',
    text: ' And Rui was feeling like, hey, we should maybe start doing a conference because all the topics were discussed were really beyond just .NET and everything around the ecosystem of .NET, but more like, yeah, looking at everything outside.'
  },
  { startTime: 515.299, person: 'Maxime', text: ' And Microsoft was pretty close at that time.' },
  {
    startTime: 517.84,
    person: 'Maxime',
    text: ' So, it was unusual to have people doing Microsoft stuff, looking at other things like open source projects and stuff like that.'
  },
  {
    startTime: 527.12,
    person: 'Maxime',
    text: ' So, yeah, we were starting also going to different conferences and, yeah, we felt like, hey, we should do something in Paris.'
  },
  {
    startTime: 539.72,
    person: 'Maxime',
    text: ' And so, Rui, I think he did a survey, sent a survey to all the participants of the meetup, say, would you like to have a conference and started like that.'
  },
  { startTime: 550.5, person: 'Maxime', text: ' So, the first one was pretty small.' },
  {
    startTime: 555.34,
    person: 'Maxime',
    text: ' We, another founder of the conference, a co-founder of the conference had his company allowing us to be there using all the conference rooms they had and the catering from the company.'
  },
  { startTime: 572.88, person: 'Maxime', text: ' So, it was pretty easy.' },
  {
    startTime: 575,
    person: 'Maxime',
    text: ' And, yeah, it started like that based on this idea of growing on top of an existing community, trying to share our ideas and, yeah, to more people and people that were outside this community.'
  },
  { startTime: 595.62, person: 'Maxime', text: " So, that's how it started, actually." },
  {
    startTime: 598.44,
    person: 'Maxime',
    text: " And I don't know exactly how DDD Europe started, but I feel like it could be the same."
  },
  {
    startTime: 608.5,
    person: 'Maxime',
    text: ' There was that meeting, that meetup in Belgium, DDD Belgium, very nice meetup with great people.'
  },
  {
    startTime: 615.88,
    person: 'Maxime',
    text: ' And it turned out like in 2016 from, I think it was the second, yeah, third edition of New Crafts.'
  },
  { startTime: 628.54, person: 'Maxime', text: ' Yeah, we started in four.' },
  { startTime: 631.44, person: 'Maxime', text: ' Mathias was a speaker.' },
  { startTime: 632.98, person: 'Maxime', text: ' I think it was in 15.' },
  { startTime: 634.18, person: 'Maxime', text: " I don't know." },
  { startTime: 634.58, person: 'Maxime', text: " I don't remember the date." },
  { startTime: 635.68, person: 'Maxime', text: " It's, it's, yeah, it's 10 years ago." },
  {
    startTime: 638.58,
    person: 'Maxime',
    text: ' So, but Mathias was speaking at the conference at New Crafts and he brought some flyers announcing the launch of this brand new conference, DDD Europe.'
  },
  {
    startTime: 653.68,
    person: 'Maxime',
    text: ' And so, we displayed the logo on the big screen of the New Crafts conference announcing to everyone and we had those flyers on every chair of the conference.'
  },
  {
    startTime: 663.48,
    person: 'Maxime',
    text: ' So, we promoted DDD Europe at New Crafts because, yeah, we were already friends and, yeah, it was pretty cool to do that.'
  },
  { startTime: 676.7, person: 'Anneke', text: ' 10 years ago.' },
  { startTime: 678.48, person: 'Maxime', text: ' Yep.' },
  { startTime: 679.2, person: 'Maxime', text: ' 10 years ago.' },
  { startTime: 680.56, person: 'Karol', text: ' A long, long time.' },
  { startTime: 683.72, person: 'Karol', text: ' Definitely.' },
  { startTime: 685.38, person: 'Karol', text: ' Okay.' },
  { startTime: 685.74, person: 'Karol', text: " So, that's where conferences come from." },
  {
    startTime: 688.02,
    person: 'Karol',
    text: ' So, meetups growing into communities, growing into a conference around that community and then we, all of a sudden, pop, we have a conference.'
  },
  { startTime: 697.54, person: 'Karol', text: " But let's, let's look at the here and now." },
  { startTime: 701.46, person: 'Karol', text: ' New Crafts just ended half a month ago?' },
  { startTime: 704.92, person: 'Anneke', text: ' Yeah, just a month ago.' },
  { startTime: 706.88, person: 'Anneke', text: ' Yep.' },
  { startTime: 707.3, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 707.72,
    person: 'Karol',
    text: ' Now, we have in front of us coming up in June DDD Europe 26.'
  },
  {
    startTime: 713.66,
    person: 'Karol',
    text: ' Along the way, there are many other conferences that are already on the radar all over Europe and the world.'
  },
  { startTime: 722.22, person: 'Karol', text: " Let's give DDD Europe as an example." },
  { startTime: 724.9, person: 'Karol', text: ' What happens?' },
  {
    startTime: 725.58,
    person: 'Karol',
    text: " Because as far as I know, DDD Europe 25 hasn't ended yet and you were already working on DDD 26."
  },
  { startTime: 734.24, person: 'Anneke', text: ' Of course.' },
  { startTime: 736.24, person: 'Karol', text: ' Tell us about that.' },
  {
    startTime: 737.74,
    person: 'Karol',
    text: " Because that's the, that's the interesting part where timelines actually overlap of two different, two conferences of the same conference, two different years."
  },
  {
    startTime: 745.84,
    person: 'Anneke',
    text: " We are, we are at the scale now where you can't find venues a few months in advance."
  },
  { startTime: 752.66, person: 'Anneke', text: ' Okay.' },
  {
    startTime: 754.02,
    person: 'Anneke',
    text: ' So, as some of you know, we actually moved from Amsterdam to Antwerp last year.'
  },
  {
    startTime: 761.85,
    person: 'Anneke',
    text: " Um, what you maybe didn't know was that we visited the location pre-COVID."
  },
  { startTime: 769.64, person: 'Anneke', text: ' Um, looking, yeah, yeah.' },
  { startTime: 773.12, person: 'Anneke', text: ' Looking for new location.' },
  {
    startTime: 775.64,
    person: 'Anneke',
    text: ' Um, we really liked Amsterdam, but there were reasons to, to move, um, because of, uh, how to build a conference and different options.'
  },
  {
    startTime: 785.92,
    person: 'Anneke',
    text: ' So, Mathias and I were looking into new locations.'
  },
  { startTime: 789.72, person: 'Anneke', text: ' Yeah.' },
  {
    startTime: 789.96,
    person: 'Anneke',
    text: " I remember we visited the exact location where we're now, um, already, uh, pre-COVID, um, and then COVID happened."
  },
  { startTime: 797.66, person: 'Anneke', text: ' So, moving was not a good idea.' },
  {
    startTime: 799.66,
    person: 'Anneke',
    text: ' Um, but we had the contacts and we were visiting, um, and there were different...'
  },
  { startTime: 805.48, person: 'Karol', text: " Pre-COVID, that's 2019." },
  { startTime: 808.16, person: 'Anneke', text: ' Yeah.' },
  { startTime: 809.56, person: 'Anneke', text: ' Yeah.' },
  { startTime: 812.28, person: 'Karol', text: " That's a long time ago." },
  { startTime: 813.48, person: 'Anneke', text: " That's a, that's a long time ago." },
  { startTime: 815.62, person: 'Anneke', text: ' Yeah.' },
  {
    startTime: 816.04,
    person: 'Anneke',
    text: " But also you can't just, it's not, it's when you want to move a conference or when you want to, um, um, lock down a venue, um, it's not just with one visit that you know that you have a good space."
  },
  {
    startTime: 830.56,
    person: 'Anneke',
    text: ' Um, first of all, you need to look for, decide on a city or a country, which is, uh, already a very big discussion, uh, in our team, different opinions.'
  },
  {
    startTime: 840.56,
    person: 'Anneke',
    text: " Um, then, um, when you have a country or a city, then there's several venues that you need to visit."
  },
  {
    startTime: 848.96,
    person: 'Anneke',
    text: " Um, there's a lot of venues where they have one big room or two big rooms, but we, like, uh, our hands-ons are very popular."
  },
  { startTime: 857.48, person: 'Anneke', text: ' So, we need lots of small rooms.' },
  { startTime: 859.98, person: 'Anneke', text: ' Um, we need, um, workshop, uh, possibilities.' },
  {
    startTime: 866.06,
    person: 'Anneke',
    text: " Um, and then, um, and then there's all these aspects you need to look into."
  },
  { startTime: 874.34, person: 'Anneke', text: ' Can people easily get there?' },
  { startTime: 875.98, person: 'Anneke', text: ' Can, is there a hotel nearby?' },
  {
    startTime: 878.32,
    person: 'Anneke',
    text: " So, there's lots of things you have to take into mind."
  },
  {
    startTime: 880.48,
    person: 'Anneke',
    text: ' Um, you have to visit the venue again and again and again.'
  },
  {
    startTime: 884.34,
    person: 'Anneke',
    text: " Um, and then when you're kind of like, oh, money, I forget about the money, money, compare prices, and all the venues have different way of pricing stuff."
  },
  {
    startTime: 896.74,
    person: 'Anneke',
    text: ' Um, you can have, like, a full price, everything included, or you can have a price per participant, or you can have a price for the room, and then you have so many participants included, and then you have these extra.'
  },
  {
    startTime: 906.96,
    person: 'Anneke',
    text: ' Or then you have to break down in this venue, you also pay for this and that and that and that.'
  },
  {
    startTime: 913.24,
    person: 'Anneke',
    text: " Um, and in this venue, oh, you don't have to pay that, but you have to."
  },
  {
    startTime: 916.42,
    person: 'Anneke',
    text: ' So, it is very, a very complicated, um, um, breakdown.'
  },
  { startTime: 920.84, person: 'Anneke', text: ' And then dates.' },
  { startTime: 923.18, person: 'Anneke', text: ' Dates in locations where we are are not easy.' },
  {
    startTime: 928.78,
    person: 'Anneke',
    text: ' Um, so, you have to get options three, three years in advance.'
  },
  {
    startTime: 935.12,
    person: 'Anneke',
    text: ' Um, then you get, you know, then you play smart.'
  },
  {
    startTime: 940.34,
    person: 'Anneke',
    text: ' Um, Philippe says he loves the Miervaard, we all love the Miervaard.'
  },
  {
    startTime: 944.1,
    person: 'Anneke',
    text: " So, we keep options both in the Miervaard, and then, oh, let's, let's try Antwerp, and, and, but will we move?"
  },
  {
    startTime: 950.5,
    person: 'Anneke',
    text: ' And so, you keep a lot of balls in the air until you have to make a decision.'
  },
  { startTime: 956.4, person: 'Anneke', text: ' Um, so, um, yeah.' },
  { startTime: 961.44, person: 'Anneke', text: ' So, then we moved.' },
  { startTime: 962.22, person: 'Anneke', text: ' And we, we, we love.' },
  { startTime: 964.76, person: 'Karol', text: ' So, yeah.' },
  { startTime: 966.66, person: 'Karol', text: ' Put it, put it for me on a, on a timeline.' },
  {
    startTime: 969.9,
    person: 'Karol',
    text: ' The conference that was this year, DDD Europe in Antwerp, was the first instalment of DDD Europe in Antwerp.'
  },
  {
    startTime: 977.38,
    person: 'Karol',
    text: ' How long ago did you actually book that time slot with the, with the venue?'
  },
  { startTime: 984.46, person: 'Anneke', text: " I don't, I don't remember." },
  {
    startTime: 986.38,
    person: 'Anneke',
    text: " Um, one thing that you should know about me is that I have the worst memory ever, and that is why I'm a good event organiser, because I'm very good at writing down and keeping track of my to-dos."
  },
  { startTime: 998.52, person: 'Anneke', text: " Um, so, I don't remember." },
  { startTime: 1001.1, person: 'Anneke', text: ' True.' },
  { startTime: 1001.44, person: 'Anneke', text: ' True.' },
  { startTime: 1002.18, person: 'Anneke', text: " I don't remember." },
  { startTime: 1003.94, person: 'Karol', text: " I've seen that in action, confirm." },
  {
    startTime: 1007.6,
    person: 'Anneke',
    text: ' Uh, the, the option on the dates, we, we had since a long time, but we, we, we keep different options open.'
  },
  {
    startTime: 1016.36,
    person: 'Anneke',
    text: ' Um, deciding on the dates, I probably, yeah, yeah.'
  },
  { startTime: 1024.68, person: 'Anneke', text: " I don't remember, Karel." },
  {
    startTime: 1027.18,
    person: 'Karol',
    text: ' Is it, is it, uh, was it a year in advance or more?'
  },
  { startTime: 1031.339, person: 'Anneke', text: ' Yeah, sure.' },
  { startTime: 1032.339, person: 'Anneke', text: ' Yeah.' },
  { startTime: 1032.859, person: 'Karol', text: ' More.' },
  { startTime: 1033.88, person: 'Anneke', text: ' Okay.' },
  { startTime: 1034.119, person: 'Anneke', text: ' No, more.' },
  { startTime: 1034.94, person: 'Anneke', text: ' About that time.' },
  { startTime: 1036.24, person: 'Anneke', text: ' About that time.' },
  { startTime: 1037.16, person: 'Karol', text: ' Okay.' },
  {
    startTime: 1037.359,
    person: 'Anneke',
    text: " Because it's, as soon as you, as soon as you sign the contract, then you have to, uh, bring in the cash."
  },
  { startTime: 1044.48, person: 'Anneke', text: ' So, um, and, and do the advance payment.' },
  { startTime: 1048.18, person: 'Anneke', text: " So then there's no way back." },
  { startTime: 1049.62, person: 'Anneke', text: ' So you need to be sure about the move.' },
  {
    startTime: 1052.96,
    person: 'Anneke',
    text: ' Um, so you want to keep your option open as long as possible.'
  },
  { startTime: 1056.9, person: 'Anneke', text: ' Um, yeah.' },
  { startTime: 1058.4, person: 'Anneke', text: ' But I think, yeah, at least a year before.' },
  { startTime: 1060.7, person: 'Anneke', text: ' Sure.' },
  { startTime: 1061.04, person: 'Anneke', text: ' Yeah.' },
  { startTime: 1061.52, person: 'Karol', text: ' Right.' },
  { startTime: 1062.2, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 1062.6,
    person: 'Karol',
    text: " Because I, I do remember, uh, your posts, uh, right after DDD Europe 24, uh, just, uh, less than a month after you're already showing the new venue in Antwerp on LinkedIn."
  },
  {
    startTime: 1078.46,
    person: 'Karol',
    text: ' So I remember that it was very, very soon after the conference.'
  },
  {
    startTime: 1082.56,
    person: 'Karol',
    text: ' And I was like, yeah, that definitely has to be at least a year before.'
  },
  {
    startTime: 1086,
    person: 'Karol',
    text: " So on the day of, uh, DDD Europe 24, you already knew that it's going to be elsewhere."
  },
  { startTime: 1091.4, person: 'Karol', text: " That's going to be Antwerp." },
  { startTime: 1092.92, person: 'Anneke', text: ' Probably.' },
  { startTime: 1093.74, person: 'Anneke', text: ' Yeah.' },
  { startTime: 1094.54, person: 'Anneke', text: ' Yeah.' },
  { startTime: 1096.59, person: 'Karol', text: ' Wow.' },
  { startTime: 1097.27, person: 'Karol', text: " That's, uh, that's a long timeline then." },
  { startTime: 1100.33, person: 'Karol', text: ' Okay.' },
  {
    startTime: 1100.81,
    person: 'Karol',
    text: ' So we have the idea, we have the, uh, well, some budget already for, for initial payments.'
  },
  { startTime: 1109.97, person: 'Karol', text: ' And we have a venue a year in advance.' },
  { startTime: 1113.93, person: 'Karol', text: ' What happens then timeline wise?' },
  { startTime: 1116.31, person: 'Anneke', text: ' Uh, well, uh, it depends who you ask.' },
  {
    startTime: 1124.6,
    person: 'Karol',
    text: ' Um, well, now, now you gotta be very precise because we have somebody taking notes.'
  },
  {
    startTime: 1134.38,
    person: 'Karol',
    text: ' We have, we have a viewer from Brazil taking notes to organise a conference in Brazil.'
  },
  { startTime: 1140.38, person: 'Anneke', text: ' So they can always reach out.' },
  {
    startTime: 1144.66,
    person: 'Anneke',
    text: ' Um, I think, I think, um, um, what you need early on is your, um, your, um, your CFP.'
  },
  { startTime: 1158.06, person: 'Anneke', text: ' Not too early.' },
  {
    startTime: 1159.92,
    person: 'Anneke',
    text: " Um, but you, but you need to open that, um, to start selecting your, your speakers and to open your CFP, you need to have an idea of what talks you're looking for."
  },
  {
    startTime: 1173.66,
    person: 'Anneke',
    text: " Um, you need to have some kind of idea of how many tracks it doesn't have to be decided fully yet, but you need to have an idea of, of what you want to build."
  },
  {
    startTime: 1184.2,
    person: 'Anneke',
    text: " And, and, and, I mean, you need to announce we're going to do this conference about, uh, data mesh life."
  },
  {
    startTime: 1191.76,
    person: 'Anneke',
    text: " Uh, so we need data mesh talks, so you need some kind of input to, to, to, so that's back to you, Maxim."
  },
  { startTime: 1199.64, person: 'Anneke', text: ' How do you open the CFP?' },
  {
    startTime: 1204.19,
    person: 'Maxime',
    text: " Um, so you're right about the timing because, uh,"
  },
  {
    startTime: 1209.19,
    person: 'Maxime',
    text: " yeah, we need to, to, uh, to make sure that it's, um, open quite a long time for the conference"
  },
  {
    startTime: 1217.35,
    person: 'Maxime',
    text: ' so that you making sure that you can also have people that you would like to have at the conference'
  },
  {
    startTime: 1222.99,
    person: 'Maxime',
    text: ' because some of the speakers, uh, they do already have their planning totally full for the year to'
  },
  {
    startTime: 1230.65,
    person: 'Maxime',
    text: " come and they, uh, they won't be able to join your conference, uh, even if they, if they would like"
  },
  { startTime: 1236.77, person: 'Maxime', text: ' to.' },
  {
    startTime: 1236.99,
    person: 'Maxime',
    text: " So, um, having it organised months before it, it's, um, it's helpful for, for them because they, they can already plan, uh, there."
  },
  { startTime: 1247.53, person: 'Maxime', text: " So that's important to know." },
  {
    startTime: 1248.83,
    person: 'Maxime',
    text: ' So for you, uh, as soon as you know, uh, who is, uh, selected, then you can start reaching out and I think the travels and stuff.'
  },
  { startTime: 1259.01, person: 'Maxime', text: ' Um, so, um, yeah.' },
  {
    startTime: 1261.35,
    person: 'Maxime',
    text: " And that, that's when I will, uh, give you, uh, the, the mic again, uh, to talk about all this, this part of the organising conference, but, um, yeah, does the CFP needs to done, um, way before the conference."
  },
  {
    startTime: 1275.63,
    person: 'Maxime',
    text: ' Um, and, uh, what we did this year, we, um, the, the, the team, the organising team changed.'
  },
  {
    startTime: 1283.49,
    person: 'Maxime',
    text: ' So we, um, we, uh, moved from three to five, uh, people.'
  },
  {
    startTime: 1288.77,
    person: 'Maxime',
    text: " So we, uh, took that opportunity to have a new team to discuss again about, uh, what we'd like to, to have at the conference."
  },
  {
    startTime: 1296.33,
    person: 'Maxime',
    text: " It's very, very important to be all aligned about, um, yeah, the, the, the kind of the programme that you would like to build, uh, the, the kind of topics that you would to, uh, uh, highlight, uh, during your conference."
  },
  {
    startTime: 1310.53,
    person: 'Maxime',
    text: " Um, so we had to work on that before, um, making sure we're all aligned and we can also start in some communication about, uh, the different topics and, and, and things you would like to have."
  },
  {
    startTime: 1323.31,
    person: 'Maxime',
    text: " Um, if you're not aligned, then it will be a very difficult for you to select talks, of course, because, um, the people will, will choose different things and based on what they have in mind."
  },
  {
    startTime: 1334.43,
    person: 'Maxime',
    text: " So, uh, yeah, it's really important to, to do that beforehand."
  },
  {
    startTime: 1338.91,
    person: 'Maxime',
    text: " Um, again, it doesn't have to, to take that much time because, uh, then Anika will be upset, um, because you're not making progress."
  },
  {
    startTime: 1348.09,
    person: 'Maxime',
    text: " So, but, uh, but then, uh, as soon as it's, uh, it's, uh, it's done, then we, we can start writing the, the, um, the session nights because we are using also session nights."
  },
  {
    startTime: 1361.61,
    person: 'Maxime',
    text: " So on timeline, it's pretty, uh, um, it's a great tool, uh, for, uh, CFP."
  },
  {
    startTime: 1367.73,
    person: 'Maxime',
    text: ' Um, so you, you have to, um, to write the description of the conference.'
  },
  {
    startTime: 1372.85,
    person: 'Maxime',
    text: ' So the thing you are, um, looking for, uh, kind of talks you would like to have, uh, some, some, uh, information for speakers.'
  },
  { startTime: 1382.75, person: 'Maxime', text: ' Um, um, yeah.' },
  {
    startTime: 1385.21,
    person: 'Maxime',
    text: " And then, yeah, it's, uh, starting so people can, can start, um, submitting."
  },
  {
    startTime: 1391.73,
    person: 'Karol',
    text: ' So, so if we look at, for example, DDD Europe, when is that?'
  },
  {
    startTime: 1395.29,
    person: 'Karol',
    text: ' Because as far as I remember, both times, uh, that I remember because I attended 24 25, uh, the CFP was open very short after the conference.'
  },
  { startTime: 1406.87, person: 'Karol', text: ' So when does that happen?' },
  { startTime: 1409.83, person: 'Karol', text: ' Again?' },
  { startTime: 1411.49, person: 'Anneke', text: ' Yeah.' },
  {
    startTime: 1412.03,
    person: 'Anneke',
    text: ' We, we, sometimes the conversation starts a bit earlier, um, already during the previous year.'
  },
  {
    startTime: 1419.47,
    person: 'Anneke',
    text: " Um, I, so it, there's no strict timeline for that."
  },
  { startTime: 1426.29, person: 'Anneke', text: ' Um, you want to open the CFP early.' },
  { startTime: 1429.75, person: 'Anneke', text: " Um, but there's no strict timing." },
  { startTime: 1434.09, person: 'Anneke', text: ' When is it, when is a good time for us?' },
  {
    startTime: 1436.47,
    person: 'Anneke',
    text: ' Also our conference is now end of, um, end of the school year.'
  },
  {
    startTime: 1440.67,
    person: 'Anneke',
    text: ' So June and in summer, summer is always a bad time.'
  },
  {
    startTime: 1444.99,
    person: 'Anneke',
    text: " So for us, uh, we usually, um, know that, or we do it before the summer or there's, there's no points in the summer."
  },
  {
    startTime: 1455.65,
    person: 'Anneke',
    text: " People don't submit, people don't buy tickets or at a much lower rate."
  },
  { startTime: 1459.69, person: 'Anneke', text: ' So you need to take two months.' },
  {
    startTime: 1461.81,
    person: 'Anneke',
    text: " We don't, we don't even count them as, um, as, uh, months."
  },
  {
    startTime: 1466.23,
    person: 'Anneke',
    text: ' Um, combined with what, what Maxim said, you need to start announcing.'
  },
  { startTime: 1471.55, person: 'Anneke', text: ' You need to have your website ready.' },
  { startTime: 1473.59, person: 'Anneke', text: ' Uh, you need to announce that the CFP is open.' },
  {
    startTime: 1476.33,
    person: 'Anneke',
    text: ' You need people having a blocking their calendars.'
  },
  {
    startTime: 1479.55,
    person: 'Anneke',
    text: ' Um, so the marketing machine starts, um, and, and my colleagues actually try to make a plan for the next, for the upcoming year.'
  },
  {
    startTime: 1491.07,
    person: 'Anneke',
    text: ' Um, really they tried to structure with all the things that need to be announced with all the things that we like to bring across.'
  },
  { startTime: 1497.87, person: 'Anneke', text: ' So that is starts together with the CFP.' },
  {
    startTime: 1501.33,
    person: 'Anneke',
    text: ' And then if you see on LinkedIn, a video of me walking through a venue, then that is because we made it beforehand and they saved it and then they announced it.'
  },
  {
    startTime: 1511.27,
    person: 'Anneke',
    text: ' Uh, um, I like to make silly videos and my colleagues like to post them.'
  },
  { startTime: 1515.47, person: 'Anneke', text: " So that's, that's helpful." },
  { startTime: 1518.99, person: 'Karol', text: " They're really fun." },
  { startTime: 1520.51, person: 'Anneke', text: ' Yeah.' },
  { startTime: 1520.81, person: 'Anneke', text: ' Yeah.' },
  { startTime: 1520.97, person: 'Anneke', text: ' Yeah.' },
  { startTime: 1521.25, person: 'Anneke', text: ' Yeah.' },
  { startTime: 1521.47, person: 'Anneke', text: " They're imperfect." },
  { startTime: 1522.45, person: 'Anneke', text: ' Like, uh, like we all should be.' },
  {
    startTime: 1524.57,
    person: 'Anneke',
    text: " Um, and actually one very important aspect that, that, that for me is very important that we haven't touched yet, but that is also really, um, at the beginning of the, of the new year of the new conference is that we do a fairly, um, uh, deep retro and, uh, we go through the feedback forms, um, feedback forms also to, to evaluate us as, um, as organisers."
  },
  { startTime: 1556.95, person: 'Anneke', text: ' Um, I also get internal feedback.' },
  {
    startTime: 1559.59,
    person: 'Anneke',
    text: ' Um, a lot of my colleagues spot things that always spot things that could go better or ideas to, to improve.'
  },
  {
    startTime: 1568.49,
    person: 'Anneke',
    text: ' Um, then we see the feedback of the participants that we go through.'
  },
  { startTime: 1572.35, person: 'Anneke', text: " Sometimes there's, there's good ideas." },
  {
    startTime: 1574.37,
    person: 'Anneke',
    text: " Sometimes there's, oh, I would like more coffee."
  },
  { startTime: 1576.79, person: 'Anneke', text: ' Oh, I would like more tea.' },
  {
    startTime: 1577.85,
    person: 'Anneke',
    text: ' And then you, then you, yeah, but, but you, you take that into account.'
  },
  {
    startTime: 1581.53,
    person: 'Anneke',
    text: " You don't decide on coffee or tea yet, but I keep the idea and I put it in my to-do list for when I work on catering."
  },
  {
    startTime: 1588.01,
    person: 'Anneke',
    text: ' So you, you go through all that, um, make sure that, that you have all the ideas covered.'
  },
  {
    startTime: 1595.47,
    person: 'Anneke',
    text: ' Um, we look into our budget of the, of the last year, um, and, um, and see and prepare a budget for the next year.'
  },
  {
    startTime: 1604.45,
    person: 'Anneke',
    text: " Um, will we, there's a lot of factors that you can take into account, a lot of expenses that are recurring that you can calculate, um, but you cannot calculate your income."
  },
  { startTime: 1616.05, person: 'Anneke', text: ' So, uh, everything is an estimate.' },
  {
    startTime: 1618.71,
    person: 'Anneke',
    text: ' Um, and, um, you try to put goals for the next year.'
  },
  { startTime: 1622.41, person: 'Anneke', text: ' What do we want to do?' },
  { startTime: 1623.41, person: 'Anneke', text: ' Do we want, do we need more participants?' },
  { startTime: 1625.77, person: 'Anneke', text: ' Do we want more sponsors?' },
  { startTime: 1626.97, person: 'Anneke', text: ' Do we want more diversity?' },
  {
    startTime: 1628.87,
    person: 'Anneke',
    text: ' What, what are the goals that we want to work towards, uh, to the next year?'
  },
  { startTime: 1633.51, person: 'Anneke', text: ' Um, include more conference days.' },
  { startTime: 1637.27, person: 'Anneke', text: " Not sure if I'm pro." },
  { startTime: 1640.87, person: 'Karol', text: ' Um, but, uh, five days for DDD Europe.' },
  { startTime: 1645.29, person: 'Karol', text: " So that's quite a long time." },
  {
    startTime: 1646.97,
    person: 'Anneke',
    text: ' Three conference days and then the workshop days.'
  },
  { startTime: 1649.61, person: 'Anneke', text: ' Yeah.' },
  { startTime: 1650.01, person: 'Anneke', text: ' Yeah.' },
  {
    startTime: 1650.53,
    person: 'Anneke',
    text: " And, um, yeah, that's, that's quite a lot also for the participants."
  },
  { startTime: 1655.33, person: 'Anneke', text: " It's a, it's a lot." },
  {
    startTime: 1658.31,
    person: 'Karol',
    text: ' Going back a little to the retro, uh, and this is something I, uh, I absolutely fell in love with in the last instalment in Amsterdam.'
  },
  {
    startTime: 1667.81,
    person: 'Karol',
    text: ' Uh, when I was speaking to any of you, uh, Mattias, especially, uh, always questions about everything.'
  },
  { startTime: 1677.75, person: 'Karol', text: " What's this, how does that work?" },
  { startTime: 1679.53, person: 'Karol', text: ' How does this work?' },
  { startTime: 1680.73, person: 'Karol', text: ' This is good.' },
  { startTime: 1681.41, person: 'Karol', text: ' Is this bad?' },
  { startTime: 1682.23, person: 'Karol', text: ' Uh, what do you think?' },
  {
    startTime: 1683.43,
    person: 'Karol',
    text: ' There was so much feedback sourced on the spot on the day of the conference.'
  },
  { startTime: 1688.71, person: 'Karol', text: ' It was just, uh, amazing.' },
  { startTime: 1690.55, person: 'Karol', text: ' And these were not, uh, trivial matters.' },
  {
    startTime: 1693.17,
    person: 'Karol',
    text: ' Uh, I remember me submitting, uh, uh, for my ticket because that was that, but then sponsored by the, by the company I worked for.'
  },
  {
    startTime: 1702.77,
    person: 'Karol',
    text: ' And there were, well, space in the, uh, in the form to buy the tickets for, uh, all the recommendations, et cetera.'
  },
  {
    startTime: 1711.13,
    person: 'Karol',
    text: " Uh, at the time, because I had my ADHD still undiagnosed, I was really convinced that I have agoraphobia, which turned out to be basically panic attacks based on overstimulation on sound, which now I know, but that's a different story."
  },
  {
    startTime: 1725.99,
    person: 'Karol',
    text: ' And I remember that, uh, Mattias was literally asking about that specifically.'
  },
  {
    startTime: 1732.35,
    person: 'Karol',
    text: ' Uh, what do I think about the venue versus my psychological safety, psychological health?'
  },
  {
    startTime: 1739.29,
    person: 'Karol',
    text: " So, uh, it wasn't just like, Oh, do you like it?"
  },
  { startTime: 1743.27, person: 'Karol', text: ' No, these were in-depth questions.' },
  {
    startTime: 1745.13,
    person: 'Karol',
    text: " So, uh, in that sense, the retro, I suppose, I'm guessing based on that experience, that this is actually a really deep dig into all sorts of topics."
  },
  { startTime: 1756.49, person: 'Anneke', text: ' Yeah.' },
  { startTime: 1756.95, person: 'Anneke', text: ' Yeah.' },
  { startTime: 1757.79, person: 'Anneke', text: ' Um, true.' },
  { startTime: 1759.31, person: 'Anneke', text: ' Yeah.' },
  { startTime: 1759.95, person: 'Anneke', text: ' Uh, we, we, we gather feedback like yours.' },
  { startTime: 1762.55, person: 'Anneke', text: ' Um, things we see, things we notice.' },
  {
    startTime: 1765.21,
    person: 'Anneke',
    text: " Um, we know a lot of people on the conference and they come to us and they tell us what they liked or what they didn't like."
  },
  {
    startTime: 1771.37,
    person: 'Anneke',
    text: ' What I always ask people to do is when, um, even when my husband, when he goes to a conference, I ask him, how, how were you greeted?'
  },
  { startTime: 1780.89, person: 'Anneke', text: ' What did you like?' },
  { startTime: 1782.01, person: 'Anneke', text: " What didn't you like?" },
  { startTime: 1783.61, person: 'Anneke', text: ' Um, and we tried to, yeah.' },
  {
    startTime: 1786.15,
    person: 'Anneke',
    text: ' And, and then, um, different people have different needs, um, different opinions.'
  },
  { startTime: 1791.79, person: 'Anneke', text: " So you can't cater to everyone." },
  { startTime: 1794.17, person: 'Anneke', text: " Um, but we can't stop." },
  {
    startTime: 1796.59,
    person: 'Anneke',
    text: " What we always do is listen to, to, to, um, how people experience it because to answer, um, Phillip's question, that's, that's one thing we do."
  },
  {
    startTime: 1807.31,
    person: 'Anneke',
    text: ' We, um, we try to listen what, what people need and what people want.'
  },
  { startTime: 1812.21, person: 'Anneke', text: " Um, it's, it's very important for us." },
  {
    startTime: 1814.21,
    person: 'Anneke',
    text: " I mean, I mean, we have our, our values up on the website and, um, for us, it's, it's something that is really important."
  },
  { startTime: 1821.89, person: 'Anneke', text: " It's not just there as a statement." },
  {
    startTime: 1823.51,
    person: 'Anneke',
    text: " It's, it's something we strive for, um, that people feel welcome and that, that we create a good experience."
  },
  { startTime: 1831.31, person: 'Anneke', text: ' Um, people pay enough money to be there.' },
  {
    startTime: 1833.93,
    person: 'Anneke',
    text: ' So we want to, we have the, that is one of the things that we want to improve, um, that we feel that should work better, our conference body.'
  },
  { startTime: 1844.07, person: 'Anneke', text: ' Um, so.' },
  { startTime: 1845.41, person: 'Karol', text: " But, but they're already there." },
  { startTime: 1847.03, person: 'Anneke', text: " They're already there." },
  {
    startTime: 1848.71,
    person: 'Karol',
    text: ' This is the amazing thing that this is, this is actually the inclusiveness in a conference is not something you just state in your values.'
  },
  {
    startTime: 1857.77,
    person: 'Karol',
    text: ' If you go to the, the Europe, this, you actually feel that inclusiveness because all those mechanisms are actually implemented.'
  },
  { startTime: 1864.65, person: 'Karol', text: " So that's in that sense, that's amazing." },
  { startTime: 1867.13, person: 'Karol', text: " But I suppose that wasn't there from the start." },
  {
    startTime: 1871.19,
    person: 'Karol',
    text: " It's, it's been improved and improved and built on and improved."
  },
  { startTime: 1874.81, person: 'Anneke', text: ' Yeah.' },
  {
    startTime: 1874.97,
    person: 'Anneke',
    text: " I think I, uh, I wasn't the first two additions."
  },
  {
    startTime: 1878.79,
    person: 'Anneke',
    text: ' Um, so, uh, but I think, uh, that, um, that Matias already embraced these values and it was him who taught me into this job.'
  },
  {
    startTime: 1890.21,
    person: 'Anneke',
    text: ' So he taught me how to look through these things.'
  },
  {
    startTime: 1893.51,
    person: 'Anneke',
    text: ' Um, I also have some background in that, um, but, um, it was already there, but, but it improved along the years.'
  },
  {
    startTime: 1901.27,
    person: 'Anneke',
    text: ' And we also, we, we learn a lot from, from our participants and from, um, from, uh, people, um, who, um, who give us feedback, um, or who tell us on LinkedIn, what they, what they think is important.'
  },
  {
    startTime: 1914.59,
    person: 'Anneke',
    text: ' Um, so, uh, I also try to take courses and, and, um, but that is a big part of, of what we try to do.'
  },
  { startTime: 1921.79, person: 'Anneke', text: ' Yeah.' },
  {
    startTime: 1923.51,
    person: 'Maxime',
    text: " I was, I was also going to a lot of different conferences, uh, back in the days to see how they were organising things, uh, having like, well, you, you always have, um, things you, you would like to do as well, uh, looking at how others are, uh, organising, uh, things they put in place to make people feel like home, uh, like, um, that that's, that's really, really important."
  },
  {
    startTime: 1950.75,
    person: 'Maxime',
    text: ' So, yeah, we went to a lot of different conferences in Europe and, um, taking notes.'
  },
  {
    startTime: 1956.33,
    person: 'Maxime',
    text: ' We had this, um, this ID box, uh, we had a channel, uh, on, uh, our own Slack and, um, we were putting all the things that we were, uh, thinking about, uh, looking at other conferences or any ideas or feedbacks we had from people.'
  },
  {
    startTime: 1974.69,
    person: 'Maxime',
    text: ' And, uh, yeah, of course, um, organising the conference, uh, three people organising the conference.'
  },
  {
    startTime: 1982.55,
    person: 'Maxime',
    text: " It was, uh, not enough, uh, to, to implement all those, uh, cool ideas, but, and that's why we, we asked for, uh, uh, professionals to, uh, to help us, um, have our new craft."
  },
  { startTime: 1995.17, person: 'Maxime', text: ' And you got Annika.' },
  { startTime: 1997.65, person: 'Anneke', text: ' Oh, and they got me.' },
  {
    startTime: 2003.39,
    person: 'Karol',
    text: " To be fair, you're doing a wonderful job at that."
  },
  {
    startTime: 2006.31,
    person: 'Karol',
    text: ' So I have nothing to complain as a conference speaker or attend, uh, attendee.'
  },
  { startTime: 2011.93, person: 'Karol', text: " So, uh, just to be fair, don't be mad." },
  { startTime: 2022.57, person: 'Karol', text: ' Okay.' },
  {
    startTime: 2023.05,
    person: 'Karol',
    text: " So, uh, this is the, the feedback cycle from the previous year and then how that translates to the next steps, what's going on the next."
  },
  {
    startTime: 2033.35,
    person: 'Anneke',
    text: " Well, um, if we were talking in our timeline, if I'm looking back to that, so we have the marketing, we have the feedback, we have the CFP."
  },
  { startTime: 2042.55, person: 'Anneke', text: ' Now we need the money to make things work.' },
  { startTime: 2046.83, person: 'Anneke', text: ' So we start selling tickets.' },
  { startTime: 2049.989, person: 'Anneke', text: ' Um, we decide on ticket pricing.' },
  { startTime: 2053.19, person: 'Anneke', text: ' Uh, we decide on tiers.' },
  { startTime: 2055.19, person: 'Anneke', text: ' Uh, we link our marketing to that.' },
  { startTime: 2057.09, person: 'Anneke', text: ' We link our CFP to that.' },
  { startTime: 2058.969, person: 'Anneke', text: ' Um, uh, so we start selling tickets.' },
  { startTime: 2064.09, person: 'Anneke', text: ' We start looking for sponsors.' },
  {
    startTime: 2065.389,
    person: 'Anneke',
    text: ' So you need a sponsor prospectus, you need a list of people to reach out to.'
  },
  {
    startTime: 2071.57,
    person: 'Anneke',
    text: ' Um, and, um, so this is the phase we are in now, um, which is for me as a, who I do mainly more logistics.'
  },
  {
    startTime: 2081.51,
    person: 'Anneke',
    text: " So, um, the heavy part of my, of my job is, is in a few months now it's a bit quieter."
  },
  {
    startTime: 2088.31,
    person: 'Anneke',
    text: ' So what I do now is make sure I am prepared for, for the madness of those countries.'
  },
  {
    startTime: 2096.51,
    person: 'Anneke',
    text: ' So we, our checklist, we have our preparation and we have a full scenario that is written out.'
  },
  { startTime: 2104.23, person: 'Anneke', text: ' So we want to update the scenario.' },
  {
    startTime: 2106.71,
    person: 'Anneke',
    text: ' Um, we want to start talking to the venue, um, look into the catering option, um, for all our vendors.'
  },
  {
    startTime: 2116.33,
    person: 'Anneke',
    text: ' Um, uh, we have vendors for video, for batch printing, for stuff, uh, for photography, for speakers in a location, hotel.'
  },
  { startTime: 2129.17, person: 'Anneke', text: ' Um, uh, I probably have more childcare.' },
  {
    startTime: 2133.29,
    person: 'Anneke',
    text: ' Um, so you start getting quotes for these vendors.'
  },
  {
    startTime: 2136.87,
    person: 'Anneke',
    text: ' Sometimes you want to change vendors, so you want to get different quotes.'
  },
  {
    startTime: 2141.35,
    person: 'Anneke',
    text: ' Um, so we get all those communications starting, um, reading the contracts, comparing the prices.'
  },
  { startTime: 2149.01, person: 'Karol', text: ' Um, when does that somewhat finalise?' },
  { startTime: 2153.61, person: 'Karol', text: ' Is that just before the conference or?' },
  { startTime: 2155.89, person: 'Anneke', text: ' No, no, um, no.' },
  {
    startTime: 2159.23,
    person: 'Anneke',
    text: ' Well finalise that it all comes together just before the conference.'
  },
  {
    startTime: 2163.41,
    person: 'Karol',
    text: ' But the, uh, uh, closing the contracts, because of course the execution is at the day of the conference, but, uh.'
  },
  { startTime: 2171.61, person: 'Anneke', text: ' Yeah.' },
  { startTime: 2172.09, person: 'Anneke', text: ' Closing the contracts.' },
  { startTime: 2173.27, person: 'Anneke', text: ' It depends.' },
  {
    startTime: 2174.01,
    person: 'Anneke',
    text: " Um, there's some like, like the, the, the batch printing, you need badges, you need the printings."
  },
  { startTime: 2182.21, person: 'Anneke', text: " Um, so you can't wait last minute." },
  { startTime: 2184.29, person: 'Anneke', text: " Um, these people won't stay available." },
  {
    startTime: 2186.81,
    person: 'Anneke',
    text: ' Um, but, um, so we, so this is, this is about the time that we look into, into those quotes and, and, um, and sign those contracts and, and get those agreements.'
  },
  { startTime: 2200.13, person: 'Anneke', text: ' And some you try to postpone a bit.' },
  {
    startTime: 2202.45,
    person: 'Anneke',
    text: ' Um, some things, um, are, it depends on, on, on the budget.'
  },
  {
    startTime: 2209.83,
    person: 'Anneke',
    text: " Um, so some decisions you try to postpone if they're not crucial for the, um, for the conference."
  },
  {
    startTime: 2217.29,
    person: 'Anneke',
    text: ' Um, so you can, uh, postpone those decisions a bit later and some things you need anyway.'
  },
  { startTime: 2222.45, person: 'Anneke', text: ' So you decide on them earlier.' },
  {
    startTime: 2224.97,
    person: 'Karol',
    text: " So basically you have priorities and, uh, it's a constant balancing act."
  },
  { startTime: 2232.59, person: 'Anneke', text: " It's a constant balancing act." },
  { startTime: 2233.83, person: 'Anneke', text: ' Yeah.' },
  { startTime: 2234.63, person: 'Anneke', text: ' Yeah.' },
  {
    startTime: 2235.29,
    person: 'Anneke',
    text: ' Someone tells me like some, sometimes the vendor tells you, oh, I, I need to know now.'
  },
  {
    startTime: 2240.63,
    person: 'Anneke',
    text: ' And then, then you decide, um, uh, and then, um, and sometimes you need to decide on a step to make, to make sure you can do a follow-up step.'
  },
  {
    startTime: 2252.95,
    person: 'Anneke',
    text: " Um, so it's, it's always a balance and it's a constant communication, uh, between parties."
  },
  {
    startTime: 2260.65,
    person: 'Karol',
    text: ' So negotiations, balancing acts, figuring out where, what can happen and where it should happen and then check with the checklist.'
  },
  { startTime: 2271.57, person: 'Anneke', text: " That's it." },
  { startTime: 2272.47, person: 'Anneke', text: " That's all I do." },
  { startTime: 2273.59, person: 'Anneke', text: ' Check the checklist.' },
  {
    startTime: 2275.25,
    person: 'Karol',
    text: " I mean, uh, by the sheer volume of topics, I'm already overwhelmed mentally."
  },
  {
    startTime: 2281.63,
    person: 'Karol',
    text: ' So I know, I know you share that load with others, uh, uh, in, in idling over other event managers and people that are dealing with speakers directly, et cetera.'
  },
  {
    startTime: 2291.59,
    person: 'Karol',
    text: " So it's not a single person effort because if that was a single, single person, I don't know how somebody could remain sane after a conference."
  },
  {
    startTime: 2299.93,
    person: 'Anneke',
    text: " Well, I, I, uh, the team was smaller in the years before and, uh, I was not, yeah, that it's better now."
  },
  { startTime: 2308.55, person: 'Anneke', text: " It's more balanced now." },
  {
    startTime: 2310.63,
    person: 'Anneke',
    text: ' Um, and also it is very different for me as, as this is my day job.'
  },
  {
    startTime: 2316.13,
    person: 'Anneke',
    text: " So it's, um, it, I think it's easier for me to balance these things because I do it during the day."
  },
  {
    startTime: 2322.03,
    person: 'Anneke',
    text: " And if I can't do it in, in the times that I'm allocated, um, then we need to find solutions."
  },
  {
    startTime: 2329.03,
    person: 'Anneke',
    text: " I mean, it's, uh, um, obviously the last month I, I, it's, I, I work, uh, all the time, but I'm not supposed to do too much over time because I, I can't finalise a quote with a vendor that would, that would not be a healthy work situation."
  },
  {
    startTime: 2346.97,
    person: 'Anneke',
    text: " And I think that's easier to keep that balance when it's your job."
  },
  {
    startTime: 2350.37,
    person: 'Anneke',
    text: " I think for Maxime who did it behind his hours, that's a much harder balance to keep."
  },
  { startTime: 2356.95, person: 'Maxime', text: ' Yeah.' },
  { startTime: 2357.33, person: 'Maxime', text: ' Listening to you.' },
  {
    startTime: 2358.41,
    person: 'Maxime',
    text: ' And now, and now I remember all the things that we have to think about and, uh, I realise how much, well, we were, we were too crazy to organise this actually, because, uh, too much stuff to think about.'
  },
  { startTime: 2373.01, person: 'Maxime', text: ' And I, yeah.' },
  {
    startTime: 2374.79,
    person: 'Maxime',
    text: ' Um, like a couple of months before the conference, uh, we were, yeah, honestly close to burnout because, um, yeah, you had to deal with your day-to-day job, your family.'
  },
  {
    startTime: 2387.31,
    person: 'Maxime',
    text: " And then on top of that, you have everything Anika said, uh, and she, she didn't mention, I don't know, uh, goodies, uh, t-shirts, stickers, um, um, volunteers."
  },
  { startTime: 2400.05, person: 'Anneke', text: " They'll have to talk about it." },
  { startTime: 2402.93, person: 'Maxime', text: ' Yeah.' },
  {
    startTime: 2403.79,
    person: 'Maxime',
    text: " The, um, the Speaker Dina's restaurant, uh, whatever."
  },
  { startTime: 2408.55, person: 'Maxime', text: " There's so much stuff to think about." },
  { startTime: 2410.85, person: 'Maxime', text: " It's, uh." },
  { startTime: 2411.09, person: 'Anneke', text: " Tasting the speaker's dinner menu." },
  {
    startTime: 2415.19,
    person: 'Karol',
    text: " I think that's one of the more, uh, uh, nice parts."
  },
  { startTime: 2419.53, person: 'Anneke', text: ' I mean, someone has to do it.' },
  { startTime: 2422.53, person: 'Anneke', text: ' Someone has to do it.' },
  { startTime: 2424.55, person: 'Karol', text: ' So we get a fancy dinner before the conference.' },
  { startTime: 2430.25, person: 'Anneke', text: ' Sometimes, sometimes.' },
  { startTime: 2431.95, person: 'Karol', text: ' Yeah.' },
  { startTime: 2433.51, person: 'Karol', text: ' Okay.' },
  {
    startTime: 2434.33,
    person: 'Karol',
    text: ' And all of this logistics in parallel to that, we have the, uh, call for speakers and call for papers.'
  },
  {
    startTime: 2441.07,
    person: 'Karol',
    text: ' So, uh, putting this into the timeline, we had DDD Europe 25, uh, in June this year, uh, soon after the call for papers opened up.'
  },
  { startTime: 2452.91, person: 'Karol', text: ' And, uh, I believe it closes in 38 days.' },
  {
    startTime: 2456.59,
    person: 'Karol',
    text: ' So somewhere around the end of, uh, January, mid-January.'
  },
  { startTime: 2460.41, person: 'Anneke', text: ' Yeah.' },
  { startTime: 2460.59, person: 'Karol', text: ' Mid-January.' },
  { startTime: 2462.03, person: 'Karol', text: ' Uh, so this goes, uh, in parallel.' },
  {
    startTime: 2466.23,
    person: 'Karol',
    text: " So during the time that it's open, you don't really have that much to do with that."
  },
  { startTime: 2471.41, person: 'Karol', text: ' Or is it?' },
  {
    startTime: 2473.19,
    person: 'Anneke',
    text: " I, I, uh, I assume, I mean, I don't know how it was for new crafts, but I think it was kind of the same."
  },
  {
    startTime: 2481.39,
    person: 'Anneke',
    text: " There's always some names that you want to invite."
  },
  { startTime: 2484.67, person: 'Anneke', text: ' Um, so you follow up on them.' },
  {
    startTime: 2486.73,
    person: 'Anneke',
    text: " Um, then there's speakers that, you know, instructors that, you know, who want to give a workshop and who would be a very good fit for the workshop, but who forget to submit their workshop and then your client starts selling the workshop and then you have to ask for the workshop."
  },
  { startTime: 2503.13, person: 'Maxime', text: ' Name dropping, please.' },
  {
    startTime: 2505.37,
    person: 'Karol',
    text: ' But just to, just to put that in perspective, uh, the work, the workshops before conference workshops are also in the CFP, but the CFP for workshop is closed for DDD Europe was closed end of November, right?'
  },
  { startTime: 2518.15, person: 'Anneke', text: ' This year, this year we closed them earlier.' },
  {
    startTime: 2521.19,
    person: 'Anneke',
    text: ' Um, we need, we need more time to, to market them, um, because they have separate tickets, but this was a new decision for this year, just to try out.'
  },
  {
    startTime: 2533.01,
    person: 'Anneke',
    text: ' Um, so, but I, so I assume, uh, Maxim, uh, I assume that you start a first weed of the CFP already, like select out the obvious stocks that you are sure to want to, or sure not to want to have.'
  },
  { startTime: 2549.89, person: 'Maxime', text: ' Yeah.' },
  {
    startTime: 2551.09,
    person: 'Maxime',
    text: " What, when, what the easiest, uh, thing we can do, um, for new craft, because it's, uh, it's a conference in France, but everything is in English."
  },
  {
    startTime: 2561.53,
    person: 'Maxime',
    text: ' The very beginning, all the talks are in English, even, uh, French speakers have, they, they have to speak in English, uh, on stage, uh, which can be funny sometime.'
  },
  { startTime: 2573.51, person: 'Maxime', text: ' Uh, but then, um, well, we have this decision.' },
  {
    startTime: 2577.53,
    person: 'Maxime',
    text: ' I already mentioned that, uh, well, all the expectation, we have all the things we would like to, to listen to and, uh, and all the, um, all the mandatory things, like the first thing on the book list is all the talks are in English.'
  },
  {
    startTime: 2591.89,
    person: 'Maxime',
    text: ' You need to submit something in English and speak in English.'
  },
  {
    startTime: 2594.77,
    person: 'Maxime',
    text: " So when you see a talk in French, that's easy decline."
  },
  {
    startTime: 2601.91,
    person: 'Maxime',
    text: " That's, that's, uh, that's one of the easiest trick we have for a French conference that needs to be in English."
  },
  {
    startTime: 2608.85,
    person: 'Maxime',
    text: " But, but among that, we, we also have like, yeah, we know that sometimes just looking at a title that the thing is totally off track or, um, yeah, things that it's easy to, um, discard."
  },
  {
    startTime: 2624.05,
    person: 'Maxime',
    text: " So, um, we, we can go, um, like, uh, once a week, uh, looking at all the different, uh, uh, proposals that are there and, and try to, to see if we can already, uh, um, decline some, some talk, um, because you're just declining at that stage."
  },
  {
    startTime: 2645.11,
    person: 'Maxime',
    text: " You're waiting for, uh, yeah, to have everything."
  },
  {
    startTime: 2648.39,
    person: 'Maxime',
    text: " I mean, what I'm doing is that I'm waiting for the CFP to close to, um, to do my, my own, uh, selection."
  },
  { startTime: 2657.69, person: 'Maxime', text: ' Uh, why?' },
  {
    startTime: 2659.07,
    person: 'Maxime',
    text: " Because if, um, I'm starting too early, sometimes, um, I will have maybe a different baseline."
  },
  { startTime: 2667.41, person: 'Maxime', text: ' Uh, sometimes I will expect that kind of talk.' },
  {
    startTime: 2670.23,
    person: 'Maxime',
    text: ' And then one month later, I will not have the same, um, feelings and, uh, am I, am I, uh, um, declined some I would have accepted before.'
  },
  {
    startTime: 2681.89,
    person: 'Maxime',
    text: ' So putting well, doing it at the same time and, and, uh, booking, uh, uh, a big time.'
  },
  {
    startTime: 2688.75,
    person: 'Maxime',
    text: " So to, to do the entire work, um, it's, it's way better because I have a clear view of the, the, uh, overall, overall credit quality of the talks that you have, uh, on your platform."
  },
  {
    startTime: 2701.51,
    person: 'Maxime',
    text: " So it's, it's way easier actually for me to, uh, to, to deal with it like, like that."
  },
  {
    startTime: 2706.97,
    person: 'Maxime',
    text: ' But, uh, yeah, this year, um, as I said, we had like more than 100, uh, 900, uh, uh, submissions, nine, 912, if I remember correctly.'
  },
  {
    startTime: 2719.99,
    person: 'Maxime',
    text: " And, um, you know, uh, using session eyes when you're doing your, uh, initial screening."
  },
  {
    startTime: 2726.25,
    person: 'Maxime',
    text: ' So what, what is the initial screening is just putting thumbs up, thumbs like this and thumbs down.'
  },
  {
    startTime: 2731.25,
    person: 'Maxime',
    text: ' So, uh, uh, you go, uh, all over the talks and, um, you decide.'
  },
  {
    startTime: 2736.84,
    person: 'Maxime',
    text: ' Um, but this year, um, whenever you, you were voting and deciding for a thumbs up, for example, for a talk, you were seeing like your progress bar progressing for 0.1%. So to put things into perspective, how many slots did you have for talks and new crafts?'
  },
  { startTime: 2762.89, person: 'Maxime', text: ' Yeah.' },
  { startTime: 2763.65, person: 'Maxime', text: " It's like 20, 20 talks, something like that." },
  {
    startTime: 2766.63,
    person: 'Maxime',
    text: " And then, uh, maybe, uh, I don't know, eight labs."
  },
  { startTime: 2771.77, person: 'Maxime', text: ' Yeah.' },
  { startTime: 2772.41, person: 'Maxime', text: " Around 30, let's say 30 slots." },
  { startTime: 2775.63, person: 'Maxime', text: ' Yeah.' },
  { startTime: 2776.41, person: 'Maxime', text: ' So chances were.' },
  {
    startTime: 2777.51,
    person: 'Karol',
    text: " So if I take, if I take 28 slots, let's say including talks and labs and have 912 submissions, that's 32, 33 submissions per slot."
  },
  {
    startTime: 2794.26,
    person: 'Maxime',
    text: " I would even say it's worse than that because as Anika said before, um, we have a few speakers that are already invited."
  },
  { startTime: 2804.17, person: 'Maxime', text: ' So slots are already booked.' },
  { startTime: 2806.25, person: 'Maxime', text: ' So you have less slots than that.' },
  {
    startTime: 2808.59,
    person: 'Karol',
    text: ' So you want, you want the stars like, uh, for DDD Europe, you always book Eric Evans.'
  },
  {
    startTime: 2814.25,
    person: 'Karol',
    text: ' And this year there was, uh, uh, also going to go to hope, uh, at the conference.'
  },
  {
    startTime: 2820.23,
    person: 'Karol',
    text: " So that's a superstar booking slot and that's fixed."
  },
  { startTime: 2822.95, person: 'Karol', text: ' No, no way around it.' },
  {
    startTime: 2824.19,
    person: 'Karol',
    text: " And that's probably happens a long time in advance."
  },
  {
    startTime: 2827.81,
    person: 'Karol',
    text: ' Uh, so that means, okay, less slots, so bigger competition.'
  },
  {
    startTime: 2832.15,
    person: 'Karol',
    text: ' Well, I knew that I looked at my submission for new crafts.'
  },
  {
    startTime: 2836.81,
    person: 'Karol',
    text: " Uh, I don't remember what month was that, but they were, where you were sending the declines and I was like, ah, okay."
  },
  { startTime: 2842.69, person: 'Karol', text: ' And then I had the chat with Mark Richards.' },
  {
    startTime: 2845.05,
    person: 'Karol',
    text: " It's like, yeah, they didn't even want me to deliver the talk."
  },
  {
    startTime: 2848.27,
    person: 'Karol',
    text: ' They just wanted me to do the pre-conference workshop.'
  },
  { startTime: 2850.47, person: 'Karol', text: " It's like, what the hell is going on?" },
  { startTime: 2852.23, person: 'Karol', text: " There's so many submissions." },
  { startTime: 2853.81, person: 'Karol', text: " It's like, that makes sense." },
  { startTime: 2856.39, person: 'Karol', text: " I think that's why I got rejected." },
  { startTime: 2858.59, person: 'Karol', text: " I'm like, it's interesting." },
  { startTime: 2862.59, person: 'Maxime', text: ' Yeah.' },
  { startTime: 2862.69, person: 'Maxime', text: " But as I said, that's, that's a lot." },
  {
    startTime: 2866.45,
    person: 'Maxime',
    text: " And so again, with sessionize, um, it, it's actually tracks the time that you spend on the platform, uh, doing all the reviews."
  },
  {
    startTime: 2877.45,
    person: 'Maxime',
    text: ' And, um, we had a final number of 12 hours on the platform, uh, reviewing all the talks.'
  },
  {
    startTime: 2885.21,
    person: 'Maxime',
    text: " So it means like 12 hours, like focussing on the platform, but it doesn't count actually the time you spent looking at the different videos that, that people are sending to you."
  },
  {
    startTime: 2897.53,
    person: 'Maxime',
    text: ' Um, if you want to know more about the speaker or read, uh, articles, blog posts or whatever.'
  },
  {
    startTime: 2904.41,
    person: 'Maxime',
    text: " So it's just the time you're on sessionize it's 12 long hours."
  },
  {
    startTime: 2909.63,
    person: 'Karol',
    text: " Uh, and you add, um, I don't know when the window is in focus, right?"
  },
  { startTime: 2915.69, person: 'Karol', text: ' Yes.' },
  { startTime: 2916.27, person: 'Karol', text: ' Technically.' },
  { startTime: 2916.99, person: 'Karol', text: ' Yes.' },
  { startTime: 2917.87, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 2918.21,
    person: 'Karol',
    text: ' Because everybody will add the, their bio, their website, their blog, their articles there.'
  },
  { startTime: 2923.35, person: 'Anneke', text: ' And you need it.' },
  {
    startTime: 2924.53,
    person: 'Anneke',
    text: " We ask for it because, because you, you, you don't know all the speakers."
  },
  {
    startTime: 2928.95,
    person: 'Anneke',
    text: ' So, so you want to have a good impression of how they, what they say, how they bring it.'
  },
  {
    startTime: 2935.03,
    person: 'Anneke',
    text: " Um, it it's, it's good to, to look into those if you don't know the speaker."
  },
  {
    startTime: 2940.95,
    person: 'Anneke',
    text: ' Um, because if you would only pick the well-known speakers, then one day you will start running behind.'
  },
  {
    startTime: 2947.83,
    person: 'Anneke',
    text: " Uh, so you have to make sure that you look into the new speakers that you don't know yet to see if they're, they have anything interesting to say."
  },
  { startTime: 2956.97, person: 'Maxime', text: ' Yeah.' },
  { startTime: 2957.57, person: 'Maxime', text: " That that's, uh, yeah." },
  {
    startTime: 2959.11,
    person: 'Maxime',
    text: " Vinny said, uh, tips for first-time applicants, I would say just submit that's the first."
  },
  { startTime: 2965.65, person: 'Maxime', text: ' Yeah.' },
  {
    startTime: 2966.17,
    person: 'Maxime',
    text: " That's the first advice I would say, because, uh, this year we're not, we're not looking at the, um, at the names."
  },
  {
    startTime: 2974.75,
    person: 'Maxime',
    text: " Uh, we are looking at the, the abstract title first, uh, if it's catchy and then you, you read the, the abstract and, uh, um, if, if, if everything is, is great and, and looks great, even if you're, yeah."
  },
  {
    startTime: 2988.79,
    person: 'Maxime',
    text: " Uh, uh, first time, uh, speaker, it doesn't matter."
  },
  {
    startTime: 2992.89,
    person: 'Maxime',
    text: " Uh, I mean, for, for our conference, it's, it's, um, very, very important to, to, to see new faces and to, uh, yeah, as Anika said, to avoid having always the same people coming and joining, uh, years after years, it's not something that we want."
  },
  {
    startTime: 3010.21,
    person: 'Maxime',
    text: ' So, uh, yeah, we really try not to also, um, have the same, the same people, um, more than two years in a row.'
  },
  {
    startTime: 3021.85,
    person: 'Maxime',
    text: ' Um, but sometimes, you know, um, people are, uh, smart enough to submit, uh, uh, interesting talks that you cannot refuse, uh, even if it would be the third years in a row and you have to accept it, of course.'
  },
  {
    startTime: 3038.63,
    person: 'Maxime',
    text: ' Um, but, um, yeah, sometimes, you know, uh, speakers.'
  },
  {
    startTime: 3043.37,
    person: 'Maxime',
    text: " Um, but yeah, that's, that's how we, we try to, yeah, to, to bring diversity, um, in the speakers and the talks and the point of views, uh, in the, in the conference, having like, uh, one of my best music festival, um, I know, uh, is, uh, Iceland Airwaves."
  },
  { startTime: 3065.29, person: 'Maxime', text: " It's a festival in Reykjavik." },
  {
    startTime: 3067.59,
    person: 'Maxime',
    text: ' Um, and they have a rule that, um, that applies only for, um, people from abroad.'
  },
  {
    startTime: 3074.75,
    person: 'Maxime',
    text: ' You can submit, uh, if you want to play at the festival, uh, they have a form and, uh, actually you are allowed to play only once.'
  },
  {
    startTime: 3083.69,
    person: 'Maxime',
    text: ' If you are a band from abroad, uh, only Icelandic, uh, bands can play multiple times at the festival.'
  },
  {
    startTime: 3091.27,
    person: 'Maxime',
    text: " So that's a way also to, to have, uh, that's a strong rule to make sure that you have, uh, a lot of different bands playing years after years."
  },
  {
    startTime: 3100.23,
    person: 'Maxime',
    text: " Uh, and I'm not saying that I'm applying that rule, but kind of, uh, we try to, uh, not repeat again and again, the same, the same people."
  },
  { startTime: 3112.13, person: 'Karol', text: ' Oh, wow.' },
  { startTime: 3112.93, person: 'Karol', text: " That's, uh, that's difficult as it is." },
  {
    startTime: 3117.53,
    person: 'Karol',
    text: ' I mean, comprehending and trying to figure out 912 submissions with limited spots.'
  },
  {
    startTime: 3124.75,
    person: 'Karol',
    text: ' So 28 slots where some of them are already taken and you need to then pick people and talks and their topics to put in there.'
  },
  {
    startTime: 3136.35,
    person: 'Karol',
    text: ' So before the, before we went live, we were talking about short lists.'
  },
  {
    startTime: 3142.13,
    person: 'Karol',
    text: ' How big can a short list be before you actually decide who actually goes into that slot?'
  },
  { startTime: 3148.89, person: 'Maxime', text: ' Way too big, of course.' },
  { startTime: 3151.77, person: 'Maxime', text: " Um, yeah, that, that's the size of this list." },
  { startTime: 3155.01, person: 'Maxime', text: " It's way too big." },
  {
    startTime: 3156.29,
    person: 'Maxime',
    text: ' Um, I think like, yeah, we, we could, we could feel like three or four conferences, uh, with the short list.'
  },
  {
    startTime: 3163.99,
    person: 'Maxime',
    text: ' Um, uh, because the, what we, yeah, what we do, what we do is that the, the initial screening is that, as I said, you have to put thumbs up, uh, or down.'
  },
  {
    startTime: 3176.61,
    person: 'Maxime',
    text: " And, um, you already know that if you kind of hesitating and you put a middle thumb, I don't know how to that one, the horizontal thumb, you already know that there's no chance that this talk will be selected because if you filter out, uh, only green thumbs from, um, all the people from the committee, you have way too much talks already."
  },
  { startTime: 3203.15, person: 'Maxime', text: ' So, yeah.' },
  { startTime: 3204.63, person: 'Karol', text: ' Right.' },
  { startTime: 3207.01, person: 'Karol', text: " Ooh, that's, that's absurdly, absurdly heavy." },
  {
    startTime: 3212.37,
    person: 'Karol',
    text: " Uh, I, I do not envy you the job of, of, uh, figuring out how to get those people, how to, how to even decide because it's, it's, it must be extremely difficult in that sense."
  },
  { startTime: 3225.39, person: 'Maxime', text: ' Yeah.' },
  {
    startTime: 3226.15,
    person: 'Maxime',
    text: " But actually when you have the short list, then it's easier because, um, you know what you want, uh, in the right balance in your programme."
  },
  {
    startTime: 3236.81,
    person: 'Maxime',
    text: ' Uh, you have, uh, you know, already how much talk you want about architecture or much talk you want about crafts, uh, crafting software or collaboration, things like that.'
  },
  {
    startTime: 3247.25,
    person: 'Maxime',
    text: ' So then you, you kind of trying to, to see what are the different topics from this big list.'
  },
  {
    startTime: 3254.63,
    person: 'Maxime',
    text: " And, uh, sometimes you will realise, Hey, actually, I don't have that much talk about collaboration."
  },
  {
    startTime: 3260.37,
    person: 'Maxime',
    text: ' So chances are high that, uh, those people will be selecting the short list, but sometimes you have tonnes of talks about architecture and it will be, it will be definitely hard to, to, to pick one.'
  },
  {
    startTime: 3271.99,
    person: 'Maxime',
    text: ' Um, but, um, then you have other constraints that you put on top of that.'
  },
  {
    startTime: 3277.73,
    person: 'Maxime',
    text: ' Um, your own constraint is, uh, uh, programme managers like, uh, diversity of people.'
  },
  {
    startTime: 3284.31,
    person: 'Maxime',
    text: ' Um, uh, yeah, we, we want to have gender equality and, and, and making sure that, uh, um, they will be, uh, underrepresented communities also, things like that.'
  },
  {
    startTime: 3297.17,
    person: 'Maxime',
    text: " So it's, that's all the things that you, you, you take into consideration when you want to filter out this short list that you have."
  },
  { startTime: 3304.69, person: 'Maxime', text: ' Yeah.' },
  {
    startTime: 3305.13,
    person: 'Karol',
    text: ' So, so as a, uh, white, uh, heterosexual male from Europe, I have less chances because of that, uh, to an extent, of course.'
  },
  { startTime: 3315.65, person: 'Maxime', text: ' Yeah.' },
  { startTime: 3315.87, person: 'Maxime', text: ' Yeah.' },
  { startTime: 3316.07, person: 'Maxime', text: " To an extent, but, uh, that that's true." },
  { startTime: 3317.89, person: 'Maxime', text: " That's true." },
  { startTime: 3318.49, person: 'Maxime', text: ' Yeah.' },
  {
    startTime: 3319.27,
    person: 'Anneke',
    text: " I don't know if you have less chances, but that's a different discussion."
  },
  { startTime: 3329.78, person: 'Karol', text: ' Sure.' },
  {
    startTime: 3330.73,
    person: 'Karol',
    text: " Uh, it's, it's about giving equal chances, not about, uh, uh, the competition is higher basically, right?"
  },
  {
    startTime: 3339.33,
    person: 'Karol',
    text: " It's about giving equal chances, not about discriminating."
  },
  {
    startTime: 3342.05,
    person: 'Karol',
    text: " And it may seem from a perspective of a privileged, uh, group that this is discrimination, but it's actually equality."
  },
  {
    startTime: 3351.35,
    person: 'Karol',
    text: " And I absolutely would, would never have a problem with that because that's actually great."
  },
  {
    startTime: 3356.03,
    person: 'Karol',
    text: " It's bad for me because I'm in the privileged group, but, uh, Hey, everybody has the right to do stuff."
  },
  {
    startTime: 3365.53,
    person: 'Karol',
    text: " So it's, it's very good that you take that into account."
  },
  { startTime: 3367.69, person: 'Karol', text: " That's inclusiveness at its best." },
  { startTime: 3369.59, person: 'Karol', text: ' It should happen exactly like that.' },
  {
    startTime: 3372.19,
    person: 'Maxime',
    text: ' Uh, and if I, if I can add something, um, about, uh, Phillip, uh, remark, uh, can AI or LLMs help with the selection of talks?'
  },
  {
    startTime: 3381.57,
    person: 'Maxime',
    text: " Um, not in the way you would think, uh, but actually, yeah, it's easy for us when we spot actually abstracts that are made by LLMs. And it's so obvious that you, well, you, you, you just, uh, yeah, you, you, you click on the client pretty easy because, um, you feel like that that person just copy pasted something from another without having, yeah."
  },
  {
    startTime: 3411.38,
    person: 'Maxime',
    text: " Spend a few seconds trying to, to change it or, um, always the same structures, you know, when you are reviewing like 900 talks, um, it's so obvious to one star generated by AIs."
  },
  {
    startTime: 3427.56,
    person: 'Maxime',
    text: ' Um, yeah, the, even the title, the title is, is always like, you have a first part, then you have semi-colon and then you have the second part.'
  },
  {
    startTime: 3436.14,
    person: 'Maxime',
    text: " That's the kind of talk that the titles from, from LLMs bullet points."
  },
  {
    startTime: 3441.64,
    person: 'Karol',
    text: ' I need to stop doing that because I do this without an LLM.'
  },
  {
    startTime: 3446.9,
    person: 'Maxime',
    text: " Strange, strange verbs, also verbs that you don't hear that often."
  },
  {
    startTime: 3452.56,
    person: 'Maxime',
    text: ' Like we, we, we had this unravel, uh, uh, verb that was popping up, uh, from LLMs everywhere.'
  },
  { startTime: 3460.46, person: 'Maxime', text: ' So people were unravelling a lot of things.' },
  { startTime: 3463.8, person: 'Maxime', text: ' Uh, so it was easy for us.' },
  {
    startTime: 3466.14,
    person: 'Karol',
    text: " Uh, whenever my favourite, my favourite, when I'm writing things with LLMs is robust."
  },
  {
    startTime: 3471.28,
    person: 'Karol',
    text: " And I'm like, yeah, what does that even mean in terms of tech robust, but it Gemini just pushes robust everywhere, whatever I put there, give me a description, just robust."
  },
  { startTime: 3485.02, person: 'Karol', text: " I'm like, wow." },
  {
    startTime: 3488.06,
    person: 'Karol',
    text: ' But giving that LLMs, you know, this is, uh, if somebody reads what Mathias writes and Mathias published that, I think at the end of, uh, DDD rep 25, this is from the 10th of June.'
  },
  {
    startTime: 3501.58,
    person: 'Karol',
    text: ' Uh, there is a long list of, uh, different points for, uh, speakers, what to do, and not using an LLM is actually the first point on the list.'
  },
  {
    startTime: 3511.4,
    person: 'Karol',
    text: ' I will admit that I took that list and dragged it through an LLM as a, as a criteria that it needs to follow to write me a draft, but, but I only draft, I do not submit by copy pasting.'
  },
  { startTime: 3526.3, person: 'Maxime', text: " It's a great rubber duck tool, right?" },
  {
    startTime: 3528.8,
    person: 'Maxime',
    text: ' So, uh, you can talk with your AI and try to, to find out the right thing, but then you, you had to write it yourself because, uh, absolutely.'
  },
  { startTime: 3538.8, person: 'Maxime', text: ' Yeah.' },
  { startTime: 3539.12, person: 'Karol', text: ' Yeah.' },
  { startTime: 3539.34, person: 'Karol', text: ' I, I suffer from, from a blank page paralysis.' },
  {
    startTime: 3543.1,
    person: 'Karol',
    text: " So if I open the Google docs and try to write, that's, uh, that's just horrendous."
  },
  {
    startTime: 3548.04,
    person: 'Karol',
    text: ' I spent like three hours just staring at the screen.'
  },
  {
    startTime: 3550.56,
    person: 'Karol',
    text: " So for me, it's easier to just prompt something out first from an LLM and then you go drafting because it makes my life easier."
  },
  {
    startTime: 3557.3,
    person: 'Karol',
    text: " But then if you just copy paste, uh, that's, that's not, we will, we will notice it."
  },
  { startTime: 3564.08, person: 'Maxime', text: ' We will notice it.' },
  { startTime: 3566.1, person: 'Karol', text: ' Yeah, of course.' },
  { startTime: 3567.32, person: 'Maxime', text: ' Yeah.' },
  {
    startTime: 3568.78,
    person: 'Karol',
    text: " So if somebody needs those, those tips, uh, uh, I'll just pop the QR once again, but obviously you can find it on the recording."
  },
  {
    startTime: 3576.7,
    person: 'Karol',
    text: " And if you Google just, uh, uh, Matias, uh, and tips for, or for submitting to conferences, it will, it will pop up in Google easily because it's very nicely searchable."
  },
  {
    startTime: 3589.04,
    person: 'Karol',
    text: " It's a very good list of very good, uh, 22 tips for, uh, uh, speakers to make your abstract better and avoid, uh, well, crazy mistakes like just copying from an LLM."
  },
  { startTime: 3602.26, person: 'Karol', text: " That's a, that's a bad thing." },
  { startTime: 3604.3, person: 'Karol', text: ' Okay.' },
  { startTime: 3604.66, person: 'Karol', text: ' So we have, uh, we have a short list.' },
  { startTime: 3608.1, person: 'Karol', text: " That's a lot of talks anyways." },
  {
    startTime: 3610.26,
    person: 'Karol',
    text: ' And we have a process of eliminating based on quantity and a specific theme or topic, uh, trying to match to whatever is needed for the idea of the conference, what it should convey.'
  },
  {
    startTime: 3624.36,
    person: 'Karol',
    text: " So sometimes in certain topics, there's more competition in other topics, there's less competition."
  },
  { startTime: 3629.56, person: 'Karol', text: ' So this is a chance game again.' },
  {
    startTime: 3632.2,
    person: 'Karol',
    text: ' Um, how would somebody figure out what would be the niche topic for, for that conference?'
  },
  {
    startTime: 3638.36,
    person: 'Karol',
    text: ' That would be a good topic for, for, uh, the conference itself.'
  },
  {
    startTime: 3643.68,
    person: 'Karol',
    text: " Because just to give you an idea, there's a conference in Wrocław in March called Polish Dreaming, which is a conference around the Salesforce ecosystem."
  },
  {
    startTime: 3652.04,
    person: 'Karol',
    text: ' And they just straight up published on the page, the list of topics they would like to see categorised with examples, et cetera, go in and get us an abstract in one of those areas.'
  },
  {
    startTime: 3665.08,
    person: 'Karol',
    text: " So that's, I don't know what the quantity of per group of topics from per theme is, but that already gives a bit of an advantage to like, okay, if I submit around these topics, I have a better chance of getting in."
  },
  {
    startTime: 3680.22,
    person: 'Karol',
    text: ' What about, uh, DDD Europe or new crafts or, uh, other conferences?'
  },
  {
    startTime: 3685.26,
    person: 'Karol',
    text: ' How would one person know like where to go with that?'
  },
  {
    startTime: 3694.41,
    person: 'Maxime',
    text: ' Yeah, I would say the first thing to read is the description page of sessionize because it tells everything about the conference and what we are expecting.'
  },
  {
    startTime: 3703.83,
    person: 'Maxime',
    text: " But, uh, people, they know us, of course, um, we're, we've been organising new crafts since 2014."
  },
  {
    startTime: 3710.81,
    person: 'Maxime',
    text: ' They also know that there are a few spots for, uh, things that are totally off track or unexpected.'
  },
  {
    startTime: 3719.83,
    person: 'Maxime',
    text: " So, uh, that's also something, uh, and, and we know some, some people are, uh, yeah, uh, playing that game, trying to, to be in that, that specific spot."
  },
  {
    startTime: 3731.23,
    person: 'Maxime',
    text: ' Um, but, um, but yeah, you need to, to, to have guidelines, um, and, uh, making sure that they are, um, yeah, well written somewhere accessible for everyone and okay.'
  },
  { startTime: 3745.83, person: 'Maxime', text: ' You would like to add something?' },
  { startTime: 3747.97, person: 'Anneke', text: ' Yeah.' },
  {
    startTime: 3748.23,
    person: 'Anneke',
    text: " I, I, I mean, I'm not in, in the selection process and I don't have the same background as you all, but, um, as an outsider, for me, it seems that, um, when people are really interested or passionate about a subject, um, that makes more sense than crafting a subject just to be able to join the conference."
  },
  {
    startTime: 3769.61,
    person: 'Anneke',
    text: ' Um, but obviously the two are always a bit combined because people often also just want to come and, but, but I, I assume that people who, who are thinking about the subject or working on it, and that is always a good starting point to start talking about it.'
  },
  {
    startTime: 3791.05,
    person: 'Anneke',
    text: " You have, you already have a lot of knowledge and there's always something someone can learn."
  },
  {
    startTime: 3795.55,
    person: 'Anneke',
    text: ' So that is always a good starting point, I guess.'
  },
  {
    startTime: 3804.85,
    person: 'Karol',
    text: ' Which is, which is an interesting thing, because for example, me as a professional, I was a speaker this year at DDD, uh, Europe.'
  },
  { startTime: 3813.67, person: 'Karol', text: ' Well, we, we had the lab, not the talk, right?' },
  {
    startTime: 3818.05,
    person: 'Karol',
    text: " Uh, but in my professional life, I didn't really use domain-driven design, but I found it an interesting research topic that overlaps with my regular field."
  },
  {
    startTime: 3829.43,
    person: 'Karol',
    text: " And it turns out to be something really amazing in that sense, because it's a learning journey for me because I was aware of DDD, but, uh, over the years, I didn't really do anything about it till, uh, domain-driven design year 24."
  },
  {
    startTime: 3842.95,
    person: 'Karol',
    text: " Uh, and it's like, uh, even, even if you're not a specialist in the area, you still can land with, uh, in a slot for a conference because you might have something interesting or unique or new, or from a completely different angle to talk about."
  },
  {
    startTime: 3861.79,
    person: 'Karol',
    text: ' That, that was pretty much my case because, and Philipson combined with also Thomas, because we had a completely different angle on things because I came with the topic and I was like, how is that going to be in DDD?'
  },
  {
    startTime: 3876.07,
    person: 'Karol',
    text: " And apparently that wasn't a topic that was there at all."
  },
  {
    startTime: 3882.43,
    person: 'Karol',
    text: " So that's a, that's a, that's one way to put it."
  },
  {
    startTime: 3884.69,
    person: 'Karol',
    text: ' And that, that actually can be these slots that are, uh, uh, the unexpected ones, right?'
  },
  {
    startTime: 3892.19,
    person: 'Karol',
    text: " In that sense, Maxime, it's like these slots for less few wildcards possibly."
  },
  { startTime: 3899.97, person: 'Maxime', text: ' Yeah.' },
  {
    startTime: 3900.45,
    person: 'Maxime',
    text: " Uh, but again, it's, um, I'm going to repeat myself, but just, just, uh, submit."
  },
  { startTime: 3908.01, person: 'Maxime', text: " I mean, that, that's the advice." },
  {
    startTime: 3909.65,
    person: 'Maxime',
    text: " If you feel like you had, you have, um, something that, yeah, it's different, uh, kind of new or, uh, it brings a new, a new perspective, uh, on, on the topic."
  },
  { startTime: 3922.13, person: 'Maxime', text: ' Yeah.' },
  { startTime: 3922.71, person: 'Maxime', text: ' Please, please submit it.' },
  {
    startTime: 3924.63,
    person: 'Maxime',
    text: " That that's the kind of thing that we want to hear about, uh, hearing always the same things again and again, we really want to also, it's, it's, um, new crafts is all about planting seeds and, and, and, uh, opening your mind to, uh, all the things."
  },
  {
    startTime: 3940.55,
    person: 'Maxime',
    text: " And, um, uh, so, uh, if you're keeping on repeating the same stuff, it's not interesting at all."
  },
  { startTime: 3947.57, person: 'Maxime', text: " And people won't want to come, uh, next year." },
  {
    startTime: 3950.63,
    person: 'Maxime',
    text: " So, uh, it's important for us to, to have this, uh, this kind of talks, um, and, and brand new ideas to share with others."
  },
  { startTime: 3958.61, person: 'Maxime', text: ' Yeah.' },
  { startTime: 3962.38, person: 'Karol', text: ' All right.' },
  { startTime: 3964.06, person: 'Karol', text: ' Okay.' },
  {
    startTime: 3964.74,
    person: 'Karol',
    text: " Then we're, let's say we're closing our call for speakers."
  },
  { startTime: 3970.88, person: 'Maxime', text: ' My job is done.' },
  {
    startTime: 3975.34,
    person: 'Karol',
    text: " You're done or nearly done with the evaluations."
  },
  { startTime: 3979.64, person: 'Karol', text: " Uh, what's happening then?" },
  { startTime: 3983.68, person: 'Anneke', text: ' Then I come into play.' },
  {
    startTime: 3986.66,
    person: 'Anneke',
    text: " Um, so what we need to start doing quite quickly, as soon as the CFP is closed is well, you want to inform everyone as soon as, well, not as soon as it's closed, you need some time to evaluate."
  },
  {
    startTime: 4003.26,
    person: 'Anneke',
    text: ' And then when the evaluation is done, you need to inform everyone.'
  },
  {
    startTime: 4007.68,
    person: 'Anneke',
    text: ' And, um, we have, I think for DDD Europe, we had almost a hundred speakers last year, um, combined with data mesh live and event centric.'
  },
  { startTime: 4019.2, person: 'Anneke', text: ' Um, so overall almost a hundred speakers.' },
  {
    startTime: 4023.12,
    person: 'Anneke',
    text: ' Um, we try to have a personal connection with all of our speakers.'
  },
  { startTime: 4027.94, person: 'Anneke', text: ' It is not easy with a hundred speakers.' },
  {
    startTime: 4030.96,
    person: 'Anneke',
    text: ' Um, we reach out to all of them and we try to, um, help them to make sure that the conference is a good experience overall.'
  },
  { startTime: 4041.32, person: 'Anneke', text: ' So we help with travel and accommodation.' },
  {
    startTime: 4044.48,
    person: 'Anneke',
    text: ' So, um, we help with booking the travel, if that is what you wish.'
  },
  { startTime: 4048.94, person: 'Anneke', text: ' Some people prefer doing that themselves.' },
  { startTime: 4051.18, person: 'Anneke', text: ' And we answer a lot of practical questions.' },
  {
    startTime: 4054.72,
    person: 'Anneke',
    text: " Um, a lot of our speakers know the conference already, so they don't need lots of feedback or input."
  },
  {
    startTime: 4060.22,
    person: 'Anneke',
    text: ' So you just give them the general, these are the dates, this is your hotel, um, et cetera.'
  },
  {
    startTime: 4065.66,
    person: 'Anneke',
    text: ' Uh, but some speakers are, um, or they are new to the conference or they are new to speaking.'
  },
  {
    startTime: 4072.22,
    person: 'Anneke',
    text: ' So, um, you want to give them some more guidance.'
  },
  { startTime: 4074.66, person: 'Anneke', text: ' They have some more questions.' },
  {
    startTime: 4077.12,
    person: 'Anneke',
    text: ' Um, we, every year, there are some people who are having travel issues, um, flights that get cancelled or, or, uh, stuff like that.'
  },
  {
    startTime: 4086.36,
    person: 'Anneke',
    text: ' So we try to be very, um, proactive about that, make sure that we can help people and, and just that their experience is as smooth as possible.'
  },
  {
    startTime: 4097.319,
    person: 'Anneke',
    text: ' Um, because when the speakers are happy and relaxed, that actually is good for the whole conference.'
  },
  {
    startTime: 4105.859,
    person: 'Anneke',
    text: " Um, um, you don't want someone who is stressed out because they're, because I don't know, whatever reason, and then step on the stage because the techniques didn't work or whatever, or they didn't know they had to bring something."
  },
  {
    startTime: 4120.12,
    person: 'Anneke',
    text: ' Um, and then, um, they are stressed out on the stage and that impacts the overall conference experience for everyone.'
  },
  { startTime: 4126.72, person: 'Anneke', text: ' So that is a very, very big part of our job.' },
  {
    startTime: 4131.1,
    person: 'Anneke',
    text: ' I, I think for a speaker, you would need to calculate about an hour average, um, for doing that helping with travel and accommodation and all the questions.'
  },
  {
    startTime: 4143.02,
    person: 'Anneke',
    text: " So if you have a hundred speakers, that's, that's a big chunk of our work."
  },
  {
    startTime: 4148.439,
    person: 'Anneke',
    text: " Um, for DDD Europe, uh, it's mainly my colleague Kielce who did that."
  },
  {
    startTime: 4154.52,
    person: 'Anneke',
    text: " Um, I used to do that in the past and then she started doing the bookings and I wanted to keep the personal touch with the speakers because that is something that is very, um, for me, it was difficult to hand over, um, because it's, it was something that I wanted, I wanted to make sure that it was well done."
  },
  {
    startTime: 4174.939,
    person: 'Anneke',
    text: ' I wanted to make sure that everyone was feeling welcome and treated in a very professional, but also welcoming way.'
  },
  {
    startTime: 4182,
    person: 'Anneke',
    text: ' So it was a, on a personal level, something hard to hand over to my colleague, but Kielce is so good at what she does that it was, it just made sense that she took over and she does a, she does an amazing job.'
  },
  {
    startTime: 4196.36,
    person: 'Anneke',
    text: ' Um, and, um, I think speakers are very happy with her guidance and her help.'
  },
  { startTime: 4201.44, person: 'Anneke', text: ' So that is, uh, one part.' },
  {
    startTime: 4203.48,
    person: 'Anneke',
    text: ' Uh, and then, um, you know, we start building the schedule that is, um, again, Maxime who does that.'
  },
  {
    startTime: 4210.56,
    person: 'Anneke',
    text: ' Um, and, and then we start on the logistics for the hands-ons.'
  },
  {
    startTime: 4215.24,
    person: 'Anneke',
    text: ' We need to, one person needs to, um, two rectangular post-its and three pink ones and five blue ones and maybe one white one and two blue cards.'
  },
  {
    startTime: 4227.78,
    person: 'Anneke',
    text: ' And then my setup is, uh, is in an island setup.'
  },
  {
    startTime: 4231.82,
    person: 'Anneke',
    text: " Oh no, no, maybe I would prefer a classroom setup, but then with a screen, or can we, so we try to be proactive about it and make sure that we have everything ready without having the venue doing too much setup changes because the venue obviously needs to know one month in advance the setup of the, but the instructors don't know one month in advance how they want."
  },
  {
    startTime: 4253.04,
    person: 'Anneke',
    text: ' So again, keeping the balls in the air and balancing that out.'
  },
  {
    startTime: 4256.66,
    person: 'Anneke',
    text: " And then it's a lot of the practical, um, stuff."
  },
  {
    startTime: 4260.34,
    person: 'Anneke',
    text: ' A lot of participants come with their questions.'
  },
  { startTime: 4263.54, person: 'Anneke', text: ' Um, we have the dietary information.' },
  {
    startTime: 4265.66,
    person: 'Anneke',
    text: ' Uh, the catering takes a lot of time figuring out.'
  },
  { startTime: 4269, person: 'Anneke', text: ' Um, the menu goes back and forth several times.' },
  {
    startTime: 4272.98,
    person: 'Anneke',
    text: ' Um, we need to discuss if we have, uh, catered for all the, the dietary requirements.'
  },
  {
    startTime: 4278.12,
    person: 'Anneke',
    text: ' Um, sometimes we need to test some of the food again.'
  },
  {
    startTime: 4282.62,
    person: 'Anneke',
    text: " Usually, usually we don't need to do that, but it's, um, and making sure all, all of the participants get also all the answers to their questions."
  },
  {
    startTime: 4293.82,
    person: 'Anneke',
    text: ' Um, and then we work on our, um, on the things that are important in the, um, in the inclusivity part.'
  },
  { startTime: 4302.78, person: 'Anneke', text: ' Um, we print the pronouns on the badges.' },
  {
    startTime: 4305.3,
    person: 'Anneke',
    text: ' We think, we think about things of, uh, of those.'
  },
  {
    startTime: 4308.48,
    person: 'Anneke',
    text: ' Um, so, and actually all that work is very difficult to plan in advance because it, it also depends on the questions that we receive and on when the venue needs what, and on when the speaker needs what.'
  },
  {
    startTime: 4324.36,
    person: 'Anneke',
    text: ' So I have a whole list with things I need to discuss, but it depends when we do what.'
  },
  {
    startTime: 4330.44,
    person: 'Anneke',
    text: ' Um, the one thing that is, um, very important for me is that we, we keep all the decisions and the flow of every aspect is in our, in a, in a detailed scenario.'
  },
  {
    startTime: 4343.06,
    person: 'Anneke',
    text: ' And, um, we keep, we keep all the catering decisions, all the end timings and, um, um, numbers and dietary numbers.'
  },
  {
    startTime: 4352.86,
    person: 'Anneke',
    text: ' And we keep everything in, in a file, uh, a very, very, very big, big file.'
  },
  {
    startTime: 4359.64,
    person: 'Anneke',
    text: ' Um, and then for actually for during the conference, I have a detailed checklist.'
  },
  {
    startTime: 4365.6,
    person: 'Anneke',
    text: " Uh, every, every minute it's like at, uh, 915, Maxime, did you, did you, uh, instruct the MCs, uh, 920, we need to open the doors, uh, 935."
  },
  { startTime: 4378.02, person: 'Anneke', text: " And it's a whole checklist." },
  { startTime: 4379.94, person: 'Anneke', text: ' The checklist is really important for me.' },
  {
    startTime: 4382.14,
    person: 'Anneke',
    text: ' And, and, uh, mainly me and my colleagues, Ilse and Hilde, who do, who do kind of the back office at the event management, because sometimes, um, it happened before that I had to step out for one or two hours to help someone.'
  },
  {
    startTime: 4396.4,
    person: 'Anneke',
    text: " And then, uh, my colleagues were aware, oh, we need to check Anika's to-do list and make sure it is done, even if she's not there."
  },
  {
    startTime: 4404.16,
    person: 'Anneke',
    text: ' Um, so that all comes together the last three, four months.'
  },
  {
    startTime: 4409.46,
    person: 'Anneke',
    text: ' Um, my, my goal is, and every year I plan it in, do not have actual work the last two, three weeks before the conference, because the last two, three weeks are filled with last minute questions.'
  },
  {
    startTime: 4426.66,
    person: 'Anneke',
    text: ' Um, um, sometimes cancellations, um, ticket changes, um, stuff like that.'
  },
  {
    startTime: 4435.2,
    person: 'Anneke',
    text: ' So I, I, I need to be ready with all the other stuff three to four weeks in advance.'
  },
  { startTime: 4442.4, person: 'Karol', text: ' Okay.' },
  { startTime: 4445.24, person: 'Anneke', text: " And then it's done." },
  { startTime: 4446.52, person: 'Anneke', text: ' Then we go to the conference, then.' },
  { startTime: 4449.08, person: 'Karol', text: ' And the magic happens.' },
  { startTime: 4450.7, person: 'Anneke', text: ' And the magic happens.' },
  {
    startTime: 4452.82,
    person: 'Karol',
    text: " Well, well, I'll, I'll want to track a little bit back."
  },
  { startTime: 4456.48, person: 'Anneke', text: ' Yeah, I went a bit quick.' },
  { startTime: 4457.74, person: 'Anneke', text: ' Sorry.' },
  { startTime: 4458.24, person: 'Karol', text: ' Yeah.' },
  { startTime: 4458.6, person: 'Karol', text: ' You went through the, whoa, so many.' },
  {
    startTime: 4462.42,
    person: 'Karol',
    text: " And, and I'm, I'm, I'm looking at this now from, from my perspective as a speaker, uh, of course, yes, the dietary requirements, issuing tickets, booking flights, travel, accommodations, et cetera, all that."
  },
  { startTime: 4477.28, person: 'Karol', text: " That's plenty of work." },
  {
    startTime: 4479.1,
    person: 'Karol',
    text: ' Uh, Ilze is doing really a really great job at that.'
  },
  { startTime: 4481.82, person: 'Karol', text: " That's, that's amazing." },
  {
    startTime: 4483.52,
    person: 'Karol',
    text: " Uh, but the, you, you missed one interesting thing, which I still remember very vividly is that there is a specific type of support for speakers that you didn't mention."
  },
  {
    startTime: 4496.16,
    person: 'Karol',
    text: ' The specific type of support that you assign, uh, sparring partners'
  },
  {
    startTime: 4500.78,
    person: 'Karol',
    text: ' for speakers, uh, so that the speakers can vet and test their, uh, talks labs and discuss the'
  },
  {
    startTime: 4509.54,
    person: 'Karol',
    text: " topics and see if they're understandable or, uh, available, or they actually have a storyline"
  },
  {
    startTime: 4516.48,
    person: 'Karol',
    text: ' and they deliver, which is a, a, I think another type of a vetting process or preparation process'
  },
  {
    startTime: 4523.94,
    person: 'Karol',
    text: " to, to get the quality that you would want from your perspective, it's quality from perspective"
  },
  { startTime: 4530.66, person: 'Karol', text: ' of the speaker.' },
  {
    startTime: 4531.46,
    person: 'Karol',
    text: " That's, uh, uh, amazing feedback and limiting the stress of a, of a talk."
  },
  {
    startTime: 4536.82,
    person: 'Karol',
    text: " Uh, I'm not sure when did, when does that happen?"
  },
  {
    startTime: 4541.4,
    person: 'Anneke',
    text: " Uh, but it's, uh, I think that was very early on, uh, after acceptance, what we do when we reach out to the speakers, we, um, we already gather a lot of information in the session eyes."
  },
  {
    startTime: 4555.58,
    person: 'Anneke',
    text: " Um, but when we send our first email to the speakers, which is, we have to be honest, obviously it's kind of a template that we try to personalise."
  },
  {
    startTime: 4565.12,
    person: 'Anneke',
    text: " Um, and then, uh, we send out, uh, a form, a questionnaire with some practical questions, like, do you want to join the speaker's dinner?"
  },
  {
    startTime: 4573.52,
    person: 'Anneke',
    text: ' When is your check-in checkout date in the hotel?'
  },
  { startTime: 4575.78, person: 'Anneke', text: ' Do you want us to do the booking for you?' },
  {
    startTime: 4577.68,
    person: 'Anneke',
    text: ' And do you want to have a, a speaker sparring partner is one of the questions.'
  },
  { startTime: 4582.54, person: 'Anneke', text: ' And then, um, um, we follow up.' },
  {
    startTime: 4586.84,
    person: 'Anneke',
    text: ' So our first email is kind of a template, but then all the follow-up is, is personal, um, one-on-one.'
  },
  {
    startTime: 4593.52,
    person: 'Anneke',
    text: ' Um, and then I, uh, Ilse, uh, puts all the info in our speakers file.'
  },
  {
    startTime: 4598.64,
    person: 'Anneke',
    text: ' We have a very, very, very big speakers file with lots of, uh, checklists.'
  },
  {
    startTime: 4603.9,
    person: 'Anneke',
    text: " You know, we double check if everyone is on the website, if everyone replied on the email, if everyone it's, uh, again, another to-do list and another checklist."
  },
  {
    startTime: 4613.1,
    person: 'Anneke',
    text: ' Um, and the speaker buddy, uh, system or the sparring partner, yeah, we try to combine two speakers and it, it, it kind of depends on, I mean, some people fill in the form immediately and some people fill it in, um, uh, just at the limits.'
  },
  {
    startTime: 4630.56,
    person: 'Anneke',
    text: ' So, so as soon as I have some people that I can combine, I, I link two speakers together.'
  },
  {
    startTime: 4636.08,
    person: 'Anneke',
    text: ' Um, I try to take into account, um, I try to link talks to talks and hands-ons to hands-ons and I try to look into time zones.'
  },
  {
    startTime: 4646.98,
    person: 'Anneke',
    text: ' Um, and then I link people and I introduce them and then they take it from there.'
  },
  {
    startTime: 4651.7,
    person: 'Anneke',
    text: " It's, uh, it's not too big of a, it takes me a few, yeah, some, some linking and introducing and, uh, yeah."
  },
  {
    startTime: 4661.44,
    person: 'Karol',
    text: ' So I took a, because I still remember who my buddy was for, for DDD Europe 25.'
  },
  { startTime: 4667.8, person: 'Karol', text: ' So I took a look at my Gmail.' },
  {
    startTime: 4669.5,
    person: 'Karol',
    text: ' Uh, I was assigned my buddy two months before the conference.'
  },
  {
    startTime: 4673.1,
    person: 'Karol',
    text: ' So plenty of time to schedule some sessions and actually get some feedback.'
  },
  {
    startTime: 4678.04,
    person: 'Karol',
    text: ' We, I think we managed to get three or four sessions in before the conference to just have conversations.'
  },
  {
    startTime: 4685.78,
    person: 'Karol',
    text: ' Also at the same time managing our, uh, work life and having to find a spot during the day to do that.'
  },
  {
    startTime: 4693.24,
    person: 'Karol',
    text: ' Uh, also a very useful thing is that there was a, a actually public repository and GitHub, uh, about the system.'
  },
  { startTime: 4701.72, person: 'Karol', text: " So this is, there's a QR for that right there." },
  {
    startTime: 4704.04,
    person: 'Karol',
    text: ' I just quickly copied that from my email, uh, which is, uh, I think that, for our friend in Brazil is might be quite useful for his, as a tip for an organiser.'
  },
  {
    startTime: 4716.14,
    person: 'Karol',
    text: " Uh, so, uh, this was a, a, uh, process that kind of, I'm guessing helped a lot of speakers."
  },
  { startTime: 4724.78, person: 'Karol', text: " I'm not sure what the stats are." },
  { startTime: 4726.14, person: 'Karol', text: ' How many, uh, speakers actually have a body?' },
  { startTime: 4730.6, person: 'Anneke', text: ' Not, not 50%, I think.' },
  {
    startTime: 4733.68,
    person: 'Anneke',
    text: ' Um, but I have to check, I have to double check.'
  },
  { startTime: 4737.56, person: 'Anneke', text: ' Oh yeah.' },
  {
    startTime: 4739.58,
    person: 'Karol',
    text: ' Philip, Philip is reminding me because we were doing a lab and that we actually had, uh, our, uh, buddy in the, uh, in the workshop, he was participating in the dry run before the conference.'
  },
  {
    startTime: 4750.06,
    person: 'Karol',
    text: ' We did a dry run, uh, announced it on LinkedIn and people just joined random people from LinkedIn joined.'
  },
  {
    startTime: 4758.26,
    person: 'Karol',
    text: ' Uh, I think that was about two weeks before, uh, DDD Europe.'
  },
  {
    startTime: 4762.66,
    person: 'Karol',
    text: ' Uh, so he even participated and give a, gave us feedback from the actual run.'
  },
  { startTime: 4767.48, person: 'Karol', text: ' Uh, so that was, uh, uh, an option.' },
  {
    startTime: 4770.8,
    person: 'Karol',
    text: " So that's a good thing for speakers to do in general."
  },
  { startTime: 4775.08, person: 'Anneke', text: " And I can't, um, link people too late." },
  {
    startTime: 4777.6,
    person: 'Anneke',
    text: " As you say, you can't do it one month before the conference people are sometimes the session is, or is, is already fully ready or, um, so I try to do that as soon as possible."
  },
  { startTime: 4788.72, person: 'Anneke', text: ' Um, that is always also a balance.' },
  {
    startTime: 4791.48,
    person: 'Anneke',
    text: ' Um, in my perspective, I would really like it if we could close the CFP like first of October and have done like 10 months to book the flights and to introduce people to each other.'
  },
  {
    startTime: 4802.76,
    person: 'Anneke',
    text: " But then, um, other people say, well, but my talk, I don't know what I want to talk about in 10 months time."
  },
  {
    startTime: 4809.94,
    person: 'Anneke',
    text: ' So that is a yearly fight between logistics and, uh, and, uh, content to what is the correct balance.'
  },
  {
    startTime: 4819.98,
    person: 'Anneke',
    text: " Um, so now it's mid January, but it changes every year because every year we, we are, uh, what should, and also for the, for the flights and the travel that we book, you time is a factor."
  },
  { startTime: 4833.46, person: 'Anneke', text: ' It has a big impact on our budget.' },
  {
    startTime: 4836.04,
    person: 'Anneke',
    text: " So, um, we can't wait and you can't book a hundred flights or travels the last two months because you don't have the time."
  },
  {
    startTime: 4845.36,
    person: 'Anneke',
    text: ' Um, but also budget wise, you need to have them booked at least two months beforehand.'
  },
  {
    startTime: 4851.48,
    person: 'Anneke',
    text: " And there's always speakers that are not ready that."
  },
  {
    startTime: 4854.44,
    person: 'Anneke',
    text: ' So you need some extra time for, for people who still need to make decisions and when can they leave and, but you need to have them two months beforehand.'
  },
  { startTime: 4861.24, person: 'Anneke', text: ' Um, otherwise prices go skyrocketing.' },
  { startTime: 4864.12, person: 'Karol', text: ' And then you still get mishaps.' },
  {
    startTime: 4866.04,
    person: 'Karol',
    text: ' Like I remember one or two talks in DDD 24, uh, were done online because, uh, the speakers, uh, had visas cancelled.'
  },
  { startTime: 4877.96, person: 'Karol', text: " So they couldn't actually fly in." },
  {
    startTime: 4880.1,
    person: 'Karol',
    text: ' They have everything booked, everything ready, but their visas were suddenly invalid.'
  },
  { startTime: 4888.22, person: 'Anneke', text: ' Something like that.' },
  { startTime: 4890.4, person: 'Anneke', text: ' Yeah.' },
  { startTime: 4891.64, person: 'Karol', text: ' Something like that.' },
  { startTime: 4892.68, person: 'Karol', text: " There's a story behind that." },
  { startTime: 4893.94, person: 'Karol', text: " That shouldn't be public." },
  {
    startTime: 4896.68,
    person: 'Anneke',
    text: " It's, uh, let's say that we have an extra line in our speaker road book to check the validity of your passports."
  },
  { startTime: 4903.64, person: 'Karol', text: ' Right.' },
  { startTime: 4905.98, person: 'Anneke', text: ' Yeah.' },
  { startTime: 4909.28, person: 'Anneke', text: " It's, uh, yeah." },
  {
    startTime: 4910.82,
    person: 'Anneke',
    text: ' Speakers need to think of a lot of things and, um, and we try to take out of their hands as much as possible, but sometimes you have, sometimes you have bad luck and then you have a last minute cancellation.'
  },
  {
    startTime: 4922.94,
    person: 'Anneke',
    text: ' Um, we try to also be proactive about that, um, and have some, um, backup speakers ready or ideas about what if, what if something happens?'
  },
  { startTime: 4934.78, person: 'Anneke', text: " Um, um, but some people can't be replaced." },
  {
    startTime: 4939.06,
    person: 'Anneke',
    text: " Um, and then I remember indeed that we had a speaker calling in that it's not a perfect solution."
  },
  {
    startTime: 4946.7,
    person: 'Anneke',
    text: " Um, but for sometimes it is a, sometimes it is an option and then you have to work the weekend before the conference that that's part of the deal."
  },
  { startTime: 4957.2, person: 'Anneke', text: ' Yeah.' },
  { startTime: 4960.72, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 4961.42,
    person: 'Karol',
    text: " I do remember also that, that, that outline change, uh, in, uh, this year's conference that the closing keynote was, uh, rigged on a, on a fly."
  },
  {
    startTime: 4973.44,
    person: 'Karol',
    text: ' Uh, Dr. Jake Bloom, uh, I believe was the, uh, keynote speaker and he just spent the whole evening before the day crafting that keynote and redoing his completely his talk because of a sudden change in schedule.'
  },
  { startTime: 4989.82, person: 'Anneke', text: ' Because, uh, yeah.' },
  { startTime: 4991.84, person: 'Anneke', text: ' Um, strikes, strikes and train strikes.' },
  { startTime: 4996, person: 'Anneke', text: ' Yeah.' },
  { startTime: 4996.62, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 4996.8,
    person: 'Karol',
    text: ' That was, that was the, that was the case that this year.'
  },
  { startTime: 4999.04, person: 'Karol', text: ' Yeah.' },
  { startTime: 4999.44, person: 'Karol', text: ' Train strikes.' },
  { startTime: 5000.38, person: 'Anneke', text: ' Yeah.' },
  {
    startTime: 5000.7,
    person: 'Karol',
    text: ' I have my, my share of problems coming back home due to that.'
  },
  { startTime: 5003.96, person: 'Karol', text: ' Yeah.' },
  { startTime: 5004.22, person: 'Anneke', text: ' That was another train strikes.' },
  {
    startTime: 5006.1,
    person: 'Anneke',
    text: ' We had one year with, um, with, uh, snow when we were still in winter.'
  },
  { startTime: 5011.78, person: 'Anneke', text: " Um, there's always something." },
  { startTime: 5014.32, person: 'Anneke', text: ' So we try to be prepared.' },
  {
    startTime: 5017.56,
    person: 'Anneke',
    text: ' Um, actually I went to a conference for conference organisers, um, two weeks ago and, um, there was a panel discussion with, um, um, some people involved in the, how they treated COVID and then on a nation.'
  },
  {
    startTime: 5033.36,
    person: 'Anneke',
    text: ' So our, uh, head, um, virologist Belgium and also the, um, person responsible for, um, national communication, national crisis communication.'
  },
  {
    startTime: 5046.16,
    person: 'Anneke',
    text: " And this person said, he said, you can't be ready."
  },
  {
    startTime: 5050.52,
    person: 'Anneke',
    text: " You shouldn't prepare for everything because you can't know, you won't know what will go wrong."
  },
  {
    startTime: 5056.04,
    person: 'Anneke',
    text: ' And I thought that was a good feedback for me, but you want to be, you want to have options and you, you just need to know things will go wrong.'
  },
  {
    startTime: 5065.1,
    person: 'Anneke',
    text: ' Like, like this year, I, I, um, before new crafts, my mom had her birthday and I scheduled something in and we did have some last minute work, but my colleagues were available.'
  },
  {
    startTime: 5076.96,
    person: 'Anneke',
    text: ' But, uh, we learned from that, that we will now have, um, like a dedicated person available every year, every day, the week before and the week after.'
  },
  {
    startTime: 5086.64,
    person: 'Anneke',
    text: " Um, because one day of two, three years ago, after DDD Europe, I had tickets for in the cave the day after, and that just didn't work out how it was supposed to."
  },
  {
    startTime: 5096.66,
    person: 'Anneke',
    text: " So, so now we're going to, that's something we learn."
  },
  {
    startTime: 5098.96,
    person: 'Anneke',
    text: " We're going to schedule that in for our own peace of mind."
  },
  {
    startTime: 5101.64,
    person: 'Anneke',
    text: " Like, okay, uh, Heald is available on that day and I'm available on that day and we'll make it work."
  },
  {
    startTime: 5107.28,
    person: 'Anneke',
    text: " Um, because there's always things that go wrong."
  },
  { startTime: 5111.54, person: 'Anneke', text: ' Yep.' },
  { startTime: 5112.92, person: 'Karol', text: ' Okay.' },
  {
    startTime: 5113.78,
    person: 'Karol',
    text: " So we're, we, we have the two, three weeks, three weeks before the conference where all sorts of random things happen."
  },
  { startTime: 5122.64, person: 'Karol', text: ' You deal with that.' },
  {
    startTime: 5124.12,
    person: 'Karol',
    text: ' These are always the random things that you have to like figure out case by case and just go.'
  },
  {
    startTime: 5129.52,
    person: 'Karol',
    text: ' Then, uh, on the day of the conference, we are here.'
  },
  { startTime: 5133.8, person: 'Karol', text: " What's going on?" },
  { startTime: 5140, person: 'Karol', text: ' Deep sigh and deep breath.' },
  { startTime: 5142.04, person: 'Anneke', text: ' Best would be if I have no work.' },
  {
    startTime: 5145.94,
    person: 'Anneke',
    text: " Um, if, um, if everything is running, we, we delegate a lot of work in the venue and Antwerp, they're very professional and everything is done for us."
  },
  {
    startTime: 5155.94,
    person: 'Anneke',
    text: ' Well, not everything, but, but, uh, we have, we have staff, we have volunteers.'
  },
  {
    startTime: 5161.04,
    person: 'Anneke',
    text: ' Um, so everything should run and I should just have my list with me and check off if everything is done.'
  },
  { startTime: 5167.56, person: 'Anneke', text: ' And then, uh, Maxine, did you do that?' },
  { startTime: 5170.16, person: 'Anneke', text: ' Yep.' },
  { startTime: 5170.46, person: 'Anneke', text: ' Check.' },
  { startTime: 5171.02, person: 'Anneke', text: ' Um, and do that.' },
  {
    startTime: 5172.2,
    person: 'Anneke',
    text: " And if I'm able to do that, then what I, um, like the most and what I think is really important is that I go in the room and see people and see how things are going."
  },
  {
    startTime: 5185.74,
    person: 'Anneke',
    text: ' Um, and spot, um, spot how things are going, get a, get a vibe, um, be available for people, um, be present.'
  },
  {
    startTime: 5196.62,
    person: 'Anneke',
    text: " Um, our, our speakers are also always available in the rooms and it's nice for people to have someone to reach out to or to talk to."
  },
  {
    startTime: 5206.06,
    person: 'Anneke',
    text: " Um, and as an organiser, um, when I'm able to do so, we, we like to also be available and, uh, and that's how we learn the most by being there, seeing how things are going."
  },
  {
    startTime: 5217.96,
    person: 'Anneke',
    text: " Um, if you see that there's a queue for the catering, um, then, you know, when you get it in the feedback, then you know, uh, this is correct or, or, you know, it was just a hiccup."
  },
  {
    startTime: 5228.44,
    person: 'Anneke',
    text: ' Um, also when you see things, you can sometimes, if, if you would, for example, see a queue in the catering, it can still be fixed for the, for the next day.'
  },
  { startTime: 5237.16, person: 'Anneke', text: ' Um, so you have to jump on that.' },
  {
    startTime: 5240.26,
    person: 'Anneke',
    text: " Um, but during the conference it's go with the flow and follow the checklists and then know that the checklists will be different than what you thought it would be because things will not go wrong, but, but there's last minute questions and, and, and I wouldn't call that wrong."
  },
  {
    startTime: 5262.42,
    person: 'Anneke',
    text: " It's just things go different than what you, um, planned."
  },
  {
    startTime: 5267.08,
    person: 'Karol',
    text: " And you, there's probably a lot of assumptions, how things would go versus how things go."
  },
  { startTime: 5272.08, person: 'Karol', text: ' They usually differ.' },
  {
    startTime: 5274.14,
    person: 'Karol',
    text: " I remember a beautiful site, uh, the first day of this year's, uh, uh, DDD Europe, where I saw you at the foot of the stairs, directing people to the rooms because people were lost and didn't know where to go to the smaller rooms for different talks and labs."
  },
  { startTime: 5289.28, person: 'Karol', text: ' And you were just this way, this way.' },
  {
    startTime: 5293.64,
    person: 'Karol',
    text: ' So if you go to the conference, you see Annika just roaming about everywhere, just doing all sorts of odd jobs.'
  },
  {
    startTime: 5301.18,
    person: 'Anneke',
    text: ' This year, there will be a carton board version of me just doing that.'
  },
  {
    startTime: 5311.94,
    person: 'Anneke',
    text: ' Gilda does all our designs and I, uh, instructed her, get, get me one of this and one of this, and she will print it on carton and put it in front of the stairs.'
  },
  {
    startTime: 5323.14,
    person: 'Anneke',
    text: ' It is funny that you mentioned it because it is a, um, it was a new venue and people got lost and, and we, and we, we did think about that beforehand and we were thinking, uh, during the conference and we, so it, it took a lot of our, um, uh, we were occupied with that a lot.'
  },
  {
    startTime: 5343.44,
    person: 'Anneke',
    text: ' The problem is that it seems something that is easily fixable.'
  },
  {
    startTime: 5348.04,
    person: 'Anneke',
    text: ' You know, you think, oh, just put 20 extra signs and people will find it.'
  },
  {
    startTime: 5352.42,
    person: 'Anneke',
    text: " But that is not true because, um, some people will need 21 signs and some people only need five and, and then think 20 is just clutter and stop reading the signs because there's too many."
  },
  {
    startTime: 5366.44,
    person: 'Anneke',
    text: " Um, so it's, those are things that seem fairly easy to fix, but are, there's no perfect solution for things like that."
  },
  {
    startTime: 5377.88,
    person: 'Anneke',
    text: ' So we, we are thinking about how to improve that this year.'
  },
  { startTime: 5383.5, person: 'Anneke', text: ' Uh, but yeah, it was the new location.' },
  {
    startTime: 5385.9,
    person: 'Anneke',
    text: ' It was hard to find, uh, the new rooms for the first time.'
  },
  { startTime: 5389.96, person: 'Anneke', text: ' Yeah.' },
  { startTime: 5390.92, person: 'Karol', text: ' And on top of that, you get herd mentality.' },
  { startTime: 5393.32, person: 'Karol', text: ' So people just follow the crowd, right?' },
  { startTime: 5395.64, person: 'Karol', text: ' No, no amount of signs will, will help them.' },
  { startTime: 5400.88, person: 'Karol', text: " And it's, it's of course a new location." },
  {
    startTime: 5403.8,
    person: 'Karol',
    text: ' There are always some sort of organisational kinks to iron out.'
  },
  {
    startTime: 5407.5,
    person: 'Anneke',
    text: " It's a big location, so it is hard to find your way."
  },
  {
    startTime: 5410.84,
    person: 'Anneke',
    text: ' It is, uh, it, yeah, even for us also, we, we went there several times.'
  },
  {
    startTime: 5415.62,
    person: 'Anneke',
    text: ' We did a walk through, um, we did several walkthroughs, um, but we also had to get used to the location.'
  },
  { startTime: 5424.04, person: 'Anneke', text: " Um, but, uh, but it's a nice location." },
  { startTime: 5427.94, person: 'Anneke', text: ' I like, I like being there.' },
  { startTime: 5429.66, person: 'Anneke', text: ' Yeah.' },
  {
    startTime: 5430.16,
    person: 'Karol',
    text: ' And then on top of that, the logistics of getting all the things into the right rooms and then fixing whatever goes wrong.'
  },
  { startTime: 5437.74, person: 'Karol', text: ' Right.' },
  { startTime: 5438.22, person: 'Karol', text: ' So you already mentioned like post-its.' },
  {
    startTime: 5440.44,
    person: 'Karol',
    text: ' I remember, uh, I believe Philip was writing that in the, in the abstract.'
  },
  {
    startTime: 5444.66,
    person: 'Karol',
    text: ' Well, we need, uh, green post-its, orange post-its, blue post-its and cloud shaped post-its.'
  },
  { startTime: 5450.5, person: 'Karol', text: " And it's like, Oh, that's going to be fun." },
  {
    startTime: 5455.22,
    person: 'Karol',
    text: " Well, where would they get cloud shaped post-its, but apparently they're available."
  },
  { startTime: 5460.6, person: 'Anneke', text: ' Yeah.' },
  {
    startTime: 5461.06,
    person: 'Anneke',
    text: " But sometimes it's, it, it's easier when, you know, in advance, because then I will have them ready."
  },
  {
    startTime: 5467.1,
    person: 'Anneke',
    text: " Um, and when we don't have it ready, we try to find solutions that are"
  },
  {
    startTime: 5472.08,
    person: 'Anneke',
    text: ' good enough, um, for the instructors, but the post-its is, um, is a recurring discussion between'
  },
  {
    startTime: 5479.08,
    person: 'Anneke',
    text: ' me and the colleagues, because once upon a time I bought way too many post-its and I want to bring'
  },
  {
    startTime: 5486.34,
    person: 'Anneke',
    text: " them every year to DDD Europe, but my colleague has to put her, and every year she's not going to"
  },
  { startTime: 5494.84, person: 'Anneke', text: ' access, you have to make a decision.' },
  {
    startTime: 5498.9,
    person: 'Anneke',
    text: ' Um, but how, how, what if someone needs cloud shaped post-its that I forgot them in the office?'
  },
  {
    startTime: 5505.2,
    person: 'Anneke',
    text: " That's just, um, actually Philip, I bought last year that I don't need any new ones, except for the cloud shaped ones, I need to buy those."
  },
  {
    startTime: 5514.64,
    person: 'Anneke',
    text: ' Um, we have a big stock of post-its that I want to get rid of every year.'
  },
  {
    startTime: 5521.38,
    person: 'Anneke',
    text: ' Um, yeah, but we try to have everything because, because you probably prepared your workshop with these colours and this works for you and this makes sense for you.'
  },
  {
    startTime: 5532.42,
    person: 'Anneke',
    text: " So I, as an amateur, I don't understand that, but I learned that it's important."
  },
  { startTime: 5538.38, person: 'Anneke', text: ' So I try to provide it for you.' },
  {
    startTime: 5540.76,
    person: 'Anneke',
    text: " Um, but sometimes, you know, it will be a, um, a lighter shade of pink than what you're used to and we'll have to go with the flow."
  },
  {
    startTime: 5550.84,
    person: 'Karol',
    text: ' I think for DDD specifically, there, there are certain coral colours that are common due to event storming or other, uh, uh, formats that people are just used to.'
  },
  {
    startTime: 5562.18,
    person: 'Karol',
    text: " And that's, that actually makes it a little bit easier in that sense."
  },
  {
    startTime: 5566.36,
    person: 'Karol',
    text: ' But, uh, yeah, all those logistics, uh, I remember a screen going haywire in our lab.'
  },
  {
    startTime: 5574.22,
    person: 'Karol',
    text: " It was just like, we couldn't connect any laptop to it."
  },
  { startTime: 5578.02, person: 'Karol', text: " It just didn't respond and didn't want it." },
  {
    startTime: 5579.8,
    person: 'Karol',
    text: " So basically Murphy's law, we were supposed to run a presentation on the loop before we started."
  },
  {
    startTime: 5587.66,
    person: 'Karol',
    text: " The workshop ended up not running it at all because the screen just didn't budge."
  },
  {
    startTime: 5591.46,
    person: 'Karol',
    text: ' So somebody just dragged the huge screen from a different room and we managed to start at time.'
  },
  {
    startTime: 5597.92,
    person: 'Karol',
    text: " But this is like, this is just Murphy's law at conferences, I suppose that these kinds of things just happen."
  },
  { startTime: 5603.44, person: 'Anneke', text: ' Yeah.' },
  {
    startTime: 5603.86,
    person: 'Anneke',
    text: " And you don't want, you want, you don't want people to, to, if the session is two hours, you don't want to start too late because it takes, yeah."
  },
  {
    startTime: 5611.9,
    person: 'Anneke',
    text: ' Um, so we try to prepare things in advance and, and make sure that people do the checks and the breaks.'
  },
  {
    startTime: 5618.14,
    person: 'Anneke',
    text: ' Um, and, and we want to be available for that or have technical staff available for that.'
  },
  {
    startTime: 5622.9,
    person: 'Anneke',
    text: ' This is all built in, in my very big, long checklist, uh, of things.'
  },
  { startTime: 5629.46, person: 'Anneke', text: ' Yeah.' },
  {
    startTime: 5630.04,
    person: 'Anneke',
    text: ' The, the, the Phillip said the technician was awesome, but the staff and the venue is, it was really amazing to work with.'
  },
  { startTime: 5637.2, person: 'Anneke', text: ' Um, and that helps a lot as well.' },
  {
    startTime: 5639.5,
    person: 'Anneke',
    text: " Um, if the venue understands what you're doing and, and try to work with you and try to find solutions, um, that's, that's an amazing thing."
  },
  { startTime: 5648.48, person: 'Karol', text: ' Okay.' },
  { startTime: 5649, person: 'Karol', text: ' So what other things go haywire on the day?' },
  { startTime: 5654.32, person: 'Karol', text: ' Exactly.' },
  { startTime: 5654.76, person: 'Karol', text: ' Shoot some random examples.' },
  { startTime: 5656.64, person: 'Karol', text: ' Okay.' },
  {
    startTime: 5656.86,
    person: 'Karol',
    text: ' Post-its, you know, screens going, not working, mics not working.'
  },
  { startTime: 5661.56, person: 'Karol', text: ' Sure.' },
  {
    startTime: 5663.34,
    person: 'Karol',
    text: " What is the most like random thing that happened that was like, you didn't expect at all?"
  },
  {
    startTime: 5670.58,
    person: 'Anneke',
    text: ' I seem to have blocked that in my, uh, memories.'
  },
  { startTime: 5674.3, person: 'Anneke', text: " I don't, I don't know." },
  { startTime: 5676.5, person: 'Maxime', text: ' I have some stories.' },
  { startTime: 5679.22, person: 'Karol', text: ' Shoot.' },
  { startTime: 5681.18, person: 'Karol', text: ' Give us a story.' },
  { startTime: 5683.14, person: 'Karol', text: ' War stories from new crafts.' },
  { startTime: 5684.78, person: 'Karol', text: " Let's go." },
  { startTime: 5685.62, person: 'Maxime', text: ' Whoa.' },
  {
    startTime: 5686.34,
    person: 'Maxime',
    text: " Uh, we were, we're organising all the stuff before, uh, uh, on, on our own and, uh, we're total amateurs and, uh, yeah, sometimes, uh, it brought some, some pretty funny anecdotes."
  },
  {
    startTime: 5702.74,
    person: 'Maxime',
    text: ' Like, uh, I think it was the second or the third edition of new crafts.'
  },
  { startTime: 5707.18, person: 'Maxime', text: " I don't remember exactly." },
  {
    startTime: 5708.62,
    person: 'Maxime',
    text: ' Uh, we, we had decided to go with, um, um, a young company that were starting to do catering and they were, uh, highly motivated by, uh, bringing food to the conference.'
  },
  {
    startTime: 5721.94,
    person: 'Maxime',
    text: ' Um, so we were, yeah, we, we, we said what we, we, the amount of food that we would like to have and they, they organised themselves to, to have it ready, um, at noon.'
  },
  {
    startTime: 5734.42,
    person: 'Maxime',
    text: ' And I remember like the, the first, the main room talk ended.'
  },
  {
    startTime: 5741.08,
    person: 'Maxime',
    text: ' Um, and then all the people went, uh, to, um, uh, the space where they, they were able to eat.'
  },
  {
    startTime: 5748.62,
    person: 'Maxime',
    text: " And, um, it took like, I don't know, 10 or 15 more minutes for the other room to, uh, to end."
  },
  { startTime: 5756.36, person: 'Maxime', text: ' And they did the end zone as well.' },
  {
    startTime: 5758.4,
    person: 'Maxime',
    text: ' So we had begun wave of people coming like, uh, 15 minutes later and there was almost no food left.'
  },
  {
    startTime: 5767.58,
    person: 'Maxime',
    text: ' The first room, uh, they, they took like the plates that were fully full of food.'
  },
  {
    startTime: 5775.58,
    person: 'Maxime',
    text: ' And, uh, we were in panic because, uh, uh, it was actually not enough food for everyone.'
  },
  {
    startTime: 5783.86,
    person: 'Maxime',
    text: ' So he had to, uh, the, the, the, the catering people, they, they had to, uh, run to, uh, uh, supermarkets around, bring some things and I was cutting bread in the backstage.'
  },
  {
    startTime: 5796.08,
    person: 'Maxime',
    text: ' So I had picture of me cutting bread for participants.'
  },
  {
    startTime: 5800.26,
    person: 'Maxime',
    text: " Um, so yeah, that's the kind of stuff you learn, uh, pretty, pretty funny story."
  },
  {
    startTime: 5806.62,
    person: 'Maxime',
    text: ' Um, I also had to, um, to knock at, uh, Mr. Quebec, uh, hotel room, uh, to, uh, bring him a COVID test.'
  },
  { startTime: 5821.96, person: 'Anneke', text: ' Oh, I had a speaker.' },
  {
    startTime: 5824.36,
    person: 'Anneke',
    text: ' I had a speaker who had to stay, uh, in the hotel, uh, a week after the conference because he had COVID.'
  },
  {
    startTime: 5832.04,
    person: 'Anneke',
    text: " And at the time they weren't allowed to travel."
  },
  { startTime: 5834.3, person: 'Anneke', text: ' It was at the full stack, which we organised.' },
  {
    startTime: 5837.08,
    person: 'Anneke',
    text: ' And, um, I had to, yeah, so I ordered care packages and had it delivered to the room and asked the hotel to bring catering because he was stuck.'
  },
  { startTime: 5847.14, person: 'Maxime', text: ' Yep.' },
  { startTime: 5848, person: 'Maxime', text: ' Things like that.' },
  { startTime: 5849.78, person: 'Maxime', text: ' It happens.' },
  { startTime: 5852.56, person: 'Karol', text: ' Whoa.' },
  {
    startTime: 5853.74,
    person: 'Anneke',
    text: ' We once had a found, um, uh, on Friday evening, we found a backpack or, or, or, or, or a laptop or something.'
  },
  {
    startTime: 5865.18,
    person: 'Anneke',
    text: ' And a passport was in it and it was a non-European passport.'
  },
  {
    startTime: 5870,
    person: 'Anneke',
    text: ' And we, um, tried to track down the person and apparently he was on his way to the airport without the passport.'
  },
  {
    startTime: 5882.6,
    person: 'Anneke',
    text: " I don't, I don't remember how we were able to track him down, but probably through colleagues or through LinkedIn or, and we chased until we were able to deliver the passport, things like that."
  },
  { startTime: 5892.44, person: 'Anneke', text: ' We, uh, that happens.' },
  { startTime: 5893.98, person: 'Anneke', text: ' Yeah.' },
  {
    startTime: 5896.51,
    person: 'Anneke',
    text: ' And I think once I did it in Europe, we had a lot of water pipes bursting during the workshop.'
  },
  { startTime: 5907.51, person: 'Anneke', text: ' Yeah.' },
  {
    startTime: 5908.93,
    person: 'Maxime',
    text: ' One, one, one year we had also all the, the, the new Macs that were not working at all.'
  },
  {
    startTime: 5917.77,
    person: 'Maxime',
    text: ' The, the, the, the video was not working at all in all the rooms when people had those, those new Macs.'
  },
  {
    startTime: 5926.97,
    person: 'Maxime',
    text: ' And, um, yeah, we, we had to find ways to make it work.'
  },
  {
    startTime: 5931.25,
    person: 'Maxime',
    text: ' It was a nightmare because, uh, all the talks were starting late, uh, because we were trying to fix it and it, yeah.'
  },
  { startTime: 5939.73, person: 'Maxime', text: ' So, um, you never know, you never know.' },
  {
    startTime: 5943.77,
    person: 'Maxime',
    text: ' Um, hopefully, well, actually everything is from a participant point of view, everything seems always going smooth.'
  },
  {
    startTime: 5954.79,
    person: 'Maxime',
    text: " Like, yeah, everything is, is, uh, well-prepared, uh, no glitches, but as a, an organiser, sometimes you're, uh, very, very stressed during the day because you have to run all over the place, uh, for, yeah, anything that, that can, that can happen."
  },
  {
    startTime: 5972.87,
    person: 'Anneke',
    text: ' But that is the main goal that for the participants during the conference, during the sessions, that everything goes smooth and that they have a good experience and how, how we follow up on things in the back office.'
  },
  {
    startTime: 5986.17,
    person: 'Anneke',
    text: ' Um, we, yeah, we will make sure that for them it runs smooth and that, and that the speakers feel okay.'
  },
  { startTime: 5992.63, person: 'Anneke', text: " And, and that's, uh, that's the main goal." },
  { startTime: 5995.09, person: 'Anneke', text: ' Absolutely.' },
  {
    startTime: 5999.4,
    person: 'Anneke',
    text: ' And then, um, and then the conference is done and then you need two weeks of sleep.'
  },
  { startTime: 6006.56, person: 'Karol', text: ' Okay.' },
  { startTime: 6007.2, person: 'Karol', text: ' Okay.' },
  {
    startTime: 6007.42,
    person: 'Karol',
    text: ' Before you jump into, uh, two weeks of sleep and being done from the perspective of CFP, Maxime, how would you look at it?'
  },
  {
    startTime: 6017.42,
    person: 'Karol',
    text: " So if you joined that conference, you were part of the, the programme management team and you look at, uh, uh, what's happening during the conference, do you have a, like, is there a role for the programme management team that they played during the conference or it's like, it's done."
  },
  { startTime: 6032.86, person: 'Karol', text: " We just don't watch the world burn." },
  { startTime: 6036.24, person: 'Maxime', text: ' No, no.' },
  { startTime: 6036.76, person: 'Maxime', text: ' Yeah.' },
  {
    startTime: 6037.28,
    person: 'Maxime',
    text: " Well, we, we, um, we didn't mention it with, but we have to, to build a schedule of course."
  },
  {
    startTime: 6042.24,
    person: 'Maxime',
    text: " Uh, that's, that's, uh, one of the things that we have to do."
  },
  { startTime: 6045.7, person: 'Anneke', text: ' Um, yeah.' },
  {
    startTime: 6049.12,
    person: 'Maxime',
    text: ' Um, choosing, uh, and picking the, the, the right, uh, speakers for, for the keynotes.'
  },
  {
    startTime: 6055.12,
    person: 'Maxime',
    text: " Uh, it's also important because, uh, you want to start the conference with, with a talk that really sets the scene, like, uh, uh, that really delivers the, the main message you want to, to, um, to go over and over during the conference."
  },
  {
    startTime: 6071.82,
    person: 'Maxime',
    text: " So it's, it's really important to find the right one."
  },
  {
    startTime: 6074.9,
    person: 'Maxime',
    text: ' Uh, and on the other hand, the, the last talk of, of the, the, the, the conference where everyone is already tired because they, they, they went, well, they were there for two or three days.'
  },
  {
    startTime: 6090.2,
    person: 'Maxime',
    text: " Um, um, you don't want to, to have something that it's too deep and too technical or whatever."
  },
  {
    startTime: 6096.38,
    person: 'Maxime',
    text: ' So you really want to, um, people to relax and be, uh, entertained.'
  },
  { startTime: 6101.82, person: 'Maxime', text: " Uh, so, um, it's, it's really different." },
  {
    startTime: 6104.78,
    person: 'Maxime',
    text: " So, um, also during the conference, you don't want to have the, the same topics and the same time in, in two different tracks, of course, or, um, competing topics or stuff like that."
  },
  {
    startTime: 6117.22,
    person: 'Maxime',
    text: ' So, um, yeah, you, you, you really have to, to, to think about how you will organise your schedule.'
  },
  {
    startTime: 6124,
    person: 'Maxime',
    text: " Uh, so, uh, it's, um, it's very important to, to have the right balance, uh, also."
  },
  {
    startTime: 6129.6,
    person: 'Maxime',
    text: ' But then during the day of the conference as a programme manager, well, as a former conference organiser, I always, uh, yeah, try to, to, to, um, make sure that things are going okay.'
  },
  {
    startTime: 6143.3,
    person: 'Maxime',
    text: ' But, uh, yeah, with Anika in the place, you know, that you can relax, she will handle everything.'
  },
  { startTime: 6150, person: 'Maxime', text: ' Um, and, and the team as well.' },
  {
    startTime: 6152.44,
    person: 'Maxime',
    text: ' So, uh, I was just, um, emceeing, uh, during the day.'
  },
  {
    startTime: 6156.6,
    person: 'Maxime',
    text: ' So, and, and talking to people and actually that was the first time I, I had the opportunity to, to see, uh, that much talk during my own conference.'
  },
  { startTime: 6165.58, person: 'Maxime', text: ' So it was great.' },
  {
    startTime: 6167.52,
    person: 'Anneke',
    text: " I think it's important that the, the people who select the talks and, and build a programme that they are able to, to participate in the conference because it's their vision and their selection that is offered."
  },
  {
    startTime: 6183.32,
    person: 'Anneke',
    text: ' And, and they, um, first of all, they can enjoy the work that they did.'
  },
  {
    startTime: 6188.54,
    person: 'Anneke',
    text: " Um, but also for our participants, it's, it's, uh, I don't know if a lot of people talk to you, Maxim, about, about the schedule or the speakers, but, but you're, you and the team were the people that picked the talk."
  },
  {
    startTime: 6201.06,
    person: 'Anneke',
    text: " So, so you have some things to say about it and you have some opinions on it and it's a, it's a good, it's something that people want to, want to discuss."
  },
  { startTime: 6208.98, person: 'Anneke', text: ' Uh, they want to see the ideas.' },
  {
    startTime: 6211.18,
    person: 'Anneke',
    text: " Um, so it's a good thing that, that the people, that the committee, that they are present, that they are in the room, because that makes, that makes the networking important, because it is another aspect of what we try to do."
  },
  { startTime: 6223.66, person: 'Anneke', text: ' We, we want to build the networks.' },
  { startTime: 6225.12, person: 'Anneke', text: ' We want to build community.' },
  {
    startTime: 6226.44,
    person: 'Anneke',
    text: ' We want people to, Matja has always said the most, the most important track is the hallway track.'
  },
  {
    startTime: 6232.34,
    person: 'Anneke',
    text: ' Um, people can watch the talks on the videos, but you cannot recreate the hallway track on the videos.'
  },
  {
    startTime: 6238.9,
    person: 'Anneke',
    text: " But the hallway track is only interesting if there's people willing to talk."
  },
  {
    startTime: 6245.06,
    person: 'Anneke',
    text: " Um, obviously that's not everyone's cup of tea, but if, if people are there and present and happy to talk, that's, that's an always a nice experience for everyone."
  },
  {
    startTime: 6254.12,
    person: 'Anneke',
    text: ' Um, and, um, so, so I like it when the committee is, is present in the conference.'
  },
  {
    startTime: 6260.14,
    person: 'Anneke',
    text: ' And I also like it when they want to MC, because then, um, they know the people, they selected the talks.'
  },
  {
    startTime: 6266.76,
    person: 'Anneke',
    text: " So it's, uh, they're, they're well-placed to introduce the people and, um, and, um, you know, make them feel welcome and introduce them to the audience."
  },
  { startTime: 6277.88, person: 'Anneke', text: ' So.' },
  { startTime: 6279.62, person: 'Karol', text: ' Okay.' },
  {
    startTime: 6280.12,
    person: 'Karol',
    text: ' You mentioned the hallway track, which is, I find it also very, very interesting and very worthwhile.'
  },
  {
    startTime: 6285.78,
    person: 'Karol',
    text: " It's, uh, it's, uh, all the, the, the, the conversations that are really sparking the ideas based on, uh, whatever is happening in the talks before, after expectations."
  },
  { startTime: 6298.82, person: 'Karol', text: ' Uh, yeah.' },
  {
    startTime: 6299.58,
    person: 'Karol',
    text: " And, and comment here, it's a, the hallway track is exactly how I met Philip because I thought he was Polish because his last name is actually Polish."
  },
  {
    startTime: 6308.56,
    person: 'Karol',
    text: " And I started talking Polish to him and he says, I don't speak Polish."
  },
  { startTime: 6312.6, person: 'Karol', text: " I'm German." },
  { startTime: 6313.72, person: 'Karol', text: ' Right.' },
  { startTime: 6314.4, person: 'Karol', text: ' And this is how we know each other.' },
  {
    startTime: 6316.1,
    person: 'Karol',
    text: ' And this is how our, uh, uh, journey together as a specialist working on different topics in the research started.'
  },
  { startTime: 6322.64, person: 'Karol', text: ' Uh, right.' },
  {
    startTime: 6323.86,
    person: 'Karol',
    text: ' So, uh, hallway track is important, but a large part of that.'
  },
  {
    startTime: 6328.28,
    person: 'Karol',
    text: ' And I saw that firsthand in DVD Europe is the inclusiveness.'
  },
  { startTime: 6332.9, person: 'Karol', text: ' And I want to ask a few here.' },
  { startTime: 6336.14, person: 'Karol', text: ' Uh, how do you cater to that inclusiveness?' },
  { startTime: 6339.4, person: 'Karol', text: ' Because this is mostly done.' },
  {
    startTime: 6341.52,
    person: 'Karol',
    text: ' Of course you do it upfront with all the questions in the forms, when people buy tickets with the speakers, you also include that you manage that in the balance of speakers from different backgrounds, et cetera.'
  },
  {
    startTime: 6356.16,
    person: 'Karol',
    text: " But the inclusiveness during the conference itself, that's a completely different ballpark, right?"
  },
  {
    startTime: 6363.93,
    person: 'Karol',
    text: " Tell us a little bit about that because that's a very interesting topic on its own."
  },
  { startTime: 6370.39, person: 'Anneke', text: " I, um, I don't know." },
  { startTime: 6372.95, person: 'Anneke', text: " I don't know." },
  {
    startTime: 6373.95,
    person: 'Anneke',
    text: " I think it's, I think, I mean, as you say, we try to prepare, we try to, um, have the mindset."
  },
  {
    startTime: 6381.53,
    person: 'Anneke',
    text: ' Um, but I think, um, a big part of that is, is the participants.'
  },
  {
    startTime: 6387.39,
    person: 'Anneke',
    text: " It's the people who are there that make sure those things happen."
  },
  {
    startTime: 6392.37,
    person: 'Anneke',
    text: ' Um, because we can implement a lot of rules and a lot of ideas and a lot of, um, oh, you should do this or that.'
  },
  {
    startTime: 6399.57,
    person: 'Anneke',
    text: " And, uh, and you should be inclusive, but if it's not in the people's minds and, and, uh, how they, how they come to the conference, then it would not happen."
  },
  { startTime: 6411.67, person: 'Anneke', text: " So, but I don't know what the secret is." },
  { startTime: 6414.79, person: 'Anneke', text: " I don't know." },
  {
    startTime: 6417.15,
    person: 'Anneke',
    text: ' All I can say is that we try to, to learn and try to, um, implement ideas and, and try to implement that upfront by, uh, as you said in the, in the questionnaire, um, so that people are reminded of those things.'
  },
  { startTime: 6433.45, person: 'Anneke', text: " Um, but I don't know." },
  {
    startTime: 6436.37,
    person: 'Anneke',
    text: " And that's also scary because that also means that I don't know how to keep it."
  },
  { startTime: 6442.57, person: 'Anneke', text: " I don't know." },
  {
    startTime: 6443.65,
    person: 'Anneke',
    text: " There's no magic formula, um, except being open-minded."
  },
  {
    startTime: 6448.61,
    person: 'Anneke',
    text: " And, and, um, that's the only thing that, that I know that helps, um, and, and having the audience that, that interacts with that."
  },
  { startTime: 6459.75, person: 'Maxime', text: ' Yeah.' },
  {
    startTime: 6460.23,
    person: 'Maxime',
    text: " That's, um, well, there are a few things that you do and that we do also is during the opening words of the conference."
  },
  {
    startTime: 6466.83,
    person: 'Maxime',
    text: ' We remind people about all this, uh, the Pac-Man techniques and, and stuff like that.'
  },
  {
    startTime: 6472.45,
    person: 'Maxime',
    text: " Uh, it's, um, it's really important, uh, so that people, they know already that they, they are in a safe space and that, uh, one will act, um, to make this a safe space that's emergent."
  },
  {
    startTime: 6486.33,
    person: 'Maxime',
    text: " But, um, as you said, um, I think it's, it's also, uh, because the community is, uh, the root of the community is, is, uh, people that are open minded, as you said, uh, uh, that, that, that cares about inclusivity, uh, and, and, and diversity and stuff like that."
  },
  {
    startTime: 6507.81,
    person: 'Maxime',
    text: " So from the very beginning, the community was built on those values and, um, it's the same for new crafts."
  },
  {
    startTime: 6516.37,
    person: 'Maxime',
    text: " And so it's why it's, uh, people that are joining are people that are aligned with those values, uh, that, that doesn't necessarily have to be set or written down, but it's, uh, something that you feel."
  },
  {
    startTime: 6530.89,
    person: 'Maxime',
    text: " Uh, so, uh, yeah, I think, um, it's part of the reasons why we have that."
  },
  { startTime: 6536.43, person: 'Anneke', text: ' Yeah.' },
  { startTime: 6537.37, person: 'Anneke', text: ' Yeah.' },
  {
    startTime: 6537.97,
    person: 'Anneke',
    text: ' You make a good point by, by doing that during saying those things during the opening.'
  },
  {
    startTime: 6543.57,
    person: 'Anneke',
    text: ' Um, we have the road book that we send in advance.'
  },
  {
    startTime: 6546.41,
    person: 'Anneke',
    text: ' Um, so we remind people of the things that we think are important and a lot of people implement that on a daily basis by themselves.'
  },
  {
    startTime: 6554.25,
    person: 'Anneke',
    text: ' And a lot of people that are not used to it, get introduced to it or we make them think about it.'
  },
  { startTime: 6560.21, person: 'Anneke', text: ' So that, that helps.' },
  {
    startTime: 6561.85,
    person: 'Anneke',
    text: " Um, but it wouldn't work without the community."
  },
  { startTime: 6565.39, person: 'Anneke', text: ' Yep.' },
  {
    startTime: 6568.38,
    person: 'Karol',
    text: " Well, I'm guessing Annika you're, you're chasing your checklist during, so you might not notice certain aspects, that are visible from a participant perspective."
  },
  {
    startTime: 6579,
    person: 'Karol',
    text: " Uh, so I'll, I'll just drop in a few that will instantly, I'm guessing instantly ring truth with you."
  },
  {
    startTime: 6585.66,
    person: 'Karol',
    text: ' Uh, one of this is leading by example, and with every DDD Europe, you have the art league booth somewhere in the middle, somewhere in the hallway track.'
  },
  {
    startTime: 6596.34,
    person: 'Karol',
    text: " So every time I'm passing by, I see, uh, usually I see Ricardo standing there and he's always implementing the Pacman rule and, uh, all of that."
  },
  {
    startTime: 6609.98,
    person: 'Karol',
    text: ' So it, this always is the, the leading example of, of inclusiveness.'
  },
  {
    startTime: 6614.44,
    person: 'Karol',
    text: ' On top of that, you meet all the staff from oddling.'
  },
  {
    startTime: 6618.16,
    person: 'Karol',
    text: ' So not the, the, the conference centre, not the venue, but the actual people organising the conference.'
  },
  {
    startTime: 6623.94,
    person: 'Karol',
    text: " And they're just roaming about and having conversations."
  },
  { startTime: 6628.56, person: 'Karol', text: ' And this in essence is the same implementation.' },
  {
    startTime: 6632.56,
    person: 'Karol',
    text: " And then if you, if you're in the conversation with them, I notice often that they're simply constantly scanning the area for anything."
  },
  { startTime: 6643.56, person: 'Karol', text: ' Are they needed elsewhere?' },
  { startTime: 6644.98, person: 'Karol', text: ' Are they needed to help somebody?' },
  {
    startTime: 6647.78,
    person: 'Karol',
    text: ' Uh, and this is one of the great things that staff, uh, at the conference is very approachable.'
  },
  {
    startTime: 6654.6,
    person: 'Karol',
    text: ' First of all, you see them, you know them because they just pop up.'
  },
  {
    startTime: 6658.66,
    person: 'Karol',
    text: " They are, they're dressed as with a proper t-shirt or whatever attire."
  },
  { startTime: 6663.68, person: 'Karol', text: " Uh, that's one thing and they're approachable." },
  { startTime: 6666.68, person: 'Karol', text: ' So they are there to help.' },
  { startTime: 6669.08, person: 'Karol', text: ' And they actually react to things.' },
  {
    startTime: 6671.78,
    person: 'Karol',
    text: " You've come with a problem to them that you spotted something, they actually instantly just go done."
  },
  {
    startTime: 6678.28,
    person: 'Karol',
    text: " Uh, and not just, you know, not like ignoring because that's not my problem."
  },
  { startTime: 6684.22, person: 'Karol', text: " It's, it's my problem." },
  { startTime: 6685.92, person: 'Karol', text: ' It is a problem, right?' },
  { startTime: 6687.36, person: 'Karol', text: ' This, I need to take care of it.' },
  {
    startTime: 6689.24,
    person: 'Karol',
    text: ' So that additive that brings, I think that resonates throughout community because you, you give that attitude as an example, not expect the community just to blindly follow and to boss around the community, but actually lead it in that behaviour.'
  },
  {
    startTime: 6704.42,
    person: 'Karol',
    text: ' And then on top of that, things like, uh, the, the, uh, body, uh, system, uh, uh, then the Pacman rule and, uh, just catering to certain needs of people, for example, people who get overstimulated with, uh, a dedicated room to just go into and not have a conversation, just be in silence.'
  },
  {
    startTime: 6725.84,
    person: 'Karol',
    text: " Uh, that's, uh, uh, for, from my perspective of, of let's say mental health or neurotypicality, that was one of the most important things to me, uh, where, where I first went to, uh, DDD Europe, uh, in 2024."
  },
  {
    startTime: 6741.42,
    person: 'Karol',
    text: " I had no idea how am I going to react to the venue, to the people, if I'm going to have a panic attack."
  },
  {
    startTime: 6749.72,
    person: 'Karol',
    text: ' And I remember, I think that was your email back then.'
  },
  {
    startTime: 6753.18,
    person: 'Karol',
    text: ' Uh, and you reached out that, that, that I bought the ticket somewhere in October and I got an email from you asking about the accommodations in November.'
  },
  {
    startTime: 6762.9,
    person: 'Karol',
    text: ' So over a half a year before the conference, uh, my needs were already included into the conference or addressed or asked, how can you help and facilitate to my needs?'
  },
  {
    startTime: 6780.1,
    person: 'Karol',
    text: ' Uh, and these are, these are all aspects of inclusiveness that track back way before the conference happens us onto the day where they actually materialise.'
  },
  {
    startTime: 6790.04,
    person: 'Karol',
    text: ' And the risk may or may not materialise that, for example, I would have a panic attack,'
  },
  {
    startTime: 6794.42,
    person: 'Karol',
    text: ' but at that time I already know where to go, who can help me, who to ask, because at the first day'
  },
  {
    startTime: 6801.78,
    person: 'Karol',
    text: ' already everything is explained and the, uh, uh, attend, attend the roadbook or the, uh,'
  },
  {
    startTime: 6809.04,
    person: 'Karol',
    text: ' speaker roadbook that gives all that information, which is a lot of work put up front,'
  },
  { startTime: 6815.02, person: 'Karol', text: ' but that gives a percentage on the day.' },
  { startTime: 6822.28, person: 'Anneke', text: ' Yeah, we do that.' },
  {
    startTime: 6827.46,
    person: 'Karol',
    text: " But I, I'm absolutely aware that you might've been like deep in your checklist at this point, but that wouldn't pop to mind, uh, uh, as, as, as a thing that you actually do."
  },
  { startTime: 6838.38, person: 'Anneke', text: ' Yeah.' },
  {
    startTime: 6839.2,
    person: 'Anneke',
    text: " Yeah, we, yeah, we, um, I mean, there's no point in asking about, um, in asking your participants how you can help them if you don't follow up on it."
  },
  { startTime: 6849.54, person: 'Anneke', text: " Um, and there's always, yeah." },
  { startTime: 6852.92, person: 'Anneke', text: ' Um, but, uh, yeah.' },
  {
    startTime: 6857.04,
    person: 'Anneke',
    text: " And I'm very happy to hear that, um, that the staff is approachable and, uh, that's, that's what we, that's, that's how we select them."
  },
  { startTime: 6864.86, person: 'Anneke', text: " That's what we train them for." },
  {
    startTime: 6866.08,
    person: 'Anneke',
    text: " That's what we explain to them, but, uh, happy that it is also perceived like that on the, on the floor."
  },
  { startTime: 6872.12, person: 'Anneke', text: ' Um, yeah.' },
  {
    startTime: 6873.44,
    person: 'Anneke',
    text: ' Proud of the proud of everyone working at the conference is, uh, yeah.'
  },
  { startTime: 6879.7, person: 'Anneke', text: " It's amazing." },
  { startTime: 6881, person: 'Anneke', text: " It's a, it's a really good team." },
  { startTime: 6883.08, person: 'Anneke', text: ' Yeah.' },
  { startTime: 6883.48, person: 'Anneke', text: " We're really happy." },
  { startTime: 6885.82, person: 'Anneke', text: ' And same at the volunteers at new crafts.' },
  {
    startTime: 6888.7,
    person: 'Anneke',
    text: ' We never worked with, we, me, Hilda Ilse never worked with the volunteers and the new crafts team had a, had a team that they worked with for a long time.'
  },
  {
    startTime: 6898.88,
    person: 'Anneke',
    text: ' And they said, oh, but they will come and they will do the work.'
  },
  {
    startTime: 6901.6,
    person: 'Anneke',
    text: " And we're like, yeah, but we want to be prepared and we have checklists and we want to explain to them."
  },
  {
    startTime: 6906.24,
    person: 'Anneke',
    text: ' And it was, you know, it was again, um, uh, a balancing, um, like, uh, what can we prepare because they know the conference better than, than we do.'
  },
  {
    startTime: 6918.22,
    person: 'Anneke',
    text: ' Um, but that team was so amazing that, you know, we wanted to take them all with us to Europe.'
  },
  { startTime: 6924.84, person: 'Anneke', text: ' They were so, um, yeah.' },
  {
    startTime: 6928.12,
    person: 'Anneke',
    text: ' Welcoming to other people, organising their work themselves.'
  },
  {
    startTime: 6931.3,
    person: 'Anneke',
    text: ' You know, we explained, we need this to be done.'
  },
  { startTime: 6934.02, person: 'Anneke', text: ' And then they, they made it work.' },
  {
    startTime: 6936.82,
    person: 'Anneke',
    text: " So, um, and it's things like that, that help us have a good conference as well."
  },
  {
    startTime: 6944.1,
    person: 'Anneke',
    text: " It's, um, when you have a good colleagues and good team and everyone working together for the same, um, then I actually usually enjoy going to these conferences."
  },
  {
    startTime: 6955.96,
    person: 'Anneke',
    text: " And, um, I, I told in my personal life, uh, I told my friends before or because I'm not a tech and I don't know anything about computers."
  },
  { startTime: 6965.68, person: 'Anneke', text: " I just open my email and that's it." },
  { startTime: 6969.04, person: 'Anneke', text: ' And my checklist.' },
  {
    startTime: 6970.48,
    person: 'Anneke',
    text: ' Um, but if I would ever not work this job, I would probably still come to DDD Europe because a lot of the people, um, are, I feel are like minded to, to how I, how I stand in life and the community and the, the, the open-mindedness.'
  },
  {
    startTime: 6988.98,
    person: 'Anneke',
    text: ' And I, uh, so many interesting people, smart people, but also nice people.'
  },
  {
    startTime: 6995.02,
    person: 'Anneke',
    text: ' Um, I would, I would miss the people if I would ever have a different job.'
  },
  {
    startTime: 7000.82,
    person: 'Anneke',
    text: " So I would still come to DDD Europe and I would probably submit a talk about by AI and, uh, I don't know, but, or volunteer, but I would still try to come."
  },
  {
    startTime: 7013.2,
    person: 'Anneke',
    text: ' Um, that would be that, that is what makes my job interesting.'
  },
  {
    startTime: 7017.42,
    person: 'Anneke',
    text: ' Um, I learned a lot from the people I work with.'
  },
  { startTime: 7020.9, person: 'Anneke', text: " Um, usually they're smarter than me." },
  {
    startTime: 7023.38,
    person: 'Anneke',
    text: " Um, they're all very open-minded and, and, and I, I never feel, um, I, I, I don't know, I can't talk with the things that, that you're all discussing."
  },
  {
    startTime: 7036.7,
    person: 'Anneke',
    text: ' Um, I understand half of the things you say, but no one ever, um, shows that to me.'
  },
  {
    startTime: 7044.44,
    person: 'Anneke',
    text: " They, they think I'm interesting from a different perspective."
  },
  { startTime: 7047.3, person: 'Anneke', text: ' I have other things to say.' },
  {
    startTime: 7049.4,
    person: 'Anneke',
    text: " And that, um, that's also a part of the inclusivity of the community."
  },
  { startTime: 7053.26, person: 'Anneke', text: ' Uh, me, myself, I always feel very welcome.' },
  { startTime: 7056.62, person: 'Anneke', text: ' So, um, I really like being there.' },
  { startTime: 7061.7, person: 'Karol', text: " That's an important factor, I suppose." },
  { startTime: 7064.02, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 7066.44,
    person: 'Karol',
    text: " But just a small backtrack, you mentioned volunteers and I'm aware that you have volunteers at DDD Europe as well, different, completely different set of people."
  },
  {
    startTime: 7078.12,
    person: 'Karol',
    text: ' Uh, how often do you actually get, uh, speakers who are also volunteers at the conference or former speakers that are now volunteers?'
  },
  {
    startTime: 7090.12,
    person: 'Anneke',
    text: ' Uh, not so often, but a lot of, a lot of, a lot of the people that we know often help out in different ways.'
  },
  {
    startTime: 7104.04,
    person: 'Anneke',
    text: ' Um, I mean, we have, uh, speakers that help out as a MC, um, or who, um, have a backup talk ready in their pockets.'
  },
  {
    startTime: 7114.22,
    person: 'Anneke',
    text: " Um, also, um, when people do a talk, I don't want to ask too much of them."
  },
  { startTime: 7119.4, person: 'Anneke', text: ' They already host the talk.' },
  { startTime: 7121.6, person: 'Anneke', text: " So, uh, that that's more than enough." },
  {
    startTime: 7125.64,
    person: 'Anneke',
    text: " Um, and I think most of our volunteers, um, are people that want to come to the conference and, and, or, or don't have the budget or don't, or just like being behind the scenes."
  },
  {
    startTime: 7143,
    person: 'Anneke',
    text: " Um, there's people who come back every year, uh, also because for them, it's also a nice place to, to, to, to be, to be with because they know, they know the conference from behind the scenes."
  },
  { startTime: 7153.24, person: 'Anneke', text: ' So they like coming back.' },
  { startTime: 7154.72, person: 'Anneke', text: " Um, for it's a lot of, uh, students." },
  {
    startTime: 7159.04,
    person: 'Anneke',
    text: " So, um, it's a way of getting to know, um, the, the scene and, and, and get some insights in those things."
  },
  {
    startTime: 7165.82,
    person: 'Anneke',
    text: " For DDD Europe, we don't have a lot of students."
  },
  {
    startTime: 7168.1,
    person: 'Anneke',
    text: " I think, yeah, I think we're not the topic that interests them maybe."
  },
  { startTime: 7175.44, person: 'Anneke', text: " I don't know." },
  {
    startTime: 7176.8,
    person: 'Anneke',
    text: ' Um, so yeah, no, not too many speakers who, who come and help out as volunteer, but they usually already have a talk or a session or a workshop or a day filled with talking to other people.'
  },
  { startTime: 7188.7, person: 'Anneke', text: " So that's, that's good enough." },
  { startTime: 7192.93, person: 'Karol', text: ' Okay.' },
  { startTime: 7193.77, person: 'Karol', text: " And let's say conference is over." },
  { startTime: 7198.18, person: 'Karol', text: ' You had some fun.' },
  {
    startTime: 7199.26,
    person: 'Karol',
    text: ' We have the speaker dinner, uh, people meet in the evenings in the, in the conference hotel or outside.'
  },
  {
    startTime: 7206.26,
    person: 'Karol',
    text: ' They have conversations, go to lunches, go to dinner together, closing time, everybody leaves.'
  },
  { startTime: 7213.76, person: 'Karol', text: ' What happens then?' },
  { startTime: 7218.27, person: 'Anneke', text: ' Not too much actually.' },
  { startTime: 7220.51, person: 'Anneke', text: ' Um, we not too much.' },
  { startTime: 7223.93, person: 'Anneke', text: " There's some cleanup and we go home." },
  { startTime: 7226.37, person: 'Anneke', text: " That's it." },
  { startTime: 7227.41, person: 'Anneke', text: " That's it." },
  { startTime: 7229.21, person: 'Karol', text: ' Um, until weeks of sleep.' },
  { startTime: 7231.49, person: 'Anneke', text: ' Uh, yeah.' },
  { startTime: 7232.39, person: 'Anneke', text: ' Two weeks of sleep and being available.' },
  { startTime: 7234.27, person: 'Anneke', text: ' There, there is some cleanup, but we do that.' },
  {
    startTime: 7236.81,
    person: 'Anneke',
    text: ' Um, some, some of the cleanup you can do the day itself.'
  },
  {
    startTime: 7240.55,
    person: 'Anneke',
    text: " Um, so we try to start that on Friday afternoon, but without people noticing, but you don't need to back anymore."
  },
  { startTime: 7246.63, person: 'Anneke', text: " You don't need to." },
  { startTime: 7248.13, person: 'Anneke', text: ' Um, so we try to put them away.' },
  {
    startTime: 7250.57,
    person: 'Anneke',
    text: ' We send out the feedback forms, but those are prepared in advance.'
  },
  {
    startTime: 7253.75,
    person: 'Anneke',
    text: " So it's usually push the send button and a thank you mail to the speakers."
  },
  {
    startTime: 7258.13,
    person: 'Anneke',
    text: ' Um, and you make sure that, you know, um, I, at, at new crafts this year, I left earlier.'
  },
  { startTime: 7266.23, person: 'Anneke', text: ' Um, but my colleagues stayed behind.' },
  {
    startTime: 7268.31,
    person: 'Anneke',
    text: " We don't want to, we want to make sure that we are the last ones leaving because there's always someone who forgets a jacket or, and you need to finish with the venue."
  },
  {
    startTime: 7277.99,
    person: 'Anneke',
    text: ' And, um, um, uh, what do we, we still do the week after we keep an eye on the mailbox because people have forgot stuff or have questions or need certificates for work or, or refunds or, um, um, and follow up on the feedback and make sure that you follow up with the vendors, especially the venue, um, give some quick feedback and more feedback later on.'
  },
  {
    startTime: 7301.17,
    person: 'Anneke',
    text: ' But, um, but the first days I usually need some sleep.'
  },
  {
    startTime: 7305.21,
    person: 'Anneke',
    text: ' Um, when I remember after new crafts, I, uh, I was really talked out.'
  },
  {
    startTime: 7312.27,
    person: 'Anneke',
    text: " Um, I had to organise, um, with French people and it's very different than Dutch and, um, Belgian people."
  },
  {
    startTime: 7320.91,
    person: 'Anneke',
    text: ' And I learned very early in the week that if I talked French to the, to the vendors, um, that it helped, it helped smoothing the process.'
  },
  {
    startTime: 7333.09,
    person: 'Anneke',
    text: ' Um, but talking in French is for me, a different personality.'
  },
  {
    startTime: 7337.51,
    person: 'Anneke',
    text: " Um, I think it's the French way of like, you know, you, you, you talk a lot and then you get things done."
  },
  {
    startTime: 7344.09,
    person: 'Anneke',
    text: ' Um, and it was very tiring and I was just talked out so much.'
  },
  { startTime: 7350.31, person: 'Karol', text: ' Just not you.' },
  { startTime: 7352.51, person: 'Anneke', text: ' It was, it was me.' },
  {
    startTime: 7353.61,
    person: 'Anneke',
    text: " It was, it was, uh, it was a really nice crew, but it's a, it's, you have to adapt to how they, um, how they work."
  },
  {
    startTime: 7361.79,
    person: 'Anneke',
    text: " Um, and, um, um, yeah, I, I, I'm usually very tired after the, after a conference, but then I wasn't home for a week."
  },
  { startTime: 7373.01, person: 'Anneke', text: ' So then I have a lot of, uh, yeah.' },
  { startTime: 7377.43, person: 'Anneke', text: ' Things at home.' },
  { startTime: 7378.53, person: 'Anneke', text: ' Yeah.' },
  {
    startTime: 7380.67,
    person: 'Anneke',
    text: ' The kids are waiting or, or the friends are waiting or whatever.'
  },
  {
    startTime: 7384.83,
    person: 'Anneke',
    text: ' Um, yeah, but then, and then the after work is, um, you know, you make sure you follow up on the feedback, both of speakers, um, and the participants, participants also provide feedback on the speakers.'
  },
  { startTime: 7395.83, person: 'Anneke', text: ' So you want to give that back to them.' },
  {
    startTime: 7398.21,
    person: 'Anneke',
    text: ' We received the videos, but all videos need to be checked, um, before you can put them online.'
  },
  {
    startTime: 7404.07,
    person: 'Anneke',
    text: " And actually putting the videos online is starting on a marketing process for next year's edition."
  },
  { startTime: 7410.01, person: 'Anneke', text: ' And then we start all over again.' },
  { startTime: 7414.67, person: 'Karol', text: ' I always wait for those videos.' },
  { startTime: 7420.25, person: 'Anneke', text: ' I know, I know, I know some of the talks.' },
  {
    startTime: 7424.19,
    person: 'Karol',
    text: " I just cannot remember because it's overwhelming the amount of information."
  },
  {
    startTime: 7427.65,
    person: 'Karol',
    text: ' I just need to go back to the videos, watch them.'
  },
  {
    startTime: 7430.05,
    person: 'Karol',
    text: ' So this is like a, quite an important part post-conference to get those videos on YouTube and to just be able to watch those.'
  },
  {
    startTime: 7437.61,
    person: 'Karol',
    text: " It's like a, an amazing refresher of what, what happened there."
  },
  {
    startTime: 7442.65,
    person: 'Karol',
    text: ' Uh, and, and re-sparkle the ideas that were, went unnoted or something like that.'
  },
  { startTime: 7448.57, person: 'Karol', text: " That's one of the crucial elements." },
  {
    startTime: 7451.95,
    person: 'Anneke',
    text: ' They are coming, but we, uh, yeah, we need some time for that.'
  },
  { startTime: 7456.19, person: 'Karol', text: ' I see them popping on, on YouTube all the time.' },
  { startTime: 7458.39, person: 'Karol', text: " So that's good." },
  { startTime: 7459.03, person: 'Karol', text: " That's great." },
  { startTime: 7459.47, person: 'Karol', text: " That's great." },
  { startTime: 7460.03, person: 'Karol', text: " That's always lovely." },
  { startTime: 7462.53, person: 'Karol', text: ' All right.' },
  {
    startTime: 7464.55,
    person: 'Karol',
    text: " For, for, uh, uh, closing topics, what's the future coming?"
  },
  {
    startTime: 7472.35,
    person: 'Karol',
    text: " What's going on for the 10 years of DDDE now in Antwerp?"
  },
  { startTime: 7479.47, person: 'Karol', text: " What's coming in 2026?" },
  {
    startTime: 7483.89,
    person: 'Anneke',
    text: ' Um, so the CFP is open and, uh, Hien, uh, is responsible for the, for the talk selection and the schedule.'
  },
  { startTime: 7495.23, person: 'Anneke', text: ' She, she also did that last year.' },
  {
    startTime: 7497.83,
    person: 'Anneke',
    text: ' Um, if there is anything special planned, well, she has some ideas.'
  },
  { startTime: 7506.16, person: 'Anneke', text: ' Um, ideas and I will probably bring cake.' },
  { startTime: 7514.82, person: 'Anneke', text: " So, um, there's that." },
  {
    startTime: 7519.44,
    person: 'Anneke',
    text: " Um, yeah, there's, yeah, we're, we're working on, on ideas to make it, uh, but you know what the 10 years, it's a, it's a nice thing to celebrate."
  },
  {
    startTime: 7530.32,
    person: 'Anneke',
    text: ' Um, but we try to, to have a, as good as we can get every year.'
  },
  { startTime: 7535.24, person: 'Anneke', text: ' And that is what we are doing now.' },
  {
    startTime: 7538,
    person: 'Anneke',
    text: " Um, and we'll, we'll add a cake on top of that just for Philip to, uh, so, um, we'll have that as well, but, um, and, and I know Hien is working on some ideas, but I'll, I'll let her, um, follow up on those and, uh, it will, it will, uh, we'll do the same as always and try to improve that as always."
  },
  { startTime: 7565.34, person: 'Karol', text: ' Never ending story.' },
  { startTime: 7566.94, person: 'Anneke', text: ' Never ending story.' },
  {
    startTime: 7569.06,
    person: 'Karol',
    text: ' So for those who would like to still submit a talk or simply browse what the conference is all about, or buy a ticket and just come visit the conference in Antwerp in Belgium.'
  },
  {
    startTime: 7581.1,
    person: 'Karol',
    text: " So here's the, uh, QR code for, uh, the conference site for, uh, 2026."
  },
  {
    startTime: 7587.62,
    person: 'Karol',
    text: " Uh, I personally recommend, I hope I I'll be able to make it, uh, to this edition as well, because, uh, it already looks like quite a lot of fun from, uh, just the, uh, pre-conference workshops."
  },
  {
    startTime: 7602.24,
    person: 'Karol',
    text: " And, uh, the speakers, uh, that do the pre-conference or it's already a quite an interesting bunch."
  },
  { startTime: 7609.46, person: 'Karol', text: ' Uh, hopefully they also deliver some talks.' },
  { startTime: 7611.98, person: 'Karol', text: ' So I hope, uh, any closing remarks?' },
  {
    startTime: 7618.14,
    person: 'Karol',
    text: " Because it's, we've been at it for over two hours."
  },
  { startTime: 7621.9, person: 'Karol', text: " It's, I would say enough and it's enough." },
  { startTime: 7623.9, person: 'Karol', text: ' We went through the whole timeline.' },
  { startTime: 7625.6, person: 'Anneke', text: ' We did the whole timeline.' },
  {
    startTime: 7627.1,
    person: 'Anneke',
    text: " Um, I don't know if we, if we covered everything, but, uh, I, I didn't make a checklist for this."
  },
  { startTime: 7636.18, person: 'Karol', text: ' Next time I will put up my checklist next time.' },
  { startTime: 7640.34, person: 'Karol', text: ' Ask Annika to bring a checklist.' },
  {
    startTime: 7645.64,
    person: 'Anneke',
    text: ' Um, but, uh, I, I actually liked, uh, talking about it for once.'
  },
  {
    startTime: 7650.8,
    person: 'Anneke',
    text: " Um, because, uh, uh, it's nice to explain, uh, how, how we try to do things."
  },
  {
    startTime: 7657.12,
    person: 'Anneke',
    text: " Um, so, and it's also nice to hear how Maxim, uh, I mean, I know it a bit, but, uh, but it's, it's a good to hear about that as well."
  },
  {
    startTime: 7666.02,
    person: 'Anneke',
    text: ' And it always, it always makes someone else who always has more work than, than you think they do.'
  },
  { startTime: 7674.94, person: 'Maxime', text: ' That can be the conclusion.' },
  { startTime: 7678.4, person: 'Anneke', text: ' We all have more work than we.' },
  { startTime: 7680.74, person: 'Maxime', text: ' Oh yeah.' },
  {
    startTime: 7682.94,
    person: 'Karol',
    text: " And that was the idea to have this conversation in the first place, because I don't think that people actually know how much work it is to craft such a conference and make it really good and really memorable and, uh, inclusive and all those other qualities that are, that should be there."
  },
  { startTime: 7703.16, person: 'Karol', text: " Uh, and that's a difficult job on its own." },
  {
    startTime: 7707.9,
    person: 'Karol',
    text: " And if somebody is doing that on top of their, uh, regular 40 hour a week job, that's, that can be exhausting."
  },
  { startTime: 7716.36, person: 'Anneke', text: ' Yeah.' },
  { startTime: 7717.08, person: 'Anneke', text: " That's hard." },
  {
    startTime: 7717.8,
    person: 'Karol',
    text: " Like, like Maxim mentioned, that's a burnout waiting to happen, uh, in some cases, and it's just simply difficult."
  },
  {
    startTime: 7725.1,
    person: 'Karol',
    text: " So I hope people will be able to watch this stream before the conference and come to the conference with even more appreciation for what you'll do for them to get that conference going and, uh, get people, uh, interested in the topics that are there with all the speakers and labs and pre-conference workshops."
  },
  {
    startTime: 7748.82,
    person: 'Karol',
    text: ' So before we shut down the stream entirely, a few words of, uh, advertisement.'
  },
  {
    startTime: 7756.18,
    person: 'Karol',
    text: ' So the last stream of the year, 2025 is next week on a Wednesday for a change.'
  },
  {
    startTime: 7764,
    person: 'Karol',
    text: " Uh, we'll be, we'll be talking more about architecture and more technical topics this time around, uh, because we've been talking today about conferences last week about, uh, psychology."
  },
  {
    startTime: 7775.1,
    person: 'Karol',
    text: ' So now for a change interoperability in microfrontends and, uh, this time around the guest will be Luca Mezzalito from AWS, uh, the author of, uh, the book on microfrontends.'
  },
  {
    startTime: 7789.34,
    person: 'Karol',
    text: " So quite an expert on the topic and we'll be explore, exploring how microfrontends communicate and how does that differ from, uh, what I do as an integration architect, where I make systems talk to one another in a vast ecosystem."
  },
  { startTime: 7808.06, person: 'Karol', text: " So that's it." },
  { startTime: 7809.58, person: 'Karol', text: ' Thank you for coming.' },
  {
    startTime: 7811.56,
    person: 'Karol',
    text: ' Thank you all those people who are still watching.'
  },
  {
    startTime: 7814.28,
    person: 'Karol',
    text: ' And I see six people on YouTube, uh, still going with us.'
  },
  {
    startTime: 7818.56,
    person: 'Karol',
    text: " Uh, I closed LinkedIn, uh, unfortunately, so I don't know how many people are there, but there are still people watching us."
  },
  { startTime: 7825.86, person: 'Karol', text: " So that's amazing." },
  { startTime: 7827.52, person: 'Karol', text: ' Thank you everybody for staying us.' },
  {
    startTime: 7829.4,
    person: 'Karol',
    text: ' Thank you for the comments, uh, from YouTube and LinkedIn and thank you Anika and Maxine for this conversation.'
  },
  {
    startTime: 7837.6,
    person: 'Karol',
    text: " It was an amazing learning experience to understand what's going into doing a really great conference."
  },
  { startTime: 7847.34, person: 'Anneke', text: ' Thank you, Carl.' },
  { startTime: 7849.28, person: 'Maxime', text: ' Thanks a lot.' },
  { startTime: 7851.24, person: 'Anneke', text: ' And see you all soon at one of our conferences.' }
])
</script>

<style scoped></style>
