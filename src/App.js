import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import About from './Component/About';




function App() {
  return (
    <>
    <Navbar title="AmazeKart" Home="Home" About="About Us" />
    <div className='container'>
    {/*<Textform heading="Enter the Text"/>*/}
    <Textform/>
    </div>
    </>
    
  )
}

export default App;
