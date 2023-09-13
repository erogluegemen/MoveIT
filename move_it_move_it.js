const robotjs = require("robotjs");

function moveMouseRandomly() {
  const currentPosition = robotjs.getMousePos();
  const { x: currentX, y: currentY } = currentPosition;

  const lowBound = -10;
  const upperBound = 10;

  const xOffset = Math.floor(Math.random() * (upperBound - lowBound + 1)) + lowBound;
  const yOffset = Math.floor(Math.random() * (upperBound - lowBound + 1)) + lowBound;

  const newX = currentX + xOffset;
  const newY = currentY + yOffset;

  robotjs.moveMouseSmooth(newX, newY);
}

const second = 1000;
const minute = 4;
let previousPosition = robotjs.getMousePos();

setInterval(() => {
  const currentPosition = robotjs.getMousePos();

  if (currentPosition.x !== previousPosition.x || currentPosition.y !== previousPosition.y) {
    previousPosition = currentPosition;
  } else {
    moveMouseRandomly();
  }
}, minute * second);
