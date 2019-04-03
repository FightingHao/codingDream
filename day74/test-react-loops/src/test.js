var React = require("react");
var iterall = require("iterall");

function For(props) {
  var mapper = props.children || props.as;
  if (
    typeof mapper !== "function" ||
    (props.hasOwnProperty("as") ^ props.hasOwnProperty("children")) === 0
  ) {
    throw new TypeError(
      "<For> expects either a render-prop child or a Function `as` prop."
    );
  }

  var hasIn = props.hasOwnProperty("in");
  if ((props.hasOwnProperty("of") ^ hasIn) === 0) {
    throw new TypeError(
      "<For> expects either an Iterable `of` or Object `in` prop."
    );
  }

  if (hasIn) {
    // Get the object
    var obj = props.in;

    // Accept null / falsey as nothing to loop.
    if (!obj) {
      return null;
    }

    // Map each object property into a React child, provide additional info if requested
    var keys = Object.keys(obj);
    var length = keys.length;
    var mapped = [];
    for (let i = 0; i < length; i++) {
      var key = keys[i];
      mapped.push(mapIteration(mapper, obj[key], i, length, key));
    }
    return mapped;
  }

  // Get the list
  var list = props.of;

  // Accept null / falsey as nothing to loop.
  if (!list) {
    return null;
  }

  // Convert non-Array collections to an Array.
  if (!Array.isArray(list)) {
    if (!iterall.isCollection(list)) {
      throw new TypeError(
        "<For> `of` expects an Array, Array-like, or Iterable collection"
      );
    }
    var array = [];
    iterall.forEach(list, function(item) {
      array.push(item);
    });
    list = array;
  }

  // Map each list item into a React child, provide additional info if requested
  var length = list.length;
  var mapped = [];
  for (let i = 0; i < length; i++) {
    mapped.push(mapIteration(mapper, list[i], i, length, i));
  }
  return mapped;
}

function mapIteration(mapper, item, index, length, key) {
  var result =
    mapper.length === 1
      ? mapper(item)
      : mapper(item, {
          index: index,
          length: length,
          key: key,
          isFirst: index === 0,
          isLast: index === length - 1
        });
  if (React.isValidElement(result) && !result.props.hasOwnProperty("key")) {
    return React.cloneElement(result, { key: String(key) });
  }
  return result;
}

// Export loops
Object.defineProperties(exports, {
  For: { enumerable: true, value: For },
  __esModule: { value: true }
});