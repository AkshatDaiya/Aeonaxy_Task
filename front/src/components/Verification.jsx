import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDribbble, FaTwitter, FaFacebookSquare, FaPinterest, FaCheck } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { IoMdMail } from "react-icons/io";
import { } from "../../public/upload";
import ContextApi from '../ContextApi';

function Verification() {
    // Context API
    const { img } = useContext(ContextApi);

    // Get email from localStorage
    const email = localStorage.getItem('email');

    // State for hamburger Menu
    const [isClicked, setIsClicked] = useState(false);

    // Function to toggle hamburger menu
    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div id='varification'>
            {/* Navigation */}
            <nav className='h-20 w-full z-10 flex items-center border-b border-gray-200 fixed top-0 bg-[#f7f7f8]'>
                <img src='../dribbble-logo.png' alt="logo" className='w-[150px] mx-2' />
                <div className="pages w-full flex items-center justify-between relative">
                    <div className="burger hidden">
                        {/* Hamburger menu */}
                        <span onClick={handleClick}> {isClicked ? <RxCross1 className='text-black' /> : <RxHamburgerMenu />} </span>
                    </div>
                    <div className={isClicked ? "pageLink active" : "pageLink"}>
                        {/* Page links */}
                        <Link to="#" className="first px-4 font-semibold text-gray-600 hover:underline hover:border-purple-800 hover:text-purple-800">Inspiration</Link>
                        <Link to="#" className="px-4 font-semibold text-gray-600 hover:underline hover:border-purple-800 hover:text-purple-800">Find Work</Link>
                        <Link to="#" className="px-4 font-semibold text-gray-600 hover:underline hover:border-purple-800 hover:text-purple-800">Learn Design</Link>
                        <Link to="#" className="px-4 font-semibold text-gray-600 hover:underline hover:border-purple-800 hover:text-purple-800">Go Pro</Link>
                        <Link to="#" className="px-4 font-semibold text-gray-600 hover:underline hover:border-purple-800 hover:text-purple-800">Hire Designers</Link>
                    </div>
                    <div className="pageImg flex items-center gap-3.5">

                        {/* Search bar */}
                        <div className="flex justify-center p-1 w-full">
                            <div className={`search relative flex justify-end ${isClicked ? "search active" : "search"}`}>
                                <input type="text" className="max-w-40 backdrop-blur-sm bg-white/20 py-2 pl-10 pr-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-violet-300 transition-colors duration-300" placeholder="Search..." />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    {/* Search icon */}
                                    <svg className="w-4 h-4 text-violet-300 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/* User avatar and upload button */}
                        <img src={`../upload/${img ? img : 'thor.jpg'}`} alt="avater" className={`userImg w-16 h-16 rounded-full shadow-2xl ${isClicked ? "userImg active" : "userImg"}`} />
                        <button type='button' className={`uploadButton transition-all duration-500 ease-in-out hover:bg-pink-400 py-3 px-7 rounded-xl font-medium text-medium bg-pink-600 text-white mr-4 ${isClicked ? "uploadButton active" : "uploadButton"}`}>Upload</button>
                    </div>
                </div>
            </nav>

            {/* Main content */}
            <main className='flex flex-col items-center justify-center text-center h-screen mt-10'>
                <h1 className='text-4xl font-extrabold'>Please verify your email...</h1>
                <div className="relative">
                    <IoMdMail className='text-gray-400 w-40 h-40' />
                    <FaCheck className=' absolute top-3 right-0 bg-pink-500 text-white rounded-full w-12 h-12 p-1 border-[7px] border-white' />
                </div>
                <p className='text-gray-600 text-xl'>Please verify your email address. We've sent a confirmation email to:</p>
                <p className='text-xl font-extrabold py-8'>{email}</p>
                <p className='text-gray-600 text-xl'>Click the confirmation link in that email begin using Dribbble.</p>
                <p className='text-gray-600 text-xl pt-6'>Didn't receive the email? Check your Spam folder, it may have been caught by filter, If <br /> you don't see it, you can <Link to="#" className="border-b border-solid border-transparent text-pink-400 hover:border-purple-800 hover:text-purple-800">resend the confirmation email.</Link> </p>
                <p className='text-gray-600 text-xl pt-6'>Wrong email address? <Link to="#" className="border-b border-solid border-transparent text-pink-400 hover:border-purple-800 hover:text-purple-800">Change it.</Link></p>
            </main>

            {/* Footer */}
            <footer className="footer-1 bg-gray-100 py-8 sm:py-12">
                <div className="ml-auto px-4">
                    <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">

                        <div className="links p-4">
                            <img src="../logo.png" alt="logo" className='w-24 my-4 ' />
                            <p className='text-gray-600'>Dribbble is the world's leading <br /> cummunity for creatives to share,  <br />grow and get hired </p>
                            <div className="icons flex justify-around w-52 mt-5">
                                <FaDribbble className="text-2xl text-gray-600" />
                                <FaTwitter className="text-2xl text-gray-600" />
                                <FaFacebookSquare className="text-2xl text-gray-600" />
                                <CiInstagram className="text-2xl text-gray-600" />
                                <FaPinterest className="text-2xl text-gray-600" />
                            </div>
                        </div>

                        <div className="sm:w-1/2 md:w-1/4 xl:w-[15%]">
                            <h5 className="text-xl font-bold mb-6">For designers</h5>
                            <ul className="list-none footer-links text-gray-600">
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Go Pro!</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Explore design work</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Design blog</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Overtime podcast</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Payoffs</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Weekly Warm-Up</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Refer a Friend</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Code of conduct</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="sm:w-1/2 md:w-1/4 xl:w-[15%] mt-8 sm:mt-0">
                            <h5 className="text-xl font-bold mb-6">Hire designers</h5>
                            <ul className="list-none footer-links text-gray-600">
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Post a job opening</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Post a freelance project</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Search for designers</Link>
                                </li>

                                <h5 className="text-xl font-bold mb-6 text-black">Brands</h5>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Advertise with us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="sm:w-1/2 md:w-1/4 xl:w-[15%] mt-8 md:mt-0">
                            <h5 className="text-xl font-bold mb-6">Company</h5>
                            <ul className="list-none footer-links text-gray-600">
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">About</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Careers</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Support</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Media kit</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Testimonials</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">API</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Terms of service</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Privacy policy</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Cookie policy</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="sm:w-1/2 md:w-1/4 xl:w-[15%] mt-8 md:mt-0">
                            <h5 className="text-xl font-bold mb-6">Directories</h5>
                            <ul className="list-none footer-links text-gray-600">
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Design jobs</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Designers for hire</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Freelance designers <br /> for hire</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Tags</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Places</Link>
                                </li>

                                <h5 className="text-xl font-bold mb-6 text-black">Company</h5>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Dribbble Marketplace</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Creative Market</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Fontspring</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Font Squirrel</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="sm:w-1/2 md:w-1/4 xl:w-[15%] mt-8 md:mt-0">
                            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Design Resources</h5>
                            <ul className="list-none footer-links text-gray-600">
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Freelancing</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Design Hiring</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Desige Portfolio</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Desige Education</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Creative Process</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Desige Industry <br /> Trends</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 flex justify-between items-center">
                        <p className="text-xs leading-5 text-gray-500">&copy; 2023 Bribbble. All rights reserved.</p>

                        <div className="shots flex">
                            <h1 className='font-bold'>20,501,853 <span className='font-normal text-gray-500'>shots dribbbled</span> </h1>
                            <FaDribbble className="text-2xl text-pink-700 bg-pink-500 rounded-full mx-2" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Verification;
