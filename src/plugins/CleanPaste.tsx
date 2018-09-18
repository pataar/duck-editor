import * as React from "react";
import { EditorState, DraftHandleValue, Modifier } from "draft-js";
import DuckPlugin from "../definitions/DuckPlugin";
import { stateFromHTML } from "draft-js-import-html";

class CleanPaste extends DuckPlugin {
	constructor(onChange: (editorState: EditorState) => void) {
		super(onChange);

		this.handlePastedText = this.handlePastedText.bind(this);
	}

	handlePastedText(text: string, html: string, editorState: EditorState): DraftHandleValue {
		let cleanedHtml = this.clean(html);
		console.log(cleanedHtml);

		const blockMap = stateFromHTML(cleanedHtml).getBlockMap();
		const newState = Modifier.replaceWithFragment(
			editorState.getCurrentContent(),
			editorState.getSelection(),
			blockMap,
		);
		this.onChange(EditorState.push(editorState, newState, "insert-fragment"));

		return "handled";
	}

	clean(input: any) {
		//TODO: clean more
		return input;
	}

	public hooks() {
		return {
			handlePastedText: this.handlePastedText,
		};
	}
}

export default CleanPaste;
