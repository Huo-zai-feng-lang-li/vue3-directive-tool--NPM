export const isType = <T>(obj: T): string => {
	return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};
