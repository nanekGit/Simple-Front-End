import React from 'react';
import logo from './logo.svg';
import {Router, Link, Switch, Route} from 'react-router-dom';
import './App.css';
import {createBrowserHistory} from 'history';
import Hello from "./Hello";
import RandomNumberPage from "./RandomNumberPage";

interface AppState{
  min: number;
  max: number;
}


export default class App extends React.Component<{}, AppState>{
  constructor(props: {}) {
    super(props);

    this.state={
      min:10,
      max:20
    };

    this.setState({
      max:30
    });

  }

  render(){
    const history = createBrowserHistory();

    return (
        <Router history={history}>
          <header>
            <ul>
              <li><Link to={"/"}>React</Link></li>
              <li><Link to={"/hello/World"}>Hello World</Link></li>
              <li><Link to={"/random?min=20&max=100"}>Random Number</Link></li>
            </ul>
          </header>
          <Switch>
            <Route exact path={"/"}>
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Learn React
              </a>
            </Route>

            <Route path={"/hello/:name"}>
              <Hello icon={() => <span>Tu jest ikona przekazana parametrem</span>}/>
            </Route>

            <Route path={"/random"}>
              <RandomNumberPage/>
            </Route>
          </Switch>
        </Router>
    );
  }
}


