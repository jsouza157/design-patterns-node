const Bank = require('./BankStartegy.js');

class AnotherBank extends Bank {
    proccessPayment() {
        console.log(`You payment with value ${this.value} for account ${this.account} has been proccessed by AnotherBank.`);
    }
}

module.exports = AnotherBank;