
$(document).ready(function () {
  $('p').prepend('> ');

  var backgroundLofi = new Audio('https://localhost:5001/assets/lofi.mp3');
  backgroundLofi.loop = true;
    
  var backgroundLofi2 = new Audio('http://localhost:5000/assets/lofi.mp3');
  backgroundLofi.loop = true;

  var backgroundTyping = new Audio('https://localhost:5001/assets/typing.wav');
  backgroundTyping.loop = true;

  var backgroundTyping2 = new Audio('http://localhost:5000/assets/typing.wav');
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
    
  $('#gameTextBoxInput').keydown(function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        return false;
    }
  });

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
    backgroundLofi.volume = 0.3;
    backgroundLofi2.play();
    backgroundLofi2.volume = 0.3;
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
    backgroundTyping.volume = 0.3;
    backgroundTyping.loop = true;
    backgroundTyping2.play();
    backgroundTyping2.volume = 0.3;
    backgroundTyping2.loop = true;
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
    backgroundLofi.volume = 0.3;
    backgroundLofi.loop = true;
    backgroundLofi2.play();
    backgroundLofi2.volume = 0.3;
    backgroundLofi2.loop = true;
  })
  var introductionDivsCount = 1;
  $('#introductionSceneContinue').click(function () {
    var introductionDivsTotal = 27;
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
        $('#jazzerciseSceneContinue').show();
      }
    }
  })

  $('#jazzerciseSceneContinue').click(function () {
    $('#continueToJazzercise').hide();
    $('#jazzerciseLine1').fadeIn();
    $('#instructionJazz1').delay(500).fadeIn();
    $('#jazzerciseSceneContinue').hide()
    $('#jazzAns1').delay(1000).fadeIn();
    $('#jazzAns1').click(function () { 
      $('#jazzerciseQ1').fadeIn();
      $('#instructionJazz1').hide();
      $('#jazzAns1').hide();
    })
    $('#jazzAns2').click(function () { 
      $('#jazzerciseQ2').fadeIn();
    })
    $('#jazzAns3').click(function () { 
      $('#jazzerciseQ3').fadeIn();
    })
    $('#jazzAns4').click(function () { 
      $('#jazzerciseQ4').fadeIn();
    })
    $('#jazzAns5').click(function () { 
      $('#jazzerciseQ5').fadeIn();
    })
    $('#jazzAns6').click(function () { 
      $('#jazzerciseQ6').fadeIn();
    })
    $('#jazzAns7').click(function () { 
      $('#jazzerciseQ7').fadeIn();
    })
    $('#jazzAns8').click(function () { 
      $('#jazzerciseQ8').fadeIn();
    })
    $('#jazzAns9').click(function () { 
      $('#jazzerciseQ9').fadeIn();
    })
    $('#jazzAns10').click(function () { 
      $('#jazzerciseQ10').fadeIn();
    })
    $('#jazzAns12').click(function () { 
      $('#jazzerciseQ12').fadeIn();
    })
  })
  
  function JazzResponses1(){
    $('#jazzResponse1').fadeIn();
    $('#screen').scrollTop($('#screen')[0].scrollHeight);
    $('#jazzerciseQ1').hide();
    $('#jazzerciseLine1').hide();
    $('#jazzerciseLine2').delay(1000).fadeIn();
    $('#jazzAns1').hide();
    $('#jazzAns2').delay(1700).fadeIn();

  }
  $('#jazzerciseQ1A1').click(function () {
    JazzResponses1();
    $('#jazzResponse1').append("...That must be really great for you.");
  })
  $('#jazzerciseQ1A2').click(function () {
    JazzResponses1();
    $('#jazzResponse1').append("Well, today should be a cerebral experience for both of us then.");
  })
  $('#jazzerciseQ1A3').click(function () {
    JazzResponses1();
    $('#jazzResponse1').append("Well, you see… An object grows out of the code much like an apple emerges from an apple tree. The object isn’t simply thrust into the code like some sort of outside being.");
  })
  $('#jazzerciseQ1A4').click(function () {
    JazzResponses1();
    $('#jazzResponse1').append("I feel a resounding call to be patient with my naivety and remain open as a growth mindset requires me to be.");
  })

  function JazzResponses2(){
    $('#jazzResponse2').fadeIn();
    $('#screen').scrollTop($('#screen')[0].scrollHeight);
    $('#jazzerciseQ2').hide();
    $('#jazzerciseLine2').hide();
    $('#jazzerciseLine3').delay(1000).fadeIn();
    $('#jazzAns2').hide();
    $('#jazzAns3').delay(1700).fadeIn();
  }
  $('#jazzerciseQ2A1').click(function () {
    JazzResponses2();
    $('#jazzResponse2').append("How very perceptive of you...");
  })
  $('#jazzerciseQ2A2').click(function () {
    JazzResponses2();
    $('#jazzResponse2').append("You are most certainly right, and no.. I do not have a preference... ");
  })
  $('#jazzerciseQ2A3').click(function () {
    JazzResponses2();
    $('#jazzResponse2').append("I simply choose to empty my memory compartment to ensure there is space for the most important bits of wisdom.");
  })
  $('#jazzerciseQ2A4').click(function () {
    JazzResponses2();
    $('#jazzResponse2').append("Everyone’s journey is another universe of possibilities and I respect that.");
  })

  function JazzResponses3(){
    $('#jazzResponse3').fadeIn();
    $('#screen').scrollTop($('#screen')[0].scrollHeight);
    $('#jazzerciseQ3').hide();
    $('#jazzerciseLine3').hide();
    $('#jazzerciseLine4').delay(1000).fadeIn();
    $('#jazzAns3').hide();
    $('#jazzAns4').delay(1700).fadeIn();
  }
  $('#jazzerciseQ3A1').click(function () {
    JazzResponses3();
    $('#jazzResponse3').append("You know the name “Earth” is just five letters we assembled out of thin air for this being we live on!");
  })
  $('#jazzerciseQ3A2').click(function () {
    JazzResponses3();
    $('#jazzResponse3').append("Your honesty is… admirable I suppose.");
  })
  $('#jazzerciseQ3A3').click(function () {
    JazzResponses3();
    $('#jazzResponse3').append("Yes it is indeed, very crazy stuff, and there is much more to the story than meets the eye.");
  })
  $('#jazzerciseQ3A4').click(function () {
    JazzResponses3();
    $('#jazzResponse3').append("I….didn’t know...about that yet...");
  })

  function JazzResponses4() {
    $('#jazzerciseLine4').hide();
    $('#jazzResponse4').fadeIn();
    $('#screen').scrollTop($('#screen')[0].scrollHeight);
    $('#jazzerciseQ4').hide();
    $('#jazzerciseLine5').delay(1000).fadeIn();
    $('#jazzAns4').hide();
    $('#jazzAns5').delay(1700).fadeIn();
  }
  $('#jazzerciseQ4A1').click(function () {
    JazzResponses4();
    $('#jazzResponse4').append("To which God or Goddess do you refer to when making such a bold statement?");
  })
  $('#jazzerciseQ4A2').click(function () {
    JazzResponses4();
    $('#jazzResponse4').append("Ah, a quick learner you are, my life pair..");
  })
  $('#jazzerciseQ4A3').click(function () {
    JazzResponses4();
    $('#jazzResponse4').append("WHOA! That’s so not cool my friend.");
  })
  $('#jazzerciseQ4A4').click(function () {
    JazzResponses4();
    $('#jazzResponse4').append("Perhaps we should just build separate projects?");
  })

  function JazzResponses5() {
    $('#jazzerciseLine5').hide();
    $('#jazzResponse5').fadeIn();
    $('#screen').scrollTop($('#screen')[0].scrollHeight);
    $('#jazzerciseQ5').hide();
    $('#jazzerciseLine6').delay(1000).fadeIn();
    $('#jazzAns4').hide();
    $('#jazzAns5').delay(1700).fadeIn();
    $('#otherText').delay().html("You and Jazzercise work together on the project for a while, but you notice Jazzercise becoming a bit… unwell.");
    $('#otherText').delay(200).fadeIn();
    $('#otherText').delay(2500).fadeOut();
  }
  $('#jazzerciseQ5A1').click(function () {
    JazzResponses5();
    $('#jazzResponse5').append("Cool, just give me a sec to hand grind these leaves one by one. This is the way.");
  })
  $('#jazzerciseQ5A2').click(function () {
    JazzResponses5();
    $('#jazzResponse5').append("Bless, I'll be back in two shakes of my inner self’s tail.");
  })
  $('#jazzerciseQ5A3').click(function () {
    JazzResponses5();
    $('#jazzResponse5').append("That sounds like an abuse of one’s inner power.");
  })
  $('#jazzerciseQ5A4').click(function () {
    JazzResponses5();
    $('#jazzResponse5').append("That is an outright filthy lie.");
  })
  
  function JazzResponses6() {
    $('#jazzerciseLine6').hide();
    $('#screen').scrollTop($('#screen')[0].scrollHeight);
    $('#jazzerciseQ6').hide();
    $('#jazzerciseLine7').delay(1000).fadeIn();
    $('#jazzAns6').hide();
    $('#jazzAns7').delay(1700).fadeIn();
  }
  $('#jazzerciseQ6A1').click(function () {
    JazzResponses6();
  })

  function JazzResponses7() {
    $('#jazzerciseLine7').hide();
    $('#screen').scrollTop($('#screen')[0].scrollHeight);
    $('#jazzerciseQ7').hide();
    $('#jazzerciseLine8').delay(1000).fadeIn();
    $('#jazzAns7').hide();
    $('#jazzAns8').delay(1200).fadeIn();
  }
  $('#jazzerciseQ7A1').click(function () {
    JazzResponses7();
  })
  
  function JazzResponses8() {
    $('#jazzerciseLine8').hide();
    $('#screen').scrollTop($('#screen')[0].scrollHeight);
    $('#jazzerciseQ8').hide();
    $('#jazzerciseLine9').delay(1000).fadeIn();
    $('#jazzAns8').hide();
    $('#jazzAns9').delay(1200).fadeIn();
  }
  $('#jazzerciseQ8A1').click(function () {
    JazzResponses();
  })

  function JazzResponses9() {
    $('#jazzerciseLine9').hide();
    $('#screen').scrollTop($('#screen')[0].scrollHeight);
    $('#jazzerciseQ9').hide();
    $('#jazzerciseLine10').delay(100).fadeIn();
    $('#jazzAns9').hide();
    $('#jazzAns10').delay(1700).fadeIn();
  }
  $('#jazzerciseQ9A1').click(function () {
    JazzResponses();
  })

  function JazzResponses10() {
    $('#jazzerciseLine10').hide();
    $('#screen').scrollTop($('#screen')[0].scrollHeight);
    $('#jazzerciseQ10').hide();
    $('#jazzerciseLine11').fadeIn();
    $('#jazzerciseLine12').delay(1500).fadeIn();
    $('#jazzAns10').hide();
    $('#jazzAns12').delay(1700).fadeIn;
  }
  $('#jazzerciseQ10A1').click(function () {
    JazzResponses10();
  })
  $('#jazzerciseQ10A2').click(function () {
    JazzResponses10();
  })
  $('#jazzerciseQ10A3').click(function () {
    JazzResponses10();
  })
  $('#jazzerciseQ10A4').click(function () {
    JazzResponses10();
  })

  function JazzResponses12() {
    $('#jazzerciseLine12').hide();
    $('#screen').scrollTop($('#screen')[0].scrollHeight);
    $('#jazzerciseQ12').hide();
    $('#jazzserciseLine13').fadeIn();
    $('#jazzserciseLine14').delay(1000).fadeIn();
  }
  $('#jazzerciseQ12A1').click(function () {
    JazzResponses10();
  })
  $('#jazzerciseQ12A2').click(function () {
    JazzResponses10();
  })
  $('#jazzerciseQ12A3').click(function () {
    JazzResponses10();
  })
  $('#jazzerciseQ12A4').click(function () {
    JazzResponses10();
  })
  //Leave this here.
  var jazzerciseDivsCount = 0;
  $('#jazzerciseSceneContinue').click(function () {
  var jazzerciseDivsTotal = 27;
  if (jazzerciseDivsCount < jazzerciseDivsTotal) {
    jazzerciseDivsCount += 0;
    $('#jazzerciseLine' + jazzerciseDivsCount).fadeIn();
    $('#screen').scrollTop($('#screen')[0].scrollHeight);
    if (jazzerciseDivsCount === jazzerciseDivsTotal) {
      $('#jazzerciseScene').hide();
      $('#continueToBob').fadeIn();
      $('#bobSceneContinue').show();
    }
  }
})

$('#bobSceneContinue').click(function () {
  $('#continueToBob').hide();
  $('#bobLine1').fadeIn();
  $('#bobAns1').delay(1000).fadeIn();
  $('#bobAns1').click(function () { 
    $('#bobQ1').fadeIn();
  })
  $('#bobAns2').click(function () { 
    $('#bobQ2').fadeIn();
  })
  $('#bobAns3').click(function () { 
    $('#bobQ3').fadeIn();
  })
  $('#bobAns4').click(function () { 
    $('#bobQ4').fadeIn();
  })
  $('#bobAns5').click(function () { 
    $('#bobQ5').fadeIn();
  })
  $('#bobAns6').click(function () { 
    $('#bobQ6').fadeIn();
  })
  $('#bobAns7').click(function () { 
    $('#bobQ7').fadeIn();
  })
  $('#bobAns8').click(function () { 
    $('#bobQ8').fadeIn();
  })
  $('#bobAns9').click(function () { 
    $('#bobQ9').fadeIn();
  })
  $('#bobAns10').click(function () { 
    $('#bobQ10').fadeIn();
  })
})
function bobResponses(){
  $('#bobResponse1').fadeIn();
  $('#screen').scrollTop($('#screen')[0].scrollHeight);
  $('#bobQ1').hide();
  $('#bobLine2').fadeIn();
}
$('#bobQ1A1').click(function () {
  bobResponses();
  $('#bobResponse1').append("Awesome, let us begin.");
})

$('#bobQ1A2').click(function () {
  bobResponses();
  $('#bobResponse1').append("First we work. We will schedule a break for later.");
})

$('#bobQ1A3').click(function () {
  bobResponses();
  $('#bobResponse1').append("That is very rude. Per our teacher, we are to work together today.");
})
function bobResponses2(){
  $('#bobResponse2').fadeIn();
  $('#screen').scrollTop($('#screen')[0].scrollHeight);
  $('#bobQ1').hide();
  $('#bobLine3').fadeIn();
}
$('#bobQ2A1').click(function () {
  bobResponses2();
  $('#bobResponse1').append("Great. I like initiative. I also like snakes. ");
})
$('#bobQ2A2').click(function () {
  bobResponses2();
  $('#bobResponse1').append("Yes, I will host. The snake always hosts his own dinner parties. He invites the rat and the mouse.");
})
$('#bobQ2A3').click(function () {
  bobResponses2();
  $('#bobResponse1').append("Don't be lazy, take charge. Like the snake takes charge of the rat when it twists around it to kill.");
})
function bobResponses3(){
  $('#bobResponse3').fadeIn();
  $('#screen').scrollTop($('#screen')[0].scrollHeight);
  $('#bobQ1').hide();
  $('#bobLine4').fadeIn();
}
$('#bobQ3A1').click(function () {
  bobResponses3();
  $('#bobResponse1').append("That sounds boring. Instead we will do my idea. Create a snake game. I will be the snake, and you will be the rat.");
})
$('#bobQ3A2').click(function () {
  bobResponses3();
  $('#bobResponse1').append("We will do my idea then: create a snake game. The game will be one in which the stakes are high. Are you prepared? .");
})
$('#bobQ3A3').click(function () {
  bobResponses3();
  $('#bobResponse1').append("Sure, and when we play the winner will get $10");
})
$('#bobQ3A4').click(function () {
  bobResponses3();
  $('#bobResponse1').append("What is not making sense? Everything is perfectly sensible here. We will do my idea: create a snake game. The snake plays a game with the mouse, but the mouse only runs for his life.");
})
function bobResponses4(){
  $('#bobResponse4').fadeIn();
  $('#screen').scrollTop($('#screen')[0].scrollHeight);
  $('#bobQ1').hide();
  $('#bobLine5').fadeIn();
}
$('#bobQ4A1').click(function () {
  bobResponses4();
  $('#bobResponse1').append("I am sorry, my snake slithered across my keyboard");
})
$('#bobQ4A2').click(function () {
  bobResponses4();
  $('#bobResponse1').append("What? I do not understand you.");
})
$('#bobQ4A3').click(function () {
  bobResponses4();
  $('#bobResponse1').append("What are you talking about? I am just here coding with you. Nothing sinister is happening.   ");
})
$('#bobQ4A4').click(function () {
  bobResponses4();
  $('#bobResponse1').append("Blsuthehv?");
})
function bobResponses5(){
  $('#bobResponse5').fadeIn();
  $('#screen').scrollTop($('#screen')[0].scrollHeight);
  $('#bobQ1').hide();
  $('#bobLine6').fadeIn();
}
$('#bobQ5A1').click(function () {
  bobResponses5();
  $('#bobResponse1').append("I am not so into that. She is like a small mouse. ");
})
$('#bobQ5A2').click(function () {
  bobResponses5();
  $('#bobResponse1').append("This is dope! I knew I liked you. My snake and I shimmy to them frequently. ");
})
$('#bobQ5A3').click(function () {
  bobResponses5();
  $('#bobResponse1').append("I am also. We will turn it up!");
})
$('#bobQ5A4').click(function () {
  bobResponses5();
  $('#bobResponse1').append("I will not ask you about this. It sounds like mouse music.");
})
function bobResponses6(){
  $('#bobResponse6').fadeIn();
  $('#screen').scrollTop($('#screen')[0].scrollHeight);
  $('#bobQ1').hide();
  $('#bobLine7').fadeIn();
}
$('#bobQ6A1').click(function () {
  bobResponses6();
  $('#bobResponse1').append("I liked the music. I will order us new headphones from Amazon. Notable Fact: the Amazon is the home of the Anaconda, a great snake.");
})
$('#bobQ6A2').click(function () {
  bobResponses6();
  $('#bobResponse1').append("What a coincidence! We will order new from Amazon. Notable Fact: the Amazon is full of snakes and other creatures which fill my heart with joy and my throat-sac with venom.");
})
$('#bobQ6A3').click(function () {
  bobResponses6();
  $('#bobResponse1').append("How do we solve this problem?");
})
$('#bobQ6A4').click(function () {
  bobResponses6();
  $('#bobResponse1').append("No. We must be in sync to pair. We will get new headphones and put Arik’s music back on. Our minds must twine together like the tails of two snakes.");
})
function bobResponses7(){
  $('#bobResponse7').fadeIn();
  $('#screen').scrollTop($('#screen')[0].scrollHeight);
  $('#bobQ1').hide();
  $('#bobLine8a').fadeIn();
  $('#bobLine8b').fadeIn();
  $('#bobLine8c').fadeIn();
  $('#bobLine8d').fadeIn();
  $('#bobLine8e').fadeIn();
  $('#bobLine8f').fadeIn();
  $('#bobLine8g').fadeIn();
  $('#bobLine8h').fadeIn();
  $('#bobLine8i').fadeIn();
  $('#bobLine8j').fadeIn();
}
$('#bobQ7A1').click(function () {
  bobResponses7();
  $('#bobResponse1').append("Amazon never jokes. Much like Bob. My headphones have arrived as well.");
})
$('#bobQ7A2').click(function () {
  bobResponses7();
  $('#bobResponse1').append("You are exaggerating. Mine have arrived also. Put on the headphones.");
})
$('#bobQ7A3').click(function () {
  bobResponses7();
  $('#bobResponse1').append("Very convenience");
})
$('#bobQ7A4').click(function () {
  bobResponses7();
  $('#bobResponse1').append("You have never seen a box drop out of the other planes before? You must not have Prime. Sad.");
})
function bobResponses8(){
  $('#bobResponse8').fadeIn();
  $('#screen').scrollTop($('#screen')[0].scrollHeight);
  $('#bobQ1').hide();
  $('#bobLine9').fadeIn();
}
$('#bobQ8A1').click(function () {
  bobResponses8();
  $('#bobResponse1').append("Life is full of these random surprises. Try not to think about it too hard.");
})
$('#bobQ8A2').click(function () {
  bobResponses8();
  $('#bobResponse1').append("You worry for nothing, my friend.");
})
$('#bobQ8A3').click(function () {
  bobResponses8();
  $('#bobResponse1').append("Yes, now we will all be in sync when we pair. We will hear the same code song.");
})
function bobResponses9(){
  $('#bobResponse9').fadeIn();
  $('#screen').scrollTop($('#screen')[0].scrollHeight);
  $('#bobQ1').hide();
  $('#bobLine10').fadeIn();
}
$('#bobQ9A1').click(function () {
  bobResponses9();
  $('#bobResponse1').append("I will not compromise the snake’s privacy. Suffice it to say, she has eaten what she should not.");
})
$('#bobQ9A2').click(function () {
  bobResponses9();
  $('#bobResponse1').append("I told you once that I do not joke. That was not a joke.");
})
$('#bobQ9A3').click(function () {
  bobResponses9();
  $('#bobResponse1').append("Goodbye. I will miss you. ");
})
$('#bobQ9A4').click(function () {
  bobResponses9();
  $('#bobResponse1').append("Good luck to you...my friend.");
  $('#bobResponse1').append("BOB HAS LEFT THE CHANNEL");
})
function bobResponses10(){
  $('#bobResponse10').fadeIn();
  $('#screen').scrollTop($('#screen')[0].scrollHeight);
  $('#bobQ1').hide();
  $('#bobLine11').fadeIn();
}
$('#bobQ10A1').click(function () {
  bobResponses10();
  $('#bobResponse1').append("Have you been working alone this whole time?");
})
$('#bobQ10A2').click(function () {
  bobResponses10();
  $('#bobResponse1').append("Have you been working alone this whole time?");
})
$('#bobQ10A3').click(function () {
  bobResponses10();
  $('#bobResponse1').append("Skip to #11.");
})
$('#bobQ10A4').click(function () {
  bobResponses10();
  $('#bobResponse1').append("I’m sorry to hear that. Poor thing.");
})













})