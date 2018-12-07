class Scoring {
  constructor(ctx, canWidth, canHeight, resetGame, lastWave=0, lastScore=0){
    this.score = 0;
    this.wave = 0;
    this.ctx = ctx;
    this.canWidth = canWidth;
    this.canHeight = canHeight;
    this.resetGame = resetGame;
    this.lastWave=lastWave;
    this.lastScore=lastScore;
    this.lives = 10;

  }
  drawScore() {
    this.ctx.font = "1.5em Arial";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("Score: "+this.score, 80, 20);
  }
  drawLives() {
    this.ctx.font = "1.5em Arial";
    this.ctx.fillStyle = "#white";
    this.ctx.fillText("Lives: "+this.lives, this.canWidth-80, 20);
  }

  displayModal(){
    const topPadding = this.canHeight/3;
    // display Instructions
    this.ctx.lineWidth = 3;
    this.ctx.font = "2.5em Arial";
    this.ctx.strokeStyle = 'black';
    this.ctx.strokeText("Click to Start", this.canWidth/2, 80+topPadding);
    this.ctx.fillStyle = "#white";
    this.ctx.textAlign = "center";
    this.ctx.fillText("Click to Start", this.canWidth/2, 80+topPadding);
    // display wave
    this.ctx.font = "1.5em Arial";
    this.ctx.strokeStyle = 'black';
    this.ctx.strokeText("Wave: "+this.lastWave, this.canWidth/2, 120+topPadding);
    this.ctx.fillStyle = "#white";
    this.ctx.fillText("Wave: "+this.lastWave, this.canWidth/2, 120+topPadding);
    // display score
    this.ctx.font = "1.5em Arial";
    this.ctx.strokeStyle = 'black';
    this.ctx.strokeText("Score: "+this.lastScore, this.canWidth/2, 160+topPadding);
    this.ctx.fillStyle = "white";
    this.ctx.fillText("Score: "+this.lastScore, this.canWidth/2, 160+topPadding);
  }
}

export default Scoring;
