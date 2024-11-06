function myfunction(){
var x = 10;
var y = 20;
var a = eval("x + y");
var b = eval("2 * 2");
var c = eval("y - x");
var res = a + b + c; //concatenates the string
console.log(res);
}
myfunction()