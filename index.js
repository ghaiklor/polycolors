export const fgColor = (r, g, b) => (string) =>
  "\u001b" + "[38;2;" + r + ";" + g + ";" + b + "m" + string + "\u001b" + "[0m";

export const bgColor = (r, g, b) => (string) =>
  "\u001b" + "[48;2;" + r + ";" + g + ";" + b + "m" + string + "\u001b" + "[0m";

export const fgBlack = fgColor(0, 0, 0);
export const fgRed = fgColor(255, 0, 0);
export const fgGreen = fgColor(0, 128, 0);
export const fgYellow = fgColor(255, 255, 0);
export const fgBlue = fgColor(0, 0, 255);
export const fgMagenta = fgColor(255, 0, 255);
export const fgCyan = fgColor(0, 255, 255);
export const fgWhite = fgColor(255, 255, 255);

export const bgBlack = bgColor(0, 0, 0);
export const bgRed = bgColor(255, 0, 0);
export const bgGreen = bgColor(0, 128, 0);
export const bgYellow = bgColor(255, 255, 0);
export const bgBlue = bgColor(0, 0, 255);
export const bgMagenta = bgColor(255, 0, 255);
export const bgCyan = bgColor(0, 255, 255);
export const bgWhite = bgColor(255, 255, 255);
