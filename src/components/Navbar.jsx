'use client'
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import Image from 'next/image'

const Links = [
    {
        id: 1,
        tittle: 'Home',
        url: '/'
    },
    {
        id: 2,
        tittle: 'Portfolio',
        url: '/portfolio'
    },
    {
        id: 3,
        tittle: 'Blog',
        url: '/blog'
    },
    {
        id: 4,
        tittle: 'About',
        url: '/about'
    },
    {
        id: 5,
        tittle: 'Contact',
        url: '/contact'
    },
    {
        id: 6,
        tittle: 'Dashboard',
        url: '/dashboard'
    }
]

const Navbar = () => {
    const isUserLoggedIn = true

    const [providers, setProviders] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false)

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders()

            setProviders(response)
        }
        setProviders()
    }, [])

    return (
        <nav className='w-full pt-3 mb-16 flex-between'>
            <Link href='/' className='flex gap-2 flex-center'>
                <Image
                    src='images/logo.svg'
                    alt='mine logo'
                    width={40}
                    height={40}
                    className='object-contain'
                />
                <p className='logo_text'>Mine</p>
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden sm:flex'>
                {isUserLoggedIn ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href='/create-prompt' className='black_btn'>
                            Create Post
                        </Link>
                        <button
                            type='button'
                            className='outline_btn'
                            onClick={signOut}
                        >
                            Sign Out
                        </button>
                        <Link href='/profile'>
                            <Image
                                src='images/logo.svg'
                                width={40}
                                height={40}
                                className='rounded-full'
                                alt='profile'
                            ></Image>
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map(provider => (
                                <button
                                    type='button'
                                    key={provider.name}
                                    className='black_btn'
                                    onClick={() => signIn(provider.id)}
                                >
                                    Sign in with {provider.name}
                                </button>
                            ))}
                    </>
                )}
            </div>

            {/* Mobile Navigation */}
            <div className='relative flex sm:hidden'>
                {isUserLoggedIn ? (
                    <div className='flex'>
                        <Image
                            src='images/logo.svg'
                            width={40}
                            height={40}
                            className='rounded-full'
                            alt='profile'
                            onClick={() => setToggleDropdown(prev => !prev)}
                        />

                        {toggleDropdown && (
                            <div className='dropdown'>
                                <Link
                                    href='/profile'
                                    className='dropdown_link'
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    My Profile
                                </Link>
                                <Link
                                    href='/create-prompt'
                                    className='dropdown_link'
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    Create Prompt
                                </Link>
                                <button
                                    type='button'
                                    onClick={() =>
                                        setToggleDropdown(false) & signOut()
                                    }
                                    className='w-full mt-5 black_btn'
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map(provider => (
                                <button
                                    type='button'
                                    key={provider.name}
                                    className='black_btn'
                                    onClick={() => signIn(provider.id)}
                                >
                                    Sign in with {provider.name}
                                </button>
                            ))}
                    </>
                )}
            </div>
            {/* {Links.map(link => (
                    <Link key={link.id} href={link.url}>
                        <div className='text-base lg:text-xl'>
                            {link.tittle}
                        </div>
                    </Link>
                ))} */}
        </nav>
    )
}

export default Navbar
