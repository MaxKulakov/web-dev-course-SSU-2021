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

function inputTableFormat(){
    var val1 = document.getElementById('input1').value;
    var val2 = document.getElementById('input2').value;
    var val3 = document.getElementById('input3').value;
    document.getElementsByClassName("output")[0].innerHTML = tableFormat(parseInt(val1), parseInt(val2), val3);
}

function clearInput3(){
    document.getElementById('input1').value = "";
    document.getElementById('input2').value = "";
    document.getElementById('input3').value = "";
}

function stringToTable(){
    var str1 = tableFormat( 4, 4, "Hello world!" );
    var str2 = tableFormat( 4, 3, "Nice pattern" );
    var str3 = tableFormat( 3, 4, "Nice pattern" );

    document.getElementsByClassName("results")[0].innerHTML = `
    <h2>Форматирование строки в таблицу</h2>
    <p>Напишите функцию, которая принимает на вход два положительных целых числа и строку. 
    Первое число – количество строк в таблице, второе число – количество столбцов, 
    строка – сообщение, которое нужно поместить в таблицу. Каждая ячейка 
    таблицы должна содержать один символ строки. Таблица заполняется символами 
    слева направо и сверху вниз. Если в строке больше символов, чем ячеек в таблице, 
    то лишние символы обрезаются. Если меньше – лишние ячейки остаются пустыми.</p>
    
    <input id="input1" type="number" placeholder="Введите y">
    <input id="input2" type="number" placeholder="Введите x">
    <input id="input3" type="text" placeholder="Введите строку">
    <button onclick="clearInput3()">Очистить ввод</button>
    <button onclick="inputTableFormat()">Выполнить</button>
    
    <div class="output"></div><br/>

    <div class="template">
        Примеры ввода-вывода: <br/>
        4, 4, "Hello world!": <br/> ${str1} <br/>                                                         
        4, 3, "Nice pattern": <br/> ${str2} <br/>                                      
        3, 4, "Nice pattern": <br/> ${str3} <br/>
    </div>`;
}