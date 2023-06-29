import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import React from "react";

const Home = () => {

    return (
        <div name='home' className='w-full h-screen '>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600 font-bold'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold'>Subhan Khan</h1>
                <h2 className='text-4xl sm:text-7xl font-bold'>I'm a Software Engineer</h2>
                <p className='py-4 max-w-[700px]'>
                    Full Stack Developer with experience using frontend and backend technologies such
                    as Javascript, Python, React, Vue.js, Rails, and FastAPI. Transitioned from finance
                    to tech with a strong interest in full-stack development and working in cross-functional
                    teams.
                </p>
                <div className='w-fit'>
                    <Link to="projects" smooth={true} offset={50} duration={500}>
                        <button className='group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                            View Work
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-2' />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home