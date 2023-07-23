import React from 'react'
import Data from './Data'
import Resume from './Resume'
import { Route, Routes } from 'react-router-dom'

const MyIndex = () => {
  return (
<div>
<Routes>
<Route exact path='/' element={<Data />} />
<Route exact path='/resume' element={<Resume />} />
</Routes>
</div>
  )
}

export default MyIndex
