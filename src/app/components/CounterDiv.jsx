import React from 'react';

const CounterDiv = () => {
    return (
        <div className=' lg:w-10/12 mx-auto grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 pb-9 border-b mb-1 border-gray-300 '>
              <div className='p-7 flex flex-col items-center gap-3 shadow-2xl rounded-2xl w-74 h-34'> 
                <h1 className='text-3xl font-semibold'><span>10</span></h1>
                <p className='text-gray-500'>Total Friends</p>
            </div>
            <div className='p-7 flex flex-col items-center gap-3 shadow-2xl rounded-2xl w-74 h-34'> 
                <h1 className='text-3xl font-semibold'><span>10</span></h1>
                <p className='text-gray-500'>On Track</p>
            </div>
            <div className='p-7 flex flex-col items-center gap-3 shadow-2xl rounded-2xl w-74 h-34'> 
                <h1 className='text-3xl font-semibold'><span>10</span></h1>
                <p className='text-gray-500'>Need Attention</p>
            </div>
            <div className='p-7 flex flex-col items-center gap-3 shadow-2xl rounded-2xl w-74 h-34'> 
                <h1 className='text-3xl font-semibold'><span>10</span></h1>
                <p className='text-gray-500'>Interactions This Month</p>
            </div>
          
         
        </div>
    );
};

export default CounterDiv;