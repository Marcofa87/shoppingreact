import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-header">
          <h1 className="about-us-heading">About Paradise Nursery</h1>
          <p className="about-us-tagline">
            Where Green Meets Serenity
          </p>
        </div>
        
        <div className="about-us-section">
          <div className="about-us-text">
            <p>
              At Paradise Nursery, we are passionate about bringing nature closer to
              you. Our mission is to provide a wide range of high-quality plants that
              not only enhance the beauty of your surroundings but also contribute to
              a healthier and more sustainable lifestyle.
            </p>
            <p>
              From air-purifying plants to aromatic fragrant ones, we have something 
              for every plant enthusiast. Our carefully curated collection is designed 
              to bring life and freshness to any space.
            </p>
          </div>
          
          <div className="about-us-image-container">
            <img 
              src="https://images.unsplash.com/photo-1598884141471-736528256a60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Indoor plants collection" 
              className="about-us-image"
            />
          </div>
        </div>

        <div className="about-us-section reverse">
          <div className="about-us-text">
            <h2>Our Commitment to Quality</h2>
            <p>
              Our team of experts is dedicated to ensuring that each plant meets our
              strict standards of quality and care. We carefully select and nurture
              every plant in our collection to ensure it thrives in your care.
            </p>
            <p>
              Whether you're a seasoned gardener or just starting your green journey, 
              we're here to support you every step of the way. Our knowledgeable staff 
              can help you find the perfect plant for your space and lifestyle.
            </p>
          </div>
          <div className="about-us-image-container">
            <img 
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
              alt="Plant care and maintenance" 
              className="about-us-image"
            />
          </div>
        </div>

        <div className="about-us-cta">
          <h2>Join Our Green Community</h2>
          <p>
            Join us in our mission to create a greener, healthier world. At Paradise Nursery, 
            we believe that everyone deserves to experience the joy and benefits of having 
            plants in their lives.
          </p>
          <p>
            Visit us today and let us help you create your own personal paradise. 
            Together, we can make the world a more beautiful place, one plant at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
