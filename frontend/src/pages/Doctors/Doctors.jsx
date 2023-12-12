import DoctorCard from './../../components/Doctors/DoctorCard';
import { doctors } from '../../assets/data/doctor';
import SidePanel from './SidePanel';

const Doctors = () => {
  return <>
  <section  className='bg-[#cce6ff]'>
    <div className='container text-center'>
      <h2 className='heading'>Doctors</h2>
    </div>

    <div>
      <SidePanel/>
    </div>

    
  </section>

  <section>

  
    <div className="container">
    <div className='grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[20px] mt-[30px] lg:mt-
    [55px]' >
      
        {doctors.map(doctor=>(
        <DoctorCard  key={doctor.id} doctor={doctor}/>

        
        ))}


    </div>
    
     </div>  
  </section>

  
  </>
  };

export default Doctors;