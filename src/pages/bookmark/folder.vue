<script setup lang="ts">
import type { BookMarkList } from '~/types'

const router = useRouter()
const route = useRoute()

console.log(route.query.folderId)

const allList = JSON.parse(localStorage.getItem('bookmark-list'))
console.log(allList)

const { items } = ref<BookMarkList[]>(allList[route.query.folderId] ?? [])

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
    <div card auto-cols-fr h-20 overflow-hidden class="group" v-for="item in items" @click="openFolder(item.id)">
      <div flex>
        <div font-semibold flex-1>{{ item.title }}</div>
        <div i="carbon-bookmark group-hover:carbon-bookmark-filled"/>
      </div>
      <!-- <div animate-pulse underline invisible group-hover:animate-pulse group-hover:visible>{{ attributes.url }}</div> -->
    </div>
  </div>
</template>