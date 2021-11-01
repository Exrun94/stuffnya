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
