import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './screen/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './screen/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>
          <Route path="/search">
            <SearchPage/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>     
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
