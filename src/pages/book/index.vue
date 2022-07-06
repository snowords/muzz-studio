<script setup lang="ts">
import type { BookList } from '~/types'
import { service } from '~/composables/service'

const bookList = ref<BookList[]>([])

service({
  method: 'get',
  url: '/api/books?populate=*'
}).then(response => {
  console.log(response.data)
  bookList.value = response.data.data
})

const showInfo = (id: number) => {
  service({
    method: 'get',
    url: '/api/books/' + id,
  }).then(response => {
    console.log(response.data)
  })
}

const imageUrl = import.meta.env.VITE_CMS_URL

</script>

<template>
  <div text-center>
    Book
  </div>
  <div grid="~ cols-1 md:cols-3 gap-10" h20 my10 justify-items-center >
    <div cursor-pointer flex v-for="({ attributes, id }) in bookList" @click="showInfo(id)">
      <img h40 p6 rounded-md class="bg-gray-500/50" :src="imageUrl + attributes.cover.data.attributes.url" />
      <div inline-block mx-4>
        <div>name：{{ attributes.name }}</div>
        <div>auther：{{ attributes.auther }}</div>
        <div>word：{{ attributes.word }}w</div>
      </div>
    </div>
  </div>


</template>