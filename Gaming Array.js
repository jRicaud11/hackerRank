//Link = https://www.hackerrank.com/challenges/an-interesting-game-1/problem

let arr1 =  [1, 3, 5, 7, 9];
let arr2 = [7, 4, 6, 5, 9];

function gamingArray(arr) {
    let maxNumber = 0;
    let turnsPlayed = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maxNumber) {
            maxNumber = arr[i];
            turnsPlayed++
        }
    }

    return (turnsPlayed % 2) ? 'BOB' : 'ANDY'
};

console.log(gamingArray(arr1))
console.log(gamingArray(arr2))