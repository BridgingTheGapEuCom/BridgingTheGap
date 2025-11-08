<template>
  <div class="w-full">
    <StreamLayout
      :transcript="transcript"
      name="Loosely Coupled - Data Mesh vs Application Integration"
      video-id="JaCuv8gRnJg"
    />
  </div>
</template>

<script lang="ts" setup>
const transcript = ref([
  {
    startTime: 101.77,
    person: 'Karol',
    text: ' Good morning, good afternoon, and good evening, everybody, and welcome to another episode from Loosely Coupled, brought to you by Bridging the Gap.'
  },
  {
    startTime: 111.27,
    person: 'Karol',
    text: " My name is Karol Skrzymowski, and I'll be your host tonight."
  },
  {
    startTime: 115.63,
    person: 'Karol',
    text: " Today, we have an interesting topic, at least from my perspective, because a topic that I don't know quite a lot about."
  },
  { startTime: 123.01, person: 'Karol', text: ' I have just hints, not my space of engineering.' },
  {
    startTime: 127.61,
    person: 'Karol',
    text: " Today, we're talking about data match versus application integration, which is my topic of interviewing."
  },
  {
    startTime: 135.15,
    person: 'Karol',
    text: ' But this is a very interesting topic that I stumbled into this year by attending Domain-Driven Design Europe, which is a very lovely conference held this year in Antwerp in Belgium.'
  },
  {
    startTime: 149.67,
    person: 'Karol',
    text: " I don't do that much data in terms of working with data."
  },
  {
    startTime: 153.65,
    person: 'Karol',
    text: ' I just pass it along as any integration engineer.'
  },
  {
    startTime: 157.37,
    person: 'Karol',
    text: ' And this is, at times, a bit of a problem, because what I found doing a workshop this year at BBD Europe was that we do have a bit of a divide between the world of data and the world of application integration, especially, I think, in the language.'
  },
  {
    startTime: 176.04,
    person: 'Karol',
    text: " While the title is a bit of a pun or a hook to lure you in, it's basically, I don't think it's versus."
  },
  {
    startTime: 187.93,
    person: 'Karol',
    text: " But, that said, I'm joined today by two wonderful architects, engineers, starting with Rachel Barton, who is a principal and domain architect with 20 years of experience in working with data."
  },
  { startTime: 207.33, person: 'Karol', text: ' Quite amazing, right?' },
  {
    startTime: 209.71,
    person: 'Karol',
    text: ' Now, Rachel worked both on the reporting and operational side of data, which means that this is basically two sides of the same coin.'
  },
  { startTime: 220.11, person: 'Karol', text: ' I mostly work on the operational side, really.' },
  {
    startTime: 222.51,
    person: 'Karol',
    text: " So, for me, that reporting part is not something I'm familiar with."
  },
  { startTime: 226.03, person: 'Karol', text: " So, I'm very keen to hear what's going on there." },
  {
    startTime: 229.41,
    person: 'Karol',
    text: ' And Rachel very early jumped on the bandwagon of data meshes.'
  },
  {
    startTime: 234.75,
    person: 'Karol',
    text: " So, I'll be very curious to hear her experiences on the topic."
  },
  {
    startTime: 239.87,
    person: 'Karol',
    text: ' Also joining us today is Andrew Jones, a principal engineer and an author with 15 years of experience in the industry, first working as a software engineer, then becoming a data platform data engineering expert.'
  },
  {
    startTime: 256.49,
    person: 'Karol',
    text: ' And since 2023, Andrew is also the author of a very, very lovely book, Driving Data Quality with Data Contracts.'
  },
  { startTime: 269.43, person: 'Karol', text: " I haven't read it yet." },
  { startTime: 270.67, person: 'Karol', text: ' Sorry, Andrew.' },
  { startTime: 271.69, person: 'Karol', text: " But I hear it's a very good read." },
  {
    startTime: 274.71,
    person: 'Karol',
    text: " We'll be going back to the book later this stream."
  },
  {
    startTime: 279.09,
    person: 'Karol',
    text: ' So, without further ado, Rachel, Andrew, welcome to the Loosely Coupled stream.'
  },
  { startTime: 286.89, person: 'Rachel', text: ' Thank you very much.' },
  { startTime: 288.09, person: 'Rachel', text: ' Good afternoon to you.' },
  { startTime: 289.47, person: 'Karol', text: ' Thank you.' },
  { startTime: 290.07, person: 'Karol', text: ' Good afternoon.' },
  { startTime: 291.57, person: 'Karol', text: ' How are you guys doing today?' },
  { startTime: 293.69, person: 'Karol', text: " How's the weather in the UK?" },
  { startTime: 296.11, person: 'Rachel', text: " It's beautiful and sunny up here in Scotland." },
  { startTime: 299.19, person: 'Rachel', text: ' How is it down south, Andrew?' },
  {
    startTime: 300.75,
    person: 'Andrew',
    text: " Been less sunny, but dry, which is the main thing, because it's the summer holidays, so it's never perfect weather."
  },
  {
    startTime: 305.47,
    person: 'Andrew',
    text: " As long as it's dry, we can do something with kids outside."
  },
  { startTime: 308.17, person: 'Rachel', text: ' Always perfect in Scotland.' },
  { startTime: 309.53, person: 'Andrew', text: ' Of course it is.' },
  { startTime: 311.23, person: 'Rachel', text: ' You hear otherwise propaganda.' },
  {
    startTime: 314.71,
    person: 'Karol',
    text: ' I guess nothing like two people from UK talking about the weather, right?'
  },
  { startTime: 322.33, person: 'Rachel', text: ' You want to move on to something more exciting?' },
  {
    startTime: 325.51,
    person: 'Rachel',
    text: ' We can entertain you with data mesh, if you like.'
  },
  { startTime: 327.97, person: 'Karol', text: ' Yeah, definitely.' },
  {
    startTime: 329.15,
    person: 'Karol',
    text: " More exciting than the weather, always happy to, especially if that's a tech-related topic."
  },
  { startTime: 335.35, person: 'Karol', text: " And today, we're having a tech-related topic." },
  {
    startTime: 338.17,
    person: 'Karol',
    text: ' On the contrary to the two other streams that we were having within Loosely Coupled that were touching upon recruitment or cognitive load, a little bit more on psychology there.'
  },
  { startTime: 349.21, person: 'Karol', text: ' But yes, data meshes today.' },
  {
    startTime: 351.01,
    person: 'Karol',
    text: " And that's a topic that I'm not very familiar with."
  },
  {
    startTime: 355.31,
    person: 'Karol',
    text: ' I mean, Rachel, we had our conversation about that.'
  },
  {
    startTime: 359.25,
    person: 'Karol',
    text: " I think, personally, there's a little bit of butt blood between the data architects and integration architects, and also a little bit of, well, not a little bit, quite a few of misunderstandings in terms of language and conversations."
  },
  {
    startTime: 374.87,
    person: 'Karol',
    text: " So, I think today, we'll be clearing those up a little, hopefully."
  },
  { startTime: 379.69, person: 'Rachel', text: ' Absolutely, yes.' },
  { startTime: 380.93, person: 'Karol', text: ' Unless we get into a fight.' },
  { startTime: 383.51, person: 'Rachel', text: " There's no fighting." },
  {
    startTime: 384.91,
    person: 'Rachel',
    text: ' Data is all about peace, love, and collaboration.'
  },
  { startTime: 387.87, person: 'Karol', text: ' Ah, perfect.' },
  { startTime: 389.05, person: 'Karol', text: ' Okay.' },
  { startTime: 389.61, person: 'Karol', text: " That's what I like to hear." },
  { startTime: 390.61, person: 'Karol', text: ' All right.' },
  { startTime: 392.49, person: 'Karol', text: ' So, shall we?' },
  { startTime: 394.09, person: 'Rachel', text: ' Do you want me to jump in?' },
  { startTime: 395.29, person: 'Karol', text: ' Yeah, go ahead.' },
  {
    startTime: 396.47,
    person: 'Karol',
    text: ' If you can define data mesh for us, just like waltz in.'
  },
  { startTime: 400.19, person: 'Karol', text: ' Why not?' },
  {
    startTime: 401.09,
    person: 'Rachel',
    text: " So, I'll kind of start off in terms of data mesh, kind of the message that we were hearing and why we adopted it early on from Jamac was the bringing together of the operational and the reporting analytic data into the same domains so that they can be presided over by the business SMEs who understand that domain."
  },
  {
    startTime: 426.75,
    person: 'Rachel',
    text: ' So, as opposed to my past, when I worked on the reporting team, you would get the operational teams bringing on all that lovely transactional data.'
  },
  { startTime: 435.61, person: 'Rachel', text: " Great, job's done." },
  {
    startTime: 437.43,
    person: 'Rachel',
    text: ' A month later, oh, we need to get that into a report.'
  },
  { startTime: 440.77, person: 'Rachel', text: ' Oh, well, hang on a second.' },
  { startTime: 442.21, person: 'Rachel', text: " It's not in the right format." },
  {
    startTime: 443.51,
    person: 'Rachel',
    text: " We don't know what the quality of it or the rest of it is."
  },
  {
    startTime: 445.85,
    person: 'Rachel',
    text: ' So, this is the architectural paradigm that brings that together and which allows us to then have this much more constructive conversation about the operational side, how application integration becomes really important for moving the data around as well.'
  },
  {
    startTime: 464.39,
    person: 'Rachel',
    text: " I'll pass over to Andrew if there's anything else you want to add in from your side."
  },
  {
    startTime: 469.39,
    person: 'Andrew',
    text: " No, I think that's a really great introduction to data mesh, a great summary of what we're trying to do here."
  },
  {
    startTime: 476.17,
    person: 'Andrew',
    text: " I guess the reason why we're trying to do that is because the way we're using data in the analytical plane, the analytical domains area, is because we're using a lot more important things than we were before."
  },
  {
    startTime: 490.87,
    person: 'Andrew',
    text: " You could have argued that it's just reporting, it's not very important."
  },
  {
    startTime: 493.89,
    person: 'Andrew',
    text: " I don't think that's ever a fair argument, but some people might have argued that."
  },
  {
    startTime: 499.09,
    person: 'Andrew',
    text: ' But these days, reporting is critical for business, for decision making, for revenue reporting, for regulations, meta-regulations, for various other operational processes in the company.'
  },
  {
    startTime: 514.63,
    person: 'Andrew',
    text: " And then, of course, people are using data, feedback they're getting from analytics back into the operational plane for certain features."
  },
  {
    startTime: 522.53,
    person: 'Andrew',
    text: " I'm trying to avoid mentioning AI, but AI is obviously part of that as well."
  },
  {
    startTime: 526.65,
    person: 'Andrew',
    text: ' So I think the growing importance of this analytical data is the reason why we are trying to treat it a bit more like we do operational data.'
  },
  { startTime: 535.35, person: 'Andrew', text: " We're trying to bridge the gap, I suppose." },
  { startTime: 541.13, person: 'Karol', text: ' Yeah, good one there.' },
  {
    startTime: 545.31,
    person: 'Karol',
    text: " What I've seen so far in terms of how people approach reporting is that quite often it becomes more real-time than it used to be."
  },
  {
    startTime: 558.79,
    person: 'Karol',
    text: ' People have still this notion about reporting being done quarterly, once a month, yearly, something like that, right?'
  },
  {
    startTime: 567.73,
    person: 'Karol',
    text: " Well, I'm starting to see more and more trends to have this reporting done real-time, to have those data-driven decisions enabled in real-time rather than post-factum."
  },
  {
    startTime: 583.99,
    person: 'Karol',
    text: " And I think that's something that some businesses are already going into really hard."
  },
  { startTime: 589.57, person: 'Karol', text: ' Others are kind of trying to catch up.' },
  {
    startTime: 591.95,
    person: 'Karol',
    text: " And then there's the public sector, which is something else entirely."
  },
  {
    startTime: 596.87,
    person: 'Karol',
    text: " So it's interesting from that perspective that what I understand from what you said, Rachel, is basically data mesh would be the area of expertise to look at data from more of a holistic perspective and more of a productized perspective of how we can use data instead of just putting it into labels and boxes like operational data, analytical data or reporting data."
  },
  { startTime: 622.77, person: 'Karol', text: " It's data." },
  {
    startTime: 624.63,
    person: 'Rachel',
    text: " Well, yeah, it's picking up on that product term."
  },
  {
    startTime: 628.25,
    person: 'Rachel',
    text: " So where product was probably slightly being picked up anyway around the system side, it's the same thing."
  },
  {
    startTime: 636.01,
    person: 'Rachel',
    text: " It's bringing together that product thinking and that design thinking."
  },
  {
    startTime: 639.49,
    person: 'Rachel',
    text: " So you've got the product you're building is for a consumer, and therefore you're focussing on that consumer's needs, whether it is for a BI report that needs to be produced daily, monthly, whether it is the operational side where you need it a little bit more quickly, or if you are looking at the analytics and what you're setting up for your AI models as well."
  },
  {
    startTime: 662.69,
    person: 'Rachel',
    text: " So the product side of it, making sure that we're building for consumer needs and then the design thinking to make sure that it is actually usable by people is one of the key elements of that."
  },
  {
    startTime: 676.93,
    person: 'Karol',
    text: ' OK, so looking products, what then is a data product?'
  },
  { startTime: 684.03, person: 'Rachel', text: " It's a beautiful question." },
  {
    startTime: 689.79,
    person: 'Rachel',
    text: " It's where the probably the biggest interpretation or evolution of understanding has been."
  },
  {
    startTime: 697.53,
    person: 'Rachel',
    text: " So it'll be interesting to see if my answer would be the same as Andrew's on this."
  },
  {
    startTime: 702.25,
    person: 'Rachel',
    text: " So the data product is technology agnostic, right, to a certain extent, because what you're looking to do is fulfil the consumer requirement, have that product that a consumer can pick up and take off the shelf."
  },
  { startTime: 716.17, person: 'Rachel', text: ' So it can come in a number of formats.' },
  {
    startTime: 718.73,
    person: 'Rachel',
    text: ' It can be a Power BI report, but not all Power BI reports are a data product.'
  },
  { startTime: 722.57, person: 'Rachel', text: ' It depends on how widely used that is.' },
  {
    startTime: 724.93,
    person: 'Rachel',
    text: ' It could be a collection of information available through Snowflake or it could be a machine learning model, etc.'
  },
  { startTime: 732.91, person: 'Rachel', text: ' Again, technology agnostic.' },
  {
    startTime: 735.09,
    person: 'Rachel',
    text: " But the important part around it is that it's not just the data."
  },
  {
    startTime: 738.99,
    person: 'Rachel',
    text: ' It is everything that is required to encapsulate and provide that data in the way the consumer needs it.'
  },
  {
    startTime: 745.79,
    person: 'Rachel',
    text: " So you're talking about the data, the codes that is required to transform it into the format that it's required, any governance policy around it, and also the metadata."
  },
  {
    startTime: 757.49,
    person: 'Rachel',
    text: " So it's more than what you would normally be asking somebody to develop and produce relating to data."
  },
  {
    startTime: 766.19,
    person: 'Rachel',
    text: ' The reason for that is because of the characteristics of a data product.'
  },
  { startTime: 772.09, person: 'Rachel', text: ' There are a number of them.' },
  {
    startTime: 773.59,
    person: 'Rachel',
    text: ' One of the most important parts of that is the discoverability.'
  },
  {
    startTime: 777.31,
    person: 'Rachel',
    text: " If you produce something, it's being built to fulfil a value proposition and you want people to be able to find it and use it."
  },
  { startTime: 784.39, person: 'Rachel', text: " That's really what the metadata supports." },
  {
    startTime: 787.29,
    person: 'Rachel',
    text: " It's also obviously really important in order to support AI and the use of data products around that."
  },
  {
    startTime: 794.77,
    person: 'Rachel',
    text: " Andrew, would you agree or is there anything else that you'd add?"
  },
  {
    startTime: 797.69,
    person: 'Andrew',
    text: ' No, once again, I definitely agree with all of that.'
  },
  {
    startTime: 800.61,
    person: 'Andrew',
    text: ' I think exactly what the product is in your organisation is up to you to decide.'
  },
  {
    startTime: 805.27,
    person: 'Andrew',
    text: " If you decide there's going to be tables in the database or data warehouse, you decide it's going to be reporting."
  },
  { startTime: 811.39, person: 'Andrew', text: ' People argue about that all the time.' },
  {
    startTime: 813.83,
    person: 'Andrew',
    text: " I mean, it doesn't really matter as long as you've got a clear definition inside your organisation."
  },
  {
    startTime: 818.19,
    person: 'Andrew',
    text: " But I think the most important thing really is applying that product mindset to whatever it is you're producing."
  },
  { startTime: 823.63, person: 'Andrew', text: " And it's not new to data." },
  {
    startTime: 825.11,
    person: 'Andrew',
    text: ' People are applying product mindset to internal tooling, for example, for quite a long time now with platform engineering and the like.'
  },
  {
    startTime: 832.31,
    person: 'Andrew',
    text: " And obviously to the actual product features that you're building in your technology company."
  },
  {
    startTime: 837.61,
    person: 'Andrew',
    text: " So this idea of product mindset is not new, it's not unique to data, but it's been relatively more recently been applied to data largely because of data mesh and it being one of the core parts of data mesh."
  },
  {
    startTime: 853.89,
    person: 'Rachel',
    text: " Yeah, I'd also say that it's also the differing roles in data."
  },
  {
    startTime: 858.13,
    person: 'Rachel',
    text: " It's no longer just developers who are building them."
  },
  {
    startTime: 861.41,
    person: 'Rachel',
    text: " So where the product mindset isn't new in relation to data, it might be new to the new roles that are coming in and the people that are now looking to build them."
  },
  {
    startTime: 871.05,
    person: 'Rachel',
    text: " And that's an important part to think about in terms of when you're implementing this as an architect and thinking about the training and the support that the people in the business need to understand it and adopt it."
  },
  { startTime: 886.99, person: 'Karol', text: ' So what kind of roles are those then?' },
  {
    startTime: 889.99,
    person: 'Karol',
    text: " If we're putting aside software engineers who are building things, what are the roles that are related to the data mesh topic?"
  },
  {
    startTime: 900.19,
    person: 'Rachel',
    text: " Yeah, relating to data mesh and kind of broader in terms of those data analysts, those data scientists, but also you've got it in relation to systems as well."
  },
  {
    startTime: 911.15,
    person: 'Rachel',
    text: " If you think about what we would have called shadow IT in the past, and we're now calling citizen developers, right?"
  },
  { startTime: 916.99, person: 'Rachel', text: " You've got the system developers of data." },
  {
    startTime: 919.47,
    person: 'Rachel',
    text: " So again, it's a similar concept, but the extra challenge you have on the data side, particularly if you're working in a regulated industry, is around the governance of the data that goes with that."
  },
  {
    startTime: 932.53,
    person: 'Rachel',
    text: " So that's where one of the data mesh concepts of the automated federated governance is really important."
  },
  { startTime: 941.43, person: 'Karol', text: ' Okay.' },
  {
    startTime: 944.29,
    person: 'Karol',
    text: " So this brings to my mind a specific question, because I'm an integrator."
  },
  {
    startTime: 953.57,
    person: 'Karol',
    text: " For me, I'm moving things, not looking at things that much."
  },
  {
    startTime: 958.55,
    person: 'Karol',
    text: " Of course, we're looking at things for data quality purposes, vetting if the requests, responses, and events are properly formatted and whatnot, but this is not to the extent that data engineers work with data."
  },
  {
    startTime: 971.33,
    person: 'Karol',
    text: ' But what I learned over my career is, well, I learned about coupling.'
  },
  {
    startTime: 978.57,
    person: 'Karol',
    text: " That's, I think, the most basic term we're talking about in anything related to any contracts, anything."
  },
  {
    startTime: 988.31,
    person: 'Karol',
    text: ' But the one thing that is a very wanted type of coupling is the semantic coupling, which basically brings us to the understanding of said data.'
  },
  {
    startTime: 1001.23,
    person: 'Karol',
    text: ' And then the question is, how is data mesh then addressing that semantic aspect of the data product?'
  },
  { startTime: 1011.33, person: 'Karol', text: ' Is it even?' },
  { startTime: 1014.7, person: 'Rachel', text: ' Andrew, do you want to go first?' },
  { startTime: 1016.08, person: 'Rachel', text: ' I feel this kind of leads into you nicely.' },
  { startTime: 1019.68, person: 'Andrew', text: ' Yeah.' },
  {
    startTime: 1021.16,
    person: 'Andrew',
    text: " I think data mesh isn't really prescribing exactly how you do that, but I think you do need an approach to how you're going to have a semantic view of data, and that makes sense to different consumers."
  },
  {
    startTime: 1038.02,
    person: 'Andrew',
    text: " Because I think with data mesh, you're leaning more into a centralised architecture."
  },
  {
    startTime: 1042.22,
    person: 'Andrew',
    text: " So therefore, the data producers might be different in different parts of the organisation, different teams, different tooling, and you're supporting them through things like the platform you're providing, through automated governance, where you can mostly produce data, but also become experts in regulation and data management."
  },
  {
    startTime: 1060.48,
    person: 'Andrew',
    text: " So you're supporting them how to do that, but you still have a problem of what does data actually mean?"
  },
  { startTime: 1065.72, person: 'Andrew', text: ' How can I join it together later?' },
  {
    startTime: 1068.14,
    person: 'Andrew',
    text: ' And that there are various ways you could solve that.'
  },
  { startTime: 1072.56, person: 'Andrew', text: " I don't think there's a perfect way yet." },
  {
    startTime: 1074.62,
    person: 'Andrew',
    text: " But you could, what we try and do is we try to ensure that alongside the data, there's metadata that describes the data."
  },
  {
    startTime: 1086.36,
    person: 'Andrew',
    text: ' And so at least that data then becomes usable and consumable by anyone as long as they can understand that metadata.'
  },
  {
    startTime: 1093.06,
    person: 'Andrew',
    text: " And if you can standardise metadata across different audit products, then any data product consumed, you know it's got associated metadata around what data is it?"
  },
  { startTime: 1102.7, person: 'Andrew', text: ' How is it described?' },
  { startTime: 1103.42, person: 'Andrew', text: " Who's the owner?" },
  { startTime: 1105.22, person: 'Andrew', text: ' How can I use it?' },
  { startTime: 1107.16, person: 'Andrew', text: ' What are the limitations around it?' },
  { startTime: 1108.86, person: 'Andrew', text: ' What are the attention policy for it?' },
  { startTime: 1111.02, person: 'Andrew', text: ' All those kind of things.' },
  {
    startTime: 1112.12,
    person: 'Andrew',
    text: " We'll define a standard way so that as a user of data, I can consume it and I can understand how to use it."
  },
  {
    startTime: 1119.52,
    person: 'Andrew',
    text: ' But also at that platform level, you can start doing automated governance that Rachel was talking about and all of that.'
  },
  {
    startTime: 1124.74,
    person: 'Andrew',
    text: ' So this really feeds into metadata that describes the data.'
  },
  { startTime: 1128.68, person: 'Andrew', text: ' And we capture that in a contract.' },
  {
    startTime: 1133.54,
    person: 'Karol',
    text: ' So that basically feeds into the topic of data lineage and data traceability to understand where that data comes from, what context of creation of said data is and then work on that in terms of the semantic understanding of it.'
  },
  {
    startTime: 1151.12,
    person: 'Andrew',
    text: " To a degree, I mean, data lineage is basically you're creating that graph or an image graph of where data is moving."
  },
  {
    startTime: 1157.04,
    person: 'Andrew',
    text: ' So it could be like a dependency graph that you might have in software systems.'
  },
  { startTime: 1163.16, person: 'Andrew', text: ' And that might come from metadata.' },
  { startTime: 1165.54, person: 'Andrew', text: ' You can draw that.' },
  {
    startTime: 1167.42,
    person: 'Andrew',
    text: ' But you might also generate it from looking at like audit logs and other self-tracing capabilities you might have in your applications and your data applications.'
  },
  {
    startTime: 1177.34,
    person: 'Andrew',
    text: " So exactly how that's generated depends on both, and you probably use a mix of both."
  },
  { startTime: 1181.86, person: 'Andrew', text: " I'll try and get this image view." },
  {
    startTime: 1185.08,
    person: 'Andrew',
    text: " But I mean, that's a useful thing to have data lineage."
  },
  {
    startTime: 1190.28,
    person: 'Andrew',
    text: " But it's not necessarily part of semantic layer as such."
  },
  {
    startTime: 1194.76,
    person: 'Andrew',
    text: " It's more useful for understanding how data is being used."
  },
  {
    startTime: 1200.38,
    person: 'Andrew',
    text: " So again, if you're treating data as a product, you want to make a change to the data."
  },
  { startTime: 1203.6, person: 'Andrew', text: " But who's using this?" },
  {
    startTime: 1204.54,
    person: 'Andrew',
    text: ' How can I contact them in advance so that I can have a migration plan for them so I can move over to not just break it and have them fix it in the next day and spend the rest of the week fixing it and have all the reports broken or the actual applications broken.'
  },
  { startTime: 1218.26, person: 'Andrew', text: " So it's useful for that." },
  {
    startTime: 1220.04,
    person: 'Andrew',
    text: " But when you talk about semantics, I think that's where you start thinking about the discoverability area of data, so things like data catalogues, how to discover data."
  },
  {
    startTime: 1230.28,
    person: 'Andrew',
    text: " And then once you've found the data you want to use, how to actually use it, how to plug it into my reporting tool, how to plug it into my network, wherever it might be."
  },
  { startTime: 1239.62, person: 'Andrew', text: " That's more on the semantic side." },
  {
    startTime: 1242.5,
    person: 'Rachel',
    text: ' I would just kind of jump in and say I think the domain-based approach really kind of helps with'
  },
  {
    startTime: 1247.92,
    person: 'Rachel',
    text: ' the semantic understanding of the data because it allows you to have that very high-level data'
  },
  {
    startTime: 1253.28,
    person: 'Rachel',
    text: ' model that you might not have had previously, bringing that operational and that reporting'
  },
  {
    startTime: 1258.18,
    person: 'Rachel',
    text: ' data together within a larger encapsulation of the domain and having the ownership of that'
  },
  {
    startTime: 1267.1,
    person: 'Rachel',
    text: ' and the metadata around it really helps people to get the visibility of what exists and what it'
  },
  { startTime: 1273.76, person: 'Rachel', text: ' means.' },
  {
    startTime: 1274.74,
    person: 'Rachel',
    text: " I would also look at that contract between your operational system and the reporting data product as we kind of get into that integration space, because every data product probably has, whether directly if it's a source-aligned or indirectly if it's a consumer-aligned data product, will have that operational system underpinning it."
  },
  {
    startTime: 1295.16,
    person: 'Rachel',
    text: " That's where the data is going to be coming from."
  },
  {
    startTime: 1297.46,
    person: 'Rachel',
    text: ' But the language you might be using around that data might be different because your audience is different, your usage of it is different, so your contract and your metadata allows you to be able to trace that you are talking about the same thing and where it is sourced from as well, so it allows us to bring that together.'
  },
  {
    startTime: 1318.18,
    person: 'Karol',
    text: ' And then on top of that, the domain partitioning helps us understand the proper context of said data from which it originates, should it be a customer domain, order domain, product domain, whatever other domains we may have in the company, and that gives us even more metadata to work with for that semantic understanding.'
  },
  { startTime: 1337.7, person: 'Rachel', text: ' Absolutely, yeah.' },
  {
    startTime: 1339.36,
    person: 'Karol',
    text: ' Before we move further, we already have questions from the audience, so starting with Bas Bartelink.'
  },
  { startTime: 1344.94, person: 'Karol', text: ' Hello, Bas.' },
  {
    startTime: 1346.64,
    person: 'Karol',
    text: ' Is democratising data to everyone as well in, for example, citizen-led development?'
  },
  {
    startTime: 1355.56,
    person: 'Karol',
    text: " And that's an interesting question there because personally I'm not a fan of citizen-led development because I've seen how it wrecks IT environments, but for data that might be a little bit different."
  },
  {
    startTime: 1370,
    person: 'Rachel',
    text: ' Well, again, it comes down to the governance side, right?'
  },
  {
    startTime: 1372.6,
    person: 'Rachel',
    text: ' So in some ways it might be slightly more scary, but it depends on your organisation, the industry, as to how far you go with that.'
  },
  {
    startTime: 1385,
    person: 'Rachel',
    text: ' Certainly for us, the way we look at it is across the ownership structure.'
  },
  {
    startTime: 1389.9,
    person: 'Rachel',
    text: ' Every data product should be owned by the business.'
  },
  {
    startTime: 1393.62,
    person: 'Rachel',
    text: ' That does not necessarily mean that they are building it.'
  },
  {
    startTime: 1396.02,
    person: 'Rachel',
    text: ' It will depend on what it is, what the technology is.'
  },
  {
    startTime: 1399.86,
    person: 'Rachel',
    text: " The further you get towards the consumer side and you're able to use things like Power BI, as you said, it is possible for a Power BI report to be a data product, then they should be absolutely capable of building that themselves."
  },
  {
    startTime: 1413,
    person: 'Rachel',
    text: " If it's something that's a little bit more technical, that might come depending on the maturity of the data platform."
  },
  {
    startTime: 1420.46,
    person: 'Rachel',
    text: " I would say it's the overall target and vision, but everyone's on a different path to get there and a different stage on that path."
  },
  { startTime: 1430.8, person: 'Andrew', text: ' Yeah, similar, I agree with that.' },
  {
    startTime: 1433.14,
    person: 'Andrew',
    text: ' The way we did it is slightly differently, I think, or a slightly different approach.'
  },
  {
    startTime: 1437.5,
    person: 'Andrew',
    text: ' We approached it in a slightly different way because we come from a different angle, really.'
  },
  {
    startTime: 1441.86,
    person: 'Andrew',
    text: " So we wanted to really look at the barriers between the production and consumption of data, so people could produce data of the right quality, that's right, governed and managed, and it could be assumed by people who could rely on it and build a point of confidence."
  },
  {
    startTime: 1456.94,
    person: 'Andrew',
    text: " So we did a lot about the platform layer to enable people to produce data and become experts in data management by just producing it in a standard way, and then everyone is available to that company, and similarly, if you're consuming data, you can find data and consume it quite easily."
  },
  { startTime: 1472.38, person: 'Andrew', text: " So in a way, that's democratisation." },
  {
    startTime: 1474.6,
    person: 'Andrew',
    text: " I think it's also quite similar to being citizen-led in a way, but it's more like led by, but anyone in business can create their own data and manage their own data."
  },
  {
    startTime: 1483.14,
    person: 'Andrew',
    text: " That's not an honest task anymore, because we've built capabilities to allow that."
  },
  {
    startTime: 1488.34,
    person: 'Andrew',
    text: ' So anyone could do that without having to go through a central data team to be the ones responsible for creating quality data, creating quality data products, managing quality data products, and becoming the bottleneck for data in business.'
  },
  {
    startTime: 1500.14,
    person: 'Andrew',
    text: ' So yeah, similar idea of democratising data, but more focused on engineers building and consuming data.'
  },
  {
    startTime: 1512.4,
    person: 'Karol',
    text: ' I think this is another question that is tied into this particular part of the conversation, and a question to you, Rachel, specifically from Stefan.'
  },
  {
    startTime: 1524.3,
    person: 'Karol',
    text: ' Are you the adept at having one single source of truth in terms of aggregated data residing, for example, in a data lake?'
  },
  { startTime: 1533.96, person: 'Rachel', text: ' Yep.' },
  {
    startTime: 1534.66,
    person: 'Rachel',
    text: " So our overall strategy is absolutely to have a single source of truth, and that's again one of the reasons that we jumped on data mesh early on, because having that domain-based approach makes it really clear where something should be living and who owns it."
  },
  {
    startTime: 1553.24,
    person: 'Rachel',
    text: " The interesting thing becomes when you are aggregating the data together, because you have got that cross-domain kind of concept, and we've talked a lot at the moment about those source-aligned data products which are sourced directly from an operational system."
  },
  {
    startTime: 1572.22,
    person: 'Rachel',
    text: " So looking at the domains that don't necessarily have an operational system in, but it's the aggregation of data from other data products."
  },
  {
    startTime: 1580.14,
    person: 'Rachel',
    text: " So it's still the central source of data, it will take the master data and it will turn that into something new and consumable by whoever it is that needs it."
  },
  { startTime: 1593.39, person: 'Rachel', text: ' Does that make sense?' },
  { startTime: 1596.87, person: 'Karol', text: ' Again, not a data architect to me.' },
  { startTime: 1601.11, person: 'Rachel', text: ' The stun silence is always good.' },
  {
    startTime: 1608.47,
    person: 'Karol',
    text: " It makes some sense to me because, well, I'm coming from an operational world, right?"
  },
  {
    startTime: 1615.87,
    person: 'Karol',
    text: " I don't deal much with aggregation of data unless these are logs, really."
  },
  {
    startTime: 1623.55,
    person: 'Karol',
    text: ' So for me, the source of data is basically the system owning that data.'
  },
  { startTime: 1631.61, person: 'Rachel', text: " It's a similar kind of thing though, right?" },
  {
    startTime: 1633.95,
    person: 'Rachel',
    text: " Because if you're looking at it from a system point of view, an operational system, they will often be taking data from multiple sources in, even if those other sources are primarily reference data."
  },
  { startTime: 1646.53, person: 'Rachel', text: " It's a similar kind of consideration." },
  {
    startTime: 1649.69,
    person: 'Rachel',
    text: " You're still talking about who owns that reference data, how am I getting it to where I want it to be?"
  },
  {
    startTime: 1654.59,
    person: 'Rachel',
    text: " You still want that single source of truth that you can go to, that you can trust the data and make sure that anything you're doing operationally on top of it that's going to support those business decisions are absolutely high quality and accurate."
  },
  {
    startTime: 1669.09,
    person: 'Rachel',
    text: ' So again, fairly similar considerations across the board.'
  },
  { startTime: 1672.19, person: 'Karol', text: ' All right.' },
  {
    startTime: 1673.57,
    person: 'Karol',
    text: ' So just granulated into business processes or domains then?'
  },
  { startTime: 1678.69, person: 'Rachel', text: ' Yeah, absolutely.' },
  { startTime: 1680.25, person: 'Karol', text: ' Yeah.' },
  { startTime: 1680.45, person: 'Karol', text: ' Okay.' },
  {
    startTime: 1681.37,
    person: 'Karol',
    text: " Then that's understandable to me because I've seen already situations where there was multi-mastery of data spread across two systems or even worse, two companies cooperating through some sort of integration with one another."
  },
  {
    startTime: 1697.43,
    person: 'Karol',
    text: " The number of problems you get with inconsistencies and then trying to figure out what happened and why it happened, it's like very, so as long as we have that single source of truth, also in operational world, it's lovely."
  },
  {
    startTime: 1713.81,
    person: 'Karol',
    text: " Otherwise it's going to be a nightmare to handle anyways."
  },
  {
    startTime: 1718.91,
    person: 'Karol',
    text: " And not only from the perspective of the inconsistencies, but from contractual perspective as well, because it's not easy to have multi-mastery."
  },
  {
    startTime: 1729.91,
    person: 'Karol',
    text: " It's not a solvable situation if we want to persist the multi-mastery because the solution to that is have a single master of data, obviously."
  },
  { startTime: 1741.45, person: 'Karol', text: ' So yeah.' },
  { startTime: 1743.07, person: 'Rachel', text: ' Yeah.' },
  {
    startTime: 1743.33,
    person: 'Rachel',
    text: " It's a lot of the same considerations, I would say."
  },
  { startTime: 1747.21, person: 'Karol', text: ' Only different granularity.' },
  { startTime: 1749.55, person: 'Rachel', text: ' Exactly.' },
  { startTime: 1750.65, person: 'Andrew', text: ' Different audiences maybe, but yeah.' },
  { startTime: 1753.99, person: 'Andrew', text: ' Okay.' },
  { startTime: 1755.81, person: 'Karol', text: ' Interesting.' },
  { startTime: 1757.77, person: 'Karol', text: ' Wow.' },
  {
    startTime: 1758.49,
    person: 'Karol',
    text: " Apparently the topic is very popular because I haven't had so many questions at the beginning of the stream so far."
  },
  { startTime: 1764.09, person: 'Karol', text: " So it's like, whoa, we're moving." },
  { startTime: 1768.71, person: 'Karol', text: ' I guess, all right.' },
  {
    startTime: 1770.25,
    person: 'Karol',
    text: " If we're still defining data match, then this is a very valid question here coming from Sneha, I suppose."
  },
  { startTime: 1778.57, person: 'Karol', text: " Sorry, I'm butchering Indian names." },
  { startTime: 1783.13, person: 'Karol', text: ' Sorry for that.' },
  {
    startTime: 1784.29,
    person: 'Karol',
    text: ' So what kind of metrics dashboards do you use to measure success of a data mesh implementation?'
  },
  {
    startTime: 1791.81,
    person: 'Karol',
    text: " I think that's a very valid question when we're defining what data mesh is, because we're having data mesh."
  },
  { startTime: 1798.53, person: 'Karol', text: " What's the success story?" },
  {
    startTime: 1799.93,
    person: 'Karol',
    text: " Where we say that our implementation was a success and we're moving to further augment it and better it."
  },
  { startTime: 1810.6, person: 'Rachel', text: ' Yeah.' },
  { startTime: 1811.48, person: 'Rachel', text: " So I don't know." },
  {
    startTime: 1813.04,
    person: 'Rachel',
    text: " A lot of people, if you've worked with data before, you will be familiar with the good old data maturity assessment."
  },
  {
    startTime: 1819.98,
    person: 'Rachel',
    text: " So from our point of view, we've kind of taken a similar approach, but used it much more from a metric space."
  },
  {
    startTime: 1827.96,
    person: 'Rachel',
    text: " Because what we're looking to do is a lot of this is about providing greater access to people."
  },
  { startTime: 1834.46, person: 'Rachel', text: " And again, it's consumer driven." },
  {
    startTime: 1836.52,
    person: 'Rachel',
    text: ' So making sure that we have the metrics around the data products per domain.'
  },
  { startTime: 1840.64, person: 'Rachel', text: ' Do you have data products available?' },
  { startTime: 1842.64, person: 'Rachel', text: ' How many people are accessing them?' },
  { startTime: 1844.32, person: 'Rachel', text: ' How many times are people accessing them?' },
  {
    startTime: 1846.86,
    person: 'Rachel',
    text: ' But the other side of your data product is you should be looking to proactively get feedback and evolve them to meet the ever-changing needs of the business.'
  },
  {
    startTime: 1855.24,
    person: 'Rachel',
    text: ' So therefore, you want to look at how and if those data products have evolved as well.'
  },
  {
    startTime: 1862.06,
    person: 'Rachel',
    text: " So you're looking at getting that full story across the existence, usage, life cycle of the data product."
  },
  {
    startTime: 1873.82,
    person: 'Rachel',
    text: ' And then obviously the definition of success will vary from company to company.'
  },
  {
    startTime: 1880.08,
    person: 'Karol',
    text: ' Would putting some measures over data contracts would be also an applicable measure for success of the data mesh in terms of the volatility of the data contracts, or the scope of the evolution of said contracts, or the utilisation of the APIs, interfaces, whatever the means are to consume those data products?'
  },
  {
    startTime: 1904.98,
    person: 'Andrew',
    text: " Yeah, I think we're all good measures in to help you understand how useful we're talking about building, how useful your role has been, not how far your migration or whatever your maturity is."
  },
  { startTime: 1917.4, person: 'Andrew', text: " They're all quite useful metrics for that." },
  {
    startTime: 1919.78,
    person: 'Andrew',
    text: " I was having more metrics for you to track your success with whatever you're trying to achieve there."
  },
  {
    startTime: 1926.08,
    person: 'Andrew',
    text: ' Are you trying to put more things in that contracts?'
  },
  {
    startTime: 1928.5,
    person: 'Andrew',
    text: ' Are you trying to have more use to that product?'
  },
  {
    startTime: 1930.86,
    person: 'Andrew',
    text: " It can be useful for you to understand, but none of those are reasons you're doing a data mesh, really."
  },
  {
    startTime: 1937.36,
    person: 'Andrew',
    text: " You're doing data mesh to solve some sort of business problem."
  },
  {
    startTime: 1939.68,
    person: 'Andrew',
    text: " When it comes to the KPIs you're allowing there, that would be something that's more useful to your business."
  },
  {
    startTime: 1945.32,
    person: 'Andrew',
    text: " So for example, the reason why we started with data contracts and then eventually started moving towards data mesh was to solve a particular business problem where we wanted to use our data, our analytics data, to build product features that we then sell to our customers, and our data wasn't reliable enough and good enough quality to do that."
  },
  {
    startTime: 1965.82,
    person: 'Andrew',
    text: " Think of reliability, like our data pipelines are failing very often, and again, you'd argue that's okay for reporting."
  },
  {
    startTime: 1971.4,
    person: 'Andrew',
    text: " I don't think that's right, because reporting is just valuable, or we'd have been doing it, but it certainly wasn't okay for products we want to sell to our customers for them to be breaking weekly."
  },
  {
    startTime: 1981.52,
    person: 'Andrew',
    text: ' So we focus on reliability and data contracts was one of our solutions to that.'
  },
  {
    startTime: 1987.64,
    person: 'Andrew',
    text: ' Quality as well, in terms of how long it takes to actually build these products you want to sell.'
  },
  {
    startTime: 1991.32,
    person: 'Andrew',
    text: ' A lot of that was slow due to quality of data, how can I find it, how can I use it.'
  },
  {
    startTime: 1995.78,
    person: 'Andrew',
    text: " So that's another good measure of our line to business value of trying to build these products, which are one of the key strategic aims of a company."
  },
  {
    startTime: 2003.98,
    person: 'Andrew',
    text: " So yeah, best when it comes to actually choosing, but with metrics we spoke about, good for you to measure your own success in your messaging of data products, or how you're building things, or how you're managing data, is that improving, that will reduce some risk."
  },
  {
    startTime: 2019.82,
    person: 'Andrew',
    text: " But the reason you're doing this is probably to sell, or ideally to solve some sort of business need, and if you tie your basic API on being tracking through all this."
  },
  {
    startTime: 2033.8,
    person: 'Karol',
    text: ' So in that sense, data contracts may not exactly be the best API, well things around data contracts may not exactly be the best API in measuring the success of a data mesh.'
  },
  {
    startTime: 2044.42,
    person: 'Andrew',
    text: " Yeah, I'll give you an example of a time I used as a measurement, but it wasn't a good idea, and we learned the hard way."
  },
  {
    startTime: 2051.139,
    person: 'Andrew',
    text: ' So we started with data contracts to solve this reliability problem,'
  },
  {
    startTime: 2056.28,
    person: 'Andrew',
    text: ' it was quite successful, more people started adopting it, and then we started as a bottom'
  },
  {
    startTime: 2061.719,
    person: 'Andrew',
    text: ' up approach, so we were solving problems locally in teams, building platform capabilities,'
  },
  {
    startTime: 2065.88,
    person: 'Andrew',
    text: ' when people were adopting more different teams, and eventually people higher up started taking'
  },
  {
    startTime: 2069.96,
    person: 'Andrew',
    text: " notice of CTO, CPO, and this is a good idea, why don't we just have everything on data contracts?"
  },
  {
    startTime: 2076.38,
    person: 'Andrew',
    text: " We thought well, yeah I guess we could, that sounds exciting, this is what we've been talking about for a while, like this is our ultimate end goal, we need to have that, if you're going to back us for that, let's do that."
  },
  {
    startTime: 2085.84,
    person: 'Andrew',
    text: ' So then we have this KPL of like how much of our data was on'
  },
  {
    startTime: 2089.139,
    person: 'Andrew',
    text: ' data contracts, that percentage, and we started trying to get every team to move data onto their'
  },
  {
    startTime: 2093.58,
    person: 'Andrew',
    text: " contracts, but that wasn't a great metric it turns out, because the issue we started trying"
  },
  {
    startTime: 2102.3,
    person: 'Andrew',
    text: " to track this metric per team, and I said by the end of this quarter I'd get to 10%, 20% and whatever"
  },
  {
    startTime: 2106.98,
    person: 'Andrew',
    text: " it might be, and the first quarter I'd just move all the easy things out of data contracts, data"
  },
  {
    startTime: 2111.86,
    person: 'Andrew',
    text: " that wasn't really being used very often, not particularly valuable data, you know, well you've"
  },
  {
    startTime: 2116.58,
    person: 'Andrew',
    text: " moved your data contracts, you've hit your metric, but the value of your business has been very low,"
  },
  {
    startTime: 2121.34,
    person: 'Andrew',
    text: " but you've chosen it because it's easier for you, and when it gets to the harder ones, where business"
  },
  {
    startTime: 2125.92,
    person: 'Andrew',
    text: ' value is higher, also the effort is higher to move on to that, but by that time people started to think'
  },
  {
    startTime: 2130.86,
    person: 'Andrew',
    text: " about well I've only spent like a quarter doing that, I don't want to spend another quarter,"
  },
  {
    startTime: 2133.72,
    person: 'Andrew',
    text: " another quarter, there's arguments about prioritisation and effort, all kinds of arguments you always get when"
  },
  {
    startTime: 2138.74,
    person: 'Andrew',
    text: " trying to get work done across teams, but again we still weren't really hitting the most important"
  },
  {
    startTime: 2143.9,
    person: 'Andrew',
    text: " data, so the actual reason why we're doing this was only to hit the metric, it wasn't really to solve,"
  },
  {
    startTime: 2151.9,
    person: 'Andrew',
    text: " you know, we need this data to create this product, we're going to sell to our merchants, it was not really"
  },
  {
    startTime: 2155.36,
    person: 'Andrew',
    text: ' that part of that data, it was just the next set of next easy ones, so we started getting loads and loads of pushback'
  },
  {
    startTime: 2162.26,
    person: 'Andrew',
    text: " because it wasn't a metric that aligned with anything business wanted to achieve, it was just an"
  },
  {
    startTime: 2166.78,
    person: 'Andrew',
    text: " artificial metric for migration that we didn't need to do overnight, we didn't need to do over a few"
  },
  {
    startTime: 2173.58,
    person: 'Andrew',
    text: ' quarters, we could have done it over years and it would have been fine, as long as we started to get the most'
  },
  { startTime: 2178.12, person: 'Andrew', text: ' important things on state contracts.' },
  {
    startTime: 2180.12,
    person: 'Andrew',
    text: ' We could argue, well the argument was if we got on state contracts'
  },
  {
    startTime: 2183.78,
    person: 'Andrew',
    text: ' we could decommission those old stuff and that would be useful to do, but the effort we were spending'
  },
  {
    startTime: 2188.54,
    person: 'Andrew',
    text: " maintaining that old stuff wasn't that high either, so it wasn't a great argument to get the whole business,"
  },
  {
    startTime: 2192.76,
    person: 'Andrew',
    text: " all the software engineers working towards moving state contracts, so that's an example of when we chose"
  },
  {
    startTime: 2197.6,
    person: 'Andrew',
    text: ' a bad metric, what we ended up doing was bad idea, and going back to our more use case'
  },
  {
    startTime: 2204.98,
    person: 'Andrew',
    text: " driven, like we need this data on state contracts because it's driving key business processes"
  },
  {
    startTime: 2210.44,
    person: 'Andrew',
    text: ' around like fraud detection for example, and we are losing, we are exposed, if those processes'
  },
  {
    startTime: 2216.4,
    person: 'Andrew',
    text: " fail, exposure rate goes up and we want to reduce that, so when it's aligned with key business"
  },
  {
    startTime: 2221.56,
    person: 'Andrew',
    text: ' processes like that or key business metric like that, easier to get different teams aligned to maybe'
  },
  {
    startTime: 2227.1,
    person: 'Andrew',
    text: " move on state contracts, you can improve quality of data, the engineer needs to do that, but when it's just"
  },
  {
    startTime: 2232.56,
    person: 'Andrew',
    text: " to move artificial metric, that doesn't stand up to much scrutiny, and you know that's a bad metric to"
  },
  { startTime: 2238.62, person: 'Andrew', text: ' use for anything like this.' },
  { startTime: 2244.46, person: 'Andrew', text: ' Yeah, we get things wrong sometimes too.' },
  {
    startTime: 2247.66,
    person: 'Karol',
    text: " Yeah, there are ideas and there are ideas right, and some of them are just destined to fail, but we don't know it yet."
  },
  {
    startTime: 2255.54,
    person: 'Andrew',
    text: " Yeah, we didn't carry it away really, like rules on that."
  },
  {
    startTime: 2260.94,
    person: 'Andrew',
    text: " Yeah, exactly, it's easily done, but a lesson learned and hopefully useful lesson for everyone listening to try to avoid."
  },
  { startTime: 2269.25, person: 'Karol', text: ' Good point.' },
  {
    startTime: 2270.67,
    person: 'Karol',
    text: ' Now about lessons learned, as I hinted already, the idea to talk about the data match on this stream came from the workshop I ran at BBB Europe this year, and I received feedback to the workshop that given the sister conference being data mesh live, it was a missed opportunity to talk about batch processing ETLs, ELT during my workshop.'
  },
  {
    startTime: 2303.53,
    person: 'Karol',
    text: ' Now my workshop was about ecosystem architectural styles and utilising'
  },
  {
    startTime: 2307.75,
    person: 'Karol',
    text: ' domain driven design to design integrations, and one of the architectural styles, which is'
  },
  {
    startTime: 2316.33,
    person: 'Karol',
    text: ' a broker architecture, is basically the most common in ETL, ELT batch processing,'
  },
  {
    startTime: 2324.43,
    person: 'Karol',
    text: " because it's a single abstraction layer that just moves data from point to point, usually triggered"
  },
  {
    startTime: 2329.67,
    person: 'Karol',
    text: ' by cron scheduler or triggered manually as a one-time go, right?'
  },
  {
    startTime: 2337.01,
    person: 'Karol',
    text: ' And I looked at that comment several times trying to put myself in the shoes of the person who wrote that comment, and I was like, where is the disconnect?'
  },
  { startTime: 2351.28, person: 'Karol', text: ' Where is the problem?' },
  { startTime: 2355.42, person: 'Karol', text: ' What happened here?' },
  {
    startTime: 2357.34,
    person: 'Karol',
    text: ' Because from my perspective, moving data from place to place is a large part of the job in terms of doing data architecture, and with that having that data lineage, with that having that data traceability, and in general productizing the data and having that data matched.'
  },
  {
    startTime: 2382.75,
    person: 'Karol',
    text: " And this is why the title of this tree was versus, because from that perspective, it seemed like, from this perspective of that feedback, it seemed like we're like completely different worlds."
  },
  {
    startTime: 2398.35,
    person: 'Karol',
    text: ' Now I would postulate, for the sake of this discussion, that there is an inherent link between data architecture and integration architecture, and basically one cannot go without the other.'
  },
  { startTime: 2412.63, person: 'Karol', text: ' Now Rachel is already popping her head.' },
  {
    startTime: 2414.69,
    person: 'Rachel',
    text: " Oh yes, well if you're talking about moving data, right, that's the whole point of your integration architecture, you need data architecture in place."
  },
  {
    startTime: 2426.29,
    person: 'Rachel',
    text: " And what data mesh really brings is that decentralisation, you're not bringing everything into one warehouse anymore, you're looking at bringing from your operational system into a data product."
  },
  {
    startTime: 2439.91,
    person: 'Rachel',
    text: ' You can think relatively naively about that data product being a data system in its own right.'
  },
  {
    startTime: 2448.43,
    person: 'Rachel',
    text: " So you've got the same kind of integration challenges, but what you now have is both the integration between the operational system and the data product, from the data products to another data product."
  },
  {
    startTime: 2463.25,
    person: 'Rachel',
    text: " There's a number of different sources rather than just that simple, do you know what, we're going from an operational system to a data product point of view."
  },
  {
    startTime: 2471.59,
    person: 'Rachel',
    text: " And depending on the technologies you use, again, if you're working in quite a federated organisation, they might have different technologies that they're using from one product to the other, because that was one of the first points, it's technology agnostic."
  },
  {
    startTime: 2485.83,
    person: 'Rachel',
    text: ' You still have the same integration challenges as you would do in your profession, in your day-to-day life, Karol.'
  },
  { startTime: 2495.57, person: 'Rachel', text: " I'm sorry." },
  {
    startTime: 2498.31,
    person: 'Karol',
    text: ' I would argue that if they have different technologies underneath those different products, I would actually have even more problems and work challenges to handle there than with a singular technology stack or approach.'
  },
  {
    startTime: 2515.35,
    person: 'Karol',
    text: ' I would jokingly argue that I can do application integration without a data architect.'
  },
  { startTime: 2522.61, person: 'Rachel', text: " You can't, you just can't do it well." },
  { startTime: 2524.59, person: 'Karol', text: ' Exactly.' },
  { startTime: 2525.99, person: 'Karol', text: " That's my point exactly." },
  {
    startTime: 2527.41,
    person: 'Karol',
    text: " I wouldn't be doing it well, because that would be just pure and utter chaos of basically operational nightmare, where we're moving things, they're later inconsistent, incoherent, they're not usable, the quality is poor, and we're basically stuck in a limbo of technological depth."
  },
  {
    startTime: 2548.23,
    person: 'Rachel',
    text: " And I'm sure that a lot of people are living in that world, because I know that we have an element of it in our own organisation, just to make anyone feel better if they're feeling criticised at this moment."
  },
  {
    startTime: 2561.13,
    person: 'Karol',
    text: " Oh yes, definitely, there's a lot of people in that"
  },
  {
    startTime: 2563.59,
    person: 'Karol',
    text: " world, they just haven't gotten to that realisation yet that they do need an integration architect,"
  },
  {
    startTime: 2569.01,
    person: 'Karol',
    text: ' and they do need a data architect to cooperate with each other and clear up that mess,'
  },
  {
    startTime: 2574.27,
    person: 'Karol',
    text: ' incohesion, to understand where is data, what is that data, where is it needed,'
  },
  {
    startTime: 2581.75,
    person: 'Karol',
    text: ' when is it needed, and then with the integration architect, how do I get it from A to B?'
  },
  {
    startTime: 2587.39,
    person: 'Rachel',
    text: ' Absolutely, can I also just like point out one other challenge that we like to bring in there, the data world, in terms of using the word integration with data?'
  },
  { startTime: 2598.49, person: 'Karol', text: ' I think I know the challenge,' },
  {
    startTime: 2600.65,
    person: 'Rachel',
    text: ' so we have different ways that we refer to it, if you go strictly data integration is about'
  },
  {
    startTime: 2607.79,
    person: 'Rachel',
    text: ' the joining of multiple sources together to provide a unified view, not necessarily the'
  },
  {
    startTime: 2612.97,
    person: 'Rachel',
    text: ' actual movement of the data, which is an interesting challenge, so when you start'
  },
  {
    startTime: 2618.51,
    person: 'Rachel',
    text: ' trying to have a conversation with somebody, particularly maybe a professional consultant,'
  },
  {
    startTime: 2624.31,
    person: 'Rachel',
    text: " you can get really caught up in that language barrier, even when you're two people that are"
  },
  {
    startTime: 2630.27,
    person: 'Rachel',
    text: " talking about data, I don't know if you've ever experienced that Andrew?"
  },
  { startTime: 2634.47, person: 'Andrew', text: " Yeah, no, I think that's" },
  {
    startTime: 2635.95,
    person: 'Andrew',
    text: " certainly right, like yeah, different again, different language, different people, and you've got to be"
  },
  {
    startTime: 2639.89,
    person: 'Andrew',
    text: " careful what language you're using when you're talking to different audiences and different"
  },
  {
    startTime: 2642.67,
    person: 'Andrew',
    text: " people, what they expect, but like you were saying, it's very much an integration problem"
  },
  {
    startTime: 2650.31,
    person: 'Andrew',
    text: " we're talking about here with data mesh and with application integration, and like when I was"
  },
  {
    startTime: 2655.01,
    person: 'Andrew',
    text: ' talking earlier about the reason why we started adopting data contracts and started moving towards'
  },
  {
    startTime: 2658.55,
    person: 'Andrew',
    text: " data mesh, it's because of a lot of the data, that was really about the integration between source"
  },
  {
    startTime: 2663.13,
    person: 'Andrew',
    text: ' systems and our analytics stack, it really was an integration problem that was sort of there.'
  },
  {
    startTime: 2670.33,
    person: 'Rachel',
    text: " Yeah, but it's quite fun when you start going, you need to have an integration architect and data people will be like, but I've only got one source of data, what are you talking about?"
  },
  {
    startTime: 2683.01,
    person: 'Rachel',
    text: " So it's where it also ties into the domain driven approach and making sure you have that common language across the operational and data side, the good old ubiquitous language."
  },
  {
    startTime: 2692.65,
    person: 'Karol',
    text: " You know what, this is actually a fun thing, this is one of the first articles I wrote at Bridging the Gap, here's the QR for the article if you will, it's called data integration versus application integration, which basically was a bit of a statement piece on language."
  },
  {
    startTime: 2719.27,
    person: 'Karol',
    text: " I've been in organisations where the issue was that people dumped down the terms to the word integration, and nobody ever knew which type of integration you're talking about, are you talking about integrating data to create something cohesive like a golden record or something that has substantial semantic meaning, or are you talking about moving data from point A to point B and then point C?"
  },
  { startTime: 2748.25, person: 'Karol', text: ' Nobody knew.' },
  {
    startTime: 2752.41,
    person: 'Karol',
    text: " We're at fault, quoting Andrew Harmel-Law with his talk at BBD Europe this year, with variability being the second hardest problem in software architecture, and then by the end of the talk, somebody actually asking him what's the first hardest problem, and he's pointing to the whole audience, you all are!"
  },
  {
    startTime: 2774.39,
    person: 'Karol',
    text: ' Yes, we all are the problem in terms of this misinterpretation of names.'
  },
  {
    startTime: 2783.95,
    person: 'Karol',
    text: " And that's not only because we talk different languages, it's not only because we come from different fields, it's also supported by the technology we use, because if you use integration platforms, integration platforms do have data integration capabilities."
  },
  {
    startTime: 2803.69,
    person: 'Karol',
    text: ' Should we implement data integration processes within an integration platform?'
  },
  { startTime: 2809.57, person: 'Karol', text: " Probably not a great idea, but they haven't." },
  {
    startTime: 2813.89,
    person: 'Karol',
    text: ' Now, if you go to different data technologies, MDM or so, do they have application integration capabilities?'
  },
  {
    startTime: 2823.93,
    person: 'Karol',
    text: " Well, yes, yes, they have, because you need to get that data somehow into them, so the creators of those technologies figured, okay, we're going to add slap-on to that some application integration capabilities so we can actually get that data ingested."
  },
  {
    startTime: 2838.77,
    person: 'Karol',
    text: " Yeah, okay, but these are just those small capabilities, they're not tools for the job."
  },
  {
    startTime: 2844.59,
    person: 'Karol',
    text: ' So, to give you an example, I actually seen a team that was supposed to do application integration composed of former DBAs and database developers that built an integration platform using an MDM solution over a NoSQL database.'
  },
  {
    startTime: 2865.93,
    person: 'Karol',
    text: ' In application integration, we should not persist anything that persists temporarily while they build an integration platform that was permanently persisting everything.'
  },
  {
    startTime: 2879.85,
    person: 'Karol',
    text: ' Talk about the misconception about understanding terms, right?'
  },
  {
    startTime: 2883.99,
    person: 'Karol',
    text: ' So, instead of doing application integration, they actually did data integration and they called it that, oh, this is our application integration platform.'
  },
  {
    startTime: 2891.64,
    person: 'Karol',
    text: " I was like, where did we go wrong here and when that's a crucial problem?"
  },
  { startTime: 2898.85, person: 'Rachel', text: ' This happens everywhere, right?' },
  {
    startTime: 2900.59,
    person: 'Rachel',
    text: ' And this is one of the things around data mesh, because the tooling always jumps on the language of whoever comes up with it first and puts their own interpretation on it.'
  },
  {
    startTime: 2910.03,
    person: 'Rachel',
    text: " So, it's shaped a number of interesting talks and conversations around different organisations about, you're doing what?"
  },
  {
    startTime: 2919.19,
    person: 'Rachel',
    text: " Oh, yeah, well, that's the way the tooling drove us to do it."
  },
  {
    startTime: 2922.37,
    person: 'Rachel',
    text: " And it said that it supported data mesh, whereas the messaging that's kind of come from Jamaat through her ThoughtWorks days has always been the tooling isn't actually there to support it and that's why she's gone in and built it."
  },
  { startTime: 2934.43, person: 'Rachel', text: ' This is not an advert for her tool.' },
  {
    startTime: 2936.69,
    person: 'Rachel',
    text: " But it's more kind of around that adoption of it."
  },
  {
    startTime: 2942.61,
    person: 'Rachel',
    text: " And there was a wonderful, wonderful piece, I'm trying to remember who wrote it the other day, that was very much about the architect is the person that's read the whole article."
  },
  {
    startTime: 2953.53,
    person: 'Rachel',
    text: " So, it's not the person who's jumped on that language, but it actually understands what they're talking about and can cut through the nonsense."
  },
  {
    startTime: 2959.95,
    person: 'Rachel',
    text: " So, it's really important that we do that and just don't take a word or phrase it for face value."
  },
  {
    startTime: 2966.55,
    person: 'Karol',
    text: " I'm watching over LinkedIn and several other media, several companies that produce application technologies, products to move data."
  },
  {
    startTime: 2978.67,
    person: 'Karol',
    text: " And at times, I'm looking at them and it's like, their marketing is a pure nightmare of just conjoined little monstrosities of terms that make no sense from a perspective of software architecture, enterprise architecture, or anything else."
  },
  { startTime: 3002.69, person: 'Rachel', text: ' On the surface, they sound good, right?' },
  { startTime: 3004.53, person: 'Karol', text: ' They sound good.' },
  { startTime: 3005.41, person: 'Karol', text: ' They sound great.' },
  {
    startTime: 3006.21,
    person: 'Karol',
    text: " I mean, looking at one of the companies with, I'll not name for the sake of it, last week they coined a term, composable architecture."
  },
  { startTime: 3017.05, person: 'Karol', text: " That's a very nice term." },
  { startTime: 3018.87, person: 'Karol', text: ' It sounds great.' },
  {
    startTime: 3020.41,
    person: 'Karol',
    text: ' But it was just marketing fluff because their product architecture was supporting composability as an architectural characteristic for years.'
  },
  {
    startTime: 3032.95,
    person: 'Karol',
    text: ' It was there already, the composability, the reusability coming with that composability.'
  },
  { startTime: 3038.09, person: 'Karol', text: ' It was existent.' },
  {
    startTime: 3039.81,
    person: 'Karol',
    text: " But they figured, oh, we're going to change our licencing model and we're going to market this as, oh, we're now doing composable architecture."
  },
  { startTime: 3047.65, person: 'Karol', text: ' They literally got themselves shot in the foot.' },
  {
    startTime: 3051.43,
    person: 'Karol',
    text: ' They dropped in Gartner rankings because of that over the next half year.'
  },
  {
    startTime: 3057.37,
    person: 'Karol',
    text: ' It was quite a show just because of that lingo from marketing and trying to coin terms that have no sense in terms of the current situation.'
  },
  {
    startTime: 3073.04,
    person: 'Karol',
    text: ' Then their licencing practise actually made it so that the product had to be utilised in a different way to keep it still feasible in terms of budget, limiting that composability aspect further.'
  },
  {
    startTime: 3087.58,
    person: 'Karol',
    text: " So that was like, we're doing composable architecture, but you're pricing us so that we have to drop down that characteristic."
  },
  { startTime: 3096.1, person: 'Karol', text: " That's interesting." },
  { startTime: 3098.72, person: 'Karol', text: ' Again, language.' },
  {
    startTime: 3100.06,
    person: 'Rachel',
    text: " A lot of people won't realise until they sign the contract."
  },
  {
    startTime: 3103,
    person: 'Karol',
    text: " Exactly, because they caught on to the marketing spiel and, sorry, it's not exactly the truth."
  },
  {
    startTime: 3109.72,
    person: 'Karol',
    text: ' But I think that kind of maybe ties into the Dunning-Kruger effect of things.'
  },
  {
    startTime: 3116.94,
    person: 'Karol',
    text: " We're very confident about things when we don't know a lot about them and then we're very careful when we actually start to gain a proper understanding of terms and what we're actually doing instead of just going blindly in the fog."
  },
  { startTime: 3134.46, person: 'Rachel', text: ' Absolutely.' },
  {
    startTime: 3134.94,
    person: 'Rachel',
    text: ' That probably kind of leads on to one of the adoption challenges around this as well.'
  },
  {
    startTime: 3141.5,
    person: 'Rachel',
    text: ' Because one of the interesting conversations that was happening at data mesh, I know both myself and Andrew kind of got involved in it a little bit, was around whether you drive data mesh from the top down or the bottom up and how you can best make that happen.'
  },
  {
    startTime: 3157.82,
    person: 'Rachel',
    text: ' Do you need to have the C-suite buy-in or can you implement it by stealth by working up and attacking that middle management who are really going to be the domain owners and data products owners to be able to drive it?'
  },
  {
    startTime: 3173.64,
    person: 'Karol',
    text: ' Let me guess, the only true answer to that question would be it depends.'
  },
  { startTime: 3177.76, person: 'Rachel', text: " Absolutely, we're architects." },
  { startTime: 3179.34, person: 'Rachel', text: " That's the only answer to any question." },
  {
    startTime: 3183.36,
    person: 'Karol',
    text: " I'm sure I'm trained in classical software architecture."
  },
  { startTime: 3188.86, person: 'Karol', text: ' All right, tell us.' },
  {
    startTime: 3192.7,
    person: 'Rachel',
    text: ' So from our side, the adoption and the drive was very much from the bottom up, I would say, and it was the noise that it generated in terms of the value that was being perceived that then flagged it up for senior sponsors to be able to come in and drive it onwards.'
  },
  {
    startTime: 3212.56,
    person: 'Rachel',
    text: " With that senior sponsorship, it can happen a lot quicker, obviously, but it's not a barrier for you to be able to adopt it and drive it successfully from the bottom up."
  },
  { startTime: 3224.16, person: 'Rachel', text: " It's certainly my experience." },
  { startTime: 3226.8, person: 'Rachel', text: ' So either is possible.' },
  {
    startTime: 3230.67,
    person: 'Karol',
    text: ' That I think would be best to have both ways, right?'
  },
  {
    startTime: 3233.49,
    person: 'Karol',
    text: ' Meet in the middle, to grind that middle manager from both sides.'
  },
  { startTime: 3238.67, person: 'Rachel', text: ' A little bit.' },
  {
    startTime: 3239.71,
    person: 'Rachel',
    text: " I mean, obviously, one of the problems you have when you have a senior sponsor saying, do this, then people feel like they're having it done to them."
  },
  {
    startTime: 3248.43,
    person: 'Rachel',
    text: " So I think that's really the advantage that we had, that we were able to introduce them to a concept and get them engaged and say, actually, I want this and I want to help drive it."
  },
  {
    startTime: 3259.77,
    person: 'Rachel',
    text: " And then the message coming saying this is really important, we're going to do it, allowed it to really kind of flourish because you already had the buy in by that point."
  },
  {
    startTime: 3269.27,
    person: 'Rachel',
    text: ' You just had the freedom and people getting the space to put the time that was needed on it.'
  },
  {
    startTime: 3274.25,
    person: 'Rachel',
    text: " So I'd almost say rather than meeting directly in the middle, it's like build it and then come."
  },
  {
    startTime: 3280.01,
    person: 'Rachel',
    text: ' Because that engagement is absolutely important because ownership is essential throughout this and the business being able to drive it.'
  },
  {
    startTime: 3287.11,
    person: 'Karol',
    text: ' So we first create that interest, that engagement, accountability, ownership, and then put on top of that the priority from the higher ups.'
  },
  { startTime: 3296.75, person: 'Karol', text: ' And that makes the dream work.' },
  { startTime: 3299.29, person: 'Rachel', text: " That's certainly my experience." },
  { startTime: 3300.61, person: 'Rachel', text: " I don't know if yours was different, Andrew." },
  { startTime: 3302.85, person: 'Andrew', text: ' No, very similar, much the same really.' },
  {
    startTime: 3304.87,
    person: 'Andrew',
    text: ' We start bottom up, solving problems locally, aligned to business goals.'
  },
  {
    startTime: 3311.21,
    person: 'Andrew',
    text: " And our problem is really we're trying to, I can't stop saying that, kind of bridge a gap between software engineering and the data teams."
  },
  {
    startTime: 3320.43,
    person: 'Andrew',
    text: ' And the main initial drive was around data reliability.'
  },
  {
    startTime: 3327.75,
    person: 'Andrew',
    text: ' And what we started doing is we started creating incidents when data pipelines failed, and obviously were caused by a change in the software engineering systems.'
  },
  {
    startTime: 3338.61,
    person: 'Andrew',
    text: " And then we'll get everyone together in a room and start talking about it, really trying to get everyone speaking about problems, learning the same language, learning what the other side were doing and what they knew and what they didn't know."
  },
  {
    startTime: 3351.19,
    person: 'Andrew',
    text: ' And getting software engineers involved in trying to work out a solution for this.'
  },
  {
    startTime: 3354.67,
    person: 'Andrew',
    text: " Like if I make a change to the database, and that's what I should be doing, but I didn't know it impacted everything downstream."
  },
  {
    startTime: 3359.71,
    person: 'Andrew',
    text: ' So we started explaining to them why that was impacting everything downstream.'
  },
  {
    startTime: 3364.11,
    person: 'Andrew',
    text: ' Started getting them involved in building design solutions.'
  },
  {
    startTime: 3366.97,
    person: 'Andrew',
    text: ' We were still doing it, we kind of knew where we wanted to go, but really giving them that sense of ownership of the problem as well as the solution.'
  },
  {
    startTime: 3374.23,
    person: 'Andrew',
    text: ' And then do some small proof of concept to prove it out.'
  },
  {
    startTime: 3378.39,
    person: 'Andrew',
    text: ' And then you can demonstrate something that works before you go and try and get that accepted buy-in.'
  },
  {
    startTime: 3383.41,
    person: 'Andrew',
    text: " And not only that, yeah, not only have you now got some proof, you've also got people already, all the interested, already engaged, already kind of being the voices in the room when you're not there, talking to their peers in maybe software engineering part of business, or web part of business, trying to convince."
  },
  {
    startTime: 3399.19,
    person: 'Andrew',
    text: " And they feel like they've been part of the discovery of this problem and solution, not something to be thrust upon them saying, you are now creating data products, and you are now using this platform, but you had no say in."
  },
  {
    startTime: 3411.49,
    person: 'Andrew',
    text: " Because although that does work, it can work, if you've got enough pressure from above, you have to do it, you don't get a choice."
  },
  {
    startTime: 3418.57,
    person: 'Andrew',
    text: " But similar to that thing I spoke about earlier, about when we chose the metric, the pressure from above was there to do it, but the people doing it are just doing bare minimum to get it done, to get people put back, so they weren't really brought into it."
  },
  {
    startTime: 3429.87,
    person: 'Andrew',
    text: " I didn't really know why they were doing it, I was just trying to tick the box."
  },
  {
    startTime: 3433.07,
    person: 'Andrew',
    text: " Whereas if you can try and get people working more closely together at all levels, including bottom levels, or lower levels, I won't say bottom, lower levels, where the actual work's being done, then you're going to get a much better result from that, because everyone's involved, everyone's engaged."
  },
  { startTime: 3450.59, person: 'Rachel', text: " Gregor Hopper's Architect Elevator, right?" },
  { startTime: 3452.67, person: 'Andrew', text: " Yeah, I've been re-reading that, actually." },
  {
    startTime: 3454.59,
    person: 'Andrew',
    text: ' So, actually, the quote you mentioned earlier about the architect is the person who reads the whole article back from his book.'
  },
  {
    startTime: 3459.73,
    person: 'Andrew',
    text: " So, yeah, it's, if anyone's not familiar with him, it's well worth reading all his books, obviously, it's great to talk about this kind of thing."
  },
  {
    startTime: 3469.07,
    person: 'Karol',
    text: " And that kind of top-down pressure, without that accountability, I think that's usually leading to quite a damage in quality."
  },
  {
    startTime: 3480.67,
    person: 'Andrew',
    text: " Yeah, and people, it's documented everywhere, about having these top-down, big IT projects, they always fail, or regularly fail."
  },
  {
    startTime: 3490.63,
    person: 'Andrew',
    text: " They're always more expensive than they're going to be."
  },
  {
    startTime: 3492.77,
    person: 'Andrew',
    text: ' You know, you go away for two or three years, deliver something, within that time you deliver nothing, and then your project gets cut, and you just waste loads of money and time and effort.'
  },
  {
    startTime: 3501.51,
    person: 'Andrew',
    text: " So, I'm not saying every top-down project is done like that, like after two or three years, like that timescale, with no deliveries, but many are, and many fail because of that."
  },
  {
    startTime: 3511.47,
    person: 'Andrew',
    text: " Whereas if you start small, solve locally, solve initial problems, deliver value, then incrementally build up things up towards the data mesh, maybe that's your ultimate goal, but maybe that's not what you're talking about initially."
  },
  {
    startTime: 3521.47,
    person: 'Andrew',
    text: " Like, for example, where I previously worked, I rarely spoke about data mesh, I rarely used the term, although I knew that's where it was going, because most people in business didn't know what it is, didn't care what it was, and if they did know what it is, it was even worse, because they were scared of being made to adopt this big, scary idea, in their view."
  },
  {
    startTime: 3540.29,
    person: 'Andrew',
    text: " So, we just didn't talk about it, we were saying, okay, well, the next part of our approach is to start treating data a bit more like products, and the next part of our approach is to move away from tightly cupping ourselves to the debt basis and move to more events and apply debt contracts, and just gradually, like, phases towards, you know, self-ownership and self-governance."
  },
  {
    startTime: 3561.03,
    person: 'Andrew',
    text: " We are essentially doing data mesh, but we don't tell people about it, we don't care about that, but we're doing it, solving problems that we have today, but with a long-term view in mind."
  },
  {
    startTime: 3573.49,
    person: 'Rachel',
    text: " We don't use the term data mesh with anyone outside the actual data function, because there's no need to."
  },
  {
    startTime: 3583.77,
    person: 'Rachel',
    text: " The business just see the value that they're getting from it."
  },
  {
    startTime: 3588.23,
    person: 'Rachel',
    text: " I think part of the problem, what you're saying in terms of big IT projects failing, is because we don't run them like business transformations, we don't give that consideration to the business readiness, we just try and jump straight to adoption."
  },
  { startTime: 3601.85, person: 'Andrew', text: ' And technology factors as well, usually.' },
  { startTime: 3605.93, person: 'Karol', text: ' This strikes me from a psychology perspective.' },
  {
    startTime: 3610.17,
    person: 'Karol',
    text: " Now, I'm not a psychologist, but I double in my spare time in the concept."
  },
  {
    startTime: 3616.85,
    person: 'Karol',
    text: " It's very heavily about, first of all, what you mentioned was basically dismantling a very, very huge, scary thing called data mesh, without even naming it data mesh, or naming it that huge thing, into small pieces and making them actually actionable."
  },
  {
    startTime: 3634.97,
    person: 'Karol',
    text: " So there's somebody with a vision, not telling about the grandeur of the vision, but just issuing need-to-know basis, right?"
  },
  {
    startTime: 3642.97,
    person: 'Karol',
    text: " Small, contained, actionable pieces of, let's do this, go this direction, and see."
  },
  {
    startTime: 3650.69,
    person: 'Karol',
    text: ' And then this approach, if we look at it from psychology perspective, changes for most people are very scary.'
  },
  {
    startTime: 3661.69,
    person: 'Karol',
    text: ' Changes very much hit into their sense of psychological safety.'
  },
  {
    startTime: 3667.33,
    person: 'Karol',
    text: " If people's psychological safety is compromised, they will not be performing."
  },
  {
    startTime: 3674.09,
    person: 'Karol',
    text: ' They will not be delivering quality, and they will not be taking accountability and ownership.'
  },
  {
    startTime: 3680.29,
    person: 'Karol',
    text: " So if we put it in a way that we put it in terms that are containable, and our human brain can wrap around them, and simplify this to some sort of a model understanding that is sufficient, and doesn't leave a lot of questions, then we cater to that psychological safety of those people, so that we then drive that adoption further."
  },
  { startTime: 3714.25, person: 'Rachel', text: ' Absolutely.' },
  {
    startTime: 3715.35,
    person: 'Rachel',
    text: " So again, it's kind of going back to Gregor Hopper's architect elevator, and looking at every level, and explaining it in terms of the business problem it solves."
  },
  {
    startTime: 3725.59,
    person: 'Rachel',
    text: " Because whilst people are resistant to change, they're not resistant to progress."
  },
  {
    startTime: 3730.01,
    person: 'Rachel',
    text: ' So I have the wonderful joy in my job of talking to an awful lot of people about the domain architecture, the part the data plays in it, etc.'
  },
  {
    startTime: 3740.11,
    person: 'Rachel',
    text: " And I've, within the organisation, been talking to partners, to interns, and it's just framing that in a different way."
  },
  {
    startTime: 3747.57,
    person: 'Rachel',
    text: " So if a partner comes down to talk to me, then the conversation will be very much about strategic prioritisation and oversight, because that's what they want, that they can't see at the moment what we have."
  },
  {
    startTime: 3759.07,
    person: 'Rachel',
    text: ' If one of the heads of department, the domain owners come along, then we talk about ownership, empowerment to drive their area forwards.'
  },
  {
    startTime: 3768.77,
    person: 'Rachel',
    text: ' Their parts play a really strong part in that culture of the organisation, and driving the change themselves in the way that they see it making progress.'
  },
  {
    startTime: 3777.53,
    person: 'Rachel',
    text: " And then if you get someone more on the operational implementation side, we're talking more about the value that they're adding to the business, and the efficiency that is coming from making sure we have this single place to build things, building them once, building it consistently, and having the building blocks to do that efficiently, and the value that brings the business."
  },
  {
    startTime: 3797.45,
    person: 'Rachel',
    text: " So it's a huge change, but it's being delivered in a very different way to make sure that people engage and go, this is what we need."
  },
  {
    startTime: 3808.01,
    person: 'Rachel',
    text: " The number of times I've been told that over the last year has been absolutely phenomenal."
  },
  {
    startTime: 3814.53,
    person: 'Karol',
    text: ' Yeah, and here Stefan is popping in comments in terms of the resistance to the idea, resistance to change.'
  },
  {
    startTime: 3822.11,
    person: 'Karol',
    text: ' Especially, we already have failed projects in the past, and the resistance to change.'
  },
  {
    startTime: 3828.31,
    person: 'Karol',
    text: ' Again, not progress, but the change is going to be there, and that results in less of an adoption.'
  },
  {
    startTime: 3839.39,
    person: 'Karol',
    text: " Apparently, I didn't know the term, it's called the change fatigue, which I would understand, because having all those changes, and especially if they're not successful, one thing is damaging that psychological safety."
  },
  { startTime: 3854.47, person: 'Karol', text: " So what's going to happen to me?" },
  { startTime: 3856.19, person: 'Karol', text: ' Where am I going to be?' },
  { startTime: 3857.41, person: 'Karol', text: ' Am I going to be replaced or not?' },
  { startTime: 3859.19, person: 'Karol', text: ' Am I going to be tired?' },
  {
    startTime: 3860.83,
    person: 'Karol',
    text: ' But then the ingestion of information, especially if we were presented with some grand design, a big one, it lands straight in the problem of having extraneous cognitive load, which we need to address, but maybe we should just limit it instead.'
  },
  {
    startTime: 3883.21,
    person: 'Karol',
    text: " Then, again, going back to those actionable, stackable elements, we're literally lowering that extraneous cognitive load that way, which is something very interesting."
  },
  {
    startTime: 3896.73,
    person: 'Karol',
    text: " I'm connecting the dots right now, because just two weeks ago, there was the stream about cognitive load, so I'm now a little bit smarter on the topic, and I did a great job explaining the different qualities of cognitive load on the stream."
  },
  {
    startTime: 3911.47,
    person: 'Karol',
    text: " If you haven't seen that, then just go into YouTube and look at the recording."
  },
  {
    startTime: 3916.13,
    person: 'Karol',
    text: " It's a really, really interesting talk, and Radek was drawing around in his tool, showing the concept of what that is, but that ties into that adoption aspect here very, very nicely, and that's an interesting just to connect those dots."
  },
  {
    startTime: 3935.25,
    person: 'Rachel',
    text: " I think one of the great things about data mesh in some ways is that if you look at it as one thing, it's a massive change."
  },
  {
    startTime: 3943.07,
    person: 'Rachel',
    text: ' It is or can be very much a series of smaller changes, but what ...'
  },
  {
    startTime: 3949.55,
    person: 'Rachel',
    text: " That can obviously lead to change if it's done the wrong way, because it's the definition of like, oh my God, what do you want me to change now, or what's happening now?"
  },
  { startTime: 3957.39, person: 'Rachel', text: " I've just learned this thing." },
  {
    startTime: 3959.25,
    person: 'Rachel',
    text: " Actually, if you're looking to drive it in the right way, you give people enough information that they go, yeah, this is what I want, but in order to do this, I need this."
  },
  {
    startTime: 3969.55,
    person: 'Rachel',
    text: " They drive the ideas and direction of the next change, or at least you use the sessions you're having to influence them to think that they are driving the direction of the change."
  },
  { startTime: 3984.23, person: 'Rachel', text: ' They constantly see it as that step of ...' },
  {
    startTime: 3986.91,
    person: 'Rachel',
    text: ' Steps of progression rather than these steps of change.'
  },
  {
    startTime: 3989.85,
    person: 'Rachel',
    text: " That's obviously not going to work across the board."
  },
  {
    startTime: 3992.59,
    person: 'Rachel',
    text: " There's always going to be some people who fall by the wayside, but for the majority of the organisation, it's working so far."
  },
  { startTime: 3999.39, person: 'Rachel', text: ' Okay.' },
  {
    startTime: 4003.14,
    person: 'Karol',
    text: " I mean, probably, with people like me, that wouldn't work."
  },
  {
    startTime: 4007.54,
    person: 'Karol',
    text: " I have a constant problem with hierarchy, and going, being conformist, so that would be interesting to see that in action, but absolutely, that's ..."
  },
  {
    startTime: 4021.94,
    person: 'Karol',
    text: " It's kind of a bit like an illusion, but it does support progression."
  },
  { startTime: 4032.56, person: 'Rachel', text: ' Absolutely.' },
  { startTime: 4033.56, person: 'Rachel', text: " It's one of the hardest things." },
  { startTime: 4036.14, person: 'Rachel', text: ' We neglect the people side.' },
  {
    startTime: 4038.04,
    person: 'Rachel',
    text: ' We were having a bit of a joke earlier on, as we built out our enterprise architecture team, starting from two people to be these different disciplines.'
  },
  {
    startTime: 4047.3,
    person: 'Rachel',
    text: " We're going, we're missing the people architect."
  },
  {
    startTime: 4050,
    person: 'Rachel',
    text: " Well, it has a role, but it's fundamentally kind of building in those social skills, the empathy, the individualisation, and making sure that we can work across the levels to bring everybody on the journey, and not just sound like we're preaching from an ivory tower."
  },
  {
    startTime: 4068.2,
    person: 'Karol',
    text: " I think that's a very underrated skill overall for all architects, is the empathy and the people skill, to be able to connect with them, understand them, and convince them that something might be actually good for them."
  },
  {
    startTime: 4087.38,
    person: 'Karol',
    text: " We tend to look at architecture, well, I don't do that any more, but the general notion is that this is a technical field."
  },
  {
    startTime: 4095.56,
    person: 'Karol',
    text: " It's very much a technical field as much as a people field, and depending on where you're positioned in your organisation, if you're a technical architect, a solutions architect, an enterprise architect, integration architect, data architect, the proportion of people skill to technical skill, it differs at times, but it differs ever so slightly."
  },
  { startTime: 4118.279, person: 'Karol', text: " It's not that large of a shift, in my opinion." },
  {
    startTime: 4123.819,
    person: 'Karol',
    text: " It's more of like, you need to be more of an SME here because this is a very technical area, but you're still going to be working with people."
  },
  {
    startTime: 4133.04,
    person: 'Karol',
    text: " I still have in my memory what people were saying back when I was still a junior, that they didn't go into computer science to study computer science and work in IT to work with people, and I think that's such a false premise to go into this field and work IT if you're not going to be working with people, because, in the end, we're here to support other people and drive their businesses in a way."
  },
  { startTime: 4165.939, person: 'Rachel', text: ' Yes, absolutely.' },
  {
    startTime: 4167.24,
    person: 'Rachel',
    text: " It's a service function, so you need to be able to understand the people that you're working with."
  },
  {
    startTime: 4173.979,
    person: 'Rachel',
    text: " Going back to probably exactly the same sources you've already mentioned a couple of times, but there is a wonderful quote about the architect isn't the smartest person in the room."
  },
  {
    startTime: 4182.819,
    person: 'Rachel',
    text: " They're the person that's better to pull the information out of the person in the room, and I think that's something that's certainly helped me, because I'm never the smartest person in any room, and I'm totally all right with that."
  },
  {
    startTime: 4196,
    person: 'Karol',
    text: ' I tend to differentiate that in terms of being smart and being wise, because, from my understanding of the words, knowledge and wisdom are two different things.'
  },
  {
    startTime: 4208.88,
    person: 'Karol',
    text: " I might be very knowledgeable, but I might not be the wisest, and there's always, in any business, especially that I work as a consultant, not in-house at a company, in every business, there definitely will be somebody way wiser than me in the domain space or problem space that I'm trying to understand and solve."
  },
  {
    startTime: 4233.2,
    person: 'Karol',
    text: " And being able to go into that and weave out the knowledge and understanding from those persons, that's a very, very, very crucial skill for an architect."
  },
  { startTime: 4248.66, person: 'Karol', text: ' But people learn it the hard way, really.' },
  {
    startTime: 4252.5,
    person: 'Karol',
    text: ' Then comes this question here in terms of exactly pulling out knowledge out of people.'
  },
  {
    startTime: 4262.49,
    person: 'Karol',
    text: ' Should I identify my data consumers first when deciding whether to update the mesh architecture, or what should I do in terms of that?'
  },
  {
    startTime: 4272.25,
    person: 'Karol',
    text: ' Because this is, again, a problem domain, I suppose, and understanding your people.'
  },
  {
    startTime: 4280.63,
    person: 'Rachel',
    text: " It's more about understanding your business and what the problem is that you're trying to solve, or you're expecting the data mesh architecture to solve."
  },
  {
    startTime: 4291.59,
    person: 'Rachel',
    text: " It was actually quite, for us, I've already mentioned slightly earlier on about bringing the operational reporting together, because there was a big disconnect before."
  },
  {
    startTime: 4303.65,
    person: 'Rachel',
    text: " One of the really interesting comments I thought in one of the training sessions I did with Jamak right back at the start when she wasn't so busy and was actually doing them in person, one of the comments that she made, and I actually disagreed with, was that data mesh wasn't really for smaller organisations."
  },
  {
    startTime: 4323.69,
    person: 'Rachel',
    text: ' Now, I would call ourselves a smaller organisation.'
  },
  {
    startTime: 4327.39,
    person: 'Rachel',
    text: " We're a midsize investment management firm, but we're primarily located in one location, which actually makes data mesh a really good implementation for us, because we don't have the challenges of kind of cross-continent, cross-border considerations."
  },
  { startTime: 4347.31, person: 'Rachel', text: " Everybody's in the same time zone." },
  { startTime: 4349.23, person: 'Rachel', text: ' Everybody knows each other.' },
  {
    startTime: 4350.97,
    person: 'Rachel',
    text: ' Everybody knows what their business is about and can understand and gives you a nice in to that collaboration with fewer challenges.'
  },
  {
    startTime: 4360.39,
    person: 'Rachel',
    text: " So, there are a number of things to consider before adopting it, but primarily, what's the problem you're trying to solve?"
  },
  {
    startTime: 4369.69,
    person: 'Rachel',
    text: " It's probably not identifying your data consumers first."
  },
  { startTime: 4375.19, person: 'Rachel', text: ' They will be different for different products.' },
  {
    startTime: 4377.71,
    person: 'Rachel',
    text: " So, you'd probably get down into quite an interesting rabbit hole if you started to do that."
  },
  {
    startTime: 4385.11,
    person: 'Karol',
    text: ' That comes as well with just products, not only data products, but software as a product.'
  },
  {
    startTime: 4391.51,
    person: 'Karol',
    text: ' I remember a situation back when I was working at T-Mobile, T-Mobile Poland is owned by Deutsche Telekom from Germany.'
  },
  {
    startTime: 4404.63,
    person: 'Karol',
    text: " At that time, Deutsche Telekom had a lot of say in terms of what the group does, and they figured they're going to introduce a one centralised mobile app to manage your account, your phone subscription, and they figured, okay, we're going to put that in."
  },
  {
    startTime: 4425.49,
    person: 'Karol',
    text: " We're going to put postpaid, prepaid, perfect, make some country-specific views, and that's going to be just fine."
  },
  {
    startTime: 4436.71,
    person: 'Karol',
    text: ' And they came to Poland and introduced the concept.'
  },
  {
    startTime: 4439.59,
    person: 'Karol',
    text: " They started workshopping it, going into that, and then they realised that, well, it's not going to solve any problems in Poland because we not only have prepaid and postpaid, we have a mix, which was a prepaid, postpaid."
  },
  {
    startTime: 4459.55,
    person: 'Karol',
    text: " So, basically, you pay the fixed price monthly, like five pounds, equivalent of five pounds, and you could charge your account like you did a prepaid afterwards to get more minutes, to get more SMS, and then the whole idea went out of the door because it just didn't fit, because they didn't understand the problem they're solving."
  },
  {
    startTime: 4484.25,
    person: 'Karol',
    text: " They tried to globalise the problem, but it turns out that certain territories have a different problem to solve, and I think that translates exactly to the productisation of data or productisation later to APIs delivering data products that you need to understand the problem you're solving in that sense, right?"
  },
  { startTime: 4507.07, person: 'Rachel', text: ' Absolutely.' },
  {
    startTime: 4507.79,
    person: 'Rachel',
    text: " It's another example of wherever you're working across the data pipeline, whether it's in the functionality, whether it's providing the data, it's a lot of the same capabilities and considerations."
  },
  {
    startTime: 4521.83,
    person: 'Rachel',
    text: ' Yeah, integration, observability, all of it, it all comes together.'
  },
  {
    startTime: 4526.45,
    person: 'Karol',
    text: " Now, you said the keyword here, observability, I'm looking at my lovely list of topics and questions."
  },
  {
    startTime: 4535.09,
    person: 'Karol',
    text: ' Should we jump into observability, and here already tying into the question in chat from Stefan about data privacy and data governance, because these are inseparable.'
  },
  {
    startTime: 4548.15,
    person: 'Karol',
    text: " So, data lineage, observability, data privacy, data governance, how do we get to address that with data mesh, especially with sensitive data and then also sensitive geolocations that were spread around the world, like let's say China, Russia, these are now a little bit of burning topics in terms of sensitivity."
  },
  {
    startTime: 4575.65,
    person: 'Rachel',
    text: " I'm going to just jump on that question directly from Stefan, because it's absolutely a consideration that we have."
  },
  {
    startTime: 4585.81,
    person: 'Rachel',
    text: ' The way that we are looking to do that is to set up the data product as appropriate for the consumer.'
  },
  { startTime: 4591.87, person: 'Rachel', text: ' It comes back to that side of things.' },
  {
    startTime: 4594.11,
    person: 'Rachel',
    text: ' So, within the same domain, you can provide the same data or filtered by different data products.'
  },
  {
    startTime: 4602.83,
    person: 'Rachel',
    text: ' Each of the data products not only has the data contracts as to the data moving into or out of it, but the product itself has the data sharing agreement around it.'
  },
  {
    startTime: 4613.35,
    person: 'Rachel',
    text: ' And what that stipulates is who can use the data for what.'
  },
  {
    startTime: 4618.03,
    person: 'Rachel',
    text: ' So, you can have one data product that is set up saying this data is appropriate for clients across UK and Europe, this data product is appropriate for use in China, this data product is appropriate for use in New York.'
  },
  {
    startTime: 4635.11,
    person: 'Rachel',
    text: ' And you can set them up to be based off the same sources, so you have the consistency of data, but providing only the data that is appropriate for the consumer or the consumer group.'
  },
  { startTime: 4647.93, person: 'Rachel', text: ' Does that make sense?' },
  {
    startTime: 4649.53,
    person: 'Karol',
    text: " So, we're basically going back to data contracts and metadata with those contracts to align what contract is for whom in that sense."
  },
  {
    startTime: 4660.55,
    person: 'Rachel',
    text: " So, yeah, in terms of the product you're building, fitting the consumer requirement and having the metadata and the security structure around that."
  },
  {
    startTime: 4673.87,
    person: 'Rachel',
    text: " So, it depends on what technology you're using and how you're going to actually implement that."
  },
  {
    startTime: 4680.25,
    person: 'Rachel',
    text: ' But for us, for example, you can have a separate database for each data product and say, do you know what, we are now able to be confident that we are able to provide this data to the right audience and we are not going to be hit with any kind of regulatory mishaps.'
  },
  {
    startTime: 4701.69,
    person: 'Karol',
    text: " Right, because the data privacy aspect, especially, that's a bit of a nightmare to govern."
  },
  {
    startTime: 4710.07,
    person: 'Karol',
    text: " I've seen one of the learning things in terms of application integration, learning moments that I had over the years was looking at the anaemic events pattern."
  },
  {
    startTime: 4722.53,
    person: 'Karol',
    text: " For those unfamiliar, anaemic events are basically an event-driven architecture of events that are emitted from a source system but they don't contain business data, they contain only an identifier of a record that has changed."
  },
  {
    startTime: 4737.41,
    person: 'Karol',
    text: ' Sometimes with large datasets, this is accompanied also by a schema of which part of the dataset has changed.'
  },
  {
    startTime: 4744.33,
    person: 'Karol',
    text: " So, if we have, let's say, a record that has 200 different attributes, these kind of things happen, unfortunately, then the schema says which part of that record has changed."
  },
  {
    startTime: 4758.53,
    person: 'Karol',
    text: " So, it's grouped into specific schemas and they compose one record."
  },
  {
    startTime: 4763.95,
    person: 'Karol',
    text: " Then, basically, we don't know what data was there, we don't know what data has changed from what to what, we need to pull it."
  },
  {
    startTime: 4774.33,
    person: 'Karol',
    text: ' I always considered anaemic events before encountering them in the wild, I considered them kind of an anti-pattern, over-complicating things.'
  },
  {
    startTime: 4784.17,
    person: 'Karol',
    text: ' But then I saw them utilised in a proper way, in a situation where exactly that governance aspect was needed.'
  },
  {
    startTime: 4794.27,
    person: 'Karol',
    text: ' And that tied down, basically, to the API contracts, exposing that data product.'
  },
  {
    startTime: 4800.55,
    person: 'Karol',
    text: ' In that terms, that was specifically employee data, employee record.'
  },
  {
    startTime: 4805.95,
    person: 'Karol',
    text: ' And that was a very interesting thing because the record was emitted as a, the consumer that needed that knew that this was the event, and then I need to go to the specific API for a specific schema to pull the changes.'
  },
  {
    startTime: 4825.59,
    person: 'Karol',
    text: ' Now, the absolutely amazing part was that for each API,'
  },
  {
    startTime: 4830.17,
    person: 'Karol',
    text: ' each of those consumers had a specific contractual obligation with metadata, with security,'
  },
  {
    startTime: 4837.05,
    person: 'Karol',
    text: ' recognising that this was that consumer, which basically meant that they would, each time,'
  },
  {
    startTime: 4841.87,
    person: 'Karol',
    text: ' each of them, for that one record, they would get basically a different data set,'
  },
  {
    startTime: 4847.75,
    person: 'Karol',
    text: ' governed by the specific contractual rules implemented into that API,'
  },
  {
    startTime: 4853.25,
    person: 'Karol',
    text: ' about the delivery about that specific product from that MDM solution, centralised MDM solution.'
  },
  { startTime: 4860.87, person: 'Karol', text: " It's a hustle." },
  {
    startTime: 4862.95,
    person: 'Karol',
    text: " But if we're considering working with sensitive data, where security is our driving characteristic, not performance, not availability, not speed, not time to market, then that was the only sensible implementation to do, to divide it that way and set it up centralised to be able to govern this kind of thing."
  },
  {
    startTime: 4890.07,
    person: 'Karol',
    text: ' And this is not about data architecture per se, this is about the data movement, so application integration, and the specific architectural pattern to facilitate that requirement.'
  },
  {
    startTime: 4901.03,
    person: 'Karol',
    text: ' The security part was in terms of the data architecture that were governing that.'
  },
  {
    startTime: 4906.63,
    person: 'Rachel',
    text: ' Well, and the security architecture, we need the security architect as well.'
  },
  {
    startTime: 4913.09,
    person: 'Rachel',
    text: " But that probably starts going into to answering Stefan's kind of follow-up question that he's asked there around the, if there are geolocation restrictions on the way data can be shared."
  },
  {
    startTime: 4929.75,
    person: 'Rachel',
    text: " Your design sets up the data product and the rules around it, and then it, again, it's kind of down to you, the tech stack that you use, how mature you are in that space as to how you are going to implement that."
  },
  {
    startTime: 4943.99,
    person: 'Rachel',
    text: " Karol's just kind of given one example that can be used for that, so there are definitely ways that it can be implemented."
  },
  {
    startTime: 4951.85,
    person: 'Rachel',
    text: ' But the key part is understanding those restrictions and designing for them.'
  },
  {
    startTime: 4960.5,
    person: 'Karol',
    text: " Andrew, I think this is where you can shed some light, because the way I understand contracts, and I'm usually using the term integration contract, but that doesn't really differ from a data contract per se."
  },
  {
    startTime: 4974.74,
    person: 'Karol',
    text: ' My understanding of a contract in IT in terms of moving data and using data is that it begins with a conversation about the business process, and then we go down to implementation after a long discussion along the way about architecture, patterns, etc.'
  },
  {
    startTime: 4999.12,
    person: 'Karol',
    text: " And looking at that, for example, with the context of Stefan's question, how would you tackle that from a data contract perspective?"
  },
  {
    startTime: 5010.68,
    person: 'Andrew',
    text: " Yeah, we've tackled similar things like this with data contracts."
  },
  {
    startTime: 5014.76,
    person: 'Andrew',
    text: " So, say a data contract starts off with capturing what's been agreed through conversations and co-define that in a human machine-readable format."
  },
  {
    startTime: 5025.64,
    person: 'Andrew',
    text: " And once it's in a machine-readable format, and that, again, doesn't matter what it is, you can then start using that to automate and build various tooling around how to manage this data."
  },
  {
    startTime: 5037.5,
    person: 'Andrew',
    text: ' So, for example, in a data contract, we specify a schema, and within that schema, we specify, we categorise our data.'
  },
  {
    startTime: 5047.68,
    person: 'Andrew',
    text: ' Because I work for a payments company, so financial data is really important, we need to be careful with that.'
  },
  {
    startTime: 5053.76,
    person: 'Andrew',
    text: ' And we categorise, you know, is it about payment, is it about customer, is it sensitive, or confidential, or public data, all those kind of things.'
  },
  {
    startTime: 5064.54,
    person: 'Andrew',
    text: " And that's all you have to do as a data owner, is just categorise your data, which you should be able to do, is your data."
  },
  {
    startTime: 5070.82,
    person: 'Andrew',
    text: ' And the tooling takes care of making sure the right people in the right roles have the right access to the right data.'
  },
  { startTime: 5075.78, person: 'Andrew', text: " It's all kind of automated for you." },
  { startTime: 5078.26, person: 'Andrew', text: " And that's just one example." },
  {
    startTime: 5079.64,
    person: 'Andrew',
    text: ' We do loads of things with tooling, backups, various other governance tasks, data retention policies, all that sort of stuff is driven by the platform.'
  },
  {
    startTime: 5086.5,
    person: 'Andrew',
    text: ' So, I guess, I think what Rachel was saying, it kind of depends on how mature your technology stack is, in terms of how you might want to implement something, like what Stephanie was talking about.'
  },
  {
    startTime: 5095.76,
    person: 'Andrew',
    text: " But there's no, you know, given enough maturity, enough time, money, effort, you can build something that's very automated, that satisfies these kind of requirements."
  },
  {
    startTime: 5109,
    person: 'Andrew',
    text: " So, you're not having to have every individual data owner, data producer, decide how to produce data that's worked for different geos, or different people in different roles, or how it moves across different geos, or data moving across different parts of the world."
  },
  { startTime: 5125.92, person: 'Andrew', text: " We weren't going quite far." },
  {
    startTime: 5127.78,
    person: 'Andrew',
    text: ' We were, at some point, looking at how we might make data available in different countries, and data locality, and make those regulations there.'
  },
  {
    startTime: 5137.12,
    person: 'Andrew',
    text: " And again, we couldn't see any reason why we couldn't automate that through the platform."
  },
  {
    startTime: 5140.36,
    person: 'Andrew',
    text: " So, we were just saying, well, these particular records relate to the EU, these particular records relate to the US, and they shouldn't be transferred across, between back and forth."
  },
  {
    startTime: 5149.7,
    person: 'Andrew',
    text: " And access to them should be only available through very similar tooling that's based in the right country, or right geo."
  },
  {
    startTime: 5154.7,
    person: 'Andrew',
    text: " So, yeah, there's no reason why you can't automate this, once you describe the data in enough detail that your tool can work with data."
  },
  {
    startTime: 5161.72,
    person: 'Andrew',
    text: " So, again, that's the importance of metadata, again."
  },
  {
    startTime: 5164.04,
    person: 'Andrew',
    text: ' A contract just captures that metadata, makes it available to humans to fill in and to manage it, but also to machines to automate, to manage that data based on a contract.'
  },
  {
    startTime: 5176.36,
    person: 'Karol',
    text: " So, let's shoot some examples what metadata would look like, because from my perspective, when I'm moving data from point A to B, I'm looking at some standardised HTTP headers, some IP of origin, this kind of thing."
  },
  {
    startTime: 5194.42,
    person: 'Karol',
    text: ' But on top of that, a must would be a timestamp, a correlation ID, message ID.'
  },
  {
    startTime: 5201.72,
    person: 'Karol',
    text: ' If formatted as an UL ID, then, well, I can drop the timestamp, because the timestamp is baked into it.'
  },
  {
    startTime: 5209.02,
    person: 'Karol',
    text: ' But these are like the base of all metadata that is a must for me as an integrator.'
  },
  {
    startTime: 5218.32,
    person: 'Karol',
    text: ' But looking at the data from the perspective of a, I guess, business process or business in general, I believe that there would be a lot more to it than just these operational metadata.'
  },
  { startTime: 5232.5, person: 'Andrew', text: ' Yeah, exactly.' },
  {
    startTime: 5234.08,
    person: 'Andrew',
    text: ' I mean, really, you can put whatever you want in that contract, helps you manage data.'
  },
  {
    startTime: 5238.04,
    person: 'Andrew',
    text: " And I would say the first thing to do is try and make sure you put in things in there that's going to be useful."
  },
  {
    startTime: 5242.3,
    person: 'Andrew',
    text: " That's the reason why someone's completing that metadata, filling it out, managing that metadata, keeping up to date."
  },
  {
    startTime: 5247.52,
    person: 'Andrew',
    text: " If you're not going to use it, it just becomes a waste of task."
  },
  {
    startTime: 5251.32,
    person: 'Andrew',
    text: " And, again, we talked earlier about trying to convince people to use the systems and get their buy-in, but you need to understand why it's important to categorise data, for example."
  },
  {
    startTime: 5259.62,
    person: 'Andrew',
    text: " It's important because we're going to use it for data retention policies, for access management, for various other things."
  },
  { startTime: 5265.14, person: 'Andrew', text: " So it's clear use of that data." },
  {
    startTime: 5268.02,
    person: 'Andrew',
    text: ' But really, I think the minimum you want to date contract is probably the owner, a version number, data evolves, and a schema, so you know what structure the data is.'
  },
  { startTime: 5278.74, person: 'Andrew', text: " That's probably the minimum." },
  {
    startTime: 5280.44,
    person: 'Andrew',
    text: ' But you can put various other things, SLOs, you can put data cache correlation, like I talked about.'
  },
  {
    startTime: 5284.7,
    person: 'Andrew',
    text: ' You can put retention policies, backup policies.'
  },
  { startTime: 5287.98, person: 'Andrew', text: ' You can put a number of things, really.' },
  {
    startTime: 5291.34,
    person: 'Andrew',
    text: " And if you want to find out the kind of things that people are putting in date contracts, there's a date contract standard, a date contract standard, under the Leeds Foundation, called BODCs, a date contract standard."
  },
  {
    startTime: 5302.38,
    person: 'Andrew',
    text: " That's a list of the kind of things people are putting in date contracts in practise."
  },
  {
    startTime: 5307.28,
    person: 'Andrew',
    text: ' But the main things we put in there were data cache correlation, ownership, and these are all useful things, right?'
  },
  {
    startTime: 5315.34,
    person: 'Andrew',
    text: ' For example, ownership, if there was an issue of data, was it matching schema, was it matching data quality rules that were in there?'
  },
  {
    startTime: 5322.28,
    person: 'Andrew',
    text: ' Use the ownership to route the alerts back to the data owner, so they can then go and investigate the data and fix the data.'
  },
  {
    startTime: 5328.48,
    person: 'Andrew',
    text: ' Version number, we put that in there to implement change management around the data.'
  },
  {
    startTime: 5333.04,
    person: 'Andrew',
    text: ' I mentioned earlier that one of the issues was, the main issue we were trying to solve initially was the reliability of data.'
  },
  {
    startTime: 5341.54,
    person: 'Andrew',
    text: " That's because data had been changed regularly, but there was no change management part of it."
  },
  {
    startTime: 5347.38,
    person: 'Andrew',
    text: " So, we started, again, similar to what you do with API, you have an API version, making minor changes is fine, making breaking changes, you wouldn't deploy that, you would have a migration path from one or the other."
  },
  {
    startTime: 5362.08,
    person: 'Andrew',
    text: " So, I date contract a version number in, every time I made a change to a contract, some checks, and if it's a non-breaking change, fine, go ahead and deploy it, no problems there."
  },
  {
    startTime: 5374.56,
    person: 'Andrew',
    text: " Breaking change, you can't do that, follow the change management process, talk to consumers, find out where they are, work out how you're going to migrate everyone over to it."
  },
  {
    startTime: 5383.96,
    person: 'Andrew',
    text: " We didn't exactly say how we're going to migrate, we said you are data owners, you have autonomy to decide how to migrate your customers over to the next version of the product."
  },
  { startTime: 5395.68, person: 'Andrew', text: ' So, autonomy was quite a strong theme as well.' },
  {
    startTime: 5399.7,
    person: 'Andrew',
    text: " So, yeah, anything you want in a date contract, make sure it's useful for something."
  },
  {
    startTime: 5403.44,
    person: 'Andrew',
    text: " So, with a problem that you have with data management, with change management, with access management, whatever the problem you're having, make sure you capture that in a date contract and use that information to ideally automate or at least support data owners in managing their data."
  },
  {
    startTime: 5423.14,
    person: 'Rachel',
    text: " The encapsulation of both your functional and your non-functionals, it gives you the opportunity to think of that, you're not so happy path as well."
  },
  {
    startTime: 5432.64,
    person: 'Rachel',
    text: " So, there'll be expectations around data, certainly, you know, I need this data by 7am, otherwise I won't be able to do whatever I need for that."
  },
  {
    startTime: 5442.76,
    person: 'Rachel',
    text: " What do you want to happen if it's not available?"
  },
  { startTime: 5445.92, person: 'Rachel', text: ' So, making sure that we do that.' },
  {
    startTime: 5448.48,
    person: 'Rachel',
    text: ' So, by having that standard format, it means that that template is there for everybody who comes to create a data contract.'
  },
  {
    startTime: 5457.22,
    person: 'Rachel',
    text: " They don't have to reinvent the wheel, they don't have to ask the think what questions they need to ask around it."
  },
  {
    startTime: 5462.66,
    person: 'Rachel',
    text: ' So, it becomes a really, really useful tool around the organisation for both the business and the technical implementation team.'
  },
  {
    startTime: 5470.48,
    person: 'Karol',
    text: ' The question that came to my mind while you were explaining the various metadata for a data contract, probably half of it does not bear that much impact on my work as an integrator.'
  },
  {
    startTime: 5494.42,
    person: 'Karol',
    text: " They bear more impact on the overall end-to-end solution, but purely looking at data movement, it's like, that doesn't really resonate."
  },
  {
    startTime: 5506.38,
    person: 'Karol',
    text: ' So, if we would be looking at the data contract, at the metadata around the contract, how much do you think actually translates to the instantiated object of a data being moved from point A to point B?'
  },
  {
    startTime: 5522.66,
    person: 'Karol',
    text: " Because I think there's a different scope, a smaller scope, definitely, of those metadata being attached to that specific instance and moved alongside that instance."
  },
  {
    startTime: 5533.94,
    person: 'Andrew',
    text: " Yeah, I think that's a really good point, actually, because the examples I gave were a lot about how you manage data when it's stored at rest, which you're not necessarily doing when you're integrating applications or you're stateless."
  },
  {
    startTime: 5547.82,
    person: 'Andrew',
    text: " But with data integration, I don't know how you want to use that term, but when you're integrating data, at some point, you're trying to..."
  },
  {
    startTime: 5559.6,
    person: 'Andrew',
    text: " When you're working with data in a stateful environment..."
  },
  { startTime: 5563.46, person: 'Andrew', text: ' You need to manage data correctly.' },
  {
    startTime: 5565.48,
    person: 'Andrew',
    text: " But when you're moving data around, within each particular instance, there are things in there that you also want to capture."
  },
  {
    startTime: 5572.98,
    person: 'Andrew',
    text: ' So, things like SLOs, like how is this data, for example, is expected to be present by 7am, and what percentage of them worked, I think, by that time.'
  },
  { startTime: 5582.58, person: 'Andrew', text: " That's the SLO that you report on." },
  { startTime: 5584.72, person: 'Andrew', text: ' Things like SLOs would be useful.' },
  {
    startTime: 5587.4,
    person: 'Andrew',
    text: " Schema, to make sure that systems can decode that data, if it's been encoded in some format."
  },
  {
    startTime: 5594.54,
    person: 'Andrew',
    text: ' Or just to configure a platform to conform, to ensure that the data conforms to the schema.'
  },
  {
    startTime: 5599.72,
    person: 'Andrew',
    text: ' And then for alerts, or route data to the data queue, or whatever you want to do with a database, invalid.'
  },
  {
    startTime: 5605.46,
    person: 'Andrew',
    text: ' You also want to go into things like data quality rules.'
  },
  { startTime: 5608.96, person: 'Andrew', text: ' So, this record should be between 0 and 1.' },
  { startTime: 5612.1, person: 'Andrew', text: ' It should be a float between 0 and 1.' },
  {
    startTime: 5615.58,
    person: 'Andrew',
    text: " That's beyond what schema can do, which is float."
  },
  {
    startTime: 5617.96,
    person: 'Andrew',
    text: " You're now looking at the actual record itself, and investigating that, and detecting records with inverse bounds, and then sending an alert."
  },
  {
    startTime: 5626.18,
    person: 'Andrew',
    text: " So, that's something you might do in order to see the record."
  },
  { startTime: 5629.5, person: 'Andrew', text: ' So, yeah, these are more things.' },
  {
    startTime: 5631.6,
    person: 'Andrew',
    text: ' And a lot of these things you can do, for example, in OpenAPI.'
  },
  {
    startTime: 5634.74,
    person: 'Andrew',
    text: " So, a lot of these people do apply to APIs, and they're using, and they're creating integrations by APIs."
  },
  { startTime: 5642.92, person: 'Andrew', text: " And that's a big example for their contracts." },
  { startTime: 5647, person: 'Andrew', text: ' So, a lot of it came from there.' },
  {
    startTime: 5649.3,
    person: 'Andrew',
    text: ' But those, the kind of things you have in OpenAPI, which can do schema checks, and can do validation, are the kind of things you would use as data, attached to data, like you said.'
  },
  {
    startTime: 5658.86,
    person: 'Andrew',
    text: " As data's moving around, you might use this metadata to run checks, and alerts, route data to places, whatever it is you want to do with data as it's flowing through, the flow between systems."
  },
  {
    startTime: 5672.1,
    person: 'Rachel',
    text: " I think it kind of comes into the testing side of things as well, and how that integration pipeline will have different stages to it, and you'll want to make sure you've got the quality gates right at each stage."
  },
  {
    startTime: 5687.38,
    person: 'Rachel',
    text: ' The details of that should be in your data contract as well.'
  },
  { startTime: 5691.62, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 5692.08,
    person: 'Karol',
    text: " But it's interesting, from my perspective as an application integration specialist, a lot of the metadata that you're mentioning, that you would attach to an instance of a data product, I don't see that in application integration at all."
  },
  {
    startTime: 5713.32,
    person: 'Karol',
    text: ' Because a lot of that metadata is actually created within the integration platform, not created from the source system per se, but from the integration platform.'
  },
  { startTime: 5724.88, person: 'Karol', text: ' Especially if I have an integration platform' },
  {
    startTime: 5727.14,
    person: 'Karol',
    text: ' that is in the API-led architecture, which means that every system that initiates communication'
  },
  {
    startTime: 5732.4,
    person: 'Karol',
    text: ' towards the integration platform has its dedicated channel, and a dedicated API used only by that'
  },
  {
    startTime: 5738.84,
    person: 'Karol',
    text: ' system and nobody else, then at this point, when the request or the event hits that API,'
  },
  {
    startTime: 5747.64,
    person: 'Karol',
    text: ' I create a large set of metadata, correlators, origin, lots of things that I then basically'
  },
  {
    startTime: 5759.38,
    person: 'Karol',
    text: ' transform into log data and push that to an aggregator to consume.'
  },
  {
    startTime: 5765.14,
    person: 'Karol',
    text: " So I have correlation through the whole integration platform, all the applications that facilitate integration, and I can see that over whatever visualisation, like let's say we're using Elastic Stack, so I have in a Kibana dashboard somewhere that I can track via that correlation ID or via a specific name of a system that's the client system, what is the communication."
  },
  {
    startTime: 5794.32,
    person: 'Karol',
    text: ' And a lot of that metadata does not need to be then produced by said system.'
  },
  {
    startTime: 5802.16,
    person: 'Karol',
    text: ' But then, of course, there are pathologies to that where we expose a field to fill in the correlation ID by the system so that we have a correlation end-to-end instead of only across the integration platform for visibility, and then that system always inputs into that field a static text, static meaning hard-coded, not generated as a unique element.'
  },
  {
    startTime: 5830.3,
    person: 'Karol',
    text: ' And that forces, for example, integration developers knowing that to create an additional correlation ID field that is then populated by the integration platform.'
  },
  {
    startTime: 5840.74,
    person: 'Karol',
    text: ' So greater metadata, but sometimes the collaboration there lacks in that sense.'
  },
  {
    startTime: 5847.6,
    person: 'Karol',
    text: " But in general, if I look at the integration contracts that we're doing, we're describing the payload section with the actual data product."
  },
  {
    startTime: 5858.5,
    person: 'Karol',
    text: ' And that often contains a lot of the metadata you mentioned around the data product, but we treat it as business payload.'
  },
  {
    startTime: 5866.68,
    person: 'Karol',
    text: " We don't treat it as something that is metadata for us when we're doing application integration."
  },
  { startTime: 5873.56, person: 'Karol', text: ' That has no meaning.' },
  { startTime: 5874.72, person: 'Karol', text: " For us, that's like, yeah, that's payload." },
  { startTime: 5877.54, person: 'Karol', text: ' Move it along.' },
  { startTime: 5878.76, person: 'Karol', text: ' We parse it as we use it.' },
  {
    startTime: 5880.2,
    person: 'Rachel',
    text: ' The payload is one part of the data contract, absolutely.'
  },
  {
    startTime: 5884.76,
    person: 'Rachel',
    text: ' But what Andrew has mostly been talking about is the bits that are set up by the business in the first instance.'
  },
  {
    startTime: 5893.72,
    person: 'Rachel',
    text: ' So they essentially become the requirements for what then needs to be built.'
  },
  {
    startTime: 5899.06,
    person: 'Rachel',
    text: " And then it has to stay alive, and it has to make sure that it's up-to-date constantly."
  },
  { startTime: 5904.5, person: 'Rachel', text: ' So some of that will be auto-generated, right?' },
  { startTime: 5909.76, person: 'Rachel', text: ' It will be that payload piece.' },
  {
    startTime: 5912.1,
    person: 'Rachel',
    text: " So that plays a part in it, but it's probably not the interesting bit when we're looking at the design phase, because that's what we're looking for somebody to input, because we're driving, we're building a product, we're driving from a consumer requirement."
  },
  {
    startTime: 5926.98,
    person: 'Rachel',
    text: " So therefore, the things we're talking about are, well, what data do you need?"
  },
  { startTime: 5930.9, person: 'Rachel', text: ' Where is it coming from?' },
  { startTime: 5932.4, person: 'Rachel', text: ' Where do you want to land it?' },
  { startTime: 5933.96, person: 'Rachel', text: ' What format do you need to access it in?' },
  {
    startTime: 5936.84,
    person: 'Rachel',
    text: " If it's coming from a third party, okay, it's not available on Christmas Day, Boxing Day, New Year's Day, what do you want to happen?"
  },
  { startTime: 5944.48, person: 'Rachel', text: " So it's all the business requirements as well." },
  {
    startTime: 5947.3,
    person: 'Rachel',
    text: " But that's where, if you look at Andrew's book, it's not a leaflet."
  },
  {
    startTime: 5951.7,
    person: 'Rachel',
    text: " It's quite long, because the contracts incorporate quite a lot of stuff."
  },
  {
    startTime: 5956.82,
    person: 'Rachel',
    text: " As you say, you can put anything in it and then look at how you're going to use it."
  },
  {
    startTime: 5961.54,
    person: 'Rachel',
    text: ' So I would say what you are talking about is can, and is very much incorporated in the contracts for a lot of people.'
  },
  {
    startTime: 5969.84,
    person: 'Rachel',
    text: " But there's a different way of using it as well, in terms of the design setup monitoring of what's actually going on, being built and then ongoing."
  },
  { startTime: 5979.04, person: 'Andrew', text: " Yeah, yeah, I think that's right." },
  {
    startTime: 5981.1,
    person: 'Andrew',
    text: " Also, I think we're using the term metadata, it's quite a broad term."
  },
  {
    startTime: 5985.18,
    person: 'Andrew',
    text: " So the stuff you're talking about, Karol, was, yeah, for example, we can monitor the latency of an event, and we generate a number about how old time that was, that is metadata."
  },
  {
    startTime: 5998.38,
    person: 'Andrew',
    text: ' And you might refer to that in the Kibana chart or Prometheus or something, or whatever it might be.'
  },
  { startTime: 6004.2, person: 'Andrew', text: " So that is, arguably, that's metadata." },
  {
    startTime: 6006.22,
    person: 'Andrew',
    text: ' That is a bit of data that describes the event.'
  },
  { startTime: 6010.68, person: 'Andrew', text: ' So metadata is quite a broad definition.' },
  {
    startTime: 6013.4,
    person: 'Andrew',
    text: " And that sort of stuff wouldn't be in a data contract, neither would it be in an integration contract."
  },
  {
    startTime: 6017.58,
    person: 'Andrew',
    text: " It's just metadata that was created, updated, moved between systems."
  },
  {
    startTime: 6021.5,
    person: 'Andrew',
    text: ' So we still have all of that in a data platform, as you would in an integration platform, or at least we do, because we built that platform in-house and we have the ability to do that.'
  },
  { startTime: 6031.74, person: 'Andrew', text: ' And that is metadata.' },
  {
    startTime: 6032.94,
    person: 'Andrew',
    text: " But I think when we talk about data contracts and metadata within that, like Rachel was saying, that's generally data that comes from people describing how they expect this data product to behave, or what should be in it, or how it should perform."
  },
  {
    startTime: 6048.84,
    person: 'Andrew',
    text: " So it's generally from the business, like Rachel was saying."
  },
  {
    startTime: 6053.36,
    person: 'Andrew',
    text: ' So I know of the definition of metadata, I think, in data contracts, and just all metadata that might be associated with data moving around.'
  },
  {
    startTime: 6061.1,
    person: 'Karol',
    text: ' I see this is where the disconnect here happened.'
  },
  {
    startTime: 6067.48,
    person: 'Karol',
    text: ' We were on two different levels of abstractions there.'
  },
  {
    startTime: 6072.58,
    person: 'Karol',
    text: " And that metadata, what you were describing, it's nowhere near the level of abstraction I'm dealing with in terms of application integration."
  },
  {
    startTime: 6082.58,
    person: 'Karol',
    text: ' But if I jump to the business process level, then I would be seeing that metadata there, definitely.'
  },
  {
    startTime: 6092.1,
    person: 'Karol',
    text: " But for me as an integration architect, I'm very rarely at that level, or I'm very rarely invited to participate at that level of a conversation, which is a shame."
  },
  {
    startTime: 6102.68,
    person: 'Rachel',
    text: ' It goes back to you having the information that you need and the bit that interests you.'
  },
  {
    startTime: 6108.86,
    person: 'Rachel',
    text: " It doesn't mean that you shouldn't have the rest of the data."
  },
  {
    startTime: 6114.74,
    person: 'Rachel',
    text: ' The concept of data contracts is not specific just to data mesh, though, and can be used across the operational space.'
  },
  { startTime: 6123.96, person: 'Rachel', text: ' So it should still be there.' },
  { startTime: 6128.1, person: 'Karol', text: ' Should.' },
  { startTime: 6129.68, person: 'Rachel', text: ' Go and ask people.' },
  { startTime: 6130.78, person: 'Rachel', text: ' Can you see it?' },
  {
    startTime: 6132.64,
    person: 'Karol',
    text: ' Like I said at the beginning, I can do application integration without the data architect.'
  },
  {
    startTime: 6138.84,
    person: 'Karol',
    text: ' So same way I could do application integration without a business analyst.'
  },
  { startTime: 6143.6, person: 'Karol', text: ' Would that be a good quality of an integration?' },
  { startTime: 6147.36, person: 'Karol', text: ' Probably not.' },
  {
    startTime: 6148.82,
    person: 'Karol',
    text: ' I would have to double down as a data architect and a business analyst in that context.'
  },
  { startTime: 6153.86, person: 'Karol', text: ' Would I do a good job at that?' },
  { startTime: 6156.8, person: 'Karol', text: ' Maybe, maybe not.' },
  {
    startTime: 6158.5,
    person: 'Karol',
    text: " I wouldn't be so sure about my skills in that regard because I'm not trained to do business analysis."
  },
  { startTime: 6164.54, person: 'Karol', text: " I'm not trained to do data architecture." },
  {
    startTime: 6166.5,
    person: 'Karol',
    text: ' But this is a level of abstraction that would be good to have.'
  },
  { startTime: 6173.08, person: 'Karol', text: ' This is what I love about domain-driven design.' },
  {
    startTime: 6175.04,
    person: 'Karol',
    text: " We're bringing everybody in the room, no matter what level of abstraction, and then we're laying out this in a ubiquitous language, and we're building that understanding."
  },
  {
    startTime: 6183.62,
    person: 'Karol',
    text: " So then we're having an understanding of what metadata is on each of those levels."
  },
  {
    startTime: 6189.94,
    person: 'Karol',
    text: ' And then as we go down to implementation, then we have a more refined metadata of a more specific object or a more specific smaller piece of thing because an instance of data is really very specific.'
  },
  {
    startTime: 6208.32,
    person: 'Karol',
    text: " When we're talking about the business process, that's very vague in that sense."
  },
  {
    startTime: 6215.6,
    person: 'Karol',
    text: ' And again, different scope, different abstraction layer, different metadata in that sense.'
  },
  {
    startTime: 6222.86,
    person: 'Karol',
    text: ' And maybe less relevant for me from an application integration perspective and designing that interoperability.'
  },
  {
    startTime: 6231.44,
    person: 'Karol',
    text: ' But then again, something that I learned also recently about managing also requirements, something that might be a requirement for me, for other people might be a result of them working with requirements.'
  },
  {
    startTime: 6247.02,
    person: 'Karol',
    text: " And again, that's the jump through those abstraction layers."
  },
  {
    startTime: 6250.88,
    person: 'Karol',
    text: ' Every time I go down an abstraction layer, what was the result of the work on that abstraction layer becomes the requirements on this abstraction layer.'
  },
  {
    startTime: 6259.52,
    person: 'Karol',
    text: ' And further down, the same thing happens with another result in this cascading effect.'
  },
  {
    startTime: 6265.04,
    person: 'Karol',
    text: ' And I think this exactly happened here in this discussion about those metadata, that we have this cascading effect where what you say is metadata for me turns into functional and non-functional requirements towards interoperability design.'
  },
  { startTime: 6285.03, person: 'Karol', text: ' That is not metadata anymore.' },
  {
    startTime: 6288.22,
    person: 'Karol',
    text: " That's something that I action in my work, in design, and then later in implementation as a realisation of that design."
  },
  {
    startTime: 6298.82,
    person: 'Karol',
    text: " It's an interesting observation, like really live that, oh, we were supposed to talk about the disconnect in the language."
  },
  { startTime: 6308.46, person: 'Karol', text: ' We actually stumbled right into it.' },
  { startTime: 6311.38, person: 'Karol', text: ' There we go.' },
  { startTime: 6312.34, person: 'Rachel', text: ' There you go.' },
  {
    startTime: 6312.54,
    person: 'Rachel',
    text: " Live demonstrations, they don't usually work, but this one was teed up specially."
  },
  { startTime: 6318.74, person: 'Andrew', text: ' Yeah.' },
  {
    startTime: 6319.22,
    person: 'Andrew',
    text: " It's really interesting, isn't it, how we've pulled into that."
  },
  {
    startTime: 6322.02,
    person: 'Andrew',
    text: " But I think it's also interesting how the day contract is kind of riding from the top, like catching business requirements, and then all the way down to how it's been, how we use it, it's really used, driving actions in the platform we're building."
  },
  {
    startTime: 6337.72,
    person: 'Andrew',
    text: ' Like I described also a contract-driven platform where almost everything in the platform is driven by the contract.'
  },
  {
    startTime: 6344.04,
    person: 'Andrew',
    text: ' So you describe the data, and the platform will automate governance, the platform will automate access management, the platform will automate the quality checks and the SLO reporting and things like that.'
  },
  {
    startTime: 6356.28,
    person: 'Andrew',
    text: " So it's interesting, yeah, how the day contract is kind of, it meets different needs for different people at different layers, and right down to, I operate more my day-to-day job, really, more like you do, or like the actual moving things around, or building a platform that allows people to move things around."
  },
  {
    startTime: 6374.42,
    person: 'Andrew',
    text: " And there, I'm very much like, what if this contract can use to take action to build to deploy the infrastructure they need, to set up backups on the cage and space just they've defined, or they didn't find, give a sensible default, and start looking into data retention systems so we can complete duty card solutions and do things like that."
  },
  {
    startTime: 6397.5,
    person: 'Andrew',
    text: " So we're doing it all from the actions, but also up to the top, where I operate more"
  },
  {
    startTime: 6403,
    person: 'Andrew',
    text: ' these days as well, but as long as we make sure we spend a lot of time capturing the business'
  },
  {
    startTime: 6407.24,
    person: 'Andrew',
    text: " requirements, making sure they're captured, making sure they're kept up-to-date as data"
  },
  {
    startTime: 6411.74,
    person: 'Andrew',
    text: " evolves, they're not forgotten about, hopefully they're stored with the data, and maybe there"
  },
  {
    startTime: 6416.16,
    person: 'Andrew',
    text: " are things in there that aren't directly actionable, things like describing the data,"
  },
  {
    startTime: 6419.98,
    person: 'Andrew',
    text: ' things like ownership, and hours of business hours of support, which might not necessarily'
  },
  {
    startTime: 6427.5,
    person: 'Andrew',
    text: " take any action in the platform, but it's very important for someone using the data to decide"
  },
  {
    startTime: 6431.04,
    person: 'Andrew',
    text: ' how they can use it, can they rely on it 24-7, or only 9-5, and that makes a difference to how'
  },
  {
    startTime: 6437.5,
    person: 'Andrew',
    text: " they use it, and that's a human decision, not something you do in the platform."
  },
  {
    startTime: 6442.26,
    person: 'Andrew',
    text: ' So yeah, interesting how this conversation led us here, and interesting how broadly the contract has been used up and down the stack.'
  },
  {
    startTime: 6450.04,
    person: 'Karol',
    text: ' And now looking at the metadata being ownership, for example, right?'
  },
  {
    startTime: 6457.9,
    person: 'Karol',
    text: " Again, if you're looking at ownership from a perspective of a data contract on the business level, you have a business unit, or somebody in the business, like literally a person, right?"
  },
  { startTime: 6469.54, person: 'Karol', text: ' Being the owner of said data.' },
  {
    startTime: 6472.42,
    person: 'Karol',
    text: ' And then when I come down to the architecture level or the implementation level, is that the same owner?'
  },
  { startTime: 6481.16, person: 'Rachel', text: ' We got it in again!' },
  {
    startTime: 6485.58,
    person: 'Karol',
    text: ' Yeah, but you may have the same metadata type, owner, or ownership, right?'
  },
  { startTime: 6492.76, person: 'Karol', text: ' But is it the same value there?' },
  {
    startTime: 6494.86,
    person: 'Karol',
    text: " No, because in architecture, I'm coming down to the relevant systems that are communicating, that hold that data, that store that data, and the owner is basically somebody that's taking care of that particular system."
  },
  { startTime: 6510.84, person: 'Karol', text: ' But then if I go down to...' },
  {
    startTime: 6512.52,
    person: 'Rachel',
    text: " Again, it depends on what you're going to be building, so absolutely, but having that ownership hierarchy is really, really important."
  },
  {
    startTime: 6520.8,
    person: 'Rachel',
    text: ' I believe there was a really good talk at Data Mesh Live last year about it.'
  },
  { startTime: 6527.46, person: 'Rachel', text: " It wasn't recorded." },
  {
    startTime: 6530.94,
    person: 'Karol',
    text: " By the way, Data Mesh Live next year, I've been politely asked by organisers to just pop in a lovely QR here."
  },
  { startTime: 6539.88, person: 'Karol', text: ' Fantastic conference.' },
  {
    startTime: 6543.46,
    person: 'Karol',
    text: " Haven't attended much of talks in Data Mesh, but that was next door doing domain driven design with wonderful people, wonderful conversations alongside, outside of the specific talks."
  },
  { startTime: 6555.14, person: 'Karol', text: ' So, Belgium, Antwerp next year in June.' },
  {
    startTime: 6559.52,
    person: 'Karol',
    text: " I'll probably be there, probably again attending the DDP Europe instead, but maybe this time I'll get the all-in ticket."
  },
  { startTime: 6567.04, person: 'Rachel', text: " We're getting those crossovers." },
  {
    startTime: 6568,
    person: 'Rachel',
    text: ' This is the great thing about these two conferences being co-located.'
  },
  {
    startTime: 6571.84,
    person: 'Rachel',
    text: ' It allows us to start having these conversations and bringing these cross-cutting concerns together rather than having it siloed.'
  },
  { startTime: 6579.4, person: 'Karol', text: ' I mean, who knows?' },
  {
    startTime: 6580.16,
    person: 'Karol',
    text: " Maybe we'll turn this into a talk for DDP or Data Mesh just to crossover."
  },
  { startTime: 6588.26, person: 'Rachel', text: " It's not a bad idea, guys." },
  {
    startTime: 6592.04,
    person: 'Karol',
    text: ' That would definitely be something because just stumbling on stage onto those language'
  },
  {
    startTime: 6596.98,
    person: 'Karol',
    text: ' problems and understanding semantic understanding, for example, of metadata or what are metadata'
  },
  {
    startTime: 6601.96,
    person: 'Karol',
    text: ' contracts and how somebody else understands them might just show the community'
  },
  {
    startTime: 6611.2,
    person: 'Karol',
    text: ' how problematic this actually is and building that common language and a ubiquitous language'
  },
  {
    startTime: 6618.64,
    person: 'Karol',
    text: " and understanding of what we're doing on what abstraction level."
  },
  { startTime: 6623.36, person: 'Rachel', text: ' There is a huge crossover as well.' },
  {
    startTime: 6626.62,
    person: 'Rachel',
    text: " Obviously, coming more from the operational, the software engineering side, I had the experience of DDD, so it's interesting stepping back and looking at that."
  },
  {
    startTime: 6636.62,
    person: 'Rachel',
    text: ' We used a lot of the techniques, the collaborative modelling techniques in order to establish what our domains are, what our data products are.'
  },
  { startTime: 6646.94, person: 'Rachel', text: " It's the same kind of approaches." },
  { startTime: 6648.78, person: 'Rachel', text: " There's not that much difference." },
  { startTime: 6653.02, person: 'Rachel', text: ' We should be bringing it all together.' },
  {
    startTime: 6655.46,
    person: 'Karol',
    text: " From a perspective of, let's say, event-storming and then cutting out bounded context out of the event-storming session, I mean, does that really differ that much?"
  },
  { startTime: 6671.66, person: 'Karol', text: " I don't think it differs methodically." },
  { startTime: 6674.94, person: 'Karol', text: ' The focus is instead of on the process.' },
  {
    startTime: 6679.18,
    person: 'Rachel',
    text: ' Event-storming is where I started with all of this and our Data Mesh journey started with a lot of event-storming sessions with the business.'
  },
  { startTime: 6689.2, person: 'Karol', text: ' Alberto, come to our live stream.' },
  { startTime: 6694.9, person: 'Karol', text: " Maybe he'll be watching someday." },
  {
    startTime: 6696.98,
    person: 'Karol',
    text: " I don't think he's watching right now, but it would be fun to talk to Alberto about event-storming."
  },
  { startTime: 6703.28, person: 'Karol', text: " That's a completely different topic." },
  {
    startTime: 6705.18,
    person: 'Karol',
    text: ' These are analogous because if we talk about operational systems and we cut out the bounded context and the subdomains, domains of those systems, then this is most of the times one-to-one to data architecture and then the domain partitioning of data.'
  },
  {
    startTime: 6724.14,
    person: 'Karol',
    text: ' That is a very relevant exercise to just cross over from Data Mesh to DDD and back again to take those learnings and apply them in that field.'
  },
  {
    startTime: 6735.74,
    person: 'Karol',
    text: " I know that I'm taking from application integration, I'm taking a lot from DDD because we can also apply the main partitioning within data movements for a change."
  },
  {
    startTime: 6747.92,
    person: 'Karol',
    text: " We don't have to persist anything to apply domain boundaries and bound context."
  },
  {
    startTime: 6753.8,
    person: 'Karol',
    text: ' Oh, and context mapping that get me started there, I spent over three hours explaining how that works in integration platforms to Philip, my co-host at the workshop.'
  },
  {
    startTime: 6766.88,
    person: 'Karol',
    text: " He couldn't believe me that this is actually a realistic thing that happens in integration platforms, but there we are."
  },
  { startTime: 6773.94, person: 'Karol', text: ' Took DDD, applied it to integration platforms.' },
  { startTime: 6776.34, person: 'Karol', text: " It's like, wow, a whole new world out there." },
  {
    startTime: 6780.14,
    person: 'Karol',
    text: ' Crossing those boundaries and especially when three conferences at the same time are in the same space, these are some amazing conversations to be had there with people from Infocentric, from Data Mesh, from DDD.'
  },
  { startTime: 6795.52, person: 'Karol', text: " There's a really interesting mix there." },
  { startTime: 6798.36, person: 'Karol', text: ' Very much worthwhile attending.' },
  { startTime: 6801.72, person: 'Karol', text: " We've all been there." },
  {
    startTime: 6804.2,
    person: 'Karol',
    text: " It's quite an interesting thing, especially in the evening when you just sit down in the lobby and talk with people over your experiences and the differences in your experiences, and there are plenty."
  },
  { startTime: 6815.74, person: 'Rachel', text: ' And the similarities.' },
  { startTime: 6816.52, person: 'Karol', text: ' And similarities as well, yes.' },
  {
    startTime: 6820.8,
    person: 'Karol',
    text: " But then, talking about differences, I think this is maybe the last topic for today, given that we've been talking for nearly two hours now."
  },
  { startTime: 6831.84, person: 'Karol', text: ' Organisational barriers.' },
  {
    startTime: 6834.5,
    person: 'Karol',
    text: " Rachel, I know that you're quite opinionated on that."
  },
  {
    startTime: 6838.68,
    person: 'Karol',
    text: ' You had a very strong statement about technology being a barrier or not in an organisation.'
  },
  {
    startTime: 6846.78,
    person: 'Karol',
    text: ' Hit us with this last pieces of wisdom for the end of the stream before we end.'
  },
  { startTime: 6853.92, person: 'Karol', text: " Let's dive into it." },
  {
    startTime: 6856.5,
    person: 'Rachel',
    text: ' It kind of ties in probably a little bit with what we were talking about earlier on.'
  },
  {
    startTime: 6862.4,
    person: 'Rachel',
    text: " So, it's one of the great things about kind of like being an architect and working with people both on the technical side and the business side and across multiple different projects is you get some interesting opinions expressed."
  },
  {
    startTime: 6877.56,
    person: 'Rachel',
    text: " And one of those kind of common opinions is, do you know what, what's the technology going to allow us to do?"
  },
  {
    startTime: 6886.06,
    person: 'Rachel',
    text: " And there was a beautiful moment where I wrote on a whiteboard, because, hey, I love whiteboards, I'm an architect."
  },
  {
    startTime: 6893.16,
    person: 'Rachel',
    text: ' Technology is not a blocker, and I put my name to it.'
  },
  {
    startTime: 6896.42,
    person: 'Rachel',
    text: ' They took a picture, and this gets shown to me every kind of incident that happens.'
  },
  {
    startTime: 6902.22,
    person: 'Rachel',
    text: " And I'm like, yeah, but is technology the blocker?"
  },
  {
    startTime: 6905.22,
    person: 'Rachel',
    text: ' Or is it something or someone in the organisation?'
  },
  {
    startTime: 6908.84,
    person: 'Rachel',
    text: " Is it the lack of design thinking that's gone into something?"
  },
  { startTime: 6912.4, person: 'Rachel', text: ' Is it the lack of product thinking?' },
  {
    startTime: 6914.28,
    person: 'Rachel',
    text: ' Is it the inability to be able to evolve with modern techniques?'
  },
  {
    startTime: 6920.66,
    person: 'Rachel',
    text: ' Every time it has been something on the people in the organisation side, rather than the technology.'
  },
  {
    startTime: 6928.3,
    person: 'Rachel',
    text: " And that's also one of the great things about data mesh being technology agnostic."
  },
  {
    startTime: 6933.48,
    person: 'Rachel',
    text: ' You need good technology to implement it well, but you can absolutely have product and design thinking and put the structure and the metadata around data product without having any amazing technology in place.'
  },
  {
    startTime: 6951.32,
    person: 'Rachel',
    text: " So, it's an interesting approach and challenge to get people on the business side, their expectations and being able to drive things with that understanding that technology is not the blocker."
  },
  { startTime: 6970.37, person: 'Karol', text: ' I mean, I can definitely get behind that.' },
  {
    startTime: 6975.03,
    person: 'Rachel',
    text: " Yeah, that's a great statement that Stefan's just put up there."
  },
  {
    startTime: 6978.93,
    person: 'Rachel',
    text: " It's the lack of accountability and willingness to take to it."
  },
  {
    startTime: 6982.53,
    person: 'Rachel',
    text: " It's also the lack of decisiveness and decision making that goes with that as well, I would say."
  },
  { startTime: 6991.35, person: 'Karol', text: ' Yeah.' },
  { startTime: 6992.03, person: 'Karol', text: ' A lot of the times, yes.' },
  {
    startTime: 6996.17,
    person: 'Karol',
    text: " Or just not willingness to see the problem or the sheer will to ignore the problem when everybody's flagging the problem all over."
  },
  {
    startTime: 7011.77,
    person: 'Karol',
    text: " There's so many in terms of, again, tying that down to Andrew Harmel-Law talk at DDD Europe, we're dealing with the second biggest problem in software architecture."
  },
  {
    startTime: 7026.57,
    person: 'Karol',
    text: ' Yeah, we can deal with it because we can solve it by logic, by design, by working around it and implementing that in a very specific way.'
  },
  { startTime: 7037.11, person: 'Karol', text: ' Are we going to solve the first problem?' },
  { startTime: 7042.71, person: 'Rachel', text: ' Not until we get people architects.' },
  { startTime: 7044.87, person: 'Karol', text: ' Not until we get people architects, yeah.' },
  { startTime: 7048.87, person: 'Karol', text: ' And that problem is basically everywhere.' },
  {
    startTime: 7053.47,
    person: 'Karol',
    text: " The organisation, the people are the problem, in essence, because we're different."
  },
  {
    startTime: 7059.89,
    person: 'Karol',
    text: ' We have different opinions, different agendas, different things to do.'
  },
  {
    startTime: 7064.65,
    person: 'Rachel',
    text: " And we're pulling different languages that makes communication hard, understanding hard."
  },
  {
    startTime: 7070.75,
    person: 'Karol',
    text: ' Different dictionaries or different architecture, not architecture, different opinions over what a specific role should facilitate.'
  },
  {
    startTime: 7079.27,
    person: 'Karol',
    text: ' Like, for example, I heard that an architect should not advise on organisational changes or the changes in the skill sets of people in teams.'
  },
  {
    startTime: 7088.57,
    person: 'Karol',
    text: ' I mean, I can not do it, but would that be of benefit?'
  },
  { startTime: 7096.87, person: 'Karol', text: " And, again, that's not a technical issue." },
  { startTime: 7099.31, person: 'Karol', text: ' Tech is not the problem.' },
  {
    startTime: 7100.47,
    person: 'Karol',
    text: " It's the people, the organisation, the processes, often without consideration for what we're trying to achieve."
  },
  {
    startTime: 7111.15,
    person: 'Rachel',
    text: " If you think of one of the big common reasons for people to change their data architecture, whether it's data measure or anything else that they want to pick up, it's about providing access to data."
  },
  {
    startTime: 7124.63,
    person: 'Rachel',
    text: " There is no point in providing access to data if you don't have people who understand what to do with it and what they're looking at when it's provided."
  },
  {
    startTime: 7135.59,
    person: 'Rachel',
    text: " So as an architect, I certainly have a very keen interest in raising the data literacy in our organisation, and I would be very offended if people said that wasn't part of my role or part of my interest, because there's no point in me doing my job if it's not providing business value at the end of it, and there's no business value if people can't use the data."
  },
  {
    startTime: 7159.54,
    person: 'Karol',
    text: ' Kind of feel the same with literacy over moving data and utilising that in a manner that is aligned with the business.'
  },
  { startTime: 7172.08, person: 'Karol', text: ' Same thing, different scope of field.' },
  { startTime: 7176.8, person: 'Andrew', text: ' Andrew?' },
  { startTime: 7178.28, person: 'Andrew', text: ' I agree with all that.' },
  {
    startTime: 7181.26,
    person: 'Andrew',
    text: " Sometimes people will talk about, they say it's politics, and"
  },
  {
    startTime: 7185.22,
    person: 'Andrew',
    text: " try and use it as a term that dismisses all of this, like politics, I can't do that, but"
  },
  {
    startTime: 7192.26,
    person: 'Andrew',
    text: " it's politics just what happens when people get together and have a different view,"
  },
  {
    startTime: 7196.98,
    person: 'Andrew',
    text: " different backgrounds, different experiences, and maybe everyone's a people architect,"
  },
  {
    startTime: 7203.04,
    person: 'Andrew',
    text: ' all architects are people architects first, I think, and subject matter is almost secondary.'
  },
  {
    startTime: 7210.84,
    person: 'Andrew',
    text: " You have to think about data mesh as well, it's always about the social, technological thing, it's always about the communication first, really."
  },
  { startTime: 7219.64, person: 'Andrew', text: " It's great for machine applications," },
  {
    startTime: 7220.7,
    person: 'Andrew',
    text: " that's always about why we're doing this, what's the point, so communication with humans,"
  },
  {
    startTime: 7225.54,
    person: 'Andrew',
    text: " it's the most important thing, and actually, the way I've grown over the last five or six"
  },
  {
    startTime: 7229.4,
    person: 'Andrew',
    text: " years I've been doing this, I was an engineer, leading the data platform team, eventually"
  },
  {
    startTime: 7235.24,
    person: 'Andrew',
    text: ' started getting involved in architecture, and the idea I had, the hardest part was the'
  },
  {
    startTime: 7244.1,
    person: 'Andrew',
    text: ' communication, the platform was really easy, it was trivial almost, the hardest part was'
  },
  {
    startTime: 7250.42,
    person: 'Andrew',
    text: ' communication, getting people into this idea of doing data differently, I was lucky I had a really'
  },
  {
    startTime: 7258.42,
    person: 'Andrew',
    text: " great product manager at the time, she helped me a lot to learn new skills, but now, if I didn't"
  },
  {
    startTime: 7264.38,
    person: 'Andrew',
    text: " learn my skills, I wouldn't be in the position I'm in now, it's the most important part,"
  },
  {
    startTime: 7272.4,
    person: 'Andrew',
    text: " you can't get any of this done, it's the hardest part, the most important part."
  },
  {
    startTime: 7278.98,
    person: 'Karol',
    text: " I think if I haven't worked on my people skills, I would be still sitting in a cubicle somewhere, and we wouldn't be having this conversation today!"
  },
  {
    startTime: 7288.54,
    person: 'Andrew',
    text: " That's fine, some people want to just do the code, but if you want to become a senior,"
  },
  {
    startTime: 7295.04,
    person: 'Andrew',
    text: " you have to be, you have to improve people's skills, and if you want to have great impact,"
  },
  {
    startTime: 7298.68,
    person: 'Andrew',
    text: ' then just write code you can write in a day, you have to work with people, you have to have that'
  },
  {
    startTime: 7303.88,
    person: 'Andrew',
    text: ' impact, and the more you can do that, the greater impact you can have, the higher up you get in your'
  },
  { startTime: 7310.02, person: 'Andrew', text: " conversation, if that's your goal." },
  {
    startTime: 7314.54,
    person: 'Karol',
    text: " So parting words with Baden, if you want to do anything, invest in being a people architect, all the technical domains, technical architecture stuff is fun, but people architect, that's the way to go, try that and be the people architect."
  },
  {
    startTime: 7332.38,
    person: 'Karol',
    text: " All right, before we finish, before we go, I'm going to just switch into a one short slide for a moment to chop the feed."
  },
  {
    startTime: 7340.98,
    person: 'Karol',
    text: " So coming up next from Loosely Coupled, that's in September, we're going to have a little bit"
  },
  {
    startTime: 7349.42,
    person: 'Karol',
    text: " of a break, the next week there is no live stream, so we're having federated API management,"
  },
  {
    startTime: 7354.62,
    person: 'Karol',
    text: " another technical topic this time around, and we're going to be having Adib Tahir from API"
  },
  {
    startTime: 7360.44,
    person: 'Karol',
    text: " WIS, which is an API management federation solution, and we're going to have a bit of a"
  },
  {
    startTime: 7367.86,
    person: 'Karol',
    text: " technical discussion of what is that problem, I think that's going to be quite an interesting"
  },
  { startTime: 7372.46, person: 'Karol', text: ' one.' },
  {
    startTime: 7373.42,
    person: 'Karol',
    text: " Now, if you manage to survive with us, or watching the recording on YouTube or LinkedIn, feel free to just scan the QR code, visit Bridging the Gap, read more, in the menu there's a tab called Upcoming Events, you'll be able to see all the events past and future from Bridging the Gap, including Loosely Coupled and all the visits of conferences and meetups."
  },
  { startTime: 7398.88, person: 'Karol', text: ' Subscribe to our' },
  {
    startTime: 7399.74,
    person: 'Karol',
    text: " sub-stack, we publish articles, they're fairly technical, we're having a bit of a looser approach"
  },
  {
    startTime: 7406.64,
    person: 'Karol',
    text: ' here on the stream, and subscribe to the YouTube channel, it would be fun to have you visit the'
  },
  {
    startTime: 7414.82,
    person: 'Karol',
    text: ' live stream as they are, so you get the notifications that those live streams are coming up,'
  },
  {
    startTime: 7421.9,
    person: 'Karol',
    text: " or just follow me on LinkedIn, then you'll also get some information about"
  },
  {
    startTime: 7428.24,
    person: 'Karol',
    text: ' the live streams, because all of them are on LinkedIn, of course.'
  },
  { startTime: 7432.14, person: 'Karol', text: ' That said, Rachel, Andrew,' },
  {
    startTime: 7435.9,
    person: 'Karol',
    text: ' thank you for joining, it was a pleasure discussing and stumbling into our communication'
  },
  {
    startTime: 7441.46,
    person: 'Karol',
    text: " language problems, stumbling into those exact problems that we're here to address,"
  },
  {
    startTime: 7446.98,
    person: 'Karol',
    text: " that was a fun mishap to be had, great topic, and there's a lot more to explore it seems,"
  },
  {
    startTime: 7453.72,
    person: 'Karol',
    text: " at least for me, I learned a lot, I learned that I, again, don't know everything,"
  },
  {
    startTime: 7459.24,
    person: 'Karol',
    text: ' not the wisest person in the room, thank you for that, thank you for humbling me, and yeah, parting'
  },
  { startTime: 7465.56, person: 'Karol', text: ' words.' },
  {
    startTime: 7468.22,
    person: 'Rachel',
    text: " Thank you for having us, really, I've imparted all the wisdom I have, if you can call it that, and I'm looking forward to tuning in to your next live stream."
  },
  {
    startTime: 7478.94,
    person: 'Andrew',
    text: " Yeah, it's been really enjoyable, thank you for having us, I think really, yeah, really great discussion, thank you."
  },
  {
    startTime: 7484.7,
    person: 'Karol',
    text: " All right, all right, thank you, Dan, and good night, everybody, or, well, whatever the time of the day is that you're watching this."
  }
])
</script>

<style scoped></style>
