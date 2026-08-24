const VAT = 0.15;

export const withVat = (price) => {
    return price * (1 + VAT);
};

export const format = (amount) => {
    return `${amount.toFixed(2)} ETB`;
};

export const total = (items) => {
    return items.reduce(
        (sum, { price, qty }) => sum + price * qty,
        0
    );
};