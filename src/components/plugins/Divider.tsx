import * as React from "react";
import { DuckPluginProps } from "./DuckPluginProps";

class Divider extends React.Component<DuckPluginProps, {}> {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<div className="duck-toolbar-divider" />
		);
	}
}

export default Divider;
