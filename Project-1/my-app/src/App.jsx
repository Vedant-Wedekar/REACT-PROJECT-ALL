import React from 'react'
// import { Analytics } from "@vercel/analytics/react"
import Header from './components/Header'
import Con from './components/Cone'
import Spec from './components/Spec'
import Cou from './components/Cou'
import Career from './components/Career'
import About from './components/About'
// import Footer from './components/Footer'
const App = () => {
  return (
    <div className='w-full min-h-screen'>
      <Header/>
       <Con/>
       <Spec/>
    <Cou/>
     <Career/>
        <About/>
      {/* <Footer/> */}
    </div>
  )
}
export default App