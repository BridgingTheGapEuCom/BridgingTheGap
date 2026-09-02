<template>
  <div class="reviewers-page">
    <header class="reviewers-hero">
      <img class="reviewers-bridge" src="~/assets/logo.webp" alt="" />
      <h1>Our Reviewers</h1>
      <p>
        Our reviewers are experienced practitioners and architects who help ensure the quality,
        accuracy, and relevance of our content.
      </p>
    </header>

    <section class="reviewers-directory" aria-label="Article reviewers">
      <article v-for="reviewer in reviewers" :key="reviewer.name" class="reviewer-row">
        <img
          v-if="reviewer.photo"
          class="reviewer-portrait"
          :src="reviewer.photo"
          :alt="`${reviewer.name} portrait`"
        />
        <div v-else class="reviewer-portrait reviewer-portrait-placeholder" aria-hidden="true">
          <SvgIcon :path="mdiAccountOutline" :size="34" type="mdi" />
        </div>

        <div class="reviewer-identity">
          <h2>
            <a
              :href="reviewer.link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`${reviewer.name} on LinkedIn (opens in a new tab)`"
            >
              {{ reviewer.name }}
            </a>
          </h2>
          <p class="reviewer-role">{{ reviewer.role }}</p>
          <p class="reviewer-biography">{{ reviewer.biography }}</p>
        </div>

        <div class="reviewer-articles">
          <h3>Articles reviewed by {{ reviewer.name }}</h3>
          <ul>
            <li v-for="article in reviewer.reviewed" :key="article.link">
              <NuxtLink :to="`/articles/${article.link}`">{{ article.title }}</NuxtLink>
            </li>
          </ul>
        </div>
      </article>
    </section>
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccountOutline } from '@mdi/js'
import type { Article } from '~/Types/Article'
import articlesData from '~/articles.json'
import reviewerProfileData from '~/reviewers.json'

usePageSeo({
  title: 'Our Reviewers',
  description:
    'Meet the expert reviewers who help ensure the quality and accuracy of BridgingTheGap.eu.com integration architecture articles.',
  path: '/aboutOurReviewers'
})

interface ReviewerProfile {
  name: string
  photo: string | null
  role: string
  biography: string
}

interface ReviewedArticle {
  title: string
  link: string
}

interface ReviewerViewModel {
  name: string
  link: string
  photo: string | null
  role: string
  biography: string
  reviewed: ReviewedArticle[]
}

const reviewerProfiles = new Map<string, ReviewerProfile>(
  (reviewerProfileData as ReviewerProfile[]).map((profile) => [profile.name, profile])
)
const articles = articlesData as Article[]

const reviewerRecords = new Map<string, Pick<ReviewerViewModel, 'name' | 'link' | 'reviewed'>>()

for (const article of articles) {
  for (const reviewer of article.reviewers ?? []) {
    const record = reviewerRecords.get(reviewer.reviewer) ?? {
      name: reviewer.reviewer,
      link: reviewer.link,
      reviewed: []
    }

    record.link = reviewer.link
    record.reviewed.push({ title: article.title, link: article.name })
    reviewerRecords.set(reviewer.reviewer, record)
  }
}

const reviewers: ReviewerViewModel[] = [...reviewerRecords.values()]
  .map((reviewer) => {
    const profile = reviewerProfiles.get(reviewer.name)
    return {
      ...reviewer,
      photo: profile?.photo ?? null,
      role: profile?.role?.trim() || 'Role to be confirmed',
      biography: profile?.biography?.trim() || 'Biography coming soon.'
    }
  })
  .sort((first, second) => first.name.localeCompare(second.name))
</script>

<style scoped>
.reviewers-page {
  width: min(100%, 43rem);
  margin: 0 auto;
}

.reviewers-hero {
  display: flex;
  align-items: center;
  padding: clamp(0.35rem, 1vw, 0.75rem) 0 clamp(0.85rem, 1.5vw, 1.2rem);
  flex-direction: column;
  text-align: center;
}

.reviewers-bridge {
  width: clamp(9rem, 17vw, 12rem);
  height: clamp(7rem, 12vw, 9rem);
  filter: grayscale(1);
  object-fit: contain;
}

:global(html:has(.dark) .reviewers-bridge) {
  filter: grayscale(1) invert(1);
}

.reviewers-hero h1 {
  margin: -0.15rem 0 0;
  font-size: clamp(2rem, 4vw, 2.7rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.reviewers-hero p {
  max-width: 54ch;
  margin: 1.15rem 0 0;
  color: var(--editorial-text);
  font-size: clamp(0.88rem, 1.3vw, 0.98rem);
  line-height: 1.5;
}

.reviewers-directory {
  border-top: 1px solid var(--editorial-border);
}

.reviewer-row {
  display: grid;
  grid-template-columns: 3.7rem minmax(17rem, 1.05fr) minmax(0, 0.95fr);
  align-items: start;
  padding: 0.45rem 0;
  border-bottom: 1px solid var(--editorial-border);
  gap: 1rem;
}

.reviewer-portrait {
  width: 3.4rem;
  height: 3.4rem;
  border: 1px solid var(--editorial-border);
  border-radius: 999px;
  background: var(--editorial-surface-muted);
  filter: grayscale(1);
  object-fit: cover;
}

.reviewer-portrait-placeholder {
  display: grid;
  place-items: center;
  color: var(--editorial-muted);
  background: var(--editorial-surface-muted);
  filter: none;
}

.reviewer-identity {
  min-width: 0;
}

.reviewer-identity h2 {
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.2;
}

.reviewer-identity h2 a {
  color: var(--editorial-text);
  text-decoration-color: transparent;
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.16rem;
}

.reviewer-identity h2 a:hover {
  text-decoration-color: currentColor;
}

.reviewer-role {
  margin: 0.2rem 0 0;
  color: var(--editorial-text);
  font-size: 0.75rem;
  line-height: 1.3;
}

.reviewer-biography {
  max-width: 31ch;
  margin: 0.35rem 0 0;
  color: var(--editorial-muted);
  font-size: 0.74rem;
  line-height: 1.4;
}

.reviewer-articles {
  min-width: 0;
  padding-left: 0.5rem;
}

.reviewer-articles h3 {
  margin: 0 0 0.45rem;
  font-size: 0.76rem;
  font-weight: 400;
  line-height: 1.35;
}

.reviewer-articles ul {
  display: grid;
  margin: 0;
  padding: 0;
  gap: 0.3rem;
  list-style: none;
}

.reviewer-articles li {
  min-width: 0;
  font-size: 0.75rem;
  line-height: 1.35;
}

.reviewer-articles a {
  color: var(--editorial-muted);
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.15rem;
}

.reviewer-articles a:hover {
  color: var(--editorial-text);
  text-decoration-thickness: 2px;
}

@media (max-width: 48rem) {
  .reviewers-page {
    width: min(100%, 38rem);
  }

  .reviewer-row {
    grid-template-columns: 4.25rem minmax(0, 1fr);
    padding: 1.15rem 0;
  }

  .reviewer-articles {
    grid-column: 1 / -1;
    padding: 0.15rem 0 0 5.25rem;
  }
}

@media (max-width: 30rem) {
  .reviewers-hero {
    padding-top: 0.75rem;
  }

  .reviewers-hero p {
    margin-top: 1rem;
  }

  .reviewer-row {
    grid-template-columns: 3.65rem minmax(0, 1fr);
    gap: 0.8rem;
  }

  .reviewer-portrait {
    width: 3.5rem;
    height: 3.5rem;
  }

  .reviewer-articles {
    padding-left: 4.45rem;
  }
}
</style>
