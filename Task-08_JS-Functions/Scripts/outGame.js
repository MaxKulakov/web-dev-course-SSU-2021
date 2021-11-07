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


function outGame() {
    var game1 = Game( 7, 3 );
    var game2 = Game( 11, 19 );
    var game3 = Game( 1, 300 );
    var game4 = Game( 14, 2 );
    var game5 = Game( 100, 1 );

    document.getElementsByClassName("results")[0].innerHTML = `7, 3: ${game1} <br/>
                                                                11, 19: ${game2} <br/> 
                                                                1, 300: ${game3} <br/> 
                                                                14, 2: ${game4} <br/> 
                                                                100, 1: ${game5}`;
}