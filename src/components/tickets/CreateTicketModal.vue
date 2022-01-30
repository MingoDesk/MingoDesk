<template>
  <div class="editor">
    <div class="editor-top">
      <div class="editor-top-inputs">
        <editor-content class="title-edior editor-input" :editor="subjectEditor" />
        <editor-content class="body-editor editor-input" :editor="editor" />
      </div>
      <div class="editor-top-buttons">
        <Cta color="#2F315A" sprite="expand" @click="handleExpand" />
        <Cta color="#AF4949" sprite="close" @click="handleAttemptClose" />
      </div>
    </div>
    <div class="buttons">
      <Cta msg="Attach files" sprite="attachment" color="#2F315A" @click="handleAttachment" />
      <Cta msg="send" color="#3B9757" sprite="arrow" @click="handleSubmit" />
    </div>
  </div>
</template>

<script lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import Document from '@tiptap/extension-document';
import Typography from '@tiptap/extension-typography';
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
        Placeholder.configure({
          placeholder: 'Your markdown content...',
        }),
      ],
    });

    return { editor, subjectEditor };
  },
  methods: {
    async handleSubmit() {
      const newTicket = await createTicket(this.editor.getJSON(), this.subjectEditor.getJSON());
      if (!newTicket) throw new Error('Something whent horribly wrong creating the ticket, please try again');
      if (newTicket.errors && newTicket.errors.status !== 200) throw new Error(newTicket.errors);
      if (newTicket.response) this.$emit('successfulSubmit');
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

.title-edior {
  margin-top: 1rem;
}

.editor {
  background-color: c.$ticket-modal-bg;
  padding: 1rem 2rem 2rem 2rem;
  min-height: 15rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 50vh;
  height: 30vh;

  .editor-input h1 h2 h3 p {
    margin-bottom: 1rem;
  }
}

.editor-top,
.editor-top-buttons {
  display: flex;
}

.editor-top {
  justify-content: space-between;
}

.editor-top-buttons .cta:nth-child(1) {
  margin-right: 1rem;
}

.body-editor .ProseMirror p,
h1,
h2,
h3 {
  color: c.$alt-text;
}

.body-editor {
  margin-top: 1rem;
}

.buttons {
  margin-top: 1rem;

  .cta:not(:first-child) {
    margin-left: 1rem;
  }
}
</style>
