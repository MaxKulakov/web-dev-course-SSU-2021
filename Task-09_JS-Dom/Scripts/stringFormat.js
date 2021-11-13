function wordRepeater(str){
    var result = "";
    str = str.toLowerCase()
    for (var i = 0; i < str.length; i++) {
        result += str[i].toUpperCase();
        for (var j = 1; j < i+1; j++){
            result += str[i];
        }
        if (i != str.length - 1)
            result += "-";
    }
    return result;
}

function stringFormat(){
    var str1 = wordRepeater( "abcd" );
    var str2 = wordRepeater( "RqaEzty" );
    var str3 = wordRepeater( "cwAt" );

    console.clear();
    console.log(str1);
    console.log(str2);
    console.log(str3);

    document.getElementsByClassName("results")[0].innerHTML = `abcd: ${str1} <br/> 
                                                                RqaEzty: ${str2} <br/> 
                                                                cwAt: ${str3}`;
}