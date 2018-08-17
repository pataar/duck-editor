import * as React from "react";
import DuckContext from "../DuckContext";
import InlineStyling from "../plugins/InlineStyling";
import MultiLink from "../plugins/MultiLink";
import Divider from "../plugins/Divider";

export default class Toolbar extends React.Component {

	defaultPlugins: object = {
		'inline': InlineStyling,
		'divider': Divider,
		'link': MultiLink
	};

	render() {

		const plugins: any = this.defaultPlugins;

		return (
			<DuckContext.Consumer>
				{({ options, onEditorStateChange, editorState }) => (
					<div className="duck-toolbar">
						{options.toolbar.map((key) => {
							let Plugin = plugins[key];
							return (
								<Plugin
									key={key}
									options={options}
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