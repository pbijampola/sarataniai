import React from 'react'
import { features } from '../constants'
import styles, {layout} from '../style'
import Button from './Button'

const FeatureCard = ({ icon,title,content, index }) => {
  <div>
    <div>
      <img src={icon} alt="" />
    </div>
  </div>
}

function Business() {
  return (
    <section id='services' className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-gradient`}>
        Revolutionize Your Cancer Screening with <br className='sm:block hidden'/> Cutting-Edge Digital Solutions from [AI Startup Name]
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>At <span className='text-gradient font-poppins font-bold'>Saratani</span><span className='text-white'>Ai</span>, we offer a range of digital cancer screening and diagnosis services. Our solutions are developed using scientific research, and are designed to be accurate, reliable, and cost-effective. Some of our services include:</p>
        
        <Button styles="mt-10"/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id}{...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business