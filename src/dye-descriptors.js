// list shades light to dark
const dyeDescriptors = [
  // these are the built in colors
  { color: "Dye Remover", shades: [] },
  { color: "Black", shades: ["525252", "363636", "161616"] },
  { color: "Grey", shades: ["74726f", "53504d", "2a251e"] },
  { color: "White", shades: ["eaeaea", "b8b8b8", "828282"] },
  { color: "Red", shades: ["cd1c38", "982441", "69243f"] },
  { color: "Orange", shades: ["efa838", "be6d1d", "834012"] },
  { color: "Yellow", shades: ["e6e756", "c7ac3f", "a9882f"] },
  { color: "Green", shades: ["4ece61", "34ae47", "228a38"] },
  { color: "Blue", shades: ["5d8bc7", "4d55b0", "2e2a73"] },
  { color: "Purple", shades: ["653b7f", "562e6a", "3f1d4b"] },
  { color: "Pink", shades: ["d26ba4", "a54669", "89334d"] },
  { color: "Brown", shades: ["7d3c1c", "4d240b", "2d1606"] },
  // these are the extended dye colors
  { color: "Light Red", shades: ["e86d46", "d1422e", "96201b"] },
  { color: "Dark Red", shades: ["ad2716", "8f1f1b", "731a1a"] },
  { color: "Rusty Red", shades: ["be471b", "9b2f0c", "702710"] },
  { color: "Light Brown", shades: ["7f5a39", "5b3523", "3b1f15"] },
  { color: "Dirty Orange", shades: ["a6671d", "915622", "743e1d"] },
  { color: "Dirty Blonde", shades: ["eaa758", "cd8b3d", "93682c"] },
  { color: "Blonde", shades: ["f1d992", "daba5e", "b59a4d"] },
  { color: "Light Yellow", shades: ["f2eba3", "dcd28c", "c2b677"] },
  { color: "Light Green", shades: ["a7d13d", "83ad22", "6b880b"] },
  { color: "Dark Green", shades: ["3b7f44", "2e6a38", "1d4b28"] },
  { color: "Turquoise", shades: ["5bd5b6", "4aa9ad", "237082"] },
  { color: "Light Turquoise", shades: ["49e193", "3ba380", "197c81"] },
  { color: "Light Blue", shades: ["61bcde", "5381cc", "2c489e"] },
  { color: "Dark Blue", shades: ["425879", "343965", "242247"] },
  { color: "Dark Purple", shades: ["7f3b6d", "6a2e53", "4b1d30"] },
  { color: "Hot Pink", shades: ["cd72d9", "ac4da6", "913b86"] },
  { color: "Light Purple", shades: ["ad68e2", "8d41b0", "6a2980"] },
  { color: "Brown Grey", shades: ["50422f", "36261e", "170f0d"] },
  { color: "Grey Blue", shades: ["6f6d85", "525269", "3e4352"] },
  { color: "Light Grey", shades: ["b8b8b8", "828282", "555555"] }
];

module.exports = {
  dyeDescriptors
}
