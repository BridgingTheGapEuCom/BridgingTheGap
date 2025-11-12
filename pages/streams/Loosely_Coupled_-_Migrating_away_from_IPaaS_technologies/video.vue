<template>
  <div class="w-full">
    <StreamLayout
      :transcript="transcript"
      name="Loosely Coupled - Migrating away from IPaaS technologies"
      video-id="wghe6cKxNaY"
    />
  </div>
</template>

<script lang="ts" setup>
const transcript = ref([
  {
    startTime: 94.09,
    person: 'Karol',
    text: ' Good morning, good afternoon, and good evening to everybody watching.'
  },
  {
    startTime: 98.07,
    person: 'Karol',
    text: ' I hope you have a nice refreshing cup of whatever you like to drink.'
  },
  { startTime: 101.95, person: 'Karol', text: " For me, it's a nice jug of coffee today." },
  {
    startTime: 104.85,
    person: 'Karol',
    text: ' And I welcome you to another episode of Loosely Coupled by Bridging the Gap.'
  },
  {
    startTime: 110.53,
    person: 'Karol',
    text: " My name is Karol Skrzymowski, and I'll be your host tonight."
  },
  {
    startTime: 113.91,
    person: 'Karol',
    text: ' And today, a controversial topic, migrating away from iPaaS or iPaaS technologies.'
  },
  {
    startTime: 123.11,
    person: 'Karol',
    text: ' And this already created quite a stir, because I already had some pings from people at Boomi and a conversation with a colleague from MuleSoft, like, Carlos, what the hell are you doing?'
  },
  { startTime: 135.71, person: 'Karol', text: ' Why are you talking about that?' },
  { startTime: 137.47, person: 'Karol', text: " What's going on?" },
  { startTime: 138.35, person: 'Karol', text: " You're a community leader at MuleSoft." },
  {
    startTime: 139.89,
    person: 'Karol',
    text: ' What are you starting to advocate for moving away from iPaaSes?'
  },
  { startTime: 143.73, person: 'Karol', text: " Well, we'll dig into that." },
  {
    startTime: 146.41,
    person: 'Karol',
    text: " But before we dig into the topic, let me introduce you, Brian Labelle, coming to us from Canada, an enterprise architect with, correctly, if I'm wrong, 40 years of experience in IT."
  },
  { startTime: 159.55, person: 'Karol', text: ' Welcome, Brian.' },
  { startTime: 160.35, person: 'Brian', text: ' Yeah.' },
  { startTime: 162.59, person: 'Brian', text: ' Thank you.' },
  { startTime: 163.17, person: 'Brian', text: ' Thanks for having me.' },
  {
    startTime: 164.57,
    person: 'Brian',
    text: " And yeah, I think we're going to have a fun discussion, because there is controversy."
  },
  {
    startTime: 173.05,
    person: 'Brian',
    text: " And the idea of doing this, of moving away from iPaaS, let's say, or Boomi, MuleSoft, that kind of threatens these large organisations, I guess, and they wonder, oh, like, we're going to lose customers."
  },
  {
    startTime: 189.67,
    person: 'Brian',
    text: " You know, obviously, I think there's something that's sometimes in IT, you know, we think, oh, we're scientists, let's say, like, as engineers and architects, we're like, this is the logical thing that we're doing here."
  },
  {
    startTime: 212.03,
    person: 'Brian',
    text: " But of course, any kinds of decisions around stuff like technology that we're using behind it, there's a lot of money."
  },
  {
    startTime: 221.37,
    person: 'Brian',
    text: " There's a lot of money behind these big organisations like Boomi, MuleSoft."
  },
  {
    startTime: 226.51,
    person: 'Brian',
    text: " And it's like, what I often tell, and sometimes I tell my kids this sometimes, is that you have to think about the stakeholder."
  },
  { startTime: 236.45, person: 'Brian', text: ' Who is this saying this?' },
  { startTime: 239.39, person: 'Brian', text: ' Like, why would they say this?' },
  {
    startTime: 242.03,
    person: 'Brian',
    text: ' And, you know, are they always in your best interest?'
  },
  { startTime: 245.61, person: 'Brian', text: ' They have a stake in the discussion.' },
  { startTime: 248.55, person: 'Brian', text: " So it's not necessarily always unbiased." },
  {
    startTime: 253.39,
    person: 'Brian',
    text: " And I'd like to think that something that I've always, and it goes back to my, where it came from, and how it came up."
  },
  {
    startTime: 264.35,
    person: 'Brian',
    text: " And that's why I was going to tell you, like, maybe I'm going to go over the whole 40 years here and tell you exactly why I would come to this idea."
  },
  { startTime: 273.19, person: 'Brian', text: " But I won't, I won't, we only have two hours." },
  { startTime: 276.87, person: 'Brian', text: " So I don't think I can do that." },
  {
    startTime: 279.29,
    person: 'Karol',
    text: ' But I mean, I was like, oh, we actually have a bit of an echo on your side, I hear.'
  },
  { startTime: 287.15, person: 'Karol', text: ' Because I hear myself.' },
  { startTime: 288.45, person: 'Karol', text: " So that's going to be a bit of a tricky." },
  { startTime: 292.15, person: 'Karol', text: ' All right.' },
  {
    startTime: 292.49,
    person: 'Karol',
    text: ' So before we jump into the stakeholders and the deep end of things, you have 40 years of experience in IT.'
  },
  {
    startTime: 301.09,
    person: 'Karol',
    text: " Let's have an overview of what you've been doing."
  },
  {
    startTime: 303.43,
    person: 'Karol',
    text: " Because you've been doing enterprise application integration with integration platforms, but that's just the only part of it."
  },
  { startTime: 312.55, person: 'Karol', text: ' Right?' },
  { startTime: 313.27, person: 'Karol', text: ' In that sense.' },
  {
    startTime: 315.11,
    person: 'Brian',
    text: ' Yeah, so I can tell you, and I wanted to tell you a little bit about it.'
  },
  {
    startTime: 319.47,
    person: 'Brian',
    text: " Because like I said, it's, it informs my, where I'm coming from, right?"
  },
  {
    startTime: 324.41,
    person: 'Brian',
    text: " So, and so I went to McGill University, that's a big university, it's kind of even worldwide, is one of the top universities."
  },
  {
    startTime: 334.47,
    person: 'Brian',
    text: ' So I went there, and I took, so I was there between 81 in 1981, 1984.'
  },
  { startTime: 341.51, person: 'Brian', text: ' And I was taking computer courses.' },
  {
    startTime: 343.35,
    person: 'Brian',
    text: ' And we were studying, there were lots of different programming languages at the time, I actually took a course, which is like a third level course, third year course in programming languages.'
  },
  {
    startTime: 353.25,
    person: 'Brian',
    text: ' And we did PL1, Snowball, and APL, just to look at different languages.'
  },
  {
    startTime: 359.83,
    person: 'Brian',
    text: ' So right from, you know, and so this would have been in 1982, or something.'
  },
  {
    startTime: 365.27,
    person: 'Brian',
    text: ' So like 42, or three years ago, my mind was like, what language are we using?'
  },
  { startTime: 371.95, person: 'Brian', text: ' And why?' },
  { startTime: 372.55, person: 'Brian', text: ' What are the advantages of this language?' },
  {
    startTime: 374.65,
    person: 'Brian',
    text: ' So, and then, but then, okay, so then I started working, I graduated, I was 21.'
  },
  {
    startTime: 381.71,
    person: 'Brian',
    text: ' But early on, I started as a business analyst, at one of the insurance companies that, in Canada.'
  },
  {
    startTime: 390.05,
    person: 'Brian',
    text: ' So it was huge, we had millions of customers, millions of dollars.'
  },
  {
    startTime: 393.23,
    person: 'Brian',
    text: " So we're working with, with big technology here, we had a mainframe."
  },
  {
    startTime: 397.93,
    person: 'Brian',
    text: " And we even had to like, share out our mainframe to other people, there weren't that many mainframes."
  },
  { startTime: 402.49, person: 'Brian', text: ' But we had, we were using COBOL.' },
  {
    startTime: 404.73,
    person: 'Brian',
    text: ' And we had a big accounting, billing, commission system.'
  },
  {
    startTime: 410.03,
    person: 'Brian',
    text: ' So I was working with that, I was working with pensions, and building systems.'
  },
  {
    startTime: 414.07,
    person: 'Brian',
    text: " And then we also had, so we have COBOL, COBOL is like, if you're a programmer, you're using COBOL, right?"
  },
  {
    startTime: 419.71,
    person: 'Brian',
    text: " Like, the other stuff, there were some PCs coming in, that wasn't really considered real, I think, but, and then, but then they, PCs came in, using BASIC, people writing stuff on Excel, people writing stuff in SEED, and lots of different technologies."
  },
  { startTime: 436.01, person: 'Brian', text: " So there's APL, other languages." },
  {
    startTime: 438.11,
    person: 'Brian',
    text: ' So, so the reason I say that is that so the first six years of my career, I was working in lots of different languages.'
  },
  {
    startTime: 445.83,
    person: 'Brian',
    text: " So it wasn't really anything set, maybe COBOL would be the biggest one."
  },
  {
    startTime: 449.27,
    person: 'Brian',
    text: " And then also, different database, we're using vSAN."
  },
  {
    startTime: 454.25,
    person: 'Brian',
    text: ' And then so lots of interesting things happened around like the 89/90, where we had DB2 came around.'
  },
  {
    startTime: 463.01,
    person: 'Brian',
    text: ' So we had relational databases, we had, which was huge, and SQL, which was really fundamental.'
  },
  {
    startTime: 472.39,
    person: 'Brian',
    text: ' And then, you know, there was C, C++, PCs were coming along, people were building stuff on that.'
  },
  { startTime: 479.53, person: 'Brian', text: ' People were networking those PCs.' },
  { startTime: 481.69, person: 'Brian', text: ' Anyway, so I could just keep going on and on.' },
  {
    startTime: 483.83,
    person: 'Brian',
    text: " But so, but the bigger important thing for me is that it wasn't, I wasn't, you know, wasn't that I was just using something."
  },
  {
    startTime: 492.37,
    person: 'Brian',
    text: " And I think that there's a lot of people now, maybe they grew up with Mulesoft, grew up with Boomi, grew up with iPaaSes, and that's what they've been using, right."
  },
  {
    startTime: 500.23,
    person: 'Brian',
    text: ' But I, we had, we had the same business challenges, business requirements, and we were solving them in different ways, different technology.'
  },
  {
    startTime: 509.47,
    person: 'Brian',
    text: " And so I always see stuff, I'm thinking more of the whether the requirements, what's the technology we should use?"
  },
  { startTime: 517.789, person: 'Brian', text: ' Ultimately, I ended up in Java.' },
  { startTime: 519.33, person: 'Brian', text: ' So I did, I have a lot of Java.' },
  { startTime: 521.69, person: 'Brian', text: ' So and I really like Java from the beginning.' },
  {
    startTime: 524.33,
    person: 'Brian',
    text: " So, you know, I say 20, but it's really maybe 25-30 years."
  },
  { startTime: 529.27, person: 'Brian', text: ' I know in 92, I was using it.' },
  { startTime: 534.07, person: 'Karol', text: ' So, yeah, okay.' },
  {
    startTime: 535.77,
    person: 'Karol',
    text: " I mean, just from the perspective of the languages you're using, APL, I really have to Google that."
  },
  { startTime: 544.77, person: 'Karol', text: " It's like that archaic." },
  {
    startTime: 547.09,
    person: 'Karol',
    text: ' I mean, if I look at, for example, my conversations with my mom over programming, because she as an engineer, she learned programming, but she was programming on punch hole cards, you know.'
  },
  { startTime: 562.27, person: 'Karol', text: " So that's the generation gap I experienced." },
  {
    startTime: 565.07,
    person: 'Karol',
    text: " But then you go APL, it's like, what the hell is APL?"
  },
  { startTime: 568.11, person: 'Karol', text: ' Never heard of that.' },
  {
    startTime: 569.39,
    person: 'Karol',
    text: " COBOL, yes, that's something I know, I've heard and understand what that is."
  },
  {
    startTime: 575.71,
    person: 'Karol',
    text: " And that's a, now it's very difficult to find people actually coding in COBOL, they're priced really high."
  },
  { startTime: 582.19, person: 'Karol', text: ' But like APL.' },
  {
    startTime: 585.43,
    person: 'Brian',
    text: ' Yeah, I can tell you a little bit about it, because it actually stands for a programming language, APL, which is funny.'
  },
  { startTime: 593.81, person: 'Brian', text: ' And then it was, it was very mathematical.' },
  {
    startTime: 595.85,
    person: 'Brian',
    text: ' And because I worked in an insurance company, they would do really compressed mathematical formulas.'
  },
  {
    startTime: 601.75,
    person: 'Brian',
    text: ' And one of the funny things when I was at McGill, we had, like, I had a typewriter, it was like an IBM typewriter.'
  },
  { startTime: 611.41, person: 'Brian', text: ' And I would, that was my input.' },
  { startTime: 614.07, person: 'Brian', text: ' And I would type this information.' },
  {
    startTime: 617.33,
    person: 'Brian',
    text: ' And what would come out was on the paper, it would print out the response.'
  },
  {
    startTime: 623.21,
    person: 'Brian',
    text: ' So my monitor was actually the printer, something that was connected into the typewriter.'
  },
  {
    startTime: 628.71,
    person: 'Brian',
    text: ' And for some characters, which were complex, I had to do backspace.'
  },
  { startTime: 632.41, person: 'Brian', text: ' And this was this symbol, and then stuff.' },
  {
    startTime: 635.57,
    person: 'Brian',
    text: ' And I would enter data, and it would show me print out what the result was, and to print out the result.'
  },
  { startTime: 641.17, person: 'Brian', text: ' So yeah, really cool technology.' },
  {
    startTime: 643.05,
    person: 'Brian',
    text: " So, you know, it's a full language, very concise mathematical language."
  },
  { startTime: 647.71, person: 'Brian', text: ' And people love that.' },
  { startTime: 649.01, person: 'Brian', text: ' Yeah, actuaries loved it.' },
  {
    startTime: 651.33,
    person: 'Karol',
    text: " Yeah, so, so in that sense, people already know you're a dinosaur, I think we all need to do a special episode of loosely coupled just invite people that have around 40 years of experience in IT for them just to reminisce of your good old times."
  },
  {
    startTime: 667.31,
    person: 'Karol',
    text: " I have a lot of photos from the museum in Rijeka in Croatia, where there's like the first 50 megabyte IBM hard magnetic drive, it was this big."
  },
  { startTime: 678.09, person: 'Karol', text: " It's the reminiscing." },
  {
    startTime: 680.45,
    person: 'Karol',
    text: ' But yeah, okay, all of that composes your background.'
  },
  {
    startTime: 682.97,
    person: 'Karol',
    text: " So you're basically a versatile programmer architect, looking back 40 years, you've touched upon so many languages."
  },
  {
    startTime: 691.53,
    person: 'Karol',
    text: " And then, of course, back then, we were solving the same problems in it as we're solving now to an extent, especially in terms of interoperability, the moment we had some sort of distributed computing, and we did have already distributed computing back then to a very small extent."
  },
  {
    startTime: 708.69,
    person: 'Karol',
    text: ' The difference between then and now is, I think, only the scale of the problem.'
  },
  { startTime: 713.93, person: 'Karol', text: ' Would you agree?' },
  {
    startTime: 714.89,
    person: 'Brian',
    text: ' Yeah, well, what I wanted to say, and some people might say, well, why should I even listen to this guy?'
  },
  {
    startTime: 721.21,
    person: 'Brian',
    text: " But really, I am actually saying it because what we were doing then, and the success that we had, in many ways, we were writing, you know, we were dealing with, you know, millions of dollars, this was a huge insurance company, with millions of customers, we're sending out statements, and it's also financial."
  },
  {
    startTime: 743.17,
    person: 'Brian',
    text: " So sometimes I've been working on some migrations of old technology, and they're like 30 years old."
  },
  {
    startTime: 750.43,
    person: 'Brian',
    text: ' And people are saying, oh, look at this old stuff, and who wrote this stuff?'
  },
  {
    startTime: 753.71,
    person: 'Brian',
    text: " And in my mind, I'm thinking, you know, this is 30 years old, it's probably been hundreds of millions of dollars."
  },
  {
    startTime: 760.11,
    person: 'Brian',
    text: " With the stuff that we're writing now, will that be around 30 years from now?"
  },
  {
    startTime: 764.75,
    person: 'Brian',
    text: ' Like this stuff worked, it worked, and some people are ready to change it.'
  },
  { startTime: 771.01, person: 'Brian', text: ' It does get patched.' },
  { startTime: 772.57, person: 'Brian', text: ' Sometimes I think the patching is a problem.' },
  {
    startTime: 775.37,
    person: 'Brian',
    text: ' When I see what, like how they patch stuff, and that causes a problem.'
  },
  {
    startTime: 779.27,
    person: 'Brian',
    text: " But anyways, but I did want to say it in respect to the fact that, that yeah, I've, I've seen a lot of technology coming and going."
  },
  { startTime: 790.49, person: 'Brian', text: ' And I see it.' },
  {
    startTime: 791.67,
    person: 'Brian',
    text: " So I want, I can provide context in terms of, of what is technology now, where's technology going."
  },
  {
    startTime: 798.61,
    person: 'Brian',
    text: " And I've often been as kind of an as an enterprise architect, brought in on what technology should be used, you know, on many contracts and consulting projects that I've worked on."
  },
  {
    startTime: 810.95,
    person: 'Brian',
    text: " And I can provide that context, because I've seen it."
  },
  {
    startTime: 814.51,
    person: 'Brian',
    text: " It's the same, same issues we have, how do we solve it?"
  },
  { startTime: 817.59, person: 'Brian', text: ' What or what technology is coming?' },
  {
    startTime: 819.89,
    person: 'Brian',
    text: ' And I wanted to, I forgot to give you a slide for this, but which was around this technology radar.'
  },
  { startTime: 830.25, person: 'Brian', text: ' Have you ever heard of a technology radar?' },
  { startTime: 833.25, person: 'Karol', text: ' Yes, I think ThoughtWorks is doing one.' },
  { startTime: 836.43, person: 'Karol', text: " That's a very nice technology radar." },
  {
    startTime: 838.37,
    person: 'Karol',
    text: " And it's a, a practise for architects, at least described as a practise for architects, for every architect to extend their architectural breadth, or knowledge breadth, to build their own technology radar with similar categories to the ones with ThoughtWorks."
  },
  {
    startTime: 858.01,
    person: 'Karol',
    text: " And basically work on, be an expert in the things you know, you know, and work on knowing more things that you don't know."
  },
  {
    startTime: 867.85,
    person: 'Karol',
    text: " So it's kind of a bad approach to, well, I call it personally moving the borders of ignorance."
  },
  { startTime: 874.83, person: 'Brian', text: ' Nice.' },
  { startTime: 875.47, person: 'Brian', text: " Yeah, that's actually very good." },
  { startTime: 877.55, person: 'Brian', text: " Like you know, that's very good." },
  {
    startTime: 880.41,
    person: 'Brian',
    text: ' You seem to have a lot of knowledge of it, which is good.'
  },
  { startTime: 882.55, person: 'Brian', text: ' I really like it too.' },
  {
    startTime: 884.37,
    person: 'Brian',
    text: ' And I was working as like an enterprise architect in an organisation.'
  },
  {
    startTime: 888.81,
    person: 'Brian',
    text: ' And so I was able to implement and you can implement it in any way that you would like, right.'
  },
  {
    startTime: 893.05,
    person: 'Brian',
    text: ' So, and in this case, you know, we would divide into different domains.'
  },
  {
    startTime: 897.97,
    person: 'Brian',
    text: " So there's the data, we had a data team, we had the testers, we have the developers in different languages."
  },
  {
    startTime: 905.07,
    person: 'Brian',
    text: ' And what we would do, like I would sit with them.'
  },
  {
    startTime: 908.35,
    person: 'Brian',
    text: " And it was so it ended up being about 25 meetings, and sit with them and talk about the technology that they're using."
  },
  {
    startTime: 916.43,
    person: 'Brian',
    text: " And so that's why everyone has different technology, like the data people had would have a technology, the testers would have a technology, you know, that's why I have to do for different people."
  },
  {
    startTime: 925.37,
    person: 'Brian',
    text: " And then, but they're the ones that are using the technology, and they would know it best what's what they hear about what they're reading about, and what they're interested in."
  },
  {
    startTime: 934.45,
    person: 'Brian',
    text: ' So what it was that the whole idea around the technology radar was, was to make sure and I think this organisation that kind of, you know, and organisations do they built code, they built stuff.'
  },
  {
    startTime: 950.95,
    person: 'Brian',
    text: ' And then next thing, you know, something new has come around, and their stuff is, is out of date.'
  },
  {
    startTime: 957.05,
    person: 'Brian',
    text: " And they really weren't aware, they weren't thinking about so."
  },
  {
    startTime: 960.23,
    person: 'Brian',
    text: ' So what this does, every technology, they would say, is this technology?'
  },
  {
    startTime: 965.49,
    person: 'Brian',
    text: " And actually, I don't know the terms, not like, should we continue using this technology?"
  },
  { startTime: 969.95, person: 'Brian', text: ' Is this some technology we should look at?' },
  { startTime: 972.61, person: 'Brian', text: ' Is this technology we should trial?' },
  {
    startTime: 974.55,
    person: 'Brian',
    text: ' Is this some technology we need to, to move towards, you know, so and if we were to move towards it, then we would do a roadmap.'
  },
  {
    startTime: 982.73,
    person: 'Brian',
    text: " So as the enterprise architect, I could do a roadmap on that new product, let's say, or should we continue building in this technology we're using?"
  },
  {
    startTime: 991.01,
    person: 'Brian',
    text: ' Is it does it make sense still, you know, for us, because technology is always changing.'
  },
  {
    startTime: 996.09,
    person: 'Karol',
    text: ' Yeah, so the phrases in the technology radar from ThoughtWorks are hold, assess, trial and adopt.'
  },
  {
    startTime: 1004.33,
    person: 'Karol',
    text: " That's the these are the verbs that ThoughtWorks is using."
  },
  {
    startTime: 1008.57,
    person: 'Karol',
    text: " So for anybody who's interested in what ThoughtWorks is doing, this is the volume 33 of the technology radar, this is the QR there, you can pop it in and see what they're doing and what kind of technologies they're assessing."
  },
  {
    startTime: 1023.69,
    person: 'Karol',
    text: ' Also, they have this lovely instruction, build your own radar.'
  },
  {
    startTime: 1028.19,
    person: 'Karol',
    text: " So if you want to know how to build your own radar as an architect, there's there's a one way to do it."
  },
  {
    startTime: 1034.19,
    person: 'Karol',
    text: " It's on this QR code, you can look it up and have some fun to grow your knowledge breadth with it."
  },
  {
    startTime: 1046.16,
    person: 'Brian',
    text: ' Yeah, so, so yeah, so yeah, thanks for allowing me all that talk about my past and that.'
  },
  {
    startTime: 1053.18,
    person: 'Brian',
    text: ' But then now I want to go into, well, also the kinds of things that I was working on.'
  },
  {
    startTime: 1058.74,
    person: 'Brian',
    text: ' So I worked on utilities, I worked on telephone companies that did, you know, where we were doing telephone number portability.'
  },
  {
    startTime: 1066.1,
    person: 'Brian',
    text: " So then there was a, you know, market where you grab the information, so data transferred over and how you're going to do that."
  },
  {
    startTime: 1072.62,
    person: 'Brian',
    text: ' And then I worked at a utilities company where we can resell information.'
  },
  {
    startTime: 1078.56,
    person: 'Brian',
    text: ' So we had to get usage statistics and grab it and then send stuff.'
  },
  {
    startTime: 1082.7,
    person: 'Brian',
    text: " So and then also say, okay, now we have a new customer, we're gonna send that."
  },
  { startTime: 1085.32, person: 'Brian', text: ' So we were doing these large scale data.' },
  { startTime: 1089.5, person: 'Brian', text: ' And and I built these things in Java.' },
  {
    startTime: 1093.32,
    person: 'Brian',
    text: ' And, you know, which are in, you know, integrate some somewhat integration stuff.'
  },
  { startTime: 1098.72, person: 'Brian', text: ' And I worked in like a big utility company.' },
  {
    startTime: 1105.2,
    person: 'Brian',
    text: " And but yeah, so what's happening over time is we, we have all these technologies that we end up using in different products, different, different."
  },
  {
    startTime: 1116.14,
    person: 'Brian',
    text: " So I what I'm building up now is to the integration and why, you know, it's a good idea to have it do it, you know, we're building all these technologies and different."
  },
  {
    startTime: 1123.86,
    person: 'Brian',
    text: " And then also there's mergers and acquisitions happen with the 80s or something."
  },
  {
    startTime: 1127.82,
    person: 'Brian',
    text: " I don't remember when there was a time buying billing companies, I worked with the telephone company."
  },
  {
    startTime: 1132.38,
    person: 'Brian',
    text: ' And, and one of their big objectives was they have eight billing systems for all the telecoms they bought.'
  },
  {
    startTime: 1138.94,
    person: 'Brian',
    text: " And they have to like, let's put this all into one."
  },
  { startTime: 1141.98, person: 'Brian', text: ' But they never actually accomplished that.' },
  { startTime: 1144.1, person: 'Brian', text: ' And so it was a big problem.' },
  {
    startTime: 1148.78,
    person: 'Brian',
    text: ' And I was working at this utility company because we had, we counted 300 different systems that we had, you know, so you have a lot of systems that I guess, to me, the most important thing to do is to do an inventory, right?'
  },
  {
    startTime: 1166.74,
    person: 'Brian',
    text: " Just to know, like, sometimes I've been asked to pick something."
  },
  { startTime: 1170.48, person: 'Brian', text: " And it's like, no one knows about this." },
  { startTime: 1172.02, person: 'Brian', text: " No, where's the source code?" },
  { startTime: 1174.82, person: 'Brian', text: " And where's this data coming from?" },
  {
    startTime: 1176.92,
    person: 'Karol',
    text: " I think that's the usual problem in terms of what's going on in companies."
  },
  {
    startTime: 1183.82,
    person: 'Karol',
    text: " And in general, if you look at the perspective of years in IT, we're basically cyclically reinventing the wheel."
  },
  { startTime: 1192.62, person: 'Karol', text: " It's not about that we have a problem solved." },
  { startTime: 1195.62, person: 'Karol', text: ' No, we have to solve it again.' },
  {
    startTime: 1197.66,
    person: 'Karol',
    text: " Because some, some people just forgot that it's already solved."
  },
  {
    startTime: 1201.28,
    person: 'Karol',
    text: " And it's a matter of now, oh, we need to solve it again, because it's a problem all of a sudden."
  },
  {
    startTime: 1205.9,
    person: 'Karol',
    text: ' And I see that the same thing is in interoperability topics.'
  },
  {
    startTime: 1210.32,
    person: 'Karol',
    text: ' We actually solved a lot of problems and challenges of interoperability.'
  },
  {
    startTime: 1215.42,
    person: 'Karol',
    text: ' Back in the early 2000s, service orientated architecture solved the majority of problems.'
  },
  { startTime: 1222.82, person: 'Karol', text: ' And all of a sudden,' },
  {
    startTime: 1224.68,
    person: 'Karol',
    text: " because companies didn't know how to change, how to introduce change, how to introduce architecture"
  },
  {
    startTime: 1232.16,
    person: 'Karol',
    text: " into their mix, the companies, the organisation, those projects failed, obviously, there's so many"
  },
  {
    startTime: 1240.9,
    person: 'Karol',
    text: ' failed ESB implementations over the years, companies, projects and whatnot, that to the'
  },
  {
    startTime: 1247.04,
    person: 'Karol',
    text: ' extent that ESB is no longer an abbreviation we should be using, because it brings all the red'
  },
  { startTime: 1252.06, person: 'Karol', text: " flags in people's heads, right?" },
  {
    startTime: 1255.74,
    person: 'Karol',
    text: " And now we're doing API led architecture, which is basically ESB in the derivative from service orientated architecture, right?"
  },
  { startTime: 1266.36, person: 'Karol', text: ' So this is not a new concept.' },
  { startTime: 1268.6, person: 'Karol', text: ' This is not something new in architecture.' },
  { startTime: 1270.2, person: 'Karol', text: ' This is exactly pretty much the same as it was.' },
  {
    startTime: 1273.16,
    person: 'Karol',
    text: ' The only difference is that now we have containerisation and virtualisation.'
  },
  {
    startTime: 1277.38,
    person: 'Karol',
    text: ' And back then, we did this on a bare metal in server rooms, right?'
  },
  {
    startTime: 1282.76,
    person: 'Karol',
    text: ' This was hosted in a server room, every company had their own server room.'
  },
  { startTime: 1287.06, person: 'Karol', text: ' That was it.' },
  {
    startTime: 1288.56,
    person: 'Karol',
    text: ' Now we have clouds, we have containerisation, we have virtualisation, all of that is available.'
  },
  { startTime: 1293.88, person: 'Karol', text: " It's a lot more distributed." },
  {
    startTime: 1295.3,
    person: 'Karol',
    text: ' So we have all sorts of different problems in terms of networking.'
  },
  {
    startTime: 1298.66,
    person: 'Karol',
    text: ' But basically, the architecture is pretty much the same.'
  },
  { startTime: 1302.08, person: 'Brian', text: ' Mm hmm.' },
  { startTime: 1303.04, person: 'Brian', text: ' Yeah.' },
  { startTime: 1304.04, person: 'Brian', text: ' Yeah.' },
  {
    startTime: 1304.52,
    person: 'Brian',
    text: ' And then and this is also where I wanted to show that that book, I guess, right, which was the enterprise.'
  },
  { startTime: 1313.12, person: 'Karol', text: ' This one?' },
  { startTime: 1314.06, person: 'Brian', text: ' Yeah, right.' },
  { startTime: 1314.84, person: 'Brian', text: ' Great.' },
  { startTime: 1315.26, person: 'Brian', text: ' Yeah.' },
  { startTime: 1315.64, person: 'Brian', text: ' Enterprise integration pattern.' },
  {
    startTime: 1317.66,
    person: 'Brian',
    text: ' But I also want to highlight the year, as you can tell, right, what I was saying, 2003.'
  },
  { startTime: 1323.84, person: 'Brian', text: " So and just that this isn't new." },
  {
    startTime: 1327.3,
    person: 'Brian',
    text: ' This is these are things that we have, we have these big systems, how are we going to solve this problem?'
  },
  { startTime: 1332.26, person: 'Brian', text: ' Right?' },
  {
    startTime: 1332.56,
    person: 'Brian',
    text: " So it's important to understand the problem that we have, right."
  },
  {
    startTime: 1337.1,
    person: 'Brian',
    text: " And, and that's where I think the iPaaS space comes in."
  },
  {
    startTime: 1342.72,
    person: 'Brian',
    text: " And you can, you can tell me if I'm right, is that and then, and so that the iPaaS world, but, but I think there was another thing, to me, that, that was kind of a nice solution to this."
  },
  {
    startTime: 1360.68,
    person: 'Brian',
    text: ' But, which was that, okay, so you have all the different, you have all that, what do they call them?'
  },
  { startTime: 1369.88, person: 'Brian', text: ' silos, right?' },
  {
    startTime: 1371.14,
    person: 'Brian',
    text: ' You have a different size of all the different parts in your organisation, you have your IT departments in your organisation.'
  },
  {
    startTime: 1378.52,
    person: 'Brian',
    text: " And you really have so there's kind of a political it's very difficult."
  },
  {
    startTime: 1381.5,
    person: 'Brian',
    text: " And also you have it people, some people are very close and saying, I don't want to, it's really hard to get stuff."
  },
  { startTime: 1389.5, person: 'Brian', text: ' I remember working once at this place.' },
  { startTime: 1391.64, person: 'Brian', text: ' And I saw this ER diagram.' },
  { startTime: 1396.02, person: 'Brian', text: ' And, and she had it on her desk.' },
  {
    startTime: 1398.34,
    person: 'Brian',
    text: ' And I, I said, Can I have a, because I was a contractor, I said, Can I see that diagram?'
  },
  { startTime: 1402.88, person: 'Brian', text: " He says, No, I couldn't see it." },
  { startTime: 1404.82, person: 'Brian', text: " She wouldn't give me a copy of the ER diagram." },
  {
    startTime: 1407.52,
    person: 'Brian',
    text: " So I had to like, you know, it's like, we're all working together in the same company."
  },
  { startTime: 1412.84, person: 'Brian', text: " But yeah, so it's a anyways, yeah." },
  {
    startTime: 1416.1,
    person: 'Brian',
    text: ' So so I think that there was also a very nice, a political problem of sharing information between these organisations.'
  },
  {
    startTime: 1426.98,
    person: 'Brian',
    text: ' I think the iPaaS was a way that maybe CIOs could would maybe be able to get access or to this information.'
  },
  {
    startTime: 1439.14,
    person: 'Brian',
    text: " And, and then also to have a different group of developers that were just going to do this integration, so they're not connected to anyone else."
  },
  {
    startTime: 1448.62,
    person: 'Brian',
    text: " We always had like a shared services, which would be doing laptops, the network, and they might be doing databases, you know, but shared service, but they didn't have necessarily developers there."
  },
  {
    startTime: 1462.44,
    person: 'Brian',
    text: " So So then there was this iPaaS thing, which type and, and I'm not I'm not sure if even I understand it, maybe it's of its time, but it says integrated platform as a service."
  },
  {
    startTime: 1474.2,
    person: 'Brian',
    text: " So it's, I think it was, it was around the time that the cloud came out."
  },
  {
    startTime: 1478.98,
    person: 'Brian',
    text: " So I think they were thinking, okay, here's on the cloud, it's all there."
  },
  {
    startTime: 1482.7,
    person: 'Brian',
    text: " And it's no code, you know, you're not going to be writing a lot of code, apparently."
  },
  {
    startTime: 1487.66,
    person: 'Brian',
    text: " And then I, in my experience, that's not really true."
  },
  {
    startTime: 1491.92,
    person: 'Brian',
    text: " But anyway, so that you're just like, drag and drop."
  },
  {
    startTime: 1495.72,
    person: 'Brian',
    text: " And then one of the things I remember being concerned about is, you know, as an architect or enterprise architect, I'd worry about when my when the CIO was travelling, or going on these conferences, that someone was just going to drop them a leaflet and say, oh, we're going to do this."
  },
  {
    startTime: 1514.92,
    person: 'Brian',
    text: " Now we're gonna, it's gonna solve all their problems."
  },
  { startTime: 1517.4, person: 'Brian', text: " And here we go, Brian, let's do this." },
  {
    startTime: 1519.82,
    person: 'Brian',
    text: " And they, and, and that's what this is a low code, this, we're going to connect all the systems, we can see everything that's going on."
  },
  {
    startTime: 1527.54,
    person: 'Brian',
    text: ' And everyone talking about get rid of duplication, right?'
  },
  { startTime: 1530.32, person: 'Brian', text: ' So, okay.' },
  {
    startTime: 1533.3,
    person: 'Karol',
    text: " So let's put it in a perspective, because you're a jack of all trades in terms of your history of it."
  },
  {
    startTime: 1542.5,
    person: 'Karol',
    text: " I've been doing only enterprise application integration for my whole career of 14 years."
  },
  {
    startTime: 1549.14,
    person: 'Karol',
    text: " So let's put it this way, before cloud got really, really popular, and at least before we got it, like, really booming in Europe, we already had low code."
  },
  {
    startTime: 1560.98,
    person: 'Karol',
    text: " So the IPaaS, yes, that's a cloud thing, as all AAS things."
  },
  {
    startTime: 1567.4,
    person: 'Karol',
    text: ' So SaaS, PaaS, IaaS as an infrastructure as a service.'
  },
  {
    startTime: 1574.04,
    person: 'Karol',
    text: ' But the IP from that is an integration platform.'
  },
  { startTime: 1579.02, person: 'Karol', text: ' So the equivalent of an ESB back in the day.' },
  {
    startTime: 1582.68,
    person: 'Karol',
    text: ' And those kinds of integration platforms that were low code, well, if you remember Tibco Business Works, and I guess you do, Tibco Business Works was at least version five and six were never designed for cloud.'
  },
  { startTime: 1598.58, person: 'Karol', text: ' They were designed to run on premise.' },
  {
    startTime: 1601.2,
    person: 'Karol',
    text: " Then Tibco went into container edition, and well, that's designed to run wherever in containers."
  },
  {
    startTime: 1610.12,
    person: 'Karol',
    text: ' So my start in my career as a junior developer was Tibco Business Works 5, I believe the first version was 5.4 that I touched.'
  },
  { startTime: 1619.7, person: 'Karol', text: ' And that was already low code.' },
  {
    startTime: 1621.88,
    person: 'Karol',
    text: " It didn't mean that you didn't do a lot of programming, because that was still quite a hefty deal to learn it and to actually use it."
  },
  {
    startTime: 1629.02,
    person: 'Karol',
    text: ' Because you have to have that specialised knowledge, you have to understand XML, you have to understand WSDL files.'
  },
  { startTime: 1635.06, person: 'Karol', text: ' But basically, it was an integration platform.' },
  {
    startTime: 1638.08,
    person: 'Karol',
    text: " The only difference between an integration platform on premise and iPaaS is where it's hosted in essence."
  },
  {
    startTime: 1645.22,
    person: 'Karol',
    text: " So if we're looking at an iPaaS just from the definition standpoint, iPaaS to define it would be that a client of an iPaaS doesn't really care about the infrastructure and the runtime because it's in the control of the vendor."
  },
  {
    startTime: 1662.3,
    person: 'Karol',
    text: " So whether that be Tibco, MuleSoft, Boomi, Workato, whatever else, they're controlling the infrastructure, they're controlling the runtimes in the sense of upgrades, maintenance, etcétera."
  },
  { startTime: 1675.9, person: 'Karol', text: " And we're only putting things on the platform." },
  { startTime: 1680, person: 'Brian', text: ' So business requirements of the business.' },
  { startTime: 1683.42, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 1684.04,
    person: 'Karol',
    text: ' So with any platform, a platform is useless unless we start building on top of it.'
  },
  { startTime: 1690.48, person: 'Karol', text: " That's pretty much the gist of it." },
  {
    startTime: 1692.44,
    person: 'Karol',
    text: ' And I think that this is what Gregor Hohpe is now preaching with the platform approach and teaching about platforms.'
  },
  {
    startTime: 1700.84,
    person: 'Karol',
    text: " That's pretty much what it can be dumped down to."
  },
  {
    startTime: 1705.88,
    person: 'Karol',
    text: " So now we're at a place where, okay, we have a lot of things in cloud."
  },
  {
    startTime: 1711.14,
    person: 'Karol',
    text: ' I rarely get to see integration platforms that are actually on premise.'
  },
  { startTime: 1715.68, person: 'Karol', text: " That's a very rare occurrence." },
  {
    startTime: 1717.78,
    person: 'Karol',
    text: " If they're on premise, that's due to like special reasons."
  },
  { startTime: 1721.04, person: 'Karol', text: " Like let's say we have a European Union..." },
  { startTime: 1723.2, person: 'Brian', text: ' Security.' },
  { startTime: 1723.3, person: 'Karol', text: ' Yeah, security.' },
  { startTime: 1723.86, person: 'Karol', text: ' Exactly.' },
  {
    startTime: 1724.6,
    person: 'Karol',
    text: ' European Union agency, there are levels of secrecy.'
  },
  { startTime: 1727.76, person: 'Karol', text: ' Yes, of course.' },
  {
    startTime: 1728.42,
    person: 'Karol',
    text: " In every level you'll have a separate interoperability capability."
  },
  { startTime: 1732.9, person: 'Karol', text: " Sometimes it's an integration platform." },
  {
    startTime: 1734.32,
    person: 'Karol',
    text: " Sometimes there's so little there that you don't really need an integration platform because that's two systems working in that security area, right?"
  },
  { startTime: 1741.46, person: 'Karol', text: ' Security classification.' },
  { startTime: 1744.16, person: 'Karol', text: ' So yeah.' },
  { startTime: 1746.34, person: 'Karol', text: ' So on premise is not a thing for a few years.' },
  {
    startTime: 1749.2,
    person: 'Karol',
    text: ' Gartner even stopped releasing reports on integration platforms that are on premise.'
  },
  {
    startTime: 1753.56,
    person: 'Karol',
    text: " They moved entirely to looking at iPaaSes because that's the future."
  },
  {
    startTime: 1759.56,
    person: 'Karol',
    text: " Now for various reasons, including geopolitics, it turns out it's not exactly the future."
  },
  { startTime: 1767.55, person: 'Karol', text: " So let's dive into the why." },
  { startTime: 1772.09, person: 'Karol', text: " And let's start with the why of customers." },
  {
    startTime: 1775.81,
    person: 'Karol',
    text: " So if you get projects where you're migrating iPaaSes to Java Spring Boot, why?"
  },
  { startTime: 1785.07, person: 'Karol', text: " What's the why of your clients?" },
  { startTime: 1788.39, person: 'Brian', text: ' Yeah.' },
  { startTime: 1789.21, person: 'Brian', text: " So yeah, you can see it's a long story." },
  {
    startTime: 1792.15,
    person: 'Brian',
    text: ' I wonder even how far we are here for 30 minutes.'
  },
  { startTime: 1796.99, person: 'Karol', text: ' We went deep into history.' },
  {
    startTime: 1799.31,
    person: 'Brian',
    text: " You can see why I went to all the back history and then where we're going."
  },
  { startTime: 1804.41, person: 'Brian', text: ' And yeah, to understand why we would need this.' },
  { startTime: 1808.65, person: 'Brian', text: " And that's important." },
  { startTime: 1810.39, person: 'Brian', text: " What's it solving?" },
  {
    startTime: 1811.51,
    person: 'Brian',
    text: ' And this is where I kind of have this thing where I get it.'
  },
  {
    startTime: 1816.15,
    person: 'Brian',
    text: ' I get the iPaaS and I think it was a good solution.'
  },
  {
    startTime: 1819.89,
    person: 'Brian',
    text: " And because actually oddly the politics of it, like I said, to get all these silos to get the CIO saying, hey, I want to know what's going on and what do we have and let's get them all connected."
  },
  {
    startTime: 1833.51,
    person: 'Brian',
    text: " And also I feel it's good to have these developers now that are working for the enterprise."
  },
  {
    startTime: 1842.77,
    person: 'Brian',
    text: " You have the enterprise architect and then he's looking at the big picture of everyone."
  },
  { startTime: 1846.85, person: 'Brian', text: ' And so I think we did need that.' },
  {
    startTime: 1848.89,
    person: 'Brian',
    text: " And I've actually worked with MuleSoft and I've written a lot of code in MuleSoft and it's a lot of code."
  },
  { startTime: 1857.73, person: 'Brian', text: " It's a lot of stuff." },
  { startTime: 1858.51, person: 'Brian', text: " It's a whole technology and knowledge." },
  {
    startTime: 1861.03,
    person: 'Brian',
    text: " But ultimately the end result of it is you're creating APIs to connect things together."
  },
  { startTime: 1870.45, person: 'Brian', text: ' And you have a design.' },
  {
    startTime: 1872.49,
    person: 'Brian',
    text: ' They like this three-tier design API led architecture, which is good.'
  },
  { startTime: 1878.19, person: 'Brian', text: ' I like it.' },
  { startTime: 1880.87, person: 'Brian', text: ' And also so it was created.' },
  { startTime: 1883.89, person: 'Brian', text: " Now we've created the API." },
  { startTime: 1885.23, person: 'Brian', text: " And also there's a security around it." },
  {
    startTime: 1886.97,
    person: 'Brian',
    text: " We've got the security people and we've got the security pieces in there."
  },
  { startTime: 1890.57, person: 'Brian', text: ' So I think it was good in creating all of this.' },
  {
    startTime: 1894.19,
    person: 'Brian',
    text: " So I'm happy with that, that we brought people there."
  },
  {
    startTime: 1898.53,
    person: 'Brian',
    text: " But now what's happening in my mind and why we might not need it, in my opinion, or it's an option."
  },
  {
    startTime: 1907.19,
    person: 'Brian',
    text: " So that option would be, well, they're charging us a lot of money now and they kind of got us locked in and we're in there and they're charging us these licencing costs."
  },
  { startTime: 1918.01, person: 'Brian', text: " And that's what is too much." },
  {
    startTime: 1921.89,
    person: 'Brian',
    text: ' And I always thought that would happen with the cloud too.'
  },
  {
    startTime: 1925.07,
    person: 'Brian',
    text: " Everyone's going to go on the cloud and then they're just going to charge us like crazy."
  },
  { startTime: 1928.63, person: 'Brian', text: ' But ideally you can go from one to the other.' },
  { startTime: 1930.49, person: 'Brian', text: " That's kind of an oligopoly in my mind." },
  {
    startTime: 1933.47,
    person: 'Brian',
    text: ' So then your prices will come down to some degree.'
  },
  {
    startTime: 1936.87,
    person: 'Brian',
    text: " But whereas MuleSoft is less of a, you know, it's more of a monopoly that they've kind of got you."
  },
  {
    startTime: 1943.79,
    person: 'Brian',
    text: " Now they've got all of their developers, all this technology, all this code that you've written in DataWeave."
  },
  { startTime: 1949.41, person: 'Brian', text: " And now you're kind of stuck with that." },
  {
    startTime: 1952.57,
    person: 'Brian',
    text: " So my proposal is, okay, that's one thing that you could do, convert this all into Java."
  },
  { startTime: 1960.39, person: 'Brian', text: ' You have the APIs now.' },
  {
    startTime: 1962.51,
    person: 'Brian',
    text: ' And if you do it in Java, well, then I think you asked me that originally too, when we first met is like, why Java?'
  },
  { startTime: 1972.33, person: 'Brian', text: ' But ultimately MuleSoft is writing it in Java.' },
  { startTime: 1976.29, person: 'Brian', text: ' It ends up being Java.' },
  {
    startTime: 1978.17,
    person: 'Brian',
    text: " So in order to be perfect and you don't want to make any changes, you have to make it exactly the same code."
  },
  {
    startTime: 1986.83,
    person: 'Brian',
    text: " I don't want to do any kind of change in terms of even the precision."
  },
  {
    startTime: 1992.43,
    person: 'Karol',
    text: " I'm going to stop you here because you're diving into the why."
  },
  { startTime: 1999.25, person: 'Karol', text: ' The question is still why?' },
  { startTime: 2001.95, person: 'Karol', text: ' Other than licencing, why?' },
  { startTime: 2004.49, person: 'Karol', text: ' Because I do agree.' },
  { startTime: 2005.29, person: 'Karol', text: ' Yes, MuleSoft is Java.' },
  {
    startTime: 2007.15,
    person: 'Karol',
    text: " Basically what you're doing when doing MuleSoft or Boomi or anything else, you're basically creating configuration that is understood by the engine, by the predefined libraries."
  },
  { startTime: 2018.49, person: 'Karol', text: ' And they just run that configuration.' },
  {
    startTime: 2020.09,
    person: 'Karol',
    text: " That's basically what the low code is in terms of iPaaSes."
  },
  { startTime: 2023.05, person: 'Karol', text: ' But why?' },
  {
    startTime: 2024.63,
    person: 'Karol',
    text: ' Why would your clients consider other than licencing?'
  },
  { startTime: 2029.01, person: 'Karol', text: ' Because licencing, I get it.' },
  { startTime: 2030.23, person: 'Karol', text: ' OPEX costs, yes.' },
  {
    startTime: 2032.63,
    person: 'Karol',
    text: ' The licencing costs of technologies at times are, yeah, not even going to go there, but my opinions of how certain companies can be very greedy about their licences.'
  },
  {
    startTime: 2046.19,
    person: 'Karol',
    text: " And I've seen them fall out of grace because of that greediness."
  },
  {
    startTime: 2052.33,
    person: 'Karol',
    text: ' But apart from the OPEX costs and people looking at licences, what other why is there to migrate to?'
  },
  { startTime: 2062.07, person: 'Brian', text: " There's a lot of whys, right?" },
  {
    startTime: 2064.13,
    person: 'Brian',
    text: " But we have also, let's say you do a technology radar and you take a look at what is the technologies that you're using and what, and each organisation can do that."
  },
  { startTime: 2076.87, person: 'Brian', text: " I'm not sure if they have different iPaaS." },
  {
    startTime: 2079.71,
    person: 'Brian',
    text: ' Usually you try to stick with one, MuleSoft, it could be Boomi or something, but you might end up with some organisations that monthly, or you buy a new one, they have another iPaaS, right?'
  },
  {
    startTime: 2090.05,
    person: 'Brian',
    text: ' So you have to look at that MuleSoft and say, do we still want to do MuleSoft?'
  },
  { startTime: 2097.37, person: 'Brian', text: ' Do we still want to write MuleSoft?' },
  {
    startTime: 2099.29,
    person: 'Brian',
    text: " And it's like, and that's not, is it still the best?"
  },
  {
    startTime: 2103.25,
    person: 'Brian',
    text: " Or also, what is MuleSoft doing for us that we won't get with Java?"
  },
  { startTime: 2114.55, person: 'Brian', text: " Is there something extra that it's giving us?" },
  {
    startTime: 2118.03,
    person: 'Brian',
    text: " I think it was good to get us to where we are, get us going, get us, but it's not doing anything extra."
  },
  { startTime: 2124.61, person: 'Brian', text: " It's not going to be faster." },
  { startTime: 2126.15, person: 'Brian', text: " It's going to be more expensive." },
  { startTime: 2127.81, person: 'Brian', text: " It's going to cost more." },
  {
    startTime: 2128.91,
    person: 'Brian',
    text: " It's going to be, we have to get MuleSoft developers, but you can look at that total cost of ownership of having a Java developer, and then this kind of economy of scale you would have, do you have Java developers already?"
  },
  {
    startTime: 2148.91,
    person: 'Brian',
    text: " And you already have this technology and you're running stuff."
  },
  {
    startTime: 2152.13,
    person: 'Brian',
    text: ' You can kind of also simplify the amount of languages and technology that you have.'
  },
  {
    startTime: 2159.27,
    person: 'Brian',
    text: ' Like if you can look five, 10 years down the road, are we going to have MuleSoft?'
  },
  { startTime: 2163.29, person: 'Brian', text: ' Or are we going to have Java?' },
  {
    startTime: 2165.09,
    person: 'Brian',
    text: " Like I can pretty well assure you we're going to have Java, but I'm not sure about MuleSoft."
  },
  { startTime: 2170.13, person: 'Brian', text: " And so there is, what's it giving you?" },
  {
    startTime: 2174.01,
    person: 'Brian',
    text: " And when you talk about an API, you still have the API, the security, you're going to have just the same, obviously the same security you're going to have in Java."
  },
  { startTime: 2183.53, person: 'Brian', text: " You're going to have load balancers." },
  {
    startTime: 2185.59,
    person: 'Brian',
    text: ' You can have your OAS, like your specifications can all be written.'
  },
  {
    startTime: 2192.37,
    person: 'Brian',
    text: ' And so you really, to me, why would you stick with iPaaS?'
  },
  {
    startTime: 2197.87,
    person: 'Brian',
    text: ' Is it giving you more benefits than you would have with Java?'
  },
  {
    startTime: 2203.51,
    person: 'Brian',
    text: " I mean, obviously there's a cost of switching to Java."
  },
  { startTime: 2207.75, person: 'Brian', text: ' So yeah.' },
  { startTime: 2208.99, person: 'Brian', text: ' So my question is, why stick with iPaaS?' },
  { startTime: 2212.07, person: 'Brian', text: " What's it giving you that Java would not?" },
  {
    startTime: 2217.05,
    person: 'Karol',
    text: " That's I think a valid question, but I think as it states also on my lovely t-shirt, which nobody sees right now, it depends."
  },
  {
    startTime: 2228.29,
    person: 'Karol',
    text: " If we're looking at ownership, total cost of ownership."
  },
  { startTime: 2234.81, person: 'Karol', text: ' Now, okay.' },
  {
    startTime: 2236.07,
    person: 'Karol',
    text: ' MuleSoft is a technology for integration platforms.'
  },
  { startTime: 2239.55, person: 'Karol', text: " It's a dedicated technology." },
  {
    startTime: 2240.93,
    person: 'Karol',
    text: ' And of course, if you are snappy clever enough and have enough money and time, everything is doable with Java.'
  },
  { startTime: 2252.37, person: 'Karol', text: " That's 100%." },
  { startTime: 2253.65, person: 'Karol', text: " So I'm going to play the devil's advocate here." },
  {
    startTime: 2256.29,
    person: 'Karol',
    text: " I'm going to be, you advocate for moving to Java."
  },
  { startTime: 2259.99, person: 'Karol', text: " I'm going to advocate for iPaaS in that sense." },
  { startTime: 2263.41, person: 'Karol', text: ' Okay.' },
  { startTime: 2263.57, person: 'Karol', text: " Let's, you know what?" },
  { startTime: 2266.11, person: 'Karol', text: " I'm going to just, yeah." },
  {
    startTime: 2268.99,
    person: 'Karol',
    text: " I think I'm going to just open draw.io and let's start putting things into, I'm just going to draft live."
  },
  { startTime: 2281.01, person: 'Karol', text: " Let's say, let me find my draw.io. There we go." },
  {
    startTime: 2286.81,
    person: 'Karol',
    text: " And I'm just going to take myself a window with my notes because I came prepared with notes."
  },
  { startTime: 2296.65, person: 'Karol', text: ' Let me just only see how I, right.' },
  { startTime: 2299.57, person: 'Karol', text: ' Because now nobody sees us.' },
  {
    startTime: 2301.05,
    person: 'Karol',
    text: " So let's make us visible to the world back again."
  },
  { startTime: 2304.63, person: 'Karol', text: ' Hello.' },
  { startTime: 2305.01, person: 'Karol', text: ' There we are.' },
  {
    startTime: 2306.81,
    person: 'Karol',
    text: ' Perhaps maybe this view because then dry.io will be more visible.'
  },
  { startTime: 2311.09, person: 'Karol', text: ' All right.' },
  {
    startTime: 2312.07,
    person: 'Karol',
    text: " So let's say we're looking at the total cost of ownership."
  },
  { startTime: 2316.35, person: 'Karol', text: ' So TCO.' },
  { startTime: 2323.25, person: 'Karol', text: ' All right.' },
  { startTime: 2324.33, person: 'Karol', text: " I'll make it." },
  { startTime: 2326.09, person: 'Karol', text: " It's not readable, not readable." },
  { startTime: 2328.29, person: 'Karol', text: " So let's make it somewhat bigger." },
  { startTime: 2332.03, person: 'Karol', text: ' There we go.' },
  { startTime: 2332.59, person: 'Karol', text: ' TCO.' },
  {
    startTime: 2334.15,
    person: 'Karol',
    text: " If we're looking at TCO, well, first thing that comes to mind that you're saying is licence costs, right?"
  },
  {
    startTime: 2343.71,
    person: 'Karol',
    text: " That's the first thing that, one of the first things you said about TCO."
  },
  { startTime: 2350.05, person: 'Karol', text: ' Okay.' },
  {
    startTime: 2352.61,
    person: 'Karol',
    text: " If you're looking at MuleSoft, what do you think comes into the licence cost of MuleSoft?"
  },
  { startTime: 2360.85, person: 'Karol', text: " What's there?" },
  { startTime: 2365.55, person: 'Brian', text: ' Yeah.' },
  {
    startTime: 2365.85,
    person: 'Brian',
    text: " I mean, I guess, and I, I'm not sure if we're allowed to talk about licencing costs through MuleSoft."
  },
  { startTime: 2372.39, person: 'Brian', text: " I can't tell you the amounts and everything." },
  { startTime: 2374.37, person: 'Karol', text: ' No, no, no, no.' },
  {
    startTime: 2375.15,
    person: 'Brian',
    text: " There's a runtime cost per, per, per megabyte or, you know."
  },
  {
    startTime: 2380.85,
    person: 'Karol',
    text: " Let's, let's not, let's not talk about the, the, the numbers."
  },
  {
    startTime: 2385.15,
    person: 'Karol',
    text: " Anybody who will want to know the numbers, they'll get the numbers directly from MuleSoft or whoever is the reseller in that case."
  },
  { startTime: 2393.07, person: 'Brian', text: ' Yeah.' },
  { startTime: 2393.19, person: 'Brian', text: ' They know, they know the numbers.' },
  { startTime: 2394.49, person: 'Brian', text: ' Yeah.' },
  { startTime: 2394.69, person: 'Karol', text: ' They know the numbers.' },
  {
    startTime: 2395.53,
    person: 'Karol',
    text: ' If somebody wants to know the numbers, go to MuleSoft.'
  },
  {
    startTime: 2397.53,
    person: 'Karol',
    text: " They'll tell you the numbers and you can negotiate the numbers."
  },
  { startTime: 2400.15, person: 'Karol', text: " So that's fine." },
  {
    startTime: 2400.71,
    person: 'Karol',
    text: " But let's say, let's say what's, what's in the, in the licence."
  },
  {
    startTime: 2404.41,
    person: 'Karol',
    text: ' So in the licence, of course, there are two models for licencing costs because since November last year or October last year, the, the, there was a change in licencing model.'
  },
  { startTime: 2415.67, person: 'Karol', text: ' So we have the model for vCores, right?' },
  {
    startTime: 2420.75,
    person: 'Karol',
    text: ' And we have the model with fixed and usage, right?'
  },
  {
    startTime: 2428.27,
    person: 'Karol',
    text: ' So these are two different models of, of licences.'
  },
  { startTime: 2431.29, person: 'Karol', text: ' This is what we pay for.' },
  {
    startTime: 2433.39,
    person: 'Karol',
    text: ' In both of these, we do have different things that comes, that come into the licence costs, right?'
  },
  { startTime: 2440.63, person: 'Karol', text: ' So what does, what does provide?' },
  {
    startTime: 2442.45,
    person: 'Karol',
    text: " Because, okay, you're advocating, you're advocating that, well, you can do everything in Java."
  },
  {
    startTime: 2450.69,
    person: 'Karol',
    text: " What's, if we're looking at migrating MuleSoft to Java, what is there that you're migrating, starting with?"
  },
  { startTime: 2460.23, person: 'Brian', text: ' Yeah.' },
  { startTime: 2460.73, person: 'Brian', text: ' And it will, it would be in a cloud, right?' },
  { startTime: 2462.95, person: 'Brian', text: " So there, it's not going to be free, right?" },
  { startTime: 2465.17, person: 'Brian', text: " You're going to, you're going to have to pay." },
  { startTime: 2467.15, person: 'Brian', text: ' So there is a cost.' },
  {
    startTime: 2468.43,
    person: 'Brian',
    text: " And I think that like, without getting into too much detail, I think it can be like 20% of the MuleSoft cost, you know, and, and also with the MuleSoft, I don't know if you have the support costs, but there's like an annual fee, right?"
  },
  {
    startTime: 2488.23,
    person: 'Brian',
    text: ' With the, depending on which tier you are with MuleSoft, like gold tier, bronze tier, whatever, but there is a, you know.'
  },
  { startTime: 2499.43, person: 'Karol', text: ' Okay.' },
  { startTime: 2500.19, person: 'Karol', text: ' Support.' },
  { startTime: 2500.57, person: 'Brian', text: " And that's, I think more on the MuleSoft side." },
  { startTime: 2503.63, person: 'Karol', text: " So, so let's, let's put it another way." },
  {
    startTime: 2508.09,
    person: 'Karol',
    text: ' What does MuleSoft provide or, or any iPaaS for that matter?'
  },
  {
    startTime: 2511.91,
    person: 'Karol',
    text: ' First of all, we have some functional capabilities.'
  },
  {
    startTime: 2519.38,
    person: 'Karol',
    text: ' In that sense, in MuleSoft and any iPaaS, that would be interoperability, interoperability, right?'
  },
  { startTime: 2530.75, person: 'Karol', text: " That's not going to fit." },
  { startTime: 2535.82, person: 'Karol', text: " Let's do it that way." },
  {
    startTime: 2537.32,
    person: 'Karol',
    text: " So we have interoperability because as I argue to a lot of people, well, people see interoperability, they say that's a, that's an ility."
  },
  { startTime: 2545.7, person: 'Karol', text: " That's a non-functional requirement." },
  { startTime: 2547.74, person: 'Karol', text: ' No, no, no.' },
  { startTime: 2548.12, person: 'Karol', text: ' Okay.' },
  {
    startTime: 2548.3,
    person: 'Karol',
    text: " If we're talking integration platforms, interoperability becomes the functional requirement of the integration platform."
  },
  { startTime: 2554.48, person: 'Karol', text: ' Okay.' },
  {
    startTime: 2555.22,
    person: 'Karol',
    text: ' So this is the main functional aspect of an integration platform.'
  },
  {
    startTime: 2559.82,
    person: 'Karol',
    text: " We're basically building integration flows to move data from place to place, right?"
  },
  { startTime: 2566.74, person: 'Karol', text: ' Okay.' },
  { startTime: 2567.58, person: 'Karol', text: ' So this is the main thing.' },
  { startTime: 2568.86, person: 'Karol', text: ' So this is the logic of an iPaaS.' },
  {
    startTime: 2572.74,
    person: 'Karol',
    text: ' This is the old elements that expose an API, transform the payload to get the payload to the other side, and then return a response if needed, right?'
  },
  { startTime: 2587.04, person: 'Karol', text: ' What else do we have in an iPaaS?' },
  {
    startTime: 2589.76,
    person: 'Karol',
    text: " And this is, again, I'm going to be the devil's advocate here."
  },
  { startTime: 2593.3, person: 'Karol', text: " Let's see." },
  { startTime: 2594.76, person: 'Brian', text: ' So connectors.' },
  { startTime: 2596.66, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 2598.76,
    person: 'Karol',
    text: ' So we have, aside from connectors, we have also predefined libraries.'
  },
  {
    startTime: 2607.41,
    person: 'Karol',
    text: ' So all sorts of libraries for logging, for splitting operations and strings, operation on payloads.'
  },
  {
    startTime: 2616.93,
    person: 'Karol',
    text: ' MuleSoft specific would be also DataWeave and other tools.'
  },
  {
    startTime: 2620.47,
    person: 'Karol',
    text: " That's some sort of mapping tools or XPath, XSLT, these kinds of capabilities, right?"
  },
  {
    startTime: 2626.55,
    person: 'Karol',
    text: " So these are predefined libraries of capabilities to work around data, data formatting, and just playing around with whatever is there that we're moving because we're moving data."
  },
  { startTime: 2641.31, person: 'Karol', text: ' Okay.' },
  {
    startTime: 2642.05,
    person: 'Karol',
    text: ' So these are the core capabilities around an iPaaS.'
  },
  { startTime: 2650.03, person: 'Karol', text: ' All right.' },
  {
    startTime: 2650.47,
    person: 'Karol',
    text: " If we look at this from a perspective, iPaaS also gives us infra because it's a as a service."
  },
  { startTime: 2661.23, person: 'Karol', text: ' So this is the as a service part.' },
  {
    startTime: 2665.73,
    person: 'Karol',
    text: " So we don't care about infrastructure because it's handled by the vendor."
  },
  {
    startTime: 2671.71,
    person: 'Karol',
    text: " If we're doing, of course, a cloud deployment, because if we're doing an on-premise deployment like runtime fabric or something else, of course we need to cater to the infrastructure."
  },
  {
    startTime: 2683.09,
    person: 'Karol',
    text: " But let's simplify that we're doing a full cloud deployment."
  },
  { startTime: 2686.67, person: 'Karol', text: " So they're giving infra." },
  { startTime: 2688.79, person: 'Karol', text: ' Then in that sense, this is maintenance, right?' },
  { startTime: 2700.17, person: 'Karol', text: ' In that sense, this would be also updates.' },
  { startTime: 2706.54, person: 'Karol', text: " So they're covering that within the licence." },
  { startTime: 2710.24, person: 'Karol', text: ' Now, what else has been covered?' },
  {
    startTime: 2712.9,
    person: 'Karol',
    text: ' Depending on the licences, we have additional tools, I suppose.'
  },
  { startTime: 2716.7, person: 'Karol', text: ' So we have API management.' },
  {
    startTime: 2722.78,
    person: 'Karol',
    text: " We have, well, alongside the API management, there's an API portal."
  },
  { startTime: 2731.49, person: 'Karol', text: ' We have, what else?' },
  { startTime: 2735.17, person: 'Karol', text: ' Load balancing.' },
  {
    startTime: 2738.45,
    person: 'Karol',
    text: " If, of course, if we're doing this in cloud, we have control plane."
  },
  { startTime: 2752.99, person: 'Karol', text: ' We have logging and monitoring.' },
  {
    startTime: 2761.99,
    person: 'Karol',
    text: ' And this here, logging and monitoring, I would only argue that this is to a limited extent.'
  },
  {
    startTime: 2766.67,
    person: 'Karol',
    text: ' And most companies, when they do iPaaSes, they implement their own logging and monitoring practises that are centralised.'
  },
  { startTime: 2775.11, person: 'Karol', text: " And it's a way to do it." },
  {
    startTime: 2776.69,
    person: 'Karol',
    text: " That's a very good practise to have it centralised because then logs from a domain system that initiates the communication land at the same place as logs from the iPaaS and logs from the other systems that partake in that communication, right?"
  },
  {
    startTime: 2792.71,
    person: 'Karol',
    text: ' So then we have proper traceability of communication.'
  },
  {
    startTime: 2796.65,
    person: 'Karol',
    text: ' We can do root cause analysis based on those logs all in one place.'
  },
  {
    startTime: 2801.33,
    person: 'Karol',
    text: ' So easier to operate the whole ecosystem, right?'
  },
  {
    startTime: 2805.21,
    person: 'Karol',
    text: ' So these are out of the box things that come with an iPaaS.'
  },
  {
    startTime: 2811.15,
    person: 'Karol',
    text: ' And I would also add to it that we also get with certain iPaaSes, not with all of them.'
  },
  { startTime: 2817.85, person: 'Karol', text: ' And MuleSoft here is a bit of an exception.' },
  { startTime: 2821.61, person: 'Karol', text: ' We get the message broker as well.' },
  {
    startTime: 2824.39,
    person: 'Karol',
    text: " So for example, if you go to SAP BTP, they're partnering with Solace."
  },
  {
    startTime: 2831.01,
    person: 'Karol',
    text: " So underneath there's Solace running as an event broker."
  },
  {
    startTime: 2834.53,
    person: 'Karol',
    text: " If you go to Boomi, they're also partnering with Solace."
  },
  { startTime: 2837.31, person: 'Karol', text: " So they're running a Solace broker underneath." },
  { startTime: 2840.71, person: 'Karol', text: ' They have event mesh capabilities, etcétera.' },
  { startTime: 2844.05, person: 'Karol', text: ' So these are things that come into the licence.' },
  {
    startTime: 2846.31,
    person: 'Karol',
    text: ' Of course, the message broker would be then optional.'
  },
  {
    startTime: 2849.49,
    person: 'Karol',
    text: ' API management, API portal would be something that is sometimes sold as a separate licence.'
  },
  { startTime: 2857.97, person: 'Karol', text: ' Fair.' },
  { startTime: 2861.41, person: 'Karol', text: ' But this is only part of it.' },
  { startTime: 2864.47, person: 'Karol', text: ' Security.' },
  { startTime: 2865.21, person: 'Karol', text: ' Yes.' },
  { startTime: 2866.89, person: 'Karol', text: ' Good point.' },
  { startTime: 2867.91, person: 'Karol', text: ' Security.' },
  { startTime: 2868.51, person: 'Karol', text: ' Security is part of the...' },
  { startTime: 2870.27, person: 'Karol', text: " Well, that's basically API gateway." },
  { startTime: 2872.25, person: 'Karol', text: ' So security policies.' },
  { startTime: 2873.45, person: 'Karol', text: ' All right.' },
  { startTime: 2877.78, person: 'Karol', text: ' So that would be that.' },
  { startTime: 2880.72, person: 'Karol', text: ' Anything else?' },
  { startTime: 2882, person: 'Karol', text: " Anything I'm missing so far?" },
  {
    startTime: 2887.7,
    person: 'Karol',
    text: ' Let me check my notes that I wrote down before the stream.'
  },
  { startTime: 2894.48, person: 'Karol', text: ' Da-da-da-da-da-da.' },
  { startTime: 2895.82, person: 'Karol', text: ' Low-balancing tracking API management policies.' },
  { startTime: 2900.08, person: 'Karol', text: ' Okay.' },
  { startTime: 2900.54, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 2900.82,
    person: 'Karol',
    text: " That's pretty much all in my notes in terms of what is covered by a licence or could be covered by a licence."
  },
  {
    startTime: 2907.98,
    person: 'Karol',
    text: " Now, I'll give you a chance to advocate for Java."
  },
  {
    startTime: 2913.46,
    person: 'Karol',
    text: " And tell me, looking at this scope of coverage of the capabilities that are given by an IPaaS, do you think it's feasible to cover this by Java?"
  },
  {
    startTime: 2923.44,
    person: 'Karol',
    text: ' And in what scenario that would be feasible to cover it by Java?'
  },
  { startTime: 2928.6, person: 'Brian', text: ' No, this is absolutely everything here.' },
  {
    startTime: 2932.06,
    person: 'Brian',
    text: ' I mean, I can go one by one, but everything here is Java.'
  },
  { startTime: 2938.4, person: 'Brian', text: " And in many ways, better in Java, let's say." },
  {
    startTime: 2942.72,
    person: 'Brian',
    text: " I mean, ultimately, there may be an overhead that's happening with MuleSoft."
  },
  { startTime: 2948.38, person: 'Brian', text: ' Maybe they would be faster.' },
  { startTime: 2949.86, person: 'Brian', text: ' You can kind of click on.' },
  {
    startTime: 2951.84,
    person: 'Brian',
    text: " But one thing that's also is, let's say I'm an architect."
  },
  { startTime: 2955.76, person: 'Brian', text: " I've been an architect on many projects." },
  {
    startTime: 2959.96,
    person: 'Brian',
    text: " So let's say if I'm an architect on a project, and we're going to implement, we're implementing MuleSoft."
  },
  {
    startTime: 2967.82,
    person: 'Brian',
    text: " Or let's say even we're implementing Java on both of them."
  },
  {
    startTime: 2973.44,
    person: 'Brian',
    text: " Like on both of those projects, I'm doing everything here."
  },
  {
    startTime: 2978.22,
    person: 'Brian',
    text: " Like, it's not like I just pulled out the IPaaS and click, I'm going to choose option one utilities."
  },
  {
    startTime: 2984.84,
    person: 'Brian',
    text: ' So if I was doing this in MuleSoft, and if you did the MuleSoft architect course, you have to look at each of these, right?'
  },
  { startTime: 2993.86, person: 'Brian', text: ' What kind of load balancing am I going to do?' },
  { startTime: 2996.04, person: 'Brian', text: ' What is the logging?' },
  { startTime: 2997.6, person: 'Brian', text: " That's maybe more a team meet." },
  { startTime: 2999.18, person: 'Brian', text: " What's the monitoring?" },
  { startTime: 3001.44, person: 'Brian', text: " What's message broker?" },
  { startTime: 3003.7, person: 'Brian', text: ' Which kind of security am I going to do?' },
  {
    startTime: 3006.44,
    person: 'Brian',
    text: " What are the connections that I'm connecting that I'm going to do?"
  },
  {
    startTime: 3011.04,
    person: 'Brian',
    text: ' And all of that, and there are libraries in Java that do many of these things, too.'
  },
  {
    startTime: 3018.82,
    person: 'Brian',
    text: " And let's say all the connectors, you know, would be like, oh, we're connecting to Salesforce."
  },
  { startTime: 3023.23, person: 'Brian', text: " Well, there's a connector for Java." },
  {
    startTime: 3026.4,
    person: 'Brian',
    text: " Like there's a, I think, that's questionable because it's Salesforce, but DB2, Oracle, everyone is going to write a Java connector library to connect into them."
  },
  { startTime: 3042.72, person: 'Brian', text: " And it's going to be straight." },
  {
    startTime: 3044.26,
    person: 'Brian',
    text: ' And MuleSoft is just going, well, of course, MuleSoft is taking that code and translating it to Java, right?'
  },
  {
    startTime: 3051.96,
    person: 'Brian',
    text: " So instead you're kind of getting rid of that extra layer."
  },
  {
    startTime: 3056.34,
    person: 'Brian',
    text: ' But all the questions, everything like what is the password?'
  },
  { startTime: 3060.56, person: 'Brian', text: " What's the security?" },
  { startTime: 3061.36, person: 'Brian', text: ' What level should we do?' },
  { startTime: 3063.42, person: 'Brian', text: ' Everything needs to be done regardless.' },
  {
    startTime: 3066.1,
    person: 'Brian',
    text: " So I know it kind of gives you this feeling like, oh, it's just giving it to you out of the box or something, but it's not."
  },
  {
    startTime: 3073.52,
    person: 'Brian',
    text: ' You still, as the architect, you still need to configure all of these things and you would configure it all in Java.'
  },
  {
    startTime: 3080.92,
    person: 'Brian',
    text: " And there are some things like, I actually remember the logging was, it's log4j, but you couldn't actually update that if you're on a, you lose control of that logging sometimes when you're in some environments."
  },
  {
    startTime: 3097.68,
    person: 'Brian',
    text: " And then if you've ever contacted, even I'm sure I'm at the highest level of MuleSoft support, I don't find necessarily the support to be any better than my own developers telling me it's obviously, usually it's going to be a business problem."
  },
  {
    startTime: 3114.88,
    person: 'Brian',
    text: " They're not necessarily going to solve that for me."
  },
  {
    startTime: 3118.28,
    person: 'Brian',
    text: " And also I'll understand things like what's the threading going on?"
  },
  { startTime: 3121.8, person: 'Brian', text: " What's the performance going on here?" },
  { startTime: 3123.88, person: 'Brian', text: ' I can do it.' },
  {
    startTime: 3125.42,
    person: 'Brian',
    text: " And when you're doing, you're looking at a problem, let's say, and you're going to say, well, I want to do a Java garbage dump of what's going on here."
  },
  {
    startTime: 3133.84,
    person: 'Brian',
    text: " Can I see the Java code that MuleSoft has created so I can figure out what's the underlying problem here?"
  },
  {
    startTime: 3140.32,
    person: 'Brian',
    text: " So really with Java you have, you're just at that level."
  },
  {
    startTime: 3146.44,
    person: 'Brian',
    text: " And I'm, I've been a Java, I'm a Java developer."
  },
  {
    startTime: 3150.42,
    person: 'Brian',
    text: " I've been a Java developer and also I've been a MuleSoft developer."
  },
  {
    startTime: 3153.84,
    person: 'Brian',
    text: ' And sometimes I would, I talk to my friends and I say, you know what?'
  },
  { startTime: 3159.82, person: 'Brian', text: ' I think I can build this.' },
  {
    startTime: 3161.04,
    person: 'Brian',
    text: " Let's, I'm just going to do a CRUD operation here from my HTTP request into Oracle, you know, and I'm just going to do the whole CRUD and boom, I can write that in Java."
  },
  {
    startTime: 3170.74,
    person: 'Brian',
    text: " And, you know, if you're a Java developer and there's 7 million Java developers, 7 million people that you can hire that are available to have that experience."
  },
  {
    startTime: 3180.02,
    person: 'Brian',
    text: ' And you may have some already that can move from within your organisation.'
  },
  {
    startTime: 3183.62,
    person: 'Brian',
    text: " And there's 200,000 MuleSoft developers, or fewer that know and understand that."
  },
  {
    startTime: 3194.12,
    person: 'Karol',
    text: ' 200,000 is only the size of the MuleSoft community that is a registered community within the space of people actually being actively participating in the community.'
  },
  {
    startTime: 3208.14,
    person: 'Karol',
    text: ' The approximated size of the pool of developers for MuleSoft is around five times more.'
  },
  {
    startTime: 3216.76,
    person: 'Karol',
    text: " So it's around 1 million out of like 42 million of developers worldwide, looking at all sorts of developers."
  },
  { startTime: 3224.78, person: 'Karol', text: " So that's a big pool." },
  { startTime: 3227.2, person: 'Karol', text: ' Now, I would argue here two things.' },
  {
    startTime: 3231.14,
    person: 'Karol',
    text: ' Of course, we can do everything in Java, but my argument here would be feasibility.'
  },
  {
    startTime: 3239.02,
    person: 'Karol',
    text: " Because if I would want to go and build from scratch in Java, an API portal that is functional and has all the features that I need, I think that is completely not feasible from a perspective of company that's running their business."
  },
  {
    startTime: 3257.22,
    person: 'Karol',
    text: ' So if we put this in the context of technology itself, yes, we can do everything in Java.'
  },
  {
    startTime: 3263.44,
    person: 'Karol',
    text: ' But if we could put this in the context of a company running their business, then we have the aspect of feasibility that we need to look at.'
  },
  { startTime: 3271.5, person: 'Karol', text: ' So what problem is an IPaaS solving here?' },
  {
    startTime: 3276.66,
    person: 'Karol',
    text: ' IPaaS is solving a problem of speeding up time to market.'
  },
  {
    startTime: 3283.54,
    person: 'Karol',
    text: ' Getting that time to market to be a lot shorter than it would be with just writing pure code.'
  },
  {
    startTime: 3293.2,
    person: 'Brian',
    text: " Well, and this is where I'm fortunate enough that I've been able to build systems in both technologies."
  },
  { startTime: 3302.1, person: 'Brian', text: " And then I've built this stuff." },
  { startTime: 3305.66, person: 'Brian', text: ' I know that I can build all of this stuff.' },
  {
    startTime: 3307.86,
    person: 'Brian',
    text: ' These are the kinds of things that one would do, regardless whether you write in Java or MuleSoft.'
  },
  {
    startTime: 3312.94,
    person: 'Brian',
    text: ' I might even argue it would take me a little longer to do in MuleSoft.'
  },
  { startTime: 3316.1, person: 'Brian', text: ' It might be harder to get resources.' },
  {
    startTime: 3318.42,
    person: 'Brian',
    text: ' But I can, as an architect, and my business, I have to do an estimate.'
  },
  {
    startTime: 3324.22,
    person: 'Brian',
    text: " Okay, let's build me some APIs to connect stuff together."
  },
  { startTime: 3330.1, person: 'Brian', text: ' It would take the same amount of time.' },
  {
    startTime: 3332.66,
    person: 'Brian',
    text: ' And actually, I have an interesting, I kind of did a similar situation once.'
  },
  { startTime: 3339.9, person: 'Brian', text: " And I didn't even actually do it in Java." },
  {
    startTime: 3342.14,
    person: 'Brian',
    text: ' So I had to do this project, and they were using Salesforce, right?'
  },
  { startTime: 3350.18, person: 'Brian', text: ' So I guess MuleSoft was an option for them.' },
  {
    startTime: 3353.16,
    person: 'Brian',
    text: ' And the company, and it was a huge, I saw they had just sold for half, one and a half million dollars US.'
  },
  {
    startTime: 3359.72,
    person: 'Brian',
    text: " So that's probably close to a year, one and a half million US."
  },
  { startTime: 3363.26, person: 'Brian', text: " So it's a big company, right?" },
  {
    startTime: 3364.86,
    person: 'Brian',
    text: " And then they said, they said, Okay, Brian, we need to, we need to connect because it's Salesforce."
  },
  {
    startTime: 3370.82,
    person: 'Brian',
    text: ' And they had this, they had this interface, right?'
  },
  {
    startTime: 3374.64,
    person: 'Brian',
    text: ' And they had this company had bought, like, you know, 10 different other, or not 10, 20 different companies, they bought a tonne of companies.'
  },
  {
    startTime: 3383.8,
    person: 'Brian',
    text: " And now they're dealing with customers, and they have a million different systems."
  },
  { startTime: 3387.74, person: 'Brian', text: ' And so they bought the Salesforce.' },
  {
    startTime: 3389.66,
    person: 'Brian',
    text: ' And then Salesforce says, Okay, well, now what we need is we need to get that.'
  },
  {
    startTime: 3395.52,
    person: 'Brian',
    text: " Interesting, it's called licencing, it was the licencing for each of the different, every, every different product had a different licencing term and time that it was going to come, but the customers had probably one or two of each of the different products."
  },
  {
    startTime: 3407.76,
    person: 'Brian',
    text: ' So we had to get the list of all their licences.'
  },
  {
    startTime: 3410.8,
    person: 'Brian',
    text: " So they said, Okay, Brian, like, we need that's, that's the need, we've got all these different places, you've got to go out there, and you got to get that data."
  },
  {
    startTime: 3419.48,
    person: 'Brian',
    text: " And, of course, well, we're gonna, and we need to, we're going to put it into Salesforce, right?"
  },
  {
    startTime: 3425.92,
    person: 'Brian',
    text: " So they have the Salesforce team, but they need to get the data, they're going to do it Mulesoft and said, No, Brian, you do it."
  },
  { startTime: 3432.46, person: 'Brian', text: " And, and they actually were doing API's." },
  { startTime: 3436.66, person: 'Brian', text: " And they were doing API's." },
  {
    startTime: 3438.62,
    person: 'Brian',
    text: " And I'm not even sure, I think it was JavaScript."
  },
  { startTime: 3442.62, person: 'Brian', text: " And I'm not even this was like, two years ago." },
  { startTime: 3445.36, person: 'Brian', text: ' So I think they were doing it in JavaScript.' },
  {
    startTime: 3446.8,
    person: 'Brian',
    text: " So, so we're just going to write this, the API's in JavaScript."
  },
  {
    startTime: 3451.32,
    person: 'Brian',
    text: " And so I, I got the team, I had two developers, two testers, I went and I had a DevOps, just write these API's, go to each of these product teams, get the data, what's the form of that licence, you know, and then we're going to have like the data structure that's common enough, and then get that data and just send it into."
  },
  { startTime: 3470.64, person: 'Brian', text: ' So I defined the data.' },
  {
    startTime: 3472.18,
    person: 'Brian',
    text: ' And then that changed when I got to each one of the ones.'
  },
  {
    startTime: 3475.08,
    person: 'Brian',
    text: " And also, I was just getting and then I'll set to do the security for each of them."
  },
  { startTime: 3479.76, person: 'Brian', text: " I'll give you the password, give me access." },
  {
    startTime: 3481.6,
    person: 'Brian',
    text: " Sometimes it would just be right from a database, sometimes it's from another API that they have."
  },
  { startTime: 3486.16, person: 'Brian', text: " So it's API, API." },
  { startTime: 3487.48, person: 'Brian', text: ' But I built all of that.' },
  {
    startTime: 3489.24,
    person: 'Brian',
    text: ' And for me, it was just a halftime gig I did for half a year.'
  },
  {
    startTime: 3492.78,
    person: 'Brian',
    text: " And we did like, you know, 10 API's or something, and connected everything."
  },
  { startTime: 3497.22, person: 'Brian', text: ' So, so we have that problem.' },
  {
    startTime: 3499.26,
    person: 'Brian',
    text: " It's the problem, right of connecting information together, and just solved it in JavaScript."
  },
  {
    startTime: 3505.96,
    person: 'Brian',
    text: ' I mean, the API could be botnet, it could be, it could be JavaScript, again, you know, or just lots of other languages, you can use it to use JavaScript, Java.'
  },
  {
    startTime: 3515.4,
    person: 'Brian',
    text: " So for me, it's, I guess that I am converting stuff to Java."
  },
  {
    startTime: 3521.1,
    person: 'Brian',
    text: " So anyway, so that's, that's, that's where I'm saying I've actually done it."
  },
  { startTime: 3526.08, person: 'Brian', text: ' There was the monitoring.' },
  { startTime: 3529.4, person: 'Brian', text: ' Yeah, so it is completely doable.' },
  {
    startTime: 3534.08,
    person: 'Brian',
    text: " And it's not that's why and that's where I think like, I think it was one of those things that that they sold as as a solution to solve this."
  },
  {
    startTime: 3543.48,
    person: 'Brian',
    text: " But I think it's, it's more expensive than it's not, it's not necessary."
  },
  {
    startTime: 3546.62,
    person: 'Brian',
    text: " In my mind, you can do everything in Java, and, and just create your own API's."
  },
  { startTime: 3553.86, person: 'Brian', text: ' But you need you need a, what do you need?' },
  {
    startTime: 3556.12,
    person: 'Brian',
    text: " And what's important is, is, is to have an architect, but you're gonna have that you need that architect, regardless, that you need the security architect to have what's all the security around it?"
  },
  { startTime: 3566, person: 'Brian', text: " What's the data?" },
  { startTime: 3567.46, person: 'Brian', text: ' How are we going to manage?' },
  { startTime: 3570.9, person: 'Brian', text: ' And the iPaaS not going to solve that for you.' },
  {
    startTime: 3574.46,
    person: 'Karol',
    text: ' Of course, you still need people that can make sense of it, because you can make a big bowl of mud out of integration platform.'
  },
  {
    startTime: 3581.36,
    person: 'Karol',
    text: ' And you can do it with MuleSoft, with Boomi, with Workato and doing pure Java.'
  },
  {
    startTime: 3587.22,
    person: 'Karol',
    text: " If you don't have the right person that understands integration architecture, no amount of tools and technologies will help you solve the interoperability problems."
  },
  { startTime: 3596.96, person: 'Karol', text: " That's, that's a given." },
  {
    startTime: 3600.06,
    person: 'Karol',
    text: ' I would argue one thing in terms of feasibility, given your background, a versatile background, right?'
  },
  {
    startTime: 3609.84,
    person: 'Karol',
    text: " Wouldn't you say you have a cognitive bias towards Java, and towards high code, pure code, because your background is very much out of code, right?"
  },
  {
    startTime: 3626.1,
    person: 'Karol',
    text: ' So your problem solving is essentially a lot quicker in terms of thinking about solving a problem in Java, or in JavaScript, or in any other written language.'
  },
  {
    startTime: 3641.38,
    person: 'Karol',
    text: ' And if you look at it from only your perspective as an architect, then of course, yes, you can solve it.'
  },
  {
    startTime: 3649.08,
    person: 'Karol',
    text: ' But then those companies at scale, if for example, a company has around 100 domain systems, and those domain systems and applications, they are all unique, they do not overlap in functionality, and they need them to interoperate between one another, we need to exchange data, they need to reuse data, they need to limit impact.'
  },
  {
    startTime: 3672.26,
    person: 'Karol',
    text: ' Of course, we need API led architecture or service orientated architecture, right?'
  },
  { startTime: 3676.56, person: 'Karol', text: ' Because we need those abstraction layers.' },
  {
    startTime: 3679.04,
    person: 'Karol',
    text: ' Now, if you would start building this entirely from scratch, then you have to cover oh, so many topics at the beginning.'
  },
  {
    startTime: 3693.08,
    person: 'Karol',
    text: ' So if you look at this from a perspective of an average developer, not from your experience perspective, because you have the 40 years of experience, and that makes you a great specialist, but that makes you.'
  },
  {
    startTime: 3705.74,
    person: 'Karol',
    text: " So if we look at this from perspective of, let's say average developer, that has a that would have to learn the company is joining the company just now, has no idea about what the company does, in details, they have a vague idea what the business is, because they, let's say they researched the company before joining, they have a vague idea of what frameworks they're using, perfect, fantastic."
  },
  {
    startTime: 3735.52,
    person: 'Karol',
    text: " They have no idea of the complexity of those systems, the complexity of the ecosystem, and they're just dumped into the middle of it."
  },
  {
    startTime: 3742.92,
    person: 'Karol',
    text: " And you say to them, all right, let's make it interoperate, right?"
  },
  { startTime: 3746.28, person: 'Karol', text: " Let's make them those systems exchange data." },
  {
    startTime: 3749.18,
    person: 'Karol',
    text: " We're at the state of we're having a big ball of mud."
  },
  { startTime: 3753.02, person: 'Karol', text: ' Those connections are point to point.' },
  {
    startTime: 3757.12,
    person: 'Karol',
    text: " The company's screwed on the interoperability part, because they neglected that forever."
  },
  {
    startTime: 3763.18,
    person: 'Karol',
    text: " Now, if we're looking from that perspective, okay, you're a Java developer."
  },
  { startTime: 3768.16, person: 'Karol', text: ' So you need to get yourself a framework.' },
  {
    startTime: 3771.8,
    person: 'Karol',
    text: ' Okay, if you go with Apache Camel, fantastic, right?'
  },
  {
    startTime: 3776.08,
    person: 'Karol',
    text: " Because that's a Java framework for interoperability."
  },
  {
    startTime: 3779.9,
    person: 'Karol',
    text: ' From the pool of seven, eight million Java developers, how many Java developers would know Apache Camel?'
  },
  { startTime: 3789.14, person: 'Brian', text: " Yeah, that's a subset." },
  { startTime: 3791.6, person: 'Karol', text: " Yeah, that's a subset." },
  {
    startTime: 3793.56,
    person: 'Karol',
    text: " Now, let's dig into that feasibility of this subset."
  },
  {
    startTime: 3800.54,
    person: 'Karol',
    text: ' Now, even if we choose Apache Camel, Apache Camel is a fine framework, but you need to learn it, you need to know it.'
  },
  {
    startTime: 3807.12,
    person: 'Karol',
    text: " And I've seen Java developers take Apache Camel, and instead of using Camel routes, they actually omitted all of those and started just building pure Java."
  },
  {
    startTime: 3818.22,
    person: 'Karol',
    text: " So they're not literally using the framework, they're just building applications, starting with the framework and then doing just pure Java."
  },
  { startTime: 3826.9, person: 'Karol', text: " That doesn't speed up anything." },
  {
    startTime: 3828.38,
    person: 'Karol',
    text: " The framework is there to speed up things, but they don't know it, they don't learn it."
  },
  {
    startTime: 3833.9,
    person: 'Karol',
    text: " So they do pure Java because they don't know how to solve those problems."
  },
  {
    startTime: 3837.9,
    person: 'Karol',
    text: ' A different problem entirely, because Apache Camel is not really greatly documented.'
  },
  {
    startTime: 3844.54,
    person: 'Karol',
    text: ' There are no good tutorials for Apache Camel to learn it on your own.'
  },
  {
    startTime: 3848.92,
    person: 'Karol',
    text: ' You have to dive into an environment that already uses Apache Camel to actually be able to learn it and be efficient at it.'
  },
  {
    startTime: 3857.82,
    person: 'Karol',
    text: ' Now, on top of that, I did have a case where we had a pure Java developer that actually knew Camel, and I had the chance to chat with him about his observations about moving Java developers to an integration framework in Java.'
  },
  { startTime: 3877.7, person: 'Karol', text: ' Now, this is a mindset shift.' },
  { startTime: 3882.32, person: 'Karol', text: " If you're looking as an architect and as a" },
  {
    startTime: 3884.5,
    person: 'Karol',
    text: ' developer, and these are two different perspectives, at building domain systems,'
  },
  {
    startTime: 3892,
    person: 'Karol',
    text: " you're looking at building this with persistence, with security, with dealing with data, with"
  },
  {
    startTime: 3898.42,
    person: 'Karol',
    text: ' operating on data, with doing all sorts of business transformations, with a UI, you need'
  },
  {
    startTime: 3904.7,
    person: 'Karol',
    text: " to persist sessions, all sorts of weird stuff that I have no idea about because I'm neither a"
  },
  {
    startTime: 3912.02,
    person: 'Karol',
    text: ' Java developer nor a solution or systems architect, right?'
  },
  {
    startTime: 3916.84,
    person: 'Karol',
    text: ' I mean, I know quite a bit about that, but never done that personally.'
  },
  {
    startTime: 3921.1,
    person: 'Karol',
    text: " But that's a different mindset from that perspective than a mindset of an integration specialist."
  },
  {
    startTime: 3928.02,
    person: 'Karol',
    text: " Because if you're an integration specialist, you don't want to persist stuff."
  },
  {
    startTime: 3933.04,
    person: 'Karol',
    text: " Because you're moving data, not operating on that data."
  },
  { startTime: 3936.64, person: 'Karol', text: " You're not creating data based on subsets." },
  {
    startTime: 3939.54,
    person: 'Karol',
    text: " You're not executing business logic and the understanding of creating data from data."
  },
  { startTime: 3944.98, person: 'Karol', text: ' Right?' },
  {
    startTime: 3945.6,
    person: 'Karol',
    text: " You're just moving that data from one place to another, transforming that data."
  },
  {
    startTime: 3950.92,
    person: 'Karol',
    text: " If we have that abstraction layer of an integration platform, we're transforming that data so that those domain systems do not have to learn each other."
  },
  { startTime: 3961.32, person: 'Karol', text: " Because that's what the abstraction does." },
  { startTime: 3963.04, person: 'Karol', text: ' This one is in REST. This one is in SOAP.' },
  { startTime: 3966.24, person: 'Karol', text: ' Okay.' },
  { startTime: 3966.5, person: 'Karol', text: ' Fantastic.' },
  { startTime: 3967.34, person: 'Karol', text: " You don't have to learn SOAP." },
  {
    startTime: 3968.92,
    person: 'Karol',
    text: " You don't have to learn REST. Because we have an integration platform."
  },
  { startTime: 3971.66, person: 'Karol', text: ' That integration platform will solve that.' },
  { startTime: 3974.84, person: 'Karol', text: ' Right?' },
  {
    startTime: 3977.44,
    person: 'Karol',
    text: ' How much of an effort it is to teach a Java developer that has a backend experience to be an integration specialist?'
  },
  { startTime: 3986.72, person: 'Karol', text: " Because that's a different mindset." },
  { startTime: 3988.62, person: 'Karol', text: ' I have an even worse example.' },
  {
    startTime: 3991.14,
    person: 'Karol',
    text: ' How bad it is to teach a DBA to be an integration developer.'
  },
  { startTime: 3996.74, person: 'Karol', text: ' Not teachable.' },
  {
    startTime: 3998.32,
    person: 'Karol',
    text: " Because if I put a DBA to do an integration platform, I'll end up with an MDM solution with small Azure serverless pipelines feeding the data into that MDM and feeding that data out."
  },
  { startTime: 4014.14, person: 'Karol', text: " That's not an integration platform." },
  { startTime: 4015.94, person: 'Karol', text: " That's an MDM." },
  {
    startTime: 4018.16,
    person: 'Karol',
    text: " So, if we're limiting the Java population from those 9 million to those people who actually did application integration and they understand what application integration is, so low data persistence and removing data, right?"
  },
  { startTime: 4037.66, person: 'Karol', text: ' How many of them they are?' },
  { startTime: 4040, person: 'Karol', text: " I think that's a subset of what?" },
  { startTime: 4043.28, person: 'Karol', text: ' Less than 10%?' },
  { startTime: 4045.66, person: 'Karol', text: ' Educated guess?' },
  { startTime: 4046.72, person: 'Brian', text: ' No.' },
  {
    startTime: 4049.3,
    person: 'Brian',
    text: ' Anyways, I, you know, like, there are good MuleSoft developers.'
  },
  { startTime: 4055.6, person: 'Brian', text: ' There are good Java developers.' },
  { startTime: 4058.54, person: 'Brian', text: ' I, you know, obviously I would be biassed here.' },
  { startTime: 4062.58, person: 'Brian', text: " I've worked with a lot of people." },
  {
    startTime: 4064.18,
    person: 'Brian',
    text: " I've worked with maybe thousands of Java developers, hundreds of MuleSoft developers."
  },
  {
    startTime: 4071.08,
    person: 'Brian',
    text: ' But I really have a lot of respect for the Java developers.'
  },
  { startTime: 4074.8, person: 'Brian', text: ' I think they have a very strong understanding.' },
  { startTime: 4077.68, person: 'Brian', text: ' They have very strong technical skills.' },
  {
    startTime: 4080.74,
    person: 'Brian',
    text: " Let's say for threading, like, I think that integration is low-lying fruit for them."
  },
  { startTime: 4087.52, person: 'Brian', text: ' They have very strong design skills.' },
  {
    startTime: 4092.3,
    person: 'Brian',
    text: ' So, to me, the Java developers are really superior and able to handle...'
  },
  {
    startTime: 4098.279,
    person: 'Brian',
    text: " Now, you're going to have bad Java developers, personally, so that's..."
  },
  {
    startTime: 4101.479,
    person: 'Karol',
    text: " And you're going to have integration developers, as well."
  },
  { startTime: 4104.979, person: 'Karol', text: " That's normal." },
  {
    startTime: 4106.56,
    person: 'Brian',
    text: ' So, but I, you know, in my experience, the Java developers are superior.'
  },
  {
    startTime: 4112.359,
    person: 'Brian',
    text: " And now, if you get a student or someone who's a fresh graduate, I'm guessing they took Java at some point in time, maybe C."
  },
  { startTime: 4122.96, person: 'Brian', text: ' And C is fine, too, you know.' },
  { startTime: 4124.6, person: 'Brian', text: ' But in order...' },
  {
    startTime: 4126.02,
    person: 'Brian',
    text: " And I don't know what the curriculum is now, but I would expect that they would know Java, you know."
  },
  { startTime: 4131.84, person: 'Brian', text: ' Whereas, would they know MuleSoft?' },
  { startTime: 4133.92, person: 'Brian', text: " I don't think they know that as much." },
  { startTime: 4135.8, person: 'Brian', text: ' So, I think that Java is a bit more of the...' },
  {
    startTime: 4140.14,
    person: 'Brian',
    text: ' And then, also, MuleSoft decided to implement this in Java.'
  },
  { startTime: 4144.6, person: 'Brian', text: " They must have felt, and it's true, Java is..." },
  {
    startTime: 4148.279,
    person: 'Brian',
    text: " Like, I know there's JavaScript, which I think is more of a front-end tool."
  },
  {
    startTime: 4152.66,
    person: 'Brian',
    text: " I think there's Python, which is used in DevOps and machine learning and stuff."
  },
  {
    startTime: 4157.6,
    person: 'Brian',
    text: ' But I think for the middle layers of complex data and communication between applications, Java is kind of that enterprise.'
  },
  {
    startTime: 4169.1,
    person: 'Brian',
    text: " And also, I think that it's a 90% of Fortune 500 companies use Java."
  },
  { startTime: 4175.54, person: 'Brian', text: " I feel like there's a Java team there." },
  { startTime: 4178.7, person: 'Brian', text: " It doesn't necessarily..." },
  {
    startTime: 4180.859,
    person: 'Brian',
    text: ' It may not be true, and that might be an issue.'
  },
  { startTime: 4188.319, person: 'Brian', text: ' But I had this other use case.' },
  { startTime: 4191.16, person: 'Brian', text: " This is actually someone that's using our tool." },
  { startTime: 4196.16, person: 'Brian', text: ' And they...' },
  { startTime: 4197.28, person: 'Brian', text: ' Can I talk about that?' },
  { startTime: 4198.58, person: 'Brian', text: ' Okay.' },
  { startTime: 4199.56, person: 'Karol', text: ' So, praising Java developers.' },
  { startTime: 4205.12, person: 'Karol', text: ' And yeah, I do respect Java developers.' },
  { startTime: 4208.38, person: 'Karol', text: ' They can do some really good magic.' },
  {
    startTime: 4212.8,
    person: 'Karol',
    text: " But if I look at the average, and I'm always like..."
  },
  {
    startTime: 4217.16,
    person: 'Karol',
    text: " If I'm talking about average and averaging over skill sets, averaging over approach towards problem-solving or approach towards doing anything, it's always a bias until you start learning something else, right?"
  },
  {
    startTime: 4234.72,
    person: 'Karol',
    text: " And I don't know if you're familiar with this very..."
  },
  {
    startTime: 4238.86,
    person: 'Karol',
    text: ' Well, quite an old comedian from US, George Carlin.'
  },
  { startTime: 4242.36, person: 'Karol', text: " I'm guessing you know the guy." },
  {
    startTime: 4245.92,
    person: 'Karol',
    text: ' I absolutely enjoy the impeccable logic of his comedy sketches.'
  },
  {
    startTime: 4250.26,
    person: 'Karol',
    text: ' And George Carlin, in one of his sketches, he says something...'
  },
  {
    startTime: 4253.48,
    person: 'Karol',
    text: ' Well, think about how stupid is an average person, right?'
  },
  {
    startTime: 4261.78,
    person: 'Karol',
    text: " You've got the mental picture of what an average person is in terms of stupidity."
  },
  {
    startTime: 4265.8,
    person: 'Karol',
    text: ' Well, then realise that half of them are stupider, right?'
  },
  { startTime: 4271.78, person: 'Karol', text: " In that sense, it's a very universal truth." },
  {
    startTime: 4275.18,
    person: 'Karol',
    text: " Of course, it's a bias truth, because every one of us will have a different view on the average, which already is a cognitive bias there."
  },
  { startTime: 4285.64, person: 'Karol', text: " But it's a bit of a universal truth." },
  {
    startTime: 4288,
    person: 'Karol',
    text: " So if we're looking at scale, and if we're looking at IPaaSes, IPaaSes are not existing in small companies."
  },
  {
    startTime: 4295.7,
    person: 'Karol',
    text: " They're not existing to an extent in medium companies."
  },
  {
    startTime: 4299.78,
    person: 'Karol',
    text: ' We go from medium to extremely large corporate environments, basically.'
  },
  { startTime: 4304.14, person: 'Karol', text: ' And then we have two types of IPaaSes.' },
  {
    startTime: 4306.38,
    person: 'Karol',
    text: ' We either have broker architecture, so a singular abstraction layer, and we have API-led architecture, which is free abstraction layers, as we already discussed.'
  },
  {
    startTime: 4315.86,
    person: 'Karol',
    text: " That's what MuleSoft used to be proposing before the composable architecture fiasco, right?"
  },
  {
    startTime: 4324.14,
    person: 'Karol',
    text: " So, in that sense, there is a reason these are there, because it's a problem of scale."
  },
  {
    startTime: 4332.44,
    person: 'Karol',
    text: " If you would want to write code for every single one of these, it's a problem."
  },
  {
    startTime: 4338.38,
    person: 'Karol',
    text: ' You end up, basically, doing the same as MuleSoft did, in the sense that you prepare predefined libraries and just feed them with proper configuration.'
  },
  {
    startTime: 4350.72,
    person: 'Karol',
    text: ' Because if you look at the basis of an IPaaS, like MuleSoft, right?'
  },
  { startTime: 4355.24, person: 'Karol', text: " It's written in Java." },
  { startTime: 4356.14, person: 'Karol', text: " You're absolutely right." },
  {
    startTime: 4357.48,
    person: 'Karol',
    text: " So Java is a fourth generation language, let's say, right?"
  },
  {
    startTime: 4360.86,
    person: 'Karol',
    text: ' So if you look at low code, we can treat that as a fifth generation language, more closer to a natural language that we use to convey thought as human beings.'
  },
  {
    startTime: 4371.44,
    person: 'Karol',
    text: " So there's a lot going on under each activity that you put on the canvas in Mule IDE or Boomi IDE or whatever else."
  },
  {
    startTime: 4382.18,
    person: 'Karol',
    text: " It's basically creating a configuration that is then executed by some sort of a Java library."
  },
  { startTime: 4388.16, person: 'Karol', text: ' Perfectly fine.' },
  {
    startTime: 4389.64,
    person: 'Karol',
    text: " If you want to improve your speed of delivery as a Java developer, you're going to library all the repeatable stuff, right?"
  },
  { startTime: 4399.64, person: 'Karol', text: " You're going to put that in libraries." },
  {
    startTime: 4400.92,
    person: 'Karol',
    text: ' If you can repeat that, if it is feasible to make it reusable, we make it reusable.'
  },
  { startTime: 4409.44, person: 'Karol', text: " And in essence, that's what MuleSoft did." },
  {
    startTime: 4412.52,
    person: 'Karol',
    text: " So if we're looking at a scenario where we're having a client that has MuleSoft, and okay, MuleSoft licencing costs, let's not get into that."
  },
  { startTime: 4422.48, person: 'Karol', text: " That's a very problematic thing." },
  {
    startTime: 4426.7,
    person: 'Karol',
    text: ' They give you that abstraction layer out of the box, that abstraction from fourth generation of a language to fifth generation of a language.'
  },
  {
    startTime: 4438.58,
    person: 'Karol',
    text: " So we're already working on the abstraction of configuration that we just feed into predefined libraries that some Java developer wrote and we're good."
  },
  { startTime: 4447.66, person: 'Karol', text: " Of course, it's a limiting factor." },
  {
    startTime: 4450.12,
    person: 'Karol',
    text: ' If you want to have a lot of flexibility in how you do it, or you have a requirement over very nitpicking of performance and catering to threads and you go in into nanoseconds, for example, in stock trading, right?'
  },
  {
    startTime: 4465.52,
    person: 'Karol',
    text: ' Stock trading, they look at nanoseconds instead of milliseconds.'
  },
  {
    startTime: 4468.9,
    person: 'Karol',
    text: ' In regular business, we look at milliseconds in terms of hundreds of milliseconds to seconds in terms of latency on the transfer.'
  },
  {
    startTime: 4480.88,
    person: 'Karol',
    text: " Again, we're coming back to the universal answer saying it depends."
  },
  { startTime: 4485.44, person: 'Karol', text: ' It depends on the context.' },
  {
    startTime: 4487.6,
    person: 'Karol',
    text: ' Now, if I would jump back to draw.io this time around and we look at the other costs of ownership.'
  },
  {
    startTime: 4498.52,
    person: 'Karol',
    text: " So if we're looking at total costs of ownership, what else is there in terms of those costs of ownership?"
  },
  {
    startTime: 4504.04,
    person: 'Karol',
    text: " And I'm going to just roll up my notes and these costs will be then most likely specific to the scenario that you said, migrating from an iPaaS towards Java."
  },
  { startTime: 4523.82, person: 'Karol', text: ' So, okay.' },
  {
    startTime: 4524.78,
    person: 'Karol',
    text: " Starting with, let's assume we have a MuleSoft platform, right?"
  },
  { startTime: 4532.35, person: 'Karol', text: ' Okay.' },
  { startTime: 4532.85, person: 'Karol', text: ' Perfect.' },
  { startTime: 4533.83, person: 'Karol', text: ' Now, how are we going to approach a problem?' },
  {
    startTime: 4536.83,
    person: 'Karol',
    text: " Because as an architect, you're not looking only at the system."
  },
  {
    startTime: 4540.21,
    person: 'Karol',
    text: " You're looking at the organisation as a whole, especially if you're an enterprise architect."
  },
  {
    startTime: 4544.07,
    person: 'Karol',
    text: " So you're not looking only on changing a piece of software."
  },
  {
    startTime: 4547.91,
    person: 'Karol',
    text: " You're looking also at organisational changes that are required with adoption of architecture, which is usually the omitted problem, usually the problem at scale of many companies."
  },
  { startTime: 4561.43, person: 'Karol', text: ' So we have Mule.' },
  { startTime: 4563.07, person: 'Karol', text: " We're trying to move to Java." },
  { startTime: 4566.73, person: 'Karol', text: ' Okay.' },
  {
    startTime: 4567.69,
    person: 'Karol',
    text: " So we're going to have that, let's say that, oh, no, that's not going to work like that."
  },
  {
    startTime: 4576.35,
    person: 'Karol',
    text: " I got used to Mural and now I'm trying to pull out of the boxes where Mural just gives you that."
  },
  {
    startTime: 4581.93,
    person: 'Karol',
    text: " And I'm like, oh, this doesn't work in draw.io. Okay."
  },
  { startTime: 4585.13, person: 'Karol', text: " We're moving to Java." },
  { startTime: 4587.61, person: 'Karol', text: ' Okay.' },
  { startTime: 4588.15, person: 'Karol', text: ' First thing out of the box is, okay.' },
  { startTime: 4594.35, person: 'Karol', text: ' So we have the migration cost.' },
  {
    startTime: 4598.87,
    person: 'Karol',
    text: ' So this would be in the migration cost, we have redevelopment.'
  },
  { startTime: 4606.75, person: 'Karol', text: " That's one, right?" },
  {
    startTime: 4612.55,
    person: 'Karol',
    text: ' The second cost would be obviously before redevelopment.'
  },
  { startTime: 4616.73, person: 'Karol', text: ' So as is state analysis.' },
  {
    startTime: 4622.53,
    person: 'Karol',
    text: " And this one is, I think, a very crucial one because I don't know what your experience is with clients."
  },
  {
    startTime: 4630.83,
    person: 'Karol',
    text: " My experience is that most clients don't have proper documentation."
  },
  { startTime: 4635.19, person: 'Karol', text: ' Would you agree to that?' },
  { startTime: 4637.69, person: 'Karol', text: ' Right.' },
  {
    startTime: 4638.15,
    person: 'Karol',
    text: ' So if we look at this state analysis, that means that we either need docs, right?'
  },
  { startTime: 4648.94, person: 'Karol', text: ' Again, not going to work that way.' },
  { startTime: 4652.78, person: 'Karol', text: ' Or we need another lovely thing called people.' },
  {
    startTime: 4661.66,
    person: 'Karol',
    text: " So if we have people and those people that have the knowledge about what's going on in the ecosystem in terms of interoperability, these would be our Mule developers, right?"
  },
  { startTime: 4673.6, person: 'Karol', text: ' Okay.' },
  { startTime: 4674.56, person: 'Karol', text: ' So we have our Muleys.' },
  {
    startTime: 4678.58,
    person: 'Karol',
    text: " Now, if we consider our Muleys, what's going to happen if you tell a team of MuleSoft developers or teams of MuleSoft developers, depending on the scale of the integration platform?"
  },
  {
    startTime: 4692.72,
    person: 'Karol',
    text: " Because just one of the clients I've working with recently, that's 190 MuleSoft applications."
  },
  {
    startTime: 4700.76,
    person: 'Karol',
    text: ' They have 14 concurrent teams working on that platform.'
  },
  { startTime: 4705.34, person: 'Karol', text: ' Each team has at least two MuleSoft developers.' },
  {
    startTime: 4708.56,
    person: 'Karol',
    text: ' So that gives you a team, a group of at least, well, around 30 developers, maybe a little bit more, right?'
  },
  { startTime: 4716.82, person: 'Karol', text: ' So we have 30 Muleys.' },
  {
    startTime: 4719.54,
    person: 'Karol',
    text: " If you tell Muleys that you're going to be migrating to pure Java, what's going to happen, psychologically speaking?"
  },
  {
    startTime: 4727.16,
    person: 'Karol',
    text: ' Most likely they will start searching for a job, right?'
  },
  { startTime: 4732.2, person: 'Karol', text: ' So those people will be a huge, huge risk.' },
  { startTime: 4739.72, person: 'Karol', text: " So what's going to happen next?" },
  { startTime: 4743.2, person: 'Karol', text: " You're going to have to hire Java devs." },
  { startTime: 4750.92, person: 'Karol', text: ' Okay.' },
  {
    startTime: 4751.68,
    person: 'Karol',
    text: ' So between these two boxes, you already see a problem.'
  },
  { startTime: 4758.1, person: 'Karol', text: " You don't have knowledge retention." },
  {
    startTime: 4761.12,
    person: 'Karol',
    text: " So we have a large MuleSoft environment, let's say 100 MuleSoft applications of various purposes."
  },
  {
    startTime: 4767.8,
    person: 'Karol',
    text: ' So we have a channel layer, well, in MuleSoft terms, the experience layer, process layer, and system layer that composes 100 apps.'
  },
  {
    startTime: 4776.92,
    person: 'Karol',
    text: ' We lose our development team because we told them we were going to migrate to Java.'
  },
  { startTime: 4780.94, person: 'Karol', text: ' They went like, what?' },
  {
    startTime: 4783.18,
    person: 'Karol',
    text: " I'm not going to start learning Java all of a sudden, how to code in Apache Camel or whatever other framework, because that's not what I trained over my life."
  },
  {
    startTime: 4791.32,
    person: 'Karol',
    text: " And I've been devoting three, four years of my life just to learn Mule in the way to make myself efficient in it."
  },
  { startTime: 4798.94, person: 'Karol', text: ' And like doing things like this, right?' },
  {
    startTime: 4801.46,
    person: 'Karol',
    text: " So we're losing all of those people, which means if we don't have proper documentation, we're losing all the knowledge about the integration platform."
  },
  { startTime: 4811.32, person: 'Karol', text: ' Now, okay.' },
  {
    startTime: 4812.98,
    person: 'Karol',
    text: ' You might come in here and say, okay, we have a solution for that.'
  },
  {
    startTime: 4816.44,
    person: 'Karol',
    text: " We're going to use automation to read the code of your MuleSoft applications and translate that to Java, right?"
  },
  {
    startTime: 4826.26,
    person: 'Karol',
    text: ' Because this is part of your offering as a consultant, as a company.'
  },
  { startTime: 4833.85, person: 'Karol', text: ' What happens then?' },
  { startTime: 4836.43, person: 'Karol', text: ' Because you still need people to run it.' },
  {
    startTime: 4839.93,
    person: 'Karol',
    text: " You still need people who understand what's going on."
  },
  {
    startTime: 4842.69,
    person: 'Karol',
    text: " And you'd still need people who will fix it according to how it was running in the AS-IS state."
  },
  {
    startTime: 4850.79,
    person: 'Karol',
    text: " You're still not covering the problem of knowing the AS-IS state and knowing the business processes because MuleSoft as a product is just a platform."
  },
  { startTime: 4863.29, person: 'Karol', text: ' The knowledge is not about the platform.' },
  { startTime: 4865.29, person: 'Karol', text: " It's about what's running on that platform." },
  {
    startTime: 4867.37,
    person: 'Karol',
    text: ' So all the integration flows built with Mule applications and this low code solution.'
  },
  {
    startTime: 4874.57,
    person: 'Karol',
    text: ' So even if you hire those Java developers, they will not have sufficient knowledge about the assist state.'
  },
  { startTime: 4883.51, person: 'Brian', text: ' Yes.' },
  { startTime: 4884.03, person: 'Brian', text: ' Yeah.' },
  {
    startTime: 4884.67,
    person: 'Brian',
    text: " Let me tell you how, and that's, you're talking about 40 Muleys, like 500 APIs."
  },
  { startTime: 4893.63, person: 'Brian', text: " So that's a big, that's a big shop." },
  { startTime: 4897.47, person: 'Brian', text: ' I mean, we can do a smaller one.' },
  {
    startTime: 4899.09,
    person: 'Brian',
    text: " It might be easier to calculate, but let me just go with the 40 because that's, but yeah."
  },
  {
    startTime: 4905.35,
    person: 'Brian',
    text: ' So on the project, on these teams, you have, you have the, the business analysts, you have the architect, you have, you know, you have all the, all the surrounding people and, and they can take, they have a lot of the business knowledge to be honest.'
  },
  {
    startTime: 4923.91,
    person: 'Brian',
    text: ' The business knowledge is also technically it should be in the RAML.'
  },
  { startTime: 4928.05, person: 'Brian', text: ' It should be in the OAS.' },
  { startTime: 4929.29, person: 'Brian', text: ' That is the logic.' },
  { startTime: 4931.41, person: 'Brian', text: ' And you have the business requirements person.' },
  {
    startTime: 4933.79,
    person: 'Brian',
    text: " It's been implemented in MuleSoft now, and those are Muleys and they know how that technology works."
  },
  {
    startTime: 4941.41,
    person: 'Brian',
    text: " Now that knowledge that they have in MuleSoft, well, it's true that we don't really need, like if they are just straight developers."
  },
  {
    startTime: 4950.07,
    person: 'Brian',
    text: " Now, if there are architect or like there's opportunities, like, or they know the business more, I could see them wanting to stay, but there's a few things we can do with those 40 people."
  },
  {
    startTime: 4962.03,
    person: 'Brian',
    text: " And that is, yeah, they could, I'm assuming their, their computer, they went to school and have a computer degree."
  },
  {
    startTime: 4969.35,
    person: 'Brian',
    text: ' They would know some Java, but you could send them to retrain them.'
  },
  { startTime: 4974.61, person: 'Brian', text: " And that's are they interested?" },
  { startTime: 4976.79, person: 'Brian', text: ' Do they want to do that?' },
  { startTime: 4978.41, person: 'Brian', text: ' Maybe.' },
  {
    startTime: 4979.59,
    person: 'Brian',
    text: " And then that's up to them, but you will, there will be definitely people will leave."
  },
  { startTime: 4984.79, person: 'Brian', text: " And I'm sorry about that." },
  {
    startTime: 4986.65,
    person: 'Brian',
    text: " But then, like I said, I've been in this business for 40 years."
  },
  {
    startTime: 4991.63,
    person: 'Brian',
    text: ' If that technology changes, they will leave at some point in time, technology will change.'
  },
  {
    startTime: 4996.93,
    person: 'Brian',
    text: ' You need to update, but they have integration knowledge skills.'
  },
  {
    startTime: 5001.23,
    person: 'Brian',
    text: " There's, there's stuff that is transferable and it's worth having them."
  },
  { startTime: 5005.97, person: 'Brian', text: " So some of them will leave and that'll cost." },
  {
    startTime: 5008.65,
    person: 'Brian',
    text: ' And then, so then you might have to hire some, you may have Java developers already, you know, so that, that depends, or you have to hire Java developers.'
  },
  {
    startTime: 5017.41,
    person: 'Brian',
    text: " That's the, so there, there is the cost of that."
  },
  {
    startTime: 5020.27,
    person: 'Brian',
    text: " But, but let's say if you had, if you have like, you know, 500 APIs or something, that's like, that's a lot of money."
  },
  {
    startTime: 5030.07,
    person: 'Brian',
    text: " Like I, and I, you know, and I'll leave it for people to figure that number out."
  },
  {
    startTime: 5035.53,
    person: 'Brian',
    text: " But to me, that might be, that's many millions of dollars."
  },
  {
    startTime: 5040.09,
    person: 'Brian',
    text: " That's like, maybe I'll just say $5 million a year in licencing costs."
  },
  { startTime: 5044.65, person: 'Brian', text: ' Right.' },
  {
    startTime: 5045.15,
    person: 'Brian',
    text: " So that's just about, you know, that might be more."
  },
  {
    startTime: 5047.81,
    person: 'Brian',
    text: " So to me, in my mind, what I'm seeing is that let's say it costs $5 million in licencing costs."
  },
  {
    startTime: 5054.33,
    person: 'Brian',
    text: " Now you're still going to have to pay a million, right?"
  },
  { startTime: 5057.13, person: 'Brian', text: " Cause I still think it's 20, 20% less for Java." },
  {
    startTime: 5060.25,
    person: 'Brian',
    text: " You're still going to have to pay a million dollars and work to AWS, Azure, whatever your cloud is."
  },
  { startTime: 5065.85, person: 'Brian', text: ' You still have to pay a million.' },
  {
    startTime: 5067.15,
    person: 'Brian',
    text: ' So, but you also, you do save like $4 million, but I find, and I find that the, the migration costs might be $4 million.'
  },
  {
    startTime: 5077.67,
    person: 'Brian',
    text: " So it's going to take you maybe one, one year to two years to, to do, to, to recover your costs."
  },
  {
    startTime: 5085.79,
    person: 'Brian',
    text: " But then in the future, of course, like that's a great investment because obviously now you're saving $4 million a year."
  },
  {
    startTime: 5093.13,
    person: 'Brian',
    text: " You can maybe hire more people, but, but the other thing is that these are the built, but then yeah, of course it's, it's an organisation and continue to grow, continuing to build APIs."
  },
  {
    startTime: 5104.83,
    person: 'Brian',
    text: " You can build your APIs and whatever you're going to need a few people to support these existing APIs."
  },
  { startTime: 5111.65, person: 'Brian', text: " So that's how it kind of works." },
  { startTime: 5113.25, person: 'Brian', text: " I mean, it's not, it's not free." },
  { startTime: 5115.43, person: 'Brian', text: " It's not, it's not nothing." },
  {
    startTime: 5117.17,
    person: 'Brian',
    text: " And I do feel bad, but I feel bad, but then it's, it's just kind of just capitalism, unfortunately."
  },
  { startTime: 5124.83, person: 'Brian', text: ' It sucks.' },
  {
    startTime: 5126.15,
    person: 'Brian',
    text: " And I feel bad and I've, I've, you know, for 40 years, I think I've, I've, you know, kind of led to a lot of people losing their jobs and that, you know, that's the end point."
  },
  { startTime: 5137.87, person: 'Karol', text: ' Okay.' },
  { startTime: 5138.63, person: 'Karol', text: " Let's dig into the TCO again, right?" },
  { startTime: 5142.87, person: 'Karol', text: ' So, okay.' },
  {
    startTime: 5143.49,
    person: 'Karol',
    text: ' We have Java developers, but those Java developers most likely are doing backend, right?'
  },
  { startTime: 5150.37, person: 'Karol', text: ' So in that sense, we need to retrain them.' },
  { startTime: 5155.71, person: 'Brian', text: ' Yeah.' },
  { startTime: 5156.29, person: 'Karol', text: ' Yes.' },
  { startTime: 5156.93, person: 'Brian', text: ' People will be trained.' },
  {
    startTime: 5157.81,
    person: 'Brian',
    text: ' People will be trained and they need to learn this.'
  },
  { startTime: 5161.23, person: 'Brian', text: ' Yeah.' },
  { startTime: 5162.19, person: 'Karol', text: ' Okay.' },
  { startTime: 5162.87, person: 'Karol', text: ' Yes.' },
  { startTime: 5163.29, person: 'Karol', text: " So we'll, we'll need to do that." },
  {
    startTime: 5165.89,
    person: 'Karol',
    text: " If we hire from the market, we'll still need to retrain those people because they're probably unless you get like a specialist that are actually Java developers specialising in application integration, which is again, we'd be looking at let's say these Apache Camel, or some other framework."
  },
  { startTime: 5189.75, person: 'Karol', text: ' Perfect.' },
  { startTime: 5190.33, person: 'Brian', text: ' Yeah.' },
  {
    startTime: 5190.71,
    person: 'Brian',
    text: ' And actually, you know, once I was, once I had that situation, I was like, hire, I was asked to work as a team lead and learn Java Camel to write APIs.'
  },
  { startTime: 5202.81, person: 'Brian', text: ' And of course I would add to that sometimes.' },
  {
    startTime: 5206.47,
    person: 'Brian',
    text: " I don't think it's, it's such a, you know, whenever you're going somewhere, whenever you're moving somewhere, you're learning new stuff."
  },
  {
    startTime: 5214.35,
    person: 'Brian',
    text: " You're, you know, it's, it's, it's not the, there's a cost, but it's the cost you're going to learn."
  },
  {
    startTime: 5224.21,
    person: 'Brian',
    text: ' You need to learn the business you lean to learn.'
  },
  {
    startTime: 5229.39,
    person: 'Karol',
    text: " That's, that's always going to be the cost, right?"
  },
  { startTime: 5231.65, person: 'Karol', text: ' So this is, this is the, this aspect.' },
  {
    startTime: 5233.97,
    person: 'Karol',
    text: " Now, if we look at the availability of application integration specialists within the Java community, that's probably going to be a lot lower availability than Java developers in general."
  },
  { startTime: 5244.13, person: 'Karol', text: ' Would you concur to that?' },
  { startTime: 5245.57, person: 'Karol', text: ' Agree.' },
  {
    startTime: 5246.15,
    person: 'Brian',
    text: ' Well, I think you can hire a Java developer and I feel like knowing Java development and knowing, you know, integration stuff like, and knowing Camel.'
  },
  {
    startTime: 5257.49,
    person: 'Brian',
    text: " I don't think there's a, there's a big jump there and maybe I'll take a course."
  },
  { startTime: 5262.39, person: 'Brian', text: " I'll grab the book." },
  { startTime: 5264.53, person: 'Karol', text: ' Okay.' },
  { startTime: 5265.95, person: 'Karol', text: " But, but if we're looking at retraining, right?" },
  {
    startTime: 5271.27,
    person: 'Karol',
    text: " You're going to be looking at organised, organised training, right?"
  },
  {
    startTime: 5278.25,
    person: 'Karol',
    text: ' Now, if we compare organised training as an actual availability of materials from iPaaS vendors versus pure Java.'
  },
  {
    startTime: 5295.73,
    person: 'Karol',
    text: ' So all the vendors have actually a lot better training materials.'
  },
  { startTime: 5302.23, person: 'Karol', text: ' They have courses.' },
  { startTime: 5303.19, person: 'Karol', text: ' They, some of them are even for free.' },
  {
    startTime: 5304.63,
    person: 'Karol',
    text: ' You can just learn and get certified without any cost for that, right?'
  },
  {
    startTime: 5311.83,
    person: 'Karol',
    text: " While if you're looking at the open source communities or Java community, it's scattered."
  },
  { startTime: 5318.99, person: 'Karol', text: " It's not centralised." },
  { startTime: 5320.89, person: 'Karol', text: " It's not organised." },
  {
    startTime: 5322.19,
    person: 'Karol',
    text: " From my perspective, whenever I tried to learn anything from pure Java, it's always a nightmare to find answers, to find a proper course that covers everything sufficiently and not assumes that people would know."
  },
  {
    startTime: 5338.73,
    person: 'Karol',
    text: " So even if you're making people from whatever background, right?"
  },
  {
    startTime: 5344.17,
    person: 'Karol',
    text: " And you assume they know Java and you try to teach them, if you don't know yourself and you try to make them learn Apache Camel and okay, you know Apache Camel, they don't."
  },
  { startTime: 5355.51, person: 'Karol', text: ' Perfect.' },
  { startTime: 5355.87, person: 'Karol', text: ' You can teach them.' },
  {
    startTime: 5357.15,
    person: 'Karol',
    text: " If you don't know Apache Camel well enough and you are put as an architect or as a team leader in a position where, okay, there was a decision made by the architecture team."
  },
  {
    startTime: 5368.71,
    person: 'Karol',
    text: " We're downgrading from MuleSoft and going into Apache Camel."
  },
  { startTime: 5374.57, person: 'Karol', text: " That's a problem, right?" },
  { startTime: 5378.03, person: 'Karol', text: " Because you're not able to teach them." },
  { startTime: 5379.67, person: 'Karol', text: ' You have to learn yourself.' },
  {
    startTime: 5381.49,
    person: 'Karol',
    text: ' There is not a sufficient availability of good materials to train yourself from the web.'
  },
  { startTime: 5387.87, person: 'Karol', text: ' What then?' },
  { startTime: 5390.61, person: 'Karol', text: ' And this is...' },
  {
    startTime: 5391.65,
    person: 'Brian',
    text: " I think, and we can agree to disagree, but I feel like in this global economy, you're going to find a trainer that has Apache Camel and also the streaming functional programming, threading, various things like that."
  },
  {
    startTime: 5414.63,
    person: 'Brian',
    text: " I think if you don't have those skills, you need the team lead that has the skills at least, in the least, you know?"
  },
  {
    startTime: 5423.17,
    person: 'Brian',
    text: " But yeah, I think that can be learned, but once again, maybe it's harder than I think, but then also I know with the MuleSoft, it's true that MuleSoft will give you some free training."
  },
  {
    startTime: 5434.25,
    person: 'Brian',
    text: " They'll send people over that they want you to learn."
  },
  { startTime: 5437.01, person: 'Brian', text: ' But you have to pay for that too.' },
  { startTime: 5439.63, person: 'Brian', text: ' Yeah.' },
  {
    startTime: 5439.75,
    person: 'Karol',
    text: " That's part of their business model that they will give you some things for free and then you pay for the trainings within or outside of the licence."
  },
  { startTime: 5449.19, person: 'Karol', text: ' Yeah.' },
  { startTime: 5449.43, person: 'Karol', text: " And that's perfectly fine." },
  {
    startTime: 5450.79,
    person: 'Karol',
    text: ' But then if you look at the feasibility of things, of course, if we look at this exercise from the perspective of pure on paper exercise, yeah, you can do all of those things.'
  },
  {
    startTime: 5464.87,
    person: 'Karol',
    text: " But going back to the core business, we're not in a context of doing IT for the art of doing IT."
  },
  {
    startTime: 5473.05,
    person: 'Karol',
    text: " We're in a context of helping a specific business run their business."
  },
  {
    startTime: 5478.05,
    person: 'Karol',
    text: ' So business is not waiting because the business is constantly changing and moving on.'
  },
  {
    startTime: 5483.15,
    person: 'Karol',
    text: ' So they require the integration platform to be operational.'
  },
  {
    startTime: 5487.57,
    person: 'Karol',
    text: ' Any technical migration is, from the business perspective, is a cost and an unwanted delay, right?'
  },
  {
    startTime: 5495.61,
    person: 'Karol',
    text: " So if we're moving from an iPaaS, which is well established and has proper training materials and has a certification path and has trainers, all of that packaged, composed, let's not delve into the quality of materials from different vendors because that differs, of course."
  },
  {
    startTime: 5516.15,
    person: 'Karol',
    text: " But it's somewhat established and they actually cater to that."
  },
  {
    startTime: 5519.85,
    person: 'Karol',
    text: ' And you compare that to just the randomness of training materials available on the web.'
  },
  {
    startTime: 5524.73,
    person: 'Karol',
    text: ' And you rely on having the right people to ask the right questions.'
  },
  {
    startTime: 5528.79,
    person: 'Karol',
    text: ' And okay, you as a consultant would go there and tell them, you need this, this, and this, right?'
  },
  { startTime: 5536.31, person: 'Karol', text: ' Fair.' },
  { startTime: 5536.97, person: 'Karol', text: ' You know your stuff.' },
  {
    startTime: 5538.15,
    person: 'Karol',
    text: " You'll tell them what skills they need to look for, what people they need to bring in."
  },
  { startTime: 5543.29, person: 'Karol', text: " You'll help them interview, for example." },
  {
    startTime: 5547.31,
    person: 'Karol',
    text: " If a company goes, okay, we're going to drop Mule software or drop Boomi and go into building this in pure Java, how much of a chance you would say that the hiring process will work correctly and they will know who to hire if they don't know exactly what they're doing in terms of a framework and just a team leader was pushed into the position, you've got to learn Apache Camo now."
  },
  {
    startTime: 5575.97,
    person: 'Karol',
    text: ' They will know, okay, we need to hire somebody for Apache Camel.'
  },
  { startTime: 5580.35, person: 'Karol', text: ' All right.' },
  { startTime: 5582.91, person: 'Karol', text: " That's our criteria." },
  {
    startTime: 5584.17,
    person: 'Karol',
    text: ' How many people have Apache Camel written in their LinkedIn profile?'
  },
  { startTime: 5588.57, person: 'Karol', text: " That's a very small subset." },
  {
    startTime: 5592.25,
    person: 'Brian',
    text: " As a team lead, let's say if I was a team lead and I'm hiring people, yeah, I wouldn't necessarily need to look for that."
  },
  {
    startTime: 5600.85,
    person: 'Brian',
    text: ' I want them to be able to thread, maybe be familiar with functional programming, and then the Apache Camel is a library.'
  },
  { startTime: 5610.83, person: 'Brian', text: " I don't think that that's a huge jump." },
  { startTime: 5613.73, person: 'Brian', text: " It's pretty straightforward in my opinion." },
  { startTime: 5618.51, person: 'Brian', text: " I wouldn't be worried about it." },
  { startTime: 5620.13, person: 'Brian', text: " I don't think it sounds..." },
  {
    startTime: 5623.83,
    person: 'Brian',
    text: " I don't need to have, you know, like I said, I'm sure you can get any good Java developer."
  },
  {
    startTime: 5630.81,
    person: 'Brian',
    text: " It's all a matter of getting good Java developers."
  },
  { startTime: 5634.13, person: 'Karol', text: ' Right.' },
  {
    startTime: 5634.71,
    person: 'Karol',
    text: " But you see, you're still looking at it from a perspective of your own expertise."
  },
  {
    startTime: 5639.77,
    person: 'Karol',
    text: " So you're still looking at it from a perspective of your own cognitive bias that you know this stuff and you will be able to teach them this stuff."
  },
  {
    startTime: 5646.81,
    person: 'Karol',
    text: " So you'll be looking for people who have a specific skill set because the rest, you'll teach them on the job."
  },
  {
    startTime: 5653.79,
    person: 'Karol',
    text: " But there's only one of you and so many businesses."
  },
  {
    startTime: 5658.49,
    person: 'Brian',
    text: " Well, there's 7 million Java developers, but there's good Java developers I would expect."
  },
  { startTime: 5663.81, person: 'Brian', text: " I'm not going to be, I'm not doing it." },
  {
    startTime: 5665.49,
    person: 'Brian',
    text: " I'm going to certainly delegate that to a Java developer, but I would be confident that I can find people like that just as much as, like, let's say, like I said, I've been in both positions as a team lead of Java developers, as a team lead of MuleSoft developers."
  },
  { startTime: 5682.07, person: 'Brian', text: " To me, they're both the same." },
  {
    startTime: 5683.55,
    person: 'Brian',
    text: " I might yeah, have like a more for the Java developer might be better, but still it's like, I'll put it as equal."
  },
  {
    startTime: 5692.99,
    person: 'Brian',
    text: " I mean, you're still like, as you're growing, you're hiring Muleys, you have to train them, you know, they have to, it's, it's, but then the other thing is that now we're saving $4 million a year, like just money."
  },
  { startTime: 5707.13, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 5708.65,
    person: 'Karol',
    text: ' But then if you look at it from perspective of other costs, how much will it cost you to retrain?'
  },
  { startTime: 5716.11, person: 'Karol', text: ' How much will it cost you to hire,' },
  {
    startTime: 5718.71,
    person: 'Karol',
    text: ' run those hiring processes with the assumption that for most cases, if I look at the hiring'
  },
  {
    startTime: 5727.35,
    person: 'Karol',
    text: ' processes and job postings, and I do look at job postings quite a bit, just even for the'
  },
  {
    startTime: 5733.13,
    person: 'Karol',
    text: ' fun of it, or just get pulled into those discussions by various recruiters approaching'
  },
  {
    startTime: 5739.23,
    person: 'Karol',
    text: " me on LinkedIn, those job postings for most of the times, they're absolutely ridiculously badly"
  },
  { startTime: 5745.23, person: 'Karol', text: ' written.' },
  {
    startTime: 5746.61,
    person: 'Karol',
    text: " So the chances of getting the right talent for the right job, when you're writing a job posting that actually describes half of your IT department, right?"
  },
  { startTime: 5757.23, person: 'Karol', text: " It's, it's, it's a lottery." },
  { startTime: 5758.71, person: 'Karol', text: ' There are so many factors into it.' },
  {
    startTime: 5761.63,
    person: 'Karol',
    text: ' And it all kind of dumps down to what is your IT maturity?'
  },
  {
    startTime: 5766.71,
    person: 'Karol',
    text: ' So if your IT maturity is high, you could probably pull it off.'
  },
  {
    startTime: 5771.33,
    person: 'Karol',
    text: " If your IT maturity is low, I would argue it's not feasible."
  },
  { startTime: 5777.17, person: 'Brian', text: " I wouldn't say it's not feasible." },
  {
    startTime: 5779.07,
    person: 'Brian',
    text: ' But I, yeah, I was, actually, I spent a year, I did 50 interviews of MuleSoft developers, or MuleSoft developer or MuleSoft architects.'
  },
  {
    startTime: 5791.05,
    person: 'Brian',
    text: " I've done a lot of interviews, and there are people out there, it's a process, it's, you can, like I said, you delegate that to, or, you know, people do it, they'll hire the people, and then they're gonna, and then there's going to be some training involved."
  },
  {
    startTime: 5805.57,
    person: 'Brian',
    text: " But that to me is, there's a cost to that, of course, but I don't think it's, it's not a, an impossible thing."
  },
  {
    startTime: 5814.05,
    person: 'Brian',
    text: ' Like, and ultimately, like, when you did this MuleSoft project, you had to hire people, like, and you had to train people.'
  },
  {
    startTime: 5823.61,
    person: 'Brian',
    text: " And, and, you know, in any project, like, let's say, I'm often, I also come in as a solution architect, sometimes, oh, you got this project, and you're gonna have to hire these people, or we can get them, you can get them from consulting companies."
  },
  {
    startTime: 5836.25,
    person: 'Brian',
    text: " And then, and then let's go, this is going to cost you this much."
  },
  {
    startTime: 5840.27,
    person: 'Brian',
    text: " But we don't go too much to, okay, we're gonna hire, will we be able to hire people to do this job?"
  },
  {
    startTime: 5846.67,
    person: 'Brian',
    text: " It's, it's almost a given that it's part of the cost of doing a project, that you're hiring people, and they're gonna do it, you know, you're gonna get."
  },
  {
    startTime: 5855.99,
    person: 'Karol',
    text: ' Yeah, but, but then you have the additional cost, which is the cost of getting those people through consulting companies, or through body leasing companies, whatever that may be, right?'
  },
  {
    startTime: 5867.79,
    person: 'Karol',
    text: ' So this is, these are proxy companies, so they profit from giving you those specialists.'
  },
  {
    startTime: 5872.93,
    person: 'Karol',
    text: ' So the margin on a specialist at times can be even 50-60% for those companies.'
  },
  { startTime: 5881.07, person: 'Karol', text: " I've seen that happen so many times." },
  {
    startTime: 5883.97,
    person: 'Karol',
    text: " So it's, you know, it's saving maybe those $4 million in the short term, but how does that later go on into the costs occur over the transition, because you have to replace people, you have to get those people from somewhere, the fastest way will be, yes, consulting company, body leasing company, hello, cha-ching, different cost."
  },
  {
    startTime: 5907.37,
    person: 'Karol',
    text: " Now, if you look further, okay, we're migrating to Java functionally, okay, we run all the applications in Spring boot."
  },
  { startTime: 5915.41, person: 'Karol', text: ' Perfect.' },
  { startTime: 5916.25, person: 'Karol', text: ' We have the functional coverage.' },
  { startTime: 5918.45, person: 'Karol', text: ' What about the non-functional coverage?' },
  {
    startTime: 5920.33,
    person: 'Karol',
    text: ' So by non-functional coverage, we have the security of API gateway.'
  },
  {
    startTime: 5926.37,
    person: 'Karol',
    text: ' The decision is, are you going to re-implement an API gateway from scratch or not, right?'
  },
  {
    startTime: 5931.85,
    person: 'Karol',
    text: " Time to market is a matter, because if you're going to re-implement that from scratch, that means that, okay, you're going to be in either a configuration nightmare where you'll have to maintain and configure all those proxies that provide you that security, or you're just going to take a lot of time, which is again, impacting time to market and the feasibility from a business perspective."
  },
  {
    startTime: 5957.17,
    person: 'Karol',
    text: ' So API gateway, you will probably get an API gateway from Azure, AWS, Google Cloud, or get one from any other vendor, whereas in your iPaaS, you already have that API gateway.'
  },
  {
    startTime: 5971.69,
    person: 'Brian',
    text: " Yeah, yeah, you totally, you will get one and it will, one, it's nice that because we have all these security requirements, so you know exactly what you need, do you need, you know, what level of security you need for each API."
  },
  {
    startTime: 5986.31,
    person: 'Brian',
    text: " And the nice thing is that you can, you already have the API, it's nice to transfer over because you can just, you build that API and then you can test it and you can have both of them running in parallel."
  },
  { startTime: 5998.81, person: 'Brian', text: ' One of them works, boom, you put it in.' },
  {
    startTime: 6000.75,
    person: 'Brian',
    text: ' You can do one by one, which was the most expensive or which one is the easiest.'
  },
  {
    startTime: 6006.01,
    person: 'Brian',
    text: " So it's a very easy migration and you can just do as many as much as you need to do as time goes on until you're finally done with them."
  },
  {
    startTime: 6013.97,
    person: 'Brian',
    text: ' But like I said, it might cost you, yeah, it might cost you a million dollars to do something like this.'
  },
  {
    startTime: 6020.71,
    person: 'Brian',
    text: " And, or I mean, or four million, I guess, depending on the size of the project, it'll cost you money."
  },
  {
    startTime: 6028.25,
    person: 'Brian',
    text: " And, and then, but ultimately you'll be saying, like I said, I think you can recover the money in almost a year, a year and a half, you know, so, but there is cost, there's work involved."
  },
  {
    startTime: 6037.27,
    person: 'Brian',
    text: " It's not, it's not free, but all these things need to be done."
  },
  {
    startTime: 6041.45,
    person: 'Brian',
    text: " All of them can be done and all of them will be less expensive than what you're currently paying because you're paying an overhead for it, given to you, repackaged to you in their own, but the functionality is basically the same."
  },
  { startTime: 6058.37, person: 'Brian', text: ' You may have not more, more ability.' },
  { startTime: 6061.87, person: 'Brian', text: ' Okay.' },
  { startTime: 6063.17, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 6063.77,
    person: 'Karol',
    text: " I would only argue that there's one very key difference in doing this by yourself."
  },
  { startTime: 6071.29, person: 'Karol', text: ' Now you need to tend to all of these.' },
  {
    startTime: 6074.85,
    person: 'Karol',
    text: ' Now you need to offer this also operationally, where if you have this as a SaaS solution, half of the operations is outsourced within the licence fee, right?'
  },
  {
    startTime: 6087.71,
    person: 'Karol',
    text: " So now you're also incurring operational costs, right?"
  },
  {
    startTime: 6092.77,
    person: 'Karol',
    text: ' So this is all going into OPEX basically, right?'
  },
  {
    startTime: 6100.98,
    person: 'Karol',
    text: ' Now, all of these are OPEX costs that you will have to cover with, with your Java solution.'
  },
  { startTime: 6111.86, person: 'Brian', text: ' Mm-hmm.' },
  { startTime: 6113.16, person: 'Brian', text: ' Yeah.' },
  {
    startTime: 6113.68,
    person: 'Brian',
    text: " This is where I say, this is where I say it's like, so you were paying 5 million, but now you're paying a million."
  },
  { startTime: 6119.8, person: 'Brian', text: " So it's the million dollars." },
  { startTime: 6121.48, person: 'Brian', text: ' Yeah.' },
  {
    startTime: 6121.7,
    person: 'Brian',
    text: " That's the cost that it's not free, but you still have to, you know, you'll be paying a million, but now you're paying it and you're, you're having some economies of scale, you're having control."
  },
  {
    startTime: 6132.72,
    person: 'Brian',
    text: ' All of your Java stuff is being done together now.'
  },
  {
    startTime: 6136.18,
    person: 'Brian',
    text: " So, so I think there's a scale, scalability that you're doing it all together with your own, your own team."
  },
  {
    startTime: 6143.36,
    person: 'Brian',
    text: " And also there's kind of a security to it because now you, you know, what's going on, what you're doing and where, you know, I think you were talking earlier about EU concerns about, about things running in the US and, and now you have, now you can run it yourself in your own and have your own security."
  },
  {
    startTime: 6163.18,
    person: 'Brian',
    text: ' So, so this is another benefit of, of, of having it yourself.'
  },
  { startTime: 6168.9, person: 'Karol', text: ' Yes, of course.' },
  {
    startTime: 6170.2,
    person: 'Karol',
    text: ' If we consider this from a data sovereignty perspective.'
  },
  {
    startTime: 6174.4,
    person: 'Karol',
    text: " So if you're looking at US Cloud Act you probably know about the US Cloud Act a lot more than I do in that sense."
  },
  {
    startTime: 6183.66,
    person: 'Karol',
    text: ' But basically what US Cloud Act says is that if the US government tells Microsoft to give any company data to them, Microsoft must comply over the US laws first and then look at any GDPR data privacy international laws, right?'
  },
  {
    startTime: 6206.86,
    person: 'Karol',
    text: " So in terms of data sovereignty, yes, this is a huge problem, but this is also a problem of not only the iPaaS technologies, but it's a problem of most cloud technologies."
  },
  {
    startTime: 6221.62,
    person: 'Karol',
    text: ' And now, okay, we see those, those problems being resolved.'
  },
  { startTime: 6225.54, person: 'Karol', text: ' For example, AWS is building a data centre.' },
  { startTime: 6230.72, person: 'Karol', text: ' Well, they already have it built actually.' },
  {
    startTime: 6232.78,
    person: 'Karol',
    text: ' I think in Germany that is under a completely independent entity, legal entity that is EU based.'
  },
  {
    startTime: 6243,
    person: 'Karol',
    text: ' And of course, if we move all of that to that particular entity, yeah, okay.'
  },
  {
    startTime: 6248.06,
    person: 'Karol',
    text: " We're at a place where our data sovereignty is better because then that data centre is in Germany."
  },
  { startTime: 6255.28, person: 'Karol', text: ' Germany has to adhere to EU laws.' },
  {
    startTime: 6258.32,
    person: 'Karol',
    text: " So it's a bit of a different situation than US dictating laws where US is represented as a sole entity on the international arena, right?"
  },
  {
    startTime: 6269.78,
    person: 'Karol',
    text: ' Whereas EU countries are not represented as a sole entity on the international arena.'
  },
  { startTime: 6275.66, person: 'Karol', text: " They're usually represented as European Union." },
  { startTime: 6279.5, person: 'Karol', text: " And that's fine." },
  {
    startTime: 6280.88,
    person: 'Karol',
    text: " That's a good reason to migrate to a technology that is not US based."
  },
  { startTime: 6287.6, person: 'Karol', text: ' Perfectly fine.' },
  {
    startTime: 6288.48,
    person: 'Karol',
    text: " Especially if you're trying to run this at in that technology cloud."
  },
  { startTime: 6294.32, person: 'Karol', text: ' I do agree on that.' },
  { startTime: 6295.72, person: 'Karol', text: " That's a valid reason." },
  { startTime: 6297.12, person: 'Karol', text: ' Would that be a reason to go to pure Java?' },
  {
    startTime: 6305.28,
    person: 'Karol',
    text: ' Given that in EU we have very few iPaaSes, so one of this is SAP having their integration platform.'
  },
  {
    startTime: 6314.48,
    person: 'Karol',
    text: ' Would I argue that you want to go to SAP, their stack to do application integration?'
  },
  { startTime: 6322.24, person: 'Karol', text: " Wouldn't be my first choice probably, right?" },
  { startTime: 6325.2, person: 'Karol', text: ' You have what?' },
  {
    startTime: 6326.24,
    person: 'Karol',
    text: ' You have Frends, which is a kind of BPMN, kind of a iPaaS, like very close by to Camunda.'
  },
  { startTime: 6336.46, person: 'Karol', text: ' Yeah, okay.' },
  { startTime: 6337.56, person: 'Karol', text: ' Might be okay.' },
  {
    startTime: 6339.06,
    person: 'Karol',
    text: ' You have open source projects like We Are Frank.'
  },
  { startTime: 6342.54, person: 'Karol', text: ' Well, sorry, Frank Framework.' },
  {
    startTime: 6343.94,
    person: 'Karol',
    text: ' We Are Frank is the company that created Frank Framework.'
  },
  { startTime: 6348.62, person: 'Karol', text: " Yes, that's open source." },
  {
    startTime: 6350.16,
    person: 'Karol',
    text: " It's very close to low code, a lot closer than Apache Camel and better at it than Apache Camel in that sense of the ease to get into it."
  },
  {
    startTime: 6360.88,
    person: 'Karol',
    text: ' Otherwise, a few minor players that are integration platforms that specialise, for example, in healthcare.'
  },
  { startTime: 6368.78, person: 'Karol', text: ' There are a few like that.' },
  {
    startTime: 6370.68,
    person: 'Karol',
    text: " But that's not an offering that's comparable to the US-based offering, and that's the biggest challenge in terms of these kind of things."
  },
  {
    startTime: 6383.82,
    person: 'Karol',
    text: ' I absolutely agree on the data sovereignty part of these kind of things.'
  },
  { startTime: 6388, person: 'Karol', text: " That's a good reason." },
  {
    startTime: 6390.5,
    person: 'Brian',
    text: " Yeah, and also, like in the case of MuleSoft, you're kind of locked into MuleSoft."
  },
  { startTime: 6396.14, person: 'Brian', text: ' They have a monopoly.' },
  {
    startTime: 6397.5,
    person: 'Brian',
    text: " You're kind of stuck with them, whereas with your Java, you have a little bit more flexibility."
  },
  { startTime: 6402.26, person: 'Brian', text: ' You can be on a different cloud.' },
  {
    startTime: 6403.28,
    person: 'Brian',
    text: " That's why I thought, like my original thought was, oh, clouds are going to really charge us a lot of money at some point."
  },
  {
    startTime: 6408.6,
    person: 'Brian',
    text: " But because they have different ones, there's Google, there's Azure, and you kind of have to, but we do get locked into each of these classes."
  },
  {
    startTime: 6416.7,
    person: 'Brian',
    text: " It's hard to move from one to the other as much as you'd like to."
  },
  {
    startTime: 6420.24,
    person: 'Brian',
    text: ' But you do have a, the cost is not quite as bad as it has been for these iPaaSes that kind of lock you in a little bit more.'
  },
  {
    startTime: 6428.9,
    person: 'Brian',
    text: " So it gives you, I think, a little bit more flexibility and also security control data, and you're just open source."
  },
  { startTime: 6437.22, person: 'Karol', text: " Yeah, and that's fair." },
  {
    startTime: 6438.74,
    person: 'Karol',
    text: " If this is a driving requirement, if there's a driving factor there, and if you need that kind of a, that rigidity of control."
  },
  {
    startTime: 6451.72,
    person: 'Karol',
    text: " Most companies, I would argue they don't need that level of control because their business is not strictly IT."
  },
  {
    startTime: 6458.68,
    person: 'Karol',
    text: ' They just have IT to facilitate for their business.'
  },
  {
    startTime: 6462.28,
    person: 'Karol',
    text: " And in those cases, it's probably not feasible and not a good idea to migrate away."
  },
  {
    startTime: 6468.52,
    person: 'Karol',
    text: " Of course, you're absolutely right on the vendor lock-in."
  },
  {
    startTime: 6472.08,
    person: 'Karol',
    text: ' Yes, if you have pure Java or JavaScript or whatever other programming language, and you just deploy it on a cloud, yes, you can just go to a different cloud and deploy there.'
  },
  {
    startTime: 6484.7,
    person: 'Karol',
    text: " It's just a matter of changing the DevOps pipelines, right?"
  },
  {
    startTime: 6488.34,
    person: 'Karol',
    text: " So that's less of a lock-in, but then again, it depends on what kind of other products next to it you're actually using."
  },
  {
    startTime: 6497.4,
    person: 'Karol',
    text: " Because if you're looking again at the part that is the non-functional coverage, right?"
  },
  { startTime: 6504.72, person: 'Karol', text: ' You need an API gateway.' },
  { startTime: 6507.12, person: 'Karol', text: ' Okay.' },
  {
    startTime: 6508.06,
    person: 'Karol',
    text: " You're having an API gateway that's Azure native."
  },
  {
    startTime: 6511.82,
    person: 'Karol',
    text: ' Now you have to move all of that and migrate that to whatever is in the AWS or Google.'
  },
  { startTime: 6516.72, person: 'Karol', text: " That's already a problem." },
  { startTime: 6518.82, person: 'Karol', text: ' You have a control plane.' },
  { startTime: 6520.72, person: 'Karol', text: ' Okay.' },
  {
    startTime: 6520.98,
    person: 'Karol',
    text: " If your control plane is self-built, because you could do that, then it's less of a problem."
  },
  { startTime: 6528.7, person: 'Karol', text: ' Monitoring?' },
  {
    startTime: 6530,
    person: 'Karol',
    text: " Depends what product you're actually using for monitoring."
  },
  {
    startTime: 6532.88,
    person: 'Karol',
    text: " If you're using cloud native from that particular vendor, you're already in a lock-in and you'll have to migrate your whole monitoring."
  },
  {
    startTime: 6541.32,
    person: 'Karol',
    text: ' Now, if you have a legal requirement to keep logs for a certain amount of years, that might be already a problem, right?'
  },
  {
    startTime: 6556.03,
    person: 'Karol',
    text: " So there's nuances to that that I would say they need to be explored."
  },
  {
    startTime: 6561.75,
    person: 'Karol',
    text: " It's just not only about the functional coverage when migrating an iPaaS."
  },
  {
    startTime: 6566.89,
    person: 'Karol',
    text: " There's actually a lot more to it, many more factors."
  },
  {
    startTime: 6571.67,
    person: 'Karol',
    text: ' And from your perspective being in Canada, some of the factors might be of a different view than from my perspective being in the Netherlands, because we have completely different markets.'
  },
  {
    startTime: 6581.67,
    person: 'Karol',
    text: ' We have completely different specialist availability.'
  },
  {
    startTime: 6586.07,
    person: 'Karol',
    text: ' Also, business mentality is a bit different, right?'
  },
  {
    startTime: 6591.57,
    person: 'Karol',
    text: ' And that all factors into the architectural decisions over which technology do we use and how we implement sovereignties, how we implement the...'
  },
  { startTime: 6605.99, person: 'Karol', text: ' How we have...' },
  { startTime: 6607.13, person: 'Karol', text: ' What kind of drivers we have to start off?' },
  {
    startTime: 6610.87,
    person: 'Brian',
    text: " But in my mind, all those decisions and ideas, like all that architecture design, it's already done for all those APIs and just migrating it."
  },
  { startTime: 6621.83, person: 'Brian', text: " So it's not even a matter of thinking about it." },
  { startTime: 6623.57, person: 'Brian', text: " It's just implementing it." },
  { startTime: 6625.35, person: 'Brian', text: " Like now we're going to..." },
  { startTime: 6626.67, person: 'Brian', text: ' Okay, we have the documentation.' },
  { startTime: 6629.49, person: 'Brian', text: ' We should have all that stuff.' },
  { startTime: 6630.65, person: 'Brian', text: " Now we're just going to do it." },
  { startTime: 6631.87, person: 'Brian', text: ' This is the retention period.' },
  { startTime: 6633.39, person: 'Brian', text: ' This is this and that.' },
  { startTime: 6634.47, person: 'Brian', text: ' All of it is...' },
  { startTime: 6635.73, person: 'Brian', text: ' And you need those architects.' },
  { startTime: 6637.09, person: 'Brian', text: " They're still there." },
  {
    startTime: 6638.63,
    person: 'Brian',
    text: ' We need those guys just as much as we did before.'
  },
  { startTime: 6643.81, person: 'Karol', text: ' I absolutely agree.' },
  {
    startTime: 6645.33,
    person: 'Karol',
    text: ' If you have a properly established integration platform in an API-led architecture, the architecture part is done.'
  },
  { startTime: 6653.67, person: 'Karol', text: " It's copy-paste." },
  { startTime: 6655.49, person: 'Karol', text: ' The problem is the solutioning.' },
  { startTime: 6658.15, person: 'Karol', text: " That's the challenging problem, right?" },
  { startTime: 6660.31, person: 'Karol', text: ' So basically...' },
  { startTime: 6661.99, person: 'Karol', text: ' Because...' },
  {
    startTime: 6662.63,
    person: 'Karol',
    text: ' And then again, this is a very important note here because people often do not differentiate architecture from solutioning.'
  },
  {
    startTime: 6669.37,
    person: 'Karol',
    text: ' If we put it in these terms, architecture is the blueprint.'
  },
  {
    startTime: 6674.11,
    person: 'Karol',
    text: ' Solutioning is the instantiation of that blueprint with a technology or a framework or a language, right?'
  },
  { startTime: 6681.91, person: 'Karol', text: " So you're absolutely right." },
  { startTime: 6684.37, person: 'Karol', text: ' Architecture is already there.' },
  {
    startTime: 6685.53,
    person: 'Karol',
    text: " It's a matter of doing a copy-paste of that architecture."
  },
  {
    startTime: 6688.29,
    person: 'Karol',
    text: ' The problem is with solutioning towards that architecture and how we want to change that.'
  },
  {
    startTime: 6693.63,
    person: 'Karol',
    text: ' And this is not only about the MuleSoft apps, right?'
  },
  { startTime: 6698.43, person: 'Karol', text: ' Or the Boomi flows or whatever else.' },
  { startTime: 6701.93, person: 'Karol', text: " There's the surroundings to that." },
  {
    startTime: 6704.93,
    person: 'Karol',
    text: ' The whole ecosystem of different functions that are required to be covered.'
  },
  { startTime: 6711.49, person: 'Brian', text: ' Yeah.' },
  { startTime: 6711.69, person: 'Brian', text: " And let's say..." },
  {
    startTime: 6713.07,
    person: 'Brian',
    text: " And we haven't talked about it as much, but you've got the environments or you've got the testing."
  },
  { startTime: 6720.37, person: 'Brian', text: " You've got your QA." },
  { startTime: 6722.35, person: 'Brian', text: ' And you can just...' },
  { startTime: 6723.57, person: 'Brian', text: ' Once again, your QA can just come right in.' },
  {
    startTime: 6726.79,
    person: 'Brian',
    text: " If they're using Postman, let's say, to be testing and running those tests and they have automated tests, everything is a JMeter, let's say."
  },
  { startTime: 6736.79, person: 'Brian', text: " All of that's the same." },
  { startTime: 6738.55, person: 'Brian', text: ' So you can just carry that over.' },
  { startTime: 6740.25, person: 'Brian', text: " That's not going to change in any way." },
  { startTime: 6743.51, person: 'Karol', text: ' Okay.' },
  { startTime: 6744.97, person: 'Karol', text: ' Fair point.' },
  { startTime: 6746.85, person: 'Karol', text: ' What does not change?' },
  { startTime: 6750.03, person: 'Karol', text: " Let's put this kind of a title." },
  { startTime: 6752.33, person: 'Karol', text: ' So if we just...' },
  { startTime: 6755.37, person: 'Karol', text: ' One more box.' },
  { startTime: 6757.49, person: 'Karol', text: ' So we already established.' },
  { startTime: 6762.97, person: 'Karol', text: ' Architecture is not changing.' },
  { startTime: 6765.13, person: 'Karol', text: " That's a given, right?" },
  { startTime: 6772.39, person: 'Karol', text: " Solutioning, that's changing." },
  { startTime: 6774.05, person: 'Karol', text: " That's the problematic part." },
  { startTime: 6778.29, person: 'Brian', text: " It's like you're..." },
  {
    startTime: 6779.87,
    person: 'Brian',
    text: " I don't know if you put that under architecture, but your security design, that's all should be the same, but the implementation of it is different."
  },
  { startTime: 6792.85, person: 'Karol', text: ' Yes.' },
  { startTime: 6793.75, person: 'Karol', text: " You're right." },
  { startTime: 6802.44, person: 'Karol', text: ' Security design.' },
  { startTime: 6803.78, person: 'Karol', text: " You're absolutely right." },
  { startTime: 6804.6, person: 'Karol', text: " That doesn't change." },
  {
    startTime: 6806.2,
    person: 'Karol',
    text: ' But what does change is the security implementation.'
  },
  { startTime: 6816.56, person: 'Karol', text: " You're absolutely spot on here." },
  { startTime: 6818.38, person: 'Karol', text: ' So that does change, right?' },
  {
    startTime: 6819.66,
    person: 'Karol',
    text: " That's the problematic part because we need to redo that to an extent."
  },
  { startTime: 6825.46, person: 'Karol', text: ' Okay.' },
  {
    startTime: 6826.48,
    person: 'Karol',
    text: ' What else we would say does not change there from that kind of static perspective?'
  },
  {
    startTime: 6832.68,
    person: 'Brian',
    text: " So the environments, like CI, CD, like all of that DevOps, and that depends on how you've implemented your iPaaS."
  },
  { startTime: 6848.24, person: 'Brian', text: ' Are you doing it yourself?' },
  { startTime: 6851.78, person: 'Brian', text: ' Or because they have...' },
  {
    startTime: 6854.12,
    person: 'Brian',
    text: " Which environments you have and the passwords and the setup and it's just the space."
  },
  {
    startTime: 6865.65,
    person: 'Brian',
    text: ' But you could have, like I said, and I actually am forgetting the terminology now, but you can either use Cloud Hub or you can do it through Kubernetes and you have your own space.'
  },
  { startTime: 6877.63, person: 'Karol', text: ' Yes.' },
  {
    startTime: 6878.17,
    person: 'Brian',
    text: " So if you already have it set up, that's not going to change, but if you're using Cloud Hub..."
  },
  {
    startTime: 6888.17,
    person: 'Karol',
    text: ' I think if we look at this from a perspective of the logical steps that happen in the DevOps pipeline, I think those steps will not change much or at all, but the implementation of those steps will certainly change between those different solutions.'
  },
  {
    startTime: 6905.17,
    person: 'Karol',
    text: ' Because for Cloud Hub, you would probably use a CLI of Cloud Hub to do some actions from a DevOps perspective.'
  },
  { startTime: 6914.23, person: 'Karol', text: " That's perfectly fine." },
  {
    startTime: 6916.21,
    person: 'Karol',
    text: ' You use all sorts of secret vaults, configuration management on all that.'
  },
  {
    startTime: 6922.95,
    person: 'Karol',
    text: ' Depending how you solution to your secrets and configuration management, that could be entirely transferable because these are certain functionalities that do not come out of the box with an iPaaS, so you probably solution for that either way yourself.'
  },
  { startTime: 6938.35, person: 'Karol', text: " And that's fine because, great, that's a win." },
  {
    startTime: 6942.01,
    person: 'Karol',
    text: " But then again, you have to redevelop your DevOps pipelines because you're now working with a different stack, so you have to redevelop your build and deploy."
  },
  {
    startTime: 6952.49,
    person: 'Karol',
    text: " If you're moving from Cloud Hub to Kubernetes, well, these are two different deploy modes completely."
  },
  { startTime: 6960.45, person: 'Karol', text: ' So this is a change in the implementation.' },
  {
    startTime: 6964.17,
    person: 'Karol',
    text: ' So this is, again, another cost incurred with that kind of a migration that you have to redo that per your DevOps team.'
  },
  {
    startTime: 6973.85,
    person: 'Karol',
    text: ' Would that constitute a rehire or retraining of said DevOps team?'
  },
  { startTime: 6978.95, person: 'Karol', text: ' Probably not.' },
  { startTime: 6980.85, person: 'Brian', text: ' Yeah, you just hire.' },
  {
    startTime: 6983.85,
    person: 'Brian',
    text: " But as an example, we work with the DevOps of the new team saying, here's the new code just implemented."
  },
  { startTime: 6991.73, person: 'Brian', text: ' Put it into an environment and give it an URL.' },
  { startTime: 6997.83, person: 'Brian', text: " Sure, it's the same." },
  {
    startTime: 6999.89,
    person: 'Brian',
    text: ' But yeah, usually you might have to build out, but then...'
  },
  { startTime: 7004.89, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 7005.57,
    person: 'Karol',
    text: ' And then infrastructure, I would put infrastructure specifically here in yellow, not red.'
  },
  {
    startTime: 7013.77,
    person: 'Karol',
    text: " Because if you've been running your iPaaS in a hybrid mode, then you already have kind of that infrastructure provision, especially if you run it as containerised, then that should be fine."
  },
  {
    startTime: 7025.77,
    person: 'Karol',
    text: " But if you run it completely in the cloud, like if you run Boomi completely in the cloud, you don't have that infrastructure."
  },
  {
    startTime: 7033.25,
    person: 'Karol',
    text: " If you run MuleSoft in Cloud Hub, you don't have that infrastructure."
  },
  { startTime: 7037.23, person: 'Karol', text: " You'll need to build that infrastructure." },
  {
    startTime: 7039.17,
    person: 'Karol',
    text: " You need to build all those let's say infra-DevOps around that infrastructure."
  },
  {
    startTime: 7045.57,
    person: 'Karol',
    text: ' So all the Terraform scripts, everything around that to get that going, to provision new pods on your containerisation platform.'
  },
  { startTime: 7055.71, person: 'Karol', text: " That's a lot of work." },
  {
    startTime: 7057.05,
    person: 'Karol',
    text: " So that's another cost that may be or may be not an interesting cost to look at."
  },
  {
    startTime: 7063.81,
    person: 'Brian',
    text: " Although I'm guessing that the organisations already have some DevOps people involved in those MuleSoft implementations."
  },
  {
    startTime: 7072.95,
    person: 'Brian',
    text: " So they're just going to need to run these other scripts."
  },
  { startTime: 7075.45, person: 'Brian', text: " So it might not be an expert, but it's a..." },
  { startTime: 7079.01, person: 'Brian', text: ' Yeah.' },
  { startTime: 7079.41, person: 'Karol', text: " But then it's a matter of having..." },
  { startTime: 7083.29, person: 'Karol', text: ' Do you have your DevOps team or infra-Ops team?' },
  {
    startTime: 7086.99,
    person: 'Karol',
    text: ' Because not all DevOps specialists will do infrastructure.'
  },
  {
    startTime: 7092.87,
    person: 'Karol',
    text: " So if you had Cloud Hub or just iPaaS in the cloud, fully in cloud, those DevOps will be focussing on build and deploy or build test deploy, depending on what's your policy on automating things, because you can do regression tests in a DevOps pipeline as well."
  },
  { startTime: 7111.57, person: 'Karol', text: ' And this is another step of maturity.' },
  {
    startTime: 7114.57,
    person: 'Karol',
    text: ' So basically then this will incur, from that perspective, additional costs on the organisation to either train or hire your infra-Ops.'
  },
  {
    startTime: 7128.51,
    person: 'Karol',
    text: ' Unless of course that organisation was mature enough and they already had these kinds of infra-Ops for other topics, then you just repurpose.'
  },
  {
    startTime: 7136.19,
    person: 'Karol',
    text: ' But that might be a stretch in scaling that team in terms of scope of responsibility.'
  },
  { startTime: 7142.19, person: 'Karol', text: ' So that would probably mean hire.' },
  { startTime: 7145.89, person: 'Brian', text: ' Yeah, possibly.' },
  { startTime: 7147.97, person: 'Karol', text: ' Okay.' },
  {
    startTime: 7149.31,
    person: 'Karol',
    text: " Anything else we're missing in terms of what does not change, what does change, these kinds of perspectives?"
  },
  {
    startTime: 7159.97,
    person: 'Brian',
    text: ' What does not change is also your business analyst.'
  },
  { startTime: 7169.93, person: 'Karol', text: ' Your knowledge of your business.' },
  { startTime: 7172.27, person: 'Karol', text: ' Yes, that does not change.' },
  { startTime: 7175.03, person: 'Brian', text: ' The SMEs.' },
  { startTime: 7181.71, person: 'Karol', text: ' Yes, knowledge of your business.' },
  {
    startTime: 7183.97,
    person: 'Karol',
    text: " But what does change is the knowledge of how that's implemented, because there's a difference between looking at the business process and knowing how it actually runs."
  },
  {
    startTime: 7204.39,
    person: 'Karol',
    text: " If we're looking at a client that doesn't have sufficient IT maturity or doesn't use domain-driven design to create ubiquitous language, well, most likely the business has no idea how it's actually run underneath in terms of technology and the actual implemented processes."
  },
  {
    startTime: 7228.41,
    person: 'Karol',
    text: " They just see the UI and that's the extent of their knowledge."
  },
  {
    startTime: 7231.87,
    person: 'Karol',
    text: " What's happening beneath, there's going to be very few people that actually have any knowledge about that outside of IT."
  },
  {
    startTime: 7238.83,
    person: 'Karol',
    text: " So we're assuming by that, this knowledge would be there, but that's usually not the case."
  },
  {
    startTime: 7245.19,
    person: 'Karol',
    text: " And that's also the problematic aspect and another cost inherent in that sense."
  },
  { startTime: 7251.97, person: 'Brian', text: ' Yeah, that might be your network diagram.' },
  {
    startTime: 7254.59,
    person: 'Brian',
    text: " I'm not sure if it would change or not, but it's okay."
  },
  { startTime: 7258.37, person: 'Karol', text: ' Network, yeah, that would have to change.' },
  {
    startTime: 7262.99,
    person: 'Karol',
    text: " No, that would have to change because, well, your domain systems are, well, they're set in the network."
  },
  {
    startTime: 7271.63,
    person: 'Karol',
    text: " They don't move around from that perspective of the migration."
  },
  {
    startTime: 7276.63,
    person: 'Karol',
    text: " But if you move your iPaaS somewhere else, entirely different, well, that's going to be a problem."
  },
  { startTime: 7286.41, person: 'Karol', text: " That's redoing the network." },
  {
    startTime: 7288.25,
    person: 'Karol',
    text: ' So I think in that sense, network is something that will change.'
  },
  { startTime: 7292.43, person: 'Karol', text: " So I'm just going to put it here." },
  {
    startTime: 7296.63,
    person: 'Karol',
    text: " But luckily, I'll give it more of an orange thing than red because network is the, let's say somewhat the easier part because we already know that those systems are there, they're behind this and this firewall and this subnet, whatever that is."
  },
  { startTime: 7317.07, person: 'Karol', text: ' Again, not the network engineer.' },
  {
    startTime: 7318.59,
    person: 'Karol',
    text: ' I might actually now speak bull crap, but we know where they are in the network, right?'
  },
  {
    startTime: 7326.09,
    person: 'Karol',
    text: " So from the infrastructure perspective, that's actually easier because we're just moving one part."
  },
  {
    startTime: 7331.09,
    person: 'Karol',
    text: ' And then we just need to burn the holes in firewalls in different places for that one part, right?'
  },
  {
    startTime: 7338.81,
    person: 'Karol',
    text: " So that's the, let's say, slightly easier part from that perspective."
  },
  { startTime: 7347.53, person: 'Karol', text: ' All right.' },
  {
    startTime: 7348.31,
    person: 'Karol',
    text: ' I see that Stefan has been commenting like crazy in the chat.'
  },
  { startTime: 7352.29, person: 'Karol', text: ' Network is constant.' },
  {
    startTime: 7353.47,
    person: 'Karol',
    text: " Well, that's a fallacy of distributed computing."
  },
  { startTime: 7356.83, person: 'Karol', text: ' Network is not a constant.' },
  { startTime: 7359.85, person: 'Karol', text: ' But yeah, Stefan, thanks for the comments.' },
  { startTime: 7362.03, person: 'Karol', text: ' Yes.' },
  { startTime: 7362.89, person: 'Karol', text: ' Some of them are, yeah.' },
  {
    startTime: 7365.01,
    person: 'Karol',
    text: " I don't know what, which point, to which point you're commenting at times because we have a bit of a delay from the studio to the actual feed."
  },
  {
    startTime: 7375.11,
    person: 'Karol',
    text: " So that's problematic to just weave your comments into the stream."
  },
  { startTime: 7379.95, person: 'Karol', text: ' But yes, network is a constant.' },
  {
    startTime: 7381.69,
    person: 'Karol',
    text: " That's a constant problem of the fallacies of distributed computing."
  },
  { startTime: 7387.69, person: 'Karol', text: " There's always the latency, right?" },
  { startTime: 7391.67, person: 'Karol', text: ' Yeah.' },
  { startTime: 7392.89, person: 'Brian', text: ' Our network is lagging.' },
  { startTime: 7399.25, person: 'Karol', text: " That's the usual problem." },
  { startTime: 7402.43, person: 'Karol', text: ' All right.' },
  { startTime: 7403.53, person: 'Karol', text: ' You know what?' },
  {
    startTime: 7404.15,
    person: 'Karol',
    text: ' I think this, we can start wrapping up this discussion here.'
  },
  {
    startTime: 7411.09,
    person: 'Karol',
    text: ' I think we covered quite a large extent of total cost of ownership of an iPaaS.'
  },
  {
    startTime: 7418.27,
    person: 'Karol',
    text: ' And if somebody has been listening, I think people would pick up on when to or when not to migrate from an iPaaS towards pure Java or pure code.'
  },
  {
    startTime: 7436.71,
    person: 'Karol',
    text: ' And I think everybody would get the idea that this is not a binary decision and you cannot do it just based on the opex cost of licences.'
  },
  { startTime: 7448.05, person: 'Karol', text: ' You need to calculate that for yourself.' },
  { startTime: 7451.27, person: 'Brian', text: ' Yeah.' },
  { startTime: 7451.61, person: 'Brian', text: ' Well, absolutely.' },
  {
    startTime: 7453.11,
    person: 'Brian',
    text: " Like I said, I mean, I'm ballparking where I'll say, you know, and I think you were talking, that was a big example, that $5 million a year in licencing cost."
  },
  {
    startTime: 7463.55,
    person: 'Brian',
    text: " I think a bigger example like is, you know, maybe someone has 25 APIs, they're spending a million or 2 million, and then it's going to save them, you know, a million a year, but it'll cost them a million to convert it."
  },
  {
    startTime: 7482.05,
    person: 'Brian',
    text: ' And it might take six months to a year to do it, but you can gradually do a little bit at a time.'
  },
  {
    startTime: 7490.91,
    person: 'Brian',
    text: ' But ultimately, I feel that will give you more flexibility in the future.'
  },
  { startTime: 7496.45, person: 'Brian', text: " And then we'll save you costs in the future." },
  { startTime: 7499.27, person: 'Brian', text: ' Hire the people to do it.' },
  {
    startTime: 7501.85,
    person: 'Karol',
    text: ' I think this is a perspective of scale, personally.'
  },
  {
    startTime: 7508.59,
    person: 'Karol',
    text: ' If you went into MuleSoft when having five to 10 domain systems that beat to interact with one another, I think somebody gave you really bad advice, right?'
  },
  {
    startTime: 7523.23,
    person: 'Karol',
    text: " Because that's a humongous cost that your business didn't need at that point in time."
  },
  {
    startTime: 7528.57,
    person: 'Karol',
    text: ' So that means somebody architected an overkill for your business.'
  },
  {
    startTime: 7535.15,
    person: 'Karol',
    text: " If you're at the stage where you're growing and you have over 30 business systems and they have a lot of interactions between one another, well, probably it's a bit insane decision to go into an API led architecture and implement that."
  },
  {
    startTime: 7551.17,
    person: 'Karol',
    text: ' If you already have MuleSoft, that may be debatable to migrate.'
  },
  {
    startTime: 7554.67,
    person: 'Karol',
    text: " But if you're just going from broker architecture or from spaghetti architecture, it may be quite feasible to go into Java and just do it in Spring Boot."
  },
  { startTime: 7568.13, person: 'Brian', text: ' Yeah, if you have Java developers.' },
  {
    startTime: 7569.75,
    person: 'Brian',
    text: " I want to bring up a particular use case, which is, I don't know how common this is."
  },
  {
    startTime: 7576.13,
    person: 'Brian',
    text: " So it was a smaller organisation, which outsource a lot, most of their IT, but they said, okay, we're going to go with Salesforce."
  },
  {
    startTime: 7585.09,
    person: 'Brian',
    text: " So Salesforce came in and said, oh, great, we're going to bring in Salesforce."
  },
  { startTime: 7590.31, person: 'Brian', text: ' And that looked great.' },
  { startTime: 7591.25, person: 'Brian', text: ' That was good for them.' },
  {
    startTime: 7593.07,
    person: 'Brian',
    text: ' And then all of a sudden, Salesforce, I guess they wanted to connect.'
  },
  { startTime: 7596.09, person: 'Brian', text: " And I guess that's what Salesforce will do." },
  { startTime: 7597.99, person: 'Brian', text: ' We need to connect into all your systems.' },
  { startTime: 7599.73, person: 'Brian', text: ' How are we going to do that?' },
  {
    startTime: 7600.65,
    person: 'Brian',
    text: ' And in this case, they brought in MuleSoft, and then they just put in MuleSoft.'
  },
  {
    startTime: 7605.37,
    person: 'Brian',
    text: " And all of a sudden, they're like, oh, there's like this bill that we're getting every month for half a million dollars that is MuleSoft."
  },
  { startTime: 7614.11, person: 'Brian', text: ' Like, why are we paying for that?' },
  { startTime: 7616.21, person: 'Brian', text: " And we've got Java developers here." },
  {
    startTime: 7618.25,
    person: 'Brian',
    text: " And then the Java developers are like, oh, we can't fix or change this."
  },
  {
    startTime: 7623.47,
    person: 'Brian',
    text: ' So they said, I just want to get rid of MuleSoft.'
  },
  { startTime: 7625.83, person: 'Brian', text: ' So Brian, get rid of MuleSoft.' },
  {
    startTime: 7629.73,
    person: 'Brian',
    text: ' And just give us Java, and our Java developers will be able to do it.'
  },
  { startTime: 7633.67, person: 'Brian', text: " We'll have to pay it." },
  {
    startTime: 7634.93,
    person: 'Brian',
    text: ' But just MuleSoft, our Salesforce wanted us to connect in.'
  },
  { startTime: 7638.81, person: 'Brian', text: ' How are we going to connect in?' },
  { startTime: 7639.81, person: 'Brian', text: " It doesn't have to be MuleSoft." },
  { startTime: 7641.21, person: 'Brian', text: ' You can do it.' },
  { startTime: 7641.69, person: 'Brian', text: ' You can do it in Java.' },
  { startTime: 7642.75, person: 'Brian', text: ' You can .NET, whatever your own thing is.' },
  {
    startTime: 7645.95,
    person: 'Brian',
    text: ' But this is a way to kind of free you from those costs.'
  },
  { startTime: 7649.09, person: 'Brian', text: ' And this is one of the possibilities.' },
  {
    startTime: 7652.15,
    person: 'Karol',
    text: ' In that kind of scenario, I would argue that there was a lack of properly trained architect in that business to actually cover that and make a decision.'
  },
  {
    startTime: 7666.25,
    person: 'Karol',
    text: " And somebody in the business just went, oh, they're giving us MuleSoft with Salesforce."
  },
  { startTime: 7671.65, person: 'Karol', text: " Oh, yippee, let's do it." },
  { startTime: 7674.69, person: 'Brian', text: " It's free for six months or free for one year." },
  { startTime: 7677.93, person: 'Brian', text: " And then the next year, it's like." },
  { startTime: 7679.25, person: 'Karol', text: ' We got you.' },
  {
    startTime: 7681.71,
    person: 'Karol',
    text: " But that's a business practise that has nothing to do with architecture in that sense."
  },
  { startTime: 7687.99, person: 'Brian', text: ' A lot of stuff is political.' },
  { startTime: 7690.21, person: 'Brian', text: ' A lot of stuff is financial.' },
  { startTime: 7693.31, person: 'Karol', text: ' Precisely.' },
  {
    startTime: 7694.11,
    person: 'Karol',
    text: " So from the novelty perspective of psychology, oh, that's a lucrative deal for the business."
  },
  { startTime: 7702.47, person: 'Karol', text: ' We get a licence for free for a year.' },
  { startTime: 7705.39, person: 'Karol', text: ' And then you have to pay.' },
  {
    startTime: 7707.13,
    person: 'Karol',
    text: ' And did that make any sense from a perspective of architecture and their ecosystem?'
  },
  { startTime: 7714.15, person: 'Karol', text: " Possibly didn't." },
  { startTime: 7715.69, person: 'Karol', text: " That's just the case." },
  {
    startTime: 7716.71,
    person: 'Karol',
    text: " And yeah, in that kind of case, it's a very nice use case to actually migrate away."
  },
  {
    startTime: 7722.67,
    person: 'Karol',
    text: " Because that was cost that was incurred not through proper architecture, but through decisions of a business that were not based on a proper set of information and understanding of what they're doing."
  },
  { startTime: 7741.79, person: 'Karol', text: ' And that happens all the time.' },
  {
    startTime: 7744.09,
    person: 'Karol',
    text: " And this is where salespeople get a little bit tricky with these kind of things like, oh, we're going to give you something for free, or we're going to give you a discount, or we're going to give you that."
  },
  { startTime: 7753.71, person: 'Karol', text: ' Yeah.' },
  { startTime: 7756.05, person: 'Karol', text: ' This is all to convince the business.' },
  {
    startTime: 7757.81,
    person: 'Karol',
    text: " If the business is not listening to their architects, well, that's what you get."
  },
  {
    startTime: 7765.47,
    person: 'Karol',
    text: ' And then we get a big ball of mud or spaghetti architecture, or companies with three or four integration platforms inside that company, not coming from a perspective of acquisition, but just living on their own because of the pure scale of problems and that the business forget, oh, we can actually solve it by getting a new technology.'
  },
  {
    startTime: 7786.35,
    person: 'Karol',
    text: ' You will not solve organisational issues with a new technology.'
  },
  { startTime: 7793.15, person: 'Karol', text: ' It is what it is.' },
  { startTime: 7795.27, person: 'Karol', text: ' All right, Brian, parting words.' },
  { startTime: 7797.97, person: 'Brian', text: ' It was great talking to you.' },
  {
    startTime: 7799.67,
    person: 'Brian',
    text: " And it's good to go over all this stuff in detail and very thorough."
  },
  { startTime: 7804.79, person: 'Brian', text: ' It was a fun conversation.' },
  { startTime: 7808.05, person: 'Brian', text: ' And I enjoyed talking to you.' },
  { startTime: 7812.55, person: 'Karol', text: ' That was actually a very fun sparring session.' },
  { startTime: 7815.47, person: 'Karol', text: ' I enjoyed it as well.' },
  { startTime: 7816.55, person: 'Karol', text: ' That was really cool.' },
  { startTime: 7819.11, person: 'Karol', text: ' All right.' },
  {
    startTime: 7820.77,
    person: 'Karol',
    text: " Before we jump off the stream, I'll just do some small announcements."
  },
  {
    startTime: 7826.83,
    person: 'Karol',
    text: " So, next week, we're doing something completely different."
  },
  {
    startTime: 7832.13,
    person: 'Karol',
    text: " We're going to be talking about collaborative modelling and API definitions in the age of AI."
  },
  {
    startTime: 7839.13,
    person: 'Karol',
    text: ' And on the stream, the speaker will be Dr. Annegret Junker, chief software architect at CodeCentric AG.'
  },
  {
    startTime: 7848.55,
    person: 'Karol',
    text: " That's going to be quite an interesting conversation to be had because, yeah, well, AI is now everywhere."
  },
  {
    startTime: 7854.91,
    person: 'Karol',
    text: " And it's insane how people use AI with the vibe coding and all that."
  },
  {
    startTime: 7860.27,
    person: 'Karol',
    text: " So, we're going to look at it, how we can use it a little bit saner, so to speak."
  },
  { startTime: 7866.37, person: 'Karol', text: " So, that's going to be the fun part." },
  {
    startTime: 7868.27,
    person: 'Karol',
    text: " And now, if you're here, new, you haven't seen the stream, you don't know what bridging the gap is, well, here are some QR codes."
  },
  { startTime: 7879.21, person: 'Karol', text: ' Jump into bridgingthegap.eu.com.' },
  {
    startTime: 7880.95,
    person: 'Karol',
    text: ' This is our website where we write about integration architecture, integration patterns, and whatnot.'
  },
  {
    startTime: 7887.25,
    person: 'Karol',
    text: " You can subscribe to our Substack, although it's a little bit dead at the moment."
  },
  {
    startTime: 7892.59,
    person: 'Karol',
    text: " We're going to get back to that soon when we have more time on our hands."
  },
  {
    startTime: 7897.03,
    person: 'Karol',
    text: " And then subscribe to our YouTube channel to get to be notified about all the lovely live streams we're doing."
  },
  {
    startTime: 7904.03,
    person: 'Karol',
    text: " And we're doing about three live streams a month on various topics related to interoperability, IT, but also psychology, cognitive loads, psychological health in IT, and the impact that this may have on adoption of architecture."
  },
  { startTime: 7920.63, person: 'Karol', text: ' So, that said.' },
  { startTime: 7924.09, person: 'Karol', text: ' Thank you all for joining.' },
  { startTime: 7925.23, person: 'Karol', text: ' Thank you for listening.' },
  { startTime: 7926.55, person: 'Karol', text: ' Thank you for the comments.' },
  {
    startTime: 7928.23,
    person: 'Karol',
    text: " And have a lovely day, night, evening, wherever you are, from wherever you're listening, from whatever the time"
  }
])
</script>

<style scoped></style>
