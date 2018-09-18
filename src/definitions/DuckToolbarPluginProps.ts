import { EditorState } from "draft-js";

export interface DuckToolbarPluginProps {
	editorState: EditorState,
	onChange: (editorState: EditorState) => void
}
