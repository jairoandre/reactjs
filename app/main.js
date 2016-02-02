import React from 'react';
import {render} from 'react-dom';
import Greeter from "./Greeter";

import './main.css';
import './material.min.css';

import 'material-design-lite/material.min.js'

render(<Greeter/>, document.getElementById('root'));