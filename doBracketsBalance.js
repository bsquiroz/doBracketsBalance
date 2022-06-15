const doBracketsBalance = (str) => {
    let check = 0;

    for (const i of str.split("")) {
        i === "[" || i === "{" || i === "(" ? check++ : check--;
        if (check < 0) break;
    }

    return check === 0;
};

module.exports = doBracketsBalance;
