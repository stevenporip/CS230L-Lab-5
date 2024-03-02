import logo from './logo.svg';
import './App.css';
import CustomNavBar from './Navbar';
import CustomCard from './Cards'


function App() {
  return (
    <div className="App">
      <CustomNavBar />
      <h1>CS 230L</h1>
      <h2>Section - 002</h2>
      <p>WVU ID: 800356927</p>
      <p>Hi I am Steven Poripski</p>
      <CustomCard />
    </div>
  );
}

export default App;
