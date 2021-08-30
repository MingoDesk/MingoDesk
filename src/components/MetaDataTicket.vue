<template>
  <div class="ticket-metadata">
    <div class="container">
      <div class="upper">
        <h3>{{ metadata.subject }}</h3>
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
import { TicketStatus, ITicketMetaData } from '../helpers/types/ticket';

interface ITicketStyle {
  backgroundColor: string;
  sideColor: string;
  updated: string;
}

export default defineComponent({
  name: 'MetaDataTicket',
  components: { Tag },
  props: {
    metadata: { type: Object as PropType<ITicketMetaData>, required: true },
  },
  setup(props): Record<string, unknown> {
    const ticketStyle: ITicketStyle = {
      backgroundColor: '#232443',
      sideColor: '#4346D4',
      updated: 'none',
    };
    if (props.metadata.status === TicketStatus.updated) {
      ticketStyle.updated = 'true';
    }
    const createdAt: Date = new Date(props.metadata.createdAt);
    const readableDate: string = createdAt.toLocaleDateString();

    return {
      backgroundColor: ticketStyle.backgroundColor,
      sideColor: ticketStyle.sideColor,
      createdAt: readableDate,
      updated: ticketStyle.updated,
    };
  },
});
</script>

<style scoped lang="scss">
@use '../scss/colors' as c;

.ticket-metadata {
  border-radius: 8px;
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
    height: 2rem;
  }

  .upper {
    padding: 0.5rem 0.5rem 0 0.5rem;
  }

  ul {
    display: flex;

    li {
      padding-left: 0.5em;
    }
  }
}

.ticket-metadata::before {
  content: '';
  display: inline-block;
  width: 1rem;
  background-color: v-bind(sideColor);
  border-radius: 8px 0 0 8px;
  transition: 0.3s ease;
  display: v-bind(updated);
}
</style>
