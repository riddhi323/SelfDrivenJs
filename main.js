// streched the canvas full hight the screen
const canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = 230
// get the 2d context

const ctx = canvas.getContext("2d");
const car = new Car(100,100,30,50);
car.draw(ctx);