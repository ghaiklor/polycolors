# polycolors

Yet another command-line coloring library with RGB support.
You heard it right, __you can specify RGB values as an input to colorizer__.

## Features

- __RGB support__
- Aliases for common known RGB values
- No dependencies

## Getting Started

```shell
npm install polycolors
```

### Use an API for common colors

```javascript
import { fgRed } from "polycolors";

console.log(fgRed("What's up?"));
```

### Use an API for RGB values

```javascript
import { fgColor } from "polycolors";

console.log(fgColor(255, 0, 0)("What's up?"));
```

## Credits

- [nanocolors](https://github.com/ai/nanocolors)
- [picocolors](https://github.com/alexeyraspopov/picocolors)
- [yoctocolors](https://github.com/sindresorhus/yoctocolors)

## License

[MIT License](./LICENSE)
