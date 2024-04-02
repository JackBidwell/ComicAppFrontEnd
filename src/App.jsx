import React from 'react';
import ComicList from "./comicList"; // Ensure the file name matches exactly
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Marvel Comics</h1>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ComicList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
