import * as React from "react";

interface DuckToolbarButtonProps {
	onClick: (active: boolean) => void;
	active: boolean
}

export default class DuckToolbarButton extends React.Component<DuckToolbarButtonProps> {

	constructor(props: any) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event: any) {
		event.preventDefault();
		if (this.props.onClick) {
			this.props.onClick(this.props.active);
		}
	}

	render() {
		let className = "duck-toolbar-button";

		if (this.props.active) {
			className += " duck-toolbar-button-active";
		}

		return (
			<a style={{cursor: 'pointer'}} className={className} onMouseDown={this.handleClick}>
				{this.props.children}
			</a>
		);
	}
}
