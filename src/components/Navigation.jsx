// Navigation.jsx
import React from 'react';

const Navigation = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className='flex justify-start text-sm mt-5 md:text-2xl'
    >
      <h1 className='text-portfolio-primary font-poppins font-bold text-xl'>Aland</h1>
    </div>
  );
});

export default Navigation;
