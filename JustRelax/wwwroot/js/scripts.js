
$(document).ready(function () {
  $('p').prepend('> ');

  var backgroundLofi = new Audio('../assets/lofi.mp3');
  backgroundLofi.loop = true;


  $('#clickHereToBegin').click(function () {
    $('#titleScreen').hide();
    $('#disclaimer').show();
    
  });
  $('#continueToIntro').click(function () {
    $('#disclaimer').fadeOut(1500);
    $('#introScene').delay(1500).fadeIn(3000);
    $('#pressEnter1').delay(3000).fadeIn(3000);
    $('#introSceneContinue').delay(5000).fadeIn(1000);
  })
  var introDivsCount = 1;
  $('#introSceneContinue').click(function () {
    var totalIntroDivsCount = 6;
    if (introDivsCount < totalIntroDivsCount) {
      introDivsCount += 1;
      $('#pressEnter1').hide();
      $('#introLine' + introDivsCount).fadeIn(1000);
      $('#screen').scrollTop($('#screen')[0].scrollHeight);
      if (introDivsCount === totalIntroDivsCount) {
        $('#pressEnter1').hide();
        $('#startMusic').fadeIn(6000);
        $('#screen').scrollTop($('#screen')[0].scrollHeight);
        $('#introSceneContinue').fadeOut(2000);
      }
    }
  })
  $('#startMusic').click(function () {
    $('#startMusic').hide();
    $('#introScene').hide();
    backgroundLofi.play();
    $('#lofiGirl').fadeIn(2000);
    $('#lofiGirl').delay(2000).fadeOut(2000);
    $('#creditsTitle').delay(5000).fadeIn(500);
    $('#creditsTitle').delay(2000).fadeOut(500);
    $('#credits1').delay(8000).fadeIn();
    $('#credits1').delay(500).fadeOut();
    $('#credits2').delay(9500).fadeIn();
    $('#credits2').delay(500).fadeOut();
    $('#credits3').delay(11000).fadeIn();
    $('#credits3').delay(500).fadeOut();
    $('#credits4').delay(12500).fadeIn();
    $('#credits4').delay(500).fadeOut();
    $('#credits5').delay(14000).fadeIn();
    $('#credits5').delay(500).fadeOut();
    $('#credits6').delay(15500).fadeIn();
    $('#credits6').delay(500).fadeOut()
    $('#music1').delay(18000).fadeIn();
    $('#music1').delay(800).fadeOut();
    $('#epicodus').delay(20000).fadeIn();
    $('#epicodus').delay(1000).fadeOut();
    $('#playerLine1').delay(20500).fadeIn();
  });
});