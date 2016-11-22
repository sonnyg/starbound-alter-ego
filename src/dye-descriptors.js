// list shades light to dark
const dyeDescriptors = [
  // these are the built in colors
  { color: "Dye Remover", shades: [] },
  { color: "Black", shades: ["525252", "363636", "161616", "0b0b0b"] },
  { color: "Grey", shades: ["74726f", "53504d", "2a251e", "231a0e"] },
  { color: "White", shades: ["eaeaea", "b8b8b8", "828282", "464646"] },
  { color: "Red", shades: ["cd1c38", "982441", "69243f", "501931"] },
  { color: "Orange", shades: ["efa838", "be6d1d", "834012", "642e07"] },
  { color: "Yellow", shades: ["e6e756", "c7ac3f", "a9882f", "815718"] },
  { color: "Green", shades: ["4ece61", "34ae47", "228a38", "165e2f"] },
  { color: "Blue", shades: ["5d8bc7", "4d55b0", "2e2a73", "281c5e"] },
  { color: "Purple", shades: ["653b7f", "562e6a", "3f1d4b", "2e1035"] },
  { color: "Pink", shades: ["d26ba4", "a54669", "89334d", "591822"] },
  { color: "Brown", shades: ["7d3c1c", "4d240b", "2d1606", "1f1202"] },
  // these are the extended dye colors
  { color: "Light Red", shades: ["e86d46", "d1422e", "96201b", "760c11"] },
  { color: "Dark Red", shades: ["ad2716", "8f1f1b", "731a1a", "63161c"] },
  { color: "Rusty Red", shades: ["be471b", "9b2f0c", "702710", "591e19"] },
  { color: "Light Brown", shades: ["7f5a39", "5b3523", "3b1f15", "2b120b"] },
  { color: "Dirty Orange", shades: ["a6671d", "915622", "743e1d", "52271a"] },
  { color: "Dirty Blonde", shades: ["eaa758", "cd8b3d", "93682c", "73573b"] },
  { color: "Blonde", shades: ["f1d992", "daba5e", "b59a4d", "947f41"] },
  { color: "Light Yellow", shades: ["f2eba3", "dcd28c", "c2b677", "a79f69"] },
  { color: "Light Green", shades: ["a7d13d", "83ad22", "6b880b", "4e6309"] },
  { color: "Dark Green", shades: ["3b7f44", "2e6a38", "1d4b28", "112d18"] },
  { color: "Turquoise", shades: ["5bd5b6", "4aa9ad", "237082", "18515f"] },
  { color: "Light Turquoise", shades: ["49e193", "3ba380", "197c81", "11585c"] },
  { color: "Light Blue", shades: ["61bcde", "5381cc", "2c489e", "1d326f"] },
  { color: "Dark Blue", shades: ["425879", "343965", "242247", "1e1837"] },
  { color: "Dark Purple", shades: ["7f3b6d", "6a2e53", "4b1d30", "35111b"] },
  { color: "Hot Pink", shades: ["cd72d9", "ac4da6", "913b86", "6b2b64"] },
  { color: "Light Purple", shades: ["ad68e2", "8d41b0", "6a2980", "481c58"] },
  { color: "Brown Grey", shades: ["50422f", "36261e", "170f0d", "0e0606"] },
  { color: "Grey Blue", shades: ["6f6d85", "525269", "3e4352", "22252e"] },
  { color: "Light Grey", shades: ["b8b8b8", "828282", "555555", "2f2f2f"] }
];

const accessoryDyeDescriptors = [
  // these are the built in colors
  { color: "Dye Remover", shades: [] },
  { color: "Black", shades: ["525252", "363636", "161616", "0b0b0b"] },
  { color: "Grey", shades: ["74726f", "53504d", "2a251e", "231a0e"] },
  { color: "White", shades: ["eaeaea", "b8b8b8", "828282", "464646"] },
  { color: "Red", shades: ["cd1c38", "982441", "69243f", "501931"] },
  { color: "Orange", shades: ["efa838", "be6d1d", "834012", "642e07"] },
  { color: "Yellow", shades: ["e6e756", "c7ac3f", "a9882f", "815718"] },
  { color: "Green", shades: ["4ece61", "34ae47", "228a38", "165e2f"] },
  { color: "Blue", shades: ["5d8bc7", "4d55b0", "2e2a73", "281c5e"] },
  { color: "Purple", shades: ["653b7f", "562e6a", "3f1d4b", "2e1035"] },
  { color: "Pink", shades: ["d26ba4", "a54669", "89334d", "591822"] },
  { color: "Brown", shades: ["7d3c1c", "4d240b", "2d1606", "1f1202"] },
  // these are the extended dye colors
  { color: "Light Red", shades: ["e86d46", "d1422e", "96201b", "760c11"] },
  { color: "Dark Red", shades: ["ad2716", "8f1f1b", "731a1a", "63161c"] },
  { color: "Rusty Red", shades: ["be471b", "9b2f0c", "702710", "591e19"] },
  { color: "Light Brown", shades: ["7f5a39", "5b3523", "3b1f15", "2b120b"] },
  { color: "Dirty Orange", shades: ["a6671d", "915622", "743e1d", "52271a"] },
  { color: "Dirty Blonde", shades: ["eaa758", "cd8b3d", "93682c", "73573b"] },
  { color: "Blonde", shades: ["f1d992", "daba5e", "b59a4d", "947f41"] },
  { color: "Light Yellow", shades: ["f2eba3", "dcd28c", "c2b677", "a79f69"] },
  { color: "Light Green", shades: ["a7d13d", "83ad22", "6b880b", "4e6309"] },
  { color: "Dark Green", shades: ["3b7f44", "2e6a38", "1d4b28", "112d18"] },
  { color: "Turquoise", shades: ["5bd5b6", "4aa9ad", "237082", "18515f"] },
  { color: "Light Turquoise", shades: ["49e193", "3ba380", "197c81", "11585c"] },
  { color: "Light Blue", shades: ["61bcde", "5381cc", "2c489e", "1d326f"] },
  { color: "Dark Blue", shades: ["425879", "343965", "242247", "1e1837"] },
  { color: "Dark Purple", shades: ["7f3b6d", "6a2e53", "4b1d30", "35111b"] },
  { color: "Hot Pink", shades: ["cd72d9", "ac4da6", "913b86", "6b2b64"] },
  { color: "Light Purple", shades: ["ad68e2", "8d41b0", "6a2980", "481c58"] },
  { color: "Brown Grey", shades: ["50422f", "36261e", "170f0d", "0e0606"] },
  { color: "Grey Blue", shades: ["6f6d85", "525269", "3e4352", "22252e"] },
  { color: "Light Grey", shades: ["b8b8b8", "828282", "555555", "2f2f2f"] }
];

module.exports = {
  dyeDescriptors,
  accessoryDyeDescriptors
}
