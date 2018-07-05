import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  ReactDOM.render(<App />, document.getElementById('app'));
}

export const render = (id, props = {}) => {
  if (!id) {
    throw new Error('"id" is required for rendering app.');
  }
  const nodeEl = document.getElementById(id);
  ReactDOM.render(<App {...props} />, nodeEl);
};
