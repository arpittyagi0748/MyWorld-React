import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const galleryStyle = {
    border: 'none',
    margin: 0,
    color: '#fff',
    fontWeight: 'bold',
    padding: '16px 20px',
    position: 'absolute',
    top: '35px',
    right: '200px',
    background: '#7bc74d',
}
const postBtnStyle = {
    border: 'none',
    margin: 0,
    color: '#fff',
    fontWeight: 'bold',
    padding: '16px 20px',
    background: '#7D4C92 ',
    width: '417px',
}
const parentDiv = {
    align: 'center',
    margin: '0px auto auto auto',
    textAlign: 'center',
    backgroundImage: "url('https://www.allthingssupplychain.com/wp-content/uploads/2021/05/GettyImages-1266433901-1.jpg')"
}
const formStyle = {
    width: '400px',
    margin: '10px auto 10px auto',
    textAlign: 'center',
    padding: '30px 40px 30px 40px',
}
const inputFields = {
    width: 'inherit',
    fontFamily: 'arial',
    padding: '6px',
}

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        localStorage.setItem('title', title);
        localStorage.setItem('message', message);
        this.getTitle.value = '';
        this.getMessage.value = '';
    }
    handleImage = (event) => {
        if (event.target.files.length > 0) {
            var src = URL.createObjectURL(event.target.files[0]);
            localStorage.setItem("image", src);
        }
    }
    render() {
        return (
            <div style={parentDiv} className="bg-center bg-cover bg-no-repeat min-h-screen">


                <hr></hr>
                <h2 style={{fontSize:"25px",fontWeight:"Bold",marginBottom:"6rem",marginTop:"2rem"}}> Upload Consignment Image</h2>
                <form onSubmit={this.handleSubmit} style={formStyle}>
                    <input style={inputFields} required type="text"
                        placeholder="Enter Consignment Id"
                        ref={(input) => this.getTitle = input}
                    /><br /><br />
                    <input style={inputFields} required type="file" accept='image/*'
                        onChange={this.handleImage}
                    /><br></br>
                    <br></br>
                    <textarea style={inputFields}
                        required rows="5" cols="28"

                        placeholder="Enter Consignment details"
                        ref={(input) => this.getMessage = input} />
                    <br /><br />
                    <button style={postBtnStyle}>Post</button>
                </form>
                <Link to='/post'>
                    <button style={galleryStyle}>
                        View Consignment
                    </button>
                </Link>
            </div>
        );
    }
}
export default PostForm;