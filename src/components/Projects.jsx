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

                    <div className='md:flex'>
                        <img src={photofolio} alt='photogallery-app' className='sm:h-auto md:w-1/2 md:h-2/6' />

                        <div className='flex flex-col md:ml-10 md:w-1/2'>
                            <div className='mx-auto'>
                                <span className='text-2xl font-bold text-white tracking-wider sm:mt-10'>
                                    React.js/Rails App
                                </span>
                                <p className='mt-2 w-full'>
                                    My final project at my coding bootcamp. PhotoFolio is an evolved Instagram-inspired photo
                                    gallery app styled with Tailwind, allowing users to browse, comment on, and upload photos
                                    through a beautifully designed profile page. Developed as a Single Page Application using
                                    React.js and Ruby on Rails, it integrates Redux for state management, React Router for
                                    seamless navigation, and offers features like modals for detailed post views and real-time
                                    post interactions. Backend consistency is ensured through synchronizing front-end activities
                                    like post creation and deletion with the backend database.
                                </p>
                                <p className='text-pink-600 font-bold'>
                                    This app is deployed on Render so the server can take up to a minute to wake up :(
                                </p>

                            </div>

                            <div className='flex justify-end mt-3'>
                                <a href='https://photofolio-eq0d.onrender.com'>
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-md'>Demo</button>
                                </a>
                                <a href='https://github.com/subhank97/Not-Instagram'>
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-md'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='md:flex my-16'>
                        <img src={ecommerce} alt='ecommerce-app' className='sm:h-auto md:w-1/2 md:h-2/6' />

                        <div className='flex flex-col md:ml-10 md:w-1/2'>
                            <div className='mx-auto'>
                                <span className='text-2xl font-bold text-white tracking-wider sm:mt-10'>
                                    Next.js/Sanity.io App
                                </span>
                                <p className='mt-2 w-full'>
                                    Subis Sneaker Shop stands out as a state-of-the-art E-commerce platform developed using
                                    Next.js, ensuring swift and user-friendly navigation through server-side rendering. It
                                    integrates Sanity.io, facilitating adaptive content management, while Stripe is implemented
                                    for secure and effortless online purchases. Utilizing React hooks, the application ensures
                                    enhanced user interaction, effectively manages shopping cart contents, and provides instant
                                    content refreshes. Users can explore an extensive sneaker assortment, earmark their favorite
                                    pairs, and experience a frictionless checkout process courtesy of Stripe.
                                </p>
                            </div>

                            <div className='flex justify-end mt-3'>
                                <a href='https://subissneakerstore-git-main-subhank97.vercel.app/'>
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-md'>Demo</button>
                                </a>
                                <a href='https://github.com/subhank97/ECommerce-Frontend'>
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