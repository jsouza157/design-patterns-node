const Bank = require('./BankStartegy.js');

class AnyBank extends Bank {
    proccessPayment() {
        console.log(`You payment with value ${this.value} for account ${this.account} has been proccessed by AnyBank.`);
    }
}

module.exports = AnyBank;