//当页面没有竖向滚动条，如果滚动滑轮有横向滚动条，则鼠标滚轮控制页面横向滚动
export function customScroll(event: WheelEvent, elementClassName: string) {
	const container = document.querySelector(elementClassName) as HTMLElement;
	if (container.scrollHeight === container.clientHeight) {
		const delta = Math.max(-1, Math.min(1, event.deltaY || -event.detail));
		const scrollDistance = 30;
		container.scrollLeft += scrollDistance * delta;
		event.preventDefault();
	}
}
