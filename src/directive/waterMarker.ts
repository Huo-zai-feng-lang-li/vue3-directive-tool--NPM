/*
  需求：给整个页面添加背景水印。
  思路：
    1、使用 canvas 特性生成 base64 格式的图片文件，设置其字体大小，颜色等。
    2、将其设置为背景图片，从而实现页面或组件水印效果
  
  使用：设置水印文案，颜色，字体大小即可
  <div v-waterMarker="{text:'版权所有',textColor:'rgba(180, 180, 180, 0.4)'}"></div>
*/
import { Directive, DirectiveBinding } from "vue";

const addWaterMarker: Directive = (
  text: string,
  elNode: any,
  font: any,
  textColor: string
) => {
  // 水印文字，父元素，字体，文字颜色
  const can: HTMLCanvasElement = document.createElement("canvas");
  elNode.appendChild(can);
  can.width = 205;
  can.height = 140;
  can.style.display = "none";
  const cans = can.getContext("2d") as CanvasRenderingContext2D;
  cans.rotate((-20 * Math.PI) / 180);
  cans.font = font || "16px 思源黑体";
  cans.fillStyle = textColor || "rgba(180, 180, 180, 0.3)";
  cans.textAlign = "left";
  cans.textBaseline = "Middle" as CanvasTextBaseline;
  cans.fillText(text, can.width / 10, can.height / 2);
  elNode.style.backgroundImage = "url(" + can.toDataURL("image/png") + ")";

  /* 
	 监听父元素的变化
	Q: 为什么要监听父元素的变化？不监听canvas元素的变化？
	A: 因为如果监听当前删除监听不到了，所以监听父元素里面的属性变化，如果变化了，就重新应用水印
	*/
  handleEMutation(elNode, text, font, textColor);
};

// 监听父元素的变化
let observer: MutationObserver;
const handleEMutation = (
  elNode: any,
  text: string,
  font: any,
  textColor: string
) => {
  observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        (mutation.target === elNode || elNode.contains(mutation.target))
      ) {
        // 重新应用水印
        addWaterMarker(text, elNode, font, textColor);
        break;
      }
    }
  });

  // 配置并开始监视
  const observerConfig = { attributes: true, attributeFilter: ["style"] };
  observer.observe(elNode, observerConfig);
};

const waterMarker = {
  mounted(el: DirectiveBinding, binding: DirectiveBinding) {
    addWaterMarker(
      binding.value.text,
      el,
      binding.value.font,
      binding.value.textColor
    );
  },
  // 移除 MutationObserver 防止内存泄漏
  beforeUnmount() {
    observer.disconnect();
  },
};

export default waterMarker;
