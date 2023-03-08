// document.querySelectorAll("button")[0].addEventListener("click",clickMe);
// document.querySelectorAll("button")[1].addEventListener("click",clickMe);
// document.querySelectorAll("button")[2].addEventListener("click",clickMe);
// document.querySelectorAll("button")[3].addEventListener("click",clickMe);
// document.querySelectorAll("button")[4].addEventListener("click",clickMe);
// document.querySelectorAll("button")[5].addEventListener("click",clickMe);
// document.querySelectorAll("button")[6].addEventListener("click",clickMe);

// function clickMe(){
//   var audio = new Audio('sounds/tom-1.mp3');
//   audio.play();
// }

var numberOfDrums = document.querySelectorAll(".drum").length;


// for (i=0; i<numberOfDrums ; i++){
//   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//     this.style.color = "white"
//   });

// }


// var lenOfDrum = document.querySelectorAll(".drum").length;

//   for(i=0; i<lenOfDrum ; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//       this.style.color = "white";

//     });
//   }


for (i=0; i<numberOfDrums ; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
   
    var buttonInnerHTML = this.innerHTML

    makeSound(buttonInnerHTML);

    backAnim(buttonInnerHTML);

  }
)}



// Stage 1

// General Keydown resulting in alert

// document.addEventListener("keydown",function(){
//   alert("I have been pressed")
// })


// Stage 2 

// Recognising the specific key inputs

document.addEventListener("keydown",function(event){
   makeSound(event.key);
   backAnim(event.key);
})

// Stage 3

// After finding the 'key' property for the event via keydown, filter through the keys to switch in order to parse the sound


function makeSound(key){

  switch (key){
    case "w": 
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
      break;
    case "a": 
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
      break;
    case "s": 
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
      break;
    case "d": 
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
      break;
    case "j": 
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
      break;
    case "k": 
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
      break;
    case"l": 
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
      break;
  
    default: console.log();
      break;
  }



}

function backAnim(currentKey){

  var pressedButton = document.querySelector("." + currentKey );
  pressedButton.classList.add("pressed");
  setTimeout(function(){
    pressedButton.classList.remove("pressed");
  },100)
}