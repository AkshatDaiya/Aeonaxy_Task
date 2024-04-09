import React, { useState } from 'react'
import '../../src/App.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Reg() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    const [fromData, setFromData] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://aeonaxy-back.onrender.com/api/reg', fromData)
            .then((Response) => {
                localStorage.setItem('email', Response.data.email)
                setIsClicked(false);
                navigate('/pageOne');
            })
            .catch((Error) => {
                setErrorMessage(Error.response.data.message);
            });
    };



    return (
        <div id='Reg' className='flex'>
            <img src="../dribbble.png" alt="" className='h-screen object-cover' style={{ aspectRatio: '0.9' }} />
            <form className='regForm' onSubmit={handleSubmit}>
                <span className='float-right pt-2 px-7'>Already a member? <Link className='text-blue-900 font-medium'>Sign in</Link></span>
                <div className="style pt-8 px-36">
                    <h1 className='text-3xl font-extrabold mb-8 mt-4'>Sign up to Dribbble</h1>
                    <h4 className='text-red-500 text-base mb-3 mt-4'>{errorMessage}</h4>
                    <div className="firstRow my-2 flex mb-8">
                        <div className="name mr-6 w-full">
                            <label htmlFor="name" className='font-semibold'>Name</label><br />
                            <input type="text" name="name" id="name" className='p-2 w-full' style={{ background: '#80808017' }} placeholder="Enter your Name" value={fromData.name} onChange={(e) => { setFromData(prevState => ({ ...prevState, name: e.target.value })) }} autoComplete="name" required />
                        </div>

                        <div className="userN w-full">
                            <label htmlFor="userName" className='font-semibold'>Username</label><br />
                            <input type="text" name="userName" id="userName" className='p-2 w-full' style={{ background: '#80808017' }} placeholder="Enter your Username" value={fromData.username} onChange={(e) => { setFromData(prevState => ({ ...prevState, username: e.target.value })) }} autoComplete="username" required />
                        </div>
                    </div>
                    <div className="secondRow my-2 mb-8">
                        <label htmlFor="email" className='font-semibold'>Email</label><br />
                        <input type="email" name="email" id="email" className='p-2 w-full' style={{ background: '#80808017' }} placeholder="Enter your valid Email" value={fromData.email} onChange={(e) => { setFromData(prevState => ({ ...prevState, email: e.target.value })) }} autoComplete="email" required />
                    </div>
                    <div className="thirdRow my-2 mb-2">
                        <label htmlFor="password" className='font-semibold'>Password</label><br />
                        <input type="password" name="password" id="password" className='p-2 w-full' style={{ background: '#80808017' }} minLength={6} placeholder="6+ characters" value={fromData.password} onChange={(e) => { setFromData(prevState => ({ ...prevState, password: e.target.value })) }} autoComplete="current-password" required />
                    </div>
                    <div className="fourthRow mb-4 flex items-start">
                        <input type="checkbox" className='mr-1 w-7 h-7' />
                        <p className='text-gray-500 font-medium'>Creating an account means you're okay with our <span className='text-blue-900'>Terms of Service, Privacy Policy,</span> and our default <span className='text-blue-900'> Notification Settings.</span></p>
                    </div>
                    <button
                        type="submit"
                        onClick={() => { setIsClicked(true) }}
                        className='transition-all duration-500 ease-in-out hover:bg-pink-400 py-3 px-10 rounded-xl font-medium text-medium bg-pink-600 text-white'
                    >
                        {isClicked ?
                            <img src="../Rolling.gif" alt="Rolling" className='w-6 mx-3 text-white' />
                            :
                            "Create Account"
                        }
                    </button><br />

                    <p className='text-gray-500 leading-tight my-3 text-xs'>This site in protected by reCAPTCHA and the Google <br /> <span className='text-blue-900'>Privacy Policy</span> and <span className='text-blue-900'>Terms of Service</span> apply.</p>
                </div>

            </form>
        </div>
    )
}

export default Reg
