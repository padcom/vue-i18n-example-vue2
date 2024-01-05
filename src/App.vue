<template>
  <HelloWorld />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createI18Context } from '@padcom/vue-i18n'
import HelloWorld from './components/HelloWorld.vue'

const messages = {
  en: {
    greeting: 'Some greeting',
    hello: {
      message: 'Hello, world!',
    },
  },
}

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    createI18Context({ messages })
  },
})
</script>
