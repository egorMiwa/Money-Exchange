module.exports = function makeExchange(currency) {
    if (currency > 10000) return  {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency <= 0) return {};
    res = {};
    num = {"H": 50, "Q": 25, "D": 10, "N": 5, "P": 1};

    while (currency > 0) {
        for (var a in num) {
            if (num[a] <= currency) {
                res[a] = res[a] || 0;
                res[a]++;
                currency -= num[a];
                break;
            }
        }
    }
    return res;
};
