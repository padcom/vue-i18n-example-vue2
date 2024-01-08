<template>
  <div>
    <h2>Home ({{ $route.meta.title }})</h2>
    <HelloWorld />
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from '../components/HelloWorld.vue'
</script>
