import e from "cors";
import items from "./items.json";
import { formatCurrency, addGlobalEventListener } from "./utilities.js";

const cartButton = document.querySelector("[data-cart-button]");
const cartItemsWrapper = document.querySelector("[data-cart-items-wrapper]");
const cartItemTemplate = document.querySelector("#cart-item-template");
const cartItemContainer = document.querySelector("[data-cart-items-container]");
const cartQuantity = document.querySelector("[data-cart-quantity]");
const cartTotal = document.querySelector("[data-total]");
const cart = document.querySelector("[data-cart]");
const IMAGE_URL = "https://dummyimage.com/210x130/";
const SESSION_STORAGE_KEY = "SHOPPING_CART-key";
let shoppingCart = [];
export function setupShoppingCart() {
  addGlobalEventListener("click", "[data-remove-from-cart-button]", (e) => {
    const id = e.target.closest("[data-item]").dataset.itemId;
    removeFromCart(parseInt(id));
  });

  shoppingCart = loadCart();
  renderCart();

  // Show/hide the cart when clicked
  cartButton.addEventListener("click", () => {
    cartItemsWrapper.classList.toggle("invisible");
  });
}

function saveCart() {
  sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(shoppingCart));
}
function loadCart() {
  const cart = sessionStorage.getItem(SESSION_STORAGE_KEY);
  return JSON.parse(cart) || [];
}

// Add items to cart
export function addToCart(id) {
  // Handle multiple of the same item in cart
  const existingItem = shoppingCart.find((entry) => entry.id === id);
  if (existingItem) {
    const item = items.find((entry) => entry.id === existingItem.id);
    console.log(item);
    if (item.priceCents === 0) {
      if (
        existingItem.quantity === item.maxBuyAmount ||
        existingItem.quantity > item.maxBuyAmount
      ) {
        window.alert(
          `You have already exceeded the maximum buy rate of (${item.maxBuyAmount})`
        );
      } else {
        existingItem.quantity++;
      }
    }
  } else {
    shoppingCart.push({ id: id, quantity: 1 });
  }
  renderCart();
  saveCart();
}

// Remove items from cart
function removeFromCart(id) {
  const existingItem = shoppingCart.find((entry) => entry.id === id);
  if (existingItem == null) return;
  shoppingCart = shoppingCart.filter((entry) => entry.id !== id);
  renderCart();
  saveCart();
}

// Show/hide the cart button when no items or when item count goes from 0 to 1
function renderCart() {
  if (shoppingCart.length === 0) {
    hideCart();
  } else {
    showCart();
    renderCartItems();
  }
}

function hideCart() {
  cart.classList.add("invisible");
  cartItemsWrapper.classList.add("invisible");
}

function showCart() {
  cart.classList.remove("invisible");
}

function renderCartItems() {
  // Calculate an accurate total
  cartQuantity.innerText = shoppingCart.length;

  const totalCents = shoppingCart.reduce((sum, entry) => {
    const item = items.find((i) => entry.id === i.id);
    return sum + item.priceCents * entry.quantity;
  }, 0);

  cartTotal.innerText = formatCurrency(totalCents / 100);

  cartItemContainer.innerHTML = "";
  shoppingCart.forEach((entry) => {
    const item = items.find((i) => entry.id === i.id);
    const cartItem = cartItemTemplate.content.cloneNode(true);

    const container = cartItem.querySelector("[data-item]");
    container.dataset.itemId = item.id;

    const name = cartItem.querySelector("[data-name]");
    name.innerText = item.name;

    const image = cartItem.querySelector("[data-image]");
    image.src = `${IMAGE_URL}${item.imageColor}/${item.imageColor}`;

    const price = cartItem.querySelector("[data-price]");
    price.innerText = formatCurrency((item.priceCents * entry.quantity) / 100);

    if (entry.quantity > 1) {
      const quantity = cartItem.querySelector("[data-quantity]");
      quantity.innerText = `x${entry.quantity}`;
    }

    cartItemContainer.appendChild(cartItem);
  });
}

// Persist across mutiple pages
