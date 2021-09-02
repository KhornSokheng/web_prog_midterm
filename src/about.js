import aboutnon from './components/aboutnon';
function App() {
    return (
      <div className="App">
        <Router>
       <Header/>
       <SideBar/>
       <Switch>
       
       <Route component={Home} path="/"exact/>    
       <Route component={aboutus} path="/aboutus"exact/> 
       <Route component={aboutnon} path="/aboutnon"exact/> 
       <Route component={contectus} path="/contectus"exact/> 
       <Route component={skill} path="/skill"exact/>
       <Route component={portfolio} path="/portfolio"exact/>   
        
       </Switch>
       {/*Content/>*/}
       <Footer/>
       </Router>
      </div>
    );
  }
  
  export default App;