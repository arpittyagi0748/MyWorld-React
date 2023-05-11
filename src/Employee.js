import image from './images/My world.png';
import image2 from './images/WhatsApp Image 2022-07-24 at 6.05.40 PM.jpeg';
import Footer from './Footer'

const employee = () => {
    return <><nav class="navbar navbar-expand-lg bg-dark">
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
                            <li><a class="dropdown-item" href="/contactUs">Contact Us</a></li>
                            <li><a class="dropdown-item" href="/home">Logout</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: "50rem" }}>
                    <li class="nav-item">
                        <a class="nav-link active navbar-brand" aria-current="page" href="#">Arpit Tyagi</a>
                    </li>
                </ul>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: "0rem" }}>
                    <li class="nav-item">
                        <img src={image2}
                            style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }} />
                    </li>
                </ul>
                <form class="d-flex" role="search">
                </form>
            </div>
        </div>
    </nav>
        <div style={{width:"35%",margin:"5rem auto",display:"flex",flexDirection:"column",rowGap:"2rem",justifyItems:"center" }} >
            <div className="flex items-center justify-center" style={{ width: "30rem", height: "8rem", borderRadius: "20px", border: "1px red solid",backgroundColor:"red" }}>
                <a href="/customer-details" style={{color:"white",textAlign:"center",fontSize:"3rem"}}>Customer Details</a>
            </div>
            <div className="flex items-center justify-center" style={{ width: "30rem", height: "8rem", borderRadius: "20px", border: "1px red solid",backgroundColor:"red"  }}>
            <a href="/consignment-details" style={{color:"white",textAlign:"center",fontSize:"3rem"}}>Consignment  Details</a>
            </div>
            <div className="flex items-center justify-center" style={{ width: "30rem", height: "8rem", borderRadius: "20px", border: "1px red solid" ,backgroundColor:"red" }}>
            <a href="/consignment-image" style={{color:"white",textAlign:"center",fontSize:"3rem"}}>Consignment  Image</a>
            </div>
        </div>
        <Footer />
    </>
}

export default employee;