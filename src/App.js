import React, {Component} from 'react';
import './App.css';

class Subject extends Component {
  render() {
    return(
      <header>
        <h1>WEB</h1>
        World wide web!
      </header>
    );
  }
}

class Nav extends Component {
  render(){
    return(
      <nav className="menu">
        <ul>
            <li><a href="1.html" class="menuLink">HTML</a></li>
            <li><a href="2.html" class="menuLink">CSS</a></li>
            <li><a href="3.html" class="menuLink">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class ART extends Component {
  render(){
    return(
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
       <Subject></Subject>
       <Nav></Nav>
       <ART></ART>
      </div>
    );
  }  
}

export default App;
