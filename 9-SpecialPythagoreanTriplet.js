function SpecialPythagoreanTriplet(){
    for(let i = 1; i < 1000; i++)
        for(let j = i; j < 1000; j++)
            for(let k = j; k < 1000; k++)
                if(i * i + j * j == k * k && i + j + k === 1000){
                    console.log(i, j, k);
                    let result = [i, j, k];
                    return result.reduce((a, b) => a*b);
                }
}
SpecialPythagoreanTriplet();