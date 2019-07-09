# @cawfree/lottie-mutate
A collection of functions that can be used to manipulate raw Lottie Animation JSON programmatically.

## 🚀 Getting Started

Using [npm](https://www.npmjs.com/package/@cawfree/lottie-mutate):

```bash
npm install --save @cawfree/lottie-mutate
```

Using [yarn](https://www.npmjs.com/package/@cawfree/lottie-mutate):

```bash
yarn add @cawfree/lottie-mutate
```

## ✍️  Example

### `replaceAllColors`

```javascript
const { replaceAllColors } = require('@cawfree/lottie-mutate');

const anim = require('/path/to/animation.json');

const animFilledWithWhite = replaceAllColors(
  anim,
  "white",
);
```

Returns the supplied animation with all color references overrided with your value for color, which is a CSS color string (See [color-string](https://www.npmjs.com/package/color-string)). Your original object is left unchanged.

## ✌️  License
[MIT](https://opensource.org/licenses/MIT)
