import React from 'react';
import image from './images/My world.png';

const NavBar = () => {
    return <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
            <div className='nav-div'>
                <img src={image} className="nav-image" />
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active navbar-brand" aria-current="page" href="#">MyWorld</a>
                    </li>
                    <li>
                        <a class="nav-link active navbar-brand" aria-current="page" href="/home">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle navbar-brand" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Menu
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/about">About Us</a></li>
                            <li><a class="dropdown-item" href="/login">Employee Login</a></li>
                            <li><a class="dropdown-item" href="/contactUs">Contact Us</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                </form>
            </div>
        </div>
    </nav>
}
export default NavBar;