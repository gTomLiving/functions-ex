
// // Functions Ex - 1 **************************************************************************************************************************************

//--- AREA OF CIRCLE FUNCTION ---

let area = null;
function getAreaOfCircle(radius) {
    area = 3.14 * (radius * radius);
    return area
}
getAreaOfCircle(5);
console.log(area);

//--- Circumference OF CIRCLE FUNCTION ---

let circ = null;
function getcircumferenceOfCircle(radius) {
    circ = 2 * 3.14 * radius;
    return circ
}
getcircumferenceOfCircle(5);
console.log(circ);


//--- Area OF A SQUARE FUNCTION ---

let squareArea = null;
function getAreaOfSquare(side) {
    squareArea = side * side;
    return squareArea
}
getAreaOfSquare(5);
console.log(squareArea);

//--- Area OF A Triangle FUNCTION ---

let triangleArea = null;
function getAreaOfTriangle(base, height) {
    triangleArea = (base / 2) * height;
    return triangleArea;

}
getAreaOfTriangle(5, 5);
console.log(triangleArea);


// // Functions Ex - 2 **************************************************************************************************************************************

let direction = true;
let distance = 0;

function moveForward(spaceMoved){
    if (direction == true) {
        distance += spaceMoved;
    }
    else if (direction == false) {
        distance -= spaceMoved;
    }
}
function moveBackward(spaceMoved){
    if (direction === true) {
        distance -= spaceMoved;
    }
    else if (direction === false) {
        distance += spaceMoved;
    }
}
function printLocation() {
    console.log(distance);
}
function turnAround() {
    if (direction === true) {
        direction = false;
    }
    else if (direction === false ) {
        direction = true;
    }
}
moveForward(5);
moveBackward(3);
printLocation();
turnAround();
moveForward(10);
moveBackward(5);
printLocation();