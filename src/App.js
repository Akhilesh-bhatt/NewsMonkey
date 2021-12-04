import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  
  state={
    progress: 0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  pageSize = 6
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" API="3912f5be129b4eaeb69191a88bb36500" />} />
            <Route path="business/*" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business" API="3912f5be129b4eaeb69191a88bb36500" />} />
            <Route path="entertainment/*" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" API="3912f5be129b4eaeb69191a88bb36500" />} />
            <Route path="general/*" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" API="3912f5be129b4eaeb69191a88bb36500" />} />
            <Route path="health/*" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health" API="3912f5be129b4eaeb69191a88bb36500" />} />
            <Route path="science/*" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science" API="3912f5be129b4eaeb69191a88bb36500" />} />
            <Route path="sports/*" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" API="3912f5be129b4eaeb69191a88bb36500" />} />
            <Route path="technology/*" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology" API="3912f5be129b4eaeb69191a88bb36500" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

