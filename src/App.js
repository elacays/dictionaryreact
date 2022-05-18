import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Words from './components/Words/Words';
import LangBar from './components/LangBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      langs: [{ id: 1, code: 'tr', name: 'Türkçe' },
      { id: 2, code: 'en', name: 'İngilizce' },
      { id: 3, code: 'fr', name: 'Fransızca' }],
      selectedlang: 0
    }
  }


  render() {
    const changeSelectedLang = (sl) => {
      this.setState({ selectedlang: sl })
    }
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <Link to="/words" className="navbar-brand">Dictionary</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link active">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/words" className="nav-link active">Words</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className='content row'>
            <div className='col-md-2'><LangBar changeSelectedLang={changeSelectedLang} selectedlang={this.state.selectedlang} langs={this.state.langs} /></div>
            <div className='col-md-10'>
              <Routes>
                <Route path='/' element={<Home />}  ></Route>
                <Route path='/about' element={<About />} ></Route>
                <Route path='/words' element={<Words changeSelectedLang={changeSelectedLang} langs={this.state.langs} selectedlang={this.state.selectedlang} />} ></Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    );
  }

}

export default App;