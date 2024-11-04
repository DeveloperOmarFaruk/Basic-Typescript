"use strict";
{
    // Normal Function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 3);
    // Arrow Function
    const arrowSum = (num1, num2) => num1 + num2;
    arrowSum(2, 3);
    // Method type Function
    // Object ---> Function ---> Method
    const poorUser = {
        name: "Omar Faruk",
        balance: 120,
        addBalance(balance) {
            return `My new balance is : ${this.balance + balance}`;
        }
    };
    const arr = [1, 3, 5];
    const newArray = arr.map((item) => item * item);
}
