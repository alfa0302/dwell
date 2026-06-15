function validatePhoneNumber(phone) {
  const regex = /^\+?971\s*5\d{8}$/;
  return regex.test(phone);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

module.exports = { validatePhoneNumber, isValidEmail };
