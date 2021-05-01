<template>
  <aside>
    <nav id="nav">
      <a href="http://localhost:1928/api/login">Login</a> |
      <a href="http://localhost:1928/api/logout">Logut</a>
    </nav>
  </aside>
  <router-view />
  <CreateTicket />
</template>

<script>
import CreateTicket from "./views/tickets/CreateTicket";

export default {
  name: "app",
  components: {
    CreateTicket,
  },
};
</script>

<style lang="scss">
@use "./scss/meta" as m;

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: m.$bg;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
