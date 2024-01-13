
const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Person-1',
      position: 'Customer',
      text: "I found Painter through the platform, and from our initial contact to the completion of the project, the experience was seamless. Painter was not only highly skilled in his craft but also professional, punctual, and respectful of my home.",
      image: '/images/testimonial1.jpg', 
    },
    {
      name: 'Person-2',
      position: 'Labour',
      text: "The Labour Chowk platform made it easy for me to communicate with customers, discuss project details, and get a transparent quote for the work. That's why I am able to do my work with full efficiency.",
      image: '/images/testimonial2.jpg', 
    },
    {
      name: 'Person-3',
      position: 'Project Manager',
      text: "I highly recommend the Labour Chowk website for anyone looking to connect with reliable and skilled professionals. The diverse range of services offered makes it a one-stop solution for all your labor needs.",
      image: '/images/testimonial3.jpg', 
    },
  ];

  return (
    <section id="testimonials">
      <h2 className="testimonials-heading">Testimonials</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-info">
              {/* <img src={testimonial.image} alt={`Testimonial ${index + 1}`} /> */}
              <div className="testimonial-details">
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-position">{testimonial.position}</p>
              </div>
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
