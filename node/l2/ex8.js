const double = (number) => {
    if (typeof number !== 'number') {
        return 'use number'
    } else {
        return number * 2
    }
}

console.log(double(2));
console.log(double('sss'));
