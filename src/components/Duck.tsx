import * as React from "react";
import { Editor, EditorState, RichUtils, DraftEditorCommand } from "draft-js";
import Toolbar from "./toolbar/Toolbar";
import DuckContext from "../definitions/DuckContext";

import { stateFromHTML } from "draft-js-import-html";
import { stateToHTML } from "draft-js-export-html";
import DuckEditorDefaultProps from "../definitions/DuckEditorDefaultProps";
import DuckProps from "../definitions/DuckProps";
import DuckPlugin from "../definitions/DuckPlugin";

export class Duck extends React.Component<DuckProps, {}> {
	static defaultProps = DuckEditorDefaultProps;

	state: {
		editorState: EditorState;
		onEditorStateChange: (editorState: EditorState) => void;
		toolbar: Array<string | JSX.Element>;
		plugins: Array<any>;
	};

	constructor(props: any) {
		super(props);

		this.onEditorStateChange = this.onEditorStateChange.bind(this);
		let editorState;

		if (this.props.value) {
			editorState = EditorState.createWithContent(stateFromHTML(this.props.value));
		} else {
			editorState = EditorState.createEmpty();
		}

		this.state = {
			editorState,
			onEditorStateChange: this.onEditorStateChange,
			toolbar: props.toolbar,
			plugins: props.plugins,
		};

		this.handleKeyCommand = this.handleKeyCommand.bind(this);
	}

	onEditorStateChange(editorState: EditorState) {
		this.setState({ editorState });

		if (this.props.onChange) {
			this.props.onChange(stateToHTML(editorState.getCurrentContent()));
		}
	}

	handleKeyCommand(command: DraftEditorCommand, editorState: EditorState) {
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
			this.onEditorStateChange(newState);
			return "handled";
		}
		return "not-handled";
	}

	getPluginHooks() {
		let props = {};
		this.state.plugins.forEach(pluginC => {
			let plugin = new pluginC(this.onEditorStateChange);

			props = {
				...plugin.hooks(),
			};
		});

		return props;
	}

	render() {
		return (
			<div className="duck-editor">
				<DuckContext.Provider value={this.state}>
					<Toolbar />
					<Editor
						{...this.getPluginHooks()}
						editorState={this.state.editorState}
						onChange={this.onEditorStateChange}
						handleKeyCommand={this.handleKeyCommand}
					/>
				</DuckContext.Provider>
			</div>
		);
	}
}
