/* eslint-disable import/prefer-default-export */
import Localbase from 'localbase';

const db = new Localbase('db');
db.config.debug = true;

interface NoteData {
  value: string;
  date: number;
  tags: string[];
  name: string;
}

// save editor note
export async function addNote(data: NoteData, category: string) {
  try {
    // eslint-disable-next-line @typescript-eslint/dot-notation
    await db.collection(category).add(data);
  } catch (error) {
    console.log('error: ', error);
  }
}
