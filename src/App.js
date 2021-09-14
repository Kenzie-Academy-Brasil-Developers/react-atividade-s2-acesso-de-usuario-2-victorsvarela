import './App.css';

import { Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import { members } from './components/members'
import Customer from './components/Pages/Customer';
import Company from './components/Pages/Company';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path='/' >
            <h3>Selecione um usuário abaixo:</h3>
            <Home Members={members} />
          </Route>
          <Route exact path='/customer/:id' >
            <Customer />
          </Route>
          <Route exact path='/company/:id' >
            <Company />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
