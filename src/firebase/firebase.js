import * as firebase from 'firebase';
import expensesFixtures from '../tests/fixtures/expenses';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
  // measurementId: "G-EK4BYDLEMY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

//child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //fires on existing data as well
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    console.log(updateExpenses(snapshot));
  });

  database.ref('expenses')
    .on('value', (snapshot) => {
      console.log(updateExpenses(snapshot));
    }, (error) => {
      console.log(error)
    });

const updateExpenses = (snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
  return expenses;
}
expenses.map((expense) => {
  database.ref('expenses').push(expense);
});

// const id = database.ref('notes').push({
//   title: 'to do',
//   body: 'go for a run.'
// });


// console.log(id);

// database.ref(`notes/${id.key}`).update({
//   body: 'get food'
// });
// const notes = [{
//   id: '12',
//   body: 'this is note',
//   title: 'first note'
// }, {
//   id: 'asd344',
//   body: 'Godzilla is cool',
//   title: 'Kaijus'
// }];

// const firebaseNotes = {
//   notes: {
//     aposdfk: {
//       body: 'this is note',
//       title: 'first note'
//     },
//     sdf993: {
//       body: 'Godzilla is so cool',
//       title: 'Kaijus'
//     }
//   }
// }

// database.ref('notes').set(firebaseNotes).catch((error) => console.log(error));

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   const message = `${val.name} is a ${val.job.title} at ${val.job.company}`;
//   console.log(message);
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// database.ref('job/title').set('Janitor');

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(23);
// }, 3500);
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);
// setTimeout(() => {
//   database.ref('age').set(29);
// }, 10500);

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log('Error fetching data', error);
//   });

// database.ref().set({
//   name: 'Max',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Malmö',
//     country: 'Sweden'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('this failed. ', error);
// });

// database.ref().update({
//   stressLevel: 9,
//   'location/city': 'Seattle',
//   'location/country': 'USA',
//   'job/company': 'Amazon'
// });

// database.ref('isSingle').set(null); //equivalent to remove

// database.ref().set('this is my data');

// database.ref('age').set(29);
// database.ref('location/city').set('Lund');

// database.ref('attributes').set({
//   height: 174,
//   weight: 74
// }).then(() => {
//   console.log('attributes data is saved');
// }).catch((error) => {
//   console.log('error: ', error);
// });

// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('removed successfully');
//   })
//   .catch((error) => {
//     console.log('couldnt remove error: ', error);
//   });