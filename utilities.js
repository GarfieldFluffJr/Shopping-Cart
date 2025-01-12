export function formatCurrency(amount) {
  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(amount);
}

export function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      callback(e);
    }
  });
}
