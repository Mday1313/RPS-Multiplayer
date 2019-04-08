// Initialize Firebase
var config = {
  apiKey: "AIzaSyALuPniOc_Uxf9zEK_ebJDBC05HWqHyUB4",
  authDomain: "rpg-multiplayer-effc6.firebaseapp.com",
  databaseURL: "https://rpg-multiplayer-effc6.firebaseio.com",
  projectId: "rpg-multiplayer-effc6",
  storageBucket: "",
  messagingSenderId: "508174102668"
};
firebase.initializeApp(config);

var database = firebase.database();


var playOneChoice = "";
var playTwoChoice = "";
var playerOne = "";
var playerTwo = "";
var playerOneIcon = "";

// Firebase used to allow only two players, watch when player comes and goes and enable chat
//   Player one logs in






$("#add-player").on("click", function (event) {
  event.preventDefault();

  if (playerOne === "") {

    playerOne = $("#player-input").val();
    $(".player-1").text("Welcome " + playerOne);
    
   
    
  } else {
    playerTwo = $("#player-input").val();
    $(".player-2").text("Welcome " + playerTwo);
    
  }

  if ((playerOne !== "") && (playerTwo !== "")) {
    $("#input-label").text("Game full. Players choose your weapon.");
    
    startGame();
  }
  
  $("#player-input").val("");


  database.ref().set({
    playerOne: playerOne,
    playerTwo: playerTwo
  
  });

  
});


function startGame() {
  $("#r-1").on("click", function () {
    playOneChoice = "rock";
    $("#r-1").hide();
    playerOneIcon = "<i class='far fa-hand-rock text-center'>"
    

    database.ref(playerOne).set({
      playOneChoice: playOneChoice,
      playerOneIcon: playerOneIcon
    });

  });


  $("#p-1").on("click", function () {
    playOneChoice = "paper";
    $("#p-1").hide();
    $(".player-1-pick").html("<i class='far fa-hand-paper text-center'>");

    database.ref(playerOne).set({
      playOneChoice: playOneChoice,
    });
  });

  $("#s-1").on("click", function () {
    playOneChoice = "scissors";
    $("#s-1").hide();
    $(".player-1-pick").html("<i class='far fa-hand-scissors text-center'>");

    database.ref(playerOne).set({
      playOneChoice: playOneChoice,
    });
  });
  $("#r-2").on("click", function () {
    playTwoChoice = "rock";
    $("#r-2").hide();
    $(".player-2-pick").html("<i class='far fa-hand-rock text-center'>");
    database.ref(playerTwo).set({
      playTwoChoice: playTwoChoice,
    });
  });

  $("#p-2").on("click", function () {
    playTwoChoice = "paper";
    $("#p-2").hide();
    $(".player-2-pick").html("<i class='far fa-hand-paper text-center'>");
    database.ref(playerTwo).set({
      playTwoChoice: playTwoChoice,
    });
  });

  $("#s-2").on("click", function () {
    playTwoChoice = "scissors";
    $("#s-2").hide();
    $(".player-2-pick").html("<i class='far fa-hand-scissors text-center'>");
    database.ref(playerTwo).set({
      playTwoChoice: playTwoChoice,
    });
  });

}

function displayName() {
database.ref().on("value", function(snapshot) {
  console.log(snapshot.val().playerOne);
  var sv = snapshot.val();
 
  
});
}

database.ref().on("child_added", function (childSnapshot) {

  // Log everything that's coming out of snapshot
  console.log(childSnapshot.val().playOneChoice);
  console.log(childSnapshot.val().playTwoChoice);

  $(".player-1-pick").html(playerOneIcon);


  

  // Handle the errors
}, function (errorObject) {
  console.log("Errors handled: " + errorObject.code);
});
//  Hide "enter name" display player one name
// Player two logs in 
// Hide "enter name" display player two name

// If 2 players logged in
    // Display choose R P or S


// on click log each players choice
    // compare choices
    // determine winner
    // Display results text
    // add win or tie to players score

// if player leaves rest game and score




