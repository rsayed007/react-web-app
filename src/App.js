import React from 'react';
import PageWrapper from './component/PageWrapper'
import {BrowserRouter as Router, Route} from 'react-router-dom'


// pages
import Home from './component/pages/Home'
import About from './component/pages/About'
import ServicesHead from './component/pages/ServicesHead'
import PortfolioHead from './component/pages/PortfolioHeader'

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={ServicesHead} />
        <Route exact path='/portfolio' component={PortfolioHead} />

      </PageWrapper>
    </Router>
  );
}

export default App;
