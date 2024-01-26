import logo from './logo.svg';
import './App.css';
//import TestComp from './components/functionalComponents/testcomponents';
//import TestClassComp from './components/classComponents/testClassComponents';
//import PropsComponent from './components/functionalComponents/PropsComponent';
//import StateComponent from './components/classComponents/StateComponent';
import NavBar from './components/functionalcomponent/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/functionalcomponent/Home';
import About from './components/functionalcomponent/About';
import Experience from './components/functionalcomponent/Experience';
import Login from './components/classcomponents/LoginComponent';
import Footer from './components/functionalcomponent/footer';
import MyChannel from './components/functionalcomponent/MyChannel';
 

//c.p:C:\Users\shanm\Documents\react\react-app\src\components\classcomponents\LoginComponent.jsx
//c.r.p:react-app\src\components\classcomponents\LoginComponent.jsx
//c.p:C:\Users\shanm\Documents\react\react-app\src\components\functionalcomponent\footer.jsx
//c.r.p:react-app\src\components\functionalcomponent\footer.jsx

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <header>
        <h1>YouTuber</h1><h2>Drawing world</h2>
          
        </header>
      
        <NavBar />
        
        <Routes>
        {/* <Route path="/" element={<Home/>}></Route> */}
        
        <Route path="/Home" element={<Home />}></Route> 
        <Route path="/About" element={<About />}></Route> 
        <Route path="/Experience" element={<Experience />}></Route> 
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/MyChannel"element={<MyChannel />}></Route>
        
        </Routes>
      </BrowserRouter>

      {/* <PropsComponent name ="Mythili" course="MERN"/>  */}
      {/* <TestClassComp/> */}
      {/* <header className="App-header">
        {/* <TestComp/> */}

        {/* <StateComponent /> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */} 
      <Footer />
  
    </div>
  );
}

export default App;