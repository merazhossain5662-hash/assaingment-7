import React from 'react';

const Header = () => {
    return (
        <div className='text-center my-10 space-y-2'>
            <h1 className='text-5xl font-semibold'>Friends to keep close in your life</h1>
            <p><small>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</small></p>
<button className='btn bg-[#244D3F] text-white'>+ Add a Friend</button>
        </div>
    );
};

export default Header;