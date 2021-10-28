function flatAndSort(arr){
    return arr.flat(Infinity).sort();
}

function flatArray(){
    var arr1 = flatAndSort( [[3,2,1],[4,6,5],[],[9,7,8]] );
    var arr2 = flatAndSort( [] );
    var arr3 = flatAndSort( [[], []] );
    var arr4 = flatAndSort( [[], [1]] );
    var arr5 = flatAndSort( [[1, 3, 5], [-100], [2, 4, 6]] );
    
    console.clear();
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);
    console.log(arr5);

    document.getElementsByClassName("results")[0].innerHTML = `[[3,2,1],[4,6,5],[],[9,7,8]]: [${arr1}] <br/> 
                                                                []: [${arr2}] <br/> 
                                                                [[], []]: [${arr3}] <br/> 
                                                                [[], [1]]: [${arr4}] <br/> 
                                                                [[1, 3, 5], [-100], [2, 4, 6]]: [${arr5}]`;
}