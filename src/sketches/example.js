/* eslint-disable no-param-reassign */

const sketch = p => {
  p.redrawHandler = sketchValues => {};

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.background(51);
    p.frameRate(60);
  };

  p.draw = () => {};
};

export default sketch;
