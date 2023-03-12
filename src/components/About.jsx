import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Subhan, pleased to meet you. Take a look around.</p>
                    </div>

                    <div>
                        <p>Full Stack Developer with experience using frontend and backend technologies such
                            as Javascript, Python, React, Vue.js, Rails, and FastAPI. Transitioned from finance
                            to tech with a strong interest in full-stack development and working in cross-functional
                            teams. I’m very passionate about learning new things and staying current with the
                            technology and thrive when creating programs and solutions centered on improving the
                            customer experience through new technologies. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About