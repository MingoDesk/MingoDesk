<template>
  <section @click="handleFocusToggle" class="message-container">
    <div class="top-content">
      <div class="header">
        <h1 v-if="subject">{{ subject }}</h1>
        <p class="readable-date">{{ readableDate }}</p>
      </div>
      <div class="buttons"></div>
    </div>
    <editor-content :editor="content" />
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IMessage } from '../../@types/ticket';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';

export default defineComponent({
  name: 'Message',
  components: { EditorContent },
  props: {
    message: {
      type: Object as PropType<IMessage>,
      required: true,
    },
    subject: { type: String, required: false },
  },
  setup(props) {
    const createdAt: string = new Date(props.message.createdAt).toUTCString();
    const readableDate: string = createdAt.toString();
    const content = useEditor({
      content: props.message.body,
      extensions: [StarterKit],
      editable: false,
    });
    return {
      readableDate,
      content,
    };
  },
});
</script>

<style lang="scss" scoped>
@use '../../scss/colors' as c;

.message-container {
  min-width: 40%;
  min-height: 30vh;

  h1 {
    margin: 0;
    font-size: 1.5em;
  }

  p {
    font-size: 0.9em;
    font-weight: normal;
  }
}
</style>
