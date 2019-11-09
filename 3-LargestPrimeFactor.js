function largestPrimeFactor(number) {
    var i = 2;
    while (i <= number) {
        if (number % i == 0) {
            number /= i;
        } else {
            i++;
        }
        console.log("Number is", number);
        console.log("i is", i);
    }
    console.log(i);
}
largestPrimeFactor(600851475143);