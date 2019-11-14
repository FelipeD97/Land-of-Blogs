import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogList from "./components/blogList";

import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={BlogList} />
    </Router>
    
      
    
  );
}

export default App;
