

import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      {/* <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" /> */}
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  
  // className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
  <section id="services" className={layout.section}>
    <div className={layout.sectionInfo}>
    <h2 className={`${styles.heading2} text-gradient`}>
        Revolutionize Your Cancer Screening with <br className='sm:block hidden'/> Cutting-Edge Digital Solutions from <span className='text-white'>Saratani</span><span className='text-gradient'>Ai</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-3`}>At <span className='text-gradient font-poppins font-bold'>Saratani</span><span className='text-white'>Ai</span>,
         we offer a range of digital cancer screening and diagnosis services. Our solutions are developed using scientific research, and are designed to be accurate, reliable, and cost-effective. Some of our services include:</p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;