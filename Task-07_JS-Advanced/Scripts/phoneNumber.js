function arrayToPhone(arr) {
    if (arr.length != 10 ) {
        return 'Invalid input';
    }
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] != "number" || arr[i] < 0 || arr[i] > 9 || !Number.isInteger(arr[i])) {
            return 'Invalid input';
        }
    }
    var str = `+7 (${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}-${arr[8]}${arr[9]}`;
    return str;
}

function phoneNumber() {
    var arr1 = arrayToPhone( [9, 0, 0, 1, 1, 1, 2, 2, 3, 3] );
    var arr2 = arrayToPhone( [9, 2, 7, 5, 5, 5, 6, 6, 9, 0] );
    var arr3 = arrayToPhone( [1, 2, 3, 4, 5, 6, 7, 8, 9, -11] );
    var arr4 = arrayToPhone( [] );
    var str1 = arrayToPhone( 'aw93fha=' );

    document.getElementsByClassName("results")[0].innerHTML = `[9, 0, 0, 1, 1, 1, 2, 2, 3, 3]: ${arr1} <br/> 
                                                                [9, 2, 7, 5, 5, 5, 6, 6, 9, 0]: ${arr2} <br/> 
                                                                [1, 2, 3, 4, 5, 6, 7, 8, 9, -11]: ${arr3} <br/> 
                                                                []: ${arr4} <br/> 
                                                                'aw93fha=': ${str1}`;
}