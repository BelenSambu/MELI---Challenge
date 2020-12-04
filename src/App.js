import React from 'react';
import { Toolbar } from "./components/Toolbar/Toolbar";
import Products from "./components/Products/Products";
import {
    BrowserRouter as Router, Route, Switch
  } from 'react-router-dom';
import DataProvider from './context/DataContext';

function App() {

    return (
      <DataProvider>
        <div className="App">
            <Toolbar />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Products /> :
                    </Route>
                </Switch>
            </Router>
            </div>
      </DataProvider>
    );
}

export default App;
