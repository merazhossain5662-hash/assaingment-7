import friends from "../../../public/data.json";
import React from 'react';
import Image from "next/image";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { GoArchive } from "react-icons/go";
import FunctionalBtns from "../components/FunctionalBtns";
import NotFound from "../not-found";

const FriendPage = async({params}) => {
    const {FriendId}= await params;
    console.log(friends.length);
    
    const FriendIdNum = Number(FriendId)
    const expectedFriend =friends.find((friend)=>friend.id ==FriendIdNum)
   ;
//    console.log(FriendIdNum);
   
   if ( !expectedFriend){
    return <NotFound></NotFound>
   }
    
    return (
        <div className="w-11/12 mx-auto lg:flex justify-center gap-4 bg-base-200">
          <section id="Left_Column" className="w-87">
        <div className="w-87 h-74 bg-white rounded-2xl text-center space-y-3 p-3 shadow-xl ">
                    <Image src={expectedFriend.picture} alt={expectedFriend.name} width={70} height={70} className="rounded-full mx-auto" />
              <p className="text-lg font-semibold">{expectedFriend.name}</p>
           <p className={`badge text-white ${expectedFriend.status==="overdue" ?"bg-red-700 " : expectedFriend.status==="almost due" ?"bg-yellow-600 ":"bg-[#244D3F]" }`}>{expectedFriend.status}</p>
             <div className="flex items-center gap-2 text-center pl-11.5">
            {expectedFriend.tags.map((tag, index)=>
            <p className="badge bg-[#aae9d4]" key={index}>{tag}</p>
            )}
             </div>
             <p className="text-gray-500"><small>{` "${expectedFriend.bio}" `}</small></p>
             <p className="text-gray-500">Preferred : {expectedFriend.email}</p>
                </div>
                <div className="btn flex gap-2 items-center px-20.5 w-87 m-2 h-13.25 bg-white text-center py-4 shadow-xl"><RiNotificationSnoozeLine />Snooze 2 weeks</div>
                <div className="btn flex gap-2 items-center px-27 w-87 m-2 h-13.25 bg-white text-center py-4 shadow-xl"><GoArchive />Archive</div>
                <div className="btn flex gap-2 items-center px-27 w-87 m-2 h-13.25 bg-white text-center text-red-600 py-4 shadow-xl"><RiDeleteBin6Line />Delete</div>
          </section>
          <section id="Right_Column" className="max-w-184">
           <div className="grid lg:grid-cols-3 gap-2">
            <div className="w-57 h-33.5 bg-white shadow text-center pt-8 rounded-xl space-y-1.5 ">
                <h1 className="text-2xl font-semibold">{expectedFriend.days_since_contact}</h1>
                <p className="text-gray-500">Days Since Contact</p>
            </div>
            <div className="w-57 h-33.5 bg-white shadow text-center rounded-xl pt-8 space-y-1.5 ">
                <h1 className="text-2xl font-semibold">{expectedFriend.goal}</h1>
                <p className="text-gray-500">Goal (Days)</p>
            </div>
            <div className="w-57 h-33.5 bg-white shadow text-center rounded-xl pt-8 space-y-1.5 ">
                <h1 className="text-2xl font-semibold">{expectedFriend.next_due_date}</h1>
                <p className="text-gray-500">Next Due</p>
            </div>
           </div>
            <div className="max-w-184 h-30.25 bg-white rounded-md p-3.5 shadow space-y-5 my-4">
                <div className="flex justify-between">
               <p className="text-xl font-semibold">Relationship Goal</p>
                   <button className="btn w-15 h-8">Edit</button>
                </div>
                <p className="text-gray-600">Connect every <span className="font-bold text-lg text-black">{expectedFriend.goal} days</span></p>
            </div>
            <div className="max-w-184 h-full bg-white rounded-md p-3.5 shadow space-y-5 my-4 ">
               <p>Quick Check-In</p>
               <main className="flex gap-2 space-y-3 lg:flex-cols-3 md:flex-cols-2 sm:flex-cols-1">
                
                 <FunctionalBtns name={expectedFriend.name}></FunctionalBtns>
              
                </main>
             
            </div>
          </section>
        </div>
    );
};

export default FriendPage;