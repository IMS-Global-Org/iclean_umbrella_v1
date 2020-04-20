import React from 'react';
import { Switch, Route } from 'react-router-dom'

// Apps
import Public from './public/Public'

// Style Sheets
import './App.css';

const App = ({...rest}) => {
  return (
    <Switch>
      <Route exact path='/' component={Public} />
    </Switch>
  );
}

export default App;
