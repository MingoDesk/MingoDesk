<template>
  <Tag text="T1" bgColor="blue" textColor="white" />
  <MetaDataTicket :metadata="metadata" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tag from './components/Tag.vue';
import MetaDataTicket from './components/MetaDataTicket.vue';

export default defineComponent({
  components: {
    Tag,
    MetaDataTicket,
  },
  setup() {
    const metadata = {
      authorId: '1234',
      author: 'Eddie',
      status: 2,
      assignee: 'userId',
      createdAt: Date.now(),
      isStarred: true,
      tags: ['T2'],
      labels: ['Cool'],
      previewText: 'This is a preview...',
    };

    return { metadata };
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
