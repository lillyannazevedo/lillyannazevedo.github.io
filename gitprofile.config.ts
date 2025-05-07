// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'lillyannazevedo', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['lillyannazevedo/MICROBIOMETUTORIAL-', 'lillyannazevedo/sectionreport'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Presentation: Leishmania donovani',
          description:
            'A project which explores the life cycle, transmission, symptoms, diseases, diagnosis, treatment, and global impact of Leishmania donovani.',
          imageUrl:
            'ps://github.com/lillyannazevedo/lillyannazevedo.github.io/raw/main/Screen%20Shot%202025-04-30%20at%209.05.12%20AM.png',
          link: 'https://github.com/lillyannazevedo/lillyannazevedo.github.io/raw/main/Leishmania%20donovani.pdf',
        },
        {
          title: 'Disease Paper: Listeria monocytogenes',
          description: 
            'This paper examines the characteristics, clinical symptoms, high risk populations, and prevention strategies of Listeria monocytogenes.',
          imageUrl:
            'https://github.com/lillyannazevedo/lillyannazevedo.github.io/raw/main/Screen%20Shot%202025-04-30%20at%209.11.05%20AM.png',
          link: 'https://github.com/lillyannazevedo/lillyannazevedo.github.io/raw/main/Disease%20Paper%20(1).pdf',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Lillyanna Azevedo',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'lillyannazevedo@aol.com',
  },
  resume: {
    fileUrl:
      'https://github.com/lillyannazevedo/lillyannazevedo.github.io/rob/main/Bioinformatics%20CV%20(1).pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Bioinformatics',
    'Excel',
    'BLAST',
    'GitHub',
  ],
  experiences: [
    {
      company: 'Hilmar Cheese Company',
      position: 'Tour Guide',
      from: 'July 2021',
      to: 'Present',
      companyLink: 'https://www.hilmar.com/',
    },
    {
      company: 'Emanuel Medical Center',
      position: 'Medical Scribe',
      from: 'March 2025',
      to: 'Present',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'California State University Stanislaus',
      degree: 'B.S in Biological Sciences',
      from: '2021',
      to: '2025',
    },
  ],
  publications: [
    {
      title: 'Genomic Insights into Elizabethkingia miricola DSM 14571: Virulence, Resistance, and
Zoonotic Potential',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcement',
      authors: 'Lillyanna Azevedo, Julian Garcia, Priscilla Garcia, Taylor Hedley, Tricia Van Laar',
      link: 'https://github.com/lillyannazevedo/lillyannazevedo.github.io/raw/main/MRA_Paper.pdf',
      description:
        'In preparation: Isolated from a Russian space station, Elizabethkingia miricola DSM 14571 is a
Gram-negative opportunistic and antibiotic resistant human pathogen. Sequencing its genome
reveals 4,064 genes, including virulence factors and secondary metabolic clusters. This research
could offer further insight into pathogenicity, environmental resilience, resistance mechanisms,
and zoonotic risks.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Valentine',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
