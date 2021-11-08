import Localbase from 'localbase';
import { dispatchNotification } from '../helpers/notifications';
import { INoteData, INote } from '../interfaces'

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
      .get({ keys: true });
    return result;
  } catch (error) {
    return dispatchError('Error fetching categories', '💥');
  }
}

export async function getNotes(category: string) {
  try {
    const categories = await db
      .collection(category)
      .orderBy('date', 'desc')
      .get({ keys: true });
    return categories;
  } catch (error) {
    return dispatchError('Failed to fetch', '🤷‍♂️')
  }
}

async function addAll(data: INoteData, key: string) {
  try {
    await db.collection('ALL').add(data, key);
  } catch (error) {
    console.log('error: ', error);
  }
}

export async function addNotes(data: INoteData) {
  try {
    let result = await db.collection(data.category).add(data);
    addAll(data, result.data.key);
    dispatchSuccess('CREATED: \n' + data.name)
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
      .get({ keys: true });
    return categories;
  } catch (error) {
    return dispatchError('Failed to fetch', '🤷‍♂️')
  }
}

export async function updateNote(data: INote) {
  try {
    const result = await db.collection(data.data.category)
    .doc(data.key)
    .update({ data })
    return result
  } catch (error) {
    return console.log('error: ', error);
  }

}
export async function deleteNote(category: string, key: string) {
  try {
    await db.collection(category).doc(key).delete();
    await db.collection('ALL').doc(key).delete();
    return dispatchSuccess('Deleted successfully! 💪')
  } catch (error) {
    const errorMsg = (error as Error)
    return dispatchError(errorMsg, '🤕')
  }

}
