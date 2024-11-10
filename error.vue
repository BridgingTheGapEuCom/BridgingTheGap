<template>
  <div
    class="w-full h-screen text-black flex flex-col items-center justify-center"
  >
    <div class="big">Are you lost?</div>
    <button @click="handleError" class="link">
      Go back to the articles page
    </button>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const handleError = () => clearError({ redirect: "/" });
</script>

<style lang="scss" scoped>
.big {
  font-size: 5rem;
}
</style>
