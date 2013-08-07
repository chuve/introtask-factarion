var max_call_i = 300, //max value call counter
    fcash = []; //cash factorials;

for (var i = 0; i <= 9; i++) {
    fcash.push(factorial(i)); //add to hash factarial of numbers from 0 till 9;
}

function factorial(n) { //take factarial
    return n ? n * factorial(n - 1) : 1;
}

function luckyNumbers(args) { //take factarion 
    var n = args.n,
        call_i = args.call_i,
        k = n.toString(),
        result = 0;

    for (var i = 0; i < k.length; i++) {
        result += fcash[k[i]];
    }

    if (result == n) {
        console.log(n);
    }

    if (call_i >= max_call_i) {
        //indirect call
        setTimeout(function () {
            luckyNumbers({
                n: n + 1,
                call_i: call_i + 1
            });
        }, 0);
    } else {
        //direct call
        luckyNumbers({
            n: n + 1,
            call_i: call_i + 1
        });
    }
}

luckyNumbers({
    n: 0,
    call_i: 0
});