class Stopwatch {
    constructor(display) {
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
        this.score = 0;
    }
    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
        this.print();
    }
    print() {
        this.display.innerText = this.format(this.times);
    }
    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }
    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
            this.score++;
            console.log(this.score);
        }
    }
    step() {
        if (!this.running) return;
        this.calculate();
        this.print();
    }
    calculate() {
        this.times.miliseconds += 1;
        if (this.times.miliseconds >= 100) {
            this.times.seconds += 1;
            this.times.miliseconds = 0;
        }
        if (this.times.seconds >= 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }
    stop() {
        this.running = false;
        clearInterval(this.watch);
    }
    save() {
        if (this.score > 0) {
            let time = document.querySelector('.stopwatch').textContent;
            console.log(time);
            const li = document.createElement('li');
            let msg = document.createTextNode('Czas nr: ' + this.score + ' = ' + time);
            li.appendChild(msg);
            let check = document.querySelectorAll('li').length;
            console.log(check);
            console.log(this.score);
            if (this.running) {
                list.appendChild(li);
                this.score++;
            } else if(this.score !== check) {
                list.appendChild(li);
            };
        }
    }
    deleteList() {
        list.innerHTML = ' ';
        this.score = 0;
        this.reset();
    }
};

const list = document.getElementsByTagName('ul')[0];

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
};

const stopwatch = new Stopwatch(
    document.querySelector('.stopwatch')
);

var startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

var stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => stopwatch.reset());

var saveButton = document.getElementById('save');
saveButton.addEventListener('click', () => stopwatch.save());

var deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', () => stopwatch.deleteList());