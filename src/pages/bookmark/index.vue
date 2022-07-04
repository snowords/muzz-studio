<script setup lang="ts">
import type { BookMarkList } from '~/types'
import { service } from '~/composables/service'

const list = ref<BookMarkList[]>([])

service({
  method: 'get',
  url: '/api/bookmarks'
}).then(response => {
  console.log(response.data)
  list.value = response.data.data
})

const toPage = (url: string) => {
  window.location.href = url
}

</script>

<template>
  <div grid="~ cols-1 md:cols-4 gap-10" h20 my10 justify-items-center>
    <div card auto-cols-fr h-24 hover:h-34 overflow-hidden class="group" v-for="({ attributes }) in list" @click="toPage(attributes.url)">
      <div flex>
        <div font-semibold flex-1>{{ attributes.title }}</div>
        <div i="carbon-bookmark group-hover:carbon-bookmark-filled"/>
      </div>
      <div animate-pulse underline invisible group-hover:animate-pulse group-hover:visible>{{ attributes.url }}</div>
    </div>
  </div>
</template>