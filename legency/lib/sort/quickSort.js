/*
 * @file 快速排序
 * @author footman101 (houyuxin82@gmail.com)
 * @date Sun Oct 11 2015
 */

function exchange (array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

function quicksort(array, p, q) {
    if (p >= q) {
        return;
    }
    var pivot = p;
    for (var i = p + 1; i <= q; i++) {
        if (array[i] < array[p]) {
            pivot++;
            exchange(array, i, pivot);
        }
    }

    exchange(array, p, pivot);

    quicksort(array, p, pivot - 1);
    quicksort(array, pivot + 1, q);
}

exports.sort = function (array) {
    quicksort(array, 0, array.length - 1);
};
