import React from 'react';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import {
   BrowserRouter as Router,
   Switch,
   Route,
  Link
} from "react-router-dom";
import Notfound from './component/Notfound/Notfound';
import About from './component/About/About';
import Postdetail from './component/Postdetail/Postdetail';
import Comment from './component/Comment/Comment';


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/post/:postId">
            <Postdetail/>
          </Route>
          <Route path="/comment/:commentId">
            <Comment/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <Notfound/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
