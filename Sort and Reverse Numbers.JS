var points= [10, 20, 30, 40, 50, 60, 70, 80,90, 100]
console.log(points);
function ascending(){
    points.sort(function (a, b) { return a-b});
    console.log(points);
}
function descending() {
    points.sort (function (a, b) { return a-b});
    console.log(points);
}
ascending()
descending()