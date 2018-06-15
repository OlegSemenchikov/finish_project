document.addEventListener('DOMContentLoaded', function() {
    var arr = [13, 56, 5, 10, 15, 9, 1, 4, 12, 34];

    for (var i = 0; i < arr.length-1; i++){
        for (var j = 0; j < arr.length-1; j++){
            if (arr[j]> arr[j+1]) {
                var maxArr = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = maxArr;
            }
        }
    }

    console.log(arr);
});