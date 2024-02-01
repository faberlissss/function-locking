function sumFunction() {
    let null1 = 0;
    function countSum(sum) {
        null1 = null1 + sum;
        return null1;
    }
    return countSum;
}
const counter = sumFunction();
console.log(counter(1));
console.log(counter(2));
console.log(counter(3));


