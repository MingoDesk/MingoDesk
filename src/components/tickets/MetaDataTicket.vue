<template>
  <div class="ticket-metadata">
    <div class="container">
      <div class="upper">
        <editor-content :editor="subjectEditor" class="subject-header" />
        <p>{{ createdAt }}</p>
      </div>
      <div class="lower">
        <p>{{ metadata.previewText }}</p>

        <ul v-if="metadata.tags.length">
          <li v-for="tag in metadata.tags" :key="tag.text">
            <Tag :text="tag.text" :bgColor="tag.bgColor" :textColor="tag.textColor" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Tag from './MetaDataTag.vue';
import { TicketStatus, ITicketMetaData } from '../../@types/ticket';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';

interface ITicketStyle {
  backgroundColor: string;
  sideColor: string;
  updated: string;
}

export default defineComponent({
  name: 'MetaDataTicket',
  components: { Tag, EditorContent },
  props: {
    metadata: { type: Object as PropType<ITicketMetaData>, required: true },
    isDraft: { type: Boolean, default: false },
  },
  setup(props): Record<string, unknown> {
    const ticketStyle: ITicketStyle = {
      backgroundColor: '#232443',
      sideColor: '#4346D4',
      updated: 'none',
    };
    if (props.metadata.updated === true) {
      ticketStyle.updated = 'true';
    }

    if (props.isDraft) {
      ticketStyle.sideColor = '#50AA83';
    }

    const createdAt: Date = new Date(props.metadata.createdAt);
    const readableDate: string = createdAt.toLocaleDateString();

    const subjectEditor = useEditor({
      content: props.metadata.subject,
      extensions: [StarterKit],
      editable: false,
    });

    return {
      backgroundColor: ticketStyle.backgroundColor,
      sideColor: ticketStyle.sideColor,
      createdAt: readableDate,
      updated: ticketStyle.updated,
      subjectEditor,
    };
  },
});
</script>

<style lang="scss">
@use '../../scss/colors' as c;

.subject-header {
  margin: 0;
  font-weight: 500;
}

.ticket-metadata {
  border-radius: 4px;
  background: v-bind(backgroundColor);
  cursor: pointer;
  transition: 0.3s ease;
  display: flex;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    padding: 0.5rem;
  }

  &:hover {
    background: v-bind(sideColor);
  }

  ul,
  li {
    list-style: none;
  }

  h3,
  p {
    color: c.$text;
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 1em;
    color: c.$alt-text;
  }

  .lower,
  .upper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .lower {
    padding: 0.1rem 0.5rem 0.5rem 0.5rem;
    height: 1rem;
  }

  .upper {
    padding: 0.5rem 0.5rem 0 0.5rem;
  }

  ul {
    display: flex;

    li {
      margin-left: 0.5em;
    }
  }
}

.ticket-metadata::before {
  content: '';
  display: inline-block;
  width: 0.6rem;
  background-color: v-bind(sideColor);
  border-radius: 4px 0 0 4px;
  transition: 0.3s ease;
  display: v-bind(updated);
}
</style>
