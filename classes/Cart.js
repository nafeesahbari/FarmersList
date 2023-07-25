const { Product } = require("..");

class Cart {
    constructor(products, total) {
        this.products = [];
        this.total = 0;
    }
    addProduct(products) {
        this.Product.addProduct(products);
    }
    removeProduct(i) {
        this.Product.removeProduct(i);
    }
}

module.exports = Cart;