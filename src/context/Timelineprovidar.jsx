"use client"
import React, { createContext, useState } from 'react';
export const TimelineContext = createContext();
export const Timelineprovidar = ({children}) => {
    const [timelines, setTimeline]=useState([]);
    const data={
        timelines,
         setTimeline
        }
    return (
       <TimelineContext.Provider value={data}>{children} </TimelineContext.Provider>
    );
};

export default Timelineprovidar;