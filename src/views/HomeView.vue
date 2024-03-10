<template>
  <div>
    <article-list :articles="articles"/>
  </div>
</template>

<script setup>
import ArticleList from "@/components/ArticleList.vue";
import articles from "../../articles.json" with {type: "json"}
</script>
