import React from 'react';

import home01 from '../images/home01.webp';
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';
import DoctorList from '../components/Doctors/DoctorList';


const Home = () => {
  return (
  <>

  {/*======hero section=========*/}
  <>
  <section className="hero_section pt-[50px] 2xl:h[800px]">
    <div className='container'>
      <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

        {/*======hero content==========*/}
        <div>
          <div className='lg:w-[570px]'>
            <h1  className='text-[20px] leading-[46px] text-headingColor font-[10] md:text-[60px]
             md: leading-[70px]'>
              Benifits : 
              </h1>

              <p className='text_para'> #Qualified staff and Doctors</p>
              <p className='text_para'> #Save your money and time</p>
              <p className='text_para'> #Emergency services</p>


          </div>

          <div className='lg:w-[570px]'>
            <h2 className='text-[20px] leading-[46px] text-headingColor font-[10] md:text-[60px]
             md: leading-[70px]'>
              Our Deapartments  : 
              </h2>

              <p className='text_para' > #ENT</p>
              <p className='text_para'  > #Cardiology</p>
              <p className='text_para' > #Psychiatrist</p>
              <p className='text_para' > #Plastic surgories</p>
              <p className='text_para' > #Pediatrician</p>


          </div>

          <div className='lg:w-[570px]'>
            <h3  className='text-[20px] leading-[46px] text-headingColor font-[10] md:text-[60px]
             md: leading-[70px]'>
              Working Hours : 
              </h3>

              <p className='text_para'> #Monday-Wednesday 8.30-4.30</p>
              <p className='text_para'> #Friday 8.30-12.30</p>
              <p className='text_para'> #Saturday 9.00-3.30</p>

          </div>

        </div>

        {/*=====hero content*========*/}

        <div className='flex gap-[10px] justify-end'>
          <div>
          <h className='heading'>
            Welcome to Healthcare Hospital <br /> system
           </h>

            
           <img className='w-full' width={470} src={home01} alt=''/>            
          </div>         
        </div>
    </div>
    </div>
  </section>
  {/*=======hero section end======*/}



  {/*======service section start======*/}
  <section>
    <div className="container">
      <div className="xl:w-[470px] mx-auto">
        <h2 className='heading text-center'>services </h2>
        <p className='text_para text-center'>Be healthy always
        </p>
      </div>

      <ServiceList/>
    </div>
  </section>
  {/*========service section end======*/}

 


  </>
  </>

  
  );
  };

export default Home;