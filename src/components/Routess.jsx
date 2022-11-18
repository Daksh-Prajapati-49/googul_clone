import React from 'react'
import { Routes as Switch, Route , Navigate} from 'react-router-dom'
import { Results } from './Results'


export const Routess = () => {
  return (
    <div className='p-4'>
      <Switch>
        <Route exact path="/" element={<Navigate to="/search" />}/> 
        <Route exact path="/search" element={<Results route="search"/>}/>
        <Route path="/image" element={<Results route="image"/>}/>
        <Route path="/news" element={<Results route="news"/>}/>
        <Route path="/video" element={<Results route="video"/>}/>
      </Switch>
    </div>
  )
}
