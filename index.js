for (
  let index = 0;
  index < document.querySelectorAll(".drum").length;
  index++
) {
  document
    .querySelectorAll(".drum")
    [index].addEventListener("click", function () {
      var buttoninnerHTML = this.innerHTML;
      switch (buttoninnerHTML) {
        case "w":
          var tom1 = new Audio("./sounds/tom-1.mp3");
          tom1.play();
          break;

        case "a":
          var tom2 = new Audio("./sounds/tom-2.mp3");
          tom2.play();
          break;

        case "s":
          var tom3 = new Audio("./sounds/tom-3.mp3");
          tom3.play();
          break;

        case "d":
          var tom4 = new Audio("./sounds/tom-4.mp3");
          tom4.play();
          break;

        case "j":
          var crash = new Audio("./sounds/crash.mp3");
          crash.play();
          break;

        case "k":
          var kick = new Audio("./sounds/kick-bass.mp3");
          kick.play();
          break;

        case "l":
          var snare = new Audio("./sounds/snare.mp3");
          snare.play();
          break;

        default:
          break;
      }
    buttonAnimation(buttoninnerHTML)
    });
}

document.addEventListener("keypress", function (event) {
  var keyEntered = event.key;
  switch (keyEntered) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    default:
      break;
  }
  buttonAnimation(event.key);
});


function buttonAnimation(currentKey) {
  var activeKey=document.querySelector("."+currentKey);
  activeKey.classList.add("pressed");

  setTimeout(function() {
    activeKey.classList.remove("pressed");

    
  }, 300);

  
}