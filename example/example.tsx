import * as React from "react";
import * as ReactDOM from "react-dom";

import { Duck } from "../src/components/Duck";
import CleanPaste from "../src/plugins/CleanPaste";
import '../src/style.css';
import './example.css';


class TestEditor extends React.Component {

	state: {
		content: string
	}

	constructor(props: any) {
		super(props);

		this.state = {
			content: "<p>Hey this <strong>editor</strong> rocks 😀</p>"
		}
	}

	render() {


		return (
			<div className="wrapper">
				<div>
					<h1>This is the Duck editor</h1>
					<Duck
						value={this.state.content}
						onChange={(content: string) => this.setState({ content })}
						toolbar={['inline', 'divider', 'link', 'divider',]}
						plugins={[CleanPaste]}
					/>
				</div>
				<br />
				<br />
				<div>
					<h1>This is the HTML version 2</h1>
					<code>
						{this.state.content}
					</code>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<TestEditor />,
	document.getElementById("example")
);
