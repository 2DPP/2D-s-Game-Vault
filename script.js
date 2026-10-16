const shopName = "2D's Game Vault";
const currentYear = new Date().getFullYear();
let runningTotal = 0;
const isMember = true;
const shopIsOpen = true;

const shopNameElement = document.getElementById('shop-name');
const copyrightElement = document.getElementById('copyright');
const productCards = document.querySelectorAll('.product-card');

if (shopNameElement) {
    shopNameElement.textContent = shopName;
}

if (copyrightElement) {
    copyrightElement.textContent = `© ${currentYear} ${shopName}. All rights reserved.`;
}

productCards.forEach((productCard) => {
    const priceElement = productCard.querySelector('.prices');
    if (priceElement) {
        const price = Number(priceElement.textContent.replace(/[^\d.]/g, ''));
        runningTotal += price;
    }
});

const productCountElement = document.getElementById('product-count');
if (productCountElement) {
    productCountElement.textContent = `${productCards.length} games`;
}

const subtotalElement = document.getElementById('product-subtotal');
if (subtotalElement) {
    subtotalElement.textContent = `Product subtotal: ₱${runningTotal.toLocaleString()}`;
}

productCards.forEach((productCard) => {
    const stockStatusElement = productCard.querySelector('.stock-status span');
    const stockCount = Number(productCard.dataset.stock);

    if (!stockStatusElement) {
        return;
    }

    if (stockCount > 10) {
        stockStatusElement.textContent = 'In stock';
    } else if (stockCount >= 1) {
        stockStatusElement.textContent = 'Only a few left';
    } else if (stockCount === 0) {
        stockStatusElement.textContent = 'Sold out';
    } else {
        stockStatusElement.textContent = 'Stock unavailable';
    }
});

const orderTotal = runningTotal;
const qualifiesForFreeDelivery = orderTotal >= 3000 && isMember;
const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;
const finalTotal = orderTotal + deliveryFee;
const deliveryTotalElement = document.getElementById('delivery-total');
if (deliveryTotalElement) {
    deliveryTotalElement.textContent = `Final total with delivery: ₱${finalTotal.toLocaleString()}`;
}

const shopStatusElement = document.getElementById('shop-status');
if (shopStatusElement) {
    shopStatusElement.textContent = shopIsOpen ? 'Open today' : 'Closed today';
}

console.log('shop name:', shopName);
console.log('current year:', currentYear);
console.log('running total:', runningTotal);
console.log('product stock counts:', Array.from(productCards, (productCard) => Number(productCard.dataset.stock)));
console.log('final total:', finalTotal);
console.log('shop status:', shopIsOpen);
