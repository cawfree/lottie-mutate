# @cawfree/lottie-mutate
A collection of functions that can be used to manipulate raw Lottie Animation JSON programmatically.

## 🚀 Getting Started

Using [npm]():

```bash
npm install --save @cawfree/lottie-mutate
```

Using [yarn]():

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
  1.0,
  1.0,
  1.0,
);
```

Returns the supplied animation with all color references overrided with your values of `red`, `green` and `blue`, which are floating point numbers between `0` and `1`. Your original object is left unchanged.

## ✌️  License
[MIT](https://opensource.org/licenses/MIT)
