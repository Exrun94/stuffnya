/* eslint-disable import/prefer-default-export */
import Localbase from 'localbase';

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

async function addAll(data: NoteData) {
  try {
    // eslint-disable-next-line @typescript-eslint/dot-notation
    await db.collection('ALL').add(data);
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
    await db.collection(data.category).add(data);
    addAll(data);
  } catch (error) {
    console.log('error: ', error);
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
    return console.log('error: ', error);
  }
}

// might not need it, as I can save to context from the selected category obj
export async function getOneNote(key: string, category: string) {
  try {
    const note = await db.collection(category).get({ key });
    return note;
  } catch (error) {
    return console.log('error: ', error);
  }
}
