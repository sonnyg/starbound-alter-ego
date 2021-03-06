#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')
const jimp = require('jimp')
const dyeDescriptors = require('./dye-descriptors.js').dyeDescriptors
const wigDescriptors = require('./wig-descriptors.js').wigDescriptors

function clearBuild() {
  fs.removeSync('./build');
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
    itemName: `${modName}${descriptor.color.toLowerCase().replace(/ /g, '')}dye`,
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
  dyeDescriptors.forEach((dyeDescriptor, index) => {
    const dye = createDye(modName, index, dyeDescriptor);
    const fileName = `./build/${modName}/items/generic/dyes/${modName}/${dye.itemName}.augment`;

    writeFile(fileName, dye);
  })
}

function createWig(modName, wigDescriptor) {
  return {
    itemName: `${modName}${wigDescriptor.name.toLowerCase().replace(/ /g, '')}`,
    price: 5000,
    inventoryIcon: "icons.png:head",
    maxStack: 1,
    rarity: "Legendary",
    category: "headwear",
    description: `${wigDescriptor.description}`,
    shortdescription: `${wigDescriptor.name}`,
    tooltipKind: "armor",

    maleFrames: `${wigDescriptor.image}`,
    femaleFrames: `${wigDescriptor.image}`,
    mask: "mask.png",

    colorOptions: createColorOptions(wigDescriptor)
  }
}

function createColorOptions(wigDescriptor) {
  const colorOptions = [];

  dyeDescriptors.forEach((dyeDescriptor, dyeIndex) => {
    if (dyeIndex > 0) {
      // we will waste some cycles here if the wig doesn't have additional palettes defined
      if (dyeDescriptor.paletteIndex < wigDescriptor.palettes.length) {
        colorOptions.push(createColorOption(wigDescriptor.palettes[dyeDescriptor.paletteIndex], dyeDescriptor.shades));
      }
    } else {
      // dye index 0 is always the dye remover - reset all palettes
      const wigPalettes = [].concat(...(wigDescriptor.palettes));
      colorOptions.push(createColorOption(wigPalettes, wigPalettes));
    }
  })

  return colorOptions;
}

function createColorOption(sourceColors, targetColors) {
  const colorOption = {};

  for (let c = 0; c < sourceColors.length; c++) {
    colorOption[sourceColors[c]] = targetColors[c];
  }

  return colorOption;
}

function writeWigFiles(modName, wigDescriptors) {
  wigDescriptors.forEach((wigDescriptor, index) => {
    const wig = createWig(modName, wigDescriptor);
    const dir = `./build/${modName}/items/armors/decorative/hats/${modName}/${wig.itemName}`;
    const fileName = `${dir}/${wig.itemName}.head`;

    writeFile(fileName, wig);
    writeIconFile(wigDescriptor.iconSource, `${dir}/icons.png`);
    writeMaskFile('./mask.png', `${dir}/mask.png`); // for now, just copy the empty mask file
  })
}

function writeIconFile(imageSource, iconTarget) {
  jimp.read(imageSource, (err, image) => {
    if (err) {
      throw err;
    }

    const icon = image.clone();
    icon.crop(55, 9, 16, 16);

    icon.write(iconTarget, (err) => {
      if (err) {
        throw err;
      }

      console.log(`file created: ${iconTarget}`);
    });
  })
}

function writeMaskFile(maskSource, maskTarget) {
  jimp.read(maskSource, (err, image) => {
    if (err) {
      throw err;
    }

    const mask = image.clone();
    mask.crop(43, 0, 43, 43);

    mask.write(maskTarget, (err) => {
      if (err) {
        throw err;
      }

      console.log(`file created: ${maskTarget}`);
    });
  })
}

function writeFile(fileName, data) {
  const dirs = fileName.split('/');
  let filePath = "";

  dirs.forEach((dir, index) => {
    filePath += dir;

    // skip last entry, assume it is the file name
    if (index < dirs.length-1) {
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath);
      }
    }

    filePath += path.sep;
  })

  // 'pretty' print the json
  fs.writeFileSync(fileName, JSON.stringify(data, null, '\t'));

  console.log(`file created: ${fileName}`);
}

const metadata = createMetadata();
const modName = metadata.name;

clearBuild();
writeMetadataFile(modName, metadata);
writeDyeFiles(modName, dyeDescriptors);
writeWigFiles(modName, wigDescriptors);

// for (var key in process.env) {
  // console.log(`${key} : ${process.env[key]}`)
// }
