<template>
  <div class="about-page">
    <header class="about-hero">
      <p class="about-eyebrow">About</p>
      <h1>The people and idea behind</h1>
      <h1>BridgingTheGap.eu.com</h1>
      <div class="about-bridge" aria-hidden="true">
        <img src="~/assets/logo.webp" alt="" />
      </div>
    </header>

    <section class="project-overview" aria-labelledby="project-heading">
      <div class="project-summary">
        <p class="section-eyebrow">About the project</p>
        <h2 id="project-heading">
          BridgingTheGap.eu.com is an open-source, vendor-agnostic knowledge base about application
          integration.
        </h2>
        <a
          class="editorial-action"
          href="https://github.com/BridgingTheGapEuCom/BridgingTheGap"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgIcon :path="mdiGithub" :size="20" type="mdi" aria-hidden="true" />
          <span>View source code on GitHub</span>
          <SvgIcon :path="mdiOpenInNew" :size="17" type="mdi" aria-hidden="true" />
          <span class="sr-only">(opens in a new tab)</span>
        </a>
      </div>

      <div class="project-description">
        <p>
          Application integration is a critical part of modern IT, yet formal, vendor-neutral
          learning material is surprisingly difficult to find. Much of the available training
          focuses on particular products rather than the architectural concepts behind them.
        </p>
        <p>
          We collect practical knowledge from people working in the field and make it freely
          available. Our goal is to explain integration concepts, patterns, and architectural
          approaches independently of any particular vendor or technology.
        </p>
        <p>
          BridgingTheGap.eu.com is open source and community-driven. We believe collaboration helps
          create high-quality, unbiased content that supports architects and engineers solving
          real-world integration challenges.
        </p>
      </div>
    </section>

    <section class="team" aria-labelledby="team-heading">
      <p id="team-heading" class="section-eyebrow team-heading">
        The people behind BridgingTheGap.eu.com
      </p>

      <article v-for="member in team" :key="member.name" class="team-member">
        <img
          class="team-portrait"
          :src="member.photo"
          :alt="`${member.name} portrait`"
          :width="member.photoSize"
          :height="member.photoSize"
        />

        <div class="team-member-content">
          <header>
            <h2>{{ member.name }}</h2>
            <p>{{ member.role }}</p>
          </header>

          <div class="team-biography">
            <p v-for="paragraph in member.biography" :key="paragraph">{{ paragraph }}</p>
          </div>

          <ul class="team-contact" :aria-label="`${member.name} contact links`">
            <li>
              <a
                :href="member.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${member.name} on LinkedIn (opens in a new tab)`"
              >
                <SvgIcon :path="mdiLinkedin" type="mdi" :size="20" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a :href="`mailto:${member.email}`" :aria-label="`Email ${member.name}`">
                <SvgIcon :path="mdiAt" type="mdi" :size="20" aria-hidden="true" />
                <span>Email</span>
              </a>
            </li>
          </ul>
        </div>
      </article>
    </section>

    <section class="about-links" aria-label="More about BridgingTheGap.eu.com">
      <article class="about-link-card">
        <SvgIcon class="about-link-icon" :path="mdiAccountGroupOutline" :size="42" type="mdi" />
        <div>
          <h2>Reviewers</h2>
          <p>Our content is reviewed by experienced integration practitioners.</p>
          <NuxtLink class="editorial-action" to="/aboutOurReviewers">
            <span>Meet our reviewers</span>
            <SvgIcon :path="mdiArrowRight" :size="18" type="mdi" aria-hidden="true" />
          </NuxtLink>
        </div>
      </article>

      <article class="about-link-card">
        <SvgIcon class="about-link-icon" :path="mdiGithub" :size="42" type="mdi" />
        <div>
          <h2>Open source</h2>
          <p>Our content and source code are freely available for everyone.</p>
          <a
            class="editorial-action"
            href="https://github.com/BridgingTheGapEuCom/BridgingTheGap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View on GitHub</span>
            <SvgIcon :path="mdiOpenInNew" :size="17" type="mdi" aria-hidden="true" />
            <span class="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </article>
    </section>
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from '@jamescoyle/vue-icon'
import {
  mdiAccountGroupOutline,
  mdiArrowRight,
  mdiAt,
  mdiGithub,
  mdiLinkedin,
  mdiOpenInNew
} from '@mdi/js'

usePageSeo({
  title: 'About BridgingTheGap.eu.com',
  description:
    'Learn about the open-source BridgingTheGap.eu.com project and meet the integration architects who share vendor-agnostic application integration knowledge.',
  path: '/about'
})

interface TeamMember {
  name: string
  role: string
  photo: string
  photoSize: number
  biography: string[]
  linkedin: string
  email: string
}

const team: TeamMember[] = [
  {
    name: 'Karol Skrzymowski',
    role: 'Enterprise / Integration Architect',
    photo: '/Karol.webp',
    photoSize: 1500,
    biography: [
      "I'm an Enterprise and Integration Architect with a passion for application integration and over a decade of specialized experience in the field. My journey began as a junior developer, who stumbled onto Application Integration by pure chance and stayed for the joy of learning.",
      "My expertise lies primarily in API-Led Architecture, although I've also delved into the realm of Event-Driven Architecture (EDA) to broaden my professional toolkit. I've worked extensively with a myriad of integration platforms, including Tibco BusinessWorks 5.x and 6.x, Boomi, WebMethods, Mulesoft, Azure Integration Services, and WSO2, constantly adapting to the evolving landscape of integration technologies.",
      'I see the world of Application Integration as not just a profession but a passion. I believe it to be one of the most fascinating fields in IT, with endless possibilities for innovation and problem-solving. To further this belief, I actively try to contribute to helping others understand this field by creating whitepapers and training materials that explain complex integration concepts, empowering others to navigate this exciting domain with confidence.'
    ],
    linkedin: 'https://www.linkedin.com/in/karolskrzymowski/',
    email: 'karol@bridgingthegap.eu.com'
  },
  {
    name: 'Radosław Przewuski',
    role: 'Integration Platforms Expert',
    photo: '/Radek.webp',
    photoSize: 1500,
    biography: [
      "Greetings, tech aficionados! I'm the Integration Whisperer, boasting over a decade of experience in the mystical arts of integration platforms. Picture me as the Gandalf of your digital realm, wielding my staff of code with the wisdom of a thousand sages. From the humble beginnings of coding in caves to now surfing the binary waves of innovation, I've journeyed through the ages of technology. It's like I've embarked on an epic quest through the realms of integration, slaying dragons of data inconsistency and forging alliances between disparate systems.",
      "With extensive experience in Tibco BusinessWorks, WebMethods, Mulesoft, and more, I'm equipped to cast spells of integration magic like no other. So, whether you're lost in the labyrinth of legacy systems or venturing into the unknown territories of modern APIs, fear not! I'm here to help."
    ],
    linkedin: 'https://www.linkedin.com/in/rados%C5%82aw-przewuski/',
    email: 'radek@bridgingthegap.eu.com'
  },
  {
    name: 'Hubert Drabczyk',
    role: 'Business Analyst / Solution Architect',
    photo: '/Hubert.webp',
    photoSize: 1200,
    biography: [
      'With background in electronics and actual experience in turning an idea into a manufactured device, I also studied IT management and most of my career was in IT. I worked as developer, project manager, systems analyst, solution and integration architect and as a business analyst.',
      'Alternating between analyst and architect roles, I worked for telco, banks, insurer, airline, goods manufacturers and retailers, utilities and more. I have experience as employee, consultant and even as company owner (UBO) - which gives good, multiple points of view insight into business around IT.',
      "My expertise is in understanding the context of IT projects and figuring out, what has to be done, and more importantly, what should not be done. That involves modeling the business processes, system-to-system and system-to-user interactions; understanding the data and mapping it between domains and systems. I see integration as next level of IT systems evolution, the level which brings its own challenges and promises. I'm eager to help solving the challenges to take the promised profit."
    ],
    linkedin: 'https://www.linkedin.com/in/hubert-drabczyk-63b06628/',
    email: 'hubert@bridgingthegap.eu.com'
  },
  {
    name: 'Dominik Kruszewski',
    role: 'DevOps Expert',
    photo: '/Dominik.webp',
    photoSize: 904,
    biography: [
      "For over a decade, I've been roaming the IT landscape, building, breaking, and fixing whatever crosses my path. My tools? BASH, CLI, and a steady supply of energy drinks. Part caffeine-fueled coding machine, part stay-at-home dad with a secret identity as a gym rat.",
      "My expertise spans a wide range of technologies, from in-depth details of Linux to the lofty heights of cloud computing - Oracle Cloud, Azure, GCP and AWS. I've wrangled containers, managed Kubernetes and OpenShift clusters from cradle to grave, and battled the complexities of on-premises installations.",
      "Integration? Been there, done that. I've stitched together systems with numerous providers such as SoftwareAG WebMethods, TIBCO, and MuleSoft to ensure smooth data flow between platforms. Need a one-man army? I've got you covered."
    ],
    linkedin: 'https://www.linkedin.com/in/dominik-kruszewski-a30829aa/',
    email: 'dominik@bridgingthegap.eu.com'
  }
]
</script>

<style scoped>
.about-page {
  width: min(100%, 74rem);
  margin: 0 auto;
}

.about-hero {
  display: flex;
  align-items: center;
  padding: clamp(2.25rem, 5vw, 4rem) 0 clamp(2rem, 4vw, 3rem);
  flex-direction: column;
  text-align: center;
}

.about-eyebrow,
.section-eyebrow {
  margin: 0;
  color: var(--editorial-muted);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.about-hero h1 {
  max-width: 28ch;
  margin: 0.75rem 0 0;
  font-size: clamp(2rem, 4vw, 3.15rem);
  line-height: 1.04;
  letter-spacing: -0.045em;
}

.about-bridge {
  display: grid;
  width: min(100%, 44rem);
  margin-top: clamp(1.5rem, 3vw, 2.25rem);
  place-items: center;
}

.about-bridge img {
  display: block;
  width: min(100%, 23rem);
  height: auto;
  margin: 0;
  filter: grayscale(1);
}

:global(html:has(.dark) .about-bridge img) {
  filter: grayscale(1) invert(1);
}

.project-overview {
  display: grid;
  grid-template-columns: minmax(15rem, 0.9fr) minmax(0, 1.35fr);
  padding: clamp(2rem, 4vw, 3.5rem) 0;
  border-bottom: 1px solid var(--editorial-border);
  gap: clamp(2rem, 8vw, 7rem);
}

.project-summary {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.project-summary h2 {
  margin: 0.75rem 0 0;
  font-size: clamp(1.5rem, 2.4vw, 2rem);
  line-height: 1.2;
  letter-spacing: -0.025em;
}

.project-summary .editorial-action {
  margin-top: auto;
}

.project-description {
  display: grid;
  color: var(--editorial-text);
  font-size: 0.95rem;
  line-height: 1.6;
  gap: 1rem;
}

.project-description p,
.about-link-card p {
  margin: 0;
}

.editorial-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0.55rem 0.85rem;
  border: 1px solid var(--editorial-border-strong);
  border-radius: 0.45rem;
  color: var(--editorial-text);
  background: var(--editorial-surface);
  font-size: 0.85rem;
  font-weight: 700;
  gap: 0.55rem;
  text-decoration: none;
}

.editorial-action:hover {
  border-color: var(--editorial-text);
}

.editorial-action :deep(svg),
.team-contact :deep(svg) {
  width: 1.25rem;
  height: 1.25rem;
  margin: 0;
  flex: 0 0 auto;
}

.team-heading {
  padding: 2rem 0 1rem;
}

.team-member {
  display: grid;
  grid-template-areas: 'portrait content';
  grid-template-columns: clamp(15rem, 15vw, 20rem) minmax(0, 1fr);
  align-items: start;
  padding: clamp(1.5rem, 3vw, 2.25rem) 0;
  border-bottom: 1px solid var(--editorial-border);
  gap: clamp(1.75rem, 4vw, 3.5rem);
}

.team-member:nth-of-type(even) {
  grid-template-areas: 'content portrait';
  grid-template-columns: minmax(0, 1fr) clamp(15rem, 15vw, 20rem);
}

.team-portrait {
  grid-area: portrait;
  width: 100%;
  aspect-ratio: 1;
  margin: 0;
  border: 1px solid var(--editorial-border);
  border-radius: 0.55rem;
  background: var(--editorial-surface-muted);
  filter: grayscale(1);
  object-fit: cover;
}

.team-member-content {
  grid-area: content;
  min-width: 0;
  max-width: 76ch;
}

.team-member-content header {
  margin-bottom: 0.85rem;
}

.team-member h2 {
  margin: 0;
  font-size: clamp(1.45rem, 2.1vw, 1.8rem);
  line-height: 1.08;
  letter-spacing: -0.025em;
}

.team-member-content header p {
  margin: 0.3rem 0 0;
  font-size: 0.88rem;
  font-weight: 700;
}

.team-biography {
  display: grid;
  color: var(--editorial-text);
  font-size: 0.9rem;
  line-height: 1.55;
  gap: 0.8rem;
}

.team-biography p {
  margin: 0;
  text-align: left;
}

.team-contact {
  display: flex;
  align-items: center;
  margin: 0.85rem 0 0;
  padding: 0;
  gap: 0.85rem;
  list-style: none;
}

.team-contact li {
  display: flex;
  align-items: center;
}

.team-contact li + li::before {
  width: 1px;
  height: 1.2rem;
  margin-right: 0.85rem;
  content: '';
  background: var(--editorial-border-strong);
}

.team-contact a {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  color: var(--editorial-text);
  font-size: 0.86rem;
  gap: 0.45rem;
  text-decoration: none;
}

.team-contact a:hover {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 0.2rem;
}

.about-links {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding: clamp(2rem, 4vw, 3rem) 0;
  gap: clamp(1rem, 3vw, 2rem);
}

.about-link-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
  padding: clamp(1.25rem, 2vw, 1.75rem);
  border: 1px solid var(--editorial-border);
  border-radius: 0.55rem;
  background: var(--editorial-surface);
  gap: 1rem;
}

.about-link-icon {
  width: 2.625rem;
  height: 2.625rem;
  margin: 0;
  flex: 0 0 auto;
  color: var(--editorial-muted);
}

.about-link-card h2 {
  margin: 0;
  font-size: 1.1rem;
}

.about-link-card p {
  max-width: 36ch;
  margin-top: 0.35rem;
  color: var(--editorial-text);
  font-size: 0.88rem;
  line-height: 1.45;
  text-align: left;
}

.about-link-card .editorial-action {
  margin-top: 1rem;
}

@media (max-width: 52rem) {
  .about-page {
    width: min(100%, 42rem);
  }

  .project-overview {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.5rem;
  }

  .project-summary .editorial-action {
    margin-top: 1.5rem;
  }

  .team-member,
  .team-member:nth-of-type(even) {
    grid-template-areas:
      'portrait'
      'content';
    grid-template-columns: minmax(0, 1fr);
    gap: 1.5rem;
  }

  .team-portrait {
    width: min(100%, 20rem);
    justify-self: center;
  }
}

@media (max-width: 38rem) {
  .about-hero {
    padding-top: 2rem;
  }

  .team-heading {
    padding-top: 1.75rem;
  }

  .team-member,
  .team-member:nth-of-type(even) {
    padding: 1.75rem 0;
  }

  .about-links {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 25rem) {
  .editorial-action {
    width: 100%;
  }

  .about-link-card {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
