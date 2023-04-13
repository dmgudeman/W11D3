import {Route, Switch, NavLink} from 'react-router-dom'
import Home from './components/Home';
import Survey1 from './components/Survey1'
import Survey2 from './components/Survey2'
import logo from './_assets/logo.png'


function App() {
  console.log('IN APP')
  return (
    <>
    <div id="heading">
    <img src={logo} className="logo"/>
  
    <h1 className="headingTitle">Survey Tool</h1>
    </div>
    <NavLink  to="/survey1">Survey 1</NavLink>
    <NavLink  to="/survey2">Survey 2</NavLink>
    <NavLink  to="/home">Home</NavLink>
    <Switch>
       <Route path ="/survey1" component={Survey1}/>
       <Route path ="/survey2" component={Survey2}/>
       <Route path ="/home" component={Home}/>
       {/* <Route path ="/" component={App}/> */}

    </Switch>
    </>

    
  );
}

export default App;
