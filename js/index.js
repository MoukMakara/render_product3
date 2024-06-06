import { CardComponent } from "../components/CardComponent.js";
import { CardComponent2 } from "../components/CardComponent2.js";
import { getData } from "../store/fetchApi.js";

// CardComponent2
let getUsers = document.querySelector("#render-product");
let users = await getData("users");
users.map((user) => {
  getUsers.innerHTML += CardComponent2(user);
});
// console.log("users", users);

let getProducts = document.querySelector("#render-product");
let products = await getData("products");
// CardComponent
products.map((product) => {
  getProducts.innerHTML += CardComponent(product);
});
// console.log("products", products);
