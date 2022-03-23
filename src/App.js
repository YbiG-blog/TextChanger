import './App.css';
import About from './componants/About';
import Navbar from './componants/Navbar';
import Textform from './componants/Textform';
import React, {useState} from 'react'
import Alert from './componants/Alert';

function App() {
const [mode, setmode]= useState('light');
const [alert,setalert]=useState(null);
const fixalert=(msg,type)=>{
setalert({
msg:msg,
type:type
})
setTimeout(() => {
  setalert(null);
}, 1000);
}
const togglemode = ()=>{
  if(mode==='light'){ setmode('dark');
document.body.style.backgroundColor='#045F5F';
fixalert("Dark mode has been enabled","secondary");}
  else {setmode('light');
  fixalert("Light mode has been enabled","secondary");
  document.body.style.backgroundColor='white';}
}
  return (
   <>
  <Navbar title="Yash-Blog" mode={mode} togglemode={togglemode}/>
  <Alert alert={alert}/>
  <div className="container m-3 p-3">
   <Textform fixalert={fixalert} textH="Text" mode={mode}/>
   {/* <About mode={mode}/> */}
   </div>
   </>
  );
}

export default App;
