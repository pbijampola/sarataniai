import React from 'react'
import Styles from '../style'
import {discount,robot} from '../assets'
import GetStarted from './GetStarted'

const Hero=() => 
 (
    <section id='home' className={`flex md:flex-row flex-col ${Styles.paddingY}`}>
      <div className={`flex-1 ${Styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}>
          <img src={discount} alt=""  className='w-[32px] h-[32]'/>
         <p className={`${Styles.paragraph}`}>
         <span className='text-white'>20%</span>Discount for {""}
          <span className='text-white'>Month</span> Account
         </p>
        </div> */}
        <div className='flex flex-row justify-between items-center w-full'>

          <h1 className='flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100px] leading-[75px]'>
          Revolutionizing <br className='sm:block hidden'/> {" "} 
          <span className='text-gradient'> Cancer Screening and Diagnosis</span>
          {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
              <GetStarted/>
          </div>
        </div>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[48px] text-[32px] text-white ss:leading-[100px] leading-[75px] w-full'>
        in Africa with Artificial Intelligence
        </h1>
        <p className={`${Styles.paragraph} mt-5`}> 
        At <span className='text-gradient font-poppins font-bold'>Saratani</span><span className='text-white'>Ai</span>, we believe that early detection is key to fighting cancer. That's why we're using artificial intelligence to provide digital cancer screening and diagnosis services in Africa. Our evidence-based solutions are designed to improve the accuracy, speed, and cost-effectiveness of cancer screening, while also engaging the community and stakeholders to advocate for early detection and treatment.
        </p>
      </div>
      {/* <div className={`flex-1 flex ${Styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="" className='w-[100%] h-[100%] relative z-[5]'/>
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div> 
        <div className='absolute z-[1] w-[80%] h-[80%] bottom-40px white__gradient'></div>
        <div className='absolute z-[0] w-[50%] h-[55%] right-20px bottom-20px blue__gradient'></div>
      </div> */}
      <div className={`ss:hidden ${Styles.flexCenter} mt-3`}>
        <GetStarted/>
      </div>
    </section>
  )


export default Hero