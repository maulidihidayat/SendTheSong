import DescriptionFeedback from '@/Components/Info/DescriptionFeedback'
import InputField from '@/Components/Info/InputField'
import React from 'react'

export default function page() {
  return (
    <div className='mt-56 mb-96 md:mt-28 md:mb-20 flex flex-col justify-center items-center'>
      <DescriptionFeedback/>
      <InputField/>
    </div>
  )
}
