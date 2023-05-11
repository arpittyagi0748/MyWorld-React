import image from './images/My world.png';

const Footer = () => {
    return (
        <><footer className='grid-4'>
            <div className='footer-single-el'>
                <p>Artificial Intelligence</p>
                <p>Career</p>
                <p>Insights</p>
                <p>News and Advisors</p>
                <p>Sustainability</p>
                <p>Whistleblower</p>
            </div>
            <div className='footer-single-el'>
                <p>Tersm and Conditions</p>
                <p>Data Privacy Notification</p>
                <p>Brand Protection</p>
                <p>Cookie Policy</p>
                <p>Cookie Preferences</p>
                <p>Investors</p>
            </div>
            <div className='footer-single-el'>
                <p>Container Trainig</p>
                <p>Supply Chain and Logistics</p>
                <p>Transportation Services</p>
                <p>Vessel Schedules</p>
                <p>Container Sales</p>
            </div>
            <div className='footer-single-el footer-image'>
                <img src={image} className="nav-image" />
            </div>
        </footer></>
    )
}
export default Footer;