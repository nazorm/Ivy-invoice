import React from 'react';
// import styled from 'styled-components';
import Link from 'next/link'
// import { customMedia } from 'src/styles/breakpoints';

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

// const Wrapper = styled.div`
//     width: 500px;
//     height: 500px;
//     margin: auto;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     font-family: 'Roboto', sans-serif;
//     .error-code{
//         margin-bottom: 20px;
//         font-family: 'Cantora One', sans-serif;
//     }
//     .home-link {
//         color: #3232a7;
//         text-decoration: none;
//     }
//     ${customMedia.lessThan('medium')`
//         width: 90%;
//     `}
// `;

export default NotFoundPage;