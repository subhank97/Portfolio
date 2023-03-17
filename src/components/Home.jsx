import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

const Home = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                BIRDS({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div ref={vantaRef} name='home' className='w-full h-screen '>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600 font-bold'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Subhan Khan</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    Full Stack Developer with experience using frontend and backend technologies such
                    as Javascript, Python, React, Vue.js, Rails, and FastAPI. Transitioned from finance
                    to tech with a strong interest in full-stack development and working in cross-functional
                    teams.
                </p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        View Work
                        <Link to="projects" smooth={true} offset={50} duration={500}>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-2' />
                        </span>
                    </Link>
                </button>
            </div>
        </div>
        </div >
    )
}

export default Home