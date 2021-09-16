<template>
  <button class="cta">
    {{ message }}
  </button>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'Cta',
  props: {
    color: { type: String, required: true },
    msg: { type: String, required: true },
  },
  setup(props) {
    const message = props.msg.charAt(0).toUpperCase() + props.msg.slice(1);
    return { bgColor: props.color, message };
  },
});
</script>

<style lang="scss" scoped>
@use '../scss/colors' as c;

.cta {
  background-color: v-bind(bgColor);
  width: inherit;
  height: 3rem;
  color: c.$text;
  font-family: inherit;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 400;
  font-size: 1em;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
}
</style>
