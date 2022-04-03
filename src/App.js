import './App.scss';
import Navbar from './containers/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  console.log(window.innerWidth)
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
