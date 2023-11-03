import { App } from "vue";
import copy from "./copy";
import waterMarker from "./waterMarker";
import draggable from "./draggable";
import debounce from "./debounce";
import throttle from "./throttle";
import longpress from "./longpress";

const directivesList: any = {
	copy,
	waterMarker,
	draggable,
	debounce,
	throttle,
	longpress,
};
export const directives = {
	install: function (app: App<Element>) {
		Object.keys(directivesList).forEach((key) => {
			app.directive(key, directivesList[key]);
		});
	},
};

// 引入utils下的所有文件并同时导出所需内容
export {
	debounceRest,
	isEvenOrOdd,
	isType,
	customScroll,
	handleDiagramInteraction,
} from "../utils";
