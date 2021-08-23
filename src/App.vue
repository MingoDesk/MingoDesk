<template>
  <div class="app-container">
    <aside id="nav">
      <img src="./assets/Mingo_Desk_Final_horizontal_White.png" alt="Logo of MingoDesk" id="logo" />
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
        <p>Tickets</p>
      </div>
      <ul>
        <li class="active"><router-link to="/">Unassigned</router-link></li>
        <li><router-link to="/about">Your tickets</router-link></li>
        <li><router-link to="/about">Snoozed tickets</router-link></li>
      </ul>
      <div class="label" id="label2">
        <svg xmlns="http://www.w3.org/2000/svg" width="19.2" height="16" viewBox="0 0 19.2 16">
          <path
            id="Path_3"
            data-name="Path 3"
            d="M13.8,6.2A3.2,3.2,0,1,1,10.6,3,3.2,3.2,0,0,1,13.8,6.2Zm5.333,2.133A2.133,2.133,0,1,1,17,6.2,2.133,2.133,0,0,1,19.133,8.333ZM14.866,15.8a4.267,4.267,0,1,0-8.533,0V19h8.533ZM6.333,8.333A2.133,2.133,0,1,1,4.2,6.2,2.133,2.133,0,0,1,6.333,8.333ZM17,19V15.8a6.37,6.37,0,0,0-.8-3.1,3.205,3.205,0,0,1,4,3.1V19ZM5,12.7a6.371,6.371,0,0,0-.8,3.1V19H1V15.8a3.2,3.2,0,0,1,4-3.1Z"
            transform="translate(-1 -3)"
            fill="#f8f8f8"
          />
        </svg>

        <p>Customer tiers</p>
      </div>
      <ul>
        <li><router-link to="/t1">Tier one</router-link></li>
        <li><router-link to="/about">Tier two</router-link></li>
        <li><router-link to="/about">Tier three</router-link></li>
      </ul>
      <div class="label" id="label3">
        <svg xmlns="http://www.w3.org/2000/svg" width="20.898" height="16.254" viewBox="0 0 20.898 16.254">
          <path
            id="Path_15"
            data-name="Path 15"
            d="M10.288,6.483A3.483,3.483,0,1,1,6.8,3,3.483,3.483,0,0,1,10.288,6.483Zm9.288,0A3.483,3.483,0,1,1,16.093,3,3.483,3.483,0,0,1,19.576,6.483ZM14.85,19.254a8.32,8.32,0,0,0,.081-1.161,8.092,8.092,0,0,0-1.741-5.027A5.8,5.8,0,0,1,21.9,18.093v1.161ZM6.8,12.288a5.8,5.8,0,0,1,5.8,5.8v1.161H1V18.093a5.8,5.8,0,0,1,5.8-5.8Z"
            transform="translate(-1 -3)"
            fill="#f8f8f8"
          />
        </svg>

        <p>Team</p>
      </div>
      <ul>
        <li><router-link to="/about">Miranda</router-link></li>
        <li><router-link to="/about">Kevin L</router-link></li>
        <li><router-link to="/about">Alexander B</router-link></li>
      </ul>
    </aside>
    <div id="route">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
@use './scss/colors' as c;
@use './scss/text';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
}

#route {
  grid-area: route;
  padding-right: 2.5%;
  margin: 0;
}

#nav {
  grid-area: nav;

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
      color: c.$textDarkened;
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
    a {
      color: c.$text;
    }
  }
}
</style>
