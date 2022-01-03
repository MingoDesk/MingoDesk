<template>
  <aside class="nav">
    <img
      src="../assets/Mingo_Desk_Final_horizontal_White.png"
      alt="blue text 'MD' with a flamingo in the middle"
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
      <li v-for="item in category.items" :key="item" :class="isActive(item) ? 'active' : null">
        <router-link :to="item">{{ item }}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { nav } from '../helpers/store/userStore';
const activeRef = ref(nav.value![0].items[0]);
const isActive = (name: string) => activeRef.value === name;

export default defineComponent({
  name: 'Navigation',
  setup() {
    console.log(activeRef.value);
    return { data: nav.value, activeRef, isActive };
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

  #label2,
  #label3 {
    margin-top: 2rem;
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

  li {
    &:nth-child(1) {
      margin-top: 4%;
    }
    transition: 0.3s ease;
    padding: 0.8rem 0;
    margin-top: 0.3rem;
    width: 80%;

    a {
      font-weight: semi-bold;
      color: c.$alt-text;
      text-decoration: none;
      padding-left: 2rem;

      &.router-link-exact-active {
        color: c.$text;
      }
    }
  }

  .active,
  li:hover {
    background-color: c.$active;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    a {
      color: c.$text;
    }
  }
}
</style>
