#!/usr/bin/env node

const fs = require('fs')

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

function writeMetadata(metadata) {
  // 'pretty' print the json
  fs.writeFileSync('./build/wig-out/.metadata', JSON.stringify(metadata, null, '\t'));
  console.log('.metadata file created');
}

const metadata = createMetadata();
writeMetadata(metadata);

// for (var key in process.env) {
  // console.log(`${key} : ${process.env[key]}`)
// }
