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

  var rockOne = false;
  var paperOne = false;
  var scissorsOne = false;
  var rockTwo = false;
  var paperTwo = false;
  var scissorsTwo = false;
  var playerOne = "";
  var playerTwo = "";

// Firebase used to allow only two players, watch when player comes and goes and enable chat
//   Player one logs in
$("#add-player").on("click", function(event) {
  event.preventDefault();

  if (playerOne === "") {

    playerOne = $("#player-input").val();
    $(".player-1").text("Welcome " + playerOne);
  } else {
    playerTwo = $("#player-input").val();
    $(".player-2").text("Welcome " + playerTwo);
  }
  

  $("#player-input").val("");

  database.ref().set({
    playerOne: playerOne,
    playerTwo: playerTwo
   
  });

  if ((playerOne !== "") && (playerTwo !== "")) {
    $("#input-label").text("Game full. Players choose your weapon.");
    startGame();
  }
  
  console.log("one:  " + playerOne);
  console.log("two:  " + playerTwo);
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
function startGame() {
    $("#r-1").on("click", function() {
      rockOne = true;
      $("#r-1").hide();
        $(".player-1-pick").html("<i class='far fa-hand-rock text-center'>");
    });

    $("#p-1").on("click", function() {
      paperOne = true;
      $("#p-1").hide();
     $(".player-1-pick").html("<i class='far fa-hand-paper text-center'>");
    });

    $("#s-1").on("click", function() {
      scissorsOne = true;
      $("#s-1").hide();
        $(".player-1-pick").html("<i class='far fa-hand-scissors text-center'>");
    });
    $("#r-2").on("click", function() {
      rockOne = true;
      $("#r-2").hide();
        $(".player-2-pick").html("<i class='far fa-hand-rock text-center'>");
    });

    $("#p-2").on("click", function() {
      paperOne = true;
      $("#p-2").hide();
     $(".player-2-pick").html("<i class='far fa-hand-paper text-center'>");
    });

    $("#s-2").on("click", function() {
      scissorsOne = true;
      $("#s-2").hide();
        $(".player-2-pick").html("<i class='far fa-hand-scissors text-center'>");
    });

  }

// if player leaves rest game and score




