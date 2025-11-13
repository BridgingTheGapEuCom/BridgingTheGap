<template>
  <div class="w-full">
    <StreamLayout
      :transcript="transcript"
      name="Loosely Coupled - Collaborative Modelling and API definitions in the age of AI"
      video-id="qyb0SpUgpeY"
    />
  </div>
</template>

<script lang="ts" setup>
const transcript = ref([
  {
    startTime: 104.15,
    person: 'Karol',
    text: ' Good morning, good afternoon, and good evening, everybody.'
  },
  {
    startTime: 107.47,
    person: 'Karol',
    text: ' I hope you have a nice cup of something to drink or a glass or whatever.'
  },
  { startTime: 112.01, person: 'Karol', text: ' I have a whole jug for me of coffee.' },
  {
    startTime: 114.65,
    person: 'Karol',
    text: ' And I welcome you to another episode of Loosely Coupled by Bridging the Gap.'
  },
  {
    startTime: 118.89,
    person: 'Karol',
    text: " My name is Karol Skrzymowski, and I'll be your host tonight."
  },
  {
    startTime: 123.11,
    person: 'Karol',
    text: " And today, today we're taking a little bit of a different approach."
  },
  {
    startTime: 127.169,
    person: 'Karol',
    text: " We're still going to be having a very nice conversation, but this conversation will be very much hands-on."
  },
  {
    startTime: 133.13,
    person: 'Karol',
    text: " So we'll be basically doing some work after work."
  },
  {
    startTime: 137.27,
    person: 'Karol',
    text: " Well, I had a whole day of writing documentations and whatnot, and now I'm going to be now collaboratively modelling."
  },
  {
    startTime: 143.41,
    person: 'Karol',
    text: " Okay, a bit tiring, but let's see where that gets us."
  },
  {
    startTime: 146.59,
    person: 'Karol',
    text: ' I suppose this part is going to be actually fun instead of being work.'
  },
  {
    startTime: 150.81,
    person: 'Karol',
    text: ' So, without further ado, joining me today in our studio is Annagret Junker, Dr. Annagret Junker from CodeCentric AG in Germany.'
  },
  { startTime: 163.29, person: 'Karol', text: ' Welcome, Annagret.' },
  { startTime: 165.51, person: 'Annagret', text: ' Thank you for being here.' },
  { startTime: 167.21, person: 'Annagret', text: ' Thank you for the invitation, Karol.' },
  { startTime: 169.27, person: 'Karol', text: " Well, I'm happy that you could make it." },
  {
    startTime: 172.01,
    person: 'Karol',
    text: " Annagret, tell us a little bit about what you do, what's your background, and yeah."
  },
  { startTime: 180.71, person: 'Annagret', text: ' Yeah, I hold a PhD.' },
  { startTime: 182.91, person: 'Annagret', text: " I'm really proud of." },
  {
    startTime: 184.93,
    person: 'Annagret',
    text: " As an electro-engineer, long time ago, but because I did software my whole life, I'm more a soft worker than some kind of an electro-engineer."
  },
  {
    startTime: 200.41,
    person: 'Annagret',
    text: " I do architecture, and I'm really passionate about software architecture and all its slightly different aspects."
  },
  {
    startTime: 211.37,
    person: 'Annagret',
    text: ' Usually, I come from the enterprise level and then to the solution level, but I even discuss about certain infrastructures, etcétera, etcétera.'
  },
  {
    startTime: 224.37,
    person: 'Annagret',
    text: " I'm not so interested indeed in certain network technologies and those things and topologies, but I'm really interested in how to tailor a software so that it really works, technically, socially, etcétera."
  },
  {
    startTime: 246.97,
    person: 'Karol',
    text: ' So from a high-level perspective down rather than from bottom up.'
  },
  { startTime: 252.53, person: 'Karol', text: ' Exactly, exactly, exactly.' },
  {
    startTime: 254.59,
    person: 'Karol',
    text: " Yeah, I think this is a very common thing for enterprise architects looking from top down and into the details rather than from technology, infrastructure, and networks because that's very, very detailed."
  },
  {
    startTime: 270.17,
    person: 'Karol',
    text: " I don't remember when was the last time I actually did something with networks and infrastructure other than say, I need a Kubernetes cluster or OpenShift cluster or something like this."
  },
  {
    startTime: 281.03,
    person: 'Annagret',
    text: " Yeah, these days, there's so much automation and those things that you even don't know what really happens behind."
  },
  {
    startTime: 287.61,
    person: 'Annagret',
    text: " There's that add character behind, yeah, and so forth."
  },
  { startTime: 294.73, person: 'Karol', text: " Well, yeah, that's true." },
  {
    startTime: 296.35,
    person: 'Karol',
    text: ' We can automate literally everything other than human beings.'
  },
  { startTime: 302.03, person: 'Annagret', text: ' Yeah, exactly, exactly.' },
  {
    startTime: 304.19,
    person: 'Karol',
    text: ' And even sometimes it seems like some of us are quite automatic.'
  },
  { startTime: 310.49, person: 'Annagret', text: " Yeah, I mean, but it's great." },
  {
    startTime: 313.31,
    person: 'Annagret',
    text: " I mean, you see, I'm not as young as I used to be."
  },
  { startTime: 319.01, person: 'Annagret', text: ' I really started writing assembler code.' },
  {
    startTime: 325.13,
    person: 'Annagret',
    text: " And I knew every register by heart and which ones and O's were in there."
  },
  {
    startTime: 333.19,
    person: 'Annagret',
    text: ' And MIMA is so, so much better because you really can express functionality almost in a natural language.'
  },
  { startTime: 345.63, person: 'Annagret', text: ' Right.' },
  {
    startTime: 347.51,
    person: 'Karol',
    text: " You know, we actually share educational background because I'm a bachelor in electrical engineering."
  },
  {
    startTime: 353.73,
    person: 'Karol',
    text: ' So my background from university is also logic gates, assembler, PLC, all that lovely stuff.'
  },
  {
    startTime: 364.35,
    person: 'Karol',
    text: " And the common joke was that, well, we as electrical engineers, we're not scared of electricity."
  },
  {
    startTime: 370.03,
    person: 'Karol',
    text: ' The electronics department is scared of everything more than 15 volts.'
  },
  { startTime: 374.43, person: 'Karol', text: ' We deal with one kilovolt quite often.' },
  { startTime: 377.45, person: 'Karol', text: " So that's nothing." },
  {
    startTime: 378.49,
    person: 'Karol',
    text: ' But, yeah, there is an interesting hop from electrical engineering to IT.'
  },
  {
    startTime: 386.57,
    person: 'Karol',
    text: " This is actually a very interesting way to get into that from the machine perspective, from the logic gates perspective, assembler, where you actually have to very carefully think about what you're doing and why you're doing it."
  },
  {
    startTime: 399.67,
    person: 'Karol',
    text: " Otherwise, you'll run out of memory, run out of space."
  },
  {
    startTime: 405.03,
    person: 'Karol',
    text: " It's a, I would say, an amazing mindset if you also adapt the typical engineering, lazy engineering mindset to automate everything and make it as simple as possible."
  },
  { startTime: 417.23, person: 'Annagret', text: ' Yeah.' },
  {
    startTime: 417.47,
    person: 'Annagret',
    text: " In the end, it's software engineering, isn't it?"
  },
  {
    startTime: 421.21,
    person: 'Annagret',
    text: ' So engineering principles are not too different in the end.'
  },
  {
    startTime: 427.69,
    person: 'Karol',
    text: " Yes, but I would also argue, as Barry O'Reilly does argue, that IT as a discipline as a whole is a lot younger than the majority of scientific disciplines."
  },
  {
    startTime: 442.33,
    person: 'Karol',
    text: ' And at certain times, we still have a lot to learn to be a proper engineering discipline, because we went a little bit too far into art form rather than actual scientific science based engineering.'
  },
  {
    startTime: 457.45,
    person: 'Annagret',
    text: " Well, I completely agree to us and probably will show that it's not so much engineering."
  },
  { startTime: 466.09, person: 'Annagret', text: " I'm an engineer by heart." },
  { startTime: 468.29, person: 'Annagret', text: " I'm really an engineer." },
  { startTime: 469.63, person: 'Annagret', text: ' Yes.' },
  {
    startTime: 471.27,
    person: 'Annagret',
    text: " But I think it's insofar art, because with each software system we do, we do some kind totally new, which was not there before."
  },
  {
    startTime: 487.59,
    person: 'Annagret',
    text: " We don't, as we repeat ourselves, of course, often enough."
  },
  {
    startTime: 493.54,
    person: 'Annagret',
    text: ' But in the end, there is a teeny thing which is different and the teeny thing makes a new system.'
  },
  {
    startTime: 500.93,
    person: 'Annagret',
    text: ' And I think to have the idea, what can I do that I fulfil the requirements that I can do really that new thing that is art.'
  },
  { startTime: 514.39, person: 'Karol', text: ' Yeah, there is a little bit of part of it.' },
  {
    startTime: 516.57,
    person: 'Karol',
    text: " I would argue that we're constantly recreating stuff."
  },
  { startTime: 524.07, person: 'Karol', text: ' Sometimes reinventing the wheel.' },
  {
    startTime: 526.69,
    person: 'Karol',
    text: ' And you could have solved that already if you knew.'
  },
  {
    startTime: 531.33,
    person: 'Karol',
    text: " Other times we're actually building on top of the old things and making something a new, better, more performant, more whatever the requirement would be."
  },
  {
    startTime: 541.37,
    person: 'Annagret',
    text: ' I mean, the problem is that we have a long way to go from the real requirement, from the very first idea up to the real code.'
  },
  {
    startTime: 555.03,
    person: 'Annagret',
    text: ' And doing that way to recognise that the problem at hand is already solved is really difficult because you have to search a lot.'
  },
  {
    startTime: 566.65,
    person: 'Annagret',
    text: ' And you have to think, is it really the same problem or is it not a completely different problem, etcétera.'
  },
  {
    startTime: 574.15,
    person: 'Annagret',
    text: ' And when you have said, and I think as long when you do so much research and I have programmed it by myself.'
  },
  { startTime: 582.31, person: 'Annagret', text: ' Yeah.' },
  {
    startTime: 582.57,
    person: 'Annagret',
    text: ' And therefore, and here is, by the way, something where I think where our LMMs really can help.'
  },
  { startTime: 592.65, person: 'Karol', text: ' Okay.' },
  {
    startTime: 593.17,
    person: 'Annagret',
    text: ' Yeah, because they are fit with already solved problems.'
  },
  { startTime: 600.15, person: 'Karol', text: ' Okay.' },
  {
    startTime: 602.11,
    person: 'Annagret',
    text: ' And they can give you a reasonable solution to your problem.'
  },
  {
    startTime: 609.35,
    person: 'Annagret',
    text: " But they do all this, of course, but sometimes it's reasonable, sometimes even not."
  },
  { startTime: 615.09, person: 'Annagret', text: ' Then you can use it.' },
  { startTime: 616.85, person: 'Annagret', text: ' Yeah.' },
  {
    startTime: 617.69,
    person: 'Annagret',
    text: " But when you have a really new problems and the LMM can't solve it for you, then you have to think by yourself."
  },
  { startTime: 626.87, person: 'Karol', text: " That's true." },
  {
    startTime: 627.89,
    person: 'Karol',
    text: " There's a lot of problems we don't have to solve because they're already solved."
  },
  { startTime: 630.97, person: 'Karol', text: " It's just a lookup." },
  {
    startTime: 633.77,
    person: 'Karol',
    text: ' Other problems we have to actually think and solve for ourselves.'
  },
  {
    startTime: 638.57,
    person: 'Karol',
    text: ' I think a lot of that solving is on the structural level of architecture.'
  },
  { startTime: 645.17, person: 'Karol', text: ' Right.' },
  { startTime: 645.81, person: 'Karol', text: ' Because this is very contextual.' },
  {
    startTime: 649.49,
    person: 'Karol',
    text: ' Logically, if you look at functional requirements, a lot of them are already solved.'
  },
  { startTime: 654.75, person: 'Karol', text: " There's a lot of them that are not really new." },
  {
    startTime: 657.33,
    person: 'Karol',
    text: " They're just repetitive for a lot of companies, a lot of businesses."
  },
  { startTime: 660.91, person: 'Annagret', text: ' Definitely.' },
  {
    startTime: 661.99,
    person: 'Annagret',
    text: " But you don't know and you even don't get touch of that knowledge."
  },
  { startTime: 666.97, person: 'Annagret', text: ' Therefore, you have to reinvent it somehow.' },
  {
    startTime: 671.81,
    person: 'Annagret',
    text: ' And then you have always a teeny bit which is different.'
  },
  { startTime: 676.01, person: 'Karol', text: ' Always.' },
  {
    startTime: 678.85,
    person: 'Annagret',
    text: " I'm really convinced that we can't solve problems in a generic way."
  },
  { startTime: 686.57, person: 'Annagret', text: " It's simply too expensive." },
  {
    startTime: 688.97,
    person: 'Karol',
    text: ' I totally agree in that because if we could, everybody would be using Salesforce, SAP, Microsoft Dynamics, etc.'
  },
  { startTime: 700.83, person: 'Karol', text: ' without any changes.' },
  {
    startTime: 702.17,
    person: 'Karol',
    text: " We wouldn't need specialists in customising these platforms because all of the problems would have been solved already."
  },
  { startTime: 709.93, person: 'Annagret', text: " Luckily, it's not like that." },
  { startTime: 711.89, person: 'Annagret', text: ' So we can live on it.' },
  { startTime: 712.97, person: 'Annagret', text: ' Yes.' },
  {
    startTime: 714.49,
    person: 'Karol',
    text: " That's our bread and butter to take those platforms and do the magic that is required for each business in the context of the service."
  },
  {
    startTime: 722.83,
    person: 'Karol',
    text: " That said, today we're going to be chatting about modelling, collaborative modelling, precisely."
  },
  { startTime: 729.65, person: 'Karol', text: ' Modelling is one thing.' },
  {
    startTime: 731.03,
    person: 'Karol',
    text: ' You can just be a business analyst or architect, sit down and start modelling.'
  },
  {
    startTime: 734.93,
    person: 'Karol',
    text: ' Take a visual enterprise architect, whatever other tool, or just a piece of paper and start modelling.'
  },
  {
    startTime: 745.45,
    person: 'Karol',
    text: ' But collaborative modelling is a tiny bit different.'
  },
  {
    startTime: 750.77,
    person: 'Karol',
    text: ' So would you mind telling us what are we going to do today?'
  },
  { startTime: 755.79, person: 'Annagret', text: ' First, let me define what is a model.' },
  {
    startTime: 760.55,
    person: 'Annagret',
    text: " Because I think it's quite interesting what models we have and when you think about what is a model."
  },
  {
    startTime: 768.69,
    person: 'Annagret',
    text: " A model doesn't live to represent reality as precise as possible."
  },
  {
    startTime: 775.69,
    person: 'Annagret',
    text: ' A model lives so that you can leave out things.'
  },
  {
    startTime: 779.91,
    person: 'Annagret',
    text: ' And it needs intelligence to leave out things.'
  },
  { startTime: 784.13, person: 'Annagret', text: ' We have the atom model from Bohr.' },
  {
    startTime: 788.93,
    person: 'Annagret',
    text: ' He left out things intentionally and it works quite well.'
  },
  { startTime: 794.89, person: 'Annagret', text: " We have Schrodinger's equation." },
  {
    startTime: 797.41,
    person: 'Annagret',
    text: " By the way, I love Schrodinger's equation and I still am able to solve them for certain things."
  },
  { startTime: 805.01, person: 'Annagret', text: " And it's pure math." },
  { startTime: 806.35, person: 'Annagret', text: " It's wonderful math." },
  {
    startTime: 808.53,
    person: 'Annagret',
    text: ' And then we have our typical boxes and errors where we describe our software systems.'
  },
  {
    startTime: 816.33,
    person: 'Annagret',
    text: " And we leave out things as well there because we don't know."
  },
  {
    startTime: 820.85,
    person: 'Annagret',
    text: ' Probably when I only want to describe the logical architecture of some things and I leave out API gates, firewalls, etc.'
  },
  {
    startTime: 831.07,
    person: 'Annagret',
    text: ' And I want to do more of the network topology, of course.'
  },
  {
    startTime: 836.81,
    person: 'Annagret',
    text: ' And I need all those gateways and things which are necessary to run a successful and secure network.'
  },
  {
    startTime: 848.41,
    person: 'Annagret',
    text: ' And the bridge behind you, all those nice bridges.'
  },
  {
    startTime: 855.11,
    person: 'Annagret',
    text: ' When you draw them, of course, those drawings are just models.'
  },
  {
    startTime: 861.63,
    person: 'Annagret',
    text: " And when I put in 3D things on a 2D surface, of course, it's a model."
  },
  { startTime: 871.21, person: 'Annagret', text: ' And now we need to ask ourselves.' },
  {
    startTime: 875.15,
    person: 'Annagret',
    text: ' One has an idea and the other one has to bring that idea to reality.'
  },
  {
    startTime: 880.81,
    person: 'Annagret',
    text: ' I have the business expert and I have the IT specialist.'
  },
  {
    startTime: 887.61,
    person: 'Annagret',
    text: " And usually both don't speak the same language."
  },
  { startTime: 891.85, person: 'Karol', text: " That's true." },
  {
    startTime: 892.75,
    person: 'Karol',
    text: ' So I would just pitch in a summary, just a quick summary of what the model is.'
  },
  {
    startTime: 898.17,
    person: 'Karol',
    text: ' And I think this quote from George E.P. Box sums it up very nicely.'
  },
  { startTime: 904.43, person: 'Karol', text: ' All models are wrong, but some are useful.' },
  { startTime: 907.37, person: 'Annagret', text: ' Exactly.' },
  { startTime: 907.95, person: 'Annagret', text: ' One of my favourites.' },
  { startTime: 910.81, person: 'Karol', text: " It's a universal truth about modelling." },
  {
    startTime: 913.67,
    person: 'Karol',
    text: ' And this, I think, also ties down to the psychology of humans in essence.'
  },
  {
    startTime: 921.51,
    person: 'Karol',
    text: ' Because our brains simplify things so we can comprehend them.'
  },
  { startTime: 927.53, person: 'Karol', text: ' So our brains live on models.' },
  {
    startTime: 930.63,
    person: 'Karol',
    text: " And those models are wrong because we cannot know everything because that's impossible."
  },
  {
    startTime: 937.79,
    person: 'Karol',
    text: " But for us to cope with reality, it's essential to have those models."
  },
  {
    startTime: 943.11,
    person: 'Annagret',
    text: " And we don't need to be totally precise or 100% true."
  },
  { startTime: 950.49, person: 'Annagret', text: " It's not necessary." },
  {
    startTime: 952.01,
    person: 'Karol',
    text: " We need to be precise only as much as we need to solve the current problem that we're facing."
  },
  { startTime: 957.11, person: 'Annagret', text: ' Exactly.' },
  {
    startTime: 958.55,
    person: 'Annagret',
    text: " And the current problem we are facing is that business experts and IT specialists don't speak the same language and don't understand each other."
  },
  {
    startTime: 970.05,
    person: 'Annagret',
    text: ' And what we try with collaborative modelling techniques is that we come step by step from the business requirements to the IT solutions, but with both on the same level.'
  },
  {
    startTime: 993.51,
    person: 'Annagret',
    text: " It's always something business experts and IT specialists are doing together."
  },
  {
    startTime: 1000.91,
    person: 'Annagret',
    text: ' Because they need to find their common language.'
  },
  {
    startTime: 1004.37,
    person: 'Annagret',
    text: ' And during the whole process, they are able to find their common language.'
  },
  {
    startTime: 1011.97,
    person: 'Annagret',
    text: ' And then in the end, even the business expert understood what the IT guys are doing and the IT guys understand what the business experts are talking about.'
  },
  {
    startTime: 1025.45,
    person: 'Karol',
    text: ' So this is the essence of collaborative modelling then?'
  },
  { startTime: 1030.25, person: 'Annagret', text: ' My point of view, yes.' },
  {
    startTime: 1034.49,
    person: 'Karol',
    text: ' So where does collaborative modelling come from, you would argue?'
  },
  { startTime: 1040.349, person: 'Karol', text: " What's the origin?" },
  { startTime: 1042.55, person: 'Annagret', text: " Oh, I don't know." },
  { startTime: 1044.41, person: 'Annagret', text: ' Interesting question.' },
  {
    startTime: 1046.869,
    person: 'Annagret',
    text: ' My point of view is that you have five guys in a room with 20 opinions and in the end they need to come out with one.'
  },
  { startTime: 1060.75, person: 'Karol', text: ' The common joke?' },
  {
    startTime: 1063.49,
    person: 'Annagret',
    text: ' The thing is that software development is people business and people have to work together.'
  },
  {
    startTime: 1070.31,
    person: 'Annagret',
    text: ' And my point of view is the origin of collaborative modelling because you have to work together.'
  },
  { startTime: 1079.22, person: 'Karol', text: ' Fair enough.' },
  {
    startTime: 1080.72,
    person: 'Karol',
    text: " My usual joke is if you have four architects in the room, you'll have five different opinions."
  },
  { startTime: 1088.24, person: 'Annagret', text: " Sometimes it's more, definitely." },
  {
    startTime: 1090.42,
    person: 'Annagret',
    text: ' I think we have our architects need to be multiple personalities.'
  },
  {
    startTime: 1098.42,
    person: 'Karol',
    text: ' Multiple personalities, this order would be useful.'
  },
  {
    startTime: 1102.22,
    person: 'Annagret',
    text: ' Sometimes it should be useful as an architect, I think.'
  },
  { startTime: 1105.58, person: 'Karol', text: ' Oh, okay.' },
  { startTime: 1107.6, person: 'Karol', text: " So that said, let's set the stage." },
  {
    startTime: 1110.36,
    person: 'Karol',
    text: ' What are we going to be doing today in terms of collaborative modelling?'
  },
  {
    startTime: 1113.1,
    person: 'Annagret',
    text: ' My idea was that both of us want to establish a rental bike shop where people can rent a bike.'
  },
  { startTime: 1128.28, person: 'Karol', text: ' Okay.' },
  {
    startTime: 1129.78,
    person: 'Annagret',
    text: ' And first we need to set up a little bit of the business meetings and we have some kind of a canvas.'
  },
  {
    startTime: 1137.48,
    person: 'Annagret',
    text: ' We do it collaboratively together because the two of us need to come to one opinion.'
  },
  {
    startTime: 1145.6,
    person: 'Annagret',
    text: ' And then we need to create something where we can collect together the business requirements and we use a visual modelling for it.'
  },
  { startTime: 1156.34, person: 'Annagret', text: " It's called domain storytelling." },
  {
    startTime: 1159.18,
    person: 'Annagret',
    text: ' And then we need to find somehow how our software environment, our software landscape should look like.'
  },
  { startTime: 1170.26, person: 'Annagret', text: ' Which services we need, etcétera, etcétera.' },
  { startTime: 1172.96, person: 'Annagret', text: ' And we use event storming for it.' },
  {
    startTime: 1175.76,
    person: 'Annagret',
    text: ' And in the end, we have the AI and the AI can generate the APIs.'
  },
  { startTime: 1180.92, person: 'Annagret', text: ' More or less.' },
  { startTime: 1183.56, person: 'Karol', text: ' Sounds about great.' },
  { startTime: 1186.88, person: 'Karol', text: ' And how are we going to do this today?' },
  { startTime: 1188.86, person: 'Karol', text: ' So introduce us to the process.' },
  { startTime: 1193.46, person: 'Annagret', text: ' I have prepared something, obviously.' },
  { startTime: 1196.48, person: 'Annagret', text: ' I have here a nice micro board.' },
  { startTime: 1200.36, person: 'Annagret', text: ' So let me share the screen.' },
  { startTime: 1202.44, person: 'Annagret', text: ' I hope it works.' },
  { startTime: 1212.91, person: 'Annagret', text: ' So you should be able to see my screen.' },
  { startTime: 1216.47, person: 'Karol', text: ' There we go.' },
  { startTime: 1218.39, person: 'Annagret', text: ' And here is a nice...' },
  {
    startTime: 1222.25,
    person: 'Annagret',
    text: ' Here is a nice advertising for our rental shop.'
  },
  {
    startTime: 1232.47,
    person: 'Annagret',
    text: ' And we already have discussed how the business should look like.'
  },
  {
    startTime: 1238.11,
    person: 'Annagret',
    text: ' And the business should look like we can do it with a so-called business model canvas.'
  },
  {
    startTime: 1243.77,
    person: 'Annagret',
    text: ' It was introduced in the early 2000s by Strategizer.'
  },
  {
    startTime: 1249.41,
    person: 'Annagret',
    text: ' And what you collect here are your key partners and your key customer segments.'
  },
  { startTime: 1256.53, person: 'Annagret', text: ' Can you read that?' },
  {
    startTime: 1260.09,
    person: 'Annagret',
    text: ' As customer segments, we have commuters and tourists.'
  },
  { startTime: 1264.01, person: 'Karol', text: ' Before you jump in, a few things.' },
  {
    startTime: 1268.73,
    person: 'Karol',
    text: " So if you're following us live, this is the mirror board."
  },
  {
    startTime: 1273.63,
    person: 'Karol',
    text: ' You can scan the QR, get in there, follow us live and follow Annegret as she talks about this.'
  },
  { startTime: 1284.21, person: 'Karol', text: " I'm going to paste this on YouTube as well." },
  {
    startTime: 1287.41,
    person: 'Karol',
    text: " Right now, I'm going to drop it in the comments in LinkedIn."
  },
  {
    startTime: 1292.69,
    person: 'Karol',
    text: ' So if you would like to follow us, just use the link, pop into Miro.'
  },
  {
    startTime: 1299.97,
    person: 'Karol',
    text: ' Everybody has a viewer and I believe commenter rights, yes?'
  },
  {
    startTime: 1305.57,
    person: 'Karol',
    text: " And that way you can actually probably follow a lot easier if you just follow Annegret's cursor."
  },
  {
    startTime: 1312.79,
    person: 'Karol',
    text: ' And that way we can make it a little bit more precise and easier for everybody, I suppose.'
  },
  { startTime: 1321.69, person: 'Annagret', text: ' Thank you very much, Karol.' },
  { startTime: 1324.99, person: 'Annagret', text: " I've already hopped into it." },
  {
    startTime: 1328.13,
    person: 'Annagret',
    text: ' When you are on the mirror board following the link and you click on these, then you can see in the same zoom as me where I am and following my cursor.'
  },
  {
    startTime: 1340.27,
    person: 'Annagret',
    text: ' What I said, we have as customers, we have here commuters and tourists who want to ride a bike.'
  },
  {
    startTime: 1349.83,
    person: 'Annagret',
    text: ' And we have some kind of partners, the public transport and hotels.'
  },
  {
    startTime: 1357.07,
    person: 'Annagret',
    text: ' And then we have your key resources with bicycle and riders.'
  },
  {
    startTime: 1362.55,
    person: 'Annagret',
    text: ' And as usual in English, we even have resources as people, the mechanics who take care of our bicycles.'
  },
  {
    startTime: 1373.83,
    person: 'Annagret',
    text: ' And what we promise our customers is that we have bikes easy to book, easy to pick up, easy to return.'
  },
  {
    startTime: 1384.43,
    person: 'Annagret',
    text: ' And we hope that the tourists, okay, they are only occasional rent-a-bike, so the prices must be a little bit higher.'
  },
  {
    startTime: 1392.33,
    person: 'Annagret',
    text: ' But commuters use the bike regularly, probably twice a week otherwise the other days of a week they are at home.'
  },
  { startTime: 1404.59, person: 'Annagret', text: ' And so whole things can be done via app.' },
  {
    startTime: 1408.73,
    person: 'Annagret',
    text: ' And then we have your one-time fees and flat rates, which are paid by the customer so we can get a little bit money out of it.'
  },
  { startTime: 1417.77, person: 'Annagret', text: ' We need to have a living.' },
  {
    startTime: 1420.91,
    person: 'Annagret',
    text: " And what we have for costs are the bicycles, the racks, there's a bicycle steward, the mechanics of course want to pay as well and the app needs to be developed and maintained as well."
  },
  {
    startTime: 1435.51,
    person: 'Annagret',
    text: " And here, what I really like with such a business model canvas, as I said, I'm an electrical engineer."
  },
  {
    startTime: 1442.55,
    person: 'Annagret',
    text: " I'm not a marketing thingy or economist or something like that."
  },
  { startTime: 1448.29, person: 'Annagret', text: " It's easy to understand." },
  { startTime: 1450.13, person: 'Annagret', text: ' You have everything on one page.' },
  {
    startTime: 1452.89,
    person: 'Annagret',
    text: " You don't need to read those 30 pages of business models or business programmes with lots of sheets and Excel, etcétera."
  },
  { startTime: 1466.13, person: 'Annagret', text: ' Here you see everything which is needed.' },
  {
    startTime: 1468.91,
    person: 'Annagret',
    text: ' And that is what I really like because you get really the focus of the business.'
  },
  {
    startTime: 1474.31,
    person: 'Annagret',
    text: ' When you do it together, this business expert, you really get an idea of what they are talking about.'
  },
  { startTime: 1484.47, person: 'Annagret', text: ' And now we know that is our business.' },
  { startTime: 1486.99, person: 'Annagret', text: ' So you know what to do.' },
  { startTime: 1490.17, person: 'Annagret', text: ' You are now my business expert.' },
  {
    startTime: 1493.79,
    person: 'Annagret',
    text: ' And now I need to get out from you what you want as a commuter from the bicycle shop.'
  },
  {
    startTime: 1503.19,
    person: 'Annagret',
    text: ' So you have the role of a commuter and you need to tell me what you do as a commuter when you want to rent a bike.'
  },
  { startTime: 1513.77, person: 'Annagret', text: ' And that we can do by domain storytelling.' },
  { startTime: 1516.51, person: 'Karol', text: ' Okay.' },
  {
    startTime: 1518.45,
    person: 'Annagret',
    text: ' Domain storytelling is indeed a collaborative methodology to gather business requirements.'
  },
  {
    startTime: 1528.45,
    person: 'Annagret',
    text: ' And the trick here is that the business expert tells his story really as a story.'
  },
  {
    startTime: 1536.11,
    person: 'Annagret',
    text: ' The story has a beginning and has an end and has some kind of a climax in the middle.'
  },
  {
    startTime: 1545.23,
    person: 'Annagret',
    text: ' And you tell me the story and I, as a moderator, draw literally the story for you.'
  },
  {
    startTime: 1555.57,
    person: 'Annagret',
    text: ' And because I use a completely different language, you use natural language and I use a visual language, this visual language you can see if I understood you completely correctly or if I misunderstood you.'
  },
  { startTime: 1578.07, person: 'Karol', text: ' Okay.' },
  {
    startTime: 1578.89,
    person: 'Karol',
    text: ' For everybody watching, I want to make a disclaimer.'
  },
  { startTime: 1582.57, person: 'Karol', text: ' I did peek into this board before the stream.' },
  {
    startTime: 1587.09,
    person: 'Karol',
    text: " I have no idea because I didn't read through any of those diagrams, just to be clear."
  },
  {
    startTime: 1593.29,
    person: 'Karol',
    text: ' So I have no idea what Annegret has here for me stored.'
  },
  {
    startTime: 1598.01,
    person: 'Karol',
    text: " So as a business specialist, I'm completely, let's say, unprepared."
  },
  { startTime: 1607.01, person: 'Karol', text: " But let's make it my best." },
  { startTime: 1608.87, person: 'Karol', text: ' I do ride a bicycle.' },
  { startTime: 1610.33, person: 'Karol', text: ' I did maintain the bicycle.' },
  { startTime: 1613.01, person: 'Karol', text: ' I did rent the bicycle.' },
  {
    startTime: 1614.91,
    person: 'Karol',
    text: " So that shouldn't be that difficult of a case this time around."
  },
  {
    startTime: 1619.59,
    person: 'Annagret',
    text: " It was my intention that I have no preparation with you, since it's really lively."
  },
  { startTime: 1626.19, person: 'Annagret', text: ' Let us try if it works.' },
  { startTime: 1629.21, person: 'Annagret', text: " Now let's..." },
  {
    startTime: 1630.45,
    person: 'Annagret',
    text: ' And you know how to tell stories because you have two small kids, so you know how to tell a fairytale in the evening.'
  },
  {
    startTime: 1638.73,
    person: 'Annagret',
    text: " And now I'm your kid and you need to tell your fairytale to me."
  },
  { startTime: 1644.33, person: 'Annagret', text: ' So imagine you are a commuter.' },
  {
    startTime: 1647.81,
    person: 'Annagret',
    text: ' And two times a week or so you need to go to the office.'
  },
  {
    startTime: 1653.39,
    person: 'Annagret',
    text: " But from your home to the public transport station you can't walk."
  },
  { startTime: 1659.13, person: 'Annagret', text: ' You want to go by bicycle.' },
  {
    startTime: 1662.31,
    person: 'Annagret',
    text: " But it's too expensive for you to buy a bicycle because you do it only two times a week."
  },
  { startTime: 1670.01, person: 'Annagret', text: ' And therefore you want to rent a bicycle.' },
  {
    startTime: 1673.33,
    person: 'Annagret',
    text: ' So have that picture in mind what you are doing when you have a normal work day and you want to go to the office.'
  },
  { startTime: 1683.03, person: 'Annagret', text: ' What you are doing.' },
  {
    startTime: 1685.25,
    person: 'Karol',
    text: ' Well, given that I live in the Netherlands, there is more bikes here than people.'
  },
  { startTime: 1692.53, person: 'Karol', text: " That's a normal thing." },
  { startTime: 1696.17, person: 'Karol', text: ' But yes, okay.' },
  {
    startTime: 1697.13,
    person: 'Karol',
    text: " So my commute scenario is that I basically have a bus stop next to my home but that's true that I don't have my office next to where I get off my bus."
  },
  {
    startTime: 1709.17,
    person: 'Karol',
    text: ' So this is where I would either get into a different bus or a train or ride a bike.'
  },
  {
    startTime: 1718.71,
    person: 'Karol',
    text: " And yes, given that I go to the office once a week it's not feasible for me to drag that bike anywhere there and leave it somewhere in the city where I can actually rent a bike."
  },
  { startTime: 1732.33, person: 'Karol', text: ' So yes, where to begin from that sense?' },
  {
    startTime: 1737.69,
    person: 'Annagret',
    text: ' My imagination was that you as a commuter are at home and now take the bus to drive to the bus station.'
  },
  {
    startTime: 1749.07,
    person: 'Annagret',
    text: ' At the bus station you rent a bike which you have booked before you left the bus.'
  },
  { startTime: 1758.91, person: 'Annagret', text: ' And then you can drive to the office.' },
  { startTime: 1763.59, person: 'Karol', text: ' Okay.' },
  {
    startTime: 1764.49,
    person: 'Karol',
    text: ' Completely not a scenario that would happen in the Netherlands in that sense because there are public transport bikes.'
  },
  { startTime: 1770.99, person: 'Karol', text: " But let's assume that there is a company..." },
  {
    startTime: 1775.71,
    person: 'Annagret',
    text: " I'm from Germany so we have not so much bikes."
  },
  {
    startTime: 1778.75,
    person: 'Karol',
    text: " Yeah, you don't have that much of a bike infrastructure there."
  },
  { startTime: 1782.21, person: 'Annagret', text: " Let's assume we want to set up our..." },
  { startTime: 1785.51, person: 'Karol', text: ' All right.' },
  {
    startTime: 1786.51,
    person: 'Karol',
    text: " But let's assume that we don't have those publicly available bikes to rent from the stalls."
  },
  { startTime: 1795.61, person: 'Karol', text: ' Yes.' },
  { startTime: 1796.65, person: 'Karol', text: ' Okay.' },
  { startTime: 1797.25, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 1799.33,
    person: 'Karol',
    text: ' So I basically would be probably on the bus with my phone in my hand.'
  },
  {
    startTime: 1804.37,
    person: 'Karol',
    text: " And I was like, okay, I'm getting close to Utrecht."
  },
  {
    startTime: 1806.81,
    person: 'Karol',
    text: ' So I need to check which bike place, bike stall has bicycles available and then lock one for myself.'
  },
  { startTime: 1817.93, person: 'Karol', text: ' Right.' },
  {
    startTime: 1818.23,
    person: 'Karol',
    text: ' So go to the app and check availability on the local bike stalls.'
  },
  {
    startTime: 1824.57,
    person: 'Karol',
    text: " And if there's a bicycle available, I would probably reserve it."
  },
  {
    startTime: 1832.07,
    person: 'Annagret',
    text: ' What you see now on the screen is that I try, as I said before, I try to draw the story you tell me.'
  },
  { startTime: 1842.33, person: 'Annagret', text: ' Uh-huh.' },
  {
    startTime: 1846.15,
    person: 'Annagret',
    text: ' So and what you can see here is that I really draw it sentence by sentence.'
  },
  { startTime: 1859.71, person: 'Karol', text: ' Uh-huh.' },
  { startTime: 1859.93, person: 'Annagret', text: ' And the sentence is created from an actor.' },
  { startTime: 1863.17, person: 'Annagret', text: " As in our example, it's a commuter." },
  {
    startTime: 1866.49,
    person: 'Annagret',
    text: ' And first, as you said, he logs in into the bike app.'
  },
  { startTime: 1871.41, person: 'Annagret', text: ' Uh-huh.' },
  { startTime: 1872.13, person: 'Annagret', text: ' And searches for a bike.' },
  { startTime: 1874.07, person: 'Annagret', text: " So that's what you told me." },
  {
    startTime: 1875.19,
    person: 'Annagret',
    text: ' And I can hear, and you see here, I really can read those sentences.'
  },
  { startTime: 1884.27, person: 'Annagret', text: ' Yeah, commuter searches for a bike.' },
  { startTime: 1887.77, person: 'Karol', text: ' And you even added a bearded actor.' },
  { startTime: 1891.73, person: 'Annagret', text: ' Yeah, it was intentional.' },
  { startTime: 1894.81, person: 'Annagret', text: ' Uh-huh.' },
  { startTime: 1897.67, person: 'Karol', text: " That's nice." },
  { startTime: 1898.77, person: 'Karol', text: ' Okay.' },
  { startTime: 1900.37, person: 'Karol', text: ' So yes, so I would search for a bike.' },
  {
    startTime: 1903.47,
    person: 'Karol',
    text: ' And then if a bike is available in one of the racks, bike racks, near the train station that I get off to, then I would reserve it.'
  },
  {
    startTime: 1917.73,
    person: 'Karol',
    text: ' And then after I get off the bus, I would pick it up.'
  },
  { startTime: 1923.15, person: 'Annagret', text: ' So wait a moment.' },
  { startTime: 1924.65, person: 'Annagret', text: ' So you can reserve it.' },
  { startTime: 1930.62, person: 'Annagret', text: ' Uh-huh.' },
  { startTime: 1931.1, person: 'Annagret', text: " It's a rack." },
  { startTime: 1933.06, person: 'Karol', text: ' Uh-huh.' },
  {
    startTime: 1936.46,
    person: 'Annagret',
    text: " And then, and as you can see, it's even an electric bike here."
  },
  {
    startTime: 1944.47,
    person: 'Annagret',
    text: " So you don't have to do much work before you go to work."
  },
  {
    startTime: 1955.7,
    person: 'Karol',
    text: " Yeah, they don't want to arrive in a sweaty shirt, you know."
  },
  { startTime: 1958.9, person: 'Karol', text: " That's a good thing." },
  { startTime: 1961.38, person: 'Annagret', text: ' A question from my side.' },
  { startTime: 1964.08, person: 'Karol', text: ' Uh-huh.' },
  {
    startTime: 1965.64,
    person: 'Annagret',
    text: ' When you have, you said you reserve the bike.'
  },
  { startTime: 1972.5, person: 'Annagret', text: ' Uh-huh.' },
  { startTime: 1973.44, person: 'Annagret', text: ' And I said you book the bike.' },
  {
    startTime: 1977.8,
    person: 'Annagret',
    text: ' What do you think, which word would be better?'
  },
  { startTime: 1981.36, person: 'Annagret', text: ' Reserves or books?' },
  { startTime: 1985.28, person: 'Karol', text: ' I would say reservation is a better word.' },
  {
    startTime: 1988.6,
    person: 'Karol',
    text: " Because booking is, like, if I put it from a language perspective, how we use the word to book something, it's usually associated with booking a room, booking hotels."
  },
  { startTime: 2000.28, person: 'Karol', text: ' So this is more of a permanent action.' },
  {
    startTime: 2003.22,
    person: 'Karol',
    text: ' And in booking, you also have a reservation before you book.'
  },
  { startTime: 2006.22, person: 'Karol', text: ' But booking is, you already pay for it.' },
  { startTime: 2008.64, person: 'Karol', text: ' So that implies paying.' },
  { startTime: 2010.74, person: 'Karol', text: " Here, I wouldn't pay." },
  { startTime: 2012.9, person: 'Karol', text: ' I would reserve the bike.' },
  {
    startTime: 2014.56,
    person: 'Karol',
    text: ' And then when I pick it up and when I probably leave it, I would pay for it, for the actual time I use it.'
  },
  {
    startTime: 2020.88,
    person: 'Karol',
    text: " So that would be, that's why I would say reserve is probably better as a word."
  },
  { startTime: 2028.24, person: 'Annagret', text: ' Okay.' },
  {
    startTime: 2030.04,
    person: 'Annagret',
    text: ' Beforehand, I go back here to our model canvas.'
  },
  { startTime: 2034.94, person: 'Karol', text: ' Uh-huh.' },
  {
    startTime: 2035.92,
    person: 'Annagret',
    text: ' We said that the commuters usually pay a flat rate.'
  },
  { startTime: 2041.06, person: 'Annagret', text: ' Uh-huh.' },
  { startTime: 2042.6, person: 'Annagret', text: ' For a month or something like that.' },
  {
    startTime: 2045.32,
    person: 'Annagret',
    text: " But even then, it would be better to write reserves because you don't pay for a single ride."
  },
  { startTime: 2051.32, person: 'Annagret', text: ' You pay a flat rate.' },
  {
    startTime: 2053.42,
    person: 'Annagret',
    text: ' And then you reserve the bike and not book it.'
  },
  {
    startTime: 2057.6,
    person: 'Karol',
    text: ' That would mean that we probably then have another revenue stream, which is pay-per-use.'
  },
  { startTime: 2067.719, person: 'Annagret', text: ' Exactly.' },
  {
    startTime: 2069.1,
    person: 'Annagret',
    text: " And that is what it's really, I like it, what really happens quite often when you now go more into the deeper side."
  },
  { startTime: 2079.44, person: 'Annagret', text: ' Uh-huh.' },
  { startTime: 2081.86, person: 'Karol', text: ' Uh-huh.' },
  {
    startTime: 2083.679,
    person: 'Annagret',
    text: ' That we have here a pay-for-use, even for...'
  },
  { startTime: 2089.969, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 2091.09,
    person: 'Karol',
    text: " You know, that is actually a model that used to, I don't know if it's still there, but it used to work in Poland."
  },
  { startTime: 2099.39, person: 'Karol', text: ' Oh.' },
  { startTime: 2101.19, person: 'Karol', text: ' I think we lost Annegret.' },
  { startTime: 2109.36, person: 'Karol', text: " Not sure if it's on my side or..." },
  { startTime: 2112.66, person: 'Karol', text: " No, it's Annegret's side, unfortunately." },
  { startTime: 2118.08, person: 'Karol', text: ' So, yeah, there we go.' },
  { startTime: 2120.3, person: 'Karol', text: ' Annegret is back.' },
  { startTime: 2121.7, person: 'Karol', text: " Hello, hello, you're back." },
  { startTime: 2123.22, person: 'Karol', text: ' Yes, we lost you for a second.' },
  { startTime: 2126.12, person: 'Karol', text: ' We lost you for a second there.' },
  { startTime: 2128.82, person: 'Karol', text: ' All right.' },
  { startTime: 2130.18, person: 'Karol', text: " I think you're still..." },
  {
    startTime: 2130.96,
    person: 'Karol',
    text: " Yes, you're still screen sharing, so there we go."
  },
  { startTime: 2134.36, person: 'Karol', text: ' Glad you have your back.' },
  { startTime: 2135.32, person: 'Karol', text: ' Glad that it was just a hiccup.' },
  { startTime: 2137.48, person: 'Annagret', text: ' Yeah, it was some kind...' },
  { startTime: 2139.06, person: 'Annagret', text: ' But I really like here.' },
  {
    startTime: 2141.3,
    person: 'Annagret',
    text: ' We see we need an additional revenue stream, which is, in the end, even an additional requirement.'
  },
  { startTime: 2149.96, person: 'Annagret', text: ' And we discuss words.' },
  { startTime: 2153.44, person: 'Karol', text: ' Uh-huh.' },
  {
    startTime: 2153.92,
    person: 'Annagret',
    text: ' And because we discuss words and decide for a certain word, we understand better what is meant.'
  },
  { startTime: 2162.4, person: 'Annagret', text: ' Reserve, books, etcétera.' },
  { startTime: 2164.7, person: 'Annagret', text: ' Yeah.' },
  { startTime: 2165.88, person: 'Karol', text: ' And I took it just from the model that was...' },
  {
    startTime: 2171.28,
    person: 'Karol',
    text: ' The way it worked in Poland, because I used to actually rent bikes in Warsaw when I was living in Warsaw.'
  },
  {
    startTime: 2177.94,
    person: 'Karol',
    text: ' There were plenty of publicly available bike stations with a, well, some sort of a booth where you could click through and get a bike that was currently locked in.'
  },
  { startTime: 2190.86, person: 'Karol', text: ' And the lock just opened when you paid.' },
  {
    startTime: 2193.98,
    person: 'Karol',
    text: ' If you had an app, had some sort of a flat rate, that was different.'
  },
  { startTime: 2198.06, person: 'Karol', text: ' But usually you just paid as you went.' },
  { startTime: 2201.28, person: 'Karol', text: " And I'm very much used to that." },
  {
    startTime: 2203.46,
    person: 'Karol',
    text: " And because my usage is random, and once a week, let's say, then this wouldn't make sense for me to pay a flat rate."
  },
  { startTime: 2211.52, person: 'Annagret', text: ' Mm-hmm.' },
  { startTime: 2212.9, person: 'Annagret', text: ' Yeah, exactly, exactly.' },
  { startTime: 2215.04, person: 'Annagret', text: ' So, and now we have...' },
  { startTime: 2216.58, person: 'Annagret', text: ' So, you have to reserve the bike.' },
  { startTime: 2218.82, person: 'Karol', text: ' Yes.' },
  { startTime: 2219.2, person: 'Annagret', text: ' At a certain rate.' },
  { startTime: 2221.48, person: 'Karol', text: ' Uh-huh.' },
  { startTime: 2221.58, person: 'Annagret', text: ' So, and then we have here the system.' },
  {
    startTime: 2225.27,
    person: 'Annagret',
    text: ' And the system then sends you some kind of...'
  },
  { startTime: 2232.83, person: 'Annagret', text: ' Oh, I need a nicer icon for it.' },
  { startTime: 2235.83, person: 'Annagret', text: ' Sends you some kind of a code.' },
  { startTime: 2239.67, person: 'Karol', text: ' Mm-hmm.' },
  { startTime: 2252.6, person: 'Annagret', text: ' Yeah, no?' },
  {
    startTime: 2254.84,
    person: 'Karol',
    text: ' As in a reservation code or something like that?'
  },
  {
    startTime: 2257.98,
    person: 'Annagret',
    text: ' After the reservation, sends a code to your app.'
  },
  { startTime: 2265.34, person: 'Annagret', text: ' Mm-hmm.' },
  {
    startTime: 2269.23,
    person: 'Annagret',
    text: ' So, and when you then are at the train station, Mm-hmm.'
  },
  {
    startTime: 2276.45,
    person: 'Annagret',
    text: ' or wherever you leave the whole public transport, you can unlock the bike, and then you can ride the bike, right?'
  },
  { startTime: 2298.85, person: 'Karol', text: ' Right.' },
  {
    startTime: 2300.29,
    person: 'Annagret',
    text: " So, and what you see here, it's really a story in the sense of a story, and it's really drawn somehow, yeah?"
  },
  { startTime: 2312.73, person: 'Karol', text: ' Yes, very much so.' },
  {
    startTime: 2315.79,
    person: 'Annagret',
    text: " So, and because I draw as a story, the business expert can really see if I understood him correctly or not, because it's a completely different language I use here, yeah?"
  },
  { startTime: 2337.47, person: 'Annagret', text: ' Okay, now...' },
  { startTime: 2338.07, person: 'Annagret', text: ' I listen to a natural language.' },
  {
    startTime: 2341.03,
    person: 'Karol',
    text: ' Yeah, now the question would be, in this kind of modelling, how would you approach variations?'
  },
  {
    startTime: 2349.77,
    person: 'Karol',
    text: ' Because we already identified the different revenue stream, that basically somebody would act differently, right?'
  },
  {
    startTime: 2358.11,
    person: 'Karol',
    text: ' Is this like use case per use case modelling, or we can actually build variations on the same model?'
  },
  { startTime: 2366.73, person: 'Annagret', text: ' It depends.' },
  { startTime: 2368.91, person: 'Annagret', text: ' Good answer, right?' },
  { startTime: 2371.95, person: 'Karol', text: ' Only always.' },
  {
    startTime: 2375.31,
    person: 'Annagret',
    text: " To be honest, such a story should not contain more than 12 to 15 sentences, because otherwise you can't read them anymore."
  },
  { startTime: 2388.63, person: 'Karol', text: ' Okay, fair enough.' },
  {
    startTime: 2389.41,
    person: 'Annagret',
    text: " It's always a good idea to model different user groups in different stories."
  },
  {
    startTime: 2398.61,
    person: 'Annagret',
    text: ' As we add here, we have the commuters and we have the tourists, which are completely different requirements, usually.'
  },
  { startTime: 2408.77, person: 'Karol', text: ' Okay, yes, fair enough.' },
  {
    startTime: 2411.61,
    person: 'Annagret',
    text: ' Usually, in my experience, I did those workshops a lot of times, you have a lot of business experts, and the business experts are mostly like architects, each has his own opinion and sometimes multiple opinions.'
  },
  { startTime: 2428.67, person: 'Annagret', text: ' Yes.' },
  {
    startTime: 2428.93,
    person: 'Annagret',
    text: ' But really, when they see how those stories appear, they come together to a common understanding.'
  },
  {
    startTime: 2437.63,
    person: 'Annagret',
    text: " It's really the dynamic in the workshop which makes those things so valuable."
  },
  {
    startTime: 2444.63,
    person: 'Annagret',
    text: " As you can't prepare it, you need to be seen to start with a white canvas and see what happens."
  },
  { startTime: 2455.75, person: 'Annagret', text: ' As I did this evening.' },
  {
    startTime: 2458.93,
    person: 'Annagret',
    text: ' And you see, even if you were not prepared, even so, we could draw a story.'
  },
  { startTime: 2472.05, person: 'Karol', text: ' Yes.' },
  {
    startTime: 2472.73,
    person: 'Karol',
    text: " And now imagine if you take an unprepared, let's say, product owner or a business owner or a director or anyhow, we assume that they do know and understand their business on a certain level of abstraction, which basically means that they will be able to model this way."
  },
  {
    startTime: 2493.39,
    person: 'Karol',
    text: " Because they'll be just telling you about their business."
  },
  { startTime: 2496.55, person: 'Annagret', text: ' Exactly.' },
  {
    startTime: 2497.57,
    person: 'Annagret',
    text: ' And because you need to draw, you need to listen.'
  },
  { startTime: 2501.71, person: 'Annagret', text: ' Listen quite carefully.' },
  {
    startTime: 2504.29,
    person: 'Annagret',
    text: ' And then you get really a common picture for both of us, for both of them.'
  },
  { startTime: 2511.73, person: 'Annagret', text: ' You asked me about variations.' },
  {
    startTime: 2514.21,
    person: 'Annagret',
    text: " What you usually don't do is that you model error paths."
  },
  {
    startTime: 2522.83,
    person: 'Annagret',
    text: ' You only model the happy path in that situation.'
  },
  {
    startTime: 2528.57,
    person: 'Annagret',
    text: ' What can you do is that you use it as a threat modelling.'
  },
  {
    startTime: 2534.95,
    person: 'Annagret',
    text: ' Because here you can say, okay, probably the rack could be hacked by gangsters.'
  },
  { startTime: 2544.43, person: 'Annagret', text: ' And steal all the bicycles.' },
  {
    startTime: 2548.65,
    person: 'Annagret',
    text: ' And that you can see here, you can model it a little bit.'
  },
  {
    startTime: 2551.77,
    person: 'Annagret',
    text: " But usually you don't only do the happy path and do variations only by user groups."
  },
  {
    startTime: 2560.07,
    person: 'Annagret',
    text: ' When you have different business experts, you need two or three of them telling the same story.'
  },
  {
    startTime: 2567.39,
    person: 'Annagret',
    text: ' And then you have really a good and valuable and strong story for your business.'
  },
  {
    startTime: 2576.62,
    person: 'Karol',
    text: ' Okay, this reminds me about a technique I learned.'
  },
  { startTime: 2583.14, person: 'Karol', text: ' That was this and the previous Monday.' },
  {
    startTime: 2587.6,
    person: 'Karol',
    text: " And I'm going to struggle finding it in the book because that's business analysis."
  },
  {
    startTime: 2593.22,
    person: 'Karol',
    text: " And of course, I'm not yet familiar enough with the book."
  },
  { startTime: 2597.84, person: 'Karol', text: " So even the name doesn't pop up in my head." },
  { startTime: 2600.66, person: 'Karol', text: ' But basically, oh, that was BAM.' },
  { startTime: 2603.62, person: 'Karol', text: ' Business activity model.' },
  { startTime: 2609.36, person: 'Annagret', text: ' Yeah, it goes in that direction, definitely.' },
  {
    startTime: 2616.58,
    person: 'Karol',
    text: ' It resembles the business activity model because these are the steps that are...'
  },
  { startTime: 2624.02, person: 'Karol', text: ' Exactly.' },
  {
    startTime: 2624.62,
    person: 'Karol',
    text: " Business activity model is something a little bit different because it's planning, then enablement, then doing something."
  },
  {
    startTime: 2635.78,
    person: 'Karol',
    text: " So the actual business thing that we're doing and then monitoring and then corrections."
  },
  {
    startTime: 2642.68,
    person: 'Karol',
    text: ' But this is a little bit in that direction as well.'
  },
  {
    startTime: 2646.54,
    person: 'Annagret',
    text: ' It goes in the direction because you have the actors, you have the activities, you have the objects.'
  },
  {
    startTime: 2653.82,
    person: 'Annagret',
    text: ' You have work items which the actors are doing.'
  },
  { startTime: 2659.22, person: 'Annagret', text: ' I really like the icons.' },
  {
    startTime: 2662.14,
    person: 'Annagret',
    text: ' And I can give those model everyone and everyone who is a little bit in the domain understands it.'
  },
  { startTime: 2670.6, person: 'Annagret', text: ' And that is what I really like.' },
  {
    startTime: 2674.48,
    person: 'Annagret',
    text: " And of course, I prepared here a certain story I want to show you because it's not so much different from what you told me."
  },
  {
    startTime: 2682.38,
    person: 'Karol',
    text: " Just to comment on this, what we're doing right now with the main storytelling is nothing related to IT per se."
  },
  { startTime: 2691.02, person: 'Karol', text: " It's understanding the business." },
  {
    startTime: 2692.58,
    person: 'Karol',
    text: " It's building our understanding of the problem domain we're going to be tackling from perspective of an IT system."
  },
  { startTime: 2700.54, person: 'Annagret', text: ' Exactly.' },
  { startTime: 2707.61, person: 'Annagret', text: ' Let me come to our example.' },
  { startTime: 2710.53, person: 'Annagret', text: ' Let me show you what I prepared.' },
  {
    startTime: 2714.61,
    person: 'Annagret',
    text: " Here's a mechanic brings a bicycle to the rack and the community registered in the app pays a monthly fee."
  },
  { startTime: 2723.85, person: 'Annagret', text: " Here it's a nice computer." },
  {
    startTime: 2725.47,
    person: 'Annagret',
    text: ' He pays a monthly fee via the app, searches for a bicycle at the public transport station, then books the bicycle.'
  },
  {
    startTime: 2736.33,
    person: 'Annagret',
    text: ' Here I use books, for example, via the app, gets the code, unlocks the bicycle, gets the code at the rack, and then the commuter drives home with a bicycle and then returns the bicycle at the rack near his home and confirms the return via code.'
  },
  { startTime: 2761.73, person: 'Karol', text: ' Okay.' },
  {
    startTime: 2763.37,
    person: 'Annagret',
    text: " When you see here the first image, it's not so different from what you told."
  },
  {
    startTime: 2768.65,
    person: 'Annagret',
    text: ' But you can see here, and I want to stop you with your problem domain, what you really can do even here is that you see here we have different roles and different work items.'
  },
  {
    startTime: 2787.19,
    person: 'Annagret',
    text: " And when you have a step inside of the work items or in a changed role, then usually it's a hint that there are different business contexts."
  },
  {
    startTime: 2801.45,
    person: 'Annagret',
    text: ' And then we are already in the solution domain.'
  },
  {
    startTime: 2804.97,
    person: 'Annagret',
    text: ' For not so complex problems, you really can do and define the business context even with the domain storytelling.'
  },
  {
    startTime: 2816.85,
    person: 'Annagret',
    text: " You don't need to go in the events domain because it's a nice methodology as well."
  },
  {
    startTime: 2825.19,
    person: 'Annagret',
    text: " But you don't need it for easy problems and when you have probably even an already existing system, then you can do it just out of the domain storytelling."
  },
  {
    startTime: 2837.45,
    person: 'Annagret',
    text: ' You can define your bounded context, as I did here.'
  },
  { startTime: 2842.87, person: 'Annagret', text: ' Here we have the risk management, etcétera.' },
  {
    startTime: 2845.85,
    person: 'Annagret',
    text: ' And then you can even define already your bounded context on your server landscape.'
  },
  {
    startTime: 2856.25,
    person: 'Karol',
    text: " Now I'll just comment one thing because you said we're already going to the solution."
  },
  {
    startTime: 2862.77,
    person: 'Karol',
    text: ' Just to make clear, the solution here is not meant as solution architecture.'
  },
  {
    startTime: 2869.39,
    person: 'Karol',
    text: " We're not dealing with an actual design of a system understood as IT system."
  },
  { startTime: 2876.91, person: 'Karol', text: " We're solutioning for the problem." },
  {
    startTime: 2879.95,
    person: 'Karol',
    text: " So we're still in the abstraction of a business problem and solutioning that business problem."
  },
  { startTime: 2886.67, person: 'Karol', text: ' To a large extent.' },
  { startTime: 2888.67, person: 'Karol', text: " That's still that high level of abstraction." },
  { startTime: 2890.65, person: 'Annagret', text: " It's a high level of abstraction." },
  { startTime: 2892.83, person: 'Annagret', text: ' I completely miss you.' },
  {
    startTime: 2894.55,
    person: 'Annagret',
    text: ' But when you go in the direction that a bounded context as a team is a service, then I already defined here my services.'
  },
  { startTime: 2907.17, person: 'Annagret', text: ' On a very high level, completely agreed.' },
  {
    startTime: 2912.15,
    person: 'Annagret',
    text: " But I'm already in so far in the solution design because I already defined the service borders."
  },
  { startTime: 2921.45, person: 'Karol', text: ' Yes.' },
  {
    startTime: 2922.43,
    person: 'Karol',
    text: " As every word in our dictionaries when we work on different problems, it's going to be different because I try to explain to people what's the difference between architecture and solutioning."
  },
  {
    startTime: 2935.61,
    person: 'Karol',
    text: " And that's always a bit of a conversation that we're having with different architects, especially those that are fresh out of a team lead, dev lead role."
  },
  {
    startTime: 2948.93,
    person: 'Karol',
    text: ' When I ask them to show me their architecture, they show me their solution.'
  },
  { startTime: 2955.87, person: 'Karol', text: " So it's not an architecture." },
  { startTime: 2958.29, person: 'Karol', text: " It's an instantiation of an architecture." },
  {
    startTime: 2960.49,
    person: 'Karol',
    text: " That's why I'm making that remark about the solution because it's, again, a different solution."
  },
  { startTime: 2966.25, person: 'Karol', text: " We're logically solving the problem." },
  {
    startTime: 2970.17,
    person: 'Karol',
    text: ' We already have a logical dissemination of services, but it has nothing to do with implementation or technology underneath.'
  },
  { startTime: 2978.29, person: 'Annagret', text: ' Definitely not.' },
  { startTime: 2980.59, person: 'Annagret', text: " It's about logical tailoring." },
  { startTime: 2983.69, person: 'Annagret', text: ' Yes.' },
  {
    startTime: 2984.49,
    person: 'Karol',
    text: " That's the remark I'm making because we're not jumping yet to any implementation and we'll probably not be jumping to anything related to implementation here at all during this session."
  },
  { startTime: 2996.91, person: 'Karol', text: " Let's see." },
  { startTime: 2998.19, person: 'Karol', text: " Let's see." },
  { startTime: 2999.09, person: 'Karol', text: ' Okay.' },
  { startTime: 3000.67, person: 'Karol', text: " You'll surprise us." },
  {
    startTime: 3002.13,
    person: 'Annagret',
    text: " I mean, it's midnight, but probably we'll come to it."
  },
  { startTime: 3008.37, person: 'Karol', text: " Let's not take it to midnight." },
  {
    startTime: 3010.15,
    person: 'Annagret',
    text: ' Another one of my most loved technologies is so-called visual glossary.'
  },
  {
    startTime: 3020.35,
    person: 'Annagret',
    text: ' What you do here is that you took here, we have certain terms.'
  },
  { startTime: 3024.77, person: 'Annagret', text: " Here's a mechanic." },
  { startTime: 3025.99, person: 'Annagret', text: ' We have the bicycle.' },
  { startTime: 3026.99, person: 'Annagret', text: ' We have the rack.' },
  { startTime: 3028.33, person: 'Annagret', text: ' We have a fee, etcétera, etcétera.' },
  {
    startTime: 3031.85,
    person: 'Annagret',
    text: ' Here we have, even without going into the details, a different story from a tourist.'
  },
  {
    startTime: 3039.21,
    person: 'Annagret',
    text: " With the tourists, we even have the hotel because there we don't have the rack."
  },
  { startTime: 3043.43, person: 'Annagret', text: ' We have the hotel.' },
  {
    startTime: 3046.41,
    person: 'Annagret',
    text: ' All those terms you collect together and then you bring them, you explain them not by sentence.'
  },
  {
    startTime: 3055.43,
    person: 'Annagret',
    text: ' You explain them by their relationship to each other.'
  },
  { startTime: 3063.73, person: 'Karol', text: ' Okay.' },
  { startTime: 3064.39, person: 'Annagret', text: ' When you see here, we have the hotel.' },
  { startTime: 3067.57, person: 'Annagret', text: ' The hotel charges owe to undefined fees.' },
  { startTime: 3075.91, person: 'Annagret', text: ' Yeah.' },
  {
    startTime: 3076.03,
    person: 'Karol',
    text: " That's very close to, well, basically a class diagram."
  },
  { startTime: 3083.11, person: 'Annagret', text: ' Exactly.' },
  {
    startTime: 3084.65,
    person: 'Annagret',
    text: " When you're used to draw domain models as class diagram, it's very close to it."
  },
  {
    startTime: 3095.11,
    person: 'Annagret',
    text: ' What I like first, I can do it quite nicely with sticky notes on Miro.'
  },
  {
    startTime: 3101.93,
    person: 'Annagret',
    text: ' I do it definitely during workshops and discuss it with the business guys.'
  },
  {
    startTime: 3111.85,
    person: 'Annagret',
    text: ' Then I can discuss all the terms with the business guys.'
  },
  { startTime: 3116.35, person: 'Karol', text: ' Right.' },
  { startTime: 3117.41, person: 'Annagret', text: ' Yeah.' },
  {
    startTime: 3118.13,
    person: 'Annagret',
    text: " When you are used to work in enterprise environment like me, then you have business guys who speak their native language as in Germany, it's quite usual that you have an enterprise environment."
  },
  {
    startTime: 3139.77,
    person: 'Annagret',
    text: " You have German terms, but you don't want probably to have all those German terms in your code because you want to be a nationalised etcétera, etcétera."
  },
  {
    startTime: 3153.13,
    person: 'Annagret',
    text: ' Then you can do those things even in two languages.'
  },
  {
    startTime: 3157.91,
    person: 'Annagret',
    text: ' Fee in German would be Gebühr, nice German word, even with a German umlaut.'
  },
  {
    startTime: 3166.29,
    person: 'Annagret',
    text: ' Then you can do it even in two languages when needed.'
  },
  { startTime: 3170.41, person: 'Karol', text: ' Yes.' },
  {
    startTime: 3171.53,
    person: 'Annagret',
    text: " What you do here, what you see here, I don't have those usual relationship of a class diagram with aggregate or composite."
  },
  {
    startTime: 3184.44,
    person: 'Annagret',
    text: ' Since I always have here strong verbs as a hotel charges fee, tourist pays fee, hotel, stores, bicycle, etcétera.'
  },
  {
    startTime: 3196.81,
    person: 'Annagret',
    text: ' Because I use those strong verbs, the whole diagram is more expressive than a simple class diagram.'
  },
  { startTime: 3207.51, person: 'Karol', text: ' Right.' },
  {
    startTime: 3208.25,
    person: 'Karol',
    text: " Because the class diagram doesn't have those verbs on the transition between classes."
  },
  {
    startTime: 3213.51,
    person: 'Annagret',
    text: ' Of course, you can do it with just a relationship arrow.'
  },
  { startTime: 3219.09, person: 'Annagret', text: ' I mean, yeah.' },
  {
    startTime: 3221.73,
    person: 'Annagret',
    text: ' Because we use not so strange arrow forms like we know them from our nice UML diagrams.'
  },
  { startTime: 3236.51, person: 'Karol', text: ' Yes.' },
  {
    startTime: 3238.83,
    person: 'Annagret',
    text: ' The business guys understands even that diagram.'
  },
  { startTime: 3243.51, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 3243.81,
    person: 'Karol',
    text: ' Otherwise, it would be very confusing for a lot of people and that would be problematic.'
  },
  { startTime: 3248.67, person: 'Annagret', text: " As a visual glossary, it's not so confusing." },
  { startTime: 3253.09, person: 'Karol', text: ' No.' },
  {
    startTime: 3253.81,
    person: 'Karol',
    text: ' But if we would start using UML notation in this kind of a diagram, it would be very, very problematic for a lot of people.'
  },
  {
    startTime: 3263.43,
    person: 'Annagret',
    text: " Therefore, I really like a visual glossary because it's really expressive."
  },
  { startTime: 3269.91, person: 'Annagret', text: ' And you can draw it with everything.' },
  {
    startTime: 3273.27,
    person: 'Annagret',
    text: ' You can draw it with Draw.io, with Miro as I did here or whatever.'
  },
  { startTime: 3278.99, person: 'Karol', text: ' Or just whiteboard it.' },
  { startTime: 3280.61, person: 'Annagret', text: ' And just a whiteboard.' },
  { startTime: 3282.47, person: 'Annagret', text: ' And it really helps the understanding.' },
  {
    startTime: 3286.25,
    person: 'Annagret',
    text: ' And to be honest, I really use it almost every day in discussion.'
  },
  {
    startTime: 3290.69,
    person: 'Annagret',
    text: ' When I feel something goes wrong in a discussion, then I open a whiteboard and say, let us define our terms.'
  },
  { startTime: 3303.47, person: 'Annagret', text: ' And not with words.' },
  { startTime: 3305.13, person: 'Annagret', text: ' Just with relationships to each other.' },
  { startTime: 3308.89, person: 'Annagret', text: ' And it really is a strong method.' },
  {
    startTime: 3312.83,
    person: 'Annagret',
    text: ' Unfortunately, there is only one book that explains and that book is only in German from Stefan Zörner.'
  },
  {
    startTime: 3322.39,
    person: 'Annagret',
    text: " But for me, it's one of the most powerful techniques we have."
  },
  { startTime: 3331.71, person: 'Annagret', text: ' And you can do it collaboratively.' },
  {
    startTime: 3334.57,
    person: 'Annagret',
    text: ' You collect collaboratively all the terms and then you put what is really the relationship to each other.'
  },
  { startTime: 3342.07, person: 'Karol', text: ' Right.' },
  {
    startTime: 3345.45,
    person: 'Karol',
    text: " I'll try to remember to post all the links to all the relevant books."
  },
  { startTime: 3352.09, person: 'Karol', text: ' Sometime later in the description.' },
  {
    startTime: 3355.61,
    person: 'Karol',
    text: " But if I can, I'll post them as well as soon as I have the links."
  },
  { startTime: 3363.05, person: 'Karol', text: ' I just need to put them as QR codes.' },
  {
    startTime: 3364.59,
    person: 'Karol',
    text: " So you'll be seeing those QR codes soon enough on screen."
  },
  { startTime: 3369.85, person: 'Karol', text: ' All right.' },
  { startTime: 3371.23, person: 'Karol', text: ' What next?' },
  { startTime: 3372.73, person: 'Annagret', text: ' What next?' },
  {
    startTime: 3373.49,
    person: 'Annagret',
    text: ' Now, let us assume we have all our business requirements we collect together.'
  },
  {
    startTime: 3380.25,
    person: 'Annagret',
    text: ' And I showed you that even at that stage, you can define some kind of logical structure of your services.'
  },
  {
    startTime: 3389.23,
    person: 'Annagret',
    text: " But you are not sure and you even don't know really which data need to be exchanged between the services."
  },
  { startTime: 3398.09, person: 'Annagret', text: ' And therefore, we can do an event storming.' },
  {
    startTime: 3403.59,
    person: 'Annagret',
    text: ' Event storming, probably the one or the other had already heard of it.'
  },
  {
    startTime: 3408.29,
    person: 'Annagret',
    text: " It's quite common in the area of software development."
  },
  {
    startTime: 3416.39,
    person: 'Annagret',
    text: ' What you do here is that we do a so-called overview event storming to find our bounded context.'
  },
  {
    startTime: 3425.45,
    person: 'Annagret',
    text: ' And we collect first all the events in our story.'
  },
  { startTime: 3432.29, person: 'Annagret', text: ' We have already our domain story.' },
  {
    startTime: 3434.69,
    person: 'Annagret',
    text: ' And then we collect the event happening there.'
  },
  { startTime: 3444.33, person: 'Annagret', text: ' So probably, let me show you.' },
  { startTime: 3446.55, person: 'Annagret', text: ' And the events are already orange.' },
  {
    startTime: 3449.63,
    person: 'Annagret',
    text: ' So which event you would see in our story or in the story you told me?'
  },
  { startTime: 3456.49, person: 'Karol', text: " Let's see." },
  { startTime: 3457.57, person: 'Karol', text: ' Well, one event on beginning my commute.' },
  { startTime: 3471.02, person: 'Annagret', text: ' Yeah.' },
  {
    startTime: 3473.68,
    person: 'Annagret',
    text: ' So an event is already something with an object.'
  },
  { startTime: 3480.72, person: 'Annagret', text: ' Here we have the commute.' },
  { startTime: 3483, person: 'Annagret', text: ' And then a verb in the past, started.' },
  {
    startTime: 3488.96,
    person: 'Annagret',
    text: " And what you do in the event storming, therefore it's called storming."
  },
  { startTime: 3493.1, person: 'Annagret', text: ' You have that storming phase.' },
  {
    startTime: 3495.68,
    person: 'Annagret',
    text: ' And everyone in the room is collecting those events.'
  },
  {
    startTime: 3501,
    person: 'Annagret',
    text: " It's really nice when you do it with really physical sticky notes."
  },
  { startTime: 3504.92, person: 'Annagret', text: ' But you can do it on a micro board as well.' },
  { startTime: 3508.8, person: 'Annagret', text: " And it's not as dynamic." },
  { startTime: 3510.96, person: 'Karol', text: ' True.' },
  { startTime: 3512.26, person: 'Annagret', text: ' But you can do it on a whiteboard as well.' },
  {
    startTime: 3514.52,
    person: 'Annagret',
    text: ' And then everyone is collecting those events for her or himself.'
  },
  {
    startTime: 3522.52,
    person: 'Annagret',
    text: " And it's an idea of the brainstorming technique developed in the 16th last century."
  },
  {
    startTime: 3533.32,
    person: 'Annagret',
    text: ' Where you first create quantities and then out of the quantities you get the quality.'
  },
  { startTime: 3542.56, person: 'Karol', text: ' Okay.' },
  {
    startTime: 3544.52,
    person: 'Karol',
    text: " So to be able to get an idea of how extensive event storming is, here's a picture of a wall."
  },
  { startTime: 3552.94, person: 'Karol', text: ' After event storming.' },
  {
    startTime: 3554.82,
    person: 'Karol',
    text: ' This is the full event storming of some sort of a situation.'
  },
  { startTime: 3558.18, person: 'Karol', text: ' I just took it from Google.' },
  {
    startTime: 3560.44,
    person: 'Karol',
    text: ' But basically if you run event storming sessions in a room, you need quite a few metres of a wall.'
  },
  {
    startTime: 3569.78,
    person: 'Karol',
    text: ' Lots of whiteboards or lots of paper or lots of glass panes to be able to do that.'
  },
  {
    startTime: 3575.9,
    person: 'Karol',
    text: " Because we're now dealing with a very simple exercise."
  },
  { startTime: 3581.52, person: 'Karol', text: ' So our event storming will be very short.' },
  {
    startTime: 3583.44,
    person: 'Karol',
    text: ' But in general, most event stormings are very detailed and very long.'
  },
  {
    startTime: 3587.8,
    person: 'Karol',
    text: " Because business processes are far more complex than what we're modelling today."
  },
  { startTime: 3594.44, person: 'Annagret', text: ' Far more.' },
  { startTime: 3596.58, person: 'Annagret', text: ' There are even more simple examples.' },
  { startTime: 3601.82, person: 'Karol', text: ' Of course.' },
  { startTime: 3603.02, person: 'Annagret', text: ' We have here the commute started.' },
  { startTime: 3605.54, person: 'Annagret', text: ' What other events did you come up with?' },
  { startTime: 3608.9, person: 'Karol', text: " Let's see." },
  { startTime: 3609.64, person: 'Karol', text: ' Commute started.' },
  {
    startTime: 3611.46,
    person: 'Karol',
    text: " I'm back at the main storytelling right now on my screen."
  },
  {
    startTime: 3617.02,
    person: 'Karol',
    text: " I would say probably user, as a commuter, I'm logged into the app."
  },
  { startTime: 3626.58, person: 'Karol', text: ' So, yes.' },
  { startTime: 3629.12, person: 'Annagret', text: ' I thought logged in.' },
  { startTime: 3631.46, person: 'Karol', text: ' Logged in.' },
  { startTime: 3632.36, person: 'Karol', text: ' Yeah, I suppose.' },
  { startTime: 3634.1, person: 'Karol', text: ' Commuter logged in.' },
  { startTime: 3635.98, person: 'Karol', text: ' Yeah.' },
  { startTime: 3637.32, person: 'Karol', text: ' Then possibly bicycles found.' },
  { startTime: 3648.9, person: 'Karol', text: ' Bikes found.' },
  { startTime: 3654.56, person: 'Karol', text: ' Then bike chosen.' },
  { startTime: 3659, person: 'Karol', text: ' And bike reserved.' },
  {
    startTime: 3662,
    person: 'Annagret',
    text: ' Is there really a difference between bike chosen and bike reserved?'
  },
  { startTime: 3671.28, person: 'Karol', text: ' In this case, probably not.' },
  { startTime: 3675.64, person: 'Karol', text: ' But, you know, I have ADHD.' },
  {
    startTime: 3678.06,
    person: 'Karol',
    text: ' If I, during my time on the app, I will just look at it, choose the bike.'
  },
  { startTime: 3685.26, person: 'Karol', text: ' And then notification pops up.' },
  { startTime: 3686.66, person: 'Karol', text: " And I'm like, oh, what's that?" },
  { startTime: 3688.52, person: 'Karol', text: " I'm out of the app instantly." },
  {
    startTime: 3690.08,
    person: 'Karol',
    text: " So it remains chosen, but it's still not reserved."
  },
  {
    startTime: 3694.66,
    person: 'Annagret',
    text: ' And that is exactly what one can, when you do such an event storming, the guys in the room come up with different ideas.'
  },
  {
    startTime: 3706.3,
    person: 'Annagret',
    text: ' And then you discuss, when I have here bike reserved, bike chosen, the guys can discuss, is that the same?'
  },
  { startTime: 3715.9, person: 'Annagret', text: ' Is it not the same?' },
  {
    startTime: 3717.06,
    person: 'Annagret',
    text: ' And what you see here even is that I order the events from the left to the right.'
  },
  { startTime: 3728.14, person: 'Annagret', text: ' And the sequence appear or occur.' },
  { startTime: 3732.54, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 3733.82,
    person: 'Karol',
    text: ' But basically in event storming, the timeline flows from left to right.'
  },
  {
    startTime: 3738.2,
    person: 'Karol',
    text: ' So if we have parallel actions, they would be on top of each other.'
  },
  { startTime: 3742.16, person: 'Karol', text: ' Or parallel events.' },
  { startTime: 3745.44, person: 'Karol', text: ' Exactly.' },
  { startTime: 3746.82, person: 'Annagret', text: ' We can hear bike reserved.' },
  { startTime: 3749.18, person: 'Annagret', text: ' And then we can see bike ridden.' },
  {
    startTime: 3754.5,
    person: 'Annagret',
    text: ' So, and probably when he logged in, he first has to, let me see, monthly fee paid.'
  },
  { startTime: 3775.72, person: 'Annagret', text: ' Hmm.' },
  { startTime: 3777.9, person: 'Karol', text: " Especially if it's their first time logging in." },
  { startTime: 3781.7, person: 'Annagret', text: ' Yeah, exactly.' },
  {
    startTime: 3783.24,
    person: 'Annagret',
    text: ' And then we can probably even say that would be optional, and we can even mark it here with arrows.'
  },
  { startTime: 3790.36, person: 'Annagret', text: ' So everything is allowed in the end.' },
  { startTime: 3793.86, person: 'Annagret', text: ' Hmm.' },
  {
    startTime: 3796.54,
    person: 'Annagret',
    text: ' So in the next step, what you do in the next step, I need to copy something.'
  },
  { startTime: 3804.38, person: 'Karol', text: ' Yeah, sure.' },
  {
    startTime: 3807.3,
    person: 'Annagret',
    text: ' Is that you give each event a certain command.'
  },
  { startTime: 3812.18, person: 'Annagret', text: ' So which command will trigger that event?' },
  {
    startTime: 3818.24,
    person: 'Annagret',
    text: ' So when we said commute started, what is the event starting that event?'
  },
  { startTime: 3830.06, person: 'Karol', text: ' Probably my wife telling me go to work.' },
  { startTime: 3833.08, person: 'Annagret', text: ' Yeah, probably.' },
  { startTime: 3837.32, person: 'Karol', text: " I'm joking." },
  { startTime: 3839.5, person: 'Karol', text: " She wouldn't say go to work." },
  { startTime: 3840.92, person: 'Karol', text: ' She would want me not to work.' },
  { startTime: 3843.42, person: 'Karol', text: ' Leave the house.' },
  { startTime: 3845.48, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 3846.78,
    person: 'Annagret',
    text: ' So I think here we would have start commute and it would be here log in.'
  },
  {
    startTime: 3853.62,
    person: 'Annagret',
    text: " It's sometimes, or it's more the rule that you have for those commands that they are just a repeating of the event."
  },
  { startTime: 3865.7, person: 'Karol', text: ' Hmm.' },
  {
    startTime: 3866.96,
    person: 'Annagret',
    text: ' Only in imperative, whereas event is in the past.'
  },
  { startTime: 3871.98, person: 'Annagret', text: ' That is indeed some kind of a thing.' },
  { startTime: 3879.96, person: 'Annagret', text: ' So let me put it here a little bit more.' },
  { startTime: 3882.12, person: 'Karol', text: ' Hmm.' },
  { startTime: 3883.9, person: 'Annagret', text: " So as a bike's found." },
  { startTime: 3886.16, person: 'Karol', text: ' Found bike.' },
  { startTime: 3887.76, person: 'Annagret', text: ' Exactly.' },
  {
    startTime: 3888.92,
    person: 'Annagret',
    text: ' And what you see here is that you even start to be careful with the plural and singular.'
  },
  { startTime: 3899.34, person: 'Annagret', text: ' Yeah.' },
  { startTime: 3900.46, person: 'Annagret', text: ' Do I find several bikes?' },
  {
    startTime: 3903.06,
    person: 'Annagret',
    text: ' Probably I want to have several bikes because I want to ride with my family.'
  },
  {
    startTime: 3908.28,
    person: 'Annagret',
    text: ' But then you can discuss it with the business guys.'
  },
  { startTime: 3911.72, person: 'Annagret', text: ' Do you allow to find more than one bike?' },
  { startTime: 3915.12, person: 'Karol', text: ' Hmm.' },
  { startTime: 3916.72, person: 'Annagret', text: ' Probably yes.' },
  { startTime: 3918.88, person: 'Annagret', text: ' Probably.' },
  { startTime: 3920.88, person: 'Annagret', text: ' So and then choose bike.' },
  { startTime: 3926.68, person: 'Karol', text: ' Hmm.' },
  { startTime: 3930.89, person: 'Annagret', text: " So and then you'll see who is doing that." },
  { startTime: 3935.57, person: 'Annagret', text: ' You put a role to the event.' },
  {
    startTime: 3940.81,
    person: 'Annagret',
    text: ' And what you can see even here is that I use a lot of different colours that are not standard colours.'
  },
  {
    startTime: 3948.81,
    person: 'Annagret',
    text: ' But that are the, yeah, almost standard colours for events, Dominic, you find by Alberto Pandolini.'
  },
  {
    startTime: 3958.07,
    person: 'Annagret',
    text: " That's the events are orange, commands are blue."
  },
  { startTime: 3964.21, person: 'Annagret', text: ' And those roles are dark yellow.' },
  {
    startTime: 3970.15,
    person: 'Annagret',
    text: ' So commute starters, of course, would be sensor computer.'
  },
  {
    startTime: 3973.43,
    person: 'Annagret',
    text: " And we have now, we have an easy, easy part because we don't have different things here."
  },
  { startTime: 3981.29, person: 'Annagret', text: ' So we left out, for example, the code.' },
  { startTime: 3999.78, person: 'Annagret', text: ' So and here we have that bike.' },
  { startTime: 4002.7, person: 'Annagret', text: ' Thank you for going further.' },
  { startTime: 4005.72, person: 'Annagret', text: ' No problem.' },
  {
    startTime: 4008.46,
    person: 'Annagret',
    text: ' Because when we said that a code must be sent.'
  },
  { startTime: 4014.52, person: 'Karol', text: ' Hmm.' },
  { startTime: 4015.3, person: 'Annagret', text: ' So that we can unlock the bike as XORed.' },
  { startTime: 4020.3, person: 'Annagret', text: ' Mm hmm.' },
  { startTime: 4021.76, person: 'Annagret', text: ' At the rack.' },
  { startTime: 4023.68, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 4034.84,
    person: 'Annagret',
    text: ' So and then the code is sent when you remember our story.'
  },
  { startTime: 4039.85, person: 'Karol', text: ' Mm hmm.' },
  { startTime: 4041.17, person: 'Annagret', text: " It's sent by some kind of a system." },
  { startTime: 4045.13, person: 'Karol', text: ' Yes.' },
  { startTime: 4045.95, person: 'Karol', text: ' So the actor then is different.' },
  { startTime: 4048.41, person: 'Annagret', text: ' The actor is different.' },
  { startTime: 4049.81, person: 'Annagret', text: ' The actor is not an actor anymore.' },
  { startTime: 4053.15, person: 'Annagret', text: " It's some kind of a system." },
  { startTime: 4058.73, person: 'Annagret', text: " And then it's modelled as a thing." },
  {
    startTime: 4065.83,
    person: 'Annagret',
    text: ' So then we have here our bicycle distribution or whatever we want to call it.'
  },
  { startTime: 4078.03, person: 'Karol', text: ' Mm hmm.' },
  {
    startTime: 4083.16,
    person: 'Annagret',
    text: ' So now we have even a nice, a nice overview of our process.'
  },
  {
    startTime: 4092.11,
    person: 'Annagret',
    text: ' And then we give the process, we need the data for the process.'
  },
  { startTime: 4096.45, person: 'Annagret', text: ' So let me copy it here.' },
  { startTime: 4104.609, person: 'Karol', text: ' Mm hmm.' },
  { startTime: 4105.17, person: 'Annagret', text: ' We have the data.' },
  {
    startTime: 4108.01,
    person: 'Annagret',
    text: ' And now we need to define which data we need.'
  },
  {
    startTime: 4112.05,
    person: 'Annagret',
    text: ' And we need data which we change that are probably our aggregates of our bounded context.'
  },
  {
    startTime: 4122.31,
    person: 'Annagret',
    text: ' And which data we need but which are not changed, which are used in a so-called read model.'
  },
  { startTime: 4131.13, person: 'Karol', text: ' Okay.' },
  {
    startTime: 4131.51,
    person: 'Annagret',
    text: ' So when the commute started, we probably have here as an aggregate to compute.'
  },
  {
    startTime: 4138.71,
    person: 'Annagret',
    text: " Usually those things I won't model because that's a commute started."
  },
  {
    startTime: 4145.609,
    person: 'Annagret',
    text: " Yeah, it's a trigger for the whole process, obviously."
  },
  {
    startTime: 4149.21,
    person: 'Annagret',
    text: " But I don't have that information as my system."
  },
  { startTime: 4152.13, person: 'Annagret', text: " So usually I won't model anything." },
  { startTime: 4155.41, person: 'Annagret', text: ' Right.' },
  { startTime: 4156.83, person: 'Annagret', text: ' So therefore we start with the login.' },
  {
    startTime: 4162.88,
    person: 'Annagret',
    text: ' And even with the login, no new things is created.'
  },
  { startTime: 4169.42, person: 'Annagret', text: ' Mm hmm.' },
  {
    startTime: 4170.59,
    person: 'Annagret',
    text: ' But obviously we need somehow the user who is logged in to check.'
  },
  {
    startTime: 4187.229,
    person: 'Annagret',
    text: ' To check is it, is it the correct user who is, who is logged in.'
  },
  {
    startTime: 4196.57,
    person: 'Annagret',
    text: ' And then now, then I would model an IDM system.'
  },
  { startTime: 4202.39, person: 'Annagret', text: ' Yeah.' },
  { startTime: 4202.71, person: 'Annagret', text: ' Then I would do here much more.' },
  { startTime: 4205.01, person: 'Annagret', text: ' Yes.' },
  {
    startTime: 4205.29,
    person: 'Annagret',
    text: ' And I have users and I have to log in user who is created probably etc.'
  },
  { startTime: 4210.39, person: 'Annagret', text: " But I don't want to model that." },
  { startTime: 4212.09, person: 'Annagret', text: " Therefore, for me, it's a user." },
  {
    startTime: 4213.83,
    person: 'Annagret',
    text: " And afterwards, a commuter is locked in and I don't need to."
  },
  { startTime: 4217.31, person: 'Annagret', text: " We're simplifying." },
  {
    startTime: 4218.77,
    person: 'Karol',
    text: " We're assuming for this process that the user already has an account."
  },
  { startTime: 4222.61, person: 'Annagret', text: ' Exactly.' },
  { startTime: 4223.39, person: 'Karol', text: ' Exactly.' },
  {
    startTime: 4223.77,
    person: 'Annagret',
    text: ' And that is what I mentioned in the very beginning, that especially when you start with those modelling, you need to be careful what all things you model because it makes a whole model quite complex.'
  },
  { startTime: 4237.95, person: 'Karol', text: ' Mm hmm.' },
  { startTime: 4238.39, person: 'Annagret', text: ' And gives you no useful information.' },
  {
    startTime: 4242.09,
    person: 'Karol',
    text: " It's, it's like with communicating architecture."
  },
  {
    startTime: 4247.21,
    person: 'Karol',
    text: ' If you leave on a diagram too many, too many abstraction layers.'
  },
  { startTime: 4251.81, person: 'Karol', text: ' Exactly.' },
  {
    startTime: 4252.17,
    person: 'Karol',
    text: " It's going to overcomplicate the diagram and make it not readable."
  },
  {
    startTime: 4256.41,
    person: 'Karol',
    text: " So if we're talking about the specific process, we leave out the details of other processes just to make the diagram readable to understand that particular process."
  },
  {
    startTime: 4266.33,
    person: 'Karol',
    text: ' And of course, this goes to be able to log in, you have to be registered or somebody has to make an account for you and give you credentials.'
  },
  { startTime: 4273.95, person: 'Karol', text: " So, yeah, that's, that's the obvious part." },
  {
    startTime: 4277.17,
    person: 'Karol',
    text: " And we're not going to go into that registration flow at this point because that makes no sense for modelling."
  },
  {
    startTime: 4284.43,
    person: 'Annagret',
    text: ' When we go further and we have that monthly fee paid, as input, we need some kind, let me call it fee structure.'
  },
  {
    startTime: 4295.17,
    person: 'Annagret',
    text: ' As in someone needs to define what is a monthly fee, probably you can get certain discounts, whatever.'
  },
  { startTime: 4305.61, person: 'Annagret', text: ' And you get here out of it, obviously.' },
  { startTime: 4314.44, person: 'Annagret', text: ' A paid fee.' },
  { startTime: 4321.18, person: 'Annagret', text: ' So then we found the bicycle here.' },
  {
    startTime: 4325.04,
    person: 'Annagret',
    text: ' There we have then probably the bicycle in our hand.'
  },
  { startTime: 4330.58, person: 'Annagret', text: ' And here it becomes tricky.' },
  {
    startTime: 4334.96,
    person: 'Annagret',
    text: " In my point of view, at least, because when I found something in my point of view, then I haven't changed it yet."
  },
  {
    startTime: 4343.06,
    person: 'Annagret',
    text: ' Therefore, I always would model a suite model.'
  },
  { startTime: 4349.8, person: 'Karol', text: ' Yeah.' },
  { startTime: 4350.8, person: 'Annagret', text: ' But then when you have chosen it.' },
  { startTime: 4355.9, person: 'Karol', text: ' Then I have it.' },
  { startTime: 4357.7, person: 'Annagret', text: ' Then you have changed the bicycle.' },
  { startTime: 4360.18, person: 'Annagret', text: ' Then you have here the bicycle in the rig.' },
  { startTime: 4363.06, person: 'Annagret', text: " And now it's chosen." },
  { startTime: 4364.66, person: 'Annagret', text: " It's not reserved yet." },
  {
    startTime: 4367.28,
    person: 'Annagret',
    text: ' And the other one can choose as well the same bike.'
  },
  { startTime: 4371.34, person: 'Annagret', text: ' And now it comes who is faster.' },
  { startTime: 4373.72, person: 'Annagret', text: ' As we have done the bikes with her.' },
  {
    startTime: 4376.5,
    person: 'Annagret',
    text: ' And what you can do here even, is that you even model so-called invariants.'
  },
  {
    startTime: 4384.26,
    person: 'Annagret',
    text: " As an invariant in the sense, set up business rules which don't change when the object is changing."
  },
  {
    startTime: 4393.28,
    person: 'Annagret',
    text: ' And you can implement them quite nicely in your domain model, when you implement your services.'
  },
  { startTime: 4405.06, person: 'Annagret', text: ' So here we would have some.' },
  {
    startTime: 4407.2,
    person: 'Annagret',
    text: ' And then we have here the state model of the bicycle.'
  },
  { startTime: 4412.24, person: 'Annagret', text: ' We have here a chosen one.' },
  { startTime: 4418.12, person: 'Annagret', text: ' As a state.' },
  {
    startTime: 4419.96,
    person: 'Annagret',
    text: ' And here we would have the state of reserved.'
  },
  {
    startTime: 4424.46,
    person: 'Annagret',
    text: " And now we know that when a bicycle is reserved and it's in the rig, then it can't be chosen by others."
  },
  {
    startTime: 4438.02,
    person: 'Annagret',
    text: ' Now we have some kind of business rules behind.'
  },
  { startTime: 4442.42, person: 'Annagret', text: ' You can detect this with the events domain.' },
  {
    startTime: 4447.66,
    person: 'Karol',
    text: " Yeah, chosen would mark it as not choosable, not reservable for the duration of the life of the app we're using or for a moment."
  },
  { startTime: 4458.3, person: 'Annagret', text: ' Exactly.' },
  {
    startTime: 4459.32,
    person: 'Karol',
    text: " And reserved would make it not pickable for a longer period of time till we get to that rack, take it out, and it will drop the reservation, let's say, in half an hour."
  },
  { startTime: 4472.42, person: 'Annagret', text: ' For example.' },
  { startTime: 4473.42, person: 'Annagret', text: ' Exactly.' },
  { startTime: 4474.2, person: 'Annagret', text: ' And then we have...' },
  { startTime: 4475.28, person: 'Annagret', text: ' And that are exactly the business rules.' },
  {
    startTime: 4477.58,
    person: 'Annagret',
    text: ' And those you can define here as business rules.'
  },
  { startTime: 4481.46, person: 'Annagret', text: " I don't know." },
  { startTime: 4482.72, person: 'Annagret', text: ' Let me here.' },
  {
    startTime: 4488.07,
    person: 'Annagret',
    text: ' And that you really can discuss with the business people.'
  },
  { startTime: 4492.11, person: 'Annagret', text: ' As a lot...' },
  { startTime: 4495.47, person: 'Annagret', text: ' So the purple...' },
  { startTime: 4498.01, person: 'Annagret', text: ' Not pickable for others for 50 minutes.' },
  { startTime: 4509.32, person: 'Karol', text: ' Probably less in terms of chosen.' },
  { startTime: 4512.46, person: 'Annagret', text: " Yeah, doesn't matter." },
  { startTime: 4514.36, person: 'Annagret', text: ' You need to discuss it.' },
  { startTime: 4517.52, person: 'Karol', text: ' Yes.' },
  {
    startTime: 4518.16,
    person: 'Annagret',
    text: " And then after 50 minutes, it's free again also."
  },
  {
    startTime: 4522.22,
    person: 'Annagret',
    text: ' And those eight models, you definitely can then discuss quite easily and visualise with the business people.'
  },
  {
    startTime: 4531.22,
    person: 'Karol',
    text: " So as far as I remember my theory, and given that I've never done event storming myself, the purple one is policy or reaction."
  },
  { startTime: 4544.46, person: 'Annagret', text: ' Exactly.' },
  { startTime: 4545.08, person: 'Karol', text: ' So the state that we are is the reaction then.' },
  { startTime: 4549, person: 'Annagret', text: ' Exactly.' },
  {
    startTime: 4549.42,
    person: 'Annagret',
    text: ' And not selectable for 50 minutes would then be...'
  },
  { startTime: 4555.58, person: 'Karol', text: ' The policy.' },
  { startTime: 4556.48, person: 'Karol', text: ' Exactly.' },
  { startTime: 4556.96, person: 'Karol', text: ' Okay.' },
  {
    startTime: 4558.44,
    person: 'Annagret',
    text: ' So and then be here for the code sent, of course.'
  },
  { startTime: 4561.28, person: 'Annagret', text: ' We need some kind of input data.' },
  {
    startTime: 4564.26,
    person: 'Annagret',
    text: ' We need to know for which bicycle the code is sent.'
  },
  {
    startTime: 4569.88,
    person: 'Karol',
    text: ' Probably a little bit more context, like which rack, etcétera.'
  },
  { startTime: 4573.6, person: 'Annagret', text: ' Yeah, yeah.' },
  {
    startTime: 4575.02,
    person: 'Karol',
    text: ' But that would be the context of the chosen bicycle, basically.'
  },
  {
    startTime: 4577.94,
    person: 'Annagret',
    text: ' That would be the context of the chosen bicycle, because when you remember, we have here our visual glossary, and we know we have the bicycle, and the bicycle is stored in a rack.'
  },
  { startTime: 4593.8, person: 'Karol', text: ' Yes.' },
  { startTime: 4594.98, person: 'Annagret', text: ' Yeah.' },
  {
    startTime: 4595.72,
    person: 'Annagret',
    text: ' And we even know, and probably the rack, we have the location of the rack as some kind of GPS that we have modelled so far.'
  },
  { startTime: 4604.28, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 4604.56,
    person: 'Annagret',
    text: ' As when you go then deeper, you would model even those things.'
  },
  {
    startTime: 4610.18,
    person: 'Annagret',
    text: ' So that you have for the bicycle and the rack, so that you have the GPS data in it, and you have certain searching radios where you can see when you can search bikes, etcétera.'
  },
  { startTime: 4625.6, person: 'Karol', text: ' Mm-hmm.' },
  {
    startTime: 4626.3,
    person: 'Annagret',
    text: " The nice thing is even, and I think it comes out even of our discussion, we don't anymore discuss the whole flow, how the bicycle is, and do we need higher wheels, or do we need electro, and do we need distinguish between heavy bicycles or not so heavy bicycles, etcétera."
  },
  { startTime: 4654.58, person: 'Annagret', text: ' Mm-hmm.' },
  {
    startTime: 4654.9,
    person: 'Annagret',
    text: " We really discuss the things at the event, and that makes a whole discussion so easy, not easy, easier than it would be because you can concentrate on a certain problem and don't need to discuss a whole problem at once."
  },
  {
    startTime: 4676.98,
    person: 'Annagret',
    text: ' I did my past event stormings with 40 or more people, which is really horrible.'
  },
  {
    startTime: 4684.88,
    person: 'Annagret',
    text: ' Usually you should not do it more than 15 people, to be honest.'
  },
  { startTime: 4691.44, person: 'Karol', text: ' Fair enough.' },
  {
    startTime: 4692.22,
    person: 'Annagret',
    text: ' But what comes out of it is that we really could come to the core of our problems, and that is really great.'
  },
  {
    startTime: 4704.67,
    person: 'Karol',
    text: ' Just on the organisational side of such a session, from what is taught in business analysis frameworks, this is basically stakeholder management at this point because for this session, we need to manage our stakeholders.'
  },
  {
    startTime: 4724.27,
    person: 'Annagret',
    text: ' For event storming, you need, I think you should organise those sessions as diverse as possible.'
  },
  { startTime: 4734.07, person: 'Karol', text: ' Diverse as possible, yeah.' },
  {
    startTime: 4735.41,
    person: 'Annagret',
    text: ' You definitely need the architects, you definitely need the developers who will implement the whole thing.'
  },
  { startTime: 4742.83, person: 'Annagret', text: ' You need the business experts.' },
  {
    startTime: 4746.05,
    person: 'Annagret',
    text: " It's even nice when you have some kind of security guys in it because they came up with ideas you never thought to think of."
  },
  {
    startTime: 4756.17,
    person: 'Karol',
    text: ' Yeah, but this is important from the perspective of ubiquitous language, so building a shared understanding of the problem domain between all those abstraction layers of different people working on the same problem domain so that we have the same language, not have dilution of language.'
  },
  {
    startTime: 4773.83,
    person: 'Karol',
    text: " But I would ask you, going back for a second to the stakeholder management part, and of course we'll have different stakeholders."
  },
  {
    startTime: 4783.41,
    person: 'Karol',
    text: ' If we look at stakeholder management from a business analysis perspective where we want to be efficient and effective over our business analysis, especially if we run a workshop, the usual discourse is that, well, you should not invite to such a workshop stakeholders that have strong opinions that are very much opposing each other and might come into an argument.'
  },
  {
    startTime: 4810.13,
    person: 'Karol',
    text: " Now, what's your opinion on that in terms of event storming?"
  },
  {
    startTime: 4814.41,
    person: 'Karol',
    text: ' Because this is, to an extent, a tool for business analysis.'
  },
  {
    startTime: 4819.63,
    person: 'Karol',
    text: ' And I would fall into that category and if I would be like one time a successful event storming, I would probably not invite these people.'
  },
  { startTime: 4827.77, person: 'Annagret', text: ' I would invite them.' },
  { startTime: 4829.23, person: 'Annagret', text: ' I would invite them.' },
  { startTime: 4830.91, person: 'Karol', text: ' Okay.' },
  {
    startTime: 4831.43,
    person: 'Annagret',
    text: ' Because the methodology leads to a certain process.'
  },
  { startTime: 4838.63, person: 'Annagret', text: ' And you can put them out of the room always.' },
  { startTime: 4844.69, person: 'Karol', text: ' All right, you would just, out!' },
  { startTime: 4847.55, person: 'Annagret', text: ' For example, yeah.' },
  { startTime: 4849.95, person: 'Annagret', text: ' Or just mute them.' },
  { startTime: 4852.99, person: 'Karol', text: ' Okay, yes.' },
  {
    startTime: 4853.95,
    person: 'Annagret',
    text: ' And usually I prepare those discussions with some domain storytelling.'
  },
  {
    startTime: 4863.81,
    person: 'Annagret',
    text: " And because I'm the door of the domain storing and the moderator, I can really moderate everything in a part so that those strong-headed guys are not taking over the whole discussion."
  },
  { startTime: 4880.39, person: 'Karol', text: ' Okay.' },
  { startTime: 4880.91, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 4882.45,
    person: 'Annagret',
    text: ' And here with the event storming, the nice thing is, when you have that prepared, the nice thing is that the events are collected from everyone in the room, even the guys, which are usually more silent than the others.'
  },
  { startTime: 4903.67, person: 'Karol', text: ' Yeah.' },
  { startTime: 4903.85, person: 'Karol', text: ' Okay.' },
  {
    startTime: 4904.61,
    person: 'Annagret',
    text: ' And then you can discuss the words, you can discuss what is.'
  },
  {
    startTime: 4908.35,
    person: 'Annagret',
    text: " I'm not so with you that it's only business because what we are doing here, when we put those data in the end set, our input data and output data more or less, we really do some kind of architectural decisions already."
  },
  { startTime: 4933.17, person: 'Annagret', text: ' Yeah.' },
  {
    startTime: 4933.65,
    person: 'Annagret',
    text: ' As we know which data are belonging to which event, we even do here those invariants and do some kind of state modelling.'
  },
  {
    startTime: 4944.26,
    person: 'Annagret',
    text: ' That is, in my point of view, is architectural work.'
  },
  { startTime: 4949.06, person: 'Annagret', text: " It's hard on the business side." },
  { startTime: 4952.24, person: 'Annagret', text: " I'm completely with you." },
  {
    startTime: 4954.9,
    person: 'Annagret',
    text: ' But it goes in, we are already designing things.'
  },
  {
    startTime: 4959.94,
    person: 'Karol',
    text: " Yeah, that's basically outlining the data architecture to an extent."
  },
  { startTime: 4964.76, person: 'Annagret', text: ' Exactly.' },
  {
    startTime: 4965.54,
    person: 'Annagret',
    text: ' And when you have here in the domain storytelling, we are really doing business requirement gathering.'
  },
  { startTime: 4973.7, person: 'Annagret', text: ' That is a tool for that, yeah.' },
  {
    startTime: 4976.08,
    person: 'Annagret',
    text: ' But here we are already, we do data architecture.'
  },
  {
    startTime: 4981.76,
    person: 'Annagret',
    text: ' And when we then, the next step when we have all those data together, the next step then will be that we define the bounded context.'
  },
  {
    startTime: 4995.08,
    person: 'Annagret',
    text: " So I need to zoom out a little bit so that you'll see the whole process."
  },
  { startTime: 4999.68, person: 'Annagret', text: " And you'll see it becomes longer and longer." },
  {
    startTime: 5003.94,
    person: 'Annagret',
    text: " It's not as complex as you showed from Google, but it becomes things."
  },
  {
    startTime: 5011.22,
    person: 'Annagret',
    text: ' So what we do here, when I go a little bit out into it, as we have here, the bicycle is distributed in the bicycle distribution bounded context.'
  },
  { startTime: 5021.46, person: 'Annagret', text: ' We have here the member management.' },
  {
    startTime: 5022.94,
    person: 'Annagret',
    text: ' When I register myself as a member, I pay my fee.'
  },
  {
    startTime: 5029.82,
    person: 'Annagret',
    text: ' Then I have here the bicycle distribution, etcétera.'
  },
  {
    startTime: 5034.14,
    person: 'Annagret',
    text: " And the bounded context, you'll see here that either the role is changing and or the aggregate is changing."
  },
  {
    startTime: 5046.18,
    person: 'Annagret',
    text: ' And that is a strong hint that you have a border of a bounded context.'
  },
  {
    startTime: 5052.47,
    person: 'Annagret',
    text: ' And then you can circle around and give them a sensible name.'
  },
  {
    startTime: 5063.27,
    person: 'Annagret',
    text: " As I hear we have the bicycle distribution and what you can see here is that because it's a process, that bounded context can appear several times over the process."
  },
  {
    startTime: 5077.27,
    person: 'Annagret',
    text: " Because it's not a static view, it's a process view."
  },
  {
    startTime: 5081.75,
    person: 'Annagret',
    text: " And then it's quite normal that things appear several times over the time."
  },
  {
    startTime: 5088.29,
    person: 'Karol',
    text: ' Yeah, so if we would map it to a more traditional approach in outlining that as diagrams, a bounded context would be possibly a swim lane in a BPMN diagram.'
  },
  { startTime: 5105.29, person: 'Annagret', text: ' Exactly, exactly.' },
  { startTime: 5107.09, person: 'Karol', text: ' We can translate one-to-one.' },
  {
    startTime: 5109.69,
    person: 'Karol',
    text: ' Not one-to-one, but very close between two formats.'
  },
  { startTime: 5114.29, person: 'Annagret', text: " Yeah, I mean, there's a problem." },
  { startTime: 5116.41, person: 'Annagret', text: ' What we do is that we really do it together.' },
  {
    startTime: 5120.57,
    person: 'Annagret',
    text: " Drawing a BPMN diagram in a workshop format is possible, but I wouldn't recommend it."
  },
  { startTime: 5128.13, person: 'Karol', text: ' No, that would be a lot harder to do.' },
  {
    startTime: 5130.33,
    person: 'Karol',
    text: ' I would treat BPMN as a documentation form of the output of such an event storing session.'
  },
  { startTime: 5135.97, person: 'Annagret', text: ' Exactly, that is quite nice.' },
  { startTime: 5137.75, person: 'Annagret', text: ' That is quite nice.' },
  {
    startTime: 5138.93,
    person: 'Karol',
    text: " Because we can translate this nicely and this will form a very nice documentation of what we've done, which would be probably more readable than an event storing output."
  },
  {
    startTime: 5150.81,
    person: 'Annagret',
    text: ' And now, here you can see we have those different bounded contexts.'
  },
  { startTime: 5160.01, person: 'Karol', text: ' Yes.' },
  {
    startTime: 5161.35,
    person: 'Annagret',
    text: ' And what you can see here, probably we have here the bicycle returned.'
  },
  { startTime: 5169.72, person: 'Annagret', text: ' And I have here the hotel and the rack.' },
  {
    startTime: 5174.22,
    person: 'Annagret',
    text: ' And I have as roles the commuter and the tourist.'
  },
  {
    startTime: 5180.84,
    person: 'Annagret',
    text: ' What we do in the event storing is that we even try to model the whole picture.'
  },
  {
    startTime: 5190.16,
    person: 'Annagret',
    text: ' I said before that we have in the domain storytelling, we do different models for the different user groups, for the tourists and the commuters.'
  },
  {
    startTime: 5201.16,
    person: 'Annagret',
    text: " Probably even one, I haven't shown, but probably even one for the mechanics, for example."
  },
  {
    startTime: 5206.76,
    person: 'Annagret',
    text: ' But in the event storing, we try to model the whole domain and even more generalising the things from the different user groups.'
  },
  { startTime: 5220.8, person: 'Annagret', text: " But still, it's a happy path." },
  { startTime: 5224.56, person: 'Karol', text: " It's a happy path, yes." },
  {
    startTime: 5225.86,
    person: 'Karol',
    text: ' Exceptions will need to be modelled separately but, yeah.'
  },
  { startTime: 5229.58, person: 'Annagret', text: ' Exactly.' },
  { startTime: 5230.64, person: 'Annagret', text: " That's always the case." },
  {
    startTime: 5232.76,
    person: 'Annagret',
    text: " In my experience, it's normally when you need exceptions that they are inside of a bounded context, inside of a service."
  },
  {
    startTime: 5246.36,
    person: 'Annagret',
    text: ' And what we model here is an overview model over several services.'
  },
  { startTime: 5254.44, person: 'Annagret', text: ' My exception, of course, is there.' },
  {
    startTime: 5260.12,
    person: 'Annagret',
    text: ' But in my opinion, usually when you really want to go into detail, then you can detail a model in one bounded context.'
  },
  {
    startTime: 5272.06,
    person: 'Annagret',
    text: ' There are even things where you can model this event storming in detail.'
  },
  { startTime: 5279.42, person: 'Annagret', text: " It's a different aspect of it." },
  {
    startTime: 5281.56,
    person: 'Annagret',
    text: ' Then you go much deeper into policies and business rules because usually those are the domain rules you implement in one service and not over several services.'
  },
  {
    startTime: 5300.38,
    person: 'Annagret',
    text: ' And therefore, you do it then in the detail model.'
  },
  { startTime: 5305.36, person: 'Annagret', text: ' Here we have an overview model.' },
  { startTime: 5308.2, person: 'Karol', text: ' Okay.' },
  { startTime: 5309.7, person: 'Karol', text: ' All right.' },
  { startTime: 5310.18, person: 'Karol', text: ' Annegret, so we have our bounded context.' },
  { startTime: 5313.82, person: 'Karol', text: ' We have our events.' },
  { startTime: 5315.08, person: 'Karol', text: " We know what's going on on the happy path." },
  {
    startTime: 5317.26,
    person: 'Karol',
    text: ' What can we do then with this to take us closer to actual architecture?'
  },
  { startTime: 5323.6, person: 'Annagret', text: ' Yeah.' },
  {
    startTime: 5324.64,
    person: 'Annagret',
    text: ' I want to do it with you together but I think we are running a little bit out of time.'
  },
  {
    startTime: 5330.62,
    person: 'Karol',
    text: ' We might not be able to do context mapping together given the time that we want to talk about it.'
  },
  { startTime: 5336.66, person: 'Annagret', text: ' So I give you here the whole...' },
  {
    startTime: 5344.05,
    person: 'Annagret',
    text: ' By the way, I have a question for the guys outside.'
  },
  { startTime: 5348.09, person: 'Karol', text: ' Okay.' },
  { startTime: 5349.11, person: 'Annagret', text: ' I have a book for you.' },
  {
    startTime: 5353.09,
    person: 'Annagret',
    text: " It's called Crafting Great APIs with Domain Driven Design."
  },
  { startTime: 5358.91, person: 'Annagret', text: ' You see it here?' },
  { startTime: 5360.33, person: 'Karol', text: ' Yes.' },
  {
    startTime: 5360.55,
    person: 'Annagret',
    text: ' One of the guys attending, I can give you a free PDF version of it.'
  },
  { startTime: 5369.49, person: 'Annagret', text: ' Giveaway.' },
  { startTime: 5371.75, person: 'Annagret', text: ' And I want...' },
  { startTime: 5374.71, person: 'Annagret', text: ' They can answer in the chat, right?' },
  { startTime: 5377.57, person: 'Karol', text: ' Yes.' },
  { startTime: 5378.25, person: 'Annagret', text: ' Yeah.' },
  { startTime: 5378.87, person: 'Annagret', text: ' To answer the question.' },
  { startTime: 5381.37, person: 'Karol', text: ' Okay.' },
  {
    startTime: 5381.75,
    person: 'Karol',
    text: ' So before you give the question, let me outline the rules.'
  },
  { startTime: 5385.77, person: 'Karol', text: ' So Annegret has one PDF to give.' },
  { startTime: 5389.47, person: 'Karol', text: ' Annegret has a question.' },
  {
    startTime: 5390.63,
    person: 'Karol',
    text: " The first person to answer this to show up in our studio chat and we're gathering the chat feed from LinkedIn and from YouTube simultaneously in our studio chat will get that PDF and we'll contact you after the stream to outline details."
  },
  { startTime: 5411.97, person: 'Karol', text: ' Okay?' },
  { startTime: 5412.61, person: 'Karol', text: ' All right, Annegret, then.' },
  { startTime: 5414.33, person: 'Karol', text: ' Okay.' },
  { startTime: 5415.13, person: 'Karol', text: " Let's see what's going to happen in chat." },
  {
    startTime: 5418.01,
    person: 'Karol',
    text: " This is the first time we're doing a giveaway on this stream."
  },
  { startTime: 5420.23, person: 'Karol', text: ' This is going to be interesting.' },
  {
    startTime: 5421.99,
    person: 'Annagret',
    text: ' There are several team patterns already outlined by the DDD guys.'
  },
  { startTime: 5437.51, person: 'Annagret', text: ' Here you will see two ACL and conformist.' },
  {
    startTime: 5442.25,
    person: 'Annagret',
    text: ' And I want to know what is the most bad pattern one can use.'
  },
  {
    startTime: 5448.29,
    person: 'Karol',
    text: " So we're asking about what is the worst context mapping pattern one can use."
  },
  { startTime: 5458.04, person: 'Annagret', text: ' Exactly.' },
  { startTime: 5467.99, person: 'Karol', text: " I have my type, but I'm not playing the game." },
  { startTime: 5473.49, person: 'Karol', text: " So we'll see who answers." },
  { startTime: 5480.83, person: 'Annagret', text: " Probably it's too complex a question." },
  { startTime: 5485.65, person: 'Karol', text: ' No, I mean, okay.' },
  { startTime: 5486.85, person: 'Karol', text: " Let's give some small hints." },
  { startTime: 5489.19, person: 'Karol', text: ' Okay.' },
  { startTime: 5489.45, person: 'Karol', text: " So what you're looking for is context mapping." },
  { startTime: 5492.57, person: 'Karol', text: ' Context mapping has, I believe, six patterns.' },
  { startTime: 5496.81, person: 'Karol', text: ' Exactly.' },
  { startTime: 5497.87, person: 'Karol', text: ' Yes.' },
  {
    startTime: 5499.05,
    person: 'Karol',
    text: " So out of those six patterns, and if you're with us in Miro or watching, two of them are visible on screen."
  },
  { startTime: 5507.51, person: 'Annagret', text: ' Exactly.' },
  {
    startTime: 5508.07,
    person: 'Annagret',
    text: ' But out of six patterns, there are nine patterns I meant.'
  },
  { startTime: 5514.49, person: 'Karol', text: ' Oh, nine patterns.' },
  { startTime: 5515.49, person: 'Karol', text: ' Okay.' },
  { startTime: 5518.09, person: 'Karol', text: ' Which one would be the worst?' },
  { startTime: 5520.43, person: 'Annagret', text: ' They are defined by DDD crew.' },
  { startTime: 5529.68, person: 'Karol', text: " That's a good hint." },
  { startTime: 5531.66, person: 'Karol', text: ' All right.' },
  { startTime: 5532.12, person: 'Karol', text: " Let's leave people with this." },
  {
    startTime: 5533.48,
    person: 'Karol',
    text: " We'll see in the chat later if there is an answer to this question."
  },
  {
    startTime: 5538.22,
    person: 'Karol',
    text: " I'll leave the question on screen for the moment."
  },
  { startTime: 5546.12, person: 'Karol', text: ' All right.' },
  { startTime: 5546.78, person: 'Karol', text: ' Context mapping.' },
  {
    startTime: 5548.36,
    person: 'Annagret',
    text: ' What I do as a context mapping was original introduced by Eric Evans.'
  },
  { startTime: 5558.24, person: 'Karol', text: ' Yes.' },
  {
    startTime: 5559.3,
    person: 'Annagret',
    text: ' In his book, Domain Driven Design, published in 2004 already.'
  },
  {
    startTime: 5566.88,
    person: 'Annagret',
    text: ' And what he did is that he wanted to show in the context team dependencies.'
  },
  {
    startTime: 5575.36,
    person: 'Annagret',
    text: ' And team dependencies means that one team delivers something to another team.'
  },
  { startTime: 5582.52, person: 'Annagret', text: ' Both teams are using it, etcétera, etcétera.' },
  {
    startTime: 5587.22,
    person: 'Annagret',
    text: ' And nowadays I use it more for data stream picture because that are more or less interesting things one has, which data need to be exchanged by the different services.'
  },
  { startTime: 5602.28, person: 'Annagret', text: ' And to do so, I put out the bounded context.' },
  {
    startTime: 5607.5,
    person: 'Annagret',
    text: ' I detected inside of the event storming and put in rectangle for each of those bounded context.'
  },
  { startTime: 5616.5, person: 'Annagret', text: ' But only once.' },
  {
    startTime: 5617.32,
    person: 'Annagret',
    text: ' As I said before, they can appear several times.'
  },
  { startTime: 5620.24, person: 'Annagret', text: ' Yes.' },
  { startTime: 5620.62, person: 'Annagret', text: ' Here you find only.' },
  {
    startTime: 5622.04,
    person: 'Annagret',
    text: " So it's more aesthetic models and dynamic model."
  },
  {
    startTime: 5625.54,
    person: 'Annagret',
    text: ' And then you put the events you found in the event storming inside of the bounded context.'
  },
  {
    startTime: 5634.88,
    person: 'Annagret',
    text: ' And then you can discuss for one bounded context with synchronous communication you need only for that bounded context.'
  },
  {
    startTime: 5644.26,
    person: 'Annagret',
    text: ' So here for the bicycle distribution with the aggregate bicycle, we have a get, a post, and a put.'
  },
  {
    startTime: 5652.22,
    person: 'Annagret',
    text: " And for member management, I think it's quite easy."
  },
  { startTime: 5655.58, person: 'Annagret', text: ' We have the member registered event.' },
  {
    startTime: 5658.1,
    person: 'Annagret',
    text: ' We have the member and we need to get a post, a put, and a delete.'
  },
  {
    startTime: 5663.36,
    person: 'Annagret',
    text: ' And then here you can see that we have here the accounting.'
  },
  {
    startTime: 5670.56,
    person: 'Annagret',
    text: ' And the accounting has event monthly fee paid with a fee.'
  },
  {
    startTime: 5678.5,
    person: 'Annagret',
    text: ' And that event then is published to the member management.'
  },
  {
    startTime: 5684.86,
    person: 'Annagret',
    text: ' So here we have a data exchange between two bounded contexts.'
  },
  {
    startTime: 5693.44,
    person: 'Annagret',
    text: ' And what you see, we have here the event which needs to be published by the accounting and then is consumed by the member management.'
  },
  {
    startTime: 5703.82,
    person: 'Annagret',
    text: ' And what you see here even is that we have here a conformist for the accounting with an anti-corruption layer.'
  },
  { startTime: 5716.74, person: 'Annagret', text: ' Why?' },
  {
    startTime: 5717.38,
    person: 'Annagret',
    text: ' Because usually you will buy an accounting system and a member management system.'
  },
  {
    startTime: 5722.56,
    person: 'Annagret',
    text: " You won't implement it completely for yourself, but not to stain your own models."
  },
  {
    startTime: 5729.64,
    person: 'Annagret',
    text: ' You need probably for your monthly fee and for your member management, you build an anti-corruption layer for it.'
  },
  { startTime: 5738.6, person: 'Annagret', text: ' And then the other things are accepted.' },
  {
    startTime: 5743.66,
    person: 'Annagret',
    text: ' And the other thing we have here, we have the reg management.'
  },
  { startTime: 5748.5, person: 'Annagret', text: ' And the reg management, you buy as well.' },
  {
    startTime: 5751.38,
    person: 'Annagret',
    text: ' Therefore, you need here the anti-corruption layer as well.'
  },
  {
    startTime: 5754.92,
    person: 'Annagret',
    text: ' And when a bicycle is unlocked or locked, then the event is published to the bicycle distribution.'
  },
  {
    startTime: 5766.14,
    person: 'Annagret',
    text: ' So what you can see here is in the end is really the service overview.'
  },
  {
    startTime: 5773.92,
    person: 'Annagret',
    text: ' As a bicycle distribution, we even have the data to be exchanged here from the reg management to the bicycle distribution.'
  },
  { startTime: 5786.54, person: 'Annagret', text: ' And then you can define all the APIs.' },
  {
    startTime: 5792.36,
    person: 'Annagret',
    text: ' Here we have the sync APIs, even this we need.'
  },
  {
    startTime: 5797.66,
    person: 'Annagret',
    text: ' And we have the other APIs for the exchanges between the services.'
  },
  {
    startTime: 5805.22,
    person: 'Annagret',
    text: " As I said, it's logical architecture we are doing here."
  },
  {
    startTime: 5808.6,
    person: 'Annagret',
    text: " We don't do some kind of internal solutioning, which database is used, which adapter pattern is used, etcétera."
  },
  {
    startTime: 5818.2,
    person: 'Karol',
    text: " No, that's completely outside of any implementation yet."
  },
  { startTime: 5823.58, person: 'Karol', text: ' We have a first answer to the question.' },
  { startTime: 5828.34, person: 'Karol', text: " I would deem wrong one, but let's have it." },
  { startTime: 5831.92, person: 'Annagret', text: ' Maxime is totally right.' },
  { startTime: 5837.08, person: 'Annagret', text: ' That is what I want to hear here.' },
  { startTime: 5840.12, person: 'Annagret', text: " Don't use it." },
  {
    startTime: 5842.3,
    person: 'Karol',
    text: " A big ball of mud, I would say it's a consequence of using certain patterns."
  },
  { startTime: 5849.1, person: 'Karol', text: ' You will accept this as an answer?' },
  { startTime: 5852.72, person: 'Annagret', text: ' Yes, I want to hear.' },
  { startTime: 5855.04, person: 'Karol', text: " That's the one." },
  { startTime: 5856.56, person: 'Karol', text: " Oh, yes, you're right." },
  {
    startTime: 5857.7,
    person: 'Karol',
    text: " Because that's actually one outlined as an anti-pattern by the DDP crew."
  },
  {
    startTime: 5863.88,
    person: 'Annagret',
    text: ' I want to hear it because the anti-pattern of a big ball of mud is exactly what we want to avoid when we do collaborative modelling.'
  },
  {
    startTime: 5878,
    person: 'Karol',
    text: ' See, dear viewers, I did not know the answer because Annegret made this question without telling me the question and without telling me the answer.'
  },
  {
    startTime: 5887.48,
    person: 'Karol',
    text: ' So my brain is like, what are the correct patterns of context mapping?'
  },
  {
    startTime: 5891.52,
    person: 'Karol',
    text: ' Big ball of mud is not the correct pattern in that sense.'
  },
  { startTime: 5895, person: 'Karol', text: " It's an anti-pattern." },
  { startTime: 5896.4, person: 'Karol', text: ' I was like, which one would be the worst?' },
  { startTime: 5898.42, person: 'Karol', text: " I'm sitting here like, hmm." },
  { startTime: 5899.96, person: 'Annagret', text: " But you can't do inverse." },
  { startTime: 5903.26, person: 'Karol', text: " Yes, that's very true." },
  { startTime: 5906.32, person: 'Annagret', text: ' So Maxime has really deserved his copy?' },
  { startTime: 5914.8, person: 'Karol', text: " Yes, that's true." },
  {
    startTime: 5916.22,
    person: 'Karol',
    text: ' I would deem that the wrong answer, but that was the answer you were expecting.'
  },
  { startTime: 5919.94, person: 'Karol', text: " So that's actually great." },
  {
    startTime: 5922.76,
    person: 'Karol',
    text: ' And if you want to read more about context mapping as outlined by the DDP crew, this is a link here for context mapping of their GitHub.'
  },
  { startTime: 5933.44, person: 'Karol', text: " It's all explained there." },
  {
    startTime: 5934.76,
    person: 'Karol',
    text: " I just didn't scroll far enough down to see the cheat sheet where that big ball of mud is outlined."
  },
  {
    startTime: 5940.7,
    person: 'Annagret',
    text: ' Yes, the cheat sheet is big ball of mud is outlined.'
  },
  { startTime: 5944.36, person: 'Karol', text: " Yes, that's true." },
  {
    startTime: 5945.76,
    person: 'Karol',
    text: " But just to be fair, this is not exactly a pattern we should be thinking about when we're designing."
  },
  {
    startTime: 5955.24,
    person: 'Karol',
    text: ' This is an anti-pattern we should avoid at all costs.'
  },
  { startTime: 5959.44, person: 'Annagret', text: ' Yes.' },
  { startTime: 5960.68, person: 'Karol', text: " Annegret, you're showing us Claude." },
  {
    startTime: 5963.66,
    person: 'Annagret',
    text: " Yes, I'm showing you Claude, because you said we are far away from implementation."
  },
  {
    startTime: 5969.62,
    person: 'Annagret',
    text: " And I want to show that it's not so far away from implementation."
  },
  { startTime: 5974.22, person: 'Annagret', text: ' All right.' },
  {
    startTime: 5975.84,
    person: 'Annagret',
    text: ' What we can do is that we can now really design based on that information we have here.'
  },
  { startTime: 5984.06, person: 'Annagret', text: ' We can design our APIs.' },
  {
    startTime: 5986.78,
    person: 'Annagret',
    text: " And because I'm really a lazy guy, the AI can do it for me."
  },
  {
    startTime: 5995.78,
    person: 'Annagret',
    text: ' So I have here a prompt that the AI is an async API.'
  },
  { startTime: 6002.6, person: 'Annagret', text: ' An async API expert.' },
  {
    startTime: 6008.4,
    person: 'Annagret',
    text: ' And for bicycle distribution we have here, the AI should generate the async API for me.'
  },
  { startTime: 6019.84, person: 'Annagret', text: ' So let me put it here in my cloud.' },
  {
    startTime: 6029.68,
    person: 'Annagret',
    text: ' So what we need now more is there are certain information needed, and we need the visual glossary.'
  },
  {
    startTime: 6044.17,
    person: 'Karol',
    text: " I'm curious, because if I'm building anything using AI, any generative AI engine, I usually write a lot of context."
  },
  {
    startTime: 6055.41,
    person: 'Karol',
    text: ' So I did not ever use images to convey the context.'
  },
  { startTime: 6062.11, person: 'Karol', text: " So I'm very curious what will happen." },
  { startTime: 6063.95, person: 'Annagret', text: ' So I can now paste the context in here.' },
  {
    startTime: 6068.31,
    person: 'Annagret',
    text: ' Now I need a little bit to show that I can see my screen, right?'
  },
  { startTime: 6076.55, person: 'Karol', text: ' You know what?' },
  {
    startTime: 6078.07,
    person: 'Karol',
    text: " While you're doing this, I'll open a Gemini, which is my default LLM that I use."
  },
  {
    startTime: 6085.63,
    person: 'Karol',
    text: " And I'm going to try and do the same, and we'll compare results."
  },
  { startTime: 6088.75, person: 'Annagret', text: ' That would be great.' },
  { startTime: 6090.25, person: 'Annagret', text: ' So I only need to screenshot it.' },
  { startTime: 6097.55, person: 'Karol', text: ' Mm-hmm.' },
  {
    startTime: 6099.23,
    person: 'Karol',
    text: " All right, I'm going to do exactly the same as you do."
  },
  { startTime: 6105.02, person: 'Annagret', text: ' I lose my mouse.' },
  { startTime: 6107.04, person: 'Annagret', text: " I'm on the wrong side." },
  { startTime: 6113.73, person: 'Annagret', text: " So I'm screenshot here the visual glossary." },
  { startTime: 6118.77, person: 'Karol', text: ' Yes, all right.' },
  {
    startTime: 6126.19,
    person: 'Karol',
    text: ' I also have a screenshot of the visual glossary, which is going to save it now under the name visual glossary.'
  },
  {
    startTime: 6134.55,
    person: 'Annagret',
    text: ' Yeah, but you can put this copy and paste there.'
  },
  { startTime: 6138.83, person: 'Annagret', text: ' So I have here the visual glossary.' },
  { startTime: 6141.67, person: 'Annagret', text: ' Then we need here the context map.' },
  { startTime: 6152.34, person: 'Karol', text: ' Mm-hmm.' },
  { startTime: 6165.96, person: 'Annagret', text: ' There I am.' },
  { startTime: 6171.44, person: 'Karol', text: ' All right, doing the same.' },
  { startTime: 6173.08, person: 'Annagret', text: ' And now comes a little bit of a trick.' },
  {
    startTime: 6176.84,
    person: 'Annagret',
    text: ' As I said, you need to give them extremely much of context, yeah?'
  },
  { startTime: 6184.06, person: 'Annagret', text: ' Mm-hmm.' },
  {
    startTime: 6184.3,
    person: 'Annagret',
    text: ' To be more precise, what is the expected results, you can use so-called one-shot prompts, where you give them an example of the expected results.'
  },
  { startTime: 6196.84, person: 'Karol', text: ' Yes.' },
  {
    startTime: 6197.6,
    person: 'Annagret',
    text: ' And that I do with a good Async API I created.'
  },
  { startTime: 6202.72, person: 'Karol', text: ' Mm-hmm.' },
  { startTime: 6204.28, person: 'Annagret', text: ' I have it here.' },
  {
    startTime: 6208.24,
    person: 'Annagret',
    text: ' Let me put – I have it in my local thing, but I give you – when you can get a moment, I can give you the GitHub link.'
  },
  {
    startTime: 6220.64,
    person: 'Karol',
    text: ' Either GitHub or just paste it into Miro as text.'
  },
  { startTime: 6225.02, person: 'Annagret', text: ' Ah, so that I can – Or as a file.' },
  {
    startTime: 6227.76,
    person: 'Annagret',
    text: ' That either works because – Also, that is a good idea, yeah?'
  },
  { startTime: 6231.22, person: 'Annagret', text: ' I can put it on the Miro.' },
  { startTime: 6233.1, person: 'Karol', text: ' That would be probably quicker.' },
  { startTime: 6236.82, person: 'Annagret', text: ' Voila.' },
  { startTime: 6239.3, person: 'Annagret', text: ' I only need to find my file.' },
  { startTime: 6244.9, person: 'Karol', text: ' See, people, nothing scripted.' },
  { startTime: 6246.66, person: 'Karol', text: " We're doing this live as we go." },
  {
    startTime: 6253.45,
    person: 'Karol',
    text: " That's what I love about these streams in general."
  },
  { startTime: 6256.35, person: 'Karol', text: " It's an unscripted conversation." },
  { startTime: 6259.23, person: 'Karol', text: ' We have an idea to talk about.' },
  { startTime: 6260.93, person: 'Karol', text: " Let's talk about it." },
  { startTime: 6261.87, person: 'Karol', text: ' Some speakers prepare in details like you did.' },
  { startTime: 6266.09, person: 'Karol', text: ' Others just come and start talking.' },
  {
    startTime: 6268.63,
    person: 'Karol',
    text: " That's a lovely, spontaneous part of doing loosely coupled."
  },
  { startTime: 6274.65, person: 'Annagret', text: ' La, la, la, la, la.' },
  {
    startTime: 6276.83,
    person: 'Annagret',
    text: " I have here – It's from – The file type is not supported, yeah?"
  },
  { startTime: 6284.41, person: 'Karol', text: ' Ah.' },
  { startTime: 6285.45, person: 'Karol', text: ' Just please copy the text in a text field.' },
  { startTime: 6288.85, person: 'Karol', text: ' That should work as well.' },
  { startTime: 6291.97, person: 'Annagret', text: ' I will do – So, I have it now here with me.' },
  { startTime: 6311.45, person: 'Annagret', text: " There's a text field." },
  { startTime: 6314.75, person: 'Annagret', text: " Ah, I think it's too long." },
  { startTime: 6316.59, person: 'Annagret', text: ' Yeah.' },
  { startTime: 6317.13, person: 'Annagret', text: " No, it doesn't work." },
  { startTime: 6318.37, person: 'Annagret', text: ' Barma, I give you the GitHub link.' },
  { startTime: 6321.39, person: 'Annagret', text: " I think that's – Yeah, okay." },
  {
    startTime: 6325.49,
    person: 'Karol',
    text: ' Well, you created a very long async API spec then.'
  },
  { startTime: 6331.17, person: 'Annagret', text: " Yeah, it's really long, yeah." },
  {
    startTime: 6335.07,
    person: 'Annagret',
    text: ' And by the way, in the repository I put the link out of, there are AI comparison I did.'
  },
  { startTime: 6355.62, person: 'Annagret', text: ' And in that API also now.' },
  { startTime: 6358.94, person: 'Annagret', text: ' Here is the link.' },
  { startTime: 6360.64, person: 'Annagret', text: ' Yes.' },
  { startTime: 6360.74, person: 'Annagret', text: " But it's only here." },
  { startTime: 6361.76, person: 'Annagret', text: ' You see the link, yeah?' },
  { startTime: 6362.6, person: 'Annagret', text: ' You can use it.' },
  { startTime: 6363.34, person: 'Karol', text: ' Yes, yes, yes.' },
  { startTime: 6364.06, person: 'Karol', text: ' Got it.' },
  { startTime: 6364.78, person: 'Annagret', text: ' Got it.' },
  {
    startTime: 6365.58,
    person: 'Annagret',
    text: ' And there I put some kind of API comparison and AI comparison, which is the best when you create those API things.'
  },
  { startTime: 6381.6, person: 'Annagret', text: " So, where's my clothes?" },
  { startTime: 6382.96, person: 'Annagret', text: ' My clothes is back.' },
  { startTime: 6384.58, person: 'Karol', text: ' Okay.' },
  {
    startTime: 6384.98,
    person: 'Karol',
    text: ' So, I have everything uploaded to Gemini already.'
  },
  { startTime: 6389.42, person: 'Karol', text: ' And I copied your prompt from Miro.' },
  { startTime: 6397.15, person: 'Karol', text: " That's great." },
  { startTime: 6403.96, person: 'Annagret', text: ' So, now let us see what comes out of it.' },
  { startTime: 6411.79, person: 'Karol', text: ' All right.' },
  { startTime: 6412.53, person: 'Karol', text: " And I'm clicking play." },
  { startTime: 6416.37, person: 'Annagret', text: ' Now we have the fight who is faster, right?' },
  { startTime: 6420.47, person: 'Karol', text: ' All right.' },
  { startTime: 6421.83, person: 'Karol', text: " Let's see." },
  { startTime: 6425.89, person: 'Karol', text: ' Gemini has already given me a yaml.' },
  { startTime: 6431.73, person: 'Annagret', text: ' And how does it look for you?' },
  { startTime: 6434.27, person: 'Karol', text: " Let's see." },
  { startTime: 6434.97, person: 'Karol', text: " I don't know Async API that well." },
  {
    startTime: 6438.05,
    person: 'Karol',
    text: " So, for the moment, while yours is generating, I'm going to hijack the screen myself then."
  },
  { startTime: 6442.55, person: 'Annagret', text: ' Yeah.' },
  { startTime: 6442.93, person: 'Annagret', text: ' Would be nice.' },
  { startTime: 6444.09, person: 'Karol', text: " Let's see." },
  { startTime: 6444.79, person: 'Karol', text: ' Chrome tab with Gemini.' },
  { startTime: 6445.91, person: 'Karol', text: ' There we go.' },
  { startTime: 6448.15, person: 'Karol', text: " So, let's take a look." },
  { startTime: 6449.55, person: 'Karol', text: " I'll just zoom in a little there." },
  { startTime: 6451.47, person: 'Karol', text: ' There we go.' },
  { startTime: 6452.97, person: 'Karol', text: " Let's see." },
  { startTime: 6453.67, person: 'Karol', text: ' Bicycle distribution version one description.' },
  {
    startTime: 6456.01,
    person: 'Karol',
    text: ' Events produced by the bicycle distribution service for bike sharing system.'
  },
  { startTime: 6460.29, person: 'Karol', text: " So, it's a nice description." },
  { startTime: 6462.51, person: 'Karol', text: ' Distributed booked.' },
  { startTime: 6465.01, person: 'Karol', text: ' Contact.' },
  { startTime: 6466.17, person: 'Karol', text: ' It puts your information there.' },
  { startTime: 6468.53, person: 'Annagret', text: ' That is out of the example I used.' },
  { startTime: 6472.15, person: 'Annagret', text: ' That is mine.' },
  { startTime: 6473.41, person: 'Annagret', text: ' That is how it should look done.' },
  { startTime: 6476.01, person: 'Karol', text: ' Tags.' },
  { startTime: 6476.87, person: 'Karol', text: ' Core domain.' },
  { startTime: 6477.69, person: 'Karol', text: ' All right.' },
  { startTime: 6478.25, person: 'Karol', text: ' Servers.' },
  { startTime: 6479.15, person: 'Karol', text: ' Even broker bike share.' },
  { startTime: 6481.19, person: 'Karol', text: ' Whatever the broker is.' },
  { startTime: 6483.43, person: 'Annagret', text: ' Yeah.' },
  { startTime: 6484.27, person: 'Karol', text: ' Kafka.' },
  {
    startTime: 6484.79,
    person: 'Annagret',
    text: ' Even those Kafka bindings come out of the example.'
  },
  { startTime: 6491.47, person: 'Annagret', text: ' That is what I meant.' },
  {
    startTime: 6492.47,
    person: 'Annagret',
    text: ' When you give them a really good example, you really get good answers.'
  },
  { startTime: 6498.83, person: 'Annagret', text: ' Yeah.' },
  {
    startTime: 6499.05,
    person: 'Annagret',
    text: " Because for those you won't get when you just put in a zero short prompt."
  },
  { startTime: 6506.03, person: 'Karol', text: ' Yeah.' },
  { startTime: 6507.45, person: 'Karol', text: " It's not about prompt engineering." },
  { startTime: 6509.63, person: 'Karol', text: " It's about context engineering, right?" },
  { startTime: 6511.37, person: 'Annagret', text: ' Right.' },
  {
    startTime: 6511.71,
    person: 'Karol',
    text: " If you don't provide the right context, it will be horrendous."
  },
  {
    startTime: 6516.47,
    person: 'Annagret',
    text: ' So, here we have the bicycle distributed channel for the bicycle distributed thing.'
  },
  {
    startTime: 6525.27,
    person: 'Annagret',
    text: ' And we have the bicycle book channel for the bicycle.'
  },
  { startTime: 6531.21, person: 'Annagret', text: ' Books event.' },
  { startTime: 6532.81, person: 'Annagret', text: ' Yeah.' },
  { startTime: 6533.29, person: 'Annagret', text: " So, it's nice." },
  {
    startTime: 6535.03,
    person: 'Annagret',
    text: ' So, when you now looked here, we have bicycle distributed, bicycle search and return.'
  },
  { startTime: 6548.67, person: 'Annagret', text: ' So, we see only you.' },
  { startTime: 6551.03, person: 'Annagret', text: ' Can you go a little bit to the schemas?' },
  { startTime: 6554.27, person: 'Karol', text: ' Yeah.' },
  { startTime: 6554.75, person: 'Karol', text: " Let's see." },
  { startTime: 6555.47, person: 'Karol', text: ' Schemas.' },
  { startTime: 6556.61, person: 'Karol', text: ' We have the right schema.' },
  { startTime: 6558.55, person: 'Annagret', text: ' Fine.' },
  {
    startTime: 6561.17,
    person: 'Annagret',
    text: ' The problem here is what you can see here is we want only to have bicycle distribution.'
  },
  {
    startTime: 6569.53,
    person: 'Annagret',
    text: ' And in the context map, we had only bicycle locked and bicycle unlocked as event to be received by bicycle distribution.'
  },
  { startTime: 6580.93, person: 'Karol', text: ' I think it went overboard with the model.' },
  { startTime: 6584.45, person: 'Annagret', text: ' Exactly.' },
  { startTime: 6585.53, person: 'Annagret', text: " And that's the point, yeah?" },
  {
    startTime: 6587.87,
    person: 'Annagret',
    text: ' Usually, one must be quite careful with the LMMs because they know too much.'
  },
  { startTime: 6596.49, person: 'Karol', text: ' Yes.' },
  { startTime: 6596.81, person: 'Annagret', text: " And they can't leave out." },
  {
    startTime: 6598.41,
    person: 'Annagret',
    text: " It works quite well when you don't have the events inside of the bounded context in the context map anymore."
  },
  { startTime: 6609.83, person: 'Annagret', text: ' Then it works really well.' },
  {
    startTime: 6611.76,
    person: 'Annagret',
    text: " But when you have too much information, then they are too overwhelmed and don't know anything anymore."
  },
  { startTime: 6619.55, person: 'Annagret', text: ' And here you have the bicycle.' },
  { startTime: 6622.65, person: 'Annagret', text: " It's not bad." },
  { startTime: 6624.63, person: 'Karol', text: ' ID, serial number is e-bike.' },
  { startTime: 6627.31, person: 'Karol', text: " That's good." },
  { startTime: 6627.93, person: 'Karol', text: " Motor, that's the reference to that earlier." },
  {
    startTime: 6630.75,
    person: 'Annagret',
    text: " Motor, which was hallucinating, which we don't have modelled."
  },
  { startTime: 6635.93, person: 'Karol', text: ' Yeah.' },
  { startTime: 6636.17, person: 'Karol', text: " It's irrelevant." },
  {
    startTime: 6637.19,
    person: 'Karol',
    text: ' So, basically, at this point, I would already write a prompt, please remove motor from…'
  },
  {
    startTime: 6644.07,
    person: 'Annagret',
    text: " But it's really helpful when you see how much you spare and time to write those things."
  },
  { startTime: 6650.65, person: 'Karol', text: ' Oh, yeah.' },
  {
    startTime: 6651.27,
    person: 'Annagret',
    text: " And probably you haven't simply not thought of it, yeah?"
  },
  {
    startTime: 6656.09,
    person: 'Annagret',
    text: " The view diameter was modelled, so it's nice."
  },
  {
    startTime: 6660.95,
    person: 'Annagret',
    text: " But it's even come up with certain ideas of the enum of the sizes, yeah?"
  },
  { startTime: 6668.67, person: 'Annagret', text: " It's really nice." },
  { startTime: 6670.01, person: 'Annagret', text: ' Yes.' },
  { startTime: 6670.15, person: 'Annagret', text: ' And so far…' },
  { startTime: 6670.97, person: 'Karol', text: ' It would be nice.' },
  { startTime: 6672.33, person: 'Annagret', text: ' Yeah.' },
  { startTime: 6672.69, person: 'Annagret', text: " It's really helpful." },
  { startTime: 6674.21, person: 'Annagret', text: ' I use it meanwhile almost every day.' },
  { startTime: 6677.47, person: 'Karol', text: ' Mm-hmm.' },
  { startTime: 6678.51, person: 'Annagret', text: ' Yeah.' },
  {
    startTime: 6679.35,
    person: 'Annagret',
    text: ' And then you look into the link, which is now…'
  },
  {
    startTime: 6683.01,
    person: 'Karol',
    text: ' This is already nice, because it already provides proper metadata for the communication, which is something a lot of people forget when designing an API.'
  },
  { startTime: 6694.31, person: 'Karol', text: " It's not only about the business payload." },
  {
    startTime: 6696.21,
    person: 'Karol',
    text: " You actually need to provide specific metadata so that it's operatable, and it's a problematic thing later."
  },
  {
    startTime: 6704.59,
    person: 'Annagret',
    text: ' That is exactly those meta things you need in an API.'
  },
  { startTime: 6709.63, person: 'Annagret', text: ' You can really put into your example.' },
  {
    startTime: 6712.77,
    person: 'Annagret',
    text: ' That message header comes out of the example, yeah?'
  },
  { startTime: 6716.45, person: 'Karol', text: ' Mm-hmm.' },
  {
    startTime: 6716.91,
    person: 'Annagret',
    text: ' And therefore, you spare so much time just in writing infrastructure in the end.'
  },
  { startTime: 6723.67, person: 'Annagret', text: ' Mm-hmm.' },
  { startTime: 6724.09, person: 'Annagret', text: ' Yeah?' },
  {
    startTime: 6724.63,
    person: 'Annagret',
    text: ' And there are gold plate things that you can spare much time in it.'
  },
  { startTime: 6731.37, person: 'Karol', text: ' All right.' },
  {
    startTime: 6732.19,
    person: 'Karol',
    text: " Let me kill my feed, and let's see what did you get from Claude."
  },
  { startTime: 6736.23, person: 'Annagret', text: ' Oh, and that is here even in Claude.' },
  {
    startTime: 6738.77,
    person: 'Annagret',
    text: " What you can see, we have here the bicycle distributed, which means we have all the events inside of the bounded context, which we don't want to publish."
  },
  { startTime: 6755.25, person: 'Annagret', text: ' We want only to have that book and look.' },
  {
    startTime: 6758.33,
    person: 'Annagret',
    text: " And here we have even bicycle picked up that was not modelled, but Claude thinks we wouldn't need it."
  },
  { startTime: 6764.95, person: 'Annagret', text: ' Yeah?' },
  { startTime: 6765.99, person: 'Annagret', text: " That's nice." },
  {
    startTime: 6767.17,
    person: 'Karol',
    text: " And he- And Claude is not wrong, because we would need that event from the rack to start billing somebody if they're on a paper use."
  },
  {
    startTime: 6779.33,
    person: 'Annagret',
    text: " So until you see the Kafka bindings are there, it's fine, yeah?"
  },
  {
    startTime: 6785.05,
    person: 'Annagret',
    text: ' We have then here the distributed channel, we have the book channel, the search channel, etcétera.'
  },
  {
    startTime: 6791.05,
    person: 'Annagret',
    text: " And it's in the same, you see here even the binding version, so that we have already the binding even to Kafka, it's here even more."
  },
  {
    startTime: 6801.99,
    person: 'Annagret',
    text: " That comes out of the example, so it's really nice."
  },
  { startTime: 6810.57, person: 'Annagret', text: " Yeah, but there's a problem here." },
  { startTime: 6812.87, person: 'Annagret', text: ' You have to put out a lot of things.' },
  {
    startTime: 6814.95,
    person: 'Annagret',
    text: " Therefore, when you do those pictures and you want to create something out of it, it's always a good idea to put all those things you don't want to have generated."
  },
  {
    startTime: 6825.49,
    person: 'Karol',
    text: " The usual problem with generative AI, if you tell it not to do something, it'll explicitly do something."
  },
  { startTime: 6833.75, person: 'Annagret', text: ' Exactly, exactly.' },
  { startTime: 6834.55, person: 'Annagret', text: " It doesn't work." },
  {
    startTime: 6835.23,
    person: 'Karol',
    text: " It's like talking to people, don't think about pink elephants."
  },
  { startTime: 6838.63, person: 'Annagret', text: ' Yeah, yeah, exactly.' },
  {
    startTime: 6839.49,
    person: 'Karol',
    text: " Obviously, now you're thinking about pink elephants, right?"
  },
  {
    startTime: 6843.05,
    person: 'Annagret',
    text: " But for me, it's really, really helpful because as a starting point, it's amazing."
  },
  { startTime: 6851.03, person: 'Annagret', text: ' You create more than an 80% starting point.' },
  { startTime: 6855.03, person: 'Karol', text: ' Yes.' },
  {
    startTime: 6855.89,
    person: 'Karol',
    text: ' For me, as a neuroatypical with ADHD, my biggest problem in writing literally anything is a blank page paralysis.'
  },
  { startTime: 6866.73, person: 'Karol', text: ' Exactly.' },
  {
    startTime: 6867.17,
    person: 'Karol',
    text: " For me, it's a lot easier if I have something to start with and having generative AI doing even a wrong answer, but just doing something to start with so I can start just editing it instead of writing it from scratch."
  },
  { startTime: 6883.93, person: 'Karol', text: ' That makes it so much easier.' },
  {
    startTime: 6888.61,
    person: 'Annagret',
    text: ' But you can see here, because we said we are not at the code at all.'
  },
  {
    startTime: 6894.67,
    person: 'Annagret',
    text: ' I only want to show that out of the pictures, you are so fast to the code page.'
  },
  { startTime: 6903.51, person: 'Karol', text: ' Yes.' },
  { startTime: 6904.45, person: 'Annagret', text: " That you don't need to start with it." },
  {
    startTime: 6906.85,
    person: 'Annagret',
    text: ' You can start in the end, in the discussion, felt quite late with code.'
  },
  {
    startTime: 6915.97,
    person: 'Annagret',
    text: ' Usually, I want to start quite early with code as well, so I know the stuff.'
  },
  {
    startTime: 6923.39,
    person: 'Annagret',
    text: " But it's really helpful to do those discussions."
  },
  {
    startTime: 6929.33,
    person: 'Annagret',
    text: ' As I said in the very beginning, you can start with certain things already after the domain storytelling.'
  },
  {
    startTime: 6938.61,
    person: 'Annagret',
    text: ' Especially for those things where you know they are quite clear, like accounting, like a lock-in, when you need an IDM, you can all set up those things already.'
  },
  { startTime: 6953.53, person: 'Annagret', text: " Because it's not to the business core." },
  {
    startTime: 6957.55,
    person: 'Annagret',
    text: ' But when you want to model the business core, then you need a business and event storming together with your business guys.'
  },
  { startTime: 6970.89, person: 'Karol', text: ' Again, this would be picking on semantics.' },
  { startTime: 6973.77, person: 'Karol', text: ' If you say close to code, not close to code.' },
  {
    startTime: 6979.63,
    person: 'Karol',
    text: ' It depends how you define what an API specification is.'
  },
  {
    startTime: 6984.27,
    person: 'Karol',
    text: " Because for me, that's not code, that's a specification."
  },
  { startTime: 6986.83, person: 'Karol', text: " But it's already very close." },
  {
    startTime: 6989.25,
    person: 'Karol',
    text: ' Yes, we can often generate some code of an API implementation, etc.'
  },
  { startTime: 6998.35, person: 'Annagret', text: " I'm completely with you." },
  { startTime: 7001.03, person: 'Annagret', text: ' Yammer is not code.' },
  {
    startTime: 7003.93,
    person: 'Karol',
    text: ' But this is a lot closer to code, from that perspective.'
  },
  {
    startTime: 7009.67,
    person: 'Karol',
    text: " And it also gives you another abstraction layer, because you're moving from this abstraction of bounded contexts and their relationships."
  },
  {
    startTime: 7017.51,
    person: 'Karol',
    text: ' So ACLs, conformist, partnership, customer-supplier.'
  },
  { startTime: 7023.43, person: 'Karol', text: " And we're moving towards more details." },
  {
    startTime: 7027.5,
    person: 'Karol',
    text: " So we're basically, through the whole process that we did today, we moved from an abstraction of a story, like a user story, which is the domain storytelling."
  },
  {
    startTime: 7039.04,
    person: 'Karol',
    text: " We're looking at this from the perspective of a specific actor."
  },
  {
    startTime: 7042.36,
    person: 'Karol',
    text: ' Then going through event storming and visual glossary to outline what happens from our business process perspective and the relationships between different aggregates or objects in our business process.'
  },
  {
    startTime: 7060.08,
    person: 'Karol',
    text: ' Down to context map, where we actually define bounded contexts.'
  },
  {
    startTime: 7064.18,
    person: 'Karol',
    text: ' And those bounded contexts already can be overlaid to actual application systems, which are implemented or to be designed.'
  },
  {
    startTime: 7077.3,
    person: 'Karol',
    text: " And then we're going even deeper towards actual entities."
  },
  {
    startTime: 7081.56,
    person: 'Karol',
    text: ' So actually defining attributes as if we would be doing a class diagram.'
  },
  {
    startTime: 7087.48,
    person: 'Karol',
    text: ' Because might as well, instead of generating an async API, we might as well ask the LLM to generate a class diagram based on this discussion.'
  },
  { startTime: 7096.7, person: 'Annagret', text: ' Sure, sure.' },
  {
    startTime: 7098.12,
    person: 'Annagret',
    text: ' Here, the class diagram is more or less what we have put in for the visual glossary.'
  },
  { startTime: 7107.04, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 7107.18,
    person: 'Annagret',
    text: ' We could have here generated even the open API.'
  },
  {
    startTime: 7112.14,
    person: 'Annagret',
    text: ' Then you can work close with the open API and can generate in a sense of a contract first approach, can generate your controller from it.'
  },
  {
    startTime: 7121.8,
    person: 'Annagret',
    text: ' Based on that, you can then generate probably your database model.'
  },
  { startTime: 7127.24, person: 'Annagret', text: ' Yeah.' },
  {
    startTime: 7127.48,
    person: 'Annagret',
    text: ' And then you are really close to the things which make the job interesting.'
  },
  {
    startTime: 7134.22,
    person: 'Annagret',
    text: ' Because then you have to build up the business logic.'
  },
  { startTime: 7139.86, person: 'Annagret', text: ' And there it becomes interesting.' },
  { startTime: 7141.94, person: 'Annagret', text: " There you can't so much generate." },
  { startTime: 7144.44, person: 'Annagret', text: ' There you have to think.' },
  {
    startTime: 7147.14,
    person: 'Annagret',
    text: ' But my point of view, all those modelling techniques help you to think and helps you always up to the database design in your language and in your thinking to be close to the business.'
  },
  {
    startTime: 7162.62,
    person: 'Karol',
    text: " That's the lovely part because over all of these abstraction levels, we were very consistent about the language."
  },
  { startTime: 7170.04, person: 'Karol', text: ' We kept using exactly the same language.' },
  {
    startTime: 7174.06,
    person: 'Karol',
    text: ' Just also on the note in terms of generating the class diagram, because there are different types of abstractions for class diagrams.'
  },
  { startTime: 7182.06, person: 'Karol', text: ' You have conceptual, logical, physical, right?' },
  { startTime: 7185.14, person: 'Karol', text: ' Exactly.' },
  {
    startTime: 7186.04,
    person: 'Karol',
    text: ' So visual glossary is more on a conceptual level of class diagram, right?'
  },
  {
    startTime: 7191.58,
    person: 'Karol',
    text: ' And when we go deeper through even storming context map and on the level that we generated the SIG API specification, we could actually generate a class diagram that would be the physical model, which is rich in information such as attributes, enumerations, regular expressions, examples, etc.'
  },
  {
    startTime: 7220.34,
    person: 'Annagret',
    text: " Of course, there's examples and even regular expression."
  },
  {
    startTime: 7225.82,
    person: 'Annagret',
    text: ' And so you have to work on and you have to think about.'
  },
  {
    startTime: 7228.94,
    person: 'Annagret',
    text: ' But you get really a good starting point, as I said.'
  },
  { startTime: 7233.72, person: 'Karol', text: ' Yes.' },
  {
    startTime: 7236.9,
    person: 'Karol',
    text: ' And this in terms of modelling of communication, I would say this is a very good start.'
  },
  {
    startTime: 7243.34,
    person: 'Karol',
    text: ' If somebody is working on a specific domain system just to get going with proper interoperability from start before we start building.'
  },
  { startTime: 7251.9, person: 'Karol', text: ' Exactly.' },
  {
    startTime: 7252.64,
    person: 'Karol',
    text: " Because that's a very important aspect that we think about that interoperability beforehand rather than as an afterthought, which is, in my experience, something that happens quite a lot, unfortunately."
  },
  {
    startTime: 7265.14,
    person: 'Karol',
    text: " But this is just the tip of an iceberg because there's so much more to interoperability than just building a good API."
  },
  { startTime: 7275, person: 'Karol', text: ' And then what is a good API?' },
  {
    startTime: 7277.84,
    person: 'Karol',
    text: ' Because then we need to have a discussion about the purpose.'
  },
  {
    startTime: 7281,
    person: 'Karol',
    text: ' And we actually had a discussion about that on Loosely Coupled some time ago with your colleagues from CodeCentric, Daniel Koltzot and Miriam Greis.'
  },
  { startTime: 7293.08, person: 'Annagret', text: ' Greis.' },
  { startTime: 7293.8, person: 'Karol', text: ' Greis, yeah.' },
  {
    startTime: 7295.5,
    person: 'Karol',
    text: " And I'm having trouble with that particular sound."
  },
  {
    startTime: 7300.3,
    person: 'Karol',
    text: ' Daniel was laughing at me for mispronunciations earlier.'
  },
  { startTime: 7306.02, person: 'Karol', text: ' So then we go into the purpose of it.' },
  {
    startTime: 7308.6,
    person: 'Karol',
    text: " And if we align on the purpose and then start using context mapping to properly define that against data interface quadrants, we're already going way further."
  },
  {
    startTime: 7324.2,
    person: 'Karol',
    text: " And then, and here a little bit of a shameless advertisement, if you want to learn more about looking at interoperability on an ecosystem layer, we're actually running a two-day training with DDD Academy in January about strategic integration design with domain-driven design, which is combining ecosystem architecture."
  },
  {
    startTime: 7348.3,
    person: 'Karol',
    text: ' So integration platforms, message brokers, and all those patterns on the ecosystem level to talk about interoperability at a large, large scale.'
  },
  {
    startTime: 7361.52,
    person: 'Karol',
    text: ' So the system that we look at, its API, async API, open API, whatever is the definition there, is just a small component of that conversation then.'
  },
  {
    startTime: 7373.84,
    person: 'Karol',
    text: ' So there is a lot more to talk about in that sense, but this is very, this session today and this modelling today is a very important starting point for anybody designing a system, whatever that system may be.'
  },
  { startTime: 7389.68, person: 'Annagret', text: ' Right.' },
  { startTime: 7393.96, person: 'Karol', text: ' All right.' },
  { startTime: 7394.8, person: 'Karol', text: ' Did we miss anything?' },
  { startTime: 7396.48, person: 'Karol', text: ' Do we need to put anything else here?' },
  {
    startTime: 7399.74,
    person: 'Karol',
    text: " Links I'll try to include in the description after."
  },
  {
    startTime: 7402.58,
    person: 'Karol',
    text: ' Of course, the recording is on YouTube always, so this will be visible.'
  },
  { startTime: 7412.16, person: 'Karol', text: ' People can find that in QR.' },
  {
    startTime: 7413.64,
    person: 'Karol',
    text: ' So anybody watching the recording can find the QRs over the whole stream.'
  },
  {
    startTime: 7418.74,
    person: 'Karol',
    text: ' One more thing, another book by Annegret here about the topic.'
  },
  {
    startTime: 7424.92,
    person: 'Karol',
    text: ' So modelling using domain storytelling, even storming context maps.'
  },
  { startTime: 7428.88, person: 'Karol', text: " That's an older book, right?" },
  {
    startTime: 7430.22,
    person: 'Karol',
    text: ' Not the one that we showed earlier about crafting APIs.'
  },
  {
    startTime: 7434.26,
    person: 'Karol',
    text: ' Crafting APIs we just did a moment ago, but the whole process of the collaborative modelling is in more details explained in this book.'
  },
  {
    startTime: 7442.26,
    person: 'Karol',
    text: ' So if anybody would like to have a jump into details, this is where you can find more details on the topic.'
  },
  { startTime: 7452.52, person: 'Karol', text: ' All right.' },
  {
    startTime: 7453.38,
    person: 'Karol',
    text: " So I think we'll be slowly closing, but before we jump into the actual closing and anything else, a few words of advertisement."
  },
  {
    startTime: 7466.24,
    person: 'Karol',
    text: " Next week, we're diving into a completely different topic, looking at symptoms and problem solving and identifying the problems."
  }
])
</script>

<style scoped></style>
