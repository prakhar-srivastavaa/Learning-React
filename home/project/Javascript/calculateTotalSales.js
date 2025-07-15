const sales = [
    { item: "Laptop", quantity: 2, price: 800 },
    { item: "Monitor", quantity: 1, price: 150 },
    { item: "Mouse", quantity: 4, price: 25 }
];
function calculateTotalSales(sales) {
    let total = 0;
    for (let i = 0; i < sales.length; i++) {
        total += sales[i].quantity * sales[i].price;
    }
    return total;
}
console.log("Total Sales Amount:", calculateTotalSales(sales)); 

function orderReceipt(sales){
    let grandtotal =0;
    console.log("Order Receipt:");
    console.log("------------------------");

    for (let i=0;i<sales.length;i++){
        const itemTotal = sales[i].quantity*sales[i].price;
        grandtotal += itemTotal;
        console.log(`${sales[i].item} - Quantity: ${sales[i].quantity}, Price: $${sales[i].price}, Total: $${itemTotal}`);

    }
    console.log("------------------------");
    console.log(`Grand Total: $${grandtotal}`);


}
orderReceipt(sales);

