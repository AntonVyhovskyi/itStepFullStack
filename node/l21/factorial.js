process.on('message', (num) => {
    function factorial(n) {
        if (n === 0 || n === 1) return BigInt(1);
        let result = BigInt(1);
        for (let i = 2; i <= n; i++) {
            result *= BigInt(i);
        }
        return result;
    }
    const result = factorial(num)
    process.send(result.toString())
})