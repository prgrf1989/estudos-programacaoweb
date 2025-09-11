import products from '../data/products.json' with {type: 'json'};

async function checkProduct(cod) {
    const product = products.products.find(p => p.cod === cod);
    return product;
};

export default checkProduct;