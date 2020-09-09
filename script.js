function fizzbuzz() {
    for (var i = 1; i<=100; i++) {
        if ( i % 3 === 0 && i % 5 === 0) {
            console.log("Fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }

    }
}

// fizzbuzz();

function fizzBuzz2(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz!");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}

fizzBuzz2(Math.floor(Math.random() *10));