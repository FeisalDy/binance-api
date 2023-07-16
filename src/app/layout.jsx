import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Provider from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Mine App',
    description: 'Binance portfolio'
}

export default function RootLayout ({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Provider>
                    <div className='main'>
                        <div className='gradient'></div>
                    </div>
                    <div className='app'>
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                </Provider>
            </body>
        </html>
    )
}
