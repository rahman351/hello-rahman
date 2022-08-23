import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import LeftMain from './Leftcontainer/Left-main';
import About from './RightContainer/About/About';
import Contact from './RightContainer/Contact/Contact';
import Projects from './RightContainer/Projects/Projects';
import Skills from './RightContainer/Skills/Skills';

function App() {
  return (
    <Router>
      <div className="App">
      <div className="main-container">
        <LeftMain/>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/skills">
            <Skills/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
