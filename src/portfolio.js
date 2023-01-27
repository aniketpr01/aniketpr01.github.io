/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aniket Prajapati",
  title: "Hi all, I'm Aniket",
  subTitle: emoji(
    "A passionate engineer who always thrives to work on end to end products which develop sustainable, futuristic social and technical systems that matters.🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Okjiu43ltsNvbDaT89kh730gGUMvLALm/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/aniketpr01",
  linkedin: "https://www.linkedin.com/in/aniketpr01/",
  gmail: "anikethprajapati@gmail.com",
  facebook: "https://www.facebook.com/aniketpr01",
  medium: "https://medium.com/@aniketpr01",
  twitter: "https://twitter.com/aniketpr01",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ENGINEER WHO WANTS TO EXPLORE AND BUILD ON MULTIPLE TECH STACKS",
  skills: [
    emoji(
      "⚡ I am enthusiastic about web3 ecosystem and bullish on blockchain economy."
    ),
    emoji(
      "⚡ Have more than 9 years of demonstrated experience as Backend developer, DevOps engineer and also led the responsibilities to work with multiple teams on delivering successful projects and features."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fal fa-pepper-hot"
    },
    {
      skillName: "ansible",
      fontAwesomeClassname: "fat fa-memory"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "rabbitmq",
      fontAwesomeClassname: "fas fa-memory"
    },
    {
      skillName: "solidity",
      fontAwesomeClassname: "fab fa-hive"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Nirma University",
      logo: require("./assets/images/Nirma_University_Logo.png"),
      subHeader: "Bachelor of Electronics & Communication Engineering",
      duration: "June 2008 - June 2013"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Smart Contract Development",
      progressPercentage: "40%"
    },
    {
      Stack: "Backend/Design Development", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DevOps",
      progressPercentage: "20%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Freelance Blockchain Developer",
      company: "",
      companylogo: require("./assets/images/Freelancer.png"),
      date: "Dec 2022 – Present",
      desc: "",
      descBullets: [
        "Worked on Solidity to develop smart contracts for multiple projects and write unit test cases.",
        "Experience with Javascript, Hardhat, NodeJS, ReactJS, IPFS, Ethers.js",
        "Good understanding of Tokenomics, Consensus mechanisms, ERC standards, Oracles, Gas utilization, Security, and Auditing.",
        "Personal Projects completed on Token Exchange, Minting NFT, Staking app."
      ]
    },
    {
      role: "Automation Lead",
      company: "SecurEyes",
      companylogo: require("./assets/images/secureyes.jpeg"),
      date: "Jul 2012 – Oct 2022",
      desc: "",
      descBullets: [
        "Led the design and development of an automation module for network scan.",
        "Led the coding, testing, and deployment of modules."
      ]
    },
    {
      role: "Lead Software Engineer",
      company: "Zymr",
      companylogo: require("./assets/images/zymr.png"),
      date: "Nov 2021 – May 2022",
      descBullets: [
        "Project Komplyd(Led the development of project stories across teams and Led junior developers get on board and sail through Peer code reviews and resolution over technical debt and blockers.)",
        "Project Cytrio(Led the development of Email based workflow feature with multiple teams,Worked with scrum agile methodology and project lifecycle.)"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Resolve",
      companylogo: require("./assets/images/Resolve.png"),
      date: "Sep 2019 – Oct 2021",
      descBullets: [
        "Led the responsibilities to manage DevOps environments including VM Management and Administration(Hypervisor)",
        "Managed CI/CD pipeline, Docker containers and kubernetes test deployments"
      ]
    },
    {
      role: "Technical Lead",
      company: "Crest Data",
      companylogo: require("./assets/images/crestdata.jpeg"),
      date: "Jun 2019 – Aug 2019",
      descBullets: [
        "Led the team deliver projects based on ServiceNow.",
        "Responsible for the SCRUM/project management and customer interaction for requirement gathering and analysis"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "FixStream",
      companylogo: require("./assets/images/fixstream.png"),
      date: "OCt 2013 – May 2019",
      descBullets: [
        "Designed and Developed a CLI/API based systems for Network Discovery and Monitoring (FixStream Data-Collector) for optimal extraction, transformation, and loading of data from a wide variety of data sources. ",
        "Designed an autonomous build system for developers for continuous integration (JENKINS) and faster turnaround time for submitted code changes."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/TokenExchange.png"),
      projectName: "Token Exchange",
      projectDesc:
        "A token exchange is a platform that allows users to buy, sell, and trade various types of tokens. These tokens can represent a variety of assets, including digital currencies, digital assets, and utility tokens.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/aniketpr01/token-exchange"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mintNFT.png"),
      projectName: "Mint NFT",
      projectDesc:
        "This project mint's NFT on Goerli testnet. It generates a fairly random image, encodes it and saves it on blockchain. This will be optimized later to use IPFS(pinata)",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/aniketpr01/mint-nft"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  achievementsCards: [
    {
      title: "Ethereum Smart Contract Security",
      subtitle: "Completed Certifcation from Moralis Academy",
      image: require("./assets/images/moralis.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: []
    },
    {
      title: "Certified Kubernetes Application Developer",
      subtitle:
        "Completed Certifcation from The Cloud Native Computing Foundation",
      image: require("./assets/images/ckad.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/ee718195-3b58-448c-ae61-de39f5ee3dcc-aniket-prajapati-certified-kubernetes-application-developer-ckad-certificate.pdf"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9742042885",
  email_address: "anikethprajapati@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "aniketpr01", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
