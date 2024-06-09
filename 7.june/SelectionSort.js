// Selection Sort code
function SelectionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        var min = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

const res = SelectionSort([2, 1, 5, 9, 4]);
console.log(res);