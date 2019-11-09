function isPalindromic(n){
    let reverseNumber = String(n).split("").reverse().join("");
    if(String(n) === reverseNumber){
        return true;
    }
    return false;
}

function findBiggestPoly() {
    let items = [];
    for(let i = 999; i >= 100; i--)
        for(let j = 999; j >= 100; j--)
            if(isPalindromic(i * j) && i*j >900000) {
                items.push(i * j);
            }
    return items;
}

findBiggestPoly();