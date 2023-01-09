import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';
import './styles/styles.scss';
//import fonts to avoid view default browser font
import './assets/fonts/RakutenSans.woff2';
import './assets/fonts/RakutenSansBd.woff2';
import './assets/fonts/RakutenSansBlk.woff2';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);