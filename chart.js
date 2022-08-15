class Chart {
    constructor() {
        this.data = [];
    }

    isEmpty() {
        return this.data.length === 0;
    }

    add(item) {
        if (!this.data.includes(item)) {
            this.data.push(item);
        }
    }

    remove(item) {
        this.data = this.data.filter(i => i !== item);
    }

    count() {
        return this.data.length;
    }
}

const chart = new Chart();
chart.add(1);
chart.add(2);
chart.add(3);
chart.add(3);

console.log(chart.data);
console.log(chart.count());