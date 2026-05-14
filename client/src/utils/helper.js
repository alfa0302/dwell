export function formatPrice(price) {
  return new Intl.NumberFormat("en-AE", {
    maximumFractionDigits: 0,
  }).format(price);
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
