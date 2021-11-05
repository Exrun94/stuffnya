import Localbase from 'localbase';

const db = new Localbase('db');
db.config.debug = false;

interface CategoriesData {
  name: string;
  color: string;
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

// declare global {
//   interface Window {
//     destroyDB: any;
//   }
// }

// window.destroyDB = (async function (window, document) {
//   try {
//     const result = await db.delete();
//     return console.log('DB deleted: ', result);
//   } catch (error) {
//     return console.log(error);
//   }
// })(window, document);
