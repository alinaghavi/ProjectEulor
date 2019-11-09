function  sumOfTheSquares(number) {
    let result = 0;
    for(let i = 1; i <= number; i++){
        result += i*i;
    }
    return result;
}

function  squareOfTheSum(number) {
    let result = 0;
    for(let i = 1; i <= number; i++){
        result += i;
    }
    return result*result;
}

console.log(squareOfTheSum(100) - sumOfTheSquares(100));