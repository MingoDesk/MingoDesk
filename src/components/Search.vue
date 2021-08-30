<template>
  <div class="search">
    <div class="inner">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16.001" viewBox="0 0 16 16.001">
        <path
          id="Path_4"
          data-name="Path 4"
          d="M8,4a4,4,0,1,0,4,4A4,4,0,0,0,8,4ZM2,8a6,6,0,1,1,10.89,3.476l4.817,4.817a1,1,0,1,1-1.414,1.414l-4.816-4.816A6,6,0,0,1,2,8Z"
          transform="translate(-2 -1.999)"
          fill="#8e8faf"
          fill-rule="evenodd"
        />
      </svg>
      <input type="search" placeholder="Search tickets" />
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14">
      <path
        id="Path_5"
        data-name="Path 5"
        d="M5,4A1,1,0,0,0,3,4v7.268a2,2,0,0,0,0,3.464V16a1,1,0,0,0,2,0V14.732a2,2,0,0,0,0-3.464Zm6,0A1,1,0,0,0,9,4V5.268A2,2,0,0,0,9,8.732V16a1,1,0,0,0,2,0V8.732a2,2,0,0,0,0-3.464Zm5-1a1,1,0,0,1,1,1v7.268a2,2,0,0,1,0,3.464V16a1,1,0,0,1-2,0V14.732a2,2,0,0,1,0-3.464V4A1,1,0,0,1,16,3Z"
        transform="translate(-2 -3)"
        fill="#8e8faf"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'search',
});
</script>

<style lang="scss" scoped>
@use '../scss/colors' as c;

.search {
  padding: 0.3em 1em;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  width: 20rem;
  height: 2.5rem;
  background: c.$bg-alt;
  border-radius: 4px;

  input {
    background: none;
    border: none;
    color: c.$text;
    font-size: 1em;
    font-family: Sofia Pro, Roboto, Arial, sans-serif;
    margin-left: 0.4em;
  }

  input::placeholder {
    opacity: 1 !important;
    color: c.$alt-text;
  }
}

.inner {
  display: flex;
  align-items: center;

  p {
    margin: 0 1em;
  }
}
</style>
