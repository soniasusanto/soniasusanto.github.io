module.exports = {
  siteTitle: 'Sonia Susanto | Fullstack Engineer', // <title>
  manifestName: 'Sonia Susanto',
  manifestShortName: 'Portfolio', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/favicon-32x32.png',
  pathPrefix: `/ss-portfolio/`, // This path is subpath of your hosting https://domain/portfolio
  heading: 'Sonia Susanto',
  subHeading: 'Full Stack Software Engineer | Web Developer',
  // social
  socialLinks: [
    {
      style: 'brands',
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/soniasusanto',
    },
    {
      style: 'brands',
      icon: 'fa-linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/soniasusanto',
    },

    {
      style: 'solid',
      icon: 'fa-envelope',
      name: 'Email',
      url: 'mailto:soniasusanto@gmail.com',
    },
  ],
  //skills
  skills: [
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Redux' },
    { name: 'React Native' },
    { name: 'Node.js' },
    { name: 'Express.js' },
    { name: 'PostgreSQL' },
    { name: 'Sequelize' },
    { name: 'SQL' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'Github / Git' },
    { name: 'Test Driven Development' },
    { name: 'RESTful APIs' },
    { name: 'Postman' },
    { name: 'Flutter / Dart' },
    { name: 'Bootstrap' },
  ],
  projects: [
    {
      title: 'Shelter-in-Pets',
      subtitle: 'A pet adoption mobile application',
      purpose:
        'Shelter-in-Pets was built during the COVID-19 lockdown. My team and I wanted to build an application that helped people e-visit and adopt shelter dogs.',
      description:
        'The app matches user-uploaded dog images to similar adoptable dogs, allows a user to conduct filtered searches based on desired traits, and even recommends adoptable dogs based on the user’s in-app activity.',
      github: 'https://github.com/soniasusanto/shelter-in-pets',
      link: '',
      image: '',
    },
    {
      title: 'iHash',
      subtitle: 'A mobile application that generates hashtags',
      purpose:
        'Fascinated by image recognition technologies, I wanted to build an application that recognized uploaded images and generate relevant hashtags.',
      description:
        'The app was built using Flutter/Dart and Google Teachable Machine during a 4 day hackathon. While it was challenging to learn a new language and Tensorflow Lite in such a short period of time, I was pleased that I was able to incorporate a pretrained machine learning model and user login authentication flow in my mobile application.',
      github: 'https://github.com/soniasusanto/iHash',
      link: '',
      image: '',
    },
    {
      title: 'Shelter-in-Pets',
      subtitle: 'A pet adoption mobile application',
      purpose:
        'Shelter-in-Pets was built during the COVID-19 lockdown. My team and I wanted to build an application that helped people e-visit and adopt shelter dogs.',
      features:
        'The app matches user-uploaded dog images to similar adoptable dogs, allows a user to conduct filtered searches based on desired traits, and even recommends adoptable dogs based on the user’s in-app activity.',
      github: 'https://github.com/soniasusanto/shelter-in-pets',
      link: '',
      image: '',
    },
    {
      title: 'Shelter-in-Pets',
      subtitle: 'A pet adoption mobile application',
      purpose:
        'Shelter-in-Pets was built during the COVID-19 lockdown. My team and I wanted to build an application that helped people e-visit and adopt shelter dogs.',
      features:
        'The app matches user-uploaded dog images to similar adoptable dogs, allows a user to conduct filtered searches based on desired traits, and even recommends adoptable dogs based on the user’s in-app activity.',
      github: 'https://github.com/soniasusanto/shelter-in-pets',
      link: '',
      image: '',
    },
  ],
};
