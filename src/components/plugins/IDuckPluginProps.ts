import DuckEditorOptions from "../DuckEditorOptions";
import { EditorState } from "draft-js";

export interface DuckPluginProps {
	editorState: EditorState,
	options: DuckEditorOptions,
	onChange: (editorState: EditorState) => void
}