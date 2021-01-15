import React from 'react'
import './App.css';
import Astroid from './Astroid.js'
import Info from './Components/Info';
function App() {
  return (
    <div className="App">
    <Switch>
       <Route path="/" exact component={Astroid} />
       <Route path="/info" exact component={Info} />
    </Switch>
         <Astroid/>
    </div>
  );
}

export default App;
