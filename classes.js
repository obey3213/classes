//classes

class Timer {
    constructor() {
        this.time = 0;
        this.interval = null;
    }
    start() {
        this.time = 0;
        this.interval = setInterval(() => {
            this.time += 1;
        }, 1000);
    }
    stop() {
        clearInterval(this.interval);
        return this.time;
    }
}

const timer1 = new Timer();
const timer2 = new Timer();
const timer3 = new Timer();
