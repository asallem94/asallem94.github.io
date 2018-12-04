class GameControls {
  constructor(canvasElement, guardianShield){
    this.canvasElement = canvasElement;
    // this.canWidth = canWidth;
    this.rightPressed = false;
    this.leftPressed = false;
    this.guardianShield = guardianShield;

    // debugger
    document.getElementById('volume').onclick = this.handleSound;

    document.addEventListener("mousemove", this.mouseMoveHandler.bind(this), false);

    document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
    document.addEventListener("keyup", this.keyUpHandler.bind(this), false);

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
    e.preventDefault();
    if(e.keyCode == 39) {
      this.rightPressed = true;
    }
    else if(e.keyCode == 37) {
      this.leftPressed = true;
    }
  }

  keyUpHandler(e) {
    e.preventDefault();
    if(e.keyCode == 39) {
      this.rightPressed = false;
    }
    else if(e.keyCode == 37) {
      this.leftPressed = false;
    }
    console.log(this.rightPressed)
  }

  mouseMoveHandler(e) {
    let relativeX = e.clientX - this.canvasElement.offsetLeft;
    if(relativeX > 0 && relativeX < this.canvasElement.width) {
      this.guardianShield.paddleX = relativeX - this.guardianShield.paddleWidth/2;
    }
  }

  moveShield(){
    // debugger
    const sensitivity = 7;

    // console.log(this.paddleX < this.canWidth-this.paddleWidth);
    // console.log(rightPressed);

    if(this.rightPressed && this.guardianShield.paddleX < this.canWidth-this.guardianShield.paddleWidth) {
      this.guardianShield.paddleX += sensitivity;
    }
    if(this.leftPressed && this.guardianShield.paddleX > 0) {
      this.guardianShield.paddleX -= sensitivity;
    }
  }

}

export default GameControls;
