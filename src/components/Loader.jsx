import { Loader2 } from 'lucide-react'
import React from 'react'

const Loader = () => {
  return (
    <div className='fixed inset-0 flex item-center justify-center bg-black bg-opacity-50 z-50'>
        <Loader2 className='animate-spin text-blue-500' size={50} />
    </div>
  )
}

export default Loader