<template>
  <div class="app-container">
    <Navigation />
    <div id="login-widget-container" v-if="!user || !user.providerId" class="scroll">
      <div id="login-widget-inner-container">
        <LoginWidget />
      </div>
    </div>
    <div v-else id="route" class="scroll">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { getUser } from './helpers/api/user/userController';
import LoginWidget from './components/modals/LoginWidget.vue';
import { userStore } from './helpers/stores/userStore';
import Navigation from './components/Nav.vue';
import { storeToRefs } from 'pinia';

export default defineComponent({
  components: {
    LoginWidget,
    Navigation,
  },
  setup() {
    const userStateStore = userStore();

    onMounted(async () => {
      const userData = await getUser();

      if (!userData.errors) {
        userStateStore.setUser(userData.response.user);
      }
    });

    return { user: storeToRefs(userStateStore).user };
  },
});
</script>

<style lang="scss">
@use './scss/colors' as c;
@use './scss/text';

#app {
  font-family: Sofia Pro, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: c.$bg;
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
}

ul {
  padding: 0;
}

body,
body::before,
body::after {
  box-sizing: border-box;
  background: c.$bg;
  margin: 0;
  padding: 0;
}

.app-container {
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: 100%;
  grid-template-areas:
    'nav  route route route route'
    'nav  route route route route'
    'nav  route route route route'
    'nav  route route route route';
  background: c.$bg;
  margin: 0;
  padding: 0;
}

#login-widget-container {
  position: fixed;
  top: 0%;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  height: 100vh;
  overflow-x: hidden;
  background: rgba(0, 0, 0, 0.835);
  overflow: hidden;

  #login-widget-inner-container {
    margin-top: 7%;
  }

  #login-widget-container.scroll {
    overflow-y: auto;
  }

  .login-contianer {
    width: 100%;
    height: 100vh;
    position: relative;
  }
}

#route {
  grid-area: route;
  padding-right: 2.5%;
  margin: 0;
}

.nav {
  grid-area: nav;
  margin-top: 5%;
}

.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  color: c.$alt-text;
  pointer-events: none;
  height: 0;
  float: left;
}

p {
  margin: 0;
  color: c.$alt-text;
}
</style>
