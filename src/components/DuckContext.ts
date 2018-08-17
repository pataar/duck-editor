
import * as React from "react";

import { EditorState } from "draft-js";
import DuckEditorDefaultOptions from "./DuckEditorDefaultOptions";

export default React.createContext({
	editorState: EditorState.createEmpty(),
	options: DuckEditorDefaultOptions,
	onEditorStateChange: (editorState: EditorState) => {}
});

