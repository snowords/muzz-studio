<script setup lang="ts">
const games = ref<string[]>(["Sweeper", "2048", "Handle", "Hanoi"])
// 等价于
// const games = ref<Array<string>>(["sweeper", "2048"])

const router = useRouter()
const go = (name: string) => {
  if (name) {
    router.push(`/game/${name}`)
  }
}

</script>
<template>
  <div text-center m4>
    <div text-3xl>Game Menu</div>
    <div class="text-gray-400/50">
      Choose a game and enjoy!
    </div>
  </div>
  <div 
    p-6 max-w-100 ma
    justify-center
    grid="~ cols-2 gap-10"
  >
    <div
      card
      v-for="name in games"
      @click="go(name)"
    >
      {{ name }}
    </div>
  </div>
</template>