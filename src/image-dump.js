#!/usr/bin/env node

const jimp = require('jimp')

const imageFile = 'bluedye.png'

console.log(`inspecting ${imageFile}`)

jimp.read(imageFile, (err, image) => {

  if (err) throw err

  console.log(`image.width: ${image.bitmap.width}`)
  console.log(`image.height: ${image.bitmap.height}`)

  let imageData = "";
  let lastY = 0;

  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      // x, y is the position of this pixel on the image
      // idx is the position start position of this rgba tuple in the bitmap Buffer
      // this is the image

      let red   = this.bitmap.data[ idx + 0 ];
      let green = this.bitmap.data[ idx + 1 ];
      let blue  = this.bitmap.data[ idx + 2 ];
      let alpha = this.bitmap.data[ idx + 3 ];

      if (lastY !== y || (x * y) === idx-1) {
        console.log(`${padStart(y.toString(), 2, '0')} ${imageData}`);
        imageData = "";
        lastY = y;
      }

      imageData += `${padStart(red.toString(16), 2, '0')}${padStart(green.toString(16), 2, '0')}${padStart(blue.toString(16), 2, '0')} `;
      // hexString = yourNumber.toString(16);

      // and reverse the process with:

      // yourNumber = parseInt(hexString, 16);

      // console.log(`${padStart(red.toString(16), 2, '0')}${padStart(green.toString(16), 2, '0')}${padStart(blue.toString(16), 2, '0')}`)
      // console.log(`x:${x}, y:${y}`);
  });

  /*
  for (let x = 0; x < image.bitmap.width; x++) {
    let colorData = ""
    for (let y = 0; y < image.bitmap.height; y++) {
      let pixelColor = image.getPixelColor(x, y)
      let rgbaColor = jimp.intToRGBA(pixelColor)

      colorData += `${pixelColor} ` //`  r=${rgbaColor.r}, g=${rgbaColor.g}, b=${rgbaColor.b}` //`, a=${rgbaColor.a}`
      // console.log(`(${x}, ${y}): r=${rgbaColor.r}, g=${rgbaColor.g}, b=${rgbaColor.b}, a=${rgbaColor.a}`)
    }
    console.log(`${x} => ${colorData}`)
  }
  */
  // image.bitmap.data;  // a Buffer of the raw bitmap data
  // image.bitmap.width; // the width of the image
  // image.bitmap.height // the height of the image
})

function padStart(str, length, padding) {
  let paddedStr = str;

  while (paddedStr.length < length) {
    paddedStr = `${padding}${paddedStr}`;
  }

  return paddedStr;
}
