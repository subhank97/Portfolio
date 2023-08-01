import React from 'react'
import Me from '../assets/me.jpg'

const About = () => {
    return (
        <div name='about' className='w-full h-100vh'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About Me
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='flex justify-center pt-6 sm:justify-end'>
                            <img src={Me} alt="Picture Of Myself" className='rounded-3xl h-60' />
                        </div>

                    <div>
                        <p>
                        As a dedicated Software Engineer, my keen interest in exploring new technologies fuels 
                        my motivation. I consistently refine my skills, deeply appreciating the mentorship and 
                        practical experiences that shape me into a more adept programmer. The vast realm of 
                        technology, with its power to simplify life and make room for passions, sparked my journey 
                        into programming. Overcoming initial hurdles, I evolved my curiosity into a profound passion, 
                        realizing the necessity of breaking down complex tasks into manageable segments for efficient 
                        project execution. This progression, characterized by my self-driven spirit flourishing in 
                        dynamic, fast-paced settings, eventually guided me to a web development role at a startup. 
                        This opportunity refined my skills and furnished me with hands-on project experiences, ideally 
                        equipping me for a full-time role. Now, I stand ready to utilize my skill set for continuous 
                        learning and significant contributions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About