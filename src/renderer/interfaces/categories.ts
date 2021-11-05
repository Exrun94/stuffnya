import { INote } from './note';

export interface ICategories {
  categoryName: string;
  categoryColor: string;
  notes: [INote] | []
}
