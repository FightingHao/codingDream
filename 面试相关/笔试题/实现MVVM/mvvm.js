function Mvvm(options = {}) {
  this.$options = options
  let data = this._data = this.$options.data
  observe(data)
  for (let key in data) {
    Object.defineProperty(this, key, {
      configurable: true,
      get() {
        return this._data[key];     // 如this.a = {b: 1}
      },
      set(newVal) {
        this._data[key] = newVal;
      }
    })
  }
}

// 数据劫持
function Observe(data) {
  for (const key in data) {
    const val = data[key]
    observe(val)
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        return val
      },
      set(newVal) {
        if (val === newVal) return
        val = newVal
        observe(val)
      }
    })
  }
}

function observe(data) {
  if (!data || typeof data !== 'object') return
  return new Observe(data)
}