<script setup lang="ts">
const menus = ref<string[]>(["Game", "Bookmark", "Book"])

const router = useRouter()
const go = (name: string) => {
  if (name) {
    router.push(`/${name}`)
  }
}

</script>
<template>
  <div text-3xl>Muzz Studio</div>
  <div
    p-6 max-w-100 ma
    justify-center
    grid="~ cols-2 gap-10"
  >
    <div
      card
      v-for="name in menus"
      @click="go(name)"
    >
      {{ name }}
    </div>
  </div>
</template>