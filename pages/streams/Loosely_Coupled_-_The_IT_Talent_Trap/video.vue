<template>
  <div class="w-full">
    <StreamLayout
      :transcript="transcript"
      name="Loosely Coupled - The IT Talent Trap"
      video-id="s4gn1t8-nWw"
    />
  </div>
</template>

<script lang="ts" setup>
const transcript = ref([
  {
    startTime: 207.88,
    person: 'Karol',
    text: ' Good morning, good afternoon, good evening, everybody.'
  },
  {
    startTime: 212.14,
    person: 'Karol',
    text: " My name is Karol Skrzymowski, and I would like to invite you to our today's live stream, the IT Talent Gap, brought to you by Loosely Coupled, hosted by Bridging the Gap, which is an open source project keen on sharing knowledge about enterprise application integration."
  },
  {
    startTime: 234.68,
    person: 'Karol',
    text: " Today, we're talking about a very burning topic, one that I have experienced for the last few months personally while searching for a new job."
  },
  {
    startTime: 246.2,
    person: 'Karol',
    text: ' Very burning because the market today, especially in IT, is horrendous.'
  },
  { startTime: 253.66, person: 'Karol', text: " It's a nightmare to find a job." },
  {
    startTime: 256.06,
    person: 'Karol',
    text: " It's a nightmare to go through all those processes, and it's difficult for a lot of people, difficult for recruiters as well, and difficult for all the companies trying to hire the best talent."
  },
  {
    startTime: 270.62,
    person: 'Karol',
    text: " That's not going to be an easy conversation, but we're going to do no bullshit this time around."
  },
  { startTime: 276.6, person: 'Karol', text: " We're going to tell it as this." },
  {
    startTime: 279.14,
    person: 'Karol',
    text: ' And joining me today on our live stream is Philip Poynton, a recruiter with 18 years of experience, now recruiting in the Salesforce ecosystem, so very specialised, and my personal friend whom I met while working with PwC Poland.'
  },
  { startTime: 301.32, person: 'Karol', text: ' Philip?' },
  { startTime: 302.96, person: 'Karol', text: ' Hello.' },
  { startTime: 304.12, person: 'Phillip', text: ' Hi, Karol.' },
  { startTime: 304.72, person: 'Phillip', text: ' Thank you for having me.' },
  { startTime: 306.08, person: 'Phillip', text: ' Hello, everybody.' },
  { startTime: 309.36, person: 'Phillip', text: " You're my personal friend." },
  { startTime: 310.76, person: 'Phillip', text: ' I remember that onboarding we had together.' },
  { startTime: 312.88, person: 'Phillip', text: ' It was pretty hilarious, right?' },
  { startTime: 314.36, person: 'Phillip', text: ' The weird socks kind of thing, right?' },
  {
    startTime: 317.78,
    person: 'Karol',
    text: ' Yeah, so one of the new testers onboarded at the same day as both of us joined PwC said he was collecting socks, very weird socks with different images and such, and we encouraged him to pull up the leg and just show the sock, and then Philip sitting next to him realised he had the exact same socks on.'
  },
  { startTime: 340.8, person: 'Phillip', text: ' Yeah, I thought they were normal.' },
  {
    startTime: 342.6,
    person: 'Karol',
    text: " I mean, yeah, that's perfectly fine, but that was a hilarious situation."
  },
  { startTime: 348.98, person: 'Karol', text: " Philip, so we're going to chat recruitment." },
  { startTime: 352.98, person: 'Karol', text: ' Yes, with pleasure.' },
  { startTime: 353.98, person: 'Phillip', text: ' Quite the topic, right?' },
  { startTime: 355.44, person: 'Phillip', text: ' With pleasure.' },
  { startTime: 356.38, person: 'Phillip', text: ' Totally open and transparently.' },
  {
    startTime: 358.72,
    person: 'Phillip',
    text: " A bit of a disclaimer maybe before we start is, you know, I'm not holding back."
  },
  { startTime: 364.64, person: 'Phillip', text: ' I just want to share my observations now.' },
  { startTime: 366.9, person: 'Phillip', text: ' Yes, you introduced me right there.' },
  { startTime: 369.34, person: 'Phillip', text: ' 18 years of experience.' },
  { startTime: 371.18, person: 'Phillip', text: " I've seen a lot." },
  { startTime: 372.9, person: 'Phillip', text: " I've made huge mistakes, you know." },
  {
    startTime: 376.78,
    person: 'Phillip',
    text: " My only approach is treat everyone the same way I would want to be treated and improve yourself every day, one little thing, and, you know, 18 years in the game, started it totally by chance, by accident, like many recruiters do, and I'm still doing it, still loving it, and still enjoying the challenge, because it is it's quite a cool but demanding job as well."
  },
  { startTime: 400.74, person: 'Karol', text: " All right, so the format of today's live stream" },
  {
    startTime: 403.12,
    person: 'Karol',
    text: " is that we're going to be going through several topics and several angles of recruitment from"
  },
  {
    startTime: 408.02,
    person: 'Karol',
    text: ' the candidate perspective, from the recruiter perspective, as well as the perspective of'
  },
  {
    startTime: 413.04,
    person: 'Karol',
    text: " companies, which we don't have anybody representing a specific company here today,"
  },
  {
    startTime: 417.42,
    person: 'Karol',
    text: " but let's try to emphasise with companies and see how they are dealing with recruitment or"
  },
  { startTime: 424.62, person: 'Karol', text: ' struggling with recruitment at the time.' },
  {
    startTime: 426.58,
    person: 'Karol',
    text: " I certainly was on the other side of the table recruiting somebody a few months back, so I have a little bit of experience, but there's a lot to it."
  },
  {
    startTime: 437.02,
    person: 'Karol',
    text: " There's a lot of problems, especially, I mean, Philip can probably showcase more than I do in terms of how is this working with various companies to recruit people for them."
  },
  {
    startTime: 448.6,
    person: 'Karol',
    text: " If you're watching us on LinkedIn, on YouTube, on Substack, just pop questions in."
  },
  {
    startTime: 454.6,
    person: 'Karol',
    text: " I believe we're not seeing any questions coming from Substack, unfortunately, because we don't have that in the restream in the chat, but all the questions that are coming through LinkedIn and YouTube, we'll be able to see them and pop them on the screen, so keep those questions coming."
  },
  {
    startTime: 474.14,
    person: 'Karol',
    text: " Keep engaged, commenting on our chat, and let's dig into it."
  },
  { startTime: 480.74, person: 'Karol', text: ' Absolutely.' },
  { startTime: 481.44, person: 'Phillip', text: ' Just ask us anything.' },
  {
    startTime: 483.48,
    person: 'Phillip',
    text: " These are the best moments where we've got some interaction going on and you can ask us anything, really."
  },
  {
    startTime: 488.48,
    person: 'Phillip',
    text: " I'd love the most challenging questions as well."
  },
  { startTime: 491.98, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 492.86,
    person: 'Karol',
    text: ' So, apart from the Salesforce ecosystem, which is a very particular area of expertise in terms of recruitment, what other kind of recruitment have you done over the years?'
  },
  { startTime: 505.24, person: 'Phillip', text: ' Oh, wow.' },
  { startTime: 505.7, person: 'Phillip', text: ' Good question.' },
  {
    startTime: 506.3,
    person: 'Phillip',
    text: ' So, I started off working in an agency that was in London, helping unemployed people back into work.'
  },
  {
    startTime: 515.88,
    person: 'Phillip',
    text: ' These were European-funded initiatives and I was working the five host boroughs of the Olympic Games in London.'
  },
  {
    startTime: 522.7,
    person: 'Phillip',
    text: " So, it's a massive project, lots of money put into revitalising these five hosting boroughs of London, and with that came employment."
  },
  {
    startTime: 531.36,
    person: 'Phillip',
    text: ' So, first, it was training people to be involved in the excavation, the digging, the building, the construction of the Olympic town.'
  },
  { startTime: 539.5, person: 'Phillip', text: " This is, we're talking back in, what was it?" },
  { startTime: 542.4, person: 'Phillip', text: ' When was the Olympics in London?' },
  { startTime: 545.6, person: 'Phillip', text: ' 2012?' },
  { startTime: 546.68, person: 'Phillip', text: ' No, I think it was earlier than that.' },
  { startTime: 548.94, person: 'Phillip', text: ' Sorry, 2008, perhaps.' },
  { startTime: 551.2, person: 'Phillip', text: " I can't remember." },
  { startTime: 553.02, person: 'Phillip', text: ' Maybe, yeah, Carol, I can see you searching.' },
  { startTime: 554.9, person: 'Phillip', text: " So, 2012, you're spot on here." },
  { startTime: 558.16, person: 'Phillip', text: ' Yeah, am I?' },
  { startTime: 558.7, person: 'Phillip', text: ' Okay, cool.' },
  { startTime: 559.34, person: 'Phillip', text: ' Good.' },
  { startTime: 559.52, person: 'Phillip', text: ' Yeah.' },
  { startTime: 560.84, person: 'Phillip', text: ' So, yeah.' },
  { startTime: 562.7, person: 'Phillip', text: ' So, helping unemployed people back into work.' },
  { startTime: 566.76, person: 'Phillip', text: ' It was all funded.' },
  { startTime: 568.18, person: 'Phillip', text: ' It was a free service.' },
  {
    startTime: 569.5,
    person: 'Phillip',
    text: " We also have the free recruitment services to companies, and we're talking pretty much entry-level jobs, you know, retail, also commercial roles, simple admin jobs, but then also the Olympic Games covering all aspects of, you know, construction, building, labour work."
  },
  { startTime: 586.76, person: 'Phillip', text: ' So, there was a lot going on.' },
  {
    startTime: 587.78,
    person: 'Phillip',
    text: ' So, it was a nice start for me because I had the chance to build connections, relationships, understand their circumstances if they were unemployed, you know, how much they need to earn to kind of make a living and afford their lifestyle in London.'
  },
  {
    startTime: 600.42,
    person: 'Phillip',
    text: ' Then I specialised in being a lone parent advisor.'
  },
  {
    startTime: 603.48,
    person: 'Phillip',
    text: ' So, helping lone parents, predominantly, of course, women, and I was working closely with job centres.'
  },
  {
    startTime: 611.18,
    person: 'Phillip',
    text: " So, you know, calculating their benefits and really calculating how many hours can they afford to work because that's the thing in England."
  },
  { startTime: 617.52, person: 'Phillip', text: " The system's broken there." },
  {
    startTime: 618.72,
    person: 'Phillip',
    text: " So, sometimes you're better off unemployed because you get, you know, child care, child support, you know, you get benefits, you get your house paid for."
  },
  {
    startTime: 627.02,
    person: 'Phillip',
    text: " So, you know, it's not easy, even if you want to go back into work."
  },
  {
    startTime: 630.3,
    person: 'Phillip',
    text: ' So, really nice start for me, and I think this is where, you know, I could utilise my empathy, you know, wanting to help people and really tailor their approach there, and it was a fantastic foundation for me.'
  },
  {
    startTime: 641.5,
    person: 'Phillip',
    text: " Then I went to commercial recruitment, working in an agency that specialised in hiring CEOs, and it's not CEO, CEOs, executive search."
  },
  {
    startTime: 650.08,
    person: 'Phillip',
    text: ' This was civil enforcement officers, so your parking attendants.'
  },
  { startTime: 654, person: 'Phillip', text: ' So, I always laughed.' },
  { startTime: 655.24, person: 'Phillip', text: ' I said, I work in CEO recruitment.' },
  {
    startTime: 659.02,
    person: 'Phillip',
    text: ' So, yeah, so that was fun, and that was a fantastic experience for me because it was very busy, very demanding, and, you know, a lot of eligibility criteria and things like this.'
  },
  {
    startTime: 668.22,
    person: 'Phillip',
    text: ' So, that was fun, and it got me, I learned that man a temp desk, you know, we have around 250 people constantly working a lot of work.'
  },
  {
    startTime: 677.06,
    person: 'Phillip',
    text: ' So, it was a fantastic experience for me, and then I decided to go my own way and open a boutique agency, and I would do anything, anything I could get my hands on to just do business, and bad approach, looking back at it, but again, I just, you know, wanted to survive and make a living.'
  },
  {
    startTime: 694.42,
    person: 'Phillip',
    text: ' So, but I gradually started getting into digital marketing.'
  },
  {
    startTime: 698.1,
    person: 'Phillip',
    text: ' Also, by chance, I had a customer who asked if I could help, and I was happy to help, and at that time, I was doing programmers, I was doing admin workers, security guards, and digital marketing, and then gradually, I went really deep into digital marketing.'
  },
  {
    startTime: 711.38,
    person: 'Phillip',
    text: ' I was contracted to work for Yum Brands, so, known as a Pizza Hut, KFC, and their head offices.'
  },
  {
    startTime: 717.14,
    person: 'Phillip',
    text: " They were doing a lot of e-commerce stuff, and that's where I got, you know, my real digital marketing experience in recruitment, and from there, I came back to Poland and entered the world of IT pretty swiftly, and since then, since 2015, I've been working in the IT field, and for the past five, yeah, close to six years now, specifically Salesforce."
  },
  {
    startTime: 739.8,
    person: 'Phillip',
    text: ' So, before I joined Salesforce, I was always telling myself, Philip, you need to find your niche.'
  },
  {
    startTime: 747.2,
    person: 'Phillip',
    text: " Philip, you need to, you can't be a recruiter that does everything and nothing at the same time."
  },
  { startTime: 751.24, person: 'Phillip', text: " You've got to find a niche." },
  {
    startTime: 752.26,
    person: 'Phillip',
    text: ' I remember introducing myself at networking events.'
  },
  { startTime: 755.3, person: 'Phillip', text: " I'm a recruiter." },
  { startTime: 756.04, person: 'Phillip', text: ' What do you specialise in?' },
  { startTime: 758.4, person: 'Phillip', text: ' Nothing and everything.' },
  {
    startTime: 760.74,
    person: 'Phillip',
    text: ' So, you know, this was finding a niche, and by chance, like a lot of people also in the Salesforce world, I discovered my niche.'
  },
  {
    startTime: 768.06,
    person: 'Phillip',
    text: " I went really into it, and, yeah, and that's where I am today, six years in, still with Salesforce, recruiting solely Salesforce."
  },
  { startTime: 777.7, person: 'Phillip', text: " Yeah, I'm still loving it." },
  {
    startTime: 779.44,
    person: 'Karol',
    text: ' I think a lot of jobs that happen by chance are very, very interesting and unique.'
  },
  {
    startTime: 785.96,
    person: 'Karol',
    text: ' I myself landed in my field, in my expertise, purely by chance, because I was doing an internship with a consulting company, and they, for some unknown reason, well, unknown to me, they liked me so much that they hired me as a junior without any plan for me as a junior, and then they just were like, yeah, all right.'
  },
  { startTime: 804.16, person: 'Phillip', text: " That's what everyone's saying." },
  { startTime: 805.74, person: 'Phillip', text: " That's what all the gurus are saying now." },
  { startTime: 807.42, person: 'Phillip', text: ' Hire for skills.' },
  { startTime: 808.78, person: 'Phillip', text: ' Hire for traits.' },
  { startTime: 810.22, person: 'Phillip', text: ' Hire for soft skills.' },
  {
    startTime: 811.52,
    person: 'Phillip',
    text: ' The tech skills, you know, the hard stuff, follow.'
  },
  {
    startTime: 815.76,
    person: 'Phillip',
    text: " If you don't hire people with the right attitudes, culture fit, you know, it's not going to work."
  },
  { startTime: 822.88, person: 'Phillip', text: ' Simple as that, right?' },
  { startTime: 824.5, person: 'Karol', text: " Yeah, that's very true." },
  { startTime: 825.16, person: 'Phillip', text: ' By the way, hello, Stefan.' },
  { startTime: 826.06, person: 'Phillip', text: " I see you're with us, so good to see you." },
  { startTime: 828.34, person: 'Karol', text: ' Yeah, hi, Stefan.' },
  { startTime: 829.46, person: 'Karol', text: ' Hey.' },
  {
    startTime: 830.68,
    person: 'Karol',
    text: ' Stefan was kind enough to let us use a few screenshots from his personal collection of various recruitment fails.'
  },
  {
    startTime: 839.88,
    person: 'Karol',
    text: ' I did my own research as well, so we have a bunch of screenshots and different situations that happen in recruitment nowadays, especially in IT.'
  },
  {
    startTime: 849.18,
    person: 'Karol',
    text: " We'll be diving into those in a moment because we want to show you those various perspectives, right?"
  },
  {
    startTime: 857.52,
    person: 'Karol',
    text: ' So we want to talk about the perspective of a candidate.'
  },
  {
    startTime: 860,
    person: 'Karol',
    text: ' We want to talk about the perspective of a recruiter working between two sides, and then we want to look a little bit on a perspective of a company and sometimes the huge chaos that happens in a lot of companies nowadays.'
  },
  {
    startTime: 878.64,
    person: 'Karol',
    text: ' So starting with the perspective of a recruiter, which is, I suppose, the one that will be most wanted here on this stream.'
  },
  {
    startTime: 888.5,
    person: 'Karol',
    text: ' Sorry, candidate, most wanted on this particular stream.'
  },
  { startTime: 893.02, person: 'Karol', text: ' Well, candidates struggle.' },
  {
    startTime: 896.38,
    person: 'Karol',
    text: " I've seen so many people on LinkedIn just chatting about their struggles getting a job, finding a job, switching to a new job if they actually have a job, or just being unemployed for months and struggling on the market just to find anything, and not even if they're fields."
  },
  { startTime: 916.9, person: 'Phillip', text: ' You can relate to this, man.' },
  { startTime: 918.58, person: 'Karol', text: ' Yes.' },
  { startTime: 919.06, person: 'Phillip', text: " You've just gone through it recently." },
  { startTime: 920.72, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 921.28,
    person: 'Karol',
    text: " So my personal story is I've been hit pretty much by two restructurings in one year."
  },
  { startTime: 928.58, person: 'Karol', text: " I suppose that's tough luck." },
  {
    startTime: 930.8,
    person: 'Karol',
    text: ' So I was having a very nice, safe position with a big company, and I felt like, okay, I had enough of politics.'
  },
  {
    startTime: 942.5,
    person: 'Karol',
    text: ' I want to go back to consulting and do some actual technical work instead of fighting politicians all the time.'
  },
  { startTime: 948.18, person: 'Karol', text: ' And so I found a job.' },
  { startTime: 950.42, person: 'Karol', text: ' I negotiated a contract.' },
  { startTime: 952.1, person: 'Karol', text: ' Everything was fine.' },
  { startTime: 953.44, person: 'Karol', text: ' Everything was beautiful.' },
  {
    startTime: 954.68,
    person: 'Karol',
    text: ' Two months in, they miscalculated the project pipeline.'
  },
  { startTime: 959.14, person: 'Karol', text: " I'm sorry." },
  {
    startTime: 959.96,
    person: 'Karol',
    text: ' Anybody on probation period, inexpensive, and on the bench, out.'
  },
  { startTime: 966.4, person: 'Karol', text: ' Over 30% of consultants were on the bench.' },
  {
    startTime: 968.82,
    person: 'Karol',
    text: ' So basically, they had a must to clean up the house.'
  },
  { startTime: 974.72, person: 'Karol', text: ' Costs, costs, costs.' },
  {
    startTime: 976.48,
    person: 'Karol',
    text: ' And then another company decided to restructure that I found a job with.'
  },
  {
    startTime: 980.16,
    person: 'Karol',
    text: ' They decided to restructure, and they fired one third of the staff, or something like that, because they decided to go a completely different direction.'
  },
  {
    startTime: 987.38,
    person: 'Karol',
    text: ' So today marks the end of three months that I was unemployed.'
  },
  {
    startTime: 992.94,
    person: 'Karol',
    text: " Luckily, from tomorrow onwards, I'm beginning a new job as a consultant."
  },
  { startTime: 998.04, person: 'Karol', text: " So I'm out the game." },
  {
    startTime: 999.8,
    person: 'Karol',
    text: " I'm no longer going to be bothered by recruitment for the next few months, I hope, or even more, hopefully."
  },
  { startTime: 1007.34, person: 'Karol', text: " We'll see about that." },
  { startTime: 1008.86, person: 'Phillip', text: ' Never say never.' },
  { startTime: 1010.26, person: 'Phillip', text: ' Never say never.' },
  { startTime: 1011.8, person: 'Phillip', text: ' They might be coming back to you with a delay.' },
  {
    startTime: 1016.48,
    person: 'Karol',
    text: " There's still two months of probation period that I just need to feel safe."
  },
  {
    startTime: 1023.06,
    person: 'Karol',
    text: " The problem that I'm seeing with a lot of people is that the whole process of recruitment and finding a job, it's pretty much like a second job."
  },
  { startTime: 1034.339, person: 'Karol', text: " It's a lot of effort with very little results." },
  {
    startTime: 1039.14,
    person: 'Karol',
    text: " It's a lot of cold applying, a lot of work to tailor your CV to find advice, what should be the CV like, how to behave on the process, or even just to land an interview."
  },
  {
    startTime: 1052.6,
    person: 'Karol',
    text: ' You can send up to 100 applications to different places.'
  },
  {
    startTime: 1056.92,
    person: 'Karol',
    text: ' And from that, you can have two or three interviews.'
  },
  { startTime: 1061.16, person: 'Karol', text: " It's that bad at this point." },
  {
    startTime: 1064.02,
    person: 'Karol',
    text: " And it's that bad not only because there are so many people on the job market, it's that bad because the job market is just simply tragic."
  },
  {
    startTime: 1075.56,
    person: 'Karol',
    text: ' Going through a lot of people being unemployed or searching for a new job, through recruiters or recruitment agencies doing poor or mediocre jobs at times.'
  },
  {
    startTime: 1087.92,
    person: 'Karol',
    text: ' Of course, there are greater recruiters out there as well.'
  },
  {
    startTime: 1091.14,
    person: 'Karol',
    text: " I know quite a few, and I'm keeping in touch with them all the time, because why not?"
  },
  {
    startTime: 1096.82,
    person: 'Karol',
    text: ' And then also companies which struggle to clearly define what roles they need and how many people they actually need, or sometimes trying to find unicorns, so people who do not exist, or who would be a whole department.'
  },
  {
    startTime: 1113.42,
    person: 'Karol',
    text: " And this whole picture, that's just a heavy topic."
  },
  {
    startTime: 1118.54,
    person: 'Karol',
    text: ' If we would dive into all of those in details, we would be sitting here probably till tomorrow.'
  },
  { startTime: 1126.62, person: 'Karol', text: " That's my educated guess." },
  {
    startTime: 1128.42,
    person: 'Karol',
    text: " But let's start off with that perspective of the candidate."
  },
  {
    startTime: 1133.8,
    person: 'Karol',
    text: " So, if you have a profile on LinkedIn, and your profile is, well, fairly up to date, and it's searchable, because that's a key issue."
  },
  { startTime: 1142.72, person: 'Karol', text: ' Some profiles are not searchable.' },
  {
    startTime: 1144.1,
    person: 'Karol',
    text: " This is another thing that we'll jump into when we're going to be talking about the work of a recruiter."
  },
  {
    startTime: 1149.6,
    person: 'Karol',
    text: " So, if you're searchable, you'll sometimes get offers, sometimes get questions from recruiters."
  },
  {
    startTime: 1157.32,
    person: 'Karol',
    text: ' Now, those questions sometimes are genuine sourcing, because the recruiters really want to find the best candidate.'
  },
  {
    startTime: 1163.82,
    person: 'Karol',
    text: " Sometimes are just horrendous cold calls, which are basically spam, and nobody's going to reply to that."
  },
  {
    startTime: 1175.08,
    person: 'Karol',
    text: ' So, let me show you a few examples from my personal library of screenshots.'
  },
  { startTime: 1180.58, person: 'Karol', text: ' So, I hope you see this quite well.' },
  { startTime: 1184.48, person: 'Karol', text: ' If you would look at this.' },
  {
    startTime: 1185.5,
    person: 'Karol',
    text: ' So, these are screenshots from my messages in LinkedIn.'
  },
  {
    startTime: 1188.66,
    person: 'Karol',
    text: ' We have somebody recruiting for an enterprise architect in Amsterdam Utrecht.'
  },
  {
    startTime: 1193.92,
    person: 'Karol',
    text: " I live in the Netherlands, so that's close to home for me."
  },
  { startTime: 1198.22, person: 'Karol', text: " And it's perfectly fine." },
  { startTime: 1199.54, person: 'Karol', text: ' So, this is on June 27th.' },
  {
    startTime: 1202.24,
    person: 'Karol',
    text: " It's very early in the morning, 6.52. I responded at, what was the time?"
  },
  { startTime: 1208.32, person: 'Karol', text: ' 7.23. So, what?' },
  { startTime: 1210.12, person: 'Karol', text: ' Half an hour later?' },
  { startTime: 1212.1, person: 'Karol', text: ' Ghosted.' },
  { startTime: 1213.38, person: 'Karol', text: ' No answer.' },
  { startTime: 1214.72, person: 'Karol', text: ' Nothing.' },
  { startTime: 1216.06, person: 'Karol', text: ' Again, another job here.' },
  { startTime: 1219.52, person: 'Karol', text: ' April 7th.' },
  { startTime: 1221.98, person: 'Karol', text: ' The message was sent at 2pm.' },
  { startTime: 1224.72, person: 'Karol', text: ' I responded two minutes later.' },
  { startTime: 1227.64, person: 'Karol', text: ' Nothing.' },
  {
    startTime: 1228.8,
    person: 'Karol',
    text: ' No response, no details, no nothing, no conversation, no relationship, nothing so far, right?'
  },
  {
    startTime: 1236.32,
    person: 'Karol',
    text: " So, this is one of the problems that some recruiters just figure out they're going to spam a thousand people at a time, and then just reap whoever calls back, whoever answers."
  },
  {
    startTime: 1249.04,
    person: 'Karol',
    text: " So, sometimes they get a lot of answers, and they just disregard the rest, don't even bother coming back to them."
  },
  { startTime: 1254.96, person: 'Karol', text: ' They just get ghosted.' },
  { startTime: 1257.08, person: 'Karol', text: ' But, well, it is what it is, right?' },
  {
    startTime: 1259.5,
    person: 'Karol',
    text: " Another lovely problem that we're seeing is poor vetting."
  },
  {
    startTime: 1265.4,
    person: 'Karol',
    text: ' This is a conversation I had with an owner of a recruitment agency some time ago in May while I was searching for a new job.'
  },
  {
    startTime: 1273.6,
    person: 'Karol',
    text: ' So, I applied through their site, because I found the job posting, and I found that she is responsible for that particular process.'
  },
  {
    startTime: 1287.55,
    person: 'Karol',
    text: " So, I was thinking, like, okay, to up my chances, I'm going to just directly reach out to that recruiter, well, that head of the agency at this point because she was running that process."
  },
  { startTime: 1297.01, person: 'Karol', text: ' I mean, yes, perfectly fine.' },
  {
    startTime: 1300.01,
    person: 'Karol',
    text: " Well, first of all, she looked at my CV, drawn a completely wrong conclusion about my CV, with words that are nonexistent in my CV, because I don't have cloud engineering in my CV."
  },
  {
    startTime: 1315.87,
    person: 'Karol',
    text: " I do have Azure, but only Azure integration services because I work as an integrator, but I'm not keen on working in Azure specifically, and the job posting was specifically for an integration architect."
  },
  {
    startTime: 1327.91,
    person: 'Karol',
    text: ' So, my CV, basically nine pages of that CV scream integration, integration, integration.'
  },
  {
    startTime: 1334.65,
    person: 'Karol',
    text: " Well, for some reason, she figured I'm a cloud engineer."
  },
  { startTime: 1338.43, person: 'Karol', text: ' I was amazed.' },
  {
    startTime: 1339.65,
    person: 'Karol',
    text: ' And then when I asked what brought her to that conclusion, well, ghosted.'
  },
  { startTime: 1345.05, person: 'Karol', text: " That's poor vetting, right, if anything." },
  {
    startTime: 1349.79,
    person: 'Karol',
    text: ' Then another fun example in terms of this is poor vetting, but this is also poor searches.'
  },
  {
    startTime: 1357.13,
    person: 'Karol',
    text: " And Philip, you're going to tell us more about searching on LinkedIn and doing Boolean strings, right?"
  },
  {
    startTime: 1361.99,
    person: 'Karol',
    text: " Because that's a very important thing in the work of a recruiter when sourcing talent."
  },
  {
    startTime: 1367.51,
    person: 'Karol',
    text: " Well, how somebody came to a conclusion that I'm a tester with my CV and my LinkedIn profile, that's something very interesting."
  },
  {
    startTime: 1378.85,
    person: 'Karol',
    text: ' Because as far I remember, LinkedIn does not enable you to search by certificates.'
  },
  { startTime: 1384.55, person: 'Karol', text: ' And I do have a tester certificate.' },
  { startTime: 1386.77, person: 'Karol', text: ' I have actually an ESTQB certificate.' },
  {
    startTime: 1390.59,
    person: 'Karol',
    text: ' So, I would be a tester, but I did it for the purpose of actually being able to talk to testers and understand testers rather than apply for a role of a tester.'
  },
  {
    startTime: 1401.03,
    person: 'Karol',
    text: ' Or some other roles like a B2B contract for an architect with ServiceNow.'
  },
  { startTime: 1410.03, person: 'Karol', text: ' I have no relationship with ServiceNow.' },
  { startTime: 1412.85, person: 'Karol', text: ' etcétera, etcétera, etcétera.' },
  {
    startTime: 1414.91,
    person: 'Karol',
    text: ' These are things that happen all the time on my LinkedIn.'
  },
  {
    startTime: 1417.67,
    person: 'Karol',
    text: " I don't have to go that far in my chat to find these kind of conversations."
  },
  {
    startTime: 1423.01,
    person: 'Karol',
    text: " And that's pretty much the reality of a lot of IT specialists, that they just are found by recruiters, but for some reason, not exactly in the roles that they should be found in."
  },
  { startTime: 1436.57, person: 'Karol', text: ' Right?' },
  { startTime: 1437.87, person: 'Karol', text: ' Then another lovely thing is automation.' },
  {
    startTime: 1443.67,
    person: 'Karol',
    text: ' If you never tried this before, I dare you to put an emoji in your name on LinkedIn, in your profile.'
  },
  {
    startTime: 1451.15,
    person: 'Karol',
    text: " Then you'll see how many people use automation to message you."
  },
  {
    startTime: 1458.99,
    person: 'Karol',
    text: " I don't know, Philip, what's your take on automation here?"
  },
  {
    startTime: 1462.69,
    person: 'Phillip',
    text: ' I think this is a little hack I shared with you, right?'
  },
  { startTime: 1465.35, person: 'Phillip', text: ' A few years ago.' },
  { startTime: 1466.73, person: 'Karol', text: ' Oh, yeah.' },
  { startTime: 1467.25, person: 'Phillip', text: ' True.' },
  { startTime: 1468.05, person: 'Phillip', text: ' Yeah.' },
  { startTime: 1468.41, person: 'Phillip', text: ' So, I came across it.' },
  { startTime: 1470.65, person: 'Phillip', text: ' You asked me, why do I have this?' },
  {
    startTime: 1473.23,
    person: 'Phillip',
    text: ' I had a magnifying glass back in the day, and I said, oh.'
  },
  { startTime: 1476.53, person: 'Phillip', text: ' Yeah.' },
  {
    startTime: 1476.97,
    person: 'Phillip',
    text: " And I told you, and then you started using it, and it's nice to see it."
  },
  {
    startTime: 1480.33,
    person: 'Phillip',
    text: " You're experiencing it, so you know what we're all about."
  },
  {
    startTime: 1482.87,
    person: 'Phillip',
    text: " So, you know exactly it's an automated message, which isn't a bad thing."
  },
  {
    startTime: 1487.79,
    person: 'Phillip',
    text: " Automation is used widely, but there's just best practises that a lot of recruiters don't follow."
  },
  { startTime: 1494.63, person: 'Phillip', text: ' I use automation.' },
  { startTime: 1496.45, person: 'Phillip', text: " I'm heavy." },
  {
    startTime: 1497.33,
    person: 'Phillip',
    text: " I'm a fan, but there's certain limits you have to set."
  },
  {
    startTime: 1500.63,
    person: 'Phillip',
    text: " So, you mentioned mass messages going out, and yes, there's also reasons for this."
  },
  {
    startTime: 1506.25,
    person: 'Phillip',
    text: " I've worked in the corporate world in big recruitment teams."
  },
  {
    startTime: 1510.75,
    person: 'Phillip',
    text: ' So, you know, recruiters as employees also measured their KPIs on numbers of emails sent out as well.'
  },
  { startTime: 1518.57, person: 'Phillip', text: ' So, bear that in mind as well.' },
  {
    startTime: 1521.79,
    person: 'Phillip',
    text: " Everyone's being measured, especially in big corporations."
  },
  { startTime: 1525.67, person: 'Phillip', text: ' Long gone are those days for me.' },
  {
    startTime: 1527.81,
    person: 'Phillip',
    text: " It's more of a quality approach than a quantity approach."
  },
  { startTime: 1531.71, person: 'Phillip', text: ' So, yeah.' },
  { startTime: 1533.67, person: 'Phillip', text: ' I saw the message earlier on.' },
  { startTime: 1535.81, person: 'Phillip', text: " It's very, very relevant." },
  {
    startTime: 1540.27,
    person: 'Phillip',
    text: " Yeah, but coming back to this, then I have a practise of mine that I've developed and I've shared with other recruiters I've worked with, and that's 28 messages a day, max, because it's manageable."
  },
  {
    startTime: 1555.13,
    person: 'Phillip',
    text: " You know, on top of the, let's say the campaigns that I run using recruitment products on LinkedIn, I use a corporate recruitment account."
  },
  {
    startTime: 1562.81,
    person: 'Phillip',
    text: " So, it gives you a lot of tools to access talent, and, you know, the booting searches, you know, the razor searches, you know, it's all, I'm fortunate."
  },
  { startTime: 1573.25, person: 'Phillip', text: ' I work in a very niche market.' },
  {
    startTime: 1574.89,
    person: 'Phillip',
    text: ' For me, I get more value in actually being part of a community and creating initiatives and events.'
  },
  {
    startTime: 1580.17,
    person: 'Phillip',
    text: " So, over the years, I've got to meet a lot of people, and I'm just growing my network through human relationships, which is amazing."
  },
  {
    startTime: 1586.47,
    person: 'Phillip',
    text: ' But, of course, I hire across all of Europe as well, six countries across Europe.'
  },
  {
    startTime: 1590.59,
    person: 'Phillip',
    text: " So, there, unfortunately, I don't have that position as I do, let's say, in Poland, where I'm based."
  },
  {
    startTime: 1596.27,
    person: 'Phillip',
    text: " So, yeah, it comes down to LinkedIn searches, LinkedIn campaigns, projects, and there's a tonne of new tools coming from LinkedIn, a lot of AI-generated messages, and I've been reading some of these, and I can tell straight away when it's a LinkedIn AI-generated message, you can't miss it once you know it, right?"
  },
  {
    startTime: 1614.03,
    person: 'Phillip',
    text: " And it's sad that, you know, there's no edge that recruiters, you know, should be using, you know, little things, which I know you're going to share with us as well later today, which are really cool too."
  },
  {
    startTime: 1625.93,
    person: 'Phillip',
    text: " But, yeah, this is a great thing to spot automation, but don't look at automation as a bad thing."
  },
  { startTime: 1630.93, person: 'Phillip', text: " It's a daily thing nowadays." },
  { startTime: 1632.65, person: 'Phillip', text: ' Just be aware of it.' },
  { startTime: 1633.87, person: 'Phillip', text: " I think that's the right thing to do." },
  {
    startTime: 1636.41,
    person: 'Karol',
    text: " Be aware of it, and then if you actually have that emoji in your profile, well, LinkedIn would probably say that you're breaching some sort of a licencing agreement between you and LinkedIn when you registered, because they ask you to put your real name in."
  },
  {
    startTime: 1649.89,
    person: 'Karol',
    text: ' So, putting an emoji in is a little bit of a breach of that agreement, but a lot of people do that not without a reason.'
  },
  {
    startTime: 1657.01,
    person: 'Karol',
    text: ' And the funny thing is my profile is in three different languages.'
  },
  {
    startTime: 1660.07,
    person: 'Karol',
    text: ' So, I have my LinkedIn profile in Dutch, English, and Polish, and I have a different emoji for each of those profiles.'
  },
  {
    startTime: 1668.55,
    person: 'Karol',
    text: " So, when people are sending me messages using automation and they don't check for the name, they actually use the name field from LinkedIn, I know what is their language that they're viewing the profile in."
  },
  {
    startTime: 1683.43,
    person: 'Karol',
    text: ' So, this is quite useful to also get an understanding of what is their language of use of that particular recruiter.'
  },
  {
    startTime: 1690.85,
    person: 'Karol',
    text: " So, if you're finding jobs internationally, this is a very nice hack to have if you have your profile translated to multiple languages, might come in handy to ease your conversation, especially if you actually use multiple languages yourself."
  },
  { startTime: 1708.27, person: 'Karol', text: ' Yeah, hacker move, exactly.' },
  { startTime: 1709.95, person: 'Karol', text: ' Yeah, pretty much.' },
  {
    startTime: 1711.27,
    person: 'Karol',
    text: " So, it's worth to know the limitations and the different perks of LinkedIn."
  },
  {
    startTime: 1716.31,
    person: 'Karol',
    text: ' And this is one of those small hacks that you can do using your profile to vet the recruiters that are coming to you.'
  },
  {
    startTime: 1726.71,
    person: 'Karol',
    text: " Of course, if your profile is searchable, which is a completely different topic, and we'll get into that in a second."
  },
  { startTime: 1732.83, person: 'Karol', text: ' All right.' },
  {
    startTime: 1733.45,
    person: 'Karol',
    text: ' But other examples of different behaviours and different problems with recruitment.'
  },
  {
    startTime: 1740.37,
    person: 'Karol',
    text: ' So, this is a lovely email from my inbox in Gmail.'
  },
  {
    startTime: 1745.39,
    person: 'Karol',
    text: ' I applied for a job, a job of an enterprise architect with a company.'
  },
  {
    startTime: 1751.59,
    person: 'Karol',
    text: ' By the first line of the email on the left, you might have an idea which company that is.'
  },
  { startTime: 1757.17, person: 'Karol', text: " Let's not name it." },
  {
    startTime: 1759.09,
    person: 'Karol',
    text: ' And this email is the email on the left is a confirmation of my application, right?'
  },
  { startTime: 1764.91, person: 'Karol', text: " So, it's been sent on the 25th of May." },
  {
    startTime: 1767.87,
    person: 'Karol',
    text: " Then they emphasise in that email that the process will be about 30 days, and they'll be in touch within 30 days."
  },
  {
    startTime: 1777.65,
    person: 'Karol',
    text: ' The email on the right is a rejection letter from that process, which is dated 27th of July.'
  },
  { startTime: 1786.41, person: 'Karol', text: ' So, definitely, that was 30 days.' },
  { startTime: 1789.93, person: 'Karol', text: ' Within 30 days.' },
  {
    startTime: 1791.79,
    person: 'Karol',
    text: " And now, you know, if you're promising something, it would be nice if you kept to the promise, right?"
  },
  {
    startTime: 1798.85,
    person: 'Karol',
    text: " This doesn't show good faith on the side of a company, so maybe avoid doing promises."
  },
  {
    startTime: 1807.75,
    person: 'Karol',
    text: ' But then again, if the company is swamped with applications, that is a real problem, because there are certain jobs.'
  },
  {
    startTime: 1816.33,
    person: 'Karol',
    text: ' And if you look at LinkedIn on job postings on LinkedIn, you see often how many people applied to the job.'
  },
  {
    startTime: 1823.19,
    person: 'Karol',
    text: ' And these numbers sometimes go with three digits, four digits.'
  },
  {
    startTime: 1829.43,
    person: 'Karol',
    text: ' I mean, this is a workload that is completely not manageable for most companies to screen and review and deal with.'
  },
  {
    startTime: 1840.07,
    person: 'Karol',
    text: ' And this is part of the problem that people are just applying a lot.'
  },
  { startTime: 1845.09, person: 'Karol', text: ' People are desperate.' },
  {
    startTime: 1850.47,
    person: 'Karol',
    text: " What's your take, Philip, on the length of the process versus desperation?"
  },
  { startTime: 1855.61, person: 'Phillip', text: " I've been through it all." },
  {
    startTime: 1858.61,
    person: 'Phillip',
    text: ' When I joined a company where there was no internal recruitment team,'
  },
  {
    startTime: 1863.19,
    person: 'Phillip',
    text: " and I took over, inherited, let's say, their recruitment, custom-made recruitment app,"
  },
  {
    startTime: 1871.43,
    person: 'Phillip',
    text: ' basically, in this sense, I was traumatised, because they had thousands of records of candidates'
  },
  {
    startTime: 1880.47,
    person: 'Phillip',
    text: ' that received a lovely welcome automated email about the culture of the company, the process,'
  },
  {
    startTime: 1887.07,
    person: 'Phillip',
    text: " what they can expect, and we'll soon get back to you."
  },
  {
    startTime: 1890.39,
    person: 'Phillip',
    text: " And I'm talking thousands over a period of a few years."
  },
  { startTime: 1894.57, person: 'Phillip', text: " And that's what I inherited." },
  {
    startTime: 1896.69,
    person: 'Phillip',
    text: ' And for the next couple of months, I was closing them down.'
  },
  {
    startTime: 1902.23,
    person: 'Phillip',
    text: " And there were some I just had to, you know, okay, it's been too long."
  },
  { startTime: 1906.45, person: 'Phillip', text: " I'm not going to put my head out there." },
  { startTime: 1908.35, person: 'Phillip', text: ' And I would just close, delete their records.' },
  {
    startTime: 1911.35,
    person: 'Phillip',
    text: ' And there were some in the last year, I was personally, you know, good, strong candidates, I was coming back to them, explaining them personally in an email, apologising, and asking, you know, whether they would like to reconsider, blah, blah, blah.'
  },
  { startTime: 1925.69, person: 'Phillip', text: ' So it was a traumatic experience for me.' },
  {
    startTime: 1927.99,
    person: 'Phillip',
    text: " And that's when I said, right, automation has to be used well."
  },
  {
    startTime: 1931.17,
    person: 'Phillip',
    text: ' And we as recruiters also have to take full responsibility of this, this correct approach.'
  },
  {
    startTime: 1938.83,
    person: 'Phillip',
    text: ' Again, treat people the same way you would want to be treated, a simple philosophy as for every recruiter.'
  },
  { startTime: 1945.23, person: 'Phillip', text: " It's not always possible, things happen." },
  { startTime: 1948.51, person: 'Phillip', text: ' Changes happen.' },
  {
    startTime: 1951.19,
    person: 'Phillip',
    text: ' You know, the level of rotation of recruitment teams is high as well.'
  },
  {
    startTime: 1955.19,
    person: 'Phillip',
    text: " So, you know, you often end up inheriting a mess from a recruiter who's left, for instance, right."
  },
  {
    startTime: 1961.15,
    person: 'Phillip',
    text: " So there's a lot of processes happening simultaneously, hundreds, hundreds a week, some thousands, if they're doing volume recruitment."
  },
  {
    startTime: 1971.35,
    person: 'Phillip',
    text: " So you've got a bad mood, there's a human behind it, it's not fully automated, not everything is automated."
  },
  { startTime: 1978.29, person: 'Phillip', text: ' Just be aware of that.' },
  {
    startTime: 1979.91,
    person: 'Phillip',
    text: ' However, you know, this is a typical ATS generated automation email, both of them.'
  },
  { startTime: 1986.57, person: 'Phillip', text: " And yeah, I'm very familiar with them." },
  { startTime: 1988.89, person: 'Phillip', text: ' And I relate.' },
  {
    startTime: 1991.03,
    person: 'Phillip',
    text: " And I've got to admit, I've sent such messages after such a period of time as well."
  },
  { startTime: 1996.21, person: 'Phillip', text: " And it's not something I feel proud of." },
  { startTime: 1998.45, person: 'Phillip', text: ' I have sleepless nights over it.' },
  {
    startTime: 1999.79,
    person: 'Phillip',
    text: ' And what I do now is to avoid being in such situations and get back.'
  },
  {
    startTime: 2005.43,
    person: 'Phillip',
    text: ' The sooner you can break bad news, the better.'
  },
  {
    startTime: 2008.79,
    person: 'Phillip',
    text: " And one thing I've just got to say, on a positive note, yeah, it's been a few months, but they did give you closure, right?"
  },
  {
    startTime: 2018.53,
    person: 'Karol',
    text: ' Well, they gave me closure after I signed with a different company already.'
  },
  { startTime: 2024.09, person: 'Karol', text: " So I didn't need that closure anymore." },
  { startTime: 2026.57, person: 'Karol', text: ' But yeah, well, at least there was closure.' },
  { startTime: 2029.03, person: 'Karol', text: " There's plenty of..." },
  {
    startTime: 2030.25,
    person: 'Phillip',
    text: ' The thing is here, look how this experience of yours affects their brand in general, in general, right?'
  },
  {
    startTime: 2037.71,
    person: 'Phillip',
    text: " It's not giving you a good feeling of the brand in its entirety, right?"
  },
  { startTime: 2043.75, person: 'Phillip', text: ' All caused by one individual.' },
  {
    startTime: 2046.15,
    person: 'Phillip',
    text: ' You have no personal name, who to contact, if anything.'
  },
  {
    startTime: 2048.85,
    person: 'Phillip',
    text: " So this is what's missing, is some opportunity to connect with someone responsible for this application, a name, an email, if anything, you can follow up, right?"
  },
  { startTime: 2061.37, person: 'Phillip', text: ' Now, this is a common thing.' },
  {
    startTime: 2062.87,
    person: 'Phillip',
    text: ' And this is a common thing for volume hiring for companies with well-recognised brands, who get hundreds, if not thousands of applications for each position.'
  },
  {
    startTime: 2071.55,
    person: 'Karol',
    text: ' I mean, more than 50% of the job postings I saw on LinkedIn while I was searching for a job, did not have anybody assigned to that job posting.'
  },
  { startTime: 2082.15, person: 'Karol', text: ' They were anonymous.' },
  {
    startTime: 2084.449,
    person: 'Karol',
    text: ' Then some of the job postings actually had a recruiter.'
  },
  {
    startTime: 2089.77,
    person: 'Karol',
    text: " And some of the job postings due to LinkedIn showed me a list of people in my network that actually are somewhat related to that company, which is somewhat helpful in terms of networking and sourcing information about the culture, etcétera, just to get a feel about the company you're applying to."
  },
  {
    startTime: 2110.93,
    person: 'Karol',
    text: ' And this is, I think, a very important note here.'
  },
  {
    startTime: 2113.35,
    person: 'Karol',
    text: " In the recruitment process, it's not only you that needs to sell towards your recruiting interviewer, recruiter, and the company."
  },
  {
    startTime: 2123.27,
    person: 'Karol',
    text: " It's also the company selling themselves to you."
  },
  { startTime: 2126.99, person: 'Karol', text: ' So it goes both ways.' },
  {
    startTime: 2128.63,
    person: 'Karol',
    text: " While it feels often that, well, we don't have a candidate market at the moment."
  },
  {
    startTime: 2133.07,
    person: 'Karol',
    text: " We have more of a company market because there's a lot of talent on the market at this point."
  },
  { startTime: 2139.49, person: 'Karol', text: ' But in general, this should work both ways.' },
  {
    startTime: 2142.19,
    person: 'Karol',
    text: " So it's not only them interviewing you as a candidate, it's also you interviewing them as a company."
  },
  {
    startTime: 2149.49,
    person: 'Karol',
    text: " So it's fair and okay to ask questions and vet the company even by vetting that company through other employees."
  },
  {
    startTime: 2160.03,
    person: 'Karol',
    text: ' Or for example, by researching former employees of that company and just simply asking, hey, why did you leave that company?'
  },
  { startTime: 2167.25, person: 'Karol', text: ' Especially if they left recently.' },
  { startTime: 2169.91, person: 'Karol', text: " So there's a lot of things going on." },
  { startTime: 2173.77, person: 'Karol', text: ' Companies on the outside often seem fantastic.' },
  {
    startTime: 2178.49,
    person: 'Karol',
    text: ' They seem that they have a great culture and whatnot.'
  },
  {
    startTime: 2182.52,
    person: 'Karol',
    text: ' There are certain red flags people might want to look out for, like statements, we are a family.'
  },
  {
    startTime: 2187.83,
    person: 'Karol',
    text: " I think that statement in general- I think that's dying out."
  },
  {
    startTime: 2192.89,
    person: 'Karol',
    text: ' But it still happens in conversations and interviews.'
  },
  { startTime: 2197.69, person: 'Karol', text: ' I had that stated a few times.' },
  { startTime: 2202.57, person: 'Phillip', text: " But you didn't join that family then?" },
  { startTime: 2204.65, person: 'Karol', text: ' No, no, no.' },
  { startTime: 2205.63, person: 'Karol', text: ' Absolutely not.' },
  { startTime: 2206.87, person: 'Karol', text: ' No.' },
  {
    startTime: 2207.33,
    person: 'Karol',
    text: " If somebody says in a working relationship, in a contractual, transactional relationship that we are a family, I mean, for me, that's a sign of abuse already, straight on."
  },
  {
    startTime: 2218.25,
    person: 'Karol',
    text: " That means that I'm going to be working overtime without pay or something like that, that I'm going to be expected to take on a lot more than possible."
  },
  { startTime: 2231.97, person: 'Phillip', text: ' Absolutely, no question about it.' },
  {
    startTime: 2233.53,
    person: 'Phillip',
    text: ' But I think culture is a whole different topic we can have a whole discussion about.'
  },
  { startTime: 2237.87, person: 'Phillip', text: ' There are certain things about cultural fit.' },
  {
    startTime: 2240.97,
    person: 'Phillip',
    text: " Of course, we're talking the whole, let's say, the bullshit, the values."
  },
  {
    startTime: 2245.63,
    person: 'Phillip',
    text: " Very often you'll ask managers, directors of a company, what are the values of the company?"
  },
  { startTime: 2249.41, person: 'Phillip', text: " They won't have a clue." },
  { startTime: 2251.83, person: 'Phillip', text: " They've already forgotten." },
  {
    startTime: 2253.93,
    person: 'Phillip',
    text: ' So people come first, where people focus the company, and then you get sacked just after a couple of weeks of working with them.'
  },
  {
    startTime: 2262.04,
    person: 'Phillip',
    text: " So, I mean, the cultural thing is a very important aspect, but it's being able to define that culture and share it is key."
  },
  {
    startTime: 2270.27,
    person: 'Phillip',
    text: " Now, recruiters, coming back to this role of a recruiter, and before I talk about the recruiter as well, I'm going to defend the recruiter being a very significant part of employer branding of a company."
  },
  {
    startTime: 2286.67,
    person: 'Phillip',
    text: " The reason is, you've worked for a few big companies, you know how protective every company is about their brand, their marketing, the millions they put in to position themselves correctly, rebranding, or, you know, very, very particular."
  },
  {
    startTime: 2302.55,
    person: 'Phillip',
    text: " Now, all of that's beautiful and fun and great, and it looks beautiful on the outside, like some beautiful CVs I've seen as well, right?"
  },
  {
    startTime: 2311.55,
    person: 'Phillip',
    text: " But then you come to a recruiter who's, let's say, for this company you're sharing this slide, these examples of big company, well-recognised brand, and look, with one interaction, they've ruined the whole brand's reputation with one person."
  },
  {
    startTime: 2326.99,
    person: 'Phillip',
    text: ' Imagine they have thousands of people applying, how this is growing on a local aspect for this company, right?'
  },
  {
    startTime: 2333.11,
    person: 'Phillip',
    text: ' So, we recruiters really need to be aware of this.'
  },
  {
    startTime: 2338.15,
    person: 'Phillip',
    text: " I've trained a few recruiters, you know, from scratch, and it's always been this approach."
  },
  { startTime: 2343.71, person: 'Phillip', text: ' This is a very important role.' },
  {
    startTime: 2344.93,
    person: 'Phillip',
    text: ' We are the first salespeople, very often, for candidates who are exploring a new brand, right?'
  },
  {
    startTime: 2350.37,
    person: 'Phillip',
    text: ' So, we are also salespeople, but you have to have this no-bullshit approach.'
  },
  {
    startTime: 2354.31,
    person: 'Phillip',
    text: " If there's something about the culture you enjoy sharing, if there's something you don't like, feel free to share it as well."
  },
  {
    startTime: 2360.31,
    person: 'Phillip',
    text: " I mean, we're humans, people buy from humans too."
  },
  {
    startTime: 2363.19,
    person: 'Phillip',
    text: " I've learned this the hard way, is also to just speak freely, openly, and to be honest, it's the best thing you can do as a recruiter."
  },
  {
    startTime: 2372.49,
    person: 'Phillip',
    text: " I'm not talking about saying all the shit things that go on in the company, blah, blah, blah, but I'm just saying things, your observations of being here."
  },
  {
    startTime: 2379.39,
    person: 'Phillip',
    text: " So, I've been here two, three years, four years, five years, one year, six months, and this is what I enjoy most."
  },
  {
    startTime: 2384.41,
    person: 'Phillip',
    text: " This is the stuff that I'm still getting used to, trying to get my, you know, make my way through these experiences, but that's my opinion, you know, and I'm happy to share it with you."
  },
  {
    startTime: 2393.69,
    person: 'Phillip',
    text: " It's good, because it's a human, nothing is perfect."
  },
  {
    startTime: 2396.35,
    person: 'Phillip',
    text: " I always start my, let's say, my pitches when I introduce myself to a new candidate."
  },
  {
    startTime: 2401.29,
    person: 'Phillip',
    text: " So, I say, listen, I've been in this game too long, I'm not here to sell you a utopian image of a utopian company, right, because we're far from one."
  },
  {
    startTime: 2410.25,
    person: 'Phillip',
    text: " We need more people to come and make it one, maybe, but you know, that's the way I always start an introduction."
  },
  {
    startTime: 2416.15,
    person: 'Phillip',
    text: ' I can see Kamil Murawski is here with us on the call.'
  },
  {
    startTime: 2419.01,
    person: 'Phillip',
    text: " He knows it, because he's heard this pitch of mine probably a hundred times, sitting next to me for a few years in the office."
  },
  { startTime: 2425.67, person: 'Phillip', text: ' So, yeah.' },
  {
    startTime: 2427.29,
    person: 'Karol',
    text: " Dominic I mean, yeah, it's difficult sometimes to understand that presenting a company like an ideal place to work, a perfect employer, etcétera, there's no such thing as perfect."
  },
  {
    startTime: 2441.89,
    person: 'Karol',
    text: " It's an ideal we want to strive to, the perfection, right, but it's impossible to have it perfect, because there are different people, we have different values, and those different values will reflect within everybody working in a company, and they will not perfectly align with the company values."
  },
  {
    startTime: 2464.49,
    person: 'Karol',
    text: ' We can play along, but everybody will have some sort of a different value there, getting the culture, or understanding the culture in a different way.'
  },
  { startTime: 2479.45, person: 'Karol', text: " And it's hard at times." },
  {
    startTime: 2482.41,
    person: 'Karol',
    text: " If you look at those giant corporate environment or networked environment, because some of those companies are not corporate entities, but more of a network of various companies under one brand, and we've worked for one, not naming it specifically right now, these values get completely diluted between different companies within that network, or completely diluted across territorial boundaries."
  },
  {
    startTime: 2512.71,
    person: 'Karol',
    text: ' So, if a company is in England, has the same set of values set in stone in writing, and the company in Poland, the interpretation of those values will be completely different at times.'
  },
  {
    startTime: 2524.73,
    person: 'Phillip',
    text: " I mean, that's going to be the challenge of any international business, right?"
  },
  {
    startTime: 2528.81,
    person: 'Phillip',
    text: " It's also having this, you can't replicate the same culture that works wonderfully in one country, and replicate that exactly the same in another country, and expect it's going to work."
  },
  { startTime: 2538.75, person: 'Phillip', text: " It's not." },
  { startTime: 2539.75, person: 'Karol', text: " Yeah, because we're in a different country." },
  {
    startTime: 2542.17,
    person: 'Phillip',
    text: ' But it is about finding what is our common ground, and what makes us tick.'
  },
  {
    startTime: 2548.13,
    person: 'Phillip',
    text: ' Now, culture also means, do you want to be part of the, you know, the office buzz, the integrations?'
  },
  {
    startTime: 2553.33,
    person: 'Phillip',
    text: " Very often now, we're living in this remote work, especially in the IT world."
  },
  {
    startTime: 2556.51,
    person: 'Phillip',
    text: ' Not really, not necessarily, the less the better for me.'
  },
  { startTime: 2558.97, person: 'Phillip', text: " And that's fine." },
  { startTime: 2559.67, person: 'Phillip', text: ' You just need to define it, right?' },
  { startTime: 2561.33, person: 'Phillip', text: " So, you're setting expectations." },
  {
    startTime: 2563.51,
    person: 'Phillip',
    text: " And you're doing it from, as a recruiter, you're doing it between the hiring managers, and you know, the candidates too, right?"
  },
  { startTime: 2569.27, person: 'Karol', text: " Yeah, you're the mediator there." },
  { startTime: 2571.99, person: 'Phillip', text: ' Yeah, you are, you are.' },
  { startTime: 2573.11, person: 'Phillip', text: ' And you know, you can get it wrong.' },
  {
    startTime: 2574.31,
    person: 'Phillip',
    text: " You can create a typo, and present someone in the wrong way, and straight away, it's going to be a no, right?"
  },
  {
    startTime: 2579.83,
    person: 'Phillip',
    text: ' So, recruiters have a lot of power in introducing and pushing your candidacy further into the world.'
  },
  {
    startTime: 2587.67,
    person: 'Phillip',
    text: " It just takes a good recommendation from a recruiter, if they've built a level of trust or reputation within the company, you know, they'll listen to you, they'll listen to a good recruiter, and they'll say, okay, listen, Phil, CV says something else, but you know, you're recommending this person, I want to meet the person, yeah?"
  },
  {
    startTime: 2601.43,
    person: 'Karol',
    text: " So, as a big fan of Marvel movies, I'm going to be a little bit tacky, but I'm going to quote this anyways, with great power comes great responsibility."
  },
  { startTime: 2611.65, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 2613.37,
    person: 'Karol',
    text: " Which is, everybody knows that comes from Spider-Man, but basically, it's kind of the truth here, right?"
  },
  {
    startTime: 2619.05,
    person: 'Karol',
    text: " Because you're mediating between two parties with their specific needs, and you have the power to present somebody in a completely different light, or to see somebody for what they are, or what talent they are, what rough gem they are that can be made into something valuable for that company, right?"
  },
  {
    startTime: 2645.26,
    person: 'Phillip',
    text: " If you're a good recruiter, and you've got a level of trust, you've worked your way hard to build relationships, and people know you deliver, right?"
  },
  {
    startTime: 2653.52,
    person: 'Phillip',
    text: " Equality, or you understand the business, the skills needed, and there's no way I would call one of the hiring managers who's recruiting and say, listen, I don't have the CV, you've got to meet this person."
  },
  {
    startTime: 2663.32,
    person: 'Phillip',
    text: " There's no way that he or she wouldn't meet that person."
  },
  {
    startTime: 2666.58,
    person: 'Phillip',
    text: " You know, that's the level I'm talking about of really making an impact in the company."
  },
  { startTime: 2670.62, person: 'Phillip', text: " That's where you need to go as a recruiter." },
  {
    startTime: 2672.34,
    person: 'Phillip',
    text: " If you don't have that, well, then it's going to be the mundane, repetitive stuff."
  },
  {
    startTime: 2676.22,
    person: 'Phillip',
    text: ' You know, this is a short listing, and then you send a short list of 12 CVs from a thousand, using ATSs, using all sorts of keyword searches, just to pull out, you know, hopefully the best ones.'
  },
  {
    startTime: 2687.42,
    person: 'Phillip',
    text: " You've got no idea who you're hiring, what is an integration architect, who is an integration tester, and, you know, service now, that sounds like integration, let's put it forward as well, right?"
  },
  { startTime: 2698.94, person: 'Phillip', text: " That's the thing." },
  {
    startTime: 2699.8,
    person: 'Phillip',
    text: " I mean, and then, of course, the quality is going to be, it's going to be shit, and, you know, the input is going to be, you know, the output is going to be the same as the input in this case."
  },
  {
    startTime: 2710.3,
    person: 'Karol',
    text: ' Yes, some people will go for numbers, other people will go for the relationships, right?'
  },
  {
    startTime: 2714.24,
    person: 'Karol',
    text: ' And, from my perspective, I respect a lot more people that go and build relationships, and I keep those relationships around, even though those recruiters that I worked with, and I have a relationship with, they have no offers for me, absolutely zero at this point, right?'
  },
  {
    startTime: 2732.4,
    person: 'Karol',
    text: " Well, there you go, at least you've got clarity where you stand, right?"
  },
  {
    startTime: 2736.24,
    person: 'Karol',
    text: " Yeah, but I can reach out to them and say, hey, I'm looking for a job, if something pops up, tell me, I'll be happy to interview, and they're going to go the extra mile, because we have a relationship standing there, they're going to go the extra mile, ask me for that CV, so they're ready if anything pops up, and just notify me instantly, right?"
  },
  {
    startTime: 2757.14,
    person: 'Karol',
    text: " So, that's a completely different way of working than just doing numbers and just sending out mass messages, and then collecting CVs based on, well, somebody put that in a system."
  },
  {
    startTime: 2770.14,
    person: 'Phillip',
    text: " Well, listen, that's the part of recruitment that can be easily automated, and, you know, AI is going to do a wonderful job at that, you know, and then, you know, the good recruiters, the qualified recruiters are going to do the good stuff, right, and really qualify the right candidates."
  },
  {
    startTime: 2785.78,
    person: 'Karol',
    text: " There's some nice comments coming out through, I'm seeing, a game between a company and a candidate, both trying to sell themselves, yes, absolutely."
  },
  {
    startTime: 2802.16,
    person: 'Karol',
    text: " Yeah, it's a common ground, and then, build that long-term relationship to be able to be successful, absolutely true."
  },
  { startTime: 2810.74, person: 'Phillip', text: ' And, hi, Przemek, Przemek knows his shizzle,' },
  {
    startTime: 2814.12,
    person: 'Phillip',
    text: " he's a man in the game, you know, you know, I think, I think a recruiter is a middleman,"
  },
  {
    startTime: 2818.64,
    person: 'Phillip',
    text: " right, you've got to make, who's a middleman, your agent, your estate agent is a middleman,"
  },
  {
    startTime: 2824.3,
    person: 'Phillip',
    text: " right, so they're juggling, they're managing two sides of the, you know, the process,"
  },
  {
    startTime: 2829.98,
    person: 'Phillip',
    text: " the deal, or however you want to call it, right, so, like, with everything's going to be two sides"
  },
  {
    startTime: 2834.66,
    person: 'Phillip',
    text: ' of a coin, you know, the good, the bad, and, you know, they have to kind of, you know,'
  },
  {
    startTime: 2839.02,
    person: 'Phillip',
    text: ' mingle, present it in the right way, and hopefully make that connection, but.'
  },
  {
    startTime: 2843.6,
    person: 'Karol',
    text: " I kind of relate as an integrator, because I'm always mediating between tech teams, so."
  },
  { startTime: 2848.94, person: 'Karol', text: " You're a middleman as well, then." },
  { startTime: 2850.16, person: 'Karol', text: ' Yeah, absolutely, always been.' },
  {
    startTime: 2852.3,
    person: 'Karol',
    text: ' 14 years of my career as a middleman, but only negotiating between tech teams and systems.'
  },
  {
    startTime: 2858.22,
    person: 'Karol',
    text: " That's a different kind of negotiation, but that's basically the same kind of position."
  },
  { startTime: 2862.54, person: 'Karol', text: " All right, let's have some more examples." },
  {
    startTime: 2864.06,
    person: 'Karol',
    text: " These ones are sent by Stefan, who's present here with us in the chat."
  },
  {
    startTime: 2869.5,
    person: 'Karol',
    text: ' So, again, bad recruitment vetting, a recruiter proposing a job in Detroit, or in Phoenix, Arizona, where somebody is based in Europe.'
  },
  { startTime: 2882.18, person: 'Phillip', text: ' Come on, Stefan, you could do that, come on.' },
  { startTime: 2885.74, person: 'Phillip', text: ' Was it once a week in the office?' },
  { startTime: 2888.16, person: 'Phillip', text: ' Come on, you could have done that.' },
  { startTime: 2889.48, person: 'Karol', text: ' Yeah, definitely.' },
  {
    startTime: 2891.68,
    person: 'Karol',
    text: " And then another great example of ghosting and mass messaging, where nobody ever replied, it's like, look at this, it's August 12th, 24, 4.42pm, and Stefan replied six minutes later."
  },
  { startTime: 2907.24, person: 'Karol', text: ' Is it six minutes?' },
  { startTime: 2907.88, person: 'Karol', text: " Yes, it's six minutes." },
  { startTime: 2910.08, person: 'Karol', text: ' No response whatsoever in the next few days.' },
  { startTime: 2913.68, person: 'Karol', text: " That's just horrendous in that sense." },
  {
    startTime: 2917.24,
    person: 'Karol',
    text: ' Another few examples being, yeah, just long conversations about unclear expectations.'
  },
  {
    startTime: 2929.88,
    person: 'Karol',
    text: ' I mean, yeah, not enough project details, not enough description to get the candidate even interested.'
  },
  { startTime: 2938.44, person: 'Karol', text: ' Very poor description of the job posting.' },
  {
    startTime: 2942.18,
    person: 'Karol',
    text: " I mean, I've seen job postings over the last three months that literally contained 10 sentences, and that was it."
  },
  {
    startTime: 2950.48,
    person: 'Karol',
    text: ' And I was like, how is anybody supposed to get interested in that job posting when, I mean, how, why?'
  },
  { startTime: 2961.5, person: 'Phillip', text: " I don't know, what is it?" },
  { startTime: 2963.46, person: 'Phillip', text: ' Information overload?' },
  { startTime: 2964.6, person: 'Phillip', text: " Maybe that's their hack." },
  { startTime: 2965.48, person: 'Phillip', text: ' They want to be succinct and precise, maybe.' },
  {
    startTime: 2969.94,
    person: 'Karol',
    text: ' Or maybe they just want to get people hooked on the part that there is not enough information, so they need to ask.'
  },
  {
    startTime: 2978.53,
    person: 'Phillip',
    text: " You know, there's plenty of things here to consider."
  },
  {
    startTime: 2985.22,
    person: 'Phillip',
    text: " The good thing, you know, I'll say is that they're attracting the right talent."
  },
  {
    startTime: 2992.6,
    person: 'Phillip',
    text: " There's a lot of, first of all, Stefan, you know, I've had the pleasure to meet Stefan, and a fantastic, very talented guy in the integration space."
  },
  {
    startTime: 3005.42,
    person: 'Phillip',
    text: ' Remember, we were considering him for a role as a MuleSoft architect, which probably might not have been the best fit, but what I really enjoyed that Stefan and I, we got on a call, we had an honest chat, and I broke the news to him shortly after that.'
  },
  {
    startTime: 3020.84,
    person: 'Phillip',
    text: " I'm sorry, but, you know, it's not going to work out, or I come out of the details."
  },
  {
    startTime: 3024.34,
    person: 'Phillip',
    text: " I'm sure Stefan maybe has something he can share, but the cool"
  },
  {
    startTime: 3027.84,
    person: 'Phillip',
    text: ' thing about it is what, you know, I made a new connection with Stefan, and, you know, I introduced'
  },
  {
    startTime: 3031.94,
    person: 'Phillip',
    text: " Stefan to you, and that's so nice that you guys are connected, and, you know, I already saw today"
  },
  {
    startTime: 3036.56,
    person: 'Phillip',
    text: " that, you know, you're sharing Stefan's examples, and I was like, oh my goodness, I remember I"
  },
  { startTime: 3040.72, person: 'Phillip', text: " introduced him to you, so it's like, so cool." },
  { startTime: 3043.62, person: 'Phillip', text: " So, that's the real thing." },
  {
    startTime: 3045.62,
    person: 'Phillip',
    text: " So, if I ever come across, you know, a requirement for someone in Stefan's neck of the woods, I know I'm going to reach out to him, even if he's not looking."
  },
  {
    startTime: 3053.82,
    person: 'Phillip',
    text: " I'll ask him, who do you know, because he's got a network of guys in his network."
  },
  {
    startTime: 3059.18,
    person: 'Phillip',
    text: " Same as you, you know, I'm not an expert in integration, special hiring integration specialist, so, you know, I'll reach out and get some support from you guys, and that's the wonder of, you know, really utilising LinkedIn to its best, and I also am a, I'm also, now LinkedIn doesn't offer it, but it offered instant video calls."
  },
  {
    startTime: 3079.04,
    person: 'Phillip',
    text: " It was too expensive, I think, and it just wasn't utilised properly, so they've gone away from it, but I really love that, because I've got this, you know, I just opened the chat with you on LinkedIn, and there's still an option to have an instant video call there."
  },
  { startTime: 3093.88, person: 'Phillip', text: ' Oh, there you go.' },
  {
    startTime: 3094.54,
    person: 'Phillip',
    text: " So, I recently tried that, I couldn't find it, and okay, great, so it's good to know."
  },
  { startTime: 3098.28, person: 'Phillip', text: ' Top right corner of the window.' },
  { startTime: 3100.46, person: 'Phillip', text: ' There you go.' },
  { startTime: 3101.02, person: 'Phillip', text: ' Every day is a school day.' },
  {
    startTime: 3103.08,
    person: 'Phillip',
    text: ' So, but if you can, you know, if you can ask something, clarify something in less than two minutes, why not just pick up the phone or do an instant video call with the person.'
  },
  { startTime: 3114.38, person: 'Phillip', text: ' Exactly.' },
  {
    startTime: 3114.96,
    person: 'Phillip',
    text: " So much more, you'll get so much more information than, you know, a thread on LinkedIn, where you're bouncing off questions."
  },
  { startTime: 3121.8, person: 'Phillip', text: ' How much are you offering?' },
  {
    startTime: 3122.96,
    person: 'Phillip',
    text: " Well, I can't disclose that information, or I don't know, so I'm going to do the whole bullshit approach, you know, that how much are you looking for, and then, you know, you're going to have a ridiculous conversation."
  },
  {
    startTime: 3133.54,
    person: 'Phillip',
    text: " You can get on the video call, just be honest, listen, I don't know what the rates are, you know, I'm trying to, I'm trying to present, you know, a variety of very experienced candidates to my client, you know."
  },
  {
    startTime: 3144.64,
    person: 'Phillip',
    text: " So, maybe if you could share your rates, you know, but even at the top end of what you're expecting, what would really motivate you to have a discussion with someone, and let me introduce that, you know, if you don't, if you do know the rates, then, you know, share something, you know, I mean, at the end of the day, why waste anyone's time?"
  },
  {
    startTime: 3163.34,
    person: 'Phillip',
    text: " I mean, okay, you can't publicly announce it on job descriptions, but you can in a conversation."
  },
  {
    startTime: 3169.6,
    person: 'Phillip',
    text: " It's not like someone's going to record it, and put it on YouTube, and say, have you heard how much X company's paying?"
  },
  {
    startTime: 3175.6,
    person: 'Phillip',
    text: " Watch my recorded video with someone, you know, they'll be in trouble if they do something like that, it'll get out quickly."
  },
  {
    startTime: 3181.04,
    person: 'Karol',
    text: " That's very true, but not to bash too much into recruiters, there are also awesome recruiters among us, and I'm just going to pop on the screen, another one from, and this one is not anonymised, because I'm praising the guy, if you see on the left side, this is a screenshot from my own personal profile."
  },
  {
    startTime: 3203.62,
    person: 'Karol',
    text: ' I basically put something there that has no purpose other than just to troll people, or check if people actually read profiles.'
  },
  { startTime: 3211.32, person: 'Karol', text: ' So, I put a patent in.' },
  { startTime: 3213, person: 'Karol', text: ' I hold no patents, just to be clear.' },
  { startTime: 3216.28, person: 'Karol', text: ' This patent is just for the lulz.' },
  {
    startTime: 3219.34,
    person: 'Karol',
    text: ' I did it for as a joke, and it worked amazingly as that joke.'
  },
  {
    startTime: 3224.36,
    person: 'Karol',
    text: ' If you ever go to my profile and see that patent, click the see patent button.'
  },
  {
    startTime: 3229.48,
    person: 'Karol',
    text: ' It basically leads to a YouTube video of Sheldon Cooper in the ball pit, just diving in, popping up, and screaming Bazinga.'
  },
  {
    startTime: 3237.54,
    person: 'Karol',
    text: ' And basically I wrote, well, if you read this place in the profile, please write Bazinga in your first message to me.'
  },
  { startTime: 3244.4, person: 'Karol', text: ' There you go.' },
  {
    startTime: 3245.58,
    person: 'Karol',
    text: " We have a recruiter who actually wrote Bazinga to me, and he's not the only one."
  },
  {
    startTime: 3250.18,
    person: 'Karol',
    text: ' But to be honest, I can count those recruiters on the fingers of my one hand, which is a very, very rare occurrence that a recruiter actually goes through the whole profile.'
  },
  {
    startTime: 3261.46,
    person: 'Karol',
    text: ' But if somebody does something like that, and pops the message like that in my inbox- You will meet them.'
  },
  { startTime: 3269.42, person: 'Phillip', text: ' You will chat with them.' },
  {
    startTime: 3270.32,
    person: 'Phillip',
    text: " You'll respect them from the moment they drop that message."
  },
  { startTime: 3272.84, person: 'Karol', text: ' Oh, yeah.' },
  { startTime: 3273.38, person: 'Phillip', text: " Even if you're not looking, right?" },
  {
    startTime: 3275.68,
    person: 'Phillip',
    text: " And that's a brilliant example, but I mean, it's a tough one you're presenting."
  },
  {
    startTime: 3280.04,
    person: 'Phillip',
    text: " I remember when you shared this to me, and I was like, oh man, he's one of those then."
  },
  {
    startTime: 3285.7,
    person: 'Phillip',
    text: " But I think that's when you're in the situation where you're stable, you're secure, you're okay."
  },
  {
    startTime: 3292.36,
    person: 'Phillip',
    text: " You get a lot of messages because you're an expert in the field, so you get a lot of these cold call messages."
  },
  {
    startTime: 3297.14,
    person: 'Phillip',
    text: " So it's a way to filter, and it's a clever way to do it."
  },
  {
    startTime: 3299.64,
    person: 'Phillip',
    text: ' And I absolutely love this creativity, this approach.'
  },
  { startTime: 3303.28, person: 'Phillip', text: ' Keep it on.' },
  {
    startTime: 3303.86,
    person: 'Phillip',
    text: " But when you are looking for work, and you're feeling the pressure- Oh, yeah."
  },
  { startTime: 3309.5, person: 'Phillip', text: ' Keep it.' },
  { startTime: 3310.06, person: 'Phillip', text: ' Keep it, of course.' },
  {
    startTime: 3310.96,
    person: 'Phillip',
    text: " But you'll just get a real positive surprise if someone reaches out and utilises that, since they're really keen on you."
  },
  { startTime: 3316.06, person: 'Phillip', text: ' But just be a little bit more open to those.' },
  {
    startTime: 3319.96,
    person: 'Karol',
    text: " I mean, if you're up against the wall, I'm not going to discard a recruiter because he didn't wrote Bazinga in the message, right?"
  },
  {
    startTime: 3328.8,
    person: 'Karol',
    text: " Yeah, but it'll be a different level if they do, right?"
  },
  {
    startTime: 3331.26,
    person: 'Karol',
    text: ' It will be a completely different level of a conversation.'
  },
  {
    startTime: 3334.64,
    person: 'Karol',
    text: " I'll be definitely more engaged in the conversation if somebody writes Bazinga in a message to me."
  },
  {
    startTime: 3340.82,
    person: 'Karol',
    text: " Even if that is not the match, I'll be even inclined to help that recruiter to find other candidates."
  },
  { startTime: 3347.48, person: 'Karol', text: ' As in, well, you know what?' },
  {
    startTime: 3349.4,
    person: 'Karol',
    text: " I'm not a match for this role, but I think I might have some people in my network that might be a match."
  },
  {
    startTime: 3354.76,
    person: 'Karol',
    text: ' So let me put those profiles in for you, and you go and ask them.'
  },
  {
    startTime: 3359.5,
    person: 'Karol',
    text: " But if somebody wouldn't do that, I would be not that inclined to have a conversation."
  },
  {
    startTime: 3364.34,
    person: 'Karol',
    text: ' But this shows empathy, and this shows the effort put into looking into a candidate.'
  },
  { startTime: 3372.12, person: 'Phillip', text: ' Yeah, exactly.' },
  { startTime: 3372.22, person: 'Karol', text: ' The effort.' },
  { startTime: 3372.5, person: 'Phillip', text: ' Someone spent time crafting that for you.' },
  { startTime: 3375.78, person: 'Phillip', text: ' I mean, look at the message alone.' },
  { startTime: 3377.62, person: 'Phillip', text: " It's beautiful, too." },
  { startTime: 3379.4, person: 'Phillip', text: " So it really, there's a nice hook." },
  { startTime: 3381.52, person: 'Phillip', text: " It's interesting." },
  {
    startTime: 3383.46,
    person: 'Karol',
    text: " I mean, it clearly shows that somebody read the message, because if they're mentioning coffee in a message to me, they definitely read another statement in my profile, which is in the list of certificates that I hold, because I do hold a certificate for a barista certificate, which I actually own."
  },
  { startTime: 3403.4, person: 'Karol', text: ' I actually did a barista course.' },
  {
    startTime: 3404.68,
    person: 'Karol',
    text: ' I actually ended that course with a certificate.'
  },
  {
    startTime: 3406.91,
    person: 'Karol',
    text: " I have a certificate, which is another funny thing, which we'll dive into with Boolean searches."
  },
  {
    startTime: 3412.11,
    person: 'Karol',
    text: ' But if he did the job, he did the effort, he did put in the effort to look through my profile.'
  },
  {
    startTime: 3420.95,
    person: 'Karol',
    text: ' So there are people who actually care and actually will put the effort in.'
  },
  {
    startTime: 3425.09,
    person: 'Karol',
    text: ' But that also means that you have to actually put the effort in as a candidate to get that profile squeaky clean and informative, right?'
  },
  {
    startTime: 3435.93,
    person: 'Karol',
    text: ' Maybe hide a few Easter eggs for the sake of fun.'
  },
  { startTime: 3440.41, person: 'Karol', text: " Figure out what's yours." },
  { startTime: 3442.79, person: 'Phillip', text: " I don't know what your first name." },
  {
    startTime: 3445.31,
    person: 'Phillip',
    text: " There's a couple of really nice, interesting examples you're sharing."
  },
  { startTime: 3451.13, person: 'Karol', text: ' But this can show that effort.' },
  {
    startTime: 3453.73,
    person: 'Karol',
    text: ' And I respect these kind of people a lot more than any other recruiter out there.'
  },
  {
    startTime: 3458.93,
    person: 'Karol',
    text: ' I mean, back a few years, I used to bash recruiters for shitty messages.'
  },
  {
    startTime: 3465.29,
    person: 'Karol',
    text: " Now, I just don't care anymore that much because I'm a different person."
  },
  {
    startTime: 3470.05,
    person: 'Karol',
    text: " But there's a lot of spammers there that don't care."
  },
  { startTime: 3474.07, person: 'Phillip', text: ' They just simply spam.' },
  {
    startTime: 3475.19,
    person: 'Phillip',
    text: ' The conversion rates on LinkedIn, the average rates is around 10%.'
  },
  {
    startTime: 3480.83,
    person: 'Phillip',
    text: " So think of it, if you're sending 1000 messages out, you might get 100 response."
  },
  {
    startTime: 3487.15,
    person: 'Phillip',
    text: " And on a conversion, it also includes a rejection, because that's kind of a message that, you know, okay, the persons are interested."
  },
  {
    startTime: 3495.29,
    person: 'Phillip',
    text: ' So a lot of people are playing the numbers game.'
  },
  {
    startTime: 3498.05,
    person: 'Phillip',
    text: ' So they will not really go into detail into reading your profile.'
  },
  {
    startTime: 3503.55,
    person: 'Phillip',
    text: " They are very reliable on their, you know, their Boolean searches, you know, the technology they're using."
  },
  {
    startTime: 3509.57,
    person: 'Phillip',
    text: " And, you know, if you're doing mass recruitment, then these are cool things to be aware of."
  },
  {
    startTime: 3515.75,
    person: 'Phillip',
    text: " But yeah, you as a candidate, you also be able to need to be able to filter what kind of recruiter you're working with."
  },
  {
    startTime: 3522.95,
    person: 'Phillip',
    text: ' And I think we also talked about this before we went live is that as a candidate, you also need to define what kind of recruiter am I talking to?'
  },
  { startTime: 3531.21, person: 'Phillip', text: ' You know, is this a in house recruiter?' },
  { startTime: 3533.09, person: 'Phillip', text: ' Or is this an agency recruiter?' },
  {
    startTime: 3534.91,
    person: 'Phillip',
    text: " Is this a recruiter representing another company outsourcing company that's managing a, you know, a project for another company?"
  },
  { startTime: 3542.03, person: 'Phillip', text: ' Who is it?' },
  {
    startTime: 3542.79,
    person: 'Phillip',
    text: " Because if you define, if you first understand who you're talking to, then you can start thinking, okay, this, this recruiter's task as an agency recruiter is to select the best CVs, the best candidates, probably present three or four CVs to a customer for a specific role."
  },
  {
    startTime: 3559.61,
    person: 'Phillip',
    text: " And then they're waiting, they're playing, they're waiting the game as well, unless they have a very strong relationship."
  },
  {
    startTime: 3564.41,
    person: 'Phillip',
    text: " And so there's a lot of things you just need to be aware in house should be a lot swifter, but they're going to be dependent on hiring managers."
  },
  {
    startTime: 3570.57,
    person: 'Phillip',
    text: " So the longer it takes to maybe the more you're going to wonder how well streamlined these teams are internally."
  },
  { startTime: 3577.15, person: 'Phillip', text: ' Right.' },
  {
    startTime: 3577.25,
    person: 'Phillip',
    text: " And, but you know, there's a lot of things you've got to take in fact, but the first thing you should do is definitely define who, what kind of recruiter you're talking to."
  },
  { startTime: 3585.19, person: 'Phillip', text: ' Yeah.' },
  { startTime: 3585.81, person: 'Phillip', text: ' All right.' },
  {
    startTime: 3586.37,
    person: 'Karol',
    text: " So ending this section about candidates, let's jump into some advice."
  },
  {
    startTime: 3591.95,
    person: 'Karol',
    text: " We already touched upon a few tricks here and there hacks to, to just see what kind of recruiter we're dealing with in terms of are they using automation?"
  },
  {
    startTime: 3601.67,
    person: 'Karol',
    text: " Are they're actually reading the profile, etcétera."
  },
  { startTime: 3604.23, person: 'Karol', text: ' Right.' },
  {
    startTime: 3605.01,
    person: 'Karol',
    text: " But this is not all, there's a lot more to it in terms of building a proper LinkedIn profile."
  },
  {
    startTime: 3611.77,
    person: 'Karol',
    text: ' And then buy that also a CV because LinkedIn is now more of a CV than a PDF you can send out.'
  },
  {
    startTime: 3618.83,
    person: 'Karol',
    text: ' What kind of advice from a perspective of a recruiter, from a perspective that of a person that does the sourcing of candidates, would you give to people in terms of their LinkedIn profiles and then by proxy also some somewhat the CVs, what changes do they need to be searchable, to be appealing to employers or recruiters and how to deal with that?'
  },
  { startTime: 3649.18, person: 'Phillip', text: ' Okay.' },
  {
    startTime: 3649.48,
    person: 'Phillip',
    text: ' And I guess ATS has come in here as well, right?'
  },
  { startTime: 3652.14, person: 'Karol', text: ' Sure.' },
  { startTime: 3653.08, person: 'Phillip', text: ' Right.' },
  {
    startTime: 3653.66,
    person: 'Phillip',
    text: " So, I mean, okay, first of all, LinkedIn, I think in the world of IT, it's, it's, it's, it's, it's a must thing about LinkedIn to really get utilised the most out of your LinkedIn."
  },
  { startTime: 3666.18, person: 'Phillip', text: " There's one sad thing." },
  { startTime: 3667.88, person: 'Phillip', text: ' And that is you have to be consistent.' },
  { startTime: 3669.78, person: 'Phillip', text: ' You have to be there regularly and be active.' },
  {
    startTime: 3673.14,
    person: 'Phillip',
    text: " You're not necessarily have to be a content creator, but, you know, interact, engage, that also puts you higher on the algo, you know, when it comes to searches, but most importantly, your header, your about section is where you whack in all the keywords that you want to be recognised in as a specialist in a particular area."
  },
  { startTime: 3690.42, person: 'Phillip', text: ' And then,' },
  {
    startTime: 3690.9,
    person: 'Phillip',
    text: ' of course, you can elaborate further in every job description by sharing a little bit more skills in'
  },
  {
    startTime: 3695.58,
    person: 'Phillip',
    text: ' specific technologies, skills, experiences, you know, successes, achievements, because it is an,'
  },
  {
    startTime: 3702.12,
    person: 'Phillip',
    text: ' you know, a search engine optimisation engine, you know, behind it, when you look at it from a'
  },
  {
    startTime: 3705.88,
    person: 'Phillip',
    text: ' recruiter point of view, LinkedIn has a variety of different products for recruiters, you have to'
  },
  { startTime: 3710.92, person: 'Phillip', text: ' also be aware of that.' },
  {
    startTime: 3711.94,
    person: 'Phillip',
    text: " So you've got some light recruiter light, you've got some more advanced recruiter products, but then you got the mammoth, which is the corporate recruitment account, which gives you the full access to all the different tools."
  },
  {
    startTime: 3722.12,
    person: 'Phillip',
    text: ' Now, the first thing you can do just to really open up is be open to work.'
  },
  {
    startTime: 3727.38,
    person: 'Phillip',
    text: " Now, whether you want to have the badge on your photo, that's, that's a separate discussion."
  },
  {
    startTime: 3731.66,
    person: 'Phillip',
    text: " But open to work, specify what work you're looking for."
  },
  {
    startTime: 3734.68,
    person: 'Phillip',
    text: " And you know, the more elaborate you are in it, the more you open up, the more you'll be searchable."
  },
  {
    startTime: 3739.3,
    person: 'Phillip',
    text: " But that's discreetly hidden away only for recruiters who have the licence to see that."
  },
  {
    startTime: 3744.6,
    person: 'Phillip',
    text: " I mean, I'd love to show you what the recruiter corporate account looks like."
  },
  {
    startTime: 3748.72,
    person: 'Phillip',
    text: ' Maybe, maybe I can show you some screenshots, maybe later, we can have a chat again, maybe from the recruiter side, how we search and I could do a search life search or something.'
  },
  {
    startTime: 3758.48,
    person: 'Phillip',
    text: " But we we see as recruiters in the panel, when we're doing a filter for specific locations, specific role, you know, boolean search, all the keywords, you know, all stuff like that."
  },
  { startTime: 3768.86, person: 'Phillip', text: ' We then see options who is open to work.' },
  {
    startTime: 3772.62,
    person: 'Phillip',
    text: " And you know, I can have, let's say 1000 people in Poland looking for, you know, Salesforce developers in Poland, or, you know, 2000 developers in Poland, then I can see a little button saying, well, there's 230 open to work."
  },
  {
    startTime: 3790.18,
    person: 'Phillip',
    text: " So for me, before I go really massively hard in the passive candidates, I might say, Okay, this is an urgent role, let's go and see who's open to work."
  },
  {
    startTime: 3798.72,
    person: 'Phillip',
    text: ' And I can filter those who are declared themselves open to work.'
  },
  {
    startTime: 3802.74,
    person: 'Phillip',
    text: ' And some people forget to switch that button off once they found a new job, or, you know, decided not to be looking.'
  },
  {
    startTime: 3808.48,
    person: 'Phillip',
    text: " But it's rare, it's more often they are actively searching."
  },
  {
    startTime: 3812.64,
    person: 'Phillip',
    text: " And you know, there's a lot of filters, you get a lot of information you get from them, they're going to be more open to connect with you and discuss if you're approaching them with the right role."
  },
  {
    startTime: 3821.4,
    person: 'Phillip',
    text: " So that's another thing to be aware about, be open to work, whether you want to have the badge, well, that's a different story, right?"
  },
  {
    startTime: 3829.22,
    person: 'Phillip',
    text: " But yeah, you can be discreetly open to work so that your employer doesn't see it either as well."
  },
  { startTime: 3834.12, person: 'Phillip', text: " So that's the what the design behind it." },
  {
    startTime: 3837.12,
    person: 'Karol',
    text: " I mean, I heard already about the badge that some people some people consider the badge a sign of desperation, and they don't want to talk to desperate people."
  },
  { startTime: 3851.56, person: 'Karol', text: " Look, it's a perspective." },
  {
    startTime: 3853.18,
    person: 'Karol',
    text: " It's not something that I would say it's it's a valid point of view."
  },
  {
    startTime: 3858.28,
    person: 'Karol',
    text: " I think it's a damaging point of view for a lot of people."
  },
  {
    startTime: 3861.26,
    person: 'Karol',
    text: " But that's one of the perspectives I've seen while discussing these topics with others."
  },
  { startTime: 3868.48, person: 'Phillip', text: ' Look, I get why people use it.' },
  { startTime: 3871.28, person: 'Phillip', text: " And it's fine if you do." },
  {
    startTime: 3874.48,
    person: 'Phillip',
    text: ' But if you think slapping the green banner, you know, on your photo is going to change your life.'
  },
  {
    startTime: 3879.56,
    person: 'Phillip',
    text: ' And suddenly, recruiters are going to pull into your inbox.'
  },
  { startTime: 3882.8, person: 'Phillip', text: ' Think again, right?' },
  {
    startTime: 3884.18,
    person: 'Phillip',
    text: " The algorithm isn't your friend on LinkedIn, your network is."
  },
  {
    startTime: 3888.4,
    person: 'Phillip',
    text: ' Yeah, be visible, be specific, you know, and show up with value.'
  },
  {
    startTime: 3893.62,
    person: 'Phillip',
    text: " You know, update your LinkedIn, if you haven't updated for 10 years, and well, don't be surprised, you're not getting any engagement, right?"
  },
  {
    startTime: 3901.22,
    person: 'Phillip',
    text: " I've hired candidates who have never used it, right?"
  },
  {
    startTime: 3905.72,
    person: 'Phillip',
    text: " Like the open to work thing, I've hired them, I've connected."
  },
  {
    startTime: 3909.34,
    person: 'Phillip',
    text: " And, you know, I've passed on candidates who wore it like a badge of honour, in a way, right?"
  },
  { startTime: 3914.88, person: 'Phillip', text: ' But they just had no direction.' },
  { startTime: 3916.76, person: 'Phillip', text: ' Their profiles were unclear.' },
  {
    startTime: 3918.06,
    person: 'Phillip',
    text: " You know, am I going to waste my time speaking to someone I'm not sure about?"
  },
  { startTime: 3921.56, person: 'Phillip', text: ' You know, no.' },
  { startTime: 3923.34, person: 'Phillip', text: ' I value my time as well, right?' },
  { startTime: 3925.28, person: 'Phillip', text: ' So, this is a personal decision to make.' },
  {
    startTime: 3928.86,
    person: 'Phillip',
    text: " I say, yeah, people may think you're desperate and everything."
  },
  { startTime: 3932.06, person: 'Phillip', text: " I don't see that as desperate." },
  {
    startTime: 3933.18,
    person: 'Phillip',
    text: " I say straight away, oh, great, I can engage if it's the right person with the right skills, right?"
  },
  { startTime: 3937.2, person: 'Phillip', text: ' But I totally get it.' },
  {
    startTime: 3940.52,
    person: 'Phillip',
    text: " You know, I've often been in a situation where, shit, maybe I should start looking for work."
  },
  { startTime: 3944.9, person: 'Phillip', text: ' What am I going to do?' },
  { startTime: 3945.82, person: 'Phillip', text: ' You know?' },
  {
    startTime: 3946.98,
    person: 'Phillip',
    text: " I probably would go loud if I'm looking for work."
  },
  { startTime: 3949.98, person: 'Phillip', text: ' I would go loud with everything.' },
  { startTime: 3951.34, person: 'Phillip', text: ' Turn everything on for the start.' },
  {
    startTime: 3953.34,
    person: 'Phillip',
    text: " Make sure the message gets out to as many people as possible that I'm looking for work."
  },
  {
    startTime: 3957.72,
    person: 'Phillip',
    text: ' And I would be very, very dependent on my network to help me out.'
  },
  {
    startTime: 3964.38,
    person: 'Phillip',
    text: " And I would be assured that I would, you know, follow up on every single person I've worked with in the past to see if they can help me out."
  },
  { startTime: 3971.18, person: 'Phillip', text: ' The networking aspect on LinkedIn is key.' },
  {
    startTime: 3974.76,
    person: 'Phillip',
    text: " If you just turn on your badge that you're looking for work and now you're going to sit back and wait for the recruiters to come in, you're living a dream."
  },
  {
    startTime: 3983.14,
    person: 'Phillip',
    text: " That's unless maybe some very unique CTA in a very particular area, right?"
  },
  {
    startTime: 3988.84,
    person: 'Karol',
    text: ' Yeah, because this is putting that open to work is not the only thing that will make you searchable, right?'
  },
  {
    startTime: 3999.06,
    person: 'Karol',
    text: " Because it's the somewhere in the second, first step of a search of sourcing the candidate when you look at open to work."
  },
  {
    startTime: 4007.22,
    person: 'Karol',
    text: ' The first thing is that you have to have your profile pop up in the search.'
  },
  {
    startTime: 4013.94,
    person: 'Karol',
    text: ' So, that means that you need to have keywords in your profile that would align with the job you want.'
  },
  { startTime: 4022.58, person: 'Phillip', text: ' And ideally more than three.' },
  {
    startTime: 4024.3,
    person: 'Phillip',
    text: ' I think the minimum is three, but ideally more than five really with specific skills, specific technologies and areas.'
  },
  {
    startTime: 4030.76,
    person: 'Phillip',
    text: " So, it's just a keyword search engine approach, you know."
  },
  {
    startTime: 4037.96,
    person: 'Phillip',
    text: ' And on LinkedIn, recommendations has a huge value in terms of positioning you as well in search.'
  },
  {
    startTime: 4044.6,
    person: 'Phillip',
    text: ' So, I think the minimum was seven recommendations that really position you higher.'
  },
  { startTime: 4049.18, person: 'Phillip', text: " Oh, that's interesting." },
  { startTime: 4051.8, person: 'Phillip', text: " That I didn't know." },
  { startTime: 4053.1, person: 'Phillip', text: ' Yep.' },
  { startTime: 4053.52, person: 'Phillip', text: ' Yep.' },
  {
    startTime: 4053.84,
    person: 'Phillip',
    text: " So, that's the algorithm on LinkedIn because it sees you as a valuable contributor or a valuable asset for many who've recommended you, right?"
  },
  { startTime: 4063.3, person: 'Phillip', text: ' So...' },
  {
    startTime: 4063.9,
    person: 'Phillip',
    text: ' Oh, does it matter when those recommendations were given?'
  },
  { startTime: 4068.56, person: 'Phillip', text: " That I can't answer you." },
  {
    startTime: 4070.38,
    person: 'Phillip',
    text: " I would say there's a few fantastic LinkedIn researchers who probably could answer that, but I would say, you know, it's good to..."
  },
  {
    startTime: 4079.32,
    person: 'Phillip',
    text: " You know, I'm a fan of collecting testimonials references constantly because people often ask me, Phil, when's the best time to ask for referrals?"
  },
  {
    startTime: 4089.18,
    person: 'Phillip',
    text: " Well, you know, the worst time is when you're leaving, yeah?"
  },
  { startTime: 4092.26, person: 'Phillip', text: ' Because...' },
  {
    startTime: 4092.62,
    person: 'Phillip',
    text: " Or when you're planning to look for a job, right?"
  },
  { startTime: 4094.5, person: 'Phillip', text: ' Quietly.' },
  {
    startTime: 4095.3,
    person: 'Phillip',
    text: " Because, you know, it's sending signals that you're looking, right?"
  },
  {
    startTime: 4098,
    person: 'Phillip',
    text: " Say you're at work, you're enjoying your job, you're not thinking about looking for work, say you can ask your customer, you know, hey, I really enjoyed this experience, you know, it's come to an end, would you be kind enough to write a recommendation?"
  },
  {
    startTime: 4109.819,
    person: 'Phillip',
    text: " Even better, you write them one and then ask them to write you one if they don't do it automatically."
  },
  { startTime: 4116.24, person: 'Phillip', text: ' Give is gain, right?' },
  { startTime: 4117.319, person: 'Phillip', text: ' So, you give and then expect something back.' },
  { startTime: 4120.96, person: 'Phillip', text: ' But, yeah, very, very important thing.' },
  {
    startTime: 4122.779,
    person: 'Phillip',
    text: ' I really spend a lot of time when viewing profiles, like, specifically, I do spend a time on references and, you know, the testimonials on LinkedIn.'
  },
  {
    startTime: 4131.74,
    person: 'Phillip',
    text: ' The more, you know, recent, of course, the better.'
  },
  {
    startTime: 4135.3,
    person: 'Phillip',
    text: " You know, if they are a few or ten years old, then it's not going to be that relevant, I'm not going to probably read them either."
  },
  {
    startTime: 4141.34,
    person: 'Phillip',
    text: ' So, yeah, and when you see people with tens or, you know, dozens of recommendations, it also makes you wonder, you know?'
  },
  {
    startTime: 4151.96,
    person: 'Karol',
    text: ' Now, you made me question myself, how many do I have on my profile?'
  },
  { startTime: 4157.08, person: 'Karol', text: " I'm about to check." },
  {
    startTime: 4159.2,
    person: 'Phillip',
    text: " Check and whilst you're at it, do one thing too, what I check too."
  },
  {
    startTime: 4163.24,
    person: 'Phillip',
    text: " And that's, one thing is having with testimonials on your LinkedIn, the other thing, I can see how many you gave."
  },
  {
    startTime: 4170.26,
    person: 'Phillip',
    text: " And for me, if you've got a balancing act, that's also a good sign about you as a person."
  },
  {
    startTime: 4174.92,
    person: 'Phillip',
    text: " But that's just me being a little bit, maybe, psycho."
  },
  { startTime: 4179.02, person: 'Karol', text: " Right, that's not a one-to-one ratio though." },
  { startTime: 4184.279, person: 'Karol', text: ' Yeah, all right.' },
  { startTime: 4185.06, person: 'Karol', text: ' Yeah, okay.' },
  {
    startTime: 4185.64,
    person: 'Karol',
    text: " That's something to fix then, to give out more recommendations to various people on stuff."
  },
  { startTime: 4191.68, person: 'Karol', text: " Yeah, that's." },
  {
    startTime: 4192.12,
    person: 'Phillip',
    text: " Yeah, but I'd say definitely your header, your header is an important element of your LinkedIn, because your header is actually searchable also on Google."
  },
  { startTime: 4200.78, person: 'Phillip', text: ' Oh, yeah.' },
  {
    startTime: 4202.14,
    person: 'Phillip',
    text: " So, if you put in, you know, there was a time, I don't know if it still works, but in Google, if you put in, let's say, best recruits, Salesforce recruiter in Poland, I was so proud that I'd be in the top 10, you know, on searches on, you know, companies, partners, and then suddenly a LinkedIn profile of me."
  },
  {
    startTime: 4219.96,
    person: 'Phillip',
    text: " I don't know, probably it's not the same game at the moment."
  },
  { startTime: 4222.98, person: 'Karol', text: " So, I'll pop my profile on screen then." },
  {
    startTime: 4226.2,
    person: 'Karol',
    text: ' So, looking at my profile, the header, you mean this particular part?'
  },
  { startTime: 4230.2, person: 'Phillip', text: ' Yes, yes, that one.' },
  { startTime: 4231.82, person: 'Phillip', text: " That's searchable." },
  {
    startTime: 4233.18,
    person: 'Phillip',
    text: ' And of course, the keyword section in the about section is also very important.'
  },
  { startTime: 4237.5, person: 'Phillip', text: " It's your space." },
  {
    startTime: 4239.52,
    person: 'Phillip',
    text: ' A few years back, LinkedIn increased, you know, the number of words and, you know, letters you can add to that about section.'
  },
  { startTime: 4250.16, person: 'Phillip', text: " It's your elevator pitch, right?" },
  {
    startTime: 4251.9,
    person: 'Phillip',
    text: " It's your, you know, who are you and refresh it, read it through sometimes, you know."
  },
  {
    startTime: 4256.84,
    person: 'Phillip',
    text: " If you're looking for work, ask your closest ones, you know, when you read this, is it me?"
  },
  { startTime: 4261.52, person: 'Phillip', text: ' Is there something missing?' },
  { startTime: 4262.84, person: 'Phillip', text: " Because it's really tough." },
  {
    startTime: 4264.2,
    person: 'Phillip',
    text: " I mean, I've seen tens of thousands of CVs in my lifetime, or probably more, right?"
  },
  {
    startTime: 4271.84,
    person: 'Phillip',
    text: ' To be honest with you, I have the shittiest CV ever.'
  },
  {
    startTime: 4275.64,
    person: 'Phillip',
    text: ' Whenever anyone would ask me for my CV, I was like, oh, PDF version of my LinkedIn, not be enough.'
  },
  {
    startTime: 4283.08,
    person: 'Phillip',
    text: " You know, I really avoid, and that's the thing."
  },
  {
    startTime: 4285.22,
    person: 'Phillip',
    text: ' It was like, shoemakers wears no shoes, right?'
  },
  { startTime: 4287.98, person: 'Phillip', text: ' So, the Polish, I think, expression.' },
  {
    startTime: 4291.8,
    person: 'Phillip',
    text: ' And that goes with many very talented people out there, you know.'
  },
  { startTime: 4296.46, person: 'Phillip', text: " They're great at what they do." },
  { startTime: 4297.84, person: 'Phillip', text: ' They might be shit at writing CVs.' },
  {
    startTime: 4299.5,
    person: 'Phillip',
    text: " And they're the ones who miss out big time in the massive corporate ATS systems, right?"
  },
  { startTime: 4306.06, person: 'Phillip', text: ' Which is, yeah, another world of hacking.' },
  {
    startTime: 4308.9,
    person: 'Karol',
    text: " Another piece of advice that I learned, thanks to Gabby, who's, she's unfortunately didn't join us today because of her condition."
  },
  {
    startTime: 4318.66,
    person: 'Karol',
    text: " We'll double back and have another session with her somewhere in October or November."
  },
  { startTime: 4325.34, person: 'Karol', text: " We'll see to that." },
  {
    startTime: 4328.26,
    person: 'Karol',
    text: " But one thing that I learned through her posts on LinkedIn, because she's very vocal about Boolean searches and how people actually do not understand how to use Boolean searches, is that a lot of recruiters actually tick the option that they're searching for somebody that has a current role, and then the keywords for that particular role."
  },
  {
    startTime: 4349.94,
    person: 'Karol',
    text: " Now, if you became unemployed, and you're searching for a job, and on LinkedIn, you update your last position as no longer current, you're basically become unsearchable."
  },
  { startTime: 4364.8, person: 'Phillip', text: ' Yep.' },
  { startTime: 4366.32, person: 'Phillip', text: ' Yep.' },
  { startTime: 4366.96, person: 'Phillip', text: " That's a great example." },
  { startTime: 4369.14, person: 'Phillip', text: " And you're absolutely right." },
  {
    startTime: 4370.94,
    person: 'Phillip',
    text: ' A lot of recruiters do that via current location, current position, you know, current companies, or previous companies.'
  },
  {
    startTime: 4378.76,
    person: 'Phillip',
    text: " So there's a lot of filters you can add to a search, right, and to a Boolean search."
  },
  { startTime: 4382.42, person: 'Phillip', text: " And yeah, it's absolutely spot on." },
  { startTime: 4387.51, person: 'Phillip', text: " Yeah, and that's something to be aware of." },
  {
    startTime: 4389.49,
    person: 'Phillip',
    text: " So if you are unemployed, maybe the thing of actually sharing that since, let's say you're unemployed since June or May, and you might say, so since June, or actually, since May, I'm actively searching for jobs in this space, this space, or an enterprise integration architect looking for his next gig as a title, right?"
  },
  { startTime: 4413.73, person: 'Phillip', text: " Maybe that's a solution." },
  {
    startTime: 4415.11,
    person: 'Phillip',
    text: " That's also, you know, you got to be creative about it."
  },
  { startTime: 4417.77, person: 'Phillip', text: ' And okay.' },
  {
    startTime: 4419.07,
    person: 'Phillip',
    text: ' Gabby is the queen of Boolean, no question about it.'
  },
  { startTime: 4421.97, person: 'Phillip', text: ' She has some fantastic tips.' },
  { startTime: 4424.21, person: 'Karol', text: " That's true." },
  {
    startTime: 4424.83,
    person: 'Karol',
    text: ' But that means that there are two ways about it.'
  },
  {
    startTime: 4426.93,
    person: 'Karol',
    text: " So either you don't put your previous employment as ended on LinkedIn, and just keep it as present, current, or put your dream job as your current employment."
  },
  {
    startTime: 4438.85,
    person: 'Karol',
    text: " So create a new record for the time you're unemployed and looking for a job."
  },
  {
    startTime: 4443.73,
    person: 'Karol',
    text: ' And that might work as well, because then you put exactly those keywords that you want to get.'
  },
  {
    startTime: 4449.55,
    person: 'Karol',
    text: " But then again, that's up to bias, because in IT, well, from a perspective of a developer, it's a little bit easier, because you're a developer, you put in the tech, you're an architect, whatever that may be."
  },
  {
    startTime: 4468.15,
    person: 'Karol',
    text: " But if you're an architect, there are so many different architect titles, and they are never cohesive."
  },
  {
    startTime: 4476.17,
    person: 'Karol',
    text: ' Between different companies, they just are named differently.'
  },
  {
    startTime: 4481.11,
    person: 'Karol',
    text: " My perception of myself, I'm an integration architect, right?"
  },
  {
    startTime: 4485.61,
    person: 'Karol',
    text: " Because that's my technical specialisation, my technical niche."
  },
  {
    startTime: 4489.53,
    person: 'Karol',
    text: " But I've been called a staff engineer, a principal engineer, a solutions architect, an enterprise architect, a family member."
  },
  { startTime: 4500.87, person: 'Karol', text: ' Family member, yeah, precisely.' },
  {
    startTime: 4504.09,
    person: 'Karol',
    text: " I'm curious to our viewers, our listeners here, maybe you guys can comment on all the different names that you had over your careers that you perceived as yours, how you would name yourself, and how the companies actually perceived you, and what titles did they give you."
  },
  {
    startTime: 4526.33,
    person: 'Karol',
    text: " So just to be frank, on my current employment contract, it's a stated software engineer."
  },
  { startTime: 4534.07, person: 'Karol', text: " It's a very generic contract in that sense." },
  {
    startTime: 4537.21,
    person: 'Karol',
    text: " So a standardised contract, so they don't put a specific role, because the scope of responsibilities is discussed further down the line, not within that."
  },
  {
    startTime: 4546.83,
    person: 'Phillip',
    text: ' Yeah, but Karel, you can change the job title on LinkedIn to make it relevant to what you specialise in.'
  },
  {
    startTime: 4555.77,
    person: 'Phillip',
    text: " The fact that you're contractually assigned as a software engineer doesn't, and I've had so many conversations with people around this, like, should I really?"
  },
  {
    startTime: 4565.13,
    person: 'Phillip',
    text: " I mean, oh my goodness, my contract, it says I'm a software engineer, but you're a Salesforce developer, right?"
  },
  {
    startTime: 4571.79,
    person: 'Phillip',
    text: ' Yeah, so just mark it as a Salesforce developer.'
  },
  { startTime: 4574.19, person: 'Karol', text: " Who cares about what's on the contract?" },
  { startTime: 4575.97, person: 'Phillip', text: " It's your profile, your CV." },
  { startTime: 4578.19, person: 'Phillip', text: ' No one will take you to court for your CV.' },
  {
    startTime: 4580.73,
    person: 'Phillip',
    text: ' They will take you to court if you lied on your CV about certain experience or education, and you require that for practising whatever you do.'
  },
  {
    startTime: 4588.63,
    person: 'Phillip',
    text: ' But apart from that, CV is not a legally binding document, or your LinkedIn profile.'
  },
  {
    startTime: 4594.17,
    person: 'Phillip',
    text: " It's your public space to promote yourself, to share."
  },
  { startTime: 4598.67, person: 'Phillip', text: " It's your business card, basically." },
  {
    startTime: 4600.67,
    person: 'Phillip',
    text: " It's your business card, yeah, your digital business card."
  },
  { startTime: 4602.91, person: 'Phillip', text: " And let's not beat around the bush." },
  {
    startTime: 4605.75,
    person: 'Phillip',
    text: " It's the number one place to be looking for work in our sector in IT, but it's also a fantastic platform for, you know, connecting with people, for finding business, for selling services, and for building relationships and finding valuable content."
  },
  { startTime: 4624.95, person: 'Karol', text: ' A curious question, then.' },
  {
    startTime: 4627.09,
    person: 'Karol',
    text: ' How often do you find that people actually lie on their CVs and LinkedIn profiles?'
  },
  { startTime: 4632.95, person: 'Phillip', text: ' You know what?' },
  { startTime: 4633.65, person: 'Phillip', text: ' I used to do that.' },
  {
    startTime: 4634.77,
    person: 'Phillip',
    text: " I used to spend a lot of time comparing someone's CVs to LinkedIn and pick out all the little mistakes, you know, that, oh, you said you ended in June this year, but on your LinkedIn, it says differently."
  },
  { startTime: 4645.89, person: 'Phillip', text: " But honestly, I don't give a damn." },
  { startTime: 4647.77, person: 'Phillip', text: " I don't give a damn anymore." },
  {
    startTime: 4648.99,
    person: 'Phillip',
    text: " For me, it's all around competencies and skills."
  },
  {
    startTime: 4652.75,
    person: 'Phillip',
    text: " Actually, when I work with third people, CV is, let's say, an element."
  },
  { startTime: 4655.65, person: 'Phillip', text: " It's not always an element." },
  {
    startTime: 4656.91,
    person: 'Phillip',
    text: " You know, I've got a lot of hiring managers I work with saying, Phil, do we need CVs?"
  },
  { startTime: 4661.59, person: 'Phillip', text: ' Absolutely.' },
  { startTime: 4662.33, person: 'Phillip', text: " I'm more than happy not to." },
  {
    startTime: 4663.41,
    person: 'Phillip',
    text: " It's just a LinkedIn profile, if they've got one."
  },
  { startTime: 4665.45, person: 'Phillip', text: ' If not, like a gelhead profile.' },
  { startTime: 4667.29, person: 'Phillip', text: " In some cases, in my case, it's Salesforce." },
  {
    startTime: 4669.57,
    person: 'Phillip',
    text: " It's the problem I think we have to validate certifications and accreditations and stuff."
  },
  {
    startTime: 4674.21,
    person: 'Phillip',
    text: ' And just, you know, my experience, my notes shared after speaking and introducing myself.'
  },
  {
    startTime: 4680.33,
    person: 'Phillip',
    text: ' And the focus is definitely, of course, on the skill set.'
  },
  {
    startTime: 4682.83,
    person: 'Phillip',
    text: ' And nowadays, even more than ever, is specific product knowledge and stuff.'
  },
  {
    startTime: 4686.55,
    person: 'Phillip',
    text: " But it's the softest approach, depending on the role and, you know, the challenge that this person will face in this project."
  },
  {
    startTime: 4693.29,
    person: 'Phillip',
    text: " Because very often, we're now hiring for utilisation and not hiring for competencies, just competencies, right?"
  },
  { startTime: 4699.29, person: 'Phillip', text: ' Right.' },
  {
    startTime: 4699.95,
    person: 'Karol',
    text: ' Now, given skill sets, because I remember from our conversations when I was actually looking for a job, how to best show your skills?'
  },
  {
    startTime: 4710.29,
    person: 'Karol',
    text: ' Because as far as I recall from our conversation, recruiters are not able to search through certificates on LinkedIn.'
  },
  {
    startTime: 4718.45,
    person: 'Karol',
    text: " So you cannot confirm by Boolean search to find those people that have a specific Salesforce certificate or ISTQB or, I don't know, Scrum org certificate or whatever else that is required for the job."
  },
  {
    startTime: 4733.95,
    person: 'Karol',
    text: " Which basically means that while that section is there, for sourcing, it's useless."
  },
  {
    startTime: 4739.95,
    person: 'Karol',
    text: ' For further discussion and reviewing the profile might prove useful, but first, you need to pop up in the search.'
  },
  {
    startTime: 4746.33,
    person: 'Karol',
    text: " So if we're searching for specific competencies confirmed by a certificate, how to best show those in your profile?"
  },
  { startTime: 4760.1, person: 'Phillip', text: ' Yeah.' },
  {
    startTime: 4760.36,
    person: 'Phillip',
    text: " So the About section is a great place to update your accreditations if they are, let's say, popular and relevant in your industry."
  },
  {
    startTime: 4769.47,
    person: 'Phillip',
    text: " So as an example of Salesforce, it's very often in people's headers, they'll say 15 times certified Salesforce recruiter, Salesforce developer or consultant, right?"
  },
  {
    startTime: 4778.92,
    person: 'Phillip',
    text: ' But in the About section, they can specify exactly which ones.'
  },
  {
    startTime: 4783.2,
    person: 'Phillip',
    text: " Or, of course, in my world, because it's a niche market, Salesforce, I use LinkedIn as often as I use Trailblazer, right?"
  },
  { startTime: 4793.34, person: 'Phillip', text: ' So Trailhead, sorry.' },
  {
    startTime: 4794.82,
    person: 'Phillip',
    text: " So I jump straight to Trailhead and I'll find them on Trailhead if they have a public profile."
  },
  {
    startTime: 4801.68,
    person: 'Phillip',
    text: " And on top of that, I've discovered some wicked tools that's great Trailhead, and I can search people via certifications in specific geographic locations."
  },
  { startTime: 4812.34, person: 'Phillip', text: ' So yeah, some cool stuff out there.' },
  { startTime: 4813.9, person: 'Karol', text: ' Okay.' },
  {
    startTime: 4814.18,
    person: 'Karol',
    text: ' So for those people who are not in the Salesforce ecosystem, the Trailhead is a place where there is a lot of self-based training for Salesforce topics, Salesforce products, including also MuleSoft for the integration space.'
  },
  {
    startTime: 4832.06,
    person: 'Karol',
    text: ' This is also where you keep your certificates assigned to your account.'
  },
  {
    startTime: 4837.28,
    person: 'Karol',
    text: ' And if you would look at it in a more generic way, this is basically a little bit like an equivalent of Credly.'
  },
  {
    startTime: 4846.48,
    person: 'Karol',
    text: ' Credly issuing the badges and you have a profile on Credly where you store all your badges and certificates you get from various sources.'
  },
  {
    startTime: 4853.66,
    person: 'Karol',
    text: " I myself, well, I do have a Trailblazer account, but I'm not that tied to the Salesforce ecosystem."
  },
  {
    startTime: 4860.64,
    person: 'Karol',
    text: " So I do have some certificates there, but a lot of my certificates are basically badges on Credly from companies like O'Reilly, Solace, and some more."
  },
  {
    startTime: 4871.78,
    person: 'Karol',
    text: ' I even issue badges like Credly through Bridging the Gap.'
  },
  {
    startTime: 4878.1,
    person: 'Karol',
    text: ' We utilise Open Badges 3.0 and currently my partner in crime, Radek, is working on getting those badges online on our site so that those badges that we already issued are available there and can be imported to such a profile.'
  },
  {
    startTime: 4894.12,
    person: 'Karol',
    text: ' So this is like the Trailblazers is the equivalent of these kinds of licences, badges issued publicly that are verifiable with the issuer through sites like Credly.'
  },
  {
    startTime: 4908.12,
    person: 'Phillip',
    text: ' Very, very specific for the Salesforce ecosystem.'
  },
  {
    startTime: 4911.22,
    person: 'Phillip',
    text: " And the cool thing about it is also if I can't get hold of someone via LinkedIn, I can approach them."
  },
  {
    startTime: 4918.2,
    person: 'Phillip',
    text: ' If I find them, I usually will, if I find them on Trailhead, I can directly send them a message via that platform as well.'
  },
  {
    startTime: 4925.46,
    person: 'Phillip',
    text: ' So I know it will go into their valid email inbox.'
  },
  {
    startTime: 4928.86,
    person: 'Phillip',
    text: " They'll get immediately a notification that I'm in touch with."
  },
  {
    startTime: 4930.96,
    person: 'Phillip',
    text: ' So I give myself- That makes your life easier.'
  },
  { startTime: 4933.64, person: 'Phillip', text: ' It does.' },
  {
    startTime: 4934.42,
    person: 'Phillip',
    text: " Sometimes if I'm desperate to get hold of one particular person, then I'll try different angles and it can be very fruitful sometimes."
  },
  {
    startTime: 4943.54,
    person: 'Phillip',
    text: " But again, if they don't want to speak to me, they're not going to speak to me."
  },
  { startTime: 4946.2, person: 'Phillip', text: ' So I also live with that.' },
  { startTime: 4947.96, person: 'Karol', text: ' All right.' },
  { startTime: 4949.14, person: 'Karol', text: ' Okay.' },
  {
    startTime: 4949.38,
    person: 'Karol',
    text: " Philip, as a recruiter, the mediator between parties, between the candidates and the hiring managers, the companies, can you shed some light and let's humanise a little bit the role of a recruiter?"
  },
  { startTime: 4961.9, person: 'Karol', text: ' Because all of us are only human.' },
  {
    startTime: 4964.46,
    person: 'Karol',
    text: ' We make mistakes, we have our quirks, we have our problems.'
  },
  { startTime: 4968.14, person: 'Karol', text: ' And that always shows in our work.' },
  {
    startTime: 4971.26,
    person: 'Karol',
    text: ' We were already distinguishing the in-house recruiter and the agency recruiter, and then a distinction on niche recruiter versus corporate mass recruiter.'
  },
  {
    startTime: 4983.98,
    person: 'Karol',
    text: ' So can you tell us more about these kinds of distinctions?'
  },
  { startTime: 4990.62, person: 'Karol', text: " Because these are two separate axes, let's say." },
  { startTime: 4994.36, person: 'Karol', text: ' Agency in-house versus mass or niche.' },
  { startTime: 4998.26, person: 'Karol', text: " You're obviously right now in a niche." },
  {
    startTime: 5001.14,
    person: 'Karol',
    text: " As far as I know, you're also working both as agency and in-house at the moment, right?"
  },
  { startTime: 5008.06, person: 'Karol', text: ' Mm-hmm.' },
  { startTime: 5008.52, person: 'Karol', text: ' Yeah.' },
  { startTime: 5009.36, person: 'Karol', text: ' Tell us how that looks like.' },
  {
    startTime: 5011.38,
    person: 'Karol',
    text: ' Because that will give some people most likely a little bit more light into how to work with recruiters or what to expect from recruiters and how to chat with them.'
  },
  { startTime: 5022.38, person: 'Karol', text: ' What would be the process and differences?' },
  { startTime: 5025.36, person: 'Phillip', text: ' Yeah, I validate recruiters myself.' },
  {
    startTime: 5028.7,
    person: 'Phillip',
    text: " I do that, I wouldn't say for fun, but it's also you got to see your competition, right?"
  },
  { startTime: 5034.52, person: 'Phillip', text: ' You got to measure yourself up sometimes.' },
  {
    startTime: 5036.92,
    person: 'Phillip',
    text: " And it's a good exercise for candidates as well."
  },
  {
    startTime: 5041.18,
    person: 'Phillip',
    text: ' You need to validate the recruiters that are reaching out to you.'
  },
  {
    startTime: 5044.28,
    person: 'Phillip',
    text: " If they've got an interesting offer you want to prepare, then I'd definitely say look into, first of all, are they in-house?"
  },
  {
    startTime: 5052.28,
    person: 'Phillip',
    text: " Are they a big corporate, let's say, outsourcing company?"
  },
  {
    startTime: 5056.6,
    person: 'Phillip',
    text: " They're also probably most likely looking for talent for a specific project."
  },
  { startTime: 5060.64, person: 'Phillip', text: ' But one is just be aware of that.' },
  { startTime: 5062.66, person: 'Phillip', text: ' Knowledge is power here.' },
  {
    startTime: 5063.78,
    person: 'Phillip',
    text: ' Straight away you can kind of set yourself, set certain expectations, etcétera.'
  },
  { startTime: 5068.04, person: 'Phillip', text: ' Two is I look at their profiles as well.' },
  { startTime: 5070.54, person: 'Phillip', text: ' I look at their activity first.' },
  { startTime: 5072.94, person: 'Phillip', text: ' So are they active?' },
  {
    startTime: 5074.54,
    person: 'Phillip',
    text: ' And if so, what kind of activity do they share?'
  },
  { startTime: 5076.68, person: 'Phillip', text: ' Is it just job vacancies?' },
  {
    startTime: 5077.9,
    person: 'Phillip',
    text: " Oh, I'm hiring this, I'm hiring this, and then you can, okay, see a pattern."
  },
  {
    startTime: 5082.18,
    person: 'Phillip',
    text: ' Are they hiring for specific areas or are they doing a lot of different things, right?'
  },
  { startTime: 5087.62, person: 'Phillip', text: ' Then you can also start painting a picture.' },
  {
    startTime: 5089.34,
    person: 'Phillip',
    text: ' Is this a specialist in a particular area that I focus on or am I going to be speaking to a generic recruiter?'
  },
  {
    startTime: 5094.86,
    person: 'Phillip',
    text: ' So that also sets you up to prepare for the call.'
  },
  {
    startTime: 5097.18,
    person: 'Phillip',
    text: " So if it's a generic recruiter, then you need to be a little bit more, stop using that jargon that everyone's used to, let's say in your area of expertise, and numb it down a little bit so that you can, I mean, it's not easy actually."
  },
  {
    startTime: 5114.9,
    person: 'Phillip',
    text: ' One of my favourite things is, I think it was Einstein who came up with it, right?'
  },
  {
    startTime: 5119.36,
    person: 'Phillip',
    text: " So it's like if you can't explain what you do to a six-year-old, you don't know what you're doing yourself, right?"
  },
  { startTime: 5125.12, person: 'Phillip', text: " So it's the same thing." },
  { startTime: 5126.82, person: 'Phillip', text: " It's the kind of same story, right?" },
  {
    startTime: 5128.92,
    person: 'Phillip',
    text: " So be aware of who you're addressing, let's say your pitch or who you're introducing yourselves to, even if they're the one reaching out, yeah?"
  },
  {
    startTime: 5135.56,
    person: 'Karol',
    text: ' Adjust the language to your audience, basically.'
  },
  { startTime: 5138.54, person: 'Phillip', text: ' Yeah, absolutely.' },
  {
    startTime: 5140.38,
    person: 'Phillip',
    text: " You've got to be conscious in here because if you go in talking too much jargon, they're not going to be able to take the notes because they don't have a clue what you're talking about, right?"
  },
  {
    startTime: 5149.8,
    person: 'Phillip',
    text: ' And I mean, maybe in the era now of AI, which is taking notes and stuff, you know, that might be a little bit more helpful for them.'
  },
  {
    startTime: 5155.94,
    person: 'Phillip',
    text: ' But at the end of the day, just calmly, you know, take your time, explain certain things, you know, in a way that is clear for them.'
  },
  {
    startTime: 5164.56,
    person: 'Phillip',
    text: " And at the same time, they'll appreciate it because you'll make their work a lot easier."
  },
  {
    startTime: 5168.68,
    person: 'Phillip',
    text: ' You can even do something like say, listen, I put down a little summary of my skills, my expertise, real, my strengths with some achievements.'
  },
  { startTime: 5175.34, person: 'Phillip', text: ' Would you want me to email that to you?' },
  { startTime: 5177.02, person: 'Phillip', text: " Oh my God, they'll say, oh, that's gold dust." },
  { startTime: 5178.82, person: 'Phillip', text: " That's gold dust." },
  { startTime: 5180.1, person: 'Phillip', text: " You know, they'll love it." },
  {
    startTime: 5181.12,
    person: 'Phillip',
    text: ' You know, so these little things are really cool to have as well.'
  },
  {
    startTime: 5183.56,
    person: 'Phillip',
    text: " So let's say your CV is one thing, but also let's say a list of real achievements, super projects where you had a big impact on."
  },
  {
    startTime: 5191.42,
    person: 'Phillip',
    text: " If you break that down, I mean, first of all, if you're looking for a job, that's one of the first things you should be doing, really finding key projects where you're really proud of because in interview scenarios, you're going to be asked about these examples, right?"
  },
  {
    startTime: 5204.3,
    person: 'Phillip',
    text: " So you need to also be able to visualise it, see it, you know, so it's good if you write it down, bullet point, brief, what technologies, in case of IT, you know, what are the challenges?"
  },
  { startTime: 5214.12, person: 'Phillip', text: ' How do you overcome it?' },
  { startTime: 5214.94, person: 'Phillip', text: ' Make it a bit quantifiable if you can.' },
  {
    startTime: 5216.74,
    person: 'Phillip',
    text: " So how many months or, you know, if you're responsible for a budget, then, you know, what kind of budget we're talking about, percentages, you know, it's all gold dust."
  },
  {
    startTime: 5225.3,
    person: 'Phillip',
    text: ' And, you know, of course, for a recruiter, this is going to be very helpful information.'
  },
  {
    startTime: 5230.28,
    person: 'Karol',
    text: " Yeah, that's something they can work with to showcase you better."
  },
  { startTime: 5233.92, person: 'Phillip', text: ' Absolutely.' },
  { startTime: 5234.58, person: 'Phillip', text: ' You know, you need to help you.' },
  {
    startTime: 5237.24,
    person: 'Karol',
    text: " It's, it's parallel to the work of an architect, an architect always has to adjust the language to the audience, because we have all sorts of audience."
  },
  {
    startTime: 5247.26,
    person: 'Karol',
    text: " I'm talking to a dev team, I'm going to be talking jargon, I'm talking to my manager, or a tech group of tech managers, that's going to be bullshit."
  },
  { startTime: 5254.94, person: 'Karol', text: " I'm going to be talking." },
  { startTime: 5257.94, person: 'Phillip', text: ' Just kidding.' },
  { startTime: 5259.1, person: 'Phillip', text: ' Just kidding.' },
  {
    startTime: 5259.5,
    person: 'Karol',
    text: " Yeah, I'm going to be talking to a board of directors."
  },
  { startTime: 5261.84, person: 'Karol', text: " I'm going to do the mushroom talk, right?" },
  { startTime: 5264.5, person: 'Karol', text: " So that's going to be completely different." },
  {
    startTime: 5266.64,
    person: 'Karol',
    text: " This is a running joke in some with some of my friends, it's like, when we see really bad management, we were joking that a good director is like a mushroom kept in a dark in a basement and fed with crap."
  },
  {
    startTime: 5282.96,
    person: 'Karol',
    text: " So yeah, you're gonna be gonna be talking mushroom, right?"
  },
  { startTime: 5285.96, person: 'Karol', text: ' It depends.' },
  {
    startTime: 5287,
    person: 'Karol',
    text: " And so it's with recruiters in that sense, because recruiters, most of the times are not techies."
  },
  {
    startTime: 5293.78,
    person: 'Karol',
    text: " They don't know that the lingo, they don't know the jargon, right?"
  },
  {
    startTime: 5296.84,
    person: 'Karol',
    text: ' They work with that jargon, because they need to compose the job posting quite often.'
  },
  {
    startTime: 5302.7,
    person: 'Karol',
    text: ' Sometimes they just get that job posting from the from the hiring manager or the company.'
  },
  {
    startTime: 5310.98,
    person: 'Karol',
    text: ' But that just posting might have a lot of mistakes in it.'
  },
  {
    startTime: 5314.82,
    person: 'Karol',
    text: " And they will not catch that because they're not techies."
  },
  { startTime: 5318.04, person: 'Karol', text: ' Right?' },
  {
    startTime: 5318.32,
    person: 'Phillip',
    text: " I mean, that's a very key point you just mentioned that you're absolutely right."
  },
  {
    startTime: 5323.56,
    person: 'Phillip',
    text: " The real good recruiters have the foundational knowledge of the technology that say they're specifically hiring for."
  },
  {
    startTime: 5330.56,
    person: 'Phillip',
    text: " And that's enough for them to understand what works with what what's necessary."
  },
  {
    startTime: 5335.88,
    person: 'Phillip',
    text: ' You know, how are things integrated in your case, right?'
  },
  {
    startTime: 5338.3,
    person: 'Phillip',
    text: ' What kind of you know, apis are we talking about, right?'
  },
  {
    startTime: 5341.54,
    person: 'Phillip',
    text: ' technologies used, you know, which sort of frameworks, this is the foundational stuff.'
  },
  {
    startTime: 5346.4,
    person: 'Phillip',
    text: " I'm not saying you have to go into a sophisticated technical conversation with a candidate."
  },
  {
    startTime: 5350.62,
    person: 'Phillip',
    text: " If you can, then bloody hell, you're at a different level."
  },
  { startTime: 5353.62, person: 'Phillip', text: ' Right?' },
  {
    startTime: 5354.04,
    person: 'Phillip',
    text: " I'd say, for anyone out there struggling to find a job in the tech world as a specialist, and maybe you want to consider being a specialist recruiter in that space, because you can make a fantastic living as well."
  },
  {
    startTime: 5366.34,
    person: 'Phillip',
    text: " So don't you know, if you've got the skills and you like it, then you want to be busy and you want to utilise the skills."
  },
  { startTime: 5372.12, person: 'Phillip', text: " And it's great." },
  {
    startTime: 5372.56,
    person: 'Karol',
    text: ' I mean, I worked with with recruiters before when they were hiring for the teams I was working with.'
  },
  {
    startTime: 5380.16,
    person: 'Karol',
    text: ' Quite often, I was like seeing very bad job descriptions.'
  },
  {
    startTime: 5383.62,
    person: 'Karol',
    text: ' And I was like reaching out directly to the recruiters I was working with within the company.'
  },
  { startTime: 5387.78, person: 'Karol', text: " And I said, Hey, let's talk about this." },
  {
    startTime: 5390.18,
    person: 'Karol',
    text: " I get that you don't have the context and you don't know tech precisely, let's fix your job posting."
  },
  {
    startTime: 5395.08,
    person: 'Karol',
    text: " So it actually says what it's supposed to say, instead of what it says right now, because you will not catch any fish on that."
  },
  { startTime: 5402.36, person: 'Karol', text: " That's a very wrong hook there." },
  { startTime: 5405, person: 'Karol', text: ' But this is a general comment on most people.' },
  {
    startTime: 5411.68,
    person: 'Karol',
    text: " People don't like to be pointed out that they have mistakes somewhere."
  },
  { startTime: 5416.5, person: 'Karol', text: " That's one thing." },
  {
    startTime: 5417.76,
    person: 'Karol',
    text: " Second thing, a lot of people just don't care and don't want to learn."
  },
  {
    startTime: 5421.52,
    person: 'Karol',
    text: " So you should value those that actually will ask for this kind of feedback and ask for help composing that job posting better or to explain to the customer that they're working with as recruiters to the hiring manager or the company that, Hey, you're not looking for a single person, you're looking for a whole IT department."
  },
  { startTime: 5444.08, person: 'Phillip', text: ' Yeah, I recently posted about that.' },
  {
    startTime: 5448.08,
    person: 'Phillip',
    text: ' I had an interaction with a customer looking to use my services as an agency.'
  },
  {
    startTime: 5454.84,
    person: 'Phillip',
    text: " And they went into describing in full who they're looking for."
  },
  {
    startTime: 5459.26,
    person: 'Phillip',
    text: " And my response was very bluntly put, you're not looking for a solution architect, I think you're looking for a team."
  },
  { startTime: 5469.6, person: 'Karol', text: ' Yeah, I even have that post right here.' },
  {
    startTime: 5475.04,
    person: 'Karol',
    text: " So if we zoom in a little, do you know someone who's an admin, but also codes and also designs architecture and has client facing experience?"
  },
  {
    startTime: 5487.24,
    person: 'Phillip',
    text: " Yeah, they're basically otherwise, or otherwise they're called the unicorn, right?"
  },
  {
    startTime: 5491.6,
    person: 'Phillip',
    text: ' And I think every recruiter is looking for unicorns.'
  },
  {
    startTime: 5493.84,
    person: 'Phillip',
    text: " But I think as a recruiter, if you are in an agency recruitment, you're working with customers who are urgently looking usually for talent, let's put it that way, that's when they will start using agencies, right?"
  },
  { startTime: 5505.84, person: 'Phillip', text: ' Specialist agencies, especially.' },
  {
    startTime: 5508,
    person: 'Phillip',
    text: " So you need to also be a bit of a counsellor to them and explain what the market is looking like, if you're an expert in a particular field."
  },
  {
    startTime: 5515.42,
    person: 'Phillip',
    text: " And you need to also educate them on certain things, because I'm not just talking salaries, and it's like, if your expectations up here, then you're going to work on something, your salary offer is going to have to be double than what you're thinking, if that's the case."
  },
  {
    startTime: 5530.66,
    person: 'Phillip',
    text: " But yeah, we might be able to get you this unicorn, but be ready, it's not going to cost you, you know, 4000 euros a month, right?"
  },
  {
    startTime: 5537.18,
    person: 'Phillip',
    text: " And then, but then, you know, it's really, sometimes you can break it down."
  },
  {
    startTime: 5540.8,
    person: 'Phillip',
    text: " There's so many times I've had, I've managed to get one job turned into two, which is brilliant."
  },
  { startTime: 5545.42, person: 'Phillip', text: ' And it worked out brilliant.' },
  {
    startTime: 5546.52,
    person: 'Phillip',
    text: ' And you know, the budget, yeah, had to be increased a little bit.'
  },
  {
    startTime: 5549.64,
    person: 'Phillip',
    text: " But you know, it's a total different game, you know, if you can really get in the head of the hiring manager and understand, you know, that challenge they're facing, they've been struggling to hire someone for four months, you know, well, there's something wrong there, right?"
  },
  { startTime: 5563.32, person: 'Phillip', text: ' What, what could it be?' },
  {
    startTime: 5564.52,
    person: 'Phillip',
    text: " So it's, it's not easy, because as a recruiter, you want to get that business, you want to help them, you want to have a happy customer, right?"
  },
  {
    startTime: 5570.98,
    person: 'Phillip',
    text: ' And at the same time, you must look after the candidates, because,'
  },
  {
    startTime: 5576.18,
    person: 'Phillip',
    text: " you know, if you give them a poor, poor experience, and you sell them a job that's not real,"
  },
  {
    startTime: 5582.14,
    person: 'Phillip',
    text: ' and the expectations are going to be totally different, well, as a recruiter, you know,'
  },
  {
    startTime: 5587.32,
    person: 'Phillip',
    text: " you shouldn't be sleeping at night properly, you should have serious problems, because"
  },
  {
    startTime: 5591.42,
    person: 'Phillip',
    text: ' these are, I see a recruiter is in between, very often, very important decision making processes'
  },
  {
    startTime: 5599.06,
    person: 'Phillip',
    text: ' of people in their career, their life, you can fuck up your whole career, by making a bad move'
  },
  {
    startTime: 5606,
    person: 'Phillip',
    text: ' into a wrong company, it really is that important.'
  },
  {
    startTime: 5608.7,
    person: 'Phillip',
    text: " So you really need to listen to the candidates, understand their current situation, aspirations, they're looking for a job, they want a steady job, what kind of job is it?"
  },
  {
    startTime: 5617.78,
    person: 'Phillip',
    text: " What's really important to you, apart from the salary, the benefits of whatever it is, what are you really looking for, you know?"
  },
  {
    startTime: 5624.3,
    person: 'Phillip',
    text: " So I've got this customer, this good job, but it's, it's missing this aspiration of yours, you know, and I just want to be honest, right?"
  },
  {
    startTime: 5630.58,
    person: 'Phillip',
    text: ' I mean, because for me, the best thing about me, I very rarely do sales calls, the reason is'
  },
  {
    startTime: 5635.54,
    person: 'Phillip',
    text: " for it, all the candidates do the sales for me, because they've had a good experience, you know,"
  },
  {
    startTime: 5640.28,
    person: 'Phillip',
    text: " they will want to move to another, they say, oh, Phil, I've been here, time for me to move on,"
  },
  {
    startTime: 5645.04,
    person: 'Phillip',
    text: " it's like, shit, man, I'd love to introduce sales, start introducing different companies, and"
  },
  {
    startTime: 5650.26,
    person: 'Phillip',
    text: " you know, it's like, that could happen every two, three years, sometimes, right?"
  },
  { startTime: 5654.08, person: 'Phillip', text: " So it's like, right," },
  {
    startTime: 5655.14,
    person: 'Phillip',
    text: ' return business, and the cool thing is, from a recruiter side, someone good leaves a company,'
  },
  {
    startTime: 5659.96,
    person: 'Phillip',
    text: " whether that's through a recruiter like me, or someone else, then a real clever thing, and I love"
  },
  {
    startTime: 5665.3,
    person: 'Phillip',
    text: " it, we call, I was taught that in London, it's called double whammy recruitment, I don't know why,"
  },
  {
    startTime: 5670.54,
    person: 'Phillip',
    text: " but because someone's leaving, you know, your candidate, you pulled out one happy job into"
  },
  {
    startTime: 5677.92,
    person: 'Phillip',
    text: ' another happy job, so hey, listen, could you give me the details to your hiring manager, you know,'
  },
  {
    startTime: 5682.94,
    person: 'Phillip',
    text: " to your line manager, and then you suddenly call up this hotline, and say, hey, listen, I've been"
  },
  {
    startTime: 5686.94,
    person: 'Phillip',
    text: ' doing some recruitment in your area locally, specialising in this area, I was wondering,'
  },
  {
    startTime: 5690.74,
    person: 'Phillip',
    text: " would you be interested in me introducing you to three vetted, you know, I've just"
  },
  {
    startTime: 5696.5,
    person: 'Phillip',
    text: ' finished a recruitment campaign somewhere, I say, man, where did you come, timing is perfect, I just'
  },
  {
    startTime: 5701.96,
    person: 'Phillip',
    text: " got a notice from one of my best employees, they say, that's how you do it, that's a little"
  },
  { startTime: 5706.22, person: 'Phillip', text: ' little trick here and there, right?' },
  {
    startTime: 5708.2,
    person: 'Phillip',
    text: " Okay, I get it, it's a double whammy, there's a lot of mind games going on as well, but I mean, I'm not saying it's always what we do, but it's, you know, it's always about timing, it's like with a good startup, you might have the money, you might have the people, you might have a fantastic product, but if the timing ain't right, it's not gonna work, right?"
  },
  {
    startTime: 5728.24,
    person: 'Phillip',
    text: ' And the same goes, you know, also with, you know, recruiting, I guess.'
  },
  {
    startTime: 5734.06,
    person: 'Karol',
    text: ' With recruitment, with placing in a job, joining the company at a specific time, yeah, these are all factors that are quite important, and they will be heavy on how somebody works with the company.'
  },
  {
    startTime: 5748.52,
    person: 'Phillip',
    text: " Yeah, I mean, I think that's every, you know, there's another expression I use, it's like, I do it with, for customers, but I also do it for candidates, you know, sometimes say, you know, you've got to kiss a lot of frogs to find your prince or princess, right?"
  },
  { startTime: 5764.42, person: 'Phillip', text: " I mean, that's true, right?" },
  {
    startTime: 5765.96,
    person: 'Phillip',
    text: " I mean, that's the whole learning process, you're gonna treat everyone, however, with respect, and you never know, especially if you're in a niche market, the world is so small, you will come across that person or individual sooner or later somewhere, and you better wanna have a lasted, an okay impression, at least, right?"
  },
  {
    startTime: 5783.72,
    person: 'Phillip',
    text: " And another thing, I just wanted to maybe add, sorry, I'm loading, throwing a lot of things up."
  },
  { startTime: 5792.44, person: 'Phillip', text: ' So I recently also had a conversation,' },
  {
    startTime: 5796.26,
    person: 'Phillip',
    text: " not messing with the customer directly, but with an account executive who's working with this"
  },
  {
    startTime: 5802.74,
    person: 'Phillip',
    text: ' customer, who mentioned they wanna hire, and they wanna hire, and there was like, oh, Phil, maybe'
  },
  {
    startTime: 5808.28,
    person: 'Phillip',
    text: " it's a customer for you, and then I actually told them that it's not for me, and the reason for it"
  },
  {
    startTime: 5812.28,
    person: 'Phillip',
    text: " was they have this approach to hiring that we're not certain about hiring, because I don't wanna"
  },
  {
    startTime: 5820.36,
    person: 'Phillip',
    text: " go through all the painstaking investment of hiring someone, and then I'm gonna see them go in"
  },
  { startTime: 5826.04, person: 'Phillip', text: ' six months, one year.' },
  { startTime: 5828.98, person: 'Phillip', text: " I'm terrified about that." },
  {
    startTime: 5830.8,
    person: 'Phillip',
    text: " So I've had loads of those conversations before, and it was always kind of Richard Branson comes to my mind straight away, and it's his famous saying, right?"
  },
  {
    startTime: 5838.98,
    person: 'Phillip',
    text: ' So train your people to be the best at what they do.'
  },
  {
    startTime: 5844.08,
    person: 'Phillip',
    text: " So they can leave, but value them and treat them the best way you can, so they don't have to."
  },
  { startTime: 5852.4, person: 'Phillip', text: " So I mean, it's the same thing." },
  { startTime: 5854.78, person: 'Phillip', text: " It's a recruitment strategy you have." },
  {
    startTime: 5856.74,
    person: 'Phillip',
    text: " If you're set up to fail, then I'm not gonna be a recruiter who wants to work with you."
  },
  {
    startTime: 5861.08,
    person: 'Phillip',
    text: " I don't wanna be encouraging talent to come and join you."
  },
  { startTime: 5864.22, person: 'Phillip', text: " It's very simple." },
  {
    startTime: 5865,
    person: 'Phillip',
    text: " My business partner, Lukasz, I've got this great, great, great banter with him all the time, but it's simple."
  },
  {
    startTime: 5871.14,
    person: 'Phillip',
    text: ' When we have calls with some customers, and we finish the call, the first thing we ask each other is, would you wanna work for that customer?'
  },
  { startTime: 5878.58, person: 'Phillip', text: ' And say, well, a few red flags.' },
  {
    startTime: 5881.98,
    person: 'Phillip',
    text: ' And say, yeah, well, look at it from the content perspective.'
  },
  { startTime: 5884.42, person: 'Phillip', text: " There's some things I'm not sure about." },
  {
    startTime: 5886.12,
    person: 'Phillip',
    text: " We've let go of working with a big partner, potential partner from the US, just because we don't feel we're ready for them, and I don't feel they're ready for us either."
  },
  {
    startTime: 5896.38,
    person: 'Phillip',
    text: ' And we just had to be brutally honest about it and break that news.'
  },
  {
    startTime: 5899.76,
    person: 'Phillip',
    text: " I hope we'll be able to revisit the topic again later, but I need to make sure that I'm looking after my candidates, and I've got their best interests in mind, because they will come back to me."
  },
  { startTime: 5910.68, person: 'Phillip', text: ' They will promote me.' },
  { startTime: 5911.5, person: 'Phillip', text: " They'll refer me." },
  {
    startTime: 5912.84,
    person: 'Phillip',
    text: " They might be hiring in a few years' time for another case."
  },
  {
    startTime: 5917.52,
    person: 'Phillip',
    text: " It's a survival approach as well, from a recruiter perspective."
  },
  {
    startTime: 5922.52,
    person: 'Karol',
    text: " Now, changing the topic a little bit, and then that's gonna be touching hiring managers and candidates at the same time."
  },
  {
    startTime: 5933.78,
    person: 'Karol',
    text: ' A very important topic overall, concerning culture, concerning the approach of hiring managers or setting up for failure, etcétera, is mental health in general.'
  },
  {
    startTime: 5946.4,
    person: 'Karol',
    text: ' A lot of people in IT nowadays are suffering from all sorts of ailments, burnout, being depressed, stressed out, and whatnot.'
  },
  {
    startTime: 5956.6,
    person: 'Karol',
    text: ' IT, as a field in general, is a perfect field to hide neurodiversity.'
  },
  {
    startTime: 5963.26,
    person: 'Karol',
    text: " There's plenty of people that are neurodiverse, that have ADHD, that have ASD."
  },
  { startTime: 5971.6, person: 'Karol', text: " They just don't know about it." },
  { startTime: 5973.82, person: 'Karol', text: ' But they show that when you talk to them.' },
  {
    startTime: 5976.2,
    person: 'Karol',
    text: " You kind of get a grips on that and see that they're like, oh, they're very specific."
  },
  {
    startTime: 5980.52,
    person: 'Karol',
    text: ' They might be, for example, very rigid, very straight to the point, very fixed in seeing things.'
  },
  { startTime: 5987.2, person: 'Karol', text: ' And this is on both sides of your work, right?' },
  {
    startTime: 5994.63,
    person: 'Karol',
    text: ' What advice would you give to people looking for a job or hiring managers looking for candidates when dealing with this neurodiversity or dealing with candidates that are, well, very specific?'
  },
  {
    startTime: 6011.47,
    person: 'Karol',
    text: ' Because neurodiversity makes us somewhat specific, makes us somewhat unique, gives us some amazing talents to work with.'
  },
  {
    startTime: 6019.67,
    person: 'Karol',
    text: ' But at the same time, that comes with a cost that is usually the soft skill cost.'
  },
  {
    startTime: 6025.95,
    person: 'Karol',
    text: " And our education doesn't really support us in being better at soft skills, because that's not something that's taught in universities where we go to learn computer science."
  },
  {
    startTime: 6037.21,
    person: 'Karol',
    text: " We're focussing on the hard stuff, not the soft skills, right?"
  },
  {
    startTime: 6041.13,
    person: 'Karol',
    text: ' So what would be the advice from the perspective of a recruiter for both sides, how to deal with these soft skills, what to develop to be better at being a better candidate to go further in the processes, and then for hiring managers to be better interviewers in those processes, to be mindful and empathetic in those processes?'
  },
  {
    startTime: 6066.29,
    person: 'Karol',
    text: ' How would, from your perspective, how would you go about that?'
  },
  {
    startTime: 6071.66,
    person: 'Phillip',
    text: " Well, it's a challenging, interesting question."
  },
  {
    startTime: 6076.28,
    person: 'Phillip',
    text: " Well, you got me thinking there, when talking about it, I think it's an interesting experience I have quite often, is that hiring managers often mistake skills for traits."
  },
  {
    startTime: 6089.36,
    person: 'Phillip',
    text: " A good example of this is they say, oh, I'm looking for someone creative."
  },
  {
    startTime: 6094.84,
    person: 'Phillip',
    text: " And any recruiter might just say, okay, we're looking for someone creative."
  },
  { startTime: 6098.3, person: 'Phillip', text: ' Yeah, great.' },
  {
    startTime: 6099.36,
    person: 'Phillip',
    text: ' And so many jobs will say creative developer, creative accountant.'
  },
  { startTime: 6103.76, person: 'Phillip', text: ' You can never Google about that.' },
  { startTime: 6105.42, person: 'Phillip', text: ' But creative, creativeness.' },
  { startTime: 6107.46, person: 'Phillip', text: ' Okay, great.' },
  {
    startTime: 6108.58,
    person: 'Phillip',
    text: ' So I always, if someone says creative, my first response is, so how are you going to assess that?'
  },
  {
    startTime: 6114.18,
    person: 'Phillip',
    text: " You can ask them to bloody paint a picture online when you're having a video call with them."
  },
  {
    startTime: 6118.22,
    person: 'Phillip',
    text: ' Yeah, I mean, these are traits, you know, and traits, you kind of, you know, this is where you get these maybe gut feelings, you get a feeling of the traits, you know, and then soft skills.'
  },
  {
    startTime: 6128.36,
    person: 'Phillip',
    text: " Well, soft skills, you're right, they're probably a lot harder to learn the older you become, right?"
  },
  {
    startTime: 6132.76,
    person: 'Phillip',
    text: ' Soft skills you develop through life experiences, right?'
  },
  {
    startTime: 6135.76,
    person: 'Phillip',
    text: ' However, you can learn to be presentable, you can learn to be communicative, and you can be, the best thing you can do before any interview is to be bloody prepared for one.'
  },
  {
    startTime: 6148.24,
    person: 'Phillip',
    text: " You build your confidence, you'll feel more secure, and you'll do a better job."
  },
  {
    startTime: 6152.58,
    person: 'Phillip',
    text: " The more interviews you have, the better you'll become an interview, right, as well."
  },
  {
    startTime: 6156.68,
    person: 'Phillip',
    text: " So I would say, no matter your strength, and yeah, I understand what you're talking about."
  },
  {
    startTime: 6161.6,
    person: 'Phillip',
    text: " And there's a variety of people with various, let's say, even phobias to having interviews, the nerves just rack them up."
  },
  {
    startTime: 6167.26,
    person: 'Phillip',
    text: " And then, you know, it's part of the game, it's part of the process."
  },
  {
    startTime: 6172.6,
    person: 'Phillip',
    text: ' I guess, you know, maybe you could, you could declare that if you wanted to, you know, no one should, no one should discriminate you around it, of course.'
  },
  {
    startTime: 6182.72,
    person: 'Phillip',
    text: ' I would just say, you know, just do your, do your shizzle.'
  },
  {
    startTime: 6187.74,
    person: 'Phillip',
    text: " Interviewing is a sales pit, it's a sales game, you know, but be yourself, don't pretend you're someone you're not."
  },
  {
    startTime: 6193.68,
    person: 'Phillip',
    text: ' But the things you need to be ready for when job searching is be the best of who you are, and be the best expert in the field you are, and present it and do it confidently.'
  },
  {
    startTime: 6205.52,
    person: 'Phillip',
    text: " Now, if you're terrified about video calling, or you know, I think video calling is a lot easier to master than live interviews."
  },
  {
    startTime: 6213.98,
    person: 'Phillip',
    text: " First of all, there's so many things you can do, so many technologies you can utilise whilst on an interview."
  },
  {
    startTime: 6219.3,
    person: 'Phillip',
    text: " But you know, it's the simple things you got to be aware of, it's just rehearse, position yourself."
  },
  {
    startTime: 6224.24,
    person: 'Phillip',
    text: " I mean, look at us, I mean, we've got kind of a probably good interview set, maybe my monitor, you know, reflecting in the window behind me isn't the best thing to have."
  },
  {
    startTime: 6233.64,
    person: 'Phillip',
    text: " But look, we've prepared ourselves in terms of the background, right, the lighting, you know, the sound, this is the basic stuff you do."
  },
  {
    startTime: 6242.62,
    person: 'Phillip',
    text: " How many interviews I've been where, you know, I've had a guy call up to join an interview with a cigarette on the bench."
  },
  {
    startTime: 6250.24,
    person: 'Phillip',
    text: " And, you know, I know a lot of people would probably say, oh, fuck off, you're not ready, you're not professional, I'm not gonna work with you."
  },
  {
    startTime: 6256.28,
    person: 'Phillip',
    text: " Well, actually, no, I said, hang on a sec, I'll connect in a moment."
  },
  {
    startTime: 6258.88,
    person: 'Phillip',
    text: " I went downstairs, I went to a bench, and I'm a smoker too."
  },
  {
    startTime: 6261.7,
    person: 'Phillip',
    text: ' So I lit up a cigarette, we had a great conversation.'
  },
  {
    startTime: 6264.26,
    person: 'Phillip',
    text: " You know, I can't remember if I hired him or not."
  },
  {
    startTime: 6265.7,
    person: 'Phillip',
    text: " But you know, it's, it's, it's, that's absolutely fine."
  },
  {
    startTime: 6268.6,
    person: 'Phillip',
    text: " If, but I mean, of course, it's probably not the ideal interview scenario."
  },
  { startTime: 6273.08, person: 'Phillip', text: " And I'm probably a bit weird myself." },
  {
    startTime: 6275.56,
    person: 'Phillip',
    text: ' So you know, you can get away with a lot with me.'
  },
  {
    startTime: 6278.02,
    person: 'Phillip',
    text: ' But overall, professional and, you know, respectful is the best way to go forward.'
  },
  {
    startTime: 6284.46,
    person: 'Phillip',
    text: " And if you are nervous, if you've got certain, you know, limitations that you're aware of, you know, I would say, don't be afraid to admit to them."
  },
  {
    startTime: 6296.75,
    person: 'Phillip',
    text: " If it's really kind of you can feel it's really putting pressure on your performance in an interview, admit to it."
  },
  {
    startTime: 6302.43,
    person: 'Phillip',
    text: " But you can, you know, say, I'm not the best in such social interactions."
  },
  { startTime: 6308.41, person: 'Phillip', text: " Okay, but you're applying for a sales job." },
  {
    startTime: 6310.35,
    person: 'Phillip',
    text: " Well, you're not going to go far in that interview, right?"
  },
  {
    startTime: 6312.95,
    person: 'Phillip',
    text: " So but then I'm not the best in social interactions, but what I'm one hell of an integrator."
  },
  {
    startTime: 6319.47,
    person: 'Phillip',
    text: " I'd love to tell you more about, you know, the things I've made, the things I've created, the companies have helped reshape the way they work, you know, you got to have this element of this human interaction, too."
  },
  { startTime: 6331.77, person: 'Phillip', text: " It's not robotic." },
  {
    startTime: 6332.79,
    person: 'Phillip',
    text: ' I mean, if you want to go robotic, then maybe AI recruiters is going to be the future for such roles, right?'
  },
  { startTime: 6340.85, person: 'Karol', text: ' We have a very lovely comment from Stefan here.' },
  {
    startTime: 6345.41,
    person: 'Karol',
    text: ' Everything we are discussing should be the norm, not an exception.'
  },
  { startTime: 6349.99, person: 'Karol', text: ' I would agree.' },
  { startTime: 6351.29, person: 'Karol', text: ' But unfortunately, it is not the norm.' },
  { startTime: 6354.29, person: 'Karol', text: " And that's the sad part of it." },
  { startTime: 6359.43, person: 'Phillip', text: " I think it's getting better with every year." },
  { startTime: 6362.99, person: 'Phillip', text: ' It definitely is.' },
  {
    startTime: 6363.91,
    person: 'Phillip',
    text: " And I've worked in big corporations, I've seen how much effort goes into improving the skills of recruiters."
  },
  { startTime: 6372.47, person: 'Phillip', text: " It's not an easy job." },
  {
    startTime: 6373.49,
    person: 'Phillip',
    text: " And we also mentioned this, Carol, before we went live was, you know, I've got the stereotype of recruiters sometimes, right?"
  },
  {
    startTime: 6381.51,
    person: 'Phillip',
    text: " But that is very often, like in any job, you got people who don't love their job, right?"
  },
  { startTime: 6387.17, person: 'Phillip', text: ' They hate their job, right?' },
  {
    startTime: 6388.65,
    person: 'Phillip',
    text: " The same goes for the recruiters, you know, we're only human beings."
  },
  {
    startTime: 6391.31,
    person: 'Phillip',
    text: " But I've registered, and I kind of see a pattern."
  },
  { startTime: 6394.93, person: 'Phillip', text: " I've seen many recruiters come and go." },
  { startTime: 6397.17, person: 'Phillip', text: " It's a hard grind, guys." },
  {
    startTime: 6398.93,
    person: 'Phillip',
    text: ' I mean, I get asked, you know, Phil, how can you recruit so long?'
  },
  { startTime: 6402.59, person: 'Phillip', text: ' Do you still love it?' },
  {
    startTime: 6404.17,
    person: 'Phillip',
    text: ' Even yesterday, someone was asked, do you really enjoy your job?'
  },
  { startTime: 6406.77, person: 'Phillip', text: ' I have to admit, I still do.' },
  { startTime: 6408.91, person: 'Phillip', text: " However, I'm really burnt out sometimes." },
  { startTime: 6411.21, person: 'Phillip', text: " I'm really, like, down to the ground." },
  { startTime: 6412.67, person: 'Phillip', text: " I've got no energy." },
  { startTime: 6413.83, person: 'Phillip', text: " I can't do this call." },
  { startTime: 6414.95, person: 'Phillip', text: ' But I still do it, right?' },
  {
    startTime: 6416.13,
    person: 'Phillip',
    text: " But there are many people, like in any professional job, that are doing it either for a reason, you know, whether that's just to survive, have a pay cheque, and, you know, at the same time, simultaneously be looking for, you know, other opportunities."
  },
  {
    startTime: 6431.35,
    person: 'Phillip',
    text: " But very often in recruitment, it's an entry level opportunity to work in HR."
  },
  {
    startTime: 6436.81,
    person: 'Phillip',
    text: " There's a lot of aspiring HR professionals, you know, who, you know, can't find a way into HR directly."
  },
  { startTime: 6444.27, person: 'Phillip', text: ' So recruitment is very often the case.' },
  {
    startTime: 6446.69,
    person: 'Phillip',
    text: ' And, you know, you need to be well spoken, presentable, be good with processes, time management.'
  },
  {
    startTime: 6455.49,
    person: 'Phillip',
    text: ' And pretty much, there you go, you can be a recruiter, right?'
  },
  { startTime: 6457.61, person: 'Phillip', text: " So, but there's a lot more to it." },
  { startTime: 6459.47, person: 'Phillip', text: " There's a lot more to it." },
  {
    startTime: 6461.59,
    person: 'Karol',
    text: " It's analogous to being a tester or a Salesforce consultant as a step towards being in IT."
  },
  { startTime: 6468.15, person: 'Karol', text: ' Yeah, right, exactly.' },
  { startTime: 6470.97, person: 'Phillip', text: " That's a great comparison too." },
  {
    startTime: 6473.17,
    person: 'Phillip',
    text: " But I'm not, you know, I think it's a pretty one."
  },
  {
    startTime: 6476.83,
    person: 'Phillip',
    text: " Anyway, if you've got a dream, and you've got a dream career you want to get to, by all means, use any way, any approach you can get there."
  },
  { startTime: 6483.93, person: 'Phillip', text: " I've got no issues with that." },
  {
    startTime: 6486.03,
    person: 'Phillip',
    text: " But if you're a recruiter, you know, respect your role."
  },
  { startTime: 6488.57, person: 'Phillip', text: " It's an important one." },
  { startTime: 6489.97, person: 'Phillip', text: ' Look after the candidates.' },
  {
    startTime: 6491.05,
    person: 'Phillip',
    text: ' Very simple philosophy, like I always, from day one, someone, my manager with this from day one, treat every single candidate the same way you would want to be treated, Philip.'
  },
  { startTime: 6500.39, person: 'Phillip', text: ' Is it difficult?' },
  { startTime: 6501.45, person: 'Phillip', text: " No, it's not." },
  { startTime: 6503.47, person: 'Phillip', text: ' Do I go to bed feeling guilt?' },
  {
    startTime: 6506.19,
    person: 'Phillip',
    text: ' And suddenly, shit, I was supposed to reply to him like two weeks ago.'
  },
  {
    startTime: 6512.11,
    person: 'Phillip',
    text: ' Yesterday, literally yesterday, I had an interview with a candidate, and I overslept.'
  },
  { startTime: 6517.71, person: 'Phillip', text: ' I overslept.' },
  {
    startTime: 6518.99,
    person: 'Phillip',
    text: " I had it at nine o'clock, and I woke up, it was my day off, you know, two days ago, it was my day off, and I was doing some extra work, right?"
  },
  { startTime: 6525.63, person: 'Phillip', text: " So, I overslept, no one's in the house." },
  {
    startTime: 6528.11,
    person: 'Phillip',
    text: " I overslept, and I woke up, I remember, it was coming to ten o'clock, I woke up."
  },
  { startTime: 6533.39, person: 'Phillip', text: " It's not, doesn't happen to me often." },
  {
    startTime: 6535.29,
    person: 'Phillip',
    text: " Normally, my dogs wake me up at six or seven o'clock in the morning, right?"
  },
  {
    startTime: 6538.61,
    person: 'Phillip',
    text: " But here, I woke up at ten, and I'm like, fuck."
  },
  { startTime: 6542.97, person: 'Phillip', text: " At nine o'clock, I had a scheduled interview." },
  { startTime: 6545.47, person: 'Phillip', text: " And first thing, I'm on LinkedIn." },
  { startTime: 6548.03, person: 'Phillip', text: " Hey, man, I'm so sorry, I overslept." },
  { startTime: 6550.95, person: 'Phillip', text: " I'm not gonna lie, you know, I'm human." },
  {
    startTime: 6553.27,
    person: 'Phillip',
    text: " Straight away, it's like, hey, man, I totally get it."
  },
  { startTime: 6556.15, person: 'Phillip', text: " I can't do it now, let's do it tomorrow." },
  {
    startTime: 6557.89,
    person: 'Phillip',
    text: ' And we did it tomorrow, and I was apologising again.'
  },
  { startTime: 6560.41, person: 'Phillip', text: " He said, yeah, don't worry." },
  {
    startTime: 6562.23,
    person: 'Karol',
    text: " Yeah, but that's normal, decent behaviour, being transparent about what happens."
  },
  { startTime: 6566.17, person: 'Karol', text: ' It very rarely happens to me, you know.' },
  { startTime: 6568.11, person: 'Phillip', text: ' But still happens.' },
  { startTime: 6569.35, person: 'Phillip', text: ' It happens, right?' },
  { startTime: 6570.29, person: 'Phillip', text: " You know, we're only human." },
  {
    startTime: 6572.05,
    person: 'Karol',
    text: ' But you were, you were, you had the gut to admit that, and say, write that message, and say, hey, I overslept.'
  },
  { startTime: 6579.67, person: 'Karol', text: ' Sorry for that.' },
  {
    startTime: 6581.11,
    person: 'Phillip',
    text: " Well, you know, I'm very hopeful for this candidate."
  },
  {
    startTime: 6587.69,
    person: 'Phillip',
    text: " It's for me, you know, I don't want to be, you know, pretending someone I'm not, either."
  },
  { startTime: 6591.53, person: 'Phillip', text: ' I want to build a good relationship.' },
  {
    startTime: 6593.31,
    person: 'Phillip',
    text: " Doesn't work out for this, let's say, process we're in."
  },
  { startTime: 6596.43, person: 'Phillip', text: ' Maybe we can find another one.' },
  {
    startTime: 6597.69,
    person: 'Phillip',
    text: " But it's just a human, human approach, I think."
  },
  { startTime: 6601.55, person: 'Phillip', text: " It's so important." },
  { startTime: 6602.65, person: 'Phillip', text: ' And it goes with ghosting.' },
  {
    startTime: 6605.47,
    person: 'Phillip',
    text: ' It goes with all the other things that, you know, are connected.'
  },
  {
    startTime: 6608.35,
    person: 'Phillip',
    text: " If you hate your job, you're waiting till five o'clock, or four o'clock."
  },
  {
    startTime: 6612.61,
    person: 'Phillip',
    text: " Bang, you're out the door, you're in the elevator, you're back home."
  },
  { startTime: 6615.27, person: 'Phillip', text: ' Fair enough, respect to you.' },
  {
    startTime: 6616.89,
    person: 'Phillip',
    text: ' But the world of recruitment, from my experience, very often the time to get hold of people is usually after working hours, if you really want to get a few diamonds, you know, engaged.'
  },
  { startTime: 6629.19, person: 'Phillip', text: ' And it comes with a cost.' },
  { startTime: 6631.51, person: 'Phillip', text: " And I'm sorry." },
  {
    startTime: 6633.81,
    person: 'Phillip',
    text: " You know, that's the nature of this role, this work."
  },
  { startTime: 6636.93, person: 'Phillip', text: " And you've got to be available." },
  { startTime: 6638.59, person: 'Phillip', text: " You've got to be approachable." },
  { startTime: 6641.13, person: 'Phillip', text: " There's only so much you can do, of course." },
  {
    startTime: 6644.23,
    person: 'Phillip',
    text: " You know, I've stopped responding to messages from countries I'm not hiring in."
  },
  {
    startTime: 6649.83,
    person: 'Phillip',
    text: " I just can't, I can't respond to, reply to everyone."
  },
  {
    startTime: 6654.03,
    person: 'Phillip',
    text: ' I used to be on a mission to reply to everyone.'
  },
  {
    startTime: 6656.89,
    person: 'Phillip',
    text: " And, you know, I just said, come on, I've got a life, I've got a family."
  },
  { startTime: 6660.77, person: 'Phillip', text: ' Not manageable, really, right?' },
  { startTime: 6662.69, person: 'Phillip', text: ' Exactly.' },
  {
    startTime: 6663.85,
    person: 'Karol',
    text: ' But you mentioned, maybe as a kind of a closing note, closing topic in the discussion, you mentioned come prepared, right?'
  },
  {
    startTime: 6675.65,
    person: 'Karol',
    text: ' So, how would you advise candidates to prepare for an interview?'
  },
  { startTime: 6685.29, person: 'Karol', text: ' What are, what is the preparation?' },
  {
    startTime: 6687.47,
    person: 'Karol',
    text: ' What they should do to be prepared, other than, you know, brush their teeth and get clothes on when they wake up, right?'
  },
  { startTime: 6695.97, person: 'Phillip', text: ' Yeah.' },
  {
    startTime: 6697.17,
    person: 'Phillip',
    text: ' I think the, you have to be prepared, the better prepared you are, the more confident you will be.'
  },
  {
    startTime: 6702.43,
    person: 'Phillip',
    text: ' And confidence is the first, I would say half of your success is confidence.'
  },
  {
    startTime: 6706.57,
    person: 'Phillip',
    text: ' Not being overconfident and in your face, but confident.'
  },
  {
    startTime: 6710.19,
    person: 'Phillip',
    text: " Because it's, it's, it's, it's one of those things you quickly get a feeling of."
  },
  { startTime: 6717.15, person: 'Phillip', text: ' Am I going to connect with this person?' },
  {
    startTime: 6718.95,
    person: 'Phillip',
    text: ' You know, and these are, these are, you know, psychological kind of little hacks and everything.'
  },
  {
    startTime: 6723.63,
    person: 'Phillip',
    text: " But definitely, definitely build confidence in a sense that be prepared, you'll feel a lot more confident."
  },
  { startTime: 6731.51, person: 'Phillip', text: " That's the first thing." },
  {
    startTime: 6732.45,
    person: 'Phillip',
    text: " I'm not going to go into breathing techniques and shit like that if you get stressful and stuff."
  },
  {
    startTime: 6735.71,
    person: 'Phillip',
    text: " But there's loads of little exercises you can do."
  },
  { startTime: 6737.95, person: 'Phillip', text: ' Second is be prepared for specific questions.' },
  {
    startTime: 6740.79,
    person: 'Phillip',
    text: ' So I am a fan of behavioural type interview questions.'
  },
  {
    startTime: 6745.17,
    person: 'Phillip',
    text: " So these are questions, I think we've gone through this ages ago, right?"
  },
  {
    startTime: 6749.31,
    person: 'Phillip',
    text: ' So this is, you know, your typical, tell me about a time when, or could you give me an example of when you integrated X with Y or, you know, share me an example of failure in your career.'
  },
  {
    startTime: 6762.93,
    person: 'Phillip',
    text: " So whatever it is, but it's asking for a specific example."
  },
  {
    startTime: 6766.73,
    person: 'Phillip',
    text: ' Now, this is a very common interview question.'
  },
  { startTime: 6768.83, person: 'Phillip', text: ' It happens pretty much all the time.' },
  {
    startTime: 6770.97,
    person: 'Phillip',
    text: " Maybe you'd be doing it, we're not aware of it."
  },
  {
    startTime: 6773.43,
    person: 'Phillip',
    text: " But when you start being aware of it, you're picking it up, you know what to do straight away."
  },
  {
    startTime: 6777.55,
    person: 'Phillip',
    text: ' Brilliant, very simple tactics, the star technique.'
  },
  { startTime: 6780.87, person: 'Phillip', text: ' So S, it helps you kind of build the story.' },
  { startTime: 6783.67, person: 'Phillip', text: ' So it is storytelling in a sense, right?' },
  { startTime: 6785.51, person: 'Phillip', text: ' In the basic sense of storytelling.' },
  { startTime: 6787.29, person: 'Phillip', text: ' So S, you set the scene.' },
  {
    startTime: 6789.77,
    person: 'Phillip',
    text: ' So when was it, where was I, what role was I doing?'
  },
  { startTime: 6793.93, person: 'Phillip', text: " It's very simple form." },
  { startTime: 6795.59, person: 'Phillip', text: ' Then T is for task.' },
  {
    startTime: 6797.13,
    person: 'Phillip',
    text: ' So my task was to do this, or the challenge I was facing was to do this, right?'
  },
  {
    startTime: 6802.73,
    person: 'Phillip',
    text: " So you've got clear, you know, storyline building up."
  },
  { startTime: 6807.51, person: 'Phillip', text: ' Then A is for actions or action.' },
  {
    startTime: 6810.45,
    person: 'Phillip',
    text: " And then you list two or three, four specific actions that you took, not we as a company, we as a team, you specifically, it's your interview, it's not your bloody company's, your boss's interview, right?"
  },
  { startTime: 6822.99, person: 'Phillip', text: " Or your team's." },
  { startTime: 6823.65, person: 'Phillip', text: " It's you, what did I do?" },
  {
    startTime: 6824.85,
    person: 'Phillip',
    text: ' If you were a manager, you know, then I delegated, I decided to take this path instead of, you know, that, whatever it is, right?'
  },
  {
    startTime: 6832.87,
    person: 'Phillip',
    text: " So it's I, I, I, they say there's no team in I, but there actually is, there's that little, oh, forget that."
  },
  {
    startTime: 6840.79,
    person: 'Phillip',
    text: " And then finally, one that very often managerial, you know, senior managers get, forget about because it's for them so obvious, they've gone through, they've set the scene so the listener can follow."
  },
  {
    startTime: 6851.59,
    person: 'Phillip',
    text: " Because if you lose your listener at the very beginning, go straight into actions or straight into a problem, you've lost them."
  },
  {
    startTime: 6857.53,
    person: 'Phillip',
    text: " They're going to be looking at your CV, looking at your linking profile, trying to figure out where was this?"
  },
  { startTime: 6860.81, person: 'Phillip', text: ' What was he talking about?' },
  {
    startTime: 6861.63,
    person: 'Phillip',
    text: ' You know, the more specific, like, you know, like a story once upon a time behind, you know, in a little beautiful country of, you know, the more details you give, that person can visualise it, picture it.'
  },
  {
    startTime: 6873.35,
    person: 'Phillip',
    text: " It's simple storytelling at the end of the day."
  },
  { startTime: 6875.29, person: 'Phillip', text: ' So that beginning is so impactful.' },
  { startTime: 6877.83, person: 'Phillip', text: " You've got their attention." },
  {
    startTime: 6878.79,
    person: 'Phillip',
    text: " If you lose their attention at the beginning, they're not going to listen."
  },
  {
    startTime: 6881.07,
    person: 'Phillip',
    text: " They're going to, they're going to forget what you said."
  },
  {
    startTime: 6883.19,
    person: 'Phillip',
    text: " But then following the actions you took to, and what very often managers and senior management forget, it's all the actions."
  },
  {
    startTime: 6892.15,
    person: 'Phillip',
    text: " And then they offer a finish and it's like, oh, great."
  },
  { startTime: 6894.09, person: 'Phillip', text: " That's, but where's the bloody result?" },
  {
    startTime: 6896.65,
    person: 'Phillip',
    text: ' So the result, the result of, of my actions was X, Y, Z, right?'
  },
  {
    startTime: 6901.93,
    person: 'Phillip',
    text: " Or if it's talking about failure, when did you fail?"
  },
  { startTime: 6904.85, person: 'Phillip', text: ' What kind of result is that?' },
  {
    startTime: 6905.99,
    person: 'Phillip',
    text: " Well, the result is, I don't know, learning from that day on."
  },
  {
    startTime: 6908.51,
    person: 'Phillip',
    text: " I've never done this, this way after I've implemented this or that, right?"
  },
  {
    startTime: 6911.85,
    person: 'Karol',
    text: ' I think, I think this is a very, very, very important note here.'
  },
  {
    startTime: 6916.85,
    person: 'Karol',
    text: " If you're describing your failure, you should not put in the results that are the negative results of that failure."
  },
  { startTime: 6924.61, person: 'Karol', text: ' You should put in what you gained from that.' },
  { startTime: 6926.77, person: 'Karol', text: ' What was the benefit?' },
  { startTime: 6928.29, person: 'Karol', text: ' What was the plus side?' },
  { startTime: 6931.15, person: 'Phillip', text: ' Of course you failed.' },
  {
    startTime: 6932.43,
    person: 'Karol',
    text: ' So there was damage there, but highlight what you gained from that, how you grew as a specialist, right?'
  },
  { startTime: 6939.19, person: 'Phillip', text: ' Yeah.' },
  {
    startTime: 6939.69,
    person: 'Phillip',
    text: " And I say, I'm a fan of different kinds of interview techniques, but I mean, this is the most common one to be at, especially if they're validating your experience and what they want to hear."
  },
  {
    startTime: 6950.51,
    person: 'Phillip',
    text: " They want to hear about your experience on projects, challenges you face, how you overcame them, you know, and they're seeing how you're going to be a fit for us and our challenges and scope of the shit we deal here, right?"
  },
  { startTime: 6959.99, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 6960.71,
    person: 'Phillip',
    text: " So, so, and, and that's one, so the start technique is a simple exercise just to kind of, so now you think about, you look at the job description, you look at the keywords in the job description, or maybe you've had a brief chat with the recruiter, you've got a little bit more information, keywords, key areas of responsibility, key, key knowledge, key skills required to do the job effectively."
  },
  {
    startTime: 6981.41,
    person: 'Phillip',
    text: " And then you think of it, okay, they're going to be assessing me on this."
  },
  {
    startTime: 6983.93,
    person: 'Phillip',
    text: " So now let's do a little Excel spreadsheet or whatever, a little table, a little Kanban, whatever you want to do."
  },
  { startTime: 6989.89, person: 'Phillip', text: ' Okay.' },
  { startTime: 6990.29, person: 'Phillip', text: " So they're looking for this." },
  {
    startTime: 6991.45,
    person: 'Phillip',
    text: ' So now let me find a good example I could use to evidence that I have those skills from a project, from, you know, a life experience, a work experience, whatever it is.'
  },
  {
    startTime: 7000.75,
    person: 'Phillip',
    text: " And be prepared, you know, I've, I've, I've helped people create such long Excel spreadsheets covering literally every single skill you can think of for specific roles."
  },
  { startTime: 7008.51, person: 'Phillip', text: " And it's a lot of work." },
  {
    startTime: 7010.09,
    person: 'Phillip',
    text: " And, you know, like you said, at the very beginning, looking for work is a full time, it's not sometimes it is a full time job."
  },
  {
    startTime: 7018.43,
    person: 'Phillip',
    text: " If you're serious about this, you've got no options as a countdown, you've got to find that job."
  },
  { startTime: 7022.87, person: 'Phillip', text: ' Right, right.' },
  {
    startTime: 7024.65,
    person: 'Phillip',
    text: " So that's, that's definitely a very, you know, simple, but, you know,"
  },
  {
    startTime: 7029.57,
    person: 'Phillip',
    text: " a key aspect of preparing for there's plenty of stuff I can share as well, of course, but"
  },
  {
    startTime: 7033.95,
    person: 'Phillip',
    text: ' that would say that, and of course, being equipped with good questions to ask at the end,'
  },
  {
    startTime: 7039.05,
    person: 'Phillip',
    text: " if you leave an interview without asking questions, or, oh, I think, you know, you've"
  },
  {
    startTime: 7042.51,
    person: 'Phillip',
    text: ' shared everything I want to say, Oh, my God, seriously, we spent 45 minutes, one hour talking,'
  },
  { startTime: 7046.75, person: 'Phillip', text: " you've got no fucking questions." },
  { startTime: 7049.57, person: 'Karol', text: ' No bloody questions.' },
  {
    startTime: 7051.37,
    person: 'Karol',
    text: " On that perspective, what I personally do, and I'm a big fan of using LLMs for a lot of things."
  },
  {
    startTime: 7059.49,
    person: 'Karol',
    text: ' As a new as a person with ASD, and well, slight ASD and ADHD, I struggle with certain tasks, like preparation for interviews, which requires a lot of attention over details, emotional control, etc.'
  },
  { startTime: 7079.01, person: 'Karol', text: ' This is problematic for me, right.' },
  {
    startTime: 7081.31,
    person: 'Karol',
    text: ' So what I started utilising this year around, I started utilising my AI licences.'
  },
  {
    startTime: 7090.35,
    person: 'Karol',
    text: ' And I own one for perplexity for research purposes, and one for Gemini for with my Google workspace, for general purposes.'
  },
  {
    startTime: 7100.13,
    person: 'Karol',
    text: ' If anybody in the audience owns a licence for any specific AI, you have the capability to create specific personas, most with most of those chatbots.'
  },
  {
    startTime: 7112.91,
    person: 'Karol',
    text: " So what I did, I defined the recruiter persona gave that recruiter persona specific qualities over that they're going to be expecting me to they're expected to train me in interviewing and preparing a specific job description information about the company, right, whatever details you have."
  },
  {
    startTime: 7131.25,
    person: 'Karol',
    text: ' So So I created that persona as a recruiter, by the way, I named that persona Philip.'
  },
  {
    startTime: 7139.17,
    person: 'Karol',
    text: " You're the one you're the one that was helping me the most with a lot of recruitment processes all around the time, right."
  },
  {
    startTime: 7146.99,
    person: 'Karol',
    text: " So I've been asking you plenty of questions from the human side of recruitment."
  },
  { startTime: 7150.89, person: 'Karol', text: ' So, you know, that only tracked.' },
  {
    startTime: 7154.57,
    person: 'Karol',
    text: ' And what you can always do, you feed that persona with your CV, you probably have it on some sort of a Google Drive or a PDF, just feed that in feed with keywords that you have no that are related to your position that you want to have, then feed it with also other context about you.'
  },
  {
    startTime: 7175.61,
    person: 'Karol',
    text: ' And then when you chat with that persona, first of all, give it the job description, ask that persona to assess that job description against your CV, and see where the discrepancies are.'
  },
  {
    startTime: 7190.67,
    person: 'Karol',
    text: " And it's going to list where you match where you don't match where you match partially what might be relevant or not."
  },
  {
    startTime: 7197.21,
    person: 'Karol',
    text: " And it's going to do that a lot better than most humans because it has access to a lot more data."
  },
  { startTime: 7203.71, person: 'Karol', text: ' It gives you instant insight.' },
  {
    startTime: 7206.23,
    person: 'Phillip',
    text: " It's a beautiful example of how you can utilise now the very available technologies."
  },
  {
    startTime: 7210.79,
    person: 'Phillip',
    text: " I do this quite often, you know, I have my little, let's say, it's actually quite funny, maybe hilarious, because last time I was doing this, I was having a conversation with a chat GPT."
  },
  {
    startTime: 7223.51,
    person: 'Phillip',
    text: ' And my wife in the middle of the night comes down and who the hell are you talking to?'
  },
  { startTime: 7228.27, person: 'Phillip', text: ' At this time?' },
  { startTime: 7229.53, person: 'Phillip', text: " Oh, it's only chat GPT." },
  { startTime: 7231.09, person: 'Phillip', text: ' Oh, my God.' },
  {
    startTime: 7234.49,
    person: 'Karol',
    text: " But yeah, just when you're showing this, it did remind me of my wife used to bust me about talking to Google Assistant on my phone."
  },
  { startTime: 7242.83, person: 'Karol', text: ' Same thing.' },
  {
    startTime: 7244.19,
    person: 'Phillip',
    text: ' But another thing I do it in the car, you can do it everywhere.'
  },
  {
    startTime: 7247.69,
    person: 'Phillip',
    text: ' You can have a chat if you know, and you can just give it a simple prompt and tell it what you want to do.'
  },
  { startTime: 7253.55, person: 'Phillip', text: ' You can also practise in that way.' },
  {
    startTime: 7255.11,
    person: 'Karol',
    text: " But as long as you give it context of what you're trying to achieve, the more context you give, the better, of course, the results will be, of course."
  },
  { startTime: 7261.17, person: 'Phillip', text: " But I mean, yeah, it's very important." },
  { startTime: 7264.15, person: 'Phillip', text: " Like the confidence aspect, it's key." },
  {
    startTime: 7266.53,
    person: 'Phillip',
    text: ' And just yourself, you know, I see Stefan wrote a nice message here.'
  },
  {
    startTime: 7270.99,
    person: 'Phillip',
    text: ' You know, he remembers the day we had an interview, or maybe an interview is more of a kind of introductory call.'
  },
  {
    startTime: 7279.63,
    person: 'Phillip',
    text: ' And he says here, as I was discussing with Philip during our past session, it also comes down to the talent of building a trusting, candid relationship out of the air.'
  },
  { startTime: 7288.85, person: 'Phillip', text: " But that's it." },
  {
    startTime: 7289.81,
    person: 'Phillip',
    text: ' You know, I respect your time, you respect my time.'
  },
  { startTime: 7293.67, person: 'Phillip', text: " Let's see if we can work out something here." },
  {
    startTime: 7296.19,
    person: 'Phillip',
    text: " You know, I've got tasks, I want to resolve this."
  },
  { startTime: 7300.49, person: 'Phillip', text: ' Are you the right person for it?' },
  { startTime: 7302.15, person: 'Phillip', text: ' This is where I am at.' },
  { startTime: 7303.43, person: 'Phillip', text: ' This is my understanding of the job.' },
  {
    startTime: 7305.27,
    person: 'Phillip',
    text: " If you've got any questions, technical ones that I won't be able to answer, let me take them down."
  },
  { startTime: 7309.73, person: 'Phillip', text: " I'll get back to you, right?" },
  {
    startTime: 7310.65,
    person: 'Phillip',
    text: " But let's have an honest chat about, you know, at the end of the day, it's only work, right?"
  },
  { startTime: 7315.19, person: 'Phillip', text: ' And you want it to work for you too.' },
  {
    startTime: 7317.65,
    person: 'Phillip',
    text: " And for me, it's always been important getting to know candidates in terms of their current circumstances, their aspirations as what's mega important for them."
  },
  {
    startTime: 7325.43,
    person: 'Karol',
    text: " And that's part of preparation to actually know and understand what's important to you, to understand what are your values, what do you value in the job, what is the most important quality of your manager, for example, right?"
  },
  {
    startTime: 7338.65,
    person: 'Karol',
    text: ' And if somebody asks me that, straight up, I say transparency, right?'
  },
  {
    startTime: 7344.33,
    person: 'Karol',
    text: ' Because this is something I value the most with management.'
  },
  {
    startTime: 7346.89,
    person: 'Karol',
    text: " If the management is transparent in terms of expectations and whatnot, for me, that's a huge qualifier, right?"
  },
  {
    startTime: 7356.47,
    person: 'Karol',
    text: ' But for other people, this will be something else.'
  },
  {
    startTime: 7359.61,
    person: 'Karol',
    text: ' And this is homework to be done before an interview.'
  },
  { startTime: 7362.61, person: 'Karol', text: " And then on top of that, I don't know what you" },
  {
    startTime: 7364.93,
    person: 'Karol',
    text: ' think about that, but I basically, if I know who my hiring manager is or the interviewer is,'
  },
  {
    startTime: 7370.89,
    person: 'Karol',
    text: ' I basically go on LinkedIn, stalk the hell out of their LinkedIn, scrape a little bit of their posts'
  },
  {
    startTime: 7377.59,
    person: 'Karol',
    text: " going a little bit back in time to see what they're posting liking,"
  },
  {
    startTime: 7383.29,
    person: 'Karol',
    text: ' download their LinkedIn profile as a PDF and just feed that to an AI just to'
  },
  { startTime: 7391.65, person: 'Karol', text: ' see what can pop up.' },
  {
    startTime: 7393.97,
    person: 'Karol',
    text: " And then based on that, with that context, prepared context, it's also, if you're struggling with creating really good questions for an interviewer, then just simply use that context, use all of that that you build in an AI and just ask AI to produce you some good questions."
  },
  {
    startTime: 7413.31,
    person: 'Karol',
    text: " Of course, you will have to probably modify them a little, but it will pop you out some really, really no bullshit questions that you can ask your interviewer that they will force them to stop and really think about the answer, because these would not be questions that will be common in the interviews that they're doing."
  },
  { startTime: 7432.67, person: 'Phillip', text: ' Good questions.' },
  {
    startTime: 7434.17,
    person: 'Phillip',
    text: ' I mean, you could turn an interviewer around with good questions.'
  },
  {
    startTime: 7440.05,
    person: 'Phillip',
    text: ' One of my favourite ones, which can, if not used well, can really go downwards, really.'
  },
  {
    startTime: 7448.05,
    person: 'Phillip',
    text: " It's a bit of, it's a bit of, you know, neuro-linguistic programming and it's, it's reverse psychology."
  },
  {
    startTime: 7456.41,
    person: 'Phillip',
    text: " And it's simple as this, you know, if I'm, you know, if you're talking to a hiring manager, or let's say, or even better, a peer, you know, who's assessing you, or someone maybe a little bit more senior to you, but a peer, because you usually get that, right?"
  },
  { startTime: 7470.49, person: 'Phillip', text: ' As well as technical interviews, right?' },
  {
    startTime: 7472.31,
    person: 'Phillip',
    text: " Say, okay, so you've been here, Carol, so you've been working at this company for, you know, two years, right?"
  },
  { startTime: 7478.03, person: 'Phillip', text: ' According to LinkedIn.' },
  { startTime: 7478.95, person: 'Phillip', text: " Oh, yeah, yeah, that's right." },
  { startTime: 7479.83, person: 'Phillip', text: " That's correct." },
  { startTime: 7480.73, person: 'Phillip', text: ' So now tell me, between you and I, right?' },
  { startTime: 7486.39, person: 'Phillip', text: ' How do you enjoy working at this company?' },
  {
    startTime: 7488.93,
    person: 'Phillip',
    text: " You know, what's, what's, what's, what's, what's cool for you?"
  },
  { startTime: 7491.59, person: 'Phillip', text: " What's a little bit, what irritates you?" },
  {
    startTime: 7493.59,
    person: 'Phillip',
    text: ' You know, the cool thing about this question is, they are going to love you ask that one.'
  },
  { startTime: 7499.33, person: 'Phillip', text: " And they're going to spit it all out." },
  {
    startTime: 7501.57,
    person: 'Phillip',
    text: " They're going to talk about the training, onboarding, maybe if you tweak, twist their arms a little, they'll tell you about the challenging stuff as well."
  },
  {
    startTime: 7508.47,
    person: 'Phillip',
    text: " That's when you know, shit, I'm building a relationship with this, with this person, that's cool."
  },
  {
    startTime: 7512.37,
    person: 'Phillip',
    text: " But they will be more likely to tell you the real picture of it, if you took to a peer at the level that's assessing you and everything."
  },
  {
    startTime: 7518.77,
    person: 'Karol',
    text: " Yeah, because you're flipping the script that now you're interviewing them and they get to talk."
  },
  { startTime: 7522.39, person: 'Phillip', text: " Don't ask the recruiter that question." },
  { startTime: 7523.95, person: 'Karol', text: ' No, no.' },
  { startTime: 7524.43, person: 'Phillip', text: " You can, they'll do the bit, the whole thing." },
  { startTime: 7526.97, person: 'Phillip', text: ' Yeah.' },
  {
    startTime: 7527.71,
    person: 'Phillip',
    text: " But that's a good question to ask a peer, you know, who's assessing you on a technical side of it, because you'll get so much more information."
  },
  {
    startTime: 7534.79,
    person: 'Phillip',
    text: " You'll get the answers to training, the team, you know, and then if a manager, for instance, the manager's great question."
  },
  {
    startTime: 7541.15,
    person: 'Phillip',
    text: " So it's like, I did, I forgot to ask the recruiter in my initial call, HR call or whatever, but maybe you could tell me, so why is it you're recruiting for this role?"
  },
  {
    startTime: 7550.81,
    person: 'Phillip',
    text: " And, and, you know, that's definitely great information."
  },
  {
    startTime: 7554.47,
    person: 'Phillip',
    text: " It's like, you know, the person left, you know, it's a new position, straight away, you've got a lot of information for yourself, right?"
  },
  {
    startTime: 7559.89,
    person: 'Phillip',
    text: ' So okay, someone left, then why did they leave?'
  },
  { startTime: 7563.43, person: 'Phillip', text: ' May I ask?' },
  { startTime: 7564.59, person: 'Phillip', text: " I mean, that's taking it too far." },
  { startTime: 7566.07, person: 'Phillip', text: " That's confidence, right?" },
  {
    startTime: 7567.17,
    person: 'Phillip',
    text: " But that's great information for the hiring manager."
  },
  {
    startTime: 7570.01,
    person: 'Phillip',
    text: ' This guy, this person is inquisitive, you know, they might be stressful.'
  },
  {
    startTime: 7576.15,
    person: 'Phillip',
    text: " If, if they get nervous and stressful, it's probably there's a reason behind it, because someone escaped that job, maybe."
  },
  { startTime: 7582.55, person: 'Karol', text: ' Exactly.' },
  {
    startTime: 7583.21,
    person: 'Karol',
    text: ' So this is, this is also a way to assess the company.'
  },
  {
    startTime: 7586.21,
    person: 'Karol',
    text: " And again, reminder, if you're in the recruitment process, it's not only that company recruiting you, but you're also recruiting that company, in the sense."
  },
  { startTime: 7594.47, person: 'Karol', text: ' Absolutely.' },
  { startTime: 7594.63, person: 'Karol', text: " It's a transactional way." },
  { startTime: 7596.97, person: 'Phillip', text: ' Yeah, absolutely.' },
  {
    startTime: 7598.15,
    person: 'Phillip',
    text: " Yeah, you're checking out your next family, right?"
  },
  {
    startTime: 7600.73,
    person: 'Phillip',
    text: ' So, you know, you want to make sure, you know.'
  },
  { startTime: 7603.11, person: 'Karol', text: ' Maybe not family, but yeah.' },
  { startTime: 7605.87, person: 'Karol', text: " I'm only joking, you know." },
  {
    startTime: 7608.69,
    person: 'Karol',
    text: " But it is, it is important to ask those questions, because you're not only projecting your confidence about yourself in a context of that specific role, but also you're fishing for those red flags."
  },
  { startTime: 7620.63, person: 'Karol', text: " And it's very important to feel for that." },
  {
    startTime: 7623.41,
    person: 'Phillip',
    text: " Yeah, if you can be selective, of course, if you're desperate, but no one's going to say you're desperate and everything."
  },
  {
    startTime: 7629.43,
    person: 'Phillip',
    text: " But if you are, then of course, you know, it's a different position you're in."
  },
  {
    startTime: 7632.89,
    person: 'Phillip',
    text: " However, you know, it's important to ask this question."
  },
  {
    startTime: 7636.21,
    person: 'Phillip',
    text: ' I mean, at the end of the day, we spend more time at work than with our own families, right?'
  },
  {
    startTime: 7641.63,
    person: 'Phillip',
    text: " So you might as well enjoy the people you're working with in some shape, way or form."
  },
  {
    startTime: 7646.41,
    person: 'Karol',
    text: ' And not get burned out by the culture, by the interactions in the office, by politics.'
  },
  {
    startTime: 7652.13,
    person: 'Phillip',
    text: " If you can, that's why I always say, even if you're in a stable, happy job, go for one or two interviews a year."
  },
  {
    startTime: 7661.15,
    person: 'Phillip',
    text: " Experience it, see what your value is on the market, see, you know, how's it all going."
  },
  {
    startTime: 7665.81,
    person: 'Phillip',
    text: " One, you're always more employable when you're employed."
  },
  {
    startTime: 7669.43,
    person: 'Phillip',
    text: " And two, get a feel of what the market's out there like, you know."
  },
  {
    startTime: 7672.81,
    person: 'Phillip',
    text: " You might, you know, explore, be an opportunist, you know, don't leave it for the last minute."
  },
  {
    startTime: 7678.45,
    person: 'Phillip',
    text: ' And the worst thing you can possibly do is quit your job and then start looking for work.'
  },
  {
    startTime: 7681.87,
    person: 'Phillip',
    text: " I mean, that's going to put you in a terrible spot, right?"
  },
  { startTime: 7686.21, person: 'Karol', text: " That's a very unfortunate situation." },
  { startTime: 7688.29, person: 'Karol', text: " And did that once, that wasn't fun." },
  { startTime: 7690.97, person: 'Karol', text: ' That was stressful.' },
  { startTime: 7692.67, person: 'Phillip', text: ' Yeah.' },
  {
    startTime: 7693.11,
    person: 'Karol',
    text: ' I mean, at that time, the job market was very nice.'
  },
  { startTime: 7697.05, person: 'Karol', text: ' So I actually found the job really quick.' },
  { startTime: 7700.63, person: 'Karol', text: " But that wasn't a good fit." },
  {
    startTime: 7704.01,
    person: 'Karol',
    text: ' Despite finding it very quickly, I thought it would be nice, good.'
  },
  {
    startTime: 7707.45,
    person: 'Karol',
    text: " But then I was still young and didn't have proper vetting techniques in my portfolio skills."
  },
  { startTime: 7714.85, person: 'Karol', text: " Now it's a little bit different." },
  { startTime: 7716.15, person: 'Phillip', text: " Lesson you've learned." },
  { startTime: 7717.13, person: 'Karol', text: ' Oh, yeah, definitely.' },
  { startTime: 7718.93, person: 'Karol', text: ' Definitely.' },
  {
    startTime: 7719.99,
    person: 'Karol',
    text: " So yeah, like an ending note, because we're, we run here for over two hours now."
  },
  { startTime: 7726.39, person: 'Karol', text: " So kind of expected, wasn't it, Karl?" },
  {
    startTime: 7728.19,
    person: 'Karol',
    text: ' Yeah, we could go on for another two, that would be easy.'
  },
  {
    startTime: 7731.57,
    person: 'Karol',
    text: ' But yeah, a key element in terms of being recruited and working with a recruiter and working further in interviews, come prepared, ask questions.'
  },
  {
    startTime: 7744.75,
    person: 'Karol',
    text: ' The more questions you ask, the better it will be.'
  },
  {
    startTime: 7749.89,
    person: 'Karol',
    text: " You project your confidence, you'll be able to understand the context better, you'll get more information to make your decision easier, especially if you're just looking for a new job, because you have a stable job and you're just looking for a new career path."
  },
  { startTime: 7767.11, person: 'Karol', text: ' You want to vet those companies then, right?' },
  {
    startTime: 7770.23,
    person: 'Karol',
    text: ' You want to do the research properly so that you get the good fit, the best fit for yourself rather than the first one in line.'
  },
  { startTime: 7779.31, person: 'Karol', text: " If you're desperate, yes." },
  { startTime: 7780.81, person: 'Karol', text: " If you're unemployed, yes." },
  { startTime: 7782.11, person: 'Karol', text: ' This is a bit of a more difficult situation.' },
  {
    startTime: 7784.33,
    person: 'Karol',
    text: ' You need that employment to get that financial stability so that you can move on from that.'
  },
  { startTime: 7790.21, person: 'Karol', text: " It's a little bit different." },
  {
    startTime: 7791.53,
    person: 'Karol',
    text: ' You have less options to work with you, less wiggle space, right?'
  },
  { startTime: 7796.89, person: 'Karol', text: ' But in general, ask questions.' },
  { startTime: 7804.54, person: 'Phillip', text: ' Absolutely.' },
  { startTime: 7805.92, person: 'Phillip', text: " It's a two-way process, right?" },
  {
    startTime: 7810.9,
    person: 'Phillip',
    text: ' If you have a gut feeling, it goes from both sides, right?'
  },
  {
    startTime: 7815.18,
    person: 'Phillip',
    text: ' If you have a gut feeling in some things, right, you probably believe in your gut feeling as well.'
  },
  { startTime: 7818.9, person: 'Phillip', text: ' Explore it if you can further, right?' },
  {
    startTime: 7822.36,
    person: 'Phillip',
    text: ' Like I mentioned a couple of times today, changing jobs, moving jobs, desperately looking for a job, these are critical moments in your life.'
  },
  {
    startTime: 7835.46,
    person: 'Phillip',
    text: ' You will feel appalled when people, recruiters, ghost you.'
  },
  {
    startTime: 7839.98,
    person: 'Phillip',
    text: " They don't recognise your skills, your experience."
  },
  { startTime: 7842.94, person: 'Phillip', text: " It's the worst feeling ever, right?" },
  { startTime: 7844.26, person: 'Phillip', text: " You feel like you're alone." },
  {
    startTime: 7845.28,
    person: 'Phillip',
    text: " It's like all you're seeing is other people enjoying their jobs."
  },
  {
    startTime: 7850.72,
    person: 'Phillip',
    text: " LinkedIn is a fucked up place because when people are working, everything's beautiful, right?"
  },
  {
    startTime: 7856.02,
    person: 'Phillip',
    text: " It's like an Instagram place when it comes to work."
  },
  {
    startTime: 7858.34,
    person: 'Phillip',
    text: " But when you're looking for work, it's a hard grind."
  },
  { startTime: 7861.94, person: 'Phillip', text: ' It is.' },
  { startTime: 7862.88, person: 'Phillip', text: ' Keep going and utilise your network, really.' },
  {
    startTime: 7868.48,
    person: 'Phillip',
    text: " I mean, like I've mentioned, Luke, utilise your network."
  },
  {
    startTime: 7873.64,
    person: 'Phillip',
    text: " Go out, hunt down your former colleagues, check out what they're up to."
  },
  {
    startTime: 7880.08,
    person: 'Phillip',
    text: " If you've had really bad experiences with them, then probably you won't want to reconnect with them."
  },
  { startTime: 7884.76, person: 'Phillip', text: ' But find those you had good connections with.' },
  { startTime: 7887.18, person: 'Phillip', text: " Think, who's the best?" },
  {
    startTime: 7889.5,
    person: 'Phillip',
    text: " I don't know, who do I aspire to who I know, who I've worked with in the past, who is absolutely amazing at their job?"
  },
  { startTime: 7894.94, person: 'Phillip', text: " Take a look at what they're doing." },
  { startTime: 7896.68, person: 'Phillip', text: ' Reach out to them.' },
  { startTime: 7897.52, person: 'Phillip', text: ' Ask for some advice.' },
  {
    startTime: 7898.54,
    person: 'Phillip',
    text: " And like you say, when you're researching jobs, cool."
  },
  {
    startTime: 7904.58,
    person: 'Phillip',
    text: ' If you want to apply, you can go apply crazy nowadays, of course, 100 jobs and then you get no results.'
  },
  {
    startTime: 7909.7,
    person: 'Phillip',
    text: " I'd say, do a little bit more research as well."
  },
  { startTime: 7912.9, person: 'Phillip', text: ' Check out on LinkedIn.' },
  {
    startTime: 7913.68,
    person: 'Phillip',
    text: ' Do you have any common connections working there or have previously worked there?'
  },
  {
    startTime: 7920.4,
    person: 'Phillip',
    text: ' Remember, you need to be seen, you need to be visible.'
  },
  { startTime: 7924.88, person: 'Phillip', text: ' LinkedIn is a fantastic tool if used wisely.' },
  { startTime: 7927.96, person: 'Phillip', text: " We've shared a lot of awesome tips." },
  { startTime: 7930.36, person: 'Phillip', text: " I think there's been some really cool things." },
  {
    startTime: 7931.66,
    person: 'Phillip',
    text: " I've learned a few things from you today as well."
  },
  { startTime: 7933.72, person: 'Phillip', text: " It's amazing." },
  { startTime: 7935.94, person: 'Phillip', text: ' And just be kind, be respectful.' },
  { startTime: 7940.78, person: 'Phillip', text: ' And be kind to yourself.' },
  {
    startTime: 7942.46,
    person: 'Phillip',
    text: " Be kind to yourself, but also define who you're speaking to, the recruiter, what kind of recruiter you're speaking to."
  },
  {
    startTime: 7952.08,
    person: 'Phillip',
    text: " Be forgiving, I guess, because if you're going to be grumpy all your life about one company not getting back to you, well, don't buy from them whatever they're selling or doing or offering."
  },
  { startTime: 7962.62, person: 'Phillip', text: " You probably won't." },
  { startTime: 7963.68, person: 'Phillip', text: ' But just move on.' },
  { startTime: 7965.1, person: 'Phillip', text: " It's not the end of the world." },
  {
    startTime: 7965.84,
    person: 'Phillip',
    text: " It's probably down to someone, some human's mistake, and that's it."
  },
  {
    startTime: 7970.9,
    person: 'Phillip',
    text: " They're probably a great laugh over a beer when you think about it."
  },
  { startTime: 7973.9, person: 'Karol', text: ' Someday later, yeah.' },
  {
    startTime: 7976.18,
    person: 'Karol',
    text: " And remember that if somebody is behaving a certain way towards you, it's not about you, it's about them."
  },
  {
    startTime: 7984.72,
    person: 'Karol',
    text: ' And they might just be having a very shitty day, so their behaviour is exactly the same way.'
  },
  {
    startTime: 7993.68,
    person: 'Karol',
    text: " Or they might be having something really going on in their life that they're behaving and acting out without any reason."
  },
  { startTime: 8002.64, person: 'Karol', text: " It's not about you, it's about them." },
  {
    startTime: 8005.04,
    person: 'Karol',
    text: " The rejections that you get from processes, it's still not about you, it's about the company searching for something."
  },
  { startTime: 8014.18, person: 'Karol', text: " It wasn't a match, well, it happens." },
  { startTime: 8016.56, person: 'Karol', text: ' Maybe you got away with that.' },
  {
    startTime: 8018.36,
    person: 'Phillip',
    text: " Maybe you should be very fortunate that you didn't get that job, for instance, right?"
  },
  { startTime: 8021.6, person: 'Karol', text: ' Perhaps.' },
  {
    startTime: 8022.64,
    person: 'Karol',
    text: " You don't know and you will not know, but the rejection letters you get or ghosting that you get, it's not about you, it's about those companies."
  },
  {
    startTime: 8031.94,
    person: 'Karol',
    text: " The way they behave, the way the recruiters behave, it's not about you as a candidate, it's about those people, those companies."
  },
  { startTime: 8039.26, person: 'Karol', text: " Don't worry about it." },
  { startTime: 8040.02, person: 'Karol', text: " It's very hard." },
  {
    startTime: 8041.56,
    person: 'Karol',
    text: ' I know I lived through that over the last three months.'
  },
  {
    startTime: 8045.42,
    person: 'Karol',
    text: " Every single rejection letter that I got, especially those, over 90% of those were based on insufficient language skills because I'm expected to speak Dutch and I speak Dutch, but sometimes nobody even tested that."
  },
  { startTime: 8066.86, person: 'Karol', text: ' Those rejection letters, they hit hard.' },
  { startTime: 8069.58, person: 'Karol', text: ' They are very difficult to swallow.' },
  { startTime: 8071.58, person: 'Karol', text: ' Again, not about you.' },
  {
    startTime: 8074.84,
    person: 'Karol',
    text: ' They do not discredit your value as a specialist, as a person, as a developer, architect, tester, whoever else.'
  },
  {
    startTime: 8086.96,
    person: 'Karol',
    text: " That's a very important note here because recruitment for the candidate is hard."
  },
  { startTime: 8093.04, person: 'Karol', text: " It's stressful." },
  { startTime: 8094.38, person: 'Karol', text: " You're applying hundreds of CVs." },
  {
    startTime: 8096.48,
    person: 'Karol',
    text: " It's a drama, but unfortunately, that's what the market is."
  },
  {
    startTime: 8101.12,
    person: 'Karol',
    text: " We can make that a little bit easier with tips and tricks and changing your CV, changing your LinkedIn profile, creating that visibility for yourself, going to networking events, meeting new people, having those conversations, or just reaching out to your LinkedIn network, perfectly fine as well, but it's going to be hard work anyways."
  },
  {
    startTime: 8123.88,
    person: 'Karol',
    text: " If you're unemployed, that's going to be triple the hard work because you get the stress of your financial stability, trying to find new gig to be stable again, right?"
  },
  { startTime: 8137.53, person: 'Karol', text: ' Deep breath.' },
  { startTime: 8139.09, person: 'Karol', text: ' And what was that?' },
  {
    startTime: 8140.37,
    person: 'Karol',
    text: ' The British Second World War poster, keep calm and carry on, right?'
  },
  { startTime: 8145.59, person: 'Phillip', text: ' Keep calm and carry on.' },
  { startTime: 8146.59, person: 'Phillip', text: ' Exactly.' },
  { startTime: 8147.01, person: 'Phillip', text: ' Yeah.' },
  {
    startTime: 8148.87,
    person: 'Karol',
    text: " That's the only way about it, but absolutely, it's going to be definitely stressful and difficult to do."
  },
  { startTime: 8158.43, person: 'Phillip', text: ' I always have this.' },
  {
    startTime: 8161.81,
    person: 'Phillip',
    text: " I always share this with, and I've seen some amazing stories in the world of junior roles, which are pretty much non-existent today."
  },
  { startTime: 8169.91, person: 'Karol', text: ' Unfortunately.' },
  { startTime: 8171.17, person: 'Phillip', text: " I've seen so many success stories." },
  {
    startTime: 8173.09,
    person: 'Phillip',
    text: " I've been part of them as well, which is amazing."
  },
  {
    startTime: 8175.57,
    person: 'Phillip',
    text: " And I just got to say, perseverance, determination is a big thing, and it's easily said than done."
  },
  {
    startTime: 8183.69,
    person: 'Phillip',
    text: ' Those who are persistent and determined will succeed.'
  },
  { startTime: 8187.03, person: 'Phillip', text: " It's as simple as that." },
  {
    startTime: 8188.71,
    person: 'Phillip',
    text: " And it's hard to say, you say, oh yeah, it's easy for you to say you've got a job."
  },
  {
    startTime: 8192.65,
    person: 'Phillip',
    text: " Well, actually, many times in my life, I've utilised LinkedIn in such a way that I feel confident."
  },
  {
    startTime: 8203.93,
    person: 'Phillip',
    text: ' Even if I were to lose everything I had today, I would start grinding again from scratch.'
  },
  { startTime: 8211.309, person: 'Phillip', text: " It's tough out there." },
  {
    startTime: 8212.83,
    person: 'Phillip',
    text: " I know I've got a foundation where I help people looking for work."
  },
  { startTime: 8217.35, person: 'Phillip', text: " You know, it's, people need support." },
  {
    startTime: 8222.07,
    person: 'Phillip',
    text: " So, if you really are struggling, you desperately need to find a mentor, someone who's going to help you out."
  },
  {
    startTime: 8227.469,
    person: 'Phillip',
    text: ' Someone who you can just bounce your ideas off.'
  },
  { startTime: 8229.77, person: 'Phillip', text: ' Carol, you had this, right?' },
  { startTime: 8231.69, person: 'Phillip', text: ' We connected.' },
  {
    startTime: 8232.73,
    person: 'Phillip',
    text: " I know you've got a lot of recruiters in your connection, in your network that you connect with."
  },
  { startTime: 8236.809, person: 'Phillip', text: ' But you need this.' },
  {
    startTime: 8237.709,
    person: 'Phillip',
    text: ' You need to have a different perspective on things.'
  },
  { startTime: 8240.09, person: 'Phillip', text: ' And good people will help.' },
  {
    startTime: 8242.07,
    person: 'Phillip',
    text: ' So, just go out there and find good people to support you.'
  },
  { startTime: 8245.03, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 8245.309,
    person: 'Karol',
    text: " If you don't have a network, just reach out to random people."
  },
  {
    startTime: 8248.67,
    person: 'Karol',
    text: ' There are people out there that will help you just because they can.'
  },
  { startTime: 8252.69, person: 'Karol', text: ' Not because they have to.' },
  { startTime: 8254.07, person: 'Karol', text: ' Not because they need to.' },
  { startTime: 8256.23, person: 'Karol', text: ' They will help you because they can.' },
  { startTime: 8257.93, person: 'Karol', text: ' And just grow your network.' },
  { startTime: 8259.29, person: 'Karol', text: ' Ask for help.' },
  { startTime: 8260.03, person: 'Karol', text: ' Ask for their opinion on things.' },
  {
    startTime: 8262.91,
    person: 'Karol',
    text: ' Send them your CV for them to help you redo that CV.'
  },
  { startTime: 8268.53, person: 'Karol', text: ' Ask their opinion about your LinkedIn profile.' },
  { startTime: 8272.19, person: 'Karol', text: " They'll help you." },
  { startTime: 8273.57, person: 'Karol', text: ' There are people like that.' },
  { startTime: 8274.73, person: 'Karol', text: " That's not a problem." },
  { startTime: 8276.15, person: 'Karol', text: ' You and me included, right?' },
  {
    startTime: 8278.29,
    person: 'Karol',
    text: ' If a random person would approach me on LinkedIn to ask me a question about, hey, what do you think about my LinkedIn profile or CV?'
  },
  { startTime: 8286.309, person: 'Karol', text: " I wouldn't mind answering that." },
  {
    startTime: 8287.83,
    person: 'Karol',
    text: ' Maybe I might not have time for that on the spot.'
  },
  { startTime: 8292.049, person: 'Karol', text: ' Yeah.' },
  { startTime: 8292.35, person: 'Karol', text: ' But you would want to help.' },
  {
    startTime: 8293.85,
    person: 'Karol',
    text: " I would say, hey, can you remind me about that in about eight hours when I'm off my job?"
  },
  {
    startTime: 8300.09,
    person: 'Karol',
    text: " And I'll have more time on my hands and more space in my brain to look at it and actually put the time in to look at it."
  },
  { startTime: 8307.95, person: 'Karol', text: " And then I'm happy to do so." },
  { startTime: 8309.77, person: 'Karol', text: " At the moment, I'm busy." },
  { startTime: 8311.15, person: 'Phillip', text: " That's good to know." },
  {
    startTime: 8311.95,
    person: 'Phillip',
    text: " So, next time I get asked that, I'll just send them your way then."
  },
  {
    startTime: 8316.75,
    person: 'Karol',
    text: " Don't spam me though, because I'll stop doing that then."
  },
  { startTime: 8320.969, person: 'Phillip', text: " No, I'm only kidding." },
  { startTime: 8322.11, person: 'Phillip', text: " I'm only kidding." },
  { startTime: 8323.49, person: 'Phillip', text: ' But yeah, thank you.' },
  { startTime: 8324.43, person: 'Phillip', text: ' Thank you so much for this experience, Carol.' },
  {
    startTime: 8327.57,
    person: 'Phillip',
    text: " And thank you for those who've persistently, determinedly stayed with us to the end."
  },
  { startTime: 8332.889, person: 'Karol', text: ' Yeah.' },
  { startTime: 8333.389, person: 'Karol', text: " And we'll be back with the topic." },
  {
    startTime: 8336.41,
    person: 'Karol',
    text: " We'll grab Gabby somewhere in October or November."
  },
  { startTime: 8340.469, person: 'Karol', text: " We'll be back on the topic of recruitment." },
  {
    startTime: 8342.549,
    person: 'Karol',
    text: " We'll dive into the recruitment tools to see how recruiters actually search for people."
  },
  { startTime: 8350.49, person: 'Karol', text: ' Gabby is a whiz at Boolean searches.' },
  { startTime: 8352.93, person: 'Karol', text: ' You know your stuff with LinkedIn tools.' },
  {
    startTime: 8356.309,
    person: 'Karol',
    text: " And we'll dive into that later in the year just to show you what else we can do and how else to prepare for a job hunt, job search."
  },
  {
    startTime: 8367.15,
    person: 'Karol',
    text: " And if you are interested in topics also related to burnout or cognitive load or basically mental health, we'll be having those on the stream as well."
  },
  {
    startTime: 8379.15,
    person: 'Karol',
    text: " Actually, now I'm going to switch here a little bit."
  },
  { startTime: 8383.129, person: 'Karol', text: ' Show time.' },
  {
    startTime: 8384.25,
    person: 'Karol',
    text: " The next stream around, which is next week, literally next week, is with Radek Orszewski, who's a Lean Agile coach and a consultant, and I think the only accredited Kanban trainer in Poland."
  },
  {
    startTime: 8399.31,
    person: 'Karol',
    text: " And we're going to be talking about recognising and managing cognitive load, which is something that not a lot of people talk about, but it's very important for psychological health in the workplace, especially in IT, because we deal with a lot of load, a lot of information."
  },
  {
    startTime: 8416.77,
    person: 'Karol',
    text: " And we'll be diving into that topic as well amongst other technical topics that are down the line with a loosely coupled live stream."
  },
  { startTime: 8425.35, person: 'Karol', text: ' So hop on the stream next week.' },
  { startTime: 8428.63, person: 'Karol', text: ' Subscribe to our social media.' },
  {
    startTime: 8432.33,
    person: 'Karol',
    text: ' You can read more of the technical articles on Bridging the Gap EU Com and on Substack.'
  },
  {
    startTime: 8440.45,
    person: 'Karol',
    text: ' Subscribe to the YouTube channel to get notified or just follow me on LinkedIn.'
  },
  {
    startTime: 8445.73,
    person: 'Karol',
    text: " If you don't have me in your network on LinkedIn, just pop an invite or click follow on my profile and you'll get all those posts about all those different things."
  },
  {
    startTime: 8457.11,
    person: 'Karol',
    text: " And we're, well, the live stream is loosely coupled, so we're loosely coupling the topics that are related to IT work and the field of enterprise application integration."
  },
  { startTime: 8467.61, person: 'Karol', text: ' So yeah, join the next stream.' },
  {
    startTime: 8471.49,
    person: 'Karol',
    text: " And Filip, we'll see each other on the live stream somewhere in October, November."
  },
  {
    startTime: 8476.63,
    person: 'Karol',
    text: " I'll be reaching out in a DM to schedule that later when Gabby recovers from her health-related issues."
  },
  { startTime: 8487.43, person: 'Karol', text: ' Yeah, I look forward to that.' },
  { startTime: 8488.81, person: 'Karol', text: " I can't wait." },
  { startTime: 8489.19, person: 'Karol', text: ' Yeah, this is going to be a very fun one.' },
  { startTime: 8491.39, person: 'Karol', text: ' All right.' },
  {
    startTime: 8492.15,
    person: 'Karol',
    text: ' Thank you all for joining the stream today, and see you soon.'
  }
])
</script>

<style scoped></style>
