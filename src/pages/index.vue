<script setup lang="ts">
import type { MenuItem } from '~/types'
const menus: MenuItem[] = [
  {
    name: "Game",
    menuIcon: "i-carbon-game-console"
  },
  {
    name: "Bookmark",
    menuIcon: "i-carbon-bookmark"
  },
  {
    name: "Book",
    menuIcon: "i-carbon-book"
  }
]

const router = useRouter()
const go = (name: string) => {
  if (name) {
    router.push(`/${name}`)
  }
}

</script>
<template>
  <div text-3xl text-center py-2>Muzz Studio</div>
  <div
    p-6 max-w-100 ma
    justify-center
    grid="~ cols-2 gap-10"
  >
    <div
      card flex gap-2
      v-for="menu in menus"
      @click="go(menu.name)"
    >
      <div :class="menu.menuIcon" mt2px />
      {{ menu.name }}
    </div>
  </div>
</template>