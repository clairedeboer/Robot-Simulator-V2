document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();


  const movesContainer = document.querySelector('#moves-container')
  const controlPanel = document.querySelector('#control-panel')
  const moveButton = document.querySelector('#move-button')
  const nextMoveLi = movesContainer.querySelector("li")

  // movesContainer.innerHTML = `
  //   <li>Down</li>
  //   <li>Right</li>
  //   <li>Down</li>
  //   <li>Right</li>`

  // controlPanel.append(movesContainer)



  document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
      movesContainer.innerHTML += `<li>Right</li>`
      movesContainer.append(nextMoveLi)
      // move('right')
    };
    
    if (e.key === "ArrowLeft") {
      movesContainer.innerHTML += `<li>Left</li>`
      movesContainer.aprepend(nextMoveLi)
      // move('left')
    };
    
    if (e.key === "ArrowUp") {
      movesContainer.innerHTML += `<li>Up</li>`
      movesContainer.append(nextMoveLi)
      // move('up')
    };
    
    if (e.key === "ArrowDown") {
      movesContainer.innerHTML += `<li>Down</li>`
      movesContainer.append(nextMoveLi)
      // move('down')
    };
  })

  // delete moves
  movesContainer.addEventListener("click", event => {
    if (event.target.tagName === "LI") {
      event.target.remove()
    }
  })

  // run moves
  moveButton.addEventListener("click", () => {
    // const nextMoveLi = movesContainer.querySelector("li") // get the 1st li in the list
    move(nextMoveLi.textContent) // move the robot
    nextMoveLi.remove() // remove the li
  })

  console.log(controlPanel)
});

// ul id="moves-container">


// function moveDodgerLeft() {
//   var leftNumbers = dodger.style.left.replace('px', '');
//   var left = parseInt(leftNumbers, 10)
//   if (left > 0) {
//     dodger.style.left = `${left - 1}px`
//   }
// }

// function moveDodgerRight() {
//   var leftNumbers = dodger.style.left.replace('px', '');
//   var left = parseInt(leftNumbers, 10)
//   if (left > 0) {
//     dodger.style.left = `${left + 1}px`
//   }
// }

// document.addEventListener('keydown', function(e) {
//   if (e.key === "ArrowLeft") {
//     var leftNumbers = dodger.style.left.replace('px', '');
//     var left = parseInt(leftNumbers, 10)
//     if (left > 0) {
//       dodger.style.left = `${left - 1}px`
//   }
// })

// function move(direction) {
//   let { x, y } = currentPosition;

//   switch (direction) {
//     case "left":
//       x--;
//       break;
//     case "right":
//       x++;
//       break;
//     case "up":
//       y--;
//       break;
//     case "down":
//       y++;
//       break;
//   }

//   const moved = renderBot({ x, y });
//   if (moved) {
//     currentPosition = { x, y };
//   }
// }