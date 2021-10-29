function stringToBinary(str){
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        arr.push(' 0' + str[i].charCodeAt(0).toString(2));
    }
    return arr;
}

function binaryWord(){
    var str1 = stringToBinary( 'man' );
    var str2 = stringToBinary( 'AB' );
    var str3 = stringToBinary( 'wecking' );
    var str4 = stringToBinary( 'Ruby' );
    var str5 = stringToBinary( 'Yosemite' );

    console.clear();
    console.log(str1);
    console.log(str2);
    console.log(str3);
    console.log(str4);
    console.log(str5);

    document.getElementsByClassName("results")[0].innerHTML = `man: [${str1}] <br/> 
                                                                AB: [${str2}] <br/> 
                                                                wecking: [${str3}] <br/> 
                                                                Ruby: [${str4}] <br/> 
                                                                Yosemite: [${str5}]`;
}