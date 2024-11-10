<template>
  <div>
    <ArticleList :articles="articles" />
  </div>
</template>

<script setup>
import articles from "../articles.json" with { type: "json" };
</script>
