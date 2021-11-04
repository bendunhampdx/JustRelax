
$(document).ready(function () {
  $('p').prepend('> ');

  var backgroundLofi = new Audio('../assets/lofi.mp3');
  backgroundLofi.loop = true;

  var backgroundTyping = new Audio('../assets/typing.wav');
  backgroundTyping.loop = true;

  $('#gameTextBoxSubmit').click(function (event) {
    event.preventDefault();
    console.log($('#gameTextBoxInput').val());
    if ($('#gameTextBoxInput').val().toLowerCase().includes("how am i feeling")) {
      $('#wellnessBox').fadeIn();
      $('#wellnessBox').delay(6000).fadeOut();
    }
    $('#gameTextBoxInput').val("");
  })

  $('#gameTextBoxSubmit1').click(function (event) {
    event.preventDefault();
    console.log($('#gameTextBoxInput').val());
    if ($('#gameTextBoxInput').val().toLowerCase().includes("how am i feeling")) {
      $('#wellnessBox').fadeIn();
      $('#wellnessBox').delay(6000).fadeOut();
      $('#introductionSceneContinue').fadeIn();
      $('#gameTextBoxSubmit1').hide();
      $('#gameTextBoxSubmit').show();
    }
    $('#gameTextBoxInput').val("");
  
  })

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
    $('#playerLine1').delay(22000).fadeIn();
    $('#playerLine1Continue').delay(24000).fadeIn();
  });

  $('#createCharacterContinue').click(function () {
    $('#createCharacterContinue').hide();
    $('#characterLine1').fadeIn();
    $('#pressEnter3').delay(1500).fadeIn(3000);
    $('#createSceneContinue').delay(2000).fadeIn(3000);
    backgroundTyping.play();
  })
  var createDivsCount = 1;
  $('#createSceneContinue').click(function () {
    var totalCreateDivsCount = 6;
    if (createDivsCount < totalCreateDivsCount) {
      createDivsCount += 1;
      $('#pressEnter3').hide();
      $('#characterLine' + createDivsCount).fadeIn();
      $('#screen').scrollTop($('#screen')[0].scrollHeight);
      if (createDivsCount === totalCreateDivsCount) {
        $('#characterContinue').fadeIn();
        $('#screen').scrollTop($('#screen')[0].scrollHeight);
      }
    }
  })

  $('#continueToIntroduction').click(function () {
    $('#continueToIntroduction').hide();
    $('#introductionLine1').fadeIn();
    $('#pressEnter4').delay(300).fadeIn(3000);
    $('#introductionSceneContinue').delay(500).fadeIn(3000);
    backgroundLofi.play();
  })
  var introductionDivsCount = 1;
  $('#introductionSceneContinue').click(function () {
    var introductionDivsTotal = 26;
    if (introductionDivsCount < introductionDivsTotal) {
      introductionDivsCount += 1;
      $('#pressEnter4').hide();
      $('#introductionLine' + introductionDivsCount).fadeIn();
      $('#screen').scrollTop($('#screen')[0].scrollHeight);
      if (introductionDivsCount === 3) {
        introductionDivsCount += 1;
        $('#introductionSceneContinue').fadeOut();
        $('#gameTextBox').fadeIn();
        $('#gameTextBoxForm').fadeIn();
        $('#gameTextBoxInput').fadeIn();
        $('#gameTextBoxSubmit').hide();
        $('#gameTextBoxSubmit1').fadeIn();
      }
      if (introductionDivsCount === introductionDivsTotal) {
        $('#introductionScene').hide();
        $('#continueToJazzercise').fadeIn();
      }
    }
  })

  $('#continueToJazzercise').click(function () {
    $('#continueToJazzercise').hide();
    $('#jazzerciseLine1').fadeIn();
    $('#jazzerciseSceneContinue').delay(300).fadeIn(3000);
    backgroundLofi2.play();
  })
  var jazzerciseDivsCount = 1;
  var jazzerciseQsCount = 1;
  $('#jazzerciseSceneContinue').click(function () {
    var jazzerciseDivsTotal = 1;
    var jazzerciseQsTotal = 1;
  })

  //THIS IS WHERE THE Q&A BEGINS!

});