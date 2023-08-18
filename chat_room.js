// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADilWm9D9nJRrIIxXKq3xPeswAgOnb22g",
    authDomain: "class-101-58baf.firebaseapp.com",
    databaseURL: "https://class-101-58baf-default-rtdb.firebaseio.com",
    projectId: "class-101-58baf",
    storageBucket: "class-101-58baf.appspot.com",
    messagingSenderId: "1035822208993",
    appId: "1:1035822208993:web:408a7a4f611c480c1324a0"
  };

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();