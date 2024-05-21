class Logger {
    constructor() {
        this.id = Math.floor(Math.random() * 10000000000)
    }

    log(value) {
        console.log(`[Calculator: ${this.id}]: ${value}`)
    }
}

module.exports = Logger