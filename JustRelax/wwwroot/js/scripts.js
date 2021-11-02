
$(document).ready(function () {
  $('p').prepend('> ');
  $('#clickHereToBegin').click(function(){
    $('#titleScreen').hide();
    $('#disclaimer').show();
  });
  $('#continueToIntro').click(function(){
    $('#disclaimer').fadeOut(1500);
    $('#introScene').delay(1500).fadeIn(3000);
    $('#pressEnter1').delay(4000).show();
    $('#introSceneContinue').delay(5000).fadeIn(1000);
  })
  $('#introSceneContinue').click(function () {
    console.log("hi");
    var introDivsCount = 1;
    var totalIntroDivsCount = 5
    if(introDivsCount < totalIntroDivsCount)
    {
      introDivsCount += 1;
      $("#introLine"+introDivsCount).show();
    }
  })
});