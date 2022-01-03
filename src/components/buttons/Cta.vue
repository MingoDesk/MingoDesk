<template>
  <button class="cta">
    <div v-if="sprite && sprite === 'arrow'" class="filler" aria-hidden="true"></div>
    <p v-if="message">{{ message }}</p>
    <svg
      v-if="sprite && sprite === 'attachment'"
      xmlns="http://www.w3.org/2000/svg"
      width="11.001"
      height="11.868"
      viewBox="0 0 11.001 11.868"
      id="attachment"
    >
      <path
        d="M10.468,5.316,6.655,9.129a1.158,1.158,0,1,0,1.637,1.637l3.713-3.813A2.316,2.316,0,1,0,8.731,3.678L5.017,7.491A3.474,3.474,0,0,0,9.93,12.4l3.622-3.614"
        transform="translate(-3.399 -2.4)"
        fill="none"
        stroke="#c7c7d6"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.2"
      />
    </svg>
    <svg
      v-if="sprite && sprite === 'arrow'"
      xmlns="http://www.w3.org/2000/svg"
      width="15.375"
      height="13.453"
      viewBox="0 0 15.375 13.453"
      id="arrow-right"
    >
      <path
        d="M7.406,13.172a.961.961,0,0,1-1.359,0L.281,7.406a.961.961,0,0,1,0-1.359L6.047.282A.961.961,0,1,1,7.406,1.64L3.28,5.766H14.414a.961.961,0,1,1,0,1.922H3.28l4.125,4.125a.961.961,0,0,1,0,1.359Z"
        transform="translate(15.375 13.453) rotate(180)"
        fill="#f8f8f8"
        fill-rule="evenodd"
      />
    </svg>
    <svg
      v-if="sprite && sprite === 'close'"
      xmlns="http://www.w3.org/2000/svg"
      width="21.326"
      height="21.326"
      viewBox="0 0 21.326 21.326"
      id="close"
    >
      <path
        d="M4.521,4.521a1.777,1.777,0,0,1,2.513,0l7.629,7.629,7.629-7.629a1.777,1.777,0,1,1,2.513,2.513l-7.629,7.629L24.8,22.292a1.777,1.777,0,1,1-2.513,2.513l-7.629-7.629L7.034,24.8a1.777,1.777,0,1,1-2.513-2.513l7.629-7.629L4.521,7.034a1.777,1.777,0,0,1,0-2.513Z"
        transform="translate(-4 -4)"
        fill="#f8f8f8"
        fill-rule="evenodd"
      />
    </svg>
    <svg
      v-if="sprite && sprite === 'expand'"
      xmlns="http://www.w3.org/2000/svg"
      width="21.128"
      height="21.128"
      viewBox="0 0 21.128 21.128"
      id="expand"
    >
      <path
        d="M3,10.1V4M3,4H9.1M3,4l6.1,6.1m12.2,0V4m0,0H15.2m6.1,0-6.1,6.1M3,16.2v6.1m0,0H9.1M3,22.3l6.1-6.1m12.2,6.1-6.1-6.1m6.1,6.1V16.2m0,6.1H15.2"
        transform="translate(-1.586 -2.586)"
        fill="none"
        stroke="#f8f8f8"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  </button>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'Cta',
  props: {
    color: { type: String, required: true },
    msg: { type: String, required: false },
    sprite: { type: String, required: false },
  },
  setup(props) {
    let message = props.msg || '';
    const minWidth = props.msg ? '14rem' : '3.5rem';

    if (message) {
      message = props.msg.charAt(0).toUpperCase() + props.msg.slice(1);
    }

    return { bgColor: props.color, message, minWidth };
  },
});
</script>

<style lang="scss" scoped>
@use '../../scss/colors' as c;

.cta {
  background-color: v-bind(bgColor);
  min-width: v-bind(minWidth);
  height: 3rem;
  color: c.$text;
  font-family: inherit;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 400;
  font-size: 1em;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25em;

  p {
    color: c.$text;
    font-weight: 500;
  }

  svg {
    min-width: 10%;
    padding: 0;
  }

  #arrow-right {
    padding-left: 5%;
  }

  .filler {
    min-width: 10%;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
