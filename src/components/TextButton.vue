<template>
  <button class="text-button" @click="$emit('click')">
    <p>{{ msg }}</p>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextButton',
  props: {
    target: { required: true, type: String },
    bgColor: { required: true, type: String },
    msg: { required: true, type: String },
  },
  setup(props) {
    return { backgroundColor: props.bgColor };
  },
});
</script>

<style lang="scss" scoped>
@use '../scss/colors' as c;

.text-button {
  cursor: pointer;
  background-color: v-bind(backgroundColor);
  padding: 0rem 1rem;
  border: none;
  border-radius: 4px;

  p {
    font-weight: bold;
    font-size: 1.4em;
    font-family: 'Sofia pro';
    color: c.$text;
    margin: 0.9rem 0;
  }
}
</style>
