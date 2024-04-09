import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import ContextApi from '../ContextApi';
import axios from 'axios';

function PageTwo() {
    // Context API
    const { data, setData, page, setPage, setImg } = useContext(ContextApi);

    const navigate = useNavigate();

    // State variables
    const [isClicked, setIsClicked] = useState(false);
    const email = localStorage.getItem('email');

    // State for checkboxes
    const [work, setWork] = useState(true);
    const [hire, setHire] = useState(true);
    const [inspire, setInspire] = useState(true);

    // Function to handle checkbox changes
    const handleCheckBox = (value) => {
        if (value === 'Looking to share my work') {
            setWork(prevState => !prevState);
            if (work) {
                setData(prevData => ({
                    ...prevData,
                    desc: [...prevData.desc, value]
                }));
            } else {
                setData(prevData => ({
                    ...prevData,
                    desc: prevData.desc.filter(item => item !== value)
                }));
            }
        }
        if (value === 'Looking to hire a designer') {
            setHire(prevState => !prevState);
            if (hire) {
                setData(prevData => ({
                    ...prevData,
                    desc: [...prevData.desc, value]
                }));
            } else {
                setData(prevData => ({
                    ...prevData,
                    desc: prevData.desc.filter(item => item !== value)
                }));
            }
        }
        if (value === 'Looking for design inspiration') {
            setInspire(prevState => !prevState);
            if (inspire) {
                setData(prevData => ({
                    ...prevData,
                    desc: [...prevData.desc, value]
                }));
            } else {
                setData(prevData => ({
                    ...prevData,
                    desc: prevData.desc.filter(item => item !== value)
                }));
            }
        }
    }

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Add this line to prevent form reload

        // Prepare form data
        const formData = new FormData();
        formData.append('image', data.image);
        formData.append('location', data.location);
        formData.append('desc', data.desc);
        formData.append('email', email);

        // Submit data via Axios
        axios.post('https://aeonaxy-back.onrender.com/api/details', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((Response) => {
                console.log(Response);
                if (Response.status === 200) {
                    setImg(Response.data.img)
                    setIsClicked(false);
                    navigate('/verification');
                }
            })
            .catch((Error) => { console.log(Error) });
    }

    return (
        <div id='details'>
            {/* Navigation */}
            <nav className='h-14 flex items-center'>
                <img src="../logo.png" alt="logo" className='w-24 mx-4' />
                <button type='button' className='text-2xl bg-gray-200 p-2 rounded-md' onClick={() => setPage(page - 1)}><MdOutlineKeyboardArrowLeft /></button>
            </nav>
            {/* Form section */}
            <div className="main container mx-auto max-w-5xl flex flex-col items-center">
                <h1 className='text-4xl font-bold mb-3 text-center'>What brings you to Dribbble?</h1>
                <p className='text-gray-500 mb-9 text-center'>Select the options that best describe you. Don't worry, you can explore other options later.</p>
                {/* Form */}
                <form className='flex items-center flex-col' onSubmit={(e) => { handleSubmit(e) }} encType="multipart/form-data">
                    {/* Checkbox options */}
                    <div className="checkBox flex gap-3">
                        {/* Option: Looking to share my work */}
                        <div className={`desTOwork flex items-center flex-col border rounded-2xl py-4 transition-all duration-300 ease-in-out ${!work && 'border border-pink-600'}`}>
                            {/* Image */}
                            <img
                                src="../Designer_looking_for_work.png"
                                alt="looking_for_work"
                                className='w-80 h-56'
                            />
                            {/* Label */}
                            <h1 className='text-lg font-bold text-center mb-2'>I'm a designer looking to <br /> share my work</h1>
                            {/* Checkbox */}
                            <input
                                type="checkbox"
                                className="relative w-7 h-7 aspect-square !appearance-none !bg-none checked:!bg-gradient-to-tr checked:!bg-pink-600 checked:!to-white bg-white border border-gray-300 shadow-sm rounded-full !outline-none !ring-0 !text-transparent !ring-offset-0 hover:!border-pink-600 cursor-pointer transition-all duration-300 ease-in-out focus-visible:!outline-offset-2 focus-visible:!outline-2 focus-visible:!outline-sky-400/30 focus-visible:bg-pink-600 after:w-[35%] after:h-[53%] after:absolute after:opacity-0 after:top-[40%] after:left-[50%] after:-translate-x-2/4 after:-translate-y-2/4 after:rotate-[25deg] after:drop-shadow-[1px_0.5px_1px_rgba(56,149,248,0.5)] after:border-r-[0.25em] after:border-r-white after:border-b-[0.25em] after:border-b-white after:transition-all after:duration-200 after:ease-linear checked:after:opacity-100 checked:after:rotate-45"
                                value={work}
                                onChange={(e) => { handleCheckBox('Looking to share my work') }} />
                        </div>
                        {/* Option: Looking to hire a designer */}
                        <div className={`desTohire flex items-center flex-col border rounded-2xl py-4 transition-all duration-300 ease-in-out ${!hire && 'border border-pink-600'}`}>
                            <img
                                src="../hire_a_designer.png"
                                alt="hire_a_designer"
                                className='w-80 h-56'
                            />
                            <h1 className='text-lg font-bold text-center mb-2'>I'm looking to hire a <br /> designer</h1>
                            <input
                                type="checkbox"
                                className="relative w-7 h-7 aspect-square !appearance-none !bg-none checked:!bg-gradient-to-tr checked:!bg-pink-600 checked:!to-white bg-white border border-gray-300 shadow-sm rounded-full !outline-none !ring-0 !text-transparent !ring-offset-0 hover:!border-pink-600 cursor-pointer transition-all duration-300 ease-in-out focus-visible:!outline-offset-2 focus-visible:!outline-2 focus-visible:!outline-sky-400/30 focus-visible:bg-pink-600 after:w-[35%] after:h-[53%] after:absolute after:opacity-0 after:top-[40%] after:left-[50%] after:-translate-x-2/4 after:-translate-y-2/4 after:rotate-[25deg] after:drop-shadow-[1px_0.5px_1px_rgba(56,149,248,0.5)] after:border-r-[0.25em] after:border-r-white after:border-b-[0.25em] after:border-b-white after:transition-all after:duration-200 after:ease-linear checked:after:opacity-100 checked:after:rotate-45"
                                value={hire}
                                onChange={(e) => { handleCheckBox('Looking to hire a designer') }}
                            />
                        </div>
                        {/* Option: Looking for design inspiration */}
                        <div className={`desToins flex items-center flex-col border rounded-2xl py-4 transition-all duration-300 ease-in-out w-[354px] p-4 ${!inspire && 'border border-pink-600'}`}>
                            <img
                                src="../design_insperation.png"
                                alt="design_insperation"
                                className='w-80 h-56 transition-all duration-300 ease-in-out' />
                            <h1 className='text-lg font-bold text-center mb-2 bottom-10'>I'm looking for design <br /> inspiration</h1>
                            <input
                                type="checkbox"
                                className="relative w-7 h-7 aspect-square !appearance-none !bg-none checked:!bg-gradient-to-tr checked:!bg-pink-600 checked:!to-white bg-white border border-gray-300 shadow-sm rounded-full !outline-none !ring-0 !text-transparent !ring-offset-0 hover:!border-pink-600 cursor-pointer transition-all duration-300 ease-in-out focus-visible:!outline-offset-2 focus-visible:!outline-2 focus-visible:!outline-sky-400/30 focus-visible:bg-pink-600 after:w-[35%] after:h-[53%] after:absolute after:opacity-0 after:top-[40%] after:left-[50%] after:-translate-x-2/4 after:-translate-y-2/4 after:rotate-[25deg] after:drop-shadow-[1px_0.5px_1px_rgba(56,149,248,0.5)] after:border-r-[0.25em] after:border-r-white after:border-b-[0.25em] after:border-b-white after:transition-all after:duration-200 after:ease-linear checked:after:opacity-100 checked:after:rotate-45"
                                value={inspire}
                                onChange={(e) => { handleCheckBox('Looking for design inspiration') }}
                            />
                        </div>
                    </div>
                    {/* Submit button */}
                    {data.desc.length === 0 ?
                        <button
                            className='transition-all duration-300 ease-in-out hover:bg-pink-400 py-3 px-24 rounded-xl font-medium text-medium bg-pink-600 text-white mt-8'
                            disabled
                        >
                            Finish
                        </button>
                        :
                        <button
                            type='submit'
                            onClick={() => { setIsClicked(true) }}
                            className='transition-all duration-300 ease-in-out hover:bg-pink-400 py-3 px-24 rounded-xl font-medium text-medium bg-pink-600 text-white my-8'
                        >
                            {/* Loading indicator */}
                            {isClicked ?
                                <img src="../Rolling.gif" alt="Rolling" className='w-6 mx-3 text-white' />
                                :
                                "Finish"
                            }
                        </button>
                    }
                </form>
            </div>
        </div>
    )
}

export default PageTwo;
