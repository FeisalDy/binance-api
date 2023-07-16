import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex items-center justify-between h-10 mt-10 text-xs'>
            <div>© Mine Inc. 2023 All rights reserved</div>
            <div className='flex gap-2'>
                <Image
                    className='opacity-50 cursor-pointer'
                    src='/1.png'
                    height={20}
                    width={20}
                    alt='Facebook Mine'
                />
                <Image
                    className='opacity-50 cursor-pointer'
                    src='/2.png'
                    height={20}
                    width={20}
                    alt='Facebook Mine'
                />
                <Image
                    className='opacity-50 cursor-pointer'
                    src='/3.png'
                    height={20}
                    width={20}
                    alt='Facebook Mine'
                />
                <Image
                    className='opacity-50 cursor-pointer'
                    src='/4.png'
                    height={20}
                    width={20}
                    alt='Facebook Mine'
                />
            </div>
        </div>
    )
}

export default Footer
