import React from 'react'
import { useSelector } from 'react-redux'
import Resume from '../components/preview/Resume'

function Preview() {

    const resumeDetails = useSelector((state) => state.userData)
    return (
        <div className='h-screen flex relative'>
            <div className='w-[80%] flex justify-center items-center'>

            <Resume />

            </div>
            <div className='absolute bottom-10 right-10 flex-1'>
                <button className="text-white bg-green-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                >Download</button>
            </div>
        </div>
    )
}

export default Preview