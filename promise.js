const cart = ["shirts", "pants", "shorts"];

// createOrder, proceedToPayment, summaryOrder, updateWallet

const validateCart = (cart = []) => cart.length > 0;

const createOrder = (cart = []) => {
  return new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const error = new Error("The cart is not valid");
      reject(error);
    }
    setTimeout(() => resolve("123456"), 1000);
  });
};

const proceedToPayment = (orderId) => {
  return new Promise((resolve, reject) => {
    if (!orderId) {
      const error = new Error("The orderId is not valid");
      reject(error);
    }
    setTimeout(() => resolve("Payment Info"), 1500);
  });
};

const orderSummary = (paymentInfo) => {
  return new Promise((resolve, reject) => {
    if (!paymentInfo) {
      const error = new Error("The paymentInfo is not valid");
      reject(error);
    }
    setTimeout(() => resolve({ amount: 1000 }), 1500);
  });
};

const updateWallet = (amount) => {
  return new Promise((resolve, reject) => {
    if (!amount) {
      const error = new Error("The amount is not valid");
      reject(error);
    }
    setTimeout(() => resolve(amount - 500), 1500);
  });
};

createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
    return orderSummary(paymentInfo);
  })
  .then(({ amount }) => {
    console.log(amount);
    return updateWallet(amount);
  })
  .then((balance) => console.log(balance))
  .catch((err) => {
    console.error(err.message);
  });
