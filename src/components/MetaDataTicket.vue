<template>
  <div class="ticket-metadata">
    <div class="upper">
      <h3>{{ metadata.subject }}</h3>
      <p>{{ metadata.createdAt }}</p>
    </div>
    <div class="lower">
      <p>{{ metadata.preview }}</p>
      <li :for="tags in metadata.tags" :key="metadata.tags">
        <Tag :text="tags.text" :bgColor="tags.bgColor" :color="tags.textColor" />
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Tag from './Tag.vue';
import { TicketStatus, ITicketMetaData } from '../helpers/types/ticket';

interface ITicketStyle {
  backgroundColor: string;
  sideColor: string;
}

export default defineComponent({
  name: 'MetaDataTicket',
  components: { Tag },
  props: {
    metadata: { type: Object as PropType<ITicketMetaData>, required: true },
  },
  setup(props): Record<string, unknown> {
    const ticketStyle: ITicketStyle = {
      backgroundColor: '#636DEA',
      sideColor: '#636DEA',
    };
    if (props.metadata.status == TicketStatus.updated) {
      ticketStyle.sideColor = '#4346D4';
    }

    return { ...ticketStyle };
  },
});
</script>

<style scoped lang="scss">
.ticket-metadata {
  border-radius: 8px;
  min-width: 12rem;
  min-height: 5rem;
  background: v-bind(backgroundColor);
}

.ticket-metadata::before {
  border-left: v-bind(sideColor);
  height: 100%;
  width: 20px;
}
</style>
