import Link from 'next/link'
import React from 'react'

const Button = ({ text, url }) => {
    return (
        <Link href={url}>
            <button className='p-2 text-white bg-green-400 border rounded-sm cursor-pointer'>
                {text}
            </button>
        </Link>
    )
}

export default Button
