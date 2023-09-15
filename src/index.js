import React from 'react';
import ReactDOM from 'react-dom';
import { Analytics } from '@vercel/analytics/react';
import App from './App';
import './index.css';

ReactDOM.render(<App />, <Analytics   mode="production"/>, document.getElementById('root'));