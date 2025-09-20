import {useState} from 'react';

function Square() {
  const[value, setValue] = useState(null);
  function handleClick() {
    setValue('X');
  }
  return (
    <button
     className="square"
     onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  //<!-- :after content appears, after all children 3,6,9-->
  return (

    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>          
    </>
  )

  
}
