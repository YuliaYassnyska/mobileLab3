// import firebase from 'firebase';
// import 'firebase/firestore';

// // var config = {
// //   apiKey: 'AIzaSyBmMQzZDPK8WoRFsXZwEikglgPh8fdbRfU',
// //   authDomain: 'moonlit-premise-268014.firebaseapp.com',
// //   databaseURL: 'https://project-483449585526.firebaseio.com',
// //   projectId: 'moonlit-premise-268014',
// // }

// // if (!firebase.apps.length) {
// //   var app = firebase.initializeApp(config)
// // }

// // var db = firebase.firestore(app);

// // var docRef = db.collection("soilSense").doc("D7S3VuyROx9nBNRG2XmF");

// // var arr = [];

// // var request = docRef.get().then(function(doc) {
// //     if (doc.exists) {
// //         // console.log("Document data:", doc.data());
// //         arr.push(doc.data());
// //     } else {
// //         // doc.data() will be undefined in this case
// //         console.log("No such document!");
// //     }
// // }).catch(function(error) {
// //     console.log("Error getting document:", error);
// // });




// const requests = [
//   {
//     id: 1,
//     bloodType: "0",
//     name: "Ronald Dixon",
//     age: 24,
//     gender: "Male",
//     distance: 28,
//     time: 12,
//     priority: "urgent",
//   },
//   {
//     id: 2,
//     bloodType: "O-",
//     name: "Kathy Bates",
//     age: 19,
//     gender: "Female",
//     distance: 10,
//     time: 22,
//     priority: "urgent",
//   },
//   {
//     id: 3,
//     bloodType: "A+",
//     name: "Edward Sanders",
//     age: 6,
//     gender: "Male",
//     distance: 15.3,
//     time: 24,
//     priority: "urgent",
//   },

// ];

const chart = [
  1.1,
  3,
  1.5,
  2.3,
  3.2,
  7,
  8.2,
  1.2,
  2,
  1.2,
  8,
  3.8,
  5.8,
  3.9,
  5.1,
  0.1,
  6
];

const user = {
  avatar: require('../assets/avatar.png')
};

export { user, chart }