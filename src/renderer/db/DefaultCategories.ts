import Localbase from 'localbase';

const db = new Localbase('db');
db.config.debug = true;

async function DefaultCategories(): Promise<void> {
  const checkCategories = await db.collection('categories').get();
  if (checkCategories.length > 0) {
    return;
  }

  try {
    await db.collection('categories').add({
      name: 'ALL',
      color: '#fff',
    });

    await db.collection('categories').add({
      name: 'WordPress',
      color: '#21759b',
    });

    await db.collection('categories').add({
      name: 'General',
      color: '#96CA51',
    });

    await db.collection('categories').add({
      name: 'DNS',
      color: '#e5b22a',
    });

    await db.collection('categories').add({
      name: 'Emails',
      color: '#f47b44',
    });
  } catch (error) {
    console.log('error: ', error);
  }
}

export default DefaultCategories;
