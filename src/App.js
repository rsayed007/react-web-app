import React from 'react';
import PageWrapper from './component/PageWrapper'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './logo.svg'
import image from './component/assets/img/flower.jpg'

// pages
import Home from './component/pages/Home'
import About from './component/pages/About'

function App() {
  console.log(image);
  return (
    <Router>
      <PageWrapper>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />

      </PageWrapper>
      <About/>
      <img src={image} />
    </Router>
  );
}

export default App;
