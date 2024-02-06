import React from 'react';

function MaintenanceMessage() {
  return (
    <div className=' min-h-[600px]'>

    <div className='flex justify-center mt-10'>
      <h1 className=' text-red-600 text-3xl'>Website Under Maintenance</h1> 
    </div>
      <div className='flex justify-center mt-10'>
      <p className=' text-xl text-black'>We apologize for the inconvenience. Please check back later.</p>
      </div>
    </div>
  );
}

export default MaintenanceMessage;
