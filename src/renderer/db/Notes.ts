/* eslint-disable import/prefer-default-export */
import Localbase from 'localbase';
import { dispatchNotification } from '../helpers/notifications';
import { INote } from '../interfaces';

const db = new Localbase('db');
db.config.debug = true;

interface NoteData {
  value: string;
  date: number;
  tags: string[];
  name: string;
  category: string;
  color: string;
}

const { dispatchSuccess, dispatchError } = dispatchNotification();

async function addAll(data: NoteData, key: string) {
  try {
    // eslint-disable-next-line @typescript-eslint/dot-notation
    await db.collection('ALL').add(data, key);
  } catch (error) {
    console.log('error: ', error);
  }
}

// async function getAll() {
//   try {
//     const categories = await db.collection('All').orderBy('date').get();
//     return categories;
//   } catch (error) {
//     console.log('error: ', error);
//   }
// }

export async function addNotes(data: NoteData) {
  try {
    // eslint-disable-next-line @typescript-eslint/dot-notation
    let result = await db.collection(data.category).add(data);
    addAll(data, result.data.key);
    dispatchSuccess('CREATED: \n' + data.name)
  } catch (error) {
    const errorMsg = (error as Error)
    return dispatchError(errorMsg, '🤷‍♂️')
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

export async function UpdateNote(data: INote) {
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
    await db.collection(category).doc('key').delete();
    await db.collection('ALL').doc(key).delete();
    return dispatchSuccess('Deleted successfully! 💪')
  } catch (error) {
    const errorMsg = (error as Error)
    return dispatchError(errorMsg, '🤕')
  }

}
