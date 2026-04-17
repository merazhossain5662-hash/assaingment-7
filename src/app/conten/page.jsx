 "use client" 
import { TimelineContext } from '@/context/Timelineprovidar';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const contentPage = () => {
const {timelines, setTimeline}=useContext(TimelineContext);


const callCount =timelines.filter((t)=> t.type==="call").length;
const textCount =timelines.filter((t)=> t.type==="text").length;
const videoCount =timelines.filter((t)=> t.type==="video").length;

    const data = [
  { name: 'Call', value: callCount, fill: '#244D3F' },
  { name: 'Text', value: textCount, fill: '#37A163' },
  { name: 'Video', value: videoCount, fill: '#7E35E1' },
  
];
 

    return (
        <div className='bg-base-300'>
            <h1 className='text-center text-3xl font-bold text-black my-2'>Friendship Analytics</h1>
        <div className='lg:w-277.5 lg:pl-70 mx-auto bg-white shadow'>
            <p className='text-left text-gray-600'><small>By Interaction Type</small></p>
           <PieChart style={{margin:50,  width: '80%', maxWidth: '400px', maxHeight: '60vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
     <Legend/>
     <Tooltip/>
    </PieChart>
        </div>
        </div>
    );
};

export default contentPage;