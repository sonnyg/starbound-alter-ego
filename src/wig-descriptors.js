#!/usr/bin/env node

const descriptorSets = [
  { name: "Apex Female", pathFragment: "/humanoid/apex/hairfemale", fileExpression: /(\d)+\.png/i, hairShades: ["e0975c", "a85636", "6f2919"], bodyMask: "/humanoid/human/femalebody.png"},
  { name: "Apex male", pathFragment: "/humanoid/apex/hairmale", fileExpression: /(\d)+\.png/i, hairShades: ["e0975c", "a85636", "6f2919"], bodyMask: "/humanoid/human/malebody.png"},
  // { name: "Avian", pathExpression: "/humanoid/avian/hair"},
  // { name: "Floran", pathExpression: "/humanoid/floran/hair"},
  // { name: "Glitch", pathExpression: "/humanoid/glitch/hair"},
  { name: "Human Female", pathFragment: "/humanoid/human/hair", fileExpression: /fem(\d)+\.png/i, hairShades: ["d9c189", "a38d59", "735e3a"], bodyMask: "/humanoid/human/femalebody.png"},
  { name: "Human Male", pathFragment: "/humanoid/human/hair", fileExpression: /male(\d)+\.png/i, hairShades: ["d9c189", "a38d59", "735e3a"], bodyMask: "/humanoid/human/malebody.png"},
  // { name: "Hylotl", pathExpression: "/humanoid/hylotl/hair"},
  // { name: "Novakid", pathExpression: "/humanoid/novakid/hair"}
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
