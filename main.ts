// Generic Method

// First Example

function swap<T>(a: T, b: T) {
    return [b, a];
}

let result = swap<number>(1, 2);
console.log(result);


// Second Example with Number 

function getLastElement1<T>(arr: T[]): T | undefined {
    if (arr.length === 0) {
        return undefined
    }
    return arr[arr.length -2]
}

let numberArray = [1, 2, 3, 4, 5];
let lastNumber = getLastElement1<number>(numberArray)

console.log(lastNumber);


// Third Example with String

function getLastElement2<T>(arr: T[]): T | undefined {
    if (arr.length === 0) {
        return undefined
    }
    return arr[arr.length - 1]
}

let stringArray = ["Adeel", "Shakeel", "Tehseen", "Farhan"];
let lastString = getLastElement2<string>(stringArray);

console.log(lastString);


// Fourth Example with Data Types

function getLastElement3<T>(arr:T[]):T | undefined { 
    if (arr.length === 0) {
        return undefined
    }
    return arr[arr.length - 2]
}

interface person{
    name: string,
    age: number,
}

let personArray: person[] = [
    { name: "Adeel", age: 32},
    { name: "Shakeel", age: 27},
    { name: "Tehseen", age: 34},
];

let lastPerson = getLastElement3<person>(personArray)
console.log(lastPerson);


// Generator Function 

// First Example 

function* fibonacciGenerator() {
    let a = 0;

    while(a < 5) {
        yield a++;
    };
};

let fibonacciIterator = fibonacciGenerator();

for (let i = 0; i < 6; i++) {
    console.log(fibonacciIterator.next());
};


// Second Example 

function* countdownTimer(seconds: number) {
    while (seconds > 0) {
        yield seconds;
        seconds--;
    }
}

let timerIterator = countdownTimer(5);

function displayCountdown() {
    let result = timerIterator.next();
    if (!result.done) {
        console.log(result.value);
        setTimeout(displayCountdown, 1000);
    } else {
        console.log("Countdown Complete!");
    };
};

displayCountdown();