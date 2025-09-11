// quais ações meu carrinho pode fazer

// CASOS DE USO
// -> Adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item) // o push é usado para adicionar um objeto a um array.
} // No exemplo acima o item que é o objeto é adicionado ao array userCart.

// -> Calcular o total
async function calculateTotal(userCart){
    console.log("\nShopee Cart TOTAL IS: ");
    const result = userCart.reduce((total, item) => total + item.subTotal(), 0);
    console.log(`🛒 Total: ${result} R$`);
    // O reduce é usado para percorrer um array (userCart) e realizar calculos.
// Na ação acima o 'total' recebe a soma da função subTotal() de todos os objetos desse array
}// 'item'(é cada objeto) e o '0' é o valor inicial desse calculo.

// -> Deletar item do carrinho
async function deleteItem(userCart,name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
    
}

// -> Remover um item - diminui um item
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    if (indexFound < 0) {
        console.log("Item não encontrado.");
        return
    }
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }
    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
    console.log(`Item encontrado no indice: ${indexFound}`);
}

// -> Exibir itens do carrinho
async function displayCart(userCart) {
    console.log("Shopee cart list: \n");
    userCart.forEach((item, index) => {
        console.log(`${index +1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subTotal().toFixed(2)}`);
    })
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
};