import React from 'react'
import { ReactDOM } from 'react'

import Review from './component/Review'
import './index.css'

const App = () =>{
  return(
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Quotes</h2>
          <div className="underline">

          </div>
          <Review/>
        </div>
      </section>
    </main>
  )
}
export default App
