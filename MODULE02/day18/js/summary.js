import orders from "./orders.js";
import { withVat, format, total } from "./pricing.js";

// Calculate total for each order
const ordersWithTotal = orders.map((order) => ({
    ...order,
    total: total(order.items)
}));

// Keep only orders over 500 ETB
const largeOrders = ordersWithTotal.filter(
    (order) => order.total > 500
);

// Calculate grand total
const grandTotal = ordersWithTotal.reduce(
    (sum, order) => sum + order.total,
    0
);

// Print summary
console.log("=== ADDIS MARKET ORDER SUMMARY ===");

ordersWithTotal.forEach((order) => {
    console.log(
        `Order #${order.id} - ${order.customer}: ${format(order.total)}`
    );
});

console.log("\nOrders over 500 ETB:");

largeOrders.forEach((order) => {
    console.log(
        `Order #${order.id} - ${order.customer}: ${format(order.total)}`
    );
});

console.log(`\nGrand Total: ${format(grandTotal)}`);