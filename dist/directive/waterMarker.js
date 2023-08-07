const addWaterMarker = (text, elNode, font, textColor) => {
    const can = document.createElement("canvas");
    elNode.appendChild(can);
    can.width = 205;
    can.height = 140;
    can.style.display = "none";
    const cans = can.getContext("2d");
    cans.rotate((-20 * Math.PI) / 180);
    cans.font = font || "16px 思源黑体";
    cans.fillStyle = textColor || "rgba(180, 180, 180, 0.3)";
    cans.textAlign = "left";
    cans.textBaseline = "Middle";
    cans.fillText(text, can.width / 10, can.height / 2);
    elNode.style.backgroundImage = "url(" + can.toDataURL("image/png") + ")";
    handleEMutation(elNode, text, font, textColor);
};
let observer;
const handleEMutation = (elNode, text, font, textColor) => {
    observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === "attributes" &&
                (mutation.target === elNode || elNode.contains(mutation.target))) {
                addWaterMarker(text, elNode, font, textColor);
                break;
            }
        }
    });
    const observerConfig = { attributes: true, attributeFilter: ["style"] };
    observer.observe(elNode, observerConfig);
};
const waterMarker = {
    mounted(el, binding) {
        addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor);
    },
    beforeUnmount() {
        observer.disconnect();
    },
};
export default waterMarker;
