function vowelsCount(str){
    str = str.toLowerCase()
    var count = 0;
    var dict = "aeiou";
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < dict.length; j++) {
            if (str[i] == dict[j])
                count += 1;
        }
    }
    return count;
}

function vowelsCounting(){
    var str1 = vowelsCount( 'abracadabra' );
    var str2 = vowelsCount( 'ABRACADABRA' );
    var str3 = vowelsCount( 'o a kak ushakov lil vo kashu kakao' );
    var str4 = vowelsCount( 'my pyx' );

    console.clear();
    console.log(str1);
    console.log(str2);
    console.log(str3);
    console.log(str4);

    document.getElementsByClassName("results")[0].innerHTML = `abracadabra: ${str1} <br/> 
                                                                ABRACADABRA: ${str2} <br/> 
                                                                o a kak ushakov lil vo kashu kakao: ${str3} <br/> 
                                                                my pyx: ${str4}`;
}