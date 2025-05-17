import React from 'react'
import '../css/Home.css'
export const Home = () => {
    return (
        <>
            <div className='profile-content'>
                <div className='profile-left'>
                    <h2 id='hello'>HELLO !!</h2>
                    <h1 id='name'> I AM MANI<span>KANDAN</span></h1>
                    <h2 id='edu'>I Am a Civil Engineer</h2>
                    <div className='social-links'>
                        <a href=""><i class="bi bi-github"></i></a>
                        <a href=""><i class="bi bi-whatsapp"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                    </div>
                    <div className='profile-button'>
                        <button className='contact'>Contact Me!</button>
                        <button className='resume'>Resume <i class="bi bi-download"></i></button>
                    </div>
                </div>
                <div className='profile-right'>
                    <h1>image</h1>
                </div>
            </div>
        </>
    )
}
