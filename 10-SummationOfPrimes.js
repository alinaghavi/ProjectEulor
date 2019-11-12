function isPrime(number) {
    let start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

function SummationOfPrimes(num) {
    let total = 0;
    for(let i = 2; i<=num; i++){
        if(isPrime(i)){
            total += + i;
        }
    }
    return total;
}

SummationOfPrimes(2000000);