let boxes = document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");// reset button
let newbutton=document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


const resetgame=()=>{
    turnO=true;
    EnabledBoxes();
    msgContainer.classList.add("hide");

};



let turnO = true;// player x and player 0
const winpatter=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// accesing the box and processing
boxes.forEach((box)=> {
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        

        }else{
            box.innerText="x";
            turnO=true;

        }
     box.disabled= true;
      


     // checking for winner
     checkWinner();


    });

});

// hide disable boxes
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
//enabled boxes
const EnabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
// hide the winner and show
const showWinner = (winner) => {
    msg.innerText = `congrulation winner  is ${winner}`;
   msgContainer.classList.remove("hide");
   disabledBoxes();
  };

// winner chercker logic
const checkWinner=()=>{
    for(let pattern of winpatter){
       let posVal1 = boxes[pattern[0]].innerText;
       let posVal2 = boxes[pattern[1]].innerText;
       let posVal3 = boxes[pattern[2]].innerText;
     if (posVal1 !=""&& posVal2 !="" && posVal3 !=""){
        // checking that  the positon should not be empty
        if (posVal1=== posVal2 && posVal2===posVal3){
          console.log("winner",posVal1);
          showWinner(posVal1);
          
        }

     }
    
    }

};

newbutton.addEventListener('click', resetgame);
resetBtn.addEventListener('click', resetgame);


