const draggable = {
    mounted: function (el) {
        const oDiv = el;
        oDiv.onmousedown = function (e) {
            const disX = e.clientX - oDiv.offsetLeft;
            const disY = e.clientY - oDiv.offsetTop;
            const oParent = oDiv.parentNode;
            document.onmousemove = function (e) {
                let l = e.clientX - disX;
                let t = e.clientY - disY;
                const w = oParent.clientWidth - oDiv.offsetWidth;
                const h = oParent.clientHeight - oDiv.offsetHeight;
                if (l < 0) {
                    l = 0;
                }
                else if (l > w) {
                    l = w;
                }
                if (t < 0) {
                    t = 0;
                }
                else if (t > h) {
                    t = h;
                }
                oDiv.style.left = l + "px";
                oDiv.style.top = t + "px";
            };
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };
    },
};
export default draggable;
