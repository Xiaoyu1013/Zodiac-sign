
let channelName = "welcomePage";

let nameInput

let redVal;
let greenVal;
let blueVal;

let you;

let img_Aquarius
let img_Aries
let img_Cancer
let img_Capricorn
let img_Gemini
let img_Leo
let img_Libra
let img_Pisces
let img_Sagittarius
let img_Scorpio
let img_Taurus
let img_Virgo

let chooseColor = 255

function preload() {
  img_Aquarius = loadImage('assets/Aquarius.jpg')
  img_Aries = loadImage('assets/Aries.jpg')
  img_Cancer = loadImage('assets/Cancer.jpg')
  img_Capricorn = loadImage('assets/Capricorn.jpg')
  img_Gemini = loadImage('assets/Gemini.jpg')
  img_Leo = loadImage('assets/Leo.jpg')
  img_Libra = loadImage('assets/Libra.jpg')
  img_Pisces = loadImage('assets/Pisces.jpg')
  img_Sagittarius = loadImage('assets/Sagittarius.jpg')
  img_Scorpio = loadImage('assets/Scorpio.jpg')
  img_Taurus = loadImage('assets/Taurus.jpg')
  img_Virgo = loadImage('assets/Virgo.jpg')
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  nameInput = createInput();
  nameInput.style('font-size', '30px');
  nameInput.position(windowWidth / 3 + 100, 60 - 30);

  submitButton = createButton("OK");
  submitButton.position(windowWidth / 3 + 100, height - 100);
  submitButton.style('font-size', '30px');
  submitButton.style('background', '#cddc39');
  submitButton.style('width', '300px');

  imageMode(CENTER)

}

let IMG_W = 180
let IMG_Y = 180

function draw() {
  background(chooseColor);

  textSize(60);
  textAlign(CENTER);

  // text("Hi", windowWidth / 2, 200);

  textSize(30);
  textAlign(LEFT);
  text("Name:", windowWidth / 3, 60);

  let y = IMG_Y
  let w = IMG_W - 5
  image(img_Aquarius, width / 2 - IMG_W / 2, y, w, w)
  image(img_Aries, width / 2 - IMG_W * 1.5, y, w, w)
  image(img_Cancer, width / 2 + IMG_W / 2, y, w, w)
  image(img_Capricorn, width / 2 + IMG_W * 1.5, y, w, w)

  y += IMG_W
  image(img_Gemini, width / 2 - IMG_W / 2, y, w, w)
  image(img_Leo, width / 2 - IMG_W * 1.5, y, w, w)
  image(img_Libra, width / 2 + IMG_W / 2, y, w, w)
  image(img_Pisces, width / 2 + IMG_W * 1.5, y, w, w)

  y += IMG_W
  image(img_Sagittarius, width / 2 - IMG_W / 2, y, w, w)
  image(img_Scorpio, width / 2 - IMG_W * 1.5, y, w, w)
  image(img_Taurus, width / 2 + IMG_W / 2, y, w, w)
  image(img_Virgo, width / 2 + IMG_W * 1.5, y, w, w)


  // on submit enter the information
  submitButton.mousePressed(sendTheMessage);


}

function mouseClicked() {
  let w = IMG_W
  let x1 = width / 2 - 2 * w
  let y1 = IMG_Y - w / 2
  if (mouseX >= x1 && mouseX <= x1 + w && mouseY >= y1 && mouseY <= y1 + w) {
    chooseColor = color(200, 50, 50)
  } else if (mouseX >= x1 + w && mouseX <= x1 + 2 * w && mouseY >= y1 && mouseY <= y1 + w) {
    chooseColor = color(255, 255, 255)
  } else if (mouseX >= x1 + 2 * w && mouseX <= x1 + 3 * w && mouseY >= y1 && mouseY <= y1 + w) {
    chooseColor = color(128, 128, 128)
  } else if (mouseX >= x1 + 3 * w && mouseX <= x1 + 4 * w && mouseY >= y1 && mouseY <= y1 + w) {
    chooseColor = color(0, 0, 255)
  }
  else if (mouseX >= x1 && mouseX <= x1 + w && mouseY >= y1 + w && mouseY <= y1 + 2 * w) {
    chooseColor = color(200, 200, 0)
  } else if (mouseX >= x1 + w && mouseX <= x1 + 2 * w && mouseY >= y1 + w && mouseY <= y1 + 2 * w) {
    chooseColor = color(120, 60, 40)
  } else if (mouseX >= x1 + 2 * w && mouseX <= x1 + 3 * w && mouseY >= y1 + w && mouseY <= y1 + 2 * w) {
    chooseColor = color(0, 255, 0)
  } else if (mouseX >= x1 + 3 * w && mouseX <= x1 + 4 * w && mouseY >= y1 + w && mouseY <= y1 + 2 * w) {
    chooseColor = color(255, 255, 224)
  }
  else if (mouseX >= x1 && mouseX <= x1 + w && mouseY >= y1 + 2 * w && mouseY <= y1 + 3 * w) {
    chooseColor = color(255, 165, 0)
  } else if (mouseX >= x1 + w && mouseX <= x1 + 2 * w && mouseY >= y1 + 2 * w && mouseY <= y1 + 3 * w) {
    chooseColor = color(128, 0, 128)
  } else if (mouseX >= x1 + 2 * w && mouseX <= x1 + 3 * w && mouseY >= y1 + 2 * w && mouseY <= y1 + 3 * w) {
    chooseColor = color(0, 255, 255)
  } else if (mouseX >= x1 + 3 * w && mouseX <= x1 + 4 * w && mouseY >= y1 + 2 * w && mouseY <= y1 + 3 * w) {
    chooseColor = color(255, 20, 147)
  }

}



function sendTheMessage() {
  // Send Data to the server to draw it in all other canvases

  // check to see if they enter their name
  if (nameInput.value() != "") {
    // if they did, save their name to the variable "you"
    you = nameInput.value();
    // load a new page when you press submit
    window.location.href = "https://xiaoyu1013.github.io/Star-sign/particle/index.html?you=" + you + "&r=" + red(chooseColor) + "&g=" + green(chooseColor) + "&b=" + blue(chooseColor);

  } else {
    // if they have no entered their name, create an alert and ask them to enter their name
    window.alert("Please enter your name!");
  }


}