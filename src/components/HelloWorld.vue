<template>
  <div>
    <p>Globally available locales: {{ i18n.availableLocales }}</p>
    <p>Locally available locales: {{ availableLocales }}</p>
    <h3>{{ t('hello.message') }}</h3>
    <h4>{{ t('example.message', { name: 'John', age: 42 }) }}</h4>
    <h5>{{ t('greeting') }}</h5>
    <h5>{{ tc('car', 0) }}</h5>
    <h5>{{ tc('car', 1) }}</h5>
    <h5>{{ tc('car', 2, { number: 2 }) }}</h5>
    <h5>{{ tc('car', 10, { number: 10 }) }}</h5>
    <h5>{{ tc('fish', 0, { number: 0 }) }}</h5>
    <h5>{{ tc('fish', 1) }}</h5>
    <h5>{{ tc('fish', 2, { number: 2 }) }}</h5>
    <h5>{{ tc('fish', 10, { number: 10 }) }}</h5>
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { useI18n } from '@padcom/vue-i18n'
import { i18n } from '../i18n'

const { t, tc, locale, availableLocales} = useI18n({ useScope: 'local-first' })
watch([locale], () => { console.log('locale changed:', locale, i18n.locale) })
</script>

<i18n>
{
  "en": {
    "example": {
      "message": "This is an example message to {name} {age}"
    }
  },
  "de": {
    car: "Kein Auto (l) | Ein Auto (l) | { number } Autos (l)",
  },
  "it": {
    car: "???",
  },
}
</i18n>

<style lang="postcss" scoped>
h2 {
  color: green;
}
</style>
