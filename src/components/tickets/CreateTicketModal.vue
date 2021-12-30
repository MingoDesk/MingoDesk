<template>
  <div class="editor-content">
    <div class="editor">
      <editor-content class="title-edior" :editor="subjectEditor" />
      <editor-content class="body-editor" :editor="editor" />
    </div>
    <div class="buttons">
      <Cta color="#AF4949" sprite="close" @click="handleAttemptClose" />
      <Cta color="#2F315A" sprite="expand" @click="handleExpand" />
      <Cta msg="Attach files" color="#2F315A" @click="handleAttachment" />
      <Cta msg="Send" color="#3B9757" sprite="arrow" @click="handleSubmit" />
    </div>
  </div>
</template>

<script lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Bold from '@tiptap/extension-bold';
import Typography from '@tiptap/extension-typography';
import Heading from '@tiptap/extension-heading';
import Placeholder from '@tiptap/extension-placeholder';
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
      extensions: [
        StarterKit,
        Highlight,
        Typography,
        Document,
        Paragraph,
        Text,
        Bold,
        Heading,
        Placeholder.configure({
          placeholder: 'Your title here...',
        }),
      ],
    });

    const editor = useEditor({
      extensions: [
        StarterKit,
        Highlight,
        Typography,
        Document,
        Paragraph,
        Text,
        Bold,
        Heading,
        Placeholder.configure({
          placeholder: 'Your markdown content...',
        }),
      ],
    });

    return { editor, subjectEditor };
  },
  methods: {
    async handleSubmit() {
      createTicket(this.editor.getJSON(), this.subjectEditor.getJSON());
    },
    async handleAttemptClose() {
      this.$emit('attemptClose');
    },
    async handleExpand() {
      this.$emit('expand');
    },
    async handleAttachment() {
      this.$emit('attachment incoming');
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

.title-edior .ProseMirror p {
  font-size: 1.1em;
  font-weight: 500;
}

.editor {
  background-color: c.$ticket-modal-bg;
  padding: 1rem 2rem 2rem 2rem;
  min-height: 15rem;
  border-radius: 4px;

  .ProseMirror h1,
  h2,
  h3,
  p {
    margin-bottom: 1rem;
  }
}

.body-editor .ProseMirror p,
h1,
h2,
h3 {
  color: c.$alt-text;
}

.buttons {
  margin-top: 3%;

  .cta:not(:first-child) {
    margin-left: 2%;
  }
}
</style>
