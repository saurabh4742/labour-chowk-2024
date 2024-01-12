
const Services = () => {
    const servicesData = [
        {
          title: 'Labour',
          imageUrl: "../../../public/images/builder.jpeg",
          description: 'Labour Chowk provides an online search service where you can search labour near to your location.',
          link: '#',
        },
        {
          title: 'Mason',
          imageUrl: "../../../public/images/rajmistri.jpeg",
          description: 'We have skilled Mason who build structures. We provide such Mason to your nearest location.',
          link: 'index2.html',
        },
        {
          title: 'Carpenter',
          imageUrl: "../../../public/images/carpenter.jpeg",
          description: 'We bring skilled Carpenter to your location who does all the work according to you.',
          link: 'index3.html',
        },
        {
          title: 'Painter',
          imageUrl: "../../../public/images/farmer.jpeg",
          description: 'Get the Painting job done by our experts and reshape your dream home.',
          link: 'index4.html',
        },
        {
          title: 'Electrician',
          imageUrl: "../../../public/images//chef.jpeg",
          description: 'Our Electrician brings light to your home with their skill and experience.',
          link: 'index5.html',
        },
        {
          title: 'Plumber',
          imageUrl: "../../../public/images/gardener.jpeg",
          description: 'We have highly trained Plumber quickly tackle all your plumbing issues.',
          link: 'index5.html',
        },
    ]

    return (
        <section id="services">
          <h2 className="service-h">Our Services</h2>
          <div className="rows_services">
            {servicesData.map((service, index) => (
              <a key={index} className="click" href={service.link}>
                <div className="card">
                  <div className="imge"> <img src={service.imageUrl} alt="" /></div>
                  <div className="card-content">
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-text">{service.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
    );
}

export default Services