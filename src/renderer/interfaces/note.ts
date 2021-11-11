export interface INote {
    id: string;
    category: string;
    color: string;
    title: string;
    note: string;
    date: number;
    tags: string[];
}


export interface INoteData {
  value: string;
  date: number;
  tags: string[];
  name: string;
  category: string;
  color: string;
}
