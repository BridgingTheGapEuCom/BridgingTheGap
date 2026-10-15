<script lang="ts" setup>
const route = useRoute()

await navigateTo(
  { path: '/events', query: route.query, hash: route.hash },
  { redirectCode: 301, replace: true }
)
</script>
