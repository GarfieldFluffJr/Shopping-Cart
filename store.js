import items from "./items.json";
import { formatCurrency, addGlobalEventListener } from "./utilities.js";
import { addToCart } from "./shoppingCart.js";

const storeItemTemplate = document.querySelector("#store-item-template");
const storeItemContainer = document.querySelector("[data-store-container]");
const IMAGE_URL = "https://dummyimage.com/210x130/";

export function setupStore() {
  addGlobalEventListener("click", "[data-add-to-cart]", (e) => {
    const id = e.target.closest("[data-store-item]").dataset.itemId;
    addToCart(parseInt(id));
  });
  items.forEach(renderStoreItem);
}

function renderStoreItem(item) {
  const storeItem = storeItemTemplate.content.cloneNode(true);

  const container = storeItem.querySelector("[data-store-item]");
  container.dataset.itemId = item.id;

  const name = storeItem.querySelector("[data-name]");
  name.innerText = item.name;

  const category = storeItem.querySelector("[data-category]");
  category.innerText = item.category;

  const image = storeItem.querySelector("[data-image]");
  image.src = `${IMAGE_URL}${item.imageColor}/${item.imageColor}`;

  const price = storeItem.querySelector("[data-price]");
  const priceResult = formatCurrency(item.priceCents / 100);
  if (priceResult === "$0.00") {
    const price1 = `Free! (${priceResult})`;
    const price2 = `${item.maxBuyAmount} max`;
    price.textContent = price1;
    const second = storeItem.querySelector("[data-price-2]");
    second.textContent = price2;
    second.style.fontWeight = "bold";

    // price.textContent = `Free! (${priceResult}) ${item.maxBuyAmount} max`;
  } else {
    price.innerText = formatCurrency(item.priceCents / 100);
  }

  storeItemContainer.appendChild(storeItem);
}
