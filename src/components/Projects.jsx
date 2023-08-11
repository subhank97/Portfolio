import React from 'react'
import ecommerce from '../assets/SneakerStore.png'
import photofolio from '../assets/PhotoFolio.png'


const Projects = () => {
    return (
        <div name="projects" className='w-full md:h-screen'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
                </div >
                <div>

                    <div className='sm:my-4 md:flex md:my-10'>
                        <img src={ecommerce} alt='ecommerce-app' className='md:w-1/2 h-auto' />

                        <div className='flex flex-col md:ml-10 md:w-1/2'>
                            <div className='mx-auto'>
                                <span className='text-2xl font-bold text-white tracking-wider sm:mt-10'>
                                    Next.js/Sanity.io App
                                </span>
                                <p className='mt-2 w-full'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti animi impedit repellat corrupti non debitis ullam porro, tenetur itaque dolorum magnam consectetur earum ea, molestiae veniam ad, maxime distinctio?
                                </p>
                            </div>

                            <div className='flex justify-end mt-auto'>
                                <a href='https://subissneakerstore-git-main-subhank97.vercel.app/'>
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-md'>Demo</button>
                                </a>
                                <a href='https://github.com/subhank97/ECommerce-Frontend'>
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-md'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='sm:my-4 md:flex md:my-10'>
                        <img src={photofolio} alt='photogallery-app' className='md:w-1/2 h-auto' />

                        <div className='flex flex-col md:ml-10 md:w-1/2'>
                            <div className='mx-auto'>
                                <span className='text-2xl font-bold text-white tracking-wider sm:mt-10'>
                                    React.js/Rails App
                                </span>
                                <p className='mt-2 w-full'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti animi impedit repellat corrupti non debitis ullam porro, tenetur itaque dolorum magnam consectetur earum ea, molestiae veniam ad, maxime distinctio?
                                </p>
                            </div>

                            <div className='flex justify-end mt-auto'>
                                <a href='https://photofolio-eq0d.onrender.com'>
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-md'>Demo</button>
                                </a>
                                <a href='https://github.com/subhank97/Not-Instagram'>
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-md'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects