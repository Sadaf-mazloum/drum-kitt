for (let i=0; i< document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {
        let button_sound=this.innerHTML;
        switch(button_sound){
            case "w":
                let Audio1 = new Audio('sounds/crash.mp3');
                Audio1.play();
                break;
             case "a":    
                let Audio2 = new Audio('sounds/kick-bass.mp3');
                Audio2.play();
                break;
             case "s":    
                let Audio3  = new Audio('sounds/snare.mp3');
                Audio3.play();
                break;    
             case "d":    
                let Audio4 = new Audio('sounds/tom-1.mp3');
                Audio4.play();
                break;   
             case "j":    
                let Audio5= new Audio('sounds/tom-2.mp3');
                Audio5.play();
                break; 
             case "k":    
                let Audio6 = new Audio('sounds/tom-3.mp3');
                Audio6.play();
                break; 
             case "l":    
                let Audio7 = new Audio('sounds/tom-4.mp3');
                Audio7.play();
                break;                   
        }
    })

}