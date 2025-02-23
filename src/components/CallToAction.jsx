import { Link } from 'react-router-dom';
import CvAphiwat from '../assets/files/CvAphiwat.pdf';

const CallToAction = () => {
  return (
    <section className='flex justify-center items-center gap-5'>
      <a
        href={CvAphiwat}
        target='_blank'
        className='p-2 rounded-md bg-gray-700 text-white text-sm font-bold hover:bg-gray-600 duration-500'
      >
        My resume
      </a>

      <Link
        to='/contact'
        className='p-2 rounded-md border border-gray-800 text-sm font-bold animate-bounce text-black hover:bg-gray-600 hover:text-white duration-500'
      >
        Contact me
      </Link>
    </section>
  );
};

export default CallToAction;
