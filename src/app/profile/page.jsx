'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Profile from '@/components/Profile'

const ProfilePage = () => {
    const router = useRouter()
    const { data: session } = useSession()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // fetch data
        const fetchPosts = async () => {
            const res = await fetch(`/api/users/${session?.user.id}/posts`)
            const data = await res.json()

            setPosts(data)
        }

        if (session?.user.id) fetchPosts()
    }, [])

    if (!posts.length) {
        return <p>Loading...</p>
    }

    const handleEdit = post => {
        router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async post => {}

    return (
        <Profile
            name='My'
            desc='Welcome to your personalized profile page'
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default ProfilePage
