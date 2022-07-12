<script setup lang="ts">
import { default as dayjs } from 'dayjs'

const show = ref(false)

const now = computed(() => dayjs(useNow().value))
const end = ref('17:30')
useStorage('end-time', end)
const endHour = computed(() => parseInt(end.value.split(':')[0]))
const endMinute = computed(() => parseInt(end.value.split(':')[1]))

const endPoint = computed(() => now.value.hour(endHour.value).minute(endMinute.value).second(0).millisecond(0))

function addZero(n) {
  return n < 10 ? '0' + n : n
}

function minusTime(diff) {
  const hour = Math.floor(diff / 3600000)
  const minute = Math.floor((diff % 3600000) / 60000)
  const second = Math.floor(((diff % 3600000) % 60000) / 1000)
  const millisecond = Math.floor((((diff % 3600000) % 60000) % 1000))
  return `${addZero(hour)}:${addZero(minute)}:${addZero(second)}:${addZero(millisecond)}`
}



const restTime = computed(() => {
  const diff = endPoint.value.diff(now.value)
  if (diff < 0)
    return '下班了~~~'
  else
    return minusTime(diff)
})


const weekList = [
  '星期日 🤨',
  '星期一 😪',
  '星期二 😓',
  '星期三 😳',
  '星期四 😏',
  '星期五 🤪',
  '星期六 🥳',
]
const weekDay = weekList[parseInt(dayjs().format('d'))]

const edit = useToggle(show)

</script>
<template>
  <div text-2xl text-center my-6>
    下班倒计时
  </div>
  <div max-w-100 m-auto flex="~ col" gap-8>
    <div leading-loose>
      今天是
      <div text-3xl>
        {{ weekDay }}
      </div>
    </div>
    <div>
      <div flex leading-loose>
        距离下班
        <button icon-btn mx-2 title="修改" @click="edit()">
          <div i-carbon-edit />
        </button>
        <div v-if="show">
          <el-time-select
            v-model="end"
            start="14:30"
            step="00:30"
            end="23:30"
            placeholder="Select time"
          />
        </div>
      </div>
      <div text-4xl>
        {{ restTime }}
      </div>
    </div>
  </div>
</template>
