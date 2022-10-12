import React from 'react';
import Topics from '../Topics/Topics';
import './Home.css'
const Home = () => {

    return (
        <div className=''>
            <div className="md:px-20 px-7">
                <div className="header-info md:flex-row sm:flex items-center">
                    <div className="header-img md:w-1/2 sm:w-full">
                        <img className='w-full' src="https://images.pexels.com/photos/6476566/pexels-photo-6476566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className="cover-info md:w-1/2 sm:w-full pl-12 md:text-left sm:text-center">
                        <h2 className='text-3xl font-bold my-4'>Majba IT BD</h2>
                        <p>We are a local organization leading online learning platform in Bangladesh. Our goal is to create human power in the computer world. So Let's start with the enthusiasm to learn something new.</p>
                    </div>
                </div>
                <div className="">
                    <Topics></Topics>
                </div>
            </div>
        </div>
    );
};

export default Home;