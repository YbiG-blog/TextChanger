import './App.css';
import About from './componants/About';
import Navbar from './componants/Navbar';
import Textform from './componants/Textform';

function App() {
  return (
   <>
  <Navbar title="Yash-Blog" />
  <div className="container m-3 p-3">
   {/* <Textform textH="Text"/> */}
   <About/>
   </div>
   </>
  );
}

export default App;
