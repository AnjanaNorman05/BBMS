import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Login from './components/auth/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} /> {/* Update with 'element' instead of 'component' */}
          {/* Add more routes here for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
