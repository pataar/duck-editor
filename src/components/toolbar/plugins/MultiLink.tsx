import * as React from "react";
import { DuckToolbarPluginProps } from "../../../definitions/DuckToolbarPluginProps";
import { RichUtils } from "draft-js";
import DuckToolbarButton from "../../../definitions/DuckToolbarButton";

class MultiLink extends React.Component<DuckToolbarPluginProps, {}> {
	constructor(props: any) {
		super(props);

		this.openLinkModal = this.openLinkModal.bind(this);

		this.state = {
			modal_open: false
		};
	}

	openLinkModal() {

	}

	renderModal() {

		const modalStyle = {
			display: 'block'
		};

		return <div style={ modalStyle }>Url</div>
	}

	render() {
		return (
			<DuckToolbarButton active={false} onClick={() => this.openLinkModal()}>
				URL
				{this.renderModal()}
			</DuckToolbarButton>
		);
	}
}

export default MultiLink;
