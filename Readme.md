
# color-component

Component for storing color values in game objects in the whirlibulf game engine.

## Installation

    $ component install whirlibulf/color-component

## Usage

Register the component:

    game.addComponent('color', require('color-component'));

The options object for this component is a map from a string key to a string color value.

For example:

    {
      fill: "#FF0000",
      outline: "black"
    }

Different systems may use specific string keys.
See the documentation for those systems to know which keys are used.

## License

  MIT
