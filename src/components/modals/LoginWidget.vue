<template>
  <div class="login-container">
    <h1>
      Looks like you're not<br />
      logged in!
    </h1>
    <form>
      <div id="email">
        <label for="email">Email</label>
        <input placeholder="Email..." type="email" name="email" id="email" />
      </div>
      <div id="password">
        <div id="password-header">
          <label for="password">Password</label>
          <a href="#">Forgot password?</a>
        </div>
        <input placeholder="Password..." type="password" name="password" id="password" />
      </div>
      <Cta msg="login" color="#4346D4" @click="() => handleBasicLogin('login')" />
      <div id="line" aria-hidden=""></div>
    </form>
    <OAuthCta msg="Sign in with Google" method="google" @click="handleGoogleLogin" />
    <OAuthCta msg="Sign in with Office 365" method="office365" @click="handleSlackLogin" />
    <OAuthCta msg="Sign in with Slack" method="slack" @click="handleSlackLogin" />
    <div class="tos">
      <p>
        MingoDesk only collects the necessary data to run it's services, third party login methods may store personal
        data.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cta from '../buttons/Cta.vue';
import OAuthCta from '../buttons/OAuthCta.vue';
import { baseUrl } from '../../config/config.json';
import { isLoggedIn } from '../../helpers/stores/userStore';

export default defineComponent({
  name: 'Login widget',
  components: { Cta, OAuthCta },
  methods: {
    handleLoginAttempt() {
      isLoggedIn.value = true;
    },
    handleBasicLogin(event: Event) {
      if (event) {
        this.handleLoginAttempt();
      }
    },
    handleGoogleLogin(event: Event) {
      if (event) {
        this.handleLoginAttempt();
        window.location.replace(`${baseUrl}/auth/login/google`);
      }
    },
    handleSlackLogin(event: Event) {
      if (event) {
        this.handleLoginAttempt();
        window.location.replace(`${baseUrl}/auth/login/slack`);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@use '../../scss/colors' as c;

.login-container {
  width: 25rem;
  background-color: c.$bg-purple;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin: auto;

  #password,
  #email {
    width: 95%;
    border-radius: 4px;
    text-align: left;
  }

  #password-header {
    display: flex;
    justify-content: space-between;
    width: 97%;
    margin-left: 1%;
    margin-top: 5%;

    a {
      text-decoration: none;
      color: c.$link;
      transition: all 0.2s ease;

      &:hover {
        text-decoration: underline;
        opacity: 0.9;
      }
    }
  }

  h1 {
    font-size: 1.5em;
    padding-top: 1.8rem;
  }

  label {
    color: c.$text;
    margin-left: 1%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;

    input {
      height: 2rem;
      border: none;
      background-color: c.$form-input-bg;
      color: c.$text;
      font-family: inherit;
      font-weight: 400;
      font-size: 1em;
      padding: 0.5rem;
      padding-right: 0.7rem;
      margin-top: 3%;
    }

    input::placeholder {
      color: c.$alt-text;
      font-family: inherit;
      font-weight: 400;
      font-size: 1em;
    }
  }

  #line {
    width: 95%;
    height: 0.09rem;
    border-radius: 1px;
    background-color: c.$alt-text;
    margin-top: 5%;
  }

  .cta,
  .oauth-cta {
    width: 95%;
  }

  .cta {
    margin-top: 6%;
  }

  .oauth-cta {
    margin-top: 5%;
  }

  .tos {
    display: flex;
    justify-content: center;
    margin-top: 5%;
    p {
      width: 90%;
      margin-bottom: 1rem;
    }
  }
}
</style>
