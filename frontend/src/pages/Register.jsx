import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'




function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const { firstName, lastName, email, password } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // Initialize the useSelector hook to get the state from the store
    const { user, isSuccess, isError, message } = useSelector(state => state.auth)

    useEffect(() => {
        if (isError) {
            alert(message)
        }
        if (isSuccess) {
            navigate('/dashboard')
        }
        dispatch(reset())
    }, [isSuccess, isError, user, message, dispatch, navigate])

    const onChange = e => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {
            firstName,
            lastName,
            email,
            password
        }
        dispatch(register(userData))
    }

    return (
        <>
            <section className='mt-14'>
                <h1 className='text-3xl'>Register</h1>
                <br />
                <p className='text-2xl'>Register to Keep Track of All Your Automotive Work</p>
            </section>
            <section className="flex flex-row justify-center form-group mt-16">
                <form className="flex flex-col content-center shadow-xl p-12" onSubmit={onSubmit}>
                    <div className="form-group" >
                        <input
                            type="text"
                            className="input input-bordered w-11/12 mt-2"
                            id="firstName"
                            value={firstName}
                            name="firstName"
                            placeholder="First Name"
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="form-group" >
                        <input
                            type="text"
                            className="input input-bordered w-11/12 mt-2"
                            id="lastName"
                            value={lastName}
                            name="lastName"
                            placeholder="Last Name"
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="form-group" >
                        <input
                            type="text"
                            className="input input-bordered w-11/12 mt-2"
                            id="email"
                            value={email}
                            name="email"
                            placeholder="Email"
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            className="input input-bordered w-11/12 mt-2"
                            id="password"
                            value={password}
                            name="password"
                            placeholder="Password"
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className='text-center'>
                        <button className="btn btn-outline mt-12">Submit</button>
                    </div>
                    <Link to='/login' className='mt-10'>Already a member? Click Here to login</Link>
                </form>
            </section>
        </>
    )
}
export default Register