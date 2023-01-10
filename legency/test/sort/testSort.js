/*
 * @file 排序测试
 * @author footman101 (houyuxin82@gmail.com)
 * @date Sun Oct 11 2015
 */

var random = require('../../lib/random/random');
var quickSort = require('../../lib/sort/quickSort');

// 快速排序
var array = random.array(10, 1, 5);
console.log(array);
quickSort.sort(array);
console.log(array);


