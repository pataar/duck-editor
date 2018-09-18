import DuckPlugin from "./DuckPlugin";

export default interface DuckProps {
	onChange?: Function,
	value?: any,
	language?: string,
	plugins?: Array<any>,
	toolbar?: Array<string | JSX.Element>,
}