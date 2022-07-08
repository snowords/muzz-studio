<script setup lang="ts">
import { default as dayjs } from 'dayjs'

const now = computed(() => dayjs(useNow().value))
const end = ref('23:30')
const endHour = computed(() => parseInt(end.value.split(':')[0]))
const endMinute = computed(() => parseInt(end.value.split(':')[1]))

const endPoint = computed(() => now.value.hour(endHour.value).minute(endMinute.value).second(0).millisecond(0))

function minusTime(diff) {
  const hour = Math.floor(diff / 3600000)
  const minute = Math.floor((diff % 3600000) / 60000)
  const second = Math.floor(((diff % 3600000) % 60000) / 1000)
  const millisecond = Math.floor((((diff % 3600000) % 60000) % 1000) / 10)
  return `${hour}:${minute}:${second}:${millisecond}`
}

const restTime = computed(() => {
  const diff = endPoint.value.diff(now.value)
  if (diff < 0)
    return '下班了~~~'
  else
    return minusTime(diff)
})

const weekList = [
  '星期日',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六',
]
const weekDay = weekList[parseInt(dayjs().format('d'))]

</script>
<template>
  <div text-3xl text-center py-3>
    Countdown Clock
  </div>
  <div max-w-100 m-auto>
    <div>
      End Time Select
      <el-time-select
        v-model="end"
        start="14:30"
        step="00:30"
        end="23:30"
        placeholder="Select time"
      />
    </div>
    <div text-xl>
      Rest Time
    </div>
    <div>
      Week Day : {{ weekDay }}
    </div>
    <div>
      剩余时间: {{ restTime }}
    </div>
  </div>
</template>
