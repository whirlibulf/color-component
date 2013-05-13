function ComponentFactory(options) {
  var component = {},
    key;

  for (key in options) {
    if (options.hasOwnProperty(key)) {
      component[key] = options[key];
    }
  }

  return component;
}

module.exports = ComponentFactory;
