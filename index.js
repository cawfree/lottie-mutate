const colorString = require('color-string');

const regColor = /\"k\"\:\[[+-]?([0-9]*[.])?[0-9]+\,[+-]?([0-9]*[.])?[0-9]+\,[+-]?([0-9]*[.])?[0-9]+,1\]/g;

const getColors = obj => JSON.stringify(obj)
  .match(regColor);

const replaceAllColors = (anim, color) => {
  const [
    red,
    green,
    blue,
  ] = colorString.get(
    color,
  ).value;
  return JSON.parse(
    JSON.stringify(
      anim
    )
      .replace(
        regColor,
        `"k":[${red / 255},${green / 255},${blue / 255},1]`,
      ),
  );
};

module.exports = {
  getColors,
  replaceAllColors,
};
