import Encounters from './containers/Encounters';
import Monsters from './containers/Monsters'
import './App.css';


function App(props) {
  return (
    <div className="App">
      <Encounters />
      <Monsters />
    </div>
  );
}

export default App;
