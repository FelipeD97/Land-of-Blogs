import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogList from "./components/blogList";
import BlogPost from "./components/blogPost";
import PostUpdate from "./components/postUpdate";

import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={BlogList} />
      <Route path="/post/:id?" component={BlogPost} />
      <Route path="/post/update/:id?" component={PostUpdate} />
    </Router>
    
      
    
  );
}

export default App;
