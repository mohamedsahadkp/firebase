(function() {
  
    var config = {
        apiKey: "AIzaSyBYfciw7MfCGyhkapZuNQkvhxWVNaB9sCg",
        authDomain: "myapp-cd853.firebaseapp.com",
        databaseURL: "https://myapp-cd853.firebaseio.com",
        storageBucket: "myapp-cd853.appspot.com",
        messagingSenderId: "915249587360"
    };
    firebase.initializeApp(config);

    /* real time database */
    var viewObject = document.getElementById("object");

    var dbObject  = firebase.database().ref().child('data')
    dbObject.on('value', function(data) {
        viewObject.innerText = JSON.stringify(data.val());
    });

    /* object storage  */
    var uploader = document.getElementById("uploader");
    var fileButton = document.getElementById("fileButton");

    fileButton.addEventListener('change', function(e) {
        var file = e.target.files[0];
        var storageRef = firebase.storage().ref('images/'+ file.name);
        var task = storageRef.put(file);

        task.on('state_changed', 
            function progress(snapshot) {
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploader.value = percentage;
            },
            function error(err) {
            },
            function complete() {
            }
        );   
    });

    /* object storage  */
}());