import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';


if (typeof window !== 'undefined') {
	var WebFont = require('webfontloader');

	WebFont.load({
		google: {
			families: [
        'Material Icons',
        'Roboto:400,500',
        'Open Sans:300italic,400italic,600italic,700italic,800italic,400,600,700,800,300&display=swap'
      ],
		},
	});
}


render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
