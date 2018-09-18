import * as React from "react";
import DuckContext from "../../definitions/DuckContext";
import InlineStyling from "./plugins/InlineStyling";
import MultiLink from "./plugins/MultiLink";
import Divider from "./plugins/Divider";

const duckToolbarOptions: any = {
	'inline': InlineStyling,
	'link': MultiLink,
	'divider': Divider
};

export default class Toolbar extends React.Component {

	render() {

		return (
			<DuckContext.Consumer>
				{({ toolbar, onEditorStateChange, editorState }) => (
					<div className="duck-toolbar">
						{toolbar.map((ToolbarOption: any, index: number) => {

							if(typeof ToolbarOption === "string"){
								ToolbarOption = duckToolbarOptions[ToolbarOption]
							}

							return (
								<ToolbarOption
									key={index}
									onChange={onEditorStateChange}
									editorState={editorState} />
							)
						}
						)}
					</div>
				)}
			</DuckContext.Consumer>
		)
	}
}