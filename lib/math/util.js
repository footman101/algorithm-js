/*
 * @file 数学相关的一些小算法
 * @author footman101 (houyuxin82@gmail.com)
 * @date Fri Oct 30 2015
 */

// 最大公约数
exports.gcd = function (p, q) {
    if (q === 0) {
        return p;
    }
    return this.gcd(q, p % q);
};

// 判断素数
exports.isPrime = function (n) {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i * i <= n; i++) {
        if (n % i === 0){
            return false;
        }
    }
    return true;
};