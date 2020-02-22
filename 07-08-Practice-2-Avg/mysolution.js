// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

// cara 1

/* function avg(arr) {
    let avr = 0;
    for (let i of arr) {
        avr += i;
    }
    return avr / arr.length;
} */


// lebih panjang
function avg(arr) {
    let avr = 0;
    for (let i = 0; i < arr.length; i++) {
        avr += arr[i];
    }
    return avr / arr.length;
}