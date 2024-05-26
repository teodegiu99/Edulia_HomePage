import React from 'react'

const Badge: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className='font-semibold text-black text-center px-4 py-2 bg-white rounded-lg border border-slate-200 hover:text-white hover:bg-[#f8485e]'>
      {text}
    </div>
  )
}

export default Badge
