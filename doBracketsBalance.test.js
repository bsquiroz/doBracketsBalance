const doBracketsBalance = require("./doBracketsBalance");

test("true", () => {
    const str = "({}{}[][])";
    expect(doBracketsBalance(str)).toBe(true);
});

test("false", () => {
    const str = "({}{}[][]";
    expect(doBracketsBalance(str)).toBe(false);
});

test("false", () => {
    const str = "[{}{}[][]]}{";
    expect(doBracketsBalance(str)).toBe(false);
});

test("true", () => {
    const str = "{{{[[(())]]}}}";
    expect(doBracketsBalance(str)).toBe(true);
});
