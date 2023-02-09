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



function add_user()
{
user_name=document.getElementById("user_name").value;
localStorage.setItem("user_name",user_name);
window.location="chat_room.html";

}