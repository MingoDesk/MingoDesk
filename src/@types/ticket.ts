import { JSONContent } from '@tiptap/core';

export enum TicketStatus {
  open = 1,
  snoozed = 2,
  closed = 3,
}

export interface IMessage {
  authorId: string;
  author: string;
  subject: JSONContent;
  body: JSONContent;
  createdAt: string;
  id: string;
}

export interface INote extends IMessage {
  id: string;
  isNote: true;
}

export interface IPersonnelView {
  id: string;
  isNote?: true;
}

export interface ILabel {
  text: string;
  textColor?: string;
  bgColor?: string;
}

export interface ITicketMetaData {
  authorId: string;
  author: string;
  status: TicketStatus;
  assignee?: string;
  createdAt: string;
  isStarred: boolean;
  tags: ILabel[];
  labels: ILabel[];
  previewText: string;
  updated: boolean;
  subject: JSONContent;
  _id: string;
}

export interface ITicket extends ITicketMetaData {
  rating?: number;
  messages: IMessage[];
  notes?: INote[];
  personnelView: IPersonnelView[];
}
