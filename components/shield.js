class Shield{
  constructor(ctx, canvasElement, canWidth, canHeight){
    this.ctx = ctx;
    this.canvasElement = canvasElement;
    this.canWidth = canWidth;
    this.canHeight = canHeight;

    this.paddleHeight = 25;
    this.paddleWidth = 200;
    this.paddleX = (this.canWidth-this.paddleWidth)/2;

    this.flashed = -1;


    this.blockingExplosion = document.getElementById('explosion2');
    this.blockingExplosion.volume = 0.1;
    this.dieingExplosion = document.getElementById('explosion1');
  }

  drawShield() {

    // const height3d = this.canHeight-this.paddleHeight;
    // const refFactor = ( 2 * this.paddleHeight ) * (this.canHeight/2 - this.paddleX )/this.canHeight ;
    // console.log(this.paddleX);
    //
    // this.ctx.moveTo(this.paddleX, height3d);
    // this.ctx.lineTo(this.paddleX*2, height3d - this.paddleHeight);
    // this.ctx.lineTo(this.paddleX/2 + this.paddleWidth/2 - refFactor, height3d - this.paddleHeight);
    // this.ctx.lineTo(this.paddleX + this.paddleWidth, height3d);
    // // this.ctx.lineTo(500,200);
    // this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.rect(this.paddleX, this.canHeight-this.paddleHeight, this.paddleWidth, this.paddleHeight);
    this.ctx.fillStyle = "lightgray";
    this.ctx.fill();
    this.ctx.closePath();
  }

  looseLife(){
    this.dieingExplosion.currentTime = 0;
    this.dieingExplosion.play();
    this.canvasElement.classList.toggle("background-flash");
    this.flashed = 2;
  }

  blockCannonAudio(){
    this.blockingExplosion.currentTime = 0;
    this.blockingExplosion.play();
  }

  moveShield(rightPressed, leftPressed){
    const sensitivity = 7;

    if(rightPressed && this.paddleX < this.canWidth-this.paddleWidth) {
      this.paddleX += sensitivity;
    }
    if(leftPressed && this.paddleX > 0) {
      this.paddleX -= sensitivity;
    }
  }
}

export default Shield;
