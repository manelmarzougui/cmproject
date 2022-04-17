import './App.css'
import { Route, Routes } from 'react-router'
import Signup from './components/signup/Signup'
import 'antd/dist/antd.css'
import Register from './components/signup/Register'
import PrivetRoute from './components/router/PrivetRoute'
import { useDispatch, useSelector } from 'react-redux'
import { current } from './Js/actions/userAction'
import { useEffect } from 'react'


import { MdContactSupport } from 'react-icons/md'
import Home from './components/Home/Home'
import Dadhboard from './components/dashboard/Dadhboard'
import Nav from './components/nav/Nav'
import Contact from './components/contact/Contact'
import Liste from './components/contact/Liste'
import Footer from './components/footer/Footer'




function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(current())
   
  }, [])

  return (
    <div className='App'>
  
<Nav/>
      <Routes>
        <Route path='/login' element={<Signup />} />

        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/liste' element={<Liste />} />
      
       

        <Route element={<PrivetRoute />}>
          <Route path='/dashboard' element={<Dadhboard />} />
        </Route>
      </Routes>
     <Footer/>

    </div>
  )
}

export default App
