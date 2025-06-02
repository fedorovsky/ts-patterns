// Define strategy type
type PaymentStrategy = (amount: number) => void;

// Define concrete strategy functions
const payWithCard: PaymentStrategy = (amount) => {
  console.log(`Paid $${amount} with credit card.`);
};

const payWithPayPal: PaymentStrategy = (amount) => {
  console.log(`Paid $${amount} using PayPal.`);
};

const payWithCrypto: PaymentStrategy = (amount) => {
  console.log(`Paid $${amount} with cryptocurrency.`);
};

// Optional: Map for dynamic access
const paymentStrategies: Record<string, PaymentStrategy> = {
  card: payWithCard,
  paypal: payWithPayPal,
  crypto: payWithCrypto,
};

// Function that accepts a strategy
function processPayment(amount: number, strategy: PaymentStrategy) {
  strategy(amount);
}

// ✅ Usage examples

processPayment(100, payWithCard);       // Paid $100 with credit card.
processPayment(50, payWithPayPal);      // Paid $50 using PayPal.
processPayment(75, payWithCrypto);      // Paid $75 with cryptocurrency.

// ✅ Dynamic selection
const selected = 'paypal';
processPayment(30, paymentStrategies[selected]);
