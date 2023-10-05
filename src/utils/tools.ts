export function isEvenOrOdd(num: number) {
	// 检查输入是否为数字
	if (typeof num !== "number") {
		return "not a number";
	}

	// 判断数字类型
	const judgeNumberType = (num: number, isInteger: boolean): string => {
		if (num < 0) {
			return isInteger ? "负整数" : "负小数";
		} else {
			return isInteger ? "正整数" : "正小数";
		}
	};

	// 检查输入是否为整数
	if (Number.isInteger(num)) {
		return judgeNumberType(num, true);
	} else if (num % 1 !== 0) {
		return judgeNumberType(num, false);
	}
}
