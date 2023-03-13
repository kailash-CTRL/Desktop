function Stopwatch() {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;

  Object.defineProperty(this, 'duration', {
    get: function() { return this._duration; }
  });
  

}

Stopwatch.prototype.start = function() {
  if (this.running) 
    throw new Error('Stopwatch has already started.');

  this.running = true; 
  this.startTime = new Date();
}

Stopwatch.prototype.stop = function() {
  if (!this.running) 
    throw new Error('Stopwatch is not started.');

  this.running = false; 
  this.endTime = new Date();

  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this._duration += seconds; 
}

Stopwatch.prototype.reset = function() {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this._duration = 0;
}


 const stopwatch = new Stopwatch();


Object.defineProperty(stopwatch, 'running', {
  writable: false, 
  enumerable: false,
  configurable: false
});
Object.defineProperty(stopwatch, 'startTime', {
  writable: true, 
  enumerable: false,
  configurable: false
});
Object.defineProperty(stopwatch, 'endTime', {
  writable: false, 
  enumerable: false,
  configurable: false
});



stopwatch.running = 20; 
//console.log(Object.keys(stopwatch));  




