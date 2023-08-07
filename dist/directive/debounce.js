const debounce = {
    mounted(el, binding) {
        if (typeof binding.value !== "function") {
            throw "callback must be a function";
        }
        let timer = null;
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
    beforeUnmount(el) {
        el.removeEventListener("input", el.__handleInput__);
    },
};
export default debounce;
