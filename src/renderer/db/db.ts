import Localbase from 'localbase';

const db = new Localbase('db');
db.config.debug = true;

interface CategoriesData {
  name: string;
  color: string;
}

interface Reference {
  name: string;
}

interface UpdatedReference {
  name?: string;
  color?: string;
}

export async function addCategory(data: CategoriesData) {
  try {
    // eslint-disable-next-line @typescript-eslint/dot-notation
    const result = await db.collection('categories').add(data);
    console.log(result);
  } catch (error) {
    console.log('error: ', error);
  }
}

export async function updateCategory(
  reference: Reference,
  updatedReference: UpdatedReference
) {
  try {
    const result = await db
      .collection('categories')
      .doc(reference)
      .update(updatedReference);
    return result;
  } catch (error) {
    return console.log('error: ', error);
  }
}

export async function getCategories() {
  try {
    const result = await db
      .collection('categories')
      .orderBy('name')
      .get({ keys: true });
    return result;
  } catch (error) {
    return console.log(error);
  }
}

export async function destroyDB() {
  try {
    const result = await db.delete();
    return console.log('DB deleted: ', result);
  } catch (error) {
    return console.log(error);
  }
}
