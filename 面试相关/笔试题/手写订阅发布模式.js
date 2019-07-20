class EventEmitter {
  /* 在此处填写实现 */
  constructor() {
    this.eventlist = {};
    this.onceEventlist = {};
  }
  fire(obj) {
    const { type, value } = obj;
    let _run = 1;
    let _find = function (list) {
      for (let i in list) {
        if (i === type) {
          for (let j in list[i]) {
            list[i][j](value);
            if (_run) {
              delete list[i];
            }
          }
        }
      }
      _run = 0;
    };
    _find(this.onceEventlist);
    _find(this.eventlist);
  }
  on(event, fn) {
    this.eventlist[event] = {};
    this.eventlist[event][fn.name] = fn;
  }
  off(event, fn) {
    if (this.eventlist[event]) {
      delete this.eventlist[event][fn.name];
    }
  }
  once(event, fn) {
    this.onceEventlist[event] = {};
    this.onceEventlist[event][fn.name] = fn;
  }
}

const emitter = new EventEmitter();

const handler = function (evt) {
  console.log(1, evt);
};
emitter.on('foo', handler);

emitter.once('foo', function (evt) {
  console.log(2, evt);
});

emitter.fire({ type: 'foo', value: 'hello' });
emitter.fire({ type: 'foo', value: 'world' });
emitter.off('foo', handler);
emitter.fire({ type: 'foo', value: 'test' });