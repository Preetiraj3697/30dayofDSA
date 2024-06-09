// Insertion Sort
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++){
        var currVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currVal; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currVal;
    }
    return arr;
}

const res = insertionSort([2, 1, 5, 9, 4]);
console.log(res);