var firebaseConfig = {
    apiKey: "AIzaSyCn1TF_KTg-J07n2_8l2dF8T2SmtU0sKUs",
    authDomain: "kwitter-f6441.firebaseapp.com",
    databaseURL: "https://kwitter-f6441-default-rtdb.firebaseio.com",
    projectId: "kwitter-f6441",
    storageBucket: "kwitter-f6441.appspot.com",
    messagingSenderId: "597180139895",
    appId: "1:597180139895:web:dde03726164bd5aa803972",
    measurementId: "G-3TPL4KHMT6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();