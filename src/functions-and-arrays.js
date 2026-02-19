// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    return a > b ? a : b
}

console.log(maxOfTwoNumbers(1, 2))


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {

    if (arr.length === 0) {
        return null
    }

    let longestWord = arr[0];

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i]
        }

        }
        
        return longestWord
}


console.log(findLongestWord(words))




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let result = 0;

    if (arr.length === 0) {
        return result = 0;
    } else if (arr.length === 1) {
        return arr[0]
    }

    arr.forEach(element => {
        result += element
    });

    return result
}





// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    
    if (arr.length === 0) {
        return 0
    }

    let sum = 0;

    arr.forEach(function(element) {
        sum += element
    })

    const avarage = sum / arr.length

    return avarage
}

console.log(averageNumbers(numbers2))






// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    if (arr.length === 0) {
        return null
    }

    if (arr.includes(word)) {
        return true 
    } else {
        return false
    }

}

console.log(doesWordExist(words2, "subset"))
console.log(doesWordExist(words2, "hola"))