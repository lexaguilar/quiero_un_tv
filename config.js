// const { initializeApp } = require('firebase/app');
// const { getFirestore } = require('firebase/firestore');

// const firebaseConfig = {
//     apiKey: "AIzaSyCZ9MTtyP-_XXPl4qF203pO2HZWhJUdfvM",
//     authDomain: "quierotv-800f7.firebaseapp.com",
//     projectId: "quierotv-800f7",
//     storageBucket: "quierotv-800f7.appspot.com",
//     messagingSenderId: "461148127582",
//     appId: "1:461148127582:web:72b4e9bec4474ad135cfcf",
//     measurementId: "G-EQWTQHEPHZ"
//   };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore();

// const tv = db.app;

// module.exports = { 
//     tv
// };


// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

// initializeApp({
//     credential: applicationDefault()
//   });
  
//   const db = getFirestore();
//   const tv = db.collection('tv').doc('dBSon3klqe22hHt2izzp');

//     module.exports = { tv };

var fs = require('fs');

const writeData = data => {

    fs.readFile('data.json', function (err, currentData) {
        var json = JSON.parse(currentData)
        json.push(data)
    
        fs.writeFileSync("data.json", JSON.stringify(json))
    });

}

module.exports = {
    writeData
}