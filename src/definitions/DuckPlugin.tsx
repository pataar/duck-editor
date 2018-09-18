import { EditorState } from "draft-js";

export default abstract class DuckPlugin {
	protected onChange: (editorState: EditorState) => void;

	constructor(onChange: (editorState: EditorState) => void) {
		this.onChange = onChange;
	}

	hooks() {
		return {};
	}
}
