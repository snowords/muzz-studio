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


const item = [2018, 2019, 2020]

const objItem = [
  {
    label: '全部',
    value: ''
  }
]

item.map(item => {
  objItem.push({
    label: item,
    value: item
  })
})

const select =ref('')

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
    <div>
      <div>选择结果： {{ select }} </div>
      <el-select w200px v-model="select" placeholder="请选择年份">
        <el-option 
          v-for="(item, index) in objItem" 
          :key="index" 
          :label="item.label" 
          :value="item.value" />
      </el-select>
    </div>
  </div>


</template>