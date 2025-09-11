import checkProduct from '../controller/checkProducts.js';

export async function checkStock(cod) {
    const product = await checkProduct(cod);

    if (product.quantity <= 0) {
        console.log(`Não tem estoque para ${product.name}.`);
    } else {
        console.log(`O produto ${product.name} ainda possui ${product.quantity} em estoque.`);
    }
};