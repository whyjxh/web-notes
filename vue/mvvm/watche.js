function Watcher(vm, exp, cb) {
    this.cb = cb;
    this.vm = vm;
    this.exp = exp;

    this.value = this.get();
}

Watcher.prototype = {
    get:function () {
        Dep.target = this;
        var value = this.vm[exp];
        Dep.target = null;
        return value;
    },
    update: function() {
        this.run();
    },
    run: function() {
        var value = this.get();
        var oldValue = this.value;
        if (value !== oldValue ) {
            this.value = value;
            this.cb.call(this.vm, value, oldValue);
        } 
    }
}