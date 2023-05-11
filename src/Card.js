import React from "react";
import image1 from './images/digital-solutions_illustration.svg';
import image2 from './images/financial-services_illustration.svg';
import image3 from './images/supply-chain-logistics_illustration.svg';
import image4 from './images/transportation-services_illustration.svg';
import { BiMessageDetail } from 'react-icons/bi';

const Card = () => {
    return <>
        <div className="grid-4">
            <div class="card" style={{ width: "18rem" }}>
                <img src={image1} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Transportation Services</h5>
                    <p class="card-text">
                        Learn more about our shipping services from 300 ports around the world. Maersk can connect your business globally and we make shipping simple.
                    </p>
                </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
                <img src={image2} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Supply Chain and Logistics</h5>
                    <p class="card-text">
                        We focus on solving your supply chain needs from end to end, taking the complexity out of container shipping for you.
                    </p>
                </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
                <img src={image3} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Financial Services</h5>
                    <p class="card-text">
                        As experts in global integrated logistics, we provide strong financial and compensation solutions to meet your end to end supply chain needs.
                    </p>
                </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
                <img src={image4} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Digital Solutions</h5>
                    <p class="card-text">
                        Our tailored online services take the complexity out of shipping by letting you instantly book, manage and track shipments, submit Verified Gross Mass information and much more.
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default Card;