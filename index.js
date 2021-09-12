//document.querySelector("button").addEventListener("click",function handelClick(){
//  alert("i was clicked")})
// document.querySelectorAll("button").addEventListener("click",function handelClick(){
//    alert("i was clicked")})//
//detect mousse 
for (let index = 0; index < 7; index++) {
  document
    .querySelectorAll("button")
    [index].addEventListener("click", function handelClick() {
      var bouton = this.innerHTML;
      sound(bouton);
      buttonAnimation(bouton);
    });
}
// detecte keybord press 
document.addEventListener("keypress", function(event) {
  sound(event.key);
  buttonAnimation(event.key)
});

function sound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var tom5 = new Audio("sounds/snare.mp3");
      tom5.play();
      break;
    case "k":
      var tom6 = new Audio("sounds/crash.mp3");
      tom6.play();
      break;
    case "l":
      var tom7 = new Audio("sounds/kick-bass.mp3");
      tom7.play();
      break;
    default:
      break;
  }
}
function buttonAnimation(currentKey) {
  var activButton = document.querySelector("." + currentKey)
  activButton.classList.add("pressed");
  setTimeout(function () {
    activButton.classList.remove("pressed")
  },100)

}