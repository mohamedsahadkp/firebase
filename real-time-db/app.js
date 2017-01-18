(function() {
  
    //Firebase real-time databasem configuration
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
    var rootObject  = firebase.database().ref().child('data')

    // Collect input from user and display back to screen
    var viewData = document.getElementById("viewData");
    var userTextSubmitButtonClick = document.getElementById("userTextSubmitButtonClick");

    //Get data from database
    rootObject.on('value', function(data) {
        viewData.innerText = JSON.stringify(data.val());
    });

    //Save user input to the database
    userTextSubmitButtonClick.addEventListener('click', function(e) {
        var userText = document.getElementById("userText").value;
        //console.log("User Text : " + JSON.stringify(userText));
        
        rootObject.update({data:userText});
    });
    
}());