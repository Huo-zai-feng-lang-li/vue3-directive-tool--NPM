const directive = {
    mounted(el, binding) {
        if (typeof binding.value !== "function") {
            throw "callback must be a function";
        }
        let pressTimer = null;
        const start = (e) => {
            if (e.button) {
                if (e.type === "click" && e.button !== 0) {
                    return;
                }
            }
            if (pressTimer === null) {
                pressTimer = setTimeout(() => {
                    handler(e);
                }, 1000);
            }
        };
        const cancel = () => {
            if (pressTimer !== null) {
                clearTimeout(pressTimer);
                pressTimer = null;
            }
        };
        const handler = (e) => {
            binding.value(e);
        };
        el.addEventListener("mousedown", start);
        el.addEventListener("touchstart", start);
        el.addEventListener("click", cancel);
        el.addEventListener("mouseout", cancel);
        el.addEventListener("touchend", cancel);
        el.addEventListener("touchcancel", cancel);
    },
};
export default directive;
