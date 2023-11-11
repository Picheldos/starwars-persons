import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from './components/App';
import PeoplesStore from './store/PeoplesStore';


const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(
        <Router>
            <Provider peopleStore={PeoplesStore}>
                <App />
            </Provider>
        </Router>
    );
} else {
    console.error('Root element not found');
}