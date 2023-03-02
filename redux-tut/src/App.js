import logo from './logo.svg';
import './App.css';
import ReduxCounter from './component/reduxCounter';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  
  return (
    <div className="App">
     <ReduxCounter></ReduxCounter>
    </div>
  );
}

export default App;
