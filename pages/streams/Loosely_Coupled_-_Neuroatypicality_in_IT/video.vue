<template>
  <div class="w-full">
    <StreamLayout
      :transcript="transcript"
      name="Loosely Coupled - Neuroatypicality in IT"
      video-id="5u9em8r0th8"
    />
  </div>
</template>

<script lang="ts" setup>
const transcript = ref([
  {
    startTime: 115.08,
    person: 'Karol',
    text: ' Good morning, good afternoon, good evening everybody and welcome back to another loosely coupled live stream.'
  },
  {
    startTime: 122.4,
    person: 'Karol',
    text: " My name is Karol Skrzymowski and I'll be your host tonight."
  },
  {
    startTime: 125.5,
    person: 'Karol',
    text: ' And before we begin even touching upon the topic and naming the topic, I do wish to make a disclaimer first.'
  },
  {
    startTime: 133.38,
    person: 'Karol',
    text: " So, because we're touching a very sensitive topic of psychological health, I want to say that in this live stream, we are not given any medical advice."
  },
  {
    startTime: 146.76,
    person: 'Karol',
    text: ' Neither me as a host nor my guests are medical professionals and we cannot act in such capacity and we cannot provide any diagnosis of our neurotypicality.'
  },
  {
    startTime: 157.06,
    person: 'Karol',
    text: ' If you by chance require medical help, psychological attention, please contact a specialist such as a licenced psychiatrist or go to your nearest general practitioner and have a conversation.'
  },
  {
    startTime: 171.16,
    person: 'Karol',
    text: ' We can only talk about our experiences, the work we do, if any, I as a self-advocate for ADHD and my guest as a coach.'
  },
  { startTime: 182.46, person: 'Karol', text: ' So, please keep that in mind during the stream.' },
  {
    startTime: 187.82,
    person: 'Karol',
    text: " And today in loosely coupled, we're touching upon a very, well, sensitive topic being neuroatypicality in IT."
  },
  {
    startTime: 195.92,
    person: 'Karol',
    text: ' And my guest tonight is Joanna Gruszczyńska, a ADHD and job coach.'
  },
  {
    startTime: 203.32,
    person: 'Karol',
    text: ' And this is a person who was bored at work to the extreme.'
  },
  {
    startTime: 209.04,
    person: 'Karol',
    text: ' And as she got a diagnosis for ADHD, she figured out that she might actually make it her job and help people not to flog a dead horse and be miserable at work.'
  },
  {
    startTime: 221.64,
    person: 'Karol',
    text: " And for the last three years, she's been coaching people what to do with their job, especially if they're neuroatypical."
  },
  { startTime: 228.46, person: 'Karol', text: ' So, Joanna, welcome to the stream.' },
  { startTime: 231.24, person: 'Joanna', text: ' Thank you.' },
  { startTime: 232.04, person: 'Joanna', text: ' Thank you very much for having me.' },
  {
    startTime: 234.16,
    person: 'Joanna',
    text: " I'm really excited to talk to you and to our guests."
  },
  { startTime: 239.93, person: 'Karol', text: ' All right.' },
  {
    startTime: 241.29,
    person: 'Karol',
    text: ' So, three years as a job and ADHD coach, how does that happen?'
  },
  {
    startTime: 246.53,
    person: 'Karol',
    text: ' Tell us a bit of your story, because people already know that I am neuroatypical and I have ADHD and a little bit of an autism.'
  },
  { startTime: 253.61, person: 'Karol', text: " But what's your story in that area?" },
  {
    startTime: 257.19,
    person: 'Joanna',
    text: ' Well, my story is that I switched careers like five, even more times before I got a diagnosis in my late 20s.'
  },
  { startTime: 269.03, person: 'Joanna', text: ' So, I was a shop assistant.' },
  { startTime: 271.49, person: 'Joanna', text: ' I was a translator.' },
  { startTime: 272.95, person: 'Joanna', text: ' I was an interpreter.' },
  {
    startTime: 274.39,
    person: 'Joanna',
    text: " I was a, I don't know, QC specialist in IT, whatever."
  },
  {
    startTime: 279.49,
    person: 'Joanna',
    text: ' And I just every two years, one year, I was just switching and, you know, getting the spark from a different area.'
  },
  {
    startTime: 287.23,
    person: 'Joanna',
    text: ' And every time I believe that, okay, this is something that will actually keep me there for longer than a year or so.'
  },
  { startTime: 294.11, person: 'Joanna', text: " And magically, it didn't happen." },
  {
    startTime: 296.95,
    person: 'Joanna',
    text: ' And when I learned that I had ADHD, and I knew that I had to learn something in order to be still interested in what I was doing, I started my career coaching studies.'
  },
  { startTime: 309.57, person: 'Joanna', text: " And then I figured, yeah, let's make those two." },
  {
    startTime: 312.65,
    person: 'Joanna',
    text: " And luckily, well, it's not only sheer luck, let's say, because I knew what to do to make it a bit easier for me to stick around this topic a little longer than six months or 12, by chance."
  },
  { startTime: 329.19, person: 'Joanna', text: ' And I stick to it.' },
  {
    startTime: 331.21,
    person: 'Joanna',
    text: " And I'm happy to, you know, to talk to you about how to be neurodivergent and still, you know, enjoy what you do, even after this honeymoon phase is gone."
  },
  { startTime: 342.95, person: 'Karol', text: ' I can relate to the job switching.' },
  { startTime: 346.19, person: 'Karol', text: " Okay, I've been in IT for 14 years." },
  {
    startTime: 348.67,
    person: 'Karol',
    text: ' And I pretty much all these years, I do the same profession.'
  },
  { startTime: 352.49, person: 'Karol', text: " So I'm an integration specialist." },
  { startTime: 355.97, person: 'Karol', text: " But it's very different every single project." },
  { startTime: 359.43, person: 'Karol', text: ' So that keeps me interested and makes me learn.' },
  {
    startTime: 362.85,
    person: 'Karol',
    text: " But over the years, I've done so many odd jobs, like I was a tender specialist, finding out tenders for building materials."
  },
  { startTime: 372.11, person: 'Karol', text: ' I used to work as a beekeeper.' },
  {
    startTime: 374.17,
    person: 'Karol',
    text: ' I used to work as a semi professional fire dancer, juggler and a clown.'
  },
  { startTime: 381.43, person: 'Karol', text: ' Okay, a travel agent, or in between.' },
  { startTime: 385.59, person: 'Karol', text: ' And then I landed in IT and I stayed.' },
  {
    startTime: 387.49,
    person: 'Karol',
    text: ' So I think that the same part in IT for the last 14 years is more of a my autistic side than my ADHD.'
  },
  { startTime: 395.77, person: 'Karol', text: " But it's changed over the last 14 years." },
  { startTime: 398.31, person: 'Karol', text: " I was a developer, I'm an architect now." },
  { startTime: 400.43, person: 'Karol', text: ' But in being an architect, I also needed change.' },
  { startTime: 404.45, person: 'Karol', text: " So for example, now I'm teaching people." },
  { startTime: 407.11, person: 'Karol', text: " So that's another change." },
  { startTime: 409.07, person: 'Joanna', text: ' So exactly.' },
  {
    startTime: 409.93,
    person: 'Karol',
    text: " And that's, that's the fun part, because he said about learning and the magnificence of this neurotypicality here is that every time I need to teach somebody, I need to learn."
  },
  {
    startTime: 422.45,
    person: 'Joanna',
    text: " Yeah, the most, you know, practical way of learning, just teach somebody else, what you're about to master."
  },
  { startTime: 430.99, person: 'Joanna', text: " And then yeah, then you're golden." },
  { startTime: 432.77, person: 'Joanna', text: ' So yeah.' },
  { startTime: 434.09, person: 'Joanna', text: " All right, let's go in here, I guess." },
  {
    startTime: 436.63,
    person: 'Karol',
    text: " Yeah, of course, that's this, this whole format is about learning, if not, if not for me to learn as a person and grow, it's also for others to dive into a conversation, or just listen to the recording on YouTube afterwards."
  },
  {
    startTime: 455.19,
    person: 'Karol',
    text: " And that's always learning, there's always something new to learn and get to know."
  },
  { startTime: 459.81, person: 'Karol', text: " So let's dig into that." },
  { startTime: 462.45, person: 'Karol', text: ' Why ADHD or Autistic ADHD?' },
  { startTime: 467.77, person: 'Karol', text: ' I never pronounced that in English.' },
  { startTime: 470.19, person: 'Joanna', text: ' AUDHD, I suppose.' },
  { startTime: 472.07, person: 'Karol', text: ' AUDHD.' },
  { startTime: 472.77, person: 'Karol', text: ' Yeah.' },
  { startTime: 473.43, person: 'Karol', text: " In Polish and in Dutch, it's the same." },
  { startTime: 476.45, person: 'Karol', text: " It's like very easy." },
  { startTime: 478.03, person: 'Karol', text: ' But yeah, well, so why is this?' },
  {
    startTime: 482.17,
    person: 'Karol',
    text: ' Why would this be an important topic, especially for IT?'
  },
  { startTime: 485.55, person: 'Joanna', text: ' Mm hmm.' },
  {
    startTime: 487.31,
    person: 'Joanna',
    text: ' Yeah, I mean, there, there has been, you know, some, I mean, the those both, those both topics are getting more and more coverage on social media and media, in general.'
  },
  {
    startTime: 498.71,
    person: 'Joanna',
    text: " Also, there is more awareness among specialists, I mean, doctors, practitioners, which is always, you know, a good thing, because I know five years ago, most of them were convinced that, you know, you just grow out of it when when you're 15."
  },
  { startTime: 511.789, person: 'Joanna', text: ' Right.' },
  { startTime: 512.69, person: 'Karol', text: ' So this is this is peculiar.' },
  { startTime: 515.53, person: 'Karol', text: ' Have you been misdiagnosed?' },
  { startTime: 518.49, person: 'Joanna', text: ' I mean, never.' },
  {
    startTime: 519.83,
    person: 'Joanna',
    text: ' I mean, I my first diagnosis, my first psychiatric diagnosis was depression, but it was a byproduct of ADHD.'
  },
  {
    startTime: 528.87,
    person: 'Joanna',
    text: " So but I don't think it was possible to diagnose it back then."
  },
  {
    startTime: 533.17,
    person: 'Karol',
    text: ' My first diagnosis was, and this is a loose translation from Polish generalised anxiety disorder.'
  },
  {
    startTime: 540.27,
    person: 'Karol',
    text: " Yeah, I don't know what the proper what the proper English term is."
  },
  {
    startTime: 544.37,
    person: 'Joanna',
    text: ' But basically, yeah, yeah, yeah, yeah, yeah, yeah, yeah.'
  },
  {
    startTime: 547.43,
    person: 'Joanna',
    text: " I, these are the two most common, like, let's say byproducts of untreated ADHD, anxiety disorder and depression."
  },
  {
    startTime: 556.01,
    person: 'Joanna',
    text: " I mean, if you don't treat your ADHD, you're either end up super anxious or super depressed in a way."
  },
  {
    startTime: 562.35,
    person: 'Joanna',
    text: " So yeah, that's the I think I think this is this is normally the path that it goes."
  },
  {
    startTime: 567.45,
    person: 'Joanna',
    text: " You know, you get treated for either anxiety or depression, and then it doesn't go away."
  },
  {
    startTime: 571.65,
    person: 'Joanna',
    text: " And then you think, huh, maybe, you know, there's something more to that."
  },
  {
    startTime: 574.99,
    person: 'Karol',
    text: " And I think a very important note to that, which I learned from my my wife, who's also an ADHD coach, is that there are differences, symptomatic differences between men and women, and also children and adults."
  },
  {
    startTime: 591.59,
    person: 'Karol',
    text: ' And because of the studies that were made back long time ago, they were made on adolescent boys, the group of symptoms was narrowed down to that particular age and sex group, while the differences are often very pronounced, well, quite big between men and women and adults and children, which led to a humongous misdiagnosis of women, especially, and adult men as well for a certain time period.'
  },
  {
    startTime: 626.29,
    person: 'Karol',
    text: " And this is one of the factors that now we have a lot more diagnosis of, especially women with ADHD, because now the diagnostic criteria are updated to include the right symptoms for women and that the what's that diva form?"
  },
  { startTime: 643.53, person: 'Karol', text: ' Is it that?' },
  { startTime: 644.19, person: 'Joanna', text: " Yeah, but it's not necessary." },
  {
    startTime: 647.19,
    person: 'Joanna',
    text: " I mean, I think, you know, it's, that's what I said, like, you know, fashion, like ADHD fashion, but it's about, you know, the fashion will be gone, and we will be still stuck with the brains of ours."
  },
  {
    startTime: 660.93,
    person: 'Joanna',
    text: ' Yeah, go shopping and just find something, some, you know, new, trendy accessory.'
  },
  {
    startTime: 667.13,
    person: 'Joanna',
    text: ' But about what you said about about, you know, gender roles and the age, I think, I think, 50 years ago, it was easier to get a job as an ADHD, you know, to not to sit that sit down that long.'
  },
  {
    startTime: 682.75,
    person: 'Joanna',
    text: ' I mean, my mom, you know, she is psychologist, my father work on the construction site.'
  },
  {
    startTime: 688.39,
    person: 'Joanna',
    text: " So, you know, they were always running around and nobody noticed because I think, you know, in general, on every, every, let's say, disorder is at first described by the way that is most, let's say, disturbing to the environment."
  },
  {
    startTime: 705.33,
    person: 'Joanna',
    text: " So, so when it's not disturbing, it doesn't exist."
  },
  { startTime: 707.67, person: 'Joanna', text: ' Who cares?' },
  { startTime: 708.95, person: 'Joanna', text: ' All right.' },
  { startTime: 711.79, person: 'Karol', text: ' True.' },
  {
    startTime: 713.37,
    person: 'Karol',
    text: ' Well, for me, the disturbing fact was that I literally thought that I have agoraphobia.'
  },
  {
    startTime: 718.95,
    person: 'Karol',
    text: " Because my anxiety triggered panic attacks, whenever I was in crowded and loud places, turns out it wasn't agoraphobia, it was overstimulation on the auditory channels that triggered anxiety and panic attacks."
  },
  {
    startTime: 734.37,
    person: 'Karol',
    text: ' And because I was untreated and had on top of that, some level of psychological trauma, this actually led to severe consequences of neglect being psychosomatic paralysis.'
  },
  {
    startTime: 747.55,
    person: 'Karol',
    text: " So if I had a panic attack, and luckily that haven't happened in, you would guess about five or six years now."
  },
  { startTime: 755.45, person: 'Karol', text: ' So hooray for me.' },
  {
    startTime: 757.69,
    person: 'Karol',
    text: " But the situation was that if I had a panic attack, I would become paralysed and it couldn't move a muscle for two hours at a time."
  },
  {
    startTime: 768.77,
    person: 'Karol',
    text: ' And that that tended to happen about three times a week.'
  },
  {
    startTime: 773.37,
    person: 'Karol',
    text: ' Imagine the amount of money I had to spend on physical therapy, because I was very stubborn when the attack happened.'
  },
  {
    startTime: 779.55,
    person: 'Karol',
    text: ' Just by sheer will, I, for example, dragged myself on elbows just to get to anti-anxiety meds.'
  },
  {
    startTime: 786.15,
    person: 'Karol',
    text: ' Yeah, that time to 40 minutes, the amount of pain, muscle pain that I experienced was quite a lot.'
  },
  {
    startTime: 794.85,
    person: 'Karol',
    text: ' So it comes misdiagnosis of ADHD may come with well, quite, or lack of diagnosis may come with a lot of consequences.'
  },
  {
    startTime: 804.41,
    person: 'Karol',
    text: " And this is, I think, very much worth saying that sometimes it will not give you any problems, and you'll be just perfect."
  },
  {
    startTime: 813.45,
    person: 'Karol',
    text: ' But our life is in constant flux, and it changes.'
  },
  {
    startTime: 816.71,
    person: 'Karol',
    text: ' So if our situation changes, it might start actually be a bother and give problems.'
  },
  { startTime: 822.57, person: 'Joanna', text: ' Exactly, exactly.' },
  {
    startTime: 823.57,
    person: 'Joanna',
    text: ' I mean, it all depends on the environment, right?'
  },
  {
    startTime: 825.97,
    person: 'Joanna',
    text: ' And one environment may be just attuned to you, and you may not have any, you know, problems.'
  },
  {
    startTime: 831.85,
    person: 'Joanna',
    text: " Imagine if you, I don't know, lived on the farm or anywhere where there are no crowds or, you know, there is no such, you know, auditory overwhelm happening to you that often."
  },
  {
    startTime: 842.43,
    person: 'Joanna',
    text: ' And then, you know, nothing like this would happen.'
  },
  {
    startTime: 845.13,
    person: 'Joanna',
    text: " I'm not saying at all, but in general, this is a lottery."
  },
  {
    startTime: 848.59,
    person: 'Joanna',
    text: ' And there are many, many, like studies saying that the most, like, when it comes to women, we often, you know, get diagnosed when we have some bigger changes in our lives happening.'
  },
  {
    startTime: 862.57,
    person: 'Joanna',
    text: " So like, I know, getting a job, you know, leaving the house and going to university, or having a child, you know, and it also, you know, it's about the environment, but also about the hormonal shifts, right?"
  },
  {
    startTime: 878.39,
    person: 'Joanna',
    text: ' So the menopause, we just stopped, you know, having that many hormones that, you know, keep us going.'
  },
  {
    startTime: 884.47,
    person: 'Joanna',
    text: ' And suddenly, we just feel like, you know, we were disabled.'
  },
  { startTime: 889.05, person: 'Joanna', text: " So that's also a big thing." },
  {
    startTime: 892.25,
    person: 'Karol',
    text: ' But by just pure coincidence and correlation, that would be the case of my wife, she was diagnosed after giving birth the second time.'
  },
  {
    startTime: 901.45,
    person: 'Karol',
    text: " And it the amount of, of, I think that's a combination of being tired, having been overstimulated constantly by touch and by sound."
  },
  {
    startTime: 915.85,
    person: 'Karol',
    text: " And all of that forced her into a state where where she wasn't her best."
  },
  { startTime: 922.93, person: 'Karol', text: ' And it turns out she actually has had ADHD.' },
  { startTime: 925.51, person: 'Karol', text: ' And she went and got the diagnosis.' },
  {
    startTime: 928.67,
    person: 'Karol',
    text: " And now it's a completely different story, because she's now aware of things."
  },
  {
    startTime: 932.95,
    person: 'Karol',
    text: " And I participated in the diagnosis, because to hear a little bit of a glimpse into how it's diagnosed in the Netherlands."
  },
  {
    startTime: 942.65,
    person: 'Karol',
    text: ' Either the psychologist interviews the immediate family, or you just do the diva form together.'
  },
  {
    startTime: 950.25,
    person: 'Karol',
    text: ' And I was reading through the diva form, answering the questions in her context.'
  },
  {
    startTime: 954.65,
    person: 'Karol',
    text: ' And I was like, looking at the questions like, does everybody get that?'
  },
  { startTime: 960.06, person: 'Karol', text: " That's not typical." },
  { startTime: 963.12, person: 'Karol', text: " That's not something that's common." },
  {
    startTime: 965.62,
    person: 'Karol',
    text: ' And the best part was I got triggered on completely different questions than she was.'
  },
  { startTime: 970.7, person: 'Karol', text: ' So that was the amazing part.' },
  {
    startTime: 972.76,
    person: 'Karol',
    text: ' And we were both, we both have ADHD, we both scored quite high on the diva form.'
  },
  {
    startTime: 980.26,
    person: 'Karol',
    text: ' Yet we were completely triggered by completely different aspects.'
  },
  {
    startTime: 984.16,
    person: 'Karol',
    text: ' And we our flavour of ADHD is completely different.'
  },
  {
    startTime: 988.72,
    person: 'Joanna',
    text: " Yeah, that's, that's the that's the tricky part."
  },
  {
    startTime: 991.62,
    person: 'Joanna',
    text: ' Like, you know, you need you need your immediate family, like closest relatives to figure out that something wrong with you.'
  },
  {
    startTime: 998.66,
    person: 'Joanna',
    text: ' But when it was, you know, ADHD is mostly, you know, genetically, you know, transferred.'
  },
  {
    startTime: 1005.28,
    person: 'Joanna',
    text: " So yeah, my parents were convinced that everything's fine."
  },
  { startTime: 1009.68, person: 'Joanna', text: ' Like everybody has that.' },
  { startTime: 1011.4, person: 'Joanna', text: " Where's the problem?" },
  { startTime: 1012.56, person: 'Joanna', text: ' Come on.' },
  {
    startTime: 1014.14,
    person: 'Karol',
    text: ' And that will be probably the story of a lot of ADHD years and people somewhere on the spectrum of autism.'
  },
  {
    startTime: 1021.14,
    person: 'Karol',
    text: ' Because their parents are probably living the same story.'
  },
  {
    startTime: 1025.079,
    person: 'Karol',
    text: " They are also neuro atypical, meaning that for them, it's the norm."
  },
  { startTime: 1029.14, person: 'Karol', text: " And we're just exaggerating." },
  { startTime: 1032.119, person: 'Joanna', text: ' Exactly.' },
  {
    startTime: 1033.5,
    person: 'Karol',
    text: ' But just for the sake of clarity, maybe we should pop in a few definitions to distinguish what is ADHD?'
  },
  { startTime: 1041.38, person: 'Karol', text: ' What is autism?' },
  { startTime: 1042.26, person: 'Karol', text: ' What is autism combined with ADHD?' },
  { startTime: 1045.579, person: 'Karol', text: ' So a you DHT?' },
  {
    startTime: 1047.98,
    person: 'Karol',
    text: ' And why is it actually a spectrum, not a not something binary?'
  },
  { startTime: 1054.04, person: 'Joanna', text: ' So let me start with ADHD.' },
  {
    startTime: 1056.94,
    person: 'Joanna',
    text: " And actually, I'm a big enemy of the current of the of this definition of, you know, it's, it's, you know, the acronym goes from hyperactivity and attention disorder, and the attention deficit disorder."
  },
  {
    startTime: 1076.26,
    person: 'Joanna',
    text: " And I'm this is the issue that I have of it is exactly what I mentioned earlier, like we only mentioned the issues that are bothering to the public, and it doesn't cover the, you know, the real core of the issue at all."
  },
  {
    startTime: 1090.94,
    person: 'Joanna',
    text: " It's just like, you know, calling a depressed person, like, you know, calling depression, I don't know, a lame party, you know, party pooper, like, okay, yeah, the best person in the best, you know, party person, but it's not exactly what we want to treat, right?"
  },
  {
    startTime: 1107.26,
    person: 'Joanna',
    text: " It's not exactly what, what the issue that you're trying to solve in here."
  },
  {
    startTime: 1111.68,
    person: 'Karol',
    text: " So that's, that's my so the name basically conveys the two most common, noticeable and problematic aspects of this particular neurotypicality."
  },
  { startTime: 1127.54, person: 'Joanna', text: ' Not exactly, exactly.' },
  {
    startTime: 1129.38,
    person: 'Joanna',
    text: ' And because of the fact that, as you mentioned, like the, the symptoms were previously mostly described after, you know, teenage voice, the criteria are changing all the time.'
  },
  {
    startTime: 1140.98,
    person: 'Joanna',
    text: " So from what is, let's say, established right now, is that it's a neurotypical, it's a, it's a variation of a brain that, you know, people even, you know, some people call it dysfunction, some people call it this disorder, some people just say that, you know, we are wired different."
  },
  {
    startTime: 1158.72,
    person: 'Joanna',
    text: " I'm not, I will not debate anyone on that, because I think it's, you know, depends on what you, you know, what you feel and, and what you what you prefer."
  },
  {
    startTime: 1169.24,
    person: 'Joanna',
    text: " But what I, what I like, like to distinguish most, it's not this hyperactivity, or this attention deficit, both, both of those forces, let's say they're just extremely dysregulated, and go come and go in extreme waves."
  },
  {
    startTime: 1184.52,
    person: 'Joanna',
    text: " So we either do something, you know, very hyper specific, and you're, you're like focused on it 100%."
  },
  {
    startTime: 1191.2,
    person: 'Joanna',
    text: ' And you cannot stop working physically, because you just are dragged into something.'
  },
  {
    startTime: 1196.34,
    person: 'Joanna',
    text: " And then you when, you know, the, the energy goes away, then you might not just recover, because you think, oh, I'm lazy, because I've only been working four hours, and not 10."
  },
  {
    startTime: 1209.92,
    person: 'Joanna',
    text: " Like everybody, and we don't see the fact that we, you know, we're for those four hours, we did like, you know, a week of work."
  },
  {
    startTime: 1217.54,
    person: 'Joanna',
    text: " So that's, that's the, that's the, the key issue, I would say, and it also is combined with, with stimulus sensitivity on many, many levels."
  },
  {
    startTime: 1228.92,
    person: 'Joanna',
    text: " And it's also overlaps with, with, with autism, in this in this aspect."
  },
  {
    startTime: 1235.22,
    person: 'Joanna',
    text: ' And there are many, many overlapping, overlapping symptoms.'
  },
  { startTime: 1241.76, person: 'Joanna', text: ' Exactly.' },
  {
    startTime: 1242.2,
    person: 'Joanna',
    text: ' So maybe as you, you shared, so you know, some of your autistic traits, maybe you want to, you know, dive into that a little bit more.'
  },
  { startTime: 1253.32, person: 'Karol', text: ' Autistic traits.' },
  {
    startTime: 1254.92,
    person: 'Karol',
    text: ' I joke at times that the Yeah, like, like we talked just before the stream.'
  },
  { startTime: 1263.98, person: 'Karol', text: ' I have ADHD, like creative chaos.' },
  {
    startTime: 1267.18,
    person: 'Karol',
    text: ' And then I have my autistic structure that provides a beautiful structure to these, to this absolutely amazing chaos.'
  },
  {
    startTime: 1275.02,
    person: 'Karol',
    text: " And at times, it's brilliant, because then I can do a lot of things in a very short period of time."
  },
  {
    startTime: 1281.96,
    person: 'Karol',
    text: " Other times, it's horrendous, because it doesn't match."
  },
  { startTime: 1284.82, person: 'Karol', text: " And I'm just stuck." },
  {
    startTime: 1287.3,
    person: 'Karol',
    text: " Because what structure is, in that sense, it's keeping you in one direction, while your ADHD wants to go everywhere."
  },
  { startTime: 1297.38, person: 'Joanna', text: ' Yeah.' },
  {
    startTime: 1297.96,
    person: 'Karol',
    text: " So So for example, if I'm working on my technical topics, it's what it's a wonderful combination."
  },
  {
    startTime: 1304.84,
    person: 'Karol',
    text: ' Anything that requires research, just focus intellectual work, beautiful, great.'
  },
  {
    startTime: 1312.16,
    person: 'Karol',
    text: ' In relationships with with other human beings, an absolute nightmare.'
  },
  {
    startTime: 1317.46,
    person: 'Karol',
    text: " Because I'm, for example, at times unable to see the other person in the in the relationship, because I'm so focused on a specific hang up."
  },
  {
    startTime: 1327.86,
    person: 'Karol',
    text: " Like, for example, my kids, I absolutely adore those two, they're most likely as neuro atypical as I am in my wife, they already expressed some traits, we'll see somewhere later if that's actually diagnosable."
  },
  { startTime: 1347.12, person: 'Karol', text: ' But I want them to do something.' },
  {
    startTime: 1350.14,
    person: 'Karol',
    text: ' For example, as a parent, I want them to go and not brush their teeth or come to me to brush for me to brush their teeth.'
  },
  { startTime: 1357.16, person: 'Karol', text: " Of course, they don't want to do it." },
  {
    startTime: 1360.5,
    person: 'Karol',
    text: ' And I get fixated on the notion that they need to brush their teeth.'
  },
  { startTime: 1366.74, person: 'Karol', text: ' And it becomes very unpleasant.' },
  {
    startTime: 1370.26,
    person: 'Karol',
    text: " I'm then I'm stopping being an irregular, empathetic human being and a father for them."
  },
  { startTime: 1378.24, person: 'Karol', text: " I'm just a little bit of a tyrant." },
  { startTime: 1381.12, person: 'Karol', text: ' Just you need to brush your teeth now.' },
  { startTime: 1383.66, person: 'Karol', text: " And that's expressed with a lot more emotion." },
  { startTime: 1386.7, person: 'Karol', text: ' Not exactly pleasant time, right?' },
  { startTime: 1388.94, person: 'Joanna', text: ' Yeah.' },
  { startTime: 1389.24, person: 'Karol', text: " And it's, it's horrendous at times." },
  { startTime: 1391.46, person: 'Karol', text: " And it's very hard to stop it." },
  {
    startTime: 1392.8,
    person: 'Karol',
    text: " Because it's, I don't have any emotional control over it at that point."
  },
  {
    startTime: 1398.92,
    person: 'Joanna',
    text: ' Yeah, this regulation is a big part of both those two.'
  },
  {
    startTime: 1406.6,
    person: 'Joanna',
    text: " So that's, you know, something, something that I'm not sure how it is, you know, differentiated, but definitely there is some degree of rigidness that is specific to autism."
  },
  {
    startTime: 1421.2,
    person: 'Karol',
    text: ' As far as I know, that the emotional dysregulation just actually entered the diagnosis criteria.'
  },
  { startTime: 1430.68, person: 'Karol', text: " It wasn't part of the diagnostic criteria." },
  {
    startTime: 1433.9,
    person: 'Karol',
    text: " I think, I don't know, a year ago or two years ago, it was a fairly new topic."
  },
  {
    startTime: 1440.66,
    person: 'Joanna',
    text: " I feel so happy that I don't have to be a, you know, a person diagnosing anyone, because the criteria are changing anytime."
  },
  {
    startTime: 1448.5,
    person: 'Joanna',
    text: " And you know, people just come to me, and they say, Oh, I have a diagnosis, I suspect the diagnosis, I know that I should get a diagnosis, but I don't want to."
  },
  { startTime: 1457.72, person: 'Joanna', text: ' So I just, you know, work with them anyway.' },
  {
    startTime: 1459.94,
    person: 'Joanna',
    text: " And that's the brilliance of my coaching career aspect."
  },
  {
    startTime: 1465.66,
    person: 'Karol',
    text: " Okay, so but from from just purely, let's say, well, diagnostic or scientific aspect, what's the difference between ADHD and autism?"
  },
  {
    startTime: 1480.21,
    person: 'Joanna',
    text: ' Um, well, there are many things that overlap, right?'
  },
  {
    startTime: 1483.45,
    person: 'Joanna',
    text: " So like this, this regulation, the sensitivity, the hyper focus, focussing, and when we talk about and I was surprised to learn that people with ADHD are not that they they don't take that much effort in being with other people, like it comes more naturally and, and people with with in autism spectrum are more or less, let's say, equipped to the social norms, social regulations and customs."
  },
  {
    startTime: 1526.15,
    person: 'Joanna',
    text: " And when we talk about those aspects in communication and it in any any kind of workplace, I really don't have any thing I'm comforting to say, because in my opinion, it's the neurotypicals who are ill equipped."
  },
  {
    startTime: 1543.63,
    person: 'Joanna',
    text: " Because, you know, you know, you know, the autism, let's say custom is just like the default is to be very straightforward."
  },
  { startTime: 1553.29, person: 'Joanna', text: " And this is how it's supposed to be right." },
  { startTime: 1558.57, person: 'Karol', text: ' Pure directness.' },
  {
    startTime: 1559.77,
    person: 'Karol',
    text: " But that's one of the reasons I live in Netherlands, Dutch people are very direct."
  },
  { startTime: 1563.01, person: 'Karol', text: ' So I fit in better than in Poland.' },
  {
    startTime: 1567.57,
    person: 'Karol',
    text: " But on that, yes, communication as an aspect, I'm always joking that my emotional intelligence is sitting that way five metres away from me during the work day, because she's working just on another side of the house."
  },
  { startTime: 1582.37, person: 'Karol', text: " And that's where my emotional intelligence is." },
  {
    startTime: 1586.51,
    person: 'Karol',
    text: " Without her, I don't have my own emotional intelligence."
  },
  { startTime: 1590.07, person: 'Karol', text: ' I have only procedures.' },
  {
    startTime: 1593.01,
    person: 'Karol',
    text: ' The amount of effort I have to put in into understanding context is humongous.'
  },
  {
    startTime: 1601.71,
    person: 'Karol',
    text: " It's it literally is procedural or procedural to the subconscious level that I have absolutely subconscious defence mechanisms against social situations and social interactions."
  },
  {
    startTime: 1614.21,
    person: 'Karol',
    text: ' And because of that, I pick up on a lot more signals than a regular person would because I trained my brain subconsciously to pick up on those cues.'
  },
  { startTime: 1624.29, person: 'Karol', text: " So that I don't get in trouble." },
  { startTime: 1629.65, person: 'Joanna', text: ' Literally.' },
  {
    startTime: 1630.09,
    person: 'Karol',
    text: " As a kid, I got in trouble all the times because I just don't didn't understand what people want from me and why they're mad at me."
  },
  { startTime: 1638.33, person: 'Karol', text: ' Just like that.' },
  {
    startTime: 1639.59,
    person: 'Karol',
    text: " And I think that's the story of a lot of people on the spectrum that they experience exactly the same thing."
  },
  { startTime: 1645.29, person: 'Karol', text: ' They have no idea why people are mad at them.' },
  {
    startTime: 1647.57,
    person: 'Karol',
    text: ' They have no idea what they did wrong or said wrong.'
  },
  { startTime: 1650.97, person: 'Karol', text: ' They just said it.' },
  { startTime: 1651.87, person: 'Karol', text: ' They just stated the fact.' },
  {
    startTime: 1653.23,
    person: 'Karol',
    text: " Yeah, they didn't understand that the fact was offensive."
  },
  {
    startTime: 1655.97,
    person: 'Karol',
    text: " And for the last few years, that was my main problem with my wife's family."
  },
  { startTime: 1662.01, person: 'Karol', text: ' I just stated fact and they got offended.' },
  { startTime: 1664.33, person: 'Karol', text: " I didn't really didn't understand why." },
  {
    startTime: 1666.77,
    person: 'Karol',
    text: ' And my wife had to translate to me what I did wrong.'
  },
  {
    startTime: 1671.07,
    person: 'Karol',
    text: " And the situation improved over the years with therapy with my own self-work, with understanding my relatives on my wife's side, etc."
  },
  {
    startTime: 1681.23,
    person: 'Karol',
    text: ' But it was conscious, drastically high effort to get there.'
  },
  { startTime: 1688.95, person: 'Joanna', text: ' Yeah, definitely.' },
  { startTime: 1690.25, person: 'Joanna', text: ' Yeah, I mean, it requires a lot of effort.' },
  {
    startTime: 1693.53,
    person: 'Joanna',
    text: " And on the other hand, I mean, I'm sometimes happy about the fact that I had to, you know, put so much effort into functioning because then, you know, when people are dysregulated about, you know, the constant, I don't know, influx of news or work or whatever, then hey, I have the means to, you know, manage that."
  },
  {
    startTime: 1715.33,
    person: 'Joanna',
    text: ' If you were an ADHD, you would learn that as well.'
  },
  {
    startTime: 1719.59,
    person: 'Karol',
    text: " So, you know, I don't have any of my regular means near me right now, because I'm in a space that I don't get overstimulated."
  },
  {
    startTime: 1727.95,
    person: 'Karol',
    text: ' But in my pockets in my pants, I always have a fidget, something, a fidget or something to play around with.'
  },
  {
    startTime: 1735.25,
    person: 'Karol',
    text: ' Not a fidget spinner per se, but something similar.'
  },
  { startTime: 1738.65, person: 'Karol', text: ' And earplugs.' },
  { startTime: 1740.89, person: 'Karol', text: ' As simple as that.' },
  {
    startTime: 1742.73,
    person: 'Karol',
    text: " Noise cancelling headphones, plus earplugs, plus loud music, and I'm regulated all of a sudden."
  },
  { startTime: 1748.77, person: 'Karol', text: " It's as complex and as simple." },
  { startTime: 1751.87, person: 'Joanna', text: ' Yes, yes.' },
  {
    startTime: 1752.85,
    person: 'Joanna',
    text: ' And it requires a lot of effort to get there, definitely.'
  },
  {
    startTime: 1756.63,
    person: 'Joanna',
    text: ' Yeah, as far as fidgeting is concerned, this is the reason I got married.'
  },
  { startTime: 1762.15, person: 'Joanna', text: ' So, yeah.' },
  { startTime: 1763.03, person: 'Karol', text: ' So, you can fidget with a ring?' },
  { startTime: 1764.69, person: 'Joanna', text: ' Yeah.' },
  { startTime: 1765.73, person: 'Joanna', text: " My husband's all the time." },
  { startTime: 1767.61, person: 'Joanna', text: ' When are you going to lose it?' },
  { startTime: 1771.77, person: 'Joanna', text: " It's my fidget spinner." },
  { startTime: 1773.41, person: 'Joanna', text: " Like, come on, I can't lose it." },
  {
    startTime: 1776.11,
    person: 'Karol',
    text: " Congratulations, by the way, because that's quite recent."
  },
  { startTime: 1779.05, person: 'Joanna', text: ' Yeah, yeah.' },
  { startTime: 1781.63, person: 'Joanna', text: " Two months and still haven't lost it." },
  { startTime: 1783.97, person: 'Joanna', text: ' Yeah.' },
  { startTime: 1785.33, person: 'Karol', text: " Hopefully we'll not." },
  { startTime: 1786.81, person: 'Karol', text: ' All right.' },
  { startTime: 1788.01, person: 'Karol', text: " Let's talk a moment about why is it not binary?" },
  {
    startTime: 1792.45,
    person: 'Karol',
    text: ' Why can we say that somebody is just autistic or just ADHD?'
  },
  { startTime: 1798.83, person: 'Karol', text: ' Why would we call it a spectrum?' },
  {
    startTime: 1801.35,
    person: 'Karol',
    text: " Because I think that's also an important aspect of neurodivergency or neuroatypicality per se."
  },
  { startTime: 1809.09, person: 'Joanna', text: ' Yeah.' },
  {
    startTime: 1809.61,
    person: 'Joanna',
    text: ' Up until recently, there was this differentiation between autism and, oh my God, the word is eluding from me.'
  },
  {
    startTime: 1819.69,
    person: 'Joanna',
    text: ' The more severe form of autism was, oh my God, I forgot.'
  },
  {
    startTime: 1827.49,
    person: 'Joanna',
    text: " So, we had this little boy who doesn't communicate, but is very smart."
  },
  { startTime: 1836.75, person: 'Joanna', text: ' Never mind.' },
  {
    startTime: 1839.05,
    person: 'Joanna',
    text: " There was differentiation between people who couldn't communicate and Asperger's."
  },
  { startTime: 1846.19, person: 'Karol', text: " Asperger's syndrome." },
  { startTime: 1847.23, person: 'Joanna', text: ' Yeah.' },
  { startTime: 1848.33, person: 'Joanna', text: ' So, this was the differentiation.' },
  {
    startTime: 1851.27,
    person: 'Joanna',
    text: ' And basically, after research, the scientists discovered that it was basically the same aspects that were going on, but on different levels.'
  },
  {
    startTime: 1862.53,
    person: 'Joanna',
    text: ' And very unfairly so, some people were called high functioning and low functioning.'
  },
  { startTime: 1868.55, person: 'Joanna', text: ' And when we think about, yeah, spectrum.' },
  {
    startTime: 1872.39,
    person: 'Joanna',
    text: ' So, being autistic or having ADHD or everybody has a little ADHD.'
  },
  { startTime: 1878.81, person: 'Joanna', text: " So, it's not linear." },
  { startTime: 1883.73, person: 'Joanna', text: " It's not like that." },
  { startTime: 1885.39, person: 'Joanna', text: " And when you're here, you have ADHD." },
  {
    startTime: 1888.29,
    person: 'Joanna',
    text: " What's more useful is having a stove with, I mean, the cooker with a couple of stoves."
  },
  {
    startTime: 1896.31,
    person: 'Joanna',
    text: ' And you can just put different temperature in each one of those.'
  },
  {
    startTime: 1900.51,
    person: 'Joanna',
    text: ' So, one is sensitivity, like stimulus sensitivity.'
  },
  { startTime: 1907.81, person: 'Joanna', text: ' One is social aptitudes.' },
  { startTime: 1913.01, person: 'Joanna', text: ' Another is hyperactivity.' },
  {
    startTime: 1914.93,
    person: 'Joanna',
    text: " Another is, let's say, dysregulation, emotional dysregulation."
  },
  {
    startTime: 1920.83,
    person: 'Joanna',
    text: ' So, each of those can be, you know, on a different level.'
  },
  {
    startTime: 1924.59,
    person: 'Joanna',
    text: " And it doesn't mean that, you know, this one is more visible and more disturbing to the environment."
  },
  {
    startTime: 1931.47,
    person: 'Joanna',
    text: ' It means this person is more autistic or has less ADHD.'
  },
  {
    startTime: 1935.47,
    person: 'Joanna',
    text: " Because the tricky part of the diagnosis that I am so lucky not to conduct is the fact that many of those symptoms, let's say, or distress that, you know, comes with neurodivergence, they are relatable to neurotypical people."
  },
  { startTime: 1958.63, person: 'Joanna', text: ' But not on such a regular basis.' },
  {
    startTime: 1960.89,
    person: 'Joanna',
    text: " So, when they say that, oh, I don't know what time is it."
  },
  { startTime: 1963.53, person: 'Joanna', text: ' I get late.' },
  {
    startTime: 1964.79,
    person: 'Joanna',
    text: " I can't stand up from my chair because I need to work, like, you know, until midnight because I need to get something done."
  },
  {
    startTime: 1974.35,
    person: 'Joanna',
    text: ' This is something everybody experiences sometimes.'
  },
  {
    startTime: 1977.11,
    person: 'Joanna',
    text: " But the aspect of, you know, having a diagnosis and struggling with this, let's say, different brain wiring is the fact that it doesn't go away."
  },
  {
    startTime: 1989.43,
    person: 'Joanna',
    text: " And it's much more pronounced and much more disturbing in your everyday life."
  },
  {
    startTime: 1996.03,
    person: 'Joanna',
    text: ' And it causes a lot of distress and, yeah, ADHD attacks or whatever.'
  },
  { startTime: 2003.33, person: 'Joanna', text: " It's happening all the time." },
  { startTime: 2005.37, person: 'Joanna', text: ' On the different levels.' },
  {
    startTime: 2006.45,
    person: 'Joanna',
    text: " And it may happen that, oh, but she's so organised, she can't have ADHD because she has everything organised."
  },
  { startTime: 2012.67, person: 'Joanna', text: ' Yeah, maybe at work.' },
  {
    startTime: 2013.55,
    person: 'Joanna',
    text: " But when she comes home, you know, there's not, you know, a single clean pair, you know, of jeans or whatever."
  },
  { startTime: 2022.19, person: 'Joanna', text: " There's nothing to be found." },
  {
    startTime: 2024.17,
    person: 'Joanna',
    text: ' So, this is very, you know, can be very structured.'
  },
  {
    startTime: 2029.05,
    person: 'Joanna',
    text: ' And it requires a lot of, I would say, curative work to show, you know, an image of an acceptable person.'
  },
  { startTime: 2038.05, person: 'Karol', text: ' And this is an interesting thing.' },
  {
    startTime: 2040.53,
    person: 'Karol',
    text: " Because, yes, a lot of people say, because I'm very open about my neuroatypicality and a lot of comments I get is, oh, everybody's on the spectrum."
  },
  { startTime: 2052.33, person: 'Karol', text: " And I'm like, yes and no." },
  {
    startTime: 2056.01,
    person: 'Karol',
    text: ' Everybody experiences the same symptoms as I do.'
  },
  {
    startTime: 2059.33,
    person: 'Karol',
    text: " It's not about experiencing them or not experiencing them."
  },
  {
    startTime: 2063.77,
    person: 'Karol',
    text: " It's about the amount of times per day, week, month that I experience those."
  },
  {
    startTime: 2070.75,
    person: 'Karol',
    text: ' I experience those symptoms literally every single day, several times a day, while a neurotypical person experiences the same symptoms maybe once a month, maybe once a quarter, depending on what it is.'
  },
  { startTime: 2086.23, person: 'Karol', text: ' Everybody can have a worse day.' },
  {
    startTime: 2088.429,
    person: 'Karol',
    text: " My worst day is a lot more severe than somebody's worst day, in terms of how they feel and behave because of that."
  },
  {
    startTime: 2099.77,
    person: 'Joanna',
    text: ' Do you get triggered when you hear that, that everybody has some ADHD?'
  },
  { startTime: 2106.85, person: 'Karol', text: " I don't get triggered." },
  {
    startTime: 2109.15,
    person: 'Karol',
    text: " I don't get triggered because I understand they just don't know better."
  },
  { startTime: 2112.97, person: 'Joanna', text: ' Yeah, yeah, yeah, yeah.' },
  {
    startTime: 2114.01,
    person: 'Joanna',
    text: " I mean, that's what I wanted to say, that, you know, many people get upset when they hear that."
  },
  {
    startTime: 2119.83,
    person: 'Joanna',
    text: " And my regular answer to that is that, I mean, we get triggered or we get angry when we hear something that we somehow deep down believe it's true."
  },
  {
    startTime: 2130.57,
    person: 'Joanna',
    text: " So, when there is, you know, this imposter syndrome that, oh, maybe I'm just faking it, maybe it's just my imaginary problem, maybe I don't have ADHD, maybe everybody has the same problem and they are just, you know, pushing through and I'm not strong enough to do that, then it hurts."
  },
  {
    startTime: 2147.43,
    person: 'Joanna',
    text: " But when you don't believe that, when you validate your, you know, feelings and struggles and just trust yourself, then it doesn't really bother anyone."
  },
  {
    startTime: 2156.59,
    person: 'Joanna',
    text: ' And I think the most useful thing to do when you have a situation like that is just start with a question, like, you know, do you want to listen about it?'
  },
  {
    startTime: 2169.69,
    person: 'Joanna',
    text: ' Like, because somebody can just say it and, you know, be on with their day.'
  },
  {
    startTime: 2174.03,
    person: 'Joanna',
    text: " They don't want to, you know, discuss it further."
  },
  {
    startTime: 2176.73,
    person: 'Joanna',
    text: ' So, you know, not wasting your time on such a discussion.'
  },
  {
    startTime: 2181.21,
    person: 'Joanna',
    text: " It's, you know, a great way of, you know, regulating yourself."
  },
  { startTime: 2185.53, person: 'Karol', text: " That's very true." },
  {
    startTime: 2186.47,
    person: 'Karol',
    text: ' And then you touched upon also a very important topic, which is basically masking.'
  },
  {
    startTime: 2194.51,
    person: 'Karol',
    text: " Like you said, you can be very organised at work and people will not believe that you have ADHD, but then again, at home, you're complete chaos."
  },
  {
    startTime: 2203.01,
    person: 'Karol',
    text: ' And this is, this is a number of subconscious defence mechanisms that just kick in.'
  },
  {
    startTime: 2209.49,
    person: 'Karol',
    text: " And they're subconscious, they kick in automatically, we may be perfectly organised at work, perfectly sociable on parties and events."
  },
  {
    startTime: 2222.79,
    person: 'Karol',
    text: " But that comes at a cost that comes at a cost of having defence mechanisms that kick in automatically, even if they're not supposed to kick in."
  },
  {
    startTime: 2233.65,
    person: 'Karol',
    text: ' And at the cost of actually using a lot of energy to do these things.'
  },
  {
    startTime: 2240.45,
    person: 'Karol',
    text: ' Because it costs us neurotypicals a lot, lot more energy to do a lot of things.'
  },
  { startTime: 2247.95, person: 'Joanna', text: ' Yeah.' },
  { startTime: 2248.23, person: 'Joanna', text: " And then, you know, it's invisible." },
  {
    startTime: 2249.99,
    person: 'Joanna',
    text: ' So when somebody says, oh, yeah, I need to, you know, make some effort to dry the, I know, dry the laundry.'
  },
  { startTime: 2258.65, person: 'Joanna', text: ' Yeah, I get that.' },
  {
    startTime: 2260.53,
    person: 'Joanna',
    text: " But, you know, when you don't see the energy that is put into masking or, or even managing your dysregulation, then then you can just think that you're broken, right?"
  },
  { startTime: 2273.07, person: 'Karol', text: ' Yeah, same goes with social interactions.' },
  {
    startTime: 2275.49,
    person: 'Karol',
    text: ' A lot of people would say that I am extroverted.'
  },
  { startTime: 2279.69, person: 'Karol', text: " I myself would say that I'm introverted." },
  {
    startTime: 2283.11,
    person: 'Karol',
    text: ' It costs me so much to interact with people that I would rather prefer stay locked in a room without any social contact, even with my family, just stay away, please leave me alone.'
  },
  {
    startTime: 2296.45,
    person: 'Karol',
    text: ' And yet, I come off as very outgoing and very loud and very, whatever other adjective, in general, intense, right?'
  },
  {
    startTime: 2308.69,
    person: 'Karol',
    text: ' And, and people just cannot believe that I might have ADHD or autistic traits.'
  },
  {
    startTime: 2316.05,
    person: 'Karol',
    text: " It's just not, not comprehensible for a lot of people."
  },
  { startTime: 2321.31, person: 'Karol', text: " Because I'm very sociable, so." },
  { startTime: 2324.19, person: 'Joanna', text: ' Yeah, yeah.' },
  {
    startTime: 2325.07,
    person: 'Joanna',
    text: ' But when you said, what you said about masking, right, and, you know, like developing the mechanisms that are, you know, happening all the time, somewhere in the background.'
  },
  {
    startTime: 2337.21,
    person: 'Joanna',
    text: " So you might develop them subconsciously, and you don't know that."
  },
  {
    startTime: 2341.07,
    person: 'Joanna',
    text: ' And you when you write scripts in your head, what to do in order to be, you know, more likeable, to be more accepted, or to get more rewards, like, you know, in a social sense, then basically, you, you just become this extroverted version.'
  },
  { startTime: 2357.63, person: 'Joanna', text: " I'm not saying that this is not really you." },
  {
    startTime: 2359.35,
    person: 'Joanna',
    text: ' But basically, when we learn that we are supposed to be amusing, funny, I know, showing initiative or whatever, then it just kicks in.'
  },
  {
    startTime: 2369.31,
    person: 'Joanna',
    text: ' Because this is something that has guaranteed our safety for a long time, right?'
  },
  { startTime: 2375.49, person: 'Karol', text: ' Environmental conditioning, basically.' },
  { startTime: 2377.95, person: 'Joanna', text: ' Yeah.' },
  { startTime: 2379.99, person: 'Karol', text: " That's very true." },
  { startTime: 2381.63, person: 'Joanna', text: ' Very much rewarded, definitely.' },
  { startTime: 2383.91, person: 'Karol', text: ' It is, it is rewarding.' },
  {
    startTime: 2386.45,
    person: 'Karol',
    text: ' But again, depends on the environment, if you change your environment, and that might stop being rewarding, and then we land in the problem space of ADHD, and not being able to adjust as fast as we would want to or have to.'
  },
  {
    startTime: 2401.49,
    person: 'Karol',
    text: " But then speaking of environments, let's maybe dive in, why would that be, this whole conversation would be relevant and important for IT?"
  },
  { startTime: 2412.03, person: 'Karol', text: ' Why neurotypicality in IT?' },
  { startTime: 2414.25, person: 'Karol', text: ' And what is that neurotypicality in IT?' },
  { startTime: 2416.85, person: 'Karol', text: ' What does it really mean in that sense?' },
  {
    startTime: 2420.29,
    person: 'Joanna',
    text: " I mean, I'm sure that if you are here, if you're watching, so it means you're either somehow connected to both topics."
  },
  {
    startTime: 2429.15,
    person: 'Joanna',
    text: ' And I know a great deal of people who, when they learned, people who work in IT, when they learned that they might, you know, have some traits or need a diagnosis, suddenly saw those traits everywhere they go.'
  },
  {
    startTime: 2444.17,
    person: 'Joanna',
    text: ' And many, many of my clients are actually from IT.'
  },
  {
    startTime: 2447.99,
    person: 'Joanna',
    text: ' And I may switch different numbers, like 70, 80, 50%.'
  },
  {
    startTime: 2453.75,
    person: 'Joanna',
    text: " But I'm not, I would strongly underline that it's most probably related to the economical factor that, you know, basically, who goes to coaches, like, you know, you need some, some, you know, some bucks to do that."
  },
  {
    startTime: 2470.95,
    person: 'Joanna',
    text: " And I do, you know, as much as possible to get that support, let's say accessible to the means of just, you know, building the environment that doesn't drain your sanity, you know, accessible."
  },
  {
    startTime: 2487.87,
    person: 'Joanna',
    text: ' But what I wanted to say is that there are many people who are neurodivergent in IT from because of the, yeah, the environment that it offers, right.'
  },
  {
    startTime: 2499.79,
    person: 'Joanna',
    text: ' So you, even before the pandemic, it was possible to work remotely, it was possible to be to, and I think the managers in IT, I mean, it depends, obviously, on the manager on the company on the team.'
  },
  {
    startTime: 2513.65,
    person: 'Joanna',
    text: ' But basically, I think they are the ones who saw it most quickly that the problems in IT are not solved in a linear way.'
  },
  {
    startTime: 2525.05,
    person: 'Joanna',
    text: ' That sometimes you need to sit, you know, a long time on, you know, on one thing, and then something bigger, like, you know, goes very quickly.'
  },
  {
    startTime: 2534.65,
    person: 'Joanna',
    text: " And that's, that's the rhythm of this, you know, as I said, this energy and focus that shifts in extreme, extreme differences."
  },
  {
    startTime: 2544.27,
    person: 'Joanna',
    text: " So this is something that I think the IT environment guarantees that you don't have to sit like, you know, translate, let's say, because I wasn't translator."
  },
  {
    startTime: 2554.65,
    person: 'Joanna',
    text: " So that's the example, like, you don't just sit and have the, you know, text translated, sentence in sentence, sometimes you may just do all your work in two hours, sometimes you may spend 10 hours trying to solve one problem."
  },
  {
    startTime: 2568.85,
    person: 'Joanna',
    text: " So I think this is this, this amount of, let's say, trust, the autonomy that is placed upon you, of course, hopefully, because I know it's not the reality for everyone, everywhere."
  },
  { startTime: 2583.23, person: 'Joanna', text: " But basically, that's the goal." },
  {
    startTime: 2584.61,
    person: 'Joanna',
    text: " And that's the most, in my opinion, beneficial environment that actually, you know, brings the results."
  },
  {
    startTime: 2592.21,
    person: 'Joanna',
    text: " I'm not talking about the benefits of the employees."
  },
  {
    startTime: 2594.87,
    person: 'Joanna',
    text: ' But basically, what what gives the best results is this, this autonomy, and this trust, and this, this trust, not lack of trust, trust of between, you know, between the people.'
  },
  {
    startTime: 2608.09,
    person: 'Joanna',
    text: ' And this is something that actually gives the best results, because you get creative, you have a chance to challenge yourself.'
  },
  {
    startTime: 2616.49,
    person: 'Joanna',
    text: ' And there are many people who complain about the fact that the IT industry is changing so fast, so often, and in, in a dozen of, you know, directions all the time.'
  },
  {
    startTime: 2629.33,
    person: 'Joanna',
    text: " But at the same time, I'm deeply convinced that this is the reason why you stick around that long."
  },
  { startTime: 2638.91, person: 'Karol', text: ' Most likely, yes.' },
  {
    startTime: 2641.43,
    person: 'Karol',
    text: ' But this is also the, this environmental aspect is also why a lot of people in it go undiagnosed and have no, absolutely no awareness of the fact that they might be neurotypical, because they just fit in so well.'
  },
  {
    startTime: 2658.09,
    person: 'Karol',
    text: ' It has to be like something really strong to put them out of balance in that sense, that they actually start experiencing more severe problems based on their neurotypicality.'
  },
  {
    startTime: 2673.75,
    person: 'Karol',
    text: ' That was my case, for example, my trigger to where my problems started was when I got kids, and I have less resources over the day to actually do things because I needed to tend to kids, I needed to tackle overstimulational design.'
  },
  {
    startTime: 2695.67,
    person: 'Karol',
    text: " And this is where my downfall began, that where I was completely exhausted, and I couldn't function."
  },
  { startTime: 2703.73, person: 'Karol', text: ' And without kids, easy.' },
  {
    startTime: 2707.83,
    person: 'Karol',
    text: ' I could adjust to literally any situation at work, and it was perfect.'
  },
  {
    startTime: 2713.49,
    person: 'Karol',
    text: ' Not counting for neglect over other aspects where I had anxiety and still auditory channel was triggering my anxiety.'
  },
  {
    startTime: 2725.65,
    person: 'Karol',
    text: ' But otherwise, I could be efficient and do a lot and do overtime all the time and focus on problems and solving them magically at the speed of light.'
  },
  {
    startTime: 2737.53,
    person: 'Karol',
    text: ' Whereas now as a father of two lovely girls, impossible at times.'
  },
  { startTime: 2744.15, person: 'Karol', text: ' Simply not doable.' },
  {
    startTime: 2746.95,
    person: 'Joanna',
    text: ' And then, you know, somebody can just come and say, yeah, yeah, I mean, it is draining to have kids, like, come on, everybody does that.'
  },
  { startTime: 2754.77, person: 'Joanna', text: " So what's the problem, right?" },
  {
    startTime: 2756.93,
    person: 'Joanna',
    text: ' Yeah, but it is debatable if we need a diagnosis when we fit in, right?'
  },
  {
    startTime: 2764.89,
    person: 'Joanna',
    text: " Because there are psychiatrists that say that we need a diagnosis when the distress is real, and it's really like, you know, impeding our normal functioning in at least two areas of life."
  },
  {
    startTime: 2779.65,
    person: 'Joanna',
    text: ' So like, you know, social, family, home, work, school, health, those areas.'
  },
  {
    startTime: 2791.45,
    person: 'Joanna',
    text: " So basically, if you fit in, then maybe, you know, you have all the accommodations you need, and there's nothing, you know, for you to work on."
  },
  {
    startTime: 2802.29,
    person: 'Karol',
    text: ' But looking back on the impact, if I knew when I was a teenager, that I have ADHD, I would deliver on the promise I made to my mom when I was going to university.'
  },
  {
    startTime: 2815.29,
    person: 'Karol',
    text: ' I told her that two things could happen when I go to university.'
  },
  {
    startTime: 2819.71,
    person: 'Karol',
    text: " Either I'm going to stay in for five years and get my bachelor's, or I'm going to stay for five years and end up with a PhD."
  },
  {
    startTime: 2828.59,
    person: 'Karol',
    text: " So I ended up with a bachelor's because my neurotypicality impacted the way I learn, and the way I ingest knowledge."
  },
  {
    startTime: 2839.75,
    person: 'Karol',
    text: ' And apparently, universities in the more traditional sense of teaching, were not a great place for me to learn because they were just simply boring.'
  },
  {
    startTime: 2849.03,
    person: 'Karol',
    text: ' There were instances where I literally fell asleep in the lecture hall because the lecture was so annoyingly boring that I just, snooze time.'
  },
  {
    startTime: 2861.63,
    person: 'Karol',
    text: ' And I really struggled to learn unless the topic was really interesting.'
  },
  { startTime: 2866.91, person: 'Karol', text: " Then it wasn't a problem, I excelled." },
  {
    startTime: 2870.15,
    person: 'Karol',
    text: ' But that was from my personal interest in the topic, not because the lecturer made it interesting.'
  },
  { startTime: 2879.05, person: 'Karol', text: ' And that was a problem.' },
  {
    startTime: 2880.85,
    person: 'Karol',
    text: ' If I knew back then that I have had ADHD, and I had proper support for that ADHD, probably would have turned out very different.'
  },
  { startTime: 2888.39, person: 'Karol', text: " I would have my, at least my master's degree." },
  { startTime: 2891.89, person: 'Karol', text: ' And I could be actually thinking about the PhD.' },
  { startTime: 2894.59, person: 'Karol', text: " And now I'm thinking about the PhD." },
  { startTime: 2895.95, person: 'Karol', text: " And how can I get a PhD without a master's?" },
  {
    startTime: 2898.71,
    person: 'Karol',
    text: " Turns out you can, but that's a lot more effort."
  },
  {
    startTime: 2901.23,
    person: 'Karol',
    text: " But okay, it's like, I would love to do a PhD now with my knowledge and all that I collected over the years."
  },
  { startTime: 2908.53, person: 'Karol', text: " But yeah, that's doesn't seem feasible." },
  { startTime: 2912.87, person: 'Joanna', text: ' Yeah, yeah, of course.' },
  {
    startTime: 2914.53,
    person: 'Joanna',
    text: " I'm joking, like, you know, if you fit in, and everything's okay."
  },
  {
    startTime: 2918.35,
    person: 'Joanna',
    text: ' But you know, just as I said at the beginning, right?'
  },
  {
    startTime: 2921.03,
    person: 'Joanna',
    text: " If you know, girls don't cause any trouble, they don't kick chairs, and they don't chatter, then you know, everything's fine."
  },
  {
    startTime: 2928.25,
    person: 'Joanna',
    text: " And we shouldn't, you know, we don't have to bother about their well being."
  },
  {
    startTime: 2933.81,
    person: 'Joanna',
    text: " But at the same time, yeah, that's the that's the that's the sad thing."
  },
  {
    startTime: 2938.33,
    person: 'Joanna',
    text: " And that's the the reality I'm trying to somehow"
  },
  {
    startTime: 2942.41,
    person: 'Joanna',
    text: ' like, you know, in a very small, small way to undo with my work with coaching with workshops'
  },
  {
    startTime: 2949.87,
    person: 'Joanna',
    text: ' that I get, you know, at companies, and hopefully one day, no more workplaces than you know, just'
  },
  {
    startTime: 2958.45,
    person: 'Joanna',
    text: ' coaching employees, like, you know, coaching employers, or, you know, what I want to say is'
  },
  {
    startTime: 2965.49,
    person: 'Joanna',
    text: ' that we actually need really, really big crisis to actually amend our ways and to do something'
  },
  { startTime: 2974.05, person: 'Joanna', text: ' about them.' },
  {
    startTime: 2974.91,
    person: 'Joanna',
    text: " And I'm not saying it as a, you know, reproach at all, we should be more flexible or whatever, because it's the natural way of, you know, the brain defending itself from extra effort that might not be worth it, right."
  },
  {
    startTime: 2989.01,
    person: 'Joanna',
    text: ' So only only when a huge crisis comes in, then we think, Oh, maybe there is something wrong.'
  },
  {
    startTime: 2995.99,
    person: 'Joanna',
    text: " Maybe there's some, you know, something worth changing."
  },
  {
    startTime: 2998.85,
    person: 'Joanna',
    text: ' And if only it was a little bit easier to like, you know, bring about those changes without, you know, the, you know, great distress, and perhaps losses, and, you know, huge pain, then that would be the dream, right?'
  },
  {
    startTime: 3021.65,
    person: 'Karol',
    text: " Yeah, see, this is in my conversations with a lot of people, especially those that suspect that they're neurotypical, that I tell them, go get diagnosed before you hit a crisis."
  },
  {
    startTime: 3036.83,
    person: 'Karol',
    text: ' Because the way you act in a crisis, this kind of crisis that forces you into diagnosis and seeking help is just this is just horrendous, stressful, and very, very impactful.'
  },
  {
    startTime: 3052.37,
    person: 'Karol',
    text: ' So if you get the diagnosis and psychoeducation and proper help beforehand and deal with your neurotypicality earlier, those crisis will, this crisis will still happen, probably several of those during your lifetime.'
  },
  {
    startTime: 3066.09,
    person: 'Karol',
    text: ' But the impact of them will be a lot less severe.'
  },
  { startTime: 3069.71, person: 'Joanna', text: " And you will know what's happening, right?" },
  {
    startTime: 3072.09,
    person: 'Joanna',
    text: ' With your anxiety and my depression and my burnouts, every every two years, like, that would have been much, much easier, right?'
  },
  { startTime: 3082.71, person: 'Karol', text: ' Exactly.' },
  {
    startTime: 3084.01,
    person: 'Karol',
    text: ' And that that then becomes manageable, because you can connect the dots and understand, oh, there is actually a causality to this.'
  },
  { startTime: 3092.57, person: 'Karol', text: ' Why am I feeling this way?' },
  { startTime: 3093.99, person: 'Karol', text: ' Why are people perceiving me this way?' },
  {
    startTime: 3096.47,
    person: 'Karol',
    text: ' Why am I failing at relationships or social interactions?'
  },
  {
    startTime: 3100.45,
    person: 'Karol',
    text: ' Or why am I failing completely to deliver at work?'
  },
  {
    startTime: 3103.59,
    person: 'Karol',
    text: ' And I need to hit a deadline to actually deliver anything.'
  },
  { startTime: 3108.17, person: 'Karol', text: " Oh, that's why." },
  {
    startTime: 3110.63,
    person: 'Karol',
    text: " And you can avoid these crises by getting diagnosis, getting proper help and getting, especially psychoeducation, where you're at a good state where you actually can devote some time to understanding yourself and actually looking into who you are, and how you behave, knowing that you are neurotypical."
  },
  {
    startTime: 3133.95,
    person: 'Karol',
    text: ' That saves a lot of time, a lot of a lot of stress later.'
  },
  {
    startTime: 3139.41,
    person: 'Karol',
    text: " But for a lot of people, they will have exactly that kind of approach that this doesn't bother me now."
  },
  { startTime: 3146.35, person: 'Joanna', text: " But doesn't everybody get that?" },
  { startTime: 3149.87, person: 'Joanna', text: ' Like, you know?' },
  { startTime: 3151.11, person: 'Karol', text: ' Precisely.' },
  { startTime: 3152.01, person: 'Joanna', text: ' Yeah.' },
  { startTime: 3152.63, person: 'Joanna', text: " So what's what's the problem?" },
  {
    startTime: 3154.03,
    person: 'Joanna',
    text: " And the fact is that, you know, but this is my, let's say dilemma on how to communicate to my coaches and potential coaches."
  },
  {
    startTime: 3165.51,
    person: 'Joanna',
    text: " Like, I know the difference between a therapist and the coach, apart from, you know, years of, of, of education, because I didn't stick around about anything."
  },
  {
    startTime: 3175.97,
    person: 'Joanna',
    text: " So, you know, I'm not psychologist, I'm not a therapist."
  },
  { startTime: 3178.33, person: 'Joanna', text: " I'm not a I'm not a physician." },
  {
    startTime: 3180.37,
    person: 'Joanna',
    text: " But what what those years, like provide to you is the fact that they can help you when you don't have any resources when you hit this crisis, and you have to, like, you know, dig yourself up from this giant hole that you come into."
  },
  {
    startTime: 3198.53,
    person: 'Joanna',
    text: " So, basically, coaching is like working on your resources, working with your, you know, mental space, with the, you know, it's assuming you have this energy, willpower, and, yeah, and basically, this pays the resources to recombine, you know, some, some of the aspects and actually implement any changes."
  },
  {
    startTime: 3220.35,
    person: 'Joanna',
    text: " And when there are people coming to me, let's say, oh, I can't work there anymore."
  },
  { startTime: 3224.81, person: 'Joanna', text: " I don't have energy for anything." },
  { startTime: 3226.53, person: 'Joanna', text: ' I can do anything.' },
  {
    startTime: 3228.03,
    person: 'Joanna',
    text: ' And, you know, there is, you know, there are therapists in Poland who, you know, just give you a sick leave if you suffer from burnout, right.'
  },
  {
    startTime: 3237.15,
    person: 'Joanna',
    text: " So, so coaching is not to it's not to make you have energy again, because when you don't have it, then you don't have it."
  },
  {
    startTime: 3247.91,
    person: 'Joanna',
    text: ' And if you need to find a job, and you are under stress, then no amount of changes is going to happen, because you, you just are living under very stressful situations in the very stressful conditions.'
  },
  {
    startTime: 3261.39,
    person: 'Joanna',
    text: ' And you are just starting to navigate the new landscape that has just, you know, been uncovered, because of TikTok or whatever that you think, oh, maybe, maybe I have ADHD, right.'
  },
  {
    startTime: 3273.07,
    person: 'Joanna',
    text: " So, you know, it's, it's, it's there's nothing for me to provide to you apart from, you know, acceptance and referrals and, and just not, not, you know, not taking money from people like this, right, I need to, in a way, I need to get reach the people who are somehow miserable at work, but still have the same amount of energy to change something."
  },
  {
    startTime: 3302.11,
    person: 'Joanna',
    text: ' So, you know, not too happy, but also not too, too miserable.'
  },
  { startTime: 3305.99, person: 'Joanna', text: " So that's the, you know, the sweet part." },
  {
    startTime: 3308.33,
    person: 'Karol',
    text: ' I think, I think the key difference is that with coaching, you focus on here and now and the specific problem somebody is facing, and they struggle to resolve that, while the work of a therapist and psychiatrist is a lot deeper at the root of the problem, not the symptomatic aspect of the problem.'
  },
  {
    startTime: 3332.85,
    person: 'Karol',
    text: " Coaching is more on the specific aspects of the behaviour that we're experiencing that cause problems."
  },
  {
    startTime: 3341.51,
    person: 'Karol',
    text: " I've been through, through psychotherapy, working with a psychiatrist, as well as working with a coach, and there is a very distinct difference."
  },
  {
    startTime: 3351.47,
    person: 'Karol',
    text: ' Although at the edges, this kind of blurs sometimes.'
  },
  {
    startTime: 3356.01,
    person: 'Joanna',
    text: " Yeah, I mean, you can, you can talk about, you know, procrastination, you know, what causes procrastination, like, oh, I don't know if my work will be good enough."
  },
  { startTime: 3363.81, person: 'Joanna', text: ' Why do I think it might not be good enough?' },
  { startTime: 3365.85, person: 'Joanna', text: " Because I've always heard this and that." },
  {
    startTime: 3368.73,
    person: 'Joanna',
    text: ' So this, you know, triggers the older things, right?'
  },
  {
    startTime: 3373.43,
    person: 'Karol',
    text: " Yeah, some of those things are basically is a lifetime of conditioning, which is a topic for, let's say, cognitive behavioural therapy or psychodynamic therapy, which you do with an actual therapist."
  },
  {
    startTime: 3389.97,
    person: 'Karol',
    text: " Hopefully, everybody who needs that will find a therapist that actually understands ADHD or autism, and it's able to help people with neuroatypicality, because not every therapist is actually trained to help people with neuroatypicality."
  },
  {
    startTime: 3405.05,
    person: 'Karol',
    text: " That's a completely different aspect of that problem."
  },
  {
    startTime: 3408.19,
    person: 'Joanna',
    text: ' Yeah, and they may not be, you know, up to up to date with the latest.'
  },
  { startTime: 3414.71, person: 'Karol', text: " That's also true." },
  {
    startTime: 3416.91,
    person: 'Karol',
    text: ' But all therapists will help either way to a certain extent, because on top of neuroatypicality, neuroatypical people usually acquire traumas, childhood problems that they suffered through because pretty much because of their neuroatypicality.'
  },
  {
    startTime: 3435.87,
    person: 'Karol',
    text: ' So these also require help and digging into to resolve the problems that are stemming from them.'
  },
  {
    startTime: 3443.93,
    person: 'Karol',
    text: " So even if somebody doesn't really specialise in neuroatypicality as a therapist, it still could be helpful to go."
  },
  {
    startTime: 3453.27,
    person: 'Karol',
    text: " But speaking of problems, let's dive into what ADHD manifests as what kind of problems are there from stemming from ADHD that can impact the daily lives of people, especially in IT in that context?"
  },
  {
    startTime: 3473.59,
    person: 'Karol',
    text: ' Well, given that a majority of your clients are from IT, you probably have real time examples as well on top of the name categories.'
  },
  { startTime: 3483.81, person: 'Joanna', text: ' Yeah, yeah, yeah, yeah.' },
  {
    startTime: 3485.05,
    person: 'Joanna',
    text: ' I mean, I started to think about, you know, the first thing that we relate to when we think of ADHD people at workplace is the trouble focussing, the trouble concentrating and getting around to do a given task.'
  },
  {
    startTime: 3501.71,
    person: 'Joanna',
    text: ' And the metaphor that I enjoy presenting is usually the focus switch.'
  },
  {
    startTime: 3508.43,
    person: 'Joanna',
    text: ' So like, you know, when you switch on the lights, switch on the radio, there is a focus switch in your brain between the default mode network, like the network in your brain that is normally on when you daydream, when you think about the future, the past, yourself and, you know, like life in general.'
  },
  {
    startTime: 3529.55,
    person: 'Joanna',
    text: ' And the task positive network is the one that is activated when you actually get down to a task.'
  },
  {
    startTime: 3535.67,
    person: 'Joanna',
    text: " And this is like, you know, maybe not entirely black or white situation, because it's, you know, brains being constantly, you know, under some some research."
  },
  {
    startTime: 3546.91,
    person: 'Joanna',
    text: " But basically, it has been stated that the switch between those two doesn't happen that easily in neurotypical people."
  },
  {
    startTime: 3557.69,
    person: 'Joanna',
    text: ' So when you are a neurotypical person, the switch just happens.'
  },
  {
    startTime: 3562.95,
    person: 'Joanna',
    text: ' And when you get to down a task, get down to a task, the default mode network just shuts down.'
  },
  {
    startTime: 3569.71,
    person: 'Joanna',
    text: " And you don't think about the future, you don't think about the past, you don't think about yourself, you don't think about other people or what is happening in, you know, another hemisphere, you know, of the world."
  },
  {
    startTime: 3581.79,
    person: 'Joanna',
    text: " And sometimes when we get down to a task, I mean, I'm talking about ADHD right now, the default, even when we get down to it, and the task positive network is actually activated, the other one doesn't switch off."
  },
  { startTime: 3600.05, person: 'Joanna', text: " So they're both on." },
  {
    startTime: 3601.81,
    person: 'Joanna',
    text: " And, you know, it may seem like, you know, a lack of goodwill, like, I mean, come on, I'm struggling to focus as well."
  },
  {
    startTime: 3609.35,
    person: 'Joanna',
    text: " And it's invisible, this struggle is invisible."
  },
  { startTime: 3613.61, person: 'Joanna', text: ' And I like this idea of a switch.' },
  {
    startTime: 3616.25,
    person: 'Joanna',
    text: ' And just because recently, I visited some friends, and they had a switch that was, you know, you could open the doors, like to leave the building, and you needed to switch to get on so that you could leave.'
  },
  { startTime: 3628.63, person: 'Joanna', text: ' And it was off.' },
  {
    startTime: 3629.85,
    person: 'Joanna',
    text: " And it was exactly, you know, the metaphor that I needed to explain what's happening in an ADHD brain."
  },
  {
    startTime: 3637.21,
    person: 'Joanna',
    text: ' So when you, you know, that it will hit one, you know, eventually, right?'
  },
  { startTime: 3644.91, person: 'Joanna', text: " But you just turn it on, and it doesn't work." },
  {
    startTime: 3647.93,
    person: 'Joanna',
    text: " So you switch it like again, and again, and again, and again, and it doesn't until you really have to leave."
  },
  {
    startTime: 3653.91,
    person: 'Joanna',
    text: ' And then you just like do it 100 times, or like very slowly.'
  },
  {
    startTime: 3657.61,
    person: 'Joanna',
    text: " And then you say, like, oh, there's this angle, and I just, you know, put it just right, and then it's, it buzzes."
  },
  {
    startTime: 3663.51,
    person: 'Joanna',
    text: " So when you don't have that much of motivation, because you know, it will be much more difficult."
  },
  {
    startTime: 3670.63,
    person: 'Joanna',
    text: ' Then you just like, you know, you just give up.'
  },
  {
    startTime: 3674.49,
    person: 'Joanna',
    text: " And you know, a person who lives next door, and their switch is working well, they just, why can't you just leave the building, like you just push the button, and that's it."
  },
  { startTime: 3683.45, person: 'Joanna', text: " And they're not wrong." },
  {
    startTime: 3684.41,
    person: 'Joanna',
    text: " So I don't blame them for not understanding that."
  },
  { startTime: 3687.99, person: 'Joanna', text: ' But this is this is the thing that happens.' },
  {
    startTime: 3690.75,
    person: 'Joanna',
    text: " This is what I mentioned when we were talking about, you know, the aspects of it that may draw neurotypical people in that the tasks are not linear, the there's this agile planning, there is this dynamic environment, and the complexity of the tasks is very, very high."
  },
  {
    startTime: 3714.73,
    person: 'Joanna',
    text: " So these are the aspects where you can say that, oh, I'm just doing research, like, I tried to do it, and it didn't work."
  },
  {
    startTime: 3722.69,
    person: 'Joanna',
    text: " And that's the, and there are many, many people come to me, I will, I have just one thought, and I will let you speak, because I don't, I just want to, like, clarify one, one, one thing that it's normal for ADHD people to have those, you know, ups and downs."
  },
  {
    startTime: 3738.43,
    person: 'Joanna',
    text: ' And what pains me the most when, when, when I talk to people is the fact that we are blind to those moments of brilliance of, you know, like doing the whole week of work in one day.'
  },
  { startTime: 3752.21, person: 'Joanna', text: ' And we take it for granted.' },
  {
    startTime: 3754.17,
    person: 'Joanna',
    text: ' And we treat it like a basis that we should be doing every day.'
  },
  {
    startTime: 3758.19,
    person: 'Joanna',
    text: " And when you need to recharge when we hit this extra low level of battery, because we are like completely exhausted, then we think we're procrastinating, and we're lazy."
  },
  {
    startTime: 3768.09,
    person: 'Joanna',
    text: ' And just if we gave ourselves some credit and some space to like recharge, it would be much, much easier to actually get down to work and sit down to it.'
  },
  {
    startTime: 3780.27,
    person: 'Joanna',
    text: " And that's, that's the I think it's the difficulty of sitting down and getting down to work is not entirely rooted to ADHD."
  },
  {
    startTime: 3790.39,
    person: 'Joanna',
    text: " It's rooted also in our, you know, like blindness to what we have, and how we operate, basically."
  },
  {
    startTime: 3797.57,
    person: 'Karol',
    text: " I think a lot of people could relate to the phrase I've heard a lot as a child."
  },
  { startTime: 3806.09, person: 'Karol', text: ' Talented, but lazy, or intelligent, but lazy.' },
  { startTime: 3809.89, person: 'Joanna', text: ' Yeah.' },
  {
    startTime: 3810.61,
    person: 'Joanna',
    text: ' You know, went down to work and applied yourself.'
  },
  { startTime: 3815.79, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 3816.63,
    person: 'Karol',
    text: " So what we're talking to give people a name to Google, if they would want to just go on and find more information that the thing we were just talking about right now are executed functions."
  },
  {
    startTime: 3829.25,
    person: 'Karol',
    text: ' And to give an idea about how these executed functions also work.'
  },
  { startTime: 3835.91, person: 'Karol', text: " So we're having a conversation right now." },
  {
    startTime: 3838.55,
    person: 'Karol',
    text: " We're on air, streaming live on LinkedIn and YouTube."
  },
  {
    startTime: 3842.53,
    person: 'Karol',
    text: ' I should be focussing entirely on the conversation.'
  },
  {
    startTime: 3845.71,
    person: 'Karol',
    text: ' In the meantime, while you were explaining this, I was already on Google maps checking where my wife is.'
  },
  { startTime: 3851.75, person: 'Karol', text: ' Is she coming back from Eindhoven?' },
  {
    startTime: 3854.69,
    person: 'Karol',
    text: " I looked up the Google chat because I saw a red dot on the tab because my colleague who's working with me on research wrote me a note there."
  },
  {
    startTime: 3867.55,
    person: 'Karol',
    text: ' In the meantime, I checked notes, thought about work, these kinds of things.'
  },
  {
    startTime: 3873.79,
    person: 'Karol',
    text: " Another great example is ADHD chaining, or at least that's the name I'm accustomed to."
  },
  { startTime: 3879.83, person: 'Karol', text: ' I live in a house.' },
  { startTime: 3881.31, person: 'Karol', text: ' I need to go to get myself something to eat.' },
  { startTime: 3883.69, person: 'Karol', text: ' I need to go downstairs, right?' },
  { startTime: 3885.61, person: 'Karol', text: ' To the kitchen.' },
  { startTime: 3888.15, person: 'Karol', text: ' So I go downstairs.' },
  {
    startTime: 3890.31,
    person: 'Karol',
    text: ' I was supposed to get myself a sandwich and coffee or tea or water.'
  },
  {
    startTime: 3897.61,
    person: 'Karol',
    text: ' Instead of spending like five minutes in the kitchen, I spent half an hour roaming around the ground floor because I saw the sink having dirty dishes, so I put them in the dishwasher.'
  },
  {
    startTime: 3910.73,
    person: 'Karol',
    text: " Then I saw that the trash weren't taken out, so I took out the trash."
  },
  {
    startTime: 3914.57,
    person: 'Karol',
    text: ' Then coming back, I saw some clothes lying around, so I went and put them in the wash machine to wash them alongside other clothes.'
  },
  {
    startTime: 3924.17,
    person: 'Karol',
    text: " So I figured, oh, I'm going to go actually take the dirty laundry from the bathroom and take it also and wash it."
  },
  {
    startTime: 3933.55,
    person: 'Karol',
    text: ' Half an hour later, I realised, oh, what was I doing?'
  },
  { startTime: 3937.51, person: 'Karol', text: ' Oh, I actually went to grab something to eat.' },
  { startTime: 3940.43, person: 'Karol', text: ' Ah, that was what I was doing.' },
  {
    startTime: 3942.21,
    person: 'Karol',
    text: ' Okay, maybe I should actually get something to eat.'
  },
  {
    startTime: 3944.09,
    person: 'Joanna',
    text: " Yeah, that's why I'm so upset when somebody talks to me because I haven't eaten in like 12 hours, right?"
  },
  { startTime: 3951.79, person: 'Karol', text: " That's another aspect." },
  {
    startTime: 3953.35,
    person: 'Karol',
    text: ' I think the dysregulation based on unmet needs is even more intense.'
  },
  {
    startTime: 3963.25,
    person: 'Karol',
    text: ' The jokes about being hangry, as in hungry and angry at the same time, I think that hits a lot of people, but with neuroatypical people, that hits quite a bit harder.'
  },
  {
    startTime: 3977.41,
    person: 'Karol',
    text: ' We have lots of jokes, even commercials like eat the sneakers, right?'
  },
  {
    startTime: 3981.79,
    person: 'Karol',
    text: " Yeah, of course, they played exactly on being hangry, but that's something that is basically a symptom of dysregulation, right?"
  },
  {
    startTime: 3994.99,
    person: 'Karol',
    text: " So, yeah, that's the interesting part of this, but at the same time, it's just problematic for those people who experience that."
  },
  {
    startTime: 4006.51,
    person: 'Karol',
    text: ' And then on top of that, those executive functions, another great example is to just start something.'
  },
  { startTime: 4013.39, person: 'Karol', text: ' An example of me writing articles.' },
  {
    startTime: 4016.45,
    person: 'Karol',
    text: ' And here, I admit I use AI to write articles in a specific way, but that specific way stems from my imposter syndrome, not from trying to cheat anything.'
  },
  {
    startTime: 4029.99,
    person: 'Karol',
    text: " When I try to write an article, if I would do it normally by opening Google Docs and just start writing, I would spend the first three hours looking at a blank page because I cannot spit out a word because I cannot put it in structure, unless I have some sort of a hyper focus, brilliant idea, let's write."
  },
  {
    startTime: 4050.03,
    person: 'Karol',
    text: " If I don't write it instantly, it's not going to happen."
  },
  {
    startTime: 4053.55,
    person: 'Karol',
    text: " It's just going to be a blank stare at the blank page for the next few hours."
  },
  {
    startTime: 4057.77,
    person: 'Karol',
    text: ' So, writing an article takes me about two weeks.'
  },
  {
    startTime: 4061.91,
    person: 'Karol',
    text: " But turns out, I don't have a problem talking about the topic."
  },
  {
    startTime: 4066.83,
    person: 'Karol',
    text: ' So, I hop on Google Meet, turn on the transcript function, talk for 20 minutes, then take the transcript, put it through an LLM, tell it to structure it in a form of an article with these chapters, and I get the first draft.'
  },
  {
    startTime: 4085.55,
    person: 'Karol',
    text: " And editing this is much simpler for my brain than just writing from scratch because I don't have to begin anymore because I already began."
  },
  { startTime: 4094.19, person: 'Karol', text: " It's already there." },
  { startTime: 4095.069, person: 'Karol', text: ' I just need to finish it.' },
  {
    startTime: 4097.31,
    person: 'Karol',
    text: ' Finishing is easier than starting for some reason.'
  },
  { startTime: 4100.59, person: 'Karol', text: ' It just works like that for me.' },
  {
    startTime: 4103.45,
    person: 'Karol',
    text: " That's my problem with executive functions, essentially."
  },
  {
    startTime: 4109.09,
    person: 'Karol',
    text: ' And suddenly, writing an article from two weeks goes to two days.'
  },
  {
    startTime: 4115.77,
    person: 'Karol',
    text: ' But then again, for example, I read this lovely book recently, right?'
  },
  {
    startTime: 4120.49,
    person: 'Karol',
    text: " What happens is that I cannot read more than, especially that I read it on the bus on the way to the office when I still haven't taken my medication because I take it somewhere during riding the bus, and my brain goes squirrel mode."
  },
  { startTime: 4139.569, person: 'Karol', text: ' I read something.' },
  { startTime: 4141.37, person: 'Karol', text: ' Oh, interesting.' },
  { startTime: 4143.149, person: 'Karol', text: ' How does that relate to my work?' },
  { startTime: 4145.63, person: 'Karol', text: ' And then I start pondering.' },
  {
    startTime: 4147.71,
    person: 'Karol',
    text: ' I start messaging my colleague researcher on Google Chat.'
  },
  {
    startTime: 4153.41,
    person: 'Karol',
    text: ' Then I start actually trying to find something more on the internet that would be related.'
  },
  { startTime: 4159.149, person: 'Karol', text: ' And it turns out that I read two pages.' },
  { startTime: 4162.49, person: 'Karol', text: ' And I was supposed to be sitting just reading.' },
  {
    startTime: 4165.55,
    person: 'Karol',
    text: " And this would be possible that I'd be sitting and reading if that would be a book about, I don't know, post-apocalyptic novel."
  },
  { startTime: 4175.17, person: 'Karol', text: ' Perfect.' },
  { startTime: 4176.13, person: 'Karol', text: ' Fantasy novel.' },
  { startTime: 4177.149, person: 'Karol', text: ' Perfect.' },
  {
    startTime: 4177.45,
    person: 'Karol',
    text: " I'd be sitting and reading because I've been engaged in that world."
  },
  {
    startTime: 4181.91,
    person: 'Karol',
    text: " But if that's something that I can relate to, that has connotations to real world and gives me ideas, squirrel brain, bye."
  },
  {
    startTime: 4191.27,
    person: 'Joanna',
    text: " Yeah, but on the other hand, I mean, what's the harm?"
  },
  {
    startTime: 4193.69,
    person: 'Joanna',
    text: ' I mean, you actually, this is the reason why you read it.'
  },
  {
    startTime: 4198.33,
    person: 'Joanna',
    text: ' You cannot write down all those notes and all those questions, like 20 minutes after reading 20 pages, right?'
  },
  { startTime: 4208.77, person: 'Joanna', text: ' So, this is the reason why.' },
  {
    startTime: 4210.31,
    person: 'Joanna',
    text: ' So, we have this way of reading that is supposed to happen.'
  },
  {
    startTime: 4216.09,
    person: 'Joanna',
    text: ' Like, oh, you should sit down for 20 minutes and then digest everything and then maybe do something.'
  },
  { startTime: 4222.13, person: 'Joanna', text: " And that's just accepting the way you operate." },
  { startTime: 4226.25, person: 'Joanna', text: " It's, you know, very liberating." },
  {
    startTime: 4228.53,
    person: 'Karol',
    text: " See, the only problem is that I need to read this book because I'm supposed to provide the editorial review for this book."
  },
  { startTime: 4237.23, person: 'Karol', text: ' So, the goal is to actually read it.' },
  { startTime: 4240.85, person: 'Karol', text: " Yeah, that's the problem." },
  { startTime: 4241.67, person: 'Karol', text: ' Soon.' },
  { startTime: 4243.31, person: 'Joanna', text: ' Yeah.' },
  {
    startTime: 4243.75,
    person: 'Joanna',
    text: ' So, when it gets, you know, soon enough, you will complete it.'
  },
  { startTime: 4248.79, person: 'Joanna', text: " I'm sure." },
  { startTime: 4249.95, person: 'Joanna', text: " I'm sure." },
  {
    startTime: 4250.73,
    person: 'Joanna',
    text: ' You mentioned two things that I would like to elaborate a little bit.'
  },
  { startTime: 4256.45, person: 'Joanna', text: ' Have you heard the word interoception?' },
  { startTime: 4261.37, person: 'Karol', text: ' No.' },
  { startTime: 4262.13, person: 'Joanna', text: " It's a sense." },
  { startTime: 4264.09, person: 'Joanna', text: " Let's say, like, we have five senses." },
  { startTime: 4265.73, person: 'Joanna', text: ' There are people who say we have seven.' },
  { startTime: 4267.09, person: 'Joanna', text: ' Never mind.' },
  {
    startTime: 4268.39,
    person: 'Joanna',
    text: ' Interoception is like hearing, understanding, and noticing the cues of your body.'
  },
  { startTime: 4274.83, person: 'Joanna', text: ' And this is very common.' },
  {
    startTime: 4276.89,
    person: 'Joanna',
    text: " I'm not sure this is the diagnostic criteria of any kind, but I know it is a common thing for when it comes to neurodivergence."
  },
  {
    startTime: 4286.91,
    person: 'Joanna',
    text: " So, basically, challenges with interoception mean that we don't feel pain, we don't feel hunger, we don't feel cold, we don't feel hot."
  },
  {
    startTime: 4299.65,
    person: 'Joanna',
    text: " And basically, that's what we're talking about when we talk about those unmet needs."
  },
  { startTime: 4306.69, person: 'Joanna', text: " We only feel the pain when it's extreme." },
  { startTime: 4309.73, person: 'Joanna', text: " We only feel the hunger when it's extreme." },
  {
    startTime: 4312.25,
    person: 'Joanna',
    text: " So, it's also something that is, in a way, conditioned in, well, of course, in many people in a different way, in a different degree."
  },
  {
    startTime: 4320.85,
    person: 'Joanna',
    text: ' But this is something that can be developed, I think, like practised.'
  },
  {
    startTime: 4328.55,
    person: 'Joanna',
    text: " Like, when you can name it, and you can actually, you know, practise this muscle, let's say, of noticing, okay, I haven't eaten in five hours."
  },
  { startTime: 4337.03, person: 'Joanna', text: ' Maybe I need this or that.' },
  {
    startTime: 4339.39,
    person: 'Joanna',
    text: " So, this is something that is quite helpful when we're talking about, you know, psychoeducation and just, like, taking care of yourself."
  },
  { startTime: 4347.55, person: 'Joanna', text: ' And another thing is activation energy.' },
  {
    startTime: 4350.93,
    person: 'Joanna',
    text: ' Is this something that you have, like, worked with?'
  },
  {
    startTime: 4355.57,
    person: 'Joanna',
    text: " It's a chemical term, but it's also used in psychology and management in those fields."
  },
  {
    startTime: 4361.75,
    person: 'Joanna',
    text: ' So, basically, what we want you to do, like, when you need to start something, you need to decrease the amount of activation energy required as much as possible.'
  },
  {
    startTime: 4371.67,
    person: 'Joanna',
    text: " Because when you want to go jogging, let's say, tomorrow, it's less likely when you just, you know, turn the alarm clock earlier, and that's it."
  },
  {
    startTime: 4386.51,
    person: 'Joanna',
    text: ' But when you have all your clothes prepared, you have the route chosen, you have the, you know, something set, like, your favourite album just, you know, picked, you know, on your app or whatever, then this activation energy is lower, because you know that you have also so many things already prepared.'
  },
  {
    startTime: 4408.25,
    person: 'Joanna',
    text: " And when you are sitting, you know, like, laying in your bed at 6am and think, oh, I don't know where I have my jogging shoes, then you won't go there."
  },
  {
    startTime: 4417.67,
    person: 'Joanna',
    text: ' So, you know, decreasing the activation energy is a life hack.'
  },
  { startTime: 4425.39, person: 'Karol', text: " It's interesting." },
  {
    startTime: 4427.97,
    person: 'Karol',
    text: ' I had no idea these terms exist, but I actually work on those levels.'
  },
  {
    startTime: 4435.11,
    person: 'Karol',
    text: ' And so, because I had surgery over a year ago, that requires me to keep to a schedule of eating, I have alarms on my watch that set off that, oh, you need to eat something, you need to take your meds, you need to eat something, you need to take your meds.'
  },
  {
    startTime: 4453.49,
    person: 'Karol',
    text: ' So, basically, six times a day, I am reminded that I need to go and grab something to eat, or at least bring it to the table.'
  },
  { startTime: 4461.73, person: 'Karol', text: ' Yet again, I still forget about that at times.' },
  {
    startTime: 4464.37,
    person: 'Karol',
    text: ' So, I sometimes end up, I was supposed to take my meds at 9am.'
  },
  {
    startTime: 4469.39,
    person: 'Karol',
    text: " Oh, it's 11.30am. Go figure, why am I feeling so all over the place where I haven't taken any medication today yet, right?"
  },
  {
    startTime: 4478.55,
    person: 'Karol',
    text: " And it happens recently, I've been giving the presentation at work."
  },
  {
    startTime: 4482.59,
    person: 'Karol',
    text: ' After the presentation, I was like, self reflecting, why was I so agitated?'
  },
  {
    startTime: 4490.09,
    person: 'Karol',
    text: ' Why my tone was so emotional at a certain point that I was like, really intense.'
  },
  {
    startTime: 4495.77,
    person: 'Karol',
    text: ' And I was, I got aware about that really quickly.'
  },
  {
    startTime: 4498.47,
    person: 'Karol',
    text: " Because that's a feedback loop that I implemented in my brain that I'm aware of these things."
  },
  { startTime: 4503.39, person: 'Karol', text: ' Most of the time, luckily now.' },
  {
    startTime: 4506.05,
    person: 'Karol',
    text: " And I'm like, I reached to my pocket, pull out the box with pills."
  },
  { startTime: 4513.01, person: 'Karol', text: " And I'm like, ah, that makes sense." },
  { startTime: 4515.25, person: 'Karol', text: " I haven't taken my pills today." },
  { startTime: 4517.21, person: 'Karol', text: ' Okay, my focus went away.' },
  {
    startTime: 4519.69,
    person: 'Karol',
    text: " So I wasn't able to control my emotions the way I would normally control them with pharmacological help for my lovely ADHD."
  },
  { startTime: 4530.65, person: 'Karol', text: " So it's like, oh, that's that's interesting." },
  {
    startTime: 4532.59,
    person: 'Karol',
    text: ' And then both me and my wife, we suffer from the lack of that interoception, we can go for hours.'
  },
  {
    startTime: 4541.47,
    person: 'Karol',
    text: ' And then at a certain point with very intense feeling, we realised, oh, we need to go like, I need to go to the toilet, or I need to eat something, or my mouth is really dry.'
  },
  { startTime: 4552.13, person: 'Karol', text: " I haven't drank anything in ages." },
  {
    startTime: 4554.63,
    person: 'Karol',
    text: " And then I wonder why I have a headache, because I don't ingest enough water over the day, etc, etc."
  },
  { startTime: 4560.55, person: 'Karol', text: " So that's actually interesting." },
  { startTime: 4562.03, person: 'Karol', text: ' And then activation energy on top of that.' },
  {
    startTime: 4565.47,
    person: 'Karol',
    text: ' I started some time ago to prepare a lot better in the evening for the next day.'
  },
  {
    startTime: 4573.83,
    person: 'Karol',
    text: ' So if I know I need to go to the office, and at the same time, I need to get my kids to school.'
  },
  {
    startTime: 4579.67,
    person: 'Karol',
    text: " Oh, I'm gonna like set up everything on a counter earlier, and maybe do breakfast in the evening, like prepare the breakfast in the evening and just put it in the fridge."
  },
  {
    startTime: 4590.85,
    person: 'Karol',
    text: " So that I don't have to spend that time in the morning where my expenditure of energy in the morning is humongous anyways, because I have two stubborn kids."
  },
  { startTime: 4601.17, person: 'Joanna', text: ' Yeah, yeah.' },
  {
    startTime: 4602.81,
    person: 'Karol',
    text: " So not knowing those terms, I'm actually actively working towards getting those things solved to a certain extent."
  },
  {
    startTime: 4613.27,
    person: 'Karol',
    text: ' And this is a conscious effort on strategies that helped me during the day so I can actually be productive.'
  },
  { startTime: 4625.65, person: 'Joanna', text: ' Exactly, exactly.' },
  {
    startTime: 4626.95,
    person: 'Joanna',
    text: " So that's, it's, it's, yeah, it's, they are relatable to what's happening."
  },
  {
    startTime: 4632.57,
    person: 'Joanna',
    text: ' But at the same time, when you when you know those terms, maybe maybe it will just get, you know, a little bit easier for you to research or, or to find any, any new strategies.'
  },
  { startTime: 4645.49, person: 'Karol', text: ' Okay.' },
  { startTime: 4646.01, person: 'Karol', text: ' Other aspects of the executive functions.' },
  {
    startTime: 4648.71,
    person: 'Karol',
    text: " Let's dive into the I have your notes here on my screen."
  },
  { startTime: 4654.13, person: 'Karol', text: " What's the impact planning?" },
  {
    startTime: 4656.65,
    person: 'Joanna',
    text: ' Yeah, basically, the executive functions, this is everything that happens between deciding that you need to do something and basically having it done.'
  },
  {
    startTime: 4666.51,
    person: 'Joanna',
    text: " And the, the myth that we just, you know, sit down and do something that's, that's a fantasy."
  },
  { startTime: 4672.67, person: 'Joanna', text: " And it's not not how it works, basically." },
  {
    startTime: 4675.49,
    person: 'Joanna',
    text: ' So we have to yeah, make a decision where when to do it.'
  },
  { startTime: 4681.33, person: 'Joanna', text: ' How much time do we need?' },
  { startTime: 4683.67, person: 'Joanna', text: ' How much time do we have?' },
  { startTime: 4685.57, person: 'Joanna', text: ' What what to do?' },
  { startTime: 4687.79, person: 'Joanna', text: ' And when how to divide this task?' },
  { startTime: 4690.19, person: 'Joanna', text: ' Who needs to know about it?' },
  { startTime: 4692.65, person: 'Joanna', text: ' What should I do to start?' },
  {
    startTime: 4695.13,
    person: 'Joanna',
    text: ' How would I make it easier for me to actually activate my brain?'
  },
  {
    startTime: 4701.13,
    person: 'Joanna',
    text: " What do I need beforehand so that I don't, you know, end up in the middle of the task without, you know, any resources."
  },
  {
    startTime: 4708.83,
    person: 'Joanna',
    text: ' So basically, these are all the cooperation, asking questions.'
  },
  {
    startTime: 4713.15,
    person: 'Joanna',
    text: " These are all the, you know, executive functions that are going more, let's say, automatically in a neurotypical brain, and then in neurotypical ones."
  },
  {
    startTime: 4724.75,
    person: 'Joanna',
    text: ' So basically, it requires more mental energy to just juggle those and to actually get them done.'
  },
  {
    startTime: 4730.89,
    person: 'Joanna',
    text: " So that's, that's like the, you know, very, let's say, short summary."
  },
  {
    startTime: 4735.93,
    person: 'Karol',
    text: ' A lot of people say that you should start by eating the frogs and doing the problematic task first.'
  },
  {
    startTime: 4742.87,
    person: 'Karol',
    text: " I think that's one of the things that really never works with people with ADHD."
  },
  {
    startTime: 4747.65,
    person: 'Karol',
    text: " The most complex task will be postponed indefinitely, because it's just terrifying for some reason."
  },
  {
    startTime: 4755.51,
    person: 'Karol',
    text: " And it's not terrifying that it actually induces fear, but it's like incomprehensible for the brain."
  },
  {
    startTime: 4766.05,
    person: 'Joanna',
    text: " It's too big, we don't, you know, like have the capacity to like, eat the frog all at once, but when we divide it?"
  },
  {
    startTime: 4774.41,
    person: 'Karol',
    text: ' This is, this is why, and this also works in the community we share online on Discord, right?'
  },
  {
    startTime: 4782.07,
    person: 'Karol',
    text: ' And this is why body doubling sessions are very effective at working with this executive dysfunction.'
  },
  {
    startTime: 4793.15,
    person: 'Karol',
    text: " Because in body doubling sessions, we're forced to estimate our tasks within a specific window of time."
  },
  {
    startTime: 4801.69,
    person: 'Karol',
    text: " It's not only about that accountability aspect that the psychological effect of being on a shared session with somebody and working alongside somebody on completely different things."
  },
  {
    startTime: 4813.27,
    person: 'Karol',
    text: ' But also that if those sessions are facilitated well, the facilitator will tell us, hey, this is a little bit too complex, maybe try to break it apart.'
  },
  {
    startTime: 4824.25,
    person: 'Karol',
    text: " And that's often a very difficult thing to break this apart."
  },
  { startTime: 4828.27, person: 'Karol', text: ' But with body doubling, you can practise.' },
  {
    startTime: 4830.99,
    person: 'Karol',
    text: " That's one of the formats I'm also running at work for the, we call it this cap abilities, community capabilities, something from Capgemini."
  },
  {
    startTime: 4844.01,
    person: 'Karol',
    text: ' We run body doubling sessions, for example, exactly to practise that and to practise estimation and breaking tasks apart so we can actually contribute to them.'
  },
  {
    startTime: 4853.67,
    person: 'Karol',
    text: ' But one of the things I found really cool is this lovely little tool that Oh, I think this QR code is a little bit too small.'
  },
  { startTime: 4861.49, person: 'Karol', text: ' Let me let me make it a little bit bigger.' },
  {
    startTime: 4867.69,
    person: 'Karol',
    text: ' So Goblin Tools is a very nice site where you can actually practise breaking things apart.'
  },
  {
    startTime: 4881.19,
    person: 'Karol',
    text: ' There is this to do magic to do you type in your task, and you click to break it apart and Goblin Tools uses some sort of a generative AI to start breaking that task apart into smaller pieces.'
  },
  {
    startTime: 4896.31,
    person: 'Karol',
    text: " Might not be ideal, but it helps to like break it into things that can actually be actionable because they're not big enough to cause that effect of forcing the postponement of the task."
  },
  {
    startTime: 4912.87,
    person: 'Karol',
    text: ' So this is a thing that I found really nice, especially if I have like big chunks of work to do.'
  },
  {
    startTime: 4919.69,
    person: 'Karol',
    text: ' I just sometimes type it into an LLM or type it into Goblin Tools and ask it to break things apart.'
  },
  {
    startTime: 4928.29,
    person: 'Karol',
    text: " And it helps with that executive function of tackling the task because it's just it's just not scary anymore in that sense, right?"
  },
  {
    startTime: 4938.21,
    person: 'Joanna',
    text: ' Yeah, I also enjoy Pomodoro technique, but you know, the typical division is like you just set an alarm clock or you have the special sites for that.'
  },
  {
    startTime: 4950.27,
    person: 'Joanna',
    text: " You just type, you know, Pomodoro and you will find many even YouTube videos, you know, with a, I don't know, German policeman just, you know, having a look at you every couple of minutes."
  },
  {
    startTime: 4961.65,
    person: 'Joanna',
    text: ' But basically the technique is 25 minutes of work and five minutes of rest.'
  },
  {
    startTime: 4970.35,
    person: 'Joanna',
    text: ' And then after four sessions, you have a longer break.'
  },
  {
    startTime: 4973.65,
    person: 'Joanna',
    text: " But what I do when I feel particularly overwhelmed and it is somehow linear, so I don't, I can't actually break it into smaller tasks."
  },
  {
    startTime: 4984.09,
    person: 'Joanna',
    text: ' I set a very, very short session, like eight minutes of work and four minutes of break.'
  },
  {
    startTime: 4991.65,
    person: 'Joanna',
    text: ' And that works because I actually sit down to work.'
  },
  {
    startTime: 4995.15,
    person: 'Joanna',
    text: " And when I when I, you know, when I when I'm supposed to work for an hour or two hours or even half an hour, and I don't feel well, there's always, you know, phone within reach and, you know, other things to do."
  },
  {
    startTime: 5006.49,
    person: 'Joanna',
    text: " So when it's eight minutes, I think, okay, I might start doing that."
  },
  {
    startTime: 5010.41,
    person: 'Joanna',
    text: " And then after eight minutes, it's easier, basically."
  },
  {
    startTime: 5014.17,
    person: 'Karol',
    text: ' I think that aspect of distractions is also worth mentioning that, well, dopamine works differently in brains that are neurotypical, but also the fact of stimulation, we require stimulation to begin things.'
  },
  {
    startTime: 5031.79,
    person: 'Karol',
    text: " That's also going to the other aspects of executive functions."
  },
  {
    startTime: 5039.15,
    person: 'Karol',
    text: " But it's a strange notion that people with ADHD can be at the same time understimulated and overstimulated."
  },
  { startTime: 5051.73, person: 'Karol', text: ' And sometimes even on the same channel.' },
  {
    startTime: 5054.83,
    person: 'Karol',
    text: ' Yeah, I know that I can be on an audio channel, I can be overstimulated and understimulated on the same time.'
  },
  {
    startTime: 5063.49,
    person: 'Karol',
    text: " So what happens is, for example, I'm overstimulated by background noise, like people talking in a place or something, but understimulated on certain tones or patterns."
  },
  { startTime: 5078.41, person: 'Karol', text: ' So I start whistling.' },
  {
    startTime: 5081.15,
    person: 'Karol',
    text: ' And whistling actually regulates me for some reason, or tapping on a table in a specific rhythm, or singing.'
  },
  {
    startTime: 5089.91,
    person: 'Karol',
    text: ' Singing is something I do daily because it regulates me.'
  },
  {
    startTime: 5093.59,
    person: 'Karol',
    text: ' Humming is something I do daily because it stimulates me the right way.'
  },
  { startTime: 5098.49, person: 'Karol', text: ' And because of that, I can do things.' },
  {
    startTime: 5100.71,
    person: 'Karol',
    text: " If I would be understimulated all the time, I wouldn't be able to do things."
  },
  { startTime: 5106.15, person: 'Karol', text: ' Just because.' },
  { startTime: 5108.09, person: 'Karol', text: " And it's weird for people." },
  {
    startTime: 5109.27,
    person: 'Karol',
    text: " It's annoying to a lot of people that I make so many sounds, especially when I'm playing board games with my wife."
  },
  { startTime: 5116.85, person: 'Karol', text: " She's very annoyed that I'm making sounds." },
  { startTime: 5119.13, person: 'Karol', text: ' But my brain is understimulated at that time.' },
  { startTime: 5122.37, person: 'Karol', text: ' It just is.' },
  { startTime: 5124.01, person: 'Karol', text: " And that's my curse." },
  { startTime: 5128.25, person: 'Joanna', text: ' Yeah, and hers apparently.' },
  {
    startTime: 5131.71,
    person: 'Joanna',
    text: " Yeah, but everybody's different and everybody has different needs."
  },
  {
    startTime: 5138.19,
    person: 'Joanna',
    text: ' And in situations, there are so many different ways in which we can experience this under and overstimulation.'
  },
  {
    startTime: 5148.55,
    person: 'Joanna',
    text: ' And when it comes to this distraction aspect, I also, apart from this focus switch, I like talking about that.'
  },
  {
    startTime: 5163.87,
    person: 'Joanna',
    text: ' I like to compare the stimuli to the sun and our filtering abilities to the blind.'
  },
  { startTime: 5171.61, person: 'Joanna', text: " So we have a window and there's sun coming in." },
  {
    startTime: 5174.89,
    person: 'Joanna',
    text: ' And basically, I also think that we have the unreliable blinds.'
  },
  {
    startTime: 5182.75,
    person: 'Joanna',
    text: " So they either shut down the sun completely or just don't work."
  },
  {
    startTime: 5191.15,
    person: 'Joanna',
    text: ' So there are many instances, as I said, with this default mode.'
  },
  {
    startTime: 5198.41,
    person: 'Joanna',
    text: ' So we are talking about everything, thinking about everything.'
  },
  {
    startTime: 5201.95,
    person: 'Joanna',
    text: ' And when the blinds, we cannot filter the light, everything is coming in.'
  },
  {
    startTime: 5206.53,
    person: 'Joanna',
    text: " And the people with more reliable, more, let's say, divided blinds can say, oh, just filter it a little bit and you'll be okay."
  },
  { startTime: 5214.91, person: 'Joanna', text: " But no, it doesn't happen." },
  { startTime: 5217.09, person: 'Joanna', text: ' I hear the people all around me.' },
  { startTime: 5219.25, person: 'Joanna', text: ' I see somebody here is chewing.' },
  { startTime: 5221.67, person: 'Joanna', text: " I smell somebody's perfume." },
  {
    startTime: 5223.97,
    person: 'Joanna',
    text: " I notice that somebody's angry and somebody's just raised their voice like two rooms apart from me."
  },
  {
    startTime: 5231.65,
    person: 'Joanna',
    text: " And it's a great quality on one hand for teachers, for trainers, for coaches, that you actually are capable of absorbing all those information in."
  },
  {
    startTime: 5244.85,
    person: 'Joanna',
    text: " But it's not sustainable to work like this for 40 hours a week, right?"
  },
  { startTime: 5250.93, person: 'Joanna', text: ' So we use that.' },
  {
    startTime: 5253.31,
    person: 'Joanna',
    text: " But on the other hand, we don't often get recharged the way that we need."
  },
  {
    startTime: 5259.99,
    person: 'Karol',
    text: ' When I got psychoeducation, the way this was explained to me is on default, a brain on the spectrum receives a lot more input from the environment and just is analysing everything.'
  },
  {
    startTime: 5275.33,
    person: 'Karol',
    text: ' Or when we shut down, we shut down and we are doing absolutely nothing.'
  },
  { startTime: 5279.83, person: 'Karol', text: ' So all the functions then shut down, right?' },
  { startTime: 5282.11, person: 'Karol', text: " But we're ingesting everything." },
  {
    startTime: 5284.09,
    person: 'Karol',
    text: " So if you're sitting in a cafeteria and we're trying to have a conversation with somebody, at the same time, I'm going to be listening into the table next to us, looking at the people at the counter ordering food."
  },
  { startTime: 5300.25, person: 'Karol', text: ' My brain would go everywhere, my eyes as well.' },
  {
    startTime: 5304.47,
    person: 'Karol',
    text: " And that may seem like, for example, it is completely disrespectful for the company I'm keeping at the table and trying to have a conversation because my brain is just ingesting everything."
  },
  {
    startTime: 5318.73,
    person: 'Karol',
    text: ' And this is where being medicated kicks in really nicely because then my brain stops processing this way.'
  },
  {
    startTime: 5325.99,
    person: 'Karol',
    text: " And I'm actually having a lot more brain power that I can devote to focused, conscious tasks."
  },
  {
    startTime: 5333.95,
    person: 'Karol',
    text: " So I'm no longer hearing every single small sound."
  },
  {
    startTime: 5340.51,
    person: 'Joanna',
    text: ' Yeah, your bandwidth basically is not stretched to every sound, just to one thing.'
  },
  {
    startTime: 5348.13,
    person: 'Joanna',
    text: ' So automatically, you can just divide more energy, devote more energy and attention to one person.'
  },
  {
    startTime: 5354.75,
    person: 'Joanna',
    text: ' This is what happens when I travel with my husband or we go to a restaurant and I hear everything all around me.'
  },
  {
    startTime: 5363.19,
    person: 'Joanna',
    text: ' And when a waiter or a steward comes in and my husband asks, oh, do you have this?'
  },
  { startTime: 5375.73, person: 'Joanna', text: ' Or maybe do you have that?' },
  {
    startTime: 5376.83,
    person: 'Joanna',
    text: " And I'm like, oh, my God, he just said that two tables ago."
  },
  { startTime: 5381.51, person: 'Joanna', text: ' Why do you ask that?' },
  { startTime: 5382.65, person: 'Joanna', text: ' I already heard that.' },
  {
    startTime: 5383.81,
    person: 'Joanna',
    text: " I know that they don't have this and that we can move there."
  },
  { startTime: 5387.11, person: 'Joanna', text: ' And I already know that.' },
  {
    startTime: 5388.61,
    person: 'Karol',
    text: ' Because your brain processed that because you actually heard that and actually processed that.'
  },
  {
    startTime: 5396.47,
    person: 'Karol',
    text: ' Neurotypical people would just not pick up on that entirely.'
  },
  { startTime: 5399.65, person: 'Karol', text: ' And that would be perfectly fine.' },
  { startTime: 5402.31, person: 'Joanna', text: ' Yeah.' },
  { startTime: 5402.65, person: 'Joanna', text: " And it's not expected, right?" },
  {
    startTime: 5405.07,
    person: 'Karol',
    text: " By the way, just on all the lovely examples that we're putting, there is actually a ADHD coach that's a very nice YouTuber."
  },
  {
    startTime: 5416.69,
    person: 'Karol',
    text: ' And he posts a lot of shorts over examples of how it is to have ADHD and not have to have ADHD.'
  },
  {
    startTime: 5425.47,
    person: 'Karol',
    text: " So I'm just going to push a QR code of this YouTube channel."
  },
  { startTime: 5430.71, person: 'Karol', text: ' The YouTube channel is called Life Actuator.' },
  { startTime: 5434.93, person: 'Karol', text: ' Absolutely brilliant examples.' },
  {
    startTime: 5436.45,
    person: 'Karol',
    text: " If somebody want to just dive in the differences between ADHD and neurotypical or being parent with ADHD, there's plenty of shorts and examples on that channel that I relate to personally."
  },
  {
    startTime: 5451.19,
    person: 'Karol',
    text: " And I do believe the guy on those I don't relate to because the guy actually works with people with ADHD like you do in a coaching capacity."
  },
  {
    startTime: 5459.55,
    person: 'Karol',
    text: " And he says about that in his longer form videos quite openly what he does and what's the process with him."
  },
  {
    startTime: 5467.23,
    person: 'Karol',
    text: " So that's also worth digging into just to get more of those examples."
  },
  {
    startTime: 5474.05,
    person: 'Karol',
    text: " That said, let's bring it back to IT and an office space."
  },
  {
    startTime: 5480.51,
    person: 'Karol',
    text: ' And how does ADHD or autism impact us in the office, in our work setting?'
  },
  { startTime: 5491.03, person: 'Karol', text: " And I'm looking at the task." },
  { startTime: 5492.45, person: 'Karol', text: ' We already covered masking, masking tacks.' },
  {
    startTime: 5496.57,
    person: 'Karol',
    text: " We kind of covered to a certain aspect is overwhelm and overstimulation, which in the office space is basically, okay, most of us work in open spaces, horrendous for focus, horrendous for overstimulation because we just pick up on, what's that?"
  },
  { startTime: 5517.39, person: 'Karol', text: " They're talking about this cool topic." },
  { startTime: 5519.11, person: 'Karol', text: " I'm going to join them, but I have to focus." },
  { startTime: 5522.21, person: 'Karol', text: ' Somebody passed.' },
  { startTime: 5523.11, person: 'Karol', text: ' I know this guy.' },
  { startTime: 5525.29, person: 'Karol', text: " Yeah, that's one of these, right?" },
  {
    startTime: 5527.99,
    person: 'Karol',
    text: " So that also probably in your notes, as I say, it triggers the dysregulation because we're constantly bombarded with stimuli."
  },
  {
    startTime: 5537.75,
    person: 'Karol',
    text: ' And then I think the two you have last in that list, overcompensation and perfectionism.'
  },
  {
    startTime: 5545.13,
    person: 'Karol',
    text: ' I think these are worth diving into for a little while.'
  },
  { startTime: 5550.45, person: 'Joanna', text: ' Yeah, sure.' },
  {
    startTime: 5551.17,
    person: 'Joanna',
    text: ' I mean, when we talk about all the aspects that you just nicely wrapped up, they end up costing us so much bandwidth, so much energy, so much mental capacity that we are no longer able to devote to starting tasks or completing something within a deadline or whatever.'
  },
  {
    startTime: 5580.31,
    person: 'Joanna',
    text: " And as a result, we believe that there is something wrong with us because we feel like we have to compensate for the fact that we don't do that easy and simple tasks."
  },
  { startTime: 5599.09, person: 'Joanna', text: ' We start making mistakes.' },
  {
    startTime: 5600.57,
    person: 'Joanna',
    text: " I mean, if you have to mask all the time, if you have to filter out all those stimuli that is bombarding you all the time, or you work in an environment that doesn't allow you to structure the tasks, or you don't even know that you're neurodivergent."
  },
  {
    startTime: 5620.23,
    person: 'Joanna',
    text: " So instead of using all the tools that we are just numbering here, you are naming them very nicely, we just think, oh my God, what's wrong with me?"
  },
  { startTime: 5630.71, person: 'Joanna', text: " What's wrong with me?" },
  { startTime: 5631.37, person: 'Joanna', text: " What's wrong with me?" },
  { startTime: 5632.55, person: 'Joanna', text: ' So because of that, we have to overcompensate.' },
  {
    startTime: 5635.13,
    person: 'Joanna',
    text: " And this is exactly what happens when we can't get that to work."
  },
  {
    startTime: 5640.57,
    person: 'Joanna',
    text: " It's because when we actually sit down and start doing it, many people don't, I mean, this used to happen to me as well."
  },
  {
    startTime: 5648.45,
    person: 'Joanna',
    text: " When I didn't trust myself, that I will be able to take a break and then go back and do a good job."
  },
  { startTime: 5655.97, person: 'Joanna', text: " After that, I wouldn't get a break." },
  {
    startTime: 5659.41,
    person: 'Joanna',
    text: " So it was a very natural, let's say, urge not to get down to work, because I knew it would equal basically torture, because I wouldn't eat, I wouldn't go to the bathroom, I wouldn't move."
  },
  {
    startTime: 5671.69,
    person: 'Joanna',
    text: " So it's normal for the body to oppose it with all the force, all the energy that we have."
  },
  { startTime: 5679.75, person: 'Joanna', text: ' So this is the cycle.' },
  {
    startTime: 5682.85,
    person: 'Joanna',
    text: " So you drain all the energy you have, so then you have no energy and you procrastinate, you don't do things, you miss the deadlines and everything."
  },
  { startTime: 5695.55, person: 'Joanna', text: ' And after that, you need to overcompensate.' },
  {
    startTime: 5698.73,
    person: 'Joanna',
    text: " So instead of working in a more balanced way, I'm not saying you need to force yourself to work evenly all the time, because this is not achievable to anyone, let alone ADHD years."
  },
  {
    startTime: 5715.13,
    person: 'Joanna',
    text: " But with that, you actually start, when you don't drain your battery to 2%, you only drain it to 30."
  },
  { startTime: 5723.85, person: 'Joanna', text: ' And then take care of yourself.' },
  {
    startTime: 5726.41,
    person: 'Joanna',
    text: ' When you have 30% of your energy, then you easily go back to 60.'
  },
  {
    startTime: 5731.87,
    person: 'Joanna',
    text: " And as I said, some time ago, I'm a coach, so I cannot help you when you are in crisis, I can help you when you have this degree of resources."
  },
  { startTime: 5745.63, person: 'Joanna', text: ' So this cycle, burnout cycle, the tricky part.' },
  { startTime: 5752.53, person: 'Karol', text: " It's vicious." },
  {
    startTime: 5754.13,
    person: 'Karol',
    text: ' I vaguely remember my wife quoting somebody, like some sort of a content creator saying something like this.'
  },
  {
    startTime: 5764.49,
    person: 'Karol',
    text: ' I was watching my Roomba roaming around cleaning the floor.'
  },
  {
    startTime: 5769.01,
    person: 'Karol',
    text: " And at a certain point with the task not finished, it says I'm out of battery, I'm going back to the docking station to recharge."
  },
  { startTime: 5776.97, person: 'Karol', text: " And that person was like, why can't I do that?" },
  { startTime: 5781.03, person: 'Karol', text: ' I should do that.' },
  {
    startTime: 5782.09,
    person: 'Karol',
    text: " My Roomba is smarter than I am in terms of, it's not even drained with battery, it just goes recharge at 20% battery."
  },
  { startTime: 5789.67, person: 'Karol', text: ' Why am I not doing that?' },
  { startTime: 5791.75, person: 'Karol', text: " It's exactly like that." },
  {
    startTime: 5794.97,
    person: 'Karol',
    text: " Personally, I do implement breaks in my work, like to completely shift focus to something unrelated to work in the time that I'm working, because being effective and efficient eight hours a day is an impossibility for even neurotypical people that they also take breaks."
  },
  {
    startTime: 5818.45,
    person: 'Karol',
    text: " But from my perspective of my brain, I need to take a break that's completely out of context."
  },
  {
    startTime: 5825.09,
    person: 'Karol',
    text: " Because if I still remain in that context, that's just going to drain me further."
  },
  {
    startTime: 5830.75,
    person: 'Karol',
    text: ' So opening YouTube for a second, just to watch a video or two, 10, 15 minutes, at the time also drinking something, eating something, especially something stupid, just comedians or somebody doing sketches, stories, whatever.'
  },
  {
    startTime: 5852.21,
    person: 'Karol',
    text: " Completely different context, my brain recharges and I'm like, okay, where was I on?"
  },
  { startTime: 5856.11, person: 'Karol', text: ' Oh, okay.' },
  { startTime: 5858.97, person: 'Karol', text: ' And work goes, right?' },
  {
    startTime: 5861.69,
    person: 'Karol',
    text: " But there are days where I sit just trying to focus for the whole day and it's so inefficient and it works so badly when I'm just stressed out about something."
  },
  {
    startTime: 5875.01,
    person: 'Karol',
    text: ' And like you said, vicious cycle of overcompensating and you go into that overcompensating mode, efficiency is out the window.'
  },
  { startTime: 5884.11, person: 'Karol', text: " It's just horrendous." },
  {
    startTime: 5886.31,
    person: 'Karol',
    text: ' And that happens more often than people would think.'
  },
  {
    startTime: 5891.23,
    person: 'Karol',
    text: " And that's again, the severity aspect of being on the spectrum, because those things happen very often for a normal person, unless they're suffering from depression, burnout or something like that."
  },
  {
    startTime: 5904.83,
    person: 'Karol',
    text: " This would happen maybe once a month, once every two months, they have this kind of day where they, oh, it's just not going."
  },
  {
    startTime: 5913.31,
    person: 'Karol',
    text: ' For a neuro-atypical person, that would be every second day, every third day, that is just, this is a bad day.'
  },
  { startTime: 5921.59, person: 'Karol', text: " I shouldn't be working on this." },
  {
    startTime: 5922.97,
    person: 'Karol',
    text: ' I should probably do something lighter, but I have to, but I should.'
  },
  { startTime: 5929.27, person: 'Joanna', text: ' And overcompensate.' },
  {
    startTime: 5930.85,
    person: 'Joanna',
    text: ' And if you gave yourself a walk for an hour and decided to do half of the tasks that were assigned to you today, you would easily make, you know, 150% the next day.'
  },
  { startTime: 5947.99, person: 'Joanna', text: ' The aspect of trusting yourself, basically.' },
  { startTime: 5951.51, person: 'Karol', text: ' I see.' },
  {
    startTime: 5952.61,
    person: 'Karol',
    text: " I need to ask one of my colleagues about what he's doing."
  },
  { startTime: 5955.89, person: 'Karol', text: " He's always going out when it's lunchtime." },
  {
    startTime: 5958.93,
    person: 'Karol',
    text: " And it's not about going to a restaurant because in Poland it's very common that during lunchtime in the office, we go somewhere to eat like a bigger meal."
  },
  {
    startTime: 5967.69,
    person: 'Karol',
    text: " In the Netherlands, it's, lunches are a lot more simple."
  },
  {
    startTime: 5972.35,
    person: 'Karol',
    text: " They just take sandwiches and that's pretty much it."
  },
  {
    startTime: 5976.21,
    person: 'Karol',
    text: ' But people do still sit together in the communal space to eat.'
  },
  {
    startTime: 5981.47,
    person: 'Karol',
    text: ' But he specifically, just grabbing his coat and going out.'
  },
  {
    startTime: 5986.99,
    person: 'Karol',
    text: ' And I need to ask him this, is that something he does deliberate to reset?'
  },
  { startTime: 5992.09, person: 'Karol', text: ' Because this seems like a strategy to do that.' },
  {
    startTime: 5996.47,
    person: 'Karol',
    text: " And I've been doing that in summertime, lunchtime, I just grab a sandwich and go out."
  },
  { startTime: 6002.01, person: 'Karol', text: " And that's a great reset." },
  {
    startTime: 6004.47,
    person: 'Karol',
    text: " And I've been talking to one of my friends who's an architect, a very, quite a known one."
  },
  {
    startTime: 6011.25,
    person: 'Karol',
    text: " He told me, well, for me during the day, and this guy is not diagnosed, but I'm pretty certain he's neuroatypical by the traits I see in him."
  },
  {
    startTime: 6022.21,
    person: 'Karol',
    text: " During the day, sometimes if I have home office days, I don't take a shower in the morning just to have that break during the day to go to take a shower, to reset, because that's my sometimes my eureka moment because I reset and my brain starts working again."
  },
  {
    startTime: 6039.33,
    person: 'Karol',
    text: ' And these are just like small things that we can really implement to help us deal with this.'
  },
  {
    startTime: 6046.89,
    person: 'Karol',
    text: ' But again, the problem is we need to be first of all, conscious of these things.'
  },
  {
    startTime: 6052.69,
    person: 'Karol',
    text: ' Second of all, have resources to actually act upon these signals.'
  },
  {
    startTime: 6057.39,
    person: 'Karol',
    text: " If we're in a state that we don't have resources, these kinds of strategies will not help because you're not able to implement them because you need serious help."
  },
  {
    startTime: 6066.43,
    person: 'Karol',
    text: " That's why the disclaimer at the beginning of our session, go seek professional help."
  },
  {
    startTime: 6072.27,
    person: 'Karol',
    text: " And this is often difficult because a lot of people just don't realise that this is actually something that they would need help for."
  },
  { startTime: 6079.69, person: 'Joanna', text: ' Exactly.' },
  {
    startTime: 6080.61,
    person: 'Joanna',
    text: ' Because we think everybody has that and you just have to push through.'
  },
  { startTime: 6085.15, person: 'Karol', text: ' Yeah.' },
  { startTime: 6085.45, person: 'Karol', text: " That's the bias of perception, right?" },
  {
    startTime: 6087.97,
    person: 'Karol',
    text: ' That the bias perception that we think that our view of the world is a common view of the world.'
  },
  {
    startTime: 6093.41,
    person: 'Karol',
    text: ' And in our families, given that neuroatypicality is genetic, that is a common view of the world in our family because our family is neuroatypical.'
  },
  {
    startTime: 6104.89,
    person: 'Karol',
    text: " At least by the genetic trails of the family because that's a different thing partnering up with somebody."
  },
  {
    startTime: 6113.77,
    person: 'Karol',
    text: " But it's difficult in that sense because the perception is flawed by environmental conditioning, genetics and family ties and etc."
  },
  {
    startTime: 6125.49,
    person: 'Karol',
    text: " It's interesting at the same time to observe that when you finally get psychoeducation and you start seeing the patterns, it's like, oh, that's why."
  },
  { startTime: 6136.11, person: 'Joanna', text: ' Yeah.' },
  { startTime: 6136.45, person: 'Joanna', text: ' Connecting the dots is always rewarding.' },
  {
    startTime: 6141.11,
    person: 'Karol',
    text: " And all of a sudden you don't feel so emotional about your parents, right?"
  },
  {
    startTime: 6145.69,
    person: 'Karol',
    text: " Because that's why they might be actually neuroatypical."
  },
  {
    startTime: 6151.05,
    person: 'Karol',
    text: " So they're just not aware of that so that they act that way."
  },
  {
    startTime: 6154.59,
    person: 'Karol',
    text: " It's not because they would want to act that way, but because they're tired, overstimulated, whatever, and they have no capacity to act differently."
  },
  { startTime: 6163.49, person: 'Karol', text: " It's like, oh, that makes sense, actually." },
  { startTime: 6166.27, person: 'Joanna', text: ' Yeah, exactly.' },
  { startTime: 6167.51, person: 'Joanna', text: ' Exactly.' },
  {
    startTime: 6169.01,
    person: 'Joanna',
    text: ' Then you actually know what stimulation, overstimulation they had to undergo.'
  },
  {
    startTime: 6176.01,
    person: 'Karol',
    text: ' And this, I think, brings us to the last part of what we had in the skeleton of our conversation is how to help yourself or accommodate yourself.'
  },
  {
    startTime: 6188.03,
    person: 'Karol',
    text: ' These are just a few really fine points that we already touched upon is recognising your limits and reading your list, basically building that self-trust, which is to trust your instincts, trust the signals that you have or build mechanisms to actually notice those signals before they come to extremes.'
  },
  {
    startTime: 6214.57,
    person: 'Karol',
    text: ' Now, shame and self-blame that these are good ones because they stem from these environmental conditionings that we already talked about.'
  },
  {
    startTime: 6222.67,
    person: 'Karol',
    text: " And pushing through doesn't work here because it just drains more."
  },
  { startTime: 6232.9, person: 'Karol', text: ' Yeah.' },
  { startTime: 6233.54, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 6234.58,
    person: 'Joanna',
    text: ' So when it comes to how we feel, basically, so there are many people who come to me and say, OK, so help me do those things.'
  },
  { startTime: 6244.06, person: 'Joanna', text: ' And then when I do them, I will feel better.' },
  { startTime: 6247.48, person: 'Joanna', text: " And it's the other way around." },
  { startTime: 6249.62, person: 'Joanna', text: ' We do well when we feel well.' },
  {
    startTime: 6252.56,
    person: 'Joanna',
    text: " And if feeling well worked better after we've done something, we people who have experienced burnout, who overwork, who over exerted ourselves, we would know we would have those rewards."
  },
  { startTime: 6269.58, person: 'Joanna', text: " And somehow we don't." },
  {
    startTime: 6271.18,
    person: 'Joanna',
    text: " It's because, you know, doing things to feel better, like, I mean, achieving and completing tasks, being like, you know, this productive member of society, it doesn't reward us in that sense that we think it will."
  },
  {
    startTime: 6284.96,
    person: 'Joanna',
    text: " So basically, it's the other way around, just like you said, with this reset or the breaks or just, you know, reducing this activation energy."
  },
  {
    startTime: 6296.2,
    person: 'Joanna',
    text: ' When you take some extra time to get yourself feel better, then it will be much, much easier to do anything.'
  },
  { startTime: 6305.94, person: 'Joanna', text: ' So we do well when we feel well.' },
  { startTime: 6307.4, person: 'Joanna', text: ' This is what we have learned.' },
  { startTime: 6312.02, person: 'Joanna', text: " We've been taught to do exactly the opposite." },
  {
    startTime: 6315.54,
    person: 'Joanna',
    text: " And that's what spirals this vicious circle of overcompensation and paralysis."
  },
  {
    startTime: 6325.18,
    person: 'Karol',
    text: ' You mentioned one important thing that I think a lot of people on the spectrum also struggle with in terms of motivation.'
  },
  {
    startTime: 6336.58,
    person: 'Karol',
    text: " Because internal motivation is also a problem with with with executive functions, we may have that motivation, but it's still not enough."
  },
  { startTime: 6345.3, person: 'Karol', text: ' And external motivation is often required.' },
  {
    startTime: 6347.76,
    person: 'Karol',
    text: ' But one of the aspects, and again, that also goes down to neuroscience and dopamine is delayed gratification.'
  },
  {
    startTime: 6357.16,
    person: 'Karol',
    text: ' A lot of people on the spectrum have absolute nightmarish problem with delayed gratification, we need to have instant results, instant everything.'
  },
  {
    startTime: 6367.46,
    person: 'Karol',
    text: " That's why addiction to YouTube, TikTok, and a lot of things like that happen, because this is instant gratification."
  },
  {
    startTime: 6376,
    person: 'Karol',
    text: " Instant gratification in terms of the dopamine boost in the brain, eating sweets, snacking, I do often have, and that's also visible in streams, I often have something that just is crunchy, like banana chips or something else, and I snack on it, because that's a dopamine boost in my brain."
  },
  {
    startTime: 6398.32,
    person: 'Karol',
    text: " That's something working on that delayed gratification."
  },
  { startTime: 6401.3, person: 'Karol', text: ' This is sugar, sugar is gratification.' },
  {
    startTime: 6404.04,
    person: 'Karol',
    text: " So my brain is tricked into like, oh, yeah, great, let's focus."
  },
  {
    startTime: 6410.18,
    person: 'Karol',
    text: " And it's a difficult aspect, because if you don't see the effects of your work soon, it lowers the motivation and even further impacts the executive functions, which is, again, something to work on."
  },
  {
    startTime: 6425.68,
    person: 'Karol',
    text: ' If you have the resources to implement another way to find that instant gratification to get that dopamine boost.'
  },
  {
    startTime: 6432.82,
    person: 'Joanna',
    text: ' Yeah, and this is something that many people come to me with, especially from it, they say, I need to switch a job, I need to change something, because I need something that gives me tangible results.'
  },
  {
    startTime: 6443.36,
    person: 'Joanna',
    text: " Like, I can't do it anymore, just like, you know, writing code and not seeing any results."
  },
  {
    startTime: 6448.46,
    person: 'Joanna',
    text: ' So what happens if this is, you know, goes pushed through it?'
  },
  { startTime: 6452.76, person: 'Joanna', text: ' What does it change?' },
  { startTime: 6453.98, person: 'Joanna', text: " It doesn't change anything." },
  { startTime: 6455.62, person: 'Karol', text: " Oh, yeah, that's difficult." },
  {
    startTime: 6457.14,
    person: 'Karol',
    text: ' Sometimes we can do this in coding, because coding is actually, in that sense, easier than architecture, because architecture takes a lot of time to fruition.'
  },
  {
    startTime: 6465.92,
    person: 'Karol',
    text: ' So sometimes I see the effects of what I designed two years later, like real tangible effects.'
  },
  {
    startTime: 6472.24,
    person: 'Karol',
    text: " When you're coding, you actually can make it work in minutes, at times, sometimes longer, depending on the scale of what you're building."
  },
  { startTime: 6480.38, person: 'Karol', text: " So it's actually easier if you're a developer." },
  {
    startTime: 6484.04,
    person: 'Karol',
    text: ' But I get it, some of those things that we build, they need to work in cohesion with other things.'
  },
  {
    startTime: 6489.06,
    person: 'Karol',
    text: " And alone, they're not just giving that satisfaction."
  },
  { startTime: 6492.14, person: 'Karol', text: " And it's horrendous." },
  { startTime: 6494.16, person: 'Karol', text: " And it's just troublesome." },
  { startTime: 6495.78, person: 'Karol', text: " And it's just painful." },
  {
    startTime: 6499.54,
    person: 'Karol',
    text: " That's little pain for people on the spectrum, not to be able to get that satisfaction."
  },
  {
    startTime: 6507.8,
    person: 'Karol',
    text: ' And this impacts further and goes, again, into the vicious cycles of overcompensation, etc., and trying to be perfect about things.'
  },
  {
    startTime: 6516.52,
    person: 'Karol',
    text: ' Because that potentially would give that dopamine boost, but in essence, is a trap for us not to get it.'
  },
  { startTime: 6525.6, person: 'Karol', text: ' And these are always difficult things.' },
  { startTime: 6528.54, person: 'Karol', text: " And they're individual things." },
  { startTime: 6530.84, person: 'Karol', text: ' Everybody will have it a little bit different.' },
  {
    startTime: 6533,
    person: 'Karol',
    text: " If I talk to other people that are neuro atypical, with my neuro atypical community at work, for example, everybody's completely different."
  },
  {
    startTime: 6541.26,
    person: 'Karol',
    text: ' Everybody has similar problems, but yet, absolutely different problems.'
  },
  {
    startTime: 6545.36,
    person: 'Karol',
    text: ' And they have different aspects that require attention when they work.'
  },
  { startTime: 6550.34, person: 'Karol', text: ' And they need different things.' },
  {
    startTime: 6552.16,
    person: 'Karol',
    text: ' Some people need exactly the same desk at the office.'
  },
  {
    startTime: 6555.48,
    person: 'Karol',
    text: ' Others will need to have more of a quiet space, so they seek something more remote in the office, etc.'
  },
  {
    startTime: 6563.18,
    person: 'Karol',
    text: " And these are accommodations that are difficult to generalise, because they're individual."
  },
  {
    startTime: 6571.16,
    person: 'Karol',
    text: " And with that note, and being conscious about resource management, because I do notice that your energy is going lower and lower by the minute, I think it's worth to stop here."
  },
  {
    startTime: 6587.74,
    person: 'Karol',
    text: ' And for everybody still watching, and everybody who will be watching the recording of this session, to reiterate, if you are without resources, go seek professional help.'
  },
  {
    startTime: 6602.78,
    person: 'Karol',
    text: ' If you have resources, and you need the help to implement changes in your life, yes, go seek a job coach, ADHD coach, and try to implement changes, try to find the procedures or strategies to work better, cope better with your reality.'
  },
  { startTime: 6624.94, person: 'Karol', text: ' This is a complex and difficult topic.' },
  { startTime: 6628.74, person: 'Karol', text: " And everybody's going to be different." },
  {
    startTime: 6630.82,
    person: 'Karol',
    text: " My story is going to be different than Joanna's story."
  },
  { startTime: 6635.1, person: 'Karol', text: " And different than anybody else's story." },
  {
    startTime: 6637.68,
    person: 'Karol',
    text: ' We may have similar traits and similar problems.'
  },
  {
    startTime: 6641.44,
    person: 'Karol',
    text: ' But the solutions to them may be completely different, because completely different things may work for us.'
  },
  { startTime: 6648.36, person: 'Karol', text: " And I think that's worth always underlining." },
  { startTime: 6652.48, person: 'Joanna', text: ' Exactly, exactly.' },
  {
    startTime: 6654.02,
    person: 'Joanna',
    text: " And I will I will end on the note that always, you know, never, never wait until you know, your energy is to percent, try to try to navigate when when it's when it's higher, and and then you can actually either take care of yourself on a daily basis, or just look for coaching for any kind of support to help you rebuild those elements of your everyday life that drain you."
  },
  { startTime: 6681.78, person: 'Joanna', text: " And they don't have to." },
  { startTime: 6683, person: 'Joanna', text: ' So basically, the ask for help.' },
  {
    startTime: 6686.66,
    person: 'Joanna',
    text: ' And I know that, you know, people have better, better intentions.'
  },
  {
    startTime: 6690.44,
    person: 'Joanna',
    text: ' And whenever you expect better intentions, and good, good intentions, you basically everybody will be happy to help you because everybody around you benefits from your good condition, basically.'
  },
  {
    startTime: 6706.78,
    person: 'Karol',
    text: " And if you're in a toxic environment that doesn't support, change it."
  },
  {
    startTime: 6714.33,
    person: 'Karol',
    text: ' If you cannot change your work, change your work.'
  },
  {
    startTime: 6718.07,
    person: 'Karol',
    text: " That's a very confusing frame phrase at first, but it's, but it has a very specific meaning."
  },
  { startTime: 6726.03, person: 'Joanna', text: ' Yes, yes, we keep our fingers crossed for you.' },
  { startTime: 6729.01, person: 'Joanna', text: ' And thank you very much for your attention.' },
  { startTime: 6732.07, person: 'Joanna', text: ' The scarcest resource that we have.' },
  { startTime: 6736.17, person: 'Karol', text: ' Very true.' },
  {
    startTime: 6737.65,
    person: 'Karol',
    text: " And before we leave entirely the stream and shut down, in less than a week, we're diving into a completely different topic, one close to my my heart, because I do enjoy these kind of events."
  },
  {
    startTime: 6750.79,
    person: 'Karol',
    text: " We're going to be looking at the behind the scenes of organising a conference."
  },
  {
    startTime: 6754.83,
    person: 'Karol',
    text: ' And we have some lovely people that are responsible for quite a few nice conferences in Europe.'
  },
  { startTime: 6762.21, person: 'Karol', text: ' We have Anika Schoenjans.' },
  {
    startTime: 6765.57,
    person: 'Karol',
    text: " And this is I'm going to butcher because that's a French name, as far as I remember, Maxime Sanglant-Sharriere."
  },
  {
    startTime: 6774.51,
    person: 'Karol',
    text: " Not exactly a good, I'm not exactly a linguist here."
  },
  {
    startTime: 6779.39,
    person: 'Karol',
    text: ' They will be going through the process of organising a conference, the logistics of it, but also the process of call for papers and selecting speakers for a conference.'
  },
  {
    startTime: 6791.29,
    person: 'Karol',
    text: " And I think that's going to be a very interesting one, especially that they work also on a conference that's close to my heart called DDD Europe."
  },
  { startTime: 6800.19, person: 'Karol', text: " Hopefully I'll be there in 26." },
  { startTime: 6803.33, person: 'Karol', text: " So that's less than a week." },
  {
    startTime: 6806.55,
    person: 'Karol',
    text: ' And by that, thank you all for joining the stream with those quite a few people still with us online, because we see the stats on LinkedIn and YouTube.'
  },
  { startTime: 6818.09, person: 'Karol', text: ' And have a lovely evening.' },
  { startTime: 6821.75, person: 'Joanna', text: ' Enjoy, recharge, and thank you.' }
])
</script>

<style scoped></style>
