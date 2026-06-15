export function formatPrice(price) {
  return new Intl.NumberFormat("en-AE", {
    maximumFractionDigits: 0,
  }).format(price);
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePhoneNumber(phone) {
  const regex = /^\+?971\s*5\d{8}$/;
  return regex.test(phone);
}
