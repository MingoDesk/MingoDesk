<template>
  <div class="filter">
    <p>New</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14">
      <path
        id="Path_6"
        data-name="Path 6"
        d="M3,3A1,1,0,0,0,3,5H14a1,1,0,0,0,0-2ZM3,7A1,1,0,0,0,3,9h7a1,1,0,0,0,0-2Zm0,4a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2ZM15,8a1,1,0,0,0-2,0v5.586l-1.293-1.293a1,1,0,1,0-1.414,1.414l3,3a1,1,0,0,0,1.414,0l3-3a1,1,0,1,0-1.414-1.414L15,13.586Z"
        transform="translate(-2 -3)"
        fill="#8e8faf"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilterTickets',
});
</script>

<style lang="scss" scoped>
@use '../scss/colors' as c;

.filter {
  padding: 0.3em 1em;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: 3.5rem;
  height: 2.5rem;
  background: c.$bg-alt;
  border-radius: 4px;

  p {
    margin: 0;
  }

  svg {
    margin-top: 0.3em;
  }
}
</style>
