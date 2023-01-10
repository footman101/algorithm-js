/*
 * @file LCS - Longest Common Subsequence
 * @author footman101 (houyuxin82@gmail.com)
 * @date Fri Oct 16 2015
 */

function genArray(m, n) {
    var ret = [];
    for (var i = 0; i < m; i++) {
        var row = [];
        for (var j = 0; j < n; j++) {
            row [j] = 0;
        }
        ret[i] = row;
    }
    return ret;
}

exports.computeLcs = function (x, y) {
    var m = x.length;
    var n = y.length;
    // 计数矩阵
    var C = genArray(m + 1, n + 1);
    // 方向矩阵
    var B = genArray(m + 1, n + 1);
    // 计算
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (x.charAt(i - 1) === y.charAt(j - 1)) {
                C[i][j] = C[i - 1][j - 1] + 1;
                B[i][j] = 0;
            }
            else {
                if (C[i - 1][j] >= C[i][j - 1]) {
                    C[i][j] = C[i - 1][j];
                    B[i][j] = 1;
                }
                else {
                    C[i][j] = C[i][j - 1];
                    B[i][j] = -1;
                }
            }
        }
    }
    // 回溯
    var px = m;
    var py = n;
    var lcsChar = [];
    while (px > 0 && py > 0) {
        if (B[px][py] === 0) {
            px--;
            py--;
            lcsChar.unshift(x.charAt(px));
        }
        else if (B[px][py] === 1) {
            px--;
        }
        else if ((B[px][py] === -1)) {
            py--;
        }
    }
    var lcsString = lcsChar.join('');

    return lcsString;
};