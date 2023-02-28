//  icons
import {
  FiGithub,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiBriefcase,
} from "react-icons/fi";


// projects images
import Project1 from "./assets/img/projects/lf_gf.gif";
import Project2 from "./assets/img/projects/zara.gif";
import Project4 from "./assets/img/projects/glamox.gif";
import Project3 from "./assets/img/projects/sugar.gif";
// import Project5 from "./assets/img/projects/lf.png";
// import Project6 from "./assets/img/projects/lf.png";

// skills images
import SkillImg1 from "./assets/img/skills/html-1.svg";
import SkillImg2 from "./assets/img/skills/css-3.svg";
import SkillImg3 from "./assets/img/skills/js2.svg";
import SkillImg4 from "./assets/img/skills/mongodb-icon-1.svg";
import SkillImg5 from "./assets/img/skills/imageEx.webp";
import SkillImg6 from "./assets/img/skills/reactjs.svg";
import SkillImg7 from "./assets/img/skills/nodejs.svg";
import SkillImg8 from "./assets/img/skills/redux.svg";

// skills and tools images
import SkillImg9 from "./assets/img/skills/postman.svg";
import SkillImg10 from "./assets/img/skills/heroku.svg";
import SkillImg11 from "./assets/img/skills/netlify.svg";
import SkillImg12 from "./assets/img/skills/chakra-ui.svg";
import SkillImg13 from "./assets/img/skills/npm.svg";
import SkillImg14 from "./assets/img/skills/tailwind.svg";
import SkillImg15 from "./assets/img/skills/git.svg";
import SkillImg16 from "./assets/img/skills/vscode.svg";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "skills",
    href: "skills",
  },
  {
    name: "projects",
    href: "portfolio",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/tejasvi-bishnoi-81294b14a/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/TejasBishnoi21",
  },
];


// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Lifestyle Clone",
    category: "UI/UX design",
    techStack: "HTML | CSS | VanillaJS",
    description:
      "Lifestyle is a renowned fashion retail e-commerce website. Individually cloned the website and implemented features including sorting, filtering, adding products to the cart and checkout",
    deployedLink: "https://random-store-tejas.netlify.app/",
    github: "https://github.com/TejasBishnoi21/Project_lifestyle.com",
  },
  {
    id: "2",
    image: Project2,
    techStack: "HTML | CSS | VanillaJS",
    name: "Zara Clone",
    category: "web development",
    description:
      "Cloned the website of Zara, a leading global brand. Collaborated with a team and contributed to implementing various striking features like video background and designed the product page and add-to-cart functionality",
    deployedLink: "https://quiet-begonia-859735.netlify.app/",
    github: "https://github.com/shitalkumar87/moldy-care-8778.git",
  },
  {
    id: "3",
    image: Project3,
    name: "Masai Cosmetics",
    techStack: "HTML | CSS | JS |  React | Chakra UI",
    category: "UI/UX design",
    description:
      "Designed the landing page of a cosmetic website inspired by a leading cosmetics brand Sugar. Learned to use npm packages in React and helped the team in debugging various issues",
    deployedLink: "https://masai-cosmetics.netlify.app/",
    github: "https://github.com/avnishsingh0/sugarcosmetics-clone.git",
  },
  {
    id: "4",
    image: Project4,
    techStack: "HTML | CSS | Typescript | React | Redux | Chakra UI",
    name: "Glamox",
    category: "branding",
    description:
      "Collaborated with a team in individually building the admin side of a cosmetics e-commerce website. Implemented Redux store in the project and developed product page having functionality to persist the search params with filters",
    deployedLink: "https://exquisite-tapioca-454087.netlify.app/",
    github: "https://github.com/rajeshdeo/axiomatic-yard-6345.git",
  },
  // {
  //   id: '5',
  //   image: Project5,
  //   techStack: 'HTML | CSS | JavaScipt',
  //   name: 'project name 5',
  //   category: 'web development',
  //   description:'Designed and Developed a e-commerce clothing website inspired by lifestyle.com',
  //   deployedLink:'https://random-store-tejas.netlify.app/',
  //   github:'https://github.com/TejasBishnoi21/Project_lifestyle.com'
  // },
  // {
  //   id: '6',
  //   image: Project6,
  //   techStack: 'HTML | CSS | JavaScipt',
  //   name: 'project name 6',
  //   category: 'web development',
  //   description:'Designed and Developed a e-commerce clothing website inspired by lifestyle.com',
  //   deployedLink:'https://random-store-tejas.netlify.app/',
  //   github:'https://github.com/TejasBishnoi21/Project_lifestyle.com'
  // },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "web development",
  },
  {
    name: "branding",
  },
];

// skill primary
export const skills = [
  {
    image: SkillImg1,
    size: "40%",
    name:"HTML5"
  },
  {
    image: SkillImg2,
    size: "40%",
    name:"CSS3"
  },
  {
    image: SkillImg3,
    size: "40%",
    name:"JavaScript"
  },
  {
    image: SkillImg4,
    size: "41%",
    name:"MongoDB"
  },
  {
    image: SkillImg5,
    size: "40%",
    name:"Express"
  },
  {
    image: SkillImg6,
    size: "40%",
    name:"ReactJs"
  },
  {
    image: SkillImg7,
    size: "40%",
    name:"NodeJs"
  },
  {
    image: SkillImg8,
    size: "40%",
    name:"Redux"
  },
];

// Skills and tools
export const skills2 = [
  {
    image: SkillImg9,
    size: "50%",
    name:"Postman"
  },
  {
    image: SkillImg10,
    size: "37%",
    name:"Heroku"
  },
  {
    image: SkillImg11,
    size: "40%",
    name:"Netlify"
  },
  {
    image: SkillImg12,
    size: "40%",
    name:"ChakraUI"
  },
  {
    image: SkillImg13,
    size: "40%",
    name:"NPM"
  },
  {
    image: SkillImg14,
    size: "40%",
    name:"TailwindCSS"
  },
  {
    image: SkillImg15,
    size: "40%",
    name:"Git"
  },
  {
    image: SkillImg16,
    size: "40%",
    name:"VS Code"
  },
];


// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you-",
    description: "tejas.vishnoi@gmail.com",
    phone: "+91 9557745099",
  },
  {
    icon: <FiBriefcase/>,
    title: "Connect with me ",
    icon1: <FiLinkedin/>,
    icon2: <FiGithub/>,
    github:"https://github.com/TejasBishnoi21",
    linkedin:"https://www.linkedin.com/in/tejasvi-bishnoi-81294b14a/",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Delhi, India",
    remote: "#OpenToWork",
  },
];
