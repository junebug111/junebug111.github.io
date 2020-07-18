import React from 'react';
import './App.css';
import Header from '../header/header';
import Blog from '../blog/blog'; 
import AboutMe from '../aboutMe/aboutMe';
import Collection2018 from '../blogPosts/collection2018/collection2018';
import Summer2020 from '../blogPosts/summer2020/summer2020';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Blog/>
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
            <Route path="/aboutMe">
              <AboutMe />
            </Route>
            <Route path="/summer2020">
              <Summer2020 />
            </Route>
            <Route path="/2018favs">
              <Collection2018 />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
