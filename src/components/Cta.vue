<template>
  <button class="cta">
    {{ msg }}
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
    return { bgColor: props.color };
  },
});
</script>

<style lang="scss" scoped>
@use '../scss/colors' as c;

.cta {
  background-color: v-bind(bgColor);
  width: inherit;
  height: 3.5rem;
  color: c.$text;
  font-family: inherit;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
