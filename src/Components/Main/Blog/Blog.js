import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Blog = () => {

    useTitle('Blog')
    return (
        <div className='w-2/3 text-center mx-auto'>
            <h2 className="text-5xl font-bold my-10">Some Important Questions</h2>
            <div className='text-start my-20'>
                <h3 className="text-4xl font-semibold">
                    1) Difference between SQL and NoSQL
                </h3>
                <p className="text-2xl">
                    ans: SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                </p>
            </div>
            <div className='text-start my-20'>
                <h3 className="text-4xl font-semibold">
                    2) What is JWT, and how does it work?
                </h3>
                <p className="text-2xl">
                    ans: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                </p>
            </div>
            <div className='text-start my-20'>
                <h3 className="text-4xl font-semibold">
                    3) What is the difference between javascript and NodeJS?
                </h3>
                <p className="text-2xl">
                    ans: JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                </p>
            </div>
            <div className='text-start my-20'>
                <h3 className="text-4xl font-semibold">
                    4) How does NodeJS handle multiple requests at the same time?

                </h3>
                <p className="text-2xl">
                    ans: How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                </p>
            </div>
        </div>
    );
};

export default Blog;