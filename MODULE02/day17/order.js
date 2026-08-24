const subtotal = (...prices) =>
    prices.reduce((sum, price) => sum + price, 0);

const discountBy = rate =>
    price => price * (1 - rate);

const withVat = price =>
    price * 1.15;

const toETB = price =>
    `${price.toFixed(2)} ETB`;

function makeReceiptMaker() {
    let orderNo = 0;

    const memberDiscount = discountBy(0.10);

    return function (...items) {
        orderNo++;

        const gross = subtotal(...items);
        const discounted = memberDiscount(gross);
        const net = withVat(discounted);

        return `#${orderNo}: ${toETB(net)}`;
    }
}

const receipt = makeReceiptMaker();

module.exports = {
    subtotal,
    discountBy,
    withVat,
    toETB,
    makeReceiptMaker,
    receipt
};