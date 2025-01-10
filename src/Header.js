import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from './assets/nasa-6.svg';
import burgermenu from './assets/menu-burger-svgrepo-com.svg';
import closeicon from './assets/multiply-svgrepo-com.svg';

function Header() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
      <div className='w-[80%] shadow-sm rounded-full mx-auto sticky p-3'>
        <div className='flex items-center justify-between'>
          <img className='w-24 p-2' src={img1} alt='nasa-logo' />
          <div className='flex gap-5'>
            <Link to="/">
              <p className='font-semibold cursor-pointer'>Home</p>
            </Link>
            <Link to="/planetimg">
              <p className='font-semibold cursor-pointer'>View Planet Image</p>
            </Link>
          </div>
          <img
            onClick={() => setSidebar(!sidebar)}
            className='w-8 cursor-pointer'
            src={sidebar ? closeicon : burgermenu}
            alt='menu-icon'
          />
        </div>

        {sidebar && (
          <div className='fixed right-0 w-12 bg-black h-screen z-10 top-0'></div>
        )}
      </div>
    </div>
  );
}

export default Header;
