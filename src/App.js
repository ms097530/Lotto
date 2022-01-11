import logo from './logo.svg';
import './App.css';
import Lotto from './Lotto';

function App()
{
  return (
    <div className="App">
      <Lotto />
      <Lotto title="Mini Lotto" numBalls={4} maxNum={30} />
    </div>
  );
}

export default App;
