// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCZTEbDmtToGOMZ8vMkR_mCTzrzLvgIeIw",
      authDomain: "let-s-chat-app-286dc.firebaseapp.com",
      databaseURL: "https://let-s-chat-app-286dc-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-app-286dc",
      storageBucket: "let-s-chat-app-286dc.appspot.com",
      messagingSenderId: "674228637726",
      appId: "1:674228637726:web:23d1f3928e5ec67fb61e0f"
    };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function addRoom()
{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room_name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log("room_name"+room_name);
     row="<div class='room_name' id="+room_name+"onclick='redirectToRoomName(this.id)'>#"+room_name+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
     
     //End code
     });});}
getData();

function redirectToRoomName(name)
{
     console.log(name);
     localStorage.setItem("room_name",name);
     window.location="chat_page.html";
}

function logout()
{
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location="index.html";
}