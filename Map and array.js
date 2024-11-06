var numbers =[10, 20, 30, 40, 50];
function myfunction(num) {
    return num +10;
}
var newarray = numbers.map(myfunction);
console.log(newarray);