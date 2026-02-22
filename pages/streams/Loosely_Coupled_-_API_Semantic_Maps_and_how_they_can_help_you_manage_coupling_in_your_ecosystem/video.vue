<template>
  <div class="w-full">
    <StreamLayout
      :transcript="transcript"
      name="Loosely Coupled - API Semantic Maps and how they can help you manage coupling in your ecosystem"
      video-id="J84uhDJd0W8"
    />
  </div>
</template>

<script lang="ts" setup>
const transcript = ref([
  {
    startTime: 66.2,
    person: 'Karol',
    text: ' Good morning, good afternoon, and good evening, everybody.'
  },
  {
    startTime: 69.88,
    person: 'Karol',
    text: " My name is Karol Skrzymowski, and I'll be your host tonight, and welcome to another episode of Loosely Coupled by Bridging the Gap."
  },
  { startTime: 77.64, person: 'Karol', text: ' I hope everybody has something nice to drink.' },
  {
    startTime: 79.5,
    person: 'Karol',
    text: " I'm back with my coffee, so heavily caffeinated so we can survive till nine."
  },
  {
    startTime: 85.74,
    person: 'Karol',
    text: " It's always difficult in the middle of the week to survive till late evening streaming, but support is there."
  },
  {
    startTime: 94.82,
    person: 'Karol',
    text: " Before I introduce our today's guest, and before we jump into the topic at hand, a bit"
  },
  {
    startTime: 100.72,
    person: 'Karol',
    text: " of shameless advertisement, and the shameless advertisement is that we're running an early"
  },
  {
    startTime: 107.44,
    person: 'Karol',
    text: ' bird, well, early access course for a strategic integration design with domain-driven design,'
  },
  {
    startTime: 115.12,
    person: 'Karol',
    text: ' so if you want to join us next week for four modules of learning about designing interoperability,'
  },
  { startTime: 123.52, person: 'Karol', text: ' there are still a few spots left.' },
  {
    startTime: 125.94,
    person: 'Karol',
    text: ' Go to the site and register for the link on the site.'
  },
  {
    startTime: 129.8,
    person: 'Karol',
    text: ' Always happy to have new faces, and to gather some feedback about the course materials and whatnot.'
  },
  {
    startTime: 136.74,
    person: 'Karol',
    text: " Now, today, today, we're talking about semantics, but precisely semantic metadata around integration and other relevant topics within data exchange, and joining me tonight is a, I would say, huge nerd."
  },
  { startTime: 155.26, person: 'Karol', text: ' Marty is cracking in there.' },
  {
    startTime: 156.72,
    person: 'Karol',
    text: ' So Marty Pitt from Orbital, Marty is an engineer, open-source developer, and a founder of a very nice company doing some really cool stuff, so hello, Marty.'
  },
  { startTime: 169.14, person: 'Karol', text: ' Hello, thank you for having me.' },
  { startTime: 171.92, person: 'Karol', text: ' Right, so should we jump into semantic metadata?' },
  { startTime: 176.1, person: 'Karol', text: " Let's get into it, yeah." },
  {
    startTime: 178.26,
    person: 'Karol',
    text: ' All right, let me bring up my notes, because this is a topic I have to prepare notes for.'
  },
  { startTime: 182.72, person: 'Karol', text: ' So semantic metadata, what should we care?' },
  {
    startTime: 186.18,
    person: 'Karol',
    text: ' And this is, I think, the key question here, because I believe not everybody is familiar with the term semantic metadata.'
  },
  { startTime: 193.12, person: 'Karol', text: ' What does that even mean?' },
  {
    startTime: 194.84,
    person: 'Marty',
    text: " I think it's a fancy term that consultants use to bump up their day rates for what is really quite a simple idea, right?"
  },
  {
    startTime: 206.48,
    person: 'Marty',
    text: " The idea is that you go into an organisation, and you have all of these different data sources, you have some APIs, you've got some databases, you've got some S3 buckets, you've got event streams, and semantics are kind of an additional bit of metadata that you stick over and above your existing API specs, so it doesn't replace anything, but it's kind of like going into DDD language, right?"
  },
  {
    startTime: 233.2,
    person: 'Marty',
    text: " It's a way of expressing your ubiquitous language directly in the schemas."
  },
  {
    startTime: 238.34,
    person: 'Marty',
    text: " So if you've got two different systems, maybe, that have customer information inside of them, and pick a really simple example, one system has a field called ID, and another system has a field called customer ID, right?"
  },
  {
    startTime: 253.52,
    person: 'Marty',
    text: ' And those are names that are picked by the teams that own those systems.'
  },
  {
    startTime: 257.62,
    person: 'Marty',
    text: ' Semantic metadata is just another layer that sits over the top of that that just says, hey, this thing is the same as that thing, right?'
  },
  {
    startTime: 264.88,
    person: 'Marty',
    text: " These two things, even though they have different field names, they're the same thing in our business language, right?"
  },
  {
    startTime: 272.42,
    person: 'Marty',
    text: " And across the enterprise, they're the same kind of idea."
  },
  {
    startTime: 277.04,
    person: 'Karol',
    text: " Well, if you go to DDD, then across a specific business domain, they're the same idea, not necessarily across the whole business, but you're right, this could be across a business."
  },
  {
    startTime: 290.32,
    person: 'Karol',
    text: ' Because you basically dived into the actual solution at hand that we will be talking about during the stream, but without that, where does that semantic metadata live?'
  },
  {
    startTime: 300.46,
    person: 'Karol',
    text: " Because normally, we don't put these kind of things in OpenAPI spec or whatever."
  },
  { startTime: 307.14, person: 'Karol', text: ' So normally, where is that?' },
  {
    startTime: 309.42,
    person: 'Marty',
    text: " Normally, it's in a confluence page or in a Word document or some Excel spreadsheet that, yeah, it's up in people's brains, right?"
  },
  {
    startTime: 318.58,
    person: 'Marty',
    text: " It's anywhere but living next to the source, right?"
  },
  {
    startTime: 323.04,
    person: 'Marty',
    text: " And it's all of those places at once with varying degrees of accuracy."
  },
  {
    startTime: 330.18,
    person: 'Karol',
    text: ' So in essence, if I think about it just from trying to build a definition in my head, in essence, this ties down to two specific things.'
  },
  {
    startTime: 343.7,
    person: 'Karol',
    text: ' First of all, given that we just talked to Vlad Kononov last week about coupling, this is our semantic coupling.'
  },
  {
    startTime: 351.2,
    person: 'Karol',
    text: " So the shared understanding of data that we're moving throughout our ecosystem, which is a type of coupling we actually very much would like to have."
  },
  {
    startTime: 363.24,
    person: 'Karol',
    text: " And then it's looking from the DDD perspective or the language perspective or a business perspective is the ubiquitous language, the shared language of the business."
  },
  {
    startTime: 377.86,
    person: 'Karol',
    text: ' So the actual business meaning to the whatever technical data that is.'
  },
  {
    startTime: 384.12,
    person: 'Karol',
    text: ' And this is given that things can be named very differently in different systems, especially with the modern composition of ecosystems where we have a mix of legacy, on-premise, cloud, SaaS solutions, custom builds, all of these built in different stacks by different people with different ideas about things and naming things completely differently.'
  },
  {
    startTime: 407.12,
    person: 'Marty',
    text: ' Even different conventions between languages, right?'
  },
  {
    startTime: 410.38,
    person: 'Marty',
    text: ' Like a .NET team and a Java team will just name things in the conventions that make sense to the underlying technology, right?'
  },
  {
    startTime: 417.32,
    person: 'Marty',
    text: " They've just got different naming conventions that they love."
  },
  {
    startTime: 422.52,
    person: 'Karol',
    text: " That's also probably very, very true most of the time, yeah."
  },
  {
    startTime: 426.08,
    person: 'Karol',
    text: " Unless they're actually homebrewed in that particular company ecosystem and they adopted that naming convention of that ecosystem."
  },
  {
    startTime: 434.12,
    person: 'Karol',
    text: ' But that actually takes a lot of maturity to get to that point, which is a completely different problem space.'
  },
  {
    startTime: 442.44,
    person: 'Karol',
    text: " So basically, if I think about it, if we're talking about semantic metadata, this is a cross-discipline topic stemming from business analysis down to development entirely."
  },
  {
    startTime: 460.36,
    person: 'Karol',
    text: " It's building that shared understanding of data across whatever enterprise."
  },
  { startTime: 468.44, person: 'Marty', text: " Yeah, I think that's the semantics part of it." },
  {
    startTime: 471.74,
    person: 'Marty',
    text: ' And then the metadata is kind of when we start getting into implementation stuff, right?'
  },
  {
    startTime: 476.16,
    person: 'Marty',
    text: " But the semantic catalogue, whether it's a taxonomy or an ontology or whether it's just like a data dictionary, I think you're exactly right."
  },
  {
    startTime: 487.78,
    person: 'Marty',
    text: " It's that capturing that business knowledge that, hey, regardless of how systems have represented this thing, to us as a business, this is an idea."
  },
  { startTime: 497.9, person: 'Marty', text: ' A customer ID is a thing.' },
  { startTime: 500.5, person: 'Marty', text: " It's a thing that we use to identify, right?" },
  {
    startTime: 502.72,
    person: 'Marty',
    text: " Like it's saying, hey, regardless of how it exists in systems, this is a thing that we care about as a business."
  },
  {
    startTime: 510.56,
    person: 'Karol',
    text: ' Right, so this also then ties to the lovely conversation we had with Chris Simon back in December.'
  },
  { startTime: 518.6, person: 'Karol', text: ' No, sorry, December?' },
  { startTime: 519.539, person: 'Karol', text: ' No, that was beginning of January.' },
  {
    startTime: 523.86,
    person: 'Karol',
    text: ' The author of Contextive, where Contextive is a plugin to your IDE or your browser to create a shared glossary.'
  },
  {
    startTime: 533.98,
    person: 'Karol',
    text: ' So basically, this also touches on the topic of semantic metadata.'
  },
  {
    startTime: 539.32,
    person: 'Karol',
    text: " So for those who are interested in Contextive, there's a small QR code we do have."
  },
  { startTime: 544.08, person: 'Karol', text: " It's open source." },
  {
    startTime: 545.28,
    person: 'Karol',
    text: ' So there is actually a community edition you can use just out of the box.'
  },
  { startTime: 548.66, person: 'Karol', text: ' But also the cloud version, there is a trial.' },
  { startTime: 552.62, person: 'Karol', text: " You can go and try it out when it's live." },
  {
    startTime: 558.22,
    person: 'Karol',
    text: ' But if we look at Contextive, this is just a glossary we built in YAML files and that we get highlights as tooltips in the IDE or tooltips in the web page through the Chrome browser or any other browser extension that just underline on the text and just pops up a definition.'
  },
  {
    startTime: 579.65,
    person: 'Karol',
    text: " So now we're looking at something a little bit different because we're looking at building a shared understanding through metadata, which is more for a different purpose, not for building an understanding as we read through something, but for analysis and later on, given the tools that you actually work on for integration."
  },
  { startTime: 604.92, person: 'Marty', text: " Yeah, yeah, but that's the same purpose." },
  { startTime: 608.34, person: 'Marty', text: " It's just a different audience, right?" },
  {
    startTime: 610.14,
    person: 'Marty',
    text: ' Like a browser plugin is so people can understand what does this mean, right?'
  },
  {
    startTime: 615.5,
    person: 'Marty',
    text: ' What is this piece of information in relation to our shared glossary?'
  },
  {
    startTime: 619.68,
    person: 'Marty',
    text: ' And I would say semantic metadata is exactly the same thing as what Contextive is doing.'
  },
  {
    startTime: 625.6,
    person: 'Marty',
    text: " But for machines to understand within the context of the API specs that we're that we shuffle around, it's the same goal, right?"
  },
  {
    startTime: 633.48,
    person: 'Marty',
    text: ' And like easy interchange between these systems, right?'
  },
  {
    startTime: 637.52,
    person: 'Marty',
    text: ' A way of modelling this thing relates to this idea.'
  },
  { startTime: 641.82, person: 'Marty', text: ' Same problem space, different angles.' },
  { startTime: 644.22, person: 'Karol', text: ' Yeah, yeah.' },
  { startTime: 645.24, person: 'Karol', text: ' Pretty much.' },
  {
    startTime: 646,
    person: 'Karol',
    text: " Okay, before we jump in deeper into now, anything we show today as a screen share, it's better at best."
  },
  {
    startTime: 657.38,
    person: 'Karol',
    text: ' Because just to make a disclaimer, I met Marty over LinkedIn.'
  },
  { startTime: 665.94, person: 'Karol', text: ' We met in a common thread.' },
  { startTime: 668, person: 'Karol', text: ' Marty reached out.' },
  {
    startTime: 668.86,
    person: 'Karol',
    text: ' We started chatting, ended up chatting about six hours on Google Meet, just nerding out about integrations and integration architecture and interoperability topics, and also the products Marty is building.'
  },
  {
    startTime: 682.86,
    person: 'Karol',
    text: " And the thing that we're showing today is not the product that Marty is responsible for as a founder of the company."
  },
  { startTime: 691.3, person: 'Karol', text: " It's not yet productized at all." },
  { startTime: 693.58, person: 'Karol', text: " It's something I dared Marty into." },
  { startTime: 697.74, person: 'Karol', text: ' And he just built it in two weeks.' },
  { startTime: 700.22, person: 'Karol', text: ' To be clear.' },
  { startTime: 701.32, person: 'Marty', text: ' So it will fail.' },
  { startTime: 704.88, person: 'Marty', text: " It's absolutely going to go wrong." },
  { startTime: 706.96, person: 'Marty', text: ' It will absolutely go wrong.' },
  {
    startTime: 708.3,
    person: 'Marty',
    text: ' But this is what happens when you get a couple of people on a call and someone says to the other one, man, it would be cool if.'
  },
  {
    startTime: 717.08,
    person: 'Marty',
    text: " And then you're like, yeah, geez, that would be cool, wouldn't it?"
  },
  { startTime: 720.92, person: 'Marty', text: ' And I reckon I know how to build that.' },
  {
    startTime: 725.76,
    person: 'Karol',
    text: ' So Marty was, just to finish the disclaimer, Marty was so awesome to take all the tools'
  },
  {
    startTime: 731.68,
    person: 'Karol',
    text: ' that he had already built and change the context of use of those tools to an analytical context'
  },
  {
    startTime: 738.02,
    person: 'Karol',
    text: ' that I spin up in my brain through the conversation that I said it would be cool if we could make'
  },
  {
    startTime: 743.4,
    person: 'Karol',
    text: ' it an analysis tool for integration architects to actually be able to do analysis over semantic'
  },
  {
    startTime: 749,
    person: 'Karol',
    text: ' analysis of APIs to be able to derive to a conclusion what is the integration, what is'
  },
  { startTime: 756.7, person: 'Karol', text: ' the orchestration, et cetera, a lot quicker.' },
  {
    startTime: 760.26,
    person: 'Karol',
    text: " And Marty was like, yeah, all right, let's do this."
  },
  {
    startTime: 762.52,
    person: 'Karol',
    text: ' And Marty started two weeks ago, a little bit over two weeks, I believe was that.'
  },
  { startTime: 768.02, person: 'Karol', text: ' No, no, we exactly did it on a Wednesday.' },
  { startTime: 770.78, person: 'Karol', text: ' So two weeks ago.' },
  {
    startTime: 772.54,
    person: 'Karol',
    text: ' And today is basically a bit of a show off of what Marty could do in two weeks based on his knowledge about the products he has, the concepts that he has over semantic metadata that were already built into the products and how he just translated that into an analytical tool.'
  },
  {
    startTime: 790.18,
    person: 'Karol',
    text: ' But, again, a very early bird in terms of whatever it is.'
  },
  { startTime: 795.78, person: 'Karol', text: ' This is not yet something we can use.' },
  { startTime: 797.8, person: 'Karol', text: ' It still requires a little bit of work.' },
  {
    startTime: 800.64,
    person: 'Karol',
    text: " But hopefully, soon enough, we'll be able to use an open source version of such an analytical tool provided by Marty, and maybe we'll change the game on integration analysis."
  },
  { startTime: 811.1, person: 'Marty', text: ' Maybe we will.' },
  { startTime: 813.14, person: 'Marty', text: ' I should say, actually, you gave me two weeks.' },
  {
    startTime: 817.02,
    person: 'Marty',
    text: ' I spent a week and a half meaning to get around to it.'
  },
  { startTime: 820.86, person: 'Marty', text: ' But this is actually from Monday.' },
  { startTime: 825.62, person: 'Karol', text: ' You nearly made me spit out my coffee.' },
  {
    startTime: 828.98,
    person: 'Karol',
    text: " It's not like we've got some other stuff going on, you know?"
  },
  { startTime: 832.64, person: 'Karol', text: ' Of course.' },
  {
    startTime: 833.6,
    person: 'Karol',
    text: ' So to continue the disclaimer, Marty did that after hours beyond his day-to-day.'
  },
  { startTime: 842.28, person: 'Karol', text: ' So kudos.' },
  {
    startTime: 844.38,
    person: 'Karol',
    text: ' Absolutely ridiculous that you managed to pull it off.'
  },
  {
    startTime: 847.46,
    person: 'Karol',
    text: ' Because before today, I have seen one screenshot.'
  },
  {
    startTime: 852.12,
    person: 'Karol',
    text: ' Now, just before the stream, Marty popped it up on screen and showed me.'
  },
  { startTime: 857.62, person: 'Karol', text: ' Okay.' },
  {
    startTime: 858.98,
    person: 'Karol',
    text: ' But to put more context into what the hell are we talking about, right?'
  },
  {
    startTime: 864.12,
    person: 'Karol',
    text: ' Because we just discussed this before the stream that not all people are familiar with what the hell goes into actually designing interoperability, designing integration flows.'
  },
  {
    startTime: 875.6,
    person: 'Karol',
    text: " So I just noted out a few things that we're actually doing as integration architects."
  },
  {
    startTime: 879.92,
    person: 'Karol',
    text: " And first of all, we're helping with business analysis because we're distributed."
  },
  {
    startTime: 886.04,
    person: 'Karol',
    text: ' So as integration architects, we work between various systems.'
  },
  {
    startTime: 888.94,
    person: 'Karol',
    text: " So we need to talk to everybody like a business analyst as well to figure out who has the data, who's the master of data, where the data should go, from where, when, how, when it's relevant, et cetera."
  },
  { startTime: 900.44, person: 'Karol', text: ' And then we build integrations.' },
  {
    startTime: 903.16,
    person: 'Karol',
    text: ' And the whole thing of identifying data sources that are the right data sources, it takes a lot.'
  },
  {
    startTime: 911.48,
    person: 'Karol',
    text: ' It usually is just walking through the company or inviting people to meetings.'
  },
  {
    startTime: 916.16,
    person: 'Karol',
    text: ' You have a lot of conversations just to wiggle out who the hell should be responsible for a set of data and then connect to that system, pull that data and transfer it wherever that is.'
  },
  {
    startTime: 926.1,
    person: 'Karol',
    text: " And it doesn't even matter if that's events, request, supply, batches, it's the same work."
  },
  { startTime: 931.88, person: 'Karol', text: ' Yeah, exactly.' },
  {
    startTime: 933.5,
    person: 'Karol',
    text: " Then after that, we have lots of discussions about contracts, who's going to supply what, when, in what form, SLAs."
  },
  {
    startTime: 943.92,
    person: 'Karol',
    text: ' And then we dive into the actual contracts, which are more physical, more tangible, which are specs.'
  },
  {
    startTime: 950.7,
    person: 'Karol',
    text: ' Specs being open API spec, WSDLs, definitions of procedures on databases, async API, the CSV structure, whatever is needed to go.'
  },
  {
    startTime: 962.94,
    person: 'Karol',
    text: ' And I wanted to show you guys, because Marty just triggered me before the stream.'
  },
  { startTime: 967.98, person: 'Karol', text: ' And so I started digging in my Google Drive.' },
  {
    startTime: 970.42,
    person: 'Karol',
    text: " How does that look like at a scale when you don't have analytical tools and you have to build from scratch?"
  },
  {
    startTime: 978.08,
    person: 'Karol',
    text: ' So back in the day, I made this clunky spreadsheet that was back when I was working as a consultant in PwC.'
  },
  {
    startTime: 988.68,
    person: 'Karol',
    text: " And this is basically a spreadsheet, this one, this tab actually is a demo of capabilities where we're mapping three layers in MuleSoft."
  },
  {
    startTime: 998.3,
    person: 'Karol',
    text: " That's why the heading here is MuleSoft Experience API."
  },
  { startTime: 1003.42, person: 'Karol', text: " We're mapping three layers." },
  {
    startTime: 1005.16,
    person: 'Karol',
    text: " We're mapping metadata of the communication, so all the HTTP headers."
  },
  {
    startTime: 1009.66,
    person: 'Karol',
    text: " We're mapping the data model of an order that is not a flat structure."
  },
  {
    startTime: 1016.4,
    person: 'Karol',
    text: ' We map all the different types, what these are, any restrictions, enumerations, any cardinality for different types, et cetera, et cetera.'
  },
  {
    startTime: 1027.56,
    person: 'Karol',
    text: " Maybe I should actually make it slightly bigger so that it's a better view."
  },
  {
    startTime: 1032.92,
    person: 'Karol',
    text: ' And this goes on through several layers of Mule.'
  },
  { startTime: 1038, person: 'Karol', text: ' And this is actually an orchestrated flow.' },
  { startTime: 1039.64, person: 'Karol', text: ' So we have a get operation right here.' },
  { startTime: 1042.319, person: 'Karol', text: ' We have customer, get customer by ID.' },
  { startTime: 1045.06, person: 'Karol', text: ' We transfer ID as a query parameter.' },
  { startTime: 1047.56, person: 'Karol', text: ' Well, fantastic.' },
  {
    startTime: 1048.96,
    person: 'Karol',
    text: ' And then it lands in a CRM system and we get a response.'
  },
  { startTime: 1054.22, person: 'Karol', text: ' Right?' },
  {
    startTime: 1055,
    person: 'Karol',
    text: ' And all of this for me, this is very readable and easy to go with.'
  },
  { startTime: 1058.3, person: 'Karol', text: ' And I have predefined types and whatnot.' },
  { startTime: 1060.5, person: 'Karol', text: ' So filling this out for me is peachy.' },
  {
    startTime: 1062.2,
    person: 'Karol',
    text: ' And this is basically the documentation I could give a developer later on for the developer to figure out how to implement it, how to make it into an open API spec, which field maps to which field in different systems, what is the data model of the integration platform, because obviously some of these will be internal data models.'
  },
  { startTime: 1086.48, person: 'Karol', text: ' And then, yeah, we do mappings.' },
  {
    startTime: 1088.68,
    person: 'Karol',
    text: ' We describe what are the mapping rules, where to map it from to the actual call to the system to actually create, in this case, create an invoice.'
  },
  { startTime: 1098.66, person: 'Karol', text: ' If you look at this, this is horrendous.' },
  { startTime: 1101.28, person: 'Karol', text: ' This is clunky.' },
  { startTime: 1102.08, person: 'Karol', text: ' This is very hard to work with.' },
  {
    startTime: 1104.38,
    person: 'Karol',
    text: ' But this was the best tool I could make up given the scope of time that I had to do it.'
  },
  {
    startTime: 1112.76,
    person: 'Karol',
    text: ' And basically a lot of integration specialists just rely on these kind of mapping spreadsheets just to be able to figure out what maps to what and how to build that integration, not to miss any data.'
  },
  {
    startTime: 1124.54,
    person: 'Karol',
    text: ' And they compare and contrast all the models just to see if they align with each other in scope of data.'
  },
  { startTime: 1131.36, person: 'Karol', text: ' So also scope of semantics.' },
  {
    startTime: 1135.12,
    person: 'Karol',
    text: ' So the meaning of data, is the meaning of data the same?'
  },
  {
    startTime: 1138.32,
    person: 'Karol',
    text: ' Do we have matches on patterns and enumerations?'
  },
  { startTime: 1142.84, person: 'Karol', text: " Because maybe we don't." },
  { startTime: 1144.54, person: 'Karol', text: " Maybe that's a problem." },
  { startTime: 1145.46, person: 'Karol', text: ' Maybe not.' },
  { startTime: 1147.36, person: 'Karol', text: ' Lots of questions there.' },
  {
    startTime: 1148.62,
    person: 'Karol',
    text: ' And usually we find problems when we do these mappings.'
  },
  {
    startTime: 1153.24,
    person: 'Karol',
    text: " We start to find that there are misalignments in data models if we have the same data objects in both systems, but they're defined differently."
  },
  { startTime: 1162.16, person: 'Karol', text: " And they don't have the same scope of fields." },
  { startTime: 1164.12, person: 'Karol', text: ' And then we have a problem.' },
  {
    startTime: 1165.2,
    person: 'Karol',
    text: " And that means that we need to work it out on the level of the whole solution that, hey, we're missing these fields."
  },
  { startTime: 1171.8, person: 'Karol', text: " What's going to happen if we don't have them?" },
  { startTime: 1173.9, person: 'Karol', text: ' Et cetera, et cetera.' },
  { startTime: 1175.88, person: 'Karol', text: ' So this is what I used.' },
  {
    startTime: 1177.88,
    person: 'Karol',
    text: " And to an extent, we're still using these to map out specific integrations."
  },
  { startTime: 1182.24, person: 'Karol', text: ' And this can be a spreadsheet end to end.' },
  {
    startTime: 1187.14,
    person: 'Karol',
    text: ' Or this could be a page in Confluence mapping just a specific API.'
  },
  {
    startTime: 1192.78,
    person: 'Karol',
    text: ' This can be all sorts of different types of documentation.'
  },
  {
    startTime: 1196.16,
    person: 'Karol',
    text: " I've even seen these tables flying around HLDs at times, so like regular documents."
  },
  { startTime: 1202.94, person: 'Karol', text: ' Is it easy to use?' },
  { startTime: 1204.3, person: 'Karol', text: ' No.' },
  { startTime: 1204.82, person: 'Karol', text: ' Is it helpful?' },
  { startTime: 1207.74, person: 'Karol', text: ' Yes, to a large extent.' },
  { startTime: 1210.48, person: 'Karol', text: ' But can we do it better?' },
  {
    startTime: 1212.72,
    person: 'Karol',
    text: ' Now, Marty will now tell you that, yes, we potentially can do it better.'
  },
  {
    startTime: 1217.48,
    person: 'Karol',
    text: " And that's why I dared Marty into actually doing that development work that he'd done since Monday."
  },
  {
    startTime: 1231.48,
    person: 'Marty',
    text: ' If I could just add on to that, I think that spreadsheet actually does a really good job of visualising the amount of work that goes in to the analysis phase of building integration.'
  },
  {
    startTime: 1245.34,
    person: 'Marty',
    text: " You can look at that, and you can sense, man, there's a lot of work to do here."
  },
  {
    startTime: 1253.96,
    person: 'Marty',
    text: " I've worked for consultancies, and we've done a tonne of integration work."
  },
  {
    startTime: 1257.02,
    person: 'Marty',
    text: ' And the thing that kind of stuck out to me always was a team would come in, and they would build up an asset like that.'
  },
  {
    startTime: 1264.58,
    person: 'Marty',
    text: " And often, you end up with a thing that's super valuable."
  },
  { startTime: 1270.58, person: 'Marty', text: ' But then a couple of things start to happen.' },
  {
    startTime: 1272.38,
    person: 'Marty',
    text: " One, because it doesn't live next to the source code generation, because it lives in an Excel spreadsheet, you have to maintain it."
  },
  { startTime: 1279.64, person: 'Marty', text: " And it can entropy if you don't." },
  {
    startTime: 1282.32,
    person: 'Marty',
    text: " But also, the other thing that I kind of noticed is you'll have a team come in."
  },
  {
    startTime: 1286.92,
    person: 'Marty',
    text: ' And I should also say, you only really end up with an artefact like that if someone really cares, and someone really wants to put the effort in to do it well.'
  },
  { startTime: 1296.66, person: 'Marty', text: " But let's say that they do." },
  {
    startTime: 1297.7,
    person: 'Marty',
    text: " Let's say that someone cares, and someone really wants to do it well, and you end up with an artefact like that."
  },
  {
    startTime: 1302.22,
    person: 'Marty',
    text: ' And then three months later, another team comes in, and they need to do something else.'
  },
  {
    startTime: 1307,
    person: 'Marty',
    text: " And this knowledge often isn't transferable, because it's not easily discoverable."
  },
  { startTime: 1312.24, person: 'Marty', text: " It's not machine discoverable." },
  { startTime: 1314.4, person: 'Marty', text: " It's not machine interchangeable." },
  {
    startTime: 1316.98,
    person: 'Marty',
    text: " And teams don't, like the interop just isn't natively there."
  },
  {
    startTime: 1322.36,
    person: 'Marty',
    text: " So I would actually argue the analysis part that you've just shown is probably, and you probably know this better than me, but I would say that that is by far one of the chunkiest parts of building out the integration is to go, where is all this data?"
  },
  {
    startTime: 1334.58,
    person: 'Marty',
    text: ' And how does all of this stuff connect together?'
  },
  {
    startTime: 1336.52,
    person: 'Marty',
    text: " And if that is the most expensive part, we're starting from zero every single time on it."
  },
  {
    startTime: 1343.5,
    person: 'Marty',
    text: " And this artefact that we produce kind of interferes and doesn't, you know, it doesn't stay up to date, doesn't stay accurate."
  },
  {
    startTime: 1350.16,
    person: 'Karol',
    text: ' Yeah, it really depends on the maturity of the organisation.'
  },
  {
    startTime: 1354.4,
    person: 'Karol',
    text: ' So if you have a well-developed integration team, or integration architecture team, and a company, then these artefacts are actually reused between different projects.'
  },
  {
    startTime: 1368.22,
    person: 'Karol',
    text: ' Otherwise, consulting wise, these artefacts are a project deliverable that nobody iterates over later.'
  },
  { startTime: 1375.34, person: 'Karol', text: " And it's just delivered." },
  {
    startTime: 1376.84,
    person: 'Karol',
    text: " It's consumed through implementing the changes in changes we're implementing from scratch, the open API spec, WSDL, or whatever other interface definition."
  },
  { startTime: 1388.6, person: 'Karol', text: ' And then this document just goes to dev null.' },
  { startTime: 1392.9, person: 'Karol', text: " And that's it, right?" },
  { startTime: 1394.96, person: 'Karol', text: ' And nobody sees that ever.' },
  {
    startTime: 1396.56,
    person: 'Karol',
    text: ' And if you go back to that specific client and start making changes to the integration flows, you pretty much build it anew.'
  },
  {
    startTime: 1405.18,
    person: 'Karol',
    text: " So the highest that I've seen so far is that people actually either took JSON or XML, or took open API spec or WSDL and parsed it to create that semi-flat structure in a spreadsheet to just quickly map out the definition of the data model."
  },
  {
    startTime: 1428.68,
    person: 'Karol',
    text: ' And that was the highlight of the automation in that space.'
  },
  {
    startTime: 1432.18,
    person: 'Karol',
    text: ' Just to dump it into the spreadsheet and then do that comparison manually.'
  },
  {
    startTime: 1438.16,
    person: 'Karol',
    text: " And that comparison and finding the right definitions is, yeah, it's a lot of work."
  },
  { startTime: 1445.14, person: 'Karol', text: " It's a lot of legwork." },
  { startTime: 1446.1, person: 'Karol', text: " It's a lot of talking." },
  {
    startTime: 1447,
    person: 'Karol',
    text: " It's a lot of asking relevant questions that you still need to ask them."
  },
  {
    startTime: 1453,
    person: 'Karol',
    text: ' But you could probably ask a lot less if you had the right tools to do proper discovery, et cetera.'
  },
  {
    startTime: 1458.96,
    person: 'Karol',
    text: " Then you should, because now we're asking, where are those data objects?"
  },
  { startTime: 1466.56, person: 'Karol', text: ' And are those the right data objects?' },
  {
    startTime: 1469.14,
    person: 'Karol',
    text: ' And we could potentially ask only, are those the right data objects?'
  },
  { startTime: 1473.32, person: 'Karol', text: ' Just to confirm.' },
  { startTime: 1474.72, person: 'Karol', text: ' Rather than do the whole search.' },
  {
    startTime: 1478.14,
    person: 'Marty',
    text: ' But also, I think, not to lead the witness, but I think a lot of the challenge of building these integrations, of the question of what is the discovery and what is the mapping, becomes, if the stuff is expressed well, that becomes a solved problem.'
  },
  {
    startTime: 1500.72,
    person: 'Marty',
    text: " If software can introspect API specs and can work out how do we stitch this stuff together, then it's kind of a solved problem."
  },
  {
    startTime: 1508.66,
    person: 'Marty',
    text: ' I think the other failure scenario that exists with these spreadsheets is then you end up rolling off the project.'
  },
  {
    startTime: 1517.44,
    person: 'Marty',
    text: " And a lot of the places I've worked, banks or insurance, highly regulated organisations, right?"
  },
  { startTime: 1523.88, person: 'Marty', text: " And so you can't just have an integration." },
  {
    startTime: 1526.3,
    person: 'Marty',
    text: " You also, if you're facing off to a regulator, you have to show lineage."
  },
  {
    startTime: 1530.72,
    person: 'Marty',
    text: " And so those spreadsheets will often get converted into now a regulator-facing artefact where if you're wrong, there's a material fine to the company."
  },
  {
    startTime: 1542.54,
    person: 'Marty',
    text: " Because it's like, well, this is the best thing that we have, right?"
  },
  {
    startTime: 1544.82,
    person: 'Marty',
    text: ' This is, these consultants came in, they built this thing, this is a really good artefact.'
  },
  {
    startTime: 1548.8,
    person: 'Marty',
    text: " So we're going to show it to the regulators to show that we know what we're doing, but it's entirely disconnected."
  },
  {
    startTime: 1553.34,
    person: 'Marty',
    text: " It's like change happens, people come in, they upgrade things, they evolve schemas, change, even from the analysis phase to the build phase, things drift because it's not yet perfect."
  },
  {
    startTime: 1566.86,
    person: 'Karol',
    text: ' And then the question is, is anybody updating the actual documentation when the drift happens during implementation?'
  },
  {
    startTime: 1574.88,
    person: 'Karol',
    text: " And I've seen that several times that that didn't happen."
  },
  {
    startTime: 1577.62,
    person: 'Karol',
    text: " And I've seen that also several times that people actually updated those documents just to have that clarity and documentation."
  },
  { startTime: 1583.6, person: 'Karol', text: ' So it really depends on the maturity.' },
  { startTime: 1587.04, person: 'Marty', text: ' Yeah, yeah.' },
  { startTime: 1590.76, person: 'Marty', text: ' Yeah, so do we dive in now?' },
  {
    startTime: 1595.02,
    person: 'Karol',
    text: " Well, I think that's a substantial background for the problem that we're facing."
  },
  { startTime: 1602.1, person: 'Karol', text: ' So semantic metadata, I mean, sure.' },
  {
    startTime: 1605.68,
    person: 'Karol',
    text: " Maybe let's start a little bit then with your background, because we're talking basically of an analytical solution that you made on the fly based on the products that you actually have."
  },
  {
    startTime: 1620.58,
    person: 'Karol',
    text: ' And the particular product that is the key here is a taxi, right?'
  },
  {
    startTime: 1625.84,
    person: 'Karol',
    text: ' So I think it would be good to first tell everybody what the hell taxi is.'
  },
  { startTime: 1632.88, person: 'Karol', text: " Yeah, well, it's relevant, right?" },
  { startTime: 1636.08, person: 'Karol', text: ' So maybe drop a few words on that then.' },
  { startTime: 1639.28, person: 'Marty', text: ' So taxi is a language.' },
  { startTime: 1643.48, person: 'Marty', text: " It's an open source language." },
  { startTime: 1645.62, person: 'Marty', text: " It's entirely open source." },
  { startTime: 1647.02, person: 'Marty', text: " It's up on GitHub." },
  { startTime: 1648.22, person: 'Marty', text: ' You should go and check it out.' },
  {
    startTime: 1649.56,
    person: 'Marty',
    text: ' I probably should have given you links to put up.'
  },
  { startTime: 1652.26, person: 'Marty', text: ' Have you got a link to put up?' },
  { startTime: 1655.24, person: 'Karol', text: " I'll give you a link in a moment, don't worry." },
  {
    startTime: 1657.06,
    person: 'Marty',
    text: ' Okay, so in the idea behind taxi, taxi is trying to solve two problems.'
  },
  { startTime: 1662.58, person: 'Marty', text: ' One is how do we...' },
  {
    startTime: 1664.66,
    person: 'Marty',
    text: " The first problem is everything that we've just talked about, right?"
  },
  {
    startTime: 1667.26,
    person: 'Marty',
    text: ' If you have all of these different data sources, all of these open API specs, and you want systems to remain decoupled, but you want them to be interoperable, how do we embed that knowledge inside those specs?'
  },
  { startTime: 1677.94, person: 'Marty', text: " And that's the semantics, right?" },
  {
    startTime: 1679.46,
    person: 'Marty',
    text: ' How do we embed those semantics inside the specs?'
  },
  { startTime: 1682.42, person: 'Marty', text: " And so that's kind of the first challenge." },
  {
    startTime: 1684.1,
    person: 'Marty',
    text: " And so for that, we built what we call a semantic type system, which is strongly typed, but it's a way of saying, hey, this string isn't just any old string."
  },
  { startTime: 1693.98, person: 'Marty', text: ' It is a first name.' },
  { startTime: 1695.42, person: 'Marty', text: " It's a last name." },
  { startTime: 1696.26, person: 'Marty', text: " It's a customer ID." },
  { startTime: 1697.16, person: 'Marty', text: " It's a date of birth." },
  {
    startTime: 1699.18,
    person: 'Marty',
    text: ' And I would say that taxi as a type system is obsessed with scalars because the goal is to drive interoperability and to drive composition and scalars compose so much better than models.'
  },
  {
    startTime: 1713.8,
    person: 'Marty',
    text: ' Because every system will have a different model representation, different field names, different, like you said before, different structures, different nestings.'
  },
  {
    startTime: 1723,
    person: 'Marty',
    text: ' But when you get down to the scalar level, actually, these pieces of information are hugely interoperable, right?'
  },
  {
    startTime: 1729.8,
    person: 'Marty',
    text: " Like a customer ID is a customer ID regardless of the field's name that has been assigned by the team that built the system."
  },
  {
    startTime: 1737.02,
    person: 'Marty',
    text: " So the idea behind taxi is to obsess about these scalars and to be a way to express them and model them as a type system and then take that information and recognising that in an enterprise, you've got open API teams and you've got Avro teams and you've got like Java teams and you've got .NET teams and you've got lots of, like enterprises are heterogeneous."
  },
  {
    startTime: 1760.86,
    person: 'Marty',
    text: " So you've got lots of different teams that are using lots of different bits of technology."
  },
  {
    startTime: 1764.62,
    person: 'Marty',
    text: " And so one of the ideas behind taxi is you can't just rock up to an enterprise and say, we're a taxi shop now."
  },
  { startTime: 1770.56, person: 'Marty', text: ' Everyone must adopt this.' },
  {
    startTime: 1771.66,
    person: 'Marty',
    text: ' So you have to be able to interoperate or integrate with whatever the technologies are that these teams are using.'
  },
  {
    startTime: 1779.6,
    person: 'Marty',
    text: " And so one of the ideas is that you can take this information, these semantic ideas and embed them in your API specs, whether that's open API or a WSDL or Avro."
  },
  {
    startTime: 1790.1,
    person: 'Marty',
    text: " Or if you're in a scenario where you don't have an API spec, taxi's got you back there as well because we also wanted to create this really succinct, beautiful way of kind of expressing contracts."
  },
  {
    startTime: 1802.84,
    person: 'Marty',
    text: " So I mean, open API is the de facto standard, but I don't think it's contentious to say that it's verbose, right?"
  },
  {
    startTime: 1809.58,
    person: 'Marty',
    text: ' Like the signal to noise ratio of open API is quite bad, right?'
  },
  {
    startTime: 1814.64,
    person: 'Marty',
    text: " Like there's these huge YAML documents that take a long time to say very much."
  },
  {
    startTime: 1821.04,
    person: 'Marty',
    text: " So no one's gonna replace open API with taxi, but if you've got a CSV file that doesn't have a schema, taxi's got a really nice way of expressing what that structure is and capturing all the semantics."
  },
  {
    startTime: 1832.98,
    person: 'Marty',
    text: ' So that was the first part was how do we kind of capture this information in a way that machines can read it?'
  },
  {
    startTime: 1838.06,
    person: 'Marty',
    text: " And then the second part is to say, okay, well, now that we do this, now that we understand how these systems can interoperate, let's automate away all of the integration and let's do it dynamically."
  },
  {
    startTime: 1848.82,
    person: 'Marty',
    text: " And so the idea being that if you've got teams that own systems and they're embedding metadata inside of their API specs, that they're responsible for documenting the API, which is kind of, that's the right place for that to sit."
  },
  {
    startTime: 1864.44,
    person: 'Marty',
    text: " And all they're really saying is that this field relates to this semantic concept."
  },
  {
    startTime: 1868.02,
    person: 'Marty',
    text: " They're not talking about how this field relates to some other system or how they're not tightly coupling knowledge of other systems into their API specs."
  },
  {
    startTime: 1875.8,
    person: 'Marty',
    text: " They're coupling in, they're doing semantic coupling to steal, just to use your phrase earlier."
  },
  {
    startTime: 1882.06,
    person: 'Karol',
    text: " So basically they're coupling the spec to the company language, to the language."
  },
  { startTime: 1888, person: 'Marty', text: ' Exactly.' },
  { startTime: 1888.8, person: 'Karol', text: ' Yep.' },
  {
    startTime: 1889.14,
    person: 'Karol',
    text: ' So the semantic meaning of that attribute, what does that attribute convey in terms of meaning?'
  },
  {
    startTime: 1894.22,
    person: 'Karol',
    text: " And there, so it's actually, you literally put it as a type that this is this particular meaning."
  },
  { startTime: 1902.44, person: 'Marty', text: ' Yeah, exactly.' },
  {
    startTime: 1904.04,
    person: 'Marty',
    text: " And then, and then, and we'll kind of see this in action a bit later, but once you've done that, you can then start asking for data and the integration really largely becomes inferable."
  },
  {
    startTime: 1916.8,
    person: 'Marty',
    text: ' So you can infer composition of services and you can infer transformation and you can infer mapping by just by kind of looking at what someone has asked for and what the different data sources are that are around.'
  },
  {
    startTime: 1936.42,
    person: 'Marty',
    text: ' So yeah, if you have CSV headers and any values would be able to give a possible data sources where the value could live.'
  },
  { startTime: 1943.66, person: 'Marty', text: ' Yeah, I mean, you can define a schema for that.' },
  { startTime: 1946.88, person: 'Marty', text: ' Can you do that, Julius?' },
  { startTime: 1949.3, person: 'Marty', text: ' Yes, you can.' },
  { startTime: 1950.48, person: 'Marty', text: " Yeah, it's been a while, but yes, you can." },
  { startTime: 1953.68, person: 'Marty', text: ' Yeah.' },
  { startTime: 1955.96, person: 'Marty', text: ' Yeah.' },
  {
    startTime: 1956.66,
    person: 'Karol',
    text: ' So because as a developer, you would still have the semantic understanding of that CSV, even though there are no headers in the CSV, because you have to have that semantic understanding to be able to integrate into it.'
  },
  { startTime: 1968.34, person: 'Marty', text: ' Yeah, exactly.' },
  { startTime: 1969.54, person: 'Marty', text: ' Exactly.' },
  {
    startTime: 1969.94,
    person: 'Karol',
    text: ' Pull that data into whatever system you want to pull it into.'
  },
  { startTime: 1972.98, person: 'Marty', text: ' Yeah, like we had this discussion.' },
  {
    startTime: 1974.88,
    person: 'Marty',
    text: " We had this discussion ages ago when I was on site with a client and they said, this system doesn't have a contract."
  },
  { startTime: 1985.36, person: 'Marty', text: " And I'm like, it does." },
  { startTime: 1987.28, person: 'Marty', text: ' It definitely does.' },
  {
    startTime: 1988.3,
    person: 'Marty',
    text: ' You might not have written it down, but these systems have a contract.'
  },
  {
    startTime: 1992.28,
    person: 'Marty',
    text: ' Like, yeah, but, you know, different fields mean different things depending on different scenarios.'
  },
  { startTime: 1996.82, person: 'Marty', text: " I'm like, that's cool." },
  { startTime: 1998.08, person: 'Marty', text: " Like, that's quirky." },
  { startTime: 1999.36, person: 'Marty', text: " That's still a contract." },
  {
    startTime: 2000.32,
    person: 'Marty',
    text: " All of these systems, even if they're quirky and even if they're out there, and to the point that was just made, even if they feel like fringe cases, they're not, right?"
  },
  {
    startTime: 2010.42,
    person: 'Marty',
    text: " Like data is messy and enterprises are legacy and they're kind of unstructured, but systems are reading this."
  },
  { startTime: 2016.58, person: 'Marty', text: ' And so therefore there is a contract.' },
  {
    startTime: 2018.94,
    person: 'Marty',
    text: " Whether it's not written down, like the contract exists."
  },
  {
    startTime: 2021.88,
    person: 'Karol',
    text: " If we're talking about this kind of thing, if you look at it from architecture perspective, we often talk about the thing called implicit architecture."
  },
  {
    startTime: 2031.3,
    person: 'Karol',
    text: ' Nobody defined that architecture, but we built something.'
  },
  { startTime: 2034.32, person: 'Karol', text: ' That means that we built architecture.' },
  { startTime: 2036.06, person: 'Karol', text: ' So it implies that there is an architecture.' },
  {
    startTime: 2038.4,
    person: 'Karol',
    text: " The thing that it's not defined doesn't mean it's not there because it's still there."
  },
  { startTime: 2043.22, person: 'Karol', text: " It's messy." },
  { startTime: 2044.16, person: 'Karol', text: " It's spaghetti." },
  { startTime: 2045.32, person: 'Karol', text: " It's big bowl of mud." },
  { startTime: 2046.98, person: 'Karol', text: " Fine, but it's implicit." },
  { startTime: 2049.219, person: 'Karol', text: ' It is there.' },
  { startTime: 2049.88, person: 'Karol', text: ' We build it.' },
  { startTime: 2050.46, person: 'Karol', text: ' So it is there.' },
  {
    startTime: 2050.96,
    person: 'Karol',
    text: " So if you build an integration or build datasets and expose them somehow, you don't have a written down contract."
  },
  { startTime: 2058.219, person: 'Karol', text: ' There is still a contract.' },
  { startTime: 2059.38, person: 'Karol', text: " It's implied." },
  { startTime: 2060.52, person: 'Marty', text: ' Yep, exactly.' },
  { startTime: 2061.86, person: 'Marty', text: ' Yep.' },
  { startTime: 2062.44, person: 'Marty', text: ' Yep.' },
  { startTime: 2064.659, person: 'Marty', text: " So yeah, so that's the goal." },
  { startTime: 2067.159, person: 'Marty', text: ' So Taxi is the language.' },
  {
    startTime: 2069.28,
    person: 'Marty',
    text: ' TaxiQL is the query language that is a way of asking for data.'
  },
  {
    startTime: 2073.679,
    person: 'Marty',
    text: " And the thing that's really nice about that, one of the designs around it, is when we think about going back to the concept of coupling, when we think about the way that we tend to build integration today, consumers of data end up tightly coupled to their producers, right?"
  },
  {
    startTime: 2091.26,
    person: 'Marty',
    text: " Because they end up pulling in, you know, inevitably, whether that consumer is sitting in some middleware somewhere or whether it's sitting kind of at the end, at the leaf node of the team who's actually using it, you end up knowing that the thing that you need is, is, you know, customer.identifiers.id, right?"
  },
  {
    startTime: 2111.88,
    person: 'Marty',
    text: " And all of a sudden, you're tightly coupled to that system's contract."
  },
  {
    startTime: 2115.54,
    person: 'Marty',
    text: ' And so one of the goals of TaxiQL is to kind of invert that and for a consumer of data to define the contract of data that they want.'
  },
  {
    startTime: 2125.06,
    person: 'Marty',
    text: ' This is the information that I need and to push it up to a broker.'
  },
  {
    startTime: 2130.34,
    person: 'Marty',
    text: ' And, you know, this is the same way that we build integration manually today.'
  },
  {
    startTime: 2133.54,
    person: 'Marty',
    text: ' A consumer says, this is the way, this is the data that I need.'
  },
  {
    startTime: 2136.32,
    person: 'Marty',
    text: " And they push it to a broker and maybe that broker is an engineering team and or maybe it's like middleware."
  },
  { startTime: 2142.88, person: 'Marty', text: " But in our case, it's just automated." },
  {
    startTime: 2144.4,
    person: 'Marty',
    text: ' They just push it to a broker and they say, hey, this is the data contract that I need.'
  },
  { startTime: 2148.36, person: 'Marty', text: ' Can you work out where to get it?' },
  {
    startTime: 2153.76,
    person: 'Karol',
    text: " Well, it's, in essence, if you look at this, you're right about the coupling."
  },
  {
    startTime: 2161.64,
    person: 'Karol',
    text: " If the level of coupling that it is in point-to-point communication or even driven communication, it's exactly that, that we are very highly coupled based on contracts, data models, data formats."
  },
  {
    startTime: 2177.2,
    person: 'Karol',
    text: ' And this is something that heavily influences all systems that communicate.'
  },
  {
    startTime: 2183.48,
    person: 'Karol',
    text: ' The moment you introduce an integration platform and then behind taxi, you have Orbital, which is one of your products, which is an integration platform.'
  },
  {
    startTime: 2191.4,
    person: 'Karol',
    text: " Then you actually loosen the coupling between those systems because that's the role of an integration platform per se."
  },
  {
    startTime: 2201.16,
    person: 'Karol',
    text: " The difference is that with TaxiLang, well, taxi, TaxiLang is the domain, you can actually drastically speed up that process of loosening that coupling in that sense because then the querying for information, for what data sets there are, is not based on understanding data models, it's on understanding what data you want business-wise."
  },
  {
    startTime: 2229.26,
    person: 'Karol',
    text: " So it's a completely different level of abstraction we're working on."
  },
  { startTime: 2234.36, person: 'Marty', text: ' Yeah, yeah.' },
  {
    startTime: 2235.5,
    person: 'Marty',
    text: ' I mean, the idea that we built this around was, you know, systems are tightly coupled if a producer changes a thing and someone breaks, right?'
  },
  {
    startTime: 2248.62,
    person: 'Marty',
    text: " If a producer changes the contract and a thing breaks and whether it's the end consumer or the middleware, often all you've done is you've just shifted the point where the breakage occurs, you've just shifted where the coupling lives."
  },
  {
    startTime: 2259.6,
    person: 'Marty',
    text: ' And you are definitely better off having that coupling living in centralised middleware than in 30 different consumers, right?'
  },
  {
    startTime: 2267.62,
    person: 'Marty',
    text: ' You are definitely better off having it there, but it is still coupled, right?'
  },
  { startTime: 2272.64, person: 'Marty', text: ' It is coupled in one location.' },
  {
    startTime: 2274.64,
    person: 'Marty',
    text: " And so we're kind of wanting to go, well, how far can we push that?"
  },
  {
    startTime: 2278.6,
    person: 'Karol',
    text: " Yeah, so when I describe, when I teach people integration architecture, it's usually I explain to them that in point-to-point or EDA, you have direct coupling between those business systems and then the impact of changes is usually very, very high on all interested parties that are communicating."
  },
  {
    startTime: 2299.34,
    person: 'Karol',
    text: ' The moment we put an integration platform in between them, then the integration platform is tightly coupled to each individual system, but those systems are no longer coupled to each other, other than semantically, most of the times.'
  },
  {
    startTime: 2315.38,
    person: 'Karol',
    text: ' Well, hopefully, because of course you can screw up an integration platform and create tighter coupling between systems through the integration platform itself, because that happens.'
  },
  {
    startTime: 2325.6,
    person: 'Karol',
    text: ' But if you do it right, then the level of coupling between domain systems is only semantic.'
  },
  {
    startTime: 2330.84,
    person: 'Karol',
    text: " And then they are directly, tightly coupled to, well, depends again on the type of communication, but it's a tighter coupling to the integration platform."
  },
  {
    startTime: 2342.78,
    person: 'Karol',
    text: " And if you would look at it from the perspective of even Orbital as an integration platform, that's exactly the same case."
  },
  {
    startTime: 2349.84,
    person: 'Karol',
    text: " You would still have that level of, let's say, tighter coupling between Orbital and all those data producers, data consumers, or just business systems, domain systems."
  },
  {
    startTime: 2362.14,
    person: 'Karol',
    text: ' Only the process to getting that to live and work with each other is different and somewhat simplified because we are working now on the semantic level of data through taxi.'
  },
  { startTime: 2378.04, person: 'Marty', text: ' Yeah, I mean, I would add some colour to that.' },
  { startTime: 2381.54, person: 'Marty', text: " I mean, Orbital doesn't let you..." },
  { startTime: 2384.38, person: 'Marty', text: ' Orbital is a stubborn bit of middleware.' },
  { startTime: 2388.52, person: 'Marty', text: " It won't let you write glue." },
  {
    startTime: 2391.76,
    person: 'Marty',
    text: ' Like there is no way inside of Orbital to go and say, this field maps to that field.'
  },
  {
    startTime: 2397.76,
    person: 'Marty',
    text: ' There is no way to define a custom transformation bit of code.'
  },
  { startTime: 2403.6, person: 'Marty', text: ' You can define business logic, you can.' },
  {
    startTime: 2407.58,
    person: 'Marty',
    text: ' And I have seen people try and bastardise that into mapping logic.'
  },
  {
    startTime: 2411.86,
    person: 'Marty',
    text: ' But you are really pushing against the grain when you do that.'
  },
  {
    startTime: 2416.28,
    person: 'Marty',
    text: ' Orbital tries to do everything through inference.'
  },
  {
    startTime: 2418.92,
    person: 'Karol',
    text: " But that's a completely different topic and we're not going to talk about Orbital today because that's something at the abstraction level higher than semantic metadata that we're talking about today."
  },
  {
    startTime: 2430.92,
    person: 'Karol',
    text: ' So going back to semantic metadata, I think this right now constitutes a bit of a show and tell so that people can put the concept towards what we actually mean by doing that semantic mapping.'
  },
  { startTime: 2448.54, person: 'Karol', text: ' So Marty, your screen is ready?' },
  { startTime: 2450.54, person: 'Marty', text: ' Yeah, I think so.' },
  { startTime: 2451.36, person: 'Marty', text: ' Yeah.' },
  { startTime: 2452.18, person: 'Karol', text: ' All righty.' },
  { startTime: 2453.92, person: 'Karol', text: ' Let me put that on.' },
  { startTime: 2456.14, person: 'Karol', text: ' All right.' },
  {
    startTime: 2457.58,
    person: 'Marty',
    text: ' Yeah, I thought I would spend some time initially inside of the playground because this is not a tool that I pulled together in three nights.'
  },
  {
    startTime: 2466.86,
    person: 'Marty',
    text: " And so we'll spend a bit of time in here and explore this and then we'll kind of explore some of these same ideas inside of the new plugin that we've built."
  },
  {
    startTime: 2477.2,
    person: 'Marty',
    text: " So I think if we look at the thing that you had on your screen before where you had this idea of, and I'm going to get it wrong, but this idea of a customer."
  },
  {
    startTime: 2492.58,
    person: 'Marty',
    text: " And kind of the way that this starts out is, and again, yeah, the way that this starts out is you might have an ID, which is a string, and a name, which is a string, and I don't know, like an email address."
  },
  { startTime: 2508.16, person: 'Marty', text: " That's what sort of string, right?" },
  {
    startTime: 2509.52,
    person: 'Marty',
    text: " And this is kind of like, this is the way that we kind of start out when we're modelling stuff, right?"
  },
  { startTime: 2518.02, person: 'Marty', text: ' Everything is a string.' },
  { startTime: 2518.94, person: 'Marty', text: ' This is kind of a stringly typed object.' },
  {
    startTime: 2521.98,
    person: 'Marty',
    text: " So when you look at something inside of an OpenAPI spec, this is kind of what you're getting, right?"
  },
  {
    startTime: 2526.92,
    person: 'Marty',
    text: " Here's some field names and here's some information about how it's encoded on the wire."
  },
  {
    startTime: 2531.7,
    person: 'Marty',
    text: ' And Taxi is really just about saying, hey, there is a thing called a customer ID and that is encoded as a string.'
  },
  {
    startTime: 2541.7,
    person: 'Marty',
    text: ' So then you can drop down here and you can say, oops, that is a customer ID, right?'
  },
  {
    startTime: 2547.14,
    person: 'Marty',
    text: " And we even have this shorthand for when I'm doing demos."
  },
  {
    startTime: 2550.72,
    person: 'Marty',
    text: ' So I can say, this is actually a customer name, which is a type of string.'
  },
  {
    startTime: 2554.62,
    person: 'Marty',
    text: ' This is an email address, which is a type of string, right?'
  },
  {
    startTime: 2558,
    person: 'Marty',
    text: " So this is just a shorthand for, I'll do it properly because we're recording this."
  },
  {
    startTime: 2563.9,
    person: 'Marty',
    text: " So type customer name and here it's string and type email address."
  },
  {
    startTime: 2576.49,
    person: 'Karol',
    text: ' So for those wondering, this is actually something you can play around with.'
  },
  {
    startTime: 2581.13,
    person: 'Karol',
    text: " So if you go to the taxilang.org or scan the QR that you have on screen right now and go to try the playground, you'll end up exactly in the space that Marty is in right now."
  },
  {
    startTime: 2593.59,
    person: 'Karol',
    text: ' And you can actually go and play with Taxi by yourself.'
  },
  {
    startTime: 2599.57,
    person: 'Marty',
    text: " Now, actually something else that you nerded me into when we were talking before the thing, this currently exists as a Docker image that sits in a private repo, but it was supposed to be today if it's not already out there, like this is gonna be a public Docker image."
  },
  {
    startTime: 2618.03,
    person: 'Marty',
    text: ' So if you wanna run this locally, you can and just spin it up and play around with it.'
  },
  {
    startTime: 2623.13,
    person: 'Marty',
    text: ' But the idea here is that, so here is a model that describes something, right?'
  },
  {
    startTime: 2628.15,
    person: 'Marty',
    text: ' And we might have a service, which is our customer API.'
  },
  {
    startTime: 2634.83,
    person: 'Marty',
    text: ' And that tape that has a operation, like a rest operation or something over something, which is getting some customer information.'
  },
  {
    startTime: 2645.01,
    person: 'Marty',
    text: ' And it takes a customer ID and it returns a customer.'
  },
  {
    startTime: 2648.95,
    person: 'Karol',
    text: ' So the fun part is that as you type, this actually live generates the diagrams, right?'
  },
  { startTime: 2656.11, person: 'Marty', text: ' Exactly, yep.' },
  { startTime: 2657.97, person: 'Karol', text: " That's a pretty cool feature." },
  {
    startTime: 2659.73,
    person: 'Karol',
    text: " Let's just see how they come to life as you define those things."
  },
  { startTime: 2664.73, person: 'Marty', text: ' Yeah, yeah, exactly.' },
  {
    startTime: 2667.51,
    person: 'Marty',
    text: " And really what we're trying to do here is capture that information, right?"
  },
  {
    startTime: 2669.97,
    person: 'Marty',
    text: " So without semantics, this is a string that's coming in and you can see that we've lost that connection."
  },
  {
    startTime: 2680.69,
    person: 'Marty',
    text: ' And obviously a customer ID is quite an important piece of information.'
  },
  {
    startTime: 2684.61,
    person: 'Marty',
    text: ' So it might turn up in lots of different places, right?'
  },
  {
    startTime: 2686.85,
    person: 'Marty',
    text: ' So if we have another thing, which is an order, right?'
  },
  { startTime: 2690.09, person: 'Marty', text: ' That probably got a customer ID sitting on it.' },
  {
    startTime: 2694.53,
    person: 'Marty',
    text: " And so now we can see actually that the customer ID that's coming off of an order can be fed into the customer API to get us this stuff, right?"
  },
  {
    startTime: 2704.47,
    person: 'Marty',
    text: ' So we can start to see how data relates across the enterprise.'
  },
  {
    startTime: 2710.15,
    person: 'Marty',
    text: " This thing, even though it's got a different field name from what's over here, it's the same piece of information."
  },
  {
    startTime: 2716.11,
    person: 'Marty',
    text: ' So you have interoperability across the organisation, you know?'
  },
  {
    startTime: 2722.89,
    person: 'Marty',
    text: " And then, so if we take that a step further and we say, okay, well, obviously there's more to an order than a customer ID."
  },
  { startTime: 2731.33, person: 'Marty', text: " There's, say, order dates." },
  { startTime: 2735.53, person: 'Marty', text: " I don't know, I'm making stuff up now." },
  {
    startTime: 2737.87,
    person: 'Karol',
    text: ' Marty, just to bring you to the comment section for the moment, the lovely comment from Stefan, who thinks exactly as I do that this tool on its own has tremendous potential to actually simplify the work of integration engineers.'
  },
  {
    startTime: 2753.37,
    person: 'Karol',
    text: ' Because Stefan here is a integration engineer from Czechia.'
  },
  { startTime: 2758.41, person: 'Karol', text: " He's a common viewer of the show." },
  {
    startTime: 2764.17,
    person: 'Karol',
    text: ' And I talk with Stefan from time to time about the hurdles of integration life.'
  },
  { startTime: 2769.81, person: 'Karol', text: ' And this is one of the hurdles.' },
  { startTime: 2773.61, person: 'Marty', text: " Yeah, well, that's exactly it, right?" },
  {
    startTime: 2775.73,
    person: 'Marty',
    text: ' We want to get this information out of spreadsheets and into, you know, and with Taxi, this is designed to be checked into Git repositories.'
  },
  { startTime: 2783.93, person: 'Marty', text: ' So you want it version controlled.' },
  {
    startTime: 2788.91,
    person: 'Marty',
    text: " And so let's say that we've got some items in here as well."
  },
  {
    startTime: 2792.47,
    person: 'Marty',
    text: " Yeah, so we'll define a thing which has got a name, ID."
  },
  { startTime: 2803.83, person: 'Marty', text: " And let's say we've got a price." },
  { startTime: 2807.67, person: 'Marty', text: " It's an order item, so we'll go quantity." },
  { startTime: 2811.19, person: 'Marty', text: " And here it's an int." },
  { startTime: 2812.57, person: 'Marty', text: " And we'll say the price that it was sold for." },
  {
    startTime: 2817.11,
    person: 'Marty',
    text: ' All right, and again, this is just a shorthand for not defining them properly at the top.'
  },
  {
    startTime: 2821.79,
    person: 'Marty',
    text: ' Right, and so then this is an order item, right?'
  },
  { startTime: 2826.15, person: 'Marty', text: ' And so now we can start seeing, right?' },
  {
    startTime: 2828.23,
    person: 'Marty',
    text: " If I've got an order, I can get information from my customer API."
  },
  { startTime: 2836.75, person: 'Marty', text: " If I've got a, let's define an API for that." },
  { startTime: 2839.45, person: 'Marty', text: ' What is API?' },
  {
    startTime: 2841.11,
    person: 'Marty',
    text: " And again, people generally don't define this in Taxi, even though you can see like this is really succinct compared to the OpenAPI equivalent, right?"
  },
  { startTime: 2853.75, person: 'Marty', text: ' Like this is super lightweight.' },
  {
    startTime: 2855.99,
    person: 'Marty',
    text: " But now we've got like this thing which says, right, if you give me a customer ID, I'll give you all of the customer's orders."
  },
  {
    startTime: 2864.83,
    person: 'Marty',
    text: " And so now we've got this, what is API over here that gives me back a set of orders and an order has a customer ID, which I can use into another API to get customer information."
  },
  {
    startTime: 2875.03,
    person: 'Marty',
    text: ' Like you can start seeing how this stuff relates and you can start seeing from here, not just analysis, but you can start seeing how we can infer how things kind of relate so we can automate away a bunch of the manual glueing work that we normally have to do.'
  },
  { startTime: 2891.51, person: 'Marty', text: ' Am I able to zoom in?' },
  { startTime: 2892.33, person: 'Marty', text: ' Sorry.' },
  { startTime: 2892.63, person: 'Marty', text: ' Yep.' },
  { startTime: 2893.61, person: 'Marty', text: ' Yeah.' },
  { startTime: 2893.97, person: 'Marty', text: ' Thanks.' },
  { startTime: 2899.25, person: 'Karol', text: ' So we have, oh yeah.' },
  { startTime: 2903.01, person: 'Karol', text: ' So this is order has order items.' },
  { startTime: 2905.83, person: 'Karol', text: ' So this is a part of that.' },
  { startTime: 2907.37, person: 'Karol', text: ' So basically part of the definition.' },
  {
    startTime: 2909.05,
    person: 'Karol',
    text: " So it's a nice dashed line and then the dependencies, references are with a full line and it describes, oh, it even, oh, it even describes is input and they say, oh, and promote."
  },
  { startTime: 2925.19, person: 'Karol', text: ' Oh, okay.' },
  {
    startTime: 2925.87,
    person: 'Marty',
    text: ' So a customer ID can serve as an input into the orders API, which gives back a set of orders, customer API, customer ID.'
  },
  { startTime: 2933.63, person: 'Marty', text: " I should be able to, I've done my job properly." },
  { startTime: 2936.37, person: 'Marty', text: ' We can kind of pull that out to its own type.' },
  {
    startTime: 2938.99,
    person: 'Marty',
    text: ' Sometimes can simplify things down a little bit.'
  },
  { startTime: 2941.99, person: 'Marty', text: ' Right.' },
  { startTime: 2942.11, person: 'Marty', text: ' So you say, this is a type of customer ID.' },
  {
    startTime: 2945.43,
    person: 'Marty',
    text: ' And this is, in fact, let me, let me blow this up so that we kind of just diagram centric.'
  },
  {
    startTime: 2952.63,
    person: 'Marty',
    text: " And this is really kind of where we're starting to get to the point of, hey, we have this idea in our business and different systems, name it different things, but it is a unit of interoperability, right?"
  },
  {
    startTime: 2964.75,
    person: 'Marty',
    text: ' Like I can take this customer ID and I can feed it to two different APIs and I get different information out.'
  },
  { startTime: 2972.19, person: 'Marty', text: ' And I can get that for, yeah.' },
  { startTime: 2973.71, person: 'Marty', text: ' So like, this is kind of the idea, right?' },
  { startTime: 2975.49, person: 'Marty', text: " Let's start expressing this information." },
  { startTime: 2978.33, person: 'Marty', text: ' Yeah.' },
  {
    startTime: 2980.21,
    person: 'Karol',
    text: " And even, even if those, the organisation of the database beneath is completely different because I'm guessing if you're looking at a CRM, the customer ID is your primary key in the database, right?"
  },
  {
    startTime: 2993.69,
    person: 'Karol',
    text: ' But then if you look at a ERP and the customer ID is, is pretty much a foreign key for orders.'
  },
  { startTime: 3002.63, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 3003.23,
    person: 'Karol',
    text: " If the ERP doesn't hold a copy of the customer read only copy, then this is, yeah, this is just a, just a foreign key."
  },
  {
    startTime: 3013.79,
    person: 'Karol',
    text: ' So it, it makes it so much easier to navigate through that.'
  },
  { startTime: 3018.13, person: 'Marty', text: ' Yeah.' },
  {
    startTime: 3018.79,
    person: 'Karol',
    text: ' Because basically this means that if you could build a semantic, even, can you build a semantic object?'
  },
  {
    startTime: 3027.25,
    person: 'Karol',
    text: " Because you're showing right now the customer ID as a type."
  },
  { startTime: 3032.09, person: 'Karol', text: ' Is that the model?' },
  {
    startTime: 3033.43,
    person: 'Karol',
    text: ' Is that the model is a model, not a semantic object, right?'
  },
  {
    startTime: 3037.63,
    person: 'Marty',
    text: " Well, no, we, I mean, we don't use the term semantic object."
  },
  {
    startTime: 3041.91,
    person: 'Marty',
    text: " We would call it a semantic model, but fundamentally it's what it is."
  },
  {
    startTime: 3046.81,
    person: 'Marty',
    text: " But we've, we kind of, we kind of take the, you know, one of the, one of the taglines that we throw around is share types, not models, right?"
  },
  {
    startTime: 3054.85,
    person: 'Marty',
    text: ' Because a model is a form like systems publish models, but consumers should consume types because that way you end up with, and you know, when we look at TaxiQL and how that works, that way you end up with consumers defining the contracts that they need without becoming tightly coupled to a model.'
  },
  {
    startTime: 3075.87,
    person: 'Marty',
    text: " Because as soon as soon as you become tightly coupled to the field name of customer ID or items, you're coupled to that model."
  },
  {
    startTime: 3083.59,
    person: 'Karol',
    text: ' My ask is not about the particular model of a particular service in a particular system.'
  },
  {
    startTime: 3089.97,
    person: 'Karol',
    text: " So basically, if I'm looking at this from perspective of modelling, then I want to take those semantic types like customer ID and compose a model of an object."
  },
  {
    startTime: 3104.31,
    person: 'Marty',
    text: ' Yeah, so you might want to do something like this, right?'
  },
  {
    startTime: 3106.43,
    person: 'Marty',
    text: ' You might want to go, no system exposes it, but customer orders, which has got a name.'
  },
  {
    startTime: 3115.79,
    person: 'Marty',
    text: " It's got an ID and it's got a set of orders, you know?"
  },
  {
    startTime: 3123.85,
    person: 'Marty',
    text: ' And so this is kind of, this is that idea, right?'
  },
  {
    startTime: 3126.97,
    person: 'Marty',
    text: " This is, I guess, what you're calling a semantic thing where no specific system serves this and it's in this incantation."
  },
  {
    startTime: 3137.13,
    person: 'Marty',
    text: " But, you know, we can see that it's, you could materialise it by doing some calls to APIs, right?"
  },
  {
    startTime: 3144.37,
    person: 'Marty',
    text: ' Like you can get this information from the orders API and from the customer API.'
  },
  { startTime: 3147.83, person: 'Marty', text: ' You could build one of these things.' },
  { startTime: 3150.91, person: 'Marty', text: ' Absolutely.' },
  { startTime: 3152.41, person: 'Karol', text: ' Yeah, sure, that tracks.' },
  {
    startTime: 3154.69,
    person: 'Karol',
    text: " And this way you already, when you know what the consumer wants, because you already did the business analysis or you worked with the business analysts to iron out the scope of what is needed by that particular domain system, then you just basically build yourself that, let's say, semantic model of the query into a taxi."
  },
  {
    startTime: 3176.29,
    person: 'Karol',
    text: " And then you're, yeah, you're asking the right questions."
  },
  { startTime: 3180.51, person: 'Karol', text: ' You already know which APIs have that.' },
  {
    startTime: 3184.25,
    person: 'Karol',
    text: " And then we were talking the other day when we were preparing for this stream that basically, technically, you can partition all those services and assign them to specific domains so that you don't go hallucinating into different domains by chance."
  },
  {
    startTime: 3202.81,
    person: 'Karol',
    text: " Because if you have a large environment, you would like to keep it in bounded contexts rather than have a canonical data model, because canonical data model, that's a baked in brittleness that stops growth."
  },
  { startTime: 3216.57, person: 'Karol', text: ' Cheers to that, brother.' },
  { startTime: 3219.91, person: 'Karol', text: " I'm preaching to the choir, eh?" },
  {
    startTime: 3224.57,
    person: 'Karol',
    text: ' So if we do that kind of segregation of those services defined in a taxi or defined as open API specs imported into this modelling, then this keeps that sanity because we can classify easily which is which.'
  },
  { startTime: 3248.29, person: 'Marty', text: ' Exactly.' },
  {
    startTime: 3248.55,
    person: 'Karol',
    text: ' Now, Stefan is commenting that this could be a huge help to build canonical models.'
  },
  { startTime: 3253.17, person: 'Karol', text: " Stefan, don't go that way." },
  { startTime: 3254.37, person: 'Karol', text: " Don't go that way." },
  { startTime: 3256.19, person: 'Karol', text: " Please don't." },
  { startTime: 3257.81, person: 'Karol', text: ' Been there, done that.' },
  {
    startTime: 3259.63,
    person: 'Karol',
    text: ' The further you grow with a company using a canonical model, the more stale and brittle this model becomes and it becomes a bottleneck for further growth.'
  },
  { startTime: 3270.19, person: 'Karol', text: " You don't want canonical models." },
  { startTime: 3271.91, person: 'Karol', text: ' You want the main models.' },
  { startTime: 3275.63, person: 'Marty', text: ' I wholeheartedly agree.' },
  {
    startTime: 3279.35,
    person: 'Marty',
    text: ' Yeah, so, I mean, taxi has a few different ways of doing that.'
  },
  {
    startTime: 3283.15,
    person: 'Marty',
    text: " Like, I haven't done anything here, but I could chuck everything into a namespace of com.fu, right?"
  },
  { startTime: 3292.33, person: 'Marty', text: ' So namespacing is one way of doing it.' },
  {
    startTime: 3295.75,
    person: 'Marty',
    text: " And now, in fact, hang on, let's just do another one."
  },
  { startTime: 3303.99, person: 'Marty', text: ' If you want to come back to that guy.' },
  { startTime: 3307.27, person: 'Marty', text: ' So we can do namespace of orders.' },
  { startTime: 3312.61, person: 'Marty', text: ' So we can do it.' },
  {
    startTime: 3313.31,
    person: 'Marty',
    text: ' We can kind of combine our namespaces into one document if you want.'
  },
  { startTime: 3316.23, person: 'Marty', text: ' Oh, right, yeah.' },
  {
    startTime: 3317.17,
    person: 'Marty',
    text: " And then we go type ID and here it's int and then we can go namespace customers type ID and here it's a string."
  },
  {
    startTime: 3333.35,
    person: 'Marty',
    text: " And, you know, now we've got namespace fu model thing."
  },
  { startTime: 3341.85, person: 'Marty', text: " Sorry, I've run out of ideas." },
  { startTime: 3343.67, person: 'Marty', text: " We've got shipment, model, shipping." },
  { startTime: 3347.47, person: 'Karol', text: ' Yeah, whatever.' },
  {
    startTime: 3349.73,
    person: 'Karol',
    text: ' And then you have clear inheritance through different namespaces.'
  },
  { startTime: 3354.27, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 3355.01,
    person: 'Karol',
    text: " Brilliant, because that's what often happens in integration."
  },
  {
    startTime: 3358.13,
    person: 'Karol',
    text: ' We actually cross the boundaries of different domain models and bounded contexts.'
  },
  {
    startTime: 3364.65,
    person: 'Karol',
    text: ' And then we need to have that clear boundary understanding just to be able to convey that this is actually from a completely different domain.'
  },
  { startTime: 3375.25, person: 'Karol', text: ' Exactly.' },
  {
    startTime: 3375.85,
    person: 'Karol',
    text: " And we should actually define that particular object within this domain that we're working through while we consume the data for that object from a different domain, because that's where the mastery of that data lies."
  },
  { startTime: 3388.49, person: 'Marty', text: ' Exactly, yep.' },
  { startTime: 3389.79, person: 'Marty', text: ' So this is one way of doing it with namespaces.' },
  {
    startTime: 3392.63,
    person: 'Marty',
    text: " And then taxi is also, we have this concept of a taxi project, which is a bunch of source files that you can't really show it in the playground because everything's just one file."
  },
  { startTime: 3403.97, person: 'Marty', text: " I'll show it to you once we get into VS Code." },
  {
    startTime: 3406.51,
    person: 'Marty',
    text: ' But you have a bunch of taxi projects and then so you can modularize across that and projects can depend on other projects.'
  },
  {
    startTime: 3412.51,
    person: 'Marty',
    text: " And there's a whole dependency resolution thing that sits in the background."
  },
  {
    startTime: 3414.95,
    person: 'Marty',
    text: " So you can then, again, kind of the point that I made a number of times when we were chatting the other day is we kind of create the tools and then the architects, it's up to them to decide the right level of architecture that makes sense for them."
  },
  {
    startTime: 3430.37,
    person: 'Marty',
    text: ' So you might have one massive type system all living in one project, or you might have different projects for different bounded contexts.'
  },
  {
    startTime: 3439.55,
    person: 'Marty',
    text: ' The tools are there to let the architects decide what makes sense for them.'
  },
  {
    startTime: 3444.95,
    person: 'Marty',
    text: " But hopefully we've gotten the right level of abstraction, the right level of tools, so those architects can make those choices in the way that makes sense to them."
  },
  {
    startTime: 3453.73,
    person: 'Karol',
    text: " Or the way that it's baked into the organisation they're at."
  },
  { startTime: 3458.25, person: 'Marty', text: ' Yeah, which is so often the real case, right?' },
  { startTime: 3461.05, person: 'Karol', text: ' Yeah, exactly.' },
  {
    startTime: 3462.25,
    person: 'Karol',
    text: " That's the usual problem space that it's just because we've always done it this way."
  },
  { startTime: 3468.53, person: 'Marty', text: ' Exactly, yeah, exactly.' },
  {
    startTime: 3471.03,
    person: 'Karol',
    text: ' If I had a euro for each time I heard that phrase.'
  },
  {
    startTime: 3480.75,
    person: 'Marty',
    text: " So we're kind of back here on, and actually you kind of set this up quite nicely, right?"
  },
  {
    startTime: 3487.19,
    person: 'Marty',
    text: " So we've got this customer orders thing, which we said can't get served by any API."
  },
  {
    startTime: 3495.89,
    person: 'Marty',
    text: ' And I think this is kind of a nice way of showing actually what TaxiQL does.'
  },
  {
    startTime: 3504.61,
    person: 'Marty',
    text: ' So if we just get rid of the diagram for a sec so we can focus on this.'
  },
  { startTime: 3509.29, person: 'Marty', text: " And we've got a couple of services here." },
  {
    startTime: 3511.61,
    person: 'Marty',
    text: " This is, again, a playground, so there's no real services sitting in the background."
  },
  {
    startTime: 3516.53,
    person: 'Marty',
    text: " But TaxiQL, actually, sorry, before I get into this, there's one other thing that I feel like I should, from an analysis perspective, touch on."
  },
  { startTime: 3523.71, person: 'Marty', text: ' So let me just nuke that out.' },
  {
    startTime: 3526.75,
    person: 'Marty',
    text: ' One of the ideas, again, behind this is for pushing information into the source as much as possible, right?'
  },
  {
    startTime: 3535.51,
    person: 'Marty',
    text: ' And so Taxi has really, really super rich documentation.'
  },
  {
    startTime: 3542.15,
    person: 'Marty',
    text: ' So anything we have, this is kind of our syntax for defining docs.'
  },
  {
    startTime: 3546.63,
    person: 'Marty',
    text: ' And then anything that sits in here, this is just marked down.'
  },
  {
    startTime: 3551.19,
    person: 'Marty',
    text: " And so you can do all of the good kind of, here's a link, all of the good Mark Downey kind of stuff that you want to do."
  },
  {
    startTime: 3566.28,
    person: 'Marty',
    text: " And you can, because it's one thing to say, hey, customer ID is this idea that we've embraced as a business."
  },
  {
    startTime: 3573.92,
    person: 'Marty',
    text: " But really what you want to do, it's more than just the name customer ID, right?"
  },
  {
    startTime: 3577.78,
    person: 'Marty',
    text: " There is, especially when you're thinking about bounded contexts, and especially when you're thinking about domain-driven design, there is institutional information that you kind of want to attach to that thing."
  },
  {
    startTime: 3589.04,
    person: 'Marty',
    text: " And so stick it in the type, and then it kind of renders, that's actually supposed to render as Markdown, so I don't know why it's not."
  },
  {
    startTime: 3600.68,
    person: 'Marty',
    text: ' But then you can very quickly see how you can then take this and build a data catalogue that sits over the top, right?'
  },
  {
    startTime: 3607.68,
    person: 'Marty',
    text: ' And build search that sits over the top of that.'
  },
  { startTime: 3612, person: 'Marty', text: ' And it lives close to the definition.' },
  {
    startTime: 3615.12,
    person: 'Marty',
    text: ' And then all of the systems that have customer ID inside of it, right?'
  },
  {
    startTime: 3619.78,
    person: 'Marty',
    text: " They, through a catalogue, know, there you go, this is just Markdown, here's a link, right?"
  },
  {
    startTime: 3624.82,
    person: 'Marty',
    text: " So they can inherit that documentation inside of, so the team that's defined customer, they get the documentation of what is a customer ID, because it's defined in one place, right?"
  },
  {
    startTime: 3636.02,
    person: 'Marty',
    text: ' So you can very quickly see how you can build out really powerful data catalogues on top of your semantic types.'
  },
  {
    startTime: 3648.12,
    person: 'Karol',
    text: " Yeah, and then potentially, if you combine it with Contextive, which I mentioned at the beginning of the stream too, instead of doing this Markdown here, you do it as a glossary definition in Contextive, and then you can use it both here, well, in an IDE, because Taxi Playground doesn't have Contextive."
  },
  {
    startTime: 3668,
    person: 'Karol',
    text: " Well, through the browser, you could technically do that, but I don't think it's, the plugin works with dynamic fields, so that's a bit of a problem."
  },
  {
    startTime: 3679.04,
    person: 'Karol',
    text: " But potentially, you can combine the two and have a glossary which defines exactly what this is, and then just see that the same way and have that documentation being, while you define that model and query that model, through that model, and then we're having a full package of semantic metadata combined with the actual robust descriptions of meaning on the business and ubiquitous language level."
  },
  { startTime: 3712.38, person: 'Karol', text: ' Yep, yeah, absolutely.' },
  {
    startTime: 3715.48,
    person: 'Marty',
    text: ' So Taxi, again, one of the things that we wanted to do was make it extensible and hackable.'
  },
  { startTime: 3723.84, person: 'Marty', text: ' So there is an open-source compiler' },
  {
    startTime: 3725.5,
    person: 'Marty',
    text: ' that sits behind this that you can write plugins for,'
  },
  { startTime: 3728.7, person: 'Marty', text: ' and if you were a company that had Contextive' },
  {
    startTime: 3731.58,
    person: 'Marty',
    text: ' or had some kind of enterprise catalogue like Calibra'
  },
  { startTime: 3734.64, person: 'Marty', text: ' or one of those kind of things,' },
  { startTime: 3736.74, person: 'Marty', text: ' you could really quickly write a plugin' },
  { startTime: 3739.44, person: 'Marty', text: " that actually doesn't do this," },
  {
    startTime: 3742.3,
    person: 'Marty',
    text: ' but at compile time is calling out to Contextive to say,'
  },
  { startTime: 3746.3, person: 'Marty', text: ' hey, give me the documentation for customer ID' },
  { startTime: 3749.24, person: 'Marty', text: ' and then baking it in.' },
  {
    startTime: 3751.22,
    person: 'Marty',
    text: ' So you can extend the compiler to do that kind of stuff, because, again, interoperability is really important, right?'
  },
  { startTime: 3760.54, person: 'Marty', text: ' Like no two enterprises are exactly the same.' },
  { startTime: 3762.76, person: 'Marty', text: ' So yeah.' },
  { startTime: 3765.24, person: 'Marty', text: " Right, let's look at querying, if that's okay?" },
  { startTime: 3768.12, person: 'Marty', text: " Yeah, let's go." },
  { startTime: 3769.96, person: 'Marty', text: ' So we have these APIs, right?' },
  {
    startTime: 3774.74,
    person: 'Marty',
    text: " That's one that returns order information, one that returns customer information."
  },
  { startTime: 3779.36, person: 'Marty', text: " I'm actually gonna do another one." },
  {
    startTime: 3780.28,
    person: 'Marty',
    text: " I'm gonna do model product, which has a name, product name, and it's got an ID."
  },
  {
    startTime: 3789.86,
    person: 'Marty',
    text: ' We came up with a, which is inventory ID, right?'
  },
  { startTime: 3796.4, person: 'Marty', text: " And here it's string." },
  { startTime: 3799.1, person: 'Marty', text: " So we've got, and we need an API for that." },
  {
    startTime: 3801.86,
    person: 'Marty',
    text: " So we'll go on the orders API, we'll go operation get product, which takes an inventory ID and returns a product."
  },
  {
    startTime: 3811.11,
    person: 'Karol',
    text: " Which would be a horrific API, given that it's an orders API, and you suddenly add products into it, but..."
  },
  { startTime: 3819.31, person: 'Marty', text: ' All right, all right, okay.' },
  { startTime: 3820.95, person: 'Marty', text: " That's what I get for trying to cut corners." },
  { startTime: 3823.15, person: 'Marty', text: ' Ha ha ha, gotcha.' },
  { startTime: 3826.47, person: 'Marty', text: ' All right, there we go.' },
  { startTime: 3828.19, person: 'Marty', text: " Let's move that." },
  { startTime: 3828.81, person: 'Karol', text: ' I know, I know.' },
  { startTime: 3829.65, person: 'Karol', text: ' My autistic brain is just screaming.' },
  {
    startTime: 3833.45,
    person: 'Marty',
    text: " Okay, so let's get rid of that diagram for a sec."
  },
  {
    startTime: 3836.97,
    person: 'Marty',
    text: " And what we're gonna, we'll just wire up some stubs for this, right?"
  },
  { startTime: 3840.13, person: 'Marty', text: " So we're gonna stub out the responses." },
  {
    startTime: 3842.11,
    person: 'Karol',
    text: " For those that are familiar with the word stubs, that's basically a mock service."
  },
  { startTime: 3848.63, person: 'Karol', text: ' Exactly, yep.' },
  {
    startTime: 3849.85,
    person: 'Marty',
    text: ' And in the, you know, like you have this thing where you always, you have this back feature backlog that you keep meaning to get to.'
  },
  {
    startTime: 3857.75,
    person: 'Marty',
    text: ' And this is one area where actually the VS Code plugin is a hit of Playground, because it will generate these for you.'
  },
  { startTime: 3864.79, person: 'Marty', text: ' But customer ID is one, two, three.' },
  {
    startTime: 3867.69,
    person: 'Karol',
    text: " Yes, so if you didn't get to do it in the taxi Playground, but you actually managed to do it in the hack."
  },
  { startTime: 3873.05, person: 'Marty', text: " Exactly, I'm gonna back port it." },
  {
    startTime: 3879.99,
    person: 'Karol',
    text: " Stefan is commenting that he's seen worse services."
  },
  {
    startTime: 3884.83,
    person: 'Karol',
    text: " I concur, I also have seen worse, but just let's make it clean."
  },
  { startTime: 3889.51, person: 'Marty', text: ' Yeah, right.' },
  { startTime: 3891.23, person: 'Marty', text: " And then we've got, what do we got?" },
  { startTime: 3893.29, person: 'Marty', text: " We've got a product." },
  { startTime: 3898.37, person: 'Marty', text: " I really wish I wasn't doing this live." },
  { startTime: 3900.89, person: 'Marty', text: " Um, because I'm gonna get it wrong." },
  { startTime: 3904.73, person: 'Marty', text: " It's fine, man." },
  {
    startTime: 3906.01,
    person: 'Marty',
    text: " It's got an ID, which is an int, and it's got a name, which is a MacBook Pro."
  },
  { startTime: 3916.19, person: 'Marty', text: " Then what's the last one we've got?" },
  {
    startTime: 3917.85,
    person: 'Marty',
    text: " We've got a thing that takes orders, takes an order ID and it returns."
  },
  { startTime: 3924.55, person: 'Marty', text: " I think I'm, oh yeah, okay." },
  {
    startTime: 3929.22,
    person: 'Marty',
    text: ' That has, and actually when I was testing this before, I got this wrong several times.'
  },
  {
    startTime: 3934.82,
    person: 'Marty',
    text: " Order date, I'm gonna leave that off, I'll just ditch that."
  },
  { startTime: 3939.38, person: 'Marty', text: " Items, and what's inside items?" },
  { startTime: 3943.88, person: 'Karol', text: ' Order date is required, so you might not be.' },
  { startTime: 3946.76, person: 'Marty', text: " I'm gonna ditch it from the schema." },
  {
    startTime: 3949.84,
    person: 'Marty',
    text: ' One, two, three, got a quantity of, this guy bought four MacBook Pros and the price was 4,000, because he is, he got a good one.'
  },
  {
    startTime: 3968.62,
    person: 'Marty',
    text: " And then, okay, so that's painful watching someone hand code Jason."
  },
  { startTime: 3974.38, person: 'Marty', text: " Okay, so let's start off." },
  {
    startTime: 3976.34,
    person: 'Marty',
    text: ' So the idea here is that I can say, given this thing that I know, which is a customer ID of one, two, three, find a customer.'
  },
  { startTime: 3987.58, person: 'Marty', text: " And that is, because that's a string." },
  { startTime: 3991.28, person: 'Marty', text: " That's a string, yeah." },
  { startTime: 3992.78, person: 'Marty', text: ' Okay, so we get rid of that.' },
  {
    startTime: 3998.73,
    person: 'Marty',
    text: " You can already see that down the bottom here, and there's no great way of making this bigger, I'm sorry."
  },
  { startTime: 4005.45, person: 'Marty', text: ' There we go, okay.' },
  {
    startTime: 4006.99,
    person: 'Marty',
    text: " So we can see that before I've kind of done anything, right, it knows that we can, because of the power of the semantics that's sitting in here, if I wanna look up a customer from a customer ID, it knows that it has to call this customer API endpoint, and it'll give me back customer, yeah."
  },
  {
    startTime: 4023.07,
    person: 'Marty',
    text: " And if I've built my stubs properly, there we go."
  },
  {
    startTime: 4025.97,
    person: 'Marty',
    text: ' So I can run that query, and we get back Jimmy McJimison from Jimmy.com.'
  },
  {
    startTime: 4033.63,
    person: 'Marty',
    text: " But at this point, I'm tightly coupled to the customer contract, right?"
  },
  {
    startTime: 4037.25,
    person: 'Marty',
    text: " So maybe I wanna call these things by, like, I just want known as instead of name, because that's my, sorry, that's my domain model."
  },
  { startTime: 4051.69, person: 'Marty', text: ' Okay, so now when I run that, there we go.' },
  {
    startTime: 4055.09,
    person: 'Marty',
    text: ' So I get that, so I can define the data product that I want, right?'
  },
  {
    startTime: 4058.11,
    person: 'Marty',
    text: ' This is a super, super simple example, but I can define the field names that I want, or I can go.'
  },
  {
    startTime: 4062.31,
    person: 'Karol',
    text: " Which is basically something we do when in API-led architecture, when we have a channel layer, and we expose a dedicated service to a specific domain system, we name this as they want it, not as we think it's good."
  },
  { startTime: 4077.75, person: 'Karol', text: ' But- Exactly, exactly.' },
  { startTime: 4079.53, person: 'Karol', text: ' And they drive the naming conventions.' },
  {
    startTime: 4081.53,
    person: 'Marty',
    text: " And that's right, because they're, you know, consumers generally are at the mercy of the specs that the producer has defined."
  },
  {
    startTime: 4091.15,
    person: 'Marty',
    text: ' And we kind of want to put things, I know this, you can define this, define the, you know, you can define the contract that makes sense to you.'
  },
  { startTime: 4099.529, person: 'Karol', text: ' Yeah, precisely.' },
  {
    startTime: 4101.75,
    person: 'Marty',
    text: " And so I also wanna know in my data product, I wanna know what orders he's got."
  },
  { startTime: 4108.029, person: 'Marty', text: " So let's see if this works." },
  { startTime: 4109.91, person: 'Marty', text: ' Oh, come on.' },
  { startTime: 4111.99, person: 'Marty', text: ' What did I go wrong?' },
  {
    startTime: 4116.09,
    person: 'Marty',
    text: " Okay, we are going to, I'm not gonna debug this on a call, we're gonna switch to one that I prepared earlier."
  },
  { startTime: 4145.34, person: 'Marty', text: ' Got that out.' },
  { startTime: 4150.06, person: 'Marty', text: ' Run that.' },
  { startTime: 4150.859, person: 'Marty', text: ' Okay, there we go.' },
  {
    startTime: 4151.46,
    person: 'Marty',
    text: " So Jimmy McJimison, and there's his order, there's his orders, right?"
  },
  {
    startTime: 4155.24,
    person: 'Marty',
    text: " So the data's come back, but the kind of interesting part is the query diagram."
  },
  { startTime: 4160.819, person: 'Marty', text: ' Oh, come on, man.' },
  {
    startTime: 4167.89,
    person: 'Karol',
    text: " Yeah, nothing like getting Morphe's law in the middle of a demo."
  },
  { startTime: 4173.069, person: 'Marty', text: ' No, right?' },
  {
    startTime: 4175.25,
    person: 'Marty',
    text: ' Not as pretty, but we can see that we got the customer name from the customer API, and we got the order API gave us the order data back.'
  },
  { startTime: 4186.95, person: 'Marty', text: ' And if we look at the- And the product.' },
  {
    startTime: 4188.63,
    person: 'Marty',
    text: ' The, and yeah, and we look at the requests, we can see that we did a request to the get customer, another request to the order API.'
  },
  {
    startTime: 4195.35,
    person: 'Marty',
    text: " So again, to your point of like, right, if I'm dropped into the field and I'm an integration architect and I need to work out, how do I build this data product?"
  },
  {
    startTime: 4206.01,
    person: 'Marty',
    text: " Then I don't, I can kind of defer it back to the middleware and go, hey, middleware, how do I build this?"
  },
  { startTime: 4211.73, person: 'Marty', text: ' Like, what do I need to do?' },
  {
    startTime: 4215.63,
    person: 'Marty',
    text: ' And it can tell me, well, these are the services that you need to, that you need to stitch together.'
  },
  {
    startTime: 4220.79,
    person: 'Karol',
    text: ' Yeah, but the only problem is that you actually need to have a proper inventory of your available data sources with whatever interfaces they have.'
  },
  {
    startTime: 4234.71,
    person: 'Karol',
    text: ' And the inventory is usually the most problematic part of the game, but without that, you will not be able to do that.'
  },
  {
    startTime: 4241.09,
    person: 'Karol',
    text: " So just to point this out, that there's still some legwork that you need to do first, but if you do it, magic."
  },
  {
    startTime: 4248.77,
    person: 'Marty',
    text: ' Yeah, and I think, I absolutely agree with that, that that work is not going away.'
  },
  { startTime: 4254.97, person: 'Marty', text: " You can't magic that work away," },
  { startTime: 4256.21, person: 'Marty', text: ' but no, the idea is,' },
  { startTime: 4258.45, person: 'Marty', text: ' if you can get this into,' },
  { startTime: 4261.03, person: 'Marty', text: ' if you can get as close back to the sources,' },
  { startTime: 4262.95, person: 'Marty', text: ' if you can embed the information' },
  { startTime: 4264.21, person: 'Marty', text: ' into the open API specs,' },
  { startTime: 4265.63, person: 'Marty', text: ' into the average specs,' },
  { startTime: 4266.63, person: 'Marty', text: ' if you can commit the stuff into Git,' },
  { startTime: 4268.91, person: 'Marty', text: " you can't magic it away," },
  { startTime: 4270.13, person: 'Marty', text: ' but what would be nice' },
  { startTime: 4271.19, person: 'Marty', text: ' is to only have to do it once' },
  { startTime: 4273.09, person: 'Marty', text: ' rather than have to do it' },
  { startTime: 4274.73, person: 'Marty', text: ' for every integration project,' },
  { startTime: 4276.55, person: 'Marty', text: ' that kind of cold start' },
  { startTime: 4277.53, person: 'Marty', text: ' that we talked about before, right?' },
  {
    startTime: 4279.23,
    person: 'Marty',
    text: " Like do it once and push it into a place where it's more likely to stay live, which is making the responsibility of the teams that are building the orders API to include the metadata and then give them the benefit of nice catalogues and nice, like nice browsable stuff that lets you kind of bring the, you know, bring it all together anyway."
  },
  {
    startTime: 4303.55,
    person: 'Marty',
    text: ' Given an organisation works in silos, getting this together will be hurtfully in task, but well, yeah, it is.'
  },
  { startTime: 4308.99, person: 'Marty', text: ' But again, the idea, I completely agree, right?' },
  {
    startTime: 4312.61,
    person: 'Marty',
    text: " But the idea is, and we kind of skipped over this, but like you don't get everyone to adopt taxi, you get them to use whatever tooling they're already using and embed metadata inside of the thing."
  },
  {
    startTime: 4326.49,
    person: 'Marty',
    text: " And there are plus sides for the producers as well, because if you can get to a point where producers are less tightly coupled to consumers, they get the upside of being able to deploy changes more frequently, because producers can't ship change at the moment because they have to go and fix all the broken integration."
  },
  {
    startTime: 4351.19,
    person: 'Marty',
    text: ' And so, you know, the cell here as well, if you do this right, we can detect breakages in our CRCD platforms through analysis, and we can possibly even resolve them at runtime just by adapting.'
  },
  { startTime: 4365.49, person: 'Karol', text: ' Sure, yeah.' },
  {
    startTime: 4366.83,
    person: 'Karol',
    text: " But that's, again, we're going a little bit deeper into Orbital with that, because the self-healing qualities are in there precisely."
  },
  {
    startTime: 4375.25,
    person: 'Karol',
    text: " But if we manage to just get out of discovery in so that the teams pull, so we pull from whatever repository the team uses to inventory their open API spec, WSDLs, whatever that is, and just pull it in, then we can still use it to add that semantic layer in analysis and then match it the way out of it, even if they don't add that semantic layer to their API specs."
  },
  { startTime: 4411.99, person: 'Marty', text: " That's right, yeah." },
  {
    startTime: 4413.11,
    person: 'Marty',
    text: ' I mean, just helping an organisation reduce the amount of time they have to spend on that discovery is huge.'
  },
  {
    startTime: 4423.25,
    person: 'Marty',
    text: " So one thing I'll say is that, yeah, Orbital is a product, but the actual query stuff, that's taxi."
  },
  {
    startTime: 4431.49,
    person: 'Marty',
    text: ' The query engine for that lives in Taxiland, and you can embed that inside your Spring Boot app.'
  },
  { startTime: 4437.49, person: 'Marty', text: " That's pure open source, right?" },
  {
    startTime: 4439.29,
    person: 'Marty',
    text: " You don't need to go and buy a commercial product."
  },
  {
    startTime: 4441.97,
    person: 'Marty',
    text: ' You can embed that and build your own Orbital rip-off if you want, right?'
  },
  {
    startTime: 4446.19,
    person: 'Marty',
    text: " It's open source, you embed it, and then all that self-healing stuff, that's actually sitting inside the taxi engine, not inside of Orbital."
  },
  { startTime: 4456.17, person: 'Marty', text: ' Okay, so this was really the idea, right?' },
  {
    startTime: 4462.23,
    person: 'Karol',
    text: ' Now, came dear old me to the conversation at this point where you had this already, and we started talking about this.'
  },
  {
    startTime: 4471.89,
    person: 'Marty',
    text: ' Everything was going so well up until this point.'
  },
  { startTime: 4475.67, person: 'Karol', text: ' And then I did it there.' },
  { startTime: 4478.01, person: 'Karol', text: ' It would be so cool if...' },
  { startTime: 4480.05, person: 'Marty', text: ' Yeah, exactly.' },
  {
    startTime: 4481.57,
    person: 'Karol',
    text: " Marty, let's jump into what you actually jurorigged over the last two weeks, because that's absolutely really cool."
  },
  { startTime: 4490.09, person: 'Karol', text: ' And yeah, this is basically what?' },
  { startTime: 4492.15, person: 'Karol', text: ' A plugin for VS Code.' },
  {
    startTime: 4496.61,
    person: 'Marty',
    text: ' So we already have a plugin for VS Code that has things like IntelliSense inside.'
  },
  { startTime: 4503.55, person: 'Marty', text: ' So this is a taxi project.' },
  { startTime: 4505.47, person: 'Marty', text: " There's already a plugin available for this." },
  {
    startTime: 4508.39,
    person: 'Marty',
    text: ' And so like a taxi project has taxi.conf. And this is kind of, you know, I was talking about how you can have dependencies on different projects.'
  },
  {
    startTime: 4516.63,
    person: 'Marty',
    text: ' This is, in a taxi, this is the equivalent of like a POM from Maven or a Gradle file or a package.json. This is kind of our thing, right?'
  },
  {
    startTime: 4526.51,
    person: 'Marty',
    text: " So this already exists and we already have kind of nice, like, you know, IntelliSense in here that shows me like compiler feedback as I'm typing."
  },
  { startTime: 4537.47, person: 'Marty', text: ' So this stuff already exists.' },
  {
    startTime: 4539.37,
    person: 'Marty',
    text: " But I think the point that you made that I just, like, I couldn't help but agree with you, despite not wanting to, was that the analysis stuff that you can do in the Playground, you kind of want to be able to do..."
  },
  { startTime: 4553.49, person: 'Marty', text: " Like the Playground doesn't have any files." },
  { startTime: 4555.23, person: 'Marty', text: " It doesn't have projects." },
  { startTime: 4557.43, person: 'Marty', text: " It doesn't have dependencies." },
  {
    startTime: 4558.83,
    person: 'Marty',
    text: " It doesn't have any of the stuff that you actually have in a taxi project, right?"
  },
  {
    startTime: 4563.17,
    person: 'Marty',
    text: ' Where you have your types separate from your models, kind of just good hygiene.'
  },
  {
    startTime: 4568.45,
    person: 'Marty',
    text: " You can't do any of that stuff in the Playground."
  },
  {
    startTime: 4572.27,
    person: 'Marty',
    text: ' And, but the idea that, yeah, like I just want to be able to drop in and start doing some of this analysis and start dropping in my OpenAPI specs and start dropping in my Avro specs and start kind of capturing that information.'
  },
  {
    startTime: 4585.19,
    person: 'Marty',
    text: " And I was like, yeah, that's a really cool idea."
  },
  {
    startTime: 4589.53,
    person: 'Marty',
    text: " And so what that's kind of manifested as is these notebooks."
  },
  {
    startTime: 4594.09,
    person: 'Marty',
    text: " And this is the new stuff that we've built, which is kind of trying to take the things that you can do in Playground and do them inside of VS Code."
  },
  {
    startTime: 4602.91,
    person: 'Marty',
    text: ' And I think the idea is to do it as well as you can in Playground.'
  },
  { startTime: 4607.67, person: 'Marty', text: " And I don't think it's there yet." },
  { startTime: 4610.79, person: 'Marty', text: ' Some of the things you can do better.' },
  {
    startTime: 4613.23,
    person: 'Marty',
    text: ' But like in a kind of classic notebook thing, you can have a markdown cell.'
  },
  { startTime: 4619.07, person: 'Marty', text: ' So these are my notes from dropping in to Acme.' },
  { startTime: 4624.53, person: 'Marty', text: ' What a mess.' },
  {
    startTime: 4629.21,
    person: 'Karol',
    text: ' Seems like my notes from discovery work at a lot of clients.'
  },
  {
    startTime: 4637.17,
    person: 'Marty',
    text: " So I've got those same APIs that we were just playing with in the Playground defined in here."
  },
  {
    startTime: 4643.11,
    person: 'Marty',
    text: ' And so the idea that was in here was I want to be able to diagram.'
  },
  {
    startTime: 4650.31,
    person: 'Marty',
    text: " I want a diagram that's kind of just the state of the world."
  },
  {
    startTime: 4652.57,
    person: 'Marty',
    text: " So we can say, hey, right, build me a diagram that's everything, right?"
  },
  {
    startTime: 4654.99,
    person: 'Marty',
    text: " And then here's kind of all my APIs, those same diagrams from before."
  },
  { startTime: 4661.69, person: 'Marty', text: ' So I can see how things kind of relate.' },
  { startTime: 4665.47, person: 'Marty', text: ' And because this is a notebook, right?' },
  {
    startTime: 4670.05,
    person: 'Marty',
    text: " Like you might stick a markdown block before it, or you might say, this is the customer domain that we've found."
  },
  { startTime: 4680.37, person: 'Marty', text: ' Talk to Jimmy.' },
  {
    startTime: 4683.91,
    person: 'Marty',
    text: " Right, and then we're going to go, actually, I don't want to model everything."
  },
  {
    startTime: 4687.23,
    person: 'Marty',
    text: ' I just want to model, say, everything that is related to customer.'
  },
  { startTime: 4694.49, person: 'Marty', text: ' So we can model just customer.' },
  { startTime: 4696.61, person: 'Marty', text: ' Show me a diagram of just customer.' },
  {
    startTime: 4699.07,
    person: 'Marty',
    text: " Where you say, right, well, show me everything that's kind of customer-ish."
  },
  { startTime: 4702.35, person: 'Marty', text: ' The services that return customer, for example.' },
  { startTime: 4704.65, person: 'Marty', text: " So here's our API." },
  {
    startTime: 4706.87,
    person: 'Marty',
    text: ' So the idea is through these notebook-style things, can we create documentation that is kind of living?'
  },
  {
    startTime: 4719.93,
    person: 'Marty',
    text: " And so we have these kind of diagrams we're doing, architecture diagrams."
  },
  {
    startTime: 4726.63,
    person: 'Karol',
    text: ' So basically, now you made taxi as a taxi diagram to kind of mimic the behaviour of having mermaid embedded in the markdown file.'
  },
  {
    startTime: 4738.57,
    person: 'Karol',
    text: ' And you just write a taxi query into it, and it shows you the diagram as if you were basically doing diagram as code.'
  },
  { startTime: 4747.59, person: 'Marty', text: ' Yeah, exactly.' },
  {
    startTime: 4748.69,
    person: 'Marty',
    text: " I think these diagrams are about, if I import all of my open source code, and import all of my Avro specs, because mermaid, and I'm a huge mermaid fan."
  },
  {
    startTime: 4761.31,
    person: 'Marty',
    text: ' In fact, we have mermaid embedded inside of taxi playground.'
  },
  {
    startTime: 4768.61,
    person: 'Marty',
    text: ' But mermaid is, you have to write everything out.'
  },
  {
    startTime: 4772.31,
    person: 'Marty',
    text: " And I think what we're trying to do with taxi is to say, pull in your sources, and then let the tooling work out how everything goes."
  },
  { startTime: 4779.85, person: 'Marty', text: " You don't have to write it out." },
  {
    startTime: 4781.05,
    person: 'Marty',
    text: " You can describe the state that you want, show me everything that relates to customer, and we'll generate the diagrams for you."
  },
  {
    startTime: 4786.97,
    person: 'Marty',
    text: ' Rather than saying, I mean, we could have said, I want customer API and customer, right?'
  },
  { startTime: 4791.41, person: 'Marty', text: ' And it should give me the same diagram.' },
  {
    startTime: 4798.41,
    person: 'Karol',
    text: ' You explicitly pull two objects that are defined, objects in the loose sense here, in a taxi sense.'
  },
  {
    startTime: 4808.75,
    person: 'Karol',
    text: ' And then it automatically shows the dependency between them, because there is one.'
  },
  { startTime: 4813.81, person: 'Marty', text: ' Exactly, yep.' },
  { startTime: 4815.63, person: 'Marty', text: " Exactly, that's right." },
  {
    startTime: 4816.79,
    person: 'Karol',
    text: ' So this is explicit definition, and you can also have this more of an implicit definition.'
  },
  {
    startTime: 4822.83,
    person: 'Marty',
    text: ' Yeah, like show me the customer domain, and then show me everything that kind of relates to it, all the products.'
  },
  {
    startTime: 4831.57,
    person: 'Marty',
    text: " Yeah, and then here we've got, so this is the same query thing."
  },
  {
    startTime: 4840.75,
    person: 'Marty',
    text: " So we've wired up some stubs here to stub out the responses from the servers."
  },
  { startTime: 4848.37, person: 'Marty', text: ' And so let me look at my notes.' },
  {
    startTime: 4851.03,
    person: 'Marty',
    text: " I'm not live coding this, because I'm not that confident."
  },
  {
    startTime: 4855.33,
    person: 'Marty',
    text: " So I can do that same thing of say, right, let's say given customer ID of 123, find me the customer."
  },
  {
    startTime: 4872.92,
    person: 'Marty',
    text: ' And then I can generate a diagram for that, and we can see, so this is kind of how that integration would get built, right?'
  },
  {
    startTime: 4879.66,
    person: 'Marty',
    text: ' Like take a customer ID, and pass it into the customer API, and get back the customer.'
  },
  {
    startTime: 4887.54,
    person: 'Marty',
    text: ' Or I can flesh it out, and say give me their name and their orders.'
  },
  { startTime: 4895.68, person: 'Marty', text: ' So now the query plan is a bit funkier, right?' },
  {
    startTime: 4897.66,
    person: 'Marty',
    text: " Because now we're saying, right, in order to do that, you've got to call the orders API as well."
  },
  { startTime: 4903.92, person: 'Marty', text: ' And that will give you the order items.' },
  {
    startTime: 4907.72,
    person: 'Karol',
    text: " So now looking at this from this perspective of querying this, if I have, let's say I'm defining API led architecture, which basically is two or three layers of abstraction, right?"
  },
  {
    startTime: 4920.06,
    person: 'Karol',
    text: ' Because one layer of abstraction on the level of exposing data is the adapter layer, where I want to define standardised services exposing specific data objects or services.'
  },
  {
    startTime: 4932.22,
    person: 'Karol',
    text: ' Then I already write a query here to build that.'
  },
  {
    startTime: 4936.62,
    person: 'Karol',
    text: ' And then I take that as a definition, and I can build customer-specific channel services to expose that to a specific customer based on that definition that I built earlier for exposing that data or those services in a standardised manner.'
  },
  {
    startTime: 4957.72,
    person: 'Karol',
    text: ' And this ties into the construct of API led architecture where we have two or three layers of abstraction, which create reusability, composability of services, et cetera, which is pretty much what you do with the queries here.'
  },
  {
    startTime: 4973.06,
    person: 'Karol',
    text: ' You look at that composability, how to compose that service.'
  },
  {
    startTime: 4977.42,
    person: 'Karol',
    text: ' So looking at this, where we have those data defined, then I would translate that customer API, that order API into specific adapter layers, exposing my dataset data object.'
  },
  {
    startTime: 4992.88,
    person: 'Karol',
    text: " And then the actual query of the customer, ask customer name and their orders would be something on the composition layer in the API led architecture, where I compose a service that's returning the orders in a context of a specific customer, which is how I usually compose services in that kind of architectural style."
  },
  {
    startTime: 5014.42,
    person: 'Karol',
    text: " And this is just, from that perspective, it's just brilliant because it makes my life also simpler, right?"
  },
  {
    startTime: 5020.24,
    person: 'Karol',
    text: ' And then if I can contextualise the data sources in a taxi project only to a specific system, then I can easily build, very quickly build the query plan.'
  },
  {
    startTime: 5032.3,
    person: 'Karol',
    text: ' How do I get that set of data from that data master?'
  },
  {
    startTime: 5036.32,
    person: 'Karol',
    text: ' And then how do I wanna expose that as a data object?'
  },
  {
    startTime: 5040.6,
    person: 'Karol',
    text: " So this is actually something that can be perfectly used by integration architects in combination with data architects to actually map out and plan out data governance and data architecture in transit, because it's all about data movement."
  },
  { startTime: 5058.3, person: 'Karol', text: ' So that data in transit.' },
  { startTime: 5060.6, person: 'Karol', text: ' So by that also to map out data lineages.' },
  { startTime: 5065.42, person: 'Marty', text: ' Yeah.' },
  {
    startTime: 5067.58,
    person: 'Marty',
    text: " If you've got those stubs wired up, then you can actually hand off adjacent to them and go, hey, is this actually, like, is this the result?"
  },
  { startTime: 5077.26, person: 'Marty', text: " Is this the data that you're looking for?" },
  { startTime: 5079.48, person: 'Marty', text: ' Yeah.' },
  { startTime: 5080, person: 'Marty', text: " Are these the fields that you're looking for?" },
  {
    startTime: 5084.02,
    person: 'Karol',
    text: ' And with data examples, because just the attribute names may be misleading into a false sense of security, while when you look at the data examples, it actually builds more traction and understanding.'
  },
  {
    startTime: 5099.74,
    person: 'Marty',
    text: ' Well, this is, I mean, this is the materialised, this is exactly this.'
  },
  { startTime: 5104.72, person: 'Marty', text: ' If I call this foos and then rerun it, right?' },
  { startTime: 5108.76, person: 'Marty', text: " Like we're getting foos down here." },
  { startTime: 5111.94, person: 'Marty', text: ' This is the materialisation of that data.' },
  { startTime: 5115.2, person: 'Karol', text: ' Yeah.' },
  { startTime: 5116.56, person: 'Karol', text: ' But this is in the language of the consumer.' },
  { startTime: 5119.48, person: 'Karol', text: ' Exactly.' },
  {
    startTime: 5120.18,
    person: 'Karol',
    text: ' They wanna see, but the semantics of the actual data behind stays the same because their foo is your order.'
  },
  { startTime: 5129.08, person: 'Karol', text: ' Exactly, yeah.' },
  {
    startTime: 5129.96,
    person: 'Karol',
    text: ' In the ecosystem, which makes all the sense, because we want the semantics to be the level of coupling that is very much wanted and the data model or the contract coupling to be mitigated by middleware.'
  },
  {
    startTime: 5145.18,
    person: 'Karol',
    text: ' Whatever middleware that is, is that a broker type integration platform or an API led type integration platform?'
  },
  {
    startTime: 5151.46,
    person: 'Karol',
    text: " It doesn't really matter as long as we understand the consequences of using a fixed number of abstraction layers."
  },
  { startTime: 5158.54, person: 'Marty', text: ' Yeah.' },
  { startTime: 5159.7, person: 'Karol', text: ' Yeah.' },
  { startTime: 5160.52, person: 'Marty', text: ' Yeah, brilliant.' },
  { startTime: 5161.3, person: 'Marty', text: ' Exactly.' },
  {
    startTime: 5162.3,
    person: 'Marty',
    text: " And what's nice here to your credit is you end up with this kind of notebook, this runnable notebook of markdown of diagrams and then of whether it's the data or the diagram, this way of kind of building up this artefact that you can then check in to, you can then check in and Taxi has a unit testing framework as part of it as well."
  },
  {
    startTime: 5195.94,
    person: 'Marty',
    text: ' So if you wanna build tests around this stuff, you can build tests around it and then plug it into your CICD and you can kind of go from this early stage analysis to relatively robust artefacts that you hand off that all through this notebook, which is nice.'
  },
  { startTime: 5216.94, person: 'Marty', text: ' I wish it was mine.' },
  {
    startTime: 5218.94,
    person: 'Karol',
    text: " The idea is like with diagrams as code, if it's parsable means we can do a lot of things with it because if it's not parsable, then it's just static text or static diagrams that we just need to update and iterate over."
  },
  {
    startTime: 5236.9,
    person: 'Karol',
    text: " If it's parsable, that means we can dynamically build over it and translate that to a lot of things, which is exactly where that kind of automation is great."
  },
  { startTime: 5250.62, person: 'Karol', text: ' Yeah.' },
  { startTime: 5253.3, person: 'Marty', text: ' Oh, yeah.' },
  { startTime: 5254.38, person: 'Marty', text: " That's kind of it, man." },
  { startTime: 5255.36, person: 'Marty', text: " That's the idea." },
  {
    startTime: 5257.56,
    person: 'Karol',
    text: " And then there's a point from Stefan, another one, if we look into MDM solutions and data warehouses and data architecture that pretty much also could be very usable to outline them visually very quickly."
  },
  { startTime: 5273.7, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 5273.9,
    person: 'Karol',
    text: ' If we define specific tables, we put them into context, we start mapping foreign primary keys between them, or even if we go to NoSQL settings and just define different documents and map them together how they relate to one another in a specific setting.'
  },
  { startTime: 5296.1, person: 'Karol', text: ' So, yeah.' },
  { startTime: 5296.88, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 5297.75,
    person: 'Karol',
    text: ' So, the Visual Studio Code plugin is the hacked thing that we made the disclaimer about.'
  },
  { startTime: 5306.24, person: 'Karol', text: " So, it's not yet fully brewed, right?" },
  {
    startTime: 5311.04,
    person: 'Karol',
    text: ' So, Marty, what would be the plan to make it actually usable that I can just take it, embed it, and start running it?'
  },
  { startTime: 5323.84, person: 'Karol', text: ' What do we still need here?' },
  { startTime: 5326.2, person: 'Marty', text: ' Oh, I mean, I just need to...' },
  { startTime: 5328.82, person: 'Marty', text: " It's pretty much there." },
  { startTime: 5331.14, person: 'Marty', text: " We'll probably just tighten it up a little bit." },
  { startTime: 5333.6, person: 'Marty', text: ' If you lean on it too hard right now, it breaks.' },
  {
    startTime: 5338.24,
    person: 'Karol',
    text: " I'm guessing if I take it and start reusing it, I'll break it several times and I'm going to ping you back with, hey, I found the problem here and here, fix it."
  },
  {
    startTime: 5346.22,
    person: 'Marty',
    text: ' And remember, that was our deal, was that if I build it, you have to use it.'
  },
  {
    startTime: 5352.74,
    person: 'Marty',
    text: " So, and hopefully other people who are watching this will start using it as well and then give feedback because we don't like building stuff, you know, just..."
  },
  { startTime: 5360.24, person: 'Marty', text: ' That nobody uses.' },
  { startTime: 5361.16, person: 'Marty', text: ' Right, yeah, of course.' },
  {
    startTime: 5362.88,
    person: 'Marty',
    text: ' So, you can think of this as very much a point of the VS Code plugin, very much 0.01 of these kind of notebooks.'
  },
  {
    startTime: 5372.08,
    person: 'Marty',
    text: ' Like you said before, the broader ecosystem is...'
  },
  {
    startTime: 5375.54,
    person: 'Marty',
    text: ' I actually think text is on version 1.74 at the moment.'
  },
  { startTime: 5379.02, person: 'Marty', text: ' Mm-hmm.' },
  { startTime: 5380.52, person: 'Marty', text: " So, it's, you know, the language..." },
  {
    startTime: 5383.42,
    person: 'Marty',
    text: " And, you know, we're constantly getting questions around, can we evolve the language to add different features and different capabilities?"
  },
  {
    startTime: 5389.84,
    person: 'Marty',
    text: ' And yeah, the answer is always, yes, if you will use it.'
  },
  { startTime: 5394.4, person: 'Marty', text: ' If you build it, they will come.' },
  { startTime: 5395.84, person: 'Marty', text: " Not, that's not been my experience." },
  { startTime: 5397.18, person: 'Marty', text: ' They have to come first.' },
  {
    startTime: 5398.36,
    person: 'Marty',
    text: " They have to come first and then we'll build it."
  },
  { startTime: 5400.6, person: 'Karol', text: ' Fair enough.' },
  {
    startTime: 5401.52,
    person: 'Karol',
    text: " And I've heard exactly the same from Chris over at Contextive."
  },
  { startTime: 5405.62, person: 'Karol', text: " If you're going to use it, then we'll build it." },
  { startTime: 5407.6, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 5407.76,
    person: 'Karol',
    text: " Happy to build it, but please use it and give us feedback over how you're using it and what breaks and what works for you in that context."
  },
  { startTime: 5415.74, person: 'Karol', text: ' And then we can have it and support it.' },
  {
    startTime: 5417.52,
    person: 'Karol',
    text: " But if nobody's going to use it, we're not going to prioritise this."
  },
  { startTime: 5422.14, person: 'Karol', text: ' So, yeah.' },
  { startTime: 5423.88, person: 'Marty', text: ' I mean, I want to get these diagrams.' },
  {
    startTime: 5428.68,
    person: 'Marty',
    text: " They're a little bit awkward to use at the moment in here."
  },
  {
    startTime: 5434.7,
    person: 'Marty',
    text: " And also, you've been very polite for not mentioning it, but there's a line missing from here that should be going up into here."
  },
  { startTime: 5443.7, person: 'Marty', text: ' Like, because these orders, so stuff like that.' },
  {
    startTime: 5447.34,
    person: 'Marty',
    text: ' And then I want to show the kitchen sink version of this as well, which is, so Taxi has this like super rich expression language as well.'
  },
  {
    startTime: 5460.6,
    person: 'Marty',
    text: ' So I can say, you know, I want to just times the item price by the order quantity, or I can do like sums over different things.'
  },
  {
    startTime: 5470.24,
    person: 'Marty',
    text: ' And then if we chart that out, we get these like really rich diagrams that show where all the different calculations are that are getting run and like what they are.'
  },
  {
    startTime: 5481.78,
    person: 'Marty',
    text: " And, you know, going back to that point earlier about lineage, I mean, like this diagram is cool, but it's kind of just eye candy unless you can tie it back to a business purpose."
  },
  {
    startTime: 5493.04,
    person: 'Marty',
    text: " But actually, when you're doing, you know, when you're in a regulated environment, being able to show, hey, the order total field was calculated by taking the order field and also the item price, right?"
  },
  {
    startTime: 5508.96,
    person: 'Marty',
    text: ' And actually tracing it back to where that data was sourced from and which APIs the data came from, right?'
  },
  {
    startTime: 5515.06,
    person: 'Marty',
    text: ' And this is a full lineage diagram that shows, hey, how did you, if the lines were connecting up properly, how do you actually, like show me your workings, how do you actually get that thing?'
  },
  {
    startTime: 5525.92,
    person: 'Karol',
    text: " So now you're basically tying above data architecture and integration architecture straight into a functional analysis that the business analyst would do into, if I wanna do this kind of operation, where would that land in terms of data sources and how much work would it be to actually get that queried out and into the system that would need to do it?"
  },
  { startTime: 5552.4, person: 'Karol', text: ' So, yeah.' },
  { startTime: 5554.3, person: 'Marty', text: ' Yeah.' },
  {
    startTime: 5557.14,
    person: 'Marty',
    text: ' But I do think the diagrams look kind of pretty as well.'
  },
  { startTime: 5562.8, person: 'Karol', text: ' I mean, yeah, they do.' },
  {
    startTime: 5567.06,
    person: 'Karol',
    text: ' And I think if there are no collisions, then they would be like out of the bat, really, really extremely useful to get them, yeah, to make them work for us.'
  },
  {
    startTime: 5580.26,
    person: 'Karol',
    text: " But just the capability to move them around a little, and it already creates that level of visibility that helps conceptualise what the hell we're looking for and show the complexity of a specific function that we wanna execute over whatever the ecosystem is."
  },
  {
    startTime: 5600.88,
    person: 'Karol',
    text: ' And just being able to very quickly show that complexity, that already gives a better understanding of the problem space.'
  },
  { startTime: 5610.46, person: 'Marty', text: ' Yeah, I mean, absolutely, right?' },
  {
    startTime: 5611.7,
    person: 'Marty',
    text: ' Like to be able to say, sure, we can build that for you.'
  },
  {
    startTime: 5615.62,
    person: 'Marty',
    text: " These are all of the different APIs that we need to call in order to, because there's that awful word, just, and I'm sure it's just, blah, blah."
  },
  {
    startTime: 5626.02,
    person: 'Marty',
    text: " You go, actually, just to do that is this really rich orchestration of all of these different APIs and all of this different data that's flying around."
  },
  {
    startTime: 5635.94,
    person: 'Marty',
    text: ' And you need to be aware of the impact that this has.'
  },
  {
    startTime: 5641.2,
    person: 'Marty',
    text: " And that's, I guess, partly what we're trying to visualise as architects."
  },
  {
    startTime: 5646.74,
    person: 'Karol',
    text: " Yeah, people take it for granted that we can just do things, but they don't really, at times, especially the so-called business, whoever that may be."
  },
  {
    startTime: 5659.76,
    person: 'Karol',
    text: " So I'm mostly talking about people that don't have a technical background and do not understand the IT complexity."
  },
  {
    startTime: 5665.98,
    person: 'Karol',
    text: ' They just run the business and they understand their business complexity, but not what it takes to actually support that complexity.'
  },
  {
    startTime: 5675.06,
    person: 'Karol',
    text: ' They do not understand and know how much work goes into delivering what they want from us.'
  },
  {
    startTime: 5686.86,
    person: 'Karol',
    text: ' And being able to just create out and show that really quickly analytically makes all the difference because now I have facts at my fingertips and I can like, okay, okay, let me model that for you really quickly.'
  },
  { startTime: 5704.86, person: 'Karol', text: ' Done.' },
  { startTime: 5705.72, person: 'Karol', text: ' This is what it looks like.' },
  { startTime: 5707.06, person: 'Karol', text: ' This is how much work I need to put into this.' },
  {
    startTime: 5709.8,
    person: 'Karol',
    text: " And this is just a rough query that doesn't account for the actual architecture we're having."
  },
  {
    startTime: 5716.16,
    person: 'Karol',
    text: ' So for example, if we have API-led architecture, I cannot take this query as it is.'
  },
  {
    startTime: 5720.62,
    person: 'Karol',
    text: ' I would have to actually build it step-by-step through those abstraction layers, right?'
  },
  { startTime: 5726.66, person: 'Karol', text: ' And this is where this magic happens.' },
  {
    startTime: 5730.88,
    person: 'Karol',
    text: ' And then I would have to import various namespaces, domains, et cetera, and make it run through that as a whole and then show it as a whole.'
  },
  {
    startTime: 5740.44,
    person: 'Karol',
    text: ' And this makes it all the difference in terms of looking at complexity and visualising that complexity that quickly.'
  },
  {
    startTime: 5748.9,
    person: 'Karol',
    text: " So for example, if I already have those services on the integration platform because I'm running an API-led integration platform, so I have built already several integrations, which means if done correctly, I have high composability, which means that I can compose a new business capability out of existing stuff and I not necessarily have to build stuff."
  },
  {
    startTime: 5768.64,
    person: 'Karol',
    text: ' So this just means that, okay, I just show whether or not I can consume a composed service that is existing or do I have to actually build services, composed services from the existing data services, or am I actually missing certain data attributes and we actually need to build at a domain system, at a provider system, some sort of a API interface to actually surface that data out of that system.'
  },
  {
    startTime: 5797.58,
    person: 'Karol',
    text: " So that already is not only showing complexity, it's showing actual gap analysis, which is brilliant."
  },
  {
    startTime: 5807.22,
    person: 'Karol',
    text: ' The only problem is to get all that data into this so that we can actually do that kind of show and tell, but that potentially can be done through scraping API portals, et cetera, or just tying straight into specific repositories.'
  },
  {
    startTime: 5826.54,
    person: 'Marty',
    text: " Yeah, I mean, the VS Code plugin is focused on single projects rather than multiple projects, but we'll sell you a product that deals with multiple projects."
  },
  {
    startTime: 5841.46,
    person: 'Karol',
    text: ' Yeah, but if you have this semantics that are parallel to Maven or Gradle, right, and I can define specific projects, that I defined earlier.'
  },
  {
    startTime: 5858.9,
    person: 'Karol',
    text: " So for example, let's say I'm having my ERP, my CRM, I define them as separate taxi projects where I define their API layer or interface layer even better because sometimes it's just a direct call to a database for unknown reasons."
  },
  {
    startTime: 5875.5,
    person: 'Karol',
    text: ' And then I input that in, and as a dependency, I can literally build that lineage.'
  },
  { startTime: 5885.18, person: 'Marty', text: ' Exactly, yeah.' },
  {
    startTime: 5886.66,
    person: 'Marty',
    text: " And I mean, that's as simple as, I mean, this will try and pull it in from, pull in something from like a Nexus kind of repository, which I don't think people are using that much anymore."
  },
  {
    startTime: 5900.64,
    person: 'Marty',
    text: " So you can actually do it as a, sorry, as a, there you go, as a GitHub URL, and then that'll pull in the dependency directly from Git, whether it's coming off of the main line or pulling off of a specific version, which is more likely what you'd want to deploy to prod."
  },
  {
    startTime: 5920,
    person: 'Karol',
    text: ' Yeah, and if I sit down with that team and help them build that as an integration architect to inventory their interoperability capabilities, then I already have a source of truth because they can embed that in their repository and I can import this to my analytics for design purposes directly from their GitHub or GitLab or whatever other versioning system that they have.'
  },
  { startTime: 5952.74, person: 'Marty', text: ' Yeah, exactly, yep.' },
  { startTime: 5955.64, person: 'Karol', text: ' Beauty.' },
  { startTime: 5956.84, person: 'Karol', text: ' I want to use it.' },
  { startTime: 5958.54, person: 'Karol', text: ' When will you give it to me?' },
  { startTime: 5961.44, person: 'Karol', text: ' Give it to me now.' },
  {
    startTime: 5963.62,
    person: 'Marty',
    text: " I'll probably have this, I mean, you can go and instal the existing version into VS Code now."
  },
  {
    startTime: 5970.88,
    person: 'Marty',
    text: ' I reckon this will probably be released end of the week.'
  },
  { startTime: 5974.24, person: 'Marty', text: ' Right.' },
  {
    startTime: 5974.54,
    person: 'Marty',
    text: " The code's all up on GitHub for it if people want to, well, it's actually on GitHub and GitLab, but no one even goes to GitLab, so we have to publish it to GitHub so people will find us."
  },
  {
    startTime: 5987.96,
    person: 'Marty',
    text: ' But all the code, this is all entirely open source.'
  },
  { startTime: 5990.5, person: 'Marty', text: ' You can go and check out the code now for it.' },
  {
    startTime: 5994.82,
    person: 'Karol',
    text: " I'm a very busy engineer, so basically I'd rather have something that I can just drop on my machine and use straight out of bat, so that's always the case."
  },
  {
    startTime: 6005.62,
    person: 'Karol',
    text: " So if I need to spend time figuring out how to run it, it's going to be a problem for me."
  },
  { startTime: 6011.86, person: 'Karol', text: ' Too little time.' },
  {
    startTime: 6012.6,
    person: 'Marty',
    text: ' Yeah, the plugin should ship later this week, I reckon.'
  },
  { startTime: 6015.56, person: 'Karol', text: ' Oh, man, amazing.' },
  {
    startTime: 6017.36,
    person: 'Karol',
    text: ' Okay, and then we can just flood you with feedback.'
  },
  { startTime: 6021.38, person: 'Karol', text: ' Yeah, bring it on, feedback.' },
  {
    startTime: 6023.86,
    person: 'Karol',
    text: ' Just a question, because Stefan is constantly commenting.'
  },
  { startTime: 6028, person: 'Karol', text: ' Stefan, would you use that if it is shipped?' },
  {
    startTime: 6032.28,
    person: 'Karol',
    text: ' Oh, could I get a notification when the version is up?'
  },
  { startTime: 6036.48, person: 'Karol', text: ' So that answers that question.' },
  { startTime: 6038.28, person: 'Karol', text: ' Would Stefan use it?' },
  { startTime: 6039.6, person: 'Karol', text: ' Stefan would definitely use this.' },
  {
    startTime: 6041.34,
    person: 'Marty',
    text: " Come join our Slack channel and I'll announce it in there."
  },
  {
    startTime: 6045.54,
    person: 'Karol',
    text: " Oh, Slack channel, if I haven't had enough of those."
  },
  {
    startTime: 6049.06,
    person: 'Karol',
    text: ' Yeah, you can post the link to the Slack channel.'
  },
  { startTime: 6054.6, person: 'Marty', text: ' Go to texielang on the docs.' },
  { startTime: 6059.3, person: 'Marty', text: ' It should be, there you go, chat on Slack.' },
  { startTime: 6061.64, person: 'Marty', text: ' Ah, chat on Slack, okay.' },
  { startTime: 6063.3, person: 'Marty', text: ' Yeah, come and chat to us.' },
  {
    startTime: 6066.26,
    person: 'Karol',
    text: ' See, Stefan is very optimistic about the tool already.'
  },
  {
    startTime: 6073.14,
    person: 'Karol',
    text: ' I told you, this thing has an analytical potential.'
  },
  {
    startTime: 6078.28,
    person: 'Karol',
    text: " When we started chatting about that, I literally instantly saw that analytical potential you didn't explore yet."
  },
  {
    startTime: 6085.86,
    person: 'Karol',
    text: " And it was like, we should make it an analytical tool because it's just for analysis, outside of use with Orbital, just for MuleSoft projects, Boomi projects, I don't know, EDA, async API specs, whatever else."
  },
  {
    startTime: 6104.14,
    person: 'Karol',
    text: ' Hook it up to an API portal and just pull all the specs from there.'
  },
  { startTime: 6108.42, person: 'Karol', text: ' I mean, brilliant in that sense.' },
  {
    startTime: 6111.38,
    person: 'Karol',
    text: ' It would be just so, so easy to get the things analysed visually quicker.'
  },
  { startTime: 6118.4, person: 'Karol', text: ' And see, Stefan already loves this.' },
  {
    startTime: 6120.74,
    person: 'Karol',
    text: ' And I know about the other viewers because we have plenty of the people that just, you know, passive consumers of content as 95% of LinkedIn.'
  },
  {
    startTime: 6129.96,
    person: 'Karol',
    text: " Hopefully somebody else will comment later and see, tell us if that's value."
  },
  { startTime: 6137.44, person: 'Karol', text: ' For me, that was mind blown.' },
  { startTime: 6139.48, person: 'Karol', text: ' I see Stefan is mind blown himself.' },
  { startTime: 6145.32, person: 'Karol', text: ' So yeah.' },
  {
    startTime: 6148.22,
    person: 'Karol',
    text: ' Where do we subscribe for a newsletter to get just the updates instead of Slack?'
  },
  {
    startTime: 6152.78,
    person: 'Karol',
    text: ' Because my email is more frequently checked than Slack, to be honest.'
  },
  { startTime: 6159.7, person: 'Marty', text: " See what's just happened?" },
  {
    startTime: 6161.14,
    person: 'Marty',
    text: " Now I've got another thing to go and build for Carol."
  },
  {
    startTime: 6166.58,
    person: 'Marty',
    text: " Just when I think I'm out, they pull me back in."
  },
  { startTime: 6170.44, person: 'Karol', text: ' Give me a newsletter to subscribe to.' },
  { startTime: 6173.94, person: 'Marty', text: " We don't have a newsletter, I'm afraid." },
  { startTime: 6178.06, person: 'Marty', text: ' Join the Slack.' },
  { startTime: 6180.26, person: 'Karol', text: " I'll join the Slack." },
  {
    startTime: 6181.4,
    person: 'Karol',
    text: " Hopefully I'll get the notifications on email from Slack."
  },
  {
    startTime: 6185.02,
    person: 'Karol',
    text: ' So Slack sends me a lot of notifications on email.'
  },
  {
    startTime: 6189.18,
    person: 'Karol',
    text: " So hopefully I'll get those right when I need them."
  },
  { startTime: 6193.46, person: 'Karol', text: ' But yeah, so this is the concept.' },
  {
    startTime: 6195.82,
    person: 'Karol',
    text: " And I'm amazed that you actually hacked it into reality over the last two weeks."
  },
  { startTime: 6202.6, person: 'Karol', text: ' Kudos.' },
  { startTime: 6203.16, person: 'Karol', text: " I'm amazed, really." },
  { startTime: 6205.8, person: 'Karol', text: ' Brilliant.' },
  {
    startTime: 6207.28,
    person: 'Karol',
    text: ' I want to see more and I would love to see that in practise.'
  },
  {
    startTime: 6211.02,
    person: 'Karol',
    text: " So I'm going to just take it and start embedding that in my projects and see also what my colleagues in consulting could whip up with that."
  },
  { startTime: 6221.18, person: 'Karol', text: ' Because I think that there is that potential.' },
  {
    startTime: 6223.94,
    person: 'Karol',
    text: " So the moment this plugin goes live and available, I can embed it in my VS code and let's go."
  },
  { startTime: 6232.04, person: 'Karol', text: " Let's play around." },
  { startTime: 6233.1, person: 'Karol', text: " Let's see." },
  {
    startTime: 6233.92,
    person: 'Karol',
    text: ' I think people in my cluster in Capgemini, that design integrations would also be very, very interested in looking into it and see how they can play around and what they can achieve with that.'
  },
  {
    startTime: 6246.82,
    person: 'Karol',
    text: " Because it's just an interesting piece of shortening the analysis time."
  },
  { startTime: 6253.26, person: 'Marty', text: ' Yeah, absolutely.' },
  {
    startTime: 6254.82,
    person: 'Marty',
    text: " Well, it's going to be interesting to see how people use it."
  },
  {
    startTime: 6257.22,
    person: 'Marty',
    text: " Like I say, we've been using it for years as an integration tool, but not as an analysis tool."
  },
  {
    startTime: 6265.86,
    person: 'Marty',
    text: " So it's almost certainly going to be a whole new use case."
  },
  { startTime: 6269.36, person: 'Marty', text: " It's super exciting in that way." },
  { startTime: 6271.16, person: 'Marty', text: " And it's going to be really interesting." },
  {
    startTime: 6273.66,
    person: 'Marty',
    text: ' I think things pop out once you start playing with it.'
  },
  { startTime: 6276.98, person: 'Marty', text: " So it's going to be really interesting." },
  {
    startTime: 6278.88,
    person: 'Karol',
    text: " Yeah, definitely the next project, because this one I'm wrapping up right now."
  },
  {
    startTime: 6283.62,
    person: 'Karol',
    text: " But the next project I'm in, I'm just going to hop in and let's dump it all into VS Code."
  },
  {
    startTime: 6292.4,
    person: 'Karol',
    text: " Let's get all the YAMLs or, well, wherever the format of the open API spec would be there."
  },
  {
    startTime: 6299.06,
    person: 'Karol',
    text: " And just let's try to dissect that and understand the landscape and see what we're dealing with."
  },
  {
    startTime: 6304.48,
    person: 'Karol',
    text: " And I think that's going to be just ridiculously great at that."
  },
  {
    startTime: 6311.38,
    person: 'Karol',
    text: " Because I've been doing this right now in Obsidian MD, just creating markdown files for each API definition, each specific service, and creating links and mappings between those."
  },
  {
    startTime: 6325.22,
    person: 'Karol',
    text: " And it's a chore, because I just basically need to create links in markdown between different documents in markdown."
  },
  { startTime: 6331.06, person: 'Karol', text: ' And this then shows us a nice graph.' },
  { startTime: 6334.12, person: 'Karol', text: ' Well, fun.' },
  { startTime: 6335.16, person: 'Karol', text: ' It looks nice.' },
  {
    startTime: 6335.82,
    person: 'Karol',
    text: " But I cannot really get that value, because I don't have a query language attached to that."
  },
  { startTime: 6341.06, person: 'Karol', text: ' So the queries are in my head.' },
  {
    startTime: 6343.46,
    person: 'Karol',
    text: ' So I need to go through that graph and start figuring it out.'
  },
  {
    startTime: 6347.94,
    person: 'Karol',
    text: ' And if I would want to do this on the level of individual attributes, semantically, this graph would be humongous.'
  },
  {
    startTime: 6358.26,
    person: 'Karol',
    text: " And it's just not feasible to maintain that in Obsidian, because just the level of abstractions I would have to go through and the level of nodes in Obsidian that would build on the graph would be just horrendous to maintain."
  },
  {
    startTime: 6373.46,
    person: 'Karol',
    text: ' And then having this with a query language, well, problem solved.'
  },
  { startTime: 6379.76, person: 'Karol', text: ' Done.' },
  { startTime: 6380.98, person: 'Karol', text: " Let's model and let's have it." },
  {
    startTime: 6382.8,
    person: 'Karol',
    text: " It's like, yeah, that makes my life easier in that modelling sense."
  },
  {
    startTime: 6388.12,
    person: 'Karol',
    text: ' So then having that as a notebook in VS Code, perfect.'
  },
  {
    startTime: 6393.36,
    person: 'Karol',
    text: ' Save it, send it into GitHub as a repository, make everybody able to update that and review that and have it available to open in VS Code just to look through the semantics.'
  },
  { startTime: 6408.7, person: 'Karol', text: ' Beauty.' },
  {
    startTime: 6410.22,
    person: 'Karol',
    text: " So I'm very happy you actually took that idea and actually make it happen."
  },
  { startTime: 6417.08, person: 'Marty', text: ' I love a good idea, man.' },
  { startTime: 6418.24, person: 'Marty', text: ' I love a good idea.' },
  {
    startTime: 6419.96,
    person: 'Karol',
    text: ' I mean, it was a half decent idea that I just said it.'
  },
  { startTime: 6424.16, person: 'Karol', text: " And it's like, you're just like, let's do it." },
  { startTime: 6427.12, person: 'Karol', text: " I'm like, okay." },
  {
    startTime: 6429.34,
    person: 'Karol',
    text: ' But absolutely, even more amazed that you managed to fit it in your schedule and managed to hack it within those two weeks and present it today as a actual working demo.'
  },
  { startTime: 6440.4, person: 'Karol', text: " It's like, you're a goddamn nerd." },
  {
    startTime: 6444.14,
    person: 'Marty',
    text: " Let's get it shipped so people can actually use it."
  },
  { startTime: 6447.72, person: 'Karol', text: " Yeah, yeah, that's definitely." },
  { startTime: 6451.18, person: 'Karol', text: " I'm looking forward if and when." },
  {
    startTime: 6453.62,
    person: 'Karol',
    text: " I'm definitely gonna make buzz about this on all the media just to say, hey, we managed to get it live."
  },
  {
    startTime: 6461.42,
    person: 'Karol',
    text: " Let's see if we can use it and provide real use cases for this to visualise all of these things that we're doing as integration architects or business analysts or data architects or whatever other surprise use cases where you'll find that."
  },
  { startTime: 6477.46, person: 'Karol', text: ' I think we will find quite a few.' },
  { startTime: 6479.38, person: 'Karol', text: ' Yeah, absolutely.' },
  { startTime: 6481.18, person: 'Karol', text: ' Nice, excellent.' },
  { startTime: 6483.61, person: 'Karol', text: ' Woo!' },
  { startTime: 6485.26, person: 'Karol', text: ' So what do you think?' },
  {
    startTime: 6486.96,
    person: 'Karol',
    text: ' Semantic metadata, is that gonna now be the new spec-driven development?'
  },
  {
    startTime: 6494.32,
    person: 'Marty',
    text: " I mean, look, I'm really bullish on semantic layers."
  },
  {
    startTime: 6499.44,
    person: 'Marty',
    text: ' I think that, well, I mean, we did a bunch of research around, so did Gartner.'
  },
  {
    startTime: 6507.92,
    person: 'Marty',
    text: " Gartner came out with some really interesting research just last week around what they're calling context layers."
  },
  { startTime: 6514.66, person: 'Marty', text: ' Context layers.' },
  {
    startTime: 6515.14,
    person: 'Marty',
    text: " Context layers, but it's basically the same thing, right?"
  },
  {
    startTime: 6517.86,
    person: 'Marty',
    text: " It's around, you know, as AI, I can't believe we got nearly two hours into the conversation without talking about AI, but, you know, as teams that live in enterprises are trying to solve these problems and they can't just take all of their open API specs and throw them at an LLM and get it to do work because the context windows fill up."
  },
  {
    startTime: 6540.74,
    person: 'Marty',
    text: " And we did some research at the tail end of last year of kind of what's the impact on that and accuracy falls off."
  },
  {
    startTime: 6546.76,
    person: 'Marty',
    text: ' So, you know, we showed that with semantic layers, semantic metadata, LLMs do a much better job of reasoning around how do we orchestrate systems together?'
  },
  {
    startTime: 6558.56,
    person: 'Marty',
    text: " And, you know, it makes sense because it's so much, I mean, we just, we already saw with Taxi, it's so much more concise than open API."
  },
  {
    startTime: 6565.7,
    person: 'Marty',
    text: " And when you're, you know, when you're sending tokens and when your unit of currency is a token, it absolutely makes sense."
  },
  {
    startTime: 6574.22,
    person: 'Marty',
    text: " Now, I don't think teams would adopt, like if I was an enterprise architect, we wouldn't adopt Taxi over open API because it's the standard."
  },
  {
    startTime: 6584.64,
    person: 'Marty',
    text: ' But if I was sending something to an LLM where I have to pay money for every four characters that I send, I would absolutely convert my open API specs into Taxi before I send them out to an LLM.'
  },
  {
    startTime: 6598.44,
    person: 'Marty',
    text: " Because if nothing else, it's more economic in terms of sending out this stuff."
  },
  {
    startTime: 6604.14,
    person: 'Marty',
    text: " But it's also more accurate and it's also higher context."
  },
  {
    startTime: 6609.16,
    person: 'Karol',
    text: ' But even if we look at the connection between agentic ecosystems and the traditional IT ecosystems where you basically start two completely separate ecosystems already at this point, right?'
  },
  { startTime: 6625.54, person: 'Karol', text: ' And you need to make them talk to one another.' },
  { startTime: 6628.9, person: 'Karol', text: ' And people are now using MCP for that.' },
  {
    startTime: 6632.44,
    person: 'Karol',
    text: " It's been already proven that if you expose through MCP just everything without contextualising this properly, you'll have a very, very hallucinating agent."
  },
  {
    startTime: 6644.94,
    person: 'Karol',
    text: " But if you apply proper data governance and integration governance with the main partitioning to that aspect, then all of a sudden you have a actually half-decent AI agent working in favour of whatever you're trying to do because it stops hallucinating because it is confined within a specific context."
  },
  {
    startTime: 6668.26,
    person: 'Karol',
    text: ' And that context being the bounded context of the specific problem domain, whatever that problem domain is.'
  },
  {
    startTime: 6674.52,
    person: 'Marty',
    text: ' Cloudflare published some really cool research around exactly that.'
  },
  { startTime: 6678.08, person: 'Marty', text: ' And the number of MCP servers is really low.' },
  { startTime: 6681.62, person: 'Marty', text: " It's 10, right?" },
  {
    startTime: 6683.16,
    person: 'Marty',
    text: " It's 10 medium-sized, one or two-tall MCP servers."
  },
  {
    startTime: 6691.68,
    person: 'Marty',
    text: ' And if you publish 10 of those, accuracy starts falling away.'
  },
  { startTime: 6696.46, person: 'Marty', text: ' Hallucinations start coming up.' },
  { startTime: 6698.08, person: 'Marty', text: ' 10 is nothing, right?' },
  {
    startTime: 6700.5,
    person: 'Marty',
    text: " Like 10 is, aside from being a hard word for a New Zealander to say, it's nothing."
  },
  {
    startTime: 6708.62,
    person: 'Marty',
    text: " I'm sure GitHub's MCP server has probably got 30, 40, 50 tools right there."
  },
  { startTime: 6716.08, person: 'Marty', text: ' So 10 is nothing.' },
  {
    startTime: 6717.9,
    person: 'Marty',
    text: " Enterprises are going to need to start thinking around, very, very quickly get to the point of going, well, we can't just throw all of our stuff against the wall and see what the LLMs spit back."
  },
  {
    startTime: 6730.42,
    person: 'Marty',
    text: " So I'm bullish on whether you call it a semantic layer or a context layer."
  },
  { startTime: 6734.76, person: 'Marty', text: " It's the same thing." },
  {
    startTime: 6736.92,
    person: 'Marty',
    text: ' People will call it a context layer because the Gartner and, you know.'
  },
  {
    startTime: 6741.2,
    person: 'Karol',
    text: " It depends on the language we use, depends on the industry you're working with."
  },
  { startTime: 6745.94, person: 'Karol', text: " If you're working AI, that's context." },
  {
    startTime: 6748.02,
    person: 'Karol',
    text: " If you work in data architecture, that's your data lineage and data objects and data products."
  },
  {
    startTime: 6755.74,
    person: 'Karol',
    text: " If you work in integration, that's integration services."
  },
  {
    startTime: 6760.6,
    person: 'Karol',
    text: ' Not even APIs, but actual services that you provide.'
  },
  {
    startTime: 6765.18,
    person: 'Karol',
    text: ' And these are just different names or different angles looking at the same thing from different perspectives.'
  },
  {
    startTime: 6773.7,
    person: 'Karol',
    text: ' Moving data, exposing data, understanding and consuming data.'
  },
  { startTime: 6778.58, person: 'Karol', text: " It's all intertwined, literally." },
  {
    startTime: 6782.36,
    person: 'Karol',
    text: ' But these are the same problems between AI agents and consumption of MCP or integrations and badly defining APIs, badly defining integration flows, making them, for example, too fine or too coarse.'
  },
  {
    startTime: 6801.52,
    person: 'Karol',
    text: ' And the same with the data products where companies say, oh, we stopped doing data products and we have over 300 data products, which means basically that you turned every goddamn database table into a data product, which is not a data product.'
  },
  { startTime: 6817.26, person: 'Karol', text: " That's just a reflection of your DB table." },
  {
    startTime: 6820.96,
    person: 'Karol',
    text: " It's the worst kind of an API if people start exposing the database tables literally in an API."
  },
  { startTime: 6830.92, person: 'Karol', text: " No, that's not how you're supposed to do that." },
  {
    startTime: 6833.8,
    person: 'Karol',
    text: ' Even back in the day, 15 years ago, DBAs understood that if you want to expose your DB outside, you first need to create an interchange schema.'
  },
  {
    startTime: 6843.48,
    person: 'Karol',
    text: ' And on that schema, you expose views and procedures, not individual tables, because that makes no sense.'
  },
  {
    startTime: 6850.9,
    person: 'Karol',
    text: ' Views were for very simple objects and procedures were for those that were complex, spanning over several tables.'
  },
  {
    startTime: 6857.84,
    person: 'Karol',
    text: " And even if you could, if that's a read-only aspect, if you could span across several tables because underneath you had selects with joins to compose that view."
  },
  {
    startTime: 6869.54,
    person: 'Karol',
    text: ' So that was already 20, 15 years ago where Oracle 9 and you had no capabilities in those databases to make a call.'
  },
  { startTime: 6879.28, person: 'Karol', text: ' You had to expose that.' },
  { startTime: 6880.34, person: 'Karol', text: ' There was a lot of polling.' },
  {
    startTime: 6881.94,
    person: 'Karol',
    text: " So you had to compose that in a way that didn't harm the main database and those data."
  },
  {
    startTime: 6887.5,
    person: 'Karol',
    text: ' And that was already that kind of abstraction and encapsulation and that thing.'
  },
  { startTime: 6892.16, person: 'Karol', text: ' And then we started using APIs for everything.' },
  { startTime: 6895.1, person: 'Karol', text: ' And suddenly that was out the door again.' },
  {
    startTime: 6898,
    person: 'Karol',
    text: " And we're now rediscovering that this is actually necessary."
  },
  { startTime: 6902.54, person: 'Karol', text: " Yes, we're coming full circle again." },
  {
    startTime: 6905.32,
    person: 'Marty',
    text: " And we're doing it again and again and again because now we're doing it with MCP servers, which are, you know, a different provider as well."
  },
  { startTime: 6912.94, person: 'Karol', text: ' We had that with databases.' },
  { startTime: 6914.56, person: 'Karol', text: ' We had that with SOAP.' },
  { startTime: 6915.54, person: 'Karol', text: ' We had that with REST already.' },
  {
    startTime: 6917.86,
    person: 'Karol',
    text: " We already came full circle with REST because REST at the beginning with the open API spec with the swagger was very simplistic and didn't express the amount of things you could define with SOAP."
  },
  { startTime: 6930.74, person: 'Karol', text: ' Now you can again.' },
  {
    startTime: 6932.32,
    person: 'Karol',
    text: ' And now the same thing, MCP, the same problems again and the same rediscovery of the wheel.'
  },
  { startTime: 6937.02, person: 'Marty', text: ' Yep, yep.' },
  { startTime: 6938.16, person: 'Karol', text: " It's interesting." },
  {
    startTime: 6939.18,
    person: 'Karol',
    text: " When you're long enough in the industry, you start noticing those cycles of reinvention."
  },
  { startTime: 6944.34, person: 'Marty', text: ' Absolutely.' },
  { startTime: 6945.12, person: 'Marty', text: ' I mean, it happens all over the place.' },
  { startTime: 6947.08, person: 'Marty', text: ' You saw it in...' },
  {
    startTime: 6949.38,
    person: 'Marty',
    text: ' My favourite was with Package.JSON and MPM where they worked very hard for it not to be Maven because Maven was evil and XML and from those Java nerds.'
  },
  {
    startTime: 6963.22,
    person: 'Marty',
    text: ' And then bit by bit, like, you know, they had to keep pulling in all these ideas from Maven around like fixing versions and soon enough, it ends up being kind of feature compatible with Maven.'
  },
  { startTime: 6978.14, person: 'Marty', text: ' Yeah.' },
  {
    startTime: 6979.02,
    person: 'Marty',
    text: ' And likewise, you also see the Java nerds stealing from the JavaScript guys who were like cowboys in the beginning and like shipping all these really cool features and the Java guys are like, hey, actually, that looks really cool.'
  },
  { startTime: 6989.48, person: 'Marty', text: ' And so they start...' },
  {
    startTime: 6990.06,
    person: 'Marty',
    text: " So everything kind of start equalising up and to a point where TypeScript and C Sharp like, you know, these beautiful languages that have stolen stuff from each other but we've basically gone full circle on them."
  },
  { startTime: 7003.36, person: 'Marty', text: ' Anyway, language nerd.' },
  { startTime: 7008.44, person: 'Karol', text: " That's basically it." },
  {
    startTime: 7010.2,
    person: 'Karol',
    text: " Especially that right now, the exchange of information is at light speed which means we know about all those features instantly when they occur and we thought, oh, we're going to chase the tail."
  },
  { startTime: 7025.56, person: 'Karol', text: ' And that happens all the time.' },
  {
    startTime: 7027,
    person: 'Karol',
    text: " 20 years ago, that was unthinkable because first of all, we didn't develop at this speed."
  },
  {
    startTime: 7031.52,
    person: 'Karol',
    text: " The second of all, we didn't even know about those features at this speed."
  },
  {
    startTime: 7034.66,
    person: 'Karol',
    text: ' Discovering these kinds of languages and features was months between their release and actually people discovering that these features exist, right?'
  },
  {
    startTime: 7046.46,
    person: 'Karol',
    text: " So it's been a crazy speed up over the last 20 years in the industry in that sense."
  },
  { startTime: 7055.56, person: 'Karol', text: ' And we need to speed up our work as well.' },
  {
    startTime: 7058.2,
    person: 'Karol',
    text: " So I'm happy that we have now an analytical tool to actually speed up our analysis so we can catch up with the speed of change that is going on because the model will just keep on drifting."
  },
  {
    startTime: 7071.68,
    person: 'Karol',
    text: " I mean, it's a little bit of a segue to Barry O'Reilly and the residual theory where Barry states that, well, you have constant model drift."
  },
  {
    startTime: 7085.16,
    person: 'Karol',
    text: " The moment you sit down and model something, whatever that model would be, it's an approximation of reality."
  },
  {
    startTime: 7091.76,
    person: 'Karol',
    text: " The model intrinsically is wrong, but it's useful."
  },
  {
    startTime: 7096.68,
    person: 'Karol',
    text: ' But the moment you model something and put it on paper or MD file, whatever, the model already drifted away.'
  },
  { startTime: 7105.34, person: 'Karol', text: " It's already changed." },
  { startTime: 7106.26, person: 'Karol', text: " And you're already inaccurate in that sense." },
  {
    startTime: 7109.22,
    person: 'Karol',
    text: " So it's not only wrong by the notion of models being wrong."
  },
  {
    startTime: 7113.72,
    person: 'Karol',
    text: " It's already inaccurate because already things changed."
  },
  { startTime: 7116.48, person: 'Karol', text: ' The business already moved on.' },
  {
    startTime: 7118.2,
    person: 'Karol',
    text: ' And you have a model that is the past, not anything else, right?'
  },
  { startTime: 7125.48, person: 'Karol', text: ' So in that sense, that speed is quite...' },
  { startTime: 7131.42, person: 'Karol', text: ' the biggest challenge in IT right now.' },
  {
    startTime: 7134.38,
    person: 'Karol',
    text: ' If we have tools that can increase our speeds as analysts, architects, tech leads, engineers, developers, you name the role, whatever the role is, then yeah, then we can at least try to catch up.'
  },
  { startTime: 7148.66, person: 'Marty', text: ' Yeah.' },
  { startTime: 7149.5, person: 'Karol', text: ' Try.' },
  { startTime: 7150.06, person: 'Karol', text: ' Exactly.' },
  { startTime: 7151.14, person: 'Marty', text: ' Yeah.' },
  {
    startTime: 7151.64,
    person: 'Karol',
    text: " I wouldn't dare say that we will catch up, but at least we can try."
  },
  { startTime: 7157.46, person: 'Marty', text: ' Yeah.' },
  { startTime: 7159.9, person: 'Karol', text: ' All right.' },
  { startTime: 7160.98, person: 'Karol', text: ' Mari, awesome.' },
  {
    startTime: 7162.36,
    person: 'Karol',
    text: " I'll definitely post when you tell me, we have a shippable plugin for VS Code."
  },
  {
    startTime: 7169.88,
    person: 'Karol',
    text: " I'll let everybody know that, hey, this came to be."
  },
  { startTime: 7174.18, person: 'Karol', text: ' Now we can play around.' },
  {
    startTime: 7176.16,
    person: 'Karol',
    text: ' And it works because I think we basically reached the end of the topic for today.'
  },
  { startTime: 7181.22, person: 'Karol', text: ' Let me just quickly look into...' },
  { startTime: 7182.86, person: 'Karol', text: ' Yeah.' },
  { startTime: 7183.96, person: 'Karol', text: ' We covered everything from the list.' },
  { startTime: 7186.96, person: 'Marty', text: ' Nice.' },
  { startTime: 7188.2, person: 'Marty', text: ' No, nothing for me.' },
  {
    startTime: 7189.3,
    person: 'Marty',
    text: " I mean, I've thoroughly enjoyed being here and pulling this together."
  },
  {
    startTime: 7195.66,
    person: 'Marty',
    text: ' And I genuinely am interested to see what use cases are going to come up in this kind of whole new world.'
  },
  { startTime: 7202.72, person: 'Marty', text: " So it's super exciting." },
  { startTime: 7204.96, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 7205.34,
    person: 'Karol',
    text: " I mean, I'm excited to have such a tool at my fingertips because it's going to be amazing to visualise this fast."
  },
  { startTime: 7216.42, person: 'Karol', text: ' So yeah.' },
  { startTime: 7217.34, person: 'Karol', text: ' Whoa.' },
  { startTime: 7218.86, person: 'Karol', text: ' This was even eye-opening and mouth-watering.' },
  { startTime: 7221.82, person: 'Karol', text: " Oh, it's so awesome, man." },
  { startTime: 7225.88, person: 'Karol', text: ' Stefan, you and your comments, man.' },
  { startTime: 7228.82, person: 'Karol', text: ' All right.' },
  { startTime: 7232.02, person: 'Karol', text: ' Everybody, thank you.' },
  { startTime: 7233.64, person: 'Karol', text: ' Thank you for tonight.' },
  {
    startTime: 7235.76,
    person: 'Karol',
    text: " Before we move on and end the stream, I'm just going to pop in, do a little bit of advertisement."
  },
  {
    startTime: 7243.9,
    person: 'Karol',
    text: ' So next week over, we have Pamela Patterson, best selling author and an international speaker in business analysis.'
  },
  {
    startTime: 7251.28,
    person: 'Karol',
    text: " And we're going to be, hopefully not literally, slicing and dicing stakeholders."
  },
  {
    startTime: 7256,
    person: 'Karol',
    text: " So we're shifting the topic a little bit to a different abstraction layer of working with our stakeholders and analysing our stakeholders so that we actually can understand what the hell they need from us."
  },
  {
    startTime: 7268.34,
    person: 'Karol',
    text: " Because they always say what they want, but that's not what they need most of the times."
  },
  {
    startTime: 7273.52,
    person: 'Karol',
    text: ' So tune in next week to this stream so we can talk about business analysis a little bit.'
  },
  { startTime: 7280.5, person: 'Karol', text: ' And working with stakeholders.' },
  {
    startTime: 7283.66,
    person: 'Karol',
    text: ' And then, of course, if you still here, I see quite a few people still watching.'
  },
  {
    startTime: 7289.18,
    person: 'Karol',
    text: " If you're new to Bridging the Gap, you can always check out upcoming events."
  },
  { startTime: 7293.92, person: 'Karol', text: ' QR code to the left.' },
  {
    startTime: 7295.76,
    person: 'Karol',
    text: " Like I said at the beginning of the stream, we're running an integration design training."
  },
  {
    startTime: 7303.14,
    person: 'Karol',
    text: ' This QR code leads to the actual training at DDD Academy.'
  },
  {
    startTime: 7307.52,
    person: 'Karol',
    text: " But if you roll back to the beginning of the stream on YouTube, you'll be able to see the QR code for the dry run."
  },
  {
    startTime: 7313.52,
    person: 'Karol',
    text: ' We still have a few slots for the dry run if you want to join and give us feedback on the content.'
  },
  {
    startTime: 7317.98,
    person: 'Karol',
    text: " And of course, if you didn't know about the YouTube channel, you're watching us on LinkedIn, subscribe to the YouTube channel."
  },
  { startTime: 7324.86, person: 'Karol', text: " Here's the QR code to the right to it." },
  {
    startTime: 7328.3,
    person: 'Karol',
    text: ' Always fantastic if you hit the bell there and you get notified about the next live streams.'
  },
  {
    startTime: 7335.1,
    person: 'Karol',
    text: ' Hopefully in the near future, also just video content.'
  },
  {
    startTime: 7338.28,
    person: 'Karol',
    text: " But yeah, that's a completely different story because I don't have the time in the world."
  },
  {
    startTime: 7345.02,
    person: 'Karol',
    text: ' If the day was 36 hours, maybe I would be able to make more content.'
  },
  {
    startTime: 7350.16,
    person: 'Karol',
    text: " But at this point, it's just work, content, work, content, training, too much."
  },
  {
    startTime: 7357.04,
    person: 'Karol',
    text: ' Anyways, Marty, thank you for showing us this amazing tool.'
  },
  { startTime: 7361.08, person: 'Karol', text: ' Thank you for having me.' },
  {
    startTime: 7361.92,
    person: 'Karol',
    text: ' Some of us are definitely going to be waiting for the official release.'
  },
  { startTime: 7367.06, person: 'Karol', text: ' Exciting.' },
  { startTime: 7369.14, person: 'Marty', text: ' Fantastic.' },
  { startTime: 7369.74, person: 'Marty', text: ' Thank you very much for having me.' }
])
</script>

<style scoped></style>
