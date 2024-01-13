
const Services = () => {
    const servicesData = [
        {
          title: 'Gardener',
          imageUrl: "https://i.ibb.co/j8Bs392/gardener.jpg",
          description: 'Gardener Chowk provides an online search service where you can search Gardener near to your location.',
          link: '#',
        },
        {
          title: 'Farmer',
          imageUrl: "https://i.ibb.co/84PSsRR/farmer.jpg",
          description: 'We have skilled Farmer who build structures. We provide such Farmer to your nearest location.',
          link: 'index2.html',
        },
        {
          title: 'Carpenter',
          imageUrl: "https://i.ibb.co/JnRCBnB/carpenter.jpg",
          description: 'We bring skilled Carpenter to your location who does all the work according to you.',
          link: 'index3.html',
        },
        {
          title: 'Delivery boy',
          imageUrl: "https://i.ibb.co/vQ1S2sm/deliveryboy.jpg",
          description: 'Get the Painting job done by our experts and reshape your dream home.',
          link: 'index4.html',
        },
        {
          title: 'Sweeper',
          imageUrl: "https://i.ibb.co/1RZzZsF/sweeper.jpg",
          description: 'Our Sweeper brings light to your home with their skill and experience.',
          link: 'index5.html',
        },
        {
          title: 'Silai',
          imageUrl: "https://i.ibb.co/nzhXdCx/silai.jpg",
          description: 'We have highly trained Silai quickly tackle all your silaing issues.',
          link: 'index5.html',
        },
    ]

    return (
        <section id="services">
          <h2 className="service-h">Our Services</h2>
          <div className="rows_services">
            {servicesData.map((service, index) => (
              <a key={index} className="click">
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