import React from 'react';
import './App.css';
import Header from '../header/header'
import Blog from '../blog/blog'; 
import AboutMe from '../aboutMe/aboutMe'
import Collection2018 from '../blogPosts/collection2018/collection2018'
import Summer2020 from '../blogPosts/summer2020/summer2020'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/myblog" component={Blog}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/2018favs" component={Collection2018}/>
          <Route path="/summer2020" component={Summer2020}/>
          <Route path="/aboutMe" component={AboutMe} />
        </div>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
