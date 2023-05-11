import React from 'react';
import image1 from './images/container-g4b884efd5_1920.jpg';
import image2 from './images/dock-g09a4cfcd0_1920.jpg';
import image3 from './images/port-g419c8eb56_1920.jpg';

const Carousel = () => {
    return <>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active div-image-size">
                    <img src={image1} class="d-block w-100 nav-image" alt="..."/>
                </div>
                <div class="carousel-item div-image-size">
                    <img src={image2} class="d-block w-100 nav-image" alt="..."/>
                </div>
                <div class="carousel-item div-image-size">
                    <img src={image3} class="d-block w-100 nav-image" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </>
}

export default Carousel;