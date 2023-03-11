import React from 'react'

import { apple, bill, google,muhas} from '../assets'
import style, { layout } from '../style'

const Billing = () => (
  <section id="product"  className={layout.sectionReverse}>
    {/* <div className={layout.imageReserve}>
      <img src={bill} alt="Bill" className="w-[50%] h-[50%] relative z-[5]"/>
    </div> */}
    
    <div className={layout.sectionInfo}>
    <h2 className={style.heading2}>Community Engagement</h2>
      <p className={`${style.paragraph} max-w-[470px] mt-5`}>At <span className='text-gradient font-poppins font-bold'>Saratani</span><span className='text-white'>Ai</span>, we understand the importance of community engagement in promoting early detection and treatment of cancer. That's why we work closely with local communities and stakeholders to raise awareness about the importance of cancer screening. We also partner with healthcare providers, non-profit organizations, and government agencies to facilitate access to cancer screening services in underserved areas.</p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt--6">
          <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="apple_store" className="w-[128px] h-[42px] object-contain  cursor-pointer" />
          <img src={muhas} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />

      </div>
    </div>
  </section>
)

export default Billing
