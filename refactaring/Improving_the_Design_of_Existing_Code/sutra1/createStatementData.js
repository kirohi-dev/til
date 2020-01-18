class PerformanceCalculator {
    constructor(aPerformance, aPlay) {
        this.performances = aPerformance;
        this.play = aPlay;
    }

    get amount() {
        throw new Error('サブクラスの責務');
    }

    get volumeCredts() {
        return Math.max(this.performances.audience - 30, 0);
    }
}

class TragedyCalculator extends PerformanceCalculator {
    get amount() {
        let result = 40000;
        if (this.performances.audience > 30) {
            result += 1000 * (this.performances.audience -30);
        }
        return result;
    }
}

class ComedyCalculator extends PerformanceCalculator {
    get amount() {
        let result = 30000;
        if (this.performances.audience > 20) {
            result += 10000 + 500 * (this.performances.audience - 20);
        }
        result += 300 * this.performances.audience;
        return result;
    }

    get volumeCredts() {
        return super.volumeCredts + Math.floor(this.performances.audience / 5)
    }
}

function createPerformanceCalculator(aPerformance, aPlay) {
    switch(aPlay.type) {
        case 'tragedy': return new TragedyCalculator(aPerformance, aPlay);
        case 'comedy':return new ComedyCalculator(aPerformance, aPlay);
        default:
            throw new Error(`an known type: ${aPlay.type}`);
    }
}

export default function createStatementData(invoice, plays) {
    const statementData = {};
    statementData.customer = invoice.customer;
    statementData.performances = invoice.performances.map(enrichPerformance);
    statementData.totalAmount = totalAmount(statementData);
    statementData.totalVolumeCredits = totalVolumeCredits(statementData);
    return statementData;

    function enrichPerformance(aPerformance) {
        // シャローコピー
        const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance));
        const result = Object.assign({}, aPerformance);
        result.play =  calculator.play;
        result.amount = calculator.amount;
        result.volumeCredtsFor = calculator.volumeCredts;
        return result;
    }

    function playFor(aperformance) {
        return plays[aperformance.playID];
    }

    function totalAmount(data) {
        let result = 0;
        for (let perf of data.performances) {
            result += perf.amount;
        }
        return result;
    }

    function totalVolumeCredits(data) {
        let result = 0;
        for (let perf of data.performances) {
            result += perf.volumeCredtsFor;
        }   
        return result;
    }
}
