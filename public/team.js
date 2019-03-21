// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyDyTBs-pp00nYZlvaY9maglSroObGAlgsQ",
    authDomain: "steps-project-f812e.firebaseapp.com",
    databaseURL: "https://steps-project-f812e.firebaseio.com",
    projectId: "steps-project-f812e",
    storageBucket: "steps-project-f812e.appspot.com",
    messagingSenderId: "520241532810"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  // 2. Button for adding Players
  $("#add-player-btn").on("click", function(event) {
    event.preventDefault();
  
    // import user input
    var PlayerName = $("#player-name-input").val().trim();
    var playerPosition = $("#position-input").val().trim();
    var playerGender =$("#gender-input").val().trim();
    var playerAge = $("#age-input").val().trim();
  
    // Creates local "temporary" object for holding player data
    var newPlayer = {
      name: PlayerName,
      position: playerPosition,
      gender: playerGender,
      age: playerAge
    };
  
    // Uploads player data to the database
    database.ref().push(newPlayer);
  
    // Logs everything to console
    console.log(newPlayer.name);
    console.log(newPlayer.position);
    console.log(newPlayer.gender);
    console.log(newPlayer.age);
  
    alert("It's a pleasure to have you on our team");
  
    // Clears all of the text-boxes
    $("#player-name-input").val("");
    $("#position-input").val("");
    $("#gender-input").val("");
    $("#age-input").val("");
  });
  
  // 3. Create Firebase event for adding player to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var PlayerName = childSnapshot.val().name;
    var playerPosition = childSnapshot.val().position;
    var playerGender = childSnapshot.val().gender;
    var playerAge = childSnapshot.val().age;
  
    //Player Info
    console.log(PlayerName);
    console.log(playerPosition);
    console.log(playerGender);
    console.log(playerAge);
  
   
  
    // Create the new Player row
    var newRow = $("<tr>").append(
      $("<td>").text(PlayerName),
      $("<td>").text(playerPosition),
      $("<td>").text(playerGender),
      $("<td>").text(playerAge)
      
    );
  
    // Append the new row to the table
    $("#player-table > tbody").append(newRow);
  });
  
 