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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names);
    row="<div class='room_name' id= " + Room_names + "onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div> <hr>";
document.getElementById("output").innerHTML=row;
    //End code
    });});}
getData();
function addRoom() {
  Room_names=document.getElementById("room_name").value;

  firebase.database().ref("/").child(Room_names).update({
purpose:"adding room name"
  });

  localStorage.setItem("room_name",Room_names);
  window.location="kwitter_page.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

