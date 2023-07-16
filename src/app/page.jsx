import Image from 'next/image'
import Hero from 'public/hero.png'
import Button from '@/components/Button'
import Feed from '@/components/Feed'

export default function Home () {
    return (
        <section className='flex-col w-full flex-center'>
            <h1 className='text-center head_text'>
                Discover and Share
                <br className='min-md:hidden' />
                <span className='text-center orange_gradient'>
                    AI Powered Prompts
                </span>
            </h1>
            <p className='text-center desc'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda blanditiis similique sed numquam a ut rerum cum quas.
                Ipsum, debitis eveniet. Nulla blanditiis incidunt ipsum
                reprehenderit! Voluptate quasi officia modi.
            </p>
            <Feed />
        </section>
    )
}
