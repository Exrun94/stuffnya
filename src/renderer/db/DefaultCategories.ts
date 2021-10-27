import Localbase from 'localbase';

const db = new Localbase('db');
db.config.debug = true;

// const DefaultCategories = async (): Promise<void> => {
//   const checkCategories = await db.collection('categories').get();
//   if (checkCategories.length > 0) {
//     return;
//   }

//   try {
//     await db.collection('categories').add({
//       name: 'ALL',
//       color: '#fff',
//     });

//     await db.collection('categories').add({
//       name: 'WordPress',
//       color: '#21759b',
//     });

//     await db.collection('categories').add({
//       name: 'General',
//       color: '#96CA51',
//     });

//     await db.collection('categories').add({
//       name: 'DNS',
//       color: '#e5b22a',
//     });

//     await db.collection('categories').add({
//       name: 'Emails',
//       color: '#f47b44',
//     });
//   } catch (error) {
//     console.log('error: ', error);
//   }

// };

// export default DefaultCategories;

async function DefaultCategories() {
  const checkCategories = await db.collection('categories').get();
  if (checkCategories.length > 0) {
    return;
  }

  try {
    const all = await db.collection('categories').add({
      name: 'ALL',
      color: '#fff',
    });

    const wordpress = await db.collection('categories').add({
      name: 'WordPress',
      color: '#21759b',
    });

    const general = await db.collection('categories').add({
      name: 'General',
      color: '#96CA51',
    });

    const dns = await db.collection('categories').add({
      name: 'DNS',
      color: '#e5b22a',
    });

    const emails = await db.collection('categories').add({
      name: 'Emails',
      color: '#f47b44',
    });

    // eslint-disable-next-line consistent-return
    return [all.data, wordpress.data, general.data, dns.data, emails.data];
  } catch (error) {
    console.log('error: ', error);
  }
}

export default DefaultCategories;
