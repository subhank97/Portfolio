import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {

    return (
        <div name='home' className='w-full h-screen '>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Subhan Khan</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    Full Stack Developer with experience using frontend and backend technologies such
                    as Javascript, Python, React, Vue.js, Rails, and FastAPI. Transitioned from finance
                    to tech with a strong interest in full-stack development and working in cross-functional
                    teams.
                </p>
                <div>
                    <Link to="projects" smooth={true} offset={50} duration={500}>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
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