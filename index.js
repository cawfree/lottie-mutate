const regColor = /\"k\"\:\[[+-]?([0-9]*[.])?[0-9]+\,[+-]?([0-9]*[.])?[0-9]+\,[+-]?([0-9]*[.])?[0-9]+,1\]/g;

const getColors = obj => JSON.stringify(obj)
  .match(regColor);

const replaceAllColors = (obj, red = 1.0, green = 1.0, blue = 1.0) => JSON.parse(
  JSON.stringify(
    obj
  )
    .replace(
      regColor,
      `"k":[${red},${green},${blue},1]`,
    ),
);

module.exports = {
  getColors,
  replaceAllColors,
};
