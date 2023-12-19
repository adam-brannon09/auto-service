
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'





function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const navigate = useNavigate()

    const onChange = (e) => {
        e.preventDefault()
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        navigate('/dashboard')
    }

    return (
        <>
            <section className='mt-24'>
                <h1 className='text-3xl'>Sign In</h1>
                <br />
                <p className='text-2xl'>Please Sign In</p>
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
                    <Link to='/register' className='mt-10'>Not a member? Click Here to register</Link>
                </form>
            </section>
        </>
    )
}
export default Login