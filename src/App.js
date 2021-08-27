import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Report from './components/Report';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
     <Header/>
     <SideBar/>
     <Switch>
     <Route component={Content} path="/"exact/>
     <Route component={Dashboard} path="/dashboard"/>
     <Route component={Report} path="/report"/>
     </Switch>
     {/*Content/>*/}
     <Footer/>
     </Router>
    </div>
  );
}

export default App;
