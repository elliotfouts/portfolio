import Assets from '../../assets';

export default {
  WorkArr: [
    // selected
    {
      image: Assets.Codify.screenshotDevice,
      imageAlt: Assets.Codify.alt,
      title: 'Codify',
      chips: ['MERN', 'REST API', 'Oauth', 'Web Scraping'],
      githubUrl: 'https://github.com/yankidank/Codify',
      demoUrl: 'https://codify.works/',
      description: 'A website to help software developers organize and track their progress throughout the job application process',
    },
    {
      image: Assets.Grocerease.screenshotDevice,
      imageAlt: Assets.Grocerease.alt,
      title: 'Grocer-ease',
      chips: ['MERN', 'GraphQL', 'PWA', 'Web Scraping'],
      githubUrl: 'https://github.com/elliotfouts/grocer-ease',
      demoUrl: 'https://drive.google.com/file/d/1AVGWSh-yev6b12TczLxtEjiAsRRYwOWS/view?usp=sharing',
      description: 'A simple, intuitive PWA to help families create, modify, and share grocery lists ',
    },
    {
      image: Assets.GitConnected.screenshotDevice,
      imageAlt: Assets.GitConnected.alt,
      title: 'GitConnected',
      chips: ['MERN', 'GraphQL', 'Sockets', 'Oauth', 'PWA'],
      githubUrl: '',
      demoUrl: '',
      description: 'An app to help software developers find contract work, new teammates, and open-source projects',
    },
    // not selected 
    {
      image: Assets.WeatherTracker.screenshotDevice,
      imageAlt: Assets.WeatherTracker.alt,
      title: 'Weather Tracker',
      chips: ['JQuery', 'AJAX', 'Bootstrap', 'HTML Canvas'],
      githubUrl: '',
      demoUrl: '',
      description: 'A website to check weather anywhere in the world',
    },
    {
      image: Assets.JavascriptQuiz.screenshotDevice,
      imageAlt: Assets.JavascriptQuiz.alt,
      title: 'Javascript Quiz',
      chips: ['Javascript', 'HTML', 'CSS'],
      githubUrl: '',
      demoUrl: '',
      description: 'A small quiz on some bascis of javascript',
    },
  ]
}