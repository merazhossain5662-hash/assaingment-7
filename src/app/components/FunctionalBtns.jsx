"use client"
import React, { useContext, useState } from 'react';
import { IoVideocamOutline } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import friends from "../../../public/data.json";
import { TimelineContext } from '../../context/Timelineprovidar';
import { toast } from 'react-toastify';

const FunctionalBtns = ({name}) => {
    
    const {timelines, setTimeline}=useContext(TimelineContext)
    const handleBtns = (btnType, friendName) =>{
        const wantedFriend =friends.find((friend)=>friend.name ==friendName);
       const newFriendData ={
        id: Date.now(),
        type:btnType,
        name: wantedFriend.name,
        date : new Date(),
       }; 
     toast.success(( `${btnType} with ${wantedFriend.name}`), {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",

});

        return setTimeline([...timelines,newFriendData])
    }
    console.log(timelines, "timeline");
    

    return (
        <>
              <div onClick={()=>handleBtns("call", name )} className="btn hover:text-green-600 w-[218.67px] h-[95] bg-base-300  flex items-center gap-2 flex-col pt-5 rounded-md">
                    <span className="text-2xl font-semibold"><LuPhoneCall /></span>
                    <p>Call</p>
                </div>
                <div onClick={()=>handleBtns("text", name )} className="btn hover:text-green-700 w-[218.67px] h-[95] bg-base-300  flex items-center gap-2 flex-col pt-5 rounded-md">
                    <span className="text-2xl font-semibold"><MdOutlineTextsms /></span>
                    <p>Text</p>
                </div>
                <div onClick={()=>handleBtns("video", name )} className="btn hover:text-green-700 w-[218.67px] h-[95] bg-base-300  flex items-center gap-2 flex-col pt-5 rounded-md">
                    <span className="text-2xl font-semibold"><IoVideocamOutline /></span>
                    <p>Video</p>
                </div>
        </>
    );
};

export default FunctionalBtns;