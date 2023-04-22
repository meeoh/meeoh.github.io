const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://meeoh.github.io/',
  // title: '.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Shameel Abdullah',
  role: 'Fullstack Developer',
  description:
    'I am a 28 year old Computer Science graduate (University Of Waterloo). I have a passion for programming and technology. I am currently working as a senior developer at Shopify.',
  resume: 'https://meeoh.github.io/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/shameel-abdullah-07a4ab85/',
    github: 'https://github.com/meeoh',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Translation Collapser',
    description:
      'Chrome extension for githubs code review process that collapses and marks files that match certain criteria as viewed',
    stack: ['Javascript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/meeoh/Translation-Collapser',
    livePreview:
      'https://chrome.google.com/webstore/detail/github-file-collapser/edoefkpbifgpalopdbikblemhdjhbkja?hl=en',
  },
  {
    name: 'Jeopardy Labs Scraper',
    description:
      'A tool to scrape a popular jeopardy database and format in a certain json structure that is accepted by a fan-made version of Jeopardy that is available on steam',
    stack: ['Svelte', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/meeoh/Jeopardy-Labs-Scraper',
  },
  {
    name: 'Hydro Reporter',
    description:
      'Script to read the amount of hydro-electricity used in the past day',
    stack: ['Javascript', 'Puppeteer'],
    sourceCode: 'https://github.com/meeoh/Kwhydro-tracker',
  },
]

const experiences = [
  {
    name: 'AngelList (2022 - Current)',
    description:
      'I focus on AngelList build, a platform that provides resources, tools, and services to help startup founders and teams launch and grow their businesses',
    livePreview: 'https://www.angellist.com/startups',
  },
  {
    name: 'Shopify (2020 - 2022)',
    description:
      'At Shopify I work as a full stack developer, I initially started on the merchant analytics team where I helped our merchants gain a better unstanding of their business. As of recently I have moved teams and am helping improve our internal processes. ',
    livePreview: 'https://www.shopify.com/',
  },
  {
    name: 'Applyboard (2018 - 2019)',
    description:
      'I spent around two years at Applyboard, where I was a full stack developer helping build a platform that assists international students in persuing education in North America',
    livePreview: 'https://www.applyboard.com/',
  },
  {
    name: 'eSentire (2017 - 2018)',
    description:
      'I began working as a full-time Software Developer for eSentire in May of 2017. An Easy to use field productivity tools that delivers powerful results.',
    livePreview: 'https://www.esentire.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Git',
  'CI/CD',
  'Jest',
  'Rails',
  'Python',
  'Docker',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'shameel.abdullah@gmail.com',
}

export { header, about, projects, experiences, skills, contact }
