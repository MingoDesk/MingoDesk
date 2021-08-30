<template>
  <div class="login-container">
    <h1>Looks like you're<br />not loggedin!</h1>
    <form>
      <label for="email">Email...</label>
      <input type="email" name="email" id="email" />
      <div class="password-header">
        <label for="password">Password...</label>
        <a href="#">Forgot password?</a>
      </div>
      <input type="password" name="password" id="password" />
      <Cta msg="login" color="#4346D4" @click="() => onClick('login')" />
    </form>
    <div id="line" aria-hidden=""></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cta from './Cta.vue';

export default defineComponent({
  name: 'Login widget',
  components: { Cta },
  methods: {
    onClick(event: Event) {
      if (event) {
        console.log(event);
        console.log("we're in");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@use '../scss/colors' as c;

.login-container {
  width: 20rem;
  color: c.$bg-alt;
}
</style>
