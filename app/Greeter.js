import React, {Component} from 'react';
import Button from './Button';
import config from './config.json';

export default class Greeter extends Component {
    render() {
        return (
        	<div>
            	<h1>{config.greetText}</h1>
            	<Button>Adicionar</Button>
            </div>
        );
    }
}
