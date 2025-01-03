import { Search } from 'lucide-react'
import React from 'react'

export default function InputField() {
  return (
    <div className='flex justify-center items-center'>
        <form action="" className='flex gap-2'>
            <input type="text" placeholder='Enter recipient name....' name="repicientname" id="repicientname" className='shrink border p-2 rounded-md w-full text-md' />
            <button className='flex font-inter justify-center items-center border p-2 rounded-md  bg-slate-950 text-white '>
                <Search/>
                search
            </button>
        </form>
    </div>
  )
}
