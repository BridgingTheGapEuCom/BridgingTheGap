<template>
  <LandingPageLandingLayout :page-id="5">
    <div class="text-center flex flex-col items-center justify-center">
      <b style="font-size: min(6dvh, 10dvw)"> Meet Your Guides </b>
    </div>
    <div class="text-center flex flex-col items-center justify-center">
      <div style="font-size: min(2.8dvh, 4.4dvw)">
        Behind <b>Bridging The Gap</b> are seasoned
      </div>
      <div style="font-size: min(2.8dvh, 4.4dvw)">
        professionals dedicated to demystifying
      </div>
      <div style="font-size: min(2.8dvh, 4.4dvw)">
        Enterprise Application Integration
      </div>
    </div>
    <Carousel
      v-bind="carouselConfig"
      style="max-width: 90dvw"
      class="self-center"
    >
      <Slide
        v-for="member of members"
        :key="member.name"
      >
        <div
          class="bg-gray-700 rounded-md text-center flex items-center justify-center px-8 py-8 text-white"
          style="overflow: hidden"
        >
          <div>
            <div
              class="flex text-left justify-between w-full items-center"
              style="height: min(12dvh, 30dvw)"
            >
              <div>
                <div style="font-size: min(4dvh, 7dvw)">
                  {{ member.name }}
                </div>
                <div style="font-size: min(4dvh, 7dvw)">
                  {{ member.lastName }}
                </div>
              </div>
              <div
                class="border-black border-2 rounded-full"
                style="width: min(12dvh, 30dvw)"
              >
                <img
                  :src="member.picture"
                  class="rounded-full w-full h-full"
                >
              </div>
            </div>
            <div
              class="text-left mt-3"
              style="font-size: min(1.9dvh, 3.2dvw); height: 35dvh"
            >
              {{ member.description }}
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </LandingPageLandingLayout>
</template>

<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 5000
}

const members = [
  {
    name: 'Karol',
    lastName: 'Skrzymowski',
    description:
      'Enterprise and Integration Architect with nearly 15 years of experience in application \n' +
      'integration, specializing in API-Led and Event-Driven Architectures. Proficient in various \n' +
      'integration platforms (Tibco, Boomi, Mulesoft, Azure, etc.). Believes that application \n' +
      'integration is one of the most fascinating fields in IT, with endless possibilities for \n' +
      'innovation. Dedicated to empowering others through whitepapers, workshops and training \n' +
      'materials that explain complex integration concepts.',
    picture: '/Karol_portrait.webp'
  },
  {
    name: 'Radosław',
    lastName: 'Przewuski',
    description:
      'A highly experienced integration specialist, the "Integration Whisperer" brings almost 15 ' +
      'years of expertise to your technology challenges. He excels in designing and implementing ' +
      'solutions across major platforms like Tibco BusinessWorks, WebMethods, and Mulesoft. His ' +
      'focus is on resolving data silos and ensuring smooth interoperability between your ' +
      'critical systems, whether they are established legacy platforms or cutting-edge APIs. ' +
      'Partner with him to navigate the complexities of integration and unlock new levels of ' +
      'efficiency',
    picture: '/Radek_portrait.webp'
  },
  {
    name: 'Hubert',
    lastName: 'Drabczyk',
    description:
      'With a unique background in electronics and IT management, he offers a multifaceted ' +
      'perspective on IT projects. His extensive career-spanning roles from developer to ' +
      'solution/integration architect and business analyst across diverse industries like ' +
      'telecom, finance, and retail, and experience as an employee, consultant, and ' +
      'owner-provides deep business insight. He excels at defining project scope, modeling ' +
      'processes and data, and offering strategic guidance. Viewing integration as key to ' +
      'IT evolution, he helps clients navigate its challenges to realize tangible benefits.',
    picture: '/Hubert_portrait.webp'
  },
  {
    name: 'Dominik',
    lastName: 'Kruszewski',
    description:
      'For over a decade, he has tackled the IT landscape, adeptly building, troubleshooting, ' +
      'and resolving complex challenges using tools like BASH and CLI. His expertise spans deep ' +
      'Linux knowledge to multi-cloud environments (Oracle, Azure, GCP, AWS), container ' +
      'orchestration (Kubernetes, OpenShift), and on-premises systems. A seasoned integration ' +
      'specialist, he has connected systems using SoftwareAG WebMethods, TIBCO, and MuleSoft ' +
      'for seamless data flow. He brings a potent, self-reliant skill set ready for diverse ' +
      'IT demands.',
    picture: '/Dominik_portrait.webp'
  }
]
</script>

<style>
.carousel {
  --vc-nav-color: white;
  --vc-pgn-background-color: var(--tw-color-neutral-500);
  --vc-pgn-active-color: white;
  --vc-pgn-border-radius: 13px;
  --vc-pgn-height: 13px;
  --vc-pgn-width: 13px;
  --vc-pgn-gap: 20px;
}
</style>
