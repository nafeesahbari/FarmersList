const { Cart } = require("..");

class Customer {
    constructor(name, email, shippingAddress) {
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
        this.orderHistory = Cart([]);
    }
    addToOrderHistory(cart) {
        this.Cart.push(cart);
    }
}

module.exports = Customer;
