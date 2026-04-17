import React from 'react';
import friends from "../../../public/data.json";
import FriendCard from './FriendCard';
const Friends = () => {
// const res = await fetch("@/public/data.json");
// const friends=await res.json();




    return (
        <div className='lg:w-10/12 mx-auto space-y-2.5 h-full py-4'>
            <h1 className='text-lg'>Your Friends</h1>
            <div className=' grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 '>

        {friends.map((datas) =>( 

        <FriendCard datas={datas} key={datas.id}> </FriendCard>
        ))
        }
         
            </div>
        </div>
    );
};

export default Friends;