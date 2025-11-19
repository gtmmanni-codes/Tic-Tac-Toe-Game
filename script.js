let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset")
let heading = document.querySelector("h1");



let turnO = true;//playerX playerO
const winPattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const disable =()=>{
    for(let box of boxes){
        box.disabled=true;
    }

}
const enableboxes =()=>{
     for(let box of boxes){
        box.disabled=false;
    }

}

const resetGame = (box)=>{
    enableboxes();
    for(let box of boxes){
        
        
        box.innerText="";
        
    }
    heading.innerText = "Tic Tac Toe";
    turnO =true;
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turnO){
            box.innerText ="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;

        }
        box.disabled=true;
        checkWinner();

    });
}
);


const checkWinner =()=>{
    for(pattern of winPattern){

            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;



            if(pos1Val !="" && pos2Val !="" && pos3Val !="" ){
                if(pos1Val ===pos2Val && pos2Val ===pos3Val  ){
                    console.log("Winner !",pos1Val);
                   heading.innerText=`Winner is ${pos1Val}`;
                    //showWinner();
                    disable();
                    resetBtn.addEventListener("click",resetGame);
                    
                    
                }
            }



        
    }
}


