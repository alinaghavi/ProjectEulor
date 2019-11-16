function makeTriangle(n){
    return n * (n + 1) /2;
}

function numberOfDivisions(n){
    let divisors = [];
    let max = n - 1;
    divisors.push(1);
    divisors.push(n);

    for(var i=2; i<max; i++) {
        if(n % i == 0) {
            divisors.push(i);
            divisors.push(n / i);
            max = n / i;
        }
    }
    return divisors.length;
}

function triangleNumbers(){
    let i = 1;
    while(true){
        let triangleNum = makeTriangle(i);
        if(numberOfDivisions(triangleNum) < 10 ) return triangleNum;
        i++;
    }
}

triangleNumbers();