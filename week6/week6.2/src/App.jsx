import { useState } from 'react'

function App() {
  const [counter, setCount] = useState(0);
const[inputValue,setInputValue]=useState(1);

let count = useMemo(()=>{
  console.log("memo got called")
  let finalCount =0;
  for(let i =1;i<=inputValue;i++){
    finalCount= finalCount+i;
  }
  return finalCount;
},[inputValue]);
return <div>
  
</div>
}

export default App
