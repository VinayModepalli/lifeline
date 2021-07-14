import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import {BrowserRouter , Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Article from './components/Article';
import ArticleList from './components/ArticleList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/articles' component={ArticleList} />
        <Route path='/article/:post_id' component={Article}/>
        </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
