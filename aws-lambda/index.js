
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

exports.handler = (event, context, callback) => {
    //database connection
    var rootObject  = firebase.database().ref('data');
    var msgRef = rootObject.child('smarthome');

    msgRef.update({
        LED : false,
    });
    
    msgRef.on("value", function(snapshot) {
      console.log(snapshot.val());
      context.done();
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
};