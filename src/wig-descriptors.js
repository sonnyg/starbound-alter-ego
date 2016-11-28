#!/usr/bin/env node

// TODO - need to add 4 shades to dye colors, need to change index.js to use hairShades length, need two sets of replacement colors to deal with Floran and Hylotl color schemes.
const descriptorSets = [
  { name: "Apex Female", pathFragment: "/humanoid/apex/hairfemale", fileExpression: /(\d)+\.png/i, palettes: [["e0975c", "a85636", "6f2919"]] },
  { name: "Apex male", pathFragment: "/humanoid/apex/hairmale", fileExpression: /(\d)+\.png/i, palettes: [["e0975c", "a85636", "6f2919"]] },
  { name: "Avian", pathFragment: "/humanoid/avian/hair", fileExpression: /(\d)+\.png/i, palettes: [["ffca8a", "e0975c", "a85636"]] },
  { name: "Floran", pathFragment: "/humanoid/floran/hair", fileExpression: /(\d)+\.png/i, palettes: [["f7e7b2", "d9c189", "a38d59", "735e3a"], ["f32200", "dc1f00", "be1b00"]] },
  { name: "Glitch", pathFragment: "/humanoid/glitch/hair", fileExpression: /(\d)+\.png/i, palettes: [["f7e7b2", "d9c189", "a38d59", "735e3a"]] },
  { name: "Human Female", pathFragment: "/humanoid/human/hair", fileExpression: /fem(\d)+\.png/i, palettes: [["d9c189", "a38d59", "735e3a"]] },
  { name: "Human Male", pathFragment: "/humanoid/human/hair", fileExpression: /male(\d)+\.png/i, palettes: [["d9c189", "a38d59", "735e3a"]] },
  { name: "Hylotl", pathFragment: "/humanoid/hylotl/hair", fileExpression: /(\d)+\.png/i, palettes: [["f7e7b2", "d9c189", "a38d59", "735e3a"], ["f32200", "dc1f00", "be1b00", "951500"]] },
  { name: "Novakid Female", pathFragment: "/humanoid/novakid/hair", fileExpression: /fem(\d)+\.png/i, palettes: [["ffffff", "fff8b5", "fde03f", "f6b919"]] },
  { name: "Novakid Male", pathFragment: "/humanoid/novakid/hair", fileExpression: /male(\d)+\.png/i, palettes: [["ffffff", "fff8b5", "fde03f", "f6b919"]] }
];

const wigDescriptors = [];

const fs = require('fs')
const os = require('os')

const starbound_root = `${os.homedir()}/Library/Application Support/Steam/steamapps/common/Starbound`;
const asset_root = `${starbound_root}/assets`;
const asset_target = `${asset_root}/_unpacked`;

descriptorSets.forEach((descriptorSet) => {
  const dir = `${asset_target}${descriptorSet.pathFragment}`;
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    if (file.match(descriptorSet.fileExpression)) {
      let wigDescriptor = createWigDescriptor(descriptorSet, file);
      wigDescriptor.iconSource = `${dir}/${file}`;

      wigDescriptors.push(wigDescriptor);
    }
  })
})

function createWigDescriptor(descriptorSet, file) {
  return {
    name: `${descriptorSet.name} ${file.replace(/\D/g, '')} Wig`,
    description: "An understated wig that's perfect for casual occasions.",
    image: `${descriptorSet.pathFragment}/${file}`,
    palettes: descriptorSet.palettes,
    iconSource: ""
  }
}

module.exports = {
  wigDescriptors
}
