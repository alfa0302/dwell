export function formatPrice(price) {
  return new Intl.NumberFormat("en-AE", {
    maximumFractionDigits: 0,
  }).format(price);
}
