export function isEvenOrOdd(num) {
    if (typeof num !== "number") {
        return "not a number";
    }
    const judgeNumberType = (num, isInteger) => {
        if (num < 0) {
            return isInteger ? "负整数" : "负小数";
        }
        else {
            return isInteger ? "正整数" : "正小数";
        }
    };
    if (Number.isInteger(num)) {
        return judgeNumberType(num, true);
    }
    else if (num % 1 !== 0) {
        return judgeNumberType(num, false);
    }
}
