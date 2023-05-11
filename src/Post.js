import React, { Component } from 'react';
  
class Post extends Component {
  render() {
  return (
    <div
      style={{ width: '50%', margin: '0px auto',textAlign:"center" }}
    >
        <p style={{fontWeight:"Bold",fontSize:"30px"}}>Consignment Id :</p>
      <h2 style={{fontSize:"25px",fontWeight:"Bold"}}> {localStorage.getItem('title')}</h2>
      <img src={localStorage.getItem('image')} 
      alt={'C - language'}
      style={{marginTop:"5rem",}}
      />
      <p style={{fontWeight:"Bold",fontSize:"30px"}}>Consignment Details :</p>
      <h2 style={{fontSize:"25px",fontWeight:"Bold"}}> {localStorage.getItem('message')}</h2>
  
    </div>
  );
 }
}
export default Post;