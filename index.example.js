import {
  bgColor,
  fgColor,
  bgBlack,
  bgRed,
  bgGreen,
  bgYellow,
  bgBlue,
  bgMagenta,
  bgCyan,
  bgWhite,
  fgBlack,
  fgRed,
  fgGreen,
  fgYellow,
  fgBlue,
  fgMagenta,
  fgCyan,
  fgWhite,
} from "./index.js";

console.log(bgBlack(fgWhite("White on Black")));
console.log(bgRed(fgCyan("Cyan on Red")));
console.log(bgGreen(fgMagenta("Magenta on Green")));
console.log(bgYellow(fgBlue("Blue on Yellow")));
console.log(bgBlue(fgYellow("Yellow on Blue")));
console.log(bgMagenta(fgGreen("Green on Magenta")));
console.log(bgCyan(fgRed("Red on Cyan")));
console.log(bgWhite(fgBlack("Black on White")));
console.log(bgColor(128, 128, 128)(fgColor(0, 255, 0)("Green on Gray")));
