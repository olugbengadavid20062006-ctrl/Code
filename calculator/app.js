const display=document.querySelector(".input");
const buttons=document.querySelectorAll(".btn");

let screen='';

function updateScreen(){
    display.value=screen;
}

buttons.forEach(button => {
    button.addEventListener("click", (e)=>{

        const value=e.target.getAttribute('data-value');
        if(value==="c"){
            screen='';
        } else if(value==="="){
            try{
                screen=eval(screen).toString();
            }
            catch{
                screen="Syntax Error";
            }
        } else{
            screen += value;
        }

        updateScreen();
    })
});
