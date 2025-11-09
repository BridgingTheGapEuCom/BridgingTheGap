<template>
  <div class="w-full">
    <StreamLayout
      :transcript="transcript"
      name="Loosely Coupled - EDA to Power Warehouse Systems"
      video-id="sC71XVs3LHU"
    />
  </div>
</template>

<script lang="ts" setup>
const transcript = ref([
  {
    startTime: 104.39,
    person: 'Karol',
    text: ' Good morning, good afternoon, good evening, everybody.'
  },
  {
    startTime: 107.87,
    person: 'Karol',
    text: ' Welcome to Loosely Coupled, brought to you by Bridging the App.'
  },
  {
    startTime: 111.27,
    person: 'Karol',
    text: " My name is Karol Skrzymowski and I'll be your host tonight."
  },
  {
    startTime: 115.03,
    person: 'Karol',
    text: " And today we're having quite an interesting topic to tackle."
  },
  {
    startTime: 119.65,
    person: 'Karol',
    text: " We're going to be talking about event-driven architecture, but in a very different edition than the usual, which means that we're going to be talking about an architecture that actually touches the physical world."
  },
  { startTime: 132.19, person: 'Karol', text: " Normally, we don't really get to see that." },
  {
    startTime: 134.45,
    person: 'Karol',
    text: ' We see just, you know, pixels on the screen, etc.'
  },
  {
    startTime: 138.11,
    person: 'Karol',
    text: " Today, we're having a very interesting instalment of having event-driven architecture in a warehouse."
  },
  {
    startTime: 143.45,
    person: 'Karol',
    text: " And to tell you all about that, we're going to be having Valeriia Filimonova, a staff engineer from Picnic Technologies, a FMCG company in the Netherlands."
  },
  {
    startTime: 155.33,
    person: 'Karol',
    text: ' Now, Valeria is a person passionate about software architecture, clean code, and distributed systems.'
  },
  { startTime: 162.23, person: 'Karol', text: ' Also, the expert in the company on RabbitMQ.' },
  {
    startTime: 166.15,
    person: 'Karol',
    text: ' And she loves designing maintainable systems with a focus on EDA.'
  },
  {
    startTime: 172.95,
    person: 'Karol',
    text: " So, that's exactly what we're talking about today."
  },
  { startTime: 175.45, person: 'Karol', text: ' So, Valeria, welcome to the stream.' },
  { startTime: 178.23, person: 'Valeri', text: ' Hey, hello, hello.' },
  { startTime: 180.17, person: 'Valeri', text: ' Good morning, good evening, good afternoon.' },
  { startTime: 184.29, person: 'Karol', text: " I see you're adopting my welcome message." },
  {
    startTime: 189.39,
    person: 'Valeri',
    text: " Yeah, it also makes me feel a bit better, because behind my window, it's quite dark, and I was thinking that someone has a morning and probably sunshine."
  },
  { startTime: 197.71, person: 'Valeri', text: " That's a nice thought." },
  { startTime: 200.03, person: 'Karol', text: ' We sometimes get people watching from the US.' },
  {
    startTime: 204.63,
    person: 'Karol',
    text: " So, you know, East Coast, that's a six-hour stiff, so they're in the middle of the day."
  },
  {
    startTime: 210.15,
    person: 'Karol',
    text: ' And West Coast, it would be, what, 10 a.m. on that side of the world.'
  },
  { startTime: 215.35, person: 'Karol', text: " So, sometimes it's morning." },
  {
    startTime: 219.05,
    person: 'Karol',
    text: " Like they say, there's always noon somewhere, right, if somebody's, well, enjoying other drinks than coffee at this hour."
  },
  { startTime: 229.75, person: 'Karol', text: ' Valeria, tell us a little bit about yourself.' },
  { startTime: 232.87, person: 'Karol', text: ' What do you do?' },
  { startTime: 234.23, person: 'Karol', text: ' How did you get to the place you are?' },
  {
    startTime: 237.81,
    person: 'Karol',
    text: ' How did you get to do even driven architecture, etcétera?'
  },
  {
    startTime: 242.97,
    person: 'Valeri',
    text: " Yeah, well, I'm very willing to give you a big story worth a fully book, but it's a pretty boring one, like all the way from the university in software engineering till that days."
  },
  {
    startTime: 254.99,
    person: 'Valeri',
    text: " So, I'll just skip to the part how I ended up being in the Netherlands, because I have a non-Dutch name, so for people who might know."
  },
  {
    startTime: 264.73,
    person: 'Valeri',
    text: " Like five years ago, I moved here, exactly at the point of time when Technica Technologies, the company I'm working in, has been starting a new automated warehouse."
  },
  {
    startTime: 275.77,
    person: 'Valeri',
    text: " So, I originally joined to build the software that's going to follow this huge, fancy thing."
  },
  {
    startTime: 282.05,
    person: 'Valeri',
    text: " And I loved it so much, exactly because of the reason you mentioned on the opening, that you write a line of code, and it's not just pixels, it's a physical thing, you can see things move, and you're like, whoa, that's something new."
  },
  {
    startTime: 293.91,
    person: 'Valeri',
    text: " Because before I've been working on microservices, there's also events, but for lawyers, that's not that exciting, to be honest."
  },
  {
    startTime: 302.29,
    person: 'Valeri',
    text: ' So, and now having those fancy things around, moving, doing stuff, like, yeah.'
  },
  {
    startTime: 307.37,
    person: 'Valeri',
    text: " So, I basically stuck with the thing, and seeing the baby growing from that very first early stage to a bigger, more complex system now, it's just irresistible."
  },
  { startTime: 320.77, person: 'Karol', text: ' Okay.' },
  {
    startTime: 321.63,
    person: 'Karol',
    text: ' I mean, I remember my times at university, where I spent hours in the robotics lab.'
  },
  {
    startTime: 329.23,
    person: 'Karol',
    text: ' We had several sets of Lego Mindstorms, and we used pseudocode, or NXC, so not exactly C, to programme those, and that was, like, the most fun thing I could do after study hours, when I just sat in the lab, took Lego blocks, the Lego Technics blocks, and assembled them, and then programmed the controller to make a move and do things.'
  },
  { startTime: 353.21, person: 'Karol', text: ' That was, like, so satisfying.' },
  {
    startTime: 354.87,
    person: 'Karol',
    text: ' So, I guess that this kind of thrill of satisfaction kind of translates here, on a completely different scale.'
  },
  {
    startTime: 362.51,
    person: 'Valeri',
    text: " I honestly didn't know that I would end up with such a cool project with this my first and only experience with the real technical and physical world was also, like, in the university, during master's, when I was writing my thesis, and it just felt fun, squished in a full microservices event, driven into a small controller to make a robot that you can extend and talk to, because why not, right?"
  },
  { startTime: 386.35, person: 'Valeri', text: ' Sure.' },
  { startTime: 389.26, person: 'Karol', text: ' Yeah.' },
  { startTime: 389.56, person: 'Karol', text: ' Okay.' },
  {
    startTime: 390.78,
    person: 'Karol',
    text: ' So, background, university, from university, EDA, microservices, events, all that since university?'
  },
  { startTime: 398.28, person: 'Valeri', text: ' Yeah, pretty much.' },
  {
    startTime: 399.88,
    person: 'Valeri',
    text: " Well, in that regard, I was happy, because, like, I'm lucky, in a sense, because the first company I joined during the studies was also pretty modern already, and I've learned a lot of good stuff, but mostly how not to do microservices."
  },
  {
    startTime: 417.68,
    person: 'Valeri',
    text: " So now I'm trying not to repeat what I already know."
  },
  {
    startTime: 424.3,
    person: 'Valeri',
    text: " Yeah, and what I do in Picnic, I'm a staff engineer, so I'm not already, strictly speaking, belong to a house systems loan, so now I work across the company with any kind of cool projects."
  },
  { startTime: 440.22, person: 'Karol', text: ' Okay.' },
  { startTime: 440.52, person: 'Valeri', text: ' So, always a lot of fun things to do.' },
  {
    startTime: 444.46,
    person: 'Karol',
    text: ' So, because titles differ from company to company, what does, in the Picnic hierarchy, what does this entail?'
  },
  {
    startTime: 452.84,
    person: 'Karol',
    text: ' Staff engineer, because we have different titles everywhere.'
  },
  {
    startTime: 456.62,
    person: 'Karol',
    text: ' I sometimes see that staff engineer is, like, one below principal engineer, whatever that means in general, and, yeah.'
  },
  {
    startTime: 465.84,
    person: 'Valeri',
    text: ' Yeah, staff engineer and title is somewhat new in the company.'
  },
  {
    startTime: 470.04,
    person: 'Valeri',
    text: ' We kicked off it, actually, beginning of this year, like, officially, and the best way to explain it, so we do have levels, pretty classical from junior to senior, but then when you reach a certain seniority level and you want to grow, you have three posts to grow.'
  },
  {
    startTime: 484.86,
    person: 'Valeri',
    text: ' Tech leadership is one of them, like, you run your team, blah, blah, nothing new.'
  },
  {
    startTime: 489.64,
    person: 'Valeri',
    text: " Then you can simply skill up as an individual contributor more and more, or you can go staff engineering way, meaning that you don't belong to a product, to a team, so you're basically a unit of acceleration within the company that can do whatever."
  },
  {
    startTime: 503.68,
    person: 'Valeri',
    text: " If someone needs help with architecture, here's staff engineer for you."
  },
  {
    startTime: 507.5,
    person: 'Valeri',
    text: " If you have problem with, I don't know, migration or durability, AI, whatever, here's staff engineer for you."
  },
  {
    startTime: 514.059,
    person: 'Karol',
    text: " Right, so that's more of a broader role outside of specific domain areas and specific projects."
  },
  { startTime: 522.64, person: 'Karol', text: ' Okay, that kind of approach.' },
  {
    startTime: 525.5,
    person: 'Karol',
    text: " All right, and that differs from the staff engineers I used to be exposed to because these were usually specialised in an area, so that's like, again, different companies, different definitions of such role, same with architecture."
  },
  {
    startTime: 537.88,
    person: 'Valeri',
    text: ' Definitely, but you still inevitably have some speciality for people, right?'
  },
  {
    startTime: 542.38,
    person: 'Valeri',
    text: ' Even though we are supposed to be trained, like, in breadth of knowledge, you still gravitate towards certain things, and for me, like, event-driven microservices, I inevitably go that way.'
  },
  {
    startTime: 556.1,
    person: 'Karol',
    text: ' Just out of curiosity, do you have, like, an integration platform also in Picnic?'
  },
  {
    startTime: 562.08,
    person: 'Karol',
    text: ' No, so even driven all the way, or point-to-point between systems?'
  },
  { startTime: 567, person: 'Karol', text: ' Yeah.' },
  { startTime: 568.24, person: 'Karol', text: ' Okay, okay.' },
  {
    startTime: 570.06,
    person: 'Karol',
    text: " Just out of curiosity, I don't know what the scale of the systems are in Picnic in general, in the ecosystem, so it may work, may not, and you may have different problems or not known problems at all."
  },
  { startTime: 581.32, person: 'Karol', text: " That's always interesting to ask." },
  { startTime: 584.14, person: 'Karol', text: " All right, but today's topic, I'm quite curious." },
  { startTime: 587.56, person: 'Karol', text: ' Event-driven in a warehouse system.' },
  {
    startTime: 589.68,
    person: 'Karol',
    text: " I mean, I've seen a warehouse once in my lifetime, in my career, when I was working back at T-Mobile, but that was a completely different day and age, and we didn't have microservices yet."
  },
  { startTime: 600.58, person: 'Karol', text: ' That was so long ago.' },
  {
    startTime: 602.12,
    person: 'Karol',
    text: " I mean, we didn't even have cloud at that point yet."
  },
  { startTime: 606.14, person: 'Karol', text: ' Yeah, that was that long ago, yes.' },
  {
    startTime: 609,
    person: 'Karol',
    text: ' So, all the things that we did was in on-premise server rooms.'
  },
  {
    startTime: 613.24,
    person: 'Karol',
    text: " We didn't even have proper virtualisation at the time for servers, so some of the servers were, like, still physical machines that we just connected to over the network instead of just virtual machines, so that was a long time ago."
  },
  {
    startTime: 629.4,
    person: 'Karol',
    text: " Probably from that time, quite a bit has changed, so what's going on there?"
  },
  {
    startTime: 636.94,
    person: 'Karol',
    text: " What's the deal with having the EDA in a warehouse?"
  },
  {
    startTime: 639.64,
    person: 'Karol',
    text: " Because I think that's a, for some viewers, that might be something very interesting and specific, and like you said and I said, then pixels on the screen, right?"
  },
  {
    startTime: 649.54,
    person: 'Karol',
    text: " For most of us, when we deal with architecture, when we deal with coding, that's pixels on the screen."
  },
  {
    startTime: 653.78,
    person: 'Karol',
    text: ' We get a front-end, we do something at the front-end, etc.'
  },
  {
    startTime: 657.92,
    person: 'Karol',
    text: ' What does it entail to have an EDA-like system in a warehouse?'
  },
  {
    startTime: 663.86,
    person: 'Valeri',
    text: " Well, first of all, it's quite natural because it's, for instance, a domain where an event is not"
  },
  {
    startTime: 669.92,
    person: 'Valeri',
    text: ' an abstract thing but an actual physical thing happening in the physical world, so the way you'
  },
  {
    startTime: 675.7,
    person: 'Valeri',
    text: " would see it's like those long, long stretches of conveyors, very physical, boxes moving around,"
  },
  {
    startTime: 681.88,
    person: 'Valeri',
    text: ' actually we call them crates, and then on distance from each other, there are scanners,'
  },
  {
    startTime: 687.84,
    person: 'Valeri',
    text: ' so whenever the crate passes by, the barcode is scanned, and this is a natural event that you'
  },
  {
    startTime: 693.84,
    person: 'Valeri',
    text: ' would get from the physical machinery, and now you know, hey, this particular crate, this number'
  },
  {
    startTime: 699.34,
    person: 'Valeri',
    text: " is at this point in your physical warehouse, and that's one type of event, and the other is, of"
  },
  {
    startTime: 714.38,
    person: 'Valeri',
    text: ' course, you can say, hey, I want this particular crate, like five kilometres from here in a'
  },
  { startTime: 725.68, person: 'Valeri', text: ' different part of the system.' },
  {
    startTime: 728.42,
    person: 'Karol',
    text: ' So, is the warehouse that big that you can get it in kilometres?'
  },
  {
    startTime: 732.76,
    person: 'Valeri',
    text: ' Yes, you do have kilometres of conveyors, but of course they are not just stretched, that would be an efficient use of space, they are stacked on top of each other, right?'
  },
  {
    startTime: 740.3,
    person: 'Karol',
    text: ' So, you can say, hey, yeah, so if you would estimate how many kilometres of conveyors you have in a warehouse at this point?'
  },
  { startTime: 749.66, person: 'Karol', text: ' Educated guess.' },
  {
    startTime: 751.02,
    person: 'Valeri',
    text: " Yeah, I don't want to lie, I think one of the biggest we have in Germany should have at least 20 kilometres, yes, and being at three by now, so multiply, and the fourth one is coming, so in total you have already quite some."
  },
  {
    startTime: 767.44,
    person: 'Karol',
    text: " And that's condensed into, of course, a 3D space, so they're not outlined in a 2D like flat surface, but they're like stacked on top of each other."
  },
  {
    startTime: 777.04,
    person: 'Valeri',
    text: ' Yes, like in general, like the full automated warehouse at least three storeys high.'
  },
  { startTime: 782.96, person: 'Karol', text: " Okay, that's a lot." },
  {
    startTime: 785.78,
    person: 'Karol',
    text: ' So, in that sense, we have a warehouse, we have conveyor belts, we have scanners on those conveyor belts, the natural event is the position of the crate, the box on the conveyor belt.'
  },
  { startTime: 798.78, person: 'Valeri', text: ' Yeah.' },
  {
    startTime: 799.54,
    person: 'Karol',
    text: " Okay, the next, let's say, event is like telling where you want that box, and what does that entail from this process perspective?"
  },
  {
    startTime: 810.1,
    person: 'Valeri',
    text: " Well, what's good to understand here is the system is layered, so the bottom one layer is basically what controls the conveyors themselves, it's like the lowest possible machinery level."
  },
  {
    startTime: 825.9,
    person: 'Valeri',
    text: ' Then on top of that, the hardware providers give you a bit of a better abstraction, which has different names, but we refer to it as a transport system.'
  },
  {
    startTime: 835.88,
    person: 'Valeri',
    text: " So, that's what we normally would talk to from the business perspective, because that already gives you an abstraction of exactly, so my crate is here, or if I get commands to get delivery there, this is how it executes it."
  },
  {
    startTime: 850.6,
    person: 'Karol',
    text: ' So, is it like that the belts actually fork and join at certain times?'
  },
  { startTime: 856.56, person: 'Valeri', text: ' Yes.' },
  { startTime: 857.4, person: 'Valeri', text: ' Oh, wow.' },
  { startTime: 858.86, person: 'Karol', text: ' Okay, that would be fun.' },
  {
    startTime: 861.72,
    person: 'Karol',
    text: " My brain is opening now Factorio, you know, the game with lots of conveyor belts in it, and I'm looking at this and my brain is like, oh, the conveyor is going, joining, splitting, whatnot."
  },
  { startTime: 874.12, person: 'Karol', text: ' Okay, and from continuing, sorry.' },
  {
    startTime: 877.66,
    person: 'Valeri',
    text: " Yeah, well, but actually that's a good transition, because it's quite simple just to think that, oh, I have a scan and here is my crate, or I give a command to send it there, it's delivered, but it's never that good in real life, it's way more complex."
  },
  { startTime: 895.96, person: 'Karol', text: ' Okay.' },
  {
    startTime: 896.9,
    person: 'Valeri',
    text: " If you have a fork, it means that at any point of time machinery can fail, and either won't be able to scan, barcode can be damaged, or malfunction of a scanner, or actually the crate can misdivert and go the other way around."
  },
  {
    startTime: 912.68,
    person: 'Valeri',
    text: " You want it left, and it went right, and you'll have to deal with that."
  },
  { startTime: 917.56, person: 'Karol', text: ' And reroute them, in that sense.' },
  {
    startTime: 920.3,
    person: 'Valeri',
    text: ' Yeah, reroutes are not always possible, because here we actually, we are working with different hardware providers, and even though the conveyor belts are produced by the same company, this SAC transporting is proprietary to those companies, and one of them has a limitation.'
  },
  {
    startTime: 942.06,
    person: 'Valeri',
    text: ' So the warehouse is so big, that is, from the transport system perspective, is split into smaller units.'
  },
  {
    startTime: 948.26,
    person: 'Valeri',
    text: " So basically, different microservices, deployables, whatever you want to call it, and the thing is that you can't send a request for a crate to breach the boundary, in the sense that if your crate is in the middle of one transport system, and you want it in the other one, you can't send a direct transport."
  },
  {
    startTime: 968.94,
    person: 'Valeri',
    text: ' You have to go all the way to the border, then it will naturally cross, and only then it appears in the new system.'
  },
  {
    startTime: 977.94,
    person: 'Valeri',
    text: ' And that leads to limitations to how you can design your transportation, and you will have to handle a lot of those cases.'
  },
  {
    startTime: 986.3,
    person: 'Karol',
    text: ' So okay, let me put it like my brain tries to imagine the warehouse.'
  },
  {
    startTime: 990.76,
    person: 'Karol',
    text: ' So conveyor belts, scanners scanning for the position, so obviously you probably have a scanner just before a fork, for example, right, to identify, oh, this crate is now at the fork, and then based on that, you switch the fork towards one of the conveyors, right?'
  },
  {
    startTime: 1008.48,
    person: 'Karol',
    text: ' And then that moves on, and then do you have traffic jams in those conveyor belts at times?'
  },
  { startTime: 1015.74, person: 'Karol', text: ' Yes, you do.' },
  { startTime: 1017.48, person: 'Karol', text: ' Oh, wow, okay.' },
  {
    startTime: 1018.66,
    person: 'Karol',
    text: ' That sounds like one of the warehouses I visited back in Poland, in working for T-Mobile, that at times they also experienced traffic jams, but that was a lot less automation in that sense.'
  },
  {
    startTime: 1030.72,
    person: 'Karol',
    text: ' Most of them are while the conveyors were moving by electric engines, but most of that was manually clicking and then move the conveyor, right?'
  },
  {
    startTime: 1045.04,
    person: 'Karol',
    text: ' A good question popped up in the meantime on YouTube.'
  },
  {
    startTime: 1049.36,
    person: 'Karol',
    text: ' Do all warehouses have the same implementation, as in, actually the same systems and the same physical components, I guess, or do you like customise?'
  },
  {
    startTime: 1062.9,
    person: 'Valeri',
    text: ' Yeah, honestly, I would have loved to say yes, but of course not.'
  },
  {
    startTime: 1070.04,
    person: 'Valeri',
    text: ' So all the three warehouses that are actually running, automated ones, they are different.'
  },
  {
    startTime: 1077.08,
    person: 'Valeri',
    text: " The fourth one that's coming is also different."
  },
  {
    startTime: 1080.3,
    person: 'Valeri',
    text: " It's first that our hardware providers are different, so this transport system layer works differently, and that actually bridges us towards what was the requirements and how we ended up with event-driven all the way through, just because we want interoperability."
  },
  {
    startTime: 1096.76,
    person: 'Valeri',
    text: ' So now you need to work with multiple ways to control the hardware, and also you want to plug in different pieces at different points of time.'
  },
  {
    startTime: 1107.66,
    person: 'Valeri',
    text: " What I mean is that a fully automated warehouse has a tonne of conveyors, various special stations, fully automated, big storage, like imagine a bookshelf is thousands of places to put a crate into, but the neighbour does have conveyors and some types of stations, but doesn't have the storage, and a lot of different, like, robot parts, and the third one has something else."
  },
  {
    startTime: 1133.8,
    person: 'Valeri',
    text: " So the way we've been designing the system is so that any new warehouse coming in, you can simply choose the parts you need, plug them in together, and make them work."
  },
  { startTime: 1144.32, person: 'Karol', text: " So it's like building with Lego blocks." },
  { startTime: 1146.74, person: 'Valeri', text: ' Exactly.' },
  { startTime: 1147.56, person: 'Karol', text: ' A physical and digital Lego blocks.' },
  { startTime: 1149.82, person: 'Valeri', text: ' Exactly.' },
  {
    startTime: 1151.44,
    person: 'Karol',
    text: " So you have different hardware suppliers for warehouses, so different physical implementation, and then you plug and apply to that, based on their specification of interfaces, let's say somewhat generic microservices doing the same things, controlling the environment with that minimal adaptation towards that specific interface?"
  },
  { startTime: 1178.6, person: 'Valeri', text: ' Kind of.' },
  {
    startTime: 1179.54,
    person: 'Valeri',
    text: " So what happens, we, on our side, so our part of the deal, we split the microservices, abstractly speaking, into two buckets, and there are those kind of executors, that's basically those services that compartmentalise a specific part of the business flows and the touched hardware."
  },
  {
    startTime: 1203.74,
    person: 'Valeri',
    text: ' Picking is a process when a crate is in front of you, one is product, one for the customer, and you make a simple motion of pick up the paper and move to another crate.'
  },
  { startTime: 1213.08, person: 'Karol', text: ' Okay.' },
  {
    startTime: 1214.06,
    person: 'Valeri',
    text: ' This specific one, and even this picking system already has three different implementations, because of the hardware providers.'
  },
  {
    startTime: 1221.24,
    person: 'Valeri',
    text: ' There is also manual ones, where people manually walk, where there are no conveyors.'
  },
  {
    startTime: 1228.66,
    person: 'Valeri',
    text: " So there are a bunch of those executors, which you can basically say that for this warehouse, we do have picking, we do have automated gel packing, it's a process when you need to put gel pack, something frozen to keep your cool product cool all the way to the customer, and etc, etc."
  },
  { startTime: 1247.22, person: 'Valeri', text: ' There are a lot of them.' },
  {
    startTime: 1248.78,
    person: 'Valeri',
    text: ' But then you have also even higher level, another bucket of services,'
  },
  {
    startTime: 1252.54,
    person: 'Valeri',
    text: ' which are orchestrators, and those are invariably basically the business flows and the controls'
  },
  {
    startTime: 1260.08,
    person: 'Valeri',
    text: ' over the executors, saying how to route things, how to basically, what are the stages of the'
  },
  {
    startTime: 1268.52,
    person: 'Valeri',
    text: ' order processing should be, because from the moment you get your order from a customer,'
  },
  {
    startTime: 1274.72,
    person: 'Valeri',
    text: ' depending on what kind of order you want to pick it, to gel pack, to dispatch, or maybe rework,'
  },
  {
    startTime: 1280.56,
    person: 'Valeri',
    text: " and it's like the whole world of decision trees, and how you do it, depending on all the"
  },
  { startTime: 1288.3, person: 'Valeri', text: ' parameters.' },
  {
    startTime: 1289.88,
    person: 'Karol',
    text: ' So from what I heard from you, in terms of the names of specific microservices, you do not do choreography, you do orchestration, in terms of the topology of EDA.'
  },
  { startTime: 1304.02, person: 'Valeri', text: ' Okay.' },
  { startTime: 1305.54, person: 'Karol', text: " You're trying to." },
  {
    startTime: 1306.94,
    person: 'Karol',
    text: " But this then comes to mind that there is actually another actor in the play, other than the conveyor belts with scanners, it's actually the automation that moves around the products, right?"
  },
  {
    startTime: 1320.88,
    person: 'Karol',
    text: ' So, like, some sort of a robotic arms in that sense?'
  },
  {
    startTime: 1326.74,
    person: 'Valeri',
    text: " Yeah, like the majority of picking currently happens via a human, a real arm, but we're already installing a robotic arm in certain warehouses to try it out, because it definitely has its own benefits."
  },
  {
    startTime: 1343.94,
    person: 'Valeri',
    text: " It doesn't need to be paid extra during weekends and out of office hours."
  },
  { startTime: 1349.5, person: 'Valeri', text: " Okay, that's fair." },
  {
    startTime: 1351.18,
    person: 'Valeri',
    text: " Yeah, but it also has limitations, obviously, not everything can be nicely and neatly picked by a robotic arm, and it's actually slower than it may be previous."
  },
  { startTime: 1361.48, person: 'Karol', text: ' Yeah, possibly.' },
  { startTime: 1362.52, person: 'Karol', text: " Yeah, that's possibly true." },
  {
    startTime: 1364.12,
    person: 'Karol',
    text: " I remember from the days when I was still in my bachelor's studies, because I studied electrical engineering, I was fascinated in the robotics labs and also in general, working with automation, so PLC controls and these kind of things."
  },
  {
    startTime: 1384.72,
    person: 'Karol',
    text: ' There was a very known company back in the day that they actually designed robotic arms for FMCG, which those robotic arms, they showcased them, like those arms could literally go in and pick up an apple and move it without leaving any trace on the apple.'
  },
  {
    startTime: 1403.3,
    person: 'Karol',
    text: ' So they were very sensitive in terms of the pressure, how much pressure they apply on the object.'
  },
  { startTime: 1408.8, person: 'Karol', text: ' So that was already quite interesting back then.' },
  {
    startTime: 1412.72,
    person: 'Karol',
    text: ' I have no idea how that industry developed, because I went into IT instead of robotics and automation.'
  },
  {
    startTime: 1419.22,
    person: 'Karol',
    text: " But I'm guessing this is the level of the automation in terms of robotic arms that you would be looking at in a warehouse so that you do not damage the goods."
  },
  { startTime: 1433.18, person: 'Karol', text: ' Exactly.' },
  {
    startTime: 1434.12,
    person: 'Karol',
    text: " Out of curiosity, in the meantime, I'll try to Google out the company and see if there are still some images of these kind of robotic arms so we can show it on screen."
  },
  {
    startTime: 1448.76,
    person: 'Karol',
    text: " But the thing I'm interested in is to get, well, you're in PICNIC for about five years now, a bit more maybe."
  },
  {
    startTime: 1462.4,
    person: 'Karol',
    text: ' What was the original problem statement to start working on such a warehouse and working on an EDA system for warehouses?'
  },
  { startTime: 1473.18, person: 'Valeri', text: ' Okay.' },
  { startTime: 1474.08, person: 'Valeri', text: ' Backstory.' },
  {
    startTime: 1474.88,
    person: 'Valeri',
    text: ' So for the first five years of PICNIC, obviously, the company was only starting.'
  },
  { startTime: 1480.66, person: 'Valeri', text: ' And all of...' },
  { startTime: 1481.78, person: 'Valeri', text: ' Oh, well, first, let me introduce the company.' },
  {
    startTime: 1484.4,
    person: 'Valeri',
    text: ' I think that not everybody from the Netherlands knows what PICNIC is about.'
  },
  { startTime: 1488.9, person: 'Karol', text: ' Some do and buy groceries for PICNIC, so...' },
  { startTime: 1492.22, person: 'Valeri', text: ' Just in case.' },
  { startTime: 1493.24, person: 'Valeri', text: " It's an online grocery store." },
  {
    startTime: 1495.42,
    person: 'Valeri',
    text: ' So what does it mean is actually that there are no physical stores you can go to and pick things yourself.'
  },
  { startTime: 1502.48, person: 'Valeri', text: " So it's always delivered to your door." },
  {
    startTime: 1504.8,
    person: 'Valeri',
    text: ' And what that means is that you extra invest into supply chain and warehousing specifically, because you want to be extra efficient and productive on that side of things.'
  },
  { startTime: 1515.92, person: 'Valeri', text: ' And we started small.' },
  { startTime: 1518.26, person: 'Valeri', text: ' Most of the warehouses were manual.' },
  {
    startTime: 1520.74,
    person: 'Valeri',
    text: ' People walking around, pushing the crates, moving things, heavy, hard, slow.'
  },
  {
    startTime: 1529.46,
    person: 'Valeri',
    text: " It's like insane numbers of how many kilometres per day single people would walk through the building and facility."
  },
  {
    startTime: 1536.04,
    person: 'Valeri',
    text: " So obviously, the first moment we got, let's say, time and capacity, let's invest into automation, because that's the next very natural state."
  },
  {
    startTime: 1546.7,
    person: 'Valeri',
    text: " And it's always been in the mind of the company and on the roadmap."
  },
  {
    startTime: 1550.68,
    person: 'Valeri',
    text: " And that's exactly what happened five years ago."
  },
  {
    startTime: 1552.9,
    person: 'Valeri',
    text: " That's when I was hired, exactly for the first automated warehouse to be built."
  },
  {
    startTime: 1557.88,
    person: 'Valeri',
    text: ' And the problem was simple, how we can be more efficient, how we can increase the UPH, basically, pick more products per unit of time.'
  },
  { startTime: 1568.36, person: 'Valeri', text: ' As simple as that.' },
  {
    startTime: 1569.84,
    person: 'Valeri',
    text: " And of course, for the first place we've been building, going straight microservices would have been insane."
  },
  {
    startTime: 1576.9,
    person: 'Valeri',
    text: " We didn't have experience whatsoever in the domain of robotics and automated processes."
  },
  {
    startTime: 1583.94,
    person: 'Valeri',
    text: ' So we decided to go small and just build a monolith side by side with the existing one.'
  },
  {
    startTime: 1590.02,
    person: 'Valeri',
    text: ' So we had one for manual processes, one for automated.'
  },
  {
    startTime: 1594.1,
    person: 'Valeri',
    text: " But we already knew that it's not going to lead for long, because there are roadmaps through business appetites, we know we would want to grow."
  },
  {
    startTime: 1603.18,
    person: 'Valeri',
    text: " So the way we approach monoliths, it's already was nicely decoupled."
  },
  {
    startTime: 1609.76,
    person: 'Valeri',
    text: " And like picking, you already heard this word, like, gel packing, that's already like isolated."
  },
  {
    startTime: 1617.2,
    person: 'Valeri',
    text: ' And even within the monoliths been talking by news of events to reach exactly this decoupling that in future should have helped us to transition towards a more distributed scalable system.'
  },
  {
    startTime: 1631.18,
    person: 'Valeri',
    text: ' And then with every new warehouse, we started splitting this big thing into smaller pieces.'
  },
  {
    startTime: 1637.72,
    person: 'Valeri',
    text: ' And it was only natural that the communication between physical and our world is event driven.'
  },
  { startTime: 1645.36, person: 'Valeri', text: " Because it's physical event driven." },
  {
    startTime: 1649.8,
    person: 'Valeri',
    text: ' But then the communication between our services also went event driven way to decouple.'
  },
  {
    startTime: 1658.48,
    person: 'Valeri',
    text: ' And also, the way we approach designing the system is that we invested a lot into the unhappy flows.'
  },
  {
    startTime: 1667.06,
    person: 'Valeri',
    text: " So basically, you have as we've been talking already today, anything can go wrong, the crate can go right instead of left, it can be stuck in the middle of the shelf, you can have a conjunction, whatever."
  },
  {
    startTime: 1686.54,
    person: 'Valeri',
    text: ' So basically, how can we make this system robust enough to deal with all those things.'
  },
  {
    startTime: 1693.34,
    person: 'Valeri',
    text: ' And, and on top of that, that, okay, different hardware providers, we want to create our warehouses from those lego pieces and kind of very natural event driven way.'
  },
  {
    startTime: 1708.78,
    person: 'Karol',
    text: " Okay, so the problem statement was that actually the, I think one of the problems in the whole statement was that actually, because it's the physical world, a lot more things can go wrong very fast."
  },
  {
    startTime: 1724.12,
    person: 'Karol',
    text: " And they're very specifically, so there's a lot more logic to be built around these kind of things."
  },
  {
    startTime: 1732.23,
    person: 'Karol',
    text: ' This pops out to me, because in general, when we, at least what I encounter when working with various types of architects, a lot of architects think, and business also, they think happy path only.'
  },
  { startTime: 1746.06, person: 'Karol', text: ' So the design is happy path.' },
  {
    startTime: 1747.88,
    person: 'Karol',
    text: ' And then when things go wrong, they start thinking about actual error handling.'
  },
  {
    startTime: 1752.48,
    person: 'Karol',
    text: " Whereas here, you can go wrong, and it can go wrong very bad, because it's physical."
  },
  { startTime: 1759.26, person: 'Valeri', text: ' Mm hmm.' },
  { startTime: 1760.2, person: 'Karol', text: ' Right.' },
  {
    startTime: 1760.8,
    person: 'Karol',
    text: " So if you would give some examples of, apart from like, a crate being stuck, or routed the wrong conveyor belt, what other like, let's say, more spectacular wrongs can go, what can actually go into very wrong in a warehouse environment?"
  },
  {
    startTime: 1782.9,
    person: 'Valeri',
    text: ' Well, the things that go wrong, we still can handle, is for instance, the whole area, just like a single piece of hardware, just switching off, and the whole area becoming unavailable.'
  },
  {
    startTime: 1798.1,
    person: 'Valeri',
    text: " So suddenly, you have to deal with the fact that now you have like, several hundreds of orders unavailable, you have to do something with that, either start anew, or reroute, like basically, disable the whole part and deal without that until it's fixed."
  },
  {
    startTime: 1815.18,
    person: 'Valeri',
    text: " And you're kind of lucky if maintenance people can fix it within like an hour or two, sometimes it's a day."
  },
  { startTime: 1822.64, person: 'Valeri', text: ' Of course, they work as fast as possible.' },
  {
    startTime: 1825.36,
    person: 'Valeri',
    text: ' But even an hour is a big loss in terms of money and efficiency.'
  },
  { startTime: 1830.48, person: 'Valeri', text: " So that's one example." },
  {
    startTime: 1832.32,
    person: 'Valeri',
    text: " The other one, that's not something actually can easily deal with is like once we had the whole, like, because of the malfunctioning, all the freezers in the warehouse went just down."
  },
  {
    startTime: 1844.06,
    person: 'Valeri',
    text: " So you can't deliver any frozen products, and it's all leaking."
  },
  {
    startTime: 1848.42,
    person: 'Valeri',
    text: " But that's not something even any software can deal with, I think."
  },
  {
    startTime: 1851.9,
    person: 'Valeri',
    text: ' So you just deal with the fact that, okay, no frozen products today, and it is what it is.'
  },
  {
    startTime: 1860.76,
    person: 'Karol',
    text: ' I mean, that must have been a horrendous site, all freezers out and not working.'
  },
  {
    startTime: 1867.7,
    person: 'Karol',
    text: ' And if you have like, because, okay, I imagined myself that you probably have like a main path going for all the conveyors to like the exit to the actual shipping.'
  },
  {
    startTime: 1878.24,
    person: 'Karol',
    text: " Correct me if I'm wrong, there's like those, you mentioned those sections, like whole sections, isolated sections that you need to reach a border with Crate to move it to elsewhere."
  },
  {
    startTime: 1891.44,
    person: 'Karol',
    text: ' So you can have an outage of a section, or you can have an outage of the probably complete thing, probably rarer due to this compartmentalisation of elements in the warehouse.'
  },
  {
    startTime: 1907.6,
    person: 'Karol',
    text: " So if you have that kind of outage of the section, let's say it takes an hour for maintenance to clear it up."
  },
  {
    startTime: 1918.38,
    person: 'Karol',
    text: ' Is there like a workaround that you put in people in to handle things to do the offloading of the workflow?'
  },
  { startTime: 1927.38, person: 'Karol', text: ' Or is that like, just stop entirely?' },
  { startTime: 1931.76, person: 'Valeri', text: ' Neither actually.' },
  {
    startTime: 1933.56,
    person: 'Valeri',
    text: ' Well, of the first stages, there were times where people have been fixing things, even like if you have a full conveyor and that cannot move because there are too many crates, someone come in and physically take off the crates to start the movement again, that happens.'
  },
  {
    startTime: 1948.46,
    person: 'Valeri',
    text: ' But what happens these days, we obviously build some automation around that.'
  },
  {
    startTime: 1953.9,
    person: 'Valeri',
    text: ' Yeah, you just register, okay, this whole piece of equipment is not available and the system deals with that.'
  },
  {
    startTime: 1961.2,
    person: 'Valeri',
    text: ' So this propagates through all the necessary components on our side.'
  },
  {
    startTime: 1964.98,
    person: 'Valeri',
    text: ' So that if routing needs to happen, we will bypass, we exclude this area.'
  },
  { startTime: 1969.56, person: 'Valeri', text: ' So now we can work without that.' },
  {
    startTime: 1972.9,
    person: 'Valeri',
    text: " Everything that's been locked in these areas and how deprioritized or prioritised, depending."
  },
  {
    startTime: 1979.78,
    person: 'Valeri',
    text: " So to the most part, the largest part, you don't need actually human intervention apart from the maintenance crew who fixes the actual hardware problem."
  },
  { startTime: 1992.38, person: 'Karol', text: ' Okay.' },
  {
    startTime: 1993.72,
    person: 'Karol',
    text: " Just to give you folks an idea how a robotic arm looks like for handling food, it's not the image I remember."
  },
  {
    startTime: 2002.38,
    person: 'Karol',
    text: " This is from some sort of a expo show, but basically it's something built like that."
  },
  {
    startTime: 2011.08,
    person: 'Karol',
    text: " So it's not like the industrial arm that people often see that they have the duty arms, but this is more of a delicate equipment."
  },
  {
    startTime: 2021,
    person: 'Karol',
    text: " It will be mostly a lot slower because of the construction and it doesn't really grip with grips that are solid, but they envelop the object like this."
  },
  {
    startTime: 2034.38,
    person: 'Karol',
    text: ' So this is what kind of equipment is used by the company Festo or designed by the company Festo.'
  },
  {
    startTime: 2041.56,
    person: 'Karol',
    text: ' And this is what I saw back in the day when I was in university.'
  },
  {
    startTime: 2046.48,
    person: 'Karol',
    text: " So probably I'm guessing similar kind of equipment in the warehouse?"
  },
  {
    startTime: 2052.44,
    person: 'Valeri',
    text: " Actually, I don't want to say it looks more advanced now."
  },
  { startTime: 2058.9, person: 'Valeri', text: ' Yes, it is.' },
  {
    startTime: 2061.34,
    person: 'Valeri',
    text: " Unfortunately, I can't share those particular pictures."
  },
  {
    startTime: 2064.34,
    person: 'Valeri',
    text: " We are testing robot arms now and the provider, so the robotic arms, even enclosed them so that it's not shown yet exactly."
  },
  { startTime: 2075.139, person: 'Karol', text: ' But it looks pretty cool.' },
  {
    startTime: 2077.84,
    person: 'Karol',
    text: " Just to put it in the frame of reference, this video that I found is actually 13 years old, so it's more advanced."
  },
  {
    startTime: 2086.08,
    person: 'Karol',
    text: ' I mean, I saw it already a lot better over years that it was like a wireframe just moving a few pieces and that just goes like that.'
  },
  {
    startTime: 2097.7,
    person: 'Karol',
    text: ' A good question around incidents again from YouTube.'
  },
  { startTime: 2101.92, person: 'Karol', text: ' So how many incidents per year?' },
  { startTime: 2104.8, person: 'Karol', text: " That's an interesting one." },
  {
    startTime: 2106.16,
    person: 'Karol',
    text: " How often do you actually get outages on certain sections or entire warehouses or what's the scope in that sense?"
  },
  {
    startTime: 2115.04,
    person: 'Karol',
    text: " Because from engineering perspective, it's an interesting question how things go wrong and how often things go wrong."
  },
  {
    startTime: 2120.86,
    person: 'Karol',
    text: ' So how often you need to compensate and then what kind of incidents are the most common ones?'
  },
  { startTime: 2128.14, person: 'Valeri', text: " Yeah, it's a good one." },
  {
    startTime: 2129.08,
    person: 'Valeri',
    text: " I don't have a good overview, to be honest, but in the very abstract terms, like the big ones is like all freezers going down."
  },
  {
    startTime: 2137.54,
    person: 'Valeri',
    text: " It's like hopefully one-time events, but of course not."
  },
  {
    startTime: 2140.88,
    person: 'Valeri',
    text: ' But that happened once so far and this scale of incidents you probably have once a year in the warehouse because they also have the regular maintenance shifts in terms of the replacement of tuning of different hardware parts.'
  },
  { startTime: 2156.06, person: 'Valeri', text: ' So in that sense, the job is being done.' },
  {
    startTime: 2160.04,
    person: 'Valeri',
    text: " More often than not, it's us who breaks the system, not the hardware actually."
  },
  { startTime: 2165.88, person: 'Karol', text: ' So the IT breaks the system, okay.' },
  { startTime: 2169.54, person: 'Karol', text: ' How does it happen though?' },
  { startTime: 2171.02, person: 'Karol', text: " It's like a faulty deployment of production?" },
  {
    startTime: 2175.16,
    person: 'Valeri',
    text: ' Yeah, I mean, as I was saying, the story like five years ago, we started with monoliths, then we started breaking it apart, but you can imagine that three years is not enough to go completely from monoliths to microservices, such transition takes longer, especially when you need to support new warehouses, new features.'
  },
  {
    startTime: 2193.38,
    person: 'Valeri',
    text: ' So we are still in the face of a migration and basically these kinds of migrations is quite challenging, especially on a side that already deals with thousands of orders per day and like serves half the country.'
  },
  { startTime: 2211.14, person: 'Karol', text: ' Okay.' },
  {
    startTime: 2212.66,
    person: 'Valeri',
    text: " That's where it gets tricky to not break at all."
  },
  {
    startTime: 2216.92,
    person: 'Valeri',
    text: ' So we do kind of a consensus with the operations on when it is safe to deploy, especially if we know the changes are risky because there are always low days, depending on the demands and like Wednesdays, for instance, are normally low.'
  },
  { startTime: 2232.34, person: 'Valeri', text: " So that's the day we used to use the system." },
  {
    startTime: 2235.44,
    person: 'Valeri',
    text: ' But of course, we think a lot of, okay, if we roll it out and something goes wrong, if we roll back, is it enough?'
  },
  {
    startTime: 2244.06,
    person: 'Valeri',
    text: ' What should be the steps to make sure we write as fast as possible?'
  },
  {
    startTime: 2249.62,
    person: 'Valeri',
    text: " The other way to break a system is actually not so long ago, I almost put down the Reddit cluster and you can imagine it's pretty central to the system."
  },
  {
    startTime: 2261.2,
    person: 'Karol',
    text: ' So it was like a beating heart of the system, basically.'
  },
  { startTime: 2265.04, person: 'Karol', text: ' Exactly.' },
  { startTime: 2266.48, person: 'Valeri', text: ' So it was like just tiny bit from crush.' },
  {
    startTime: 2269.98,
    person: 'Valeri',
    text: " So it didn't end up bad, but had all the possibilities to become one."
  },
  { startTime: 2278.24, person: 'Karol', text: ' Okay.' },
  {
    startTime: 2278.66,
    person: 'Karol',
    text: ' So first let me unpack a little on the maintenance and operations side.'
  },
  {
    startTime: 2285.18,
    person: 'Karol',
    text: " So basically I assume that it kind of handles like an old school on-premise setup where you, at least where we were working in T-Mobile, we always deployed over weekends because all the systems, given that T-Mobile as a telco company was heavy duty technological without the IT systems that the business wouldn't work."
  },
  {
    startTime: 2312.76,
    person: 'Karol',
    text: " That is the other way around with most companies because they're not relying on technology for the core of their business."
  },
  { startTime: 2319.84, person: 'Karol', text: ' Right.' },
  { startTime: 2320.84, person: 'Karol', text: ' So here again, we have the same situation.' },
  {
    startTime: 2324.08,
    person: 'Karol',
    text: ' You as in the warehouse setting, you rely on technology to actually facilitate the business, to do the business.'
  },
  {
    startTime: 2332.28,
    person: 'Karol',
    text: ' Otherwise, if the technology is not working, you have a business stop.'
  },
  {
    startTime: 2336.1,
    person: 'Karol',
    text: ' So when I was working for T-Mobile, it was like, we always deploy on a Friday evening and do all the checks and all the tests over a weekend because this is where our business is not working or on a Saturday evening, because this is where our business will not be working.'
  },
  {
    startTime: 2354.92,
    person: 'Karol',
    text: " And we're doing all the tests over a Saturday, Sunday, because these are the slow dates."
  },
  {
    startTime: 2361.82,
    person: 'Karol',
    text: ' That was the specificity of the telco industry that Monday to Friday, no changes on production allowed because this is where the heavy duty work is in office hours or in the shop working hours.'
  },
  { startTime: 2376.82, person: 'Karol', text: ' And evenings, yes, bug fixes, no problem.' },
  { startTime: 2379.74, person: 'Karol', text: ' Weekends, deploy full releases and test them.' },
  {
    startTime: 2384.74,
    person: 'Karol',
    text: " I'm guessing it's a similar setup in the warehouse, but it's actually probably not related to a weekend."
  },
  {
    startTime: 2391.84,
    person: 'Karol',
    text: " I'm guessing weekends are actually the busier parts."
  },
  { startTime: 2394.74, person: 'Valeri', text: ' Yeah.' },
  {
    startTime: 2395,
    person: 'Valeri',
    text: ' The thing is that warehouse operates almost 24 by 7.'
  },
  { startTime: 2399.34, person: 'Valeri', text: " So we don't have days when it's not working." },
  { startTime: 2403.22, person: 'Karol', text: ' Wow.' },
  { startTime: 2404.8, person: 'Karol', text: ' Okay.' },
  {
    startTime: 2405.64,
    person: 'Karol',
    text: " So if 24 by 7, then I'm guessing the middle of the night is the slowest?"
  },
  { startTime: 2409.64, person: 'Valeri', text: ' Yeah.' },
  {
    startTime: 2409.86,
    person: 'Valeri',
    text: ' Well, actually, I think actual people stop working somewhat 11 and start to shift at 5 or so.'
  },
  {
    startTime: 2416.52,
    person: 'Valeri',
    text: " So you have this gap of five hours in the night, but IT doesn't work in those hours."
  },
  { startTime: 2422.28, person: 'Valeri', text: ' So pretty much a no-go.' },
  {
    startTime: 2425.3,
    person: 'Valeri',
    text: ' So we always deploy in the middle of the operations, like when operations are running.'
  },
  { startTime: 2430.3, person: 'Valeri', text: ' So for us, the system always works.' },
  { startTime: 2433.56, person: 'Karol', text: ' Okay.' },
  {
    startTime: 2434.26,
    person: 'Karol',
    text: ' So how does that happen in terms of the deployment?'
  },
  {
    startTime: 2438.82,
    person: 'Karol',
    text: ' You get a bunch of microservices in the warehouse, right?'
  },
  { startTime: 2446.24, person: 'Valeri', text: ' Yeah.' },
  { startTime: 2446.64, person: 'Karol', text: ' You do it section by section.' },
  { startTime: 2449.88, person: 'Karol', text: " What's the logic there behind that?" },
  { startTime: 2453.56, person: 'Valeri', text: " Well, ideally, so let's put it this way." },
  {
    startTime: 2459.86,
    person: 'Valeri',
    text: ' So now we are still at the position where some of the hardware parts are deployed together.'
  },
  { startTime: 2464.56, person: 'Valeri', text: ' They are part of this monolith unit.' },
  { startTime: 2466.5, person: 'Valeri', text: ' So there you can roll out all together.' },
  { startTime: 2469.26, person: 'Valeri', text: " It's good." },
  {
    startTime: 2470.3,
    person: 'Valeri',
    text: " But again, without the orchestration part that actually relies on some of those spaces, it's also pretty much useless."
  },
  { startTime: 2477.8, person: 'Valeri', text: ' So whenever we deploy, we deploy independently.' },
  {
    startTime: 2480.84,
    person: 'Valeri',
    text: ' So each team has their own cycles, but everything is covered by Feature Flags.'
  },
  {
    startTime: 2486.82,
    person: 'Valeri',
    text: ' So only when all the services are ready and deployed, then you start turning them on and see that actual changes.'
  },
  { startTime: 2494.74, person: 'Karol', text: ' Oh, through Feature Flags.' },
  { startTime: 2498.02, person: 'Karol', text: ' Okay.' },
  {
    startTime: 2498.38,
    person: 'Karol',
    text: " So you're basically enabling on the fly, oh, we're ready and now we're going to enable everything."
  },
  { startTime: 2503.96, person: 'Karol', text: ' So you just do a switch on in that sense.' },
  { startTime: 2508.7, person: 'Valeri', text: ' Yeah.' },
  { startTime: 2509.4, person: 'Valeri', text: " But maybe I'm confusing you." },
  {
    startTime: 2511.38,
    person: 'Valeri',
    text: " So we never had so far a use case where you need to add an area on the go in the sense that, oh, now we have a new, I don't know."
  },
  { startTime: 2522.1, person: 'Valeri', text: ' Oh, well, no, we actually had these robot arms.' },
  { startTime: 2524.72, person: 'Valeri', text: " That's exactly what we had." },
  {
    startTime: 2526.12,
    person: 'Valeri',
    text: " Like when you had to add this new picking system to your already existing landscape to try out how the robot's going to pick your products."
  },
  { startTime: 2535.54, person: 'Valeri', text: " But again, it's pretty isolated." },
  { startTime: 2537.34, person: 'Valeri', text: ' You just deploy it.' },
  {
    startTime: 2539.02,
    person: 'Valeri',
    text: " And without this orchestration part that gives you the commands, it's just, okay, it gets the scans or whatever the events from the physical world are coming."
  },
  { startTime: 2548.42, person: 'Valeri', text: ' Okay, sure.' },
  {
    startTime: 2549.46,
    person: 'Valeri',
    text: ' I see you, but I have no tasks, so I do nothing.'
  },
  {
    startTime: 2552.78,
    person: 'Valeri',
    text: ' And only when this orchestration part comes in, then you, oh, now I know what to do with this thing.'
  },
  {
    startTime: 2558.4,
    person: 'Karol',
    text: ' So the feature flags would be what in the orchestration units?'
  },
  { startTime: 2563.52, person: 'Valeri', text: ' In every service.' },
  {
    startTime: 2565.6,
    person: 'Valeri',
    text: " So if you have to create a new flow that spans all the way from orchestration services to this execution hardware parts, you'll obviously need the feature flags on those sides."
  },
  {
    startTime: 2580.06,
    person: 'Valeri',
    text: " But some features that were hardware related, so you'll have them in a specific service."
  },
  {
    startTime: 2587.59,
    person: 'Karol',
    text: ' Oof, that is already quite complex in that sense.'
  },
  {
    startTime: 2593.81,
    person: 'Karol',
    text: " So in that sense, you don't have to coordinate between specific teams in terms of the actual deployment, but you coordinate only in terms of enabling that deployment to work, that part of the code."
  },
  { startTime: 2607.63, person: 'Valeri', text: ' Yes.' },
  {
    startTime: 2609.13,
    person: 'Valeri',
    text: " However, we also, I'm actually not sure which phase it's currently in, but there is this configuration service, of course, that allows you to basically have a single feature flag for all flows, but then separate services can rely on that."
  },
  { startTime: 2624.91, person: 'Valeri', text: " So you don't need to coordinate the turn on." },
  {
    startTime: 2628.65,
    person: 'Valeri',
    text: " You just reach a single flip and you're happy as long as all the deployments are in."
  },
  { startTime: 2635.25, person: 'Karol', text: ' Okay.' },
  {
    startTime: 2635.79,
    person: 'Karol',
    text: " Now we have a very curious person in YouTube on the chat there asking questions, and I relate to that question because we've just been talking about deployment."
  },
  { startTime: 2645.09, person: 'Karol', text: ' What about testing the changes?' },
  {
    startTime: 2646.75,
    person: 'Karol',
    text: ' So how do you test that code to work in production?'
  },
  { startTime: 2651.83, person: 'Karol', text: ' Your production is physical.' },
  {
    startTime: 2653.65,
    person: 'Karol',
    text: ' Is there a physical pre-prod or is there a simulation of it?'
  },
  { startTime: 2659.65, person: 'Karol', text: ' How do you test this kind of environment?' },
  { startTime: 2661.99, person: 'Karol', text: " Because that's a unique setup, right?" },
  {
    startTime: 2665.61,
    person: 'Karol',
    text: ' Because normally you just have a dev test environment, SIT, UAT, prod, right?'
  },
  { startTime: 2672.87, person: 'Karol', text: ' You just move through those stages of testing.' },
  {
    startTime: 2677.33,
    person: 'Karol',
    text: ' How do you test code for a physical environment?'
  },
  {
    startTime: 2681.69,
    person: 'Karol',
    text: ' Because I believe it would be extremely expensive to do a pre-prod on a physical environment.'
  },
  { startTime: 2687.99, person: 'Valeri', text: ' Yes.' },
  { startTime: 2688.67, person: 'Valeri', text: ' Yes.' },
  { startTime: 2689.35, person: 'Valeri', text: " And that's a waste of resources for sure." },
  {
    startTime: 2693.21,
    person: 'Valeri',
    text: ' So yeah, you basically actually already mentioned how we do this two ways.'
  },
  { startTime: 2698.89, person: 'Valeri', text: ' There is simulation and there is emulation.' },
  {
    startTime: 2702.75,
    person: 'Valeri',
    text: ' Simulation is basically something we run ourselves.'
  },
  {
    startTime: 2706.51,
    person: 'Valeri',
    text: " It's the way we see transport system, basically exempt of the contract with hardware."
  },
  { startTime: 2712.99, person: 'Valeri', text: " It's fast." },
  {
    startTime: 2714.97,
    person: 'Valeri',
    text: ' So we have tonnes of basically end-to-end tests or integration tests to test all those flows while kind of having the simulated hardware environment under the hood.'
  },
  {
    startTime: 2726.57,
    person: 'Valeri',
    text: " But you can imagine the reason for here is that that's something self-written and it can always differ from the actual environment."
  },
  {
    startTime: 2737.29,
    person: 'Valeri',
    text: ' So what we also have is very often hardware providers provide not only hardware, but the emulation of the hardware too.'
  },
  { startTime: 2746.45, person: 'Valeri', text: ' It differs per provider.' },
  {
    startTime: 2749.61,
    person: 'Valeri',
    text: ' The most fascinating one is the one that Harvard called TGW.'
  },
  {
    startTime: 2754.73,
    person: 'Valeri',
    text: ' We work together for fully automated warehouses, those three-story big buildings.'
  },
  {
    startTime: 2760.81,
    person: 'Valeri',
    text: " That's basically 3D environment of boxes moving on rail conveyors."
  },
  {
    startTime: 2766.19,
    person: 'Valeri',
    text: " And that's like a full representation of an actual site in models and responding and behaving the way an actual site would be."
  },
  {
    startTime: 2774.75,
    person: 'Valeri',
    text: " And that's something basically provides part of the contract."
  },
  { startTime: 2778.87, person: 'Valeri', text: ' And we do have an access to such environment.' },
  {
    startTime: 2782.55,
    person: 'Valeri',
    text: " So at any point of time, if our simulation team is behind the schedule and can't deliver you particular pieces of functionality, or you really want to see how fancy it is looking in 3D world, then you can do that."
  },
  { startTime: 2798.33, person: 'Valeri', text: ' Actually click around, see crates moving.' },
  {
    startTime: 2801.51,
    person: 'Karol',
    text: ' So you would hook up your microservices, your orchestrators and executors to that emulated environment, which would expose something like a mock-up services.'
  },
  {
    startTime: 2814.59,
    person: 'Karol',
    text: ' But those mock-up services, instead of executing in a physical environment, they execute in that emulation of an environment, which is like a 3D.'
  },
  {
    startTime: 2825.21,
    person: 'Valeri',
    text: ' Yeah, I can probably even quickly find you the video of that.'
  },
  { startTime: 2831.47, person: 'Valeri', text: " Yes, so it's exactly how you said that." },
  {
    startTime: 2836.51,
    person: 'Valeri',
    text: " So remember these layers, I tried to explain that you have this PLC layer, that's basically hardware itself and transport system and us."
  },
  {
    startTime: 2844.51,
    person: 'Valeri',
    text: ' So we do have a dev environment, basically our services in dev, then transport system, real transport system, and only this PLC bottom part is emulated.'
  },
  {
    startTime: 2855.15,
    person: 'Karol',
    text: ' You did prepare for us some diagrams, maybe we should actually visualise that with those diagrams in a moment, after you find that lovely video of the emulator.'
  },
  { startTime: 2865.43, person: 'Valeri', text: ' Yes, let me find the video first.' },
  {
    startTime: 2868.51,
    person: 'Karol',
    text: " Because that's, okay, that's really interesting, because this is the kind of systems we don't really get to play with as in regular IT, so to speak."
  },
  {
    startTime: 2881.63,
    person: 'Karol',
    text: " We don't get that manifestation, because of course, testing that is a problem."
  },
  { startTime: 2887.47, person: 'Karol', text: ' But also, how good are these emulators then?' },
  {
    startTime: 2890.35,
    person: 'Karol',
    text: " That's also the quality of those emulators will relate to the results in production, right?"
  },
  {
    startTime: 2894.97,
    person: 'Valeri',
    text: " Yes, and I can tell you that it's not an easy experience to work with those."
  },
  { startTime: 2899.45, person: 'Valeri', text: " It's slow, not always reliable." },
  {
    startTime: 2903.55,
    person: 'Valeri',
    text: ' We actually once cherished an ambition to have performance full-scale testing in this environment, really have it on and running.'
  },
  {
    startTime: 2912.71,
    person: 'Valeri',
    text: " Well, that's how I got the videos, because I was part of the squad that's been developing that."
  },
  {
    startTime: 2918.61,
    person: 'Valeri',
    text: " But we came to realisation that it's not something actually reliable enough to run the tests."
  },
  {
    startTime: 2927.27,
    person: 'Karol',
    text: ' Yeah, I think, well, to run in regular environments, to run performance tests or load tests, you have to have a replica of the production environment with emulated traffic of a production environment, right?'
  },
  {
    startTime: 2940.27,
    person: 'Karol',
    text: " So, it's already difficult to translate from a physical environment to a fully digital environment."
  },
  { startTime: 2950.33, person: 'Karol', text: " That's a layer of complexity there." },
  {
    startTime: 2952.51,
    person: 'Karol',
    text: " And then to emulate all the traffic, you'd have to have a very decent snapshot of what the daily traffic in the warehouse is."
  },
  { startTime: 2961.17, person: 'Valeri', text: " Yes, but that's what we've been doing." },
  {
    startTime: 2964.63,
    person: 'Valeri',
    text: ' We had a set of scripts that would create the full scale, all those thousands of orders and those crates moving around.'
  },
  {
    startTime: 2972.07,
    person: 'Valeri',
    text: " Sorry, it's like there are synonyms for those things, and I go back and forth between them."
  },
  {
    startTime: 2977.01,
    person: 'Karol',
    text: " I mean, I've dealt with automated test data generation before, but this is like a whole different level of automation to emulate such traffic in general."
  },
  { startTime: 2991.31, person: 'Karol', text: " It's like, wow." },
  {
    startTime: 2994.23,
    person: 'Karol',
    text: " You know, before hopping on the stream, I didn't even consider asking about testing this kind of scenario and what deployment looks like, but this is like, at the same time, it's very analogue to traditional IT, meaning all digital on servers, but at the same time, so different and exciting in a way to hear about that this is, there are the same principles, but executed completely differently."
  },
  {
    startTime: 3024.57,
    person: 'Valeri',
    text: " Yeah, but it's legitimately a very good question, because we as engineers, we get used to delivering something that's actually been tested and working, and here you have an absolutely new problem."
  },
  { startTime: 3036.25, person: 'Valeri', text: ' How can you actually say that?' },
  { startTime: 3038.61, person: 'Valeri', text: ' And the answer is that you never 100% sure.' },
  {
    startTime: 3042.31,
    person: 'Valeri',
    text: " So you take risks, and it's not only that, it's also, it's an integration problem."
  },
  {
    startTime: 3049.83,
    person: 'Valeri',
    text: " So if you've been told that the contract is X, but it's actually Y, and you're like, boom, and that's not something you can easily anticipate or deal with unless you roll out."
  },
  { startTime: 3061.49, person: 'Karol', text: " Yeah, that's the usual problem." },
  {
    startTime: 3066.15,
    person: 'Karol',
    text: ' Also, in regular IT systems, we agree to have a contract in a specific way, and then we realise that the contract is nowhere near such a thing.'
  },
  {
    startTime: 3076.71,
    person: 'Karol',
    text: ' And it is at times very challenging, depending on the maturity of the organisation, of course.'
  },
  {
    startTime: 3083.25,
    person: 'Karol',
    text: " But here you have a different level of complexity, because you deal with machines, and they are contracts that you do not really negotiate in a sense, because they're just supplied to you by the producer."
  },
  {
    startTime: 3096.29,
    person: 'Karol',
    text: " I don't know, is there a level of customizability to those contracts, or they're just, they just drop you a piece of hardware with a piece of software, and the definition of a contract?"
  },
  {
    startTime: 3108.61,
    person: 'Valeri',
    text: " No, well, in that sense, we've been working, and the hardware providers we've been working with are very flexible enough."
  },
  {
    startTime: 3117.09,
    person: 'Valeri',
    text: ' So the contracts are defined up front in the collaboration.'
  },
  {
    startTime: 3121.93,
    person: 'Valeri',
    text: ' So the very first contract, we drafted it together with the TGW.'
  },
  {
    startTime: 3127.39,
    person: 'Valeri',
    text: ' And then for the new hardware providers, we actually try to reuse the contracts as much as possible.'
  },
  {
    startTime: 3133.99,
    person: 'Valeri',
    text: " So it's also easier for us, one less layer of mapping, translation."
  },
  { startTime: 3138.49, person: 'Valeri', text: " And so far, it's been working well." },
  {
    startTime: 3140.91,
    person: 'Karol',
    text: ' Okay, so the hardware providers are quite flexible in customising the solutions towards your needs, then?'
  },
  { startTime: 3148.65, person: 'Valeri', text: ' Yeah.' },
  { startTime: 3149.41, person: 'Karol', text: ' Okay.' },
  { startTime: 3150.81, person: 'Karol', text: ' That lowers the complexity a bit.' },
  { startTime: 3154.83, person: 'Valeri', text: ' Yeah, you found the video, finally.' },
  { startTime: 3157.23, person: 'Valeri', text: ' It took me a bit of clicking.' },
  { startTime: 3158.19, person: 'Karol', text: ' All right, let me put that on screen, then.' },
  {
    startTime: 3161.69,
    person: 'Valeri',
    text: " Yeah, it's not very exciting, whatever I found."
  },
  { startTime: 3165.25, person: 'Valeri', text: ' But do you see those small red dots?' },
  {
    startTime: 3167.85,
    person: 'Valeri',
    text: " It's like actual boxes moving in one of the areas."
  },
  { startTime: 3171.19, person: 'Valeri', text: " Here's like a lift." },
  { startTime: 3173.17, person: 'Valeri', text: " Oh, it's me." },
  { startTime: 3174.37, person: 'Valeri', text: ' I see.' },
  {
    startTime: 3175.21,
    person: 'Valeri',
    text: " That's my intelligence, because that was one of the run tests."
  },
  { startTime: 3178.25, person: 'Valeri', text: " I'll put the pause on here." },
  {
    startTime: 3180.21,
    person: 'Valeri',
    text: " So the different colours, that's how we denote a different state of crates, whether it's empty, whether it's supposed to have stock or already picked orders."
  },
  {
    startTime: 3189.27,
    person: 'Valeri',
    text: " Behind this area, I'm not sure if you're seeing the cursor, but it's like tonnes of picking stations, and the crates are moving in there."
  },
  {
    startTime: 3198.15,
    person: 'Valeri',
    text: ' And there is an automation on our side that does the picks.'
  },
  {
    startTime: 3202.49,
    person: 'Valeri',
    text: ' And here, for instance, is a big buffer, a lot of lanes stacked on top of each other, where crates can rest between the areas, so that we have room for breathing, basically, to do the optimisation, and which crate goes where and when for the maximum throughput of the system.'
  },
  { startTime: 3222.31, person: 'Karol', text: ' Wow.' },
  {
    startTime: 3223.59,
    person: 'Karol',
    text: ' And the tracks just go on and on and on in the background.'
  },
  {
    startTime: 3227.77,
    person: 'Karol',
    text: " I see there's several layers, and the spirals basically going up and down."
  },
  {
    startTime: 3234.31,
    person: 'Valeri',
    text: " And it's actually only one-sixth of the whole warehouse, this particular one."
  },
  {
    startTime: 3242.35,
    person: 'Valeri',
    text: " Remember, I was saying that there are multiple transport systems, so the site is split into those areas, so that's only one of them, and we have one model per area."
  },
  {
    startTime: 3252.55,
    person: 'Valeri',
    text: ' So if you want to test the whole setup, you need to open 10 of them.'
  },
  {
    startTime: 3257.37,
    person: 'Karol',
    text: " So okay, that's, wow, that's a, okay, that's impressive."
  },
  {
    startTime: 3267.21,
    person: 'Karol',
    text: ' I rarely get surprised by things at scale, but this is literally overwhelming my brain at this point.'
  },
  {
    startTime: 3275.75,
    person: 'Karol',
    text: " It's like, wow, it's something I have not seen in a while."
  },
  { startTime: 3281.15, person: 'Karol', text: ' Quite interesting.' },
  { startTime: 3284.09, person: 'Karol', text: ' Wow.' },
  {
    startTime: 3286.63,
    person: 'Karol',
    text: " That's so different from what I do in my daily work as an integration specialist."
  },
  {
    startTime: 3292.15,
    person: 'Karol',
    text: " It's like, I look at the screen, neural boards, specs in the dock, and then code as an, you know, integration flows."
  },
  {
    startTime: 3303.07,
    person: 'Karol',
    text: " Looking at a simulation of a warehouse, it's like, I don't know where I would have to be to just encounter that in that sense."
  },
  {
    startTime: 3312.73,
    person: 'Valeri',
    text: " Yeah, that's one of the factors why I stayed for all the five years in warehouse systems and didn't even breach the boundaries of the domain at first because it was so many interesting things to indulge in."
  },
  { startTime: 3325.91, person: 'Valeri', text: ' So like, okay, I still have a lot of fun.' },
  {
    startTime: 3329.21,
    person: 'Valeri',
    text: " Then at some point, I got curious in more things, but still, I, it's like, you know, it's like a baby that I've seen from the inception, and I was in its teenage era."
  },
  { startTime: 3341.61, person: 'Karol', text: ' Aw.' },
  { startTime: 3342.85, person: 'Karol', text: ' But I do get that.' },
  {
    startTime: 3344.61,
    person: 'Karol',
    text: " I remember, like, working for a few years in a singular company, and when you see how your work progresses and changes how the company operates and how it influences the business, it's something really, really amazing, and the satisfaction coming from that is, wow."
  },
  {
    startTime: 3366.23,
    person: 'Karol',
    text: " At a certain point, it's choosing either you want new experiences in the variety of experiences, or you want to experience that kind of sensation of, you know, accomplishment, that satisfaction."
  },
  {
    startTime: 3376.43,
    person: 'Karol',
    text: " I don't know which is better, and probably it depends on where you are in life, which do you want to, like, expand your knowledge, or do you want to, like, dive into deep into that specific field?"
  },
  {
    startTime: 3386.83,
    person: 'Karol',
    text: ' Both can be very quite satisfying, but I absolutely get how much satisfaction you get from actually seeing these things work.'
  },
  { startTime: 3394.27, person: 'Karol', text: " It's like, wow, I would love it, specifically." },
  {
    startTime: 3400.19,
    person: 'Karol',
    text: ' Do you want to show the complexity of such an endeavour in diagrams, because I see you already have them ready?'
  },
  { startTime: 3406.87, person: 'Karol', text: " All right, let's put it on screen." },
  { startTime: 3410.77, person: 'Valeri', text: ' So, okay.' },
  { startTime: 3412.81, person: 'Valeri', text: ' This is the diagram built by us.' },
  {
    startTime: 3416.19,
    person: 'Valeri',
    text: " It's basically a representation of a physical world"
  },
  {
    startTime: 3419.25,
    person: 'Valeri',
    text: ' of one of the fully automated warehouses in Germany, and basically, every colourful box'
  },
  {
    startTime: 3426.9,
    person: 'Valeri',
    text: ' is a system, is a service, this executor service, and this graph actually shows you all the'
  },
  {
    startTime: 3432.51,
    person: 'Valeri',
    text: " possible routings between systems, not within them, only between, and remember this thing I've"
  },
  {
    startTime: 3439.09,
    person: 'Valeri',
    text: ' been trying to explain on fingers that you are in this blue area, which is the whole set of picking'
  },
  {
    startTime: 3447.03,
    person: 'Valeri',
    text: ' stations, and you finished your picking, so you basically want to dispatch the code and deliver it'
  },
  { startTime: 3452.67, person: 'Valeri', text: ' all the way here.' },
  {
    startTime: 3454.93,
    person: 'Valeri',
    text: " You can't send a single command saying just go straight, even though there are a multitude of paths leading here."
  },
  {
    startTime: 3462.33,
    person: 'Valeri',
    text: ' You have to deliver to the exit of this blue system, then make it routed within the red one, and etcétera, etcétera, and cross all those fancy colourful blocks in order to get here.'
  },
  {
    startTime: 3477.05,
    person: 'Valeri',
    text: " So, and that's, yeah, I think it's like 80-something in this particular site, all those execution systems, but then, of course, you add on top the orchestration part, and you get a bit more, and that's the scale and complexity of such system."
  },
  {
    startTime: 3493.91,
    person: 'Valeri',
    text: " I think I also have, yeah, that's, for instance, a station, just to show some cool conveyors, so it also becomes more concrete and physical, and here, on the left, you will typically see one crate, on the right, the other, and a person standing in front of that, and putting toilet paper from one to another, for instance."
  },
  {
    startTime: 3515.45,
    person: 'Karol',
    text: " So that's the not exactly automated warehouse, in that sense, that's with manual labour involved, right?"
  },
  {
    startTime: 3522.25,
    person: 'Valeri',
    text: ' Okay, so how we do distinguish it at this point?'
  },
  {
    startTime: 3525.73,
    person: 'Valeri',
    text: ' In every warehouse we have, there is manual labour.'
  },
  {
    startTime: 3529.79,
    person: 'Valeri',
    text: " The question is to what degree, and what we call automated means it's like real minimum of what was possible at the point we've been building, so now, of course, with the robotic coming into play, you minimise that even further, but there are always humans who at least will need to work the operation of the system, if not doing the stuff themselves manually, but there are always humans."
  },
  {
    startTime: 3555.25,
    person: 'Karol',
    text: ' Yeah, of course, you always also need maintenance, you always will need somebody to get the crate unstuck, etc.'
  },
  {
    startTime: 3562.77,
    person: 'Karol',
    text: " We're not replaceable by automation, unless we start building bots that are actually doing that job, but I don't think that's feasible in the near future, to be able to build such mechanisms to do that kind of labour."
  },
  {
    startTime: 3579.23,
    person: 'Valeri',
    text: ' Yeah, another example, this is the, I think, two or three storey high storage for pallets.'
  },
  {
    startTime: 3588.01,
    person: 'Valeri',
    text: " You've probably seen plenty if you go to a big store like Ikea, or whatever they have, like those pallets, crammed with goods, and that's basically a huge lift that can pick up those pallets and store them automatically, so that you don't need to do that with those small cars."
  },
  { startTime: 3608.03, person: 'Valeri', text: ' Fully automated in that sense.' },
  {
    startTime: 3611.25,
    person: 'Karol',
    text: " Yeah, but it's a little bit different than Ikea in that sense, because in Ikea, while you have those very high storage units, the clients actually access only the lowest parts, the other parts are not accessible, and you need a forklift for that to get into there and just move the merchandise down to the level that is accessible, right?"
  },
  {
    startTime: 3632.05,
    person: 'Karol',
    text: ' While here, the whole thing is working constantly, 24-7, right?'
  },
  {
    startTime: 3636.73,
    person: 'Valeri',
    text: " Yeah, exactly, and you're also optimising the background, so of course you put the most urgent stuff to the bottom, where it's easier and faster to retrieve."
  },
  {
    startTime: 3647.59,
    person: 'Valeri',
    text: " It's actually also, this one maybe not, the other storages also have depth, so you can have things, one at the back and one in front, so if you want to access something from the back, you have to pick up the front, move it somewhere, and only then take the back."
  },
  {
    startTime: 3664.99,
    person: 'Valeri',
    text: " This particular one, I don't remember, but that's one of the services we do have that optimises for that storage, choosing what to store where, reshuffling, so that in the fastest possible moment, you get whatever you need."
  },
  {
    startTime: 3678.39,
    person: 'Karol',
    text: ' So basically, you need to really coordinate and put things and be aware that there are things in those shelves, so always track the state of the actual storage.'
  },
  { startTime: 3691.69, person: 'Valeri', text: " Yeah, it's also, things can fail." },
  {
    startTime: 3694.77,
    person: 'Valeri',
    text: " You ask this fancy lift, please store my pallet, crate, whatever, at this position, and it's like, yeah, yeah, sure, but then suddenly, oh, your crate appeared at a different place, and you're like, what?"
  },
  { startTime: 3706.91, person: 'Valeri', text: ' Why?' },
  {
    startTime: 3707.75,
    person: 'Valeri',
    text: " But you have to deal with that, or it's like, no, I can't do anything, so you're okay, please retrieve it back and start all over, or whatever the mechanisms are."
  },
  {
    startTime: 3716.49,
    person: 'Karol',
    text: ' And how often does these kind of errors happen that the crate is misplaced, or you need to like, start again?'
  },
  {
    startTime: 3724.27,
    person: 'Valeri',
    text: ' In this particular case, not often, but you can take this piece, copy-paste it like 20 times, and you will get the back of the building.'
  },
  {
    startTime: 3734.27,
    person: 'Valeri',
    text: " It's the storage with all those crates, like 50k per a single piece, so it would be like 150k crates or positions per warehouse, somewhat, give or take, so it actually happens quite often, so thousands of times per day, so the whole storage area is built around these unhappy flows, so that you can deal with them."
  },
  {
    startTime: 3765.44,
    person: 'Karol',
    text: " Okay, so just from that perspective, I understand why you do orchestration instead of choreography, because if you're dealing with so many unhappy flows that you need to compensate for, it's always better to have that state in an orchestrator that manages all states of different executors, rather than have it choreographed, because choreography is a lot more complex in error handling."
  },
  {
    startTime: 3788.38,
    person: 'Valeri',
    text: " It's not actually like that, so the logic of all the errors related to storage is like 95% isolated in the storage service, or whatever it's called."
  },
  {
    startTime: 3800.72,
    person: 'Valeri',
    text: " It's pretty down to physical, but of course, you still have a bit of a trickle back to the orchestrator if something you are trying to store has a high impact on the business flow."
  },
  {
    startTime: 3814.34,
    person: 'Valeri',
    text: ' For instance, you want to store a crate for an order of some customer that is really urgent, that needs to be sent out of the warehouse in the next 30 minutes, or actually not store, retrieve, and if something goes wrong, orchestrator needs to know, so that it can take an executive decision of what do we do for this particular customer, right?'
  },
  {
    startTime: 3838.72,
    person: 'Valeri',
    text: ' In that sense, there is a bit of a trickling, but orchestrator is largely unaware of the hardware world.'
  },
  {
    startTime: 3846.76,
    person: 'Valeri',
    text: " Actually, not largely, it's completely unaware of the hardware world."
  },
  {
    startTime: 3850.72,
    person: 'Karol',
    text: ' Okay, so majority of the error handling is actually in the executor for that specific area, or piece of an area.'
  },
  {
    startTime: 3859.48,
    person: 'Valeri',
    text: ' That actually depends on what kind of errors are we talking about, because there are a multitude of errors.'
  },
  {
    startTime: 3866.08,
    person: 'Valeri',
    text: " There are those that are hardware-driven, and some of them can be solved locally, then you're in a good state."
  },
  {
    startTime: 3872.52,
    person: 'Valeri',
    text: ' Some of them have to trickle all the way up, so that you get this high-level command, what the hell do I do with that?'
  },
  { startTime: 3879.2, person: 'Karol', text: ' Okay.' },
  {
    startTime: 3879.76,
    person: 'Valeri',
    text: ' And some of them are not hardware-related, but process-related.'
  },
  {
    startTime: 3885.32,
    person: 'Valeri',
    text: " Imagine, you're standing in front of a station, and the screen shows you, please pick five bananas to the crate on the right, but you're like, but there are only three."
  },
  { startTime: 3896.46, person: 'Valeri', text: ' Oh.' },
  {
    startTime: 3896.92,
    person: 'Valeri',
    text: " Yeah, and that is something you have to deal with, because now you apparently have less stock than you assume there is, or you're looking inside the crate, oh, the milk spilled, and it's not safe to send back on the conveyor, so you go into the rework flow, how do I fix that?"
  },
  { startTime: 3914.72, person: 'Valeri', text: ' So, for that, you have also the workstations.' },
  {
    startTime: 3917.92,
    person: 'Valeri',
    text: " Everything that can be fixed there goes there, apart from the spilled milk, because that's not safe."
  },
  {
    startTime: 3924.44,
    person: 'Valeri',
    text: " And these kind of unhappy flows, they go through the whole system, because executors, executive systems are involved, orchestrators are involved, because that's part of the business flow."
  },
  { startTime: 3937.7, person: 'Karol', text: ' Okay.' },
  {
    startTime: 3938.82,
    person: 'Karol',
    text: ' So, from a perspective of events, and the workflow in such an environment, how do you identify these kind of errors, like spilled milk, or insufficient bananas?'
  },
  { startTime: 3952.72, person: 'Valeri', text: ' Two types.' },
  {
    startTime: 3953.8,
    person: 'Valeri',
    text: ' Some of them are done by scanners, or actually specific pieces of equipment.'
  },
  {
    startTime: 3960.84,
    person: 'Valeri',
    text: " You can do the height check to know how high the crate is, because if it's too high, it's not safe to send, because it will start bumping into things."
  },
  {
    startTime: 3971.72,
    person: 'Valeri',
    text: " That's automatically done, creates a physical check."
  },
  { startTime: 3974.88, person: 'Valeri', text: ' Same goes to weight.' },
  {
    startTime: 3975.88,
    person: 'Valeri',
    text: " You have a certain limitation of how heavy the stuff can be, so you can simply weigh it down and decide whether it's safe or not."
  },
  {
    startTime: 3983.92,
    person: 'Valeri',
    text: " But types of like, oh, I have less stock than I thought, or it's something that is normally reported by humans at the stations who do the picking."
  },
  {
    startTime: 3992.74,
    person: 'Valeri',
    text: ' However, the new thinking is also like, we do trial the visions of cameras that look into the crate and do the counting of stock, checking, oh, you actually have all those five bananas, so whatever is countable.'
  },
  { startTime: 4012, person: 'Karol', text: ' Okay.' },
  {
    startTime: 4012.54,
    person: 'Karol',
    text: ' Can you move to the next picture, just to show our viewers the scale of the endeavour here?'
  },
  { startTime: 4020.6, person: 'Karol', text: ' Yes.' },
  {
    startTime: 4020.98,
    person: 'Valeri',
    text: " That's actually a very small part of conveyors."
  },
  {
    startTime: 4024.84,
    person: 'Valeri',
    text: " That's how they are stacked, and that's only one floor of the building."
  },
  {
    startTime: 4030.5,
    person: 'Valeri',
    text: " Oh, I don't remember the specific one, but I think there are more."
  },
  {
    startTime: 4034.82,
    person: 'Valeri',
    text: ' At the bottom, there are stations, actually, where actual humans are, and then the top is just more layers of the belts where the crates travel to different parts of the system.'
  },
  {
    startTime: 4047.08,
    person: 'Valeri',
    text: " So, that's where I've spent an insane amount of hours testing the system."
  },
  {
    startTime: 4052.6,
    person: 'Karol',
    text: ' So, basically, the whole warehouse in terms of conveyors are divided into layers that actually have different functions in that sense?'
  },
  { startTime: 4062.32, person: 'Valeri', text: ' Yeah.' },
  { startTime: 4063.02, person: 'Valeri', text: ' Well, it depends, again, on the site.' },
  {
    startTime: 4067.44,
    person: 'Valeri',
    text: ' Our very first one was a bit of a, you know, first babies are always the most interesting ones, and there we had a ready building already, like all the walls and the roof, so we tried to squeeze the equipment in.'
  },
  { startTime: 4083.46, person: 'Valeri', text: ' It was hard.' },
  {
    startTime: 4084.38,
    person: 'Valeri',
    text: ' There, you had to put some imagination, not us, but the hardware providers to squeeze all those conveyors so that everything that has been planned fits.'
  },
  {
    startTime: 4094.24,
    person: 'Valeri',
    text: ' For this particular site, we took the different approach.'
  },
  {
    startTime: 4098.359,
    person: 'Valeri',
    text: " Basically, building is built for the project, not the project's questions as existing buildings."
  },
  {
    startTime: 4104.8,
    person: 'Karol',
    text: ' So, you first design the actual conveyors and whatnot, and then build the building around it, at least in the design, and then build the building and place the conveyors in as per specification.'
  },
  { startTime: 4117.02, person: 'Valeri', text: ' Yeah.' },
  {
    startTime: 4117.279,
    person: 'Valeri',
    text: " So, you have a space, so now you don't need to solve this puzzle."
  },
  {
    startTime: 4120.74,
    person: 'Valeri',
    text: ' How do I plan this piece so that it still fits?'
  },
  {
    startTime: 4123.88,
    person: 'Valeri',
    text: " Because, actually, there is a column in there, and I didn't think about that column."
  },
  { startTime: 4131.96, person: 'Karol', text: ' This reminds me of me playing Satisfactory.' },
  {
    startTime: 4136.939,
    person: 'Karol',
    text: " It's basically a game about conveyor belts and production elements and moving all the pieces around."
  },
  { startTime: 4143.96, person: 'Karol', text: " It's kind of the same way." },
  {
    startTime: 4145.14,
    person: 'Karol',
    text: ' You first build the building and then start placing conveyors inside.'
  },
  { startTime: 4148.319, person: 'Karol', text: " It's like, huh, this doesn't fit." },
  { startTime: 4152.2, person: 'Karol', text: " It's pretty much it." },
  {
    startTime: 4153.52,
    person: 'Karol',
    text: ' If you ever want to emulate this for your own, just play Satisfactory.'
  },
  {
    startTime: 4157.66,
    person: 'Valeri',
    text: " I think that's already been done for one of the sites."
  },
  {
    startTime: 4161.12,
    person: 'Valeri',
    text: " Engineers couldn't resist this possibility, so I believe it already exists."
  },
  { startTime: 4166.1, person: 'Karol', text: ' Oh, wow.' },
  { startTime: 4170.34, person: 'Karol', text: ' That must be quite a puzzle to solve.' },
  {
    startTime: 4175.3,
    person: 'Karol',
    text: " It's basically a physical puzzle, how to place all of this together."
  },
  {
    startTime: 4179.68,
    person: 'Karol',
    text: ' If you would try to say, what is the amount of people that are needed to work on this to solve this in terms of lining this up in physical space as in conveyors, then the electrical, then all the placement of paths so that people can move around safely?'
  },
  {
    startTime: 4205.24,
    person: 'Karol',
    text: ' How many people work on the design of such a thing?'
  },
  { startTime: 4209.8, person: 'Valeri', text: " I actually don't know." },
  { startTime: 4211.6, person: 'Valeri', text: ' I have no idea.' },
  {
    startTime: 4213.46,
    person: 'Valeri',
    text: " I can't imagine how many people, physical business crew, their driver go around and collect thousands of them because the site is huge."
  },
  {
    startTime: 4223.94,
    person: 'Valeri',
    text: " But in terms of the design, you don't need that many, actually."
  },
  { startTime: 4229.8, person: 'Karol', text: ' Quite possibly.' },
  {
    startTime: 4231.78,
    person: 'Karol',
    text: " It's like a big puzzle box in that sense, just to weave that all in, plant that in, and those layers of different aspects."
  },
  {
    startTime: 4241.48,
    person: 'Karol',
    text: ' I remember from studies in terms of electrical engineering, we got blueprints of a building and we were supposed to place an electrical design into it.'
  },
  {
    startTime: 4253.36,
    person: 'Karol',
    text: ' And then you layer on top of that all the waterworks.'
  },
  {
    startTime: 4258.54,
    person: 'Karol',
    text: " And it's layers of layers of layers that need to cooperate with one another because you cannot place the electrical in the same spot as the water going, right?"
  },
  {
    startTime: 4269.94,
    person: 'Karol',
    text: " It's a big puzzle box of collaboration between different experts."
  },
  {
    startTime: 4276.3,
    person: 'Karol',
    text: " Here it is mostly mechanical and electrical, but still, it's..."
  },
  { startTime: 4281.2, person: 'Valeri', text: ' That reminds me of one of my favourite stories.' },
  {
    startTime: 4286.94,
    person: 'Valeri',
    text: " I didn't have to deal a lot with the people who assemble the sites because normally when the engineers go in there, it's already mostly assembled and we already start testing."
  },
  {
    startTime: 4299.46,
    person: 'Valeri',
    text: ' But then I just moved to the Netherlands after COVID exactly for our first warehouse for basically sightseeing.'
  },
  { startTime: 4308.96, person: 'Valeri', text: " That's where I'm going to be working on." },
  {
    startTime: 4310.88,
    person: 'Valeri',
    text: " And so I'm walking around with these big starry eyes."
  },
  { startTime: 4314.48, person: 'Valeri', text: " I'm like, wow, it's so cool." },
  { startTime: 4316.26, person: 'Valeri', text: ' And on the floor, there are two guys sitting.' },
  {
    startTime: 4320.16,
    person: 'Valeri',
    text: ' You can imagine the type of man who did construction, tough build, quite crazy age, with the screwdrivers.'
  },
  {
    startTime: 4329,
    person: 'Valeri',
    text: " And it happened so that they'd been speaking Russian."
  },
  {
    startTime: 4332.3,
    person: 'Valeri',
    text: " And of course, they didn't know that I do speak Russian."
  },
  {
    startTime: 4334.42,
    person: 'Valeri',
    text: ' And then they look at us and like, what are all those kids are doing in here?'
  },
  {
    startTime: 4342.56,
    person: 'Valeri',
    text: " And I'm thinking, oh my God, these kids are going to build a system around that."
  },
  {
    startTime: 4348.38,
    person: 'Karol',
    text: " That's what kids do nowadays, build systems, right?"
  },
  { startTime: 4356.12, person: 'Karol', text: ' Wow.' },
  { startTime: 4356.46, person: 'Karol', text: " That's something." },
  { startTime: 4358.86, person: 'Karol', text: " It's a completely different scale." },
  { startTime: 4361.14, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 4364.62,
    person: 'Karol',
    text: " Looking at a bit of a skeleton of our conversation, you want to walk us through the actual implementation of what's the logic behind implementing like more in details."
  },
  {
    startTime: 4380,
    person: 'Karol',
    text: " We already touched upon the orchestrators and executors I think it's worth to give it the proper visual overview and just do a quick walkthrough because that's probably a bit of a unique setup in terms of VDA and the cooperation of different classes of software."
  },
  { startTime: 4401.14, person: 'Valeri', text: ' Yeah.' },
  {
    startTime: 4401.76,
    person: 'Valeri',
    text: " Well, I definitely can accompany those few diagrams I prepared, but that's going to be mostly a rehearsal of what's been already mentioned."
  },
  { startTime: 4411.94, person: 'Valeri', text: ' All right.' },
  { startTime: 4412.68, person: 'Valeri', text: " So that's what I've been saying." },
  {
    startTime: 4415.4,
    person: 'Valeri',
    text: " So there's two bottom layers is something you already have provided for us and we build this kind of top pile of the pyramid."
  },
  {
    startTime: 4422.46,
    person: 'Valeri',
    text: ' And then this top pile is split naturally in those executors, like beginning and dispatching something you hopefully already heard.'
  },
  {
    startTime: 4431.1,
    person: 'Valeri',
    text: " There's basically processes that's very tied to the machinery and this fancy colours actually already show that we have at least three different types of these systems depending on hardware in implementation and God knows what."
  },
  {
    startTime: 4446.08,
    person: 'Valeri',
    text: ' And here the events going back and forth is basically transport system tells us that this can happen.'
  },
  {
    startTime: 4451.98,
    person: 'Valeri',
    text: ' And we most often say, hey, please transport this particular crate somewhere.'
  },
  { startTime: 4458.12, person: 'Valeri', text: ' This type of communication we expect here.' },
  {
    startTime: 4460.76,
    person: 'Valeri',
    text: ' But of course, there are many more errors exactly for all the unhappy flows that might happen.'
  },
  { startTime: 4465.92, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 4466.58,
    person: 'Karol',
    text: ' So these are basically machine events, events coming from specific machines like scanners.'
  },
  { startTime: 4472.9, person: 'Valeri', text: ' Exactly.' },
  { startTime: 4473.58, person: 'Valeri', text: ' Scanners, one of them.' },
  {
    startTime: 4474.98,
    person: 'Valeri',
    text: " Then you also have those scale, weigh scales and height checks, the whole new separate world of this big storage we've been looking at because it has very intricate contract because there are like aisles, levels, positions, and it's not that just transport there."
  },
  { startTime: 4493.34, person: 'Valeri', text: ' You have it in multiple stages.' },
  { startTime: 4494.98, person: 'Valeri', text: ' So a lot of things can happen in between.' },
  {
    startTime: 4499.04,
    person: 'Valeri',
    text: " It's all happens at this layer between the transport system and our executor systems."
  },
  {
    startTime: 4505.16,
    person: 'Valeri',
    text: " And then on top of that, we do have orchestrators that don't know anything about physical worlds in terms of scans, crates, etcétera."
  },
  { startTime: 4515.78, person: 'Valeri', text: " It's of no importance to them." },
  {
    startTime: 4518.98,
    person: 'Valeri',
    text: " That's the way we abstract things away, but they deal with the higher level terms of basically processes, how to route things, how to do the full order from the picking to dispatching."
  },
  {
    startTime: 4531.72,
    person: 'Valeri',
    text: ' They send the commands that executors would take and do something about, and then report the status, hopefully completed in most cases, but of course, whatever, nothing happens.'
  },
  {
    startTime: 4546.48,
    person: 'Karol',
    text: ' So answering the one question that was in chat earlier in terms of Lego blocks and abstraction and plug and play.'
  },
  {
    startTime: 4555,
    person: 'Karol',
    text: ' So looking at this, it means that executors know about the physical world and their adapters towards the machines that are actually in the physical world in the warehouse.'
  },
  {
    startTime: 4566.58,
    person: 'Karol',
    text: ' And then orchestrators are more generic, completely abstracted away from the physical world and they plug and play with the executors.'
  },
  {
    startTime: 4575.38,
    person: 'Karol',
    text: ' Well, plug and play probably with small adaptations, smaller than the executors then.'
  },
  { startTime: 4581.48, person: 'Karol', text: ' Yeah, indeed.' },
  { startTime: 4584.96, person: 'Karol', text: ' Okay.' },
  {
    startTime: 4586.9,
    person: 'Karol',
    text: ' And so the orchestrators, they basically orchestrate, oversee the actions of multiple executors.'
  },
  { startTime: 4594.2, person: 'Karol', text: ' So you have what?' },
  {
    startTime: 4595.84,
    person: 'Karol',
    text: ' For a zone, you would have multiple executors and an orchestrator?'
  },
  { startTime: 4602.02, person: 'Karol', text: " What's the dispersal there?" },
  {
    startTime: 4606,
    person: 'Valeri',
    text: " You always have multiple orchestrators because that's basically your business flow."
  },
  { startTime: 4611.4, person: 'Valeri', text: ' So bounded context isolated somewhat.' },
  {
    startTime: 4614.18,
    person: 'Valeri',
    text: ' So what we have here is the routing one has a sole purpose of solving the problem, how to deliver those across those big physical areas.'
  },
  {
    startTime: 4625.86,
    person: 'Valeri',
    text: ' So not from A to B in the sense of on the conveyor belt, but from A to B in terms of the executors, how do I go from picking to dispatching all the way?'
  },
  {
    startTime: 4637,
    person: 'Valeri',
    text: ' And it will solve all the problems like how many hops do I need to make?'
  },
  { startTime: 4641.3, person: 'Valeri', text: ' What is the most efficient path?' },
  {
    startTime: 4643.72,
    person: 'Valeri',
    text: ' And efficient might mean that they do the few hops or that actually part of the warehouse is combusted or so loaded that I would rather go around because it would be a more efficient way to do that.'
  },
  {
    startTime: 4656.82,
    person: 'Valeri',
    text: ' But basically controlling traffic while releasing here is solely responsible for the journey over a customer order through the warehouse because the goal of the whole warehouse is basically assemble the order that has been ordered, right?'
  },
  {
    startTime: 4674.9,
    person: 'Valeri',
    text: ' How can I get this order fully picked if needed, cooled and dispatched?'
  },
  {
    startTime: 4682.1,
    person: 'Valeri',
    text: ' And in between, if something goes wrong, how do I get to this dispatching state through the rework processes we have?'
  },
  {
    startTime: 4690.43,
    person: 'Valeri',
    text: " So normally you would expect that most of the orchestrators are present for all the sites while executors depending on the hardware or whether it's actually manual or automated warehouse might be present just as upset for some form or not present at all."
  },
  {
    startTime: 4708.19,
    person: 'Karol',
    text: ' So if you have a specific level of automation that would involve then that we have certain signals about packing inputted by a human or in the near future inputted by the machine, that the machine completed packing and the conveyor can move on with the box.'
  },
  {
    startTime: 4728.97,
    person: 'Karol',
    text: ' And so these would be like types of events that also happen, right?'
  },
  {
    startTime: 4733.37,
    person: 'Karol',
    text: ' The person packing marks that this has been packed through whatever means of a machinery, like a scanner or something like that.'
  },
  { startTime: 4744.29, person: 'Karol', text: ' And then the equipment.' },
  { startTime: 4746.35, person: 'Valeri', text: " Yeah, that's all the events." },
  {
    startTime: 4747.91,
    person: 'Valeri',
    text: ' So basically the interfaces, we try to keep the interfaces the same.'
  },
  {
    startTime: 4753.71,
    person: 'Valeri',
    text: ' So be it a human or a robot, they will eventually call an endpoint in the picking system saying that what has been done and then the picking system will already propagate further.'
  },
  {
    startTime: 4765.99,
    person: 'Valeri',
    text: " But in terms of a higher level, like for this order, that's the result I've got in accordance to what was the command and then do whatever now is needed with this because I'm kind of done with that."
  },
  {
    startTime: 4780.21,
    person: 'Karol',
    text: " So you're basically also managing the state of the box in that sense."
  },
  { startTime: 4788.21, person: 'Karol', text: ' Okay.' },
  {
    startTime: 4788.77,
    person: 'Karol',
    text: " I'm trying to grasp the amount of complexity that goes into just like a single box and it's quite a lot there already."
  },
  { startTime: 4800.51, person: 'Valeri', text: ' Yeah.' },
  {
    startTime: 4801.03,
    person: 'Valeri',
    text: " And now imagine that you've started with a single monolith and it's been already there."
  },
  {
    startTime: 4806.57,
    person: 'Valeri',
    text: " So we don't know this variability of different hardware providers and sites yet, but already on that stage, we figured that, okay, it's not going to be simple."
  },
  { startTime: 4816.75, person: 'Valeri', text: " It's not going to be beautiful straight away." },
  {
    startTime: 4818.47,
    person: 'Valeri',
    text: " So let's not shoot ourselves and go in microservices straight."
  },
  {
    startTime: 4822.53,
    person: 'Valeri',
    text: " Let's first learn about the main as much as we can, but we already try to decouple as much as possible."
  },
  {
    startTime: 4831.61,
    person: 'Valeri',
    text: " So that even on the monolith level, dispatching system never knew anything about picking system because in the real world, they don't need to know about each other."
  },
  { startTime: 4841.23, person: 'Karol', text: ' Yeah.' },
  { startTime: 4841.93, person: 'Karol', text: " They don't have to be aware." },
  {
    startTime: 4843.37,
    person: 'Karol',
    text: ' They just have transition elements that go from one to another.'
  },
  { startTime: 4849.19, person: 'Karol', text: ' Right.' },
  { startTime: 4850.23, person: 'Karol', text: ' So how does that transition happen?' },
  { startTime: 4855.71, person: 'Karol', text: ' You do have a few diagrams in that, right?' },
  {
    startTime: 4860.01,
    person: 'Valeri',
    text: " The laptop of the diagrams actually show the routing problem, but that's, we already kind of covered multiple times."
  },
  { startTime: 4866.11, person: 'Valeri', text: " So I'm not sure." },
  { startTime: 4867.29, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 4867.69,
    person: 'Karol',
    text: " Let's just see them for the sake of visuals because they interact with people, right?"
  },
  {
    startTime: 4874.29,
    person: 'Valeri',
    text: ' So what the storyline I was preparing while drawing those diagrams.'
  },
  {
    startTime: 4878.57,
    person: 'Valeri',
    text: ' So all the familiar kind of names, hopefully by now you have picking, dispatching, and you want to go all the way from picking to dispatching, but in between you have other systems.'
  },
  { startTime: 4889.05, person: 'Valeri', text: ' I call them buffers.' },
  {
    startTime: 4890.11,
    person: 'Valeri',
    text: ' It might be conveyor belts, straight, can be looped, can be other systems, God knows what.'
  },
  {
    startTime: 4897.89,
    person: 'Valeri',
    text: ' So the dark dots are the exits, white dots are the entries.'
  },
  {
    startTime: 4903.11,
    person: 'Valeri',
    text: " So at this particular diagram, it's kind of looks simple, right?"
  },
  {
    startTime: 4906.43,
    person: 'Valeri',
    text: ' You just do those three hops and you are happy.'
  },
  {
    startTime: 4909.39,
    person: 'Valeri',
    text: ' However, then you figure out that actually one system can have multiple exits and you have multiple routes.'
  },
  {
    startTime: 4916.47,
    person: 'Valeri',
    text: ' So now you need to decide how each route to take.'
  },
  {
    startTime: 4919.87,
    person: 'Valeri',
    text: ' And what if this particular route is actually super busy because there is a traffic jam there.'
  },
  {
    startTime: 4926.59,
    person: 'Valeri',
    text: " And that's how you ended up with this routing service, one of our interesting babies."
  },
  {
    startTime: 4932.07,
    person: 'Valeri',
    text: " And here, what's interesting in terms of communication is, so it gets the command that the dispatching system wants the crate."
  },
  {
    startTime: 4943.83,
    person: 'Valeri',
    text: ' But before it can send the next command to picking saying, hey, actually give away the crate, it has to figure out which route to take.'
  },
  {
    startTime: 4955.31,
    person: 'Valeri',
    text: ' And for that, it has to figure out whether the systems in between are available and what state they are in.'
  },
  {
    startTime: 4961.61,
    person: 'Valeri',
    text: ' But not in the sense like, oh, give me all your state.'
  },
  { startTime: 4965.13, person: 'Valeri', text: " It's rather, hey, I have a request for you." },
  { startTime: 4967.73, person: 'Valeri', text: " It's like this number two to all of them." },
  {
    startTime: 4972.27,
    person: 'Valeri',
    text: " And then optimistically, you expect a response saying, yes, I've got you, everything is fine."
  },
  {
    startTime: 4977.91,
    person: 'Valeri',
    text: " But then in case one of the responses doesn't come, it might be lost, system is not available, then you deal with this ambiguity."
  },
  {
    startTime: 4986.91,
    person: 'Valeri',
    text: ' Okay, apparently the system can be considered unavailable.'
  },
  {
    startTime: 4989.75,
    person: 'Valeri',
    text: ' So I deal with whatever I have, this is the only one available.'
  },
  { startTime: 4993.01, person: 'Valeri', text: ' So I will build my route around that.' },
  {
    startTime: 4995.69,
    person: 'Valeri',
    text: ' And this kind of logic goes into this bucket of unhappy flows.'
  },
  {
    startTime: 4999.59,
    person: 'Valeri',
    text: ' So this is completely event driven communication in the sense that there are no rest calls whatsoever.'
  },
  {
    startTime: 5005.99,
    person: 'Valeri',
    text: " And the system, the challenge here that for the systems to build the handling in such a way that you don't assume too much, you work just exactly with the amount of information you have."
  },
  {
    startTime: 5021.06,
    person: 'Karol',
    text: " Yeah, that's actual real, real time instead of like, near real time or mimicking the real time reactions."
  },
  {
    startTime: 5029.16,
    person: 'Karol',
    text: ' This is actually all happens in seconds or less.'
  },
  { startTime: 5033.98, person: 'Valeri', text: ' Yeah.' },
  {
    startTime: 5034.64,
    person: 'Valeri',
    text: ' And we do have a requirement that remember those forks, if you, the scanner before a fork, and you want to take a decision left or right, you actually have like 200 milliseconds to do so.'
  },
  { startTime: 5045.06, person: 'Valeri', text: ' Wow.' },
  {
    startTime: 5045.78,
    person: 'Valeri',
    text: ' In most cases, it should be already built to solve this problem too.'
  },
  { startTime: 5052.46, person: 'Karol', text: ' So very low latency communication.' },
  { startTime: 5055.56, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 5056.52,
    person: 'Karol',
    text: " This wouldn't make sense to proxy that through anything else than just a messaging service in that sense to just keep that latency very low."
  },
  {
    startTime: 5065.86,
    person: 'Karol',
    text: ' In that case, that requires that async component.'
  },
  { startTime: 5070.62, person: 'Valeri', text: ' Yeah.' },
  {
    startTime: 5070.88,
    person: 'Valeri',
    text: ' And you also, in most of the cases, you shift the decision a bit earlier to give you a space for thinking so that like, you not always need to make a decision to take a decision exactly at the scan.'
  },
  {
    startTime: 5083.74,
    person: 'Valeri',
    text: " You can take it in advance in terms of routing so that by the time the crate reaches the scanner, you're ready."
  },
  {
    startTime: 5091.06,
    person: 'Valeri',
    text: ' Oh, actually I had the command that whenever crate appears there, I can take right turn.'
  },
  {
    startTime: 5097.56,
    person: 'Valeri',
    text: " That's also another way to satisfy this latency requirement."
  },
  { startTime: 5105.57, person: 'Valeri', text: ' Yeah.' },
  { startTime: 5107.29, person: 'Karol', text: " I'm thoroughly impressed in this sense." },
  {
    startTime: 5110.71,
    person: 'Karol',
    text: " There's a lot of logic to take care of here to be able to make it work."
  },
  {
    startTime: 5115.39,
    person: 'Karol',
    text: " And just looking at this from a perspective of just passing through the crate passing through, it's like, yeah, if you put it as a sequential pass through, this would not be efficient at all because any small thing that happens on the conveyor belt just derails the whole process for a long time so that this actually requires multiple routes so we can have workarounds between the zones."
  },
  { startTime: 5144.23, person: 'Karol', text: " So that's, oh, the complexity there." },
  {
    startTime: 5147.99,
    person: 'Karol',
    text: ' It would take a while for a person to learn with the complexities of a particular warehouse to just understand the problem domain there.'
  },
  { startTime: 5158.49, person: 'Valeri', text: ' Yeah.' },
  {
    startTime: 5158.85,
    person: 'Valeri',
    text: " And that's what we're actually seeing for the newcomers, how difficult it is to onboard."
  },
  { startTime: 5166.39, person: 'Valeri', text: " I'm obviously biassed." },
  {
    startTime: 5168.05,
    person: 'Valeri',
    text: " I've been there for five years and seen it from the beginning."
  },
  {
    startTime: 5171.75,
    person: 'Valeri',
    text: " And even though I left warehouse systems in terms of I'm not working directly every day on the system, it's still insane to think that my knowledge is very valid still."
  },
  {
    startTime: 5183.81,
    person: 'Valeri',
    text: " Yeah, because, and like for the people who join, my heart truly aches for them because it's hard."
  },
  {
    startTime: 5193.57,
    person: 'Karol',
    text: " Yeah, we've been talking on this stream about cognitive load some time ago, two streams, actually."
  },
  {
    startTime: 5200.23,
    person: 'Karol',
    text: " It's a lot of extraneous cognitive load there just to learn all of this and just to cope with that."
  },
  { startTime: 5209.43, person: 'Karol', text: ' The complexity is large.' },
  {
    startTime: 5212.21,
    person: 'Karol',
    text: " If you have 20 kilometres of a conveyor belt in one warehouse and all the combinations of routes that can go there and all the actions that can happen within such a warehouse, that's..."
  },
  {
    startTime: 5228.63,
    person: 'Karol',
    text: " Technology-wise now it's just switching a little bit because we have an interesting comment again on YouTube."
  },
  { startTime: 5239.03, person: 'Karol', text: ' Why not Kafka?' },
  {
    startTime: 5243.95,
    person: 'Karol',
    text: " I think we're dealing here with a little bit of the Kafka cold followers, as unfortunate as it is, but I'm going to shut up about my opinion about that."
  },
  { startTime: 5256.69, person: 'Karol', text: " Let's have your voice in that." },
  {
    startTime: 5258.53,
    person: 'Valeri',
    text: " I'll tell you that, honestly, there is no reason."
  },
  { startTime: 5262.53, person: 'Valeri', text: ' Both Rabbit and Kafka would work.' },
  {
    startTime: 5264.39,
    person: 'Valeri',
    text: " We don't do anything so super special about the events that just a decent message broker wouldn't be able to deal with."
  },
  {
    startTime: 5272.47,
    person: 'Valeri',
    text: " In the end, it's just messages going back and forth, and as long as they are durable, we are good."
  },
  { startTime: 5279.43, person: 'Valeri', text: ' Why Rabbit?' },
  { startTime: 5280.55, person: 'Valeri', text: ' Historical reasons.' },
  { startTime: 5282.33, person: 'Valeri', text: ' When it has been started, there was no Kafka.' },
  { startTime: 5284.35, person: 'Valeri', text: ' There were no experts on Kafka either.' },
  { startTime: 5288.07, person: 'Valeri', text: ' It was a larger part.' },
  { startTime: 5289.57, person: 'Valeri', text: ' Rabbit worked for us.' },
  { startTime: 5291.91, person: 'Valeri', text: ' Historically, we stayed there.' },
  {
    startTime: 5294.95,
    person: 'Karol',
    text: ' I would probably figure a few more reasons why not Kafka.'
  },
  {
    startTime: 5298.23,
    person: 'Karol',
    text: ' Just the sheer complexity of running Kafka as a cluster.'
  },
  {
    startTime: 5304.79,
    person: 'Karol',
    text: ' I think in terms of operability and maintainability, running Rabbit and Q would be a lot simpler than running a Kafka cluster.'
  },
  { startTime: 5315.99, person: 'Valeri', text: " Yeah, but again, don't self-host." },
  { startTime: 5322.31, person: 'Valeri', text: " In that sense, it doesn't really matter." },
  {
    startTime: 5326.17,
    person: 'Valeri',
    text: " I would say even if you're not self-hosting, and you're simply relying on the cloud hosting somewhere or actually already existing platform, in that sense, Kafka is easier."
  },
  { startTime: 5337.69, person: 'Valeri', text: ' You just use Confluent, everything works.' },
  {
    startTime: 5340.75,
    person: 'Valeri',
    text: " Whereas for Rabbit, you don't have that many hosting platforms that already give you all the necessary tools so that the maintenance burdens is actually minimal."
  },
  { startTime: 5353.81, person: 'Valeri', text: " That's what we struggle with now." },
  {
    startTime: 5356.03,
    person: 'Valeri',
    text: " It's fine, because if you check the big systems, big companies, players out there that use Rabbit for their messaging, they do self-host or do the hybrid of self-hosting and cloud hosting."
  },
  {
    startTime: 5371.05,
    person: 'Valeri',
    text: " Self-hosting is not something we do have expertise for or resources for, but it's not."
  },
  { startTime: 5376.51, person: 'Valeri', text: ' For now, we are on the cloud MQP.' },
  {
    startTime: 5380.59,
    person: 'Valeri',
    text: " It's been working so far, but we do question that it's going to still work with the planned expansions and the scale that's growing and evolving."
  },
  {
    startTime: 5391.01,
    person: 'Karol',
    text: ' I would just comment that basically learning to work with Kafka, because hosting and maintaining Kafka is one story, just looking at the complexity.'
  },
  {
    startTime: 5401.57,
    person: 'Karol',
    text: " If you have it outsourced as a SaaS solution or a PaaS solution, then you don't deal with the infrastructure part and having it running."
  },
  {
    startTime: 5413.13,
    person: 'Karol',
    text: ' But you still need to build the logic that is on Kafka with topics and how to work with the partitions.'
  },
  {
    startTime: 5424.13,
    person: 'Karol',
    text: " I think running on AMQP 0.9 or 0.10, I don't know version of protocol you use."
  },
  {
    startTime: 5432.27,
    person: 'Karol',
    text: ' 0.9. 0.9. Running AMQP 0.9 in terms of the logic of setting up routing in Rabbit MQ and these kinds of things is a lot simpler than running Kafka, especially from the perspective of filtration and FIFO.'
  },
  { startTime: 5454.21, person: 'Valeri', text: " That's the motto of Rabbit, right?" },
  {
    startTime: 5455.95,
    person: 'Valeri',
    text: " Smart server, stupid client, so that your applications don't need to sync much."
  },
  {
    startTime: 5461.83,
    person: 'Valeri',
    text: ' But in practise, if you take any technology and if you want to use it to its best, you need to understand how it works.'
  },
  { startTime: 5468.49, person: 'Karol', text: ' Of course.' },
  {
    startTime: 5469.69,
    person: 'Valeri',
    text: " That's exactly why we are running Rabbit MQ teaching course in the company, because it's so essential to operations."
  },
  {
    startTime: 5475.85,
    person: 'Valeri',
    text: ' Actually, even with the simple way of using it, kind of easy user experience, you still can mess up quite nicely.'
  },
  { startTime: 5485.23, person: 'Karol', text: ' Like with any tool.' },
  { startTime: 5487.45, person: 'Valeri', text: ' Exactly.' },
  {
    startTime: 5488.27,
    person: 'Valeri',
    text: ' In that sense, yes, you might need more investment at the beginning if you go for Kafka.'
  },
  {
    startTime: 5494.15,
    person: 'Valeri',
    text: " But I don't see it honestly as the biggest challenge or necessary."
  },
  { startTime: 5502.23, person: 'Valeri', text: " So for us, it's more historical." },
  { startTime: 5506.23, person: 'Karol', text: ' Okay.' },
  {
    startTime: 5507.21,
    person: 'Karol',
    text: ' The usual quote I get from my colleagues, a fool with a tool is still a fool.'
  },
  {
    startTime: 5514.37,
    person: 'Karol',
    text: " So yeah, if you don't know what you're doing and you're using a tool, you're still not going to do well in that sense."
  },
  { startTime: 5520.49, person: 'Karol', text: " And that's the basis for it." },
  {
    startTime: 5523.55,
    person: 'Karol',
    text: ' But I think just from the perspective of technology, the learning curve to get going with Rabbit is definitely lower than the learning curve of having Kafka in the ecosystem.'
  },
  { startTime: 5539.09, person: 'Karol', text: " So it's probably simpler to work it." },
  {
    startTime: 5542.17,
    person: 'Karol',
    text: " And given the complexities you're dealing in the problem domain, I would say, yeah, use something that is simple and faster to learn so that you can be operational quicker and put your focus on the complexity of the problem domain instead of the technical part of the implementation."
  },
  { startTime: 5564.23, person: 'Karol', text: " Yeah, that's very true." },
  {
    startTime: 5567.55,
    person: 'Karol',
    text: ' So answering the question from YouTube, how Rabbit would help solve the communication problem, just by simplicity, we refocus here to the problem domain itself instead of learning the tech.'
  },
  { startTime: 5582.25, person: 'Karol', text: ' That already helps, I think.' },
  { startTime: 5589.44, person: 'Karol', text: ' All right.' },
  {
    startTime: 5590.02,
    person: 'Karol',
    text: ' Now, the juicy part, we have the complexity part, the tech part, the problem domain, but I love the juicy part of how does the organisation play into it?'
  },
  {
    startTime: 5602.46,
    person: 'Karol',
    text: " Because I'm guessing getting to the point you are here over the five years, catering to those babies of microservices, the monolith first, it was a technical journey, of course, architectural journey, because you started splitting up the monolith and building microservices, and you're still upgrading."
  },
  { startTime: 5619.86, person: 'Karol', text: ' How does the organisation play into this?' },
  { startTime: 5624.32, person: 'Karol', text: ' What were the organisational challenges?' },
  {
    startTime: 5628.36,
    person: 'Valeri',
    text: ' Well, obviously, our organisation changed with the way architecture progressed.'
  },
  { startTime: 5635.12, person: 'Valeri', text: " It's kind of two dependent things." },
  {
    startTime: 5637.52,
    person: 'Valeri',
    text: ' And of course, we started as a single big team, relatively big, because we needed to deliver this monolith in a period of time.'
  },
  {
    startTime: 5643.76,
    person: 'Valeri',
    text: " Then you already know that it's too big of a team."
  },
  { startTime: 5646.52, person: 'Valeri', text: ' Now we go microservice landscape.' },
  { startTime: 5648.16, person: 'Valeri', text: ' So teams start appearing.' },
  {
    startTime: 5649.44,
    person: 'Valeri',
    text: " By now, I think it's ten teams with their isolated set of components."
  },
  {
    startTime: 5657.74,
    person: 'Valeri',
    text: ' And the challenge by now is, of course, how you make all those teams collaborate and communicate so that they keep this architecture running.'
  },
  { startTime: 5667.86, person: 'Valeri', text: " For a lot of people, it's a mind shift, right?" },
  {
    startTime: 5670.68,
    person: 'Valeri',
    text: ' People coming from the background of like rest calls and somewhat synchronous systems.'
  },
  {
    startTime: 5678.32,
    person: 'Valeri',
    text: " And here, it's like 99% asynchronous, but you still build with this back synchronous state of mind."
  },
  {
    startTime: 5689.04,
    person: 'Valeri',
    text: ' Yeah, so the challenge here is that how do you teach people that if you want to do something in an event, expose it or consume it, that you have to communicate to your neighbours.'
  },
  { startTime: 5703.36, person: 'Valeri', text: " So you don't work in silence." },
  {
    startTime: 5705.94,
    person: 'Valeri',
    text: " But in that sense, I think it's not new to any microservices setup."
  },
  {
    startTime: 5710.38,
    person: 'Valeri',
    text: ' You always need a high level of communication in there.'
  },
  {
    startTime: 5713.7,
    person: 'Valeri',
    text: " But the state of mind that now when you consume an event, and you write the handling around that, it's not that you're like, you basically have to keep this bigger picture in your mind, in a sense."
  },
  { startTime: 5726.54, person: 'Valeri', text: " So what's the state I can be in?" },
  { startTime: 5729.4, person: 'Valeri', text: ' And what can go wrong, etc.' },
  { startTime: 5731.36, person: 'Valeri', text: " So that's where the challenge comes in." },
  {
    startTime: 5737.98,
    person: 'Valeri',
    text: " And by now, it's also like we used to have basically two people as an architect in this particular domain."
  },
  {
    startTime: 5750.98,
    person: 'Valeri',
    text: " But by now, you realise that the system is too complex, it's too big, even for two minds."
  },
  {
    startTime: 5757.46,
    person: 'Valeri',
    text: " So you want somewhat an architecture group being there full time to actually help teams communicate, collaborate, and make sure that this architecture doesn't go spaghetti way."
  },
  { startTime: 5772.9, person: 'Karol', text: " And that's the usual problem." },
  {
    startTime: 5775.26,
    person: 'Karol',
    text: ' Just from experience of our large integration platforms, and nowadays, integration platforms themselves are just microservice systems, in combination with EDA, right?'
  },
  { startTime: 5786.64, person: 'Karol', text: " They're both sync and async protocols." },
  { startTime: 5791.7, person: 'Karol', text: ' Not that large of a async component into that.' },
  { startTime: 5796.6, person: 'Karol', text: ' So it never reaches like 90%.' },
  {
    startTime: 5798.26,
    person: 'Karol',
    text: " It's usually the async and regular run of the mill integration platforms, maybe 20-30% at that kind of level."
  },
  {
    startTime: 5808.72,
    person: 'Karol',
    text: ' But if you get an ecosystem where you have 200 distinct microservices over an integration platform itself, that is usually governed by multiple architects, integration architects covering that.'
  },
  {
    startTime: 5825.98,
    person: 'Karol',
    text: ' So this is very analogous in that sense, where you basically do the same with such a big thing, because one person just cannot comprehend all of that, they need to cooperate and exchange that information and work on certain areas.'
  },
  {
    startTime: 5843.74,
    person: 'Karol',
    text: " But from what you're telling me in terms of an evolution of the organisational thing, you actually didn't hit the Conway's law that hard."
  },
  {
    startTime: 5854.22,
    person: 'Karol',
    text: " You actually went straight into the inverse Conway manoeuvre from the perspective of how you can handle Conway's law."
  },
  {
    startTime: 5861.88,
    person: 'Karol',
    text: " So you basically started changing the communication of the communication patterns between teams, alongside how the architecture grew, which is awesome, because you avoided the most painful problem of architecture, which is not adjusting the organisation to the architecture that's growing and evolving."
  },
  {
    startTime: 5881.26,
    person: 'Karol',
    text: " And it seems like you just went like, oh, that's how it should be done."
  },
  { startTime: 5886.22, person: 'Karol', text: ' It seems like you said it so effortlessly.' },
  { startTime: 5890.06, person: 'Karol', text: ' It was like a natural thing for everybody.' },
  {
    startTime: 5893.12,
    person: 'Valeri',
    text: ' Well, it felt natural, because actually, the organisation structure really mirrored the amount of, almost a mirrored amount of services.'
  },
  {
    startTime: 5904.36,
    person: 'Valeri',
    text: ' So there was one service, one team, manual automated.'
  },
  { startTime: 5908.32, person: 'Valeri', text: ' Then you start spawning those microservices.' },
  { startTime: 5911.46, person: 'Valeri', text: ' Oh, wow, you need the team for that.' },
  {
    startTime: 5913.84,
    person: 'Valeri',
    text: " And it's like, rent-multiplying, so very naturally distributing."
  },
  { startTime: 5920.56, person: 'Karol', text: " I must say that's quite rare." },
  { startTime: 5922.8, person: 'Karol', text: ' You do realise that, or not really?' },
  { startTime: 5928.14, person: 'Valeri', text: ' No, not really.' },
  { startTime: 5930.74, person: 'Karol', text: ' Gotcha.' },
  {
    startTime: 5932.72,
    person: 'Karol',
    text: " So just to put it in perspective, because I've been with multiple clients all over Europe, this kind of behaviour to naturally grow and change your organisation with the evolution of an architecture, that's not something that's common."
  },
  {
    startTime: 5950.17,
    person: 'Karol',
    text: ' Usually, the organisation is driven by the business, the way teams are organised.'
  },
  {
    startTime: 5957.29,
    person: 'Karol',
    text: " So it usually doesn't match the architecture itself."
  },
  {
    startTime: 5962.03,
    person: 'Karol',
    text: ' So one team can be responsible for multiple systems, and then you have a problem or two teams are responsible for one system, and you have a different problem in that sense, because they collide with each other.'
  },
  { startTime: 5975.71, person: 'Karol', text: ' And you either create bottlenecks or friction.' },
  { startTime: 5980.21, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 5980.99,
    person: 'Karol',
    text: " While here, it seems like you completely bypassed the problem of Conway's Law of ignoring it or accepting it, and you just went like, we're going to just grow as it is."
  },
  {
    startTime: 5991.71,
    person: 'Karol',
    text: " As we grow with architecture, we're going to grow our organisations."
  },
  { startTime: 5995.53, person: 'Valeri', text: " Well, it's not that black and white, right?" },
  { startTime: 5997.45, person: 'Valeri', text: ' Okay.' },
  {
    startTime: 5998.73,
    person: 'Valeri',
    text: " Remember, we have this monolith part that's not fully gone yet."
  },
  {
    startTime: 6002.67,
    person: 'Valeri',
    text: ' So you naturally would have, I think, two teams working there, and they kind of share the space.'
  },
  {
    startTime: 6008.85,
    person: 'Valeri',
    text: ' But I believe both teams have the people from the very beginning who have been building the system.'
  },
  {
    startTime: 6014.93,
    person: 'Valeri',
    text: ' So they nicely collaborate at that point, but you still have this natural friction when they need to work on the same code base.'
  },
  { startTime: 6023.87, person: 'Valeri', text: ' Okay.' },
  {
    startTime: 6025.63,
    person: 'Valeri',
    text: ' And at the same time, if you naturally grow your teams as your architecture evolves, there is also a trade-off in there, because you add new people rapidly, and you need to educate them, so you will have this gap in the delivering of features while this whole new organisational setup stabilises.'
  },
  {
    startTime: 6046.57,
    person: 'Valeri',
    text: ' And I basically saw two or three reorganisations in these five years in this domain only, and you see those dips when you do the reorganisation.'
  },
  { startTime: 6055.29, person: 'Valeri', text: ' So at least you want to minimise those, right?' },
  { startTime: 6061.28, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 6062.58,
    person: 'Karol',
    text: " It's hard to nitpick on these things at this point."
  },
  { startTime: 6065.98, person: 'Karol', text: " It's like, how?" },
  {
    startTime: 6068.92,
    person: 'Karol',
    text: ' But it feels like you did it naturally, even with those reorganisations.'
  },
  {
    startTime: 6073.68,
    person: 'Karol',
    text: " It feels like you say it's like, it just happened."
  },
  {
    startTime: 6079.04,
    person: 'Karol',
    text: " I mean, either you have somebody that's really mature about looking at things, about reorganising how you work, and to spot inefficiencies in ways of working, or the teams actually have a knack for that."
  },
  { startTime: 6093.42, person: 'Karol', text: " What's the deal?" },
  { startTime: 6095.22, person: 'Karol', text: ' Do you have somebody looking at those?' },
  {
    startTime: 6097.72,
    person: 'Valeri',
    text: ' Well, the organisation itself is flexible, and business is happy to realise when they need to change, and we need to change in order to meet the needs of the business.'
  },
  { startTime: 6108.98, person: 'Valeri', text: ' So in that sense, people are very sensible.' },
  {
    startTime: 6112.44,
    person: 'Valeri',
    text: ' We definitely do have lots of smart people there, too.'
  },
  { startTime: 6118.3, person: 'Valeri', text: ' That helps.' },
  {
    startTime: 6121.64,
    person: 'Valeri',
    text: " But also, if you look at the architecture itself, it wasn't that we are tech popping up and saying, oh, now from the monolith, we go to microservices and build all this event-driven thing."
  },
  { startTime: 6132.38, person: 'Valeri', text: ' No, you have to build a narrative.' },
  { startTime: 6134.23, person: 'Valeri', text: " You have to explain why it's important." },
  {
    startTime: 6136.35,
    person: 'Valeri',
    text: ' Repeat this narrative half a year, at least, and still repeating and showing that it works.'
  },
  { startTime: 6141.43, person: 'Valeri', text: " So it's there." },
  { startTime: 6142.93, person: 'Valeri', text: " It's there." },
  {
    startTime: 6143.57,
    person: 'Valeri',
    text: " But it's not as painful, maybe, as you would normally see it, as what we are referring to in other organisations."
  },
  {
    startTime: 6151.09,
    person: 'Valeri',
    text: " That's why I don't have bitter feelings about it."
  },
  { startTime: 6154.09, person: 'Valeri', text: ' So for me, it went well.' },
  { startTime: 6156.11, person: 'Valeri', text: ' Okay.' },
  {
    startTime: 6157.77,
    person: 'Karol',
    text: " So it still requires work and reiterating and communicating that architecture to stakeholders and other teams that we need a shift because we're hitting these kind of problems, and those problems will manifest harder later on, and we want to avoid that."
  },
  { startTime: 6173.71, person: 'Karol', text: ' Yes.' },
  {
    startTime: 6174.47,
    person: 'Karol',
    text: " But it's still in the area of avoiding rather than we're hitting a wall."
  },
  { startTime: 6180.81, person: 'Karol', text: ' Or did you hit a wall somewhere?' },
  { startTime: 6183.83, person: 'Valeri', text: ' Always just in time.' },
  { startTime: 6187.07, person: 'Karol', text: ' Okay.' },
  {
    startTime: 6187.77,
    person: 'Karol',
    text: " I mean, as well as if it's just in time, that's perfect, right?"
  },
  { startTime: 6193.11, person: 'Karol', text: ' But another curious question popping in.' },
  {
    startTime: 6196.41,
    person: 'Karol',
    text: ' So if we have those teams and the composition of those teams, how many of those people are there from the beginning versus the fresh blot?'
  },
  {
    startTime: 6206.55,
    person: 'Karol',
    text: ' What kind of a rotation in staff do you see over those teams?'
  },
  {
    startTime: 6212.11,
    person: 'Karol',
    text: ' Or how many more people you have to actually onboard into the whole thing to make it still viable and work?'
  },
  { startTime: 6221.51, person: 'Valeri', text: ' Yeah.' },
  { startTime: 6221.83, person: 'Valeri', text: " Well, let's see." },
  {
    startTime: 6222.57,
    person: 'Valeri',
    text: " In the pure numbers, we've started as a team of like 15 or so, but that included POs, engineers, leads, etcétera."
  },
  {
    startTime: 6233.17,
    person: 'Valeri',
    text: ' Two-thirds of those already left or not working on the system.'
  },
  {
    startTime: 6237.71,
    person: 'Valeri',
    text: ' So there are at least five people who have been there from the very beginning.'
  },
  {
    startTime: 6242.21,
    person: 'Valeri',
    text: ' And now we have 10 teams, each at least eight people.'
  },
  { startTime: 6247.05, person: 'Valeri', text: ' So 75 new.' },
  {
    startTime: 6249.79,
    person: 'Valeri',
    text: ' But of course, the inflow was gradual at various points when the organisation had to change.'
  },
  {
    startTime: 6255.67,
    person: 'Valeri',
    text: ' Okay, now we are not a single team, now we are three.'
  },
  { startTime: 6258.09, person: 'Valeri', text: ' So you add more people, etcétera.' },
  { startTime: 6260.63, person: 'Valeri', text: ' So you have different kind of generations.' },
  {
    startTime: 6264.87,
    person: 'Valeri',
    text: " But I would say at this point, it's like maybe 40% or one-third of people who's been long enough to comprehend the complexity and know what's going on and the rest at various stages of, oh, what the fuck, where I am?"
  },
  {
    startTime: 6284.63,
    person: 'Valeri',
    text: " Okay, I'm competitive enough within the boundaries of my team."
  },
  {
    startTime: 6288.71,
    person: 'Valeri',
    text: " But now if I do step left, they're like, oh, what the fuck, then go."
  },
  {
    startTime: 6294.93,
    person: 'Karol',
    text: " Okay, so there's a learning curve between the teams in terms of they focus on the narrow aspect of the whole thing."
  },
  { startTime: 6303.21, person: 'Karol', text: ' And there are quite a few of those.' },
  { startTime: 6304.03, person: 'Valeri', text: ' But that was the whole goal, right?' },
  {
    startTime: 6305.77,
    person: 'Valeri',
    text: " You can't expect all 80 people to know the system in every inch of details and you don't want to."
  },
  { startTime: 6311.63, person: 'Valeri', text: " It's a waste of time." },
  { startTime: 6313.17, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 6315.03,
    person: 'Karol',
    text: " Yeah, I mean, I do agree of that premise because that's the regular thing."
  },
  {
    startTime: 6319.61,
    person: 'Karol',
    text: " We want people to specialise and have some people that have a broader view so they can guide others in those specialisations and niches that they're handling so that we still can have that efficiency."
  },
  {
    startTime: 6333.37,
    person: 'Karol',
    text: " But in general, would you say that there is a broad understanding of how every, between different engineers, how the whole thing works and how they, what are the dependencies that they're working with between teams?"
  },
  { startTime: 6351.3, person: 'Valeri', text: ' Yes and no.' },
  {
    startTime: 6352.54,
    person: 'Valeri',
    text: ' There is definitely this understanding in terms of the closest neighbours, because not, I hope that we never see that all systems are connected and know about each other.'
  },
  {
    startTime: 6364.1,
    person: 'Valeri',
    text: " That's not the goal of this architecture and the split."
  },
  {
    startTime: 6367,
    person: 'Valeri',
    text: ' So you definitely know to a certain degree what happens in the neighbouring teams.'
  },
  {
    startTime: 6373.18,
    person: 'Valeri',
    text: ' And there are people who know more about higher review too.'
  },
  {
    startTime: 6377.14,
    person: 'Valeri',
    text: " But normally people who joined, let's say, half a year, a year ago, they wouldn't grasp the whole dependency picture as of yet."
  },
  { startTime: 6388.98, person: 'Karol', text: ' Okay.' },
  {
    startTime: 6390.58,
    person: 'Karol',
    text: ' There is that learning curve there probably for those later joiners in that sense.'
  },
  {
    startTime: 6399.98,
    person: 'Karol',
    text: ' In terms of challenge, but not from a perspective of a technical, but more of a perspective of psychology, you started as 15 people designing the monolith and designing the first warehouse.'
  },
  {
    startTime: 6416.24,
    person: 'Karol',
    text: ' How much of a psychological challenge was it from the perspective of pressure, perspective of stress?'
  },
  {
    startTime: 6424.52,
    person: 'Karol',
    text: " And again, that's a lovely question from our constant commenter today, how stressful was it to develop the first warehouse?"
  },
  {
    startTime: 6433.42,
    person: 'Karol',
    text: " But I want to expand it into like looking into also the stress of growth, because adding people to the mix is always stressful, because that's basically rearranging the groups, rearranging the relationships between people, relationships between people and systems, etcétera."
  },
  {
    startTime: 6451.76,
    person: 'Karol',
    text: " So that's always the ongoing change is a huge stressor for just the most moving part being humans."
  },
  {
    startTime: 6461.3,
    person: 'Karol',
    text: ' So can you describe those challenges in terms of stress, psychological safety, relationship building?'
  },
  {
    startTime: 6469.9,
    person: 'Karol',
    text: ' How would you look at it from a perspective of those five years?'
  },
  {
    startTime: 6477.16,
    person: 'Valeri',
    text: " Honestly, in terms of the relationships, I think I haven't seen such tightly built group."
  },
  {
    startTime: 6488.59,
    person: 'Valeri',
    text: " Now it's less so because there are like already an insane amount of people, but those few stages, first three or four years, we've been very close, because it's actually a coping mechanism."
  },
  {
    startTime: 6499.25,
    person: 'Valeri',
    text: " Even if you're in different teams, you're still like tight, like really holding each other tight to support and go through the stresses related to delivering, because like the stress levels you can like pretty much describe as a slowly building and reaching the climax."
  },
  {
    startTime: 6517.43,
    person: 'Valeri',
    text: " It's when you, oh, actually, tomorrow, we have to run the whole new site, and it has to work."
  },
  {
    startTime: 6522.51,
    person: 'Valeri',
    text: " And you're like in a frenzy foam out of your mouth, exactly."
  },
  {
    startTime: 6526.59,
    person: 'Valeri',
    text: " And you know that tonne of things going to go wrong, and how you're going to deal with that."
  },
  { startTime: 6531.31, person: 'Valeri', text: ' Then you stabilise the system, it works.' },
  {
    startTime: 6534.75,
    person: 'Valeri',
    text: " You breathe out for a while, you're kind of in this deep of pleasure and sanity, and then it starts building up again, because a new warehouse is coming."
  },
  {
    startTime: 6543.27,
    person: 'Valeri',
    text: ' And you know that you have to deliver features for the old ones, maintain them, migrate meanwhile, and support the new warehouse.'
  },
  {
    startTime: 6550.05,
    person: 'Valeri',
    text: " It's like, so what helped us through like this very original team and those few generations further is like really supporting each other."
  },
  {
    startTime: 6561.13,
    person: 'Valeri',
    text: " Without that, I don't think it would have been possible."
  },
  { startTime: 6569.67, person: 'Valeri', text: ' Can you hear me?' },
  { startTime: 6570.53, person: 'Valeri', text: ' I see the connection lost.' },
  { startTime: 6572.87, person: 'Valeri', text: ' Sorry.' },
  { startTime: 6573.37, person: 'Karol', text: ' We still hear you.' },
  {
    startTime: 6574.93,
    person: 'Karol',
    text: " We just lost the video, and it happened a few times over the stream that you got kind of frozen a little bit, but don't worry about that."
  },
  { startTime: 6584.95, person: 'Karol', text: ' Oh, for a moment, we did lose audio as well.' },
  { startTime: 6590.73, person: 'Karol', text: " But you're here." },
  { startTime: 6591.97, person: 'Karol', text: ' I still see you in the studio, so.' },
  { startTime: 6594.81, person: 'Valeri', text: " Okay, I think it's getting better." },
  { startTime: 6598.39, person: 'Valeri', text: ' At least now I can hear you.' },
  { startTime: 6600.03, person: 'Karol', text: ' Okay.' },
  { startTime: 6601.05, person: 'Valeri', text: ' Somewhat sequentially.' },
  { startTime: 6606.61, person: 'Karol', text: ' Technical problems, that happens.' },
  { startTime: 6610.15, person: 'Karol', text: ' Unfortunately, internet can be spotty at times.' },
  { startTime: 6615.73, person: 'Karol', text: ' Yeah.' },
  { startTime: 6617.91, person: 'Karol', text: " Oh, I'm sorry, folks." },
  { startTime: 6622.17, person: 'Karol', text: ' I think a brief pause.' },
  { startTime: 6623.87, person: 'Karol', text: ' We lost Valeria here for a moment.' },
  { startTime: 6626.63, person: 'Karol', text: ' Internet problems.' },
  {
    startTime: 6628.81,
    person: 'Karol',
    text: ' So while we are having this small of a post, we were going to the end of the stream anyways.'
  },
  { startTime: 6635.47, person: 'Karol', text: " I'll just pop in with some advertisements." },
  {
    startTime: 6637.81,
    person: 'Karol',
    text: " So next month, 5th of November, we're having another interesting stream, which is with Brian Labelle from Rubell Business Solutions Limited in Canada."
  },
  {
    startTime: 6654.05,
    person: 'Karol',
    text: " We're going to be talking about migrating iPaaS technologies to something else."
  },
  { startTime: 6661.83, person: 'Karol', text: ' So for example, pure Java implementation.' },
  { startTime: 6665.13, person: 'Karol', text: " We'll see how that goes." },
  {
    startTime: 6666.69,
    person: 'Karol',
    text: " I'm going to play the devil's advocate here to see what are the angles and what are the angles that are usually missed by companies looking at iPaaS from the pure cost perspective of licencing."
  },
  { startTime: 6684.33, person: 'Karol', text: " So we're going to be doing that." },
  {
    startTime: 6686.45,
    person: 'Karol',
    text: " If you're new to the stream, if you haven't been here before, you can go and read more about the work we're doing in terms of knowledge sharing about enterprise application integration."
  },
  { startTime: 6697.93, person: 'Karol', text: ' Just read more on bridging the gap EU comp.' },
  {
    startTime: 6700.89,
    person: 'Karol',
    text: " You can also subscribe to our sub stack, although it's a little bit tiny bit neglected nowadays because of other priorities."
  },
  {
    startTime: 6709.75,
    person: 'Karol',
    text: ' And please do subscribe to the channel to get notifications about other live streams.'
  },
  { startTime: 6716.15, person: 'Karol', text: ' And I do see that Valeria is back.' },
  { startTime: 6721.09, person: 'Karol', text: " So let's go back to the live stream." },
  { startTime: 6727.71, person: 'Karol', text: ' Internet is internet.' },
  { startTime: 6729.37, person: 'Karol', text: ' Sometimes it works.' },
  { startTime: 6730.21, person: 'Karol', text: " Sometimes it doesn't." },
  {
    startTime: 6731.75,
    person: 'Valeri',
    text: ' So much for distributed system building, right?'
  },
  { startTime: 6735.75, person: 'Karol', text: ' Fallacy of distributed computing.' },
  { startTime: 6737.79, person: 'Karol', text: ' Latency is always zero.' },
  { startTime: 6740.47, person: 'Karol', text: ' And the network is always reliable.' },
  { startTime: 6743.17, person: 'Valeri', text: ' Yeah, exactly.' },
  { startTime: 6745.15, person: 'Karol', text: " That's a nice one." },
  { startTime: 6747.11, person: 'Karol', text: ' Always.' },
  { startTime: 6748.35, person: 'Valeri', text: ' Yeah.' },
  { startTime: 6748.75, person: 'Valeri', text: ' So where were we at?' },
  { startTime: 6750.47, person: 'Valeri', text: ' Stress.' },
  {
    startTime: 6751.69,
    person: 'Karol',
    text: ' We were talking about the psychological aspects, relationships within the teams, looking at the five years, the starting 15 people, and then looking at how it developed later into the 80 people squad that you have right now for different services.'
  },
  {
    startTime: 6774.25,
    person: 'Valeri',
    text: ' So yeah, if I do a quick sketch, those first two insanely close.'
  },
  {
    startTime: 6780.47,
    person: 'Valeri',
    text: " That's how we survived this original big project."
  },
  {
    startTime: 6783.81,
    person: 'Valeri',
    text: " Then there's even a new few teams coming in and us splitting into smaller batches since most of the people are still from this original batch."
  },
  { startTime: 6792.93, person: 'Valeri', text: " We're still very close." },
  {
    startTime: 6794.75,
    person: 'Valeri',
    text: ' And the new people coming, it felt like we have new members of the family.'
  },
  { startTime: 6800.11, person: 'Valeri', text: " It's always been very tight." },
  {
    startTime: 6801.43,
    person: 'Valeri',
    text: " But of course, it was destined to go a bit less tight and less, let's say, family-like at some point."
  },
  {
    startTime: 6811.01,
    person: 'Valeri',
    text: ' So what you would observe now is that there is still an insane support between the teams, especially in those teams where you have those old people from the very beginning.'
  },
  { startTime: 6821.65, person: 'Valeri', text: ' They would help no matter what.' },
  { startTime: 6823.41, person: 'Valeri', text: ' And that brings people together a lot.' },
  {
    startTime: 6826.57,
    person: 'Valeri',
    text: ' And even with reorganisation, when you move people around, it still feels safe, I would say.'
  },
  { startTime: 6833.25, person: 'Valeri', text: ' And I see people are quite close.' },
  {
    startTime: 6837.13,
    person: 'Valeri',
    text: ' However, you also see a phenomenon that the more new people in the team are, the more isolated it gets in terms of now if something happens, incident, right, now you need to solve the problem.'
  },
  {
    startTime: 6851.05,
    person: 'Valeri',
    text: ' And you see this ping pong, oh, is it my team problem?'
  },
  { startTime: 6855.09, person: 'Valeri', text: ' Maybe I can redirect it to my neighbour.' },
  {
    startTime: 6858.53,
    person: 'Valeri',
    text: " So there is a bit of this, let's say, deep, where you see a ping pong during the incidents, like, oh, let me ping the other team."
  },
  {
    startTime: 6875.73,
    person: 'Valeri',
    text: " But I feel like it's natural because, again, the system is so big that it's quite frightening for a lot of people, especially new to that they need to embrace that complexity."
  },
  {
    startTime: 6890.57,
    person: 'Valeri',
    text: ' And I, for instance, remember myself when I just joined the company.'
  },
  {
    startTime: 6894.21,
    person: 'Valeri',
    text: ' I also was part of the incident crew for the systems.'
  },
  { startTime: 6897.49, person: 'Valeri', text: " I didn't know." },
  { startTime: 6898.65, person: 'Valeri', text: " I don't know what's going on." },
  { startTime: 6901.09, person: 'Valeri', text: ' Whose problem can I make it, please?' },
  { startTime: 6904.35, person: 'Valeri', text: ' Just to offload it from my shoulders.' },
  { startTime: 6906.61, person: 'Valeri', text: ' So I completely get where this is coming from.' },
  {
    startTime: 6910.35,
    person: 'Valeri',
    text: " How it's dealt with is the teaching sessions on how to run the incidents, helping people to grasp this bigger picture of knowing where it is."
  },
  {
    startTime: 6921.75,
    person: 'Valeri',
    text: " It's something you can do, or something you can really escalate or help, ask for help from your neighbours."
  },
  {
    startTime: 6928.19,
    person: 'Valeri',
    text: ' But I also see quite often that if people are in the office, and now we are, of course, working hybrids, you often see people working remotely.'
  },
  {
    startTime: 6936.91,
    person: 'Valeri',
    text: ' But if people are in the office, they just stand up across the, like, 20 metres gap between the tables and go to another team saying, hey, can you help me, please?'
  },
  { startTime: 6946.91, person: 'Valeri', text: " I don't know what's going on." },
  { startTime: 6948.47, person: 'Valeri', text: ' And I never saw someone saying no to that.' },
  { startTime: 6952.81, person: 'Karol', text: " Yeah, that's a good mindset." },
  {
    startTime: 6954.59,
    person: 'Karol',
    text: ' I remember back in the office days before corona, roaming through the office between different business teams, well, business domain system teams, and just going to have a chat to see what the problem actually is.'
  },
  {
    startTime: 6971.65,
    person: 'Karol',
    text: ' Because if the business issued the ticket, that usually was very devoid of information.'
  },
  { startTime: 6976.83, person: 'Karol', text: ' That was the usual problem.' },
  {
    startTime: 6978.83,
    person: 'Karol',
    text: ' So just going to a different team to see, hey, your business issued me a ticket.'
  },
  { startTime: 6984.03, person: 'Karol', text: " It's like, I don't know what's going on." },
  { startTime: 6985.39, person: 'Karol', text: ' Can you give me some context?' },
  {
    startTime: 6986.75,
    person: 'Karol',
    text: " And let's solve that problem together to see if that's actually a problem that I can help you solve."
  },
  {
    startTime: 6991.75,
    person: 'Karol',
    text: ' Or is it the problem that is actually somewhere else?'
  },
  { startTime: 6994.63, person: 'Karol', text: " But let's cooperate on that." },
  {
    startTime: 6998.61,
    person: 'Karol',
    text: ' And it usually was a very good way just to walk by and just have a conversation.'
  },
  {
    startTime: 7003.31,
    person: 'Karol',
    text: ' Because pinging with incidents and just reassigning it, it was very, very bad psychologically.'
  },
  { startTime: 7012.53, person: 'Karol', text: ' It was like, oh, this again.' },
  { startTime: 7014.27, person: 'Karol', text: ' Those damn...' },
  { startTime: 7016.93, person: 'Karol', text: " So that's good." },
  {
    startTime: 7018.65,
    person: 'Karol',
    text: ' And you said you have support in terms of training to work with incidents?'
  },
  { startTime: 7022.85, person: 'Valeri', text: ' Yes.' },
  {
    startTime: 7024.91,
    person: 'Valeri',
    text: ' Because, of course, the system is big and complex.'
  },
  { startTime: 7029.01, person: 'Valeri', text: " And you don't want to have..." },
  { startTime: 7030.71, person: 'Valeri', text: ' And remember, 24-7 almost.' },
  {
    startTime: 7033.47,
    person: 'Valeri',
    text: ' So you actually need support throughout the day.'
  },
  { startTime: 7037.63, person: 'Valeri', text: ' So when it was a single team, it was easy.' },
  {
    startTime: 7042.17,
    person: 'Valeri',
    text: ' One person from the whole team is on support per day.'
  },
  {
    startTime: 7046.05,
    person: 'Valeri',
    text: ' Now when you have like 10, having 10 engineers doing constant support is expensive.'
  },
  { startTime: 7051.79, person: 'Valeri', text: " It's also heavy duty-wise." },
  {
    startTime: 7054.03,
    person: 'Valeri',
    text: " So you introduce this tier structure where there is the first tier that can identify at least what's the direction of the problem and then escalates all the way to the relevant people."
  },
  {
    startTime: 7068.81,
    person: 'Valeri',
    text: ' But in order to be able to do that and for the people to know how to deal with certain issues, you do need training and help.'
  },
  {
    startTime: 7076.47,
    person: 'Valeri',
    text: ' So that at least people feel psychologically safe to take this job.'
  },
  { startTime: 7080.73, person: 'Valeri', text: " Because it's part of their responsibilities." },
  {
    startTime: 7083.13,
    person: 'Valeri',
    text: " But if you don't feel safe, because it's very different from just sitting and coding and delivering the code that builds and runs, here you still need to deal with real people sometimes."
  },
  {
    startTime: 7095.47,
    person: 'Valeri',
    text: " Actually, very often you're on call with actual people from operations that are standing in front of the screen in the warehouse."
  },
  { startTime: 7102.43, person: 'Valeri', text: ' You can hear this ringing of hardware.' },
  {
    startTime: 7104.81,
    person: 'Valeri',
    text: " And they're also desperate because they have no clue what's going on."
  },
  { startTime: 7108.45, person: 'Valeri', text: " And you have no clue what's going on." },
  { startTime: 7109.93, person: 'Valeri', text: " You can imagine it's very stressful." },
  {
    startTime: 7111.67,
    person: 'Karol',
    text: ' And you try to figure out the reality of things in combination of two worlds, digital and physical.'
  },
  { startTime: 7118.33, person: 'Karol', text: ' That must be quite stressful in that sense.' },
  {
    startTime: 7123.21,
    person: 'Karol',
    text: ' But if you say tiers, it kind of reminds me of the approach.'
  },
  {
    startTime: 7129.15,
    person: 'Karol',
    text: ' Because right now we have those development teams that they also handle the operations of the systems, right?'
  },
  {
    startTime: 7136.55,
    person: 'Karol',
    text: ' So this is the singular responsibility of a team.'
  },
  {
    startTime: 7139.31,
    person: 'Karol',
    text: " You have a set of services that you're handling, you do the dev and you do the operations."
  },
  {
    startTime: 7144.27,
    person: 'Karol',
    text: ' The maintenance, the fixing, the troubleshooting, all of that.'
  },
  {
    startTime: 7150.85,
    person: 'Karol',
    text: ' A different old school approach was like you have a dev team and you have a handover to the operations team.'
  },
  {
    startTime: 7157.43,
    person: 'Karol',
    text: ' And the operations team is handling operations, right?'
  },
  {
    startTime: 7160.37,
    person: 'Karol',
    text: " You send it back to the dev team when there's something that requires a substantial- Oh, yeah."
  },
  { startTime: 7164.65, person: 'Valeri', text: ' In that sense, this separation is there.' },
  { startTime: 7167.73, person: 'Karol', text: ' Oh, it is?' },
  { startTime: 7168.43, person: 'Karol', text: ' Okay.' },
  { startTime: 7168.57, person: 'Valeri', text: ' Yes, of course.' },
  {
    startTime: 7170.53,
    person: 'Valeri',
    text: ' So the operations is basically people for whom they are our customers.'
  },
  {
    startTime: 7176.37,
    person: 'Valeri',
    text: ' We are writing the system for them so that they can control this facility.'
  },
  {
    startTime: 7181.11,
    person: 'Valeri',
    text: ' Still, though, developers are quite close to operations and to hold this world too.'
  },
  { startTime: 7185.77, person: 'Valeri', text: ' But this separation is there.' },
  {
    startTime: 7187.61,
    person: 'Karol',
    text: ' But you have the operations, which are the physical operations inside the specific facility.'
  },
  { startTime: 7192.91, person: 'Karol', text: ' Yes, yes.' },
  { startTime: 7193.71, person: 'Karol', text: ' Right?' },
  {
    startTime: 7194.15,
    person: 'Karol',
    text: " So they're operating machinery, they're operating the crates, they're operating- Oh, no."
  },
  {
    startTime: 7198.75,
    person: 'Valeri',
    text: ' There is also operations in the sense of analysts, people who look at the monitor from their home, if need be, to control this site.'
  },
  {
    startTime: 7207.45,
    person: 'Valeri',
    text: ' And they are the natural translator between that and the operations team.'
  },
  { startTime: 7211.97, person: 'Valeri', text: ' Okay.' },
  {
    startTime: 7212.07,
    person: 'Karol',
    text: " So they have more context of their specific facility, but they have the context of the actual services that they're monitoring."
  },
  { startTime: 7221.21, person: 'Valeri', text: ' To an extent, yes.' },
  { startTime: 7223.15, person: 'Karol', text: ' To an extent.' },
  {
    startTime: 7223.61,
    person: 'Valeri',
    text: ' One of the challenges with the evolvement of the architecture, how to make business to talk in our terms.'
  },
  {
    startTime: 7232.11,
    person: 'Valeri',
    text: " Because before it was a single system, they get used to calling it whatever it's been called."
  },
  {
    startTime: 7237.55,
    person: 'Valeri',
    text: ' And now we inevitably, as a dev, speak in different terms, of course.'
  },
  {
    startTime: 7241.95,
    person: 'Valeri',
    text: " And then they come with a feature and you explain, oh, that can't be done because we have multiple systems and they need to communicate."
  },
  { startTime: 7249.45, person: 'Valeri', text: ' So all those challenges are there.' },
  { startTime: 7251.55, person: 'Karol', text: ' Okay.' },
  { startTime: 7252.47, person: 'Karol', text: ' Yeah.' },
  {
    startTime: 7253.89,
    person: 'Karol',
    text: ' Orchestration of work between teams is probably quite a heavy challenge right now.'
  },
  {
    startTime: 7259.81,
    person: 'Karol',
    text: ' I remember from the time when I was doing operations, we had the dev team doing the delivery of the code and that moved to the testing environments.'
  },
  {
    startTime: 7270.93,
    person: 'Karol',
    text: ' And in production, we had L1, L2, and L3, where L1 was just monitoring.'
  },
  {
    startTime: 7276.53,
    person: 'Karol',
    text: ' Those guys were on 12-hour shifts sitting in front of monitors looking for what problems are monitoring the ticket system, just looking at if there are any problems in production.'
  },
  {
    startTime: 7288.63,
    person: 'Karol',
    text: ' L2s were those that were usually solving those problems if they occurred and seeing if they can solve the problems just by reconfiguring, restarting, offloading something, etcétera.'
  },
  {
    startTime: 7305.67,
    person: 'Karol',
    text: ' If this problem could be contained within the integration platform, they usually fix that within the integration platforms.'
  },
  {
    startTime: 7311.81,
    person: 'Karol',
    text: " If that couldn't be fixed just solely in the integration platform, that went to L3, which was usually me, to solve that by cooperating with other systems, often managing fixes on sites on the integration platform and the system as well."
  },
  {
    startTime: 7328.51,
    person: 'Karol',
    text: ' So orchestrating that and then issuing that quick fix with an emergency release or planning that fix within a minor or major release were natural in that sense.'
  },
  { startTime: 7340.49, person: 'Karol', text: ' So it was the kind of levels.' },
  {
    startTime: 7343.93,
    person: 'Karol',
    text: ' Does that resemble anything in picking them, this kind of classification?'
  },
  { startTime: 7351.15, person: 'Valeri', text: ' Or is it a different classification?' },
  { startTime: 7353.97, person: 'Valeri', text: " It's a bit different, yes." },
  {
    startTime: 7356.61,
    person: 'Valeri',
    text: ' So there are obviously people on the side themselves who are those monitors with different alerts for hardware malfunction, but they likely fix it manually, right?'
  },
  { startTime: 7368.65, person: 'Valeri', text: ' So no involvement from that, etcétera.' },
  {
    startTime: 7371.05,
    person: 'Valeri',
    text: ' Then you have operations people who control the site in the sense of they have a plan, those ATK deliveries of how many per day that needs to be packed and dispatched.'
  },
  {
    startTime: 7383.07,
    person: 'Valeri',
    text: ' So they look already at the business flows and alerts from that perspective.'
  },
  {
    startTime: 7387.79,
    person: 'Valeri',
    text: " And when they can solve operationally by rescheduling something or turning down one operation, so let's say no more gel packing, we all focus on picking only, they do that."
  },
  {
    startTime: 7403.15,
    person: 'Valeri',
    text: ' But when they see that the behaviour of the system, there is something wrong, they often escalate already towards that part.'
  },
  { startTime: 7410.77, person: 'Valeri', text: ' And there you see tiers.' },
  {
    startTime: 7412.63,
    person: 'Valeri',
    text: " The tier is one is the first single point of contact, but saying, hey, something's going wrong, can you then either solve it or find who's going to solve it?"
  },
  { startTime: 7424.01, person: 'Valeri', text: " And then it's already..." },
  {
    startTime: 7426.75,
    person: 'Valeri',
    text: ' And then next tier is the people who more closely and closely related to a specific part.'
  },
  {
    startTime: 7432.89,
    person: 'Valeri',
    text: " But it's not necessarily the behaviour of the system."
  },
  {
    startTime: 7435.07,
    person: 'Valeri',
    text: ' It can be like, oh, exactly, something happened hardware-wise, and there is no easy workaround for that.'
  },
  {
    startTime: 7441.65,
    person: 'Valeri',
    text: ' Can you help us figure out what we can do if this type of request also happens?'
  },
  {
    startTime: 7448.26,
    person: 'Karol',
    text: ' Okay, so you kind of have that kind of layered system as well.'
  },
  {
    startTime: 7451.56,
    person: 'Karol',
    text: ' But this is specifically in the dev teams that how to manage the workload of incidents.'
  },
  {
    startTime: 7458.32,
    person: 'Karol',
    text: ' And the operations in Picking, they actually more on the business continuity and the line continuity.'
  },
  {
    startTime: 7469.18,
    person: 'Karol',
    text: ' So more of a progressing with packing, picking and packing, rather than looking at the operations of the specific services that are there.'
  },
  {
    startTime: 7479.7,
    person: 'Valeri',
    text: " It's more of a business process rather than a tech process."
  },
  {
    startTime: 7484.14,
    person: 'Valeri',
    text: ' Specific service that goes to one of the dev people in that team.'
  },
  { startTime: 7489.86, person: 'Valeri', text: " And that's a rotation, basically." },
  {
    startTime: 7492.78,
    person: 'Karol',
    text: ' So someone calls, someone monitoring, this kind of thing.'
  },
  { startTime: 7497.06, person: 'Karol', text: ' Mm-hmm.' },
  { startTime: 7502.57, person: 'Karol', text: ' Complex stuff.' },
  { startTime: 7504.67, person: 'Karol', text: ' Complex.' },
  {
    startTime: 7506.87,
    person: 'Karol',
    text: ' Now, just to change the topic a little, still being on the psychological side of things, rather than the technical one.'
  },
  { startTime: 7518.59, person: 'Karol', text: ' But a completely different topic in that sense.' },
  {
    startTime: 7522.81,
    person: 'Karol',
    text: ' You yourself, being a woman in tech, I must ask, did you have challenges about you being a woman in tech?'
  },
  { startTime: 7534.99, person: 'Karol', text: ' Because the stories differ.' },
  { startTime: 7539.21, person: 'Valeri', text: ' Yeah.' },
  { startTime: 7540.11, person: 'Valeri', text: ' Are you sure, Flea?' },
  { startTime: 7541.19, person: 'Karol', text: ' No.' },
  { startTime: 7544.97, person: 'Karol', text: ' I knew that answer already, so.' },
  { startTime: 7549.87, person: 'Valeri', text: ' Yeah.' },
  { startTime: 7551.33, person: 'Valeri', text: " Yeah, I'm aware that the challenges exist." },
  {
    startTime: 7555.29,
    person: 'Valeri',
    text: ' Well, luckily, you have quite a good portion of girls in tech in Picnic.'
  },
  { startTime: 7561.83, person: 'Valeri', text: ' And I do hear their stories.' },
  { startTime: 7563.87, person: 'Valeri', text: ' I was in the lackey spectrum.' },
  { startTime: 7565.75, person: 'Valeri', text: " I've never encountered that." },
  {
    startTime: 7567.21,
    person: 'Valeri',
    text: ' So from the very day X, even though in university, the girls were obviously a minority, then same with the first companies, I never felt that my gender plays any role.'
  },
  {
    startTime: 7582.33,
    person: 'Valeri',
    text: " I think only once it's been mentioned to me, all the way back in the university, from one of the teachers, because I was skipping her programming lessons."
  },
  {
    startTime: 7591.49,
    person: 'Valeri',
    text: " I didn't like them, because she wasn't able to explain object-orientated programming well enough."
  },
  { startTime: 7596.65, person: 'Valeri', text: " So I'm like, why are you skipping my classes?" },
  { startTime: 7604.67, person: 'Valeri', text: ' You started on a nice project.' },
  { startTime: 7607.13, person: 'Valeri', text: " But actually, girls don't become developers." },
  {
    startTime: 7610.81,
    person: 'Valeri',
    text: ' So maybe you should reconsider and become a designer instead.'
  },
  { startTime: 7616.17, person: 'Karol', text: " No, that doesn't work like that." },
  { startTime: 7618.89, person: 'Karol', text: " In spite of her, I'm going to do development." },
  { startTime: 7622.73, person: 'Valeri', text: ' Yeah.' },
  {
    startTime: 7623.59,
    person: 'Valeri',
    text: ' But I get that she probably had her own beta story, being she was trying to be a developer in tech from the 60s, whatever, and ended up in the university.'
  },
  { startTime: 7635.13, person: 'Valeri', text: ' So I can imagine she has a story of her own.' },
  {
    startTime: 7637.29,
    person: 'Valeri',
    text: " But apart from that very early story, I never felt that if I'm a woman, that changes anything."
  },
  {
    startTime: 7646.33,
    person: 'Valeri',
    text: ' To be honest, I felt more insecure about my age than gender.'
  },
  { startTime: 7650.77, person: 'Karol', text: ' Oh, I got that one as well back in the day.' },
  { startTime: 7653.51, person: 'Karol', text: " That's why I have this." },
  {
    startTime: 7656.87,
    person: 'Karol',
    text: " Well, even if I try all I can, I think it's not possible."
  },
  {
    startTime: 7661.73,
    person: 'Karol',
    text: " That's a completely different set of problems to solve."
  },
  {
    startTime: 7664.77,
    person: 'Karol',
    text: " But the origin of my beard was that I was looking so young and people didn't take me seriously back in the day when I started as an architect, that I started having a beard to age myself visually."
  },
  { startTime: 7677.93, person: 'Karol', text: ' Did it help?' },
  { startTime: 7679.11, person: 'Karol', text: ' Yeah, it actually did help.' },
  { startTime: 7681.45, person: 'Karol', text: ' And just the beard just stayed.' },
  {
    startTime: 7683.11,
    person: 'Karol',
    text: ' And I started like, oh, I actually like myself in a beard.'
  },
  { startTime: 7685.77, person: 'Karol', text: " And I was like, let's leave it." },
  {
    startTime: 7688.01,
    person: 'Karol',
    text: " And so my kids, my wife, they have no idea how I look without the beard because they never seen me without the beard because it's so old."
  },
  {
    startTime: 7696.81,
    person: 'Karol',
    text: ' But for how long have you been having the beard?'
  },
  { startTime: 7699.03, person: 'Karol', text: " Let's see." },
  { startTime: 7699.81, person: 'Karol', text: ' The last time I shaved was 2014 or something.' },
  { startTime: 7707.12, person: 'Valeri', text: ' Okay, okay.' },
  { startTime: 7709.96, person: 'Valeri', text: ' So, oh my God, 10 years.' },
  { startTime: 7712, person: 'Karol', text: ' 11, 11.' },
  {
    startTime: 7714.9,
    person: 'Karol',
    text: ' I can check that in actual timeline because that was somewhere around my best friend having a very specific party.'
  },
  {
    startTime: 7724.78,
    person: 'Karol',
    text: ' And that correlated somewhere with me changing a job.'
  },
  { startTime: 7728.1, person: 'Karol', text: ' So let me just quickly look in LinkedIn.' },
  { startTime: 7735.76, person: 'Karol', text: ' Yes, that would be somewhere around 2014.' },
  {
    startTime: 7738.5,
    person: 'Karol',
    text: " So that's 11 years ago that I shaved last and that related to that party because I already started growing a beard."
  },
  {
    startTime: 7746.84,
    person: 'Karol',
    text: ' But the party was themed red, interpreted however you want.'
  },
  {
    startTime: 7751.38,
    person: 'Karol',
    text: ' So basically, I dressed in a lab coat and painted my whole head, well, hair and beard red.'
  },
  {
    startTime: 7759.82,
    person: 'Karol',
    text: " And despite the paint being washable, it didn't want to wash away."
  },
  {
    startTime: 7768.5,
    person: 'Karol',
    text: ' So I had to shave my whole head and beard away, just not to be red anymore.'
  },
  { startTime: 7776.36, person: 'Karol', text: ' And that was the last time I shaved.' },
  {
    startTime: 7779.3,
    person: 'Karol',
    text: ' So 2014, just to make myself shows older, it had the same concern about my age or being perceived as too young.'
  },
  { startTime: 7792.32, person: 'Karol', text: ' But afterwards, no more.' },
  {
    startTime: 7796.42,
    person: 'Karol',
    text: ' To those daring me in the comments to show a photo of me without a beard, no, those do not exist anymore.'
  },
  { startTime: 7805.16, person: 'Karol', text: ' I mean- Erased from all the service.' },
  { startTime: 7807.8, person: 'Valeri', text: ' All right, yeah.' },
  {
    startTime: 7809.56,
    person: 'Karol',
    text: ' I was very diligent about erasing some parts of my digital identity, just to be- I mean, I dare anybody to find this.'
  },
  {
    startTime: 7819.06,
    person: 'Karol',
    text: " If they do, kudos, I'm going to buy you a beer if you come to the Netherlands."
  },
  {
    startTime: 7824.12,
    person: 'Karol',
    text: " Just to be fair, I'm going to buy a beer if somebody finds a photo of me without the beard."
  },
  { startTime: 7830.54, person: 'Karol', text: ' Good luck with that.' },
  {
    startTime: 7832.68,
    person: 'Karol',
    text: ' And then, okay, you were lucky as a woman in IT.'
  },
  {
    startTime: 7838.56,
    person: 'Karol',
    text: ' Given that, in my personal opinion, we still do not have enough women in IT, I would love to see more women architects.'
  },
  { startTime: 7846.86, person: 'Karol', text: ' I would love to see more developers.' },
  { startTime: 7849.42, person: 'Karol', text: " I mean, it's changing slowly, gradually." },
  { startTime: 7851.6, person: 'Karol', text: ' I see more and more.' },
  {
    startTime: 7853.16,
    person: 'Karol',
    text: ' If I compare it to 10 years ago, where most of the dev teams were men only.'
  },
  {
    startTime: 7859.2,
    person: 'Karol',
    text: ' And if you would have a woman in a team, that would be the project manager or a scrum master, something like that.'
  },
  { startTime: 7865.94, person: 'Karol', text: ' Now we have actually devs and architects.' },
  { startTime: 7868.58, person: 'Karol', text: " That's already an amazing change." },
  {
    startTime: 7871.54,
    person: 'Karol',
    text: " What can you say from your perspective, even though you didn't have those challenges that much, to encourage women to be in IT, to pursue programming jobs or architecture or testers, whatever that may be?"
  },
  { startTime: 7892.28, person: 'Karol', text: ' I know a difficult one.' },
  {
    startTime: 7893.58,
    person: 'Valeri',
    text: " I would say, yeah, it's like with anything else."
  },
  {
    startTime: 7896.88,
    person: 'Valeri',
    text: ' For any other skill, I would give probably the same answer.'
  },
  {
    startTime: 7900.3,
    person: 'Valeri',
    text: ' If you love something and you want to do this, fuck it all, just do it.'
  },
  { startTime: 7906.54, person: 'Valeri', text: " It doesn't matter what's your gender." },
  { startTime: 7908.72, person: 'Valeri', text: " It doesn't matter what people think about you." },
  {
    startTime: 7911.36,
    person: 'Valeri',
    text: " It only matters if you enjoy it and if you invest enough time in this, that's all."
  },
  {
    startTime: 7916.16,
    person: 'Valeri',
    text: " Because whenever I felt, let's say, as if something is wrong with me while being in IT, I always attributed it for me not studying enough or not being good enough in the sense of knowledgeable enough, but never that it has to do something with my gender."
  },
  {
    startTime: 7933.74,
    person: 'Karol',
    text: ' Just to put it in perspective, how often did you fail at doing tasks?'
  },
  { startTime: 7940.62, person: 'Karol', text: ' How often did you make errors over your career?' },
  { startTime: 7945.28, person: 'Karol', text: ' Or how often do you do that now?' },
  { startTime: 7946.4, person: 'Valeri', text: " That's a new definition of error, right?" },
  {
    startTime: 7948.8,
    person: 'Valeri',
    text: " I told you, I almost put down the whole rabbit cluster, but it's not to say an error."
  },
  {
    startTime: 7954.6,
    person: 'Valeri',
    text: " It's something you learn from, and you just accept it and you fix it."
  },
  { startTime: 7958.64, person: 'Valeri', text: " That's it." },
  {
    startTime: 7962.32,
    person: 'Valeri',
    text: " I wouldn't say there were any big failures in terms of that the company suffered from that, or I was lying for a week on my couch, crying my eyes out, but definitely, if I turn back, I will find the amount of decisions I'm not happy about in terms of how the systems are built or technology with children."
  },
  {
    startTime: 7982.98,
    person: 'Valeri',
    text: " But of course, they are, let's say, the minority, out of the blue, like 10%, 15% at least."
  },
  { startTime: 7990.44, person: 'Valeri', text: ' Maybe more.' },
  {
    startTime: 7991.64,
    person: 'Karol',
    text: ' But you would treat them as learning experiences, right?'
  },
  { startTime: 7996.24, person: 'Valeri', text: ' Exactly.' },
  { startTime: 7997.04, person: 'Valeri', text: " I mean, but that's one of the ways to learn." },
  { startTime: 7999.88, person: 'Valeri', text: ' You fail, you learn, you learn.' },
  { startTime: 8002.28, person: 'Valeri', text: ' I can learn.' },
  {
    startTime: 8005.4,
    person: 'Valeri',
    text: " I can do that because I'm not working in the industry where the failure is critical."
  },
  {
    startTime: 8010.6,
    person: 'Valeri',
    text: " I mean, obviously, if you're working with medical equipment and the human bias at stake, that's a different story."
  },
  {
    startTime: 8016.78,
    person: 'Valeri',
    text: " In the worst case, yes, it costs my company money, but then I will be there on the line of fire to fix it as soon as possible because it's my mistake."
  },
  {
    startTime: 8027.86,
    person: 'Karol',
    text: ' So, if we could translate that to an advice, that would be own your mistake and learn from it?'
  },
  { startTime: 8035.74, person: 'Valeri', text: ' Yes, definitely.' },
  {
    startTime: 8037.32,
    person: 'Valeri',
    text: " And I think if you run into challenges, of course, we work, at least I'm working in a multicultural environment, and people coming from different countries and different backgrounds have different mindsets."
  },
  {
    startTime: 8049.34,
    person: 'Valeri',
    text: " And I did see that it's not for everyone very digestible when a female comes in and gives you, let's say, putting in quotes."
  },
  {
    startTime: 8060.12,
    person: 'Valeri',
    text: " But I've never seen people being so stubborn or so unconvertible that it becomes pain in the ass, like a good talk and just being consistently showing that you are here not for beautiful eyes, but because you do stuff, you learn, etc."
  },
  { startTime: 8077.2, person: 'Valeri', text: " Never failed to change people's opinion." },
  {
    startTime: 8082.15,
    person: 'Karol',
    text: ' So, just do what you love and be persistent about that and consistent.'
  },
  { startTime: 8086.93, person: 'Valeri', text: ' Yeah, exactly.' },
  {
    startTime: 8089.33,
    person: 'Valeri',
    text: " And, you know, I do love stupid things like wearing cherries around me, and I don't care if I find myself in the room with 40-year-old guys or 60-year-old architects that look at me like, what this girl is doing here?"
  },
  {
    startTime: 8102.51,
    person: 'Valeri',
    text: " I'm still going to jump and be happy while being a person who designs systems, yes?"
  },
  {
    startTime: 8109.45,
    person: 'Karol',
    text: " In the end, it's about delivering and being passionate about the job, I suppose."
  },
  { startTime: 8116.19, person: 'Valeri', text: ' Yeah, definitely.' },
  { startTime: 8117.77, person: 'Karol', text: ' Definitely.' },
  {
    startTime: 8119.31,
    person: 'Karol',
    text: " With this, we've been at it for two hours and 15 minutes."
  },
  {
    startTime: 8123.49,
    person: 'Karol',
    text: " I think it's a good time and a good point to end the stream today, since I did all the advertisements already."
  },
  { startTime: 8134.53, person: 'Karol', text: ' Dear viewers, thank you for your attention.' },
  { startTime: 8137.77, person: 'Karol', text: ' Valeria, thank you for joining today.' },
  {
    startTime: 8140.59,
    person: 'Karol',
    text: " And everybody, have a lovely night or a lovely afternoon, wherever you're watching, and see you on the next stream."
  },
  { startTime: 8150.23, person: 'Valeri', text: ' Yeah, thank you for' }
])
</script>

<style scoped></style>
