import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function App() {
  const toDoList = useSelector((state) => state.toDoList);
  const dispatch = useDispatch();
  const [activity, setActivity] = useState('');

  const deleteHandler = (el) => {
    dispatch({ type: 'REMOVE', payload: el });
  };

  const activityHandler = (e) => {
    console.log(e.target.value);
  };

  let showList = toDoList.map((el) => (
    <li key={el} onClick={() => deleteHandler(el)}>
      {el}
    </li>
  ));
  return (
    <div className="App">
      <h1>Your List</h1>
      <input
        type="text"
        placeholder="You can write your activity here:"
        onChange={activityHandler}
      />
      <button type="button">Add to list</button>
      <ul>{showList.length === 0 ? 'Please enter your activity' : showList}</ul>
    </div>
  );
}

export default App;
