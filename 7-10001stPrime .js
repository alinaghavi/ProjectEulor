function isPrime(number){
    for(let i = 2; i <= Math.sqrt(number); i++)
        if(number % i === 0) return false;
    return number > 1;
}

function primCount(n){
    let i = 1;
    let counter = 0;
    while(counter !== n){
        i++;
        if(isPrime(i)) counter += 1;
    }
    return i;
}

primCount(10001);