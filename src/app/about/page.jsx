import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='container mx-auto'>
            <div className='relative w-full h-96'>
                <Image
                    src='https://images.pexels.com/photos/6009022/pexels-photo-6009022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    fill={true}
                    alt='Men'
                    className='object-cover grayscale'
                />
                <div className='absolute p-1 text-white bg-green-400 bottom-4 left-4'>
                    <h1 className=''>Digital Story Tellers</h1>
                    <h2 className=''>
                        Handcrafting award winning digital experience
                    </h2>
                </div>
            </div>
            <div className='flex gap-24 '>
                <div className='flex flex-col flex-1 gap-8 mt-12'>
                    <h1 className='text-2xl'>Who are we?</h1>
                    <p className='text-sm font-light text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Consequatur vero hic voluptates modi in quas
                        cumque pariatur repellendus ullam. Architecto quas
                        doloribus quod cumque, repellat repudiandae odio
                        voluptatem vero at.
                        <br /> <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur eaque iure totam porro perspiciatis, optio
                        dicta consequuntur reprehenderit tempore, cupiditate
                        molestias dolores rem voluptates iusto tenetur quisquam
                        similique odio impedit.
                    </p>
                </div>
                <div className='flex flex-col flex-1 gap-8 mt-12'>
                    <h1 className='text-2xl'>What we do?</h1>
                    <p className='text-sm font-light text-justify'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Adipisci sit mollitia id, ducimus aspernatur
                        error, aperiam, impedit iste voluptatem soluta ipsum
                        architecto voluptates dignissimos molestiae unde natus
                        vel laudantium laborum?
                    </p>
                    <Button text='Contact Us' url='/contact' />
                </div>
            </div>
        </div>
    )
}

export default About
