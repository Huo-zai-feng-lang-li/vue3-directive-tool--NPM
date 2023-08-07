/**
 * @description 防抖指令 自定义指令适用于简单的场景，复杂的场景建议使用utils中的防抖函数 src/utils/debounce/index.ts
 * @param { function } value - 回调函数
 * 什么是防抖：在一定时间间隔内，只执行最后一次触发的函数。当事件频繁触发时，防抖会取消之前的触发操作，只执行最后一次触发的操作。
 * 与节流不同的是，防抖只会执行最后一次触发的操作。节流则一定时间间隔内，只执行一次函数。
 * @example 
            <el-input
                v-debounce="debounceInput"
                v-model.trim="iptVal"
                placeholder="防抖输入框 (0.5秒后执行)"
                style="width: 200px"
            />
 * @author zk
 * @createDate 2023/06/26 17:20:44
 * @lastFixDate 2023/08/4 17:20:55
 */
import type { Directive, DirectiveBinding } from "vue";
interface ElType extends HTMLElement {
  __handleInput__: () => void;
}

const debounce: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    if (typeof binding.value !== "function") {
      throw "callback must be a function";
    }
    let timer: NodeJS.Timeout | null = null;
    el.__handleInput__ = function () {
      if (timer) {
        clearInterval(timer);
      }
      timer = setTimeout(() => {
        binding.value();
      }, 500);
    };
    el.addEventListener("input", el.__handleInput__);
  },
  beforeUnmount(el: ElType) {
    el.removeEventListener("input", el.__handleInput__);
  },
};

export default debounce;
