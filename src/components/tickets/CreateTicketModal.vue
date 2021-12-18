<template>
  <div class="editor">
    <editor-content :editor="subjectEditor" />
    <editor-content :editor="editor" />
    <Cta msg="Send" color="#4346d4" @click="handleSubmit" />
  </div>
</template>

<script lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import { defineComponent } from 'vue';
import { createTicket } from '../../helpers/api/tickets/ticketController';
import Cta from '../buttons/Cta.vue';

export default defineComponent({
  components: {
    EditorContent,
    Cta,
  },
  setup() {
    const subjectEditor = useEditor({
      content: '<h3>Your title here</h3>',
      extensions: [StarterKit],
    });

    const editor = useEditor({
      content: '<br/>Your markdown content here',
      extensions: [StarterKit],
    });

    return { editor, subjectEditor };
  },
  methods: {
    async handleSubmit() {
      createTicket(this.editor.getJSON(), this.subjectEditor.getJSON());
    },
  },
});
</script>

<style lang="scss">
@use '../../scss/colors' as c;

.ProseMirror {
  h1,
  h2,
  h3,
  p {
    color: c.$text;
  }
}
</style>
