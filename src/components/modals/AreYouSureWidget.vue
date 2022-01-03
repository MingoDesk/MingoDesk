<template>
  <div class="action-widget-container">
    <h1>{{ actionMsg }}</h1>
    <p>{{ descriptionMsg }}</p>
    <div class="action-widget-buttons">
      <Cta color="#434360" :msg="ctaReturnMsg" @click="handleReturnClick" />
      <Cta color="#AF4949" :msg="ctaActionMsg" @click="handleActionClick" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cta from '../buttons/Cta.vue';

export default defineComponent({
  name: 'Login widget',
  components: { Cta },
  props: {
    descriptionMsg: { required: true, type: String },
    actionMsg: { required: true, type: String },
    ctaActionMsg: { required: true, type: String },
    ctaReturnMsg: { required: false, type: String },
  },
  methods: {
    handleReturnClick() {
      this.$emit('return');
    },
    handleActionClick() {
      this.$emit('action');
    },
  },
});
</script>

<style lang="scss" scoped>
@use '../../scss/colors' as c;

.action-widget-container {
  width: 25rem;
  min-height: 25rem;
  background-color: c.$bg-purple;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 1.5em;
    padding: 15%;
    padding-bottom: 5%;
  }

  p {
    width: 80%;
  }

  .action-widget-buttons {
    margin-top: 15%;
    padding-bottom: 15%;
  }

  .cta {
    width: 50%;
    margin-top: 4%;
  }
}
</style>
