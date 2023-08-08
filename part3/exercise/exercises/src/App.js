import logo from './logo.svg';
import './App.css';
import HobbyInstruction from './components/Introduction';
import MyProjects from './components/Projects';


function App() {
  return (
    <div className="App">
      <h1>My Hobby: Learning Random Facts</h1>
      <HobbyInstruction /> 
      <MyProjects />
    </div>
  );
}


export default App;