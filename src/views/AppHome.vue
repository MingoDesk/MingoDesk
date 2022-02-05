<template>
  <div class="app-home">
    <p>...loading</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import router from '../router/index';

export default defineComponent({
  name: 'App home',
  setup() {
    const route = onMounted(() => {
      router.push('/home');
    });
    return { route };
  },
});
</script>
