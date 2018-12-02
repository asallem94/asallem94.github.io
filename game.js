import Cannon from './components/cannon';
import Shield from './components/shield';
import MyScoring from './components/scoring';
import Wave from './components/waves';
import GameControlls from './components/game_controls';


document.addEventListener('DOMContentLoaded', () => {

  const canvasElement = document.getElementById('canvasEl');
  const ctx = canvasElement.getContext("2d");

  const canWidth = document.getElementById('wallpaper').width * 0.60;
  const canHeight = document.getElementById('wallpaper').height * 0.70;

  canvasElement.width = canWidth;
  canvasElement.height = canHeight;


  // create guardianShield
  const guardianShield = new Shield(ctx, canvasElement, canWidth, canHeight);

  let rightPressed;
  let leftPressed;

  const controls = new GameControlls(canvasElement, rightPressed, leftPressed, guardianShield);

  const cannons = [];
  let clusterAngle  = 0.3 * Math.random() + 0.3;

  let myScoring = new MyScoring(ctx, canWidth, canHeight);
  let openedModal = true;

  let wave = new Wave(ctx, canWidth, canHeight, openedModal,clusterAngle);

  const resetGame = (modalOn, lastWave, lastScore) => {
    openedModal = modalOn;
    wave = new Wave(ctx, canWidth, canHeight, openedModal, clusterAngle);
    myScoring = new MyScoring(ctx, canWidth, canHeight, resetGame, lastWave, lastScore);
  };

  canvasElement.onclick = ()=> {
    resetGame(false);
  };
  function draw() {

    if (guardianShield.flashed > -1) {
      guardianShield.flashed--;
      if (guardianShield.flashed === -1){
        canvasElement.classList.toggle("background-flash");
      }
    }
    ctx.clearRect(0, 0, canWidth, canHeight);
    guardianShield.drawShield();
    guardianShield.moveShield(controls.rightPressed, controls.leftPressed);


    wave.drawWave(guardianShield, myScoring);

    if (openedModal) {
      myScoring.displayModal()
    } else {
      myScoring.drawScore();
      myScoring.drawLives();
      wave.drawWaveLabel();
    }

  }

  setInterval(draw, 10);
});
