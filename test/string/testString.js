/*
 * @file 字符串测试
 * @author footman101 (houyuxin82@gmail.com)
 * @date Fri Oct 16 2015
 */

var random = require('../../lib/random/random');
var lcs = require('../../lib/string/lcs');

for (var i = 0; i < 200; i++) {
    var s1 = random.string(1000);
    var s2 = random.string(1000);
    console.log(lcs.computeLcs(s1, s2).length / 1000);
}

