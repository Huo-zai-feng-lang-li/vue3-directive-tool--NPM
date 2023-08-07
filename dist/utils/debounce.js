export function debounceRest(fn, delay = 250) {
    let timer = null;
    return function (...args) {
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(() => fn.apply(fn, args), delay);
    };
}
