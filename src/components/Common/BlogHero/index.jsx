import React from 'react'

const BlogHero = ({data}) => {
  return (
    <div className='max-w-[1140px] mx-auto'>
        <div className='flex justify-center items-center'>
        <h2 className='text-black text-[32px] leading-[32px] font-[600] py-[40px]'>{data?.title}</h2>
        </div>
    </div>
  )
}

export default BlogHero