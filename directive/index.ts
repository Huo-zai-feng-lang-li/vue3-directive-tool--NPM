import { App } from "vue";
import copy from "./copy";
import waterMarker from "./waterMarker";
import draggable from "./draggable";
import debounce from "./debounce";
import throttle from "./throttle";
import longpress from "./longpress";
// 引入utils下的index.js文件
import { debounceRest } from "../utils";
const directivesList: any = {
	copy,
	waterMarker,
	draggable,
	debounce,
	throttle,
	longpress,
};
const directives = {
	install: function (app: App<Element>) {
		Object.keys(directivesList).forEach((key) => {
			app.directive(key, directivesList[key]);
		});
	},
};
export { directives, debounceRest };
