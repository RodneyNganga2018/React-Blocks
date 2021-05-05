import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Subcontent from './components/Subcontent';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div className="center">
    <div className="web">
      <Header />
      <div className="body">
      <Navigation />
      <Main className="main">
        <div className="subContent">
        <Subcontent />
        <Subcontent />
        <Subcontent />
        </div>
        <Advertisement />
      </Main>
      </div>
    </div>
    </div>
  );
}

export default App;
