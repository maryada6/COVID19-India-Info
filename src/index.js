import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

setTimeout(()=>{
  document.querySelector(".progress").style.display="none";
},2000)

document.querySelectorAll("nav>ul>a").forEach(item=>{
  item.addEventListener("click",()=>{
    document.querySelector(".progress").style.display="block";
    setTimeout(()=>{
  document.querySelector(".progress").style.display="none";
   },1000)

  })
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
