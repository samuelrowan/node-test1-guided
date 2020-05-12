function add(a = 0, b = 0) {
    return a + b
}
function subtract(a = 0, b = 0) {
    return a - b
}
function multiply(a = 0, b = 0) {
    return a * b
}
function divide(a = 0, b = 0) {
    if(b == 0){
        return 0
    }else if(b == null){
        return 0
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