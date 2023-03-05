import React from 'react'

import Styles from './style'

import {Navbar,Hero,Stats,Testimonials,Footer,CTA,Clients,CardDeal,Business,Button,Billing} from './components'

function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${Styles.paddingX} ${Styles.flexCenter}`}>
          <div className={`${Styles.boxWidth}`}>
              <Navbar/>
          </div>
      </div>

      //Hero Section
      <div className={'bg-primary ${Styles.flexStart}'}>
          <div className={`${Styles.boxWidth}`}>
              <Hero/>
          </div>
      </div>

      <div className={'bg-primary ${Styles.paddingX} ${Styles.flexStart}'}>
          <div className={`${Styles.boxWidth}`}>
              <Stats/>
              <Billing/>
              <CardDeal/>
              <Testimonials/>
              <CTA/>
              <Clients/>
              <Business/>
              <Button/>
              <Footer/>

          </div>
      </div>
    </div>
  )
}

export default App