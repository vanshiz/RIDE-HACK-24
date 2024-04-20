import React from 'react';
import  "./profile.css";

const ProfileCard = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="image">
          <img src="img3.jpeg" alt="" />
        </div>
        <div className="name_job">Stephen Marlo</div>
        <div className="rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <p>
          Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione
          disuja doloremque reiciendi nemo.
        </p>
        <div className="btns">
          {/* <button>Read More</button> */}
          <button>contact</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
