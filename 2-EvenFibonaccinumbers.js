function fiboEvenSum(x) {
    var list = [1, 1];
    for (var i = 1; i <= x; i++) {
        let a = list[i] + list[i - 1];
        if (a < 4000000) {
            list.push(a);
        } else {
            break;
        }
    }
    console.log(list);
    return list.filter(i => i % 2 == 0).reduce((a, b) => a + b);
}

console.log(fiboEvenSum(50));