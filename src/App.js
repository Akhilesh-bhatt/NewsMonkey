import './App.css';

import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {

  const apikey=process.env.REACT_APP_NEWS_API
  const pageSize = 6
  const [progress, setProgress] = useState(0)
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar height={3} color='#f11946' progress={progress} />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" API={apikey} />} />
            <Route path="business/*" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" API={apikey} />} />
            <Route path="entertainment/*" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" API={apikey} />} />
            <Route path="general/*" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" API={apikey} />} />
            <Route path="health/*" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health" API={apikey} />} />
            <Route path="science/*" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" API={apikey} />} />
            <Route path="sports/*" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" API={apikey} />} />
            <Route path="technology/*" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" API={apikey} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
}
export default App

