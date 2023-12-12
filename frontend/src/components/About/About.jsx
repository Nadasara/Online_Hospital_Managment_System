import React from 'react';
import aboutImg from '../../images/about.png';
import aboutCardImg from '../../images/about-card.png';
import profile from '../../images/doctor-img03.png';

const About = () => {
  return <section>
    <div className="container">
        <div className="flex item-center justify-between gap-[50px] lg:gap-[130px] xl: gap-0 flex-col lg:flex-row">
            {/*=======about img=======*/}
            <div className="relative w3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1"></div>
            <img src={aboutImg} width={700} alt=''/>
            <div className="absolute z-20 bottom-4 w-[200px] md:w[300px] right-[-30%] md:right-[-7%] lg:right-[-22%]">
                <img src={aboutCardImg} width={470} alt=''/>
            </div>

            <section>
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
          <h2 className='heading'>You can join with us. We are the Best nation Health service

          </h2>
          <p>
          Sri Lanka has a universal health care system that extends free[clarification needed] healthcare to all citizens, which has been a national priority. OPD facilities are readily available in public (general) hospitals situated in major towns and cities, with laboratory and radiology facilities common in most. But most illnesses can be treated in teaching hospitals in Colombo, Colombo South, Colombo North, Kandy/Peradeniya, Galle (Karapitiya Hospital), Anuradhapura and Jaffna. All doctors and nurses in the government hospitals are qualified and trained, with some of the most experienced staff working at the teaching hospitals.
          </p>
          <p>
          For emergencies, especially accidents, it is highly recommended to go directly to general hospital accident services as they are equipped with the staff and facilities to handle emergencies.

          Despite low levels of health expenditures, Sri Lanka's health indicators are comparable to more developed countries in the region. The public healthcare system also has long waiting lists for specialized care and advanced procedures. As a result, reliance on private care is increased.
          </p>
        </div>

        <button  cursor='hand' className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex
           justify-center rounded-[50px] leading-[30px]' 
           >Learn more
            </button>
            </section>         
        </div>     
    </div>
    <section>

    </section>   
  </section>

  };

export default About;