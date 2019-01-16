(function () {
  var root = this

  var SymbolRealize = function Symbol(description) {
    if (this instanceof SymbolRealize)
      throw new TypeError('SymbolRealize not is a function')

    var result = Object.create(null)
    var descriptString = description === undefined ? undefined : String(description)

    Object.defineProperties(result, {
      __Description__: {
        value: descriptString,
        writable: false,
        enumerable: false,
        configurable: false
      }
    })

    return result
  }

  root.SymbolRealize = SymbolRealize
})()

