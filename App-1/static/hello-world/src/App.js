import React, { useEffect, useState } from 'react';
import { events, invoke } from '@forge/bridge';

function App() {
  const [data, setData] = useState(null);

  const [name,setname] = useState('')
  const [description,setdescription] = useState('')

  const buttonpressed = async (e)=>{
    e.preventDefault()
    console.log(name)
    console.log(description)

    const response = await invoke('postdata',{name,description})

    console.log(response)


  }

  
  return (
    <div>
      <h2>Enter Data</h2>
      
      <br></br>
      <input type='text' placeholder='Enter name' onChange={(event)=>{setname(event.target.value)}}/>
      <br></br>
      <input type='text' placeholder='Enter description' onChange={(event)=>{setdescription(event.target.value)}}/>
      <br></br>
      <button onClick={buttonpressed}>Submit</button>
    </div>
  );
}

export default App;
