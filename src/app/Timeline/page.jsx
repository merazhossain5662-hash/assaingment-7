"use client"
import { IoVideocamOutline } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import React, { useContext, useState } from 'react';
import { TimelineContext } from '../../context/Timelineprovidar';
import { BsChatSquareTextFill } from 'react-icons/bs';

const timeLinePage = () => {
    const {timelines, setTimeline}=useContext(TimelineContext);
    console.log(timelines.length);
    const [filter, setFilter]=useState("all")
    const trueIcon=(type)=>{
        if (type=="call") return <LuPhoneCall />
        if (type=="text") return <BsChatSquareTextFill />
        if (type=="video") return <IoVideocamOutline />
    }
    const filteredTimeline =filter==="all" ? timelines :timelines.filter((item)=> item.type === filter);
    return (
        
        <div className='my-3 max-w-189 mx-auto lg:min-w-189'>
           <h1 className='text-2xl font-bold'>Timeline</h1>
      
            <select value={filter}
            onChange={(e)=>setFilter(e.target.value)} className="select">
  <option disabled={true}>Pick an option</option>
  <option value="all">All</option>
  <option value="call">Call</option>
  <option value="text">Text</option>
  <option value="video">Video</option>
</select>
         

        {filteredTimeline.map((timeline) => (
        <div
          key={timeline.id}
          className="flex items-center gap-3  bg-white p-3 my-2 rounded shadow"
        >
          <span className="text-xl">{trueIcon(timeline.type)}</span>

          <div>
            <p className="font-semibold">
              {timeline.type} <span className='text-gray-600'>with</span> {timeline.name}
            </p>
            <p className="text-sm text-gray-500">
              { new Date(timeline.date).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
        </div>
    );
};

export default timeLinePage;