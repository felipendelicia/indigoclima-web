import React from 'react'
//import Contact from './Contact/Contact'
import FrequentQuestions from './FrequentQuestions/FrequentQuestions'
import Landing from './Landing/Landing'

const Home = () => {
  return (
    <div className="home-container">
        <Landing/>
        <FrequentQuestions/>
    </div>
  )
}

export default Home