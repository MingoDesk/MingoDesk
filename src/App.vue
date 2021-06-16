<template>
  <Tag text="T1" />
  <Tag text="T2" :bgColor="purpleBg" :textColor="purple" />
  <Tag text="T3" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Tag from './components/Tag.vue';

interface IColors {
  [key: string]: string;
}

@Options({
  components: {
    Tag,
  },
})
export default class App extends Vue {
  data(): IColors {
    return {
      purple: '#5e179d',
      purpleBg: 'rgba(123, 76, 164, 0.24)',
      lightBlue: '#8bb6ee',
      lightBlueBg: ' rgba(139, 182, 238, 0.24)',
    };
  }
}
</script>

<style lang="scss">
@use './scss/text';

#app {
  font-family: Sofia Pro, Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
