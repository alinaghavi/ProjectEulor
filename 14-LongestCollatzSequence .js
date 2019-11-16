function calculateCollatzNumber(n){
    let result = 1;
    while( n > 1){
        if(n % 2 === 0)
        {
            n = n / 2
        }
        else
        {
            n = 3 * n + 1
        }
        result++;
    }
    return result;
}

function LongestCollatzSequence(){
    let max = 0;
    for(let i = 1; i <= 1000000; i++){
        if (calculateCollatzNumber(i) > max)
        {
            max = calculateCollatzNumber;
        }
    }
    return max;
}

LongestCollatzSequence();