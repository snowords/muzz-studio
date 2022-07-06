<script setup lang="ts">
import type { BookMarkList } from '~/types'
import { service } from '~/composables/service'

const list = ref<BookMarkList[]>([])
const iframeSrc = ref<string>('')

const router = useRouter()
useStorage('bookmark-list', list)

service({
  method: 'get',
  url: '/api/muzz-bookmark'
}).then(response => {
  console.log(response.data.data.attributes.content)
  list.value = response.data.data.attributes.content
})

const copy = (url: string) => {
  navigator.clipboard.writeText(url)
  console.log('copy', url)
  ElMessage({
    message: 'Copy url success!',
    type: 'success',
  })
}

const preview = (url: string) => {
  // window.open(data.href, '_blank')
  console.log('open', url)
  iframeSrc.value = url
}

const openUrl = (url: string) => {
  window.open(url, '_blank')
}

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div flex="~ cols-2">
    <div p2 h-screen overflow-auto flex-shrink-0>
      <button icon-btn @click="goHome">
        <div i-carbon-home />
      </button>
      <div text-center text-2xl mb-2>
        Bookmark
      </div>
      <el-tree
        min-w-200px
        :data="list"
        accordion
      >
        <template #default="{ node, data }">
          <span v-if="data.type === 'link'" class="group">
            {{ node.label }}
            <span invisible ml-4 inline-flex gap-1 group-hover:visible>
              <button icon-btn title="copy link" @click="copy(data.href)">
                <div i-carbon-copy />
              </button>
              <button icon-btn title="preview" @click="preview(data.href)">
                <div i-carbon-content-view />
              </button>
              <button icon-btn title="open in blank" @click="openUrl(data.href)" >
                <div i-carbon-cics-region-routing />
              </button>
            </span>
          </span>
          <span v-else>{{ node.label }}</span>
        </template>
      </el-tree>
    </div>
    <iframe w-full h-screen :src="iframeSrc">
      IE：你们都看我干吗，我现在也是支持的
    </iframe>
    <!-- <div card auto-cols-fr h-20 overflow-hidden class="group" v-for="(item, index) in list" @click="openFolder(index)">
      <div flex>
        <div font-semibold flex-1>{{ item.title }}</div>
        <div i="carbon-bookmark group-hover:carbon-bookmark-filled"/>
      </div>
      <div animate-pulse underline invisible group-hover:animate-pulse group-hover:visible>{{ attributes.url }}</div>
    </div> -->
  </div>

</template>

<route lang="yaml">
meta:
  layout: bookmark
</route>
