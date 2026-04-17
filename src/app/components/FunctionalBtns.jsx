import React from 'react';
import { IoVideocamOutline } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';

const FunctionalBtns = () => {
    return (
        <>
              <div className="w-[218.67px] h-[95] bg-base-300  flex items-center gap-2 flex-col pt-5 rounded-md">
                    <span className="text-2xl font-semibold"><LuPhoneCall /></span>
                    <p>Call</p>
                </div>
                <div className="w-[218.67px] h-[95] bg-base-300  flex items-center gap-2 flex-col pt-5 rounded-md">
                    <span className="text-2xl font-semibold"><MdOutlineTextsms /></span>
                    <p>Text</p>
                </div>
                <div className="w-[218.67px] h-[95] bg-base-300  flex items-center gap-2 flex-col pt-5 rounded-md">
                    <span className="text-2xl font-semibold"><IoVideocamOutline /></span>
                    <p>Video</p>
                </div>
        </>
    );
};

export default FunctionalBtns;