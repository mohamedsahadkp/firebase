   
var firebase = require('firebase')

var config = {
    apiKey: "AIzaSyBYfciw7MfCGyhkapZuNQkvhxWVNaB9sCg",
    authDomain: "myapp-cd853.firebaseapp.com",
    databaseURL: "https://myapp-cd853.firebaseio.com",
    storageBucket: "myapp-cd853.appspot.com",
    messagingSenderId: "915249587360"
};

//Firebase real-time database initialization
firebase.initializeApp(config);

//database connection
var rootObject  = firebase.database().ref('data');
var msgRef = rootObject.child('smarthome');

// msgRef.push({
//     name : "Asif",
//     company : "Experion",
//     email : "demo@asif.com"
// });

msgRef.update({
    LED : false,
});


// rootObject.on('value', function(data) {
//     console.log("Data from firebase:"+ data.val());
// });

// rootObject.update({
//     data:userText
// });

