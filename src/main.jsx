import './styles/styles.css';
import React from 'react';
import * as ReactDOMAll from 'react-dom';
import { createRoot } from 'react-dom/client';
import dsSrc from './vendor/_ds_bundle.js?raw';
import dataSrc from './vendor/data.js?raw';

// The design-system bundle and the store data are plain scripts that expect
// React on the global object, exactly like the original UI kit did.
window.React = React;
window.ReactDOM = Object.assign({}, ReactDOMAll, { createRoot });

(0, eval)(dsSrc);
(0, eval)(dataSrc);

window.__ELMARWA__ = window.ElMarwaGlassDesignSystem_d79c81;

import('./bootstrap.jsx');
