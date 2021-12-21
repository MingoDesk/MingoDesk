import { JSONContent } from '@tiptap/core';

export enum TicketStatus {
  open = 1,
  updated,
  snoozed,
  closed,
}

export interface IMessage {
  authorId: string;
  author: string;
  subject: JSONContent;
  body: JSONContent;
  createdAt: Date;
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
  createdAt: Date;
  isStarred: boolean;
  tags: ILabel[];
  labels: ILabel[];
  previewText: string;
  subject: JSONContent;
  _id: string;
}

export interface ITicket extends ITicketMetaData {
  rating?: number;
  messages: IMessage[];
  notes?: INote[];
  personnelView: IPersonnelView[];
}
