<template>
  <a class="logout" :href="logoutUrl">
    <p>Logout</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="19.116" height="16.727" viewBox="0 0 19.116 16.727">
      <path
        id="Path_18"
        data-name="Path 18"
        d="M3.195,3A1.2,1.2,0,0,0,2,4.195V18.532a1.195,1.195,0,0,0,2.39,0V4.195A1.2,1.2,0,0,0,3.195,3Zm12.3,11.1a1.195,1.195,0,1,0,1.69,1.69l3.584-3.584a1.2,1.2,0,0,0,0-1.689L17.182,6.934a1.195,1.195,0,1,0-1.69,1.69l1.545,1.545H7.974a1.195,1.195,0,1,0,0,2.39h9.063Z"
        transform="translate(-2 -3)"
        fill="#8e8faf"
        fill-rule="evenodd"
      />
    </svg>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { baseUrl } from '../config/config.json';

export default defineComponent({
  name: 'logout',
  setup() {
    const logoutUrl = `${baseUrl}/auth/logout`;

    return { logoutUrl };
  },
});
</script>

<style lang="scss" scoped>
@use '../scss/colors' as c;

.logout {
  padding: 0.3em 1em;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: 5rem;
  height: 2.5rem;
  background: c.$bg-alt;
  border-radius: 4px;
  text-decoration: none;

  p {
    margin: 0;
  }

  svg {
    margin-top: 0.3em;
  }
}
</style>
