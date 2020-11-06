import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Character from "./components/Character"
import CharacterDetail from './components/CharacterDetail'


function App() {
  
  return (
    <div>
    <Switch>
    <Route path='/' exact component={Character}/>
    <Route path='/Characters/:id' exact component={CharacterDetail}/>
    </Switch>
    </div>
  );
}

export default App;
