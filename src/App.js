import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const toDoList = useSelector((state) => state.toDoList);

  let showList = toDoList.map((el) => <li key={el}>{el}</li>);
  return (
    <div className="App">
      <ul>{showList.length === 0 ? 'Please enter your activity' : showList}</ul>
    </div>
  );
}

export default App;
