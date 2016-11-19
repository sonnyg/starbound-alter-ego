#!/usr/bin/env node

const fs = require('fs')
const dyeDescriptors = require('./dye-descriptors.js').dyeDescriptors

function clearBuild() {

}

function createMetadata() {
  return {
    name: `${process.env.npm_package_name}`,
    version: `${process.env.npm_package_version}`,
    description: `${process.env.npm_package_description}`,
    friendlyName: `${process.env.npm_package_name}-${process.env.npm_package_version}`,
  	author: `${process.env.npm_package_author_name}`,
    steamContentId: "",
    link: ""
  };
}

function writeMetadataFile(modName, metadata) {
  const fileName = `./build/${modName}/.metadata`;
  writeFile(fileName, metadata);
}

function createDye(modName, index, descriptor) {
  return {
    itemName: `${modName}${descriptor.color.toLowerCase().replace(' ', '')}dye`,
    price: 25,
    rarity: "Common",
    category: "clothingDye",
    inventoryIcon: `/items/generic/dyes/bluedye.png?replace;5588d4=${descriptor.shades[0]};344495=${descriptor.shades[1]};1a1c51=${descriptor.shades[2]}`,
    description: "This coloured dye can be applied to a piece of armour or clothing with a right-click.",
    shortdescription: `${descriptor.color} Dye`,
    dyeColorIndex: index,
    radioMessagesOnPickup: [ "pickupdye" ],
    scripts: [ "/scripts/augments/dye.lua" ]
  }
}

function writeDyeFiles(modName, dyeDescriptors) {
  const offset = 12;  // these are the preexisting colors
  dyeDescriptors.forEach((dyeDescriptor, index) => {
    const dye = createDye(modName, index + offset, dyeDescriptor);
    const fileName = `./build/${modName}/items/generic/dyes/${dye.itemName}.augment`;

    writeFile(fileName, dye);
  })
}

function writeFile(fileName, data) {
  // 'pretty' print the json
  fs.writeFileSync(fileName, JSON.stringify(data, null, '\t'));

  console.log(`file created: ${fileName}`);
}

const metadata = createMetadata();
const modName = metadata.name;
writeMetadataFile(modName, metadata);
writeDyeFiles(modName, dyeDescriptors);

// for (var key in process.env) {
  // console.log(`${key} : ${process.env[key]}`)
// }
