function printString(string) {
    console.log(string[0]);

    if (string.length > 1) {
        let mySubString = string.substring(1, string.length);
        printString(mySubString);
    } else {
        return true;
    }
}

function reverseString(string) {
    if (string.length < 2) {
        return string;
    } else {
        return reverseString(string.substring(1)) + string[0];
    }
}

function isPalindrome(string) {
    let l = string.length;
    if (l < 2) {
        return true;
    } else if (string[l - 1] === string[0]) {
        return isPalindrome(string.substring(1, l - 1));
    } else {
        return false;
    }
}

function addUpTo(myArray, index) {
    return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
}

function maxOf(myArray) {
    if (myArray.length === 1) {
        return myArray[0];
    } else {
        return Math.max(myArray.pop(), maxOf(myArray));
    }
}

function includesNumber(myArray, myNumber) {
    if (!myArray.length) {
        return false;
    } else if (myArray[0] === myNumber) {
        return true;
    } else {
        return includesNumber(myArray.slice(1), myNumber);
    }
}