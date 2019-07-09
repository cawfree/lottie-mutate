const {
  getColors,
  replaceAllColors,
} = require('./');

const anim = require('./bin/anim.json');

it('that we can parse and modify color content', function() {
  const colors = getColors(anim);
  expect(colors.length)
    .toEqual(87);
  const overrided = replaceAllColors(
    anim,
    0.91,
    0.3,
    0.24,
  );
  const overridedColors = getColors(overrided);
  expect(overridedColors.length)
    .toEqual(87);
  expect(JSON.stringify(colors))
    .not.toEqual(JSON.stringify(overridedColors));
});
