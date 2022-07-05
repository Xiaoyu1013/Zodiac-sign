// variable used for incoming messages
var x;
var y;
var who;

// grid argument
let colNum = 5
let rowNum = 4
let gutter = 50

// time variable
let t = 0;

let userColor = {
}

let channelName = "particleUIChannel";

// variables from the previous page
var url = new URL(window.location.href);
var you = url.searchParams.get("you");
var redVal = url.searchParams.get("r");
var greenVal = url.searchParams.get("g");
var blueVal = url.searchParams.get("b");

createServer(you); // creating our pubnub server with our name.

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  frameRate(20)

  // listen for messages coming through the subcription feed on this specific channel. 
  dataServer.addListener({ message: readIncoming });
  dataServer.subscribe({ channels: [channelName] });

  userColor[you] = color(redVal, greenVal, blueVal)
}

function draw() {
  sendTheMessage()

  background(10, 10); // 半透明背景（创建足迹）

  Object.keys(userColor).forEach((nickName, i) => {
    push()
    let row = int(i / colNum)
    let col = i % colNum
    let x = col * (width / colNum)
    let y = row * height / rowNum
    translate(x, y)
    drawParticle(userColor[nickName])
    fill(255)
    noStroke()
    text(nickName, 90, y + height / rowNum)
    pop()
  })
}

function drawParticle(c) {
  fill(c)
  // 创建 x 和 y 网格上的椭圆 
  for (let x = 30; x < width / colNum - gutter - 30; x = x + 30) {
    for (let y = 30; y < height / rowNum - 30; y = y + 30) {
      // 每个圆的初始位置取决于鼠标位置
      const xAngle = map(mouseX, 0, width, -20 * PI, 20 * PI, true);
      const yAngle = map(mouseY, 0, height, -5 * PI, 5 * PI, true);
      // 也根据粒子的位置变化 
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // 每个粒子绕圈运动 
      const myX = x + 50 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // 绘制粒子
    }
  }

  t = t + 0.01; // 更新时间
}

// PubNub logic below
function sendTheMessage() {

  // Send Data to the server to draw it in all other canvases
  dataServer.publish({
    channel: channelName,
    message: {
      r: redVal,
      g: greenVal,
      b: blueVal,
    },
  });
}

function readIncoming(inMessage) {
  // when new data comes in it triggers this function,
  // we call this function in the setup

  /*since an App can have many channels, we ensure that we are listening
  to the correct channel */
  if (inMessage.channel == channelName) {

    let r = inMessage.message.r; // get the red value from the other people
    let g = inMessage.message.g; // get the green value from the other people
    let b = inMessage.message.b; // get the blue value from the other people
    let who = inMessage.publisher; // who sent the message

    // console.log(inMessage); //logging for information

    userColor[who] = color(r, g, b)
  }
}