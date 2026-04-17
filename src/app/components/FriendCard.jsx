// "use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
//  {
//     "id": 1,
//     "name": "Aarif Hasan",
//     "picture": "https://randomuser.me/api/portraits/men/32.jpg",
//     "email": "aarif.hasan@gmail.com",
//     "days_since_contact": 18,
//     "status": "overdue",
//     "tags": ["school", "close friend"],
//     "bio": "We studied together in high school and still share tech ideas and projects.",
//     "goal": 14,
//     "next_due_date": "2026-04-05"
//   },

const FriendCard = ({datas}) => {
   if(!datas) return null;
// const name= data.json();
// console.log(name);
const {id, name,picture,email, days_since_contact, status,tags} =datas;
    return (
        <Link href={`/${id}`}>
        <div className="w-[259.5px] hover:shadow-2xl h-63.5 bg-white rounded-2xl text-center space-y-3 p-3 shadow-xl ">
            <Image src={picture} alt={name} width={70} height={70} className="rounded-full mx-auto" />
      <p className="text-lg font-semibold">{name}</p>
     <p>{days_since_contact}d ago</p>
     <div className="flex items-center gap-2 text-center pl-8.5">
    {tags.map((tag, index)=>
    <p className="badge bg-[#aae9d4]" key={index}>{tag}</p>
    )}
     </div>
     
     <p className={`badge text-white ${status==="overdue" ?"bg-red-700 " : status==="almost due" ?"bg-yellow-600 ":"bg-[#244D3F]" }`}>{status}</p>
        </div>
        </Link>
    );
};

export default FriendCard;