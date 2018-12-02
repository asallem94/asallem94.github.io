/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/cannon.js":
/*!******************************!*\
  !*** ./components/cannon.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Cannon {
  constructor( ctx, canWidth, canHeight, clusterAngle, openedModal){
    const colors = ["red", "green", "orange", "brown", "black", "blue", "purple","rgb(0,0,255)" , "lightblue" , "gray"];
    this.color = colors[Math.floor(Math.random()*10)];
    this.canWidth = canWidth;
    this.canHeight = canHeight;
    this.ctx = ctx;
    this.x0 = canWidth/2;
    this.y0 = canHeight * 1/2;

    this.openedModal = openedModal;

    this.g = 1;
    const v0 = -27;

    this.cannonRadius = 1;
    this.dr = 0.05;

    this.status = 1;

    const angle = (Math.random()/20 + clusterAngle)* Math.PI ;

    this.vy0 = v0 * Math.sin (angle);
    this.vx0 = v0 * Math.cos (angle);

    this.t = 0;
    this.dt = 0.1;

    this.x = this.vx0 * this.t + this.x0;
    this.y = (this.g * Math.pow(this.t, 2)) + (this.vy0 * this.t) + this.y0;

  }

  drawCannon(){
    // this.ctx.shadowOffsetY = 350-this.y+ 8*this.cannonRadius;
    // this.ctx.shadowColor= "rgba(0,0,0,0.5)";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.cannonRadius, 0, Math.PI*2);
    this.ctx.fillStyle = "white" ;
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = this.cannonRadius * 0.1;
    this.ctx.fill();
    this.ctx.stroke();
  }

  blockedExplosion(){
    // debugger
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y-5, this.cannonRadius+5, 0, Math.PI*2);
    this.ctx.fillStyle = "red";
    this.ctx.lineWidth = 5;
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y-3, this.cannonRadius-3, 0, Math.PI*2);
    this.ctx.fillStyle = "yellow";
    this.ctx.lineWidth = 5;
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(this.x +5 * Math.random(), this.y + (4 * Math.random()), this.cannonRadius-14, 0, Math.PI*2);
    this.ctx.fillStyle = "red";
    this.ctx.lineWidth = 2;
    this.ctx.fill();
    this.ctx.closePath();
  }

  checkForExplosion(guardianShield, scoreKeeping){
    if(this.y >= this.canHeight - guardianShield.paddleHeight - this.cannonRadius && this.y <= this.canHeight) {
      if(this.x > guardianShield.paddleX && this.x < guardianShield.paddleX + guardianShield.paddleWidth) {
        if(!this.openedModal){
          guardianShield.blockCannonAudio();
        }
        this.status = -2;
        scoreKeeping.score ++;
      }
    }
  }

  handleLose(guardianShield, scoreKeeping ){
    if(this.y > this.canHeight + 2 * this.cannonRadius) {
      this.status = 0;
      scoreKeeping.lives --;
      if (!this.openedModal) {
        guardianShield.looseLife();
      }

      if (scoreKeeping.lives === 0) {
        scoreKeeping.resetGame(true, scoreKeeping.wave , scoreKeeping.score);

      }
    }
  }
  moveCannon(guardianShield, scoreKeeping){
    if (this.status < 0) {
      return null;
    }
    this.t += this.dt;

    this.cannonRadius += this.dr;

    this.x = this.vx0 * this.t + this.x0;
    this.y = (this.g * Math.pow(this.t, 2)) + (this.vy0 * this.t) + this.y0;

    // bounce off walls
    if(this.x > this.canWidth - this.cannonRadius || this.x < this.cannonRadius) {
      this.x0 = (this.vx0 * this.t) + this.x;
      this.vx0 = -(this.vx0) ;
    }

    // cannons explodes
    this.checkForExplosion(guardianShield, scoreKeeping);

    // Lose life
    this.handleLose(guardianShield, scoreKeeping);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Cannon);


/***/ }),

/***/ "./components/game_controls.js":
/*!*************************************!*\
  !*** ./components/game_controls.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (GameControls);


/***/ }),

/***/ "./components/scoring.js":
/*!*******************************!*\
  !*** ./components/scoring.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (Scoring);


/***/ }),

/***/ "./components/shield.js":
/*!******************************!*\
  !*** ./components/shield.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (Shield);


/***/ }),

/***/ "./components/waves.js":
/*!*****************************!*\
  !*** ./components/waves.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cannon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cannon */ "./components/cannon.js");


class Waves{
  constructor(ctx, canWidth, canHeight, openedModal, clusterAngle){
    this.ctx = ctx;
    this.canWidth = canWidth;
    this.canHeight = canHeight;
    this.clusterDelay = 0;
    this.clusterAngle = clusterAngle;
    this.intervalDelay = 0;
    this.waveDelay = 0;
    this.wave = 0;
    this.cannons = [];

    this.framesPerCannon = openedModal ? 0 : 25 ; //????
    this.cannonsPerCluster = 1;
    this.clustersPerWave = 1;
    this.delayFramesBetweenClusters= 0;
    this.delayRatio = 20;

    this.openedModal = openedModal;
    this.currentWave = true;
  }

  incrementIntervalDelay(resetIntervalDelay){
    if (this.intervalDelay === 0){
      this.cannons.push(new _cannon__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, this.canWidth, this.canHeight, this.clusterAngle, this.openedModal));
      this.intervalDelay = resetIntervalDelay;
    } else {
      this.intervalDelay -= 1;
    }
  }

  incrementClusterDelay(resetClusterDelay){
    if (this.clusterDelay === 0){
      this.clusterAngle  = 0.3 * Math.random() + 0.325;
      this.clusterDelay = resetClusterDelay;
      this.delayFramesBetweenClusters = this.delayRatio - Math.floor(this.wave/2);
    } else {
      this.clusterDelay -= 1;
    }
  }

  incrementWaveDelay(resetWave, myScoring){
    if (this.waveDelay === 0){

      this.waveDelay = resetWave;
      this.wave += 1;
      myScoring.lives ++;
      myScoring.wave = this.wave
      this.currentWave = false;

      if (this.wave % 2 === 1){
        this.framesPerCannon = Math.floor(this.framesPerCannon * 0.9);
      }
      if (this.wave % 2 === 1){
        this.cannonsPerCluster += 1;
      }
      if (this.wave % 3 === 1){
        this.clustersPerWave += 1;
      }
    } else {
      this.waveDelay -= 1;
    }
  }

  drawWave(guardianShield, myScoring){
    // if (this.waveIncrease){
      // if ( this.delayFramesBetweenClusters === 0){
        this.incrementIntervalDelay(this.framesPerCannon); //create new cannon
        this.incrementClusterDelay(this.cannonsPerCluster * this.framesPerCannon ); //cahange cannon cluster direction
      // } else {
      //   this.delayFramesBetweenClusters -= 1;
      // }
      this.incrementWaveDelay(this.clustersPerWave * this.cannonsPerCluster * this.framesPerCannon, myScoring );
      this.currentWave = true;
    // }

    // draw all cannons in the frame
    this.drawAttackingWave(guardianShield, myScoring);
  }

  drawWaveLabel(){
    this.ctx.font = "2.5em Arial";
    this.ctx.fillStyle = "#white";
    this.ctx.fillText("Wave: "+this.wave, this.canWidth/2, 80);
  }

  drawAttackingWave(guardianShield, myScoring) {
    for (let i = this.cannons.length-1; i >=0 ; i--) {
      this.cannons[i].moveCannon(guardianShield, myScoring);
      if (this.cannons[i].status === 1) {
        this.cannons[i].drawCannon();
      }
      if (this.cannons[i].status < 0 && this.cannons[i].status > -5 ){ //cannon to explode on shield
        this.cannons[i].blockedExplosion();
        this.cannons[i].status += 1;
      }
      if (this.cannons[i].status === 0){ // status === 0 , remove cannon
        this.cannons.splice(i, 1);
      }
    }
  }
}


/* harmony default export */ __webpack_exports__["default"] = (Waves);


/***/ }),

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_cannon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/cannon */ "./components/cannon.js");
/* harmony import */ var _components_shield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/shield */ "./components/shield.js");
/* harmony import */ var _components_scoring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/scoring */ "./components/scoring.js");
/* harmony import */ var _components_waves__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/waves */ "./components/waves.js");
/* harmony import */ var _components_game_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/game_controls */ "./components/game_controls.js");







document.addEventListener('DOMContentLoaded', () => {

  const canvasElement = document.getElementById('canvasEl');
  const ctx = canvasElement.getContext("2d");

  const canWidth = document.getElementById('wallpaper').width * 0.60;
  const canHeight = document.getElementById('wallpaper').height * 0.70;

  canvasElement.width = canWidth;
  canvasElement.height = canHeight;


  // create guardianShield
  const guardianShield = new _components_shield__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, canvasElement, canWidth, canHeight);

  let rightPressed;
  let leftPressed;

  const controls = new _components_game_controls__WEBPACK_IMPORTED_MODULE_4__["default"](canvasElement, rightPressed, leftPressed, guardianShield);

  const cannons = [];
  let clusterAngle  = 0.3 * Math.random() + 0.3;

  let myScoring = new _components_scoring__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, canWidth, canHeight);
  let openedModal = true;

  let wave = new _components_waves__WEBPACK_IMPORTED_MODULE_3__["default"](ctx, canWidth, canHeight, openedModal,clusterAngle);

  const resetGame = (modalOn, lastWave, lastScore) => {
    openedModal = modalOn;
    wave = new _components_waves__WEBPACK_IMPORTED_MODULE_3__["default"](ctx, canWidth, canHeight, openedModal, clusterAngle);
    myScoring = new _components_scoring__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, canWidth, canHeight, resetGame, lastWave, lastScore);
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


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map