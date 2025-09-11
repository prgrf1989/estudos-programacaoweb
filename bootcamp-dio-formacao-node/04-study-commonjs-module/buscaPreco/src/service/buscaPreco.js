const specificProduct = require('../controller/displayedPrice.js');

exports.buscaPreco = async (codBar) => {
    console.log(`Codigo de barras: ${codBar}`);
    productPrice = await specificProduct.displayedPrice(codBar);
    console.log(`O produto é ${productPrice.name} e está no valor de ${productPrice.price} R$`);
};