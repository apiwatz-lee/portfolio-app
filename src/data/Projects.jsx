import merryMatch from '../assets/projects/merryMatch.png';
import todoApp from '../assets/projects/todoApp.png';
import eCommerce from '../assets/projects/eCommerce.png';
import calculator from '../assets/projects/calculator.png';

export const projects = [
  {
    id: 1,
    name: 'Online Shopping App',
    description: `This is an online shopping application where users can register as customers. The application allows users to search for products, add them to their carts, and view detailed reports of their carts. Notably, administrators have the capability to Create, Read, Update, and Delete products. It is designed to provide a seamless experience on mobile interfaces. Excitingly, more features will be added soon, so stay tuned for updates! Admin account ID: Admin Ps: 999`,
    stack: ['React.Js', 'Tailwind CSS', 'Node.Js', 'Express', 'MongoDB'],
    url: 'https://apwxsurface.netlify.app/',
    img: 'https://res.cloudinary.com/dpsrbpkav/image/upload/v1702820870/xsurface/Screenshot_2566-12-17_at_20.46.33_itd8hj.png',
  },
  {
    id: 2,
    name: 'Merry Match App',
    description: `This is the final project of the TechUp Bootcamp that our team was assigned, resembling a Tinder application. I developed features for the Admin Merry Package, allowing the admin to perform CRUD operations on Merry Package products using React.js. On the backend, I designed the Rest API using Node.js Express, connecting it to PostgreSQL. The project was completed over a one-month period, following the Agile & Scrum methodology.`,
    stack: ['React.Js', 'Tailwind CSS', 'Node.Js', 'Express', 'PostgreSQL'],
    url: 'https://merry-match-client.onrender.com/',
    img: merryMatch,
  },

  {
    id: 3,
    name: 'ToDo App',
    description: `This is a TodoList program that I created to practice the basics of using ReactJs. You can add, edit, delete, or toggle tasks as completed. While you're performing CRUD operations, there will be alerts notifying you throughout. Feel free to click in and try it out.`,
    stack: ['React.Js', 'Tailwind CSS'],
    url: 'https://apwtodo.netlify.app/',
    img: todoApp,
  },

  {
    id: 4,
    name: 'E-Commerce App',
    description: `This is a shopping cart system project that was assigned to me by TechUp Bootcamp to practice and learn programming for a shopping cart with CRUD operations and an automatic price calculation system on the frontend using React.js.`,
    stack: ['React.Js', 'Tailwind CSS'],
    url: 'https://apwcart.netlify.app/',
    img: eCommerce,
  },
  {
    id: 5,
    name: 'Calculator App',
    description: `This is a calculator project, a project I've started to practice and learn the logic of writing basic calculator programs using Javascript. You can try clicking on the calculator to test it out.`,
    stack: ['React.Js', 'Tailwind CSS'],
    url: 'https://apwcalculator.netlify.app/',
    img: calculator,
  },
];
