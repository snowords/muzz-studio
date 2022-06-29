<script setup lang="ts">
import type { BookInfo } from '~/types'
import { service } from '~/composables/service'

interface BookList {
  attributes: BookInfo
  id: number
}

const bookList = ref<BookList[]>([])

service({
  method: 'get',
  url: '/books'
}).then(response => {
  console.log(response.data)
  bookList.value = response.data.data
})

const showInfo = (id: number) => {
  service({
    method: 'get',
    url: '/books/' + id,
  }).then(response => {
    console.log(response.data)
  })
}

</script>

<template>
  Book
  <div grid="~ cols-3 gap-10" h20 my10 >
    <div cursor-pointer v-for="({ attributes, id }) in bookList" @click="showInfo(id)">
      {{ attributes.name }}
      {{ attributes.auther }}
      {{ attributes.word }}w字
    </div>
  </div>
</template>