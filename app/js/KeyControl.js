export default class KeyControl {
  constructor(game){
    this.canvas = game.canvas;

    this.keyCallbacks = {};
    this.keyUpCallbacks = {};

    this.canvas.onkeydown = this.triggerKeyDownCallbacks.bind(this);

    this.canvas.onkeyup = function(e){
      e.preventDefault();
      var callbacks = this.keyUpCallbacks[e.keyCode];
      if(callbacks){
        for (var cb = 0; cb < callbacks.length; cb++) {
          callbacks[cb]();
        }
      }
    }.bind(this);
  }

  triggerKeyDownCallbacks(e){
    e.preventDefault();
    var keyCode = e.keyCode;
    // console.log(keyCode);
    var callbacks = this.keyCallbacks[keyCode];
    if(callbacks){
      for (var cb = 0; cb < callbacks.length; cb++) {
        callbacks[cb]();
      }
    }

  }

  onKeyDown(key, callback) {
    if(this.keyCallbacks[key] === undefined){
      this.keyCallbacks[key] = [];
    }
    this.keyCallbacks[key].push(callback);
  }

  onKeyUp(key, callback) {
    if(this.keyUpCallbacks[key] === undefined){
      this.keyUpCallbacks[key] = [];
    }
    this.keyUpCallbacks[key].push(callback);
  }
}
