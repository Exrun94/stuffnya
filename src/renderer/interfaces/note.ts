export interface INote {
  key: string;
  data: {
    value: string;
    date: number;
    tags: string[];
    name: string;
    color: string;
    category: string;
  };
}


export interface INoteData {
  value: string;
  date: number;
  tags: string[];
  name: string;
  category: string;
  color: string;
}
