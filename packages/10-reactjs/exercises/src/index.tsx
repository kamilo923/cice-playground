import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
/*import { App } from './solutions/app'*/
import { Myapp } from './my-solutions/Myapp'
import { reportWebVitals } from './report-web-vitals'

ReactDOM.render(
  <React.StrictMode>
{/*
    <App />
*/}
    <Myapp />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
