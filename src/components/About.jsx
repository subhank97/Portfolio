import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen text-gray-300'>
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
                        <p>
                            I began my professional career in the field of finance but shortly after found myself
                            drained by the lack of creativity and innovation in the field. After taking a short hiatus
                            from finance and exploring alternative fields, I realized I am a self starter by nature and
                            thrive in energetic, fast paced environments. I was introduced to coding by my network of
                            friends and found myself excited every time I opened my laptop to learn about coding. The
                            were no limits with what I can create. I took the chance on formally developing my development
                            skills and completed a full stack development apprenticeship in a health start up, both of which
                            polished my skills and provided me with real world side projects. I’ve never been more prepared 
                            to bring my skill set to a full time role where I can continue learn to and contribute to.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About