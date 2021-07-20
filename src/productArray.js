const category = ["grocery", "lifestyle"];

const subCategory = {
  grocery: ["fruits & vegetables", "snacks"],
  lifestyle: ["men", "women"],
};

const productType = {
  "fruits & vegetables": [
    { name: "apple", price: 100 },
    { name: "potato", price: 30 },
  ],
  snacks: [
    { name: "chocolate", price: 100 },
    { name: "chips", price: 10 },
  ],
  men: [
    { name: "t-shirt", price: 100 },
    { name: "pant", price: 30 },
  ],
  women: [
    { name: "top", price: 100 },
    { name: "jeans", price: 30 },
  ],
};

export { category, subCategory, productType };
