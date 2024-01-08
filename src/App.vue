<template>
  <div>
    <h1>Vue i18n example</h1>
    <UseI18nLanguageSelector />
    <GlobalLanguageSelector />
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import UseI18nLanguageSelector from './components/UseI18nLanguageSelector.vue'
import GlobalLanguageSelector from './components/GlobalLanguageSelector.vue'
</script>
