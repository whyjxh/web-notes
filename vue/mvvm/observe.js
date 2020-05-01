import Dep from './dep';

function observe(data) {
    if (!data || typeof data !== 'object') {
        return;
    }
    Object.keys(data).forEach((key) => {
        defineReactive(data, key, data[key]);
    })
}

function defineReactive(data, key, val) {
    observe(val);
    var dep = new Dep();
    Object.defineProperty(data,key, {
        get() {
            Dep.target && this.dep.addDep(Dep.target);
            return val;
        },
        set(newVal) {
            data[key] = newVal;
            dep.nofity();
        }
    })
}