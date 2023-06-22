import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const [advice, setAdvice] = useState("")
const [count, SetCount] = useState(0)
  async function GetAdvice(){
    let res = await  fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice)
    SetCount(()=> count+1)
    console.log(count)
  }

useEffect(()=>{
  GetAdvice()
},[])
  return (
    <div className="App">
     <h1> {advice}</h1>
     <button onClick={GetAdvice}>Get Adive</button>
    <Message count ={count}/>
    </div>
  );
}


function Message(props){
  return (
    <div>

     <p>You have clicked {props.count}</p>
    </div>
  )
}
export default App;
