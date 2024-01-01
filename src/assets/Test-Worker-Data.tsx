const Workers = [
    {
      profession: 'Raj mistri',
      imageUrl: 'https://img.freepik.com/premium-vector/construction-staff-characters-include-foreman-painter-electrician-landscaper-carpenter_48866-385.jpg',
      name: 'Michael Johnson',
      address: '100 Brick Lane, Springfield, USA',
      experience: generateExperience(),
      status:"free"
    },
    {
      profession: 'Electrician',
      imageUrl: 'https://img.freepik.com/free-vector/young-professional-electrician-man-with-electricity-tools-cartoon-vector_1150-65409.jpg',
      name: 'Sarah Davis',
      address: '200 Wire Street, Rivertown, USA',
      experience: generateExperience(),
      status:"free"
    },
    {
      profession: 'Raj mistri',
      imageUrl: 'https://img.freepik.com/premium-vector/construction-staff-characters-include-foreman-painter-electrician-landscaper-carpenter_48866-385.jpg',
      name: 'Michael Johnson',
      address: '100 Brick Lane, Springfield, USA',
      experience: generateExperience(),
      status:"free"
    },
    {
      profession: 'Raj mistri',
      imageUrl: 'https://img.freepik.com/premium-vector/construction-staff-characters-include-foreman-painter-electrician-landscaper-carpenter_48866-385.jpg',
      name: 'Michael Johnson',
      address: '100 Brick Lane, Springfield, USA',
      experience: generateExperience(),
      status:"occupied"
    },
    {
      profession: 'Plumber',
      imageUrl: 'https://img.freepik.com/premium-vector/plumbers-with-work-tools-plumbing-service-workers_8071-1232.jpg?w=2000',
      name: 'Alex Rodriguez',
      address: '300 Pipeline Road, Waterville, USA',
      experience: generateExperience(),
      status:"free"
    },
    {
      profession: 'Welder',
      imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/013/959/597/small/welder-illustration-figure-free-vector.jpg',
      name: 'Emily Martinez',
      address: '400 Iron Street, Lakeside, USA',
      experience: generateExperience(),
      status:"free"
    },
    {
      profession: 'Carpenter',
      imageUrl: 'https://img.freepik.com/free-vector/construction-worker-uniform_1308-99642.jpg',
      name: 'Daniel Brown',
      address: '500 Wood Avenue, Hilltop, USA',
      experience: generateExperience(),
      status:"occupied"
    },
    {
      profession: 'Mason',
      imageUrl: 'https://img.freepik.com/premium-vector/stonemason-work-with-bricks-concept_118813-15215.jpg',
      name: 'Olivia White',
      address: '600 Stone Street, Summit, USA',
      experience: generateExperience(),
      status:"occupied"
    },
    {
      profession: 'Painter',
      imageUrl: 'https://img.freepik.com/free-vector/painter-worker_24877-63506.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703376000&semt=ais',
      name: 'William Taylor',
      address: '700 Brush Lane, Valleyville, USA',
      experience: generateExperience(),
      status:"occupied"
    },
    {
      profession: 'Mechanic',
      imageUrl: 'https://img.freepik.com/premium-vector/full-length-happy-repairman-with-box-toolsprofessional-mechanic-guy-expert-service-worker-flat-vector-cartoon-character-illustration_77116-2303.jpg?w=2000',
      name: 'Sophia Anderson',
      address: '800 Gear Road, Mountainview, USA',
      experience: generateExperience(),
      status:"occupied"
    },
    {
      profession: 'Landscaper',
      imageUrl: 'https://img.freepik.com/premium-vector/man-mow-lawn-garden-public-city-park-gardener-cottager-worker-character-use-grass-trimmer-landscaping_1016-12886.jpg',
      name: 'Noah Garcia',
      address: '900 Garden Street, Countryside, USA',
      experience: generateExperience(),
      status:"occupied"
    },
    {
      profession: 'Roofing',
      imageUrl: 'https://img.freepik.com/premium-vector/roof-construction-workers-characters-conduct-roofing-works-roofer-men-with-work-tools-repair-home-rooftop-tile_1016-13436.jpg',
      name: 'Ava Wilson',
      address: '1000 Shingle Avenue, Riverside, USA',
      experience: generateExperience(),
      status:"occupied"
    },
    {
      profession: 'Driver',
      imageUrl: 'https://thumbs.dreamstime.com/b/funny-driver-worker-emblem-man-dressed-plaid-shirt-vest-reflective-stripes-jeans-profession-series-77837935.jpg',
      name: 'Liam Martinez',
      address: '1100 Road Street, Lakeside, USA',
      experience: generateExperience(),
      status:"occupied"
    },
  ];
  function generateExperience() {
    return Math.floor(Math.random() * 30) + 1; // Generating random experience between 1 to 30 years
  }
  export default Workers;
  