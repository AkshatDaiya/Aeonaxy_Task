import React, { useContext, useRef, useState } from 'react';
import { MdCameraEnhance } from "react-icons/md";
import '../../src/App.css'
import ContextApi from '../ContextApi';
import PageTwo from './PageTwo';

function PageOne() {
    // Ref for file input
    const inputRef = useRef(null);
    // State for image
    const [image, setImage] = useState("");
    // Context API
    const { data, setData, page, setPage } = useContext(ContextApi);

    // Function to trigger file input click
    const handleImgClick = () => {
        inputRef.current.click();
    }

    // Function to handle image change
    const handleImgChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setData({ ...data, image: file });
    }

    return (
        <div>
            {/* Conditional rendering based on page */}
            {page === 1 ? (
                <div id='details'>

                    {/* Navigation */}
                    <nav className='h-14 flex items-center'>
                        <img src="../logo.png" alt="logo" className='w-24 mx-4' />
                    </nav>

                    {/* Main content */}
                    <div className="main container mx-auto max-w-2xl">
                        <h1 className='text-4xl font-bold mb-3 text-center'>Welcome! Let's create your profile</h1>
                        <p className='text-gray-500 mb-9 text-center'>Let others get to know you better! You can do these later</p>

                        {/* Form */}
                        <form>

                            {/* Avatar upload */}
                            <div className="img mb-6">
                                <label htmlFor="avatar" className='text-2xl font-semibold'>Add an avatar</label>
                                <span className='flex mt-4'>

                                    {/* Show uploaded image or default avatar */}
                                    {image ? (
                                        <img src={URL.createObjectURL(image)} alt="img" className='w-44 h-44 rounded-full cursor-pointer' onClick={handleImgClick} />
                                    ) : (
                                        <div className='w-44 h-44 rounded-full flex items-center justify-center cursor-pointer border-4 border-dashed border-gray-300 hover:border-gray-400' onClick={handleImgClick}>
                                            <MdCameraEnhance className='text-3xl text-gray-500' />
                                        </div>
                                    )}
                                    <span className='pt-12 pl-6'>
                                        <input type="file" name="image" id="image" ref={inputRef} onChange={handleImgChange} required />
                                        {/* Display selected file name */}
                                        <p className='text-gray-500 mt-6'>
                                            {data.image ? `Selected file: ${data.image.name}` : 'Or choose one of our defaults'}
                                        </p>
                                    </span>
                                </span>
                            </div>

                            {/* Location input */}
                            <label htmlFor="location" className='text-2xl font-semibold'>Add your location</label>
                            <input type="text" name="location" id="location" className='p-2 w-full mt-4 border-b border-gray-400' placeholder="Enter a location" value={data.location} onChange={(e) => {
                                setData({ ...data, location: e.target.value })
                            }} required />

                            {/* Next button */}
                            {!data.image || !data.location ?
                                <button type='button' className='transition-all duration-500 ease-in-out hover:bg-pink-400 py-3 px-24 rounded-xl font-medium text-medium bg-pink-600 text-white my-6' onClick={() => setPage(page + 1)} disabled>Next</button>
                                :
                                <button type='button' className='transition-all duration-500 ease-in-out hover:bg-pink-400 py-3 px-24 rounded-xl font-medium text-medium bg-pink-600 text-white my-6' onClick={() => setPage(page + 1)}>Next</button>
                            }
                        </form>
                    </div>
                </div>
            ) : (
                // Render PageTwo if page is 2
                page === 2 ? (<PageTwo />) : <></>
            )}
        </div>
    );
}

export default PageOne;
