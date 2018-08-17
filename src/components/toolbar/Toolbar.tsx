import * as React from "react";
import DuckContext from "../DuckContext";
import InlineStyling from "../plugins/InlineStyling";
import MultiLink from "../plugins/MultiLink";

export default class Toolbar extends React.Component {

	defaultPlugins: object = {
		'inline': InlineStyling,
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