
export default function createStatementData(plays, invoice) {
    let result = Object.assign({}, invoice)
    result.performances = invoice.performances.map(enrichPerformance)
    result.totalVolumeCredits = totalVolumeCredits(result)
    result.totalAmount = totalAmount(result)

    console.log(result)
    return result

    function enrichPerformance(performance) {
        let calculator = createPerformanceCalculator(performance, playFor(performance))
        let result = Object.assign({}, calculator.performance, calculator.play)
        result.amount = calculator.amount
        result.volumeCredits = calculator.volumeCredits

        return result
    }
    
    function playFor(performance) {
        return plays[performance.playID]
    }

    function totalVolumeCredits(data) {
        return data.performances.reduce((total, perf) => total += perf.volumeCredits, 0)
    }

    function totalAmount(data) {
        return data.performances.reduce((total, perf) => total += perf.amount, 0)
    }
}

function createPerformanceCalculator(performance, play) {
    switch (play.type) {
        case "tragedy":
            return new TragedyCalculator(performance, play)
            break;

        case "comedy":
            return new ComedyCalculator(performance, play)
            break;
    
        default:
            throw new Error(`unknown type: ${this.play.type}\n`)
            break;
    }
}
class PerformanceCalculator {
    constructor(performance, play) {
        this.performance = performance
        this.play = play
    }

    get amount() {
        throw new Error('subclass invoked')
    }

    get volumeCredits() {
        return Math.max(this.performance.audience - 30, 0)
    }
}
class ComedyCalculator extends PerformanceCalculator {
    constructor(performance, play) {
        super(performance, play)
    }

    get amount() {
        let result = 30000
        if (this.performance.audience > 20) {
            result += 10000 + 500 * (this.performance.audience - 20)
        }
        result += 300 * this.performance.audience
        return result
    }

    get volumeCredits() {
        return super.volumeCredits + Math.floor(this.performance.audience / 5)
    }
}
class TragedyCalculator extends PerformanceCalculator {
    constructor(performance, play) {
        super(performance, play)
    }

    get amount() {
        let result = 40000
        if (this.performance.audience > 30) {
            result += 1000 * (this.performance.audience - 30)
        }
        return result
    }
}