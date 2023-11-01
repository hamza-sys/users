import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../redux/reducers/userReducer'

const Edit = () => {
     const [user, setUser] = useState({
        id: '',
        name: '',
        email: ''
    })

    const {userId} = useParams()

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    useEffect(() => {
        const ExistingUsers = users.filter(user => user.id == userId)

        const [user] = ExistingUsers

        setUser(user)
    }, [])

    const handleChange = (evt) => {
        setUser({
            ...user,
            [evt.target.name]: evt.target.value
        })
    }

    const handleEditUser = (evt) => {
        evt.preventDefault()

        if (!user.name || !user.email) {
            alert('Data Required...')
        }

        dispatch(updateUser(user))

        setUser({
            id: '',
            name: '',
            email: ''
        })

        navigate('/')
        // console.log(user)
    }
  return (
    <div className='max-w-xl mx-auto my-12 py-7 px-2 md:py-9 bg-gray-100 border border-gray-300'>
        <div className='md:p-0 max-w-md mx-auto'>
            <Link to='/' className='mb-2 block'><span>&#8592;</span></Link>
        <h2 className='text-lg font-bold md:text-2xl'>Edit User</h2>
        <form onSubmit={handleEditUser} className='w-full'>
            <div className='mt-3'>
                <label htmlFor='name' className='font-bold text-sm'>Name</label>
                <input type='text' id='name' name='name' value={user.name} onChange={handleChange} placeholder='Enter user name' required className='border border-gray-500 block w-full p-2 mt-1' />
            </div>

             <div className='mt-3'>
                <label htmlFor='email' className='font-bold text-sm'>Email</label>
                <input type='text' id='email' name='email' value={user.email} onChange={handleChange} placeholder='Enter user email' required className='border border-gray-500 block w-full p-2 mt-1' />
            </div>

            <button className='bg-blue-600 mt-6 p-2 text-sm rounded text-white'>Edit User</button>
        </form>
        </div>
    </div>
  )
}

export default Edit