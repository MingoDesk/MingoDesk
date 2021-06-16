<template>
  <div class="ticket-metadata">
    <div class="upper">
      <p class="subject">{{ metadata.subject }}</p>
      <p class="created-at">{{ metadata.createdAt }}</p>
    </div>
    <div class="lower">
      <p>{{ metadata.preview }}</p>
    </div>
    <li :for="tags in metadata.tags" :key="metadata.tags">
      <Tag :text="tags.text" :bgColor="tags.bgColor" :color="tags.textColor" />
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Tag from './Tag.vue';

export enum TicketStatus {
  open = 1,
  snoozed,
  closed,
}

export interface IMessage {
  authorId: string;
  author: string;
  text: string;
  createdAt: Date;
  id: string;
}

export interface ITicket {
  authorId: string;
  author: string;
  status: TicketStatus;
  assignee?: string;
  createdAt: Date;
  isStarred: boolean;
  tags: string[];
  labels: string[];
  isUpdated: boolean;
  preview: string;
}

export default defineComponent({
  props: {
    metadata: { type: Object as PropType<ITicket>, required: true },
  },
  components: {
    Tag,
  },
});
</script>

<style scoped lang="scss"></style>
