import React, { FC } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { Exercise1 } from './exercise-1'



export const Myapp: FC = () => {
  return (
    <BrowserRouter>
      <Link to="/exercise-one">Exercise one</Link>

      <Route path="/exercise-one">
        <Exercise1 />
      </Route>


    </BrowserRouter>
  )
}
