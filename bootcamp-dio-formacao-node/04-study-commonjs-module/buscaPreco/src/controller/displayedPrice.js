const products = require('../data/listProducts.json');

async function displayedPrice(codBar){
    const specificProduct = products.products.find(p => p.codBar == codBar);
    if (specificProduct) {
        return specificProduct; 
    } else {
        return "Produto não encontrado..";
    }
}

module.exports = {
    displayedPrice
}