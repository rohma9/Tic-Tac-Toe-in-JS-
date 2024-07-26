let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-Container");
let msg  = document.querySelector("#msg");

let turn0 = true;
let count = 0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>
    {
        true0 =true;
        count = 0;
        enableBoxes();
        msgContainer.classList.add("hide");
    };

boxes.forEach((box) =>
{
    box.addEventListener("click",() =>
{
    if(turn0)
    {
        box.innerText = "O";
        turn0 = false;
    }
    else
    {
        box.innerText="X";
        turn0 = true;
    }
    box.disabled = true;
    count++;

    let declaredWinner = checkWinner();

    if(count === 9 && !declaredWinner)
        {
            draw();
        }
    });
});

const draw = () =>
    {
        msg.innerText = 'Game was draw';
        msgContainer.classList.remove("hide");
        disableBoxes();
    };
const disableBoxes = () =>
    {
        for(let box of boxes)
            {
                box.disabled=true;
            }
    };
const enableBoxes = () =>
        {
            for(let box of boxes)
                {
                    box.disabled=false;
                    box.innerText="";
                }   
        };
const showWinner = (winner) =>
    {
        msg.innerText = `congraculations, winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
const checkWinner = () => {
    for(let pattern of winPatterns)
        {
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != "")
            {
                if(pos1 == pos2 && pos2 == pos3)
                    {
                        showWinner(pos1);
                    }
            }
    }
};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);