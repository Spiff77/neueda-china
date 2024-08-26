var BankError = function (message, amount) {
	this.message = message;
    this.amount = amount;
};
 
BankError.prototype = {
	toString: function() {
		return this.message + ", amount: " + this.amount;
	}
};