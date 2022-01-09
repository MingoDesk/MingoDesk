<template>
  <header>
    <div class="heading">
      <h1>{{ routeName }}</h1>
      <p>{{ subheading }}</p>
    </div>
    <div class="controls">
      <Filter />
      <Search />
      <Logout />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import Search from './misc/Search.vue';
import Filter from './misc/Filter.vue';
import Logout from './buttons/Logout.vue';

export default defineComponent({
  name: 'Header',
  props: {
    subheading: String,
    routeName: String,
  },
  components: {
    Search,
    Filter,
    Logout,
  },
});
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  z-index: 9999999999999999111;

  .heading p {
    margin: 0.5rem 0;
  }

  .controls {
    display: flex;

    .search,
    .logout {
      margin-left: 1rem;
    }
  }
}
</style>
