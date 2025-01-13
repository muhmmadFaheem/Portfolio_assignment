import React from 'react'
import { MdMailOutline } from "react-icons/md";
import { BsTelephoneOutbound } from "react-icons/bs";



const Contact = () => {
  return (
    <div data-aos="zoom-out" id ='contacts' className ='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'>Contact Information</h2>
                <p className='text-white-600 text-[18px] pt-2' >
                    To discuss potential collaborations ; please contact me at :
                </p>
                <div className='flex gap-3 items-center'>
                <MdMailOutline size={30} /> www.faheem@047gmail.com

                </div>
                <div className='flex gap-3 items-center'>
                <BsTelephoneOutbound size={30} /> +923082877253

                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <input type="text" className='h-[40px] bg-transparent border border-accent' 
                    id='name'
                    />
                </div>
                
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email</label>
                    <input type="text" className='h-[40px] bg-transparent border border-accent' 
                    id='email'
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="msg">Message</label>
                    <textarea 
                     className='h-[240px] bg-transparent border border-accent' 
                    id='msg' rows={8}
                    >
                    </textarea>
                </div>
                <button className='bg-accent p-2 px-6 '>Send</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
