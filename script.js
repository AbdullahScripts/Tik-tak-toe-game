const successpath = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

turn = false;
let num = 0;

// select all the buttons 
const buttons = document.querySelectorAll(".btn");
// output show 

let show=document.querySelector(".display");

let output =document.querySelector("#show");



// Loop through each button and add a click event listener
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (turn) {
      button.innerText = "O";
      turn = false;
    } else {
      button.innerText = "X";
      turn = true;
    }
    num += 1;
    CheckWinner();

    button.disabled = true;

    if (num == 9 && !CheckWinner()) {
      console.log("draw");
    }
  });
});

function CheckWinner() {
  for (pattern of successpath) {
    let s1 = buttons[pattern[0]].innerText;
    let s2 = buttons[pattern[1]].innerText;
    let s3 = buttons[pattern[2]].innerText;

    if (s1 != "" && s2 != "" && s3 != "") {
      if (s1 == s2 && s2 == s3) {
        output.innerHTML=`The winner is ${s1}`
        show.classList.remove("hide");
        

      }
    }
  }
}





// Reset button 

function reset(){
 
  console.log("clicked")
}