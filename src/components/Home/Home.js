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
                        <h4>A bangladeshi leading Online learning Platform.</h4>
                        <p>Let's start today to learn new thing</p>
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