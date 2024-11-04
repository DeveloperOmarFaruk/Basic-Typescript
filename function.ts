{
    // Normal Function

function add(num1:number, num2:number):number {
    return num1 + num2
}
add(2, 3);


// Arrow Function
const arrowSum = (num1: number, num2: number): number => num1 + num2;
    arrowSum(2, 3);
    console.log(arrowSum);

// Method type Function
// Object ---> Function ---> Method
const poorUser = {
    name: "Omar Faruk",
    balance: 120,
    addBalance(balance: number): string{
        return `My new balance is : ${this.balance + balance}`;
    }
}


const arr: number[] = [1, 3, 5];
const newArray: number[] = arr.map((item: number): number => item * item);


}