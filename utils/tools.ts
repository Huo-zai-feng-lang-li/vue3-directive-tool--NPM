export function isEvenOrOdd(num: number): string {
	// 判断输入是否为数值类型
	if (typeof num !== "number") {
		return "输入不是一个有效的数值";
	}
	// 判断负数
	if (num < 0) {
		if (Math.abs(num) % 2 === 0) {
			return "负偶数";
		} else {
			return "负奇数";
		}
	}
	// 判断输入是否为整数
	if (Number.isInteger(num)) {
		if (num % 2 === 0) {
			return "偶数";
		} else {
			return "奇数";
		}
	}

	// 判断小数
	if (num % 1 !== 0) {
		return "小数";
	}

	// 其他情况
	return "无法判断";
}
