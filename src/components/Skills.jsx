import React from 'react'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import html from '../assets/html.png'
import tailwind from '../assets/tailwind.png'
import css from '../assets/css.png'
import github from '../assets/github.png'


const Skills = () => {
    return (
        <div name="skills" className='w-full md:h-screen text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>These are the technolgies I worked with:</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16]'>
                        <img className='w-20 mx-auto hover:scale-150 duration-500' src={javascript} alt='javascript logo' />
                        <p className='py-5'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16]'>
                        <img className='w-20 mx-auto hover:scale-150 duration-500' src={react} alt='react logo' />
                        <p className='py-5'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16]'>
                        <img className='w-20 mx-auto hover:scale-150 duration-500' src={html} alt='html logo' />
                        <p className='py-5'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16]'>
                        <img className='w-20 mx-auto hover:scale-150 duration-500' src={tailwind} alt='tailwind logo' />
                        <p className='py-5'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16]'>
                        <img className='w-20 mx-auto hover:scale-150 duration-500' src={css} alt='css logo' />
                        <p className='py-5'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16]'>
                        <img className='w-20 mx-auto hover:scale-150 duration-500' src={github} alt='github logo' />
                        <p className='py-5'>Github</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Skills