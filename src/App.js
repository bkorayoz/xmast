import React, {useState} from 'react'
import './App.css';

function App() {
  const  [isFinish, setIsFinish] = useState(false)
  const  [names, setNames] = useState(
    [
      "Koray",
      "Rabia",
      "Kaan",
      "Melisa",
      "Idil",
      "Hasan",
      "Ozan",
      "Efekan"
    ])

  const randomOrderGenerator = (array) =>{
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    setNames(JSON.parse(JSON.stringify(array)))
  }
  
  return (
    <div className="App">
      {names.map((item, index)=><p>{`${index+1} - ${item}`}</p>)}
      {!isFinish && <button onClick={()=>randomOrderGenerator(names)}>Press to suffle names</button>}
      {!isFinish &&
      <button onClick={()=>setIsFinish(true)}>Lock the numbers</button>
      }
    </div>
  );
}

export default App;
