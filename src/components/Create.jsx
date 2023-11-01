import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addUser } from '../redux/reducers/userReducer'
import { useDispatch, useSelector } from 'react-redux'

const Create = () => {
    const [user, setUser] = useState({
        name: '',
        email: ''
    })

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    const {name, email} = user;

    const handleChange = (evt) => {
        setUser({
            ...user,
            [evt.target.name]: evt.target.value
        })
    }

    const handleAddUser = (evt) => {
        evt.preventDefault()

        if (!name || !email) {
            alert('Data Required...')
        }

        dispatch(addUser({id: users.length + 1, name, email}))

        setUser({
            name: '',
            email: ''
        })

        navigate('/')
    }

  return (
    <div className='max-w-xl mx-auto my-12 py-7 px-2 md:py-9 bg-gray-100 border border-gray-300'>
        <div className='md:p-0 max-w-md mx-auto'>
            <Link to='/' className='mb-2 block'><span>&#8592;</span></Link>
        <h2 className='text-lg font-bold md:text-2xl'>Add New User</h2>
        <form onSubmit={handleAddUser} className='w-full'>
            <div className='mt-3'>
                <label htmlFor='name' className='font-bold text-sm'>Name</label>
                <input type='text' id='name' name='name' value={name} onChange={handleChange} placeholder='Enter user name' required className='border border-gray-500 block w-full p-2 mt-1' />
            </div>

             <div className='mt-3'>
                <label htmlFor='email' className='font-bold text-sm'>Email</label>
                <input type='text' id='email' name='email' value={email} onChange={handleChange} placeholder='Enter user email' required className='border border-gray-500 block w-full p-2 mt-1' />
            </div>

            <button className='bg-blue-600 mt-6 p-2 text-sm rounded text-white'>Add User</button>
        </form>
        </div>
    </div>
  )
}

export default Create