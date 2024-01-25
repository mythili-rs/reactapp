import logo from './logo.svg';
import './App.css';
import TestComponent from './components/testcomponent';
import TestClassComp from './components/classcomponents/functionalcomponents/testClassComponent.jsx/testClasscomponent';
import PropsComponent from './components/classcomponents/PropsComponent'; 
function App() {
  return (
    <div className="App">
      <PropsComponent name="All" course="KEC"></PropsComponent>
      <TestClassComp/>
      <header className="App-header">
        <TestComponent/>
      
        <img src={logo} className="App-logo" alt="logo" />
        
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
      </header>
    </div>
  );
}

export default App;
