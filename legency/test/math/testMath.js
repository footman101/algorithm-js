/*
 * @file Math工具类测试
 * @author footman101 (houyuxin82@gmail.com)
 * @date Fri Oct 30 2015
 */

var mathUtil = require('../../lib/math/util');

var p = 100;
var q = 50;
console.log(mathUtil.gcd(p, q));

console.log(mathUtil.isPrime(4));
console.log(mathUtil.isPrime(5));
console.log(mathUtil.isPrime(243242345));


