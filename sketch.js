let riqq
let tabla
let sliderRateR
let sliderVolR
let sliderRateT
let sliderVolT

function preload(){
riqq = loadSound("riqq.wav")
tabla = loadSound("tabla.wav")
  bg = loadImage("camel.jpg")

}

function setup() {
  createCanvas(400, 400);
  tint(255, 126);
  sliderRateR=createSlider(0,2,1,0.1)
  sliderVolR=createSlider(0,1,0.2,0.1)
createCanvas(400, 400);

  sliderRateT=createSlider(0,2,1,0.1)
  sliderVolT=createSlider(0,1,0.2,0.1)

  riqq.loop();
  tabla.loop();
}

function draw() {
  background(255);
  
  image(bg,50,50,300,300)
  textSize(8)
  textAlign(CENTER);
  textStyle(BOLD);
  text("☝🏼Tempo of the Riqq", 65,15)
  text("☝🏼Volume of the Riqq", 200,15)
  riqq.setVolume(sliderVolR.value())
  riqq.rate(sliderRateR.value())
  
  text("👇🏼Tempo of the Tabla", 65,380)
  text("👇🏼Volume of the Tabla", 200,380)
  tabla.setVolume(sliderVolT.value())
  tabla.rate(sliderRateT.value())
}