import React from 'react';
import Link from 'next/link'

 const NotFoundPage = () => {
    return (
        <section className='flex justify-center items-center w-screen h-screen'>
            <div className='h-52 w-72 text-center' >
                <h1 className='mt-9'>4 &nbsp;  &nbsp;0 &nbsp;  &nbsp;4</h1>
                <br/>
                <p>Page Not Found &nbsp; - &nbsp;
                    <Link href="/" className='text-accent-color-text'>
                        Find your way back
                    </Link>
                </p>

            </div>
        </section>
    )
};


export default NotFoundPage;
