/*
Linear Search: Given an integer array and an element x, find if element is present in array or not. If element is present, then print index of its first occurrence. Else print -1.
Input: 
First line contains an integer, the number of test cases ‘T’. Each test case should be an integer. Size of the array ‘n’ in the second line. In the third line, input the integer elements of the array in a single line separated by space. Element X should be input in the fourth line, i.e., after entering the elements of array. Repeat the above steps second line onwards for multiple test cases.
Output: 
Print the output in a separate line returning the index of the element X. If the element is not present, then print -1.
Constraints: 
1 <= T <= 100 
1 <= n <= 100 
1 <= arr[i] <= 100

E.g.
Input:
2
4
1 2 3 4
3
5
10 90 20 30 40 
40
Output:
2
4
*/
const jsPrompt = require('prompt-sync')({sigint: true});

function validateInput(val) {
    if(!Number.isInteger(val) || val<1 || val>100) {
        throw "Invalid input"
    }
    return val
}

function linearSearch(arr, searchNum) {
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] == searchNum) {
            return i;
        }
    }
    return -1;
}

//Enter no. of test cases
const testCases = validateInput(Number(jsPrompt()))
const results = []

for(let i=1; i<=testCases; i++) {

    //Enter no. of elements in array
    let elementsCount = validateInput(Number(jsPrompt()))
    
    let arr = []

    //Enter elements in array
    let elements = String(jsPrompt()).split(' ')
    
    if(elements.length !== elementsCount) {
    throw 'Invalid input'
    }

    elements.forEach(element => {
    arr.push(validateInput(Number(element)))
    });

    //Enter no. to be searched
    let searchNum = validateInput(Number(jsPrompt()))
    
    console.time('linearSearch time')
    let res = linearSearch(arr, searchNum)
    console.timeEnd('linearSearch time')
    results.push(res)
}

results.forEach(result=>console.log(result))