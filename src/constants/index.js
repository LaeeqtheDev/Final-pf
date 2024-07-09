import { meta, shopify, starbucks, tesla } from "../assets/images";
import  upwork from "../assets/images/upwork.svg";
import  rex from "../assets/images/rex.png";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
  
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
 
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
   
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Upwork",
        icon: upwork,
        iconBg: "#b7e4c7",
        date: "March 2019 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
   
    {
        title: "Web Developer",
        company_name: "Rex Tech",
        icon: rex,
        iconBg: "#accbe1",
        date: "Aug 2022 - Sept 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Ecommerce Sanity',
        description: 'Developed a web application that is a Full Stack E-commerce Online Store with backend CMS, SANITY.IO.',
        link: 'https://github.com/LaeeqtheDev/ecommerce-sanity',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone, called GROOVE',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/LaeeqtheDev/Groove',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/LaeeqtheDev/carwheel',
    },
 
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Ninja Player one stop for Athletes',
        description: 'Developed a web application for Sports Events, facilitating  searches and connecting players with organizers.',
        link: 'https://github.com/LaeeqtheDev/ninjaplayer',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-green',
        name: 'LOCOPRO',
        description: 'Locopro is a state-of-the-art real estate platform developed using the MERN stack, featuring comprehensive property listings, an AI chatbot for personalized assistance, and an intuitive user dashboard. Built entirely by a full-stack web developer, Locopro ensures a seamless and efficient property search experience.',
        link: 'https://locopro-client.vercel.app/',
    },
{
        iconUrl: car,
        theme: 'btn-back-red',
        name: 'Routelane',
        description: 'Routelane leverages Next.js to deliver a streamlined truck dispatching solution. Featuring real-time route optimization, dispatch management tools, and a responsive interface, Routelane enhances efficiency in logistics. Developed by a skilled full-stack web developer, it ensures seamless operations for transport businesses.',
        link: 'https://routelane.vercel.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-yellow',
        name: 'BigHeads -NFT',
        description: 'App that leverages NFT to automatically generate AND let users buy.',
        link: 'https://github.com/LaeeqtheDev/NFT-Website',
    },
     {
        iconUrl: threads,
        theme: 'btn-back-black',
        name: 'Aura',
        description: 'Crafted with Next.js, our landing page for beauty products seamlessly blends elegant design with high-performance features',
        link: 'https://auraherbal.vercel.app/',
    }
];

