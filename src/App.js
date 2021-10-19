import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import SingleDetails from './components/SingleDetails/SingleDetails';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/registration'>
            <Registration></Registration>
          </Route>
          <Route exact path='/details/:id'>
            <SingleDetails></SingleDetails>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
