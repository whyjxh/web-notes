function Dep() {
    this.subs = [];
}

Dep.prototype = {
    addSub: function(fn) {
        this.subs.push(fn);
    },
    notify: function() {
        this.subs.forEach(item => item.update());
    }
}