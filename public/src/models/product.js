function Product(id = null, cat = null, name, desc, stock, price) {

    this._id = id;
    this.category_id = cat;
    this.product_name = name;
    this.product_description = desc;
    this.product_stock = stock;
    this.product_price = price;
}

// export this as a module
export { 
    Product
}