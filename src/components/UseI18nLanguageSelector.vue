<template>
  <div>
    <p>useI18n</p>
    <p>Selected language: {{ locale }}</p>
    <select v-model="locale">
      <option value="en">English</option>
      <option value="de">Deutsch</option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from '@padcom/vue-i18n'

const { locale } = useI18n()
</script>
