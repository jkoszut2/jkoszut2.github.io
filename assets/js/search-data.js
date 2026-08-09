// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of projects across coursework, research, and hobbies.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Below is an overview of the courses I have been involved with teaching, spanning from the high school level to the graduate level.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-title",
          title: 'Title',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/example_book.html";
            },},{id: "news-today-is-the-start-of-my-position-working-as-a-calibration-and-controls-engineer-for-red-bull-powertrains",
          title: 'Today is the start of my position working as a Calibration and Controls...',
          description: "",
          section: "News",},{id: "news-i-attended-the-iav-conference-on-ignition-systems-for-gasoline-engines-in-berlin-germany",
          title: 'I attended the IAV Conference on Ignition Systems for Gasoline Engines in Berlin,...',
          description: "",
          section: "News",},{id: "news-i-visited-the-systems-control-and-optimization-laboratory-syscop-in-freiburg-germany-led-by-professor-moritz-diehl-and-gave-a-talk-on-my-master-s-research",
          title: 'I visited the Systems Control and Optimization Laboratory (SYSCOP) in Freiburg, Germany led...',
          description: "",
          section: "News",},{id: "news-today-marks-t-0-for-my-phd-journey",
          title: 'Today marks t=0 for my PhD journey!',
          description: "",
          section: "News",},{id: "news-today-i-begin-my-summer-internship-at-blue-origin-in-the-lunar-guidance-navigation-and-control-gnc-team",
          title: 'Today I begin my summer internship at Blue Origin in the Lunar Guidance,...',
          description: "",
          section: "News",},{id: "projects-loss-landscape-geometry-in-deep-learning",
          title: 'Loss Landscape Geometry in Deep Learning',
          description: "An investigation into the geometric properties of the loss landscape in deep neural networks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-mixed-integer-programming-for-av-velocity-planning",
          title: 'Mixed-Integer Programming for AV Velocity Planning',
          description: "Planning energy-efficient velocity profiles with awareness of traffic light timing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-model-predictive-control-for-plug-in-hybrid-energy-management",
          title: 'Model Predictive Control for Plug-In Hybrid Energy Management',
          description: "Details coming soon!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-formula-sae-co2-emissions-optimization",
          title: 'Formula SAE CO2 Emissions Optimization',
          description: "Optimizing the tradeoff between lap time and CO2 emissions for the UIUC FSAE racecar.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-formula-1-optimal-energy-management",
          title: 'Formula 1 Optimal Energy Management',
          description: "Details coming soon!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-interior-point-solver-for-conic-programming",
          title: 'Interior-Point Solver for Conic Programming',
          description: "A minimal implementation of an interior-point solver with homogeneous self-dual embedding along with the implementation of both Mehrotra&#39;s and Gondzio&#39;s corrector methods.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ipm_solver.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6B%6F%73%7A%75%74@%6D%69%74.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jkoszut2", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/joe-koszut-9a6173230", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=TTLW_-MAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
