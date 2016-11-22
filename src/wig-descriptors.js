#!/usr/bin/env node

// TODO - need to add 4 shades to dye colors, need to change index.js to use hairShades length, need two sets of replacement colors to deal with Floran and Hylotl color schemes.
const descriptorSets = [
  { name: "Apex Female", pathFragment: "/humanoid/apex/hairfemale", fileExpression: /(\d)+\.png/i, hairShades: ["e0975c", "a85636", "6f2919"], bodyMask: "/humanoid/human/femalebody.png"},
  { name: "Apex male", pathFragment: "/humanoid/apex/hairmale", fileExpression: /(\d)+\.png/i, hairShades: ["e0975c", "a85636", "6f2919"], bodyMask: "/humanoid/human/malebody.png"},
  { name: "Avian", pathFragment: "/humanoid/avian/hair", fileExpression: /(\d)+\.png/i, hairShades: ["ffca8a", "e0975c", "a85636"]},
  { name: "Floran", pathFragment: "/humanoid/floran/hair", fileExpression: /(\d)+\.png/i, hairShades: ["f32200", "dc1f00", "be1b00"]},
  //LEAF COLOURS
    //MUTED GREEN
    // { "f7e7b2" : "c4d0a5", "d9c189" : "a3af83", "a38d59" : "6c7256", "735e3a" : "3b3d2d" },
  { name: "Glitch", pathFragment: "/humanoid/glitch/hair", fileExpression: /(\d)+\.png/i, hairShades: ["f7e7b2", "d9c189", "a38d59", "735e3a"]},
  { name: "Human Female", pathFragment: "/humanoid/human/hair", fileExpression: /fem(\d)+\.png/i, hairShades: ["d9c189", "a38d59", "735e3a"]},
  { name: "Human Male", pathFragment: "/humanoid/human/hair", fileExpression: /male(\d)+\.png/i, hairShades: ["d9c189", "a38d59", "735e3a"]},
  { name: "Hylotl", pathFragment: "/humanoid/hylotl/hair", fileExpression: /(\d)+\.png/i, hairShades: ["f7e7b2", "d9c189", "a38d59", "735e3a"]},
  { name: "Novakid Female", pathFragment: "/humanoid/novakid/hair", fileExpression: /fem(\d)+\.png/i, hairShades: ["fff8b5", "fde03f", "f6b919", "806319"]},
  { name: "Novakid Male", pathFragment: "/humanoid/novakid/hair", fileExpression: /male(\d)+\.png/i, hairShades: ["fff8b5", "fde03f", "f6b919", "806319"]}
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

  // console.log(`files: ${files}`);
  files.forEach((file) => {
    if (file.match(descriptorSet.fileExpression)) {
      let wigDescriptor = createWigDescriptor(descriptorSet, file);
      wigDescriptor.iconSource = `${dir}/${file}`;
      //wigDescriptor.maskSource = `${asset_target}/${descriptorSet.bodyMask}`

      wigDescriptors.push(wigDescriptor);
    }
  })
})

function createWigDescriptor(descriptorSet, file) {
  return {
    name: `${descriptorSet.name} ${file.replace(/\D/g, '')} Wig`,
    description: "An understated wig that's perfect for casual occasions.",
    image: `${descriptorSet.pathFragment}/${file}`,
    shades: descriptorSet.hairShades,
    iconSource: ""
  }
}

module.exports = {
  wigDescriptors
}
