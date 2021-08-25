import React from 'react';
import ReactDOM = require('react-dom');

export default (props: any) => {
  const el = document.getElementById('asdf');
  const abc = document.querySelector('body');
  const form = document.querySelector('form');
  console.log('el', form);
  return ReactDOM.createPortal(props.children, abc);
};
