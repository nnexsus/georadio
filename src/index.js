import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';

import { LinkProvider } from "./components/systems/context";
import Station from './components/systems/station';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LinkProvider>
      <Router>
        <Routes>
          <Route path='/radio/:id' element={<Station/>}/>
          <Route path='/' element={<App/>}/>
        </Routes>
      </Router>
    </LinkProvider>
  </React.StrictMode>
);
