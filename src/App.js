import './App.css';
import Axios from "axios";
import { useEffect,useState } from 'react';

function App() {
 const [reason, setReason]= useState("")

 const getExcuse=(excuse)=>{
  Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res)=>{
    setReason(res.data[0].excuse);
   });
 }

useEffect (()=>{
  getExcuse();
},[])
 

  return (
    <div className="App">
      
      <h1>Ask idea for Excues</h1>
      <div className='main'>
         <button onClick={()=>
          getExcuse("family")} className='btn'>Family</button>
         <button onClick={()=>
          getExcuse("party")} className='btn'>Party</button>
         <button  onClick={()=>
          getExcuse("office")} className='btn'>Office</button>
           <button  onClick={()=>
          getExcuse("funny")} className='btn'>Funny</button>
            <button  onClick={()=>
          getExcuse("developers")} className='btn'>Developer</button>
         
      </div>
      <div> 
        <h3>Reasons</h3>
         <p>{reason}</p> 
      </div>
    
    </div>
  );
}

export default App;
