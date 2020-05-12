function add() {
  var i;
  var num = 0;
  for (i = 0; i < arguments.length; i++) {
    num += arguments[i];
  }
  return num;
}
function subtract(a = 0, b = 0) {
    return a - b
}
function multiply(a = 0, b = 0) {
    return a * b
}
function divide(a = 1, b = 1) {
    if(b == 0){
        return 0
    }else if(typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("expected number")
    }else{
        return a/b
    }
}
module.exports= {
    add,
    subtract,
    multiply,
    divide
} 