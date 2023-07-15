'use client'
import React from 'react'

async function getData () {
    const res = await fetch(
        'https://feisaldy.github.io/api-wilayah-indonesia/api/provinces.json'
    )
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default function Data () {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        getData()
            .then(responseData => {
                setData(responseData)
            })
            .catch(error => {
                console.error('Failed to fetch data:', error)
            })
    }, [])

    return (
        <main>
            <h1 className='text-white'>Provinces:</h1>
            {data.map(province => (
                <div key={province.id}>
                    <h2 className='mx-3 mt-3'>{province.name}</h2>
                </div>
            ))}
        </main>
    )
}
