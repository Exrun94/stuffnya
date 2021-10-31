export interface INote {
  id: string;
  data: {
    value: string;
    date: number;
    tags: string[];
    name: string;
    color: string;
    category: string;
  };
}
