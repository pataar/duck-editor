import * as React from "react";

export interface DuckProps { name: string  }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Duck extends React.Component<DuckProps, {}> {
    render() {
        return <h1>This is a hello world from the {this.props.name}</h1>;
    }
}