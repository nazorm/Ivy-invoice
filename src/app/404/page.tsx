import React from 'react';
import Link from 'next/link'

const NotFoundPage = () => {
    return (
        <>
            <div>
                <h1 className='error-code'>4 &nbsp;  &nbsp;0 &nbsp;  &nbsp;4</h1>
                <p>Page Not Found &nbsp; - &nbsp;
                    <Link href="/" className='home-link'>
                        Find your way back
                    </Link>
                </p>

            </div>
        </>
    )
};


export default NotFoundPage;