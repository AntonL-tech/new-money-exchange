// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let obj = {},
        half, quarters, dimes, nickels, div;
    if (currency <= 0) {
        return {};
    } else if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        if (currency % 50 == 0) {
            half = currency / 50;
            obj = {"H" : half};
        } else {
            half = Math.floor(currency / 50);
            div = currency % 50;
            if (div % 25 == 0) {
                quarters = div / 25;
                obj =  {"H": half, "Q": quarters};
            } else {
                quarters = Math.floor(div / 25);
                div = currency % 25;
                if (div % 10 == 0) {
                    dimes = div / 10;
                    obj = {"H": half, "Q": quarters, "D": dimes};
                } else {
                    dimes = Math.floor(div / 10);
                    div = currency - 50 * half - 25 * quarters - 10 * dimes;
                    if (div % 5 == 0) {
                        nickels = div / 5;
                        obj = {"H": half, "Q": quarters, "D": dimes, "N": nickels};
                    } else {
                        nickels = Math.floor(div / 5);
                        div = currency % 5;
                        obj =  {"H": half, "Q": quarters, "D": dimes, "N": nickels, "P": div};
                    }
                }
            }
        }
    }
    for (let key in obj) {
        if (obj[key] == 0 || obj[key] == '') {
            delete obj[key];
        }
    }
    return obj;
};
