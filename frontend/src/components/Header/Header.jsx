import {useEffect,useRef} from 'react';
import logo from '../../images/logo.png';
import userImg from '../../images/avatar-icon.png';
import {NavLink,Link} from 'react-router-dom';  
const navLinks =[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/doctors',
    display:'Doctors'
  },
  {
    path:'/services',
    display:'About Us'
  },
  {
    path:'/contact',
    display:'Contact'
  },



 
]

const Header = () => {
  return( <header className='header flex items-center'>
    <div className='container'>
      <div className='flex items-center justify-between'>
        {/*========logo===========*/}
        <div>
          <img src={logo} alt=""/>
        </div>

        {/*======menu========== */}
        <div className='navigation'>
          <ul className='menu flex items-center gap-[2.7rem]'>
            {navLinks.map((link, index) =>(
            <li key={index}>
                <NavLink
                 to={link.path}
                  className={navClass=>
                    navClass.isActive
                   ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                   : 'text-textColor text-[16px] leading-7 font-[500]'
                   }
                   >
                    {link.display}
                    </NavLink>
              </li>
              ))}

            </ul>
        </div>

        <Link to='login'>
          <button cursor='hand' className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex
           justify-center rounded-[50px]'
           >Login
            </button>
        </Link>

      </div>
    </div>
  </header>
  );

  };

export default Header;