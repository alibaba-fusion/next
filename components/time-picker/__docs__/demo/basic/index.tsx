import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TimePicker } from '@alifd/next';

ReactDOM.render(<TimePicker onChange={val => console.log(val)} />, mountNode);
