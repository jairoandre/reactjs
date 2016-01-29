import React, {Component} from 'react';

export default class Button extends Component {
	render() {
		return (
			<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
				{this.props.children}
			</button>
		);
	}
}