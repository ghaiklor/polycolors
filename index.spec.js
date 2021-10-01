import assert from "assert";
import { bgColor, fgColor } from "./index.js";

assert(bgColor(100, 200, 255)("Hello") === "\u001b[48;2;100;200;255mHello\u001b[0m");
assert(fgColor(100, 200, 255)("Hello") === "\u001b[38;2;100;200;255mHello\u001b[0m");
