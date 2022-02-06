import Localbase from 'localbase';

const db = new Localbase('db');
db.config.debug = false;

function DefaultCategories(): void {

    db.collection('categories').add({
      name: 'WordPress',
      color: '#21759b',
    });

    db.collection('categories').add({
      name: 'General',
      color: '#96CA51',
    });

    db.collection('categories').add({
      name: 'DNS',
      color: '#e5b22a',
    });

    db.collection('categories').add({
      name: 'Emails',
      color: '#f47b44',
    });
}

export default DefaultCategories;
