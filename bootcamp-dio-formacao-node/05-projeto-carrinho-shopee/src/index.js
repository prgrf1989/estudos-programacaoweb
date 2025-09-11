import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = []; // Carrinho de compra.
const myWishList =[]; // Carrinho de favoritos.

console.log("\nWelcome to the your Shopee Cart!\n");

// Criando itens.
const item1 = await createItem("hotweels ferrari", 20.99, 3);
const item2 = await createItem("hotweels lamborghini", 39.99, 3);

// Adicionando itens ao carrinho.
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// Reduzir a quantidade do item.
await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item1);

// Deletando itens do carrinho.
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

// Exibe os itens existentes no carrinho.
await cartService.displayCart(myCart);

cartService.calculateTotal(myCart);