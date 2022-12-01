import React from 'react'
import Footer from './footer/footer';
import Header from './header/header';
import HeaderMid from './headerMid/headerMid';
import Help from './help/help';
import './home.css';

function Home(props) {
    return (
        <div className='home-base'>
            <nav>
                <svg xmlns="http://www.w3.org/2000/svg" width={32} viewBox="0 0 24 24"><path d="M16.5 2.75c-.965 0-1.75.785-1.75 1.75s.785 1.75 1.75 1.75 1.75-.785 1.75-1.75-.785-1.75-1.75-1.75zm0-2.75c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5-4.5-2.019-4.5-4.5 2.019-4.5 4.5-4.5zm-5.5 17.01s2.539 3.087 4.022 4.944c1.163 1.454 2.025 2.046 3.462 2.046 1.411 0 2.516-1.065 2.516-2.309 0-.539-.183-1.111-.594-1.646-1.52-1.973-2.406-3.035-2.406-3.035h-7zm-3.136-.01h-2.864c-.551 0-1-.449-1-1s.449-1 1-1h13.279c.893 0 1.4.248 1.963.958.96 1.211 2.505 3.163 2.562 3.251.736-.87 1.196-1.98 1.196-3.209 0-2.761-2.239-5-5-5h-14c-2.761 0-5 2.239-5 5s2.239 5 5 5h6.141c-1.144-1.405-3.277-4-3.277-4zm.05-12.5l2.086 2.086-1.414 1.414-2.086-2.086-2.086 2.086-1.414-1.414 2.086-2.086-2.086-2.086 1.414-1.414 2.086 2.086 2.086-2.086 1.414 1.414-2.086 2.086z" /></svg>
                    <div className='flex-nav'>
                    <a href={props.}><h3>Home</h3></a>
                    <a href={props.}><h3>Mens</h3></a>
                    <a href={props.}><h3>Womans</h3></a>
                    <a href={props.}><h3>Contact</h3></a>
                    <a href={props.}><h3>About</h3></a>
                    </div>
                    <div className='flex-nav'>
                        <h3>Login</h3>
                        <svg clip-rule="evenodd" width={32}fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.75 3c-.414 0-.75.336-.75.75v16.5c0 .414.336.75.75.75s.75-.336.75-.75v-16.5c0-.414-.336-.75-.75-.75z" fill-rule="nonzero" fill='#f2f2f2' /></svg>
                        <h3>Register</h3>
                    </div>
            </nav>
            <Header/>
            <HeaderMid/>
            <Footer/>
            <Help/>
            <span className='edit'>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.036 0 1.942.339 2.55.955.57.578.865 1.372.854 2.298-.016 1.383-.857 2.291-1.534 3.021z" fill='#000' /></svg>
            </span>
        </div>

    );
}


export default Home;