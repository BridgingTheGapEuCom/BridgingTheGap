<template>
  <div
    class="text-black dark:text-gray-50 w-full px-4 py-4 flex justify-center items-stretch flex-grow article"
  >
    <article>
      <div class="flex flex-col mt-10 mb-20">
        <img
          src="~/assets/logo.webp"
          class="m-auto max-w-96 dark:invert"
        >
      </div>
      <h1 class="text-center">
        About the project
      </h1>
      <p>
        Welcome to Bridging the Gap, an open-source educational project aimed at closing the
        knowledge divide in the IT field of Application Integration. Our mission is to empower
        learners with comprehensive insights into application integration, providing them with
        definitions, examples, and integration patterns to navigate this intricate domain.
      </p>
      <p>
        In today's rapidly evolving technological landscape, application integration plays a crucial
        role in ensuring seamless communication and functionality across diverse systems and
        platforms. However, despite its significance, formal education often overlooks this critical
        aspect, leaving aspiring professionals with limited understanding and resources.
      </p>
      <p>
        Existing training programs in application integration tend to be technology vendor-centric,
        inherently biased towards specific platforms or solutions. Recognizing this limitation, we
        strive to offer a vendor-agnostic knowledge base accessible to anyone seeking to expand
        their expertise in this field. Our content is meticulously curated to provide a broader
        perspective, allowing learners to delve into various architectural styles and understand how
        application integration fits within them.
      </p>
      <p>
        At Bridging the Gap, we believe in the power of open collaboration and community-driven
        learning. By fostering a platform where individuals can freely access a wealth of unbiased
        information, we aim to bridge the gap between theoretical knowledge and practical
        application in the realm of application integration.
      </p>
      <p>
        Join us on this journey as we embark on a mission to democratize access to comprehensive
        education in application integration, empowering learners to navigate the complexities of
        modern IT with confidence and clarity.
      </p>
      <div
        class="flex-1 h-[1px] mx-auto max-w-screen-xs mt-10 dark:bg-neutral-700 bg-neutral-300 self-center"
      />
      <div class="flex flex-grow items-center">
        <div class="flex flex-grow flex-col items-center">
          <h1>Source code</h1>
          <span>A full content of this webpage, including it's code, can be found in our
            <a
              href="https://github.com/BridgingTheGapEuCom/BridgingTheGap"
              class="link text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              target="_blank"
            ><b>GitHub</b></a>
            repository
          </span>
        </div>
      </div>
      <div class="md:hidden flex flex-grow items-center">
        <div class="flex flex-grow flex-col items-center gap-3">
          <div class="min-w-[60vw] lg:min-w-[0] my-2 border-b dark:border-neutral-800" />
          <h3>License</h3>
          <div><b>Bridging the Gap</b> © 2024</div>
          <div>is licensed under</div>
          <div class="flex">
            <a
              href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"
              rel="license noopener noreferrer"
              style="display: inline-block"
              target="_blank"
            />
            &nbsp;CC BY 4.0
          </div>
          <div class="flex">
            <a
              href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"
              target="_blank"
            >
              <img
                alt=""
                class="w-[1.5rem] mx-1 self-center"
                src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
              >
            </a>
            <a
              href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"
              target="_blank"
            >
              <img
                alt=""
                class="w-[1.5rem]"
                src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
              >
            </a>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup></script>

<style scoped></style>
