var firebaseConfig = {
    apiKey: "AIzaSyAcFkt34NV0H1kQGeK5YuuaDjSB8pziXwM",
    authDomain: "kwitter-app-20b0b.firebaseapp.com",
    databaseURL: "https://kwitter-app-20b0b-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-20b0b",
    storageBucket: "kwitter-app-20b0b.appspot.com",
    messagingSenderId: "317881115249",
    appId: "1:317881115249:web:1bdf88a26be702f11ef1d0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
name=message_data['name'];
message=message_data['message'];
Like=message_data['']
//End code
 } });  }); }
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";

}

function send() {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        Like:0

    });
    document.getElementById("msg").value="";
}