import React from 'react';

const Available = () => {
    return (
        <footer data-theme="night" className="footer lg:flex justify-evenly sm:mx-auto px-10 py-20 text-base-content rounded-lg my-20 text-center shadow-lg border">
            <div>
                <p className=' text-gray-400'>We are Open monday-friday</p>
                <h3 className='text-2xl text-white font-bold'>7:00am - 9:00 pm</h3>
            </div>

            <div>
                <p className="text-gray-400">Have a question?</p>
                <h3 className="text-2xl text-white font-bold">+0250-5021-2222</h3>
            </div>

            <div className=' text-center'>
                <p className="text-gray-400">Want to order? Our address</p>
                <h3 className="text-2xl text-white font-bold">Liza Street, New York</h3>
            </div>
        </footer>
    );
};

export default Available;