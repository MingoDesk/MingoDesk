<template>
  <div class="tag" :style="{ backgroundColor: bgColor }">
    <p :style="{ color: textColor }">{{ text }}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Tag',
  props: {
    text: String,
    textColor: { type: String, required: false },
    bgColor: { type: String, required: false },
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
  background: c.$lightBlueBg;
  color: c.$lightBlue;
}
</style>
