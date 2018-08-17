export default interface DuckEditorOptions {
	language?: string
	toolbar: Array<string>,

	customPlugins?: {
		[key: string]: React.Component
	}
}