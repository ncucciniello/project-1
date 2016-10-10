console.log('js is linked');
$(function() {

  // global variables
  var ship = $('.ship');


  function spawnShip() {

    // variables for actions in spawnSship
    var newDiv = $('<div />').attr('class', 'ship').appendTo('main');
    var rndmNum = Math.floor((Math.random() * 500) + 25);
    var distance = -270;
    var rndmSpeed = Math.floor((Math.random() * 20) + 15);

    // creates a new ship in a random location
    newDiv.css('margin-top', rndmNum);

    // gives ship random speed and removes a life if the ship makes it past
    var removeLife = setInterval(function() {
      newDiv.css('left', distance + 'px');
        if (distance <= $(window).width()) {
          distance += rndmSpeed;
        } else {
          console.log('lose a life');
          $('.lives img').last().remove();
          clearInterval(removeLife);
          }
    }.bind(newDiv), 50);

    // when the ship is clicked it will explode and disappear
    $('main').click(function() {
      var currentPts = 0;
      console.log('EXPLODE!');
      $('.ship').css('background','url(img/boom.png)');
      $('.ship').fadeOut(800);
      $('.ship').delay( 800, function(){
        $('.ship').remove();
        });
      clearInterval(removeLife);

      // gain 10 pts per ship killed.
      var currentVal = parseInt($('.score').text(), 0);
      var newVal = currentVal + 10;
      $('.score').text(newVal);
    });
  };

  // // Life tracker
  // var lives = $('.life').length;
  // if (lives === 0) {
  //   alert('You have lost!');
  // };

  // Fires the function for the ship to fly on page load.
  $(document).ready(function() {
    setInterval(function () {
      var counter = 0
      var numOfShips = Math.floor((Math.random() * 3) + 1);
      while (counter < 1) {
        spawnShip();
        counter++
      }
     }, 2000);
  });
});
