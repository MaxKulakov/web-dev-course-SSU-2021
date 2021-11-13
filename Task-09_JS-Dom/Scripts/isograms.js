function isogramFunc(str){
    var dict = {};
    str = str.toLowerCase()
    for (var i = 0; i < str.length; i++) {
        if (dict[str[i]] != 1)
            dict[str[i]] = 1;
        else 
            return false;
    }
    return true;
}

function isograms(){
    var str1 = isogramFunc( "Dermatoglyphics" );
    var str2 = isogramFunc( "aba" );
    var str3 = isogramFunc( "moOse" );
    var str4 = isogramFunc( "" );

    console.clear();
    console.log(str1);
    console.log(str2);
    console.log(str3);
    console.log(str4);

    document.getElementsByClassName("results")[0].innerHTML = `Dermatoglyphics: ${str1} <br/> 
                                                                aba: ${str2} <br/> 
                                                                moOse: ${str3} <br/> 
                                                                "": ${str4}`;
}