function findLCM(){
    let num = 10;
    while(true){
        if(num % 2 === 0 && num % 4 === 0 && num % 5 === 0 && num % 7 === 0 && num % 8 === 0 && num % 9 === 0 && num % 11 === 0 && num % 13 === 0  && num % 4 === 0  && num % 16 === 0 && num % 17 === 0  && num % 19 === 0  && num % 20 === 0)
            return num
        else{
            num++
        }
    }
    console.log(num);
}

findLCM();