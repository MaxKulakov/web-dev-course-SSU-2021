function factorial(n) {
    let p = BigInt(1)
    let i = BigInt(n + 1)
    while (1 < i--) p *= i
 
    return p
 }

function Cjn(n, k){
    let fn = BigInt(factorial(n));
    let fk = BigInt(factorial(k));
    let fnk = BigInt(factorial(n - k));
    var result = BigInt(fn / fk / fnk);
    
    return result;
}

function numToSquare(n) {
    if (typeof n != "number") {
        return 'Invalid input';
    }
    if (!Number.isInteger(n)) {
        return 'Invalid input';
    }
    if (n < -200 || n > 200) {
        return 'Invalid input';
    }

    var nIsPositive = true;
    if (n < 0 ) {
        nIsPositive = false;
        n = Math.abs(n);
    }

    var result = '';
    if (n == 0) {
        result = '1';
    }
    
    else {
        for (var i = 0; i <= n; i++) {
            var CjnResult = BigInt(Cjn(n, i));
            if (CjnResult != 1) {
                result += CjnResult.toString();
            }
            if (n - i == 1) {
                result += 'a';  
            }
            if (n - i > 1) {
                result += 'a^' + (n - i);  
            }
            if (i == 1) {
                result += 'b';
            }
            if (i > 1) {
                result += 'b^' + (i);
            }
            if (i != n) {
                result += ' + ';
            }
        }
    }

    if (nIsPositive){
        return (result);
    }
    else {
        return ('1 / (' + result + ')');
    }
}

function sumSquare(){
    var num1 = numToSquare( 0 );
    var num2 = numToSquare( 1 );
    var num3 = numToSquare( 2 );
    var num4 = numToSquare( -2 );
    var num5 = numToSquare( 3 );
    var num6 = numToSquare( 5 );
    var num7 = numToSquare( 201 );
    var num8 = numToSquare( 3.14 );

    document.getElementsByClassName("results")[0].innerHTML = `0: ${num1} <br/>
                                                                1: ${num2} <br/>
                                                                2: ${num3} <br/>
                                                                -2: ${num4} <br/>
                                                                3: ${num5} <br/>
                                                                5: ${num6} <br/>
                                                                201: ${num7} <br/>
                                                                3.14: ${num8} <br/>`;
}