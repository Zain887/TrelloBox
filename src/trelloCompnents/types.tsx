// types.ts

export interface Member {
  id?: number;
  name: string;
}

export interface Todo {
  label: string;
  checked: boolean;
  edit: boolean;
  member?: string;
}

export interface Card {
  title: string;
  content: string;
  edit: boolean;
  todos: Todo[];
}

export interface Column {
  title: string;
  edit: boolean;
  cards: Card[];
}
