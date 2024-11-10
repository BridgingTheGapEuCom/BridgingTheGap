import type { RouterConfig } from "@nuxt/schema";

export default {
  scrollBehavior(to, from) {
    // scroll to top
    if (from.path !== to.path && !to.hash) {
      return { top: 0 };
    }
  },
} satisfies RouterConfig;
