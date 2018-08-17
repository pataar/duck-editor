import * as React from "react";
import { Editor, EditorState, RichUtils, DraftEditorCommand, ContentState } from "draft-js";
import DuckEditorOptions from "./DuckEditorOptions";
import Toolbar from "./toolbar/Toolbar";
import DuckContext from "./DuckContext";

import {stateFromHTML} from 'draft-js-import-html';
import {stateToHTML} from 'draft-js-export-html';
import DuckEditorDefaultOptions from "./DuckEditorDefaultOptions";

export interface DuckProps {
	onChange?: Function,
	value?: any,
	options?: DuckEditorOptions
}

export class Duck extends React.Component<DuckProps, {}> {

	state: {
		editorState: EditorState,
		options: DuckEditorOptions,
		onEditorStateChange: (editorState: EditorState) => void
	};

	constructor(props: any) {
		super(props);

		this.onEditorStateChange = this.onEditorStateChange.bind(this);
		let editorState;

		if(this.props.value){
			editorState = EditorState.createWithContent(stateFromHTML(this.props.value));
		} else {
			editorState = EditorState.createEmpty();
		}

		this.state = {
			editorState,
			onEditorStateChange: this.onEditorStateChange,
			options: {
				...DuckEditorDefaultOptions,
				...this.props.options
			}
		};

		this.handleKeyCommand = this.handleKeyCommand.bind(this);
	}

	onEditorStateChange(editorState: EditorState){
		this.setState({ editorState });

		if(this.props.onChange){
			this.props.onChange(
				stateToHTML(editorState.getCurrentContent())
			);
		}
	}

	handleKeyCommand(command: DraftEditorCommand, editorState: EditorState) {
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
			this.onEditorStateChange(newState);
			return 'handled';
		}
		return 'not-handled';
	}

	render() {
		return (
			<div className="duck-editor">
				<DuckContext.Provider value={this.state}>
					<Toolbar />
					<Editor
						editorState={this.state.editorState}
						onChange={this.onEditorStateChange}
						handleKeyCommand={this.handleKeyCommand}
					/>
				</DuckContext.Provider>
			</div>
		);
	}
}