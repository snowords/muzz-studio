<script setup lang="ts">
import type { BookMarkList } from '~/types'
import { service } from '~/composables/service'

const router = useRouter()
const route = useRoute()

console.log(route)
console.log(route.query.folderId)

const list = ref<BookMarkList[]>([])

service({
  method: 'get',
  url: '/api/bookmarks/' + route.query.folderId + '?populate=*'
}).then(response => {
  console.log(response.data.data)
  list.value = response.data.data.attributes.items
})

const openFolder = (id: number) => {
  console.log(id)
  router.push({
    path: '/bookmark/item',
    query: { itemId: id}
  })
}

</script>

<template>
  <div grid="~ cols-1 md:cols-4 gap-10" h20 my10 justify-items-center>
    <div card auto-cols-fr h-20 overflow-hidden class="group" v-for="item in list" @click="openFolder(item.id)">
      <div flex>
        <div font-semibold flex-1>{{ item.title }}</div>
        <div i="carbon-bookmark group-hover:carbon-bookmark-filled"/>
      </div>
      <!-- <div animate-pulse underline invisible group-hover:animate-pulse group-hover:visible>{{ attributes.url }}</div> -->
    </div>
  </div>
</template>