import React, {useState}from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  
  Routes,
  Route,
  HashRouter,
  
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'
const App=()=> {
  
 const apiKey=process.env.REACT_APP_NEWS_API
 
 let pageSize=5;
  const [progress, setProgress] = useState(0)
  const showProgress=(progress)=>{
  setProgress(progress) 
} //i create here this showprogress func bcz as a props without func it shows error in news component
  return (
      <HashRouter>
      <div>
        <Navbar/>
        
        <LoadingBar
        height={3}
        color='#f11946'
        progress ={progress}
        
      />
        <Routes>

        <Route path='/' element={<News showProgress={showProgress} apiKey={apiKey}  key='general' pageSize={pageSize} country='us' category='general'/>}/>
        <Route path='/health' element={<News showProgress={showProgress} apiKey={apiKey}  key='health' pageSize={pageSize} country='us' category='health'/>}/>
        <Route path='/science' element={<News showProgress={showProgress} apiKey={apiKey}   key='science' pageSize={pageSize} country='us' category='science'/>}/>
        <Route path='/technology' element={<News showProgress={showProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country='us' category='technology'/>}/>
        <Route path='/business' element={<News showProgress={showProgress} apiKey={apiKey} key='business' pageSize={pageSize} country='us' category='business'/>}/>
        <Route path='/sports' element={<News showProgress={showProgress} apiKey={apiKey}       key='sports'pageSize={pageSize} country='us' category='sports'/>}/>
        <Route path='/entertainment' element={<News showProgress={showProgress} apiKey={apiKey}  key='entertainment' pageSize={pageSize} country='us' category='entertainment'/>}/>
        </Routes>
      </div>
      </HashRouter>
    )
  
}

export default App
