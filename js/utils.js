// Takes a number and counts its number of decimal digits
export function countDecimals(number){

    if (Math.floor(number) === number){
        return 0;
    } else {
        return number.toString().split(".")[1].length
    }

}

// 