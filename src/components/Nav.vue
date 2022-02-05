<template>
  <aside class="nav">
    <img
      src="../assets/Mingo_Desk_Final_horizontal_White.png"
      alt="blue text 'MD' with a subtle flamingo in the middle"
      id="logo"
    />
    <div class="label">
      <svg xmlns="http://www.w3.org/2000/svg" width="17.607" height="17.606" viewBox="0 0 17.607 17.606">
        <path
          id="Path_1"
          data-name="Path 1"
          d="M11.581,2.322a1.1,1.1,0,0,0-1.556,0l-7.7,7.7a1.1,1.1,0,1,0,1.556,1.556l.322-.323v7.247a1.1,1.1,0,0,0,1.1,1.1H7.5a1.1,1.1,0,0,0,1.1-1.1v-2.2a1.1,1.1,0,0,1,1.1-1.1h2.2a1.1,1.1,0,0,1,1.1,1.1v2.2a1.1,1.1,0,0,0,1.1,1.1h2.2a1.1,1.1,0,0,0,1.1-1.1V11.259l.322.322a1.1,1.1,0,1,0,1.556-1.556l-7.7-7.7Z"
          transform="translate(-2 -2)"
          fill="#f8f8f8"
        />
      </svg>
      <p>Home</p>
    </div>
    <ul v-for="category in data" :key="category.label">
      <li v-for="item in category.items" :key="item">
        <router-link class="link" @click="handleSelect(item)" :to="item"
          ><button :class="isActive(item) ? 'active' : null">
            <p>{{ capitalize(item) }}</p>
          </button>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
import router from '../router/index';
import { defineComponent, ref } from 'vue';
import { userStore } from '../helpers/stores/userStore';

export default defineComponent({
  name: 'Navigation',
  setup() {
    const userStateStore = userStore();
    const navRef = storeToRefs(userStateStore).nav;

    // active
    const activeRef = ref<string | null>(null);
    const isActive = (name: string) => {
      return router.currentRoute.value.name === name;
    };
    const handleSelect = (route: string) => {
      activeRef.value = route;
    };
    const capitalize = (str: string) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return { data: navRef, activeRef, isActive, handleSelect, capitalize };
  },
});
</script>

<style lang="scss" scoped>
@use '../scss/colors' as c;
.nav {
  #logo {
    width: 10rem;
    padding: 2rem;
    padding-bottom: 5rem;
  }

  .label {
    display: flex;
    padding-left: 2rem;
    align-items: center;

    p {
      margin: 0;
      color: c.$text;
      padding-left: 3%;
      font-weight: bold;
      font-size: 1.2em;
    }
  }

  button {
    border-radius: 0 4px 4px 0;
    border: none;
    background: none;
    cursor: pointer;
    width: 80%;
    padding: 0.8rem;
    padding-left: 0;

    &:hover {
      p {
        color: c.$text;
      }
    }

    p {
      transition: 0.2s ease-in;
      font-size: 1.2em;
      color: c.$alt-text;
      font-weight: 400;
      font-family: sofia pro;
      float: left;
      margin-left: 2rem;
    }
  }

  li:first-child {
    margin-top: 5%;
  }

  .active {
    background: c.$active;

    p {
      font-weight: 500;
      color: c.$text;
    }
  }
}
</style>
