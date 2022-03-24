import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const toDoList = useSelector((state) => state.toDoList);
  const dispatch = useDispatch();

  const deleteHandler = (el) => {
    dispatch({ type: 'REMOVE', payload: el });
  };

  let showList = toDoList.map((el) => (
    <li key={el} onClick={() => deleteHandler(el)}>
      {el}
    </li>
  ));
  return (
    <div className="App">
      <ul>{showList.length === 0 ? 'Please enter your activity' : showList}</ul>
    </div>
  );
}

export default App;
