<template>
  <Tag text="T1" />
  <Tag text="T2" :bgColor="purpleBg" :textColor="purple" />
  <Tag text="T3" />
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue';
import Tag from './components/Tag.vue';

interface IColors {
  [key: string]: string;
}

export default defineComponent({
  components: {
    Tag,
  },
});

</script>

<style lang="scss">
@use './scss/text';

#app {
  font-family: Sofia Pro, Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
