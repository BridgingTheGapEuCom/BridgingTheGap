<template>
  <div class="w-full">
    <StreamLayout
      :transcript="transcript"
      name="Loosely Coupled - Talk the Talk and Walk the Walk with a Living Language"
      video-id="cjxESvptq10"
    />
  </div>
</template>

<script lang="ts" setup>
const transcript = ref([
  {
    startTime: 85.2,
    person: 'Karol',
    text: ' Good morning, good afternoon, and good evening, everybody.'
  },
  {
    startTime: 88.86,
    person: 'Karol',
    text: ' Welcome to another episode of Loosely Coupled, brought to you by Bridging the App.'
  },
  {
    startTime: 92.74,
    person: 'Karol',
    text: ' My name is Karol Skrzymowski, and I will be your host.'
  },
  {
    startTime: 95.66,
    person: 'Karol',
    text: " And today, I'm out of beans, so no coffee, but I got some green tea for a change, so still sufficiently caffeinated."
  },
  { startTime: 104.1, person: 'Karol', text: ' Tane also counts, right?' },
  {
    startTime: 106.06,
    person: 'Karol',
    text: " And today, we're kicking off the year, so if anybody didn't notice, we changed the year, so happy new year, everybody."
  },
  { startTime: 114, person: 'Karol', text: ' A little bit late, but never too late.' },
  {
    startTime: 116,
    person: 'Karol',
    text: " And we're kicking off with a very interesting topic of a living language, which is something quite important for architects and dev teams and business to actually look into if they want to be successful in implementing any kind of IT solution without a lot of bugs and failures and misconceptions and assumptions along the way."
  },
  {
    startTime: 139.64,
    person: 'Karol',
    text: " And joining me today to chat about this is Chris Simon, coming to us, well, used to be from Australia, now it's from France."
  },
  {
    startTime: 149.04,
    person: 'Karol',
    text: ' Chris is a technology coach and advisor helping technology teams, start-ups, CTOs to get running and doing some really cool fun stuff.'
  },
  { startTime: 159.94, person: 'Karol', text: ' So, Chris, welcome to the stream.' },
  { startTime: 164.02, person: 'Chris', text: " Hi, Karol, how's it going?" },
  { startTime: 166.06, person: 'Karol', text: " Yeah, it's a nice evening in the Netherlands." },
  { startTime: 168.3, person: 'Karol', text: ' How about France?' },
  { startTime: 169.52, person: 'Karol', text: " How's the weather?" },
  {
    startTime: 170.56,
    person: 'Chris',
    text: " We're getting a little rain tonight, but it's not so bad."
  },
  {
    startTime: 172.96,
    person: 'Chris',
    text: " It's starting, I can feel the weather's gradually starting to pull up out of the depths of the midwinter, so that's nice for me because it's been much colder than I'm used to."
  },
  { startTime: 183.38, person: 'Karol', text: ' I would guess so, yeah.' },
  {
    startTime: 185.04,
    person: 'Karol',
    text: ' This year is also quite cold, minus 20 in Poland at times, heavy snowfall in the Netherlands.'
  },
  {
    startTime: 196.64,
    person: 'Karol',
    text: " I mean, I asked my neighbours and they haven't seen so much snow in years."
  },
  {
    startTime: 201.38,
    person: 'Karol',
    text: " So, I literally had to go on the roof and shovel snow off so that it doesn't collapse."
  },
  {
    startTime: 205.92,
    person: 'Karol',
    text: " And we literally had some instances where roofs collapsed in the Netherlands because people were not aware that you should actually go and remove the snow because it's heavy."
  },
  { startTime: 215.06, person: 'Karol', text: " So, yeah, it's going." },
  {
    startTime: 217.18,
    person: 'Karol',
    text: " But it's New Year, no snow anymore, only a little bit of cold."
  },
  { startTime: 221.68, person: 'Karol', text: " That's the thing." },
  {
    startTime: 224.08,
    person: 'Karol',
    text: ' So, Chris, tell us something about yourself because you know, Australia is far away.'
  },
  { startTime: 230.78, person: 'Karol', text: ' Not everybody knows you.' },
  {
    startTime: 231.9,
    person: 'Karol',
    text: " You're in the DDD space, so everybody watching from interested in DDD, they probably know your name, but well, we have a lot of different ideas at times."
  },
  { startTime: 241.44, person: 'Karol', text: ' So, go ahead.' },
  { startTime: 243.18, person: 'Chris', text: ' Sure.' },
  { startTime: 243.92, person: 'Chris', text: ' Yeah.' },
  {
    startTime: 244.2,
    person: 'Chris',
    text: " So, I guess my background, I've spent most of my career working in startups."
  },
  {
    startTime: 248.8,
    person: 'Chris',
    text: ' I was a co-founder of a startup in Australia a long time ago now, 20 something plus years ago.'
  },
  {
    startTime: 255.519,
    person: 'Chris',
    text: ' And so, you know, as a co-founder, I was a technical co-founder.'
  },
  {
    startTime: 259.36,
    person: 'Chris',
    text: " So, I've had the title of CTO for a long time, since well before I deserved it or had earned it, which was quite fun."
  },
  {
    startTime: 266.64,
    person: 'Chris',
    text: ' I used to joke that I was the chief technology officer and the chief lunch vetcher and the chief bathroom cleaner because, you know, there were five of us in the company.'
  },
  { startTime: 274.14, person: 'Chris', text: ' But over time, that company grew.' },
  {
    startTime: 276.18,
    person: 'Chris',
    text: ' We ended up launching a couple of different business lines and products.'
  },
  { startTime: 279.46, person: 'Chris', text: ' We sold one of them to a bank in Australia.' },
  {
    startTime: 282.12,
    person: 'Chris',
    text: " The other one's still running with a decent sized staff and is reasonably successful."
  },
  {
    startTime: 286.6,
    person: 'Chris',
    text: ' And about four years ago, I decided, you know, I spent a lot of my time working in this one company.'
  },
  {
    startTime: 291.14,
    person: 'Chris',
    text: " We've grown in and evolved a lot over the years, but I was really keen to see more, but didn't want to completely lose my connection."
  },
  { startTime: 298.28, person: 'Chris', text: ' So, I decided to go into consulting.' },
  {
    startTime: 300.26,
    person: 'Chris',
    text: " So, I've been an independent consultant for the past four years."
  },
  {
    startTime: 302.88,
    person: 'Chris',
    text: " I've done a bunch of different things, do a lot of coaching of startup CTOs, do a lot of consulting for engineering teams, helping them with architecture and architecture review."
  },
  {
    startTime: 313.82,
    person: 'Chris',
    text: ' I found over the years with that business that the area that I got most excited about was the architecture and the design, because I saw what an impact it had on the long-term success of the business and the cost base of operating and evolving the business.'
  },
  {
    startTime: 327.66,
    person: 'Chris',
    text: ' You know, when you watch the same software system literally for 20 years and you see how the design decisions made in 2005 are still having an effect in 2024, 2025, it really gives you an appreciation for the impact of some of the design decisions that you make and architectural decisions that you make.'
  },
  {
    startTime: 344.54,
    person: 'Chris',
    text: " I know a lot of people often think, you know, they're thinking about design decisions with a timeframe of six months or 12 months."
  },
  {
    startTime: 350.72,
    person: 'Chris',
    text: " And, you know, in a lot of cases, maybe that's reasonable."
  },
  {
    startTime: 353.32,
    person: 'Chris',
    text: ' Things are evolving so rapidly, systems are put to bed.'
  },
  {
    startTime: 356.44,
    person: 'Chris',
    text: ' But, you know, I always have in my head, like, you just never know which line of code is still going to be sitting there, you know, churning away 20, 30 years from now.'
  },
  {
    startTime: 364.42,
    person: 'Karol',
    text: ' Usually the bad one that is going to stay, right?'
  },
  { startTime: 367.06, person: 'Chris', text: " That's true." },
  {
    startTime: 368.64,
    person: 'Chris',
    text: ' But this journey over the years, it sort of, you know, fortunately led me into the world of DDD.'
  },
  {
    startTime: 373.76,
    person: 'Chris',
    text: ' And so I made that a core focus of my consulting practise as well.'
  },
  {
    startTime: 377.12,
    person: 'Chris',
    text: " I've ended up speaking at DDD Europe a few times and running training programmes in DDD."
  },
  {
    startTime: 382.44,
    person: 'Chris',
    text: " I'm running a training programme through DDD Academy in a couple of months called Imagine the Future and Build for Now, which is sort of my attempt to balance this sort of long-term, short-term thinking as we tackle design challenges."
  },
  {
    startTime: 396.12,
    person: 'Chris',
    text: " Because I'm a big believer that you need to contemplate the future, but I'm also from that startup lens with a big focus on cost management and, you know, not overdoing it, not over boiling the ocean."
  },
  {
    startTime: 405.82,
    person: 'Chris',
    text: ' So how do you reconcile these two perspectives is a big part of that training course.'
  },
  {
    startTime: 410.68,
    person: 'Chris',
    text: ' And the other thing that I sort of got into, because one of the businesses had some really complex domain logic going on, sort of an insurance payments space and a lot of complex language as well.'
  },
  {
    startTime: 422.32,
    person: 'Chris',
    text: " So one of the first talks I gave was called When Customers Don't Share a Language."
  },
  {
    startTime: 427.72,
    person: 'Chris',
    text: " And it was trying to tackle this challenge you have, you know, if you're familiar with DDD, we have this idea of the ubiquitous language."
  },
  { startTime: 434.38, person: 'Chris', text: ' We should define terminology.' },
  { startTime: 436.68, person: 'Chris', text: ' We should be clear about what the words mean.' },
  {
    startTime: 439.38,
    person: 'Chris',
    text: ' We should encourage ubiquitous or like universal use of that language.'
  },
  {
    startTime: 444.24,
    person: 'Chris',
    text: " There's sometimes a lack of clarity about what ubiquitous means."
  },
  {
    startTime: 446.98,
    person: 'Chris',
    text: ' Sometimes people think it means like the same terminology across the whole company, which is not necessarily the case.'
  },
  {
    startTime: 452.78,
    person: 'Chris',
    text: ' What it really means is anyone working in a particular area should be using language consistent with code and conversations and documentation.'
  },
  { startTime: 462.5, person: 'Chris', text: ' Sorry.' },
  {
    startTime: 463.62,
    person: 'Karol',
    text: ' What you just said about the same language in the whole company that brings me to a conversation that I had this week at work, that would be canonical data model.'
  },
  {
    startTime: 475.56,
    person: 'Karol',
    text: ' Canonical is never something that is that good because it often becomes dogmatic.'
  },
  {
    startTime: 483.72,
    person: 'Chris',
    text: " And it's not practical, I think, once you get beyond a certain size and complexity, it's not practical to have a canonical model."
  },
  {
    startTime: 492.38,
    person: 'Chris',
    text: " And it's interesting because part of the reason is the inherent complexity of the model."
  },
  {
    startTime: 495.9,
    person: 'Chris',
    text: ' And part of it is the difficulty of sharing the knowledge of what that model means across such a broad range of people.'
  },
  {
    startTime: 502.66,
    person: 'Chris',
    text: ' You know, when you look at things that we do in software like modularity and DDD bounded contexts, just to some extent, part of that is encapsulating technical complexity.'
  },
  {
    startTime: 512.179,
    person: 'Chris',
    text: ' But in a more impactful sense, I think a lot of it is about encapsulating the human complexity and the need to manage the flow of knowledge between people as it evolves.'
  },
  {
    startTime: 522.659,
    person: 'Chris',
    text: " And so when we talk about databases don't care about a canonical data model."
  },
  {
    startTime: 527.14,
    person: 'Chris',
    text: ' You can have a billion fields and columns and tables and the database will keep chugging along.'
  },
  { startTime: 532.62, person: 'Chris', text: ' But how can one human understand all of that?' },
  { startTime: 535.26, person: 'Chris', text: " They can't." },
  { startTime: 535.72, person: 'Chris', text: ' How could one team understand all of that?' },
  {
    startTime: 537.78,
    person: 'Chris',
    text: " So a lot of it's about dealing with our human limitations of what we can understand."
  },
  { startTime: 541.7, person: 'Chris', text: ' But yeah, absolutely.' },
  {
    startTime: 542.52,
    person: 'Chris',
    text: ' The canonical data model or the ubiquitous language that is applied universally across the whole company.'
  },
  {
    startTime: 546.76,
    person: 'Chris',
    text: " And I just, I always laugh because you see companies where, you know, they've been dealing with maybe bifurcated or disparate languages and models for a long time."
  },
  { startTime: 557.04, person: 'Chris', text: " And there's this dream." },
  { startTime: 558.14, person: 'Chris', text: ' We just need one view of the customer.' },
  { startTime: 560.06, person: 'Chris', text: ' Can we just have one view of the customer?' },
  {
    startTime: 561.62,
    person: 'Chris',
    text: ' You know, the single pane of glass that shows us everything we need to know about a customer.'
  },
  {
    startTime: 565.02,
    person: 'Chris',
    text: " And the truth is it's a bit of a fool's errand because you never can quite get it, like pin it all down into that one beautiful, fantastical view."
  },
  {
    startTime: 574.62,
    person: 'Chris',
    text: ' Different elements of the customer are evolving on different phases and, you know, times and life cycles.'
  },
  {
    startTime: 580.32,
    person: 'Chris',
    text: " And, you know, you've got customers that live in different states or they were in a state, but now they're not, or they're maybe going back, you know."
  },
  {
    startTime: 587.52,
    person: 'Karol',
    text: ' We touched upon that just before the stream, when we were just chatting.'
  },
  {
    startTime: 591.14,
    person: 'Karol',
    text: " And this is basically a model drift as described by Barry O'Reilly."
  },
  {
    startTime: 596.04,
    person: 'Karol',
    text: ' The moment you try to pin something down, it already drifted away.'
  },
  {
    startTime: 599.62,
    person: 'Karol',
    text: ' Business already evolved and you have new definition of everything.'
  },
  {
    startTime: 602.22,
    person: 'Karol',
    text: " And it's just not feasible because our context, our problem domain just evolves too quickly, way quicker than we can model it and way quicker than we can code it."
  },
  { startTime: 615.02, person: 'Chris', text: ' Yeah.' },
  { startTime: 615.84, person: 'Chris', text: " But that's not a reason to give up, right?" },
  {
    startTime: 618.74,
    person: 'Chris',
    text: ' Like we still, you know, code is what it is, you know, like obviously with AI these days, people are finding it easier to change the code with varying degrees of success.'
  },
  {
    startTime: 629.14,
    person: 'Chris',
    text: " But there's still, I think, a sense that changing the code is slower than changing ideas."
  },
  {
    startTime: 637.42,
    person: 'Chris',
    text: ' Like people come across a new customer and the customer says, but I want this, I want some new feature.'
  },
  {
    startTime: 642.72,
    person: 'Chris',
    text: " And all of a sudden, before you know, it's been sold."
  },
  {
    startTime: 645.12,
    person: 'Chris',
    text: " And now it's a real thing that's being sold, but it's not in the code yet."
  },
  { startTime: 647.78, person: 'Chris', text: " And that's an example of model drift, right?" },
  {
    startTime: 650.24,
    person: 'Chris',
    text: ' Like the ambient world is changing and the code has to catch up.'
  },
  {
    startTime: 655.14,
    person: 'Chris',
    text: ' And so you look at all these patterns that DDD has evolved, like the bounded context and the aggregate, different layers of encapsulation, which all attempts to kind of give us a chance at like limiting the blast radius of those changes in the code, because we need to take time to change it.'
  },
  {
    startTime: 671.38,
    person: 'Chris',
    text: ' And I think, you know, to sort of unwind that back to what I was talking about, we had this business and we had all these different customers and they all had different terms for the same concepts.'
  },
  {
    startTime: 681.56,
    person: 'Chris',
    text: " And then we found out, actually, they weren't quite the same concepts."
  },
  {
    startTime: 684.04,
    person: 'Chris',
    text: " They were subtly different, you know, and it's like, how do you wrestle with that?"
  },
  {
    startTime: 686.96,
    person: 'Chris',
    text: " So I wrote this talk about when customers don't share a language."
  },
  {
    startTime: 690.48,
    person: 'Chris',
    text: " And it also inspired this idea for this, for a tool I've been working on called Contextive, which is designed to provide some support for teams who are wrestling with this."
  },
  {
    startTime: 700.08,
    person: 'Chris',
    text: " You know, it's a way of documenting a glossary, but a context aware glossary that supports, you know, the same terms having different meanings, depending on which part of the business or code base you're working in."
  },
  {
    startTime: 711.92,
    person: 'Chris',
    text: " And it kind of supports you by embedding it into the places where you're working."
  },
  {
    startTime: 716.5,
    person: 'Chris',
    text: " And we'll talk a bit more about what all that means as we go."
  },
  {
    startTime: 718.78,
    person: 'Chris',
    text: " But yeah, this is, you know, kind of worked through there a little bit, my history and how it's led me to here about languages and living languages."
  },
  {
    startTime: 727.34,
    person: 'Karol',
    text: " So Chris, given your generosity, here's a QR code in the stream."
  },
  {
    startTime: 733.52,
    person: 'Karol',
    text: ' You can actually get Contextive trial for six months for free from Chris.'
  },
  {
    startTime: 737.6,
    person: 'Karol',
    text: " It's a special link for the loosely coupled out audience."
  },
  {
    startTime: 742.88,
    person: 'Karol',
    text: ' So go ahead, scan it and play around with the tool.'
  },
  { startTime: 747.22, person: 'Karol', text: ' Should be interesting.' },
  {
    startTime: 748.48,
    person: 'Karol',
    text: " We'll probably dive a little into the tool later in the stream as we go deeper into the living language."
  },
  {
    startTime: 753.92,
    person: 'Karol',
    text: ' And for those wondering what the hell are we talking about in terms of domain-driven design and ubiquitous language and whatnot.'
  },
  { startTime: 760.9, person: 'Karol', text: ' So some literature for that.' },
  {
    startTime: 762.72,
    person: 'Karol',
    text: ' So ubiquitous design stems from this lovely book.'
  },
  { startTime: 766.98, person: 'Karol', text: ' I believe that was 2004 or something.' },
  { startTime: 770.34, person: 'Chris', text: ' 2003.' },
  {
    startTime: 772.74,
    person: 'Karol',
    text: ' So this is domain-driven design tackling complexity in the heart of software by Eric Evans.'
  },
  {
    startTime: 778.94,
    person: 'Karol',
    text: ' And of course, since the so-called blue book in Poland, this is the red book actually, because the Polish edition has a different cover.'
  },
  {
    startTime: 788.6,
    person: 'Karol',
    text: ' So since the blue book, we have so many more books on domain-driven design for various angles, various perspectives, et cetera.'
  },
  {
    startTime: 799.5,
    person: 'Karol',
    text: ' So the book by Eric Evans is quite difficult to read at times for a lot of people.'
  },
  {
    startTime: 805.56,
    person: 'Karol',
    text: ' So if you want to really learn something about domain-driven design and get an easier start into domain-driven design, you can also look up learning domain-driven design by Vlad Kononov.'
  },
  {
    startTime: 815.26,
    person: 'Karol',
    text: " It's a much simpler language to dive into the concepts."
  },
  {
    startTime: 819.78,
    person: 'Karol',
    text: ' And then from this one, you can jump into the book by Eric Evans and learn the more complex aspects in a little bit more difficult language.'
  },
  {
    startTime: 830.58,
    person: 'Karol',
    text: ' But this is where ubiquitous language or the living language comes from, in essence, as a term.'
  },
  { startTime: 839.2, person: 'Karol', text: ' And so what is the ubiquitous language?' },
  { startTime: 842.82, person: 'Chris', text: ' Okay, yeah.' },
  { startTime: 843.74, person: 'Chris', text: " So I've alluded to it before." },
  { startTime: 845, person: 'Chris', text: " It's great." },
  { startTime: 845.44, person: 'Chris', text: ' Thanks for pulling me back on focus.' },
  {
    startTime: 847.82,
    person: 'Chris',
    text: " So the idea of the ubiquitous language is the recognition that, you know, it's in the subtitle of Eric's book, Tackling Complexity in the Heart of Software, is that the complexity in our software is not so much the technical complexity, you know, obviously interacting with a database or an API or keeping systems up and reliable."
  },
  {
    startTime: 867.26,
    person: 'Chris',
    text: " Like, there's an element of complexity there, but that's not the core complexity that DDD is interested in."
  },
  {
    startTime: 872.68,
    person: 'Chris',
    text: ' DDD is interested in the domain complexity, the business rules, the business logic, the flow of processes in the business.'
  },
  {
    startTime: 880.58,
    person: 'Chris',
    text: " And Eric sort of recognised that a key element of making that manageable by software engineers is the language that's used."
  },
  {
    startTime: 889.28,
    person: 'Chris',
    text: " And, you know, you've probably worked in a team where the business sort of comes in or someone representing the business."
  },
  {
    startTime: 896.42,
    person: 'Chris',
    text: " I don't really like using the phrase, the business, because I think we're all part of the business, you know, but someone representing the needs of the business, say, comes along and starts saying, oh, we need it to do the widget in the doohickey and the blah, blah, blah, blah, blah."
  },
  {
    startTime: 909.62,
    person: 'Chris',
    text: ' And the engineers just hear this sort of like stream of gobbledygook.'
  },
  {
    startTime: 912.64,
    person: 'Chris',
    text: " And so they start saying, okay, yep, all right, well, we'll create a database record and we'll set up an API."
  },
  {
    startTime: 917.24,
    person: 'Chris',
    text: ' And they start talking the language they know, which is all the technical terms.'
  },
  {
    startTime: 921.08,
    person: 'Chris',
    text: ' And you have this like complete failure to communicate.'
  },
  {
    startTime: 924.8,
    person: 'Chris',
    text: " And, you know, I've seen this happen where people come into a software team and they think they know what everything means because, oh, I've seen the word order before, I've seen the word customer before, I know what a customer is, I know what an order is, I know what a transaction is."
  },
  {
    startTime: 937.16,
    person: 'Chris',
    text: " And then like maybe a year later, you find out, oh, in this business, there's something unique going on with that, it's actually different."
  },
  {
    startTime: 943.46,
    person: 'Chris',
    text: " And so Eric sort of said, this terminology is critical, like it's actually at the heart of understanding, you know, how do we know what the thing has to do?"
  },
  {
    startTime: 953.18,
    person: 'Chris',
    text: " We know because we've read something or we've had a conversation with someone and that's used words."
  },
  {
    startTime: 957.52,
    person: 'Chris',
    text: ' And those words have attempted to impart to us some understanding of what this software has to do.'
  },
  {
    startTime: 962.48,
    person: 'Chris',
    text: " And so if we don't understand what the words mean and how they're being used, we're completely adrift."
  },
  {
    startTime: 966.6,
    person: 'Chris',
    text: ' So a big part of the book is about like domain modelling and part of that is understanding the language.'
  },
  {
    startTime: 974.84,
    person: 'Chris',
    text: ' And so the ubiquitous language is the idea that we need to pin it down because as malleable and free flowing and, you know, like flexible as human conversation is, software needs to just work and you need to write it, it needs to be unambiguous.'
  },
  {
    startTime: 990.44,
    person: 'Chris',
    text: ' And so a lot of elements of DDD are about like making active design decisions.'
  },
  { startTime: 995.74, person: 'Chris', text: ' So this is an interesting thing.' },
  {
    startTime: 997.6,
    person: 'Chris',
    text: ' I quite like the idea of like this phrase we use, domain discovery.'
  },
  {
    startTime: 1003.56,
    person: 'Chris',
    text: ' You know, we do event storming or domain storytelling or maybe residuality or something to try and discover the domain.'
  },
  {
    startTime: 1010.3,
    person: 'Chris',
    text: ' And I like this phrase, but I also think it misleads people a little bit because it leads you to think that the domain is like a mountain range, you know, and you just have to go out there and discover it.'
  },
  {
    startTime: 1020.94,
    person: 'Chris',
    text: " You have to just sort of like plough along and map it out and get your measurement instruments and say, oh, it's this high here and it's this high there and this far between these two points and you're discovering it, right?"
  },
  {
    startTime: 1032.319,
    person: 'Chris',
    text: " You're an explorer who's discovering the domain."
  },
  {
    startTime: 1034.579,
    person: 'Chris',
    text: " It's not like that in reality because every person in a company has a different vision of what it is and how it works."
  },
  {
    startTime: 1040.579,
    person: 'Chris',
    text: " And so you are discovering, but you're also co-creating and co-designing as much as you're discovering, I think at the same time."
  },
  {
    startTime: 1048.12,
    person: 'Chris',
    text: " And I think ubiquitous language and a domain model is the result of that kind of co-creation and that what you're saying is that I have all these possibilities, all these different ways of looking at it."
  },
  { startTime: 1057.14, person: 'Chris', text: " This is the one we're going to actually build." },
  {
    startTime: 1059.16,
    person: 'Chris',
    text: " This is the thing that's going to come into being when we write this software."
  },
  {
    startTime: 1064.1,
    person: 'Chris',
    text: ' And so the ubiquitous language is a part of that.'
  },
  {
    startTime: 1068.08,
    person: 'Chris',
    text: " It's the definitions of the terminology and how the terminology is used."
  },
  {
    startTime: 1071.78,
    person: 'Chris',
    text: " And it's an encouragement to everybody to use those words in your code and to use those words in your conversations and to use those words in your tickets and your story writing."
  },
  {
    startTime: 1082.96,
    person: 'Chris',
    text: " And if you detect people not using those words, take that seriously because it might mean that you've misunderstood something and that the code needs to change or the model needs to change."
  },
  { startTime: 1092.04, person: 'Chris', text: " There's a great phrase." },
  { startTime: 1093.56, person: 'Karol', text: ' Or you have a different problem domain.' },
  { startTime: 1096.26, person: 'Chris', text: ' Potentially, yeah.' },
  {
    startTime: 1097.3,
    person: 'Chris',
    text: " But there's this great phrase, a change in the language is a change in the model."
  },
  {
    startTime: 1100.67,
    person: 'Chris',
    text: ' And I like to go back to this because it kind of hints at this idea that the language is the way that humans explain models to each other.'
  },
  { startTime: 1109.44, person: 'Chris', text: ' So we need to understand it.' },
  {
    startTime: 1111.2,
    person: 'Karol',
    text: " Now, I'm going to slightly rephrase and simplify all that you said in terms of the important to just show the importance of the language."
  },
  {
    startTime: 1120.08,
    person: 'Karol',
    text: " So let's assume we have a company that does not know the concepts of DVD and does not use ubiquitous language."
  },
  {
    startTime: 1128.26,
    person: 'Karol',
    text: ' What happens there, especially if you look at the old school, traditional waterfall-like project management and project work?'
  },
  { startTime: 1136, person: 'Karol', text: ' So, okay, we have the business.' },
  {
    startTime: 1138.74,
    person: 'Karol',
    text: ' Whoever runs the business sells something, creates a product, whatever.'
  },
  {
    startTime: 1143.94,
    person: 'Karol',
    text: ' That business, for example, tells the business analyst that, well, we need to support our business with an IT system.'
  },
  { startTime: 1152.94, person: 'Karol', text: ' Okay.' },
  {
    startTime: 1153.18,
    person: 'Karol',
    text: ' So the business analyst sits down, tries to model this in BPMN, tries to figure out what the business process is, tries to figure out what are the interactions between different teams, different departments, different customers, and how it executes the product.'
  },
  {
    startTime: 1172.26,
    person: 'Karol',
    text: ' And then the business analyst talks to the architect.'
  },
  {
    startTime: 1174.86,
    person: 'Karol',
    text: ' The architect then translates whatever that business analyst gives him into a some sort of a design, architecture, change, whatever that may be in that context.'
  },
  {
    startTime: 1187,
    person: 'Karol',
    text: ' And then the architect tells the dev team what to do by handing them a high-level design, low-level design, and just telling them, implement this.'
  },
  {
    startTime: 1197.78,
    person: 'Karol',
    text: ' So between the business and the dev team and further the testers and the users at the end of it, we have five translations.'
  },
  { startTime: 1209.7, person: 'Karol', text: ' Something like that.' },
  { startTime: 1211.74, person: 'Karol', text: ' At least, yeah.' },
  {
    startTime: 1212.88,
    person: 'Karol',
    text: ' Because at the same level, multiple translations may happen at the same time, parallel, right?'
  },
  { startTime: 1218.14, person: 'Karol', text: ' So we have five translations.' },
  {
    startTime: 1220.94,
    person: 'Karol',
    text: " So at least five translations, at least five times where we can weave in assumptions that we assume that we know what they mean, because we don't share the common dictionary."
  },
  { startTime: 1231.64, person: 'Karol', text: " That's why they still going to be assumptions." },
  {
    startTime: 1234.22,
    person: 'Karol',
    text: " And usually those assumptions language-wise are not tested and checked if they're accurate and true."
  },
  { startTime: 1241.6, person: 'Chris', text: ' Yeah.' },
  { startTime: 1242.54, person: 'Karol', text: ' Right?' },
  {
    startTime: 1243.08,
    person: 'Karol',
    text: " So in that sense, while already designing and building software in that kind of relationship of this kind of cascade, we're already introducing a lot of errors and bugs into everything because we assume we know what the business wants, needs, and to differentiate wants and needs is completely two different things, usually."
  },
  { startTime: 1267, person: 'Karol', text: ' Right?' },
  {
    startTime: 1267.92,
    person: 'Karol',
    text: ' So we basically do not deliver something that is actually of value.'
  },
  { startTime: 1274.8, person: 'Chris', text: ' Yeah.' },
  {
    startTime: 1275.24,
    person: 'Chris',
    text: " I mean, you just described the canonical or historical waterfall model, and I think, to an extent, I'm not going to say that the sole cause of problems in that model is the lack of a clear language because there's many other problems with that model, but certainly it doesn't help."
  },
  {
    startTime: 1290.72,
    person: 'Chris',
    text: " And I think that if we look at how the industry is trying to tackle this stuff these days, there's a lot more focus on feedback loops and iterations at each of those transition points and trying to sort of shorten the lead time from idea to delivery."
  },
  {
    startTime: 1306.14,
    person: 'Chris',
    text: ' But you see a huge spectrum of ways in which this is tackled across the industry from companies that are still operating in that kind of waterfall model through to companies that are shipping ideas to production 20 times a day and everything in between, and companies that are claiming to be agile but still running four-week waterfall sprints.'
  },
  { startTime: 1324.6, person: 'Chris', text: " It's a whole spectrum." },
  {
    startTime: 1326.86,
    person: 'Chris',
    text: " So I'm not saying that getting the language right is going to fix all the problems, but I certainly think it can help."
  },
  {
    startTime: 1335.02,
    person: 'Chris',
    text: " But I think there's a key point there as well, which we're going to be talking about, I guess, which is that those feedback loops are how you learn the language, right?"
  },
  {
    startTime: 1342.84,
    person: 'Chris',
    text: " When I look at things like event storming, so if you're not familiar with event storming, it's something that evolved in the DDD community, Alberto Brandolini came up with, and it's a very visual modelling tool."
  },
  {
    startTime: 1353.86,
    person: 'Chris',
    text: ' You have a bunch of people sitting in a room, putting sticky notes up on a wall, trying to map out a process.'
  },
  {
    startTime: 1359.58,
    person: 'Chris',
    text: " It's deliberately loose notation as opposed to BPMN or UML because you want to make it inclusive for people outside the engineering team to be able to participate."
  },
  {
    startTime: 1369.12,
    person: 'Chris',
    text: ' And one of the things I love about it is it gives you these fast feedback loops because the engineers can participate and they can say, is this what you meant?'
  },
  {
    startTime: 1375.54,
    person: 'Chris',
    text: " And people can look at it and understand and say, no, that's not quite what I meant."
  },
  {
    startTime: 1378.98,
    person: 'Chris',
    text: " And they can shuffle the sticky notes around very quickly and sort of get to a point where there's coherence and consensus on what's actually meant."
  },
  {
    startTime: 1386.56,
    person: 'Chris',
    text: " So, you know, a lot of these things are about when you look at them systemically, they're at feedback loops, shortening those cycles, providing ways for people to check their understanding."
  },
  {
    startTime: 1395.06,
    person: 'Chris',
    text: " Yeah, it's a great picture of an event storm in action."
  },
  { startTime: 1397.36, person: 'Chris', text: ' You got all these sticky notes.' },
  {
    startTime: 1398.68,
    person: 'Chris',
    text: " And it's funny, you know, I do a lot of event storming for companies and they asked me what to do with the roll of butcher's paper at the end."
  },
  { startTime: 1406.3, person: 'Chris', text: ' And I say, roll it up, put it in the corner.' },
  {
    startTime: 1408.42,
    person: 'Chris',
    text: " You're probably never going to look at it again."
  },
  {
    startTime: 1409.92,
    person: 'Chris',
    text: " Because the reality is if you come back three weeks later and look at it, it's not going to make any sense."
  },
  {
    startTime: 1413.62,
    person: 'Chris',
    text: " It's more like working memory for the group, like a collective working memory as you're having these discussions and you come to some decisions and then you move on."
  },
  {
    startTime: 1422.78,
    person: 'Karol',
    text: ' Well, you can take pictures and translate this to BPMN later.'
  },
  { startTime: 1427.98, person: 'Chris', text: ' If you want to.' },
  {
    startTime: 1428.7,
    person: 'Karol',
    text: " I mean, I've seen that happen, just document it and make it something tangible that you can work on."
  },
  {
    startTime: 1435.62,
    person: 'Chris',
    text: ' Well, you can come back to it and refresh your memory and things.'
  },
  {
    startTime: 1438.02,
    person: 'Chris',
    text: ' But what I usually find is that after the fact, when you get into the details, you know, things change again.'
  },
  {
    startTime: 1442.98,
    person: 'Chris',
    text: ' But it gives you a direction, gives you some coherency to start with.'
  },
  {
    startTime: 1446.18,
    person: 'Chris',
    text: " The one thing I definitely don't recommend is having a bunch of people in a room, creating an event storming thing, mapping that into a document diagram and then giving that to the developers and saying, build this when the developers weren't part of the event storm in the first place."
  },
  { startTime: 1457.08, person: 'Chris', text: " Don't do that." },
  { startTime: 1458.14, person: 'Chris', text: ' Exactly.' },
  {
    startTime: 1458.72,
    person: 'Chris',
    text: " Like the whole point is that it's about like real time sharing of knowledge and gaining of understanding."
  },
  {
    startTime: 1463.96,
    person: 'Chris',
    text: " And part of that is learning how to speak the language of the business and the domain so that you can engage meaningfully and understanding what's actually needed."
  },
  { startTime: 1472.76, person: 'Karol', text: " That's very true." },
  {
    startTime: 1474.5,
    person: 'Karol',
    text: ' And yes, well, event storming from Alberto Brandolini is a powerful tool, not the only one there for these kind of discussions about living language and actually building that kind of living language.'
  },
  {
    startTime: 1488.04,
    person: 'Karol',
    text: ' I know that personally, when I go to a new client, I first ask a lot of questions about the meanings of words, acronyms, etc.'
  },
  {
    startTime: 1497.66,
    person: 'Karol',
    text: " Because as an integration architect, I'm not in a very specific industry because that's a very cross industry role."
  },
  {
    startTime: 1505.78,
    person: 'Karol',
    text: " So I tend to land at various industries, which means that not only am I at a disadvantage that I don't know the industry, each client will have a different language."
  },
  {
    startTime: 1515.9,
    person: 'Karol',
    text: ' And then also the problem is that some of the clients will have a language that is a mix of actual human languages.'
  },
  {
    startTime: 1523.88,
    person: 'Karol',
    text: " So they're not purely using English, for example, or not purely using Polish, they actually have a jargon composed of, let's say, Polish and English words, or most of the jargon is actually only Dutch."
  },
  { startTime: 1538.12, person: 'Karol', text: " And then there's other problems." },
  { startTime: 1541.26, person: 'Karol', text: " And that's a challenge." },
  { startTime: 1542.22, person: 'Chris', text: ' Yeah.' },
  {
    startTime: 1542.92,
    person: 'Chris',
    text: ' And you see organisations these days, we got developers who speak one language, you got business stakeholders who speak another language, you got customers who speak yet another language.'
  },
  {
    startTime: 1553.36,
    person: 'Chris',
    text: " And this, you know, so I think it is worth being clear, when we talk about business languages, I'm not as much talking about like human languages, like English, French, Spanish, Polish, whatever, we're talking more about the jargon and terminology of the company, which may encompass one or more sort of human languages."
  },
  {
    startTime: 1569.82,
    person: 'Chris',
    text: " I think there's another subtle distinction, which is when you are dealing with customers who have different terminology."
  },
  {
    startTime: 1576.28,
    person: 'Chris',
    text: ' And, you know, I was working with a client the other day who sort of was framing their problem as a translation problem between like English and French and Spanish.'
  },
  {
    startTime: 1584.42,
    person: 'Chris',
    text: " And actually, when we dug into it, it turns out it wasn't so much a translation problem, but more of a representation problem."
  },
  {
    startTime: 1590.5,
    person: 'Chris',
    text: ' Because it was more about representing their core concepts into the regulatory environments of those countries.'
  },
  {
    startTime: 1597.44,
    person: 'Chris',
    text: " So it's actually more of a market, you know, they're selling their products into multiple markets, and each market has a different need."
  },
  {
    startTime: 1604.56,
    person: 'Chris',
    text: ' Those markets happen to be in different countries, which speak different human languages.'
  },
  {
    startTime: 1608.28,
    person: 'Chris',
    text: ' But more fundamentally was the fact that it was a different regulatory market in each environment.'
  },
  {
    startTime: 1612.64,
    person: 'Chris',
    text: ' And that was like, how do we adapt our core concepts into these markets?'
  },
  {
    startTime: 1616.46,
    person: 'Chris',
    text: " And I think that even be like, they might even need different terminology, even though it's still English."
  },
  {
    startTime: 1621.86,
    person: 'Karol',
    text: ' And by that, you basically then have three separate problem domains.'
  },
  {
    startTime: 1627.7,
    person: 'Chris',
    text: " Yeah, but that's not commercially viable, right, to build the product three or four times."
  },
  {
    startTime: 1631.36,
    person: 'Chris',
    text: " So they're trying to find a common abstraction and give that a terminology that can be like an internal private language, and then a representation of that into each of the markets."
  },
  {
    startTime: 1641.62,
    person: 'Chris',
    text: ' And, you know, a lot of businesses are dealing with this kind of stuff.'
  },
  {
    startTime: 1645.3,
    person: 'Chris',
    text: ' You know, global adaptation is a problem I see all over the place.'
  },
  {
    startTime: 1650.14,
    person: 'Chris',
    text: ' But at least getting, starting to get a grip on what your language is, and within which boundaries the terminologies apply is incredibly helpful.'
  },
  { startTime: 1659.3, person: 'Karol', text: ' It is.' },
  {
    startTime: 1660.2,
    person: 'Karol',
    text: ' So that said, now that we know what the living language is, or what ubiquitous language is, then how does that language precisely influence design?'
  },
  {
    startTime: 1672.12,
    person: 'Karol',
    text: ' And in that sense, we already have a good question in chat for this.'
  },
  { startTime: 1677.74, person: 'Karol', text: " I think that's a pretty decent one, right?" },
  {
    startTime: 1681.02,
    person: 'Karol',
    text: " So if we're at startup scale, or under constant product pressure, and this is exactly what startups really get right now, there's constant product pressure."
  },
  {
    startTime: 1690.96,
    person: 'Karol',
    text: " So what's the minimum viable practise to safely move forward with a ubiquitous or living language?"
  },
  {
    startTime: 1701.26,
    person: 'Karol',
    text: " What's the minimum we need to do to get started?"
  },
  {
    startTime: 1703.96,
    person: 'Karol',
    text: " Because of course, if it's a living language, and we're constantly evolving the problem domain, and the business, that means that the language will evolve as well, because we're growing, we're making new things, we're adding products, etc, or variations to the growth."
  },
  {
    startTime: 1721.82,
    person: 'Karol',
    text: " But being a startup, so being a small company, means that we're basically starting small, and this is a good point to already start introducing that ubiquitous language."
  },
  {
    startTime: 1731.22,
    person: 'Chris',
    text: " Yeah, so I'm going to call out something here, because we've been using the terms ubiquitous"
  },
  {
    startTime: 1735.16,
    person: 'Chris',
    text: " language and living language kind of interchangeably, and the truth is that they're not,"
  },
  {
    startTime: 1738.94,
    person: 'Chris',
    text: ' because a lot of companies treat ubiquitous language as like a fixed thing, you know,'
  },
  {
    startTime: 1742.56,
    person: 'Chris',
    text: ' you go through a whole bunch of effort, you maybe get a consultant in, you spend six months'
  },
  {
    startTime: 1746.32,
    person: 'Chris',
    text: " documenting your glossary, and then you file it away somewhere, and then now that's it."
  },
  {
    startTime: 1749.44,
    person: 'Chris',
    text: " And I think the reason we're using the phrase living language is because I'm trying to advocate for people to recognise the fact that the context is evolving, and you need to treat it as an evolving and a living language."
  },
  {
    startTime: 1760.7,
    person: 'Chris',
    text: " But to more precisely answer that question, which is a great question, you know, like, what are the minimum practises you'd insist on in the early days of a startup or a scale up?"
  },
  {
    startTime: 1769.52,
    person: 'Chris',
    text: " You know, not only are you under constant product pressure, but you're operating in an environment of intense uncertainty."
  },
  {
    startTime: 1775.98,
    person: 'Chris',
    text: " You don't know if the product you're currently building is going to be the one that's going to be successful, you don't know how many more pivots you're going to have, there's often a lot of reluctance to over invest in consolidating or, you know, concretising things until there's clarity."
  },
  {
    startTime: 1788.86,
    person: 'Chris',
    text: " One of the things that I think is, is these days, something you cannot avoid in that in that space, and a lot of people still do defer it is testing, and quality management, because, you know, people say, I'm not going to worry about tests, because we don't even know if this thing's going to be successful."
  },
  {
    startTime: 1805.32,
    person: 'Chris',
    text: " But the truth is, is that it's, it's not that the thing you're building may or may not be successful, but some variation of it, or some adaptation of it might be the thing that ends up becoming successful."
  },
  {
    startTime: 1814.7,
    person: 'Chris',
    text: ' So you have to change it, but you guys keep some parts of it working correctly.'
  },
  {
    startTime: 1818.68,
    person: 'Chris',
    text: ' And, you know, we used to live in a world of like, move fast and break things.'
  },
  {
    startTime: 1822.34,
    person: 'Chris',
    text: ' Now, we live in a world where you have to move fast and not break things.'
  },
  {
    startTime: 1825.64,
    person: 'Chris',
    text: ' Because all of the companies that got to do the moving fast and the breaking things grew up, they created an expectation of reliability that any new startup these days need to match.'
  },
  {
    startTime: 1835.08,
    person: 'Chris',
    text: " So I'm a big believer in starting early with like quality harnesses, you know, not over like boiling the ocean with it, but at least giving you some protection so that when you do need to evolve and change it, you can do it freely and with confidence."
  },
  {
    startTime: 1847.14,
    person: 'Chris',
    text: " Because what I often see is startups that don't do that, because they're trying to justify, you know, we don't want to over invest, we don't know if it's going to be valid or not, then they do get some traction, they have to start adapting what they've been doing to react to market feedback."
  },
  {
    startTime: 1864.5,
    person: 'Chris',
    text: " And they're scared to change the system, because they've got no quality control around it."
  },
  {
    startTime: 1869.54,
    person: 'Chris',
    text: " And so what they're doing is trying to stuff these new ideas into old models."
  },
  {
    startTime: 1873.28,
    person: 'Chris',
    text: ' And I was guilty of this, you know, my first startup was a lunch ordering service for schools.'
  },
  {
    startTime: 1878.74,
    person: 'Chris',
    text: ' And then along they came and said, Oh, now we want to sell uniforms to the schools as well.'
  },
  { startTime: 1884.34, person: 'Chris', text: ' And we got to start doing it in two weeks.' },
  {
    startTime: 1886.94,
    person: 'Chris',
    text: " And I was like, well, I've already got like whole infrastructure for like taking orders and paying them out and just, you know, like sending the data to the people fulfilling the orders."
  },
  { startTime: 1897.08, person: 'Chris', text: " So let's just use that." },
  {
    startTime: 1898.72,
    person: 'Chris',
    text: ' So we ended up with the same records that were tracking like the presence of a slice of cheese on a sandwich, tracking the size of a t shirt for a kid at a school.'
  },
  {
    startTime: 1908.76,
    person: 'Chris',
    text: " And it kind of worked, but it kind of didn't either like there was it worked, but there was all this friction around it."
  },
  {
    startTime: 1915.32,
    person: 'Chris',
    text: ' Because as we got closer to that space, and we looked at the difference between lunches and uniforms, they different life cycles of the orders, different payment schedules, different fulfilment timeframes, different configuration and customisation needs for the different products in those catalogues.'
  },
  {
    startTime: 1930.34,
    person: 'Chris',
    text: " And that's been like there was a real burden ever after."
  },
  {
    startTime: 1934.14,
    person: 'Chris',
    text: " And if I'd have, I think maybe a little bit more confidence to just introduce some new concepts into that system."
  },
  {
    startTime: 1941.04,
    person: 'Chris',
    text: ' And not feeling like, you know, I had to just reuse what was already there.'
  },
  {
    startTime: 1945.8,
    person: 'Chris',
    text: " We might've ended up with more flexible system, but we shoved everything in the same model because it's what we had in enough time to change it."
  },
  {
    startTime: 1952.14,
    person: 'Chris',
    text: " And we'd have confidence to change it because the lack of sort of quality control around it as well."
  },
  {
    startTime: 1956.48,
    person: 'Chris',
    text: " So to answer the question, I'm a big believer in starting early with some more automated quality testing, continuous delivery practises, things like that, that actually give you the freedom to evolve."
  },
  {
    startTime: 1965.92,
    person: 'Chris',
    text: ' And then on top of that, when you talk about the minimum viable DDD and ubiquitous language practise, it is this idea of constantly evolving order.'
  },
  {
    startTime: 1973.74,
    person: 'Chris',
    text: " So in Eric Irvin's blue book, he uses this phrase evolving order of the large scale system, because he recognises that the design you come up with at the start is the design that you build when you least understand the domain."
  },
  {
    startTime: 1987.92,
    person: 'Chris',
    text: " So you're going to have a much greater understanding of the domain over time."
  },
  {
    startTime: 1991.22,
    person: 'Chris',
    text: ' You need to be evolving the system over time as you build that understanding.'
  },
  {
    startTime: 1995.06,
    person: 'Chris',
    text: ' And so I think practises like continuous delivery and quality management, automated quality testing, are practises that permit the continuous evolution of the design.'
  },
  {
    startTime: 2004.92,
    person: 'Chris',
    text: ' And that continuous evolution of the design, as you learn more about the domain, is the key to keeping technical debt low and keeping the speed up as you sort of start to pivot and adjust and adapt to market feedback.'
  },
  {
    startTime: 2017.16,
    person: 'Chris',
    text: " So yeah, there's a lot of ideas in there, but I think this is important stuff."
  },
  {
    startTime: 2023.22,
    person: 'Karol',
    text: ' Well, from my personal experience, looking at how companies with product teams, and actually the core IT is focused around the product, how they work is one thing that goes into play is also a little bit of strategic thinking that is usually lacking, because a lot of the decisions are really tactical.'
  },
  {
    startTime: 2045.66,
    person: 'Karol',
    text: ' And if you do only tactical decisions, then you end up with implicit architecture and implicit language, I would assume, as well.'
  },
  {
    startTime: 2055.1,
    person: 'Karol',
    text: " So you imply that you know the language, but in fact, you didn't even bother to learn it and properly manage it and evolve it, which then means that probably parts of your ecosystem, they speak a completely different language."
  },
  {
    startTime: 2069.719,
    person: 'Karol',
    text: ' The words are completely the same, but the understandings are not mapped out.'
  },
  {
    startTime: 2073.26,
    person: 'Karol',
    text: ' And then you have that semantic sprawl of a model.'
  },
  { startTime: 2078.1, person: 'Karol', text: ' And this is where things drift away.' },
  {
    startTime: 2081.219,
    person: 'Karol',
    text: ' And those tactical decisions will then cost later, simply.'
  },
  {
    startTime: 2087.659,
    person: 'Chris',
    text: " Yeah, I mean, it's an interesting point you raise about strategic versus tactical thinking."
  },
  {
    startTime: 2091.52,
    person: 'Chris',
    text: ' I think I have a complicated relationship with this, because I think strategy and strategic thinking is important.'
  },
  {
    startTime: 2099.24,
    person: 'Chris',
    text: " But I also think that just because you've created a strategy doesn't mean it's the right strategy, and it doesn't mean that it shouldn't be subject to the same pressure to evolve and change over time, right?"
  },
  { startTime: 2110.34, person: 'Karol', text: ' It needs to be iterative, always.' },
  {
    startTime: 2112.98,
    person: 'Chris',
    text: " Yeah, but I think that there's an interesting, you know, you talk about languages not being considered."
  },
  {
    startTime: 2118.76,
    person: 'Chris',
    text: ' One phenomenon I do see a lot, as well, is like languages that get baked into the'
  },
  {
    startTime: 2122.64,
    person: 'Chris',
    text: ' technology, which have been created by the developers without necessarily consulting with'
  },
  {
    startTime: 2126.06,
    person: 'Chris',
    text: " other people, you end up with these sort of like specialist jargon terminology, that where they've"
  },
  {
    startTime: 2131.3,
    person: 'Chris',
    text: " tried to come up with something that's not a technical term, but it really just doesn't match"
  },
  {
    startTime: 2134.8,
    person: 'Chris',
    text: ' with the way anybody else talks or thinks about it.'
  },
  {
    startTime: 2137.12,
    person: 'Chris',
    text: ' But then that can end up becoming part of the domain.'
  },
  {
    startTime: 2143.1,
    person: 'Chris',
    text: " So give you an example, I was talking to some people in the UK, it was a recruitment firm, and I said, give me an example of like a term from your field, like what's a key terminology thing that you find challenging in your space?"
  },
  { startTime: 2159.04, person: 'Chris', text: ' And they said Boolean.' },
  { startTime: 2160.84, person: 'Chris', text: ' I was like, I thought I misheard.' },
  { startTime: 2162.66, person: 'Chris', text: " I'm like, is there a Boolean?" },
  { startTime: 2163.68, person: 'Chris', text: ' Really?' },
  { startTime: 2164.16, person: 'Chris', text: " We're talking about recruitment, right?" },
  { startTime: 2165.46, person: 'Chris', text: ' Like not like fundamental mathematical logic.' },
  { startTime: 2167.98, person: 'Chris', text: " And I said, no, we're Boolean." },
  {
    startTime: 2169.18,
    person: 'Chris',
    text: ' So, you know, we want a candidate, we want a candidate that has, you know, 10 years experience in React and, you know, or something, or, you know, 20 years working with chatJPT.'
  },
  {
    startTime: 2180.44,
    person: 'Chris',
    text: ' So they run a, what they call a Boolean, which is like, you know, slang for a Boolean search, where they have these criteria, and they combine them in like an and or kind of combination to run a search for a candidate.'
  },
  {
    startTime: 2193.46,
    person: 'Chris',
    text: ' And so the developers of this system called that a Boolean search.'
  },
  {
    startTime: 2197.72,
    person: 'Chris',
    text: ' And now the word Boolean has become part of the language of this recruitment company, where they say, oh, did you run a Boolean for a candidate?'
  },
  { startTime: 2204.52, person: 'Chris', text: " And that's what they say." },
  {
    startTime: 2205.6,
    person: 'Chris',
    text: ' So the word Boolean is now like code for search, like the way we use Google.'
  },
  {
    startTime: 2209.62,
    person: 'Chris',
    text: " And it's fascinating, because it's like, it highlights the fact that language is fluid."
  },
  {
    startTime: 2215.22,
    person: 'Chris',
    text: " And it's not something that developers need to just absorb or discover, as I said, like, it's not a mountain range that's out there that you're going to find, you do influence it."
  },
  {
    startTime: 2224.56,
    person: 'Chris',
    text: ' But you need to do it collaboratively, so that you come up with something that is shared understanding.'
  },
  {
    startTime: 2228.72,
    person: 'Chris',
    text: " And it's not just developers driving their misunderstandings into the business, because it affects more than just the code, it becomes, like, you know, part of the language of the company."
  },
  {
    startTime: 2237.84,
    person: 'Chris',
    text: ' And then that causes problems for everybody, like every new starter that needs to wrap their heads around what this thing means.'
  },
  { startTime: 2243.44, person: 'Karol', text: " But that's a wonderful example there." },
  { startTime: 2247.34, person: 'Karol', text: ' Boolean is one of it.' },
  {
    startTime: 2248.14,
    person: 'Karol',
    text: ' We actually talked about Boolean searches when we were doing the live streams on recruitment in IT.'
  },
  {
    startTime: 2255.36,
    person: 'Karol',
    text: ' Yeah, we actually had a seasoned recruiter on the stream with a'
  },
  {
    startTime: 2261.24,
    person: 'Karol',
    text: " owner of a UK, I don't know if it's a startup anymore, it's probably already a"
  },
  {
    startTime: 2268.06,
    person: 'Karol',
    text: ' really well grown company, that provides automation for Boolean searches that augments'
  },
  {
    startTime: 2275.5,
    person: 'Karol',
    text: " the search with additional criteria, based on what you're actually searching for, and then figures"
  },
  {
    startTime: 2281.66,
    person: 'Karol',
    text: ' what are the additional keywords you might be looking for, because obviously, people are limited'
  },
  {
    startTime: 2285.84,
    person: 'Karol',
    text: ' in the vocabulary of the role by the role definition as presented by the HR hiring manager.'
  },
  { startTime: 2292.76, person: 'Karol', text: " And that's one thing." },
  {
    startTime: 2294.52,
    person: 'Karol',
    text: ' But just to look at it from the perspective of pure IT, I landed some time ago in a situation where the word integration had a completely different meaning than I would assume.'
  },
  {
    startTime: 2311.74,
    person: 'Chris',
    text: " That's been challenging as an integration architect."
  },
  {
    startTime: 2314.3,
    person: 'Karol',
    text: " Yeah, so usually when I'm in the context of my field, I simplify, I talk about integration, and that means application integration."
  },
  {
    startTime: 2323.24,
    person: 'Karol',
    text: ' So APIs, integration platforms, API management, message brokers, all that stuff, right?'
  },
  {
    startTime: 2330.66,
    person: 'Karol',
    text: ' But unfortunately, somebody also dumped down the term data integration into the word integration.'
  },
  {
    startTime: 2338.32,
    person: 'Karol',
    text: " So now we're having the word integration floating around, meaning two completely different things for a set of people."
  },
  {
    startTime: 2345.76,
    person: 'Karol',
    text: ' Now, a manager picks up the word integration, and he thinks that this word encompasses both fields.'
  },
  { startTime: 2354.96, person: 'Karol', text: ' And this is the same thing.' },
  {
    startTime: 2358.66,
    person: 'Karol',
    text: ' And the result of such misunderstanding and not caring to the language is that now I have to deal with an integration team, application integration team, that is supposed to be running an integration platform and building one that is composed only from former DBAs.'
  },
  { startTime: 2378.94, person: 'Karol', text: " And what's the result of their work?" },
  {
    startTime: 2380.9,
    person: 'Karol',
    text: ' They built a so-called integration platform that is an MDM solution covered around with Azure Functions feeding it data.'
  },
  {
    startTime: 2391.38,
    person: 'Karol',
    text: ' So I was like, yeah, you basically built a very heavy central MDM.'
  },
  { startTime: 2397.92, person: 'Karol', text: " No, no, it's an integration platform." },
  { startTime: 2401.55, person: 'Karol', text: ' No, you have state in it.' },
  { startTime: 2403.75, person: 'Karol', text: " No, no, it's an integration platform." },
  {
    startTime: 2405.35,
    person: 'Karol',
    text: ' No, but integration platforms do not keep state.'
  },
  {
    startTime: 2407.51,
    person: 'Karol',
    text: ' They are either stateless or with very small state, like, you know, temporary.'
  },
  { startTime: 2412.95, person: 'Karol', text: " No, no, it's an integration platform." },
  { startTime: 2414.05, person: 'Karol', text: ' Oh.' },
  {
    startTime: 2417.37,
    person: 'Karol',
    text: ' Half year it took me to explain that this is a misconception of terminology, which was then turned into slang, a specific jargon of a company where they started using the term integration for both fields at the same time, and management picked it up and continued on doing this.'
  },
  {
    startTime: 2437.69,
    person: 'Karol',
    text: " And to roll back on these kind of things, it's horrendous work for an architect to actually understand the difference."
  },
  { startTime: 2446.27, person: 'Karol', text: " It's a lot of work." },
  { startTime: 2447.99, person: 'Karol', text: " It's a problem." },
  {
    startTime: 2449.13,
    person: 'Chris',
    text: " And it highlights, I think, one of the interesting things here, which is that like, you know, languages evolve, but driving change to a language is incredibly hard because it's what is embedded in people's minds, and it's how they communicate every day."
  },
  {
    startTime: 2464.27,
    person: 'Chris',
    text: " And it's going to change, and it's going to have these misconceptions in it."
  },
  {
    startTime: 2467.75,
    person: 'Chris',
    text: " And I think even just the word integration makes me laugh because I think about, like, there's probably like a dozen other ways in which technologists use the term integration completely incompatibly."
  },
  {
    startTime: 2476.31,
    person: 'Chris',
    text: " You know, whether it's from, like, integration tests, does that mean when two classes are tested at the same time?"
  },
  {
    startTime: 2480.81,
    person: 'Chris',
    text: " Whether it's a system and a database, or is it two systems, or is it a front-end and a back-end?"
  },
  { startTime: 2484.99, person: 'Chris', text: ' Like, what is an integration test?' },
  {
    startTime: 2486.63,
    person: 'Chris',
    text: ' You could get, like, a dozen different definitions from people.'
  },
  { startTime: 2489.89, person: 'Karol', text: ' Yeah, was it with business data?' },
  { startTime: 2491.89, person: 'Karol', text: ' Are we just testing connectivity?' },
  { startTime: 2493.35, person: 'Karol', text: ' Is it end-to-end, or just through one API?' },
  { startTime: 2496.53, person: 'Chris', text: " What's going on there?" },
  {
    startTime: 2497.03,
    person: 'Chris',
    text: " You've got an idea of what an integration platform is."
  },
  {
    startTime: 2499.49,
    person: 'Chris',
    text: ' You know, you mentioned that, like, stateless, or maybe, you know, short-term temporary state, but, you know, data integration, people think about it a different way.'
  },
  {
    startTime: 2506.01,
    person: 'Chris',
    text: ' Integration is a great example of a word with, like, many different meanings.'
  },
  { startTime: 2511.21, person: 'Chris', text: " But yeah, there's plenty of words like that." },
  {
    startTime: 2513.37,
    person: 'Chris',
    text: " Yeah, and it's actually funny because in DDD, you know, we've got such a focus on language, but as many people have pointed out over the years, it's also a field in which there's a lot of misconceptions about what many of the words in DDD mean."
  },
  {
    startTime: 2525.99,
    person: 'Chris',
    text: " You know, like, whether it's aggregate or bounded context, you get different confusing definitions around it."
  },
  {
    startTime: 2531.97,
    person: 'Chris',
    text: " And I think that, you know, some people say, oh, this is ironic, but I just think it's life, right?"
  },
  { startTime: 2536.23, person: 'Chris', text: " It's humanity." },
  { startTime: 2536.91, person: 'Chris', text: " It's how we communicate." },
  {
    startTime: 2538.55,
    person: 'Chris',
    text: " It's why we've got hundreds of different human languages, because once people are in a group, they develop their own language, their own way of speaking."
  },
  {
    startTime: 2545.73,
    person: 'Chris',
    text: ' And in big enough companies, you end up with different dialects across the whole company, even of, like, what might notionally be the same language.'
  },
  { startTime: 2552.61, person: 'Chris', text: " So yeah, it's a fun world to be thinking about." },
  {
    startTime: 2556.65,
    person: 'Karol',
    text: " And then, talking about the evolution of language, here's another great question on this one."
  },
  {
    startTime: 2562.47,
    person: 'Karol',
    text: " I don't know why Lucian is promising that this is the last one."
  },
  { startTime: 2565.65, person: 'Karol', text: ' Keep going.' },
  { startTime: 2566.65, person: 'Karol', text: ' Keep going.' },
  { startTime: 2567.45, person: 'Karol', text: ' Keep asking good questions.' },
  {
    startTime: 2569.17,
    person: 'Karol',
    text: ' But yeah, how do you reconcile the ubiquitous language with technical constraints in legacy systems?'
  },
  { startTime: 2575.93, person: 'Karol', text: ' So, database schemas, APIs that encode names.' },
  {
    startTime: 2579.51,
    person: 'Karol',
    text: ' A great example of this kind of encoding is the old SAP R3 interfaces, which were all German abbreviations, where nobody could understand other than people working on SAP that could actually tell what the hell that was.'
  },
  {
    startTime: 2595.85,
    person: 'Karol',
    text: " So yeah, this is, in the modern distributed world, that's even harder, because it's not only about legacy systems and their constraints."
  },
  {
    startTime: 2608.33,
    person: 'Karol',
    text: ' A lot of companies just take off the shelf SaaS solutions.'
  },
  {
    startTime: 2612.29,
    person: 'Karol',
    text: ' And each of those SaaS solutions, it has its own jargon, its own language.'
  },
  {
    startTime: 2618.31,
    person: 'Karol',
    text: " So if I look at, let's say, a CRM like Salesforce."
  },
  { startTime: 2622.93, person: 'Karol', text: ' In Salesforce, I have an opportunity.' },
  { startTime: 2625.57, person: 'Karol', text: ' In SAP, that would constitute a sales order.' },
  { startTime: 2628.89, person: 'Karol', text: ' We already have a huge discrepancy in language.' },
  {
    startTime: 2632.63,
    person: 'Karol',
    text: " And not even taking into the account that basically the CRM implements two different domains, because it implements a customer domain and an order domain, and shares that domain across a, let's say, an integration platform with SAP, which also implements an order domain with its own specific jargon of its subdomain, that is SAP."
  },
  { startTime: 2654.29, person: 'Karol', text: ' This is really crazy to comprehend.' },
  {
    startTime: 2659.69,
    person: 'Karol',
    text: " If you're working on one system, it's probably easy."
  },
  {
    startTime: 2663.49,
    person: 'Karol',
    text: " But then whenever you go outside of that system, then you're like, what the hell's going on?"
  },
  { startTime: 2670.33, person: 'Karol', text: " What are these words you're talking to me?" },
  { startTime: 2672.27, person: 'Karol', text: ' What do they mean?' },
  {
    startTime: 2673.65,
    person: 'Karol',
    text: ' And this is exactly this kind of a reconciliation of technical constraints.'
  },
  { startTime: 2679.15, person: 'Karol', text: ' And well, how do we deal with that?' },
  {
    startTime: 2681.73,
    person: 'Chris',
    text: " Yeah, so I've got, there's two ideas I'm gonna introduce here that I think can help with thinking about this."
  },
  {
    startTime: 2686.49,
    person: 'Chris',
    text: ' And one is the concept from demand-driven design of the bounded context.'
  },
  {
    startTime: 2690.17,
    person: 'Chris',
    text: ' And then the other is the idea of a published language.'
  },
  {
    startTime: 2695.07,
    person: 'Chris',
    text: " And this relates to sort of traditional notions of encapsulation and what's public and what's private."
  },
  {
    startTime: 2700.55,
    person: 'Chris',
    text: " So in the simplest sense, we're talking about reconciling with a ubiquitous language with technical constraints in a legacy system."
  },
  {
    startTime: 2706.31,
    person: 'Chris',
    text: ' So he says, when database schemas or APIs encode historical names, I think we need to think about those very differently.'
  },
  {
    startTime: 2712.71,
    person: 'Chris',
    text: ' Hopefully the database schema is not public, right?'
  },
  { startTime: 2715.79, person: 'Chris', text: ' Hopefully.' },
  { startTime: 2716.57, person: 'Chris', text: ' Hopefully.' },
  {
    startTime: 2717.25,
    person: 'Chris',
    text: " I'm not gonna say often it is, but you need to understand what part of your system is public."
  },
  { startTime: 2721.23, person: 'Chris', text: ' And what do I mean by public?' },
  {
    startTime: 2722.41,
    person: 'Chris',
    text: " I mean, what part of your system, if you changed it, would break a component owned by another team, or if you're operating in an environment where you don't have teams that own components and you've just got like project teams that float around, what would, if you changed, would break a component that you're not currently looking at?"
  },
  {
    startTime: 2739.55,
    person: 'Chris',
    text: " To me, that's a very practical definition of what's public and what's private."
  },
  {
    startTime: 2743.57,
    person: 'Chris',
    text: ' And so what you find sometimes is that things that you thought were private are actually public.'
  },
  {
    startTime: 2747.43,
    person: 'Chris',
    text: ' Things that you thought were public might actually be private.'
  },
  {
    startTime: 2749.99,
    person: 'Chris',
    text: ' So sometimes the classic is we thought the database schema was private.'
  },
  {
    startTime: 2753.53,
    person: 'Chris',
    text: " Turns out there's another system that's reading from it."
  },
  { startTime: 2755.29, person: 'Chris', text: " It's not, it's not private." },
  {
    startTime: 2756.21,
    person: 'Chris',
    text: ' Classic example is a data pipeline pushing out to a warehouse, right?'
  },
  {
    startTime: 2760.13,
    person: 'Chris',
    text: " It's just got a reconnection string to your private database."
  },
  {
    startTime: 2764.49,
    person: 'Chris',
    text: ' But in the flip side, another example is people often think that their APIs are public, but actually the APIs are only getting consumed by apps developed by the same company, probably by a team sitting right next to you.'
  },
  {
    startTime: 2775.51,
    person: 'Chris',
    text: ' So that could conceivably be treated as a private API because changes to it can be more easily managed by just working and collaborating closely with the team that owns the front end.'
  },
  {
    startTime: 2785.45,
    person: 'Chris',
    text: " But if you're in a world where your backend team is in Europe and your front end team's in America, it probably does need to be treated like a public API."
  },
  {
    startTime: 2792.65,
    person: 'Chris',
    text: ' So public and private is critical to understand like what elements of your system are public and what are private.'
  },
  {
    startTime: 2798.27,
    person: 'Chris',
    text: " Once that's understood, obviously your public system, your public endpoints, you know, whether it's APIs or GraphQL or messages on queues or, or database schemas, whatever it is that needs to be like kept pretty stable and managed change process around it."
  },
  {
    startTime: 2816.21,
    person: 'Chris',
    text: ' So consumers can evolve, you know, their consumption of it, but anything other than anything private, you should be free to change that whenever you like.'
  },
  {
    startTime: 2824.07,
    person: 'Chris',
    text: " And if you've got a good quality harness around, it should be able to do the internal refactoring, the internal renaming to align it with your ubiquitous language goals."
  },
  {
    startTime: 2832.33,
    person: 'Chris',
    text: " So I've done this quite successfully in a number of places where we've, we've had to, we've wanted to change the name."
  },
  { startTime: 2838.55, person: 'Chris', text: ' We realised we had the wrong name.' },
  { startTime: 2840.29, person: 'Chris', text: ' We executed an internal refactor.' },
  { startTime: 2842.59, person: 'Chris', text: ' We kept the old endpoint.' },
  {
    startTime: 2843.73,
    person: 'Chris',
    text: ' We introduced the side-by-side endpoint for the new name.'
  },
  {
    startTime: 2846.45,
    person: 'Chris',
    text: ' And then we deprecated the old endpoint once all the consumers had migrated over to the new one.'
  },
  {
    startTime: 2851.83,
    person: 'Chris',
    text: ' So this is a, I think one way of thinking about it.'
  },
  {
    startTime: 2854.67,
    person: 'Chris',
    text: " First step, understand what's public, what's private, what are you going to break if you change things, and then align your private things with the ubiquitous language as quickly as you possibly can and evolve the public things towards the language."
  },
  {
    startTime: 2865.89,
    person: 'Chris',
    text: ' Once you can collaborate with the consumers of it to, to make that sense of change, sensible, then the second idea, Oh, sorry.'
  },
  {
    startTime: 2873.49,
    person: 'Karol',
    text: " And now before you jump to the second idea, it's like you were describing so many things and in my head goes, Oh, context mapping."
  },
  { startTime: 2881.73, person: 'Karol', text: ' There we go.' },
  {
    startTime: 2882.49,
    person: 'Karol',
    text: " That's, that's one of the aspects you were talking about in essence, public private, that, that dives into the, the context mapping of social, sociotechnical dependencies as well."
  },
  {
    startTime: 2893.69,
    person: 'Karol',
    text: ' Then you have a coupling, which is another topic, a very, very, very deep topic in terms of understanding what is private, what is public.'
  },
  {
    startTime: 2904.35,
    person: 'Karol',
    text: ' Then next to you, you mentioned published language, which is basically a, an abstraction layer.'
  },
  {
    startTime: 2912.53,
    person: 'Karol',
    text: " So architecturally you would probably hear Neil Ford or Mark Ritchie's quote that nothing solves an abstraction problem, like another abstraction layer."
  },
  { startTime: 2924.69, person: 'Karol', text: ' And this is basically what happens.' },
  {
    startTime: 2926.97,
    person: 'Karol',
    text: " Basically, if you have a published language and you have an AC open host service, that's an abstraction layer that you're managing."
  },
  {
    startTime: 2933.85,
    person: 'Karol',
    text: ' So you can have your private parts of the system, and then you have the public part, which is the abstraction layer that you abstract the, all the changes that are inside, right?'
  },
  {
    startTime: 2944.23,
    person: 'Karol',
    text: ' So architecturally speaking, you add abstraction layers to be safe, to, to, to make those changes safely.'
  },
  {
    startTime: 2950.39,
    person: 'Karol',
    text: ' And then this basically ties to my work as an architect, where literally an integration platform is yet another abstraction layer, sometimes even more than one, which, which again, changes drastically the way we consume APRs, consume language because the integration platform can have its own language.'
  },
  {
    startTime: 2973.75,
    person: 'Chris',
    text: ' It can become an anti-corruption layer in a way, like a translation between, between different.'
  },
  {
    startTime: 2979.13,
    person: 'Karol',
    text: " That's one of the sole, sole purposes of, of an integration platform being an anti-corruption layer to a lot of systems, if implemented right, because it also can be a conformist and conform to everybody."
  },
  { startTime: 2991.63, person: 'Karol', text: " And then it's not, no longer an ACL." },
  { startTime: 2993.57, person: 'Karol', text: " It's just going to be copying the language." },
  {
    startTime: 2997.19,
    person: 'Chris',
    text: " And this is how, and why you see it becomes so easy for people to just slip, I'm just going to put one little bit of business logic in the integration layer."
  },
  { startTime: 3004.81, person: 'Chris', text: ' We just need to transform this one field.' },
  { startTime: 3007.37, person: 'Chris', text: ' I just need to multiply it by two.' },
  { startTime: 3008.73, person: 'Chris', text: " It's, it's not a big deal." },
  { startTime: 3009.73, person: 'Chris', text: " We'll just put that in the integration layer." },
  { startTime: 3011.25, person: 'Chris', text: " It's just simple." },
  { startTime: 3011.81, person: 'Chris', text: " It's like, that's a business rule." },
  { startTime: 3013.47, person: 'Chris', text: " That's a business logic." },
  { startTime: 3014.37, person: 'Chris', text: " And now you've lost control of that." },
  { startTime: 3016.09, person: 'Chris', text: ' And like when that, yeah.' },
  {
    startTime: 3017.55,
    person: 'Karol',
    text: ' The control is now moved to the integration platform.'
  },
  {
    startTime: 3020.31,
    person: 'Karol',
    text: " And then two years later, when you're actually making changes, you'd have a bug in production and you have no idea where it comes from."
  },
  {
    startTime: 3026.05,
    person: 'Karol',
    text: ' And you spend weeks on debugging this and looking for the root calls.'
  },
  {
    startTime: 3030.51,
    person: 'Karol',
    text: ' And then you end up on the integration platform.'
  },
  { startTime: 3033.07, person: 'Karol', text: ' Why the hell is there business logic here?' },
  {
    startTime: 3038.03,
    person: 'Chris',
    text: ' So like, you know, summing line items in order to get to an order total.'
  },
  {
    startTime: 3041.57,
    person: 'Chris',
    text: " I've seen that logic in a, because the backend doesn't give you the total front end needs the total."
  },
  {
    startTime: 3047.49,
    person: 'Chris',
    text: ' Someone puts it into the integration layer or BFF or something like that.'
  },
  {
    startTime: 3050.81,
    person: 'Chris',
    text: " And then it's like, but that's not where it belongs, obviously."
  },
  {
    startTime: 3053.75,
    person: 'Chris',
    text: " And, and, you know, because it's a, it's a rule."
  },
  { startTime: 3056.41, person: 'Chris', text: ' Like how did you sum that?' },
  { startTime: 3057.33, person: 'Chris', text: ' Does it include taxes?' },
  {
    startTime: 3058.79,
    person: 'Chris',
    text: ' Does it include, you know, like what are the rounding implications?'
  },
  { startTime: 3062.93, person: 'Chris', text: ' Like all this stuff needs to be answered.' },
  {
    startTime: 3065.07,
    person: 'Chris',
    text: " It needs to be, and this is when we talk about DDD, what we're saying is this is core business rules."
  },
  {
    startTime: 3069.29,
    person: 'Chris',
    text: ' It needs to be very clearly expressed in your code.'
  },
  {
    startTime: 3071.85,
    person: 'Chris',
    text: ' It needs to be clearly expressed in a place where you can find it and change it safely and understand it.'
  },
  {
    startTime: 3078.69,
    person: 'Chris',
    text: " And when we say, obviously it shouldn't be in the integration layer."
  },
  {
    startTime: 3081.93,
    person: 'Chris',
    text: " I, we struggle with that word obviously, because it's obvious to us because we've seen the pain that it causes, but maybe it's not obvious to some people."
  },
  {
    startTime: 3088.67,
    person: 'Chris',
    text: " And so I think this is why we want to be really explicit and clear about why we say it shouldn't be there, because this is the stuff that is embodying what's important to your company."
  },
  { startTime: 3098.23, person: 'Chris', text: " Your company doesn't care." },
  {
    startTime: 3099.55,
    person: 'Chris',
    text: " I guarantee it does not care if you're using REST or GraphQL, but it does care if your order totals don't add up because the tax isn't calculated correctly."
  },
  { startTime: 3107.03, person: 'Chris', text: " Like that's important." },
  {
    startTime: 3108.17,
    person: 'Chris',
    text: " And that's the difference between the domain concerns and the technical concerns."
  },
  {
    startTime: 3112.07,
    person: 'Chris',
    text: ' One of the first talks I gave about DDD, I introduced it with that meme of like two wolves.'
  },
  {
    startTime: 3116.45,
    person: 'Chris',
    text: " I said inside you, there's two wolves, one with a focus on the domain and one with a focus on the technology."
  },
  {
    startTime: 3121.45,
    person: 'Chris',
    text: " And as, as technologists, our technology wolf is really loud and aggressive and wants to, because it's what we love about stuff, right?"
  },
  { startTime: 3128.31, person: 'Chris', text: " That's why we got into it." },
  {
    startTime: 3129.57,
    person: 'Chris',
    text: ' We need to like strengthen our wolf with a domain focus and we need to understand both.'
  },
  {
    startTime: 3135.91,
    person: 'Chris',
    text: " Like they're both important, but it's the domain focused wolf is the one that I see in a lot of technology."
  },
  {
    startTime: 3140.99,
    person: 'Chris',
    text: ' People is underdeveloped and sort of quietly crying in the corner while the technology focused wolf is sort of dominating things.'
  },
  {
    startTime: 3149.33,
    person: 'Karol',
    text: " And I get asked quite a few times, I'm not a DDD expert, but I do utilise DDD tools to explain things and visualise things and show stakeholders."
  },
  {
    startTime: 3162.17,
    person: 'Karol',
    text: ' And sometimes people, especially techies ask me, why should I care?'
  },
  { startTime: 3167.39, person: 'Karol', text: ' Right.' },
  { startTime: 3168.01, person: 'Karol', text: " And it's like, yeah, well, why should you care?" },
  { startTime: 3171.43, person: 'Karol', text: ' Okay.' },
  {
    startTime: 3171.85,
    person: 'Karol',
    text: " You're a specialist in a specific framework, technology, whatever."
  },
  { startTime: 3175.91, person: 'Karol', text: ' Great.' },
  {
    startTime: 3177.49,
    person: 'Karol',
    text: ' What are you with that framework or technology without the business hiring you?'
  },
  { startTime: 3183.89, person: 'Karol', text: ' You do art.' },
  { startTime: 3185.67, person: 'Karol', text: " It's not science." },
  { startTime: 3186.97, person: 'Karol', text: " It's not engineering." },
  { startTime: 3187.85, person: 'Karol', text: " It's art." },
  {
    startTime: 3189.03,
    person: 'Karol',
    text: ' Because your code then does not have any purpose.'
  },
  {
    startTime: 3193.33,
    person: 'Karol',
    text: " As a developer, dev team, architect, solution designer, whatever the name of the role is in tech, if you're hired by a company, your role is to facilitate the business."
  },
  { startTime: 3205.75, person: 'Karol', text: " So you're always in business context." },
  {
    startTime: 3208.61,
    person: 'Karol',
    text: " And this is why that domain wolf should be more developed every single time you can, because otherwise you're useless to business because you're just another techie."
  },
  { startTime: 3218.65, person: 'Chris', text: ' Yeah.' },
  {
    startTime: 3219.09,
    person: 'Chris',
    text: " And it's interesting, you know, when I look at the world of startups, this is why I see a lot of technology, like startups that are led by technologists are building startups for technologists."
  },
  { startTime: 3229.45, person: 'Chris', text: ' Right.' },
  {
    startTime: 3229.97,
    person: 'Chris',
    text: " Because that's the domain they know, you know, I'm going to launch a new database service."
  },
  { startTime: 3234.25, person: 'Chris', text: " I'm going to build a cloud hosting platform." },
  { startTime: 3235.95, person: 'Chris', text: " I'm going to build a new integration layer." },
  {
    startTime: 3237.29,
    person: 'Chris',
    text: " I'm going to build an event-driven architecture thing."
  },
  {
    startTime: 3239.55,
    person: 'Chris',
    text: " Or like me, I'm going to build a ubiquitous language documentation tool, right?"
  },
  { startTime: 3242.87, person: 'Chris', text: " Because that's the domain I've lived in." },
  { startTime: 3244.37, person: 'Chris', text: " That's what I know." },
  {
    startTime: 3245.33,
    person: 'Chris',
    text: " If you want to do anything else for anybody who's not just like you as a customer, you need to collaborate with people who are like the customer and you need to really get into and understand their world."
  },
  {
    startTime: 3254.77,
    person: 'Chris',
    text: ' So one of the things we used to do at our startup was we used to send everybody out to a school kitchen and they would make sandwiches for a day and spend the day in there making sandwiches, serving the kids lunch so that they could understand like what is the impact our software is having and why, who are we doing it for and why are we doing it for them?'
  },
  {
    startTime: 3274.19,
    person: 'Chris',
    text: ' And not every company can do that level of engagement, but I think at least having some understanding of who your customer is, you know, like what, how does your business make money?'
  },
  {
    startTime: 3283.67,
    person: 'Chris',
    text: ' So this is actually a really good thing to do with you doing event storming.'
  },
  {
    startTime: 3286.37,
    person: 'Chris',
    text: " And sometimes like we get to the end of the day and everyone's tired."
  },
  {
    startTime: 3289.17,
    person: 'Chris',
    text: " We've done this whole big events, things like eight metre wall, hundreds of sticky notes or more."
  },
  {
    startTime: 3293.59,
    person: 'Chris',
    text: ' And I look at the whole thing and I go, okay, so where do you make money?'
  },
  {
    startTime: 3298.51,
    person: 'Chris',
    text: ' Like where does the money come into your company along this wall?'
  },
  {
    startTime: 3301.67,
    person: 'Chris',
    text: " Because that's actually the thing everyone should be able to answer instantly."
  },
  {
    startTime: 3305.59,
    person: 'Chris',
    text: " They should go and say, that's the point where we make money."
  },
  {
    startTime: 3308.45,
    person: 'Chris',
    text: ' Everything before that helps us get to this point.'
  },
  {
    startTime: 3311.37,
    person: 'Chris',
    text: " And if we don't get to that, if we start this journey and we don't get to that point, that's wasted effort."
  },
  {
    startTime: 3316.15,
    person: 'Chris',
    text: ' And everything after that is to help the loop that brings us back around to that point on the next sales cycle or the next month or the next year happen again.'
  },
  { startTime: 3325.07, person: 'Chris', text: " Because it's, it's, it's oxygen." },
  {
    startTime: 3327.67,
    person: 'Chris',
    text: ' Like we sometimes like people will talk about requirements analysis, right?'
  },
  { startTime: 3335.27, person: 'Chris', text: " I'm very cynical about this." },
  { startTime: 3337.75, person: 'Chris', text: " I love Udi Dehaene's phrase." },
  {
    startTime: 3339.39,
    person: 'Chris',
    text: ' He says, every requirement is a workaround in disguise.'
  },
  {
    startTime: 3343.79,
    person: 'Chris',
    text: " Because what's happening is someone has hit a problem and they've said, I'm going to solve this problem with the tools and knowledge that I have."
  },
  {
    startTime: 3354.13,
    person: 'Chris',
    text: " And then I'm going to give my solution and ask the engineers to implement my solution."
  },
  {
    startTime: 3358.17,
    person: 'Chris',
    text: ' And how many times have you got a ticket in JIRA that says, add this column to the database?'
  },
  { startTime: 3363.07, person: 'Chris', text: " It's like, is that a requirement?" },
  { startTime: 3364.21, person: 'Chris', text: ' Really?' },
  { startTime: 3364.57, person: 'Chris', text: " Like that's the requirement." },
  { startTime: 3365.81, person: 'Chris', text: " No, that's the solution." },
  { startTime: 3367.27, person: 'Chris', text: " That's the solution." },
  { startTime: 3368.17, person: 'Chris', text: " So, but sometimes it's more subtle than that." },
  { startTime: 3370.29, person: 'Chris', text: " It's like, add this field to the form." },
  {
    startTime: 3372.35,
    person: 'Chris',
    text: ' Or we had one which was like, oh, the UI is too slow.'
  },
  {
    startTime: 3376.25,
    person: 'Chris',
    text: ' We need to be able to enter these, this data more, more, more quickly.'
  },
  {
    startTime: 3381.11,
    person: 'Chris',
    text: ' And then when we dug into it, but why do you want to do that?'
  },
  {
    startTime: 3383.37,
    person: 'Chris',
    text: ' Oh, it turns out that they had someone sitting there, was punching in like a thousand records a day, transcribing it from a spreadsheet.'
  },
  {
    startTime: 3388.41,
    person: 'Chris',
    text: ' So he said, what if we built you a spreadsheet import?'
  },
  { startTime: 3390.81, person: 'Chris', text: ' And they went, you could do that.' },
  { startTime: 3392.55, person: 'Chris', text: " I didn't even know that was possible." },
  { startTime: 3393.59, person: 'Chris', text: " So it wasn't part of their tool set." },
  {
    startTime: 3395.03,
    person: 'Chris',
    text: " They didn't say our requirement is to be able to import a thousand of these in an hour."
  },
  { startTime: 3399.81, person: 'Chris', text: ' They just said, make the screen faster.' },
  { startTime: 3402.15, person: 'Chris', text: " So what's the real requirement there?" },
  {
    startTime: 3403.77,
    person: 'Chris',
    text: " You've got to dig into like, what are the actual, what problem are they trying to solve?"
  },
  {
    startTime: 3406.69,
    person: 'Chris',
    text: " The reason I bring that up is because every time you go peel back one layer of the onion, there's always another layer."
  },
  {
    startTime: 3412.53,
    person: 'Chris',
    text: ' Why, why are you trying to import a thousand a day?'
  },
  {
    startTime: 3417.05,
    person: 'Chris',
    text: " Because that's our, you know, that's our throughput."
  },
  { startTime: 3419.25, person: 'Chris', text: ' Why is that?' },
  { startTime: 3419.79, person: 'Chris', text: " Oh, that's our quarterly OKR." },
  { startTime: 3421.15, person: 'Chris', text: ' You know, why, why, why?' },
  { startTime: 3424.21, person: 'Chris', text: ' You keep asking why.' },
  { startTime: 3425.37, person: 'Chris', text: ' You peel back enough layers of the onion.' },
  {
    startTime: 3427.27,
    person: 'Chris',
    text: " The answer is always because our company needs to make more money in the next quarter than we're going to spend on salaries."
  },
  { startTime: 3433.75, person: 'Chris', text: " Like that's it." },
  { startTime: 3435.13, person: 'Chris', text: " That's the same answer for every company." },
  {
    startTime: 3436.97,
    person: 'Chris',
    text: " So what's different about the companies is the way that they've answered that question along the hierarchy of cause and effect down to you adding this column to the database."
  },
  {
    startTime: 3444.61,
    person: 'Chris',
    text: " And I'm not saying everyone needs to understand every link in the chain, but an interesting thing"
  },
  {
    startTime: 3450.09,
    person: 'Chris',
    text: " is that the more, more question and more layers you unpeel, the more likely you're going to do"
  },
  {
    startTime: 3455.63,
    person: 'Chris',
    text: ' something that is treated as innovative because innovation is really like pushing one layer up'
  },
  {
    startTime: 3461.63,
    person: 'Chris',
    text: ' the chain and doing something that nobody else thought of to solve the same problem in a different'
  },
  {
    startTime: 3465.41,
    person: 'Chris',
    text: " way or solve a hidden problem that people didn't even realise they had, like the root cause problem"
  },
  {
    startTime: 3469.85,
    person: 'Chris',
    text: ' that they were like really wrestling with that becomes innovation.'
  },
  {
    startTime: 3473.63,
    person: 'Karol',
    text: ' Like, so in a way, we literally had a talk about this.'
  },
  { startTime: 3478.95, person: 'Karol', text: ' What was that?' },
  { startTime: 3479.61, person: 'Karol', text: ' December, I think with Woody Zul.' },
  {
    startTime: 3485.13,
    person: 'Karol',
    text: ' So Woody was talking that a lot of people treat symptoms, not problem.'
  },
  { startTime: 3493.33, person: 'Karol', text: ' And then the solutions are symptomatic.' },
  {
    startTime: 3497.53,
    person: 'Karol',
    text: " They're not fixing any problem because we're just putting a big bandaid on a huge gaping wound, which doesn't help the wound."
  },
  { startTime: 3505.55, person: 'Karol', text: ' We just fix one small symptom.' },
  {
    startTime: 3507.87,
    person: 'Karol',
    text: ' Instead, there should be signals to ask questions and dig deeper into what the actual problem is.'
  },
  { startTime: 3514.97, person: 'Karol', text: ' And I took a book at my desk.' },
  {
    startTime: 3518.59,
    person: 'Karol',
    text: ' I have too many books around me, but basically this one was actually lying on the desk that says, if somebody wants to look it up, this is this domain-driven refactoring.'
  },
  {
    startTime: 3528.87,
    person: 'Karol',
    text: ' And this phrase I have on page 23 of this book is actually not anything around domain-driven design or refactoring itself.'
  },
  { startTime: 3540.23, person: 'Karol', text: " So I'm going to quote here." },
  {
    startTime: 3542.77,
    person: 'Karol',
    text: ' We tend to seek to try and find a solution as quickly as possible and leave the problem space as quickly too.'
  },
  {
    startTime: 3549.57,
    person: 'Karol',
    text: ' We are uncomfortable staying in this area, but it is where our client needs to reside.'
  },
  {
    startTime: 3556.09,
    person: 'Karol',
    text: ' It is the zone that allows us to acquire more information about the problems of our clients, about the problems our clients ask us to solve through the software we will develop for them, because writing software means solving business problems.'
  },
  {
    startTime: 3572.67,
    person: 'Karol',
    text: ' And this is also a cardinal, this is not only a cardinal sin of developers, architects, solution designers, UX designers, or whatnot.'
  },
  {
    startTime: 3581.07,
    person: 'Karol',
    text: ' This is also a cardinal sin of the business itself, because that stems from a variety of things.'
  },
  {
    startTime: 3589.87,
    person: 'Karol',
    text: " One of it being just pure psychology or bad management, for example, because I've seen a lot of managers just stating, do not come to me with problems, come to me with solutions."
  },
  {
    startTime: 3601.47,
    person: 'Karol',
    text: " So people, instead of diving into the problem space, they're diving into the solution space, and they want to get out of the problem as quickly as possible, because otherwise they'll be in trouble."
  },
  { startTime: 3610.53, person: 'Chris', text: ' Yeah, 100%.' },
  { startTime: 3611.81, person: 'Chris', text: " It's a big issue." },
  {
    startTime: 3612.95,
    person: 'Chris',
    text: " It's a cultural thing in a lot of companies, isn't it?"
  },
  {
    startTime: 3615.25,
    person: 'Chris',
    text: ' And in those same companies, I guarantee you, if you really wanted to understand, when was the last time that anyone spoke to a customer with a view of trying to actually understand what would make their life better?'
  },
  { startTime: 3626.01, person: 'Chris', text: ' It would have been years ago, right?' },
  {
    startTime: 3628.41,
    person: 'Chris',
    text: ' You probably have a lot of customer service representatives speaking to customers every day.'
  },
  {
    startTime: 3631.63,
    person: 'Chris',
    text: " They would have a lot of insights into what problems the customers are facing, but they're never invited to have these conversations."
  },
  {
    startTime: 3637.87,
    person: 'Chris',
    text: " Every time I run an event store for a client, I say, make sure you bring some people from customer service or customer success, people that actually talk to your customers every day, make sure they're in the room."
  },
  {
    startTime: 3646.61,
    person: 'Chris',
    text: ' And every single time without fail, they say something that absolutely shocks the rest of the people in the room.'
  },
  { startTime: 3651.15, person: 'Chris', text: " It's inevitable." },
  {
    startTime: 3653.05,
    person: 'Karol',
    text: " That's very true, because at times, if you get that kind of bubble, silo, then you have something like a CTO-driven development or a CPO-driven development."
  },
  { startTime: 3665.27, person: 'Chris', text: ' I love resume-driven development.' },
  {
    startTime: 3669.71,
    person: 'Karol',
    text: " I want to learn Kafka, so let's put Kafka into the solution."
  },
  { startTime: 3673.29, person: 'Karol', text: ' There you go.' },
  {
    startTime: 3674.13,
    person: 'Karol',
    text: ' Way to over-complicate your solution years ahead, right?'
  },
  {
    startTime: 3678.23,
    person: 'Karol',
    text: " And you're going to be solving the problems that stem from Kafka, not from the problem space that you're in, because somebody got them introduced Kafka, and it just will not work because you're not Netflix."
  },
  { startTime: 3687.85, person: 'Chris', text: " Don't get me started on Kafka." },
  { startTime: 3689.53, person: 'Chris', text: " That's a whole nother live stream topic." },
  { startTime: 3692.95, person: 'Karol', text: ' Okay.' },
  { startTime: 3694.29, person: 'Karol', text: ' Pitch idea for the future.' },
  {
    startTime: 3695.79,
    person: 'Karol',
    text: " I'm going to invite you and somebody from Solace, and we're going to talk about Kafka, because they love the topic of Kafka."
  },
  {
    startTime: 3704.27,
    person: 'Chris',
    text: " I just realised we rambled a bit, because there was a second part of answering Lucien's question before."
  },
  {
    startTime: 3709.99,
    person: 'Chris',
    text: ' We talked about public and private, but the second part is the concept of a bounded context.'
  },
  {
    startTime: 3715.47,
    person: 'Chris',
    text: " And so, I think that if you are in a world where you've got a legacy component and you're not able to change it, you've got these technical constraints, then you need to recognise that ubiquitous language is not intended to be something that's applied universally across the whole software system."
  },
  {
    startTime: 3730.51,
    person: 'Chris',
    text: ' A very valid solution is to say this technical, this legacy stuff is its own bounded context, and each bounded context gets its own language.'
  },
  {
    startTime: 3739.23,
    person: 'Chris',
    text: ' And so, then you can create new bounded contexts, design new bounded contexts, and craft a new language in those bounded contexts, which suits the current needs.'
  },
  {
    startTime: 3746.39,
    person: 'Chris',
    text: " And you're going to have some adaptations, some anti-corruption layers, or some integration between them."
  },
  {
    startTime: 3750.41,
    person: 'Chris',
    text: ' But over time, hopefully you can migrate customers into just using the new components.'
  },
  {
    startTime: 3754.75,
    person: 'Chris',
    text: " And that's one way to sort of absorb or like dissolve the legacy stuff."
  },
  {
    startTime: 3758.51,
    person: 'Chris',
    text: " It's a complex space, sort of legacy modernisation."
  },
  {
    startTime: 3762.23,
    person: 'Chris',
    text: " But don't feel like you can't adopt the concept of a ubiquitous language, because you've got legacy code."
  },
  {
    startTime: 3769.09,
    person: 'Chris',
    text: ' There are some patterns to help deal with and one of them is this idea of a bounded context where you say this legacy stuff is its own bounded context.'
  },
  {
    startTime: 3775.87,
    person: 'Chris',
    text: ' In that bounded context, these words have this meaning.'
  },
  {
    startTime: 3778.97,
    person: 'Chris',
    text: ' These are not the words we prefer to use in this part of the code, which is a different bounded context.'
  },
  {
    startTime: 3783.81,
    person: 'Chris',
    text: ' And so, the idea of a bounded context is literally a strict boundary around a context.'
  },
  { startTime: 3788.15, person: 'Chris', text: ' Context is what gives words meaning.' },
  {
    startTime: 3790.53,
    person: 'Chris',
    text: ' When we talk about the fact that words have many different meanings, like you said before, the word integration, how do you know which word, which meaning applies?'
  },
  { startTime: 3798.13, person: 'Chris', text: ' The answer is context.' },
  { startTime: 3799.05, person: 'Chris', text: " What's the context of the conversation?" },
  {
    startTime: 3801.63,
    person: 'Chris',
    text: ' In what context were people talking about integration?'
  },
  {
    startTime: 3804.93,
    person: 'Chris',
    text: " If they're talking in the context of speaking to a data engineer, they're talking about data integration."
  },
  {
    startTime: 3808.69,
    person: 'Chris',
    text: " If they speak context of speaking to you, they're talking about application integration."
  },
  { startTime: 3812.81, person: 'Chris', text: ' Context is critical.' },
  {
    startTime: 3814.15,
    person: 'Chris',
    text: " So, there's actually why the word bounded context gets its name."
  },
  {
    startTime: 3817.17,
    person: 'Chris',
    text: " It's actually why my tool is called Contextive as well, because it's about context aware definitions."
  },
  {
    startTime: 3823.39,
    person: 'Chris',
    text: " Particularly with large language models, we're seeing people become suddenly very interested in context, because context is what helps drive the probability equations in these large language models."
  },
  {
    startTime: 3833.35,
    person: 'Chris',
    text: ' So, yeah, I think bounded context is a really powerful tool to help tackle that kind of situation as well.'
  },
  {
    startTime: 3838.73,
    person: 'Karol',
    text: " And then, of course, if you, through this kind of pondering, you identify a bounded context, or through event storming, you start identifying different bounded contexts, because if you do event storming, that's a natural outcome of it, that you actually find some domains in bounded contexts."
  },
  {
    startTime: 3857.17,
    person: 'Karol',
    text: ' Then, if you have this kind of legacy system, you can always put an open host service or an ACL in front of it.'
  },
  {
    startTime: 3864.73,
    person: 'Karol',
    text: " That will just serve as a translation layer from whatever language it has to the agreed language of the problem domain that you're having, so that you can do it."
  },
  { startTime: 3877.41, person: 'Karol', text: ' And you can do that in all sorts of forms.' },
  { startTime: 3879.81, person: 'Karol', text: ' You can just put an API layer on top of it.' },
  { startTime: 3882.25, person: 'Karol', text: ' One way to do it.' },
  {
    startTime: 3883.51,
    person: 'Karol',
    text: ' You can put an integration platform in front of it.'
  },
  {
    startTime: 3886.77,
    person: 'Karol',
    text: ' Integration platforms are great ACLs, so that will work as well.'
  },
  { startTime: 3891.29, person: 'Karol', text: ' It really depends on so many factors.' },
  { startTime: 3894.93, person: 'Karol', text: ' What is the scale of your business?' },
  { startTime: 3897.07, person: 'Karol', text: ' How many systems you have?' },
  { startTime: 3898.93, person: 'Karol', text: ' How much of a throughput you have?' },
  {
    startTime: 3900.73,
    person: 'Karol',
    text: ' How much knowledge you have about that system, or none at all, and you just see the black box, et cetera, et cetera.'
  },
  {
    startTime: 3908.23,
    person: 'Karol',
    text: ' So, by that, you can choose a way to mitigate that, and just run it, and test it, and see if it works.'
  },
  {
    startTime: 3916.39,
    person: 'Karol',
    text: " If it doesn't work, then find a different way to mitigate the influence of that language."
  },
  { startTime: 3920.55, person: 'Karol', text: ' But basically, you need some sort of a...' },
  {
    startTime: 3922.33,
    person: 'Karol',
    text: " Anyways, you will need some sort of an anti-corruption layer, so we're back to the architectural concept of an abstraction between that legacy system and something else that you're building, and what kind of abstraction you provide, what kind of boundary you provide."
  },
  {
    startTime: 3936.49,
    person: 'Karol',
    text: ' Some organisations just separate that to entirely new environments that are completely isolated, can do.'
  },
  {
    startTime: 3943.99,
    person: 'Karol',
    text: " Some just utilise translation, and that works as well, and it really depends on what is the actual situation you're in."
  },
  { startTime: 3953.25, person: 'Chris', text: ' Absolutely.' },
  {
    startTime: 3954.45,
    person: 'Chris',
    text: ' But this idea about context, actually, it reminds me...'
  },
  {
    startTime: 3957.11,
    person: 'Chris',
    text: ' So, you asked a question a while ago about how does the language affect the design?'
  },
  {
    startTime: 3960.85,
    person: 'Chris',
    text: " I think we've taken some wrangly twists and turns since then, but this idea of the bounded context is a critical one for that, because I think that there are many different heuristics, or rules of thumb for how to find bounded context boundaries, but one of the ones that I really like is looking at the language."
  },
  {
    startTime: 3978.03,
    person: 'Chris',
    text: " And if you find that you've got a different set of terms that are frequently used together, or the same word that has..."
  },
  {
    startTime: 3987.13,
    person: 'Chris',
    text: " You've sort of managed to hear, oh, hang on, sometimes you use this word, and you seem to mean this thing, and sometimes you use the same word, but you seem to mean something else, that can uncover, actually, these two things are in different bounded contexts."
  },
  {
    startTime: 3997.71,
    person: 'Chris',
    text: " And that's why, because humans, they don't give you a nice label to say, oh, I'm switching contexts now."
  },
  {
    startTime: 4005.31,
    person: 'Chris',
    text: " People will jump between 10 different contexts in the same conversation, because we're actually naturally very context aware, and we know what context things are just by inference."
  },
  {
    startTime: 4017.59,
    person: 'Chris',
    text: " I've been collecting funny examples of the same term having very different meanings, and one of my favourites is the word theatre, because that has a very different meaning if you're talking about the context of a play versus the context of a surgery."
  },
  {
    startTime: 4034.65,
    person: 'Chris',
    text: " So you've got a playhouse theatre, but if you say the patient is in the theatre, you know from context that you're talking about a surgical theatre, whereas if you say the actor's running late to the theatre, you know you're talking about a playhouse theatre."
  },
  {
    startTime: 4051.07,
    person: 'Chris',
    text: " So we, as humans, know from the implicit context of the language what context we're talking about, and you can be talking to business stakeholders, they will jump between contexts like nobody's business."
  },
  {
    startTime: 4064.95,
    person: 'Chris',
    text: " And so this is, I think there's a bit of a, it's actually a problematic heuristic when people say, oh, you just need to talk to, you know, you can model your bounded contexts or your domains based on departments in the company."
  },
  {
    startTime: 4076.89,
    person: 'Chris',
    text: " I've very rarely found that to be effective, because, you know, those departments in the company are usually driven by politics and other kind of like, you know, non-optimal, sub-optimal sort of design strategies."
  },
  {
    startTime: 4090.09,
    person: 'Chris',
    text: ' And you will find people in those departments that kind of very naturally like shuffle between contexts, you know, without really batting an eyelid.'
  },
  {
    startTime: 4097.97,
    person: 'Chris',
    text: ' But as system designers, we need to really tease these things apart and understand, hang on, use this word in this, oh yeah, well, when I meant that, I meant this thing, but when I said it later, I meant this other thing.'
  },
  {
    startTime: 4107.75,
    person: 'Chris',
    text: ' You need to make that explicit and draw it out from these conversations.'
  },
  {
    startTime: 4111.27,
    person: 'Chris',
    text: ' And so, the language drives the design by listening closely to it.'
  },
  {
    startTime: 4117.189,
    person: 'Karol',
    text: " Yeah, it needs to be more deterministic when we do design, because language itself is not that deterministic in a sense, because it's fluid."
  },
  { startTime: 4126.83, person: 'Karol', text: ' The meanings are fluid.' },
  {
    startTime: 4128.67,
    person: 'Karol',
    text: ' The same word may mean so many things, even in just plain language.'
  },
  {
    startTime: 4137.069,
    person: 'Karol',
    text: " I've been talking to my team today, and my team is composed of multiple nationalities, and we were talking about learning the Dutch language, right?"
  },
  {
    startTime: 4148.609,
    person: 'Karol',
    text: ' And Dutch language has multiple commonalities with Polish language.'
  },
  {
    startTime: 4152.87,
    person: 'Karol',
    text: ' The same words phonetically, meaning-wise, also the same at times.'
  },
  {
    startTime: 4156.89,
    person: 'Karol',
    text: " So, the word like smak means taste, and it's just written a little bit differently in Dutch, a little bit differently in Polish, means exactly the same thing."
  },
  { startTime: 4166.149, person: 'Karol', text: ' Kran, meaning a tap for water, same thing.' },
  {
    startTime: 4171.55,
    person: 'Karol',
    text: " But kran in Dutch may mean also a completely different thing, for example, and we're already semantically lost there, right?"
  },
  {
    startTime: 4178.71,
    person: 'Karol',
    text: " But then there are words that are phonetically the same, but semantically, they're completely different."
  },
  {
    startTime: 4187.21,
    person: 'Karol',
    text: " And I'm not going to say them out loud here, but basically, we joked about certain words that are regular words in Dutch."
  },
  {
    startTime: 4194.17,
    person: 'Karol',
    text: " So, for example, the word peanuts in Dutch, it's a normal word."
  },
  { startTime: 4199.03, person: 'Karol', text: " In Polish, it's an actually offensive slur." },
  { startTime: 4202.41, person: 'Karol', text: ' So, to that extent, right?' },
  {
    startTime: 4204.87,
    person: 'Karol',
    text: " And the way people say good morning, or well, the part good in the phrase good morning in the Netherlands, not exactly proper Dutch, but the slang Dutch, it's actually also a dirty word in Polish, right?"
  },
  {
    startTime: 4222.73,
    person: 'Karol',
    text: " So, it's like I'm going to a kindergarten, and the teachers in the kindergarten greet me with the slang version of good morning, and I'm like cracking up inside because it has a different semantic meaning for me."
  },
  {
    startTime: 4234.99,
    person: 'Karol',
    text: ' And this is in terms of the ubiquitous land, which in bandwidth context is all about that semantic meaning of things.'
  },
  { startTime: 4241.81, person: 'Karol', text: ' And it will always be.' },
  { startTime: 4244.33, person: 'Karol', text: ' And this is the thing where' },
  {
    startTime: 4245.51,
    person: 'Chris',
    text: " it's a very challenging task we've set ourselves as engineers is to like take this fluid, amorphous,"
  },
  {
    startTime: 4250.85,
    person: 'Chris',
    text: ' constantly evolving human language and pin it down to something that we can write some software'
  },
  {
    startTime: 4255.29,
    person: 'Chris',
    text: ' around, whilst at the same time, writing that software in such a way that we can change the'
  },
  {
    startTime: 4259.65,
    person: 'Chris',
    text: " software as the language evolves around it, or come up with an architecture that's going to be"
  },
  {
    startTime: 4263.65,
    person: 'Chris',
    text: ' resilient to the kind of changes that might happen.'
  },
  {
    startTime: 4265.95,
    person: 'Chris',
    text: ' You know, people like Barry are talking about with residuality.'
  },
  {
    startTime: 4269.01,
    person: 'Chris',
    text: " So, you know, there's a lot of, like, it's hard work, right?"
  },
  { startTime: 4271.93, person: 'Chris', text: " There's no easy solution." },
  { startTime: 4273.31, person: 'Karol', text: ' Extremely difficult.' },
  {
    startTime: 4274.31,
    person: 'Chris',
    text: " And this is one of the reasons why, you know, like when we talk about language, and you know, we've kind of been edging towards this topic, so I might as well bring it up."
  },
  {
    startTime: 4282.09,
    person: 'Chris',
    text: ' But when we talk about context, you know, like inevitably, when I talk about this, people start bringing up the topic of large language models, like, you know, are they making this easier?'
  },
  { startTime: 4291.71, person: 'Chris', text: ' Are they making it harder?' },
  {
    startTime: 4292.75,
    person: 'Chris',
    text: ' Like, what impact are they having on this space?'
  },
  {
    startTime: 4295.03,
    person: 'Chris',
    text: " And, you know, I have a particular view on it, which is maybe a little bit more cynical than some other people's."
  },
  {
    startTime: 4302.63,
    person: 'Chris',
    text: " But it's basically, like, language models are able to capture one specific set of facts about language, which is the, what's called the denotational semantics."
  },
  {
    startTime: 4318.13,
    person: 'Chris',
    text: " So that's the idea that these tokens are found frequently with each other in a corpus of text, probabilistically speaking."
  },
  { startTime: 4326.33, person: 'Chris', text: ' That does encode a certain level of meaning.' },
  {
    startTime: 4329.59,
    person: 'Chris',
    text: ' And that meaning becomes, like, apparent when you have conversations with, like, Chachi Petee and things.'
  },
  {
    startTime: 4335.15,
    person: 'Chris',
    text: " You know, you can kind of see, it seems to understand me, or it seems to be able to make sense of what I'm talking about."
  },
  {
    startTime: 4342.23,
    person: 'Chris',
    text: " But also, as I'm sure many people have seen, like, that sometimes breakdowns and breaks down, you get hallucinations."
  },
  {
    startTime: 4348.63,
    person: 'Chris',
    text: ' And hallucinations are quite confusing when you first encounter them.'
  },
  {
    startTime: 4351.35,
    person: 'Chris',
    text: " But when you understand that it's just, you know, you've got a sequence of tokens, you've got a, like, a complex network of probabilities deciding what is the next likely token, those probabilities are ranked, and then a random number generator chooses one of the most likely, but not necessarily always the most likely."
  },
  {
    startTime: 4368.73,
    person: 'Chris',
    text: ' And you realise, well, this is where they come from.'
  },
  {
    startTime: 4371.67,
    person: 'Chris',
    text: ' We just randomly sometimes pick a token further down the list, which actually happens to have a very different semantic.'
  },
  {
    startTime: 4378.75,
    person: 'Chris',
    text: ' And then that token becomes part of the context, which then drives the probabilities of the next token.'
  },
  {
    startTime: 4383.35,
    person: 'Chris',
    text: ' And it sort of goes off course, and you end up with these, like, complete fabrications of, like, things are just completely confusing the people.'
  },
  { startTime: 4392.35, person: 'Chris', text: ' And I think this is a real problem.' },
  {
    startTime: 4394.35,
    person: 'Chris',
    text: " So I, you know, I'm not saying that people are not getting value out of them."
  },
  {
    startTime: 4398.23,
    person: 'Chris',
    text: ' But as someone who cares about precision in language and meaning, I am very distrustful of letting or delegating the creation of my glossary definitions to a large language model.'
  },
  {
    startTime: 4408.77,
    person: 'Chris',
    text: " I think you can get something that is very plausible on the surface, but it's going to be subtly different from what your business actually needs."
  },
  {
    startTime: 4417.13,
    person: 'Chris',
    text: " What you're going to get is sort of like the statistical average of the text that's out there on the internet, not necessarily the way your company talks about it."
  },
  {
    startTime: 4425.75,
    person: 'Chris',
    text: ' So I think this needs to be very carefully considered by a human and checked with other humans to make sure it makes sense, people who are actual experts in the domain.'
  },
  {
    startTime: 4433.75,
    person: 'Chris',
    text: " Because if you're not an expert in the domain, I'm going on about this a bit because people have been looking at my tool Contextive and they've been saying, oh, we're going to get an LLM to create our glossary."
  },
  {
    startTime: 4444.69,
    person: 'Chris',
    text: " And I'm like, if you don't get a human to check it, you're going to just be, you might as well not have a glossary, right?"
  },
  { startTime: 4450.49, person: 'Chris', text: " Like you're operating in La La Land." },
  { startTime: 4453.15, person: 'Chris', text: " So it's a bit of a bug bit, to be honest." },
  {
    startTime: 4458.15,
    person: 'Karol',
    text: " But now you've said a phrase that I recall from your conversation from a different stream, and I think you know which stream I mean, about an LLM being a Game Master, Dungeon Master for RPG sessions."
  },
  {
    startTime: 4476.53,
    person: 'Karol',
    text: ' Now, I think this is in that sense of understanding the concept, why is it not exactly going to be that precise?'
  },
  {
    startTime: 4487.35,
    person: 'Karol',
    text: " It's a very good example why that LLM will not be a good Game Master."
  },
  {
    startTime: 4493.75,
    person: 'Karol',
    text: ' And for that extent, I really tried, I did provide, I did create a specific chatbot on my Gemini account, and I provided it with a lot of context for a specific story-driven RPG that I wanted to play and tried to play, ended up spending four hours chatting with Gemini, just playing along and figuring out.'
  },
  {
    startTime: 4518.81,
    person: 'Karol',
    text: " Interesting, but, and now here's your opinion on that."
  },
  { startTime: 4522.85, person: 'Karol', text: ' Can you restate that for the stream?' },
  {
    startTime: 4524.99,
    person: 'Karol',
    text: ' Because that was a very interesting one, why an LLM would not be a great Dungeon Master.'
  },
  { startTime: 4530.33, person: 'Chris', text: " So, I remember the stream you're talking about." },
  {
    startTime: 4533.91,
    person: 'Chris',
    text: ' I was chatting to a guy who runs a gaming podcast, and was talking about large language models in the context of game development and games.'
  },
  {
    startTime: 4541.43,
    person: 'Chris',
    text: " And we were using the concept of a large language model as a Dungeon Master, because in computer games, I think one of the hypotheses is that you're going to get like more dynamic game narratives being created on the fly by large language models."
  },
  {
    startTime: 4555.43,
    person: 'Chris',
    text: " And I think that, you know, my view on it is that because of the fact that large language models are drawing from a corpus of text, they're looking at probabilities."
  },
  {
    startTime: 4565.71,
    person: 'Chris',
    text: " And as an individual user, you're engaging with a single set of outputs based on the inputs you've provided, the context you provided."
  },
  {
    startTime: 4573.67,
    person: 'Chris',
    text: " When you look at like a set of all the possible answers that are coming out, you don't see as much variability as you might expect."
  },
  {
    startTime: 4581.95,
    person: 'Chris',
    text: " So what you're seeing really actually is stuff that's kind of lifted from text that's been sort of from the internet."
  },
  {
    startTime: 4589.23,
    person: 'Chris',
    text: " You don't tend to see stuff that's actually innovative or creative."
  },
  {
    startTime: 4592.75,
    person: 'Chris',
    text: " However, it might appear creative to you because you're not familiar with the source material."
  },
  {
    startTime: 4598.03,
    person: 'Chris',
    text: " If you're not familiar with where it got the stuff from, you know, this thing's really creative."
  },
  {
    startTime: 4601.75,
    person: 'Chris',
    text: ' It just came up with this stuff, but actually it probably lifted it from something that it kind of, you know, it was in its training data legally or illegally.'
  },
  { startTime: 4611.89, person: 'Chris', text: ' Another conversation.' },
  {
    startTime: 4614.13,
    person: 'Chris',
    text: " So, you know, my view on it, I think that they're not going to make a very good one because I don't think they're going to be very creative."
  },
  {
    startTime: 4620.87,
    person: 'Chris',
    text: " I think that you're going to get, it's going to get boring over time."
  },
  { startTime: 4623.17, person: 'Chris', text: " It's going to be repetitive." },
  {
    startTime: 4625.29,
    person: 'Chris',
    text: " But that said, I've spoken to people who've found a lot of satisfaction in engaging with large language models in this way."
  },
  {
    startTime: 4631.69,
    person: 'Chris',
    text: ' You know, they found it perfectly satisfying for their needs.'
  },
  {
    startTime: 4634.07,
    person: 'Chris',
    text: " So, you know, I don't want to tell them that they're not having fun when they tell me they're having fun."
  },
  {
    startTime: 4638.19,
    person: 'Chris',
    text: " But I think that, you know, it's not going to replace genuine human creativity."
  },
  {
    startTime: 4643.71,
    person: 'Chris',
    text: " And in the context of what we're talking about, crafting glossaries for businesses, I think there's a real risk that it creates another way for engineers to avoid talking to domain experts."
  },
  {
    startTime: 4654.11,
    person: 'Chris',
    text: ' You know, I can just ask Gemini to create a glossary for me.'
  },
  { startTime: 4661.37, person: 'Chris', text: ' Like, no, have the conversation.' },
  { startTime: 4663.09, person: 'Chris', text: " You'll appreciate it." },
  {
    startTime: 4664.23,
    person: 'Chris',
    text: ' You will engage with the human being who actually works in the space.'
  },
  {
    startTime: 4667.43,
    person: 'Chris',
    text: " You'll learn something that you won't learn from the large language model."
  },
  {
    startTime: 4671.23,
    person: 'Karol',
    text: " On that note of language and large language models, when I played it as a, when I worked with the Gemini chatbot that I created as a game master, there was a risk that I wasn't aware of that actually popped out instantly in the game that I was playing, is that depending on the model, the models are, some models, especially those that are chatbot models, are very agreeable."
  },
  {
    startTime: 4706.11,
    person: 'Karol',
    text: ' So there was absolutely no instance in the story I was playing that my character failed at something.'
  },
  {
    startTime: 4715.35,
    person: 'Karol',
    text: " Whereas in a normal game, you just throw a dice and you roll a natural one and you're, oh, I'm screwed."
  },
  { startTime: 4722.29, person: 'Karol', text: ' Here, I was always successful.' },
  { startTime: 4724.23, person: 'Karol', text: ' Whatever I said, it goes.' },
  { startTime: 4725.75, person: 'Karol', text: " Some people, that's what they do." },
  { startTime: 4728.21, person: 'Karol', text: ' Of course, yeah.' },
  {
    startTime: 4729.31,
    person: 'Karol',
    text: " But that doesn't create the, you know, the level of attention, et cetera."
  },
  {
    startTime: 4734.01,
    person: 'Karol',
    text: " But that brings a very, very dangerous thing in terms of also language and building the language, because that means that each model that you didn't train yourself has built in guardrails and guidelines."
  },
  {
    startTime: 4750.35,
    person: 'Karol',
    text: ' Now, there was a very interesting conversation I in the office some time ago with one of our colleagues who was actually working on AI ethics, and they were pondering about use cases of AI for public institutions, institutions such as police.'
  },
  {
    startTime: 4768.93,
    person: 'Karol',
    text: " And they were pondering on specific types of crime, some of which are very serious, and I'm not going to name specifics, but well, not exactly the nice ones."
  },
  {
    startTime: 4780.55,
    person: 'Karol',
    text: ' And they were pondering on use cases, and AI, in this instance, that was the lovely one attached to the collaborative tools, was recording the meeting, transcribing it, and making summaries.'
  },
  {
    startTime: 4796.61,
    person: 'Karol',
    text: ' So, after the meeting, they received a summary from that particular LLM, and suddenly they realised that two-third of the meeting was completely erased from the summary.'
  },
  {
    startTime: 4809.01,
    person: 'Karol',
    text: ' They checked the transcript, it was absolutely there.'
  },
  { startTime: 4812.05, person: 'Karol', text: ' They checked the summary, nope, nothing.' },
  { startTime: 4814.53, person: 'Karol', text: ' Why?' },
  {
    startTime: 4815.33,
    person: 'Karol',
    text: ' Because that particular LLM had built-in guidelines and guardrails not to process that kind of information and instantly reject that as input.'
  },
  {
    startTime: 4829.09,
    person: 'Karol',
    text: " And now, if we try to utilise LLMs to create a living language for our company, and our company is working on an edge of something that is, let's say, borderline legal, borderline meaning that we're actually, for example, a law enforcement agency preventing certain crimes."
  },
  {
    startTime: 4850.45,
    person: 'Karol',
    text: ' But the LLM is built with guardrails not ever to touch upon those crimes.'
  },
  {
    startTime: 4856.77,
    person: 'Karol',
    text: ' So, you either have to jailbreak it, or do adversarial prompting that retrains them, well, retrains, fine-tunes the model.'
  },
  {
    startTime: 4867.89,
    person: 'Karol',
    text: " But without that awareness of such guardrails, you're already introducing a lot of error into your output."
  },
  {
    startTime: 4876.15,
    person: 'Chris',
    text: " I think this is a really fascinating case, because what it highlights is that for all that a lot of people are engaging with these tools and being led to the belief or the illusion that they're chatting with a very intelligent entity, these are products."
  },
  {
    startTime: 4891.57,
    person: 'Chris',
    text: ' And there have been product choices made in the design and implementation of these products.'
  },
  {
    startTime: 4896.07,
    person: 'Chris',
    text: " And those product choices are orientated around the risk profile and risk appetite of the company that's selling the product."
  },
  {
    startTime: 4901.93,
    person: 'Chris',
    text: " And they're not always transparent around either the data sets that are incorporated into it, or the fine-tuning and the other kind of guardrails and other sort of supporting systems that they've built in around it."
  },
  {
    startTime: 4914.23,
    person: 'Chris',
    text: ' And so, to sort of tie your business to this thing, which is so opaque, I think presents a lot of risk.'
  },
  {
    startTime: 4921.35,
    person: 'Chris',
    text: " But, you know, it doesn't mean there's not opportunity there as well."
  },
  { startTime: 4923.89, person: 'Chris', text: ' I understand why people are doing this.' },
  {
    startTime: 4925.35,
    person: 'Chris',
    text: " It's just, like I said, I have a pretty cynical view about the whole sector."
  },
  { startTime: 4928.97, person: 'Chris', text: " So, that's a thing." },
  {
    startTime: 4931.03,
    person: 'Chris',
    text: ' But this is, you know, this is interesting, because it does lead to, like, on the flip side, so we talked about large language models for the creation of glossaries and terminology and definitions.'
  },
  {
    startTime: 4941.75,
    person: 'Chris',
    text: ' On the other side, though, I think if you are using large language models, if you have created'
  },
  {
    startTime: 4945.41,
    person: 'Chris',
    text: ' your own glossaries, I have heard some reports from people that providing those glossaries as'
  },
  {
    startTime: 4950.97,
    person: 'Chris',
    text: ' part of the context to your large language model can actually be very helpful, because it can help'
  },
  {
    startTime: 4955.11,
    person: 'Chris',
    text: " focus on the definitions and the specific meanings that are relevant to you, which means that it's"
  },
  {
    startTime: 4960.63,
    person: 'Chris',
    text: " more likely to find within its training set relevant outputs and stuff that's actually useful"
  },
  { startTime: 4967.51, person: 'Chris', text: ' to you.' },
  {
    startTime: 4968.77,
    person: 'Chris',
    text: ' So, I was talking about using it to create code, and he said it kept going off the rails and'
  },
  {
    startTime: 4972.99,
    person: 'Chris',
    text: ' doing the wrong stuff, and he wrote some glossary definitions in my context file format, added that'
  },
  {
    startTime: 4978.93,
    person: 'Chris',
    text: ' to the context for his tool, and it improved the quality of the code it was creating, because it'
  },
  {
    startTime: 4985.63,
    person: 'Chris',
    text: ' actually knew now what he meant by some of the terms he was using in his, it gave more context'
  },
  { startTime: 4990.49, person: 'Chris', text: ' to what he was talking about.' },
  {
    startTime: 4991.91,
    person: 'Chris',
    text: " Now, again, I think there's risks and problems with that, but I'm saying if you're doing it, it could be something that's helpful to you."
  },
  {
    startTime: 4997.71,
    person: 'Karol',
    text: ' It always depends on the use case and how correct the output is and how much effort you put in to actually validate the output.'
  },
  { startTime: 5005.09, person: 'Chris', text: ' Absolutely.' },
  {
    startTime: 5005.77,
    person: 'Karol',
    text: " Because if it's a completely automated process and you don't have any"
  },
  {
    startTime: 5009.03,
    person: 'Karol',
    text: ' validation guardrails on the output, then, of course, even if you provide proper'
  },
  {
    startTime: 5016.63,
    person: 'Karol',
    text: ' training material and you fine-tune the model with that context that you give, it still is at risk'
  },
  {
    startTime: 5023.13,
    person: 'Karol',
    text: " without oversight, and that will create new language, but it's completely irrelevant"
  },
  {
    startTime: 5030.77,
    person: 'Karol',
    text: " to the problem domain that you're in and to the company that you're in."
  },
  {
    startTime: 5035.07,
    person: 'Chris',
    text: " Yeah, I think the best way to sum it up actually was in the DORA report 2025 around the impact of LLMs on coding, and what they basically, to summarise it, they said that it's a multiplier."
  },
  {
    startTime: 5046.91,
    person: 'Chris',
    text: " So if you're already following good practises, it can speed you up."
  },
  {
    startTime: 5051.03,
    person: 'Chris',
    text: " So by good practises, they're in continuous delivery, having strong quality harnesses, working in small batches, breaking things down, all that kind of stuff, it can be really good."
  },
  { startTime: 5058.99, person: 'Chris', text: " If you're not, it will actually slow you down," },
  {
    startTime: 5060.97,
    person: 'Chris',
    text: " and this is part of, like, if you don't have processes in place to check that it's correct,"
  },
  {
    startTime: 5066.85,
    person: 'Chris',
    text: " functionally correct, you're not reviewing the code, you're not frequently refactoring,"
  },
  {
    startTime: 5071.15,
    person: 'Chris',
    text: ' making more modular designs so that the smaller amount of context required to work on the code,'
  },
  {
    startTime: 5076.07,
    person: 'Chris',
    text: " exactly what we've been talking about for years with modular designs and breaking things down"
  },
  {
    startTime: 5079.31,
    person: 'Chris',
    text: ' into smaller components so it can fit in our heads.'
  },
  {
    startTime: 5081.65,
    person: 'Chris',
    text: " Now we're talking about breaking it down into smaller components so it can fit in the LLMs context window."
  },
  { startTime: 5085.75, person: 'Chris', text: " It's all the same kind of thinking, right?" },
  {
    startTime: 5087.83,
    person: 'Chris',
    text: " So if you're not doing that, it's going to slow you down."
  },
  {
    startTime: 5089.91,
    person: 'Chris',
    text: " If you are doing it, it might speed you up, and this is sort of the evidence that we're seeing so far from organisations like DORA and MITRE."
  },
  {
    startTime: 5097.09,
    person: 'Chris',
    text: " So yeah, it kind of like saying, like, you've got to be checking it."
  },
  { startTime: 5100.85, person: 'Karol', text: ' It just dawned on me.' },
  {
    startTime: 5102.37,
    person: 'Karol',
    text: " I don't know if you're familiar with a term called Script Kitty."
  },
  { startTime: 5105.87, person: 'Chris', text: ' Script Kitty, yeah.' },
  { startTime: 5107.27, person: 'Karol', text: " Yeah, that's a very old school term." },
  { startTime: 5110.49, person: 'Karol', text: " I don't know if it comes from..." },
  {
    startTime: 5113.79,
    person: 'Karol',
    text: ' I do have this very old school dictionary by Eric S.'
  },
  { startTime: 5121.13, person: 'Karol', text: ' Raymond.' },
  { startTime: 5121.63, person: 'Karol', text: " I think that's a dictionary..." },
  { startTime: 5123.51, person: 'Karol', text: ' Let me just quickly check the date on this.' },
  { startTime: 5127.79, person: 'Karol', text: " 1993, that's a very old school one." },
  {
    startTime: 5131.21,
    person: 'Karol',
    text: " I'm not sure if the term Script Kitty is defined in this dictionary, but a Script Kitty..."
  },
  { startTime: 5140.87, person: 'Karol', text: " No, it's not, unfortunately." },
  {
    startTime: 5145.25,
    person: 'Karol',
    text: ' Eric Raymond has defined the word hacker, cracker, and Script Kitty back in the day in his hackers manifestos, et cetera, right?'
  },
  {
    startTime: 5158.05,
    person: 'Karol',
    text: ' So I never considered myself neither a hacker or a cracker.'
  },
  {
    startTime: 5162.95,
    person: 'Karol',
    text: ' I was always a Script Kitty, so I basically took a bunch of code and repurposed it for whatever I used without proper understanding of the code.'
  },
  {
    startTime: 5170.13,
    person: 'Karol',
    text: ' Now, vibe coding is basically Script Kitties doing stuff, right?'
  },
  { startTime: 5177.57, person: 'Chris', text: ' But what I find...' },
  {
    startTime: 5178.25,
    person: 'Chris',
    text: ' They do what they found without understanding how it works, yeah.'
  },
  {
    startTime: 5180.87,
    person: 'Karol',
    text: ' But what I found from this experience back in the day when I was a teenager and I was that Script Kitty doing this kind of stuff, that actually through doing that and trying to make it run in my code base, I started learning what it actually does.'
  },
  {
    startTime: 5196.19,
    person: 'Karol',
    text: " So looking into the small chunks of context and the small chunks of language that I'm using when I'm coding something, and I'm not coding that much as an architect nowadays, but I do still try to code every now and then just not to be too rusty."
  },
  {
    startTime: 5211.97,
    person: 'Karol',
    text: " So I'm basically coding Google Script most of the time because I'm working on certain automations for myself."
  },
  { startTime: 5218.45, person: 'Karol', text: ' Okay.' },
  {
    startTime: 5219.03,
    person: 'Karol',
    text: " I don't have the time in the day to read the whole goddamn documentation of Google Scripts and all the available libraries."
  },
  {
    startTime: 5226.35,
    person: 'Karol',
    text: " So I'm just going to ask Gemini because it has a direct tie into all that documentation."
  },
  { startTime: 5231.01, person: 'Karol', text: ' Perfect.' },
  {
    startTime: 5232.79,
    person: 'Karol',
    text: " If I ask Gemini in a plain language to create me a specific functionality in, let's say, Google Sheets, whatever, it will start just sifting loads of code, which is completely not what I wanted in terms of functional requirements."
  },
  {
    startTime: 5250.85,
    person: 'Karol',
    text: ' So what I ended up doing, instead of just copy pasting that big chunk of code into my IDE and running it in Google Scripts, I ended up just not asking for the functional aspect, but start coding myself and then asking for specific solutions over specific technical problems.'
  },
  { startTime: 5271.23, person: 'Karol', text: " So I'm in the control of the language." },
  {
    startTime: 5273.89,
    person: 'Karol',
    text: " I'm in the control of the functional requirements."
  },
  {
    startTime: 5277.33,
    person: 'Karol',
    text: ' And the only thing that the LLM is doing for me is supporting me technically and giving me options how to resolve my technical issues and help me understand the errors way faster.'
  },
  {
    startTime: 5289.29,
    person: 'Karol',
    text: ' That means that I can actually code those automations a lot quicker.'
  },
  {
    startTime: 5294.45,
    person: 'Karol',
    text: " And the only thing I'm left with is actually pondering on the problem domain, as in what problem I'm solving and how do I want it solved so that it facilitates what I need to do."
  },
  {
    startTime: 5305.75,
    person: 'Karol',
    text: ' So for example, automate the creation of this live stream.'
  },
  {
    startTime: 5308.83,
    person: 'Karol',
    text: " That's one of the things that I automated to about 90%."
  },
  {
    startTime: 5313.39,
    person: 'Karol',
    text: ' So graphics, materials, descriptions, generating JSON files for the web page, et cetera.'
  },
  {
    startTime: 5321.13,
    person: 'Karol',
    text: ' All that is now automated and I had to write it myself.'
  },
  {
    startTime: 5325.71,
    person: 'Karol',
    text: " But to write it, I didn't have time to figure it out myself."
  },
  { startTime: 5329.01, person: 'Karol', text: " So I just LLM'd it." },
  {
    startTime: 5331.49,
    person: 'Karol',
    text: ' And it works, but I was in the control of the language all the time.'
  },
  { startTime: 5336.45, person: 'Chris', text: ' And it was quite overloading.' },
  {
    startTime: 5338.41,
    person: 'Chris',
    text: ' One thing, you know, sometimes people have a very positive result from even your first attempt, you know, like just you give it a vague description and you get like a massive thing.'
  },
  {
    startTime: 5347.51,
    person: 'Chris',
    text: " I think that what we're seeing is that the cases where that's most useful is where what you're asking for is something that's well represented in the training data."
  },
  {
    startTime: 5356.85,
    person: 'Chris',
    text: " So it's like a common problem or common solutions."
  },
  {
    startTime: 5360.71,
    person: 'Chris',
    text: " And the more you vary from that, the more you get down to like what's unique in your context, the more likely you're going to have to provide that kind of more tight oversight or as Lucien calls it, like spectrum approach to LLM development."
  },
  {
    startTime: 5373.05,
    person: 'Chris',
    text: " I don't want to get too bogged down in that sort of thing."
  },
  {
    startTime: 5376.09,
    person: 'Chris',
    text: ' You probably have other people that are more expert in it than I am to talk about it.'
  },
  {
    startTime: 5379.23,
    person: 'Chris',
    text: " But I think there's an interesting need for this language because it is all..."
  },
  {
    startTime: 5383.45,
    person: 'Karol',
    text: " Actually, for all of you interested in spec driven development and LLMs, we're actually talking about that next week."
  },
  { startTime: 5392.73, person: 'Karol', text: ' Exactly the topic next week.' },
  { startTime: 5394.51, person: 'Karol', text: ' The topic is, can we get rid of developers?' },
  { startTime: 5398.63, person: 'Karol', text: ' I know, cringy, hooky, clickbaity title.' },
  { startTime: 5403.91, person: 'Karol', text: ' Sorry.' },
  {
    startTime: 5406.13,
    person: 'Karol',
    text: " But it's actually exactly the topic of next week's stream where we're going to be talking about the impact of generative AI LLMs on development."
  },
  { startTime: 5415.43, person: 'Karol', text: ' And can we finally get rid of those developers?' },
  { startTime: 5419.15, person: 'Karol', text: ' Probably not.' },
  { startTime: 5420.17, person: 'Chris', text: ' Expensive developers.' },
  { startTime: 5421.75, person: 'Chris', text: ' Interesting.' },
  {
    startTime: 5423.19,
    person: 'Karol',
    text: " That's been iterated over the years, like introduction of object orientated programming."
  },
  {
    startTime: 5428.25,
    person: 'Karol',
    text: ' Yes, finally we can get rid of those pesky developers.'
  },
  { startTime: 5431.93, person: 'Chris', text: ' My code platforms.' },
  { startTime: 5433.55, person: 'Chris', text: ' Yes, absolutely.' },
  {
    startTime: 5435.21,
    person: 'Chris',
    text: " It reveals a real misunderstanding for me, not to jump ahead what you're going to talk about next week, but thinking that you can get rid of developers, again, to everything we've been talking about, it suggests a vast misunderstanding of what is the role of a LLM."
  },
  {
    startTime: 5451.51,
    person: 'Chris',
    text: ' My belief is, as you put it earlier, to solve problems, to solve problems with the business, with technology.'
  },
  {
    startTime: 5458.41,
    person: 'Chris',
    text: " And as we've seen, LLMs can't do that on their own without guidance."
  },
  {
    startTime: 5462.23,
    person: 'Chris',
    text: " And so that is, it's just, we're sort of changing the nature of the role, but it's still a role to craft solutions, to understand problems and to help build technology, implement those solutions."
  },
  {
    startTime: 5475.31,
    person: 'Karol',
    text: " Cannot solve those problems because they're incapable of learning our jargon and context, because they have their own stemming from the training data that they received, right?"
  },
  {
    startTime: 5488.13,
    person: 'Karol',
    text: ' So they have an approximation of certain jargons and certain languages, but that is limited only to their training data.'
  },
  {
    startTime: 5496.43,
    person: 'Karol',
    text: ' And if we have different semantic understanding of words, which stems from exactly that ubiquitous language, or company jargon, or the living language, if we have that one built, then obviously they will have problems understanding it unless somebody is actually very vocal about that on the web and produces materials that are available to those LLMs to crawl through.'
  },
  {
    startTime: 5520.85,
    person: 'Karol',
    text: " And if they catch, oh, this is this context, oh, now we're going to switch to that particular language and statistically makes it more feasible than that, it will be better, right?"
  },
  {
    startTime: 5529.06,
    person: 'Chris',
    text: " I think it's a really interesting framework that can help make sense of that to an extent, which is a thing called Wardley mapping."
  },
  {
    startTime: 5535.73,
    person: 'Chris',
    text: " I don't know if you've come across this, but like..."
  },
  {
    startTime: 5538.61,
    person: 'Karol',
    text: " Heard too many times, still don't know what that is."
  },
  {
    startTime: 5541.77,
    person: 'Chris',
    text: " Okay, well, I'm not going to talk about the whole thing, but one key idea in it is that elements of your system or elements of your business can be mapped onto a stage of evolution."
  },
  {
    startTime: 5553.43,
    person: 'Chris',
    text: " And the stage of evolution, it starts from like what they call Genesis, which is like, it's novel, it's brand new, it's sort of innovative, it's unknown, a lot of risk attached to it."
  },
  {
    startTime: 5563.09,
    person: 'Chris',
    text: " Then it progresses into like a custom stage, which is where it's more well known, but it still requires custom work to make it happen."
  },
  {
    startTime: 5570.05,
    person: 'Chris',
    text: " Then it evolves into a product stage where there's like standard products that you can buy off the shelf."
  },
  {
    startTime: 5574.69,
    person: 'Chris',
    text: " And then it evolves into a commodity stage where you'd like rent it for cents on the dollar."
  },
  { startTime: 5580.17, person: 'Chris', text: " You don't buy it anymore, you rent it." },
  {
    startTime: 5582.33,
    person: 'Chris',
    text: ' And when you look at almost any sort of technical development, it sort of progressed in different speeds through these stages.'
  },
  { startTime: 5588.39, person: 'Chris', text: " It's a model, it's a way of understanding." },
  {
    startTime: 5589.85,
    person: 'Chris',
    text: " There's nothing strictly, there's not strict boundaries, but it's kind of, I find it quite intuitive, and it makes a lot of sense to me."
  },
  { startTime: 5596.47, person: 'Chris', text: ' I mean, you can look at electricity.' },
  {
    startTime: 5598.61,
    person: 'Chris',
    text: ' In the very early days, it was Genesis, you needed to build your own generator.'
  },
  {
    startTime: 5602.29,
    person: 'Chris',
    text: ' Then you could order a custom generator from a supplier, then you could buy a generator off the shelf, and then you could get electricity out of the wall and pay cents on the kilowatts, right?'
  },
  {
    startTime: 5612.57,
    person: 'Chris',
    text: ' And with compute, you had the same thing, you had to build your own computer, then you could buy a custom computer from IBM, then you could buy computers off the shelf, and now we rent them when it compute capacity for cents from Amazon and Azure.'
  },
  {
    startTime: 5623.95,
    person: 'Chris',
    text: " So this structure, years might be decades, it's very similar."
  },
  { startTime: 5629.67, person: 'Chris', text: " But it's not just for products." },
  {
    startTime: 5631.81,
    person: 'Chris',
    text: ' You can apply this four phases to practises, to data, to knowledge.'
  },
  {
    startTime: 5636.83,
    person: 'Chris',
    text: ' And when you do apply it to the concept of domains, you see that there are domains that in that four stages, commodity domains.'
  },
  { startTime: 5644.57, person: 'Chris', text: ' What do I mean by that?' },
  { startTime: 5646.39, person: 'Chris', text: ' Accounting is a commodity domain.' },
  {
    startTime: 5648.43,
    person: 'Chris',
    text: " You've got accounts, you've got journals, journal entries, debit, credit, assets, liabilities."
  },
  {
    startTime: 5657.83,
    person: 'Chris',
    text: ' That domain has been modelled to death for like decades, for centuries.'
  },
  {
    startTime: 5662.55,
    person: 'Chris',
    text: " It's very well defined, it's very clearly understood, people are trained in it, there's a lot of documentation on it."
  },
  { startTime: 5668.75, person: 'Chris', text: " It's a ubiquitous, it's a commodity domain." },
  {
    startTime: 5673.13,
    person: 'Chris',
    text: " CRMs have been progressing down this path to the point where we now, I think, maybe 20 years ago, every CRM had a different terminology, but now it's kind of industry standard around things like leads and opportunities and contacts and things."
  },
  {
    startTime: 5690.89,
    person: 'Chris',
    text: " Most people that are in businesses building new and innovative products, they need to be operating in the sort of Genesis custom phase, because otherwise you're just doing the same thing everyone else is doing."
  },
  {
    startTime: 5701.53,
    person: 'Chris',
    text: " You might have as a core or some key part of it, something that's a utility that other people are doing, but you need to be doing something new and innovative that's value-added."
  },
  {
    startTime: 5709.93,
    person: 'Chris',
    text: ' So one of the nice things about world mapping is it helps you map out your landscape.'
  },
  {
    startTime: 5713.59,
    person: 'Chris',
    text: " What are we doing that's the same as everyone else or that other people are selling or renting out as a utility?"
  },
  {
    startTime: 5719.01,
    person: 'Chris',
    text: " What are we doing that's genuinely unique and novel and is in this Genesis phase?"
  },
  {
    startTime: 5723.29,
    person: 'Chris',
    text: ' And what are we going to do when the industry evolves?'
  },
  {
    startTime: 5725.61,
    person: 'Chris',
    text: " We're going to be left behind treating it like it's Genesis when everyone else is treating it like a product or a utility."
  },
  {
    startTime: 5731.87,
    person: 'Chris',
    text: " Where I'm going to is with domains and with language in particular, is that you can see this thing happening."
  },
  {
    startTime: 5736.87,
    person: 'Chris',
    text: ' So even just last week, Google released a commerce protocol, which has been designed for agentic e-commerce.'
  },
  {
    startTime: 5745.87,
    person: 'Chris',
    text: " That's been the trigger for it is so that you can buy stuff through your agent, your LLM."
  },
  {
    startTime: 5753.81,
    person: 'Chris',
    text: " But the truth is when you look at it, it's just a standard protocol."
  },
  {
    startTime: 5756.87,
    person: 'Chris',
    text: " But what I think about it in terms of looking at it through this lens is that they've pushed e-commerce from a product into a commodity."
  },
  {
    startTime: 5763.89,
    person: 'Chris',
    text: ' The modelling now and the language is going to become a utility standard in the e-commerce domain.'
  },
  {
    startTime: 5771.59,
    person: 'Chris',
    text: ' So if you are writing code that is dealing with a domain that is a commodity, you can find a lot of information in the public data set that these models were trained on.'
  },
  {
    startTime: 5783.79,
    person: 'Chris',
    text: ' It will probably be more effective because that is well defined.'
  },
  { startTime: 5787.67, person: 'Chris', text: " It's standard." },
  { startTime: 5788.29, person: 'Chris', text: " It's in the public data set." },
  {
    startTime: 5789.57,
    person: 'Chris',
    text: " If you're writing code that's dealing with something novel and innovative that's in the Genesis or custom phases of the worldly cycle, you're going to need to provide more of your own context as you put it."
  },
  {
    startTime: 5799.49,
    person: 'Chris',
    text: " So I don't want to say like you have to always provide context because you might be working in a domain that's actually a ubiquitous commodity accepted utility domain."
  },
  {
    startTime: 5809.73,
    person: 'Chris',
    text: ' But this is what I like about worldly mapping is it helps you make a bit more sense like where actually are we in this?'
  },
  {
    startTime: 5814.81,
    person: 'Chris',
    text: " How much should we be thinking about this as like something that's completely new?"
  },
  {
    startTime: 5818.65,
    person: 'Chris',
    text: ' How much should we be drawing on standards and standard practises?'
  },
  {
    startTime: 5822.11,
    person: 'Chris',
    text: " And I think it's really interesting when you see things fail, it's often because people are either trying to do something as it is actually a utility or they're trying to treat it as a utility when it's actually Genesis."
  },
  {
    startTime: 5832.85,
    person: 'Chris',
    text: ' So premature standardisation suffers from this because you see people push out a public standard'
  },
  {
    startTime: 5838.37,
    person: 'Chris',
    text: " trying to treat it like a utility when actually the industry as a whole hasn't modelled that domain"
  },
  {
    startTime: 5843.85,
    person: 'Chris',
    text: ' well enough yet and it ends up being unsatisfactory and needs to iterate more rapidly and get people'
  },
  {
    startTime: 5849.61,
    person: 'Chris',
    text: " like suffering because they've tied themselves tightly to something that actually was presented"
  },
  {
    startTime: 5854.69,
    person: 'Chris',
    text: " as a utility when it wasn't mature enough yet to be a utility and you talked about like SAP's"
  },
  {
    startTime: 5860.49,
    person: 'Chris',
    text: " German acronyms providing that's an example of that SAP tried to say oh this is the utility"
  },
  {
    startTime: 5866.05,
    person: 'Chris',
    text: ' standard before the domain had actually been modelled well enough by the industry to arrive'
  },
  {
    startTime: 5871.49,
    person: 'Chris',
    text: ' at a broad consensus about what it actually should be.'
  },
  {
    startTime: 5874.87,
    person: 'Chris',
    text: ' So if you can do the analysis and come up with your own judgement about where these things live on the landscape you can probably apply a little bit more judgement around like how to actually you know how to focus your efforts on you know can you trust what the other ones are putting out do you need to put more of your own context and thinking into it where are you in the cycle.'
  },
  { startTime: 5895.95, person: 'Karol', text: " And if I'm like thinking about" },
  {
    startTime: 5897.91,
    person: 'Karol',
    text: " examples and I tried some time ago and I'm never going back to that for the LLM to"
  },
  {
    startTime: 5903.69,
    person: 'Karol',
    text: ' prompt about integration architecture and LLMs know nothing about integration architecture'
  },
  {
    startTime: 5910.33,
    person: 'Karol',
    text: ' what they know about is APIs they know how to compose a REST service a SOAP service'
  },
  {
    startTime: 5916.69,
    person: 'Karol',
    text: " etc but that's like the bare minimum that's the peak of the iceberg of integration architecture"
  },
  {
    startTime: 5923.59,
    person: 'Karol',
    text: ' is exactly that part and if I try to talk about integration platforms they have no idea what that'
  },
  {
    startTime: 5928.95,
    person: 'Karol',
    text: ' is and what is the architecture related to that in terms of these kind of things.'
  },
  {
    startTime: 5933.25,
    person: 'Karol',
    text: ' So basically the knowledge I have in my head and that I describe also what bridging the gap is somewhere around that custom area of the worldly maps.'
  },
  {
    startTime: 5945.35,
    person: 'Karol',
    text: ' But in my head also popped up and I thought how do worldly maps translate to different types of domains in DDD because in DDD we have core domain, supporting domain and a generic domain.'
  },
  {
    startTime: 5961.87,
    person: 'Karol',
    text: " So I'm guessing that the utility the last stage would be the generic right and then the genesis custom probably would be the core domain and the the third one is the and the supporting domain something like that probably a little bit more fluid than that but that's that would be the rough alignment."
  },
  { startTime: 5986.17, person: 'Chris', text: ' Yeah so Susan Kaiser has just' },
  {
    startTime: 5988.33,
    person: 'Chris',
    text: ' recently published a book which is all about DDD team topologies and worldly mapping and it speaks'
  },
  {
    startTime: 5994.43,
    person: 'Chris',
    text: " specifically to that alignment and it definitely I think draws attention to the it's a loose"
  },
  {
    startTime: 6000.91,
    person: 'Chris',
    text: " relationship like they weren't it's more of a convergent evolution I'd say rather than something"
  },
  {
    startTime: 6004.67,
    person: 'Chris',
    text: " that was set out to be explicitly aligned but there's definitely like similarities in the way"
  },
  {
    startTime: 6011.13,
    person: 'Chris',
    text: ' that people think about commodity worldly mapping components and supporting sort of generic sub'
  },
  {
    startTime: 6017.15,
    person: 'Chris',
    text: ' domains absolutely and similarly with core domains so yeah you might be interested in that book.'
  },
  {
    startTime: 6022.37,
    person: 'Karol',
    text: ' Is that by chance the book called Architecture for Flow?'
  },
  { startTime: 6027.65, person: 'Chris', text: ' Yes the one yep.' },
  {
    startTime: 6030.57,
    person: 'Karol',
    text: " All right I actually have it on my list and I have a digital copy of it I just need to read it it's still still pending but yes yes it's it's it's there already on the list waiting for a good read but reading takes a lot of time that I don't really have unfortunately but all right for those interested I'll pop a link in the in the QR in a moment."
  },
  { startTime: 6055.83, person: 'Karol', text: ' Yeah so' },
  {
    startTime: 6057.35,
    person: 'Karol',
    text: " yeah that's that's oh we drifted quite a far from just ubiquitous language went into the ubiquitous"
  },
  {
    startTime: 6064.95,
    person: 'Karol',
    text: " language in LLMs but then it's all related it's all related yes but going back to to more"
  },
  {
    startTime: 6078.5,
    person: 'Karol',
    text: ' less gen-ai related topics we already touched upon a little bit how language evolves'
  },
  {
    startTime: 6087.06,
    person: 'Karol',
    text: ' but in that evolution perhaps we should go into more of examples of what do teams struggle with'
  },
  {
    startTime: 6096.92,
    person: 'Karol',
    text: ' and what are the common problems with with evolving with the evolving language and'
  },
  {
    startTime: 6102.68,
    person: 'Karol',
    text: ' what companies struggle with because you as a coach you do help teams and CTOs etc'
  },
  {
    startTime: 6110.6,
    person: 'Karol',
    text: ' with that as well I assume right so you probably have a broad plethora of examples of what went'
  },
  { startTime: 6117.32, person: 'Karol', text: ' wrong.' },
  {
    startTime: 6118.68,
    person: 'Chris',
    text: " Yeah so it's interesting so Lucian's question from before about reconciling the"
  },
  {
    startTime: 6122.32,
    person: 'Chris',
    text: ' ubiquitous language with technical strength constraints and legacy systems definitely'
  },
  {
    startTime: 6125.24,
    person: 'Chris',
    text: " a common challenge people have it's because they haven't been treating it as a living language"
  },
  {
    startTime: 6128.92,
    person: 'Chris',
    text: " they haven't been embodying those changes into the code base so I think that like you know a big"
  },
  {
    startTime: 6134.36,
    person: 'Chris',
    text: " challenge that people that teams have is that they've let the like the language has evolved but"
  },
  {
    startTime: 6138.82,
    person: 'Chris',
    text: " the code hasn't followed so I'm a big believer in trying to evolve the code as soon as you hear that"
  },
  {
    startTime: 6145.58,
    person: 'Chris',
    text: ' change in language evolve the code as quickly as you can and that gets back to the comments I made'
  },
  {
    startTime: 6149.34,
    person: 'Chris',
    text: ' earlier about what supports you in doing that having a great test harness around your system'
  },
  {
    startTime: 6154.6,
    person: 'Chris',
    text: ' so you can make those changes quickly and sort of get on with it but to make that happen'
  },
  {
    startTime: 6161.82,
    person: 'Chris',
    text: ' another challenge people have is that is actually even detecting that the language has changed'
  },
  {
    startTime: 6166.88,
    person: 'Chris',
    text: " and then another challenge related to that is like I say you've detected that the language"
  },
  {
    startTime: 6172.16,
    person: 'Chris',
    text: " has changed and you've absorbed it into your code or into your glossaries or documentation"
  },
  {
    startTime: 6176.36,
    person: 'Chris',
    text: ' how do you communicate that change out to like all the people that need to know about it so these are'
  },
  {
    startTime: 6181.5,
    person: 'Chris',
    text: " some you know common patterns that I see teams struggling with and it's often why you know that"
  },
  {
    startTime: 6187.82,
    person: 'Chris',
    text: " they end up in these problems because they're struggling with these challenges so you know"
  },
  {
    startTime: 6192.2,
    person: 'Chris',
    text: " some common things that I've seen people try to do to resolve it either like documentation in a wiki"
  },
  {
    startTime: 6198.3,
    person: 'Chris',
    text: " for example which has some benefits but also some drawbacks main drawback being that it's like I"
  },
  {
    startTime: 6205.92,
    person: 'Chris',
    text: " don't want to say it's a long way away from where you're working because ultimately everything's"
  },
  {
    startTime: 6208.98,
    person: 'Chris',
    text: " just a click away but it feels a long way away there's this sort of sense of distance between"
  },
  {
    startTime: 6214.12,
    person: 'Chris',
    text: ' your code and your company confluence right so people are not regularly going and searching'
  },
  {
    startTime: 6220.16,
    person: 'Chris',
    text: " in confluence to check if what a word means when they're having a conversation on slack"
  },
  {
    startTime: 6223.84,
    person: 'Chris',
    text: " or in person what they're doing is they're having a conversation they're making an assumption and"
  },
  {
    startTime: 6230.2,
    person: 'Chris',
    text: " then they're moving on with that assumption they're not checking right you know whether"
  },
  {
    startTime: 6233.56,
    person: 'Chris',
    text: ' they understood it correctly I see how the team is trying to put this sort of documentation'
  },
  {
    startTime: 6237.8,
    person: 'Chris',
    text: ' beside the code sort of like a kind of a living documentation in markdown files'
  },
  {
    startTime: 6242.64,
    person: 'Chris',
    text: " and I think that's one that's you know for some of this kind of documentation it's better at least"
  },
  {
    startTime: 6247.02,
    person: 'Chris',
    text: " it's closer to the code you're more likely to find it if you're searching across your repository"
  },
  {
    startTime: 6252.74,
    person: 'Chris',
    text: " if you're making changes to it hopefully people are going to see it in prs and other kind of"
  },
  {
    startTime: 6257.04,
    person: 'Chris',
    text: ' like you know code change things but that has some other challenges which is that it sort of then'
  },
  {
    startTime: 6261.52,
    person: 'Chris',
    text: ' constrains it to just the developers and you know other people outside the dev team and not necessarily'
  },
  {
    startTime: 6266.68,
    person: 'Chris',
    text: " going to see you'll get the benefits of that particularly if it's the kind of documentation"
  },
  {
    startTime: 6270.28,
    person: 'Chris',
    text: ' and knowledge that is not just about how is the thing implemented you know architecture decision'
  },
  {
    startTime: 6274.88,
    person: 'Chris',
    text: " records absolutely keep them in markdown files in your code base because that's next that's where"
  },
  {
    startTime: 6279.9,
    person: 'Chris',
    text: ' people need to be looking at it but things that capture domain knowledge should be more broadly'
  },
  {
    startTime: 6284.98,
    person: 'Chris',
    text: " accessible so that you know people outside the dev team product owners ba's customer service"
  },
  {
    startTime: 6291,
    person: 'Chris',
    text: " people sales people should be able to access that as well so all these problems whether it's like"
  },
  {
    startTime: 6295.48,
    person: 'Chris',
    text: ' detecting that the language has drifted tracking the changes to it communicating to people that the'
  },
  {
    startTime: 6301.42,
    person: 'Chris',
    text: ' change has happened um these are all actually what led me to develop this contextive tool because'
  },
  {
    startTime: 6306.68,
    person: 'Chris',
    text: ' um i was sort of realising that there must be a way to do this more effectively i tried the'
  },
  {
    startTime: 6312,
    person: 'Chris',
    text: ' glossary in a confluence page inevitably 12 months later it was out of date and you know'
  },
  {
    startTime: 6319.68,
    person: 'Chris',
    text: " someone would join the company and say what do these words mean and someone said i'll go check"
  },
  {
    startTime: 6323.06,
    person: 'Chris',
    text: " the glossary they would go look at the glossary and say this doesn't seem right it says here it"
  },
  {
    startTime: 6326.74,
    person: 'Chris',
    text: ' means this but you guys were talking about it this other way the other day oh yeah that changed'
  },
  {
    startTime: 6330.9,
    person: 'Chris',
    text: " six months ago and we never updated it and then it becomes a new starter's job to go and update"
  },
  {
    startTime: 6334.72,
    person: 'Chris',
    text: " the glossary in the wiki and uh you know and the cycle repeats itself um and i've spoken to teams"
  },
  {
    startTime: 6341.2,
    person: 'Chris',
    text: ' that have tried to do it in markdown files and repositories and you know they had some of those'
  },
  {
    startTime: 6345.16,
    person: 'Chris',
    text: " same problems which was that people outside the dev team couldn't see it and um and and uh and"
  },
  {
    startTime: 6351.16,
    person: 'Chris',
    text: " similarly i mean even though it was closer it wasn't right there and a lot of teams or people"
  },
  {
    startTime: 6355.78,
    person: 'Chris',
    text: " in the team didn't know it was there and you know never found that information so what i found"
  },
  {
    startTime: 6360.82,
    person: 'Chris',
    text: ' myself thinking about is like is there a way to embed this information into the places people'
  },
  {
    startTime: 6366.34,
    person: 'Chris',
    text: " are working in a way that is like unobtrusive but helpful and and i realise that we've got like a"
  },
  {
    startTime: 6371.96,
    person: 'Chris',
    text: ' great model for how this could be done with the way that we handle like like inline documentation'
  },
  {
    startTime: 6378.84,
    person: 'Chris',
    text: " in our code xml docs and java docs and so on python pydocs they're embedded in the code in"
  },
  {
    startTime: 6385.14,
    person: 'Chris',
    text: " comments and they are like surfaced while we're working on the code like tooltips and things"
  },
  {
    startTime: 6390.94,
    person: 'Chris',
    text: " so you hover over a language element and it'll tell you some documentation around it we suddenly"
  },
  {
    startTime: 6395.34,
    person: 'Chris',
    text: " kind of used to that but we don't until now we didn't have anything like that for domain"
  },
  {
    startTime: 6399.38,
    person: 'Chris',
    text: ' knowledge we only had it for the technical implementation and this is this is where'
  },
  {
    startTime: 6403.54,
    person: 'Chris',
    text: " contextive came from so actually it feels like it's a good time to maybe do a screen sharing"
  },
  {
    startTime: 6407.7,
    person: 'Chris',
    text: " quick demo like how this thing works so um i'm actually gonna i know i set up a screenshot"
  },
  {
    startTime: 6414.1,
    person: 'Chris',
    text: " before but i'm going to change it if that's all right because yeah go ahead go ahead prep it"
  },
  { startTime: 6419.46, person: 'Chris', text: " so i'm briefly going to look at um" },
  {
    startTime: 6434.5,
    person: 'Chris',
    text: " yeah so say in vs code you're talking to developers right so so the way this tool"
  },
  {
    startTime: 6439.5,
    person: 'Chris',
    text: " works is let's say um i'm going to set up like a loosely coupled glossary"
  },
  {
    startTime: 6447.84,
    person: 'Chris',
    text: " sure um and what we do is we create we're getting a set of contexts"
  },
  {
    startTime: 6454.06,
    person: 'Chris',
    text: " um so let's say the first context i don't know what's the domain you're working in at the moment"
  },
  {
    startTime: 6458.24,
    person: 'Chris',
    text: " let's make this sort of something more realistic sorry once again what's the domain that you're"
  },
  {
    startTime: 6463.4,
    person: 'Karol',
    text: " working in at the moment uh that's a good uh good question how to define that then"
  },
  {
    startTime: 6473.77,
    person: 'Chris',
    text: " or maybe just a domain you're familiar with we can"
  },
  {
    startTime: 6478.63,
    person: 'Karol',
    text: " a domain i'm familiar with is always a integration architecture"
  },
  { startTime: 6488.19, person: 'Karol', text: " less technical but so let's let's uh" },
  {
    startTime: 6491.41,
    person: 'Karol',
    text: " uh in that sense let's dismantle bridging the gap so one of the domains would be loosely coupled"
  },
  {
    startTime: 6499.81,
    person: 'Karol',
    text: " right that's one of the domains uh the other domain is uh oh sorry i don't mean like dns"
  },
  {
    startTime: 6506.89,
    person: 'Karol',
    text: " domains i mean are you not talking about no no no no i'm i'm talking about uh problem domains"
  },
  {
    startTime: 6515.43,
    person: 'Karol',
    text: ' okay okay so the problem if i if i if i if i uh take bridging the gap as a open source uh'
  },
  {
    startTime: 6527.02,
    person: 'Karol',
    text: " oh you wrote coupling if i'm talking about bridging the gap as a as an open source project"
  },
  {
    startTime: 6532.4,
    person: 'Karol',
    text: ' which it is and within that project uh what we do one of the domains is loosely coupled the'
  },
  {
    startTime: 6540.64,
    person: 'Karol',
    text: ' live stream right so this is one of the domains oh okay so live streaming is more'
  },
  {
    startTime: 6547.46,
    person: 'Chris',
    text: " we can we can name it live streaming yes um uh-huh so so what's a um terms"
  },
  { startTime: 6568.26, person: 'Karol', text: ' okay uh one of the terms is a speaker' },
  {
    startTime: 6574.08,
    person: 'Karol',
    text: " uh studio i suppose oh the definition of a speaker that's a uh that's a uh an invited"
  },
  {
    startTime: 6582.04,
    person: 'Karol',
    text: ' guest to the live stream with a specific uh topic to talk about yeah and then studio studio is where'
  },
  {
    startTime: 6595.35,
    person: 'Karol',
    text: " the conversation happens uh which is an isolated environment okay cool there's probably enough for"
  },
  {
    startTime: 6605.72,
    person: 'Chris',
    text: " now so one of the things that's cool now is so now because i've got i've got a couple of"
  },
  {
    startTime: 6610.34,
    person: 'Chris',
    text: " context you've installed um i can get this definition pops up in the tooltip of when i"
  },
  {
    startTime: 6618.46,
    person: 'Chris',
    text: ' hover over the word speaker and and the way that it works is specifically not tied to any'
  },
  {
    startTime: 6624.9,
    person: 'Chris',
    text: " particular language so it works in the yaml it could work in like a md file md file and it's in"
  },
  {
    startTime: 6634.6,
    person: 'Chris',
    text: ' autocomplete as well so oh wow brilliant and then so speaker um and i can get the'
  },
  {
    startTime: 6645.86,
    person: 'Chris',
    text: " hover tooltip there as well but i guess it's been live stream right and that is invited"
  },
  {
    startTime: 6652.46,
    person: 'Karol',
    text: " to the studio and okay i'm gonna throw in the curveball uh another domain uh in loosely coupled"
  },
  {
    startTime: 6664.46,
    person: 'Karol',
    text: ' sorry in bridging the gap would be then um public speaking conferences right yeah and'
  },
  {
    startTime: 6674.22,
    person: 'Karol',
    text: " that's a different different completely different context where the word speaker"
  },
  {
    startTime: 6678.18,
    person: 'Karol',
    text: " does not refer to a guest but refers mostly to me or philip yeah right gotcha so that's a uh"
  },
  {
    startTime: 6686.38,
    person: 'Karol',
    text: " that's then a different domain and but the same term and now how does that work if i define that"
  },
  {
    startTime: 6692.64,
    person: 'Chris',
    text: " in context so you can create multiple glossaries and so if you're putting those glossary files in"
  },
  {
    startTime: 6698.96,
    person: 'Chris',
    text: ' yaml files in your source code which is something that you can do in the open source version so'
  },
  {
    startTime: 6704.64,
    person: 'Chris',
    text: " there's a whole open source tool set that is completely free and you can do um you can get"
  },
  {
    startTime: 6709.86,
    person: 'Chris',
    text: " all of the stuff we're demoing now um with that open source tool um what you do is it's either"
  },
  {
    startTime: 6715.62,
    person: 'Chris',
    text: " separate repositories or separate folders so let's do um these ones uh and i'll do a new file"
  },
  {
    startTime: 6725,
    person: 'Chris',
    text: " you know public speaking oh i've lost the screen share is that mine yeah it just dropped out so"
  },
  {
    startTime: 6733.74,
    person: 'Karol',
    text: ' yeah you disconnected unfortunately sorry about that yeah no worries going back on there we go'
  },
  {
    startTime: 6740.26,
    person: 'Chris',
    text: ' there we go public speaking um to manage um or you say the speaking'
  },
  {
    startTime: 6755.26,
    person: 'Chris',
    text: ' engagements for the uh loosely coupled live stream posts something like that or the bridge'
  },
  {
    startTime: 6762.06,
    person: 'Chris',
    text: ' bridging the gap uh members yeah and then the speaker is uh one of the bridging the gap'
  },
  {
    startTime: 6774.89,
    person: 'Chris',
    text: " members yes yeah so this is a great example so you've got the word definite speaker could"
  },
  {
    startTime: 6779.75,
    person: 'Chris',
    text: ' have multiple uh definitions so you got public speaking context'
  },
  {
    startTime: 6785.35,
    person: 'Chris',
    text: " live streaming context and actually i'm just gonna usually you know it's been moving things"
  },
  {
    startTime: 6790.87,
    person: 'Chris',
    text: " around it should only show you one of those uh definitions yeah because we're in the public"
  },
  {
    startTime: 6794.77,
    person: 'Chris',
    text: " speaking folder you're in the live stream folder we just get the live streaming context so if we've"
  },
  {
    startTime: 6799.75,
    person: 'Chris',
    text: " got some code in the live stream domain um we'll see the live streaming context right and if you're"
  },
  {
    startTime: 6811.74,
    person: 'Chris',
    text: " in the public speaking domain so this could be uh you know react um then you'll get the"
  },
  {
    startTime: 6822.78,
    person: 'Karol',
    text: ' public speaking content right and then what happens if i if i go outside of these folders'
  },
  {
    startTime: 6828.28,
    person: 'Karol',
    text: ' and create a new completely new file somewhere and start you get nothing'
  },
  {
    startTime: 6834.92,
    person: 'Chris',
    text: " because you're not in in those domains so there's multiple ways that you can handle it um if you if"
  },
  {
    startTime: 6840.68,
    person: 'Chris',
    text: ' you do want to see all of the definitions you can put those grocery files in the root basically the'
  },
  {
    startTime: 6846.12,
    person: 'Chris',
    text: ' definitions apply to the current folder and any subfolder so if you want to put them in the root'
  },
  {
    startTime: 6850.9,
    person: 'Chris',
    text: " you can get those definitions in every file but usually it's it's more useful to like have them"
  },
  {
    startTime: 6856.12,
    person: 'Chris',
    text: ' closer to the code that is relevant to that definition true so the definition is useful in'
  },
  {
    startTime: 6861.4,
    person: 'Chris',
    text: " that in that location um so this is really good and and we've got a lot of things we can do this"
  },
  {
    startTime: 6866.26,
    person: 'Chris',
    text: ' we can have definitions we can have um example sentences so we could say uh you know has the'
  },
  {
    startTime: 6873.98,
    person: 'Chris',
    text: ' speaker accepted the invite so we get like an example of how that uh phrase would actually be'
  },
  {
    startTime: 6881.42,
    person: 'Chris',
    text: ' used in a sentence um and you can do aliases um so the speaker might be the guest yes yeah now'
  },
  {
    startTime: 6892.3,
    person: 'Chris',
    text: " when you hover over guests you get the definition for speaker and it notes that it's an alias"
  },
  {
    startTime: 6896.26,
    person: 'Chris',
    text: " of the word guest so you can this is a great way to do acronyms as well so i saw there's a comment"
  },
  {
    startTime: 6901.38,
    person: 'Chris',
    text: ' from lucy and my frustration with um abbreviations and acronyms you can set up a definition but then'
  },
  {
    startTime: 6906.86,
    person: 'Chris',
    text: ' you can put all of the acronyms some if they have the same meaning in the aliases list and then you'
  },
  {
    startTime: 6911.68,
    person: 'Chris',
    text: " get the same sort of support with with seeing that definition wherever they're used as well"
  },
  {
    startTime: 6917.52,
    person: 'Karol',
    text: " it's pretty cool yeah that's good because then you might actually manage the acronym so if you"
  },
  {
    startTime: 6922.42,
    person: 'Karol',
    text: " have like let's say domain driven design that results to ddd well not a lot of acronyms that"
  },
  {
    startTime: 6930.06,
    person: 'Karol',
    text: ' but then uh ai already a few right or some other some other uh terms that have multiple different'
  },
  {
    startTime: 6941.66,
    person: 'Karol',
    text: ' resolutions of an abbreviation and then uh this actually keeps uh the sanity because it can tie'
  },
  {
    startTime: 6948.08,
    person: 'Karol',
    text: " it down to a specific uh phrase or word and then have those as aliases that's actually brilliant"
  },
  {
    startTime: 6956.32,
    person: 'Chris',
    text: " yeah it works quite well so this is this is all um publicly available um it's open source you can"
  },
  {
    startTime: 6963.5,
    person: 'Chris',
    text: ' instal it in your id extension and start adding these yaml files to your repositories and off you'
  },
  {
    startTime: 6967.5,
    person: 'Chris',
    text: " go but as i mentioned before uh one of the challenges with this is that it's kind of too"
  },
  {
    startTime: 6972.54,
    person: 'Chris',
    text: " tightly scoped to the the dev team you yeah people outside the dev team don't necessarily get the"
  },
  {
    startTime: 6977.98,
    person: 'Chris',
    text: " benefit of this so this is something we've been working on for a little while which is to actually"
  },
  {
    startTime: 6982,
    person: 'Chris',
    text: ' allow people to manage and move this over here hopefully you can see it um their uh glossaries'
  },
  {
    startTime: 6989.4,
    person: 'Chris',
    text: ' in a place that everyone in the in the business has access to um for example notion so if you'
  },
  {
    startTime: 6997.7,
    person: 'Chris',
    text: " sign up for a contextive um cloud account which is in private beta at the moment so that's what"
  },
  {
    startTime: 7003.92,
    person: 'Chris',
    text: " when if people did that qi code that you put up at the start they'll go on a wait list and"
  },
  {
    startTime: 7008.38,
    person: 'Chris',
    text: " gradually get access to this it's it's going live gradually this year um you can link to your"
  },
  {
    startTime: 7014.36,
    person: 'Chris',
    text: " notion account it'll set up this database structure in notion and you can define your terms so"
  },
  {
    startTime: 7019.56,
    person: 'Chris',
    text: " you know we can put another um term you know in here we we've currently got this context"
  },
  {
    startTime: 7025.96,
    person: 'Chris',
    text: " this is a set of terms related to the context of glossaries themselves um so actually i haven't"
  },
  {
    startTime: 7031.56,
    person: 'Chris',
    text: " defined the word alias here let's just define that so like an alias is like an alternative"
  },
  {
    startTime: 7037.75,
    person: 'Chris',
    text: " um term that uh that has the same meaning as a primary term and it's in the context of managing"
  },
  {
    startTime: 7049.32,
    person: 'Chris',
    text: ' glossaries but you can set up multiple contexts as well uh you can also set up like metadata by'
  },
  {
    startTime: 7055.4,
    person: 'Chris',
    text: " adding custom fields and make it attached to that terminology oh i've lost the screen share again"
  },
  {
    startTime: 7061.68,
    person: 'Chris',
    text: " all right um probably something to do with my mac um and then what's happening in the background"
  },
  {
    startTime: 7071.86,
    person: 'Chris',
    text: " here is that notion does uh like a web hook once a minute with any changes and so we're gonna see"
  },
  {
    startTime: 7079.86,
    person: 'Chris',
    text: " uh i'll move this over here it's not there yet um but hopefully"
  },
  {
    startTime: 7088.98,
    person: 'Chris',
    text: ' in a second that new term that is in the glossaries the alias term will appear'
  },
  {
    startTime: 7097.6,
    person: 'Chris',
    text: " yeah there it is so that's across to the contextive app and you can see some of these"
  },
  {
    startTime: 7102.68,
    person: 'Chris',
    text: " words are highlighted so there's a contextive browser plugin and if i refresh the glossary"
  },
  {
    startTime: 7108.46,
    person: 'Chris',
    text: " now so it picks up that new one all these terms i've got this little underlying which says that"
  },
  {
    startTime: 7114.18,
    person: 'Chris',
    text: ' known terminology in the glossary and so if we hover it we get that new definition an alternative'
  },
  {
    startTime: 7119.74,
    person: 'Chris',
    text: " term that's the same meaning as a primary term we can view it in the glossary which opens up over"
  },
  {
    startTime: 7124.4,
    person: 'Chris',
    text: ' here so you can see all of these things over here and so you know the word context might have an'
  },
  {
    startTime: 7129.64,
    person: 'Chris',
    text: " alias of the domain or about the context which is not strictly true in the ddd sense but it's"
  },
  {
    startTime: 7134.58,
    person: 'Chris',
    text: ' frequently true in businesses that i engage with um so this is the point of trying to say hey'
  },
  {
    startTime: 7140.54,
    person: 'Chris',
    text: " we don't want this terminology just to be available to the dev team we want it to be"
  },
  {
    startTime: 7144.64,
    person: 'Chris',
    text: " something that the broader business can engage with we want it in the wiki because that's an"
  },
  {
    startTime: 7148.82,
    person: 'Chris',
    text: " easy place for maintaining it but it can't just live there because nobody is ever going to see it"
  },
  {
    startTime: 7153.18,
    person: 'Chris',
    text: ' so by putting it in the browser extension we can actually see this popping up uh you know on any'
  },
  {
    startTime: 7159.9,
    person: 'Chris',
    text: ' web page any page that you add so if we say what pages do we want this to be in we can like add'
  },
  {
    startTime: 7166.5,
    person: 'Chris',
    text: " site so i could add it that's already on the contextive site we could add github here for"
  },
  {
    startTime: 7170.24,
    person: 'Chris',
    text: " example and you could get these things highlighted even when you're browsing the source code on"
  },
  {
    startTime: 7175,
    person: 'Chris',
    text: ' github but the other thing that is is kind of cool here is all of this terminology is also exposed'
  },
  {
    startTime: 7180.88,
    person: 'Chris',
    text: " by api to the um the browser sorry to the source code uh as well so i've got like a if you set up"
  },
  {
    startTime: 7189.96,
    person: 'Chris',
    text: ' glossary file like this that imports from the url of that um extension we can actually see'
  },
  {
    startTime: 7198.68,
    person: 'Chris',
    text: ' um like alias an alternative term that has the same meaning as the primary term'
  },
  {
    startTime: 7203.94,
    person: 'Chris',
    text: " is now available in the source code too and that's exactly the definition that was entered"
  },
  {
    startTime: 7208.38,
    person: 'Chris',
    text: " into notion so it's all integrated in the sense that you manage the glossary in uh in a public"
  },
  {
    startTime: 7216.76,
    person: 'Chris',
    text: ' space that people can review and you can add comments and discussion around it but it gets'
  },
  {
    startTime: 7221.38,
    person: 'Chris',
    text: ' broadcast well it synchronises over into the context of service and then that publishes it'
  },
  {
    startTime: 7226.24,
    person: 'Chris',
    text: " out to all the places where people are working so you've got id extensions to pull it into the"
  },
  {
    startTime: 7230.66,
    person: 'Chris',
    text: " source code you've got browser extensions to make it available on like arbitrary web pages and"
  },
  {
    startTime: 7236.28,
    person: 'Chris',
    text: " coming soon there's going to be a slack bot integration so you can access it in your slack"
  },
  {
    startTime: 7240.2,
    person: 'Chris',
    text: ' conversations and also some dedicated um integrations for things like figma and miro and'
  },
  {
    startTime: 7246.72,
    person: 'Chris',
    text: " google docs and stuff like that so it's really kind of the vision here is to make this concept"
  },
  {
    startTime: 7252,
    person: 'Chris',
    text: ' of the ubiquitous language actually ubiquitous and um you know make it easier for people to'
  },
  {
    startTime: 7257.68,
    person: 'Chris',
    text: " understand the terminology to use the correct terminology and to detect when it's evolving"
  },
  {
    startTime: 7261.86,
    person: 'Chris',
    text: ' because if you see a conversation in slack and then you see this definition like appear right'
  },
  {
    startTime: 7268.26,
    person: 'Chris',
    text: " next to it you'll be able to more easily tell hang on this definition isn't right but this is"
  },
  {
    startTime: 7271.9,
    person: 'Chris',
    text: " the definition that developers are looking at when they're writing the code there's a problem"
  },
  {
    startTime: 7275.54,
    person: 'Chris',
    text: " here we need to get this sorted out yeah it's kind of a but but then then if you have this defined"
  },
  {
    startTime: 7280.28,
    person: 'Karol',
    text: ' properly from the perspective from the uh bottoms up and uh developers are defining the glossaries'
  },
  {
    startTime: 7286.1,
    person: 'Karol',
    text: ' for themselves and then they through that uh plugin you for example go into jira and have'
  },
  {
    startTime: 7291.34,
    person: 'Karol',
    text: ' this available in jira or confluence then basically you can write all sorts of uh lovely documentation'
  },
  {
    startTime: 7297.9,
    person: 'Karol',
    text: ' without actually creating those glossaries in confluence that you have to go back and forth'
  },
  {
    startTime: 7304.7,
    person: 'Chris',
    text: " back and forth between yeah running what i'm saying happening is that in in businesses like"
  },
  {
    startTime: 7310.88,
    person: 'Chris',
    text: ' a realistic pattern is that some terminology is going to be maintained by the developers in yaml'
  },
  {
    startTime: 7315.7,
    person: 'Chris',
    text: ' files in the repositories and some terminology is going to be maintained by business stakeholders'
  },
  {
    startTime: 7319.96,
    person: 'Chris',
    text: " in notion and and this is actually the purpose of building contextive in this way i've actually got"
  },
  {
    startTime: 7325.58,
    person: 'Chris',
    text: ' a nice um let me see if i can find the diagram oh here it is um bring this over um so the idea'
  },
  {
    startTime: 7339.81,
    person: 'Chris',
    text: " of we've got these terminology sources so whether it's motion or like yaml files are being pushed"
  },
  {
    startTime: 7344.79,
    person: 'Chris',
    text: ' into the api or you can even manage the glossary in context of itself it all gets merged into your'
  },
  {
    startTime: 7350.47,
    person: 'Chris',
    text: ' like organisational white glossary and then published out to the various places where people'
  },
  {
    startTime: 7354.87,
    person: 'Chris',
    text: ' are working so you can have the developers maintain some glossary definitions that are more'
  },
  {
    startTime: 7360.85,
    person: 'Chris',
    text: ' relevant to like the private to the code and you know business stakeholders can maintain some'
  },
  {
    startTime: 7366.55,
    person: 'Chris',
    text: " definitions in notion but all of it's visible to everybody through the various publishing"
  },
  {
    startTime: 7371.25,
    person: 'Chris',
    text: ' mechanisms so trying to make it flexible and fluid um but the key thing is like transparency and'
  },
  {
    startTime: 7378.09,
    person: 'Chris',
    text: ' visibility of what different people are using across different contexts within the business'
  },
  {
    startTime: 7383.21,
    person: 'Karol',
    text: " yeah and then if you if you're in a business that actually has some sort of a managed"
  },
  {
    startTime: 7390.89,
    person: 'Karol',
    text: ' managed hardware like laptops and you enforce a specific browser like google chrome and they have'
  },
  {
    startTime: 7397.59,
    person: 'Karol',
    text: ' a google workspace accounts where you can actually manage the extensions of the google chrome you'
  },
  {
    startTime: 7402.85,
    person: 'Karol',
    text: ' enforce installation of the extension and by that people already have access to that without even'
  },
  {
    startTime: 7408.53,
    person: 'Karol',
    text: " knowing that this extension exists so they don't have to set up anything which makes life a lot"
  },
  {
    startTime: 7412.99,
    person: 'Karol',
    text: " easier for for anybody managing that in that sense yeah so but i mean that's just that's one option"
  },
  {
    startTime: 7420.05,
    person: 'Chris',
    text: " i'm working with a company right now that doesn't have that but they're just getting the team"
  },
  {
    startTime: 7423.63,
    person: 'Chris',
    text: " members to instal the extension and right that works as well of course there's a lot of different"
  },
  {
    startTime: 7428.77,
    person: 'Chris',
    text: ' ways to do it but this is kind of like i guess the culmination of the whole last two hours of'
  },
  {
    startTime: 7432.79,
    person: 'Chris',
    text: ' conversation which is yeah language is important you need to put some effort into thinking about'
  },
  {
    startTime: 7437.49,
    person: 'Chris',
    text: " it um but don't just let it be something that kind of is a one and done when you do your design"
  },
  {
    startTime: 7442.13,
    person: 'Chris',
    text: ' phase make embed it into your working practises make it part of your make it a genuine living'
  },
  {
    startTime: 7446.99,
    person: 'Chris',
    text: ' language by you know capturing it in places that are easy to maintain and surfacing it in the places'
  },
  {
    startTime: 7452.59,
    person: 'Chris',
    text: " people are working so it's easy to find to detect the ambient changes that make it like stale and"
  },
  {
    startTime: 7459.41,
    person: 'Chris',
    text: " then to get it updated so it's just going to be something but it's like a genuinely a living"
  },
  {
    startTime: 7463.19,
    person: 'Karol',
    text: ' ubiquitous language i mean from my perspective as a content creator and uh somebody who writes'
  },
  {
    startTime: 7470.27,
    person: 'Karol',
    text: ' a lot of articles i would just just really use it on on google docs like all the time just to'
  },
  {
    startTime: 7478.64,
    person: 'Karol',
    text: ' just remind myself how i define specific terms am i using still them still correctly in the'
  },
  {
    startTime: 7483.95,
    person: 'Karol',
    text: " context that i'm writing the article in so that i don't go uh crazy with that and then for example"
  },
  {
    startTime: 7491.47,
    person: 'Karol',
    text: ' if i would combine that with tools like obsidian and make a graph dependency map of certain terms'
  },
  {
    startTime: 7498.27,
    person: 'Karol',
    text: ' and topics uh in between that would then uh build even more uh cohesion over the content'
  },
  {
    startTime: 7507.87,
    person: 'Karol',
    text: ' yeah just a just different example of use where that language built is really important and uh'
  },
  {
    startTime: 7515.43,
    person: 'Karol',
    text: ' given that for example bridging the gap and the article writing for bridging the gap spans over'
  },
  {
    startTime: 7519.89,
    person: 'Karol',
    text: ' the last two and a half years with research done in between writing articles so my the main knowledge'
  },
  {
    startTime: 7529.81,
    person: 'Karol',
    text: " actually grew over uh the last two and a half years where it's been uh also changing the language i use"
  },
  {
    startTime: 7539.01,
    person: 'Karol',
    text: " now i'm weaponised with all sorts of different terms and better understanding of uh and a deeper"
  },
  {
    startTime: 7546.19,
    person: 'Karol',
    text: ' understanding of of different aspects of what i do as an architect so that is that my language uh'
  },
  {
    startTime: 7553.87,
    person: 'Karol',
    text: ' two and a half years ago where i started with the first article and my language now is already'
  },
  {
    startTime: 7558.69,
    person: 'Karol',
    text: ' different which means that probably the first two or three articles are completely out of whack in'
  },
  {
    startTime: 7564.63,
    person: 'Karol',
    text: " terms of the meaning of terms that i use there whereas uh the one the terms i'm using right now"
  },
  {
    startTime: 7571.41,
    person: 'Karol',
    text: ' are more precise and more deliberate but still the lack of cohesion and to capture that cohesion'
  },
  {
    startTime: 7580.65,
    person: 'Chris',
    text: " could be quite helpful i mean it's fascinating to hear that story from you because i think that's"
  },
  {
    startTime: 7584.55,
    person: 'Chris',
    text: ' like a microcosm of what every organisation goes through you know like the everything evolves over'
  },
  {
    startTime: 7589.07,
    person: 'Chris',
    text: ' time and things that were created a long time ago feel stale and obsolete and and anything we can do'
  },
  {
    startTime: 7594.55,
    person: 'Chris',
    text: " to help people maintain it and keep it up to date i think is is going to be helpful so what i'm trying"
  },
  {
    startTime: 7599.07,
    person: 'Chris',
    text: " to focus on here is particularly like terminology and glossaries um i'd love to see other people"
  },
  {
    startTime: 7603.83,
    person: 'Chris',
    text: ' sort of working on tools in and around other things i know there are tools like event catalogue'
  },
  {
    startTime: 7607.63,
    person: 'Chris',
    text: ' from david boyne and yeah simon brown c4 and structurizer for architecture diagrams and'
  },
  {
    startTime: 7613.15,
    person: 'Chris',
    text: " event-driven architecture tooling and you know there's various other things popping up in other"
  },
  {
    startTime: 7617.23,
    person: 'Chris',
    text: " spaces but i'm hopeful that you know over time we'll get some nice tooling to really help people"
  },
  {
    startTime: 7622.55,
    person: 'Chris',
    text: " with this because it's a it's a constant common problem keeping this stuff up to date and anything"
  },
  {
    startTime: 7628.11,
    person: 'Karol',
    text: " that can make it easier you know is welcome true and cohesive because it's not only about"
  },
  {
    startTime: 7633.29,
    person: 'Karol',
    text: " making it easier it's also about that cohesion of understanding"
  },
  {
    startTime: 7639.41,
    person: 'Karol',
    text: ' because the drift is real the drift just happens right and'
  },
  {
    startTime: 7645.19,
    person: 'Karol',
    text: ' it yeah and it just you need to be reminded either that you have defined that already'
  },
  {
    startTime: 7652.07,
    person: 'Karol',
    text: " and now is it you're writing a new article is this still the right definition or should you go back"
  },
  {
    startTime: 7656.89,
    person: 'Karol',
    text: ' for example and fix the definition which means that this impacts impacts the model of whatever'
  },
  {
    startTime: 7662.55,
    person: 'Karol',
    text: " you were doing and it doesn't have to be a model that is a data model or a piece of code"
  },
  {
    startTime: 7671.81,
    person: 'Karol',
    text: " it's actually part of the model of your business but that means that you it's a part of your"
  },
  {
    startTime: 7678.57,
    person: 'Karol',
    text: ' business a part of your knowledge base a part of something is out of sync if you start writing'
  },
  {
    startTime: 7684.03,
    person: 'Karol',
    text: ' you have a different understanding of the term and now you see it pops up in your in your google'
  },
  {
    startTime: 7689.03,
    person: 'Karol',
    text: " docs and it's like oh this is defined differently oh we have a problem this is exactly the living"
  },
  {
    startTime: 7695.13,
    person: 'Karol',
    text: " language because then you then you see that there is a discrepancy exactly right that's that's that's"
  },
  {
    startTime: 7701.53,
    person: 'Chris',
    text: " the vision that's the dream and and this idea of capturing um like usage examples as well i think"
  },
  {
    startTime: 7707.49,
    person: 'Chris',
    text: ' could be really powerful from that sense so one of my hopes is that like when you have say a'
  },
  {
    startTime: 7711.75,
    person: 'Chris',
    text: " service team who's using that browser extension and they will see like a message come in from"
  },
  {
    startTime: 7717.33,
    person: 'Chris',
    text: " a customer and a word in that message will be highlighted and if they hover over it'll give"
  },
  {
    startTime: 7721.95,
    person: 'Chris',
    text: ' them the definition in the domain and they might go oh actually this is a great example of a customer'
  },
  {
    startTime: 7726.61,
    person: 'Chris',
    text: ' using this sentence they highlight it add to usage examples and then that exact sentence that'
  },
  {
    startTime: 7732.57,
    person: 'Chris',
    text: ' illustrates the usage of that term as said by a customer or a domain expert will then appear in'
  },
  {
    startTime: 7738.53,
    person: 'Chris',
    text: ' the tooltips in the vs code ide for the developer i love this idea of like connecting you know'
  },
  {
    startTime: 7744.55,
    person: 'Chris',
    text: " there's different parts of the business and and helping drive more shared understanding of how to"
  },
  {
    startTime: 7749.71,
    person: 'Karol',
    text: " communicate yeah that's uh that's a very interesting concept of how to how to make that language"
  },
  {
    startTime: 7756.07,
    person: 'Karol',
    text: " actually live and evolve in a more governed way because it will evolve either way but it's a"
  },
  {
    startTime: 7764.05,
    person: 'Karol',
    text: " matter of how much of a grasp we have on it that an awareness of that evolution yeah and i'm it's"
  },
  {
    startTime: 7772.09,
    person: 'Chris',
    text: ' interesting because you use the word govern there and i think some people sometimes they'
  },
  {
    startTime: 7774.81,
    person: 'Chris',
    text: " associate the word governed with like constraints you know it needs to be managed and it's be"
  },
  {
    startTime: 7780.33,
    person: 'Chris',
    text: " slowed down there's been a process or of course it can be done yeah it can be that but i'm a big fan"
  },
  {
    startTime: 7786.67,
    person: 'Chris',
    text: " of not trying to put like not attempting to like tie it down because you can't stop it like people"
  },
  {
    startTime: 7792.49,
    person: 'Chris',
    text: ' are going to change the way they talk but more just like uh observe it and react to it rapidly'
  },
  {
    startTime: 7799.71,
    person: 'Chris',
    text: ' and this kind of and that kind of governance of supporting rapid change is what i what i think is'
  },
  {
    startTime: 7804.85,
    person: 'Chris',
    text: " very helpful rather than like you know a lot of people's misconception of governance that it has"
  },
  {
    startTime: 7809.29,
    person: 'Chris',
    text: " to be about like blocking change it's more about like managing change successfully and reducing"
  },
  {
    startTime: 7815.29,
    person: 'Karol',
    text: " risk um it's okay i mean if i'm looking at it from even usage perspective if i could"
  },
  {
    startTime: 7823.07,
    person: 'Karol',
    text: " for example every time we're writing an article and the article goes through a review review cycle"
  },
  {
    startTime: 7829.07,
    person: 'Karol',
    text: " uh within bridging the gap it's always comments like oh you used an abbreviation you never uh"
  },
  {
    startTime: 7836.61,
    person: 'Karol',
    text: " in the in this particular app's article you never out rolled it to a full uh term so there is a"
  },
  {
    startTime: 7843.53,
    person: 'Karol',
    text: ' the way we do it with every time we use a term that we want to abbreviate later'
  },
  {
    startTime: 7848.59,
    person: 'Karol',
    text: ' and or use an abbreviation the first the abbreviation is used you have to use the'
  },
  {
    startTime: 7853.55,
    person: 'Karol',
    text: ' full term and then in brackets use the abbreviation then you can use the abbreviation later right'
  },
  {
    startTime: 7859.51,
    person: 'Karol',
    text: ' but if i would embed contextive into the website not as a plugin but as part of the website'
  },
  {
    startTime: 7867.65,
    person: 'Karol',
    text: ' basically yeah it becomes the glossary so everybody reading an article would have'
  },
  {
    startTime: 7872.75,
    person: 'Karol',
    text: ' highlights of the words the terms that are defined in the glossary and they'
  },
  {
    startTime: 7876.93,
    person: 'Karol',
    text: " instantly they can gain the context of what they're reading because they instead of looking"
  },
  {
    startTime: 7882.15,
    person: 'Karol',
    text: ' up a previous article on the on the subject matter they can just look up the small glossary uh'
  },
  {
    startTime: 7889.45,
    person: 'Karol',
    text: ' definition of that term and then for example in the glossary have additional links'
  },
  {
    startTime: 7894.91,
    person: 'Karol',
    text: ' uh pointing to the right articles that define that define or talk about that topic yeah this'
  },
  {
    startTime: 7901.03,
    person: 'Chris',
    text: " idea has come up a bit i've had someone request like a docusaurus plugin to be able to pull these"
  },
  {
    startTime: 7905.51,
    person: 'Chris',
    text: " kind of glossaries in and publish them you know as part of that and it's definitely on my roadmap"
  },
  {
    startTime: 7909.79,
    person: 'Chris',
    text: " it's it's if anyone would like to contribute that to the open source project they're very welcome"
  },
  {
    startTime: 7914.09,
    person: 'Chris',
    text: " um i'll probably start looking at that in the second half of this year but it's definitely"
  },
  {
    startTime: 7917.79,
    person: 'Karol',
    text: " something i'd love to do we could definitely help you test it"
  },
  {
    startTime: 7922.59,
    person: 'Karol',
    text: ' good stuff that would be cool because this is an actual use case we can in bridging the gap at'
  },
  {
    startTime: 7928.75,
    person: 'Karol',
    text: ' least we can use i i see the other use cases in regular consulting work that i have that i would'
  },
  {
    startTime: 7933.99,
    person: 'Karol',
    text: ' absolutely use that in the code base and use that uh in a jira uh to to align tickets uh with'
  },
  {
    startTime: 7941.99,
    person: 'Karol',
    text: ' meaning and semantic understanding uh and also in confluence just to shorten the the amount of'
  },
  {
    startTime: 7948.53,
    person: 'Karol',
    text: ' things i have to do between documentation uh this kind of glossary would be amazing to have'
  },
  {
    startTime: 7953.95,
    person: 'Karol',
    text: ' with a lot of clients especially if the clients are using for example a different language'
  },
  {
    startTime: 7960.13,
    person: 'Karol',
    text: " and not and here meaning an actual like a discrepancy i'm using english in work at work"
  },
  {
    startTime: 7965.43,
    person: 'Karol',
    text: ' but my client is using dutch and all the terms and the business terms are actually defined in dutch'
  },
  {
    startTime: 7970.39,
    person: 'Karol',
    text: ' so having that kind of glossary of what those dutch words mean especially in the context of'
  },
  {
    startTime: 7976.81,
    person: 'Karol',
    text: ' their business that would be brilliant that would be a brilliant time saver because then i have a'
  },
  {
    startTime: 7981.93,
    person: 'Karol',
    text: " specific term in code or in confluence that i don't understand and it's used as a dutch word"
  },
  {
    startTime: 7989.61,
    person: 'Karol',
    text: ' in an english document and i need to grasp it and having that kind of help that kind of plug'
  },
  {
    startTime: 7996.13,
    person: 'Karol',
    text: ' to just dive into those those glossaries easily time saver no i i think especially for people like'
  },
  {
    startTime: 8004.27,
    person: 'Chris',
    text: ' consultants that have to come in and engage with the language very quickly i consider it super'
  },
  {
    startTime: 8008.13,
    person: 'Chris',
    text: " helpful for for them as well so i'm really keen actually to talk to consulting firms that would"
  },
  {
    startTime: 8012.69,
    person: 'Chris',
    text: ' like to help set their clients up with this to make their own lives easier as they jump between'
  },
  {
    startTime: 8017.83,
    person: 'Karol',
    text: ' clients you know so yeah i mean uh the the cognitive load needed to onboard a new consultant'
  },
  {
    startTime: 8024.99,
    person: 'Karol',
    text: ' on the project or replace a consultant with knowledge transfers with uh getting the onboarding'
  },
  {
    startTime: 8030.51,
    person: 'Karol',
    text: " done the relevant trainings done the uh setting up an environment for a developer uh and don't"
  },
  {
    startTime: 8039.17,
    person: 'Karol',
    text: ' get me started on on how setting up an environment works at some companies uh i have war stories but'
  },
  {
    startTime: 8045.15,
    person: 'Karol',
    text: ' but this all all of this already is a humongous strain and when you add on top of that that you'
  },
  {
    startTime: 8053.71,
    person: 'Karol',
    text: " need to learn the context of the client yeah especially if you're a consultant like me where"
  },
  {
    startTime: 8059.97,
    person: 'Karol',
    text: " i'm not a specific industry focused because i i work cross industry oh that takes months of time"
  },
  {
    startTime: 8068.47,
    person: 'Karol',
    text: " to actually learn and understand what the hell they're talking about uh and even with diving"
  },
  {
    startTime: 8074.39,
    person: 'Karol',
    text: " into the code you're like what is this and then you have a code written half in english and half in"
  },
  {
    startTime: 8079.91,
    person: 'Chris',
    text: " dutch and and you're like well no i don't get it before the current incarnation of uh terminology"
  },
  {
    startTime: 8089.03,
    person: 'Chris',
    text: " was agreed on so yeah all these challenges definitely yeah i mean you're living you're"
  },
  {
    startTime: 8093.39,
    person: 'Chris',
    text: " living the problems that i'm trying to help solve here so precisely precisely so this would be uh"
  },
  {
    startTime: 8098.63,
    person: 'Karol',
    text: ' of course this would be an effort to establish that glossary but an effort that would definitely'
  },
  {
    startTime: 8104.55,
    person: 'Karol',
    text: ' repay very quickly if you have a specific tool to help you build that glossary and maintain it and'
  },
  {
    startTime: 8110.57,
    person: 'Chris',
    text: ' use it daily and i think this is the thing by trying to make it easy to maintain i also want'
  },
  {
    startTime: 8115.21,
    person: 'Chris',
    text: " to reduce the um the you know the overhead of getting started i don't encourage people to say"
  },
  {
    startTime: 8121.71,
    person: 'Chris',
    text: ' go and create your whole glossary before you even push this thing out there and like'
  },
  {
    startTime: 8125.45,
    person: 'Chris',
    text: " even one term in a glossary is going to be better than no terms and then because it's easy to add"
  },
  {
    startTime: 8130.31,
    person: 'Chris',
    text: ' terms you can just add them as you go um because you know you want to like why not get the benefit'
  },
  {
    startTime: 8136.95,
    person: 'Chris',
    text: " of whatever you've done so i'm a big fan of like push it out start adding something start small"
  },
  {
    startTime: 8141.77,
    person: 'Chris',
    text: ' and then you know build up the the base of terminology as you go yeah basically as you'
  },
  {
    startTime: 8147.59,
    person: 'Karol',
    text: " read something oh this is a very common term let's add it to the glossary pretty much and"
  },
  {
    startTime: 8153.83,
    person: 'Karol',
    text: " and i would already see that in in all the articles i've written over uh the last few years"
  },
  {
    startTime: 8160.45,
    person: 'Karol',
    text: ' that there are certain terms that i just use constantly and they just ask for a glossary'
  },
  {
    startTime: 8166.05,
    person: 'Karol',
    text: ' definition to be just viewed uh on the page as a pop-up when you hover over it it is just uh'
  },
  {
    startTime: 8171.57,
    person: 'Karol',
    text: " it would be just so much easier because the topic i'm talking about will have let's say related"
  },
  {
    startTime: 8178.89,
    person: 'Karol',
    text: " articles which are usually on our page at the end of the page but if i'm talking about let's say"
  },
  {
    startTime: 8184.51,
    person: 'Karol',
    text: ' even driven architecture and even driven patterns for interoperability across systems'
  },
  {
    startTime: 8189.93,
    person: 'Karol',
    text: ' fantastic then i link other patterns and the definition of even driven architecture'
  },
  {
    startTime: 8194.69,
    person: 'Karol',
    text: ' but then in the article itself we have uh the the terms like performance responsiveness'
  },
  {
    startTime: 8203.549,
    person: 'Karol',
    text: ' observability auditability we have types of coupling defined and described in context'
  },
  {
    startTime: 8209.69,
    person: 'Karol',
    text: ' of that pattern but not as a generic definition and having that glossary to have that generic'
  },
  {
    startTime: 8216.73,
    person: 'Karol',
    text: ' definition of a specific type of coupling that is a specific type on a system level'
  },
  {
    startTime: 8222.49,
    person: 'Karol',
    text: " interoperability that would help because then that would just yeah that's easier and then you have a"
  },
  {
    startTime: 8228.75,
    person: 'Karol',
    text: ' contextual definition of that pattern uh just that like yeah plenty plenty various use cases'
  },
  {
    startTime: 8236.33,
    person: 'Karol',
    text: ' that i have in mind right now that would actually be really good and this is again living language'
  },
  {
    startTime: 8240.51,
    person: 'Karol',
    text: ' we have our domain which is knowledge-based domain uh then the live stream domain then the'
  },
  {
    startTime: 8247.309,
    person: 'Karol',
    text: ' public speaking domain and these are these will have different uh terms in them and they already'
  },
  {
    startTime: 8252.41,
    person: 'Karol',
    text: ' have different terms in them uh some of my colleagues in bridging the gap they have'
  },
  {
    startTime: 8257.19,
    person: 'Karol',
    text: ' no of the terminology i use in live stream because they are completely not'
  },
  {
    startTime: 8262.37,
    person: 'Karol',
    text: " involved in the process there's five of us everybody's doing something different"
  },
  {
    startTime: 8268.45,
    person: 'Karol',
    text: " yeah it's interesting it's interesting you're right this is a macro scale of what your clients"
  },
  {
    startTime: 8273.01,
    person: 'Karol',
    text: ' are going through and what i experience as a consultant and my clients are going through'
  },
  {
    startTime: 8277.29,
    person: 'Karol',
    text: ' in terms of the evolution of language interesting very very much so'
  },
  {
    startTime: 8282.91,
    person: 'Karol',
    text: " all right i think for the moment given that it's uh eight past nine we've been at it for two hours a"
  },
  {
    startTime: 8289.49,
    person: 'Karol',
    text: ' little bit longer given that we were sitting in the studio before the stream i think we reached'
  },
  {
    startTime: 8294.629,
    person: 'Karol',
    text: ' the end of the stream for today but i think chris will be seeing you uh on the stream uh a few more'
  },
  {
    startTime: 8301.33,
    person: 'Karol',
    text: ' times about specific different topics that would be awesome uh before we jump off as uh as i said'
  },
  {
    startTime: 8309.309,
    person: 'Karol',
    text: ' earlier in the stream we have a next one uh next week well eight days uh had to move it to thursday'
  },
  {
    startTime: 8316.35,
    person: 'Karol',
    text: ' because of other engagements and yes we have a very clickbaity title called uh can we get rid of'
  },
  {
    startTime: 8323.09,
    person: 'Karol',
    text: " developers uh is specification the new super skill so yeah we'll be talking about uh ai"
  },
  {
    startTime: 8329.33,
    person: 'Karol',
    text: ' gen ai using gen ai in development and can those companies finally get rid of uh developers and'
  },
  {
    startTime: 8337.49,
    person: 'Karol',
    text: " just give their business users ability to create code and well maybe maybe not we'll see we'll talk"
  },
  {
    startTime: 8344.75,
    person: 'Karol',
    text: " about it there are different arguments uh and i think it's going to be a very fun uh an interesting"
  },
  {
    startTime: 8351.99,
    person: 'Karol',
    text: ' conversation to be had and joining us on this stream is Sven Helge Huber'
  },
  {
    startTime: 8357.309,
    person: 'Karol',
    text: " who's a actually a fan of the show he's always watching us while making dinner so hopefully he's"
  },
  {
    startTime: 8363.59,
    person: 'Karol',
    text: " watching uh he was watching me today as well and of course if you're uh new with the stream uh"
  },
  {
    startTime: 8370.87,
    person: 'Karol',
    text: ' go visit bridging the gap see what we do we have a list of all the other streams in there'
  },
  {
    startTime: 8375.45,
    person: 'Karol',
    text: ' on the page we have articles about integration architecture uh we have some trainings coming'
  },
  {
    startTime: 8381.61,
    person: 'Karol',
    text: " up uh and more events that are not loosely coupled events but but actual workshops that we're going"
  },
  {
    startTime: 8388.37,
    person: 'Karol',
    text: ' to be running and of course subscribe to our youtube channel uh to get notified about the'
  },
  {
    startTime: 8395.4,
    person: 'Karol',
    text: " future live streams and other video content that we'll be posting and we're constantly working on"
  },
  {
    startTime: 8401.81,
    person: 'Karol',
    text: " materials so hopefully soon enough we'll get more materials on the channel that said chris"
  },
  {
    startTime: 8409.12,
    person: 'Karol',
    text: " thank you so much for joining it's been a pleasure and for everybody still with us"
  },
  { startTime: 8414.43, person: 'Karol', text: ' have a lovely evening and night' }
])
</script>

<style scoped></style>
