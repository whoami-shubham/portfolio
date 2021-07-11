import React,{useState, useEffect} from 'react';
import { HashRouter as Router,Route } from 'react-router-dom'
import Home from './views/home/Home';
import './App.css'
import Resume from './views/resume/Resume';
import scrollContext from "./views/contexts/ScrollContext"
function App() {

  const [curNav,setcurNav] = useState(null);
  const [data,setData] = useState({
        educations:[],
        projects:[],
        articles:[],
        isloading:true,
        bio:"Software Engineer",
        exp:[]
  });

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/whoamishubham/whoamishubham.github.io/data/data.json')
    .then((data)=>data.json())
    .then((data)=>{
      setTimeout(()=>setData({
        ...data.data,
        isloading:false
      }),2000)
       console.log("%c shubham  ","color:green;background:black;font-size:5vw;border:1px solid red;");
    });
   },[])
   
  return (
    <Router>
       <scrollContext.Provider value={[curNav,setcurNav]}>
          <Route exact path='/' component={()=><Home {...data} />}/>
          <Route exact path='/resume' component={Resume}/>
        </scrollContext.Provider>
    </Router>
  );
}

export default App;
