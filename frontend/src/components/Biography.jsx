import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h2>Why We Are</h2> <br />
          <p>
          Founded by Sneha Singh, Aakansha, and Simran Kaur <br /> <br />

As third-year students of Bachelor of Computer Applications at Sri Guru Tegh Bahadur Institute of Management and Information Technology, affiliated with Guru Gobind Singh Indraprastha University (GGSIPU), we share a collective passion for revolutionizing healthcare through technology. <br /><br />

<strong>Our Vision</strong> <br /> <br />

HealthTech Connect is born out of our desire to bridge the gap between healthcare and technology. Our platform aims to: <br />

- Foster a community of innovators, healthcare professionals, and tech enthusiasts
- Share knowledge, insights, and experiences in healthcare technology
- Develop solutions to real-world healthcare challenges
- Empower individuals to take control of their health and wellness
<br /><br />
<strong>Our Story</strong> <br /> <br />

Driven by our passion for healthcare and technology, we saw an opportunity to create a platform where individuals from diverse backgrounds could converge, share ideas, and inspire change. HealthTech Connect is our commitment to transforming the healthcare landscape, one connection at a time. <br /> <br />

<strong>Join Our Journey</strong><br /> <br />

Stay updated on our latest developments, blog posts, and community events. Together, let's shape the future of healthcare technology! <br /> 

Contact Us: [Zeecare@gmail.com]<br/> <br />

 "Connecting Healthcare and Technology for a Brighter Tomorrow"
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;
