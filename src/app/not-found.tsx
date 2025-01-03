import { SearchSlashIcon } from 'lucide-react'
import React from 'react'

const notFound = () => {
  return (
    <div className='font-reenie text-3xl flex justify-center items-center gap-2 mt-96 mb-96'> Not Found Page <SearchSlashIcon className='font-reenie'/></div>
  )
}

export default notFound