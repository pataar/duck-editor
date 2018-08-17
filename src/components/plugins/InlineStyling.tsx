import * as React from "react";
import { DuckPluginProps } from "./IDuckPluginProps";
import { RichUtils } from "draft-js";
import DuckToolbarButton from "../toolbar/DuckToolbarButton";

class InlineStyling extends React.Component<DuckPluginProps, {}> {

	markupTypes: any;

	constructor(props: any) {
		super(props);

		this.hasStyle = this.hasStyle.bind(this);

		this.markupTypes = {
			BOLD: <strong>B</strong>,
			ITALIC: <em>I</em>,
			UNDERLINE: <ins>U</ins>
		}
	}

	toggle(type: string) {
		this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, type));
	}

	hasStyle(type: string){
		return this.props.editorState.getCurrentInlineStyle().has(type);
	}

	render() {
		return <>
			{Object.keys(this.markupTypes).map(key => {
				return <DuckToolbarButton key={key} active={this.hasStyle(key)} onClick={() => this.toggle(key)}>
					{this.markupTypes[key]}
				</DuckToolbarButton>
			})}
		</>
	}
}

export default InlineStyling;