import React from 'react';

const Container = () => {
    return (
        <div className='pb-3'>
            <div className="hero h-[65vh]" style={{ backgroundImage: `url("https://i0.wp.com/www.onceuponachef.com/images/2019/11/jennifer-segal-homepage-photo-2019.jpg?resize=1200%2C572&ssl=1")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Our FoodLee</h1>
                        <p className="mb-5">To provide essentials for families of at-risk communities during national emergencies and to improve nutritional standards for the people of Japan.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container;