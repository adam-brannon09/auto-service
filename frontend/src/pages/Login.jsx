// Desc: Login page for the user to login to the application
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/auth/authSlice'
import { toast } from 'react-toastify'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // Initialize the useSelector hook to get the state from the store
    const { user, isSuccess, isError, message } = useSelector(state => state.auth)

    useEffect(() => {
        if (isError) {
            setFormData({
                email: '',
                password: '',
            })
            toast.error(message)
        }
        if (isSuccess || user) {
            navigate('/dashboard')
        }

    }, [isError, isSuccess, user, message, navigate])


    const onChange = (e) => {
        e.preventDefault()
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }
        dispatch(login(userData))
    }

    return (
        <>
            <section className='mt-24'>
                <h1 className='text-3xl'>Sign In</h1>
                <br />
                <p className='text-2xl'>Please Sign In To View Your Dashboard</p>
            </section>
            <section className="flex flex-row justify-center form-group mt-20">
                <form className="flex flex-col content-center" onSubmit={onSubmit}>
                    <div className="form-group" >
                        <input
                            type="email"
                            className="input input-bordered w-11/12"
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
                            className="input input-bordered w-11/12 mt-4"
                            id="password"
                            value={password}
                            name="password"
                            placeholder="Password"
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className='text-center'>
                        <button className="btn btn-outline mt-12" >Submit</button>
                    </div>
                    <Link to='/' className='mt-10'>Not a member? Click Here to register</Link>
                </form>
            </section>
        </>
    )
}
export default Login