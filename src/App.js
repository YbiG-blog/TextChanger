import './App.css';
import About from './componants/About';
import Navbar from './componants/Navbar';
import Textform from './componants/Textform';
import React, {useState} from 'react'


function App() {
const [mode, setmode]= useState('light');

const togglemode = ()=>{
  if(mode==='light'){ setmode('dark');
document.body.style.backgroundColor='#045F5F';}
  else {setmode('light');
  document.body.style.backgroundColor='white';}
}
  return (
   <>
  <Navbar title="Yash-Blog" mode={mode} togglemode={togglemode}/>
  <div className="container m-3 p-3">
   <Textform textH="Text" mode={mode}/>
   {/* <About mode={mode}/> */}
   </div>
   </>
  );
}

export default App;
