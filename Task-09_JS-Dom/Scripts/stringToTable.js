function tableFormat(y, x, str) {
    if (typeof x != "number" || typeof y != "number" || x < 1 || y < 1 || !Number.isInteger(x) || !Number.isInteger(y)) {
        return 'Invalid input';
    }

    var parts = [];
    for (var i = 0; i < str.length; i += x) {
        parts.push(str.substring(i, i + x));
    }
    
    // Дикие костыли для вывода красивой таблицы в интерфейс
    var result = '';
    for (var i = 0; i < y; i++) {
        for (var j = 0; j < x; j++) {
            result += `+---`;
        }
        result += `+<br/>`;
        for (var j = 0; j < x; j++) {
            if (typeof parts[i] != "undefined" && typeof parts[i][j] != "undefined") {
                if (parts[i][j] == ' ')  {
                    result += `|<span>\u00A0\u00A0\u00A0<span>`; 
                }
                else {
                    result += `| ${parts[i][j]} `;
                }
            }
            else 
                result += `|<span>\u00A0\u00A0\u00A0<span>`; 
        }
        result += "|  <br/>";
    }
    for (var j = 0; j < x; j++) {
        result += `+---`;
    }
    result += `+<br/>`;

    return (result);
}

function stringToTable(){
    var str1 = tableFormat( 4, 4, "Hello world!" );
    var str2 = tableFormat( 4, 3, "Nice pattern" );
    var str3 = tableFormat( 3, 4, "Nice pattern" );

    document.getElementsByClassName("results")[0].innerHTML = `4, 4, "Hello world!": <br/> ${str1} <br/>
                                                                4, 3, "Nice pattern": <br/> ${str2} <br/>
                                                                3, 4, "Nice pattern": <br/> ${str3} <br/>`;
}