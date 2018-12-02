class GameControls {
  constructor(canvasElement, rightPressed, leftPressed, guardianShield){
    this.canvasElement = canvasElement;
    this.rightPressed = rightPressed;
    this.leftPressed = leftPressed;
    this.guardianShield = guardianShield;


    document.getElementById('volume').onclick = this.handleSound;

    document.addEventListener("mousemove", this.mouseMoveHandler.bind(this), false);

    document.addEventListener("keydown", this.keyDownHandler, false);
    document.addEventListener("keyup", this.keyUpHandler, false);

    document.addEventListener("keydown", guardianShield.keyDownHandler, false);
    document.addEventListener("keyup", this.keyUpHandler, false);
  }

  handleSound(){
    document.getElementById('nosound').classList.toggle("muted");
    document.getElementById('sound').classList.toggle("muted");

    document.getElementById('explosion1').muted = document.getElementById('explosion1').muted ? false : true;
    document.getElementById('explosion2').muted = document.getElementById('explosion2').muted ? false : true;
    document.getElementById('background-song').muted = document.getElementById('background-song').muted ? false : true;
    document.getElementById('background-song').play();
  }

  keyDownHandler(e) {
    // debugger
    if(e.keyCode == 39) {
      this.rightPressed = true;
    }
    else if(e.keyCode == 37) {
      this.leftPressed = true;
    }
  }

  keyUpHandler(e) {
    if(e.keyCode == 39) {
      this.rightPressed = false;
    }
    else if(e.keyCode == 37) {
      this.leftPressed = false;
    }
  }

  mouseMoveHandler(e) {
    let relativeX = e.clientX - this.canvasElement.offsetLeft;
    if(relativeX > 0 && relativeX < this.canvasElement.width) {
      this.guardianShield.paddleX = relativeX - this.guardianShield.paddleWidth/2;
    }
  }

}

export default GameControls;
