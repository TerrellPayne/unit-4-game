
  $(document).ready(function () {
    // Create variables for the start of the game
    var totalScore = 0;
    var winCounter = 0;
    var lossCounter = 0;
   
    //Prints the variables at start of game
    function start() {
      $("#winCounter").text(winCounter);
      $("#lossCounter").text(lossCounter);
      $("#totalScore").text(totalScore);

    };
  //makes the target score a random number
    var targetScore = Math.floor(Math.random() * 90 + 18);
    $("#targetScore").text(targetScore);
  //this function sets the random number for each game
    function randomNum() {
      targetScore = Math.floor(Math.random() * 90 + 18);
      $("#targetScore").text(targetScore);

    }

    //This function sets the value for the crystal clicked on
    function randomCrystal() {
      $(".crystal-image").each(function () {
        $(this).attr("data-crystalvalue", Math.floor(Math.random() * 12 + 1))
      });
    }
   //this runs the three functions created
    start();
    randomNum();
    randomCrystal();

    $(".crystal-image").on("click", function () {
      var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);
      totalScore += crystalValue;
      $("#totalScore").text(totalScore);

      if (totalScore === targetScore) {
        alert("You Win!");
        totalScore = 0;
        winCounter++;
        randomNum();
        start();
        randomCrystal();
      }

      else if (totalScore >= targetScore) {
        alert("You Lose!");
        totalScore = 0;
        lossCounter++;
        randomNum();
        start();
        randomCrystal();
      }
    })


  });
