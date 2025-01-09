import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [render , setRender]= useState(true);
  useState(()=>{
    setTimeout(()=>{
      setRender(false);
    },10000)
  },[]);
 
  return (
    <>
      {render ?< MyComponent/> : <div></div>}
    </>
  )
}

//function MyComponent(){

 // const [count, setCount]=useState(0);
  //const incrementCount=()=>{
   // setCount(count+1);
  //};
 // return (
  //  <div>
    //  <p>{count}</p>
    //  <button onClick={incrementCount}>Increment</button>
   // </div>
  //);
//}

function MyComponent(){
  useEffect(()=>{
    console.error("component mounted");

    return ()=>{
      console.log("componrnt unmounted");
    };
  },[]);
  return <div>
    form inside my component 
  </div>
}

export default App;
