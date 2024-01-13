

const WhyUs = () => {
  const reasonsToChoose = [
    {
      title: 'User-Friendly Interface:',
      text: 'Our website is easy to navigate and user-friendly. A clean and intuitive design can enhance the user experience, making it more likely for visitors to stay and explore.',
      image: '/images/whyUs1.jpg',
    },
    {
      title: 'Reliability and Trustworthiness:',
      text: 'Building trust by showcasing testimonials, reviews, or partnerships that demonstrate the reliability and credibility of our platform.',
      image: 'images/whyUs2.jpg',
    },
    {
      title: 'Efficiency and Speed:',
      text: 'Efficiency of our platform is excellent that helps users to find job opportunities quickly or simplifies the hiring process for employers.',
      image: 'images/whyUs3.jpg',
    },
    {
      title: 'Comprehensive Information:',
      text: "Clearly present the purpose and services offered by our platform. Provide detailed information about the platform's features, benefits, and how it addresses the needs of its users.",
      image: 'images/whyUs4.jpg',
    },
    {
      title: 'Cost-Effectiveness:',
      text: 'Our aim is to provide high level of services with minimum cost which makes user to choose this platform without any hesitation.',
      image: 'images/whyUs5.jpg',
    },
    {
      title: 'Customer Support:',
      text: 'Clearly communicate the availability of customer support services. If users have questions or encounter issues, knowing that help is readily available can be a significant factor in choosing a platform.',
      image: 'images/whyUs6.jpg',
    },
  ];

  return (
    <section id="why-choose-us">
      <h2 className="section-title">Why Choose Us</h2>

      {reasonsToChoose.map((reason, index) => (
        <div key={index} className={`content-wrapper${index % 2 === 0 ? '' : '-alternate'}`}>
          <div className="content-why_to_choose_us">
            <h3 className="content-title">{reason.title}</h3>
            <p className="content-text">{reason.text}</p>
          </div>
          {/* <div className="image">
            <img src={reason.image} alt={`Image ${index + 1}`} />
          </div> */}
        </div>
      ))}
    </section>
  );
};

export default WhyUs;
