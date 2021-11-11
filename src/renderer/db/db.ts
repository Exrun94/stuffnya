import Localbase from 'localbase';
import { dispatchNotification } from '../helpers/notifications';
import { INote, } from '../interfaces'

const db = new Localbase('db');
db.config.debug = true;

interface CategoriesData {
  name: string;
  color: string;
}


const { dispatchSuccess, dispatchError } = dispatchNotification();

export async function addCategory(data: CategoriesData) {
  try {
    await db.collection('categories').add(data);
    return dispatchSuccess('Category added');
  } catch (error) {
    return dispatchError('Error adding category', '☠️');
  }
}

export async function fetchCategories() {
  try {
    const result = await db
      .collection('categories')
      .orderBy('name', 'asc')
      .get({keys: true});
    return result;
  } catch (error) {
    return dispatchError('Error fetching categories', '💥');
  }
}

export async function fetchAllNotes() {
  let notes: INote[] = [];
  const categories: CategoriesData[] = await db.collection('categories').get();

  await Promise.all(categories.map(async (category) => {
    const data = await db.collection(category.name).orderBy('date', 'desc').get();
    data.forEach((d: INote) => { notes.push(d)})
  }));

  return notes;
}


export async function getNotes(category: string) {
  try {
    const categories = await db
      .collection(category)
      .orderBy('date', 'asc')
      .get();
    return categories;
  } catch (error) {
    return dispatchError('Failed to fetch', '🤷‍♂️')
  }
}


export async function addNotes(data: INote) {
  try {
    await db.collection(data.category).add(data);
    dispatchSuccess('CREATED: \n' + data.title)
  } catch (error) {
    const errorMsg = (error as Error)
    return dispatchError(errorMsg, '🤷‍♂️')
  }
}

export async function fetchNotes(category: string) {
  try {
    const categories = await db
      .collection(category)
      .orderBy('date', 'desc')
      .get();
    return categories;
  } catch (error) {
    return dispatchError('Failed to fetch', '🤷‍♂️')
  }
}

export async function updateNote(data: INote) {
  try {

    await db.collection(data.category)
    .doc({ id: data.id })
    .update(data)

    dispatchSuccess('UPDATE Successful')
  } catch (error) {
    return dispatchError('UPDATE Fail', '🤷‍♂️')
  }

}
export async function deleteNote(note: INote) {
  try {
    await db.collection(note.category).doc({ id: note.id }).delete();
    return dispatchSuccess('Deleted successfully! 💪')
  } catch (error) {
    const errorMsg = (error as Error)
    return dispatchError(errorMsg, '🤕')
  }

}
