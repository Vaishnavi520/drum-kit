var number=document.querySelectorAll("button").length;
for(var i=0;i<number;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      // var audio= new Audio("sounds/tom-1.mp3");
      // audio.play();
    

      var ButtonClick=this.innerHTML;

      switch (ButtonClick) {
        case "w":
          var tom1=new Audio("./sounds/crash.mp3");
          tom1.play();
          break;
          case "a":
            var tom1=new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;

            case "s":
              var tom1=new Audio("sounds/tom-1.mp3");
              tom1.play();
              break;
              case "d":
          var tom1=new Audio("sounds/tom-2.mp3");
          tom1.play();
          break;
          case "j":
          var tom1=new Audio("sounds/tom-3.mp3");
          tom1.play();
          break;
          case "k":
            var tom1=new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;
            case "l":
              var tom1=new Audio("sounds/snare.mp3");
              tom1.play();
              break;
        default:
          case "j":
            console.log(ButtonClick);
          break;
      }

      
    });
}