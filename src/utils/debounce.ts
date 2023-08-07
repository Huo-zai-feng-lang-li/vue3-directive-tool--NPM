/**
 * 防抖函数，用于限制某个函数在一段时间内只能被调用一次
 * @param  A 函数的参数
 * @param  R 函数的返回值
 * @param { function } fn 要执行的函数
 * @param { number } delay 延迟的时间，以毫秒为单位
 * @example:
 * <template>
 *     <el-button type="primary" @click="onDbo('我是参数')"
 *       >防抖按钮 (0.5秒后执行)</el-button
 *     >
 * </template>
 *
 * <script setup lang="ts">
 *   import { debounceRest } from "@/utils/debounce";
 *   const onDbo = debounce((valStr: string) => {
 *     console.log("😂👨🏾‍❤️‍👨🏼==>：", valStr);
 *   }, 250);
 * </script>
 * @returns {(...args: A) => void} 返回一个新的函数，该函数具有防抖效果 !!!
 */
export function debounceRest<A extends any[], R>(
	fn: (...args: A) => R,
	delay = 250
) {
	let timer: NodeJS.Timeout | null = null;

	/**
	 * 新的函数，具有防抖效果
	 * @param args 函数的参数
	 * Q: 为什么要使用箭头函数？
	 * A: 箭头函数没有自己的this，所以箭头函数中的this就是外层代码块的this
	 */
	return function (...args: A) {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => fn.apply(fn, args), delay);
	};
}
