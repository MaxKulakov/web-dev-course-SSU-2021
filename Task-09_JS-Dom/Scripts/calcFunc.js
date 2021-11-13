function mathOperation (y, sym, x){
    switch(sym) {
        case '+':  
            return x + y;
        case '-':  
            return x - y;
        case '*':  
            return x * y;
        case '/':  
            return Math.floor(x / y);
        }
}


function zero(exp) {
    if (typeof exp != "undefined") {
        return mathOperation(exp[0], exp[1], 0);
    }
    else {
        return 0;
    }
}

function one(exp) {
    if (typeof exp != "undefined") {
        return mathOperation(exp[0], exp[1], 1);
    }
    else {
        return 1;
    }
}

function two(exp) {
    if (typeof exp != "undefined") {
        return mathOperation(exp[0], exp[1], 2);
    }
    else {
        return 2;
    }
}

function three(exp) {
    if (typeof exp != "undefined") {
        return mathOperation(exp[0], exp[1], 3);
    }
    else {
        return 3;
    }
}

function four(exp) {
    if (typeof exp != "undefined") {
        return mathOperation(exp[0], exp[1], 4);
    }
    else {
        return 4;
    }
}

function five(exp) {
    if (typeof exp != "undefined") {
        return mathOperation(exp[0], exp[1], 5);
    }
    else {
        return 5;
    }
}

function six(exp) {
    if (typeof exp != "undefined") {
        return mathOperation(exp[0], exp[1], 6);
    }
    else {
        return 6;
    }
}

function seven(exp) {
    if (typeof exp != "undefined") {
        return mathOperation(exp[0], exp[1], 7);
    }
    else {

        return 7;
    }
}

function eight(exp) {
    if (typeof exp != "undefined") {
        return mathOperation(exp[0], exp[1], 8);
    }
    else {
        return 8;
    }
}

function nine(exp) {
    if (typeof exp != "undefined") {
        return mathOperation(exp[0], exp[1], 9);
    }
    else {
        return 9;
    }
}


function plus(num) {
    return [num, '+']
}

function minus(num) {
    return [num, '-']
}

function times(num) {
    return [num, '*']
}

function dividedBy(num) {
    return [num, '/']
}


function calcFunc() {
    var res1 = seven(times(five()));
    var res2 = four(plus(nine()));
    var res3 = eight(minus(three()));
    var res4 = six(dividedBy(two()));
    var res5 = eight(dividedBy(three()));
    var res6 = three(times(three(times(three()))));
    var res7 = two(plus(two(times(two(minus(one()))))));
    var res8 = zero(plus(one(dividedBy(one()))));
    var res9 = one(dividedBy(zero()));
    var res10 = one();

    document.getElementsByClassName("results")[0].innerHTML = `seven(times(five())): ${res1} <br/>
                                                                four(plus(nine())): ${res2} <br/>
                                                                eight(minus(three())): ${res3} <br/>
                                                                six(dividedBy(two())): ${res4} <br/>
                                                                eight(dividedBy(three())): ${res5} <br/>
                                                                three(times(three(times(three())))): ${res6} <br/>
                                                                two(plus(two(times(two(minus(one())))))): ${res7} <br/>
                                                                zero(plus(one(dividedBy(one())))): ${res8} <br/> 
                                                                one(dividedBy(zero())): ${res9} <br/>
                                                                one(): ${res10} <br/>`;
}