class LRUCache {
    constructor() {
        let cache = [];
    }
    get() {
        let time = this.cache[0].time;
        let index = 0;
        this.cache.forEach((c, i) => {
            if(c.time < time) {
                time = c.time;
                index = i;
            }
        });
        this.cache[index].time = new Date();
        return this.cache[index];
    }
    set(n) {
        this.cache.push({
            val: n,
            time: new Date()
        });
    }
};

var cache = new LRUCache();
cache.set(1);
cache.set(2);
console.log(cache.get());
console.log(cache.get());