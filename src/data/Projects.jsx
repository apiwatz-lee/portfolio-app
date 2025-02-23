import merryMatch from '../assets/projects/merryMatch.png';
import todoApp from '../assets/projects/todoApp.png';
import eCommerce from '../assets/projects/eCommerce.png';
import calculator from '../assets/projects/calculator.png';

export const projects = [
  {
    id: 1,
    name: 'ThaiCondoHomeLand App',
    description: `My sister is a real estate agent with many properties listed. She has trouble when clients ask about the available properties and their locations. So, I had the idea to create a real estate website to display the property listings for her.`,
    stack: ['React.Js', 'Tailwind CSS', 'Node.Js', 'Express', 'MongoDB'],
    url: 'https://thaicondohomeland.netlify.app/',
    img: 'https://res.cloudinary.com/dpsrbpkav/image/upload/v1720449922/Screenshot_2567-07-08_at_21.44.50_pqpkcx.png',
  },
  {
    id: 2,
    name: 'E-commerce App',
    description: `Welcome to Shopping App! This web application is designed to redefine your online shopping experience, offering a curated blend of innovation, user-friendliness, and style. Dive into a world where finding your favorite products is not just a transaction but an exploration.`,
    stack: ['React.Js', 'Tailwind CSS', 'Node.Js', 'Express', 'MongoDB'],
    url: 'https://apwshop.netlify.app/',
    img: 'https://res.cloudinary.com/dpsrbpkav/image/upload/v1702820870/xsurface/Screenshot_2566-12-17_at_20.46.33_itd8hj.png',
  },
  {
    id: 3,
    name: 'Merry Match App',
    description: `This is the final project of the TechUp Bootcamp that our team was assigned, resembling a Tinder application. I developed features for the Admin Merry Package, allowing the admin to perform CRUD operations on Merry Package products using React.js. On the backend, I designed the Rest API using Node.js Express, connecting it to PostgreSQL. The project was completed over a one-month period, following the Agile & Scrum methodology.`,
    stack: ['React.Js', 'Tailwind CSS', 'Node.Js', 'Express', 'PostgreSQL'],
    url: 'https://merry-match-client.onrender.com/',
    img: merryMatch,
  },

  {
    id: 4,
    name: 'ToDo App',
    description: `This is a TodoList program that I created to practice the basics of using ReactJs. You can add, edit, delete, or toggle tasks as completed. While you're performing CRUD operations, there will be alerts notifying you throughout. Feel free to click in and try it out.`,
    stack: ['React.Js', 'Tailwind CSS'],
    url: 'https://apwtodo.netlify.app/',
    img: todoApp,
  },

  {
    id: 5,
    name: 'Shopping Cart App',
    description: `This is a shopping cart system project that was assigned to me by TechUp Bootcamp to practice and learn programming for a shopping cart with CRUD operations and an automatic price calculation system on the frontend using React.js.`,
    stack: ['React.Js', 'Tailwind CSS'],
    url: 'https://apwcart.netlify.app/',
    img: eCommerce,
  },
  {
    id: 6,
    name: 'Calculator App',
    description: `This is a calculator project, a project I've started to practice and learn the logic of writing basic calculator programs using Javascript. You can try clicking on the calculator to test it out.`,
    stack: ['React.Js', 'Tailwind CSS'],
    url: 'https://apwcalculator.netlify.app/',
    img: calculator,
  },
];
