<template>
  <div>
    <h1>{{ t('hello.message') }}</h1>
    <h2>{{ t('example.message', { name: 'John', age: 42 }) }}</h2>
    <h3>{{ t('greeting') }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from '@padcom/vue-i18n'

export default defineComponent({
  setup() {
    const { t } = useI18n()
    return { t }
  }
})
</script>

<i18n>
{
  "en": {
    "example": {
      "message": "This is an example message to {name} {age}"
    }
  }
}
</i18n>

<style lang="postcss" scoped>
h2 {
  color: green;
}
</style>
