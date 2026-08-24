'use strict';

// 1. Input values (simulating raw form inputs)
const billRaw = "480"; 
const partySize = 4;
const paymentMethod = "telebirr";

const bill = Number(billRaw);


const tipRate = bill > 300 ? 0.10 : 0.05;
const tip = bill * tipRate;


const subtotal = bill + tip;


let feeRate;
switch (paymentMethod.toLowerCase()) {
  case 'telebirr':
    feeRate = 0.005; 
    break;
  case 'cbebirr':
  case 'awash':
    feeRate = 0.01;  
    break;
  default:
    feeRate = 0;    
    break;
}

const serviceFee = subtotal * feeRate;


const total = subtotal + serviceFee;
const perPerson = total / partySize;


console.log(`=== TeleBirr Split Summary ===`);
console.log(`Base Bill:     ${bill} ETB`);
console.log(`Tip Applied:   ${tip} ETB (${tipRate * 100}%)`);
console.log(`Service Fee:   ${serviceFee.toFixed(2)} ETB (${paymentMethod})`);
console.log(`Total Amount:  ${total.toFixed(2)} ETB`);
console.log(`Per Person:    ${perPerson.toFixed(2)} ETB (${partySize} people)`);