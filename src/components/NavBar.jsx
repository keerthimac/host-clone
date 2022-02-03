import React from "react";

function NavBar() {
  return (
    <>
      <div className='bg-blue-500 text-white h-16'>
        <div className='container mx-auto flex items-center justify-between'>
          <h1 className='text-3xl'> Loruki </h1>
          <nav>
            <ul className='flex space-x-6 py-5'>
              <li className='hover:border-b-2'>Home</li>
              <li className='hover:border-b-2'>features</li>
              <li className='hover:border-b-2'>Docs</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBar;
