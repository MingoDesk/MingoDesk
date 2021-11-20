<template>
  <div class="app-container">
    <Navigation />
    <div id="login-widget-container" v-if="!user || user.errors" class="scroll">
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
import { defineComponent, onMounted, ref } from 'vue';
import { getUser } from './helpers/api/user/userController';
import LoginWidget from './components/LoginWidget.vue';
import { user, userPermissions, nav } from './helpers/store/userStore';
import { getNav } from './helpers/getNav';
import Navigation from './components/Nav.vue';
import { post, IReturn } from './helpers/api/requestGenerator';
import { baseUrl } from './config/config.json';
let val = ref();

export const getCdnToken = async (): Promise<IReturn> => {
  const user = await post(`${baseUrl}/auth/content-token`, { ticketId: '61996f573fb663001dc43287' });
  console.log(user);
  return user;
};

export default defineComponent({
  components: {
    LoginWidget,
    Navigation,
  },
  setup() {
    onMounted(async () => {
      user.value = await getUser();

      if (user.value.errors && user.value.errors.status !== 200) {
        user.value = null;
      }

      val.value = await getCdnToken();
    });

    if (user.value && user.value.response) {
      userPermissions.value = user.value.response.user.permissions;
      console.log(userPermissions.value);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      nav.value = getNav(userPermissions.value);
    }
    console.log(nav.value);
    console.log(val.value);
    return { user };
  },
});
</script>

<style lang="scss" scoped>
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
</style>
