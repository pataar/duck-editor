import * as React from "react";
import { DuckToolbarPluginProps } from "../../../definitions/DuckToolbarPluginProps";

class Divider extends React.Component<DuckToolbarPluginProps, {}> {
	constructor(props: any) {
		super(props);
	}

	render() {
		return <div className="duck-toolbar-divider" />;
	}
}

export default Divider;
