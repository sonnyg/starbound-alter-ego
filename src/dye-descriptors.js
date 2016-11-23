// list shades light to dark
const dyeDescriptors = [
  // these are the built in colors
  { color: "Dye Remover", paletteIndex: 0, shades: [] },
  { color: "Black", paletteIndex: 0, shades: ["525252", "363636", "161616", "0b0b0b"] },
  { color: "Grey", paletteIndex: 0, shades: ["74726f", "53504d", "2a251e", "231a0e"] },
  { color: "White", paletteIndex: 0, shades: ["eaeaea", "b8b8b8", "828282", "464646"] },
  { color: "Red", paletteIndex: 0, shades: ["cd1c38", "982441", "69243f", "501931"] },
  { color: "Orange", paletteIndex: 0, shades: ["efa838", "be6d1d", "834012", "642e07"] },
  { color: "Yellow", paletteIndex: 0, shades: ["e6e756", "c7ac3f", "a9882f", "815718"] },
  { color: "Green", paletteIndex: 0, shades: ["4ece61", "34ae47", "228a38", "165e2f"] },
  { color: "Blue", paletteIndex: 0, shades: ["5d8bc7", "4d55b0", "2e2a73", "281c5e"] },
  { color: "Purple", paletteIndex: 0, shades: ["653b7f", "562e6a", "3f1d4b", "2e1035"] },
  { color: "Pink", paletteIndex: 0, shades: ["d26ba4", "a54669", "89334d", "591822"] },
  { color: "Brown", paletteIndex: 0, shades: ["7d3c1c", "4d240b", "2d1606", "1f1202"] },
  // these are the extended dye colors
  // reds
  { color: "Dark Red", paletteIndex: 0, shades: ["ad2716", "8f1f1b", "731a1a", "63161c"] },
  { color: "Light Red", paletteIndex: 0, shades: ["e86d46", "d1422e", "96201b", "760c11"] },
  { color: "Muted Red", paletteIndex: 0, shades: ["e47068", "c54848", "952f45", "65223a"] },
  { color: "Rusty Red", paletteIndex: 0, shades: ["be471b", "9b2f0c", "702710", "591e19"] },
  // browns
  { color: "Grey Brown", paletteIndex: 0, shades: ["50422f", "36261e", "170f0d", "0e0606"] },
  { color: "Light Brown", paletteIndex: 0, shades: ["7f5a39", "5b3523", "3b1f15", "2b120b"] },
  { color: "Muted Brown", paletteIndex: 0, shades: ["b9997a", "9f7761", "764f42", "50302a"] },
  // oranges
  { color: "Dirty Orange", paletteIndex: 0, shades: ["a6671d", "915622", "743e1d", "52271a"] },
  { color: "Light Orange", paletteIndex: 0, shades: ["ebac59", "c25a2c", "8d291b", "691f15"] },
  // blondes
  { color: "Blonde", paletteIndex: 0, shades: ["f1d992", "daba5e", "b59a4d", "947f41"] },
  { color: "Dirty Blonde", paletteIndex: 0, shades: ["eaa758", "cd8b3d", "93682c", "73573b"] },
  { color: "Straw Blonde", paletteIndex: 0, shades: ["e6e756", "bea439", "896d22", "624e18"] },
  // yellows
  { color: "Grey Yellow", paletteIndex: 0, shades: ["d8d695", "b9b778", "908a56", "544d30"] },
  { color: "Light Yellow", paletteIndex: 0, shades: ["f2eba3", "dcd28c", "c2b677", "a79f69"] },
  { color: "Muted Yellow", paletteIndex: 0, shades: ["e3da89", "c5bd6d", "9a8d4c", "705f32"] },
  // greens
  { color: "Dark Green", paletteIndex: 0, shades: ["3b7f44", "2e6a38", "1d4b28", "112d18"] },
  { color: "Leaf Green", paletteIndex: 0, shades: ["b7d179", "8eab59", "808a44", "474c27"] },
  { color: "Light Green", paletteIndex: 0, shades: ["a7d13d", "83ad22", "6b880b", "4e6309"] },
  { color: "Muted Green", paletteIndex: 0, shades: ["c4d0a5", "a3af83", "6c7256", "3b3d2d"] },
  // turquoises
  { color: "Bright Turquoise", paletteIndex: 0, shades: ["82d9c5", "46b89f", "1b8587", "244e54"] },
  { color: "Grey Turquoise", paletteIndex: 0, shades: ["a8c2c4", "8ba4a6", "607272", "384543"] },
  { color: "Light Turquoise", paletteIndex: 0, shades: ["49e193", "3ba380", "197c81", "11585c"] },
  { color: "Muted Turquoise", paletteIndex: 0, shades: ["a6cbd2", "7ca7af", "547d81", "2e504f"] },
  { color: "Turquoise", paletteIndex: 0, shades: ["5bd5b6", "4aa9ad", "237082", "18515f"] },
  // blues
  { color: "Dark Blue", paletteIndex: 0, shades: ["425879", "343965", "242247", "1e1837"] },
  { color: "Grey Blue", paletteIndex: 0, shades: ["7eabd9", "5583cf", "305ba6", "22386b"] },
  { color: "Light Blue", paletteIndex: 0, shades: ["61bcde", "5381cc", "2c489e", "1d326f"] },
  { color: "Muted Blue", paletteIndex: 0, shades: ["52698d", "343965", "242247", "1c1733"] },
  // purples
  { color: "Bright Purple", paletteIndex: 0, shades: ["cb86d6", "ac6ab7", "7e498c", "41274c"] },
  { color: "Dark Purple", paletteIndex: 0, shades: ["7f3b6d", "6a2e53", "4b1d30", "35111b"] },
  { color: "Light Purple", paletteIndex: 0, shades: ["ad68e2", "8d41b0", "6a2980", "481c58"] },
  { color: "Muted Purple", paletteIndex: 0, shades: ["894176", "6a2e53", "4b1d30", "321321"] },
  // pinks
  { color: "Hot Pink", paletteIndex: 0, shades: ["cd72d9", "ac4da6", "913b86", "6b2b64"] },
  { color: "Muted Pink", paletteIndex: 0, shades: ["d08c9f", "b27082", "874e62", "4c2b3a"] },
  // greys
  { color: "Cool Grey", paletteIndex: 0, shades: ["6f6d85", "525269", "3e4352", "22252e"] },
  { color: "Dark Grey", paletteIndex: 0, shades: ["525252", "363636", "161616", "090909"] },
  { color: "Light Grey", paletteIndex: 0, shades: ["b8b8b8", "828282", "555555", "2f2f2f"] }
];

/*
Starbound uses the dye index to lookup the color options (palette) to then build
a replace directive for the item. Since accessory dyes are intended to target
different colors than regular dyes, they need their own index (i.e. entry in the
colorOptions property of the item).

Effectively, this requires double the number of dyes to generate unique indices.
If there was a third swap palette, it would require three times the dyes. The
character creation screen handles these palette swaps whereas this mod,
attempting to use assets with mulitple pallets, must utilize the current dye
system.
*/

// duplicate the list of dye descriptors (with unique names), excluding the dye
// remover. since items are being added, I am using a bounded for loop instead
// of a forEach.
const originalLength = dyeDescriptors.length;

for (let i = 1; i < originalLength; i++) {
  const dyeDescriptor = dyeDescriptors[i];
  const accessoryDescriptor = {};

  accessoryDescriptor.color = `${dyeDescriptor.color} Accessory`;
  accessoryDescriptor.paletteIndex = 1;
  accessoryDescriptor.shades = dyeDescriptor.shades;

  dyeDescriptors.push(accessoryDescriptor);
}

module.exports = {
  dyeDescriptors
}
