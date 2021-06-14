import './App.css';
import React,{useState} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {lightTheme,darkTheme,GlobalStyles} from "./themes"
import HeaderPart from "./components/header"
import FooterPart from "./components/footer"
import Home from './pages/home'
import About from './pages/about'
import District from './pages/district'
import Error from './pages/error'
import styled,{ThemeProvider} from 'styled-components'

const StyledApp=styled.div``;

function App() {
  const [theme,setTheme]=useState("dark");

  const themetoggler=()=>{
    if(theme==='light')
    setTheme('dark')
    else
    setTheme('light')
  };

  return (
    <ThemeProvider theme={theme==='light'?lightTheme:darkTheme} >
      <GlobalStyles/>
    <Router>
      <HeaderPart themetoggler={themetoggler}  />
      <StyledApp>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/district">
          <District />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route component={Error} />
      </Switch>
      </StyledApp>
      <FooterPart/>
    </Router>
    </ThemeProvider>
  );
}

export default App;
