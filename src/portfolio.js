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
    'I am a 26 year old Computer Science graduate (University Of Waterloo). I have a passion for programming and technology. I am currently working as a senior developer at Shopify.',
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
    name: 'Tikok Web Audio Control',
    description:
      'Chrome extension to adjust the volume on tiktoks web platform.',
    stack: ['Javascript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/meeoh/Tiktok-Web-Audio-Control',
    livePreview:
      'https://chrome.google.com/webstore/detail/tiktok-audio-control/gkkbemmahdfblbnggbdbfhhdbmajpcab?hl=en-GB',
  },
  {
    name: 'Hydroelectricity Tracker',
    description:
      'Script to read the amount of hydro-electricity used in the past day',
    stack: ['Javascript', 'Puppeteer'],
    sourceCode: 'https://github.com/meeoh/Kwhydro-tracker',
  },
  {
    name: 'Slowed and Reverbed Bot',
    description:
      'Script to find new hiphop music and apply slowing and reverb effects and uploading to youtube',
    stack: ['Python'],
    sourceCode: 'https://github.com/meeoh/Slowed-And-Reverbed',
    livePreview: 'https://www.youtube.com/channel/UCXhdKuPUh7YjZp2xDdgZK5w',
  },
]

const experiences = [
  {
    name: 'Shopify (2020 - Current)',
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
