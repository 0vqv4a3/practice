// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false



/* [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
    ] */




/* // Dummies ways of coding
function isPangram(pan) {
    pan = pan.toLowerCase();

    if (pan.includes("a") &&
        pan.includes("b") &&
        pan.includes("c") &&
        pan.includes("d") &&
        pan.includes("e") &&
        pan.includes("f") &&
        pan.includes("g") &&
        pan.includes("h") &&
        pan.includes("i") &&
        pan.includes("j") &&
        pan.includes("k") &&
        pan.includes("l") &&
        pan.includes("m") &&
        pan.includes("n") &&
        pan.includes("o") &&
        pan.includes("p") &&
        pan.includes("q") &&
        pan.includes("r") &&
        pan.includes("s") &&
        pan.includes("t") &&
        pan.includes("u") &&
        pan.includes("v") &&
        pan.includes("w") &&
        pan.includes("x") &&
        pan.includes("y") &&
        pan.includes("z")
    ) {
        return true;
    }
    return false;
} */

function isPangram(pan) {
    pan = pan.toLowerCase();
    let pangram = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < pangram.length; i++) {
        if (pan.includes(pangram[i]) === false) {
            return false;
        }
    }
    return true;
}