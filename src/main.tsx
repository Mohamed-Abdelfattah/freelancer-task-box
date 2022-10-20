import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />

        <Route
          path="*"
          render={() => (
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          )}
        />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
