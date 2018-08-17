import * as React from "react";
import { DuckPluginProps } from "./IDuckPluginProps";
import { RichUtils } from "draft-js";
import DuckToolbarButton from "../toolbar/DuckToolbarButton";

class MultiLink extends React.Component<DuckPluginProps, {}> {
	constructor(props: any) {
		super(props);

		this.openLinkModal = this.openLinkModal.bind(this);
	}

	openLinkModal() {

	}

	render() {
		return (
			<DuckToolbarButton active={false} onClick={() => this.openLinkModal()}>
				URL
			</DuckToolbarButton>
		);
	}
}

export default MultiLink;
