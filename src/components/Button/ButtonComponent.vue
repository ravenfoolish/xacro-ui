<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue'
import '../../styles/style.css'

const props = defineProps<{
  label: string
  primary?: boolean
  backgroundColor?: string
}>()

const emit = defineEmits<{
  (e: 'click', id: number): void
}>()

const classes = computed(() => ({
  'rounded-lg border border-sky-500 bg-sky-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-sky-700 hover:bg-sky-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300':
    props.primary,
  'rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400':
    !props.primary
}))

const style = computed(() => ({
  backgroundColor: props.backgroundColor
}))

const onClick = () => {
  emit('click', 1)
}
</script>

<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ props.label }}</button>
</template>
