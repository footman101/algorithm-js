/*
 * @file 随机生成一些东西
 * @author footman101 (houyuxin82@gmail.com)
 * @date Sun Oct 11 2015
 */

exports.array = function (len, min, max) {
    var array = [];
    var min = min || 0;
    var max = max || 100;
    for (var i = 0; i < len; i++) {
        array.push(~~(Math.random() * (max - min) + min + 1));
    }
    return array;
};

exports.string = function (len) {
    var min = 97;
    var max = 122;

    var charArray = this.array(len, min, max);
    return String.fromCharCode.apply(null, charArray);
};