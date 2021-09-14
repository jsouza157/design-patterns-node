//STRATEGY
class Bank {
    constructor(account, value) {
        this.account = account;
        this.value = value;
    }

    pay() {
        return this.proccessPayment();
    }
}

module.exports = Bank;