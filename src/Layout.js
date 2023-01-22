import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from ''
export default function Layout() {
  return (
	<div>
		<Routes>
			<Route path='/'>
				<Route path='/' element={<HomePage/>}/>
			</Route>
        </Routes>
	</div>
  )
}
