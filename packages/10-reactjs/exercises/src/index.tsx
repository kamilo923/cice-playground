import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/*import { App } from './solutions/app'*/
import { Myapp } from './my-solutions/Myapp'
import { reportWebVitals } from './report-web-vitals'

import { App } from './solutions/app'


ReactDOM.render(
  <React.StrictMode>
{/*
    <App />
*/}
    <Myapp />
  </React.StrictMode>,
  document.getElementById('root')
)
