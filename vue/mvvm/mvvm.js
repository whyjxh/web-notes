import observe from './observe.js';

function MVVM(options) {
    this.$options = options;
    var data = this._data = this.$options.data;
    observe(data, this);
}