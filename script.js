let boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn")
const newGameBtn = document.querySelector(".new-game")
const messageBox = document.querySelector("#msg")
const message = document.querySelector(".winner-msg")
const logobox = document.querySelector(".logo")

let turnO = true; //playerX, playerO

const winPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerHTML = 'X'
            box.style.color = '#FCA311;'
            turnO = false
        }
        else {
            box.innerHTML = 'O'
            box.style.color = 'black'
            turnO = true
        }
        box.disabled = true;

        checkWinner();
    })
})


const checkWinner = () => {
    for (let pattern of winPattern) {
        // console.log(boxes[pattern[0]].innerHTML, boxes[pattern[1]].innerHTML,boxes[pattern[2]].innerHTML)}

        const pos1 = boxes[pattern[0]].innerHTML
        const pos2 = boxes[pattern[1]].innerHTML
        const pos3 = boxes[pattern[2]].innerHTML

        if (pos1 != '' && pos2 != '' && pos3 != '') {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log('winner', pos1);
                messageBox.classList.remove("hide");
                disable();
                message.innerHTML = `Winner is  ${boxes[pattern[0]].innerHTML} `
                
            }
        }

    }
}


const disable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}


const reset = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = '';
        messageBox.classList.add("hide")

    }
}


resetBtn.addEventListener("click", reset)
newGameBtn.addEventListener("click", reset)

logobox.addEventListener("click",()=>{
    url = "https://github.com/engr-arnab"
    window.open(url, "_blank")
})