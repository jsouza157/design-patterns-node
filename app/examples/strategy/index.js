const Payment = require('../../patterns/strategy/PaymentContext.js');
const AnyBank = require('../../patterns/strategy/AnyBank.js');
const AnotherBank = require('../../patterns/strategy/AnotherBank.js');

/**
 * Example with strategy pattern.
 * reduce code and easy support.
 */
class StrategyPattern {
    constructor(account, value) {
        this.payment = new Payment();
        this.bankReference = {'AnyBank' : new AnyBank(account, value), 'AnotherBank' : new AnotherBank(account, value)};
    }

    handler(bankReference) {
        this.payment.execute(this.bankReference[bankReference]);
    }
}
module.exports = StrategyPattern;

const strategyPattern = new StrategyPattern('3342234-49', '22,99');
strategyPattern.handler('AnotherBank');

/**
 * Example without strategy pattern.
 * more code, difficut maintenance and hard implementation.
 */
class WithOutStrategyPattern {
    constructor(account, value) {
        this.value = value;
        this.account = account;
    }

    handler(bankReference) {
        if(bankReference === 'AnyBank') {
            console.log(`You payment with value ${this.value} for account ${this.account} has been proccessed by AnyBank.`);
        } else if (bankReference === 'AnotherBank') {
            console.log(`You payment with value ${this.value} for account ${this.account} has been proccessed by AnotherBank.`);
        } else if (bankReference === 'AnotherBank2') {
            console.log('...');
        } else if (bankReference === 'AnotherBank3') {
            console.log('...');
        } else if (bankReference === 'AnotherBank4') {
            console.log('...');
        } else {
            console.log('...');
        }
    }
}
module.exports = WithOutStrategyPattern;

const withOutStrategyPattern = new WithOutStrategyPattern('3342234-49', '22,99');
withOutStrategyPattern.handler('AnyBank');