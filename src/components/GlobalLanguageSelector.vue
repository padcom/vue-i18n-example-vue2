<template>
  <div>
    <p>i18n</p>
    <p>Selected language: {{ i18n.locale }}</p>
    <select v-model="i18n.locale">
      <option value="en">English</option>
      <option value="de">Deutsch</option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { i18n } from '../i18n'
</script>
