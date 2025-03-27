const boxes = document.querySelectorAll(".box")
var turnX = true
var info = document.querySelector(".info")
let resetbtn = document.querySelector(".Reset")
let musicclick = new Audio("musicclick.mp3");
let musicwin = new Audio("musicwin.mp3")
const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
    ]
const resetgame = () => {
    info.innerText = "Turn Of: X";
    turnX = true;
    musicwin.pause()
    enable();
}
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("box clicked");
        if (turnX){
            musicclick.play()
            box.innerText="X";
            turnX = false;
            info.innerText = "Turn Of: O";
        }
        else{
            musicclick.play()
            box.innerText = "O";
            turnX = true;
            info.innerText = "Turn Of: X";
        }
        box.style.pointerEvents = "none";
        checkwinner()
    })
});
const dissable = () =>{
    boxes.forEach(box => box.style.pointerEvents = "none")
}
const enable = () =>{
    for (let box of boxes){
        box.style.pointerEvents = "auto";
        box.innerText = ""
    }
}
const winnermsg = (winner) => {
    info.innerText = `Winner is ${winner}`;
    dissable()
}
const checkwinner = () => {
    for (let pattern of winpattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText
    if(pos1 != "" && pos2 != "" && pos3 != ""){
        if (pos1 === pos2 && pos2 === pos3){
            console.log(`Winner is ${pos1}`);
            winnermsg(pos1)
            musicwin.play()
        }
    }
}}
resetbtn.addEventListener("click", resetgame)







