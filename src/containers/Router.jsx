import React from "react"
import {BrowserRouter, Switch, Route} from 'react-router-dom/'
import App from "./App";
import TopRated from "../components/cards/TopRated";


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/toprated' component={TopRated}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router