//Problem-1: Here is  the solution of mutiplication,addition,division & substraction 
function mindGame(number){
    if(typeof number !== 'number'){
        return 'Please submit a valid Number'
    }
    else if(number < 0){
        return 'Please submit a positive Number'
    }
    let multiply = number * 3;
    let addition = multiply + 10;
    let division = addition / 2;
    let substraction = division - 5;
    return substraction;  
}
const final1 = mindGame(5);
console.log(final1)

//Problem-2:

function evenOdd(character){
    if(typeof character !== 'string'){
        return 'Please submit a valid String'
    }
        if(character.length % 2 == 0){
            return 'Even';
        }
        else if(character.length % 2 == 1){
            return 'Odd';
        }
    }
const final2 = evenOdd('names');
console.log(final2)

//Problem-3

function isLGSeven(number){
    if(typeof number !== 'number'){
        return 'Please submit a valid Number'
    }
    let substraction = number - 7;
    if(substraction >= 7){
        return substraction * 2;
    }
    else{
        return substraction;
    }
}
const final3 = isLGSeven(20);
console.log(final3)

//Problem-4:

function findingBadData(numbers){
    const negative = [];
    for(i = 0; i < numbers.length; i++){
        let number = numbers[i];
        console.log(number)
        if(number < 0){
            negative.push(number);
        }
    }
}

const numbers = [12,53,-33,34,-65,34,-35];
const final4 = findingBadData(numbers);
console.log(negative)