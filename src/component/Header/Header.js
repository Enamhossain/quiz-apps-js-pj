import React from 'react';
import img from "./img.svg"

const Header = () => {
    return (
        <div className='md:flex  content-center container mx-auto justify-around bg-sky-300'>
           
            <div className='font-bold mt-32 text-3xl mx-5 p-8'>
                 
                <h2 className=''>Quiz yourself on Coding!</h2>
                <h1 className=' '>Are you a budding computer programmer?
                <br /> Take our 8-question quiz to see how much you know about the world of coding</h1>
            </div>
            <div className='mt-5 '>
            <img  src={img} alt="img"/>
            </div>
        </div>
    );
};

export default Header;