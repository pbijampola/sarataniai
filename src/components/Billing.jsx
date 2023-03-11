import React from 'react'

import { apple, bill, google} from '../assets'
import style, { layout } from '../style'

const Billing = () => (
  <section id="product"  className={layout.sectionReverse}>
    <div className={layout.imageReserve}>
      {/* <img src={bill} alt="Bill" className="w-[100%] h-[100%] relative z-[5]"/> */}
    </div>
    
    <div className={layout.sectionInfo}>
    <h2 className={style.heading2}>Strategic Partners</h2>
      <p className={`${style.paragraph} mt-5`}>As strategic partners, <span className='text-gradient font-poppins font-bold'>Saratani</span><span className='text-white'>Ai</span>  collaborates with local communities, healthcare providers, non-profit organizations, and government agencies to promote cancer screening and improve patient outcomes. They recognize the significance of community engagement in raising awareness and facilitating access to cancer screening services, particularly in underserved areas. [AI Startup Name]'s commitment to community engagement underscores their dedication to fighting cancer through collaboration and innovation.</p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt--6">
          {/* <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="apple_store" className="w-[128px] h-[42px] object-contain  cursor-pointer" /> */}
      </div>
    </div>
  </section>
)

export default Billing
