function ComponentFactory(options) {
    var key;

    for (key in this) {
        if (this.hasOwnProperty(key)) {
            delete this[key];
        }
    }

    for (key in options) {
        if (options.hasOwnProperty(key)) {
            this[key] = options[key];
        }
    }
}

module.exports = ComponentFactory;
