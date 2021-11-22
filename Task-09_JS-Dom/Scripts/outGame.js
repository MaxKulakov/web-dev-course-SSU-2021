function Game(n, k) {
    k--;
    
    var gameList = [];
    for (var i = 1; i <= n; i++) {
        gameList.push(i);
    }

    var i = 0;
    while (gameList.length > 1) {
        var k_temp = k;
        if (k > gameList.length) {
            k = k % gameList.length;
        }
        i += k;
        k = k_temp;

        while (i > gameList.length) {
            i = i - gameList.length;
        }
        if (i == gameList.length) {
            i = 0;
        }
        gameList.splice(i, 1);
    }
    return gameList;
}

function inputOutGame(){
    var val1 = document.getElementById('input1').value;
    var val2 = document.getElementById('input2').value;
    document.getElementsByClassName("output")[0].innerHTML = Game(val1, val2);
}

function clearInput2(){
    document.getElementById('input1').value = "";
    document.getElementById('input2').value = "";
}

function outGame() {
    var game1 = Game( 7, 3 );
    var game2 = Game( 11, 19 );
    var game3 = Game( 1, 300 );
    var game4 = Game( 14, 2 );
    var game5 = Game( 100, 1 );

    document.getElementsByClassName("results")[0].innerHTML = `
    <h2>Игра на выбывание</h2>
    <p>Напишите функцию, которая принимает два параметра – количество участников в круге n и шаг k, 
    на котором участник выбывает из круга в ходе одного раунда. Каждый раунд функция исключает 
    одного участника и продолжает определять выбывших по кругу до тех пор, пока круг не сократится 
    до одного победителя, то есть функция должна работать как считалочка и возвращать номер победителя. 
    Например, вызов с аргументами (7, 3) означает, что в круге 7 участников и выбывает каждый третий.</p>
    
    <input id="input1" type="text" placeholder="Введите n">
    <input id="input2" type="text" placeholder="Введите k">
    <button onclick="clearInput2()">Очистить ввод</button>
    <button onclick="inputOutGame()">Выполнить</button>
    
    <div class="output"></div><br/>

    <div class="template">
        Примеры ввода-вывода: <br/>
        7, 3: ${game1} <br/>                                                            
        11, 19: ${game2} <br/>                                                     
        1, 300: ${game3} <br/>                                                             
        14, 2: ${game4} <br/>                                                             
        100, 1: ${game5}
    </div>`;
}