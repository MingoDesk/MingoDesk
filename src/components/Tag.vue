<template>
  <div class="tag" :style="{ backgroundColor: bgColor }">
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, $ref } from 'vue';

export default defineComponent({
  name: 'Tag',
  props: {
    text: String,
    textColor: { type: String, required: false },
    bgColor: { type: String, required: false },
  },
  setup(props) {
    console.log(props);
    const color = $ref(props.textColor);
    const backgroundColor = $ref(props.bgColor);
    return { color, backgroundColor };
  },
});
</script>

<style scoped lang="scss">
@use '../scss/colors' as c;

.tag {
  width: 2rem;
  height: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: v-bind(backgroundColor);
  color: v-bind(textColor);
}
</style>
