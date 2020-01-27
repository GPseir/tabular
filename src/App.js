import React from 'react';
import Table from './components/Table/Table';
import DataStore from './components/DataStore';
import Login from './components/Login/Login';
import DetailsTable from './components/Details/DetailsTable'
import { Route, Switch } from 'react-router-dom'
import { LoginRoute } from './components/Login/LoginRoute'
import { ClickedRoute } from './components/Login/ClickedRoute'


function App() {
  return (
    <DataStore>
      <Switch>
        <Route exact path="/" component={Login} />
        <LoginRoute exact path="/table" component={Table} />
        <ClickedRoute path="/details/:id" component={DetailsTable} />
      </Switch>
    </DataStore>
  );
}

export default App;
