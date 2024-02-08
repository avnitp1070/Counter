import {useState} from 'react';
import './App.css';

function App() {
  const[count, setCount]=useState(0);
  const decHandler=()=>{
     setCount(count-1);
  }

  function incHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className="App">
      <div className='con'>
        Counter(Increment and Decrement)
      </div>
      <div className='doc'>
         <div>
            <button onClick={decHandler} className='dec'>-</button>
         </div>
         <div className='dis'>
          {count}
         </div>
         <div onClick={incHandler} className='inc'>
            <button>+</button>
         </div>
      </div>
      <div onClick={resetHandler} className='reset'>
            Reset
         </div>
    </div>
  );
}

export default App;
