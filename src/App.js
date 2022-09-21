
import './App.css';
import Device from './component/Device';
import Watch from './component/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name='Computer' price='1500'></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
