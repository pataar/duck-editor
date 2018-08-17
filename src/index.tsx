import * as React from "react";
import * as ReactDOM from "react-dom";

import { Duck } from "./components/Duck";

import './style.css';

let DuckEditor = (
	<Duck
		value={"<p>Hey this <strong>editor</strong> rocks 😀</p>"}
		options={{
			toolbar: ['inline', 'divider', 'link','divider', ]
		}}
	/>
);

ReactDOM.render(DuckEditor,
	document.getElementById("example")
);
