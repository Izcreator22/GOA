import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Myauto from './Myauto';
import Portfolio from './Portfolio'
import FootballScores from './FootballScores';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <FootballScores />
    </React.StrictMode>
);

